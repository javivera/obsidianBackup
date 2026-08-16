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
        this.filterControls(control, className);
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

  filterControls(container, className) {
    const candidates = Array.from(
      container.querySelectorAll("button, a, .clickable-icon, .view-action"),
    ).filter(
      (element, index, elements) =>
        !elements.some(
          (other, otherIndex) =>
            otherIndex !== index && other.contains(element),
        ),
    );

    if (className === "tabbar-view-nav") {
      candidates.slice(2).forEach((element) =>
        element.classList.add("tabbar-control-hidden"),
      );
      return;
    }

    for (const element of candidates) {
      const signature = [
        element.getAttribute("aria-label"),
        element.getAttribute("title"),
        element.getAttribute("data-icon"),
        element.getAttribute("data-tooltip"),
        element.querySelector("svg")?.getAttribute("class"),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const isReadingEditToggle =
        /reading|editing|edit mode|source mode|live preview|vista de lectura|modo lectura|modo edici[oó]n|editar|pencil|book-open/.test(
          signature,
        );

      if (!isReadingEditToggle) {
        element.classList.add("tabbar-control-hidden");
      }
    }
  }

  restoreAll() {
    for (const [actions, origin] of this.origins) {
      actions
        .querySelectorAll(".tabbar-control-hidden")
        .forEach((element) => element.classList.remove("tabbar-control-hidden"));
      actions.classList.remove("tabbar-view-actions");
      actions.classList.remove("tabbar-view-nav");
      if (!origin.parent?.isConnected) {
        // Obsidian replaced the leaf while its controls were in the tab bar.
        // Leaving them there would create another copy on the next sync.
        actions.remove();
        continue;
      }

      if (origin.nextSibling?.parentNode === origin.parent) {
        origin.parent.insertBefore(actions, origin.nextSibling);
      } else {
        origin.parent.appendChild(actions);
      }
    }
    this.origins.clear();

    // Also remove leftovers created by an older sync/plugin instance. At this
    // point every valid tracked control has already returned to its view header.
    document
      .querySelectorAll(
        ".workspace-tab-header-container :is(.tabbar-view-nav, .tabbar-view-actions)",
      )
      .forEach((control) => control.remove());
  }
};
