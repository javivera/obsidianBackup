---
dateCreated: 2026-08-14
tags:
  - AlgebraicStructures
  - Groups
source: "[[2da clase.pdf]]"
---
>[!Remark]
>En esta clase se estudian tres maneras fundamentales de construir grupos nuevos a partir de otros: productos, cocientes y productos semidirectos. También se introduce el subgrupo conmutador y se enuncia el teorema de Lagrange.

## Motivación: el grupo de Galois de $\mathbb C/\mathbb R$

>[!Definition] Automorfismo de un cuerpo
>Un **automorfismo** de un cuerpo $L$ es una función biyectiva $\sigma:L\to L$ que preserva la suma, el producto y la unidad; es decir, para todos $x,y\in L$, $$\sigma(x+y)=\sigma(x)+\sigma(y),\qquad \sigma(xy)=\sigma(x)\sigma(y),\qquad \sigma(1)=1.$$ El conjunto de estos automorfismos se denota por $\operatorname{Aut}(L)$. Por definición, entonces, un automorfismo preserva todas las relaciones construidas con las operaciones del cuerpo.

>[!Definition] Automorfimo
>$$Aut(H)=\{ \sigma:H\rightarrow H : \sigma\text{ es isomorfismo}\}$$  

>[!Definition] Grupo de Galois
>Sea $L/K$ una extensión de cuerpos, es decir, $K$ es un subcuerpo de $L$ y, en particular, $K\subseteq L$. El **grupo de Galois** de $L$ sobre $K$ es el grupo de automorfismos de $L$ que fijan cada elemento de $K$: $$\operatorname{Gal}(L/K)=\{\sigma\in\operatorname{Aut}(L):\sigma(k)=k\text{ para todo }k\in K\}.$$

>[!Example] Cálculo de $\operatorname{Gal}(\mathbb C/\mathbb R)$
>Por definición, $$\operatorname{Gal}(\mathbb C/\mathbb R)=\{\sigma\in\operatorname{Aut}(\mathbb C):\sigma(r)=r\text{ para todo }r\in\mathbb R\}.$$
>Entonces $$\operatorname{Gal}(\mathbb C/\mathbb R)=\{\operatorname{id}_{\mathbb C},\overline{.} \}\cong\mathbb Z_2.$$
>>[!Proof]-
>>1. Como $\mathbb C=\mathbb R(i)$ y $i$, entonces $$0=\sigma(i^{2}+1)=\sigma(i^{2} )+\sigma(1)=\sigma(i^{2})+1=\sigma(i)^{2}\quad\iff \quad\sigma(i)^{2}=-1$$  
>>2. Pero como los automorfismos $\sigma$ fijan $\mathbb R$ entonces $$\sigma(a+bi)=\sigma(a)+\sigma(b)\sigma(i)=a+b\pm i$$en el primer caso, $\sigma=\operatorname{id}_{\mathbb C}$; en el segundo, $\sigma$ es la conjugación compleja $c(z)=\overline z$. 
>>3. Así, $$\operatorname{Gal}(\mathbb C/\mathbb R)=\{\operatorname{id}_{\mathbb C},c \}$$
>>4. Veamos que es isomorfo a $\mathbb{Z}_{2}$. Definimos $$\varphi:\operatorname{Gal}(\mathbb C/\mathbb R)\longrightarrow\mathbb Z_2,\qquad \varphi(\operatorname{id}_{\mathbb C})=0,\qquad \varphi(c)=1.$$ Esta función es biyectiva porque empareja los dos elementos distintos de cada conjunto.
>>5. Veamos que $\varphi$ es un homomorfismo. Como $\operatorname{id}_{\mathbb C}$ es la identidad y $c\circ c=\operatorname{id}_{\mathbb C}$, se tiene $$\begin{aligned}\varphi(\operatorname{id}_{\mathbb C}\circ\operatorname{id}_{\mathbb C})&=\varphi(\operatorname{id}_{\mathbb C})=0=0+0=\varphi(\operatorname{id}_{\mathbb C})+\varphi(\operatorname{id}_{\mathbb C}),\\\varphi(\operatorname{id}_{\mathbb C}\circ c)&=\varphi(c)=1=0+1=\varphi(\operatorname{id}_{\mathbb C})+\varphi(c),\\\varphi(c\circ\operatorname{id}_{\mathbb C})&=\varphi(c)=1=1+0=\varphi(c)+\varphi(\operatorname{id}_{\mathbb C}),\\\varphi(c\circ c)&=\varphi(\operatorname{id}_{\mathbb C})=0=1+1=\varphi(c)+\varphi(c)\quad\text{en }\mathbb Z_2.\end{aligned}$$ Por lo tanto, $\varphi$ preserva la operación y es un homomorfismo.
>>6. Como $\varphi$ es biyectiva y preserva la operación, es un isomorfismo. Por lo tanto, $$\operatorname{Gal}(\mathbb C/\mathbb R)\cong\mathbb Z_2.$$

## 1. Producto directo y suma directa

>[!Definition] Producto directo de una familia de grupos
>Sea $(G_i)_{i\in I}$ una familia de grupos. Su **producto directo** es $$\prod_{i\in I}G_i=\left\{g:I\longrightarrow\bigcup_{i\in I}G_i:g(i)\in G_i\text{ para todo }i\in I\right\}.$$
>Es habitual escribir sus elementos como tuplas indexadas: $$(g_i)_{i\in I}=\underbrace{(g(1),g(2),\ldots)}_{\lvert I\rvert\text{ elementos}}.$$
>La operación se define coordenada a coordenada: $$(g_i)_{i\in I}(h_i)_{i\in I}=(g_ih_i)_{i\in I}=\underbrace{(g(1)h(1),g(2)h(2),\ldots)}_{\lvert I\rvert\text{ elementos}}.$$
>Con esta operación, $\prod_{i\in I}G_i$ es un grupo. Su neutro es $(e_i)_{i\in I}$ y $$(g_i)_{i\in I}^{-1}=(g_i^{-1})_{i\in I}.$$

>[!Example]- Ejemplo de producto directo y su operación
>Sean $I=\{1,2,3\}$, $G_1=\mathbb Z_2$, $G_2=\mathbb Z_3$ y $G_3=\mathbb Z_4$, escritos aditivamente. Entonces $$\prod_{i\in I}G_i=\mathbb Z_2\times\mathbb Z_3\times\mathbb Z_4.$$
>El elemento $g=(1,2,3)$ representa la función determinada por $$g(1)=1\in G_1,\qquad g(2)=2\in G_2,\qquad g(3)=3\in G_3.$$
>Si $h=(1,2,2)$, la suma se calcula coordenada a coordenada, en el grupo correspondiente: $$g+h=(1+1\bmod 2,\ 2+2\bmod 3,\ 3+2\bmod 4)=(0,1,1).$$

>[!Definition] Suma directa de una familia de grupos
>El **soporte** de una tupla $g=(g_i)_{i\in I}$ es $$\operatorname{supp}(g)=\{i\in I:g_i\neq e_i\}.$$
>La suma directa se define por $$\bigoplus_{i\in I}G_i=\left\{(g_i)_{i\in I}\in\prod_{i\in I}G_i:\operatorname{supp}(g)\text{ es finito}\right\}.$$es un subgrupo del producto directo. 
>
>Si $I$ es finito, entonces $$\bigoplus_{i\in I}G_i=\prod_{i\in I}G_i.$$

>[!Remark] Notación multiplicativa y aditiva
>Aunque se escriba $\bigoplus$, esta construcción también tiene sentido para grupos no abelianos: la operación sigue siendo coordenada a coordenada. Cuando todos los $G_i$ son abelianos y se usa notación aditiva, el símbolo $\bigoplus$ resulta especialmente natural.

>[!Definition] Proyecciones canónicas
>Para cada $j\in I$, la **proyección canónica** es el homomorfismo $$p_j:\prod_{i\in I}G_i\longrightarrow G_j,\qquad p_{j}(g)=p_j((g_i)_{i\in I})=g_j.$$ y es un epimorfismo.
>>[!Proof]-
>>1. Sean $g=(g_i)_{i\in I}$ y $h=(h_i)_{i\in I}$ elementos de $\prod_{i\in I}G_i$. Como la operación en el producto directo se calcula coordenada a coordenada, se tiene $$p_j(gh)=p_j((g_ih_i)_{i\in I})=g_jh_j=p_j(g)p_j(h).$$ Por lo tanto, $p_j$ es un homomorfismo.
>>2. **Epimorfismo.** Sea $x\in G_j$. Consideremos $a=(a_i)_{i\in I}\in\prod_{i\in I}G_i$ definido por $$a_i=\begin{cases}x,&i=j,\\e_i,&i\neq j.\end{cases}$$ Entonces $p_j(a)=a_j=x$. Por lo tanto, $p_j$ es sobreyectivo y, en consecuencia, es un epimorfismo.

>[!Definition] La inclusion canónica
>La **inclusión canónica** de la coordenada $j$ es el homomorfismo $$\iota_j:G_j\longrightarrow\bigoplus_{i\in I}G_i,$$ dado por $$(\iota_j(x))_i=\begin{cases}x,&i=j,\\e_i,&i\neq j.\end{cases}$$ y es monomorfismo
>>[!Proof]-
>>1. **Buena definición.** Para cada $x\in G_j$, el soporte de $\iota_j(x)$ es $\varnothing$ si $x=e_j$ y $\{j\}$ si $x\neq e_j$. En ambos casos es finito, de modo que $\iota_j(x)\in\bigoplus_{i\in I}G_i$.
>>2. **Homomorfismo.** Sean $x,y\in G_j$. Para cada $i\in I$, $$\bigl(\iota_j(x)\iota_j(y)\bigr)_i=(\iota_j(x))_i(\iota_j(y))_i=\begin{cases}xy,&i=j,\\e_i,&i\neq j,\end{cases}=(\iota_j(xy))_i.$$ Como ambas tuplas coinciden en todas sus coordenadas, $\iota_j(xy)=\iota_j(x)\iota_j(y)$.
>>3. **Inyectividad.** Si $\iota_j(x)=\iota_j(y)$, al comparar la coordenada $j$ obtenemos $x=(\iota_j(x))_j=(\iota_j(y))_j=y$. Por lo tanto, $\iota_j$ es inyectiva y, en consecuencia, es un monomorfismo.

>[!Proposition] Propiedad universal del producto directo
>Sea $H$ un grupo y sean $g_i:H\to G_i$ homomorfismos para todo $i\in I$. Existe un único homomorfismo $$g:H\longrightarrow\prod_{i\in I}G_i$$ tal que $p_i\circ g=g_i$ para todo $i$. Está dado por $$g(h)=(g_i(h))_{i\in I}=(g_{1}(h),g_{2}(h),\ldots)$$
>La propiedad se representa mediante el siguiente diagrama conmutativo: $$\begin{array}{ccc}&H&\\[-2pt]{}^{g}\swarrow&&\searrow^{g_i}\\[2pt]\displaystyle\prod_{i\in I}G_i&\xrightarrow{\ p_i\ }&G_i.\end{array}$$
>Ademas esto implica que dar un homomorfismo de $H$ al producto directo equivale a dar, para cada $i\in I$, un homomorfismo de $H$ a $G_i$. En símbolos, $$\operatorname{Hom}\left(H,\prod_{i\in I}G_i\right)\cong\prod_{i\in I}\operatorname{Hom}(H,G_i).$$
>>[!Proof]-
>>4. La condición $p_i(g(h))=g_i(h)$ determina cada coordenada de $g(h)$, por lo que determina a $g$ de manera única. Además, $$g(hk)=(g_i(hk))_i=(g_i(h)g_i(k))_i=g(h)g(k),$$ así que $g$ es un homomorfismo.

>[!Proposition] Propiedad universal de la suma directa
>Sea $H$ un grupo abeliano y sean $u_i:G_i\to H$ homomorfismos. Existe un único homomorfismo $$u:\bigoplus_{i\in I}G_i\longrightarrow H$$ tal que $u\circ\iota_i=u_i$ para todo $i\in I$. Para $g=(g_i)_i$, se define por $$u(g)=\prod_{i\in\operatorname{supp}(g)}u_i(g_i).$$
>El producto (que es la operacion de $H$ podria ser "la suma") es finito y su valor no depende del orden porque $H$ es abeliano. 
>Más generalmente, si $H$ no es abeliano, la misma construcción funciona cuando las imágenes $u_i(G_i)$ conmutan dos a dos. Esto significa que, si $i\neq j$, entonces $u_i(x)u_j(y)=u_j(y)u_i(x)$ para todo $x\in G_i$ e $y\in G_j$.
>
>La propiedad se representa mediante el siguiente diagrama conmutativo: $$\begin{array}{ccc}&G_i&\\[-2pt]{}^{\iota_i}\swarrow&&\searrow^{u_i}\\[2pt]\displaystyle\bigoplus_{i\in I}G_i&\xrightarrow{\ u\ }&H.\end{array}$$

>[!Remark]
>Dar un homomorfismo desde la suma directa hacia $H$ equivale a dar, para cada $i\in I$, un homomorfismo de $G_i$ a $H$. En símbolos, $$\operatorname{Hom}\left(\bigoplus_{i\in I}G_i,H\right)\cong\prod_{i\in I}\operatorname{Hom}(G_i,H).$$

>[!exercise] Diferencia entre producto y suma directa infinitos
>Decidir si $$\prod_{n\in\mathbb N}\mathbb Z\cong\bigoplus_{n\in\mathbb N}\mathbb Z.$$
>>[!Proof]-
>>5. No son isomorfos. La suma directa es numerable: sus elementos son sucesiones enteras con soporte finito, y para cada tamaño de soporte hay solamente una unión numerable de conjuntos numerables. Osea es union de conjuntos de cardinal $\aleph^{j}$ con $j\in \mathbb{N}$ que por lo tanto tiene cardinal $\aleph$ 
>>6. En cambio, el producto directo contiene a $\{0,1\}^{\mathbb N}$, que es no numerable (por que tiene cardinal $2^{\aleph}$) . Por lo tanto, los grupos tienen distinta cardinalidad.

## 2. Cocientes de grupos

>[!Definition] Clases laterales y relación de equivalencia
>Sea $G$ un grupo y sea $H\leq G$. Para $g,\widetilde g\in G$, definimos $$g\sim_H\widetilde g\iff g^{-1}\widetilde g\in H.$$
>Esta es una relación de equivalencia. La clase de $g$ es la clase lateral izquierda $$gH:=[g]=\{gh:h\in H\}.$$
>El conjunto de clases laterales se denota $$G/H:=G/ \sim =\{gH:g\in G\}.$$

>[!Definition] Subgrupo normal
>Un subgrupo $H\leq G$ es **normal** si $$gHg^{-1}=H\qquad\text{para todo }g\in G.$$se escribe $H\trianglelefteq G$. 
>
>Notar que son equivalentes: 
>- $gHg^{-1}=H$ para todo $g\in G$; 
>- $gH=Hg$ para todo $g\in G$; 
>- $ghg^{-1}\in H$ para todo $g\in G$ y $h\in H$.

>[!Warning] El cociente no siempre es un grupo
>La expresión $$[g][\widetilde g]=[g\widetilde g]$$ solamente define una operación en $G/H$ cuando el resultado no depende de los representantes elegidos. La condición exacta que garantiza esto es que $H$ sea normal.
>>[!Proof]- ¿Por qué es necesaria la normalidad?
>>1. Notamos que $[h]=[e]$ para todo $h\in H$. 
>>2. Ahora si asumimos que la operacion esta bien defnida, para cualesquiera $g\in G$ y $h\in H$, $$[ghg^{-1}]=[g][h][g^{-1}]=[g][e][g^{-1}]=[e]$$ entonces $(ghg^{-1})^{-1}.e\in H$ osea $ghg^{-1}\in H$. Luego $gHg^{-1}\subseteq H$
>>3. Aplicando lo mismo a $g^{-1}$ obtenemos $g^{-1}Hg\subseteq H$ entonces $gg^{-1}Hgg^{-1}\subseteq gHg^{-1}$ osea $H\subseteq gHg^{-1}$ 
>>4. Por lo tanto, $H\trianglelefteq G$.

>[!Remark]
>Todo subgrupo de un grupo abeliano es normal. En un grupo **no abeliano** puede haber subgrupos que no sean normales.
>>[!Proof]- Justificación y ejemplo
>>- **Caso abeliano.** 
>>	1. Sea $H\leq G$ y supongamos que $G$ es abeliano. Para todo $g\in G$ y todo $h\in H$ se cumple $gh=hg$; 
>>	2. Por lo tanto, $$gH=\{gh:h\in H\}=\{hg:h\in H\}=Hg.$$ Luego, $H\trianglelefteq G$.
>>- **Contraejemplo en un grupo no abeliano.** 
>>	1. Consideremos el grupo de simetrías del triángulo equilátero $D_3\cong S_3$. 
>>	2. Etiquetamos sus vértices con $1,2,3$ y tomamos la rotación $r=(1\,2\,3)$ y la reflexión $\sigma=(2\,3)$, usando la convención de que en un producto de permutaciones actúa primero la de la derecha. El subgrupo generado por la reflexión es $$H=\langle\sigma\rangle=\{e,\sigma\}.$$
>>	3. Sus clases laterales determinadas por $r$ son $$rH=\{r,r\sigma\}\qquad\text{y}\qquad Hr=\{r,\sigma r\}.$$ En efecto, $r\sigma=(1\,2\,3)(2\,3)=(1\,2)$ mientras que $\sigma r=(2\,3)(1\,2\,3)=(1\,3)$ 
>>	4. Entonces $rH\neq Hr$. Por consiguiente, $H$ no es normal en $D_3$. 

>[!Proposition] Estructura de grupo en $G/H$
>Sea $H\leq G$. La operacion $$(gH)(\widetilde gH)=(g\widetilde g)H$$ está bien definida si y solo si $H\trianglelefteq G$. 
>
>En ese caso, $G/H$ es un grupo, su neutro es $H$ y $$(gH)^{-1}=g^{-1}H.$$
>>[!Proof]-
>>- $(\Leftarrow)$ Supongamos $H\trianglelefteq G$ entonces $\widetilde g^{-1}h_1\widetilde g\in H$. Si $g'=gh_1$ y $\widetilde g'=\widetilde gh_2$ con $h_1,h_2\in H$, entonces $$g'\widetilde g'=gh_1\widetilde gh_2=g\widetilde g(\widetilde g^{-1}h_1\widetilde g)h_2\in g\widetilde gH,$$ Por lo tanto, $[g'\widetilde g']=[g\widetilde g]$ digamos, tomando dos representantes distintos llegamos a la misma clase, por lo tanto la operacion esta bien definida.
>>- $(\Rightarrow)$ 
>>	1. Recíprocamente, supongamos que la operación está bien definida. Entonces para todo $h\in H$, se tiene $$eH=geg^{-1}H =(gH)(eH)(g^{-1}H)=(gH)(hH)(g^{-1}H)=(ghg^{-1})H.$$
>>	2. Luego como $eH=(ghg^{-1})H$ son la misma clase y $ghg^{-1}\in (ghg^{-1}H)$ entonces $ghg^{-1}\in eH$ osea existe un $h\in H$ tal que $ghg^{-1}=eh=h$. 
>>	3. Por lo tanto, $ghg^{-1}\in H$ para todo $g\in G$ y $h\in H$. Esto da $gHg^{-1}\subseteq H$; 
>>	4. Al reemplazar $g$ por $g^{-1}$ se obtiene la inclusión opuesta (usando $H=gg^{-1}H(g^{-1})^{-1}g^{-1}\subseteq gHg^{-1}$) , y entonces $gHg^{-1}=H$

^86a092

>[!Proposition] Proyección canónica
>Si $H\trianglelefteq G$, la aplicación $$\pi:G\longrightarrow G/H,\qquad\pi(g)=gH$$ es un epimorfismo y $$\ker\pi=H.$$

>[!Theorem] Propiedad universal del cociente
>Sean $f:G\to\widetilde G$ un homomorfismo y $H\trianglelefteq G$. Si $H\subseteq\ker f$, entonces existe un único homomorfismo $$\widehat f:G/H\longrightarrow\widetilde G$$ tal que $f=\widehat f\circ\pi$. Está dado por $$\widehat f(gH)=f(g).$$
>La propiedad se representa mediante el siguiente diagrama conmutativo: $$\begin{array}{ccc}G&\xrightarrow{\ f\ }&\widetilde G\\[-2pt]{}_{\pi}\downarrow&\nearrow^{\widehat f}&\\[2pt]G/H&&\end{array}$$
>>[!Proof]-
>>5. **Buena definición.** Escribimos $[g]=gH$ y sea $h\in H$. Entonces $[gh]=[g]$ y, como $H\subseteq\ker f$, se tiene $f(h)=e$. Por lo tanto, $$\widehat f([gh])=f(gh)=f(g)f(h)=f(g)e=f(g)=\widehat f([g]).$$ Como todo representante de $[g]$ es de la forma $gh$ para algún $h\in H$, el valor de $\widehat f$ no depende del representante elegido.
>>6. Que es **homomorfismo** se sigue de $$\widehat f((gH)(g'H))=f(gg')=f(g)f(g')=\widehat f(gH)\widehat f(g'H).$$ La igualdad $f=\widehat f\circ\pi$ es inmediata y fuerza la unicidad.

^38af6a

## 3. Primer teorema de isomorfismo

>[!Theorem] Primer teorema de isomorfismo
>Sean $G,H$ grupos y sea $f:G\to H$ un homomorfismo. Entonces $$\ker f\trianglelefteq G$$ y existe un isomorfismo natural $$G/\ker f\cong\operatorname{Im}f.$$
>El isomorfismo es $$\widehat f:G/\ker f\longrightarrow\operatorname{Im}f,\qquad\widehat f(g\ker f)=f(g).$$
>>[!Proof]-
>>1. **Normalidad del núcleo.** Si $g\in G$ y $k\in\ker f$, entonces $$f(gkg^{-1})=f(g)f(k)f(g)^{-1}=f(g)ef(g)^{-1}=e.$$ Por tanto, $gkg^{-1}\in\ker f$ y $\ker f\trianglelefteq G$.
>>2. **Buena definición.** Si $g\ker f=g'\ker f$, entonces $g^{-1}g'\in\ker f$, osea $f(g^{-1}g')=e$ de modo que $f(g)=f(g')$.
>>3. **Homomorfismo y sobreyectividad.** La aplicación $\widehat f$ es un homomorfismo por la [[Teorico 3#^38af6a|propiedad universal del cociente]] y es sobreyectiva por definición de $\operatorname{Im}f$.
>>4. **Inyectividad.** Si $\widehat f(g\ker f)=e$, entonces $f(g)=e$, por lo que $g\in\ker f$ y $g\ker f=\ker f=e \ker f$. Digamos el unico elemento en el nucleo es la clase neutra. Así, $\ker\widehat f$ es trivial y $\widehat f$ es inyectiva.

>[!Example]- Cociente de un producto directo
>En $G\times H$, el subgrupo $G\times\{e_H\}$ es normal. La proyección $$p_H:G\times H\longrightarrow H,\qquad p_H(g,h)=h$$ es sobreyectiva y tiene núcleo $G\times\{e_H\}$. Por el primer teorema de isomorfismo, $$G\times H/ G\times\{e_H\}\cong H.$$
>El isomorfismo se representa mediante el siguiente diagrama conmutativo: $$\begin{array}{ccc}G\times H&\xrightarrow{\ p_H\ }&H\\[-2pt]{}_{\pi}\downarrow&\nearrow^{\widehat p_H}&\\[2pt](G\times H)/(G\times\{e_H\})&&\end{array}$$ donde $\pi$ es la proyección canónica y $\widehat p_H((g,h)(G\times\{e_H\}))=h$.

>[!exercise]- Generalización a productos arbitrarios
>Sean $H_i\trianglelefteq G_i$ para todo $i\in I$. Demostrar que $$\prod_{i\in I}H_i\trianglelefteq\prod_{i\in I}G_i$$ y que $$\frac{\prod_{i\in I}G_i}{\prod_{i\in I}H_i}\cong\prod_{i\in I}(G_i/H_i).$$
>>[!Proof]-
>>1. Definimos $$F:\prod_{i\in I}G_i\longrightarrow\prod_{i\in I}(G_i/H_i),\qquad F((g_i)_i)=(g_iH_i)_i.$$
>>2. **Homomorfismo.** Para $g=(g_i)_{i\in I}$ y $x=(x_i)_{i\in I}$, la operación coordenada a coordenada da $$F(gx)=F((g_ix_i)_{i\in I})=(g_ix_iH_i)_{i\in I}=(g_iH_i)_{i\in I}(x_iH_i)_{i\in I}=F(g)F(x).$$ (Notar que la operacion entre clases esta [[Teorico 3#^86a092|bien definida]] por que $H_i\trianglelefteq G_i$) 
>>3. La aplicación $F$ es sobreyectiva, pues cada $(g_iH_i)_{i\in I}$ es la imagen de $(g_i)_{i\in I}$. Osea $$Im F=\prod_{i\in I}(G_i/H_i)$$   Además, $$F((g_i)_{i\in I})=(H_i)_{i\in I}\iff g_i\in H_i\text{ para todo }i\in I,$$ de modo que $$\ker F=\prod_{i\in I}H_i.$$
>>4. Por el primer teorema de isomorfismo, $\ker F=\prod_{i\in I}H_i$ es automáticamente normal en $\prod_{i\in I}G_i$ y $$\frac{\prod_{i\in I}G_i}{\prod_{i\in I}H_i}\cong\prod_{i\in I}(G_i/H_i).$$ El mismo argumento vale para sumas directas si se restringen dominio y codominio a elementos de soporte finito.

>[!Example]- El círculo como cociente de $\mathbb R$
>Consideremos $\mathbb{Z}\leq \mathbb{R}$  $$\varphi:(\mathbb R,+)\longrightarrow(S^1,\cdot),\qquad\varphi(t)=e^{2\pi it},$$ donde $S^1=\{z\in\mathbb C:|z|=1\}$. Es un epimorfismo y $$\ker\varphi=\mathbb Z.$$ Por el primer teorema de isomorfismo, $$\mathbb R/\mathbb Z\cong S^1.$$
>La clase $[t]=t+\mathbb Z$ representa todos los números reales que difieren de $t$ en un entero; geométricamente, el cociente identifica los extremos de cada intervalo de longitud $1$.

## 4. Conmutadores y abelianización

>[!Definition] Conmutador y subgrupo conmutador
>En estas notas usamos la convención $$[g,h]=hgh^{-1}g^{-1}.$$
>El **subgrupo conmutador** o **subgrupo derivado** de $G$ es $$[G,G]=\left\langle[g,h]:g,h\in G\right\rangle.$$
>Con la convención alternativa $[g,h]=ghg^{-1}h^{-1}$ se obtiene el mismo subgrupo, pues los generadores de una convención son inversos o conjugados de los de la otra.

>[!Proposition] El cociente por el subgrupo conmutador es abeliano
>El subgrupo $[G,G]$ es normal en $G$ y $$G/[G,G]$$ es abeliano. Este cociente se llama la **abelianización** de $G$ y suele denotarse $G^{\mathrm{ab}}$.
>>[!Proof]-
>>- **Normalidad**, 
>>	1. Observamos primero que el conjugado de cada conmutador vuelve a ser un conmutador: $$a[g,h]a^{-1}=[aga^{-1},aha^{-1}]\in[G,G].$$ En efecto, con nuestra convención $[g,h]=hgh^{-1}g^{-1}$, $$\begin{aligned}[aga^{-1},aha^{-1}]&=(aha^{-1})(aga^{-1})(aha^{-1})^{-1}(aga^{-1})^{-1}\\&=(aha^{-1})(aga^{-1})(ah^{-1}a^{-1})(ag^{-1}a^{-1})\\&=a(hgh^{-1}g^{-1})a^{-1}\\&=a[g,h]a^{-1}.\end{aligned}$$
>>	2. Como $[G,G]$ está generado por los conmutadores y la conjugación preserva productos e inversos, se sigue que $$a[G,G]a^{-1}\subseteq[G,G].$$
>>	3. Aplicando lo mismo a $a^{-1}$ se obtiene la inclusión opuesta y, por tanto, $$a[G,G]a^{-1}=[G,G].$$ Así, $[G,G]\trianglelefteq G$ y el cociente $G/[G,G]$ está bien definido.
>>- Ahora probamos la **conmutatividad**. 
>>	1. Para $x,y\in G$, $$\begin{aligned}x[G,G]y[G,G]=y[G,G]x[G,G]&\iff xy[G,G]=yx[G,G]\\&\iff (yx)^{-1}(xy)\in[G,G]\\&\iff x^{-1}y^{-1}xy\in[G,G]\\&\iff [y^{-1},x^{-1}]\in[G,G].\end{aligned}$$ (Notar que como probamos normalidad el producto entre clases esta bien defindo). La última pertenencia es cierta por definición de $[G,G]$;
>>	2. Por lo tanto, todas las clases conmutan y $G/[G,G]$ es abeliano.

>[!Proposition] Caracterización universal de la abelianización
>Si $H\trianglelefteq G$, entonces $$G/H\text{ es abeliano}\iff[G,G]\subseteq H.$$
>En particular, $[G,G]$ es el menor subgrupo normal cuyo cociente es abeliano. Además, todo homomorfismo de $G$ hacia un grupo abeliano factoriza de manera única a través de $G^{\mathrm{ab}}$.
>>[!Proof] Revisar
>>1.

## 5. Producto semidirecto

>[!Definition] Acción por automorfismos y producto semidirecto
>Sean $H,G$ grupos y sea $$\varphi:G\longrightarrow\operatorname{Aut}(H)$$ un homomorfismo. En el conjunto $H\times G$ definimos $$ (h,x)(k,y)=\bigl(h\varphi(x)(k),xy\bigr). $$
>Con esta operación se obtiene el **producto semidirecto** de $H$ por $G$, denotado $$H\rtimes_\varphi G.$$

>[!Proposition] Propiedades básicas del producto semidirecto
>- El conjunto $H\rtimes_\varphi G$ es un grupo. Su neutro es $(e_H,e_G)$ y $$(h,x)^{-1}=\left(\varphi(x^{-1})(h^{-1}),x^{-1}\right).$$
>- Si $\varphi$ es trivial, es decir, si $\varphi(x)=\operatorname{id}_H$ para todo $x\in G$, entonces $$H\rtimes_\varphi G\cong H\times G.$$
>- El subgrupo $$H\times\{e_G\}\cong H$$ es siempre normal en $H\rtimes_\varphi G$, mientras que $\{e_H\}\times G\cong G$ no tiene por qué ser normal.
>>[!Proof] Revisar
>>La asociatividad se deduce de que $\varphi(xy)=\varphi(x)\varphi(y)$. En efecto, $$\begin{aligned}((h,x)(k,y))(\ell,z)&=(h\varphi(x)(k)\varphi(xy)(\ell),xyz),\\(h,x)((k,y)(\ell,z))&=(h\varphi(x)(k\varphi(y)(\ell)),xyz)\\&=(h\varphi(x)(k)\varphi(xy)(\ell),xyz).\end{aligned}$$ Las fórmulas del neutro y del inverso se verifican directamente.
>>
>>Si $\varphi$ es trivial, entonces $\varphi(x)(k)=k$ para todo $x\in G$ y $k\in H$. En consecuencia, la operación queda dada por $$(h,x)(k,y)=(hk,xy),$$ que es precisamente la operación del producto directo $H\times G$. Por lo tanto, la aplicación identidad $(h,x)\mapsto(h,x)$ define un isomorfismo $$H\rtimes_\varphi G\cong H\times G.$$
>>
>>Consideremos la proyección $$\pi:H\rtimes_\varphi G\longrightarrow G,\qquad \pi(h,x)=x.$$ Esta es un homomorfismo, pues $$\pi((h,x)(k,y))=\pi(h\varphi(x)(k),xy)=xy=\pi(h,x)\pi(k,y),$$ y su núcleo es $$\ker(\pi)=H\times\{e_G\}.$$ Por consiguiente, $H\times\{e_G\}$ es normal en $H\rtimes_\varphi G$. Además, la aplicación $h\mapsto(h,e_G)$ es un isomorfismo de $H$ sobre este subgrupo.
>>
>>Por otra parte, la aplicación $x\mapsto(e_H,x)$ identifica $G$ con el subgrupo $\{e_H\}\times G$. Sin embargo, para $h\in H$ y $x\in G$ se tiene $$\begin{aligned}(h,e_G)(e_H,x)(h,e_G)^{-1}&=(h,x)(h^{-1},e_G)\\&=(h\varphi(x)(h^{-1}),x).\end{aligned}$$ Si la acción es no trivial, existen $x\in G$ y $h\in H$ tales que $\varphi(x)(h)\neq h$, y entonces $h\varphi(x)(h^{-1})\neq e_H$. En ese caso, el conjugado anterior no pertenece a $\{e_H\}\times G$, por lo que este subgrupo no es normal. Así, $\{e_H\}\times G$ no tiene por qué ser normal en el producto semidirecto.

>[!Example] Grupos dihedrales
>Sea $n\geq 3$ y definamos $$\varphi:\mathbb Z_2\longrightarrow\operatorname{Aut}(\mathbb Z_n),\qquad\varphi(\overline0)=\operatorname{id}_{\mathbb Z_n},\qquad\varphi(\overline1)(\overline x)=-\overline x.$$
>El producto semidirecto $\mathbb Z_n\rtimes_\varphi\mathbb Z_2$ tiene como conjunto subyacente $\mathbb Z_n\times\mathbb Z_2$. Por lo tanto, sus elementos son los pares $$(\overline a,\overline i),\qquad \overline a\in\mathbb Z_n,\quad \overline i\in\mathbb Z_2,$$ es decir, $$\mathbb Z_n\rtimes_\varphi\mathbb Z_2=\{(\overline0,\overline0),\ldots,(\overline{n-1},\overline0),(\overline0,\overline1),\ldots,(\overline{n-1},\overline1)\}.$$ La primera coordenada se calcula módulo $n$ y la segunda, módulo $2$.
>La acción determina la multiplicación: $$(\overline a,\overline i)(\overline b,\overline j)=\bigl(\overline a+\varphi(\overline i)(\overline b),\overline i+\overline j\bigr)=\begin{cases}(\overline{a+b},\overline j),&\text{si }\overline i=\overline0,\\(\overline{a-b},\overline{1+j}),&\text{si }\overline i=\overline1.\end{cases}$$ En particular, el primer tipo de elemento suma $\overline b$ en la primera coordenada, mientras que el segundo lo resta.
>Este grupo es el grupo de simetrías de un $n$-gono regular. Si $$r=(\overline1,\overline0)\qquad\text{y}\qquad s=(\overline0,\overline1),$$ entonces $$(\overline a,\overline0)=r^a\qquad\text{y}\qquad(\overline a,\overline1)=r^as.$$ Por lo tanto, sus elementos también pueden escribirse como $$\{e,r,r^2,\ldots,r^{n-1},s,rs,r^2s,\ldots,r^{n-1}s\}.$$ Las relaciones fundamentales son $$r^n=s^2=e,\qquad srs=r^{-1}.$$
>>[!Proof]- Verificación de las relaciones
>>El neutro es $e=(\overline0,\overline0)$.
>>1. Las primeras potencias de $r$ son $$r^2=(\overline1,\overline0)(\overline1,\overline0)=(\overline2,\overline0),\qquad r^3=(\overline3,\overline0).$$ En general, como $\varphi(\overline0)$ es la identidad, una inducción da $$r^m=(\overline m,\overline0).$$ Al tomar $m=n$, la primera coordenada se anula módulo $n$, y por ello $$r^n=(\overline n,\overline0)=(\overline0,\overline0)=e.$$
>>2. Para $s$, como la segunda coordenada se suma módulo $2$ y $\varphi(\overline1)(\overline0)=\overline0$, $$s^2=(\overline0,\overline1)(\overline0,\overline1)=\bigl(\overline0+\varphi(\overline1)(\overline0),\overline{1+1}\bigr)=(\overline0,\overline0)=e.$$
>>3. Para calcular $srs$, primero multiplicamos $s$ por $r$. La acción de $\overline1$ cambia el signo de la primera coordenada, de modo que $$sr=(\overline0,\overline1)(\overline1,\overline0)=\bigl(\overline0+\varphi(\overline1)(\overline1),\overline1\bigr)=(-\overline1,\overline1).$$ Luego, $$srs=(-\overline1,\overline1)(\overline0,\overline1)=\bigl(-\overline1+\varphi(\overline1)(\overline0),\overline0\bigr)=(-\overline1,\overline0).$$ Finalmente, $$r(-\overline1,\overline0)=(\overline0,\overline0)=e,$$ así que $r^{-1}=(-\overline1,\overline0)$ y, por tanto, $$srs=r^{-1}.$$
>El grupo tiene $n\cdot2=2n$ elementos. Según la convención del texto, puede denotarse $D_n$ o $D_{2n}$; siempre conviene indicar que se trata del grupo de orden $2n$.

>[!Example] Grupo de matrices triangulares
>Sea $$B=\left\{\begin{pmatrix}a&b\\0&1\end{pmatrix}:a\in\mathbb R^\times,\ b\in\mathbb R\right\}\leq GL_2(\mathbb R).$$
>Definamos $$\varphi:\mathbb R^\times\longrightarrow\operatorname{Aut}(\mathbb R,+),\qquad\varphi(a)(b)=ab.$$
>La aplicación $$\Psi:(\mathbb R,+)\rtimes_\varphi\mathbb R^\times\longrightarrow B,\qquad\Psi(b,a)=\begin{pmatrix}a&b\\0&1\end{pmatrix}$$ es un isomorfismo, pues $$\Psi(b,a).\Psi(d,c)=\begin{pmatrix}a&b\\0&1\end{pmatrix}\begin{pmatrix}c&d\\0&1\end{pmatrix}=\begin{pmatrix}ac&b+ad\\0&1\end{pmatrix}=\Psi(b+ad,ac)=\Psi((b,a)(d,c))$$ notar que usamos el producto directo en donde decimos: $$(b,a)(d,c)=(b+ad,ac).$$
>(Ver que es monomorfismo y epimorfismo es trivial) 
>Por lo tanto $\Psi$ es un isomorfismo y $$B\cong(\mathbb R,+)\rtimes_\varphi\mathbb R^\times.$$
>
>Todo esto nos permite entender el grupo $B$ en términos de dos grupos mucho más simples.
>En concreto,
>$$\begin{pmatrix}a&b\\0&1\end{pmatrix}\longleftrightarrow(b,a).$$
>El $b$ representa una **traslación** y el $a$ una **dilatación**. De hecho, esta matriz puede pensarse como la transformación afín
>$$x\longmapsto ax+b.$$
>La composición de las transformaciones
>$$x\longmapsto cx+d,\qquad x\longmapsto ax+b$$
>da
>$$x\longmapsto a(cx+d)+b=acx+(ad+b),$$
>de donde sale exactamente
>$$(b,a)(d,c)=(b+ad,ac).$$
>Entonces el isomorfismo nos revela qué está pasando dentro del grupo $B$ .
>Por ejemplo, inmediatamente vemos el subgrupo
>$$N=\left\{\begin{pmatrix}1&b\\0&1\end{pmatrix}:b\in\mathbb R\right\}\cong(\mathbb R,+).$$
>Los elementos de $N$ corresponden a las traslaciones
>$$x\longmapsto x+b.$$
>Además, $N$ es un subgrupo normal de $B$.
>Por otro lado, tenemos
>$$H=\left\{\begin{pmatrix}a&0\\0&1\end{pmatrix}:a\in\mathbb R^\times\right\}\cong\mathbb R^\times,$$
>cuyos elementos corresponden a las dilataciones
>$$x\longmapsto ax.$$
>Así, conceptualmente,
>$$\boxed{B=\text{traslaciones}\rtimes\text{dilataciones}.}$$

>[!Remark] Reconocimiento de un producto semidirecto interno — enunciado; prueba en Teórico 8
>Si un grupo $K$ contiene subgrupos $H,N$ tales que $H\trianglelefteq K$, $H\cap N=\{e\}$ y $HN=K$, entonces $$K\cong H\rtimes_\varphi N,$$ donde $\varphi(n)(h)=nhn^{-1}$. Esta es la forma práctica de detectar productos semidirectos dentro de un grupo conocido. La prueba, la unicidad de $\varphi$ respecto de $\Psi(q,x)=qx$, y los ejemplos $pq$, $\mathbb Z_{4}$ no partido y $E(n)$ están en [[Teorico 8]]. Acá el semidirecto es sólo la construcción externa más $D_{n}$ y $B$; allá es el teorema interno.

 


## Guía para resolver ejercicios

1. Para demostrar que un cociente $G/H$ es un grupo, primero verificá $H\trianglelefteq G$; sin normalidad, la multiplicación de clases puede no estar bien definida.
2. Para calcular un cociente, buscá un homomorfismo sobreyectivo cuyo núcleo sea exactamente $H$ y aplicá el primer teorema de isomorfismo.
3. Para distinguir una suma directa de un producto directo infinito, compará el soporte de sus elementos, la cardinalidad o alguna propiedad algebraica preservada por isomorfismos.
4. Para reconocer un producto semidirecto, identificá un subgrupo normal $H$, un complemento $N$, la intersección $H\cap N$ y la acción por conjugación de $N$ sobre $H$. El criterio completo y sus ejemplos difíciles están en [[Teorico 8]].
5. Para probar que un cociente es abeliano, verificá que el subgrupo conmutador esté contenido en el subgrupo por el cual se toma el cociente.
