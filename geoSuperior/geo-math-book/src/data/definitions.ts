import { searchCatalog } from "./searchCatalog";
import {
  blockTitle,
  chapterSources,
  extractBlocks,
  renderBlocksAsHtml,
  renderInlineMdx
} from "./corazonTheorems";

export const definitions = searchCatalog
  .filter((entry) => entry.kind === "definition")
  .map((entry) => {
    const slug = entry.chapterHref.split("/").filter(Boolean).at(-1);
    const sourceFile = slug ? `src/pages/chapters/${slug}.mdx` : "";
    const source = slug ? chapterSources[`../pages/chapters/${slug}.mdx`] : undefined;
    const block = source ? extractBlocks(source).find((item) => item.index === entry.index) : undefined;
    if (!block) return null;

    const statementSource = block.body
      .replace(/<Proof\b[\s\S]*?<\/Proof>/g, "")
      .replace(/<Fragment\b[^>]*slot="title"[^>]*>[\s\S]*?<\/Fragment>/g, "");

    return {
      id: `${entry.chapterHref}:${entry.index}`,
      titleHtml: renderInlineMdx(blockTitle(block.attributes, block.body)),
      chapterLabel: entry.chapterLabel,
      chapterTitle: entry.chapterTitle,
      chapterHref: entry.chapterHref,
      sourceFile,
      blockIndex: entry.index,
      statementHtml: renderBlocksAsHtml(statementSource)
    };
  })
  .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
