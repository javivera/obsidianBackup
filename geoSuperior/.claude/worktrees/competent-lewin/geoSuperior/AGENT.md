# AGENT.md

## Goal

Document the workflow that worked in this workspace for extracting exercise statements from PDF practicals and turning them into clean Obsidian Markdown with solutions.

This process worked well for:

- `Practicos/Pr0CF.pdf`
- `Practicos/Pr1CF.pdf`

## What Worked

### 1. Try text extraction first

The PDFs were text-based enough that direct extraction worked. The command that worked in this environment was:

```bash
mutool draw -F txt -o - 'Practicos/Pr0CF.pdf'
mutool draw -F txt -o - 'Practicos/Pr1CF.pdf'
```

Notes:

- `pdftotext` was **not** installed here.
- `mutool` was available at `/opt/homebrew/bin/mutool`.
- `mutool` output included page headers and some encoding artifacts, but it preserved the exercise order and most formulas well enough to reconstruct the statements.

### 2. Extract only the parts needed

Do not try to clean the whole raw PDF dump mechanically in one shot.

What worked better:

- identify each exercise statement from the extracted text
- rewrite it manually into clean Markdown + LaTeX
- keep the math notation normalized while preserving the original meaning

This was faster and safer than trying to regex-clean the entire raw dump.

### 3. Use the PDF only for enunciados, not for final formatting

The reliable pattern was:

1. Take the enunciado from the PDF extraction.
2. Use the existing Markdown solution file as the base for the proof text.
3. Rewrite the note into a clean Obsidian structure instead of patching line-by-line forever.

For these files, the final format that worked was:

```md
### Ejercicio N

>[!Exercise]
>Enunciado...
>>[!Proof]-
>>Solución...
```

### 4. Keep display math on one line

Obsidian behaved better when each display formula stayed on one physical line:

```md
>$$f(x)=x^2+1$$
```

and not:

```md
>$$
>f(x)=x^2+1
>$$
```

### 5. Validate before stopping

After rewriting, verify:

- every exercise is present
- every solution is inside a nested `Proof` callout
- all `$$...$$` blocks are single-line
- no old `\(...\)` or `\[...\]` delimiters remain if the target is Obsidian-style Markdown

Useful checks:

```bash
sed -n '1,260p' 'Practicos/Soluciones Pr0CF.md'
sed -n '1,420p' 'Practicos/Soluciones Pr1CF.md'
```

For broken multiline `$$` blocks:

```bash
awk 'BEGIN{open=0} { c=gsub(/\$\$/,"&"); if (c%2==1) print FNR ":odd $$ count" }' \
  'Practicos/Soluciones Pr0CF.md' \
  'Practicos/Soluciones Pr1CF.md'
```

If that prints nothing, every line has balanced `$$`.

## What Did Not Work Well

### 1. Blind regex cleanup of the whole file

This caused damage more than once:

- collapsing text unintentionally
- merging paragraphs
- breaking callout structure
- corrupting display math blocks

Rule: if the note is already partly structured, avoid global regex replacements unless the pattern is extremely narrow.

### 2. Assuming `pdftotext` existed

It did not. The fallback that worked was `mutool`.

### 3. Over-trusting extracted symbols

Some characters from the PDF came out malformed:

- ligatures
- accented characters
- set minus / arrows / special symbols
- occasional weird substitutions in formulas

Rule: use the extracted text as a source, then normalize manually.

## Recommended Process

When converting a new practical PDF in this workspace:

1. Run `mutool draw -F txt -o - 'path/to/file.pdf'`.
2. Identify each exercise statement from the raw text.
3. Create or rewrite the Markdown file in clean Obsidian format.
4. Put the enunciado in an `Exercise` callout.
5. Put the solution in a nested `Proof` callout.
6. Normalize math to `$...$` and single-line `$$...$$`.
7. Inspect the final file with `sed`.
8. Run the `awk` check for broken display math.

## Minimal Template

```md
# Título

### Ejercicio 1

>[!Exercise]
>Enunciado del ejercicio.
>>[!Proof]-
>>Desarrollo de la solución.
```

## Scope Warning

This process works for PDFs that already contain machine-readable text.

If the PDF is image-only or scanned badly, this workflow is not enough by itself. In that case, use OCR first, then do the same cleanup and structuring process afterward.
