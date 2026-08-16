---
dateCreated: 2024-09-19,23:07
tags:
  - AlgebraicStructures
  - Groups
---
> [!definition] Semigrupo
>Un conjunto no vacío de $G$ se dice semigrupo si tiene una opreacion no binaria
>$$ \begin{align*} *: G\times G & \rightarrow G \\
>(a,b) & \rightarrow a.b \end{align*} $$
>$*$ Es asociativa

>[!Remark] Monoide
>Un semigrupo se dice monoide si existe $e\in G$ llamado neutro que cumple $$e.a=a.e=a\quad\forall a\in G$$

>[!Remark] Grupo
>Un grupo es un monoide $G$ tal que $$\forall a\in G\quad\exists b\in G \ / \ a.b=b.a=e $$

>[!Definition] Grupo Conmutativo
> Sea $G$ un (semi) grupo, se dice conmutativo si $a.b=b.a \quad\forall a,b\in G$

>[!Proposition] Propiedades de grupos
>Sea $G$ grupo. Entonces valen las siguientes propiedades:
>1. El neutro es unico
>2. El inverso de cada elemento $a\in G$ es unico
>>[!Proof]
>>a

>[!Proposition]
>Sea $G$ semigrupo entonces $G$ es grupo sii 
>1. $\exists e\in G$ tal que $e.a=a\quad \forall a\in G$
>2. $\forall a\in G\quad\exists a^{-1}\in G$ tal que $a^{-1}a=e$

## Ejemplos de grupos

>[!Remark] Grupo Trivial
>$\{ x \}$ es un grupo con $x.x=x$ (su neutro es $x$). Se lo denota $\{ e \}$ y se llama grupo trivial

>[!Example] El grupo aditivo $\mathbb Z_n$
>Sea $n\geq 1$. En el conjunto
>$$\mathbb Z_n=\{\overline 0,\overline 1,\ldots,\overline{n-1}\}$$
>consideramos la suma módulo $n$. Entonces $(\mathbb Z_n,+)$ es un grupo abeliano y es cíclico. En efecto:
>>[!Proof]-
>>- La suma está bien definida y es **cerrada**;
>>- Es **asociativa** porque la suma en $\mathbb Z$ lo es;
>>- El **neutro** es $\overline 0$;
>>- El **inverso** de $\overline a$ es $\overline{-a}$;
>>- Además, $\overline a+\overline b=\overline b+\overline a$ osea es **conmutativa**
>>- El elemento $\overline 1$ genera todo el grupo, de modo que $\mathbb Z_n$ es **cíclico**.

>[!Remark] El superíndice $\times$
>El símbolo $\times$ escrito como superíndice no representa una potencia ni significa, en general, que se quite el cero. Si $R$ es un anillo con identidad, $$R^{\times}=\{r\in R:r\text{ tiene inverso multiplicativo en }R\}.$$ Este conjunto se llama **grupo de unidades** de $R$. 
>Si $R$ es un cuerpo, entonces todos sus elementos no nulos son invertibles y, solamente en ese caso, $R^{\times}=R\setminus\{0\}$.

>[!Example] El grupo multiplicativo $\mathbb Z_b^{\times}$
>Sea $b\geq 2$. Definimos el conjunto de unidades módulo $b$ por
>$$\mathbb Z_b^{\times}=\{\overline a\in\mathbb Z_b:\overline a\text{ tiene inverso multiplicativo}\}=\{\overline a\in\mathbb Z_b:(a,b)=1\}.$$
>En particular, $\mathbb Z_b^{\times}$ no es necesariamente $\mathbb Z_b\setminus\{\overline 0\}$. Ambos conjuntos coinciden si y solo si $b$ es primo.
>Con el producto (usual) módulo $b$, $\mathbb Z_b^{\times}$ es un grupo abeliano. 
>>[!Proof]-
>>- Si $(a,b)=(c,b)=1$, entonces $(ac,b)=1$, por lo que el producto es cerrado. 
>>- La **asociatividad** y la **conmutatividad** se heredan del producto de enteros, 
>>- El **neutro** es $\overline 1$. 
>>- **Existencia de inverso** Por Bézout, si $(a,b)=1$ existen $u,v\in\mathbb Z$ tales que $$au+bv=1.$$y reduciendo módulo $b$ obtenemos $\overline a\,\overline u=\overline 1$, así que $\overline u$ es el inverso de $\overline a$.
>>- Por ejemplo $$\mathbb{Z}_{10}^{\times}=\{ \overline{1} ,\overline{3} ,\overline{7} ,\overline{9}  \} $$ por que por ejemplo $\overline{3}.\overline{7}=\overline{21}=\overline{1}$, osea $\overline{7}$ es inverso multiplicativo de $\overline{3}$ etc. 

>[!Example] El grupo lineal general $GL(V)$
>Sea $V$ un espacio vectorial sobre un cuerpo $K$. Se define
>$$GL(V)=\{T:V\to V:T\text{ es lineal y biyectiva}\}.$$
>Con la composición de aplicaciones, $GL(V)$ es un grupo
>>[!Proof]-
>>- **Cerrado por la operacion** La composición de transformaciones lineales biyectivas vuelve a ser lineal y biyectiva; 
>>- La composición es **asociativa**;
>>- El **neutro** es $\operatorname{id}_V$ 
>>- **Existe elemento inverso:** Para cada $T\in GL(V)$, la aplicación $T^{-1}$ es también lineal y biyectiva. 
>>- En general, $GL(V)$ **no es abeliano**.

>[!exercise] 
>$GL(V)\simeq GL(n,K)$ 
>>[!Proof]-
>>1. Si $\dim_K(V)=n$ y fijamos una base $\mathcal B$ de $V$, la aplicación de coordenadas $$U:V\longrightarrow K^n,\qquad v\longmapsto [v]_{\mathcal B}$$es un isomorfismo de espacios vectoriales. 
>>2. Este induce la aplicación $$\Phi_U:GL(V)\longrightarrow GL(K^n),\qquad\Phi_U(T)=U\circ T\circ U^{-1}.$$
>>3. Veamos que $\Phi_U$ es un isomorfismo de grupos. Si $T,S\in GL(V)$, entonces $$\begin{aligned}\Phi_U(T\circ S)&=U\circ T\circ S\circ U^{-1}\\&=U\circ T\circ U^{-1}\circ U\circ S\circ U^{-1}\\&=\Phi_U(T)\circ\Phi_U(S),\end{aligned}$$por lo que $\Phi_U$ es un homomorfismo. Además, es biyectiva, pues su inversa está dada por $$\Phi_U^{-1}:GL(K^n)\longrightarrow GL(V),\qquad \Phi_U^{-1}(A)=U^{-1}\circ A\circ U.$$
>>4. Por lo tanto, $$GL(V)\cong GL(K^n).$$
>>5. Finalmente, al representar cada automorfismo de $K^n$ mediante su matriz en la base canónica, obtenemos $$GL(V)\cong GL_n(K)=\{A\in M_n(K):\det(A)\neq 0\},$$donde la composición de aplicaciones corresponde al producto de matrices. En particular, $\Phi_U(T)$ es la representación matricial de $T$ en la base $\mathcal B$.

>[!Remark]
>Tambien con la misma idea se puede ver que $$V\cong W \iff GL(V)\cong GL(W)$$

>[!Example]- El grupo de trenzas $B_n$
>El grupo de trenzas de $n$ hebras, denotado $B_n$, puede describirse mediante los generadores $\sigma_1,\ldots,\sigma_{n-1}$, donde $\sigma_i$ cruza la hebra $i$ con la hebra $i+1$, y las relaciones
>$$\sigma_i\sigma_j=\sigma_j\sigma_i\quad\text{si }|i-j|\geq 2,$$
>$$\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}.$$
>El producto consiste en concatenar trenzas, el neutro es la trenza trivial y el inverso se obtiene invirtiendo todos los cruces. No demostraremos aquí que estas operaciones dan un grupo.

>[!Example] El grupo diedral $D_n$
>El grupo diedral $D_n$ es el grupo de simetrías de un polígono regular de $n$ lados. Si $r$ es la rotación de ángulo $2\pi/n$ y $s$ una reflexión, entonces
>$$D_n=\{1,r,r^2,\ldots,r^{n-1},s,sr,\ldots,sr^{n-1}\}$$
>y se cumplen las relaciones $$r^n=s^2=1,\qquad srs=r^{-1}.$$
>>[!Proof]-
>>- La composición de dos simetrías vuelve a ser una simetría y es **asociativa**. 
>>- La **identidad** es la simetría trivial. 
>>- Además, $$\left(r^k\right)^{-1}=r^{n-k},\qquad\left(sr^k\right)^{-1}=sr^k,$$por lo que todo elemento tiene inverso. 
>>
>>Así, $D_n$ es un grupo de orden $2n$. Para $n\geq 3$ no es abeliano.

>[!Example] Los grupos simétricos $S_X$ y $S_n$
>Dado un conjunto $X$, el grupo simétrico de $X$ es $$S_X=\{f:X\to X:f\text{ es biyectiva}\},$$
>con la composición es un grupo.
>
>Ademas si $X=\{1,\ldots,n\}$, escribimos $S_n$ en lugar de $S_X$. Sus elementos son las permutaciones de $n$ símbolos y $|S_n|=n!$. Para $n\geq 3$, $S_n$ no es abeliano.
>>[!Proof]-
>>- Obviamente es **cerrado** componer dos funciones biyectivas
>>- La composición de biyecciones es una biyección y es **asociativa**;
>>- El **neutro** es $\operatorname{id}_X$
>>- El **inverso** de $f$ es su función inversa $f^{-1}$. 
>>
>>Por lo tanto, $S_X$ es un grupo.

>[!Example] El grupo de cuaterniones $Q_8$
>En los cuaterniones de Hamilton consideramos
>$$Q_8=\{1,-1,i,-i,j,-j,k,-k\},$$
>donde $$i^2=j^2=k^2=ijk=-1.$$
>>[!Proof]-
>>- Este conjunto es cerrado bajo el producto de cuaterniones. 
>>- La **asociatividad** se hereda de dicho producto
>>- El **neutro** es $1$ 
>>- Los **inversos** son $$1^{-1}=1,\quad(-1)^{-1}=-1,\quad i^{-1}=-i,\quad j^{-1}=-j,\quad k^{-1}=-k$$junto con las igualdades análogas para $-i,-j,-k$.
>>
>>Por consiguiente, $Q_8$ es un grupo no abeliano de orden $8$.

>[!Example] El grupo de difeomorfismos
>Sea $M$ una variedad diferenciable. Definimos $$\operatorname{Diff}(M)=\{f:M\to M:f\text{ es un difeomorfismo}\}.$$con la composición, $\operatorname{Diff}(M)$ es un grupo
>>[!Proof]-
>>- La composición de difeomorfismos es un difeomorfismo
>>- La composición es **asociativa**
>>- El **neutro** es $\operatorname{id}_M$ 
>>- Y por definición, la **inversa** $f^{-1}$ de un difeomorfismo también es diferenciable. 
>>
>>En general, $\operatorname{Diff}(M)$ no es abeliano.

 
