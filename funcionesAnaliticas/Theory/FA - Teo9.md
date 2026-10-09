# Teo 9 — Recuento local de raíces, aplicación abierta y Goursat

> [!info] Fuente y criterio de transcripción
> PDF de 4 páginas recibido en el grupo de WhatsApp **Analiticas** el 06/10/2026. Se conserva el orden del manuscrito y se pasan a texto las demostraciones fotografiadas del pizarrón. Se completan las cuentas abreviadas y se explicitan las hipótesis necesarias para el recuento de raíces. La fecha de recepción no identifica necesariamente la fecha de la clase.

## Ejemplo: integral de una derivada logarítmica

>[!example] Integral sobre la circunferencia de radio 2
>Sea $$\gamma(t)=2e^{2\pi it},\qquad t\in[0,1].$$ Calcular $$\int_\gamma\frac{2z+1}{z^2+z+1}\,dz.$$
>
>>[!Proof]- Cálculo
>>1. Tomamos $f(z)=z^2+z+1$, de modo que $f'(z)=2z+1$. Completando el cuadrado, $$f(z)=0\iff\left(z+\frac12\right)^2=-\frac34,$$ por lo que sus ceros son $$w_1=\frac{-1+i\sqrt3}{2},\qquad w_2=\frac{-1-i\sqrt3}{2}.$$
>>2. Ambos tienen módulo $1$, pues $$|w_j|^2=\frac{1+3}{4}=1.$$ Además, $f'(w_1)=i\sqrt3\neq0$ y $f'(w_2)=-i\sqrt3\neq0$, así que ambos ceros son simples y ninguno pertenece a la traza de $\gamma$.
>>3. Para justificar sus índices, fijamos $w\in\{w_1,w_2\}$ y consideramos $$H(s,t)=2e^{2\pi it}-sw,\qquad s,t\in[0,1].$$ Como $|H(s,t)|\geq2-s|w|\geq1$, es una homotopía de curvas cerradas en $\mathbb C\setminus\{0\}$. Por [[FA - Teo8#^8a0014|invariancia del índice]] y [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(\gamma,w)=n(\gamma-w,0)=n(\gamma,0)=\frac1{2\pi i}\int_0^1\frac{4\pi i e^{2\pi it}}{2e^{2\pi it}}\,dt=1.$$
>>4. Aplicamos [[FA - Teo8#^8a0043|recuento de ceros]] en el disco $B(0,3)$, donde $\gamma$ es homotópica a cero por la contracción $K(s,t)=(1-s)\gamma(t)$. Así, $$\int_\gamma\frac{2z+1}{z^2+z+1}\,dz=2\pi i\bigl(n(\gamma,w_1)+n(\gamma,w_2)\bigr)=2\pi i(1+1)=\boxed{4\pi i}.$$

^9a0011

## Aplicación: índice de la curva imagen

>[!Corollary] Recuento de preimágenes mediante el índice
>Sean $G$ una región, $f:G\to\mathbb C$ analítica y $\gamma:[0,1]\to G$ una curva cerrada rectificable homotópica a cero en $G$. Definimos $\sigma=f\circ\gamma$. Sea $\alpha\notin\{\sigma\}$ y supongamos que $f-\alpha$ no es idénticamente nula y tiene una lista finita de ceros $z_1(\alpha),\ldots,z_m(\alpha)$ en $G$, repetidos según su multiplicidad. Entonces $$n(\sigma,\alpha)=\sum_{k=1}^m n\bigl(\gamma,z_k(\alpha)\bigr).$$
>
>>[!Proof]-
>>1. La curva $\sigma$ es cerrada y rectificable. En efecto, $f'$ es continua y queda acotada en un entorno compacto de la traza de $\gamma$; en discos pequeños de ese entorno, integrar $f'$ sobre segmentos da una cota local de Lipschitz para $f$. Subdividiendo $\gamma$ en tramos contenidos en esos discos, la longitud de cada imagen queda acotada por una constante por la longitud del tramo.
>>2. Por [[FA - Teo6#^1e9a3c|índice de una curva]] y el cambio de variable a lo largo de $\sigma=f\circ\gamma$, $$n(\sigma,\alpha)=\frac1{2\pi i}\int_\sigma\frac{dw}{w-\alpha}=\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)-\alpha}\,dz.$$ Si $\gamma$ es $C^1$ a trozos, la cuenta parametrizada es $$\frac1{2\pi i}\int_0^1\frac{f'(\gamma(t))\gamma'(t)}{f(\gamma(t))-\alpha}\,dt.$$
>>3. Aplicamos [[FA - Teo8#^8a0044|recuento de soluciones]] a la última integral y obtenemos la igualdad del enunciado.

^9a0012

>[!warning] Hipótesis omitidas en el manuscrito
>La fórmula del apunte se escribe para una curva cerrada rectificable sin repetir las hipótesis del recuento de ceros. Aquí se usa la hipótesis suficiente $\gamma\simeq_G0$; también basta que su índice sea nulo fuera de $G$. La lista de ceros se cuenta con multiplicidad. En la aplicación local siguiente, la curva es una circunferencia contenida con su disco en el dominio, y la finitud de los ceros relevantes se justifica en la demostración.

## Raíces simples y comportamiento local

>[!Definition] Raíz simple
>Un punto $a$ es una **raíz simple** de $f$ si es un cero de multiplicidad $1$, en el sentido de [[FA - Teo8#^8a0041|multiplicidad de un cero]].

^9a0021

>[!Theorem] Recuento local de raíces
>Sea $f$ analítica en $B(a,R)$ y sea $\alpha=f(a)$. Si $f-\alpha$ tiene en $a$ un cero de multiplicidad $m\geq1$, existen $\varepsilon,\delta>0$, con $\varepsilon<R$, tales que, para cada $\tau$ con $|\tau-\alpha|<\delta$, la ecuación $f(z)=\tau$ tiene exactamente $m$ raíces en $B(a,\varepsilon)$, **contadas con multiplicidad**. Si $\tau\neq\alpha$, esas raíces son simples y, por tanto, hay exactamente $m$ puntos distintos. En particular, $$B\bigl(f(a),\delta\bigr)\subseteq f\bigl(B(a,\varepsilon)\bigr).\qquad (**)$$
>
>>[!Proof]-
>>1. Por [[FA - Teo8#^8a0041|multiplicidad de un cero]], cerca de $a$ escribimos $$f(z)-\alpha=(z-a)^m g(z),\qquad g(a)\neq0,$$ con $g$ analítica. Derivando, $$f'(z)=(z-a)^{m-1}h(z),\qquad h(z)=m g(z)+(z-a)g'(z).$$ Como $h(a)=m g(a)\neq0$, la continuidad de $g$ y $h$ permite elegir $0<\varepsilon<R/2$ de modo que ambas sean no nulas en $\overline{B(a,2\varepsilon)}$. Así, $a$ es el único cero de $f-\alpha$ en ese disco, y $f'(z)\neq0$ cuando $0<|z-a|\leq2\varepsilon$.
>>2. Sea $$\gamma(t)=a+\varepsilon e^{2\pi it},\qquad t\in[0,1],\qquad\sigma=f\circ\gamma.$$ La traza de $\sigma$ es compacta y no contiene a $\alpha$. Por lo tanto, $$d=\min_{t\in[0,1]}|\sigma(t)-\alpha|>0.$$ Elegimos $0<\delta<d$, con lo que $B(\alpha,\delta)\cap\{\sigma\}=\varnothing$.
>>3. Fijemos $\tau\in B(\alpha,\delta)$. Las curvas $\sigma-\alpha$ y $\sigma-\tau$ son homotópicas en $\mathbb C\setminus\{0\}$ mediante $$H(s,t)=\sigma(t)-\alpha-s(\tau-\alpha).$$ En efecto, $$|H(s,t)|\geq|\sigma(t)-\alpha|-s|\tau-\alpha|\geq d-|\tau-\alpha|>0.$$ Por [[FA - Teo8#^8a0014|invariancia del índice]], $$n(\sigma,\tau)=n(\sigma,\alpha).$$
>>4. Los ceros de $f-\tau$ en $\overline{B(a,\varepsilon)}$ son finitos: si hubiera infinitos, la compacidad daría un punto de acumulación en $B(a,R)$, y [[FA - Teo5#^6ef1c1|identidad]] implicaría $f\equiv\tau$, contradiciendo la multiplicidad finita de $f-\alpha$ en $a$. No hay ceros sobre $\gamma$, por la elección de $\delta$. Podemos elegir un radio $r$ con $\varepsilon<r<2\varepsilon$ tal que los únicos ceros de $f-\tau$ en $B(a,r)$ sean los situados en $B(a,\varepsilon)$: de no existir tal radio, habría ceros acercándose a la circunferencia $|z-a|=\varepsilon$, y la continuidad daría un cero sobre ella.
>>5. Para cada $z\in B(a,\varepsilon)$, la homotopía $$K(s,t)=\varepsilon e^{2\pi it}-s(z-a)$$ evita $0$, ya que $|K(s,t)|\geq\varepsilon-|z-a|>0$. Por [[FA - Teo8#^8a0014|invariancia del índice]] y [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(\gamma,z)=n(\gamma-z,0)=\frac1{2\pi i}\int_0^1\frac{2\pi i\varepsilon e^{2\pi it}}{\varepsilon e^{2\pi it}}\,dt=1.$$
>>6. Aplicamos [[FA - Teo9#^9a0012|recuento de preimágenes]] en $B(a,2\varepsilon)$ para $\alpha$, donde su único cero es $a$ con multiplicidad $m$, y en el disco $B(a,r)$ del paso 4 para $\tau$. En ambos discos $\gamma$ se contrae a $a$ mediante $(1-s)\gamma(t)+sa$. Si $z_1(\tau),\ldots,z_N(\tau)$ es la lista de raíces interiores repetidas con multiplicidad, entonces $$N=\sum_{k=1}^N n\bigl(\gamma,z_k(\tau)\bigr)=n(\sigma,\tau)=n(\sigma,\alpha)=m\,n(\gamma,a)=m.$$
>>7. Si $\tau\neq\alpha$, ninguna raíz es $a$. Por el paso 1, $f'$ no se anula en esas raíces. Para ver que son simples, si $f(z)-\tau=(z-b)^q u(z)$ con $u(b)\neq0$, al derivar resulta $f'(b)=u(b)$ cuando $q=1$, mientras que $f'(b)=0$ cuando $q\geq2$. Como $f'(b)\neq0$, necesariamente $q=1$. Finalmente, $m\geq1$ garantiza una preimagen de cada $\tau\in B(\alpha,\delta)$, lo que prueba $(**)$.

^9a0022

>[!remark] Cómo se cuentan las raíces
>Para $\tau=\alpha$, el único punto solución en el disco es $a$, pero cuenta $m$ veces. Para $\tau\neq\alpha$, hay $m$ soluciones distintas, todas simples. Esta distinción precisa la frase «exactamente $m$ raíces» del manuscrito.

## Teorema de la aplicación abierta

>[!Theorem] Aplicación abierta
>Sean $G\subseteq\mathbb C$ una región y $f:G\to\mathbb C$ analítica y no constante. Entonces $f$ es una aplicación abierta: para todo abierto $U\subseteq G$, la imagen $f(U)$ es abierta en $\mathbb C$.
>
>>[!Proof]-
>>1. Sea $U\subseteq G$ abierto y sea $\alpha\in f(U)$. Elegimos $a\in U$ con $f(a)=\alpha$ y $R>0$ tal que $B(a,R)\subseteq U$.
>>2. La función $f-\alpha$ no puede ser idénticamente nula en $B(a,R)$, porque [[FA - Teo5#^6ef1c1|identidad]] implicaría $f\equiv\alpha$ en $G$. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], existe un primer coeficiente no nulo de $f-\alpha$ en $a$, de orden $m\geq1$, que da un cero de multiplicidad $m$.
>>3. Aplicamos [[FA - Teo9#^9a0022|recuento local de raíces]] en $B(a,R)$. Existen $\varepsilon,\delta>0$ tales que $$\alpha\in B(\alpha,\delta)\subseteq f\bigl(B(a,\varepsilon)\bigr)\subseteq f\bigl(B(a,R)\bigr)\subseteq f(U).$$ Así, cada punto de $f(U)$ tiene un disco abierto contenido en $f(U)$.

^9a0031

## Teorema de Goursat

>[!Theorem] Goursat
>Sea $G\subseteq\mathbb C$ abierto y sea $f:G\to\mathbb C$ complejamente diferenciable en cada punto de $G$. Entonces $f$ es analítica en $G$. No se supone que $f'$ sea continua.
>
>>[!Proof]-
>>1. **Objetivo local.** Fijamos $x\in G$ y elegimos $R>0$ tal que $\overline{B(x,R)}\subseteq G$. Sea $\Delta\subset B(x,R)$ un triángulo cerrado no degenerado, de vértices $a,b,c$, y sea $T=\partial\Delta=[a,b]+[b,c]+[c,a]$ su borde orientado positivamente. Probaremos que $\int_T f(z)\,dz=0$ y luego aplicaremos [[FA - Teo7#^e4b901|Morera]] en el disco. Los triángulos degenerados tienen integral nula por cancelación de los segmentos recorridos en sentidos opuestos.
>>2. **Subdivisión en cuatro triángulos.** Unimos los puntos medios de los lados de $\Delta$. Obtenemos cuatro triángulos cerrados $\Delta_1,\ldots,\Delta_4$, con bordes positivamente orientados $T_1,\ldots,T_4$. Los lados interiores se recorren una vez en cada sentido y se cancelan, así que $$\int_T f=\sum_{j=1}^4\int_{T_j}f.$$ Por la desigualdad triangular, $$\left|\int_T f\right|\leq\sum_{j=1}^4\left|\int_{T_j}f\right|\leq4\max_{1\leq j\leq4}\left|\int_{T_j}f\right|.$$
>>3. **Elección del subtriángulo.** Elegimos $\Delta^{(1)}$ entre los cuatro subtriángulos de modo que su borde $T^{(1)}$ satisfaga $$\left|\int_T f\right|\leq4\left|\int_{T^{(1)}}f\right|.$$ Como los subtriángulos son semejantes al original con razón $1/2$, $$\ell\bigl(T^{(1)}\bigr)=\frac12\ell(T),\qquad\operatorname{diam}\Delta^{(1)}=\frac12\operatorname{diam}\Delta.$$
>>4. **Iteración.** Repetimos la subdivisión y la elección en cada triángulo seleccionado. Con $\Delta^{(0)}=\Delta$ y $T^{(0)}=T$, obtenemos compactos encajados $$\Delta\supseteq\Delta^{(1)}\supseteq\Delta^{(2)}\supseteq\cdots$$ y bordes $T^{(n)}=\partial\Delta^{(n)}$ tales que $$\left|\int_T f\right|\leq4^n\left|\int_{T^{(n)}}f\right|,\qquad\ell\bigl(T^{(n)}\bigr)=2^{-n}\ell(T),\qquad\operatorname{diam}\Delta^{(n)}=2^{-n}\operatorname{diam}\Delta.$$
>>5. **Punto común.** Elegimos $z_n\in\Delta^{(n)}$. Como todos están en el compacto $\Delta$, alguna subsucesión converge a un punto $z_0\in\Delta$. Para cada $N$, los términos de esa subsucesión con índice al menos $N$ pertenecen al cerrado $\Delta^{(N)}$, por lo que $z_0\in\Delta^{(N)}$. Así, $$z_0\in\bigcap_{n\geq0}\Delta^{(n)}.$$ Si $w_0$ también estuviera en la intersección, tendríamos $|z_0-w_0|\leq2^{-n}\operatorname{diam}\Delta$ para todo $n$, luego $w_0=z_0$.
>>6. **Aproximación por la parte lineal.** Como $f$ es diferenciable en $z_0$, dado $\eta>0$ existe $\rho>0$ tal que $$|f(z)-f(z_0)-f'(z_0)(z-z_0)|\leq\eta|z-z_0|\qquad\text{si }|z-z_0|<\rho.\qquad (*)$$ Para $z=z_0$ la desigualdad también vale, pues ambos lados son nulos. Elegimos $n$ suficientemente grande para que $2^{-n}\operatorname{diam}\Delta<\rho$. Como $z_0\in\Delta^{(n)}$, todos los puntos de $T^{(n)}$ quedan en $B(z_0,\rho)$.
>>7. **Cancelación de la parte afín.** Para un segmento $[u,v]$, parametrizado por $z(t)=u+t(v-u)$, la integración directa da $$\int_{[u,v]}dz=v-u,\qquad\int_{[u,v]}(z-z_0)\,dz=(u-z_0)(v-u)+\frac{(v-u)^2}{2}=\frac{(v-z_0)^2-(u-z_0)^2}{2}.$$ Al sumar sobre los tres lados del triángulo, los extremos se cancelan. Por tanto, $$\int_{T^{(n)}}dz=0,\qquad\int_{T^{(n)}}(z-z_0)\,dz=0.$$
>>8. **Estimación del resto.** Usando el paso 7, la desigualdad $(*)$ y $|z-z_0|\leq\operatorname{diam}\Delta^{(n)}$ sobre $T^{(n)}$, obtenemos $$\begin{aligned}\left|\int_{T^{(n)}}f(z)\,dz\right|&=\left|\int_{T^{(n)}}\bigl(f(z)-f(z_0)-f'(z_0)(z-z_0)\bigr)\,dz\right|\\&\leq\eta\int_{T^{(n)}}|z-z_0|\,|dz|\\&\leq\eta\,\operatorname{diam}\Delta^{(n)}\,\ell\bigl(T^{(n)}\bigr)\\&=\eta\,4^{-n}\operatorname{diam}\Delta\,\ell(T).\end{aligned}$$
>>9. **La integral triangular es nula.** Combinando los pasos 4 y 8, $$\left|\int_T f\right|\leq4^n\left|\int_{T^{(n)}}f\right|\leq\eta\,\operatorname{diam}\Delta\,\ell(T).$$ Como $\eta>0$ es arbitrario y $\Delta,T$ son fijos, resulta $$\int_T f(z)\,dz=0.$$
>>10. **Conclusión.** La diferenciabilidad de $f$ implica su continuidad en $G$. Como la integral se anula en todo borde triangular contenido en $B(x,R)$, [[FA - Teo7#^e4b901|Morera]] da que $f$ es analítica en ese disco. El punto $x\in G$ era arbitrario, de modo que $f$ es analítica en todo $G$.

^9a0041

>[!remark] Idea central de la demostración
>La subdivisión introduce un factor $4^n$ en la cota de la integral original, pero el producto del diámetro y del perímetro del triángulo seleccionado decrece como $4^{-n}$. Ambos factores se cancelan y queda una cota proporcional al error arbitrariamente pequeño de la aproximación lineal de $f$ en $z_0$.
