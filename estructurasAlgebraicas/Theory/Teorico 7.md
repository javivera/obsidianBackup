---
dateCreated: 2026-09-04
tags:
  - AlgebraicStructures
  - Groups
  - SemidirectProduct
  - Rings
source: "[[EA-Teorico-7-4sept.pdf]]"
---

# Teórico 7 — Producto semidirecto interno. Anillos

## Del producto semidirecto externo al interno

>[!definition] Producto semidirecto externo
>Sean $P$ y $Q$ grupos y sea un morfismo $$\varphi\colon P\longrightarrow\operatorname{Aut}(Q).$$ El **producto semidirecto** de $Q$ por $P$ asociado a $\varphi$ es el conjunto $Q\times P$ con la operación $$ (q,x)(r,y)=\bigl(q\,\varphi(x)(r),xy\bigr). $$ Se denota $Q\rtimes_\varphi P$.

>[!Remark] Acción y conjugación en un producto semidirecto
>En todo producto semidirecto $Q\rtimes_\varphi P$, la acción $\varphi:P\to\operatorname{Aut}(Q)$ se recupera mediante conjugación de las copias canónicas de $P$ y $Q$: $$(e_Q,x)(q,e_P)(e_Q,x^{-1})=(\varphi(x)(q),e_P).$$ Por lo tanto, bajo la identificación canónica $q\equiv(q,e_P)$ y $x\equiv(e_Q,x)$, podemos escribir simplemente $$\varphi(x)(q)=xqx^{-1}.$$ En el producto semidirecto externo primero se da $\varphi$ y luego se construye el grupo; en el teorema de reconocimiento ocurre al revés: a partir de $P,Q\leq G$ se recupera $\varphi$ usando la conjugación en $G$.

>[!proposition] Propiedades de las copias canónicas
>En $Q\rtimes_\varphi P$ consideramos las aplicaciones $$\iota_Q\colon Q\longrightarrow Q\rtimes_\varphi P,\qquad q\longmapsto(q,e_P),$$ $$\iota_P\colon P\longrightarrow Q\rtimes_\varphi P,\qquad x\longmapsto(e_Q,x).$$ Ambas son inyecciones y morfismos de grupos; identificamos entonces $Q$ y $P$ con las copias canónicas $$Q_0:=Q\times\{e_P\},\qquad P_0:=\{e_Q\}\times P.$$ Bajo estas identificaciones:
>1. $Q_0$ es un subgrupo normal de $Q\rtimes_\varphi P$.
>2. $P_0\cap Q_0=\{(e_Q,e_P)\}$.
>3. $Q_0P_0=Q\rtimes_\varphi P$.
>>[!Proof]-
>>1. Las aplicaciones $\iota_Q$ y $\iota_P$ son morfismos de grupos porque $$\iota_Q(q)\iota_Q(r)=(q,e_P)(r,e_P)=(qr,e_P)=\iota_Q(qr)$$ y $$\iota_P(x)\iota_P(y)=(e_Q,x)(e_Q,y)=(e_Q,xy)=\iota_P(xy),$$ usando $\varphi(e_P)=\operatorname{id}_Q$ y $\varphi(x)(e_Q)=e_Q$.
>>2. Ambas aplicaciones son inyectivas porque conservan las coordenadas: $\iota_Q(q)=(q,e_P)$ y $\iota_P(x)=(e_Q,x)$ determinan $q$ y $x$. Por lo tanto $Q_0$ y $P_0$ son subgrupos de $Q\rtimes_\varphi P$.
>>3. Para (1), sea $x\in P$ y $q\in Q$. Usando la regla del producto dos veces, $$ (e_Q,x)(q,e_P)(e_Q,x^{-1})=(\varphi(x)(q),e_P)\in Q_0. $$
>>4. La conjugación por $(e_Q,x)$ es una biyección (su inversa es la conjugación por $(e_Q,x^{-1})$), así que la inclusión del paso 3 implica $(e_Q,x)Q_0(e_Q,x^{-1})=Q_0$ para todo $x\in P$. Como todo $g\in Q\rtimes_\varphi P$ se escribe $g=(q,e_P)(e_Q,x)$, la conjugación por $g$ es composición de dos conjugaciones que preservan $Q_0$; por lo tanto $Q_0\trianglelefteq Q\rtimes_\varphi P$.
>>5. Para (2), si $(q,e_P)=(e_Q,x)$, entonces la segunda coordenada da $e_P=x$ y la primera da $q=e_Q$; luego $P_0\cap Q_0=\{(e_Q,e_P)\}$.
>>6. Para (3), $$ (q,e_P)(e_Q,x)=(q,x), $$ de modo que todo elemento de $Q\rtimes_\varphi P$ pertenece a $Q_0P_0$.

>[!remark] Relación con el reconocimiento interno
>Esta proposición da las propiedades que aparecen como hipótesis en el teorema de reconocimiento: el primer factor es normal, la intersección de los factores es trivial y todo elemento del producto se descompone como un elemento de $Q_0$ seguido de uno de $P_0$.

>[!theorem] Reconocimiento del producto semidirecto
>Sean $P,Q\leq G$. Si
>1. $Q\trianglelefteq G$;
>2. $P\cap Q=\{e\}$;
>3. $QP=G$;
>
>entonces existe una acción $\varphi\colon P\to\operatorname{Aut}(Q)$ tal que $$G\cong Q\rtimes_\varphi P.$$
>
>>[!Proof]-
>>1. Como $Q\trianglelefteq G$, la conjugación por elementos de $P\subseteq G$ preserva $Q$ (osea $xqx^{-1}\in Q$ para todo $p\in P$). Por lo tanto está bien definida la acción $$\varphi\colon P\longrightarrow\operatorname{Aut}(Q),\qquad \varphi(x)(q)=xqx^{-1}.$$que es un morfismo porque $\varphi(xy)(q)=xyq(xy)^{-1}=\varphi(x)(\varphi(y)(q)).$
>>2. Definimos $$\Psi\colon Q\rtimes_\varphi P\longrightarrow G,\qquad \Psi(q,x)=qx.$$
>>3. **Sobreyectividad.** Se sigue directamente de $QP=G$.
>>4. **Inyectividad.** Si $qx=q'x'$, entonces $q'^{-1}q=x'x^{-1}$. El miembro izquierdo pertenece a $Q$ y el derecho a $P$; como $P\cap Q=\{e\}$, ambos son $e$. Luego $q=q'$ y $x=x'$.
>>5. **Compatibilidad con el producto.** Para $q,r\in Q$ y $x,y\in P$, $$\begin{aligned}\Psi\bigl((q,x)(r,y)\bigr)&=\Psi\bigl(q\varphi(x)(r),xy\bigr)\\&=q\,xrx^{-1}xy\\&=qxry\\&=\Psi(q,x)\Psi(r,y).\end{aligned}$$así, $\Psi$ es un isomorfismo.

>[!lemma] La acción es única respecto de la identificación natural
>El teorema garantiza *existencia* de $\varphi$. Más aún: si fijamos los subgrupos $Q,P\leq G$ y exigimos que la identificación sea el mapa natural $$\Psi(q,x)=qx,$$ entonces la acción es **única** y es la conjugación: no hay otra $\psi\colon P\to\operatorname{Aut}(Q)$ con $G\cong Q\rtimes_\psi P$ vía ese mismo $\Psi$. (Sin fijar la identificación, la unicidad es falsa: otras acciones pueden dar grupos isomorfos vía isomorfismos que mueven los factores.)
>>[!Proof]-
>>1. Sea $\psi\colon P\to\operatorname{Aut}(Q)$ una acción cualquiera tal que el mapa $$\Psi\colon Q\rtimes_\psi P\longrightarrow G,\qquad \Psi(q,x)=qx$$ es un morfismo de grupos. Basta pedir morfismo; la sobreyectividad e inyectividad no intervienen.
>>2. Tomemos $r\in Q$ y $x\in P$. En $Q\rtimes_\psi P$, el producto de las copias es $$(e_Q,x)(r,e_P)=\bigl(\psi(x)(r),\,x\bigr).$$ Aplicando $\Psi$ a ambos miembros: $$\Psi\bigl((e_Q,x)(r,e_P)\bigr)=\psi(x)(r)\,x.$$
>>3. Por otra parte, como $\Psi$ es morfismo, $$\Psi\bigl((e_Q,x)(r,e_P)\bigr)=\Psi(e_Q,x)\,\Psi(r,e_P)=x\,r.$$
>>4. Igualando los pasos 2 y 3: $$\psi(x)(r)\,x=x\,r,$$ y cancelando $x$ a derecha (en el grupo $G$) se obtiene $$\psi(x)(r)=xrx^{-1}\qquad\text{para todo }r\in Q,\ x\in P.$$
>>5. Por lo tanto $\psi$ coincide con la acción por conjugación del teorema. Como $r$ y $x$ eran arbitrarios, no hay ninguna otra opción: la acción es única respecto de $\Psi(q,x)=qx$.
>>6. El cómputo es interno al producto externo y vale igualmente allí: $$ (e_Q,x)(q,e_P)(e_Q,x^{-1})=(\psi(x)(q),e_P), $$ (que es internamente como decir $xqx^{-1}=\psi(x)(q)$) de modo que la acción se recupera conjugando las copias canónicas: el dato externo $\psi$ y la operación interna de conjugación contienen la misma información.

>[!Remark] ¿Por qué aparecen dos 'mundos' en el producto semidirecto?
>El teorema de reconocimiento compara dos formas distintas de describir la misma estructura de grupo.
>- **Mundo interno.** 
>	1. Partimos de un grupo $G$ que ya contiene subgrupos $Q,P\leq G$ tales que $$Q\trianglelefteq G,\qquad Q\cap P=\{e\},\qquad QP=G.$$
>	2. Como $Q\trianglelefteq G$, la conjugación por cualquier $x\in P$ preserva $Q$: $$xqx^{-1}\in Q\qquad\text{para todo }q\in Q.$$
>	3. Por lo tanto podemos definir $$\varphi:P\longrightarrow\operatorname{Aut}(Q),\qquad \varphi(x)(q)=xqx^{-1}.$$
>	4. Hasta este punto todo ocurre dentro de $G$: los elementos $q,x$ son literalmente elementos de los subgrupos $Q,P\leq G$.
>- **Mundo externo.** 
>	1. Usando solamente los grupos $Q$, $P$ y la acción $\varphi$, construimos un nuevo grupo $$Q\rtimes_\varphi P,$$ cuyo conjunto subyacente es $Q\times P$ y cuya operación es $$(q,x)(r,y)=\bigl(q\varphi(x)(r),xy\bigr).$$
>	2. Este grupo no es literalmente $G$. Sus elementos son pares $(q,x)$, mientras que los elementos de $G$ no tienen por qué ser pares.
>	3. El teorema afirma que ambos grupos tienen la misma estructura, es decir, $$G\cong Q\rtimes_\varphi P.$$
>Para relacionar ambos mundos definimos el mapa $$\Psi:Q\rtimes_\varphi P\longrightarrow G,\qquad \Psi(q,x)=qx.$$
>Las hipótesis $QP=G$ y $Q\cap P=\{e\}$ hacen que todo elemento de $G$ pueda escribirse de manera única como $qx$. Por eso $\Psi$ es biyectiva.
>Además, la elección de la acción por conjugación hace que la operación del producto semidirecto reproduzca exactamente la multiplicación de $G$: $$\Psi\bigl((q,x)(r,y)\bigr)=\Psi\bigl(q\varphi(x)(r),xy\bigr)=q(xrx^{-1})xy=qxry.$$
>Por lo tanto $\Psi$ es un isomorfismo y podemos pensar que $$\boxed{G\text{ está construido a partir de }Q,\ P\text{ y la forma en que }P\text{ actúa sobre }Q.}$$
>Dentro del producto semidirecto externo aparecen además las copias canónicas $$Q_0=Q\times\{e_P\},\qquad P_0=\{e_Q\}\times P.$$ Estas solamente sirven para ver dentro de $Q\rtimes_\varphi P$ los grupos originales $Q$ y $P$. Bajo $\Psi$ se corresponden exactamente con los subgrupos $Q,P\leq G$: $$\Psi(q,e_P)=q,\qquad \Psi(e_Q,x)=x.$$
>En resumen, $$\boxed{\underbrace{G,\ Q,P}_{\text{descripción interna}}\quad\xleftrightarrow{\ \Psi\ }\quad\underbrace{Q\rtimes_\varphi P}_{\text{descripción externa}}}$$ y la acción $\varphi$ registra cómo los elementos de $P$ conjugan a los elementos de $Q$ dentro de $G$.

>[!remark] Relación con el cociente
>Bajo las hipótesis del teorema, la proyección canónica $\pi\colon G\to G/Q$ restringida a $P$ es un isomorfismo $$\pi|_P\colon P\xrightarrow{\sim}G/Q.$$ Por eso puede pensarse a $P$ como una copia de $G/Q$ dentro de $G$. Sin embargo, para un subgrupo normal arbitrario $Q\trianglelefteq G$ no siempre existe tal copia: encontrarla equivale a que la extensión parta.


## Ejemplos

>[!example] Grupos de orden $pq$
>Sean $p,q\in\mathbb N$ primos, $p<q$, y sea $G$ un grupo con $|G|=pq$.
>1. Sea $n_q$ la cantidad de $q$-subgrupos de Sylow. Por [[Teorico 6#^sylow|Sylow]], $n_q\equiv 1\pmod{q}$ y $n_q\mid p$. Como $p$ es primo, $n_q\in\{1,p\}$. Si $n_q=p$, entonces $p\equiv 1\pmod{q}$, es decir $q\mid(p-1)$. Pero $p<q$ fuerza $0<p-1<q$, imposible. Luego $n_q=1$.
>2. El único $q$-Sylow $C_q$ es cíclico de orden $q$ (Cauchy) y es normal en $G$.
>3. Sea $C_p\leq G$ un $p$-Sylow. Si $C_p\cap C_q$ tuviera un elemento distinto de $e$, su orden dividiría a $p$ y a $q$, luego sería $1$. Así $C_p\cap C_q=\{e\}$.
>4. $|C_p C_q|=|C_p||C_q|/|C_p\cap C_q|=pq=|G|$, de modo que $C_p C_q=G$.
>5. Por el teorema de reconocimiento, $$G\cong C_q\rtimes C_p.$$

>[!remark]
>El pizarrón escribió $n\equiv 1\pmod{q}$ y $n\mid p\Rightarrow n=1$ sin explicitar por qué $n\neq p$. La hipótesis $p<q$ es la que lo impide. No se clasificó la acción $C_p\to\operatorname{Aut}(C_q)$: eso decide si $G$ es cíclico o no abeliano.

>[!example] $\mathbb Z_4$ no es un producto semidirecto $\mathbb Z_2\rtimes\mathbb Z_2$
>El ejemplo anterior falla si $p=q$. Tomar $p=q=2$ y $G=\mathbb Z_4=\langle g\rangle=\{1,g,g^2,g^3\}$. El único subgrupo de orden $2$ es $N=\{1,g^2\}\cong\mathbb Z_2$, y $\mathbb Z_4/N=\{[1],[g]\}\cong\mathbb Z_2$.
>No hay complemento: $N$ es el único subgrupo de orden $2$, así que no existen $P\leq\mathbb Z_4$ con $P\cong\mathbb Z_2$, $P\cap N=\{1\}$ y $PN=\mathbb Z_4$.
>Una sección conjuntista $\delta\colon\mathbb Z_4/N\to\mathbb Z_4$ es $\delta([1])=1$, $\delta([g])=g$. **No** es morfismo de grupos: $\delta([g])\delta([g])=g^2\neq 1=\delta([g][g])$.
>El $2$-cociclo $\sigma\colon(\mathbb Z_4/N)\times(\mathbb Z_4/N)\to N$ mide ese fallo, $\delta(x)\delta(y)=\sigma(x,y)\,\delta(xy)$: $$\sigma(x,y)=\begin{cases}1&\text{si }x=1\text{ o }y=1,\\ g^2&\text{si }x=y=[g].\end{cases}$$ Así $\mathbb Z_4\cong\mathbb Z_2\times_\sigma\mathbb Z_2$, extensión *no partida*. El producto semidirecto correspondería a $\sigma$ trivial; el único grupo de orden $4$ que es $\mathbb Z_2\rtimes\mathbb Z_2$ es $\mathbb Z_2\times\mathbb Z_2$ (Klein).

>[!remark] Moraleja
>Si $N\trianglelefteq G$ y $G$ no es simple, $G$ se reconstruye a partir de $N$ y $G/N$, pero no siempre como producto semidirecto. El dato extra es una clase en $H^2(G/N,N)$.

>[!example] Isometrías de $\mathbb R^n$
>Sea $$E(n)=\bigl\{f\colon\mathbb R^n\to\mathbb R^n:\ \|f(x)-f(y)\|=\|x-y\|\text{ para todo }x,y\bigr\}$$ el grupo de isometrías afines (la clase lo tomó como dato: toda $f\in E(n)$ es $f(x)=Ax+b$ con $A\in O(n)$ y $b\in\mathbb R^n$).
>Si $f(x)=Ax+b$ y $g(x)=\widetilde Ax+\widetilde b$, entonces $$f\circ g(x)=A(\widetilde Ax+\widetilde b)+b=A\widetilde Ax+A\widetilde b+b.$$ Identificando $f\leftrightarrow(b,A)$, el producto que reproduce $f\circ g$ es $$(b,A)(\widetilde b,\widetilde A)=(b+A\widetilde b,\,A\widetilde A).$$ Eso es el producto semidirecto $(\mathbb R^n,+)\rtimes_\varphi O(n)$ con $$\varphi\colon O(n)\to\operatorname{Aut}(\mathbb R^n,+),\qquad \varphi(A)(x)=Ax.$$ Luego $$E(n)\cong\mathbb R^n\rtimes_\varphi O(n).$$

>[!remark]
>Misma receta que el grupo triangular $B\cong(\mathbb R,+)\rtimes\mathbb R^\times$ de [[Teorico 3#5. Producto semidirecto|Teórico 3]]: traslaciones por el lineal. En el pizarrón el producto de pares apareció también en el orden opuesto $(\widetilde b,\widetilde A)\cdot(b,A)=(\widetilde b+\widetilde Ab,\widetilde AA)$, que corresponde a $g\circ f$. La identificación $f\leftrightarrow(b,A)$ con $f(x)=Ax+b$ pide el orden de $f\circ g$ escrito arriba.

## Anillos

>[!remark]
>El pizarrón titula “Anillos y módulos”. En esta clase sólo se definió anillo y se listaron ejemplos; módulos no aparecieron.

>[!definition] Anillo
>Un **anillo** $R$ consiste en:
>1. un grupo $(R,+)$, con neutro $0\in R$;
>2. una operación $\cdot\colon R\times R\to R$ asociativa, con neutro $1\in R$;
>3. distributividad a izquierda y a derecha: $$a(b+c)=ab+ac,\qquad (a+b)c=ac+bc.$$
>No se pide que $\cdot$ sea conmutativa.

^anillo

>[!lemma] $(R,+)$ es abeliano
>En un anillo, la suma es conmutativa.
>
>>[!Proof]-
>>Se expande $(1+1)(x+y)$ de dos maneras. Por distributividad a izquierda, $$(1+1)(x+y)=(1+1)x+(1+1)y=x+x+y+y.$$ Por distributividad a derecha, $$(1+1)(x+y)=1(x+y)+1(x+y)=x+y+x+y.$$ Igualando y cancelando un $x$ a izquierda y un $y$ a derecha (el grupo $(R,+)$ admite cancelación), queda $x+y=y+x$.

>[!remark]
>Eso prueba que **la suma** es conmutativa, no que el anillo lo sea. $M_n(\mathbb R)$ y $\mathbb H$ son anillos no conmutativos. Algunos textos piden $(R,+)$ abeliano en la definición; acá se deduce de la unidad y las dos distributividades.

>[!definition] Morfismo de anillos
>Si $R$ y $S$ son anillos, un **morfismo de anillos** $f\colon R\to S$ cumple
>1. $f$ es homomorfismo de grupos $(R,+)\to(S,+)$: $f(0)=0$ y $f(a+b)=f(a)+f(b)$;
>2. $f(1)=1$ y $f(ab)=f(a)f(b)$ para todo $a,b\in R$.

### Ejemplos

>[!example] Cuerpos y matrices
>1. $\mathbb Z$, $\mathbb Q$, $\mathbb R$, $\mathbb C$.
>2. $M_n(\mathbb Z)$, $M_n(\mathbb Q)$, y en general $M_n(R)$ si $R$ es un anillo.

>[!example] Endomorfismos aditivos
>Si $(R,+)$ es el grupo aditivo de un anillo, $$\operatorname{End}(R,+)=\{\,f\colon R\to R:\ f\text{ es homomorfismo de grupos aditivos}\,\}$$ es un anillo con $$(f+g)(r)=f(r)+g(r),\qquad (fg)(r)=f(g(r)).$$ El pizarrón escribió “endomorfismo de anillos” y usó $(f,g)$ para la suma (abuso de notación). Con esas operaciones, lo que cierra es $\operatorname{End}(R,+)$, no el conjunto de morfismos de anillos: la suma puntual de dos morfismos unitales no es un morfismo de anillos.

>[!example] Funciones continuas
>Si $X$ es un espacio topológico, $C(X)=\{f\colon X\to\mathbb R\text{ continuas}\}$ es un anillo con operaciones puntuales $$(f+g)(x)=f(x)+g(x),\qquad (fg)(x)=f(x)g(x).$$ Además es un $\mathbb R$-espacio vectorial: $(\lambda f)(x)=\lambda f(x)$.
>Observación de la clase: si se conoce el anillo $C(X)$, se puede recuperar $X$ (para $X$ compacto de Hausdorff).

>[!example] Funciones $C^\infty$
>Si $M$ es una variedad diferenciable, $C^\infty(M)=\{f\colon M\to\mathbb R\text{ de clase }C^\infty\}$ es un anillo puntual. Una $f\colon M\to N$ de clase $C^\infty$ induce un morfismo de anillos en sentido contrario $$f^*\colon C^\infty(N)\to C^\infty(M),\qquad f^*(\varphi)=\varphi\circ f.$$

>[!example] Álgebra de grupo
>Sea $R$ un anillo y $G$ un grupo. El **álgebra de grupo** es $$R[G]=\bigoplus_{g\in G}R\cdot g$$ (suma directa de copias de $R$, una por cada $g\in G$). Un elemento es una suma finita $\sum_{g\in G}r_g g$ con $r_g\in R$ y $r_g=0$ salvo para finitos $g$.
>Suma: $$\Bigl(\sum r_g g\Bigr)+\Bigl(\sum s_g g\Bigr)=\sum(r_g+s_g)g.$$ Producto, definido en generadores por el producto de $G$ y extendido: $$(r_g g)(s_h h)=(r_g s_h)\,gh,$$ de modo que $$\Bigl(\sum r_g g\Bigr)\Bigl(\sum s_h h\Bigr)=\sum_{g,h}(r_g s_h)\,gh.$$ El neutro multiplicativo es $1_R\cdot e_G$. Chequeo de la clase: $(1\cdot x^{-1})(1\cdot x)=1\cdot e_G$.

>[!example] $R[\mathbb Z]$ y $R[\mathbb Z_n]$
>Si $R=\mathbb Z$, identificando $n\in\mathbb Z$ con $x^n$ se tiene $\mathbb Z[\mathbb Z]\cong\mathbb Z[x,x^{-1}]$ (polinomios de Laurent). El pizarrón escribió, por ejemplo, $$2\cdot 1+2\cdot 2+7\cdot 3\qquad\longleftrightarrow\qquad 2x+2x^2+7x^3.$$ Para $R[\mathbb Z_n]$ los representantes son polinomios de grado a lo sumo $n-1$ (es $R[x]/(x^n-1)$).

>[!example] Series formales
>$\mathbb C[[x]]=\bigl\{\sum_{n\geq 0}a_n x^n:a_n\in\mathbb C\bigr\}$, sin pedir soporte finito.

>[!example] Funciones meromorfas
>Si $M$ es una variedad compleja **conexa**, $\mathcal M(M)=\{f\colon M\to\mathbb C\text{ meromorfas}\}$ es un cuerpo: toda $f\not\equiv 0$ tiene inversa meromorfa $1/f$. El pizarrón dijo “toda $f$ es invertible”; el $0$ no lo es, y sin conexidad hay idempotentes.

>[!example] Cuaterniones
>$\mathbb H=\{a+bi+cj+dk:a,b,c,d\in\mathbb R\}$ con $$i^2=j^2=k^2=-1,\qquad ij=k,\quad ki=j,\quad jk=i.$$ Si $z=a+bi+cj+dk$, el conjugado es $\overline z=a-bi-cj-dk$ y $|z|=\sqrt{a^2+b^2+c^2+d^2}$. La inversa es $$z^{-1}=\frac{\overline z}{|z|^2}\qquad(z\neq 0).$$ Es un anillo de división no conmutativo. En el pizarrón el denominador apareció como $|z|$; la identidad $z\overline z=|z|^2$ pide el cuadrado.
