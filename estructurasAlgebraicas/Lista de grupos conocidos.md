---
tags:
  - AlgebraicStructures
  - Groups
  - Summary
---
# Lista de grupos conocidos

Grupos cuya estructura se probó o se identificó en [[Practicos/EA - Pr1]] y [[Practicos/EA - Pr2]]. Cuando la respuesta depende de un parámetro, se indica la condición correspondiente.

| Grupo | Operación | ¿Abeliano? | Referencia |
| --- | --- | --- | --- |
| $(\mathbb Z\times\mathbb Z,*)$, con $(m,n)*(r,s)=(m+(-1)^nr,n+s)$ | $*$ | No | Pr1, Ej. 1(b) |
| $(S^1,\cdot)$ | Producto complejo | Sí | Pr1, Ej. 2(a) |
| $(\operatorname{SL}(n,\mathbb R),\cdot)$ | Producto de matrices | Sí si $n=1$; no si $n\ge 2$ | Pr1, Ej. 2(b) |
| $(U_n,\cdot)$ | Producto módulo $n$ | Sí | Pr1, Ej. 2(c) |
| $(G_n,\cdot)$, raíces $n$-ésimas de la unidad | Producto complejo | Sí | Pr1, Ej. 2(d) |
| $(G_\infty,\cdot)$, todas las raíces de la unidad | Producto complejo | Sí | Pr1, Ej. 2(e) |
| $(\mathbb Z_p\setminus\{\overline 0\},\cdot)$ | Producto módulo $p$ | Sí, cuando $p$ es primo | Pr1, Ej. 4 |
| $(\mathbb Z_4,+)$ | Suma módulo $4$ | Sí | Pr1, Ej. 5 |
| $(\mathbb Z_2\times\mathbb Z_2,+)$ | Suma componente a componente módulo $2$ | Sí | Pr1, Ej. 5 |
| $D_4$ | Composición de simetrías del cuadrado | No | Pr1, Ej. 6 |
| $\operatorname{GL}(2,\mathbb Z_2)=\operatorname{SL}(2,\mathbb Z_2)$ | Producto de matrices | No; además es isomorfo a $S_3$ | Pr1, Ej. 7 |
| $\operatorname{GL}(n,\mathbb Z_p)$ | Producto de matrices | En general no; es abeliano para $n=1$ | Pr1, Ej. 8 |
| $\operatorname{SL}(n,\mathbb Z_p)$ | Producto de matrices | En general no; es abeliano para $n=1$ | Pr1, Ej. 8 |
| $R_p=\left\{a/b\in\mathbb Q:(b,p)=1\right\}$ | Suma | Sí | Pr1, Ej. 13 |
| $R^p=\left\{a/p^i:i\ge 0\right\}$ | Suma | Sí | Pr1, Ej. 13 |
| $\mathcal H$ | Producto de matrices complejas | No; es isomorfo a $Q_8$ | Pr2, Ej. 5 y 19 |
| $\langle A\rangle$, con $A=\begin{pmatrix}1&1\\-1&0\end{pmatrix}$ | Producto de matrices | Sí; es cíclico de orden $6$ | Pr2, Ej. 11 |
| $\langle A,B\rangle$, con $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ y $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ | Producto de matrices | No; es de orden $8$ e isomorfo a $D_4$ | Pr2, Ej. 15 |
| $G=\left\{\begin{pmatrix}1&a&b\\0&1&c\\0&0&1\end{pmatrix}:a,b,c\in\mathbb Z_p\right\}$ | Producto de matrices | No | Pr2, Ej. 16 |
| $\mathbb Z_2\times\mathbb Z_2\times\mathbb Z_2$ | Suma | Sí | Pr2, Ej. 19 |
| $\mathbb Z_2\times\mathbb Z_4$ | Suma | Sí | Pr2, Ej. 19 |
| $\mathbb Z_2\times G_4$ | Producto componente a componente | Sí | Pr2, Ej. 19 |
| $\mathbb Z_8$ | Suma módulo $8$ | Sí | Pr2, Ej. 19 |
| $G_8$ | Producto complejo | Sí | Pr2, Ej. 19 |
| $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ | Producto de cuaterniones | No | Pr2, Ej. 19 |
| $S_n$ | Composición de permutaciones | Sí si $n\le 2$; no si $n\ge 3$ | Pr2, Ej. 17 |

## Subgrupos identificados

Todo subgrupo de un grupo abeliano es abeliano. En particular, los subgrupos de $\mathbb Z_3$ y de $\mathbb Z_2\times\mathbb Z_2$ listados en Pr2, Ej. 12 son abelianos.

Los subgrupos de $S_3$ de Pr2, Ej. 12 son abelianos salvo el grupo total $S_3$: el trivial, los tres subgrupos generados por transposiciones y el subgrupo $\langle(123)\rangle=\mathbb A_3$ son cíclicos.

Los subgrupos de $D_4$ de orden $1$, $2$ y $4$ que aparecen en Pr2, Ej. 12 son abelianos; $D_4$ completo no es abeliano. En particular, $\langle r^2,s\rangle$ y $\langle r^2,sr\rangle$ son isomorfos a $\mathbb Z_2\times\mathbb Z_2$.

## Casos que no son grupos

- $(\mathbb R_{>0},*)$ con $a*b=a^b$ no es un grupo porque la operación no es asociativa.
- $(\mathcal P(X),\cup)$ no es un grupo si $X\ne\varnothing$; si $X=\varnothing$, es el grupo trivial abeliano.
- $(\mathcal P(X),\cap)$ no es un grupo si $X\ne\varnothing$; si $X=\varnothing$, es el grupo trivial abeliano.
- $(\mathbb N_0,+)$ es un semigrupo cancelativo, pero no es un grupo porque los elementos positivos no tienen inverso aditivo en $\mathbb N_0$.
