# Funciones Analíticas — Práctico 5

>[!exercise] Ejercicio 1
>Sea $p(z)$ un polinomio de grado $n$. Sea $R>0$ tal que $p$ no se anula en $\{z\in\mathbb C:|z|\ge R\}$. Probar que $$\int_\gamma\frac{p'(z)}{p(z)}\,dz=2\pi i n,$$ donde $\gamma(t)=Re^{it}$ con $t\in[0,2\pi]$.
>
>>[!Proof]-
>>1. Por el teorema fundamental del álgebra, existen raíces distintas $x_1,\dots,x_m$ con multiplicidades $\alpha_1,\dots,\alpha_m\in\mathbb N$ tales que $p(z)=c\prod_{j=1}^{m}(z-x_j)^{\alpha_j}$, con $c\ne0$ y $\sum_{j=1}^{m}\alpha_j=n$. Como $p$ no se anula para $|z|\ge R$, se tiene $|x_j|<R$ para todo $j$.
>>2. Derivando el producto y dividiendo por $p(z)$, el factor constante $c$ y los demás factores se cancelan, de modo que $$\frac{p'(z)}{p(z)}=\sum_{j=1}^{m}\frac{\alpha_j}{z-x_j}$$ sobre $\gamma$.
>>3. Por linealidad y por [[FA - Teo7#^a7e91c|Fórmula integral de Cauchy]], aplicada a la función constante $1$ en cada $x_j$ interior a la circunferencia positivamente orientada $\gamma$, $$\int_\gamma\frac{p'(z)}{p(z)}\,dz=\sum_{j=1}^{m}\alpha_j\int_\gamma\frac{1}{z-x_j}\,dz=2\pi i\sum_{j=1}^{m}\alpha_j=2\pi i n.$$

>[!exercise] Ejercicio 2
>Probar la Regla de L'Hopital para funciones analíticas: sean $f$ y $g$ funciones analíticas en $G$ y sea $a\in G$.
>- **(a)** Si $f(a)=g(a)=0$ y $g'(a)\ne 0$ entonces $\lim_{z\to a}\frac{f(z)}{g(z)}=\lim_{z\to a}\frac{f'(z)}{g'(z)}=\frac{f'(a)}{g'(a)}$.
>- **(b)** Probar la Regla de L'Hopital siendo $a$ un polo de $f$ y de $g$.
>
>>[!Proof]-
>>- (a)
>>	1. Por definición de derivada, $$\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=f'(a),\qquad \lim_{h\to0}\frac{g(a+h)-g(a)}{h}=g'(a)\ne0.$$ Como el segundo límite es no nulo, su cociente incremental es no nulo para $h\ne0$ suficientemente pequeño y, por continuidad de la inversión, $$\lim_{h\to0}\frac{1}{\dfrac{g(a+h)-g(a)}{h}}=\frac{1}{g'(a)}.$$
>>	2. Dividimos los cocientes incrementales, usamos $f(a)=g(a)=0$ y cancelamos $h$: $$\frac{\dfrac{f(a+h)-f(a)}{h}}{\dfrac{g(a+h)-g(a)}{h}}=\frac{\dfrac{f(a+h)}{h}}{\dfrac{g(a+h)}{h}}=\frac{f(a+h)}{g(a+h)}.$$ Ambos factores del producto formado por el cociente incremental de $f$ y el inverso del de $g$ tienen límites finitos. Por la regla del límite del producto, $$\lim_{z\to a}\frac{f(z)}{g(z)}=f'(a)\frac{1}{g'(a)}.$$
>>	3. Como $f'$ y $g'$ son continuas y $g'(a)\ne0$, $$\lim_{z\to a}\frac{f'(z)}{g'(z)}=\frac{f'(a)}{g'(a)}.$$ Esto prueba todas las igualdades del inciso (a).
>>- (b)
>>	1. **Contexto del inciso.** Aquí $f$ y $g$ son analíticas en un entorno perforado de $a$ y tienen un polo en $a$, no son analíticas en el propio punto. Queremos probar $$\lim_{z\to a}\frac{f(z)}{g(z)}=\lim_{z\to a}\frac{f'(z)}{g'(z)},$$ permitiendo el valor $\infty$ en la esfera compleja. Partimos de que $|f(z)|\to\infty$ y $|g(z)|\to\infty$. En un entorno perforado suficientemente pequeño ambas son no nulas, y sus inversas son analíticas y tienden a cero.
>>	2. **Justificamos la extensión de las inversas sin usar Laurent ni citar singularidad evitable.** Sea $q$ cualquiera de las funciones $1/f$ y $1/g$. Definimos $H(z)=(z-a)^2q(z)$ para $z\ne a$ y $H(a)=0$. Como $q(z)\to0$, la función $H$ es continua en $a$ y $$H'(a)=\lim_{z\to a}\frac{H(z)-H(a)}{z-a}=\lim_{z\to a}(z-a)q(z)=0.$$ Fuera de $a$ es analítica, de modo que es analítica en todo un disco centrado en $a$. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], $$H(z)=\sum_{k=2}^{\infty}c_k(z-a)^k.$$ La serie $$Q(z)=\sum_{j=0}^{\infty}c_{j+2}(z-a)^j$$ define una función analítica en ese disco y coincide con $q(z)=H(z)/(z-a)^2$ cuando $z\ne a$. Por continuidad, $Q(a)=\lim_{z\to a}q(z)=0$. Así hemos construido la extensión analítica de cada inversa.
>>	3. **Taylor determina el orden de los ceros de las inversas.** Sean $F$ y $G$ las extensiones de $1/f$ y $1/g$. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], y como ninguna es idénticamente nula en un disco centrado en $a$ (ambas son no nulas fuera de $a$), cada serie tiene un primer coeficiente no nulo. Como $F(a)=G(a)=0$, sus índices $m,n$ son enteros positivos. Factorizando las series, $$F(z)=(z-a)^mU(z),\qquad G(z)=(z-a)^nV(z),\qquad U(a)V(a)\ne0,$$ con $U,V$ analíticas. Reducimos el disco para que $U$ y $V$ no se anulen y ponemos $u=1/U$, $v=1/V$. Entonces $$f(z)=\frac{u(z)}{(z-a)^m},\qquad g(z)=\frac{v(z)}{(z-a)^n},\qquad u(a)v(a)\ne0.$$ Esta representación ha sido deducida de Taylor, no supuesta.
>>	4. **Comparamos los cocientes.** Derivando las expresiones anteriores para $z\ne a$, $$f'(z)=(z-a)^{-m-1}\bigl((z-a)u'(z)-mu(z)\bigr),\qquad g'(z)=(z-a)^{-n-1}\bigl((z-a)v'(z)-nv(z)\bigr).$$ El último paréntesis tiende a $-nv(a)\ne0$, por lo que $g'$ no se anula en un entorno perforado suficientemente pequeño. Por tanto, $$\frac{f(z)}{g(z)}=(z-a)^{n-m}\frac{u(z)}{v(z)},\qquad \frac{f'(z)}{g'(z)}=(z-a)^{n-m}\frac{(z-a)u'(z)-mu(z)}{(z-a)v'(z)-nv(z)}.$$ Los factores que acompañan a $(z-a)^{n-m}$ tienden, respectivamente, a $u(a)/v(a)$ y $mu(a)/(nv(a))$, ambos no nulos.
>>	5. **Distinguimos los órdenes.** Si $n>m$, ambos cocientes tienden a $0$. Si $n=m$, ambos tienden a $u(a)/v(a)$, pues el factor $m/n$ vale $1$. Si $n<m$, el módulo de $(z-a)^{n-m}$ tiende a infinito, y los otros factores tienen límites no nulos; por ello ambos cocientes tienden a $\infty$ en la esfera compleja. En todos los casos, $$\lim_{z\to a}\frac{f(z)}{g(z)}=\lim_{z\to a}\frac{f'(z)}{g'(z)}.$$

>[!exercise] Ejercicio 3
>Cada una de las siguientes funciones $f$ tiene una singularidad aislada en $z=0$. Determinar qué tipo de singularidad es. Si es una singularidad evitable definir $f(0)$ de manera tal que $f$ resulte analítica en $z=0$ y si es un polo encontrar su parte singular.
>- **(a)** $f(z)=\frac{\operatorname{sen} z}{z}$.
>- **(b)** $f(z)=\frac{\cos z}{z}$.
>- **(c)** $f(z)=\frac{\cos z-1}{z}$.
>- **(d)** $f(z)=\exp(\frac{1}{z})$.
>- **(e)** $f(z)=\frac{\log(z+1)}{z^2}$.
>- **(f)** $f(z)=z\cos(\frac{1}{z})$.
>- **(g)** $f(z)=\frac{z^2+1}{z(z-1)}$.
>- **(h)** $f(z)=z^n\operatorname{sen}(\frac{1}{z})$, $(n\in\mathbb N)$.
>
>>[!Proof]-
>>- (a)
>>	1. Por [[FA - Teo10#^a10e02|extensión analítica de $\sin z/z$]], la singularidad es evitable. Para $z\ne0$, $$\frac{\operatorname{sen}z}{z}=\sum_{n=0}^{\infty}\frac{(-1)^n z^{2n}}{(2n+1)!}=1-\frac{z^2}{3!}+\frac{z^4}{5!}-\cdots.$$ La suma de esta serie es entera y coincide con $f$ fuera del origen; por lo tanto, definimos $f(0)=1$.
>>- (b)
>>	1. Como $\cos z\to1$ cuando $z\to0$, tenemos $$|f(z)|=\frac{|\cos z|}{|z|}\xrightarrow[z\to0]{}+\infty.$$ Por lo tanto, $0$ es un polo de $f$.
>>	2. Aplicamos [[FA - Teo10#^a10e04|reconocer un polo y su orden]] con $g(z)=\cos z$, $a=0$ y $m=1$. Como $g$ es analítica y $g(0)=1\ne0$, el polo es de orden $1$.
>>	3. Desarrollamos $\cos z$ mediante [[FA - Teo2#^6fedda|Taylor]] y dividimos por $z$: $$\cos z=\sum_{n=0}^{\infty}\frac{(-1)^n z^{2n}}{(2n)!},\qquad f(z)=\sum_{n=0}^{\infty}\frac{(-1)^n z^{2n-1}}{(2n)!}=\frac1z+\sum_{n=1}^{\infty}\frac{(-1)^n z^{2n-1}}{(2n)!}.$$
>>	4. El término de índice $n=0$ es $1/z$, y para $n\ge1$ los exponentes $2n-1$ son positivos. Por [[FA - Teo10#^a10b04|parte singular y parte analítica]], la parte singular es $1/z$ y la parte analítica es $$h(z)=\sum_{n=1}^{\infty}\frac{(-1)^n z^{2n-1}}{(2n)!}=-\frac{z}{2!}+\frac{z^3}{4!}-\cdots,$$ analítica también en $0$ por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]].
>>- (c)
>>	1. Por la regla de L'Hôpital del ejercicio 2(a), $$\lim_{z\to0}\frac{\cos z-1}{z}=\lim_{z\to0}(-\operatorname{sen}z)=0.$$
>>	2. Por [[FA - Teo10#^a10c01|criterio mediante un límite finito]], la singularidad es evitable y definimos $f(0)=0$ para obtener la extensión analítica en el origen.
>>- (d)
>>	1. Aunque $|1/z|\to\infty$ cuando $z\to0$, esto no implica que $|e^{1/z}|\to\infty$: $$|e^{1/z}|=e^{\operatorname{Re}(1/z)}.$$
>>	2. Por el eje real negativo, $$\lim_{x\to0^-}|e^{1/x}|=0,$$ por lo que el módulo no tiende a infinito cuando $z\to0$. Por tanto, $0$ no es un polo.
>>	3. Por el eje real positivo, $$\lim_{x\to0^+}e^{1/x}=+\infty.$$
>>	4. Así, no existe un límite finito en $0$ y, por [[FA - Teo10#^a10c01|criterio mediante un límite finito]], la singularidad no es evitable.
>>	5. Como no es un polo ni una singularidad evitable, $0$ es una [[FA - Teo10#^a10d04|singularidad esencial]].
>>- (e)
>>	1. Consideramos la rama de $\log(1+z)$ analítica cerca de $0$ y con $\log(1)=0$. Por L'Hôpital, $$\lim_{z\to0}\frac{\log(1+z)}{z^2}=\lim_{z\to0}\frac{1}{2z(1+z)}=\infty,$$ pues $|2z(1+z)|\to0$. Por lo tanto, $0$ es un polo.
>>	2. Para $|z|<1$, el [[FA - Teo2#^6fedda|desarrollo de Taylor]] es $$\log(1+z)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}z^n}{n}=z-\frac{z^2}{2}+\frac{z^3}{3}-\cdots.$$ Extraemos el factor $z$: $$\log(1+z)=zg(z),\qquad g(z)=\sum_{n=0}^{\infty}\frac{(-1)^n z^n}{n+1}=1-\frac z2+\frac{z^2}{3}-\cdots.$$ Esta serie converge en $|z|<1$, por lo que $g$ es analítica por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], y $g(0)=1\ne0$.
>>	3. Para $z\ne0$, $$f(z)=\frac{zg(z)}{z^2}=\frac{g(z)}z.$$ Por [[FA - Teo10#^a10e04|reconocer un polo y su orden]], el polo tiene orden $1$. El exponente $2$ del denominador original no determina el orden, porque el numerador original también se anula en $0$.
>>	4. Dividimos la serie del logaritmo por $z^2$ y separamos el primer término: $$f(z)=\frac1z+h(z),\qquad h(z)=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}z^n}{n+2}=-\frac12+\frac z3-\frac{z^2}{4}+\cdots.$$ Para $0<|z|<1$, esta serie converge por ser la cola convergente del logaritmo dividida por $z^2$; en $0$ vale $-1/2$. Por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], $h$ es analítica en $|z|<1$.
>>	5. Por [[FA - Teo10#^a10b04|parte singular y parte analítica]], la parte singular es $1/z$ y la parte analítica es $h$. Quitar otro término a $h$ también deja un resto analítico, pero no convierte ese término en parte singular: esta contiene únicamente las potencias negativas, de modo que el término constante $-1/2$ pertenece a la parte analítica.
>>- (f)
>>	1. Por el eje real, para $x\ne0$, $$|f(x)|=|x\cos(1/x)|\le|x|\xrightarrow[x\to0]{}0.$$ Por tanto, $0$ no es un polo, ya que el módulo no tiende a infinito por todos los caminos.
>>	2. Analizamos el eje imaginario positivo: ponemos $z=iy$, con $y>0$. Usando $\cos w=(e^{iw}+e^{-iw})/2$ y $1/(iy)=-i/y$, obtenemos $$\cos(1/(iy))=\frac{e^{1/y}+e^{-1/y}}2,\qquad f(iy)=\frac{iy}{2}(e^{1/y}+e^{-1/y}).$$ Como el paréntesis es real positivo y $|iy|=y$, $$|f(iy)|=\frac y2(e^{1/y}+e^{-1/y}).$$ La cota $|\cos t|\le1$ usada en el primer paso vale para $t$ real, no para argumentos complejos.
>>	3. Por [[FA - Teo2#^6fedda|Taylor]], $$e^{1/y}=\sum_{n=0}^{\infty}\frac{1}{n!y^n}.$$ Para $y>0$, todos los términos son positivos. Cada suma parcial que incluye el término de índice $n=2$ es mayor o igual que $1/(2y^2)$; pasando al límite de las sumas parciales, $$e^{1/y}\ge\frac1{2y^2}.$$
>>	4. Como $e^{-1/y}>0$ y $y/2>0$, $$|f(iy)|=\frac y2(e^{1/y}+e^{-1/y})\ge\frac y2e^{1/y}\ge\frac y2\frac1{2y^2}=\frac1{4y}\xrightarrow[y\to0^+]{}+\infty.$$ El segundo sumando es positivo, así que no puede cancelar el crecimiento del primero; la cota inferior prueba que la suma completa tiende a infinito.
>>	5. El comportamiento por el eje imaginario positivo descarta un límite finito en $0$; por [[FA - Teo10#^a10c01|criterio mediante un límite finito]], la singularidad no es evitable. Como tampoco es un polo, por [[FA - Teo10#^a10d04|singularidad esencial]], $0$ es esencial.
>>- (g)
>>	1. Clasificamos la singularidad en $0$, como pide el enunciado. Escribimos $$f(z)=\frac{g(z)}z,\qquad g(z)=\frac{z^2+1}{z-1}.$$ La función $g$ es analítica cerca de $0$ y $g(0)=-1\ne0$. Por [[FA - Teo10#^a10e04|reconocer un polo y su orden]], $0$ es un polo de orden $1$.
>>	2. Para desarrollar $g$, usamos la serie geométrica: $$\frac1{z-1}=-\frac1{1-z}=-\sum_{n=0}^{\infty}z^n,\qquad |z|<1.$$ Multiplicamos por $1+z^2$ y distribuimos: $$\begin{aligned}g(z)&=-(1+z^2)(1+z+z^2+z^3+\cdots)\\&=-(1+z+z^2+z^3+\cdots)-(z^2+z^3+z^4+\cdots)\\&=-1-z-2\sum_{n=2}^{\infty}z^n.\end{aligned}$$ Los términos constante y lineal aparecen una sola vez; desde $z^2$, cada potencia aparece dos veces.
>>	3. Dividiendo por $z$ para $0<|z|<1$, $$f(z)=-\frac1z-1-2\sum_{n=1}^{\infty}z^n=-\frac1z+h(z),\qquad h(z)=-1-2z-2z^2-\cdots.$$ La serie de $h$ converge en $|z|<1$ y, por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], es analítica también en $0$.
>>	4. Por [[FA - Teo10#^a10b04|parte singular y parte analítica]], la parte singular, también llamada parte principal, es $-1/z$; el resto $h$ es la parte analítica.

>[!exercise] Ejercicio 4
>Sea $f:G\to\mathbb C$ analítica excepto por numerables singularidades aisladas. Probar que las singularidades de $f$ no pueden tener un punto límite en $G$.

>[!exercise] Ejercicio 5
>Mostrar que $\tan z$ es analítica en $\mathbb C$ excepto para polos simples en $z=\frac{\pi}{2}+n\pi$, $n\in\mathbb Z$. Determinar la parte singular de $f$ en estos polos.

>[!exercise] Ejercicio 6
>Dar el desarrollo en serie de Laurent de $f(z)=\exp(\frac{1}{z})$.

>[!exercise] Ejercicio 7
>Dar el desarrollo en serie de Laurent para $$f(z)=\frac{1}{z(z-1)(z-2)}$$ en las siguientes regiones:
>- **(a)** $\mathrm{ann}(0;0,1)$.
>- **(b)** $\mathrm{ann}(0;1,2)$.
>- **(c)** $\mathrm{ann}(0;2,\infty)$.

>[!exercise] Ejercicio 8
>Calcular las siguientes integrales:
>- **(a)** $\int_0^\infty\frac{x^2}{x^4+x^2+1}\,dx$.
>- **(b)\*** $\int_0^\infty\frac{\cos x-1}{x^2}\,dx$.
>- **(c)** $\int_0^{2\pi}\frac{\cos(\theta)}{5+4\cos(\theta)}\,d\theta$.
>- **(d)** $\int_0^\pi\frac{d\theta}{(2+\cos\theta)^2}$.
>- **(e)** $\int_0^\infty\frac{1}{x^4+1}\,dx$.

>[!exercise] Ejercicio 9
>Demostrar las siguientes igualdades:
>- **(a)** $\int_0^\infty\frac{dx}{(x^2+a^2)^2}=\frac{\pi}{4a^3}$, $a>0$.
>- **(b)** $\int_{-\infty}^\infty\frac{\cos(x)}{(1+x^2)^2}\,dx=\frac{\pi}{e}$.
>- **(c)** $\int_0^{\pi/2}\frac{d\theta}{1+\operatorname{sen}^2(\theta)}=\frac{\pi}{2\sqrt{2}}$.

>[!exercise] Ejercicio 10
>Encontrar todos los posibles valores de $\int_\gamma e^{\frac{1}{z}}\,dz$ donde $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$, de modo que no pasa por el cero.

>[!exercise] Ejercicio 11
>Supongamos que $f$ tiene un polo simple en $z=a$ y que $g$ es analítica en un abierto que contiene a $a$. Demostrar que $\operatorname{Res}(fg;a)=g(a)\operatorname{Res}(f;a)$.

>[!exercise] Ejercicio 12
>Sean $f$ analítica en $G=B(0,R)$ excepto en polos simples $a_1,\dots,a_n$ y $g$ analítica en $G$. Probar que si $\gamma(t)=re^{it}$, $t\in[0,2\pi]$, tal que $|a_1|,\dots,|a_n|<r<R$, entonces se tiene que $$\frac{1}{2\pi i}\int_\gamma fg=\sum_{k=1}^n g(a_k)\operatorname{Res}(f;a_k).$$

>[!exercise] Ejercicio 13
>Sean $f$ entera, $R\in\mathbb R$ y $a,b\in\mathbb C$ tales que $a\ne b$, $|a|<R$ y $|b|<R$. Probar que $$\frac{1}{2\pi i}\int_\gamma\frac{f(z)}{(z-a)(z-b)}\,dz=\frac{f(b)-f(a)}{b-a},\qquad\text{con }\gamma(t)=Re^{it},\ 0\le t\le 2\pi.$$ Usar este resultado para dar otra prueba del Teorema de Liouville.
