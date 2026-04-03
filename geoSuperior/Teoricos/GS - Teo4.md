>[!Definition] Cartas suavemente compatibles
>Sea $M$ una variedad topológica de dimensión $n$. Sean $(U,\varphi)$ y $(V,\psi)$ dos cartas de $M$. Se dice que son **suavemente compatibles** si $U\cap V=\varnothing$, o bien, en el caso $U\cap V\neq\varnothing$, la función de transición $$\psi\circ\varphi^{-1}:\varphi(U\cap V)\subseteq\mathbb{R}^n\to\psi(U\cap V)\subseteq\mathbb{R}^n $$
>es un difeomorfismo; es decir, es biyectiva, de clase $C^\infty$, y su inversa también es $C^\infty$.  
## Atlas

>[!Definition] Atlas
>Sea $M$ una variedad topológica de dimensión $n$. Un **atlas de clase $C^\infty$** sobre $M$ es una familia $\mathcal{A}$ de cartas de $M$ cuyos dominios cubren todo $M$ y tal que cualquier par de cartas en $\mathcal{A}$ es suavemente compatible.

>[!Example] Ejemplos de atlas
>- $\mathcal{A}_1=\{(\mathbb{R}^n,\operatorname{Id}_{\mathbb{R}^n})\}$ es un atlas de $\mathbb{R}^n$.
>- $\mathcal{A}_2=\{(\mathbb{R},x\mapsto \sqrt[3]{x})\}$ es un atlas de $\mathbb{R}$.

## Atlas maximal

>[!Definition] Atlas maximal
>Un atlas $\mathcal{F}$ sobre una variedad topológica se dice **maximal** si no está contenido propiamente en otro atlas de $M$. Equivalentemente, si $(V,\psi)$ es una carta de $M$ que es suavemente compatible con toda carta en $\mathcal{F}$, entonces $(V,\psi)$ debe ser un miembro de $\mathcal{F}$.

## Variedad suave

>[!Definition] Estructura diferenciable y variedad suave
>Sea $M$ una variedad topológica. Una **estructura diferenciable de clase $C^\infty$**, o **estructura suave**, sobre $M$ es un atlas (de clase $C^{\infty}$) maximal $\mathcal{F}$ de $M$. Una **variedad suave** o **variedad diferenciable** es un par $(M,\mathcal{F})$, donde $M$ es variedad topológica y $\mathcal{F}$ es una estructura suave sobre $M$.
>
>Cualquier carta $(U,\varphi)\in\mathcal{F}$ se llama **carta suave** de $M$.

>[!Remark] Notación de la clase
>En estas notas se usa $\mathcal{F}$ para el atlas maximal por tradición del Warner, *Foundations of Differentiable Manifolds and Lie Groups*.

>[!Remark] Estructuras suaves
>Una variedad topológica puede tener distintas estructuras suaves.
>
>Lee comenta:
>> On the other hand, it is not always possible to find a smooth structure on a given topological manifold; there exist topological manifolds that admit no smooth structures at all.

## Teorema fundamental sobre atlas maximales

>[!Theorem] Teorema fundamental sobre atlas maximales
>Sea $M$ una variedad topológica y sea $\mathcal{A}_0$ un atlas de $M$. Entonces existe un único atlas maximal, llamado la **estructura diferenciable generada por $\mathcal{A}_0$**, que contiene a $\mathcal{A}_0$.
>>[!Proof]
>>1. Se define $\mathcal{F}$ como el conjunto de todas las cartas de $M$ que son suavemente compatibles con las cartas de $\mathcal{A}_0$. Por definición, $\mathcal{A}_0\subseteq\mathcal{F}$.
>>2. Los dominios de las cartas en $\mathcal{F}$ cubren $M$, porque ya lo hacen las cartas de $\mathcal{A}_0$.
>>3. Las cartas de $\mathcal{F}$ son mutuamente compatibles: si $(U,\varphi)$ y $(V,\psi)$ están en $\mathcal{F}$, se toma un punto $p\in U\cap V$ y una carta $(W,\theta)\in\mathcal{A}_0$ alrededor de $p$. Entonces $\theta\circ\varphi^{-1}$ y $\psi\circ\theta^{-1}$ son suaves localmente, y por lo tanto también lo es $\psi\circ\varphi^{-1}$.
>>4. La maximalidad sale de la definición: cualquier carta compatible con todas las cartas de $\mathcal{F}$ es, en particular, compatible con las de $\mathcal{A}_0$, luego pertenece a $\mathcal{F}$.
>>5. La unicidad también es inmediata: si $\widetilde{\mathcal{F}}$ es otro atlas maximal que contiene a $\mathcal{A}_0$, entonces toda carta de $\widetilde{\mathcal{F}}$ es compatible con $\mathcal{A}_0$, de modo que $\widetilde{\mathcal{F}}\subseteq\mathcal{F}$; y por maximalidad se obtiene la igualdad.

## Ejemplos de estructuras suaves

>[!Example] Ejemplos de estructuras suaves
>- El atlas usual $\mathcal{A}_1=\{ (\mathbb{R}^{n},\operatorname{Id}_{\mathbb{R}^{n}} )\}$ induce la estructura diferenciable usual de $\mathbb{R}^n$.
>- El atlas $\mathcal{A}_2=\{(\mathbb{R},x\mapsto \sqrt[3]{x})\}$ determina una estructura suave sobre $\mathbb{R}$ distinta de la usual.
>- Todo espacio vectorial real de dimensión finita tiene una estructura natural de variedad suave.
>- $M(m\times n,\mathbb{R})$, el espacio de matrices $m\times n$ con entradas reales, es una variedad diferenciable por ser un espacio vectorial real de dimensión finita.
>- Si $(M,\mathcal{F})$ es una variedad suave y $U\subseteq M$ es abierto, entonces $U$ hereda una estructura suave dada por $$\mathcal{F}_U=\{(V\cap U,\varphi|_{V\cap U}) : (V,\varphi)\in\mathcal{F}\text{ y }V\cap U\neq\varnothing\}.$$
>- $GL(n,\mathbb{R})=\{X\in M(n,\mathbb{R}) : \det(X)\neq 0\}$ es un abierto de $M(n,\mathbb{R})$, así que es naturalmente una variedad diferenciable. Se llama **grupo general lineal**.

>[!Example] Atlas suave de $S^n$
>La familia de las **cartas casquetes** define un atlas sobre $S^n$.n 
>>[!Proof]-
>>1. Se consideran los abiertos $$U_i^\varepsilon=\{x=(x_1,\dots,x_{n+1})\in S^n : \varepsilon x_i>0\},\qquad \varepsilon\in\{+,-\}$$y las cartas $$\varphi_i^\varepsilon:U_i^\varepsilon\to B^n,\qquad\varphi_i^\varepsilon(x_1,\dots,x_{n+1})=x_1,\dots,\widehat{x_i},\dots,x_{n+1})$$
>>2. La inversa inserta la coordenada faltante como $$\left(\varphi_i^\varepsilon\right)^{-1}(z_1,\dots,z_n)=(z_1,\dots,z_{i-1},\varepsilon\sqrt{1-z_1^2-\cdots-z_n^2},z_i,\dots,z_n)$$
>>**Prueba de compatibilidad suave**
>>3. Sean $(U_i^{\varepsilon_1}, \varphi_i^{\varepsilon_1})$ y $(U_j^{\varepsilon_2}, \varphi_j^{\varepsilon_2})$ dos cartas casquetes tales que $U_i^{\varepsilon_1} \cap U_j^{\varepsilon_2} \cap S^n \neq \emptyset$. Queremos ver que son suavemente compatibles, es decir, que $\varphi_j^{\varepsilon_2} \circ (\varphi_i^{\varepsilon_1})^{-1}$ es suave sobre $\varphi_i^{\varepsilon_1}(U_i^{\varepsilon_1} \cap U_j^{\varepsilon_2} \cap S^n)$.
>>4. Recordemos que $U_i^{\varepsilon_1} = \{ x \in \mathbb{R}^{n+1} : \varepsilon_1 x_i > 0 \}$. Supongamos que $i < j$. Notar que: $$\varphi_i^{\varepsilon_1}(U_i^{\varepsilon_1} \cap U_j^{\varepsilon_2} \cap S^n) = \{ (z_1, \dots, z_n) \in B^n : \varepsilon_2 z_{j-1} > 0 \}.$$ Esto se debe a que $\varphi_i^{\varepsilon_1}$ elimina la entrada $x_i$, por lo que la coordenada $x_j$ de $\mathbb{R}^{n+1}$ pasa a ser la coordenada $z_{j-1}$ en $B^n$
>>5. Por lo tanto: $$\begin{aligned}\varphi_j^{\varepsilon_2} \circ (\varphi_i^{\varepsilon_1})^{-1}(z_1, \dots, z_n) &= \varphi_j^{\varepsilon_2}(z_1, \dots, z_{i-1}, \varepsilon_1 \sqrt{1-z_1^2-\dots-z_n^2}, z_i, \dots, z_n) \\&= (z_1, \dots, z_{i-1}, \varepsilon_1 \sqrt{1-z_1^2-\dots-z_n^2}, z_i, \dots, \widehat{z_{j-1}}, \dots, z_n).\end{aligned}$$
>>6. Esta expresión es suave pues cada entrada es suave en $B^n$. Notar que la función raíz cuadrada $\sqrt{1-|z|^2}$ solo tiene problemas de diferenciabilidad cuando $|z|=1$,
>>7. Pero por 2. sabemos que el dominio esta contenido en la bola abierta $B^n$. Asi que allí esta funcion es suave
>>8. Los casos $i > j$ o $i = j$ se analizan de forma similar (en este último, si $\varepsilon_1 \neq \varepsilon_2$ la intersección es vacía)

>[!Example] Atlas suave de $\mathbb{RP}^n$
>Se puede ver $\mathbb{RP}^n$ como el conjunto de rectas de $\mathbb{R}^{n+1}$ que pasan por el origen.
>Si $\pi:\mathbb{R}^{n+1}\setminus\{0\}\to\mathbb{RP}^n$ es la proyección cociente, se toman los abiertos
>$$U_i=\pi(\widehat{U}_i),\qquad \widehat{U}_i=\ x\in\mathbb{R}^{n+1}\setminus\{0\}:x_i\neq 0\}.$$
>La carta correspondiente es $$\varphi_i:U_i\to\mathbb{R}^n,\qquad[x_1,\cdots,x_{n+1}]\mapsto\left(\frac{x_1}{x_i},\dots,\widehat{\frac{x_i}{x_i}},\dots,\frac{x_{n+1}}{x_i}\right).$$
>Veamos que $\{ (U_{i},\varphi_{i}) \}$ es atlas
>>[!Proof]-
>>1. Queremos ver que $\varphi_j \circ \varphi_i^{-1}$ es suave sobre $\varphi_i(U_i \cap U_j)$
>>2. Supongamos que $i < j$ (el caso $i > j$ es similar y $i=j$ es trivial). Notar que $$\varphi_i(U_i \cap U_j) = \{ (z_1, \dots, z_n) \in \mathbb{R}^n : z_{j-1} \neq 0 \}$$
>>3. La inversa de la carta $\varphi_i$ viene dada por $$\varphi_i^{-1}(z_1, \dots, z_n) = [z_1 , \dots , z_{i-1} , 1 , z_i , \dots , z_n]$$
>>4. Entonces, la función de transición es $$\begin{aligned}\varphi_j \circ \varphi_i^{-1}(z_1, \dots, z_n) &= \varphi_j ([z_1 , \dots , z_{i-1} , 1 , z_i , \dots ,z_n]) \\&= \frac{1}{z_{j-1}} (z_1, \dots, z_{i-1}, 1, z_i, \dots, \widehat{z_{j-1}}, \dots, z_n)\end{aligned}$$
>>5. Como $z_{j-1} \neq 0$ en el dominio, esta expresión es correcta y, trivialmente, suave.

## Funciones diferenciables con dominio variedad

>[!Definition] Función diferenciable
>Sea $(M,\mathcal{F})$ una variedad diferenciable y sea $F:M\to\mathbb{R}^k$ una función. Se dice que $F$ es **diferenciable** o **$C^\infty$** si para toda carta $(U,\varphi)\in\mathcal{F}$ se cumple que $$F\circ\varphi^{-1}:\varphi(U)\subseteq\mathbb{R}^n\to\mathbb{R}^k$$ es una función $C^\infty$ en el abierto $\varphi(U)$.

>[!Exercise] Criterio usando un atlas
>Sea $M$ una variedad diferenciable y $\mathcal{A}\subseteq\mathcal{F}$ un atlas de $M$. Sea $F:M\to\mathbb{R}^k$. Probar que $F$ es suave si para toda carta $(U,\varphi)\in\mathcal{A}$ se cumple que $F\circ\varphi^{-1}$ es suave sobre el abierto $\varphi(U)$.
>>[!Proof]-
>>- **($\Rightarrow$)** 
>>	1. Si $F$ es suave, por definición $F\circ\varphi^{-1}$ es suave para toda carta del atlas maximal $\mathcal{F}$. Como $\mathcal{A}\subseteq\mathcal{F}$, vale en particular para toda carta de $\mathcal{A}$.
>>- **($\Leftarrow$)** 
>>	1. Supongamos que $F\circ\varphi^{-1}$ es suave para toda $(U,\varphi)\in\mathcal{A}$. Queremos ver que $F$ es suave, es decir, que para toda carta maximal $(V,\psi)\in\mathcal{F}$, la función $F\circ\psi^{-1}$ es suave sobre $\psi(V)$.
>>	2. Sea $x\in\psi(V)$ arbitrario y $p=\psi^{-1}(x)\in V$. Como $\mathcal{A}$ es un atlas, sus dominios cubren $M$, luego existe $(U,\varphi)\in\mathcal{A}$ con $p\in U$. 
>>	3. Ahora sobre $\psi(U\cap V)$, abierto que contiene a $x$, se escribe: $$F\circ\psi^{-1}=\underbrace{(F\circ\varphi^{-1})}_{\text{suave por hip.}}\circ\underbrace{(\varphi\circ\psi^{-1})}_{\text{cambio de coord}}$$
>>	4. $\varphi\circ\psi^{-1}$ es suave: es la función de cambio de coordenadas entre $(U,\varphi)\in\mathcal{A}\subseteq\mathcal{F}$ y $(V,\psi)\in\mathcal{F}$, luego son suavemente compatibles osea $\varphi\circ\psi^{-1}$ es difeomorfismo sobre $\psi(U\cap V)$.
>>	5. $F\circ\varphi^{-1}$ es suave por hipótesis sobre $\varphi(U\cap V)\subseteq\varphi(U)$.
>>	6. La composición de suaves es suave, así que $F\circ\psi^{-1}$ es suave en un entorno $\psi(U\cap V)$ de $x$ que esta dentro de $\psi(V)$. 
>>	7. Como $x$ fue arbitrario, $F\circ\psi^{-1}$ es suave sobre todo $\psi(V)$, y como $(V,\psi)$ fue arbitraria en $\mathcal{F}$, $F$ es suave. $\blacksquare$

## Notación

>[!Definition] Notación $C^\infty(M)$
>Se escribe
>$$C^\infty(M)=\{f:M\to\mathbb{R} : f\text{ es suave}\}.$$
>
>Si $U\subseteq M$ es un abierto, se define análogamente $C^\infty(U)$.

>[!Exercise] Estructura de $\mathbb{R}$-álgebra
>Sea $M$ una variedad suave. Mostrar que $C^\infty(M)$ es una $\mathbb{R}$-álgebra asociativa y conmutativa con las operaciones usuales.
>
>Para $\lambda\in\mathbb{R}$ y $f,g\in C^\infty(M)$: $$(\lambda f)(x)=\lambda\,f(x), \qquad (f+g)(x)=f(x)+g(x), \qquad (fg)(x)=f(x)\,g(x).$$
>>[!Proof]-
>>- **Cierre bajo las operaciones.**
>>	1. Sea $(U,\varphi)$ una carta suave arbitraria de $M$. Si $f,g\in C^\infty(M)$, entonces $f\circ\varphi^{-1}$ y $g\circ\varphi^{-1}$ son $C^\infty$ sobre $\varphi(U)$.
>>	2. $(f+g)\circ\varphi^{-1}=(f\circ\varphi^{-1})+(g\circ\varphi^{-1})$ es suave $\Rightarrow$ $f+g\in C^\infty(M)$.
>>	3. $(fg)\circ\varphi^{-1}=(f\circ\varphi^{-1})(g\circ\varphi^{-1})$ es suave $\Rightarrow$ $fg\in C^\infty(M)$.
>>	4. $(\lambda f)\circ\varphi^{-1}=\lambda(f\circ\varphi^{-1})$ es suave $\Rightarrow$ $\lambda f\in C^\infty(M)$.
>>	5. Como $(U,\varphi)$ fue arbitraria, el criterio del ejercicio anterior garantiza que las tres operaciones preservan $C^\infty(M)$.
>>
>>- **Axiomas de álgebra.**
>>	1. La asociatividad y conmutatividad de la suma y el producto, la distributividad y la compatibilidad con escalares se verifican punto a punto: para cada $x\in M$ se reducen a los mismos axiomas en $\mathbb{R}$, que son válidos. $\blacksquare$

>[!Exercise] Cocientes de polinomios homogéneos
>Sean $P,Q\in\mathbb{R}[x_1,\dots,x_{n+1}]$ dos polinomios homogéneos de grado $k$, es decir, $$P(tx)=t^kP(x),\qquad Q(tx)=t^kQ(x).$$ Suponer además que $$Q(x)=0 \iff x=(0,\dots,0).$$ Por ejemplo, $$Q(x_1,\dots,x_{n+1})=x_1^2+\cdots+x_{n+1}^2.$$ Probar que la función $$f:\mathbb{RP}^n\to\mathbb{R},\qquad [x]\mapsto \frac{P(x)}{Q(x)}$$ está bien definida, no depende del representante, y es suave.
>>[!Proof]-
>>**Buena definición.**
>>2. Si $[x]=[y]$, entonces $y=tx$ para algún $t\neq 0$. Como $P$ y $Q$ son homogéneos de grado $k$: $$\frac{P(y)}{Q(y)}=\frac{P(tx)}{Q(tx)}=\frac{t^kP(x)}{t^kQ(x)}=\frac{P(x)}{Q(x)}.$$
>>3. Por hipótesis $Q(x)\neq 0$ para todo $x\neq 0$, luego $f$ está bien definida en todo $\mathbb{RP}^n$.
>>
>>**Suavidad (usando el criterio y el atlas de $\mathbb{RP}^n$).**
>>4. Se usa el atlas $\{(U_i,\varphi_i)\}_{i=1}^{n+1}$ con $U_i=\{[x]:x_i\neq 0\}$ y $\varphi_i^{-1}(z_1,\dots,z_n)=[z_1,\dots,z_{i-1},1,z_i,\dots,z_n]$.
>>5. Para cada carta $(U_i,\varphi_i)$, la representación local es: $$f\circ\varphi_i^{-1}(z_1,\dots,z_n)=\frac{P(z_1,\dots,z_{i-1},1,z_i,\dots,z_n)}{Q(z_1,\dots,z_{i-1},1,z_i,\dots,z_n)}.$$
>>6. El numerador y denominador son polinomios en $(z_1,\dots,z_n)$, luego son suaves.
>>7. El denominador no se anula: el vector $(z_1,\dots,z_{i-1},1,z_i,\dots,z_n)\neq 0$ pues tiene un $1$ en la posición $i$, y por hipótesis $Q$ solo se anula en el origen. Por lo tanto el cociente es suave sobre todo $\mathbb{R}^n=\varphi_i(U_i)$.
>>8. Por el criterio del ejercicio anterior, $f$ es suave en $\mathbb{RP}^n$. $\blacksquare$

## Funciones suaves entre variedades

>[!Definition] Función suave entre variedades
>Sean $(M,\mathcal{F})$ y $(N,\widetilde{\mathcal{F}})$ variedades suaves de dimensiones $m$ y $n$, respectivamente. Una función $F:M\to N$ se dice **suave** o **$C^\infty$** si para todo $p\in M$ existen cartas suaves $(U,\varphi)$ de $M$ y $(V,\psi)$ de $N$ tales que
>- $p\in U$,
>- $F(p)\in V$,
>- $F(U)\subseteq V$,
>- la representación local $$\psi\circ F\circ\varphi^{-1}:\varphi(U)\subseteq\mathbb{R}^m\to\psi(V)\subseteq\mathbb{R}^n$$ es $C^\infty$.
>
>La aplicación $\psi\circ F\circ\varphi^{-1}$ se llama **representación local** de $F$.

>[!Remark] Localidad de la suavidad
>El problema de la suavidad es local: si para cada $p\in M$ existe un abierto $U\ni p$ tal que $F|_U$ es suave, entonces $F$ es suave globalmente.

## Proposición

>[!Proposition] Toda función suave es continua
>Toda funcion suave es continua
>>[!Proof]
>>1. Sea $F:M\to N$ suave. Fijado $p\in M$, existen cartas $(U,\varphi)$ alrededor de $p$ y $(V,\psi)$ alrededor de $F(p)$ tales que $F(U)\subseteq V$ y $\psi\circ F\circ\varphi^{-1}$ es suave, luego continua.
>>2. Como $\varphi$ y $\psi$ son homeomorfismos sobre sus imágenes, también son continuas con inversas continuas.
>>3. Entonces $$F|_U=\psi^{-1}\circ(\psi\circ F\circ\varphi^{-1})\circ\varphi$$ es continua.
>>4. Como esto vale en un abierto alrededor de cada punto, $F$ es continua en todo $M$.

>[!Proposition] Ejercicios básicos sobre funciones suaves
>Sean $M$, $N$ y $P$ variedades suaves.
>
>1. Si $F:M\to N$ es suave, entonces para todo par de cartas suaves $(\widetilde{U},\widetilde{\varphi})$ de $M$ y $(\widetilde{V},\widetilde{\psi})$ de $N$ se cumple que $$\widetilde{\psi}\circ F\circ\widetilde{\varphi}^{-1}:\widetilde{\varphi}(\widetilde{U}\cap F^{-1}(\widetilde{V}))\to\widetilde{\psi}(\widetilde{V})$$ es suave.
>
>2. Toda función constante $c:M\to N$ es suave.
>
>3. La identidad $\operatorname{Id}:(M,\mathcal{F})\to(M,\mathcal{F})$ es suave.
>
>4. Si $I\subseteq M$ es un abierto, entonces la inclusión $i:I\hookrightarrow M$ es suave.
>
>5. Si $F:M\to N$ y $G:N\to P$ son suaves, entonces $G\circ F:M\to P$ es suave.
>>[!Proof] Idea para el punto 1
>>1. Si $\widetilde{U}\cap F^{-1}(\widetilde{V})=\varnothing$, no hay nada que probar.
>>2. Si $p\in \widetilde{U}\cap F^{-1}(\widetilde{V})$, se toman cartas $(U,\varphi)$ de $M$ y $(V,\psi)$ de $N$ dadas por la definición de suavidad de $F$, con $p\in U$ y $F(p)\in V$.
>>3. Entonces, localmente, $$\widetilde{\psi}\circ F\circ\widetilde{\varphi}^{-1}=(\widetilde{\psi}\circ\psi^{-1})\circ(\psi\circ F\circ\varphi^{-1})\circ(\varphi\circ\widetilde{\varphi}^{-1}),$$ y cada factor es suave.
>>4. Por eso la composición también lo es.
>>[!Proof] Idea para el punto 5
>>5. Si $p\in M$, se toma primero una carta de $P$ alrededor de $G(F(p))$ y una carta de $N$ alrededor de $F(p)$ que haga suave a $G$.
>>6. Como $F$ es continua, la preimagen del abierto de esa carta en $N$ es abierto en $M$.
>>7. Restringiendo una carta de $M$ a ese abierto, se obtiene localmente $$\chi\circ(G\circ F)\circ\varphi^{-1}=(\chi\circ G\circ\psi^{-1})\circ(\psi\circ F\circ\varphi^{-1}),$$ que es composición de aplicaciones suaves.

## Difeomorfismos

>[!Definition] Difeomorfismo
>Una función $F:M\to N$ entre variedades suaves se dice **difeomorfismo** si es suave, biyectiva, y su inversa $F^{-1}:N\to M$ también es suave.

^069888

## Difeomorfismo local

>[!Definition] Difeomorfismo local
>Una función suave $F:M\to N$ se dice **difeomorfismo local** si para todo $p\in M$ existe un abierto $U$ de $p$ tal que $F(U)$ es abierto de $N$ y $$F|_U:U\to F(U)$$ es un difeomorfismo.

>[!Example] Ejemplo de difeomorfismo local
>La aplicación $$\pi:\mathbb{R}\to S^1,\qquad t\mapsto e^{it}=\cos t+i\sin t$$ es un difeomorfismo local.

## Grupos de Lie

>[!Definition] Grupo de Lie
>Un **grupo de Lie** es una variedad suave $G$ que además posee estructura de grupo y tal que las operaciones de grupo son suaves; es decir, $$m:G\times G\to G,\qquad (g,h)\mapsto gh$$ y $$\operatorname{inv}:G\to G,\qquad g\mapsto g^{-1}$$ son suaves.
>
>Aquí $G\times G$ lleva la estructura de variedad producto.

>[!Example] Ejemplos de grupos de Lie
>- $(\mathbb{R}^n,+)$ y $(\mathbb{C}^n,+)$.
>- $(\mathbb{R}\setminus\{0\},\cdot)$ y $(\mathbb{C}\setminus\{0\},\cdot)$.
>- $S^1$, visto como los complejos de norma $1$ con el producto de complejos.
>- $GL(n,\mathbb{R})$, con el producto de matrices.
>- Si $G$ y $H$ son grupos de Lie, entonces $G\times H$ también lo es con la estructura de variedad producto.

## Homomorfismos de grupos de Lie

>[!Definition] Homomorfismo de grupos de Lie
>Sean $G$ y $H$ grupos de Lie. Una función $F:G\to H$ se dice **homomorfismo de grupos de Lie** si es un homomorfismo de grupos y además es suave.

>[!Example] Ejemplos de homomorfismos de grupos de Lie
>- La inclusión $i:S^1\hookrightarrow\mathbb{C}^\ast$.
>- La exponencial $\exp:\mathbb{R}\to\mathbb{R}_{>0}$.
>- La aplicación $\theta:\mathbb{R}\to S^1$, dada por $\theta(t)=e^{2\pi i t}$.
>- El determinante $\det:GL(n,\mathbb{R})\to\mathbb{R}^\ast$.
