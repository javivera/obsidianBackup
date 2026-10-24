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
>
>>[!Proof]-
>>- (a)
>>	1. El anillo $\mathbb Z$ es conmutativo, tiene identidad $1\neq0$ y no tiene divisores de cero; por tanto, es un dominio íntegro.
>>	2. Sea $I$ un ideal de $\mathbb Z$. Si $I=\{0\}$, entonces $I=(0)$, de modo que es principal.
>>	3. Supongamos $I\neq\{0\}$. Existe $a\in I$ no nulo y, como $-a\in I$, alguno de $a,-a$ es un entero positivo de $I$. Por el principio de buen orden existe $d=\min(I\cap\mathbb Z_{>0})$. Como $d\in I$ e $I$ es un ideal, $(d)\subseteq I$.
>>	4. Sea $a\in I$ arbitrario. Por la división euclídea existen $q,r\in\mathbb Z$ tales que $a=qd+r$ y $0\leq r<d$. Además, $r=a-qd\in I$. Si $r>0$, sería un entero positivo de $I$ menor que $d$, contradiciendo la elección de $d$. Por tanto, $r=0$ y $a=qd\in(d)$.
>>	5. Así, $I\subseteq(d)$ y, junto con la inclusión anterior, $I=(d)$. Todo ideal de $\mathbb Z$ es principal y, como $\mathbb Z$ es un dominio íntegro, es un DIP.
>>- (b)
>>	1. El anillo $S$ es conmutativo: dados $s,t\in S$, por la suryectividad de $f$ existen $x,y\in R$ tales que $f(x)=s$ y $f(y)=t$. Como $R$ es conmutativo, $st=f(x)f(y)=f(xy)=f(yx)=f(y)f(x)=ts$.
>>	2. Sea $J$ un ideal arbitrario de $S$. La preimagen $I=f^{-1}(J)$ es un ideal de $R$: contiene al cero porque $f(0)=0\in J$; si $x,y\in I$, entonces $f(x-y)=f(x)-f(y)\in J$, por lo que $x-y\in I$; y si $r\in R$ y $x\in I$, entonces $f(rx)=f(r)f(x)\in J$, por lo que $rx\in I$.
>>	3. Como $R$ es un AIP, existe $a\in R$ tal que $I=(a)$. Además, $a\in I=f^{-1}(J)$ implica $f(a)\in J$. Por ser $J$ un ideal, $(f(a))\subseteq J$.
>>	4. Sea $j\in J$. Por la suryectividad de $f$, existe $r\in R$ tal que $f(r)=j$. Entonces $r\in f^{-1}(J)=(a)$, de modo que $r=ka$ para algún $k\in R$. Por tanto, $j=f(r)=f(ka)=f(k)f(a)\in(f(a))$. Así, $J\subseteq(f(a))$.
>>	5. De ambas inclusiones se obtiene $J=(f(a))$. Como $J$ era un ideal arbitrario de $S$, todo ideal de $S$ es principal y, por tanto, $S$ es un AIP.
>>- (c)
>>	1. Sea $n\geq2$. El conjunto $n\mathbb Z=(n)=\{kn:k\in\mathbb Z\}$ es un ideal de $\mathbb Z$: contiene al cero, $kn-\ell n=(k-\ell)n\in n\mathbb Z$ y $r(kn)=(rk)n\in n\mathbb Z$ para cualesquiera $k,\ell,r\in\mathbb Z$; por la conmutatividad de $\mathbb Z$, también $(kn)r\in n\mathbb Z$, por lo que es bilátero. 
>>	2. Como $n\mathbb Z$ es un ideal bilátero, por [[Teorico 10#^c710a3|anillo cociente]], $\mathbb Z_n=\mathbb Z/n\mathbb Z$ es un anillo con las operaciones inducidas bien definidas y la proyección canónica $\pi:\mathbb Z\to\mathbb Z_n$, $\pi(a)=a+n\mathbb Z$, es un homomorfismo de anillos suryectivo.
>>	3. Por (a), $\mathbb Z$ es un DIP y, en particular, un AIP. Aplicando (b) a $\pi$, concluimos que $\mathbb Z_n$ es un AIP para todo $n\geq2$.

>[!exercise] Ejercicio 2
>Sea $R:=\{a+b\sqrt{10}:a,b\in\mathbb Z\}$. Probar las siguientes afirmaciones.
>- **(a)** $R$ es subanillo de $\mathbb R$.
>- **(b)** La función $N:R\to\mathbb Z$ dada por $N(a+b\sqrt{10}):=a^2-10b^2$ satisface $N(uv)=N(u)N(v)$, para todo $u,v\in R$.
>- **(c)** $N(u)=0$ si y sólo si $u=0$.
>- **(d)** $u$ es una unidad en $R$ si y sólo si $N(u)=\pm1$.
>- **(e)** $2$, $3$, $4+\sqrt{10}$ y $4-\sqrt{10}$ son elementos irreducibles de $R$.
>- **(f)** $2$, $3$, $4+\sqrt{10}$ y $4-\sqrt{10}$ no son elementos primos de $R$.
>
>>[!Proof]-
>>- (a)
>>	1. Como $0=0+0\sqrt{10}\in R$, el conjunto $R$ no es vacío.
>>	2. Sean $u=a+b\sqrt{10}$ y $v=c+d\sqrt{10}$ elementos cualesquiera de $R$, con $a,b,c,d\in\mathbb Z$. Entonces $u-v=(a-c)+(b-d)\sqrt{10}\in R$, pues $a-c,b-d\in\mathbb Z$.
>>	3. Por distributividad, $uv=(a+b\sqrt{10})(c+d\sqrt{10})=(ac+10bd)+(ad+bc)\sqrt{10}\in R$, pues $ac+10bd,ad+bc\in\mathbb Z$.
>>	4. Por el [[Teorico 9#^d09a31|criterio de subanillo]], $R$ es subanillo de $\mathbb R$.
>>- (b)
>>	1. Sean $u=a+b\sqrt{10}$ y $v=c+d\sqrt{10}$ elementos cualesquiera de $R$, con $a,b,c,d\in\mathbb Z$. Por el cálculo de (a), $uv=(ac+10bd)+(ad+bc)\sqrt{10}$.
>>	2. Por definición de $N$ y desarrollando los cuadrados, $$\begin{aligned}N(uv)&=(ac+10bd)^2-10(ad+bc)^2\\&=a^2c^2+20abcd+100b^2d^2-10a^2d^2-20abcd-10b^2c^2\\&=a^2c^2-10a^2d^2-10b^2c^2+100b^2d^2.\end{aligned}$$
>>	3. Por otro lado, $$N(u)N(v)=(a^2-10b^2)(c^2-10d^2)=a^2c^2-10a^2d^2-10b^2c^2+100b^2d^2.$$ Por tanto, $N(uv)=N(u)N(v)$ para todos $u,v\in R$.
>>- (c)
>>	1. Sea $u=a+b\sqrt{10}\in R$, con $a,b\in\mathbb Z$. Si $N(u)=0$, entonces $a^2-10b^2=0$, es decir, $a^2=10b^2$.
>>	2. Si $b\neq0$, tomando raíces se obtiene $|a|=\sqrt{10}\,|b|$. Por tanto, $\sqrt{10}$ sería el valor absoluto de un cociente de enteros con denominador no nulo y pertenecería a $\mathbb Q$, contradiciendo la irracionalidad de $\sqrt{10}$. Luego $b=0$.
>>	3. Sustituyendo $b=0$ en $a^2=10b^2$, obtenemos $a^2=0$, de donde $a=0$ y, por tanto, $u=0$.
>>	4. Recíprocamente, si $u=0$, entonces $N(u)=N(0+0\sqrt{10})=0^2-10\cdot0^2=0$. Así, $N(u)=0$ si y sólo si $u=0$.
>>- (d)
>>	- **($\Rightarrow$)**
>>		1. Supongamos que $u$ es una unidad de $R$. Existe $v\in R$ tal que $uv=vu=1$. Por (b), $1=N(1)=N(uv)=N(u)N(v)$.
>>		2. Como $N(u),N(v)\in\mathbb Z$ y su producto es $1$, ambos son $1$ o ambos son $-1$. Por tanto, $N(u)=\pm1$.
>>	- **($\Leftarrow$)**
>>		1. Supongamos que $u=a+b\sqrt{10}\in R$ satisface $N(u)=\pm1$. El elemento $v=a-b\sqrt{10}$ pertenece a $R$, pues $a,-b\in\mathbb Z$.
>>		2. Por distributividad y la conmutatividad de $R$, $$uv=vu=(a+b\sqrt{10})(a-b\sqrt{10})=a^2-10b^2=N(u).$$
>>		3. Si $N(u)=1$, entonces $uv=vu=1$, de modo que $v$ es un inverso de $u$ en $R$. Si $N(u)=-1$, entonces $-v\in R$ y $u(-v)=(-v)u=-N(u)=1$, de modo que $-v$ es un inverso de $u$ en $R$. En ambos casos, $u$ es unidad.
>>- (e)
>>	1. Calculamos $N(2)=2^2=4$, $N(3)=3^2=9$ y $N(4+\sqrt{10})=N(4-\sqrt{10})=4^2-10=6$. Por (c), los cuatro elementos son no nulos y, por (d), ninguno es una unidad.
>>	- **Irreducibilidad de $2$.**
>>		1. Sea $2=uv$ una factorización con $u,v\in R$. Por (b), $4=N(2)=N(u)N(v)$. Como las normas son enteras, las posibilidades para $(|N(u)|,|N(v)|)$ son $(1,4)$, $(2,2)$ y $(4,1)$.
>>		2. Probemos que ningún elemento de $R$ tiene norma $2$ ni $-2$. Si $x=a+b\sqrt{10}\in R$ tuviera una de esas normas, se cumpliría $a^2-10b^2=\pm2$. Para el signo positivo obtendríamos $a^2\equiv2\pmod{10}$, y para el negativo, $a^2\equiv-2\equiv8\pmod{10}$.
>>		3. Todo entero $a$ se escribe $a=10k+r$, con $k\in\mathbb Z$ y $r\in\{0,1,\ldots,9\}$. Entonces $a^2=100k^2+20kr+r^2\equiv r^2\pmod{10}$. Para esos diez valores de $r$, los restos de $r^2$ son, respectivamente, $0,1,4,9,6,5,6,9,4,1$. Como no aparecen $2$ ni $8$, las dos congruencias son imposibles. Por tanto, no existen elementos de norma $\pm2$.
>>		4. Queda descartada la posibilidad $(|N(u)|,|N(v)|)=(2,2)$. En las otras dos posibilidades, algún factor tiene norma $\pm1$ y es unidad por (d). Como $2$ es no nulo y no es unidad, concluimos que $2$ es irreducible.
>>	- **Irreducibilidad de $3$.**
>>		1. Sea $3=uv$ una factorización con $u,v\in R$. Por (b), $9=N(3)=N(u)N(v)$. Como las normas son enteras, las posibilidades para $(|N(u)|,|N(v)|)$ son $(1,9)$, $(3,3)$ y $(9,1)$.
>>		2. Si $x=a+b\sqrt{10}\in R$ tuviera norma $3$ o $-3$, entonces $a^2-10b^2=\pm3$. Reduciendo módulo $10$, obtendríamos $a^2\equiv3\pmod{10}$ o $a^2\equiv-3\equiv7\pmod{10}$. La lista exhaustiva de restos de cuadrados calculada en el caso de $2$ es $\{0,1,4,5,6,9\}$, que no contiene $3$ ni $7$. Por tanto, no existen elementos de norma $\pm3$.
>>		3. Queda descartada la posibilidad $(|N(u)|,|N(v)|)=(3,3)$. En las otras dos posibilidades, algún factor tiene norma $\pm1$ y es unidad por (d). Como $3$ es no nulo y no es unidad, concluimos que $3$ es irreducible.
>>	- **Irreducibilidad de $4+\sqrt{10}$ y $4-\sqrt{10}$.**
>>		1. Ambos elementos tienen norma $6$: $N(4+\sqrt{10})=4^2-10\cdot1^2=6$ y $N(4-\sqrt{10})=4^2-10(-1)^2=6$.
>>		2. Sea $w$ cualquiera de estos dos elementos y sea $w=uv$ una factorización con $u,v\in R$. Por (b), $6=N(w)=N(u)N(v)$. Como las normas son enteras, las posibilidades para $(|N(u)|,|N(v)|)$ son $(1,6)$, $(2,3)$, $(3,2)$ y $(6,1)$.
>>		3. En los casos anteriores probamos que no existen elementos de $R$ con norma $\pm2$ ni $\pm3$. Por tanto, las posibilidades $(2,3)$ y $(3,2)$ son imposibles.
>>		4. Solo quedan $(1,6)$ y $(6,1)$. En ambos casos, algún factor tiene norma $\pm1$ y es unidad por (d). Como $w$ es no nulo y no es unidad, es irreducible. Esto prueba la irreducibilidad tanto de $4+\sqrt{10}$ como de $4-\sqrt{10}$ y completa (e).
>>- (f)
>>	1. Usaremos la identidad $(4+\sqrt{10})(4-\sqrt{10})=16-10=6=2\cdot3$ y la multiplicatividad de $N$ probada en (b). Para todo $k\in R$, se tiene $N(k)\in\mathbb Z$.
>>	- **$2$ no es primo.**
>>		1. Por la identidad anterior, $2\mid(4+\sqrt{10})(4-\sqrt{10})$, pues el producto es $2\cdot3$ y $3\in R$.
>>		2. Sea $w$ cualquiera de los elementos $4+\sqrt{10}$ y $4-\sqrt{10}$. Si $2\mid w$, existiría $k\in R$ tal que $w=2k$. Aplicando (b), obtendríamos $6=N(w)=N(2)N(k)=4N(k)$, imposible porque $6$ no es múltiplo de $4$ en $\mathbb Z$.
>>		3. Por tanto, $2$ divide al producto de esos dos elementos, pero no divide a ninguno de ellos. Así, $2$ no es primo.
>>	- **$3$ no es primo.**
>>		1. También $3\mid(4+\sqrt{10})(4-\sqrt{10})=6=3.2$ osea $3$ divide a ambos $4+\sqrt{10}$ ,$4-\sqrt{10}$ por que $2\in R$ (estos productos se pueden resolver por que $R$ es sub anillo de $\mathbb{R}$ asi que tiene las mismas operaciones.)
>>		2. Sea $w$ cualquiera de los elementos $4+\sqrt{10}$ y $4-\sqrt{10}$. Si $3\mid w$, existiría $k\in R$ tal que $w=3k$. Aplicando (b), obtendríamos $6=N(w)=N(3)N(k)=9N(k)$, imposible porque $6$ no es múltiplo de $9$ en $\mathbb Z$.
>>		3. Por tanto, $3$ divide al producto de esos dos elementos, pero no divide a ninguno de ellos. Así, $3$ no es primo.
>>	- **$4+\sqrt{10}$ y $4-\sqrt{10}$ no son primos.**
>>		1. Sea $w$ cualquiera de estos dos elementos. La identidad inicial muestra que $w\mid2\cdot3$: si $w=4+\sqrt{10}$, el otro factor es $4-\sqrt{10}\in R$; si $w=4-\sqrt{10}$, el otro factor es $4+\sqrt{10}\in R$.
>>		2. Si $w\mid2$, existiría $k\in R$ tal que $2=wk$. Por (b), $4=N(2)=N(w)N(k)=6N(k)$, imposible porque $4$ no es múltiplo de $6$ en $\mathbb Z$. Por tanto, $w\nmid2$.
>>		3. Si $w\mid3$, existiría $k\in R$ tal que $3=wk$. Por (b), $9=N(3)=N(w)N(k)=6N(k)$, imposible porque $9$ no es múltiplo de $6$ en $\mathbb Z$. Por tanto, $w\nmid3$.
>>		4. Así, $w$ divide a $2\cdot3$, pero no divide a ninguno de sus factores. Esto prueba que tanto $4+\sqrt{10}$ como $4-\sqrt{10}$ no son primos y completa (f).

>[!exercise] Ejercicio 3
>Sea $R$ un DIP e $I\subset R$ ideal no nulo. Entonces $I$ es primo si y sólo si $I$ es maximal.
>
>>[!Proof]-
>>- **Maximal $\Rightarrow$ primo.**
>>	1. Supongamos que $I$ es maximal; en particular, es propio. Sean $a,b\in R$ tales que $ab\in I$. Si $a\in I$, ya tenemos una de las alternativas requeridas. Supongamos entonces $a\notin I$ y probemos que $b\in I$.
>>	2. Consideremos $J=I+(a)=\{i+ka:i\in I,\ k\in R\}$. Este conjunto contiene a $I$, tomando $k=0$, y contiene a $a$, tomando $i=0$ y $k=1$. Como $a\notin I$, tenemos $I\subsetneq J$.
>>	3. Verifiquemos que $J$ es un ideal. Se tiene $0=0+0a\in J$. Si $i,i'\in I$ y $k,k'\in R$, entonces $(i+ka)-(i'+k'a)=(i-i')+(k-k')a\in J$, pues $i-i'\in I$. Además, para $t\in R$, se tiene $t(i+ka)=ti+(tk)a\in J$, pues $ti\in I$; por conmutatividad de $R$, también $(i+ka)t\in J$.
>>	4. Como $I\subsetneq J$ e $I$ es maximal, $J=R$. En particular, existen $i\in I$ y $k\in R$ tales que $1=i+ka$. Multiplicando por $b$ y usando la conmutatividad de $R$, obtenemos $b=b(i+ka)=bi+k(ab)$. Como $i\in I$ y $ab\in I$, la absorción da $bi,k(ab)\in I$, y por cierre aditivo resulta $b\in I$.
>>	5. Así, $ab\in I$ implica $a\in I$ o $b\in I$. Como $I$ es propio, concluimos que es primo.
>>- **Primo $\Rightarrow$ maximal.**
>>	1. Supongamos que $I$ es primo; en particular, es propio. Si no fuera maximal, existiría un ideal $P$ tal que $I\subsetneq P\subsetneq R$.
>>	2. Como $R$ es un DIP, existen $u,v\in R$ tales que $I=(u)$ y $P=(v)$. Además, $u\neq0$, pues de lo contrario $I=(0)$, contradiciendo la hipótesis de que $I$ es no nulo.
>>	3. Como $u\in I\subseteq P=(v)$, existe $r\in R$ tal que $u=rv$. Por tanto, $rv\in I$ y, como $I$ es primo, $r\in I$ o $v\in I$.
>>	4. Si $v\in I$, todo elemento $tv\in(v)$ pertenece a $I$ por absorción, por lo que $P=(v)\subseteq I$. Junto con $I\subseteq P$, esto daría $I=P$, contradiciendo la inclusión estricta. Luego $v\notin I$ y, por el paso anterior, $r\in I=(u)$.
>>	5. Existe entonces $s\in R$ tal que $r=su$. Sustituyendo en $u=rv$ y usando la conmutatividad, obtenemos $u=(su)v=u(sv)$, de donde $u(1-sv)=0$. Como $u\neq0$ y $R$ no tiene divisores de cero, resulta $1-sv=0$, es decir, $1=sv$.
>>	6. Como $v\in P$ y $P$ es un ideal, $1=sv\in P$. Para todo $x\in R$, la absorción da $x=x\cdot1\in P$; así, $R\subseteq P$ y, por tanto, $P=R$, contradiciendo $P\subsetneq R$.
>>	7. La contradicción prueba que $I$ es maximal. Quedan demostradas ambas implicaciones.

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
