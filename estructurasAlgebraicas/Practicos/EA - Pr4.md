---
tags:
  - AlgebraicStructures
  - Groups
  - Practico4
---

# Práctico 4

## Producto directo y suma directa de grupos. Producto semidirecto de grupos.

>[!exercise] Ejercicio 1
>$(1)$ ¿Es $S_3$ el producto directo de alguna familia de sus subgrupos propios? $(2)$ ¿Es $\mathbb Z\times\mathbb Z\cong\mathbb Z$?
>>[!Proof]-
>>- (1)
>>	1. Supongamos que existe una familia $(H_i)_{i\in I}$ de subgrupos propios de $S_3$ tal que $$S_3\cong\prod_{i\in I}H_i.$$ Como $|S_3|=3!=6$, el producto directo también tiene $6$ elementos. Por el teorema de Lagrange, para cada $i\in I$, $|H_i|$ divide a $6$; como $H_i$ es propio, $|H_i|\in\{1,2,3\}$.
>>	2. Los subgrupos de órdenes $2$ y $3$ son cíclicos porque sus órdenes son primos; por lo tanto, son abelianos. El subgrupo de orden $1$ también es abeliano. En consecuencia, todos los $H_i$ son abelianos.
>>	3. Sean $x=(x_i)_{i\in I}$ e $y=(y_i)_{i\in I}$ elementos de $\prod_{i\in I}H_i$. Como cada $H_i$ es abeliano, $x_iy_i=y_ix_i$ para todo $i\in I$. Por la operación coordenada a coordenada, $$xy=(x_iy_i)_{i\in I}=(y_ix_i)_{i\in I}=yx.$$ Así, el producto directo es abeliano.
>>	4. Pero $S_3$ no es abeliano, pues $$ (1\ 2)(2\ 3)=(1\ 2\ 3)\neq(1\ 3\ 2)=(2\ 3)(1\ 2). $$ La propiedad de ser abeliano se preserva por isomorfismos, contradicción. Por lo tanto, $$\boxed{S_3\text{ no es el producto directo de ninguna familia de sus subgrupos propios}.}$$
>>- (2)
>>	1. El grupo $\mathbb Z$ es cíclico, pues $\mathbb Z=\langle1\rangle$. Si $\mathbb Z\times\mathbb Z$ fuera cíclico, existiría $(a,b)\in\mathbb Z\times\mathbb Z$ tal que todo elemento fuera de la forma $$n(a,b)=(na,nb)$$ para algún $n\in\mathbb Z$.
>>	2. En particular, existirían $r,s\in\mathbb Z$ tales que $$r(a,b)=(1,0)\qquad\text{y}\qquad s(a,b)=(0,1).$$ La primera igualdad da $ra=1$, de modo que $a=\pm1$; la segunda da $sa=0$. Como $a\neq0$, se obtiene $s=0$, lo que contradice la coordenada $sb=1$ de la segunda igualdad.
>>	3. Entonces $\mathbb Z\times\mathbb Z$ no es cíclico. Como un isomorfismo preserva la propiedad de ser cíclico y $\mathbb Z$ sí lo es, $$\boxed{\mathbb Z\times\mathbb Z\not\cong\mathbb Z.}$$

>[!exercise] Ejercicio 2
>Dar un ejemplo de grupos $H_i$ y $K_j$, con $i,j\in\{1,2\}$, tales que $H_1\times H_2\cong K_1\times K_2$ y $H_i$ no es isomorfo a ningún $K_j$.

>[!exercise] Ejercicio 3
>Sea $G$ un grupo abeliano.
>- **(a)** Probar que para todo entero $m$, $mG=\{ma:a\in G\}$ es un subgrupo de $G$.
>- **(b)** Si $G\cong\sum_{i\in I}G_i$, entonces $mG\cong\sum_{i\in I}mG_i$.
>- **(c)** Si $G\cong\sum_{i\in I}G_i$, entonces $G/mG\cong\sum_{i\in I}G_i/mG_i$.

>[!exercise] Ejercicio 4
>Sean $G$ y $H$ grupos y $\theta:H\to\operatorname{Aut}(G)$ un homomorfismo de grupos. Definimos en el conjunto $G\times H$ la siguiente operación binaria
>$$(g,h)\cdot(g',h'):=(g\,\theta(h)(g'),hh').$$
>- **(a)** Probar que $(G\times H,\cdot)$ es un grupo. Este grupo se llama el *producto semidirecto de $G$ y $H$ respecto de $\theta$* y se lo denota por $G\times_{\theta}H$ ó $G\rtimes_{\theta}H$ ó simplemente $G\rtimes H$.
>- **(b)** Probar que $G\cong G\times\{e_H\}\triangleleft G\rtimes H$ y que $H\cong\{e_G\}\times H\hookrightarrow G\rtimes H$.
>- **(c)** Hallar un $\theta:\mathbb{Z}_2\to\operatorname{Aut}(\mathbb{Z}_3)$ tal que $S_3\simeq\mathbb{Z}_3\rtimes_{\theta}\mathbb{Z}_2$.

>[!exercise] Ejercicio 5
>Probar las siguientes afirmaciones.
>- **(a)** Para cada $n\geq 2$, $D_n\cong\mathbb{Z}_n\rtimes\mathbb{Z}_2$.
>- **(b)** Para cada $n\geq 2$, $S_n\cong A_n\rtimes\langle(1\ 2)\rangle$.
>- **(c)** El grupo $Q_8$ no es un producto semidirecto.

## Grupo libre. Presentaciones de grupos.

>[!exercise] Ejercicio 6
>Probar que todo elemento distinto de la identidad en un grupo libre tiene orden infinito.

>[!exercise] Ejercicio 7
>Sea $F$ un grupo libre y $n\in\mathbb{Z}$. Probar que el subgrupo de $F$ generado por el conjunto $\{w^n:w\in F\}$ es normal en $F$.

>[!exercise] Ejercicio 8
>Mostrar que el grupo definido por generadores $a$ y $b$ y relaciones:
>- **(a)** $a^8=b^2a^4=ab^{-1}ab=e$, tiene orden $\leq 16$.
>- **(b)** $a^2=e$, $b^3=e$, es infinito y no abeliano.

>[!exercise] Ejercicio 9
>Muestre que el grupo libre sobre el conjunto $\{a\}$ es un grupo infinito cíclico, y por lo tanto isomorfo a $\mathbb{Z}$.

>[!exercise] Ejercicio 10
>Dar una presentación $(X,Y)$ de $S_n$ con $|X|=n-1$ y otra con $|X|=2$.

>[!exercise] Ejercicio 11
>Caracterizar el grupo presentado en cada caso.
>- **(a)** $\langle x\mid x\rangle$.
>- **(b)** $\langle x,y\mid x^2,y^4,xyxy\rangle$.
>- **(c)** $\langle x,y\mid x^n,xyx^{-1}y^{-1}\rangle$.

>[!exercise] Ejercicio 12
>Probar que $\langle a,b\mid a^4,abab^{-1},a^2b^{-2}\rangle$ es una presentación del grupo $\mathcal{H}$.

## Ejercicios adicionales

>[!exercise] Ejercicio 13
>Probar que $\mathbb{Z}_{p^n}$, para $n>1$ y $p$ primo, no es el producto directo de ninguna familia de (sus) subgrupos propios.

>[!exercise] Ejercicio 14
>Caracterizar el grupo presentado en cada caso.
>- **(a)** $\langle x,y\mid xyx^{-1},y^{-1}\rangle$.
>- **(b)** $\langle x\mid x^n\rangle$.
>- **(c)** $\langle x,y\mid x^2,y^2,xyxyxyxy\rangle$.

>[!exercise] Ejercicio 15
>Considerar las presentación $\langle a,b\mid a^7,b^3,a^{-1}b^{-1}a^rb\rangle$, para algún $1\leq r\leq 6$.
>- **(a)** Probar que el cardinal del grupo $G$ presentado es menor ó igual a $21$.
>- **(b)** Probar que para $r\in\{3,5,6\}$ se tiene que $G\cong\mathbb{Z}_3$.
>- **(c)** Probar que para $r=1$ se tiene que $G\cong\mathbb{Z}_{21}$.
>- **(d)** Probar que para $r\in\{2,4\}$, $G$ es un grupo no abeliano de orden $21$.

>[!exercise] Ejercicio 16
>¿Es cierto que todo grupo tiene una única presentación por generadores y relaciones?

>[!exercise] Ejercicio 17
>Sea $F$ el grupo libre en $X$ y sea $Y\subseteq X$. Si $H$ es el menor subgrupo normal de $F$ que contiene a $Y$, entonces $F/H$ es libre.

>[!exercise] Ejercicio 18
>Decir V ó F.
>- **(a)** El grupo generado por $a,b$ con relaciones $a^2=b^3=aba^{-1}b^{-1}=1$, es el grupo cíclico de $6$ elementos.
>- **(b)** El grupo generado por $a,b$ con relaciones $a^2=b^3=1$, es no abeliano de $6$ elementos.
>- **(c)** El grupo generado por $a,b$ con relaciones $a^n=b^2=abab=1$, para $n\geq 3$, es el grupo dihedral $D_n$.

>[!exercise] Ejercicio 19
>Sean $p$ primo y $G:=\left\{\begin{pmatrix}1&b\\0&a\end{pmatrix}:a,b\in\mathbb{Z}_p,\ a\neq 0\right\}$. Probar que $G\cong\mathbb{Z}_p\rtimes\mathbb{Z}_{p-1}$.

>[!exercise] Ejercicio 20
>$\ast$ Mostrar que para cualquier primo $p$, el grupo definido en el Ejercicio 18 del Práctico 2 es isomorfo a un producto semidirecto $(\mathbb{Z}_p\times\mathbb{Z}_p)\rtimes\mathbb{Z}_p$.
