# Libro de teoría de Geometría Superior

Este directorio contiene un proyecto LaTeX completo, generado a partir de las
notas de `Teoricos/`. Incluye los teóricos 1--25. No incluye la guía de lectura,
el compendio `Teoremas Corazon.md`, prácticos, exámenes, copias de seguridad ni
la nota personal `Dudas.md`.

## Compilar

La opción recomendada es una distribución TeX completa (MacTeX o TeX Live) con
`latexmk` y LuaLaTeX:

```sh
cd output/pdf/geometria-superior-libro
make
```

El PDF resultante será `main.pdf`.

Si no tiene `latexmk`, puede ejecutar:

```sh
node ../../../geo-math-book/scripts/build-latex-book.mjs
lualatex main.tex
lualatex main.tex
```

Las dos pasadas actualizan correctamente el índice y las referencias internas.

## Actualizar el libro después de editar Obsidian

```sh
make regenerate
make
```

No edite a mano los archivos de `chapters/`: se regeneran desde Markdown. El
diseño general vive en `book-style.tex` y la selección/orden de capítulos en
`main.tex`.

`MANIFESTO.txt` registra exactamente las fuentes incluidas y cualquier imagen
que no haya podido encontrarse durante la conversión.
