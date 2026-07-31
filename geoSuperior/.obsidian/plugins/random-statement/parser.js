const STATEMENT_TYPES = new Set([
  "theorem",
  "proposition",
  "lemma",
  "corollary",
  "exercise",
]);

function calloutHeader(line) {
  const match = line.match(/^(>+)\s*\[!([^\]]+)\][+-]?\s*(.*)$/i);
  if (!match) return null;
  return {
    depth: match[1].length,
    type: match[2].trim().toLowerCase(),
    title: match[3].trim(),
  };
}

function stripQuote(line, depth) {
  let result = line;
  for (let i = 0; i < depth; i += 1) {
    result = result.replace(/^>\s?/, "");
  }
  return result;
}

function trimBlankLines(lines) {
  let start = 0;
  let end = lines.length;
  while (start < end && !lines[start].trim()) start += 1;
  while (end > start && !lines[end - 1].trim()) end -= 1;
  return lines.slice(start, end);
}

function proofSteps(markdown) {
  const lines = markdown.split("\n");
  const steps = [];
  let current = [];
  let inDisplayMath = false;

  const flush = () => {
    const cleaned = trimBlankLines(current);
    if (cleaned.length) {
      // The view supplies its own step badge, so remove only the outer marker.
      cleaned[0] = cleaned[0].replace(/^\s*(?:\d+[.)]|[-*+])\s+/, "");
      steps.push(cleaned.join("\n"));
    }
    current = [];
  };

  for (const line of lines) {
    const delimiterCount = (line.match(/\$\$/g) || []).length;
    const beginsStep = !inDisplayMath && /^\s*(?:\d+[.)]|[-*+])\s+\S/.test(line);
    if (beginsStep && current.length) flush();
    current.push(line);
    if (delimiterCount % 2 === 1) inDisplayMath = !inDisplayMath;
  }
  flush();

  if (steps.length > 1) return steps;

  // Unnumbered proofs still reveal naturally, paragraph by paragraph.
  const paragraphs = markdown
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
  return paragraphs.length ? paragraphs : steps;
}

function parseStatements(markdown, filePath = "") {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const statements = [];

  for (let i = 0; i < lines.length; i += 1) {
    const header = calloutHeader(lines[i]);
    if (!header || header.depth !== 1 || !STATEMENT_TYPES.has(header.type)) continue;

    const startLine = i + 1;
    const body = [];
    const proofs = [];
    let currentProof = null;
    let j = i + 1;

    for (; j < lines.length; j += 1) {
      if (!lines[j].startsWith(">")) break;
      const nested = calloutHeader(lines[j]);

      if (nested && nested.depth === 1) break;
      if (nested && nested.depth >= 2 && nested.type === "proof") {
        currentProof = { title: nested.title, lines: [] };
        proofs.push(currentProof);
        continue;
      }

      if (currentProof && /^>>/.test(lines[j])) {
        currentProof.lines.push(stripQuote(lines[j], 2));
      } else if (!currentProof) {
        body.push(stripQuote(lines[j], 1));
      }
    }

    const statementMarkdown = trimBlankLines(body).join("\n");
    if (statementMarkdown) {
      const proofMarkdown = proofs
        .map((proof) => trimBlankLines(proof.lines).join("\n"))
        .filter(Boolean)
        .join("\n\n");
      statements.push({
        type: header.type,
        title: header.title || header.type[0].toUpperCase() + header.type.slice(1),
        statementMarkdown,
        proofMarkdown,
        proofSteps: proofMarkdown ? proofSteps(proofMarkdown) : [],
        filePath,
        line: startLine,
      });
    }

    i = Math.max(i, j - 1);
  }

  return statements;
}

module.exports = { parseStatements, proofSteps, STATEMENT_TYPES };
