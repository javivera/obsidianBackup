import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultDir = path.resolve(scriptDir, "../..");
const sourceDir = path.join(vaultDir, "Teoricos");
const imagesDir = path.join(vaultDir, "Images");
const outputDir = path.join(vaultDir, "output/pdf/geometria-superior-libro");
const chaptersDir = path.join(outputDir, "chapters");
const assetsDir = path.join(outputDir, "assets");

const lectureTitles = {
  1: "Diferenciabilidad y regla de la cadena",
  2: "Curvas y variedades topológicas",
  3: "Topología cociente",
  4: "Atlas y estructuras suaves",
  5: "Vectores tangentes",
  6: "El espacio tangente y la diferencial",
  7: "Fibrado tangente y diferencial global",
  8: "Particiones de la unidad",
  9: "Subvariedades",
  10: "Teorema de la función inversa",
  11: "Factorización y subvariedades incrustadas",
  12: "Rango constante y rebanadas",
  13: "Teorema de la subvariedad implícita",
  14: "Extensión y caracterizaciones de suavidad",
  15: "Campos vectoriales suaves",
  16: "Curvas integrales y flujos",
  17: "Propiedades de los flujos",
  18: "Enderezamiento de campos",
  19: "Corchete de Lie",
  20: "Álgebra multilineal y formas alternantes",
  21: "Formas diferenciales",
  22: "Complejo de de Rham y pullbacks",
  23: "Distribuciones y teorema de Frobenius",
  24: "Orientación",
  25: "Integración sobre variedades"
};

const calloutEnvironments = {
  definition: "bookdefinition",
  theorem: "booktheorem",
  lemma: "booklemma",
  proposition: "bookproposition",
  corollary: "bookcorollary",
  remark: "bookremark",
  example: "bookexample",
  exercise: "bookexercise"
};

const parser = unified().use(remarkParse).use(remarkMath).use(remarkGfm);
const sourceLinesByFile = new Map();
const imageByName = new Map();
const copiedImages = new Map();
const warnings = [];

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walkFiles(fullPath) : [fullPath];
  });
}

for (const imagePath of walkFiles(imagesDir)) {
  imageByName.set(path.basename(imagePath).normalize("NFC"), imagePath);
}

function asciiSlug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "asset";
}

function escapeLatex(value) {
  const unicode = new Map([
    ["–", "--"], ["—", "---"], ["−", "-"], ["→", "\\(\\to\\)"],
    ["↦", "\\(\\mapsto\\)"], ["∞", "\\(\\infty\\)"], ["∂", "\\(\\partial\\)"],
    ["∈", "\\(\\in\\)"], ["∉", "\\(\\notin\\)"], ["⊂", "\\(\\subset\\)"],
    ["⊆", "\\(\\subseteq\\)"], ["×", "\\(\\times\\)"], ["∧", "\\(\\wedge\\)"],
    ["∨", "\\(\\vee\\)"], ["≃", "\\(\\simeq\\)"], ["≈", "\\(\\approx\\)"],
    ["ℝ", "\\(\\mathbb{R}\\)"], ["ℕ", "\\(\\mathbb{N}\\)"], ["ℤ", "\\(\\mathbb{Z}\\)"],
    ["∑", "\\(\\sum\\)"], ["…", "\\ldots{}"]
  ]);
  let out = "";
  for (const char of value.replace(/\s*\n\s*/g, " ")) {
    if (unicode.has(char)) {
      out += unicode.get(char);
      continue;
    }
    const replacements = {
      "\\": "\\textbackslash{}", "&": "\\&", "%": "\\%", "#": "\\#",
      "_": "\\_", "{": "\\{", "}": "\\}", "~": "\\textasciitilde{}",
      "^": "\\textasciicircum{}"
    };
    out += replacements[char] ?? char;
  }
  return out;
}

function escapeUrl(value) {
  return value.replace(/([%#{}])/g, "\\$1");
}

function normalizeMath(value) {
  return value
    .trim()
    .replace(/\\begin\{align\*?\}/g, "\\begin{aligned}")
    .replace(/\\end\{align\*?\}/g, "\\end{aligned}")
    .replaceAll("−", "-")
    .replaceAll("→", "\\to ")
    .replaceAll("↦", "\\mapsto ")
    .replaceAll("∞", "\\infty ")
    .replaceAll("∈", "\\in ")
    .replaceAll("∉", "\\notin ")
    .replaceAll("⊂", "\\subset ")
    .replaceAll("⊆", "\\subseteq ")
    .replaceAll("×", "\\times ")
    .replaceAll("∧", "\\wedge ")
    .replaceAll("∨", "\\vee ")
    .replaceAll("≃", "\\simeq ")
    .replaceAll("≈", "\\approx ")
    .replaceAll("ℝ", "\\mathbb{R}")
    .replaceAll("ℕ", "\\mathbb{N}")
    .replaceAll("ℤ", "\\mathbb{Z}");
}

// Obsidian accepts display delimiters beside prose and permits several displays
// on one quoted line. CommonMark math parsers expect the delimiters on their own
// lines. This normalization keeps the quote depth while making every display a
// proper block; it does not alter the TeX between the delimiters.
function normalizeDisplayMath(source) {
  const output = [];
  let displayOpen = false;
  let activeQuotePrefix = "";
  for (const originalLine of source.replace(/\r\n/g, "\n").split("\n")) {
    const quote = originalLine.match(/^(\s*>+\s?)(.*)$/);
    const originalPrefix = quote?.[1] ?? "";
    let prefix = originalPrefix || (displayOpen ? activeQuotePrefix : "");
    // In `...$x$$$y$$`, the first dollar closes inline math and the following
    // pair opens a display. Protect each display pair before scanning.
    let rest = (quote?.[2] ?? originalLine).replace(/\${2,}/g, (run) => {
      return `${run.length % 2 ? "$" : ""}${"\uE000".repeat(Math.floor(run.length / 2))}`;
    });
    let emitted = false;
    while (rest.includes("\uE000")) {
      const index = rest.indexOf("\uE000");
      const before = rest.slice(0, index);
      if (before || !emitted) output.push(`${prefix}${before}`);
      output.push(`${prefix}$$`);
      displayOpen = !displayOpen;
      if (displayOpen) activeQuotePrefix = prefix;
      else activeQuotePrefix = "";
      emitted = true;
      rest = rest.slice(index + 1);
      prefix = originalPrefix || prefix;
    }
    if (rest || !emitted) output.push(`${prefix}${rest}`);
  }
  if (displayOpen) warnings.push("Se encontró un delimitador $$ sin pareja al finalizar una nota.");
  return output.join("\n");
}

function fileLabel(fileName) {
  const number = fileName.match(/Teo(\d+)/i)?.[1];
  if (number) return `ch:teo-${Number(number)}`;
  if (/Glosario Teorico/i.test(fileName)) return "ch:glosario-teorico";
  if (/Teoremas Corazon/i.test(fileName)) return "ch:teoremas-corazon";
  return `ch:${asciiSlug(path.basename(fileName, ".md"))}`;
}

function resolveChapterLabel(target) {
  const normalized = target.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const match = normalized.match(/(?:GS\s*-\s*)?(?:Teo|Teorico)\s*(\d+)/i)
    ?? normalized.match(/GS\s*-\s*(\d+)(?:er|do|to)?\s*Teo/i);
  if (match) return `ch:teo-${Number(match[1])}`;
  if (/Glosario Teorico/i.test(normalized)) return "ch:glosario-teorico";
  if (/Teoremas Corazon/i.test(normalized)) return "ch:teoremas-corazon";
  return null;
}

function wikiLinkToLatex(raw) {
  const [targetPart, aliasPart] = raw.split("|");
  const [filePart, hashPart] = targetPart.split("#");
  const target = filePart.trim();
  const hash = hashPart?.trim().replace(/^\^/, "");
  const number = target.match(/Teo\s*(\d+)/i)?.[1];
  const label = (aliasPart ?? (number ? `Teórico ${Number(number)}` : hashPart ?? target)).trim();
  const destination = hash ? `blk:${hash}` : resolveChapterLabel(target);
  return destination
    ? `\\hyperref[${destination}]{${escapeLatex(label)}}`
    : `\\textit{${escapeLatex(label)}}`;
}

function copyImage(rawName) {
  const name = rawName.split("|")[0].trim().normalize("NFC");
  if (copiedImages.has(name)) return copiedImages.get(name);
  const source = imageByName.get(name);
  if (!source) {
    warnings.push(`Imagen no encontrada: ${name}`);
    return null;
  }
  const ext = path.extname(name).toLowerCase();
  const base = asciiSlug(path.basename(name, ext));
  let outputName = `${base}${ext}`;
  let suffix = 2;
  while ([...copiedImages.values()].includes(outputName)) {
    outputName = `${base}-${suffix}${ext}`;
    suffix += 1;
  }
  fs.copyFileSync(source, path.join(assetsDir, outputName));
  copiedImages.set(name, outputName);
  return outputName;
}

function embeddedImage(rawName) {
  const outputName = copyImage(rawName);
  if (!outputName) {
    return `\\begin{center}\\fbox{\\parbox{.8\\linewidth}{Imagen no disponible: ${escapeLatex(rawName)}}}\\end{center}`;
  }
  const caption = path.basename(rawName.split("|")[0].trim(), path.extname(rawName.split("|")[0].trim()));
  return `\\bookimage{assets/${outputName}}{${escapeLatex(caption)}}`;
}

function renderText(value) {
  const pattern = /(!?\[\[[^\]]+\]\])/g;
  const pieces = value.split(pattern);
  return pieces.map((piece) => {
    const embed = piece.match(/^!\[\[([^\]]+)\]\]$/);
    if (embed) return `\n${embeddedImage(embed[1])}\n`;
    const link = piece.match(/^\[\[([^\]]+)\]\]$/);
    if (link) return wikiLinkToLatex(link[1]);
    return escapeLatex(piece);
  }).join("");
}

function renderTitle(value) {
  const pattern = /(\$[^$\n]+\$|!?\[\[[^\]]+\]\]|\*\*[^*]+\*\*)/g;
  return value.split(pattern).map((piece) => {
    const math = piece.match(/^\$([\s\S]+)\$$/);
    if (math) return `$${normalizeMath(math[1])}$`;
    const embed = piece.match(/^!\[\[([^\]]+)\]\]$/);
    if (embed) return escapeLatex(embed[1].split("|")[0]);
    const link = piece.match(/^\[\[([^\]]+)\]\]$/);
    if (link) return wikiLinkToLatex(link[1]);
    const strong = piece.match(/^\*\*([\s\S]+)\*\*$/);
    if (strong) return `\\textbf{${renderTitle(strong[1])}}`;
    return escapeLatex(piece);
  }).join("");
}

function renderInline(node, context) {
  switch (node.type) {
    case "text": return renderText(node.value);
    case "inlineMath": {
      const sourceOffset = node.position?.start?.offset ?? -1;
      const wasDoubleDollar = sourceOffset >= 0 && context.source.slice(sourceOffset, sourceOffset + 2) === "$$";
      const math = normalizeMath(node.value);
      return wasDoubleDollar ? `\n\\[\n${math}\n\\]\n` : `$${math}$`;
    }
    case "strong": return `\\textbf{${renderInlines(node.children, context)}}`;
    case "emphasis": return `\\emph{${renderInlines(node.children, context)}}`;
    case "delete": return `\\sout{${renderInlines(node.children, context)}}`;
    case "break": return "\\\\\n";
    case "inlineCode": return `\\texttt{\\detokenize{${node.value}}}`;
    case "link": return `\\href{${escapeUrl(node.url)}}{${renderInlines(node.children, context)}}`;
    case "image": {
      const outputName = copyImage(path.basename(decodeURIComponent(node.url)));
      return outputName ? embeddedImage(path.basename(decodeURIComponent(node.url))) : escapeLatex(node.alt ?? node.url);
    }
    case "html": return escapeLatex(node.value.replace(/<[^>]+>/g, ""));
    default: return node.children ? renderInlines(node.children, context) : "";
  }
}

function renderInlines(children = [], context) {
  return children.map((child) => renderInline(child, context)).join("");
}

function renderTable(node, context) {
  const columns = Math.max(1, ...node.children.map((row) => row.children.length));
  const spec = `@{}${Array(columns).fill("X").join(" ")}@{}`;
  const rows = node.children.map((row, rowIndex) => {
    const cells = row.children.map((cell) => renderInlines(cell.children, context));
    while (cells.length < columns) cells.push("");
    const rendered = cells.join(" & ");
    return rowIndex === 0 ? `\\textbf{${rendered.replaceAll(" & ", "} & \\textbf{")}} \\\\ \\midrule` : `${rendered} \\\\`;
  });
  return `\\begin{center}\n\\begin{tabularx}{\\linewidth}{${spec}}\n\\toprule\n${rows.join("\n")}\n\\bottomrule\n\\end{tabularx}\n\\end{center}\n`;
}

function calloutInfo(node, context) {
  const lineNumber = node.position?.start?.line;
  const rawLine = context.sourceLines[(lineNumber ?? 1) - 1] ?? "";
  const unquoted = rawLine.replace(/^\s*>+\s?/, "");
  const match = unquoted.match(/^\[!([A-Za-z]+)\](-?)\s*(.*)$/);
  if (!match) return null;
  return { type: match[1].toLowerCase(), title: match[3].trim(), markerLine: lineNumber };
}

function withoutCalloutMarker(children, markerLine) {
  const cloned = structuredClone(children);
  const first = cloned[0];
  if (!first || first.type !== "paragraph") return cloned;
  first.children = first.children.flatMap((child) => {
    const start = child.position?.start?.line ?? markerLine;
    const end = child.position?.end?.line ?? markerLine;
    if (end <= markerLine) return [];
    if (start <= markerLine && typeof child.value === "string") {
      return [{ ...child, value: child.value.split("\n").slice(1).join("\n") }];
    }
    return [child];
  }).filter((child) => child.value !== "");
  while (first.children[0]?.type === "break") first.children.shift();
  if (first.children.length === 0) cloned.shift();
  return cloned;
}

function renderBlockquote(node, context) {
  const info = calloutInfo(node, context);
  if (!info) {
    return `\\begin{quote}\n${renderBlocks(node.children, context)}\\end{quote}\n`;
  }
  const children = withoutCalloutMarker(node.children, info.markerLine);
  const proofChildren = [];
  const statementChildren = [];
  for (const child of children) {
    const nestedInfo = child.type === "blockquote" ? calloutInfo(child, context) : null;
    if (nestedInfo?.type === "proof") proofChildren.push(child);
    else statementChildren.push(child);
  }
  if (info.type === "proof") {
    const title = /^demostraci[oó]n$/i.test(info.title) ? "" : info.title;
    return `\\begin{bookproof}{${renderTitle(title)}}\n${renderBlocks(children, context)}\\bookqed\n\\end{bookproof}\n`;
  }
  const environment = calloutEnvironments[info.type] ?? "bookremark";
  const title = info.title ? renderTitle(info.title) : "";
  let output = `\\begin{${environment}}{${title}}\n${renderBlocks(statementChildren, context)}\\end{${environment}}\n`;
  output += proofChildren.map((proof) => renderBlockquote(proof, context)).join("");
  return output;
}

function renderList(node, context) {
  const environment = node.ordered ? "enumerate" : "itemize";
  const start = node.ordered && node.start && node.start !== 1 ? `[start=${node.start}]` : "";
  const items = node.children.map((item) => `\\item ${renderBlocks(item.children, context).trim()}\n`).join("");
  return `\\begin{${environment}}${start}\n${items}\\end{${environment}}\n`;
}

function renderBlock(node, context) {
  switch (node.type) {
    case "paragraph": {
      const plain = node.children.map((child) => child.type === "text" ? child.value : "").join("").trim();
      const blockId = plain.match(/^\^([A-Za-z0-9_-]+)$/);
      if (blockId) return `\\phantomsection\\label{blk:${blockId[1]}}\n`;
      return `${renderInlines(node.children, context)}\n\n`;
    }
    case "heading": {
      const commandByDepth = { 1: "section", 2: "section", 3: "subsection", 4: "subsubsection", 5: "paragraph", 6: "subparagraph" };
      const command = commandByDepth[node.depth] ?? "paragraph";
      return `\\${command}{${renderInlines(node.children, context)}}\n`;
    }
    case "math": return `\\[\n${normalizeMath(node.value)}\n\\]\n`;
    case "blockquote": return renderBlockquote(node, context);
    case "list": return renderList(node, context);
    case "table": return renderTable(node, context);
    case "thematicBreak": return "\\bigskip\\hrule\\bigskip\n";
    case "code": return `\\begin{Verbatim}[fontsize=\\small]\n${node.value}\n\\end{Verbatim}\n`;
    case "html": return `${escapeLatex(node.value.replace(/<[^>]+>/g, ""))}\n`;
    case "definition": return "";
    default: return node.children ? renderBlocks(node.children, context) : "";
  }
}

function renderBlocks(children = [], context) {
  return children.map((child) => renderBlock(child, context)).join("");
}

function convertFile(fileName, chapterTitle, outputName, options = {}) {
  const sourcePath = path.join(sourceDir, fileName);
  const source = normalizeDisplayMath(fs.readFileSync(sourcePath, "utf8"));
  const sourceLines = source.split("\n");
  sourceLinesByFile.set(fileName, sourceLines);
  const tree = parser.parse(source);
  const context = { fileName, sourceLines, source };
  let body = renderBlocks(tree.children, context);
  if (options.dropFirstHeading) {
    body = body.replace(/^\\section\{[^\n]*\}\n/, "");
  }
  const label = fileLabel(fileName);
  const chapter = [
    "% This file is generated from the corresponding Obsidian note.",
    `% Source: Teoricos/${fileName}`,
    `\\chapter{${escapeLatex(chapterTitle)}}`,
    `\\label{${label}}`,
    body.trim(),
    ""
  ].join("\n");
  fs.writeFileSync(path.join(chaptersDir, outputName), chapter, "utf8");
}

fs.mkdirSync(chaptersDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

for (let number = 1; number <= 25; number += 1) {
  const fileName = `GS - Teo${number}.md`;
  convertFile(fileName, lectureTitles[number], `${String(number).padStart(2, "0")}-teorico-${number}.tex`);
}

const manifest = [
  "Geometría Superior - manifiesto de fuentes",
  "",
  "Incluidos:",
  ...Array.from({ length: 25 }, (_, index) => `- Teoricos/GS - Teo${index + 1}.md`),
  "",
  "Excluidos deliberadamente:",
  "- Teoricos/Glosario Teorico.md (guía de lectura omitida)",
  "- Teoricos/Teoremas Corazon.md (compendio omitido)",
  "- Teoricos/Dudas.md (nota personal de preguntas)",
  "- Practicos/, Examenes/ y copias de seguridad",
  "",
  `Imágenes copiadas: ${copiedImages.size}`,
  `Advertencias: ${warnings.length}`,
  ...warnings.map((warning) => `- ${warning}`),
  ""
].join("\n");
fs.writeFileSync(path.join(outputDir, "MANIFESTO.txt"), manifest, "utf8");

console.log(`Libro generado en ${outputDir}`);
console.log(`25 capítulos, ${copiedImages.size} imágenes, ${warnings.length} advertencias.`);
if (warnings.length) warnings.forEach((warning) => console.warn(`AVISO: ${warning}`));
