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
>>**3.a** Si $B=\{v_1,\dots,v_n\}$ es una base de $V$, la aplicación $$T_B:\mathbb R^n\to V,\qquad (t_1,\dots,t_n)\mapsto \sum t_iv_i$$ es lineal biyectiva. Transportando la topología usual de $\mathbb R^n$ por $T_B$, obtenemos una topología de espacio vectorial topológico Hausdorff sobre $V$. Por unicidad de la topología Hausdorff compatible en dimensión finita, esa topología coincide con $\tau$. Luego $T_B$ es un homeomorfismo y su inversa $\varphi_B$ también lo es.
>>Aplicando esto a $B_1$ y $B_2$, tanto $\varphi_{B_1}$ como $\psi_{B_2}$ son homeomorfismos $V\to\mathbb R^n$.
>>
>>**3.b** Cada familia con una sola carta, $$\{(V,\varphi_{B_1})\},\qquad \{(V,\psi_{B_2})\},$$ es un atlas. La función de cambio de coordenadas es $$\psi_{B_2}\circ\varphi_{B_1}^{-1}:\mathbb R^n\to\mathbb R^n,$$ que es una transformación lineal invertible, luego $C^\infty$. Su inversa también es lineal, luego $C^\infty$. Por lo tanto los atlas son compatibles y determinan la misma estructura diferenciable.

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
>>**7.a**
>>Definimos dos atlas sobre $S^n$:
>>- **Atlas I** (casquetes): $\{(\phi_i^\varepsilon, U_i^\varepsilon) : \varepsilon = \pm 1,\, 1 \le i \le n+1\}$
>>- **Atlas II** (estereográficas): $\{(\psi_1, V_1),(\psi_2, V_2)\}$
>>
>>donde
>>$$V_1 = S^n\setminus\{(0,\ldots,0,1)\}, \qquad \psi_1(x)=\left(\frac{x_1}{1-x_{n+1}},\ldots,\frac{x_n}{1-x_{n+1}}\right)$$
>>$$V_2 = S^n\setminus\{(0,\ldots,0,-1)\}, \qquad \psi_2(x)=\left(\frac{x_1}{1+x_{n+1}},\ldots,\frac{x_n}{1+x_{n+1}}\right)$$
>>
>>Claramente $\displaystyle\bigcup_{i,\varepsilon} U_i^\varepsilon = V_1\cup V_2 = S^n$.
>>
>>Ya asumiendo que ambos son atlas, resta ver que son compatibles. El cambio de cartas es:
>>$$\psi_j\circ\phi_i^\varepsilon : \phi_i^\varepsilon(V_j\cap U_i^\varepsilon)\longrightarrow \psi_j(V_j\cap U_i^\varepsilon)$$
>>
>>Sin pérdida de generalidad $\varepsilon = +$. La inversa de $\phi_i^+$ inserta $\sqrt{1-(x_1^2+\cdots+x_n^2)}$ en la posición $i$, luego:
>>$$(\psi_j\circ\phi_i^+)(x_1,\ldots,x_n) = \psi_j\!\left(x_1,\ldots,x_{i-1},\sqrt{1-(x_1^2+\cdots+x_n^2)},x_{i+1},\ldots,x_n\right)$$
>>$$= \left(\frac{x_1}{1-x_n},\;\ldots,\;\frac{1-\sqrt{x_1^2+\cdots+x_n^2}}{1-x_n},\;\ldots,\;\frac{x_{n-1}}{1-x_n}\right)$$
>>
>>y esto es obviamente diferenciable. Va a ser análogo para la inversa.
>>$\Rightarrow$ Son compatibles $\Rightarrow$ Determinan la misma estructura diferenciable.
>>
>>**7.b** Sea $$M=\mathbb C\cup\{\infty\}$$ con el atlas dado por $$(U,\varphi)=(\mathbb C,\operatorname{id}),\qquad (V,\psi),\ \psi(z)=1/z,\ \psi(\infty)=0.$$ La proyección estereográfica desde el polo norte define un difeomorfismo $$F:S^2\to M$$ que identifica la carta estereográfica usual en $S^2\setminus\{N\}$ con $\operatorname{id}$ en $\mathbb C$, y la carta estereográfica desde el polo sur con la carta $z\mapsto 1/z$. Por lo tanto $S^2$ con su estructura suave estándar es difeomorfa a $M$.

### Ejercicio 8

>[!Exercise]
>Sea $$M=\{(x,y,z)\in\mathbb R^3:x^2+y^2=1\}.$$ Cubrir a $M$ con una sola carta.
>>[!Proof]-
>>Definimos $$\Phi:M\to\mathbb R^2\setminus\{0\},\qquad \Phi(x,y,z)=\bigl(e^z x,\,e^z y\bigr).$$ Como $x^2+y^2=1$, la imagen nunca es $0$. La inversa es $$\Phi^{-1}(u,v)=\left(\frac{u}{\sqrt{u^2+v^2}},\,\frac{v}{\sqrt{u^2+v^2}},\,\log\sqrt{u^2+v^2}\right).$$ Luego $\Phi$ es un difeomorfismo $$M\cong\mathbb R^2\setminus\{0\}.$$ En particular, $M$ queda cubierto por una sola carta.

### Ejercicio 9

>[!Exercise]
>Sea $M$ una variedad compacta y conexa. ¿Puede ser $M$ cubierta por una sola carta?
>>[!Proof]-
>>No, salvo el caso $0$-dimensional de un solo punto. Si $M$ estuviera cubierta por una sola carta, sería homeomorfa a un abierto no vacío de $\mathbb R^n$. Si $n\ge 1$, ningún abierto no vacío de $\mathbb R^n$ es compacto. Por lo tanto, una variedad compacta y conexa de dimensión positiva no puede estar cubierta por una sola carta. El único caso excepcional es $$M=\{\ast\},$$ que es una variedad compacta, conexa y de dimensión $0$.

### Ejercicio 10

>[!Exercise]
>Considerar el cociente $$\mathbb{RP}^2=S^2/{\sim}$$ dado por la relación de equivalencia $\sim$ sobre $S^2$ definida por $x\sim x$ o $x\sim -x$. Mostrar que existe una única estructura diferenciable en $\mathbb{RP}^2$ tal que la proyección canónica es un difeomorfismo local.
>>[!Proof]-
>>La acción antipodal de $\{\pm1\}$ sobre $S^2$ es libre. Para cada casquete $$U_i^\pm\subset S^2,$$ la restricción $$\pi|_{U_i^\pm}:U_i^\pm\to\pi(U_i^\pm)$$ es un homeomorfismo local y $\pi(U_i^\pm)$ es abierto en $\mathbb{RP}^2$. Entonces las aplicaciones $$\varphi_i^\pm\circ(\pi|_{U_i^\pm})^{-1}:\pi(U_i^\pm)\to B^2$$ definen un atlas suave en $\mathbb{RP}^2$.
>>Con esa estructura, $$\pi:S^2\to\mathbb{RP}^2$$ es un difeomorfismo local porque cerca de cada punto de $S^2$ puede restringirse a un casquete donde es difeomorfismo sobre su imagen.
>>La unicidad sigue porque cualquier estructura suave sobre $\mathbb{RP}^2$ que haga a $\pi$ un difeomorfismo local debe tener exactamente esas cartas locales inducidas por $\pi$, y por ende coincide con la anterior.

### Ejercicio 11

>[!Exercise]
>Sea $\sim$ la relación de equivalencia en $\mathbb R^2$ dada por $x\sim y$ si y solo si $x-y\in\mathbb Z^2$. Considerar en el cociente $$T^2=\mathbb R^2/{\sim}$$ la única estructura diferenciable tal que la proyección es un difeomorfismo local. Mostrar que $T^2$ es difeomorfo a $S^1\times S^1$ provisto de la estructura diferenciable producto.
>>[!Proof]-
>>Sea $$\pi:\mathbb R^2\to T^2=\mathbb R^2/\mathbb Z^2$$ la proyección cociente. La acción de $\mathbb Z^2$ por traslaciones es libre y propiamente discontinua, así que existe una única estructura suave en $T^2$ tal que $\pi$ es difeomorfismo local.
>>Definimos $$F:T^2\to S^1\times S^1,\qquad F([x,y])=\bigl(e^{2\pi i x},e^{2\pi i y}\bigr).$$ Está bien definida porque sumar enteros a $x$ o $y$ no cambia el valor de la exponencial. Es biyectiva, ya que dos pares tienen la misma imagen si y solo si difieren en un vector de $\mathbb Z^2$. Es suave y su inversa es localmente dada por ramas del logaritmo o del argumento. Luego $F$ es un difeomorfismo.

### Ejercicio 12

>[!Exercise]
>Considerar en $\mathbb R$ las estructuras diferenciables $\mathcal F$ y $\mathcal F'$ que contienen respectivamente los sistemas coordenados $(\mathbb R,\operatorname{id})$ y $(\mathbb R,t\mapsto t^3)$. Mostrar que son difeomorfas pero $\mathcal F\neq\mathcal F'$.
>>[!Proof]-
>>Sea $\mathcal F$ la estructura generada por $$(\mathbb R,\operatorname{id})$$ y $\mathcal F'$ la generada por $$(\mathbb R,\psi),\qquad \psi(t)=t^3.$$ No son iguales, porque si lo fueran, las cartas $$(\mathbb R,\operatorname{id})\qquad\text{y}\qquad(\mathbb R,\psi)$$ serían compatibles. Eso exigiría que $$\operatorname{id}\circ\psi^{-1}(t)=t^{1/3}$$ fuera suave, lo cual es falso en $0$.
>>Sin embargo, son difeomorfas. La aplicación $$h:(\mathbb R,\mathcal F)\to(\mathbb R,\mathcal F'),\qquad h(t)=t^{1/3}$$ es un difeomorfismo: en coordenadas, $$\psi\circ h\circ \operatorname{id}^{-1}(t)=t,\qquad \operatorname{id}\circ h^{-1}\circ \psi^{-1}(t)=t.$$

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
>>Sea $$G=\{1,\omega,\omega^2\},\qquad \omega=e^{2\pi i/3},$$ actuando sobre $$\mathbb C$$ por multiplicación. El cociente $$\mathbb C/G$$ es localmente euclídeo de dimensión $2$:
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
