const { Plugin, MarkdownView } = require("obsidian");

// Callout types treated as "proof" for Left/Right collapse/expand.
// Obsidian lowercases the [!Type] marker into data-callout.
const PROOF_TYPES = new Set(["proof", "dem", "demostracion", "demostración"]);

// How many callouts RePág/AvPág (PageUp/PageDown) jump per press.
const PAGE_JUMP = 3;

module.exports = class CalloutNavigationPlugin extends Plugin {
  async onload() {
    this.selected = null;
    // Last focused callout index per note path, so coming back to a tab
    // resumes where you left off instead of restarting at the top.
    this.memory = new Map();
    this.hookedDocs = new WeakSet();

    // Bound once so every window document (main + pop-outs) shares them.
    this.keyHandler = (e) => this.onKeyDown(e);
    this.pointerHandler = (e) => this.onPointerDown(e);

    this.hookWindowDocs();
    this.app.workspace.onLayoutReady(() => this.hookWindowDocs());

    // Pop-out (floating) windows get their own document: hook it too.
    // hookWindowDocs rescans, so this works regardless of the event payload.
    this.registerEvent(
      this.app.workspace.on("window-open", () => this.hookWindowDocs()),
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.restoreOnReturn()),
    );

    this.addCommand({
      id: "select-next-callout",
      name: "Select next callout",
      callback: () => this.step(1),
    });
    this.addCommand({
      id: "select-previous-callout",
      name: "Select previous callout",
      callback: () => this.step(-1),
    });
    this.addCommand({
      id: "collapse-proof-in-selected-callout",
      name: "Collapse proof in selected callout",
      callback: () => this.setProofs(false),
    });
    this.addCommand({
      id: "expand-proof-in-selected-callout",
      name: "Expand proof in selected callout",
      callback: () => this.setProofs(true),
    });

    this.register(() => this.clearSelection());
  }

  // ---------- multi-window support ----------

  // Attach our listeners to the main document and every pop-out window's
  // document (each Obsidian window has its own). Idempotent.
  hookWindowDocs() {
    const docs = new Set();
    try {
      if (typeof document !== "undefined" && document) docs.add(document);
    } catch (_error) {
      // ignore
    }
    try {
      const leaves = this.app.workspace.getLeavesOfType("markdown");
      for (const leaf of leaves) {
        const doc =
          leaf && leaf.view && leaf.view.containerEl
            ? leaf.view.containerEl.ownerDocument
            : null;
        if (doc) docs.add(doc);
      }
    } catch (_error) {
      // workspace not ready yet; onLayoutReady/window-open will retry
    }
    for (const doc of docs) this.hookDocument(doc);
  }

  hookDocument(doc) {
    if (!doc || this.hookedDocs.has(doc)) return;
    this.hookedDocs.add(doc);
    doc.addEventListener("keydown", this.keyHandler, true);
    doc.addEventListener("pointerdown", this.pointerHandler, true);
    this.register(() => {
      doc.removeEventListener("keydown", this.keyHandler, true);
      doc.removeEventListener("pointerdown", this.pointerHandler, true);
    });
  }

  // Cross-window safe element check: instanceof fails for nodes from a
  // pop-out window's document, so duck-type instead.
  isElement(o) {
    return !!o && o.nodeType === 1 && typeof o.closest === "function";
  }

  // Resolve the note view from the event target's own window/leaf, falling
  // back to the active view. getActiveViewOfType alone is unreliable for
  // pop-out windows.
  viewForEvent(target) {
    try {
      if (this.isElement(target)) {
        const leafEl = target.closest(".workspace-leaf");
        if (leafEl) {
          const leaves = this.app.workspace.getLeavesOfType("markdown");
          for (const leaf of leaves) {
            if (leaf && leaf.containerEl === leafEl && leaf.view) {
              return leaf.view;
            }
          }
        }
      }
    } catch (_error) {
      // fall through to active view
    }
    return this.app.workspace.getActiveViewOfType(MarkdownView);
  }

  // ---------- event handling ----------

  onKeyDown(e) {
    if (
      e.key !== "ArrowUp" &&
      e.key !== "ArrowDown" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "PageUp" &&
      e.key !== "PageDown"
    ) {
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;

    const target = e.target;
    if (this.isElement(target)) {
      // Never steal arrows from dialogs, menus, prompts, or form fields.
      if (
        target.closest(
          ".modal, .prompt, .suggestion-container, .menu, input, textarea, select",
        )
      ) {
        return;
      }
    }

    const view = this.viewForEvent(target);
    if (!view || !view.contentEl) return;
    // Only act when the keypress belongs to that note's tab: its content,
    // its header/chrome, or the unfocused body. Anything focused in another
    // pane (file explorer, search, another leaf) keeps default keys.
    const isDoc = !!target && target.nodeType === 9;
    const inNote =
      isDoc ||
      (this.isElement(target) &&
        view.containerEl &&
        view.containerEl.contains(target));
    if (!inNote) return;

    const outers = this.getOuterCallouts(view);
    if (outers.length === 0) return;

    // Reading view only: in Live Preview / Source the arrows always keep
    // their normal text-editing behavior.
    if (!this.isReadingMode(view)) return;

    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "PageUp" ||
      e.key === "PageDown"
    ) {
      const delta =
        e.key === "ArrowDown"
          ? 1
          : e.key === "ArrowUp"
            ? -1
            : e.key === "PageDown"
              ? PAGE_JUMP
              : -PAGE_JUMP;
      const next = this.neighbor(view, outers, delta);
      if (!next) return;
      this.select(view, outers, next, true);
      e.preventDefault();
      e.stopPropagation();
    } else {
      // Left/Right: only hijack when the selected block actually contains a
      // proof callout; otherwise leave normal behavior untouched.
      const current =
        this.recall(view, outers) || this.nearest(outers) || outers[0];
      const proofs = this.findProofs(current);
      if (proofs.length === 0) return;
      this.select(view, outers, current, false);
      this.applyFold(proofs, e.key === "ArrowRight");
      e.preventDefault();
      e.stopPropagation();
    }
  }

  onPointerDown(e) {
    if (!this.isElement(e.target)) return;
    const callout = e.target.closest(".callout");
    if (!callout) return;
    const view = this.viewForEvent(e.target);
    if (!view || !view.contentEl || !view.contentEl.contains(callout)) return;
    if (!this.isReadingMode(view)) return;
    // Track the outermost block so Up/Down continue from the clicked exercise.
    let outer = callout;
    while (
      outer.parentElement &&
      outer.parentElement.closest(".callout") &&
      view.contentEl.contains(outer.parentElement.closest(".callout"))
    ) {
      outer = outer.parentElement.closest(".callout");
    }
    this.select(view, this.getOuterCallouts(view), outer, false);
  }

  // ---------- commands (same logic, usable from palette / remapping) ----------

  step(direction) {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view || !this.isReadingMode(view)) return;
    const outers = this.getOuterCallouts(view);
    if (outers.length === 0) return;
    const next = this.neighbor(view, outers, direction);
    if (next) this.select(view, outers, next, true);
  }

  setProofs(expand) {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view || !this.isReadingMode(view)) return;
    const outers = this.getOuterCallouts(view);
    if (outers.length === 0) return;
    const current = this.recall(view, outers) || outers[0];
    const proofs = this.findProofs(current);
    if (proofs.length === 0) return;
    this.select(view, outers, current, false);
    this.applyFold(proofs, expand);
  }

  // ---------- helpers ----------

  isReadingMode(view) {
    try {
      const state = view.getState && view.getState();
      if (state && typeof state.mode === "string") return state.mode === "preview";
    } catch (_error) {
      // fall through to DOM check
    }
    const reading = view.contentEl.querySelector(".markdown-reading-view");
    return Boolean(reading && reading.clientHeight > 0);
  }

  getOuterCallouts(view) {
    const all = Array.from(view.contentEl.querySelectorAll(".callout"));
    return all.filter((el) => {
      if (!el.isConnected) return false;
      // Skip nested callouts (e.g. Proof inside Exercise): keep only blocks
      // whose ancestors up to the note contain no other callout.
      let ancestor = el.parentElement;
      while (ancestor && ancestor !== view.contentEl) {
        if (
          ancestor.classList &&
          ancestor.classList.contains("callout")
        ) {
          return false;
        }
        ancestor = ancestor.parentElement;
      }
      // Skip hidden/cloned nodes (e.g. the non-visible mode pane).
      if (el.getClientRects().length === 0) return false;
      return true;
    });
  }

  viewKey(view) {
    try {
      return view.file ? view.file.path : null;
    } catch (_error) {
      return null;
    }
  }

  current(outers) {
    if (this.selected && this.selected.isConnected && outers.includes(this.selected)) {
      return this.selected;
    }
    this.selected = null;
    return null;
  }

  // Live selection if valid, otherwise the remembered callout for this note.
  recall(view, outers) {
    const cur = this.current(outers);
    if (cur) return cur;
    const key = view && this.viewKey(view);
    const saved = key != null ? this.memory.get(key) : undefined;
    if (saved == null || outers.length === 0) return null;
    return outers[Math.min(saved, outers.length - 1)] || null;
  }

  // Re-highlight the remembered callout when coming back to a tab.
  // No scrolling: the pane already kept its scroll position.
  restoreOnReturn() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view || !this.isReadingMode(view)) return;
    const outers = this.getOuterCallouts(view);
    if (outers.length === 0) return;
    if (this.current(outers)) return;
    const el = this.recall(view, outers);
    if (el) this.select(view, outers, el, false);
  }

  neighbor(view, outers, direction) {
    const cur = this.recall(view, outers);
    if (!cur) {
      // First jump: Down starts at the top, Up starts near the viewport.
      if (direction > 0) return outers[0];
      return this.nearest(outers) || outers[outers.length - 1];
    }
    const i = outers.indexOf(cur);
    const n = outers.length;
    return outers[(((i + direction) % n) + n) % n];
  }

  nearest(outers) {
    let best = null;
    let bestScore = Infinity;
    // Use the callouts' own window height: pop-outs differ from the main one.
    let viewportMid = 400;
    try {
      const doc = outers.length > 0 ? outers[0].ownerDocument : null;
      const win = doc ? doc.defaultView : null;
      if (win && win.innerHeight) viewportMid = win.innerHeight / 2;
      else if (typeof window !== "undefined" && window.innerHeight) {
        viewportMid = window.innerHeight / 2;
      }
    } catch (_error) {
      // keep default
    }
    for (const el of outers) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) continue;
      const score = Math.abs(rect.top - viewportMid);
      if (score < bestScore) {
        bestScore = score;
        best = el;
      }
    }
    return best || outers[0] || null;
  }

  findProofs(outer) {
    if (!outer) return [];
    const found = [];
    if (this.isProof(outer)) found.push(outer);
    const nested = outer.querySelectorAll(".callout");
    for (const el of nested) {
      if (this.isProof(el)) found.push(el);
    }
    return found;
  }

  isProof(el) {
    const type = (el.getAttribute("data-callout") || "").toLowerCase().trim();
    return PROOF_TYPES.has(type);
  }

  applyFold(proofs, expand) {
    for (const proof of proofs) {
      const collapsed = proof.classList.contains("is-collapsed");
      if (expand && !collapsed) continue;
      if (!expand && collapsed) continue;
      const fold = proof.querySelector(
        ":scope > .callout-title .callout-fold",
      );
      if (fold) {
        fold.click();
      } else {
        proof.classList.toggle("is-collapsed", !expand);
      }
    }
  }

  select(view, outers, el, scroll) {
    if (this.selected && this.selected !== el) {
      this.selected.classList.remove("cn-selected");
    }
    this.selected = el;
    el.classList.add("cn-selected");
    const key = view && this.viewKey(view);
    if (key != null) {
      const i = outers.indexOf(el);
      if (i >= 0) this.memory.set(key, i);
    }
    if (scroll) {
      try {
        el.scrollIntoView({ block: "start" });
      } catch (_error) {
        // scrollIntoView options unsupported: ignore
      }
    }
  }

  clearSelection() {
    if (this.selected) {
      this.selected.classList.remove("cn-selected");
    }
    this.selected = null;
    if (this.memory) this.memory.clear();
  }
};
