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

>[!exercise] Ejercicio 5
>Mostrar que $\mathbb Q/{\sim}=\mathbb Q/\mathbb Z$, donde $\mathbb Q/{\sim}$ es el grupo dado en el Ejercicio 32 del Práctico 2 y $\mathbb Q/\mathbb Z$ es el grupo cociente del grupo $(\mathbb Q,+)$ por el subgrupo $(\mathbb Z,+)$.
>>[!Proof]-
>>1. Recordemos que $q\sim r$ si y solo si $q-r\in\mathbb Z$. Para cada $q\in\mathbb Q$, probaremos por doble inclusión que $[q]=q+\mathbb Z$.
>>2. Si $r\in[q]$, entonces $q-r\in\mathbb Z$, de modo que $r-q\in\mathbb Z$. Por lo tanto, $r=q+(r-q)\in q+\mathbb Z$. Así, $[q]\subseteq q+\mathbb Z$.
>>3. Recíprocamente, si $r\in q+\mathbb Z$, existe $z\in\mathbb Z$ tal que $r=q+z$. Entonces $q-r=-z\in\mathbb Z$, por lo que $r\in[q]$. Así, $q+\mathbb Z\subseteq[q]$.
>>4. En consecuencia, $[q]=q+\mathbb Z$ para todo $q\in\mathbb Q$, y ambos cocientes tienen los mismos elementos. Además, como $(\mathbb Q,+)$ es abeliano, $\mathbb Z$ es un subgrupo normal y el grupo cociente está definido.
>>5. Las operaciones también coinciden: en $\mathbb Q/{\sim}$ se define $[q]+[r]=[q+r]$, mientras que en $\mathbb Q/\mathbb Z$ se define $(q+\mathbb Z)+(r+\mathbb Z)=(q+r)+\mathbb Z$. Por lo probado, $[q+r]=(q+r)+\mathbb Z$.
>>6. Por lo tanto, ambos cocientes tienen el mismo conjunto subyacente y la misma operación, de modo que $\mathbb Q/{\sim}=\mathbb Q/\mathbb Z$ como grupos.

>[!exercise] Ejercicio 6
>Sean $G$ un grupo y $N\leq G$. Probar que si $[G:N]=2$, entonces $N\trianglelefteq G$.
>>[!Proof]-
>>1. Como $[G:N]=2$, hay exactamente dos clases laterales izquierdas y dos derechas, pues la cantidad de clases izquierdas coincide con la de derechas.
>>2. Una clase de cada tipo es $N$, ya que $eN=Ne=N$. Como las clases izquierdas forman una partición de $G$, la otra clase izquierda es $G\setminus N$. Por el mismo argumento, la otra clase derecha también es $G\setminus N$.
>>3. Sea $g\in G$. Si $g\in N$, entonces $gN=N=Ng$.
>>4. Si $g\notin N$, como $e\in N$, tenemos $g=ge\in gN$ y $g=eg\in Ng$. Por lo tanto, ninguna de estas clases puede ser $N$, pues contienen a $g\notin N$. Ambas deben ser la clase restante, de modo que $gN=G\setminus N=Ng$.
>>5. En ambos casos, $gN=Ng$. Como $g\in G$ era arbitrario, concluimos que $N\trianglelefteq G$.

>[!exercise] Ejercicio 7
>Sea $G$ un grupo y sea $Z(G)$ el centro de $G$: $$Z(G):=\{a\in G:ab=ba\text{ para todo }b\in G\}.$$
>- **(a)** Probar que $Z(G)$ es un subgrupo normal abeliano de $G$.
>- **(b)** ¿Es $G/Z(G)$ abeliano?
>- **(c)** Probar que si $f:G\to H$ es un epimorfismo, entonces $f(Z(G))\subseteq Z(H)$, y si $f$ es un isomorfismo se da la igualdad.
>- **(d)** ¿Es necesaria la hipótesis de que $f$ sea un epimorfismo?
>>[!Proof]-
>>- (a)
>>	1. Como $eg=g=ge$ para todo $g\in G$, se tiene $e\in Z(G)$; en particular, $Z(G)\neq\varnothing$.
>>	2. Sean $u,v\in Z(G)$. Para todo $g\in G$, de $vg=gv$ se obtiene $gv^{-1}=v^{-1}g$ multiplicando a izquierda y derecha por $v^{-1}$. Por lo tanto, $$(uv^{-1})g=u(v^{-1}g)=u(gv^{-1})=(ug)v^{-1}=(gu)v^{-1}=g(uv^{-1}).$$ Así, $uv^{-1}\in Z(G)$ y, por el criterio de subgrupo, $Z(G)\leq G$.
>>	3. Para cualquier $a\in G$ y $b\in Z(G)$, como $b$ conmuta con $a^{-1}$, se cumple $aba^{-1}=aa^{-1}b=b$. En consecuencia, $$aZ(G)a^{-1}=\{aba^{-1}:b\in Z(G)\}=\{b:b\in Z(G)\}=Z(G).$$ Por lo tanto, $Z(G)\trianglelefteq G$.
>>	4. Si $u,v\in Z(G)$, entonces $uv=vu$, pues $u$ conmuta con todo elemento de $G$, en particular con $v$. Luego $Z(G)$ es abeliano.
>>- (b)
>>	1. No. Por ejemplo, $Z(S_3)=\{e\}$, de modo que $S_3/Z(S_3)\cong S_3$, que no es abeliano: $(1\ 2)(2\ 3)\neq(2\ 3)(1\ 2)$.
>>- (c)
>>	1. Sea $x\in f(Z(G))$. Existe $\tilde x\in Z(G)$ tal que $f(\tilde x)=x$. Para cualquier $b\in H$, la sobreyectividad de $f$ proporciona $\tilde b\in G$ tal que $f(\tilde b)=b$.
>>	2. Como $\tilde x\in Z(G)$, se cumple $\tilde x\tilde b=\tilde b\tilde x$. Por lo tanto, $$xb=f(\tilde x)f(\tilde b)=f(\tilde x\tilde b)=f(\tilde b\tilde x)=f(\tilde b)f(\tilde x)=bx.$$ Como $b\in H$ era arbitrario, $x\in Z(H)$. Así, $f(Z(G))\subseteq Z(H)$.
>>	3. Supongamos ahora que $f$ es un isomorfismo. Para probar la inclusión recíproca, sea $x\in Z(H)$. Por sobreyectividad, existe $\tilde x\in G$ tal que $f(\tilde x)=x$.
>>	4. Sea $\tilde b\in G$ arbitrario. Como $x\in Z(H)$, tenemos $$f(\tilde x\tilde b)=xf(\tilde b)=f(\tilde b)x=f(\tilde b\tilde x).$$ Por inyectividad de $f$, resulta $\tilde x\tilde b=\tilde b\tilde x$.
>>	5. Puesto que $\tilde b\in G$ era arbitrario, $\tilde x\in Z(G)$. Luego $x=f(\tilde x)\in f(Z(G))$, lo que prueba $Z(H)\subseteq f(Z(G)).$ En consecuencia, $f(Z(G))=Z(H).$

>[!exercise] Ejercicio 8
>Sea $G$ un grupo y sea $\{N_i : i \in I\}$ una familia de subgrupos normales de $G$. Probar que $\bigcap_{i\in I} N_i \trianglelefteq G$.
>>[!Proof]-
>>1. Como cada $N_i\leq G$, el elemento neutro cumple $e\in N_i$ para todo $i\in I$. Por lo tanto, $e\in\bigcap_{i\in I} N_i$, de modo que $\bigcap_{i\in I} N_i\neq\varnothing$.
>>2. Sean $x,y\in\bigcap_{i\in I} N_i$. Entonces $x,y\in N_i$ para todo $i\in I$. Como cada $N_i$ es un subgrupo de $G$, se tiene $xy^{-1}\in N_i$ para todo $i\in I$. Por consiguiente, $xy^{-1}\in\bigcap_{i\in I} N_i$. Por el criterio de subgrupo, $\bigcap_{i\in I} N_i\leq G$.
>>3. Sean $g\in G$ y $n\in\bigcap_{i\in I} N_i$. Por definición de intersección, $n\in N_i$ para todo $i\in I$. 
>>4. Puesto que cada $N_i\trianglelefteq G$, se cumple $gng^{-1}\in N_i$ para todo $i\in I$. En consecuencia, $gng^{-1}\in\bigcap_{i\in I} N_i$.
>>5. De los pasos anteriores concluimos que $\bigcap_{i\in I} N_i\trianglelefteq G$.

>[!exercise] Ejercicio 9
>Si $G$ es abeliano, entonces todo subgrupo es normal. Mostrar que la recíproca no es cierta (ayuda: considerar el grupo de los cuaterniones).
>>[!Proof]-
>>1. **Implicación directa.** Supongamos que $G$ es abeliano y sea $H\leq G$. Para cualquier $g\in G$ y cualquier $h\in H$, como los elementos de $G$ conmutan, se cumple $$ghg^{-1}=gg^{-1}h=eh=h\in H.$$ Por lo tanto, $gHg^{-1}\subseteq H$ para todo $g\in G$, lo que demuestra que $H\trianglelefteq G$.
>>2. **Falsedad de la recíproca (contraejemplo).** Consideremos el grupo de los cuaterniones $Q_8=\{\pm 1,\pm i,\pm j,\pm k\}$, con la operación usual dada por $i^2=j^2=k^2=-1$, $ij=k=-ji$, $jk=i=-kj$, $ki=j=-ik$, y donde $-1$ conmuta con todos los elementos.
>>3. El grupo $Q_8$ no es abeliano, pues $ij=k\neq -k=ji$.
>>4. Para verificar que todo subgrupo de $Q_8$ es normal, analizamos los órdenes posibles de subgrupos. Como $|Q_8|=8$, por el teorema de Lagrange el orden de cualquier subgrupo debe ser $1$, $2$, $4$ u $8$.
>>5. Los subgrupos de orden $1$ y de orden $8$ son $\{1\}$ y $Q_8$, que son trivialmente normales.
>>6. El único elemento de orden $2$ en $Q_8$ es $-1$, ya que $(\pm i)^2=(\pm j)^2=(\pm k)^2=-1\neq 1$. Por lo tanto, el único subgrupo de orden $2$ es $\langle -1\rangle=\{1,-1\}$. Como $-1$ conmuta con todo elemento de $Q_8$, se tiene que $\{1,-1\}=Z(Q_8)$ es el centro del grupo, y en consecuencia $\{1,-1\}\trianglelefteq Q_8$.
>>7. Todo subgrupo de orden $4$ en $Q_8$ debe ser cíclico (pues el grupo de Klein requeriría tres elementos de orden $2$ y $Q_8$ posee solo uno), por lo que los únicos subgrupos de orden $4$ son $\langle i\rangle$, $\langle j\rangle$ y $\langle k\rangle$. Como cada uno de ellos tiene índice $[Q_8:H]=8/4=2$ en $Q_8$, y todo subgrupo de índice $2$ es normal (Ejercicio 6), se concluye que todos los subgrupos de orden $4$ son normales en $Q_8$.
>>8. En conclusión, todo subgrupo de $Q_8$ es normal en $Q_8$, pero $Q_8$ no es abeliano, lo que prueba que la recíproca no es cierta.


