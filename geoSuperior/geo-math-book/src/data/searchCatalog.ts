import { chapters } from "./chapters";

const kindLabels = {
  definition: "Definicion",
  theorem: "Teorema",
  lemma: "Lema",
  proposition: "Proposicion",
  corollary: "Corolario",
  remark: "Observacion",
  example: "Ejemplo",
  exercise: "Ejercicio"
} as const;

type Kind = keyof typeof kindLabels;

const chapterSources = import.meta.glob("../pages/chapters/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

function plainText(source: string) {
  return source
    .replace(/<Proof\b[\s\S]*?<\/Proof>/g, " ")
    .replace(/<Fragment\b[^>]*slot="title"[^>]*>([\s\S]*?)<\/Fragment>/g, "$1")
    .replace(/<Math\b[^>]*tex=\{"([\s\S]*?)"\}[^>]*\/>/g, " $1 ")
    .replace(/<PreviewLink\b[^>]*label="([^"]*)"[^>]*\/>/g, " $1 ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_`#>-]/g, " ")
    .replace(/\\(?:operatorname|text|mathrm|mathbb|mathfrak|colon)\{([^}]*)\}/g, " $1 ")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[{}$]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBlocks(source: string) {
  const blocks: Array<{ index: number; attributes: string; body: string }> = [];
  const stack: Array<{ index: number; attributes: string; bodyStart: number }> = [];
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

  return blocks.sort((a, b) => a.index - b.index);
}

export const searchCatalog = chapters.flatMap((chapter) => {
  const slug = chapter.href.split("/").filter(Boolean).at(-1);
  const source = slug ? chapterSources[`../pages/chapters/${slug}.mdx`] : undefined;
  if (!source) return [];

  const entries: Array<{
    chapterHref: string;
    chapterLabel: string;
    chapterTitle: string;
    index: number;
    kind: Kind;
    kindLabel: string;
    title: string;
    preview: string;
    searchText: string;
  }> = [];

  extractBlocks(source).forEach(({ index, attributes, body }) => {
    const kind = attributes.match(/\bkind="([^"]+)"/)?.[1] as Kind | undefined;
    if (!kind || !(kind in kindLabels)) return;

    const attributeTitle = attributes.match(/\btitle="([^"]+)"/)?.[1];
    const slotTitle = body.match(
      /<Fragment\b[^>]*slot="title"[^>]*>([\s\S]*?)<\/Fragment>/
    )?.[1];
    const cleanBody = plainText(body);
    const title = plainText(attributeTitle ?? slotTitle ?? "") || cleanBody.slice(0, 90);
    const previewText = cleanBody.startsWith(title)
      ? cleanBody.slice(title.length).trim()
      : cleanBody;

    entries.push({
      chapterHref: chapter.href,
      chapterLabel: chapter.label,
      chapterTitle: chapter.title,
      index,
      kind,
      kindLabel: kindLabels[kind],
      title,
      preview: previewText.slice(0, 230),
      searchText: `${title} ${cleanBody} ${kindLabels[kind]} ${chapter.label} ${chapter.title}`
    });
  });

  return entries;
});
