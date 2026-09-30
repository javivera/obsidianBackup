# Teo 7 — Fórmulas de Cauchy, Morera y homotopía (29/09/2026)

## Fórmulas integrales para varias curvas

>[!remark] Recordatorio: fórmula integral de Cauchy (v1)
>Sean $G\subseteq\mathbb C$ abierto, $f:G\to\mathbb C$ analítica y $\gamma$ una curva cerrada rectificable en $G$ tal que $n(\gamma,w)=0$ para todo $w\in\mathbb C\setminus G$. Para $a\in G\setminus\{\gamma\}$, $$n(\gamma,a)f(a)=\frac{1}{2\pi i}\int_\gamma\frac{f(z)}{z-a}\,dz.$$

^a7e91c

>[!Theorem] Fórmula integral de Cauchy (v1.5)
>Sean $G\subseteq\mathbb C$ abierto, $f:G\to\mathbb C$ analítica y $\gamma_1,\ldots,\gamma_N$ curvas cerradas rectificables en $G$. Si $$\sum_{j=1}^{N}n(\gamma_j,w)=0\qquad(w\in\mathbb C\setminus G),$$ entonces, para $a\in G\setminus\bigcup_{j=1}^{N}\{\gamma_j\}$, $$f(a)\sum_{j=1}^{N}n(\gamma_j,a)=\frac{1}{2\pi i}\sum_{j=1}^{N}\int_{\gamma_j}\frac{f(z)}{z-a}\,dz.$$
>>[!Proof]- Esquema de la demostración de clase
>>1. Se repite la construcción de la prueba de [[FA - Teo7#^a7e91c|FIC v1]], reemplazando cada integral sobre $\gamma$ por la suma de las integrales sobre $\gamma_j$ y poniendo $H=\{w\in\mathbb C\setminus\bigcup_j\{\gamma_j\}:\sum_j n(\gamma_j,w)=0\}$. La hipótesis da $\mathbb C\setminus G\subseteq H$.
>>2. Para $z\in G$ se usa $\varphi(z,w)=(f(z)-f(w))/(z-w)$, prolongada por $f'(z)$ cuando $z=w$. En $G\cap H$ las dos expresiones $$\sum_j\int_{\gamma_j}\varphi(z,w)\,dw\quad\text{y}\quad\sum_j\int_{\gamma_j}\frac{f(w)}{w-z}\,dw$$ coinciden porque el término adicional es $f(z)\sum_j n(\gamma_j,z)=0$ (con el factor $2\pi i$ correspondiente).
>>3. La función definida por esas expresiones en $G$ y $H$, respectivamente, es entera y tiende a $0$ en el infinito; por Liouville es nula. Despejando en $a$ y usando [[FA - Teo6#^1e9a3c|índice de una curva]] resulta la fórmula.

^b4d2a0

>[!Theorem] Teorema de Cauchy (v1, varias curvas)
>Con las hipótesis de [[FA - Teo7#^b4d2a0|FIC v1.5]], $$\sum_{j=1}^{N}\int_{\gamma_j}f(z)\,dz=0.$$
>>[!Proof]-
>>1. Fijamos $a\in G\setminus\bigcup_j\{\gamma_j\}$ y aplicamos [[FA - Teo7#^b4d2a0|FIC v1.5]] a la función analítica $z\mapsto(z-a)f(z)$; en cada integrando el factor $z-a$ cancela el denominador, y el lado izquierdo vale $0$ al evaluar esa función en $a$.

^c9f031

>[!Theorem] Fórmula de Cauchy para las derivadas
>Bajo las hipótesis de [[FA - Teo7#^b4d2a0|FIC v1.5]], para cada entero $k\geq1$ y cada $a\in G\setminus\bigcup_j\{\gamma_j\}$ se tiene $$f^{(k)}(a)\sum_{j=1}^{N}n(\gamma_j,a)=\frac{k!}{2\pi i}\sum_{j=1}^{N}\int_{\gamma_j}\frac{f(z)}{(z-a)^{k+1}}\,dz.$$
>>[!Proof]- El caso $k=1$
>>1. Para cada $j$ definimos $F_j(z)=\int_{\gamma_j}f(w)/(w-z)\,dw$ fuera de la curva. Si $a$ no está en $\{\gamma_j\}$, entonces $\frac{F_j(z)-F_j(a)}{z-a}=\int_{\gamma_j}\frac{f(w)}{(w-z)(w-a)}\,dw$; como la curva está a distancia positiva de $a$, el integrando converge uniformemente sobre ella al tender $z$ a $a$. Por [[FA - Teo4#^5d2a91|paso al límite bajo la integral]], $F_j'(a)=\int_{\gamma_j}f(w)/(w-a)^2\,dw$.
>>2. Por [[FA - Teo7#^b4d2a0|FIC v1.5]], $f(z)\sum_jn(\gamma_j,z)=(2\pi i)^{-1}\sum_jF_j(z)$. Cerca de $a$ cada índice $n(\gamma_j,z)$ es constante: $a$ y $z$ pertenecen a la misma componente conexa del complemento de $\{\gamma_j\}$.
>>3. Derivando en $a$ obtenemos $$f'(a)\sum_jn(\gamma_j,a)=\frac{1}{2\pi i}\sum_jF_j'(a)=\frac{1}{2\pi i}\sum_j\int_{\gamma_j}\frac{f(w)}{(w-a)^2}\,dw.$$
>>4. Para $k>1$, iterar el mismo argumento y la identidad $\frac{d}{dz}\int_{\gamma_j}f(w)(w-z)^{-m}\,dw=m\int_{\gamma_j}f(w)(w-z)^{-m-1}\,dw$; la clase deja la inducción como ejercicio.

^d2e7aa

## Teorema de Morera

>[!Theorem] Morera
>Sea $G\subseteq\mathbb C$ una región y sea $f:G\to\mathbb C$ continua. Si $$\int_\Delta f(z)\,dz=0$$ para todo camino triangular $\Delta$ contenido en $G$, entonces $f$ es analítica en $G$.
>>[!Proof]-
>>1. Fijamos $a\in G$ y $R>0$ tales que $B(a,R)\subseteq G$. Como el disco es convexo, para $z\in B(a,R)$ está definido $$F(z)=\int_{[a,z]}f(w)\,dw,$$ donde $[a,z]$ denota el segmento orientado de $a$ a $z$.
>>2. Sean $z_0,z\in B(a,R)$. El triángulo formado por $[a,z]$, $[z,z_0]$ y $[z_0,a]$ está en $B(a,R)$; por hipótesis, $$0=\int_{[a,z]}f+\int_{[z,z_0]}f+\int_{[z_0,a]}f=F(z)-\int_{[z_0,z]}f-F(z_0).$$ Por tanto, $F(z)-F(z_0)=\int_{[z_0,z]}f(w)\,dw$.
>>3. Parametrizamos $w(t)=z_0+t(z-z_0)$, $0\leq t\leq1$. La igualdad anterior da $$\frac{F(z)-F(z_0)}{z-z_0}-f(z_0)=\int_0^1\bigl(f(z_0+t(z-z_0))-f(z_0)\bigr)\,dt.$$
>>4. Dado $\varepsilon>0$, por continuidad de $f$ en $z_0$ existe $\delta>0$ tal que $|w-z_0|<\delta$ implica $|f(w)-f(z_0)|<\varepsilon$. Si $|z-z_0|<\delta$, entonces $|z_0+t(z-z_0)-z_0|\leq|z-z_0|<\delta$ para todo $t\in[0,1]$, y el módulo de la integral de (3) es menor que $\varepsilon$.
>>5. Luego $F'(z_0)=f(z_0)$. Así $f$ tiene una primitiva analítica en cada disco $B(a,R)$; aplicando la existencia de derivadas sucesivas de funciones analíticas que expresa [[FA - Teo7#^d2e7aa|fórmula para las derivadas]], $f=F'$ es analítica cerca de cada $a\in G$ y, por tanto, en $G$.

^e4b901

## Homotopía de curvas cerradas

>[!Definition] Homotopía en $G$
>Sean $G\subseteq\mathbb C$ abierto y $\gamma_0,\gamma_1:[0,1]\to G$ curvas cerradas rectificables. Se dice que $\gamma_0$ es **homotópica** a $\gamma_1$ en $G$, y se escribe $\gamma_0\simeq_G\gamma_1$, si existe una aplicación continua $\Pi:[0,1]\times[0,1]\to G$ tal que $$\Pi(s,0)=\gamma_0(s),\quad\Pi(s,1)=\gamma_1(s),\quad\Pi(0,t)=\Pi(1,t)\qquad(s,t\in[0,1]).$$ Cada curva $\gamma_t(s)=\Pi(s,t)$ permanece cerrada; la homotopía es una deformación continua dentro de $G$.

^f07a2d

>[!remark] Homotopía lineal
>Si los segmentos entre puntos correspondientes permanecen en $G$, sirve $\Pi(s,t)=(1-t)\gamma_0(s)+t\gamma_1(s)$. En particular, si $G$ es convexo, cualesquiera dos curvas cerradas en $G$ son homotópicas.

>[!Proposition] La homotopía es una relación de equivalencia
>La relación $\simeq_G$ sobre las curvas cerradas rectificables en $G$ es reflexiva, simétrica y transitiva.
>>[!Proof]-
>>1. **Reflexividad.** Para $\gamma$, tomamos $\Pi(s,t)=\gamma(s)$; es continua, sus extremos coinciden con $\gamma$ y $\Pi(0,t)=\Pi(1,t)$ porque $\gamma$ es cerrada.
>>2. **Simetría.** Si $\Pi$ lleva $\gamma_0$ a $\gamma_1$, la aplicación $\widetilde\Pi(s,t)=\Pi(s,1-t)$ lleva $\gamma_1$ a $\gamma_0$ y satisface las mismas condiciones de continuidad y cierre.
>>3. **Transitividad.** Si $\Pi$ lleva $\gamma_0$ a $\gamma_1$ y $\Phi$ lleva $\gamma_1$ a $\gamma_2$, definimos $$\Psi(s,t)=\begin{cases}\Pi(s,2t),&0\leq t\leq\frac12,\\\Phi(s,2t-1),&\frac12\leq t\leq1.\end{cases}$$ Ambas piezas coinciden en $t=1/2$ porque $\Pi(s,1)=\gamma_1(s)=\Phi(s,0)$; por pegado $\Psi$ es continua, sus curvas son cerradas y sus extremos son $\gamma_0,\gamma_2$.

>[!Definition] Conjuntos convexos y estrellados
>$G$ es **convexo** si $[a,b]\subseteq G$ para todos $a,b\in G$. Dado $a\in G$, se dice que $G$ es **$a$-estrellado** si $[a,z]\subseteq G$ para todo $z\in G$. Todo conjunto convexo es $a$-estrellado para cada $a\in G$.

>[!remark] Contracción en un conjunto estrellado
>Si $G$ es $a$-estrellado y $\gamma$ es cerrada en $G$, $\Pi(s,t)=(1-t)\gamma(s)+ta$ es una homotopía en $G$ entre $\gamma$ y la curva constante en $a$.

## Teorema de Cauchy homotópico

>[!Theorem] Invariancia de la integral por homotopía
>Sean $G\subseteq\mathbb C$ abierto, $f:G\to\mathbb C$ analítica y $\gamma_0,\gamma_1$ curvas cerradas rectificables homotópicas en $G$. Entonces $$\int_{\gamma_0}f(z)\,dz=\int_{\gamma_1}f(z)\,dz.$$
>>[!Proof]- Retícula de la homotopía
>>1. Sea $\Pi:[0,1]^2\to G$ la homotopía. La imagen $K=\Pi([0,1]^2)$ es compacta y está contenida en el abierto $G$. Por compacidad existe $r>0$ tal que $B(w,r)\subseteq G$ para todo $w\in K$ (se puede tomar $r$ menor que la distancia de $K$ a $\mathbb C\setminus G$).
>>2. Por continuidad uniforme de $\Pi$ en $[0,1]^2$, elegimos $n$ suficientemente grande para que la imagen de cada cuadradito $C_{j,k}=[j/n,(j+1)/n]\times[k/n,(k+1)/n]$ tenga diámetro menor que $r$. Si $z_{j,k}=\Pi(j/n,k/n)$, las imágenes de sus cuatro vértices pertenecen a $B(z_{j,k},r)$.
>>3. Unimos, en el orden inducido por el borde orientado de $C_{j,k}$, las imágenes de esos vértices mediante segmentos. La curva poligonal cerrada $P_{j,k}$ queda en $B(z_{j,k},r)$, pues el disco es convexo. Por [[FA - Teo4#^a71c9e|integral nula en un disco]], aplicada a un disco cerrado ligeramente menor que $B(z_{j,k},r)$ que todavía contenga $P_{j,k}$, $$\int_{P_{j,k}}f(z)\,dz=0.$$
>>4. Para $k=0,\ldots,n$, sea $Q_k$ la poligonal que une sucesivamente $z_{0,k},z_{1,k},\ldots,z_{n,k}$. Solo en los bordes horizontales $k=0,n$ consideramos la curva $\sigma_{j,k}(s)=\Pi(s,k/n)$ para $s\in[j/n,(j+1)/n]$: allí es un tramo rectificable de $\gamma_0$ o $\gamma_1$. La curva $\sigma_{j,k}$ más el segmento de $z_{j+1,k}$ a $z_{j,k}$ está en un mismo disco, y por [[FA - Teo4#^a71c9e|integral nula en un disco]] sus integrales se cancelan. Sumando en $j$ obtenemos $$\int_{\gamma_0}f(z)\,dz=\int_{Q_0}f(z)\,dz,\qquad\int_{\gamma_1}f(z)\,dz=\int_{Q_n}f(z)\,dz.$$
>>5. Sumamos $\int_{P_{j,k}}f=0$ para los $j$ de una fila $k$. Los segmentos interiores verticales se recorren dos veces en sentidos contrarios, y el cierre $\Pi(0,t)=\Pi(1,t)$ cancela los segmentos verticales de los extremos. En el borde quedan $Q_k$ y $-Q_{k+1}$, de modo que $$\int_{Q_k}f(z)\,dz=\int_{Q_{k+1}}f(z)\,dz.$$
>>6. Repetimos (5) para $k=0,\ldots,n-1$ y usamos (4) en los extremos: $$\int_{\gamma_0}f=\int_{Q_0}f=\int_{Q_1}f=\cdots=\int_{Q_n}f=\int_{\gamma_1}f.$$

^0ad31e

>[!remark] Alcance de la prueba
>El argumento subdivide el cuadrado de parámetros en celdas pequeñas: cada borde se reemplaza por una poligonal situada en un disco donde vale Cauchy local; al sumar, los bordes internos se anulan. Las fotos de clase incluyen un diagrama de esta retícula y de sus poligonales.
