ej 17 debe decir ej 19 pr5

en el ej 19 hay que usar el ultimo resultado que dio edison que no se demostro

>[!Theorem]  
>Sea $M\subseteq \mathbb R^{n+1}$ una subvariedad regular de dimensión $n$. Entonces $M$ es orientable si y solo si existe un campo normal suave $\xi:M\to\mathbb R^{n+1}$ tal que $\xi_p\neq 0$ y $\xi_p\perp d\iota (T_pM)$ para todo $p\in M$.
>>[!Proof]-
>>- $(\Rightarrow)$ 
>>	1. Supongamos que $M$ es orientable. Tomamos un atlas orientado $\mathcal A$ de $M$. Queremos construir un campo normal suave $\xi:M\to\mathbb R^{n+1}$ tal que $\xi_p\neq 0$ y $\xi_p\perp d\iota_p(T_pM)$ para todo $p\in M$.
>>	2. Sea $(U,\varphi=(x_1,\ldots,x_n))\in\mathcal A$ una carta orientada con $U$ conexo. Por la forma local de las inmersiones, alrededor de cada punto podemos tomar una carta $(V,\psi=(y_1,\ldots,y_{n+1}))$ de $\mathbb R^{n+1}$ tal que $\iota(U)\subseteq V$ y $\psi\circ\iota\circ\varphi^{-1}(t_1,\ldots,t_n)=(t_1,\ldots,t_n,0)$.
>>	3. Entonces, para todo $p\in U$, se cumple $$d\iota_p(\frac{\partial}{\partial x_i}|_p)=\frac{\partial}{\partial y_i}|_{\iota(p)}$$ para $i=1,\ldots,n$. Por lo tanto $$d\iota_p(T_pM)=\operatorname{span}\left\{\frac{\partial}{\partial y_1}\bigg|_{\iota(p)},\ldots,\frac{\partial}{\partial y_n}\bigg|_{\iota(p)}\right\}$$
>>	4. El vector $\frac{\partial}{\partial y_{n+1}}|_{\iota(p)}$ no tiene por qué ser ortogonal a $d\iota_p(T_pM)$ respecto del producto interno euclídeo. Aplicamos Gram-Schmidt a la familia $\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n},\frac{\partial}{\partial y_{n+1}}$ y tomamos el último vector normalizado. Obtenemos así un campo suave unitario $X^U:U\to\mathbb R^{n+1}$ tal que $X^U_p\perp d\iota_p(T_pM)$ para todo $p\in U$.
>>	5. Además elegimos el signo de $X^U$ de modo que $$\det(d\iota_p(\frac{\partial}{\partial x_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial x_n}|_p),X^U_p)>0$$ para todo $p\in U$. Esto se puede hacer porque cambiar $X^U$ por $-X^U$ cambia el signo del determinante, y como el determinante es una función suave no nula en $U$, su signo es constante.
>>	6. Ahora probamos que estos campos locales coinciden en las intersecciones. Sean $(U,\varphi=(x_1,\ldots,x_n))$ y $(W,\theta=(z_1,\ldots,z_n))$ dos cartas orientadas, y sean $X^U$ y $X^W$ los campos normales locales construidos. 
>>	7. Fijado $p\in U\cap W$, ambos vectores $X^U_p$ y $X^W_p$ son normales unitarios a $d\iota_p(T_pM)$. Como $(d\iota_p(T_pM))^\perp$ tiene dimensión $1$, se tiene $X^W_p=X^U_p$ o $X^W_p=-X^U_p$.
>>	8. Como las dos cartas son orientadas, la matriz de cambio de base entre $(\frac{\partial}{\partial x_1}|_p,\ldots,\frac{\partial}{\partial x_n}|_p)$ y $(\frac{\partial}{\partial z_1}|_p,\ldots,\frac{\partial}{\partial z_n}|_p)$ tiene determinante positivo. Al aplicar $d\iota_p$, la matriz de cambio entre $(d\iota_p(\frac{\partial}{\partial x_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial x_n}|_p))$ y $(d\iota_p(\frac{\partial}{\partial z_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial z_n}|_p))$ es la misma, luego también tiene determinante positivo.
>>	9. Por el paso 5. se tiene $\det(d\iota_p(\frac{\partial}{\partial x_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial x_n}|_p),X^U_p)>0$ y $\det(d\iota_p(\frac{\partial}{\partial z_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial z_n}|_p),X^W_p)>0$.
>>	10. Si fuera $X^W_p=-X^U_p$, entonces al cambiar de la base tangente $x$ a la base tangente $z$ el determinante se multiplicaría por un número positivo, pero al cambiar el normal $X^U_p$ por $-X^U_p$ se multiplicaría por $-1$. Por lo tanto el segundo determinante tendría signo negativo, contradiciendo el paso 8.
>>	11. Luego $X^W_p=X^U_p$ para todo $p\in U\cap W$. Por lo tanto los campos normales locales coinciden en las intersecciones.
>>	12. Como los campos $X^U$ coinciden en las intersecciones, pegan y definen un campo global suave $\xi:M\to\mathbb R^{n+1}$ dado por $\xi|_U=X^U$ para cada carta orientada $(U,\varphi)\in\mathcal A$.
>>	13. Por construcción, $\xi_p\neq 0$ y $\xi_p\perp d\iota_p(T_pM)$ para todo $p\in M$. Esto prueba la ida.
>>- $(\Leftarrow)$ 
>>	1. Supongamos que existe un campo normal suave $\xi:M\to\mathbb R^{n+1}$ tal que $\xi_p\neq 0$ y $\xi_p\perp d\iota_p(T_pM)$ para todo $p\in M$. 
>>	2. Para cada $p\in M$, declaramos que una base $(v_1,\ldots,v_n)$ de $T_pM$ es positiva si $\det(d\iota_p(v_1),\ldots,d\iota_p(v_n),\xi_p)>0$.
>>	3. Esta definición tiene sentido porque el determinante nunca es cero. En efecto, si $\xi_p\in\operatorname{span}(d\iota_p(v_1),\ldots,d\iota_p(v_n))$, entonces como $\xi_p$ es ortogonal a cada $d\iota_p(v_i)$, también sería ortogonal a sí mismo. Luego $\langle \xi_p,\xi_p\rangle=0$, contradiciendo $\xi_p\neq 0$. Por lo tanto $(d\iota_p(v_1),\ldots,d\iota_p(v_n),\xi_p)$ es una base de $\mathbb R^{n+1}$.
>>	4. Ahora construimos cartas compatibles con esta orientación puntual. Sea $(U,\varphi=(x^1,\ldots,x^n))$ una carta de $M$ y definimos $g:U\to\mathbb R$ por $$g(q)=\det(d\iota_q(\frac{\partial}{\partial x^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial x^n}|_q),\xi_q)$$la función $g$ es suave y nunca se anula.
>>	5. Dado $p\in U$, existe un abierto $V\subseteq U$ con $p\in V$ tal que $g$ tiene signo constante en $V$. Si $g>0$ en $V$, tomamos la carta $(V,\varphi|_V)$. Si $g<0$ en $V$, tomamos la carta $(V,T\circ\varphi|_V)$, donde $T(x^1,\ldots,x^n)=(-x^1,x^2,\ldots,x^n)$. En ambos casos, la base coordenada de la carta corregida es positiva (cuando la miramos en $\mathbb{R}^{n+1}$ usando la inclusion)  en todo punto de $V$.
>>	6. Haciendo esto alrededor de cada $p\in M$, obtenemos un atlas que cubre $M$. Falta probar que sus cambios de coordenadas tienen determinante positivo.
>>	7. Sean $(V,x=(x^1,\ldots,x^n))$ y $(W,y=(y^1,\ldots,y^n))$ dos cartas en el atlas (osea corregidas) con $V\cap W\neq\varnothing$, y sea $q\in V\cap W$. 
>>	8. Por construcción, $\det(d\iota_q(\frac{\partial}{\partial x^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial x^n}|_q),\xi_q)>0$ y $\det(d\iota_q(\frac{\partial}{\partial y^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial y^n}|_q),\xi_q)>0$.  
>>	9. Sea $A=(a_{ij})$ la matriz de cambio de base entre las bases coordenadas de las cartas, dada por $$\frac{\partial}{\partial y^j}|_q=\sum_i a_{ij}\frac{\partial}{\partial x^i}|_q$$entonces, aplicando $d\iota_q$, obtenemos $$d\iota_q(\frac{\partial}{\partial y^j}|_q)=\sum_i a_{ij}d\iota_q(\frac{\partial}{\partial x^i}|_q)$$
>>	10. Por lo tanto, la matriz de cambio de base en $\mathbb R^{n+1}$ desde $(d\iota_q(\frac{\partial}{\partial x^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial x^n}|_q),\xi_q)$ hacia $(d\iota_q(\frac{\partial}{\partial y^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial y^n}|_q),\xi_q)$ es $\begin{pmatrix}A&0\\0&1\end{pmatrix}$. Y como estas bases son positivos por construccion, se sigue que $\det A>0$.  
>>	11. Luego todo cambio de coordenadas entre cartas corregidas tiene determinante positivo. 
>>	12. Por lo tanto, las cartas corregidas forman un atlas orientado de $M$, y concluimos que $M$ es orientable.

>[!Exercise]
>Sea $U$ un abierto en $\mathbb{R}^n$ y sea 0 un valor regular de la función suave $f:U\to\mathbb{R}$. Probar que la subvariedad $f^{-1}(\{0\})$ es orientable.
>>[!Proof]-
>>1. Como 0 es valor regular de $f$, $M=f^{-1}(\{0\})$ es subvariedad embebida de codimensión $n-1$ 
>>2. Identificamos $T_pM$ con su imagen $di_p(T_pM)=\ker(df_p)\subset T_p\mathbb{R}^n$. La base coordenada de una carta $\varphi=(x^i)$ da, vía $di_p$, vectores concretos $\partial/\partial x^i$ dentro del espacio ambiente que forman base de $di_p(T_pM)$. 
>>3. Tomamos exactamente esa base dada por la carta: $$B=\{di_p(\partial/\partial x^1),\dots,di_p(\partial/\partial x^{n-1})\}$$elegimos $v$ con $df_p(v)>0$ (Sabemos que el $\ker(df_{p})$ tiene la misma dimension que la superficie implicita que es $n-1$ por teorema superficie implicita entonces queremos completar a una base con lo cual agarramos algo que no este en el kernel, puede ser positivo o negativo, pero distinto de $0$ elegimos positivo) y formamos la base completada $\{B,v\}$ en $T_p\mathbb{R}^n$. 
>>4. Si su determinante ambiente es negativo, reemplazamos el primer vector por su negativo (equivalente a cambiar $x^1$ por $-x^1$ en la carta). La base ajustada $B'$ satisface ahora $\det(B',v)>0$ para todo $v$ con $df_p(v)>0$. Esta es la base orientada de la superficie dada por la carta corregida. 
>>5. Aplicamos el proceso del paso 2 a la base coordenada de cada carta de un atlas cualquiera de $M$. Obtenemos un atlas en el que toda base coordenada (después de posible flip del primer vector) es positiva según el criterio (mirada en el ambiente) 
>>6. Si tomamos $(U,\varphi)$ y $(V,\psi)$ cartas que se intersecan, queremos ver que sean compatibles, que tengan la misma orientacion. 
>>7. Ahora si usamos la inclusion y armamos las bases como en 2. sabemos que estas bases que armamos tienen la misma orientacion entonces su determinante de cambio de base es positivo. Pero ese determinante de cambio de base tiene el mismo signo que determinante de cambio de base de las cartas, recordamos esto sale por $$\frac{\partial}{\partial y_j}\big|_p=\sum_{i=1}^n\frac{\partial x_i}{\partial y_j}(p)\frac{\partial}{\partial x_i}\big|_p$$ y luego aplicando $d\iota$ de ambos lados tendriamos las coordenadas de esos vectores y el ultimo vector de la base es $v$ on un multiplo osea que la ultima fila aparece un $c>0$.
>>8. El atlas ajustado es orientado. Por definición $M$ es orientable.

>[!Exercise]
>Let $M$ be a smooth manifold. Prove that $TM$ is orientable.
>>[!Proof]-
>>9. Sea $M$ una variedad suave de dimensión $n$. Para cada carta $(U,\varphi)$ de $M$, con $\varphi=(x_1,\ldots,x_n)$, consideramos la carta inducida en $TM$ dada por $\widetilde\varphi:\pi^{-1}(U)\to \varphi(U)\times\mathbb R^n$, donde si $v\in T_pM$ y $$v=\sum_{i=1}^n v_i\frac{\partial}{\partial x_i}\big|_p$$entonces $$\widetilde\varphi(p,v)=(x_1(p),\ldots,x_n(p),v_1,\ldots,v_n)$$
>>10. Queremos probar que el atlas inducido $$\mathcal A_{TM}=\{(\pi^{-1}(U),\widetilde\varphi):(U,\varphi)\text{ carta de }M\}$$ es un atlas orientado de $TM$. Para eso alcanza probar que todo cambio de coordenadas entre cartas inducidas tiene determinante positivo.
>>11. Sean $(U,\varphi)$ y $(V,\psi)$ dos cartas de $M$, con $\psi=(y_1,\ldots,y_n)$, y sea $(p,v)\in\pi^{-1}(U\cap V)$. Escribimos el cambio de coordenadas de la base como $y=\psi\circ\varphi^{-1}(x)$ y ponemos $A=\left(\frac{\partial y_k}{\partial x_i}\right)$.
>>12. Si $v=\sum_i v_i\frac{\partial}{\partial x_i}\big|_p=\sum_k w_k\frac{\partial}{\partial y_k}\big|_p$, entonces por la regla de cambio de coordenadas para vectores tangentes tenemos $$w_k=\sum_{i=1}^n\frac{\partial y_k}{\partial x_i}v_i$$por lo tanto, en las coordenadas inducidas de $TM$, el cambio de coordenadas tiene la forma $(x,v)\mapsto(y(x),w(x,v))$, con $w=A(x)v$.
>>13. Ahora miramos las bases coordenadas de $T_{(p,v)}TM$ asociadas a estas dos cartas inducidas: $\left(\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n},\frac{\partial}{\partial v_1},\ldots,\frac{\partial}{\partial v_n}\right)$ y $\left(\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n},\frac{\partial}{\partial w_1},\ldots,\frac{\partial}{\partial w_n}\right)$.
>>14. Escribiendo los vectores de la primera base en la segunda base, obtenemos $$\frac{\partial}{\partial x_i}=\sum_{k=1}^n\frac{\partial y_k}{\partial x_i}\frac{\partial}{\partial y_k}+\sum_{k=1}^n\frac{\partial w_k}{\partial x_i}\frac{\partial}{\partial w_k}$$ y $$\frac{\partial}{\partial v_i}=\sum_{k=1}^n\frac{\partial y_k}{\partial v_i}\frac{\partial}{\partial y_k}+\sum_{k=1}^n\frac{\partial w_k}{\partial v_i}\frac{\partial}{\partial w_k}$$
>>15. Como $y_k$ no depende de las coordenadas $v_i$, se tiene $\frac{\partial y_k}{\partial v_i}=0$. Además, como $$w_k=\sum_j\frac{\partial y_k}{\partial x_j}v_j$$, se tiene $$\frac{\partial w_k}{\partial v_i}=\frac{\partial y_k}{\partial x_i}$$entonces $$\frac{\partial}{\partial v_i}=\sum_{k=1}^n\frac{\partial y_k}{\partial x_i}\frac{\partial}{\partial w_k}$$
>>16. Por lo tanto, la matriz del cambio de base entre estas dos bases coordenadas de $T_{(p,v)}TM$ tiene la forma por bloques $\begin{pmatrix}A&0\\ *&A\end{pmatrix}$, donde $A=\left(\frac{\partial y_k}{\partial x_i}\right)$ y el bloque $*$ contiene los términos $\frac{\partial w_k}{\partial x_i}$.
>>17. Como esta matriz es triangular por bloques, su determinante es $$\det\begin{pmatrix}A&0\\ *&A\end{pmatrix}=\det(A)\det(A)=(\det A)^2$$
>>18. Como $A$ es la matriz jacobiana de un cambio de coordenadas de $M$, se tiene $\det A\neq 0$. Por lo tanto $(\det A)^2>0$.
>>19. Así, todos los cambios de coordenadas entre cartas inducidas de $TM$ tienen determinante positivo. Entonces $\mathcal A_{TM}$ es un atlas orientado de $TM$.
>>20. En consecuencia, $TM$ es orientable. La orientación de $TM$ es la orientación determinada por las cartas inducidas $\widetilde\varphi$, no una orientación previamente dada en $M$.

>[!Exercise]
>Sea $M$ una variedad orientada y sea $(U,\varphi)$ una carta de $M$, con $U$ conexo. Probar que $(U,\varphi)$ está positivamente orientada en todo $U$ o negativamente orientada en todo $U$.
>>[!Proof]-
>>1. Sea $\omega\in\Omega^n(M)$ una forma positiva que representa la orientación de $M$. Que sabemos que existe y es suave y nunca nula porque $M$ es orientada.
>>2. Escribimos la carta como $\varphi=(x^1,\dots,x^n)$. Esta induce en cada $p\in U$ la base coordenada $\left(\left.\frac{\partial}{\partial x^1}\right|_p,\dots,\left.\frac{\partial}{\partial x^n}\right|_p\right)$ de $T_pM$.
>>3. Definimos la función $f:U\to\mathbb R$ por $$f(p)=\omega_p\left(\left.\frac{\partial}{\partial x^1}\right|_p,\dots,\left.\frac{\partial}{\partial x^n}\right|_p\right).$$
>>4. La carta $(U,\varphi)$ es positiva en $p$ si y solo si $f(p)>0$, mientras que es negativa en $p$ si y solo si $f(p)<0$.
>>5. Como $f$ es continua, nunca se anula y $U$ es conexo, $f$ tiene signo constante en $U$. Por lo tanto, ocurre exactamente una de las dos posibilidades: $$f>0\quad\text{en todo }U,$$ o bien $$f<0\quad\text{en todo }U.$$
>>6. En consecuencia, $(U,\varphi)$ está positivamente orientada en todo $U$ o negativamente orientada en todo $U$.

^44f51c

>[!Exercise]
>- (a) Let $M$ una variedad cubierta por dos sistemas coordenados $(U,\varphi)$ y $(V,\psi)$ where $U$ and $V$ are connected coordinate neighborhoods. Suppose that $U\cap V$ has two connected components $C_1$ and $C_2$, and suppose that the determinant of the change of basis from the coordinate basis of $U$ to the coordinate basis of $V$ is positive on $C_1$ and negative on $C_2$. Prove that $M$ is not orientable.
>- (b) Let $M=(\mathbb R\times(-1,1))/\sim$, where $(s,t)\sim(s+n,(-1)^nt)$ for every $n\in\mathbb Z$. Prove that $M$ is not orientable.
>>[!Proof]-
>>- (a)
>>	1. Supongamos, por contradicción, que $M$ es orientable. Entonces existe una forma de orientación $\omega\in\Omega^n(M)$, es decir, una $n$-forma suave que nunca se anula.
>>	2. Sean $B_x(p)=\left(\frac{\partial}{\partial x^1}\big|_p,\dots,\frac{\partial}{\partial x^n}\big|_p\right)$ y $B_y(p)=\left(\frac{\partial}{\partial y^1}\big|_p,\dots,\frac{\partial}{\partial y^n}\big|_p\right)$ las bases coordenadas asociadas a las cartas $(U,\varphi)$ y $(V,\psi)$.
>>	3. Para cada $p\in U\cap V$, sea $C(p)=\det A(p)$. Con $A(p)$ la matriz cambio de base entre $B_{x}$ y $B_{y}$ 
>>	4. Por multilinealidad alternada de $\omega_p$, se tiene $$\omega_p(B_x(p))=C(p)\omega_p(B_y(p))$$
>>	5. Como $\omega$ nunca se anula, las funciones $p\mapsto\omega_p(B_x(p))$ sobre $U$ y $p\mapsto\omega_p(B_y(p))$ sobre $V$ son continuas y nunca nulas.
>>	6. Como $U$ y $V$ son conexos, ambas funciones tienen signo constante.
>>	7. Por la igualdad $\omega_p(B_x(p))=C(p)\omega_p(B_y(p))$, el signo de $C(p)$ debe ser constante en $U\cap V$.
>>	8. Sin embargo, por hipótesis, $C(p)>0$ en una componente conexa de $U\cap V$ y $C(p)<0$ en otra componente conexa.
>>	9. Esto es una contradicción. Por lo tanto, $M$ no es orientable.
>>- (b)
>>	1. Let $\pi:\mathbb R\times(-1,1)\to M$ be the quotient map. We will use part (a), so we need two coordinate neighborhoods covering $M$ whose intersection has two connected components with transition determinant of opposite signs.
>>	2. Define $$A=\left(-\frac14,\frac34\right)\times(-1,1)\qquad \land \qquad B=\left(\frac14,\frac54\right)\times(-1,1)$$let $U=\pi(A)$ and $V=\pi(B)$.
>>	3. The maps $\pi|_A:A\to U$ and $\pi|_B:B\to V$ are bijective. Indeed, if two points of $A$ are equivalent, then their first coordinates differ by an integer. But the first coordinate interval $\left(-\frac14,\frac34\right)$ has length $1$, so two distinct equivalent representatives cannot both lie in $A$. The same argument applies to $B$.
>>	4. Therefore we get charts $\varphi:U\to A$ and $\psi:V\to B$ defined by $$\varphi=(\pi|_A)^{-1}\qquad \land \qquad \psi=(\pi|_B)^{-1}$$thus $\varphi(\pi(s,t))=(s,t)$ only when $(s,t)\in A$, and $\psi(\pi(s,t))=(s,t)$ only when $(s,t)\in B$.
>>	5. The sets $U$ and $V$ cover $M$. Indeed, every class $[(s,t)]\in M$ has a representative $(r,t')$ with $r\in[0,1)$. Since $[0,1)\subset\left(-\frac14,\frac34\right)\cup\left(\frac14,\frac54\right)$, this representative lies in $A\cup B$. Hence $M=U\cup V$.
>>	6. Now we study $U\cap V$. There are two connected components. The first one is $$C_1=\pi\left(\left(\frac14,\frac34\right)\times(-1,1)\right)$$on this component, the same representative lies in both $A$ and $B$.
>>	7. Therefore, if $(s,t)\in\left(\frac14,\frac34\right)\times(-1,1)$, then $\varphi(\pi(s,t))=(s,t)$ and $\psi(\pi(s,t))=(s,t)$. Hence $$\psi\circ\varphi^{-1}(s,t)=(s,t)$$
>>	8. Therefore the transition matrix on $C_1$ is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$, so $$\det D(\psi\circ\varphi^{-1})=1>0$$ on $C_1$.
>>	9. The second connected component is $C_2=\pi\left(\left(-\frac14,\frac14\right)\times(-1,1)\right)$. If $(s,t)\in\left(-\frac14,\frac14\right)\times(-1,1)$, then $(s,t)\in A$, but $(s,t)\notin B$.
>>	10. Since $(s,t)\sim(s+1,-t)$ and $s+1\in\left(\frac34,\frac54\right)\subset\left(\frac14,\frac54\right)$, the representative of the same class lying in $B$ is $(s+1,-t)$.
>>	11. Hence $\varphi(\pi(s,t))=(s,t)$, but $$\psi(\pi(s,t))=(s+1,-t)$$therefore, on $C_2$, we have $\psi\circ\varphi^{-1}(s,t)=(s+1,-t)$.
>>	12. Therefore the transition matrix on $C_2$ is $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, so $$\det D(\psi\circ\varphi^{-1})=-1<0$$ on $C_2$.
>>	13. Thus $M$ is covered by two connected coordinate neighborhoods $U$ and $V$, and $U\cap V$ has two connected components $C_1$ and $C_2$ such that the determinant of the change of coordinates is positive on $C_1$ and negative on $C_2$.
>>	14. By part (a), $M$ is not orientable.
>>- (b)
>>	1. Let $D=\mathbb R\times(-1,1)$ and let $\pi:D\to M$ be the quotient projection. We argue by contradiction. Assume that $M$ is orientable, and let $\mathcal A$ be an oriented atlas on $M$.  
>>	2. For each $q=(s,t)\in D$, define a basis of $T_{\pi(q)}M$ by $$B_q=\left(d\pi_q\left(\frac{\partial}{\partial s}\bigg|_q\right),d\pi_q\left(\frac{\partial}{\partial t}\bigg|_q\right)\right)$$
>>	3. Since $\mathcal A$ orients $M$, the basis $B_q$ is either positive or negative in $T_{\pi(q)}M$. Define $\varepsilon(q)=1$ if $B_q$ is positive, and $\varepsilon(q)=-1$ if $B_q$ is negative.  
>>	4. The function $\varepsilon:D\to\{1,-1\}$ is locally constant. Indeed, locally $\pi$ is a diffeomorphism, so the vectors $d\pi_q\left(\frac{\partial}{\partial s}\big|_q\right)$ and $d\pi_q\left(\frac{\partial}{\partial t}\big|_q\right)$ form a smooth local frame on $M$. Since the orientation determined by $\mathcal A$ cannot change sign on a connected coordinate neighborhood, $\varepsilon$ is locally constant.  
>>	5. Since $D=\mathbb R\times(-1,1)$ is connected, $\varepsilon$ is constant.  
>>	6. Now fix $q=(s,t)\in D$ and let $q'=(s+1,-t)$. Then $\pi(q)=\pi(q')$.  
>>	7. Let $\tau:D\to D$ be given by $\tau(s,t)=(s+1,-t)$. Then $q'=\tau(q)$ and $\pi\circ\tau=\pi$.  
>>	8. Differentiating $\pi\circ\tau=\pi$ gives $d\pi_{q'}\circ d\tau_q=d\pi_q$.  
>>	9. Since $d\tau_q\left(\frac{\partial}{\partial s}\big|_q\right)=\frac{\partial}{\partial s}\big|_{q'}$ and $d\tau_q\left(\frac{\partial}{\partial t}\big|_q\right)=-\frac{\partial}{\partial t}\big|_{q'}$, we get $d\pi_{q'}\left(\frac{\partial}{\partial s}\big|_{q'}\right)=d\pi_q\left(\frac{\partial}{\partial s}\big|_q\right)$ and $d\pi_{q'}\left(\frac{\partial}{\partial t}\big|_{q'}\right)=-d\pi_q\left(\frac{\partial}{\partial t}\big|_q\right)$.  
>>	10. Therefore $B_{q'}=\left(d\pi_q\left(\frac{\partial}{\partial s}\big|_q\right),-d\pi_q\left(\frac{\partial}{\partial t}\big|_q\right)\right)$.  
>>	11. Hence $B_{q'}$ is obtained from $B_q$ by changing the sign of exactly one vector. Therefore $B_q$ and $B_{q'}$ determine opposite orientations of the same tangent plane $T_{\pi(q)}M$.  
>>	12. Thus $\varepsilon(q')=-\varepsilon(q)$.  
>>	13. But by step 5, $\varepsilon$ is constant on $D$, so $\varepsilon(q')=\varepsilon(q)$.  
>>	14. This is impossible. Therefore $M$ is not orientable.

>[!Exercise]
> aca uno que no hice

>[!Exercise]
>Recordar que se dice que un difeomorfismo local entre variedades orientadas $M$ y $N$, $F:M\to N$, preserva la orientación si para cada $p\in M$, el isomorfismo $(dF)_p$ lleva bases positivas de $T_pM$ en bases positivas de $T_{F(p)}N$, y se dice que invierte la orientación si para cada $p\in M$, $(dF)_p$ lleva bases positivas de $T_pM$ en bases negativas de $T_{F(p)}N$. Mostrar que las siguientes condiciones son equivalentes:
>- (a) $F$ preserva la orientación.
>- (b) Con respecto a cualquier par de cartas orientadas de $M$ y $N$, la matriz Jacobiana de $F$ tiene determinante positivo.
>- (c) Para cualquier forma de orientación de $N$ que esté orientada positivamente, su pullback es una forma orientada positivamente sobre $M$.
>>[!Proof]-
>>- $(a)\Rightarrow (b)$
>>	1. Tenemos dos cartas orientadas cualquiera $\varphi=(x_{1},\ldots,x_{n})$ y $\psi=(y_{1},\ldots y_{n})$   
>>	2. Since $F$ preserves the orientation, the image of the positive coordinate basis $\{\partial/\partial x^i|_p\}$ under $(dF)_p$ is again a positive basis in $T_q N$. Call this image basis $\mathbf{e}' = \{(dF)_p(\partial/\partial x^i)\}$.
>>	3. Now choose any other positive oriented basis $\mathbf{f} = \{\partial/\partial y^j|_q\}$ of the same tangent space $T_q N$. Because both $\mathbf{e}'$ and $\mathbf{f}$ are positive bases, they determine the same orientation; therefore the change-of-basis matrix $P$ that expresses the vectors of $\mathbf{e}'$ as linear combinations of the vectors of $\mathbf{f}$ must satisfy $\det P > 0$.
>>	4. By definition of the differential in coordinates, the vectors of the image basis satisfy $$(dF)_p\Bigl(\frac{\partial}{\partial x^i}\Bigr) = \sum_j P_i^j \frac{\partial}{\partial y^j}$$
>>	5. The matrix $P$ above is precisely the matrix representation of the linear map $(dF)_p$ with respect to the two bases $\{\partial/\partial x^i\}$ and $\{\partial/\partial y^j\}$.
>>	6. But this matrix representation is exactly the Jacobian matrix of $F$ in the chosen oriented charts. Hence the Jacobian matrix has positive determinant.
>>	7. Y esta es la matriz jacobiana de $F$ con respecto a las dos cartas del paso 1.  
>>- $(b)\Rightarrow (a)$
>>	1. Supongamos que se cumple $(b)$. Queremos probar que $F$ preserva la orientación. Fijamos $p\in M$ y escribimos $q=F(p)$.  
>>	2. Sea $$B_1=(v_1,\ldots,v_n)$$ una base positiva arbitraria de $T_pM$. Tenemos que probar que $$D=((dF)_p(v_1),\ldots,(dF)_p(v_n))$$ es una base positiva de $T_qN$. 
>>	3. Tomamos una carta orientada $\varphi=(x^1,\ldots,x^n)$ de $M$ alrededor de $p$. Entonces $$B_2=\left(\frac{\partial}{\partial x^1}\big|_p,\ldots,\frac{\partial}{\partial x^n}\big|_p\right)$$ es una base positiva de $T_pM$.  
>>	4. Tomamos una carta orientada $\psi=(y^1,\ldots,y^n)$ de $N$ alrededor de $q$. Entonces $$\widetilde B_2=\left(\frac{\partial}{\partial y^1}\big|_q,\ldots,\frac{\partial}{\partial y^n}\big|_q\right)$$ es una base positiva de $T_qN$.  
>>	5. Queremos ver que la matriz cambio de base entre $\widetilde{B}_{2}$ y $D$ tiene determinante positivo, pero dicha matriz cumple $$C(D,\widetilde B_2)=[(dF)_p]_{B_1}^{\widetilde B_2}=[(dF)_p]_{B_2}^{\widetilde B_2}\,C(B_1,B_2)$$
>>	6. Como $B_1$ y $B_2$ son bases positivas de $T_pM$, la matriz de cambio de base $C(B_1,B_2)$ tiene determinante positivo, es decir, $\det C(B_1,B_2)>0$.  
>>	7. Por hipótesis $(b)$, la matriz Jacobiana de $F$ respecto de las cartas orientadas $\varphi$ y $\psi$ tiene determinante positivo. Pero esa matriz es precisamente $[(dF)_p]_{B_2}^{\widetilde B_2}$, luego $\det\left([(dF)_p]_{B_2}^{\widetilde B_2}\right)>0$.  
>>	8. Entonces $$\det C(D,\widetilde B_2)=\det\left([(dF)_p]_{B_2}^{\widetilde B_2}\right)\det C(B_1,B_2)>0$$
>>	9. Como $\widetilde B_2$ es positiva y el cambio de base de $D$ respecto de $\widetilde B_2$ tiene determinante positivo, se sigue que $D$ es una base positiva de $T_qN$. 
>>	10. Por lo tanto, para toda base positiva $B_1$ de $T_pM$, la base $((dF)_p(v_1),\ldots,(dF)_p(v_n))$ es positiva en $T_{F(p)}N$. Luego $F$ preserva la orientación.
>>- $(a)\Rightarrow (c)$
>>	1. Como $F$ es un difeomorfismo local que preserva la orientacion, si $(v_1,\ldots,v_n)$ es una base de $T_pM$ positiva, entonces $(dF_p(v_1),\ldots,dF_p(v_n))$ es una base de $T_{F(p)}N$ positiva.
>>	2. Como $\omega$ es una forma de orientación positiva en $N$, se tiene $$\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n))>0.$$
>>	3. Usando la definición del pullback, resulta que para todo $p\in M$ y para todo $v_{1},\ldots,v_{n}\in T_{p}M$    $$(F^*\omega)_p(v_1,\ldots,v_n)=\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n))>0.$$
>>	4. Entonces $F^*\omega$ evalúa positivamente en toda base positiva de $T_pM$. Como esto vale para todo $p\in M$, $F^*\omega$ es una forma de orientación positiva en $M$.
>>- $(c)\Rightarrow (a)$ 
>>	1. Recíprocamente, supongamos que para toda forma de orientación positiva $\omega$ en $N$, la forma $F^*\omega$ es una forma de orientación positiva en $M$.
>>	2. Tomemos $p\in M$ y una base positiva $(v_1,\ldots,v_n)$ de $T_pM$. Queremos probar que $(dF_p(v_1),\ldots,dF_p(v_n))$ es una base positiva de $T_{F(p)}N$.
>>	3. Sea $\omega$ una forma de orientación positiva en $N$. Por hipótesis, $F^*\omega$ es positiva en $M$, entonces $$(F^*\omega)_p(v_1,\ldots,v_n)>0.$$
>>	4. Por definición del pullback, $$(F^*\omega)_p(v_1,\ldots,v_n)=\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n)).$$
>>	5. Por lo tanto, $$\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n))>0.$$
>>	6. Como $\omega$ es una forma de orientación positiva en $N$, esto implica que $(dF_p(v_1),\ldots,dF_p(v_n))$ es una base positiva de $T_{F(p)}N$.
>>	7. Luego $F$ manda bases positivas de $T_pM$ en bases positivas de $T_{F(p)}N$. Por lo tanto, $F$ preserva orientación.

>[!Exercise]
>Sea $F:\mathbb R\to\mathbb R$ un difeomorfismo que invierte la orientación. Probar que $F$ tiene un punto fijo.
>>[!Proof]-
>>8. Como $F$ invierte la orientación y estamos en dimensión $1$, se tiene $F'(x)<0$ para todo $x\in\mathbb R$.
>>9. Definimos $g:\mathbb R\to\mathbb R$ por $g(x)=F(x)-x$. Entonces $g$ es continua y suave, y además $g(x)=0$ si y solo si $F(x)=x$.
>>10. Derivando, obtenemos $g'(x)=F'(x)-1$. Como $F'(x)<0$, entonces $g'(x)<-1$ para todo $x\in\mathbb R$.
>>11. Tomemos $x>0$. Por el teorema del valor medio aplicado a $g$ en $[0,x]$, existe $c\in(0,x)$ tal que $g(x)-g(0)=g'(c)x$. Como $g'(c)<-1$ y $x>0$, resulta $g(x)-g(0)<-x$, es decir, $g(x)<g(0)-x$.
>>12. Por lo tanto, si $x\to+\infty$, entonces $g(0)-x\to-\infty$. En particular, existe $b>0$ tal que $g(b)<0$.
>>13. Ahora tomemos $x<0$. Por el teorema del valor medio aplicado a $g$ en $[x,0]$, existe $c\in(x,0)$ tal que $g(0)-g(x)=g'(c)(0-x)$.
>>14. Como $0-x>0$ y $g'(c)<-1$, se tiene $g(0)-g(x)<-(0-x)=x$. Entonces $-g(x)<x-g(0)$, y por lo tanto $g(x)>g(0)-x$.
>>15. Si $x\to-\infty$, entonces $g(0)-x\to+\infty$. En particular, existe $a<0$ tal que $g(a)>0$.
>>16. Tenemos entonces $a<b$, $g(a)>0$ y $g(b)<0$. Como $g$ es continua, y $\mathbb{R}$ conexo, existe $p\in(a,b)$ tal que $g(p)=0$.
>>17. Finalmente, $g(p)=0$ implica $F(p)-p=0$, es decir, $F(p)=p$. Por lo tanto, $F$ tiene un punto fijo.

>[!Exercise]
>Sea $\Omega=dx_1\wedge\cdots\wedge dx_n$ la forma de volumen usual en $\mathbb R^n$. Probar que $\Omega$ es invariante por movimientos rígidos que preservan la orientación, es decir, si $f=T\circ O$, donde $T$ es una traslación y $O\in SO(n)$, entonces $f^*\Omega=\Omega$.
>>[!Proof]-
>>18. Sea $f=T\circ O:\mathbb R^n\to\mathbb R^n$ un movimiento rígido con $T(x)=x+a$, $O\in SO(n)$ y sea $\Omega=dx_1\wedge\cdots\wedge dx_n$.
>>19. Queremos probar que $f^*\Omega=\Omega$. Por definición, basta probar que para todo $p\in\mathbb R^n$ y todo $v_1,\ldots,v_n\in T_p\mathbb R^n$ se cumple $$(f^*\Omega)_p(v_1,\ldots,v_n)=\Omega_p(v_1,\ldots,v_n).$$
>>20. Por definición de pullback, $$(f^*\Omega)_p(v_1,\ldots,v_n)=\Omega_{f(p)}((df)_p(v_1),\ldots,(df)_p(v_n)).$$
>>21. Como $f=T\circ O$, por la regla de la cadena $$(df)_p=(dT)_{O(p)}\circ(dO)_p.$$
>>22. Como $T(x)=x+a$, se tiene $(dT)_{O(p)}=\operatorname{id}$, (Sale escribiendo $dT\left( \frac{d}{dx_{i}} \right)$ en coordenadas $\frac{d}{dx_{j}}$) y como $O$ es lineal, $(dO)_p=O$. Por lo tanto $$(df)_p=O.$$
>>23. Entonces $$(f^*\Omega)_p(v_1,\ldots,v_n)=\Omega_{f(p)}(Ov_1,\ldots,Ov_n).$$
>>24. Como $\Omega=dx_1\wedge\cdots\wedge dx_n$, tenemos $$\Omega_{f(p)}(Ov_1,\ldots,Ov_n)=\det(dx_i(Ov_j))_{i,j}.$$
>>25. La entrada $dx_i(Ov_j)=(Ov_j)(x_i)$ es la coordenada $i$-ésima del vector $Ov_j$. Por lo tanto $$\det(dx_i(Ov_j))_{i,j}=\det[Ov_1,\ldots,Ov_n].$$
>>26. Si escribimos $[v_1,\ldots,v_n]$ para la matriz cuyas columnas son los vectores $v_1,\ldots,v_n$, entonces $$[Ov_1,\ldots,Ov_n]=O[v_1,\ldots,v_n].$$
>>27. Por multiplicatividad del determinante, $$\det[Ov_1,\ldots,Ov_n]=\det(O)\det[v_1,\ldots,v_n].$$
>>28. Como $O\in SO(n)$, se tiene $\det(O)=1$. Entonces $$\det[Ov_1,\ldots,Ov_n]=\det[v_1,\ldots,v_n].$$
>>29. Osea que $$(f^*\Omega)_p(v_1,\ldots,v_n)=\det[v_{1},\ldots,v_{n}].$$ 
>>30. Pero evaluando tenemos que , $$\det[v_1,\ldots,v_n]=\Omega_p(v_1,\ldots,v_n).$$
>>31. Luego $$(f^*\Omega)_p(v_1,\ldots,v_n)=\Omega_p(v_1,\ldots,v_n)$$ para todo $p\in\mathbb R^n$ y todo $v_1,\ldots,v_n\in T_p\mathbb R^n$. Por lo tanto $$f^*\Omega=\Omega.$$

>[!Exercise]
>Sean $M$ y $N$ variedades orientadas y sea $F:M\to N$ un difeomorfismo que preserva orientación. Si $(V,\varphi)$ es un entorno coordenado positivo en $N$, probar que $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo en $M$.
>>[!Proof]-
>>

>[!Exercise]
>Sean $M$ y $N$ variedades orientadas y sea $F:M\to N$ un difeomorfismo que preserva orientación. Si $(V,\varphi)$ es un entorno coordenado positivo en $N$, probar que $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo en $M$.
>>[!Proof]-
>>- Primera forma de hacerlo
>>	1. Como $F$ es un difeomorfismo y $(V,\varphi)$ es una carta de $N$, la aplicación $\varphi\circ F:F^{-1}(V)\to\varphi(V)$ es un difeomorfismo, luego $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado de $M$.
>>	2. Sea $\omega$ una forma de volumen positiva en $N$.
>>	3. Como $(V,\varphi)$ es una carta positiva, existe una función suave $g:V\to\mathbb R$ tal que $$\omega|_V=g\,d\varphi^1\wedge\cdots\wedge d\varphi^n$$ y obviamente $g>0$ en $V$ (se ve evaluando en $\frac{d}{d\varphi^{1}},\ldots$)  
>>	4. Como $F$ preserva orientación, $F^*\omega$ es una forma de volumen positiva en $M$.
>>	5. Sobre $F^{-1}(V)$ se tiene $F^*\omega=(g\circ F)\,F^*(d\varphi^1\wedge\cdots\wedge d\varphi^n)$.
>>	6. Como el pullback conmuta con el producto wedge y con el diferencial, $$F^*\omega=(g\circ F)\,d(\varphi^1\circ F)\wedge\cdots\wedge d(\varphi^n\circ F)$$
>>	7. Sea $p\in F^{-1}(V)$ y denotemos por $\left.\frac{\partial}{\partial x_i}\right|_p^{\varphi\circ F}$ la base coordenada inducida por $\varphi\circ F$.
>>	8. Entonces $d(\varphi^i\circ F)_p\left(\left.\frac{\partial}{\partial x_j}\right|_p^{\varphi\circ F}\right)=\delta_{ij}$.
>>	9. Por tanto, $\left(d(\varphi^1\circ F)\wedge\cdots\wedge d(\varphi^n\circ F)\right)_p\left(\left.\frac{\partial}{\partial x_1}\right|_p^{\varphi\circ F},\ldots,\left.\frac{\partial}{\partial x_n}\right|_p^{\varphi\circ F}\right)=1$.
>>	10. En consecuencia, $(F^*\omega)_p\left(\left.\frac{\partial}{\partial x_1}\right|_p^{\varphi\circ F},\ldots,\left.\frac{\partial}{\partial x_n}\right|_p^{\varphi\circ F}\right)=(g\circ F)(p)$.
>>	11. Como $p\in F^{-1}(V)$, se tiene $F(p)\in V$.
>>	12. Como $g>0$ en $V$, resulta $(g\circ F)(p)=g(F(p))>0$.
>>	13. Así, $(F^*\omega)_p\left(\left.\frac{\partial}{\partial x_1}\right|_p^{\varphi\circ F},\ldots,\left.\frac{\partial}{\partial x_n}\right|_p^{\varphi\circ F}\right)>0$ para todo $p\in F^{-1}(V)$.
>>	14. Como $F^*\omega$ es positiva, la base coordenada inducida por $\varphi\circ F$ es positiva en todo punto.
>>	15. Por lo tanto, $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo de $M$.
>>- Segunda forma de hacerlo
>>	1. Escribimos $\varphi=(y_1,\ldots,y_n)$. Como $F:M\to N$ es difeomorfismo y $V\subseteq N$ es abierto, $F^{-1}(V)\subseteq M$ es abierto. Además $\varphi\circ F:F^{-1}(V)\to \varphi(V)$ es un homeomorfismo sobre el abierto $\varphi(V)\subseteq \mathbb R^n$, y es suave con inversa suave porque $F$ y $\varphi$ lo son. Por lo tanto $(F^{-1}(V),\varphi\circ F)$ es una carta suave de $M$.
>>	2. Para probar que esta carta es positiva, fijamos $p\in F^{-1}(V)$. Denotamos por $z_i=y_i\circ F$ las funciones coordenadas de la carta $\varphi\circ F$. Entonces la base coordenada asociada a esta carta en $p$ es $$B=\left(\frac{\partial}{\partial z_1}\big|_p,\ldots,\frac{\partial}{\partial z_n}\big|_p\right)$$
>>	3. Veamos que la imagen de esta base por $(dF)_p$ es la base coordenada positiva de $(V,\varphi)$ en $F(p)$. Para cada $i,j$ tenemos $$dy_j|_{F(p)}\left((dF)_p\left(\frac{\partial}{\partial z_i}\big|_p\right)\right)=d(y_j\circ F)_p\left(\frac{\partial}{\partial z_i}\big|_p\right)=dz_j|_p\left(\frac{\partial}{\partial z_i}\big|_p\right)=\delta_{ij}$$por lo tanto $$(dF)_p\left(\frac{\partial}{\partial z_i}\big|_p\right)=\frac{\partial}{\partial y_i}\big|_{F(p)}$$ para todo $i$.
>>	4. Como $(V,\varphi)$ es una carta positiva en $N$, la base $\left(\frac{\partial}{\partial y_1}\big|_{F(p)},\ldots,\frac{\partial}{\partial y_n}\big|_{F(p)}\right)$ es positiva en $T_{F(p)}N$. Por el paso anterior, esta base es exactamente $(dF)_p(B)$.
>>	5. Por lo tanto $B$ es positiva (de lo contrario $dF_{p}$ mandaria una base negativa a una base positiva, lo que es absurdo por que $F$ preserva orientacion)  
>>	6. Así, para todo $p\in F^{-1}(V)$, la base coordenada de la carta $(F^{-1}(V),\varphi\circ F)$ es positiva en $T_pM$. Por lo tanto $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo en $M$.

^e4aa86

>[!Exercise]
>Sea $\pi:M\to N$ un difeomorfismo local. Si $N$ es orientable, entonces $M$ es orientable y $\pi$ preserva orientación.
>>[!Proof]-
>>- Primera Forma
>>	1. Como $N$ es orientable, existe una $n$-forma suave $\omega\in\Omega^n(N)$ que no es la funcion nula para ningun $p\in N$ .  
>>	2. Consideramos la $n$-forma $\pi^*\omega\in\Omega^n(M)$.  
>>	3. Para cada $p\in M$, como $\pi$ es un difeomorfismo local, existen abiertos $U\subseteq M$ y $V\subseteq N$, con $p\in U$, tales que $\pi|_U:U\to V$ es un difeomorfismo.  
>>	4. Por lo tanto, existe una inversa suave $(\pi|_U)^{-1}:V\to U$.  
>>	5. Como $(\pi|_U)^{-1}\circ\pi|_U=\operatorname{id}_U$, por la regla de la cadena se tiene  
>>	$d((\pi|_U)^{-1})_{\pi(p)}\circ d(\pi|_U)_p=\operatorname{id}_{T_pM}.$. Como $\pi|_U\circ(\pi|_U)^{-1}=\operatorname{id}_V$, también se tiene  
>>	$d(\pi|_U)_p\circ d((\pi|_U)^{-1})_{\pi(p)}=\operatorname{id}_{T_{\pi(p)}N}.$  
>>	7. Luego $d(\pi|_U)_p=d\pi_p:T_pM\to T_{\pi(p)}N$ es un isomorfismo lineal.  
>>	8. Sea $(v_1,\ldots,v_n)$ una base de $T_pM$; entonces $(d\pi_p(v_1),\ldots,d\pi_p(v_n))$ es una base de $T_{\pi(p)}N$.  
>>	9. Por definición del pullback, $$(\pi^*\omega)_p(v_1,\ldots,v_n)=\omega_{\pi(p)}(d\pi_p(v_1),\ldots,d\pi_p(v_n)).$$  
>>	10. Como $\omega_{\pi(p)}\neq0$, su evaluación sobre una base es distinta de cero, de modo que $$(\pi^*\omega)_p(v_1,\ldots,v_n)\neq0.$$  
>>	11. Por lo tanto, $\pi^*\omega$ es una $n$-forma suave nunca nula sobre $M$, y entonces $M$ es orientable.  
>>	12. Orientamos $N$ mediante $\omega$ y $M$ mediante $\pi^*\omega$.  
>>	13. Si $(v_1,\ldots,v_n)$ es una base positiva de $T_pM$, entonces $$(\pi^*\omega)_p(v_1,\ldots,v_n)>0.$$  
>>	14. Por la definición del pullback, $$\omega_{\pi(p)}(d\pi_p(v_1),\ldots,d\pi_p(v_n))=(\pi^*\omega)_p(v_1,\ldots,v_n)>0.$$  
>>	15. Luego $(d\pi_p(v_1),\ldots,d\pi_p(v_n))$ es una base positiva de $T_{\pi(p)}N$. Mostrando que $\pi$ preserva orientacion
>>- Segunda forma de hacerlo
>>	1. Como $N$ es orientable, tomamos un atlas orientado $\mathcal A_N$ de $N$.
>>	2. Para cada $p\in M$, como $\pi$ es difeomorfismo local, existe un abierto $W_0\subseteq M$ con $p\in W_0$ tal que $$\pi|_{W_0}:W_0\to V_0$$ es un difeomorfismo sobre un abierto $V_0\subseteq N$.
>>	3. Tomamos una carta positiva $(U,\varphi=(y^1,\ldots,y^n))\in\mathcal A_N$ tal que $\pi(p)\in U$. Definimos $V=V_0\cap U$ y $W=(\pi|_{W_0})^{-1}(V)$. Entonces $\pi|_W:W\to V$ sigue siendo un difeomorfismo.
>>	4. Definimos una carta en $M$ por $z=\varphi\circ\pi|_W$. Consideramos el atlas $\mathcal A_M$ formado por todas las cartas de la forma $(W,z)$ construidas así, con $(U,\varphi)$ positiva en $N$.
>>	5. Veamos que $\mathcal A_M$ es un atlas orientado. Sean $(W_1,z_1)$ y $(W_2,z_2)$ dos cartas de $\mathcal A_M$, con $z_1=\varphi_1\circ\pi$ y $z_2=\varphi_2\circ\pi$, donde $(U_1,\varphi_1)$ y $(U_2,\varphi_2)$ son positivas en $N$.
>>	6. En $z_1(W_1\cap W_2)$ tenemos $z_2\circ z_1^{-1}=\varphi_2\circ\varphi_1^{-1}$ restringida al abierto correspondiente. Entonces $$J (z_{2}\circ z_{1}^{-1})(z_{1}(p))=J (\varphi_{2}\circ \varphi_{1}^{-1})(\varphi_{1}(p))$$
>>	7. Y recordamos que la $J (\varphi_{2}\circ \varphi_{1}^{-1})(\varphi_{1}(p))$ es igual a la matriz cambio de base entre los vectores tangentes de $\varphi_{1}$ y los de $\varphi_{2}$ y esta matriz de cambio de base es positiva, por que ambas cartas son positivas 
>>	8. Analogamente esto muestra que $z_{1}$ y $z_{2}$ tienen la misma orientacion. Por lo tanto $\mathcal A_M$ define una orientación en $M$.
>>	9. Probemos ahora que $\pi$ preserva orientación. Sea $(A,x=(x^1,\ldots,x^n))$ una carta positiva arbitraria de $M$ y sea $p\in A$.
>>	10. Elegimos una carta especial positiva $(W,z=(z^1,\ldots,z^n))$ alrededor de $p$, con $z=\varphi\circ\pi$, donde $(V,\varphi=(y^1,\ldots,y^n))$ es una carta positiva de $N$ alrededor de $\pi(p)$.
>>	11. Ahora resta ver que $\pi$ preserva orientacion  
>>	12. Osea dada una base orientada positiva cualquiera de $T_{p}M$  $$\mathcal{B_{1}}=\left\{ v_{1},\ldots,v_{m}\right \}$$ queremos probar que la base $\mathcal{B}_{2}=\{ (d\pi)_{p} v_{1},\ldots,(d\pi)_{p} v_{m} \}$ es positiva en $T_{\pi(p)}N$.
>>	13. Para eso tomamos una base positiva en $T_{p}M$ $$\widetilde{\mathcal{B}}_{1}=\left\{ \frac{\partial}{\partial z^{1}}\bigg|_{p},\ldots \frac{\partial}{\partial z^{n}}\bigg|_{p} \right \}$$ dada por la carta del paso 10. y la respectiva base en $T_{\pi(p)}N$ $$\widetilde{\mathcal{B}}_{2}=\left\{ \frac{\partial}{\partial y^{1}}\bigg|_{p},\ldots \frac{\partial}{\partial y^{n}}\bigg|_{p} \right \}$$
>>	14. Entonces por el [[GS - Pr7#^e4aa86]] sabemos que $$(d\pi)_{p}\left( \frac{\partial}{\partial z^{i}}\bigg|_{p}\right)=\frac{\partial}{\partial y^{i}}\bigg|_{p}$$ por ende $[(d\pi)_{p}]_{\widetilde {\mathcal{B}}_{1}}^{\widetilde{\mathcal{B}}_{2}}=Id$ 
>>	15. Y recordamos que el cambio de base entre $\mathcal{B}_{2}$ y $\widetilde{\mathcal{B}}_{2}$ es igual a $[(d\pi)_{p}]_{\mathcal{B}_{1}}^{\widetilde{\mathcal{B}}_{2}}$ y esto es lo que queremos ver si tiene determinante positivo
>>	16. Pero $$[(d\pi)_{p}]_{\mathcal{B}_{1}}^{\widetilde{\mathcal{B}}_{2}}=[(d\pi)_{p}]_{\widetilde {\mathcal{B}}_{1}}^{\widetilde{\mathcal{B}}_{2}}.C(\mathcal{B}_{1},\widetilde{\mathcal{B}}_{1})=C(\mathcal{B}_{1},\widetilde{\mathcal{B}}_{1})$$
>>	17. Pero el determinante de $C(\mathcal{B}_{1},\widetilde{\mathcal{B}}_{1})$ es positivo , por que ambas bases son positivas.

>[!Example]
>ejercicios 12

>[!Example] opcional

>[!Example] opcional

>[!Exercise] Propiedades de integrales de formas
>Sean $M$ y $N$ variedades orientadas de dimension $n$, y sean $\omega$ y $\eta$ $n$-formas con soporte compacto sobre $M$.
>- (i) Linealidad: si $a,b\in\mathbb R$, entonces $$\int_Ma\omega+b\eta=a\int_M\omega+b\int_M\eta.$$
>- (ii) Orientacion opuesta: $$\int_{-M}\omega=-\int_M\omega.$$
>- (iii) Positividad: sea $M$ compacta. Si $\omega$ es una $n$-forma positivamente orientada, entonces $$\int_M\omega>0.$$
>- (iv) Invariancia por difeomorfismos: si $F:N\to M$ preserva la orientacion o reversa la orientacion, entonces
>$$\int_M\omega=
>\begin{cases}
>\int_NF^*\omega,&\text{si }F\text{ preserva},\\
>-\int_NF^*\omega,&\text{si }F\text{ reversa}.
>\end{cases}$$
>>[!Proof]-
>>- (i) 
>>	1. Como $$\operatorname{sop}(a\omega+b\eta)\subseteq\operatorname{sop}(\omega)\cup\operatorname{sop}(\eta),$$y $\operatorname{sop}(\omega)\cup\operatorname{sop}(\eta)$ es compacto, tomamos un cubrimiento abierto $\{U_i\}$ de este compacto por dominios de cartas positivamente orientadas. Este cubrimiento existe, por que las cartas cubren todo $M$ en particular cubren dichos soportes que son subconjuntos de $M$  
>>	2. Este mismo sirve para $\operatorname{sop}(a\omega+b\eta)$. Sea $\{\rho_i\}$ una particion de la unidad subordinada a $\{U_i\}$. Por independencia de la integral respecto del cubrimiento y de la particion, $$\begin{align*}\int_M(a\omega+b\eta)&=\sum_i\int_{U_i}\rho_i(a\omega+b\eta)\\&=\sum_i\int_{\varphi_i(U_i)}\bigl((a\rho_i f+b\rho_i g)\circ\varphi_i^{-1}\bigr)\\&=\sum_i\int_{\varphi_i(U_i)}\left(a(\rho_i f\circ\varphi_i^{-1})+b(\rho_i g\circ\varphi_i^{-1})\right)\\&=\sum_i\left(a\int_{\varphi_i(U_i)}(\rho_i f)\circ\varphi_i^{-1}+b\int_{\varphi_i(U_i)}(\rho_i g)\circ\varphi_i^{-1}\right)\\&=a\sum_i\int_{U_i}\rho_i\omega+b\sum_i\int_{U_i}\rho_i\eta\\&=a\int_M\omega+b\int_M\eta.\end{align*}$$
>>- (ii) 
>>	1. Primero vemos el caso en que $\operatorname{sop}\omega$ cae en el dominio de una carta positivamente orientada $(U,\varphi=(x_1,\ldots,x_n))$. Entonces $(U,\widetilde\varphi=(-x_1,x_2,\ldots,x_n))$ es una carta de $-M$ y $\widetilde\varphi=T\circ\varphi$, con $T(y_1,\ldots,y_n)=(-y_1,y_2,\ldots,y_n)$.
>>	2. Ahora si llamamos $-x_{1}:=y_{1}$ y $x_{i}=y_{i}$ para $i>1$, tenemos que $(U,\widetilde\varphi=(-x_1,x_2,\ldots,x_n))=(U,\widetilde\varphi=(y_1,y_2,\ldots,y_n))$ es una carta positivamente orientada con respecto al atlas inverso $-U$    
>>	3. Si $$\omega=f\,dx_1\wedge\cdots\wedge dx_n=-f\,d(-x_1)\wedge dx_2\wedge\cdots\wedge dx_n=-fdy_{1}\wedge\ldots\wedge dy_{n}$$entonces, considerando que $\det D T=-1$ (y usando modulo), por teorema de cambio de variables tenemos: $$\begin{aligned}\int_{-U}\omega  &=\int_{\widetilde{\varphi}(U)}\left(-f\circ\widetilde{\varphi}^{-1}\right)(y)\,dy_1\cdots dy_n\\&=-\int_{\widetilde{\varphi}(U)}\left(f\circ\widetilde{\varphi}^{-1}\right)(y)\,dy_1\cdots dy_n\\&=-\int_{\varphi(U)}\left(f\circ\widetilde{\varphi}^{-1}\right)(T(x))\,|\det DT(x)|\,dx_1\cdots dx_n\\&=-\int_{\varphi(U)}\left(f\circ\widetilde{\varphi}^{-1}\circ T\right)(x)\,|\det DT(x)|\,dx_1\cdots dx_n\\&=-\int_{\varphi(U)}\left(f\circ\varphi^{-1}\right)(x)\,dx_1\cdots dx_n\\&=-\int_U\omega.\end{aligned}$$
>>	4. El caso general se obtiene cubriendo $\operatorname{sop}\omega$ por dominios de cartas positivamente orientadas $\{U_i\}$, usando las cartas negativamente orientadas $(U_i,T\circ\varphi_i)$ y una particion de la unidad.
>>- (iii) 
>>	1. Como $\omega$ es positivamente orientada, si $(U,\varphi=(x_1,\ldots,x_n))$ es una carta positivamente orientada, entonces $$\omega|_U=f\,dx_1\wedge\cdots\wedge dx_n,\qquad f(p)>0\quad\forall p\in U.$$
>>	2. Como $M$ es compacta, podemos cubrirla con una familia finita de abiertos $\{U_i\}$ que son dominios de cartas positivamente orientadas. Sea $\{\rho_i\}$ una particion de la unidad subordinada a $\{U_i\}$. Tenemos $$\int_M\omega=\sum_i\int_{U_i}\rho_i\omega.$$
>>	3. Como $\rho_i\ge0$ y $f_i>0$, entonces $\rho_if_i\ge0$, asi que $$\int_{U_i}\rho_i\omega\ge0$$por Analisis III. 
>>	4. Por otro lado, dado $p\in M$, $\sum_i\rho_i(p)=1$, entonces existe $i$ tal que $\rho_i(p)>0$. Por continuidad, $\rho_i>0$ en un abierto que contiene a $p$, y por lo tanto $\rho_if_i>0$ en un abierto de $U_i$, lo que implica $$\int_{U_i}\rho_i\omega>0$$para algun $i$.
>>- (iv)
>>	1. Supongamos primero el caso donde $\operatorname{sop}\omega$ esta contenido en el dominio de una carta positivamente orientada $(U,\varphi)$. Como $F:N\to M$ es difeomorfismo y preserva la orientacion o reversa la orientacion, entonces $(F^{-1}(U),\varphi\circ F)$ es una carta positivamente orientada de $N$ o negativamente orientada, respectivamente, que contiene al soporte de $F^*\omega$.
>>	2. Si $$\omega=f\,dx_1\wedge\cdots\wedge dx_n\quad\text{sobre }U,$$entonces $$F^*\omega=(f\circ F)\,d(x_1\circ F)\wedge\cdots\wedge d(x_n\circ F).$$
>>	3. Si $F$ preserva orientacion, usando la carta $(F^{-1}(U),\varphi\circ F)$, $$\int_NF^*\omega=\int_{F^{-1}(U)}F^*\omega=\int_{\varphi(U)}(f\circ F)\circ(\varphi\circ F)^{-1}\,dx_1\cdots dx_n=\int_M\omega.$$
>>	4. Si $F$ invierte la orientacion, como $(U,\varphi)$ es positiva entonces $(F^{-1}(U),\varphi\circ F)$ es negativa. Pero entonces $(F^{-1}(U),\varphi\circ F)$ es positiva con respecto a $-N$ 
>>	5. Luego tenemos que $$\int_NF^*\omega=-\int_{-N}F^{*}w =-\int_M\omega.$$ donde el segudno igual vale por que $(F^{-1}(U),\varphi\circ F)$ es positiva con respecto a $-N$ y ya usando la primera parte
>>	6. El caso general es directo usando el caso anterior y la definicion de integral por cubrimiento de dominios de cartas positivamente orientadas.

>[!Exercise]
>Usando la definición de integral, calcular $\int_{S^1}\theta$, donde $\theta$ es la $1$-forma sobre $S^1$ definida por $\theta|_U=ds$ y $\theta|_V=dt$, con $U=S^1\setminus\{(1,0)\}$, $V=S^1\setminus\{(-1,0)\}$ y cartas $s:U\to(0,2\pi)$, $t:V\to(-\pi,\pi)$.
>>[!Proof]-
>>7. En las dos componentes de $U\cap V$ se cumple $$(s\circ t^{-1})(r)=\begin{cases}r,&r\in(0,\pi),\\r+2\pi,&r\in(-\pi,0).\end{cases}$$ En ambos casos, $\dfrac{d}{dr}(s\circ t^{-1})(r)=1>0$, por lo que las cartas $(U,s)$ y $(V,t)$ pertenecen a la misma orientación. Notando que $\dfrac{d}{dr}(s\circ t^{-1})(r)=1>0$ es el unico coeficiente en la matriz cambio de base entre $\frac{d}{dt}$ y $\frac{d}{ds}$    
>>8. Sea $\{\rho_U,\rho_V\}$ una partición de la unidad subordinada al cubrimiento $\{U,V\}$. Entonces $\rho_U+\rho_V=1$ en $S^1$. Por definición de integral sobre una variedad, $$\int_{S^1}\theta=\int_U\rho_U\theta+\int_V\rho_V\theta.$$
>>9. Como $\theta|_U=ds$ y $\theta|_V=dt$, entonces la funcion coeficiente que acompaña ambas formas es constantemente $1$, entonces pasando a coordenadas obtenemos $$\int_{S^1}\theta=\int_0^{2\pi}(\rho_U\circ s^{-1})(u)\,du+\int_{-\pi}^{\pi}(\rho_V\circ t^{-1})(r)\,dr.$$
>>10. Partimos ambas integrales según las dos componentes del solapamiento: $$\begin{aligned}\int_{S^1}\theta&=\int_0^\pi(\rho_U\circ s^{-1})(u)\,du+\int_\pi^{2\pi}(\rho_U\circ s^{-1})(u)\,du\\&\quad+\int_{-\pi}^{0}(\rho_V\circ t^{-1})(r)\,dr+\int_0^\pi(\rho_V\circ t^{-1})(r)\,dr.\end{aligned}$$
>>11. Para $u\in(0,\pi)$ se cumple $s^{-1}(u)=t^{-1}(u)$, pues en esa componente ambas cartas asignan al mismo punto el mismo ángulo. Como $\rho_U+\rho_V=1$ punto a punto sobre $S^1$, evaluando en el punto común $s^{-1}(u)=t^{-1}(u)$ obtenemos $$\rho_U(s^{-1}(u))+\rho_V(t^{-1}(u))=1,$$ es decir, $$(\rho_U\circ s^{-1})(u)+(\rho_V\circ t^{-1})(u)=1.$$ Por tanto, $$\begin{aligned}\int_0^\pi(\rho_U\circ s^{-1})(u)\,du+\int_0^\pi(\rho_V\circ t^{-1})(u)\,du&=\int_0^\pi\left[(\rho_U\circ s^{-1})(u)+(\rho_V\circ t^{-1})(u)\right]du\\&=\int_0^\pi1\,du=\pi.\end{aligned}$$
>>12. En la integral sobre $(-\pi,0)$ hacemos el cambio de variable $u=r+2\pi$, de modo que $r=u-2\pi$ y $dr=du$. Como $r\in(-\pi,0)$ si y solo si $u\in(\pi,2\pi)$, resulta $$\int_{-\pi}^{0}(\rho_V\circ t^{-1})(r)\,dr=\int_\pi^{2\pi}(\rho_V\circ t^{-1})(u-2\pi)\,du.$$
>>13. Para $u\in(\pi,2\pi)$ se cumple $s^{-1}(u)=t^{-1}(u-2\pi)$, pues ambas expresiones representan el mismo punto de la parte inferior de $S^1$. Evaluando $\rho_U+\rho_V=1$ en ese punto común obtenemos $$\rho_U(s^{-1}(u))+\rho_V(t^{-1}(u-2\pi))=1,$$ es decir, $$(\rho_U\circ s^{-1})(u)+(\rho_V\circ t^{-1})(u-2\pi)=1.$$ Por tanto, $$\begin{aligned}\int_\pi^{2\pi}(\rho_U\circ s^{-1})(u)\,du+\int_{-\pi}^{0}(\rho_V\circ t^{-1})(r)\,dr&=\int_\pi^{2\pi}\left[(\rho_U\circ s^{-1})(u)+(\rho_V\circ t^{-1})(u-2\pi)\right]du\\&=\int_\pi^{2\pi}1\,du=\pi.\end{aligned}$$
>>14. Sumando ambas contribuciones obtenemos $$\int_{S^1}\theta=\pi+\pi=2\pi.$$ Por lo tanto, $$\boxed{\int_{S^1}\theta=2\pi}.$$

>[!Exercise] Ejercicio 18
>Sea $M_i$ una variedad diferenciable de dimensión $n_i$, para $i=1,2$. Sea $\omega_i$ una $n_i$-forma nunca nula en $M_i$ y sea $p_i:M_1\times M_2\to M_i$ la proyección canónica. Demostrar que $\omega=(p_1^*\omega_1)\wedge(p_2^*\omega_2)$ es una $(n_1+n_2)$-forma nunca nula en $M_1\times M_2$. ¿Es $M_1\times M_2$ orientable?
>>[!Proof]-
>>15. Como $p_1^*\omega_1\in\Omega^{n_1}(M_1\times M_2)$ y $p_2^*\omega_2\in\Omega^{n_2}(M_1\times M_2)$, se tiene $$\omega=(p_1^*\omega_1)\wedge(p_2^*\omega_2)\in\Omega^{n_1+n_2}(M_1\times M_2).$$
>>16. Fijemos un punto arbitrario $(p,q)\in M_1\times M_2$. Tomemos una carta $(U,x=(x^1,\ldots,x^{n_1}))$ de $M_1$ alrededor de $p$ y una carta $(V,y=(y^1,\ldots,y^{n_2}))$ de $M_2$ alrededor de $q$.
>>17. Como $\omega_1$ y $\omega_2$ son formas de grado máximo, en estas cartas existen funciones suaves $f:U\to\mathbb R$ y $g:V\to\mathbb R$ tales que $$\omega_1=f\,dx^1\wedge\cdots\wedge dx^{n_1},\qquad \omega_2=g\,dy^1\wedge\cdots\wedge dy^{n_2}.$$
>>18. Como $\omega_1$ y $\omega_2$ nunca se anulan, se cumple $$f(p)\neq 0,\qquad g(q)\neq 0.$$
>>19. Usando las propiedades $F^*(h\alpha)=(h\circ F)F^*\alpha$ y $F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta$, obtenemos $$p_1^*\omega_1=(f\circ p_1)\,p_1^*(dx^1)\wedge\cdots\wedge p_1^*(dx^{n_1})$$ y $$p_2^*\omega_2=(g\circ p_2)\,p_2^*(dy^1)\wedge\cdots\wedge p_2^*(dy^{n_2}).$$
>>20. Por lo tanto, $$\omega=(f\circ p_1)(g\circ p_2)\,p_1^*(dx^1)\wedge\cdots\wedge p_1^*(dx^{n_1})\wedge p_2^*(dy^1)\wedge\cdots\wedge p_2^*(dy^{n_2}).$$
>>21. La carta producto $(U\times V,x\times y)$ determina en $T_{(p,q)}(M_1\times M_2)$ la base $$\left(\left(\frac{\partial}{\partial x^1}\Big|_p,0\right),\ldots,\left(\frac{\partial}{\partial x^{n_1}}\Big|_p,0\right),\left(0,\frac{\partial}{\partial y^1}\Big|_q\right),\ldots,\left(0,\frac{\partial}{\partial y^{n_2}}\Big|_q\right)\right).$$
>>22. Ya sabemos que las diferenciales de las proyecciones satisfacen $$ (dp_1)_{(p,q)}\left(\frac{\partial}{\partial x^j}\Big|_p,0\right)=\frac{\partial}{\partial x^j}\Big|_p,\qquad (dp_1)_{(p,q)}\left(0,\frac{\partial}{\partial y^j}\Big|_q\right)=0,$$ y análogamente $$ (dp_2)_{(p,q)}\left(\frac{\partial}{\partial x^j}\Big|_p,0\right)=0,\qquad (dp_2)_{(p,q)}\left(0,\frac{\partial}{\partial y^j}\Big|_q\right)=\frac{\partial}{\partial y^j}\Big|_q.$$
>>23. Por definición del pullback de una $1$-forma, para todo $Z\in T_{(p,q)}(M_1\times M_2)$ se tiene $$(p_1^*dx^i)_{(p,q)}(Z)=(dx^i)_p\bigl((dp_1)_{(p,q)}Z\bigr).$$
>>24. En consecuencia, $$(p_1^*dx^i)_{(p,q)}\left(\frac{\partial}{\partial x^j}\Big|_p,0\right)=(dx^i)_p\left(\frac{\partial}{\partial x^j}\Big|_p\right)=\delta^i_j,$$ mientras que $$(p_1^*dx^i)_{(p,q)}\left(0,\frac{\partial}{\partial y^j}\Big|_q\right)=(dx^i)_p(0)=0.$$
>>25. De la misma manera, $$(p_2^*dy^i)_{(p,q)}\left(\frac{\partial}{\partial x^j}\Big|_p,0\right)=0,$$ y $$(p_2^*dy^i)_{(p,q)}\left(0,\frac{\partial}{\partial y^j}\Big|_q\right)=(dy^i)_q\left(\frac{\partial}{\partial y^j}\Big|_q\right)=\delta^i_j.$$
>>26. Usamos ahora la propiedad de menores: si $\alpha_1,\ldots,\alpha_k$ son $1$-formas, entonces $$(\alpha_1\wedge\cdots\wedge\alpha_k)(v_1,\ldots,v_k)=\det\bigl(\alpha_i(v_j)\bigr).$$
>>27. Evaluando $\omega_{(p,q)}$ sobre la base producto del paso 7 obtenemos $$\begin{aligned}&\omega_{(p,q)}\left(\left(\frac{\partial}{\partial x^1}\Big|_p,0\right),\ldots,\left(\frac{\partial}{\partial x^{n_1}}\Big|_p,0\right),\left(0,\frac{\partial}{\partial y^1}\Big|_q\right),\ldots,\left(0,\frac{\partial}{\partial y^{n_2}}\Big|_q\right)\right)\\&=(f\circ p_1)(p,q)(g\circ p_2)(p,q)\det\begin{pmatrix}I_{n_1}&0\\0&I_{n_2}\end{pmatrix}\\&=f(p)g(q).\end{aligned}$$
>>28. Como $f(p)\neq 0$ y $g(q)\neq 0$, resulta $$\omega_{(p,q)}\neq 0.$$
>>29. Puesto que $(p,q)$ era arbitrario, $\omega$ nunca se anula en $M_1\times M_2$.
>>30. Por lo tanto, $\omega$ es una forma de orientación sobre $M_1\times M_2$, y en consecuencia $M_1\times M_2$ es orientable.