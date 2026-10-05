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
