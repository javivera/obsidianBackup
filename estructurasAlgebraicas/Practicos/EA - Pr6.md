---
tags:
  - AlgebraicStructures
  - Practico6
---

# Práctico 6

## Anillos, homomorfismos de anillos e ideales

>[!exercise] Ejercicio 1
>Probar que los siguientes son anillos y decir si son o no conmutativos, identificar la identidad si tienen y decir si tienen divisores de cero.
>- **(a)** $(G,+,\cdot)$, donde $(G,+)$ es un grupo abeliano y $g\cdot h=0$ para todo $g,h\in G$.
>- **(b)** $(\mathcal{P}(X),\triangle,\cap)$, donde $X$ es un conjunto arbitrario y $\triangle$ es la diferencia simétrica.
>- **(c)** $M_n(A)$, con la suma y el producto de matrices, donde $A$ es un anillo.
>- **(d)** $(\operatorname{Hom}(G,G),+,\circ)$, donde $G$ es un grupo abeliano.
>- **(e)** Sea $R$ un anillo. El anillo de grupo $R[G]=\left\{\sum_{g\in G}a_g g:a_g\in R,\ a_g\neq 0\text{ sólo para finitos }g\in G\right\}$, donde $G$ es un grupo y la suma y multiplicación en $R[G]$ están definidas por $$\sum_{g\in G}a_g g+\sum_{g\in G}b_g g=\sum_{g\in G}(a_g+b_g)g\quad\text{y}\quad\left(\sum_{g\in G}a_g g\right)\left(\sum_{g\in G}b_g g\right)=\sum_{g_1g_2=g}(a_{g_1}b_{g_2})g.$$
>>[!Proof]-
>>- (a)
>>	1. Por hipótesis, $(G,+)$ es un grupo abeliano. Para $g,h,k\in G$, $(g\cdot h)\cdot k=0\cdot k=0=g\cdot 0=g\cdot(h\cdot k)$, así que el producto es asociativo.
>>	2. Para $g,h,k\in G$, $g\cdot(h+k)=0=0+0=g\cdot h+g\cdot k$ y $(g+h)\cdot k=0=0+0=g\cdot k+h\cdot k$. Luego se cumplen ambas distributividades y $(G,+,\cdot)$ es un anillo.
>>	3. Para $g,h\in G$, $g\cdot h=0=h\cdot g$; por lo tanto, el anillo es conmutativo.
>>	4. Si $G\neq\{0\}$, tomamos $g\neq 0$. Ningún $e\in G$ puede ser identidad multiplicativa, pues $e\cdot g=0\neq g$. Además, $g\cdot g=0$ con $g\neq 0$, por lo que $g$ es un divisor de cero y el anillo no es un dominio íntegro.
>>	5. Si $G=\{0\}$, el único elemento, $0$, es identidad multiplicativa porque $0\cdot 0=0$. No hay divisores de cero, ya que no hay elementos no nulos. Tampoco es un dominio íntegro bajo la convención de que en un dominio íntegro $1\neq 0$.
>>- (b)
>>	1. Denotamos por $A^c=X\setminus A$ el complemento relativo a $X$. Para $A,B\subseteq X$, partiendo de la definición y aplicando De Morgan y distributividad, $$\begin{aligned}A\triangle B&=(A\cup B)\setminus(A\cap B)=(A\cup B)\cap(A^c\cup B^c)\\&=(A\cap A^c)\cup(A\cap B^c)\cup(B\cap A^c)\cup(B\cap B^c)\\&=(A\cap B^c)\cup(A^c\cap B)\subseteq X.\end{aligned}$$ Tomando complementos y volviendo a distribuir, $$\begin{aligned}(A\triangle B)^c&=(A^c\cup B)\cap(A\cup B^c)\\&=(A^c\cap A)\cup(A^c\cap B^c)\cup(B\cap A)\cup(B\cap B^c)\\&=(A\cap B)\cup(A^c\cap B^c).\end{aligned}$$
>>	2. Para $A,B,C\subseteq X$, desarrollamos ambas agrupaciones mediante las fórmulas del paso anterior: $$\begin{aligned}(A\triangle B)\triangle C&=((A\triangle B)\cap C^c)\cup((A\triangle B)^c\cap C)\\&=(((A\cap B^c)\cup(A^c\cap B))\cap C^c)\cup(((A\cap B)\cup(A^c\cap B^c))\cap C)\\&=(A\cap B^c\cap C^c)\cup(A^c\cap B\cap C^c)\cup(A\cap B\cap C)\cup(A^c\cap B^c\cap C);\\A\triangle(B\triangle C)&=(A\cap(B\triangle C)^c)\cup(A^c\cap(B\triangle C))\\&=(A\cap((B\cap C)\cup(B^c\cap C^c)))\cup(A^c\cap((B\cap C^c)\cup(B^c\cap C)))\\&=(A\cap B\cap C)\cup(A\cap B^c\cap C^c)\cup(A^c\cap B\cap C^c)\cup(A^c\cap B^c\cap C).\end{aligned}$$ Por asociatividad y conmutatividad de $\cup$, ambas expresiones son iguales; así, $\triangle$ es asociativa. Además, la fórmula del paso 1 da $A\triangle B=B\triangle A$, $A\triangle\varnothing=A$ y $A\triangle A=\varnothing$. Por lo tanto, $(\mathcal P(X),\triangle)$ es un grupo abeliano con neutro $\varnothing$.
>>	3. La intersección es asociativa y conmutativa por las propiedades de conjuntos. Aplicando las leyes distributivas, de De Morgan y de complementos, $$\begin{aligned}A\cap(B\triangle C)&=(A\cap B\cap C^c)\cup(A\cap B^c\cap C),\\(A\cap B)\triangle(A\cap C)&=((A\cap B)\cap(A\cap C)^c)\cup((A\cap B)^c\cap(A\cap C))\\&=(A\cap B\cap C^c)\cup(A\cap B^c\cap C).\end{aligned}$$ Por conmutatividad de $\cap$, también vale la distributividad a derecha. Por lo tanto, $(\mathcal P(X),\triangle,\cap)$ es un anillo conmutativo.
>>	4. La identidad multiplicativa es $X$, pues $A\cap X=A=X\cap A$ para todo $A\subseteq X$.
>>	5. Si $X$ tiene al menos dos elementos distintos $x,y$, los conjuntos no vacíos $\{x\}$ y $\{y\}$ son divisores de cero porque $\{x\}\cap\{y\}=\varnothing$; el anillo no es un dominio íntegro. Si $X$ tiene exactamente un elemento, sus únicos elementos son $\varnothing$ y $X$, y $X\cap X=X\neq\varnothing$: no tiene divisores de cero y sí es un dominio íntegro. Si $X=\varnothing$, el anillo tiene un solo elemento, $X=\varnothing$; no tiene divisores de cero, pero no es un dominio íntegro bajo la convención $1\neq 0$.

>[!exercise] Ejercicio 2
>Dar ejemplos de:
>- **(a)** Anillos sin identidad.
>- **(b)** Anillos que no son dominios íntegros.
>- **(c)** Dominios íntegros que no son anillos de división.
>- **(d)** Anillos con identidad con subanillos sin identidad.
>- **(e)** Anillos de división que no son cuerpos.

>[!exercise] Ejercicio 3
>Decir en cada caso si $S$ es subanillo de $R$ o no, y en caso afirmativo decir si es ideal o no.
>- **(a)** $R=\mathbb{R}$ y $S=\mathbb{Z}$.
>- **(b)** $R=\mathbb{Z}$ y $S=\mathbb{N}$.
>- **(c)** $R=M_n(\mathbb{C})$ y $S=\operatorname{GL}_n(\mathbb{C})$.
>- **(d)** $R=M_n(\mathbb{Z})$ y $S=2M_n(\mathbb{Z})$.
>- **(e)** $R=\mathbb{C}$ y $S=\mathbb{Z}[i]$.
>- **(f)** $R=\mathbb{Z}[x]$ y $S=\{p:p(0)=0\}$.

>[!exercise] Ejercicio 4
>Un anillo de Boole es un anillo $R$ tal que $a^2=a$ para todo $a\in R$. Probar que todo anillo de Boole es conmutativo y $a+a=0$ para todo $a\in R$. Identificar algún anillo de Boole entre los anillos del primer ejercicio.

>[!exercise] Ejercicio 5
>En cada caso, decir si $f$ es homomorfismo de anillos o no.
>- **(a)** $f:\mathbb{Z}[x]\to\mathbb{Z}$, $f(p)=p(1)$.
>- **(b)** $f:\mathbb{C}\to\mathbb{C}$, $f(z)=\overline{z}$.
>- **(c)** $f:M_n(\mathbb{R})\to\mathbb{R}$, $f(A)=\det(A)$.
>- **(d)** $f:\mathbb{Z}_p\to\mathbb{Z}_p$, $f(a)=a^p$ ($p$ primo).

>[!exercise] Ejercicio 6
>- **(a)** Si $R$ es un anillo finito con más de un elemento y sin divisores de cero, entonces $R$ es un anillo de división.¹
>- **(b)** Si $R$ es un dominio íntegro finito, entonces $R$ es un cuerpo.

>[!exercise] Ejercicio 7
>Sea $R$ un anillo con más de un elemento y supongamos que para todo $a\in R$, con $a\neq 0$, existe un único $b\in R$ tal que $aba=a$. Probar que:
>- **(a)** $R$ no tiene divisores de cero.
>- **(b)** $bab=b$.
>- **(c)** $R$ tiene una identidad.
>- **(d)** $R$ es un anillo de división.

>[!exercise] Ejercicio 8
>Sea $R$ un anillo con $1_R$. Probar las siguientes afirmaciones:
>- **(a)** Si $\operatorname{car}(R)=n>0$, entonces $n=\min\{j\in\mathbb{N}:j1_R=0\}$.
>- **(b)** Si $R$ no tiene divisores de cero, entonces $\operatorname{car}(R)=0$ o $\operatorname{car}(R)$ es primo.
>- **(c)** ¿Existe un anillo de característica $n$, para todo $n\geq 2$?

>[!exercise] Ejercicio 9
>Sea $R$ un anillo. Probar las siguientes afirmaciones:
>- **(a)** Si $R$ es conmutativo y $a,b\in R$ son nilpotentes, entonces $a+b$ es nilpotente.
>- **(b)** Mostrar que si no se pide conmutatividad, la afirmación del ítem anterior es falsa.
>- **(c)** Si $R$ tiene $1$ y $r\in R$ es nilpotente, entonces $1+r$ y $1-r$ son unidades.

>[!exercise] Ejercicio 10
>Sea $R$ un anillo. Demostrar que las siguientes afirmaciones son equivalentes:
>- **(a)** $R$ no tiene elementos nilpotentes distintos de cero.
>- **(b)** Si $a\in R$ y $a^2=0$, entonces $a=0$.

>[!exercise] Ejercicio 11
>Sean $R$ y $S$ anillos con identidad y sea $f:R\to S$ un morfismo que preserva el producto pero no las identidades.
>- **(a)** Mostrar que existen $R,S$ y $f$ tales que $f(1_R)\neq 1_S$.
>- **(b)** Probar que si $f$ es un epimorfismo, entonces $f(1_R)=1_S$.
>- **(c)** Probar que si $u$ es una unidad en $R$ tal que $f(u)$ es una unidad en $S$, entonces $f(1_R)=1_S$ y $f(u^{-1})=f(u)^{-1}$.

>[!exercise] Ejercicio 12
>Sea $R$ un anillo y $a\in R$. Probar las siguientes afirmaciones.
>- **(a)** $J_a:=\{r\in R:ra=0\}$ es un ideal a izquierda.
>- **(b)** $K_a:=\{r\in R:ar=0\}$ es un ideal a derecha.
>- **(c)** Si $R$ es conmutativo, entonces $\operatorname{Nilp}(R):=\{r\in R:r\text{ es nilpotente}\}$ es ideal.
>- **(d)** Si $I$ es un ideal, entonces el conjunto $[R:I]:=\{r\in R:xr\in I,\text{ para todo }x\in R\}$ es ideal que contiene a $I$.

>[!exercise] Ejercicio 13
>Sea $S=M_n(R)$ el anillo de todas las matrices de tamaño $n\times n$ sobre un anillo $R$.
>- **(a)** Calcular $Z(S)$, el centro del anillo $S$.
>- **(b)** Mostrar que $Z(S)$ contiene un subanillo isomorfo a $Z(R)$.
>- **(c)** Mostrar que si $R$ es un anillo con identidad, entonces $Z(S)=\{\lambda I_d:\lambda\in Z(R)\}$.
>- **(d)** Mostrar que si $n\geq 2$ y $R$ tiene $1_R\neq 0_R$, entonces $Z(S)$ no es un ideal en $S$.

>[!exercise] Ejercicio 14
>Sea $f:R\to S$ un homomorfismo de anillos, $I$ un ideal de $R$ y $J$ un ideal de $S$.
>- **(a)** Probar que $f^{-1}(J)$ es un ideal de $R$ que contiene a $\ker f$.
>- **(b)** Si $f$ es epimorfismo, entonces $f(I)$ es un ideal en $S$. ¿Es esto cierto si $f$ no es epimorfismo?

>[!exercise] Ejercicio 15
>Sea $f:R\to S$ un epimorfismo de anillos. Probar las siguientes afirmaciones.
>- **(a)** Si $P$ es ideal primo en $R$ y $\ker f\subseteq P$, entonces $f(P)$ es un ideal primo en $S$.
>- **(b)** Si $Q$ es ideal primo en $S$, entonces $f^{-1}(Q)$ es un ideal primo en $R$ y $\ker f\subseteq f^{-1}(Q)$.
>- **(c)** Existe una correspondencia 1-1 entre el conjunto de todos los ideales primos en $R$ que contienen a $\ker f$ y el conjunto de todos los ideales primos de $S$, dada por $P\mapsto f(P)$.
>- **(d)** Sea $I$ un ideal en $R$. Cada ideal (primo) en $R/I$ es de la forma $J/I$, donde $J$ es un ideal (primo) en $R$ que contiene a $I$.

>[!exercise] Ejercicio 16
>Sea $I$ un ideal en $\mathbb{Z}$, con $I\neq 0$. Demostrar que las siguientes afirmaciones son equivalentes.
>- **(a)** $I$ es primo.
>- **(b)** $I$ es maximal.
>- **(c)** $I=(p)$, con $p$ primo.

>[!exercise] Ejercicio 17
>Calcular las unidades de:
>- **(a)** $\mathbb{Z}_{10}$.
>- **(b)** $\mathbb{Z}_6\times\mathbb{Z}_{10}$.
>- **(c)** $\mathbb{Z}[\mathbb{Z}_4]$.

## Ejercicios adicionales

>[!exercise] Ejercicio 18
>Sean $R$ un anillo y $S$ un subanillo. Decir si las siguientes afirmaciones son verdaderas o falsas.
>- **(a)** Si $R$ es dominio íntegro, entonces $S$ es dominio íntegro.
>- **(b)** Si $S$ es dominio íntegro, entonces $R$ es dominio íntegro.
>- **(c)** Si $R$ es cuerpo, entonces $S$ es cuerpo.
>- **(d)** Si $S$ es cuerpo, entonces $R$ es cuerpo.
>- **(e)** Si $R$ es conmutativo con $1$, entonces $S$ es conmutativo con $1$.
>- **(f)** Si $S$ es conmutativo con $1$, entonces $R$ es conmutativo con $1$.

>[!exercise] Ejercicio 19
>Sea $R$ un anillo con identidad y $\operatorname{car}(R)=p$, con $p$ primo. Probar que $(a\pm b)^{p^n}=a^{p^n}\pm b^{p^n}$, para todo $n\in\mathbb{N}\cup\{0\}$, $a,b\in R$. En particular, si $R$ es conmutativo, entonces $f:R\to R$, $f(x)=x^p$ es un morfismo de anillos.

>[!exercise] Ejercicio 20
>Sea $R$ un anillo conmutativo y $N$ el ideal de todos los elementos nilpotentes. Demostrar que $R/N$ es un anillo sin elementos nilpotentes no nulos.

>[!exercise] Ejercicio 21
>Sea $R$ un anillo conmutativo con identidad y sea $A:=\{r\in R:r\text{ es divisor de cero}\}\cup\{0\}$. Probar que $A$ contiene al menos un ideal primo de $R$.

>[!exercise] Ejercicio 22
>Sean $R$ un anillo conmutativo con identidad y $M$ un ideal en $R$, con $M\neq R$. Probar que $M$ es maximal si y sólo si para todo $r\in R-M$ existe $x\in R$ tal que $1_R-rx\in M$.

>[!exercise] Ejercicio 23
>Dado un anillo $R$, el grupo de unidades de $R$ es el conjunto $U(R)=\{r\in R:r\text{ es unidad}\}$.
>- **(a)** Probar que $U(R)$ es un grupo con la multiplicación de $R$.
>- **(b)** Probar que $U(\mathbb{Z}_n)=\{m\in\mathbb{Z}_n:(m,n)=1\}$.
>- **(c)** Deducir que $\mathbb{Z}_n$ es cuerpo si y sólo si $n$ es primo.
>- **(d)** Calcular $U(\mathbb{Z}_n)$ para $n=2,\ldots,10$.
>- **(e)** Averiguar si se conoce la estructura de $U(\mathbb{Z}_n)$ para todo $n$ o no.

>[!exercise] Ejercicio 24
>* Si $R$ es anillo conmutativo, entonces $\operatorname{Nilp}(R)=\displaystyle\bigcap_{P\subsetneq R,\ P\text{ primo}}P$.

>[!exercise] Ejercicio 25
>Sea $\mathbb{C}[x,y]$ el anillo de polinomios en dos variables sobre $\mathbb{C}$. Denotemos por $\pi:\mathbb{C}[x,y]\to\mathbb{C}[x,y]/(x^2+y^2-1)$ la proyección canónica. El objetivo de este ejercicio es probar que existe una biyección $$\operatorname{Hom}(\mathbb{C}[x,y]/(x^2+y^2-1),\mathbb{C})\longleftrightarrow S^1=\{(a,b)\in\mathbb{C}^2:a^2+b^2=1\},$$ donde $\operatorname{Hom}(\mathbb{C}[x,y]/(x^2+y^2-1),\mathbb{C})$ denota el espacio vectorial de homomorfismos de anillos y que además son $\mathbb{C}$-lineales de $\mathbb{C}[x,y]/(x^2+y^2-1)$ en $\mathbb{C}$.
>- **(a)** Sea $\varphi:\mathbb{C}[x,y]\to\mathbb{C}$ un homomorfismo de anillos $\mathbb{C}$-lineal. Probar que $\varphi$ queda completamente determinado por los valores $a:=\varphi(x)$ y $b:=\varphi(y)$. Concluir que la aplicación $$\Phi:\operatorname{Hom}(\mathbb{C}[x,y],\mathbb{C})\to\mathbb{C}^2,\quad\varphi\mapsto(\varphi(x),\varphi(y))$$ es inyectiva.
>- **(b)** Probar que $\Phi$ es además sobreyectiva: dado cualquier par $(a,b)\in\mathbb{C}^2$, el morfismo de evaluación $\operatorname{ev}_{(a,b)}:\mathbb{C}[x,y]\to\mathbb{C}$, $p(x,y)\mapsto p(a,b)$, es un homomorfismo de anillos $\mathbb{C}$-lineal bien definido, y satisface $\Phi(\operatorname{ev}_{(a,b)})=(a,b)$.
>- **(c)** Sea $\varphi\in\operatorname{Hom}(\mathbb{C}[x,y],\mathbb{C})$ con $\Phi(\varphi)=(a,b)$. Probar que $\varphi$ se factoriza a través de $\mathbb{C}[x,y]/(x^2+y^2-1)$ (es decir, existe $\overline{\varphi}:\mathbb{C}[x,y]/(x^2+y^2-1)\to\mathbb{C}$ tal que $\varphi=\overline{\varphi}\circ\pi$) si y sólo si $\varphi(x^2+y^2-1)=0$. Deducir que esto ocurre si y sólo si $(a,b)\in S^1$. (Ayuda: usar la propiedad universal del cociente: $\varphi$ se factoriza por $A$ si y sólo si $I\subseteq\ker\varphi$, y como $I$ es principal, esto equivale a que el generador esté en el núcleo.)
>- **(d)** Usando los ítems (a)-(c), definir una aplicación $$\Psi:\operatorname{Hom}(\mathbb{C}[x,y]/(x^2+y^2-1),\mathbb{C})\to S^1,\quad\overline{\varphi}\mapsto(\overline{\varphi}(\pi(x)),\overline{\varphi}(\pi(y)))$$ y probar que $\Psi$ es una biyección, con inversa dada por $(a,b)\mapsto\operatorname{ev}_{(a,b)}$, el morfismo inducido en el cociente por la evaluación en $(a,b)$.

>[!exercise] Ejercicio 26
>Sea $q\in\mathbb{C}^{\times}$. El plano cuántico $\mathbb{C}_q[x,y]$ se define como el cociente del álgebra libre $\mathbb{C}\langle x,y\rangle$ por el ideal bilateral generado por la relación $xy-qyx$. Es decir, $$\mathbb{C}_q[x,y]:=\mathbb{C}\langle x,y\rangle/(xy-qyx).$$ Sea $q\neq 1$. Calcular el centro de $\mathbb{C}_q[x,y]$, $$Z(\mathbb{C}_q[x,y])=\{z\in\mathbb{C}_q[x,y]:zw=wz\text{ para todo }w\in\mathbb{C}_q[x,y]\},$$ distinguiendo dos casos:
>- **(i)** $q$ no es una raíz de la unidad: $Z(\mathbb{C}_q[x,y])=\mathbb{C}$.
>- **(ii)** $q$ es una raíz $n$-ésima primitiva de la unidad: $Z(\mathbb{C}_q[x,y])=\mathbb{C}[x^n,y^n]$.

>[!exercise] Ejercicio 27
>Sea $G$ un grupo finito y sea $k$ un cuerpo. Vamos a calcular el centro del álgebra de grupo $k[G]$.
>- **(a)** Para cada clase de conjugación $C\subseteq G$, definimos $z_C=\sum_{g\in C}g\in k[G]$. Demostrar que cada $z_C$ pertenece al centro $Z(k[G])$.
>- **(b)** Demostrar que, recíprocamente, todo elemento del centro $Z(k[G])$ es combinación lineal de los $z_C$.
>- **(c)** Calcular el centro de $k[S_3]$.

¹ En realidad $R$ resulta ser un cuerpo (ver lo mencionado al final del práctico siguiente).
