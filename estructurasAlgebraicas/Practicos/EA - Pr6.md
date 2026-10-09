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
>>	3. **Conmutatividad del producto.** Si $R[G]$ es conmutativo, $$(ab)e=(ae)(be)=(be)(ae)=(ba)e,$$ y comparar coeficientes en $e$ da $ab=ba$; luego $R$ es conmutativo. Si existen $a,b\in R$ con $ab\neq 0$, para cualesquiera $g,h\in G$ tenemos $$(ab)(gh)=(ag)(bh)=(bh)(ag)=(ba)(hg).$$ Si $gh\neq hg$, comparar coeficientes en $gh$ daría $ab=0$, pues el miembro derecho tiene coeficiente cero allí. Por tanto, $gh=hg$ para todos $g,h$, y $G$ es abeliano. Recíprocamente, si $R$ y $G$ son conmutativos, $$\alpha\beta=\sum_{g,h}(a_gb_h)(gh)=\sum_{g,h}(b_ha_g)(hg)=\beta\alpha.$$ Si todos los productos de $R$ son cero, también lo son los de $R[G]$, cualquiera sea $G$. Así, $R[G]$ es conmutativo si y sólo si $R$ es conmutativo y, además, $G$ es abeliano o el producto de $R$ es idénticamente nulo. Para $R$ con $1_R\neq 0$, esta última alternativa queda excluida porque $1_R1_R\neq 0$.
>>	4. **Existencia de identidad multiplicativa.** Si $R$ tiene identidad, $1_Re$ es identidad de $R[G]$, pues $(1_Re)\alpha=\sum_g(1_Ra_g)g=\alpha$ y $\alpha(1_Re)=\sum_g(a_g1_R)g=\alpha$. Recíprocamente, si $u=\sum_g u_g g$ es identidad de $R[G]$, para todo $a\in R$ tenemos $$ae=u(ae)=\sum_g(u_ga)g,\qquad ae=(ae)u=\sum_g(au_g)g$$ Los coeficientes en $e$ de estas sumas son $u_ea$ y $au_e$, respectivamente, mientras que el de $ae$ es $a$. Por tanto, $u_ea=a=au_e$ para todo $a\in R$, es decir, $u_e$ es identidad de $R$. Así, $R[G]$ tiene identidad si y sólo si $R$ la tiene.
>>	5. **Divisores de cero provenientes de los coeficientes.** Tomemos $R=\mathbb Z_6$ y cualquier grupo $G$, con identidad $e$. Los elementos $\overline{2}e$ y $\overline{3}e$ de $R[G]$ son no nulos porque sus coeficientes en $e$ son no nulos. Sin embargo, $$(\overline{2}e)(\overline{3}e)=(\overline{2}\,\overline{3})(ee)=\overline{6}e=\overline{0}e=0.$$ El producto en el orden inverso también es cero, pues $\overline{3}\,\overline{2}=\overline{0}$. Aquí los divisores de cero ya estaban en el anillo de coeficientes $\mathbb Z_6$, no los introduce el grupo. En general, si $a,b\neq 0$ y $ab=0$ en $R$, los elementos no nulos $ae,be$ satisfacen $(ae)(be)=(ab)e=0$. Si $R=\{0\}$, entonces $R[G]=\{0\}$ y no hay divisores de cero.
>>	6. **Divisores de cero provenientes del grupo, aunque los coeficientes no los tengan.** Tomemos ahora $R=\mathbb Z$, que no tiene divisores de cero, y el grupo de dos elementos $G=\{e,g\}$, donde $e$ es la identidad, $g\neq e$ y $g^2=e$. Este grupo se llama $C_2$. En $\mathbb Z[G]$, los elementos $\alpha=1e-1g$ y $\beta=1e+1g$ son no nulos: como $e$ y $g$ son elementos distintos del grupo, sus coeficientes no se suman entre sí, y el coeficiente en $e$ de ambos elementos es $1\neq 0$. Escribiendo $e$ y $g$ en lugar de $1e$ y $1g$, calculamos ambos productos: $$\begin{aligned}\alpha\beta&=(e-g)(e+g)=ee+eg-ge-gg=e+g-g-e=0,\\\beta\alpha&=(e+g)(e-g)=ee-eg+ge-gg=e-g+g-e=0.\end{aligned}$$ Por tanto, $\mathbb Z[G]=\mathbb Z[C_2]$ tiene divisores de cero aunque $\mathbb Z$ no los tenga; en este ejemplo, los introduce la relación $g^2=e$ del grupo.
>>	7. **Ejemplos sin divisores de cero.** Por otro lado, $R[\{e\}]$ se identifica con $R$ mediante $ae\mapsto a$, que preserva suma y producto; así, $\mathbb Z[\{e\}]$ no tiene divisores de cero. También hay ejemplos con grupo no trivial sin divisores de cero: para el grupo infinito cíclico $\langle t\rangle$, cada elemento de $\mathbb Z[\langle t\rangle]$ es una suma finita $\sum_{i\in\mathbb Z}a_it^i$. Si dos elementos son no nulos y $r,s$ son sus mayores exponentes con coeficientes no nulos, el coeficiente de $t^{r+s}$ en el producto es $a_rb_s\neq 0$: cualquier otro par de exponentes del soporte tiene suma menor que $r+s$. Por tanto su producto no es cero. Estos ejemplos muestran que, sin más hipótesis sobre $R$ y $G$, no puede darse una respuesta uniforme sobre divisores de cero.

>[!exercise] Ejercicio 2
>Dar ejemplos de:
>- **(a)** Anillos sin identidad.
>- **(b)** Anillos que no son dominios íntegros.
>- **(c)** Dominios íntegros que no son anillos de división.
>- **(d)** Anillos con identidad con subanillos sin identidad.
>- **(e)** Anillos de división que no son cuerpos.
>
>>[!Proof]-
>>- **(a)**
>>	1. Tomamos $2\mathbb Z=\{2m:m\in\mathbb Z\}$ con la suma y el producto usuales. Contiene $0=2\cdot0$ y, para $m,n\in\mathbb Z$, se cumple $2m+2n=2(m+n)\in2\mathbb Z$ y $-(2m)=2(-m)\in2\mathbb Z$. La asociatividad y la conmutatividad de la suma se heredan de $\mathbb Z$; por tanto, $(2\mathbb Z,+)$ es un grupo abeliano.
>>	2. El producto es cerrado porque $(2m)(2n)=2(2mn)\in2\mathbb Z$. La asociatividad del producto y ambas distributividades se heredan de $\mathbb Z$. Así, $2\mathbb Z$ es un anillo.
>>	3. Si $e\in2\mathbb Z$ fuera identidad multiplicativa, como $2\in2\mathbb Z$ tendríamos $e\cdot2=2$. Entonces $2(e-1)=0$ y, puesto que en $\mathbb Z$ un producto es cero sólo si alguno de sus factores es cero y $2\neq0$, resulta $e-1=0$, es decir, $e=1$. Esto contradice $1\notin2\mathbb Z$. Por tanto, $2\mathbb Z$ no tiene identidad multiplicativa.
>>- **(b)**
>>	1. Tomamos el anillo $\mathbb Z_n$ para cualquier entero compuesto $n\geq2$. Por ser compuesto, existen enteros $p,q$ tales que $n=pq$, $1<p<n$ y $1<q<n$.
>>	2. Las clases $\overline p$ y $\overline q$ son distintas de $\overline0$: si, por ejemplo, $\overline p=\overline0$, existiría $j\in\mathbb Z$ con $p=jn$; como $p>0$, tendríamos $j\geq1$ y entonces $p\geq n$, contradicción. El mismo argumento vale para $q$. Sin embargo, $$\overline p\,\overline q=\overline{pq}=\overline n=\overline0.$$ Así, $\mathbb Z_n$ tiene divisores de cero y no es un dominio íntegro. En particular, en $\mathbb Z_6$ se cumple $\overline2\,\overline3=\overline0$, con ambos factores no nulos.
>>- **(c)**
>>	1. Tomamos $\mathbb Z$ con las operaciones usuales. Es un anillo conmutativo con identidad $1\neq0$. Si $a,b\in\mathbb Z$ son no nulos, entonces $|a|\geq1$ y $|b|\geq1$, de modo que $|ab|=|a||b|\geq1$ y $ab\neq0$. Por tanto, no tiene divisores de cero y es un dominio íntegro.
>>	2. No es un anillo de división: el elemento no nulo $2$ no tiene inverso multiplicativo en $\mathbb Z$, pues para cualquier $b\in\mathbb Z$, $2b$ es par y no puede ser $1$. Por tanto, no existe $b\in\mathbb Z$ tal que $2b=b2=1$.
>>- **(e)**
>>	1. Tomamos el anillo de [[Teorico 9#^c91e04|cuaterniones]] $\mathbb H=\{a+bi+cj+dk:a,b,c,d\in\mathbb R\}$, con identidad $1$. Su producto es bilineal sobre $\mathbb R$; en particular, los escalares reales conmutan con todos sus elementos. Las reglas de multiplicación son $$i^2=j^2=k^2=-1,\qquad ij=k,\quad ji=-k,\quad jk=i,\quad kj=-i,\quad ki=j,\quad ik=-j.$$
>>	2. Sea $q=a+bi+cj+dk\neq0$. Definimos su **conjugado** cambiando el signo de las tres componentes no reales: $$\overline q=a-bi-cj-dk.$$ Escribiendo $v=bi+cj+dk$, las reglas anteriores dan $$\begin{aligned}v^2&=b^2i^2+c^2j^2+d^2k^2+bc(ij+ji)+bd(ik+ki)+cd(jk+kj)\\&=-b^2-c^2-d^2.\end{aligned}$$
>>	3. Como $a$ es un escalar real, $av=va$. Por tanto, $$\begin{aligned}q\overline q&=(a+v)(a-v)=a^2-av+va-v^2=a^2+b^2+c^2+d^2,\\\overline q q&=(a-v)(a+v)=a^2+av-va-v^2=a^2+b^2+c^2+d^2.\end{aligned}$$ Denotamos este número real por $N$. Como $q\neq0$, al menos uno de sus coeficientes es no nulo, de modo que $N>0$.
>>	4. Como $\mathbb R$ es un cuerpo y $N\neq0$, existe $t\in\mathbb R$ tal que $tN=Nt=1$. Definimos $p=t\overline q\in\mathbb H$, sin usar notación de fracción. Por asociatividad y porque $t$ conmuta con $q$, $$qp=q(t\overline q)=t(q\overline q)=tN=1,\qquad pq=(t\overline q)q=t(\overline q q)=tN=1.$$ Así, todo cuaternión no nulo tiene inversa por ambos lados y $\mathbb H$ es un anillo de división.
>>	5. No es un cuerpo porque su producto no es conmutativo: $ij=k$ mientras que $ji=-k$, y $k\neq-k$ porque sus coeficientes en la componente $k$ son respectivamente $1$ y $-1$.

>[!exercise] Ejercicio 3
>Decir en cada caso si $S$ es subanillo de $R$ o no, y en caso afirmativo decir si es ideal o no.
>- **(a)** $R=\mathbb{R}$ y $S=\mathbb{Z}$.
>- **(b)** $R=\mathbb{Z}$ y $S=\mathbb{N}$.
>- **(c)** $R=M_n(\mathbb{C})$ y $S=\operatorname{GL}_n(\mathbb{C})$.
>- **(d)** $R=M_n(\mathbb{Z})$ y $S=2M_n(\mathbb{Z})$.
>- **(e)** $R=\mathbb{C}$ y $S=\mathbb{Z}[i]$.
>- **(f)** $R=\mathbb{Z}[x]$ y $S=\{p\in \mathbb{Z}[x]:p(0)=0\}$.
>
>>[!Proof]-
>>- **(a)**
>>	1. Verificamok .os las tres condiciones de [[Teorico 9#^d09a31|subanillo]] para $\mathbb Z\subseteq\mathbb R$. Se tiene $0\in\mathbb Z$ y, para cualesquiera $a,b\in\mathbb Z$, tanto $a-b$ como $ab$ son enteros. Por tanto, $\mathbb Z$ es un subanillo de $\mathbb R$. Además, contiene a $1$, así que también es un subanillo con la misma unidad.
>>	2. No es un ideal de $\mathbb R$: tomando $s=1\in\mathbb Z$ y $r=0{,}5\in\mathbb R$, obtenemos $$rs=0{,}5\cdot1=0{,}5\notin\mathbb Z.$$ Falla la absorción por elementos del anillo ambiente requerida en [[Teorico 10#^a7d291|ideales]]. Como $\mathbb R$ es conmutativo, falla tanto por la izquierda como por la derecha.
>>- **(b)**
>>	1. $\mathbb N$ no es un subanillo de $\mathbb Z$: los elementos $1,2\in\mathbb N$ satisfacen $$1-2=-1\notin\mathbb N.$$ Por tanto, falla el cierre bajo diferencias de [[Teorico 9#^d09a31|subanillo]]. El argumento vale tanto si se incluye al $0$ en $\mathbb N$ como si no.
>>	2. Tampoco es un ideal de $\mathbb Z$, porque no es un subgrupo aditivo, condición necesaria en [[Teorico 10#^a7d291|ideales]].
>>- **(c)**
>>	1. El producto sí es cerrado: si $A,B\in\operatorname{GL}_n(\mathbb C)$, entonces $\det(A)\neq0$ y $\det(B)\neq0$. Por la multiplicatividad del determinante, $$\det(AB)=\det(A)\det(B)\neq0,$$ porque $\mathbb C$ no tiene divisores de cero. Por tanto, $AB$ es invertible y pertenece a $\operatorname{GL}_n(\mathbb C)$.
>>	2. Sin embargo, la suma no es cerrada. Las matrices $I_n$ y $-I_n$ son invertibles, pues $$I_nI_n=I_n,\qquad(-I_n)(-I_n)=I_n,$$ pero $$I_n+(-I_n)=0.$$ La matriz cero no es invertible: para cualquier matriz $B$, $0B=B0=0\neq I_n$.
>>	3. En particular, $0\notin\operatorname{GL}_n(\mathbb C)$, y también falla el cierre bajo diferencias, pues $I_n-I_n=0$. Por [[Teorico 9#^d09a31|subanillo]], $\operatorname{GL}_n(\mathbb C)$ no es un subanillo de $M_n(\mathbb C)$. Tampoco es un ideal, ya que no es un subgrupo aditivo, condición necesaria en [[Teorico 10#^a7d291|ideales]].
>>- **(d)**
>>	1. El conjunto $2M_n(\mathbb Z)=\{2A:A\in M_n(\mathbb Z)\}$ consiste exactamente en las matrices cuyas entradas son todas pares. Contiene a la matriz cero, pues $0=2\cdot0$.
>>	2. Es cerrado bajo diferencias: para $A,B\in M_n(\mathbb Z)$, $$2A-2B=2(A-B)\in2M_n(\mathbb Z).$$
>>	3. También es cerrado bajo productos. Entrada por entrada, $$((2A)(2B))_{ij}=\sum_{k=1}^n(2a_{ik})(2b_{kj})=4\sum_{k=1}^na_{ik}b_{kj}=4(AB)_{ij}.$$ Por tanto, $$(2A)(2B)=4AB=2(2AB)\in2M_n(\mathbb Z),$$ porque $2AB\in M_n(\mathbb Z)$. Por [[Teorico 9#^d09a31|subanillo]], $2M_n(\mathbb Z)$ es un subanillo de $M_n(\mathbb Z)$ con la convención que no exige contener la unidad.
>>	4. No es un subanillo con la misma unidad, pues $I_n\notin2M_n(\mathbb Z)$: sus entradas diagonales son $1$, que no es par.
>>	5. Además, es un ideal bilátero. Sean $C,A\in M_n(\mathbb Z)$. Para cada entrada, $$\begin{aligned}(C(2A))_{ij}&=\sum_{k=1}^nc_{ik}(2a_{kj})=2(CA)_{ij},\\((2A)C)_{ij}&=\sum_{k=1}^n(2a_{ik})c_{kj}=2(AC)_{ij}.\end{aligned}$$ Así, $$C(2A)=2(CA)\in2M_n(\mathbb Z),\qquad(2A)C=2(AC)\in2M_n(\mathbb Z).$$ Junto con el cierre aditivo probado en los pasos 1 y 2, esto verifica [[Teorico 10#^a7d291|ideales]] por ambos lados, sin suponer que las matrices conmuten.
>>- **(e)**
>>	1. El conjunto $\mathbb Z[i]=\{a+bi:a,b\in\mathbb Z\}$ consiste en los complejos cuyas partes real e imaginaria son enteras. Contiene a $0=0+0i$.
>>	2. Para $a,b,c,d\in\mathbb Z$, es cerrado bajo diferencias: $$(a+bi)-(c+di)=(a-c)+(b-d)i\in\mathbb Z[i].$$
>>	3. También es cerrado bajo productos: usando $i^2=-1$, $$\begin{aligned}(a+bi)(c+di)&=ac+adi+bci+bdi^2\\&=(ac-bd)+(ad+bc)i\in\mathbb Z[i],\end{aligned}$$ porque $ac-bd$ y $ad+bc$ son enteros. 
>>	4. Entonces por [[Teorico 9#^d09a31|subanillo]], $\mathbb Z[i]$ es un subanillo de $\mathbb C$. 
>>	5. Además, $1=1+0i\in\mathbb Z[i]$, de modo que contiene la misma unidad.
>>	6. **No es un ideal de $\mathbb C$.** Para serlo, debe absorber productos por cualquier elemento de $\mathbb C$, no solamente por elementos de $\mathbb Z[i]$. Tomamos $s=1\in\mathbb Z[i]$ y $r=0{,}5\in\mathbb C$. Entonces $$rs=sr=0{,}5\notin\mathbb Z[i],$$ porque su parte real no es entera. Por [[Teorico 10#^a7d291|ideales]], falla la absorción por ambos lados: no es ideal a izquierda, a derecha ni bilátero.
>>- **(f)**
>>	1. $S$ consiste en los polinomios de $\mathbb Z[x]$ que tienen a $0$ como raíz. El polinomio cero pertenece a $S$.
>>	2. Sean $p,q\in S$ no nulos. Escribimos $p(x)=x^j r(x)$ y $q(x)=x^k s(x)$, con $j,k\geq1$ y $r,s\in\mathbb Z[x]$. Su diferencia es explícitamente $$p(x)-q(x)=x^j r(x)-x^k s(x).$$ Al evaluar en $0$, ambos sumandos se anulan: $$(p-q)(0)=0^j r(0)-0^k s(0)=0-0=0.$$ Por tanto, $p-q\in S$. Si $p=0$, la diferencia es $-q$, que también se anula en $0$; si $q=0$, la diferencia es $p\in S$. Esto incluye el caso en que ambos son cero.
>>	3. Si $p,q\in S$ son no nulos, podemos escribir $p(x)=x^m u(x)$ y $q(x)=x^n v(x)$, con $m,n\geq1$ y $u,v\in\mathbb Z[x]$. Entonces $$p(x)q(x)=x^{m+n}u(x)v(x),$$ que también tiene a $0$ como raíz. Si alguno de los factores es el polinomio cero, el producto es cero y también pertenece a $S$. Por [[Teorico 9#^d09a31|subanillo]], $S$ es un subanillo de $\mathbb Z[x]$ con la convención que no exige contener la unidad. No contiene a $1$, pues $1(0)=1\neq0$.
>>	4. Además, es un ideal bilátero. Si $h\in\mathbb Z[x]$ es cualquiera y $q\in S$ es no nulo, escribimos $q(x)=x^n v(x)$ con $n\geq1$. Entonces $$h(x)q(x)=x^n\bigl(h(x)v(x)\bigr),$$ que sigue teniendo a $0$ como raíz, de modo que $hq\in S$. Si $q=0$, también $hq=0\in S$. Como el producto en $\mathbb Z[x]$ es conmutativo, $qh=hq\in S$. Junto con los pasos 1 y 2, esto verifica [[Teorico 10#^a7d291|ideales]] por ambos lados.

>[!exercise] Ejercicio 4
>Un anillo de Boole es un anillo $R$ tal que $a^2=a$ para todo $a\in R$. Probar que todo anillo de Boole es conmutativo y $a+a=0$ para todo $a\in R$. Identificar algún anillo de Boole entre los anillos del primer ejercicio.
>
>>[!Proof]-
>>- **Suma de un elemento consigo mismo.**
>>	1. Para $a\in R$, por la condición de Boole y distributividad, $$a+a=(a+a)^2=a^2+a^2+a^2+a^2=a+a+a+a.$$ Cancelando $a+a$, resulta $a+a=0$.
>>- **Conmutatividad.**
>>	1. Para $a,b\in R$, $$a+b=(a+b)^2=a^2+ab+ba+b^2=a+ab+ba+b.$$ Cancelando $a+b$ en el grupo aditivo abeliano, resulta $ab+ba=0$.
>>	2. Por la primera parte, $ba+ba=0$. Luego $$ab=ab+(ba+ba)=(ab+ba)+ba=ba.$$ Por tanto, $R$ es conmutativo.
>>- **Ejemplos del ejercicio 1.**
>>	1. **(a)** Si $G\neq\{0\}$, elegimos $g\neq0$: entonces $g^2=0\neq g$, por lo que no es de Boole. Si $G=\{0\}$, sí lo es, pues $0^2=0$.
>>	2. **(b)** Sí es de Boole: para todo $B\subseteq X$, $B\cap B=B$.
>>	3. **(c)** Los casos no conmutativos de $M_n(A)$ no son de Boole, por la conmutatividad demostrada arriba.
>>	4. **Casos particulares de (c).** Para $n=1$, si $A$ es de Boole, $M_1(A)$ también lo es: $(a)^2=(a^2)=(a)$ para todo $a\in A$.

>[!Exercise] Ejercicio 5
>En cada caso, decir si $f$ es homomorfismo de anillos o no.
>- **(a)** $f:\mathbb{Z}[x]\to\mathbb{Z}$, $f(p)=p(1)$.
>- **(b)** $f:\mathbb{C}\to\mathbb{C}$, $f(z)=\overline{z}$.
>- **(c)** $f:M_n(\mathbb{R})\to\mathbb{R}$, $f(A)=\det(A)$.
>- **(d)** $f:\mathbb{Z}_p\to\mathbb{Z}_p$, $f(a)=a^p$ ($p$ primo).
>
>>[!Proof]-
>>- **(a)**
>>	1. **Suma.** Para cualesquiera $p,q\in\mathbb Z[x]$, por la definición de suma de polinomios, $$f(p+q)=(p+q)(1)=p(1)+q(1)=f(p)+f(q).$$ Además, $f(0)=0$, por lo que $f$ es un homomorfismo de los grupos aditivos.
>>	2. **Producto.** Por la definición de producto de polinomios, $$f(pq)=(pq)(1)=p(1)q(1)=f(p)f(q).$$
>>	3. **Unidad.** El polinomio constante $1$ satisface $f(1)=1(1)=1$. Por tanto, $f$ es un homomorfismo de anillos.
>>- **(b)**
>>	1. **Suma.** Sean $z=x+iy$ y $w=u+iv$, con $x,y,u,v\in\mathbb R$. Entonces $$f(z+w)=\overline{(x+u)+i(y+v)}=(x+u)-i(y+v)=(x-iy)+(u-iv)=f(z)+f(w).$$ Además, $f(0)=\overline{0}=0$, por lo que $f$ es un homomorfismo de los grupos aditivos.
>>	2. **Producto.** Por un lado, $$f(zw)=\overline{(xu-yv)+i(xv+yu)}=(xu-yv)-i(xv+yu).$$ Por otro lado, $$f(z)f(w)=(x-iy)(u-iv)=(xu-yv)-i(xv+yu).$$ Por tanto, $f(zw)=f(z)f(w)$.
>>	3. **Unidad.** Se tiene $f(1)=\overline{1}=1$. Por tanto, $f$ es un homomorfismo de anillos.
>>- **(c)**
>>	1. **Si $n\geq2$.** Tomamos $A=B=I_n$. Como $2I_n$ es diagonal, su determinante es el producto de sus entradas diagonales: $$f(A+B)=\det(2I_n)=2^n,\qquad f(A)+f(B)=\det(I_n)+\det(I_n)=1+1=2.$$ Puesto que $n\geq2$, se tiene $2^n\geq4>2$. Por tanto, $f$ no preserva la suma y no es un homomorfismo de anillos.
>>	2. **Si $n=1$.** Toda matriz es de la forma $(a)$, con $a\in\mathbb R$, y $f((a))=a$. Así, $$f((a)+(b))=f((a+b))=a+b=f((a))+f((b))$$ y $$f((a)(b))=f((ab))=ab=f((a))f((b)).$$ Además, $f((1))=1$ y $f((0))=0$. Por tanto, en este caso $f$ sí es un homomorfismo de anillos.
>>- **(d)**
>>	1. **Suma.** Por el pequeño teorema de Fermat, $a^p=a$ en $\mathbb Z_p$ para todo $a\in\mathbb Z_p$, incluido $a=0$. Por tanto, para cualesquiera $a,b\in\mathbb Z_p$, $$f(a+b)=(a+b)^p=a+b=a^p+b^p=f(a)+f(b).$$ Además, $f(0)=0^p=0$, por lo que $f$ es un homomorfismo de los grupos aditivos.
>>	2. **Producto.** Como la multiplicación en $\mathbb Z_p$ es conmutativa, los factores de $(ab)^p$ pueden reagruparse, y obtenemos $$f(ab)=(ab)^p=a^pb^p=f(a)f(b).$$
>>	3. **Unidad.** Se tiene $f(1)=1^p=1$. Por tanto, $f$ es un homomorfismo de anillos; de hecho, por el paso 1, es la identidad de $\mathbb Z_p$.

>[!Exercise] Ejercicio 6
>- **(a)** Si $R$ es un anillo finito con más de un elemento y sin divisores de cero, entonces $R$ es un anillo de división.¹
>- **(b)** Si $R$ es un dominio íntegro finito, entonces $R$ es un cuerpo.
>
>>[!Proof]-
>>- **(a)** Demostración suponiendo, como acordamos, que $R$ tiene identidad multiplicativa $1$. Esta prueba no demuestra la existencia de identidad si se adopta la convención de anillo sin unidad.
>>	1. **Construcción.** Como $R$ tiene más de un elemento, existe un elemento no nulo. Fijamos un $a\in R\setminus\{0\}$ arbitrario y definimos $$f\colon R\longrightarrow R,\qquad f(x)=ax.$$ La función está bien definida porque el producto de dos elementos de $R$ pertenece a $R$.
>>	2. **Primero, homomorfismo aditivo.** Para cualesquiera $u,v\in R$, por distributividad, $$f(u+v)=a(u+v)=au+av=f(u)+f(v).$$ Además, $f(0)=0$ y $f(-v)=-f(v)$, pues $f(v)+f(-v)=f(v-v)=f(0)=0$. En particular, $$f(u-v)=f(u)-f(v).$$ Así, $f$ es un homomorfismo de grupos aditivos; no afirmamos que sea un morfismo de anillos.
>>	3. **Después, inyectividad: aquí usamos que no hay divisores de cero.** Sean $u,v\in R$ tales que $f(u)=f(v)$. Por la definición de $f$ y porque ya probamos que es un homomorfismo aditivo, $$a(u-v)=f(u-v)=f(u)-f(v)=0.$$ Como $R$ no tiene divisores de cero, de $a(u-v)=0$ se sigue que $a=0$ o $u-v=0$. Pero fijamos $a\neq0$, por lo que $u-v=0$ y, por tanto, $u=v$. Así, $f$ es inyectiva.
>>	4. **Sobreyectividad por finitud.** Si $R$ tiene $n$ elementos, la inyectividad implica que sus $n$ imágenes son distintas. Como todas pertenecen a $R$, la imagen tiene $n$ elementos y coincide con $R$. Por tanto, $f$ es sobreyectiva, y es un epimorfismo de grupos aditivos.
>>	5. **Inversa a derecha.** Aplicando la sobreyectividad a $1\in R$, existe $x\in R$ tal que $$f(x)=1,\qquad ax=1.$$
>>	6. **Inversa bilateral, sin usar conmutatividad.** Por asociatividad, la igualdad anterior y las propiedades de la identidad, $$f(xa)=a(xa)=(ax)a=1a=a=a1=f(1).$$ Como $f$ es inyectiva, $xa=1$. Así, $ax=xa=1$.
>>	7. **Conclusión.** Como $a\neq0$ era arbitrario, todo elemento no nulo de $R$ tiene inversa bilateral. Además, $1\neq0$: si $1=0$, para todo $r\in R$ tendríamos $r=1r=0r=0$, contradiciendo que $R$ tiene más de un elemento. Por tanto, $R$ es un anillo de división.
>>- **(b)**
>>	1. Como $R$ es un dominio íntegro finito, tiene identidad $1\neq0$ y no tiene divisores de cero. Por **(a)**, $R$ es un anillo de división.
>>	2. Además, por ser un dominio íntegro, $R$ es conmutativo. Por tanto, $R$ es un cuerpo.

>[!exercise] Ejercicio 7
>Sea $R$ un anillo con más de un elemento y supongamos que para todo $a\in R$, con $a\neq 0$, existe un único $b\in R$ tal que $aba=a$. Probar que:
>- **(a)** $R$ no tiene divisores de cero.
>- **(b)** $bab=b$.
>- **(c)** $R$ tiene una identidad.
>- **(d)** $R$ es un anillo de división.
>
>>[!Proof]-
>>- (a)
>>	1. Supongamos, por contradicción, que $R$ tiene divisores de cero. Entonces existen $c,d\in R$ tales que $c\neq0$, $d\neq0$ y $cd=0$. Como $c\neq0$, por hipótesis existe un único $b\in R$ tal que $cbc=c$.
>>	2. Por asociatividad, $cdc=(cd)c=0c=0$. Por distributividad, $c(b+d)c=cbc+cdc=c+0=c$. Así, $b$ y $b+d$ satisfacen la misma ecuación $cxc=c$.
>>	3. Por la unicidad de $b$, tenemos $b+d=b$. Cancelando $b$ en el grupo aditivo de $R$, obtenemos $d=0$, contradiciendo que $d\neq0$. Por tanto, $R$ no tiene divisores de cero.
>>- (b)
>>	1. Sea $a\neq0$ y sea $b$ el único elemento tal que $aba=a$. Por asociatividad, $a(bab)a=(aba)ba=aba=a$.
>>	2. Así, $bab$ satisface la misma ecuación que $b$. Por la unicidad de $b$, obtenemos $bab=b$.
>>- (c)
>>	1. Como $R$ tiene más de un elemento, elegimos $a\neq0$ y su correspondiente $b$ con $aba=a$.
>>	2. Para todo $r\in R$, por asociatividad y distributividad, $(r(ab)-r)a=raba-ra=r(aba)-ra=ra-ra=0$. Por **(a)** y $a\neq0$, resulta $r(ab)-r=0$, es decir, $r(ab)=r$. Por tanto, $ab$ es identidad a derecha para todo $R$.
>>	3. Análogamente, para todo $r\in R$, $a((ba)r-r)=abar-ar=(aba)r-ar=ar-ar=0$. Por **(a)** y $a\neq0$, resulta $(ba)r-r=0$, es decir, $(ba)r=r$. Por tanto, $ba$ es identidad a izquierda para todo $R$.
>>	4. Tomando $r=ba$ en $r(ab)=r$, obtenemos $(ba)(ab)=ba$. Tomando $r=ab$ en $(ba)r=r$, obtenemos $(ba)(ab)=ab$. Así, $ab=ba$, y este elemento es identidad bilateral de $R$.
>>	5. Este argumento prueba la existencia de una identidad bilateral a partir del par $a,b$ fijado; no estamos demostrando aquí su unicidad.
>>- (d)
>>	1. Sea $1_R$ la identidad obtenida en **(c)**. Como $R$ tiene más de un elemento, $1_R\neq0$: si $1_R=0$, para todo $r\in R$ tendríamos $r=r1_R=r0=0$, contradicción.
>>	2. Sea $x\in R$ no nulo arbitrario. Por hipótesis, existe un único $b\in R$ tal que $xbx=x$. Por **(c)**, $xb=bx=1_R$; por tanto, $b$ es inversa bilateral de $x$.
>>	3. Como $x\neq0$ era arbitrario, todo elemento no nulo de $R$ tiene inversa bilateral. Por tanto, $R$ es un anillo de división.

>[!exercise] Ejercicio 8
>Sea $R$ un anillo con $1_R$. Probar las siguientes afirmaciones:
>- **(a)** Si $\operatorname{car}(R)=n>0$, entonces $n=\min\{j\in\mathbb{N}:j1_R=0\}$.
>- **(b)** Si $R$ no tiene divisores de cero, entonces $\operatorname{car}(R)=0$ o $\operatorname{car}(R)$ es primo.
>- **(c)** ¿Existe un anillo de característica $n$, para todo $n\geq 2$?
>
>>[!Proof]-
>>- (a)
>>	1. **Significado de la notación.** Para un entero $m>0$ y $r\in R$, $mr$ denota la suma de $m$ copias de $r$: $$mr=\underbrace{r+\cdots+r}_{m\text{ veces}}.$$ No es un producto del anillo entre $m$ y $r$: $m$ es un entero que cuenta los sumandos y no se supone que pertenezca a $R$. En particular, $m1_R$ no puede identificarse con el entero $m$. La propiedad del neutro multiplicativo es $x\cdot1_R=x$ para $x\in R$.
>>	2. **Pertenencia al conjunto.** Como $\operatorname{car}(R)=n>0$, $n$ es el menor entero positivo tal que $nr=0$ para todo $r\in R$. Tomando $r=1_R$, obtenemos $n1_R=0$. Por tanto, $n$ pertenece al conjunto del enunciado, donde consideramos $\mathbb N=\{1,2,\ldots\}$.
>>	3. **Supongamos que hay un entero positivo menor.** Si existiera $j$ con $0<j<n$ y $j1_R=0$, tendríamos $0<n-j<n$. Como $n=j+(n-j)$, al separar las $n$ copias de $1_R$ en dos grupos obtenemos $n1_R=j1_R+(n-j)1_R$. Restando $j1_R$ en el grupo aditivo, $$(n-j)1_R=n1_R-j1_R=0-0=0.$$ Aquí usamos sumas repetidas y cancelación aditiva, no el producto del anillo.
>>	4. **De la suma de unidades a la suma de cualquier elemento.** Para todo $r\in R$, por distributividad y porque $1_R\cdot r=r$, $$\begin{aligned}\bigl((n-j)1_R\bigr)\cdot r&=\underbrace{(1_R+\cdots+1_R)}_{n-j\text{ veces}}\cdot r\\&=\underbrace{1_R\cdot r+\cdots+1_R\cdot r}_{n-j\text{ veces}}\\&=\underbrace{r+\cdots+r}_{n-j\text{ veces}}=(n-j)r.\end{aligned}$$ El producto $\bigl((n-j)1_R\bigr)\cdot r$ sí es un producto del anillo: sus factores son los elementos $(n-j)1_R\in R$ y $r\in R$, no el entero $n-j$. Además, $0\cdot r=(0+0)\cdot r=0\cdot r+0\cdot r$, y cancelando resulta $0\cdot r=0$. Como $(n-j)1_R=0$, concluimos $(n-j)r=\bigl((n-j)1_R\bigr)\cdot r=0\cdot r=0$ para todo $r\in R$.
>>	5. **Contradicción y conclusión.** Tenemos $0<n-j<n$ y $(n-j)r=0$ para todo $r\in R$, contradiciendo la minimalidad de $n$ en la definición de característica. Por tanto, ningún entero positivo menor que $n$ anula a $1_R$. Junto con el paso 2, esto prueba $$n=\min\{j\in\mathbb N:j1_R=0\}.$$
>>- (b)
>>	1. **Caso de característica cero y convención sobre el anillo cero.** Si $\operatorname{car}(R)=0$, ya se cumple la conclusión. Para el caso de característica positiva, suponemos $R\neq\{0\}$, de modo que $1_R\neq0$: si $1_R=0$, todo $r\in R$ satisfaría $r=1_R\cdot r=0\cdot r=0$. Esta hipótesis es necesaria: si se admite el anillo cero, no tiene divisores de cero, pero su característica es $1$, y el enunciado tal como está escrito tiene esa excepción.
>>	2. **Suposición de característica compuesta.** Sea $n=\operatorname{car}(R)>0$. Como $1_R\neq0$, por **(a)** tenemos $n\neq1$ y, por tanto, $n\geq2$. Supongamos, por contradicción, que $n$ es compuesto. Entonces existen enteros $a,b$ con $1<a,b<n$ tales que $n=ab$. Aquí $ab$ es un producto de enteros; no estamos suponiendo que $a,b$ pertenezcan a $R$.
>>	3. **Elementos del anillo y producto cero.** Las sumas repetidas $a1_R$ y $b1_R$ sí pertenecen a $R$. Aplicando distributividad a las copias de $1_R$ y usando $1_R\cdot1_R=1_R$, obtenemos $$\begin{aligned}(a1_R)\cdot(b1_R)&=\left(\underbrace{1_R+\cdots+1_R}_{a\text{ copias}}\right)\cdot\left(\underbrace{1_R+\cdots+1_R}_{b\text{ copias}}\right)\\&=\underbrace{1_R+\cdots+1_R}_{ab\text{ copias}}=(ab)1_R=n1_R=0.\end{aligned}$$ Los enteros $a,b$ cuentan sumandos; los factores del producto en $R$ son $a1_R$ y $b1_R$.
>>	4. **Ambos factores son no nulos.** Por **(a)** y las desigualdades $0<a,b<n$, se cumple $a1_R\neq0$ y $b1_R\neq0$. Su producto cero contradice que $R$ no tiene divisores de cero. Por tanto, $n$ no es compuesto y, como $n\geq2$, es primo. Así, para $R\neq\{0\}$, $\operatorname{car}(R)=0$ o $\operatorname{car}(R)$ es primo.
>>- (c)
>>	1. **Construcción.** Para cada entero $n\geq2$, tomamos el anillo $\mathbb Z_n$ con las operaciones usuales de clases módulo $n$ y unidad $\overline1$.
>>	2. **El entero $n$ anula a todos los elementos.** Para todo $j\in\mathbb Z$, $$n\overline j=\underbrace{\overline j+\overline j+\cdots+\overline j}_{n\text{ veces}}=\overline{\underbrace{j+j+\cdots+j}_{n\text{ veces}}}=\overline{nj}=\overline0,$$ pues $nj\equiv 0(n)$. Aquí $n\overline j$ denota una suma de $n$ copias de $\overline j$.
>>	3. **Minimalidad por el orden aditivo de $1$.** Sea $\overline1\in\mathbb Z_n$, que genera el grupo aditivo y tiene orden $n$. Si un entero $j$ con $0<j<n$ anulara a todos los elementos de $\mathbb Z_n$, en particular tendríamos $j1=0=e_+$, (notar que $j1$ es $j$ veces el $1$ lo que antes llamabamos $1^{j}$) contradiciendo que $1$ tiene orden aditivo $n$. Por tanto, ningún entero positivo menor que $n$ anula a todos los elementos.
>>	4. **Conclusión.** Por los pasos anteriores, $\operatorname{car}(\mathbb Z_n)=n$. Así, para todo entero $n\geq2$ existe un anillo de característica $n$.

>[!Exercise] Ejercicio 9
>Sea $R$ un anillo. Probar las siguientes afirmaciones:
>- **(a)** Si $R$ es conmutativo y $a,b\in R$ son nilpotentes, entonces $a+b$ es nilpotente.
>- **(b)** Mostrar que si no se pide conmutatividad, la afirmación del ítem anterior es falsa.
>- **(c)** Si $R$ tiene $1$ y $r\in R$ es nilpotente, entonces $1+r$ y $1-r$ son unidades.
>
>>[!Proof]-
>>- (a)
>>	1. **Elección del exponente.** Como $a$ y $b$ son nilpotentes, existen enteros $m,n\geq1$ tales que $a^m=0$ y $b^n=0$. Elegimos un entero $N>m+n-2$.
>>	2. **Expansión de Newton.** Por la conmutatividad de $R$, podemos expandir $(a+b)^N$. Los términos extremos son $a^N$ y $b^N$; cada término interior, de índice $1\leq k\leq N-1$, es $\binom Nk a^k b^{N-k}$, donde el coeficiente entero indica una suma repetida. Esta descripción no requiere que $R$ tenga unidad ni utiliza potencias de exponente cero.
>>	3. **Anulación de cada término.** Fijemos un índice interior $k$. Si simultáneamente $k<m$ y $N-k<n$, por ser enteros tendríamos $k\leq m-1$ y $N-k\leq n-1$, de donde $$N=k+(N-k)\leq(m-1)+(n-1)=m+n-2<N,$$ una contradicción. Por tanto, $k\geq m$ o $N-k\geq n$. En el primer caso, $a^k=0$: si $k=m$, es la hipótesis; si $k>m$, $a^k=a^m a^{k-m}=0$. Análogamente, en el segundo caso $b^{N-k}=0$. Así, todo término interior es cero. Además, como $N$ es entero, $N\geq m+n-1\geq m,n$, por lo que los términos extremos también son cero.
>>	4. **Conclusión.** Todos los términos de la expansión se anulan, luego $(a+b)^N=0$. Por tanto, $a+b$ es nilpotente.
>>- (b)
>>	1. **Elección de las matrices.** En el anillo $M_2(\mathbb R)$ tomamos $$A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad B=\begin{pmatrix}0&0\\1&0\end{pmatrix}.$$ Por multiplicación matricial, $$A^2=B^2=\begin{pmatrix}0&0\\0&0\end{pmatrix}.$$ Como $A\neq0$ y $B\neq0$, ambas son nilpotentes de índice $2$. Además, $$AB=\begin{pmatrix}1&0\\0&0\end{pmatrix}\neq\begin{pmatrix}0&0\\0&1\end{pmatrix}=BA,$$ por lo que este anillo no es conmutativo.
>>	2. **Potencias de la suma.** Sea $$S=A+B=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$ Calculando obtenemos $$S^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I.$$ Por asociatividad, para todo entero $j\geq1$, $S^{2j}=(S^2)^j=I$. Para los exponentes impares, $S^1=S$ y, si $j\geq1$, $S^{2j+1}=(S^2)^jS=IS=S$.
>>	3. **Conclusión.** Toda potencia positiva de $S$ es $I$ o $S$, y ambas matrices son distintas de cero. Por tanto, $A+B$ no es nilpotente, aunque $A$ y $B$ sí lo son. Esto prueba que la afirmación de (a) es falsa si se omite la conmutatividad.
>>- (c)
>>	1. **Nilpotencia e inverso de $1-r$.** Sea $n\geq1$ tal que $r^n=0$. Como $R$ tiene unidad, usamos la convención $r^0=1$ y definimos $S=\sum_{k=0}^{n-1}r^k$. Por distributividad y asociatividad, $$\begin{aligned}(1-r)S&=\sum_{k=0}^{n-1}r^k-\sum_{k=0}^{n-1}r^{k+1}=1-r^n=1,\\S(1-r)&=\sum_{k=0}^{n-1}r^k-\sum_{k=0}^{n-1}r^{k+1}=1-r^n=1.\end{aligned}$$ Por tanto, $1-r$ es una unidad y su inverso es $S$.
>>	2. **Inverso de $1+r$.** Definimos $T=\sum_{k=0}^{n-1}(-1)^k r^k$, donde $(-1)^k r^k$ significa $r^k$ si $k$ es par y su opuesto aditivo si $k$ es impar. Por distributividad y asociatividad, $$\begin{aligned}(1+r)T&=\sum_{k=0}^{n-1}(-1)^k r^k+\sum_{k=0}^{n-1}(-1)^k r^{k+1}=1+(-1)^{n-1}r^n=1,\\T(1+r)&=\sum_{k=0}^{n-1}(-1)^k r^k+\sum_{k=0}^{n-1}(-1)^k r^{k+1}=1+(-1)^{n-1}r^n=1.\end{aligned}$$ En efecto, para cada $1\leq j\leq n-1$, los términos de potencia $r^j$ tienen signos opuestos y se cancelan; el término final se anula porque $r^n=0$. Por tanto, $1+r$ es una unidad y su inverso es $T$.
>>	3. **No se requiere conmutatividad de $R$.** Las igualdades en ambos órdenes se justifican por $r\,r^k=r^{k+1}=r^k r$, que se sigue de la asociatividad, y por las identidades $1r^k=r^k=r^k1$. Así, ambos inversos son bilaterales sin suponer que el anillo sea conmutativo.

^e9a6c1

>[!exercise] Ejercicio 10
>Sea $R$ un anillo. Demostrar que las siguientes afirmaciones son equivalentes:
>- **(a)** $R$ no tiene elementos nilpotentes distintos de cero.
>- **(b)** Si $a\in R$ y $a^2=0$, entonces $a=0$.
>
>>[!Proof]-
>>- **(a) $\Rightarrow$ (b)**
>>	1. Supongamos **(a)**. Sea $a\in R$ tal que $a^2=0$. Entonces $a$ es nilpotente y, por **(a)**, $a=0$.
>>- **(b) $\Rightarrow$ (a)**
>>	1. Supongamos **(b)** y, por contradicción, que existe un elemento nilpotente $p\in R$ con $p\neq0$. Elegimos el menor entero positivo $k$ tal que $p^k=0$. Como $p\neq0$, tenemos $k\geq2$.
>>	2. **Caso par.** Si $k=2j$, con $j\geq1$, por asociatividad tenemos $$(p^j)^2=p^{2j}=p^k=0.$$ Por **(b)**, $p^j=0$. Como $1\leq j<k$, esto contradice la minimalidad de $k$.
>>	3. **Caso impar.** Si $k$ es impar, como $k\geq2$, tenemos $k\geq3$. Escribimos $k+1=2j$, con $j\geq2$. Entonces $k=2j-1$ y $k-j=j-1\geq1$, por lo que $1\leq j<k$. Por asociatividad, $$(p^j)^2=p^{2j}=p^{k+1}=p^kp=0p=0.$$ Por **(b)**, $p^j=0$, contradiciendo nuevamente la minimalidad de $k$.
>>	4. Ambos casos llevan a una contradicción. Por tanto, $R$ no tiene elementos nilpotentes distintos de cero, lo que prueba **(a)**. Así, **(a)** y **(b)** son equivalentes.

>[!exercise] Ejercicio 11
>Sean $R$ y $S$ anillos con identidad y sea $f:R\to S$ un morfismo que preserva el producto pero no las identidades.
>- **(a)** Mostrar que existen $R,S$ y $f$ tales que $f(1_R)\neq 1_S$.
>- **(b)** Probar que si $f$ es un epimorfismo, entonces $f(1_R)=1_S$.
>- **(c)** Probar que si $u$ es una unidad en $R$ tal que $f(u)$ es una unidad en $S$, entonces $f(1_R)=1_S$ y $f(u^{-1})=f(u)^{-1}$.
>
>>[!Proof]-
>>- (a)
>>	1. Tomamos $R=S=\mathbb{Z}$ y definimos $f:\mathbb{Z}\to\mathbb{Z}$ por $f(x)=0$ para todo $x\in\mathbb{Z}$. Para cualesquiera $x,y\in\mathbb{Z}$, se cumple $f(x+y)=0=f(x)+f(y)$ y $f(xy)=0=f(x)f(y)$, de modo que $f$ es un morfismo de anillos que preserva el producto. Sin embargo, $f(1_R)=0\neq 1=1_S$.
>>- (b)
>>	1. Por sobreyectividad, existe $x\in R$ tal que $f(x)=1_S$.
>>	2. Como $f$ preserva el producto, $$1_S=f(x)=f(1_Rx)=f(1_R)f(x)=f(1_R)1_S=f(1_R).$$
>>- (c)
>>	1. De $u1_R=u$ y la multiplicatividad de $f$, obtenemos $f(u)f(1_R)=f(u)$. Como $f(u)$ es invertible en $S$, multiplicando a izquierda por $(f(u))^{-1}$ y usando asociatividad resulta $$f(1_R)=\bigl((f(u))^{-1}f(u)\bigr)f(1_R)=(f(u))^{-1}\bigl(f(u)f(1_R)\bigr)=(f(u))^{-1}f(u)=1_S.$$
>>	2. Como $u$ es una unidad de $R$, tenemos $uu^{-1}=1_R$. Por lo tanto, $f(u)f(u^{-1})=f(1_R)=1_S$. Como $f(u)$ es invertible, concluimos que $f(u^{-1})=(f(u))^{-1}$.

>[!exercise] Ejercicio 12
>Sea $R$ un anillo y $a\in R$. Probar las siguientes afirmaciones.
>- **(a)** $J_a:=\{r\in R:ra=0\}$ es un ideal a izquierda.
>- **(b)** $K_a:=\{r\in R:ar=0\}$ es un ideal a derecha.
>- **(c)** Si $R$ es conmutativo, entonces $\operatorname{Nilp}(R):=\{r\in R:r\text{ es nilpotente}\}$ es ideal.
>- **(d)** Si $I$ es un ideal, entonces el conjunto $[R:I]:=\{r\in R:xr\in I,\text{ para todo }x\in R\}$ es ideal que contiene a $I$.
>
>>[!Proof]-
>>- (a)
>>	1. El conjunto $J_a$ contiene al cero, pues $0a=0$.
>>	2. Sean $x,y\in J_a$. Entonces $xa=ya=0$ y, por distributividad, $$(x+y)a=xa+ya=0+0=0.$$ Por lo tanto, $x+y\in J_a$.
>>	3. Sea $x\in J_a$. Por distributividad, $$xa+(-x)a=(x+(-x))a=0a=0.$$ Como $xa=0$, resulta $0+(-x)a=0$, de donde $(-x)a=0$ y $-x\in J_a$. Así, $J_a$ es un subgrupo del grupo aditivo de $R$.
>>	4. Sean $r\in R$ y $b\in J_a$. Como $ba=0$, por asociatividad se tiene $$(rb)a=r(ba)=r0=0.$$ Por tanto, $rb\in J_a$, es decir, $rJ_a\subseteq J_a$ para todo $r\in R$. Junto con el paso anterior, esto prueba que $J_a$ es un ideal a izquierda.
>>- (b)
>>	1. La demostración es análoga a (a), intercambiando los lados de los productos. Se tiene $a0=0$; si $x,y\in K_a$, entonces $a(x+y)=ax+ay=0$ y $ax+a(-x)=a(x+(-x))=0$, de donde $a(-x)=0$. Así, $K_a$ es un subgrupo aditivo de $R$. Finalmente, si $b\in K_a$ y $r\in R$, por asociatividad $a(br)=(ab)r=0r=0$, luego $br\in K_a$. Por tanto, $K_a$ es un ideal a derecha.
>>- (c)
>>	1. Se tiene $0\in\operatorname{Nilp}(R)$, pues $0^1=0$. Si $x,y\in\operatorname{Nilp}(R)$, por [[EA - Pr6#^e9a6c1|Ejercicio 9 (a)]], aplicado porque $R$ es conmutativo, $x+y$ es nilpotente. Así, $\operatorname{Nilp}(R)$ es cerrado bajo suma.
>>	2. Justifiquemos primero que $(-r)^2=r^2$. Para cualesquiera $u,v\in R$, la distributividad da $uv+(-u)v=(u+(-u))v=0$ y $uv+u(-v)=u(v+(-v))=0$. Por unicidad del inverso aditivo, $(-u)v=-(uv)$ y $u(-v)=-(uv)$. Además, $-(-w)=w$, pues $w$ es el inverso aditivo de $-w$. Por tanto, $$(-r)^2=(-r)(-r)=-(r(-r))=-(-(rr))=rr=r^2.$$
>>	3. Sea $r\in\operatorname{Nilp}(R)$ y elijamos $n\geq1$ tal que $r^n=0$. Si $n$ es par, tomamos $m=n$; si es impar, tomamos $m=n+1$, pues $r^{n+1}=r^nr=0r=0$. En ambos casos, $m=2k$ para algún entero $k\geq1$ y $r^m=0$. Por asociatividad y el paso anterior, $$(-r)^m=\bigl((-r)^2\bigr)^k=(r^2)^k=r^{2k}=r^m=0.$$ Así, $-r$ es nilpotente. Junto con el paso 1, esto prueba que $\operatorname{Nilp}(R)$ es un subgrupo aditivo de $R$.
>>	4. Sean $r\in\operatorname{Nilp}(R)$ y $a\in R$ arbitrario. Elijamos $n\geq1$ tal que $r^n=0$. Por conmutatividad, $$(ar)^n=a^nr^n=a^n0=0.$$ En efecto, la igualdad $(ar)^j=a^jr^j$ se prueba por inducción para $j\geq1$: para $j=1$ es inmediata, y, si vale para $j$, entonces $(ar)^{j+1}=a^jr^jar=a^{j+1}r^{j+1}$, porque $r^ja=ar^j$. Por tanto, $ar$ es nilpotente. Como $ra=ar$, también $ra$ es nilpotente. Concluimos que $\operatorname{Nilp}(R)$ es un ideal de $R$.
>>- (d)
>>	1. Como $I$ es un ideal, $0\in I$. Para todo $x\in R$ se tiene $x0=0\in I$, de modo que $0\in[R:I]$.
>>	2. Sean $a,b\in[R:I]$. Para todo $x\in R$, por distributividad, $$x(a+b)=xa+xb\in I,$$ pues $xa,xb\in I$ e $I$ es cerrado bajo suma. Por tanto, $a+b\in[R:I]$.
>>	3. Sea $a\in[R:I]$. Para todo $x\in R$, $xa\in I$, luego $-(xa)\in I$. Además, por distributividad, $xa+x(-a)=x(a+(-a))=x0=0$, por lo que $x(-a)=-(xa)$ por unicidad del inverso aditivo. Así, $x(-a)\in I$ para todo $x\in R$, de donde $-a\in[R:I]$. Los pasos anteriores prueban que $[R:I]$ es un subgrupo aditivo de $R$.
>>	4. Sean $r\in[R:I]$ y $\widetilde r\in R$. Para todo $x\in R$, por asociatividad, $$x(\widetilde r r)=(x\widetilde r)r\in I,$$ porque $x\widetilde r\in R$ y $r\in[R:I]$. Por tanto, $\widetilde r r\in[R:I]$.
>>	5. Con los mismos elementos, para todo $x\in R$ se tiene $$x(r\widetilde r)=(xr)\widetilde r\in I,$$ pues $xr\in I$ e $I$ es un ideal a derecha. Por tanto, $r\widetilde r\in[R:I]$. Así, $[R:I]$ es estable por multiplicación a ambos lados y, junto con el paso 3, esto prueba que es un ideal de $R$.
>>	6. Finalmente, sea $y\in I$. Para todo $x\in R$, $xy\in I$ porque $I$ es un ideal a izquierda. Por definición, $y\in[R:I]$. Por tanto, $I\subseteq[R:I]$.
>>	7. **Observación sobre la unidad.** Si $R$ tiene unidad y $y\in[R:I]$, tomando $x=1_R$ en la definición obtenemos $y=1_Ry\in I$. Así, $[R:I]\subseteq I$ y, por el paso anterior, $[R:I]=I$. Sin unidad, la inclusión puede ser estricta: en $R=2\mathbb Z$, con las operaciones usuales, tomemos $I=4\mathbb Z$. Este conjunto es un subgrupo aditivo y es estable por multiplicación a ambos lados por elementos de $R$, pues $(2k)(4m)=8km\in4\mathbb Z$ y el producto es conmutativo; por tanto, es ideal. Para todo $y=2m\in R$ y $x=2k\in R$, $xy=4km\in I$, de modo que $[R:I]=R$. Sin embargo, $2\in R\setminus I$, luego $I\subsetneq[R:I]$.

>[!exercise] Ejercicio 13
>Sea $S=M_n(R)$ el anillo de todas las matrices de tamaño $n\times n$ sobre un anillo $R$.
>- **(a)** Calcular $Z(S)$, el centro del anillo $S$.
>- **(b)** Mostrar que $Z(S)$ contiene un subanillo isomorfo a $Z(R)$.
>- **(c)** Mostrar que si $R$ es un anillo con identidad, entonces $Z(S)=\{\lambda I_d:\lambda\in Z(R)\}$.
>- **(d)** Mostrar que si $n\geq 2$ y $R$ tiene $1_R\neq 0_R$, entonces $Z(S)$ no es un ideal en $S$.
>
>>[!Proof]-
>>- (a)
>>	1. Para $1\leq i,j\leq n$ y $r\in R$, sea $E_{ij}(r)$ la matriz cuya entrada $(i,j)$ es $r$ y cuyas demás entradas son cero. Si $A=(a_{pq})$, entonces $$(AE_{ij}(r))_{pq}=\begin{cases}a_{pi}r,&q=j,\\0,&q\ne j,\end{cases}\qquad (E_{ij}(r)A)_{pq}=\begin{cases}ra_{jq},&p=i,\\0,&p\ne i.\end{cases}$$
>>	2. Supongamos que $A\in Z(S)$. Igualando las entradas anteriores, en la posición $(i,j)$ obtenemos $a_{ii}r=ra_{jj}$; en las posiciones $(p,j)$ con $p\ne i$ obtenemos $a_{pi}r=0$; y en las posiciones $(i,q)$ con $q\ne j$ obtenemos $ra_{jq}=0$. Fuera de la fila $i$ y de la columna $j$, ambos productos tienen entrada cero. Como $i,j,r$ son arbitrarios, toda entrada fuera de la diagonal es anulada por todo elemento de $R$ por ambos lados. Además, tomando $i=j$, cada entrada diagonal pertenece a $Z(R)$.
>>	3. Recíprocamente, supongamos que $a_{uv}r=ra_{uv}=0$ para todo $u\ne v$ y todo $r\in R$, y que $a_{ii}r=ra_{jj}$ para todos $i,j$ y todo $r\in R$. Las fórmulas del paso 1 muestran que $AE_{ij}(r)=E_{ij}(r)A$: en la posición $(i,j)$ se usa la condición sobre la diagonal; en la columna $j$ fuera de esa posición y en la fila $i$ fuera de esa posición se usan las condiciones sobre las entradas no diagonales; en las demás posiciones ambos lados son cero.
>>	4. Toda matriz $B=(b_{ij})\in S$ se escribe como $B=\sum_{i,j=1}^n E_{ij}(b_{ij})$. Por distributividad y el paso anterior, $$AB=\sum_{i,j=1}^n AE_{ij}(b_{ij})=\sum_{i,j=1}^n E_{ij}(b_{ij})A=BA.$$ Por tanto, $A\in Z(S)$.
>>	5. Concluimos que $$Z(S)=\{(a_{pq})\in M_n(R):\ a_{uv}r=ra_{uv}=0\text{ para todo }u\ne v\text{ y todo }r\in R,\quad a_{ii}r=ra_{jj}\text{ para todos }i,j\text{ y todo }r\in R\}.$$ Sin identidad, las entradas fuera de la diagonal no tienen por qué ser cero.
>>- (b)
>>	1. Para $\alpha\in Z(R)$, sea $D(\alpha)$ la matriz con todas sus entradas diagonales iguales a $\alpha$ y sus entradas fuera de la diagonal iguales a cero. Por (a), $D(\alpha)\in Z(S)$: las entradas no diagonales son anuladas por todo elemento de $R$ por ambos lados, y la condición sobre la diagonal se cumple porque $\alpha r=r\alpha$ para todo $r\in R$. Así queda definida la aplicación $D:Z(R)\to Z(S)$, sin suponer que $R$ tenga identidad.
>>	2. Para $\alpha,\beta\in Z(R)$, la suma de las matrices diagonales da $D(\alpha+\beta)=D(\alpha)+D(\beta)$. En cuanto al producto, $$(D(\alpha)D(\beta))_{ij}=\sum_{k=1}^n D(\alpha)_{ik}D(\beta)_{kj}=\begin{cases}\alpha\beta,&i=j,\\0,&i\ne j.\end{cases}$$ En efecto, si $i=j$, el único término que puede ser no nulo es el de $k=i$; si $i\ne j$, en cada término al menos uno de los factores es cero. Por tanto, $D(\alpha\beta)=D(\alpha)D(\beta)$, y $D$ es un homomorfismo de anillos.
>>	3. Si $D(\alpha)=0$, su entrada $(1,1)$ es cero, luego $\alpha=0$. Recíprocamente, $D(0)=0$, así que $\ker D=\{0\}$. Explícitamente, si $D(\alpha)=D(\beta)$, entonces $D(\alpha-\beta)=0$, por lo que $\alpha-\beta=0$ y $\alpha=\beta$. Así, $D$ es inyectiva.
>>	4. La imagen $T=D(Z(R))$ contiene la matriz cero y es cerrada bajo resta y producto, pues $D(\alpha)-D(\beta)=D(\alpha-\beta)$ y $D(\alpha)D(\beta)=D(\alpha\beta)$. Por tanto, $T$ es un subanillo de $Z(S)$. La aplicación $D:Z(R)\to T$ es un homomorfismo inyectivo y sobreyectivo sobre $T$ por su definición; luego $T\cong Z(R)$.
>>- (c)
>>	1. Supongamos que $R$ tiene identidad y sea $A=(a_{pq})\in Z(S)$. Por (a), si $u\ne v$, se tiene $a_{uv}r=0$ para todo $r\in R$. Tomando $r=1_R$, obtenemos $a_{uv}=a_{uv}1_R=0$. Por tanto, $A$ es diagonal.
>>	2. También por (a), $a_{ii}r=ra_{jj}$ para todos $i,j$ y todo $r\in R$. Tomando $r=1_R$, resulta $a_{ii}=a_{ii}1_R=1_Ra_{jj}=a_{jj}$. Así, todas las entradas diagonales coinciden en un elemento $\lambda\in R$. Tomando $i=j$ en la condición anterior, obtenemos $\lambda r=r\lambda$ para todo $r\in R$, de modo que $\lambda\in Z(R)$. Luego $A=\lambda I_n$.
>>	3. Recíprocamente, si $\lambda\in Z(R)$, la matriz $\lambda I_n$ tiene entradas no diagonales nulas y todas sus entradas diagonales son $\lambda$. Estas satisfacen $\lambda r=r\lambda$ para todo $r\in R$, por lo que cumple todas las condiciones de (a) y pertenece a $Z(S)$. Concluimos que $$Z(S)=\{\lambda I_n:\lambda\in Z(R)\}.$$
>>- (d)
>>	1. Como $1_Rr=r=r1_R$ para todo $r\in R$, se tiene $1_R\in Z(R)$ y, por (c), $I_n\in Z(S)$. Para refutar que $Z(S)$ sea un ideal, basta encontrar $A\in S$ tal que $AI_n\notin Z(S)$.
>>	2. Tomemos $A=E_{11}(1_R)$. Como $n\geq2$, sus entradas diagonales $(1,1)$ y $(2,2)$ son $1_R$ y $0_R$, respectivamente. Estas son distintas por hipótesis, de modo que $A$ no es una matriz escalar. Por (c), $A\notin Z(S)$.
>>	3. Sin embargo, $AI_n=A$. Así, el producto de $A\in S$ por $I_n\in Z(S)$ no pertenece a $Z(S)$. Por tanto, falla la absorción por multiplicación y $Z(S)$ no es un ideal en $S$.

>[!exercise] Ejercicio 14
>Sea $f:R\to S$ un homomorfismo de anillos, $I$ un ideal de $R$ y $J$ un ideal de $S$.
>- **(a)** Probar que $f^{-1}(J)$ es un ideal de $R$ que contiene a $\ker f$.
>- **(b)** Si $f$ es epimorfismo, entonces $f(I)$ es un ideal en $S$. ¿Es esto cierto si $f$ no es epimorfismo?
>
>>[!Proof]-
>>- (a)
>>	1. Como $f(0_R)=0_S$ y $0_S\in J$, se tiene $0_R\in f^{-1}(J)$.
>>	2. Si $x,y\in f^{-1}(J)$, entonces $f(x),f(y)\in J$. Como $f$ es un homomorfismo y $J$ es cerrado por resta, $$f(x-y)=f(x)-f(y)\in J.$$ Por tanto, $x-y\in f^{-1}(J)$. El cierre por resta y la pertenencia del cero muestran que $f^{-1}(J)$ es un subgrupo aditivo de $R$: para $x\in f^{-1}(J)$, también $-x=0_R-x\in f^{-1}(J)$, y para $x,y\in f^{-1}(J)$, también $x+y=x-(-y)\in f^{-1}(J)$.
>>	3. Sean $r\in R$ y $x\in f^{-1}(J)$. Como $f(r)\in S$, $f(x)\in J$ y $J$ es un ideal de $S$, $$f(rx)=f(r)f(x)\in J,\qquad f(xr)=f(x)f(r)\in J.$$ Luego $rx,xr\in f^{-1}(J)$. Por tanto, $f^{-1}(J)$ es un ideal de $R$.
>>	4. Si $x\in\ker f$, entonces $f(x)=0_S\in J$, de modo que $x\in f^{-1}(J)$. Así, $\ker f\subseteq f^{-1}(J)$.
>>- (b)
>>	1. Supongamos que $f$ es sobreyectiva. Sean $s\in S$ e $y\in f(I)$. Por definición de imagen existe $x\in I$ con $f(x)=y$, y por sobreyectividad existe $\tilde x\in R$ con $f(\tilde x)=s$. Como $I$ es un ideal de $R$, los elementos $\tilde x x$ y $x\tilde x$ pertenecen a $I$. Por tanto, $$sy=f(\tilde x)f(x)=f(\tilde x x)\in f(I),\qquad ys=f(x)f(\tilde x)=f(x\tilde x)\in f(I).$$ Esto prueba la absorción por ambos lados.
>>	2. Como $0_R\in I$, se tiene $0_S=f(0_R)\in f(I)$. Si $u,v\in f(I)$, existen $a,b\in I$ tales que $u=f(a)$ y $v=f(b)$. Entonces $$u-v=f(a)-f(b)=f(a-b)\in f(I),$$ pues $a-b\in I$. Así, $f(I)$ es un subgrupo aditivo de $S$: contiene los inversos $-u=0_S-u$ y las sumas $u+v=u-(-v)$. Junto con el paso anterior, esto demuestra que $f(I)$ es un ideal de $S$.
>>	3. Sin sobreyectividad, la afirmación puede fallar. Consideremos la inclusión $f:\mathbb Z\to\mathbb R$, dada por $f(m)=m$. Es un homomorfismo porque $f(m+n)=m+n=f(m)+f(n)$ y $f(mn)=mn=f(m)f(n)$ para todos $m,n\in\mathbb Z$. No es sobreyectiva, pues $\sqrt2\in\mathbb R\setminus\mathbb Z$.
>>	4. Tomemos $I=\mathbb Z$, que es un ideal de sí mismo: contiene al cero, es cerrado por resta y absorbe la multiplicación por enteros por ambos lados. Su imagen es $f(I)=\mathbb Z$, pero $$1\in f(I),\qquad \sqrt2\in\mathbb R,\qquad \sqrt2\cdot1=\sqrt2\notin f(I).$$ Por tanto, $f(I)$ no es un ideal de $\mathbb R$, ya que falla la absorción.

^a14b6f

>[!exercise] Ejercicio 15
>Sea $f:R\to S$ un epimorfismo de anillos. Probar las siguientes afirmaciones.
>- **(a)** Si $P$ es ideal primo en $R$ y $\ker f\subseteq P$, entonces $f(P)$ es un ideal primo en $S$.
>- **(b)** Si $Q$ es ideal primo en $S$, entonces $f^{-1}(Q)$ es un ideal primo en $R$ y $\ker f\subseteq f^{-1}(Q)$.
>- **(c)** Existe una correspondencia 1-1 entre el conjunto de todos los ideales primos en $R$ que contienen a $\ker f$ y el conjunto de todos los ideales primos de $S$, dada por $P\mapsto f(P)$.
>- **(d)** Sea $I$ un ideal en $R$. Cada ideal (primo) en $R/I$ es de la forma $J/I$, donde $J$ es un ideal (primo) en $R$ que contiene a $I$.
>
>>[!Proof]-
>>- (a)
>>	1. Por [[EA - Pr6#^a14b6f|Ejercicio 14 (b)]], $f(P)$ es un ideal de $S$, pues $f$ es sobreyectiva y $P$ es un ideal de $R$.
>>	2. Sean $u,v\in S$ tales que $uv\in f(P)$. Por sobreyectividad existen $a,b\in R$ con $f(a)=u$ y $f(b)=v$, y como $uv$ estan en $f(P)$ existe $p\in P$ tal que $uv=f(p)$. Entonces $$f(ab-p)=f(a)f(b)-f(p)=uv-uv=0_S,$$ por lo que $ab-p\in\ker f\subseteq P$. Así, $ab=(ab-p)+p\in P$. Como $P$ es primo, $a\in P$ o $b\in P$, y por tanto $u=f(a)\in f(P)$ o $v=f(b)\in f(P)$.
>>	3. Además, $f(P)\neq S$: si $f(P)=S$, para cada $x\in R$ existiría $p\in P$ con $f(x)=f(p)$; entonces $x-p\in\ker f\subseteq P$ y $x=(x-p)+p\in P$. Esto implicaría $P=R$, contradiciendo que $P$ es propio. Por lo tanto, $f(P)$ es un ideal primo de $S$.
>>- (b)
>>	1. Por [[EA - Pr6#^a14b6f|Ejercicio 14 (a)]], $f^{-1}(Q)$ es un ideal de $R$ y $\ker f\subseteq f^{-1}(Q)$.
>>	2. Sean $a,b\in R$ tales que $ab\in f^{-1}(Q)$. Como $f$ es un homomorfismo y $Q$ es primo, $$\begin{aligned}f(ab)\in Q&\implies f(a)f(b)\in Q\\&\implies f(a)\in Q\ \text{o}\ f(b)\in Q\\&\implies a\in f^{-1}(Q)\ \text{o}\ b\in f^{-1}(Q).\end{aligned}$$
>>	3. Además, $f^{-1}(Q)\neq R$: si $f^{-1}(Q)=R$, entonces $f(x)\in Q$ para todo $x\in R$, y por sobreyectividad $S=f(R)\subseteq Q$. Esto implicaría $Q=S$, contradiciendo que $Q$ es propio. Por lo tanto, $f^{-1}(Q)$ es un ideal primo de $R$.
>>- (c)
>>	1. Consideremos la aplicación $\Phi(P)=f(P)$, cuyo dominio es el conjunto de los ideales primos de $R$ que contienen a $\ker f$ y cuyo codominio es el conjunto de los ideales primos de $S$. Por (a), $\Phi$ está bien definida.
>>	2. Para probar que es sobreyectiva, sea $Q$ un ideal primo de $S$. Por (b), $f^{-1}(Q)$ es un ideal primo de $R$ que contiene a $\ker f$. Además, $f(f^{-1}(Q))\subseteq Q$ 
>>	3. Recíprocamente, si $q\in Q$, por sobreyectividad de $f$ existe $r\in R$ con $f(r)=q$; entonces $r\in f^{-1}(Q)$ y $q\in f(f^{-1}(Q))$. 
>>	4. Mostrando que $f(f^{-1}(Q))=Q$ o lo que es lo mismo $\Phi(f^{-1}(Q))=Q$, de modo que cada ideal primo de $S$ tiene preimagen por $\Phi$.
>>	5. Para probar la inyectividad, sean $P_1,P_2$ ideales primos de $R$ que contienen a $\ker f$ y supongamos que $f(P_1)=f(P_2)$. Si $p_1\in P_1$, entonces $f(p_1)\in f(P_2)$, por lo que existe $p_2\in P_2$ con $f(p_1)=f(p_2)$. Así, $$f(p_1-p_2)=f(p_1)-f(p_2)=0_S,$$ de donde $p_1-p_2\in\ker f\subseteq P_2$. Como $p_2\in P_2$ y $P_2$ es cerrado por suma, $p_1=(p_1-p_2)+p_2\in P_2$. Esto prueba $P_1\subseteq P_2$. De forma analoga vemos $P_2\subseteq P_1$ y, por tanto, $P_1=P_2$. 
>>	6. Luego $\Phi$ es inyectiva y sobreyectiva, lo que establece la correspondencia 1-1 pedida.
>>- (d)
>>	1. Sea $\pi:R\to R/I$ la proyección cociente, dada por $\pi(r)=r+I$. Es un homomorfismo sobreyectivo, pues cada clase $r+I$ es imagen de $r$, y $\ker\pi=I$, ya que $\pi(r)=0_{R/I}$ si y sólo si $r\in I$.
>>	2. Sea $K$ un ideal de $R/I$ y tomemos $J=\pi^{-1}(K)$. Por [[EA - Pr6#^a14b6f|Ejercicio 14 (a)]], $J$ es un ideal de $R$ y $I=\ker\pi\subseteq J$.
>>	3. Si $j\in J$, por definición $\pi(j)\in K$, de modo que $\pi(J)\subseteq K$. Recíprocamente, si $k\in K$, por sobreyectividad de $\pi$ existe $r\in R$ con $\pi(r)=k$. Entonces $r\in\pi^{-1}(K)=J$, por lo que $k\in\pi(J)$. Así, $$K=\pi(J)=\{j+I:j\in J\}=J/I.$$
>>	4. Sea $K$ un ideal primo de $R/I$ y tomemos $J=\pi^{-1}(K)$. Por el Ejercicio 15 (b), $J$ es un ideal primo de $R$ y $I=\ker\pi\subseteq J$.
>>	5. Si $j\in J$, por definición $\pi(j)\in K$, de modo que $\pi(J)\subseteq K$. Recíprocamente, si $k\in K$, por sobreyectividad de $\pi$ existe $r\in R$ con $\pi(r)=k$. Entonces $r\in\pi^{-1}(K)=J$, por lo que $k\in\pi(J)$. Así, $$K=\pi(J)=\{j+I:j\in J\}=J/I.$$

>[!exercise] Ejercicio 16
>Sea $I$ un ideal en $\mathbb{Z}$, con $I\neq 0$. Demostrar que las siguientes afirmaciones son equivalentes.
>- **(a)** $I$ es primo.
>- **(b)** $I$ es maximal.
>- **(c)** $I=(p)$, con $p$ primo.
>
>>[!Proof]-
>>- **Descripción de $I$.**
>>	1. Como $I$ es un ideal de $\mathbb Z$, es un subgrupo de $(\mathbb Z,+)$. Por [[EA - Pr2#^df1cfa|Ejercicio 6 del práctico 2]], existe un generador $n$. Como $I\neq\{0\}$, este generador es no nulo; cambiándolo por su opuesto si es necesario, podemos tomar $n>0$. En $\mathbb Z$, los múltiplos aditivos enteros coinciden con los productos por enteros, de modo que $$I=\langle n\rangle=\{kn:k\in\mathbb Z\}=n\mathbb Z=(n).$$
>>- **(a) $\Rightarrow$ (c)**
>>	1. Supongamos que $I$ es primo. Por [[Teorico 11#^e11007|ideal primo]], $I$ es propio. Por tanto, $n\neq1$, pues $(1)=\mathbb Z$; como $n>0$, resulta $n\geq2$.
>>	2. Supongamos, por contradicción, que $n$ es compuesto. Existen enteros $a,b$ tales que $n=ab$ y $1<a,b<n$. Entonces $ab=n\in I$.
>>	3. Si $a\in I=(ab)$, existiría $k\in\mathbb Z$ con $a=kab=akb$, donde reordenamos usando la conmutatividad de $\mathbb Z$. Entonces $a(1-kb)=0$ y, como $a\neq0$ y $\mathbb Z$ no tiene divisores de cero, $1=kb$. Esto es imposible: si $k\leq0$, entonces $kb\leq0$; si $k\geq1$, entonces $kb\geq b>1$. Por tanto, $a\notin I$.
>>	4. Análogamente, si $b\in I$, existiría $k\in\mathbb Z$ con $b=kab=bka$, de donde $b(1-ka)=0$ y $1=ka$. Si $k\leq0$, entonces $ka\leq0$; si $k\geq1$, entonces $ka\geq a>1$. Por tanto, $b\notin I$.
>>	5. Tenemos $ab\in I$ con $a,b\notin I$, contradiciendo que $I$ es primo. Así, $n$ no es compuesto y, como $n\geq2$, es primo. Tomando $p=n$, obtenemos $I=(p)$.
>>- **(c) $\Rightarrow$ (b)**
>>	1. Supongamos $I=(p)$, con $p$ primo. Este ideal es propio: si $1=kp$ para algún entero $k$, tendríamos $kp\leq0$ cuando $k\leq0$, o $kp\geq p>1$ cuando $k\geq1$, imposible.
>>	2. Supongamos, por contradicción, que $I$ no es maximal. Existe un ideal $J$ tal que $(p)\subsetneq J\subsetneq\mathbb Z$. Elegimos $x\in J\setminus(p)$. Entonces no existe $q\in\mathbb Z$ tal que $x=pq$, es decir, $p\nmid x$. Como los únicos divisores positivos de $p$ son $1$ y $p$, resulta $\gcd(p,x)=1$.
>>	3. Por Bézout, existen $j,l\in\mathbb Z$ tales que $pj+xl=1$. Como $p,x\in J$, la absorción da $pj,xl\in J$ y el cierre aditivo da $1\in J$. Para todo $z\in\mathbb Z$, $z=z\cdot1\in J$, por lo que $J=\mathbb Z$, contradicción. Por tanto, $I$ es maximal.
>>- **(b) $\Rightarrow$ (a)**
>>	1. Supongamos que $I$ es maximal; en particular, es propio. Sean $a,b\in\mathbb Z$ arbitrarios tales que $ab\in I$. 
>>	2. Si $a\in I$, ya tenemos una de las alternativas requeridas. Supongamos entonces $a\notin I$ y demostremos que $b\in I$.
>>	3. Definimos $$J=I+(a)=\{i+ka:i\in I,\ k\in\mathbb Z\}.$$ Contiene a $I$, tomando $k=0$, y contiene a $a$, tomando $i=0$ y $k=1$. Como $a\notin I$, tenemos $I\subsetneq J$.
>>	4. Verificamos que $J$ es ideal. Se tiene $0=0+0a\in J$. Para $i,i'\in I$ y $k,k'\in\mathbb Z$, $$(i+ka)-(i'+k'a)=(i-i')+(k-k')a\in J,$$ porque $i-i'\in I$. Por tanto, $J$ es un subgrupo aditivo. Además, para todo $r\in\mathbb Z$, $$r(i+ka)=ri+(rk)a\in J,$$ porque $ri\in I$. Por conmutatividad de $\mathbb Z$, también $(i+ka)r\in J$. Así, $J$ es ideal.
>>	5. Como $I\subsetneq J$ e $I$ es maximal, $J=\mathbb Z$. En particular, existen $i\in I$ y $k\in\mathbb Z$ tales que $1=i+ka$. Multiplicando por $b$ y usando distributividad, asociatividad y conmutatividad de $\mathbb Z$, obtenemos $$b=b(i+ka)=bi+bka=bi+k(ab).$$
>>	6. Como $i\in I$, la absorción da $bi\in I$; como $ab\in I$, también $k(ab)\in I$. Por cierre aditivo, $b\in I$. 
>>	7. Así, $ab\in I$ implica $a\in I$ o $b\in I$, y $I$ es primo.

>[!exercise] Ejercicio 17
>Calcular las unidades de:
>- **(a)** $\mathbb{Z}_{10}$.
>- **(b)** $\mathbb{Z}_6\times\mathbb{Z}_{10}$.
>- **(c)** $\mathbb{Z}[\mathbb{Z}_4]$.
>
>>[!Proof]-
>>- (a)
>>	1. Si $\overline a\in\mathbb Z_{10}$ tiene inverso $\overline b$, entonces $\overline{ab}=\overline1$. Por igualdad de clases, existe $j\in\mathbb Z$ tal que $ab-1=10j$; tomando $k=-j$, resulta $ab+10k=1$.
>>	2. Si un entero positivo $d$ divide a $a$ y a $10$, escribimos $a=du$ y $10=dv$, con $u,v\in\mathbb Z$. Entonces $1=ab+10k=d(ub+vk)$, por lo que $d$ divide a $1$ y necesariamente $d=1$. Por tanto, quedan descartados los representantes pares $0,2,4,6,8$ y el representante $5$. Las únicas candidatas son $\overline1,\overline3,\overline7,\overline9$.
>>	3. Todas las candidatas tienen inverso: $$1\cdot1=1,\qquad3\cdot7=7\cdot3=21=1+2\cdot10,\qquad9\cdot9=81=1+8\cdot10.$$ Así, $\overline1^{-1}=\overline1$, $\overline3^{-1}=\overline7$, $\overline7^{-1}=\overline3$ y $\overline9^{-1}=\overline9$. En conclusión, $$U(\mathbb Z_{10})=\{\overline1,\overline3,\overline7,\overline9\}.$$
>>- (b)
>>	1. El producto es componente a componente y la identidad es $(\overline1,\overline1)$. Por tanto, un par $(a,b)$ es invertible exactamente cuando cada componente es invertible: las ecuaciones $(a,b)(c,d)=(1,1)=(c,d)(a,b)$ equivalen a $ac=ca=1$ y $bd=db=1$. En ese caso, $(a,b)^{-1}=(a^{-1},b^{-1})$.
>>	2. En $\mathbb Z_6$, un representante que tenga un divisor común positivo mayor que $1$ con $6$ no puede representar una unidad, por el mismo argumento del inciso (a), reemplazando $10$ por $6$. Esto descarta $0,2,3,4$. Los restantes sí son invertibles, pues $1\cdot1=1$ y $5\cdot5=25=1+4\cdot6$. Así, $U(\mathbb Z_6)=\{\overline1,\overline5\}$ y ambas unidades son sus propios inversos.
>>	3. Usando (a), obtenemos las ocho unidades $$U(\mathbb Z_6\times\mathbb Z_{10})=\{\overline1,\overline5\}\times\{\overline1,\overline3,\overline7,\overline9\}.$$ Los inversos se obtienen componente a componente: la primera componente se conserva, y en la segunda $\overline1$ y $\overline9$ se conservan, mientras que $\overline3$ y $\overline7$ se intercambian.

>>- (c)
>>	1. **Representación y ecuaciones del inverso.** Escribimos el grupo cíclico de orden $4$ multiplicativamente como $\mathbb Z_4=\{e,g,g^2,g^3\}$, con $g^4=e$. Todo elemento del anillo tiene una única expresión $\alpha=a_0e+a_1g+a_2g^2+a_3g^3$, con $a_i\in\mathbb Z$. Los coeficientes no se reducen módulo $4$; los exponentes sí, por la relación $g^4=e$. Supongamos que $\alpha$ es unidad y escribamos su inverso como $\beta=b_0e+b_1g+b_2g^2+b_3g^3$. Al expandir $\alpha\beta=e$ y comparar coeficientes, obtenemos $$\begin{aligned}C_0&:=a_0b_0+a_1b_3+a_2b_2+a_3b_1=1,\\C_1&:=a_0b_1+a_1b_0+a_2b_3+a_3b_2=0,\\C_2&:=a_0b_2+a_1b_1+a_2b_0+a_3b_3=0,\\C_3&:=a_0b_3+a_1b_2+a_2b_1+a_3b_0=0.\end{aligned}$$
>>	2. **Sumas de coeficientes.** Sumando las cuatro ecuaciones y, por separado, combinándolas como $C_0-C_1+C_2-C_3$, cada expresión se factoriza por distributividad: $$\begin{aligned}(a_0+a_1+a_2+a_3)(b_0+b_1+b_2+b_3)&=1,\\(a_0-a_1+a_2-a_3)(b_0-b_1+b_2-b_3)&=1.\end{aligned}$$ Un producto de dos enteros es $1$ solamente si ambos son $1$ o ambos son $-1$: sus valores absolutos son enteros positivos cuyo producto es $1$, y sus signos deben coincidir. Por tanto, existen $\varepsilon,\eta\in\{1,-1\}$ tales que $a_0+a_1+a_2+a_3=\varepsilon$ y $a_0-a_1+a_2-a_3=\eta$.
>>	3. **Restricciones sobre las sumas por pares.** Definimos $S=a_0+a_2$ y $T=a_1+a_3$. Las igualdades anteriores dan $S+T=\varepsilon$, $S-T=\eta$, de donde $2S=\varepsilon+\eta$ y $2T=\varepsilon-\eta$. Verificando las cuatro posibilidades de signos, obtenemos $$(S,T)\in\{(1,0),(-1,0),(0,1),(0,-1)\}.$$ Estas restricciones por sí solas no controlan los coeficientes individuales: por ejemplo, $a_0=N$ y $a_2=1-N$ tienen suma $1$ para cualquier $N\in\mathbb Z$.
>>	4. **Restricciones sobre las diferencias.** Para separar los coeficientes de cada pareja, definimos $D=a_0-a_2$, $E=a_1-a_3$, $F=b_0-b_2$ y $H=b_1-b_3$. Restando las ecuaciones de los coeficientes de exponentes pares y, por separado, las de exponentes impares, obtenemos $$\begin{aligned}C_0-C_2&=(a_0-a_2)(b_0-b_2)-(a_1-a_3)(b_1-b_3)=DF-EH=1,\\C_1-C_3&=(a_0-a_2)(b_1-b_3)+(a_1-a_3)(b_0-b_2)=DH+EF=0.\end{aligned}$$ Elevando al cuadrado y sumando, $$\begin{aligned}1&=(DF-EH)^2+(DH+EF)^2\\&=D^2F^2-2DFEH+E^2H^2+D^2H^2+2DHEF+E^2F^2\\&=(D^2+E^2)(F^2+H^2).\end{aligned}$$ Los términos cruzados se cancelan porque todos son productos de enteros, que conmutan.
>>	5. **Posibilidades para las diferencias.** Los factores $D^2+E^2$ y $F^2+H^2$ son enteros no negativos cuyo producto es $1$, así que ambos son $1$. En particular, $D^2+E^2=1$. Como un cuadrado entero no nulo es al menos $1$, exactamente uno de $D,E$ es $1$ o $-1$, y el otro es $0$. Por tanto, $$(D,E)\in\{(1,0),(-1,0),(0,1),(0,-1)\}.$$
>>	6. **Compatibilidad y determinación de todos los coeficientes.** Tenemos $S-D=2a_2$ y $T-E=2a_3$, por lo que $S,D$ tienen la misma paridad y $T,E$ también. Si $(S,T)=(\sigma,0)$ con $\sigma\in\{1,-1\}$, entonces $D$ es impar y $E$ es par; por el paso 5, $(D,E)=(\delta,0)$ con $\delta\in\{1,-1\}$. De $T=E=0$ resulta $a_1=a_3=0$. Además, $2a_0=S+D=\sigma+\delta$ y $2a_2=S-D=\sigma-\delta$: si $\delta=\sigma$, entonces $(a_0,a_2)=(\sigma,0)$; si $\delta=-\sigma$, entonces $(a_0,a_2)=(0,\sigma)$. Así, $\alpha$ es $\sigma e$ o $\sigma g^2$. Si $(S,T)=(0,\sigma)$, la paridad obliga a $(D,E)=(0,\delta)$. Entonces $a_0=a_2=0$, $2a_1=\sigma+\delta$ y $2a_3=\sigma-\delta$: si $\delta=\sigma$, resulta $\alpha=\sigma g$; si $\delta=-\sigma$, resulta $\alpha=\sigma g^3$. Esto contempla todas las posibilidades y prueba que toda unidad es uno de los elementos $\pm e,\pm g,\pm g^2,\pm g^3$.
>>	7. **Verificación de los inversos y conclusión.** Todos esos elementos son unidades. En efecto, $ee=e$, $gg^3=g^3g=g^4=e$ y $g^2g^2=g^4=e$. Por distributividad, $(-u)(-v)=uv$ para cualesquiera $u,v$ del anillo, así que los inversos de los elementos negativos son los negativos de los inversos correspondientes. En concreto, $$(\pm e)^{-1}=\pm e,\qquad(\pm g)^{-1}=\pm g^3,\qquad(\pm g^2)^{-1}=\pm g^2,\qquad(\pm g^3)^{-1}=\pm g,$$ con el mismo signo en cada igualdad. Por tanto, $$U(\mathbb Z[\mathbb Z_4])=\{e,-e,g,-g,g^2,-g^2,g^3,-g^3\}.$$

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
