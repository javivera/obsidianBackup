## Integración compleja

>[!Definition] Curva diferenciable por secciones
>Una curva $\gamma:[a,b]\to\mathbb{C}$ es diferenciable por secciones si existe una partición
>$$a=t_0<t_1<\cdots<t_n=b$$
>tal que cada restricción $\gamma|_{[t_{j-1},t_j]}$ es diferenciable.

>[!Definition] Variación acotada
>Para una partición $P=\{a=t_0<\cdots<t_n=b\}$ se define
>$$v(\gamma;P)=\sum_{j=1}^{n}|\gamma(t_j)-\gamma(t_{j-1})|.$$
>La variación total es
>$$V(\gamma)=\sup_Pv(\gamma;P).$$
>La curva es de variación acotada si $V(\gamma)<\infty$.

>[!Theorem] Longitud de una curva diferenciable por secciones
>Toda curva diferenciable por secciones es de variación acotada y
>$$V(\gamma)=\int_a^b|\gamma'(t)|\,dt.$$

>[!Definition] Curva rectificable
>Una curva continua de variación acotada se llama **rectificable**. Su longitud es $V(\gamma)$.

>[!Definition] Camino y traza
>Una curva continua se llama camino. Su traza es
>$$[\gamma]=\{\gamma(t):t\in[a,b]\}.$$

## Integral de línea

>[!Definition] Integral sobre una curva
>Si $f$ es continua sobre la traza de una curva diferenciable por secciones $\gamma$, se define
>$$\int_\gamma f(z)\,dz:=\int_a^bf(\gamma(t))\gamma'(t)\,dt.$$
>Para curvas rectificables generales se obtiene la misma integral mediante sumas de Riemann-Stieltjes.

>[!Proposition] Propiedades
>Para funciones continuas $f,g$ y escalares $\alpha,\beta$:
>$$\int_\gamma(\alpha f+\beta g),dz
>=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz.$$
>Si $-\gamma$ denota la curva con orientación inversa,
>$$\int_{-\gamma}f\,dz=-\int_\gamma f\,dz.$$
>Si $\gamma_1+\gamma_2$ es la concatenación,
>$$\int_{\gamma_1+\gamma_2}f\,dz
>=\int_{\gamma_1}f\,dz+\int_{\gamma_2}f\,dz.$$
>La integral es invariante por reparametrizaciones crecientes.

>[!Theorem] Aproximación poligonal
>Si $G$ es abierto, $\gamma:[a,b]\to G$ es rectificable y $f:G\to\mathbb{C}$ es continua, para todo $\varepsilon>0$ existe una curva poligonal $\Gamma$ con los mismos extremos y contenida en $G$ tal que
>$$\left|\int_\gamma f(z),dz-\int_\Gamma f(z),dz\right|<\varepsilon.$$

>[!Theorem] Teorema fundamental del cálculo para integrales de línea
>Si $F$ es una primitiva de $f$ en $G$, es decir, $F'=f$, y $\gamma$ es una curva rectificable en $G$ desde $\alpha$ hasta $\beta$, entonces
>$$\int_\gamma f(z),dz=F(\beta)-F(\alpha).$$
>En particular, la integral no depende del camino.

>[!Corollary] Integral sobre una curva cerrada
>Si $f$ tiene primitiva en $G$ y $\gamma$ es cerrada,
>$$\int_\gamma f(z),dz=0.$$

>[!Proposition] Estimación $ML$
>Si $\gamma$ es rectificable y $f$ es continua sobre su traza,
>$$\left|\int_\gamma f(z),dz\right|
>\leq\int_\gamma|f(z)|,|dz|
>\leq L(\gamma)\sup_{z\in[\gamma]}|f(z)|.$$

## Teorema integral de Cauchy en un disco

>[!Theorem] Versión para una circunferencia
>Sea $f:G\to\mathbb{C}$ analítica y supongamos $\overline{B(a,r)}\subseteq G$. Para
>$$\gamma(t)=a+re^{it},\qquad0\leq t\leq2\pi,$$
>se tiene
>$$\int_\gamma f(z)\,dz=0.$$

>[!Theorem] Fórmula integral de Cauchy
>Bajo las mismas hipótesis, si $|z-a|<r$, entonces
>$$f(z)=\frac{1}{2\pi i}\int_\gamma\frac{f(w)}{w-z}\,dw.$$

>[!Corollary] Desarrollo en serie de potencias
>Si $f$ es analítica en $B(a,R)$, entonces para $|z-a|<R$,
>$$f(z)=\sum_{n=0}^{\infty}c_n(z-a)^n,$$
>donde, para cualquier $r$ con $|z-a|<r<R$,
>$$c_n=\frac{1}{2\pi i}\int_{|w-a|=r}\frac{f(w)}{(w-a)^{n+1}}\,dw.$$

>[!Corollary] Analítica implica infinitamente diferenciable
>Toda función analítica es infinitamente diferenciable y
>$$f^{(n)}(a)=\frac{n!}{2\pi i}
>\int_{|w-a|=r}\frac{f(w)}{(w-a)^{n+1}}\,dw.$$

>[!Theorem] Estimación de Cauchy
>Si $|f(w)|\leq M$ sobre $|w-a|=r$, entonces
>$$|f^{(n)}(a)|\leq\frac{n!M}{r^n}.$$

>[!Example] Integral de potencias
>Para la circunferencia unidad orientada positivamente,
>$$\int_{|z|=1}z^n\,dz=
>\begin{cases}
>2\pi i,&n=-1,\\
>0,&n\neq-1.
>\end{cases}$$

>[!Proposition] Propiedad del valor medio
>Si $f$ es analítica en un entorno de $\overline{B(a,r)}$, entonces
>$$f(a)=\frac1{2\pi}\int_0^{2\pi}f(a+re^{it})\,dt.$$

>[!Theorem] Teorema de Morera
>Sea $f:G\to\mathbb{C}$ continua. Si
>$$\int_{\partial T}f(z)\,dz=0$$
>para todo triángulo $T$ cuya clausura está contenida en $G$, entonces $f$ es analítica.
>
>>[!Proof]- Idea
>>1. En cada disco contenido en $G$, se fija $z_0$ y se define $$F(z)=\int_{[z_0,z]}f(w)\,dw.$$
>>2. La hipótesis triangular muestra que la integral es independiente del camino poligonal.
>>3. Luego $$\frac{F(z+h)-F(z)}h=\int_0^1f(z+th)\,dt\longrightarrow f(z),$$ de modo que $F'=f$ y $f$ es analítica.

>[!Remark] Regla de Leibniz
>Si $\Phi(s,t)$ y $\partial\Phi/\partial t$ son continuas, entonces
>$$\frac{d}{dt}\int_a^b\Phi(s,t)\,ds
>=\int_a^b\frac{\partial\Phi}{\partial t}(s,t)\,ds.$$
