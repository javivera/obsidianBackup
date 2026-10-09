# Teo 6 — Índice y fórmula integral de Cauchy (v1)

## Índice de una curva

>[!Example] Índice de una circunferencia
>Sea $\gamma:[0,2\pi]\to\mathbb{C}$, dada por $$\gamma(t)=a+e^{int},\qquad n\in\mathbb{Z}.$$ Entonces $$\int_\gamma\frac{1}{z-a}\,dz=\int_0^{2\pi}\frac{1}{e^{int}}\,ine^{int}\,dt=2\pi in.$$

>[!Definition] Índice de una curva respecto de un punto
>Sea $\gamma$ una curva cerrada rectificable y sea $a\notin\{\gamma\}$. Definimos el **índice de $\gamma$ respecto de $a$** como $$n(\gamma,a):=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}.$$

^1e9a3c

>[!Theorem] El índice es entero
>Sea $\gamma:[\alpha,\beta]\to\mathbb{C}$ una curva cerrada rectificable y sea $a\notin\{\gamma\}$. Entonces $$n(\gamma,a)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}\in\mathbb{Z}.$$
>>[!Proof]- pedir la original dada en clase
>>1. Asumimos el lema de aproximación: existe una sucesión de curvas cerradas $\sigma_{j}$ de clase $C^{1}$ a trozos con $a\notin\{\sigma_{j}\}$ tales que $$\int_{\sigma_{j}}\frac{dz}{z-a}\xrightarrow[j\to\infty]{}\int_{\gamma}\frac{dz}{z-a}.$$
>>2. Por (1), basta probar el teorema para $\gamma$ de clase $C^{1}$ a trozos, pues entonces cada $n(\sigma_{j},a)$ es entero y una sucesión de enteros convergente en $\mathbb{C}$ es eventualmente constante ya que si $p,q\in\mathbb{Z}$ con $p\neq q$ entonces $|p-q|\geq 1$, de modo que su límite $n(\gamma,a)$ es entero.
>>3. Idea: el integrando es la derivada logarítmica de $z-a$; definimos su primitiva a lo largo de la curva como $$F(t)=\int_{\alpha}^{t}\frac{\gamma'(s)}{\gamma(s)-a}\,ds,$$ de modo que $F(\alpha)=0$ y $F(\beta)=\int_{\gamma}\frac{dz}{z-a}$, y corregimos $\gamma(t)-a$ con $e^{-F(t)}$ para obtener una función constante.
>>4. Sea $\varphi(t)=e^{-F(t)}(\gamma(t)-a)$; donde $\gamma$ es derivable vale $F'(t)=\frac{\gamma'(t)}{\gamma(t)-a}$ y $\frac{d}{dt}e^{-F(t)}=-F'(t)e^{-F(t)}$, luego $$\varphi'(t)=-F'(t)e^{-F(t)}(\gamma(t)-a)+e^{-F(t)}\gamma'(t)=e^{-F(t)}\left[-\frac{\gamma'(t)}{\gamma(t)-a}(\gamma(t)-a)+\gamma'(t)\right]=e^{-F(t)}\left[-\gamma'(t)+\gamma'(t)\right]=0.$$
>>5. Así $\varphi$ es constante en cada subintervalo $C^{1}$ y por continuidad es globalmente constante en $[\alpha,\beta]$, y como $F(\alpha)=0$ se tiene $\varphi(\alpha)=\gamma(\alpha)-a$, luego $\varphi(\alpha)=\varphi(\beta)$ es $$(\gamma(\alpha)-a)=e^{-F(\beta)}(\gamma(\beta)-a).$$
>>6. Como $\gamma$ es cerrada se tiene $\gamma(\alpha)=\gamma(\beta)$ con $\gamma(\alpha)-a\neq 0$, luego cancelando queda $e^{-F(\beta)}=1$ y por $e^{w+z}=e^{w}e^{z}$ se obtiene $$e^{F(\beta)}=1.$$
>>7. Escribiendo $F(\beta)=u+iv$ con $u,v\in\mathbb{R}$ se tiene $e^{u}(\cos v+i\sin v)=1$, luego tomando módulo $e^{u}=1$ y por lo tanto $u=0$, de donde $\cos v=1$ y $\sin v=0$, así que existe $k\in\mathbb{Z}$ tal que $$v=k\cdot 2\pi.$$
>>8. Por lo tanto $F(\beta)=k\cdot(2\pi i)$ y por definición $$n(\gamma,a)=\frac{1}{2\pi i}F(\beta)=k\in\mathbb{Z}.$$

>[!Proposition] Propiedades del índice
>Sea $\gamma:[0,1]\to\mathbb{C}$ curva cerrada rectificable.
>- **(a)** Si $-\gamma(t):=\gamma(1-t)$, entonces
>$$n(-\gamma,a)=-n(\gamma,a)\qquad\forall a\notin\{\gamma\}.$$
>- **(b)** Si $\alpha,\beta:[0,1]\to\mathbb{C}$ son curvas cerradas rectificables con $\alpha(1)=\beta(0)$, y $\alpha+\beta$ es la concatenación que esta definida como
>$$(\alpha+\beta)(t)=\begin{cases}\alpha(2t),&t\in[0,1/2],\\\beta(2t-1),&t\in[1/2,1],\end{cases}$$
>entonces
>$$n(\alpha+\beta,a)=n(\alpha,a)+n(\beta,a)\qquad\forall a\notin\{\alpha\}\cup\{\beta\}.$$
>>[!Proof]-
>>- (a)
>>	1. Fijemos $a\notin\{\gamma\}$ y pongamos $h(z)=(z-a)^{-1}$. Como $\gamma$ es rectificable, la integral de línea puede escribirse como integral de Riemann–Stieltjes: $\int_\gamma h(z)\,dz=\int_0^1h(\gamma(t))\,d\gamma(t)$.
>>	2. Al invertir el parámetro, los incrementos de $\gamma(1-t)$ tienen signo opuesto a los de $\gamma(t)$ y aparecen en orden inverso; al pasar al límite en las sumas de Riemann–Stieltjes resulta $$\int_{-\gamma}h(z)\,dz=\int_0^1h(\gamma(1-t))\,d[\gamma(1-t)]=-\int_0^1h(\gamma(t))\,d\gamma(t)=-\int_\gamma h(z)\,dz.$$
>>	3. Por [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(-\gamma,a)=\frac{1}{2\pi i}\int_{-\gamma}\frac{dz}{z-a}=-\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}=-n(\gamma,a).$$
>>- (b)
>>	1. Fijemos $a\notin\{\alpha\}\cup\{\beta\}$ y pongamos $h(z)=(z-a)^{-1}$. Por la definición de $\alpha+\beta$, su integral se separa en las dos mitades del intervalo: $$\int_{\alpha+\beta}h(z)\,dz=\int_0^{1/2}h(\alpha(2t))\,d[\alpha(2t)]+\int_{1/2}^1h(\beta(2t-1))\,d[\beta(2t-1)].$$
>>	2. En la primera integral hacemos $s=2t$ y en la segunda $s=2t-1$. Ambas reparametrizaciones preservan la orientación, de modo que $$\int_{\alpha+\beta}h(z)\,dz=\int_0^1h(\alpha(s))\,d\alpha(s)+\int_0^1h(\beta(s))\,d\beta(s)=\int_\alpha h(z)\,dz+\int_\beta h(z)\,dz.$$
>>	3. Por [[FA - Teo6#^1e9a3c|índice de una curva]], $$\begin{aligned}n(\alpha+\beta,a)&=\frac{1}{2\pi i}\int_{\alpha+\beta}\frac{dz}{z-a}\\&=\frac{1}{2\pi i}\int_\alpha\frac{dz}{z-a}+\frac{1}{2\pi i}\int_\beta\frac{dz}{z-a}=n(\alpha,a)+n(\beta,a).\end{aligned}$$

## Por qué cuenta número de vueltas

>[!remark] La circunferencia recorrida $n$ veces
>Sea $\gamma(t)=a+e^{in2\pi t}$, con $t\in[0,1]$. Vimos que
>$$n(\gamma,a)=n.$$

>[!proposition] Estabilidad dentro del disco
>Sean $a\in\mathbb{C}$, $n\in\mathbb{Z}$ y $\gamma:[0,1]\to\mathbb{C}$ la curva cerrada dada por $\gamma(t)=a+e^{in2\pi t}$. Sea $b\in\mathbb{C}$ tal que $|b-a|<1$. Entonces $n(\gamma,b)=n=n(\gamma,a)$.
>
>>[!Proof]-
>>1. Como $|\gamma(t)-a|=1$ y $|b-a|<1$, ambos puntos están fuera de la curva. Por [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(\gamma,b)=\frac{1}{2\pi i}\int_0^1\frac{2\pi in e^{2\pi int}}{e^{2\pi int}-(b-a)}\,dt=n\int_0^1\frac{e^{2\pi int}}{e^{2\pi int}-(b-a)}\,dt.$$ Si $n=0$, la derivada de la curva es cero y ambos índices valen cero. Supongamos ahora $n\neq0$.
>>2. Hacemos el cambio sugerido $s=2\pi nt$, de modo que $ds=2\pi n\,dt$ y los extremos pasan de $0,1$ a $0,2\pi n$: $$n(\gamma,b)=\frac{1}{2\pi}\int_0^{2\pi n}\frac{e^{is}}{e^{is}-(b-a)}\,ds.$$ el integrando es $2\pi$-periódico, pues $e^{i(s+2\pi)}=e^{is}$. 
>>3. Si $n>0$, separamos el intervalo en $n$ períodos y en cada integral hacemos $s=u+2\pi j$: $$\begin{aligned}n(\gamma,b)&=\frac{1}{2\pi}\sum_{j=0}^{n-1}\int_{2\pi j}^{2\pi(j+1)}\frac{e^{is}}{e^{is}-(b-a)}\,ds\\&=\frac{1}{2\pi}\sum_{j=0}^{n-1}\int_0^{2\pi}\frac{e^{iu}}{e^{iu}-(b-a)}\,du=\frac{n}{2\pi}\int_0^{2\pi}\frac{e^{iu}}{e^{iu}-(b-a)}\,du.\end{aligned}$$
>>4. Si $n<0$, intercambiamos los límites (lo que cambia el signo), separamos en $|n|$ períodos y en cada integral hacemos $s=u-2\pi(j+1)$: $$\begin{aligned}n(\gamma,b)&=-\frac{1}{2\pi}\int_{-2\pi|n|}^0\frac{e^{is}}{e^{is}-(b-a)}\,ds\\&=-\frac{1}{2\pi}\sum_{j=0}^{|n|-1}\int_{-2\pi(j+1)}^{-2\pi j}\frac{e^{is}}{e^{is}-(b-a)}\,ds\\&=-\frac{1}{2\pi}\sum_{j=0}^{|n|-1}\int_0^{2\pi}\frac{e^{iu}}{e^{iu}-(b-a)}\,du=\frac{n}{2\pi}\int_0^{2\pi}\frac{e^{iu}}{e^{iu}-(b-a)}\,du,\end{aligned}$$ donde en la última igualdad usamos $-|n|=n$.
>>5. Así, usando [[FA - Teo4#^c7e20a|integral de la exponencial sobre la circunferencia unidad]] con $z=b-a$, $$n(\gamma,b)=\frac{n}{2\pi}\int_0^{2\pi}\frac{e^{is}}{e^{is}-(b-a)}\,ds=\frac{n}{2\pi}\,2\pi=n.$$
>>6. Tomando $b=a$ en la fórmula del primer paso obtenemos también $$n(\gamma,a)=n\int_0^1 1\,dt=n.$$ Por lo tanto $n(\gamma,b)=n=n(\gamma,a)$.

>[!remark] Fuera del disco el índice es cero
>Si $|b-a|>1$, elegimos $R$ con $1<R<|b-a|$. La curva $\gamma$ está contenida en $B(a,R)$ y $\frac{1}{z-b}$ es analítica en un entorno de $\overline{B(a,R)}$. Por [[FA - Teo4#^a71c9e|integral nula en un disco]], $\int_\gamma\frac{dz}{z-b}=0$, y por tanto $n(\gamma,b)=0$.

>[!remark] La primitiva natural es el logaritmo
>Si $a\notin\{\gamma\}$,
>$$n(\gamma,a)=\int_{\gamma}\frac{dz}{z-a},$$
>y la primitiva natural de $\frac{1}{z-a}$ es $\log(z-a)$.
>Si $F(z)=\log(z-a)$ fuera primitiva global (es decir, si $a\notin\{\gamma\}$ de modo que $\log$ sea analítica en un entorno que contenga a $\{\gamma\}$ salvo un rayo que no la corte), entonces
>$$n(\gamma,a)=\frac{1}{2\pi i}\bigl(\log(\gamma(1)-a)-\log(\gamma(0)-a)\bigr).$$
>Como $\gamma$ es cerrada, $\gamma(1)=\gamma(0)$, la diferencia de logaritmos es diferencia de argumentos:
>$$=\frac{1}{2\pi i}\,i\bigl(\arg(\gamma(1)-a)-\arg(\gamma(0)-a)\bigr)=k,$$
>donde la diferencia es $2k\pi i$ con $k\in\mathbb{Z}$.
>Esto muestra que el índice mide la variación total del argumento, es decir, el número de vueltas alrededor de $a$. Nótese que si $a\in\{\gamma\}$ hay que cortar sí o sí: cualquier rayo desde $a$ corta a $\gamma$, y no hay rama del logaritmo definida sobre toda $\{\gamma\}$.

## Componentes conexas del complemento

>[!Remark] Descomposición de $\mathbb{C}\setminus\{\gamma\}$
>Sea $\{\gamma\}$ curva cerrada rectificable y $G=\mathbb{C}\setminus\{\gamma\}$. Como $\{\gamma\}$ es compacto, existe $R>0$ tal que $\{\gamma\}\subseteq \overline{B(0,R)}$. Luego
>$$\{z:|z|>R\}\subseteq G=\mathbb{C}\setminus\{\gamma\}.$$
>El conjunto $\{z:|z|>R\}$ es conexo y no acotado, por lo que está contenido en la componente conexa no acotada de $\mathbb{C}\setminus\{\gamma\}=G$.
>Escribimos
>$$G=G_{0}\cup\left(\bigcup_{i=1}G_{i}\right),$$
>donde $G_{0}$ es la componente conexa no acotada y cada $G_{i}$ es una componente conexa acotada.

>[!Theorem] El índice es constante en cada componente
>Sea $\gamma$ curva cerrada rectificable. Entonces $n(\gamma,a)$ es constante en cada componente conexa de $\mathbb{C}\setminus\{\gamma\}$. Además, $n(\gamma,a)=0$ si $a$ está en la componente no acotada.
>>[!Proof]-
>>1. Sea $\rho:\mathbb{C}\setminus\{\gamma\}\to\mathbb{Z}\subseteq\mathbb{C}$ dada por
>$$\rho(a)=n(\gamma,a).$$
>>Si $\rho$ es continua, manda componentes conexas en componentes conexas. Como las componentes conexas de $\mathbb{Z}$ son puntos, $\rho$ es constante en cada componente conexa.
>>2. Veamos que $\rho$ es continua en $a$. Sea $a\notin\{\gamma\}$, sea $r=d(a,\{\gamma\})$ y sea $0<\delta_{1}<r/2$. Entonces $B(a,\delta_{1})\subseteq\mathbb{C}\setminus\{\gamma\}$. Como la bola es conexa, está contenida en una componente conexa de $\mathbb{C}\setminus\{\gamma\}$.
>>3. Sea $b$ con $|b-a|<\delta_{1}$. Dado $\varepsilon>0$, usando [[FA - Teo4#^e4b092|propiedades de la integral de línea (b)]] en la última desigualdad, $$\begin{aligned}|\rho(b)-\rho(a)|&=|n(\gamma,b)-n(\gamma,a)|\\&=\left|\frac{1}{2\pi i}\int_{\gamma}\left(\frac{1}{z-b}-\frac{1}{z-a}\right)\,dz\right|\\&=\frac{1}{2\pi}\left|\int_{\gamma}\frac{b-a}{(z-b)(z-a)}\,dz\right|\\&\leq\frac{1}{2\pi}\int_{\gamma}\frac{|b-a|}{|z-b||z-a|}\,|dz|.\end{aligned}$$
>>4. Para todo $z\in\{\gamma\}$, la definición de $r=d(a,\{\gamma\})$ da $|z-a|\geq r>0$. Por la desigualdad triangular y porque $|a-b|<\delta_1<r/2$, $$|z-b|\geq |z-a|-|a-b|>r-\delta_1>r-r/2=r/2>0.$$ Al tomar recíprocos de cantidades positivas, las desigualdades se invierten: $$\frac{1}{|z-a|}\leq\frac{1}{r},\qquad\frac{1}{|z-b|}<\frac{2}{r}.$$ Multiplicando estas cotas obtenemos $$\frac{|b-a|}{|z-b||z-a|}\leq |b-a|\frac{2}{r}\frac{1}{r}.$$
>>5. Sustituimos la cota del paso anterior en la integral y sacamos los factores constantes: $$\begin{aligned}\frac{1}{2\pi}\int_{\gamma}\frac{|b-a|}{|z-b||z-a|}\,|dz|&\leq\frac{|b-a|}{2\pi}\frac{2}{r}\frac{1}{r}\int_{\gamma}|dz|\\&=\frac{|b-a|}{\pi r^{2}}V(\gamma),\end{aligned}$$ donde $V(\gamma)=\int_\gamma|dz|$ es la longitud de $\gamma$.
>>6. Los pasos anteriores muestran que, siempre que $|b-a|<\delta_1$, se cumple $|\rho(b)-\rho(a)|\leq |b-a|V(\gamma)/(\pi r^2)$. Para que esta cota sea menor que $\varepsilon$, basta exigir además $|b-a|<\varepsilon\pi r^2/V(\gamma)$. Por eso elegimos $$\delta=\min\left\{\delta_1,\frac{\varepsilon\pi r^2}{V(\gamma)}\right\}>0.$$ Ahora tomamos cualquier $b$ que satisfaga $|b-a|<\delta$. Como $\delta\leq\delta_1$, podemos aplicar los pasos anteriores; y como $\delta\leq\varepsilon\pi r^2/V(\gamma)$, obtenemos $$\begin{aligned}|\rho(b)-\rho(a)|&\leq\frac{|b-a|V(\gamma)}{\pi r^2}\\&<\frac{\delta V(\gamma)}{\pi r^2}\\&\leq\frac{\varepsilon\pi r^2}{V(\gamma)}\frac{V(\gamma)}{\pi r^2}=\varepsilon.\end{aligned}$$ Así, $|b-a|<\delta$ implica $|\rho(b)-\rho(a)|<\varepsilon$, y $\rho$ es continua en $a$. Como $a$ era arbitrario, es continua en $\mathbb{C}\setminus\{\gamma\}$. Si $V(\gamma)=0$, la cota del paso 5 ya da $|\rho(b)-\rho(a)|=0$ para $|b-a|<\delta_1$, y basta elegir $\delta=\delta_1$, sin dividir por $V(\gamma)$.
>>7. Aplicamos ahora el paso 1 usando la continuidad de $\rho$ demostrada en el paso 6: para cada componente conexa $C$ de $\mathbb{C}\setminus\{\gamma\}$, la imagen $\rho(C)$ es conexa y está contenida en $\mathbb{Z}$, por lo que consta de un solo punto. Así, $\rho(a)=\rho(b)$ para cualesquiera $a,b\in C$, es decir, $n(\gamma,\cdot)$ es constante en cada componente conexa.
>>8. Finalmente, probamos que el índice vale cero en la componente no acotada $G_0$. Elegimos $R>0$ tal que $\{\gamma\}\subseteq B(0,R)$ y un punto $a$ con $|a|>R$, que pertenece a $G_0$. Tomamos $S$ con $R<S<|a|$; la función $\frac{1}{z-a}$ es analítica en un entorno de $\overline{B(0,S)}$ y la curva está contenida en $B(0,S)$. Por [[FA - Teo4#^a71c9e|integral nula en un disco]], $\int_\gamma\frac{dz}{z-a}=0$, de modo que $n(\gamma,a)=0$. Como el paso 7 establece la constancia en $G_0$, concluimos que $n(\gamma,z)=0$ para todo $z\in G_0$.

^c6a183

## Fórmula integral de Cauchy (v1)

>[!exercise] Factorización de la diferencia de potencias
>Sean $x,y\in\mathbb{C}$ y $m\geq1$ un entero. Demostrar que $$x^m-y^m=(x-y)\sum_{k=1}^m x^{m-k}y^{k-1}.$$
>
>>[!Proof]-
>>1. Distribuimos el producto y reindexamos la primera suma con $j=k-1$: $$\begin{aligned}(x-y)\sum_{k=1}^m x^{m-k}y^{k-1}&=\sum_{k=1}^m x^{m-k+1}y^{k-1}-\sum_{k=1}^m x^{m-k}y^k\\&=\sum_{j=0}^{m-1}x^{m-j}y^j-\sum_{j=1}^m x^{m-j}y^j.\end{aligned}$$
>>2. Los términos con $1\leq j\leq m-1$ se cancelan; quedan el término $j=0$ de la primera suma y el término $j=m$ de la segunda: $$\sum_{j=0}^{m-1}x^{m-j}y^j-\sum_{j=1}^m x^{m-j}y^j=x^m-y^m.$$ Para $m=1$ no hay términos intermedios y la misma igualdad vale.

^b82d6f

>[!exercise] Continuidad de las integrales de tipo Cauchy
>Sea $\gamma$ una curva rectificable, $\tilde\varphi$ continua sobre $\{\gamma\}$ y $s\geq1$ un entero. Demostrar que $$h(z)=\int_\gamma\frac{\tilde\varphi(w)}{(w-z)^s}\,dw$$ es continua en $\mathbb{C}\setminus\{\gamma\}$.
>
>>[!Proof]-
>>1. Fijemos $a\notin\{\gamma\}$ y pongamos $r=d(a,\{\gamma\})>0$. Como la traza es compacta y $\tilde\varphi$ es continua, existe $M=\max_{w\in\{\gamma\}}|\tilde\varphi(w)|$. Si $|z-a|<r/2$, para todo $w$ del recorrido tenemos $$|w-a|\geq r,\qquad |w-z|\geq|w-a|-|z-a|>r/2.$$ Por tanto, ambos recíprocos están acotados por $2/r$.
>>2. Usando [[FA - Teo6#^b82d6f|factorización de la diferencia de potencias]] y calculando la diferencia de recíprocos, $$\begin{aligned}\frac{1}{(w-z)^s}-\frac{1}{(w-a)^s}&=\left(\frac{1}{w-z}-\frac{1}{w-a}\right)\sum_{k=1}^s\frac{1}{(w-z)^{s-k}(w-a)^{k-1}}\\&=\frac{z-a}{(w-z)(w-a)}\sum_{k=1}^s\frac{1}{(w-z)^{s-k}(w-a)^{k-1}}.\end{aligned}$$ Cada sumando contiene $s-1$ factores recíprocos; incluyendo los dos factores del denominador exterior, obtenemos la cota uniforme $$\left|\frac{1}{(w-z)^s}-\frac{1}{(w-a)^s}\right|\leq s|z-a|\left(\frac{2}{r}\right)^{s+1}.$$
>>3. Por [[FA - Teo4#^e4b092|propiedades de la integral de línea (b)]], $$\begin{aligned}|h(z)-h(a)|&=\left|\int_\gamma\tilde\varphi(w)\left(\frac{1}{(w-z)^s}-\frac{1}{(w-a)^s}\right)\,dw\right|\\&\leq M s\left(\frac{2}{r}\right)^{s+1}V(\gamma)|z-a|=C|z-a|,\end{aligned}$$ donde $C=M s(2/r)^{s+1}V(\gamma)\geq0$ es independiente de $z$.
>>4. Dado $\varepsilon>0$, elegimos $\delta=\min\{r/2,\varepsilon/(C+1)\}>0$. Si $|z-a|<\delta$, las cotas anteriores se aplican y $$|h(z)-h(a)|\leq C|z-a|\leq(C+1)|z-a|<(C+1)\delta\leq\varepsilon.$$ Esto demuestra la continuidad en $a$ y, como $a$ era arbitrario, en todo $\mathbb{C}\setminus\{\gamma\}$.

^d39a70

>[!Lemma] Integrales de tipo Cauchy
>Si $\gamma$ es curva rectificable y $\varphi$ es función continua sobre $\{\gamma\}$, y definimos para cada $m\geq1$
>$$F_{m}(z)=\int_{\gamma}\frac{\varphi(w)}{(w-z)^{m}}\,dw$$
>para $z\notin\{\gamma\}$, entonces $F_{m}$ es analítica en $\mathbb{C}\setminus\{\gamma\}$ y $F_{m}'(z)=mF_{m+1}(z)$.
>>[!Proof]-
>>1. Usaremos [[FA - Teo6#^b82d6f|factorización de la diferencia de potencias]] con $x=(w-z)^{-1}$ e $y=(w-a)^{-1}$.
>>2. Sea $a\in\mathbb{C}\setminus\{\gamma\}$; veamos que $F_{m}$ es analítica en $a$. Para $z\neq a$, $$\frac{F_{m}(z)-F_{m}(a)}{z-a}=\frac{1}{z-a}\left[\int_{\gamma}\varphi(w)\left[\frac{1}{(w-z)^{m}}-\frac{1}{(w-a)^{m}}\right]dw\right]$$$$=\frac{1}{z-a}\left[\int_{\gamma}\varphi(w)\left\{\left(\frac{1}{w-z}-\frac{1}{w-a}\right)\left(\sum_{k=1}^{m}\frac{1}{(w-z)^{m-k}}\frac{1}{(w-a)^{k-1}}\right)\right\}dw\right].$$ en el ultimo igual usamos 1.
>>3. Como $\frac{1}{w-z}-\frac{1}{w-a}=\frac{z-a}{(w-z)(w-a)}$, se cancela el factor $z-a$:
>>$$=\frac{1}{z-a}\int_{\gamma}\varphi(w)\left[\frac{z-a}{(w-z)(w-a)}\left(\sum_{k=1}^{m}\left(\frac{1}{w-z}\right)^{m-k}\left(\frac{1}{w-a}\right)^{k-1}\right)\right]dw$$
>>$$=\sum_{k=1}^{m}\int_{\gamma}\frac{\varphi(w)}{(w-z)^{m-k+1}(w-a)^{k}}\,dw.\qquad (\circledast)$$
>>4. Aplicamos [[FA - Teo6#^d39a70|continuidad de las integrales de tipo Cauchy]] a las integrales obtenidas en $(\circledast)$ tomando $\tilde\varphi(w)=\frac{\varphi(w)}{(w-a)^{k}}$ cada sumando es continuo en $z$. Luego
>>$$F_{m}'(a)=\lim_{z\to a}\frac{F_{m}(z)-F_{m}(a)}{z-a}=\lim_{z\to a}\sum_{k=1}^{m}\int_{\gamma}\frac{\varphi(w)}{(w-z)^{m-k+1}(w-a)^{k}}\,dw$$
>>$$=\sum_{k=1}^{m}\int_{\gamma}\frac{\varphi(w)}{(w-a)^{m+1}}\,dw=mF_{m+1}(a).$$

>[!Theorem] Fórmula de la integral de Cauchy (v1)
>Sea $G$ abierto en $\mathbb{C}$ y $f:G\to\mathbb{C}$ analítica. Si $\gamma$ es curva cerrada rectificable en $G$ tal que $n(\gamma,a)=0$ para todo $a\in\mathbb{C}\setminus G$, y si $a\in G\setminus\{\gamma\}$, entonces $$n(\gamma,a)f(a)=\frac{1}{2\pi i}\int_{\gamma}\frac{f(w)}{w-a}\,dw.$$
>>[!Proof]-
>>5. Definimos $\varphi:G\times G\to\mathbb{C}$ por $$\varphi(z,w)=\begin{cases}\dfrac{f(z)-f(w)}{z-w},&z\neq w,\\[6pt]f'(z),&z=w,\end{cases}$$donde pedimos $f$ analítica.
>>6. Ejercicio: $\varphi$ es continua (usar que $f$ es analítica) y para cada $w$ fijo la función $z\mapsto\varphi(z,w)$ es analítica.
>>7. Sea $H=\{w:n(\gamma,w)=0\}$. $H$ es abierto en $G$ pues $w\mapsto n(\gamma,w)$ es continua y todo punto de $\mathbb{Z}$ es abierto. Por hipótesis $\mathbb{C}\setminus G\subseteq H$, de modo que $\mathbb{C}=H\cup G$.
>>8. Definimos $g:\mathbb{C}\to\mathbb{C}$ por $$g(z)=\begin{cases}\displaystyle\int_{\gamma}\varphi(z,w)\,dw,&z\in G,\\[8pt]\displaystyle\int_{\gamma}\frac{f(w)}{w-z}\,dw,&z\in H.\end{cases}$$
>>9. Veamos que está bien definida en $H\cap G$. Sea $z\in H\cap G$. Como $z\in G$, $$g(z)=\int_{\gamma}\varphi(z,w)\,dw=\int_{\gamma}\frac{f(z)-f(w)}{z-w}\,dw=f(z)\int_{\gamma}\frac{1}{z-w}\,dw-\int_{\gamma}\frac{f(w)}{w-z}\,dw.$$
>>10. Aquí $z\neq w$ pues $z\in G\cap H$ implica $z\in H$, luego $z$ no puede estar en la curva (pues en la curva el índice no está definido). El primer término es $-n(\gamma,z)=0$ por estar $z\in H$. Así coincide con la segunda definición: $$g(z)=\int_{\gamma}\frac{f(w)}{w-z}\,dw.$$luego $g$ está bien definida en $G\cap H$.
>>11. Ahora $g|_{H}$ es analítica (es $F_{1}$ del lema) y $g|_{G}=\int_{\gamma}\varphi(z,w)\,dw$ es analítica (ejercicio: versión de Leibniz para $\{\gamma\}\times G$, ver pág. 74 ej. 2). Por lo tanto $g$ es entera.
>>12. Veamos que $\lim_{z\to\infty}g(z)=0$: $H$ contiene la componente no acotada de $\mathbb{C}\setminus\{\gamma\}$, que contiene $B(0,R)^{c}$ para $R$ suficientemente grande. Luego $H$ es entorno de $\infty$ ($H$ es abierto). En $H$, $$\lim_{z\to\infty}g(z)=\lim_{z\to\infty}\int_{\gamma}\frac{f(w)}{w-z}\,dw=0$$(ejercicio: tomar $\varepsilon$, poner módulo y sale).
>>13. Así $g$ es entera con límite $0$ en $\infty$, luego $g$ es acotada y por Liouville es constante. Como el límite es $0$, se tiene $g(z)=0$ para todo $z\in\mathbb{C}$.
>>14. Tomando $a\in G\setminus\{\gamma\}$, $$0=g(a)=\int_{\gamma}\varphi(a,w)\,dw=\int_{\gamma}\frac{f(w)-f(a)}{w-a}\,dw=\int_{\gamma}\frac{f(w)}{w-a}\,dw-f(a)\int_{\gamma}\frac{dw}{w-a},$$donde $\int_{\gamma}\frac{dw}{w-a}=2\pi i\,n(\gamma,a)$. Despejando se obtiene la fórmula.
