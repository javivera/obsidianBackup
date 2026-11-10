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
>>	4. Dividimos la serie del logaritmo por $z^2$ y separamos el primer término: $$f(z)=\frac1z+h(z),\qquad h(z)=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}z^n}{n+2}=-\frac12+\frac z3-\frac{z^2}{4}+\cdots.$$ 
>>	5. Comprobamos directamente la convergencia de $h$: para $0<|z|<1$ aplicamos el [[FA - Teo1#^049a6c|criterio del cociente]]: $$\begin{aligned}\left|\frac{u_{n+1}(z)}{u_n(z)}\right|&=\frac{|z|^{n+1}/(n+3)}{|z|^n/(n+2)}\\&=|z|\frac{n+2}{n+3}\xrightarrow[n\to\infty]{}|z|<1.\end{aligned}$$ Por tanto, la serie $h(z)$ converge absolutamente para $0<|z|<1$. 
>>	6. En $z=0$ también converge por que solo queda el término constante $h(0)=-1/2$ 
>>	7. Por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], $h$ es analítica en $|z|<1$.
>>	8. Por [[FA - Teo10#^a10b04|parte singular y parte analítica]], la parte singular es $1/z$ y la parte analítica es $h$.
>>- (f)
>>	1. Por el eje real, para $x\ne0$, $$|f(x)|=|x\cos(1/x)|\le|x|\xrightarrow[x\to0]{}0.$$ Por tanto, $0$ no es un polo, ya que el módulo no tiende a infinito por todos los caminos.
>>	2. Analizamos el eje imaginario positivo: ponemos $z=iy$, con $y>0$. Usando $\cos w=(e^{iw}+e^{-iw})/2$ y $1/(iy)=-i/y$, obtenemos $$\cos(1/(iy))=\frac{e^{1/y}+e^{-1/y}}2,\qquad f(iy)=\frac{iy}{2}(e^{1/y}+e^{-1/y}).$$ Como el paréntesis es real positivo y $|iy|=y$, $$|f(iy)|=\frac y2(e^{1/y}+e^{-1/y}).$$ La cota $|\cos t|\le1$ usada en el primer paso vale para $t$ real, no para argumentos complejos.
>>	3. Por [[FA - Teo2#^6fedda|Taylor]], $$e^{1/y}=\sum_{n=0}^{\infty}\frac{1}{n!y^n}.$$ Para $y>0$, todos los términos son positivos. Cada suma parcial que incluye el término de índice $n=2$ es mayor o igual que $1/(2y^2)$; pasando al límite de las sumas parciales, $$e^{1/y}\ge\frac1{2y^2}.$$
>>	4. Como $e^{-1/y}>0$ y $y/2>0$, $$|f(iy)|=\frac y2(e^{1/y}+e^{-1/y})\ge\frac y2e^{1/y}\ge\frac y2\frac1{2y^2}=\frac1{4y}\xrightarrow[y\to0^+]{}+\infty.$$ El segundo sumando es positivo, así que no puede cancelar el crecimiento del primero; la cota inferior prueba que la suma completa tiende a infinito.
>>	5. El comportamiento por el eje imaginario positivo descarta un límite finito en $0$; por [[FA - Teo10#^a10c01|criterio mediante un límite finito]], la singularidad no es evitable. Como tampoco es un polo, por [[FA - Teo10#^a10d04|singularidad esencial]], $0$ es esencial.
>>- (g)
>>	1. Clasificamos la singularidad en $0$, como pide el enunciado. Escribimos $$f(z)=\frac{g(z)}z,\qquad g(z)=\frac{z^2+1}{z-1}.$$ La función $g$ es analítica cerca de $0$ y $g(0)=-1\ne0$. Por [[FA - Teo10#^a10e04|reconocer un polo y su orden]], $0$ es un polo de orden $1$.
>>	2. Para desarrollar $g$, usamos la serie geométrica: $$\frac1{z-1}=-\frac1{1-z}=-\sum_{n=0}^{\infty}z^n,\qquad |z|<1.$$ Multiplicamos por $z^2+1$ y distribuimos: $$\begin{aligned}g(z)&=-(z^2+1)(1+z+z^2+z^3+\cdots)\\&=-(z^2+z^3+z^4+\cdots)-(1+z+z^2+z^3+\cdots)\\&=-1-z-2\sum_{n=2}^{\infty}z^n.\end{aligned}$$ Los términos constante y lineal aparecen una sola vez; desde $z^2$, cada potencia aparece dos veces.
>>	3. Dividiendo por $z$ para $0<|z|<1$, $$f(z)=-\frac1z-1-2\sum_{n=1}^{\infty}z^n=-\frac1z+h(z),\qquad h(z)=-1-2z-2z^2-\cdots.$$ La serie de $h$ converge en $|z|<1$ y, por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], es analítica también en $0$.
>>	4. Por [[FA - Teo10#^a10b04|parte singular y parte analítica]], la parte singular, también llamada parte principal, es $-1/z$; el resto $h$ es la parte analítica.
>>- (h)
>>	1. Fijamos $n\ge1$. Por el semieje real positivo, como $-1\le\operatorname{sen}(1/x)\le1$ y $x^n>0$, $$-x^n\le f(x)=x^n\operatorname{sen}(1/x)\le x^n,\qquad x>0.$$ Ambos extremos tienden a $0$ cuando $x\to0^+$, así que, por encaje, $f(x)\to0$. Este camino basta para descartar que $0$ sea un polo.
>>	2. Por el semieje imaginario positivo, ponemos $z=iy$, con $y>0$. Usando $1/(iy)=-i/y$ y la expresión exponencial del seno, $$\operatorname{sen}\left(\frac1{iy}\right)=\frac{e^{1/y}-e^{-1/y}}{2i},\qquad f(iy)=\frac{i^{n-1}y^n}{2}\left(e^{1/y}-e^{-1/y}\right).$$ Como $e^{1/y}-e^{-1/y}>0$ y $|i^{n-1}|=1$, $$|f(iy)|=\frac{y^n}{2}\left(e^{1/y}-e^{-1/y}\right).$$
>>	3. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], $$e^{1/y}=\sum_{k=0}^{\infty}\frac{1}{k!y^k}\ge\frac{1}{(n+1)!\,y^{n+1}},\qquad y>0,$$ pues todos los términos son positivos. Además, $e^{-1/y}\le1$. Por tanto, $$\begin{aligned}|f(iy)|&=\frac{y^n}{2}\left(e^{1/y}-e^{-1/y}\right)\\&\ge\frac{y^n}{2}\left(\frac{1}{(n+1)!\,y^{n+1}}-1\right)\\&=\frac{1}{2(n+1)!\,y}-\frac{y^n}{2}\xrightarrow[y\to0^+]{}+\infty.\end{aligned}$$
>>	4. El crecimiento por el semieje imaginario positivo descarta un límite finito en $0$; por [[FA - Teo10#^a10c01|criterio mediante un límite finito]], la singularidad no es evitable. Como tampoco es un polo, por [[FA - Teo10#^a10d04|singularidad esencial]], $0$ es esencial para todo $n\ge1$.

>[!exercise] Ejercicio 4
>Sea $f:G\to\mathbb C$ analítica excepto por numerables singularidades aisladas. Probar que las singularidades de $f$ no pueden tener un punto límite en $G$.
>
>>[!Proof]-
>>1. Supongamos por absurdo que el conjunto de singularidades tiene un punto límite $a\in G$. Entonces existe una sucesión de singularidades $a_n\to a$ con $a_n\ne a$ para todo $n$.
>>2. Si $a$ es un punto regular (osea no es singularidad), existe $r>0$ tal que $B(a,r)\subset G$ y $f$ es analítica en esa bola (simplemente por que es analitica en todo $G$ y a esta dentro, como $G$ es abierto, tengo una bola de centro $a$ contenida en $G$). Por convergencia, existe $N$ tal que $a_n\in B(a,r)$ para todo $n\ge N$, contradiciendo que los $a_n$ sean singularidades.
>>3. Si $a$ es una singularidad, por hipótesis es aislada. Por [[FA - Teo10#^a10d01|singularidad aislada]], elegimos $R>0$ con $B(a,R)\subset G$ y $f$ analítica en $B(a,R)\setminus\{a\}$. Como $a_n\to a$ y $a_n\ne a$ para todo $n$, existe $N$ tal que $0<|a_n-a|<R$ para todo $n\ge N$. Por tanto, los $a_n$ pertenecen eventualmente al disco perforado, contradiciendo que sean singularidades.
>>4. Ambos casos llevan a una contradicción. Por tanto, las singularidades de $f$ no pueden tener un punto límite en $G$.

>[!exercise] Ejercicio 5
>Mostrar que $\tan z$ es analítica en $\mathbb C$ excepto para polos simples en $z=\frac{\pi}{2}+n\pi$, $n\in\mathbb Z$. Determinar la parte singular de $f$ en estos polos.
>
>>[!Proof]-
>>1. **Localizamos las posibles singularidades.** Escribimos $\tan z=\sin z/\cos z$. Como seno y coseno son enteras, por las [[FA - Teo2#^e54e60|reglas de derivación]] el cociente es analítico donde $\cos z\ne0$. Usando la representación exponencial y que $e^{iz}\ne0$, $$\cos z=\frac{e^{iz}+e^{-iz}}2=0\quad\Longleftrightarrow\quad e^{2iz}=-1.$$ Si $z=x+iy$, entonces $e^{2iz}=e^{-2y}e^{2ix}$. Comparando módulos, $e^{-2y}=1$, luego $y=0$; comparando argumentos, $2x=(2n+1)\pi$ para algún $n\in\mathbb Z$. Por tanto, los ceros del coseno son exactamente $$a_n=\frac{\pi}{2}+n\pi,\qquad n\in\mathbb Z.$$
>>2. **Son polos.** Fijamos $n\in\mathbb Z$. Los ceros anteriores están separados por una distancia de al menos $\pi$, así que $a_n$ es una singularidad aislada. Por continuidad, $\sin z\to\sin(a_n)=(-1)^n\ne0$ y $\cos z\to0$ cuando $z\to a_n$. En consecuencia, $$|\tan z|=\frac{|\sin z|}{|\cos z|}\xrightarrow[z\to a_n]{}+\infty.$$ Por la definición de [[FA - Teo10#^a10d03|polo]], $a_n$ es un polo.
>>3. **Extraemos un factor del denominador mediante Taylor.** Por el [[FA - Teo2#^6fedda|desarrollo de Taylor]] del coseno centrado en $a_n$, $$\cos z=\sum_{k=0}^{\infty}c_k(z-a_n)^k,\qquad c_k=\frac{\cos^{(k)}(a_n)}{k!}.$$ Como $c_0=\cos(a_n)=0$ y $c_1=\cos'(a_n)=-\sin(a_n)=(-1)^{n+1}\ne0$, sacamos factor común: $$\cos z=(z-a_n)h(z),\qquad h(z)=\sum_{j=0}^{\infty}c_{j+1}(z-a_n)^j.$$ Esta es una igualdad exacta, no una aproximación ni una truncación de la serie.
>>4. **Convergencia fuera del centro.** Para $z\ne a_n$, la serie de $h$ se obtiene dividiendo la serie convergente del coseno por el número no nulo $z-a_n$; por tanto, converge a $\cos z/(z-a_n)$.
>>5. **Convergencia en el centro.** En $z=a_n$, la serie de $h$ también converge: su término constante es $c_1$ y todos los términos de grado positivo se anulan. Por tanto, $h(a_n)=c_1$.
>>6. Entonces la serie de potencias de $h$ converge en todo $\mathbb C$ y, por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], $h$ es entera. En particular, $$h(a_n)=c_1=-\sin(a_n)\ne0.$$
>>7. **Construimos el numerador analítico.** Por continuidad de $h$, elegimos $r>0$ suficientemente pequeño para que $h$ no se anule en $B(a_n,r)$. Allí, $1/h$ es analítica por las [[FA - Teo2#^e54e60|reglas de derivación]], y también lo es $g=\sin/h$. Por tanto, en el disco perforado, $$\tan z=\frac{g(z)}{z-a_n},\qquad g(a_n)=\frac{\sin(a_n)}{h(a_n)}=\frac{\sin(a_n)}{c_1}=\frac{\sin(a_n)}{-\sin(a_n)}=-1\ne0.$$
>>8. **Determinamos el orden.** Aplicando [[FA - Teo10#^a10e04|reconocer un polo y su orden]] a la representación anterior, $a_n$ es un polo de orden $1$.
>>9. **Determinamos la parte singular.** Por ser analitica tenemos [[FA - Teo2#^6fedda|desarrollo de Taylor]] de $g$ en $a_n$, entonces en algún disco de radio $\rho>0$ tenemos $$g(z)=\sum_{k=0}^{\infty}b_k(z-a_n)^k,\qquad b_0=g(a_n)=-1.$$ Dividiendo por $z-a_n$, $$\tan z=-\frac1{z-a_n}+H(z),\qquad H(z)=\sum_{j=0}^{\infty}b_{j+1}(z-a_n)^j.$$
>>10. Como $a_n$ es un polo simple por [[FA - Teo10#^a10b04|descomposición cerca de un polo (Proposición 19)]] el resto $H$ es analítico también en $a_n$. Por tanto, la parte singular en cada polo es $$\boxed{-\frac1{z-a_n}=-\frac1{z-(\pi/2+n\pi)}}.$$

>[!exercise] Ejercicio 6
>Dar el desarrollo en serie de Laurent de $f(z)=\exp(\frac{1}{z})$.
>
>>[!Proof]-
>>1. Por el [[FA - Teo2#^6fedda|desarrollo de Taylor]] de la exponencial, $$e^w=\sum_{n=0}^{\infty}\frac{w^n}{n!},\qquad w\in\mathbb C.$$
>>2. Para $z\ne0$, sustituimos $w=1/z$ y obtenemos $$e^{1/z}=\sum_{n=0}^{\infty}\frac{z^{-n}}{n!}=1+\frac1z+\frac1{2!z^2}+\frac1{3!z^3}+\cdots.$$ 
>>3. La convergencia es absoluta para todo $z\ne0$, pues $$\sum_{n=0}^{\infty}\left|\frac{z^{-n}}{n!}\right|=\sum_{n=0}^{\infty}\frac{(1/|z|)^n}{n!}=e^{1/|z|}<\infty.$$
>>4. El anillo de convergencia es $$\operatorname{ann}(0;0,\infty)=\{z\in\mathbb C:0<|z|<\infty\}.$$ Allí $f$ es analítica: su derivada $f'(z)=-e^{1/z}/z^2$ existe y es continua, de acuerdo con la [[FA - Teo2#^9f31ac|definición de función analítica]]. Por tanto, la serie obtenida es el desarrollo de Laurent de $f$ centrado en $0$, con coeficientes $$a_k=\begin{cases}\dfrac1{(-k)!},&k\le0,\\0,&k>0.\end{cases}$$

>[!Exercise] Ejercicio 7
>Dar el desarrollo en serie de Laurent para $$f(z)=\frac{1}{z(z-1)(z-2)}$$ en las siguientes regiones:
>- **(a)** $\mathrm{ann}(0;0,1)$.
>- **(b)** $\mathrm{ann}(0;1,2)$.
>- **(c)** $\mathrm{ann}(0;2,\infty)$.
>
>>[!Proof]-
>>1. **Fracciones simples.** Escribimos $$f(z)=\frac{A}{z}+\frac{B}{z-1}+\frac{C}{z-2}.$$ Multiplicando por $z(z-1)(z-2)$ y evaluando en $z=0,1,2$, obtenemos $$A=\frac1{(-1)(-2)}=\frac12,\qquad B=\frac1{1(1-2)}=-1,\qquad C=\frac1{2(2-1)}=\frac12.$$ Por tanto, $$f(z)=\frac1{2z}-\frac1{z-1}+\frac1{2(z-2)}.$$
>>- (a)
>>	1. Para $|z|<1$, aplicamos la [[FA - Teo11#^c8e4b2|serie geométrica]] con cociente $z$: $$-\frac1{z-1}=\frac1{1-z}=\sum_{n=0}^{\infty}z^n.$$
>>	2. Para $|z|<2$, aplicamos la misma expansión con cociente $z/2$: $$\frac1{2(z-2)}=-\frac14\frac1{1-z/2}=-\frac{1}{2^{2} }\sum_{n=0}^{\infty}\left(\frac{z}{2}\right)^{n}.$$
>>	3. Ambos desarrollos convergen absolutamente en $0<|z|<1$.  
>>	4. Sumando las potencias iguales, obtenemos el desarrollo de Laurent centrado en $0$: $$\boxed{f(z)=\frac{1}{2}z^{-1}+\sum_{n=0}^{\infty}\left(1-\frac1{2^{n+2}}\right)z^n,\qquad 0<|z|<1.}$$ 
>>- (b)
>>	1. Para $|z|>1$ ya no converge la serie de $-\frac{1}{z-1}$ entonces factorizamos de la siguiente manera: $$-\frac1{z-1}=-\frac1z\frac1{1-1/z}=-\frac1z\sum_{n=0}^{\infty}\frac1{z^n}$$ que si converge por que $1> \frac{1}{|z|}>0$ 
>>	2. Conservamos el desarrollo de $1/[2(z-2)]$ obtenido en (a), válido para $|z|<2$. 
>>	3. Las dos condiciones se cumplen simultáneamente en $1<|z|<2$, por lo que $$f(z)=\frac1{2}z^{-1}-\sum_{n=0}^{\infty}z^{-n-1}-\sum_{n=0}^{\infty}\frac{z^n}{2^{n+2}},\qquad 1<|z|<2$$ambas series convergen absolutamente en ese anillo. 
>>	4. Ordenando terminos llegamos a la expresion de Laureant$$\boxed{f(z)=-\sum_{k=2}^{\infty} z^{-k}-\frac{1}{2}z^{-1}-\sum_{k=0}^{\infty}\frac{z^k}{2^{k+2}}\qquad 1<|z|<2}$$
>>- (c)
>>	1. Para $|z|>2$ ya no converge $\frac1{2(z-2)}$ entonces factorizamos de la siguiente manera $$\frac1{2(z-2)}=\frac1{2z}\frac1{1-2/z}=\frac1{2z}\sum_{n=0}^{\infty}\left(\frac2z\right)^n=\sum_{n=0}^{\infty}2^{n-1}z^{-n-1}.$$
>>	2. El desarrollo de $-1/(z-1)$ obtenido en (b) también converge absolutamente para $|z|>2$por que convergie para $|z|>1$ 
>>	3. Sumando ambos $$f(z)=\frac1{2}z^{-1}+\sum_{n=0}^{\infty}(2^{n-1}-1)z^{-n-1}.$$
>>	4. El término de índice $n=0$ es $-1/(2z)$ y cancela el término exterior; el de índice $n=1$ es cero. Por tanto, $$\boxed{f(z)=\sum_{n=2}^{\infty}(2^{n-1}-1)z^{-n-1},\qquad |z|>2.}$$

>[!Exercise] Ejercicio 8
>Calcular las siguientes integrales:
>- **(a)** $\int_0^\infty\frac{x^2}{x^4+x^2+1}\,dx$.
>- **(b)\*** $\int_0^\infty\frac{\cos x-1}{x^2}\,dx$.
>- **(c)** $\int_0^{2\pi}\frac{\cos(\theta)}{5+4\cos(\theta)}\,d\theta$.
>- **(d)** $\int_0^\pi\frac{d\theta}{(2+\cos\theta)^2}$.
>- **(e)** $\int_0^\infty\frac{1}{x^4+1}\,dx$.
>
>>[!Proof]-
>>- (a)
>>	1. **Función y polos.** Consideramos $f(z)=z^2/(z^4+z^2+1)$. Con el cambio $u=z^2$, la ecuación del denominador se reduce a $u^2+u+1=0$, cuyas raíces son $u=(-1\pm i\sqrt3)/2=e^{\pm2\pi i/3}$. Por tanto, los ceros del denominador son $e^{i\pi/3}$, $e^{2i\pi/3}$, $e^{4i\pi/3}$ y $e^{5i\pi/3}$. Son simples: si $q(z)=z^4+z^2+1$, entonces $q'(z)=2z(2z^2+1)$ y, en cada raíz $z_k$, tenemos $z_k\ne0$ y $2z_k^2+1=\pm i\sqrt3\ne0$. Ninguno se cancela con el numerador.
>>	2. **Contorno.** Para $0<r<1<R$, tomamos la frontera positivamente orientada del semianillo superior $\{z:r<|z|<R,\ \operatorname{Im}z>0\}$. Recorremos el segmento de $-R$ a $-r$, el arco interior $\eta_r(t)=re^{it}$ con $t$ de $\pi$ a $0$, el segmento de $r$ a $R$ y el arco exterior $\gamma_R(t)=Re^{it}$ con $t$ de $0$ a $\pi$. Los únicos polos interiores son $a=e^{i\pi/3}$ y $b=e^{2i\pi/3}$, ambos con índice $1$.
>>	3. **Identidad de residuos antes de tomar límites.** Por [[FA - Teo11#^a11f03|teorema de los residuos]], $$\int_{-R}^{-r}f(x)\,dx+\int_{\eta_r}f(z)\,dz+\int_r^R f(x)\,dx+\int_{\gamma_R}f(z)\,dz=2\pi i\bigl(\operatorname{Res}(f;a)+\operatorname{Res}(f;b)\bigr).$$ Sustituyendo $x=-t$ en el primer segmento, $$\int_{-R}^{-r}\frac{x^2}{x^4+x^2+1}\,dx=\int_r^R\frac{t^2}{t^4+t^2+1}\,dt.$$ Así obtenemos $$2\int_r^R\frac{x^2}{x^4+x^2+1}\,dx+\int_{\eta_r}f(z)\,dz+\int_{\gamma_R}f(z)\,dz=2\pi i\bigl(\operatorname{Res}(f;a)+\operatorname{Res}(f;b)\bigr).$$
>>	4. **Arco exterior.** Parametrizando, $$\int_{\gamma_R}f(z)\,dz=\int_0^\pi\frac{iR^3e^{3it}}{R^4e^{4it}+R^2e^{2it}+1}\,dt.$$ Por la desigualdad triangular inversa, separando el término de mayor módulo, $$|R^4e^{4it}+R^2e^{2it}+1|\ge R^4-|R^2e^{2it}+1|,$$ y por la desigualdad triangular común, $|R^2e^{2it}+1|\le R^2+1$; por tanto, $$|R^4e^{4it}+R^2e^{2it}+1|\ge R^4-R^2-1.$$ Para $R\ge2$, el lado derecho es positivo y, por tanto, $$\left|\int_{\gamma_R}f(z)\,dz\right|\le\frac{\pi R^3}{R^4-R^2-1}=\frac{\pi/R}{1-R^{-2}-R^{-4}}\xrightarrow[R\to\infty]{}0.$$
>>	5. **Arco interior.** Para $0<r\le1/2$, la misma desigualdad da $|1+r^2e^{2it}+r^4e^{4it}|\ge1-r^2-r^4>0$. Parametrizando el arco interior y tomando módulos, $$\left|\int_{\eta_r}f(z)\,dz\right|\le\frac{\pi r^3}{1-r^2-r^4}\xrightarrow[r\to0]{}0.$$
>>	6. **Integral impropia existe** Primero hay que asegurar que $I=\int_0^\infty f(x)\,dx$ existe, y para eso se compara en dos tramos. En $0\le x\le1$ el denominador es mayor que $1$, de modo que $$0\le f(x)\le x^2,\qquad \int_0^1x^2\,dx=\frac13;$$ en $x\ge1$ el denominador es mayor que $x^4$, de modo que $$0\le f(x)\le\frac{1}{x^2},\qquad \int_1^\infty\frac{dx}{x^2}=1.$$ Así $0\le\int_0^\infty f\le\frac43$: la integral impropia converge
>>	7.   **Paso al límite.** Tomando $r\to0$ y $R\to\infty$ en la identidad del paso 3, con $\int_{\eta_r}f\to0$ e $\int_{\gamma_R}f\to0$ por los pasos 5 y 4, queda $$2I=2\pi i\bigl(\operatorname{Res}(f;a)+\operatorname{Res}(f;b)\bigr).$$
>>	8. **Residuos en forma exponencial.** Por [[FA - Teo12#^a12b02|cociente con cero simple]], $$\operatorname{Res}(f;z_k)=\frac{z_k^2}{4z_k^3+2z_k}=\frac{z_k}{2(2z_k^2+1)}.$$ Sustituyendo los dos polos y dividiendo la identidad anterior por $2$, $$I=\pi i\left[\frac{e^{i\pi/3}}{2(2e^{2i\pi/3}+1)}+\frac{e^{2i\pi/3}}{2(2e^{4i\pi/3}+1)}\right].$$
>>	9. **Simplificación exacta, sin calculadora.** Usando $e^{i\theta}=\cos\theta+i\sin\theta$ y los valores de los ángulos notables, $$e^{i\pi/3}=\frac12+\frac{i\sqrt3}{2},\qquad e^{2i\pi/3}=-\frac12+\frac{i\sqrt3}{2},\qquad e^{4i\pi/3}=-\frac12-\frac{i\sqrt3}{2}.$$ Luego $2e^{2i\pi/3}+1=i\sqrt3$, $2e^{4i\pi/3}+1=-i\sqrt3$ y $e^{i\pi/3}-e^{2i\pi/3}=1$. Por consiguiente, $$I=\pi i\frac{e^{i\pi/3}-e^{2i\pi/3}}{2i\sqrt3}=\boxed{\frac{\pi}{2\sqrt3}}.$$
>>
>>- (b)
>>	1. **Convergencia de la integral original.** Escribimos $g(x)=(\cos x-1)/x^2$. Por L’Hôpital dos veces, $$\lim_{x\to0}\frac{\cos x-1}{x^2}=\lim_{x\to0}\frac{-\sin x}{2x}=\lim_{x\to0}\frac{-\cos x}{2}=-\frac12.$$ Por tanto, $g$ está acotada cerca de $0$ y su integral converge absolutamente allí. Para $x\ge1$, $$|g(x)|\le\frac2{x^2},$$ lo que justifica la convergencia absoluta en infinito. (Osea VP coincide con la integral impropia). Denotamos por $I$ la integral buscada.
>>	2. **Función auxiliar.** Para aplicar Cauchy usamos $$f(z)=\frac{e^{iz}-1}{z^2}.$$ Esta función no es el integrando original: para $x\in\mathbb R\setminus\{0\}$, $$f(x)=\frac{\cos x-1}{x^2}+i\frac{\sin x}{x^2},\qquad \operatorname{Re}f(x)=g(x).$$ Integraremos $f$ sobre el contorno complejo y después tomaremos partes reales para recuperar la integral de $g$.
>>	3. **Contorno y Cauchy.** Para $0<r<R$, tomamos la frontera positivamente orientada de la semidona superior $\{z:r<|z|<R,\ \operatorname{Im}z>0\}$. Recorremos el segmento de $-R$ a $-r$, el arco interior $\eta_r(t)=re^{it}$ con $t$ de $\pi$ a $0$, el segmento de $r$ a $R$ y el arco exterior $\gamma_R(t)=Re^{it}$ con $t$ de $0$ a $\pi$. 
>>	4. La función $f$ es analítica en $G=\mathbb C\setminus\{0\}$; el punto $0$ pertenece a la componente no acotada del complemento del contorno, así que su índice es cero por [[FA - Teo6#^c6a183|constancia del índice en cada componente]]. Por [[FA - Teo7#^c9f031|Cauchy v1]], $$\int_{-R}^{-r}f(x)\,dx+\int_{\eta_r}f(z)\,dz+\int_r^R f(x)\,dx+\int_{\gamma_R}f(z)\,dz=0.$$
>>	5. **Arco exterior.** Para $z=x+iy$ con $y\ge0$, $|e^{iz}|=e^{-y}\le1$, de modo que $|e^{iz}-1|\le2$. Sobre $\gamma_R$ tenemos $|f(z)|\le2/R^2$. Como el arco tiene longitud $\pi R$, $$\left|\int_{\gamma_R}f(z)\,dz\right|\le\frac{2\pi}{R}\xrightarrow[R\to\infty]{}0.$$
>>	6. **Separación de la parte singular.** Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], $$e^{iz}=1+iz+\sum_{n=2}^{\infty}\frac{i^nz^n}{n!}.$$ Sustituyendo en $f$ y mostrando explícitamente la cancelación, $$\begin{aligned}f(z)&=\frac{e^{iz}}{z^2}-\frac1{z^2}\\&=\left(\frac1{z^2}+\frac{i}{z}+\sum_{n=2}^{\infty}\frac{i^nz^{n-2}}{n!}\right)-\frac1{z^2}\\&=\frac{i}{z}+H(z),\qquad H(z)=\sum_{n=2}^{\infty}\frac{i^nz^{n-2}}{n!}.\end{aligned}$$ El término $1/z^2$ que proviene del término constante de la exponencial se cancela exactamente con el $-1/z^2$ de la definición de $f$. La serie de $H$ converge para todo $z\ne0$ por la serie de la exponencial, y en $0$ solo queda el término constante $-1/2$. Por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], $H$ es analítica también en $0$.
>>	7. **Arco interior: parte regular.** Fijamos $\rho>0$. Como $H$ es continua en el disco compacto $\overline{B(0,\rho)}$, existe una constante $M$ tal que $|H(z)|\le M$ en todo ese disco. Esta misma cota sirve para todos los arcos con $0<r<\rho$. Por tanto, $$\left|\int_{\eta_r}H(z)\,dz\right|\le M\pi r\xrightarrow[r\to0^+]{}0.$$ No podíamos aplicar este argumento a $f$ en el mismo disco, porque $f$ no está definida en $0$.
>>	8. **Arco interior: parte singular.** Con la parametrización horaria $z=re^{it}$, $t$ de $\pi$ a $0$, obtenemos $$\int_{\eta_r}\frac{i}{z}\,dz=\int_\pi^0\frac{i}{re^{it}}\,ire^{it}\,dt=-\int_\pi^0dt=\pi.$$ Sumando la parte regular, $$\int_{\eta_r}f(z)\,dz\xrightarrow[r\to0^+]{}\pi.$$ El arco pequeño no se anula y su límite es real, no $i\pi$.
>>	9. **Partes reales y paridad.** Tomamos partes reales en la identidad del paso 3. Sobre los segmentos, $\operatorname{Re}f(x)=g(x)$. Como $g$ es par, el cambio $x=-t$ da $$\int_{-R}^{-r}g(x)\,dx=\int_r^R g(t)\,dt.$$ Por eso los dos segmentos, que aparecen sumando, aportan dos veces la integral real truncada: $$2\int_r^R\frac{\cos x-1}{x^2}\,dx+\operatorname{Re}\int_{\eta_r}f(z)\,dz+\operatorname{Re}\int_{\gamma_R}f(z)\,dz=0.$$
>>	10. **Paso al límite.** La convergencia del paso 1 y los límites de ambos arcos permiten tomar $r\to0^+$ y $R\to\infty$: $$2I+\pi+0=0.$$ En consecuencia, $$\boxed{\displaystyle\int_0^\infty\frac{\cos x-1}{x^2}\,dx=-\frac{\pi}{2}}.$$ El signo concuerda con $\cos x-1\le0$.
>>
>>- (c)
>>	1. **Cambio a una integral de contorno.** Denotamos por $I$ la integral buscada y tomamos $z=e^{i\theta}$, de modo que $\gamma(\theta)=e^{i\theta}$, $0\le\theta\le2\pi$, recorre la circunferencia unidad en sentido antihorario. Como $\cos\theta=(z+z^{-1})/2$ y $dz=iz\,d\theta$, obtenemos $$\begin{aligned}I&=\int_\gamma\frac{z+z^{-1}}{10+4z+4z^{-1}}\,\frac{dz}{iz}\\&=\int_\gamma\frac{z^2+1}{iz(4z^2+10z+4)}\,dz.\end{aligned}$$
>>	2. **Localización de las singularidades.** Escribimos $$f(z)=\frac{p(z)}{q(z)},\qquad p(z)=z^2+1,\qquad q(z)=iz(4z^2+10z+4).$$ Por la fórmula cuadrática, $$4z^2+10z+4=0\quad\Longleftrightarrow\quad z=\frac{-10\pm\sqrt{100-64}}8=\frac{-10\pm6}8,$$ cuyas soluciones son $-1/2$ y $-2$. Por tanto, $$q(z)=2iz(2z+1)(z+2).$$ Los únicos ceros del denominador son $0,-1/2,-2$; el numerador vale allí $1,5/4,5$, respectivamente, así que no hay cancelaciones. La función $f$ es analítica en $\mathbb C\setminus\{0,-1/2,-2\}$ y no tiene singularidades sobre $\gamma$.
>>	3. **Índices.** Por [[FA - Teo6#^c6a183|constancia del índice en cada componente]], como $\gamma$ es la circunferencia unidad positivamente orientada, $$n(\gamma,0)=1,\qquad n(\gamma,-1/2)=1,\qquad n(\gamma,-2)=0.$$ Los dos primeros puntos están dentro de la circunferencia y el último está fuera.
>>	4. **Identidad de residuos.** Aplicamos [[FA - Teo11#^a11f03|teorema de los residuos]] con $G=\mathbb C$; la curva $\gamma$ es cerrada, rectificable y homotópica a cero en $\mathbb C$. Usando los índices anteriores, $$I=2\pi i\left(\operatorname{Res}(f;0)+\operatorname{Res}(f;-1/2)\right).$$ La singularidad en $-2$ no contribuye porque su índice es cero.
>>	5. **Cálculo de los residuos mediante el cociente.** Los polinomios $p$ y $q$ son analíticos y $$q'(z)=i(12z^2+20z+4),\qquad q'(0)=4i\ne0,\qquad q'(-1/2)=-3i\ne0.$$ Por [[FA - Teo12#^a12b02|cociente con cero simple]], $$\operatorname{Res}(f;0)=\frac{p(0)}{q'(0)}=\frac1{4i},\qquad \operatorname{Res}(f;-1/2)=\frac{p(-1/2)}{q'(-1/2)}=\frac{5/4}{-3i}=-\frac5{12i}.$$ No hace falta demostrar por separado que estos polos son simples antes de aplicar esta fórmula.
>>	6. **Resultado.** Sustituyendo los residuos en la identidad del paso 4, $$I=2\pi i\left(\frac1{4i}-\frac5{12i}\right)=2\pi i\left(-\frac1{6i}\right)=-\frac\pi3.$$ Por tanto, $$\boxed{\displaystyle\int_0^{2\pi}\frac{\cos\theta}{5+4\cos\theta}\,d\theta=-\frac\pi3}.$$
>>
>>- (d)
>>	1. **Reducción a un período completo.** Para $f(\theta)=(2+\cos\theta)^{-2}$ partimos el intervalo en $[0,\pi]$ y $[\pi,2\pi]$. En el segundo, el cambio $\theta=2\pi-u$ lleva $\theta=\pi$ en $u=\pi$ y $\theta=2\pi$ en $u=0$, con $d\theta=-du$ y $\cos(2\pi-u)=\cos u$; como los límites quedan invertidos, los dos signos se cancelan y $$\int_\pi^{2\pi}f(\theta)\,d\theta=\int_0^{\pi}f(u)\,du.$$ Por tanto, $$\int_0^\pi\frac{d\theta}{(2+\cos\theta)^2}=\frac12\int_0^{2\pi}\frac{d\theta}{(2+\cos\theta)^2}.$$
>>	2. **Cambio a una integral de contorno.** Tomamos $z=e^{i\theta}$, de modo que $\gamma(\theta)=e^{i\theta}$ con $0\le\theta\le2\pi$ recorre la circunferencia unidad en sentido antihorario, $\cos\theta=(z+z^{-1})/2$ y $d\theta=dz/(iz)$. Como $2+\cos\theta=(z^2+4z+1)/(2z)$, resulta $$I=\frac12\int_\gamma\frac{4z}{i(z^2+4z+1)^2}\,dz.$$
>>	3. **Singularidades y orden.** Por la fórmula cuadrática, $z^2+4z+1=0$ si y solo si $z=-2\pm\sqrt3$, y el discriminante $12$ es no nulo, así que hay dos ceros distintos; los llamamos $$a=-2+\sqrt3\approx-0.268\qquad b=-2-\sqrt3\approx-3.732$$de modo que $z^2+4z+1=(z-a)(z-b)$. 
>>	4. Entonces $$g(z)=\frac{4z}{i(z-a)^2(z-b)^2}=\frac{h(z)}{(z-a)^2},\qquad h(z)=\frac{4z}{i(z-b)^2}.$$ La función $h$ es analítica en el disco $B(a,1)$, que no contiene a $b$ porque $|a-b|=2\sqrt3>1$, y $h(a)=\frac{4a}{i(a-b)^2}\ne0$, pues $a\ne0$ y $a-b\ne0$. Por [[FA - Teo10#^a10e04|reconocer un polo y su orden]], $a$ es un polo de orden $2$.
>>	5. **Índices.** Como $|a|<1<|b|$ y $\gamma$ es la circunferencia unidad recorrida en sentido antihorario, por [[FA - Teo6#^1e9a3c|índice de una curva]] resulta $$n(\gamma,a)=1,\qquad n(\gamma,b)=0.$$ Solo el polo $a$ contribuye a la integral.
>>	6. **Residuo.** Por [[FA - Teo12#^a12b01|residuo en un polo]] con $m=2$, $$\operatorname{Res}(g;a)=h'(a),\qquad h'(z)=\frac4i\cdot\frac{-z-b}{(z-b)^3}.$$ Usando $a+b=-4$ y $a-b=2\sqrt3$, $$h'(a)=\frac4i\cdot\frac{4}{(2\sqrt3)^3}=\frac4i\cdot\frac{4}{24\sqrt3}=-\frac{2i}{3\sqrt3}.$$
>>	7. **Resultado.** Por [[FA - Teo11#^a11f03|teorema de los residuos]] y como el único polo con índice no nulo es $a$, $$I=\frac12\cdot2\pi i\operatorname{Res}(g;a)=\pi i\left(-\frac{2i}{3\sqrt3}\right)=\boxed{\frac{2\pi}{3\sqrt3}}$$
>>
>>- (e)
>>	1. **Función y singularidades.** Tomamos $f(z)=1/(1+z^4)$, analítica salvo en los ceros de $q(z)=1+z^4$. En forma polar, $z^4=-1=e^{i\pi}$ si y solo si $|z|=1$ y $4\arg z=\pi+2k\pi$, así que los ceros son $e^{i\pi/4}$, $e^{3i\pi/4}$, $e^{5i\pi/4}$ y $e^{7i\pi/4}$. 
>>	2. Son simples: $q'(z)=4z^3$ y $q'(z_k)\ne0$ porque $z_k\ne0$. Ninguno está sobre los ejes coordenados. Denotamos $$I=\int_0^\infty\frac{dx}{1+x^{4}}.$$
>>	3. **Contorno.** Para $R>1$ tomamos la curva cerrada $\Gamma_R=\sigma_1+\gamma_R+\sigma_2$, formada por tres piezas: $\sigma_1(x)=x$ con $0\le x\le R$, de $0$ a $R$ por el eje real; $\gamma_R(t)=Re^{it}$ con $0\le t\le\pi/2$, de $R$ a $iR$ por el arco de radio $R$; y $\sigma_2(y)=iy$ con $y$ recorriendo de $R$ a $0$, de $iR$ a $0$ por el eje imaginario. La traza no pasa por ningún cero de $q$, porque los ceros están en los ángulos $\pi/4$, $3\pi/4$, $5\pi/4$ y $7\pi/4$. De los cuatro, solo $a=e^{i\pi/4}$ queda adentro de la curva cerrada, con índice $1$ por [[FA - Teo6#^1e9a3c|índice de una curva]]; los otros tres quedan fuera.
>>	4. **Identidad de residuos.** Como $f$ es analítica en un abierto que contiene el cierre de $\Gamma_R$ salvo en $a$, por [[FA - Teo11#^a11f03|teorema de los residuos]] resulta $$\int_0^R\frac{dx}{1+x^4}+\int_{\gamma_R}f(z)\,dz+\int_{iR}^{0}f(z)\,dz=2\pi i\operatorname{Res}(f;a).$$
>>	5. **Segmento imaginario.** Con $z=iy$, $y$ de $R$ a $0$, se tiene $dz=i\,dy$ y $z^4=y^4$, luego $$\int_{iR}^{0}f(z)\,dz=\int_R^0\frac{i}{1+y^4}\,dy=-i\int_0^R\frac{dy}{1+y^4}.$$ El signo viene de la orientación: el borde recorre ese segmento hacia abajo.
>>	6. **Arco.** Sobre $\gamma_R$ se tiene $|\gamma_R'(t)|=R$ y, por la desigualdad triangular inversa, $$|1+\gamma_R(t)^4|\ge\bigl|1-R^4\bigr|=R^4-1,$$ de modo que $$\left|\int_{\gamma_R}f(z)\,dz\right|\le\int_0^{\pi/2}\frac{R}{R^4-1}\,dt=\frac{\pi R}{2(R^4-1)}\xrightarrow[R\to\infty]{}0.$$
>>	7. **Paso al límite.** La integral converge, pues $0\le1/(1+x^4)\le\min(1,x^{-4})$ en $(0,\infty)$. Tomando $R\to\infty$ en el paso 4 y usando los pasos 5 y 6, queda $(1-i)I=2\pi i\operatorname{Res}(f;a)$.
>>	8. **Residuo.** Por [[FA - Teo12#^a12b02|cociente con cero simple]] con $p\equiv1$ y $q(z)=1+z^4$, $$\operatorname{Res}(f;a)=\frac{1}{q'(a)}=\frac{1}{4e^{3i\pi/4}}=-\frac{e^{i\pi/4}}{4},$$ el ultimo paso multiplicando y dividiendo por $e^{i\pi/4}$ 
>>	9. **Resultado.** Sustituyendo el paso 8 en el paso 7, $$(1-i)I=2\pi i\left(-\frac{e^{i\pi/4}}{4}\right)=-\frac{\pi i}{2}\cdot\frac{\sqrt2}{2}(1+i)=\frac{\pi\sqrt2}{4}(1-i).$$ Dividiendo por $1-i$, $$\boxed{\displaystyle I=\frac{\pi\sqrt2}{4}=\frac{\pi}{2\sqrt2}}.$$

>[!exercise] Ejercicio 9
>Demostrar las siguientes igualdades:
>- **(a)** $\int_0^\infty\frac{dx}{(x^2+a^2)^2}=\frac{\pi}{4a^3}$, $a>0$.
>- **(b)** $\int_{-\infty}^\infty\frac{\cos(x)}{(1+x^2)^2}\,dx=\frac{\pi}{e}$.
>- **(c)** $\int_0^{\pi/2}\frac{d\theta}{1+\operatorname{sen}^2(\theta)}=\frac{\pi}{2\sqrt{2}}$.
>
>>[!Proof]-
>>- (a)
>>	1. **Convergencia de la integral impropia.** Con $a>0$ el integrando $x\mapsto(x^2+a^2)^{-2}$ es continuo en $[0,\infty)$, así que la única dificultad está en el infinito. Para $x\ge a$ se tiene $x^2+a^2\ge x^2$, luego $$0\le\frac{1}{(x^2+a^2)^2}\le\frac{1}{x^4},\qquad \int_a^\infty\frac{dx}{x^4}=\frac{1}{3a^3}<\infty.$$ Por el criterio de comparación, la integral impropia converge (y lo hace absolutamente). Denotamos $$I=\int_0^\infty\frac{dx}{(x^2+a^2)^2}.$$
>>	2. **Paridad.** El integrando es par, de modo que para todo $R>0$ vale $$\int_{-R}^{R}\frac{dx}{(x^2+a^2)^2}=2\int_0^{R}\frac{dx}{(x^2+a^2)^2}.$$ Por el paso 1 ambos miembros tienen límite cuando $R\to\infty$, y $$\int_{-\infty}^{\infty}\frac{dx}{(x^2+a^2)^2}=2I.$$
>>	3. **Función y polos.** Tomamos $f(z)=\frac{1}{(z^2+a^2)^2}$. Como $z^2+a^2=(z-ia)(z+ia)$, resulta $$f(z)=\frac{1}{(z-ia)^2(z+ia)^2},$$ y $f$ es analítica en $\mathbb C\setminus\{ia,-ia\}$, con polos de orden $2$ en $ia$ y en $-ia$.
>>	4. **Contorno.** Para $R>a$ tomamos la curva cerrada $\Gamma_R$ formada por el segmento $[-R,R]$ recorrido de $-R$ a $R$ y el arco $\gamma_R(t)=Re^{it}$, $0\le t\le\pi$, recorrido de $R$ a $-R$; es la frontera del semidisco superior, positivamente orientada. La traza no pasa por los polos porque $|\pm ia|=a<R$. Como $\operatorname{Im}(ia)=a>0$ y $\operatorname{Im}(-ia)=-a<0$, el único polo interior es $ia$; por [[FA - Teo6#^1e9a3c|índice de una curva]] su índice es $n(\Gamma_R,ia)=1$ y, por [[FA - Teo6#^c6a183|constancia del índice en cada componente]], $n(\Gamma_R,-ia)=0$.
>>	5. **Arco.** el arco es $\gamma_R=Re^{it}$ entonces $$\int_{\gamma_R}f(z)\,dz=\int_0^\pi\frac{iRe^{it}}{(R^2e^{2it}+a^2)^2}\,dt.$$ Tomando módulos y usando $|e^{it}|=|e^{2it}|=1$ e $|i|=1$ queda $$\left|\int_{\gamma_R}f(z)\,dz\right|\le\int_0^\pi\frac{R}{|R^2e^{2it}+a^2|^2}\,dt.$$ Para $t$ real, la desigualdad triangular inversa aplicada a los dos sumandos $R^2e^{2it}$ y $a^2$ da $$|R^2e^{2it}+a^2|\ge R^2-a^2,$$ que es positivo para $R>|a|$. Con esa cota en el integrando, $$\left|\int_{\gamma_R}f(z)\,dz\right|\le\int_0^\pi\frac{R}{(R^2-a^2)^2}\,dt=\frac{\pi R}{(R^2-a^2)^2}=\frac{\pi}{R^3}\cdot\frac{1}{(1-a^2/R^2)^2}\xrightarrow[R\to\infty]{}0.$$
>>	6. **Identidad antes de tomar límites.** Como $\Gamma_R$ es cerrada, rectificable y homotópica a cero en $\mathbb C$, y $f$ es analítica en $\mathbb C\setminus\{ia,-ia\}$, por [[FA - Teo11#^a11f03|teorema de los residuos]] $$\int_{-R}^{R}\frac{dx}{(x^2+a^2)^2}+\int_{\gamma_R}f(z)\,dz=2\pi i\,\operatorname{Res}(f;ia),$$ pues solo $ia$ tiene índice no nulo. El factor $2\pi i$ y el índice son parte de la fórmula: la integral de contorno no es el residuo.
>>	7. **Residuo.** Escribimos $f(z)=\dfrac{g(z)}{(z-ia)^2}$ con $$g(z)=\frac{1}{(z+ia)^2}.$$ La función $g$ es analítica en el disco $B(ia,a)$, que no contiene a $-ia$, así que por [[FA - Teo12#^a12b01|residuo en un polo]] con $m=2$ resulta $\operatorname{Res}(f;ia)=g'(ia)$. Como $$g'(z)=-2(z+ia)^{-3},\qquad (2ia)^3=8i^3a^3=-8ia^3,$$ obtenemos $$\operatorname{Res}(f;ia)=\frac{-2}{-8ia^3}=\frac{1}{4ia^3}=-\frac{i}{4a^3},$$ usando $1/i=-i$.
>>	8. **Paso al límite.** Por el paso 5 el arco tiende a $0$, y por el paso 2 el segmento tiende a $2I$. Tomando $R\to\infty$ en el paso 6, $$2I=2\pi i\left(-\frac{i}{4a^3}\right)=\frac{2\pi}{4a^3}=\frac{\pi}{2a^3}.$$ Dividiendo por $2$, $$\boxed{\displaystyle\int_0^\infty\frac{dx}{(x^2+a^2)^2}=\frac{\pi}{4a^3}}.$$ El signo y la realidad del resultado confirman que los dos factores olvidados ($2\pi i$ y el $1/2$ de la paridad) están bien contabilizados.

>[!exercise] Ejercicio 10
>Encontrar todos los posibles valores de $\int_\gamma e^{\frac{1}{z}}\,dz$ donde $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$, de modo que no pasa por el cero.
>
>>[!Proof]-
>>1. **Función e hipótesis sobre la curva.** La función $f(z)=e^{\frac{1}{z}}$ es analítica en $\mathbb C\setminus\{0\}$, de modo que $0$ es la única singularidad de $f$. Por [[FA - Teo10#^a10e03|e^{1/z} tiene una singularidad esencial en 0]], esa singularidad no es evitable ni es un polo: es esencial. Por otra parte, la hipótesis $0\notin\{\gamma\}$ significa $|0-z_0|\ne r$, es decir, $|z_0|\ne r$: el origen está dentro de la circunferencia o fuera de ella, nunca sobre ella.
>>2. **Residuo en la singularidad esencial.** Por [[FA - Teo11#^a11d01|residuo]] hay que leer el coeficiente $a_{-1}$ del desarrollo de Laurent de $f$ centrado en $0$. Por el [[FA - Teo2#^6fedda|desarrollo de Taylor]] de la exponencial, para $z\ne0$, $$e^{1/z}=\sum_{n=0}^{\infty}\frac{z^{-n}}{n!}=1+\frac1z+\frac{1}{2!z^2}+\frac{1}{3!z^3}+\cdots,$$ y el término con exponente $-1$ corresponde a $n=1$, de modo que $$\operatorname{Res}(f;0)=a_{-1}=\frac{1}{1!}=1.$$ Los infinitos coeficientes negativos no nulos confirman que no se trata de un polo, y por eso no se puede usar la fórmula de residuos en un polo.
>>3. **Índice en el caso exterior.** Si $|z_0|>r$, entonces $|0-z_0|=|z_0|>r$, así que el origen queda fuera de la circunferencia y pertenece a la componente no acotada de $\mathbb C\setminus\{\gamma\}$. Por [[FA - Teo6#^c6a183|el índice es constante en cada componente y es cero en la no acotada]], $$n(\gamma,0)=0.$$
>>4. **Índice en el caso interior.** Si $|z_0|<r$, el disco $B(z_0,r)$ es conexo y su traza no corta a $\gamma$, de modo que está contenido en una única componente conexa de $\mathbb C\setminus\{\gamma\}$; tanto el centro $z_0$ como $0$ están en él. En el centro el índice se calcula en una línea por [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(\gamma,z_0)=\frac{1}{2\pi i}\int_0^{2\pi}\frac{ire^{it}}{re^{it}}\,dt=\frac{1}{2\pi i}\int_0^{2\pi}i\,dt=1,$$ y por la constancia del índice en la componente, $n(\gamma,0)=n(\gamma,z_0)=1$.
>>5. **Identidad de residuos.** El conjunto $G=\mathbb C$ es abierto y convexo, así que la curva $\gamma$, cerrada y rectificable en $G$, es homotópica a cero en $G$ por [[FA - Teo8#^8a0036|curvas cerradas en un convexo]]. Con la única singularidad $z=0$, el [[FA - Teo11#^a11f03|teorema de los residuos]] da entonces $$\int_\gamma e^{1/z}\,dz=2\pi i\,n(\gamma,0)\,\operatorname{Res}(f;0)=2\pi i\,n(\gamma,0).$$
>>6. **Resultado.** Sustituyendo los índices de los pasos 3 y 4, $$\boxed{\displaystyle\int_\gamma e^{\frac{1}{z}}\,dz=\begin{cases}0,&|z_0|>r,\\ 2\pi i,&|z_0|<r.\end{cases}}$$ Ambos valores se realizan: por ejemplo $z_0=10$, $r=1$ da $0$, y $z_0=0$, $r=1$ da $2\pi i$. Por tanto, los posibles valores son exactamente $\{0,\,2\pi i\}$.

>[!exercise] Ejercicio 11
>Supongamos que $f$ tiene un polo simple en $z=a$ y que $g$ es analítica en un abierto que contiene a $a$. Demostrar que $\operatorname{Res}(fg;a)=g(a)\operatorname{Res}(f;a)$.

>[!exercise] Ejercicio 12
>Sean $f$ analítica en $G=B(0,R)$ excepto en polos simples $a_1,\dots,a_n$ y $g$ analítica en $G$. Probar que si $\gamma(t)=re^{it}$, $t\in[0,2\pi]$, tal que $|a_1|,\dots,|a_n|<r<R$, entonces se tiene que $$\frac{1}{2\pi i}\int_\gamma fg=\sum_{k=1}^n g(a_k)\operatorname{Res}(f;a_k).$$

>[!exercise] Ejercicio 13
>Sean $f$ entera, $R\in\mathbb R$ y $a,b\in\mathbb C$ tales que $a\ne b$, $|a|<R$ y $|b|<R$. Probar que $$\frac{1}{2\pi i}\int_\gamma\frac{f(z)}{(z-a)(z-b)}\,dz=\frac{f(b)-f(a)}{b-a},\qquad\text{con }\gamma(t)=Re^{it},\ 0\le t\le 2\pi.$$ Usar este resultado para dar otra prueba del Teorema de Liouville.
