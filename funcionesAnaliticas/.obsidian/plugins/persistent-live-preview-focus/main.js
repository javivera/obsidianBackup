const {
  Notice,
  Plugin,
  editorLivePreviewField,
} = require("obsidian");
const { Prec } = require("@codemirror/state");
const { EditorView } = require("@codemirror/view");

const DEFAULT_SETTINGS = {
  enabled: true,
  restoreScroll: true,
  preventAutomaticScroll: false,
};

module.exports = class PersistentLivePreviewFocusPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.preservedViews = new Set();

    this.installManualScrollGuard();

    const preserveBlur = EditorView.domEventHandlers({
      blur: (event, view) => {
        if (!this.settings.enabled || !this.isLivePreview(view)) return false;

        const nextTarget = event.relatedTarget;
        const movingToAnotherEditor =
          nextTarget instanceof Element && nextTarget.closest(".cm-content");
        const movingToReadingPane =
          nextTarget instanceof Element &&
          nextTarget.closest(
            '.workspace-leaf-content[data-type="markdown"], .markdown-reading-view, .markdown-preview-view',
          );
        const leavingObsidianOrUnfocusableTarget = nextTarget == null;

        if (
          !movingToAnotherEditor &&
          !movingToReadingPane &&
          !leavingObsidianOrUnfocusableTarget
        ) {
          return false;
        }

        this.preservedViews.add(view);
        const scroller = view.scrollDOM;
        const scrollTop = scroller.scrollTop;
        const scrollLeft = scroller.scrollLeft;

        // Keep the visual focus marker used by Live Preview themes/plugins.
        queueMicrotask(() => {
          if (!view.destroyed) view.dom.classList.add("cm-focused");
        });

        if (this.settings.restoreScroll) {
          const restore = () => {
            if (view.destroyed) return;
            scroller.scrollTop = scrollTop;
            scroller.scrollLeft = scrollLeft;
          };

          requestAnimationFrame(() => {
            restore();
            requestAnimationFrame(restore);
          });
          window.setTimeout(restore, 80);
        }

        // Mark the blur as handled before CodeMirror collapses Live Preview.
        return true;
      },
    });

    this.registerEditorExtension(Prec.highest(preserveBlur));

    this.addCommand({
      id: "toggle-persistent-live-preview-focus",
      name: "Toggle persistent Live Preview focus",
      callback: async () => {
        this.settings.enabled = !this.settings.enabled;
        await this.saveData(this.settings);
        if (!this.settings.enabled) this.removeVisualFocusMarkers();
        new Notice(
          `Persistent Live Preview focus: ${this.settings.enabled ? "on" : "off"}`,
        );
      },
    });

    this.register(() => this.removeVisualFocusMarkers());
  }

  isLivePreview(view) {
    try {
      return Boolean(view.state.field(editorLivePreviewField));
    } catch (_error) {
      return Boolean(view.dom.closest(".is-live-preview"));
    }
  }

  installManualScrollGuard() {
    if (!this.settings.preventAutomaticScroll) return;

    const selector = ".markdown-source-view.mod-cm6 .cm-scroller";
    const positions = new WeakMap();
    const allowedUntil = new WeakMap();
    const restoring = new WeakSet();
    let draggedScroller = null;

    const getScroller = (target) =>
      target instanceof Element ? target.closest(selector) : null;

    const remember = (scroller) => {
      if (scroller && !positions.has(scroller)) {
        positions.set(scroller, scroller.scrollTop);
      }
    };

    const allowTemporarily = (scroller, milliseconds = 350) => {
      if (!scroller) return;
      remember(scroller);
      allowedUntil.set(scroller, performance.now() + milliseconds);
    };

    document.querySelectorAll(selector).forEach(remember);

    this.registerDomEvent(
      document,
      "wheel",
      (event) => allowTemporarily(getScroller(event.target)),
      { capture: true, passive: true },
    );

    this.registerDomEvent(
      document,
      "pointerdown",
      (event) => {
        draggedScroller = getScroller(event.target);
        allowTemporarily(draggedScroller, 1000);
      },
      { capture: true, passive: true },
    );

    const stopDragging = () => {
      draggedScroller = null;
    };
    this.registerDomEvent(document, "pointerup", stopDragging, true);
    this.registerDomEvent(document, "pointercancel", stopDragging, true);

    this.registerDomEvent(
      document,
      "touchmove",
      (event) => allowTemporarily(getScroller(event.target)),
      { capture: true, passive: true },
    );

    const scrollingKeys = new Set([
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      " ",
    ]);

    this.registerDomEvent(
      document,
      "keydown",
      (event) => {
        const scroller = getScroller(event.target);
        remember(scroller);
        if (scrollingKeys.has(event.key)) allowTemporarily(scroller, 250);
      },
      true,
    );

    this.registerDomEvent(
      document,
      "scroll",
      (event) => {
        const scroller = getScroller(event.target);
        if (!scroller) return;

        const previous = positions.get(scroller);
        if (previous === undefined) {
          positions.set(scroller, scroller.scrollTop);
          return;
        }

        const userIsScrolling =
          draggedScroller === scroller ||
          performance.now() <= (allowedUntil.get(scroller) || 0);

        if (userIsScrolling) {
          positions.set(scroller, scroller.scrollTop);
          return;
        }

        if (restoring.has(scroller) || scroller.scrollTop === previous) return;

        restoring.add(scroller);
        scroller.scrollTop = previous;
        requestAnimationFrame(() => restoring.delete(scroller));
      },
      true,
    );
  }

  removeVisualFocusMarkers() {
    for (const view of this.preservedViews) {
      if (!view.destroyed && !view.hasFocus) {
        view.dom.classList.remove("cm-focused");
      }
    }
    this.preservedViews.clear();
  }
};
