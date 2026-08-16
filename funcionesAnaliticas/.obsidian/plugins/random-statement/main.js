const {
  ItemView,
  MarkdownRenderer,
  Modal,
  Notice,
  Plugin,
  TFile,
  setIcon,
} = require("obsidian");

// Kept in the entry file because Obsidian loads community plugins most
// reliably as a single self-contained JavaScript bundle.
const STATEMENT_TYPES = new Set([
  "theorem",
  "proposition",
  "lemma",
  "corollary",
  "exercise",
]);

function calloutHeader(line) {
  const match = line.match(/^(>+)\s*\[!([^\]]+)\][+-]?\s*(.*)$/i);
  if (!match) return null;
  return {
    depth: match[1].length,
    type: match[2].trim().toLowerCase(),
    title: match[3].trim(),
  };
}

function stripQuote(line, depth) {
  let result = line;
  for (let i = 0; i < depth; i += 1) result = result.replace(/^>\s?/, "");
  return result;
}

function trimBlankLines(lines) {
  let start = 0;
  let end = lines.length;
  while (start < end && !lines[start].trim()) start += 1;
  while (end > start && !lines[end - 1].trim()) end -= 1;
  return lines.slice(start, end);
}

function proofSteps(markdown) {
  const lines = markdown.split("\n");
  const steps = [];
  let current = [];
  let inDisplayMath = false;

  const flush = () => {
    const cleaned = trimBlankLines(current);
    if (cleaned.length) {
      cleaned[0] = cleaned[0].replace(/^\s*(?:\d+[.)]|[-*+])\s+/, "");
      steps.push(cleaned.join("\n"));
    }
    current = [];
  };

  for (const line of lines) {
    const delimiterCount = (line.match(/\$\$/g) || []).length;
    const beginsStep = !inDisplayMath && /^\s*(?:\d+[.)]|[-*+])\s+\S/.test(line);
    if (beginsStep && current.length) flush();
    current.push(line);
    if (delimiterCount % 2 === 1) inDisplayMath = !inDisplayMath;
  }
  flush();
  if (steps.length > 1) return steps;

  const paragraphs = markdown
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
  return paragraphs.length ? paragraphs : steps;
}

function parseStatements(markdown, filePath = "") {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const statements = [];

  for (let i = 0; i < lines.length; i += 1) {
    const header = calloutHeader(lines[i]);
    if (!header || header.depth !== 1 || !STATEMENT_TYPES.has(header.type)) continue;

    const startLine = i + 1;
    const body = [];
    const proofs = [];
    let currentProof = null;
    let j = i + 1;

    for (; j < lines.length; j += 1) {
      if (!lines[j].startsWith(">")) break;
      const nested = calloutHeader(lines[j]);
      if (nested && nested.depth === 1) break;
      if (nested && nested.depth >= 2 && nested.type === "proof") {
        currentProof = { lines: [] };
        proofs.push(currentProof);
        continue;
      }
      if (currentProof && /^>>/.test(lines[j])) {
        currentProof.lines.push(stripQuote(lines[j], 2));
      } else if (!currentProof) {
        body.push(stripQuote(lines[j], 1));
      }
    }

    const statementMarkdown = trimBlankLines(body).join("\n");
    if (statementMarkdown) {
      const proofMarkdown = proofs
        .map((proof) => trimBlankLines(proof.lines).join("\n"))
        .filter(Boolean)
        .join("\n\n");
      statements.push({
        type: header.type,
        title: header.title || header.type[0].toUpperCase() + header.type.slice(1),
        statementMarkdown,
        proofSteps: proofMarkdown ? proofSteps(proofMarkdown) : [],
        filePath,
        line: startLine,
      });
    }
    i = Math.max(i, j - 1);
  }
  return statements;
}

const VIEW_TYPE = "random-statement-view";

class FilePickerModal extends Modal {
  constructor(app, initialPaths, onSubmit) {
    super(app);
    this.selected = new Set(initialPaths);
    this.onSubmit = onSubmit;
    this.query = "";
  }

  onOpen() {
    this.modalEl.addClass("random-statement-picker");
    this.titleEl.setText("Choose study notes");

    const toolbar = this.contentEl.createDiv({ cls: "random-statement-picker-toolbar" });
    const search = toolbar.createEl("input", {
      type: "search",
      placeholder: "Search Markdown files…",
      attr: { "aria-label": "Search Markdown files" },
    });
    search.addEventListener("input", () => {
      this.query = search.value.toLowerCase();
      this.renderFiles();
    });

    const actions = this.contentEl.createDiv({ cls: "random-statement-picker-actions" });
    const allButton = actions.createEl("button", { text: "Select visible" });
    allButton.addEventListener("click", () => {
      this.filteredFiles().forEach((file) => this.selected.add(file.path));
      this.renderFiles();
    });
    const clearButton = actions.createEl("button", { text: "Clear" });
    clearButton.addEventListener("click", () => {
      this.selected.clear();
      this.renderFiles();
    });
    this.countEl = actions.createSpan();

    this.listEl = this.contentEl.createDiv({ cls: "random-statement-file-list" });

    const footer = this.contentEl.createDiv({ cls: "random-statement-picker-footer" });
    const cancel = footer.createEl("button", { text: "Cancel" });
    cancel.addEventListener("click", () => this.close());
    const start = footer.createEl("button", { text: "Start studying", cls: "mod-cta" });
    start.addEventListener("click", () => {
      if (!this.selected.size) {
        new Notice("Choose at least one Markdown file.");
        return;
      }
      this.onSubmit([...this.selected]);
      this.close();
    });

    this.renderFiles();
    search.focus();
  }

  filteredFiles() {
    return this.app.vault
      .getMarkdownFiles()
      .filter((file) => !this.query || file.path.toLowerCase().includes(this.query))
      .sort((a, b) => a.path.localeCompare(b.path));
  }

  renderFiles() {
    this.listEl.empty();
    this.countEl.setText(`${this.selected.size} selected`);
    const files = this.filteredFiles();
    if (!files.length) {
      this.listEl.createDiv({ cls: "random-statement-empty", text: "No matching notes" });
      return;
    }

    for (const file of files) {
      const label = this.listEl.createEl("label", { cls: "random-statement-file" });
      const checkbox = label.createEl("input", { type: "checkbox" });
      checkbox.checked = this.selected.has(file.path);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) this.selected.add(file.path);
        else this.selected.delete(file.path);
        this.countEl.setText(`${this.selected.size} selected`);
      });
      const text = label.createDiv();
      text.createDiv({ cls: "random-statement-file-name", text: file.basename });
      text.createDiv({ cls: "random-statement-file-path", text: file.parent?.path || "/" });
    }
  }

  onClose() {
    this.contentEl.empty();
  }
}

class RandomStatementView extends ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.current = null;
    this.visibleSteps = 0;
  }

  getViewType() {
    return VIEW_TYPE;
  }

  getDisplayText() {
    return "Random statement";
  }

  getIcon() {
    return "dices";
  }

  async onOpen() {
    this.handleInternalLinkClick = (event) => {
      const link = event.target.closest?.("a.internal-link");
      if (!link || !this.containerEl.contains(link)) return;

      const linktext = link.dataset.href || link.getAttribute("href");
      if (!linktext) return;

      event.preventDefault();
      event.stopPropagation();
      const openInNewLeaf = event.metaKey || event.ctrlKey || event.button === 1;
      void this.app.workspace.openLinkText(
        linktext,
        this.current?.filePath || "",
        openInNewLeaf,
      );
    };

    this.handleInternalLinkHover = (event) => {
      const link = event.target.closest?.("a.internal-link");
      if (!link || !this.containerEl.contains(link)) return;

      const linktext = link.dataset.href || link.getAttribute("href");
      if (!linktext) return;

      this.app.workspace.trigger("hover-link", {
        event,
        source: VIEW_TYPE,
        hoverParent: this,
        targetEl: link,
        linktext,
        sourcePath: this.current?.filePath || "",
      });
    };

    this.containerEl.addEventListener("click", this.handleInternalLinkClick);
    this.containerEl.addEventListener("mouseover", this.handleInternalLinkHover);
    await this.render();
  }

  async onClose() {
    this.containerEl.removeEventListener("click", this.handleInternalLinkClick);
    this.containerEl.removeEventListener("mouseover", this.handleInternalLinkHover);
  }

  async showRandom() {
    const statements = await this.plugin.collectStatements();
    if (!statements.length) {
      this.current = null;
      await this.render();
      new Notice("No theorem, proposition, lemma, corollary, or exercise callouts were found.");
      return;
    }

    let choices = statements;
    if (this.current && statements.length > 1) {
      choices = statements.filter(
        (item) => !(item.filePath === this.current.filePath && item.line === this.current.line),
      );
    }
    this.current = choices[Math.floor(Math.random() * choices.length)];
    this.visibleSteps = 0;
    await this.render();
  }

  async renderMarkdown(markdown, target) {
    await MarkdownRenderer.render(
      this.app,
      markdown,
      target,
      this.current?.filePath || "",
      this,
    );
  }

  async render() {
    const root = this.containerEl.children[1];
    root.empty();
    root.addClass("random-statement-view");

    const header = root.createDiv({ cls: "random-statement-header" });
    const heading = header.createDiv();
    heading.createEl("h2", { text: "Random statement" });
    heading.createDiv({
      cls: "random-statement-subtitle",
      text: `${this.plugin.settings.selectedFiles.length} study note${this.plugin.settings.selectedFiles.length === 1 ? "" : "s"}`,
    });
    const choose = header.createEl("button", {
      cls: "clickable-icon",
      attr: { "aria-label": "Choose study notes" },
    });
    setIcon(choose, "list-checks");
    choose.addEventListener("click", () => this.plugin.openFilePicker());

    if (!this.plugin.settings.selectedFiles.length) {
      const empty = root.createDiv({ cls: "random-statement-welcome" });
      empty.createEl("h3", { text: "Choose your notes first" });
      empty.createEl("p", {
        text: "Pick the Markdown files you want to study. The plugin will draw from mathematical statement callouts in those notes.",
      });
      const button = empty.createEl("button", { text: "Choose notes", cls: "mod-cta" });
      button.addEventListener("click", () => this.plugin.openFilePicker());
      return;
    }

    if (!this.current) {
      const start = root.createDiv({ cls: "random-statement-welcome" });
      start.createEl("p", { text: "Ready when you are." });
      const button = start.createEl("button", { text: "Give me a statement", cls: "mod-cta" });
      button.addEventListener("click", () => this.showRandom());
      return;
    }

    const card = root.createDiv({ cls: "random-statement-card" });
    card.createDiv({ cls: "random-statement-kind", text: this.current.type });
    const titleRepeatsType =
      this.current.title.trim().toLowerCase() === this.current.type.trim().toLowerCase();
    if (!titleRepeatsType) card.createEl("h3", { text: this.current.title });
    const body = card.createDiv({ cls: "random-statement-markdown markdown-rendered" });
    await this.renderMarkdown(this.current.statementMarkdown, body);

    const controls = root.createDiv({ cls: "random-statement-controls" });
    const another = controls.createEl("button", { text: "Another statement", cls: "mod-cta" });
    another.addEventListener("click", () => this.showRandom());

    if (this.current.proofSteps.length) {
      const proofButton = controls.createEl("button", {
        text: this.visibleSteps ? "Show next step" : "Show proof",
      });

      const proof = root.createDiv({ cls: "random-statement-proof" });
      if (!this.visibleSteps) proof.addClass("is-hidden");
      const proofHeader = proof.createDiv({ cls: "random-statement-proof-header" });
      proofHeader.createEl("h3", { text: "Proof" });
      const proofCount = proofHeader.createSpan({
        text: `${this.visibleSteps} / ${this.current.proofSteps.length} steps`,
      });
      const proofStepsEl = proof.createDiv({ cls: "random-statement-proof-steps" });

      const appendStep = async (index) => {
        const step = proofStepsEl.createDiv({ cls: "random-statement-step" });
        step.createDiv({ cls: "random-statement-step-number", text: String(index + 1) });
        const stepBody = step.createDiv({ cls: "random-statement-markdown markdown-rendered" });
        await this.renderMarkdown(this.current.proofSteps[index], stepBody);
      };

      for (let i = 0; i < this.visibleSteps; i += 1) {
        await appendStep(i);
      }

      const markComplete = () => {
        proof.createDiv({ cls: "random-statement-complete", text: "Proof complete" });
        proofButton.setText("Proof complete");
        proofButton.disabled = true;
      };

      if (this.visibleSteps === this.current.proofSteps.length) markComplete();

      proofButton.addEventListener("click", async () => {
        if (this.visibleSteps >= this.current.proofSteps.length) return;
        proofButton.disabled = true;
        proof.removeClass("is-hidden");

        const nextIndex = this.visibleSteps;
        this.visibleSteps += 1;
        await appendStep(nextIndex);
        proofCount.setText(`${this.visibleSteps} / ${this.current.proofSteps.length} steps`);

        if (this.visibleSteps === this.current.proofSteps.length) {
          markComplete();
        } else {
          proofButton.setText("Show next step");
          proofButton.disabled = false;
        }
      });
    } else {
      controls.createSpan({ cls: "random-statement-no-proof", text: "No proof in this note" });
    }

    const source = controls.createEl("button", { cls: "random-statement-source" });
    source.setText(`${this.current.filePath} · line ${this.current.line}`);
    source.addEventListener("click", () => this.openSource());
  }

  async openSource() {
    const file = this.app.vault.getAbstractFileByPath(this.current.filePath);
    if (!(file instanceof TFile)) return;
    const leaf = this.app.workspace.getLeaf("tab");
    await leaf.openFile(file, { eState: { line: this.current.line - 1 } });
    this.app.workspace.setActiveLeaf(leaf, { focus: true });
  }
}

module.exports = class RandomStatementPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({ selectedFiles: [] }, await this.loadData());

    this.registerView(VIEW_TYPE, (leaf) => new RandomStatementView(leaf, this));
    this.registerHoverLinkSource(VIEW_TYPE, {
      display: "Random statement",
      defaultMod: true,
    });
    this.addRibbonIcon("dices", "Random statement", () => this.activateView());
    this.addCommand({
      id: "open-random-statement",
      name: "Open study view",
      callback: () => this.activateView(),
    });
    this.addCommand({
      id: "choose-random-statement-files",
      name: "Choose study notes",
      callback: () => this.openFilePicker(),
    });
  }

  async activateView() {
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    this.app.workspace.revealLeaf(leaf);
  }

  openFilePicker() {
    new FilePickerModal(this.app, this.settings.selectedFiles, async (paths) => {
      this.settings.selectedFiles = paths;
      await this.saveData(this.settings);
      await this.activateView();
      const view = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
      if (view instanceof RandomStatementView) {
        view.current = null;
        await view.render();
      }
    }).open();
  }

  async collectStatements() {
    const statements = [];
    const validPaths = [];
    for (const path of this.settings.selectedFiles) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!(file instanceof TFile) || file.extension !== "md") continue;
      validPaths.push(path);
      const markdown = await this.app.vault.cachedRead(file);
      statements.push(...parseStatements(markdown, path));
    }
    if (validPaths.length !== this.settings.selectedFiles.length) {
      this.settings.selectedFiles = validPaths;
      await this.saveData(this.settings);
    }
    return statements;
  }

  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
  }
};
