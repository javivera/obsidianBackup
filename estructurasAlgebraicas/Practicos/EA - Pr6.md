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
>
>>[!Proof]-
>>- (a)
>>	1. **Grupo abeliano aditivo y asociatividad del producto.** Por hipótesis, $(G,+)$ es un grupo abeliano. Para $g,h,k\in G$, $(g\cdot h)\cdot k=0\cdot k=0=g\cdot 0=g\cdot(h\cdot k)$, así que el producto es asociativo.
>>	2. **Distributividad.** Para $g,h,k\in G$, $g\cdot(h+k)=0=0+0=g\cdot h+g\cdot k$ y $(g+h)\cdot k=0=0+0=g\cdot k+h\cdot k$. Luego se cumplen ambas distributividades y $(G,+,\cdot)$ es un anillo.
>>	3. **Conmutatividad.** Para $g,h\in G$, $g\cdot h=0=h\cdot g$; por lo tanto, el anillo es conmutativo.
>>	4. **Identidad y divisores de cero: grupo no trivial.** Si $G\neq\{0\}$, tomamos $g\neq 0$. Ningún $e\in G$ puede ser identidad multiplicativa, pues $e\cdot g=0\neq g$. Además, $g\cdot g=0$ con $g\neq 0$, por lo que $g$ es un divisor de cero y el anillo no es un dominio íntegro.
>>	5. **Identidad y divisores de cero: grupo trivial.** Si $G=\{0\}$, el único elemento, $0$, es identidad multiplicativa porque $0\cdot 0=0$. No hay divisores de cero, ya que no hay elementos no nulos. Tampoco es un dominio íntegro bajo la convención de que en un dominio íntegro $1\neq 0$.
>>- (b)
>>	1. **Fórmulas para la diferencia simétrica.** Denotamos por $A^c=X\setminus A$ el complemento relativo a $X$. Para $A,B\subseteq X$, partiendo de la definición y aplicando De Morgan y distributividad, $$\begin{aligned}A\triangle B&=(A\cup B)\setminus(A\cap B)=(A\cup B)\cap(A^c\cup B^c)\\&=(A\cap A^c)\cup(A\cap B^c)\cup(B\cap A^c)\cup(B\cap B^c)\\&=(A\cap B^c)\cup(A^c\cap B)\subseteq X.\end{aligned}$$ Tomando complementos y volviendo a distribuir, $$\begin{aligned}(A\triangle B)^c&=(A^c\cup B)\cap(A\cup B^c)\\&=(A^c\cap A)\cup(A^c\cap B^c)\cup(B\cap A)\cup(B\cap B^c)\\&=(A\cap B)\cup(A^c\cap B^c).\end{aligned}$$
>>	2. **Asociatividad de la suma, conmutatividad, neutro e inverso aditivo.** Para $A,B,C\subseteq X$, desarrollamos ambas agrupaciones mediante las fórmulas del paso anterior: $$\begin{aligned}(A\triangle B)\triangle C&=((A\triangle B)\cap C^c)\cup((A\triangle B)^c\cap C)\\&=(((A\cap B^c)\cup(A^c\cap B))\cap C^c)\cup(((A\cap B)\cup(A^c\cap B^c))\cap C)\\&=(A\cap B^c\cap C^c)\cup(A^c\cap B\cap C^c)\cup(A\cap B\cap C)\cup(A^c\cap B^c\cap C);\\A\triangle(B\triangle C)&=(A\cap(B\triangle C)^c)\cup(A^c\cap(B\triangle C))\\&=(A\cap((B\cap C)\cup(B^c\cap C^c)))\cup(A^c\cap((B\cap C^c)\cup(B^c\cap C)))\\&=(A\cap B\cap C)\cup(A\cap B^c\cap C^c)\cup(A^c\cap B\cap C^c)\cup(A^c\cap B^c\cap C).\end{aligned}$$ Por asociatividad y conmutatividad de $\cup$, ambas expresiones son iguales; así, $\triangle$ es asociativa. Además, la fórmula del paso 1 da $A\triangle B=B\triangle A$, $A\triangle\varnothing=A$ y $A\triangle A=\varnothing$. Por lo tanto, $(\mathcal P(X),\triangle)$ es un grupo abeliano con neutro $\varnothing$.
>>	3. **Asociatividad y conmutatividad del producto; distributividad.** La intersección es asociativa y conmutativa por las propiedades de conjuntos. Aplicando las leyes distributivas, de De Morgan y de complementos, $$\begin{aligned}A\cap(B\triangle C)&=(A\cap B\cap C^c)\cup(A\cap B^c\cap C),\\(A\cap B)\triangle(A\cap C)&=((A\cap B)\cap(A\cap C)^c)\cup((A\cap B)^c\cap(A\cap C))\\&=(A\cap B\cap C^c)\cup(A\cap B^c\cap C).\end{aligned}$$ Por conmutatividad de $\cap$, también vale la distributividad a derecha. Por lo tanto, $(\mathcal P(X),\triangle,\cap)$ es un anillo conmutativo.
>>	4. **Identidad multiplicativa.** La identidad multiplicativa es $X$, pues $A\cap X=A=X\cap A$ para todo $A\subseteq X$.
>>	5. **Divisores de cero.** Si $X$ tiene al menos dos elementos distintos $x,y$, los conjuntos no vacíos $\{x\}$ y $\{y\}$ son divisores de cero porque $\{x\}\cap\{y\}=\varnothing$; el anillo no es un dominio íntegro. Si $X$ tiene exactamente un elemento, sus únicos elementos son $\varnothing$ y $X$, y $X\cap X=X\neq\varnothing$: no tiene divisores de cero y sí es un dominio íntegro. Si $X=\varnothing$, el anillo tiene un solo elemento, $X=\varnothing$; no tiene divisores de cero, pero no es un dominio íntegro bajo la convención $1\neq 0$.
>>- (c)
>>	1. **Clausura, asociatividad y conmutatividad de la suma; neutro e inverso aditivo.** Suponemos $n\geq 1$. La suma y el producto están dados por $(P+Q)_{ij}=p_{ij}+q_{ij}$ y $(PQ)_{ij}=\sum_{k=1}^n p_{ik}q_{kj}$. Son operaciones cerradas. La suma es asociativa y conmutativa entrada a entrada, tiene neutro la matriz nula y cada $P$ tiene inverso $-P=(-p_{ij})$, por las propiedades de $(A,+)$.
>>	2. **Asociatividad del producto y distributividad.** Para $P,Q,T\in M_n(A)$, $$\begin{aligned}((PQ)T)_{ij}&=\sum_k\left(\sum_\ell p_{i\ell}q_{\ell k}\right)t_{kj}=\sum_{k,\ell}(p_{i\ell}q_{\ell k})t_{kj}\\&=\sum_{\ell,k}p_{i\ell}(q_{\ell k}t_{kj})=\sum_\ell p_{i\ell}\left(\sum_kq_{\ell k}t_{kj}\right)=(P(QT))_{ij}.\end{aligned}$$ Además, $$(P(Q+T))_{ij}=\sum_kp_{ik}(q_{kj}+t_{kj})=(PQ)_{ij}+(PT)_{ij}$$$$((P+Q)T)_{ij}=\sum_k(p_{ik}+q_{ik})t_{kj}=(PT)_{ij}+(QT)_{ij}.$$ Por tanto, es un anillo.
>>	3. **Conmutatividad del producto.** Denotamos por $E_{ij}(a)$ la matriz con entrada $a$ en $(i,j)$ y cero en las demás posiciones. Directamente, $$E_{ij}(a)E_{k\ell}(b)=\begin{cases}E_{i\ell}(ab),&j=k,\\0,&j\neq k.\end{cases}$$ Para $n=1$, el anillo es conmutativo exactamente cuando $A$ lo es. Para $n\geq 2$, si es conmutativo, $E_{11}(a)E_{12}(b)=E_{12}(ab)$ debe coincidir con $E_{12}(b)E_{11}(a)=0$, por lo que $ab=0$ para todos $a,b\in A$. Recíprocamente, si todos esos productos son cero, todos los productos de matrices son cero y el anillo es conmutativo. En particular, si $A$ tiene $1_A\neq 0$ y $n\geq 2$, no es conmutativo, tomando $a=b=1_A$.
>>	4. **Existencia de identidad multiplicativa.** Si $A$ tiene identidad, $I_n=\operatorname{diag}(1_A,\ldots,1_A)$ es identidad porque $(I_nP)_{ij}=1_Ap_{ij}=p_{ij}=p_{ij}1_A=(PI_n)_{ij}$. Recíprocamente, si $U=(u_{ij})$ es identidad, las entradas $(1,1)$ de $UE_{11}(a)=E_{11}(a)=E_{11}(a)U$ dan $u_{11}a=a=au_{11}$ para todo $a\in A$. Así, $M_n(A)$ tiene identidad si y sólo si $A$ la tiene.
>>	5. **Divisores de cero.** Para $n=1$, tiene divisores de cero exactamente cuando $A$ los tiene. Para $n\geq 2$ y $A\neq\{0\}$, tomamos $a\neq 0$: las matrices no nulas $E_{11}(a),E_{22}(a)$ tienen producto cero en ambos órdenes, por lo que hay divisores de cero. Si $A=\{0\}$, el anillo de matrices es el anillo cero y no tiene divisores de cero.
>>- (d)
>>	1. **Clausura, asociatividad y conmutatividad de la suma; neutro e inverso aditivo.** La suma se define por $(f+h)(x)=f(x)+h(x)$. Como $G$ es abeliano, $$(f+h)(x+y)=f(x)+f(y)+h(x)+h(y)=f(x)+h(x)+f(y)+h(y).$$ Así, $f+h$ es un endomorfismo. La aplicación nula también lo es, y $(-f)(x)=-f(x)$ es un endomorfismo porque $-f(x+y)=-f(x)-f(y)$. Evaluando en cada $x$, la suma es asociativa y conmutativa, la aplicación nula es su neutro y $-f$ es el inverso de $f$. Luego la suma forma un grupo abeliano.
>>	2. **Clausura y asociatividad del producto; distributividad e identidad.** La composición es cerrada porque $(f\circ h)(x+y)=f(h(x)+h(y))=f(h(x))+f(h(y))$. Es asociativa porque $((f\circ h)\circ k)(x)=f(h(k(x)))=(f\circ(h\circ k))(x)$. Las distributividades se verifican mediante $$(f\circ(h+k))(x)=f(h(x)+k(x))=f(h(x))+f(k(x)),\qquad ((f+h)\circ k)(x)=f(k(x))+h(k(x)).$$ Por tanto es un anillo. Siempre tiene identidad: $\operatorname{id}_G\circ f=f=f\circ\operatorname{id}_G$.
>>	3. **Conmutatividad del producto.** La conmutatividad depende de $G$. Para $G=\mathbb Z$, cada endomorfismo es $f_m(t)=mt$, con $m=f(1)$: esto se obtiene sumando $1$ para enteros positivos y usando $f(0)=0$, $f(-t)=-f(t)$ para los restantes. Entonces $f_m\circ f_n=f_{mn}=f_{nm}=f_n\circ f_m$. En cambio, para $G=\mathbb Z\times\mathbb Z$, los endomorfismos $p(x,y)=(x,0)$ y $s(x,y)=(y,x)$ satisfacen $(p\circ s)(1,0)=(0,0)$ y $(s\circ p)(1,0)=(0,1)$. Así, el anillo no es conmutativo en general.
>>	4. **Divisores de cero.** También la existencia de divisores de cero depende de $G$: $f\circ h=0$ equivale a $\operatorname{im}(h)\subseteq\ker(f)$, por evaluación en cada elemento de $G$. Por tanto hay divisores de cero exactamente cuando existen endomorfismos no nulos $f,h$ con esa inclusión. Para $G=\mathbb Z$, si $f_m,f_n\neq 0$, entonces $m,n\neq 0$ y $(f_m\circ f_n)(1)=mn\neq 0$, por lo que no los hay. Para $G=\mathbb Z\times\mathbb Z$, las proyecciones no nulas $p(x,y)=(x,0)$ y $q(x,y)=(0,y)$ cumplen $p\circ q=0=q\circ p$, de modo que sí los hay. Si $G=\{0\}$, el anillo es el anillo cero: su identidad es la aplicación nula y no tiene divisores de cero.
>>- (e)
>>	1. **Clausura y grupo abeliano aditivo.** Los elementos son sumas formales: la igualdad se verifica coeficiente a coeficiente. Sea $e$ el neutro de $G$. Si $\alpha=\sum_g a_g g$ y $\beta=\sum_h b_h h$, la fórmula del producto debe leerse como $$\alpha\beta=\sum_{t\in G}\left(\sum_{gh=t}a_gb_h\right)t.$$ Sólo contribuyen pares de los soportes finitos de $\alpha$ y $\beta$, por lo que el producto tiene soporte finito. La suma también tiene soporte finito y forma un grupo abeliano por las propiedades de $(R,+)$, con neutro la suma nula e inverso $-\alpha=\sum_g(-a_g)g$.
>>	2. **Asociatividad del producto y distributividad.** Para $\gamma=\sum_k c_k k$, el coeficiente de cada $t\in G$ satisface $$\begin{aligned}((\alpha\beta)\gamma)_t&=\sum_{uk=t}\left(\sum_{gh=u}a_gb_h\right)c_k=\sum_{(gh)k=t}(a_gb_h)c_k\\&=\sum_{g(hk)=t}a_g(b_hc_k)=\sum_{gv=t}a_g\left(\sum_{hk=v}b_hc_k\right)=(\alpha(\beta\gamma))_t.\end{aligned}$$ Usamos las asociatividades de $R$ y $G$ y las distributividades de $R$; todas las sumas involucradas son finitas. Además, $$\begin{aligned}(\alpha(\beta+\gamma))_t&=\sum_{gh=t}a_g(b_h+c_h)=\sum_{gh=t}a_gb_h+\sum_{gh=t}a_gc_h,\\((\alpha+\beta)\gamma)_t&=\sum_{gh=t}(a_g+b_g)c_h=\sum_{gh=t}a_gc_h+\sum_{gh=t}b_gc_h.\end{aligned}$$ Por tanto, $R[G]$ es un anillo.
>>	3. **Conmutatividad del producto.** Para elementos con un único coeficiente, $(ag)(bh)=(ab)(gh)$. Si $R[G]$ es conmutativo, $(ae)(be)=(be)(ae)$ implica $ab=ba$, de modo que $R$ es conmutativo. Si existen $a,b$ con $ab\neq 0$, la igualdad $(ag)(bh)=(bh)(ag)$ obliga a $gh=hg$ para cualesquiera $g,h$: de otro modo las dos sumas formales tienen su coeficiente no nulo en posiciones distintas. Recíprocamente, si $R$ y $G$ son conmutativos, $$\alpha\beta=\sum_{g,h}(a_gb_h)(gh)=\sum_{h,g}(b_ha_g)(hg)=\beta\alpha.$$ Si todos los productos de $R$ son cero, todos los de $R[G]$ también lo son, cualquiera sea $G$. En conclusión, $R[G]$ es conmutativo si y sólo si $R$ es conmutativo y, además, $G$ es abeliano o el producto de $R$ es idénticamente nulo. En particular, para $R$ con $1_R\neq 0$, es conmutativo si y sólo si $R$ es conmutativo y $G$ es abeliano.
>>	4. **Existencia de identidad multiplicativa.** Si $R$ tiene identidad, $1_Re$ es identidad de $R[G]$, pues $(1_Re)\alpha=\sum_g(1_Ra_g)g=\alpha$ y $\alpha(1_Re)=\sum_g(a_g1_R)g=\alpha$. Recíprocamente, si $u=\sum_g u_g g$ es identidad, comparando el coeficiente de $e$ en $u(ae)=ae=(ae)u$ obtenemos $u_ea=a=au_e$ para todo $a\in R$. Por tanto, $R[G]$ tiene identidad si y sólo si $R$ la tiene.
>>	5. **Divisores de cero provenientes de los coeficientes.** La existencia de divisores de cero depende de $R$ y $G$. Si $a,b\neq 0$ y $ab=0$ en $R$, los elementos no nulos $ae,be$ satisfacen $(ae)(be)=0$, así que los divisores de cero de $R$ producen divisores de cero en $R[G]$. Si $R=\{0\}$, entonces $R[G]=\{0\}$ y no los hay.
>>	6. **Divisores de cero provenientes del grupo.** Incluso si $R$ no tiene divisores de cero, el grupo puede introducirlos. Supongamos $1_R\neq 0$ y que $g\in G$ tiene orden finito $m\geq 2$. Las potencias $e,g,\ldots,g^{m-1}$ son distintas: una igualdad $g^i=g^j$ con $0\leq i<j<m$ daría $g^{j-i}=e$, contradiciendo la minimalidad de $m$. Por tanto, $\alpha=1_Re-1_Rg$ y $\beta=\sum_{j=0}^{m-1}1_Rg^j$ son no nulos. En ambos órdenes, $$\alpha\beta=\sum_{j=0}^{m-1}1_Rg^j-\sum_{j=0}^{m-1}1_Rg^{j+1}=1_Re-1_Rg^m=0=\beta\alpha.$$ En particular, $\mathbb Z[C_2]$ tiene divisores de cero, aunque $\mathbb Z$ no los tiene.
>>	7. **Ejemplos sin divisores de cero.** Por otro lado, $R[\{e\}]$ se identifica con $R$ mediante $ae\mapsto a$, que preserva suma y producto; así, $\mathbb Z[\{e\}]$ no tiene divisores de cero. También hay ejemplos con grupo no trivial sin divisores de cero: para el grupo infinito cíclico $\langle t\rangle$, cada elemento de $\mathbb Z[\langle t\rangle]$ es una suma finita $\sum_{i\in\mathbb Z}a_it^i$. Si dos elementos son no nulos y $r,s$ son sus mayores exponentes con coeficientes no nulos, el coeficiente de $t^{r+s}$ en el producto es $a_rb_s\neq 0$: cualquier otro par de exponentes del soporte tiene suma menor que $r+s$. Por tanto su producto no es cero. Estos ejemplos muestran que, sin más hipótesis sobre $R$ y $G$, no puede darse una respuesta uniforme sobre divisores de cero.

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
