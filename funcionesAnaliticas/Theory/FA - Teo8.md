# Teo 8 — Homotopía, primitivas y recuento de ceros (01/10/2026)

> [!info] Fuente y criterio de transcripción
> Clase transcripta de las 6 páginas de `Notes_261001_155305.pdf`, enviado por Franco por WhatsApp el 01/10/2026. Se conserva el orden del manuscrito, se desarrollan las cuentas abreviadas y se señalan las precisiones del enunciado de recuento de ceros. Los ejercicios propuestos quedan como ejercicios.

## Curvas homotópicas a cero

>[!Definition] Curva homotópica a cero
>Una curva cerrada rectificable $\gamma$ en un abierto $G$ es **homotópica a cero en $G$**, y se escribe $\gamma\simeq_G0$, si es homotópica en $G$ a una curva constante.

^8a0011

>[!Theorem] Teorema de Cauchy — segunda versión
>Sean $G\subseteq\mathbb C$ abierto, $f:G\to\mathbb C$ analítica y $\gamma$ una curva cerrada rectificable en $G$. Si $\gamma\simeq_G0$, entonces $$\int_\gamma f(z)\,dz=0.$$
>>[!Proof]-
>>1. Por [[FA - Teo8#^8a0011|homotopía a cero]], $\gamma$ es homotópica a una curva constante $c$. Aplicando [[FA - Teo7#^0ad31e|invariancia por homotopía]], $$\int_\gamma f(z)\,dz=\int_c f(z)\,dz=0,$$ pues la integral sobre una curva constante es nula.

^8a0012

>[!Corollary] Índice de una curva homotópica a cero
>Si $\gamma$ es una curva cerrada rectificable en $G$ y $\gamma\simeq_G0$, entonces $$n(\gamma,w)=0\qquad\text{para todo }w\in\mathbb C\setminus G.$$
>>[!Proof]-
>>1. Fijamos $w\notin G$. La función $z\mapsto1/(z-w)$ es analítica en $G$, porque su denominador no se anula allí. Por [[FA - Teo8#^8a0012|Cauchy v2]] y [[FA - Teo6#^1e9a3c|índice de una curva]], $$0=\int_\gamma\frac{dz}{z-w}=2\pi i\,n(\gamma,w).$$ Como $2\pi i\neq0$, resulta $n(\gamma,w)=0$.

^8a0013

>[!exercise] El recíproco no vale
>Encontrar un abierto $G$ y una curva cerrada rectificable $\gamma$ en $G$ tales que $n(\gamma,w)=0$ para todo $w\in\mathbb C\setminus G$, pero $\gamma\not\simeq_G0$.

>[!Proposition] Invariancia del índice por homotopía
>Si $\gamma_0,\gamma_1$ son curvas cerradas rectificables en $G$ y $\gamma_0\simeq_G\gamma_1$, entonces $$n(\gamma_0,w)=n(\gamma_1,w)\qquad(w\in\mathbb C\setminus G).$$
>>[!Proof]-
>>1. Para $w\notin G$, aplicamos [[FA - Teo7#^0ad31e|invariancia por homotopía]] a $z\mapsto1/(z-w)$ y luego [[FA - Teo6#^1e9a3c|índice de una curva]]: $$n(\gamma_0,w)=\frac1{2\pi i}\int_{\gamma_0}\frac{dz}{z-w}=\frac1{2\pi i}\int_{\gamma_1}\frac{dz}{z-w}=n(\gamma_1,w).$$

^8a0014

>[!example] Circunferencia en sentidos opuestos
>En $G=\mathbb C\setminus\{0\}$, las curvas $\gamma_0(t)=e^{2\pi it}$ y $\gamma_1(t)=e^{-2\pi it}$, $0\leq t\leq1$, no son homotópicas.
>>[!Proof]-
>>1. Parametrizando ambas integrales, $$n(\gamma_0,0)=\frac1{2\pi i}\int_0^1\frac{2\pi i e^{2\pi it}}{e^{2\pi it}}\,dt=1,\qquad n(\gamma_1,0)=\frac1{2\pi i}\int_0^1\frac{-2\pi i e^{-2\pi it}}{e^{-2\pi it}}\,dt=-1.$$
>>2. Como $0\notin G$, la igualdad exigida por [[FA - Teo8#^8a0014|invariancia del índice]] no se cumple. Por tanto, $\gamma_0\not\simeq_G\gamma_1$.

## Homotopía con extremos fijos

>[!Definition] Homotopía con extremos fijos
>Sean $G$ una región y $\gamma_0,\gamma_1:[0,1]\to G$ curvas rectificables tales que $\gamma_0(0)=\gamma_1(0)=a$ y $\gamma_0(1)=\gamma_1(1)=b$. Son **homotópicas con extremos fijos** si existe una aplicación continua $\Gamma:[0,1]^2\to G$ tal que $$\Gamma(s,0)=\gamma_0(s),\quad\Gamma(s,1)=\gamma_1(s)\qquad(0\leq s\leq1),$$ y $$\Gamma(0,t)=a,\quad\Gamma(1,t)=b\qquad(0\leq t\leq1).$$ Escribimos $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$.

^8a0021

>[!remark] Notación de concatenación
>Si el extremo final de $\alpha$ coincide con el inicial de $\beta$, $\alpha+\beta$ denota recorrer primero $\alpha$ y luego $\beta$, usando la primera y la segunda mitad del intervalo de parámetros. La curva $-\gamma$ es la curva inversa, $(-\gamma)(s)=\gamma(1-s)$; por tanto, $\gamma-\gamma=\gamma+(-\gamma)$.

>[!exercise] Propiedades de la homotopía con extremos fijos
>- **(a)** Probar que $\simeq_G^{\mathrm{EF}}$ es una relación de equivalencia.
>- **(b)** Si $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$ y $\eta$ comienza en el extremo final común, probar que $\gamma_0+\eta\simeq_G^{\mathrm{EF}}\gamma_1+\eta$.
>- **(c)** Probar que $\gamma-\gamma\simeq_G^{\mathrm{EF}}c_{\gamma(0)}$, donde $c_{\gamma(0)}$ es la curva constante en $\gamma(0)$.
>
>**Indicaciones del manuscrito.** Para (b), si $\Gamma$ realiza la homotopía inicial, usar $$\widetilde\Gamma(s,t)=\begin{cases}\Gamma(2s,t),&0\leq s\leq\frac12,\\\eta(2s-1),&\frac12\leq s\leq1.\end{cases}$$ Para (c), recorrer un tramo cada vez más corto de $\gamma$ y volver por el mismo tramo; una parametrización explícita es $$H(s,t)=\begin{cases}\gamma(2s(1-t)),&0\leq s\leq\frac12,\\\gamma(2(1-s)(1-t)),&\frac12\leq s\leq1.\end{cases}$$

^8a0022

>[!Theorem] Independencia de la trayectoria bajo homotopía con extremos fijos
>Sean $G$ una región, $f:G\to\mathbb C$ analítica y $\gamma_0,\gamma_1$ curvas rectificables en $G$. Si $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$, entonces $$\int_{\gamma_0}f(z)\,dz=\int_{\gamma_1}f(z)\,dz.$$
>>[!Proof]-
>>1. Usando (b) y (c) de [[FA - Teo8#^8a0022|propiedades de homotopía con extremos fijos]], $$\gamma_0-\gamma_1\simeq_G^{\mathrm{EF}}\gamma_1-\gamma_1\simeq_G^{\mathrm{EF}}c_{\gamma_1(0)}.$$ Al olvidar la condición de extremos fijos, esta es también una homotopía de curvas cerradas; luego $\gamma_0-\gamma_1\simeq_G0$.
>>2. Por [[FA - Teo8#^8a0012|Cauchy v2]], $$0=\int_{\gamma_0-\gamma_1}f(z)\,dz=\int_{\gamma_0}f(z)\,dz-\int_{\gamma_1}f(z)\,dz.$$

^8a0023

## Regiones simplemente conexas

>[!Definition] Simple conexión
>Un abierto $G\subseteq\mathbb C$ es **simplemente conexo** si es conexo y toda curva cerrada en $G$ es homotópica a cero en $G$.

^8a0031

>[!Theorem] Teorema de Cauchy — cuarta versión
>Si $G$ es una región simplemente conexa y $f:G\to\mathbb C$ es analítica, entonces $$\int_\gamma f(z)\,dz=0$$ para toda curva cerrada rectificable $\gamma$ en $G$.
>>[!Proof]-
>>1. Aplicamos [[FA - Teo8#^8a0031|simple conexión]] a $\gamma$ y luego [[FA - Teo8#^8a0012|Cauchy v2]].

^8a0032

>[!Corollary] Existencia de primitivas
>Si $G$ es una región simplemente conexa y $f:G\to\mathbb C$ es analítica, existe una función analítica $F:G\to\mathbb C$ tal que $F'=f$.
>>[!Proof]-
>>1. Fijamos $a\in G$. Como $G$ es abierto y conexo, sus puntos pueden unirse por caminos poligonales contenidos en $G$; en particular, para cada $z\in G$ podemos elegir una curva rectificable $\gamma$ de $a$ a $z$. Definimos $$F(z)=\int_\gamma f(w)\,dw.$$
>>2. La definición no depende de la curva elegida: si $\gamma_0,\gamma_1$ van de $a$ a $z$, la curva $\gamma_0-\gamma_1$ es cerrada y rectificable en $G$. Por [[FA - Teo8#^8a0032|Cauchy v4]], $$0=\int_{\gamma_0-\gamma_1}f(w)\,dw=\int_{\gamma_0}f(w)\,dw-\int_{\gamma_1}f(w)\,dw.$$
>>3. Fijamos $z_0\in G$ y $r>0$ tal que $B(z_0,r)\subseteq G$. Para $z\in B(z_0,r)$, podemos calcular $F(z)$ usando una curva de $a$ a $z_0$ seguida del segmento $[z_0,z]$. Por tanto, $$F(z)-F(z_0)=\int_{[z_0,z]}f(w)\,dw.$$
>>4. Parametrizando el segmento por $w(t)=z_0+t(z-z_0)$, obtenemos $$\frac{F(z)-F(z_0)}{z-z_0}-f(z_0)=\int_0^1\bigl(f(z_0+t(z-z_0))-f(z_0)\bigr)\,dt.$$
>>5. Dado $\varepsilon>0$, la continuidad de $f$ en $z_0$ permite elegir $0<\delta<r$ tal que $|w-z_0|<\delta$ implique $|f(w)-f(z_0)|<\varepsilon$. Si $0<|z-z_0|<\delta$, todos los puntos del segmento satisfacen esa condición, y $$\left|\frac{F(z)-F(z_0)}{z-z_0}-f(z_0)\right|\leq\int_0^1|f(z_0+t(z-z_0))-f(z_0)|\,dt<\varepsilon.$$
>>6. Resulta $F'(z_0)=f(z_0)$. Como $z_0$ era arbitrario, $F$ es analítica en $G$ y $F'=f$.

^8a0033

>[!Corollary] Logaritmo analítico de una función sin ceros
>Sean $G$ una región simplemente conexa y $f:G\to\mathbb C$ analítica tal que $f(z)\neq0$ para todo $z\in G$. Existe una función analítica $g:G\to\mathbb C$ tal que $$f(z)=e^{g(z)}\qquad(z\in G).$$ Además, si $z_0\in G$ y $w_0\in\mathbb C$ satisfacen $f(z_0)=e^{w_0}$, podemos elegir $g$ de modo que $g(z_0)=w_0$.
>>[!Proof]-
>>1. Como $f$ no se anula, $f'/f$ es analítica en $G$. Por [[FA - Teo8#^8a0033|existencia de primitivas]], existe $g_1:G\to\mathbb C$ analítica tal que $g_1'=f'/f$.
>>2. Sea $h=e^{g_1}$. Esta función es analítica, no se anula y satisface $h'=g_1'h$. Entonces $$\left(\frac f h\right)'=\frac{f'h-fh'}{h^2}=\frac{f'-fg_1'}h=\frac{f'-f(f'/f)}h=0.$$
>>3. Por [[FA - Teo2#^bb0732|derivada nula implica constante]], $f/h=c$ para alguna constante $c\neq0$. Elegimos $\alpha\in\mathbb C$ con $e^\alpha=c$. Así, $$f=ch=e^\alpha e^{g_1}=e^{g_1+\alpha}.$$
>>4. Si se prescriben $z_0,w_0$, entonces $e^{w_0-g_1(z_0)-\alpha}=1$. Escribiendo $w_0-g_1(z_0)-\alpha=2k\pi i$ para algún $k\in\mathbb Z$, tomamos $$g(z)=g_1(z)+\alpha+2k\pi i.$$ Se cumple $e^g=f$ y $g(z_0)=w_0$.

^8a0034

## Recuento de ceros de funciones analíticas

>[!Definition] Multiplicidad de un cero — recordatorio
>Un punto $a\in G$ es un cero de multiplicidad $m\geq1$ de una función analítica $f$ si, en un entorno de $a$, $$f(z)=(z-a)^m g(z),$$ donde $g$ es analítica y $g(a)\neq0$.

^8a0041

>[!Proposition] Factorización y derivada logarítmica
>Sean $a_1,\ldots,a_N$ ceros distintos de $f$, de multiplicidades $m_1,\ldots,m_N$. Al retirar esos factores se obtiene una función analítica $g$ en $G$ tal que $$f(z)=\prod_{j=1}^N(z-a_j)^{m_j}g(z),\qquad g(a_j)\neq0.$$
>En los puntos donde $f(z)\neq0$, $$\frac{f'(z)}{f(z)}=\sum_{j=1}^N\frac{m_j}{z-a_j}+\frac{g'(z)}{g(z)}.\qquad (*)$$
>>[!Proof]-
>>1. Fuera de los $a_j$, definimos $g(z)=f(z)/\prod_{j=1}^N(z-a_j)^{m_j}$. Cerca de cada $a_j$, la factorización de [[FA - Teo8#^8a0041|multiplicidad de un cero]] cancela el factor correspondiente, y los demás factores no se anulan allí. Así $g$ se prolonga analíticamente a $a_j$, con $g(a_j)\neq0$.
>>2. Aplicando la regla del producto, $$f'(z)=\sum_{j=1}^N m_j(z-a_j)^{m_j-1}\prod_{\ell\neq j}(z-a_\ell)^{m_\ell}g(z)+\prod_{j=1}^N(z-a_j)^{m_j}g'(z).$$ En los puntos donde $f(z)\neq0$, dividir esta igualdad por $f(z)$ da $(*)$.

^8a0042

>[!Theorem] Recuento de ceros mediante la derivada logarítmica
>Sean $G$ una región y $f:G\to\mathbb C$ analítica, no idénticamente nula, cuyos ceros en $G$ forman una lista finita $a_1,\ldots,a_n$, repetidos de acuerdo con su multiplicidad. Sea $\gamma$ una curva cerrada rectificable en $G$ que no pasa por ningún cero de $f$. Si $$n(\gamma,w)=0\qquad(w\in\mathbb C\setminus G),$$ entonces $$\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz=\sum_{k=1}^n n(\gamma,a_k).$$ En particular, la fórmula vale si $\gamma\simeq_G0$.
>>[!Proof]-
>>1. Agrupamos los ceros distintos como $b_1,\ldots,b_N$, con multiplicidades $m_1,\ldots,m_N$. Por [[FA - Teo8#^8a0042|factorización y derivada logarítmica]], $$\frac{f'}f=\sum_{j=1}^N\frac{m_j}{z-b_j}+\frac{g'}g.$$ Como hemos retirado todos los ceros de $f$ en $G$, la función $g$ no se anula en $G$; por tanto, $g'/g$ es analítica allí.
>>2. Por [[FA - Teo7#^c9f031|Cauchy v1]] aplicado a una sola curva, $$\int_\gamma\frac{g'(z)}{g(z)}\,dz=0.$$ Si se usa la hipótesis más fuerte $\gamma\simeq_G0$, también puede aplicarse directamente [[FA - Teo8#^8a0012|Cauchy v2]], como en el manuscrito.
>>3. Integramos la identidad y aplicamos [[FA - Teo6#^1e9a3c|índice de una curva]]: $$\begin{aligned}\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz&=\sum_{j=1}^N\frac{m_j}{2\pi i}\int_\gamma\frac{dz}{z-b_j}+\frac1{2\pi i}\int_\gamma\frac{g'(z)}{g(z)}\,dz\\&=\sum_{j=1}^Nm_jn(\gamma,b_j)\\&=\sum_{k=1}^nn(\gamma,a_k).\end{aligned}$$

^8a0043

>[!warning] Precisiones sobre el enunciado manuscrito
>En la página 5 se escribe $\gamma\simeq0$ y, entre paréntesis, $n(\gamma,w)=0$ para $w\notin G$. No son condiciones equivalentes: la primera implica la segunda por [[FA - Teo8#^8a0013|índice de una curva homotópica a cero]], pero el recíproco no vale, como se advierte en la página 1. El recuento de ceros es válido bajo la condición más débil de índice nulo fuera de $G$.
>La prueba manuscrita retira una lista finita de ceros y aplica Cauchy a $g'/g$. Para que esa función sea analítica en todo $G$, la lista debe contener todos los ceros en $G$; esta hipótesis se hizo explícita arriba. Una función analítica no idénticamente nula puede tener infinitos ceros en una región no compacta, por lo que la versión general requiere localizar la argumentación en torno a la curva.

>[!Corollary] Recuento de soluciones de $f(z)=\alpha$
>Sea $\alpha\in\mathbb C$. Supongamos que $f-\alpha$ no es idénticamente nula, que sus ceros en $G$ forman una lista finita $a_1,\ldots,a_n$ repetidos según su multiplicidad, y que $f(z)\neq\alpha$ sobre $\gamma$. Bajo las mismas hipótesis sobre $G$ y $\gamma$ del resultado anterior, $$\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)-\alpha}\,dz=\sum_{k=1}^n n(\gamma,a_k).$$
>>[!Proof]-
>>1. Aplicamos [[FA - Teo8#^8a0043|recuento de ceros]] a $h=f-\alpha$. Sus ceros son las soluciones de $f(z)=\alpha$ y $h'=f'$, por lo que la fórmula resultante es la indicada.

^8a0044
