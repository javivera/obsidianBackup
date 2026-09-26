# Teo 6 — Índice y fórmula integral de Cauchy (v1)

## Índice de una curva

>[!Definition] Índice de una curva respecto de un punto
>Sea $\gamma$ una curva cerrada rectificable y sea $a\notin\{\gamma\}$. Definimos el **índice de $\gamma$ respecto de $a$** como
>$$n(\gamma,a):=\frac{1}{2\pi i}\int_{\gamma}\frac{dz}{z-a}.$$

>[!Proposition] El índice es entero
>Sea $\gamma$ una curva cerrada rectificable y sea $a\notin\{\gamma\}$. Entonces
>$$n(\gamma,a)\in\mathbb{Z}.$$
>Ver demostración en [[FA - Teo5|Teo 5]].

>[!Proposition] Propiedades del índice
>Sea $\gamma:[0,1]\to\mathbb{C}$ curva cerrada rectificable.
>- **(a)** Si $-\gamma(t):=\gamma(1-t)$, entonces
>$$n(-\gamma,a)=-n(\gamma,a)\qquad\forall a\notin\{\gamma\}.$$
>- **(b)** Si $\alpha,\beta:[0,1]\to\mathbb{C}$ son curvas cerradas rectificables con $\alpha(1)=\beta(0)$, y $\alpha+\beta$ es la concatenación
>$$(\alpha+\beta)(t)=\begin{cases}\alpha(2t),&t\in[0,1/2],\\\beta(2t-1),&t\in[1/2,1],\end{cases}$$
>entonces
>$$n(\alpha+\beta,a)=n(\alpha,a)+n(\beta,a)\qquad\forall a\notin\{\alpha\}\cup\{\beta\}.$$
>>[!Proof]-
>>Ejercicio.

## Por qué cuenta número de vueltas

>[!Observation] La circunferencia recorrida $n$ veces
>Sea $\gamma(t)=a+e^{in2\pi t}$, con $t\in[0,1]$. Vimos que
>$$n(\gamma,a)=n.$$

>[!Observation] Estabilidad dentro del disco
>Sea $b$ tal que $|b-a|<1$. Entonces $n(\gamma,b)=n=n(\gamma,a)$.
>>[!Proof]-
>>1. Por definición,
>$$n(\gamma,b)=\frac{1}{2\pi i}\int_{\gamma}\frac{dz}{z-b}=\frac{1}{2\pi i}\int_{0}^{1}\frac{e^{in2\pi t}in2\pi}{(a+e^{in2\pi t})-b}\,dt=n\int_{0}^{1}\frac{e^{in2\pi t}}{e^{in2\pi t}-(b-a)}\,ds.$$
>>2. Vimos que $\int_{0}^{1}\frac{e^{is}}{e^{is}-z}\,ds=2\pi$ si $|z|<1$. Haciendo el cambio correspondiente (ejercicio: hacer el cambio de variable) se obtiene que la integral vale $n$.
>>3. Por lo tanto $n(\gamma,b)=n=n(\gamma,a)$.

>[!Observation] Fuera del disco el índice es cero
>Si $|b-a|>1$, entonces $n(\gamma,b)=0$, porque $\frac{1}{z-b}$ es analítica en un entorno de $\{\gamma\}$ y la integral da $0$.

>[!Observation] La primitiva natural es el logaritmo
>Si $a\notin\{\gamma\}$,
>$$n(\gamma,a)=\int_{\gamma}\frac{dz}{z-a},$$
>y la primitiva natural de $\frac{1}{z-a}$ es $\log(z-a)$.
>Si $F(z)=\log(z-a)$ fuera primitiva global (es decir, si $a\notin\{\gamma\}$ de modo que $\log$ sea analítica en un entorno que contenga a $\{\gamma\}$ salvo un rayo que no la corte), entonces
>$$n(\gamma,a)=\frac{1}{2\pi i}\bigl(\log(\gamma(1)-a)-\log(\gamma(0)-a)\bigr).$$
>Como $\gamma$ es cerrada, $\gamma(1)=\gamma(0)$, la diferencia de logaritmos es diferencia de argumentos:
>$$=\frac{1}{2\pi i}\bigl(\arg(\gamma(1)-a)-\arg(\gamma(0)-a)\bigr)=k,$$
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
>>3. Sea $b$ con $|b-a|<\delta_{1}$. Dado $\varepsilon>0$,
>>$$|\rho(b)-\rho(a)|=|n(\gamma,b)-n(\gamma,a)|=\left|\frac{1}{2\pi i}\left[\int_{\gamma}\left(\frac{1}{z-b}-\frac{1}{z-a}\right)dz\right]\right|$$
>>$$=\frac{1}{2\pi}\left|\int_{\gamma}\frac{b-a}{(z-b)(z-a)}\,dz\right|\leq\frac{1}{2\pi}\int_{\gamma}\frac{|b-a|}{|z-b||z-a|}\,|dz|.$$
>>4. Cuenta auxiliar: como $z\in\{\gamma\}$, se tiene $|z-a|>r$ y
>>$$|z-b|\geq |z-a|-|a-b|>r-\delta_{1}>r-r/2=r/2.$$
>>5. Luego
>>$$\frac{1}{2\pi}\int_{\gamma}\frac{|b-a|}{|z-b||z-a|}\,|dz|\leq\frac{|b-a|}{2\pi}\frac{2}{r}\frac{1}{r}\int_{\gamma}|dz|=\frac{|b-a|}{\pi r^{2}}V(\gamma)<\varepsilon,$$
>>donde $V(\gamma)$ es la longitud de $\gamma$.
>>6. Tomando
>>$$\delta=\min\left(\delta_{1},\frac{\varepsilon\pi r^{2}}{V(\gamma)}\right),$$
>>se obtiene $|\rho(b)-\rho(a)|<\varepsilon$. Luego $\rho$ es continua en $\mathbb{C}\setminus\{\gamma\}$.
>>7. Ahora, sea $a$ en la componente conexa no acotada de $\mathbb{C}\setminus\{\gamma\}$. Existe $R>0$ tal que $\{\gamma\}\subseteq B(0,R)$. Tomando $a$ con $|a|>R$, la función $\frac{1}{z-a}$ es analítica en $B(0,R)$, que contiene a $\{\gamma\}$, de modo que $n(\gamma,a)=0$.
>>8. Como $n(\gamma,z)$ es constante en la componente conexa no acotada, se tiene $n(\gamma,z)=0$ para todo $z\in G_{0}$.

## Fórmula integral de Cauchy (v1)

>[!Theorem] Fórmula de la integral de Cauchy (v1)
>Sea $G$ abierto en $\mathbb{C}$ y $f:G\to\mathbb{C}$ analítica. Si $\gamma$ es curva cerrada rectificable en $G$ tal que $n(\gamma,a)=0$ para todo $a\in\mathbb{C}\setminus G$, y si $a\in G\setminus\{\gamma\}$, entonces
>$$n(\gamma,a)f(a)=\frac{1}{2\pi i}\int_{\gamma}\frac{f(w)}{w-a}\,dw.$$

>[!Lemma] Integrales de tipo Cauchy
>Si $\gamma$ es curva rectificable y $\varphi$ es función continua sobre $\{\gamma\}$, y definimos para cada $m\geq1$
>$$F_{m}(z)=\int_{\gamma}\frac{\varphi(w)}{(w-z)^{m}}\,dw$$
>para $z\notin\{\gamma\}$, entonces $F_{m}$ es analítica en $\mathbb{C}\setminus\{\gamma\}$ y $F_{m}'(z)=mF_{m+1}(z)$.
>>[!Proof]-
>>1. Usaremos que $a^{m}-b^{m}=(a-b)\sum_{k=1}^{m}a^{m-k}b^{k-1}$ (ejercicio).
>>2. Sea $a\in\mathbb{C}\setminus\{\gamma\}$; veamos que $F_{m}$ es analítica en $a$. Para $z\neq a$,
>>$$\frac{F_{m}(z)-F_{m}(a)}{z-a}=\frac{1}{z-a}\left[\int_{\gamma}\varphi(w)\left[\frac{1}{(w-z)^{m}}-\frac{1}{(w-a)^{m}}\right]dw\right]$$
>>$$=\frac{1}{z-a}\left[\int_{\gamma}\varphi(w)\left\{\left(\frac{1}{w-z}-\frac{1}{w-a}\right)\left(\sum_{k=1}^{m}\frac{1}{(w-z)^{m-k}}\frac{1}{(w-a)^{k-1}}\right)\right\}dw\right].$$
>>3. Como $\frac{1}{w-z}-\frac{1}{w-a}=\frac{z-a}{(w-z)(w-a)}$, se cancela el factor $z-a$:
>>$$=\frac{1}{z-a}\int_{\gamma}\varphi(w)\left[\frac{z-a}{(w-z)(w-a)}\left(\sum_{k=1}^{m}\left(\frac{1}{w-z}\right)^{m-k}\left(\frac{1}{w-a}\right)^{k-1}\right)\right]dw$$
>>$$=\sum_{k=1}^{m}\int_{\gamma}\frac{\varphi(w)}{(w-z)^{m-k+1}(w-a)^{k}}\,dw.\qquad (\circledast)$$
>>4. Ejercicio: si $h(z)=\int_{\gamma}\frac{\tilde\varphi(w)}{(w-z)^{s}}\,dw$ con $\tilde\varphi$ continua en $\{\gamma\}$, entonces $h(z)$ es continua en $\mathbb{C}\setminus\{\gamma\}$.
>>5. Tomando $\tilde\varphi(w)=\frac{\varphi(w)}{(w-a)^{k}}$, cada sumando en $(\circledast)$ es continuo en $z$. Luego
>>$$F_{m}'(a)=\lim_{z\to a}\frac{F_{m}(z)-F_{m}(a)}{z-a}=\lim_{z\to a}\sum_{k=1}^{m}\int_{\gamma}\frac{\varphi(w)}{(w-z)^{m-k+1}(w-a)^{k}}\,dw$$
>>$$=\sum_{k=1}^{m}\int_{\gamma}\frac{\varphi(w)}{(w-a)^{m+1}}\,dw=mF_{m+1}(a).$$

>[!Proof] Demostración del teorema
>1. Definimos $\varphi:G\times G\to\mathbb{C}$ por
>$$\varphi(z,w)=\begin{cases}\dfrac{f(z)-f(w)}{z-w},&z\neq w,\\[6pt]f'(z),&z=w,\end{cases}$$
>donde pedimos $f$ analítica.
>2. Ejercicio: $\varphi$ es continua (usar que $f$ es analítica) y para cada $w$ fijo la función $z\mapsto\varphi(w,z)$ es analítica.
>3. Sea $H=\{w:n(\gamma,w)=0\}$. $H$ es abierto en $G$ pues $w\mapsto n(\gamma,w)$ es continua y todo punto de $\mathbb{Z}$ es abierto. Por hipótesis $\mathbb{C}\setminus G\subseteq H$, de modo que $\mathbb{C}=H\cup G$.
>4. Definimos $g:\mathbb{C}\to\mathbb{C}$ por
>$$g(z)=\begin{cases}\displaystyle\int_{\gamma}\varphi(z,w)\,dw,&z\in G,\\[8pt]\displaystyle\int_{\gamma}\frac{f(w)}{w-z}\,dw,&z\in H.\end{cases}$$
>5. Veamos que está bien definida en $H\cap G$. Sea $z\in H\cap G$. Como $z\in G$,
>$$g(z)=\int_{\gamma}\varphi(z,w)\,dw=\int_{\gamma}\frac{f(z)-f(w)}{z-w}\,dw=f(z)\int_{\gamma}\frac{1}{z-w}\,dw-\int_{\gamma}\frac{f(w)}{w-z}\,dw.$$
>Aquí $z\neq w$ pues $z\in G\cap H$ implica $z\in H$, luego $z$ no puede estar en la curva (pues en la curva el índice no está definido). El primer término es $-n(\gamma,z)=0$ por estar $z\in H$. Así coincide con la segunda definición:
>$$g(z)=\int_{\gamma}\frac{f(w)}{w-z}\,dw.$$
>Luego $g$ está bien definida en $G\cap H$.
>6. Ahora $g|_{H}$ es analítica (es $F_{1}$ del lema) y $g|_{G}=\int_{\gamma}\varphi(z,w)\,dw$ es analítica (ejercicio: versión de Leibniz para $\{\gamma\}\times G$, ver pág. 74 ej. 2). Por lo tanto $g$ es entera.
>7. Veamos que $\lim_{z\to\infty}g(z)=0$: $H$ contiene la componente no acotada de $\mathbb{C}\setminus\{\gamma\}$, que contiene $B(0,R)^{c}$ para $R$ suficientemente grande. Luego $H$ es entorno de $\infty$ ($H$ es abierto). En $H$,
>$$\lim_{z\to\infty}g(z)=\lim_{z\to\infty}\int_{\gamma}\frac{f(w)}{w-z}\,dw=0$$
>(ejercicio: tomar $\varepsilon$, poner módulo y sale).
>8. Así $g$ es entera con límite $0$ en $\infty$, luego $g$ es acotada y por Liouville es constante. Como el límite es $0$, se tiene $g(z)=0$ para todo $z\in\mathbb{C}$.
>9. Tomando $a\in G\setminus\{\gamma\}$,
>$$0=g(a)=\int_{\gamma}\varphi(a,w)\,dw=\int_{\gamma}\frac{f(w)-f(a)}{w-a}\,dw=\int_{\gamma}\frac{f(w)}{w-a}\,dw-f(a)\int_{\gamma}\frac{dw}{w-a},$$
>donde $\int_{\gamma}\frac{dw}{w-a}=2\pi i\,n(\gamma,a)$. Despejando se obtiene la fórmula.
