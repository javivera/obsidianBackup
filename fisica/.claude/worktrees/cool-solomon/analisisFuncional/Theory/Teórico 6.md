---
dateCreated: 2024-09-27,19:41
---
>[!Definition] Composicion de Lineales
>Sean $X,Y,Z$ normados $T\in B(X,Y)$ y $S\in B(Y,Z)$ la composicion $S\circ T$ se llama producto y $S\circ T :=ST$

^476d95

>[!Lemma] Producto de acotados es acotado
>Sean $X,Y,Z$ normados $T\in B(X,Y)$ y $S\in B(Y,Z)$ entonces $$ST\in B(X,Z) \quad\text{ y }\quad\lVert ST \rVert\leq\lVert S \rVert\lVert T \rVert$$
>>[!Proof]-
>> 1. Sabemos $\lVert ST(x) \rVert\leq \lVert S \rVert\lVert Tx \rVert\leq\lVert S \rVert\lVert T \rVert\lVert x \rVert$ 
>> 2. Usando supremos $\lVert x \rVert=1$ de ambos lados llegamos $\lVert ST \rVert\leq\lVert S \rVert\lVert T \rVert$ 
>> 3. $\lVert T \rVert=\sup\{ \lVert Tx \rVert :\lVert x \rVert \leq 1  \}=\inf\{ k:\lVert Tx \rVert \leq k\lVert x \rVert\quad \forall x\in X  \} \leq \infty$ por que $T\in B(X,Y)$
>> 4. (Analogo $\lVert S \rVert$) con lo cual $\lVert S \rVert\lVert T \rVert\leq\infty$
>> 5. Notar que $\lVert S\rVert \lVert T \rVert = k \leq \infty$ nos dice que $ST\in B(X,Z)$ por que  si $\lVert x \rVert\leq 1$ entonces $\lVert ST(x) \rVert\leq \lVert S \rVert\lVert T \rVert\lVert x \rVert \leq k$ por que $k$ es supremo entonce sale de [[Teórico 4#^cae689]]

^e8da62

>[!Definition] Notacion
>1. $B(X):=B(X,X)$
>2. $T^{n}= T\ldots T$ (n-veces)
>3. $p(x)=\sum^{N}_{n=1}a_{i}x^{i}$ entonces $p(T)=\sum^{N}_{n=1}a_{i}T^{i}$

^e3ed29

>[!Lemma] Convergencia de producto de operadores
>$X$ normado entonces
>- (a) $B(X)$ es algebra asociativa con la identidad
>- (b) Si $\{ T_{n} \},\{ S_{n} \}\subseteq B(X)$ con $T_{n}\rightarrow T$ y $S_{n}\rightarrow S$ entonces $S_{n}T_{n}\rightarrow ST$
>>[!Proof]-
>> - (a) 
>> 	1. Si $T,S\in B(X)$ entonces, por el lema anterior, $ST\in B(X)$ y $\lVert ST\rVert\leq\lVert S\rVert\lVert T\rVert$, por lo que $B(X)$ es cerrado bajo el producto. 
>> 	2. La suma y la multiplicación por escalares preservan la acotación, la asociatividad se sigue de la asociatividad de la composición de funciones, y la identidad es $I\in B(X)$.
>> - (b) 
>> 	1. Supongamos $T_{n}\to T$ y $S_{n}\to S$ en norma. Entonces existe $M>0$ tal que $\lVert T_{n}\rVert\le M$ para todo $n$. (Recordar paso 1. [[Teórico 5#^7e0978]])
>> 	2. Tenemos $$\begin{align}\lVert S_{n}T_{n}-ST\rVert & \le \lVert S_{n}T_{n}-ST_{n}\rVert + \lVert ST_{n}-ST\rVert \\& = \lVert (S_{n}-S)T_{n}\rVert + \lVert S(T_{n}-T)\rVert \\& \le \lVert S_{n}-S\rVert\lVert T_{n}\rVert + \lVert S\rVert\lVert T_{n}-T\rVert \\& \le M\lVert S_{n}-S\rVert + \lVert S\rVert\lVert T_{n}-T\rVert\end{align}$$
>> 	3. Como $\lVert S_{n}-S\rVert\to 0$ y $\lVert T_{n}-T\rVert\to 0$, el lado derecho tiende a $0$. Por lo tanto $\lVert S_{n}T_{n}-ST\rVert\to 0$, es decir $S_{n}T_{n}\to ST$ en norma.

^dc7a58

>[!Lemma] Polinomios evaluados en operadores
>$X$ normado $T\in B(X)$ si $p,q$ polinomios, $\lambda,\mu\in \mathbb{F}$ entonces
>1. $(\lambda p+\mu q)(T)=\lambda p(T)+\mu q(T)$
>2. $pq(T)=p(T)q(T)$

^c381db

## Inversa de operadores

>[!Definition] Operador Inverso
>$X,Y$ normado, $T\in B(X,Y)$ se dice inversible si $\exists S\in B(X,Y)$ tal que $ST\in I_{X}$ y $TS\in I_{Y}$ y en tal caso se la llama inversa de $T$. Luego $S:=T^{-1}$. (Si existe es unica)

^f683b2

>[!Lemma] Propiedades de operadores inversibles
>$X,Y,Z$ normados $T\in B(X,Y)$ con $S\in B(Y,Z)$ entonces
>- (a) Si $T,S$ son inversibles entonces $T^{-1}$ tiene inversa $T$ y $ST$ tiene inversa $T^{-1}S^{-1}$
>- (b) Si $X=Y=Z$ y $TS=ST$ (Conmutan) entonces 
>	1. Si $T$ inversible vale $T^{-1}S=ST^{-1}$
>	2. Si $TS$ inversible vale $T$ y $S$ inversibles
>	
>>[!Proof]-
>>- (a)  $T^{-1}T=TT^{-1}$ entonces $T$ es la inversa de $T^{-1}$. $STT^{-1}S^{-1}=Id=T^{-1}S^{-1}ST$ entonces $T^{-1}S^{-1}$ es inversa de $TS$. Habria que ver antes que es acotada.  Luego $$\lVert T^{-1}S^{-1}(z)\rVert\leq k_{1}\lVert S^{-1}z \rVert\leq k_{1}k_{2}\lVert z \rVert\leq k\lVert z \rVert \quad\forall z\in Z$$
>>(Las desigualdades son por que $T^{-1}\in B(Y,X)$ por ser inversa. Analogo $S^{-1}\in B(Z,Y)$). Mostrando que $T^{-1}S^{-1}\in B(Z,X)$ 
>>- (b)
>>	1. $T^{-1}S=T^{-1}STT^{-1}=T^{-1}TST^{-1}=ST^{-1}$ 
>>	2. Sea $R=TS$ como $S(TS)=(TS)S$ entonces $R$ y $S$ conmutan. Además $R$ es inversible luego por (a) tenemos $$R^{-1}S=SR^{-1}$$ Luego multiplicando esa igualdad por $T$ a derecha (y conmutando) tenemos  $$(R^{-1}S)T=R^{-1}(TS)=I$$ Y multiplicando por $T$ a izquierda $$T(R^{-1}S)=(TS)R^{-1}=I$$ Mostrando que $R^{-1}S=T^{-1}$  

^dc67d6

>[!Definition] Isomorfismos
>$X,Y$ normados. Si $\exists T\in B(X,Y)$ inversible decimos que $X$ e $Y$ son isomorfos y que $T$ es isomorfismo

^5c4e6a

>[!Remark] Inversa de isomorfismo es isomorfismo (DUDA) 
>Si $T$ es isomorfismo entonces $T^{-1}$ es isomorfismo
>>[!Proof]
>>$\lVert T^{-1}y \rVert=\lVert T^{-1}Tx \rVert=\lVert x \rVert=\lVert Tx \rVert=\lVert y \rVert$
>>Notar que esto tambien nos dice que si $T\in B(X,Y)$ isomorfismo $T^{-1}\in B(Y,X)$ 
>>DUDA: Nuestra definicion de inveras fuerza a que la inversa sea contionua .. con lo cual la inversa seria isomorfismo por definicion .. para que la prueba?? 

^04a4dc

>[!Remark] Biyectiva no alcanza para isomorfismo
>Notar que no alcanza con pedir $T$ biyectiva. Por que esto no aseguraria que la inversa armada con la biyeccion sea continua. Osea no asegura $T^{-1}\in B(Y,X)$.  Por eso pedimos $T$ inversible.

^de8d75

>[!Proposition] Isometria biyectiva implica isomorfismo
>Si $T:X\rightarrow Y$ es isometria biyectiva (isomorfismo isometrico)  entonces es isomorfismo
>>[!Proof]-
>>1. Podemos armar inversa $T^{-1}$ a partir de preimagen por biyectividad
>>2. $\lVert T^{-1}y \rVert=\lVert T^{-1}Tx \rVert=\lVert x \rVert=\lVert Tx \rVert=\lVert y \rVert$ ósea dicha inversa es continua $T^{-1}\in B(Y,X)$ 

^0deb40

>[!Lemma] Equivalencias de espacios isomorfos
>Si $X,Y$ normados isomorfos entonces:
>- (a) $dim (X)<\infty \iff dim (Y)<\infty$ y $dim (X)=dim(Y)$
>- (b) $X$ separable $\iff Y$ separable
>- (c) $X$ Banach $\iff Y$ Banach
>>[!Proof]-
>>- (a) 
>>	- ($\Leftarrow$) trivial
>>	- ($\Rightarrow$)
>>		1.  Como son isomorfos existe $T\in B(X,Y)$ isomorfismo (implica biyectiva) 
>>		2. Dada $\{ e_{i} \}$ base de $X$ es facil ver que $\{ Te_{i} \}$ es base de $Y$ usando la biyectividad
>>- (b) 
>>	- $(\Rightarrow)$ 
>>		1. Sea $A$ denso numerable en $X$. Veamos $\{ Tx_{n} \}$ es denso en $Y$
>>		2. Sea $y\in Y$ entonces $x=T^{-1}(y)\in X$ por lo tanto existe $a_{n}\rightarrow x$  con $a_{n}\in A\quad\forall n\in \mathbb{N}$ 
>>		3. Como $T$  continua $Ta_{n}\rightarrow Tx=y$. 
>>		4. Que es numerable es trivial
>>	- ($\Leftarrow$) Sale exactamente igual por que $T^{-1}$ es inversible y continua
>>- (c) 
>>	- ($\Rightarrow$)
>>		1. Sea $y_{n}$ de Cauchy en $Y$ osea $$\lVert y_{n}-y_{m} \rVert\leq \epsilon\quad\forall n,m \geq N_{0}$$
>>		2. Definimos $x_{n}=T^{-1}y_{n}$ como $T^{-1}$  continua vale $\lVert T^{-1}x \rVert\leq k\lVert x \rVert$. Aplicado a este caso $$\lVert x_{n}-x_{m} \rVert =\lVert T^{-1}(y_{n}-y_{m})\rVert\leq k\lVert y_{n}-y_{m} \rVert \leq k\epsilon\quad\forall n,m\geq N_{0}$$
>>		3. Por lo tanto $x_{n}$ es de Cauchy. Como $X$ completo entonces $x_{n}\rightarrow x$ 
>>		4. Luego por continuidad de $T$ sucede  $$y_{n}=Tx_{n}\rightarrow Tx$$
>>	- ($\Leftarrow$) Para el otro lado sale igual 

^2cb23e

>[!Example] Operador inversible
>Sea $f\in C[0,1]$ entonces $T_{f} : L^{p}(0,1)\rightarrow L^{p}[0,1]$ dado por $T(f)(u)=T_{f}(u)=f.u$
>Es claro que es lineal y que esta bien definida (digamos $f.u\in L^{p}(0,1)$). Mas aun es continua pues 
>$$\lVert T_{f}(u) \rVert _{p}^{p} =\int\lvert f.u \rvert ^{p} \leq\lVert f \rVert^{p} _{\infty}\int\lvert u \rvert ^{p} =\lVert f \rVert^{p} _{\infty}\lVert u \rVert _{p}^{p}$$
>Otra forma de decirlo $T_{f}\in B(L^{p}(0,1))$.
>Si ademas $\frac{1}{f}\in C[0,1]$ entonces $\exists (T_{f})^{-1} = T_{\frac{1}{f}}$
>Si $\frac{1}{f}\not\in C[0,1]$ entonces no sabemos que pasa ya que en gral $\frac{1}{f}.u\not\in L^{p}(0,1)$ (Pero podria ocurrir que $\exists (T_{f})^{-1}$) y que no sea de la forma $T_{h}$ para ningun $h$

^5117a9

>[!Theorem] $I-T$ es inversible
>$X$ Banach $T\in B(X)$ com $\lVert T \rVert\leq 1$ entonces $$I-T \text{ es inversible }\quad (I-T)^{-1}=\sum^{\infty}_{n=1}T^{n}$$
>>[!Proof]-
>>1. Como $\lVert T \rVert\leq 1$ entonces $\sum^{\infty}_{n=0}\lVert T \rVert^{n}$ converge (por ser una serie geométrica) 
>>2. Notar que $\lVert T^{n} \rVert\leq \lVert T \rVert^{n}$ por que $\lVert T^{n}(x)\rVert=\lVert T(T^{n-1}(x))  \rVert\leq \lVert T \rVert\lVert T^{n-1}x \rVert \Rightarrow\lVert T^{n} \rVert\leq \lVert T \rVert\lVert T^{n-1} \rVert$ donde usamos que $T\in B(X)$ luego seguimos por induccion). Por lo tanto $\sum^{\infty}_{n=0}\lVert T^{n} \rVert$ converge
>>3. $X$ Banach entonces $B(X)$ es Banach. [[Teórico 5#^7e0978]] por lo tanto podemos usar [[Teórico 1#^1fb9a8]] para afirmar que también converge $S:=\sum^{\infty}_{n=0}T^{n}$
>>4. Definimos $S_{k}:=\sum^{k}_{n=0}T^{n}$ luego $$\lVert (I-T)S_{k}-I \rVert=\lVert I-T^{k+1}-I \rVert=\lVert- T^{k+1} \rVert\leq \lVert T \rVert^{k+1}$$
>>5. Como $\lVert T \rVert\leq 1$  entonces $\lim\limits_{ k \to \infty }\lVert (I-T)S_{k}-I \rVert=0$ ósea $\lim\limits_{ k \to \infty } (I-T)S_{k} =Id$  
>>6. Entonces $$Id = \lim\limits_{ k \to \infty }(I-T)S_{k}=(I-T)\lim\limits_{ k \to \infty }S_{k}=(I-T)S$$ (por que el producto es continuo). Luego $(I-T)S=I$ y análogamente probamos $S(I-T)=I$ 

^aa4e9d

>[!Remark] Aplicacion de $I-T$ inversible
>$A\in \mathbb{C}$ con $k:[a,b]\times[a,b]\rightarrow\mathbb{C}$ dada por $k(x,y)=A\sin(x-y)$. Probar que si $|A|\leq \frac{1}{b-a}$ entonces $\forall f\in C[a,b]\quad\exists !g\in C[a,b]$ tal que 
>$$g(x)=f(x)+\int_{a}^{b} k(x,y)g(y)dy \tag{1}$$
>>[!Proof]-
>> 1. Aca $X=C[a,b]$. Notar que ya probamos que $K:C[a,b]\rightarrow C[a,b]$ dada por 
>> $$K(g)(s)=\int k(s,y)g(y)dy$$
>> es acotado y $\lVert K(g) \rVert\leq\lvert A \rvert(b-a)\lVert g \rVert$ ([[Teórico 5#^33cdb2]]).
>> 2. En particular $\lVert K \rVert\leq\lvert A \rvert(b-a)$ (Supremo cuando $\lVert g \rVert=1$ de ambos lados). Entonces $\lVert K \rVert\leq 1$ por que $\lvert A \rvert\leq \frac{1}{b-a}$
>> 3. Notar que la identidad para operadores que salen de continua y llegan a continuas es $I:C[a,b]\rightarrow C[a,b]$ tal que $I(g)=g$
>> 4. Ahora si aplicamos el teorema de arriba. y usando $(1)$ $$(I-K)(g)(x) = g(x) -\int_{a}^{b} k(x,y)g(y)dy  =f(x)$$
>> 5. Entonces $$g(x)=(I-K)^{-1} (f)(x)$$
>> y $g$ es unica por que $(I-K)^{-1}$ lo es (por ser inversa)

^fb6ab8

>[!Corollary]
>Sean $X,Y$ Banach entonces el conjunto $A$ de operadores inversibles es abierto en $B(X,Y)$
>> [!Proof]-
>>1.  Sea $T \in A$ y $\eta = \lVert T^{-1}\rVert^{-1}$. Para mostrar que $A$ es abierto alcanza con mostrar que si  $\lVert T - S \rVert < \eta$ entonces $S \in A$. (Osea que la bola $B_{T}(\eta)\subseteq A$ ) 
>>2. Entonces sea $\lVert T - S \rVert < \eta$. Luego $$\lVert (T-S)T^{-1}\rVert \leq \lVert T-S \rVert \lVert T^{-1}\rVert < \lVert T^{-1}\rVert^{-1}\lVert T^{-1}\rVert = 1.$$
>>(Notar que $S\in B(X,Y)$ por que $\lVert S \rVert\leq \lVert T-S \rVert+\lVert T \rVert<\eta + k$ por lo tanto $T-S\in B(X,Y)$ por ser subespacio ademas $T^{-1}\in B(X,Y)$ por definicion de inversible) 
>>3. Luego $I_Y - (T-S)T^{-1}$ is invertible by [[Teórico 6#^aa4e9d]]. 
>>4. Pero $$I_Y - (T-S)T^{-1} = I_Y - (I_Y - ST^{-1}) = ST^{-1}$$
>>5. Entonces $ST^{-1}$ es invertible ($T\in A$ tambien inversible) por lo tanto $S = ST^{-1}T$ is invertible por [[Teórico 6#^dc67d6]] parte (a) (multiplicacion de inversible es inversible)   
>>6. Mostrando que  $S \in A$

^efd74a

>[!Theorem] Baire
>Sea $(M,d)$ metrico completo si $M=\bigcup^{\infty}_{j=1}A_{j}$ con $A_{j}\subseteq M$ cerrado entonces al menos un $A_{j}$ contiene una bola abierta

^2f4c3d

>[!Theorem] Aplicacion abierta
>Sean $X,Y$ Banach. $T\in B(X,Y)$ sobreyectiva. Sea
>$$L=\{ Tx:x\in  X\text{ con } \lVert x \rVert \leq 1 \}$$
>Obs: $L = T\big(\overline{B_{0,X}(1)}\big)$ Bola cerrada de centro 0, radio 1
>1. $\exists\ r>0$ tal que $\{ y\in Y :\lVert y \rVert\leq r\}\subseteq \overline{L}$
>2. $\left\{  y\in Y:\lVert y \rVert \leq \frac{r}{2}  \right\}\subseteq L$
>3. Si ademas $T$ inyectiva entonces $T$ es inversible
>>[!Proof]-
>> - Para aclarar en qué espacios están los conjuntos, usamos la siguiente notación en esta prueba:
>> Sea $$B_{0,X}(r) = \{ x \in X : \lVert x \rVert < r \}$$
>> la bola abierta con centro $0$ y radio $r$ en el espacio $X$, con clausura  
>> $$\overline{B_{0,X}(r)} = \{ x \in X : \lVert x \rVert \leq r \}$$
>> y sean $B_{0,Y}(r)$ y $\overline{B_{0,Y}(r)}$ los conjuntos correspondientes en el espacio $Y$.
>> - (a) 
>> 	1. Como $T$ manda $X$ sobre $Y$, para todo $y \in Y$ existe $x \in X$ tal que $T(x)=y$.  Entonces $y \in \lVert x \rVert L$.
>> 	2. Ahora probemos que si $\ell\in L$ y $\lvert t \rvert\leq 1$ entonces $t\ell\in L$  
>> 	3. Sea $\ell\in L$ entonces $\ell=Tu$ para algun $u$ tal que $\lVert u \rVert=1$
>> 	4. Luego si $\lvert t \rvert\leq 1$ entonces $\ell.t\in L$. Por que $t.\ell=T(tu)$ pero $\lVert tu \rVert\leq \lvert t \rvert\lVert u \rVert=1$ 
>> 	5. Luego si $y\in \lVert x \rVert L$ podemos tomar $n\in \mathbb{N}$ con $n\geq\lVert x \rVert$. 
>> 	6. Por lo tanto $\frac{\lVert x \rVert}{n}\ell\in L\quad\forall \ell\in L$ por que $\left\lvert  \frac{\lVert x \rVert}{n}  \right\rvert\leq 1$ 
>> 	7. Como $y\in \lVert x \rVert L$ entonces $y=\lVert x \rVert\ell$ luego $y=n \frac{\lVert x \rVert}{n}\ell$   entonces por 2. $y\in nL$ 
>> 	8. Por lo tanto podemos afirmar $$Y \subseteq \bigcup_{n=1}^\infty n\overline{L} $$
>> 	9. Y para la otra inclusion $L\subseteq Y$ entonces $\overline{L}\subseteq Y$ entonces $n\overline{L}\subseteq Y$ por que $Y$ espacio vectorial
>> 	10. Luego $$Y=\bigcup_{n=1}^{\infty} n\overline{L} $$
>> 	11. Por [[Teórico 6#^2f4c3d]] existe $N \in \mathbb{N}$ tal que $N\overline{L}$ contiene una bola abierta.  
>> 	12. En consecuencia, $\overline{L}$ también contiene una bola abierta, ya que multiplicar por un escalar distinto de cero es una aplicación continua con inversa continua. ($mult:\overline{L}\rightarrow N\overline{L}$ dada por $mult(\ell)=n\ell$)
>> 	13. Por lo tanto, existe $p \in \overline{L}$ y $\varepsilon > 0$ tal que $$p + B_{0,Y}(\varepsilon) \subseteq B_{p,Y}(\varepsilon)\subseteq \overline{L}$$
>> 	14. Sea $y \in B_{0,Y}(\varepsilon)$. Entonces $p+y\in \overline{L}$. Ademas $p-y\in \overline{L}$ por que $-y\in B_{0,Y}(\varepsilon)$ pero entonces  $y-p=-1(p-y)\in \overline{L}$ por 2. 
>> 	15. $\overline{L}$ es convexo por que imagen lineal de convexo (la bola unitaria es convexa) es convexo y clausura de convexo es convexo Entonces  $$y = \tfrac{1}{2}\big((p+y)+(y-p)\big) \in \overline{L}$$
>> 	16. Así, $\overline{L}$ contiene $B_{0,Y}(\varepsilon)$, por lo tanto $\overline{B_{0,Y}}\left(\varepsilon \right)\subseteq \overline{L}$ . Y tomamos $r=\varepsilon$ 
>> - (b)
>> 	1. Sea $y \in \overline{B_{0,Y}(r/2)}$ entonces tenemos que $\lVert 2y \rVert \leq r$ osea $2y\in B_{0,Y}(r) \subseteq \overline{L}$ (Tomando el $r$ del paso (a)) entonces por definicion de clausura existe $w_1 \in L$ tal que  $$\lVert 2y - w_1 \rVert < r/2.$$
>> 	2. Entonces $2^2 y - 2w_1 =2(2y-w_{1})\in B_{0,Y}(r)\subseteq \overline{L}$ existe $w_2 \in L$ tal que  $$\lVert 2^2 y - 2w_1 - w_2 \rVert < r/2$$
>> 	3. Continuando de esta manera, obtenemos una sucesión $\{w_n\}\subseteq L$ tal que, para todo $n \in \mathbb{N}$,  $$\Big\lVert 2^n y - 2^{n-1} w_1 - 2^{n-2}w_2 - \cdots - w_n \Big\rVert < r/2.$$
>> 	4. Por lo tanto, para todo $n \in \mathbb{N}$ $$\left\lVert y - \sum_{j=1}^n 2^{-j} w_j \right\rVert < 2^{-n-1} r.$$
>> 	5. Así $$y = \sum_{j=1}^\infty 2^{-j} w_j.$$
>> 	6. Como cada $w_n \in L$, para todo $n \in \mathbb{N}$ existe $x_n \in B_{0,X}(1)$ tal que $w_n = T(x_n)$.  
>> 	7. Además $$\sum_{j=1}^\infty\Big\lVert  2^{-j} x_j \Big\rVert \leq \sum_{j=1}^\infty 2^{-j} = \frac{1}{2}$$  
>> 	8. Entonces dado que $X$ es Banach por [[Teórico 1#^1fb9a8]] $\sum_{j=1}^\infty\  2^{-j} x_j$ converge a un $x \in \overline{B_{0,X}(1)}$. Osea $\lVert x \rVert\leq 1$   
>> 	9. Finalmente $$T(x) = T\left(\sum_{j=1}^\infty 2^{-j} x_j\right) = \sum_{j=1}^\infty 2^{-j} T(x_j)= \sum^{\infty}_{j=1}2^{-j} w_j = y$$
>> 	10. Por lo tanto, $y \in L$. Así $$\overline{B_{0,Y}(r/2)} \subseteq L$$
>> - (c) 
>> 	1. Como $T$ es inyectiva (y por hipotesis era sobreyectiva) entonces existe una única transformación lineal $S : Y \to X$ tal que $S \circ T = I_X$ y $T \circ S = I_Y$.  
>> 	2. Sea $y \in Y$ con $\lVert y \rVert \leq 1$ y definamos $w = \tfrac{r}{2}y$.  
>> 	3. Como $\lVert w \rVert \leq \tfrac{r}{2}$, tenemos $w = T(x)$ para algún $x \in X$ con $\lVert x \rVert \leq 1$ por la parte (b).  
>> 	4. Entonces $$y = T\!\left(\tfrac{2x}{r}\right).$$
>> 	5. Por lo tanto $$\lVert S(y) \rVert = \left\lVert \tfrac{2x}{r} \right\rVert \leq \tfrac{2}{r}.$$  
>> 	6. Así, $S$ es acotada. Mostrando que $T$ es acotada

^c7bd75

>[!Corollary] Teorema de Inversa Continua
>Sean $X,Y$ Banach. $T\in B(X,Y)$ biyectiva entonces $T$ es invertible y por definicion entonces $T^{-1}$ es continua.
>>[!Proof]-
>>[[Teórico 6#^c7bd75]] parte c)

>[!Example] Contraejemplo a teorema aplicacion abierta
>Si $X$ e $Y$ no son Banach el teorema en general no es cierto
>>[!Proof]-
>>- (a)
>>	1. Tomamos $S\subseteq \ell^{\infty}$ el subespacio de las sucesiones que tienen finitos terminos no nulos (es fácil ver que no es Banach) y sea $T:S\rightarrow T(S)$ dada por $$T(x_{1},x_{2},\ldots,0) = (x_{1}, \frac{x_{1}}{2}, \frac{x_{3}}{3},\ldots,0)$$
>>	2. Entonces $T$ es lineal y acotada por que $\lVert Tx \rVert\leq \lVert x \rVert$ y biyectiva pero $T^{-1}(x)=(x_{1},2x_{2},3x_{3},\ldots)$ no es acotada. (ósea no se cumple [[Teórico 6#^c7bd75]]) 
>>- (b) 
>>	1. Tomamos $Id: (C[0,1],\lVert \cdot \rVert_{\infty})\rightarrow (C[0,1],\lVert \cdot \rVert_{1})$. (Notar $(C[0,1],\lVert \cdot \rVert_{1})$ no es Banach). 
>>	2. Pero $Id$ es continua pues es acotada por que $$\begin{split} \lVert Id(f) \rVert_{1} = \lVert f \rVert_{1} = \int_{0}^{1} |f|\leq \int_{0}^{1} \lVert f \rVert_{\infty}=\lVert f \rVert_{\infty} \end{split}$$
>>	3. Ademas es claramente biyectiva
>>	4. Para ver que $Id^{-1}$ no es continua consideramos $$f_{n}(x)=\begin{cases}-2n^{2}x+2n & \text{ si } x\in \left[ 0, \frac{1}{n} \right]\\ 0 &\text{ si } x\in \left[ \frac{1}{n},1 \right] \end{cases}$$ el triángulo de altura $2n$ que va de $0$ a $\frac{1}{n}$ y después es $0$
>>	5. $\lVert f_{n} \rVert_{1}=1\quad\forall n\in \mathbb{N}$ (por que al area integrada no cambia) pero $$\lVert Id^{-1}\rVert=\sup_{\lVert f \rVert_{1}\leq 1}\lVert f \rVert_{\infty}\geq 2n\quad\forall n\in \mathbb{N}$$

^4755c6

>[!Remark] Isometria biyectiva si implica inversa continua sin usar aplicacion abierta
>Un caso donde $T$ biyectiva y continua implica $T^{-1}$ continua (sin pedir $X,Y$ Banach e usar aplicación abierta) es si $T:X\rightarrow Y$ isometria biyectiva. Por que en ese caso la inversa es continua. Probado en [[Teórico 6#^0deb40]] 

^f7be9a

