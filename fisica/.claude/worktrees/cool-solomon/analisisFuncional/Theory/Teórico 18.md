---
dateCreated: 2024-11-10,19:33
---
>[!Remark]
>A partir de ahora en este capítulo supondremos que $\mathcal{H}$ es un espacio de Hilbert complejo y que $T \in K(\mathcal{H})$ (requiriendo que $\mathcal{H}$ sea complejo para que podamos discutir la teoría espectral). Si $\mathcal{H}$ es de dimensión finita, sabemos que el espectro de $T$ consiste en una colección no vacía, finita, de autovalores, cada uno con multiplicidad finita (ver la Definición 1.13). Para operadores generales en espacios infinitos, el espectro puede ser muy diferente, pero para operadores compactos el espectro tiene muchas similitudes con el caso finito-dimensional. Específicamente, mostraremos que si $\mathcal{H}$ es de dimensión infinita, entonces $\sigma(T)$ consiste en una colección numerable (posiblemente vacía o finita) de autovalores no nulos, cada uno con multiplicidad finita, junto con el punto $\lambda = 0$, que necesariamente pertenece a $\sigma(T)$, pero no tiene que ser un autovalor o, si lo es, no tiene por qué tener multiplicidad finita. Para describir esta estructura de $\sigma(T)$, la siguiente notación será conveniente.

>[!Definition] Espectro puntual y resolvente
>Sea $K$ un espacio de Hilbert y sea $S \in B(K)$. Definimos los conjuntos
$$\sigma_p(S) = \{\lambda : \lambda \text{ es un autovalor de } S\}, \quad \rho(S) = \mathbb{C} \setminus \sigma(S)$$
>El conjunto $\sigma_p(S)$ es el espectro puntual de $S$, mientras que $\rho(S)$ es el conjunto resolvente de $S$

>[!Remark]
>Comenzamos nuestra discusión de $\sigma(T)$ tratando el punto $\lambda = 0$.

>[!Theorem] Operadores Compactos - $0$ esta en el espectro siempre MEMO
>Si $\mathcal{H}$ es de dimensión infinita, entonces $0 \in \sigma(T)$. Si $\mathcal{H}$ es separable, entonces ocurre que $0 \in \sigma_p(T)$ o $0 \in \sigma(T) \setminus \sigma_p(T)$. Si $\mathcal{H}$ no es separable, entonces $0 \in \sigma_p(T)$.
>>[!Proof]-
>>1. Si tuviéramos que $0 \not\in \sigma(T)$ entonces $T$ sería invertible. Sin embargo, dado que $\mathcal{H}$ es de dimensión infinita, esto contradice el [[Teórico 17#^201bb6]], por lo que debemos tener $0 \in \sigma(T)$.
>>2. Si $\mathcal{H}$ no es separable entonces $\overline{ImT^{*}}\neq\mathcal{H}$ por que $T^{*}$ es compacto entonces $\overline{Im(T^{*})}$ separable por [[Teórico 17#^dec284]]
>>3. Ademas sabemos $$ker(T)=\{ 0 \}\iff Im(T^{*})^{\perp}=\{ 0 \} \iff \overline{Im(T^{*})}=\mathcal{H}$$ entonces $ker (T)\neq\{ 0 \}$ ósea existe $c\in \mathcal{H}$ com $c\neq 0$ tal que $Tc=0$ osea $c$ autovecotor de aval $0$ mostrando que $0\in \sigma_{p}(T)$ 
>>4. Si $\mathcal{H}$ separable, abajo mostramos un ejemplo donde $0\in \sigma(T)\setminus \sigma_{p}(T)$ 

^5d2cfe

>[!Remark]
>Puede suceder que $S$ compacto y $\sigma_{p}(S)=\emptyset$ por ejemplo $S\in B(\ell^{2})$ dado por $$S(x_{1},x_{2},\ldots)=\left( 0,x_{1}, \frac{x_{2}}{2} ,\ldots\right)$$ Además $\sigma(S)=\{ 0 \}$
>>[!Proof]-
>>1. Es trivial ver que es compacto dado que si $\{ x_{n} \}$ esta acotado entonces $\sum^{\infty}_{n=1}|x_{n}|^{2}\leq M$ por lo tanto $|x_{n}|\leq M\quad\forall n\in \mathbb{N}$ por lo tanto $|S(x_{n})|\leq \frac{M}{n-1}$ para cada $n\in \mathbb{N}$ que tiende a $0$  
>>2. Sea $\lambda \in \sigma_{p}(S)$ de autovector $x\neq 0$ entonces $$\left( 0,x_{1}, \frac{x_{2}}{2},\ldots \right)=S(x_{1},\ldots)=\lambda (x_{1},\ldots)=\left(\lambda x_{1}, \lambda x_{2},\ldots \right)$$  
>>3. Supongamos $\lambda\neq 0$ entonces $x_{1}=0$ entonces $x_{2}=0$ etc que es absurdo
>>4. Entonces $\lambda=0$ pero entonces $x_{1}=0$ etc entonces $x=0$ absurdo    
>>5. Mostrando que $\sigma_{p}(S)=\emptyset$ 
>>6. Mas adelante es trivial mostrar que $\sigma(S)=\{ 0 \}$ porque vamos a mostrar que para los operadores compactos el espectro es exactamente los auto valores

>[!Remark]
>Ahora consideramos el caso $\lambda\neq0$ primero introduzcamos algunos resultados

^063913

>[!Theorem]
>$T$ compacto. Si $\lambda \neq 0$ entonces $\text{Ker}(T - \lambda I)$ tiene dimensión finita.
>>[!Proof]-
>>1. Supongamos que $M = \text{Ker}(T - \lambda I)$ es infinito-dimensional. 
>>2. Dado que el núcleo de un operador acotado es cerrado [[Teórico 5#^e19482]] entonces el espacio $M$ es Hilbert (infinito-dimensional)
>>3. Luego existe una sucesión ortonormal $\{e_n\}$ en $M$ por [[Teórico 3#^252a33]] 
>>4. Como $e_n \in \text{Ker}(T - \lambda I)$ tenemos $T e_n = \lambda e_n$ para cada $n \in \mathbb{N}$, y dado que $\lambda \neq 0$, la sucesión $\{\lambda e_n\}$ no puede tener una subsecuencia convergente, ya que $\{e_n\}$ es ortonormal entonces $$\lVert e_{m}-e_{n} \rVert ^{2}=(e_{m}-e_{n},e_{m}-e_{n})=\lVert e_{m} \rVert ^{2}+\lVert e_{n} \rVert ^{2} =2$$
>>5. Esto contradice la compacidad de $T$, lo que prueba el teorema.

^014228

>[!Theorem] MEMO
>$T$ compacto. Si $\lambda \neq 0$ entonces $\text{Im}(T - \lambda I)$ es cerrado.
>>[!Proof]-
>>1. Sea $\{y_n\}$ una sucesión en $\text{Im}(T - \lambda I)$, con $\lim_{n \to \infty} y_n = y$. 
>>2. Entonces para cada $n$ tenemos $y_n = (T - \lambda I) x_n$, para algún $x_n$, y dado que $\text{Ker}(T - \lambda I)$ es cerrado, $x_n$ tiene una descomposición ortogonal de la forma $x_n = u_n + v_n$, con $u_n \in \text{Ker}(T - \lambda I)$ y $v_n \in \text{Ker}(T - \lambda I)^\perp$. 
>>3. Supongamos que $\{ v_{n} \}$ no es acotado. Luego, después de tomar una subsecuencia si es necesario, podemos suponer que $\|v_n\| \neq 0$, para todo $n$, y $\lim_{n \to \infty} \|v_n\| = \infty$. 
>>4. Colocando $w_n = v_n / \|v_n\|$, tenemos que $w_n \in \text{Ker}(T - \lambda I)^\perp$, $\|w_n\| = 1$ (así que la sucesión $\{w_n\}$ está acotada) y 
>>$$(T - \lambda I) w_n =\frac{1}{\lVert v_{n} \rVert }(T-\lambda I)(x_{n}-u_{n})= \frac{y_n}{\|v_n\|}\rightarrow 0$$ esto es por que $y_{n}$ converge pero $\lVert v_{n} \rVert$ tiende a infinito  
>>5. Por la compacidad de $T$, podemos suponer que $\{T w_n\}$ converge (después de tomar una subsecuencia si es necesario). 
>>6. Al combinar estos resultados, se deduce que la sucesión $\{w_n\}$ converge (ya que $\lambda \neq 0$). 
>>7. Sea $w = \lim_{n \to \infty} w_n$ entonces $\|w\| = 1$ y
>>$$(T - \lambda I) w = \lim_{n \to \infty} (T - \lambda I) w_n = 0$$
>>por lo que $w \in \text{Ker}(T - \lambda I)$. 
>>8. Sin embargo, $w_n \in \text{Ker}(T - \lambda I)^{\perp}$, por lo tanto $\|w - w_n\|^2 = \|w \|^2 + \| w_n\|^2 = 1 + 1 = 2$. Lo que contradice que $w_n \to w$. (O mas facil por que $Ker(T-\lambda I)^{\perp}$ es cerrado)  
>>9. Por lo tanto, la sucesión $\{v_n\}$ está acotada. 
>>10. Ahora, por la compacidad de $T$, podemos suponer que $\{Tv_n\}$ converge. 
>>11. Luego, $$v_n = \lambda^{-1}(T v_n - (T - \lambda I) v_n) =\lambda^{-1}\big(T v_n - (T - \lambda I) (x_n-u_{n})\big)= \lambda^{-1}(T v_n - y_n)$$para $n \in \mathbb{N}$, por lo que la sucesión $\{v_n\}$ converge (por que $y_{n}$ y $Tv_{n}$ convergen). Sea su límite $v$. 
>>12. Luego $y = \lim_{n \to \infty} y_n = \lim_{n \to \infty} (T - \lambda I) v_n = (T - \lambda I) v$
>>13. entonces $y \in \text{Im}(T - \lambda I)$. Esto prueba que $\text{Im}(T - \lambda I)$ es cerrado

^3b2c2f

>[!Remark]
>Como $T^*$ también es compacto, los Teoremas 7 y 8 también se aplican a $T^*$, y en particular, el conjunto $\text{Im}(T^* - \lambda I)$ es cerrado cuando $\lambda \neq 0$. Por lo tanto en compactos tenemos un resultado similar a [[Teórico 14#^592165]]

>[!Corollary]
>Si $\lambda \neq 0$ entonces
>$$\text{Im}(T - \lambda I) = \text{Ker}(T^* - \overline{\lambda}  I)^\perp, \quad \text{Im}(T^* - \overline{\lambda}  I) = \text{Ker}(T - \lambda I)^\perp.$$
>>[!Proof]-
>>14. $Im(T-\lambda I)=\overline{Im(T-\lambda I)}=Im(T-\lambda I)^{\perp\perp}=ker(T^{*}-\overline{\lambda} I)^{\perp}$ Y el otro igual permutando $T$ por $T^{*}$ 

^937fe3

>[!Remark]
>Ahora podemos comenzar a discutir la estructura de la parte no nula de $\sigma(T)$ y $\sigma(T^*)$ (de nuevo, los siguientes resultados se aplican a $T^*$ tanto como a $T$).

^5b16e9

>[!Theorem] MEMO
>Para cualquier real $t > 0$, el conjunto de todos los autovalores distintos de $T$ con $|\lambda| \geq t$ es finito.
>>[!Proof]-
>>1. Supongamos en cambio que para algún $t_0 > 0$ existe una sucesión de autovalores distintos $\{\lambda_n\}$ con $|\lambda_n| \geq t_0$ para todo $n$, y sea $\{e_n\}$ una sucesión de autovectores unitarios correspondientes. 
>>2. Ahora vamos a construir, inductivamente, una sucesión particular de vectores unitarios (ósea va a ser acotada)  $\{y_n\}$. Sea $y_1 = e_1$.
>>3. Ahora consideremos cualquier entero $k \geq 1$. Por el Lema 1.14, el conjunto $\{e_1, \dots, e_k\}$ es linealmente independiente, por lo que el conjunto $M_k = \text{Sp}\{e_1, \dots, e_k\}$ es de dimensión $k$ y es cerrado por dim finita. 
>>4. Cualquier $e \in M_k$ puede escribirse como $e = \alpha_1 e_1 + \dots + \alpha_k e_k$, y tenemos
>>$$(T - \lambda_k I) e = \alpha_1 (\lambda_1 - \lambda_k) e_1 + \dots + \alpha_k (\lambda_{k-1} - \lambda_k) e_{k-1}$$Mostrando que si $e \in M_k$, entonces $(T - \lambda_k I) e \in M_{k-1}$
>>5. De forma similar, si $e \in M_k$, entonces $T e \in M_k$.
>>6. A continuación, $M_k$ es un subespacio cerrado de $M_{k+1}$ y no igual a $M_{k+1}$, por lo que el complemento ortogonal de $M_k$ en $M_{k+1}$ es un subespacio lineal no trivial de $M_{k+1}$. 
>>7. Por lo tanto, existe un vector unitario $y_{k+1} \in M_{k+1}$ tal que $(y_{k+1}, e) = 0$ para todo $e \in M_k$ y $\|y_{k+1} - e\|^{2}= \lVert y_{k+1} \rVert^{2}+\lVert e \rVert^{2}\geq 1$ (esto último por que $y_{k+1}$ es unitario) 
>>8. Repitiendo este proceso inductivamente, construimos una sucesión $\{y_n\}$.
>>9. Ahora, por la construcción de la sucesión $\{y_n\}$, para cualquier $m, n$ con $n > m$, tenemos
>>$$\|T y_n - T y_m\| = |\lambda_n| \|y_n - \lambda_n^{-1} [(T - \lambda_n I) y_n + T y_m]\| \geq |\lambda_n| \geq t_0$$ 
>>Dado que por 4. $(T - \lambda_n I) y_n \in M_{n-1}$. Y por 5. $Ty_{m}\in M_{m}\subseteq M_{n-1}$ por qué $n-1\geq m$ entonces por 7. la norma es mayor que $1 .|\lambda_{n}|$   
>>10. Esto muestra que la sucesión $\{T y_n\}$ no puede tener una subsecuencia convergente. 
>>11. Esto contradice la compacidad de $T$ (notar que $\{ y_{n} \}$ es unitaria ósea acotada) lo que prueba el teorema. 
>
>>[!idea]-
>> 1. Suponemos que existe $t_0>0$ y una sucesión de autovalores distintos $\{\lambda_n\}$ con $|\lambda_n|\ge t_0$ y autovectores unitarios $\{e_n\}$.
>> 2. Construimos inductivamente una sucesión unitaria $\{y_n\}$ tomando $y_1=e_1$ y luego eligiendo $y_{k+1}\in M_{k+1}$ ortogonal a $M_k$, donde $M_k=\mathrm{Sp}\{e_1,\dots,e_k\}$.
>> 3. Se muestra que $(T-\lambda_k I)e\in M_{k-1}$ y $Te\in M_k$ para cualquier $e\in M_k$, lo cual preserva la estructura en bloques.
>> 4. La ortogonalidad garantiza $\|y_{k+1}-e\|\ge 1$ para todo $e\in M_k$, asegurando separación fuerte entre los $y_n$.
>> 5. Entonces si $n>m$ considerando $(T-\lambda_n I)y_n, Ty_m\in M_{n-1}$, se obtiene (intercalando $\lambda_{n}y_{n}$) $$\|T y_n - T y_m\| = |\lambda_n| \|y_n - \lambda_n^{-1} [(T - \lambda_n I) y_n + T y_m]\| \geq |\lambda_n| \geq t_0$$
>> 6. Así $\{Ty_n\}$ no tiene subsucesión convergente, contradiciendo la compacidad de $T$.

^301f9e

>[!Corollary] MEMO
>El conjunto $\sigma_p(T)$ es a lo sumo numerablemente infinito. Si $\{\lambda_n\}$ es cualquier sucesión de autovalores distintos de $T$ entonces $\lim_{n \to \infty} \lambda_n = 0$.
>>[!Proof]-
>>1. Escribimos $$\sigma_{p}(T)=\bigcup_{r\in \mathbb{N} }\left\{  \lambda\in \sigma_{p}(T):\lvert \lambda \rvert\geq \frac{1}{r}  \right\}$$ que es union numerable de conjuntos finitos por [[Teórico 18#^301f9e]]
>>2. Si son distintos tienden a 0 se deduce tambien de [[Teórico 18#^301f9e]] si no fueran a 0 entonces tengo numerables autovalores distintos todos mayores que algun numero mayor que 0, lo que es absurdo. Entonces necesariamente tienden a 0 si son distintos y son una sucesion (osea numerables) 

^64b388

 
>[!Remark]
>Notamos que es posible para un operador compacto $T$ en un espacio de dimensión infinita no tener autovalores en absoluto, ver el Ejercicio 7.17. En ese caso, por el [[Teórico 18#^5d2cfe]] y el [[Teórico 18#^3f6266]] podemos concluir más abajo, $\sigma(T) = \{0\}$.

>[!Remark]
>Ahora vamos a mostrar que para cualquier operador compacto $T$, todos los puntos no nulos de $\sigma(T)$ deben ser autovalores. Dado que $T^*$ también es compacto, se sigue de esto y del Lema 6.37 que si $\lambda \neq 0$ es un autovalor de $T$, entonces $\bar{\lambda}$ es un autovalor de $T^*$. También demostraremos que estos autovalores tienen igual multiplicidad finita. Estos resultados son estándar en el caso finito-dimensional. Los demostraremos en el caso infinito-dimensional en dos pasos:
>- (a) consideramos operadores de rango finito y reducimos el problema al caso finito-dimensional
>- (b) consideramos operadores compactos generales y reducimos el problema al caso de rango finito.

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

^4bf96d

>[!Remark] Notacion
>Denotamos $n(A)$ a $\dim(\ker(A))$  

>[!Lemma] MEMO
>Si $T\in K(\mathcal{H})$ tiene rango finito y $\lambda \neq 0$, entonces, o bien: (a) $\lambda \in \rho(T)$ y $\bar{\lambda} \in \rho(T^*)$; o (b) $\lambda \in \sigma_p(T)$ y $\bar{\lambda} \in \sigma_p(T^*)$. Además, $n(T - \lambda I) = n(T^* - \lambda I) < \infty$.
>>[!Proof]-
>>1. Sea $M = \text{Im} T$ y $N = \text{Ker} T^* = M^\perp$ (por la misma propiedad de siempre). 
>>2. Dado que $M$ es finito-dimensional es cerrado, así que cualquier $x \in \mathcal{H}$ tiene una descomposición ortogonal $x = u + v$, con $u \in M$, $v \in N$. 
>>3. Usando esta descomposición, podemos identificar cualquier $x \in \mathcal{H}$ con un único elemento $(u, v) \in M \times N$, y viceversa (alternativamente, esto demuestra que el espacio $\mathcal{H}$ es isométricamente isomorfo al espacio $M \times N$). 
>>4. Además $(T - \lambda I)(u + v) = T u - \lambda u + T v - \lambda v$ y tenemos que $T u - \lambda u \in Im(T)=M$, $T v \in M$ y $-\lambda v \in N$. 
>>5. Se sigue de esto que podemos expresar la acción del operador $(T - \lambda I)$ en forma de matriz como
>>$$(T - \lambda I) \begin{bmatrix} u \\ v \end{bmatrix} = \begin{bmatrix} (T - \lambda I)|_M & T|_N \\ 0 & -\lambda I|_N \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$$con $(T - \lambda I)|_M \in B(M)$, $T|_N \in B(N, M)$ y $I|_N \in B(N)$. 
>>6. Definimos $A = (T - \lambda I)|_M$. Entonces o $A$ es invertible o $n(A)>0$. Si $A$ no es invertible entonces no es inyectiva (ni sobre por que $A:M\rightarrow M$ osea es un operador finito por que $T$ es rango finito) mostrando $n(A) > 0$ y si $n(A)=0$ entonces $A$ invertible (devuelta por ser operador finito)  
>>7. Entonces [[Teórico 18#^4bf96d]] o bien $T - \lambda I$ es invertible o (no lo es entonces tampoco lo es $A$) $n(T - \lambda I) = n(A) > 0$, es decir, $\lambda \in \sigma_p(T)$.
>>8. Ahora sea $P_M$, $P_N$ los proyectores ortogonales de $\mathcal{H}$ sobre $M, N$. 
>>9. Usando $I = P_M + P_N$ y recordamos $N = \text{Ker } T^*$, tenemos que
>>$$(T^* - \overline{\lambda}  I)(u + v) = (T^* - \overline{\lambda}  I) u -\overline{\lambda}  v= I(T^{*} -\overline{\lambda} I)u-\overline{\lambda} v=P_M(T^* - \overline{\lambda}  I) u + P_N T^* u - \overline{\lambda}  v$$
>>10. Por lo tanto, $T^* - \lambda I$ puede representarse en forma de matriz por
>>$$(T^* - \overline{\lambda}  I) \begin{bmatrix} u \\ v \end{bmatrix} = \begin{bmatrix} P_M(T^* - \overline{\lambda}  I)|_M & 0 \\ P_N(T^*)|_M & -\overline{\lambda} I|_{N} \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$$
>>11. Se puede probar que $A^{*}=P_{M}(T^{*}-\overline{\lambda}I|_{M})$, y aca vale lo mismo o $A^{*}$ es invertible o $n(A^{*})>0$ devuelta por dimension finita y usando el teorema de antes de nuevo llegamos a que o bien $T^{*}-\overline{\lambda} I$ es inversible o bien $n(T^{*}-\overline{\lambda}I)=n(A^{*})>0$
>>12. De nuevo por álgebra lineal finita, $n(A^*) = n(A)$ (osea en dimension finita $n(T)=n(T^{*})$) 
>>13. Se sigue de esto que si $n(A) = 0$, entonces $T - \lambda I$ invertible y ademas $n(A^{*})=0$ entonces $T^* - \overline{\lambda} I$ son invertibles, mientras que si $n(A) > 0$ entonces $n(T^* - \overline{\lambda} I)=n(T - \lambda I)  = n(A) > 0$
>>14. Entonces $\lambda \in \sigma_p(T)$ y $\bar{\lambda} \in \sigma_p(T^*)$.
>
>>[!idea]-
>> 1. Sea $M=\mathrm{Im}\,T$ y $N=\ker T^*=M^\perp$. Como $M$ es finito-dimensional es cerrado y todo $x$ se descompone como $x=u+v$ con $u\in M$, $v\in N$.
>> 2. Entonces: $$(T - \lambda I) \begin{bmatrix} u \\ v \end{bmatrix} = \begin{bmatrix} A & T|_N \\ 0 & -\lambda I|_N \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$$ donde $A=(T-\lambda I)|_M$.
>> 3. Como $A:M\to M$ es finito-dimensional: o $A$ es invertible o $n(A)>0$. En finito dimensión, $A$ no invertible $\iff$ no inyectiva.
>> 4. Si $A$ es invertible, usando la matriz triangular se ve que $T-\lambda I$ es invertible.
>> 5. Si $n(A)>0$, entonces $n(T-\lambda I)=n(A)>0$, lo cual significa $\lambda\in\sigma_p(T)$.
>> 6. Para el adjunto, escribimos $(T^*-\bar\lambda I)(u+v)=P_M(T^*-\bar\lambda I)u+P_NT^*u-\bar\lambda v$ usando $I=P_{M}+P_{N}$ y obtenemos $$(T^{*}  - \overline \lambda I) \begin{bmatrix} u \\ v \end{bmatrix} =\begin{bmatrix} B & 0 \\ P_NT^* & -\bar\lambda I|_N \end{bmatrix}\begin{bmatrix} u \\ v \end{bmatrix}$$
>> 7. Con $B=P_{M}(T^{*}-\overline{\lambda}I)|_{M}$ La misma dicotomía de 5. vale para $B$. 
>> 8. Ademas $B=A^{*}$ asi que por dim finita $n(B)=n(A)$ se termina haciendo lo mismo que en 4.

^eeeb64

>[!Remark]
>Ahora extendemos los resultados del Lema 7.24 al caso de un operador compacto general $T$.

>[!Remark] Resultado de inversibilidad de un producto
>$S,A\in B(X)$. $A$ inversible, definimos $T=SA$  entonces
>- (a) $T$ inversible $\iff$ $S$ inversible
>- (b) $n(T)=n(S)$ 
>Vale lo mismo si $T=AS$ 
>>[!Proof]-
>>- (a) 
>>	1. Si $S$ inversa entonces $T(A^{-1}S^{-1})=SA(A^{-1}S^{-1})=Id$ entonces encontre inversa de $T$ (obviamente anda por el otro lado tambien)
>>- (b) 
>>	1. $x\in Ker(T)\iff Ax\in Ker(S)$ el libro dice que se concluye con $A$ inversible

^19d507

>[!Theorem] MEMO
>Si $T$ es compacto y $\lambda \neq 0$, entonces, o bien: (a) $\lambda \in \rho(T)$ y $\bar{\lambda} \in \rho(T^*)$; o (b) $\lambda \in \sigma_p(T)$ y $\bar{\lambda} \in \sigma_p(T^*)$. Además, $n(T - \lambda I) = n(T^* - \lambda I) < \infty$.
>>[!Proof]-
>>1. Primero reducimos el problema al caso de un operador de rango finito. 
>>2. Por [[Teórico 17#^b132a8]], hay un operador de rango finito $T_F$ en $H$ con $\| \lambda^{-1}(T - T_F) \| < \frac{1}{2}$ entonces por [[Teórico 6#^aa4e9d]]  $S = I - \lambda^{-1} (T - T_F)$ es inversible
>>3. Ademas por [[Teórico 15#^b9f186]] $S^*$ es invertibles. 
>>4. Ahora, denotemos $G = T_F S^{-1}$, vemos que
>>$$T - \lambda I = (G - \lambda I) S, \quad \text{y por lo tanto} \quad T^* - \overline{\lambda}  I = S^* (G^* - \overline{\lambda}  I)$$
>>5. Dado que $S$ y $S^*$ son invertibles, se sigue que $$T - \lambda I \quad\land\quad T^* - \lambda I \quad\text{son invertibles} \iff  G - \lambda I \quad \land\quad G^* - \lambda I \quad \text{son invertibles}$$y que $n(T - \lambda I) = n(G - \lambda I)$ y $n(T^{*}-\overline{\lambda}I)=n(G^{*}-\overline{\lambda}I)$ por [[Teórico 18#^19d507]]
>>6. Ahora, como $\text{Im} G \subset \text{Im} T_F$ el operador $G$ tiene rango finito, los primeros resultados del teorema siguen de [[Teórico 18#^eeeb64]]
>>7. Ósea o $G$ cumple $\lambda\in \sigma_{p}(G)$ (ósea $G-\lambda I$ es no inversible $\iff$  $T-\lambda I$ no es invertible $\iff$ $\lambda\in \sigma_{p}(T)$  ) o $G$ cumple que $\lambda\in \rho(G)$ ósea ($G-\lambda I$ es inversible $\iff$  $T-\lambda I$ es invertible $\iff$ $\lambda\in \rho(T)$  ) análogo $T^{*}$ 
>>
>
>>[!idea]-
>> 1. Se reduce el problema al caso de rango finito: por aproximación compacta existe $T_F$ de rango finito con $\|\lambda^{-1}(T-T_F)\|<1/2$.
>> 2. Entonces $S=I-\lambda^{-1}(T-T_F)$ es invertible y también lo es $S^*$.
>> 3. Definimos $G=T_F S^{-1}$ y se obtiene $T-\lambda I=(G-\lambda I)S$ y $T^*-\bar\lambda I=S^*(G^*-\bar\lambda I)$.
>> 4. Como $S$ y $S^*$ son invertibles, la invertibilidad y la nulidad de $T-\lambda I$ y $T^*-\bar\lambda I$ coinciden exactamente con las de $G-\lambda I$ y $G^*-\bar\lambda I$.
>> 5. El operador $G$ tiene rango finito porque $\mathrm{Im}\,G\subseteq\mathrm{Im}\,T_F$.
>> 6. Aplicamos entonces el caso de rango finito: o bien $G-\lambda I$ es invertible (lo mismo para $T-\lambda I$) o bien $n(G-\lambda I)>0$ (y lo mismo para $T-\lambda I$), lo cual significa $\lambda\in\sigma_p(G)$ y por lo tanto $\lambda\in\sigma_p(T)$.
>> 7. El mismo análisis vale para $G^*$ y $T^*$, de modo que simultáneamente $\bar\lambda\in\rho(T^*)$ o $\bar\lambda\in\sigma_p(T^*)$, y las nulidades coinciden y son finitas.


^3f6266

