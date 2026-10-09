---
tags:
  - AlgebraicStructures
  - Practico7
source: "https://famaf.aulavirtual.unc.edu.ar/pluginfile.php/79124/mod_resource/content/1/Pr%C3%A1ctico%207.pdf"
---

# Práctico 7

Fuente: [[EA - Pr7.pdf]]. Estructuras Algebraicas, FaMAF-UNC — 2026.

## Factorización

>[!exercise] Ejercicio 1
>Probar las siguientes afirmaciones.
>- **(a)** $\mathbb Z$ es un dominio de ideales principales (DIP).
>- **(b)** Si $R$ es un anillo de ideales principales (AIP) y $f:R\to S$ es un homomorfismo de anillos suryectivo, entonces $S$ es un AIP.
>- **(c)** $\mathbb Z_n$ es un AIP, para todo $n\geq2$.

>[!exercise] Ejercicio 2
>Sea $R:=\{a+b\sqrt{10}:a,b\in\mathbb Z\}$. Probar las siguientes afirmaciones.
>- **(a)** $R$ es subanillo de $\mathbb R$.
>- **(b)** La función $N:R\to\mathbb Z$ dada por $N(a+b\sqrt{10}):=a^2-10b^2$ satisface $N(uv)=N(u)N(v)$, para todo $u,v\in R$.
>- **(c)** $N(u)=0$ si y sólo si $u=0$.
>- **(d)** $u$ es una unidad en $R$ si y sólo si $N(u)=\pm1$.
>- **(e)** $2$, $3$, $4+\sqrt{10}$ y $4-\sqrt{10}$ son elementos irreducibles de $R$.
>- **(f)** $2$, $3$, $4+\sqrt{10}$ y $4-\sqrt{10}$ no son elementos primos de $R$.

>[!exercise] Ejercicio 3
>Sea $R$ un DIP e $I\subset R$ ideal no nulo. Entonces $I$ es primo si y sólo si $I$ es maximal.

>[!exercise] Ejercicio 4
>Sean $R$ un dominio de factorización única (DFU) y $d\in R$, con $d\neq0$. Probar que existe sólo un número finito de ideales principales distintos que contienen al ideal $(d)$.

>[!exercise] Ejercicio 5
>Si $R$ es un DFU, $a,b\in R$ son coprimos y $a\mid bc$, entonces $a\mid c$.

>[!exercise] Ejercicio 6
>Sea $(R,\varphi)$ anillo euclidiano (AE). Probar que $a$ es unidad en $R$ si y sólo si $\varphi(a)=\varphi(1)$.

>[!exercise] Ejercicio 7
>Consideremos el anillo de enteros gaussianos $\mathbb Z[i]$.
>- **(a)** Si $a,n\in\mathbb Z$, con $n>0$, entonces existen $q,r\in\mathbb Z$ tales que $a=qn+r$, donde $|r|\leq n/2$.
>- **(b)** Probar que $\mathbb Z[i]$ es dominio euclidiano (DE) con $\varphi(a+bi)=a^2+b^2$.
>- **(c)** Determinar las unidades de $\mathbb Z[i]$.
>- **(d)** Dividir $4+5i$ por $2+3i$ de dos maneras distintas.
>- **(e)** ¿De cuántas maneras distintas se puede hacer la división del ítem anterior?
>- **(f)** Dividir $a+bi$ por la unidad $i$. ¿Se puede hacer de dos maneras distintas?
>- **(g)** **∗** Diseñar un algoritmo para dividir dos enteros de Gauss cualesquiera.
>- **(h)** Calcular el máximo común divisor de $11+7i$ y $18-i$.

>[!exercise] Ejercicio 8
>Probar que:
>- **(i)** **∗** $\mathrm{AE}\Rightarrow\mathrm{AIP}$ con identidad.
>- **(ii)** $\mathrm{DIP}\Rightarrow\mathrm{DFU}$.
>Dar contraejemplos que muestren que las recíprocas no son ciertas.

## Anillos de polinomios

>[!exercise] Ejercicio 9
>Sean $R$ anillo conmutativo con $1$ y $p=\sum_{j=0}^{n}a_jx^j$ un polinomio en $R[x]$. Probar las siguientes afirmaciones:
>- **(a)** $p$ es divisor de cero si y sólo si existe $0\neq b\in R$ tal que $ba_n=ba_{n-1}=\cdots=ba_0=0$.
>- **(b)** $p$ es unidad si y sólo si $a_0$ es unidad y $a_1,\ldots,a_n$ son nilpotentes.

>[!exercise] Ejercicio 10
>Sea $F$ cuerpo. Probar que $(x)$ es un ideal maximal en $F[x]$.

>[!exercise] Ejercicio 11
>Sea $D$ un dominio íntegro.
>- **(a)** Si $D$ tiene un elemento irreducible $c$, entonces $I=(c,x)$ no es ideal principal de $D[x]$.
>- **(b)** Mostrar que $\mathbb Z[x]$ no es un DIP.
>- **(c)** Sean $F$ un cuerpo y $n\in\mathbb Z$, con $n\geq2$. Probar que $F[x_1,\ldots,x_n]$ no es un DIP. (Ayuda: mostrar que $x_1$ es irreducible en $F[x_1,\ldots,x_{n-1}]$).

>[!exercise] Ejercicio 12
>Describir los siguientes anillos.
>- **(i)** $\mathbb Z[x]/(2,x)$.
>- **(ii)** $\mathbb Z[x]/(2x)$.
>- **(iii)** $\mathbb Z[i]/(i)$.
>- **(iv)** $\mathbb Z[i]/(1+i)$.

>[!exercise] Ejercicio 13
>Sea $R$ un anillo y denotemos por $R[[x]]$ al conjunto de todas las sucesiones de elementos de $R$, $(a_0,a_1,\ldots)$. Probar las siguientes afirmaciones:
>- **(a)** $R[[x]]$ es un anillo con la adición y la multiplicación definidas por: $$\begin{aligned}(a_0,a_1,\ldots)+(b_0,b_1,\ldots)&=(a_0+b_0,a_1+b_1,\ldots),\\(a_0,a_1,\ldots)(b_0,b_1,\ldots)&=(c_0,c_1,\ldots),\end{aligned}$$ donde $c_n=\sum_{i=0}^{n}a_i b_{n-i}=\sum_{k+j=n}a_kb_j$.
>- **(b)** El anillo de polinomios $R[x]$ es un subanillo de $R[[x]]$.
>- **(c)** Si $R$ tiene la propiedad $P$, donde $P$ es ser conmutativo, tener $1$, no tener divisores de cero o ser dominio íntegro, entonces $R[[x]]$ también tiene la propiedad $P$.
>Al anillo $R[[x]]$ se lo llama el anillo de series formales sobre $R$ y al elemento $(a_0,a_1,\ldots)\in R[[x]]$ se lo denota por la serie formal $\sum_{i=0}^{\infty}a_ix^i$.

>[!exercise] Ejercicio 14
>Probar las siguientes afirmaciones:
>- **(a)** $x+1$ es una unidad en $\mathbb Z[[x]]$, pero no es una unidad en $\mathbb Z[x]$.
>- **(b)** $x^2+3x+2$ es irreducible en $\mathbb Z[[x]]$, pero no en $\mathbb Z[x]$.

>[!exercise] Ejercicio 15
>Sea $F$ cuerpo y sea $p\in F[x]$. Probar que $F[x]/(p)$ es cuerpo si y sólo si $p$ es irreducible. ¿Sigue valiendo esta afirmación si asumimos que $F$ es anillo conmutativo con $1$?

>[!exercise] Ejercicio 16
>Sean $m\in\mathbb N$, $\mathbb Z_m[x]$ el anillo de polinomios con coeficientes en $\mathbb Z_m$ y $f(x)\in\mathbb Z_m[x]$ de grado $n$, con $n\in\mathbb N\cup\{0\}$.
>- **(a)** Probar que si $m$ es primo, entonces la ecuación $f(x)=0$ tiene a lo sumo $n$ soluciones distintas.
>- **(b)** Calcular las soluciones de $2x^2-2x=0$ y de $x^2+x+2=0$ para los casos $m=3,4$.
>- **(c)** Sea $m=p_1^{\ell_1}\cdots p_r^{\ell_r}$ la factorización de $m$. Probar que la ecuación $f(x)=0$ tiene solución en $\mathbb Z_m$ si y sólo si $f(x)=0$ tiene solución en $\mathbb Z_{p_i^{\ell_i}}$ para todo $i=1,\ldots,r$.
>- **(d)** Resolver la ecuación $3x^2+2x+3=0$ en $\mathbb Z_{30}$.

## Localización. Factorización en anillos de polinomios

>[!exercise] Ejercicio 17
>Determinar el anillo completo de cocientes del anillo $\mathbb Z_n$ para cada $n\geq2$.

>[!exercise] Ejercicio 18
>Sea $R$ un anillo conmutativo con identidad. Probar que $$R\text{ es local}\quad\Longleftrightarrow\quad[r+s=1\Rightarrow r\in U(R)\lor s\in U(R)].$$

>[!exercise] Ejercicio 19
>Sea $R$ un anillo conmutativo con identidad. Si $M$ es un ideal maximal y $n\in\mathbb N$, entonces el anillo $R/M^n$ es local.

>[!exercise] Ejercicio 20
>Decidir si las siguientes afirmaciones son verdaderas o falsas.
>- **(a)** $2x+2$ es irreducible en $\mathbb Q[x]$.
>- **(b)** $2x+2$ es irreducible en $\mathbb Z[x]$.
>- **(c)** $x^2+1$ es reducible en $\mathbb C[x]$.

## Ejercicios adicionales

>[!exercise] Ejercicio 21
>Calcular las unidades de $\mathbb Z[\sqrt2]$.

>[!exercise] Ejercicio 22
>Sean $R$ un anillo y $S$ un subanillo. Decir si las siguientes afirmaciones son verdaderas o falsas.
>- **(a)** Si $R$ es DFU, entonces $S$ es DFU.
>- **(b)** Si $S$ es DFU, entonces $R$ es DFU.

>[!exercise] Ejercicio 23 — Algoritmo euclidiano
>Sea $(R,\varphi)$ un DE. Sean $a,b\in R$, con $b\neq0$. Consideremos el siguiente algoritmo. $$\begin{aligned}a&=q_0b+r_1,&r_1=0&\ \text{o}\ \varphi(r_1)<\varphi(b);\\b&=q_1r_1+r_2,&r_2=0&\ \text{o}\ \varphi(r_2)<\varphi(r_1);\\&\vdots&&\\r_k&=q_{k+1}r_{k+1}+r_{k+2},&r_{k+2}=0&\ \text{o}\ \varphi(r_{k+2})<\varphi(r_{k+1});\\&\vdots&&\end{aligned}$$
>Sea $r_0=b$ y sea $n$ el mínimo entero tal que $r_{n+1}=0$ (un tal $n$ existe pues $(\varphi(r_k))_k$ forma una sucesión estrictamente decreciente de enteros no negativos). Probar que $r_n$ es el máximo común divisor de $a$ y $b$.

>[!exercise] Ejercicio 24
>Sean $D$ un dominio íntegro y $c_j,d_j\in D$, $0\leq j\leq n$, con $c_0,\ldots,c_n$ distintos entre sí. Probar que existe a lo sumo un polinomio $f\in D[x]$, con $\operatorname{gr}(f)\leq n$, tal que $f(c_j)=d_j$, $0\leq j\leq n$.

>[!exercise] Ejercicio 25
>Sea $R$ un anillo con identidad y sea $f=\sum_{i=0}^{\infty}a_ix^i\in R[[x]]$.
>- **(a)** $f$ es una unidad en $R[[x]]$ si y sólo si su término constante $a_0$ es una unidad en $R$.
>- **(b)** Si $a_0$ es irreducible en $R$, entonces $f$ es irreducible en $R[[x]]$.

>[!exercise] Ejercicio 26
>Sea $R=M_2(\mathbb Z)$. Probar que, para todo $A\in R$, $(x+A)(x-A)=x^2-A^2$ en $R[x]$.

>[!exercise] Ejercicio 27
>Sea $R$ un anillo cualquiera y sean $f,g,h\in R[x]$ tales que $f=gh$. ¿Se puede asegurar que $f(r)=g(r)h(r)$, para todo $r\in R$?

>[!exercise] Ejercicio 28
>Probar que si $p,n\in\mathbb N$ con $p$ primo, entonces $\mathbb Z_{p^n}$ es anillo local. (Ayuda: $(p)$ es el único ideal maximal).

>[!exercise] Ejercicio 29
>Si $D$ es un DFU, $a\in D$ y $f\in D[x]$ entonces $C(af)$ y $aC(f)$ son asociados en $D$.

>[!exercise] Ejercicio 30
>Decidir si las siguientes afirmaciones son verdaderas o falsas.
>- **(a)** Sea $k\subseteq\mathbb Q$ el cuerpo dado por $k=\{a+b\sqrt{-7}:a,b\in\mathbb Q\}$. Entonces $k\simeq\mathbb Q[x]/(x^2+7)$.
>- **(b)** Todo ideal de $\mathbb Z\times\mathbb Z$ es un ideal principal.
>- **(d)** Si $R,S$ son anillos conmutativos tales que existe un isomorfismo de anillos $M_n(R)\simeq M_n(S)$ entonces existe un isomorfismo de anillos $R\simeq S$.

>[!remark] Transcripción del original
>Se conservaron los enunciados del PDF, incluidos $k\subseteq\mathbb Q$ en el ejercicio 30(a) y el salto de (b) a (d) en ese ejercicio.
