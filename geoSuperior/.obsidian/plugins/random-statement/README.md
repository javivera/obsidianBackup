# Random Statement

An Obsidian study plugin for drawing a random mathematical statement from a chosen set of notes, then revealing its proof one step at a time.

## Recognized note format

Statements are top-level Obsidian callouts of type `Theorem`, `Proposition`, `Lemma`, `Corollary`, or `Exercise`. A nested `Proof` callout is associated with the statement above it:

```markdown
>[!Theorem] Pythagorean theorem
>For a right triangle, $a^2+b^2=c^2$.
>
>>[!Proof]-
>>1. First step.
>>2. Second step.
```

Numbered or bulleted proof items become separate revealable steps. An unnumbered proof is split by paragraphs.

## Use

1. Enable **Random Statement** in Obsidian's Community plugins settings.
2. Click the dice icon in the left ribbon, or run **Random Statement: Open study view**.
3. Choose the Markdown notes to study.
4. Draw a statement and reveal its proof when available.
