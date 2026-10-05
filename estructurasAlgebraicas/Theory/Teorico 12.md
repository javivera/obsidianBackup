---
tags:
  - AlgebraicStructures
  - Rings
  - Polynomials
source: "Cuatro fotos enviadas por Sofía por WhatsApp el 2026-10-02"
---

# Teórico 12 — Anillos euclidianos, series formales y polinomios

>[!remark] Sobre la transcripción
>La fecha del nombre de la nota corresponde a la recepción de las fotos, no necesariamente a la fecha de la clase. Se conserva el orden deductivo del contenido y se dejan sin resolver los ejercicios propuestos. Se corrigen erratas de notación y se explicitan las hipótesis necesarias: en la definición de dominio euclidiano se exige que el anillo sea un dominio íntegro; en la división de polinomios se supone que el divisor es no nulo.

## Factorización en anillos conmutativos

>[!definition] Dominio euclidiano
>Un dominio íntegro conmutativo $R$ es **euclidiano** si existe una función $\varphi:R\setminus\{0\}\to\mathbb N_0$ que cumple:
>1. Si $ab\neq0$, entonces $\varphi(a)\leq\varphi(ab)$.
>2. Si $a,b\in R$ y $b\neq0$, existen $q,r\in R$ tales que $a=qb+r$, con $r=0$ o $\varphi(r)<\varphi(b)$.

>[!remark] Función euclidiana
>La función $\varphi$ funciona como una medida de tamaño que permite obtener restos menores que el divisor.

>[!example] Dominios euclidianos
>1. $\mathbb Z$, con $\varphi(a)=|a|$.
>2. Todo cuerpo $\mathbb k$, con $\varphi(a)=1$ para $a\neq0$: la división tiene siempre resto cero.
>3. $\mathbb k[x]$, si $\mathbb k$ es un cuerpo, con $\varphi(p)=\deg p$ para $p\neq0$.

### Ideales principales

>[!Definition] Ideal principal y dominio de ideales principales
>Sea $R$ un anillo conmutativo con unidad. Un ideal $I\subseteq R$ es **principal** si existe $a\in R$ tal que $$I=(a)=\{ra:r\in R\}.$$ Decimos que $a$ es un **generador** de $I$: todos los elementos del ideal, y solo ellos, son múltiplos de $a$. Las notaciones $(a)$ y $\langle a\rangle$ representan el mismo ideal. Un **dominio de ideales principales** es un dominio íntegro conmutativo en el que todo ideal es principal.
>En particular, $(0)=\{0\}$ y $(1)=R$. Para comprobar que $I=(a)$ hay que verificar ambas inclusiones: todo múltiplo de $a$ pertenece a $I$, y todo elemento de $I$ es múltiplo de $a$.

### Ejemplos de ideales principales

>[!example]- Ideales principales
>- **(a) En $\mathbb Z$: el ideal generado por $6$.** $$(6)=\{6k:k\in\mathbb Z\}=\{\ldots,-12,-6,0,6,12,\ldots\}.$$
>- **(b) En $\mathbb Z$: dos generadores que se reemplazan por uno.** $$(6,10)=\{6m+10n:m,n\in\mathbb Z\}=(2).$$
>  Todos esos elementos son múltiplos de $2$, y $2=2\cdot6-10$. Ser principal significa admitir un solo generador, aunque el ideal se presente inicialmente con varios.
>- **(c) En $\mathbb R[x]$: un ideal generado por polinomios.** $$(x^2-1,x^2-x)=(x-1)=\{(x-1)q(x):q(x)\in\mathbb R[x]\}.$$
>  Ambos polinomios tienen el factor $x-1$, y su diferencia es $(x^2-1)-(x^2-x)=x-1$. Aquí los múltiplos se obtienen multiplicando por polinomios arbitrarios, no solamente por números reales.

>[!definition] Dominio de factorización única
>Un dominio íntegro conmutativo $R$ es un **dominio de factorización única (DFU)** si cumple las siguientes condiciones:
>1. **Existencia.** Todo elemento $a\neq0$ que no sea una unidad admite una factorización $a=p_1\cdots p_n$, con $n\geq1$ y todos los $p_i$ irreducibles.
>2. **Unicidad salvo orden y asociados.** Si $a=p_1\cdots p_n=q_1\cdots q_m$ son dos factorizaciones en irreducibles, entonces $n=m$ y, después de reordenar los factores, existen unidades $u_1,\ldots,u_n\in R$ tales que $q_i=u_ip_i$ para todo $i$.

>[!remark] Terminología
>- Una **unidad** es un elemento invertible.
>- Un elemento $p$ es **irreducible** si es no nulo, no es una unidad y toda igualdad $p=bc$ obliga a que $b$ o $c$ sea una unidad.
>- Dos elementos son **asociados** si uno es el producto del otro por una unidad.
>- Un elemento no nulo y no invertible $p$ es **primo** si $p\mid ab$ implica $p\mid a$ o $p\mid b$.

### Teorema: de la división euclidiana a la factorización única

>[!Theorem] Todo dominio euclidiano es un dominio de ideales principales y de factorización única
>Si $R$ es un dominio euclidiano, todo ideal de $R$ es principal. Además, todo elemento no nulo y no invertible de $R$ es producto de irreducibles, y esa factorización es única salvo el orden y la multiplicación de los factores por unidades.
>>[!Proof]-
>>- **(a) Todo ideal es principal: elegir un elemento de tamaño mínimo.**
>>	1. Sea $I$ un [[Teorico 10#^a7d291|ideal]]. Si $I=\{0\}$, entonces $I=(0)$. Si $I\neq\{0\}$, el conjunto $\{\varphi(x):x\in I\setminus\{0\}\}\subseteq\mathbb N_0$ es no vacío entonces tiene mínimo. 
>>	2. Elegimos $a\in I\setminus\{0\}$ que alcanza ese mínimo. La idea es que un resto no nulo produciría otro elemento de $I$ de tamaño menor.
>>	3. Como $a\in I$ e $I$ es un ideal, todo múltiplo de $a$ pertenece a $I$: $(a)\subseteq I$.
>>	4. Para la inclusión contraria, sea $b\in I$. Dividimos $b$ por $a\neq0$: existen $q,r\in R$ tales que $b=qa+r$, con $r=0$ o $\varphi(r)<\varphi(a)$.
>>	5. El resto pertenece al ideal: $r=b-qa\in I$. Si $r\neq0$, la desigualdad $\varphi(r)<\varphi(a)$ contradice la elección de $a$. Luego $r=0$, de modo que $b=qa\in(a)$. Esto prueba $I\subseteq(a)$ y, por tanto, $I=(a)$.
>>- **(b) Las cadenas crecientes de ideales se estabilizan.**
>>	1. Por la parte (a), $R$ es un DIP. Aplicamos [[Teorico 11#^e11015|estabilización de cadenas de ideales en un DIP]].
>>- **(c) Existencia de la factorización finita en irreducibles.**
>>	1. Supongamos que existe un elemento $a_0\neq0$, no invertible, que no admite una factorización **finita** en irreducibles. No puede ser irreducible, pues entonces él mismo sería una factorización de un solo factor irreducible. 
>>	2. Luego por ser reducible, podemos escribir $a_0=ba_1$ con $b,a_1$ no invertibles (o sea, no unidades); ambos son no nulos porque $a_0\neq0$.
>>	3. Al menos uno de $b,a_1$ tampoco admite una factorización finita en irreducibles: si ambos la admitieran, el producto de sus factorizaciones sería una factorización finita en irreducibles de $a_0$. Supongamos, sin pérdida de generalidad, que $a_1$ es dicho factor.
>>	4. Como $a_0=ba_1$, se cumple $(a_0)\subseteq(a_1)$. La inclusión es estricta: si fueran iguales, tendríamos $a_1\in(a_1)=(a_0)$, de modo que $a_1=a_0s=ba_1s$ para algún $s\in R$. Por conmutatividad, esto da $a_1(1-bs)=0$. Como $a_1\neq0$ y $R$ es un dominio íntegro, resulta $bs=1$, contradiciendo que $b$ no es invertible.
>>	5. Aplicamos los mismos pasos a $a_1$: lo descomponemos en dos factores no invertibles, elegimos uno que tampoco admita factorización finita en irreducibles y lo llamamos $a_2$. El mismo cálculo del paso 4 prueba $(a_1)\subsetneq(a_2)$. Continuando así, obtendríamos una cadena infinita $(a_0)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots$, que contradice la parte (b). Por tanto, todo elemento no nulo y no invertible admite una factorización finita en irreducibles.
>>- **(d) Todo irreducible es primo: el paso que permitirá la unicidad.**
>>	1. Sea $p$ irreducible y supongamos $p\mid ab$. Si $p\mid a$, ya tenemos una de las alternativas. Supongamos entonces que $p$ no divide a $a$ y consideremos el ideal $(p,a)=\{rp+sa:r,s\in R\}$. Por la parte (a), $(p,a)=(d)$ para algún $d\in R$.
>>	2. Como $p\in(d)$, existe $t\in R$ con $p=dt$. Por irreducibilidad de $p$, $d$ o $t$ es una unidad. Si $t$ fuera una unidad, de $a\in(d)$ tendriamos $a=dr=p(t^{-1}r)$ para algún $r\in R$, contradiciendo que $p$ no divide a $a$. Por tanto, $d$ es una unidad.
>>	3. Así, $(p,a)=(d)=R$ y, en particular, existen $r,s\in R$ tales que $1=rp+sa$. Multiplicando por $b$, obtenemos $b=rpb+sab$. 
>>	4. Como $p|ab$ entonces $ab=pc$ para algún $c\in R$ entonces por 3. $b=rpb+spc$ osea se cumple $b=p(rb+sc)$; luego $p\mid b$. Hemos probado que $p$ es primo.
>>- **(e) Unicidad salvo orden y asociados.**
>>	1. Sean $a=u p_1\cdots p_n=v q_1\cdots q_m$ dos factorizaciones, donde $u,v$ son unidades y todos los $p_i,q_j$ son irreducibles. Como $a$ no es invertible, $n,m\geq1$. De la igualdad se sigue que $p_1$ divide a $q_1\cdots q_m$, multiplicando por la unidad $v^{-1}$.
>>	2. Por la parte (d), $p_1$ es primo. Aplicando repetidamente la propiedad de primo al producto finito, $p_1$ divide a algún $q_j$. Reordenamos los $q_j$ para que sea $q_1$ y escribimos $q_1=p_1w$. Como $q_1$ es irreducible y $p_1$ no es una unidad, $w$ debe ser una unidad. Así, $p_1$ y $q_1$ son asociados.
>>	3. Sustituimos $q_1=p_1w$ en las dos factorizaciones. Por conmutatividad, $$u p_1p_2\cdots p_n=vw p_1q_2\cdots q_m.$$ Cancelamos $p_1\neq0$, usando que $R$ es un dominio íntegro, y obtenemos $u p_2\cdots p_n=vw q_2\cdots q_m$.
>>	4. Repetimos este procedimiento para los factores restantes. No puede agotarse una lista antes que la otra: en ese caso, quedaría una unidad igual a una unidad multiplicada por un producto no vacío de irreducibles. Pero si $r_1\cdots r_k$ fuera invertible, cada $r_i$ sería invertible, pues, llamando $h$ al inverso del producto, $r_i\bigl(h\prod_{j\neq i}r_j\bigr)=1$. Esto contradice la irreducibilidad de esos factores.
>>	5. En consecuencia, $n=m$ y, después de reordenar, cada $p_i$ es asociado a $q_i$. Esto prueba la unicidad de la factorización en el sentido enunciado, y completa la demostración.
 
## Series formales y polinomios

>[!definition] Series formales
>Sea $R$ un anillo con unidad, no necesariamente conmutativo. El conjunto $R[[x]]$ de **series formales** es el conjunto de sucesiones $a:\mathbb N_0\to R$, escritas $a=(a_0,a_1,a_2,\ldots)$. Se definen las operaciones:
>1. Suma: $(a+b)_n=a_n+b_n$.
>2. Cero: $0=(0,0,0,\ldots)$.
>3. Producto: $(ab)_n=\sum_{i=0}^{n}a_{n-i}b_i$.
>4. Unidad: $1=(1,0,0,\ldots)$.

>[!definition] Polinomios
>El conjunto $R[x]\subseteq R[[x]]$ está formado por las sucesiones con soporte finito: $a_i=0$ salvo para una cantidad finita de índices $i$.

>[!lemma] Estructura de anillo
>Sea $R$ un anillo.
>1. $R[[x]]$ es un anillo.
>2. $R[x]$ es un subanillo de $R[[x]]$.
>3. La aplicación $R\to R[x]$, $r\mapsto(r,0,0,\ldots)$, es un monomorfismo de anillos.
>4. Si $R$ es conmutativo, también lo es $R[x]$.
>
>>[!Proof]-
>>- **(1) $R[[x]]$ es un anillo.**
>>	1. **Clausura y grupo abeliano aditivo.** Para cada $n\geq0$, tanto $a_n+b_n$ como $\sum_{i=0}^n a_{n-i}b_i$ , osea los coeficientes pertenecen a $R$ por que son suma finitas
>>	2. Así, ambas operaciones producen sucesiones en $R[[x]]$. La suma es asociativa y conmutativa porque, para cada $n$, $$((a+b)+c)_n=(a_n+b_n)+c_n=a_n+(b_n+c_n)=(a+(b+c))_n,\qquad(a+b)_n=a_n+b_n=b_n+a_n=(b+a)_n.$$ La sucesión nula es el neutro, pues $(a+0)_n=a_n+0=a_n$, y $-a=(-a_0,-a_1,\ldots)$ es el inverso de $a$, pues $(a+(-a))_n=a_n-a_n=0$.
>>	3. **Asociatividad del producto.** Para $a,b,c\in R[[x]]$ y $n\geq0$, expandimos ambos productos: $$\begin{aligned}((ab)c)_n&=\sum_{k=0}^n(ab)_{n-k}c_k=\sum_{k=0}^n\sum_{j=0}^{n-k}(a_{n-k-j}b_j)c_k,\\(a(bc))_n&=\sum_{i=0}^na_{n-i}(bc)_i=\sum_{i=0}^n\sum_{k=0}^i a_{n-i}(b_{i-k}c_k).\end{aligned}$$ En la primera suma, los pares $(j,k)$ cumplen $j,k\geq0$ y $j+k\leq n$. En la segunda, hacemos $j=i-k$, de modo que $i=j+k$: obtenemos exactamente los mismos pares y el término $a_{n-j-k}(b_jc_k)$
>>	4. Por asociatividad en $R$, $(a_{n-j-k}b_j)c_k=a_{n-j-k}(b_jc_k)$. Las sumas son finitas y podemos reordenarlas porque la suma en $R$ es conmutativa. Por tanto, $((ab)c)_n=(a(bc))_n$ para todo $n$, y $(ab)c=a(bc)$.
>>	5. **Distributividades.** Aplicando las distributividades de $R$ en cada coordenada, $$\begin{aligned}(a(b+c))_n&=\sum_{i=0}^n a_{n-i}(b_i+c_i)=\sum_{i=0}^n a_{n-i}b_i+\sum_{i=0}^n a_{n-i}c_i=(ab+ac)_n,\\((a+b)c)_n&=\sum_{i=0}^n(a_{n-i}+b_{n-i})c_i=\sum_{i=0}^n a_{n-i}c_i+\sum_{i=0}^n b_{n-i}c_i=(ac+bc)_n.\end{aligned}$$ Luego $a(b+c)=ab+ac$ y $(a+b)c=ac+bc$, de modo que $R[[x]]$ es un anillo.
>>	6. **Unidad, si existe en $R$.** Para demostrar que $R[[x]]$ es un anillo no se necesita unidad: la demostración ya terminó en el paso 5. Si además $R$ tiene unidad $1_R$, la sucesión $u=(1_R,0,0,\ldots)$ es unidad de $R[[x]]$: en $(au)_n=\sum_{i=0}^n a_{n-i}u_i$ sólo puede contribuir $i=0$, y en $(ua)_n=\sum_{i=0}^n u_{n-i}a_i$ sólo puede contribuir $i=n$. Por tanto, $$(au)_n=a_n1_R=a_n,\qquad(ua)_n=1_Ra_n=a_n,$$ y $au=a=ua$.
>>- **(2) $R[x]$ es un subanillo de $R[[x]]$.**
>>	1. **Cerrado por suma** La sucesión nula tiene soporte finito. Si $a,b\in R[x]$, existen $N,M\geq0$ tales que $a_i=0$ para $i>N$ y $b_i=0$ para $i>M$. Para $n>\max\{N,M\}$, $(a+b)_n=0$; además, $(-a)_n=0$ para $n>N$. Así, $a+b$ y $-a$ tienen soporte finito.
>>	2. **Cerrado por producto** Si $n>N+M$, para cada $0\leq i\leq n$ ocurre $i>M$ o $n-i>N$: si ambas desigualdades fallaran, tendríamos $n=(n-i)+i\leq N+M$. Por tanto, cada término $a_{n-i}b_i$ es cero y $(ab)_n=0$. Luego $ab$ tiene soporte finito. Las operaciones restringidas conservan las propiedades ya probadas, por lo que $R[x]$ es un subanillo. 
>>	3. **Unidad, si existe en $R$.** El paso anterior ya prueba que $R[x]$ es un subanillo, sin suponer unidad. Si además $R$ tiene unidad $1_R$, entonces $u=(1_R,0,0,\ldots)$ tiene soporte finito, pertenece a $R[x]$ y es también su unidad.
>>- **(3) La inclusión de los coeficientes es un monomorfismo.**
>>	1. Definimos $\iota:R\to R[x]$ por $\iota(r)=(r,0,0,\ldots)$, que tiene soporte finito. La suma coordenada a coordenada da $\iota(r+s)=\iota(r)+\iota(s)$. En el producto $\iota(r)\iota(s)$, el coeficiente de grado $0$ es $rs$; para $n>0$, cada término contiene una coordenada de índice positivo de alguno de los factores y es cero. Así, $\iota(r)\iota(s)=(rs,0,0,\ldots)=\iota(rs)$. También $\iota(0)=0$ y, si $R$ tiene unidad, $\iota(1_R)=u$.
>>	2. Si $\iota(r)=\iota(s)$, comparando las coordenadas de índice $0$ obtenemos $r=s$. Por tanto, $\iota$ es un morfismo inyectivo, es decir, un monomorfismo de anillos.
>>- **(4) Si $R$ es conmutativo, $R[x]$ es conmutativo.**
>>	1. Para $a,b\in R[x]$ y cada $n\geq0$, usamos la conmutatividad de $R$ y luego el cambio de índice $j=n-i$: $$(ab)_n=\sum_{i=0}^n a_{n-i}b_i=\sum_{i=0}^n b_i a_{n-i}=\sum_{j=0}^n b_{n-j}a_j=(ba)_n.$$ Por tanto, $ab=ba$. El mismo cálculo prueba también que $R[[x]]$ es conmutativo cuando $R$ lo es.

>[!exercise] Polinomios sobre un dominio íntegro
>Si $R$ es un dominio íntegro, demostrar que $R[x]$ también lo es.

>[!remark] Notación y variable central
>Identificamos $r\in R$ con $(r,0,0,\ldots)$ y escribimos $x=(0,1,0,\ldots)$, $x^2=(0,0,1,0,\ldots)$. Todo polinomio se expresa como $p(x)=\sum_{i=0}^{n}a_ix^i$. La variable $x$ conmuta con todos los coeficientes, aunque estos no necesariamente conmuten entre sí.

>[!definition] Evaluación
>Para $c\in R$, definimos $\operatorname{Ev}_c:R[x]\to R$ por $\operatorname{Ev}_c(\sum_i a_ix^i)=\sum_i a_ic^i$.

>[!proposition] ¿Cuándo es la evaluación un morfismo de anillos?
>La aplicación $\operatorname{Ev}_c$ es un morfismo de anillos si y solo si $c\in Z(R)$.
>>[!Proof]-
>>1. Siempre preserva la suma: $\operatorname{Ev}_c(p+q)=\sum_i(a_i+b_i)c^i=\operatorname{Ev}_c(p)+\operatorname{Ev}_c(q)$; también preserva la unidad.
>>2. Si $c\in Z(R)$, para $p=\sum_i a_ix^i$ y $q=\sum_j b_jx^j$ se cumple $$\operatorname{Ev}_c(pq)=\sum_{i,j}a_ib_jc^{i+j}=\sum_{i,j}a_ic^ib_jc^j=\operatorname{Ev}_c(p)\operatorname{Ev}_c(q).$$ La igualdad intermedia usa que $c^i$ conmuta con $b_j$.
>>3. Recíprocamente, en $R[x]$ se cumple $xa=ax$ para todo $a\in R$. Si la evaluación es multiplicativa, al evaluar esta identidad obtenemos $ca=ac$ para todo $a\in R$. Por tanto, $c\in Z(R)$.
>>4. El cálculo de las fotos con $p=ax$ y $q=bx$ ilustra el obstáculo: $\operatorname{Ev}_c(pq)=abc^2$, mientras que $\operatorname{Ev}_c(p)\operatorname{Ev}_c(q)=acbc$.

>[!lemma] Extensión de un morfismo a polinomios
>Si $\varphi:R\to S$ es un morfismo de anillos, induce un morfismo $\widetilde\varphi:R[x]\to S[x]$ definido por $\widetilde\varphi(\sum_i a_ix^i)=\sum_i\varphi(a_i)x^i$.

>[!definition] Grado
>Para un polinomio no nulo $p\in R[x_1,\ldots,x_n]$, su **grado total** es el máximo de $i_1+\cdots+i_n$ entre los monomios $a_{i_1,\ldots,i_n}x_1^{i_1}\cdots x_n^{i_n}$ con coeficiente no nulo. Cada polinomio es una suma finita de esos monomios.

## Algoritmo de la división y teorema del resto

>[!theorem] Algoritmo de la división
>Sea $R$ un anillo, y sean $f,g\in R[x]$ con $g\neq0$. Si el coeficiente principal de $g$ es inversible en $R$, existen $q,r\in R[x]$ tales que $f=qg+r$, con $r=0$ o $\deg r<\deg g$.
>>[!Proof]-
>>1. Si $f=0$ o $\deg f<\deg g$, tomamos $q=0$ y $r=f$. En los demás casos, escribimos $f=a_nx^n+\cdots$ y $g=b_mx^m+\cdots$, con $m\leq n$ y $b_m$ inversible.
>>2. Definimos $f_1=f-(a_nb_m^{-1}x^{n-m})g$. El coeficiente de $x^n$ en el término que restamos es $a_nb_m^{-1}b_m=a_n$, de modo que $f_1=0$ o $\deg f_1<n$.
>>3. Por inducción en el grado del dividendo, $f_1=\widetilde qg+r$, con $r=0$ o $\deg r<m$.
>>4. Sustituyendo la definición de $f_1$, obtenemos $f=(a_nb_m^{-1}x^{n-m}+\widetilde q)g+r$. Por tanto, sirve $q=a_nb_m^{-1}x^{n-m}+\widetilde q$.

^b742e1

>[!theorem] Teorema del resto
>Sea $f\in R[x]$ y sea $c\in R$. Existe $q\in R[x]$ tal que $f(x)=q(x)(x-c)+f(c)$.
>>[!Proof]-
>>1. Aplicamos [[Teorico 12#^b742e1|algoritmo de la división]] al divisor $x-c$, cuyo coeficiente principal es $1$. Obtenemos $f=q(x)(x-c)+r$, donde $r$ es constante.
>>2. Aunque la evaluación no sea multiplicativa para un $c$ arbitrario, en este producto particular se cumple $\operatorname{Ev}_c(q(x)(x-c))=0$: si $q=\sum_i b_ix^i$, entonces $$\operatorname{Ev}_c(q(x)(x-c))=\sum_i b_ic^{i+1}-\sum_i(b_ic)c^i=0.$$
>>3. Al evaluar la igualdad del primer paso queda $f(c)=r$, y así $f(x)=q(x)(x-c)+f(c)$.

^d62a91

>[!corollary] Raíces y factores lineales
>Para $f\in R[x]$ y $c\in Z(R)$, se cumple $f(c)=0$ si y solo si $f(x)=q(x)(x-c)$ para algún $q\in R[x]$.
>>[!Proof]-
>>1. Si $f(c)=0$, aplicamos [[Teorico 12#^d62a91|teorema del resto]].
>>2. Si $f=q(x)(x-c)$, evaluamos: como $c\in Z(R)$, $\operatorname{Ev}_c$ es multiplicativa y $f(c)=q(c)(c-c)=0$.

## Un cociente de polinomios reales

>[!example] El cociente $\mathbb R[x]/(x^2+1)$
>Consideramos $\varphi:\mathbb R[x]\to\mathbb C$, $\varphi(\sum_j a_jx^j)=\sum_j a_ji^j$. Es la evaluación en $i$, tomando los coeficientes reales dentro de $\mathbb C$. Como $\varphi(x^2+1)=0$, induce un morfismo $\widehat\varphi:\mathbb R[x]/(x^2+1)\to\mathbb C$ con $\widehat\varphi\circ\pi=\varphi$, donde $\pi$ es la proyección canónica.
>El morfismo $\widehat\varphi$ es sobreyectivo: $a+bi=\varphi(a+bx)$. Para concluir que es un isomorfismo, en las fotos se deja como ejercicio verificar $\ker\varphi=(x^2+1)$.

>[!exercise] Identificación con los complejos
>1. Demostrar que $\ker\varphi=(x^2+1)$ y concluir que $\mathbb R[x]/(x^2+1)\cong\mathbb C$.
>2. Como alternativa, demostrar que $x^2+1$ es irreducible en $\mathbb R[x]$ y usar el criterio de maximalidad del ideal generado por un irreducible sobre un cuerpo.

## Polinomios primitivos y reducción módulo un primo

>[!definition] Polinomio primitivo
>Un polinomio no nulo $f=\sum_i a_ix^i\in\mathbb Z[x]$ es **primitivo** si $\gcd(a_0,\ldots,a_n)=1$.

>[!lemma] Lema de Gauss
>Si $f,g\in\mathbb Z[x]$ son primitivos, entonces $fg$ es primitivo.
>>[!Proof]-
>>1. Supongamos que $fg=\sum_i c_ix^i$ no es primitivo. Existe un primo $\ell\in\mathbb Z$ que divide a todos sus coeficientes $c_i$.
>>2. Consideramos la reducción de coeficientes $\pi:\mathbb Z[x]\to\mathbb F_\ell[x]$. Entonces $\pi(fg)=0$ y, como $\pi$ es un morfismo, $\pi(f)\pi(g)=0$.
>>3. El anillo $\mathbb F_\ell[x]$ es un dominio íntegro, por lo que $\pi(f)=0$ o $\pi(g)=0$. Esto significa que $\ell$ divide a todos los coeficientes de $f$ o a todos los de $g$, contradiciendo que ambos son primitivos.

^ea730c

>[!proposition] Irreducibilidad sobre $\mathbb Z$ y sobre $\mathbb Q$
>Sea $p\in\mathbb Z[x]$ primitivo y de grado al menos $1$. Entonces $p$ es irreducible en $\mathbb Z[x]$ si y solo si es irreducible en $\mathbb Q[x]$.
>>[!Proof]-
>>1. Si $p$ es irreducible en $\mathbb Q[x]$ y $p=fg$ en $\mathbb Z[x]$, uno de los factores tiene grado cero, pues los únicos polinomios inversibles de $\mathbb Q[x]$ son los constantes no nulos. Si ese factor constante es $a\in\mathbb Z$, entonces $a$ divide a todos los coeficientes de $p$. Como $p$ es primitivo, $a=\pm1$ y es una unidad en $\mathbb Z[x]$.
>>2. Para la otra dirección, supongamos que $p$ es irreducible en $\mathbb Z[x]$ y que $p=fg$ en $\mathbb Q[x]$, con $\deg f,\deg g\geq1$. Eliminando denominadores y dividiendo luego cada lista de coeficientes por su máximo común divisor, podemos escribir $f=uF$ y $g=vG$, donde $u,v\in\mathbb Q\setminus\{0\}$ y $F,G\in\mathbb Z[x]$ son primitivos.
>>3. Escribimos $uv=A/B$ con $A,B\in\mathbb Z$, $B>0$ y $\gcd(A,B)=1$. Entonces $Bp=AFG$. Cada coeficiente de $AFG$ es divisible por $B$; como $A$ y $B$ son coprimos, $B$ divide a cada coeficiente de $FG$.
>>4. Por [[Teorico 12#^ea730c|lema de Gauss]], $FG$ es primitivo, por lo que $B=1$. Ahora $p=AFG$ y la primitividad de $p$ obliga a $A=\pm1$. Así, $p=(\pm F)G$ es una factorización en $\mathbb Z[x]$ con ambos factores de grado positivo, contradicción.

^8f41d3

>[!corollary] Criterio de irreducibilidad por reducción
>Sea $f=\sum_{i=0}^{n}a_ix^i\in\mathbb Z[x]$ primitivo, con $n\geq1$. Sea $\ell$ un primo que no divide a $a_n$ y sea $\pi:\mathbb Z[x]\to\mathbb F_\ell[x]$ la reducción de coeficientes. Si $\pi(f)$ es irreducible en $\mathbb F_\ell[x]$, entonces $f$ es irreducible en $\mathbb Q[x]$.
>>[!Proof]-
>>1. Por [[Teorico 12#^8f41d3|irreducibilidad sobre enteros y racionales]], basta probar que $f$ es irreducible en $\mathbb Z[x]$. Supongamos que $f=gh$ es una factorización en factores no invertibles de $\mathbb Z[x]$.
>>2. Ningún factor puede ser constante: un factor constante no invertible dividiría todos los coeficientes de $f$, contradiciendo que $f$ es primitivo. Luego $\deg g,\deg h\geq1$.
>>3. Si $b_m,c_d$ son los coeficientes principales de $g,h$, entonces $a_n=b_mc_d$. Como $\ell$ no divide a $a_n$, no divide a $b_m$ ni a $c_d$. Por tanto, $\deg\pi(g)=\deg g\geq1$ y $\deg\pi(h)=\deg h\geq1$.
>>4. La igualdad $\pi(f)=\pi(g)\pi(h)$ contradice la irreducibilidad de $\pi(f)$. Así, $f$ es irreducible.

^c905ab

>[!example] $x^4-x+1$ es irreducible en $\mathbb Q[x]$
>Sea $p(x)=x^4-x+1$. Es primitivo y su reducción módulo $2$ es $\overline p(x)=x^4+x+1$.
>>[!Proof]-
>>1. En $\mathbb F_2$, $\overline p(0)=1$ y $\overline p(1)=1$. Por tanto, no tiene factores lineales.
>>2. Si un polinomio de grado $4$ sin factores lineales es reducible sobre un cuerpo, debe ser producto de dos factores de grado $2$. Los polinomios mónicos de grado $2$ sobre $\mathbb F_2$ son $x^2$, $x^2+1$, $x^2+x$ y $x^2+x+1$. Los primeros tres son reducibles: $x^2=x\cdot x$, $x^2+1=(x+1)^2$ y $x^2+x=x(x+1)$.
>>3. El único candidato es entonces $(x^2+x+1)^2=x^4+x^2+1$, que no coincide con $\overline p=x^4+x+1$. Por tanto, $\overline p$ es irreducible.
>>4. Aplicamos [[Teorico 12#^c905ab|criterio por reducción]] con $\ell=2$ y concluimos que $p$ es irreducible en $\mathbb Q[x]$.

>[!remark] Observación inicial de las fotos
>También se observa que $p$ no tiene raíces enteras: si $a^4-a+1=0$, entonces $a(a^3-1)=-1$, de modo que $a=1$ o $a=-1$; sin embargo, $p(1)=1$ y $p(-1)=3$. Esto por sí solo no descarta una factorización en dos cuadráticos.

>[!exercise] $x^5-x-1$
>Sea $f(x)=x^5-x-1\in\mathbb Z[x]$.
>1. Verificar que su reducción módulo $2$ cumple $\pi_2(f)=(x^2+x+1)(x^3+x^2+1)$ en $\mathbb F_2[x]$.
>2. Demostrar que su reducción módulo $3$ es irreducible en $\mathbb F_3[x]$ y concluir que $f$ es irreducible en $\mathbb Q[x]$.
