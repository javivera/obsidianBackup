# Funciones Analíticas — Práctico 7

En esta práctica, $G$ será un abierto conexo (región) de $\mathbb C$ y notaremos $$\mathcal H(G):=\{f:G\to\mathbb C\mid f\text{ es analítica}\}.$$

>[!exercise] Ejercicio 1
>Sea $(f_n)_{n\ge1}$ una sucesión de funciones en $C(\Omega)$ con $\Omega\subseteq\mathbb C$. Entonces $(f_n)$ converge uniformemente sobre compactos a $f$ si y sólo si $(f_n)$ converge uniformemente a $f$ sobre todo disco cerrado $\overline{D(z,r)}\subset\Omega$ con centro $z$ de coordenadas racionales y radio $r$ racional.

>[!exercise] Ejercicio 2
>Una sucesión $(f_n)_{n\ge1}$ de funciones en $C(\Omega)$ *converge uniformemente* en $\Omega$ hacia una función $f$ (necesariamente en $C(\Omega)$) si $$\lim_{n\to\infty}\sup_{z\in\Omega}|f_n(z)-f(z)|=0.$$
>- **(a)** Mostrar que si se tiene convergencia uniforme en todo $\Omega$, se tiene también convergencia uniforme sobre los compactos de $\Omega$.
>- **(b)** Mostrar que la convergencia uniforme sobre compactos no basta para garantizar la convergencia uniforme.

>[!exercise] Ejercicio 3
>Sea $$P_n(z)=1+\frac{z}{2!}+\cdots+\frac{z^n}{(n+1)!}.$$ Demostrar que dado $R>0$, existe $n_0\in\mathbb N$ tal que para todo $n\ge n_0$ vale que $P_n$ no tiene ceros reales de módulo menor que $R$.

>[!exercise] Ejercicio 4
>Probar que la función gamma $$\Gamma(z):=\int_0^{+\infty}e^{-t}t^{z-1}\,dt$$ es holomorfa en $\operatorname{Re}(z)>0$. (Ayuda: considerar la sucesión $\Gamma_n(z):=\int_{1/n}^{n}e^{-t}t^{z-1}\,dt$).

>[!exercise] Ejercicio 5
>Probar que $$\left(1+\frac zn\right)^n\xrightarrow[n\to\infty]{}e^z\quad\text{en }\mathcal H(\mathbb C).$$

>[!exercise] Ejercicio 6
>- **(a)** Si $(f_n)_{n\ge1}\subset\mathcal H(G)$ converge uniformemente a $f$ en un compacto $K$ y $f(z)\ne0$ para todo $z\in K$, entonces existe $n_0\in\mathbb N$ tal que para todo $n\ge n_0$, $f_n$ no se anula sobre $K$ y $$\frac1{f_n}\xrightarrow[n\to\infty]{\text{unif.}}\frac1f\quad\text{sobre }K.$$
>- **(b)** Sean $(f_n)_{n\ge1}$ y $(g_n)_{n\ge1}$ sucesiones en $\mathcal H(G)$ tales que $f_n\xrightarrow{\text{unif.}}f$ y $g_n\xrightarrow{\text{unif.}}g$ en $K$. Probar que $f_ng_n\xrightarrow{\text{unif.}}fg$ en $K$.
>- **(c)** Sean $f,(f_n)_{n\ge1}\subset\mathcal H(G)$ tales que $f_n\xrightarrow{\text{unif.}}f$ en $K$ y $f$ no se anula en $K$. Si $K=\operatorname{Im}\gamma$, donde $\gamma$ es una curva tal que $\eta(\gamma,z)=0$ o $1$ para todo $z\in\mathbb C\setminus K$, y $f$ es no constante y no nula en $K$, entonces existe $n_0\in\mathbb N$ tal que para todo $n\ge n_0$, la cantidad de ceros de $f_n$ es igual a la cantidad de ceros de $f$ en $\operatorname{Int}(\gamma)$.

>[!exercise] Ejercicio 7
>Sea $(f_n)_{n\ge1}\subset\mathcal H(G)$ tal que $f_n\xrightarrow{\text{unif.}}f$ uniformemente sobre los compactos de $G$ y supongamos que $f\not\equiv0$, pero existe $a\in G$ tal que $f(a)=0$. Probar que existe $n_0\in\mathbb N$ tal que para todo $n\ge n_0$ existe un número complejo $a_n$ tal que $f_n(a_n)=0$ y $a_n\to a$.

>[!exercise] Ejercicio 8
>Probar que, dada una sucesión $(f_n)_{n\ge1}\subset\mathcal H(G)$ tal que $f_n\xrightarrow{\text{unif.}}f$ uniformemente sobre compactos de $G$, y una sucesión $(z_n)_{n\ge1}\subset G$ que converge a $z\in G$, entonces $f_n(z_n)\to f(z)$.

>[!exercise] Ejercicio 9
>Si $(f_n)_{n\ge1}\subset\mathcal H(G)$ y $f_n\xrightarrow{\text{unif.}}f$ uniformemente sobre compactos de $G$, entonces $$e^{f_n}\xrightarrow{\text{unif.}}e^f$$ uniformemente sobre los compactos de $G$.
