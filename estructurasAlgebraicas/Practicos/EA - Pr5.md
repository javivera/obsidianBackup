---
tags:
  - AlgebraicStructures
  - Groups
  - Practico5
---

# Práctico 5

## Acciones de grupos

>[!exercise] Ejercicio 1
>Sean $G$ grupo y $A\triangleleft G$, con $A$ abeliano. Mostrar que $G/A$ opera sobre $A$ por conjugación y obtener un homomorfismo $f:G/A\to\operatorname{Aut}(A)$.

>[!exercise] Ejercicio 2
>Sea $G$ grupo. Supongamos que un elemento $a$ de $G$ tiene exactamente dos conjugados. Probar que $G$ contiene un subgrupo normal propio.

>[!exercise] Ejercicio 3
>Sea $H$ un subgrupo de un grupo $G$. Mostrar que $C_G(H)\triangleleft N_G(H)$ y que $N_G(H)/C_G(H)$ es isomorfo a un subgrupo de $\operatorname{Aut}(H)$.

>[!exercise] Ejercicio 4
>Probar que $C(S_n)=\{(1)\}$ e $\operatorname{Int}(S_n)\cong S_n$, para todo entero $n\geq 3$.

>[!exercise] Ejercicio 5
>En cada uno de los siguientes casos probar que $\cdot$ es una acción del grupo $G$ en el conjunto $X$. En cada ítem calcular la órbita $\mathcal{O}_x$ y el estabilizador $G_x$ de cada elemento $x$ de $X$. Además, calcular el conjunto $X^G:=\{x\in X:g\cdot x=x\ \forall g\in G\}$.
>- **(a)** $G=\{f:\mathbb{R}\to\mathbb{R}:f(x)=ax+b,\ a\in\mathbb{R}^{\times},\ b\in\mathbb{R}\}$, $X=\mathbb{R}$ y $f\cdot x=f(x)$.
>- **(b)** $G=\mathbb{R}^{\times}$, $X=\mathbb{R}_{>0}$ y $a\cdot x=x^a$.
>- **(c)** $G=\operatorname{SL}_2(\mathbb{Z})$, $X=\mathbb{Z}\times\mathbb{Z}$ y la acción dada por el producto de matrices.

>[!exercise] Ejercicio 6
>Sea $G$ un grupo actuando sobre un conjunto $X$ y sea $N\triangleleft G$. Determinar una condición necesaria y suficiente para que exista una acción de $G/N$ en $X$ tal que $\overline{a}\cdot x=a\cdot x$, para todo $a\in G$ y $x\in X$.

>[!exercise] Ejercicio 7
>Sea $X$ un conjunto finito. Determinar el número de acciones de $\mathbb{Z}$ sobre $X$.

>[!exercise] Ejercicio 8
>Sean $G$ grupo y $a\in G$, con $a\neq e_G$ y $|a|\neq 2$. Mostrar que existe un automorfismo distinto de la identidad.

>[!exercise] Ejercicio 9
>Sea $G$ un grupo.
>- **(a)** Si $|G|=m$ y $p$ es el menor primo que divide a $m$, entonces todo subgrupo de índice $p$ es normal.
>- **(b)** Si $|G|=pn$, con $p$ primo y $p>n$, y $H<G$, con $|H|=p$, entonces $H\triangleleft G$.
>- **(c)** Si $|G|=p^k$, con $p$ primo, y $N\triangleleft G$, con $|N|=p$, entonces $N\subseteq C(G)$.

## $p$-grupos y Teoremas de Sylow

>[!exercise] Ejercicio 10
>Si $N\triangleleft G$, y $N$ y $G/N$ son $p$-grupos, entonces $G$ es un $p$-grupo.
>>[!Proof]-
>>1. Queremos probar que cada elemento de $G$ tiene orden una potencia de $p$, sin suponer que $G$ sea finito. Sea $g\in G$ arbitrario. Como $G/N$ es un $p$-grupo, la clase $gN$ tiene orden $p^j$ para algún entero $j\geq 0$. Por lo tanto, $$(gN)^{p^j}=N.$$ Por la operación del cociente, $(gN)^{p^j}=g^{p^j}N$; como $xN=N$ equivale a $x\in N$, resulta $g^{p^j}\in N$.
>>2. Como $N$ es un $p$-grupo, el elemento $g^{p^j}$ tiene orden $p^k$ para algún entero $k\geq 0$. Así, $$e_G=(g^{p^j})^{p^k}=g^{p^jp^k}=g^{p^{j+k}}.$$
>>3. En consecuencia, $g$ tiene orden finito $d$, y $d$ divide a $p^{j+k}$. En efecto, por el algoritmo de la división existen enteros $q,r$ tales que $p^{j+k}=qd+r$ y $0\leq r<d$; entonces $$e_G=g^{p^{j+k}}=(g^d)^qg^r=g^r.$$ Por la minimalidad de $d$, necesariamente $r=0$, de modo que $p^{j+k}=qd$.
>>4. Como $p$ es primo, todo divisor positivo de $p^{j+k}$ es una potencia de $p$, por la factorización única en primos. Por tanto, $d=p^\ell$ para algún entero $0\leq\ell\leq j+k$. Como $g\in G$ era arbitrario, todo elemento de $G$ tiene orden una potencia de $p$ y, por definición, $G$ es un $p$-grupo.

>[!exercise] Ejercicio 11
>¿Es cierto que si $G$ es un $p$-grupo entonces $|G|<\infty$?
>>[!Proof]-
>>1. La afirmación es falsa. Consideremos $$G=\prod_{i\in\mathbb N}\mathbb Z_p,$$ con la suma coordenada a coordenada, es decir, $(x_i)+(y_i)=(x_i+y_i)$.
>>2. El grupo $G$ es infinito: para cada $j\in\mathbb N$ sea $e^{(j)}$ el elemento que tiene un $1$ en la coordenada $j$ y $0$ en todas las demás. Si $j\neq k$, entonces $e^{(j)}\neq e^{(k)}$, porque difieren en la coordenada $j$. Así, $\{e^{(j)}:j\in\mathbb N\}$ es un subconjunto infinito de $G$.
>>3. Todo elemento de $G$ tiene orden una potencia de $p$. Sea $x=(x_i)_{i\in\mathbb N}\in G$. Para cada $i\in\mathbb N$ se tiene $px_i=0$ en $\mathbb Z_p$, de modo que $$px=(px_i)_{i\in\mathbb N}=(0,0,\dots)=e_G.$$
>>4. En consecuencia, el orden de $x$ divide a $p$: si $d=|x|$, por el algoritmo de la división existen enteros $q,r$ con $p=qd+r$ y $0\leq r<d$, y entonces $$e_G=px=(x^d)^qx^r=x^r,$$ de donde $r=0$ por la minimalidad de $d$.
>>5. Como $p$ es primo, sus divisores positivos son $1$ y $p$; por lo tanto $|x|\in\{1,p\}$ para todo $x\in G$. Es decir, $G$ es un $p$-grupo.
>>6. Así, $G$ es un $p$-grupo con $|G|=\infty$, y la afirmación del enunciado es falsa.

>[!exercise] Ejercicio 12
>Sean $G$ un $p$-grupo finito y $H\triangleleft G$, con $H$ no trivial. Probar que $H\cap C(G)\neq\{e\}$.
>>[!Proof]-
>>1. Como $H$ es un subgrupo no trivial de $G$, por el teorema de Lagrange existe $m\geq 1$ tal que $|H|=p^m$. Consideramos la acción de $G$ sobre $H$ dada por conjugación, $g\cdot h=ghg^{-1}$. Esta acción está bien definida porque $H\triangleleft G$.
>>2. Recordamos $$H^G=\{h\in H:g\cdot h=h\ \text{para todo }g\in G\}$$por el [[Teorico 6#^e8cda5|lema de puntos fijos]], aplicado a la acción de $G$ sobre $H$, se tiene $$|H|\equiv |H^G|\pmod p$$osea $|H|-|H^{G}|$ es divisible por $p$ y como $|H|=p^m$, resulta que $|H^G|$ es divisible por $p$
>>3. El elemento $e$ pertenece a $H^G$, ya que $g e g^{-1}=e$ para todo $g\in G$ osea no tiene orden $0$
>>4. Como $|H^G|$ es divisible por el primo $p$, no puede ser $|H^G|=1$; por consiguiente tiene orden mayor que $1$ analogamente existe $h\in H^G$ con $h\neq e$.
>>5. Finalmente, $h\in H^G$ significa que $ghg^{-1}=h$ para todo $g\in G$, o equivalentemente, $gh=hg$ para todo $g\in G$. Así, $h\in C(G)$ y, como también $h\in H$, se concluye que $h\in H\cap C(G)$ con $h\neq e$. Por lo tanto, $H\cap C(G)\neq\{e\}$.

>[!exercise] Ejercicio 13
>Sean $P$ un $p$-subgrupo de Sylow normal de un grupo finito $G$ y $f\in\operatorname{End}(G)$. Probar que $f(P)<P$.
>>[!Proof]-
>>1. Escribamos $|G|=p^nk$, donde $p$ no divide a $k$. Como $P$ es un $p$-subgrupo de Sylow, $|P|=p^n$. Sea $H=f(P)$. La restricción $f|_P:P\to G$ es un homomorfismo, por lo que $H$ es un subgrupo de $G$. 
>>2. Como la imagen de un homomorfismo entre grupos finitos tiene orden que divide al orden del dominio tenemos que $|H|=p^a$ para algún entero $0\leq a\leq n$. Por lo tanto, $H$ es un $p$-subgrupo (no necesariamente Sylow) de $G$.
>>3. Como $P\triangleleft G$, para cada $h\in H$ se tiene $hPh^{-1}=P$. Multiplicando ambos conjuntos a derecha por $h$, obtenemos $hP=Ph$. Por lo tanto, $$HP=\bigcup_{h\in H}hP=\bigcup_{h\in H}Ph=PH.$$
>>4. Probemos que $HP$ es un subgrupo de $G$. Es no vacío porque $e_G=e_Ge_G\in HP$. Sean $x=h_1p_1$ e $y=h_2p_2$ elementos de $HP$, con $h_1,h_2\in H$ y $p_1,p_2\in P$. Entonces $$xy^{-1}=h_1p_1p_2^{-1}h_2^{-1}.$$ Como $p_1p_2^{-1}\in P$, $h_2^{-1}\in H$ y $PH=HP$, existen $h_3\in H$ y $p_3\in P$ tales que $p_1p_2^{-1}h_2^{-1}=h_3p_3$. Luego $$xy^{-1}=h_1h_3p_3\in HP.$$ Por el criterio de subgrupo, $HP\leq G$.
>>5. Como $H\cap P\leq H$ y $|H|=p^a$, existe un entero $b$ con $0\leq b\leq a$ tal que $|H\cap P|=p^b$. La fórmula para el cardinal del producto de dos subgrupos da $$|HP|=\frac{|H|\,|P|}{|H\cap P|}.$$por tanto, $$|HP|=\frac{p^{a+n}}{p^b}=p^{a+n-b}$$así, $HP$ es un $p$-subgrupo de $G$.
>>6. Como $P\leq HP$, por lagrange $$p^{n}=|P|\,\big|\,|HP|$$puesto que $|G|=p^nk$ y $(p:k)=1$, el exponente de $p$ en $|HP|$ no puede exceder a $n$. En consecuencia, $$|HP|=p^n=|P|$$
>>7. La inclusión $P\leq HP$ entre grupos finitos del mismo orden implica $HP=P$. Asimismo, $H\leq HP$, pues $h=he_G\in HP$ para todo $h\in H$. Por lo tanto, $$f(P)=H\leq HP=P.$$ Es decir, $f(P)<P$ con la notación del enunciado.

>[!exercise] Ejercicio 14
>Sea $G$ un grupo finito. Si cada $p$-subgrupo de Sylow de $G$ es normal para cada primo $p$, entonces $G$ es el producto de sus subgrupos de Sylow.
>>[!Proof]-
>>1. Sea $|G|=p_1^{a_1}\cdots p_r^{a_r}$ la factorización de $|G|$ en potencias de primos distintos y, para cada $i\in\{1,\dots,r\}$, sea $P_i\in\operatorname{Syl}_{p_i}(G)$. Entonces $|P_i|=p_i^{a_i}$ y, por hipótesis, $P_i\trianglelefteq G$. Probaremos que $G=P_1P_2\cdots P_r$.
>>2. Definimos $H_m=P_1P_2\cdots P_m$ para $1\leq m\leq r$. Demostraremos por inducción que $H_m\leq G$ y que $|H_m|=\prod_{i=1}^{m}|P_i|$. Para $m=1$, se tiene $H_1=P_1\leq G$ y la igualdad de órdenes es inmediata.
>>3. Supongamos que $H_m\leq G$ y $|H_m|=\prod_{i=1}^{m}|P_i|$. Como $P_{m+1}\trianglelefteq G$ y $H_m\leq G$, la [[Teorico 4#El producto $NK$|Proposición 11]], da directamente $$H_{m+1}=H_mP_{m+1}=P_{m+1}H_m\leq G.$$
>>4. Por Lagrange, $|H_m\cap P_{m+1}|$ divide tanto a $|H_m|=\prod_{i=1}^{m}p_i^{a_i}$ como a $|P_{m+1}|=p_{m+1}^{a_{m+1}}$. Estos dos números son coprimos, de modo que $|H_m\cap P_{m+1}|=1$ y $H_m\cap P_{m+1}=\{e_G\}$. La fórmula del cardinal del producto da $$|H_{m+1}|\,|H_m\cap P_{m+1}|=|H_m|\,|P_{m+1}|,$$ y por ello $$|H_{m+1}|=|H_m|\,|P_{m+1}|=\prod_{i=1}^{m+1}|P_i|.$$ Esto completa el paso inductivo.
>>5. En consecuencia, $H_r=P_1P_2\cdots P_r$ es un subgrupo de $G$ y $$|H_r|=\prod_{i=1}^{r}|P_i|=\prod_{i=1}^{r}p_i^{a_i}=|G|.$$ Como $H_r\leq G$ y ambos grupos finitos tienen el mismo orden, se concluye que $$G=P_1P_2\cdots P_r.$$ Por lo tanto, $G$ es el producto de sus subgrupos de Sylow.

>[!exercise] Ejercicio 15
>Si $|G|=p^nq$, con $p>q$ primos, entonces $G$ contiene un único subgrupo normal de índice $q$.
>>[!Proof]-
>>1. Por el primer teorema de Sylow, existe $P\in\operatorname{Syl}_p(G)$. Como $|G|=p^nq$ y $p\neq q$, se tiene $|P|=p^n$. Por lo tanto, $|G|=q|P|$ y, en consecuencia, $[G:P]=q$.
>>2. Sea $n_p$ la cantidad de $p$-subgrupos de Sylow de $G$. Por el tercer teorema de Sylow, $n_p\mid q$ y $n_p\equiv1\pmod p$. Como $q$ es primo, la primera condición implica que $n_p\in\{1,q\}$.
>>3. Si $n_p=q$, entonces $q\equiv1\pmod p$, de modo que existe $k\in\mathbb Z$ tal que $q-1=kp$. Sin embargo, como $p>q>1$, se cumple $0<q-1<p$, y ningún entero estrictamente comprendido entre $0$ y $p$ es múltiplo de $p$. Esto es una contradicción. Por consiguiente, $n_p=1$ y $P$ es el único $p$-subgrupo de Sylow de $G$.
>>4. Probemos que $P$ es normal. Fijados $g\in G$ y $x\in P$, consideremos la conjugación $c_g:P\to gPg^{-1}$ dada por $c_g(x)=gxg^{-1}$. Esta aplicación es biyectiva, pues su inversa es $c_{g^{-1}}:gPg^{-1}\to P$, dada por $c_{g^{-1}}(h)=g^{-1}hg$, y se verifica que $$c_{g^{-1}}(c_g(x))=g^{-1}(gxg^{-1})g=x$$ para todo $x\in P$ y que $$c_g(c_{g^{-1}}(h))=g(g^{-1}hg)g^{-1}=h$$ para todo $h\in gPg^{-1}$. Por ello, $|gPg^{-1}|=|P|=p^n$, así que $gPg^{-1}$ también es un $p$-subgrupo de Sylow. La unicidad de $P$ implica que $gPg^{-1}=P$ para todo $g\in G$; por tanto, $P\trianglelefteq G$.
>>5. Finalmente, sea $H\trianglelefteq G$ un subgrupo de índice $q$. Entonces $|G|=q|H|$ y, como $|G|=p^nq$, resulta $|H|=p^n$. Por ello, $H$ es un $p$-subgrupo de Sylow de $G$. Como $P$ es el único, necesariamente $H=P$. En conclusión, $P$ es el único subgrupo normal de índice $q$ de $G$.

>[!exercise] Ejercicio 16
>Cada grupo de orden $12$, $28$, $56$ y $200$ debe contener un subgrupo de Sylow normal, y, por lo tanto, no es simple.
>>[!Proof]-
>>- Orden $12$.
>>	1. La idea es exhibir un $p$-subgrupo de Sylow normal propio no trivial, pues entonces $G$ no puede ser simple. Se tiene $12=2^2\cdot 3$, de modo que un $3$-subgrupo de Sylow tiene orden $3$ y un $2$-subgrupo de Sylow tiene orden $4$, y ambos existen por el primer teorema de Sylow.
>>	2. Por el segundo teorema de Sylow, dos $p$-subgrupos de Sylow para el mismo $p$ son conjugados en $G$. De aquí un $p$-subgrupo de Sylow $P$ es normal si y solo si es único: si $P$ es único y $g\in G$, entonces $gPg^{-1}$ es un $p$-subgrupo de Sylow y por unicidad $gPg^{-1}=P$; recíprocamente, si $P\triangleleft G$ y $Q$ es otro $p$-subgrupo de Sylow, existe $g\in G$ con $Q=gPg^{-1}=P$.
>>	3. Por el tercer teorema de Sylow, $n_3\equiv 1\pmod 3$ y $n_3$ divide a $4$, pues $12=3\cdot 4$ con $3\nmid 4$; los divisores positivos de $4$ son $1,2,4$, y $1=0\cdot 3+1$ y $4=1\cdot 3+1$ mientras $2\equiv 2\pmod 3$, de modo que $n_3\in\{1,4\}$. Análogamente, $n_2\equiv 1\pmod 2$ y $n_2$ divide a $3$, pues $12=4\cdot 3$ con $2\nmid 3$; los divisores positivos de $3$ son $1,3$, y $1=0\cdot 2+1$ y $3=1\cdot 2+1$, de modo que $n_2\in\{1,3\}$.
>>	4. Por Lagrange, el orden de todo elemento divide al orden del subgrupo que lo contiene. Si $|H|=3$ y $a\in H$ con $a\neq e$, entonces $|a|\in\{1,3\}$ y por lo tanto $|a|=3$. Si $|Q|=4$ y $b\in Q$, entonces $|b|\in\{1,2,4\}$; en particular $Q$ no contiene ningún elemento de orden $3$.
>>	5. Sean $H\neq K$ dos subgrupos de orden $3$. Entonces $H\cap K\leq H$, luego $|H\cap K|\in\{1,3\}$. Si $|H\cap K|=3$, entonces $H\cap K\subseteq H$ con el mismo cardinal finito $3$, luego $H\cap K=H$, y del mismo modo $H\cap K=K$, de donde $H=K$, contra la hipótesis. Por lo tanto $H\cap K=\{e\}$. Cada $H$ aporta exactamente $2$ elementos distintos de $e$, todos de orden $3$ por el paso anterior, y dos $H$ distintos no comparten ninguno de ellos.
>>	6. Si $n_3=1$, el único $3$-subgrupo de Sylow es normal por el paso 2 y se termina. Supongamos $n_3=4$. Por el paso 5 los cuatro $3$-subgrupos aportan $4\cdot 2=8$ elementos distintos de orden $3$, disjuntos dos a dos salvo en $e$; junto con $e$ son $8+1=9$ elementos distintos de $G$. Como $|G|=12$, quedan $12-9=3$ elementos distintos de $e$ fuera de ellos, es decir, el complemento de esos $8$ elementos en $G$ es un conjunto $R$ con $4$ elementos que contiene a $e$. Sea $Q\leq G$ con $|Q|=4$. Por el paso 4, $Q$ no contiene elementos de orden $3$, luego $Q\cap\{\text{los 8 elementos de orden 3}\}=\varnothing$ y por lo tanto $Q\subseteq R$. Como $Q\subseteq R$ con $|Q|=4=|R|$, se tiene $Q=R$. Así hay un único $2$-subgrupo de Sylow, es decir $n_2=1$, que es normal por el paso 2.
>>	7. En todos los casos $G$ posee un subgrupo de Sylow normal: si $n_3=1$ es el de orden $3$, y si $n_3=4$ es el de orden $4$. Como $3\neq 1,12$ y $4\neq 1,12$, dicho subgrupo normal es propio y no trivial, de modo que $G$ no es simple.
>>- Orden $28$.
>>	1. Se tiene $28=7\cdot 4$ con $7\nmid 4$, de modo que un $7$-subgrupo de Sylow tiene orden $7$ y existe por el primer teorema de Sylow.
>>	2. Por el tercer teorema de Sylow, $n_7\equiv 1\pmod 7$ y $n_7$ divide a $4$; los divisores positivos de $4$ son $1,2,4$, y $1=0\cdot 7+1$ mientras $2\equiv 2\pmod 7$ y $4\equiv 4\pmod 7$, de modo que $n_7=1$.
>>	3. Por el mismo criterio del Orden $12$, un $p$-subgrupo de Sylow es normal si y solo si es único, pues dos $p$-subgrupos de Sylow son conjugados. Como $n_7=1$, el único $7$-subgrupo de Sylow cumple $gPg^{-1}=P$ para todo $g\in G$, es decir $P\triangleleft G$. Como $7\neq 1,28$, es propio y no trivial, luego $G$ no es simple.
>>- Orden $56$.
>>	1. Se tiene $56=7\cdot 8$ con $7\nmid 8$, de modo que un $7$-subgrupo de Sylow tiene orden $7$ y un $2$-subgrupo de Sylow tiene orden $8$, y ambos existen por el primer teorema de Sylow.
>>	2. Por el tercer teorema de Sylow, $n_7\equiv 1\pmod 7$ y $n_7$ divide a $8$; los divisores positivos de $8$ son $1,2,4,8$, y $1=0\cdot 7+1$ y $8=1\cdot 7+1$ mientras $2\equiv 2\pmod 7$ y $4\equiv 4\pmod 7$, de modo que $n_7\in\{1,8\}$.
>>	3. Por Lagrange, el orden de todo elemento divide al orden del subgrupo que lo contiene. Si $|H|=7$ y $a\in H$ con $a\neq e$, entonces $|a|\in\{1,7\}$ y por lo tanto $|a|=7$. Si $|Q|=8$ y $b\in Q$, entonces $|b|\in\{1,2,4,8\}$; en particular $Q$ no contiene ningún elemento de orden $7$.
>>	4. Sean $H\neq K$ dos subgrupos de orden $7$. Entonces $H\cap K\leq H$ y $|H|=7$ es primo, luego $|H\cap K|\in\{1,7\}$; si fuera $7$ se tendría $H\cap K=H=K$ por igualdad de cardinales finitos, contra la hipótesis, así $H\cap K=\{e\}$. Cada $H$ aporta exactamente $6$ elementos distintos de $e$, todos de orden $7$ por el paso anterior, disjuntos de los de otro $K$ salvo en $e$.
>>	5. Si $n_7=1$, el único $7$-subgrupo de Sylow es normal por unicidad y se termina. Supongamos $n_7=8$. Por el paso anterior los ocho $7$-subgrupos aportan $8\cdot 6=48$ elementos distintos de orden $7$; junto con $e$ son $48+1=49$ elementos distintos de $G$. Como $|G|=56$, quedan $56-49=7$ elementos distintos de $e$ fuera de ellos, es decir, el complemento de esos $48$ elementos en $G$ es un conjunto $R$ con $8$ elementos que contiene a $e$. Sea $Q\leq G$ con $|Q|=8$. Por el paso 3, $Q$ no contiene elementos de orden $7$, luego $Q\subseteq R$, y como $|Q|=8=|R|$ se tiene $Q=R$. Así hay un único $2$-subgrupo de Sylow, es decir $n_2=1$, que es normal por unicidad.
>>	6. En todos los casos $G$ posee un subgrupo de Sylow normal: si $n_7=1$ es el de orden $7$, y si $n_7=8$ es el de orden $8$. Como $7\neq 1,56$ y $8\neq 1,56$, dicho subgrupo es propio y no trivial, luego $G$ no es simple.
>>- Orden $200$.
>>	1. Se tiene $200=25\cdot 8$ con $5\nmid 8$, de modo que un $5$-subgrupo de Sylow tiene orden $25$ y existe por el primer teorema de Sylow.
>>	2. Por el tercer teorema de Sylow, $n_5\equiv 1\pmod 5$ y $n_5$ divide a $8$; los divisores positivos de $8$ son $1,2,4,8$, y $1=0\cdot 5+1$ mientras $2\equiv 2\pmod 5$, $4\equiv 4\pmod 5$ y $8=1\cdot 5+3$, de modo que $n_5=1$.
>>	3. Por el mismo criterio anterior, un $p$-subgrupo de Sylow es normal si y solo si es único, pues dos $p$-subgrupos de Sylow son conjugados. Como $n_5=1$, el único $5$-subgrupo de Sylow cumple $gPg^{-1}=P$ para todo $g\in G$, es decir $P\triangleleft G$. Como $25\neq 1,200$, es propio y no trivial, luego $G$ no es simple.

>[!exercise] Ejercicio 17
>¿Cuántos elementos de orden $7$ existen en un grupo simple de orden $168$?
>>[!Proof]-
>>1. Se tiene $168=2^{3}\cdot 3\cdot 7$, de modo que un $7$-subgrupo de Sylow de $G$ tiene orden $7$ y existe por el primer teorema de Sylow.
>>2. Por el segundo teorema de Sylow, dos $7$-subgrupos de Sylow son conjugados en $G$, de modo que un $7$-subgrupo de Sylow es normal si y solo si es único.
>>3. Por el tercer teorema de Sylow, $n_{7}\equiv 1\pmod 7$ y $n_{7}$ divide a $24$; como $24=2^{3}\cdot 3$, sus divisores positivos son $1,2,3,4,6,8,12,24$, y entre ellos solo $1$ y $8$ son congruentes con $1$ módulo $7$, de modo que $n_{7}\in\{1,8\}$.
>>4. Si $n_{7}=1$, el único $7$-subgrupo de Sylow sería normal por el paso 2, propio y no trivial por tener orden $7$, contra la simplicidad de $G$. Por lo tanto $n_{7}=8$.
>>5. Por Lagrange, si $|H|=7$ y $a\in H$ con $a\neq e$, entonces $|a|$ divide a $7$, luego $|a|=7$. Así cada $7$-subgrupo de Sylow contiene exactamente $6$ elementos de orden $7$ además de $e$.
>>6. Sean $H\neq K$ dos subgrupos de orden $7$. Entonces $H\cap K\leq H$, luego $|H\cap K|\in\{1,7\}$; si fuera $7$, la igualdad de cardinales finitos daría $H\cap K=H=K$, contra la hipótesis, así $H\cap K=\{e\}$. Por lo tanto los ocho $7$-subgrupos aportan $8\cdot 6=48$ elementos distintos de orden $7$.
>>7. Sea $x\in G$ con $|x|=7$. Entonces $|\langle x\rangle|=7$, de modo que $\langle x\rangle$ es ya un $7$-subgrupo de Sylow de $G$ y coincide con uno de los ocho anteriores. En consecuencia no hay elementos de orden $7$ fuera de su unión.
>>8. Por lo tanto $G$ contiene exactamente $48$ elementos de orden $7$.

>[!exercise] Ejercicio 18
>Sea $G$ un grupo.
>- **(a)** Probar que si $|G|=p^n$ con $p$ primo y $n\in\mathbb{N}$, entonces $C(G)\neq\{e_G\}$.
>- **(b)** Probar que si $G/C(G)$ es cíclico, entonces $G$ es abeliano.
>- **(c)** Probar que si $|G|=p^2$ con $p$ primo, entonces $G$ es abeliano.
>- **(d)** Caracterizar todos los grupos de orden $p^2$.
>- **(e)** Dar un ejemplo de un grupo $G$ no abeliano tal que $G/C(G)$ sea abeliano.

>[!exercise] Ejercicio 19
>Sea $G$ un grupo de orden $p^3$, con $p$ primo.
>- **(a)** Si $G$ posee más de un subgrupo normal de orden $p$, entonces $G$ es abeliano y no cíclico.
>- **(b)** Si $G$ es no abeliano, entonces $|C(G)|=p$.

>[!exercise] Ejercicio 20
>Calcular todos los $p$-subgrupos de Sylow de:
>$$\mathbb{Z}_{12},\qquad \mathbb{Z}_{21}\oplus\mathbb{Z}_{15},\qquad S_3\times\mathbb{Z}_3,\qquad S_3\times S_3.$$

>[!exercise] Ejercicio 21
>Sean $p$ y $q$ primos. Probar que ningún grupo $G$ de orden $p^2q$ es simple.

>[!exercise] Ejercicio 22
>Probar que no existen grupos simples de los siguientes órdenes: $30$, $36$, $56$, $96$.

>[!exercise] Ejercicio 23
>Sea $G$ un grupo, $|G|=pq$, $p>q$ primos tales que $q$ no divide a $p-1$. Probar que $G$ es cíclico.

## Ejercicios adicionales

>[!exercise] Ejercicio 24
>Sean $G$ grupo y $K<G$. Mostrar que
>- **(a)** $K\triangleleft N_G(K)$.
>- **(b)** $K\triangleleft G$ si y sólo si $N_G(K)=G$.

>[!exercise] Ejercicio 25
>Sea $p$ un primo.
>- **(a)** Sea $G$ un grupo no abeliano de orden $p^3$. Probar que $C(G)=[G,G]$ y calcular $|C(G)|$.
>- **(b)** Calcular el conmutador del grupo $G=\left\{\begin{pmatrix}1&a&b\\0&1&c\\0&0&1\end{pmatrix},\ a,b,c\in\mathbb{Z}_p\right\}$.

>[!exercise] Ejercicio 26
>Para cada $\sigma\in S_n$ caracterizar la clase de conjugación $\mathcal{O}_{\sigma}$ y el centralizador $C_{S_n}(\sigma)$. Calcular $\#\mathcal{O}_{\sigma}$ y $|C_{S_n}(\sigma)|$.

>[!exercise] Ejercicio 27
>Sea $G$ un grupo tal que $|G|=2n$, $G$ tiene $n$ elementos de orden $2$ y los restantes elementos forman un subgrupo $H$. Probar que $n$ es impar y que $H\triangleleft G$.

>[!exercise] Ejercicio 28
>Determinar si existe un grupo $K$ tal que $G$ sea el producto semidirecto de $N\triangleleft K$ en cada uno de los siguientes casos.
>- **(a)** $G=\mathbb{G}_{12}$ y $N=\mathbb{G}_3$.
>- **(b)** $G=\mathbb{C}$ y $N=\mathbb{R}$.
>- **(c)** $G=S_4$ y $N=\{1,(12)(34),(13)(24),(14)(23)\}$.

>[!exercise] Ejercicio 29
>Sea $G$ un $p$-grupo infinito. Probar que vale una de las siguientes dos:
>- **(a)** $G$ tiene un subgrupo de orden $p^n$, para cada $n\in\mathbb{N}$.
>- **(b)** Existe $m\in\mathbb{N}$ tal que cada subgrupo finito tiene orden $\leq p^m$.

>[!exercise] Ejercicio 30
>Probar que no existen grupos simples de los siguientes órdenes: $200$, $204$, $260$, $2540$.
