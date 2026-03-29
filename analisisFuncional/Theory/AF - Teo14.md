---
dateCreated: 2024-10-11,20:30
---
>[!Proposition] Metrica de la convergencia debil-$*$ MEMO
>Supongo $X$ es Banach separable $\{s_{k}\}_{k\in \mathbb{N} }\subseteq X$ denso numerable. $s_{k}\neq 0\quad \forall k\in \mathbb{N}$. Sea $d_{W}:X'\times X'\longrightarrow \mathbb{R}$ dada por $$d_{W}(f,g)=\sum_{k=1}^{\infty} \frac{1}{2^k}\frac{f(s_{k})-g(s_{k})}{\lVert s_{k} \rVert }$$ entonces $d_{W}$ es metrica en $X'$ y si $\{f_{n}\}_{n\in \mathbb{N} }\subseteq X'$  y $f\in X'$ entonces son equivalentes:
>- (a) $\exists c>0$ tal que $\lVert f_{n}\rVert \leq c \quad \forall n\in \mathbb{N}$     y    $d_{W}(f,f_{n})\xrightarrow{n\rightarrow \infty } 0$  
>- (b) $f_{n}(x)\xrightarrow{n\rightarrow \infty }f(x)\quad \forall x\in X$ (Osea $f_{n}$ converge debilmente-$*$ a $f$) 
>>[!Proof]-
>>Tenemos que $d_{W}(f,g)\leq \lVert f-g \rVert$ entonces $d_{W}$ esta bien def y $d_{W}$ es metrica (ej)
>>- Veamos $(a)\Rightarrow (b)$
>>	1. Tenemos que $d_{W}(f,f_{n})\longrightarrow 0$ y $\frac{1}{2^k}\frac{\lvert f(s_{k})-f_{n}(s_{k}) \rvert}{\lVert s_{k} \rVert }\leq d_{W}(f,f_{n})\quad \forall k\in \mathbb{N}$ fijo y $\forall n\in \mathbb{N}$  
>>	2. Luego como $\lvert f(s_{k})-f_{n}(s_{k}) \rvert \xrightarrow{n\rightarrow \infty}0$ entonces $f_{n}(s_{k})\longrightarrow f(s_{k})\quad \forall n\in \mathbb{N}$
>>	3. Razonando como [[Teórico 13#^99815e]] (usando densidad, etc) se tiene que $f_{n}(x)\longrightarrow f(x)\quad \forall x\in X$
>>- Veamos $(b)\Rightarrow (a)$
>>	1. $\sup \{\lvert f_{n}(x) \rvert :n \in \mathbb{N}\}$ es finito $\forall x\in X$  (Por convergencia)
>>	2. Entonces  $\sup \{\lVert f_{n}\rVert :n \in \mathbb{N}  \}$ es finito.  (Por Banach- Steinhaus)
>>	3. Entonces existe $c>0$ con $\lVert f_{n} \rVert \leq c\quad \forall n\in \mathbb{N}$
>>	4. Puedo suponer $f=0$ si no tomaria $g_{n}=f_{n}-f$. Es decir asumimos $\lim_{n=1}^{\infty}f_{n}(x)=0 \quad \forall x\in X$ 
>>	5. Como $\lvert f_{n}(s_{k})\rvert \leq \lVert f_{n} \rVert \lVert s_{k} \rVert$ entonces $$d_{W}(f,f_{n})=\sum_{k=1}^{\infty} \frac{1}{2^k}\frac{\lvert f_{n}(s_{k}) \rvert}{\lVert s_{k} \rVert }\leq \lVert f_{k} \rVert \sum_{k=1}^{\infty} \frac{1}{2^k}=\lVert f_{k} \rVert $$ 
>>	6. Entonces la serie converge (por ser positiva) por lo tanto puedo hacer la cola de la serie tan pequenia como quiera
>>	7. Entonces $\exists k_{0}$ tal que $$\sum_{k=k_{0}+1}^{\infty} \frac{1}{2^k}\frac{\lvert f_{n}(s_{k}) \rvert }{\lVert s_{k} \rVert }\leq \frac{\epsilon }{2}$$
>>	8. Ademas $\lvert f_{n}(s_{k}) \rvert \leq \frac{\epsilon }{2k_{0}}\lVert s_{k} \rVert \quad \forall k\in \{1,\ldots k_{0}\} \quad \forall n\geq n_{0}$ (Por $4.$) 
>>	9. Finalmente $$d_{W}(f,f_{n})=\sum_{k=1}^{\infty} \frac{1}{2^k}\frac{\lvert f_{n}(s_{k}) \rvert }{\lVert s_{k} \rVert }\leq \frac{\epsilon }{2k_{0}}\sum_{k=1}^{k_{0}}\frac{1}{2^k} +\sum_{k=k_{0}+1}^{\infty}\frac{1}{2^k}\frac{\lvert f_{n}(s_{k}) \rvert }{\lVert s_{k} \rVert } \leq \bigg(\frac{\epsilon }{2k_{0}}\sum_{k=1}^{k_{0}} 1 \bigg) +\frac{\epsilon }{2}=\epsilon\quad \forall n\geq n_{0}  $$

^0bed9e

>[!Definition] Convergencia debil y debil-$*$ 
>Sean $X$ Banach $\{x_{n}\}_{n\in \mathbb{N} }\subseteq X$ y $\{f_{n}\}_{n\in \mathbb{N} }\subseteq X'$. Decimos que:
>1. $x_{n}$ converge debilmente a $x\in X$ si $f(x_{n})\xrightarrow{n\rightarrow \infty}f(x)\quad \forall f\in X'$. Lo denotamos $x_{n}\rightharpoonup x$
>2. $f_{n}$ converge debilmente-* a $f\in X'$ si $f_{n}(x)\longrightarrow f(x)\quad \forall x\in X$. Lo denotamos $f_{n}\buildrel\ast\over\rightharpoonup f$  

^1d0205

>[!Remark]
>[[Teórico 14#^0bed9e]] nos dice que si $X$ separable, para $\{ f_{n} \}$ acotada la convergencia respecto $d_{W}$ equivale a convergencia débil

>[!Proposition] Equivalencia convergencia debil MEMO
>Sea $H$ Hilbert. Entonces
>- (a) $x_{n}\rightharpoonup x \iff (x_{n},y)\longrightarrow (x,y)\quad \forall y\in H$
>- (b) Si ${} dim(\mathcal{H}) {}$ infinita y ${} \{e_{n}\}\subseteq \mathcal{H} {}$ sucesion ortonormal entonces $e_{n}\rightharpoonup 0$ 
>>[!Proof]-
>>- (a)
>>	1. ${} x_{n}\rightharpoonup x \iff f(x_{n})\longrightarrow f(x)\quad \forall f\in \mathcal{H}' {}$. 
>>	2. Por [[Teórico 7#^a49476]] dado ${} f\in \mathcal{H}' {}$ sabemos $\exists !y\in H$ con ${} f(z)=(z,y)\quad \forall z\in \mathcal{H} {}$ entonces ya estamos (es facil ver que hay una sobreyeccion entre $\mathcal{H}'$ y $\mathcal{H}$ en Riesz-Frechet) 
>>- (b) 
>>	1. Por $(a)$ basta ver $(e_{n},y)\longrightarrow 0\quad \forall y\in \mathcal{H}$.
>>	2. Esto es cierto por que por [[Teórico 3#^1a2dbf]] $|(y,e_{n}) \rvert^{2}\rightarrow0$  (serie converge entonces términos tienden a $0$) y $\lvert \overline{(e_{n},y)} \rvert =\lvert (e_{n},y) \rvert$  

^8f4f9b

>[!Remark] Convergencia debil no implica convergencia
>Notar que $x_{n}\rightharpoonup x$ no implica $x_{n}\longrightarrow x$ (la vuelta si vale) 

^985320

>[!Proposition] Propiedades de convergencias debiles
>Sea $X$ Banach 
>- (a) Si existen los limites debil y debil-* entonces son unicos
>- (b) $x_{n}$ converge debil a $x$ o ${} f_{n}$ converge debil-* a $f$ entonces $x_{n},f_{n}$ acotados 
>- (c) $x_{n}\rightarrow x$ entonces $x_{n}\rightharpoonup x$ y $f_{n}\rightarrow f$ entonces $f_{n} \rightharpoonup^{*} f$. Si $\dim(X)$ es finita entonces valen las reciprocas.
>- (d) Si $M \subseteq X$ es cerrado y convexo y $\{x_{n}\}_{n\in \mathbb{N}}\subseteq M$ con $x_n\rightharpoonup x$ entonces $x\in M$
>>[!Proof]-
>>- (a)   
>>	1. Supongamos $x_{n}\rightharpoonup y$ y $x_{n}\rightharpoonup x$. 
>>	2. Por [[Teórico 10#^d1e653]], $\exists  f\in X'$ con $f(x-y)=\lVert x-y \rVert$
>>	3. Entonces $\lVert x-y \rVert = f(x-y)=f(x) - f(y)=\lim_{ n \to \infty } f(x_{n})-\lim_{ n \to \infty } f(x_{n})=0$
>>- (b) 
>>	1. Supongo $x_n\rightharpoonup x$. Entonces $f(x_{n})\xrightarrow{n\rightarrow \infty} f(x)$
>>	2. Luego $\{ \lvert f(x_{n}) \rvert : n\in \mathbb{N} \}$ es acotado $\forall f\in X'$
>>	3. Entonces $\{ \lvert f(x_{n}) \rvert : n\in \mathbb{N} \} = \{\lvert J_{X}(x_{n})(f)\rvert:n\in \mathbb{N}\}$ es acotado para cada $f\in X'$
>>	4. Como $X$ y $X'$ son Banach por [[Teórico 7#^cd74fc]] $\{\lVert J_{X}(x_{n}) \rVert:n\in \mathbb{N}\}$ es acotado. 
>>	5. Por lo tanto $\{\lVert J_{X}(x_{n})\rVert:n\in \mathbb{N}\}=\{\lVert x_{n} \rVert:n\in \mathbb{N} \}$ es acotado [[Teórico 12#^1f2693]]
>>- (c)
>>	1. Tenemos $x_{n}\rightarrow x$. Sea $f\in X'$ entonces $\lvert f(x_{n})-f(x) \rvert\leq \lVert f \rVert\lVert x_{n}-x \rVert\xrightarrow{n\rightarrow \mathbb{N}}0$ 
>>	2. Entonces $f(x_{n})\rightarrow f(x)$ y vale para cualquier $f\in X'$ mostrando que $x_n\rightharpoonup x$  
>>- (Reciproca) 
>>	1. Supongamos dim finita y $x_n\rightharpoonup x$ pero $x_{n}\not \rightarrow x$
>>	2. Luego $\exists \epsilon>0$ y $\{x_{n_{j}} \}_{j\in \mathbb{N}}$ con $\lVert x_{n_{j}} -x\rVert>\epsilon$. (Acá usamos dim finita) 
>>	3. $\{ x_{n_{k}} \}$ converge debil $x$ por ser sub entonces por (b) es acotada.
>>	4. Entonces $\exists \{ x_{n_{k_{l}}} \}$ subsucesion con $x_{n_{k_{l}}}\xrightarrow{n\rightarrow\mathbb{N}}y\neq x$ (diferentre de $x$ por 2.)   
>>	5. Entonces $x_{n_{k_{l}}}\rightharpoonup y$ con $x\neq y$ por ida. Absurdo. 
>>	6. Entoncse $x_{n}\rightarrow x$  
>>- (d)
>>	1. Si $x\not\in M$ tomando $A=\{ x \}$ y $B=M$ en el [[Teórico 11#^18a436]] obtenemos que existe $f\in X'$ $f(x_{n})>f(x)\quad\forall x_{n}\in M\in \mathbb{N}$ que contradice $x_n\rightharpoonup x$ lo que es absurdo entonces $x\in M$ 
>>- (Ejercicio hacer parte de debil-*) 

^195d3b

>[!Theorem] Banach-Alaogtu MEMO
>Si $X$ es Banach separable y $\{ f_{n} \}\subseteq X'$ es acotada, entonces $\{ f_{n} \}$ tiene una subsucesion que converge debil-* a algun $f\in X'$
>>[!Proof]-
>>1. Sea $\{ s_{k} \}\subseteq X$ denso 
>>2. Como $\{ f_{n} \}$ es acotada entonces $\{ f_{n}(s_{1}) \}\subseteq \mathbb{F}$ es acotada.
>>3. Entonces $\exists \{ f_{n_{1}(m)}(s_{1}) \}_{m\in \mathbb{N}}$ ($m$ indexa la sub) convergente
>>4. A su vez la sucesion $\{ f_{n_{1}(m)}(s_{2}) \}$ es acotada entonces tiene sub convergente $\{ f_{n_{2}(m)}(s_{2})\}$  
>>5. Asi inductivamente entonces la sub diagonal $\{ f_{n_{m}(m)} \}_{m\in \mathbb{N}}$ es acotada en $X'$ (por qué $\{ f_{n} \}$ es acotada por hipótesis) y $\{ f_{n_{m}(m)}(s_{k}) \}$ converge $\forall k\in \mathbb{N}$ por construcción
>>6. Luego $f_{n_{m}(m)}$ converge debil-* a algun $f\in X'$ [[Teórico 13#^99815e]]. (Notar que $\{ s_{k} \}\subseteq Sp(\{ s_{k} \})$ entonces $\overline{Sp}(\{ s_{k} \})=X$) 

^105785

>[!Corollary] Compacidad debil-* de la bola cerrada MEMO
>Sea $X$ Banach separable entonces toda sucesion en $B=\{ f\in X':\lVert f \rVert\leq 1 \}$ tiene subsucesion que converge debil-* a algun elemento de $B$. Es decir $B$ es compacta respecto a la topologia inducida por $d_{W}$ (existe, pues $X$ es separable)
>>[!Proof]-
>>1. Sea $\{ f_{n} \}\subseteq B$ entonces por [[Teórico 14#^105785]] existe $\{ f_{n_{k}} \}$ sub sucesion con $f_{n_{k}}\rightharpoonup^{*}f$ para algun $f\in X'$
>>2. Pero $\lvert f(x) \rvert=\lim_{ k \to \infty }\lvert f_{n_{k}}(x) \rvert\leq \lim_{ k \to \infty }\lVert f_{n_{k}} \rVert\lVert x \rVert\leq \lVert x \rVert\quad\forall x\in X$. (Por hipotesis $\lVert f_{n_{k}} \rVert\leq 1$). Entonces $\lVert f \rVert\leq 1$ con lo cual $f\in B$
>>3. Además $d_{W}(f_{n_{k}},f)\xrightarrow{n\rightarrow \mathbb{N}}0$ por [[#^0bed9e]] con lo cual $B$ compacto respecto a la topología inducida por $d_{W}$ (por que toda sucesión en $B$ tiene sub convergente con respecto a $d_{W}$) 

^8af64b

>[!Theorem] Sucesion acotada tiene sub convergente debil
>Si $X$ es reflexivo y $\{ x_{n} \}\subseteq X$ es acotada, entonces $\{ x_{n} \}$ tiene subsucesion que converge debil a algun $x\in X$  
>>[!Proof]-
>>1. Sea $Y=\overline{Sp}\{ x_{n}:n\in \mathbb{N} \}$ entonces $Y$ es separable (igual la prueba de $H$ Hilbert $\iff$ Tiene BON) 
>>2. $Y$ reflexivo pues es subespacio cerrado de $X$ reflexivo
>>3. Entonces $Y''$ es separable por que $J_{Y}:Y\rightarrow Y''$ es biyectiva (porque $Y$ reflexivo) y continua e $Y$ es separable
>>4. Luego como $Y''$ separable  por [[Teórico 11#^5cf5d9]] $Y'$ es separable.
>>5. Ahora $\lVert J_{Y}(x) \rVert=\lVert x \rVert\quad\forall x\in Y$ por lo tanto $\{ J_{Y}(x_{n}):n\in \mathbb{N} \}\subseteq Y''$ es acotado por que $\lVert x_{n} \rVert$ lo es.
>>6. Entonces por [[Teórico 14#^105785]] (con $X=Y'$) $\exists \{ J_{Y}(x_{n_{k}}) \}$ subsucesion que converge debil-* a algun $z\in Y''$. (Notar $Y'=B(Y,\mathbb{F})$ es Banach por que $\mathbb{F}$ lo es y por [[Teórico 5#^7e0978]] ) 
>>7. $Y$ reflexivo entonces $z=J_{Y}(y)$ para algun $y\in Y$
>>8. Ahora dado $f\in X'$ sea $f_{Y}=f|_{Y}\in Y'$ entonces $$\lim_{ k \to \infty }f(x_{n_{k}})=\lim_{ k \to \infty }f_{Y}(x_{n_{k}})=\lim_{ k \to \infty }J_{Y}(x_{n_{k}})(f_{Y})=z(f_{Y})=J_{Y}(y)(f_{Y})=f_{Y}(y)=f(y)$$
>>9. Mostrando que $x_{n_{k}}\rightharpoonup y$  

^61d6cf

>[!Corollary] Convergencia debil dentro de cerrado, acotado y convexo
>$X$ reflexivo $M\subseteq X$ cerrado, acotado y convexo. Entonces toda sucesion en $M$ tiene subsucesion que converge debilmente a algun $x\in M$.
>>[!Proof]-
>>1. Como $M$ acotado y $\{ x_{n} \}\subseteq M$ por [[#^61d6cf]] existe subsucesion que converge debil a algun $x\in X$ 
>>2. Como $M$ cerrado y convexo $x\in M$ por [[Teórico 14#^195d3b]] (d)

^7a690e

## Operadores lineal en espacios de Hilbert

>[!Theorem] Operador Adjunto  
>Sean $\mathcal{H},K$ Hilbert $T\in B(\mathcal{H},K)$ entonces $\exists !T^{*}\in B(K,\mathcal{H})$ tal que $$(T(x),y)=(x,T^{*}(y))\quad\forall x\in \mathcal{H},\quad\forall y\in K$$  
>>[!Proof]-
>>- Definición
>>	1. Sea $y\in K$ con $f_{y} : \mathcal{H}\rightarrow \mathbb{C}$ dada por $f_{y}(x)=(T(x),y)$
>>	2. $f_{y}$ es lineal y continua pues $$\lvert f_{y}(x) \rvert \leq \lvert (T(x),y) \rvert\leq \lVert T(x) \rVert\lVert y \rVert\leq \lVert T \rVert\lVert x \rVert\lVert y \rVert\quad\text{(Cauchy-Schwarz)}$$  entonces $f_{y}\in \mathcal{H}'$
>>	3. Por [[Teórico 7#^a49476]] $\exists !Z_{y}\in \mathcal{H}$ con $f_{y}(x)=(x,Z_{y})\quad\forall x\in \mathcal{H}$
>>	4. Definimos $T^{*}:K\rightarrow\mathcal{H}$ como $T^{*}(y)=Z_{y}$  
>>	5. Luego $(T(x),y)=f_{y}(x)=(x,Z_{y})=(x,T^{*}(y))\quad\forall x\in \mathcal{H}\quad\forall y\in K$
>>- $T^{*}$ es unico
>>	1. Supongamos $(x,T^{*}_{1}y)=(x,T^{*}_{2}y)$ entonces $(x,T^{*}_{1}y - T^{*}_{2}y)=0\quad\forall x\in X$ entonces $T_{1}^{*}y=T_{2}^{*}y$ 
>>- $T^{*}$ es lineal
>>	1. $\begin{align}(x,T^{*}(\lambda y_{1}+\mu y_{2}))&=(Tx,\lambda y_{1}+\mu y_{2})\\ &=\overline{\lambda}(Tx,y_{1})+\overline{\mu }(Tx,y_{2})\\&=\overline{\alpha }(x,T^{*}y_{1})+\overline{\mu }(x,T^{*}y_{2})\\&=(x,\alpha T^{*}y_{1})+(x,\mu T^{*}y_{2})\end{align}$ 
>>- $T^{*}$ es continua
>>	1. $\lVert T^{*}(y) \rVert^{2}=(T^{*}(y),T^{*}(y))=(T(T^{*}(y)),y)\leq \lVert T \rVert\lVert T^{*}(y) \rVert\lVert y  \rVert$ (Devuelta Cauchy-Schwarz y continuidad de $T$  luego pasar dividiendo $\lVert T^{*}y \rVert$) 
>>	2. Entonces $\lVert T^{*}(y) \rVert\leq \lVert T \rVert\lVert y \rVert$ por lo tanto $\lVert T^{*} \rVert\leq \lVert T \rVert$ mostrando $T^{*}$ continua

^1814fb

>[!Example] (ejercicio)
>1. $T : \mathbb{C}^{n}\rightarrow \mathbb{C}^{n}$ dada por $T(x)=Ax$ (con $A$ una matriz) entonces $T^{*}(x)=A^{*}(x)$ con $A^{*}=\overline{A^{T}}$
>2. Sean $f\in C([0,1])$ y $T_{f}\in B(L^{2}[0,1])$ dada por $T_{f}(g)=f.g$ entonces $T_{f}^{*}=T_{\overline{f}}$ (ver) 
>3. $S : \ell^{2}\rightarrow \ell^{2}$ dada por $S(y_{1},y_{2},\ldots)=(0,y_{1},\ldots)$ entonces $S^{*}(y_{1},y_{2},\ldots)=(y_{2},y_{3},\ldots)$

>[!Lemma] Propiedades de autoadjunta y conmutatividad
>Sean $\mathcal{H},K,L$ Hilbert $R,S\in B(\mathcal{H},K)$ $T\in B(K,L)$ y $\lambda,\mu\in \mathbb{C}$ entonces
>- (a) $(\mu R+\lambda S)^{*}=\overline{u}R^{*}+\overline{\lambda}S^{*}$
>- (b) $(TR)^{*}=R^{*}T^{*}$
>>[!Proof]-
>>(a) $(x,(\mu R+\lambda S)^{*}y)=((\mu R+\lambda S)x,y)=\mu (Rx,y)+\lambda (Sx,y)=(x,\overline{\mu } R^{*}y)+(x,\overline{\lambda} S^{*}y)$ 
>>(b) $(x,(TR)^{*}(z))=(TR(x),z)=(R(X),T^{*}(z))=(x,R^{*}T^{*}(z))$ listo por unicidad  

^0f7d67

>[!Theorem] Propiedades de autoadjunta
>Sean $\mathcal{H},K$ Hilbert $T\in B(\mathcal{H},K)$. Entonces
>- (a) $(T^{*})^{*}=T$
>- (b) $\lVert T^{*} \rVert=\lVert T \rVert$
>- (c) $f : B(\mathcal{H},K)\rightarrow B(K,\mathcal{H})$ dada por $T\mapsto T^{*}$ es continua (no es lineal por que escalar sale con modulo)
>- (d) $\lVert T^{*}T \rVert=\lVert T \rVert^{2}$
>>[!Proof]-
>>- (a)
>>	1. $(y,(T^{*})^{*}(x))=(T^{*}(y),x)=\overline{(x,T^{*}(y))}=\overline{(T(x),y)}=(y,T(x))\quad\forall x\in \mathcal{H}\quad\forall y\in K$ entonces $(T^{*})^{*}=T$ 
>>- (b) 
>>	1. Ya vimos $\lVert T^{*} \rVert\leq \lVert T \rVert$.(Final de demo [[#^1814fb]] para ver porque vale desigualdad) ademas por (a) ($\lVert T \rVert= \lVert (T^{*})^{*} \rVert\leq\lVert T^{*} \rVert$ esto último sale usando la misma idea $\lVert (T^{*})^{*}\rVert^{2}$  )
>>- (c)
>>	1. Es directo de (b). Sea $\epsilon>0$ si elijo $\delta =\epsilon$
>>	2. $\lVert R-S \rVert <\delta$ entonces $\lVert f(R)-f(S) \rVert=\lVert R^{*}-S^{*} \rVert=\lVert (R-S)^{*} \rVert=\lVert R-S \rVert<\delta =\epsilon$ 
>>- (d) Notar que por (b) tenemos que $T^{*}$ es acotada   
>>	1. $\lVert T^{*}T \rVert\leq \lVert T^{*} \rVert\lVert T \rVert=\lVert T \rVert^{2}$ 
>>	2. Ademas notar que $T^{*}T$ es acotada por que es composicion de acotadas entonces   $$\lVert Tx \rVert^{2}=(Tx,Tx)=(T^{*}Tx,x)\leq \lVert T^{*}Tx \rVert\lVert x \rVert\leq \lVert T^{*} T \rVert\lVert x \rVert^{2}$$ por lo tanto $\lVert T \rVert^{2}\leq \lVert T^{*}T \rVert$  

^0589c9

>[!Proposition] MEMO
>Sean $\mathcal{H},K$ Hilbert, $T\in B(\mathcal{H},K)$ y $T^{*}\in B(K,\mathcal{H})$ entonces 
>- (a) $\ker(T)=Im(T^{*})^{\perp}$
>- (b) $\ker(T^{*})=(Im(T))^{\perp}$
>- (c) $\ker(T^{*})=0\iff Im(T)$ es densa en $K$ 
>>[!Proof]-
>>- (a)
>>	1. Sean $x\in \ker(T)$ y $z\in Im(T^{*})$ entonces $\exists y\in K$ con $T^{*}(y)=z$ entonces $(x,z)=(x,T^{*}(y))=(T(x),y)=(0,y)=0$ entonces $x\in Im(T^{*})^{\perp}$ por lo tanto $\ker T\subseteq Im(T^{*})^{\perp}$
>>	2. Reciprocamente. Sea $v\in (Im(T^{*}))^{\perp}$ primero tenemos $T^{*}(T(v)))\in Im(T^{*})$ 
>>	3. Luego $\lVert Tv \rVert^{2}= (T(v),T(v))=(v,T^{*}(T(v)))=0$ (por que $v\in Im(T^{*})^{\perp}$) 
>>	4. Por lo tanto $T(v)=0$ entonces $v\in \ker(T)$ mostrando que $Im(T^{*})\subseteq \ker T$
>>- (b) Usar (a) con $T^{*}$
>>- (c) 
>>	1. Supongo $\ker T^{*}=0$ entonces usando (b) $$\overline{Im(T)}=Im(T)^{\perp\perp}=\ker (T^{*} )^{\perp}=0^{\perp}=K$$ 
>>	2. Entonces $Im(T)$ es denso en $K$. 
>>	3. Reciprocamente si $Im(T)$ es denso en $K$ entonces $\ker(T^{*})=Im(T)^{\perp}\stackrel{(1)}{=}(Im(T)^{\perp\perp})^{\perp}\stackrel{(2)}{=}K^{\perp}=0$  
>>	(Usando  [[Teórico 3#^31d10a]] (1) vale por $Im(T)^{\perp}$ es cerrado y (2) vale por [[Teórico 3#^1c91e8]] que $Im(T)^{\perp\perp}=\overline{Im(T)}=K$ )   

^592165

>[!Corollary] MEMO
>$\mathcal{H}$ Hilbert y $T\in B(\mathcal{H})$ entonces $T$ invertible $\iff\ker (T^{*})=0$ y $\exists \alpha >0$ con $\lVert T(x) \rVert\geq \alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$
>>[!Proof]-
>>- $(\Leftarrow)$  
>>	1. $K=0^{\perp}=\ker (T^{*})^{\perp}=(Im(T)^{\perp})^{\perp}=\overline{Im(T)}=Im(T)$ (Última igualdad por [[Teórico 7#^6e0039]]) 
>>	2. Entonces $T$ es sobre.
>>	3. Ademas si $Tx=0$ entonces $0=\lVert Tx \rVert\geq\alpha \lVert x \rVert$ por lo tanto $x=0$ entonces es inyectiva
>>	4. Como $\mathcal{H}$ es Banach entonces por aplicacion abierta $T$ es invertible 
>>- $(\Rightarrow)$ 
>>	1. Por ser inversible (sobreyectiva)  $Im(T)=\mathcal{H}$ osea $\overline{Im(T)}=\mathcal{H}$ entonces $\ker(T^{*})=\{ 0 \}$ por [[Teórico 14#^592165]] (c) 
>>	2. Ademas $\lVert x \rVert=\lVert TT^{-1}x \rVert\leq\lVert T^{-1} \rVert\lVert Tx \rVert$ entonces $\lVert T^{-1} \rVert^{-1}\lVert x \rVert\leq \lVert Tx \rVert$ 

^5be0d2

