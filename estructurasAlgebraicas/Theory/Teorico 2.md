>[!Definition] Morfismo de grupos
>Sean $(G,\cdot)$ y $(H,*)$ grupos. Una aplicación $f:G\to H$ se dice **morfismo de grupos** (u **homomorfismo**) si
>$$f(a\cdot b)=f(a)*f(b)\qquad\forall a,b\in G.$$
>En particular, todo morfismo satisface $f(e_G)=e_H$ y $f(a^{-1})=f(a)^{-1}$ para todo $a\in G$. Si además $f$ es biyectiva, se dice que es un **isomorfismo de grupos** y se escribe $G\cong H$.

>[!Remark] $G_{p}$ la categoria de grupos
>Objetos: Los grupos $G,H,K,\ldots$
>Morfismo: $G_{p}(G,H)=Hom_{G_{p}}(G,H) = \{ f:G\rightarrow H  \ | \ f \text{ homomorfismo} \}$. Donde 
>$$G_{p}(H,K)\times G_{p}(H,K)\rightarrow G_{p}(H,K)$$ 
>esta dada por la composicion de funciones

>[!Lemma]
>$f : G\rightarrow H$ homomorfismo entonces
>- $f(e)=e$
>- $\forall a\in G$ vale $f(a^{-1})=f(a)^{-1}$
>
>>[!Proof]-
>>1. Como $e_Ge_G=e_G$ y $f$ es un homomorfismo, $$f(e_G)=f(e_Ge_G)=f(e_G)f(e_G).$$ Multiplicando ambos miembros a la izquierda por $f(e_G)^{-1}$, se obtiene $$e_H=f(e_G).$$
>>2. Sea $a\in G$. Usando el punto anterior, $$f(a)f(a^{-1})=f(aa^{-1})=f(e_G)=e_H.$$ Por lo tanto, $f(a^{-1})$ es el inverso de $f(a)$ en $H$ y, en consecuencia, $$f(a^{-1})=f(a)^{-1}.$$

>[!Definition]
>$f : G\rightarrow H$ homomorfismo de grupos entonces $f$ se dice:
>- (a) monomorfimos si es inyectiva
>- (b) epimorfismo si es sobreyectiva
>- (b) isomorfismo si es ambas
>
>En categorias en general (donde los morfimos no necesariamente son funciones):
>- (a) $f$ mono $\iff f.g=f.h \Rightarrow g=h$
>- (b) $f$ epi $\iff g.f=hf \Rightarrow g=h$

>[!Lemma]
>$f$ isomorfismo $\iff \exists g : H\rightarrow G$ homo de grupos ta $f.g=Id_{H} \quad g.f=Id_{G}$. Dicho $g$ se llama inverso de $f$

>[!Remark] Grupos isomorfos notacion
>Los grupos isomorfos suelen tratarse como "el mismo" grupo. Cuando dos grupos $G$ y $H$ son isomorfos lo denotamos $$G\cong H$$

>[!Lemma]
>Sea $f : G\rightarrow H$ homomorfismo
>- Si $G$ abeliano y $f$ epimorfismo $\Rightarrow H$ es abeliano
>- Si $H$ abeliano y $f$ monomorfimo $\Rightarrow G$ es abeliano

>[!Definition]
>$a\in G$ entonces 
>- $a^{n}=a^{n-1}.a$
>- $a^{0}=e$
>- Si $n\in \mathbb{Z}_{< 0}$ $a^{n}=(a^{-1})^{-n}=(a^{-n})^{-1}$

>[!Lemma]
>$a\in G$ y $n,m\in \mathbb{Z}$ entonces 
>$$a^{n+m} =a^{n} .a^{m} $$

>[!Definition] Subgrupo
>Sea $G$ un grupo. Un subconjunto no vacío $H\subseteq G$ se dice **subgrupo** de $G$, y se escribe $H\leqslant G$, si $H$ es un grupo con la operación de $G$ restringida a $H$. Equivalentemente,
>$$e_G\in H,\qquad ab\in H\quad\text{y}\quad a^{-1}\in H\qquad\forall a,b\in H.$$
>
>También puede usarse el criterio equivalente: $H\neq\varnothing$ es subgrupo de $G$ si y solo si $$ab^{-1}\in H$$ para todo $a,b\in H$.

>[!Definition] Subgrupo generado
>Sea $G$ un grupo y sea $S\subseteq G$ un subconjunto. El **subgrupo generado por $S$** es el menor subgrupo de $G$ que contiene a $S$: $$\langle S\rangle=\bigcap_{\substack{H\leq G\\S\subseteq H}}H.$$ Es decir, $\langle S\rangle$ es la intersección de todos los subgrupos de $G$ que contienen a $S$. Los elementos de $S$ se llaman **generadores** de $\langle S\rangle$, y se dice que $S$ es un **conjunto de generadores** de $\langle S\rangle$.
>Equivalentemente, $\langle S\rangle$ consiste en todos los productos finitos de elementos de $S$ y de sus inversos: $$\langle S\rangle=\bigl\{s_1^{\varepsilon_1}\cdots s_k^{\varepsilon_k}:k\geq 0,\ s_i\in S,\ \varepsilon_i\in\{\pm 1\}\bigr\},$$ con el convenio de que el producto vacío es $e$. Si $S=\{a_1,\ldots,a_n\}$ es finito se escribe $\langle a_1,\ldots,a_n\rangle$.
>Si existe $S$ finito con $G=\langle S\rangle$, se dice que $G$ es **finitamente generado**.

>[!Definition] Grupo cíclico
>Un grupo $G$ se dice **cíclico** si está generado por un solo elemento: existe $a\in G$ tal que $G=\langle a\rangle$. En ese caso $a$ es un **generador** de $G$ y $$G=\langle a\rangle=\{a^n:n\in\mathbb Z\}.$$ Equivalentemente, para todo $g\in G$ existe $n\in\mathbb Z$ tal que $g=a^n$.
>En notación aditiva, $\langle a\rangle=\{na:n\in\mathbb Z\}$.
>Más generalmente, para $a\in G$ el subgrupo $\langle a\rangle$ se llama el **subgrupo cíclico generado por $a$**: es siempre cíclico, aunque $G$ no lo sea.
