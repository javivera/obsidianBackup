# Funciones Analíticas — Práctico 6

**Notación:** $D:=\{z\in\mathbb C:|z|<1\}$ el disco (abierto) unidad.

>[!exercise] Ejercicio 1
>Sea $f$ analítica en $\overline D$ y supongamos que $|f(z)|<1$ para $|z|=1$. Encontrar el número de soluciones (contando multiplicidades) de la ecuación $f(z)=z^n$ donde $n\in\mathbb N$.

>[!exercise] Ejercicio 2
>Sea $f$ una función meromorfa en $G$ y definimos $\tilde f:G\to\mathbb C_\infty$ por $\tilde f(z)=\infty$ si $z$ es un polo de $f$ y $\tilde f(z)=f(z)$ si $z$ no es polo de $f$. Probar que $\tilde f$ es continua.

>[!exercise] Ejercicio 3
>Sea $G$ región de $\mathbb C$. Llamemos $H(G)$ y $M(G)$ a las funciones *holomorfas* (analíticas) y *meromorfas* en $G$, respectivamente. Probar que $H(G)$ es dominio de integridad y $M(G)$ es un cuerpo. (**Nota:** se puede probar que $M(G)$ es precisamente el cuerpo de fracciones del anillo $H(G)$, es decir, toda función meromorfa es cociente de dos analíticas).

>[!exercise] Ejercicio 4
>Sea $\lambda\in\mathbb R$, con $\lambda>1$. Probar que la ecuación $\lambda-z-e^{-z}=0$ tiene exactamente una solución en el semiplano $\{z\in\mathbb C:\operatorname{Re}z>0\}$. Mostrar que esta solución es real. ¿Cuál es el comportamiento de la solución cuando $\lambda\to1$?

>[!exercise] Ejercicio 5
>Sea $f$ analítica en un entorno de $\overline D$ y supongamos que $|f(z)|<1$ para $|z|=1$. Mostrar que existe un único $z$ con $|z|<1$ y $f(z)=z$. ¿Qué se puede decir si $|f(z)|\le1$ para $|z|=1$?

>[!exercise] Ejercicio 6
>En cada uno de los siguientes casos determine el número de ceros del polinomio $f$ en el conjunto $G$.
>- **(a)** $f(z)=z^6-5z^4+z^3-2z$, $G=D$.
>- **(b)** $f(z)=2z^4-2z^3+2z^2-2z+9$, $G=D$.
>- **(c)** $f(z)=2z^5-6z^2+z+1$, $G=\{z\in\mathbb C:1\le|z|<2\}$.

>[!exercise] Ejercicio 7
>Sea $f$ analítica, no constante en un abierto acotado $G$ tal que $f$ es continua en $\overline G$. Probar que $f$ tiene un cero en $G$ o toma su valor mínimo en $\partial G$, el borde de $G$.

>[!exercise] Ejercicio 8
>Sea $G$ una región acotada y sea $f$ una función analítica en $G$ y continua en $\overline G$. Probar que si existe una constante $c\ge0$ tal que $|f(z)|=c$ para todo $z$ en la frontera de $G$, entonces o bien $f$ es una función constante o bien $f$ tiene un cero en $G$.

>[!exercise] Ejercicio 9
>Sea $R>0$ y sean $f$ y $g$ funciones analíticas en $\overline{B(0,R)}$ tales que $|f(z)|=|g(z)|$ para $|z|=R$. Probar que si $f$ y $g$ no se anulan en $B(0,R)$, entonces existe una constante $\lambda$, con $|\lambda|=1$, tal que $f=\lambda g$.

>[!exercise] Ejercicio 10
>Sea $f$ función analítica no constante tal que $|f(z)|\le1$ para $|z|<1$. Considerando la función $g:D\to D$ definida por $$g(z)=\frac{f(z)-a}{1-\bar a f(z)},$$ donde $a=f(0)$, probar que $$\frac{|f(0)|-|z|}{1+|f(0)|\,|z|}\le|f(z)|\le\frac{|f(0)|+|z|}{1-|f(0)|\,|z|},\qquad\text{para }|z|<1.$$

>[!exercise] Ejercicio 11
>¿Existe una función $f:D\to D$ analítica tal que $f(\frac12)=\frac34$ y $f'(\frac12)=\frac23$?

>[!exercise] Ejercicio 12
>Supongamos que $f$ es una función analítica en una región que contiene a $\overline D$ y que $|f(z)|=1$ para $|z|=1$. Encontrar una fórmula para $f$. (Ayuda: considerar primero el caso en que $f$ no tiene ceros en $D$.)

>[!exercise] Ejercicio 13
>Sea $f$ analítica en una región que contiene a $\overline D$. Supongamos que $|f(z)|=1$ si $|z|=1$, $f$ tiene un cero en $\frac14(1+i)$ y un cero doble en $z=\frac12$. ¿Puede $f(0)$ valer $\frac12$?
