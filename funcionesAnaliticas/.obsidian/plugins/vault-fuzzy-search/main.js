const { Modal, Notice, Plugin, setIcon } = require("obsidian");

const MAX_RESULTS = 100;

function normalized(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function fuzzyScore(query, value) {
  const q = normalized(query).trim();
  const text = normalized(value);
  if (!q) return 0;

  const exact = text.indexOf(q);
  if (exact !== -1) {
    return 900 + q.length * 18 - Math.min(exact, 160);
  }

  const terms = q.split(/\s+/).filter(Boolean);
  let total = 0;
  for (const term of terms) {
    const index = text.indexOf(term);
    if (index === -1) return Number.NEGATIVE_INFINITY;
    const wordStart = index === 0 || /[\s/_\-.#()[\]]/.test(text[index - 1]);
    total += 180 + term.length * 18 + (wordStart ? 35 : 0) - Math.min(index, 120) * 0.25;
  }
  return total;
}

function normalizedWithMap(value) {
  let text = "";
  const map = [];
  for (let index = 0; index < value.length; index += 1) {
    const piece = value[index]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    for (const character of piece) {
      text += character;
      map.push(index);
    }
  }
  return { text, map };
}

function fuzzyMatchRanges(query, value) {
  const q = normalized(query).trim();
  if (!q || !value) return [];
  const candidate = normalizedWithMap(value);
  const matched = new Set();
  for (const term of q.split(/\s+/).filter(Boolean)) {
    let from = 0;
    while (from <= candidate.text.length - term.length) {
      const match = candidate.text.indexOf(term, from);
      if (match === -1) break;
      for (let index = match; index < match + term.length; index += 1) {
        matched.add(candidate.map[index]);
      }
      from = match + Math.max(1, term.length);
    }
  }

  const positions = [...matched].sort((a, b) => a - b);
  if (!positions.length) return [];
  const ranges = [];
  let start = positions[0];
  let end = start + 1;
  for (let index = 1; index < positions.length; index += 1) {
    if (positions[index] <= end) {
      end = Math.max(end, positions[index] + 1);
    } else {
      ranges.push({ start, end });
      start = positions[index];
      end = start + 1;
    }
  }
  ranges.push({ start, end });
  return ranges;
}

function appendHighlightedText(element, value, query) {
  const ranges = fuzzyMatchRanges(query, value);
  if (!ranges.length) {
    element.setText(value);
    return;
  }
  let cursor = 0;
  for (const range of ranges) {
    if (range.start > cursor) element.appendText(value.slice(cursor, range.start));
    element.createEl("mark", {
      cls: "vault-fuzzy-match",
      text: value.slice(range.start, range.end),
    });
    cursor = range.end;
  }
  if (cursor < value.length) element.appendText(value.slice(cursor));
}

function excerptAroundTerms(value, terms) {
  const candidate = normalizedWithMap(value);
  const windows = [];
  for (const term of terms) {
    const match = candidate.text.indexOf(term);
    if (match === -1) continue;
    const originalStart = candidate.map[match];
    const originalEnd = candidate.map[match + term.length - 1] + 1;
    windows.push({
      start: Math.max(0, originalStart - 70),
      end: Math.min(value.length, originalEnd + 110),
    });
  }
  if (!windows.length) return value.slice(0, 360);

  windows.sort((a, b) => a.start - b.start);
  const merged = [];
  for (const window of windows) {
    const previous = merged[merged.length - 1];
    if (previous && window.start <= previous.end + 35) {
      previous.end = Math.max(previous.end, window.end);
    } else {
      merged.push({ ...window });
    }
  }
  return merged
    .map((window) => {
      const prefix = window.start > 0 ? "…" : "";
      const suffix = window.end < value.length ? "…" : "";
      return `${prefix}${value.slice(window.start, window.end).trim()}${suffix}`;
    })
    .join("  …  ");
}

function plainText(markdown) {
  return markdown
    .replace(/^\s*>+\s?/gm, "")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/!?(\[([^\]]*)\])\([^)]*\)/g, "$2")
    .replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, "$2")
    .replace(/[*_~`]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function makePassages(content) {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const passages = [];
  for (let i = 0; i < lines.length; i += 1) {
    const current = plainText(lines[i]);
    if (!current) continue;
    passages.push({ line: i, text: current });
  }
  return passages;
}

class ScopeModal extends Modal {
  constructor(app, initialPaths, onApply) {
    super(app);
    this.selected = initialPaths === null
      ? new Set(app.vault.getMarkdownFiles().map((file) => file.path))
      : new Set(initialPaths);
    this.onApply = onApply;
    this.query = "";
  }

  onOpen() {
    this.modalEl.addClass("vault-fuzzy-scope-modal");
    this.titleEl.setText("Archivos incluidos");

    const intro = this.contentEl.createEl("p", {
      cls: "vault-fuzzy-scope-intro",
      text: "Elegí las notas donde se buscará. Podés buscar una carpeta y seleccionar todos sus archivos visibles.",
    });
    intro.setAttr("aria-live", "polite");

    const search = this.contentEl.createEl("input", {
      type: "search",
      placeholder: "Filtrar por nombre o carpeta…",
      attr: { "aria-label": "Filtrar lista de archivos" },
    });
    search.addEventListener("input", () => {
      this.query = normalized(search.value);
      this.renderFiles();
    });

    const actions = this.contentEl.createDiv({ cls: "vault-fuzzy-scope-actions" });
    const selectVisible = actions.createEl("button", { text: "Incluir visibles" });
    selectVisible.addEventListener("click", () => {
      this.filteredFiles().forEach((file) => this.selected.add(file.path));
      this.renderFiles();
    });
    const removeVisible = actions.createEl("button", { text: "Quitar visibles" });
    removeVisible.addEventListener("click", () => {
      this.filteredFiles().forEach((file) => this.selected.delete(file.path));
      this.renderFiles();
    });
    const all = actions.createEl("button", { text: "Todo el vault" });
    all.addEventListener("click", () => {
      this.app.vault.getMarkdownFiles().forEach((file) => this.selected.add(file.path));
      this.renderFiles();
    });
    this.countEl = actions.createSpan();

    this.listEl = this.contentEl.createDiv({ cls: "vault-fuzzy-file-list" });

    const footer = this.contentEl.createDiv({ cls: "vault-fuzzy-scope-footer" });
    const cancel = footer.createEl("button", { text: "Cancelar" });
    cancel.addEventListener("click", () => this.close());
    const apply = footer.createEl("button", { text: "Aplicar filtro", cls: "mod-cta" });
    apply.addEventListener("click", () => {
      if (!this.selected.size) {
        new Notice("Incluí al menos un archivo para buscar.");
        return;
      }
      const allFiles = this.app.vault.getMarkdownFiles();
      const result = this.selected.size === allFiles.length ? null : [...this.selected];
      this.onApply(result);
      this.close();
    });

    this.renderFiles();
    search.focus();
  }

  filteredFiles() {
    return this.app.vault.getMarkdownFiles()
      .filter((file) => !this.query || normalized(file.path).includes(this.query))
      .sort((a, b) => a.path.localeCompare(b.path, "es"));
  }

  renderFiles() {
    this.listEl.empty();
    const allCount = this.app.vault.getMarkdownFiles().length;
    this.countEl.setText(`${this.selected.size} de ${allCount}`);
    const files = this.filteredFiles();
    if (!files.length) {
      this.listEl.createDiv({ cls: "vault-fuzzy-empty", text: "No hay archivos coincidentes" });
      return;
    }
    for (const file of files) {
      const label = this.listEl.createEl("label", { cls: "vault-fuzzy-file" });
      const checkbox = label.createEl("input", { type: "checkbox" });
      checkbox.checked = this.selected.has(file.path);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) this.selected.add(file.path);
        else this.selected.delete(file.path);
        this.countEl.setText(`${this.selected.size} de ${allCount}`);
      });
      const info = label.createDiv();
      info.createDiv({ cls: "vault-fuzzy-file-name", text: file.basename });
      info.createDiv({ cls: "vault-fuzzy-file-path", text: file.parent?.path || "/" });
    }
  }

  onClose() {
    this.contentEl.empty();
  }
}

class FuzzySearchModal extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.results = [];
    this.selectedIndex = 0;
    this.searchTimer = null;
  }

  async onOpen() {
    this.modalEl.addClass("vault-fuzzy-search-modal");
    this.plugin.openModals.add(this);
    this.renderShell();
    this.inputEl.value = this.plugin.lastQuery || "";
    await this.plugin.ensureIndex();
    this.updateStatus();
    this.runSearch();
    this.restoreState();
  }

  restoreState() {
    const saved = this.plugin.lastState;
    if (!saved) return;
    if (this.results.length) {
      this.selectedIndex = Math.min(Math.max(0, saved.selectedIndex | 0), this.results.length - 1);
      this.refreshSelection();
    }
    this.resultsEl.scrollTop = saved.scrollTop || 0;
  }

  renderShell() {
    this.titleEl.setText("Búsqueda difusa");
    const root = this.contentEl;
    root.empty();
    root.addClass("vault-fuzzy-search-view");

    const header = root.createDiv({ cls: "vault-fuzzy-header" });
    this.statusEl = header.createDiv({ cls: "vault-fuzzy-status" });

    const scopeButton = header.createEl("button", { cls: "vault-fuzzy-scope-button" });
    setIcon(scopeButton, "list-filter");
    this.scopeTextEl = scopeButton.createSpan();
    scopeButton.setAttr("aria-label", "Elegir archivos incluidos");
    scopeButton.addEventListener("click", () => this.openScopePicker());

    const searchWrap = root.createDiv({ cls: "vault-fuzzy-input-wrap" });
    setIcon(searchWrap.createSpan({ cls: "vault-fuzzy-input-icon" }), "search");
    this.inputEl = searchWrap.createEl("input", {
      type: "search",
      placeholder: "Buscar nombres, rutas o contenido…",
      attr: { "aria-label": "Búsqueda difusa del vault", autocomplete: "off" },
    });
    this.inputEl.addEventListener("input", () => this.scheduleSearch());
    this.inputEl.addEventListener("keydown", (event) => this.onKeyDown(event));

    this.resultsEl = root.createDiv({ cls: "vault-fuzzy-results" });
    this.resultsEl.setAttr("role", "listbox");
    this.updateScopeLabel();
    setTimeout(() => this.inputEl.focus(), 0);
  }

  openScopePicker() {
    new ScopeModal(this.app, this.plugin.settings.includedPaths, async (paths) => {
      this.plugin.settings.includedPaths = paths;
      await this.plugin.saveData(this.plugin.settings);
      this.updateScopeLabel();
      this.runSearch();
    }).open();
  }

  updateScopeLabel() {
    const included = this.plugin.settings.includedPaths;
    this.scopeTextEl.setText(included === null ? "Todo el vault" : `${included.length} archivos`);
  }

  updateStatus(extra = "") {
    const count = this.plugin.index.size;
    this.statusEl.setText(extra || `${count} notas indexadas`);
  }

  scheduleSearch() {
    window.clearTimeout(this.searchTimer);
    this.searchTimer = window.setTimeout(() => this.runSearch(), 70);
  }

  runSearch() {
    const query = this.inputEl?.value.trim() || "";
    const allowed = this.plugin.settings.includedPaths === null
      ? null
      : new Set(this.plugin.settings.includedPaths);
    this.results = query ? this.plugin.search(query, allowed) : [];
    this.selectedIndex = 0;
    this.renderResults(query);
  }

  renderResults(query) {
    this.resultsEl.empty();
    if (!query) {
      this.updateStatus();
      const empty = this.resultsEl.createDiv({ cls: "vault-fuzzy-welcome" });
      setIcon(empty.createSpan(), "scan-search");
      empty.createEl("p", { text: "Escribí uno o más términos. Todos deben aparecer completos en la nota." });
      return;
    }
    if (!this.results.length) {
      this.updateStatus("0 resultados");
      this.resultsEl.createDiv({ cls: "vault-fuzzy-empty", text: "No se encontraron coincidencias en los archivos incluidos." });
      return;
    }

    this.results.forEach((result, index) => {
      const row = this.resultsEl.createDiv({
        cls: `vault-fuzzy-result${index === this.selectedIndex ? " is-selected" : ""}`,
        attr: { role: "option", "aria-selected": index === this.selectedIndex ? "true" : "false" },
      });
      const icon = row.createSpan({ cls: "vault-fuzzy-result-icon" });
      setIcon(icon, result.kind === "file" ? "file-text" : "text-search");
      const body = row.createDiv({ cls: "vault-fuzzy-result-body" });
      const top = body.createDiv({ cls: "vault-fuzzy-result-top" });
      const title = top.createDiv({ cls: "vault-fuzzy-result-title" });
      appendHighlightedText(title, result.file.basename, query);
      top.createDiv({ cls: "vault-fuzzy-result-line", text: result.line === null ? "archivo" : `línea ${result.line + 1}` });
      const path = body.createDiv({ cls: "vault-fuzzy-result-path" });
      appendHighlightedText(path, result.file.path, query);
      if (result.excerpt) {
        const excerpt = body.createDiv({ cls: "vault-fuzzy-result-excerpt" });
        appendHighlightedText(excerpt, result.excerpt, query);
      }
      row.addEventListener("mouseenter", () => {
        this.selectedIndex = index;
        this.refreshSelection();
      });
      row.addEventListener("click", (event) => this.openResult(result, event.metaKey || event.ctrlKey ? "right" : "left"));
    });
    this.updateStatus(`${this.results.length}${this.results.length === MAX_RESULTS ? "+" : ""} resultados`);
  }

  refreshSelection() {
    const rows = this.resultsEl.querySelectorAll(".vault-fuzzy-result");
    rows.forEach((row, index) => {
      row.toggleClass("is-selected", index === this.selectedIndex);
      row.setAttr("aria-selected", index === this.selectedIndex ? "true" : "false");
    });
    rows[this.selectedIndex]?.scrollIntoView({ block: "nearest" });
  }

  onKeyDown(event) {
    if (event.key === "ArrowDown" && this.results.length) {
      event.preventDefault();
      this.selectedIndex = Math.min(this.results.length - 1, this.selectedIndex + 1);
      this.refreshSelection();
    } else if (event.key === "ArrowUp" && this.results.length) {
      event.preventDefault();
      this.selectedIndex = Math.max(0, this.selectedIndex - 1);
      this.refreshSelection();
    } else if (event.key === "Enter" && this.results[this.selectedIndex]) {
      event.preventDefault();
      const target = event.metaKey || event.ctrlKey ? "right" : "left";
      void this.openResult(this.results[this.selectedIndex], target);
    } else if (event.key === "Escape") {
      if (this.inputEl.value) {
        event.preventDefault();
        event.stopPropagation();
        this.inputEl.value = "";
        this.runSearch();
      }
    }
  }

  modalDocument() {
    if (this.inputEl && this.inputEl.ownerDocument) return this.inputEl.ownerDocument;
    return typeof document !== "undefined" ? document : null;
  }

  // Leaves of the main area in the window that holds the search modal.
  // Popout windows live under workspace.floatingSplit; sidebars are never visited.
  // NOTE: this walks the tree with plain recursion. Do NOT collect via
  // iterateRootLeaves with an expression callback: Obsidian halts that
  // iteration as soon as the callback returns a truthy value (e.g. push()'s length).
  windowLeaves() {
    const workspace = this.app.workspace;
    const doc = this.modalDocument();
    const ordered = [];
    const walk = (node) => {
      if (!node) return;
      // WorkspaceLeaf has getViewState/openFile; splits and tab groups do not.
      if (typeof node.getViewState === "function" && typeof node.openFile === "function") {
        ordered.push(node);
        return;
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(workspace.rootSplit);
    const floating = workspace.floatingSplit;
    if (floating && Array.isArray(floating.children)) floating.children.forEach(walk);
    if (!doc) return ordered;
    return ordered.filter((leaf) => {
      const el = leaf.containerEl;
      return el && el.ownerDocument === doc;
    });
  }

  targetAnchor(target) {
    const workspace = this.app.workspace;
    const leaves = this.windowLeaves();
    if (target === "right") {
      if (leaves.length > 1) return { anchor: leaves[leaves.length - 1], fresh: false };
      const base = leaves[0] || workspace.getLeaf(false);
      return { anchor: workspace.createLeafBySplit(base, "vertical"), fresh: true };
    }
    return { anchor: leaves[0] || workspace.getLeaf(false), fresh: false };
  }

  newTabInGroup(group) {
    const workspace = this.app.workspace;
    try {
      return workspace.createLeafInParent(group, group.children.length);
    } catch (error) {
      workspace.setActiveLeaf(group.children[group.children.length - 1], { focus: false });
      return workspace.getLeaf("tab");
    }
  }

  targetGroup(target) {
    const leaves = this.windowLeaves();
    if (!leaves.length) return null;
    if (target === "right" && leaves.length > 1) return leaves[leaves.length - 1].parent;
    return leaves[0].parent;
  }

  findOpenLeaf(filePath, target) {
    // Each key only sees its own pane: Enter -> left pane, Cmd/Ctrl+Enter -> right pane.
    const group = this.targetGroup(target);
    const matches = group
      ? this.windowLeaves().filter((leaf) => leaf.parent === group && leaf.view?.file?.path === filePath)
      : [];
    if (!matches.length) return null;
    return matches.find((leaf) => leaf.parent?.currentTab === leaf) || matches[matches.length - 1];
  }

  positionLine(leaf, line) {
    if (line === null || line === undefined) return;
    // setEphemeralState is mode-aware: Reading view scrolls to the line and
    // highlights it; edit/Live Preview views move the cursor and scroll.
    const place = () => {
      if (!leaf.view) return false;
      leaf.setEphemeralState?.({ line, focus: true });
      const editor = leaf.view.editor;
      if (!editor) return true;
      const at = Math.min(line, Math.max(0, editor.lineCount() - 1));
      editor.setCursor({ line: at, ch: 0 });
      editor.scrollIntoView({ from: { line: at, ch: 0 }, to: { line: at, ch: 0 } }, true);
      return true;
    };
    if (!place()) {
      window.setTimeout(place, 100);
      window.setTimeout(place, 300);
    }
  }

  async openResult(result, target = "left") {
    // Already open anywhere in the main area: reuse that tab instead of duplicating it.
    const openLeaf = this.findOpenLeaf(result.file.path, target);
    if (openLeaf) {
      await this.app.workspace.revealLeaf(openLeaf);
      this.app.workspace.setActiveLeaf(openLeaf, { focus: true });
      this.positionLine(openLeaf, result.line);
      this.close();
      return;
    }
    const { anchor, fresh } = this.targetAnchor(target);
    // A pane that already exists gets a NEW TAB so the open note is never replaced.
    const leaf = fresh ? anchor : this.newTabInGroup(anchor.parent);
    const openState = result.line === null
      ? { active: true }
      : { active: true, eState: { line: result.line, ch: 0 } };
    await leaf.openFile(result.file, openState);
    this.positionLine(leaf, result.line);
    this.close();
  }

  onClose() {
    window.clearTimeout(this.searchTimer);
    this.plugin.lastQuery = this.inputEl ? this.inputEl.value : this.plugin.lastQuery || "";
    this.plugin.lastState = {
      selectedIndex: this.selectedIndex,
      scrollTop: this.resultsEl ? this.resultsEl.scrollTop : 0,
    };
    this.plugin.openModals.delete(this);
    this.contentEl.empty();
  }
}

module.exports = class VaultFuzzySearchPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({ includedPaths: null }, await this.loadData());
    this.index = new Map();
    this.indexPromise = null;
    this.reindexTimers = new Map();
    this.openModals = new Set();
    this.lastQuery = "";
    this.lastState = null;

    this.addRibbonIcon("scan-search", "Abrir búsqueda difusa", () => this.openSearch());
    this.addCommand({
      id: "open-vault-fuzzy-search",
      name: "Abrir búsqueda difusa",
      callback: () => this.openSearch(),
    });

    this.registerEvent(this.app.vault.on("create", (file) => this.scheduleReindex(file)));
    this.registerEvent(this.app.vault.on("modify", (file) => this.scheduleReindex(file)));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      this.index.delete(file.path);
      if (this.settings.includedPaths !== null) {
        this.settings.includedPaths = this.settings.includedPaths.filter((path) => path !== file.path);
        void this.saveData(this.settings);
      }
    }));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      this.index.delete(oldPath);
      if (this.settings.includedPaths !== null) {
        const index = this.settings.includedPaths.indexOf(oldPath);
        if (index !== -1) this.settings.includedPaths[index] = file.path;
        void this.saveData(this.settings);
      }
      this.scheduleReindex(file);
    }));

    this.app.workspace.onLayoutReady(() => void this.ensureIndex());
  }

  onunload() {
    [...this.openModals].forEach((modal) => modal.close());
    this.reindexTimers.forEach((timer) => window.clearTimeout(timer));
  }

  openSearch() {
    new FuzzySearchModal(this.app, this).open();
  }

  async ensureIndex() {
    if (this.indexPromise) return this.indexPromise;
    this.indexPromise = (async () => {
      const files = this.app.vault.getMarkdownFiles();
      const concurrency = 8;
      let cursor = 0;
      const worker = async () => {
        while (cursor < files.length) {
          const file = files[cursor++];
          await this.indexFile(file);
        }
      };
      await Promise.all(Array.from({ length: Math.min(concurrency, files.length) }, worker));
    })();
    try {
      await this.indexPromise;
    } finally {
      this.indexPromise = null;
    }
  }

  async indexFile(file) {
    if (file.extension !== "md") return;
    try {
      const content = await this.app.vault.cachedRead(file);
      const passages = makePassages(content);
      this.index.set(file.path, {
        file,
        pathText: `${file.basename} ${file.path}`,
        contentText: normalized(plainText(content)),
        passages,
      });
    } catch (error) {
      console.warn("Vault Fuzzy Search: could not index", file.path, error);
    }
  }

  scheduleReindex(file) {
    if (!file || file.extension !== "md") return;
    const existing = this.reindexTimers.get(file.path);
    if (existing) window.clearTimeout(existing);
    const timer = window.setTimeout(async () => {
      this.reindexTimers.delete(file.path);
      await this.indexFile(file);
      for (const modal of this.openModals) modal.runSearch();
    }, 250);
    this.reindexTimers.set(file.path, timer);
  }

  search(query, allowedPaths) {
    const results = [];
    const terms = normalized(query).trim().split(/\s+/).filter(Boolean);
    for (const document of this.index.values()) {
      if (allowedPaths && !allowedPaths.has(document.file.path)) continue;

      const pathScore = fuzzyScore(query, document.pathText);
      if (Number.isFinite(pathScore)) {
        results.push({
          file: document.file,
          kind: "file",
          line: null,
          excerpt: "Coincidencia en el nombre o la ruta",
          score: pathScore + 120,
        });
      }

      const hasEveryTerm = terms.every((term) => document.contentText.includes(term));
      if (hasEveryTerm) {
        const passageMatches = document.passages
          .map((passage) => {
            const text = normalized(passage.text);
            const covered = terms.filter((term) => text.includes(term));
            const score = covered.reduce((sum, term) => {
              const index = text.indexOf(term);
              return sum + 180 + term.length * 18 - Math.min(index, 120) * 0.25;
            }, 0);
            return { ...passage, covered, score };
          })
          .filter((passage) => passage.covered.length)
          .sort((a, b) => b.covered.length - a.covered.length || b.score - a.score);

        const directMatches = passageMatches.filter((passage) => passage.covered.length === terms.length);
        if (directMatches.length) {
          for (const passage of directMatches) {
            results.push({
              file: document.file,
              kind: "content",
              line: passage.line,
              excerpt: excerptAroundTerms(passage.text, terms),
              score: fuzzyScore(query, passage.text),
            });
          }
          continue;
        }

        const remaining = new Set(terms);
        const selected = [];
        while (remaining.size && selected.length < 3) {
          const best = passageMatches
            .filter((passage) => !selected.includes(passage))
            .map((passage) => ({
              passage,
              newTerms: passage.covered.filter((term) => remaining.has(term)),
            }))
            .filter((candidate) => candidate.newTerms.length)
            .sort((a, b) => b.newTerms.length - a.newTerms.length || b.passage.score - a.passage.score)[0];
          if (!best) break;
          selected.push(best.passage);
          best.newTerms.forEach((term) => remaining.delete(term));
        }

        const first = selected[0] || passageMatches[0];
        const contentScore = fuzzyScore(query, document.contentText);
        results.push({
          file: document.file,
          kind: "content",
          line: first?.line ?? 0,
          excerpt: selected
            .map((passage) => excerptAroundTerms(passage.text, passage.covered))
            .join("  …  "),
          score: Number.isFinite(contentScore)
            ? contentScore + (selected.length === 1 ? 140 : 0)
            : selected.reduce((sum, passage) => sum + passage.score, 0),
        });
      }
    }
    return results
      .sort((a, b) => b.score - a.score || a.file.path.localeCompare(b.file.path, "es"))
      .slice(0, MAX_RESULTS);
  }
};
