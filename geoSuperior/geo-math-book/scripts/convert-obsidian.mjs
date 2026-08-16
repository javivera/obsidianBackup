import fs from "node:fs";
import path from "node:path";

const theorySourceDir =
  "/Users/javivera/Library/Mobile Documents/iCloud~md~obsidian/Documents/geoSuperior/Teoricos";
const practiceSourceDir =
  "/Users/javivera/Library/Mobile Documents/iCloud~md~obsidian/Documents/geoSuperior/Practicos";
const imagesSourceDir =
  "/Users/javivera/Library/Mobile Documents/iCloud~md~obsidian/Documents/geoSuperior/Images";
const rootDir = process.cwd();
const outDir = path.join(rootDir, "src/pages/chapters");
const dataDir = path.join(rootDir, "src/data");
const publicImagesDir = path.join(rootDir, "public/images");

const calloutKinds = {
  definition: "definition",
  theorem: "theorem",
  lemma: "lemma",
  proposition: "proposition",
  corollary: "corollary",
  remark: "remark",
  example: "example",
  exercise: "exercise"
};

const calloutLabels = {
  definition: "Definicion",
  theorem: "Teorema",
  lemma: "Lema",
  proposition: "Proposicion",
  corollary: "Corolario",
  remark: "Observacion",
  example: "Ejemplo",
  exercise: "Ejercicio"
};

const knownTitles = {
  1: "Diferenciabilidad",
  2: "Curvas y variedades",
  3: "Atlas y estructuras suaves",
  4: "Funciones suaves",
  5: "Espacios tangentes",
  6: "Diferenciales",
  7: "Subvariedades",
  8: "Campos vectoriales",
  9: "Campos y derivaciones",
  10: "Formas diferenciales",
  11: "Pullbacks",
  12: "Orientacion",
  13: "Integracion",
  14: "Teorema de Stokes",
  15: "Flujos",
  16: "Curvas integrales",
  17: "Inmersiones",
  18: "Subvariedades inmersas",
  19: "Resultados finales"
};

function escapeAttr(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function plainTextLabel(value) {
  return value
    .replace(/\$([^$]+)\$/g, (_match, tex) => tex)
    .replace(/\\mathbb\s*\{?R\}?/g, "R")
    .replace(/\\mathbb\s*\{?([A-Z])\}?/g, "$1")
    .replace(/\\([A-Za-z]+)/g, "$1")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugFromFile(fileName) {
  if (fileName === "Glosario.md") return "glosario";
  const practiceMatch = fileName.match(/Pr(\d+)/);
  if (practiceMatch) return `pr-${practiceMatch[1]}`;
  const match = fileName.match(/Teo(\d+)/);
  return match ? `teo-${match[1]}` : path.basename(fileName, ".md").toLowerCase();
}

function titleFromFile(fileName, text) {
  if (fileName === "Glosario.md") return "Glosario";
  const practiceNumber = fileName.match(/Pr(\d+)/)?.[1];
  if (practiceNumber !== undefined) {
    const firstHeading = text.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return firstHeading ?? `Practico ${practiceNumber}`;
  }
  const number = Number(fileName.match(/Teo(\d+)/)?.[1] ?? 0);
  const firstHeading = text.match(/^##\s+(.+)$/m)?.[1]?.trim();
  return firstHeading && !/^Teorico\s+\d+$/i.test(firstHeading)
    ? firstHeading
    : knownTitles[number] ?? `Teorico ${number}`;
}

function cleanHeading(text) {
  return text.replace(/^Teorico\s+\d+$/i, "").trim();
}

function quoteDepth(line) {
  const match = line.match(/^(>+)\s?(.*)$/);
  if (!match) return { depth: 0, body: line };
  return { depth: match[1].length, body: match[2] };
}

function parseCallout(body) {
  const match = body.match(/^\[!([A-Za-z]+)\](-?)\s*(.*)$/);
  if (!match) return null;
  const type = match[1].toLowerCase();
  const collapsed = Boolean(match[2]);
  const title = match[3].trim();
  return { type, collapsed, title };
}

function openCallout(callout, counters) {
  if (callout.type === "proof") {
    const title = callout.title || "Demostracion";
    return `<Proof title="${escapeAttr(title)}"${callout.collapsed ? "" : " open"}>`;
  }

  const kind = calloutKinds[callout.type] ?? "remark";
  counters[kind] = (counters[kind] ?? 0) + 1;
  if (callout.title.includes("$")) {
    return `<BookBlock kind="${kind}">\n<Fragment slot="title">${callout.title}</Fragment>`;
  }
  const titleAttr = callout.title ? ` title="${escapeAttr(callout.title)}"` : "";
  return `<BookBlock kind="${kind}"${titleAttr}>`;
}

function closeCallout(entry) {
  return entry.type === "proof" ? "</Proof>" : "</BookBlock>";
}

function transformWikiLinks(line, fileToSlug, blockInfo) {
  return line.replace(/\[\[([^\]]+)\]\]/g, (_full, rawTarget) => {
    const [targetPart, aliasPart] = rawTarget.split("|");
    const [filePart, hashPart] = targetPart.split("#");
    const fileName = filePart.trim();
    const block = hashPart?.trim().replace(/^\^/, "");
    const targetInfo = block ? blockInfo.get(block) : null;
    const label = plainTextLabel((aliasPart ?? targetInfo?.label ?? hashPart ?? fileName).trim());
    const slug = fileToSlug.get(fileName) ?? fileToSlug.get(`${fileName}.md`);
    if (!slug && !targetInfo) return label;
    const href = block && targetInfo
      ? `/chapters/${targetInfo.slug}#${block}`
      : `/chapters/${slug}`;
    const title = plainTextLabel(targetInfo?.title ?? label);
    return `<PreviewLink href="${href}" label="${escapeAttr(label)}" title="${escapeAttr(title)}" />`;
  });
}

function imageUrl(fileName) {
  return `/images/${encodeURIComponent(fileName).replaceAll("%20", "-")}`;
}

function transformEmbeds(line, imageFiles) {
  return line.replace(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, (_full, rawFileName) => {
    const fileName = rawFileName.trim();
    if (!imageFiles.has(fileName)) return `Imagen no disponible: ${fileName}`;
    const label = plainTextLabel(path.basename(fileName, path.extname(fileName)));
    return `![${label}](${imageUrl(fileName)})`;
  });
}

function transformMath(text) {
  let out = "";
  let index = 0;

  while (index < text.length) {
    if (text.startsWith("$$", index)) {
      const end = text.indexOf("$$", index + 2);
      if (end === -1) {
        out += text.slice(index);
        break;
      }
      const tex = text.slice(index + 2, end).trim();
      out += `<Math display tex={${JSON.stringify(tex)}} />`;
      index = end + 2;
      continue;
    }

    if (text[index] === "$") {
      const end = text.indexOf("$", index + 1);
      if (end === -1 || text.slice(index + 1, end).includes("\n")) {
        out += text[index];
        index += 1;
        continue;
      }
      const tex = text.slice(index + 1, end).trim();
      out += `<Math tex={${JSON.stringify(tex)}} />`;
      index = end + 1;
      continue;
    }

    out += text[index];
    index += 1;
  }

  return out;
}

function convertMarkdown(text, fileName, fileToSlug, blockInfo, imageFiles) {
  const lines = text.split(/\r?\n/);
  const out = [];
  const stack = [];
  const counters = {};
  let displayMathOpen = false;

  const trackDisplayMath = (line) => {
    const count = [...line.matchAll(/\$\$/g)].length;
    if (count % 2 === 1) displayMathOpen = !displayMathOpen;
  };

  const closeUntil = (depth) => {
    while (stack.length && stack.at(-1).depth >= depth) {
      out.push(closeCallout(stack.pop()));
    }
  };

  const closeDeeperThan = (depth) => {
    while (stack.length && stack.at(-1).depth > depth) {
      out.push(closeCallout(stack.pop()));
    }
  };

  for (const originalLine of lines) {
    const { depth, body } = quoteDepth(originalLine);
    const callout = depth ? parseCallout(body) : null;

    if (callout) {
      closeUntil(depth);
      out.push(openCallout(callout, counters));
      stack.push({ depth, type: callout.type === "proof" ? "proof" : "block" });
      displayMathOpen = false;
      continue;
    }

    if (depth > 0) {
      closeDeeperThan(depth);
      out.push(transformWikiLinks(transformEmbeds(body, imageFiles), fileToSlug, blockInfo));
      trackDisplayMath(body);
      continue;
    }

    if (stack.length && displayMathOpen) {
      out.push(transformWikiLinks(transformEmbeds(body, imageFiles), fileToSlug, blockInfo));
      trackDisplayMath(body);
      continue;
    }

    if (body.trim().startsWith("^")) {
      closeUntil(1);
      const id = body.trim().slice(1);
      out.push(`<span id="${escapeAttr(id)}"></span>`);
      continue;
    }

    if (stack.length && body.trim() !== "" && !body.startsWith("## ")) {
      out.push(transformWikiLinks(transformEmbeds(body, imageFiles), fileToSlug, blockInfo));
      trackDisplayMath(body);
      continue;
    }

    closeUntil(1);

    if (body.startsWith("# ")) {
      continue;
    }

    if (body.startsWith("## ")) {
      const cleaned = cleanHeading(body.slice(3));
      if (!cleaned) continue;
      out.push(`## ${cleaned}`);
      continue;
    }

    out.push(transformWikiLinks(transformEmbeds(body, imageFiles), fileToSlug, blockInfo));
  }

  closeUntil(1);

  const title = titleFromFile(fileName, text);
  const practiceNumber = fileName.match(/Pr(\d+)/)?.[1];
  const isPractice = practiceNumber !== undefined;
  const body = transformMath(out.join("\n"));
  return `---
layout: ../../layouts/BookLayout.astro
title: ${JSON.stringify(title)}
description: ${JSON.stringify(`${isPractice ? "Practico" : "Teorico"} convertido desde ${fileName}`)}
chapter: ${JSON.stringify(fileName === "Glosario.md" ? "Glosario" : isPractice ? `Pr ${practiceNumber}` : `Teo ${fileName.match(/Teo(\d+)/)?.[1] ?? ""}`)}
---

import BookBlock from "../../components/BookBlock.astro";
import Math from "../../components/Math.astro";
import Proof from "../../components/Proof.astro";
import PreviewLink from "../../components/PreviewLink.astro";

# ${title}

${body}
`;
}

const sourceFiles = [
  ...fs
    .readdirSync(theorySourceDir)
    .filter((file) => /^GS - Teo\d+\.md$/.test(file))
    .sort((a, b) => Number(a.match(/Teo(\d+)/)[1]) - Number(b.match(/Teo(\d+)/)[1]))
    .map((file) => ({ file, sourceDir: theorySourceDir, section: "theory" })),
  ...fs
    .readdirSync(practiceSourceDir)
    .filter((file) => /^GS - Pr\d+\.md$/.test(file))
    .sort((a, b) => Number(a.match(/Pr(\d+)/)[1]) - Number(b.match(/Pr(\d+)/)[1]))
    .map((file) => ({ file, sourceDir: practiceSourceDir, section: "practice" })),
  { file: "Glosario.md", sourceDir: practiceSourceDir, section: "reference" }
];

const fileToSlug = new Map();
for (const { file } of sourceFiles) {
  fileToSlug.set(path.basename(file, ".md"), slugFromFile(file));
  fileToSlug.set(file, slugFromFile(file));
}

const blockInfo = new Map();
for (const { file, sourceDir } of sourceFiles) {
  const text = fs.readFileSync(path.join(sourceDir, file), "utf8");
  let lastCallout = null;

  for (const line of text.split(/\r?\n/)) {
    const { body } = quoteDepth(line);
    const callout = parseCallout(body);
    if (callout && callout.type !== "proof") {
      const kind = calloutKinds[callout.type] ?? "remark";
      const fallback = calloutLabels[kind] ?? "Referencia";
      lastCallout = {
        label: plainTextLabel(callout.title || fallback),
        title: plainTextLabel(callout.title ? `${fallback}: ${callout.title}` : fallback)
      };
      continue;
    }

    const blockMatch = body.trim().match(/^\^([A-Za-z0-9-]+)$/);
    if (blockMatch) {
      const id = blockMatch[1];
      blockInfo.set(id, {
        slug: slugFromFile(file),
        label: lastCallout?.label ?? `Referencia ${id}`,
        title: lastCallout?.title ?? `Referencia ${id}`
      });
    }
  }
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(publicImagesDir, { recursive: true });

const imageFiles = new Set(
  fs.existsSync(imagesSourceDir)
    ? fs
        .readdirSync(imagesSourceDir, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
    : []
);
for (const fileName of imageFiles) {
  fs.copyFileSync(
    path.join(imagesSourceDir, fileName),
    path.join(publicImagesDir, path.basename(imageUrl(fileName)))
  );
}

const chapters = [];
for (const { file, sourceDir, section } of sourceFiles) {
  const sourcePath = path.join(sourceDir, file);
  const text = fs.readFileSync(sourcePath, "utf8");
  const slug = slugFromFile(file);
  const title = titleFromFile(file, text);
  const mdx = convertMarkdown(text, file, fileToSlug, blockInfo, imageFiles);
  fs.writeFileSync(path.join(outDir, `${slug}.mdx`), mdx);
  const practiceNumber = file.match(/Pr(\d+)/)?.[1];
  chapters.push({
    href: `/chapters/${slug}`,
    label:
      file === "Glosario.md"
        ? "Glosario"
        : practiceNumber !== undefined
          ? `Pr ${practiceNumber}`
          : `Teo ${file.match(/Teo(\d+)/)[1]}`,
    title,
    section
  });
}

chapters.push({
  href: "/corazon",
  label: "Corazon",
  title: "Evaluador de teoremas corazon",
  section: "reference"
});

fs.writeFileSync(
  path.join(dataDir, "chapters.ts"),
  `import { withBase } from "../lib/paths";\n\nconst chapterData = ${JSON.stringify(chapters, null, 2)};\n\nexport const chapters = chapterData.map((chapter) => ({\n  ...chapter,\n  href: withBase(chapter.href)\n}));\n`
);

console.log(`Converted ${sourceFiles.length} files.`);
