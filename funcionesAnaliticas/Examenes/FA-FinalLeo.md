# Final de Funciones Analíticas

## Ejercicio 1

>[!example] Existencia de logaritmos holomorfos
>Sea $G$ un abierto no vacío de $\mathbb{C}$ y sea $f\in\mathcal{H}(G)$ sin ceros en $G$. Una función $F\in\mathcal{H}(G)$ se llama **logaritmo de $f$** si $$e^{F(z)}=f(z),\qquad \forall z\in G.$$
>Probar que son equivalentes las siguientes afirmaciones:
>- (a) $G$ es simplemente conexo.
>- (b) Si $f\in\mathcal{H}(G)$ no tiene ceros en $G$, la función $\dfrac{f'}{f}$ posee primitiva.
>- (c) Toda $f\in\mathcal{H}(G)$ sin ceros en $G$ posee un logaritmo en $G$.
>- (d) Para cada $a\in\mathbb{C}\setminus G$ existe un logaritmo holomorfo de $z-a$ en $G$.
## Ejercicio 2

>[!Exercise] Integral impropia
>Probar que
>$$\int_{-\infty}^{\infty}\frac{e^{ux}}{e^x+1}\,dx=\frac{\pi}{\sin(u\pi)}.$$

## Ejercicio 3

>[!Exercise] Criterio de analiticidad
>Sea $G$ una región simplemente conexa en $\mathbb{C}$. Si $f$ es una función continua en $G$ tal que, para cualquier curva cerrada $C\subset G$,
>$$\int_C f(z)z\,dz=0,$$
>entonces $f$ es analítica.

## Ejercicio 4

>[!Exercise] Funciones holomorfas de módulo uno en la circunferencia
>Sea $f$ una función holomorfa no constante en un abierto conexo que contiene a $\overline{B(0,1)}$, tal que
>$$|f(z)|=1\qquad\text{si }|z|=1.$$
>
>1. Probar que $f$ tiene un número finito, mayor o igual que uno, de ceros en $B(0,1)$.
>2. Si los ceros distintos de $f$ en $B(0,1)$ son $a_1,\dots,a_m$, con multiplicidades $\mu_1,\dots,\mu_m$, y para cada $a_i\in B(0,1)$ se define
>   $$\varphi_{a_i}(z)=\frac{z-a_i}{1-\overline{a_i}z},$$
>   probar que existe un $\lambda$ de módulo $1$ tal que
>   $$f(z)=\lambda\,[\varphi_{a_1}(z)]^{\mu_1}[\varphi_{a_2}(z)]^{\mu_2}\cdots[\varphi_{a_m}(z)]^{\mu_m},\qquad \forall z\in B(0,1).$$
>3. Si ahora se supone que $f$ es entera, no constante y cumple también la condición $|f(z)|=1$ para $|z|=1$, probar que existen un $\lambda$ de módulo $1$ y un $n\geq 1$ tales que
>   $$f(z)=\lambda z^n.$$

## Ejercicio 5

>[!Exercise] Ceros de $f(z)+z^n g(z)$
>Sean $f$ y $g$ dos funciones holomorfas sobre el disco $B(0,2)$, de manera que $g$ no es idénticamente nula. Probar que
>$$f(z)+z^n g(z)$$
>tiene al menos una raíz en $B(0,2)$ para $n\in\mathbb{N}$ suficientemente grande.

## Ejercicio 6

>[!Exercise] Verdadero o falso
>Determinar si las siguientes afirmaciones son verdaderas o falsas:
>
>1. Una función armónica no constante sobre un dominio es una aplicación abierta.
>2. Existe $f$ analítica en un dominio que contiene un abierto conexo $G$, tal que $|f(z)|$ alcanza su mínimo en un punto $z_0\in G$ si $f(z_0)=0$.
>3. Si $f$ es analítica en un abierto que contiene a la curva cerrada $C$ y $z_0\notin C$, entonces
>   $$\int_C\frac{f'(z)}{z-z_0}\,dz=\int_C\frac{f(z)}{(z-z_0)^2}\,dz.$$
>4. Si $h(z)=f\left(\dfrac{1}{z}\right)$ para $z\neq 0$, con $f$ entera y biyectiva, entonces $z=0$ es un polo de $h$.
