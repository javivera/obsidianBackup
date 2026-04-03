---
dateCreated: 2024-09-23,08:32
---
>[!Definition] Producto interno
> Un ev sobre $\mathbb{R}$ ($\mathbb{C}$). Un p.i. en X es una funcion $X \times X \to \mathbb{R} (\mathbb{C})$ tq $\forall x,y,z \in X, \quad \forall \alpha, \beta \in \mathbb{R} (\mathbb{C})$
> - a) $( x,x ) \ge 0 \quad$ (y $( x,x ) \in \mathbb{R}$)
> - b) $( x,x ) = 0 \iff x=0$
> - c) $( \alpha x + \beta y, z ) = \alpha ( x,z ) + \beta ( y,z )$
> - d) $( x,y ) = ( y,x )\quad\big(( x,y ) = \overline{( y,x )}\big)$

^033112

>[!Example]- Algunos productos internos
>- $(\cdot, \cdot): \mathbb{C}^n \times \mathbb{C}^n \to \mathbb{C}$ dado por $( x,y ) \mapsto \sum x_k \bar{y_k}$
>- $( \cdot, \cdot ): \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ dado por $( x,y ) \mapsto \sum_{k=1}^n x_k y_k$
>- Si X es un ev con base {$e_1, \dots, e_k$} y $x,y \in X$ con $x=\sum \lambda_k e_k$ e $y=\sum \beta_k e_k$ entonces $$( \cdot, \cdot ): X \times X \to \mathbb{C}\quad\text{dada por}\quad( x,y ) \mapsto \sum \lambda_k \bar{\beta_k}$$ es producto interno
>- Sea $(X, \Sigma, \mu)$ un medible entonces  $$(\cdot,\cdot):L^{2}\times L^{2}\rightarrow \mathbb{C} \quad\text{ dada por}\quad( f,g ) = \int f \overline{g}$$ es prod interno en $L^2(X)$ (notar $\int|fg|<\infty$ por Hölder con p=q=2)
>Caso particular $a=\{ a_{n} \}\in \ell^{2}$, $b=\{ b_{n} \}\in \ell^2$ entonces la sucesión $\{ a_n b_n\}\in \ell^2$ luego la funcion $$( \cdot, \cdot ): \ell^2 \times \ell^2 \to \mathbb{C} \ \ \text{ dada por }\ \ ( a,b ) \mapsto \sum a_n \overline{b_n}$$es producto interno
>- Si $X$ ev con $( \cdot, \cdot )$ y $S$ sub esp entonces la restricción de $( \cdot, \cdot )$ es p.i. en $S$
>- Si $X,Y$ son ev con p.i $( \cdot, \cdot )_1$ y $( \cdot, \cdot )_2$ respectivamente. Y $Z=X \times Y$ entonces
> $$(X \times Y) \times (X \times Y) \to \mathbb{C}\quad\text{ con }\quad( (u,v),(x,y) )_z = ( u,x )_1 + ( v,y )_2$$
> es p.i

>[!Lemma] Resultados evpi
> X evpi $x,y,z \in X \quad \alpha, \beta \in \mathbb{F}$ ent
> - a) $( 0,y ) = ( x,0 ) = 0$
> - b) $( x, \alpha y + \beta z ) = \bar{\alpha}( x,y ) + \bar{\beta}( x,z )$
> - c) $( \alpha x + \beta y, \alpha x + \beta y ) = |\alpha|^2 ( x,x ) + |\beta|^2 ( y,y ) + \alpha \bar{\beta} ( x,y ) + \beta \bar{\alpha} ( y,x )$
>>[!Proof]
>> ej

^7316d2

>[!Proposition] Desigualdad Cauchy Schwartz
> $X$ evpi $x,y \in X$ entonces
> - (a) $|( x,y )|^2 \le ( x,x ) ( y,y )$
> - (b) La funcion $\|\cdot\|: X \to \mathbb{R}$ dada por $\|x\| = ( x,x )^{1/2}$ es norma en $X$
>>[!Proof]-
>>(a) $x,y \ne 0$ ent. usando c) del lema anterior con $\alpha = - \frac{\overline{( x,y )}}{( x,x )}$ y $\beta=1$ tenemos 
>> $$\begin{align}0 \le ( \alpha x + \beta y, \alpha x + \beta y ) & = \left| \frac{(x,y)}{( x,x )} \right|^2 ( x,x ) + ( y,y ) - \frac{\overline{( x,y )}}{( x,x )} ( x,y ) - \frac{( x,y ) }{\overline{( x,x )}}( y,x ) \\& = \frac{|( x,y )|^2}{( x,x )} - \frac{|( x,y )|^2}{( x,x )} - \frac{( x,y)\overline{( x,y )}}{( x,x )} + ( y,y )\\&=-\frac{|( x,y)|^{2}}{( x,x)}+( y,y)\\&= -|( x,y)|^{2}+( x,x) ( y,y)\end{align}$$
>> Por lo tanto $|(x,y)|^{2}\leq (x,x)(y,y)$ 
>> Notar que usamos $|( x,y)|^{2} = \overline{( x,y )}( x,y)$ (propiedad complejos $z\overline{z}=|z|^{2}$) y $( x,x)=\overline{( x,x)}$  
>> (b) Trivial, sale usando definicion de p.i basicamente. La desigualdad veamosla
>> 1. $$\begin{align}\|x+y\|^{2}&=( x+y, x+y )\\&=( x, x)+ ( x, y )+( y, x )+( y, y )\\& = \|x\|^{2}+( x, y )+\overline{( x, y )}+\|y\| \\ & =\|x\|^{2}+2Re(( x, y ))+\|y\|\\ & \leq \|x\|^{2}+2|( x, y ) | + \|y\|\\&\leq \|x\|^{2}+2\|x\|\|y\|+\|y\|^{2}\\&=(\|x\|+\|y\|)^{2}\end{align}$$   

^28aa9a

>[!Remark] Norma Inducida
>La norma $$\|\cdot\| = ( \cdot, \cdot )^{1/2}$$ se dice que es inducida por el p.i. Cuando tengamos un evpi lo pensaremos como ev normado con p.i. 
>Es facil ver que $\mathbb{F}^k, \ell^2, L^2(X)$ (por los pi de todos los ej antes) con los p.i dados arriba inducen las normas definidas anteriormente. Entonces notar que [[#^28aa9a]] se puede escribir como
> $$|( x,y )| \le \|x\|\|y\| $$

^692a1b

>[!Lemma] Igualdades producto interno
> Sea $X$ evpi $(, )$ ent $\forall u,v,x,y \in X$. Se tiene
> - a) $( u+v, x+y ) - ( u-v, x-y ) = 2( u,y ) + 2( v,x )$
> - b) $4( u,y ) = ( u+v,x+y ) - ( u-v,x-y ) + i( u+iv,x+iy ) - i( u-ix,x-iy )$ si $\mathbb{F}=\mathbb{C}$
>>[!Proof]
>> ej

^fd88a0

>[!Theorem] Regla Paralelogramo e Id Polarizacion
> Sea X evpi con norm inducida $\| \cdot \|$ ent $\forall x,y \in X$
> - (a) Regla del Paralelogramo $$\|x+y\|^2 + \|x-y\|^2 = 2(\|x\|^2 + \|y\|^2)$$
> (Si $( x,y)=0$ entonces esta igualdad se transforma en Pitagoras ) 
> - (b) Si $\mathbb{F}=\mathbb{R}$  $$\text{ Si }\  4( x,y ) = \|x+y\|^2 - \|x-y\|^2$$
> - (c) Si $\mathbb{F}=\mathbb{C}$  $$ 4( x,y ) = \|x+y\|^2 - \|x-y\|^2 + i\|x+iy\|^2 - i\|x-iy\|^2$$
> (Esta ultima es llamada identidad de polarización)

^604f51

>[!Remark] Contraejemplo a regla del paralelogramo en $C[0,1]$ 
>La norma en $C[0,1]$ no proviene de un p.i $(\|f\|_{\infty} = \max_{x \in[0,1]} |f(x)|)$ entonces no vale (a) facil
>>[!Proof]-
>>1.  Sea $f(x)=x$ y $g(x)=1$ 
>>2. Entonces $\lVert f+g \rVert=\lVert x+1 \rVert=2$ y $\lVert f-g \rVert=\lVert x-1 \rVert=1$ por lo tanto $\lVert f+g \rVert^{2}+\lVert f-g \rVert^{2}=5$
>>3. Por otro lado $\lVert f \rVert=1$ y $\lVert g \rVert=1$ entonces $2(\lVert f \rVert^{2}+\lVert g \rVert^{2})=4$
>>4. Entonces no se cumple la regla del paralelogramo. Por lo tanto en $C[0,1]$ sucede que $\lVert \cdot \rVert_{\infty}$ no proviene de un producto interno   

^6139d8

 

>[!Proposition] Continuidad de producto interno
> Sea $X$ evpi y $\{x_n\},\{ y_{n} \}\in X$ tales que $x_n \to x, y_n \to y$ con $x,y\in X$ entonces
> $$( x_n, y_n ) \to ( x,y )$$
>>[!Proof]-
>>1. Usando C-S $|( x_n, y_n ) - ( x,y )| \le |( x_n, y_n ) - ( x_n, y )| + |( x_n, y ) - ( x,y )|\le \|x_n\|\|y_n-y\| + \|x_n-x\|\|y\|\to 0$

^d0aa26

## Ortogonalidad

>[!Definition] Ortogonalidad
> Sea $X$ evpi decimos que $x,y\in X$ son ortogonales si $( x,y ) = 0$. Decimos ademas $\{e_{1}, \dots, e_{n}\}\subset X$ es ortonormal si $\|e_k\|=1 \quad \forall k$ y $( e_{j}, e_{k} ) = 0\quad \forall j \neq k$

^fbf000

>[!Definition] Base Ortonormal
> Sea $X$ evpi entonces un conjunto ortonormal $\{ e_1, \dots, e_k \}$ es l.i. en particular si $dim (X)=k$ entonces $\{ e_1, \dots, e_k \}$ es base de $X$ y $\forall x \in X$ $$x = \sum_{n=1}^k ( x,e_n ) e_n$$
> En este caso decimos que $\{ e_1, \dots, e_k \}$ es base ortornomal y $( x, e_n )$ son las coordenadas en esa base.

^90d991

>[!Theorem] Grahm-Schmidt
>Sea $X$ evpi y $\{ v_1, \dots, v_k \}$ l.i. en $X$ entonces existe base ortonormal $\{ e_1, \dots, e_k\}$ de $S=Sp\{v_1, \dots, v_k\}$
>>[!Proof]
>>ej

^c3046c

>[!Definition] Espacio Hilbert
>Un esp con p.i completo con respecto a la métrica asociada a la norma inducida por el evpi se dice esp Hilbert.

^78371d

>[!Example] Ejemplo de espacios Hilbert
>- (1) Todo ev de $dim<\infty$ con $(\cdot, \cdot)$ (todo lo de la clase pasada)
>- (2) $L^2(X)$, $l^2$ con los p.i estándar (ya asumimos que $L^p(X)$ es completo)

>[!Remark] Esp c/p.i que no son Hilbert.
>Sea $l^2_c = \big\{ \{{x_n}\}_{n \in \mathbb{N}}/ x_n \ne 0 \text{ solo en finitos n}\big\}$ es facil ver que $( \{x_n\}, \{y_n\} ) = \sum x_n \overline{y_n}$ es p.i con norma asociada $\|{x_n}\| = (\sum |x_n|^2)^{1/2}$. Pero no es completo
>>[!Proof]-
>> 1. Sea $x^{n}=\left( 1, \frac{1}{2},\ldots, \frac{1}{n},0,\ldots \right)$ claramente pertence a $l^{2}_{c}$ y sea $x=\left( 1, \frac{1}{2}, \ldots \frac{1}{n} , \frac{1}{n+1}, \ldots \right)$ 
>> 2. Entonces $\lVert x^{n}-x \rVert^{2}=\sum^{\infty}_{i=n+1} \frac{1}{i^{2}}\rightarrow 0$ converge a $0$ por ser cola de serie convergente
>> 3. Pero $x\not\in l_{c}^{2}$ con lo cual $l_{c}^{2}$ no es cerrado y sabemos que completo implica cerrado [[Teórico 1#^83c633]]. Con lo cual $l_{c}^{2}$ no puede ser completo por que seria cerrado

^13356c

>[!Proposition] Hilbert $\iff$ cerrado
>Sea $\mathcal{H}$ Hilbert (completo), $Y \subset \mathcal{H}$ sub esp entonces 
> $$Y \text{ es Hilbert}\iff Y \text{es cerrado en }\mathcal{H}$$
>>[!Proof]-
>>1. $Y$ Hilbert $\iff$ $Y$ completo. 
>>2. Pero sub esp de un metrico completo es completo $\iff$ es cerrado (clase pasada)

^5c7207

## Complemento ortogonal

>[!Definition] Complemento ortogonal
> $X$ ev con $(\cdot, \cdot)$. Dado $A \subset X$ definimos el complemento ortogonal de $A$ como $$A^\perp = \{ x \in X : (x,a)=0 \quad \forall a \in A\}$$
>(si $A=\emptyset$ ponemos $A^\perp=X$)

^833729

>[!Example] Ejemplo complementos ortogonales
>- (1)$X=\mathbb{R}^3 \quad A=\{(a_1, a_2, a_3) : a_3=0\}\implies A^\perp = \{(x_1, x_2, x_3) \in \mathbb{R}^3 : x_1=x_2=0\}$
>- (2) Sup que $\{ e_1, \dots, e_k \}$ base de $X$. $A=sp\{e_1, \dots, e_p\} \quad 1 \le p \le k$. Entonces $A^\perp=sp\{e_{p+1}, \dots, e_k\}$

>[!Lemma] Resultados de ortogonalidad
> X evpi, A $\subset$ X subconjunto ent
> - (a) $0 \in A^\perp$
> - (b) si $0 \in A \implies A \cap A^\perp = \{0\}$ (si no $A \cap A^\perp = \phi$)
> - (c) $\{0\}^\perp = X, X^\perp=\{0\}$
> - (d) Si $A$ contiene una bola $B_a(r)$ p/alg $r>0$ y $a \in A$ entonces $A^\perp=\{0\}$ 
>(En particular si $A$ es abierto no vacío entonces $A^\perp = \{0\}$)
> - (e) $B \subset A \implies A^\perp \subset B^\perp$
> - (f) $A^\perp$ es sub cerrado de $X$ 
> - (g) $A \subset (A^\perp)^\perp = A^{\perp\perp}$
>>[!Proof]-
>> - (a) $(0,a)=(y-y,a)=(y,a)-(y,a)=0$ y esto vale para cualquier $a\in A$  
>> - (b) Sea $x_0 \in A \cap A^\perp \implies ( x_0, x_0 ) = 0 \implies x_0=0$
>> Notar $( 0,a) = 0 \quad \forall a \in A \implies 0 \in A^\perp$
>> - (c) Sea $y \in X^\perp \implies ( y,x )=0 \quad \forall x_0 \in X$ en particular $y\in X$ entonces $( y,y )=0 \implies y=0 \implies X^\perp=\{0\}$. 
>> Por otro lado $x\in X$ entonces $( x,0)=0$ entonces $x\in \{ 0 \}^{\perp}$   
>> - (d) Sup $\exists 0 \ne x_0 \in A^\perp$. Sea $y=\frac{x_0}{\|x_0\|}$ como $y \in A^\perp \implies ( y,a ) = 0 \quad \forall a \in A$
>> Luego notar $a+\frac{r}{2}y \in B_{a}(r)\subseteq A$ por que $\|a - \left( a+ \frac{r}{2}y \right)\|=\frac{r}{2}\|y\|=\frac{r}{2}$ 
>> Entonces $0 \leq \frac{r}{2}( y,y )=( y, a+\frac{r}{2}y ) = 0 \implies \|y\|^{2}=( y,y )=0 \implies y=0 \implies x_{0}=0$
>> - (f) Sea $y,v \in A^\perp$ entonces $(\alpha y+\beta v,a)=0$ entonces $\alpha y+\beta v \in A^{\perp}$. Por otro lado sea $\{ x_{n} \}\subseteq A^{\perp}$ con $x_{n}\rightarrow x$ entonces $0=\lim\limits_{ n \to \infty }(x_{n}-x,a)=\lim\limits_{ n \to \infty }(x_{n},a)-(x,a)=(x,a)\quad\forall a\in A$ . Luego $x\in A^{\perp}$ 

^7a502c

>[!Proposition]
>Sea $Y$ subesp de $X$ evpi entonces $x \in Y^\perp \iff \|x-y\| \ge \|x\| \quad \forall y \in Y$
>>[!Proof]-
>>Por [[#^7316d2]] $$\|x-\alpha y\|^2 = \|x\|^2 - \bar{\alpha }( x,y ) - \alpha ( y,x ) + |\alpha |^2\|y\|^2 \quad \forall x \in X \quad \forall y \in Y \quad \forall \alpha  \in \mathbb{F}$$
>>(Ida) 
>> 1. Sea $x \in Y^\perp, y \in Y$ entonces $( x,y ) = ( y,x ) = 0$ 
>> 2. Usando $\alpha=1$ arriba tenemos $$\|x-y\|^2 = \|x\|^2 + \|y\|^2 \ge \|x\|^2$$
>>
>>(Vuelta) 
>>1. $\|x-y\|^2 \ge \|x\|^2 \quad \forall y \in Y$ como $Y$ subesp entonces esto vale con $\alpha y$ en lugar de $y$.
>>2. Luego $$0 \le \|x-\alpha y\|^2 - \|x\|^2 = -\bar{\alpha}( x,y ) - \alpha( y,x ) + |\alpha|^2\|y\|^2$$
>>3. Supongamos $(x,y)\neq0$ entonces definimos  $\beta = \frac{|( x,y )|}{( y,x )}$. Por lo tanto $\beta( y,x ) = |( x,y )|$, $\overline{\beta}=\frac{|( x,y)|}{( x,y)}$ y $|\beta|^{2}=1$)
>> 4. Sea $\alpha = t\beta \quad t>0$ entonces $$0 \le -t\bar{\beta}( x,y ) - t\beta( y,x ) + t^2|\beta|^2\|y\|^2= -2t|( x,y )| + t^2\|y\|^2$$
>>Entonces $|( x,y )| \leq \frac{t}{2}\|y\|^2$
>>5. Luego  $0\leq |( x,y)|\leq \lim\limits_{ t \to 0^{+} } \frac{t}{2}\|y\|^{2}=0$. Que es absurdo
>>6. Mostrando que $( x,y)=0\quad\forall y\in Y$ osea $x\in Y^{\perp}$  

^ad0aac





