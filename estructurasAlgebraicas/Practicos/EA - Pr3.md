---
tags:
  - AlgebraicStructures
  - Groups
  - Practico3
---

>[!exercise] Ejercicio 1
>Consideremos el grupo simétrico $S_3$.
>- **(a)** Si $H$ es el subgrupo cíclico generado por $(1\ 2)$, entonces ninguna coclase a izquierda de $H$ (excepto la misma $H$) es también una coclase a derecha de $H$.
>- **(b)** Si $K$ es el subgrupo cíclico generado por $(1\ 2\ 3)$, entonces toda coclase a izquierda de $K$ es también una coclase a derecha de $K$.
>>[!Proof]-
>>Usaremos la convención usual de composición de permutaciones: en un producto $\sigma\tau$, se aplica primero $\tau$ y luego $\sigma$.
>>- (a)
>>	1. Como $(1\ 2)^2=e$, se tiene $H=\langle(1\ 2)\rangle=\{e,(1\ 2)\}$.
>>	2. Calculamos por separado las coclases a izquierda $gH$ y a derecha $Hg$, para cada $g\in S_3$. Si $g=e$ o $g=(1\ 2)$, entonces $gH=Hg=H=\{e,(1\ 2)\}$.
>>	3. Para $g=(1\ 3)$, obtenemos $(1\ 3)H=\{(1\ 3),(1\ 2\ 3)\}$ y $H(1\ 3)=\{(1\ 3),(1\ 3\ 2)\}$.
>>	4. Para $g=(2\ 3)$, obtenemos $(2\ 3)H=\{(2\ 3),(1\ 3\ 2)\}$ y $H(2\ 3)=\{(2\ 3),(1\ 2\ 3)\}$.
>>	5. Las restantes elecciones de $g$ solamente repiten estas coclases. Por lo tanto, las coclases a izquierda distintas son $H$, $(1\ 3)H=\{(1\ 3),(1\ 2\ 3)\}$ y $(2\ 3)H=\{(2\ 3),(1\ 3\ 2)\}$, mientras que las coclases a derecha distintas son $H$, $H(1\ 3)=\{(1\ 3),(1\ 3\ 2)\}$ y $H(2\ 3)=\{(2\ 3),(1\ 2\ 3)\}$.
>>	6. La única coclase que aparece en ambas listas es $H$ misma. Así, ninguna coclase a izquierda de $H$, salvo $H$, es también una coclase a derecha de $H$.
>>- (b)
>>	1. Sea $\sigma=(1\ 2\ 3)$. Como $\sigma^2=(1\ 3\ 2)$ y $\sigma^3=e$, los únicos elementos de $K$ son $K=\langle(1\ 2\ 3)\rangle=\{e,(1\ 2\ 3),(1\ 3\ 2)\}$.
>>	2. Como $|S_3|=6$ y $|K|=3$, existen exactamente dos coclases a izquierda y dos coclases a derecha. Una de ellas es $K$ misma; para obtener la otra, tomamos $(1\ 2)\notin K$.
>>	3. Calculamos la coclase a izquierda: $$(1\ 2)K=\{(1\ 2),\ (1\ 2)(1\ 2\ 3),\ (1\ 2)(1\ 3\ 2)\}=\{(1\ 2),(2\ 3),(1\ 3)\}.$$ Calculamos la coclase a derecha: $$K(1\ 2)=\{(1\ 2),\ (1\ 2\ 3)(1\ 2),\ (1\ 3\ 2)(1\ 2)\}=\{(1\ 2),(1\ 3),(2\ 3)\}.$$ 
>>	4. Por consiguiente, $(1\ 2)K=K(1\ 2)=\{(1\ 2),(1\ 3),(2\ 3)\}$. Como las dos coclases a izquierda son $K$ y $(1\ 2)K$, y las dos coclases a derecha son $K$ y $K(1\ 2)$, toda coclase a izquierda de $K$ es también una coclase a derecha de $K$.

>[!exercise] Ejercicio 2
>Sea $G$ un grupo y sean $H$ y $K$ dos subgrupos de $G$. Definimos $HK:=\{hk:h\in H,\ k\in K\}$.
>- **(a)** Probar que $HK\leq G$ si y solo si $HK=KH$.
>- **(b)** Si $G$ es abeliano, entonces $HK\leq G$.
>>[!Proof]-
>>- (a)
>>	- **($\Rightarrow$).**
>>		1. Supongamos que $HK\leq G$. Tomemos $x\in HK$. Entonces $x=hk$, con $h\in H$ y $k\in K$. Como $HK$ es un subgrupo, $x^{-1}=(hk)^{-1}=k^{-1}h^{-1}\in HK$. Por lo tanto, existen $h_1\in H$ y $k_1\in K$ tales que $k^{-1}h^{-1}=h_1k_1$. Al tomar inversos, obtenemos $hk=(h_1k_1)^{-1}=k_1^{-1}h_1^{-1}\in KH$. Así, $HK\subseteq KH$.
>>		2. Para la inclusión recíproca, tomemos $y\in KH$. Entonces $y=kh$, con $k\in K$ y $h\in H$, y por lo tanto $y^{-1}=h^{-1}k^{-1}\in HK$. Como $HK$ es un subgrupo, $y=(y^{-1})^{-1}\in HK$. Así, $KH\subseteq HK$ y, en consecuencia, $HK=KH$.
>>	- **($\Leftarrow$)**
>>		1. Supongamos que $HK=KH$. Usaremos el criterio de subgrupo: verificaremos que $HK\neq\varnothing$ y que, para cualesquiera $x,y\in HK$, se cumple $xy^{-1}\in HK$.
>>		2. Como $e\in H$ y $e\in K$, tenemos $e=ee\in HK$; por lo tanto, $HK\neq\varnothing$.
>>		3. Sean $x,y\in HK$. Existen $h_1\in H$ y $k_1\in K$ tales que $x=h_1k_1$. Además, como $y\in HK=KH$, existen $k_2\in K$ y $h_2\in H$ tales que $y=k_2h_2$. Entonces $y^{-1}=h_2^{-1}k_2^{-1}$ y $$xy^{-1}=h_1k_1h_2^{-1}k_2^{-1}.$$
>>		4. Como $k_1h_2^{-1}\in KH=HK$, existen $h_3\in H$ y $k_3\in K$ tales que $k_1h_2^{-1}=h_3k_3$. Por consiguiente, $$xy^{-1}=h_1h_3k_3k_2^{-1}.$$
>>		5. Puesto que $h_1h_3\in H$ y $k_3k_2^{-1}\in K$, concluimos que $xy^{-1}\in HK$. Por el criterio de subgrupo, $HK\leq G$.
>>- (b)
>>	1. Supongamos que $G$ es abeliano. Como $e\in H$ y $e\in K$, se tiene $e=ee\in HK$; por lo tanto, $HK\neq\varnothing$.
>>	2. Sean $x,y\in HK$. Existen $h_1,h_2\in H$ y $k_1,k_2\in K$ tales que $x=h_1k_1$ e $y=h_2k_2$. Entonces $$xy^{-1}=h_1k_1(h_2k_2)^{-1}=h_1k_1k_2^{-1}h_2^{-1}.$$
>>	3. Como $G$ es abeliano, podemos reordenar los factores y obtener $$xy^{-1}=h_1h_2^{-1}k_1k_2^{-1}.$$
>>	4. Como $h_1h_2^{-1}\in H$ y $k_1k_2^{-1}\in K$, se sigue que $xy^{-1}\in HK$. Por el criterio de subgrupo, concluimos que $HK\leq G$.

>[!exercise] Ejercicio 3
>Sean $k,m,p\in\mathbb N$, con $p$ primo y $(p,m)=1$. Sean $G$ un grupo, con $|G|=p^km$, $H,K\leq G$ tales que $|H|=p^k$, $|K|=p^d$, $0<d\leq k$ y $K\not\subseteq H$. Entonces $HK$ no es subgrupo de $G$.
>>[!Proof]-
>>1. Como $H$ y $K$ son subgrupos finitos, vale la fórmula ya demostrada $$|HK|=\frac{|H||K|}{|H\cap K|}.$$ Esta igualdad cuenta el conjunto $HK$ y no requiere que $HK$ sea un subgrupo.
>>2. Como $H\cap K\leq K$, se tiene $|H\cap K|=p^r$ para algún $0\leq r\leq d$. Si $r=d$, entonces $H\cap K=K$, luego $K\subseteq H$, contradicción. Por lo tanto $r\leq d-1$ 
>>3. Ademas por 1. $$|HK|=p^k\cdot p^d/p^r=p^{k+d-r}=p^{k+s},$$ donde $s=d-r\geq 1$. En particular, $|HK|$ es una potencia de $p$ estrictamente mayor que $p^k$.
>>4. Si $HK$ fuera un subgrupo de $G$, el teorema de Lagrange daría $p^{k+s}\mid |G|=p^km$, y entonces $p^s\mid m$. Como $s\geq 1$ y $(p,m)=1$, esto es imposible. Concluimos que $HK$ no es subgrupo de $G$.

>[!exercise] Ejercicio 4
>Sean $H,K\leq G$ subgrupos de índice finito tales que $\gcd([G:H],[G:K])=1$. Probar que $G=HK$.
>>[!Proof]-
>>1. Como $H\cap K\leq H\leq G$, por multiplicatividad del índice, $$[G:H\cap K]=[G:H][H:H\cap K].$$
>>2. Análogamente, como $H\cap K\leq K\leq G$, $$[G:H\cap K]=[G:K][K:H\cap K].$$
>>3. Por lo tanto, $$[G:H][H:H\cap K]=[G:K][K:H\cap K],$$ de modo que $$[G:K]\mid [G:H][H:H\cap K].$$
>>4. Como $\gcd([G:H],[G:K])=1$, por el lema de Euclides, $$[G:K]\mid [H:H\cap K].$$
>>5. Consideremos la aplicación $$\varphi:H/(H\cap K)\longrightarrow G/K,\qquad \varphi(h(H\cap K))=hK.$$
>>6. La aplicación está bien definida: si $h_1(H\cap K)=h_2(H\cap K)$, entonces $h_2^{-1}h_1\in H\cap K\subseteq K$, y por lo tanto $h_1K=h_2K$.
>>7. Además, $\varphi$ es inyectiva: si $\varphi(h_1(H\cap K))=\varphi(h_2(H\cap K))$, entonces $h_1K=h_2K$, por lo que $h_2^{-1}h_1\in K$. Como $h_1,h_2\in H$, también $h_2^{-1}h_1\in H$, luego $h_2^{-1}h_1\in H\cap K$, de donde $$h_1(H\cap K)=h_2(H\cap K).$$
>>8. Como $\varphi$ es inyectiva y ambos conjuntos son finitos, $$[H:H\cap K]\leq [G:K].$$
>>9. Pero por el paso 4, $[G:K]\mid [H:H\cap K]$. Como ambos índices son enteros positivos, necesariamente $$[H:H\cap K]=[G:K].$$
>>10. Por lo tanto, $\varphi$ es una aplicación inyectiva entre dos conjuntos finitos del mismo cardinal, y entonces es biyectiva.
>>11. Sea ahora $g\in G$. Como $\varphi$ es sobreyectiva, existe $h\in H$ tal que $$gK=hK.$$
>>12. La igualdad de clases laterales implica $h^{-1}g\in K$. Si definimos $k=h^{-1}g\in K$, entonces $$g=hk\in HK.$$
>>13. Como $g\in G$ era arbitrario, $G\subseteq HK$. Además, como $H,K\leq G$, se tiene trivialmente $HK\subseteq G$. Por lo tanto, $$\boxed{G=HK}.$$
