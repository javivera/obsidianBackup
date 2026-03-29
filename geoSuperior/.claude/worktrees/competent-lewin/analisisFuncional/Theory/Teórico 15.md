---
dateCreated: 2024-10-19,11:18
---
>[!Proposition] Inversa de adjunta
> Sea $\mathcal{H}$ Hilbert $T\in B(H)$ inversible entonces $T^{*}$ inversible y $(T^{*})^{-1}=(T^{-1})^{*}$
>>[!Proof]-
>>1. Tomamos adjunta en $TT^{-1}=T^{-1}T=Id$
>>2. $(TT^{-1})^{*}=(T^{-1}T)^{*}=Id^{*}$ entonces $(T^{-1})^{*}T^{*}=T^{*}(T^{-1})^{*}=Id$ por [[Teórico 14#^0f7d67]]
>>3. Entonces $T^{*}$ invertible y $(T^{*})^{-1}=(T^{-1})^{*}$  

^b9f186

^1adfa9
## Operadores normales autoadjuntos y unitarios

>[!Definition] Operador Normal
>$\mathcal{H}$ Hilbert, $T\in B(\mathcal{H})$ es normal si $TT^{*}=T^{*}T$
>

^39bc8d

>[!Example] Ejemplos de operadores normales
>1. Si $f\in C[0,1]$ con $T_{f}\in B(\ell^{2}[0,1])$ dada por $T_{f}(g)=f.g$ Ver que $T_{f}$ es normal 
>2. El operador $S\in B(\ell^{2})$ dado por $S(y_{1},y_{2},\ldots)=(0,y_{1},y_{2},\ldots)$ no es normal
>3. Si $T$ normal entonces $T-\lambda Id$ es normal

^81235c

>[!Lemma] Propiedades operador normal MEMO
>$T\in B(\mathcal{H})$ normal $\alpha >0$ entonces
>- (a) $\lVert Tx \rVert=\lVert T^{*}x \rVert\quad\forall x\in \mathcal{H}$ 
>- (b) $\lVert Tx \rVert\geq\alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$ entonces $\ker T^{*}=\{ 0 \}$ 
>>[!Proof]-
>>- (a) 
>>	1. Usando $TT^{*}=T^{*}T$ $$\lVert Tx \rVert ^{2} -\lVert T^{*} x \rVert ^{2} =(Tx,Tx)-(T^{*} x,T^{*}x )=(T^{*} Tx,x)-(TT^{*} x,x)=0$$ 
>>
>>- (b) 
>>	1. Sea $y\in \ker T^{*}$  entonces por (a) $0=\lVert T^{*}y \rVert=\lVert Ty \rVert\geq \alpha \lVert y \rVert$ entonces $y=0$

^6cb446

>[!Corollary] Desigualdad implica inversible con operadores normales MEMO
>$T\in B(\mathcal{H})$ es normal entonces $T$ inversible $\iff \exists \alpha >0$ tal que $\lVert Tx \rVert\geq\alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$
>>[!Proof]-
>>$(\Leftarrow)$ [[Teórico 15#^6cb446]] implica $\ker T^{*}=\{ 0 \}$ luego por [[Teórico 14#^5be0d2]]
>>$(\Rightarrow)$  Sale directo de [[Teórico 14#^5be0d2]]

^acb07f

>[!Definition] Operador Autoadjunto
>$\mathcal{H}$ Hilbert, $T\in B(\mathcal{H})$ es autoadjunta si $T=T^{*}$
>

^ac0927

>[!Example]
>1. $T_{f}$ es autoadjunta $\iff f$ es a valores reales
>2. El operador identidad es autoadjunto

^94253a

>[!Lemma] Las autoadjuntas forman Banach real MEMO
>$\mathcal{H}$ Hilbert $S=\{ T\in B(\mathcal{H}):T\text{ autoadjunta} \}$ entonces 
>- (a) $\alpha ,\beta\in \mathbb{R}$ y $T_{1},T_{2}\in S$ entonces $\alpha T_{1}+\beta T_{2}\in S$. 
>- (b) $S$ cerrado en $B(\mathcal{H})$
>- (c) $T\in S$ inversible entonces $T^{-1}\in S$ 
>Entonces (a) nos dice que $S$ es espacio vectorial y (b) que es completo (por que $B(\mathcal{H})$ es completo) entonces $S$ es Banach Real ósea que lo podes mirar como ev con cuerpo reales
>>[!Proof]-
>>- (a) $(\alpha T_{1}+\beta T_{2})^{*}=\overline{\alpha } T_{1}^{*}+\overline{\beta} T_{2}^{*}=\alpha T_{1}+\beta T_{2}$ 
>>- (b) 
>>	1. Sea $T_{n}\subseteq S$ tal que $T_{n}\rightarrow T\in B(\mathcal{H})$ entonces $\{ T^{*}_{n} \}$ converge a $T^{*}$ por [[Teórico 14#^0589c9]] parte (c) 
>>	2. Entonces $\{ T_{n} \}$ converge a $T^{*}$ por que $T_{n}=T_{n}^{*}\quad\forall n\in \mathbb{N}$ ($T$ autoadjunta) 
>>	3. Finalmente $T=T^{*}$ entonces $T\in S$. Mostrando que $S$ es cerrado
>>- (c) 
>>	1. $T^{-1}=(T^{*})^{-1}=(T^{-1})^{*}$

^2e9773

>[!Lemma] $TT^{*}$ es autoadjunta
>Sea $\mathcal{H}$ un Hilbert complejo y $T\in B(\mathcal{H})$ entonces
>- (a) $TT^*$ y $T^{*}T$ son autoadjuntos
>- (b) $T=R+iS$ con $R,S$ autoadjuntos
>>[!Proof]-
>>(a) 
>>1. $(T^{*}T)^{*}=T^{*}T^{**}=T^{*}T$ por [[Teórico 14#^0f7d67]]
>>2. Entonces $T^{*}T$ es auto adjunta. Similarmente $TT^{*}$ es autoadjunta
>>
>>(b) 
>>1. Sea $R=\frac{1}{2}(T+T^{*})$ y $S=\frac{1}{2i}(T-T^{*})$. Entonces $T=R+iS$ 
>>2. Ademas $R^{*}=\frac{1}{2}(T+T^{*})^{*}=\frac{1}{2}(T^{*}+T)=R$ entonces $R$ autoadjunta
>>3. $S^{*}=\frac{-1}{2i}(T-T^{*})^{*}=-\frac{1}{2i}(T^{*}-T^{**})=\frac{1}{2i}(T-T^{*})=S$ entonces $S$ es autoadjunta

^847baa

>[!Definition] Operador Unitario
>Si $\mathcal{H}$ es un Hilbert complejo y $T\in B(\mathcal{H})$ entonces $T$ es unitaria si $TT^{*}=T^{*}T=I$  

^a7beba

>[!Example] $T_{f}$ es unitarios si $|f(t)|=1$ 
>$T_{f}\in B(L^{2}[0,1])$ dada por $T_{f}g=fg$ entonces:
>$$T_{f}\text{ es unitario}\iff \lvert f(t) \rvert =1\quad\forall t\in (0,1)$$
>>[!Proof]-
>>- $(\Rightarrow)$ 
>>	1. Sabemos $T_{f}^{*}=T_{\overline{f}}$ entonces evaluando $Id=T_{f}T_{\overline{f}}=T_{\overline{f}}T_{f}$ en $f$ tenemos que $f=f.f=\overline{f}f=|f|^{2}$ osea $|f(x)|^{2}=f(x)$ entonces $|f(x)|=1\quad\forall x\in (0,1)$  
>>- $(\Leftarrow)$
>>	1. $T_{f}(g)=f.g$ y $T_{\overline{f}}(g)=|f|g$ entonces $T_{f}(T_{\overline{f}}(g))=T_{f}(\overline{f}g)= |f|^{2}.g=g$  
>>	2. Osea que $T_{f}T_{\overline{f}}=Id$ y analogamente vemos $T_{\overline{f}}T_{f}=Id$  

^ec2f0d

>[!Lemma] $(Sz,z)=(Tz,z)$ entonces $S=T$  
>$X$ evpi. Si $S,T\in B(X)$ son tal que $(Sz,z)=(Tz,z)\quad\forall z\in X$ entonces $S=T$  
>>[!Proof]-
>>1. Recordamos $$4(Tx,y)=(T(x+y),x+y)-(T(x-y),x-y) + i(T(x+iy),x+iy)-i(T(x-iy),x-iy)=4(Sx,y)$$ La 1era igualdad vale por Lema 3.14 Youngson con $u=Tx$ $v=Ty$ la ultima vale por hipotesis
>>

^654c1f

>[!Theorem]
>Sea $\mathcal{H}$ un Hilbert complejo y $T,U\in B(\mathcal{H})$ 
>- (a) $T^{*}T=I\iff T$ es isometria
>- (b) $U^{*}U=UU^{*}=I\iff U$ es isometria sobreyectiva
>>[!Proof]-
>>(a) 
>>1. Supongamos $T^{*}T=I$ entonces $\lVert Tx \rVert^{2}=(Tx,Tx)=(T^{*}Tx,x)=(x,x)=\lVert x \rVert^{2}$
>>2. Reciprocamente si $T$ es iso entonces $(T^{*}Tx,x)=(Tx,Tx)=\lVert Tx \rVert^{2}=\lVert x \rVert^{2}=(x,x)$ por [[Teórico 15#^654c1f]] listo
>>
>>(b)
>>1. Supognamos $U$ unitario entonces $U$ es isometria por (a) 
>>2. Si $y\in \mathcal{H}$ entonces $y=U(U^{*}y)$ osea $y\in Im(U)$ entones $U$ sobre
>>3. Reciprocamente $U$ es isometria sobreyectiva entonces $U^{*}U=I$ por parte (a)
>>4. Si $y\in \mathcal{H}$ entonces como $U$ es sobre existe $x \in \mathcal{H}$ tal que $Ux=y$
>>5. $$UU^*y=UU^*(Ux)=U(U^*U)x=UIx=Ux=y$$
>>6. Luego $UU^*=I$ y entonces $U$ unitaria  

^317da9

>[!Lemma] ver bien MEMO
>$\mathcal{H}$ Hilbert y $\mathcal{U}=\{ U\in B(\mathcal{H}):U\text{ unitaria} \}$
>- (a) $U\in \mathcal{U}$ entonces $U^{*}\in \mathcal{U}$ y $\lVert U \rVert=\lVert U^{*} \rVert=1$
>- (b) $U_{1},U_{2}\in \mathcal{U}$ entonces $U_{1}U_{2},U^{-1}\in \mathcal{U}$
>- (c) $\mathcal{U}$ es cerrado en $B(H)$  
>>[!Proof]-
>>- (a)
>>	1. $U^{*}U^{**}=U^{*}U=I$ y analogo la otra. Osea $U^{*}\in \mathcal{U}$.
>>	2. Por teo anterior $U$ y $U^{*}$ son isometrias entonces $\lVert U \rVert=\lVert U^{*} \rVert=1$ ($\lVert Ux \rVert=\lVert x \rVert$ luego uso supremo, vale para toda isometria)
>>- (b) 
>>	1. $(U_{1}U_{2})(U_{1}U_{2})^{*}=(U_{1}U_{2})(U_{2}^{*}U_{1}^{*})=Id=(U_{2}^{*}U_{1}^{*})(U_{1}U_{2})=(U_{1}U_{2})^{*}(U_{1}U_{2})$ osea $U_{1}U_{2}$ es unitaria  
>>	2. Ademas como $U$ es unitaria tenemos que $U^{*}=U^{-1}$ ergo $U^{-1}\in \mathcal{U}$ por (a) 
>>- (c)
>>	1. Sea $\{ U_{n} \}\subseteq \mathcal{U}$ tal que $U_{n}\rightarrow U$ en $B(H)$ entonces $U_{n}^{*}\rightarrow U^{*}$ (por continuidad de tomar adjunta) por lo tanto $U_{n}U_{n}^{*}\rightarrow UU^{*}$ (Notar que esto vale porque $A_{n}\rightarrow B \quad\land \quad B_{n}\rightarrow B$ entonces $A_{n}B_{n}\rightarrow AB$) 
>>	2. Como $U_{n}U_{n}^{*}=Id$ entonces $UU^{*}=Id$
>>	3. Dando vuelta los factores llegamos a $U^{*}U=Id$. Mostrando que $U\in \mathcal{U}$  
## El espectro de un operador

>[!Definition] Espectro
>$\mathcal{H}$ Hilbert $T\in B(H)$ definimos el espectro de $T$ como 
>$$\sigma(T)=\{ \lambda\in \mathbb{C}:T-\lambda Id \text{ es no inversible} \}$$
>Notar que a priori no sabemos si $\sigma(T)\neq\emptyset$ pues $T$ puede no tener autovalores. En el caso que $T$ es una matriz n x n el espectro es exactamente los auto valores 

^14c246

>[!Remark] Espectro de $\mu I$
>$\sigma(\mu I)=\{ \lambda\in \mathbb{C}:\mu I-\lambda I \text{ es no inversible}\}=\{ \mu  \}$ 

^13fde4

>[!Proposition] Autovalores estan en el espectro
>$T\in B(H)$ si $\lambda$ es autovalor de $T$ entonces $\lambda\in \sigma(T)$
>>[!Proof]-
>>1. Si $Tx=\lambda x$ con $x\neq0$ entonces $x\in \ker (T-\lambda Id)$ osea que $T-\lambda Id$ no es inversible 

^900583

>[!Remark] Operador sin autovalores
>El unilateral shift $S\in B(\ell^{2})$ no tiene autovalores
>>[!Proof]-
>>1. Recordar $S(y_{1},y_{2},\ldots)=(0,y_{1},\ldots)$. 
>>2. Supongo $\lambda$ es aval de avec $y =(y_{1},y_{2},\ldots)\neq0$ entonces $(0,y_{1},\ldots)=S(y_{1},y_{2},\ldots)=\lambda(y_{1},y_{2},\ldots)=(\lambda y_{1},\lambda y_{2},\ldots)$ 
>>3. Por lo tato $\lambda=0$ por lo cual $y_{1}=y_{2}=\ldots=0$ o $\lambda \neq0$ entonces $y_{1}=0$ entonces $y_{2}=0$ etc.
>>4. Absurdo por que $\lambda$ aval y entonces su autovector tiene que ser distinto de $0$
>>5. Notar $0\in \sigma(S)$ pues $S$ es no inversible pues $S$ no es sobre. Entonces nisiquiera se puede definir bien la inversa
>>6. Notar que $\ker(S-\lambda I)=\{ 0 \}\quad\forall \lambda\in \mathbb{F}$ pero esto en dim infinita no necesariamente implica inversible 

^bdf665

>[!Theorem] Espectro es compacto y sus elementos menores (modulo) que norma del operador MEMO
>$\mathcal{H}$ Hilbert y $T\in B(\mathcal{H})$ (Creo aca se asume $\lambda\neq0$) 
>- (a) $\lvert \lambda \rvert > \lVert T \rVert$ entonces $\lambda\not\in \sigma(T)$
>- (b) $\sigma(T)$ es cerrado osea $\sigma(T)$ compacto (en $\mathbb{C}$  cerrado y acotado es compacto) 
>>[!Proof]-
>>- (a) 
>>	1. Si $\lvert \lambda \rvert>\lVert T \rVert$ entonces $\lVert \lambda^{-1}T \rVert <1$ 
>>	2. Luego $I-\lambda^{-1}T$ es inversible por [[Teórico 6#^aa4e9d]]
>>	3. Por lo tanto $T - \lambda I$ es inversible tambien (componiendo con la funcion multiplicar por $-\lambda$ que es inversible) , mostrando que $\lambda\not\in\sigma(T)$    
>>- (b)
>>	1. Sea $F : \mathbb{C}\rightarrow B(H)$ dada por $F(\lambda)=T - \lambda I$ entonces $F$ es continua pues $$\lVert F(u)-F(\lambda) \rVert =\lVert T- uI -T + \lambda I \rVert=\lvert \lambda-u \rvert \lVert I \rVert =\lvert \lambda - u \rvert  $$
>>	2. Luego como $G=\{ T\in B(\mathcal{H}): T\text{ no es inversible} \}$ es cerrado por que $G^{c}$ es abierto por [[Teórico 6#^efd74a]]
>>	3. Y como $\sigma(T)=F^{-1}(G)$ entonces $\sigma(T)$ es cerrado 

^4949f7

>[!Proposition] Espectro de $T^{*}$ 
>$\mathcal{H}$ Hilbert, $T\in B(H)$ entonces 
>$$\sigma(T^{*} )=\{ \overline{\lambda}:\lambda\in \sigma(T)  \}$$
>>[!Proof]-
>>1. Si $\lambda\not\in\sigma(T)$ entonces $T-\lambda I$ es inversible  
>>2. Luego $(T-\lambda I)^{*}=T^{*}-\overline{\lambda} I$ es inversible Por [[Teórico 15#^b9f186]] entonces $\overline{\lambda}\not\in\sigma(T^{*})$  
>>3. Permutando los roles de $T$ y $T^{*}$ deducimos que $\overline{\lambda}\not\in\sigma(T^{*})$ entonces $\lambda \not\in\sigma(T)$ 

^6c5fc5

>[!Example] Espectro del unilateral shift
>Sea $S$ el unilateral shift entonces 
>- (a) si $\lambda\in \mathbb{C}$ con $\lvert \lambda \rvert<1$ entonces $\lambda$ es aval de $S^{*}$
>- (b) $\sigma(S)=\{ \lambda\in \mathbb{C}:\lvert \lambda \rvert\leq 1 \}$
>>[!Proof]-
>>- (a) 
>>	1. Sea $\lambda\in \mathbb{C}$ con $\lvert \lambda \rvert<1$ queremos $\{ x_{n} \}\in \ell^{2}$ tal que $S^{*}(x_{1},x_{2},\ldots)=(\lambda x_{1},\lambda x_{2},\ldots)$
>>	2. Sabemos que $S^{*}(x_{1},x_{2},\ldots)=(x_{2},x_{3},\ldots)$  
>>	3. Podemos definir $x_{n}=(1,\lambda,\lambda^{2},\ldots)$ y se cumple la igualdad.
>>	4. Como $\lvert \lambda \rvert<1$ entonces $\{ x_{n} \}\in \ell^{2}$ pues $\sum^{\infty}_{n=1}\lvert x_{n} \rvert^{2}=\sum^{\infty}_{n=1}\lvert \lambda^{n} \rvert^{2}=\sum^{\infty}_{n=1} (\lambda^{2} )^{n}<\infty$ 
>>- (b)
>>	1. Tenemos $\{ \lambda\in \mathbb{C}:\lvert \lambda \rvert<1 \}\subseteq \sigma(S^{*})$ por parte (a) y [[Teórico 15#^900583]] 
>>	2. Entonces $\{ \overline{\lambda}\in \mathbb{C} :\lvert \lambda \rvert<1\}\subseteq \sigma(S)$ por [[Teórico 15#^6c5fc5]] 
>>	3. Y es geometria elemental que $\{ \overline{\lambda}\in \mathbb{C}:\lvert \lambda \rvert<1 \}=\{ \lambda\in \mathbb{C}:\lvert \lambda \rvert<1 \}$  
>>	4. Como $\sigma(S)$ es cerrado [[Teórico 15#^4949f7]] tenemos que $\{ \lambda\in \mathbb{C}:\lvert \lambda \rvert\leq 1 \}\subseteq \sigma(S)$ (Osea contiene a su clausura) 
>>	5. Por otro lado si $\lvert \lambda \rvert>1$  entonces $\lambda\not\in\sigma(S)$ por [[Teórico 15#^4949f7]]  dado que $\lVert S \rVert=1$ (Unilateral shift es isometria)  
>>	6. Entonces $\sigma(S)=\{ \lambda\in \mathbb{C} :\lvert \lambda \rvert\leq 1\}$

^906ab4

>[!Theorem]
>$\mathcal{H}$ Hilbert $T\in B(\mathcal{H})$
>- (a) Si $p$ es polinomio entonces $$\sigma(p(T))=\{ p(u):u\in \sigma(T) \}$$
>- (b) Si $T$ inversible entonces $$\sigma(T^{-1})=\{ u^{-1}:u\in \sigma(T) \}$$
>>[!Proof]-
>>- (a)
>>	1. Sea $\lambda\in \mathbb{C}$, $f(z)=\lambda-p(z)$
>>	2. Entonces $f$ tambien es un polinomio por lo tanto tiene una factorizacion de la forma $$f(z)=c\prod_{j=1}^{n}(z-u_{j})\quad c\neq0\quad u_{j}\in \mathbb{C}$$
>>	3. Ahora $$\begin{align}\lambda\not\in\sigma(p(T))&\iff\lambda I-p(T)\text{ inversible} \\ &\iff f(T)\text{ inversible} \\&\iff c\prod(T-u_{j}I)\text{ inversible}  \\(*)&\iff T-u_{j}I \text{ inversible}\quad\forall 1\leq j\leq n  \\ &\iff \text{ los ceros de }f\not\in\sigma(T)  \\ &\iff f(u)\neq 0\quad\forall u\in \sigma(T) \\ &\iff \lambda\neq p(u)\quad\forall u\in \sigma(T)\\ \end{align}$$(*) ($T_{1}T_{2}$ inversible $\iff T_{1}$ y $T_{2}$ son inversibles) $\iff T_{1},T_{2}$ conmutan y en este caso conmutan por lo cual vale el sii
>>- (b)
>>	1. $T^{-1}$ inversible entonces $0\not\in\sigma(T^{-1})$
>>	2. Entonces todo elemento de $\sigma(T^{-1})$ se puede escribir como $u^{-1}$ con $u\in \mathbb{C}$. Ademas $$T^{-1}-u^{-1}I=-T^{-1}u^{-1}(T-uI)\quad (-T^{-1}u^{-1} \text{ es invertible por que su inversa es obviamente }-uT)$$
>>	3. Entonces (del 3er al 4to sii devuelta usando que si conmutan entonces cada parte es inversible si la composicion lo es) $$\begin{align} u^{-1}\in \sigma(T^{-1})&\iff T^{-1}-u^{-1}I \text{ es no inversible}\\ &\iff -T^{-1}u^{-1}(T-uI) \text{ es no inversible} \\ &\iff T-uI \text{ es no inversible} \\ &\iff u\in \sigma(T)\\ \end{align}$$ 
>>	4. Entonces $\sigma(T^{-1})=\{ u^{-1}:u\in \sigma(T) \}$  

^145b8c

>[!Definition] Polinomio del espectro
>$\mathcal{H}$ Hilbert $T\in B(\mathcal{H})$ y $p$ polinomio escribimos $p(\sigma(T))=\{ p(u):u\in \sigma(T) \}$.
>Por lo tanto el teo anterior dice que $p(\sigma(T))=\sigma(p(T))$

^4a41e5

>[!Corollary]
>Si $U\in B(\mathcal{H})$ es unitario $$\sigma(U)\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert =1 \}$$
>>[!Proof]-
>>1. Si $U$ unitario y recordemos que los unitarios son isometrias [[Teórico 15#^317da9]]) entonces $\lVert U \rVert=1$ 
>>2. Luego $\sigma(U)\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert\leq 1 \}$ por [[Teórico 15#^4949f7]]
>>3. Tambien $\sigma(U^{*})\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert\leq 1 \}$ por que $U^{*}$ tambien es unitario
>>4. Pero $U^{*}=U^{-1}$ (def unitario) entonces $$\sigma(U)=\sigma((U^{-1})^{-1})=\sigma((U^{*} )^{-1})=\{ \lambda^{-1}:\lambda\in \sigma(U^{*} ) \}\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert \geq1 \}$$
>>Por [[Teórico 15#^145b8c]] (b) la ultima igualdad, la inclusión por 2.

^c18523

>[!Definition] Radio Espectral
>$\mathcal{H}$ Hilbert $T\in B(H)$ definimos
>$$r_{\sigma}=\sup\{ \lvert \lambda \rvert :\lambda\in \sigma(T) \} \quad \text{ Radio Espectral de }T$$
>
>$$V(T)=\{ (Tx,x):\lVert x \rVert =1 \}\quad\text{ Rango Numérico de } T$$

^028ee7

>[!Lemma]
>$\mathcal{H}$ Hilbert $T\in B(\mathcal{H})$ normal entonces $\sigma(T)\subseteq \overline{V(T)}$  
>>[!Proof]-
>>1. Sea $\lambda\in \sigma(T)$. Como $T$ Normal entonces $T-\lambda I$ es normal por ejemplo 6.18 libro 
>>2. Además usando [[Teórico 15#^acb07f]] tenemos que un $T$ normal es inversible sii $\exists \alpha >0$ tal que $\lVert Tx \rVert\geq\alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$ analogamente $\lVert Tx \rVert\geq\alpha \quad\forall x\in \mathcal{H}$ con $\lVert x \rVert=1$ 
>>3. Como $T-\lambda I$  no es inversible entonces existe $x_{n}$ en $\mathcal{H}$ con $\lVert x_{n} \rVert=1\quad\forall n\in \mathbb{N}$ y $\lim_{ n \to \infty }\lVert (T-\lambda I)x_{n} \rVert=0$
>>4. Por Cauchy-Schwarz $$\lim_{ n \to \infty }((T-\lambda I)x_{n},x_{n})\leq \lim_{ n \to \infty }\lVert (T-\lambda I) x_{n}\rVert\lVert x_{n} \rVert=\lim_{ n \to \infty }\lVert (T-\lambda I)x_{n} \rVert=0$$ 
>>5. Entonces $\lim_{ n \to \infty }(Tx_{n},x_{n})-\lambda(x_{n},x_{n})=0$
>>6. Pero $(x_{n},x_{n})=1\quad\forall n\in \mathbb{N}$ entonces $\lim_{ n \to \infty }(Tx_{n},x_{n})=\lambda$
>>7. Entonces $\lambda$ esta en la clausura de $V(T)$      

^e62686

>[!Theorem] MEMO Solo (c) 
>Sean $\mathcal{H}$ Hilbert $S\in B(\mathcal{H})$ audoadjunto entonces
>- (a) $V(S)\subseteq \mathbb{R}$
>- (b) $\sigma(S)\subseteq \mathbb{R}$
>- (c) Al menos $\lVert S \rVert$ o $-\lVert S \rVert$ estan en $\sigma(S)$
>- (d) $r_{\sigma}(S)=\sup\{ \lvert \tau \rvert:\tau\in V(S) \}=\lVert S \rVert$
>- (e) $\alpha =\inf \{ \lambda:\lambda\in \sigma(S) \}\leq u\leq \sup \{ \lambda :\lambda\in \sigma(S) \}=\beta\quad\forall u\in V(S)$
>>[!Proof]-
>>- (a) 
>>	1. $S$ autoadjunto entonces $(S(x),x)=(x,S(x))=\overline{(S(x),x)}\quad\forall x\in \mathcal{H}$ 
>>	2. Entonces $(S(x),x)\in \mathbb{R}$ entonces $\forall x\in \mathcal{H}$ sucede $V(S)\subseteq \mathbb{R}$
>>- (b)
>>	1. $\sigma(S)$ esta en la clausura de $V(S)$ por [[Teórico 15#^e62686]] entonces es un subconjunto de $\mathbb{R}$ por parte (a) (Notar obviamente autoadjunto implica normal) 
>>- (c)
>>	1. Esto vale si $S=0$ 
>>	2. Si $S\neq 0$ entonces podemos mirar $\lVert S \rVert^{-1}S$ (Podemos asumir $\lVert S \rVert=1$ si no miramos $\frac{S}{\lVert S \rVert}$)
>>	3. Por def de norma (supremo)  $\exists \{ x_{n} \}\subseteq \mathcal{H}$ con $\lVert x_{n} \rVert=1$ y $\lim_{ n \to \infty }\lVert S(x_{n}) \rVert=1$
>>	4. Luego $$\begin{align}\lVert (I-S^{2})x_{n} \rVert^{2}&=((I-S^{2})(x_{n}),(I-S^{2})(x_{n}))\\&=(x_{n}-S^{2}x_{n},x_{n}-S^{2}x_{n})\\ & =(x_{n},x_{n})-(S^{2}x_{n},x_{n})-(x_{n},S^{2}x_{n})+(S^{2}x_{n},S^{2}x_{n})\\&=\lVert x_{n} \rVert^{2}+\lVert S^{2}(x_{n}) \rVert^{2}-2(S^{2}(x_{n}),x_{n})\end{align}$$ (Como $S$ autoadjunta entonces $S^{2}$ tambien lo es)  $(S^{2}x_{n},x_{n})\in \mathbb{R}$) 
>>	5. Y como $S$ auto adjunta entonces $S^{2}$ auto adjunta entonces
>>	6. Usando que $\lVert S(x_{n}) \rVert^{2}=(S(x_{n}),S(x_{n}))=(S^{2}(x_{n}),x_{n})$ por autoadjunta y por que $\lVert x_{n} \rVert=1$ y usando $\lVert S^{2}(x_{n}) \rVert\leq\lVert S \rVert\lVert S \rVert\lVert x_{n} \rVert=1$ vemos que $$\lVert x_{n} \rVert^{2}+\lVert S^{2}(x_{n}) \rVert^{2}-2(S^{2}(x_{n}),x_{n})\leq 2-2\lVert S(x_{n}) \rVert^{2}$$
>>	7. Entonces $\lim_{ n \to \infty }\lVert (I-S^{2})(x_{n}) \rVert^{2}=0$     
>>	8. Como $S^{2}$ es normal (pues es autoadjunta) luego por [[Teórico 15#^acb07f]] $I-S^{2}$ es NO invertible entonces $S^{2}-I$ es no invertible 
>>	9. Entonces $1\in \sigma(S^{2})=\{ \lambda^{2}:\lambda\in \sigma(S) \}$ (Ultima igualdad por [[#^145b8c]] (a)) 
>>	10. Por lo tanto $\lVert S \rVert=1\in \sigma(S)$ o $-\lVert S \rVert=-1\in \sigma(S)$ 
>>	11. Notar que si no tenia norma 1 entonces $T=\frac{S}{\lVert S \rVert}$ entonces $T$ es autoadjunta de norma 1 usando la misma demo $1= \lVert T \rVert\in \sigma(T)$ pero $\sigma(T)=\sigma\left( \frac{S}{\lVert S \rVert} \right)=\frac{1}{\lVert S \rVert}\sigma(S)$ por [[Teórico 15#^4a41e5]]
>>	12. Entonces $1\in \sigma(T)=\frac{1}{\lVert S \rVert}\sigma(S)$ por lo tanto $\lVert S \rVert\in \sigma(S)$ analogo con $-\lVert S \rVert$   
>>- (d)
>>	1. Tenemos que $$\lVert S \rVert\leq r_{\sigma}(S)=\sup\{ \lvert \lambda \rvert:\lambda\in \sigma(S) \}\leq \sup\{ \lvert \tau \rvert:\tau\in V(S) \}=\sup\{ \lvert (S(x),x) \rvert:\lVert x \rVert=1 \}\leq \sup\{ \lVert S(x) \rVert\lVert x \rVert:\lVert x\rVert=1 \}=\lVert S \rVert$$
>>	2. La 1era desigualdad es por (c), lo que acabamos de probar arriba
>>	3. La 2da por [[Teórico 15#^e62686]] si $\lambda\in \sigma(S)$ entonces tenemos $\{\tau_{n}\}\subseteq V(S)$ que converge a $\lambda$ por. lotanto $\lvert \lambda \rvert=\lim\limits_{ n \to \infty }\lvert \tau_{n} \rvert\leq \sup\{ \lvert \tau \rvert:\tau\in V(S) \}$    
>>- (e)
>>	1. Sea $\lambda\in V(S)$ entonces $\exists y\in \mathcal{H}$ con $\lVert y \rVert=1$ tal que $\lambda=(Sy,y)$
>>	2. Supongamos $\lambda<\alpha$. Primero tenemos $$\sigma(\beta I -S)=\{ \beta-\mu :\mu \in \sigma(S) \}\subseteq [0,\beta-\alpha ]$$La igualdad sale usando polinimios. La inclusion vale por que $\alpha \leq \mu \leq \beta\quad\forall \mu \in \sigma(S)$ esto por definicion de $\alpha ,\beta$ entonces $-\alpha \geq -\mu \geq -\beta$ y ahora sumo $\beta$    
>>	3. Entonces como $\beta-\mu \in [0,\beta-\alpha ]$  tenemos que $|\beta-\mu |=\beta-\mu \leq \beta-\alpha \quad\forall \beta-\mu \in \sigma(\beta I-S)$ luego $$r_{\sigma}(\beta I-S)\leq \beta-\alpha$$
>>	4. Pero $((\beta I-S)y,y)\in V(\beta I-S)$ entonces $\lvert ((\beta I-S),y) \rvert\in \{ \lvert \tau \rvert:\tau\in V(\beta I-S) \}$ $$\lvert ((\beta  I-s),y) \rvert \geq ((\beta I-S)y,y)=\beta (y,y)-(Sy,y)=\beta-\lambda>\beta-\alpha \geq r_{\sigma}(\beta I-S)$$
>>	5. Y esto contradice la primera igualdad (supremo) de (d) para el operador $\beta I-S$ 
>>	6. Por lo tanto $\lambda\leq \alpha$ 
>>	7. Ahora supongamos $\lambda>\beta$. Ahora usando misma idea $$\sigma(S-\alpha I)=\{ \mu -\alpha :\mu \in \sigma(S) \}\subseteq [0,\beta-\alpha ]$$    
>>	8. Entonces $r_{\sigma}(S-\alpha I)\leq \beta-\alpha$ luego $$((S-\alpha I)y,y)=(Sy,y)-\alpha (y,y)=\lambda-\alpha> \beta-\alpha\geq r_{\sigma}(S-\alpha I)$$
>>	9. Absurdo como en 5. por lo tanto $\lambda\leq \beta$ 
>>	10. Entonces juntando 6. y 9. $\lambda\in [\alpha,\beta]\quad\forall \lambda\in V(S)$ 

^d51465