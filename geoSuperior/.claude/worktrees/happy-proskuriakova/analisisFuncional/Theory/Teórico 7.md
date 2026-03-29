---
dateCreated: 2024-09-29,23:50
---
>[!Remark]
>$X$ normado tal que $(X,\lVert \cdot \rVert_{1})$ y $(X,\lVert \cdot \rVert_{2})$  son Banach y vale $\lVert x \rVert_{2}\leq c\lVert x \rVert_{1}\quad\forall x\in X$ entonces las normas son equivalentes 
>>[!Proof]-
>>1. Sea $Id:(X,\lVert \cdot \rVert_{1})\rightarrow(X,\lVert \cdot \rVert_{2})$ es biyectiva y continua por hipotesis $$\lVert Id(x) \rVert_{2}=\lVert x \rVert_{2}\leq c\lVert x \rVert_{1}$$  
>>2. Luego por [[Teórico 6#^c7bd75]] la inversa es continúan ósea $$\lVert Id^{-1}(x) \rVert=\lVert x \rVert_{1}\leq C\lVert x \rVert_{2}\quad\forall x\in X$$

^bdb6e2

>[!Corollary] Teorema del grafico cerrado
>Sean $X$ e $Y$ Banach y $T : X\rightarrow Y$ entonces
>$$\mathcal{G}(T) \text{ cerrado } (\text{ osea grafico cerrado })\Rightarrow T \text{ continua}$$
>>[!Proof]-
>>1. $X\times Y$ es Banach. Por hipotesis $\mathcal{G}(T)$ es cerrado. Y cerrado dentro de Banach es Banach. Entonces $\mathcal{G}(T)$ es Banach 
>>2. Sea $R:\mathcal{G}(T)\rightarrow X$ dada por $R(x,Tx)=x$ entonces $R$ es biyectiva y lineal
>>3. $\lVert R(x,Tx) \rVert=\lVert x \rVert\leq \lVert x \rVert+\lVert Tx \rVert=\lVert (x,Tx) \rVert$ (Esto ultimo por definicion de norma)
>>4. Luego $R$ es continua
>>5. Por lo tanto $R^{-1} : X\rightarrow Gr(f)$ es continua ([[Teórico 6#^c7bd75]]) por lo tanto existe $\lVert R^{-1} \rVert$ 
>>6. Ahora $\forall x\in X$ $$\lVert Tx \rVert \leq \lVert x \rVert +\lVert Tx \rVert =\lVert (x,Tx) \rVert =\lVert R^{-1} x \rVert \leq \lVert R^{-1}  \rVert \lVert x \rVert $$
>>7. Entonces $T$ continua

^c58dff

>[!Lemma] 
>$X$ e $Y$ normados $T\in B(X,Y)$ inversible entonces
>$$\lVert Tx \rVert \geq \lVert T^{-1}  \rVert^{-1} \lVert x \rVert \quad\forall x\in X$$
>>[!Proof]-
>>$x=T^{-1}(Tx)\Rightarrow \lVert x \rVert\leq \lVert T^{-1} \rVert\lVert Tx \rVert$

^da78a8

>[!Theorem] Banach y $\lVert Tx \rVert\geq\alpha \lVert x \rVert$ entonces $Im(T)$ cerrado
>$X$ Banach, $Y$ normado $T\in B(X,Y)$ si $\exists \alpha>0$ tal que $\lVert Tx \rVert\geq\alpha\lVert x \rVert\quad\forall x\in X$ entonces $Im(T)$ es cerrado
>>[!Proof]-
>>1. Sea $\{ y_{n} \}\subseteq Im(T)$ tal que $y_{n}\rightarrow y$ en $Y$ entonces $\exists x_{n}\in X$ tal que $Tx_{n}=y_{n}$ 
>>2. $\{ y_{n} \}$ coverge entonces es de Cauchy $\lVert y_{n}-y_{m} \rVert=\lVert T(x_{n}-x_{m}) \rVert\geq\alpha\lVert x_{n}-x_{m} \rVert$
>>3. Entonces $\{ x_{n} \}$ es de Cauchy luego converge $x_{n}\rightarrow x\in X$ ($X$ Banach) entonces $Tx\in Im(T)$
>>4. Usando que $T$ es continua $$y = \lim\limits_{ n \to \infty }y_{n}=\lim\limits_{ n \to \infty }Tx_{n}= Tx$$
>>5. Osea $y\in Im(T)$ 

^6e0039

>[!Theorem] Caracterizacion de $T$ inversible
>$X,Y$ Banach $T\in B(X,Y)$ entonces son equivalentes:
>1. $T$ es inversible
>2. $Im(T)$ es denso en $Y$ y $\exists \alpha>0$ tal que $\lVert Tx \rVert\geq\alpha\lVert x \rVert$
>>[!Proof]-
>> - (a) $\Rightarrow$ (b). Como es inversible entonces es biyectivo por lo tanto $Im(T)=Y$  y [[Teórico 7#^da78a8]]
>> - (b) $\Rightarrow$ (a). 
>> 	1. Por hipótesis $\operatorname{Im}(T)$ es denso en $Y$ y como $\operatorname{Im}(T)$ es cerrado (por [[Teórico 7#^6e0039]]) tenemos que $\operatorname{Im}(T)=Y$.  Osea $T$ sobreyectiva
>> 	2. Si $x \in \ker(T)$ entonces $Tx=0$, de modo que  
>> 	$$0 = \lVert Tx \rVert \geq \alpha \lVert x \rVert.$$  
>> 	3. Así, $x=0$. Por lo tanto $\ker(T)=\{0\}$.  Osea $T$ inyectiva 
>> 	4. En consecuencia, considerando $X,Y$ son Banach,  $T$ es invertible por [[Teórico 6#^c7bd75]] c)

^5e1471

> [!corollary]
>Sean $X,Y$ Banach $T\in B(X,Y)$
>$$T \text{ no es inversible }\iff \overline{Im(T)}\neq Y \quad \land\quad\exists \{ x_{n} \}\subseteq X \text{ con } \lVert x_{n} \rVert =1\quad\forall n\in \mathbb{N} \ / \ Tx_{n}\rightarrow0$$
>

^e2cb3f

>[!Remark]
>Aplicacion del corolario
>$f \in C[0,1]$. Sea $$T_{f} : L^{p}[0,1]\rightarrow L^{p}[0,1]\quad 1\leq p<\infty$$ 
>dada por $$T_{f}(u)=f.u$$
>Si $f(t)=t$ entonces $T_{f}$ es no inversible. 
>>[!Proof]-
>>1. Sea $u_{n}=n^{\frac{1}{p}}\chi_{\left[ 0,\frac{1}{n} \right]}\in L^{p}[0,1]$ luego $$\lVert u_{n} \rVert_{p}^{p}=\int_{0}^{1}\left( n^{\frac{1}{p}} \chi_{[ 0, \frac{1}{n} ]}\right)^{p}=1\quad\forall n\in \mathbb{N}$$
>>2. Ademas $$\lVert T_{f}(u_{n}) \rVert_{p}^{p}=\int \left(f.n^{ \frac{1}{p}}\chi_{\left[ 0, \frac{1}{n} \right]}\right)^{p}dt = n\int_{0}^{ \frac{1}{n}}f^{p}=\frac{n}{(p+1)n^{p+1}}\longrightarrow 0\quad(n\rightarrow \infty)$$
>>3. Entonces por [[Teórico 7#^e2cb3f]]  $T$ es no inversible

^52a803

>[!Lemma] Preparacion Banach-Steinhaus
>$S\neq \emptyset$, $X$ normado sobre $\mathbb{F}$ defino
>$$F(S,X)=\{ f:S\rightarrow X \} \text{ (espacios vectorial sobre } \mathbb{F})$$
>$$F_{b}(S,X)=\{ f : S\rightarrow X \ \ | \ \ \exists k\geq0 \text{ tal que }\ \lVert f(s) \rVert \leq k\quad\forall s\in S\}$$
>Entonces $\lVert f \rVert_{b}=\sup\{ \lVert f(s) \rVert:s\in S \}$ es norma y si $X$ es Banach entonces $F_{b}(S,X)$ es Banach 
>>[!Proof]-
>>1. Norma fácil. Ver
>>2. Supongamos $X$ Banach. $\{ f_{n} \}\subseteq F_{b}(S,X)$ de Cauchy
>>3. Entonces $\lVert f_{n}-f_{m} \rVert_{b}<\epsilon \quad n,m\geq N_{0}$ 
>>4. Entonces $\lVert f_{n}(s)-f_{m}(s) \rVert\leq \lVert f_{n}-f_{m} \rVert_{b}\leq \epsilon$ luego $\{ f_{n}(s) \}$ es de Cauchy en $X$ entinces converge 
>>5. Definimos $f(s)=\lim\limits_{ n \to \infty }f_{n}(s)$ entonces $\lVert f_{n}(s)-f(s) \rVert\leq \epsilon\quad\forall s\in S$ 
>>6. Como $f_{n}\in F_{b}$ entonces $\lVert f_{n}(s) \rVert\leq k\quad\forall s\in S$ por definicion luego  $$\lVert f(s) \rVert\leq \epsilon+\lVert f_{n}(s) \rVert<\epsilon+k\quad\forall s\in S$$ Ósea $f\in F_{b}(S,X)$
>>7. Finalmente $\lVert f_{n}-f \rVert_{b}=\lim\limits_{ m \to \infty }\lVert f_{n}-f_{m} \rVert_{b}\leq \varepsilon \quad\forall n>N_{0}$ osea $f_{n}\rightarrow f$ 

^df9755

>[!Theorem] Acotado uniforme de Banach-Steinhaus
>Sean $U,X$ Banach. Sea $S\neq \emptyset$ y para cada $s\in S$ sea $T_{s}\in B(U,X)$ entonces si para cada $u\in U$ el conjunto $\{ T_{s}(u):s\in S \}$ es acotado ($\lVert T_{s}(u) \rVert_{X}\leq M \quad \forall s\in S$) entonces $\{ \lVert T_{s} \rVert:s\in S \}$ es acotado
>>[!Proof]-
>>1. Para cada $u \in U$, defina una aplicación $f^u : S \to X$ por $f^u(s) = T_s(u)$. 
>>2. Luego por definición $$\{ \|f^u(s)\| : s \in S\} = \{\|T_s(u)\| : s \in S\}$$ y por lo tanto está acotado, así que $f^u \in F_b(S, X)$. Donde $F_b(S, X)$ el espacio de Banach definido [[Teórico 7#^df9755]]. 
>>3. Ahora definamos un operador lineal $$\phi : U \to F_b(S, X)\quad \text{dado por}\quad\phi(u) = f^u$$ y mostremos que $\mathcal{G}(\phi)$ (grafico de $\phi$) es cerrado.
>>4. Sea $\{(u_n, \phi(u_n))\}$ una sucesión en $\mathcal{G}(\phi)$ que converge a $(u, g)$ en $U \times F_b(S, X)$. Entonces $\phi(u_{n})$ converge a $g$ usando una idea igual que en [[Teórico 5#^5463d1]] paso 2.
>>5. Entonces por definicion de $\lVert \cdot \rVert_{b}$ 
> $$\lim_{n \to \infty} \|g(s) - \phi(u_n)(s)\| \le \lim_{n \to \infty} \|g - \phi(u_n)\|_b = 0$$
>> y así, como $T_s$ es continuo $$g(s) = \lim_{n \to \infty} \phi(u_n)(s) = \lim_{n \to \infty} f^{u_n}(s) = \lim_{n \to \infty} T_s(u_n) = T_s(u)=f^{u}(s)=\phi(u)(s)$$
>> Osea $g = \phi(u)$ por lo tanto $(u,g) \in \mathcal{G}(\phi)$. Mostrando que $\mathcal{G}(\phi)$ es cerrado.
>> 6. Ahora, por el teorema del grafico cerrado [[Teórico 7#^c58dff]] sucede que  $\phi$ está acotado, así que $$\|T_s(u)\| = \|f^u(s)\| \le \|f^u\|_b = \|\phi(u)\|_b \le \|\phi\|\|u\|, \quad s \in S, u \in U,$$
>> y por lo tanto $\|T_s\| \le \|\phi\|$ para todo $s \in S$.

^cd74fc

## Espacio Dual

>[!Theorem] Representacion de Riesz-Fréchet
>Sea $\mathcal{H}$ un espacio de Hilbert y sea $f \in \mathcal{H}'=B(\mathcal{H},\mathbb{F})$. Entonces existe un único $y \in H$ tal que $f(x) = f_y(x) = (x,y)$ para todo $x \in \mathcal{H}$. Además, $\|f\|_{\mathcal{H}'} = \|y\|_{\mathcal{H}}$.
>>[!Proof]-
>>- (Existencia)
>>	1. Si $f(x)=0$ para todo $x \in \mathcal{H}$, entonces $y=0$ será una elección adecuada. 
>>	2. De lo contrario $\ker f = \{x \in H : f(x) = 0\}$ es un subespacio propio y cerrado de $\mathcal{H}$ (Por  [[Teórico 5#^e19482]]) 
>>	3. Como es propio $(\ker f)^\perp \neq \{0\}$ si fuese $kerf^{\perp}=\{ 0 \}$ entonces $\ker f = \overline{\ker f}=\ker f^{\perp\perp}=\mathcal{H}$  
>>	4. Por lo tanto, existe $z \in (\text{Ker } f)^\perp$ tal que $f(\tilde{z})=a\neq 0$ entonces por linealidad existe $z\in \ker f^{\perp}$ tal que $f(z)=1$   
>>	5. Ahora, sea $x \in H$ arbitrario. Como $f$ es lineal $$f(x - f(x)z) = f(x) - f(x)f(z) = 0$$
>>	6. Por lo tanto $x - f(x)z \in \text{Ker } f$. Sin embargo, $z \in (\text{Ker } f)^\perp$, así que $$(x - f(x)z, z) = 0$$
>>	7. Luego $(x,z) - f(x)(z,z)=0$ y así $(x,z) = f(x)\|z\|^2$. 
>>	8. De ahí que $$f(x) = (x, \frac{z}{\|z\|^2}) = (x,y).$$
>>	Donde $y = \frac{z}{\|z\|^2}$. 
>>	9. Ahora, si $\|x\| \le 1$ por la desigualdad de Cauchy-Schwarz $$|f(x)| = |(x,y)| \le \|x\|\|y\| \le \|y\|$$
>>	De modo que $\|f\| \le \|y\|$. 
>>	10. Por otro lado, si $x = \frac{y}{\|y\|}$, entonces $\|x\|=1$ y $$\|f\| \ge |f(x)| = \frac{|f(y)|}{\|y\|} = \frac{(y,y)}{\|y\|} = \|y\|$$
>>	11.  Por lo tanto, $\|f\| \ge \|y\|$.
>>- (Unicidad)
>>	1. Sean $y$ y $w$ son tales que $$f(x) = (x,y) = (x,w)$$
>>	2. Luego para todo $x \in \mathcal{H}$, entonces $(x, y-w)=0$ para todo $x \in \mathcal{H}$. 
>>	3. En particular $\lVert y-w \rVert^{2}=(y-w,y-w)=0$ entonces $y-w=0$ y así $y=w$ como se requería.

^a49476

>[!Theorem] Pseudo isomorfismo entre $\mathcal{H}$ y $\mathcal{H}'$  
>$\mathcal{H}$ Hilbert sea $T_{H}:\mathcal{H}\rightarrow\mathcal{H'}$ dado por $T_{H}(y)=f_{y}$ donde $f_{y}(x):=(x,y)\quad\forall x\in \mathcal{H}$. Entonces $T_{H}$ es biyectivo. Ademas $\forall y\in \mathcal{H}\quad\alpha,\beta\in \mathbb{F}$
>- (a)  $T_{H}(\alpha y + \beta z)=\overline{\alpha}T_{H}(y)+\overline{\beta}T_{H}(z)$
>- (b)  $\lVert T_{H}(y) \rVert_{\mathcal{H}'}=\lVert y \rVert_{H}$
>Ademas se puede definir un producto interno en $\mathcal{H}'$ como 
>$$(T_{H}(z),T_{H}(y))_{\mathcal{H}'}=(y,z)_{\mathcal{H}}\quad \forall y,z\in \mathcal{H}$$
>Con este producto interno $\mathcal{H}'$ es Hilbert
>Ademas la norma asociada a cada $f_{y}$ coincide con la norma de $f_{y}$ como elemento $B(\mathcal{H},\mathbb{F})=\mathcal{H}'$
>>[!Proof]-
>>- (b)
>>	1. La biyectividad de $T_H$ y la propiedad (b) se siguen inmediatamente de [[Teórico 7#^a49476]] 
>>- (a)
>>	1. A continuación, para todo $x \in H$ tenemos $$f_{\alpha y + \beta z}(x) = (x, \alpha y + \beta z) = \bar{\alpha}(x,y) + \bar{\beta}(x,z) = \bar{\alpha}f_y(x) + \bar{\beta}f_z(x),$$
>>lo que demuestra (a). 
>>- (Igualdad) 
>>	1. Ahora comprobamos que la igualdad define un producto interno, verificando los axiomas. 
>>	2. Primero, notamos que $(T_{H}(y), T_{H}(y))_{\mathcal{H}'} = (y,y)_{\mathcal{H}} \ge 0$ con igualdad si y solo si $y = 0$ (y por lo tanto si y solo si $f_y = 0$). 
>>	3. Además $$(T_{H}(z), T_{H}(y))_{\mathcal{H}'} = (y, z)_{\mathcal{H}} = \overline{(z,y)}_{\mathcal{H}} = \overline{(T_{H}(y), T_{H}(z))}_{H'}$$
>>	4. Y por otro lado usando (a) 
>>	$$\begin{align}(\alpha T_{H}(y) + \beta T_{H}(z), T_{H}(w))_{\mathcal{H}'}&=(T_{H}(\overline{\alpha } y+\overline{\beta z} ),T_{H}(w)) \\ & = (w, \bar{\alpha}y + \bar{\beta}z)_{\mathcal{H}} \\ & = \alpha(w,y)_{\mathcal{H}} + \beta(w,z)_{\mathcal{H}} \\ & = \alpha(T_{H}(y), T_{H}(w))_{H'} + \beta(T_{H}(z), T_{H}(w))_{\mathcal{H}'}\end{align}$$
>>- (Coincidencia de normas)
>>	1. Por (b) y [[Teórico 7#^a49476]] tenemos $$\|f_y\|_{\mathcal{H}'}=\lVert T_{H}(y) \rVert_{\mathcal{H}'} = \|y\|_{\mathcal{H}}=\lVert f_{y} \rVert_{\tilde{\mathcal{H}'}}$$
>>	Donde $\tilde{\mathcal{H}}'$ es un abuso de notacion para decir que ahi estamos usando la norma comun de $\mathcal{H}'=B(\mathcal{H},\mathbb{F})$ osea $\lVert f \rVert=\sup \{ \lVert f(x) \rVert:|x|=1 \}$    
>>	2. Finalmente, recordemos que $H'$ es completo, por [[Teórico 5#^d90fc3]]

^6296e5