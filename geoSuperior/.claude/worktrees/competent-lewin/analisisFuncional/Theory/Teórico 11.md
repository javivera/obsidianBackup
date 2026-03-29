---
dateCreated: 2024-10-02,22:03
---
>[!Corollary]
>Si $x_{1},\ldots,x_{n} \in X$ son linealmente independientes entonces existe $f_{1},\ldots,f_{n}\in X'$ tal que $$f_{j}(x_{k})=\delta_{k_{j}} \quad 1\leq j,k\leq n$$
>>[!Proof]-
>>1. Si $W=Sp\{ x_{1},\ldots,x_{n} \}$ entonces existen  $f_{1,W},\ldots,f_{n,W}\in W'$ que cumplen lo que queremos (existen por dim finita de $W$ visto en algebra lineal) 
>>2. Entonces por [[Teórico 10#^8c080d]] existen $f_{i,X} = f_{i}\in X'$ extensiones
>>

^60205b

>[!Theorem] $X'$ separable implica $X$ separable MEMO  
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

^5cf5d9

>[!Proposition] $\ell^{\infty}$ no es separable MEMO
>$\ell^{\infty}$ no es separable
>>[!Proof]-
>>1. Sea $N\subseteq \mathbb{N}$ $$x^{N}_{n}=\begin{cases}1 & \text{si }n\in N \\0 & \text{cc}\end{cases}$$
>>2. Obviamente $2^{\aleph}$ (no numerables) sucesiones distintas de $0$ y $1s$   
>>3. Dado $N$ y $M$ distintos entonces $\exists n_{0}\in N\setminus M$ por lo tanto $\lVert x^{N}-x^{M} \rVert_{\infty}=1$    
>>4. Tomo bolas $B(\frac{1}{4},x^{N})$ y $B\left( \frac{1}{4},x^{M} \right)$ entonces si existiera un $y$ en la interseccion $$\lVert x^{N} -x^{M}\rVert\leq \lVert x^{N}-y \rVert+\lVert y-x^{M} \rVert\leq \frac{1}{4}+\frac{1}{4}=\frac{1}{2}$$ que es absurdo  
>>5. Entonces tengo no numerables bolas disjuntas. No es separable

^18df41

>[!Remark] $X$ separable no implica $X'$ separable MEMO
>1. $(\ell^{1})'$ no es separable por que vimos que si $p \in [1,\infty),q \in (1,\infty]$ hay un isomorfismo de $\ell^{q}$ en $(\ell^{p})'$ con $\frac{1}{p}+\frac{1}{q}$ [[Teórico 8#^bd2cdc]] entonces si $(\ell^{1})'$ fuese separable entonces $\ell^{\infty}$ seria separable  
>2. Entonces $\ell^{1}$ separable pero $(\ell^{1})'$ no es separable

^67afdd

>[!Remark] No hay isomorfismos entre $\ell_{1}$ y $(\ell^{\infty})'$ MEMO
>1. $(\ell^{\infty})'$ no es separable por que si lo fuera $\ell^{\infty}$ seria separable por [[Teórico 11#^5cf5d9]]
>2. Por lo tanto no puede haber isomorfismo entre $\ell^{1}$ y $(\ell^{\infty})'$ pues $\ell^{1}$ es separable y $(\ell^{\infty})'$ no es separable. [[Teórico 6#^2cb23e]]

^9e9e53

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
>>4. Sea $Z_{\tilde{E}}=\bigcup_{f\in \tilde{E}}D_{f}$. Es directo ver que $Z_{\tilde{E}}$ es subespacio. 
>>	- $Z_{\tilde{E}}$ es subespacio 
>>		1. Sea $x,y\in Z_{\tilde{E}}$ y $\alpha ,\beta\in \mathbb{R}$ entonces $x\in D_{f}$ e $y\in D_{g}$
>>		2. Por ser $\tilde{E}$ totalmente ordenado (o cadena) sin perdida de generalidades $f\leq g$ por lo tanto $D_{f}\subseteq D_{g}$ entonces $x,y\in D_{g}$ como $D_{g}$ subespacio $\alpha x+\beta y\in D_{g}$ 
>>		3. Entonces $\alpha x+\beta y\in Z_{\tilde{E}}$ 
>>4. Definimos $f_{\tilde{E}}:Z_{\tilde{E}}\rightarrow\mathbb{R}$ de la siguiente manera. Dado $z\in Z_{\tilde{E}}$ sabemos $\exists \delta \in \tilde{E}$ tal que $z\in D_{\delta}$ entonces $f_{\tilde{E}}(z)=\delta(z)$ 
>>	- Buena definicion
>>		1. La definicion es buena ya que si $z\in D_{\mu}$ como $\tilde{E}$ es orden total $D_{\mu}\subseteq D_{\delta}$ entonces $\delta(x)=\mu(x)\quad\forall x\in D_{\mu}$ o viceversa $D_{\delta }\subseteq D_{\mu}$ y $\delta(x)=\mu(x)\quad\forall x\in D_{\delta }$ 
>>		2. Por lo tanto en ambos casos $\delta(z)=\mu(z)$ asi que da igual tomar cualquiera de las dos para definirla 
>>	- Veamos $f_{\tilde{E}}$ es lineal  
>>		1. Sean $x,y\in Z_{\tilde{E}}$ y $\alpha ,\beta\in \mathbb{F}$ por 4. $\alpha x+\beta y\in Z_{\tilde{E}}$ entonces $\exists \delta\in \tilde{E}$ tal que $f_{\tilde{E}}(\alpha x+\beta y)=\delta (\alpha x+\beta y)$ 
>>		2. Como $\delta$ es lineal $f_{\tilde{E}}(\alpha x+\beta y)=\alpha \delta (x)+\beta\delta (y)=\alpha f_{\tilde{E}}(x)+\beta f_{\tilde{E}}(y)$ (Esto ultimo por la buena definicion) 
>>3. Entonces concluimos $f_{\tilde{E}}\in E$ (Osea cumple las hipotesis) y ademas $f\leq f_{\tilde{E}}\quad\forall f\in \tilde{E}$ en el sentido de la relacion de orden. Entonces $f_{\tilde{E}}$ es cota superior de $\tilde{E}$ 
>>4. Luego por *Lema de Zorn* $E$ tiene un elemento maximal $f_{max}$ 
>>5. Suponemos $D_{f_{max}}\neq X$. Por [[Teórico 10#^3226b6]] sucede que $f_{max}$ tiene una extension que esta claramente en $E$ (osea cumple las hipotesis) contradiciendo que $f_{max}$ fuera maximal.

^3c7ea3

>[!Definition] Funcional de Minkowski
>$C\subseteq X$ normado real, con $0\in C$ y $C$ abierto. El *funcional de Minkowski* $p_{C}$ de $C$ esta dado por 
>$$p_{C}(x)=\inf \{ \alpha >0:\alpha ^{-1} x\in C \}\quad \forall x\in X$$
>Como $0\in C$ y $C$ abierto $p_{C}$ esta bien definido.

^840b6d

>[!Proposition] Resultado de Minkowski
>Notar que si $C=B_{1}(0)$ (estimo sera bola cerrada) entonces $p_{c}(x)=\lVert x \rVert$ y si $C=B_{r}(0)$ entonces $p_{C}(x)=\frac{\lVert  x \rVert}{r}$
>>[!Proof]-
>>1. Si fuera $p_{C}(x)<\lVert x \rVert$ por def de infimo $\exists \alpha \in (p_{C}(x),\lVert x \rVert)$ intervalo, tal que $\frac{x}{\alpha }\in C$ 
>>2. Entonces $\alpha <\lVert x \rVert$ por lo tanto $\left\lVert  \frac{x}{\alpha }  \right\rVert>1$ que es absurdo. 
>>3. Luego $p_{C}(x)\geq\lVert x \rVert$ 
>>4. Si fuera $p_{C}(x)>\lVert x \rVert$ entonces existe $\alpha \in (\lVert x \rVert,p_{C}(x))$ 
>>5. Luego tenemos algun $\tilde{\alpha }$  tal que $\lVert x \rVert<\tilde{\alpha }$ entonces $\left\lVert  \frac{x}{\tilde{\alpha } }  \right\rVert< 1$ osea $\tilde{\alpha } ^{-1}x\in C$ mostrando que $\tilde{\alpha }\in \{ \alpha >0:\alpha ^{-1}x\in C \}$ 
>>6. Lo que es absurdo por que $\tilde{\alpha }<p_{C}(x)$ 
>>7. Entonces $p_{C}(x)=\lVert x \rVert$ 

^e9b612

>[!Lemma] Propiedades funcional Minkowki
>Sean $\emptyset \neq C\subseteq X$ normado real, $C$ abierto y convexo con $0\in C$ como en [[Teórico 11#^840b6d]]. Entonces $p_{C}$ es sublineal y 
>$$(a) \quad C=\{ x:x\in X, \ p_{C}(x)<1 \}$$
> $$(b)\quad 0\leq p_{C}(x)\leq c\lVert x \rVert \quad\forall x\in X$$
>>[!Proof]-
>>- Sublineal 
>>	1. Para $x,y\in X$ por def de infimo existen $\alpha ,\beta\in \{ \tilde{\alpha }: \tilde{\alpha }^{-1}x\in C \}$ tales que $p_{C}(x)+\frac{\epsilon}{2}>\alpha >p_{C}(x)\geq0$ con $p_{C}(x)+\frac{\epsilon}{2}>\beta>p_{C}(y)\geq0$. Por lo tanto $\alpha ^{-1}x\in C$  y $\beta^{-1}x\in C$ 
>>	2. Definimos $r=\alpha +\beta$ luego como $C$ convexo $\frac{1}{r}(x+y)=\frac{\alpha }{r}\alpha ^{-1}x+ \frac{\beta}{r}\beta^{-1}y\in C$ osea $r\in \{ \alpha >0:\alpha ^{-1}x\in C \}$ 
>> 	(Notar que $\frac{\alpha }{r}+ \frac{\beta}{r}=1$ con $\frac{\alpha }{r}, \frac{\beta}{r}<1$ por 2. por eso esta en $C$ recordar por convexidad $(1-t)x + ty \in C$)
>>	3. Luego $p_{C}(x+y)\leq r=\alpha +\beta$ (por def de Minkowski es infimo)
>>	4. Entonces se sigue que $$p_{C}(x+y)\leq p_{C}(x)+p_{C}(y)+\epsilon\quad\forall \epsilon >0$$ entonces $p_{C}(x+y)\leq p_{C}(x)+p_{C}(y)$  (Osea $p_{C}$ cumple desigualdad triangular)
>>	5. Y es claro que $p_{C}(\alpha x)=\alpha p_{C}(x)\quad\forall \alpha \geq 0$. Mostrando que $p_{C}$ es [[Teórico 10#^dafca5]].
>>- (b)
>>	1. Por otro lado $0\in C$ abierto entonces $\exists \delta>0$ tal que $\lVert z \rVert\leq \delta$ implica $z\in C$ (Definicion de abierto). Entonces para tales $z$ sucede $p_{C}(z)\leq 1$. 
>>	2. Si elegimos ahora $z=\frac{\delta}{2}.\frac{x}{\lVert x \rVert}$ vale $\lVert z \rVert<\delta$ y $\frac{\delta}{2}.\frac{1}{\lVert x \rVert}p_{C}(x)=p_{C}(z)\leq 1$. (Por sublinealidad)
>>	3. Por lo tanto $p_{C}(x)\leq \frac{2}{\delta}\lVert x \rVert$ entonces vale $(b)$
>>	4. $p_{C}(x)>0$ por definicion de [[Teórico 11#^840b6d]]
>>- (a)
>>	1. $(\subseteq)$ Si $x\in C$ entonces $\exists B(x,r)\subseteq C$. Entonces tomo $t>1$ (entonces $\frac{1}{t}<1$ ) tal que $(t+1)\lVert x \rVert<r$ 
>>	2. Luego $\lVert tx+x \rVert=(t+1)\lVert x \rVert<r$ entonces $tx \in B(x,r)$
>>	3. Luego podemos definir $\alpha=\frac{1}{t}<1$ y obviamente $\alpha ^{-1}x=tx\in B(x,r)$ 
>>	4. Entonces $p_{C}(x)\leq \alpha <1$
>>	5. $(\supseteq)$ Si tomamos $x$ tal que $p_{C}(x)<1$ entonces $\exists \alpha>0$ tal que $p_{C}(x)<\alpha <p_{C}(x)+\epsilon<1$ tal que $\alpha ^{-1}x\in C$ (Por def de infimo). Por lo tanto $\alpha <1$ 
>>	6. Luego como $0\in C$ convexo y $x=\alpha \alpha ^{-1}x+(1-\alpha )0\in C$ entonces $x\in C$

^1746f5

>[!Theorem] Teorema de Separacion
>$X$ normado real o complejo. Sean $A,B\subseteq X$ conjuntos disjuntos no vacios y convexos
>- $(a)$ Si $A$ abierto $\exists f\in X'$ con $\gamma \in R$ tal que $$Re(f(a))<\gamma\leq Re(f(b))\quad\forall a\in A\quad \forall b\in B$$
>- $(b)$ Si $A$ compacto y $B$ cerrado entonces $\exists f\in X'$ con $\delta,\gamma>0$ tales que 
>$$Re(f(a))\leq \gamma-\delta<\gamma+\delta\leq Re(f(b))\quad\forall a\in A\quad\forall b\in B$$
>>[!Proof]-
>>- (a)
>>	1. Supongo $X$ es real. Sean $a_{0}\in A$, $b_{0}\in B$ y $w_{0}=b_{0}-a_{0}$ con $C=w_{0}+A-B$
>>	2. Entonces $0\in C=\bigcup_{b\in B}(w_{0}+A-b)$ abierto (union de abiertos por que $A$ es abierto y trasladar abiertos es abierto)
>>	3. $C$ convexo veamoslo, sean $a_{1}-b_{1}+w_{0}\in C$ y $a_{2}-b_{2}+w_{0}\in C$  $$\begin{align}&\alpha (a_{1}-b_{1}+w_{0})+(1-\alpha )(a_{2}-b_{2}+w_{0})\\ &=\alpha a_{1}+(1-\alpha )a_{2} - (\alpha b_{1}+(1-\alpha )b_{2})+w_{0}& \\ &=a_{3}-b_{3}+w_{0}\in C\end{align}$$
>>	La última igualdad vale para cualquier $\alpha$ fijo, para ciertos $a_{3}\in A,b_{3}\in B$ que existen pues $A$ y $B$ son convexos
>>	4. Como $A$ y $B$ son disjunto $w_{0}\not\in C$ porque si $w_{0}\in C$ entonces por def $w_{0}=w_{0}+0=w_{0}+a-b$   
>>	5. Como $w_{0}\not\in C$  dado que $C$ abierto y convexo por [[Teórico 11#^1746f5]] parte a. (negandolo) $p_{C}(w_{0})\geq 1$
>>	6. Sea $W=Sp\{ w_{0} \}$ y $f_{W} : W\rightarrow \mathbb{R}$ lineal dada por $f_{W}(\alpha w_{0})=\alpha$ 
>>	7. Si $\alpha \geq0$. tenemos $f_{W}(\alpha w_{0})=\alpha \leq \alpha p_{C}(w_{0})=p_{C}(\alpha w_{0})$
>>	8. Si $\alpha <0$ tenemos $f_{W}(\alpha w_{0})\leq 0\leq p_{C}(\alpha w_{0})$
>>	9. Entonces $f_{W}\leq p_{C}$ en $W$ por [[Teórico 11#^3c7ea3]] (dado que estamos en el caso real) $\exists f_{X}$ extension lineal tal que $f_{X}(x)\leq p_{C}(x)\quad\forall x\in X$.
>>	10. Por [[Teórico 11#^1746f5]] sucede $f_{X}(x)\leq p_{C}(x)\leq c\lVert x \rVert\quad\forall x\in X$
>>	11. Por otro lado $-f_{X}(x)=f_{X}(-x)\leq p_{C}(-x)\leq c\lVert -x \rVert=c\lVert x \rVert$ entonces $f_{X}(x)\geq-c\lVert x \rVert$
>>	12. Entonces $\lvert f_{X}(x) \rvert\leq c\lVert x \rVert$ por lo tanto $f_{X}$ continua
>>	13. Ahora $\forall a\in A$ y $b\in B$ $$1+f_{X}(a)-f_{X}(b)=f_{X}(w_{0})+f_{X}(a)-f_{X}(b)=f_{X}(w_{0}+a-b)\leq p_{C}(w_{0}+a-b)<1$$
>>	14. Entonces $f_{X}(a)<f_{X}(b)\quad \forall a\in A\quad\forall b\in B$
>>	15. Ahora tomo $\gamma=\inf \{ f_{X}(b):b\in B \}$ y tenemos $f_{X}(a)\leq \gamma\leq f_{X}(b)$
>>	16. Supongamos existe $a\in A$ tal que $f_{X}(a)=\gamma$. 
>>	17. Como $A$ es abierto, $\exists \delta>0$ tal que $a+\delta w_{0}\in A$. (Sea $B(a,r)\subseteq A$ entonces tomamos $\delta = \frac{r}{\lVert w_{0} \rVert}$)
>>	18. $f_{X}(a+\delta w_{0})=f_{X}(a)+\delta f_{W}(w_{0})=\gamma+\delta>\gamma$ (Por def $f_{W}(w_{0})=1$) que es absurdo por $16.$
>>	19. Entonce vale $(a)$
>>- (b)
>>	1. Como $A$ compacto y $B$ cerrado. Entonces $\epsilon= \frac{1}{4}\inf \{ \lVert a-b \rVert:a\in A,b\in B \}>0$
>>	2. Sean $A_{\epsilon}=A+B_{\epsilon}(0)$ y $B_{\epsilon}=B+B_{\epsilon}(0)$ (Son bolas las $B_{\epsilon}$)
>>	3. Es facil ver que $A_{\epsilon}\cap B_{\epsilon}=\emptyset$ (usando desigualdad triangular)
>>	4. Ademas $A_{\epsilon}$ y $B_{\epsilon}$ son abiertos por que son union de abiertos $A_{\epsilon}=\bigcup_{a\in A}a+B_{\epsilon}(0)$ 
>>	5. Y son convexos (Sale similas a convexidad de $C$)
>>	6. Luego vale $(a)$ con $A_{\epsilon}$ y $B_{\epsilon}$ en lugar de $A$ y $B$.
>>	7. Sea $\delta= \frac{\epsilon}{2\lVert w_{0} \rVert}$ entonces $a+\delta w_{0}\in A_{\epsilon}$. Pues $\delta w_{0}\in B_{ \frac{\epsilon}{2}}(0)$. Por lo tanto $f_{X}(a+\delta w_{0})\leq \gamma$ 
>>	8. Entonces $f_{X}(a)=f_{X}(a+\delta w_{0})-\delta f_{X}(w_{0})\leq \gamma-\delta$ (Recordar $f_{X}(w_{0})=f_{W}(w_{0})=1$)
>>	9. Analogamente (usando $b-\delta w_{0}$) llegamos a  $\gamma+\delta\leq f_{X}(b)\quad\forall b\in B$ entonces vale $(b)$

^18a436