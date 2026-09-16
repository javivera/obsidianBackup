# Funciones Analíticas — Práctico 4

>[!exercise] Ejercicio 1
>Sea $\gamma:[a,b]\to\mathbb C$ una curva $C^1$ a trozos y supongamos que $f$ es una función continua sobre $\{\gamma\}$.
>- **(i)** Probar que $\int_\gamma f=-\int_{\gamma^-}f$, donde $(\gamma^-)(t)=\gamma(-t)$, $t\in[-b,-a]$.
>- **(ii)** Probar que $\int_\gamma f(z)\,dz=\int_{\gamma+c}f(z-c)\,dz$, donde $c\in\mathbb C$ y $(\gamma+c)(t)=\gamma(t)+c$.

>[!exercise] Ejercicio 2
>Demostrar que $\gamma:[0,1]\to\mathbb C$ definida por $\gamma(t)=t+it\operatorname{sen}(1/t)$ para $t\ne0$, y $\gamma(0)=0$, no es un camino $C^1$ a trozos. Dar el bosquejo del camino.

>[!exercise] Ejercicio 3
>Sean $\gamma$ y $\sigma$ los polígonos $[1,i]$ y $[1,1+i,i]$, respectivamente. Expresar $\gamma$ y $\sigma$ como caminos y calcular $\int_\gamma f$ y $\int_\sigma f$, donde $f(z)=|z|^2$. ¿Se cumple en este caso la “independencia del camino”?

>[!exercise] Ejercicio 4
>Sean $n\in\mathbb Z$ y $\gamma:[0,2\pi]\to\mathbb C$ dada por $\gamma(t)=\exp(int)$. Demostrar que $\int_\gamma \frac1z\,dz=2\pi in$.

>[!exercise] Ejercicio 5
>Calcular $\int_\gamma z^n\,dz$, donde $n\in\mathbb Z$ y $\gamma:[0,2\pi]\to\mathbb C$, $\gamma(t)=e^{it}$.

>[!exercise] Ejercicio 6
>Demostrar que $$\int_0^{2\pi}\frac{e^{it}}{e^{it}-z}\,dt=2\pi,$$ para todo $z$ tal que $|z|<1$.

>[!exercise] Ejercicio 7
>Demostrar la Fórmula de Valor medio de Gauss. Sea $f$ analítica en $B(z_0,R)$. Entonces $$f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{it})\,dt,$$ para todo $0<r<R$.

>[!exercise] Ejercicio 8
>Calcular $\int_\gamma z^{-1/2}\,dz$ donde:
>- **(i)** $\gamma$ es la mitad superior del círculo unidad desde $1$ hasta $-1$.
>- **(ii)** $\gamma$ es la mitad inferior del círculo unidad desde $1$ hasta $-1$.

>[!exercise] Ejercicio 9
>Calcular $\int_\gamma(z^2-1)^{-1}\,dz$ cuando:
>- **(i)** $\gamma(t)=1+e^{it}$, $0\le t\le2\pi$.
>- **(ii)** $\gamma(t)=2e^{it}$, $-\pi\le t\le\pi$.

>[!exercise] Ejercicio 10
>Suponer que $f$ es continua en una región $G$. Probar que dos primitivas de $f$ en $G$ (si existen) difieren en una constante.

>[!exercise] Ejercicio 11
>Probar la siguiente fórmula de integración por partes: sean $f$ y $g$ funciones analíticas en $G$ y sea $\gamma$ una curva $C^1$ a trozos en $G$ de $a$ en $b$. Entonces $$\int_\gamma fg'=f(b)g(b)-f(a)g(a)-\int_\gamma f'g.$$

>[!exercise] Ejercicio 12
>Sea $\gamma$ una curva cerrada $C^1$ a trozos en un conjunto abierto $G$. Demostrar que para todo $a\notin G$ y para todo $n\ge2$, $$\int_\gamma(z-a)^{-n}\,dz=0.$$

>[!exercise] Ejercicio 13
>Sea $I(r)=\int_{\gamma_r}\frac{e^{iz}}z\,dz$, donde $\gamma_r:[0,\pi]\to\mathbb C$ está dada por $\gamma_r(t)=re^{it}$ para $r>0$. Probar que $$\lim_{r\to+\infty}I(r)=0.$$

>[!exercise] Ejercicio 14
>En cada uno de los siguientes casos dar la expansión de $f$ en series de potencias alrededor de $a$ y encontrar su radio de convergencia.
>- **(i)** $f(z)=\log z$, $a=i$.
>- **(ii)** $f(z)=\sqrt z$, $a=1$.

>[!exercise] Ejercicio 15
>Evaluar las siguientes integrales (con $n\ge0$ en el inciso **(d)**):
>- **(a)** $\int_\gamma\frac{e^{iz}}{z^2}\,dz$, $\gamma(t)=e^{it}$, $0\le t\le2\pi$.
>- **(b)** $\int_\gamma\frac{dz}{z-a}$, $\gamma(t)=a+re^{it}$, $0\le t\le2\pi$.
>- **(c)** $\int_\gamma\frac{\operatorname{sen}z}{z^3}\,dz$, $\gamma(t)=e^{it}$, $0\le t\le2\pi$.
>- **(d)** $\int_\gamma\frac{\log z}{z^n}\,dz$, $\gamma(t)=1+\frac12e^{it}$, $0\le t\le2\pi$.

>[!exercise] Ejercicio 16
>Evaluar las siguientes integrales ($0\le t\le2\pi$ y $n\in\mathbb N$):
>- **(a)** $\int_\gamma\frac{e^z-e^{-z}}{z^n}\,dz$, $\gamma(t)=e^{it}$.
>- **(b)** $\int_\gamma\frac{dz}{(z-\frac12)^n}$, $\gamma(t)=\frac12+e^{it}$.
>- **(c)** $\int_\gamma\frac{dz}{z^2+1}$, $\gamma(t)=2e^{it}$.
>- **(d)** $\int_\gamma\frac{\operatorname{sen}z}{z}\,dz$, $\gamma(t)=e^{it}$.

>[!exercise] Ejercicio 17
>Calcular $\int_\gamma\frac{z^2+1}{z(z^2+4)}\,dz$, donde $\gamma(t)=re^{it}$, $0\le t\le2\pi$, para $0<r<2$ y $2<r<\infty$.

>[!exercise] Ejercicio 18
>Sea $f$ una función entera y supongamos que existen una constante $M$, un $R>0$ y un entero $n\ge1$ tales que $|f(z)|\le M|z|^n$ para $|z|>R$. Demostrar que $f$ es un polinomio de grado $\le n$.

>[!exercise] Ejercicio 19
>Encontrar todas las funciones enteras $f$ tales que $f(x)=e^x$ para todo $x\in\mathbb R$.

>[!exercise] Ejercicio 20
>Probar que:
>- **(i)** $e^{z+a}=e^ze^a$.
>- **(ii)** $\cos(a+b)=\cos(a)\cos(b)-\operatorname{sen}(a)\operatorname{sen}(b)$.

>[!exercise] Ejercicio 21
>Sean $G$ una región y $f,g:G\to\mathbb C$ funciones analíticas tales que $f(z)g(z)=0$ para todo $z\in G$. Probar que $f\equiv0$ o $g\equiv0$.

>[!exercise] Ejercicio 22
>Demostrar que si $f$ y $g$ son funciones analíticas sobre una región $G$ tales que $\overline f\,g$ es analítica, entonces o $f$ es constante o $g\equiv0$.

>[!exercise] Ejercicio 23
>Sean $G$ una región, $a\in G$ y $f:G\to\mathbb C$ analítica tal que $|f(a)|\le|f(z)|$ para todo $z\in G$. Demostrar que $f(a)=0$ o $f$ es constante.

>[!exercise] Ejercicio 24
>Sea $U:\mathbb C\to\mathbb R$ una función armónica tal que $U(z)\ge0$ para todo $z\in\mathbb C$. Probar que $U$ es constante.

>[!exercise] Ejercicio 25
>Sea $f$ una función analítica no constante en una región $G$ tal que $\{u\in\mathbb C:|u|\le1\}\subset G$ y $|f(z)|=1$ para todo $z\in\{u\in\mathbb C:|u|=1\}$. Probar que $f$ tiene al menos un cero en $\{u\in\mathbb C:|u|<1\}$.

>[!exercise] Ejercicio 26
>Probar que si $f:\mathbb C\to\mathbb C$ es una función continua tal que $f$ es analítica en $\mathbb C-\{x\in\mathbb R:|x|\le1\}$, entonces $f$ es entera.
