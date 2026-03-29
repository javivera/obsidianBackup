## Operadores Lineales

>[!Definition] Operador Acotado
>Sean $X$ e $Y$ ev normados, $T : X\rightarrow Y$ lineal. $T$ se dice acotada si existe un numero $k\in \mathbb{R}$ tal que $$\lVert Tx \rVert<k\lVert x \rVert\quad\forall {x}\in X$$

^b4f10c

>[!Remark] Aclaraciones
>- Continua y acotada son intercambiables por [[Teórico 4#^cae689]].
>- Acotada en transformaciones lineales no es el mismo concepto que acotada en funciones reales 
>- Llamamos $B(X,Y)$ al conjunto de todos los operadors $T : X\rightarrow Y$ acotados
>- Si $X$ e $Y$ ev son normados $B(X,Y)\subseteq L(X,Y)$

^5f85f2

>[!example] Operador lineal continuo
>Sean $a,b\in \mathbb{R}$, $k : [a,b]\times [a,b]\rightarrow \mathbb{C}$ continua y 
>$$M=\sup\{ \lvert k(s,t) \rvert:(s,t)\in [a,b]\times [a,b]  \}$$
>- Si $g\in C[a,b]$ entonces $f:[a,b]\rightarrow\mathbb{C}$ dada por $$f(s)=\int_{a}^{b}  k(s,t)g(t)dt$$ esta en $C[a,b]$
>- $K : C[a,b]\rightarrow C[a,b]$ lineal definida por $$(K(g))(s)=\int_{a}^{b} k(s,t)g(t)dt$$ entonces $K\in B(C[a,b],C[a,b])$ y $$\lVert K(g) \rVert_{\infty} \leq M(b-a)\lVert g \rVert_{\infty}$$
>>[!Proof]-
>>1. Primero probamos que $f$ definido por $f(s)=\int_a^b k(s,t)g(t)\,dt$ es continuo en $s$. 
>>2. Fijemos $g\in C[a,b]$ y sea $\varepsilon>0$. Como $k$ es continua en el compacto $[a,b]\times[a,b]$ es uniformemente continua; por tanto existe $\delta>0$ tal que si $|s-s'|<\delta$ (notar $|(s,t)-(s',t)|=|s-s'|$ por eso vale para cualquier $t$ fijo)  entonces
>>   $$|k(s,t)-k(s',t)|<\frac{\varepsilon}{(b-a)\|g\|_\infty}\quad\forall t\in [a,b] $$ 
>>   Entonces, para tales $s,s'$,
>>   $$\begin{align}|f(s)-f(s')|& =\left|\int_a^b (k(s,t)-k(s',t))g(t)dt\right| 
>>   \\ & \leq \frac{\epsilon}{(b-a)\lVert g \rVert_{\infty}}\int_a^b |g(t)|dt
>>   \\& \leq  \frac{\epsilon}{(b-a)\lVert g \rVert_{\infty}}\lVert g \rVert _{\infty}(b-a)\\ & <\epsilon\end{align}$$ 
>>   Asi mostramos $f$ es continua.
>>3. Para todo $s\in[a,b]$ se tiene
>>   $$|(K(g))(s)|=\left|\int_a^b k(s,t)g(t)\,dt\right|
>>   \le \int_a^b |k(s,t)|\,|g(t)|\,dt
>>   \le \int_a^b M\|g\|_\infty\,dt = M(b-a)\|g\|_\infty.$$ 
>>   Tomando supremo en $s$ obtenemos $\|K(g)\|_\infty\le M(b-a)\|g\|_\infty$, por lo que $K$ es acotado y $K\in B(C[a,b],C[a,b])$.

^33cdb2

>[!Theorem] Dominio dimension finita asegura continuidad
>Sea $X$ espacio vectorial normado de dimension finita, $Y$ espacio vectorial cualquiera y $T : X\rightarrow Y$ lineal. Entonces $T$ es continua
>>[!Proof]-
>>1. Sea $\{e_1,\dots,e_n\}$ una base de $X$. Todo $x\in X$ se escribe de forma única como $x=\sum_{j=1}^n x_j e_j$
>>2. Definamos la norma auxiliar en coordenadas $\lVert x \rVert_c = \sum_{j=1}^n |x_j|$. Esta es una norma en $X$ y, por ser $X$ de dimension finita, todas las normas son equivalentes; por tanto existe $C>0$ tal que $\lVert x \rVert_* \le C\lVert x \rVert_X$ para todo $x\in X$.
>>3. Por linealidad sucede $T(x)=\sum_{j=1}^n x_j T(e_j).$
>>4. Aplicando la desigualdad triangular obtenemos
>>   $$\lVert T(x) \rVert_Y \le \sum_{j=1}^n |x_j|\,\lVert T(e_j) \rVert_Y \le \Big(\max_{1\le j\le n} \lVert T(e_j) \rVert_Y\Big)\sum_{j=1}^n |x_j| = C_2\lVert x \rVert_c\leq C_{2}C\lVert x \rVert_{X}$$
>>donde $C_2=\max_{1\le j\le n} \lVert T(e_j) \rVert_Y$.
>>5. Por lo tanto si $K=C_2 C$ tenemos $\lVert T(x) \rVert_Y \le K\lVert x \rVert_X\quad \forall x\in X$.
>>6. Por tanto $T$ es acotada y en consecuencia continua.

^a48ff5

>[!Example] Codominio con dimension finita no asegura continuidad 
>Sea $T:X\rightarrow Y$ con $Y$ dimension finita, no necesariamente es continuo el operador
>>[!Proof]-
>>1. Sea $T:\mathcal{P}\rightarrow\mathbb{C}$ dado por $T(p)=p'(1)$    
>>2. El resto sale de forma analoga a [[Teórico 4#^63dcb1]]

^035ee6

>[!Lemma] $T$ continua entonces $Nu(T)$ es cerrado
>Si $X$ e $Y$ son normados $T : X\rightarrow Y$ lineal continua entonces $Nu(T)$ es cerrado
>>[!Proof]-
>>3. $Nu(T)=\{ x\in X:T(x)=0 \}$ y $\{ 0 \}$ es cerrado en $Y$ (por que es completo)
>>4. $T$ continua y preimagen de cerrado es cerrado

^e19482

>[!Definition] Grafico de operador lineal
>$X$ e $Y$ normados $T : X\rightarrow Y$ lineal. Llamamos *grafico* de $T$ al subespacio $\mathcal{G}$ de $X\times Y$ definido por $$\mathcal{G}=\{ (x,Tx):x\in X \}$$

^e3bbe2

>[!Lemma] Grafico es cerrado
>$X$ e $Y$ normados $T : X\rightarrow Y$ lineal e continua entonces $\mathcal{G}$ es cerrado
>>[!Proof]-
>>1. Sea $\{(x_n,y_n)\}$ una sucesión en $\mathcal{G}(T)$ que converge a $(x,y)$ en $X\times Y$. 
>>2. Por lo tanto $$\lVert x_{n}-x \rVert_{X}+\lVert y_{n}-y \rVert_{Y}=\lVert (x_{n},y_{n})-(x,y) \rVert\leq \epsilon$$ Entonces $\{x_n\}\rightarrow x$ en $X$ y $\{y_n\}\rightarrow y$ en $Y$.
>>3. Como $(x_n,y_n)\in\mathcal{G}(T)$ para todo $n$, se tiene $y_n=T(x_n)$ para todo $n$. Como $T$ es continua, tomando límites obtenemos
>>   $y=\lim_{n\to\infty} y_n=\lim_{n\to\infty} T(x_n)=T(x)$.
>>4. Por tanto $(x,y)=(x,T(x))\in\mathcal{G}(T)$ y así $\mathcal{G}(T)$ es cerrado.

^5463d1

>[!Lemma] $B(X,Y)$ es subespacio lineal de $L(X,Y)$  
>$X$ e $Y$ normados. Sean $S,T \in B(X,Y)$ con $\lVert Sx \rVert\leq k_{1} \lVert x \rVert$ y $\lVert Tx \rVert\leq k_{2}\lVert x \rVert$ entonces $\forall x\in X$ y $\lambda\in \mathbb{F}$ vale
>- (a) $\lVert (S+T)x \rVert \leq(k_{1}+k_{2})\lVert x \rVert$
>- (b) $\lVert (\lambda S)x \rVert\leq\lvert \lambda \rvert k_{1}\lVert x \rVert$
>- (c) $B(X,Y)$ es un subespacio lineal de $L(X,Y)$  
>>[!Proof]-
>>- (a) Sea $x\in X$. Entonces $$\lVert (S+T)x \rVert = \lVert Sx+Tx \rVert \leq \lVert Sx \rVert + \lVert Tx \rVert \le k_{1}\lVert x \rVert + k_{2}\lVert x \rVert = (k_{1}+k_{2})\lVert x \rVert$$
>>- (b) Sea $\lambda\in\mathbb{F}$. Entonces $\lVert (\lambda S)x \rVert = \lVert \lambda Sx \rVert = |\lambda|\,\lVert Sx \rVert \le |\lambda| k_{1} \lVert x \rVert.$
>>- (c) Como la suma y la multiplicación por escalares conservan la linealidad y las desigualdades anteriores muestran acotación para $S+T$ y $\lambda S$, se sigue que $S+T,\ \lambda S\in B(X,Y)$. Por tanto $B(X,Y)$ es un subespacio lineal de $L(X,Y)$.

^368972

## La norma de los operadores Lineales Acotados 

>[!Lemma] Una norma para $B(X,Y)$ 
>Sean $X$ e $Y$ normados. Si $\lVert \cdot \rVert:B(X,Y)\rightarrow\mathbb{R}$ esta definida por $$\lVert T \rVert =\sup\{ \lVert Tx \rVert :\lVert x \rVert \leq 1\}$$
>Entonces $\lVert \cdot \rVert$ es una norma en $B(X,Y)$
>>[!Proof]-
>>- Norma de 0 $\lVert T \rVert=0 \iff \lVert Tx \rVert=0 \quad \forall x\in X\iff Tx=0\quad\forall x\in X\iff T \text{ es la transformacion lineal 0}$
>>-  Saca escalar
>>	1. $\lVert \lambda T \rVert=\sup \{ \lVert \lambda Tx \rVert:\lVert x \rVert\leq 1 \}=\lvert \lambda \rvert\sup \{ \lVert Tx \rVert \}=\lvert \lambda \rvert\lVert T \rVert$ 
>>- Desigualdad Triangular:
>>	1. Notar que $\left\lVert  T\left( \frac{x}{\lVert x \rVert} \right)  \right\rVert\leq\lVert T \rVert$ (Porque $\lVert T \rVert$ es supremo). Luego $\lVert Tx \rVert\leq\lVert T \rVert\lVert x \rVert$
>>	2. $\lVert (S+T)(x) \rVert\leq\lVert Sx \rVert+\lVert Tx \rVert \leq\lVert S \rVert\lVert x \rVert+\lVert T \rVert\lVert x \rVert = (\lVert S\rVert +\lVert T \rVert)\lVert x \rVert$
>>	3. Usando supremo de ambos lados $\lVert S+T \rVert\leq\lVert S \rVert+\lVert T \rVert$

^9e4b80

>[!Remark] $\lVert Tx \rVert\leq \lVert T \rVert\lVert x \rVert$ 
>Es directo probar que $$\lVert Tx \rVert \leq \lVert T \rVert \lVert x \rVert $$
>>[!Proof]-
>>1. Por definicion [[Teórico 5#^9e4b80]] tenemos que $\left\lVert  T\left( \frac{x}{\lVert x \rVert} \right)  \right\rVert\leq \lVert T \rVert$
>>2. Entonces $\lVert T(x) \rVert\leq \lVert T \rVert\lVert x \rVert$ 

^9f7911

>[!Remark]
>Entonces $B(X,Y)$ es un espacio vectorial normado

>[!Lemma] Resultado de norma en $B(X,Y)$ 
>$\lVert T \rVert=\sup\{ \lVert Tx \rVert:\lVert x \rVert\leq {1} \}=\sup\{ \lVert Tx \rVert :\lVert x \rVert=1\}$
>>[!Proof]-
>>3. Sea $\beta= \sup\{ \lVert Tx \rVert:\lVert x \rVert\leq {1} \}$ y $\alpha =\sup\{ \lVert Tx \rVert :\lVert x \rVert=1\}$ 
>>4. $(\beta \geq\alpha )$ Trivial
>>5. $(\leq)$ Supongamos $\alpha < \beta$
>>6. Entonces $\exists x_{0}$ con $\lVert x_{0} \rVert\leq 1$ tal que $\beta > \lVert Tx_{0} \rVert>\alpha$
>>7. Entonces $\alpha\geq\left\lVert  T \frac{x_{0}}{\lVert x_{0} \rVert}  \right\rVert=\frac{\lVert Tx_{0} \rVert}{\lVert x_{0} \rVert}\geq\lVert Tx_{0} \rVert>\alpha$ (Por def de supremo y $\lVert x_{0} \rVert \leq 1$) Absurdo

^56d4e9

>[!Remark] Norma del operador es infimo de las constantes de cota
>Notar que del [[Teórico 4#^cae689]] se desprende
>$$\sup\{ \lVert Tx \rVert :\lVert x \rVert \leq 1 \}=\inf\{ k: \lVert Tx \rVert \le k\lVert x \rVert\quad \forall x\in X\}$$
>>[!Proof]-
>>1. Sea $S=\{k\ge 0:\ \lVert Tx \rVert\le k\lVert x \rVert\quad\forall x\in X\}$. 
>>2. Si $k\in S$ y $\lVert x \rVert\le 1$, entonces $\lVert Tx \rVert\le k$. Por tanto $\sup_{\lVert x \rVert\le 1}\lVert Tx \rVert\le k$. 
>>3. Como esto vale para todo $k\in S$, se obtiene $\lVert T \rVert\le \inf S$.
>>4. Por [[Teórico 5#^9f7911]] sabemos $\lVert Tx \rVert\le \lVert T \rVert\lVert x \rVert$ para todo $x$, es decir $\lVert T \rVert\in S$, luego $\inf S\le \lVert T \rVert$.
>>5. Combinando (1) y (2) se concluye $\lVert T \rVert=\inf S$

^cf6f23

>[!example] Ejemplo de norma de un operador
>$T : C_{\mathbb{F}}[0,1]\rightarrow \mathbb{F}$ lineal definido como $$T(f)=f(0)$$
>entonces $\lVert T \rVert=1$
>>[!Proof]-
>>10. Ya probamos en [[Teórico 4#^9798e1]] que $\lvert T(f) \rvert\leq 1\lVert f \rVert$ 
>>11. $\lVert T \rVert=\inf\{ k:\lVert T(f) \rVert \leq k\lVert f \rVert: \forall f\in C_{\mathbb{F}}[0,1]\}\leq 1$
>>12. Por otro lado sea $g:[0,1]\rightarrow\mathbb{C}$ esta definida como $g(x)=1$ entonces $g\in C_{\mathbb{C}}[0,1]$
>>13. $\lVert g \rVert=\sup\{ \lvert g(x) \rvert:x\in [0,1] \}=1$
>>14. $\lvert T(g) \rvert=\lvert g(0) \rvert=1$ (Todo por definicion de $T$)
>>15. $1=\lvert T(g) \rvert\leq\lVert T \rVert\lVert g \rVert=\lVert T \rVert$
>>16. Finalmente $\lVert T \rVert=1$
>
>>[!Proof]-
>>17. Notar que $\lVert T(f) \rVert= \lVert f(0) \rVert$
>>18. Entonces $$\lVert T \rVert=\sup_{ \lVert f \rVert_{\infty}=1}\{ \lvert T(f)\rvert \}=\sup_{\lVert f \rVert_{\infty} =1}\{ \lvert f(0) \rvert  \}\leq 1$$
>>19. Sea $g[0,1]\rightarrow\mathbb{C}$ tal que $g(x)=1$ entonces obviamente $\lVert g \rVert_{\infty}=1$ osea $$\lvert Tg \rvert\in \{ \lvert Tf \rvert:\lVert f \rVert_{\infty}=1 \}$$ 
>>20. Ademas $\lVert Tg \rVert=\lvert g(0) \rvert=1$ por lo tanto $$\lVert T \rVert=\sup_{\lVert f \rVert=1}\{ \lVert Tf \rVert \}\geq \lVert Tg \rVert=1$$    

^782983

>[!Theorem] Extension de operador lineal con dominio denso
>Sea $X$ un normado y sea $W$ un subespacio denso de $X$. Sea $Y$ un Banach y $S\in B(W,Y)$
>- (a) Sea $x\in X$ y $\{ x_{n} \},\{ y_{n} \}$ sucesiones en $W$ tales que $x_{n}\rightarrow x$ e $y_{n}\rightarrow x$ entonces $\{ S(x_{n}) \}$ y $\{ S(y_{n}) \}$ ambas convergen y $\lim_{ n \to \infty }S(x_{n})=\lim_{ n \to \infty }S(y_{n})$
>- (b)  Existe un $T\in B(X,Y)$ tal que $\lVert T \rVert=\lVert S \rVert$ y $Tx=Sx\quad\forall x\in W$
>>[!Proof]-
>>- (a) 
>>	1. Como $x_{n}$ converge es de Cauchy. Luego $\lVert Sx_{n}-Sx_{m} \rVert=\lVert S(x_{n}-x_{m}) \rVert\leq \lVert S \rVert\lVert x_{n}-x_{m} \rVert\rightarrow 0$ entonces $Sx_{n}$ es de Cauchy
>>	2. Luego como $Sx_{n}$ es de Cauchy e $Y$ Banach entonces $Sx_{n}$ convege (analogo $Sy_{n}$ ) 
>>	3. Además por hipótesis $x_{n}-y_{n}\rightarrow0$ luego $\lVert Sx_{n}-Sy_{n} \rVert\leq \lVert S \rVert\lVert x_{n}-y_{n} \rVert\rightarrow0$  Mostrando $\lim\limits_{ n \to \infty }Sx_{n}-Sy_{n}=0$ osea $\lim\limits_{ n \to \infty }Sx_{n}=\lim\limits_{ n \to \infty }Sy_{n}$ 
>>- (b) 
>>- Existencia
>>	1. Dado $x\in X$ tenemos una sucesion $\{ x_{n} \}\subseteq W$ tal que $x_{n}\rightarrow x$ (por densidad)
>>	2. Entonces podemos definir $T:X\rightarrow Y$ de la siguiente manera. $$Tx=\lim\limits_{ n \to \infty }S(x_{n})$$
>>	3. Por (a) esta es una buena defincion, por que el limite es independiente de la eleccion de sucesion que tomemos.
>>	4. Veamos que $T$ es lineal. Sean $x,y\in X$ y $\lambda\in \mathbb{F}$ entonces tenemos $\{ x_{n} \}$ y $\{ y_{n} \}$ que convergen respectivamente (por densidad)
>>	5. Entonces $\lim\limits_{ n \to \infty }x_{n}+y_{n}=x+y$ y $\lim\limits_{ n \to \infty }\lambda x_{n}=\lambda x$  
>>	6. Luego $$\begin{align}T(x+y)& =\lim\limits_{ n \to \infty } S(x_{n}+y_{n})\\ & = \lim\limits_{  n \to \infty } Sx_{n}+Sy_{n}\quad(\text{Linealidad de }S )\\& = \lim\limits_{ n \to \infty }Sx_{n}+\lim\limits_{ n \to \infty } Sy_{n}\\&=Tx+Ty \end{align}$$
>>	7.  Y por otro lado $$T(\lambda x)=\lim\limits_{ n \to \infty } S(\lambda x_{n})=\lambda\lim\limits_{ n \to \infty } Sx_{n}=\lambda Tx$$
>>- Misma norma
>>	1.  Sea $x\in X$  unitario. Y $x_{n}\rightarrow x$ sucesion de $W$ entonces $\lVert x_{n} \rVert\rightarrow\lVert x \rVert$     
>>	2.  Ahora si tomamos $w_{n}=\frac{x_{n}}{\lVert x_{n} \rVert}$ seguimos teniendo que $w_{n}$ esta en $W$ (por ser subespacio) y ademas $\lim\limits_{ n \to \infty }w_{n}=\lim\limits_{ n \to \infty } \frac{x_{n}}{\lVert x_{n} \rVert}= \frac{x}{\lVert x \rVert}=x$. Y notar $\lVert w_{n} \rVert=1$  
>>	3. Entonces $$\lVert Tx \rVert =\lim\limits_{ n \to \infty } \lVert Sw_{n} \rVert \leq \sup\{ \lVert Sw_{n} \rVert :n\in \mathbb{N}  \}\leq \sup\{ \lVert S \rVert \lVert w_{n} \rVert :n\in \mathbb{N}  \}=\lVert S \rVert $$
>>	(el ultimo igual es por que $\lVert w_{n} \rVert=1$ )
>>	4. Entonces $T$ es acotado y ademas $\lVert T \rVert\leq \lVert S \rVert$ (usando supremos de ambos lados)
>>	5. Por otro lado si $w\in W$ tomamos la sucesion constantemente $w$ que converge a $w$ y notamos $$Tw=\lim\limits_{ n \to \infty } Sw=Sw$$
>>	6. Entonces $\lVert Sw \rVert=\lVert Tw \rVert\leq \lVert T \rVert\lVert w \rVert$ entonces $\lVert S \rVert\leq \lVert T \rVert$ 
>>	7. Por lo tanto $\lVert S \rVert=\lVert T \rVert$ 

^33d528

>[!Definition] Isometria
>Sean $X$ e $Y$ normados $T\in L(X,Y)$. Decimos que $T$ es una isometria si $$\lVert Tx \rVert=\lVert x \rVert\quad\forall x\in X$$
>En todo espacio normado existe por lo menos una isometria

^dea50f

>[!Remark] Isormorfismo isometrico
>1. $T$ isometria $\Rightarrow$ $T$ continua (acotada) e inyectiva
>2. Si ademas $T$ sobreyectiva entonces es biyectiva lo nombramos isormofismo isometrico
>3. En dim finita toda isometria es biyectiva en dim infinita no necesariamente

^292c96

>[!Example] Isometria no biyectiva
> $T : \ell^{2}\rightarrow \ell^{2}$ dada por $$T(x_{1},x_{2},\ldots)=(0,x_{1},x_{2},\ldots)$$
> es una isometria (normalmente se la nombra "unilateral shift"). No es biyectiva

^5df083

>[!Lemma] $T$ isometria implica acotada y unitaria
>$X$ e $Y$ normados $T\in B(X,Y)$. Si $T$ es una isometria entonces $T$ acotada y $\lVert T \rVert=1$

^e8706f

>[!Remark] $T$ acotada y unitaria no implica isometria
>La reciproca no necesariamente vale [[Teórico 5#^782983]] no cumple que $|T(h)|=\lVert h \rVert\quad\forall h\in C_{\mathbb{F}}[0,1]$. Por ejemplo si tomamos $h(x)=x$  

^35ead0

>[!Theorem] Hilbert con BON es isometrico a $\ell^{2}$ 
>Sea $\mathcal{H}$ Hilbert de dimension infinita sobre $\mathbb{F}$ con una base ortonormal de hilbert $\{ e_{n} \}$. Entonces existe un isomorfismo isometrico $T:\mathcal{H}\rightarrow\ell^{2}_{\mathbb{F}}$ tal que $T(e_{n})=\tilde{e_{n}}\quad\forall n\in \mathbb{N}$ (Aca $\{ \tilde{e_{n}} \}$ seria base de Hilbert de $\ell^{2}$)
>>[!Proof]-
>>1. Sea $x\in\mathcal{H}$. Por ser $\{e_n\}$ una base ortonormal [[Teórico 3#^f63eb1]] se tiene $$x=\sum_{n=1}^{\infty} (x,e_n)e_n.$$ 
>>2. Si definimos $\tilde{e}_{n}=(x,e_n)$, entonces $\{\tilde{e}_{n}\}\in\ell^{2}_{\mathbb{F}}$ por [[Teórico 3#^1a2dbf]]. 
>>3. De este modo podemos definir una transformación lineal $$T:\mathcal{H}\to\ell^{2}_{\mathbb{F}},\qquad T(x)=\{\tilde{e}_{n}\}_{n=1}^{\infty}.$$ 
>>4. Luego $$\lVert T(x) \rVert^{2}=\sum_{n=1}^{\infty} |\tilde{e}_n|^{2}=\sum_{n=1}^{\infty} |(x,e_n)|^{2}=\lVert x \rVert^{2},$$
>>para todo $x\in\mathcal{H}$ (por [[Teórico 3#^f63eb1]] Parseval). 
>>5. Por tanto $T$ es una isometría y, en particular, $T(e_n)=\tilde{e}_{n}$ para todo $n\in\mathbb{N}$.
>>6. Finalmente, si $\{\beta_n\}\in\ell^{2}_{\mathbb{F}}$, por [[Teórico 3#^4e7cf9]] la serie $\sum_{n=1}^{\infty} \beta_n e_n$ converge a un punto $y\in\mathcal{H}$. Como $(y,e_n)=\beta_n$ se tiene $T(y)=\{\beta_n\}$, de modo que $T$ es sobreyectiva. En consecuencia $T$ es un isomorfismo isométrico de $\mathcal{H}$ sobre $\ell^{2}_{\mathbb{F}}$.
>

^230ff2

>[!Corollary] Hilbert isometricos a $\ell^{2}$ 
>Todo $\mathcal{H}$ Hilbert sobre $\mathbb{F}$ de dimension infinita y separable es isometricamente isomorfo a $\ell^{2}_{\mathbb{F}}$
>>[!Proof]-
>>1. Como es separable tiene [[Teórico 3#^a44e0c]] entonces sale por [[Teórico 5#^230ff2]]

^c605b5

## El espacio $B(X,Y)$ y el espacio Dual

>[!Theorem] $Y$ Banach entonces $B(X,Y)$ Banach
>Si $X$ normado e $Y$ Banach entonces el espacio normado $B(X,Y)$ es Banach
>>[!Proof]-
>>1. Para cada $x\in X$ y para cualesquiera $m,n\in\mathbb{N}$ se cumple
>>$$\|T_n x-T_m x\|=\|(T_n-T_m)(x)\|\le\|T_n-T_m\|\,\|x\|.$$ 
>>Como $\{T_n\}$ es Cauchy en $B(X,Y)$, el término $\|T_n-T_m\|$ tiende a $0$ cuando $n,m\to\infty$, por lo que $\{T_n x\}$ es una sucesión de Cauchy en $Y$.
>>2. Puesto que $Y$ es Banach (completo), para cada $x\in X$ la sucesión $\{T_n x\}$ converge en $Y$. Definimos entonces la aplicación $T:X\to Y$ por
>>$$T(x):=\lim_{n\to\infty} T_n x.$$ 
>>3. $T$ es lineal. Sea $x,y\in X$,
>>$$\begin{align}T(x+y)&=\lim_{n\to\infty}T_n(x+y)\\&=\lim_{n\to\infty}(T_n x+T_n y)\\&=\lim_{n\to\infty}T_n x+\lim_{n\to\infty}T_n y\\&=T(x)+T(y)\end{align}$$
>>y de forma análoga se comprueba la propiedad para multiplicación por escalares.
>>4. Notar que si $\{T_n\}$ una sucesión de Cauchy en $B(X,Y)$. Entonces $$\lVert T_{n} \rVert\leq \lVert T_{n}-T_{N_{0}} \rVert+\lVert T_{N_{0}} \rVert\leq k + \lVert T_{N_{0}} \rVert=M_{0}\quad\forall n> N_{0}$$
>>(Notar $m$ esta fijo) y para los finitos restantes tenemos un $M_{1}$. Luego tomamos $M$ como el mas grande entre $M_{0},M_{1}$ y terminamos afirmando que existe $M>0$ tal que $\|T_n\|\le M$ para todo $n\in\mathbb{N}$
>>5. Para todo $x\in X$ se tiene
>>$$\|T x\|=\lim_{n\to\infty}\|T_n x\|\le\lim_{n\to\infty}\|T_n\|\,\|x\|\le M\|x\|,$$
>>(Usando paso 1. en la desigualdad) por lo tanto $T\in B(X,Y)$.
>>6. Finalmente, mostramos que $T_n\to T$ en la norma del operador. Dado $\varepsilon>0$, como $\{T_n\}$ es Cauchy existe $N$ tal que para todos $m,n\ge N$ se cumple $\|T_n-T_m\|<\varepsilon/2$. 
>>7. Fijado $n\ge N$ y tomando límite en $m$, para todo $x$ con $\|x\|\le1$ tenemos
>>$$\|T_n x - T x\|=\lim_{m\to\infty}\|T_n x - T_m x\|\leq \lim\limits_{ m \to \infty } \lVert T_{n}-T_{m} \rVert \lVert x \rVert \le\varepsilon/2.$$ 
>>Por tanto
>>$$\|T_n-T\|=\sup_{\|x\|\le1}\|T_n x - T x\|\le\varepsilon/2<\varepsilon$$
>>para todo $n\ge N$, lo que muestra que $T_n\to T$ en $B(X,Y)$. Con esto queda probado que $B(X,Y)$ es completo, es decir, un espacio Banach.

^7e0978

>[!Definition] Espacio dual y funcionales lineales
>Sea $X$ normado sobre $\mathbb{F}$. El espacio $B(X,\mathbb{F})$ es llamado *espacio dual* de $X$ y se denota $X'$ y los $T\in B(X,\mathbb{F})$ son llamados funcionales lineales

^f11e6e

>[!Corollary] Dual es Banach
>Si $X$ es normado entonces $X'$ es Banach
>>[!Proof]-
>>$\mathbb{F}$ es Banach entonces usamoss [[Teórico 5#^7e0978]]

^d90fc3

>[!Theorem] Este no ea en el libro
>1. Si $c=\{ c_{n} \}\in \ell^{\infty}$ y $\{ x_{n} \}\in \ell^{1}$ entonces $\{ c_{n}x_{n} \}\in \ell^{1}$ y si $f_{c}:\ell^{1}\rightarrow\mathbb{F}$ esta definida como $f_{c}(x_{n})=\sum^{\infty}_{n=1}c_{n}x_{n}$ entonces $f_{c}\in (\ell^{1})'$ con $\lVert f_{c} \rVert\leq\lVert c \rVert_{\infty}$
>2. Si $f\in (\ell^{1})'$ entonces existe un $c\in \ell^{\infty}$ tal que $f=f_{c}$ y $\lVert c \rVert_{\infty}\leq\lVert f \rVert$
>3. El espacio $(\ell^{\infty})'$ es isometricamente isomorfo a $\ell^{\infty}$
>>[!Proof]
>>1. Se desprende de [[Teórico 4#^a511bc]]
>>2. 

^2f2a0d
