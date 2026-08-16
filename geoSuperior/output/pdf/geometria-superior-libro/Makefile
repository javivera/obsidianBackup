SHELL := /bin/sh

.PHONY: all regenerate clean

all: regenerate
	latexmk -lualatex -interaction=nonstopmode -halt-on-error main.tex

regenerate:
	cd ../../.. && node geo-math-book/scripts/build-latex-book.mjs

clean:
	latexmk -c
