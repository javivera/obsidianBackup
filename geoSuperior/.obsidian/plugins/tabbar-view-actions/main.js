const { Plugin } = require("obsidian");

module.exports = class TabBarViewActionsPlugin extends Plugin {
  onload() {
    this.origins = new Map();
    this.syncQueued = false;

    this.app.workspace.onLayoutReady(() => {
      this.sync();

      this.observer = new MutationObserver(() => this.queueSync());
      this.observeWorkspace();
      this.register(() => this.observer.disconnect());
    });

    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.queueSync()),
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => this.queueSync()),
    );

    this.register(() => this.restoreAll());
  }

  queueSync() {
    if (this.syncQueued) return;
    this.syncQueued = true;
    requestAnimationFrame(() => {
      this.syncQueued = false;
      this.sync();
    });
  }

  sync() {
    // Ignore the DOM mutations produced by moving the controls themselves.
    this.observer?.disconnect();
    this.restoreAll();

    const tabGroups = document.querySelectorAll(
      "body:not(.is-mobile) .workspace-split.mod-root .workspace-tabs.mod-top",
    );

    for (const tabs of tabGroups) {
      const header = tabs.querySelector(":scope > .workspace-tab-header-container");
      const container = tabs.querySelector(":scope > .workspace-tab-container");
      if (!header || !container) continue;

      const leaves = Array.from(
        container.querySelectorAll(":scope > .workspace-leaf"),
      );
      const activeLeaf =
        leaves.find(
          (leaf) =>
            !leaf.hidden &&
            leaf.style.display !== "none" &&
            getComputedStyle(leaf).display !== "none",
        ) || leaves.find((leaf) => leaf.classList.contains("mod-active"));
      if (!activeLeaf) continue;

      const tabList = header.querySelector(
        ":scope > .workspace-tab-header-tab-list",
      );
      const viewHeader = activeLeaf.querySelector(":scope .view-header");
      if (!viewHeader) continue;

      const controls = [
        [
          viewHeader.querySelector(".view-header-nav-buttons"),
          "tabbar-view-nav",
        ],
        [viewHeader.querySelector(".view-actions"), "tabbar-view-actions"],
      ];

      for (const [control, className] of controls) {
        if (!control) continue;
        this.origins.set(control, {
          parent: control.parentNode,
          nextSibling: control.nextSibling,
        });
        control.classList.add(className);
        header.insertBefore(control, tabList || null);
      }
    }

    this.observeWorkspace();
  }

  observeWorkspace() {
    if (!this.observer) return;
    this.observer.observe(this.app.workspace.containerEl, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });
  }

  restoreAll() {
    for (const [actions, origin] of this.origins) {
      actions.classList.remove("tabbar-view-actions");
      actions.classList.remove("tabbar-view-nav");
      if (!origin.parent?.isConnected) continue;

      if (origin.nextSibling?.parentNode === origin.parent) {
        origin.parent.insertBefore(actions, origin.nextSibling);
      } else {
        origin.parent.appendChild(actions);
      }
    }
    this.origins.clear();
  }
};
