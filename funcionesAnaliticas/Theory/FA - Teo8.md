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

>[!Example] El recíproco no vale (Preguntar) 
>Encontrar un abierto $G$ y una curva cerrada rectificable $\gamma$ en $G$ tales que $n(\gamma,w)=0$ para todo $w\in\mathbb C\setminus G$, pero $\gamma\not\simeq_G0$.
>
>>[!Proof]-
>>1. **Construcción.** Tomamos $$G=\mathbb C\setminus\{-1,1\},\qquad\alpha(t)=-1+e^{2\pi it},\qquad\beta(t)=1-e^{2\pi it}\quad(0\leq t\leq1).$$ Son dos circunferencias positivas, basadas en $0$, que rodean respectivamente $-1$ y $1$. La curva cerrada rectificable $$\gamma=\alpha+\beta-\alpha-\beta$$ recorre primero ambas vueltas positivas y después ambas negativas, en ese mismo orden. Aquí $-\alpha$ y $-\beta$ significan recorrer las curvas al revés.
>>2. **Índices nulos.** Por [[FA - Teo6#^1e9a3c|índice de una curva]], la aditividad de la integral y el cambio de orientación, para $w\in\{-1,1\}$, $$n(\gamma,w)=n(\alpha,w)+n(\beta,w)-n(\alpha,w)-n(\beta,w)=0.$$ Estos son todos los puntos fuera de $G$.
>>3. **Justificación geométrica de la no contracción.** Trazamos dos cortes verticales hacia abajo: $$L_a=\{-1-iy:y>0\},\qquad L_b=\{1-iy:y>0\}.$$ Registramos $a$ o $b$ al cruzar el corte correspondiente de izquierda a derecha, y $a^{-1}$ o $b^{-1}$ al cruzarlo al revés. Leemos los cruces en orden cíclico, porque la curva es cerrada. Durante una deformación que evita los puntos excluidos, un cruce no puede escaparse por el extremo del corte ni por el infinito; dos cruces consecutivos con un mismo corte pueden aparecer o desaparecer juntos, pero tienen sentidos opuestos. Por tanto, las modificaciones son inserciones o cancelaciones de pares vecinos $aa^{-1}$, $a^{-1}a$, $bb^{-1}$ o $b^{-1}b$, además de cambios del punto donde empezamos a leer. Esta descripción se obtiene haciendo los cruces transversales y separando las tangencias mediante una pequeña perturbación de la deformación; es posible porque su imagen compacta queda a distancia positiva de los dos puntos excluidos.
>>4. **Aplicación a nuestra curva.** Los cruces de $\gamma$ forman la palabra cíclica $$aba^{-1}b^{-1}.$$ No hay ningún par vecino que se cancele, ni siquiera entre la última y la primera letra. Insertar pares inversos tampoco permite reducirla a la palabra vacía: al cancelar pares vecinos, las cancelaciones disjuntas no interfieren y las únicas superposiciones, como $aa^{-1}a$, dejan la misma letra en cualquiera de los dos órdenes. En cambio, una curva constante fuera de los cortes no tiene cruces y da la palabra vacía. Si la constante estuviera sobre un corte, podríamos desplazarla ligeramente dentro de $G$. Por el paso anterior, $\gamma$ no puede deformarse hasta una constante. Así, $$\boxed{n(\gamma,w)=0\text{ para todo }w\notin G,\qquad\gamma\not\simeq_G0.}$$

>[!Proposition] Invariancia del índice por homotopía
>Si $\gamma_0,\gamma_1$ son curvas cerradas rectificables en $G$ y $\gamma_0\simeq_G\gamma_1$, entonces $$n(\gamma_0,w)=n(\gamma_1,w)\qquad(w\in\mathbb C\setminus G).$$
>>[!Proof]-
>>1. Para $w\notin G$, aplicamos [[FA - Teo7#^0ad31e|invariancia por homotopía]] a $z\mapsto1/(z-w)$ y luego [[FA - Teo6#^1e9a3c|índice de una curva]]: $$n(\gamma_0,w)=\frac1{2\pi i}\int_{\gamma_0}\frac{dz}{z-w}=\frac1{2\pi i}\int_{\gamma_1}\frac{dz}{z-w}=n(\gamma_1,w).$$

^8a0014

>[!Example] Circunferencia en sentidos opuestos
>En $G=\mathbb C\setminus\{0\}$, las curvas $\gamma_0(t)=e^{2\pi it}$ y $\gamma_1(t)=e^{-2\pi it}$, $0\leq t\leq1$, no son homotópicas.
>>[!Proof]-
>>1. Parametrizando ambas integrales, $$n(\gamma_0,0)=\frac1{2\pi i}\int_0^1\frac{2\pi i e^{2\pi it}}{e^{2\pi it}}\,dt=1,\qquad n(\gamma_1,0)=\frac1{2\pi i}\int_0^1\frac{-2\pi i e^{-2\pi it}}{e^{-2\pi it}}\,dt=-1.$$
>>2. Como $0\notin G$, la igualdad exigida por [[FA - Teo8#^8a0014|invariancia del índice]] no se cumple. Por tanto, $\gamma_0\not\simeq_G\gamma_1$.

## Homotopía con extremos fijos

>[!Definition] Homotopía con extremos fijos
>Sean $G$ una región y $\gamma_0,\gamma_1:[0,1]\to G$ curvas rectificables tales que $\gamma_0(0)=\gamma_1(0)=a$ y $\gamma_0(1)=\gamma_1(1)=b$. Son **homotópicas con extremos fijos** si existe una aplicación continua $\Gamma:[0,1]^2\to G$ tal que $$\Gamma(s,0)=\gamma_0(s),\quad\Gamma(s,1)=\gamma_1(s)\qquad(0\leq s\leq1),$$ y $$\Gamma(0,t)=a,\quad\Gamma(1,t)=b\qquad(0\leq t\leq1).$$ Escribimos $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$.

^8a0021

>[!remark] Notación de concatenación
>Si el extremo final de $\alpha$ coincide con el inicial de $\beta$, $\alpha+\beta$ denota recorrer primero $\alpha$ y luego $\beta$, usando la primera y la segunda mitad del intervalo de parámetros: $$(\alpha+\beta)(s)=\begin{cases}\alpha(2s),&0\leq s\leq\frac12,\\\beta(2s-1),&\frac12\leq s\leq1.\end{cases}$$ En $s=\frac12$ la primera pieza vale $\alpha(1)$, pues $2\cdot\frac12=1$, y la segunda vale $\beta(0)$, pues $2\cdot\frac12-1=0$; coinciden por hipótesis. La curva $-\gamma$ es la curva inversa, $(-\gamma)(s)=\gamma(1-s)$. Por tanto $\gamma-\gamma=\gamma+(-\gamma)$. En la segunda mitad, $(-\gamma)(2s-1)=\gamma(1-(2s-1))$ y $1-(2s-1)=1+(-1)(2s-1)=1+(-2s+1)=1-2s+1=2-2s$, pues $(-1)(2s-1)=(-1)(2s)+(-1)(-1)=-2s+1$. Así $$(\gamma-\gamma)(s)=\begin{cases}\gamma(2s),&0\leq s\leq\frac12,\\\gamma(2-2s),&\frac12\leq s\leq1.\end{cases}$$ En $s=\frac12$ ambas piezas valen $\gamma(1)$. Si $\gamma$ es constante, ambas piezas valen esa constante. Recíprocamente, si $(\gamma-\gamma)(s)=\gamma(0)$ para todo $s$, entonces $\gamma(2s)=\gamma(0)$ para $0\leq s\leq\frac12$; dado $u\in[0,1]$ existe un único $s$ con $2s=u$, luego $\gamma(u)=\gamma(0)$ y $\gamma$ es constante. Además $(\gamma-\gamma)(0)=\gamma(2\cdot 0)=\gamma(0)$. La función nula es la constante $0$, así que coincide con $\gamma-\gamma$ solo si $\gamma(0)=0$ y $\gamma$ es constante. Si $\gamma$ no es constante, $\gamma-\gamma$ no es la curva constante en $\gamma(0)$ ni la curva nula.

^c3a91e

>[!exercise] Propiedades de la homotopía con extremos fijos
>- **(a)** Probar que $\simeq_G^{\mathrm{EF}}$ es una relación de equivalencia.
>- **(b)** Si $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$ y $\eta$ comienza en el extremo final común, probar que $\gamma_0+\eta\simeq_G^{\mathrm{EF}}\gamma_1+\eta$.
>- **(c)** Probar que $\gamma-\gamma\simeq_G^{\mathrm{EF}}c_{\gamma(0)}$, donde $c_{\gamma(0)}$ es la curva constante en $\gamma(0)$.
>
>**Indicaciones del manuscrito.** Para (b), si $\Gamma$ realiza la homotopía inicial, usar $$\widetilde\Gamma(s,t)=\begin{cases}\Gamma(2s,t),&0\leq s\leq\frac12,\\\eta(2s-1),&\frac12\leq s\leq1.\end{cases}$$ Para (c), recorrer un tramo cada vez más corto de $\gamma$ y volver por el mismo tramo; una parametrización explícita es $$H(s,t)=\begin{cases}\gamma(2s(1-t)),&0\leq s\leq\frac12,\\\gamma(2(1-s)(1-t)),&\frac12\leq s\leq1.\end{cases}$$
>
>>[!Proof]- Revisar
>>- (a)
>>	1. **Reflexividad.** Sea $\gamma:[0,1]\to G$ rectificable, con $\gamma(0)=a$ y $\gamma(1)=b$. La aplicación $\Gamma(s,t)=\gamma(s)$ es continua y toma valores en $G$. Además $\Gamma(s,0)=\gamma(s)=\Gamma(s,1)$, $\Gamma(0,t)=\gamma(0)=a$ y $\Gamma(1,t)=\gamma(1)=b$. Por [[FA - Teo8#^8a0021|homotopía con extremos fijos]], $\gamma\simeq_G^{\mathrm{EF}}\gamma$.
>>	2. **Simetría.** Si $\Gamma$ realiza $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$, con extremos $a,b$, definimos $\widetilde\Gamma(s,t)=\Gamma(s,1-t)$. Como $0\leq 1-t\leq 1$, se tiene $\widetilde\Gamma(s,0)=\Gamma(s,1)=\gamma_1(s)$, $\widetilde\Gamma(s,1)=\Gamma(s,0)=\gamma_0(s)$, $\widetilde\Gamma(0,t)=\Gamma(0,1-t)=a$ y $\widetilde\Gamma(1,t)=\Gamma(1,1-t)=b$. Es continua y toma valores en $G$, así que $\gamma_1\simeq_G^{\mathrm{EF}}\gamma_0$.
>>	3. **Transitividad.** Por [[FA - Teo8#^8a0021|homotopía con extremos fijos]], si $\Gamma$ realiza $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_1$ y $\Phi$ realiza $\gamma_1\simeq_G^{\mathrm{EF}}\gamma_2$, las tres curvas empiezan en $a$ y terminan en $b$. Definimos $$\Psi(s,t)=\begin{cases}\Gamma(s,2t),&0\leq t\leq\frac12,\\\Phi(s,2t-1),&\frac12\leq t\leq 1.\end{cases}$$ Si $0\leq t\leq\frac12$, entonces $0\leq 2t\leq 1$. Si $\frac12\leq t\leq 1$, entonces $2t\geq 2\cdot\frac12=1$, luego $2t-1\geq 0$; y $2t\leq 2\cdot 1=2$, luego $2t-1\leq 1$. En $t=\frac12$ se tiene $2t=1$ y $2t-1=0$, luego ambas piezas valen $\Gamma(s,1)=\gamma_1(s)=\Phi(s,0)$. Las dos piezas son continuas y coinciden en ese borde, así que $\Psi$ es continua. Además $\Psi(s,0)=\Gamma(s,0)=\gamma_0(s)$ y $\Psi(s,1)=\Phi(s,1)=\gamma_2(s)$. Si $0\leq t\leq\frac12$, entonces $\Psi(0,t)=\Gamma(0,2t)=a$ y $\Psi(1,t)=\Gamma(1,2t)=b$; si $\frac12\leq t\leq 1$, entonces $\Psi(0,t)=\Phi(0,2t-1)=a$ y $\Psi(1,t)=\Phi(1,2t-1)=b$. La imagen está en $G$. Por [[FA - Teo8#^8a0021|homotopía con extremos fijos]], $\gamma_0\simeq_G^{\mathrm{EF}}\gamma_2$.
>>- (b)
>>	1. **Extremos y continuidad.** Sean $\gamma_0(0)=\gamma_1(0)=a$, $\gamma_0(1)=\gamma_1(1)=b$ y $\eta:[0,1]\to G$ rectificable con $\eta(0)=b$. Por [[FA - Teo8#^c3a91e|notación de concatenación]], si $\alpha(1)=\beta(0)$ entonces $(\alpha+\beta)(0)=\alpha(0)$ y $(\alpha+\beta)(1)=\beta(1)$. En $s=\frac12$ las dos piezas valen $\alpha(1)=\beta(0)$, así que $\alpha+\beta$ es continua. En particular, $(\gamma_j+\eta)(0)=a$ y $(\gamma_j+\eta)(1)=\eta(1)$ para $j=0,1$.
>>	2. **Variación de la concatenación.** Escribimos $\operatorname{Var}$ como en [[FA - Teo4#^a91c04|variación acotada]]. Sean $\alpha,\beta$ rectificables con $\alpha(1)=\beta(0)$ y $\sigma=\alpha+\beta$. Si una partición de $[0,1]$ no contiene $\frac12$ e insertamos ese punto entre $s_{i-1}$ y $s_i$, la suma no disminuye: $\sigma(s_i)-\sigma(s_{i-1})=(\sigma(s_i)-\sigma(\frac12))+(\sigma(\frac12)-\sigma(s_{i-1}))$, luego $|\sigma(s_i)-\sigma(s_{i-1})|\leq|\sigma(s_i)-\sigma(\frac12)|+|\sigma(\frac12)-\sigma(s_{i-1})|$. Toda suma es entonces menor o igual que una suma de una partición que contiene $\frac12$, y esas particiones son un subconjunto de todas, luego los dos supremos coinciden. Una partición que contiene $\frac12$ se parte en una de $[0,\frac12]$ y otra de $[\frac12,1]$, y toda pareja de particiones de las dos mitades se une en una partición de $[0,1]$ que contiene $\frac12$. En $[0,\frac12]$, $\sigma(s)=\alpha(2s)$: si $0=s_0<\cdots<s_k=\frac12$, los puntos $u_i$ definidos por $2s_i=u_i$ cumplen $0=u_0<\cdots<u_k=1$ y $|\alpha(2s_i)-\alpha(2s_{i-1})|=|\alpha(u_i)-\alpha(u_{i-1})|$. Recíprocamente, dado $u\in[0,1]$ hay un único $s$ con $2s=u$, y $0\leq s\leq\frac12$: si $s>\frac12$ entonces $2s>2\cdot\frac12=1$, y si $s<0$ entonces $2s<0$. Llamamos $L$ a una suma de $\sigma$ en $[0,\frac12]$. Así $\sup L=\operatorname{Var}(\alpha)$. En $[\frac12,1]$, $\sigma(s)=\beta(2s-1)$: si $\frac12=s_0<\cdots<s_k=1$, los puntos $v_i=2s_i-1$ cumplen $0=v_0<\cdots<v_k=1$ y $|\beta(2s_i-1)-\beta(2s_{i-1}-1)|=|\beta(v_i)-\beta(v_{i-1})|$. Recíprocamente, dado $v\in[0,1]$ hay un único $s$ con $2s=v+1$, y $\frac12\leq s\leq 1$: si $s<\frac12$ entonces $2s<2\cdot\frac12=1$ y $2s-1<0$, y si $s>1$ entonces $2s>2\cdot 1=2$ y $2s-1>1$. Llamamos $R$ a una suma de $\sigma$ en $[\frac12,1]$. Así $\sup R=\operatorname{Var}(\beta)$. Como $\operatorname{Var}(\alpha)$ es cota superior de las $L$ y $\operatorname{Var}(\beta)$ de las $R$, toda suma $L+R$ cumple $L+R\leq\operatorname{Var}(\alpha)+\operatorname{Var}(\beta)$. Por lo anterior, toda suma de $\sigma$ es menor o igual que alguna $L+R$, luego $\operatorname{Var}(\sigma)\leq\operatorname{Var}(\alpha)+\operatorname{Var}(\beta)<\infty$. Recíprocamente, $L+R$ es la suma de una partición de $[0,1]$, luego $L+R\leq\operatorname{Var}(\sigma)$. Fijada $R$, todo $L$ cumple $L\leq\operatorname{Var}(\sigma)-R$; esa resta es cota superior de las $L$, y el supremo es la menor cota superior, luego $\operatorname{Var}(\alpha)\leq\operatorname{Var}(\sigma)-R$ y $\operatorname{Var}(\alpha)+R\leq\operatorname{Var}(\sigma)$. Entonces todo $R$ cumple $R\leq\operatorname{Var}(\sigma)-\operatorname{Var}(\alpha)$, luego $\operatorname{Var}(\beta)\leq\operatorname{Var}(\sigma)-\operatorname{Var}(\alpha)$ y $\operatorname{Var}(\alpha)+\operatorname{Var}(\beta)\leq\operatorname{Var}(\sigma)$. Así $\operatorname{Var}(\sigma)=\operatorname{Var}(\alpha)+\operatorname{Var}(\beta)$. Con la continuidad del paso anterior, [[FA - Teo4#^d4e81a|curva rectificable]] da que $\sigma$ es rectificable. En particular lo son $\gamma_0+\eta$ y $\gamma_1+\eta$.
>>	3. **Homotopía.** Sea $\Gamma$ una homotopía con extremos fijos de $\gamma_0$ a $\gamma_1$. Definimos $$\widetilde\Gamma(s,t)=\begin{cases}\Gamma(2s,t),&0\leq s\leq\frac12,\\\eta(2s-1),&\frac12\leq s\leq 1.\end{cases}$$ Si $0\leq s\leq\frac12$, entonces $0\leq 2s\leq 1$. Si $\frac12\leq s\leq 1$, entonces $2s\geq 2\cdot\frac12=1$, luego $2s-1\geq 0$; y $2s\leq 2\cdot 1=2$, luego $2s-1\leq 1$. Como $2\cdot\frac12=1$, en $s=\frac12$ la primera pieza vale $\Gamma(1,t)=b$ y la segunda vale $\eta(0)=b$. Las dos piezas son continuas y coinciden en ese borde, así que $\widetilde\Gamma$ es continua y toma valores en $G$.
>>	4. **Bordes.** Si $0\leq s\leq\frac12$, entonces $\widetilde\Gamma(s,0)=\Gamma(2s,0)=\gamma_0(2s)=(\gamma_0+\eta)(s)$ y $\widetilde\Gamma(s,1)=\Gamma(2s,1)=\gamma_1(2s)=(\gamma_1+\eta)(s)$. Si $\frac12\leq s\leq 1$, entonces $\widetilde\Gamma(s,0)=\eta(2s-1)=(\gamma_0+\eta)(s)$ y $\widetilde\Gamma(s,1)=\eta(2s-1)=(\gamma_1+\eta)(s)$. Además $\widetilde\Gamma(0,t)=\Gamma(0,t)=a$ y $\widetilde\Gamma(1,t)=\eta(1)$. Por [[FA - Teo8#^8a0021|homotopía con extremos fijos]], $\gamma_0+\eta\simeq_G^{\mathrm{EF}}\gamma_1+\eta$.
>>- (c)
>>	1. **Rectificabilidad de $\gamma-\gamma$ y de la constante.** Sea $\gamma:[0,1]\to G$ rectificable. Para una partición $0=s_0<\cdots<s_n=1$, definimos $u_i=1-s_{n-i}$. Entonces $0=u_0<\cdots<u_n=1$: si $i<n$, como $i<i+1$ se tiene $-i>-(i+1)$ y $n-i>n-(i+1)$; la partición es estrictamente creciente, luego $s_{n-i}>s_{n-(i+1)}$. Además $(1-s_{n-(i+1)})-(1-s_{n-i})=s_{n-i}-s_{n-(i+1)}>0$, así que $u_{i+1}>u_i$. Además $|(-\gamma)(s_j)-(-\gamma)(s_{j-1})|=|\gamma(1-s_j)-\gamma(1-s_{j-1})|=|\gamma(u_{n-j})-\gamma(u_{n-j+1})|=|\gamma(u_{n-j+1})-\gamma(u_{n-j})|$. Al recorrer $j=1,\ldots,n$, el índice $n-j+1$ recorre $n,\ldots,1$, así que la suma de esa partición para $-\gamma$ es la suma de $(u_i)$ para $\gamma$. Invertir otra vez recupera la partición original, luego los conjuntos de sumas coinciden y $\operatorname{Var}(-\gamma)=\operatorname{Var}(\gamma)$. Como $(-\gamma)(s)=\gamma(1-s)$ es continua, [[FA - Teo4#^d4e81a|curva rectificable]] da que $-\gamma$ es rectificable. Además $(-\gamma)(0)=\gamma(1)$ y $(-\gamma)(1)=\gamma(0)$. Por el paso 2 de (b), $\gamma-\gamma=\gamma+(-\gamma)$ es rectificable, con ambos extremos iguales a $\gamma(0)$. La constante $c_{\gamma(0)}(s)=\gamma(0)$ es continua y toda suma de incrementos es $0$, luego su variación es $0$ y es rectificable.
>>	2. **La homotopía indicada.** Definimos $$H(s,t)=\begin{cases}\gamma(2s(1-t)),&0\leq s\leq\frac12,\\\gamma(2(1-s)(1-t)),&\frac12\leq s\leq 1.\end{cases}$$ Si $0\leq s\leq\frac12$ y $0\leq t\leq 1$, entonces $0\leq 2s\leq 1$ y $0\leq 1-t\leq 1$. Si $0\leq x\leq 1$ y $0\leq y\leq 1$, entonces $0\leq xy\leq x\leq 1$, así que $0\leq 2s(1-t)\leq 1$. Si $\frac12\leq s\leq 1$, entonces $0\leq 1-s\leq\frac12$, luego $0\leq 2(1-s)\leq 1$, y el mismo producto da $0\leq 2(1-s)(1-t)\leq 1$. Así $H$ evalúa $\gamma$ donde está definida. En $s=\frac12$ ambas piezas valen $\gamma(1-t)$. Las dos piezas son continuas y coinciden en ese borde, luego $H$ es continua y toma valores en $G$. Para $t$ fijo, en la primera mitad el argumento $2s(1-t)$ vale $0$ en $s=0$ y $1-t$ en $s=\frac12$; en la segunda, $2(1-s)(1-t)$ vale $1-t$ en $s=\frac12$ y $0$ en $s=1$.
>>	3. **Bordes.** Si $0\leq s\leq\frac12$, entonces $H(s,0)=\gamma(2s)=(\gamma-\gamma)(s)$. Si $\frac12\leq s\leq 1$, entonces $H(s,0)=\gamma(2(1-s))=\gamma(2-2s)=(\gamma-\gamma)(s)$, pues $2(1-s)=2\cdot 1-2\cdot s=2-2s$. Para todo $s$, $H(s,1)=\gamma(0)=c_{\gamma(0)}(s)$. Además $H(0,t)=\gamma(0)$ y $H(1,t)=\gamma(2(1-1)(1-t))=\gamma(0)$, pues $1-1=0$. Por [[FA - Teo8#^8a0021|homotopía con extremos fijos]], $\gamma-\gamma\simeq_G^{\mathrm{EF}}c_{\gamma(0)}$.

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
>
>>[!Proof]-
>>1. Fijamos $a\in G$. Como $G$ es abierto y conexo, sus puntos pueden unirse por caminos poligonales contenidos en $G$; en particular, para cada $z\in G$ podemos elegir una curva rectificable $\gamma$ de $a$ a $z$. Definimos $$F(z)=\int_\gamma f(w)\,dw.$$
>>2. La definición no depende de la curva elegida: si $\gamma_0,\gamma_1$ van de $a$ a $z$, la curva $\gamma_0-\gamma_1$ es cerrada y rectificable en $G$. Por [[FA - Teo8#^8a0032|Cauchy v4]], $$0=\int_{\gamma_0-\gamma_1}f(w)\,dw=\int_{\gamma_0}f(w)\,dw-\int_{\gamma_1}f(w)\,dw.$$
>>3. Fijamos $z_0\in G$ y $r>0$ tal que $B(z_0,r)\subseteq G$. Elegimos un camino rectificable $\gamma_0$ contenido en $G$ que une $a$ con $z_0$. Para $z\in B(z_0,r)$, el segmento $[z_0,z]$ está contenido en la bola. El camino concatenado $\gamma_0*[z_0,z]$ está entonces contenido en $G$ y une $a$ con $z$: primero va de $a$ a $z_0$ por $\gamma_0$ y después de $z_0$ a $z$ por el segmento. Por el paso 2 podemos calcular $F(z)$ sobre este camino, pues tiene los extremos $a$ y $z$. Separando la integral por aditividad sobre caminos concatenados, obtenemos $$\begin{aligned}F(z)&=\int_{\gamma_0*[z_0,z]}f(w)\,dw\\&=\int_{\gamma_0}f(w)\,dw+\int_{[z_0,z]}f(w)\,dw\\&=F(z_0)+\int_{[z_0,z]}f(w)\,dw.\end{aligned}$$ La última igualdad usa la definición del paso 1 en el punto $z_0$ y la independencia del camino del paso 2: como $\gamma_0$ une $a$ con $z_0$, su integral es $F(z_0)$. Por tanto, $$F(z)-F(z_0)=\int_{[z_0,z]}f(w)\,dw.$$
>>4. Parametrizando el segmento por $w(t)=z_0+t(z-z_0)$, obtenemos $$\frac{F(z)-F(z_0)}{z-z_0}-f(z_0)=\int_0^1\bigl(f(z_0+t(z-z_0))-f(z_0)\bigr)\,dt.$$
>>5. Dado $\varepsilon>0$, la continuidad de $f$ en $z_0$ permite elegir $0<\delta<r$ tal que $|w-z_0|<\delta$ implique $|f(w)-f(z_0)|<\varepsilon$. Si $0<|z-z_0|<\delta$, todos los puntos del segmento satisfacen esa condición, y $$\left|\frac{F(z)-F(z_0)}{z-z_0}-f(z_0)\right|\leq\int_0^1|f(z_0+t(z-z_0))-f(z_0)|\,dt<\varepsilon.$$
>>6. Resulta $F'(z_0)=f(z_0)$. Como $z_0$ era arbitrario, $F$ es analítica en $G$ y $F'=f$.

^8a0033

>[!Corollary] Logaritmo analítico de una función sin ceros
>Sean $G$ una región simplemente conexa y $f:G\to\mathbb C$ analítica tal que $f(z)\neq0$ para todo $z\in G$. Existe una función analítica $g:G\to\mathbb C$ tal que $$f(z)=e^{g(z)}\qquad(z\in G).$$ Además, si $z_0\in G$ y $w_0\in\mathbb C$ satisfacen $f(z_0)=e^{w_0}$, podemos elegir $g$ de modo que $g(z_0)=w_0$.
>>[!Proof]-
>>1. Como $f$ no se anula, $f'/f$ es analítica en $G$. Por [[FA - Teo8#^8a0033|existencia de primitivas]], existe $g_1:G\to\mathbb C$ analítica tal que $g_1'=f'/f$.
>>2. Sea $h=e^{g_1}$. Esta función es analítica, no se anula y satisface $h'=g_1'h$. Entonces $$\left(\frac f h\right)'=\frac{f'h-fh'}{h^2}=\frac{f'-fg_1'}h=\frac{f'-f(f'/f)}h=0.$$
>>3. Por [[FA - Teo2#^bb0732|derivada nula implica constante]], $f/h=c$ para alguna constante $c\neq0$ ($\exp$ es sobre si el codominio es $C\setminus \{ 0 \}$). Elegimos $\alpha\in\mathbb C$ con $e^\alpha=c$. Así, $$f=ch=e^\alpha e^{g_1}=e^{g_1+\alpha}.$$
>>4. Si tenemos $z_0,w_0$ que satisfacen $f(z_0)=e^{w_0}$ entonces $e^{w_0-g_1(z_0)-\alpha}=1$. Escribiendo $w_0-g_1(z_0)-\alpha=2k\pi i$ para algún $k\in\mathbb Z$, tomamos $$g(z)=g_1(z)+\alpha+2k\pi i.$$ Se cumple $e^g=f$ y $g(z_0)=w_0$.

^8a0034

## Recuento de ceros de funciones analíticas

>[!Definition] Multiplicidad de un cero — recordatorio
>Un punto $a\in G$ es un cero de multiplicidad $m\geq1$ de una función analítica $f$ si, en un entorno de $a$, $$f(z)=(z-a)^m g(z),$$ donde $g$ es analítica y $g(a)\neq0$.

^8a0041

>[!Proposition] Factorización y derivada logarítmica
>Sean $a_1,\ldots,a_N$ ceros distintos de $f$, de multiplicidades $m_1,\ldots,m_N$. Al retirar esos factores se obtiene una función analítica $g$ en $G$ tal que $$f(z)=\prod_{j=1}^N(z-a_j)^{m_j}g(z),\qquad g(a_j)\neq0.$$
>En los puntos donde $f(z)\neq0$, $$\frac{f'(z)}{f(z)}=\sum_{j=1}^N\frac{m_j}{z-a_j}+\frac{g'(z)}{g(z)}.\qquad (*)$$
>
>>[!Proof]-
>>1. Fuera de los $a_j$, definimos $$g(z)=\frac{f(z)}{\prod_{\ell=1}^N(z-a_\ell)^{m_\ell}}.$$ Fijado $j$, por [[FA - Teo8#^8a0041|multiplicidad de un cero]], cerca de $a_j$ escribimos $f(z)=(z-a_j)^{m_j}u_j(z)$, con $u_j$ analítica y $u_j(a_j)\neq0$. Para $z\neq a_j$ cercano a $a_j$, cancelamos el factor $(z-a_j)^{m_j}$ que aparece tanto en el numerador como en el denominador, por lo tanto, localmente $g$ tiene la siguiente pinta: $$g(z)=\frac{(z-a_j)^{m_j}u_j(z)}{(z-a_j)^{m_j}\prod_{\ell\neq j}(z-a_\ell)^{m_\ell}}=\frac{u_j(z)}{\prod_{\ell\neq j}(z-a_\ell)^{m_\ell}}.$$ Como los ceros son distintos, el denominador de la última expresión no se anula en $a_j$ ni en un entorno suficientemente pequeño. Esta expresión prolonga analíticamente $g$ a $a_j$, definiendo $$g(a_j)=\frac{u_j(a_j)}{\prod_{\ell\neq j}(a_j-a_\ell)^{m_\ell}}\neq0.$$
>>2. Aplicando la regla del producto, $$f'(z)=\sum_{j=1}^N m_j(z-a_j)^{m_j-1}\prod_{\ell\neq j}(z-a_\ell)^{m_\ell}g(z)+\prod_{j=1}^N(z-a_j)^{m_j}g'(z).$$ En los puntos donde $f(z)\neq0$, dividir esta igualdad por $f(z)$ da $(*)$.

^8a0042

>[!Theorem] Recuento de ceros mediante la derivada logarítmica
>Sean $G$ una región y $f:G\to\mathbb C$ analítica, no idénticamente nula, cuyos ceros en $G$ forman una lista finita $a_1,\ldots,a_n$, repetidos de acuerdo con su multiplicidad. Sea $\gamma$ una curva cerrada rectificable en $G$ que no pasa por ningún cero de $f$. Si $$n(\gamma,w)=0\qquad(w\in\mathbb C\setminus G),$$ entonces $$\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz=\sum_{k=1}^n n(\gamma,a_k).$$ En particular, la fórmula vale si $\gamma\simeq_G0$.
>>[!Proof]-
>>1. Agrupamos los ceros distintos como $b_1,\ldots,b_N$, con multiplicidades $m_1,\ldots,m_N$. Por [[FA - Teo8#^8a0042|factorización y derivada logarítmica]], $$\frac{f'}f=\sum_{j=1}^N\frac{m_j}{z-b_j}+\frac{g'}g.$$ Como hemos retirado todos los ceros de $f$ en $G$, la función $g$ no se anula en $G$; por tanto, $g'/g$ es analítica allí.
>>2. Por [[FA - Teo7#^c9f031|Cauchy v1]] aplicado a una sola curva, $$\int_\gamma\frac{g'(z)}{g(z)}\,dz=0.$$ Si se usa la hipótesis más fuerte $\gamma\simeq_G0$, también puede aplicarse directamente [[FA - Teo8#^8a0012|Cauchy v2]], como en el manuscrito.
>>3. Integramos la identidad y aplicamos [[FA - Teo6#^1e9a3c|índice de una curva]]: $$\begin{aligned}\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz&=\sum_{j=1}^N\frac{m_j}{2\pi i}\int_\gamma\frac{dz}{z-b_j}+\frac1{2\pi i}\int_\gamma\frac{g'(z)}{g(z)}\,dz\\&=\sum_{j=1}^Nm_jn(\gamma,b_j)\\&=\sum_{k=1}^nn(\gamma,a_k).\end{aligned}$$

^8a0043

>[!Remark]
>La prueba manuscrita retira una lista finita de ceros y aplica Cauchy a $g'/g$. Para que esa función sea analítica en todo $G$, la lista debe contener todos los ceros en $G$; esta hipótesis se hizo explícita arriba. Una función analítica no idénticamente nula puede tener infinitos ceros en una región no compacta, por lo que la versión general requiere localizar la argumentación en torno a la curva.

>[!Corollary] Recuento de soluciones de $f(z)=\alpha$
>Sean $G\subseteq\mathbb C$ una región, $f:G\to\mathbb C$ analítica y $\alpha\in\mathbb C$. Supongamos que $f-\alpha$ no es idénticamente nula y que sus ceros en $G$ forman una lista finita $a_1,\ldots,a_n$, repetidos según su multiplicidad. Sea $\gamma$ una curva cerrada rectificable en $G$ tal que $f(z)\neq\alpha$ sobre $\gamma$ y $$n(\gamma,w)=0\qquad(w\in\mathbb C\setminus G).$$ Entonces $$\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)-\alpha}\,dz=\sum_{k=1}^n n(\gamma,a_k).$$ En particular, la condición sobre el índice se cumple si $\gamma\simeq_G0$.
>
>>[!Proof]-
>>1. Aplicamos [[FA - Teo8#^8a0043|recuento de ceros]] a $h=f-\alpha$. Sus ceros son las soluciones de $f(z)=\alpha$ y $h'=f'$, por lo que la fórmula resultante es la indicada.

^8a0044
