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

^6d69d8

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
>>7. Si un subgrupo $H\leq Q_8$ tiene orden $4$, su índice es $[Q_8:H]=8/4=2$. Como todo subgrupo de índice $2$ es normal (por el [[EA - Pr3#^6d69d8|ejercicio 6]]), se concluye que cualquier subgrupo de orden $4$ es automáticamente normal en $Q_8$.
>>8. En conclusión, todo subgrupo de $Q_8$ es normal en $Q_8$, pero $Q_8$ no es abeliano, lo que prueba que la recíproca no es cierta.
 
>[!exercise] Ejercicio 10
>- **(a)** Probar que para todo $g\in G$, $gHg^{-1}\leq G$ y $gHg^{-1}\cong H$.
>- **(b)** Si $|H|=n$ y es el único subgrupo de orden $n$ en $G$, entonces $H\trianglelefteq G$.
>
>>[!Proof]-
>>- (a)
>>	1. Sea $g\in G$ fijo. Como $e\in H$, se tiene $geg^{-1}=e\in gHg^{-1}$; en particular, $gHg^{-1}\neq\varnothing$.
>>	2. Sean $x,y\in gHg^{-1}$. Existen $h_1,h_2\in H$ tales que $x=gh_1g^{-1}$ e $y=gh_2g^{-1}$. Entonces $$xy^{-1}=gh_1g^{-1}(gh_2g^{-1})^{-1}=gh_1h_2^{-1}g^{-1}.$$ Como $H\leq G$, se tiene $h=h_1h_2^{-1}\in H$, luego $xy^{-1}=ghg^{-1}\in gHg^{-1}$. Por el criterio de subgrupo, $gHg^{-1}\leq G$.
>>	3. Definimos $f:H\to gHg^{-1}$ por $f(h)=ghg^{-1}$. Si $h_1,h_2\in H$, entonces $$f(h_1h_2)=gh_1h_2g^{-1}=gh_1g^{-1}gh_2g^{-1}=f(h_1)f(h_2),$$ de modo que $f$ es un morfismo.
>>	4. Si $f(h_1)=f(h_2)$, entonces $gh_1g^{-1}=gh_2g^{-1}$, y cancelando $g$ a izquierda y $g^{-1}$ a derecha se obtiene $h_1=h_2$; luego $f$ es inyectiva.
>>	5. Si $y\in gHg^{-1}$, existe $h\in H$ tal que $y=ghg^{-1}=f(h)$; luego $f$ es sobreyectiva. Por lo tanto, $f$ es un isomorfismo y $gHg^{-1}\cong H$.
>>- (b)
>>	1. Sea $g\in G$ arbitrario. Por la parte (a), $gHg^{-1}\leq G$ y $gHg^{-1}\cong H$.
>>	2. Como $gHg^{-1}\cong H$, la correspondencia es una biyección y por lo tanto $|gHg^{-1}|=|H|=n$.
>>	3. Por hipótesis, $H$ es el único subgrupo de $G$ de orden $n$. Como $gHg^{-1}\leq G$ y $|gHg^{-1}|=n$, se concluye que $gHg^{-1}=H$.
>>	4. Como $g\in G$ era arbitrario, $gHg^{-1}=H$ para todo $g\in G$, lo que prueba que $H\trianglelefteq G$.

>[!exercise] Ejercicio 11
>- **(a)** Si $H\triangleleft G$ o $K\triangleleft G$, entonces $HK\leq G$.
>- **(b)** Si $H$ y $K$ son normales, entonces $HK$ es normal en $G$.
>
>>[!Proof]-
>>- (a)
>>	1. Como $e\in H$ y $e\in K$, se tiene $e=ee\in HK$; por lo tanto, $HK\neq\varnothing$.
>>	2. Sean $x,y\in HK$. Existen $h_1,h_2\in H$ y $k_1,k_2\in K$ tales que $x=h_1k_1$ e $y=h_2k_2$. Entonces $$xy^{-1}=h_1k_1(h_2k_2)^{-1}=h_1k_1k_2^{-1}h_2^{-1}.$$
>>	3. Supongamos $K\triangleleft G$. Sea $k'=k_1k_2^{-1}\in K$. Como $Kh_2^{-1}=h_2^{-1}K$, existe $\tilde k_2\in K$ tal que $k'h_2^{-1}=h_2^{-1}\tilde k_2$. Luego $$\begin{aligned}xy^{-1}&=h_1k'h_2^{-1}\\&=h_1h_2^{-1}\tilde k_2.\end{aligned}$$ Como $h_1h_2^{-1}\in H$ y $\tilde k_2\in K$, resulta $xy^{-1}\in HK$.
>>	4. Supongamos $H\triangleleft G$. Sea $\tilde k=k_1k_2^{-1}\in K$. Como $\tilde kH=H\tilde k$, existe $\tilde h_1\in H$ tal que $\tilde kh_2^{-1}=\tilde h_1\tilde k$. Luego $$\begin{aligned}xy^{-1}&=h_1\tilde kh_2^{-1}\\&=h_1\tilde h_1\tilde k.\end{aligned}$$ Como $h_1\tilde h_1\in H$ y $\tilde k\in K$, resulta $xy^{-1}\in HK$.
>>	5. En cualquiera de los dos casos, $xy^{-1}\in HK$. Por el criterio de subgrupo, $HK\leq G$.
>>- (b)
>>	1. Por la parte (a), $HK\leq G$; solo falta verificar la condición de normalidad.
>>	2. Sea $g\in G$. Por asociatividad del producto de subconjuntos y la normalidad de $H$ y $K$, $$\begin{aligned}gHK&=(gH)K\\&=(Hg)K\\&=H(gK)\\&=H(Kg)\\=(HK)g.\end{aligned}$$ Por lo tanto, $gHK=HKg$.
>>	3. Como $g\in G$ era arbitrario, $HK\triangleleft G$.

>[!exercise] Ejercicio 12
>Hallar $H,K\leq D_4$ tales que $H\triangleleft K$, $K\triangleleft D_4$ y $H$ no es normal en $D_4$.
>>[!Proof]-
>>1. **Análisis de los órdenes posibles:** Supongamos que existen subgrupos $H,K\leq D_4$ tales que $H\triangleleft K$, $K\triangleleft D_4$ y $H$ no es normal en $D_4$. Por el teorema de Lagrange, $|H|$ divide a $|K|$ y $|K|$ divide a $|D_4|=8$. Como $H$ no es normal en $D_4$, se tiene $H\neq\{1\}$ (pues el subgrupo trivial es normal) y $K\neq D_4$ (pues si $K=D_4$, entonces $H\triangleleft K=D_4$). Además, por el [[EA - Pr3#^6d69d8|Ejercicio 6]], todo subgrupo de índice $2$ es normal, lo cual descarta que $|H|=4$ (ya que $[D_4:H]=8/4=2$ implicaría $H\triangleleft D_4$). En consecuencia, la única posibilidad para una cadena propia $1<|H|<|K|<8$ es $|H|=2$ y $|K|=4$.
>>2. **Normalidad automática por índice:** Con $|H|=2$ y $|K|=4$, se tiene inmediatamente que $[D_4:K]=\frac{8}{4}=2$ y $[K:H]=\frac{4}{2}=2$. Nuevamente por el [[EA - Pr3#^6d69d8|Ejercicio 6]], las condiciones $K\triangleleft D_4$ y $H\triangleleft K$ quedan automáticamente garantizadas para cualquier subgrupo $K$ de orden $4$ y cualquier subgrupo $H\leq K$ de orden $2$.
>>3. **Elección de $H$:** La única condición que resta satisfacer es que $H$ no sea normal en $D_4$. Los elementos de orden $2$ en $D_4=\langle r,s\mid r^4=1,\,s^2=1,\,sr=r^{-1}s\rangle$ son la rotación $r^2$ y las reflexiones $\{s,sr,sr^2,sr^3\}$. La rotación $r^2$ pertenece al centro $Z(D_4)$ (conmuta con $r$ trivialmente y con $s$ pues $sr^2=(sr)r=(r^{-1}s)r=r^{-1}(sr)=r^{-2}s=r^2s$), por lo que $\langle r^2\rangle\triangleleft D_4$. 
>>4. Tomamos entonces una reflexión, por ejemplo $H=\langle s\rangle=\{1,s\}$. Notemos que de la relación $sr=r^{-1}s$, multiplicando por $s$ a izquierda y a derecha usando $s^2=1$, se deduce $rs=sr^{-1}$. 
>>5. Verificamos que $H$ no es normal en $D_4$ conjugando por $r$ y aplicando asociatividad: $$\begin{aligned}rsr^{-1}&=(rs)r^{-1}\\=(sr^{-1})r^{-1}\\&=sr^{-2}\\&=sr^2.\end{aligned}$$ Como $r^2\neq 1$, el elemento $sr^2\notin H$, de modo que $rHr^{-1}\not\subseteq H$ y $H$ no es normal en $D_4$.
>>6. **Construcción de $K$:** Resta construir un subgrupo $K\leq D_4$ de orden $4$ que contenga a $H=\{1,s\}$. Como $r^2\in Z(D_4)$ conmuta con $s$, agregamos $r^2$ y definimos $K=\langle s,r^2\rangle=\{1,s,r^2,sr^2\}$.
>>7. Para verificar que $K$ es un subgrupo mediante el criterio $xy^{-1}\in K$, notamos primero que como $s^2=1$ y $(r^2)^2=r^4=1$, los elementos $s$ y $r^2$ son sus propios inversos. Además, desarrollando $sr^2=(sr)r=(r^{-1}s)r=r^{-1}(sr)=r^{-1}(r^{-1}s)=r^{-2}s=r^2s$, vemos que $r^2s=sr^2$. Con esto calculamos $(sr^2)^2=s(r^2s)r^2=s(sr^2)r^2=s^2r^4=1$, por lo que $sr^2$ también es su propio inverso. 
>>8. Así, todo elemento de $K$ cumple $y^{-1}=y$, de modo que la condición $xy^{-1}\in K$ equivale a $xy\in K$. Comprobamos explícitamente los productos de elementos no triviales: $s\cdot s=1\in K$, $r^2\cdot r^2=1\in K$, $(sr^2)(sr^2)=1\in K$; y entre elementos distintos: $s\cdot r^2=sr^2\in K$, $r^2s=sr^2\in K$, $s(sr^2)=s^2r^2=r^2\in K$, $(sr^2)s=s(r^2s)=s(sr^2)=s^2r^2=r^2\in K$, $r^2(sr^2)=(r^2s)r^2=(sr^2)r^2=sr^4=s\in K$ y $(sr^2)r^2=s(r^2r^2)=sr^4=s\in K$. 
>>9. Junto con los productos con el neutro $1$, los 16 productos pertenecen a $K$. Por lo tanto, $xy^{-1}\in K$ para todos $x,y\in K$, demostrando por el criterio de subgrupo que $K\leq D_4$, $|K|=4$ y $H\subseteq K$. Con esto, $H$ y $K$ satisfacen todas las condiciones pedidas.

>[!exercise] Ejercicio 13
>Decir cuáles de los siguientes $H$ son subgrupos normales de $G$:
>- **(a)** $H=\{1,r,r^2,r^3\}$ y $G=D_4$.
>- **(b)** $\mathcal H$ y $G=\operatorname{GL}(2,\mathbb C)$.
>- **(c)** $\operatorname{SL}(n,\mathbb R)$ y $G=\operatorname{GL}(n,\mathbb R)$.
>>[!Proof]-
>>- (a)
>>	1. El grupo diédrico $D_4$ tiene orden $|D_4|=8$ y el subgrupo de rotaciones $H=\{1,r,r^2,r^3\}$ tiene orden $|H|=4$.
>>	2. Por lo tanto, el índice de $H$ en $D_4$ es $[D_4:H]=|D_4|/|H|=8/4=2$.
>>	3. Por el [[EA - Pr3#^6d69d8|Ejercicio 6]], todo subgrupo de índice $2$ es normal. En consecuencia, $H\trianglelefteq D_4$.
>>- (b)
>>	1. Recordemos que $\mathcal H=\left\{\pm\begin{pmatrix}1&0\\0&1\end{pmatrix},\ \pm\begin{pmatrix}i&0\\0&-i\end{pmatrix},\ \pm\begin{pmatrix}0&1\\-1&0\end{pmatrix},\ \pm\begin{pmatrix}0&i\\i&0\end{pmatrix}\right\}\leq\operatorname{GL}(2,\mathbb C)$ (Práctico 2, Ejercicio 5). En particular, todas las matrices de $\mathcal H$ tienen sus entradas en el conjunto $\{0,\pm 1,\pm i\}$.
>>	2. Consideremos la matriz $X=\begin{pmatrix}i&0\\0&-i\end{pmatrix}\in\mathcal H$ y la matriz inversible $g=\begin{pmatrix}1&1\\0&1\end{pmatrix}\in\operatorname{GL}(2,\mathbb C)$, cuya inversa es $g^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$.
>>	3. Calculamos la conjugación $gXg^{-1}$: $$\begin{aligned}gXg^{-1}&=\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}i&0\\0&-i\end{pmatrix}\begin{pmatrix}1&-1\\0&1\end{pmatrix}\\&=\begin{pmatrix}i&-i\\0&-i\end{pmatrix}\begin{pmatrix}1&-1\\0&1\end{pmatrix}\\&=\begin{pmatrix}i&-2i\\0&-i\end{pmatrix}.\end{aligned}$$
>>	4. Como la entrada $(1,2)$ es $-2i\notin\{0,\pm 1,\pm i\}$, la matriz resultante no pertenece a $\mathcal H$.
>>	5. Por consiguiente, existen $g\in\operatorname{GL}(2,\mathbb C)$ y $X\in\mathcal H$ tales que $gXg^{-1}\notin\mathcal H$, lo que demuestra que $\mathcal H$ no es un subgrupo normal de $\operatorname{GL}(2,\mathbb C)$.
>>- (c)
>>	1. Consideremos la aplicación determinante $\det:\operatorname{GL}(n,\mathbb R)\to\mathbb R^\times$.
>>	2. Como $\det(AB)=\det(A)\det(B)$ para todas $A,B\in\operatorname{GL}(n,\mathbb R)$, la función $\det$ es un homomorfismo de grupos.
>>	3. Por definición, $\operatorname{SL}(n,\mathbb R)=\{A\in\operatorname{GL}(n,\mathbb R):\det(A)=1\}=\ker(\det)$.
>>	4. Como el núcleo de todo homomorfismo de grupos es un subgrupo normal, concluimos que $\operatorname{SL}(n,\mathbb R)\trianglelefteq\operatorname{GL}(n,\mathbb R)$.

>[!exercise] Ejercicio 14
>Sean $f:G\to H$ un homomorfismo de grupos y $N\triangleleft G$. Probar las siguientes afirmaciones:
>- **(a)** Si $B\triangleleft H$, entonces $f^{-1}(B)\triangleleft G$.
>- **(b)** Si $f$ es epimorfismo, entonces $f(N)\triangleleft H$. ¿Vale lo mismo si $f$ no es epimorfismo?
>- **(c)** Si $f$ es un isomorfismo, entonces $G/N\cong H/f(N)$.
>>[!Proof]-
>>- (a)
>>	1. **No vacuidad:** Como $B\leq H$, el neutro de $H$ pertenece a $B$, es decir, $e_H\in B$. Como $f$ es un homomorfismo, $f(e_G)=e_H\in B$, por lo que $e_G\in f^{-1}(B)$ y el conjunto $f^{-1}(B)$ es no vacío.
>>	2. **Criterio de subgrupo:** Sean $x,y\in f^{-1}(B)$, de modo que $f(x),f(y)\in B$. Como $B\leq H$, se tiene $f(y)^{-1}\in B$ y $f(x)f(y)^{-1}\in B$. Por ser $f$ un homomorfismo, $$f(xy^{-1})=f(x)f(y)^{-1}\in B,$$ lo que implica que $xy^{-1}\in f^{-1}(B)$. Por lo tanto, $f^{-1}(B)\leq G$.
>>	3. **Normalidad:** Sean $g\in G$ y $x\in f^{-1}(B)$ arbitrarios. Por definición de preimagen, $f(x)\in B$. Como $f$ es un homomorfismo, $$f(gxg^{-1})=f(g)f(x)f(g)^{-1}.$$ Dado que $f(g)\in H$, $f(x)\in B$ y por hipótesis $B\triangleleft H$, la conjugación $f(g)f(x)f(g)^{-1}$ pertenece a $B$. Por consiguiente, $f(gxg^{-1})\in B$, de donde $gxg^{-1}\in f^{-1}(B)$. Al ser $g\in G$ y $x\in f^{-1}(B)$ arbitrarios, concluimos que $f^{-1}(B)\triangleleft G$.
>>- (b)
>>	1. **Subgrupo:** Como $N\leq G$ y $f$ es un homomorfismo, la imagen directa $f(N)$ es un subgrupo de $H$: efectivamente, $e_H=f(e_G)\in f(N)$ pues $e_G\in N$, y para cualesquiera $y_1,y_2\in f(N)$ existen $n_1,n_2\in N$ tales que $y_1=f(n_1)$ e $y_2=f(n_2)$, con lo cual $$y_1y_2^{-1}=f(n_1)f(n_2)^{-1}=f(n_1n_2^{-1})\in f(N)$$ ya que $n_1n_2^{-1}\in N$ por ser $N\leq G$.
>>	2. **Normalidad si $f$ es epimorfismo:** Sean $h\in H$ e $y\in f(N)$ arbitrarios. Como $y\in f(N)$, existe $n\in N$ tal que $y=f(n)$. Como $f$ es un epimorfismo, existe $g\in G$ tal que $h=f(g)$. Entonces $$\begin{aligned}hyh^{-1}&=f(g)f(n)f(g)^{-1}\\&=f(gng^{-1}).\end{aligned}$$ Como $N\triangleleft G$, se tiene $gng^{-1}\in N$. Por lo tanto, $hyh^{-1}=f(gng^{-1})\in f(N)$, lo que demuestra que $f(N)\triangleleft H$.
>>	3. **Caso en que $f$ no es epimorfismo:** La afirmación no vale en general si $f$ no es un epimorfismo. Como contraejemplo natural, consideremos el grupo simétrico $H=S_3$ y el subgrupo $G=\langle (1\,2)\rangle=\{\operatorname{id},(1\,2)\}\leq S_3$. Tomemos $N=G$; todo grupo es un subgrupo normal de sí mismo, por lo que $N\triangleleft G$. Sea $f:G\hookrightarrow S_3$ la inclusión canónica dada por $f(x)=x$ para todo $x\in G$, que es un homomorfismo inyectivo pero no sobreyectivo (pues $|G|=2$ y $|S_3|=6$).
>>	4. Bajo esta inclusión, la imagen es $f(N)=f(G)=G=\{\operatorname{id},(1\,2)\}$. Para verificar que no es normal en $S_3$, tomamos la permutación $h=(1\,3)\in S_3$, cuya inversa es $h^{-1}=(1\,3)$, y el elemento $y=(1\,2)\in f(N)$. Calculamos explícitamente la conjugación componiendo de derecha a izquierda: $$\begin{aligned}hyh^{-1}&=(1\,3)(1\,2)(1\,3)\\&=(1\,3)(1\,3\,2)\\&=(2\,3).\end{aligned}$$ Como $(2\,3)\notin\{\operatorname{id},(1\,2)\}=f(N)$, se tiene $hf(N)h^{-1}\not\subseteq f(N)$. Por lo tanto, $f(N)$ no es normal en $H$.
>>- (c)
>>	1. **Buena definición del cociente $H/f(N)$:** Dado que $f:G\to H$ es un isomorfismo, en particular es un epimorfismo. Por la parte (b), se deduce que $f(N)\triangleleft H$. En consecuencia, el grupo cociente $H/f(N)$ está bien definido.
>>	2. **Construcción del homomorfismo auxiliar:** Sea $\pi:H\to H/f(N)$ la proyección canónica al cociente, dada por $\pi(h)=hf(N)$, que es un homomorfismo sobreyectivo con núcleo $\ker\pi=f(N)$. Definimos la composición $$\Phi=\pi\circ f:G\longrightarrow H/f(N),\qquad \Phi(g)=\pi(f(g))=f(g)f(N).$$ Como la composición de dos homomorfismos es un homomorfismo, $\Phi$ es un homomorfismo de grupos.
>>	3. **Sobreyectividad de $\Phi$:** Sean $hf(N)\in H/f(N)$ una clase arbitraria con $h\in H$. Como $f$ es un isomorfismo, en particular es sobreyectiva, por lo que existe $g\in G$ tal que $f(g)=h$. Luego, $$\Phi(g)=\pi(f(g))=\pi(h)=hf(N).$$ Esto demuestra que $\Phi$ es sobreyectiva, es decir, $\operatorname{Im}\Phi=H/f(N)$.
>>	4. **Cálculo del núcleo de $\Phi$:** Sea $g\in G$. Por definición de núcleo y del neutro en el grupo cociente, $$\begin{aligned}g\in\ker\Phi&\iff\Phi(g)=e_{H/f(N)}\\ &\iff f(g)f(N)=f(N)\\ &\iff f(g)\in f(N).\end{aligned}$$ Si $g\in N$, trivialmente $f(g)\in f(N)$. Recíprocamente, si $f(g)\in f(N)$, existe $n\in N$ tal que $f(g)=f(n)$. Como $f$ es un isomorfismo, es inyectiva, de donde $f(g)=f(n)$ implica $g=n\in N$. En consecuencia, $f(g)\in f(N)\iff g\in N$, lo que demuestra que $\ker\Phi=N$.
>>	5. **Conclusión por el primer teorema de isomorfismo:** Como $\Phi:G\to H/f(N)$ es un homomorfismo sobreyectivo con núcleo $\ker\Phi=N$, por el [[Teorico 3#Primer teorema de isomorfismo|primer teorema de isomorfismo]] existe un isomorfismo natural $$\widehat\Phi:G/\ker\Phi\longrightarrow\operatorname{Im}\Phi,$$ es decir, $$G/N\cong H/f(N).$$

>[!exercise] Ejercicio 15
>Sea $G$ grupo y $N \triangleleft G$. Si $N$ y $G/N$ son finitamente generados, entonces $G$ es finitamente generado.
>>[!Proof]-
>>1. **Generadores de $N$:** Por hipótesis, el subgrupo normal $N$ es finitamente generado. En consecuencia, existe un conjunto finito $Y=\{n_1,\dots,n_k\}\subseteq N$ tal que $N=\langle n_1,\dots,n_k\rangle$.
>>2. **Generadores y representantes de $G/N$:** Por hipótesis, el grupo cociente $G/N$ es finitamente generado. Como los elementos de $G/N$ son coclases a izquierda, existen finitos elementos $x_1,\dots,x_m\in G$ cuyas coclases generan el cociente, es decir, $G/N=\langle x_1N,\dots,x_mN\rangle$.
>>3. **Candidato a conjunto generador de $G$:** Definimos el conjunto finito $S=\{x_1,\dots,x_m,n_1,\dots,n_k\}\subseteq G$. Como cada $x_i\in G$ y cada $n_j\in N\subseteq G$, se tiene de forma inmediata la inclusión $\langle S\rangle\subseteq G$. Demostraremos que vale la inclusión recíproca $G\subseteq \langle S\rangle$.
>>4. **Descomposición de la proyección en el cociente:** Sea $g\in G$ un elemento arbitrario y consideremos su coclase canónica $gN\in G/N$. Como $G/N=\langle x_1N,\dots,x_mN\rangle$, la clase $gN$ se expresa como un producto finito de los generadores y sus inversos: $$gN=(x_{i_1}N)^{\epsilon_1}\cdots(x_{i_r}N)^{\epsilon_r},$$ con $i_1,\dots,i_r\in\{1,\dots,m\}$ y $\epsilon_1,\dots,\epsilon_r\in\{1,-1\}$.
>>5. **Representante asociado en $G$:** Dado que $N\triangleleft G$, el producto en el cociente satisface $(aN)(bN)=(ab)N$ y $(aN)^{-1}=a^{-1}N$. Aplicando esto reiteradamente al producto anterior obtenemos: $$gN=(x_{i_1}^{\epsilon_1}\cdots x_{i_r}^{\epsilon_r})N.$$ Si definimos el elemento $x:=x_{i_1}^{\epsilon_1}\cdots x_{i_r}^{\epsilon_r}\in G$, observamos que $x$ es una palabra formada exclusivamente por elementos de $\{x_1,\dots,x_m\}$ y sus inversos, por lo que $x\in\langle x_1,\dots,x_m\rangle\subseteq\langle S\rangle$.
>>6. **Factorización del elemento $g$:** De la igualdad de coclases $gN=xN$, osea $g=ge\in gN= xN$ por lo tanto $x^{-1}g\in N$. Definiendo $n:=x^{-1}g\in N$, multiplicamos a izquierda por $x$ y obtenemos la factorización explícita: $$g=xn.$$
>>7. **Pertenencia a $\langle S\rangle$:** Puesto que $n\in N$ y $N=\langle n_1,\dots,n_k\rangle$, el elemento $n$ se escribe como un producto finito de generadores de $N$ y sus inversos: $$n=n_{j_1}^{\delta_1}\cdots n_{j_s}^{\delta_s},$$ con $j_1,\dots,j_s\in\{1,\dots,k\}$ y $\delta_1,\dots,\delta_s\in\{1,-1\}$. Esto muestra que $n\in\langle n_1,\dots,n_k\rangle\subseteq\langle S\rangle$. Al ser $\langle S\rangle$ un subgrupo de $G$ y estar tanto $x\in\langle S\rangle$ como $n\in\langle S\rangle$, se concluye que: $$g=xn\in\langle S\rangle.$$
>>8. **Conclusión:** Como $g\in G$ fue elegido arbitrariamente, se cumple $G\subseteq\langle S\rangle$, y por ende $G=\langle S\rangle$. Habiendo encontrado un conjunto finito $S$ de cardinal $|S|\leq m+k$ que genera a $G$, concluimos que $G$ es finitamente generado.

>[!exercise] Ejercicio 16
>Sean $G_1$ y $G_2$ dos grupos y $N_1$ y $N_2$ dos subgrupos normales de $G_1$ y $G_2$ respectivamente. Probar que:
>- **(a)** $N_1 \times N_2 \triangleleft G_1 \times G_2$.
>- **(b)** $(G_1 \times G_2)/(N_1 \times N_2) \cong (G_1/N_1) \times (G_2/N_2)$.
>>[!Proof]-
>>- (a)
>>	1. **No vacuidad:** Como $N_1\leq G_1$ y $N_2\leq G_2$, los elementos neutros pertenecen a cada subgrupo respectivo: $e_{G_1}\in N_1$ y $e_{G_2}\in N_2$. Por lo tanto, el neutro del producto directo satisface $e_{G_1\times G_2}=(e_{G_1},e_{G_2})\in N_1\times N_2$, lo que demuestra que $N_1\times N_2$ es no vacío.
>>	2. **Criterio de subgrupo:** Sean $(n_1,n_2),(p_1,p_2)\in N_1\times N_2$, de modo que $n_1,p_1\in N_1$ y $n_2,p_2\in N_2$. El inverso en el producto directo está dado componente a componente por $(p_1,p_2)^{-1}=(p_1^{-1},p_2^{-1})$. Realizando la operación del grupo, $$(n_1,n_2)(p_1,p_2)^{-1}=(n_1,n_2)(p_1^{-1},p_2^{-1})=(n_1p_1^{-1},n_2p_2^{-1}).$$ Como $N_1\leq G_1$ y $N_2\leq G_2$, se tiene que $n_1p_1^{-1}\in N_1$ y $n_2p_2^{-1}\in N_2$. En consecuencia, $(n_1p_1^{-1},n_2p_2^{-1})\in N_1\times N_2$, lo que demuestra que $N_1\times N_2\leq G_1\times G_2$.
>>	3. **Invarianza bajo conjugación:** Sean $(g_1,g_2)\in G_1\times G_2$ y $(n_1,n_2)\in N_1\times N_2$ arbitrarios. Operando componente a componente, la conjugación resulta: $$(g_1,g_2)(n_1,n_2)(g_1,g_2)^{-1}=(g_1,g_2)(n_1,n_2)(g_1^{-1},g_2^{-1})=(g_1n_1g_1^{-1},g_2n_2g_2^{-1}).$$ Dado que por hipótesis $N_1\triangleleft G_1$ y $N_2\triangleleft G_2$, se cumple que $g_1n_1g_1^{-1}\in N_1$ y $g_2n_2g_2^{-1}\in N_2$. Por lo tanto, $(g_1n_1g_1^{-1},g_2n_2g_2^{-1})\in N_1\times N_2$, lo cual demuestra que $N_1\times N_2\triangleleft G_1\times G_2$.
>>- (b)
>>	1. **Construcción del homomorfismo candidato:** Consideramos la función $\varphi: G_1\times G_2\longrightarrow (G_1/N_1)\times (G_2/N_2)$ definida por $$\varphi(g_1,g_2)=(g_1N_1,g_2N_2)$$ para todo $(g_1,g_2)\in G_1\times G_2$.
>>	2. **Homomorfismo de grupos:** Sean $(g_1,g_2),(\tilde g_1,\tilde g_2)\in G_1\times G_2$. Usando la definición del producto en $G_1\times G_2$ y en los grupos cocientes $G_1/N_1$ y $G_2/N_2$, calculamos: $$\begin{aligned}\varphi((g_1,g_2)(\tilde g_1,\tilde g_2))&=\varphi(g_1\tilde g_1,g_2\tilde g_2)\\&=((g_1\tilde g_1)N_1,(g_2\tilde g_2)N_2)\\&=((g_1N_1)(\tilde g_1N_1),(g_2N_2)(\tilde g_2N_2))\\&=(g_1N_1,g_2N_2)(\tilde g_1N_1,\tilde g_2N_2)\\&=\varphi(g_1,g_2)\varphi(\tilde g_1,\tilde g_2).\end{aligned}$$ En consecuencia, $\varphi$ es un homomorfismo de grupos.
>>	3. **Sobreyectividad:** Sea $(xN_1,yN_2)\in (G_1/N_1)\times (G_2/N_2)$ un elemento arbitrario del codominio, con $x\in G_1$ e $y\in G_2$. Considerando el elemento $(x,y)\in G_1\times G_2$, se tiene directamente por la definición de $\varphi$ que $$\varphi(x,y)=(xN_1,yN_2).$$ Por lo tanto, $\varphi$ es sobreyectiva, es decir, $\operatorname{Im}\varphi=(G_1/N_1)\times (G_2/N_2)$.
>>	4. **Cálculo del núcleo:** El elemento neutro del codominio $(G_1/N_1)\times (G_2/N_2)$ es el par de clases triviales $(e_{G_1}N_1,e_{G_2}N_2)=(N_1,N_2)$. Por definición de núcleo, un elemento $(g_1,g_2)\in G_1\times G_2$ pertenece a $\ker\varphi$ si y sólo si: $$\begin{aligned}(g_1,g_2)\in\ker\varphi&\iff\varphi(g_1,g_2)=(N_1,N_2)\\&\iff(g_1N_1,g_2N_2)=(N_1,N_2)\\&\iff g_1N_1=N_1\quad\text{y}\quad g_2N_2=N_2\\&\iff g_1\in N_1\quad\text{y}\quad g_2\in N_2\\&\iff(g_1,g_2)\in N_1\times N_2.\end{aligned}$$ Esto demuestra con total generalidad que $\ker\varphi=N_1\times N_2$.
>>	5. **Conclusión por el primer teorema de isomorfismo:** Al ser $\varphi: G_1\times G_2\longrightarrow (G_1/N_1)\times (G_2/N_2)$ un homomorfismo sobreyectivo con núcleo $\ker\varphi=N_1\times N_2$, por el [[Teorico 3#Primer teorema de isomorfismo|primer teorema de isomorfismo]] el mapa inducido es un isomorfismo: $$(G_1\times G_2)/\ker\varphi\cong\operatorname{Im}\varphi,$$ lo que concluye que $$(G_1\times G_2)/(N_1\times N_2)\cong (G_1/N_1)\times (G_2/N_2).$$

>[!exercise] Ejercicio 17
>Sean $n, m \in \mathbb{N}$ tal que $n$ divide a $m$. Calcular $n\mathbb{Z}/m\mathbb{Z}$.
>>[!Proof]-
>>1. **Buena definición del cociente:** Como $n\mid m$, existe un entero $j\in\mathbb N$ tal que $m=jn$. Para cualquier elemento $x\in m\mathbb Z$, se tiene $x=mz=(jn)z=n(jz)\in n\mathbb Z$ con $jz\in\mathbb Z$, lo que demuestra la inclusión $m\mathbb Z\subseteq n\mathbb Z$. Al ser $\mathbb Z$ un grupo abeliano bajo la suma, todo subgrupo es normal; en particular, $m\mathbb Z\triangleleft n\mathbb Z$, por lo que el grupo cociente $n\mathbb Z/m\mathbb Z$ está bien definido.
>>2. **Construcción del homomorfismo auxiliar:** Consideramos la función $\phi\colon\mathbb Z\longrightarrow n\mathbb Z/m\mathbb Z$ dada por $\phi(k)=kn+m\mathbb Z$ para todo $k\in\mathbb Z$. Dados $k_1,k_2\in\mathbb Z$, calculamos $$\begin{aligned}\phi(k_1+k_2)&=(k_1+k_2)n+m\mathbb Z\\&=(k_1n+k_2n)+m\mathbb Z\\&=(k_1n+m\mathbb Z)+(k_2n+m\mathbb Z)\\&=\phi(k_1)+\phi(k_2).\end{aligned}$$ Por lo tanto, $\phi$ es un homomorfismo de grupos.
>>3. **Sobreyectividad de $\phi$:** Todo elemento del grupo cociente $n\mathbb Z/m\mathbb Z$ es una coclase de la forma $x+m\mathbb Z$ con $x\in n\mathbb Z$. Por definición de $n\mathbb Z$, existe $k\in\mathbb Z$ tal que $x=kn$. Luego, $\phi(k)=kn+m\mathbb Z=x+m\mathbb Z$, lo que demuestra que $\phi$ es sobreyectiva, es decir, $\operatorname{Im}\phi=n\mathbb Z/m\mathbb Z$.
>>4. **Cálculo del núcleo de $\phi$:** El neutro del grupo cociente $n\mathbb Z/m\mathbb Z$ es la coclase trivial $0+m\mathbb Z=m\mathbb Z$. Sea $k\in\mathbb Z$ un entero arbitrario. Por definición de núcleo e igualdad de coclases, $$\begin{aligned}k\in\ker\phi&\iff\phi(k)=m\mathbb Z\\&\iff kn+m\mathbb Z=m\mathbb Z\\&\iff kn\in m\mathbb Z\\&\iff kn\in jn\mathbb Z.\end{aligned}$$ Esto significa que existe $z\in\mathbb Z$ tal que $kn=(jn)z$. Reescribiendo la igualdad como $(k-jz)n=0$, y dado que $n\in\mathbb N$ implica $n\neq 0$, por ausencia de divisores de cero en $\mathbb Z$ se deduce que $k-jz=0$, es decir, $k=jz$. Por consiguiente, $k\in\ker\phi\iff k\in j\mathbb Z$, lo que demuestra que $\ker\phi=j\mathbb Z$.
>>5. **Conclusión por el primer teorema de isomorfismo:** Como $\phi\colon\mathbb Z\longrightarrow n\mathbb Z/m\mathbb Z$ es un homomorfismo sobreyectivo con núcleo $\ker\phi=j\mathbb Z$, por el [[Teorico 3#Primer teorema de isomorfismo|primer teorema de isomorfismo]] se tiene el isomorfismo canónico $$\mathbb Z/\ker\phi\cong\operatorname{Im}\phi,$$ es decir, $$n\mathbb Z/m\mathbb Z\cong\mathbb Z/j\mathbb Z\cong\mathbb Z_j,$$ donde $j\in\mathbb N$ es el único entero positivo tal que $m=jn$.

>[!exercise] Ejercicio 18
>Sea $N := \{(1), (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$.
>- **(a)** Mostrar que $N$ es un subgrupo normal de $\mathbb{S}_4$ y que $N$ está contenido en $\mathbb{A}_4$.
>- **(b)** Dar un conjunto completo de representantes de coclases a derecha (izquierda) de $N$ en $\mathbb{S}_4$.
>- **(c)** Dar un conjunto completo de representantes de coclases a derecha (izquierda) de $N$ en $\mathbb{A}_4$.
>- **(d)** Probar que $\mathbb{S}_4/N \cong \mathbb{S}_3$ y $\mathbb{A}_4/N \cong \mathbb{Z}_3$.
>>[!Proof]-
>>- (a)
>>	1. **$N$ es un subgrupo de $\mathbb{S}_4$:** El elemento neutro es $(1)\in N$. En general, el cuadrado de toda transposición es la identidad, $(ij)^2=(1)$. Como las transposiciones disjuntas conmutan, para cada elemento no trivial $(ab)(cd) \in N$ se tiene:
>>		$$((ab)(cd))^2 = (ab)^2(cd)^2 = (1)(1) = (1),$$
>>		por lo que cada elemento es su propio inverso en $N$, es decir, $x^{-1} = x \in N$.
>>		Sean $a = (1\,2)(3\,4)$ y $b = (1\,3)(2\,4)$. Calculando su producto:
>>		$$ab = ((1\,2)(3\,4))((1\,3)(2\,4)) = (1\,4)(2\,3), \qquad ba = ((1\,3)(2\,4))((1\,2)(3\,4)) = (1\,4)(2\,3).$$
>>		Como $a^2 = (1)$, $b^2 = (1)$ y $ab = ba$, el conjunto de todas las combinaciones generadas por $a$ y $b$ es exactamente:
>>		$$\langle a, b \rangle = \{(1),\, a,\, b,\, ab\} = N.$$
>>		Al ser un subgrupo generado por dos elementos, concluimos directamente que $N \leq \mathbb{S}_4$.
>>	2. **$N$ es normal en $\mathbb{S}_4$:** Como se probó en el [[EA - Pr2#^18c19a]], el grupo $\mathbb{S}_4$ está generado por $\sigma = (1\,2)$ y $\tau = (1\,2\,3\,4)$. Para verificar que $N \triangleleft \mathbb{S}_4$, basta con comprobar que la conjugación por estos generadores preserva $N$:
>>		- **Conjugación por $\sigma = (1\,2)$:** Con $\sigma^{-1} = (1\,2)$, se tiene: $$\begin{aligned}\sigma(1\,2)(3\,4)\sigma^{-1} &= (1\,2)(3\,4) \in N,\\\sigma(1\,3)(2\,4)\sigma^{-1} &= (1\,4)(2\,3) \in N,\\\sigma(1\,4)(2\,3)\sigma^{-1} &= (1\,3)(2\,4) \in N.\end{aligned}$$
>>		- **Conjugación por $\tau = (1\,2\,3\,4)$:** Con $\tau^{-1} = (1\,4\,3\,2)$, se tiene: $$\begin{aligned}\tau(1\,2)(3\,4)\tau^{-1} &= (1\,4)(2\,3) \in N,\\\tau(1\,3)(2\,4)\tau^{-1} &= (1\,3)(2\,4) \in N,\\\tau(1\,4)(2\,3)\tau^{-1} &= (1\,2)(3\,4) \in N.\end{aligned}$$
>>		Dado que la conjugación por los generadores de $\mathbb{S}_4$ envía elementos de $N$ en $N$, se concluye que $gNg^{-1} = N$ para todo $g \in \mathbb{S}_4$, lo que demuestra que $N \triangleleft \mathbb{S}_4$.
>>	1. **Contención $N \subseteq \mathbb{A}_4$:** Por definición, $\mathbb{A}_4 = \ker(\operatorname{sgn}) = \{\pi \in \mathbb{S}_4 : \operatorname{sgn}(\pi) = 1\}$. La identidad $(1) = (1\,2)(3\,4)(1\,2)(3\,4)$ se expresa como producto de $4$ transposiciones, luego $\operatorname{sgn}((1)) = (-1)^4 = 1$. Asimismo, cada elemento no trivial de $N$ es producto de $2$ transposiciones disjuntas, de modo que $\operatorname{sgn}((ab)(cd)) = \operatorname{sgn}((ab))\operatorname{sgn}((cd)) = (-1)(-1) = 1$. En consecuencia, todo elemento de $N$ es una permutación par, lo que prueba que $N \subseteq \mathbb{A}_4$.
>>- (b)
>>	1. **Cantidad de coclases:** Por el teorema de Lagrange, el número de coclases a izquierda (o derecha) de $N$ en $\mathbb{S}_4$ es el índice $[\mathbb{S}_4 : N]$. Dado que $|\mathbb{S}_4| = 4! = 24$ y $|N| = 4$, y teniendo en cuenta que $24 = 6 \cdot 4$, existen exactamente $6$ coclases distintas. Además, como $N \triangleleft \mathbb{S}_4$, las coclases a izquierda y a derecha coinciden ($gN = Ng$).
>>	2. **Elección del subgrupo de representantes:** Consideramos el subgrupo estabilizador del elemento $4$:
>>		$$H := \operatorname{Stab}_{\mathbb{S}_4}(4) = \{\sigma \in \mathbb{S}_4 : \sigma(4) = 4\}$$
>>		Este subgrupo permuta los elementos $\{1, 2, 3\}$ dejando fijo el $4$, por lo que su orden es $|H| = 3! = 6$. Explícitamente:
>>		$$H = \{(1),\, (1\,2),\, (1\,3),\, (2\,3),\, (1\,2\,3),\, (1\,3\,2)\}.$$
>>	3. **Cálculo de la intersección $H \cap N$:** Un elemento $\sigma \in N$ pertenece a $H$ si y sólo si fija el número $4$, es decir, $\sigma(4) = 4$. Evaluando los cuatro elementos de $N$:
>>		- Para $(1)$: $(1)(4) = 4$, luego $(1) \in H$.
>>		- Para $(1\,2)(3\,4)$: $(1\,2)(3\,4)(4) = 3 \neq 4$, luego $(1\,2)(3\,4) \notin H$.
>>		- Para $(1\,3)(2\,4)$: $(1\,3)(2\,4)(4) = 2 \neq 4$, luego $(1\,3)(2\,4) \notin H$.
>>		- Para $(1\,4)(2\,3)$: $(1\,4)(2\,3)(4) = 1 \neq 4$, luego $(1\,4)(2\,3) \notin H$.
>>		Por lo tanto, el único elemento de $N$ que fija el $4$ es la identidad, lo que demuestra que $H \cap N = \{(1)\}$.
>>	4. **Demostración de que $H$ es un conjunto completo de representantes:** Consideramos la función de asignación de coclases restringida a $H$:
>>		$$\pi|_H \colon H \longrightarrow \mathbb{S}_4/N, \qquad h \longmapsto hN.$$
>>		Si $h_1, h_2 \in H$ satisfacen $h_1 N = h_2 N$, entonces por la condición de igualdad de coclases se tiene $h_1^{-1} h_2 \in N$. Como $H$ es un subgrupo y $h_1, h_2 \in H$, se tiene también $h_1^{-1} h_2 \in H$. En consecuencia:
>>		$$h_1^{-1} h_2 \in H \cap N = \{(1)\} \implies h_1^{-1} h_2 = (1) \implies h_1 = h_2.$$
>>		Esto prueba que la aplicación $\pi|_H$ es inyectiva. Al ser una aplicación inyectiva entre dos conjuntos finitos con la misma cantidad de elementos ($|H| = 6$ y $[\mathbb{S}_4 : N] = 6$), $\pi|_H$ es biyectiva.
>>		En conclusión, cada una de las $6$ coclases contiene exactamente un elemento de $H$, por lo que:
>>		$$\{(1),\, (1\,2),\, (1\,3),\, (2\,3),\, (1\,2\,3),\, (1\,3\,2)\}$$
>>		es un conjunto completo de representantes de coclases de $N$ en $\mathbb{S}_4$.
>>- (c)
>>	1. **Cantidad de coclases:** Como $\mathbb{A}_4 = \ker(\operatorname{sgn})$ y $\operatorname{Im}(\operatorname{sgn}) = \{1, -1\}$, por el primer teorema de isomorfismo se tiene $[\mathbb{S}_4 : \mathbb{A}_4] = 2$. Dado que $|\mathbb{S}_4| = 24$ y $24 = 2 \cdot 12$, por el teorema de Lagrange se deduce que $|\mathbb{A}_4| = 12$. 
>>	2. Aplicando nuevamente el teorema de Lagrange al subgrupo $N \le \mathbb{A}_4$, el número de coclases de $N$ en $\mathbb{A}_4$ es el índice $[\mathbb{A}_4 : N]$. Como $|N| = 4$ y $12 = 3 \cdot 4$, existen exactamente $3$ coclases distintas. 
>>	3. Además, al ser $N \triangleleft \mathbb{S}_4$ y $N \subseteq \mathbb{A}_4$, se tiene $N \triangleleft \mathbb{A}_4$, de modo que las coclases a izquierda y a derecha coinciden ($gN = Ng$).
>>	4. **Criterio ya probado y caso de orden 3:** Como se probó en la parte (b), si un subgrupo $K \le \mathbb{A}_4$ verifica $|K| = [\mathbb{A}_4 : N] = 3$ y $K \cap N = \{(1)\}$, entonces $K$ constituye un conjunto completo de representantes. Además, cualquier subgrupo $K \le \mathbb{A}_4$ de orden $|K| = 3$ satisface necesariamente $K \cap N = \{(1)\}$, pues $K \cap N$ es un subgrupo tanto de $K$ como de $N$ y por el teorema de Lagrange su orden debe dividir simultáneamente a $3$ y a $4$, cuyo único divisor común es $1$. En consecuencia, todo subgrupo de orden $3$ de $\mathbb{A}_4$ sirve como conjunto completo de representantes.
>>	5. **Elección concreta al final:** Consideramos el subgrupo cíclico $K$ generado por el $3$-ciclo $(1\,2\,3)$:
>>		$$K := \langle (1\,2\,3) \rangle \le \mathbb{A}_4.$$
>>		Calculando las potencias de $(1\,2\,3)$:
>>		$$\begin{aligned}(1\,2\,3)^1 &= (1\,2\,3),\\(1\,2\,3)^2 &= (1\,3\,2),\\(1\,2\,3)^3 &= (1).\end{aligned}$$
>>		Dado que todo $3$-ciclo es producto de dos transposiciones, $(1\,2\,3) = (1\,3)(1\,2)$, se tiene $\operatorname{sgn}((1\,2\,3)) = (-1)^2 = 1$, por lo que $K \le \mathbb{A}_4$. Explícitamente, $K$ tiene orden $|K| = 3$:
>>		$$K = \{(1),\, (1\,2\,3),\, (1\,3\,2)\}.$$
>>		Por los pasos anteriores, cada una de las $3$ coclases contiene exactamente un elemento de $K$, por lo que:
>>		$$\{(1),\, (1\,2\,3),\, (1\,3\,2)\}$$
>>		es un conjunto completo de representantes de coclases de $N$ en $\mathbb{A}_4$.
>>- (d)
>>	1. **Primera parte: el homomorfismo $\varphi\colon H\longrightarrow\mathbb{S}_4/N$.** Sea $H := \operatorname{Stab}_{\mathbb{S}_4}(4)$ el subgrupo de la parte (b) y consideremos $$\varphi\colon H\longrightarrow\mathbb{S}_4/N,\qquad \varphi(h)=hN.$$ Como $N\triangleleft\mathbb{S}_4$ por la parte (a), el producto de coclases está bien definido y, para $h_1,h_2\in H$, se tiene $$\varphi(h_1h_2)=(h_1h_2)N=(h_1N)(h_2N)=\varphi(h_1)\varphi(h_2),$$ de modo que $\varphi$ es un homomorfismo de grupos.
>>	2. **El núcleo de $\varphi$.** El neutro de $\mathbb{S}_4/N$ es la coclase $N$, de manera que $$h\in\ker\varphi\iff hN=N\iff h\in N.$$ Como además $h\in H$, resulta $\ker\varphi=H\cap N=\{(1)\}$ por lo probado en (b); por lo tanto $\varphi$ es inyectiva.
>>	3. **Biyectividad de $\varphi$.** Por la parte (b), $|H|=6$ y $[\mathbb{S}_4:N]=6$, y $|\mathbb{S}_4/N|=[\mathbb{S}_4:N]$. Al ser $\varphi$ inyectiva entre conjuntos finitos del mismo cardinal ($|H|=6=|\mathbb{S}_4/N|$), es biyectiva, es decir, $$H\cong\mathbb{S}_4/N.$$
>>	4. **El homomorfismo $\Phi\colon H\longrightarrow\mathbb{S}_3$.** Definimos $$\Phi\colon H\longrightarrow\mathbb{S}_3,\qquad \Phi(h):=h|_{\{1,2,3\}},$$ es decir, la función dada por $i\mapsto h(i)$ para $i\in\{1,2,3\}$.
>>	5. **Buena definición de $\Phi$.** Sea $h\in H$. Como $h$ fija el $4$, se tiene $h(4)=4$; por la inyectividad de $h$, si $i\in\{1,2,3\}$ entonces $h(i)\neq h(4)=4$, con lo cual $h(i)\in\{1,2,3\}$ y por lo tanto $h(\{1,2,3\})\subseteq\{1,2,3\}$. Además $h$ es inyectiva, así que $h(\{1,2,3\})$ tiene tres elementos; como está contenido en un conjunto de tres elementos, se sigue $h(\{1,2,3\})=\{1,2,3\}$. En consecuencia $\Phi(h)$ es una biyección de $\{1,2,3\}$, es decir, $\Phi(h)\in\mathbb{S}_3$.
>>	6. **$\Phi$ es un homomorfismo.** Recordando que el producto en $\mathbb{S}_4$ es la composición de funciones, $(h_1h_2)(i)=h_1\bigl(h_2(i)\bigr)$, para $h_1,h_2\in H$ e $i\in\{1,2,3\}$ resulta $$\bigl(\Phi(h_1)\circ\Phi(h_2)\bigr)(i)=\Phi(h_1)\bigl(\Phi(h_2)(i)\bigr)=h_1\bigl(h_2(i)\bigr)=(h_1h_2)(i)=\Phi(h_1h_2)(i).$$ Al coincidir en los tres puntos $1$, $2$ y $3$, las dos permutaciones son iguales: $\Phi(h_1)\circ\Phi(h_2)=\Phi(h_1h_2)$.
>>	7. **Inyectividad de $\Phi$.** Si $\Phi(h_1)=\Phi(h_2)$, entonces $h_1(i)=h_2(i)$ para todo $i\in\{1,2,3\}$ y además $h_1(4)=4=h_2(4)$. Como una permutación de $\{1,2,3,4\}$ queda determinada por sus valores en los cuatro elementos, se concluye $h_1=h_2$.
>>	8. **Conclusión de la primera parte.** Se tiene $|H|=6$ y $|\mathbb{S}_3|=3!=6$; al ser $\Phi$ inyectiva entre conjuntos finitos del mismo cardinal, es biyectiva y por lo tanto $$H\cong\mathbb{S}_3.$$ Combinando esto con $H\cong\mathbb{S}_4/N$ del paso 3 y usando la transitividad de $\cong$, resulta $$\mathbb{S}_4/N\cong\mathbb{S}_3.$$
>>	9. **Segunda parte: orden del cociente $\mathbb{A}_4/N$.** Por la parte (a) se tiene $N\triangleleft\mathbb{S}_4$ y $N\subseteq\mathbb{A}_4$, de donde $N\triangleleft\mathbb{A}_4$ y el cociente $\mathbb{A}_4/N$ está bien definido. Por la parte (c), $[\mathbb{A}_4:N]=3$, y como el cardinal de un cociente es el índice, $$|\mathbb{A}_4/N|=[\mathbb{A}_4:N]=3.$$
>>	10. **Aplicación del teorema de los grupos de orden primo.** El entero $3$ es primo, y por el [[Teorico 4#Grupos de orden primo|teorema de los grupos de orden primo]] todo grupo de orden primo $p$ es isomorfo a $\mathbb{Z}_p$. Aplicándolo al grupo $\mathbb{A}_4/N$, que tiene orden $3$, se concluye $$\mathbb{A}_4/N\cong\mathbb{Z}_3.$$
>>	11. **Alternativa vía el subgrupo de representantes de (c).** El mismo resultado se obtiene usando el subgrupo $K=\langle(1\,2\,3)\rangle$ de la parte (c). En efecto, definiendo $$\psi\colon K\longrightarrow\mathbb{A}_4/N,\qquad \psi(k)=kN,$$ que es un homomorfismo por ser $N\triangleleft\mathbb{A}_4$, se tiene $\ker\psi=K\cap N=\{(1)\}$ por (c), de modo que $\psi$ es inyectiva; como $|K|=3=|\mathbb{A}_4/N|$, es biyectiva y entonces $K\cong\mathbb{A}_4/N$. Por otra parte $|K|=3$ es primo, así que $K\cong\mathbb{Z}_3$ por el mismo teorema, y la transitividad de $\cong$ da nuevamente $\mathbb{A}_4/N\cong\mathbb{Z}_3$.

>[!exercise] Ejercicio 19
>En cada caso determinar el índice $[G:H]$ y hallar un sistema de representantes de $G$ módulo $H$:
>- **(a)** $H=\mathbb Z$, $G=\mathbb R$.
>- **(b)** $H=\langle r\rangle$, $G=D_n$.
>- **(c)** $H=\operatorname{SL}(n,\mathbb R)$, $G=\operatorname{GL}(n,\mathbb R)$.
>- **(d)** $H=S^1$, $G=\mathbb C^\times$.
>>[!Proof]-
>>- (a)
>>	1. Como los grupos son aditivos, para $x,y\in\mathbb R$ se tiene $$x+\mathbb Z=y+\mathbb Z\iff x-y\in\mathbb Z.$$ Proponemos $[0,1)$ como sistema de representantes.
>>	2. **Unicidad:** Sean $a,b\in[0,1)$ y supongamos que representan la misma coclase. Entonces $a-b\in\mathbb Z$. Como $a,b\in[0,1)$, se cumple $|a-b|<1$. El único entero cuyo valor absoluto es menor que $1$ es $0$, así que $a-b=0$ y, por lo tanto, $a=b$. En consecuencia, cada coclase contiene a lo sumo un elemento de $[0,1)$.
>>	3. **Existencia:** Sea $x\in\mathbb R$ y tomemos su parte entera $n=\lfloor x\rfloor\in\mathbb Z$. Por la definición de parte entera, $$n\leq x<n+1.$$ Al restar $n$ en los tres miembros obtenemos $$0\leq x-n<1,$$ de modo que $x-n\in[0,1)$. Además, $$x-(x-n)=n\in\mathbb Z,$$ por lo que $x$ y $x-n$ representan la misma coclase. Así, cada coclase contiene al menos un elemento de $[0,1)$.
>>	4. Por los pasos anteriores, cada coclase de $\mathbb Z$ en $\mathbb R$ contiene exactamente un elemento de $[0,1)$. Por consiguiente, $$\boxed{[0,1)}$$ es un sistema de representantes de $\mathbb R$ módulo $\mathbb Z$.
>>	5. El índice es la cardinalidad del conjunto de coclases. Como las coclases están en correspondencia biyectiva con los elementos de $[0,1)$ y todo intervalo real no degenerado tiene la cardinalidad del continuo, concluimos que $$\boxed{[\mathbb R:\mathbb Z]=|[0,1)|=|\mathbb R|=\mathfrak c.}$$
>>- (b)
>>	1. El grupo diédrico tiene la descripción $$D_n=\{e,r,\ldots,r^{n-1},s,sr,\ldots,sr^{n-1}\},$$ donde $r$ es una rotación de orden $n$ y $s$ es una reflexión. Por lo tanto, $|D_n|=2n$ y $$H=\langle r\rangle=\{e,r,\ldots,r^{n-1}\}$$ tiene orden $|H|=n$.
>>	2. Sea $j=[D_n:H]$. Por el teorema de Lagrange, $$2n=jn.$$ Como $n\geq1$, se concluye que $$\boxed{[D_n:\langle r\rangle]=2.}$$
>>	3. La coclase representada por $e$ es $eH=H$. Como $s$ es una reflexión y $H$ contiene solamente rotaciones, se tiene $s\notin H$. Si fuera $sH=H$, entonces $s=se\in sH=H$, lo que contradice $s\notin H$. Por consiguiente, $H$ y $sH$ son dos coclases distintas.
>>	4. Como el índice es $2$, existen exactamente dos coclases. Ya encontramos las dos coclases distintas $H$ y $sH$, de modo que no puede existir una tercera. Por tanto, cada coclase contiene exactamente uno de los elementos de $$\boxed{\{e,s\}},$$ que es un sistema de representantes de $D_n$ módulo $\langle r\rangle$.
>>- (c)
>>	1. Sean $A,B\in\operatorname{GL}(n,\mathbb R)$ y escribamos $H=\operatorname{SL}(n,\mathbb R)$. Por el criterio de igualdad de coclases y la definición de $H$, se tiene $$\begin{aligned}AH=BH&\iff B^{-1}A\in H\\&\iff\det(B^{-1}A)=1\\&\iff\det(B)^{-1}\det(A)=1\\&\iff\det(A)=\det(B).\end{aligned}$$ Por lo tanto, dos matrices invertibles representan la misma coclase módulo $H$ si y sólo si tienen el mismo determinante.
>>	2. Para cada $\lambda\in\mathbb R^\times$, definimos $$D_\lambda=\operatorname{diag}(\lambda,1,\ldots,1).$$ Como $\det(D_\lambda)=\lambda\neq0$, se tiene $D_\lambda\in\operatorname{GL}(n,\mathbb R)$. Además, si $\lambda,\mu\in\mathbb R^\times$ y $D_\lambda H=D_\mu H$, por el paso anterior resulta $\lambda=\det(D_\lambda)=\det(D_\mu)=\mu$. Así, matrices distintas de la familia representan coclases distintas.
>>	3. Sea $AH$ una coclase arbitraria y tomemos $\lambda=\det(A)\in\mathbb R^\times$. Entonces $$\det(D_\lambda^{-1}A)=\det(D_\lambda)^{-1}\det(A)=\lambda^{-1}\lambda=1,$$ de modo que $D_\lambda^{-1}A\in H$ y, por el criterio de igualdad de coclases, $AH=D_\lambda H$. Como $AH$ era una coclase arbitraria, toda coclase está representada por alguna matriz $D_\lambda$ de la familia; por lo tanto, no existen otras coclases sin representar.
>>	4. De la existencia y la unicidad demostradas se concluye que $$\boxed{\{\operatorname{diag}(\lambda,1,\ldots,1):\lambda\in\mathbb R^\times\}}$$ es un sistema de representantes de $\operatorname{GL}(n,\mathbb R)$ módulo $\operatorname{SL}(n,\mathbb R)$.
>>	5. Las coclases están en correspondencia biyectiva con $\mathbb R^\times$. Como quitar el cero de $\mathbb R$ no modifica su cardinalidad, el índice es $$\boxed{[\operatorname{GL}(n,\mathbb R):\operatorname{SL}(n,\mathbb R)]=|\mathbb R^\times|=|\mathbb R|=\mathfrak c.}$$
>>- (d)
>>	1. Sean $z,w\in\mathbb C^\times$. Por el criterio de igualdad de coclases y la definición de $S^1$, se tiene $$\begin{aligned}zS^1=wS^1&\iff w^{-1}z\in S^1\\&\iff|w^{-1}z|=1\\&\iff|w|^{-1}|z|=1\\&\iff|z|=|w|.\end{aligned}$$ Por lo tanto, dos complejos no nulos representan la misma coclase módulo $S^1$ si y sólo si tienen el mismo módulo.
>>	2. Proponemos como sistema de representantes el conjunto de los reales positivos $\mathbb R_{>0}=(0,\infty)$. Si $a,b\in\mathbb R_{>0}$ representan la misma coclase, el paso anterior da $|a|=|b|$. Como $a$ y $b$ son positivos, $|a|=a$ y $|b|=b$, de donde $a=b$. Así, no hay representantes repetidos.
>>	3. Sea $zS^1$ una coclase arbitraria. Como $z\neq0$, se tiene $|z|\in\mathbb R_{>0}$ y, además, $\bigl||z|\bigr|=|z|$. Por el criterio del paso 1, $$zS^1=|z|S^1.$$ Como la coclase era arbitraria, toda coclase está representada por un elemento de $\mathbb R_{>0}$. Por consiguiente, $$\boxed{\mathbb R_{>0}}$$ es un sistema completo de representantes de $\mathbb C^\times$ módulo $S^1$.
>>	4. Las coclases están en correspondencia biyectiva con $\mathbb R_{>0}$. Como todo intervalo real no degenerado tiene la cardinalidad del continuo, concluimos que $$\boxed{[\mathbb C^\times:S^1]=|\mathbb R_{>0}|=|\mathbb R|=\mathfrak c.}$$

>[!exercise] Ejercicio 20
>Sea $G$ un grupo. Para cada $a\in G$ se define $I_a:G\to G$ por $I_a(g):=aga^{-1}$. A la aplicación $I_a$ se la llama la conjugación por $a$.
>- **(a)** Probar que $I_a$ es un automorfismo de $G$. Estos automorfismos se llaman interiores.
>- **(b)** Probar que la aplicación $I:G\to\operatorname{Aut}(G)$, definida por $I(a)=I_a$, es un morfismo de grupos y verificar que $\ker I=Z(G)$.
>- **(c)** Probar que $\operatorname{Im}I$ es un subgrupo normal de $\operatorname{Aut}(G)$; usualmente se lo denota $\operatorname{Int}(G)$.
>- **(d)** Deducir que $G/Z(G)\cong\operatorname{Int}(G)$.
>>[!Proof]-
>>- (a)
>>	1. Sea $a\in G$. Para todo $x\in G$, el producto $axa^{-1}$ pertenece a $G$ por clausura, así que $I_a:G\to G$ está bien definida.
>>	2. Para cualesquiera $x,y\in G$, por asociatividad y porque $a^{-1}a=e$, tenemos $$I_a(x)I_a(y)=(axa^{-1})(aya^{-1})=ax(a^{-1}a)ya^{-1}=axya^{-1}=I_a(xy).$$ Por lo tanto, $I_a$ es un homomorfismo.
>>	3. Consideremos $J:G\to G$ dada por $J(y)=a^{-1}ya$. Para todo $x\in G$, $$\begin{aligned}J(I_a(x))&=a^{-1}(axa^{-1})a=(a^{-1}a)x(a^{-1}a)=x,\\I_a(J(x))&=a(a^{-1}xa)a^{-1}=(aa^{-1})x(aa^{-1})=x.\end{aligned}$$ Así, $J\circ I_a=\operatorname{id}_G=I_a\circ J$, de modo que $I_a$ es biyectiva con inversa $J=I_{a^{-1}}$. Al ser además un homomorfismo, $I_a$ es un automorfismo de $G$.
>>- (b)
>>	1. Por (a), $I(a)=I_a\in\operatorname{Aut}(G)$ para cada $a\in G$. La operación en $\operatorname{Aut}(G)$ es la composición. Para cualesquiera $a,b,g\in G$, usando $(ab)^{-1}=b^{-1}a^{-1}$, obtenemos $$I_{ab}(g)=(ab)g(ab)^{-1}=abgb^{-1}a^{-1}=aI_b(g)a^{-1}=I_a(I_b(g)).$$ Como esto vale para todo $g\in G$, resulta $I(ab)=I_a\circ I_b=I(a)\circ I(b)$. Por lo tanto, $I$ es un homomorfismo.
>>	2. El neutro de $\operatorname{Aut}(G)$ es $\operatorname{id}_G$. Para cualquier $g\in G$, $$\begin{aligned}g\in\ker I&\iff I(g)=\operatorname{id}_G\\&\iff I_g(x)=x\quad\text{para todo }x\in G\\&\iff gxg^{-1}=x\quad\text{para todo }x\in G\\&\iff gx=xg\quad\text{para todo }x\in G\\&\iff g\in Z(G).\end{aligned}$$ La penúltima equivalencia se obtiene multiplicando a derecha por $g$ en un sentido y por $g^{-1}$ en el otro. Así, $\ker I=Z(G)$.
>>- (c)
>>	1. Escribamos $\operatorname{Int}(G)=\operatorname{Im}I=\{I_a:a\in G\}$. Este conjunto es un subgrupo de $\operatorname{Aut}(G)$: contiene $I_e=\operatorname{id}_G$ y, para $a,b\in G$, por (a) y (b), $$I_a\circ(I_b)^{-1}=I_a\circ I_{b^{-1}}=I_{ab^{-1}}\in\operatorname{Int}(G).$$ Por el criterio de subgrupo, $\operatorname{Int}(G)\leq\operatorname{Aut}(G)$.
>>	2. Para verificar la normalidad, sean $\varphi\in\operatorname{Aut}(G)$ e $I_a\in\operatorname{Int}(G)$ arbitrarios. Para todo $x\in G$, como $\varphi$ preserva productos e inversos, $$\begin{aligned}(\varphi\circ I_a\circ\varphi^{-1})(x)&=\varphi\bigl(a\varphi^{-1}(x)a^{-1}\bigr)\\&=\varphi(a)\varphi(\varphi^{-1}(x))\varphi(a^{-1})\\&=\varphi(a)x\varphi(a)^{-1}\\&=I_{\varphi(a)}(x).\end{aligned}$$ En consecuencia, $\varphi\circ I_a\circ\varphi^{-1}=I_{\varphi(a)}$.
>>	3. Como $\varphi:G\to G$, tenemos $\varphi(a)\in G$. Por lo tanto, $I_{\varphi(a)}=I(\varphi(a))\in\operatorname{Im}I=\operatorname{Int}(G)$. Así, $$\varphi\operatorname{Int}(G)\varphi^{-1}\subseteq\operatorname{Int}(G)\qquad\text{para todo }\varphi\in\operatorname{Aut}(G).$$ Por el criterio de normalidad, $\operatorname{Int}(G)\trianglelefteq\operatorname{Aut}(G)$.
>>- (d)
>>	1. Por (b), $I:G\to\operatorname{Aut}(G)$ es un homomorfismo con $\ker I=Z(G)$, y por definición $\operatorname{Im}I=\operatorname{Int}(G)$. En particular, $Z(G)$ es normal por ser un núcleo, de modo que el cociente está definido. Por el primer teorema de isomorfismo, $$G/\ker I\cong\operatorname{Im}I,$$ es decir, $$\boxed{G/Z(G)\cong\operatorname{Int}(G).}$$ El isomorfismo inducido está dado por $gZ(G)\mapsto I_g$.

>[!exercise] Ejercicio 21
>Para cada uno de los siguientes grupos $G$ hallar un automorfismo que no sea interior.
>- **(i)** $G=\mathbb Z_6$.
>- **(ii)** $G=A_5$.
>- **(iii)*** $G=S_6$.
>>[!Proof]-
>>- (i)
>>	1. Como la suma en $\mathbb Z_6$ es conmutativa, para todos $a,g\in\mathbb Z_6$ tenemos $I_a(g)=a+g-a=g$. Por tanto, el único automorfismo interior es la identidad; basta hallar un automorfismo distinto de ella.
>>	2. Definimos $f:\mathbb Z_6\to\mathbb Z_6$ por $f(\overline{k})=\overline{5k}$. Está bien definida: si $\overline{k}=\overline{\ell}$, existe $j\in\mathbb Z$ tal que $k-\ell=6j$, y entonces $5k-5\ell=6(5j)$, de modo que $\overline{5k}=\overline{5\ell}$.
>>	3. Para cualesquiera $k,\ell\in\mathbb Z$, $$f(\overline{k}+\overline{\ell})=\overline{5(k+\ell)}=\overline{5k}+\overline{5\ell}=f(\overline{k})+f(\overline{\ell}).$$ Así, $f$ es un homomorfismo.
>>	4. Sus valores son $$\begin{aligned}f(\overline{0})&=\overline{0},&f(\overline{1})&=\overline{5},&f(\overline{2})&=\overline{10}=\overline{4},\\f(\overline{3})&=\overline{15}=\overline{3},&f(\overline{4})&=\overline{20}=\overline{2},&f(\overline{5})&=\overline{25}=\overline{1}.\end{aligned}$$ Cada elemento aparece exactamente una vez como imagen, luego $f$ es biyectiva y, por tanto, un automorfismo.
>>	5. Como $f(\overline{1})=\overline{5}\neq\overline{1}$, no es la identidad. Por el paso 1, $f$ no es interior.
>>- (ii)
>>	1. Sea $t=(1\ 2)\in S_5\setminus A_5$ y definamos $\varphi:A_5\to A_5$ mediante $\varphi(g)=tgt^{-1}$. La aplicación está bien definida: si $g$ es producto de $2r$ transposiciones y $t$ es una transposición, entonces $tgt^{-1}$ queda escrito como producto de $2r+2=2(r+1)$ transposiciones, por lo que $tgt^{-1}\in A_5$.
>>	2. Para cualesquiera $g,h\in A_5$, $$\varphi(gh)=tght^{-1}=tg(t^{-1}t)ht^{-1}=(tgt^{-1})(tht^{-1})=\varphi(g)\varphi(h).$$ Además, la conjugación por $t^{-1}=t$ es una inversa de $\varphi$, pues para todo $g\in A_5$, $$t^{-1}(tgt^{-1})t=g.$$ Por consiguiente, $\varphi$ es un automorfismo de $A_5$.
>>	3. Supongamos, buscando una contradicción, que $\varphi$ es interior. Entonces existe $b\in A_5$ tal que $$tgt^{-1}=bgb^{-1}\qquad\text{para todo }g\in A_5.$$
>>	4. Evaluamos esta igualdad en $g=(1\ 2\ 3)$. Como la conjugación renombra las entradas de un ciclo, $$t(1\ 2\ 3)t^{-1}=(2\ 1\ 3)=b(1\ 2\ 3)b^{-1}=(b(1)\ b(2)\ b(3)).$$ Las tres escrituras del ciclo $(2\ 1\ 3)$ obtenidas por rotación son $(2\ 1\ 3)$, $(1\ 3\ 2)$ y $(3\ 2\ 1)$; por tanto, $$(b(1),b(2),b(3))\in\{(2,1,3),(1,3,2),(3,2,1)\}.$$
>>	5. Evaluamos ahora en $g=(1\ 2\ 4)$. Del mismo modo, $$t(1\ 2\ 4)t^{-1}=(2\ 1\ 4)=b(1\ 2\ 4)b^{-1}=(b(1)\ b(2)\ b(4)),$$ y entonces $$(b(1),b(2),b(4))\in\{(2,1,4),(1,4,2),(4,2,1)\}.$$
>>	6. Las posibilidades del paso 4 para el par $(b(1),b(2))$ son $(2,1)$, $(1,3)$ y $(3,2)$; las del paso 5 son $(2,1)$, $(1,4)$ y $(4,2)$. La única posibilidad común es $(b(1),b(2))=(2,1)$. Los mismos pasos dan entonces $b(3)=3$ y $b(4)=4$. Como $b$ es una permutación, necesariamente $b(5)=5$. Por consiguiente, $b=(1\ 2)$.

>[!exercise] Ejercicio 22
>Para los siguientes pares $(G,N)$ calcular el cociente $G/N$, proponiendo un grupo $K$ tal que $G/N\cong K$ y explicitando un isomorfismo: $(\mathbb C^\times,\mathbb R_{>0});\ (\mathbb Q^\times,\mathbb Q_{>0});\ (G_{kn},G_n);\ (S^1,G_n)$.

## Ejercicios adicionales

>[!exercise] Ejercicio 23
>Calcular los subgrupos cerrados (topológicamente) de $(\mathbb R,+)$.

>[!exercise] Ejercicio 24
>Hallar todos los subgrupos normales de $D_n$, distinguiendo los casos en que $n$ sea par o impar.

>[!exercise] Ejercicio 25
>En cada caso verificar que $H\triangleleft G$ y calcular $G/H$.
>- **(a)** $G=D_6$ y $H=\{\operatorname{Id},r^3\}$.
>- **(b)** $G=\left\{\begin{pmatrix}1&b\\0&a\end{pmatrix}:a,b\in\mathbb Z_p,\ a\neq0\right\}$ y $H=\left\{\begin{pmatrix}1&b\\0&1\end{pmatrix}:b\in\mathbb Z_p\right\}$.

>[!exercise] Ejercicio 26
>Decir si las siguientes afirmaciones son verdaderas o falsas.
>- **(a)** Si $|G|=p$, con $p$ primo, entonces $G$ es cíclico.
>- **(b)** Si $|G|=p^2$, con $p$ primo, entonces $G$ es cíclico.
>- **(c)** Si $H\triangleleft G$ y $K\triangleleft G$, entonces $H\vee K\triangleleft G$.
>- **(d)** Sean $G_1,G_2$ grupos y $H_i\triangleleft G_i$, $i=1,2$.
>\t- **(i)** Si $G_1\cong G_2$ y $H_1\cong H_2$, entonces $G_1/H_1\cong G_2/H_2$.
>\t- **(ii)** Si $G_1\cong G_2$ y $G_1/H_1\cong G_2/H_2$, entonces $H_1\cong H_2$.
>\t- **(iii)** Si $H_1\cong H_2$ y $G_1/H_1\cong G_2/H_2$, entonces $G_1\cong G_2$.
>- **(e)** Si $G/N\cong G$, entonces $N=\{e_G\}$.

>[!exercise] Ejercicio 27
>Hallar pares de grupos $G$ y $H$ no isomorfos tales que $\operatorname{Aut}(G)\cong\operatorname{Aut}(H)$.

>[!exercise] Ejercicio 28
>Sea $[G,G]:=\langle[a,b]:a,b\in G\rangle$, donde $[a,b]=aba^{-1}b^{-1}$.
>- **(a)** Probar que $[G,G]\triangleleft G$. ¿Es $[G,G]$ abeliano?
>- **(b)** Mostrar que $G/[G,G]$ es abeliano.
>- **(c)** Probar que si $f:G\to H$ es un homomorfismo, entonces $f([G,G])\subseteq[H,H]$; si $f$ es un epimorfismo, probar la igualdad.
>- **(d)** Sea $H\triangleleft G$. Entonces $G/H$ es abeliano si y sólo si $[G,G]\subseteq H$.

>[!exercise] Ejercicio 29
>Un grupo se dice perfecto si $[G,G]=G$.
>- **(i)** Sea $G$ un grupo no abeliano. Probar que si $G$ es simple, entonces es perfecto.
>- **(ii)** Muestre que la recíproca no es cierta.

>[!exercise] Ejercicio 30
>Determinar todos los cocientes de $S_3$, $D_4$ y $H$.

>[!exercise] Ejercicio 31
>Sean $G$ un grupo finito y $f:G\to G$ un isomorfismo sin puntos fijos distintos de la identidad tal que $f^2=\operatorname{Id}$. Entonces $G$ es abeliano.

>[!exercise] Ejercicio 32
>Probar que $\operatorname{Hom}(\mathbb Z_m,\mathbb Z_n)\cong\mathbb Z_{(m,n)}$.

>[!exercise] Ejercicio 33
>Sean $H,K\triangleleft G$. Probar que $f:G/(H\cap K)\to G/H\times G/K$, $f(x)=(\pi_H(x),\pi_K(x))$, es un monomorfismo.

>[!exercise] Ejercicio 34
>Considerar $O(2,\mathbb R)$ y $SO(2,\mathbb R)$. Para $0\leq\theta<2\pi$ sea $$A_\theta=\begin{pmatrix}\cos(\theta)&-\sin(\theta)\\\sin(\theta)&\cos(\theta)\end{pmatrix}.$$ 
>- **(a)** Demostrar que si $A\in SO(2,\mathbb R)$ entonces $A=A_\theta$ para algún $\theta$.
>- **(b)** Si $G$ es un subgrupo finito de $SO(2,\mathbb R)$ y $\varphi$ es el menor ángulo positivo con $A_\varphi\in G$, demostrar que $G=\langle A_\varphi\rangle$.
>- **(c)** Si $G\subseteq O(2,\mathbb R)$ es finito y $B\in G\setminus SO(2,\mathbb R)$, demostrar que $B^2=\operatorname{Id}$.
>- **(d)** Demostrar que todo subgrupo finito de $O(2,\mathbb R)$ es cíclico o isomorfo a un grupo dihedral.

>[!exercise] Ejercicio 35
>Sea $G\subseteq SL_2(\mathbb Z)$ un subgrupo finito y sea $\pi:SL_2(\mathbb Z)\to SL_2(\mathbb Z_3)$ la proyección canónica.
>- **(a)** Si $A\in G$ entonces $A$ es diagonalizable.
>- **(b)** Si $A\in G\cap\ker(\pi)$ entonces $A$ no es de orden $2$ y $\operatorname{tr}(A)=-1$.
>- **(c)** Probar que la restricción $\pi:G\to SL_2(\mathbb Z_3)$ es inyectiva.
>- **(d)** Demostrar que no existe un subgrupo finito de $SL_2(\mathbb Z)$ isomorfo a $A_5$.

>[!exercise] Ejercicio 36
>**Producto semidirecto torcido de grupos.** Sea $G$ un grupo finito y $A$ un grupo con una acción de $G$. Sea $\sigma:G\times G\to A$ un $2$-cociclo que satisface $$\bigl(g\cdot\sigma(h,k)\bigr)\sigma(g,hk)=\sigma(g,h)\sigma(gh,k),$$ $$g\cdot(h\cdot a)=\sigma(g,h)(gh\cdot a)\sigma(g,h)^{-1}.$$ Definimos en $A\times G$ el producto $$(a,g)(b,h)=\bigl(a(g\cdot b)\sigma(g,h),gh\bigr).$$
>- **(a)** Demostrar que $A\ltimes_\sigma G$ es un grupo.
>- **(b)** Demostrar que la inclusión canónica de $A$ es un morfismo y que $A\triangleleft A\ltimes_\sigma G$. ¿Cuándo la inclusión canónica de $G$ es un morfismo?

>[!exercise] Ejercicio 37
>Sea $H$ un grupo y $N\trianglelefteq H$. Elegir una sección $\gamma:H/N\to H$ de la proyección canónica, con $\gamma(1)=1$, y definir $g\cdot n=\gamma(g)n\gamma(g)^{-1}$ y $\sigma(g,h)=\gamma(g)\gamma(h)\gamma(gh)^{-1}$.
>- **(a)** Probar que estas aplicaciones están bien definidas, satisfacen las ecuaciones del Ejercicio 36 y que $\sigma(g,h)\in N$.
>- **(b)** Usar que todo elemento de $H$ se escribe como $n\gamma(g)$ para demostrar que $H\cong N\ltimes_\sigma H/N$.
