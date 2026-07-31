### Ejercicio 1

>[!Exercise] 
>Sea $\phi:(-\pi/4,\pi/2)\to\mathbb R^2$ dada por $\phi(t)=\sin(2t)(\cos t,\sin t)$. Graficar la imagen y probar que $( (-\pi/4,\pi/2),\phi)$ es una subvariedad que no es incrustada.
>
>>[!Proof]-
>>- **$\phi$ es inyectiva**
>>	1. Sea $t_1,t_2\in(-\pi/4,\pi/2)$ tales que $\phi(t_1)=\phi(t_2)$.  
>>	2. Como $\phi(t)=\sin(2t)(\cos t,\sin t),$ tenemos $$\|\phi(t)\|=|\sin(2t)|.$$
>>	3. Entonces $$\phi(t)=0\iff \sin(2t)=0.$$
>>	4. En el intervalo $(-\pi/4,\pi/2)$, esto ocurre solamente para $t=0$.
>>	5. Por lo tanto, si $\phi(t_1)=\phi(t_2)=0$, entonces $t_1=t_2=0$. 
>>	6. Supongamos ahora que $\phi(t_1)=\phi(t_2)\neq 0$.  
>>	7. Entonces $t_1,t_2\neq 0$, y podemos normalizar: $$\frac{\phi(t)}{\|\phi(t)\|}=\operatorname{sgn}(\sin(2t))(\cos t,\sin t).$$
>>	8. Como $\phi(t_1)=\phi(t_2)$, se sigue que $$\operatorname{sgn}(\sin(2t_1))(\cos t_1,\sin t_1)=\operatorname{sgn}(\sin(2t_2))(\cos t_2,\sin t_2).$$
>>	9. Si $t_1$ y $t_2$ tienen el mismo signo, entonces $\sin(2t_1)$ y $\sin(2t_2)$ tienen el mismo signo. Luego $$(\cos t_1,\sin t_1)=(\cos t_2,\sin t_2).$$
>>	10. Como $t_1,t_2\in(-\pi/4,\pi/2)$, necesariamente $t_1=t_2$. 
>>	11. Si $t_1$ y $t_2$ tienen signos opuestos, entonces $\sin(2t_1)$ y $\sin(2t_2)$ tienen signos opuestos. Luego $$(\cos t_1,\sin t_1)=-(\cos t_2,\sin t_2).$$
>>	12. Esto implicaría que las direcciones difieren en $\pi$, es decir, $$t_1-t_2\equiv \pi \pmod{2\pi}.$$
>>	13. Pero esto es imposible, porque el intervalo $(-\pi/4,\pi/2)$ tiene longitud $$\frac{\pi}{2}-\left(-\frac{\pi}{4}\right)=\frac{3\pi}{4}<\pi.$$
>>	14. Por lo tanto, el caso de signos opuestos no puede ocurrir.
>>	15. Concluimos que $$\phi(t_1)=\phi(t_2)\implies t_1=t_2.$$
>>	16. Luego $\phi$ es inyectiva.
>>- **La aplicación $\phi$ es suave e inmersión**
>>	1. Notamos que $$\phi'(t)=\bigl(2\cos(2t)\cos t-\sin(2t)\sin t,\;2\cos(2t)\sin t+\sin(2t)\cos t\bigr),$$ que es el diferencial
>>	2. Y en $t=0$ vale $\phi'(0)=(2,0)\neq 0$, mientras que para $t\neq 0$ tampoco puede anularse porque $\phi(t)=r(\cos t,\sin t)$ con $r' = 2\cos(2t)$ y la derivada tiene una componente radial o angular no nula.
>>	3. Por lo tanto es inyectivo
>>	4. Y ademas usando las cartas identidad se ve que $Id \circ\phi \circ Id=\phi$ que es suave
>>- **$\phi$ no es incrustada**
>>	1. No es incrustada porque no es homeomorfismo sobre su imagen con la topología de subespacio heredada de $\mathbb{R}^{2}$
>>	2. Por ejemplo, si $t_n=\pi/2-1/n$, entonces $p_{n}=\phi(t_n)\to(0,0)$ y $t_n\not\to 0$. Luego $\phi^{-1}$ no es continua en el origen.
>>	3. Por que si lo fuese $\phi ^{-1}(p_{n})$ deberia converger a $\phi ^{-1}(0,0)=0$ pero $\phi ^{-1}(p_{n})=t_{n}=\frac{\pi}{2}-\frac{1}{n}$ que no tiende a $0$    

### Ejercicio 2

>[!Exercise] 
>Sea $M\subset N$ una subvariedad. Sea $\phi:(a,b)\to N$ una curva diferenciable tal que $\phi((a,b))\subset M$. Mostrar que no es necesariamente cierto que $\dot\phi(t)\in(d\iota)_{\phi(t)}(T_{\phi(t)}M)$ para todo $t$, donde $\iota:M\to N$ es la inclusión.
>[[GS - Pr3#^800b80]]
>
>>[!Proof]-
>>3. Suponemos que $N=\mathbb{R}^{2}$ 
>>4. Tomemos la subvariedad $((0,2\pi),\phi)$ con $$\phi(t)=\left(\frac{\sin(2t)}{2},\sin t\right)$$
>>5. En $\phi(0,2\pi)=M$ tomamos como topologia la heredada de $\phi$. Asi es directo que $M$ es variedad topologica, con $((0,2\pi),\phi)$ como carta que nos da una estructura suave para el ocho (aca implicitamente estoy usando que $\iota$ no es incrustacion, si no $M$ tendria que tener la topologia relativa a $\mathbb{R}^{2}$) 
>>6. Primero notamos $$d\phi_{\pi}:T_{\pi}\left( 0, 2\pi\right)\rightarrow T_{p}M$$ (con $p=\phi(\pi)=(0,0)$) es un isomorfismo lineal por que $\phi$ es un difeomorfismo (por que tomamos la estructura transportada, con la topologia heredada de $\mathbb{R}^{2}$ esta claro que no es homeo, si no seria incrustacion, notar que al tratar de usar las sucesiones para ver que no es homeo, no tenemos el mismo ejemplo con la topologia transportada, por que $p_{n}=\phi\left( \frac{1}{n} \right)$ no converge a $(0,0)$ por que hay abiertos del $(0,0)$ que no contienen a $p_{n}$ con esta nueva topologia)
>>7. Como es isomorfismo $d\phi_{0}\left( \frac{d}{dt}|_{0} \right)$ nos da una base del $T_{p}M$ 
>>8. Luego por regla de la cadena $$(di)_{p}\left( d\phi_{\pi}\left( \frac{d}{dt}|_{0} \right) \right)=d(i\circ\phi)_{\pi}\left( \frac{d}{dt}|_{0} \right)=d\phi_{\pi}\left( \frac{d}{dt}|_{0} \right)=\phi'(\pi)=(1,-1)$$ 
>>9. Por lo tanto $$ (d\iota)_p(T_pM)=\mathbb R(1,-1),$$
>>10. Osea que de alguna manera una vez que definimos la estrucutra diferencaible para $M$ nos queda univocamente definido $(d\iota)_{p}(T_{p}M)$  
>>11. Ahora si tomamos $\tilde{\phi}(t):(-\pi,\pi)\rightarrow \mathbb{R}^{2}$ dada por $\tilde{\phi}(t)=\left(\frac{\sin(2t)}{2},\sin t\right)$ es claro que $\widetilde{\phi}(-\pi,\pi)\subseteq M$ 
>>12. Sin embargo notemos que $\tilde{\phi}(0)=(0,0)=\phi(\pi)$ pero $$\tilde{\phi}'(0)=(1,1)\not\in\mathbb{R}(1,-1)=(d\iota)_{p}(T_{p}M)$$
>>13. Esto muestra que, si $M$ no es incrustada, una curva diferenciable en el ambiente cuya imagen cae en el subconjunto $M$ no necesariamente tiene velocidad perteneciente a la imagen del espacio tangente de $M$ por la inclusión.  
>>14. La moraleja es que, si $\iota$ no es incrustacion, la topología y la estructura diferenciable de $M$ no tienen por qué coincidir con las de $M$ como subconjunto de $N$.

### Ejercicio 3

>[!Exercise]
>Sea $(M,\psi)$ una subvariedad de $N$. Mostrar que si $M$ es compacta, entonces es incrustada.
>
>>[!Proof]-
>>1. Por definición, $\psi:M\to N$ es una inmersión inyectiva. 
>>2. Como $M$ es compacta y $N$ es Hausdorff (por ser variedad), la restricción $$\psi:M\to\psi(M)$$ es una aplicación continua (por que antes de corestringir era suave por lo tanto continua y restriccion de continua es continua) biyectiva.
>>3. Ademas $\psi(M)$ es Hausdorff por ser subespacio de $N$ que es Hausdorff por ser variedad topologica
>>4. Como $\psi$ sale de un compacto y cae a un Hausdorff entonces es cerrada, por que dado un cerrado $C\subseteq M$ como $M$ compacto entonces $C$ es compacto. Luego $\psi(C)\subseteq \psi(M)$ es compacto. Pero como $\psi(M)$ es Hausdorff todo compacto es cerrado, luego $\psi(C)$ es cerrado.
>>5. Luego $\psi$ es biyectiva y cerrado entonces es un homeomorfismo. 
>>6. Por lo tanto $\psi$ es una inmersión que además es homeomorfismo sobre su imagen: es una incrustación.

### Ejercicio 4

>[!Exercise]
>Mostrar que $k$ funcionales lineales $\lambda_1,\dots,\lambda_k$ en $\mathbb R^m$ son linealmente independientes si y sólo si $\dim\bigl(\bigcap_{i=1}^k\ker(\lambda_i)\bigr)=m-k$.
>
>>[!Proof]-
>>1. Consideremos la aplicación lineal $$T:\mathbb R^m\to\mathbb R^k,\qquad T(x)=(\lambda_1(x),\dots,\lambda_k(x)).$$
>>2. Luego $$\ker T=\bigcap_{i=1}^{k}\ker(\lambda_{i})$$ 
>>3. Ahora miramos el pullback $$T^{*}:(\mathbb{R}^{k})^{*}\rightarrow(\mathbb{R}^{m})^{*}$$ y miramos la base estandar del dual $(\mathbb{R}^{k})^{*}$ dada por $\{ e^{1},\ldots,e^{k} \}$ 
>>4. Luego $T^{*}(e^{i})=e^{i}T$ entonces $T^{*}(e^{i})(x)=e^{i}(T(x))$ y recordemos que $e^{i}$ nos da la $i$-esima coordenada de cualquier vector en $\mathbb{R}^{k}$ en la base predual (que aca seria la estandar de $\mathbb{R}^{k}$)  que seria $\lambda_{i}(x)$ mostrando que $T^{*}(e^{i})=\lambda_{i}$      
>>5. Entonces $\lambda_{i}$ son independientes si y solo si $T^{*}$ es inyectiva si y solo si $\dim Im=\dim Dm$ si y solo si rango$(T^{*})=k$ si y solo si rango$(T)=k$ si y solo si $m-k=\dim \ker (T)$ 

### Ejercicio 5

>[!Exercise]
>Sea $M$ una variedad de dimensión $m$ y $p\in M$.
>
>- (a) Si $y_1,\dots,y_n$ con $n<m$ son funciones independientes en $p$, mostrar que forman parte de un sistema coordenado en un entorno de $p$.
>- (b) Si $f:M\to N$ es suave y $(df)_p$ es sobreyectiva, y $(x_1,\dots,x_n)$ es un sistema coordenado cerca de $f(p)$, mostrar que $x_1\circ f,\dots,x_n\circ f$ forman parte de un sistema coordenado cerca de $p$.
>
>>[!Proof]-
>>- (a)
>>	1. Como $(dy_1)_p,\dots,(dy_n)_p$ son linealmente independientes (sobre $O$ )  en $T_p^*M$, se pueden completar a una base de $T_p^*M$ con covectores $\eta_{n+1},\dots,\eta_m$. 
>>	2. Tomando una carta $(U,x_1,\dots,x_m)$ alrededor de $p$, sabemos que entonces $\{ (dx_{1})_{p}\ldots,(dx_{m})_{p} \}$ es base de $(T_{p}M)^{*}$
>>	3. Pero entonces puedo completar usando $(dx_{j_{1}})_{p},\ldots (dx_{j_{m-n}})_{p}$ 
>>	4. Obteniendo asi la base $$\{ (dy_1)_p,\dots,(dy_n)_p,(dx_{j_{1}})_{p},\ldots (dx_{j_{m-n}})_{p} \}$$ del $(T_{p}M)^{*}$ 
>>	5. Finalmente $(y_{1},\ldots,y_{n},x_{j_{1}}\ldots,x_{j_{m-n}})$ son independientes sobre $U\cap O$ en $p$ entonces por [[GS - Teo10#^2b23b2]] $(V,\psi=(y_{1},\ldots,y_{n},x_{j_{1}}\ldots,x_{j_{m-n}}))$ carta
>>- (b) 
>>	1. Si $(df)_p:T_{p}M\rightarrow T_{f(p)}N$ es sobreyectiva (ya esto nos dice $n\leq m$), entonces el pullback $$(df)_p^*:T_{f(p)}^*N\to T_p^*M$$ es inyectivo. 
>>	2. Como $(x_{1},\ldots,x_{n})$ son sistema coordenado entonces $\{(dx_1)_{f(p)},\dots,(dx_n)_{f(p)}\}$ son base de $(T_{f(p)}N)^{*}$ con lo cual son linealmente independientes, luego por inyeccion también lo son sus imágenes
>>	3. Recordemos $$(df)_{p}^{*}((dx_{j})_{f(p)})=(dx_{j})_{f(p)}\circ(df)_{p}=d(x_{j}\circ f)_{p}$$ por lo tanto $d(x_{1}\circ f)_{p},\ldots d(x_{n}\circ f)_{p}$ son independientes
>>	4. Aplicando el primer punto a las funciones $x_1\circ f,\dots,x_n\circ f$, concluimos que forman parte de un sistema coordenado cerca de $p$.

### Ejercicio 6

>[!Exercise]
>Una función diferenciable $\pi:M\to N$ se dice una **submersión** si $$d\pi_p:T_pM\to T_{\pi(p)}N$$ es suryectiva para todo $p\in M$.
>- (a) **Forma local de una submersión.** Probar que si $\pi:M^m\to N^n$ es una submersión, entonces dado $p\in M$ existen sistemas coordenados $(U,\varphi)$ alrededor de $p$ en $M$ y $(V,\psi)$ alrededor de $\pi(p)$ en $N$ tales que $$\psi\circ\pi\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_n)$$ es la proyección sobre las primeras $n$ coordenadas.
>- Probar que toda submersión es abierta.
>
>>[!Proof]-
>>- (a)
>>	1. Como $\operatorname{rango}(d\pi)_p=n$ para todo $p$, el teorema del rango constante da cartas $(U,\varphi)$ en $M$ alrededor de $p$ y $(V,\psi)$ en $N$ alrededor de $\pi(p)$ tales que $$\psi\circ\pi\circ\varphi^{-1}(x_1,\dots,x_m)=(x_1,\dots,x_n).$$
>>	2. Es decir, localmente una submersión es la proyección sobre las primeras $n$ coordenadas.
>>- (b)
>>	1. Sea $W\subset M$ abierto queremos ver que $\pi(W)$ es abierto entonces tomamos $q=\pi(p)\in\pi(W)$. 
>>	2. Tomamos cartas como arriba con $p\in U\subset W$. Esto lo podemos hacer por que tomamos $U= \tilde{U}\cap W$ donde $(\tilde{U},\varphi)$ era la carta. Y ahora tenemos $(U,\varphi|_{U})$ sigue siendo carta
>>	3. Ahora tomamos la forma local $$\psi\circ\pi\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_n)$$ y la podemos ver restringida es lo mismo $$\psi\circ\pi\circ\varphi|_{U}^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_n)$$
>>	4. Pero entonces $$\psi\circ\pi(U)=\psi\circ\pi\circ\varphi|_{U}^{-1}(\varphi(U))=pr_{1,\ldots,n}(\varphi(U))$$
>>	5. Luego $$\pi(U)=\psi^{-1}\circ pr_{1,\ldots,n}(\varphi(U))$$ que es abierto por que $\varphi(U)$ es abierto por ser $\varphi$ homeomorfismo y $pr$ es una funcion abierta por lo tanto $pr(\varphi(U))$ es abierto y $\psi$ es homeomorfismo  
>>	6. Por lo tanto tenemos un abierto $\pi(U)$ que contien a $q=\pi(p)$ y esta contenido en $\pi(W)$. Mostrando que $\pi(W)$ es abierto  

^466288

### Ejercicio 7

>[!Exercise]
>Probar que no existe una inmersión de una variedad compacta $M$ de dimensión $n$ en $\mathbb R^n$.
>
>>[!Proof]-
>>1. Si $F:M\to\mathbb R^n$ fuera una inmersión, entonces $(dF)_p$ sería un isomorfismo para todo $p$. Por que inyeccion nos dice que $dim\ker (dF)_{p}=0$ entonces $\dim im (dF)_{p}=\dim T_{p}M=\dim M=n$ por lo tanto $(dF)_{p}$ es sobreyectiva osea es isomorfismo  
>>2. Por el teorema de la función inversa, $F$ es un difeomorfismo local; 
>>3. En particular es una aplicación abierta. Por que difeomorfimos local es para cada $p\in M$ existen abiertos $U_{p}\subseteq M$ y $V_{p}\subseteq \mathbb{R}^{n}$ tales que $$F|_{U_{p}}:U_{p}\rightarrow V_{p}$$ es difeomorfimos.
>>4. Luego dado $U$ abierto tenemos que $$F(U)=\bigcup_{p\in U} F(U_{p})=\bigcup_{p\in U}V_{p}$$ que es union de abiertos
>>5. Luego $F(M)\subseteq \mathbb{R}^{n}$ es abierto por que $M$ es abierto pero tambien es compacta y como $\mathbb{R}^{n}$ es Hausdorff entonces es cerrada
>>6. Luego $F(M)$ es abierto y cerrado y como $\mathbb{R}^{n}$ es conexo entonces $F(M)=\mathbb{R}^{n}$ 
>>7. Lo cual es absurdo por que $\mathbb{R}^{n}$ no es compacto

### Ejercicio 8 (Opcional)

>[!Exercise]
>Sean $M,N,P$ variedades y $\pi:M\to N$ una submersión. Probar las propiedades pedidas.
>
>>[!Proof]-
>>Todas se deducen de la forma local de una submersión.
>>
>>- **Secciones locales.** Cerca de cualquier $p\in M$, en coordenadas $\pi$ es la proyección $(x_1,\dots,x_m)\mapsto(x_1,\dots,x_n)$. Entonces una sección local está dada por
>>$$\sigma(x_1,\dots,x_n)=(x_1,\dots,x_n,0,\dots,0).$$
>>
>>- **Suavidad detectada por composición.** Si $H$ es suave, entonces $H\circ\pi$ también. Recíprocamente, si $H\circ\pi$ es suave y $q\in N$, tomamos una sección local $\sigma$ alrededor de $q$. Entonces
>>$$H|_V=(H\circ\pi)\circ\sigma,$$
>>luego $H$ es suave cerca de $q$, y por tanto en todo $N$.
>>
>>- **Bajar funciones.** Si $F:M\to P$ es constante en las fibras, definimos $\widetilde F(q)=F(p)$ para cualquier $p\in\pi^{-1}(q)$. Está bien definida por hipótesis. Para ver suavidad, en un abierto $V$ con sección local $\sigma$ se tiene
>>$$\widetilde F|_V=F\circ\sigma,$$
>>que es suave. La unicidad es obvia porque $\pi$ es sobreyectiva.
>>
>>- **Levantamiento de curvas.** En coordenadas locales donde $\pi$ es la proyección, si $\alpha(t)=(a_1(t),\dots,a_n(t))$ y $p$ corresponde a $(a(0),b_0)$, basta definir
>>$$\gamma(t)=(a_1(t),\dots,a_n(t),\,b_{n+1}(t),\dots,b_m(t)),$$
>>eligiendo las últimas coordenadas de modo que $\gamma(0)=p$ y $\gamma'(0)=v$. Entonces $\pi\circ\gamma=\alpha$.

### Ejercicio 9

>[!Exercise] 
>Probar que si $F:M\to N$ es una biyección diferenciable y $(dF)_{p}$ no singular en todo punto, entonces $F$ es un difeomorfismo.
>
>>[!Proof]-
>>1. Queremos probar que $F^{-1}:N\to M$ es suave.
>>2. Como la suavidad es local, basta probar que $F^{-1}$ es suave en un entorno de cada punto de $N$.
>>3. Sea $q\in N$. Como $F$ es biyectiva, existe un único $p\in M$ tal que $F(p)=q$.
>>4. Como $(dF)_p$ es no singular, por el teorema de la función inversa existen abiertos $U\subset M$ de $p$ y $V\subset N$ de $q$ tales que $$F|_U:U\to V$$ es un difeomorfismo.
>>5. Por lo tanto $$(F|_U)^{-1}:V\to U$$ es suave.
>>6. Como $F$ es biyectiva, para todo $y\in V$ se tiene $F^{-1}(y)=(F|_U)^{-1}(y)$.
>>7. Entonces $$F^{-1}|_V=(F|_U)^{-1}.$$
>>8. Así, $F^{-1}$ es suave en un entorno de $q$. Como $q\in N$ era arbitrario, $F^{-1}$ es suave.
>>9. Como $F$ es ya era continua y suave entonces $F$ es un difeomorfismo.

### Ejercicio 10

>[!Exercise]
>- (a) Dar una estructura diferenciable a $T^*M$.
>- (b) Probar que las proyecciones canónicas $\pi:TM\to M$ y $\pi^*:T^*M\to M$ son submersiones.
>
>>[!Proof]-
>>- (a) 
>>	1. Si $(U,x_1,\dots,x_m)$ es una carta de $M$ (de dimension $m$) , toda covector $\alpha_p\in T_p^*M$ se escribe de manera única como $$\alpha_p=\sum_{i=1}^m \xi_i\,(dx_i)_p.$$
>>	2. Definimos entonces la carta inducida $(\widetilde{U},\widetilde{\varphi})$ en $T^*M$ (donde $\tilde{U}=(\pi^{*})^{-1}(U)$ con $(\pi^{*})$ la que manda $(p,v)\mapsto p$ con $v\in T^{*}M$, analogo a [[GS - Teo7#^4762ec]]) por $$\widetilde \varphi:\ (\pi^*)^{-1}(U)\to x(U)\times\mathbb R^m,\qquad \widetilde \varphi(p,\alpha_p)=\bigl(x_1(p),\dots,x_m(p),\xi_1,\dots,\xi_m\bigr).$$ 
>>	3. Esta aplicación es biyectiva, y su inversa es $$\widetilde\varphi^{-1}(r_1,\dots,r_n,t_1,\dots,t_n)=\left(\varphi^{-1}(r_1,\dots,r_n),\sum_{i=1}^m t_i(dx_{i})_{p}\right).$$
>>	4. Esta claro que estas cartas cubren todo $TM$. Veamos que son compatibles
>>	5. Sean $(\tilde{V},\tilde{\psi})$ y $(\tilde{U},\tilde{\varphi})$ dos cartas de $TM^{*}$ asociadas a $(V,\psi=(y_1,\dots,y_n))$ y $(U,\varphi=(x_{1},\ldots x_{n}))$ tales que $\tilde{V}\cap \tilde{U}\neq 0$, luego $V\cap U\neq0$
>>	6. Entonces $$\tilde{\psi}\circ \tilde{\varphi}^{-1}:\tilde{\varphi}(\tilde{U}\cap \tilde{V}) \subset \mathbb{R}^{2m}\longrightarrow\tilde{\psi}(\tilde{U}\cap \tilde{V}) \subset \mathbb{R}^{2m}$$ que es: $$\begin{align}(r_{1},\ldots r_{n},t_{1},...,t_{n})&\longmapsto^{\tilde{\varphi}^{-1}} \left(\tilde{\varphi}^{-1}(r),\sum_{i=1}^m t_i(dx_{i})_{p}\right)\\&\longmapsto^{\tilde{\psi}}\left(y_{1}(\tilde{\varphi}^{-1}(r)),\ldots,y_{n}(\tilde{\varphi}^{-1}(r)),\sum_{i=1}^m t_i(dx_{i})_{p}\left(\frac{\partial}{\partial y_1}\right),\ldots,\sum_{i=1}^m t_i(dx_{i})_{p}\left(\frac{\partial}{\partial y_n}\right)\right)\\&=\left((\psi\circ\varphi^{-1})(r),\sum^{m}_{i=1}t_{i}\left(\frac{\partial}{\partial y_1}\bigg|_{p}\right)x_{i},\ldots\sum^{m}_{i=1}t_{i}\left(\frac{\partial}{\partial y_n}\bigg|_{p}\right)x_{i} \right)\\&=\bigg((\psi\circ\varphi ^{-1})(r),\sum_{i=1}^m t_i\frac{\partial}{\partial r_i}(\varphi\circ\psi ^{-1})_{1}(r),\ldots,\sum_{i=1}^m t_i\frac{\partial}{\partial r_i}(\varphi\circ\psi ^{-1})_{n}(r)\bigg)\end{align}$$
>>	7. Obviamente las primeras coordendas son suaves por que son el cambio de coordenadas, y la segunda tanda de coordenadas cada derivada parcial es suave por que $\psi\circ\varphi ^{-1}$ es suave y proyectar en la primera coordenada es suave entonces son sumas de suaves
>>	8. Y obviamente cambiando los roles obtenemos que la otra composicion es suave tambien
>>	9. Por lo tanto, las cartas $\{(\widetilde U,\widetilde\varphi)\}$ formarian un atlas suave sobre $(TM)^{*}$ de dimensión es $2m$. (Si $\tilde{U},\tilde{V}$ fueran abiertos).
>>	10. Ahora habria que ver toda la parte de abiertos igual que en fibrado tangente
>>- (b)
>>	1. Miremos $$f=\varphi\circ\pi\circ \widetilde{\varphi}^{-1}:\varphi(U)\times\mathbb{R}^{n} \rightarrow \varphi(U)$$ donde $(U,\varphi)$ es carta y $(\widetilde{U},\widetilde \varphi)$ es la carta inducida. y es directo ver que $$f(x_{1}(p),\ldots,x_{m}(p),v_{1},\ldots,v_{m})=(x_{1}(p),\ldots,x_{m}(p))$$ osea es una proyeccion que sabemos que su diferencial es sobreyectiva. Por que te queda la identidad de tamaño $m$ con ceros. Y eso tiene rango $m$ que es la misma dimension que la imagen que esta en $\mathbb{R}^{m}$ (por que la variedad es de dimension $m$)   
>>	2. Pero entonces como $df$ es sobre y $d\varphi,(d \widetilde{\varphi})^{-1}$ son isomorfimos (por ser cartas). Podemos concluir que $d\pi$ es sobreyectiva osea es submersion
>>	3. Analogo con $(d\pi)^{*}$ 

### Ejercicio 11

>[!Exercise] 
>Sean $\pi:M\to N$ una submersión, $S$ una variedad y $f:S\to M$ una aplicación suave tal que $\pi\circ f:S\to N$ es un difeomorfismo. Probar que $(S,f)$ es una subvariedad incrustada de $M$.
>
>>[!Proof]-
>>1. Sea $h=\pi\circ f$ entonces $r=h^{-1}\circ \pi:M\rightarrow S$ es suave por ser composicion de suaves (como $h$ difeo el dominio de $h^{-1}$ es todo $N$ entonces no estoy cambiando el codominio de $\pi$)
>>2. Ademas $$r\circ f=h^{-1}\circ\pi\circ f=h^{-1}\circ h=Id_{S}$$
>>3. Afirmamos **$f$ es inyectiva**. Dados $f(s_{1})=f(s_{2})$ tenemos que $$s_{1}=r(f(s_{1}))=r(f(s_{2}))=s_{2}$$ (sale usando 2.)
>>4. Tambien por 2. $$d(r\circ f)_{s}=d(Id_{S})_{s}$$
>>5. Primero notemos que $d(Id_{S})_{s}(v)\in T_{s}S$ pero ademas $d(Id_{S})_{s}(v)(f)=v(f\circ Id_{S})=v(f)$  y esto vale para cualqiuer $f$ entonces $d(Id_{S})_{s}(v)=v$. Por lo tanto $d(Id_{S})_{s}=Id_{T_{s}S}$ 
>>6. Ademas por regla de la cadena tenemos $$dr_{f(s)}\circ df_{s}=Id_{T_{s}S}$$
>>7. Entonces podemos ver inyectividad, dados $v_{1},v_{2}\in T_{s}S$ tales que $df_{s}(v_{1})=df_{s}(v_{2})$ tenemos que $$v_{1}=Id_{T_{s}S}(v_{1})=dr_{f(s)}(df_{s}(v_{1}))=dr_{f(s)}(df_{s}(v_{2}))=Id_{T_{s}S}(v_{2})=v_{2}$$ mostrando que $df_{s}$ es inyectiva (para cualquier $s$). Entonces **$f$ es inmersion**
>>8. Con lo cual **$(S,f)$ es subvariedad**.
>>9. Sabemos que $f:S\rightarrow f(S)$ es biyectiva pero por 2.  es directo ver que $$r|_{f(S)}:f(S)\rightarrow S$$ es su inversa y considerando que $f(S)$ tiene la topologia heredada de $M$ y $r:M \rightarrow S$ es continua entonces $r|_{f(S)}$ es continua
>>10. Por lo tanto $f:S\rightarrow f(S)$ es homeomorfismo si $f(S)$ tiene la topologia heredada de $M$
>>11. Entonces $(S,f)$ es subvariedad **incrustada** de $M$ 
 
### Ejercicio 12

>[!Exercise]
>Sea $(M,\phi)$ una subvariedad incrustada de $N$ con $\dim M<\dim N$. Probar que $\phi(M)$ no es densa en $N$.
>
>>[!Proof]-
>>1. Sea $p\in \phi(M)$ y sean $m=\dim M<n=\dim N$.
>>2. Como $(M,\phi)$ es una subvariedad incrustada de $N$, existe una carta adaptada $(V,\psi=(y_1,\ldots,y_n))$ de $N$ alrededor de $p$ tal que $$V\cap \phi(M)=R(0,\ldots,0).$$
>>3. Por definición de rebanada, $$R(0,\ldots,0)=\{q\in V:y_{m+1}(q)=\cdots=y_n(q)=0\}.$$
>>4. Evaluando en la carta $\psi$, tenemos $$\psi(V\cap\phi(M))=\psi(R(0,\ldots,0)).$$
>>5. Ahora, si $q\in R(0,\ldots,0)$, entonces $$\psi(q)=(y_1(q),\ldots,y_n(q)),$$ con $$y_{m+1}(q)=\cdots=y_n(q)=0.$$ Por lo tanto, $$\psi(q)\in \psi(V)\cap(\mathbb R^m\times\{0\}).$$
>>6. Recíprocamente, si $$z\in \psi(V)\cap(\mathbb R^m\times\{0\}),$$ entonces existe $q\in V$ tal que $z=\psi(q)$. Además, como $z\in \mathbb R^m\times\{0\}$, sus últimas coordenadas son cero. Es decir, $$y_{m+1}(q)=\cdots=y_n(q)=0.$$ Entonces $q\in R(0,\ldots,0)$ y por lo tanto $$z=\psi(q)\in \psi(R(0,\ldots,0)).$$
>>7. Así, $$\psi(R(0,\ldots,0))=\psi(V)\cap(\mathbb R^m\times\{0\}).$$ Luego $$\psi(V\cap\phi(M))=\psi(V)\cap(\mathbb R^m\times\{0\}).$$
>>8. Supongamos, por absurdo, que $\phi(M)$ es densa en $N$. Entonces, como $V$ es abierto de $N$, se tiene que $$V\cap\phi(M)$$ es denso en $V$ por [[GS - Pr3#^db8cf9]]
>>9. Como $\psi:V\to\psi(V)$ es un homeomorfismo, preserva densidad. Luego $$\psi(V\cap\phi(M))$$ es denso en $\psi(V)$.
>>10. Pero, por el paso 7, $$\psi(V\cap\phi(M))=\psi(V)\cap(\mathbb R^m\times\{0\}).$$
>>11. Tomamos $a\in V\cap\phi(M)$ entonces $\psi(a)\in \psi(V)\cap(\mathbb R^m\times\{0\})$ como $\psi(a)\in \psi(V)$ que es abierto tenemos $$B_{r}(\psi(a))\subseteq \psi(V)$$
>>12. Ahora tomamos $q=\psi(a)+\frac{r}{2}e_{m+1}$ (osae $q_{m+1}=\frac{r}{2}$) entonces $\lVert q-\psi(a) \rVert=\frac{r}{2}$ osea $q\in B_{r}(\psi(a))\subseteq \psi(V)$  
>>13. Ahora tomamoas $B_{\tilde{r}}(q)$ con $\tilde{r}=\frac{r}{4}$ entonces $B_{\tilde{r}}(q)\subseteq B_{r}(\psi(a))$ por que si $z\in B_{\tilde{r}}(q)$ entonces $$\lVert z-\psi(a) \rVert\leq \lVert z-q \rVert+\lVert q-\psi(a) \rVert\leq \frac{r}{4}+\frac{r}{2}<r$$  
>>14. Ademas nos asegura que cualquier punto $\tilde{q}\in B_{\tilde{r}}(q)$ cumple $\tilde{q}_{m+1}>0$ por que $$|\tilde q_{m+1} -q_{m+1}|<\tilde{r}$$ pero $q_{m+1}=\frac{r}{2}$ entonces $\tilde{q}_{m+1}>-\tilde{r}+\frac{r}{2}=\frac{r}{2}-\frac{r}{4}>0$.
>>15. Por ende $B_{\tilde{r}}(q)\cap (\mathbb{R}^{m}\times \{ 0 \})=\emptyset$ entonces $$\psi(V\cap\phi(M))\cap B_{\tilde{r}}(q)=\emptyset$$ que es absurdo por que $\psi(V\cap\phi(M))$ era denso en $\psi(V)$ y $B_{\tilde{r}}(q)$ es abierto   
>>16. Así, $\psi(V)\cap(\mathbb R^m\times\{0\})$ no es denso en $\psi(V)$, contradiciendo el paso 9.
>>17. Por lo tanto, $\phi(M)$ no es densa en $N$.
### Ejercicio 13

>[!Exercise]
>- Pruebe que todo subgrupo de $(\mathbb R,+)$ cíclico y generado por un $a>0$ o es un subconjunto denso de $\mathbb R$.  
>- Sea $\alpha$ un número irracional y considere el conjunto $$\{(x,y)\in\mathbb R^2:x=t+n,\ y=\alpha t+m\text{ con }t\in\mathbb R\text{ y }m,n\in\mathbb Z\}$$ es un subconjunto denso de $\mathbb R^2$.  
>- Sean $S^1$ la circunferencia unitaria en $\mathbb C$ y $\mathbb T^2$ el toro $S^1\times S^1$. Se define la función $\varphi:\mathbb R\to\mathbb T^2$ por $$\varphi(t)=\left(e^{2\pi it},e^{2\pi i\alpha t}\right),$$ donde $\alpha$ es un número irracional. Mostrar que $(\mathbb R,\varphi)$ es una subvariedad densa de $\mathbb T^2$ que no es una incrustación. Verificar que $\varphi$ es un homomorfismo de grupos.
>
>>[!Proof]-  
>>1. Sea $H\leq(\mathbb R,+)$. Si $H=\{0\}$, entonces $H$ es cíclico. Supongamos ahora que $H\neq\{0\}$. Entonces $H\cap\mathbb R_{>0}\neq\varnothing$, porque si $h\in H$ y $h\neq 0$, entonces $|h|\in H\cap\mathbb R_{>0}$.  
>>2. Definimos $$a=\inf(H\cap\mathbb R_{>0}).$$  
>>3. Supongamos primero que $a>0$. Probamos que $a\in H$. Por definición de ínfimo, existen $h_n\in H\cap\mathbb R_{>0}$ tales que $h_n\to a$. Si $a\notin H$, entonces podemos tomar $h_n,h_m$ suficientemente cerca de $a$ con $h_n>h_m$ y $$0<h_n-h_m<a.$$ Pero $h_n-h_m\in H$, por que $h_{n}-h_{m}=h_{n}+(-h_{m})$ que es suma de cosas dentro de $H$ (ademas esta en $\mathbb{R}_{>0}$ por ser positivo) contradiciendo la definición de $a$ como ínfimo de los elementos positivos de $H$. Por lo tanto $a\in H$.  
>>4. Probamos ahora que $H=a\mathbb Z$. Sea $h\in H$. Existe $q\in\mathbb Z$ tal que $$qa\leq h<(q+1)a.$$ Entonces $$0\leq h-qa<a.$$ Como $h,qa\in H$, se tiene $h-qa\in H$. Si $h-qa>0$, contradice la minimalidad de $a$. Por lo tanto $h-qa=0$, y entonces $h=qa$. Así, $$H=a\mathbb Z.$$  
>>5. Supongamos ahora que $a=0$. Sea $(u,v)\subseteq\mathbb R$ un intervalo abierto no vacío. Como $a=0$, existe $h\in H\cap\mathbb R_{>0}$ tal que $$0<h<v-u.$$ Tomamos $n\in\mathbb Z$ tal que $$u<nh<v.$$ Entonces $nh\in H\cap(u,v)$. Por lo tanto todo intervalo abierto no vacío corta a $H$, y entonces $H$ es denso en $\mathbb R$.  
>>6. Para la segunda parte, consideremos el subgrupo $$G=\mathbb Z+\alpha\mathbb Z=\{m+n\alpha:m,n\in\mathbb Z\}\leq\mathbb R.$$
>>7. Este subgrupo no puede ser cíclico. En efecto, si $G=a\mathbb Z$ para algún $a>0$, como $1,\alpha\in G$, existen $k,\ell\in\mathbb Z$ tales que $$1=ka,\qquad \alpha=\ell a.$$ Entonces $$\alpha=\frac{\ell}{k},$$ contradiciendo que $\alpha$ es irracional. Por el punto anterior, $G$ es denso en $\mathbb R$.  
>>8. Probamos que $$A=\{(x,y)\in\mathbb R^2:x=t+n,\ y=\alpha t+m,\ t\in\mathbb R,\ m,n\in\mathbb Z\}$$ es denso en $\mathbb R^2$. Sea $(X,Y)\in\mathbb R^2$ y sea $\varepsilon>0$. Como $G$ es denso en $\mathbb R$, existe $m-\alpha n\in G$ tal que $$|m-\alpha n-(Y-\alpha X)|<\varepsilon.$$  
>>9. Tomamos $$t=X-n.$$ Entonces $$t+n=X,$$ y además $$\alpha t+m=\alpha(X-n)+m=\alpha X+(m-\alpha n).$$ Por lo tanto $$|\alpha t+m-Y|<\varepsilon.$$ Así encontramos un punto de $A$ cuya primera coordenada es exactamente $X$ y cuya segunda coordenada está a distancia menor que $\varepsilon$ de $Y$. Luego $A$ es denso en $\mathbb R^2$.  
>>10. Para la tercera parte, definimos $$\varphi:\mathbb R\to\mathbb T^2,\qquad \varphi(t)=\left(e^{2\pi it},e^{2\pi i\alpha t}\right).$$ Primero verificamos que es un homomorfismo. Para $s,t\in\mathbb R$, $$\varphi(t+s)=\left(e^{2\pi i(t+s)},e^{2\pi i\alpha(t+s)}\right)=\left(e^{2\pi it}e^{2\pi is},e^{2\pi i\alpha t}e^{2\pi i\alpha s}\right)=\varphi(t)\varphi(s).$$ Luego $\varphi$ es homomorfismo de grupos.  
>>11. Probamos que $\varphi$ es inyectiva. Si $\varphi(t)=\varphi(s)$, entonces $$e^{2\pi i(t-s)}=1\qquad\text{y}\qquad e^{2\pi i\alpha(t-s)}=1.$$ Por lo tanto $$t-s\in\mathbb Z\qquad\text{y}\qquad \alpha(t-s)\in\mathbb Z.$$ Si $t-s=k\in\mathbb Z$, entonces $\alpha k\in\mathbb Z$. Como $\alpha$ es irracional, esto fuerza $k=0$. Luego $t=s$. Por lo tanto $\varphi$ es inyectiva.  
>>12. Probamos que $\varphi$ es una inmersión. Para cada $t\in\mathbb R$, debemos ver que $$d\varphi_t:T_t\mathbb R\to T_{\varphi(t)}\mathbb T^2$$ es inyectivo. Como $T_t\mathbb R$ tiene dimensión $1$, alcanza probar que $$d\varphi_t\left(\frac{d}{dt}\Big|_t\right)\neq 0.$$
>>13. Sea $i:\mathbb T^2\hookrightarrow \mathbb C^2$ la inclusión. Entonces $$i\circ\varphi(t)=\left(e^{2\pi it},e^{2\pi i\alpha t}\right).$$ Por lo tanto, calculando la velocidad en el ambiente $\mathbb C^2$, se tiene $$d(i\circ\varphi)_t\left(\frac{d}{dt}\Big|_t\right)=(i\circ\varphi)'(t)=\left(2\pi i e^{2\pi it},2\pi i\alpha e^{2\pi i\alpha t}\right).$$ aca usamos [[GS - Pr2#^6da36a]]
>>14. Por la regla de la cadena, $$d(i\circ\varphi)_t=di_{\varphi(t)}\circ d\varphi_t.$$ Luego $$di_{\varphi(t)}\left(d\varphi_t\left(\frac{d}{dt}\Big|_t\right)\right)=\left(2\pi i e^{2\pi it},2\pi i\alpha e^{2\pi i\alpha t}\right).$$ Este vector no es cero, porque $2\pi i e^{2\pi it}\neq 0$. Por lo tanto $$d\varphi_t\left(\frac{d}{dt}\Big|_t\right)\neq 0.$$ Entonces $d\varphi_t$ es inyectivo para todo $t$, y $\varphi$ es una inmersión.
>>15. Como $\varphi$ es una inmersión inyectiva, $(\mathbb R,\varphi)$ es una subvariedad inmersa de $\mathbb T^2$.  
>>16. Probamos ahora que su imagen es densa. Sea $$q:\mathbb R^2\to\mathbb T^2,\qquad q(x,y)=\left(e^{2\pi ix},e^{2\pi iy}\right).$$ Entonces $$\varphi(t)=q(t,\alpha t).$$ Veamos que $$q^{-1}(\varphi(\mathbb R))=A.$$  
>>17. En efecto, si $(x,y)\in q^{-1}(\varphi(\mathbb R))$, entonces existe $t\in\mathbb R$ tal que $$q(x,y)=\varphi(t).$$ Es decir, $$\left(e^{2\pi ix},e^{2\pi iy}\right)=\left(e^{2\pi it},e^{2\pi i\alpha t}\right).$$ Por lo tanto $$e^{2\pi ix}=e^{2\pi it}\qquad\text{y}\qquad e^{2\pi iy}=e^{2\pi i\alpha t}.$$  
>>18. Usando que $$e^{2\pi ia}=e^{2\pi ib}\iff a-b\in\mathbb Z,$$ se obtiene $$x-t\in\mathbb Z\qquad\text{y}\qquad y-\alpha t\in\mathbb Z.$$ Luego existen $n,m\in\mathbb Z$ tales que $$x=t+n,\qquad y=\alpha t+m.$$ Entonces $$(x,y)\in A.$$ Así, $$q^{-1}(\varphi(\mathbb R))\subseteq A.$$  
>>19. Recíprocamente, si $(x,y)\in A$, entonces existen $t\in\mathbb R$ y $m,n\in\mathbb Z$ tales que $$x=t+n,\qquad y=\alpha t+m.$$ Por lo tanto $$q(x,y)=\left(e^{2\pi i(t+n)},e^{2\pi i(\alpha t+m)}\right)=\left(e^{2\pi it},e^{2\pi i\alpha t}\right)=\varphi(t).$$ Entonces $(x,y)\in q^{-1}(\varphi(\mathbb R))$. Así, $$A\subseteq q^{-1}(\varphi(\mathbb R)).$$  
>>20. Por ambas inclusiones, $q^{-1}(\varphi(\mathbb R))=A.$ por lo tanto $$q(A)=\varphi(\mathbb{R})$$ 
>>21. Como $A$ es denso en $\mathbb R^2$ ($\overline{A}=\mathbb{R}^{2}$) podemos usar esto para probar que $\varphi(\mathbb R)$ es densa en $\mathbb T^2$
>>22. Como $q$ es continua y sobreyectiva, se tiene $$\mathbb T^2=q(\mathbb R^2)=q(\overline{A})\subseteq \overline{q(A)}=\overline{\varphi(\mathbb R)}.$$ en el primer igual usamos sobreyectiva, en el segundo usamos densidad de $A$ en el contenido continuidad de $q$ y el cuarto igual el paso 20. 
>>23. Por lo tanto $$\overline{\varphi(\mathbb R)}=\mathbb T^2.$$ (por que la otra inclusion vale siempre)
>>24. Así, la subvariedad inmersa $(\mathbb R,\varphi)$ es densa en $\mathbb T^2$.
>>25. Finalmente probamos que $\varphi$ no es una incrustación. Como $\alpha$ es irracional, el subgrupo $\mathbb Z+\alpha\mathbb Z$ es denso en $\mathbb R$. En particular, existen enteros $n_k\to\infty$ tales que $$e^{2\pi i\alpha n_k}\to 1.$$ Como además $$e^{2\pi i n_k}=1,$$ se obtiene $$\varphi(n_k)=\left(1,e^{2\pi i\alpha n_k}\right)\to(1,1)=\varphi(0).$$  
>>26. Pero $n_k\not\to 0$ en $\mathbb R$. Entonces la inversa $$\varphi(\mathbb R)\to\mathbb R$$ no es continua respecto de la topología relativa de $\varphi(\mathbb R)\subseteq\mathbb T^2$. Por lo tanto $\varphi$ no es un homeomorfismo sobre su imagen. Así, $\varphi$ no es una incrustación.

### Ejercicio 14 (Opcional)

>[!Exercise]
>Si $F:M\to N$ es una inmersión y $g$ es una métrica Riemanniana en $N$, probar que $F^*g$ es una métrica Riemanniana en $M$.
>
>>[!Proof]-
>>Definimos
>>$$ (F^*g)_p(u,v)=g_{F(p)}\bigl((dF)_pu,(dF)_pv\bigr).$$
>>La bilinealidad y simetría son inmediatas. La suavidad se verifica en coordenadas porque la matriz de $F^*g$ es
>>$$J_F^T\,G\,J_F,$$
>>donde $G$ es la matriz de $g$.
>>
>>Además, si $u\neq 0$, como $F$ es inmersión, $(dF)_pu\neq 0$, y entonces
>>$$ (F^*g)_p(u,u)=g_{F(p)}((dF)_pu,(dF)_pu)>0.$$
>>Luego $F^*g$ es una métrica Riemanniana.

### Ejercicio 15

>[!Exercise] Ejercicio 15 
>De la teoría se conoce la siguiente proposición:  
>>Sea $(M,\psi)$ una subvariedad de $N$. Si $M$ es incrustada y $\psi(M)$ es cerrado en $N$, entonces para toda $g\in C^\infty(M)$ existe $f\in C^\infty(N)$ tal que $f\circ \psi=g$.  
>
>Probar que la proposición no es verdadera si quitamos la hipótesis que $\psi$ es una incrustación o la hipótesis que $\psi(M)$ es cerrado en $N$.
>
>>[!Proof]-
>>- **Si quitamos la hipótesis de incrustación.** Tomemos la inmersión densa del ejercicio 13,
>>$$\varphi:\mathbb R\to T^2.$$
>>Sea $g:\mathbb R\to\mathbb R$, $g(t)=t$. Si existiera $f\in C^\infty(T^2)$ con $f\circ\varphi=g$, entonces $g$ sería acotada porque $f$ lo es en el compacto $T^2$ (por ser continua). Pero $g(t)=t$ es no acotada. Contradicción. También sale con el ocho. Hacer
>>
>>- **Si quitamos que la imagen sea cerrada.** Tomemos la incrustación abierta
>>$$\psi:(0,1)\hookrightarrow \mathbb R.$$
>>Sea $g(x)=1/x$, suave en $(0,1)$. Si existiera $f\in C^\infty(\mathbb R)$ tal que $f|_{(0,1)}=g$ por continuidad si $x_{n}\rightarrow 0^{+}$ tendriamos que $f(x_{n})\rightarrow f(0)$ pero $f(x_{n})=\frac{1}{x_{n}}$ (a partir de algun momento la sucesion esta dentro del $(0,1)$) entonces $f(x_{n})\rightarrow \infty$ osea tendriamos $f(0)=\infty$ que es absurdo  

### Ejercicio 16

>[!Exercise]
>Mostrar que la esfera sin los polos y el hiperboloide de revolución de una hoja son subvariedades de $\mathbb R^3$ y además difeomorfas.
>
>>[!Proof]-
>>1. La esfera sin polos es $$S^2\setminus\{(0,0,\pm 1)\}=\{(x,y,z):x^2+y^2+z^2=1,\ z\neq\pm 1\},$$y es subvariedad porque es un abierto de la esfera, que es el nivel regular de $$F(x,y,z)=x^2+y^2+z^2$$
>>2. El hiperboloide de una hoja es $$H=\{(u,v,w):u^2+v^2-w^2=1\},$$que es una subvariedad porque $1$ es valor regular de $G(u,v,w)=u^2+v^2-w^2$.
>>3. El difeomorfismo es $$\Phi:S^2\setminus\{N,S\}\to H,\qquad \Phi(x,y,z)=\left(\frac{x}{1-z^2},\frac{y}{1-z^2},\frac{z}{\sqrt{1-z^2}}\right).$$
>>4. Como en la esfera $x^2+y^2=1-z^2$, se verifica $$\frac{x^2+y^2}{1-z^2}=1,$$
>>5. Luego $\Phi$ toma valores en $H$. Su inversa es $$\Phi^{-1}(u,v,w)=\left(\frac{u}{1+w^2},\frac{v}{1+w^2},\frac{w}{\sqrt{1+w^2}}\right),$$
>>6. Veamos suavidad. Primero recordemos que $(H,i_{H})$ y $(S,i_{S})$ son incrustaciones de $\mathbb{R}^{3}$ 
>>7. Luego tenemos $$F=i_{H}\circ\Phi:S^{2}\setminus\{N,S\}\rightarrow \mathbb{R}^{3}$$ que es suave por que $F=\widetilde{\Phi}\circ i_{S}$ donde $$\widetilde\Phi(x,y,z)=\left(\frac{x}{1-z^2},\frac{y}{1-z^2},\frac{z}{\sqrt{1-z^2}}\right).$$ vista desde $\mathbb{R}^{3}$ a $\mathbb{R}^{3}$ osea suave y ademas $i_{S}$ es suave por ser subvariedad
>>8. Pero entonces ahora usamos [[GS - Teo11#^300685]]. Tenemos $$F:S^{2}\setminus\{N,S\}\rightarrow \mathbb{R}^{3}$$ suave, $$g=i_{H}:H\rightarrow \mathbb{R}^{3}$$ subvariedad incrustada y $$\widehat{F}=\phi:S^{2}\setminus\{N,S\}\rightarrow H$$ la unica que hace conmutar el diagrama (osea $g\circ \hat{F}=F$) entonces $\widehat{F}$ es suave
 
### Ejercicio 17

>[!Exercise]
>Sea $f:\mathbb R^2\to\mathbb R$ definida por $f(x)=\|x\|^4-5\|x\|^2+4$. 
>- Mostrar que existe $r>0$ que satisface que $(df)_x=0$ si y sólo si $x=0$ ó $\|x\|=r$. 
>- Mostrar que $f^{-1}(\{4\})$ no es subvariedad pero es unión de dos subvariedades disjuntas, 
>- Mostrar que $f^{-1}(\{r^4-5r^2+4\})$ y $f^{-1}(\{4\})-\{0\}$ son subvariedades incrustadas.
>- ¿En qué casos se puede aplicar el teorema de la función implícita a la función $f$?
>
>>[!Proof]-
>>- **Existencia de $r$**
>>	1. Llamamos $r=\|x\|$, entonces $$f(x)=r^4-5r^2+4.$$
>>	2. Su gradiente es $$\nabla f(x)=(4\|x\|^2-10)x.$$
>>	3. Luego $(df)_x=0$ si y sólo si $x=0$ o $\|x\|^2=5/2$. Es decir, vale con $$r=\sqrt{5/2}.$$
>>- **Preimagen es union de subvariedades**
>>	1. $f^{-1}(\{4\})$ viene dado por $r^4-5r^2=0$, o sea $r=0$ o $r=\sqrt5$. Entonces $$f^{-1}(\{4\})=\{0\}\cup S_{\sqrt5}^1.$$Que no es ni siquiera es variedad porque en un entorno del origen tiene dimensión $0$ pero la circunferencia tiene dimension $1$. Entonces tendriamos que la variedad no tiene dimension bien definida. Sí es unión disjunta de dos subvariedades: el punto $\{0\}$ y la circunferencia $S_{\sqrt5}^1$.
>>	2. Pero por separado tenemos la circunferencia que ya sabemos que es subvariedad incrustada y el $\{ 0 \}$ que trivialmente lo es.
>>	3. Entonces aca tenemos un caso no todo punto de $f^{-1}(\{ 4 \})$ es punto regular. Por que el $0\in f^{-1}(\{ 4 \})$ y $df_{0}=0$ osea no es sobreyectiva osea no cumple las condiciones necesarias de [[GS - Teo13#^3f8e58]] y $f^{-1}(\{ 4 \})$ no es subvariedad incrustada    
>>- **Preimagenes son subvariedades incrustadas**
>>	1. El valor $r^4-5r^2+4$ corresponde al nivel crítico con $\|x\|=r$, y $$f^{-1}(\{r^4-5r^2+4\})=S_r^1,$$
>>	2. En este caso $df_{x}\neq 0$ para todo $x\in f^{-1}\{ r^4-5r^2+4 \}$  que es una subvariedad incrustada. Y se cumple el teorema
>>	3. También $$f^{-1}(\{4\})\setminus\{0\}=S_{\sqrt5}^1$$es una subvariedad incrustada.
>>	4. Lo cual muestra que el problema era exactamente el punto no regular $\{ 0 \}$ si lo sacamos estamos nuevamente en las condiciones del teorema
>>- **Cuando se puede aplicar teorema**
>>	1. En este caso en particuar el teorema de la función implícita se puede aplicar en los puntos donde $(df)_x\neq 0$, por que si sucede eso como la imagen de $df$ es el $T_{f(p)}\mathbb{R}$ tiene dimension $1$ entonces $(df)_{x}$ sera automaticamente sobreyectiva
>>	2. Es decir el teorema se puede aplicar para  $$x\neq 0\qquad\text{y}\qquad \|x\|\neq \sqrt{5/2}.$$
>>	3. Y como $f(x)=4$ si $x=0$ y $f(x)=-\frac{9}{4}$ si $\lVert x \rVert=\sqrt{ \frac{5}{2} }$ entonces sabemos que no podemos aplicar el teorema a $c=-\frac{9}{4}$ o $c=0$
>>	4. Pero notar que $f^{-1}\left( -\frac{9}{4} \right)$ es subvariedad a pesar de que no cumpla las hipotesis del teorema

^230a55

### Ejercicio 18

>[!Exercise]
>El grupo lineal especial $SL(n,\mathbb R)$ consiste de las matrices $A$ de tamaño $n\times n$ tales que $\det(A)=1$. Usando la fórmula para $d\det$, probar que $SL(n,\mathbb R)$ es una subvariedad embebida de $GL(n,\mathbb R)$ de dimensión $n^2-1$.
>
>>[!Proof]-
>>Consideramos
>>$$\det:GL(n,\mathbb R)\to\mathbb R^\times.$$
>>Se sabe que
>>$$d(\det)_A(H)=\det(A)\operatorname{tr}(A^{-1}H).$$
>>Si $A\in SL(n,\mathbb R)$, entonces $\det(A)=1$, y basta encontrar $H$ con $d(\det)_A(H)\neq 0$. Tomando
>>$$H=A,$$
>>obtenemos
>>$$d(\det)_A(A)=\operatorname{tr}(I)=n\neq 0.$$
>>Por tanto $1$ es valor regular de $\det$, y
>>$$SL(n,\mathbb R)=\det^{-1}(1)$$
>>es una subvariedad incrustada de codimensión $1$ en $GL(n,\mathbb R)$. Como $\dim GL(n,\mathbb R)=n^2$, resulta
>>$$\dim SL(n,\mathbb R)=n^2-1.$$

### Ejercicio 19

>[!Exercise]
>- (a) Sea $O(3)=\{A\in M(3,\mathbb R):AA^t=I\}$ el conjunto de matrices ortogonales $3\times 3$. Mostrar que $O(3)$ es una subvariedad incrustada de $M(3,\mathbb R)$. ¿Lo es de $GL(3,\mathbb R):=\{A\in M(3,\mathbb R):\det(A)\neq 0\}$? 
>- (b) ¿Qué puede decir de $SO(3)$, el grupo de rotaciones de $\mathbb R^3$?
>- (c) Decidir si es diferenciable la función $\gamma:\mathbb R\to O(3)$ definida por $$\gamma(t)=\operatorname{diag}\left(\begin{pmatrix}\cos t&-\sin t\\ \sin t&\cos t\end{pmatrix},1\right)$$
>
>>[!Proof]-
>>- (a)
>>	1. Definimos $$F:M_3(\mathbb R)\to S_3(\mathbb R),\qquad F(A)=AA^T.$$ ambos son espacios vectoriales reales de dimension finita por lo tanto variedades suaves
>>	2. Entonces $O(3)=F^{-1}(I).$
>>	3. La diferencial es $dF_A(H)=HA^T+AH^T$
>>	4. Si $A\in O(3)$ y $S=S^T$ es simétrica, tomando $H=\frac12 SA,$ se tiene $$dF_A(H)=\frac12 SAA^T+\frac12 A A^T S=S.$$ aca estamos identificando $T_{p}S_{3}(\mathbb{R})$  con $S_{3}(\mathbb{R})$ 
>>	5. Luego $dF_A$ es sobreyectiva sobre $S_3(\mathbb R)$ para cualquier $A\in  O(3)$ 
>>	6. Así que $I$ es valor regular. Por tanto $O(3)$ es subvariedad incrustada de $M(3,\mathbb R)$.
>>	7. Ademas $GL(3,\mathbb R)$ es abierto en $M(3,\mathbb R)$ por que tenemos $$\det|_{M(3,\mathbb{R})}:M(3,\mathbb{R})\rightarrow \mathbb{R}$$y notamos que $GL(3,\mathbb{R})=\det|_{M(3,\mathbb{R})}^{-1}(\mathbb{R}\setminus \{ 0 \})$ entonces por continuidad es abierto en $M(3,\mathbb{R})$ 
>>	8. Entonces como $O(3)\subset GL(3,\mathbb R)$, sucede que $O(3)$ también es subvariedad incrustada de $GL(3,\mathbb R)$ por [[GS - Pr3#^80e4a7]]
>>- (b)
>>	1. Tenemos $SO(3)=\{A\in O(3):\det A=1\}.$ 
>>	2. Notamos que la función determinante es $$\det|_{O(3)}:O(3)\rightarrow \{ -1,1 \}$$
>>	3. Luego $SO(3)=det|_{O(3)}^{-1}(-1)$ pero $-1$ es cerrado y abierto en $\{ -1,1 \}$ 
>>	4. Luego $SO(3)$ es abierto (y cerrado) de $O(3)$; 
>>	5. Entonces $SO(3)$ es subvariedad incrustada de $O(3)$ por [[GS - Pr3#^772b8b]]
>>	6. Por lo tanto es subvariedad incrustada de $M(3,\mathbb{R})$ y de $GL(3,\mathbb{R})$ por (a) y por [[GS - Pr3#^fb9b56]] 
>>- (c) 
>>	1. Primero miramos la misma fórmula como aplicación con codominio ambiente. Definimos $$\widetilde{\gamma}:\mathbb R\to M(3,\mathbb R),\qquad \widetilde{\gamma}(t)=\begin{pmatrix}\cos t & -\sin t & 0\\ \sin t & \cos t & 0\\ 0 & 0 & 1\end{pmatrix}.$$
>>	2. En $M(3,\mathbb R)$ usamos la estructura suave estándar de espacio vectorial real de dimensión $9$. Es decir, identificamos $$M(3,\mathbb R)\cong \mathbb R^9$$ mediante la carta global dada por las entradas: $$\Phi:M(3,\mathbb R)\to \mathbb R^9,$$$$\Phi\begin{pmatrix}a_{11}&a_{12}&a_{13}\\ a_{21}&a_{22}&a_{23}\\ a_{31}&a_{32}&a_{33}\end{pmatrix}=(a_{11},a_{12},a_{13},a_{21},a_{22},a_{23},a_{31},a_{32},a_{33}).$$
>>	3. Entonces, para probar que $\widetilde{\gamma}$ es suave, alcanza mirar su representación coordenada: $$\Phi\circ \widetilde{\gamma}(t)=(\cos t,-\sin t,0,\sin t,\cos t,0,0,0,1).$$
>>	4. Cada componente es una función suave de $t$, por lo tanto $$\widetilde{\gamma}:\mathbb R\to M(3,\mathbb R)$$ es suave.  
>>	5. Ahora vemos que la imagen cae en $O(3)$. Sea $$R(t)=\begin{pmatrix}\cos t & -\sin t\\ \sin t & \cos t\end{pmatrix}.$$entonces $$R(t)R(t)^T=I_2.$$por lo tanto $$\widetilde{\gamma}(t)\widetilde{\gamma}(t)^T=\begin{pmatrix}R(t)R(t)^T & 0\\ 0 & 1\end{pmatrix}=I_3.$$así, $\widetilde{\gamma}(t)\in O(3)$ para todo $t\in\mathbb R$.  
>>	6. Entonces podemos considerar la aplicación $$\gamma:\mathbb R\to O(3)$$ dada por la misma fórmula. Si $$i:O(3)\hookrightarrow M(3,\mathbb R)$$ es la inclusión, entonces $$i\circ \gamma=\widetilde{\gamma}.$$
>>	7. Ya probamos que $\widetilde{\gamma}$ es suave como mapa hacia $M(3,\mathbb R)$. Como $O(3)$ es subvariedad incrustada de $M(3,\mathbb R)$, por el lema de factorización se concluye que $$\gamma:\mathbb R\to O(3)$$ es suave.  
>>	8. Además, $$\det(\gamma(t))=\det(R(t))\cdot 1=1,$$ entonces en realidad $$\gamma(\mathbb R)\subseteq SO(3).$$
>>	9. Por el mismo argumento, también es suave como mapa $$\gamma:\mathbb R\to SO(3).$$

### Ejercicio 20

>[!Exercise]
>Sea $f:N\to Q$ suave, $q\in Q$ un valor regular, $M=f^{-1}(\{q\})$ e $\iota:M\to N$ la inclusión.
>
>- (a) Mostrar que $T_pM\simeq (d\iota)_p(T_pM)=\ker(df)_p$.
>- (b) Mostrar que si $p\in S^n\subset\mathbb R^{n+1}$, entonces $T_pS^n\simeq p^\perp$.
>
>>[!Proof]-
>>- (a) 
>>	1. Como $f\circ\iota$ es constante, se tiene $df_p\circ d\iota_p=0$ de donde $$ (d\iota)_p(T_pM)\subset\ker(df)_p.$$
>>	2. Por otra parte, como $q$ es valor regular, $df_p:T_{p}N\rightarrow T_{f(p)}Q$ es sobreyectiva (aca asumimos $p\in M$) por lo tanto $$\dim Im (df_{p})=\dim T_{f(p)}Q=\dim Q$$
>>	3. Luego $$\dim\ker(df)_p=\dim N-\dim Q=\dim M=\dim T_pM.$$ donde usamos teorema dimension en el primer igual y teorema implicita en el segundo igual
>>	4. Como $d\iota_p$ es inyectiva (por ser subvariedad), tenemos que $\dim\ker (d\iota)_{p}=0$ por lo tanto, por teorema dimension $\dim T_{p}M=\dim Im(d\iota)=\dim (d\iota)_p(T_{p}M)$ 
>>	5. Finalmente $\dim\big( (d\iota)_p(T_{p}M)\big)=\dim\ker(df)_p$ que junto con la inclusion prueba que $$ (d\iota)_p(T_pM)=\ker(df)_p.$$
>>	6. Ademas notamos que $d\iota$ es inyectiva y si co restringimos a $(d\iota)_{p}(T_{p}M)$ pasa a ser sobreyectiva con lo cual pasa a ser isomorfismo entonces $T_pM\simeq (d\iota)_p(T_pM)$ 
>>	7. Con lo cual terminamos probando $$T_pM\simeq \ker(df)_{p}$$
>>- (b) 
>>	1. Para la esfera, tomamos $$F:\mathbb R^{n+1}\to\mathbb R,\qquad F(x)=\langle x,x\rangle=\lVert x \rVert ^{2}$$
>>	2. Entonces $$S^n=F^{-1}(1),\qquad dF_p(v)=2\langle p,v\rangle.$$
>>	3. Aplicando el punto anterior, $$T_pS^n=\ker dF_p=\{v:\langle p,v\rangle=0\}=p^\perp.$$
>>	4. Tambien se podia tomar $F:\mathbb{R}^{n+1}\setminus\{ 0 \}\rightarrow\mathbb{R}$ dada por $F(x)=\lVert x \rVert$  

### Ejercicio 21

>[!Exercise]
>Sea $f:M\to N$ suave y sea $$U=\{p\in M:\operatorname{rango}(df)_p \geq \operatorname{rango}(df)_{q}\quad\forall q\in M\}$$Mostrar que $U$ es abierto.
>
>>[!Proof]-
>>1. Sea $p\in U$. Queremos probar que existe un abierto $W\subseteq M$ tal que $p\in W\subseteq U$.  
>>2. Definimos $$r=\operatorname{rank}(df)_p.$$  
>>3. Como $p\in U$, para todo $q\in M$ se tiene $$\operatorname{rank}(df)_q\leq r.$$  
>>4. Como $f$ es suave, existen cartas suaves $(U_0,\varphi)$ alrededor de $p$ y $(V_0,\psi)$ alrededor de $f(p)$ tales que $$f(U_0)\subseteq V_0$$ y la representación local $$\widehat f=\psi\circ f\circ \varphi^{-1}:\varphi(U_0)\to \psi(V_0)$$ es suave.  
>>5. El rango de $(df)_x$ coincide con el rango de la matriz jacobiana de $\widehat f$ en $\varphi(x)$, por [[GS - Teo7#^bb7fdf]] 
>>6. Como $$\operatorname{rank}(df)_p=r,$$ la matriz jacobiana $D\widehat f_{\varphi(p)}$ tiene rango $r$.  
>>7. Por lo tanto existe un menor $r\times r$ de $D\widehat f_{\varphi(p)}$ cuyo determinante es no nulo.  
>>8. Llamemos $D$ a la función determinante de ese menor. Entonces $$D(\varphi(p))\neq 0.$$  
>>9. Como las entradas de $D\widehat f$ son funciones suaves, $D$ es suave, luego continua.
>>10. Entonces existe un abierto $\Omega\subseteq \varphi(U_0)$ tal que $\varphi(p)\in \Omega$ y $$D(y)\neq 0\quad \forall y\in \Omega.$$  
>>11. Definimos $$W=\varphi^{-1}(\Omega).$$  
>>12. Entonces $W$ es abierto en $M$ y $p\in W$.  
>>13. Si $x\in W$, entonces $\varphi(x)\in\Omega$, luego $$D(\varphi(x))\neq 0.$$  
>>14. Por lo tanto, la matriz jacobiana $D\widehat f_{\varphi(x)}$ tiene un menor $r\times r$ no nulo, y entonces $$\operatorname{rank}(df)_x\geq r.$$  
>>15. Pero por el paso 3, para todo $x\in M$ se tiene $$\operatorname{rank}(df)_x\leq r.$$  
>>16. Entonces para todo $x\in W$, $$\operatorname{rank}(df)_x=r.$$  
>>17. Por lo tanto, para todo $x\in W$ y todo $q\in M$, $$\operatorname{rank}(df)_x=r\geq \operatorname{rank}(df)_q.$$  
>>18. Luego $x\in U$ para todo $x\in W$, es decir, $$W\subseteq U.$$  
>>19. Como para cada $p\in U$ existe un abierto $W$ tal que $p\in W\subseteq U$, concluimos que $U$ es abierto.  
>>20. Si $r=0$, entonces por el paso 3 todos los rangos son $0$, por lo que $U=M$, que también es abierto.

### Ejercicio 22 (Opcional)

>[!Exercise]
>Sea $S_n(\mathbb R)=\{A\in M_n(\mathbb R):A=A^T\}$.
>
>>[!Proof]-
>>- El conjunto $S_n(\mathbb R)$ es el núcleo de la aplicación lineal
>>$$L(A)=A-A^T,$$
>>así que es un subespacio vectorial, luego una subvariedad incrustada y cerrada de $M_n(\mathbb R)$. Su dimensión es el número de entradas en la diagonal y por encima de ella:
>>$$\dim S_n(\mathbb R)=\frac{n(n+1)}2.$$
>>Una retracción suave es
>>$$\phi:M_n(\mathbb R)\to S_n(\mathbb R),\qquad \phi(A)=\frac{A+A^T}{2},$$
>>y cumple $\phi\circ\iota=\operatorname{id}$.
>>
>>- El conjunto $P$ de matrices simétricas definidas positivas es abierto en $S_n(\mathbb R)$ porque la positividad de los autovalores es estable por perturbaciones pequeñas. Si $A\in P$, por el teorema espectral
>>$$A=Q\,\operatorname{diag}(\lambda_1,\dots,\lambda_n)\,Q^T,\qquad \lambda_i>0.$$
>>Entonces
>>$$A^{1/2}=Q\,\operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})\,Q^T\in P,$$
>>y es la única raíz cuadrada positiva de $A$. Así, la inversa de
>>$$F:P\to P,\qquad F(A)=A^2,$$
>>es
>>$$F^{-1}(B)=B^{1/2}.$$
>>Por tanto $F$ es un difeomorfismo.

### Ejercicio 23 (Opcional)

>[!Exercise]
>Sea $V=\{X\in S_3(\mathbb R):\operatorname{tr}(X)=0\}$. Mostrar que
>$$M=\{X\in V:X\text{ singular y }X\neq 0\}$$
>es una subvariedad incrustada de $V$.
>
>>[!Proof]-
>>En $V$ consideramos la restricción
>>$$g=\det|_V:V\to\mathbb R.$$
>>Entonces
>>$$M=g^{-1}(0)\setminus\{0\}.$$
>>Basta ver que $0$ es valor regular de $g$ en $M$.
>>
>>Sea $X\in M$. Como $X$ es simétrica, existe una base ortonormal en la cual
>>$$X=\operatorname{diag}(a,-a,0),\qquad a\neq 0,$$
>>porque $\operatorname{tr}(X)=0$ y $\det(X)=0$.
>>Para
>>$$H=\operatorname{diag}(1,1,-2)\in V,$$
>>usando la fórmula de la derivada del determinante,
>>$$dg_X(H)=\operatorname{tr}(\operatorname{cof}(X)^T H).$$
>>Aquí
>>$$\operatorname{cof}(X)=\operatorname{diag}(0,0,-a^2),$$
>>luego
>>$$dg_X(H)=2a^2\neq 0.$$
>>Así $0$ es valor regular y $M$ es una subvariedad incrustada de $V$.

### Ejercicio 24 (Opcional)

>[!Exercise]
>Sea $M^m\subset\mathbb R^n$ una subvariedad incrustada. Probar que su fibrado tangente unitario
>$$UM=\{(p,v)\in T\mathbb R^n:p\in M,\ v\in T_pM,\ \|v\|=1\}$$
>es una subvariedad incrustada de dimensión $2m-1$.
>
>>[!Proof]-
>>Tomemos $p\in M$. Como $M$ es incrustada, existen coordenadas locales en $\mathbb R^n$ donde cerca de $p$
>>$$M=\mathbb R^m\times\{0\}\subset\mathbb R^m\times\mathbb R^{n-m}.$$
>>Entonces cerca de $(p,v)$, el espacio tangente total se identifica con
>>$$T\mathbb R^n\simeq \mathbb R^n\times\mathbb R^n,$$
>>y $UM$ queda dado por las ecuaciones
>>$$y_{m+1}=\cdots=y_n=0,\qquad w_{m+1}=\cdots=w_n=0,\qquad w_1^2+\cdots+w_m^2=1.$$
>>Estas cortan un abierto en una subvariedad de dimensión
>>$$n+n-(n-m)-(n-m)-1=2m-1.$$
>>Luego $UM$ es una subvariedad incrustada de $\mathbb R^n\times\mathbb R^n$.

### Ejercicio 25

>[!Exercise]
>Encontrar una incrustación de $\mathbb{RP}^2$ en $\mathbb R^6$ y luego en $\mathbb R^5$.
>
>>[!Proof]-
>>Representemos $[p]\in\mathbb{RP}^2$ por un vector unitario $p\in S^2$. La proyección ortogonal sobre el plano tangente $T_pS^2=p^\perp$ es
>>$$P_p=I-pp^T.$$
>>Como $P_{-p}=P_p$, la aplicación
>>$$\Phi:\mathbb{RP}^2\to S_3(\mathbb R)\simeq \mathbb R^6,\qquad \Phi([p])=I-pp^T$$
>>está bien definida.
>>
>>Es suave, y es inyectiva porque $\ker(P_p)=\mathbb Rp$: conocer $P_p$ determina la recta $[p]$. Como $\mathbb{RP}^2$ es compacta y $S_3(\mathbb R)$ es Hausdorff, una inmersión inyectiva es una incrustación una vez que se sabe que la diferencial es inyectiva; eso se verifica diferenciando $pp^T$ en cartas afines.
>>
>>Además,
>>$$\operatorname{tr}(\Phi([p]))=\operatorname{tr}(I)-\operatorname{tr}(pp^T)=3-1=2,$$
>>así que la imagen está contenida en el hiperplano afín $\{\operatorname{tr}=2\}$ de $S_3(\mathbb R)$, que es de dimensión $5$. Identificando ese hiperplano con $\mathbb R^5$, obtenemos una incrustación en $\mathbb R^5$.

### Ejercicio 26 (Opcional)

>[!Exercise]
>Mostrar que la aplicación de Veronese $f:\mathbb{RP}^2\to\mathbb R^4$, $[x:y:z]\mapsto(x^2-y^2,xy,xz,yz)$ es una incrustación, y que la superficie de Steiner $[x:y:z]\mapsto(xy,yz,zx)$ es una inmersión salvo en los puntos especiales.
>
>>[!Proof]-
>>- **Veronese.** La aplicación está bien definida porque sus componentes son homogéneas de grado $2$, luego no cambian al reemplazar $(x,y,z)$ por $-(x,y,z)$. En las cartas afines $z=1$, $y=1$, $x=1$ las expresiones son polinómicas, así que es suave.
>>
>>Para ver que es inyectiva, obsérvese que conocer
>>$$a=x^2-y^2,\quad b=xy,\quad c=xz,\quad d=yz$$
>>permite recuperar la recta $[x:y:z]$: por ejemplo, si $x\neq 0$, entonces $y=b/x$, $z=c/x$, y $x^2$ queda determinado por la ecuación $x^4-ax^2-b^2=0$; el signo de $x$ no importa en proyectivo. Los otros casos son análogos. La diferencial tiene rango $2$ en cada carta, así que es una inmersión. Como $\mathbb{RP}^2$ es compacta, resulta una incrustación.
>>
>>- **Steiner.** La aplicación
>>$$g([x:y:z])=(xy,yz,zx)$$
>>también es bien definida y suave. En una carta afín, por ejemplo $z=1$, queda
>>$$g(x,y)=(xy,y,x).$$
>>Su jacobiana tiene rango $2$ salvo cuando dos coordenadas homogéneas se anulan simultáneamente. Eso corresponde a los puntos proyectivos
>>$$[1:0:0],\quad [0:1:0],\quad [0:0:1],$$
>>o, si se mira en $S^2$, a los seis representantes $\pm e_1,\pm e_2,\pm e_3$. Por tanto es una inmersión excepto en esos puntos.
## Glosario

>[!Remark] Sobre ejercicio 2
>1. Notar que siempre $\phi'\in T_{\phi(t)}N$ lo que no necesariamente vale es que $$\phi'(t)\in (d\iota)_{\phi(t)}(T_{\phi(t)}M)\subseteq T_{\phi(t)}N$$ uno esta tentado a pensar que si la cura vive en $M$ su velocidad debe vivir en el tangente de $M$ pero no es cierto
>2. Uno estaria tentado a pensar que dada la corestriccion $\tilde{\phi}:(a,b)\rightarrow M$ tenemos $\phi=\iota\circ\tilde\phi$ (lema triangular) entonces por regla de la cadena $$\phi'(t)=(d\iota)_{\tilde{\phi}(t)}(\tilde{\phi}'(t))$$ entonces $\phi'(t)\in (d\iota)_{\phi(t)}(T_{\phi(t)}M)$. Pero la regla de la cadena no anda si $\tilde{\phi}$ no es suave y $\tilde{\phi}$ no es necesariamente suave si $\iota$ no es incrustacion

^800b80

>[!Lemma] Lema previo
>Sea $A\subset X$ denso en $X$. Si $U\subset X$ es abierto no vacío, entonces $U\cap A$ es denso en $U$.
>
>>[!Proof]-
>>2. Queremos probar que $U\cap A$ es denso en $U$.
>>3. Primero veamos por qué, si $A$ es denso en $X$, entonces todo abierto no vacío de $X$ corta a $A$.
>>4. Como $A$ es denso en $X$, tenemos $$\overline{A}^{\,X}=X.$$
>>5. Sea $O\subset X$ un abierto no vacío. Como $O\neq\varnothing$, existe $x\in O$.
>>6. Como $\overline{A}^{\,X}=X$, se tiene $x\in \overline{A}^{\,X}$.
>>7. Por definición de clausura, todo entorno abierto de $x$ en $X$ corta a $A$.
>>8. Como $O$ es un abierto de $X$ que contiene a $x$, se sigue que $$O\cap A\neq\varnothing.$$
>>9. Ahora tomemos $W\subset U$ abierto no vacío, abierto con la topología relativa de $U$.
>>10. Como $U$ es abierto en $X$, entonces $W$ también es abierto en $X$.
>>11. Por los pasos anteriores, como $W$ es abierto no vacío de $X$, se tiene $$W\cap A\neq\varnothing.$$
>>12. Además, como $W\subset U$, tenemos $$W\cap A=W\cap(U\cap A).$$
>>13. Entonces $$W\cap(U\cap A)\neq\varnothing.$$
>>14. Como todo abierto no vacío $W\subset U$ corta a $U\cap A$, concluimos que $U\cap A$ es denso en $U$.

^db8cf9

>[!Lemma] Criterio de suavidad entre subvariedades incrustadas
>Sean $(A,i_A)$ y $(B,i_B)$ subvariedades incrustadas de $\mathbb R^m$ y $\mathbb R^n$, respectivamente. Sea $F:A\to B$ una función.
>Supongamos que existe un abierto $U\subseteq \mathbb R^m$ con $i_A(A)\subseteq U$ y una función suave $$\widetilde F:U\to \mathbb R^n$$ tal que $$\widetilde F\circ i_A=i_B\circ F.$$
>Entonces $$F:A\to B$$ es suave.
>
>>[!Proof]-
>>1. Como $i_A:A\to \mathbb R^m$ es suave y $\widetilde F:U\to\mathbb R^n$ es suave, la composición $$\widetilde F\circ i_A:A\to\mathbb R^n$$ es suave.
>>2. Por hipótesis, $$\widetilde F\circ i_A=i_B\circ F.$$
>>3. Luego $$i_B\circ F:A\to\mathbb R^n$$ es suave.
>>4. Además, $$(i_B\circ F)(A)\subseteq i_B(B).$$
>>5. Como $(B,i_B)$ es una subvariedad incrustada de $\mathbb R^n$, por el lema de factorización aplicado a $$i_B\circ F:A\to\mathbb R^n,$$ la única función $$\widehat F:A\to B$$ tal que $$i_B\circ\widehat F=i_B\circ F$$ es suave.
>>6. Pero $F$ satisface $$i_B\circ F=i_B\circ F.$$
>>7. Por unicidad, $$\widehat F=F.$$
>>8. Por lo tanto, $$F:A\to B$$ es suave.

>[!Lemma]
>Sea $S\subseteq M$ una subvariedad incrustada de dimensión $k$ y sea $U\subseteq M$ abierto. Entonces $S\cap U$ es subvariedad incrustada de $U$.
>
>>[!Proof]-
>>1. Sea $p\in S\cap U$.
>>2. Como $S$ es subvariedad incrustada de $M$, existe una carta suave $(V,\varphi)$ de $M$ alrededor de $p$ tal que $$\varphi(V\cap S)=\varphi(V)\cap(\mathbb R^k\times\{0\}).$$
>>3. Como $U$ es abierto en $M$, el conjunto $V\cap U$ es abierto en $M$, y por lo tanto $(V\cap U,\varphi|_{V\cap U})$ es una carta suave de la variedad abierta $U$ alrededor de $p$.
>>4. Además, $$(V\cap U)\cap(S\cap U)=V\cap S\cap U.$$
>>5. Aplicando la carta restringida, se tiene $$\varphi((V\cap U)\cap(S\cap U))=\varphi(V\cap S\cap U).$$
>>6. Como $\varphi(V\cap S)=\varphi(V)\cap(\mathbb R^k\times\{0\})$, al intersectar con $\varphi(V\cap U)$ queda $$\varphi(V\cap S\cap U)=\varphi(V\cap U)\cap(\mathbb R^k\times\{0\}).$$
>>7. Entonces, en la carta $(V\cap U,\varphi|_{V\cap U})$ de $U$, el conjunto $S\cap U$ se ve localmente como una rebanada.
>>8. Por lo tanto $S\cap U$ es una subvariedad incrustada de $U$.

^80e4a7

>[!Lemma]
>Sea $M$ una variedad suave de dimensión $n$ y sea $U\subseteq M$ abierto. Entonces $U$ es una subvariedad incrustada de $M$ de dimensión $n$.
>
>>[!Proof]-
>>1. Primero dotamos a $U$ de la estructura suave heredada de $M$. Para cada $p\in U$, elegimos una carta $(V,\varphi)$ de $M$ con $p\in V$. Como $U$ es abierto en $M$, el conjunto $V\cap U$ es un abierto de $U$ que contiene a $p$, y $$\varphi(V\cap U)$$ es abierto en $\mathbb R^n$. Por lo tanto $$(V\cap U,\varphi|_{V\cap U})$$ es una carta de $U$ alrededor de $p$. Al hacer esto para cada $p\in U$, obtenemos un atlas que cubre todo $U$; en consecuencia, $U$ es una variedad suave de dimensión $n$.
>>2. Consideremos la aplicación inclusión $$\iota:U\longrightarrow M,\qquad \iota(p)=p.$$
>>3. La aplicación $\iota$ es inyectiva. Además es suave: usando en $U$ la carta restringida $(V\cap U,\varphi|_{V\cap U})$ y en $M$ la carta $(V,\varphi)$, su expresión en coordenadas es $$\varphi\circ\iota\circ(\varphi|_{V\cap U})^{-1}=\operatorname{id}_{\varphi(V\cap U)},$$ que es suave.
>>4. Sea $p\in U$. En las cartas anteriores, la diferencial $d\iota_p:T_pU\to T_pM$ está representada por la matriz identidad $I_n$.
>>5. Por lo tanto $d\iota_p$ es inyectiva para todo $p\in U$, y $\iota$ es una inmersión. (Esto es usando que $d\varphi ^{-1}$ y $d\varphi|_{V\cap U}$ son isomorfismos) 
>>6. La imagen de $\iota$ es $\iota(U)=U$. Como $U$ posee la topología relativa heredada de $M$, la aplicación $$\iota:U\longrightarrow\iota(U)$$ es la identidad entre dos espacios con la misma topología. Por consiguiente, es un homeomorfismo sobre su imagen.
>>7. Así, $\iota$ es suave, inyectiva, tiene diferencial inyectiva en todo punto y es un homeomorfismo sobre su imagen. Por definición, $\iota$ es una incrustación suave.
>>8. Concluimos que $U$ es una subvariedad incrustada de $M$ de dimensión $n$.

^772b8b

>[!Lemma] Transitividad de incrustaciones
>Sean $P,S,M$ variedades suaves. Si $j:P\hookrightarrow S$ es una incrustación y $i:S\hookrightarrow M$ es una incrustación, entonces $i\circ j:P\hookrightarrow M$ es una incrustación.
>
>>[!Proof]-
>>1. Como $i$ y $j$ son incrustaciones, en particular son aplicaciones suaves. Entonces $i\circ j$ es suave.
>>2. Además, como $i$ y $j$ son inyectivas, la composición $i\circ j$ también es inyectiva.
>>3. Veamos que $i\circ j$ es una inmersión. Sea $p\in P$. Por regla de la cadena, $$d(i\circ j)_p=di_{j(p)}\circ dj_p.$$
>>4. Como $j$ es una inmersión, $dj_p:T_pP\to T_{j(p)}S$ es inyectiva. Como $i$ es una inmersión, $di_{j(p)}:T_{j(p)}S\to T_{i(j(p))}M$ es inyectiva.
>>5. La composición de aplicaciones lineales inyectivas es inyectiva. Luego $$d(i\circ j)_p:T_pP\to T_{i(j(p))}M$$ es inyectiva.
>>6. Por lo tanto $i\circ j$ es una inmersión.
>>7. Falta ver que $i\circ j$ es un homeomorfismo sobre su imagen. Como $j:P\to j(P)$ es homeomorfismo, donde $j(P)$ tiene la topología relativa heredada de $S$, y como $i:S\to i(S)$ es homeomorfismo, donde $i(S)$ tiene la topología relativa heredada de $M$, podemos restringir $i$ a $j(P)$.
>>8. La restricción $$i|_{j(P)}:j(P)\to i(j(P))$$ es un homeomorfismo, donde $i(j(P))$ tiene la topología relativa heredada de $i(S)$.
>>9. Ahora hay que justificar que esta es la topología correcta en $i(j(P))$. Para que $i\circ j:P\to M$ sea una incrustación, la imagen $i(j(P))$ debe llevar la topología relativa heredada de $M$.
>>10. Como $$i(j(P))\subseteq i(S)\subseteq M,$$ la topología relativa de $i(j(P))$ como subespacio de $i(S)$ coincide con la topología relativa de $i(j(P))$ como subespacio de $M$.
>>11. En efecto, si $A\subseteq B\subseteq X$, entonces la topología relativa de $A$ heredada de $B$ coincide con la topología relativa de $A$ heredada de $X$. Si $O_A$ es abierto en $A$ relativo a $B$, entonces existe un abierto $O_B\subseteq B$ tal que $$O_A=A\cap O_B.$$ Como $B$ tiene la topología relativa de $X$, existe un abierto $O_X\subseteq X$ tal que $$O_B=B\cap O_X.$$ Entonces $$O_A=A\cap O_B=A\cap(B\cap O_X)=A\cap O_X,$$ porque $A\subseteq B$. Luego $O_A$ es abierto en $A$ relativo a $X$. La otra inclusión es directa.
>>12. Aplicando esto con $$A=i(j(P)),\qquad B=i(S),\qquad X=M,$$ obtenemos que $i(j(P))$ tiene la misma topología relativa si la pensamos como subespacio de $i(S)$ o como subespacio de $M$.
>>13. Por lo tanto, $$i|_{j(P)}:j(P)\to i(j(P))$$ es homeomorfismo, donde $i(j(P))$ tiene la topología relativa heredada de $M$.
>>14. Como $$i\circ j:P\to i(j(P))$$ es la composición $$P\xrightarrow{j}j(P)\xrightarrow{i|_{j(P)}}i(j(P)),$$ y ambas aplicaciones son homeomorfismos, se sigue que $i\circ j$ es un homeomorfismo sobre su imagen.
>>15. Así, $i\circ j$ es suave, inyectiva, inmersión y homeomorfismo sobre su imagen.
>>16. Por definición, $i\circ j:P\hookrightarrow M$ es una incrustación.

^fb9b56

>[!Corollary]
>Si $P\subseteq S\subseteq M$, $P$ es subvariedad incrustada de $S$ y $S$ es subvariedad incrustada de $M$, entonces $P$ es subvariedad incrustada de $M$.
