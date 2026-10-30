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
>
>>[!Proof]-
>>1. Si $d$ es unidad, entonces $1=d^{-1}d\in(d)$, por lo que $(d)=R$. El único ideal que contiene a $R$ es $R=(1)$, de modo que en este caso hay un solo ideal principal que contiene a $(d)$.
>>2. Supongamos que $d$ no es unidad. Por [[Teorico 11#^e11014|factorización única]], fijamos una factorización $$d=d_1\cdots d_n,$$ donde los $d_i$ son irreducibles y $n\geq1$. Los factores se cuentan con multiplicidad, por lo que pueden aparecer factores repetidos o asociados.
>>3. Sea $(a)$ un ideal principal que contiene a $(d)$. Como $d\in(d)\subseteq(a)$, existe $r\in R$ tal que $$d=ra$$
>>4. Puesto que $d\neq0$, tanto $a$ como $r$ son no nulos. Si $a$ es unidad, entonces $(a)=R$. Si $r$ es unidad, entonces $a=r^{-1}d$, por lo que $(a)\subseteq(d)$; junto con la inclusión inicial, obtenemos $(a)=(d)$. Estos dos casos dan únicamente los ideales $R$ y $(d)$. En adelante, suponemos que ni $a$ ni $r$ son unidades.
>>5. Por [[Teorico 11#^e11014|factorización única]], escribimos $a=a_1\cdots a_\ell$ y $r=r_1\cdots r_m$, donde los $a_i,r_j$ son irreducibles y $\ell,m\geq1$. Sustituyendo en $d=ra$, obtenemos $$d_1\cdots d_n=r_1\cdots r_m a_1\cdots a_\ell.$$ Por unicidad, $n=m+\ell$ y, después de reordenar los factores de $d$, existen unidades $c_1,\ldots,c_\ell$ tales que $d_i=c_i a_i$ para $1\leq i\leq\ell$. En particular, $1\leq\ell\leq n$.
>>6. Sea $C=c_1\cdots c_\ell$, que es unidad porque su inversa es $c_\ell^{-1}\cdots c_1^{-1}$. Multiplicando las igualdades anteriores, $$d_1\cdots d_\ell=C\,a_1\cdots a_\ell=Ca.$$así, para todo $x\in R$, se tiene $x[d_1\cdots d_\ell]=[xC]a\in(a)$. Osea $(d_{1}\cdots d_{\ell})\subseteq (a)$ 
>>7. Recíprocamente, $$a=C^{-1}d_1\cdots d_\ell$$(aca es donde se usa que $C$ es unidad) entonces $xa=[xC^{-1}][d_1\cdots d_\ell]\in(d_1\cdots d_\ell)$. Osea $(a)\subseteq (d_{1}\cdots d_{\ell})$ 
>>8. Por ambas inclusiones, $(a)=(d_1\cdots d_\ell)$.
>>9. El reordenamiento puede depender de $(a)$, pero la lista original de $n$ factores tiene únicamente finitos reordenamientos y hay únicamente $n+1$ longitudes posibles, $\ell\in\{0,\ldots,n\}$. Cada elección de reordenamiento y longitud determina un producto y, por tanto, un ideal principal, interpretando el producto vacío como $1$. 
>>10. El ideal $R$ corresponde a $\ell=0$, el ideal $(d)$ a $\ell=n$, y todos los demás ideales considerados aparecen entre esos productos por el paso anterior. 
>>11. Aunque elecciones diferentes pueden dar el mismo ideal, la cantidad de ideales distintos sigue siendo finita. Esto concluye la prueba.

>[!exercise] Ejercicio 5
>Si $R$ es un DFU, $a,b\in R$ son coprimos y $a\mid bc$, entonces $a\mid c$.
>
>>[!Proof]-
>>1. Por [[Teorico 11#^e11009|divisibilidad]], existe $d\in R$ tal que $ad=bc$. Queremos escribir $c$ como $a$ multiplicado por un elemento de $R$.
>>2. **Si $a$ o $b$ es unidad.** Si $a$ es unidad, $c=a(a^{-1}c)$, luego $a\mid c$. Si $b$ es unidad, por conmutatividad, $c=b^{-1}ad=a(b^{-1}d)$, luego también $a\mid c$.
>>3. **Casos nulos.** Si $c=0$, entonces $c=a\cdot0$, de modo que $a\mid c$. Si $a=0$, no puede ser también $b=0$, pues $0$ sería un divisor común no invertible de ambos, contradiciendo la coprimalidad. Así, $b\neq0$ y $bc=ad=0$; como $R$ es dominio, $c=0$, caso ya resuelto. Si $b=0$, las igualdades $a=a\cdot1$ y $0=a\cdot0$ muestran que $a$ es un **divisor común de $a$ y $b=0$**: la primera establece $a\mid a$ y la segunda $a\mid0$. Por coprimalidad, $a$ es unidad y se aplica el paso 2.
>>4. **Si $c$ es unidad.** De $ad=bc$ obtenemos $b=a(dc^{-1})$. Por tanto, $a\mid b$ y, como además $a\mid a$, el elemento $a$ es un divisor común de $a$ y $b$. La coprimalidad obliga a que $a$ sea unidad, y nuevamente se aplica el paso 2.
>>5. En adelante, $a,b,c$ son no nulos y no invertibles. Además, $d\neq0$: si $d=0$, tendríamos $bc=ad=0$, imposible porque $b,c\neq0$ y $R$ es dominio. Por [[Teorico 11#^e11014|factorización única]], escribimos $$a=a_1\cdots a_n,\qquad b=b_1\cdots b_j,\qquad c=c_1\cdots c_t,$$ con todos los factores irreducibles y $n,j,t\geq1$.
>>6. **Comparación de las factorizaciones de $ad$ y $bc$.** Si $d$ no es unidad, escribimos $d=v_1\cdots v_m$ en irreducibles y obtenemos $$a_1\cdots a_n v_1\cdots v_m=b_1\cdots b_j c_1\cdots c_t.$$ Si $d$ es unidad, obtenemos $$(da_1)a_2\cdots a_n=b_1\cdots b_j c_1\cdots c_t.$$ En este último caso, $da_1$ es irreducible por [[Teorico 11#^e11013|irreducibilidad y asociados]], y es asociado a $a_1$. Así, en ambos casos cada factor de la factorización de $a$ aparece, salvo asociados, entre los factores del miembro izquierdo.
>>7. Ningún $a_i$ puede ser asociado a un $b_\ell$. En efecto, si $a_i=u b_\ell$ con $u$ unidad, entonces $$a=a_i\prod_{r\neq i}a_r,\qquad b=b_\ell\prod_{s\neq\ell}b_s=a_i\left(u^{-1}\prod_{s\neq\ell}b_s\right).$$ Por tanto, $a_i$ sería un divisor común de $a$ y $b$ y no sería invertible por ser irreducible, contradiciendo la coprimalidad.
>>8. Aplicando [[Teorico 11#^e11014|factorización única]] a las igualdades del paso 6, los factores correspondientes a $a_1,\ldots,a_n$ deben emparejarse con factores de $c$, pues el paso 7 excluye todos los factores de $b$. El emparejamiento respeta las multiplicidades, de modo que $n\leq t$ y, tras reordenar los factores de $c$, existen unidades $k_1,\ldots,k_n$ tales que $$a_i=k_i c_i\qquad(1\leq i\leq n).$$ Si $d$ es unidad, el primer emparejamiento tiene la forma $da_1=u_1c_1$, de donde $a_1=(d^{-1}u_1)c_1$, así que también en ese caso $k_1$ es unidad.
>>9. Sea $k=k_1\cdots k_n$, cuya inversa es $k_n^{-1}\cdots k_1^{-1}$. Multiplicando las igualdades anteriores, $$a=k c_1\cdots c_n.$$ Por tanto, $$c=c_1\cdots c_n c_{n+1}\cdots c_t=a\left(k^{-1}c_{n+1}\cdots c_t\right).$$ Si $n=t$, el producto de los factores restantes se interpreta como $1$. En todos los casos, el multiplicador pertenece a $R$, luego $a\mid c$.

>[!Exercise] Ejercicio 6
>Sea $(R,\varphi)$ anillo euclidiano (AE). Probar que $a$ es unidad en $R$ si y sólo si $\varphi(a)=\varphi(1)$.
>
>>[!Proof]-
>>1. **($\Rightarrow$)** Si $a$ es unidad, entonces $a\neq0$ y existe $a^{-1}\in R$ con $aa^{-1}=a^{-1}a=1$. Por las propiedades de $\varphi$, $$\varphi(1)\leq\varphi(1a)=\varphi(a)\leq\varphi(aa^{-1})=\varphi(1).$$ Por tanto, $\varphi(a)=\varphi(1)$.
>>2. **($\Leftarrow$)** Supongamos que $\varphi(a)=\varphi(1)$, donde $a\neq0$ porque $\varphi$ está definida en $R\setminus\{0\}$. Dividiendo $1$ por $a$, existen $q,r\in R$ tales que $$1=qa+r,\qquad r=0\ \text{o}\ \varphi(r)<\varphi(a).$$
>>3. Si $r\neq0$, por las propiedades de $\varphi$ y la hipótesis obtenemos $$\varphi(r)<\varphi(a)=\varphi(1)\leq\varphi(1r)=\varphi(r),$$ lo cual es absurdo. Por tanto, $r=0$.
>>4. Así, $1=qa$. Como $R$ es conmutativo, también $aq=qa=1$. Luego $q$ es inversa de $a$, de modo que $a$ es unidad. Esto prueba la equivalencia.

>[!Exercise] Ejercicio 7
>Consideremos el anillo de enteros gaussianos $\mathbb Z[i]$.
>- **(a)** Si $a,n\in\mathbb Z$, con $n>0$, entonces existen $q,r\in\mathbb Z$ tales que $a=qn+r$, donde $|r|\leq n/2$.
>- **(b)** Probar que $\mathbb Z[i]$ es dominio euclidiano (DE) con $\varphi(a+bi)=a^2+b^2$.
>- **(c)** Determinar las unidades de $\mathbb Z[i]$.
>- **(d)** Dividir $4+5i$ por $2+3i$ de dos maneras distintas.
>- **(e)** ¿De cuántas maneras distintas se puede hacer la división del ítem anterior?
>- **(f)** Dividir $a+bi$ por la unidad $i$. ¿Se puede hacer de dos maneras distintas?
>- **(g)** **∗** Diseñar un algoritmo para dividir dos enteros de Gauss cualesquiera.
>- **(h)** Calcular el máximo común divisor de $11+7i$ y $18-i$.
>
>>[!Proof]-
>>- (a)
>>	1. Sean $a,n\in\mathbb Z$, con $n>0$. Por el algoritmo de división en $\mathbb Z$, existen $q_0,r_0\in\mathbb Z$ tales que $$a=q_0n+r_0,\qquad 0\leq r_0<n.$$
>>	2. Si $2r_0\leq n$, tomamos $q=q_0$ y $r=r_0$. Entonces $a=qn+r$ y, como $r_0\geq0$, se cumple $2|r|=2r_0\leq n$.
>>	3. Si $2r_0>n$, tomamos $q=q_0+1$ y $r=r_0-n$, ambos enteros. Se tiene $$qn+r=(q_0+1)n+(r_0-n)=q_0n+r_0=a.$$ Además, $r_0<n$ implica $r<0$, de modo que $$2|r|=2(n-r_0)=2n-2r_0<n.$$
>>	4. En ambos casos obtenemos $a=qn+r$ con $2|r|\leq n$, que es la cota pedida. El resto puede ser negativo, pues el enunciado no exige $r\geq0$.
>>- (b)
>>	1. **$\mathbb Z[i]$ es un dominio íntegro.** Contiene a $0$ y a $1\neq0$. Si $z=u+vi$ y $w=x+yi$ pertenecen a $\mathbb Z[i]$, entonces $$z-w=(u-x)+(v-y)i\in\mathbb Z[i],\qquad zw=(ux-vy)+(uy+vx)i\in\mathbb Z[i].$$ Por tanto, es un subanillo de $\mathbb C$ con identidad. Hereda de $\mathbb C$ la conmutatividad y la ausencia de divisores de cero: si $zw=0$, entonces $z=0$ o $w=0$.
>>	2. **La función propuesta y su multiplicatividad.** Definimos $\varphi(u+vi)=u^2+v^2$ para $u+vi\neq0$. Su valor es un entero positivo, pues al menos una de las componentes es un entero no nulo. Para simplificar las cuentas, extendemos la misma fórmula a $0$, poniendo $\varphi(0)=0$; las condiciones de función euclidiana se verificarán en sus dominios correspondientes. Para cualesquiera $z=u+vi$ y $w=x+yi$, $$\begin{aligned}\varphi(zw)&=(ux-vy)^2+(uy+vx)^2\\&=u^2x^2-2uvxy+v^2y^2+u^2y^2+2uvxy+v^2x^2\\&=(u^2+v^2)(x^2+y^2)=\varphi(z)\varphi(w).\end{aligned}$$
>>	3. **Primera condición euclidiana.** Si $zw\neq0$, entonces $z,w\neq0$ y $\varphi(w)\geq1$. Por la multiplicatividad, $$\varphi(zw)=\varphi(z)\varphi(w)\geq\varphi(z).$$ La desigualdad requerida no es necesariamente estricta.
>>	4. **Construcción del cociente y del resto mediante (a).** Sean $\alpha=u+vi$ y $\beta=x+yi$ enteros gaussianos arbitrarios, con $\beta\neq0$. Escribimos $\overline\beta=x-yi\in\mathbb Z[i]$ y ponemos $$n=x^2+y^2>0,\qquad A=ux+vy,\qquad B=vx-uy.$$ Estos tres números son enteros ordinarios. Además, $$\beta\overline\beta=(x+yi)(x-yi)=n,\qquad\alpha\overline\beta=(u+vi)(x-yi)=A+Bi.$$
>>	5. Aplicamos (a) a los pares de enteros $A,n$ y $B,n$. Existen $h,k,s,t\in\mathbb Z$ tales que $$A=hn+s,\qquad B=kn+t,\qquad 2|s|\leq n,\qquad 2|t|\leq n.$$ Definimos $$q=h+ki\in\mathbb Z[i],\qquad r=\alpha-q\beta\in\mathbb Z[i].$$ Por construcción, $\alpha=q\beta+r$. La aplicación de (a) se hizo a enteros ordinarios, no a enteros gaussianos.
>>	6. **Control del resto.** Multiplicando por $\overline\beta$ y usando las identidades del paso 4, obtenemos $$\begin{aligned}r\overline\beta&=(\alpha-q\beta)\overline\beta=\alpha\overline\beta-q(\beta\overline\beta)\\&=A+Bi-n(h+ki)=(A-nh)+(B-nk)i=s+ti.\end{aligned}$$ Como $\varphi(\overline\beta)=x^2+(-y)^2=n$, la multiplicatividad da $$n\varphi(r)=\varphi(r\overline\beta)=\varphi(s+ti)=s^2+t^2.$$
>>	7. De $2|s|\leq n$ y $2|t|\leq n$, al elevar al cuadrado obtenemos $4s^2\leq n^2$ y $4t^2\leq n^2$. Sumando y usando $n>0$, $$4n\varphi(r)=4(s^2+t^2)\leq2n^2<4n^2.$$ Como $4n>0$, resulta $\varphi(r)<n=\varphi(\beta)$. Si $r=0$, se cumple la primera alternativa exigida para el resto; si $r\neq0$, esta desigualdad utiliza la función original definida en $\mathbb Z[i]\setminus\{0\}$.
>>	8. Para todo $\alpha,\beta\in\mathbb Z[i]$ con $\beta\neq0$, hemos construido $q,r\in\mathbb Z[i]$ tales que $\alpha=q\beta+r$ y $r=0$ o $\varphi(r)<\varphi(\beta)$. Junto con los pasos 1 a 3, esto prueba que $\mathbb Z[i]$ es un dominio euclidiano con la función propuesta.
>>- (c)
>>	1. **Condición necesaria.** Sea $z\in\mathbb Z[i]$ una unidad. Entonces $z,z^{-1}\neq0$, pues $zz^{-1}=1\neq0$. Por la multiplicatividad demostrada en (b), $$\varphi(z)\varphi(z^{-1})=\varphi(zz^{-1})=\varphi(1)=1.$$ Ambos factores son enteros positivos: para todo $u+vi\neq0$, alguno de los enteros $u,v$ es no nulo, su cuadrado es al menos $1$ y, por tanto, $u^2+v^2\geq1$. Si alguno de los dos factores fuera mayor que $1$, su producto sería mayor que $1$. Así, $\varphi(z)=\varphi(z^{-1})=1$.
>>	2. Escribiendo $z=a+bi$, obtenemos $a^2+b^2=1$. Si ambos enteros fueran no nulos, la suma de sus cuadrados sería al menos $2$. Luego alguno es cero: si $b=0$, entonces $a^2=1$ y $a=\pm1$; si $a=0$, entonces $b^2=1$ y $b=\pm1$. Por tanto, toda unidad pertenece a $\{1,-1,i,-i\}$.
>>	3. **Verificación de los candidatos.** Se cumple $$1\cdot1=1,\qquad(-1)(-1)=1,\qquad i(-i)=(-i)i=-i^2=1.$$ Todos los inversos exhibidos pertenecen a $\mathbb Z[i]$. Concluimos que $$\mathbb Z[i]^\times=\{1,-1,i,-i\}.$$
>>- (d)
>>	1. Buscamos dos pares distintos $q,r\in\mathbb Z[i]$ que satisfagan $4+5i=q(2+3i)+r$, con $r=0$ o $\varphi(r)<\varphi(2+3i)=2^2+3^2=13$. No se exige que el resto tenga la menor norma posible, sino solamente que su norma sea menor que $13$.
>>	2. Para orientar la elección del cociente, calculamos en $\mathbb C$: $$\frac{4+5i}{2+3i}=\frac{(4+5i)(2-3i)}{(2+3i)(2-3i)}=\frac{8-12i+10i+15}{4+9}=\frac{23}{13}-\frac{2}{13}i.$$ La parte real está entre $1$ y $2$, y la imaginaria está cerca de $0$; por eso probamos los cocientes gaussianos $2$ y $1$. Este cálculo sólo sugiere candidatos: verificamos cada uno a continuación.
>>	3. **Primera división.** Tomamos $q_1=2$. El resto es $$r_1=(4+5i)-2(2+3i)=(4+5i)-(4+6i)=-i.$$ Como $\varphi(-i)=0^2+(-1)^2=1<13$, obtenemos una división válida: $$4+5i=2(2+3i)-i.$$
>>	4. **Segunda división.** Tomamos $q_2=1$. El resto es $$r_2=(4+5i)-(2+3i)=2+2i.$$ Como $\varphi(2+2i)=2^2+2^2=8<13$, obtenemos otra división válida: $$4+5i=1(2+3i)+(2+2i).$$ Los pares $(2,-i)$ y $(1,2+2i)$ son distintos, de modo que estas son dos maneras distintas de efectuar la división pedida.
>>- (e)
>>	1. **Acotación de todos los cocientes posibles.** Escribimos $q=m+ni$, con $m,n\in\mathbb Z$. El resto queda determinado por el cociente: $$\begin{aligned}r&=(4+5i)-(m+ni)(2+3i)\\&=(4-2m+3n)+(5-3m-2n)i.\end{aligned}$$ Usaremos la extensión $\varphi(0)=0$ introducida en (b), de modo que la condición de división válida sea simplemente $\varphi(r)<13$, incluyendo el posible resto cero.
>>	2. Multiplicamos por $2-3i$ para obtener una condición equivalente más sencilla: $$\begin{aligned}r(2-3i)&=(4+5i)(2-3i)-q(2+3i)(2-3i)\\&=23-2i-13(m+ni)=(23-13m)+(-2-13n)i.\end{aligned}$$ Por multiplicatividad, $$13\varphi(r)=(13m-23)^2+(13n+2)^2.$$ Por tanto, la división es válida si y sólo si $$(13m-23)^2+(13n+2)^2<169.$$
>>	3. Como ambos cuadrados son no negativos, cada uno debe ser menor que $169=13^2$. En consecuencia, $$-13<13m-23<13,\qquad -13<13n+2<13,$$ es decir, $$10<13m<36,\qquad -15<13n<11.$$ Puesto que $m,n$ son enteros, necesariamente $m\in\{1,2\}$ y $n\in\{-1,0\}$. Así, sólo quedan cuatro cocientes por verificar.
>>	4. **Verificación exhaustiva.** Para cada candidato calculamos el producto, el resto y su norma: $$\begin{aligned}q=1:&\quad q(2+3i)=2+3i,\quad r=2+2i,\quad\varphi(r)=4+4=8;\\q=2:&\quad q(2+3i)=4+6i,\quad r=-i,\quad\varphi(r)=1;\\q=1-i:&\quad q(2+3i)=5+i,\quad r=-1+4i,\quad\varphi(r)=1+16=17;\\q=2-i:&\quad q(2+3i)=7+4i,\quad r=-3+i,\quad\varphi(r)=9+1=10.\end{aligned}$$ Los cocientes $1$, $2$ y $2-i$ dan normas menores que $13$; el cociente $1-i$ no cumple la condición.
>>	5. Hay, por tanto, exactamente **tres** maneras distintas de efectuar la división: $$\begin{aligned}4+5i&=1(2+3i)+(2+2i),\\4+5i&=2(2+3i)-i,\\4+5i&=(2-i)(2+3i)+(-3+i).\end{aligned}$$ Son todas las posibilidades porque el paso 3 agotó los cocientes posibles y, dado un cociente, el resto es único.
>>- (f)
>>	1. **División por $i$.** Como $i^{-1}=-i$, tomamos $$q=(a+bi)(-i)=b-ai,\qquad r=0.$$ Ambos son gaussianos y verificamos directamente que $$qi+r=(b-ai)i=bi-ai^2=a+bi.$$ Esta es una división válida con resto cero.
>>	2. **El resto debe ser cero.** En cualquier otra división $a+bi=q'i+r'$, la condición sobre el resto exige $r'=0$ o $\varphi(r')<\varphi(i)=1$. Si $r'\neq0$, su norma es un entero positivo, por lo que $\varphi(r')\geq1$, contradicción. Luego necesariamente $r'=0$.
>>	3. De $a+bi=q'i$, multiplicando por $-i$ obtenemos $$q'=(a+bi)(-i)=b-ai.$$ Por tanto, el cociente y el resto son únicos: $q=b-ai$ y $r=0$. **No se puede hacer de dos maneras distintas.**
>>- (g)
>>	1. **Entrada y preparación.** Recibimos $\alpha=a+bi$ y $\beta=c+di$, con $a,b,c,d\in\mathbb Z$ y $\beta\neq0$. Si $\beta=0$, la división euclidiana no está definida y el algoritmo debe rechazar la entrada. Calculamos los enteros $$N=c^2+d^2>0,\qquad A=ac+bd,\qquad B=bc-ad.$$
>>	2. **Dos divisiones ordinarias.** Mediante el algoritmo usual en $\mathbb Z$, calculamos $$A=h_0N+s_0,\qquad B=k_0N+t_0,\qquad 0\leq s_0<N,\quad 0\leq t_0<N.$$ Para la primera componente, si $2s_0\leq N$, ponemos $(h,s)=(h_0,s_0)$; si $2s_0>N$, ponemos $(h,s)=(h_0+1,s_0-N)$. Para la segunda, si $2t_0\leq N$, ponemos $(k,t)=(k_0,t_0)$; si $2t_0>N$, ponemos $(k,t)=(k_0+1,t_0-N)$. Por (a), en todos los casos se cumple $$A=hN+s,\qquad B=kN+t,\qquad 2|s|\leq N,\quad 2|t|\leq N.$$
>>	3. **Salida.** Devolvemos los gaussianos $$q=h+ki,\qquad r=(a-hc+kd)+(b-hd-kc)i.$$ En efecto, $$q\beta=(h+ki)(c+di)=(hc-kd)+(hd+kc)i,$$ por lo que la fórmula de salida da exactamente $r=\alpha-q\beta$ y, en consecuencia, $\alpha=q\beta+r$.
>>	4. **Corrección de la cota.** Como $\beta\overline\beta=N$ y $\alpha\overline\beta=A+Bi$, tenemos $$r\overline\beta=\alpha\overline\beta-qN=(A-hN)+(B-kN)i=s+ti.$$ La multiplicatividad de (b), con la extensión $\varphi(0)=0$, implica $$N\varphi(r)=s^2+t^2.$$ Las cotas del paso 2 dan $$4N\varphi(r)=4s^2+4t^2\leq2N^2<4N^2.$$ Como $4N>0$, se sigue $\varphi(r)<N=\varphi(\beta)$. Así, si el resto no es cero, tiene norma estrictamente menor que la del divisor.
>>	5. **Terminación.** Sólo se realizan dos divisiones ordinarias de enteros, dos decisiones sobre sus restos y una cantidad finita de sumas y productos. Por tanto, el algoritmo termina para toda entrada con divisor no nulo y devuelve una división euclidiana válida. En los casos de igualdad $2s_0=N$ o $2t_0=N$, conservar el cociente ordinario fija una elección y evita ambigüedades en la salida.
>>- (h)
>>	1. **Algoritmo euclidiano.** Comenzamos dividiendo $18-i$ por $11+7i$ y continuamos con los restos no nulos. Las divisiones son $$\begin{aligned}18-i&=(1-i)(11+7i)+3i,\\11+7i&=(2-4i)(3i)+(-1+i),\\3i&=(2-2i)(-1+i)-i,\\-1+i&=(-1-i)(-i)+0.\end{aligned}$$ Verificamos los productos: $$(1-i)(11+7i)=18-4i,\qquad(2-4i)(3i)=12+6i,\qquad(2-2i)(-1+i)=4i,\qquad(-1-i)(-i)=-1+i.$$ Al sumar los restos indicados se recupera el dividendo en cada igualdad.
>>	2. **Verificación de las normas.** Todos los restos cumplen la condición euclidiana: $$\varphi(3i)=9<170=\varphi(11+7i),\qquad\varphi(-1+i)=2<9=\varphi(3i),\qquad\varphi(-i)=1<2=\varphi(-1+i).$$ La última división tiene resto cero. El último resto no nulo es $-i$, que es unidad por (c).
>>	3. **Justificación del máximo común divisor.** Sea $\delta$ un divisor común de $11+7i$ y $18-i$. La primera igualdad del paso 1 muestra que $\delta\mid3i$; la segunda, que $\delta\mid(-1+i)$; y la tercera, que $\delta\mid(-i)$. En cada paso se usa que, si $x=\delta u$ e $y=\delta v$, entonces $x-qy=\delta(u-qv)$. Por tanto, existe $t\in\mathbb Z[i]$ con $-i=\delta t$, y multiplicando por $i$ obtenemos $$1=i(-i)=i\delta t=\delta(it).$$ Así, todo divisor común divide a $1$. Como $1$ divide tanto a $11+7i$ como a $18-i$, concluimos que $$\operatorname{mcd}(11+7i,18-i)=1$$ como elección de representante. Cualquier asociado de $1$, es decir, cualquiera de las unidades $1,-1,i,-i$, es también un máximo común divisor.

>[!exercise] Ejercicio 8
>Probar que:
>- **(i)** **∗** $\mathrm{AE}\Rightarrow\mathrm{AIP}$ con identidad.
>- **(ii)** $\mathrm{DIP}\Rightarrow\mathrm{DFU}$.
>Dar contraejemplos que muestren que las recíprocas no son ciertas.
>
>>[!Proof]-
>>- (i)
>>	1. Sea $R$ un anillo euclídeo, con función euclidiana $\varphi$. En esta demostración usamos la convención adoptada en la conversación: los anillos tienen identidad. No suponemos que $R$ sea un dominio íntegro.
>>	2. Sea $I$ un ideal de $R$. Si $I=\{0\}$, entonces $I=(0)$. Si $I\neq\{0\}$, el conjunto $\{\varphi(x):x\in I\setminus\{0\}\}$ es un subconjunto no vacío de los naturales; por buen orden tiene mínimo. Elegimos $d\in I\setminus\{0\}$ que lo alcanza.
>>	3. Para cualquier $a\in I$, la división euclidiana da $a=dq+r$, con $q,r\in R$ y $r=0$ o $\varphi(r)<\varphi(d)$. Como $d\in I$, tenemos $dq\in I$; por tanto, $r=a-dq\in I$. Si $r\neq0$, su valor euclidiano contradice la elección de $d$. Luego $r=0$ y $a=dq\in(d)$. Así, $I\subseteq(d)$.
>>	4. Como $d\in I$ e $I$ es un ideal, $(d)\subseteq I$. Por ambas inclusiones, $I=(d)$. Todo ideal de $R$ es principal y, con la convención del paso 1, $R$ tiene identidad. Esto prueba (i), sin afirmar que $R$ sea un dominio íntegro.
>>- (ii) **Existencia de la factorización.**
>>	1. Sea $R$ un DIP. Supongamos que existe $r_0\neq0$, no invertible, que no es producto finito de irreducibles. No puede ser irreducible, pues entonces sería un producto de un solo factor irreducible.
>>	2. Como $r_{0}$ no es [[Teorico 11#^85c0bf|irreducible]], $r_0=a_0r_1$ con $a_0,r_1$ ambos no invertibles y ambos son no nulos porque $r_0\neq0$.
>>	3. Al menos uno de los dos factores tampoco es producto finito de irreducibles: si ambos los fueran, multiplicando sus factorizaciones obtendríamos una para $r_0$.
>>	4. Supongamos sin perdida de generalidades que $r_1$ es el factor que no admite tal factorización y por $a_0$ el otro.
>>	5. De $r_0=a_0r_1$ se sigue $(r_0)\subseteq(r_1)$. La inclusión es estricta: si fueran iguales, existiría $b$ con $r_1=br_0=ba_0r_1$, y por integridad $1=ba_0$, contradiciendo que $a_0$ no es invertible.
>>	6. Repitiendo el procedimiento con $r_1$ y los factores sucesivos, se obtiene una cadena $(r_0)\subsetneq(r_1)\subsetneq(r_2)\subsetneq\cdots$. Esto contradice [[Teorico 11#^e11015|estabilización de cadenas]]. Por tanto, existe la factorización finita.
>>	7. **Pendiente:** demostrar la unicidad salvo orden y asociados. También quedan pendientes los contraejemplos a las recíprocas pedidos en el enunciado.

## Anillos de polinomios

>[!exercise] Ejercicio 9
>Sean $R$ anillo conmutativo con $1$ y $p=\sum_{j=0}^{n}a_jx^j$ un polinomio en $R[x]$. Probar las siguientes afirmaciones:
>- **(a)** $p$ es divisor de cero si y sólo si existe $0\neq b\in R$ tal que $ba_n=ba_{n-1}=\cdots=ba_0=0$.
>- **(b)** $p$ es unidad si y sólo si $a_0$ es unidad y $a_1,\ldots,a_n$ son nilpotentes.
>
>>[!Proof]-
>>- (a)
>>	- **($\Rightarrow$)** Supongamos que $p$ es divisor de cero.
>>		1. Escribimos $p=\sum_{i=0}^{n}p_ix^i$, con $p_i=a_i$. Como $p$ es divisor de cero $S=\{\deg h:h\in R[x],\ h\neq0,\ ph=0\}\neq\varnothing$. 
>>		2. Por buen orden elegimos $$q=\sum_{j=0}^{m}q_jx^j,\qquad pq=0,\qquad m=\deg q=\min S,\qquad q_m\neq0.$$
>>		3. Para $c\in R$, por asociatividad, conmutatividad y distributividad en $R$: $$\begin{aligned}p_i(cq_j)&=(p_ic)q_j=(cp_i)q_j=c(p_iq_j),\\p(cq)&=\sum_{i=0}^{n}\sum_{j=0}^{m}p_i(cq_j)x^{i+j}=c\sum_{i=0}^{n}\sum_{j=0}^{m}p_iq_jx^{i+j}=c(pq)=0.\end{aligned}$$
>>		4. **Primero, el coeficiente $p_n$.** El coeficiente de $x^{n+m}$ en $pq=0$ da $$0=\sum_{\substack{i+j=n+m\\0\leq i\leq n,\ 0\leq j\leq m}}p_iq_j=p_nq_m.$$ Entonces $$\begin{aligned}p_nq&=\sum_{j=0}^{m-1}(p_nq_j)x^j+\underbrace{p_nq_m}_{0}x^m\\&=\sum_{j=0}^{m-1}(p_nq_j)x^j\end{aligned}$$ que es un polinomio de grado $m-1$
>>		5. Ademas $p(p_nq)=p_n(pq)=0$. Si $m=0$, la suma es vacía y $p_nq=0$, si $m\neq0$ tenemos un polinomio $p_{n}q$ de grado $m-1$ que anula a $p$ por minimalidad tiene que ser nulo, entonces $p_nq=0$.
>>		6. Y ademas notemos que como $p_{n}q=0$ podemos afirmar $$p_nq=0\quad\Longrightarrow\quad p_nq_j=0\quad\text{para todo }j.$$ 
>>		7. **Ahora, $p_{n-1}$ (si $n\geq1$).** Como $pq=0$, $$\begin{aligned}0=pq&=\sum_{i=0}^{n}\sum_{j=0}^{m}p_iq_jx^{i+j}\\&=\sum_{i=0}^{n-1}\sum_{j=0}^{m}p_iq_jx^{i+j}+\sum_{j=0}^{m}\underbrace{p_nq_j}_{0}x^{n+j}\\&=\left(\sum_{i=0}^{n-1}p_ix^i\right)q.\end{aligned}$$ entonces coeficiente de $x^{n-1+m}$ en el último producto da $p_{n-1}q_m=0$.
>>		8. Multiplicamos todo $q$ por $p_{n-1}$: $$\begin{aligned}p_{n-1}q&=\sum_{j=0}^{m-1}(p_{n-1}q_j)x^j+\underbrace{p_{n-1}q_m}_{0}x^m\\&=\sum_{j=0}^{m-1}(p_{n-1}q_j)x^j,\end{aligned}$$ que es un polinomio de grado $m-1$
>>		9. Y analogamente $p(p_{n-1}q)=p_{n-1}(pq)=0$ entonces por la minimalidad $p_{n-1}q=0$, etc.
>>		10. Repitiendo este mismo argumento con los coeficientes restantes, llegamos a $$p_nq=p_{n-1}q=\cdots=p_0q=0.$$
>>		11. Pero entonces para cada $i=0,\ldots,n$, $$0=p_iq=\sum_{j=0}^{m}(p_iq_j)x^j\quad\Longrightarrow\quad p_iq_j=0\quad(0\leq j\leq m).$$
>>		12. Luego elegimos $b=q_m\neq0$ (sabemos que es no nulo por que si no $q$ no tendria grado $m$), que sabemos anula a todo $p_{j}$ 
>>	- **($\Leftarrow$)**
>>		1. Sea $b\in R$, $b\neq0$, tal que $bp_i=0$ para todo $i=0,\ldots,n$. Considerado como polinomio constante, $b\neq0$ en $R[x]$ y $$bp=b\sum_{i=0}^{n}p_ix^i=\sum_{i=0}^{n}(bp_i)x^i=0.$$ Por tanto, $p$ es divisor de cero.
>>- (b)
>>	- **($\Leftarrow$)** Supongamos que $a_0$ es unidad y que $a_1,\ldots,a_n$ son nilpotentes.
>>		1. Para cada $j=1,\ldots,n$, elegimos un entero $n_j\geq1$ tal que $a_j^{n_j}=0$, y tomamos $$N=1+\sum_{j=1}^{n}(n_j-1).$$ Si $n=0$, la suma es vacía y $N=1$.
>>		2. Todo producto de $N$ factores elegidos de $\{a_1,\ldots,a_n\}$ es cero. En efecto, si cada $a_j$ apareciera a lo sumo $n_j-1$ veces, habría a lo sumo $\sum_{j=1}^{n}(n_j-1)=N-1$ factores. Por tanto, algún $a_j$ aparece al menos $n_j$ veces y, por conmutatividad, el producto contiene el factor $a_j^{n_j}=0$.
>>		3. Sea $h=p-a_0=\sum_{j=1}^{n}a_jx^j$. Si $n=0$, entonces $h=0$. Si $n\geq1$, por distributividad, $$h^N=\sum_{j_1,\ldots,j_N\in\{1,\ldots,n\}}a_{j_1}\cdots a_{j_N}x^{j_1+\cdots+j_N}=0,$$ pues cada producto de coeficientes se anula por el paso anterior. En todos los casos, $h^N=0$.
>>		4. Como $a_0$ es invertible, podemos normalizar: $$a_0^{-1}p=1+u,\qquad u=a_0^{-1}h.$$ Por conmutatividad de $R[x]$, $$u^N=(a_0^{-1})^Nh^N=0.$$
>>		5. Construimos una inversa de $1+u$ mediante diferencias de cuadrados: $$\begin{aligned}(1+u)(1-u)&=1-u^2,\\(1+u)(1-u)(1+u^2)&=1-u^4,\\(1+u)(1-u)(1+u^2)(1+u^4)&=1-u^8.\end{aligned}$$ En general, para $r\geq1$, ponemos $$Q_r=(1-u)\prod_{j=1}^{r-1}(1+u^{2^j}),$$ interpretando el producto vacío como $1$. Cada nuevo factor transforma el resto mediante la identidad $$(1-u^{2^j})(1+u^{2^j})=1-u^{2^{j+1}}.$$ Repitiendo estas cancelaciones, obtenemos $$(1+u)Q_r=1-u^{2^r}.$$
>>		6. Elegimos $r\geq1$ tal que $2^r\geq N$. Si $2^r=N$, tenemos $u^{2^r}=u^N=0$; si $2^r>N$, tenemos $u^{2^r}=u^Nu^{2^r-N}=0$. En consecuencia, $$(1+u)Q_r=1.$$
>>		7. Volvemos al polinomio original: $$1=(1+u)Q_r=(a_0^{-1}p)Q_r=p(a_0^{-1}Q_r).$$ Como $R[x]$ es conmutativo, $a_0^{-1}Q_r$ es una inversa de $p$. Por tanto, $p$ es unidad.
>>	- **($\Rightarrow$)** Supongamos que $p$ es unidad.
>>		1. Elegimos $$q=\sum_{j=0}^{m}b_jx^j,\qquad pq=1.$$ Comparando términos constantes, obtenemos $a_0b_0=1$, por lo que tanto $a_0$ como $b_0$ son unidades de $R$. Si $n=0$, no hay coeficientes de grado positivo y ya terminamos. Supongamos entonces $n\geq1$.
>>		2. **Empezamos por el coeficiente superior.** El coeficiente de $x^{n+m}$ en $pq=1$ da $$a_nb_m=0.$$ Si $m\geq1$, el siguiente coeficiente da $$a_{n-1}b_m+a_nb_{m-1}=0.$$ Multiplicamos por $a_n$ y usamos conmutatividad: $$0=a_{n-1}(a_nb_m)+a_n^2b_{m-1}=a_n^2b_{m-1}.$$
>>		3. Si $m\geq2$, el coeficiente siguiente es $$a_{n-2}b_m+a_{n-1}b_{m-1}+a_nb_{m-2}=0,$$ omitiendo el primer término si $n=1$. Multiplicamos por $a_n^2$. Como $a_n^2b_m=a_n(a_nb_m)=0$ y $a_n^2b_{m-1}=0$, queda $$a_n^3b_{m-2}=0.$$ Continuamos de la misma manera: al bajar un grado, multiplicamos por la siguiente potencia de $a_n$; todos los términos salvo el último desaparecen por las relaciones ya obtenidas. Así llegamos sucesivamente a $$a_nb_m=0,\quad a_n^2b_{m-1}=0,\quad\ldots,\quad a_n^{m+1}b_0=0.$$ En efecto, en la ecuación del grado $n+m-k$, los términos anteriores al último son $a_{n-t}b_{m-k+t}$, con $1\leq t\leq\min(n,k)$; al multiplicar por $a_n^k$, se anulan porque ya se obtuvo $a_n^{k-t+1}b_{m-k+t}=0$ y $$a_n^ka_{n-t}b_{m-k+t}=a_{n-t}a_n^{t-1}\left(a_n^{k-t+1}b_{m-k+t}\right)=0.$$
>>		4. Multiplicando la última igualdad por $a_0$, obtenemos $$a_n^{m+1}=a_n^{m+1}b_0a_0=0.$$ Por tanto, $a_n$ es **nilpotente**. Si $m=0$, esta conclusión sale directamente de $a_nb_0=0$.
>>		5. **Quitamos el término superior y verificamos que lo restante sigue siendo unidad.** Definimos $$z=a_nx^n,\qquad r=p-z=\sum_{j=0}^{n-1}a_jx^j,\qquad L=m+1.$$ Entonces $$z^L=a_n^Lx^{nL}=0.$$ Como $pq=1$, tenemos $$rq=(p-z)q=1-zq.$$ Escribimos $w=zq$; por conmutatividad, $$w^L=z^Lq^L=0.$$
>>		6. Definimos explícitamente $$s=1+w+\cdots+w^{L-1}.$$ Por distributividad y cancelación, $$\begin{aligned}(1-w)s&=\sum_{j=0}^{L-1}w^j-\sum_{j=1}^{L}w^j\\&=1-w^L=1.\end{aligned}$$ Por tanto, $$r(qs)=(rq)s=(1-w)s=1.$$ Como $R[x]$ es conmutativo, $qs$ es una inversa de $r$.
>>		7. Ahora repetimos el mismo procedimiento con $r=a_0+\cdots+a_{n-1}x^{n-1}$: como es unidad, el cálculo de los coeficientes superiores con una inversa de $r$ demuestra que $a_{n-1}$ es **nilpotente**; después quitamos $a_{n-1}x^{n-1}$ y construimos una inversa de lo restante exactamente como en los pasos 5 y 6. Continuamos retirando un término cada vez, hasta llegar al polinomio constante $a_0$.
>>		8. Son a lo sumo $n$ repeticiones, y obtenemos que $a_1,\ldots,a_n$ son nilpotentes. Junto con la invertibilidad de $a_0$, esto completa la recíproca.

>[!exercise] Ejercicio 10
>Sea $F$ cuerpo. Probar que $(x)$ es un ideal maximal en $F[x]$.
>
>>[!Proof]-
>>1. Sea $J$ un ideal de $F[x]$ tal que $(x)\subsetneq J$. Elegimos $p\in J\setminus(x)$ y escribimos $$p=p_0+p_1x+\cdots+p_nx^n.$$ Necesariamente $p_0\neq0$: si fuera cero, $p$ sería múltiplo de $x$ y pertenecería a $(x)$, contradiciendo su elección.
>>2. Como $x\in J$, por absorción todo múltiplo de $x$ pertenece a $J$. En particular, $$p-p_0=x\left(\sum_{k=1}^{n}p_kx^{k-1}\right)\in J,$$ interpretando la suma como cero si $n=0$.
>>3. Como $p\in J$ y $p-p_0\in J$, el cierre bajo restas da $$p_0=p-(p-p_0)\in J.$$
>>4. Como $p_0\neq0$ y $F$ es un cuerpo, existe $p_0^{-1}\in F$. Considerándolo como polinomio constante, por absorción obtenemos $$1=p_0^{-1}p_0\in J.$$ Para todo $f\in F[x]$, resulta $f=f\cdot1\in J$. Por tanto, $J=F[x]$.
>>5. Finalmente, $(x)$ es propio: todo múltiplo de $x$ tiene término constante cero, de modo que $1\notin(x)$. Como todo ideal que contiene estrictamente a $(x)$ es $F[x]$, concluimos por [[Teorico 11#^e11001|maximalidad]] que $(x)$ es maximal.

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
