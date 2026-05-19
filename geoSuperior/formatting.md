# Formatting Guide for Practicos

Use the same Obsidian structure as `Practicos/GS - Pr3.md`.

## Exercise Sections

Each exercise starts with a level-three heading:

```markdown
### Ejercicio 1
```

Do not add a document title above the exercises unless the reference file already does.

## Statement Callout

Put the proposition or exercise statement inside an Obsidian exercise callout:

```markdown
>[!Exercise]
>Sea ...
>$$...$$
```

Every line of the statement, including blank lines and display math delimiters, should begin with `>`.

## Proof Callout

Put the solution immediately after the statement as a nested proof callout:

```markdown
>>[!Proof]-
>>1. First proof step.
>>$$important\ identity$$
>>2. Next proof step.
>>$$...$$
```

Every line of the proof, including blank lines and display math delimiters, should begin with `>>`.

## Multiple Parts

For exercises with several propositions or subparts, keep them inside the same exercise:

```markdown
>[!Exercise]
>**Proposición 1.**
>...
>
>**Proposición 2.**
>...
>>[!Proof]-
>>1. **Solución 1.**
>>2. ...
>>
>>3. **Solución 2.**
>>4. ...
```

Use bold labels such as `**Proposición 1.**`, `**Solución 1.**`, `**(a)**`, or descriptive labels when they make the structure clearer.

## Style Notes

- Use `### Ejercicio n`, not `##`.
- Use `>[!Exercise]` for statements.
- Use `>>[!Proof]-` for solutions.
- In proofs, write steps as `>>1.`, `>>2.`, `>>3.`, each step on its own new line. Reset numbering at the start of each proof callout.
- Keep display math in `$$ ... $$`.
- In proofs, put important identities, final conclusions, intervals of maximal definition, non-completeness/completeness conclusions, and computed brackets/flows in display math with `$$ ... $$` so they stand out.
- If the display contains a single mathematical statement, keep it on one line, e.g. `>>$$X \text{ no es completo.}$$`; use multiline display only for genuinely multiline derivations, cases, matrices, or aligned computations.
- Keep the text in Spanish.
- Preserve the mathematical content as written, correcting only clear typos.
