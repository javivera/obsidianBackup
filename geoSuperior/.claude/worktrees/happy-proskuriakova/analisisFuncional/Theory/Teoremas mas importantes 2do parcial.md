
# Teorico 10
>[!Theorem] Hahn-Banach General MEMO
>Sea $X$ espacio vectorial $p : X\rightarrow \mathbb{R}$ [[Teórico 9#^c27268]] $W\subseteq X$ subespacio y $f_{W}:W\rightarrow\mathbb{F}$ funcional lineal tal que $\lvert f_{W}(w) \rvert\leq p(w)\quad\forall w\in W$ entonces 
>$$\exists \ f_{X} :X\rightarrow \mathbb{F}\quad\text{ extension de } f_{W}$$ tal que $$\lvert f_{X}(x) \rvert \leq p(x)\quad\forall x\in X$$
>>[!Proof]-
>>1. Si $\mathbb{F}=\mathbb{R}$ aplicamos [[Teórico 10#^2b57ba]] (Seminorma implica sublineal) y obtenemos $f_{X}(x)$ que cumple $f_{X}(x)\leq p(x)$    
>>2. Como $p$ es seminorma es par entonces $-f_{X}(x)=f_{X}(-x)\leq p(-x)=p(x)$ luego $-p(x)\leq f_{X}(x)$ 
>>3. Entonces $\lvert f_{X}(x) \rvert\leq p(x)$
>>4. Si $\mathbb{F}=\mathbb{C}$. Existe $f_{W,\mathbb{R}} : W_{\mathbb{R}}\rightarrow \mathbb{R}$ dado por [[Teórico 10#^5efc35]] con $$f_{W}(w)=f_{W,\mathbb{R}}(w)-if_{W,\mathbb{R}}(iw)\quad\forall w\in W$$
>>5. $f_{W,\mathbb{R}}(w) \leq \lvert f_{W,\mathbb{R}} (w)\rvert \leq \lvert f_{W}(w) \rvert\leq p(w)\quad\forall w\in W$ 
>>6. Luego por [[Teórico 10#^2b57ba]] existe extension $f_{X,\mathbb{R}}:X_{\mathbb{R}}\rightarrow\mathbb{R}$ con $f_{X,\mathbb{R}}(x)\leq p(x)\quad\forall x\in X_{\mathbb{R}}$
>>7. Usando nuevamente que $p$ es par por ser serminorma obtenemos $-p(x)\leq f_{X,\mathbb{R}}$
>>8. Por lo tanto $\lvert f_{X,\mathbb{R}} \rvert \leq p(x)$  
>>9. Entonces por [[Teórico 10#^b346de]] $f_{W}$ tiene extension que cumple $\lvert f_{X}(x) \rvert\leq p(x)$  

>[!Theorem] Hahn Banach en normado MEMO
>$X$ normado $W\subseteq X$ subespacio entonces $\forall f_{W}\in W'\quad\exists f_{X}\in X'$ extension de $f_{W}$ tal que $\lVert f_{W} \rVert=\lVert f_{X} \rVert$
>>[!Proof]-
>> 1. Definimos $p(x)=\lVert f_{W} \rVert\lVert x \rVert$ es [[Teórico 9#^c27268]] en $X$. Trivial (Notar que esta bien definida para $x\in X$ )
>> 2. Ademas $\forall w \in W,w\neq 0$ sucede $\frac{1}{\lVert w \rVert}p(w)=p\left( \frac{w}{\lVert w\rVert} \right)=\lVert f_{W} \rVert\geq\left\lvert  f_{W}\left( \frac{w}{\lVert w \rVert} \right)  \right\rvert=\lvert f_{W}(w) \rvert \frac{1}{\lVert w \rVert}$ (Usando la def de $p$ de 1.) 
>> 3. Entonces $\lvert f_{W}(w) \rvert\leq p(w)=\lVert f_{W} \rVert\lVert x \rVert$
>> 4. Entonces valen las hipotesis de [[Teórico 10#^065972]] por lo tanto $\exists f_{X}$ extension de $f_{W}$ tal que $\lvert f_{X}(x) \rvert\leq p(x)\quad\forall x\in X$
>> 5. Usando supremo de ambos lados $\lVert f_{X} \rVert\leq \lVert f_{W} \rVert$
>> 6. Ademas $\lVert f_{W} \rVert=\sup \{ \lVert f_{W}(w)\rVert:w\in W,\lVert w\rVert=1 \rVert \}\leq \{\lVert f_{X}(x)\rVert:x\in X,\lVert x \rVert=1\} =\lVert f_{X}\rVert$

>[!Theorem] existe $f$ que separa MEMO
>$X$ normado $W\subseteq X$ subespacio. Supongamos $\exists x\in X$ tal que $\delta =\inf \{ \lVert x+w \rVert:w\in W \}>0$ entonces $$\exists f\in X' \quad\text{ tal que } \quad\lVert f \rVert=1\quad f(x)=\delta \quad f|_{W}\equiv 0$$
>>[!Proof]-
>>1. Notar que pedimos $\delta >0$ para algun $x$ si no $W$ seria denso en $X$ (o seria $X$ directamente) entonces si tenemos un funcional tal que $f|_{W}\equiv 0$ por continuidad y densidad $f\equiv 0$ entonces $\lVert f \rVert\neq 1$ 
>>2. Sea $Y=Sp\{ x \}\bigoplus W$ definimos $f_{Y}:Y\rightarrow \mathbb{F}$ dada por $$f_{Y}(\alpha x+w)=\alpha \delta\quad\alpha \in \mathbb{F} ,w\in W$$ 
>>3. Si $\alpha =0$ entonces tenemos $f_{Y}(w)=0\quad\forall w\in W$  
>>4. Luego si $\alpha \neq0$ $$\lvert f_{Y}(\alpha x +w) \rvert=\lvert \alpha  \rvert\delta \leq \lvert \alpha  \rvert\lVert x+\alpha^{-1}w \rVert=\lVert \alpha x+w \rVert$$ (Notar que $\alpha^{-1}w \in W$ entonces la desigualdad vale por ser $\delta$ un infimo)
>>5. $\lVert f_{Y} \rVert=\sup \{ \lvert f_{Y}(y) \rvert :y\in Y,\lVert y \rVert=1\}=\sup \{ \lvert  f_{Y}(\alpha x+w)\rvert: \alpha x+w\in Y,\lVert \alpha x+w \rVert=1 \}$
>>6. Entonces usando 4. $\lVert f_{Y} \rVert\leq 1$
>>7. La otra desigualdad $\epsilon>0$ como $\delta$ es infimo $\exists \tilde{w}_{\epsilon}$ tal que $\delta\leq \lVert x+\tilde{w}_{\epsilon} \rVert\leq (1+\epsilon)\delta$
>>8. Sea $w=\tilde{\alpha} \tilde{w}_{\epsilon}$ con $\tilde{\alpha } \neq 0$
>>9. $$ \frac{\lvert f_{Y}(\tilde{\alpha } x+w) \rvert }{\lVert \tilde{\alpha } x+w \rVert }= \frac{\lvert \tilde{\alpha }  \rvert \delta}{\lvert \tilde{\alpha }  \rvert \lVert x+\tilde{\alpha } ^{-1} w \rVert }= \frac{\delta}{\lVert x+\tilde{\alpha } ^{-1} w \rVert }= \frac{\delta}{\lVert x+\tilde{w}_{\epsilon} \rVert } \geq \frac{1}{1+\epsilon}$$
>>10. Entonces $$\left\lvert  \frac{f_{Y}(\tilde{\alpha } x+w)}{\lVert \tilde{\alpha } x+w \rVert }  \right\rvert\geq \frac{1}{1+\epsilon}\quad\forall \epsilon\geq 0 \quad \text{ Entonces}\quad \left\lvert  \frac{f_{Y}(\tilde{\alpha } x+w)}{\lVert \tilde{\alpha } x+w \rVert }  \right\rvert\geq 1 \quad$$
>>11. Pero entonces $1\leq \left\lvert  f_{Y}\left( \frac{\tilde{\alpha } x+w}{\lVert \tilde{\alpha } x+w \rVert}\right) \right\rvert\in \{  \lvert f_{Y} (x)\rvert:\lVert x \rVert=1\}$ . 
>>12. Por lo tanto $$\lVert f_{Y} \rVert = \sup \{ |f_{Y}(x)|:\lVert x \rVert=1 \}\geq1$$
>>13. Mostrando que $\lVert f_{Y} \rVert=1$ 
>>14. Por [[#^8c080d]] extiendo $f_{Y}$ a $f:X\rightarrow \mathbb{F}$ con $\lVert f \rVert=\lVert f_{Y} \rVert=1$ 
>>15. Y es claro que si $w \in W$ entonces $f(w)=f_{Y}(0.x +w)=0.\delta=0$ y entonces $f(x)=f_{Y}(1.x+0)=1.\delta=\delta$

# Teorico 11
>[!Theorem] $X'$ separable implica $X$ separable  
>$X'$ separable entonces $X$ separable
>>[!Proof]-
>> 1. Sea $B=\{ f\in X':\lVert f \rVert=1 \}\subseteq X'$ 
>> 2. Como $X'$ es separable $\exists F=\{ f_{n} \}\subseteq B$ tal que $F$ es denso en $B$ ($B$ separable porque $X'$ separable)
>> 3. Para $n\in \mathbb{N}$ sea $w_{n}$ con $\lVert w_{n} \rVert=1$ y $f_{n}(w_{n})\geq \frac{1}{2}$ (Existe por def de $\lVert f \rVert$ supremo)
>> 4. Sea $W=\overline{Sp}\{ w_{j} \}$ si $W\subsetneq X$ usando [[Teórico 10#^3a0090]] tenemos $f\in B$ tal que $f(w)=0\quad\forall w\in W$ (Vale por que $x\not\in W$ nos asegura que $\inf\{ \lVert x-w \rVert:w\in W \}>0$  si no lo fuera tendriamos una sucesion de cosas en $W$ que converge a $x$ que es absurdo por que $W$ es cerrado)   
>> 5. $\frac{1}{2}\leq \lvert f_{n}(w_{n}) \rvert=\lvert f_{n}(w_{n})-f(w_{n}) \rvert\leq \lVert f_{n}-f \rVert\lVert w_{n} \rVert=\lVert f_{n}-f \rVert\quad\forall n\in \mathbb{N}$ (Por que $f(w_{n})=0$)
>> 6. Esto contradice la densidad de $F$ en $B$. Entonces $W=X$.
>> 7. Veamos que $\overline{Sp}\{ w_{j} \}$ es separable. Proponemos $Sp\{ w_{j} \}$ como denso numerable. 
>> 8. Sea un $x\in \overline{Sp}\{ w_{j} \}$ por def de span cerrado existe $x^{n}\in Sp\{ w_{j} \}$ tal que $x^{n}\rightarrow x$
>> 9. Entonces $\exists n_{0}\in \mathbb{N}$ tal que $\lVert x^{n_{0}}-x \rVert<\frac{\epsilon}{2}$
>> 10. Como $x^{n_{0}}\in Sp\{ w_{j} \}$ entonces $x^{n_{0}}=\sum^{N}_{n=1} c_{n}w_{n}$ y a esta si la podemos aproximar por con coeficientes racionales osea existe $\tilde{x}$ con coef racionales tal que $\lVert \tilde{x}-x^{n_{0}} \rVert\leq \frac{\epsilon}{2}$
>> 11. Por ende $\lVert \tilde{x} -x\rVert\leq \lVert \tilde{x}-x^{n_{0}} \rVert+\lVert x^{n_{0}}-x \rVert\leq \epsilon$ 
>> 12. Con lo cual aproxime $x$ con una suma finita de coeficientes racionales. Mostrando que la sumas finitas de coeficientes racionales son densas en $\overline{Sp}\{ w_{j} \}$ y como obviamente son numerables
>> 13. Luego $X=\overline{Sp}\{ w_{j} \}$ es separable

>[!Proposition] $\ell^{\infty}$ no es separable MEMO
>$\ell^{\infty}$ no es separable
>>[!Proof]-
>>14. Sea $N\subseteq \mathbb{N}$ $$x^{N}_{n}=\begin{cases}1 & \text{si }n\in N \\0 & \text{cc}\end{cases}$$
>>15. Obviamente $2^{\aleph}$ (no numerables) sucesiones distintas de $0$ y $1s$   
>>16. Dado $N$ y $M$ distintos entonces $\exists n_{0}\in N\setminus M$ por lo tanto $\lVert x^{N}-x^{M} \rVert_{\infty}=1$    
>>17. Tomo bolas $B(\frac{1}{4},x^{N})$ y $B\left( \frac{1}{4},x^{M} \right)$ entonces si existiera un $y$ en la interseccion $$\lVert x^{N} -x^{M}\rVert\leq \lVert x^{N}-y \rVert+\lVert y-x^{M} \rVert\leq \frac{1}{4}+\frac{1}{4}=\frac{1}{2}$$ que es absurdo  
>>18. Entonces tengo no numerables bolas disjuntas. No es separable

>[!Remark] $X$ separable no implica $X'$ separable MEMO
>1. $(\ell^{1})'$ no es separable por que vimos que si $p \in [1,\infty),q \in (1,\infty]$ hay un isomorfismo de $\ell^{q}$ en $(\ell^{p})'$ con $\frac{1}{p}+\frac{1}{q}$ [[Teórico 8#^bd2cdc]] entonces si $(\ell^{1})'$ fuese separable entonces $\ell^{\infty}$ seria separable  
>2. Entonces $\ell^{1}$ separable pero $(\ell^{1})'$ no es separable

>[!Remark] No hay isomorfismos entre $\ell_{1}$ y $(\ell^{\infty})'$ MEMO
>1. $(\ell^{\infty})'$ no es separable por que si lo fuera $\ell^{\infty}$ seria separable por [[Teórico 11#^5cf5d9]]
>2. Por lo tanto no puede haber isomorfismo entre $\ell^{1}$ y $(\ell^{\infty})'$ pues $\ell^{1}$ es separable y $(\ell^{\infty})'$ no es separable. [[Teórico 6#^2cb23e]]

>[!Lemma] Extensiones en general
>$X$ un $\mathbb{R}$ espacio vectorial $W\subseteq X$, $p:X\rightarrow\mathbb{R}$ sublineal y $f_{W}:W\rightarrow\mathbb{R}$ lineal tal que $$\lvert f_{W}(x) \rvert\leq p(x)\quad\forall w\in W$$
>Sean $z_{1}\not\in W$ con $W_{1}=Sp\{ z_{1} \}\oplus W=\{ \alpha z_{1}+W : \alpha\in \mathbb{F},w\in W \}$. Entonces $$\exists \delta_{1}\in \mathbb{R}\quad\text{y}\quad f_{W_{1}} : W_{1}\rightarrow \mathbb{R}$$
>Tal que $$f_{W_{1}}(\alpha z_{1}+w)=\alpha\delta_{1}+f_{W}(w)\leq p(\alpha z_{1}+w)\quad \forall \alpha\in \mathbb{R}\quad\forall w\in W\quad (a)$$
>En particular $f_{W_{1}}$ es lineal y extension de $f_{W}$
>>[!Proof]-
>>1. $\forall u,v\in W$ es $$f_{W}(u)+f_{W}(v)=f_{W}(u+v)\leq \lvert f_{W}(u+v) \rvert\leq p(u+v)\leq p(u-z_{1})+p(v+z_{1})$$ (Por sublineal) 
>>2. entonces $f_{W}(u)-p(u-z_{1})\leq -f_{W}(v)+p(v+z_{1})$
>>3. Sea $\delta_{1}=\inf \{ -f_{W}(v)+p(v+z_{1}):v\in W \}>-\infty$ (2. Nos dice que esta acotado)
>>4. Entonces ahora definimos $f_{W_{1}}(\alpha z_{1}+w)=\alpha \delta_{1}+f_{W}(w)$
>>5. $-\delta_{1} +f_{W}(u)\leq p(u-z_{1})$ (Usando infimo en 2.)
>>6. Ahora por definicion de infimo $\delta _1\leq -f_{W}(v)+p(v+z_{1})$ por lo tanto $\delta_{1} +f_{W}(v)\leq p(v+z_{1})$
>>7. Si $\alpha <0$ multiplicamos 5. por $-\alpha$ y escribiendo $w=-\alpha u$ obtenemos $(a)$
>>8. Si $\alpha >0$ multiplicamos 6. por $\alpha$ y escribiendo $w=\alpha v$ obtebemos $(a)$
>>9. Si $\alpha =0$ trivial
>>10. Entonces $f_{W_{1}}$ cumple la desigualdad 

>[!Theorem] Hahn-Banach sobre $\mathbb{R}$ MEMO
>$X$ espacio vectorial $p : X\rightarrow \mathbb{R}$ [[Teórico 10#^dafca5]]. 
>Supongamos $\exists W\subseteq X$ subespacio y $f_{W}:W\rightarrow\mathbb{R}$ lineal tal que $f_{W}(w)\leq p(w)\quad\forall w\in W$ 
>Entonces $\exists f_{X}:X\rightarrow\mathbb{R}$ extension de $f_{W}$ tal que $f_{X}(x)\leq p(x)\quad\forall x\in X$
>>[!Proof]-
>>$X$ espacio vectorial real, sea $E$ el conjunto de funciones lineal $f$ en $X$ tales que:
>>- $f$ esta definida en un subespacio $D_{f}$ con $W\subseteq D_{f}\subseteq X$
>>- $f=f_{W}$ en $W$
>>- $f\leq p$ en $D_{f}$
>>1. Notar que $E$ es el conjunto de todas las extensiones de $f_{W}$ a subespacios $D_{f}\subseteq X$ tales que safistacen el teorema de Hahn-Banach en reales, pero con $X=D_{f}$ ($E\neq 0$ por que $f_{W}\in E$)
>>2. Definimos un orden $f<g \iff D_{f}\subseteq D_{g}$ y $f=g$ en $D_{f}$. Es facil ver que es orden parcial
>>3. Sea $\tilde{E} \subseteq E$ con $\tilde{E}$ totalmente ordenado, osea una cadena de $E$. Entonces $\forall f,g\in \tilde{E}$ sucede que $g$ es extension de $f$ y $D_{f}\subseteq D_{g}$ o viceversa)
>>4. Sea $Z_{\tilde{E}}=\bigcup_{f\in \tilde{E}}D_{f}$. 
>>	- Es directo ver que $Z_{\tilde{E}}$ es subespacio. 
>>		1. Sea $x,y\in Z_{\tilde{E}}$ y $\alpha ,\beta\in \mathbb{R}$ entonces $x\in D_{f}$ e $y\in D_{g}$
>>		2. Por ser $\tilde{E}$ totalmente ordenado (o cadena) sin perdida de generalidades $f\leq g$ por lo tanto $D_{f}\subseteq D_{g}$ entonces $x,y\in D_{g}$ como $D_{g}$ subespacio $\alpha x+\beta y\in D_{g}\subseteq Z_{\tilde{E}}$ 
>>3. Definimos $f_{\tilde{E}}:Z_{\tilde{E}}\rightarrow\mathbb{R}$ de la siguiente manera. 
>>	- Buena definicion
>>		1. Dado $z\in Z_{\tilde{E}}$ sabemos $\exists \delta \in \tilde{E}$ tal que $z\in D_{\delta}$ entonces $f_{\tilde{E}}(z)=\delta(z)$ 
>>		2. La definicion es buena ya que si $z\in D_{\mu}$ como $\tilde{E}$ es orden total $D_{\mu}\subseteq D_{\delta}$ entonces $\delta(x)=\mu(x)\quad\forall x\in D_{\mu}$ o viceversa $D_{\delta }\subseteq D_{\mu}$ y $\delta(x)=\mu(x)\quad\forall x\in D_{\delta }$ 
>>		3. Por lo tanto en ambos casos $\delta(z)=\mu(z)$ asi que da igual tomar cualquiera de las dos para definirla 
>>	- Veamos $f_{\tilde{E}}$ es lineal  
>>		1. Sean $x,y\in Z_{\tilde{E}}$ y $\alpha ,\beta\in \mathbb{F}$ por 4. $\alpha x+\beta y\in Z_{\tilde{E}}$ entonces $\exists \delta\in \tilde{E}$ tal que $f_{\tilde{E}}(\alpha x+\beta y)=\delta (\alpha x+\beta y)$ 
>>		2. Como $\delta$ es lineal $f_{\tilde{E}}(\alpha x+\beta y)=\alpha \delta (x)+\beta\delta (y)=\alpha f_{\tilde{E}}(x)+\beta f_{\tilde{E}}(y)$ (Esto ultimo por la buena definicion) 
>>3. Mas aun $f_{\tilde{E}}\in E$ (Osea cumple las hipotesis) y ademas $f\leq f_{\tilde{E}}\quad\forall f\in \tilde{E}$ en el sentido de la relacion de orden. Entonces $f_{\tilde{E}}$ es cota superior de $\tilde{E}$ 
>>4. Luego por *Lema de Zorn* $E$ tiene un elemento maximal $f_{max}$ 
>>5. Suponemos $D_{f_{max}}\neq X$. Por [[Teórico 10#^3226b6]] sucede que $f_{max}$ tiene una extension que esta claramente en $E$ (osea cumple las hipotesis) contradiciendo que $f_{max}$ fuera maximal.

# Teorico 12
>[!Theorem] $X$ dim finita y $\mathcal{H}$ Hilbert son reflexivos
>- (a)  Si $X$ es normado con $\dim X=n<\infty$ entonces $X$ es reflexivo
>- (b)  Si $\mathcal{H}$ es Hilbert entonces $\mathcal{H}$ es reflexivo 
>>[!Proof]-
>>- (a)  
>>	1. Como dimension de $X$ es finita sabemos que $\dim X=\dim X'=\dim X''$ (Por algebra 1 dada base finita de $X$ encontramos base finita de $X'$ y podemos reaplicar la misma idea para $X'$ y $X''$ ) 
>>	2. Como $J_{X}:X\rightarrow X''$ lineal e inyectiva (por ser isometria) entonces $dim\ker J_{X}=0$ por teo dim (todo finito) $im J_{X}=X''$  osea $J_{X}$ es sobre
>>- (b)
>>	1. Por [[Teórico 7#^6296e5]] tenemos que $T_{\mathcal{H}}:\mathcal{H}\rightarrow \mathcal{H}'$ dada por $T_{\mathcal{H}}(y)=f_{y}$ con $f_{y}(x)=(x,y)$ es biyeccion. Y $\mathcal{H}'$ es Hilbert con $$(T_{\mathcal{H}}(z),T_{\mathcal{H}}(y))_{\mathcal{H}'}=(y,z)_{\mathcal{H}}\quad(I)$$
>>	2. Ahora como $\mathcal{H}'$ es Hilbert entonces re aplicando teorema $T_{\mathcal{H}'}:\mathcal{H}'\rightarrow\mathcal{H}''$ dada por $T_{H'}(g)=\psi_{g}$ con $$T_{\mathcal{H}'}(g)(f)=\psi_{g}(f)=(f,g)_{\mathcal{H}'}\quad (II)$$es biyeccion (y $\mathcal{H}''$ es Hilbert)
>>	3. En particular si $f\in \mathcal{H}'$ y $\psi \in \mathcal{H}''$ entonces $\exists !x,y\in H$ tales que $f=T_{\mathcal{H}}x$ y $\psi=T_{\mathcal{H}'}(T_{\mathcal{H}}y)$ (Unicos por que [[Teórico 7#^6296e5]] nos dice que son biyectivas, para la parte de $\psi$ seria usar dos veces biyectividad)
>>	4. Entonces tenemos $$\begin{align} J_{\mathcal{H}}(y)(f)= f(y)&=(y,x)_{\mathcal{H}} & \text{(Por definición de }f)\\&=(T_{\mathcal{H}}(x),T_{\mathcal{H}}(y))_{\mathcal{H}'} &(\text{Por } (I))\\&=(f,T_{\mathcal{H}}(y))_{\mathcal{H}'} & (\text{Por def de }f)\\ & =T_{\mathcal{H}'}(T_{\mathcal{H}}(y))(f) &(\text{Por } (II)) \\&=\psi (f)&\forall f\in \mathcal{H}' \quad(\text{Por def de }\psi)\end{align}$$
>>	5. Osea $\psi = J_{\mathcal{H}}(y)$. Digamos dado $\psi \in \mathcal{H}''$ encontre un $y\in X$ tal que $J_{\mathcal{H}}(y)=\psi$ luego $J_{\mathcal{H}}$ es sobreyectiva. Entonces $\mathcal{H}$ es [[Teórico 12#^5bf92d]]

>[!Theorem] $X$ reflexivo sii $X'$ reflexivo  
>$X$ Banach entonces $X$ reflexivo sii $X'$ reflexivo ($\iff J_{X'}:X'\rightarrow X'''$ es sobre)
>>[!Proof]-
>>- $(\Rightarrow)$ 
>>	1. Sea $\rho\in X'''$ como $\rho :X''\rightarrow\mathbb{F}$ y $J_{X}:X\rightarrow X''$. Entonces $f=\rho \circ J_{X}\in X'$ pues ambos son lineales y continuas.
>>	2. Sea $\psi \in X''$ como $X$ reflexivo $\exists x\in X$ tal que $\psi=J_{X}(x)$ osea $\psi(g)=(J_{X}x)(g)=g(x)\quad\forall g\in X'$
>>	3. $(J_{X'}(f))(\psi)=\psi(f)=f(x)=\rho\circ J_{X}(x)=\rho(\psi)$ (Recordar $J_{X'}(f)$ es el funcional evaluar en $f$)
>>	4. Osea $\rho = J_{X'}(f)$ con lo cual $J_{X'}$ es sobre entonces $X'$ es reflexivo
>>- $(\Leftarrow)$
>>	1. Supongamos $X'$ reflexivo pero $\exists \tilde{x}\in X''\setminus J_{X}(X)$. (Osea negar que $X$ sea reflexivo)
>>	2. $X$ es Banach y entonces $J_{X}(X)$ tambien (pues son isomorfos [[Teórico 12#^1f2693]]) y $J_{X}(X)\subseteq X''$ que es Banach y por lo tanto es $J_{X}(X)$ es cerrado (El $X''$ es metrico? Si es Banach es normado entonces metrico )
>>	3. Por [[Teórico 10#^3a0090]] ($W=J_{X}(X)$ y tenemos $\tilde{x}\in X''\setminus J_{X}(X)$ y cumple $\delta >0$ por que $J_{X}(X)$ es cerrado) Existe $k\in X'''$ tal que $k(\tilde{x})=\delta\neq 0$ y $k(J_{X}(x))=k|_{J_{X}(X)}=0 \quad\forall x\in X$
>>	4. Ademas como $X'$ es reflexivo $J_{X'}:X'\rightarrow X'''$ es sobre en particular $\exists g\in X'$ tal que $k=J_{X'}(g)$ osea $k(\psi)=(J_{X'}(g))(\psi)=\psi(g)\quad\forall \psi\in X''$ (Recordar $J_{X'}(f)$ es el funcional evaluar en $f$)
>>	5. Luego $g(x)=(J_{X}(x))(g)=k(J_{X}(x))=0\quad\forall x\in X$. osea $g\equiv 0$. (La igualdad del medio es por la igualdad en 4.) 
>>	6. Pero como $\tilde{x}\in X''$ por $4.$ tenemos $\tilde{x}(g)=k(\tilde{x})=\delta \neq 0$. Absurdo por que $g\equiv 0$ y $\tilde{x}$ es funcional lineal 

>[!Theorem] Anuladores y reflexividad
>$X$ normado $W\subseteq X$ subespacio cerrado $Z\subseteq X'$ subespacio cerrado entonces
>- (a)  $W=\ ^{\circ}(W^{\circ})$
>- (b) Si $X$ reflexivo $Z=(^{\circ}Z)^{\circ}$
>>[!Proof]-
>>- (a)
>>	1. Sabemos que $W\subseteq \ ^{\circ}(W^{\circ} )$ [[Teórico 12#^03be79]]
>>	2. Supongamos $p \in \ ^{\circ}(W^{\circ})\setminus W$ . 
>>	3. Como $W$ cerrado por [[Teórico 10#^3a0090]] existe $f\in X'$ tal que $f(p)\neq 0$ y $f\equiv 0$ en $W$ osea $f\in W^{\circ}$
>>	4. Entonces $p \not\in \ ^{\circ}(W^{\circ})$. Absurdo
>>- (b) 
>>	1. Sabemos $Z\subseteq (^\circ Z)^{\circ}$. Supongamos que $\exists g\in (^{\circ}Z)^{\circ}\setminus Z$ ($g\in X'$) 
>>	2. Como en parte $1.$ sabemos $\exists \psi \in X''$ tal que $(I) \ \psi(g)\neq 0$ y $\psi(f)=0\quad\forall f\in Z$
>>	3. Como $X$ reflexivo $\exists q\in X$ tal que $\psi=J_{X}(q)$ osea $(II)\ \psi(f)=f(q)\quad\forall f\in X'$
>>	4. Luego $f(q)=\psi(f)=0\quad\forall f\in Z$ osea que $q\in\ ^{\circ}Z$
>>	5. Pero $g(q)=\psi(g)\neq 0$ por $(I),(II)$ entonces $g\not\in (^{\circ}Z)^{\circ}$. Absurdo
# Teorico 13
>[!Corollary] $c_{0}$ y $\ell^{\infty}$ no son reflexivos
>Los espacios $c_{0}$ y $\ell^{\infty}$ no son reflexivos
>>[!Proof]-
>>1. Vimos en [[Teórico 12#^0a50d4]] que $( ^{\circ}Z ) ^{\circ} =c_{0}'\neq Z$ 
>>2. Luego $c_{0}$ no puede ser reflexivo por [[Teórico 12#^774fbc]] $2.$ 
>>3. Ademas como $c_{0}$ cerrado en $\ell^{\infty}$, tampoco puede serlo $\ell^{\infty}$ por [[Teórico 12#^c591f7]]

>[!Theorem] $T$ iso entonces $T'$ iso  
>$X,Y$ normados $T\in B( X,Y )$ 
>- (a) Si $T$ es isomorfismo entonces $T'$ es isomorfismo con $( T')^{-1} =( T^{-1} )'$.
>(En particular si son isomorfos $X$ e $Y$ tambien lo son $X'$ e $Y'$) 
>- (b) Si $T$ isomorfismo isometrico entonces $T'$ isomorfismo isometrico
>>[!Proof]-
>>- (a) 
>>	1. Sea $S=T^{-1}$ entonces $S\in B( Y,X )$ y ademas esta bien definida $S'\in B( X',Y')$ por [[Teórico 13#^e98c72]]
>>	2. Ahora $\forall x\in X ,f\in X'$ tenemos $$T'( S'(f))(x)=S'( f)( Tx)=f( S( Tx))=f( x)$$Osea $T'( S'( f))=f$ por lo tanto $T'\circ S'=Id_{X'}$  
>>	3. Analogamente vemos $S'\circ T'=Id$
>>	4. Entonces $(T^{-1})'=S'=(T')^{-1}$ , como $T'$ tiene inversa continua , es isomorfismo  
>>- (b) 
>>	1. Por (a) basta ver que $T'$ es isometria. 
>>	2. Por una parte $\lVert T'(f)(x) \rVert =\lVert f(Tx) \rVert \leq \lVert f \rVert \lVert T \rVert \lVert x \rVert$ (Con $\lVert T \rVert =1$ por ser isometria)
>>	3. Entonces $\lVert T'(f) \rVert \leq \lVert f \rVert$ 
>>	4. Por otro lado $\forall \epsilon>0\ \exists y\in Y$ con $\lVert y \rVert =1$ tal que $\lvert f(y) \rvert \geq \lVert f \rVert -\epsilon$ (Por def de supremo)
>>	5. Como $T$ isomorfismo existe $x\in X$ tal que $Tx=y$ como es isometria $1=\lVert y \rVert=\lVert Tx \rVert=\lVert x \rVert$  
>>	6. Por lo tanto $\lVert T'(f) \rVert \geq \lvert T'(f)(x) \rvert =\lvert f(Tx) \rvert= \lvert f(y) \rvert \geq \lVert f \rVert -\epsilon$ (Por def de norma $\lVert T'(f) \rVert$ dado que $\lVert x \rVert=1$) 
>>	7. Mostrando que $\lVert T'(f) \rVert =\lVert f \rVert$ 

>[!Corollary] Reflexividad de $\ell^{p}$ 
>$\ell^{p}$ con $\ 1<p<\infty$ es reflexivo 
>>[!Proof]-
>>1. Sean $x\in\ell^{p} \ \ y\in \ell^{q}$ con  $1<q< \infty$ y $\frac{1}{q}+\frac{1}{p}=1$ 
>>2. Entonces $$T_{p}'(J_{\ell^{p}}(x))(y)=(J_{\ell^{p} }(x))T_{p}(y)=T_{p}(y)(x)=\sum_{n=1}^{\infty} x_{n} y_{n} =T_{q}(x)(y)$$ 
>>3. Osea $T_{p}'(J_{\ell^{p} }(x))=T_{q}(x)$
>>4. Y $T_{p}'$ es iso por [[Teórico 13#^fbf5b7]] (por que $T_{p}$ lo es)  
>>5. Luego $J_{\ell^{p} }=( T_{p}' )^{-1} \circ T_{q}$ (despejando en la ec de arriba) y como $T_{q}$ y $T_{p}'$ son iso entonces la composicion es iso. 
>>6. Como $J_{\ell^{p} }$ es isomorfismo (osea sobre) entonces $\ell^{p}$ es reflexivo por [[Teórico 12#^5bf92d]]

>[!Corollary] Isomorfimo preserva reflexividad 
>Si $X,Y$ son isomorfos entonces $X$ reflexivo sii $Y$ reflexivo 
>>[!Proof]-
>>1. Como $X,Y$ son isomorfos existe $T:X\longrightarrow Y$ isomorfismo. Entonces por [[Teórico 13#^fbf5b7]]  aplicado dos veces $T''$ es isomorfos. 
>>2. Luego usando la igualdad en [[Teórico 13#^7f9edb]] y considerando que composición de isomorfismos es isomorfismo queda probado  $$J_{Y}(Y)=T''(J_{X}(T^{-1}(Y)))=T''(J_{X}(X))=T''(X'')=Y''$$

>[!Corollary] $\ell^{1}$ no es reflexivo 
>$\ell^{1}$ no es reflexivo
>>[!Proof]-
>>1. Sabemos que $c_{0}$ no es reflexivo [[#^8dcf06]] entonces por [[Teórico 12#^ba33bb]] (considerando $c_{0}$ es Banach) $c_{0}'$  no es reflexivo
>>2. $\ell^{1}$ es isomorfo a $c_{0}'$ por [[Teórico 12#^0a50d4]] entonces por [[Teórico 13#^9a9641]] 

>[!Proposition] Propiedades de espacios complementarios y de proyecciones sobre espacios
>$U,V\subseteq X$ son complementarios entonces:
>- (a)  $U$ y $V$ complementarios topologicos sii $P_{U}$ y $P_{V}$ son continuas
>- (b) Si $U,V$ son complementarios topologicos entonces $U,V$ son cerrados
>- (c) $X$ es Banach. Si $U$ y $V$ son cerrados y complementarios entonces son complementarios topologicos 
>>[!Proof]-
>>- (a) 
>>	1. $U,V$ complementarios topologicos $\iff$  $x \rightarrow u_{x}$ y $x \rightarrow v_{x}$ son funciones continuas $\iff$ $P_{U},P_{V}$ son continuas  
>>- (b) 
>>	1. $P_{U}$ es continua por (a)
>>	2. Entonces $U=Im(P_{U})=Ker(I-P_{U})$ cerrado por que $I-P_{U}$ continua por 1. y $Ker(I-P_{U})$ es preimagen del $\{ 0 \}$ que es cerrado
>>- (c) 
>>	1. Como $P_{U}+P_{V}=Id$ por [[Teórico 13#^c34834]]. Entonces basta ver que $P_{U}$ es continua (por que entonces $P_{V}=Id+P_{U}$ seria continua tambien) 
>>	2. Por [[Teórico 7#^c58dff]] basta ver que $gr(P_{U})$ es cerrado. 
>>	3. Sea $\{( x_{n},P_{U}x_{n} ) \} \subseteq gr(P_{U})$ tal que $(x_{n} ,P_{U}x_{n} )\longrightarrow (x,y)\in X\times X$ queremos $y=P_{U}x$ 
>>	4. Como $\{P_{U}x_{n} \}\subseteq U$ con $U$ cerrado e entonces $y\in U$. 
>>	5. Notar que cmoo $U$ y $V$ son complementarios de [[Teórico 13#^c34834]] se desprende que $Id-P_{U}=P_{V}$ osea que $Im(Id-P_{U})=Im(P_{V})\subseteq V$   
>>	6. Entonces como $\{(I-P_{U})x_{n} \}\subseteq V$ podemos hacer lo mismo que en 4. osea $x-y=\lim x_{n} -P_{U}x_{n} \in V$ por qué $V$ cerrado
>>	7. Como $P_{U}(x)=x\ \ \forall x\in U$ y $P_{U}x=0\ \ \forall x\in V$ tenemos $0=P_{U}(x-y)=P_{U}x-P_{U}y=P_{U}(x)-y$   

>[!Lemma] Sucesion acotada de funciones tiene limite
>Sea $X$ Banach y sea $S= \{s_{\alpha }: \alpha \in A\}$  tal que $\overline{Sp}S=X$. Si $\{f_{n} \}$ es una sucesion acotada en $X'$ y $\{f_{n} (s_{\alpha })\}$ converge $\forall \alpha \in A$ entonces $\exists f\in X'$ tal que $f_{n} (x)\longrightarrow f(x)\quad \forall x\in X$  
>>[!Proof]-
>>1. Sea $x\in X$ como $\{f_{n} \}$ es acotada $\exists c>0$ tal que $\lVert f_{n}  \rVert \leq c \quad \forall n\in \mathbb{N}$.
>>2. Ahora dado $\epsilon >0$ existe $s\in Sp(S)$ con $\lVert x-s \rVert \leq \frac{\epsilon }{3c}$. 
>>3. Entonces $$\forall n\quad\lvert f_{n} (x)-f_{n} (s) \rvert \leq \lVert f_{n}  \rVert \lVert x-s \rVert \leq \frac{\epsilon }{3}$$
>>4. Luego $$\lvert f_{n} (x)-f_{m}(x) \rvert \leq \lvert f_{n} (x)-f_{n} (s) \rvert +\lvert f_{n} (s)-f_{m}(s) \rvert +\lvert f_{m}(s)-f_{m}(x) \rvert \leq \frac{2}{3}\epsilon +\lvert f_{n} (s)-f_{m}(s) \rvert $$
>>5. Pero $\lvert f_{n}(s)-f_{m}(s) \rvert \leq \frac{\epsilon }{3}$ si $n,m\geq n_{0}$ por que $\{f_{n}(s_{\alpha })\}$ converge (entonces es de Cauchy) $\forall \alpha \in A$ y $s$ es combinacion lineal finita de elementos de $S$
>>6. Entonces $\{f_{n}(x)\}$ es de Cauchy entonces converge. Luego podemos definir $f(x)=\lim_{n}f_{n}(x)$
>>7. Y ver continuidad de $f$ sale por [[Teórico 8#^02b4aa]] 

# Teorico 14
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

>[!Theorem] Banach-Alaogtu MEMO
>Si $X$ es Banach separable y $\{ f_{n} \}\subseteq X'$ es acotada, entonces $\{ f_{n} \}$ tiene una subsucesion que converge debil-* a algun $f\in X'$
>>[!Proof]-
>>1. Sea $\{ s_{k} \}\subseteq X$ denso 
>>2. Como $\{ f_{n} \}$ es acotada entonces $\{ f_{n}(s_{1}) \}\subseteq \mathbb{F}$ es acotada.
>>3. Entonces $\exists \{ f_{n_{1}(m)}(s_{1}) \}_{m\in \mathbb{N}}$ ($m$ indexa la sub) convergente
>>4. A su vez la sucesion $\{ f_{n_{1}(m)}(s_{2}) \}$ es acotada entonces tiene sub convergente $\{ f_{n_{2}(m)}(s_{2})\}$  
>>5. Asi inductivamente entonces la sub diagonal $\{ f_{n_{m}(m)} \}_{m\in \mathbb{N}}$ es acotada en $X'$ (por qué $\{ f_{n} \}$ es acotada por hipótesis) y $\{ f_{n_{m}(m)}(s_{k}) \}$ converge $\forall k\in \mathbb{N}$ por construcción
>>6. Luego $f_{n_{m}(m)}$ converge debil-* a algun $f\in X'$ [[Teórico 13#^99815e]]. (Notar que $\{ s_{k} \}\subseteq Sp(\{ s_{k} \})$ entonces $\overline{Sp}(\{ s_{k} \})=X$) 

>[!Corollary] Compacidad debil-* de la bola cerrada MEMO
>Sea $X$ Banach separable entonces toda sucesion en $B=\{ f\in X':\lVert f \rVert\leq 1 \}$ tiene subsucesion que converge debil-* a algun elemento de $B$. Es decir $B$ es compacta respecto a la topologia inducida por $d_{W}$ (existe, pues $X$ es separable)
>>[!Proof]-
>>1. Sea $\{ f_{n} \}\subseteq B$ entonces por [[Teórico 14#^105785]] existe $\{ f_{n_{k}} \}$ sub sucesion con $f_{n_{k}}\rightharpoonup^{*}f$ para algun $f\in X'$
>>2. Pero $\lvert f(x) \rvert=\lim_{ k \to \infty }\lvert f_{n_{k}}(x) \rvert\leq \lim_{ k \to \infty }\lVert f_{n_{k}} \rVert\lVert x \rVert\leq \lVert x \rVert\quad\forall x\in X$. (Por hipotesis $\lVert f_{n_{k}} \rVert\leq 1$). Entonces $\lVert f \rVert\leq 1$ con lo cual $f\in B$
>>3. Además $d_{W}(f_{n_{k}},f)\xrightarrow{n\rightarrow \mathbb{N}}0$ por [[#^0bed9e]] con lo cual $B$ compacto respecto a la topología inducida por $d_{W}$ (por que toda sucesión en $B$ tiene sub convergente con respecto a $d_{W}$) 

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

>[!Corollary] Convergencia debil dentro de cerrado, acotado y convexo
>$X$ reflexivo $M\subseteq X$ cerrado, acotado y convexo. Entonces toda sucesion en $M$ tiene subsucesion que converge debilmente a algun $x\in M$.
>>[!Proof]-
>>1. Como $M$ acotado y $\{ x_{n} \}\subseteq M$ por [[#^61d6cf]] existe subsucesion que converge debil a algun $x\in X$ 
>>2. Como $M$ cerrado y convexo $x\in M$ por [[Teórico 14#^195d3b]] (d)

>[!Proposition]
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

>[!Corollary] DUDA
>$\mathcal{H}$ Hilbert y $T\in B(\mathcal{H})$ entonces $T$ invertible $\iff\ker (T^{*})=0$ y $\exists \alpha >0$ con $\lVert T(x) \rVert\geq \alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$
>>[!Proof]-
>>- $(\Leftarrow)$  
>>	1. $\mathcal{H}=0^{\perp}=\ker (T^{*})^{\perp}=(Im(T)^{\perp})^{\perp}=\overline{Im(T)}=Im(T)$ (Última igualdad por [[Teórico 7#^6e0039]]) 
>>	2. Entonces $T$ es sobre.
>>	3. Ademas si $Tx=0$ entonces $0=\lVert Tx \rVert\geq\alpha \lVert x \rVert$ por lo tanto $x=0$ entonces es inyectiva
>>	4. Como $\mathcal{H}$ es Banach entonces por aplicacion abierta $T$ es invertible 
>>- $(\Rightarrow)$ 
>>	1. Por ser inversible (sobreyectiva)  $Im(T)=\mathcal{H}$ osea $\overline{Im(T)}=\mathcal{H}$ entonces $\ker(T^{*})=\{ 0 \}$ por [[Teórico 14#^592165]] (c) 
>>	2. Ademas $\lVert x \rVert=\lVert TT^{-1}x \rVert\leq\lVert T^{-1} \rVert\lVert Tx \rVert$ entonces $\lVert T^{-1} \rVert^{-1}\lVert x \rVert\leq \lVert Tx \rVert$ 

# Teorico 15
>[!Lemma] Propiedades operador normal
>$T\in B(\mathcal{H})$ normal $\alpha >0$ entonces
>- (a) $\lVert Tx \rVert=\lVert T^{*}x \rVert\quad\forall x\in \mathcal{H}$ 
>- (b) $\lVert Tx \rVert\geq\alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$ entonces $\ker T^{*}=\{ 0 \}$ 
>>[!Proof]-
>>- (a) 
>>	1. Usando $TT^{*}=T^{*}T$ $$\lVert Tx \rVert ^{2} -\lVert T^{*} x \rVert ^{2} =(Tx,Tx)-(T^{*} x,T^{*}x )=(T^{*} Tx,x)-(TT^{*} x,x)=0$$ 
>>
>>- (b) 
>>	1. Sea $y\in \ker T^{*}$  entonces por (a) $0=\lVert T^{*}y \rVert=\lVert Ty \rVert\geq \alpha \lVert y \rVert$ entonces $y=0$

>[!Corollary] Desigualdad implica inversible con operadores normales MEMO
>$T\in B(\mathcal{H})$ es normal entonces $T$ inversible $\iff \exists \alpha >0$ tal que $\lVert Tx \rVert\geq\alpha \lVert x \rVert\quad\forall x\in \mathcal{H}$
>>[!Proof]-
>>$(\Leftarrow)$ [[Teórico 15#^6cb446]] implica $\ker T^{*}=\{ 0 \}$ luego por [[Teórico 14#^5be0d2]]
>>$(\Rightarrow)$  Sale directo de [[Teórico 14#^5be0d2]]

>[!Lemma] Las autoadjuntas forman Banach real
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

>[!Lemma] ver bien
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

>[!Theorem] Espectro es compacto y sus elementos menores (modulo) que norma del operador 
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

>[!Proposition] Espectro de $T^{*}$ 
>$\mathcal{H}$ Hilbert, $T\in B(H)$ entonces 
>$$\sigma(T^{*} )=\{ \overline{\lambda}:\lambda\in \sigma(T)  \}$$
>>[!Proof]-
>>4. Si $\lambda\not\in\sigma(T)$ entonces $T-\lambda I$ es inversible  
>>5. Luego $(T-\lambda I)^{*}=T^{*}-\overline{\lambda} I$ es inversible Por [[Teórico 15#^b9f186]] entonces $\overline{\lambda}\not\in\sigma(T^{*})$  
>>6. Permutando los roles de $T$ y $T^{*}$ deducimos que $\overline{\lambda}\not\in\sigma(T^{*})$ entonces $\lambda \not\in\sigma(T)$ 

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

>[!Corollary]
>Si $U\in B(\mathcal{H})$ es unitario $$\sigma(U)\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert =1 \}$$
>>[!Proof]-
>>1. Si $U$ unitario y recordemos que los unitarios son isometrias [[Teórico 15#^317da9]]) entonces $\lVert U \rVert=1$ 
>>2. Luego $\sigma(U)\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert\leq 1 \}$ por [[Teórico 15#^4949f7]]
>>3. Tambien $\sigma(U^{*})\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert\leq 1 \}$ por que $U^{*}$ tambien es unitario
>>4. Pero $U^{*}=U^{-1}$ (def unitario) entonces $$\sigma(U)=\sigma((U^{-1})^{-1})=\sigma((U^{*} )^{-1})=\{ \lambda^{-1}:\lambda\in \sigma(U^{*} ) \}\subseteq \{ \lambda\in \mathbb{C}:\lvert \lambda \rvert \geq1 \}$$
>>Por [[Teórico 15#^145b8c]] (b) la ultima igualdad, la inclusión por 2.

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
# Teorico 16
>[!Lemma]
>Si $\mathcal{H}$ es un espacio de Hilbert complejo, $\mathcal{M}$ es un subespacio lineal cerrado de $\mathcal{H}$ y $P$ es la proyección ortogonal de $\mathcal{H}$ sobre $\mathcal{M}$, entonces $I - P$ es la proyección ortogonal de $\mathcal{H}$ sobre $\mathcal{M}^\perp$.
>>[!Proof]-
>>1. Como $I$ y $P$ son autoadjuntos, también lo es $I - P$. [[Teórico 15#^2e9773]] 
>>2. Además, como $P^2 = P$ $$(I - P)^2 = I - 2P + P^2 = I - 2P + P = I - P$$por lo tanto, $I - P$ es una proyección ortogonal. 
>>3. Sea $x\in \mathcal{H}$ entonces $x=x_{1}+x_{2}$ con $x_{1}\in \mathcal{M}$ $x_{2}\in \mathcal{M}^{\perp}$ entonces $$(I-P)x=x_{1}+x_{2}-Px_{1}-Px_{2}=x_{2}$$ mostrando que $I-P$ es proyectar sobre $\mathcal{M}$      

>[!Corollary]
>Si $\mathcal{H}$ es un espacio de Hilbert complejo, $\mathcal{M}$ es un subespacio lineal cerrado de $\mathcal{H}$, $\{e_n\}_{n=1}^J$ es una base ortonormal para $\mathcal{M}$, donde $J$ es un número entero positivo o $\infty$, y $P$ es la proyección ortogonal de $H$ sobre $\mathcal{M}$, entonces 
>$$P_{\mathcal{M}}x = \sum_{n=1}^J (x, e_n) e_n$$
>>[!Proof]-
>>4. Notar que $ImP_{\mathcal{M}}\subseteq \mathcal{M}$ (Por definicion sale como en paso 6. a 8. del [[Teórico 16#^21a7c0]] (b))
>>5. Por lo tanto dado $P_{\mathcal{M}}x\in \mathcal{M}$ $$P_{\mathcal{M}}x=\sum^{J}_{n=1}(P_{\mathcal{M}}x,e_{n})e_{n}=\sum^{J}_{n=1}(x,P_{\mathcal{M}}e_{n})e_{n}=\sum^{J}_{n=1}(x,e_{n})e_{n}$$ Usamos $P_{\mathcal{M}}$ es autoadjunta y que $e_{n}\in \mathcal{M}$ 

>[!Lemma]
>Sea $H$ un espacio de Hilbert complejo, y sea $\mathcal{S}$ el espacio de Banach real de todos los operadores autoadjuntos en $B(H)$. Si $S \in \mathcal{S}$, entonces existe un $\Phi \in B(\mathcal{C}_{\mathbb{R}}(\sigma(S)), \mathcal{S})$ tal que:
>- (a) $\Phi(p) = p(S)$ siempre que $p$ sea un polinomio en $\mathcal{C}_\mathbb{R}(\sigma(S))$;  
>- (b) $\Phi(fg) = \Phi(f)\Phi(g)$ para todo $f, g \in \mathcal{C}_\mathbb{R}(\sigma(S))$
>>[!Proof]-
>> 6. Sea $\mathcal{P}$ el subespacio lineal de $\mathcal{C}_\mathbb{R}(\sigma(S))$ compuesto por todos los polinomios. 
>> 7. Definimos $\varphi : \mathcal{P} \to \mathcal{S}$ por $\varphi(p) = p(S)$. 
>> 8. Entonces, $\varphi$ es una transformación lineal tal que $\varphi(pq) = \varphi(p)\varphi(q)$ para todo $p \in \mathcal{P}$ por [[Teórico 6#^c381db]] 
>> 9. Además como $p(S)$ es autoadjunta ([[Teórico 15#^2e9773]] y $A^{n}$ autoadjunta si $A$ autoadjujta ) 
>> 10. usando [[Teórico 15#^d51465]] (e) y [[Teórico 15#^145b8c]] (a) 
>> $$\begin{align} \|\varphi(p)\| = \|p(S)\| = r_\sigma(p(S)) & = \sup\{|\mu| : \mu \in \sigma(p(S))\}\\& = \sup\{|p(\lambda)| : \lambda \in \sigma(S)\} \\&= \|p\|_{\infty}\end{align}$$ (notar $p \in \mathcal{C}_{\mathbb{R}}(\sigma(S))$ y como $\sigma(S)$ es compacto. Dicha norma existe y es finita) 
>> 11. Así, $\varphi$ es continua osea $\varphi \in  B(\mathcal{P},\mathcal{S})$ (Ademas una isometria) 
>> 12. Como $\mathcal{S}$ es un espacio de Banach real y $\mathcal{P}$ es denso en $\mathcal{C}_{\mathbb{R}}(\sigma(S))$ (además usando que el espectro es compacto para usar [[Teórico 4#^f39524]] ) existe $\Phi \in B(\mathcal{C}_\mathbb{R}(\sigma(S)), \mathcal{S})$ tal que $\Phi(p) = \varphi(p)\quad\forall p\in \mathcal{P}$ por [[Teórico 5#^33d528]] (b) 
>> 13. Además, como $\varphi(pq) = \varphi(p)\varphi(q)$ para todo $p \in \mathcal{P}$ se sigue que $\Phi(fg) = \Phi(f)\Phi(g)$ para todo $f, g \in \mathbb{C}_{\mathbb{R}}(\sigma(S))$ por la densidad de $\mathcal{P}$ en $\mathbb{C}_{\mathbb{R}}(\sigma(S))$ y la continuidad de $\Phi$.

>[!Theorem] MEMO
> Sea $\mathcal{H}$ un espacio de Hilbert complejo, sea $\mathcal{S}$ el espacio de Banach de todos los operadores autoadjuntos en $B(\mathcal{H})$ y sea $S \in \mathcal{S}$ positivo.
>- (a) Existe una raíz cuadrada positiva $R$ de $S$ que es el límite de una secuencia de polinomios evaluados en $S$
>- (b) Si $Q$ es cualquier raíz cuadrada positiva de $S$, entonces $R = Q$
>>[!Proof]-
>>- (a) 
>>	1. Como $S$ es positivo es autoadjunto entonces $\sigma(S) \subseteq [0, \infty)$ por [[Teórico 16#^ea1bda]]
>>	2. Entonces $f : \sigma(S) \to \mathbb{R}$ y $g : \sigma(S) \to \mathbb{R}$ definidos por $$f(x) = x^{1/4}, \quad g(x) = x^{1/2} \quad \text{y} \quad j(x) = x$$están en $\mathbb{C}_\mathbb{R}(\sigma(S))$. 
>>	3. Sea $R=g(S)$ y $T=f(S)$ que son autoadjuntas (recordar [[Teórico 16#^e6333b]] $\Phi:\mathcal{C}_{\mathbb{R}}(\sigma(S))\to\mathcal{S}$ entonces $T=f(S)=\Phi(f)\in \mathcal{S}$)  
>>	4. El conjunto $\mathcal{P}$ es denso en $\mathbb{C}_R(\sigma(S))$ entonces existen polinomios $g_{n}$ que convergen a $g$.
>>	5. Luego $R=g(S)=\lim_{ n \to \infty }g_{n}(S)$ que son una secuencia de polinomios evaluados en $S$  
>>	6. Además, por el [[Teórico 16#^e6333b]] (b) $$R^2 = (g(S))^2 = g^2(S) = j(S) = S$$ por lo que $R$ es una raíz cuadrada de $S$ y $$T^2 = (f(S))^2 = f^2(S) = g(S) = R$$
>>	7. Entonces $R$ es positivo porque $$(Rx,x)=(T^{2}x,x)=(Tx,T^{*}x)=(Tx,Tx)=\lVert Tx \rVert^{2}\geq0\quad\forall x\in \mathcal{H}$$
>>- (b) 
>>	1. Como $$QS = QQ^2 = Q^2Q = SQ$$
>>	2. Entonces $p$ es cualquier polinomio, entonces $Qp(S) = p(S)Q$ (Usando que comutan por el 1.) 
>>	3. Entonces, como $R$ es el límite de una secuencia de polinomios en $S$ $$QR = RQ$$
>>	4. Como $Q$ es positivo, $Q$ tiene una raíz cuadrada positiva $P$ por la parte (a). Ergo $P^{2}=Q$ 
>>	5. Sea $x \in \mathcal{H}$ e $y=(R-Q)x$. Entonces como $R^2 = Q^2 = S$ y $T,P$ auto adjuntas $T$ defimida en el (a) cumple $T^{2}=R$  $$\begin{align}\|T y\|^2 + \|P y\|^2 & = (T^2 y, y) + (P^2 y, y)\\& = ((R + Q)y, y)\\& = ((R + Q)(R - Q)x, y)&& (y=(R-Q)x)\\& =((R^{2}-Q^{2})x,y)&&(QR=RQ)\\&= 0\end{align}$$
>>	6. Por lo tanto $\lVert Ty \rVert=\lVert Py \rVert=0$ ergo $Ty = Py=0$ y por lo tanto $T^2 y = P^2 y = 0$. Entonces $Ry = Qy$ con lo cual $(R-Q)y=0$  
>>	7. Luego usando 10. $$\begin{align}0=((R^{2}-Q^{2})x,y)& = ((R+Q)(R - Q)x, y)\\& = ((R + Q)y, y) \\&= (Ry,y)+(Qy,y)\end{align}$$
>>	8. Finalmente $R = Q$.
# Teorico 17
>[!Theorem] $K(X,Y)$ es subespacio lineal y producto de compacto con otro
>Sean $X$, $Y$, $Z$ espacios normados.
>- (a) Si $S, T \in K(X, Y)$ y $\alpha, \beta \in \mathbb{C}$ entonces $\alpha S + \beta T$ es compacto. Así, $K(X, Y)$ es un subespacio lineal de $B(X, Y)$.
>- (b) Si $S \in B(X, Y)$, $T \in B(Y, Z)$ y al menos uno de los operadores $S, T$ es compacto, entonces $TS \in B(X, Z)$ es compacto.
>>[!Proof]-
>>- (a) 
>>	1. Sea $\{x_n\}$ una sucesión acotada en $X$. Dado que $S$ es compacto, existe una subsecuencia $\{x_{n(r)}\}$ tal que $\{Sx_{n(r)}\}$ converge. 
>>	2. Luego, dado que $\{x_{n(r)}\}$ es acotada y $T$ es compacto, existe una subsecuencia $\{x_{n(r(s))}\}$ de la sucesión $\{x_{n(r)}\}$ tal que $\{Tx_{n(r(s))}\}$ converge. 
>>	3. Se deduce que la sucesión $\{\alpha Sx_{n(r(s))} + \beta Tx_{n(r(s))}\}$ converge. Así, $\alpha S + \beta T$ es compacto.
>>- (b) 
>> 	1. Sea $\{x_n\}$ una sucesión acotada en $X$. 
>> 	2. Si $S$ es compacto entonces existe una subsecuencia $\{x_{n(r)}\}$ tal que $\{Sx_{n(r)}\}$ converge. 
>> 	3. Como $T$ es acotado (y, por lo tanto, continuo), la sucesión $\{TSx_{n(r)}\}$ converge. 
>> 	4. Así, $TS$ es compacto.
>> 	5. Si $T$ compacto y $S$ es acotado pero no compacto, entonces la sucesión $\{Sx_n\}$ es acotada. 
>> 	6. Luego, dado que $T$ debe ser compacto, existe una subsecuencia $\{Sx_{n(r)}\}$ tal que $\{TSx_{n(r)}\}$ converge, y nuevamente $TS$ es compacto.

>[!Theorem] Rango finito y acotada entonces compacto
>Sean $X$, $Y$ espacios normados y $T \in B(X, Y)$.
>- (a) Si $T$ tiene rango finito, entonces $T$ es compacto.
>- (b) Si $\dim X$ o $\dim Y$ es finito, entonces $T$ es compacto.
>>[!Proof]-
>>- (a) 
>>	1. Para cualquier sucesión acotada $\{x_n\}$ en $X$, la sucesión $\{Tx_n\}$ está acotada en $Z=ImT$ (como $T\in B(X,Y)$ tenemos $\lVert Tx_{n} \rVert\leq  \tilde{k}\lVert x_{n} \rVert\leq \tilde{k}k$)  
>>	2. Dado que $T$ tiene rango finito, el espacio $Z = \text{Im } T$ es un espacio normado de dimensión finita. 
>>	3. Luego por el teorema de Bolzano–Weierstrass (vale en dim finita), esta sucesión debe contener una subsucesion convergente. 
>>	4. Por lo tanto, $T$ es compacto.
>>- (b) 
>>	1. Si $\dim X$ es finito, entonces $rg(T) \leq \dim X$ entonces $rg(T)$ (rango de $T$) tiene dim finita
>>	2. mientras que si $\dim Y$ es finito, entonces claramente la dimensión de $\text{Im } T \subset Y$ debe ser finita (osea el rango de $T$ debe ser finito).
>>	3. Así, en cualquiera de los casos, el resultado se deduce de la parte (a)

>[!Theorem] Dim infinita opderador identidad no es compacto
>Si $X$ es un espacio normado de dimensión infinita, entonces el operador identidad $I$ en $X$ no es compacto.
>>[!Proof]-
>>4. Dado que $X$ es un espacio normado de dimensión infinita, la prueba del [[Teórico 1#^8db74f]] muestra que existe una sucesión de vectores unitarios $\{x_n\}$ en $X$ que no tiene ninguna subsecuencia convergente. 
>>5. Así, la sucesión $\{Ix_n\} = \{x_n\}$ no puede tener una subsecuencia convergente a pesar de ser $\{ x_{n} \}$ acotada
>>6. Por lo tanto el operador $I$ no es compacto.

>[!Corollary] Dim infinta operador compacto no es invertible
>Si $X$ es un espacio normado de dimensión infinita y $T \in K(X)$, entonces $T$ no es invertible.
>>[!Proof]-
>>7. Supongamos que $T$ es invertible. 
>>8. Entonces como $T$ compacto, por [[#^984cdb]] (b) el operador identidad $I = T^{-1}T$ debe ser compacto. 
>>9. Pero como $X$ es de dimensión infinita, esto contradice el [[#^e35495]]

>[!Theorem]
>Si $X$ es un espacio normado, $Y$ es un espacio de Banach y $\{T_k\}$ es una sucesión en $K(X, Y)$ que converge a un operador $T \in B(X, Y)$, entonces $T$ es compacto. Por lo tanto, $K(X, Y)$ es cerrado en $B(X, Y)$.
>>[!Proof]-
>>10. Sea $\{x_n\}$ una sucesión acotada en $X$. Por compacidad, existe una subsucesion de $\{x_n\}$, a la que etiquetaremos como $\{x_{n(1, r)}\} = \{x_{n(1, r)}\}_{r=1}^{\infty}$, tal que la sucesión $\{T_1 x_{n(1, r)}\}$ converge. 
>>11. De manera similar, existe una subsucesion $\{x_{n(2, r)}\}$ de $\{x_{n(1, r)}\}$ tal que $\{T_2 x_{n(2, r)}\}$ converge. Además, $\{T_1 x_{n(2, r)}\}$ converge ya que es una subsucesion de $\{T_1 x_{n(1, r)}\}$. 
>>12. Repitiendo este proceso inductivamente, vemos que para cada $j \in \mathbb{N}$ hay una subsecuencia $\{x_{n(j, r)}\}$ con la propiedad de que: para cualquier $k \leq j$, la sucesión $\{T_k x_{n(j, r)}\}$ converge. 
>>13. Sea $n(r) = n(r, r)$, para $r \in \mathbb{N}$, obtenemos una única subsecuencia $\{x_{n(r)}\}$ con la propiedad de que, para cada $k$ fijo de $\mathbb{N}$, la sucesión $\{T_k x_{n(r)}\}$ converge a medida que $r \to \infty$ (este tipo de argumento de "diagonalización de Cantor" es necesario para obtener una única sucesión que converge simultáneamente para todos los operadores $T_k$, $k \in \mathbb{N}$). 
>>14. Veremos ahora que la sucesión $\{T x_{n(r)}\}$ converge. Lo hacemos mostrando que $\{T x_{n(r)}\}$ es una sucesión de Cauchy y, por lo tanto, converge ya que $Y$ es un espacio de Banach.
>>15. Sea $\epsilon > 0$ dado. Dado que la subsecuencia $\{x_{n(r)}\}$ está acotada, existe $M > 0$ tal que $\|x_{n(r)}\| \leq M$, para todo $r \in \mathbb{N}$. 
>>16. Además como $\|T_k - T\| \to 0$ cuando $k \to \infty$, existe un entero $k \geq 1$ tal que $\|T_k - T\| < \epsilon / 3M$.
>>17. A continuación, dado que $\{T_k x_{n(r)}\}$ (para cualquier $k$ fijo) converge (es de Cauchy) existe un entero $R \geq 1$ tal que si $r, s \geq R$ entonces $\|T_k x_{n_{(r)}} - T_k x_{n_{(s)}}\| < \epsilon / 3$
>>18. Entonces tomando un $T_{k}$ adecuado tenemos  $$\|T x_{n(r)} - T x_{n(s)}\| < \|T x_{n(r)} - T_k x_{n(r)}\| + \|T_k x_{n(r)} - T_k x_{n(s)}\| + \|T_k x_{n(s)} - T x_{n(s)}\| < \epsilon\quad\forall r,x\geq R$$ (Notar que $\lVert Tx_{n(r)}-T_{k}x_{n(r)} \rVert\leq \lVert T-T_{k} \rVert\lVert x_{n(r)} \rVert=\frac{\epsilon}{3M}M=\frac{\epsilon}{3}$) 
>>19. Lo que demuestra que $\{T x_n(r)\}$ es una sucesión de Cauchy.

>[!Corollary]
>Si $X$ es un espacio normado, $Y$ es un espacio de Banach y $\{T_k\}$ es una sucesión de operadores acotados de rango finito que converge a $T \in B(X, Y)$, entonces $T$ es compacto.

>[!Example]
>El operador $T \in B(\ell^2)$ definido por $T\{a_n\} = \{n^{-1}a_n\}$ es compacto (Ejemplo 4.5 muestra que $T \in B(\ell^2)$).
>>[!Proof]-
>>20. Para cada $k \in \mathbb{N}$ definimos el operador $T_k \in B(\ell^2)$ por 
>>$$
T_k\{a_n\} = \{b_n^k\}, \quad \text{donde} \quad 
b_n^k = 
\begin{cases} 
n^{-1} a_n, & \text{si } n \leq k, \\
0, & \text{si } n > k.
\end{cases} $$
>>2. Los operadores $T_k$ son acotados y lineales, y tienen rango finito. Osea son compactos
>>3. Además, para cualquier $a \in \ell^2$ tenemos 
>>$$\|(T_k - T)a\|^2 = \sum_{n=k+1}^{\infty} |a_n|^2/n^2 \leq (k + 1)^{-2} \sum_{n=k+1}^{\infty} |a_n|^2 \leq (k + 1)^{-2}\|a\|^2.$$
>>4. Esto implica que $\|T_k - T\| \leq (k + 1)^{-1}$
>>5. Y por lo tanto $\|T_k - T\| \to 0$. Así, $T$ es compacto por [[Teórico 17#^f21d4d]]

>[!Theorem] Compactos tienen sucesion de rango finto que converge DUDA
>Si $X$ es un espacio normado, $\mathcal{H}$ es un espacio de Hilbert y $T \in K(X, \mathcal{H})$, entonces existe una sucesión de operadores de rango finito (y acotados)  $\{T_k\}$ que converge a $T$ en $B(X, \mathcal{H})$.
>>[!Proof]-
>>1. Si $T$ mismo tuviera rango finito, el resultado sería trivial, así que asumimos que no lo tiene. 
>>2. Entonces $Im(T)$ tiene dimension infinita por lo tanto $\overline{ImT}$ tambien
>>3. Por [[Teórico 2#^5c7207]] el conjunto $\overline{ImT}$ es un espacio de Hilbert por [[Teórico 17#^dec284]] es separable, por el [[Teórico 3#^a44e0c]] tiene una base ortonormal $\{e_n\}$
>>4. Para cada entero $k \geq 1$, sea $P_k$ la proyección ortogonal de $\overline{ImT}$ sobre el subespacio lineal $M_k = \text{Sp}\{e_1, \dots, e_k\}$ (que es cerrado por dim finita) y sea $T_k = P_k T$. 
>>5. Por definicion $ImT_{k} \subset M_k$ luego $T_k$ tiene rango finito. Y por definicion es acotado, dado que tanto $P_{k}$ como $T_{k}$ son acotados enotnces $$\lVert T_{k} \rVert=\lVert P_{k}T \rVert\leq \lVert P_{k} \rVert\lVert T \rVert\leq \lVert T \rVert$$ 
>>6. Mostraremos que $\|T_k - T\| \to 0$ a medida que $k \to \infty$.
>>7. Supongamos que esto no es cierto. Entonces, después de tomar una subsecuencia de la sucesión $\{T_k\}$ si es necesario, existe un $\epsilon > 0$ tal que $\|T_k - T\| \geq \epsilon$ para todo $k$. 
>>8. Así, existe una sucesión de vectores unitarios $x_k \in X$ tal que $\|(T_k - T) x_k\| \geq \epsilon/2$ para todo $k$. 
>>9. Como $T$ es compacto, podemos suponer que $T x_k \to y$, para algún $y \in \overline{Im(T)}$ (después de tomar nuevamente una subsecuencia si es necesario). 
>>10. Usando la representación de $P_{M_{k}}$ en [[Teórico 16#^f02ad5]] y restandole a $Iy=y=\sum^{\infty}_{n=1}(y,e_{n})e_{n}$
>>$$\begin{align} 
(T_k - T) x_k = (P_k - I) T x_k = & (P_k - I)y + (P_k - I) T x_k - (P_{k}-I)y   \\
 \\
=  &(P_{k}-I)y + (P_k - I)(T x_k - y) \\
 = & -\sum^{\infty}_{n=k+1}(y,e_{n})e_{n}+(P_{k}-I )(Tx_{k}-y) 
\end{align}$$
>>por lo que tomando normas deducimos que 
>>$$\begin{align}\epsilon / 2 \leq \| (T_k - T) x_k \| \leq& \|\sum_{n=k+1}^{\infty} (y, e_n)^2\| + (\lVert P_{k} \rVert+\lVert I \rVert  )\|T x_k - y\| \\
  \\ 
=& \| \sum_{n=k+1}^{\infty} (y, e_n)e_{n}\| + 2\|T x_k - y\| 
\end{align}$$
>>(Siendo $\|P_k\| \leq 1$, por el [[Teórico 16#^21a7c0]]). 
>>11. Absurdo por que el lado derecho de esta desigualdad tiende a cero a medida que $k \to \infty$ (la suma tiende a 0 por que como serie converge a y la cola es tan pequena como uno quiera) 

>[!Lemma]
>Si $H$ es un espacio de Hilbert y $T \in B(H)$, entonces $r(T) = r(T^*)$ (ya sean números finitos o $\infty$). En particular $T$ tiene rango finito si y solo si $T^*$ tiene rango finito.
>>[!Proof]-
>>12. Supongamos primero que $r(T) < \infty$. 
>>13. Para cualquier $x \in H$, escribimos la descomposición ortogonal de $x$ con respecto a $\text{Ker } T^*$ como $x = u + v$, con $u \in \text{Ker } T^*=(ImT)^{\perp}$ y $v \in \text{Im } T$ (ya que $r(T) < \infty$ entonces $ImT$  es cerrado ergo existe única descomposición).
>>14. Así, $T^* x = T^*(u + v) = T^* v$, y por lo tanto $\text{Im } T^* = T^*(\text{Im } T)$, lo que implica que $r(T^*) \leq r(T)$. 
>>15. Por lo tanto, $r(T^*) \leq r(T) < \infty$.
>>16. Aplicando este resultado a $T^*$, y usando que $(T^*)^* = T$, también obtenemos que $r(T) \leq r(T^*)$ cuando $r(T^*) < \infty$. 
>>17. Pero luego como supusimos $r(T)$ finito entonces $r(T^{*})\leq r(T)$ lo quen nos dice que $r(T^{*})$ es finito.
>>18. Como $r(T^{*})$ finito entonces por 16. $r(T)\leq r(T^{*})$ entonces $r(T)=r(T^{*})$      
>>19. Esto prueba el lema cuando ambos rangos son finitos, y también demuestra que es imposible que uno de los rangos sea finito y el otro infinito, lo que también prueba el caso de rango infinito.

>[!Theorem] DUDA
>Si $H$ es un espacio de Hilbert y $T \in B(H)$, entonces $T$ es compacto si y solo si $T^*$ es compacto.
>>[!Proof]-
>>- $(\Rightarrow)$  
>>	1. Supongamos que $T$ es compacto. Entonces por [[#^b132a8]] existe una sucesión de operadores de rango finito (y acotados DUDA Teo 16) $\{T_n\}$, tal que $\|T_n - T\| \to 0$. 
>>	2. Por [[#^56dbd3]] cada operador $T_n^*$ tiene rango finito. Y es acotado por que $\lVert T^{*} \rVert=\lVert T \rVert$ 
>>	3. Luego $B(\mathcal{H})$ es espacio vectorial entonces $T_{n}-T\in B(\mathcal{H})$ y $T_{n}^{*}-T^{*}=(T_{n}-T)^{*}$ por [[Teórico 14#^0f7d67]] (a)  
>>	4. Luego por el [[Teórico 14#^0589c9]] (b) $\|T_n^* - T^*\| =\lVert (T_{n}-T)^{*} \rVert= \|T_n - T\| \to 0$. 
>>	5. Por lo tanto, por [[Teórico 17#^f21d4d]] $T^*$ es compacto.
>>	6. Mostrando que si $T$ compacto entonces $T^{*}$ compacto  
>>- $(\Leftarrow)$  
>>	1. Si $T^{*}$ es compacto, entonces $(T^{*})^{*}=T$ es compacto por ida  

# Teorico 18
>[!Theorem] Operadores Compactos - $0$ esta en el espectro siempre
>Si $\mathcal{H}$ es de dimensión infinita, $T$ compacto, entonces $0 \in \sigma(T)$. Si $\mathcal{H}$ es separable, entonces ocurre que $0 \in \sigma_p(T)$ o $0 \in \sigma(T) \setminus \sigma_p(T)$. Si $\mathcal{H}$ no es separable, entonces $0 \in \sigma_p(T)$.
>>[!Proof]-
>>1. Si tuviéramos que $0 \not\in \sigma(T)$ entonces $T$ sería invertible. Sin embargo, dado que $\mathcal{H}$ es de dimensión infinita, esto contradice el [[Teórico 17#^201bb6]], por lo que debemos tener $0 \in \sigma(T)$.
>>2. Si $\mathcal{H}$ no es separable entonces $\overline{ImT^{*}}\neq\mathcal{H}$ por que $T^{*}$ es compacto entonces $\overline{Im(T^{*})}$ separable [[Teórico 17#^dec284]]
>>3. Ademas sabemos $$ker(T)=\{ 0 \}\iff Im(T^{*})^{\perp}=\{ 0 \} \iff \overline{Im(T^{*})}=\mathcal{H}$$ entonces $ker (T)\neq\{ 0 \}$ ósea existe $c\in \mathcal{H}$ com $c\neq 0$ tal que $Tc=0$ osea $c$ autovecotor de aval $0$ mostrando que $0\in \sigma_{p}(T)$ 
>>4. Si $\mathcal{H}$ separable, mas adelante mostramos un ejemplo donde $0\in \sigma(T)\setminus \sigma_{p}(T)$ 

>[!Theorem]
>$T$ compacto. Si $\lambda \neq 0$ entonces $\text{Ker}(T - \lambda I)$ tiene dimensión finita.
>>[!Proof]-
>>1. Supongamos que $M = \text{Ker}(T - \lambda I)$ es infinito-dimensional. 
>>2. Dado que el núcleo de un operador acotado es cerrado [[Teórico 5#^e19482]] entonces el espacio $M$ es Hilbert (infinito-dimensional)
>>3. Luego existe una sucesión ortonormal $\{e_n\}$ en $M$ por [[Teórico 3#^252a33]] 
>>4. Como $e_n \in \text{Ker}(T - \lambda I)$ tenemos $T e_n = \lambda e_n$ para cada $n \in \mathbb{N}$, y dado que $\lambda \neq 0$, la sucesión $\{\lambda e_n\}$ no puede tener una subsecuencia convergente, ya que $\{e_n\}$ es ortonormal entonces $$\lVert e_{m}-e_{n} \rVert ^{2}=(e_{m}-e_{n},e_{m}-e_{n})=\lVert e_{m} \rVert ^{2}+\lVert e_{n} \rVert ^{2} =2$$
>>5. Esto contradice la compacidad de $T$, lo que prueba el teorema.

>[!Theorem]
>Para cualquier real $t > 0$, el conjunto de todos los autovalores distintos de $T$ con $|\lambda| \geq t$ es finito.
>>[!Proof]-
>>1. Supongamos en cambio que para algún $t_0 > 0$ existe una sucesión de autovalores distintos $\{\lambda_n\}$ con $|\lambda_n| \geq t_0$ para todo $n$, y sea $\{e_n\}$ una sucesión de autovectores unitarios correspondientes. 
>>2. Ahora vamos a construir, inductivamente, una sucesión particular de vectores unitarios (ósea va a ser acotada)  $\{y_n\}$. Sea $y_1 = e_1$.
>>3. Ahora consideremos cualquier entero $k \geq 1$. Por el Lema 1.14, el conjunto $\{e_1, \dots, e_k\}$ es linealmente independiente, por lo que el conjunto $M_k = \text{Sp}\{e_1, \dots, e_k\}$ es de dimensión $k$ y es cerrado por dim finita. 
>>4. Luego como $M_k$ es un subespacio cerrado de $M_{k+1}$ y no igual a $M_{k+1}$, por lo que el complemento ortogonal de $M_k$ en $M_{k+1}$ es un subespacio lineal no trivial de $M_{k+1}$. 
>>5. Por lo tanto, existe un vector unitario $y_{k+1} \in M_{k+1}$ tal que $(y_{k+1}, e) = 0$ para todo $e \in M_k$ y $\|y_{k+1} - e\|= \lVert y_{k+1} \rVert+\lVert e \rVert\geq 1$ (esto último por que son ortogonales y unitarios ambos) 
>>6. Repitiendo este proceso inductivamente, construimos una sucesión $\{y_n\}$.
>>7. Por otro lado notemos $e \in M_k$ puede escribirse como $e = \alpha_1 e_1 + \dots + \alpha_k e_k$, y tenemos
>>$$(T - \lambda_k I) e = \alpha_1 (\lambda_1 - \lambda_k) e_1 + \dots + \alpha_k (\lambda_{k-1} - \lambda_k) e_{k-1}$$Mostrando que si $e \in M_k$, entonces $(T - \lambda_k I) e \in M_{k-1}$
>>8. De forma similar, si $e \in M_k$, entonces $T e \in M_k$.
>>9. Ahora, por la construcción de la sucesión $\{y_n\}$, para cualquier $m, n$ con $n > m$, tenemos (suamndo y restando $\lambda_{n}y_{n}$)  
>>$$\|T y_n - T y_m\| = |\lambda_n| \|y_n - \lambda_n^{-1} [(T - \lambda_n I) y_n + T y_m]\| \geq |\lambda_n| \geq t_0$$ 
>>Dado que por 4. $-(T - \lambda_n I) y_n \in M_{n-1}$. Y por 5. $Ty_{m}\in M_{m}\subseteq M_{n-1}$ por qué $n-1\geq m$ entonces por 5. la norma de las resta es mayor que $1$ 
>>10. Esto muestra que la sucesión $\{T y_n\}$ no puede tener una subsecuencia convergente. 
>>11. Esto contradice la compacidad de $T$ (notar que $\{ y_{n} \}$ es unitaria ósea acotada) lo que prueba el teorema. 

>[!Corollary]
>El conjunto $\sigma_p(T)$ es a lo sumo numerablemente infinito. Si $\{\lambda_n\}$ es cualquier sucesión de autovalores distintos de $T$ entonces $\lim_{n \to \infty} \lambda_n = 0$.
>>[!Proof]-
>>1. Escribimos $$\sigma_{p}(T)=\bigcup_{r\in \mathbb{N} }\left\{  \lambda\in \sigma_{p}(T):\lvert \lambda \rvert\geq \frac{1}{r}  \right\}$$ que es union numerable de conjuntos finitos por [[Teórico 18#^301f9e]]
>>2. Si son distintos tienden a 0 se deduce tambien de [[Teórico 18#^301f9e]] si no fueran a 0 entonces tengo numerables autovalores distintos todos mayores que algun numero mayor que 0, lo que es absurdo. Entonces necesariamente tienden a 0 si son distintos y son una sucesion (osea numerables) 

>[!Remark]
>La siguiente notación será útil en la prueba del siguiente lema
>Supongamos que $X$, $Y$ son espacios normados y $A \in B(X)$, $B \in B(Y, X)$, $C \in B(X, Y)$ y $D \in B(Y)$. 
>Podemos definir un operador $M \in B(X \times Y)$ por
>$$M(x, y) = (A x + B y, C x + D y)$$
>ver el Ejercicio 7.18. Este operador puede escribirse en forma de "matriz" como
>$$M \left[ \begin{array}{c} x \\ y \end{array} \right] = \left[ \begin{array}{cc} A & B \\ C & D \end{array} \right] \left[ \begin{array}{c} x \\ y \end{array} \right]$$
>donde, formalmente, usamos las reglas estándar de multiplicación de matrices para evaluar el producto de matrices, aunque los elementos en las matrices son operadores o vectores – esto es válido siempre que mantengamos el orden correcto de los operadores y vectores.
>Además si $$M_{1}=\left[\begin{array}{cc} A & B \\ 0 & I_{\gamma} \end{array}\right]\quad M_{2}=\left[\begin{array}{cc} A & 0 \\ C & I_{\gamma} \end{array}\right]$$ entonces $A$ invertible implica $M_{1}$ y $M_{2}$ son inversible. De hecho $$M_{1}^{-1}=\left[\begin{array}{cc} A^{-1} & A^{-1}B \\ 0 & I_{\gamma} \end{array}\right]\quad M_{2}^{-1}=\left[\begin{array}{cc} A^{-1} & 0 \\ -CA^{-1} & I_{\gamma} \end{array}\right]$$ (Notar que entonces si $M_{1}$ o $M_{2}$ no son invertibles enonces $A$ no lo es)   
>Y Si $A$ no inversible entonces $$\ker M_{1}=ker A\times \{ 0 \}\quad \land \quad\ker M_{2}=\{ (x,y)\in X\times Y:x\in ker A,y=-Cx\}$$
>Y de aca podemos concluir (lo usamos despues) $$\dim(\ker(M_{1}))=\dim(\ker(A))\quad\land \quad\dim\ker(M_{2})=\dim\ker(A)$$   

>[!Lemma]
>Si $T\in K(\mathcal{H})$ tiene rango finito y $\lambda \neq 0$, entonces, o bien: (a) $\lambda \in \rho(T)$ y $\bar{\lambda} \in \rho(T^*)$; o (b) $\lambda \in \sigma_p(T)$ y $\bar{\lambda} \in \sigma_p(T^*)$. Además, $n(T - \lambda I) = n(T^* - \lambda I) < \infty$.
>>[!Proof]-
>>1. Sea $M = \text{Im} T$ y $N = \text{Ker} T^* = M^\perp$ (por la misma propiedad de siempre). 
>>2. Dado que $M$ es finito-dimensional es cerrado, así que cualquier $x \in \mathcal{H}$ tiene una descomposición ortogonal $x = u + v$, con $u \in M$, $v \in N$. 
>>3. Usando esta descomposición, podemos identificar cualquier $x \in \mathcal{H}$ con un único elemento $(u, v) \in M \times N$, y viceversa (alternativamente, esto demuestra que el espacio $\mathcal{H}$ es isométricamente isomorfo al espacio $M \times N$). 
>>4. Además $(T - \lambda I)(u + v) = T u - \lambda u + T v - \lambda v$ y tenemos que $T u - \lambda u \in Im(T)=M$, $T v \in M$ y $-\lambda v \in N$. 
>>5. Se sigue de esto que podemos expresar la acción del operador $(T - \lambda I)$ en forma de matriz como
>>$$(T - \lambda I) \begin{bmatrix} u \\ v \end{bmatrix} = \begin{bmatrix} (T - \lambda I)|_M & T|_N \\ 0 & -\lambda I|_N \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$$con $(T - \lambda I)|_M \in B(M)$, $T|_N \in B(N, M)$ y $I|_N \in B(N)$. 
>>6. Definimos $A = (T - \lambda I)|_M$. Entonces o $A$ es invertible o $n(A)>0$. Si $A$ no es invertible entonces no es inyectiva (ni sobre por que $A:M\rightarrow M$ osea es un operador finito por que $T$ es rango finito) mostrando $n(A) > 0$ y si $n(A)=0$ entonces $A$ invertible (devuelta por ser operador finito)  
>>7. Entonces por [[Teórico 18#^4bf96d]] o bien $A$ es inversible entonces $T - \lambda I$ es invertible ($\lambda\in \rho(T)$) o no lo es por lo tanto $n(T - \lambda I) = n(A) > 0$, es decir, $\lambda \in \sigma_p(T)$.
>>8. Ahora sea $P_M$, $P_N$ los proyectores ortogonales de $\mathcal{H}$ sobre $M, N$. 
>>9. Usando $I = P_M + P_N$ y recordamos $N = \text{Ker } T^*$, tenemos que
>>$$(T^* - \overline{\lambda}  I)(u + v) = (T^* - \overline{\lambda}  I) u -\overline{\lambda}  v= I(T^{*} -\overline{\lambda} I)u-\overline{\lambda} v=P_M(T^* - \overline{\lambda}  I) u + P_N T^* u - \overline{\lambda}  v$$
>>10. Por lo tanto, $T^* - \lambda I$ puede representarse en forma de matriz por
>>$$(T^* - \overline{\lambda}  I) \begin{bmatrix} u \\ v \end{bmatrix} = \begin{bmatrix} P_M(T^* - \overline{\lambda}  I)|_M & 0 \\ P_M(T^*)|_M & -\overline{\lambda} I|_{N} \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$$
>>11. Se puede probar que $A^{*}=P_{M}(T^{*}-\overline{\lambda}I|_{M})$, y aca vale lo mismo o $A^{*}$ es invertible o $n(A^{*})>0$ devuelta por dimension finita y usando el teorema de antes de nuevo llegamos a que o bien $T^{*}-\overline{\lambda} I$ es inversible o bien $n(T^{*}-\overline{\lambda}I)=n(A^{*})>0$
>>12. De nuevo por álgebra lineal finita, $n(A^*) = n(A)$ (osea en dimension finita $n(T)=n(T^{*})$) 
>>13. Se sigue de esto que si $n(A) = 0$, entonces $T - \lambda I$ invertible y ademas $n(A^{*})=0$ entonces $T^* - \overline{\lambda} I$ tambien es invertible entonces $\lambda\in \rho(T)$ y $\overline{\lambda}\in \rho(T^{*})$
>>14. Mientras que si $n(A) > 0$ entonces $n(T^* - \overline{\lambda} I)=n(T - \lambda I)  = n(A) > 0$
>>15. Entonces $\lambda \in \sigma_p(T)$ y $\bar{\lambda} \in \sigma_p(T^*)$.

>[!Theorem]
>Si $T$ es compacto y $\lambda \neq 0$, entonces, o bien: (a) $\lambda \in \rho(T)$ y $\bar{\lambda} \in \rho(T^*)$; o (b) $\lambda \in \sigma_p(T)$ y $\bar{\lambda} \in \sigma_p(T^*)$. Además, $n(T - \lambda I) = n(T^* - \lambda I) < \infty$.
>>[!Proof]-
>>16. Primero reducimos el problema al caso de un operador de rango finito. 
>>17. Por [[Teórico 17#^b132a8]], hay un operador de rango finito $T_F$ en $H$ con $\| \lambda^{-1}(T - T_F) \| < \frac{1}{2}$ entonces por [[Teórico 6#^aa4e9d]]  $S = I - \lambda^{-1} (T - T_F)$ es inversible
>>18. Ademas por [[Teórico 15#^b9f186]] $S^*$ es invertibles. 
>>19. Ahora, denotemos $G = T_F S^{-1}$, vemos que
>>$$T - \lambda I = (G - \lambda I) S, \quad \text{y por lo tanto} \quad T^* - \overline{\lambda}  I = S^* (G^* - \overline{\lambda}  I)$$
>>20. Dado que $S$ y $S^*$ son invertibles, se sigue que $$T - \lambda I \quad\land\quad T^* - \lambda I \quad\text{son invertibles} \iff  G - \lambda I \quad \land\quad G^* - \lambda I \quad \text{son invertibles}$$y que $n(T - \lambda I) = n(G - \lambda I)$ y $n(T^{*}-\overline{\lambda}I)=n(G^{*}-\overline{\lambda}I)$ por [[Teórico 18#^19d507]]
>>21. Ahora, como $\text{Im} G \subset \text{Im} T_F$ el operador $G$ tiene rango finito, los primeros resultados del teorema siguen de [[Teórico 18#^eeeb64]]
>>22. Ósea o $G$ cumple $\lambda\in \sigma_{p}(G)$ (ósea $G-\lambda I$ es no inversible $\iff$  $T-\lambda I$ no es invertible $\iff$ $\lambda\in \sigma_{p}(T)$  ) o $G$ cumple que $\lambda\in \rho(G)$ ósea ($G-\lambda I$ es inversible $\iff$  $T-\lambda I$ es invertible $\iff$ $\lambda\in \rho(T)$  ) análogo $T^{*}$ 
# Teorico 19
>[!Remark] MEMO
>Ahora consideramos las siguientes ecuaciones ($T$ compacto)  :
>$$(T - \lambda I) x = 0, \quad (T^* - \overline{\lambda}  I) y = 0, \quad \text{(7.1)}$$
>$$(T - \lambda I) x = p, \quad (T^* - \overline{\lambda}  I) y = q \quad \text{(7.2)}$$
>Las ecuaciones de la forma (7.1), con lados derechos nulos, se llaman homogéneas, mientras que las ecuaciones de la forma (7.2), con lados derechos no nulos, se llaman inhomogéneas. Los resultados del [[Teórico 18#^3f6266]] (junto con el [[Teórico 18#^eeeb64]]) pueden ser reformulados en términos de la solvencia de estas ecuaciones.

>[!Theorem] Alternativa de Fredholm MEMO
>Si $\lambda \neq 0$ entonces uno u otro de los siguientes casos se cumple:
>- (a) Cada una de las ecuaciones homogéneas (H) tiene solo la solución $x = 0, y = 0$, respectivamente, en este caso las correspondientes ecuaciones inhomogéneas (NH) tienen soluciones únicas $x, y$ para cualquier $p, q \in H$.
>- (b) Existe un número finito $m_\lambda > 0$ tal que cada una de las ecuaciones homogéneas (7.1) tiene exactamente $m_\lambda$ soluciones linealmente independientes, digamos $x_n, y_n$, para $n = 1, \dots, m_\lambda$, respectivamente, mientras que las correspondientes ecuaciones inhomogéneas (7.2) tienen soluciones si y solo si $p, q \in H$ satisfacen las condiciones
>$$(p, y_n) = 0, \quad (q, x_n) = 0, \quad n = 1, \dots, m_\lambda. \quad \text{(7.3)}$$
>>[!Proof]-
>>1. Tenemos $\lambda\neq 0$ y $T$ compacto. Por [[Teórico 18#^3f6266]] sabemos que o bien $\lambda \in \rho(T)$ o $\lambda\in \sigma_{p}(T)$   
>>2. La alternativa (a) corresponde al caso $\lambda \in \rho(T)$ y $\overline{\lambda}\in \rho(T^{*})$ 
>>3. mientras que la alternativa (b) corresponde al caso $\lambda \in \sigma_p(T)$ y $\overline{\lambda}\in \sigma_{p}(T^{*})$   
>>4. En este caso, $m_\lambda = n(T - \lambda I)=n(T^{*}-\overline{\lambda} I)$. (seria la dimension del autoespacio) y obviamente todos los avecs asociados $\{ x_{n} \}$ son solucion de la homogenea por defincion de autovalor. Analogo con $T^{*}-\overline{\lambda} I$ e $\{ y_{n} \}$    
>>5. Ademas se sigue de [[Teórico 18#^937fe3]] que las condiciones sobre $p, q$ en (b) aseguran que $$\begin{align}\text{ La ecuacion no homogenea tiene solucion } x &\iff p \in \text{Im}(T - \lambda I)=\ker(T^{*}-\lambda I)^{\perp}\\ & \iff(p,w) \quad\forall w\in Ker(T^{*}-\lambda I )\in \mathbb{N}\\ & \iff (p,y_{n})\quad n=1,\ldots,m_{\lambda}\end{align}$$
>>6. Analogamente sale $(q,x_{n})=0$ 

>[!Theorem]
>El conjunto de los valores propios no nulos de $T$ no está vacío y es finito o consiste en una secuencia que tiende a cero. Cada valor propio no nulo es real y tiene multiplicidad finita. Los autovectores correspondientes a diferentes valores propios son ortogonales.
>>[!Proof]-
>>1. [[Teórico 18#^64b388]] nos dice que disntitos tienden a $0$ o es finito
>>2. [[Teórico 15#^d51465]] (b) nos dice que son reales los autovalores y [[Teórico 18#^014228]] que su multiplicidad es finita
>>3. Y [[Teórico 19#^5db8fc]] nos dice que existe algun auto valor siempre 
>>4. Para probar el resultado final, supongamos que $\lambda_1, \lambda_2 \in \mathbb{R}$ son valores propios distintos con los autovectores correspondientes $e_1, e_2$. 
>>5. Entonces, como $T$ es autoadjunto, tenemos
>>$$\lambda_1(e_1, e_2) = (T e_1, e_2) = (e_1, T e_2) = \lambda_2(e_1, e_2)$$
>>6. lo que, como $\lambda_1 \neq \lambda_2$, implica que $(e_1, e_2) = 0$.

>[!Theorem]
>$T$ autoadjunta y compacta. El número de valores propios no nulos de $T$ (repetidos según multiplicidad) es igual a $r(T)$. El conjunto de autovectores $\{e_n\}_{n=1}^{r(T)}$ construido arriba (osea de autovalor no nulo) es una base ortonormal para $\overline{ImT}$ y el operador $T$ tiene la representación
>$$ T x = \sum_{n=1}^{r(T)} \lambda_n (x, e_n) e_n, $$ Con $\{\lambda_n\}_{n=1}^{r(T)}$ El conjunto de valores propios no nulos de $T$ 
>>[!Proof]-
>>1. Sea $M = \overline{Sp} \{e_n\}_{n=1}^{J}$, tal que $\{e_n\}_{n=1}^{J}$ es una base ortonormal para $M$ (por definicion de BON). Mostraremos que $M = \overline{ImT}$, y por lo tanto, debemos tener $J = r(T)$ (en el caso finito o infinito). 
>>2. Recordemos que si $r(T) < \infty$ entonces $ImT$ = $\overline{ImT}$. 
>>3. Devuelta por BON, para cualquier $u \in M$ tenemos que $u = \sum_{n=1}^{J} \alpha_n e_n$, donde $\alpha_n = (u, e_n)\quad n = 1, \dots, J$. Así, si $J = \infty$, tenemos
>>$$ u = \lim_{k \to \infty} \sum_{n=1}^k \alpha_n \lambda_n^{-1} T e_n = \lim_{k \to \infty} T \left( \sum_{n=1}^k \alpha_n \lambda_n^{-1} e_n \right) \in \overline{ImT} ,$$mostrando que $M \subset \overline{ImT}$; 
>>4. Un argumento similar se aplica cuando $J$ es finito (sin los límites). 
>>5. Ahora mostraremos que $M^{\perp} \subset \ker T$, esto nos diria $M\supset \ker (T)^{\perp}=\overline{ImT}$ (ultima igualdad vista en [[Teórico 19#^17c4c5]]). Lo que implicaria que $M= \overline{ImT}$ que es lo que queriamos probar 
>>6. Si $J = \infty$ y $u \in M$, tenemos
>>$$ T u = T \left( \lim_{k \to \infty} \sum_{n=1}^k (u,e_{n}) e_n \right) = \lim_{k \to \infty} \sum_{n=1}^k \lambda_n (u,e_{n}) e_n \in M$$
>> y de nuevo, un cálculo similar se aplica (sin los límites) si $J < \infty$. 
>> 7. Así, $M$ es invariante bajo $T$. Entonces [[Teórico 19#^9f9d7c]] nos dice que $N = M^{\perp}$ es invariante bajo $T$.
>> 8. Denotemos por $T_N$ la restricción de $T$ a $N$. 
>> 9. Es fácil verificar que $T_N$ es un operador compacto en el espacio de Hilbert: $\{ y_{n} \}\subseteq N$ acotada entonces como $T$ compacto $Ty_{n_{k}}\rightarrow y$, por invarianza $Ty_{n_{k}}\in N$ por ser complemento $N$ cerrado entonces $y\in N$      
>> 10. Ahora supongamos que $T_N$ no es el operador cero en $N$. Por [[Teórico 19#^5db8fc]], $T_N$ debe tener un valor propio no nulo, digamos $\lambda$, con un autovector no nulo correspondiente $\tilde{e} \in N$, así que por definición, $T_N \tilde{e} = \lambda \tilde{e}$. 
>> 11. Sin embargo, esto implica que $\lambda$ es un valor propio no nulo de $T$, por lo que $\lambda=\lambda_{n}$ para algun $n<r(T)$
>> 12. Ademas $\tilde{e}$ debe pertenecer al subespacio de autovectores correspondientes a $\lambda_{n}$ que esta metido en $M$ por definicion que es absurdo por que $\tilde{e}\in M^{\perp}$  
>> 13. Así que $T_N$ debe ser el operador cero. En otras palabras, $T v = T_N v = 0$ para todo $v \in N$, lo que hemos afirmado antes, y por lo tanto completa la prueba de que $M = \overline{ImT}$.
>> 14. Finalmente, para cualquier $x \in \mathcal{H}$ tenemos que $(I - P)x \in M^\perp=\ker T$ entonces $T((I-P)x)=0$ por 13. Ademas $((I-P)x,e_{n})=0$ por lo tanto $(Px,e_{n})=(x,e_{n})$  
>> 15. Por lo tanto $$Tx = T(Px + (I - P)x) =T(Px)=\sum^{J}_{n=1}\lambda_{n}(Px,e_{n})e_{n} = \sum_{n=1}^{J} \lambda_n (x, e_n)e_n$$ según el cálculo anterior.

# Teorico 20
>[!Corollary]
>Si $\ker T = \{ 0 \}$ entonces el conjunto de autovectores $\{ e_n \}_{n=1}^{r(T)}$ es una base ortonormal para $\mathcal{H}$. En particular, si $\mathcal{H}$ es de dimensión infinita y $\ker T = \{ 0 \}$, entonces $T$ tiene infinitos autovalores distintos.
>>[!Proof]-
>>1. Si $\ker T=\{ 0 \}$ entonces $\overline{ImT}=\mathcal{H}$ por [[Teórico 19#^17c4c5]] con lo cual la base de autovectores $\{ e_{n} \}^{r(T)}$ que ya probamos sirve para $\overline{ImT}$ sirve para $\mathcal{H}$
>>2. Obviamente si $\mathcal{H}$ tiene dimension infinita dicha base va a tener que tener infinitos elementos si no no seria base, por lo tanto hay infinitos auto vectores osea infinitos auto valores (por que sabemos que tienen multiplicidad finita) 

>[!Remark]
>Notar no puede ser $T$ compacto y $T$ sobre. Pues $T$ sobre implica $Im(T)=\mathcal{H}$ etonces $$Ker(T)=Im(T)^{\perp}=\mathcal{H}^{\perp}=\{ 0 \}$$ entonces $T$ inyectivo entonces $T$ inversible (por que son Hilbert entonces por aplicación abierta es biyectiva) 

>[!Corollary]
>Supongamos que $\mathcal{H}$ es separable. Entonces existe una base ortonormal de $\mathcal{H}$ formada enteramente por autovectores de $T$. Esta base tiene la forma $\{ e_n \}_{n=1}^{r(T)} \cup \{ z_m \}_{m=1}^{n(T)}$, donde $\{ e_n \}_{n=1}^{r(T)}$ es una base ortonormal de $\text{Im}T$ y $\{ z_m \}_{m=1}^{n(T)}$ es una base ortonormal de $\ker T$.
>>[!Proof]-
>>4. Como $\mathcal{H}$ es separable, $\ker T$ es un espacio de Hilbert separable dado que $ker(T)\subseteq \mathcal{H}$ osea un cerrado adentro de un separable.
>>5. Entonces existe una base ortonormal para $\ker T$, que escribimos en la forma $\{ z_m \}_{m=1}^{n(T)}$ (donde $n(T)$ puede ser finito o infinito).
>>6. Por definición, para cada $m$ tenemos que $T z_m = 0$, así que $z_m$ es un autovector de $T$ correspondiente al autovalor $\lambda = 0$. 
>>7. Ahora, la unión $E = \{ e_n \}_{n=1}^{r(T)} \cup \{ z_m \}_{m=1}^{n(T)}$ es un conjunto ortonormal en $\mathcal{H}$ pues $\overline{Im(T)}=(ker(T))^{\perp}$ 
>>8. De hecho, es una base para $\mathcal{H}$. Para ver esto, como $\{ e_{n} \}$ bon de $\overline{Im(T)}$ Y análogo $\{ z_{m} \}$ consdierando que $P$ es proyectar en $\overline{ImT}$ entonces $I-P$ es proyectar en $\ker(T)$. Tenemos
>>$$ x = P x + (I - P) x = \sum_{n=1}^{r(T)} (Px, e_n) e_n + \sum_{m=1}^{n(T)} ( (I - P) x, z_m ) z_m=\sum^{r(T)}_{n=1} (x,e_{n})e_{n}+\sum^{n(T)}_{n=1} (x,z_{m})z_{m}$$
>>9. Usando $((I-P)x,e_{n})=0$ (por que como $P$ es proyectar en $\overline{Im(T)}$ entonces $I-P$ es proyectar en $\ker T$) por lo tanto $(Px,e_{n})=(x,e_{n})$ y, de forma similar, $((I - P) x, z_m) = (x, z_m)$ para cada $m$ (Por que $P$ es proyectar en $\overline{Im(T)}$ entonces $(Px,z_{m})=0$) 
>>10. Entonces por definicion $E$ es BON para $\mathcal{H}$.

