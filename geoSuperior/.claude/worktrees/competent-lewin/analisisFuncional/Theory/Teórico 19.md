---
dateCreated: 2024-11-10,19:55
---

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
>>5. Ademas se sigue de [[Teórico 18#^937fe3]] que las condiciones sobre $p, q$ en (b) aseguran que $$\begin{align}\text{ La ecuacion no homogenea tiene solucion } x &\iff p \in \text{Im}(T - \lambda I)=\ker(T^{*}-\overline \lambda I)^{\perp}\\ & \iff(p,w) \quad\forall w\in Ker(T^{*}-\overline \lambda I )\in \mathbb{N}\\ & \iff (p,y_{n})\quad n=1,\ldots,m_{\lambda}\end{align}$$
>>6. Analogamente sale $(q,x_{n})=0$ 

^23a090

>[!Remark]
>La dicotomía expresada en [[Teórico 19#^23a090]] entre la solvencia única de las ecuaciones y la solvencia si y solo si se cumple un conjunto finito de condiciones se conoce como la alternativa de Fredholm; esta dicotomía fue descubierta por Fredholm en su investigación sobre ciertas ecuaciones integrales (que dan lugar a ecuaciones del tipo anterior con operadores integrales compactos, ver el Capítulo 8). Más generalmente, si el operador $T - \lambda I$ en (7.1) y (7.2) se reemplaza por un operador lineal acotado $S$ entonces se dice que $S$ satisface la alternativa de Fredholm si las correspondientes ecuaciones nuevamente satisfacen las alternativas del Teorema 7.26. Una característica particularmente importante de la alternativa de Fredholm es el siguiente reformulación de la alternativa (a)

>[!Remark]
>Si $\lambda\neq 0$ entonces $T-\lambda I$ es inyectiva $\iff$ $T-\lambda I$ sobreyectiva.
>En particular si $(T-\lambda I)x=0$ tiene solo la solución trivial $\forall p\in \mathcal{H}$ 
>>[!Proof]
>>

>[!Corollary]
>Si $\lambda \neq 0$ y la ecuación
>$$(T - \lambda I) x = 0 \quad \text{(H)}$$
>tiene solo la solución $x = 0$ entonces $T - \lambda I$ es invertible, y la ecuación $$(T - \lambda I) x = p \quad \text{(NH)}$$
>tiene la solución única $x = (T - \lambda I)^{-1} p$ para cualquier $p \in H$. Esta solución depende continuamente de $p$.
>>[!Proof]-
>>1. La hipótesis asegura que $\lambda$ no es un autovalor de $T$ entonces por [[Teórico 18#^3f6266]] tenemos $\lambda \in \rho(T)$ y por lo tanto $T - \lambda I$ es invertible. 
>>2. Como es invertible dado un $p$ fijo claramente podemos encontrar solucion $x= (T-\lambda I)^{-1}p$  que es unica por unicidad de inversa

^92f1c2

>[!Remark]
>En esencia, el [[Teórico 19#^92f1c2]] establece que "la unicidad de las soluciones de la ecuación (H) implica la existencia de soluciones en la (NH) ". 
>Este es un resultado extremadamente útil. En muchas aplicaciones es relativamente fácil probar la unicidad de las soluciones de una ecuación dada. Si la ecuación tiene la forma (NH) y sabemos que el operador $T$ es compacto, entonces podemos deducir inmediatamente la existencia de una solución.

>[!Theorem]
>Supongamos que $\lambda \neq 0$ es un autovalor de $T$. Si $p \in \text{Im}(T - \lambda I)$ (es decir, si $p$ satisface (7.3)), entonces la ecuación (NH) tiene una solución única $S_\lambda(p) \in \text{Ker}(T - \lambda I)^\perp$. La función $S_\lambda : \text{Im}(T - \lambda I) \to \text{Ker}(T - \lambda I)^\perp$ es lineal y acotada, y el conjunto de soluciones de (NH) tiene la forma
>$$S_\lambda p + \text{Ker}(T - \lambda I). \quad \text{(7.7)}$$
>>[!Proof]-
>>1. Como $p \in \text{Im}(T - \lambda I)$, existe una solución $x_0$ de (7.5). 
>>2. Sea $P$ la proyección ortogonal de $H$ sobre $\ker(T - \lambda I)^\perp$, y sea $u_p = Px_0$
>>3. Entonces $I-P$ proyeccion sobre $\ker(T-\lambda I)^{\perp\perp}=\ker(T-\lambda I)$ luego $x_0 - u_p = (I-P)x_{0}\in \text{Ker}(T - \lambda I)$, y por lo tanto $$(T - \lambda I)u_p = (T - \lambda I)x_0 = p$$
>>4. Por lo tanto, $u_p\in \ker(T-\lambda I)^{\perp}$ y es solucion de (7.5)
>>5. Supongamos hubiera otra $v\in \ker(T-\lambda I)^{\perp}$ entonces $(T - \lambda I)(u_p - v) = p - p = 0$, por lo que $u_p - v \in \text{Ker}(T - \lambda I)$
>>6. Pero por linealidad $u_{p}-v\in \ker(T-\lambda I)^{\perp}$ entonces $u_{p}-v=0$. 
>>7. Por lo tanto la solucion en $\ker(T-\lambda I)^{\perp}$ es unica y entonces podemos definir $S_{\lambda}p=u_{p}$ 
>>8. Veamos linealidad $(T-\lambda I)(\alpha S_{\lambda}p)=\alpha (T-\lambda I)u_{p}=\alpha p$ pero entonces $\alpha S_{\lambda}p$ es solucion para la ecuacion para el punto $\alpha p$ por unicidad tiene que ser igual a la solucion generica $S_{\lambda}\alpha p$.
>>9. Analogamente vemos la suma.
>>10. Finalmente, supongamos que $S_\lambda$ no es acotada. Entonces existe una secuencia de vectores unitarios $\{p_n\}$, tal que $\|S_\lambda p_n\| \neq 0$ para todo $n \in \mathbb{N}$, y que $\lim_{n \to \infty} \|S_\lambda p_n\| = \infty$. 
>>11. Al poner $w_n = \|S_\lambda p_n\|^{-1} S_\lambda p_n$, vemos que $w_n \in \text{Ker}(T - \lambda I)^\perp$, $\|w_n\| = 1$ y que
>>$(T - \lambda I)w_n = \|S_\lambda p_n\|^{-1} (T - \lambda I) S_\lambda p_n =\lVert S_{\lambda}p_{n} \rVert ^{-1}p_{n}$ por lo tanto $$\lVert (T-\lambda I)w_{n} \rVert =\lVert S_{\lambda}p_{n} \rVert ^{-1}\lVert p_{n} \rVert =\lVert S_{\lambda} p_{n} \rVert^{-1}\xrightarrow{n\rightarrow \infty} 0 $$  
>>12. Ahora, exactamente como en el segundo párrafo de la prueba del [[Teórico 18#^3b2c2f]], podemos mostrar que estas propiedades conducen a una contradicción, lo que prueba el resultado.
>>13. Y obviamente sea $x\in \ker(T-\lambda I)$ entonces $(T-\lambda I)(S_{\lambda}p+x)=(T-\lambda I)u_{p}=p$ osea es solucion   

>[!Remark]
>El Teorema 7.29 establece que la solución $S_\lambda p$ satisface $\|S_\lambda p\| \leq C\|p\|$, para alguna constante $C > 0$. Sin embargo, tal desigualdad no puede sostenerse para todas las soluciones $x$ de (7.5) que tienen la forma $x = S_\lambda p + z$, con $z \in \text{Ker}(T - \lambda I)$ teniendo arbitrariamente grandes $\|z\|$.

## Operadores Compactos Autoadjuntos

>[!Remark]
>A lo largo de esta sección supondremos que $H$ es un espacio de Hilbert complejo y que $T \in B(H)$ es autoadjunto y compacto. En este caso, los resultados previos sobre el espectro de $T$ pueden mejorarse considerablemente. En cierto sentido, la razón principal de esto es el siguiente lema, que parece bastante trivial. Primero necesitamos una definición.

>[!Definition] Operador invariante
>Sea $X$ un espacio vectorial y sea $S \in L(X)$. Un subespacio lineal $W \subset X$ se dice que es invariante bajo $S$ si $S(W) \subset W$.

>[!Lemma]
>Sea $K$ un espacio de Hilbert y $S \in B(K)$ sea autoadjunto. Si $\mathcal{M}$ es un subespacio lineal cerrado de $K$ que es invariante bajo $S$, entonces $\mathcal{M}^\perp$ también es invariante bajo $S$.
>>[!Proof]-
>>1. Para cualquier $u \in \mathcal{M}$ y $v \in \mathcal{M}^\perp$ tenemos $(S v, u) = (v, S u) = 0$ ($S u \in \mathcal{M}$ por invarianza)
>>2. Entonces $S v \in \mathcal{M}^\perp$, y por lo tanto $S(\mathcal{M}^\perp) \subset \mathcal{M}^\perp$

^9f9d7c

>[!Remark]
>Este lema nos permitirá "dividir" o descomponer un operador autoadjunto en diferentes subespacios lineales $M \subset H$, y también en los complementos ortogonales $\mathcal{M}^\perp$. Para un operador general $S \in B(H)$, incluso si $S$ es invariante en $\mathcal{M}$ no tiene que ser invariante en $\mathcal{M}^\perp$, por lo que esta estrategia falla en general. Sin embargo [[Teórico 19#^9f9d7c]] asegura que esto funciona para operadores autoadjuntos $T$.
>Los subespacios principales que usamos para descomponer $T$ serán $\text{Ker} T$ y $\overline{Im(T)}$ (ya que $0 \in \text{Ker} T$ e $\text{Im} T \subset \overline{ImT}$ se sigue que ambos espacios son invariantes bajo $T$). Dado que $T$ es autoadjunto, $$Ker(T)=Im(T^{*} )^{\perp}=Im(T)^{\perp}\quad\Longrightarrow  \quad \overline{Im(T)}  = (\text{Ker} T)^\perp\quad(7.8)$$
>A partir de ahora, $P$ denotará la proyección ortogonal de $\mathcal{H}$ sobre $\overline{Im(T)}$.Entonces  se sigue de la igualdad recien dad que $I - P$ es la proyección ortogonal sobre $\text{Ker} T$. 
>Además, el espacio $\overline{Im(T)}$ es un espacio de Hilbert separable (la separabilidad sigue del Teorema 7.8 por ser $T$ compacto). 
>Veremos que podemos construir una base ortonormal de $\overline{Im(T)}$ formada por los autovectores de $T$ (independientemente de si $\mathcal{H}$ es separable o no). Dado que la restricción de $T$ al $\ker T$ es trivial, esto nos dara una representacion completa de $T$ en $\mathcal{H}$
>

^17c4c5

>[!Theorem]
>Alguno de los números $\|T\|$, $-\|T\|$ es un valor propio de $T$.
>>[!Proof]-
>>1. Si $T$ es el operador cero el resultado es trivial, por lo que podemos suponer que $T$ es no nulo entonces $\lVert T \rVert\neq 0$ 
>>2. Por [[Teórico 15#^d51465]] (d), al menos uno de $\|T\|$ o $-\|T\|$ está en $\sigma(T)$, luego por [[Teórico 18#^eeeb64]] este punto debe pertenecer a $\sigma_p(T)$.

^5db8fc

>[!Theorem] MEMO
>El conjunto de los valores propios no nulos de $T$ no está vacío y es finito o consiste en una secuencia que tiende a cero. Cada valor propio no nulo es real y tiene multiplicidad finita. Los autovectores correspondientes a diferentes valores propios son ortogonales.
>>[!Proof]-
>>1. [[Teórico 18#^64b388]] nos dice que disntitos tienden a $0$ o es finito
>>2. [[Teórico 15#^d51465]] (b) nos dice que son reales los autovalores y [[Teórico 18#^014228]] que su multiplicidad es finita
>>3. Y [[Teórico 19#^5db8fc]] nos dice que existe algun auto valor siempre 
>>4. Para probar el resultado final, supongamos que $\lambda_1, \lambda_2 \in \mathbb{R}$ son valores propios distintos con los autovectores correspondientes $e_1, e_2$. 
>>5. Entonces, como $T$ es autoadjunto, tenemos
>>$$\lambda_1(e_1, e_2) = (T e_1, e_2) = (e_1, T e_2) = \lambda_2(e_1, e_2)$$
>>6. lo que, como $\lambda_1 \neq \lambda_2$, implica que $(e_1, e_2) = 0$.

^935f31

>[!Remark]
>En vista del [[Teórico 19#^935f31]], ahora podemos ordenar los valores propios de $T$ en la forma de una lista no vacía, finita o una lista numerable infinita $\lambda_1, \lambda_2, \dots$, de manera que $|\lambda_n|$ disminuye a medida que $n$ aumenta y cada valor propio $\lambda_n$ se repite en la lista según su multiplicidad (más precisamente, si $\lambda$ es un valor propio de $T$ con multiplicidad $m_\lambda > 0$, entonces $\lambda$ se repite exactamente $m_\lambda$ veces en la lista). Además, para cada $n$ podemos usar el algoritmo de Gram-Schmidt para construir una base ortonormal de cada espacio Ker$(T - \lambda_n I)$ que consista en exactamente $m_\lambda$ autovectores. Así, listando los autovectores construidos en el mismo orden que los valores propios, obtenemos una lista de autovectores correspondientes de la forma $e_1, \dots, e_J$ o $e_1, e_2, \dots$. Por la construcción, los autovectores en esta lista correspondientes al mismo valor propio son ortogonales, mientras que por el Teorema 7.33, los autovectores correspondientes a valores propios diferentes son ortogonales. Por lo tanto, la lista completa es un conjunto ortonormal.
>En este momento no sabemos cuántos valores propios no nulos existen. Para tratar con el caso finito e infinito, denotaremos este número por $J$, donde $J$ puede ser un entero finito o ``$J = \infty$'', y escribiremos las listas en la forma $\{\lambda_n\}_n^J, \{e_n\}_n^J$. Demostraremos que $J$ es, de hecho, igual a $r(T)$, el rango de $T$ (que puede ser finito o infinito aquí). También demostraremos que $\{e_n\}_n^J$ es una base ortonormal para el espacio de Hilbert Im$T$.

^840d86

>[!Theorem] MEMO
>El número de valores propios no nulos de $T$ (repetidos según multiplicidad) es igual a $r(T)$. El conjunto de autovectores $\{e_n\}_{n=1}^{r(T)}$ construido arriba (osea de autovalor no nulo) es una base ortonormal para $\overline{ImT}$ y el operador $T$ tiene la representación
>$$ T x = \sum_{n=1}^{r(T)} \lambda_n (x, e_n) e_n$$
>Donde $\{\lambda_n\}_{n=1}^{r(T)}$ es el conjunto de valores propios no nulos de $T$
>>[!Proof]-
>>1. Sea $M = \overline{Sp} \{e_n\}_{n=1}^{J}$, tal que $\{e_n\}_{n=1}^{J}$ es una base ortonormal para $M$ (por definicion de BON). Mostraremos que $M =\overline{ImT}$, y por lo tanto, debemos tener $J = r(T)$ (en el caso finito o infinito). 
>>2. Recordemos que si $r(T) < \infty$ entonces $ImT$ = $\overline{ImT}$. 
>>3. Devuelta por BON, para cualquier $u \in M$ tenemos que $u = \sum_{n=1}^{J} \alpha_n e_n$, donde $\alpha_n = (u, e_n)\quad n = 1, \dots, J$. Así, si $J = \infty$, tenemos
>>$$ u = \lim_{k \to \infty} \sum_{n=1}^k \alpha_n \lambda_n^{-1} T e_n = \lim_{k \to \infty} T \left( \sum_{n=1}^k \alpha_n \lambda_n^{-1} e_n \right) \in \overline{ImT} ,$$mostrando que $M \subset \overline{ImT}$; 
>>4. Un argumento similar se aplica cuando $J$ es finito (sin los límites). 
>>5. Ahora mostraremos que $M^{\perp} \subset \ker T$, esto nos diria $M\supset \ker (T)^{\perp}=\overline{ImT}$ (ultima igualdad vista en [[Teórico 19#^17c4c5]]) por lo tanto $\ker (T)^{\perp}=\overline{ImT}$ lo que implicaria que $M= \overline{ImT}$ que es lo que queriamos probar 
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
>
>>[!idea]-
>> 1. Defino $M=\overline{\mathrm{Sp}}\{e_n\}_{n=1}^J$ donde los $e_n$ son los autovectores de autovalores no nulos. Queremos probar que $M=\overline{\mathrm{Im}T}$.
>> 2. Para cualquier $u\in M$, se obtiene $$ u = \lim_{k \to \infty} \sum_{n=1}^k \alpha_n \lambda_n^{-1} T e_n = \lim_{k \to \infty} T \left( \sum_{n=1}^k \alpha_n \lambda_n^{-1} e_n \right) \in \overline{ImT} $$, así que $M\subseteq\overline{\mathrm{Im}T}$.
>> 3. Mostramos que $M^\perp\subseteq\ker T$. Primero notamos  que $T(M)\subseteq M$, de donde $M^\perp$ es invariante por $T$.
>> 4. Llamamos $T_N$ a la restricción de $T$ a $N=M^\perp$. Es compacto en $N$ porque $T$ es compacto y $N$ es cerrado.
>> 5. Si $T_N\neq 0$, por compacto tendría un autovalor no nulo $\lambda$ con autovector $\tilde e\in N$. Absurdo por que aveces están en $M$ 
>> 6. Conclusión: $T_N=0$, es decir, $T(N)=\{0\}$, lo cual implica $N\subseteq\ker T$.
>> 7. Por tanto $\ker T^\perp=\overline{\mathrm{Im}T}\subseteq M$
>> 8. Finalmente, para todo $x$, como $(I-P)x\in M^\perp=\ker T$, se cumple $T((I-P)x)=0$, y usando $(Px,e_n)=(x,e_n)$ obtenemos $$Tx = T(Px + (I - P)x) =T(Px)=\sum^{J}_{n=1}\lambda_{n}(Px,e_{n})e_{n} = \sum_{n=1}^{J} \lambda_n (x, e_n)e_n$$

^e7a5da

