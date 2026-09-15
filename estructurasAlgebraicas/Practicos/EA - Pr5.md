---
tags:
  - AlgebraicStructures
  - Groups
  - Practico5
---

# Práctico 5

## Acciones de grupos

>[!exercise] Ejercicio 1
>Sean $G$ grupo y $A\triangleleft G$, con $A$ abeliano. Mostrar que $G/A$ opera sobre $A$ por conjugación y obtener un homomorfismo $f:G/A\to\operatorname{Aut}(A)$.

>[!exercise] Ejercicio 2
>Sea $G$ grupo. Supongamos que un elemento $a$ de $G$ tiene exactamente dos conjugados. Probar que $G$ contiene un subgrupo normal propio.

>[!exercise] Ejercicio 3
>Sea $H$ un subgrupo de un grupo $G$. Mostrar que $C_G(H)\triangleleft N_G(H)$ y que $N_G(H)/C_G(H)$ es isomorfo a un subgrupo de $\operatorname{Aut}(H)$.

>[!exercise] Ejercicio 4
>Probar que $C(S_n)=\{(1)\}$ e $\operatorname{Int}(S_n)\cong S_n$, para todo entero $n\geq 3$.

>[!exercise] Ejercicio 5
>En cada uno de los siguientes casos probar que $\cdot$ es una acción del grupo $G$ en el conjunto $X$. En cada ítem calcular la órbita $\mathcal{O}_x$ y el estabilizador $G_x$ de cada elemento $x$ de $X$. Además, calcular el conjunto $X^G:=\{x\in X:g\cdot x=x\ \forall g\in G\}$.
>- **(a)** $G=\{f:\mathbb{R}\to\mathbb{R}:f(x)=ax+b,\ a\in\mathbb{R}^{\times},\ b\in\mathbb{R}\}$, $X=\mathbb{R}$ y $f\cdot x=f(x)$.
>- **(b)** $G=\mathbb{R}^{\times}$, $X=\mathbb{R}_{>0}$ y $a\cdot x=x^a$.
>- **(c)** $G=\operatorname{SL}_2(\mathbb{Z})$, $X=\mathbb{Z}\times\mathbb{Z}$ y la acción dada por el producto de matrices.

>[!exercise] Ejercicio 6
>Sea $G$ un grupo actuando sobre un conjunto $X$ y sea $N\triangleleft G$. Determinar una condición necesaria y suficiente para que exista una acción de $G/N$ en $X$ tal que $\overline{a}\cdot x=a\cdot x$, para todo $a\in G$ y $x\in X$.

>[!exercise] Ejercicio 7
>Sea $X$ un conjunto finito. Determinar el número de acciones de $\mathbb{Z}$ sobre $X$.

>[!exercise] Ejercicio 8
>Sean $G$ grupo y $a\in G$, con $a\neq e_G$ y $|a|\neq 2$. Mostrar que existe un automorfismo distinto de la identidad.

>[!exercise] Ejercicio 9
>Sea $G$ un grupo.
>- **(a)** Si $|G|=m$ y $p$ es el menor primo que divide a $m$, entonces todo subgrupo de índice $p$ es normal.
>- **(b)** Si $|G|=pn$, con $p$ primo y $p>n$, y $H<G$, con $|H|=p$, entonces $H\triangleleft G$.
>- **(c)** Si $|G|=p^k$, con $p$ primo, y $N\triangleleft G$, con $|N|=p$, entonces $N\subseteq C(G)$.

## $p$-grupos y Teoremas de Sylow

>[!exercise] Ejercicio 10
>Si $N\triangleleft G$, y $N$ y $G/N$ son $p$-grupos, entonces $G$ es un $p$-grupo.
>>[!Proof]-
>>1. Queremos probar que cada elemento de $G$ tiene orden una potencia de $p$, sin suponer que $G$ sea finito. Sea $g\in G$ arbitrario. Como $G/N$ es un $p$-grupo, la clase $gN$ tiene orden $p^j$ para algún entero $j\geq 0$. Por lo tanto, $$(gN)^{p^j}=N.$$ Por la operación del cociente, $(gN)^{p^j}=g^{p^j}N$; como $xN=N$ equivale a $x\in N$, resulta $g^{p^j}\in N$.
>>2. Como $N$ es un $p$-grupo, el elemento $g^{p^j}$ tiene orden $p^k$ para algún entero $k\geq 0$. Así, $$e_G=(g^{p^j})^{p^k}=g^{p^jp^k}=g^{p^{j+k}}.$$
>>3. En consecuencia, $g$ tiene orden finito $d$, y $d$ divide a $p^{j+k}$. En efecto, por el algoritmo de la división existen enteros $q,r$ tales que $p^{j+k}=qd+r$ y $0\leq r<d$; entonces $$e_G=g^{p^{j+k}}=(g^d)^qg^r=g^r.$$ Por la minimalidad de $d$, necesariamente $r=0$, de modo que $p^{j+k}=qd$.
>>4. Como $p$ es primo, todo divisor positivo de $p^{j+k}$ es una potencia de $p$, por la factorización única en primos. Por tanto, $d=p^\ell$ para algún entero $0\leq\ell\leq j+k$. Como $g\in G$ era arbitrario, todo elemento de $G$ tiene orden una potencia de $p$ y, por definición, $G$ es un $p$-grupo.

>[!exercise] Ejercicio 11
>¿Es cierto que si $G$ es un $p$-grupo entonces $|G|<\infty$?
>>[!Proof]-
>>1. La afirmación es falsa. Consideremos $$G=\prod_{i\in\mathbb N}\mathbb Z_p,$$ con la suma coordenada a coordenada, es decir, $(x_i)+(y_i)=(x_i+y_i)$.
>>2. El grupo $G$ es infinito: para cada $j\in\mathbb N$ sea $e^{(j)}$ el elemento que tiene un $1$ en la coordenada $j$ y $0$ en todas las demás. Si $j\neq k$, entonces $e^{(j)}\neq e^{(k)}$, porque difieren en la coordenada $j$. Así, $\{e^{(j)}:j\in\mathbb N\}$ es un subconjunto infinito de $G$.
>>3. Todo elemento de $G$ tiene orden una potencia de $p$. Sea $x=(x_i)_{i\in\mathbb N}\in G$. Para cada $i\in\mathbb N$ se tiene $px_i=0$ en $\mathbb Z_p$, de modo que $$px=(px_i)_{i\in\mathbb N}=(0,0,\dots)=e_G.$$
>>4. En consecuencia, el orden de $x$ divide a $p$: si $d=|x|$, por el algoritmo de la división existen enteros $q,r$ con $p=qd+r$ y $0\leq r<d$, y entonces $$e_G=px=(x^d)^qx^r=x^r,$$ de donde $r=0$ por la minimalidad de $d$.
>>5. Como $p$ es primo, sus divisores positivos son $1$ y $p$; por lo tanto $|x|\in\{1,p\}$ para todo $x\in G$. Es decir, $G$ es un $p$-grupo.
>>6. Así, $G$ es un $p$-grupo con $|G|=\infty$, y la afirmación del enunciado es falsa.

>[!exercise] Ejercicio 12
>Sean $G$ un $p$-grupo finito y $H\triangleleft G$, con $H$ no trivial. Probar que $H\cap C(G)\neq\{e\}$.

>[!exercise] Ejercicio 13
>Sean $P$ un $p$-subgrupo de Sylow normal de un grupo finito $G$ y $f\in\operatorname{End}(G)$. Probar que $f(P)<P$.

>[!exercise] Ejercicio 14
>Sea $G$ un grupo finito. Si cada $p$-subgrupo de Sylow de $G$ es normal para cada primo $p$, entonces $G$ es el producto de sus subgrupos de Sylow.

>[!exercise] Ejercicio 15
>Si $|G|=p^nq$, con $p>q$ primos, entonces $G$ contiene un único subgrupo normal de índice $q$.

>[!exercise] Ejercicio 16
>Cada grupo de orden $12$, $28$, $56$ y $200$ debe contener un subgrupo de Sylow normal, y, por lo tanto, no es simple.

>[!exercise] Ejercicio 17
>¿Cuántos elementos de orden $7$ existen en un grupo simple de orden $168$?

>[!exercise] Ejercicio 18
>Sea $G$ un grupo.
>- **(a)** Probar que si $|G|=p^n$ con $p$ primo y $n\in\mathbb{N}$, entonces $C(G)\neq\{e_G\}$.
>- **(b)** Probar que si $G/C(G)$ es cíclico, entonces $G$ es abeliano.
>- **(c)** Probar que si $|G|=p^2$ con $p$ primo, entonces $G$ es abeliano.
>- **(d)** Caracterizar todos los grupos de orden $p^2$.
>- **(e)** Dar un ejemplo de un grupo $G$ no abeliano tal que $G/C(G)$ sea abeliano.

>[!exercise] Ejercicio 19
>Sea $G$ un grupo de orden $p^3$, con $p$ primo.
>- **(a)** Si $G$ posee más de un subgrupo normal de orden $p$, entonces $G$ es abeliano y no cíclico.
>- **(b)** Si $G$ es no abeliano, entonces $|C(G)|=p$.

>[!exercise] Ejercicio 20
>Calcular todos los $p$-subgrupos de Sylow de:
>$$\mathbb{Z}_{12},\qquad \mathbb{Z}_{21}\oplus\mathbb{Z}_{15},\qquad S_3\times\mathbb{Z}_3,\qquad S_3\times S_3.$$

>[!exercise] Ejercicio 21
>Sean $p$ y $q$ primos. Probar que ningún grupo $G$ de orden $p^2q$ es simple.

>[!exercise] Ejercicio 22
>Probar que no existen grupos simples de los siguientes órdenes: $30$, $36$, $56$, $96$.

>[!exercise] Ejercicio 23
>Sea $G$ un grupo, $|G|=pq$, $p>q$ primos tales que $q$ no divide a $p-1$. Probar que $G$ es cíclico.

## Ejercicios adicionales

>[!exercise] Ejercicio 24
>Sean $G$ grupo y $K<G$. Mostrar que
>- **(a)** $K\triangleleft N_G(K)$.
>- **(b)** $K\triangleleft G$ si y sólo si $N_G(K)=G$.

>[!exercise] Ejercicio 25
>Sea $p$ un primo.
>- **(a)** Sea $G$ un grupo no abeliano de orden $p^3$. Probar que $C(G)=[G,G]$ y calcular $|C(G)|$.
>- **(b)** Calcular el conmutador del grupo $G=\left\{\begin{pmatrix}1&a&b\\0&1&c\\0&0&1\end{pmatrix},\ a,b,c\in\mathbb{Z}_p\right\}$.

>[!exercise] Ejercicio 26
>Para cada $\sigma\in S_n$ caracterizar la clase de conjugación $\mathcal{O}_{\sigma}$ y el centralizador $C_{S_n}(\sigma)$. Calcular $\#\mathcal{O}_{\sigma}$ y $|C_{S_n}(\sigma)|$.

>[!exercise] Ejercicio 27
>Sea $G$ un grupo tal que $|G|=2n$, $G$ tiene $n$ elementos de orden $2$ y los restantes elementos forman un subgrupo $H$. Probar que $n$ es impar y que $H\triangleleft G$.

>[!exercise] Ejercicio 28
>Determinar si existe un grupo $K$ tal que $G$ sea el producto semidirecto de $N\triangleleft K$ en cada uno de los siguientes casos.
>- **(a)** $G=\mathbb{G}_{12}$ y $N=\mathbb{G}_3$.
>- **(b)** $G=\mathbb{C}$ y $N=\mathbb{R}$.
>- **(c)** $G=S_4$ y $N=\{1,(12)(34),(13)(24),(14)(23)\}$.

>[!exercise] Ejercicio 29
>Sea $G$ un $p$-grupo infinito. Probar que vale una de las siguientes dos:
>- **(a)** $G$ tiene un subgrupo de orden $p^n$, para cada $n\in\mathbb{N}$.
>- **(b)** Existe $m\in\mathbb{N}$ tal que cada subgrupo finito tiene orden $\leq p^m$.

>[!exercise] Ejercicio 30
>Probar que no existen grupos simples de los siguientes órdenes: $200$, $204$, $260$, $2540$.
