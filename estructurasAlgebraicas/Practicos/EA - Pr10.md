---
tags:
  - AlgebraicStructures
  - Practico10
source: "https://famaf.aulavirtual.unc.edu.ar/pluginfile.php/79214/mod_resource/content/2/EA_10_2026%20%281%29.pdf"
---

# Práctico 10

Fuente: [[EA - Pr10.pdf]]. Estructuras Algebraicas, FaMAF-UNC — 2026.

## Localización

Sea $A$ un anillo conmutativo con unidad y sea $S\subseteq A$ un subconjunto multiplicativamente cerrado, es decir, $$1\in S,\qquad s,t\in S\Rightarrow st\in S.$$

La localización de $A$ respecto de $S$ es el anillo que se obtiene al permitir dividir por los elementos de $S$.

>[!exercise] Ejercicio 1
>Defina la relación de equivalencia $\sim$ sobre el conjunto $A\times S$ mediante $(a,s)\sim(b,t)$ si existe $u\in S$ tal que $$u(at-bs)=0.$$
>Demuestre que $\sim$ es una relación de equivalencia.

>[!exercise] Ejercicio 2
>Denote por $S^{-1}A$ al conjunto de clases de equivalencia. Escriba la notación $$\frac{a}{s}:=[(a,s)]$$ y defina las operaciones $$\frac{a}{s}+\frac{b}{t}=\frac{at+bs}{st},\qquad\frac{a}{s}\frac{b}{t}=\frac{ab}{st}.$$
>Demuestre que estas operaciones están bien definidas y que $S^{-1}A$ es un anillo conmutativo con unidad.

>[!exercise] Ejercicio 3
>Muestre que existe un morfismo de anillos natural $$\iota:A\longrightarrow S^{-1}A,\qquad a\longmapsto\frac{a}{1}.$$
>Pruebe que para todo $s\in S$ el elemento $\iota(s)$ es invertible en $S^{-1}A$ y determine explícitamente su inverso.

>[!exercise] Ejercicio 4
>Demuestre la siguiente propiedad universal:
>Si $B$ es un anillo conmutativo y $f:A\longrightarrow B$ es un morfismo de anillos tal que $f(s)$ es invertible para todo $s\in S$, entonces existe un único morfismo $$\tilde f:S^{-1}A\longrightarrow B$$ tal que $$\tilde f\circ\iota=f.$$
>Es decir, demuestre que el siguiente diagrama es conmutativo: $$\begin{array}{ccc}A&\xrightarrow{f}&B\\{\scriptstyle\iota}\downarrow&&\nearrow{\scriptstyle\tilde f}\\S^{-1}A&&\end{array}$$

>[!exercise] Ejercicio 5
>Sea $A=\mathbb Z$ y sea $S=\mathbb Z\setminus p\mathbb Z$ para un número primo fijo $p$.
>- **(a)** Describa explícitamente el anillo $S^{-1}\mathbb Z$. Muestre que sus elementos pueden escribirse como fracciones $\frac{a}{b}$, $a,b\in\mathbb Z$, $p\nmid b$.
>- **(b)** Demuestre que $S^{-1}\mathbb Z$ es un anillo local, es decir, que posee un único ideal maximal.
>- **(c)** Determine dicho ideal maximal y demuestre que el cuerpo residual asociado es $$S^{-1}\mathbb Z/pS^{-1}\mathbb Z\cong\mathbb F_p.$$

>[!exercise] Ejercicio 6
>Sea $A=\mathbb R[x,y]$. Sea $S=\{p(x,y)\in\mathbb R[x,y]:p(0,0)\neq0\}$.
>- **(a)** Describa la localización $A_{(0,0)}=S^{-1}A$.
>- **(b)** Vamos a definir un nuevo anillo $R_0$. Los elementos de $R_0$ son (clases de equivalencia de) pares $(U,\varphi)$ donde $(0,0)\in U\subset\mathbb R^2$ es un entorno abierto de $(0,0)$, y $\varphi:U\to\mathbb R$ es una función continua tal que $\varphi=\frac{f}{g}$, donde $f,g\in\mathbb R[x,y]$ son dos polinomios tales que $g$ nunca es nula en $U$. Dos pares $(U,\varphi)$, $(U',\varphi')$ se dicen equivalentes si existe un entorno abierto $V$ de $(0,0)$ tal que $V\subseteq U\cap U'$ y $\varphi=\varphi'$ en $V$. Demostrar que $R_0$ es un anillo con las operaciones inducidas por la suma y el producto de funciones racionales.
>- **(c)** Definir una aplicación $$\Phi:A_{(0,0)}\longrightarrow R_0,\qquad\Phi\left(\frac{f}{g}\right)=\left[\frac{f}{g}\right],$$ y demostrar que está bien definida y es un isomorfismo de anillos.
