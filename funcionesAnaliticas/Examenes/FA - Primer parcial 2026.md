# Funciones Analíticas — Primer Parcial

**FaMAF – UNC**

**Nombre y apellido:** ______________________________

**Indicaciones.** Justifique todas sus afirmaciones. Puede utilizar los resultados generales desarrollados en el curso, indicando claramente cuáles está usando.

## Problema 1 (20 puntos)

>[!exercise] Problema 1
>Sea $f:\mathbb{C}\to\mathbb{C}$, $f(z)=u(x,y)+iv(x,y)$, con $z=x+iy$.
>- **(a)** Considerar la función $$f(z)=\begin{cases}\dfrac{\overline{z}^{\,2}}{z},&z\ne 0,\\0,&z=0.\end{cases}$$ Demostrar que las derivadas parciales de $u$ y $v$ existen en $(0,0)$ y satisfacen ecuaciones de Cauchy–Riemann en ese punto.
>- **(b)** Demostrar que $f$ no es diferenciable (complejo) en $z=0$.
>- **(c)** Enunciar una hipótesis adicional sobre $u$ y $v$ bajo la cual las ecuaciones de Cauchy–Riemann sí constituyen una condición suficiente para la diferenciabilidad compleja.
>
>>[!Proof]-
>>- (a)
>>	1. Para $(x,y)\ne(0,0)$, sustituimos $z=x+iy$ y $\overline z=x-iy$ y multiplicamos numerador y denominador por $x-iy$: $$\begin{aligned}f(x+iy)&=\frac{(x-iy)^2}{x+iy}=\frac{(x-iy)^3}{(x+iy)(x-iy)}=\frac{(x-iy)^3}{x^2+y^2},\\(x-iy)^3&=x^3-3ix^2y-3xy^2+iy^3=(x^3-3xy^2)+i(y^3-3x^2y).\end{aligned}$$ Por lo tanto, $$u(x,y)=\frac{x^3-3xy^2}{x^2+y^2},\qquad v(x,y)=\frac{y^3-3x^2y}{x^2+y^2}.$$ Como $f(0)=0$, se tiene $u(0,0)=v(0,0)=0$.
>>	2. Si $h\in\mathbb R\setminus\{0\}$, al sustituir $(x,y)=(h,0)$ y $(x,y)=(0,h)$ en esas fórmulas obtenemos $$u(h,0)=\frac{h^3}{h^2}=h,\quad v(h,0)=0,\quad u(0,h)=0,\quad v(0,h)=\frac{h^3}{h^2}=h.$$
>>	3. Aplicamos la definición de cada derivada parcial en el origen: $$\begin{aligned}u_x(0,0)&=\lim_{h\to0}\frac{u(h,0)-u(0,0)}h=\lim_{h\to0}\frac hh=1,\\v_x(0,0)&=\lim_{h\to0}\frac{v(h,0)-v(0,0)}h=\lim_{h\to0}\frac0h=0,\\u_y(0,0)&=\lim_{h\to0}\frac{u(0,h)-u(0,0)}h=\lim_{h\to0}\frac0h=0,\\v_y(0,0)&=\lim_{h\to0}\frac{v(0,h)-v(0,0)}h=\lim_{h\to0}\frac hh=1.\end{aligned}$$ En consecuencia, existen las cuatro parciales y satisfacen $u_x(0,0)=v_y(0,0)=1$ y $u_y(0,0)=-v_x(0,0)=0$.
>>- (b)
>>	1. Para decidir si $f$ es diferenciable en $0$, consideramos el cociente incremental complejo. Como $f(0)=0$, para $z\ne0$ se tiene $$\frac{f(z)-f(0)}{z}=\frac{\overline z^{\,2}}{z^2}.$$
>>	2. Si $z=t$ con $t\in\mathbb R\setminus\{0\}$, entonces $\overline t=t$, y por tanto $$\frac{f(t)-f(0)}{t}=\frac{t^2}{t^2}=1.$$
>>	3. Si $z=t(1+i)$ con $t\in\mathbb R\setminus\{0\}$, entonces $\overline z=t(1-i)$ y $$\frac{f(t(1+i))-f(0)}{t(1+i)}=\frac{t^2(1-i)^2}{t^2(1+i)^2}=\frac{-2i}{2i}=-1.$$
>>	4. Cuando $t\to0$, los dos caminos llegan a $0$, pero los cocientes incrementales tienen límites distintos: $1$ y $-1$. Por lo tanto, el límite complejo que define $f'(0)$ no existe y $f$ no es diferenciable en $0$.
>>- (c)
>>	1. Una hipótesis adicional suficiente es que las derivadas parciales primeras de $u$ y $v$ existan en un entorno de $(0,0)$ y sean continuas en $(0,0)$. Bajo esa hipótesis, las ecuaciones de Cauchy–Riemann en el origen garantizan la diferenciabilidad compleja de $f$ allí, según [[FA - Teo2#^a4c12e|Proposición 51]].

## Problema 2 (15 puntos)

>[!exercise] Problema 2
>Determinar si las siguientes afirmaciones son verdaderas o falsas. Justificar.
>- **(a)** Si $f:G\to\mathbb{C}$ es analítica, $G$ es conexo y $|f(G)|=1$, entonces $f$ es constante.
>- **(b)** Si $G\subset\mathbb{C}\setminus\{0\}$ es abierto y conexo, entonces existe una rama del logaritmo definida en $G$.
>- **(c)** Toda transformación de Möbius envía circunferencias en circunferencias.
>- **(d)** Si $f$ es analítica en un disco $B(a,R)$ y $f(z)=\sum_{n=0}^{\infty}c_n(z-a)^n$ en dicho disco, entonces el radio de convergencia de la serie debe ser exactamente $R$.
>
>>[!Proof]-
>>- (a)
>>	1. Tal como está escrito, $|f(G)|=1$ significa que la imagen $f(G)$ tiene un único elemento. Por lo tanto, $f$ es constante y la afirmación es verdadera; no hacen falta ni la analiticidad ni la conexidad.
>>	2. Si la intención era afirmar $|f(z)|=1$ para todo $z\in G$, también es verdadera: aplicando [[FA - Teo5#^4c39b6|función analítica de módulo constante]] con $C=1$, resulta que $f$ es constante.
>>- (b)
>>	1. Tomamos $G=\mathbb C\setminus\{0\}$, que es abierto, conexo y satisface las hipótesis. Supongamos que existe una rama continua $L:G\to\mathbb C$ del logaritmo. Entonces sigue siendo una rama continua del logaritmo cuando restrinjo a $U=\mathbb C\setminus(-\infty,0]$ 
>>	2. En $U=\mathbb C\setminus(-\infty,0]$, la rama principal $\operatorname{Log}$ está definida. Como $e^{L(z)}=e^{\operatorname{Log}z}=z$, para cada $z\in U$ se tiene $L(z)-\operatorname{Log}z\in2\pi i\mathbb Z$. La diferencia es continua en el conexo $U$ y toma valores en el conjunto discreto $2\pi i\mathbb Z$; por tanto, existe un único $k\in\mathbb Z$ tal que $L(z)=\operatorname{Log}z+2\pi ik$ para todo $z\in U$.
>>	3. Al aproximarse a $-1$ desde el semiplano superior y el inferior, respectivamente, los límites de $\operatorname{Log}z+2\pi ik$ son $i\pi+2\pi ik$ y $-i\pi+2\pi ik$. Son distintos, aunque ambos caminos convergen a $-1\in G$. Esto contradice la continuidad de $L$ en $-1$. Por lo tanto, no existe tal rama y la afirmación es falsa.
>>- (c)
>>	1. Consideramos la transformación de Möbius $S(z)=(z-1)/(z-2)$: el determinante de sus coeficientes es $1(-2)-(-1)1=-1\ne0$. Su polo es $2$, que pertenece a la circunferencia $C=\{z:|z|=2\}$, y $S(2)=\infty$ en la esfera de Riemann.
>>	2. Para identificar la imagen finita, escribimos $w=S(z)$. Entonces $z=(2w-1)/(w-1)$, y la condición $|z|=2$ equivale a $|2w-1|=2|w-1|$. Al elevar al cuadrado y simplificar obtenemos $4|w|^2-4\operatorname{Re}w+1=4|w|^2-8\operatorname{Re}w+4$, esto es, $\operatorname{Re}w=3/4$. La imagen de $C$ es esa recta junto con $\infty$, no una circunferencia euclídea. La afirmación es falsa.
>>- (d)
>>	1. Las hipótesis garantizan que la serie converge en $B(a,R)$, de modo que su radio de convergencia es al menos $R$, pero no necesariamente igual a $R$.
>>	2. Por ejemplo, tomamos $a=0$, $R=1$ y $f(z)=\sin z$. Su desarrollo $\sin z=\sum_{n=0}^{\infty}(-1)^n z^{2n+1}/(2n+1)!$ converge para todo $z\in\mathbb C$: para $z$ fijo, el cociente entre módulos de términos consecutivos no nulos es $|z|^2/((2n+2)(2n+3))\to0$. Así, la serie representa a $f$ en $B(0,1)$, pero su radio de convergencia es infinito, no $1$. La afirmación es falsa.

## Problema 3 (20 puntos)

>[!exercise] Problema 3
>Sea $m\ge 2$.
>- **(a)** Sea $G=\mathbb{C}\setminus(-\infty,0]$. Probar que existen exactamente $m$ funciones analíticas $f:G\to\mathbb{C}$ que satisfacen $f(z)^m=z$ para todo $z\in G$.
>- **(b)** Sea $H=\mathbb{C}\setminus\{0\}$. ¿Existen funciones analíticas $f:H\to\mathbb{C}$ que satisfagan $f(z)^m=z$ para todo $z\in H$? Justificar.
>>[!Proof]-
>>- (a)
>>	1. En $G$ fijamos la rama principal $L(z)=\ln|z|+i\operatorname{Arg}z$, con $\operatorname{Arg}z\in(-\pi,\pi)$. Por [[FA - Teo2#^3a5482|analiticidad de las ramas del logaritmo]], $L$ es analítica, y $e^{L(z)}=z$.
>>	2. Para $k\in\mathbb Z$, definimos $f_k(z)=\exp\!\left((L(z)+2\pi i k)/m\right)$. Cada $f_k$ es analítica y $f_k(z)^m=e^{L(z)+2\pi i k}=z$. Además, $f_{k+m}=f_k$.
>>	3. Si $0\le k_1,k_2<m$ y $f_{k_1}=f_{k_2}$, entonces $e^{2\pi i(k_1-k_2)/m}=1$, de modo que $k_1-k_2=jm$ para algún $j\in\mathbb Z$. Como $|k_1-k_2|<m$, resulta $k_1=k_2$. Así, $f_0,\ldots,f_{m-1}$ son $m$ soluciones distintas.
>>	4. Sea $f:G\to\mathbb C$ cualquier otra solución analítica. Como $f_0$ no se anula, $h=f/f_0$ es continua y satisface $h(z)^m=1$. Por lo tanto, $h(G)$ está contenido en el conjunto finito $\{e^{2\pi i k/m}:0\le k<m\}$. Como $G$ es conexo, $h(G)$ es conexo y, por ser un subconjunto de un conjunto finito de puntos aislados, consta de un solo valor. Entonces $h=e^{2\pi i k/m}$ para algún $k$, y $f=f_k$. No existen más soluciones.
>>- (b)
>>	1. Supongamos que existe una función analítica $f:H\to\mathbb C$ tal que $f(z)^m=z$ para todo $z\in H$. Como $G\subset H$, su restricción $f|_G$ es analítica y, por (a), coincide con alguna $f_k$.
>>	2. Fijemos r un numero real negativo y tomemos $a_n=r-i/n$ y $b_n=r+i/n$.
>>	3. Ambas sucesiones pertenecen a $G$ y convergen a $z$. Puesto que $f|_G=f_k$, se tiene $$\begin{aligned}\lim_{n\to\infty}f(a_n)&=e^{(\ln |r|-i\pi+2\pi i k)/m},\\\lim_{n\to\infty}f(b_n)&=e^{(\ln |r|+i\pi+2\pi i k)/m}.\end{aligned}$$ Los límites son distintos: el cociente del segundo por el primero es $e^{2\pi i/m}\ne1$ porque $m\ge2$.
>>	4. Sin embargo, la continuidad de $f$ en $z\in H$ obligaría a que ambos límites fueran $f(z)$, independientemente de cómo se hubiese definido $f$ fuera de $G$. 
>>	5. La contradicción demuestra que no existe tal función analítica en $H$.

## Problema 4 (15 puntos)

>[!exercise] Problema 4
>Sea $\mathbb{D}=\{z\in\mathbb{C}:|z|<1\}$ y $S$ transformación de Möbius tal que $S(\mathbb{D})=\mathbb{D}$. Demostrar que si $S(0)=0$, entonces $S$ es una rotación.
>>[!Proof]-
>>1. Escribimos $S(z)=(az+b)/(cz+d)$, con $ad-bc\ne0$. Como $S(0)=0$, tenemos $d\ne0$ y $b=0$; en particular, $a\ne0$ y $S(z)=az/(cz+d)$.
>>2. Sea $|\delta|=1$ y tomemos una sucesión $z_n\in\mathbb D$ tal que $z_n\to\delta$. Como $S(z_n)\in\mathbb D$, se cumple $|az_n|/|cz_n+d|=|S(z_n)|<1$; el denominador no se anula porque $S$ está definida en $\mathbb D$. Entonces obtenemos $$|az_n|<|cz_n+d|$$ con lo cual usando límite, $$|a|\le|c\delta+d|$$
>>3. Como $a\ne0$ por $ad-bc\ne0$ y $b=0$, resulta $c\delta+d\ne0$, de modo que $S(\delta)$ está definida y $|S(\delta)|\le1$.
>>4. Si $|S(\delta)|<1$, entonces $S(\delta)\in\mathbb D$ y tendríamos $\delta=S^{-1}(S(\delta))\in\mathbb D$, porque $S^{-1}(\mathbb D)=\mathbb D$, una contradicción con $|\delta|=1$.
>>5. Por tanto, $|S(\delta)|=1$ para todo $|\delta|=1$, es decir, $|a|=|c\delta+d|$. Al elevar al cuadrado, $$|a|^2=|c|^2+|d|^2+2\operatorname{Re}(c\overline d\,\delta).$$
>>6. Sustituimos directamente $\delta=1,-1,i,-i$ en la igualdad anterior: $$\begin{aligned}\delta=1:&\quad |a|^2=|c|^2+|d|^2+2\operatorname{Re}(c\overline d),\\\delta=-1:&\quad |a|^2=|c|^2+|d|^2-2\operatorname{Re}(c\overline d),\\\delta=i:&\quad |a|^2=|c|^2+|d|^2-2\operatorname{Im}(c\overline d),\\\delta=-i:&\quad |a|^2=|c|^2+|d|^2+2\operatorname{Im}(c\overline d).\end{aligned}$$las dos primeras igualdades dan $4\operatorname{Re}(c\overline d)=0$ y las dos últimas dan $4\operatorname{Im}(c\overline d)=0$ por tanto, $c\overline d=0$ y, como $d\ne0$, resulta $c=0$.
>>7. La misma igualdad se reduce a $|a|=|d|$. Por tanto, $S(z)=(a/d)z$ con $|a/d|=1$, es decir, existe $\theta\in\mathbb R$ tal que $a/d=e^{i\theta}$ y $S(z)=e^{i\theta}z$. En consecuencia, $S$ es una rotación.

## Problema 5 (15 puntos)

>[!exercise] Problema 5
>- **(a)** Considere los caminos $\gamma_1(t)=t(1+i)$ con $0\le t\le 1$, y $\gamma_2=[0,1,1+i]$, es decir, el camino poligonal que une $0$ con $1$ y luego $1$ con $1+i$. Calcular $\int_{\gamma_1}\overline{z}\,dz$ y $\int_{\gamma_2}\overline{z}\,dz$.
>- **(b)** Sea $g(z)=z^2+1$. Sin parametrizar el camino, calcular $\int_\sigma g(z)\,dz$, donde $\sigma$ es cualquier camino suave a trozos que une $0$ con $1+i$. Explique por qué en este caso la integral no depende del camino elegido.
>>[!Proof]-
>>- (a)
>>	1. Para $\gamma_1(t)=t(1+i)$, se tiene $\overline{\gamma_1(t)}=t(1-i)$ y $\gamma_1'(t)=1+i$. Por tanto, $$\int_{\gamma_1}\overline z\,dz=\int_0^1t(1-i)(1+i)\,dt=\int_0^1 2t\,dt=1.$$
>>	2. Separamos $\gamma_2$ en el segmento $\alpha(t)=t$, de $0$ a $1$, y el segmento $\beta(t)=1+it$, de $1$ a $1+i$, ambos con $0\le t\le1$. En el primero, $$\int_\alpha\overline z\,dz=\int_0^1t\,dt=\frac12.$$ En el segundo, $$\int_\beta\overline z\,dz=\int_0^1(1-it)i\,dt=\int_0^1(t+i)\,dt=\frac12+i.$$
>>	3. Por aditividad, $$\int_{\gamma_2}\overline z\,dz=\int_\alpha\overline z\,dz+\int_\beta\overline z\,dz=1+i.$$ En particular, las integrales sobre $\gamma_1$ y $\gamma_2$ difieren aunque los caminos tienen los mismos extremos.
>>- (b)
>>	1. La función $F(z)=\frac{z^3}{3}+z$ es una primitiva de $g$ en $\mathbb C$, pues $F'(z)=z^2+1=g(z)$.
>>	2. Por [[FA - Teo4#^c8a124|regla de Barrow para integrales de línea]], $$\int_\sigma g(z)\,dz=F(1+i)-F(0).$$ Como $(1+i)^3=-2+2i$, resulta $$\int_\sigma g(z)\,dz=\frac{-2+2i}{3}+1+i=\frac13+\frac53i.$$ La expresión sólo depende de los extremos, no del camino $\sigma$ elegido.

## Problema 6 (15 puntos)


>[!exercise] Problema 6
>Considere la rama principal del logaritmo $\operatorname{Log}:\mathbb{C}\setminus(-\infty,0]\longrightarrow\mathbb{C}$ y sea $a=1+i$.
>- **(a)** Sin calcular todavía los coeficientes, determine el mayor disco centrado en $a$ en el cual $\operatorname{Log}z$ admite un desarrollo en serie de potencias. Justifique.
>- **(b)** Encuentre el desarrollo en serie de potencias de $\operatorname{Log}z$ centrado en $a$.
>- **(c)** ¿Qué ocurriría con el radio de convergencia si se eligiera otra rama del logaritmo definida en un dominio que contenga a $a$?
>>[!Proof]-
>>- (a)
>>	1. El punto de la frontera $\partial G=(-\infty,0]$ más cercano a $a=1+i$ es $0$, por lo que $\operatorname{dist}(a,\partial G)=|1+i|=\sqrt2$. Por [[FA - Teo2#^6fedda|desarrollo de Taylor y distancia al borde]], la serie de Taylor centrada en $a$ representa a $\operatorname{Log}$ en $B(a,\sqrt2)$ y su radio de convergencia satisface $R\geq\sqrt2$.
>>	2. Si el radio fuera mayor que $\sqrt2$, la suma de la serie estaría definida y sería continua en $0$, así que sus valores en $i/n\to0$ tendrían que converger al valor finito de la serie en $0$. Para todo $n\geq1$, $i/n\in B(a,\sqrt2)$, pues $|i/n-a|^2=1+(1-1/n)^2<2$; allí la suma coincide con $\operatorname{Log}(i/n)=\ln(1/n)+i\pi/2=-\ln n+i\pi/2$. La parte real de estos valores tiende a $-\infty$, de modo que no convergen a ningún número complejo finito, contradiciendo la continuidad de la suma en $0$.
>>	3. El radio es exactamente $\sqrt2$ y el disco pedido es $B(1+i,\sqrt2)$.
>>- (b)
>>	1. Por [[FA - Teo2#^2f6d2c|derivada de una rama del logaritmo]], $f'(z)=1/z$. Por inducción, para $n\geq1$, $$f^{(n)}(z)=(-1)^{n-1}(n-1)!/z^n$$
>>	2. Por la fórmula de los coeficientes de Taylor, $c_n=f^{(n)}(a)/n!$, el desarrollo es $$\operatorname{Log}z=\operatorname{Log}(1+i)+\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n(1+i)^n}(z-(1+i))^n=\ln\sqrt2+\frac{\pi i}{4}+\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}\left(\frac{z-(1+i)}{1+i}\right)^n,$$ con radio de convergencia $\sqrt2$
>>- (c)
>>	1. Sea $L$ otra rama definida en un dominio que contiene a $a=1+i$. Por [[FA - Teo2#^2f6d2c|derivada de una rama del logaritmo]], $L'(z)=1/z$, igual que para la rama principal. Por tanto, sus derivadas de todo orden positivo en $a$ coinciden y sus coeficientes de Taylor $c_n$ coinciden para todo $n\geq1$; el término constante es $L(a)$, que puede diferir del de la rama principal.
>>	2. Para $n\geq1$, $|c_n/c_{n+1}|=|a|(n+1)/n\to|a|=\sqrt2$. Por el criterio del cociente, el radio de convergencia es $\sqrt2$, igual que para la rama principal.
>>	3. Hay que distinguir entre convergencia de la serie e igualdad con la rama elegida. Si $G$ es el dominio de $L$ y $d=\operatorname{dist}(a,\partial G)$, por [[FA - Teo2#^6fedda|desarrollo de Taylor y distancia al borde]], la serie coincide con $L$ en $B(a,d)$. En particular, si $G=\mathbb C\setminus S$ para una semirrecta $S$ que pasa cerca de $a$, entonces $d=\operatorname{dist}(a,S)$ puede ser menor que $\sqrt2$: el mayor disco centrado en $a$ contenido en el dominio de la rama se achica a $B(a,d)$, pero el disco de convergencia sigue siendo $B(a,\sqrt2)$. La suma de la serie está definida incluso sobre el corte; fuera de $B(a,d)$ no se puede afirmar que coincida con la rama original en todos los puntos donde esta esté definida.
