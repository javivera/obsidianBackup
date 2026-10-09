# Teo 10 — Singularidades aisladas, polos y series de Laurent (08/10/2026)
## Singularidades aisladas y evitables

>[!Definition] Singularidad aislada
>Decimos que $a\in\mathbb C$ es una **singularidad aislada** de $f$ si, para algún $R>0$, la función $f$ es analítica en el disco perforado $$B(a,R)\setminus\{a\}=\{z\in\mathbb C:0<|z-a|<R\}.$$

^a10d01

>[!Definition] Singularidad evitable
>Una singularidad aislada $a$ de $f$ es **evitable** si existe una función $g:B(a,R)\to\mathbb C$ analítica tal que $$g(z)=f(z)\qquad\text{para }0<|z-a|<R.$$ La función $g$ se llama **extensión analítica** de $f$ al disco.

^a10d02

>[!remark] Valor de la extensión
>Si existe una extensión analítica $g$, su continuidad determina necesariamente el valor en el punto que faltaba: $$\lim_{z\to a}f(z)=g(a).$$ En particular, una extensión analítica, si existe, es única.

### Ejemplos iniciales

>[!example] La singularidad de $1/z$ no es evitable
>La función $f(z)=1/z$ es analítica en $\mathbb C\setminus\{0\}$, por lo que $0$ es una singularidad aislada, pero no evitable.
>
>>[!Proof]-
>>1. Supongamos que existe una extensión analítica $g$ en algún disco $B(0,R)$. Para $0<|z|<R$ se tendría $$z\,g(z)=z\,\frac1z=1.$$
>>2. Por continuidad de $g$ en $0$, al hacer $z\to0$ resulta $$1=\lim_{z\to0}z\,g(z)=0\cdot g(0)=0,$$ contradicción. Basta descartar una extensión local; no hace falta suponer que $g$ está definida en todo $\mathbb C$.

^a10e01

>[!example] La singularidad de $\sin z/z$ es evitable
>Para $z\neq0$, sea $f(z)=\sin z/z$. La extensión analítica al origen se obtiene dividiendo el desarrollo del seno por $z$.
>
>>[!Proof]-
>>1. Para $z\neq0$, $$\begin{aligned}\frac{\sin z}{z}&=\frac1z\sum_{k=0}^{\infty}\frac{(-1)^kz^{2k+1}}{(2k+1)!}\\&=\sum_{k=0}^{\infty}\frac{(-1)^kz^{2k}}{(2k+1)!}\\&=1-\frac{z^2}{3!}+\frac{z^4}{5!}-\frac{z^6}{7!}+\cdots.\end{aligned}$$
>>2. La última serie converge para todo $z\in\mathbb C$: para $z\neq0$, el cociente de los módulos de dos términos sucesivos es $$\frac{|z|^2}{(2k+3)(2k+2)}\xrightarrow[k\to\infty]{}0,$$ y en $z=0$ solo queda el término constante. Por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], su suma $g$ es entera.
>>3. Para $z\neq0$, $g(z)=f(z)$, y en el origen $$g(0)=1.$$ Por tanto, $0$ es una singularidad evitable de $f$.

^a10e02

### Una obstrucción mediante integrales

>[!Proposition] Las integrales cerradas se anulan si la singularidad es evitable
>Si $a$ es evitable y $f$ se extiende analíticamente a $B(a,R)$, entonces $$\int_\gamma f(z)\,dz=0$$ para toda curva cerrada rectificable $\gamma$ contenida en $B(a,R)\setminus\{a\}$.
>
>>[!Proof]-
>>1. Sea $g$ la extensión. Como $\gamma$ no pasa por $a$, $$\int_\gamma f(z)\,dz=\int_\gamma g(z)\,dz.$$
>>2. La homotopía $$H(s,t)=(1-s)\gamma(t)+sa$$ contrae $\gamma$ a $a$ dentro del disco, porque $$|H(s,t)-a|=(1-s)|\gamma(t)-a|<R.$$ Aplicamos [[FA - Teo8#^8a0012|Cauchy v2]] a $g$ y obtenemos la integral nula.

^a10b01

>[!example] Otra forma de descartar que $1/z$ sea evitable
>Para $0<r<R$, tomamos $\gamma(t)=r e^{2\pi it}$, $0\leq t\leq1$. Entonces $$\int_\gamma\frac{dz}{z}=\int_0^1\frac{2\pi i r e^{2\pi it}}{r e^{2\pi it}}\,dt=2\pi i\neq0.$$ Esto contradice [[FA - Teo10#^a10b01|integrales cerradas de una extensión]] si se supone que existe una extensión al disco.

## Criterio de singularidad evitable

>[!Theorem] Criterio mediante $(z-a)f(z)$
>Sea $f$ analítica en $B(a,R)\setminus\{a\}$. La singularidad $a$ es evitable si y solo si $$\lim_{z\to a}(z-a)f(z)=0.\qquad (*)$$
>
>>[!Proof]-
>>1. **Implicación directa.** Si $F$ es la extensión analítica, por continuidad $$\lim_{z\to a}(z-a)f(z)=\lim_{z\to a}(z-a)F(z)=0\cdot F(a)=0.$$
>>2. **Construcción para la recíproca.** Supongamos $(*)$ y definamos $$g(z)=\begin{cases}(z-a)f(z),&z\neq a,\\0,&z=a.\end{cases}$$ Por $(*)$, $g$ es continua en $a$; fuera de $a$ es analítica por [[FA - Teo2#^e54e60|reglas de derivación]]. Probaremos que $g$ es analítica también en $a$.
>>3. **Objetivo de la prueba.** Sea $\Delta\subset B(a,R)$ un triángulo cerrado no degenerado y sea $T=\partial\Delta$ su borde orientado positivamente. Vamos a comprobar $$\int_T g(z)\,dz=0.$$ Los triángulos degenerados dan integral nula por cancelación de segmentos recorridos en sentidos opuestos.
>>4. **Caso 1: $a\notin\Delta$.** El compacto convexo $\Delta$ tiene un entorno abierto convexo $U$ contenido en $B(a,R)\setminus\{a\}$. En efecto, basta engrosar $\Delta$ con discos de un radio menor que sus distancias a $a$ y al complemento de $B(a,R)$. En $U$, $g$ es analítica y $T$ se contrae a un punto mediante segmentos; por [[FA - Teo8#^8a0012|Cauchy v2]], $$\int_T g(z)\,dz=0.$$
>>5. **Caso 2: $a$ es un vértice.** Escribimos $T=[a,b]+[b,c]+[c,a]$. Para $0<t<1$, elegimos $$x=a+t(b-a),\qquad y=a+t(c-a).$$ Sean $T_t=[a,x]+[x,y]+[y,a]$ y $Q_t=[x,b]+[b,c]+[c,y]+[y,x]$. Al sumar las integrales, los segmentos $[x,y]$ y $[y,x]$ se cancelan y los segmentos sobre cada lado se concatenan, de modo que $$\int_T g=\int_{Q_t}g+\int_{T_t}g.$$
>>6. **El cuadrilátero evita el punto singular.** El cuadrilátero cerrado limitado por $Q_t$ es compacto, convexo y no contiene a $a$. Como en el paso 4, tiene un entorno abierto convexo contenido en $B(a,R)\setminus\{a\}$, donde $g$ es analítica. Por [[FA - Teo8#^8a0012|Cauchy v2]], $$\int_{Q_t}g=0,\qquad\int_T g=\int_{T_t}g.$$
>>7. **Estimación en el triángulo pequeño.** Sea $L=\ell(T)>0$ y fijemos $\varepsilon>0$. Como $g(z)\to0$ cuando $z\to a$, existe $\delta>0$ tal que $|g(z)|<\varepsilon/L$ si $|z-a|<\delta$. Elegimos $t$ tan pequeño que $T_t\subset B(a,\delta)$. Todos sus lados tienen longitud $t$ veces la del lado correspondiente de $T$, así que $\ell(T_t)=tL$. Por la estimación de la integral, $$\left|\int_T g\right|=\left|\int_{T_t}g\right|\leq\max_{z\in T_t}|g(z)|\,\ell(T_t)<\frac{\varepsilon}{L}\,tL=t\varepsilon<\varepsilon.$$ Por tanto, $\int_T g=0$.
>>8. **Caso 3: $a$ está sobre un lado y no es un vértice.** Si, por ejemplo, $a\in[b,c]$, unimos $a$ con el vértice opuesto. El triángulo original queda dividido en dos triángulos que tienen a $a$ como vértice. Sus bordes, orientados positivamente, se cancelan sobre el segmento interior y suman $T$. Aplicando los pasos 5–7 a cada uno, obtenemos $$\int_T g=0+0=0.$$
>>9. **Caso 4: $a$ está en el interior.** Unimos $a$ con los tres vértices y obtenemos tres triángulos $\Delta_1,\Delta_2,\Delta_3$, todos con vértice $a$. Los segmentos interiores se recorren en sentidos opuestos y se cancelan. Por los pasos 5–7, $$\int_T g=\sum_{j=1}^3\int_{\partial\Delta_j}g=0.$$
>>10. **Analiticidad de $g$.** Hemos tratado todos los triángulos del disco y $g$ es continua. Por [[FA - Teo7#^e4b901|Morera]], $g$ es analítica en $B(a,R)$.
>>11. **Extensión de $f$.** Como $g(a)=0$, por [[FA - Teo2#^6fedda|desarrollo de Taylor]] escribimos, cerca de $a$, $$g(z)=\sum_{n=1}^{\infty}c_n(z-a)^n=(z-a)\sum_{n=0}^{\infty}c_{n+1}(z-a)^n.$$ La serie $$F(z)=\sum_{n=0}^{\infty}c_{n+1}(z-a)^n$$ es analítica por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]] y, para $z\neq a$ cercano a $a$, $$F(z)=\frac{g(z)}{z-a}=f(z).$$ Definiendo $F=f$ en el resto del disco perforado, ambas expresiones coinciden donde se superponen y obtenemos una extensión analítica a todo $B(a,R)$.

^a10f01

>[!remark] Precisiones de la demostración manuscrita
>En el primer caso, el punto $a$ debe quedar fuera del **triángulo lleno**, no solamente fuera de la curva que forma su borde. También se hizo explícito el caso en que $a$ pertenece a un lado sin ser vértice. La continuidad de $g$ no basta por sí sola para concluir analiticidad: esa es la función del argumento de los triángulos y de Morera.

>[!Corollary] Criterio mediante un límite finito
>Una singularidad aislada $a$ de $f$ es evitable si y solo si existe un límite finito $$\lim_{z\to a}f(z)=L\in\mathbb C.$$ En ese caso, la extensión toma el valor $F(a)=L$.
>
>>[!Proof]-
>>1. Si existe extensión, la continuidad da el límite finito y su valor, como se observó al comienzo.
>>2. Si $f(z)\to L\in\mathbb C$, entonces $$\lim_{z\to a}(z-a)f(z)=0\cdot L=0.$$ Aplicamos [[FA - Teo10#^a10f01|criterio de singularidad evitable]]; la continuidad de la extensión obliga a que $F(a)=L$.

^a10c01

## Polos y singularidades esenciales

>[!Definition] Polo
>Sea $a$ una singularidad aislada de $f$. Decimos que $a$ es un **polo** si $$\lim_{z\to a}|f(z)|=+\infty.$$ Es decir, para todo $M>0$ existe $\delta>0$ tal que $$0<|z-a|<\delta\quad\Longrightarrow\quad|f(z)|>M.$$

^a10d03

>[!Definition] Singularidad esencial
>Una singularidad aislada que no es evitable y tampoco es un polo se llama **singularidad esencial**.

^a10d04

>[!example] Las funciones $1/(z-a)^m$
>Si $m\geq1$, la función $f(z)=1/(z-a)^m$ es analítica para $z\neq a$ y $$|f(z)|=|z-a|^{-m}\xrightarrow[z\to a]{}+\infty.$$ Por tanto, $a$ es un polo. Su orden se determina más abajo.

>[!example] La función $e^{1/z}$ tiene una singularidad esencial en $0$
>Sea $f(z)=e^{1/z}$, analítica en $\mathbb C\setminus\{0\}$.
>
>>[!Proof]-
>>1. Sobre el eje real negativo, $$\lim_{x\to0^-}e^{1/x}=0,$$ mientras que sobre el eje real positivo $$\lim_{x\to0^+}e^{1/x}=+\infty.$$
>>2. No hay límite finito en $0$, por lo que [[FA - Teo10#^a10c01|criterio mediante un límite finito]] descarta que la singularidad sea evitable.
>>3. Tampoco se cumple $|f(z)|\to+\infty$, ya que, tomando $x_n=-1/n$, $$|f(x_n)|=e^{-n}\xrightarrow[n\to\infty]{}0.$$ Por [[FA - Teo10#^a10d04|singularidad esencial]], $0$ es esencial para $e^{1/z}$.

^a10e03

>[!warning] Errata del manuscrito
>En el ejemplo de la página 4 se menciona por error una singularidad esencial «de $1/z$». La función del ejemplo es **$e^{1/z}$**; $1/z$ tiene un polo.

## Representación de una función con un polo

>[!Proposition] Un polo puede eliminarse multiplicando por una potencia
>Sean $G\subseteq\mathbb C$ una región, $a\in G$ y $f$ analítica en $G\setminus\{a\}$. Si $a$ es un polo, existen $m\geq1$ y una función $g:G\to\mathbb C$ analítica, con $g(a)\neq0$, tales que $$f(z)=\frac{g(z)}{(z-a)^m}\qquad\text{para }z\in G\setminus\{a\}.$$
>
>>[!Proof]-
>>1. **El recíproco está definido cerca del polo.** Como $|f(z)|\to+\infty$, existe $r>0$ tal que $B(a,r)\subseteq G$ y $$|f(z)|>1\qquad\text{si }0<|z-a|<r.$$ En particular, $f$ no se anula en ese disco perforado, y $1/f$ es analítica allí por [[FA - Teo2#^e54e60|reglas de derivación]].
>>2. **Extensión del recíproco.** Por la definición de polo, $$\frac1{f(z)}\xrightarrow[z\to a]{}0,\qquad\frac{z-a}{f(z)}\xrightarrow[z\to a]{}0.$$ Aplicamos [[FA - Teo10#^a10f01|criterio de singularidad evitable]] a $1/f$ y obtenemos una función $h$ analítica en $B(a,r)$ con $$h(z)=\begin{cases}1/f(z),&z\neq a,\\0,&z=a.\end{cases}$$
>>3. **Factorización del cero de $h$.** La función $h$ no es idénticamente nula, pues $h(z)=1/f(z)\neq0$ en el disco perforado. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], existe un primer coeficiente no nulo, de índice $m\geq1$. Así, cerca de $a$, $$h(z)=\sum_{n=m}^{\infty}c_n(z-a)^n=(z-a)^m h_1(z),\qquad h_1(z)=\sum_{j=0}^{\infty}c_{j+m}(z-a)^j,\qquad h_1(a)=c_m\neq0.$$ La función $h_1$ es analítica por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]].
>>4. **Construcción local del numerador.** Por continuidad, $h_1$ no se anula en un disco suficientemente pequeño alrededor de $a$. Allí, $1/h_1$ es analítica por [[FA - Teo2#^e54e60|reglas de derivación]]. Para $z\neq a$ en ese disco, $$\frac1{f(z)}=(z-a)^m h_1(z)\quad\Longrightarrow\quad(z-a)^m f(z)=\frac1{h_1(z)}.$$
>>5. **Construcción global de $g$.** Definimos $$g(z)=\begin{cases}(z-a)^m f(z),&z\neq a,\\1/h_1(a),&z=a.\end{cases}$$ Cerca de $a$ coincide con $1/h_1$; fuera de $a$ es un producto de funciones analíticas. Por tanto, $g$ es analítica en todo $G$, $$g(a)=\frac1{h_1(a)}\neq0,$$ y, para $z\neq a$, $$f(z)=\frac{g(z)}{(z-a)^m}.$$

^a10b02

>[!warning] El recíproco se usa solamente cerca del polo
>La función $f$ puede tener ceros en otros puntos de $G$, de modo que $1/f$ no tiene por qué estar definida en todo $G\setminus\{a\}$. La prueba se realiza localmente con $1/f$ y luego define el numerador global mediante $(z-a)^m f(z)$. No se afirma que $g$ carezca de ceros en todo $G$; solo se necesita $g(a)\neq0$.

## Orden de un polo

>[!Definition] Orden
>Si $a$ es un polo de $f$, su **orden** es el menor entero $m\geq1$ para el que $(z-a)^m f(z)$ tiene una singularidad evitable en $a$. La existencia de tal entero queda garantizada por [[FA - Teo10#^a10b02|representación de una función con un polo]].

^a10d05

>[!Proposition] El numerador no se anula en el polo cuando el exponente es mínimo
>Si $a$ es un polo de orden $m$ y $$f(z)=\frac{g(z)}{(z-a)^m},$$ con $g$ analítica en un entorno de $a$, entonces $g(a)\neq0$.
>
>>[!Proof]-
>>1. Si $g(a)=0$, $g$ no puede ser idénticamente nula cerca de $a$, pues eso daría $f=0$ cerca del supuesto polo. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], existe $k\geq1$ y una función $h$ analítica cerca de $a$, con $h(a)\neq0$, tales que $$g(z)=(z-a)^k h(z).$$ La analiticidad de $h$ se obtiene de [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]] al retirar los primeros $k$ factores del desarrollo.
>>2. Si $k\geq m$, entonces $$f(z)=(z-a)^{k-m}h(z)$$ se extiende analíticamente a $a$. Su límite es finito, lo que contradice que $|f(z)|\to+\infty$.
>>3. Si $k<m$, entonces $$f(z)=\frac{h(z)}{(z-a)^{m-k}},\qquad(z-a)^{m-k}f(z)=h(z).$$ Por tanto, $m-k$ es un entero positivo menor que $m$ que elimina la singularidad, contradiciendo [[FA - Teo10#^a10d05|orden de un polo]]. En ambos casos hay contradicción; luego $g(a)\neq0$.

^a10b03

>[!exercise] Recíproco: reconocer un polo y su orden
>Sea $m\geq1$ y supongamos que $$f(z)=\frac{g(z)}{(z-a)^m}$$ cerca de $a$, con $g$ analítica y $g(a)\neq0$. Probar que $a$ es un polo de orden $m$.
>
>>[!Proof]-
>>1. Por continuidad de $g$, existe $r>0$ tal que $$|g(z)|\geq\frac{|g(a)|}{2}>0\qquad\text{si }|z-a|<r.$$ Así, $$|f(z)|=\frac{|g(z)|}{|z-a|^m}\geq\frac{|g(a)|}{2|z-a|^m}\xrightarrow[z\to a]{}+\infty,$$ por lo que $a$ es un polo.
>>2. El exponente $m$ elimina la singularidad, pues $$(z-a)^m f(z)=g(z)$$ admite la extensión $g$.
>>3. Si $1\leq j<m$, entonces $$|(z-a)^j f(z)|=\frac{|g(z)|}{|z-a|^{m-j}}\geq\frac{|g(a)|}{2|z-a|^{m-j}}\xrightarrow[z\to a]{}+\infty.$$ No puede tener extensión analítica con valor finito en $a$. Por [[FA - Teo10#^a10d05|orden de un polo]], el menor exponente que elimina la singularidad es exactamente $m$.

^a10e04

>[!example] Orden de $1/(z-a)^m$
>Tomando $g\equiv1$ en [[FA - Teo10#^a10e04|reconocer un polo y su orden]], resulta que $a$ es un polo de orden $m$ de $1/(z-a)^m$.

## Parte singular y parte analítica en un polo

>[!Proposition] Descomposición cerca de un polo de orden $m$
>Si $f$ tiene un polo de orden $m$ en $a$, entonces, en algún disco perforado alrededor de $a$, $$f(z)=\frac{a_0}{(z-a)^m}+\frac{a_1}{(z-a)^{m-1}}+\cdots+\frac{a_{m-1}}{z-a}+h(z),\qquad a_0\neq0,$$ donde $h$ es analítica también en $a$. La suma finita de potencias negativas se llama **parte singular** o **parte principal**; $h$ es la **parte analítica**.
>
>>[!Proof]-
>>1. Por [[FA - Teo10#^a10d05|orden de un polo]] y [[FA - Teo10#^a10b03|numerador no nulo en el polo]], escribimos $$f(z)=\frac{g(z)}{(z-a)^m},\qquad g(a)\neq0.$$ Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], cerca de $a$ $$g(z)=\sum_{n=0}^{\infty}a_n(z-a)^n,\qquad a_0=g(a)\neq0.$$
>>2. Para $z\neq a$, dividimos el desarrollo por $(z-a)^m$ y separamos los primeros $m$ términos: $$\begin{aligned}f(z)&=\frac{\sum_{n=0}^{\infty}a_n(z-a)^n}{(z-a)^m}\\&=\sum_{n=0}^{m-1}a_n(z-a)^{n-m}+\sum_{n=m}^{\infty}a_n(z-a)^{n-m}\\&=\frac{a_0}{(z-a)^m}+\frac{a_1}{(z-a)^{m-1}}+\cdots+\frac{a_{m-1}}{z-a}+\sum_{j=0}^{\infty}a_{j+m}(z-a)^j.\end{aligned}$$
>>3. Definimos $$h(z)=\sum_{j=0}^{\infty}a_{j+m}(z-a)^j.$$ Para $z\neq a$, su convergencia absoluta se obtiene de la de la cola de Taylor de $g$, multiplicando por $|z-a|^{-m}$; en $z=a$ la serie vale $a_m$. Por [[FA - Teo2#^63c6c5|analiticidad de las series de potencias]], $h$ es analítica en el disco, incluido su centro.

^a10b04

## Series bilaterales

### Series de números complejos

>[!Definition] Convergencia absoluta de una serie bilateral
>Sea $(z_n)_{n\in\mathbb Z}$ una familia de números complejos. Decimos que $$\sum_{n=-\infty}^{\infty}z_n$$ **converge absolutamente** si ambas series $$\sum_{n=0}^{\infty}|z_n|\qquad\text{y}\qquad\sum_{n=1}^{\infty}|z_{-n}|$$ convergen. En ese caso, su suma se define como $$\sum_{n=-\infty}^{\infty}z_n=\sum_{n=1}^{\infty}z_{-n}+\sum_{n=0}^{\infty}z_n.$$

^a10d06

### Series de funciones

>[!Definition] Convergencia absoluta y uniforme de una serie bilateral de funciones
>Sean $X$ un espacio métrico y $u_n:X\to\mathbb C$ para cada $n\in\mathbb Z$. La serie $$\sum_{n=-\infty}^{\infty}u_n(s)$$ **converge absolutamente en $X$** si, para cada $s\in X$, la serie numérica correspondiente converge absolutamente.
>Decimos que **converge uniformemente en $X$** si las dos series $$\sum_{n=1}^{\infty}u_{-n}(s)\qquad\text{y}\qquad\sum_{n=0}^{\infty}u_n(s)$$ convergen uniformemente en $X$. Su suma es $$\sum_{n=-\infty}^{\infty}u_n(s)=\sum_{n=1}^{\infty}u_{-n}(s)+\sum_{n=0}^{\infty}u_n(s).$$

^a10d07

>[!exercise] Sumas parciales simétricas
>Si la serie bilateral de funciones converge uniformemente en $X$ en el sentido anterior, probar que $$\sum_{n=-\infty}^{\infty}u_n(s)=\lim_{N\to\infty}\sum_{k=-N}^{N}u_k(s),$$ con convergencia uniforme. El caso de una serie numérica se obtiene tomando $X$ con un solo punto.
>
>>[!Proof]-
>>1. Sean $$U_-(s)=\sum_{n=1}^{\infty}u_{-n}(s),\qquad U_+(s)=\sum_{n=0}^{\infty}u_n(s),\qquad U=U_-+U_+.$$ Las sumas parciales simétricas se separan exactamente como $$\sum_{k=-N}^{N}u_k(s)=\sum_{n=1}^{N}u_{-n}(s)+\sum_{n=0}^{N}u_n(s).$$
>>2. Por la desigualdad triangular, $$\left|U(s)-\sum_{k=-N}^{N}u_k(s)\right|\leq\left|U_-(s)-\sum_{n=1}^{N}u_{-n}(s)\right|+\left|U_+(s)-\sum_{n=0}^{N}u_n(s)\right|.$$
>>3. Dado $\varepsilon>0$, la convergencia uniforme de las dos series permite elegir $N_0$ para que, si $N\geq N_0$, cada término del lado derecho sea menor que $\varepsilon/2$ para todo $s\in X$. En consecuencia, $$\left|U(s)-\sum_{k=-N}^{N}u_k(s)\right|<\varepsilon\qquad\text{para todo }s\in X,$$ que prueba la convergencia uniforme.

^a10e05

>[!remark] El límite simétrico no reemplaza la definición
>El ejercicio establece una implicación: la convergencia de las dos mitades da el límite de las sumas simétricas. La existencia de ese límite simétrico, por sí sola, no garantiza la convergencia de cada mitad.

## Series de Laurent

### Notación para anillos

>[!Definition] Anillo centrado en $a$
>Para $0\leq R_1<R_2\leq+\infty$, escribimos $$\operatorname{An}(a;R_1,R_2)=\{z\in\mathbb C:R_1<|z-a|<R_2\}.$$ Si $R_1=0$, el centro $a$ sigue excluido: se trata de un disco perforado, no de un disco completo.

^a10d08

### Desarrollo en un anillo

>[!Theorem] Desarrollo de Laurent
>Sea $f$ analítica en $$A=\operatorname{An}(a;R_1,R_2),\qquad0\leq R_1<R_2\leq+\infty.$$ Existen coeficientes únicos $(a_n)_{n\in\mathbb Z}$ tales que $$f(z)=\sum_{n=-\infty}^{\infty}a_n(z-a)^n\qquad(z\in A).$$ La serie converge absolutamente en cada punto de $A$ y uniformemente en cada subanillo $$\operatorname{An}(a;r_1,r_2),\qquad R_1<r_1<r_2<R_2.$$
>Los coeficientes se calculan mediante $$a_n=\frac1{2\pi i}\int_{\gamma_r}\frac{f(w)}{(w-a)^{n+1}}\,dw,\qquad n\in\mathbb Z,$$ donde $$\gamma_r(t)=a+r e^{2\pi it},\qquad0\leq t\leq1,\qquad R_1<r<R_2,$$ es una circunferencia recorrida una vez en sentido positivo. El valor no depende del radio $r$ elegido en el anillo.

^a10f02

>[!info] Hasta dónde llega la clase
>La página 8 enuncia el desarrollo de Laurent, su convergencia, la fórmula de los coeficientes y la unicidad, pero **no incluye su demostración**. Se ha precisado la curva de integración como una circunferencia positiva contenida en el anillo; una curva cerrada arbitraria no permite usar la fórmula sin condiciones adicionales de índice.
