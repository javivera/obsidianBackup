## Topología cociente

> [!Definition] Topología cociente
> Sean $X$ un espacio topológico, $Y$ un conjunto arbitrario y
> $$
> \pi:X\longrightarrow Y
> $$
> una función sobreyectiva. La **topología cociente** sobre $Y$ determinada por $\pi$ se define declarando que
> $$
> U\subseteq Y \text{ es abierto}
> \iff
> \pi^{-1}(U)\subseteq X \text{ es abierto}.
> $$

> [!Definition] Función abierta y función cerrada
> Sean $X$ e $Y$ espacios topológicos y $F:X\to Y$ una función.
> Se dice que $F$ es:
> - **abierta** si lleva abiertos en abiertos,
> - **cerrada** si lleva cerrados en cerrados.

>[!Exercise] Criterio para Hausdorff
>Sea $\pi:X\to Y$ una función sobreyectiva y abierta. Sea $Y$ con la topología cociente. Entonces $Y$ es Hausdorff si y solo si $$R:=\{(p,q)\in X\times X:\pi(p)=\pi(q)\}$$es cerrado en $X\times X$.
>>[!Proof]
>>Hacerla

^d48425

>[!Remark] Funcion no abierta
>Sea $\pi:X\to Y$ una función sobreyectiva y sea $Y$ con la topología cociente. Dar un ejemplo donde $\pi$ no sea abierta.
>>[!Proof]
>>Tomemos $X=[0,1]$ con la topología usual y consideremos la relación de equivalencia que identifica solo los extremos:
>>$$
>>x\sim y \iff x=y \text{ o bien } \{x,y\}=\{0,1\}.
>>$$
>>Sea
>>$$
>>Y:=X/{\sim}
>>$$
>>con la topología cociente, y sea
>>$$
>>\pi:X\to Y,\qquad x\mapsto [x]
>>$$
>>la proyección natural. Por definición, $\pi$ es sobreyectiva.
>>
>>Veamos que $\pi$ no es abierta. Consideremos el abierto
>>$$
>>U=[0,1/2)\subseteq [0,1].
>>$$
>>Entonces $\pi(U)\subseteq Y$ contiene la clase $[0]=[1]$. Además,
>>$$
>>\pi^{-1}(\pi(U))=U\cup\{1\}=[0,1/2)\cup\{1\}.
>>$$
>>En efecto, todos los puntos de $U$ vuelven a caer en $\pi(U)$, y también $1$ porque $\pi(1)=\pi(0)$ con $0\in U$.
>>
>>Pero $[0,1/2)\cup\{1\}$ no es abierto en $[0,1]$, ya que $1$ no es punto interior. Luego, por la definición de topología cociente, $\pi(U)$ no es abierto en $Y$.
>>
>>Por lo tanto, $\pi$ es una función sobreyectiva que define la topología cociente en $Y$, pero no es abierta.

>[!Exercise] Propiedad universal del cociente
>Sean $X$ y $Z$ espacios topológicos, $\pi:X\to Y$ sobreyectiva, y consideremos en $Y$ la topología cociente.
>Si $F:Y\to Z$ es una función, entonces $$F \text{ es continua}\iff F\circ \pi:X\to Z \text{ es continua}.$$

>[!Lemma] Paso al cociente
>Repasemos lo que decia si tenemos $\pi:X\rightarrow X/\sim$ y $F:X\rightarrow Y$ decimos que $F$ pasa al cociente si $x\sim y$ entonces $F(x)=F(y)$. 
>Pasar al cociente es que existe una unica funcion $\tilde{F}:X/\sim\rightarrow Y$ tal que $\tilde{F}\circ\pi=F$. Ademas si $F$ es continua entonces $\tilde{F}$ es continua y es facil ver que si $F$ es suave entonces $\tilde{F}$ tambien  

^af5aa3

## El espacio proyectivo real

>[!Definition] Presentación de $\mathbb{RP}^n$ como cociente de la esfera
>Veamos que $\mathbb{R}\mathbb{P}^{n}$ es variedad topologica de dimension $n$ 
>>[!Proof]-
>>- Definimos $\mathbb{R}\mathbb{P}^{n}$
>>	1. En $S^n$ consideramos la relación de equivalencia $$ p\sim q\iff q=\pm p.$$es decir, identificamos puntos antipodales.
>>	2. Definimos $$\mathbb{RP}^n:=S^n/{\sim} = \{[p]:p\in S^n\}.$$Sea $$ \pi:S^n\longrightarrow \mathbb{RP}^n, \qquad p\longmapsto [p].$$
>>	3. Dotamos a $\mathbb{RP}^n$ de la topología cociente inducida por $\pi$.
>>- Veamos que la proyección $\pi$ es abierta.
>>	1. Para esto deberiamos ver que dado $U\subseteq S^{n}$ abierto entonces $\pi(U)$ es abierto, pero por definicion de topologia cociente es lo mismo que ver que $\pi ^{-1}(\pi(U))$ es abierto $$\pi^{-1}(\pi(U))=U\cup (-U),$$y el lado derecho es abierto en $S^n$.
>>	2. Por lo tanto $\pi(U)$ es abierto y entonces $\pi$ es abierta  
>>- Veamos Segundo axioma de numerabilidad
>>	1. Como $\pi$ es abierta y sobreyectiva, y $S^n$ satisface $N_2$, se obtiene que $\mathbb{RP}^n$ también satisface $N_2$.
>>- Hausdorff
>>	1. Como $\pi$ es abierta, para probar que $\mathbb{RP}^n$ es Hausdorff, usando el [[GS - 3er Teo#^d48425]] basta ver que $$ R:=\{(p,q)\in S^n\times S^n:\pi(p)=\pi(q)\} $$es cerrado. 
>>	2. Pero $$R=\{(p,q)\in S^n\times S^n:p=q\}\cup \{(p,q)\in S^n\times S^n:p=-q\},$$y ambos conjuntos son cerrados en $S^n\times S^n$.
>>- Localmente euclideo
>>	1. Tomamos $[p] \in \mathbb{R}\mathbb{P}^{n}$ obviamente existe un $U_i^\pm$ un casquete de $S^n$ tal que $p \in \pi(U_{i}^{\pm})$ 
>>	2. Ademas notamos que la restricción $$\pi|_{U_i^\pm}:U_i^\pm\longrightarrow \pi(U_i^\pm)$$es biyectiva. 
>>	3. Como $\pi$ es abierta, luego $\pi(U_i^\pm)$ es abierto en $\mathbb{RP}^n$.
>>	4. Ademas como $\pi$ abierta y biyectiva entonces es homeomorfismo
>>	5. Notar que como restringimos el dominio, la inversa tengra restringido el codominio, osea que al volver no me da ambos representantes de la case (como lo haria $\pi$ sin restringir) si no que me da un representante solo. Digamos $\pi|_{U_{i}^{+}}$ es una especie de nueva funcion que al hacer inveras no devuelve dos elementos por cada clase de $\mathbb{R}\mathbb{P}^{n}$ si no que devuelve solo uno, el que esta en $U_{i}^{+}$   
>>	6. Por lo tanto $$\varphi_i^\pm\circ (\pi|_{U_i^\pm})^{-1}:\pi(U_i^\pm)\longrightarrow B^n$$es un homeomorfismo.
>>
>>En consecuencia, $\mathbb{RP}^n$ es una variedad topológica de dimensión $n$.

>[!Definition] Otra presentación de $\mathbb{RP}^n$
>Veamos que $\mathbb{R}\mathbb{P}^{n}$ es variedad topologica de otra manera
>>[!Proof]-
>>- Definimos la rel de equivalencia
>>	1. En $\mathbb{R}^{n+1}\setminus\{0\}$ consideramos la relación de equivalencia $$ p\sim q \iff \exists \lambda\in \mathbb{R}\setminus\{0\}\text{ tal que }q=\lambda p. $$
>>	2. Es decir, dos vectores son equivalentes si generan la misma recta que pasa por el origen.
>>- Definimos el cociente
>>	1. Definimos $$\mathbb{RP}^n:= (\mathbb{R}^{n+1}\setminus\{0\})/{\sim}= \{[p]:p\in \mathbb{R}^{n+1}\setminus\{0\}\}$$con la topología cociente determinada por la proyección natural $$ \pi:\mathbb{R}^{n+1}\setminus\{0\}\longrightarrow \mathbb{RP}^n, \qquad p\longmapsto [p]. $$
>>- Hausdorff
>>	1. Si $U\subseteq \mathbb{R}^{n+1}\setminus\{0\}$ es abierto, entonces $$ \pi^{-1}(\pi(U))= \bigcup_{\lambda\in \mathbb{R}\setminus\{0\}} \lambda U.$$
>>	2. Como la multiplicación por $\lambda\neq 0$ es un homeomorfismo de $\mathbb{R}^{n+1}\setminus\{0\}$, cada $\lambda U$ es abierto
>>	3. Por lo tanto, $\pi^{-1}(\pi(U))$ es abierto y $\pi(U)$ es abierto. Osea $\pi$ es abierta 
>>	4. Luego consideremos $$R:=\{(p,q)\in (\mathbb{R}^{n+1}\setminus\{0\})^2:q=\lambda p \text{ para algún } \lambda\neq 0\}.$$ osea el conjunto de los elementos ld
>>	5. Luego recordamos que dos elementos son ld si todas de su submatrices tienen determinante 0 
>>	6. Para $1\le i<j\le n+1$, definimos $$Q_{ij}:\bigl(\mathbb{R}^{n+1}\setminus\{0\}\bigr)^2\longrightarrow \mathbb{R},\qquad Q_{ij}(x,y):= \det\begin{pmatrix}x_i & y_i\\ x_j & y_j\end{pmatrix}.$$
>>	7. Entonces $$ R=\bigcap_{1\le i<j\le n+1} Q_{ij}^{-1}(\{0\}),$$luego $R$ es cerrado. Por ser interseccion finita de cerrados ($Q_{ij}$ escontinua y $\{ 0 \}$ cerrado) 
>>	8. Por consiguiente, $\mathbb{RP}^n$ es Hausdorff.
>>- Localmente euclideo
>>	1. Sea $[p]\in \mathbb{RP}^n$ y tomemos un representante $$p=(x_1,\dots,x_{n+1})$$con alguna coordenada $x_i\neq 0$.
>>	2. Definimos $$\widetilde U_i:=\{(y_1,\dots,y_{n+1})\in \mathbb{R}^{n+1}\setminus\{0\}:y_i\neq 0\}$$que es abierto en $\mathbb{R}^{n+1}\setminus\{0\}$
>>	3. Luego $$ U_i:=\pi(\widetilde U_i) $$que es un abierto de $\mathbb{RP}^n$ por que en este caso $\pi ^{-1}(U_{i})=\tilde{U}_{i}$ que es abierto (osea justo $\tilde{U}_{i}$ es saturado) 
>>	4. La aplicación $$ \varphi_i:U_i\longrightarrow \mathbb{R}^n, \qquad [(x_1,\dots,x_{n+1})] \longmapsto \left( \frac{x_1}{x_i},\dots,\widehat{\frac{x_i}{x_i}},\dots,\frac{x_{n+1}}{x_i} \right) $$está bien definida y es un homeomorfismo.
>>	5. Una inversa explícita está dada por $$\psi_i(u_1,\dots,u_n) = [u_1,\dots,u_{i-1},1,u_i,\dots,u_n]. $$
>>	6. Por lo tanto, los abiertos $U_i$ dan una familia de cartas de $\mathbb{RP}^n$ con imagen en $\mathbb{R}^n$.

## El toro

>[!Exercise] Una presentación del toro REVISAR
>Ver a $\mathbb{R}^n$ como grupo abeliano con la suma. Entonces $\mathbb{Z}^n$ es subgrupo de $\mathbb{R}^n$. Se denota por
>$$
>\mathbb{T}^n:=\mathbb{R}^n/\mathbb{Z}^n
>$$
>el conjunto de clases laterales a izquierda de $\mathbb{Z}^n$. Equivalentemente,
>$$
>x\sim y \iff x-y\in \mathbb{Z}^n.
>$$
>Dotamos a $\mathbb{T}^n$ de la topología cociente inducida por la proyección natural
>$$
>\pi:\mathbb{R}^n\longrightarrow \mathbb{T}^n,\qquad x\longmapsto [x].
>$$
>Ver que $\mathbb{T}^n$ es una variedad topológica de dimensión $n$.
>>[!Proof]-
>>- Definimos la relación de equivalencia
>>	1. Para $x,y\in \mathbb{R}^n$, tenemos $$x\sim y \iff x-y\in \mathbb{Z}^n.$$
>>	2. Es decir, $x$ e $y$ son equivalentes si difieren en un vector con coordenadas enteras.
>>- Veamos que la proyección $\pi$ es abierta
>>	1. Sea $U\subseteq \mathbb{R}^n$ abierto. Entonces
>>	$$
>>	\pi^{-1}(\pi(U))=\bigcup_{m\in \mathbb{Z}^n}(U+m).
>>	$$
>>	2. Como para cada $m\in \mathbb{Z}^n$ la traslación $x\mapsto x+m$ es un homeomorfismo de $\mathbb{R}^n$, cada $U+m$ es abierto.
>>	3. Luego $\pi^{-1}(\pi(U))$ es abierto, y por definición de topología cociente $\pi(U)$ es abierto.
>>	4. Por lo tanto, $\pi$ es abierta.
>>- Segundo axioma de numerabilidad
>>	1. Como $\pi$ es abierta y sobreyectiva, y $\mathbb{R}^n$ satisface $N_2$, se obtiene que $\mathbb{T}^n$ también satisface $N_2$.
>>- Hausdorff
>>	1. Como $\pi$ es abierta, usando el [[GS - 3er Teo#^d48425]] basta ver que
>>	$$
>>	R:=\{(x,y)\in \mathbb{R}^n\times \mathbb{R}^n:\pi(x)=\pi(y)\}
>>	$$
>>	es cerrado.
>>	2. Pero
>>	$$
>>	R=\{(x,y)\in \mathbb{R}^n\times \mathbb{R}^n:x-y\in \mathbb{Z}^n\}
>>	=\bigcup_{m\in \mathbb{Z}^n}\{(x,y)\in \mathbb{R}^n\times \mathbb{R}^n:y=x-m\}.
>>	$$
>>	3. Cada conjunto
>>	$$
>>	G_m:=\{(x,y)\in \mathbb{R}^n\times \mathbb{R}^n:y=x-m\}
>>	$$
>>	es cerrado, pues es el conjunto de ceros de la función continua $(x,y)\mapsto y-x+m$.
>>	4. Además, la unión $\bigcup_{m\in \mathbb{Z}^n}G_m$ es cerrada: si $(x_k,y_k)\in R$ y $(x_k,y_k)\to (x,y)$, entonces $y_k-x_k\in \mathbb{Z}^n$ para todo $k$, y como $y_k-x_k\to y-x$ y $\mathbb{Z}^n$ es cerrado en $\mathbb{R}^n$, se sigue que $y-x\in \mathbb{Z}^n$.
>>	5. Luego $R$ es cerrado y por consiguiente $\mathbb{T}^n$ es Hausdorff.
>>- Localmente euclídeo
>>	1. Sea $[x]\in \mathbb{T}^n$. Tomamos $\varepsilon<1/2$ y sea $B(x,\varepsilon)\subseteq \mathbb{R}^n$ la bola abierta de centro $x$ y radio $\varepsilon$.
>>	2. Si $m\in \mathbb{Z}^n\setminus\{0\}$, entonces $\|m\|\ge 1$. Por lo tanto, $B(x,\varepsilon)\cap (B(x,\varepsilon)+m)=\varnothing$.
>>	3. En consecuencia, la restricción
>>	$$
>>	\pi|_{B(x,\varepsilon)}:B(x,\varepsilon)\longrightarrow \pi(B(x,\varepsilon))
>>	$$
>>	es biyectiva.
>>	4. Como $\pi$ es abierta, $\pi(B(x,\varepsilon))$ es abierto en $\mathbb{T}^n$. Entonces $\pi|_{B(x,\varepsilon)}$ es un homeomorfismo.
>>	5. Como $B(x,\varepsilon)$ es homeomorfo a una bola abierta de $\mathbb{R}^n$, resulta que cada punto de $\mathbb{T}^n$ tiene un entorno abierto homeomorfo a un abierto de $\mathbb{R}^n$.
>>
>>En consecuencia, $\mathbb{T}^n$ es una variedad topológica de dimensión $n$.
