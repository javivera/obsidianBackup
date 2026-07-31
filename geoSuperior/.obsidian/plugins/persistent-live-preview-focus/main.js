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
};

module.exports = class PersistentLivePreviewFocusPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.preservedViews = new Set();

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

  removeVisualFocusMarkers() {
    for (const view of this.preservedViews) {
      if (!view.destroyed && !view.hasFocus) {
        view.dom.classList.remove("cm-focused");
      }
    }
    this.preservedViews.clear();
  }
};
