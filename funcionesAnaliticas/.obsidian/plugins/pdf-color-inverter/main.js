const {
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
} = require("obsidian");

const BODY_CLASS = "pdf-color-inverter-enabled";
const DEFAULT_SETTINGS = {
  enabled: true,
  preserveColors: true,
};

class PdfColorInverterSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "PDF Color Inverter" });

    new Setting(containerEl)
      .setName("Invertir colores")
      .setDesc("Invierte las páginas de los PDF dentro del visor de Obsidian.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.enabled)
        .onChange(async (value) => {
          this.plugin.settings.enabled = value;
          await this.plugin.saveSettings();
          this.plugin.applyAppearance();
        }));

    new Setting(containerEl)
      .setName("Conservar los tonos")
      .setDesc("Convierte el fondo blanco en oscuro sin reemplazar los colores por sus complementarios.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.preserveColors)
        .onChange(async (value) => {
          this.plugin.settings.preserveColors = value;
          await this.plugin.saveSettings();
          this.plugin.applyAppearance();
        }));
  }
}

module.exports = class PdfColorInverterPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.actionButtons = new Set();
    this.applyAppearance();

    this.addRibbonIcon("contrast", "Invertir colores de los PDF", () => this.toggle());
    this.addCommand({
      id: "toggle-pdf-colors",
      name: "Alternar colores invertidos de los PDF",
      callback: () => this.toggle(),
    });

    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf) => {
      this.installViewButton(leaf);
    }));
    this.registerEvent(this.app.workspace.on("layout-change", () => {
      this.installButtonsInOpenPdfs();
    }));
    this.app.workspace.onLayoutReady(() => this.installButtonsInOpenPdfs());
    this.addSettingTab(new PdfColorInverterSettingTab(this.app, this));
  }

  onunload() {
    document.body.removeClass(BODY_CLASS);
    document.body.style.removeProperty("--pdf-color-inverter-hue");
    for (const button of this.actionButtons) button.remove();
    this.actionButtons.clear();
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async toggle() {
    this.settings.enabled = !this.settings.enabled;
    await this.saveSettings();
    this.applyAppearance();
    new Notice(this.settings.enabled
      ? "Colores invertidos activados para los PDF."
      : "Colores originales restaurados.");
  }

  applyAppearance() {
    document.body.toggleClass(BODY_CLASS, this.settings.enabled);
    document.body.style.setProperty(
      "--pdf-color-inverter-hue",
      this.settings.preserveColors ? "180deg" : "0deg",
    );
    this.refreshActionButtons();
  }

  installButtonsInOpenPdfs() {
    this.app.workspace.iterateAllLeaves((leaf) => this.installViewButton(leaf));
  }

  installViewButton(leaf) {
    const view = leaf?.view;
    if (view?.getViewType?.() !== "pdf" || typeof view.addAction !== "function") return;
    if (view.containerEl.querySelector(".pdf-color-inverter-action")) return;

    const button = view.addAction("contrast", "Invertir colores del PDF", () => this.toggle());
    button.addClass("pdf-color-inverter-action");
    this.actionButtons.add(button);
    this.updateActionButton(button);
  }

  refreshActionButtons() {
    for (const button of [...this.actionButtons]) {
      if (!button.isConnected) {
        this.actionButtons.delete(button);
        continue;
      }
      this.updateActionButton(button);
    }
  }

  updateActionButton(button) {
    button.toggleClass("is-active", this.settings.enabled);
    button.setAttr("aria-pressed", this.settings.enabled ? "true" : "false");
    button.setAttr(
      "aria-label",
      this.settings.enabled ? "Restaurar colores del PDF" : "Invertir colores del PDF",
    );
  }
};
