# Funciones Analíticas — Práctico 5

>[!exercise] Ejercicio 1
>Sea $p(z)$ un polinomio de grado $n$. Sea $R>0$ tal que $p$ no se anula en $\{z\in\mathbb C:|z|>R\}$. Probar que $$\int_\gamma\frac{p'(z)}{p(z)}\,dz=2\pi i n,$$ donde $\gamma(t)=Re^{it}$ con $t\in[0,2\pi]$.

>[!exercise] Ejercicio 2
>Probar la Regla de L'Hopital para funciones analíticas: sean $f$ y $g$ funciones analíticas en $G$ y sea $a\in G$.
>- **(a)** Si $f(a)=g(a)=0$ y $g'(a)\ne 0$ entonces $\lim_{z\to a}\frac{f(z)}{g(z)}=\lim_{z\to a}\frac{f'(z)}{g'(z)}=\frac{f'(a)}{g'(a)}$.
>- **(b)** Probar la Regla de L'Hopital siendo $a$ un polo de $f$ y de $g$.

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
