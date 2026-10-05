const { Plugin, MarkdownRenderChild } = require("obsidian");

// Coordinates stay in the upper half-plane (SVG y grows downwards).
const VERTICES = [[175, 340], [740, 300], [455, 85]];
const TARGET = [457, 242];

module.exports = class HomotopiaInteractiva extends Plugin {
  onload() {
    this.registerMarkdownCodeBlockProcessor("homotopia", (_source, el, ctx) => {
      const child = new MarkdownRenderChild(el);
      ctx.addChild(child);
      const panel = el.ownerDocument.createElement("div");
      panel.className = "homotopia-interactiva";
      // Static markup only: no note text is interpreted as HTML or JavaScript.
      panel.innerHTML = `
        <p>H(s,t) = (1 − t) γ(s) + t a</p>
        <svg viewBox="0 0 900 480" role="img" aria-label="El borde azul se contrae hasta el punto amarillo a">
          <path d="M175 340L740 300L455 85Z M175 340L457 242 M740 300L457 242 M455 85L457 242" fill="none" stroke="#64748b" stroke-dasharray="6 6"/>
          <polygon class="homotopia-triangle" points="175,340 740,300 455,85" fill="#173e57" stroke="#38bdf8" stroke-width="4" stroke-linejoin="round"/>
          <circle cx="457" cy="242" r="6" fill="#fbbf24"/>
          <text x="470" y="267">a</text>
          <path d="M35 425H865" stroke="#94a3b8"/>
          <text x="35" y="40">Im z &gt; 0</text>
          <text x="740" y="456">Eje real</text>
        </svg>
        <label>Parámetro t = <output>0.000</output>
          <input type="range" min="0" max="1" step="0.001" value="0" aria-label="Parámetro t de la homotopía">
        </label>
        <p class="homotopia-status" aria-live="polite">t = 0: borde del triángulo original.</p>
        <p>Cada punto avanza por un segmento hacia a. En t = 1, todo el borde coincide en a: la curva es constante.</p>
      `;
      el.replaceChildren(panel);
      const slider = panel.querySelector("input");
      const output = panel.querySelector("output");
      const triangle = panel.querySelector("polygon");
      const status = panel.querySelector(".homotopia-status");
      child.registerDomEvent(slider, "input", () => {
        const t = Number(slider.value);
        triangle.setAttribute("points", VERTICES.map(point =>
          point.map((coordinate, axis) => (1 - t) * coordinate + t * TARGET[axis]).join(",")
        ).join(" "));
        output.value = t.toFixed(3);
        status.textContent = `t = ${t.toFixed(3)}: el borde se contrae hacia a dentro del semiplano superior.`;
        if (t === 0) status.textContent = "t = 0: borde del triángulo original.";
        if (t === 1) status.textContent = "t = 1: todos los puntos del borde coinciden en a. Curva constante.";
      });
    });
  }
};
