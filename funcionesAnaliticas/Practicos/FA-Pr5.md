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
