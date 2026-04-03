### Exercise 1

>[!Exercise]
>- Mostrar que $$\{(x,y)\in\mathbb R^2:xy=0\}$$ no es un espacio topológico localmente euclídeo.
>- Sea $X$ el cociente $$(\mathbb R\times\{0,1\})/{\sim}$$ de dos copias de $\mathbb R$, donde $(x,0)\sim(x,1)$ para $x\neq 0$. Mostrar que $X$ es un espacio topológico tal que todo punto tiene un entorno abierto homeomorfo a un abierto de $\mathbb R$, pero no es Hausdorff.
>>[!Proof]-
>>- **1.a** 
>>1. Sea $X=\{(x,y)\in\mathbb R^2:xy=0\},$ la unión de los dos ejes coordenados. En el origen, cualquier entorno abierto $U\subset X$ cumple que $U\setminus\{(0,0)\}$ tiene cuatro componentes conexas.
>>2. Si $X$ fuera localmente euclídeo en $(0,0)$, existiría un entorno $U$ de $(0,0)$ homeomorfo a un abierto $V\subset\mathbb R^n$. Entonces $V\setminus\{p\}$ (con $p$ la imagen del homeo en $(0,0)$) debería tener cuatro componentes conexas.
>>3. Si $n=1$, al quitar un punto quedan a lo sumo dos componentes.
>>4. Si $n\ge 2$, un abierto pequeño spd una bola menos un punto es conexo por caminos por lo tanto es conexa
>>5. Luego no puede mas de una componente conexa (el mismo) si no no seria conexo 
>>6. Contradicción. Luego $X$ no es localmente euclídeo.
>>- **1.b** 
>>	1. Sea $q:\mathbb R\times\{0,1\}\to X$ la proyección cociente. Los puntos $q(x,0)=q(x,1)$ para $x\ne 0$ son puntos comunes, mientras que $q(0,0)$ y $q(0,1)$ son dos orígenes distintos.
>>- Si $x\ne 0$, un entorno pequeño de $q(x,0)$ es homeomorfo a un intervalo abierto.
>>- Un entorno de $q(0,0)$ del tipo $q((-\varepsilon,\varepsilon)\times\{0\})$ también es homeomorfo a $(-\varepsilon,\varepsilon)$.
>>- Lo mismo vale para $q(0,1)$.
>>Por lo tanto, todo punto tiene un entorno abierto homeomorfo a un abierto de $\mathbb R$.
>>Sin embargo, $X$ no es Hausdorff: si $U\ni q(0,0)$ y $V\ni q(0,1)$ son abiertos, entonces contienen imágenes de intervalos $(-\varepsilon,\varepsilon)\times\{0\}$ y $(-\delta,\delta)\times\{1\}$. Sus imágenes intersectan en todos los puntos $q(x,0)=q(x,1)$ con $0<|x|<\min\{\varepsilon,\delta\}$. Entonces no se pueden separar los dos orígenes.
### Ejercicio 2

>[!Exercise]
>Mostrar que para todo punto $p$ de una variedad diferenciable de dimensión $n$ existe un sistema coordenado $(U,\varphi)$ tal que $\varphi(p)=0$ y $\varphi(U)=\mathbb R^n$.
>>[!Proof]-
>>1. Sea $p\in M$, donde $M$ es una variedad de dimensión $n$. Tomamos una carta $(U,\varphi)$ con $p\in U$. Como $\varphi(U)\subset\mathbb R^n$ es abierto y contiene $\varphi(p)$, existe $r>0$ tal que $$B_r(\varphi(p))\subset\varphi(U).$$
>>2. Reemplazando $U$ por $U\cap \varphi^{-1}(B_r(\varphi(p)))$, podemos suponer $\varphi(U)=B_r(\varphi(p))$.
>>3. Componemos con la traslación $\tau(x)=x-\varphi(p)$ (que es homemorfismo, trivial) y luego con $$h:B_r(0)\to\mathbb R^n,\qquad h(x)=\frac{x}{\sqrt{r^2-\|x\|^2}}.$$
>>4. Veamos que $h$ es inversible con inversa continua (obviamente es continua)  
>>5. **Paso 1: cálculo de la norma.** Sea $y=h(x)$. Entonces considerando que el divisor es un escalar $$\|y\|=\left\|\frac{x}{\sqrt{r^2-\|x\|^2}}\right\|=\frac{\|x\|}{\sqrt{r^2-\|x\|^2}}\iff \|y\|^2=\frac{\|x\|^2}{r^2-\|x\|^2}.$$  
>>6. Despejamos $\lVert x \rVert$: $$\|y\|^2(r^2-\|x\|^2)=\|x\|^2\iff r^2\|y\|^2=\|x\|^2(1+\|y\|^2)\iff \|x\|^2=\frac{r^2\|y\|^2}{1+\|y\|^2}.$$  
>>  
>>7. De la definición tenemos $x=y\cdot\sqrt{r^2-\|x\|^2}.$ y sustituyendo tenemos: $$r^2-\|x\|^2=r^2-\frac{r^2\|y\|^2}{1+\|y\|^2}=\frac{r^2}{1+\|y\|^2}.$$
>>8. Entonces $$x=\frac{r\,y}{\sqrt{1+\|y\|^2}}.$$
>>9. Luego la inversa es: $$h^{-1}(y)=\frac{r\,y}{\sqrt{1+\|y\|^2}},\qquad y\in\mathbb{R}^n.$$  que obviamente es continua. Y es directo verificar que esta es la inversa y que su imagen caen en $B_{r}(0)$ 
>>10. Concluimos que $h$ es homeomorfismo.
>>11. Entonces $$\psi=h\circ\tau\circ\varphi$$ es composicion de homeomorfismos por lo tanto una carta y cumple obviamente $$\psi(p)=0,\qquad \psi(U)=\mathbb R^n.$$

### Ejercicio 3

>[!Exercise]
>Sea $V$ un espacio vectorial real de dimensión finita con la única topología $\tau$ que hace de $(V,\tau)$ un espacio vectorial topológico Hausdorff.
>- Sean $B_1=\{v_1,\dots,v_n\}$ y $B_2=\{u_1,\dots,u_n\}$ bases de $V$, y sean $\varphi_{B_1},\psi_{B_2}:V\to\mathbb R^n$ las funciones coordenadas asociadas. Mostrar que tanto $\varphi_{B_1}$ como $\psi_{B_2}$ son homeomorfismos de $(V,\tau)$ con $\mathbb R^n$.
>- Mostrar que $\{(V,\varphi_{B_1})\}$ y $\{(V,\psi_{B_2})\}$ son atlas sobre $V$ y determinan la misma estructura diferenciable.
>>[!Proof]-
>>**3.a** Fijemos la base $B_1$ y definamos $$\widetilde{\tau}:=\{\varphi_{B_1}^{-1}(O):O\subseteq\mathbb R^n\text{ abierto}\}.$$ Es fácil ver que $\widetilde{\tau}$ es una topología sobre $V$. Por construcción, $$\varphi_{B_1}:(V,\widetilde{\tau})\to\mathbb R^n$$ es un homeomorfismo, luego $(V,\widetilde{\tau})$ es un espacio vectorial topológico Hausdorff. Por la unicidad de la topología Hausdorff compatible con la estructura de espacio vectorial en dimensión finita, se sigue que $$\widetilde{\tau}=\tau.$$
>>En particular, por definición de $\widetilde{\tau}$, la aplicación $$\varphi_{B_1}:(V,\tau)\to\mathbb R^n$$ es continua. Veamos ahora que $$\varphi_{B_1}^{-1}:\mathbb R^n\to(V,\tau)$$ también es continua. Sea $U\subseteq V$ abierto. Como $\tau=\widetilde{\tau}$, existe un abierto $O\subseteq\mathbb R^n$ tal que $$U=\varphi_{B_1}^{-1}(O).$$ Entonces $$(\varphi_{B_1}^{-1})^{-1}(U)=\varphi_{B_1}(U)=\varphi_{B_1}(\varphi_{B_1}^{-1}(O))=O,$$ que es abierto. Como además $\varphi_{B_1}$ es biyectiva, concluimos que $\varphi_{B_1}$ es un homeomorfismo.
>>El mismo argumento vale para $$\psi_{B_2}:V\to\mathbb R^n,$$ así que también es un homeomorfismo.
>>- **3.b** 
>>	1. Como $\varphi_{B_1}$ es un homeomorfismo de $V$ con $\mathbb R^n$, el espacio $V$ es localmente euclídeo. 
>>	2. Además es Hausdorff por hipótesis. 
>>	3. Por lo tanto $(V,\varphi_{B_1})$ es una carta global, y como cubre todo $V$
>>	4. Luego $\{(V,\varphi_{B_1})\}$ es un atlas. 
>>	5. Del mismo modo $\{(V,\psi_{B_2})\}$ es también un atlas.
>>	6. Y ademas ambas son (trivialmente) lineales  
>>	7. Luego, el cambio de coordenadas $$\psi_{B_2}\circ\varphi_{B_1}^{-1}:\mathbb R^n\to\mathbb R^n$$ esta bien definido es homeomorfismo y es claramente lineal
>>	8. Luego por ser lineal es $C^\infty$, y lo mismo vale para su inversa. 
>>	9. Por consiguiente, ambos atlas son compatibles y determinan la misma estructura diferenciable.

### Ejercicio 4

>[!Exercise]
>Sea $U$ un abierto de $\mathbb R^n$ y $f:U\to\mathbb R^m$ una función $C^\infty$. Dotar el gráfico de $f$, $$\Gamma(f)=\{(x,f(x)):x\in U\}\subset\mathbb R^{n+m},$$ con una estructura de variedad diferenciable.
>>[!Proof]-
>>La proyección sobre la primera coordenada $$\pi:\Gamma(f)\to U,\qquad \pi(x,f(x))=x$$ es biyectiva y continua. Su inversa es $$\pi^{-1}(x)=(x,f(x)),$$ que es suave porque $f$ es suave. Entonces $\pi$ es un difeomorfismo $$\Gamma(f)\cong U.$$ Como $U$ es abierto de $\mathbb R^n$, esto dota a $\Gamma(f)$ de estructura de variedad diferenciable de dimensión $n$. Un atlas posible es la sola carta $(\Gamma(f),\pi)$.

### Ejercicio 5

>[!Exercise]
>Sean $\{(U_\alpha,\varphi_\alpha)\}$ y $\{(V_\beta,\psi_\beta)\}$ atlas $C^\infty$ de variedades diferenciables $M$ y $N$, respectivamente. Mostrar que la familia $$\{(U_\alpha\times V_\beta,(\varphi_\alpha,\psi_\beta))\}$$ es un atlas de $M\times N$, y por lo tanto $M\times N$ es una variedad diferenciable llamada variedad producto.
>>[!Proof]-
>>Si $(U_\alpha,\varphi_\alpha)$ es una carta de $M$ y $(V_\beta,\psi_\beta)$ una carta de $N$, entonces $$(\varphi_\alpha,\psi_\beta):U_\alpha\times V_\beta\to \varphi_\alpha(U_\alpha)\times \psi_\beta(V_\beta)$$ es un homeomorfismo sobre un abierto de $\mathbb R^{m+n}$. Las funciones de cambio de cartas son $$(\varphi_{\alpha'},\psi_{\beta'})\circ(\varphi_\alpha,\psi_\beta)^{-1}=\bigl(\varphi_{\alpha'}\circ\varphi_\alpha^{-1},\,\psi_{\beta'}\circ\psi_\beta^{-1}\bigr),$$ que son $C^\infty$. Por lo tanto $$\{(U_\alpha\times V_\beta,(\varphi_\alpha,\psi_\beta))\}$$ es un atlas suave sobre $M\times N$.

### Ejercicio 6 (Opcional)

>[!Exercise]
>Identificando $\mathbb R^2$ con los números complejos $\mathbb C$, se puede pensar al círculo unidad $S^1$ como un subconjunto del plano complejo. Una función ángulo sobre un subconjunto $A\subseteq S^1$ es una función continua $$\theta:A\to\mathbb R$$ tal que $$e^{i\theta(z)}=z$$ para todo $z\in A$. Sea $U\subseteq S^1$ un conjunto abierto. Mostrar que existe una función ángulo sobre $U$ si y solo si $U\neq S^1$, y mostrar también que si $\theta:U\to\mathbb R$ es una función ángulo, entonces $(U,\theta)$ es una carta suave para $S^1$ con su estructura suave estándar.
>>[!Proof]-
>>Si $U\subset S^1$ es abierto y $U\ne S^1$, elijo $a\in S^1\setminus U$. Entonces $S^1\setminus\{a\}$ es homeomorfo a un intervalo abierto, y por composición con ese homeomorfismo existe una función ángulo continua $$\theta:U\to\mathbb R.$$
>>En cambio, si $U=S^1$, no puede existir una función ángulo global continua: sería un levantamiento continuo de la identidad $S^1\to S^1$ por la exponencial $t\mapsto e^{it}$, lo cual contradice el número de vueltas del círculo.
>>Si $\theta:U\to\mathbb R$ es una función ángulo, entonces $$\theta:U\to\theta(U)$$ es homeomorfismo sobre un abierto de $\mathbb R$, y su inversa es $t\mapsto e^{it}$ restringida a $\theta(U)$. Esa carta es suave y compatible con la estructura suave usual de $S^1$.

### Ejercicio 7

>[!Exercise]
>- Sea $$S^n=\{x\in\mathbb R^{n+1}:\|x\|=1\}.$$ Mostrar que las estructuras diferenciables que contienen las cartas de casquetes y las cartas estereográficas coinciden.
>- Mostrar que $S^2$ con la estructura diferenciable dada en el punto anterior es difeomorfa a $(M,\mathcal F)$, donde $M$ es la compactificación de $\mathbb C$ por el punto $\infty$, y $\mathcal F$ contiene las cartas $(U,\varphi)$ y $(V,\psi)$ dadas por $$U=\mathbb C,\qquad \varphi=\operatorname{id},\qquad V=(\mathbb C\setminus\{0\})\cup\{\infty\},\qquad \psi(z)=1/z,\qquad \psi(\infty)=0.$$
>>[!Proof]-
>>- **7.a**
>>	1. Definimos dos atlas sobre $S^n$:
>>		- **Atlas I** (casquetes): $\{(\phi_i^\varepsilon, U_i^\varepsilon) : \varepsilon = \pm 1,\, 1 \le i \le n+1\}$
>>		- **Atlas II** (estereográficas): $\{(\psi_1, V_1),(\psi_2, V_2)\}$ con $$V_1 = S^n\setminus\{(0,\ldots,0,1)\}, \qquad \psi_1(x)=\left(\frac{x_1}{1-x_{n+1}},\ldots,\frac{x_n}{1-x_{n+1}}\right)$$$$V_2 = S^n\setminus\{(0,\ldots,0,-1)\}, \qquad \psi_2(x)=\left(\frac{x_1}{1+x_{n+1}},\ldots,\frac{x_n}{1+x_{n+1}}\right)$$
>>	2. Claramente $\displaystyle\bigcup_{i,\varepsilon} U_i^\varepsilon = V_1\cup V_2 = S^n$. Osea ambos son cubren toda la variedad
>>	3. Ya asumiendo que ambos son atlas, resta ver que son compatibles. El cambio de coordenadas es: $$\psi_j\circ\phi_i^\varepsilon : \phi_i^\varepsilon(V_j\cap U_i^\varepsilon)\longrightarrow \psi_j(V_j\cap U_i^\varepsilon)$$
>>	4. Sin pérdida de generalidad $\varepsilon = +$. Como la inversa de $\phi_i^+$ inserta $\sqrt{1-(x_1^2+\cdots+x_n^2)}$ en la posición $i$, luego: $$\begin{align}(\psi_j\circ\phi_i^+)(x_1,\ldots,x_n)&  = \psi_j\!\left(x_1,\ldots,x_{i-1},\sqrt{1-(x_1^2+\cdots+x_n^2)},x_{i+1},\ldots,x_n\right)\\&= \left(\frac{x_1}{1-x_n},\;\ldots,\;\frac{1-\sqrt{x_1^2+\cdots+x_n^2}}{1-x_n},\;\ldots,\;\frac{x_{n-1}}{1-x_n}\right)\end{align}$$
>>	5. Y esto es obviamente diferenciable. Va a ser análogo para la inversa.
>>	6. Luego las cartas son compatibles por lo tanto determinan la misma estructura diferenciable.
>>- **7.b**
>>	1. Tenemos $\mathcal{F}_1 = \{(\psi_N, V_N),(\psi_S, V_S)\}$, el atlas dado por las estereográficas con $N=(0,0,1)$ y $S=(0,0,-1)$.
>>	2. $\mathcal{F}_2 = \{(\psi,U),(\psi,V)\}$ donde:
>>		- $U = \mathbb{C}$ y $\psi = \operatorname{id}$
>>		- $V = \mathbb{C}\setminus\{0\}\cup\{\infty\}$, $\quad\psi(z) = \begin{cases} 1/z & z\ne 0 \\ 0 & z=\infty \end{cases}$ que es el atlas de la compactificación de $\mathbb{C}$, osea $\mathbb{C}\cup\{\infty\}$ con la topo dada por los abiertos de $\mathbb{C}$ y $(\mathbb{C}\setminus K)\cup\{\infty\}$ con $K\subset\mathbb{C}$ compacto.
>>	3. Queremos $F:S^2\to\mathbb{C}\cup\{\infty\}$ difeomorfismo. Podemos definir $F$ como la estereográfica: $$F(x,y,z)=\begin{cases}\left(\dfrac{x}{1-z},\dfrac{y}{1-z}\right) & z\ne 1\\[6pt] \infty & z=1\end{cases}$$que está en $\mathbb{C}\cup\{\infty\}$ porque $\left(\dfrac{x}{1-z},\dfrac{y}{1-z}\right)=\dfrac{x}{1-z}+\dfrac{y}{1-z}\,i$.
>>	- Veamos que es suave ($C^{\infty}$) 
>>		- Caso $x\ne(0,0,1)$:
>>			1. Tomamos $(\psi_N,U_N)$: claramente $x\in U_N$
>>			2. Tomamos $(\psi,U)$: claramente $F(x)\in U$
>>			3. $F(U_N)\subseteq U$
>>			4. $\psi\circ F\circ\psi_N^{-1}:\psi_N(U_N)\subseteq\mathbb{R}^2\to\psi(U)\subseteq\mathbb{C}\cong\mathbb{R}^2$ y esta función es claramente la identidad. Osea es suave
>>		- Caso $x=(0,0,1)$:
>>			1. Tomamos $(\psi_S,U_S)$: $x\in U_S$
>>			2. Tomamos $(\psi,V)$: $F(x)=\infty\in V$
>>			3. $F(U_S)=\mathbb{R}^2\setminus\{0\}\cup\{\infty\}\cong\mathbb{C}\cup\{\infty\}=V$
>>			4. $\psi\circ F\circ\psi_S^{-1}:\mathbb{R}^2\to\psi(V)$ donde $\psi_S(U_S)=\mathbb{R}^2$:$$\begin{align}\psi\circ F\circ\psi_S^{-1}(x,y)&=\begin{cases}\psi\circ\psi_N\circ\psi_S^{-1}(x,y) & (x,y)\ne(0,0)\\ \psi(\infty)=0 & (x,y)=(0,0)\end{cases}\\&=\begin{cases}\psi\!\left(\dfrac{(x,y)}{\|(x,y)\|^2}\right) & (x,y)\ne(0,0)\\[6pt] 0 & \text{cc}\end{cases}\\&=\begin{cases}\dfrac{\|(x,y)\|^2}{(x,y)} & (x,y)\ne(0,0)\\[6pt] 0 & (x,y)=(0,0)\end{cases}\\&=\begin{cases}\bar{u} & u\ne 0\\ 0 & u=0\end{cases}\\&=\bar{u}\end{align}$$
>>			5. Osea concluimos que $\psi\circ F\circ\psi_S^{-1}(x,y)=(x,-y)$
>>			6. De esto es evidente que es lineal luego es suave ($C^\infty$)
>>	- Analogamente vemos que $F^{-1}$ es suave tambien y por lo tanto continua

### Ejercicio 8

>[!Exercise]
>Sea $M$ el cilindro infinito; $M:=\{(x,y,z)\in\mathbb{R}^3:x^2+y^2=1\}$. Cubrir a $M$ con una sola carta.
>>[!Proof]-
>>1. Vamos a ver que $M\cong S^1\times\mathbb{R}$. Además:
>>$$S^1\times\mathbb{R}\cong S^1\times(0,\infty)\cong\mathbb{R}^2\setminus\{0\}$$
>>2. $M\cong S^1\times\mathbb{R}$ (trivial): $(x,y,z)\mapsto(x,y,z)$ es homeo.
>>3. $S^1\times\mathbb{R}\cong S^1\times(0,\infty)$ osea $\mathbb{R}\cong(0,\infty)$: $(x,y,z)\mapsto(x,y,e^z)$ es homeo.
>>4. $S^1\times(0,\infty)\cong\mathbb{R}^2\setminus\{(0,0)\}$: $(x,y,h)\mapsto(hx,hy)$, obviamente $(hx,hy)\ne 0$ y es claramente homeomorfismo.
>>5. Por lo tanto definimos $F:M\to\mathbb{R}^2\setminus\{0\}$ como $$F(x,y,z)=(e^z x,\, e^z y)$$con inversa: $$\tilde{F}(u,v)=\left(\frac{u}{\sqrt{u^2+v^2}},\,\frac{v}{\sqrt{u^2+v^2}},\,\ln\!\left(\sqrt{u^2+v^2}\right)\right)$$
>>6. Verificamos $F\circ\tilde{F}=\mathrm{Id}$ (trivial). Claramente $\tilde{F}(\mathbb{R}^2\setminus\{0\})\subseteq\mathrm{Dom}\,F$.
>>7. Calculamos $\tilde{F}\circ F$: $$\begin{align}\tilde{F}\circ F(x,y,z)&=\left(\frac{x}{\sqrt{x^2+y^2}},\,\frac{y}{\sqrt{x^2+y^2}},\,\ln\!\left(e^z\sqrt{x^2+y^2}\right)\right)\\&=(x,\,y,\,\ln(e^z))\\&=(x,\,y,\,z)\end{align}$$ esto vale porque $(x,y,z)\in M$ entonces $x^2+y^2=1$
>>8. Finalmente probamos $F$ es homeomorfismo. Luego $F$ es una carta que cubre el cilindro.
>>- **Otra alternativa** 
>>Usar la de meter la esfera en el cilindro y mandarlos puntos del cilindro a la interseccion con la esfera de la recta que une dicho punto con el origen. Y de ahi usar la estereografica para ir a $\mathbb{R}^{2}$. 
### Ejercicio 9

>[!Exercise] Ejercicio 9
>Sea $M$ una variedad compacta y conexa. ¿Puede ser $M$ cubierta por una sola carta?
>>[!Proof]-
>>1. Suponer que existe una carta $(M,\varphi)$ que cubre toda $M$, con
>>$$\varphi:M\xrightarrow{\;\sim\;}\varphi(M)\subseteq\mathbb{R}^n$$
>>homeomorfismo sobre un abierto de $\mathbb{R}^n$.
>>2. Por definición de carta, $\varphi(M)$ es **abierto** en $\mathbb{R}^n$.
>>3. Como $M$ es compacta y $\varphi$ es continua, $\varphi(M)$ es **compacto**, luego **cerrado** en $\mathbb{R}^n$.
>>4. Entonces $\varphi(M)$ es clopen en $\mathbb{R}^n$. Como $\mathbb{R}^n$ es conexo para $n\geq 1$ y $\varphi(M)\neq\varnothing$, se concluye $\varphi(M)=\mathbb{R}^n$.
>>5. Pero $\mathbb{R}^n$ no es compacto (no es acotado) para $n\geq 1$, contradicción.
>>6. Otra alternativa es usar homeo entonces $\varphi(M)$ es abierto de $\mathbb{R}^{n}$ spd $\varphi(M)=B_{r}(p)$. Pero esto no es compacto.. por que lo cubris con $B_{r-a_{n}}(p)$ con $a_{n}\rightarrow r$. Que son numerables.   
>>- **Observación**
>El caso $\dim M=0$ es trivial: una variedad conexa de dimensión $0$ es un punto, homeomorfo a $\mathbb{R}^0=\{0\}$, y sí admite una única carta.

### Ejercicio 10

>[!Exercise]
>Considerar el cociente $$\mathbb{RP}^2=S^2/{\sim}$$ dado por la relación de equivalencia $\sim$ sobre $S^2$ definida por $x\sim x$ o $x\sim -x$. 
>Mostrar que existe una única estructura diferenciable en $\mathbb{RP}^2$ tal que la proyección canónica es un difeomorfismo local.
>>[!Proof]-
>>1. la proyeccion canonica es $$\pi:S^2\to \mathbb{RP}^2$$ $(\mathbb{RP}^2=S^2/\sim)$  
>>2. Asumimos una estructura diferenciable estandar $\mathcal{F}_1$ para $S^2$
>>- **Veamos que existe una estructura dif en $\mathbb{RP}^2$ tal que $\pi$ es difeomorfismo local**  
>>	1. Dado $p\in S^2$ $\exists U$ abierto tal que $p\in U$ y $U\cap (-U)=\varnothing$ (osea tomamos un abierto donde no haya elementos y su opuesto)
>>	2. $\pi(U)$ es abierto de $\mathbb{RP}^2$ esto es pq $\pi^{-1}(\pi(U))=U\cup -U$ unión de abiertos
>>	3. Luego $$\pi|_U^{-1}: \pi(U)\subseteq \mathbb{R}\mathbb{P}^{2} \to U\subset S^2$$ es homeomorfismo  
>>	4. Ahora usamos $\varphi_i$ las estereográficas: $U\subset \mathrm{dom}(\varphi_i)$ seguro por que $\mathrm{dm}(\varphi_i)=S^2\setminus\{(0,\ldots,\pm1)\}$  
>>	5. Entonces $\phi_U:=\varphi_i\circ \pi|_U^{-1}:\pi(U)\to V\subset \mathbb{R}^2$ es homeomorfismo
>>- **Compatibilidad de las cartas dadas**
>>	1. Dados $(\tilde U=\pi(U),\phi_U)$ y $(\tilde V=\pi(V),\phi_V)$ cartas tq $\tilde U\cap \tilde V\neq\varnothing$ (notar $U\cap -U=\varnothing=V\cap -V$)  
>>	2. Entonces $\phi_V\circ \phi_U^{-1}:\phi_U(\tilde U\cap \tilde V)\to \phi_V(\tilde U\cap \tilde V)$ con $\phi_V\circ \phi_U^{-1}=\mathrm{Id}$ o $-\mathrm{Id}$ dependiendo de que proyección cociente elegimos para $\phi_V$. 
>>	3. Ambas son difeo por lo tanto $\mathcal{F}_2=\{(\tilde U,\phi_U)\}$ es atlas
>>- **Veamos que es difeo local con esta esctructura**
>>	1. Veremos $\pi:(S^2,\mathcal{F}_1)\to (\mathbb{RP}^2,\mathcal{F}_2)$ es difeomorfismo local  
>>	2. Sea $p\in S^2$ tomamos $U$ abierto tq $p\in U$ y $U\cap (-U)=\varnothing$ entonces $\pi(U)$ abierto
>>	3. Ahora queremos ver $\tilde\pi:U\subset S^2 \to \tilde\pi(U)\subset \mathbb{RP}^2$ es difeomorfismo
>>- **Homeomorfismo**
>>	1. Es homeo por definicion
>>- **Suavidad**
>>	1. Acá obviamente dado $p\in U$ los abiertos van a ser $U$ y $\tilde\pi(U)$ y van a cumplir la 1era parte de la def de suavidad, resta ver $\phi_U\circ \tilde\pi \circ \varphi_i^{-1}$ es suave
>>	2. Tomamos cartas $(\tilde\pi(U),\phi_U)$ y $(U,\varphi_i)$ y tenemos $$\phi_U\circ \tilde\pi \circ \varphi_i^{-1}:\varphi_i(U)\to \phi_U(\tilde U)$$claramente bien definida
>>	3. Ademas $\phi_U\circ \tilde\pi \circ \varphi_i^{-1}=\varphi_i\circ \tilde\pi|_U^{-1}\circ \tilde\pi \circ \varphi_i^{-1}=\mathrm{Id}$  
>>	4. Y como $\mathrm{Id}$ es $C^\infty$ entonces $\pi$ es difeo local
>>- **Unicidad**
>>	1. Supongamos hubiese otra estructura para $\mathbb{R}\mathbb{P}^2$, $\tilde{\mathcal{F}}_2 = \{(V,\psi)\}$ tal que $\pi : (\mathbb{S}^2,\mathcal{F}_1) \to (\mathbb{R}\mathbb{P}^2,\tilde{\mathcal{F}}_2)$ es difeo local
>>	2. Dados $(V,\psi)$ y $(\tilde{U},\phi_U)$. Queremos ver que $$\psi \circ \phi_{U}^{-1} : \phi_{U}(\tilde{U}\cap V) \to \psi(\tilde{U}\cap V) \subseteq \mathbb{R}^2 \to \subseteq \mathbb{R}^2$$es difeo
>>- **Suavidad de cambio de coordenadas**
>>	1. Primero notamos $$\psi \circ \phi|_{U}^{-1} =\psi\circ(\varphi_{i}\circ\pi |_{U}^{-1})^{-1}=\psi\circ\pi|_{U}\circ\varphi_{i}^{-1}$$
>>	2. Como $\pi$ es difeomorfismo local dado $q \in \phi_{U}(\tilde{U}\cap V)$ tomamos $p\in S^{2}$ tal que $\pi(p)=q$.
>>	3. Luego para digo $p$ sabemos $\exists U_p$ abierto tal que $\pi|_{U_p} : U_p \to \pi(U_p)$ es difeomorfismo entonces es suave
>>	4. Luego para todo par de cartas, en particular para $(V,\psi)$ y $(\pi|_{U}^{-1}(\tilde{U}),\varphi_{i})$ (considerando que estamos usando la nueva estructura en el codominio de $\pi$) sucede que $$\psi \circ \pi|_{U_p} \circ \varphi_{i}^{-1} : \varphi_{i}(\pi|_{U}^{-1}(\tilde{U})\cap\pi|_{U_{p}}^{-1}(V)) \to \psi(V)$$ es suave.
>>	5. Notar que claramente $p\in \pi|_{U}^{-1}(\tilde{U})\cap\pi|_{U_{p}}^{-1}(V)$ que es un abierto entonces $q\in \varphi_{i}(\pi|_{U}^{-1}(\tilde{U})\cap\pi|_{U_{p}}^{-1}(V))$ que es tambien abierto por que $\varphi_{i}$ es carta.
>>	6. Luego encontramos un abierto $\varphi_{i}(\pi|_{U}^{-1}(\tilde{U})\cap\pi|_{U_{p}}^{-1}(V))\cap\phi_{U}(\tilde{U}\cap V)$ (no es vacio por que $q$ esta adentro) donde $\psi\circ\phi|_{U}^{-1}=\psi\circ\pi|_{U}\circ\varphi_{i}^{-1}$ es suave. Por ende $\psi\circ\phi|_{U}^{-1}$ es suave
>>	7. Que la inversa de la composicion es suave sale analogamente usando que como $\pi|_{U_{p}}$ es difeo entonces si inversa es suave
>>- **Biyectiva**
>>	1. Es composición de biyectivas entonces es inyectiva y es sobre por def del codominio

### Ejercicio 11

>[!Exercise]
>Sea $\sim$ la relación de equivalencia en $\mathbb R^2$ dada por $x\sim y$ si y solo si $x-y\in\mathbb Z^2$. Considerar en el cociente $$T^2=\mathbb R^2/{\sim}$$ la única estructura diferenciable tal que la proyección es un difeomorfismo local. Mostrar que $T^2$ es difeomorfo a $S^1\times S^1$ provisto de la estructura diferenciable producto.
>>[!Proof]-
>>- **Damos una estructura a $\mathbb{T}^{2}$**
>>	1. Notar que $$\pi:\mathbb{R}^2\to \mathbb{R}^2/\mathbb{Z}^2=\mathbb{T}^2$$ no es inyectiva, pero dado $p\in\mathbb{R}^2$ $\exists U$ abierto tal que $$\pi|_U:U\to \pi(U)$$ es inyectiva (y trivialmente homeomorfismo); dicho $U$ cumple $$(U+k)\cap U=\varnothing\quad \forall k\in\mathbb{Z}^2\setminus\{0\}\quad(1)$$
>>	2. Por lo tanto $(\tilde{U}=\pi(U),\pi|_U^{-1})$ nos da cartas y estructura $\mathcal{F}$ 
>>- **Esta estructura hace que $\pi$ sea difeo local**
>>	1. Ahora si consideramos $\mathcal{F}_{1}$ un atlas estandar de $\mathbb{R}^{2}$ (osea $(U,Id)$)
>>	2. Queremos ver que $$\pi:(\mathbb{R}^{2},\mathcal{F}_{1})\rightarrow (\mathbb{T}^{2},\mathcal{F})$$ es difeo local.
>>	3. Notar que dado cualquier abierto $U\subseteq \mathbb{R}^{2}$ sucede que $\pi(U)$ es abierto de $\mathbb{T}^2$ pues $$\pi^{-1}(\pi(U))=\bigcup_{k\in\mathbb{Z}^2}(U+k)$$ es unión de abiertos
>>	4. Dado $p$ tomamos $p\in U\subseteq \mathbb{R}^{2}$ abierto que cumpla $(1)$ (de todas maneras todos los abiertos estan en $\mathcal{F}_{1}$) 
>>	5. Ademas $\pi|_U:U\to \pi(U)$ es claramente inyectiva por paso 4. (Por cómo tomamos $U$) y sobreyectiva por definición, luego es biyectiva
>>	6. Es continua por topología cociente (por que tomando un abierto en la imagen por definicion es abierto su su preimagen por $\pi$ es abierta).
>>	7. Y su inversa es continua por que por 3. $\pi$ manda abiertos en abiertos
>>	8. Luego $\pi|_{U}$ es homeomorfismo 
>>	9. Veamos que es suave: Dado $\tilde{p}\in U$ tomamos $(\pi(U),\pi|_{U}^{-1})\in \mathcal{F}$ y $(U,\mathrm{Id})\in \mathcal{F}_{1}$
>>	10. Claramente $U$ abierto y $\pi(U)$ abierto que ademas cumplen $\pi(\tilde{p})\in \pi(U)$ y $\pi(U)\subseteq \pi(U)$
>>	11. Y notamos $$\pi|_{U}^{-1}\circ (\pi|_U) \circ Id^{-1}: U\to \pi|_{U}^{-1}(\pi(U))=U$$ es suave pues es claramente la identidad
>>	12. Para ver que la inversa de $\pi|_{U}$ es suave se hace basicamente lo mismo
>>	13. Luego $\pi|_{U}$ es difeomorfismo. Entonces $\pi$ es difeomorfismo local
>>- **Unicidad de la estructura tal que la proyeccion es difeo local**
>>	1. Supongamos tenemos $\tilde{\mathcal{F}}$ otra estructura suave de $\mathbb{T}^{2}$ tal que $\pi$ es difeo local 
>>	2. Sean $(\tilde{U},\psi) \in \tilde{\mathcal{F}}$ y $(\pi(U),\pi|_{U}^{-1})\in \mathcal{F}$ queremos ver que $$\psi\circ(\pi|_{U}^{-1})^{-1}:\pi|_{U}^{-1}(\pi(U)\cap \tilde{U})\rightarrow\psi(\pi(U)\cap \tilde{U})$$ es difeomorfismo.
>>	3. Analogamente queremos ver que $\psi\circ\pi|_{U}$ es difeomorfismo
>>	4. Veamos suavidad localmente. Dado $p \in \pi|_{U}^{-1}(\pi(U)\cap \tilde{U})$ tenemos que existe un abierto $O$ tal que $\pi|_{O}:O\rightarrow\pi(O)$ es difeomorfismo en particular es suave
>>	5. Spd podemos tomar $\tilde{O}=O\cap \pi|_{U}^{-1}(\pi(U)\cap \tilde{U})$ que es claramente abierto de $p$ y afirmar lo mismo
>>	6. Ahora como es suave y tomando $(O,Id)$ $$\psi\circ\pi|_{U}\circ Id^{-1}:\tilde{O}\rightarrow\psi(\pi(U)\cap \tilde{U})$$ es $C^{\infty}$ (suave) como queriamos ver.
>>	7. Que es homeomorfismo ya lo tenemos porque es composicion de cartas
>>	8. Y que la inversa es suave. Sale de forma analoga considerando que $\pi|_{O}$ es difeomorfismo, entonces su inversa es suave
>>- **Veamos $\mathbb{T}^{2}$ es difeomorfo a $\mathbb{S}\times\mathbb{S}$**
>>	1. Miremos $F:\mathbb{R}^{2}\rightarrow \mathbb{S}\times\mathbb{S}$ dada por $F(x,y)=(e^{2\pi ix},e^{2\pi i y})$ esta cumple que $F(x+k_{1},y+k_{2})=(e^{2\pi ix+2k_{1}\pi i},e^{2\pi y+2k_{2}\pi i})=(e^{2\pi ix},e^{2\pi y})=F(x,y)$ para todo $(k_{1},k_{2})\in \mathbb{Z}^{2}$ osea cumple las hipotesis de [[GS - Teo3#^af5aa3]]     
>>	2. **Veamos inyectividad** Sean $F(x_{1},y_{1})=F(x_{2},y_{2})$ entonces $e^{2x_{1}\pi i}=e^{2x_{2}\pi i}$ por lo tanto $2x_{2}\pi i+2k\pi i=2x_{1}\pi i$ entonces $2(x_{2}-x_{1})\pi i +2k\pi i=0$ osea $x_{2}-x_{1}=-k$ que es un entero y lo mismo podemos hacer con $y_{2}-y_{1}=-q$ ambos enteros por ende $[x_{1},y_{1}]$ y $[x_{2},y_{2}]$ son la misma clase
>>	3. **Sobreyectividad:** Dado $(z,w)\in S^1\times S^1$ tenemos que existe $x$ tal que $z = e^{2\pi i x}$ y existe $y$ tal que $w = e^{2\pi i y}$ luego $(z,w)=\tilde F([x,y])$
>>	4. Concluimos que $\tilde F$ es biyectiva.
>>	5. Ademas como $\pi$ es difeomorfismo local entonces dado $p$ existe un $U$ abierto de $p$ tal que $\pi|_{U}$ es difeomorfismo. Y como $\tilde{F}$ es difeo local tenes otro abierto $\tilde{U}$ de $p$ tal que $\tilde{F}|_{\tilde{U}}$ es difeo
>>	6. Luego $\tilde{F}|_{\pi(U\cap \tilde{U})}=F|_{U\cap \tilde{U}}\circ(\pi|_{U\cap \tilde{U}})^{-1}$ es difeo por ser composicion de difeomorfismo
>>	7. Por lo tanto $\tilde{F}$ es difeomorfismo local. Y como era biyectiva entonces es difeomorfismo global

### Ejercicio 12

>[!Exercise]
>Considerar en $\mathbb R$ las estructuras diferenciables $\mathcal F$ y $\mathcal F'$ que contienen respectivamente los sistemas coordenados $(\mathbb R,\operatorname{id})$ y $(\mathbb R,t\mapsto t^3)$. Mostrar que son difeomorfas pero $\mathcal F\neq\mathcal F'$.
>>[!Proof]-
>>1. Sea
>>$$h:(\mathbb R,\mathcal F)\to(\mathbb R,\mathcal F'),\qquad h(x)=x^{1/3}.$$
>>Como función entre espacios topológicos subyacentes, $h$ es biyectiva y continua, con inversa
>>$$h^{-1}(x)=x^3.$$
>>2. Veamos que $h$ es suave. Tomamos la carta $(\mathbb R,\operatorname{id})\in\mathcal F$ en el dominio y la carta $(\mathbb R,\psi)\in\mathcal F'$ en el codominio, donde $$\psi(t)=t^3.$$
>>3. Entonces la representación en coordenadas es $$\psi\circ h\circ \operatorname{id}^{-1}(x)=\psi(x^{1/3})=(x^{1/3})^3=x,$$que es la identidad de $\mathbb R$, luego es $C^\infty$.
>>4. Veamos ahora que $h^{-1}$ es suave. Usando las cartas $(\mathbb R,\psi)\in\mathcal F'$ y $(\mathbb R,\operatorname{id})\in\mathcal F$, obtenemos $$\operatorname{id}\circ h^{-1}\circ \psi^{-1}(x)=h^{-1}(x^{1/3})=(x^{1/3})^3=x,$$que otra vez es la identidad, y por lo tanto es $C^\infty$.
>>5. Concluimos que $h$ es un difeomorfismo entre $(\mathbb R,\mathcal F)$ y $(\mathbb R,\mathcal F')$. Por lo tanto, las dos estructuras son difeomorfas.
>>6. Veamos ahora que $\mathcal F\neq\mathcal F'$. Si fueran iguales, entonces las cartas $$(\mathbb R,\operatorname{id})\qquad\text{y}\qquad(\mathbb R,\psi)$$pertenecerían a una misma estructura diferenciable, y por ende deberían ser compatibles.
>>7. Pero uno de los cambios de coordenadas sería $$\operatorname{id}\circ\psi^{-1}(x)=x^{1/3}.$$su derivada para $x\neq 0$ es $$\frac{d}{dx}\,x^{1/3}=\frac{1}{3}x^{-2/3},$$que no está definida en $x=0$. En particular, $x^{1/3}$ no es $C^1$ en $0$, y mucho menos $C^\infty$.
>>8. Luego las cartas no son compatibles, contradicción. Por consiguiente,
>>$$\mathcal F\neq\mathcal F'.$$

### Ejercicio 13 (Opcional)

>[!Exercise]
>Denotemos por $M(m\times n,\mathbb R)$ el espacio vectorial de las matrices de tamaño $m\times n$ con coeficientes reales, y por $M_k(m\times n,\mathbb R)$ el subconjunto formado por las matrices de rango $k$. Considerar sobre $$M_1(2\times 2,\mathbb R)$$ la topología heredada de $M(2\times 2,\mathbb R)$. Para $i=1,2$, definir $$U_i=\{X\in M_1(2\times 2,\mathbb R):\text{la fila }i\text{ de }X\text{ es no nula}\}$$ y $$\phi_i(X)=\bigl(\text{fila }i\text{ de }X,\langle\text{fila }1\text{ de }X,\text{fila }2\text{ de }X\rangle\bigr).$$ Mostrar que cada $U_i$ es un abierto de $M_1(2\times 2,\mathbb R)$, que cada $\phi_i$ es un homeomorfismo entre $U_i$ y un abierto de $\mathbb R^3$, y comprobar que $$\{(U_i,\phi_i)\}_{i=1,2}$$ es un atlas sobre $M_1(2\times 2,\mathbb R)$.
>>[!Proof]-
>>En $$M_1(2\times 2,\mathbb R),$$ el conjunto $$U_i=\{X:\text{la fila }i\text{ es no nula}\}$$ es abierto relativo, porque su complemento dentro de $$M_1(2\times 2,\mathbb R)$$ está dado por la anulación de dos coordenadas.
>>Si $$X=\begin{pmatrix}a\\ b\end{pmatrix}\in U_1,$$ con $$a\in\mathbb R^2\setminus\{0\},$$ entonces $$\operatorname{rg}(X)=1$$ implica que $$b=\lambda a$$ para algún $$\lambda\in\mathbb R.$$ Además $$\langle a,b\rangle=\lambda\|a\|^2.$$ Entonces $$\lambda=\langle a,b\rangle/\|a\|^2,$$ y $X$ queda determinado por $$\phi_1(X)=\bigl(a,\langle a,b\rangle\bigr)\in(\mathbb R^2\setminus\{0\})\times\mathbb R.$$ La inversa es $$\phi_1^{-1}(a,c)=\begin{pmatrix}a\\ \frac{c}{\|a\|^2}a\end{pmatrix}.$$ Luego $$\phi_1$$ es homeomorfismo sobre el abierto $$(\mathbb R^2\setminus\{0\})\times\mathbb R\subset\mathbb R^3.$$ Análogamente para $$i=2.$$ Las transiciones son suaves porque están dadas por cocientes por $$\|a\|^2$$ o $$\|b\|^2,$$ nunca nulos en el dominio correspondiente.

### Ejercicio 14 (Opcional)

>[!Exercise]
>Sean $m,n\in\mathbb N$, con $m<n$, y sea $$M_m(m\times n,\mathbb R)$$ el subconjunto de las matrices de rango igual a $m$. Dar a $$M_m(m\times n,\mathbb R)$$ una estructura de variedad diferenciable.
>>[!Proof]-
>>Si $$m<n,$$ el conjunto $$M_m(m\times n,\mathbb R)$$ de matrices de rango $m$ es el conjunto de matrices de rango máximo. Esto equivale a que algún menor $$m\times m$$ sea no nulo. Por lo tanto es un abierto de $$\mathbb R^{mn}\simeq M(m\times n,\mathbb R).$$ En consecuencia hereda de $$\mathbb R^{mn}$$ una estructura de variedad diferenciable de dimensión $$mn=m(m+n-m).$$

### Ejercicio 15

>[!Exercise]
>Considerar en $\mathbb C$ la relación de equivalencia $$x\sim e^{i2k\pi/3}x,\qquad k=0,1,2.$$ Mostrar que $$\mathbb C/{\sim}$$ es localmente euclídeo de dimensión $2$, que admite estructura diferenciable, pero que no admite ninguna estructura diferenciable tal que la proyección sea un difeomorfismo local.
>>[!Proof]-
>>1. Sea $$G=\{1,\omega,\omega^2\},\qquad \omega=e^{2\pi i/3},$$ actuando sobre $$\mathbb C$$ por multiplicación. El cociente $$\mathbb C/G$$ es localmente euclídeo de dimensión $2$:
>>- si $$z\ne 0,$$ la acción es libre, y para un disco pequeño $$D$$ alrededor de $$z,$$ la proyección $$D\to\pi(D)$$ es homeomorfismo;
>>- cerca de $$0,$$ la aplicación $$[z]\longmapsto z^3$$ está bien definida en el cociente y da un homeomorfismo entre un entorno de $$[0]$$ y un disco de $$\mathbb C.$$
>>Eso da también una estructura suave: usar las cartas de cociente fuera de $$[0]$$ y la carta $$[z]\mapsto z^3$$ en torno a $$[0].$$
>>No puede existir una estructura suave para la cual la proyección $$\pi:\mathbb C\to\mathbb C/G$$ sea un difeomorfismo local en $$0$$: cualquier entorno de $$0$$ contiene puntos $$z,\omega z,\omega^2 z$$ distintos con la misma imagen, así que $$\pi$$ no es inyectiva en ningún entorno de $$0.$$ Un difeomorfismo local debe ser localmente biyectivo.

### Ejercicio 16

>[!Exercise]
>Sea $$M_1=S^1\times\mathbb R$$ con la estructura diferenciable producto, y sea $$M_2$$ la variedad diferenciable del ejercicio del cilindro infinito. ¿Puede probar que $$M_1$$ y $$M_2$$ son difeomorfas?
>>[!Proof]-
>>Sí. La aplicación $$F:S^1\times\mathbb R\to M_2,\qquad F((x,y),t)=(x,y,t)$$ es un difeomorfismo, donde $$M_2=\{(x,y,z)\in\mathbb R^3:x^2+y^2=1\}.$$ Su inversa es $$(x,y,z)\mapsto((x,y),z).$$ Ambas son suaves.

### Ejercicio 17

>[!Exercise]
>Mostrar que el cilindro $$C=\mathbb R^2/{\sim},$$ donde $$z\sim z+2k\pi e_1$$ con $$k\in\mathbb Z,$$ admite una única estructura diferenciable tal que la proyección canónica es un difeomorfismo local. Probar que es difeomorfo a cada una de las siguientes variedades diferenciables:
>- la variedad producto $$S^1\times\mathbb R,$$
>- $$\mathbb R^2\setminus\{0\},$$
>- la superficie de $\mathbb R^3$ cuya construcción es análoga a la de la banda de Moebius a partir de una cinta, pero dando una vuelta entera antes de pegar.
>>[!Proof]-
>>La relación $$z\sim z+2k\pi e_1$$ es la acción de $$\mathbb Z$$ por traslaciones horizontales. Como es libre y propiamente discontinua, existe una única estructura suave sobre $$C=\mathbb R^2/{\sim}$$ tal que la proyección canónica $$\pi:\mathbb R^2\to C$$ es un difeomorfismo local.
>>
>>**17.a: $C\cong S^1\times\mathbb R$** Definimos $$F([x,y])=(e^{ix},y).$$ Está bien definida porque $$e^{i(x+2k\pi)}=e^{ix}.$$ Es biyectiva y suave, con inversa local dada por una rama del argumento en $$S^1.$$ Por lo tanto es un difeomorfismo.
>>
>>**17.b: $C\cong \mathbb R^2\setminus\{0\}$** Definimos $$G([x,y])=\bigl(e^y\cos x,\,e^y\sin x\bigr).$$ De nuevo es bien definida por la periodicidad en $$x.$$ Su inversa es $$(u,v)\longmapsto\left[\arg(u+iv),\,\log\sqrt{u^2+v^2}\right].$$ Entonces $$G$$ es un difeomorfismo.
>>
>>**17.c: superficie con una vuelta entera** Una parametrización periódica natural es $$H([x,y])=\bigl((2+y\cos x)\cos x,\,(2+y\cos x)\sin x,\,y\sin x\bigr).$$ La periodicidad en $$x$$ muestra que está bien definida sobre el cociente. Esta aplicación describe la superficie obtenida al pegar una cinta después de dar una vuelta entera. En los dominios locales donde se usan coordenadas $$(x,y),$$ $$H$$ es un difeomorfismo local, y por tanto identifica esa superficie con el cilindro $$C.$$

### Ejercicio 18

>[!Exercise]
>Dar estructura de variedad diferenciable a los siguientes conjuntos:
>- $$M=\{(v,w)\in\mathbb R^2\times\mathbb R^2:\|v\|=1,\ \|w\|=1,\ \langle v,w\rangle=0\},$$
>- el conjunto de todos los prismas en $\mathbb R^3$ de lados paralelos a los ejes y con volumen unitario,
>- el conjunto de todos los planos punteados orientados en $\mathbb R^3$,
>- el conjunto de todas las rectas orientadas en el plano.
>>[!Proof]-
>>**18.a** Sea $$M=\{(v,w)\in\mathbb R^2\times\mathbb R^2:\|v\|=1,\ \|w\|=1,\ \langle v,w\rangle=0\}.$$ Si $$v=(\cos\theta,\sin\theta),$$ entonces necesariamente $$w=\pm(-\sin\theta,\cos\theta).$$ Así, $$M\cong S^1\times\{\pm1\}.$$ En particular es una variedad diferenciable de dimensión $1$, con dos componentes conexas.
>>
>>**18.b** Un prisma con caras paralelas a los ejes y volumen $1$ queda determinado por:
>>- un vértice $$(x_0,y_0,z_0)\in\mathbb R^3,$$
>>- longitudes $$a,b,c>0$$ con $$abc=1.$$
>>Tomando $$u=\log a$$ y $$v=\log b,$$ resulta $$c=e^{-u-v}.$$ Luego el espacio de prismas es difeomorfo a $$\mathbb R^3\times\mathbb R^2\cong\mathbb R^5.$$
>>
>>**18.c** Un plano punteado orientado en $$\mathbb R^3$$ queda determinado por:
>>- un punto $$p\in\mathbb R^3,$$
>>- una orientación del plano, equivalente a elegir un normal unitario $$n\in S^2.$$
>>Entonces el espacio de todos los planos punteados orientados es difeomorfo a $$\mathbb R^3\times S^2,$$ que es una variedad de dimensión $5$.
>>
>>**18.d** Una recta orientada del plano queda determinada por un vector unitario de dirección $$u\in S^1$$ y por la distancia orientada $$\rho\in\mathbb R$$ al origen en la dirección normal $$Ju,$$ donde $$J$$ es la rotación de $$\pi/2.$$ La recta es $$\ell_{u,\rho}=\{\rho\,Ju+tu:t\in\mathbb R\}.$$ El par $$(u,\rho)$$ determina $$\ell_{u,\rho}$$ de manera única. Por lo tanto el espacio de rectas orientadas es difeomorfo a $$S^1\times\mathbb R.$$
