import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const chaptersDir = path.join(root, "src/pages/chapters");
const outDir = path.join(root, "exports");
const outFile = path.join(outDir, "teoremas-corazon-obsidian.md");

const heartPaths = [
  "/chapters/teo-5:5",
  "/chapters/teo-5:8",
  "/chapters/teo-6:3",
  "/chapters/teo-8:19",
  "/chapters/teo-8:21",
  "/chapters/teo-10:10",
  "/chapters/teo-11:1",
  "/chapters/teo-11:4",
  "/chapters/teo-11:9",
  "/chapters/teo-14:1",
  "/chapters/teo-14:10",
  "/chapters/teo-15:0",
  "/chapters/teo-16:0",
  "/chapters/teo-16:7",
  "/chapters/teo-17:0",
  "/chapters/teo-17:4",
  "/chapters/teo-17:5",
  "/chapters/teo-18:4",
  "/chapters/teo-18:7",
  "/chapters/teo-19:4",
  "/chapters/teo-19:5",
  "/chapters/teo-19:7",
  "/chapters/teo-19:10",
  "/chapters/teo-19:13",
  "/chapters/teo-19:14",
  "/chapters/teo-19:16",
  "/chapters/teo-21:11",
  "/chapters/teo-21:14",
  "/chapters/teo-21:17",
  "/chapters/teo-21:18",
  "/chapters/teo-22:6",
  "/chapters/teo-23:12",
  "/chapters/teo-23:14",
  "/chapters/teo-24:14"
];

const kindLabels = {
  definition: "Definition",
  theorem: "Theorem",
  lemma: "Lemma",
  proposition: "Proposition",
  corollary: "Corollary",
  remark: "Observation",
  example: "Example",
  exercise: "Exercise"
};

function chapterSlugFromHeartPath(value) {
  return value.slice("/chapters/".length, value.lastIndexOf(":"));
}

function blockIndexFromHeartPath(value) {
  return Number(value.slice(value.lastIndexOf(":") + 1));
}

function readChapter(slug) {
  return fs.readFileSync(path.join(chaptersDir, `${slug}.mdx`), "utf8");
}

function chapterTitle(source, slug) {
  return source.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? slug.replace("-", " ");
}

function extractBlocks(source) {
  const blocks = [];
  const stack = [];
  const tagPattern = /<\/?BookBlock\b[^>]*>/g;
  let openingIndex = 0;
  let match;

  while ((match = tagPattern.exec(source)) !== null) {
    if (match[0].startsWith("</")) {
      const opening = stack.pop();
      if (opening) {
        blocks.push({
          index: opening.index,
          attributes: opening.attributes,
          body: source.slice(opening.bodyStart, match.index)
        });
      }
      continue;
    }

    stack.push({
      index: openingIndex,
      attributes: match[0],
      bodyStart: tagPattern.lastIndex
    });
    openingIndex += 1;
  }

  return blocks;
}

function attrValue(attributes, name) {
  return attributes.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? "";
}

function blockTitle(block) {
  return (
    attrValue(block.attributes, "title") ||
    block.body.match(/<Fragment\b[^>]*slot="title"[^>]*>([\s\S]*?)<\/Fragment>/)?.[1]?.trim() ||
    ""
  );
}

function convertPreviewLink(match) {
  const href = attrValue(match, "href");
  const label = attrValue(match, "label") || attrValue(match, "title") || href;
  const chapter = href.match(/\/chapters\/(teo|pr)-(\d+)/);
  const hash = href.match(/#([A-Za-z0-9_-]+)/)?.[1];
  if (chapter) {
    const prefix = chapter[1] === "teo" ? "GS - Teo" : "Pr";
    const note = `${prefix}${chapter[2]}`;
    return `[[${note}${hash ? `#^${hash}` : ""}|${label}]]`;
  }
  return `[${label}](${href})`;
}

function mdxToObsidian(source) {
  let out = source
    .replace(/\r\n/g, "\n")
    .replace(/<Fragment\b[^>]*slot="title"[^>]*>([\s\S]*?)<\/Fragment>/g, "$1")
    .replace(/<span\b[^>]*id="([^"]+)"[^>]*>\s*<\/span>/g, "^$1")
    .replace(/<PreviewLink\b[^>]*\/>/g, (match) => convertPreviewLink(match))
    .replace(/!\[([^\]]*)\]\((\/images\/[^)\s]+)(?:\s+"[^"]*")?\)/g, (_match, alt, src) => {
      const file = decodeURIComponent(src.split("/").pop() ?? alt).replaceAll("-", " ");
      return `![[${file}]]`;
    });

  out = out.replace(/<Math\b([^>]*)tex=\{("(?:\\.|[^"\\])*")\}([^>]*)\/>/g, (_match, before, rawTex, after) => {
    let tex = rawTex;
    try {
      tex = JSON.parse(rawTex);
    } catch {
      tex = rawTex.slice(1, -1);
    }
    return /\bdisplay\b/.test(`${before} ${after}`) ? `$$${tex}$$` : `$${tex}$`;
  });

  return out
    .replace(/<\/?BookBlock\b[^>]*>/g, "")
    .replace(/<Proof\b[^>]*>/g, "")
    .replace(/<\/Proof>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitProof(body) {
  const match = body.match(/<Proof\b([^>]*)>([\s\S]*?)<\/Proof>/);
  if (!match) return null;
  return {
    title: attrValue(match[1], "title") || "Demostracion",
    body: match[2].trim()
  };
}

function quoteLines(markdown, depth = 1) {
  const prefix = ">".repeat(depth);
  return markdown
    .split("\n")
    .map((line) => (line ? `${prefix}${line}` : prefix))
    .join("\n");
}

function convertBlock(block) {
  const kind = attrValue(block.attributes, "kind") || "proposition";
  const title = mdxToObsidian(blockTitle(block));
  const proof = splitProof(block.body);
  const statement = mdxToObsidian(
    block.body
      .replace(/<Proof\b[\s\S]*?<\/Proof>/g, "")
      .replace(/<Fragment\b[^>]*slot="title"[^>]*>[\s\S]*?<\/Fragment>/g, "")
  );
  const calloutKind = kindLabels[kind] ?? "Proposition";
  const lines = [`>[!${calloutKind}]${title ? ` ${title}` : ""}`];
  if (statement) lines.push(quoteLines(statement));
  if (proof?.body) {
    lines.push(`>>[!Proof]- ${mdxToObsidian(proof.title)}`);
    lines.push(quoteLines(mdxToObsidian(proof.body), 2));
  }
  return lines.join("\n");
}

const chapterCache = new Map();
const entries = heartPaths.map((heartPath, order) => {
  const slug = chapterSlugFromHeartPath(heartPath);
  const index = blockIndexFromHeartPath(heartPath);
  if (!chapterCache.has(slug)) {
    const source = readChapter(slug);
    chapterCache.set(slug, {
      source,
      title: chapterTitle(source, slug),
      blocks: extractBlocks(source)
    });
  }
  const chapter = chapterCache.get(slug);
  const block = chapter.blocks.find((item) => item.index === index);
  if (!block) {
    throw new Error(`No encontre ${heartPath}`);
  }
  return { order, slug, chapterTitle: chapter.title, index, block };
});

const out = ["# Teoremas corazón"];
let currentSlug = "";
for (const entry of entries) {
  if (entry.slug !== currentSlug) {
    currentSlug = entry.slug;
    out.push("", `## ${entry.chapterTitle}`);
  }
  out.push("", convertBlock(entry.block));
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, `${out.join("\n")}\n`, "utf8");
console.log(outFile);
