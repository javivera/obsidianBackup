## Ceros de una función analítica

>[!Proposition] Factorización en un cero
>Sea $f$ analítica cerca de $a$ y supongamos $f(a)=0$. Si $f$ no es idénticamente nula, existe un único $m\geq1$ y una función analítica $g$ con $g(a)\neq0$ tales que
>$$f(z)=(z-a)^mg(z).$$
>El entero $m$ es la **multiplicidad** del cero.

>[!Definition] Función entera
>Una función $f:\mathbb{C}\to\mathbb{C}$ analítica en todo el plano se llama **entera**.

>[!Theorem] Teorema de Liouville
>Toda función entera y acotada es constante.
>
>>[!Proof]-
>>1. Si $|f(z)|\leq M$, la estimación de Cauchy sobre una circunferencia de radio $R$ da $$|f'(a)|\leq\frac{M}{R}.$$
>>2. Haciendo $R\to\infty$ resulta $f'(a)=0$ para todo $a$.
>>3. Por lo tanto, $f$ es constante.

>[!Theorem] Teorema fundamental del álgebra
>Todo polinomio complejo no constante tiene al menos una raíz en $\mathbb{C}$.
>
>>[!Proof]-
>>1. Si $P$ no tuviera ceros, $1/P$ sería entera.
>>2. Como $|P(z)|\to\infty$ cuando $|z|\to\infty$, la función $1/P$ tiende a cero fuera de un disco y está acotada dentro de él.
>>3. Por el teorema de Liouville, $1/P$ sería constante, lo cual es una contradicción.

>[!Corollary] Factorización de polinomios
>Todo polinomio de grado $n$ se factoriza como
>$$P(z)=a_n(z-z_1)\cdots(z-z_n),$$
>contando raíces con multiplicidad.

## Teorema de identidad

>[!Definition] Punto de acumulación
>Un punto $z_0$ es de acumulación de $A\subseteq\mathbb{C}$ si todo entorno de $z_0$ contiene un punto de $A$ distinto de $z_0$.

>[!Theorem] Principio de identidad
>Sean $f,g$ analíticas en una región $G$. Si
>$$\{z\in G:f(z)=g(z)\}$$
>tiene un punto de acumulación en $G$, entonces $f=g$ en todo $G$.
>
>>[!Proof]- Idea
>>1. Se aplica la factorización local a $f-g$.
>>2. Un cero no aislado obliga a que todos los coeficientes de Taylor sean nulos.
>>3. El conjunto donde todas las derivadas se anulan es abierto y cerrado en la región, por lo que coincide con $G$.

>[!Corollary] Ceros aislados
>Si $f$ no es idénticamente nula, cada cero de $f$ es aislado y tiene multiplicidad finita.

## Principio del módulo máximo

>[!Theorem] Teorema del módulo máximo
>Sea $f$ analítica en una región $G$. Si existe $a\in G$ tal que
>$$|f(z)|\leq|f(a)|\qquad(z\in G),$$
>entonces $f$ es constante.
>
>>[!Proof]- Idea
>>1. La propiedad del valor medio en cada circunferencia centrada en $a$ da $$f(a)=\frac1{2\pi}\int_0^{2\pi}f(a+re^{it})\,dt.$$
>>2. La igualdad en la desigualdad triangular obliga a que $f$ tenga módulo y argumento constantes sobre el disco.
>>3. El principio de identidad extiende la constancia a toda la región.

>[!Corollary] Mínimo para funciones sin ceros
>Si $f$ no se anula, un mínimo interior de $|f|$ implica que $f$ es constante, aplicando el teorema a $1/f$.

## Índice de una curva

>[!Definition] Índice o número de vueltas
>Sea $\gamma$ una curva cerrada rectificable y $a\notin[\gamma]$. Se define
>$$n(\gamma,a)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}.$$

>[!Proposition] El índice es entero
>Para todo $a\notin[\gamma]$,
>$$n(\gamma,a)\in\mathbb{Z}.$$

>[!Proposition] Propiedades del índice
>1. Cambio de orientación:
>   $$n(-\gamma,a)=-n(\gamma,a).$$
>2. Aditividad:
>   $$n(\gamma_1+gamma_2,a)=n(\gamma_1,a)+n(\gamma_2,a).$$
>3. La función $a\mapsto n(\gamma,a)$ es constante en cada componente conexa de $\mathbb{C}\setminus[\gamma]$.
>4. En la componente no acotada,
>   $$n(\gamma,a)=0.$$

>[!Example] Circunferencia
>Si $\gamma(t)=a_0+re^{it}$, $0\leq t\leq2\pi$, entonces
>$$n(\gamma,a)=
>\begin{cases}
>1,&|a-a_0|<r,\\
>0,&|a-a_0|>r.
>\end{cases}$$

## Fórmula general de Cauchy

>[!Theorem] Fórmula integral para ciclos
>Sea $G$ abierto, $f:G\to\mathbb{C}$ analítica y sean $\gamma_1,\dots,\gamma_m$ curvas cerradas rectificables en $G$ tales que
>$$\sum_{j=1}^{m}n(\gamma_j,w)=0\qquad(w\notin G).$$
>Entonces, para $a\in G$ fuera de las trazas,
>$$\sum_{j=1}^{m}\int_{\gamma_j}\frac{f(z)}{z-a}\,dz
>=2\pi i\,f(a)\sum_{j=1}^{m}n(\gamma_j,a).$$

>[!Corollary] Teorema integral de Cauchy
>Bajo las mismas hipótesis,
>$$\sum_{j=1}^{m}\int_{\gamma_j}f(z)\,dz=0.$$

>[!Theorem] Fórmula para derivadas
>Para $k\geq0$,
>$$\sum_{j=1}^{m}\int_{\gamma_j}\frac{f(z)}{(z-a)^{k+1}}\,dz
>=\frac{2\pi i}{k!}f^{(k)}(a)
>\sum_{j=1}^{m}n(\gamma_j,a).$$

## Homotopía

>[!Definition] Curvas homotópicas
>Dos curvas cerradas $\gamma_0,\gamma_1:[0,1]\to G$ son homotópicas en $G$ si existe una función continua
>$$H:[0,1]\times[0,1]\to G$$
>tal que
>$$H(s,0)=\gamma_0(s),\qquad H(s,1)=\gamma_1(s),$$
>$$H(0,t)=H(1,t).$$
>Se escribe $\gamma_0\simeq\gamma_1$.

>[!Theorem] Invariancia homotópica de la integral
>Si $\gamma_0\simeq\gamma_1$ en $G$ y $f$ es analítica en $G$, entonces
>$$\int_{\gamma_0}f(z)\,dz=\int_{\gamma_1}f(z)\,dz.$$

>[!Definition] Curva homotópica a cero
>Una curva cerrada es homotópica a cero si es homotópica a una curva constante.

>[!Theorem] Cauchy para curvas nulo-homotópicas
>Si $f$ es analítica en $G$ y $\gamma$ es cerrada, rectificable y homotópica a cero en $G$, entonces
>$$\int_\gamma f(z)\,dz=0.$$

>[!Definition] Homotopía con extremos fijos
>Dos curvas $\gamma_0,gamma_1$ con los mismos extremos $a,b$ son homotópicas con extremos fijos si existe $H$ como antes y además
>$$H(0,t)=a,qquad H(1,t)=b.$$

>[!Definition] Región simplemente conexa
>Una región $G$ es simplemente conexa si toda curva cerrada en $G$ es homotópica a cero.

>[!Theorem] Cauchy en regiones simplemente conexas
>Si $G$ es simplemente conexa y $f:G\to\mathbb{C}$ es analítica, entonces
>$$\int_\gamma f(z)\,dz=0$$
>para toda curva cerrada rectificable $\gamma$ en $G$.

>[!Corollary] Existencia de primitivas
>En una región simplemente conexa, toda función analítica tiene primitiva. Fijado $z_0\in G$, puede definirse
>$$F(z)=\int_{z_0}^{z}f(w)\,dw,$$
>y la independencia del camino implica $F'=f$.
