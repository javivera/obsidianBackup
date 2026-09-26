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

^43d943

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
>>7. Sea $x\in G$ con $|x|=7$. Entonces $|\langle x\rangle|=7$, de modo que $\langle x\rangle$ es ya un $7$-subgrupo de Sylow de $G$ y coincide con uno de los ocho anteriores. En consecuencia no hay elementos de orden $7$ fuera de los $8$ $Syl(7)$ que ya contamos 
>>8. Por lo tanto $G$ contiene exactamente $48$ elementos de orden $7$.

>[!exercise] Ejercicio 18
>Sea $G$ un grupo.
>- **(a)** Probar que si $|G|=p^n$ con $p$ primo y $n\in\mathbb{N}$, entonces $C(G)\neq\{e_G\}$.
>- **(b)** Probar que si $G/C(G)$ es cíclico, entonces $G$ es abeliano.
>- **(c)** Probar que si $|G|=p^2$ con $p$ primo, entonces $G$ es abeliano.
>- **(d)** Caracterizar todos los grupos de orden $p^2$.
>- **(e)** Dar un ejemplo de un grupo $G$ no abeliano tal que $G/C(G)$ sea abeliano.

^9d391e

>[!exercise] Ejercicio 19
>Sea $G$ un grupo de orden $p^3$, con $p$ primo.
>- **(a)** Si $G$ posee más de un subgrupo normal de orden $p$, entonces $G$ es abeliano y no cíclico.
>- **(b)** Si $G$ es no abeliano, entonces $|C(G)|=p$.

>[!exercise] Ejercicio 20
>Calcular todos los $p$-subgrupos de Sylow de: $$\mathbb{Z}_{12},\qquad \mathbb{Z}_{21}\oplus\mathbb{Z}_{15},\qquad S_3\times\mathbb{Z}_3,\qquad S_3\times S_3.$$
>>[!Proof]-
>>- **Observación previa.** Si $(a,b)$ pertenece a un producto directo, entonces $\operatorname{ord}(a,b)=\operatorname{mcm}(\operatorname{ord}(a),\operatorname{ord}(b))$; en particular, el orden de cada coordenada divide al orden del par.
>>- **Subgrupos de un grupo cíclico.** Si $G=\langle g\rangle$ tiene orden $n$ y $d\mid n$, entonces $G$ posee un único subgrupo de orden $d$, a saber $\langle g^{n/d}\rangle$.
>>	1. Sea $m=n/d$, de modo que $n=dm$. Entonces $(g^m)^d=g^{md}=g^n=e$, por lo que $\operatorname{ord}(g^m)\mid d$. 
>>	2. Si $1\leq k<d$ cumple $(g^m)^k=e$, entonces $g^{mk}=e$, luego $n\mid mk$, es decir $dm\mid mk$ y por tanto $d\mid k$, lo cual es imposible pues $1\leq k<d$. 
>>	3. Así, $d$ es el menor exponente positivo que anula a $g^m$, es decir $\operatorname{ord}(g^{n/d})=d$. Por lo tanto, $\langle g^{n/d}\rangle$ es un subgrupo de orden $d$.
>>	4. Si $H\leq G$ tiene orden $d$, como todo subgrupo de un cíclico es cíclico, $H=\langle g^k\rangle$ para algún $k$. Con $e=\gcd(k,n)$ se tiene $\langle g^k\rangle=\langle g^e\rangle$, y $|\langle g^e\rangle|=n/e$ pues $e\mid n$. 
>>	5. Como $|H|=d$, resulta $e=n/d$, de donde $H=\langle g^{n/d}\rangle$.
>>- **(a)** $\mathbb{Z}_{12}$.
>>	1. Se tiene $|\mathbb{Z}_{12}|=12=2^2\cdot3$. Como $\mathbb{Z}_{12}$ es cíclico, posee un único subgrupo de cada orden divisor de $12$. Por lo tanto, el único $2$-subgrupo de Sylow, que debe tener orden $4$, es $\langle[3]\rangle=\{[0],[3],[6],[9]\}$, y el único $3$-subgrupo de Sylow, que debe tener orden $3$, es $\langle[4]\rangle=\{[0],[4],[8]\}$.
>>- **(b)** $G=\mathbb{Z}_{21}\oplus\mathbb{Z}_{15}$.
>>	1. Se tiene $|G|=21\cdot15=3^2\cdot5\cdot7$. En $\mathbb{Z}_{21}$, el único subgrupo de orden $3$ es $\langle[7]\rangle$, y en $\mathbb{Z}_{15}$, el único subgrupo de orden $3$ es $\langle[5]\rangle$. Por ello, $P_3=\langle([7],[0]),([0],[5])\rangle=\langle[7]\rangle\oplus\langle[5]\rangle$ tiene orden $3\cdot3=9$, luego es un $3$-subgrupo de Sylow.
>>	2. Para probar que $P_3$ es el único, sea $Q$ otro $3$-subgrupo de Sylow y sea $(a,b)\in Q$. Por Lagrange, $\operatorname{ord}(a,b)\mid9$; por la observación previa, $\operatorname{ord}(a)\mid\operatorname{ord}(a,b)\mid9$ y $\operatorname{ord}(b)\mid\operatorname{ord}(a,b)\mid9$. Además, $\operatorname{ord}(a)\mid21$ y $\operatorname{ord}(b)\mid15$, luego $\operatorname{ord}(a)\mid\gcd(9,21)=3$ y $\operatorname{ord}(b)\mid\gcd(9,15)=3$. Como $\mathbb{Z}_{21}$ y $\mathbb{Z}_{15}$ son cíclicos, sus únicos subgrupos de orden $3$ son, respectivamente, $\langle[7]\rangle$ y $\langle[5]\rangle$; por tanto, $a\in\langle[7]\rangle$ y $b\in\langle[5]\rangle$, de donde $Q\subseteq P_3$. Como ambos subgrupos tienen orden $9$, $Q=P_3$.
>>	3. En $\mathbb{Z}_{15}$, el único subgrupo de orden $5$ es $\langle[3]\rangle$, mientras que $\mathbb{Z}_{21}$ no tiene subgrupos de orden $5$. Por lo tanto, $P_5=\langle([0],[3])\rangle$ tiene orden $5$. 
>>	4. Si $Q$ es otro $5$-subgrupo de Sylow y $(a,b)\in Q$, por Lagrange $\operatorname{ord}(a,b)\mid5$, y por la observación previa $\operatorname{ord}(a)\mid5$ y $\operatorname{ord}(b)\mid5$. 
>>	5. Además, $\operatorname{ord}(a)\mid21$ y $\operatorname{ord}(b)\mid15$, luego $\operatorname{ord}(a)\mid\gcd(5,21)=1$ y $\operatorname{ord}(b)\mid\gcd(5,15)=5$, por lo que $a=[0]$ y, como $\mathbb{Z}_{15}$ es cíclico y su único subgrupo de orden $5$ es $\langle[3]\rangle$, se tiene $b\in\langle[3]\rangle$. 
>>	6. Entonces $Q\subseteq P_5$ y, como ambos tienen orden $5$, $Q=P_5$
>>	7. En $\mathbb{Z}_{21}$, el único subgrupo de orden $7$ es $\langle[3]\rangle$, mientras que $\mathbb{Z}_{15}$ no tiene subgrupos de orden $7$. Por lo tanto, $P_7=\langle([3],[0])\rangle$ tiene orden $7$.
>>	8. Si $Q$ es otro $7$-subgrupo de Sylow y $(a,b)\in Q$, por Lagrange $\operatorname{ord}(a,b)\mid7$, y por la observación previa $\operatorname{ord}(a)\mid7$ y $\operatorname{ord}(b)\mid7$. 
>>	9. Además, $\operatorname{ord}(a)\mid21$ y $\operatorname{ord}(b)\mid15$, luego $\operatorname{ord}(a)\mid\gcd(7,21)=7$ y $\operatorname{ord}(b)\mid\gcd(7,15)=1$, por lo que $a\in\langle[3]\rangle$ y $b=[0]$. 
>>	10. Así, $Q\subseteq P_7$ y, como ambos tienen orden $7$, $Q=P_7$.
>>- **(c)** $G=S_3\times\mathbb{Z}_3$.
>>	1. Se tiene $|G|=6\cdot3=2\cdot3^2$. Sus $2$-subgrupos de Sylow tienen orden $2$. Sea $Q$ uno de ellos y sea $(\sigma,[a])$ su elemento no neutro. Entonces $\operatorname{ord}(\sigma,[a])=2$.
>>	2. Por la observación previa, $\operatorname{ord}([a])\mid2$; como también $\operatorname{ord}([a])\mid3$ por lagrange entonces se tiene $\operatorname{ord}([a])=1$ y, por lo tanto, $[a]=[0]$. 
>>	3. Como $\operatorname{ord}(\sigma)$ divide a $\operatorname{ord}(\sigma,[a])=2$ y también divide a $|S_3|=6$, se tiene $\operatorname{ord}(\sigma)\mid\gcd(2,6)=2$. Además, $\sigma\neq e$, pues $(\sigma,[a])$ no es el neutro; por lo tanto, $\operatorname{ord}(\sigma)=2$. 
>>	4. Las únicas permutaciones de $S_3$ de orden $2$ son las transposiciones. Por lo tanto, los $2$-subgrupos de Sylow son exactamente $P_{\tau}=\langle(\tau,[0])\rangle$, donde $\tau\in\{(12),(13),(23)\}$, y hay tres.
>>	5. El subgrupo $P_3=\langle((123),[0]),(e,[1])\rangle=\langle(123)\rangle\times\mathbb{Z}_3$ tiene orden $9$, luego es un $3$-subgrupo de Sylow. Por el tercer teorema de Sylow, $n_3\mid2$ y $n_3\equiv1\pmod3$, de modo que $n_3=1$; por lo tanto, $P_3$ es el único $3$-subgrupo de Sylow.
>>- **(d)** $G=S_3\times S_3$.
>>	1. Se tiene $|G|=36=2^2\cdot3^2$. El subgrupo $P_3=\langle((123),e),(e,(123))\rangle=\langle(123)\rangle\times\langle(123)\rangle$ tiene orden $9$, luego es un $3$-subgrupo de Sylow. 
>>	2. Veamos que es único, sea $Q$ otro $3$-subgrupo de Sylow y sea $(\sigma,\tau)\in Q$. Por Lagrange, $\operatorname{ord}(\sigma,\tau)\mid9$; por la observación previa, $\operatorname{ord}(\sigma)\mid9$ y $\operatorname{ord}(\tau)\mid9$.
>>	3. Además, $\operatorname{ord}(\sigma)\mid6$ y $\operatorname{ord}(\tau)\mid6$, luego $\operatorname{ord}(\sigma)\mid\gcd(9,6)=3$ y $\operatorname{ord}(\tau)\mid\gcd(9,6)=3$. Como $\langle(123)\rangle$ es el único subgrupo de orden $3$ de $S_3$, se tiene $\sigma,\tau\in\langle(123)\rangle$, de modo que $(\sigma,\tau)\in P_3$. Así, $Q\subseteq P_3$ y, como ambos tienen orden $9$, $Q=P_3$.
>>	4. Los $2$-subgrupos de Sylow tienen orden $4$ y son $P_{\tau,\rho}=\langle(\tau,e),(e,\rho)\rangle=\langle\tau\rangle\times\langle\rho\rangle$, donde $\tau,\rho\in\{(12),(13),(23)\}$. Hay $3\cdot3=9$ elecciones y, por tanto, nueve $2$-subgrupos de Sylow distintos.
>>	5. Para ver que son todos, por el tercer teorema de Sylow $n_2\mid9$ y $n_2\equiv1\pmod2$, de modo que $n_2\in\{1,3,9\}$. Como ya exhibimos nueve $2$-subgrupos de Sylow distintos, $n_2=9$ y la lista anterior es completa.

>[!exercise] Ejercicio 21
>Sean $p$ y $q$ primos. Probar que ningún grupo $G$ de orden $p^2q$ es simple.
>>[!Proof]-
>>- **Criterio previo.** Por el segundo teorema de Sylow, dos $p$-subgrupos de Sylow para el mismo primo son conjugados en $G$. De aquí un $p$-subgrupo de Sylow $P$ es normal si y solo si es único: si $P$ es único y $g\in G$, entonces $gPg^{-1}$ es un $p$-subgrupo de Sylow y por unicidad $gPg^{-1}=P$; recíprocamente, si $P\triangleleft G$ y $Q$ es otro $p$-subgrupo de Sylow, existe $g\in G$ con $Q=gPg^{-1}=P$. Un testigo de no-simplicidad debe ser normal, propio y no trivial. Por Lagrange, el orden de todo elemento y de todo subgrupo divide a $|G|$.
>>- **Caso $p=q$.**
>>	1. Por sustitución directa $|G|=p^3$. Por [[EA - Pr5#^9d391e|Ejercicio 18 (a)]] se tiene $Z(G)\neq\{e\}$
>>	2. Además $Z(G)\triangleleft G$, pues conjugar un elemento central lo deja fijo: $gzg^{-1}=z$ para todo $z\in Z(G)$ y $g\in G$.
>>	3. Si $Z(G)\neq G$, entonces $Z(G)$ mismo es normal propio no trivial y $G$ no es simple.
>>	4. Si $Z(G)=G$, entonces $G$ es abeliano y todo subgrupo es obviamente normal por conmutación. 
>>	5. Como $p\mid |G|$, por el teorema de Cauchy existe $g\in G$ con $|g|=p$. Entonces $|\langle g\rangle|=|g|=p$, y como $1<p<p^3=|G|$ resulta $\langle g\rangle$ propio y no trivial; al ser $G$ abeliano es normal. Luego $G$ no es simple.
>>	6. En ambos subcasos $G$ no es simple cuando $p=q$.
>>- **Caso $p\neq q$ con $p>q$.**
>>	1. Se tiene $|G|=p^2q$ con $p>q$ primos distintos. Por [[EA - Pr5#^43d943]] con $n=2$, $G$ posee un único subgrupo normal de índice $q$.
>>	2. Por Lagrange dicho subgrupo tiene orden $p^2$. Como $q\geq 2$ es primo, $1<p^2<p^2q=|G|$, de modo que es propio y no trivial. Luego $G$ no es simple.
>>- **Caso $p\neq q$ con $q>p$.**
>>	1. Por Lagrange, un $p$-subgrupo de Sylow tiene orden $p^2$ y un $q$-subgrupo de Sylow tiene orden $q$; ambos órdenes son $>1$ y $<p^2q$ pues $p,q\geq 2$, de modo que un Sylow único sería un testigo propio no trivial si además es normal por el criterio previo.
>>	2. Escribiendo $|G|=p^2\cdot q$ con $p\nmid q$, el tercer teorema da $n_p\mid q$ y $n_p\equiv 1\pmod p$. Como $q$ es primo, $n_p\in\{1,q\}$.
>>	3. Escribiendo $|G|=q\cdot p^2$ con $q\nmid p^2$, el tercer teorema da $n_q\mid p^2$ y $n_q\equiv 1\pmod q$. Los divisores positivos de $p^2$ son $1,p,p^2$. El valor $p$ es imposible: $p\equiv 1\pmod q$ significaría $q\mid(p-1)$, pero $1\leq p-1<q$ pues $p<q$, y ningún entero entre $1$ y $q-1$ es múltiplo de $q$. Luego $n_q\in\{1,p^2\}$.
>>	4. Si $n_p=1$ o $n_q=1$, el único Sylow correspondiente es normal por el criterio previo, propio y no trivial por el paso 1, y $G$ no es simple. Supongamos por contradicción que $G$ fuera simple en este subcaso. Entonces ningún Sylow puede ser único, de modo que $n_p>1$ y $n_q>1$, es decir $n_p=q$ y $n_q=p^2$.
>>	5. Sean $Q_1,\dots,Q_{p^2}$ los $q$-Sylow. Por Lagrange, dos distintos de orden primo $q$ se cortan solo en $\{e\}$; aportan $p^2(q-1)$ elementos distintos de orden $q$.
>>	6. Sea $E_q$ su unión y $R=G\setminus E_q$ como conjunto: por resta directa $$|R|=p^2q-p^2(q-1)=p^2$$, y $e\in R$.
>>	7. Sea $P$ un $p$-Sylow arbitrario: tiene orden $p^2$ y por Lagrange sus elementos no neutros tienen orden $p$ o $p^2\neq q$, luego $P\cap E_q=\varnothing$ por lo tanto $P\subseteq R$. 
>>	8. Como $|P|=|R|=p^2$ finitos, $P=R$ entonces $n_p=1$.
>>	9. Esto contradice $n_p=q>1$ ($q$ primo es $>1$) del paso 4. El supuesto de simplicidad es imposible en este subcaso: $G$ no es simple cuando $q>p$.
>>- **Conclusión.** Los casos $p=q$, $p>q$ y $q>p$ son exhaustivos y en cada uno se exhibe un subgrupo normal propio no trivial. Por lo tanto ningún grupo de orden $p^2q$ es simple.

>[!exercise] Ejercicio 22
>Probar que no existen grupos simples de los siguientes órdenes: $30$, $36$, $56$, $96$.
>>[!Proof]-
>>- **Criterio previo.** Por el segundo teorema de Sylow, dos $p$-subgrupos de Sylow son conjugados. De aquí un $p$-Sylow $P$ es normal si y solo si es único: la conjugación $c_g(x)=gxg^{-1}$ es biyectiva de inversa $c_{g^{-1}}$ y preserva productos, luego $|gPg^{-1}|=|P|$ y $gPg^{-1}$ es un $p$-Sylow; si $P$ es único, $gPg^{-1}=P$ para todo $g$; recíprocamente, si $P\triangleleft G$ y $Q$ es otro $p$-Sylow, existe $g$ con $Q=gPg^{-1}=P$. Un testigo de no-simplicidad debe ser normal, propio y no trivial. El núcleo de todo homomorfismo es normal: si $f(k)=e$ entonces $f(gkg^{-1})=e$.
>>- **Orden $30$.**
>>	1. Se tiene $|G|=30=2\cdot 3\cdot 5$. Un $3$-Sylow tiene orden $3$ y un $5$-Sylow tiene orden $5$. Por el tercer teorema, $n_3\mid 10$ y $n_3\equiv 1\pmod 3$; los divisores de $10$ son $1,2,5,10$, y solo $1$ y $10$ son congruentes con $1$ módulo $3$, luego $n_3\in\{1,10\}$. Análogamente, $n_5\mid 6$ y $n_5\equiv 1\pmod 5$; los divisores de $6$ son $1,2,3,6$, y solo $1$ y $6$ son congruentes con $1$ módulo $5$, luego $n_5\in\{1,6\}$.
>>	2. Si $n_3=1$ o $n_5=1$, el único Sylow correspondiente es normal por el criterio previo, de orden $3$ o $5$, y $1<3,5<30$, luego propio y no trivial. Así $G$ no es simple.
>>	3. Sean $H\neq K$ dos subgrupos de orden primo $p$. Entonces $H\cap K\leq H$, luego $|H\cap K|\in\{1,p\}$; si fuera $p$, la igualdad de cardinales finitos daría $H\cap K=H=K$, contra la hipótesis, así $H\cap K=\{e\}$. Si $|H|=3$ y $a\in H$ con $a\neq e$, entonces $|a|\mid 3$ y $|a|=3$; si $|H|=5$ y $a\neq e$, entonces $|a|=5$.
>>	4. Si $n_3=10$ y $n_5=6$, los diez $3$-Sylow aportan $10\cdot 2=20$ elementos distintos de orden $3$, y los seis $5$-Sylow aportan $6\cdot 4=24$ elementos distintos de orden $5$, disjuntos dos a dos salvo en $e$ por el paso anterior. Serían $44$ elementos no neutros distintos, pero $|G|-1=29$. Como $44>29$, esto es imposible.
>>	5. En consecuencia no puede ocurrir $n_3=10$ y $n_5=6$ a la vez, y el paso 2 da siempre un Sylow normal propio no trivial. Ningún grupo de orden $30$ es simple.
>>- **Orden $56$.** Por el Ejercicio 16, todo grupo de orden $56$ posee un subgrupo de Sylow normal (de orden $7$ u $8$), propio y no trivial pues $1<7,8<56$. Luego ningún grupo de orden $56$ es simple.
>>- **Orden $36$.**
>>	1. Se tiene $|G|=36=4\cdot 9$ con $3\nmid 4$, de modo que un $3$-Sylow tiene orden $9$. Por el tercer teorema, $n_3\mid 4$ y $n_3\equiv 1\pmod 3$; los divisores de $4$ son $1,2,4$, y solo $1$ y $4$ son congruentes con $1$ módulo $3$, luego $n_3\in\{1,4\}$.
>>	2. Si $n_3=1$, el único $3$-Sylow es normal por el criterio previo, de orden $9$, y $1<9<36$, luego propio y no trivial.
>>	3. Supongamos $n_3=4$. Sea $X=\{P_1,P_2,P_3,P_4\}$ el conjunto de los $3$-Sylow. Para $g\in G$ y $P\in X$ ponemos $g\cdot P=gPg^{-1}$. Como $c_g$ es biyectiva, $|gPg^{-1}|=|P|=9$ y es subgrupo, luego otro $3$-Sylow; así $g\cdot P\in X$. Se verifican $1\cdot P=P$ y $(gh)\cdot P=g\cdot(h\cdot P)$, de modo que es una acción. Sea $\varphi:G\to\mathrm{Sym}(X)\cong S_4$ dada por $\varphi(g)(P)=g\cdot P$, y $K=\ker\varphi=\{g:gPg^{-1}=P\ \forall P\in X\}$, normal por ser núcleo.
>>	4. Por Lagrange en $G$, $|G|=|K|\cdot|G/K|$, luego $|G/K|$ divide a $36$. Por el primer teorema de isomorfismo, $G/K\cong\mathrm{im}\,\varphi\leq S_4$ con $|S_4|=24$; por Lagrange en $S_4$, $|\mathrm{im}\,\varphi|$ divide a $24$, luego $|G/K|$ divide a $24$. Así $|G/K|$ divide a $\gcd(36,24)=12$, de donde $|G/K|\leq 12$ y $|K|=36/|G/K|\geq 3$; en particular $K\neq\{e\}$ (si $K=\{e\}$ entonces $36=|G/K|$ dividiría a $24$, imposible).
>>	5. Si $K=G$, fijado $P\in X$ se tendría $gPg^{-1}=P$ para todo $g$, es decir $P\triangleleft G$, luego $P$ sería único y $n_3=1$, contra $n_3=4$. Así $K\neq G$. Por tanto $K$ es normal, propio y no trivial, y $G$ no es simple en este caso tampoco.
>>- **Orden $96$.** Pendiente.

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
