import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const base = "/geo-math-book";

function rehypeBasePath() {
  return (tree) => {
    const visit = (node) => {
      if (node?.properties) {
        for (const property of ["href", "src"]) {
          const value = node.properties[property];
          if (typeof value === "string" && value.startsWith("/") && !value.startsWith(`${base}/`)) {
            node.properties[property] = `${base}${value}`;
          }
        }
      }

      node?.children?.forEach(visit);
    };

    visit(tree);
  };
}

export default defineConfig({
  base,
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeBasePath]
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeBasePath],
    shikiConfig: {
      theme: "github-light"
    }
  }
});
