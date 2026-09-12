---
dateCreated: 2026-09-10
tags:
  - AlgebraicStructures
  - Rings
  - Ideals
  - RingHomomorphisms
  - FreeAlgebras
source: "[[EA-Teorico-8-10sept.pdf]]"
---

# Teórico 8 — Centro, productos, anillos libres, ideales y teoremas de isomorfismo

## Tarea y repaso

>[!exercise] Tarea para el final
>- **(a)** Demostrar que $p\nmid \binom{p^n k}{p^n}$ con $p$ primo y $\gcd(p,k)=1$.
>- **(b)** Dar la explicación del conteo de coloraciones de las caras del cubo con $6$ colores usando acciones de grupos (fórmula de Burnside).
>>[!Proof]-
>>- (a)
>>	1. Escribimos el coeficiente binomial como $$\binom{p^n k}{p^n} = \frac{p^n k}{p^n}\binom{p^n k - 1}{p^n - 1} = k \prod_{j=1}^{p^n-1}\frac{p^n k - j}{p^n - j}.$$
>>	2. Para cada $1\leq j < p^n$, la mayor potencia de $p$ que divide a $p^n k - j$ coincide con la mayor potencia de $p$ que divide a $j$, pues $j<p^n$: en términos de la valuación $p$-ádica, $v_p(p^n k - j) = v_p(j) = v_p(p^n - j)$.
>>	3. En consecuencia, $v_p\left(\frac{p^n k - j}{p^n - j}\right) = v_p(p^n k - j) - v_p(p^n - j) = 0$ para todo factor del producto.
>>	4. Por lo tanto, $v_p\left(\binom{p^n k}{p^n}\right) = v_p(k) + \sum_{j=1}^{p^n-1} v_p\left(\frac{p^n k - j}{p^n - j}\right) = v_p(k) = 0$, ya que $\gcd(p,k)=1$. Esto prueba que $p\nmid\binom{p^n k}{p^n}$.
>>- (b)
>>	1. El grupo de rotaciones propias del cubo es $G\cong S_4$, de orden $|G|=24$, actuando sobre el conjunto $X$ de las $6^6$ formas de asignar un color a cada una de las $6$ caras.
>>	2. Por el lema de Burnside, la cantidad de coloraciones no equivalentes bajo rotación es el número de órbitas $|X/G| = \frac{1}{|G|}\sum_{g\in G}|X^g|$.
>>	3. Clasificando las 24 rotaciones por tipo de eje geométrico: la identidad fija las $6^6$ coloraciones; las 6 rotaciones de $90^\circ$ fijan $6^3$ coloraciones; las 3 rotaciones de $180^\circ$ por caras opuestas fijan $6^4$; las 8 rotaciones de $120^\circ$ por diagonales fijan $6^2$; y las 6 rotaciones de $180^\circ$ por aristas opuestas fijan $6^3$.
>>	4. Sumando los puntos fijos se obtiene $|X/G| = \frac{1}{24}(6^6 + 6\cdot 6^3 + 3\cdot 6^4 + 8\cdot 6^2 + 6\cdot 6^3) = \frac{1}{24}(46656 + 1296 + 3888 + 288 + 1296) = \frac{53424}{24} = 2226$.

>[!remark] Repaso: Álgebra de grupo $R[G]$
>Si $R$ es un anillo y $G$ un grupo, el álgebra de grupo es $$R[G]=\bigoplus_{g\in G} R\cdot g,$$ es decir, el $R$-módulo libre con base indexada por los elementos de $G$. Sus elementos son sumas formales finitas $\sum_{g\in G} r_g g$ con $r_g\in R$.
>La multiplicación se define distribuyendo y utilizando el producto del grupo en la base: $$\left(\sum_{g\in G} r_g g\right)\left(\sum_{h\in G} s_h h\right) = \sum_{g,h\in G}(r_g s_h)(gh).$$ El neutro multiplicativo es $1_R\cdot e_G$.

## Centro, dominios íntegros y anillos de división

>[!definition] Centro de un anillo
>Sea $R$ un anillo. El **centro** de $R$ es el conjunto $$Z(R)=\{r\in R\mid rx=xr\ \forall x\in R\}.$$

>[!remark] Conmutatividad
>Un anillo $R$ es conmutativo si y sólo si $R=Z(R)$. En general, $Z(R)$ es un subanillo conmutativo de $R$.

>[!exercise] Centro del anillo de matrices $M_n(R)$
>Demostrar que para cualquier anillo $R$, el centro del anillo de matrices $M_n(R)$ está formado por los múltiplos escalares de la matriz identidad cuyos coeficientes están en el centro de $R$: $$Z(M_n(R)) = \{\lambda I_n\mid \lambda\in Z(R)\}.$$
>>[!Proof]-
>>1. Denotemos por $E_{ij}\in M_n(R)$ a la matriz con un $1$ en la posición $(i,j)$ y ceros en las demás. Toda matriz $A=(a_{kl})\in M_n(R)$ cumple $(AE_{ij})_{kl} = a_{ki}\delta_{jl}$ y $(E_{ij}A)_{kl} = \delta_{ik}a_{jl}$.
>>2. Si $A\in Z(M_n(R))$, entonces $AE_{ij} = E_{ij}A$ para todos los índices $1\leq i,j\leq n$.
>>3. Mirando la fila $i$ y la columna $j$ en ambos productos: para $i\neq j$, la igualdad $(AE_{ii})_{ii} = (E_{ii}A)_{ii}$ da $a_{ii} = a_{ii}$, pero en la posición $(k,i)$ con $k\neq i$ se tiene $(AE_{ii})_{ki} = a_{ki}$ mientras que $(E_{ii}A)_{ki} = 0$, lo que fuerza $a_{ki}=0$. Por ende, $A$ es una matriz diagonal.
>>4. Comparando las matrices diagonales con $E_{ij}$: la igualdad $AE_{ij}=E_{ij}A$ implica que la fila $i$ de $AE_{ij}$ tiene a $a_{ii}$ en la columna $j$, mientras que la fila $i$ de $E_{ij}A$ tiene a $a_{jj}$ en la columna $j$; luego $a_{ii}=a_{jj}$ para todo $i,j$. Así, $A=\lambda I_n$ para algún $\lambda\in R$.
>>5. Finalmente, conmutar con matrices escalares $\mu I_n$ (o con $\mu E_{11}$) exige que $\lambda \mu = \mu \lambda$ para todo $\mu\in R$, lo que significa $\lambda\in Z(R)$. Recíprocamente, toda matriz de la forma $\lambda I_n$ con $\lambda\in Z(R)$ conmuta con cualquier matriz de $M_n(R)$.

>[!definition] Dominio íntegro
>Un anillo $R$ se dice **dominio íntegro** (o simplemente dominio si no es conmutativo) si $1\neq 0$ y no posee divisores de cero; es decir, para todos $a,b\in R$: $$ab=0 \implies a=0\text{ ó }b=0.$$ Equivalentemente, si $a\neq 0$, entonces $ax=0\implies x=0$ y $xa=0\implies x=0$.

>[!definition] Anillo de división y cuerpo
>Un anillo $R$ con $1\neq 0$ se dice **anillo de división** (o *cuerpo alabeado*) si todo elemento no nulo es inversible: $$\forall x\in R\setminus\{0\},\quad \exists y\in R\quad\text{tal que}\quad xy=yx=1.$$
>Un **cuerpo** es un anillo de división que además es conmutativo.

>[!example] Ejemplos
>1. Si $X$ es un espacio topológico, el conjunto de funciones continuas $$C(X)=\{f\colon X\to\mathbb R\mid f\text{ es continua}\}$$ es un anillo conmutativo con las operaciones puntuales $(f+g)(x)=f(x)+g(x)$ y $(fg)(x)=f(x)g(x)$. No es un dominio íntegro si $X$ admite funciones continuas con soportes disjuntos no vacíos.
>2. Si $\mathbb k$ es un cuerpo, el **cuerpo de funciones racionales** en una indeterminada es $$\mathbb k(x)=\left\{\frac{g(x)}{f(x)}\Bigm| g,f\in\mathbb k[x],\ f\neq 0\right\}.$$ Es el cuerpo de fracciones del dominio de polinomios $\mathbb k[x]$.

## Producto y suma directa de anillos

>[!definition] Producto de anillos
>Sea $I$ un conjunto de índices y $\{R_i\}_{i\in I}$ una familia de anillos. El **producto directo** es el conjunto cartesiano $$\prod_{i\in I} R_i = \left\{f\colon I\to\bigcup_{i\in I}R_i\Bigm| f(i)\in R_i\ \forall i\in I\right\}.$$
>Se le da estructura de anillo definiendo las operaciones coordenada a coordenada:
>1. Suma: $(f+g)(i) = f(i)+g(i)$ para todo $i\in I$, con neutro aditivo $0(i)=0_{R_i}$.
>2. Producto: $(f\cdot g)(i) = f(i)g(i)$ para todo $i\in I$.
>3. Unidad: el neutro multiplicativo es la función $1(i)=1_{R_i}$ para todo $i\in I$.

>[!lemma] Propiedad universal del producto de anillos
>1. El producto $\prod_{i\in I} R_i$ es un anillo, y para cada $j\in I$, la proyección canónica $$\pi_j\colon \prod_{i\in I} R_i\longrightarrow R_j,\qquad f\longmapsto f(j),$$ es un epimorfismo (morfismo sobreyectivo) de anillos.
>2. **Propiedad universal:** Si $S$ es un anillo y $\{\varphi_j\colon S\to R_j\}_{j\in I}$ es una familia de morfismos de anillos, entonces existe un **único** morfismo de anillos $\hat{\varphi}\colon S\to\prod_{i\in I}R_i$ tal que $\pi_j\circ\hat{\varphi}=\varphi_j$ para todo $j\in I$.
>$$\begin{aligned}\begin{array}{ccc} & & \prod_{i\in I} R_i \\ & \overset{\hat{\varphi}}{\nearrow} & \Big\downarrow \pi_j \\ S & \underset{\varphi_j}{\longrightarrow} & R_j \end{array}\end{aligned}$$
>>[!Proof]-
>>1. Las operaciones en $\prod_{i\in I} R_i$ se definen coordenada a coordenada; como cada $R_i$ satisface la asociatividad, distributividades y existencia de elementos neutros $0_{R_i}$ y $1_{R_i}$, estas identidades se heredan puntualmente en el producto.
>>2. Cada proyección $\pi_j$ satisface $\pi_j(f+g)=f(j)+g(j)=\pi_j(f)+\pi_j(g)$, $\pi_j(fg)=f(j)g(j)=\pi_j(f)\pi_j(g)$ y $\pi_j(1)=1(j)=1_{R_j}$, de modo que es un morfismo de anillos. Además es sobreyectivo porque dado $r\in R_j$, la función $f$ con $f(j)=r$ y $f(i)=0_{R_i}$ para $i\neq j$ cumple $\pi_j(f)=r$.
>>3. Para la existencia de $\hat{\varphi}$, definimos para cada $s\in S$ la función $\hat{\varphi}(s)\in\prod_{i\in I}R_i$ dada por $(\hat{\varphi}(s))(i)=\varphi_i(s)$ para cada $i\in I$.
>>4. Comprobamos que $\hat{\varphi}$ es morfismo de anillos: $(\hat{\varphi}(s+s'))(i)=\varphi_i(s+s')=\varphi_i(s)+\varphi_i(s')=(\hat{\varphi}(s))(i)+(\hat{\varphi}(s'))(i)$, $(\hat{\varphi}(ss'))(i)=\varphi_i(ss')=\varphi_i(s)\varphi_i(s')=(\hat{\varphi}(s))(i)(\hat{\varphi}(s'))(i)$, y $(\hat{\varphi}(1_S))(i)=\varphi_i(1_S)=1_{R_i}$. Además conmuta con las proyecciones: $(\pi_j\circ\hat{\varphi})(s)=(\hat{\varphi}(s))(j)=\varphi_j(s)$.
>>5. Para la unicidad, si $\psi\colon S\to\prod_{i\in I}R_i$ satisface $\pi_j\circ\psi = \varphi_j$ para todo $j\in I$, entonces para cada $s\in S$ y cada $j\in I$ se tiene $(\psi(s))(j) = (\pi_j\circ\psi)(s) = \varphi_j(s) = (\hat{\varphi}(s))(j)$, lo que fuerza $\psi(s)=\hat{\varphi}(s)$ para todo $s\in S$.

>[!exercise] ¿Se puede definir un producto semidirecto de anillos?
>En grupos, el producto semidirecto $N\rtimes_\varphi H$ se construye dotando al producto cartesiano de una multiplicación que involucra la acción de $H$ sobre $N$ por automorfismos. ¿Existe una noción análoga para anillos?
>>[!remark]- Discusión teórica
>>En teoría de anillos, no es suficiente tener una acción por automorfismos porque la distributividad impone restricciones severas sobre la suma y el producto cruzado. La construcción análoga al producto semidirecto en álgebra de anillos surge cuando se toma un anillo $R$ y un $(R,R)$-bimódulo $M$: se define el **producto semidirecto** (o *extensión de cuadrado cero*, o extensión trivial de Dorroh) $R\ltimes M$ sobre el grupo aditivo $R\oplus M$ mediante $$(r,m)\cdot(r',m') = (rr',\, rm' + mr').$$ En esta estructura, $M\cong \{0\}\times M$ es un ideal bilátero cuyo producto con sí mismo es nulo ($M^2=0$), jugando el rol del núcleo normal.

## Anillo libre generado por un conjunto

>[!definition] Anillo libre $\mathbb Z\langle X\rangle$
>Sea $X$ un conjunto de variables o símbolos no conmutativos.
>1. Sea $\widehat{X}$ el monoide libre de todas las palabras finitas con letras en $X$: $$\widehat{X}=\{x_1 x_2 \dots x_m\mid m\in\mathbb N_0,\ x_i\in X\}\cup\{1\},$$ donde la palabra vacía de longitud $0$ actúa como el neutro multiplicativo $1$ y la operación es la concatenación de palabras.
>2. El **anillo libre** generado por $X$, denotado $\mathcal F(X) = \mathbb Z\langle X\rangle$, es el álgebra de monoide $\mathbb Z[\widehat{X}]$: $$\mathbb Z\langle X\rangle = \bigoplus_{w\in\widehat{X}}\mathbb Z\cdot w.$$
>3. Un elemento típico es un polinomio con coeficientes enteros en variables que no conmutan: sumas finitas de la forma $\sum \lambda_w w$ con $\lambda_w\in\mathbb Z$ y $w\in\widehat{X}$.
>4. El producto se define multiplicando los coeficientes en $\mathbb Z$ y concatenando las palabras: $$(\lambda\, u)\cdot(\mu\, v) = (\lambda\mu)\,(uv),\qquad\text{por ejemplo:}\quad (2\,xyz)\cdot(3\,xy^2) = 6\,xyzxy^2.$$

>[!theorem] Propiedad universal del anillo libre
>Existe una función canónica inyectiva $\iota\colon X\hookrightarrow\mathbb Z\langle X\rangle$ (que identifica cada letra $x\in X$ con la palabra de longitud uno $1\cdot x$) con la siguiente propiedad universal:
>Para todo anillo $R$ y toda función $f\colon X\to R$, existe un **único** morfismo de anillos $\widetilde{f}\colon \mathbb Z\langle X\rangle\to R$ tal que conmuta el diagrama:
>$$\begin{aligned}\begin{array}{ccc} X & \overset{\iota}{\hookrightarrow} & \mathbb Z\langle X\rangle \\ & \underset{f}{\searrow} & \Big\downarrow \widetilde{f} \\ & & R \end{array}\end{aligned}$$
>>[!Proof]-
>>1. Para la existencia, como $\widetilde{f}$ debe preservar la unidad y la multiplicación, la imagen de una palabra $w=x_1\dots x_m\in\widehat{X}$ está obligada a ser $\widetilde{f}(w)=f(x_1)\dots f(x_m)\in R$, con $\widetilde{f}(1)=1_R$.
>>2. Como $\widetilde{f}$ debe preservar la suma y el producto por enteros (propiedad de morfismo de grupos aditivos), la imagen de un elemento general $\sum_{w\in\widehat{X}}\lambda_w w$ queda definida de forma única por $$\widetilde{f}\left(\sum_{w\in\widehat{X}}\lambda_w w\right) = \sum_{w\in\widehat{X}}\lambda_w f(x_{w,1})\dots f(x_{w,m}).$$
>>3. Se verifica directamente que esta asignación respeta la suma, el producto y la unidad, y que $(\widetilde{f}\circ\iota)(x)=\widetilde{f}(x)=f(x)$ para todo $x\in X$.
>>4. La unicidad es inmediata porque $X$ genera a $\mathbb Z\langle X\rangle$ como anillo unital: cualquier otro morfismo que coincida con $f$ sobre $X$ debe coincidir con $\widetilde{f}$ sobre todas las palabras y sus combinaciones lineales.

## Ideales y anillos cocientes

>[!definition] Ideales
>Sea $R$ un anillo y sea $I\subseteq R$ un subgrupo aditivo de $(R,+)$.
>1. $I$ es un **ideal a derecha** si para todo $x\in R$ y todo $r\in I$ se tiene $rx\in I$ (es decir, $IR\subseteq I$).
>2. $I$ es un **ideal a izquierda** si para todo $x\in R$ y todo $r\in I$ se tiene $xr\in I$ (es decir, $RI\subseteq I$).
>3. $I$ es un **ideal bilátero** (o simplemente un **ideal** de $R$) si es simultáneamente ideal a izquierda y a derecha; es decir, $RI\subseteq I$ e $IR\subseteq I$.

>[!proposition] Buena definición del producto en el cociente
>Sea $R$ un anillo y sea $I\subseteq R$ un subgrupo aditivo. En el grupo cociente $(R/I,+)$, cuyas clases denotamos $[r]=r+I$, se quiere definir la multiplicación por $$[r][s] = [rs],\qquad\text{con}\quad [1]=1_{R/I}.$$
>Esta multiplicación está bien definida si y sólo si $I$ es un **ideal bilátero**.
>>[!Proof]-
>>1. Para que la multiplicación $[r][s]=[rs]$ no dependa de la elección de los representantes, debemos exigir que si $[r]=[r']$ y $[s]=[s']$, entonces $[rs]=[r's']$.
>>2. La condición $[r]=[r']$ significa $r-r'\in I$, y $[s]=[s']$ significa $s-s'\in I$. La diferencia de los productos se descompone como $$r's' - rs = r'(s'-s) + (r'-r)s.$$
>>3. Si fijamos $s=s'$, la condición se reduce a que $(r'-r)s\in I$ para todo $r'-r\in I$ y todo $s\in R$. Esto exige que $I$ sea un ideal a derecha ($IR\subseteq I$).
>>4. Si fijamos $r=r'$, la condición se reduce a que $r'(s'-s)\in I$ para todo $s'-s\in I$ y todo $r'\in R$. Esto exige que $I$ sea un ideal a izquierda ($RI\subseteq I$).
>>5. Recíprocamente, si $I$ es bilátero, entonces tanto $r'(s'-s)\in RI\subseteq I$ como $(r'-r)s\in IR\subseteq I$; como $I$ es subgrupo aditivo, su suma pertenece a $I$, luego $[rs]=[r's']$. Por lo tanto, el producto está bien definido si y sólo si $I$ es bilátero.

>[!lemma] El anillo cociente
>Sea $R$ un anillo e $I\subseteq R$ un ideal bilátero. Entonces $R/I$ es un anillo con las operaciones inducidas, y la proyección canónica $$\pi\colon R\longrightarrow R/I,\qquad r\longmapsto [r],$$ es un epimorfismo de anillos con $\operatorname{Ker}(\pi)=I$.
>>[!Proof]-
>>1. Como $I$ es subgrupo del grupo abeliano $(R,+)$, $(R/I,+)$ es un grupo abeliano bien definido.
>>2. Por la proposición anterior, el producto $[r][s]=[rs]$ está bien definido en $R/I$.
>>3. La asociatividad y distributividad del producto en $R/I$ se heredan directamente de las de $R$: $$[r]([s][t]) = [r][st] = [r(st)] = [(rs)t] = [rs][t] = ([r][s])[t],$$ y análogamente $[r]([s]+[t]) = [r][s+t] = [r(s+t)] = [rs+rt] = [rs]+[rt] = [r][s]+[r][t]$.
>>4. El elemento $[1]$ cumple $[1][r]=[1\cdot r]=[r]$ y $[r][1]=[r\cdot 1]=[r]$ para todo $[r]\in R/I$, luego es la unidad de $R/I$.
>>5. La aplicación $\pi$ preserva sumas, productos y la unidad por construcción de las operaciones en $R/I$, y es claramente sobreyectiva con $\operatorname{Ker}(\pi)=\{r\in R\mid [r]=[0]\}=\{r\in R\mid r\in I\}=I$.

>[!theorem] Primer teorema de isomorfismo para anillos
>Sean $R, S$ anillos y $f\colon R\to S$ un morfismo de anillos. Entonces:
>1. $\operatorname{Im}(f)\subseteq S$ es un subanillo de $S$.
>2. $\operatorname{Ker}(f)\subseteq R$ es un ideal bilátero de $R$, y existe un único isomorfismo de anillos $$\varphi\colon R/\operatorname{Ker}(f)\xrightarrow{\ \sim\ }\operatorname{Im}(f)\qquad\text{tal que}\quad \varphi([r])=f(r).$$
>3. Si $J\subseteq \operatorname{Ker}(f)$ es un ideal bilátero de $R$, existe un **único** morfismo de anillos $\widehat{f}\colon R/J\to S$ tal que $\widehat{f}\circ\pi = f$:
>$$\begin{aligned}\begin{array}{ccc} R & \overset{f}{\longrightarrow} & S \\ \Big\downarrow \pi & \nearrow \widehat{f} & \\ R/J & & \end{array}\end{aligned}$$
>>[!Proof]-
>>1. Para (1), como $f$ es morfismo de anillos, $1_S = f(1_R)\in\operatorname{Im}(f)$, y para $f(a),f(b)\in\operatorname{Im}(f)$ se tiene $f(a)-f(b)=f(a-b)\in\operatorname{Im}(f)$ y $f(a)f(b)=f(ab)\in\operatorname{Im}(f)$; por ende $\operatorname{Im}(f)$ es un subanillo de $S$.
>>2. Para (2), el núcleo aditivo $\operatorname{Ker}(f)=\{x\in R\mid f(x)=0\}$ es un subgrupo de $(R,+)$. Para $x\in\operatorname{Ker}(f)$ y $r\in R$: $$f(rx)=f(r)f(x)=f(r)\cdot 0=0\implies rx\in\operatorname{Ker}(f),$$ y $$f(xr)=f(x)f(r)=0\cdot f(r)=0\implies xr\in\operatorname{Ker}(f).$$ Luego $\operatorname{Ker}(f)$ es un ideal bilátero.
>>3. Definimos $\varphi\colon R/\operatorname{Ker}(f)\to\operatorname{Im}(f)$ por $\varphi([r])=f(r)$. Está bien definida porque si $[r]=[s]$, entonces $r-s\in\operatorname{Ker}(f)$, de donde $f(r-s)=0$ y $f(r)=f(s)$.
>>4. Es morfismo porque hereda las operaciones de $f$, y es sobreyectiva por definición de $\operatorname{Im}(f)$.
>>5. Es inyectiva porque si $\varphi([r])=0$, entonces $f(r)=0$, de donde $r\in\operatorname{Ker}(f)$ y por tanto $[r]=[0]$. Así, $\varphi$ es un isomorfismo.
>>6. Para (3), definimos obligadamente $\widehat{f}([x])=f(x)$ para satisfacer $\widehat{f}(\pi(x))=f(x)$. Si $[x]=[y]$, entonces $x-y\in J\subseteq\operatorname{Ker}(f)$, por lo que $f(x-y)=0$ y $f(x)=f(y)$, asegurando la buena definición. La unicidad se sigue de que las clases cubren todo $R/J$.

>[!definition] Ideal generado por un conjunto
>Sea $R$ un anillo y $X\subseteq R$ un subconjunto arbitrario.
>1. El **ideal a izquierda generado por $X$** es el conjunto de combinaciones lineales finitas con coeficientes en $R$ a izquierda: $$RX = \left\{\sum_{i=1}^m r_i x_i\Bigm| m\in\mathbb N_0,\ r_i\in R,\ x_i\in X\right\}.$$
>2. El **ideal a derecha generado por $X$** es: $$XR = \left\{\sum_{i=1}^m x_i r_i\Bigm| m\in\mathbb N_0,\ r_i\in R,\ x_i\in X\right\}.$$
>3. El **ideal bilátero generado por $X$** es: $$RXR = \langle X\rangle = \left\{\sum_{i=1}^m r_i x_i s_i\Bigm| m\in\mathbb N_0,\ r_i,s_i\in R,\ x_i\in X\right\}.$$

>[!remark] Caso conmutativo
>Si el anillo $R$ es conmutativo, $r_i x_i s_i = (r_i s_i)x_i$, por lo que los ideales a izquierda, a derecha y bilátero coinciden: $$RX = XR = RXR = \langle X\rangle.$$

## Ejemplos de cocientes y morfismos

>[!example] Morfismo de evaluación y $\mathbb k[x]/\langle x-\lambda\rangle\cong\mathbb k$
>Sea $\mathbb k$ un cuerpo y sea $\lambda\in\mathbb k$ un elemento fijado. Consideramos el morfismo de evaluación: $$\operatorname{Ev}_\lambda\colon\mathbb k[x]\longrightarrow\mathbb k,\qquad P(x)\longmapsto P(\lambda).$$
>1. $\operatorname{Ev}_\lambda$ es un morfismo de anillos sobreyectivo (para cualquier $c\in\mathbb k$, el polinomio constante $c$ evalúa en $c$).
>2. El núcleo es el conjunto de polinomios que tienen a $\lambda$ como raíz: por el algoritmo de división por el polinomio mónico $x-\lambda$, todo $P(x)$ se escribe $P(x)=q(x)(x-\lambda)+P(\lambda)$; luego $P(\lambda)=0\iff P(x)\in\langle x-\lambda\rangle$.
>3. Por el primer teorema de isomorfismo, $$\mathbb k[x]/\langle x-\lambda\rangle \cong \mathbb k.$$

>[!example] Álgebra libre vs. Álgebra conmutativa de polinomios
>Sea $\mathbb k$ un cuerpo. El álgebra libre en dos variables es $\mathbb k\langle x,y\rangle$, donde $xy\neq yx$.
>Si cocientamos por el ideal bilátero generado por el conmutador $[x,y]=xy-yx$: $$\mathbb k[x,y]\cong \mathbb k\langle x,y\rangle/\langle xy-yx\rangle.$$
>En el anillo cociente se impone la relación $\overline{xy-yx}=0$, es decir, $\bar{x}\bar{y}=\bar{y}\bar{x}$.
>Por ejemplo: la palabra $\overline{xyx^2y^3}$ en el cociente se reordena usando conmutatividad como $$\overline{xyx^2y^3} = \bar{x}\bar{y}\bar{x}^2\bar{y}^3 = \bar{x}^3\bar{y}^4,$$ recuperando exactamente el álgebra de polinomios conmutativos usual.

>[!example] Variedades algebraicas y puntos: $\mathbb C[x,y]/\langle x^2+y^2-1\rangle$
>Consideramos el anillo cociente $R=\mathbb C[x,y]/\langle x^2+y^2-1\rangle$ y nos proponemos determinar todos los morfismos de anillos de $R$ en el cuerpo $\mathbb C$: $$\operatorname{Hom}_{\mathrm{Ring}}\left(\mathbb C[x,y]/\langle x^2+y^2-1\rangle,\ \mathbb C\right).$$
>1. Por la propiedad universal del álgebra de polinomios y del cociente, dar un morfismo $f\colon R\to\mathbb C$ equivale a elegir los valores $a=f(\bar{x})\in\mathbb C$ y $b=f(\bar{y})\in\mathbb C$ tales que anulen el generador del ideal: $$f(\bar{x}^2+\bar{y}^2-1) = a^2+b^2-1=0.$$
>2. Si nos restringimos a puntos reales $(a,b)\in\mathbb R^2$, la condición $a^2+b^2=1$ describe exactamente la circunferencia unidad $S^1$.
>3. Cada punto $z=(a,b)$ en la curva define un morfismo de evaluación $P_z\colon \mathbb C[x,y]\to\mathbb C$, $p\mapsto p(a,b)$, que se anula sobre $\langle x^2+y^2-1\rangle$ y por tanto factoriza de forma única a través del cociente:
>$$\begin{aligned}\begin{array}{ccc} \mathbb C[x,y] & \overset{P_z}{\longrightarrow} & \mathbb C \\ \Big\downarrow \pi & \nearrow \widehat{P}_z & \\ \mathbb C[x,y]/\langle x^2+y^2-1\rangle & & \end{array}\end{aligned}$$
>4. Se obtiene así una biyección entre los puntos de la curva geométrica y los morfismos de anillos: $$\operatorname{Hom}_{\mathrm{Ring}}\left(\mathbb C[x,y]/\langle x^2+y^2-1\rangle,\ \mathbb C\right) \longleftrightarrow \{(a,b)\in\mathbb C^2\mid a^2+b^2=1\}.$$

>[!remark] Filosofía geométrica: Dualidad entre espacios y anillos
>Este ejemplo ilustra el puente fundamental entre la geometría y el álgebra abstracta (la base de la geometría algebraica y la dualidad de Gelfand):
>
>| Espacios geométricos / topológicos | Anillos de funciones |
>| :--- | :--- |
>| Espacio $X$ | Anillo de funciones $C(X)$, $\mathcal O(X)$ o $\mathbb k[X]$ |
>| Puntos de $X$ | Morfismos al cuerpo base $\operatorname{Hom}_{\mathrm{Ring}}(R,\mathbb C)$ |
>
>Conocer el anillo de coordenadas $R$ de una variedad es equivalente a conocer los puntos geométricos del espacio y las funciones sobre él.
