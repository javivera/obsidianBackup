---
dateCreated: 2026-08-14
tags:
  - AlgebraicStructures
  - Groups
source: "[[2da clase.pdf]]"
---
# Orden, Lagrange y teoremas de isomorfismo

>[!remark] Idea central
>Una vez que se tienen subgrupos y cocientes, el siguiente paso es **contar**. El teorema de Lagrange dice que $G$ se parte en copias de $H$ del mismo tamaño, y de ahí salen el orden de un elemento, la estructura de los grupos de orden primo y la multiplicatividad del índice. Los teoremas segundo y tercero de isomorfismo, junto con el producto directo interno, permiten identificar cocientes y desarmar grupos conocidos como $\mathbb Z_{n}$.

## Objetivos de estudio

>[!Remark]
>Al terminar esta nota deberías poder:
>- Calcular el orden de un elemento y relacionarlo con $|\langle g\rangle|$.
>- Partir $G$ en clases laterales y deducir $|G|=[G:H]|H|$.
>- Usar que $|g|$ divide a $|G|$ y que $g^{|G|}=e$.
>- Reconocer que un grupo de orden primo es cíclico y simple.
>- Calcular $[G:K]$ a través de un subgrupo intermedio.
>- Aplicar el segundo y el tercer teorema de isomorfismo, y leer subgrupos de un cociente.
>- Reconocer un producto directo interno y descomponer $\mathbb Z_{n}$ cuando los factores son coprimos.

## 1. Orden de un elemento

>[!Definition] Orden de un grupo y de un elemento
>La cardinalidad de un grupo $G$ se llama su **orden** y se denota $|G|$.
>Sea $g\in G$. Si existe algún entero positivo $m$ tal que $g^m=e$, el **orden de $g$** es $$|g|=\min\{m\in\mathbb N_{>0}:g^m=e\}.$$
>Si no existe tal entero, se dice que $g$ tiene orden infinito. Además, $$|g|=|\langle g\rangle|.$$

>[!Lemma] El orden coincide con el cardinal del cíclico
>Sea $g\in G$.
>1. $|g|=|\langle g\rangle|$.
>2. Si $|g|=n<\infty$, entonces $\langle g\rangle=\{e,g,g^{2},\ldots,g^{n-1}\}$ y $g^{k}=e$ si y solo si $n\mid k$.
>>[!Proof]-
>>1. Por definición, $\langle g\rangle=\{g^{k}:k\in\mathbb Z\}$.
>>2. **Caso finito.** Sea $n=|g|$. Si $0\leq i<j\leq n-1$ y $g^{i}=g^{j}$, entonces $g^{j-i}=e$ con $0<j-i<n$, contradiciendo la minimalidad de $n$. Así, $e,g,\ldots,g^{n-1}$ son distintos. Además, al dividir $k=qn+r$ con $0\leq r<n$, se tiene $g^{k}=(g^{n})^{q}g^{r}=g^{r}$. Por lo tanto $\langle g\rangle$ tiene exactamente $n$ elementos y $|g|=|\langle g\rangle|$.
>>3. Si $g^{k}=e$, entonces $g^{r}=e$ con $0\leq r<n$, de modo que $r=0$ y $n\mid k$. Recíprocamente, si $n\mid k$ entonces $g^{k}=(g^{n})^{q}=e$.
>>4. **Caso infinito.** Si $g$ tiene orden infinito, las potencias $g^{k}$ son todas distintas: $g^{i}=g^{j}$ implicaría $g^{|i-j|}=e$. Luego $\langle g\rangle$ es infinito y otra vez $|g|=|\langle g\rangle|$.

## 2. Teorema de Lagrange

>[!Theorem] Teorema de Lagrange
>Si $G$ es finito y $H \leq  G$, entonces $$|H|\mid|G|$$ y, más precisamente, $$|G|=[G:H]|H|,$$ donde $[G:H]$ es el número de clases laterales de $H$ en $G$. ^teorema-de-lagrange
>>[!Proof]-
>>La idea es partir $G$ en "copias" de $H$. Cada copia es una clase lateral, todas tienen el mismo tamaño $|H|$, y no se solapan. Contar esas copias da la fórmula.
>>- **Recordatorio.**
>>	1. La **clase lateral izquierda** de $H$ determinada por $g\in G$ es $$gH=\{gh:h\in H\}.$$
>>	2. En particular $eH=H$.
>>	3. Dos elementos $g$ y $\widetilde g$ determinan la misma clase si y solo si $g^{-1}\widetilde g\in H$ (eso es la relación $\sim_H$ de [[Teorico 3]]).
>>- **Las clases cubren $G$.**
>>	1. Sea $g\in G$. Como $e\in H$, se tiene $g=ge\in gH$.
>>	2. Osea todo elemento de $G$ vive en *alguna* clase lateral: la suya. Por lo tanto $$G=\bigcup_{g\in G}gH.$$
>>- **Si dos clases se tocan, son la misma.**
>>	1. Supongamos $gH\cap\widetilde gH\neq\varnothing$ y tomemos $x\in gH\cap\widetilde gH$.
>>	2. Entonces existen $h_{1},h_{2}\in H$ con $$x=gh_{1}=\widetilde g h_{2}.$$ De $gh_{1}=\widetilde g h_{2}$ se obtiene $g=\widetilde g h_{2}h_{1}^{-1}$.
>>	3. Como $H$ es subgrupo, $h_{2}h_{1}^{-1}\in H$, y entonces $$gH=(\widetilde g h_{2}h_{1}^{-1})H=\widetilde g(h_{2}h_{1}^{-1}H)=\widetilde g H,$$ porque $h_{2}h_{1}^{-1}H=H$.
>>	4. Así, dos clases laterales o son disjuntas, o coinciden por completo. No puede haber un "solapamiento parcial".
>>- **Es una partición.**
>>	1. Juntando lo anterior: $G$ es unión de clases laterales izquierdas, y clases distintas son disjuntas. Como $G$ es finito, hay *finitas* clases distintas.
>>	2. Llamamos **índice** de $H$ en $G$ a esa cantidad y la escribimos $[G:H]$. Si $\{g_{1}H,\ldots,g_{n}H\}$ es la lista de clases distintas, con $n=[G:H]$, $$G=g_{1}H\,\sqcup\,\cdots\,\sqcup\,g_{n}H.$$
>>- **Toda clase tiene exactamente $|H|$ elementos.**
>>	1. Fijemos $g\in G$ y consideremos $$\lambda_{g}:H\longrightarrow gH,\qquad\lambda_{g}(h)=gh.$$
>>	2. Esta aplicación es sobreyectiva por definición de $gH$: todo elemento de $gH$ es de la forma $gh$ para algún $h\in H$.
>>	3. Es inyectiva: si $\lambda_{g}(h_{1})=\lambda_{g}(h_{2})$, entonces $gh_{1}=gh_{2}$. Multiplicando a izquierda por $g^{-1}$ (cancelación izquierda) queda $h_{1}=h_{2}$.
>>	4. Luego $\lambda_{g}$ es biyectiva y $|gH|=|H|$. Intuitivamente, multiplicar a izquierda por $g$ "traslada" $H$ rígidamente, sin pegar ni perder puntos.
>>	5. Esto vale para *cualquier* $g$, así que **todas** las clases laterales tienen el mismo cardinal, el de $H$.
>>- **Contar.**
>>	1. En la partición hay $n=[G:H]$ bloques, y cada uno tiene $|H|$ elementos. Por lo tanto $$|G|=n\cdot|H|=[G:H]\,|H|.$$ En particular $|H|$ divide a $|G|$.
>>	2. El mismo argumento funciona con clases laterales **derechas** $Hg=\{hg:h\in H\}$: también particionan $G$ y cada una tiene $|H|$ elementos. Por lo tanto hay tantas clases izquierdas como derechas, y el índice no depende del lado que se elija. 
>>	3. Ojo: eso no dice que $gH=Hg$. Eso es normalidad, y Lagrange no la usa.

>[!Remark]
>Notar que en el caso de normalidad podemos usar lagrange para afirmar $$|G/H|=[G:H]=\frac{|G|}{|H|}$$ digamos el primer igual vale siempre, pero el segundo vale cuando hay normalidad por  

### Un dibujo numérico

>[!Remark] Un dibujo numérico
>Tomemos $G=S_{3}=\{e,(1\,2),(1\,3),(2\,3),(1\,2\,3),(1\,3\,2)\}$ y $H=\{e,(1\,2)\}$, de modo que $|G|=6$ y $|H|=2$. Las clases izquierdas son $$eH=H=\{e,(1\,2)\},\qquad (1\,3)H=\{(1\,3),(1\,3\,2)\},\qquad (2\,3)H=\{(2\,3),(1\,2\,3)\}.$$ Son tres bloques disjuntos de dos elementos cada uno, y $6=3\cdot 2$. El índice es $[S_{3}:H]=3$. Notar que las clases derechas son otras: $H(1\,3)=\{(1\,3),(1\,2\,3)\}\neq(1\,3)H$. Lagrange sigue valiendo, porque solo importa el *tamaño* de los bloques, no que izquierda y derecha coincidan.

### El índice del subgrupo trivial

>[!Proposition] El índice del subgrupo trivial es el orden
>Si $H=\{e\}$ y $G=\bigcup_{i\in I}g_{i}H$ es una descomposición en clases laterales disjuntas, entonces $[G:H]=|I|=|G|$.
>>[!Proof]-
>>Cada clase $g\{e\}=\{g\}$ es un singleton. La partición de $G$ en clases laterales de $\{e\}$ es, por lo tanto, la partición en puntos. Hay exactamente $|G|$ de ellas, de modo que $|I|=|G|$. Esto también es el caso $|H|=1$ de Lagrange: $|G|=[G:\{e\}]\cdot 1$.

### Consecuencias

>[!Corollary] Consecuencias inmediatas
>Si $G$ es finito y $g\in G$, entonces $$|g|\bigg||G|$$ y $$g^{|G|}=e.$$
>Si $|G|=p$ es primo, entonces todo $g\neq e$ tiene orden $p$, de modo que $G=\langle g\rangle\cong\mathbb Z_{p}$.
>>[!Proof]-
>>4. El subgrupo $\langle g\rangle$ tiene orden $|g|$ por el lema. Por Lagrange, $|g|=|\langle g\rangle|$ divide a $|G|$.
>>5. Escribamos $|G|=|g|\cdot k$. Entonces $$g^{|G|}=(g^{|g|})^{k}=e^{k}=e.$$
>>6. Si $|G|=p$ es primo y $g\neq e$, el único divisor positivo de $p$ distinto de $1$ es $p$ mismo. Como $|g|\neq 1$, se tiene $|g|=p$. Luego $\langle g\rangle$ tiene $p$ elementos y coincide con $G$. El isomorfismo $\langle g\rangle\cong\mathbb Z_{p}$ envía $g^{k}\mapsto\overline k$.

### Lagrange no tiene recíproco

>[!Remark] Lagrange no tiene recíproco
>Si $d$ divide a $|G|$, no tiene por qué existir un subgrupo de orden $d$. El ejemplo clásico es $A_{4}$, de orden $12$, que no posee subgrupos de orden $6$. Lo que sí se recupera más adelante es el teorema de Cauchy: si un primo $p$ divide a $|G|$, entonces existe un elemento de orden $p$.

### Un grupo de torsión infinito

>[!Example] Todo elemento de $\mathbb Q/\mathbb Z$ tiene orden finito
>El grupo $\mathbb Q/\mathbb Z$ es infinito, pero es un grupo de **torsión**: todo elemento tiene orden finito. En particular, el recíproco informal "grupo infinito $\Rightarrow$ algún elemento de orden infinito" es falso.
>>[!Proof]-
>>7. Un elemento genérico de $\mathbb Q/\mathbb Z$ es una clase $x=\frac{a}{b}+\mathbb Z$ con $a\in\mathbb Z$ y $b\in\mathbb N_{>0}$. Entonces $$b\cdot x=a+\mathbb Z=\mathbb Z,$$ que es el neutro de $\mathbb Q/\mathbb Z$. Por lo tanto $x$ tiene orden finito y ese orden divide a $b$.
>>8. Más precisamente, si $\gcd(a,b)=1$, el orden de $\frac{a}{b}+\mathbb Z$ es exactamente $b$. En efecto, $k\cdot\frac{a}{b}\in\mathbb Z$ si y solo si $b\mid ka$; como $a$ y $b$ son coprimos, esto equivale a $b\mid k$.
>>Así, $\mathbb Q/\mathbb Z$ es un grupo abeliano infinito en el que todo cíclico es finito. Lagrange no se aplica porque el grupo ambiente no es finito.

## 3. Multiplicatividad del índice

>[!Theorem] Índice en una cadena de subgrupos
>Sea $G$ un grupo finito y sean $K\leq H\leq G$. Entonces $$[G:K]=[G:H][H:K].$$
>>[!Proof]-
>>1. Escribamos las descomposiciones en clases laterales izquierdas $$G=\bigcup_{i\in I}g_{i}H,\qquad H=\bigcup_{j\in J}\ell_{j}K,$$ ambas uniones disjuntas, con $[G:H]=|I|$ y $[H:K]=|J|$.
>>2. **La unión recubre $G$.** Todo $x\in G$ pertenece a alguna clase $g_{i}H$, y el correspondiente $h\in H$ con $x=g_{i}h$ pertenece a alguna clase $\ell_{j}K$. Luego $x=g_{i}\ell_{j}k$ para algún $k\in K$, es decir $$G=\bigcup_{(i,j)\in I\times J}g_{i}\ell_{j}K.$$
>>3. **La unión es disjunta.** Sea $z\in g_{i}\ell_{j}K\cap g_{s}\ell_{t}K$. Entonces existen $k_{1},k_{2}\in K$ tales que $$g_{i}\ell_{j}k_{1}=z=g_{s}\ell_{t}k_{2}.$$ Multiplicando a la derecha por $k_{1}^{-1}$ queda $$g_{i}\ell_{j}=g_{s}(\ell_{t}k_{2}k_{1}^{-1}).$$ El factor $\ell_{t}k_{2}k_{1}^{-1}$ pertenece a $H$, porque $\ell_{t}\in H$ y $K\leq H$. Por lo tanto $g_{i}H=g_{s}H$. Como las clases de $H$ en $G$ son disjuntas, $i=s$. Cancelando $g_{i}$ se obtiene $\ell_{j}k_{1}=\ell_{t}k_{2}$, o sea $\ell_{j}K=\ell_{t}K$, y entonces $j=t$.
>>4. Hay entonces exactamente $|I\times J|=|I||J|$ clases de $K$ en $G$, y $$[G:K]=[G:H][H:K].$$
>>Esta identidad es la versión "en dos pasos" de Lagrange: $|G|=[G:K]|K|=[G:H][H:K]|K|=[G:H]|H|$.

>[!Remark]
>El mismo recuento funciona sin finitud, leyendo los índices como cardinales. En estas notas nos alcanza el caso finito, que es el de la clase.

## 4. Primer resultado de estructura

>[!Definition] Grupo simple
>Un grupo $G$ se dice **simple** si $G\neq\{e\}$ y sus únicos subgrupos normales son $\{e\}$ y $G$. En otras palabras: no se puede "cocientar" $G$ de manera no trivial.

### Grupos de orden primo

>[!Theorem] Los grupos de orden primo
>Sea $p$ un primo y sea $G$ un grupo de orden $p$. Entonces $$G\cong\mathbb Z_{p}$$ y $G$ es simple.
>>[!Proof]-
>>1. Sea $g\in G$ con $g\neq e$. Por el corolario de Lagrange, $|g|$ divide a $p$, de modo que $|g|=1$ o $|g|=p$. Como $g\neq e$, no puede ser $|g|=1$. Luego $|g|=p$ y $$G=\{e,g,g^{2},\ldots,g^{p-1}\}=\langle g\rangle\cong\mathbb Z_{p}.$$
>>2. **Simplicidad.** Por Lagrange, el orden de cualquier subgrupo divide a $p$, así que los únicos subgrupos de $G$ son $\{e\}$ y $G$. A fortiori, los únicos subgrupos normales son esos dos. Por lo tanto $G$ es simple.
>>En particular, los grupos cíclicos de orden primo son, salvo isomorfismo, los únicos grupos simples abelianos. Cualquier otro grupo simple (por ejemplo $A_{n}$ para $n\geq 5$) es no abeliano.

>[!Remark] Cómo usar esto
>En cuanto un grupo tiene orden primo, su estructura queda completamente determinada: es cíclico, generado por cualquier elemento no trivial. No hay "dos grupos distintos de orden $7$"; hay uno solo, $\mathbb Z_{7}$.

## 5. Segundo y tercer teorema de isomorfismo

>[!Remark]
>El primer teorema de isomorfismo ya está en [[Teorico 3#Primer teorema de isomorfismo]]: si $f:G\to H$ es un homomorfismo, entonces $G/\ker f\cong\operatorname{Im}f$. Los dos que siguen comparan subgrupos con cocientes.

### El producto $NK$

>[!Lemma] El producto $NK$ es un subgrupo
>Sean $N\trianglelefteq G$ y $K\leq G$. Entonces $$NK=\{nk:n\in N,\ k\in K\}$$ es un subgrupo de $G$, y $N\trianglelefteq NK$.
>>[!Proof]-
>>1. **Cierre.** Dados $nk$ y $n'k'$, $$ (nk)(n'k')=n(kn'k^{-1})kk'. $$ Como $N$ es normal, $kn'k^{-1}\in N$, y entonces $n(kn'k^{-1})\in N$ y $kk'\in K$. El producto queda en $NK$.
>>2. **Inversos.** $(nk)^{-1}=k^{-1}n^{-1}=(k^{-1}n^{-1}k)k^{-1}$. Otra vez $k^{-1}n^{-1}k\in N$, así que el inverso está en $NK$. El neutro es $e=e\cdot e\in NK$.
>>3. Como $N\leq NK\leq G$ y $N$ ya es normal en $G$, también es normal en el subgrupo $NK$.

>[!Proposition] Cardinal de $HK$
>Sean $H,K\leq G$ subgrupos finitos. Entonces
>$$|HK|=\frac{|H||K|}{|H\cap K|}.$$
>>[!Proof]-
>>1. Como $H\cap K\leq H$ y $H\cap K\leq K$, podemos considerar las clases laterales de $H\cap K$ en $H$.
>>2. Por definición,
>>$$HK=\{hk:h\in H,\ k\in K\}=\bigcup_{h\in H}hK.$$
>>3. Cada $hK$ es una clase lateral izquierda de $K$. Dos clases laterales son iguales o disjuntas y, además, cada una tiene $|K|$ elementos. Por lo tanto, si $n$ es la cantidad de clases $hK$ distintas que aparecen en la unión anterior,
>>$$|HK|=n|K|.$$
>>4. Veamos cuántas clases distintas aparecen. Si $h,h'\in H$, entonces $$hK=h'K\iff h'^{-1}h\in K.$$pero, como $h,h'\in H$, se tiene $h'^{-1}h\in H$. Luego $$hK=h'K\iff h'^{-1}h\in H\cap K.$$
>>5. Por el criterio de igualdad de clases laterales, $$h'^{-1}h\in H\cap K\iff h(H\cap K)=h'(H\cap K).$$
>>6. Por lo tanto, $$hK=h'K\iff h(H\cap K)=h'(H\cap K).$$
>>7. Así, la cantidad de clases $hK$ distintas es exactamente la cantidad de clases laterales de $H\cap K$ en $H$, es decir, $$n=[H:H\cap K].$$
>>8. Por el teorema de Lagrange aplicado a $H$, $$|H|=[H:H\cap K]|H\cap K|,$$y por lo tanto $$[H:H\cap K]=\frac{|H|}{|H\cap K|}.$$
>>9. Sustituyendo en el paso 3, $$|HK|=[H:H\cap K]|K|=\frac{|H|}{|H\cap K|}|K|=\boxed{\frac{|H||K|}{|H\cap K|}}.$$

### Segundo teorema de isomorfismo

>[!Theorem] Segundo teorema de isomorfismo
>Sean $K\leq G$ y $N\trianglelefteq G$. Entonces $N\cap K\trianglelefteq K$ y $$ \frac{K}{N\cap K}\;\cong\;\frac{NK}{N}. $$
>>[!Proof]-
>>4. Por el lema, $NK\leq G$ y $N\trianglelefteq NK$, de modo que el cociente $NK/N$ está definido.
>>5. Consideremos la restricción de la proyección canónica, $$\varphi:K\longrightarrow NK/N,\qquad\varphi(k)=kN.$$
>>6. **Homomorfismo.** $\varphi(kk')=(kk')N=(kN)(k'N)=\varphi(k)\varphi(k')$.
>>7. **Epimorfismo.** Un elemento genérico de $NK/N$ es $(nk)N$. Como $n\in N$, se tiene $(nk)N=kN=\varphi(k)$. Así $\varphi$ es sobreyectiva.
>>8. **Núcleo.** $$\ker\varphi=\{k\in K:kN=N\}=\{k\in K:k\in N\}=N\cap K.$$ En particular $N\cap K\trianglelefteq K$, por ser núcleo de un homomorfismo.
>>9. Por el [[Teorico 3#Primer teorema de isomorfismo|primer teorema de isomorfismo]], $$K/\ker\varphi\cong\operatorname{Im}\varphi,$$ es decir $$\frac{K}{N\cap K}\cong\frac{NK}{N}.$$

>[!Remark] Lectura del segundo teorema
>El teorema identifica un cociente "adentro de $K$" con un cociente "adentro de $NK$". Geométricamente es el paralelogramo de subgrupos $N$, $K$, $N\cap K$ y $NK$: los dos lados opuestos dan cocientes isomorfos. No se usa la finitud de $G$; el enunciado vale en general.

### Tercer teorema de isomorfismo

>[!Theorem] Tercer teorema de isomorfismo
>Sean $K\trianglelefteq G$ y $H\trianglelefteq G$ con $K\leq H$. Entonces $H/K\trianglelefteq G/K$ y $$ \frac{G/K}{H/K}\;\cong\;\frac{G}{H}. $$
>>[!Proof]-
>>10. Sea $\varphi:G\to G/H$ la proyección canónica, $\varphi(g)=gH$. Es un epimorfismo con $\ker\varphi=H$. Como $K\leq H=\ker\varphi$, la [[Teorico 3#^38af6a|propiedad universal del cociente]] da un único homomorfismo $\overline{\varphi}:G/K\to G/H$ tal que $\overline{\varphi}\circ\pi=\varphi$, donde $\pi:G\to G/K$ es la proyección. Explícitamente, $$\overline{\varphi}(gK)=gH.$$
>>11. El diagrama es $$\begin{array}{ccc}G&\xrightarrow{\ \varphi\ }&G/H\\[-2pt]{}_{\pi}\downarrow&\nearrow^{\overline{\varphi}}&\\[2pt]G/K&&\end{array}$$
>>12. Como $\varphi$ es epi, $\overline{\varphi}$ también lo es: toda clase $gH$ es $\overline{\varphi}(gK)$.
>>13. El núcleo es $$\ker\overline{\varphi}=\{gK:gH=H\}=\{gK:g\in H\}=H/K.$$ En particular $H/K\trianglelefteq G/K$.
>>14. Por el primer teorema de isomorfismo, $$ \frac{G/K}{\ker\overline{\varphi}}\cong G/H, $$ es decir $$ \frac{G/K}{H/K}\cong\frac{G}{H}. $$

### Correspondencia de subgrupos

>[!Corollary] Correspondencia de subgrupos
>Sea $N\trianglelefteq G$. Los subgrupos de $G/N$ son exactamente los de la forma $K/N$, donde $N\leq K\leq G$. Además, $$K/N\trianglelefteq G/N\quad\iff\quad K\trianglelefteq G.$$
>>[!Proof]-
>>15. **Todo $K$ intermedio da un subgrupo del cociente.** Si $N\leq K\leq G$, las clases $kN$ con $k\in K$ forman un subgrupo de $G/N$: el producto $(kN)(k'N)=(kk')N$ queda en $K/N$ y el inverso $(kN)^{-1}=k^{-1}N$ también.
>>16. **Todo subgrupo del cociente es de esa forma.** Sea $\overline{K}\leq G/N$. Definimos $$K:=\pi^{-1}(\overline{K})=\{g\in G:gN\in\overline{K}\},$$ donde $\pi:G\to G/N$ es la proyección. Como $\pi$ es un homomorfismo, $K$ es un subgrupo de $G$. Además $N=\ker\pi\subseteq K$, y por construcción $\overline{K}=K/N$.
>>17. **Normalidad.** Si $K\trianglelefteq G$, entonces para $g\in G$ y $k\in K$ se tiene $gkg^{-1}\in K$, de modo que $$(gN)(kN)(gN)^{-1}=(gkg^{-1})N\in K/N.$$ Así $K/N\trianglelefteq G/N$.
>>18. Recíprocamente, si $K/N\trianglelefteq G/N$, entonces para $g\in G$ y $k\in K$ se tiene $(gkg^{-1})N\in K/N$, o sea $gkg^{-1}\in K$. Por lo tanto $K\trianglelefteq G$.

>[!Remark]
>El corolario dice que el retículo de subgrupos de $G/N$ es una copia del retículo de subgrupos de $G$ que contienen a $N$. Cocientar por $N$ "aplasta $N$ a un punto" y deja intacta la estructura por encima de $N$.

## 6. Producto directo interno

>[!Theorem] Criterio de producto directo interno
>Sea $G$ un grupo y sean $H,K\leq G$ tales que
>1. $G=HK$,
>2. $H\cap K=\{e\}$,
>3. $hk=kh$ para todo $h\in H$ y todo $k\in K$.
>
>Entonces $$G\cong H\times K.$$
>>[!Proof]-
>>1. Definimos $$\varphi:H\times K\longrightarrow G,\qquad\varphi(h,k)=hk.$$
>>2. **Homomorfismo.** Usando (3) para pasar $k$ a través de $\widetilde h$, $$\varphi(h,k)\,\varphi(\widetilde h,\widetilde k)=hk\,\widetilde h\widetilde k=h\widetilde h\,k\widetilde k=\varphi\bigl((h,k)(\widetilde h,\widetilde k)\bigr).$$
>>3. **Epimorfismo.** Por (1), todo $g\in G$ se escribe $g=hk$ con $h\in H$ y $k\in K$, luego $g=\varphi(h,k)$.
>>4. **Inyectividad.** Si $\varphi(h,k)=\varphi(\widetilde h,\widetilde k)$, entonces $hk=\widetilde h\widetilde k$, de donde $$\widetilde h^{-1}h=\widetilde k\,k^{-1}.$$ El miembro izquierdo está en $H$ y el derecho en $K$, así que ambos pertenecen a $H\cap K=\{e\}$ por (2). Luego $\widetilde h^{-1}h=e$ y $\widetilde k k^{-1}=e$, es decir $(h,k)=(\widetilde h,\widetilde k)$.
>>5. Por lo tanto $\varphi$ es un isomorfismo y $G\cong H\times K$.

>[!Remark] Lectura de las tres hipótesis
>- (1) dice que $H$ y $K$ generan $G$ "sin huecos": todo elemento es un producto $hk$.
>- (2) dice que la escritura $g=hk$ es única. (Si $h_{1}k_{1}=h_{2}k_{2}$, el mismo cálculo de la inyectividad da $h_{1}=h_{2}$ y $k_{1}=k_{2}$.)
>- (3) hace que el producto en $G$ coincida con el producto coordenada a coordenada de $H\times K$. Sin conmutación cruzada, $\varphi$ ni siquiera sería homomorfismo.
>
>Una formulación equivalente: $H\trianglelefteq G$, $K\trianglelefteq G$, $H\cap K=\{e\}$ y $G=HK$. La normalidad de ambos implica (3), porque el conmutador $hkh^{-1}k^{-1}$ cae en $H\cap K=\{e\}$.

### Descomposición de $\mathbb Z_{n}$

>[!Lemma] Órdenes en un cíclico
>Sea $G=\langle g\rangle$ cíclico de orden $n$, y sea $m$ un entero. Entonces $$|g^{m}|=\frac{n}{\gcd(m,n)}.$$ En particular, si $n=ab$ con $\gcd(a,b)=1$, se tiene $|g^{b}|=a$ y $|g^{a}|=b$.
>>[!Proof]-
>>Sea $d=\gcd(m,n)$, y escribamos $m=dm_{1}$, $n=dn_{1}$ con $\gcd(m_{1},n_{1})=1$. El orden de $g^{m}$ es el menor $t>0$ tal que $g^{mt}=e$, es decir $n\mid mt$. Esto equivale a $n_{1}\mid m_{1}t$ y, como $n_{1}$ y $m_{1}$ son coprimos, a $n_{1}\mid t$. El mínimo tal $t$ es $n_{1}=n/d$.

>[!Example] Descomposición de $\mathbb Z_{n}$ cuando los factores son coprimos
>Sea $\mathbb Z_{n}=\langle g\rangle$ con $n=ab$ y $\gcd(a,b)=1$. Escribamos $$\mathbb Z_{a}:=\langle g^{b}\rangle\leq\mathbb Z_{n},\qquad\mathbb Z_{b}:=\langle g^{a}\rangle\leq\mathbb Z_{n}.$$ (La notación no está al revés: $|g^{b}|=a$, de modo que $\langle g^{b}\rangle\cong\mathbb Z_{a}$; análogamente $|g^{a}|=b$.) Entonces $$\mathbb Z_{n}=\mathbb Z_{a}\mathbb Z_{b}\qquad\text{y}\qquad\mathbb Z_{n}\cong\mathbb Z_{a}\times\mathbb Z_{b}.$$
>>[!Proof]-
>>Verificamos las tres hipótesis del criterio.
>>6. **Producto.** Como $\gcd(a,b)=1$, existen $r,s\in\mathbb Z$ con $ar+bs=1$. Luego $$g=g^{ar+bs}=(g^{a})^{r}(g^{b})^{s}\in\langle g^{a}\rangle\langle g^{b}\rangle=\mathbb Z_{b}\mathbb Z_{a}.$$ Como $g$ genera $\mathbb Z_{n}$, se concluye $\mathbb Z_{n}=\mathbb Z_{a}\mathbb Z_{b}$.
>>7. **Intersección trivial.** Sea $x\in\mathbb Z_{a}\cap\mathbb Z_{b}$. Entonces $x=(g^{b})^{i}=(g^{a})^{j}$ para ciertos $i,j$, o sea $g^{bi}=g^{aj}$. De aquí $g^{bi-aj}=e$, luego $n\mid(bi-aj)$, es decir $ab\mid(bi-aj)$. En particular $a\mid bi$. Como $\gcd(a,b)=1$, se tiene $a\mid i$. Escribiendo $i=at$ queda $$x=g^{b(at)}=g^{abt}=(g^{n})^{t}=e.$$ Así $\mathbb Z_{a}\cap\mathbb Z_{b}=\{e\}$.
>>8. **Conmutación.** $\mathbb Z_{n}$ es abeliano, de modo que los elementos de $\mathbb Z_{a}$ conmutan con los de $\mathbb Z_{b}$.
>>Por el criterio, $\mathbb Z_{n}\cong\mathbb Z_{a}\times\mathbb Z_{b}$.

### Descomposición primaria

>[!Corollary] Descomposición primaria de un cíclico finito
>Si $n=\prod_{i=1}^{r}p_{i}^{e_{i}}$ es la factorización de $n$ en primos distintos, entonces $$\mathbb Z_{n}\;\cong\;\prod_{i=1}^{r}\mathbb Z_{p_{i}^{e_{i}}}.$$
>>[!Proof]-
>>Los factores $p_{i}^{e_{i}}$ son coprimos dos a dos. Iterando el ejemplo anterior, $$\mathbb Z_{n}\cong\mathbb Z_{p_{1}^{e_{1}}}\times\mathbb Z_{n/p_{1}^{e_{1}}}\cong\cdots\cong\prod_{i=1}^{r}\mathbb Z_{p_{i}^{e_{i}}}.$$
>>Esta es la descomposición de $\mathbb Z_{n}$ en $p$-grupos cíclicos. Es el caso particular más simple de la clasificación de grupos abelianos finitos.

## 7. Cómo atacar este tipo de ejercicios

>[!Remark] Cómo atacar este tipo de ejercicios
>1. Para probar que $|g|$ divide a $|G|$, mirá el cíclico $\langle g\rangle$ y aplicá Lagrange; no hace falta trabajar con el elemento suelto.
>2. Para un índice $[G:K]$ a través de un subgrupo intermedio, descomponé $G$ en clases de $H$ y cada $H$ en clases de $K$, y comprobá que los productos $g_{i}\ell_{j}K$ no se solapan.
>3. Para identificar un cociente, construí un homomorfismo sobreyectivo y leé el núcleo; el primer teorema de isomorfismo hace el resto. El segundo y el tercero son instancias de esa estrategia.
>4. Para reconocer un producto directo interno, las tres cosas que hay que chequear son: generación conjunta, intersección trivial, y conmutación cruzada (o normalidad de ambos factores).
>5. En $\mathbb Z_{n}=\langle g\rangle$, el subgrupo de orden $a$ (cuando $a\mid n$) es $\langle g^{n/a}\rangle$, no $\langle g^{a}\rangle$. De ahí que $\mathbb Z_{a}=\langle g^{b}\rangle$ si $n=ab$.
