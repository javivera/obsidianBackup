# Curvas y parametrizaciones

>[!Definition] Reparametrización por longitud de arco *
>Sea $\alpha : [a, b] \to \mathbb{R}^n$ una curva regular de longitud $L$, y sea $\sigma : [a, b] \to [0, L]$ definida por
> $$ \sigma(t) = \text{long} \left( \alpha|_{[a, t]} \right) = \int_a^t \|\alpha'(u)\| \, du $$
>Por el Teorema Fundamental del Cálculo, $\sigma'(t) = \|\alpha'(t)\| > 0$ (pues $\alpha$ es regular). Luego, $\sigma$ es creciente y resulta una biyección sobre el intervalo $[0, L]$.
>La curva $\beta : [0, L] \to \mathbb{R}^n$ definida por $\beta = \alpha \circ \sigma^{-1}$ se llama la **reparametrización de $\alpha$ por longitud de arco**.

^4b79f2

>[!Proposition]
>La curva $\beta$ tiene rapidez unitaria.
>>[!Proof]-
>>1. Como $\alpha = \beta \circ \sigma$, tenemos que $\alpha' = (\beta' \circ \sigma) \sigma'$. Luego $$ \|\alpha'\| = \|\beta' \circ \sigma\| |\sigma'| = \|\beta' \circ \sigma\| \|\alpha'\| $$
>>2. De allí, $\|\beta' \circ \sigma\| = 1$. 
>>3. Como $\sigma$ es cae a $[0,L]$, podemos pensar que dado $s\in [0,L]$ tenemos $t\in [a,b]$ tal que $\sigma(t)=s$ por lo tanto $\beta(s)=\beta'(\sigma(t))$
>>4. Entonces tenemos que $\|\beta'(s)\|=\lVert \beta'(\sigma(t)) \rVert = 1$ para todo $s\in [0,L]$ 
>
>>[!Resumen]-
>>5. Derivar $\alpha=\beta\circ\sigma$ y obtener $\alpha'=(\beta'\circ\sigma)\sigma'$.
>>6. Tomar normas y usar $\sigma'=\|\alpha'\|$ para escribir $\|\alpha'\|=\|\beta'\circ\sigma\|\|\alpha'\|$.
>>7. Cancelar $\|\alpha'\|>0$ y concluir $\|\beta'\circ\sigma\|=1$, luego $\|\beta'\|=1$.

^f2ee92

>[!Proposition] 
>Si $\alpha$ es una curva suave, entonces $\beta$ es una curva suave.
>>[!Proof]-
>>4. Si $\alpha$ es suave (clase $C^\infty$), entonces $\alpha'$ es suave.
>>5. La función $\sigma(t) = \int_a^t \|\alpha'(u)\| du$ tiene derivada $\sigma'(t) = \|\alpha'(t)\|$.
>>6. Como $\alpha$ es regular, $\alpha'(t) \neq 0$. 
>>7. La función norma $\|\cdot\|$ es suave en $\mathbb{R}^n \setminus \{0\}$.Por tanto, $\sigma'(t)$ es suave, lo que implica que $\sigma(t)$ es suave.
>>8. Además, como $\sigma'(t) > 0$, por el Teorema de la Función Inversa (versión $C^\infty$), la función inversa $\sigma^{-1}$ es suave.
>>9. Finalmente, $\beta = \alpha \circ \sigma^{-1}$ es composición de funciones suaves, luego $\beta$ es suave.
>
>
>>[!Resumen]-
>>- **Ruta**
>>	1. $\alpha$ suave $\Rightarrow$ $\alpha'$ suave y $\|\alpha'\|$ suave fuera de $0$.
>>	2. $\sigma'(t)=\|\alpha'(t)\|>0$ ⇒ $\sigma$ es suave.
>>	3. Por TFI, $\sigma^{-1}$ es suave y $\beta=\alpha\circ\sigma^{-1}$ también.

>[!Definition] Curvatura $\kappa$
>Sea $\alpha : (a, b) \to \mathbb{R}^n$ una curva de rapidez unitaria. La **curvatura** de $\alpha$ es la función
> $$ \kappa : (a, b) \to \mathbb{R}, \quad \kappa(s) = \|\alpha''(s)\|. $$

>[!Definition] El triedro de Frenet
> Sea $\alpha : (a,b) \to \mathbb{R}^3$ una curva suave de rapidez unitaria con curvatura nunca nula, es decir, $\|\alpha'(t)\| = 1$ y $\kappa(t) = \|\alpha''(t)\| \ne 0$ para todo $t$.
> Entonces las funciones $T, N, B: (a,b) \to \mathbb{R}^3$ se definen mediante
> $$T = \alpha', \quad N = \alpha''/\|\alpha''\| = \alpha''/\kappa \quad \text{y} \quad B = T \times N$$
>Para cada $t \in (a,b)$, $\{T(t), N(t), B(t)\}$ es una base ortonormal de $\mathbb{R}^3$.
>>[!Proof]-
>>4. Como $\alpha$ tiene rapidez unitaria, $\|T\| = \|\alpha'\| = 1$. Claramente, $\|N\| = 1$.
>>5. Derivando con respecto a $t$ la expresión $1 = \|\alpha'(t)\|^2 = \langle \alpha'(t), \alpha'(t) \rangle$ tenemos que $$ 0 = 2 \langle \alpha''(t), \alpha'(t) \rangle = 2 \langle N(t) \kappa(t), T(t) \rangle = 2\kappa(t) \langle N(t), T(t) \rangle $$que vale para todo $t$. 
>>6. Como $\kappa$ nunca se anula por hipótesis, resulta que $\langle T, N \rangle = 0$
>>7. Además, $\langle B, T \rangle = \langle T\times N, T \rangle = 0$ analogo $\langle B,N\rangle=0$  y $$ \|B\| = \|T \times N\| = \|T\| \|N\|\sin\left( \frac{\pi}{2} \right) = 1.1.1=1 $$
>
>>[!Resumen]-
>>- **Idea**
>>	10. $T=\alpha'$ es unitario y $N=\alpha''/\|\alpha''\|$ también y $\|B\|=\|T\|\|N\|\sin(\pi/2)=1$ tambien
>>	11. Derivar $\|T\|^2=1$ da $\langle T,N\rangle=0$ (usa $\kappa\neq 0$).
>>	12. $B=T\times N$ es ortogonal a $T$ y $N$.

>[!Proposition] Ecuaciones de Frenet
>Se cumple que
> $$T' = \kappa N, \quad N' = -\kappa T + \tau B \quad \text{y} \quad B' = -\tau N, \quad (1)$$
> donde $\kappa : (a,b) \to \mathbb{R}$ es la función curvatura, para cierta función $\tau : (a,b) \to \mathbb{R}$, llamada la **torsión** de $\alpha$, que satisface
> $$\tau = \langle N', B \rangle = - \langle B', N \rangle.$$
> Comentario. Las ecuaciones (1) a veces se escriben de la forma
> $$\begin{cases} T' & = & & \kappa N \\ N' &= & -\kappa T && +\tau B \\ B' &= & & -\tau N \end{cases}$$
>>[!Proof]-
>>13. Tenemos que $$ T' = (\alpha')' = \alpha'' = \|\alpha''\| \frac{\alpha''}{\|\alpha''\|} = \kappa N. $$
>>14. Como sabemos que $\{T, N, B\}$ es una base ortonormal, podemos escribir $$ N' = \langle N', T \rangle T + \langle N', N \rangle N + \langle N', B \rangle B. $$
>>15. $\langle N', N \rangle = 0$, pues $1=\|N\|^{2} = (N,N)$ y luego derivando 
>>16. "Integrando"podemos obtener $$ \langle N', T \rangle = \langle N, T \rangle' - \langle N, T' \rangle = 0 - \langle N, \kappa N \rangle = -\kappa \|N\|^2 = -\kappa. $$
>>17. De esta manera $$ N' = -\kappa T + 0.N + \tau B $$ Donde definimos $\langle N', B \rangle=\tau$.
>>18. Ahora escribimos $$ B' = \langle B', T \rangle T + \langle B', N \rangle N + \langle B', B \rangle B. $$
>>19. Tenemos que $\langle B', B \rangle = 0$, pues $\|B\| = \text{constante}$. 
>>20. También, $$ \langle B', N \rangle = \langle B, N \rangle' - \langle B, N' \rangle = 0 - \langle B, \kappa T + \tau B \rangle = -\tau \|B\|^2 = -\tau. $$
>>21. Analogamente $$\langle B', T \rangle=\langle B,T\rangle'-\langle B,T '\rangle=0-\langle B,\kappa N\rangle=0$$
>>22. Mostrando que $B'=-\tau N$ 
>
>>[!Resumen]-
>>23. $T'=\alpha''=\kappa N$.
>>24. Expandir $N'$ en la base $\{T,N,B\}$ y usar $\langle N',N\rangle=0$ por que $\lVert N \rVert=1$ 
>>25. Calcular $\langle N',T\rangle=\langle N, T \rangle' - \langle N, T' \rangle=\ldots=\kappa$ usando y definir $\tau=\langle N',B\rangle$.
>>26. Expandir $B'$ y usar $\langle B',B\rangle=0$, y con la misma tecnica $\langle B',T\rangle=0$, $\langle B',N\rangle=-\tau$

>[!Definition]- Plano osculador, normal y osculador afín
>Para cada $t$, el plano generado por $T(t)$ y $N(t)$, o sea,
>$$ \text{span } \{T(t), N(t)\} = B(t)^\perp, $$
>se llama **plano osculador** de $\alpha$ en el instante $t$ y el plano
>$$ \text{span } \{N(t), B(t)\} = T(t)^\perp $$
>se denomina **plano normal** de $\alpha$ en el instante $t$. El plano
>$$ \alpha(t) + \text{span } \{T(t), N(t)\} $$
>se llama **plano osculador afín** de $\alpha$ en $t$. Notar que los dos primeros son subespacios de $\mathbb{R}^3$, pero el tercero no necesariamente lo es.

>[!Theorem]
>Sea $\alpha : (a, b) \to \mathbb{R}^3$ una curva suave de rapidez unitaria, curvatura nunca nula y torsión $\tau$. Entonces la trayectoria de $\alpha$ está contenida en un plano si y solo si $\tau = 0$.
>>[!Proof]-
>>- $(\Longleftarrow)$ 
>>	1. Como $B' = -\tau N = 0$. Entonces $B$ constante con lo cual podemos definir $n=B(t)$ 
>>	2. Sea $t_o \in (a, b)$. Veamos que para todo $t$, $\alpha(t)$ está en el plano $P$ que pasa por $\alpha(t_o)$ y es ortogonal a $n$, o sea,$$ P = \{ q \in \mathbb{R}^3 \mid \langle q - \alpha(t_o), n \rangle = 0 \} . \quad (2) $$
>>	3. Debemos mostrar que $\langle \alpha(t) - \alpha(t_o), n \rangle = 0$ para todo $t$. Sea $f : (a, b) \to \mathbb{R}$ definida por $f(t) = \langle \alpha(t) - \alpha(t_o), n \rangle$.
>>	4. Calculamos $$ f'(t) = \langle \alpha'(t), n \rangle = \langle T(t), B(t) \rangle = 0. $$
>>	5. Luego $f$ es constante y $$f(t) = f(t_o) = \langle \alpha(t_o) - \alpha(t_o), n \rangle = 0$$
>>- $(\Longrightarrow)$ 
>>	1. Llamamos $P$ al plano donde está contenida la trayectoria de $\alpha$. Sea $t_o \in (a, b)$. Como $\alpha(t_o) \in P$, entonces $P$ es de la forma (2) para cierto vector unitario $n$.
>>	2. Tenemos que $\langle \alpha(t) - \alpha(t_o), n \rangle = 0$ para todo $t$. Derivamos miembro a miembro y obtenemos $$ \langle \alpha'(t), n \rangle = 0, \quad \text{o sea}, \quad \langle T(t), n \rangle = 0 $$para todo $t$. 
>>	3. Derivando nuevamente,$$ 0 = \langle T'(t), n \rangle = \langle \kappa(t) N(t), n \rangle = \kappa(t) \langle N(t), n \rangle . $$
>>	4. De allí, $\langle N(t), n \rangle = 0$ para todo $t$, ya que $\kappa$ es nunca nula.
>>	5. Tenemos entonces que $\langle T, n \rangle = 0 = \langle N, n \rangle$. 
>>	6. Luego, para cada $t$, como $\{T, N, B\}$ es una base ortonormal y $n$ es un vector unitario ortogonal a $T$ y $N$, necesariamente $n$ es colineal con $B$. 
>>	7. Como $B$ y $n$ son ambos unitarios, $$ B(t) = \pm n. $$
>>	8. O sea, existe una función $\varepsilon : (a, b) \to \mathbb{R}$ con $|\varepsilon| = 1$ tal que $$ B(t) = \varepsilon(t) n$$
>>	9. Luego $$ \langle B(t), n \rangle = \langle \varepsilon(t) n, n \rangle = \varepsilon(t) \langle n, n \rangle = \varepsilon(t) $$
>>	10. Como $\varepsilon$ es continua (por que $B$ lo es, porque $N$ y $T$ los son porque $\alpha$ es suave), por el teorema de los valores intermedios resulta que $\varepsilon$ es constante, igual a $1$ o a $-1$. 
>>	11. En el primer caso, $B = n$, con lo cual $0 = B' = -\tau N$, de donde $\tau = 0$. Si $B = -n$, el argumento es similar.
>
>>[!Resumen]-
>>- **(⇐) $\tau=0$ ⇒ planar**
>>	1. $\tau=0$ ⇒ $B'=0$ ⇒ $B$ constante, fijar $n:=B$.
>>	2. Definir el plano $P=\{q:\langle q-\alpha(t_0),n\rangle=0\}$.
>>	3. Considerar $f(t)=\langle\alpha(t)-\alpha(t_0),n\rangle$ y derivar $f'=0$.
>>	4. Usar $f(t_0)=0$ para concluir $\alpha(t)\in P$.
>>- **(⇒) planar ⇒ $\tau=0$**
>>	1. Si $\alpha$ está en $P$ con normal $n$, entonces $\langle\alpha(t)-\alpha(t_0),n\rangle=0$.
>>	2. Derivar: $\langle T,n\rangle=0$ y derivar de nuevo $0=\langle T',n\rangle=\kappa\langle N,n\rangle$.
>>	3. Como $\kappa\neq 0$, $\langle N,n\rangle=0$ ⇒ $n\perp T,N$ ⇒ $\epsilon(t)n=B(t)$.
>>	4. $B$ continua ($\alpha$ suave) entonces $B(t)=\pm n$ luego $0=B'=-\tau N$ (curvatura nunca nula entonces $\tau=0$) 
>	

>[!Remark]-
>El signo de la torsión indica si la curva se parece al pasamanos de una escalera de caracol para diestros ($\tau > 0$) o zurdos ($\tau < 0$). O si se parece a la vid ($\tau > 0$) o al lúpulo ($\tau < 0$), por la manera en que se enroscan los tallos de estas plantas.

>[!Definition] Helice
>Se dice que una curva $\alpha : (a, b) \to \mathbb{R}^3$ de rapidez unitaria y curvatura nunca nula es una hélice si existe un vector unitario $u \in \mathbb{R}^3$ tal que $\langle \alpha'(t), u \rangle = \text{cte}\quad\forall t$

>[!Theorem] **
>Si $\alpha : (a, b) \to \mathbb{R}^3$ es una hélice con curvatura $\kappa : (a, b) \to \mathbb{R}$ positiva y torsión $\tau : (a, b) \to \mathbb{R}$, entonces $\tau/\kappa$ es constante.
>>[!Proof]-
>>- $(\Rightarrow)$
>>	1. Por definicion de helice $\alpha'$ y $u$ son unitarios
>>	2. $\langle \alpha'(t), u \rangle = \cos \theta$, donde $\theta$ es el ángulo entre $\alpha'(t)$ y $u$, que es constante por hipótesis.
>>	3. Si $|\cos \theta| = 1$, entonces $T(t) = \pm u$ es constante, lo que implica que $\alpha$ es una recta y $\kappa = 0$, contradiciendo la hipótesis. Así, $|\cos \theta| < 1$.
>>	4. Derivamos obtenemos $0= \kappa \langle N, u \rangle$. Como $\kappa$ es nunca nula $\langle N, u \rangle = 0$. 
>>	5. Derivamos nuevamente $$ 0 = \langle N', u \rangle + \langle N, u' \rangle = \langle -\kappa T + \tau B, u \rangle = -\kappa \langle T, u \rangle + \tau \langle B, u \rangle = -\kappa \cos \theta + \tau \langle B, u \rangle . \quad (3) $$
>>	6. Ahora vemos que $\langle B, u \rangle$ es constante. Calculamos $$\langle B', u \rangle = \langle -\tau N, u \rangle = -\tau \langle N, u \rangle = 0$$
>>	7. Para cada $t$, escribimos $u$ en la base $\{T(t), N(t), B(t)\}$, $$ u = \langle u, T \rangle T + \langle u, N \rangle N + \langle u, B \rangle B = (\cos \theta) T + \langle u, B \rangle B$$
>>	8. Como $u$ es unitario y la base es ortonormal vemos (usando producto interno) $$ 1 = \|u\|^2 = \cos^2 \theta + \langle u, B \rangle^2$$
>>	9. Luego, $\langle u, B \rangle = \pm \text{sen } \theta = \text{constante}$. Ademas Por (3) $$-\kappa \cos \theta \pm \tau \text{sen } \theta = 0$$
>>	10. De allí, $\tau/\kappa = \pm \cot \theta = \text{constante}$.
>>- $(\Leftarrow)$
>>	1. Supongamos que $\tau/\kappa = c$ para alguna constante $c \in \mathbb{R}$. Podemos escribir $c = \cot \theta$ para algún $\theta \in (0, \pi)$, con $\theta \ne \pi/2$.
>>	2. Definimos el vector $u(t) = (\cos \theta) T(t) + (\sin \theta) B(t)$ y derivamos con respecto a $t$ $$ u' = (\cos \theta) T' + (\sin \theta) B' = (\cos \theta) \kappa N + (\sin \theta) (-\tau N) = (\kappa \cos \theta - \tau \sin \theta) N. $$
>>	3. Como $\tau/\kappa = \cot \theta$, tenemos $\tau \sin \theta = \kappa \cos \theta$, por lo que $u' = 0$.
>>	4. Así, $u$ es un vector constante. Además $$ \|u\|^2 = \cos^2 \theta + \sin^2 \theta = 1, $$por lo que $u$ es unitario. 
>>	5. Finalmente $$ \langle \alpha'(t), u \rangle = \langle T(t), (\cos \theta) T(t) + (\sin \theta) B(t) \rangle = \cos \theta, $$que es constante. 
>>	6. Por definición, $\alpha$ es una hélice. $\square$
>
>>[!Resumen]-
>>- **(⇒) Hélice ⇒ $\tau/\kappa$ cte**
>>	1. Caso $|\cos \theta| = 1$, entonces $T(t) = \pm u$ es constante, lo que implica que $\alpha$ es una recta y $\kappa = 0$. abs
>>	2. Caso $\langle T,u\rangle=\cos\theta<1$ constante.
>>	3. Derivar: $0=\kappa\langle N,u\rangle$ ⇒ $\langle N,u\rangle=0$. por que $\kappa\neq0$ 
>>	4. Derivar otra vez: $0=-\kappa\cos\theta+\tau\langle B,u\rangle$.
>>	5. Escribimos $u$ en base frenet entonces $1= \|u\|^2=\cos^2\theta+\langle B,u\rangle^2$
>>	6. Usamos paso 4. para concluir $\tau/\kappa=\pm\cot\theta$.
>>- **(⇐) $\tau/\kappa$ cte ⇒ hélice**
>>	1. Tomar $\theta$ con $\cot\theta=\tau/\kappa$ y definir $u=\cos\theta\,T+\sin\theta\,B$.
>>	2. Derivamos y usamos $\tau \sin \theta = \kappa \cos \theta$ por def de cot, para ver $u'=0$. Osea constante, unitario es por definicion
>>	3. Finalmente $\langle T,u\rangle=\cos\theta$ es constante. Reemplazando $u$ 

>[!Definition] Curvatura de reparametrizacion
>Sea $\alpha : [a, b] \to \mathbb{R}^3$ una curva regular de longitud $L$. Se define la **curvatura** de $\alpha$ en el instante $t$ mediante
> $$\kappa_{\alpha}(t) = \kappa_{\beta}(\sigma(t)),$$
>donde $\sigma : [a, b] \to [0, L]$ es la función longitud de arco de $\alpha$, $\beta : [0, L] \to \mathbb{R}^3$ es la reparametrización por longitud de arco de $\alpha$, y $\kappa_{\alpha}, \kappa_{\beta}$ son las curvaturas de $\alpha$ y $\beta$, respectivamente.
>Bajo estas condiciones vale,
>$$\kappa_{\alpha }=\frac{\lVert \alpha '\times\alpha '' \rVert}{\lVert \alpha ' \rVert ^{3} }$$
>>[!Proof]-
>>4. Como $\sigma$ es la función longitud de arco, sabemos que $\sigma'(t) = \|\alpha'(t)\|$ para todo $t$ por [[Definiciones#^4b79f2]]
>>5. Tenemos que $\alpha(t) = \beta(\sigma(t))$ entonces $\alpha'(t) = \beta'(\sigma(t))\sigma'(t)$ y $$ \alpha''(t) = \beta''(\sigma(t))(\sigma'(t))^2 + \beta'(\sigma(t))\sigma''(t)$$
>>6. Entonces, como $x \times x = 0$ para todo $x \in \mathbb{R}^3$, y usando distributiva en producto escalar y ademas que la imagen de $\sigma$ es un escalar, tenemos: $$ \alpha' \times \alpha'' = \beta'(\sigma)\sigma' \times (\beta''(\sigma)(\sigma')^2 + \beta'(\sigma)\sigma'') = \beta'(\sigma) \times \beta''(\sigma)(\sigma')^3 $$
>>7. Tomando norma miembro a miembro y usando 1. $$ \|\alpha' \times \alpha''\| = \|\beta'(\sigma) \times \beta''(\sigma)\| |\sigma'|^3 = \|\beta'(\sigma) \times \beta''(\sigma)\| \|\alpha'(t)\|^3. $$
>>8. Como $\|\beta'\| = 1$, resulta que $\langle \beta', \beta'' \rangle = 0$ (Derivando) . Osea el angulo entre ellos es 90  
>>9. Así por 5. , defincion de producto cruz y definicion de curvatura $$ \|\beta'(\sigma) \times \beta''(\sigma)\| = \|\beta'(\sigma)\| \|\beta''(\sigma)\|\left\lVert  \sin\left( \frac{\pi}{2} \right)  \right\rVert  = \lVert \beta''(\sigma) \rVert =\kappa_\beta(\sigma). $$
>>10. En consecuencia $$ \kappa_\alpha = \kappa_\beta(\sigma) = \frac{\|\alpha' \times \alpha''\|}{\|\alpha'\|^3}$$como deseábamos.  
>
>>[!Resumen]-
>>11. Notar $\sigma'(t)=\|\alpha'(t)\|$ y $\alpha=\beta\circ\sigma$ ⇒ derivamos $\alpha'$ y $\alpha''$.
>>12. Calcular $\alpha'\times\alpha''=(\beta'\times\beta'')(\sigma')^3$ ($x\times x=0$).
>>13. $\|\beta'\|=1$ entonces $\langle \beta', \beta'' \rangle = 0$ entonces su angulo es 90
>>14. Usando def de producto cruz con seno $\|\beta'\times\beta''\|=\|\beta''\|=\kappa_\beta$. 
>>15. Concluir $\kappa_\alpha=\|\alpha'\times\alpha''\|/\|\alpha'\|^3$.

^f3efb8

# Curvas Planas

>[!Definition] Curvatura signada
>La **curvatura signada** de una curva suave $\alpha : (a, b) \to \mathbb{R}^2$ de rapidez unitaria es la función
>$$ k : (a, b) \to \mathbb{R}, \quad k(t) = \det(\alpha'(t), \alpha''(t)). $$
>
>**Nota.** En el práctico se ve que $|k| = \kappa$.

>[!Remark]-
>Sea $I : \mathbb{R}^2 \to \mathbb{R}^2$ la rotación en un ángulo recto en sentido antihorario alrededor del origen, o sea, $I(x, y) = (-y, x)$. Equivalentemente, $I$ es la multiplicación por $i$, previa la identificación canónica de $\mathbb{R}^2$ con $\mathbb{C}$.

>[!Proposition]
>Sean $\alpha$ y $k$ como en la definición de más arriba. Entonces para todo $s$ vale
>$$ k(s) = \langle I(\alpha'(s)), \alpha''(s) \rangle. $$
>Notar ademas que $I(\alpha '(s))=N(s)$ por que es rotar  
>>[!Proof]-
>>1. En general, para todo par de vectores $u, v \in \mathbb{R}^2$ se cumple que $\det(u, v) = \langle I(u), v \rangle$, en particular para $u = \alpha'(s)$ y $v = \alpha''(s)$.
>>2. Veamoslo, si $u = (x, y)$ y $v = (\xi, \eta)$, tenemos $$ \det(u, v) = \det \begin{pmatrix} x & \xi \\ y & \eta \end{pmatrix} = x\eta - y\xi, $$
>>3. Y por el otro lado
>>$$ \langle I(x, y), (\xi, \eta) \rangle = \langle (-y, x), (\xi, \eta) \rangle = -y\xi + x\eta = x\eta - y\xi. $$
>
>>[!Resumen]-
>>4. Recordar la identidad $\det(u,v)=\langle Iu,v\rangle$ en $\mathbb{R}^2$.
>>5. Verificarla por coordenadas con $u=(x,y)$, $v=(\xi,\eta)$.
>>6. Aplicarla a $u=\alpha'(s)$, $v=\alpha''(s)$.

>[!Definition]-
>La curvatura signada de curvas regulares planas, no necesariamente de rapidez unitaria, se define de manera análoga a la curvatura de curvas regulares en $\mathbb{R}^2$.

>[!Proposition]
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva de rapidez unitaria con curvatura signada $k : (a, b) \to \mathbb{R}$. Si $\alpha'(s) = (\cos \theta(s), \sin \theta(s))$ para cierta función $\theta : (a, b) \to \mathbb{R}$ de clase $C^2$, entonces $k = \theta'$.
>
>**Comentario.** Se puede demostrar que funciones $\theta$ así siempre existen y dos cualesquiera difieren en un múltiplo entero de $2\pi$.
>>[!Proof]-
>>Calculamos
>>$$ k(s) = \det(\alpha'(s), \alpha''(s)) = \det \begin{pmatrix} \cos \theta(s) & -\sin(\theta(s))\theta'(s) \\ \sin \theta(s) & \cos(\theta(s))\theta'(s) \end{pmatrix} $$
>>$$ = (\cos^2 \theta(s) + \sin^2 \theta(s))\theta'(s) = \theta'(s). $$


^bb97e8

>[!Definition]- Integral Multiple
>Sea $\beta : [a, b] \to \mathbb{R}^n$ una curva continua. Si $\beta(t) = (y_1(t), \dots, y_n(t))$, se define
>$$ \int_a^b \beta(t) \, dt = \left( \int_a^b y_1(t) \, dt, \dots, \int_a^b y_n(t) \, dt \right). $$

>[!Theorem] Teorema fundamental de las curvas planass
>Sea $\tilde{k} : [a, b] \to \mathbb{R}$ una función de clase $C^2$ y sean $p, u \in \mathbb{R}^2$ con $\|u\| = 1$. Entonces existe una curva plana $\alpha : [a, b] \to \mathbb{R}^2$ suave de rapidez unitaria tal que $\alpha(a) = p$, $\alpha'(a) = u$ y $\tilde{k}$ es la función curvatura signada de $\alpha$.
>
>**Comentario.** Se puede demostrar que una curva $\alpha$ con esas propiedades es única.
>>[!Proof]-
>>1. Proponemos $\alpha : [a, b] \to \mathbb{R}^2$ de la forma $$ \alpha(s) = p + \int_a^s (\cos \theta(t), \sin \theta(t)) \, dt $$para cierta función $\theta : [a, b] \to \mathbb{R}$. 
>>2. Como $u$ es unitario, $u = (\cos(\theta_o), \sin(\theta_o))$ para cierto ángulo $\theta_o$.
>>3. Se cumple que $$ \alpha(a) = p \quad \text{y} \quad \alpha'(s) = (\cos \theta(s), \sin \theta(s))$$
>>4. Necesitamos que $\tilde{k}(s) = k(s)$, o equivalentemente, por [[Definiciones#^bb97e8]], que $\tilde{k}(s) = \theta'(s)$.
>>5. Luego, tomando $$ \theta(s) = \theta_o + \int_a^s \tilde{k}(t) \, dt $$la curva $\alpha$ satisface lo requerido
>
>>[!Resumen]-
>>6. Proponer $\alpha(s)=p+\int_a^s(\cos\theta(t) ,\sin\theta(t))\,dt$.
>>7. Como $u$ es unitario, $u = (\cos(\theta_o), \sin(\theta_o))$ para cierto ángulo $\theta_o$.
>>8. Luego definimos $\theta(s)=\theta_0+\int_a^s\tilde{k}(t)\,dt$
>>9. Como $\alpha(s) '=(\cos\theta(s),\sin\theta(s))$ entonces $k(s)=\theta'(s)=\tilde{k}(s)$ 
>>10. Concluir rapidez unitaria y las otras hipotesis

>[!Theorem] Teorema fundamental de las curvas espaciales
>Sea $\kappa : (a, b) \to \mathbb{R}$ una función positiva de clase $C^2$ y sea $\tau : (a, b) \to \mathbb{R}$ una función de clase $C^1$. Dados $t_o \in (a, b)$, $p \in \mathbb{R}^3$ y una base ortonormal $\{t, n, t \times n\}$ de $\mathbb{R}^3$, existe una única curva suave de rapidez unitaria $\alpha : (a, b) \to \mathbb{R}^3$ tal que su curvatura y su torsión son $\kappa$ y $\tau$, respectivamente, y además $\alpha(t_o) = p$, $T(t_o) = t$, $N(t_o) = n$ y $B(t_o) = t \times n$ 
>($\{T, N, B\}$ es el aparato de Frenet de $\alpha$).
>>[!Proof]
>>No damos la prueba.

^d9aef1

>[!Proposition]
>La longitud de cualquier curva suave $\alpha : [a, b] \to \mathbb{R}^n$ con $\alpha(a) = p$ y $\alpha(b) = q$ es mayor o igual que $\|q - p\|$.
>>[!Proof]-
>>1. Escribimos $$ q - p = \alpha(b) - \alpha(a) = \int_a^b \alpha'(t) \, dt $$
>>2. Hacemos producto escalar contra $q - p$ miembro a miembro y obtenemos $$ \begin{align}\|q - p\|^2 & = \left\langle \int_a^b \alpha'(t) \, dt, q - p \right\rangle \\ & = \int_a^b \langle \alpha'(t), q - p \rangle \, dt\\& \le \int_a^b \|\alpha'(t)\| \|q - p\| \, dt \\& = \|q - p\| \int_a^b \|\alpha'(t)\| \, dt \end{align}$$ (hemos usado la desigualdad de Schwarz).
>>3. Ahora, si $q = p$, el enunciado es claramente verdadero. Si $q \ne p$, tenemos $\|q - p\| \ne 0$ y así $$ \|q - p\| \le \int_a^b \|\alpha'(t)\| \, dt = \text{long}(\alpha), $$como queríamos.
>
>>[!Resumen]-
>>4. Escribir $q-p=\int_a^b\alpha'(t)\,dt$.
>>5. Tomar producto interno con $q-p$ y aplicar Cauchy-Schwarz.
>>6. Cancelar $\|q-p\|$ si $q\neq p$ para obtener $\|q-p\|\le\int_a^b\|\alpha'(t)\|\,dt$.
>

>[!Definition]- Circunferencia osculatriz y Evoluta
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva de rapidez unitaria y curvatura signada $k : (a, b) \to \mathbb{R}$ positiva.
>La **circunferencia osculatriz** en el instante $t$ es la circunferencia $C_t$ de radio $$r(t) := \frac{1}{k(t)}$$ (el radio de curvatura en $t$) y centro
>$$ c(t) = \alpha(t) + r(t) I \alpha'(t), $$
>donde $I(x, y) = (-y, x)$, la trasformación de matriz $I = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.
>Se ve en el práctico que $C_t$ es la circunferencia que mejor aproxima a la curva $\alpha$ en $t$.
>La curva $c$ se llama la **evoluta** de $\alpha$.

>[!Proposition]-
>Sea $\alpha$ como arriba, que cumpla además que $k$ es estrictamente decreciente. Entonces para $t_1 < t_2$ en $(a, b)$ vale que
>$$ \text{long}\left( c|_{[t_1, t_2]} \right) = r(t_2) - r(t_1). $$
>Es decir, la longitud de un arco de evoluta de $\alpha$ es igual al incremento del radio de curvatura.
>>[!Proof]-
>>7. Notar que $r' > 0$ pues $k$ decrece. 
>>8. Sabemos $\alpha''(s)=T'=\tilde{k}(s) N$ para alguna funcion $\tilde{k}$ entonces $$k(s)=\langle\alpha ''(s),I(\alpha '(s))\rangle=\langle \tilde{k}(s)N,N(s)\rangle=\tilde{k}(s)$$ tenemos que $\alpha''(s)=k(s)N(s) = k(s) I \alpha'(s)$.
>>9. Calculamos $$ c' = \alpha' + r' I \alpha' + r I \alpha'' = \alpha' + r' I \alpha' + r I k I \alpha' = \alpha' + r' I \alpha' - r k \alpha' = r' I \alpha', $$pues $I^2(z) = -z$ para todo $z \in \mathbb{R}^2$.
>>10. Así, $\|c'(t)\| = r'(t)$ ($k$ es positiva por eso no hay modulo y rapidez unitaria) para todo $t$. 
>>11. Luego si $t_1 < t_2$ están en $(a, b)$ resulta que
>>$$ \text{long}\left( c|_{[t_1, t_2]} \right) =\int_{t_{1}}^{t_{2}}\lVert c'(t) \rVert dt  = \int_{t_1}^{t_2} r'(t) \, dt = r(t_2) - r(t_1), $$
>
>>[!Resumen]-
>>- **Pasos**
>>	1. $r=1/k$ y $k$ decreciente ⇒ $r'>0$.
>>	2. Usar $\alpha''=k I\alpha'$ (curva plana unitaria).
>>	3. Derivar $c=\alpha+r I\alpha'$ y simplificar con $I^2=-1$ ⇒ $c'=r' I\alpha'$.
>>	4. Entonces $\|c'\|=r'$ y la longitud es $r(t_2)-r(t_1)$.

>[!Theorem]- Teorema de Tait-Kneser
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva de rapidez unitaria y curvatura signada $k : (a, b) \to \mathbb{R}$ positiva y estrictamente decreciente. Entonces las circunferencias osculatrices de $\alpha$ son disjuntas dos a dos y anidadas.
>>[!Proof]-
>>14. Sean $t_1 < t_2$ en $(a, b)$. Mostramos a continuación que $C_{t_1} \subsetneq C_{t_2}$.
>>15. Por la proposición anterior, la distancia entre los centros de esas circunferencias satisface $$ \|c(t_2) - c(t_1)\| \le \text{long}\left( c|_{[t_1, t_2]} \right) = r(t_2) - r(t_1). \quad (5) $$
>>16. Sea $p \in C_{t_1}$, o sea, $\|p - c(t_1)\| = r(t_1)$. Veamos que $p$ está en el interior de $C_{t_2}$ o sea, $\|p - c(t_2)\| < r(t_2)$. Calculamos
>>$$ \begin{align} \|p - c(t_2)\| & = \|p - c(t_1) + c(t_1) - c(t_2)\| \\ & \le \|p - c(t_1)\| + \|c(t_1) - c(t_2)\| \\ & \le r(t_1) + r(t_2) - r(t_1) = r(t_2), \end{align} $$
>>con lo cual $\|p - c(t_2)\| \le r(t_2)$.
>>17. Como $r(t_1) < r(t_2)$, la inclusión es estricta y las circunferencias no se tocan. $\square$
>
>>[!Resumen]-
>>- **Esquema**
>>	1. Usar la proposición previa: $\|c(t_2)-c(t_1)\|\le r(t_2)-r(t_1)$.
>>	2. Para $p\in C_{t_1}$, aplicar desigualdad triangular a $\|p-c(t_2)\|$.
>>	3. Obtener $\|p-c(t_2)\|\le r(t_2)$ y como $r(t_1)<r(t_2)$, inclusión estricta.

# Transformaciones Rigidas

>[!Definition]- Transformaciones ortogonales
>Una matriz $C$ $n \times n$ se dice **ortogonal** si sus columnas forman una base ortonormal de $\mathbb{R}^n$, o equivalentemente, si $C^T C = I_{n \times n}$.
>Si $C$ es ortogonal, $\det C = \pm 1$. En efecto,
>$$ 1 = \det I = \det(C^T C) = \det C^T \det C = \det C \det C = (\det C)^2. $$
>Si $\det C = 1$, $C$ se llama **rotación**.
>La matriz $C$ induce una transformación lineal de $\mathbb{R}^n$ en $\mathbb{R}^n$, $x \mapsto Cx$ ($x$ vector columna), que también llamamos $C$, por abuso de notación.

>[!Proposition]
>Sea $C : \mathbb{R}^n \to \mathbb{R}^n$ una transformación lineal. Entonces son equivalentes:
>a) $C$ es ortogonal.
>b) $C$ preserva productos internos.
>c) $C$ preserva normas.
>>[!Proof]-
>>- b) $\Rightarrow$ a) Resulta de que si $C$ preserva poductos internos, entonces lleva la base canónica (que es ortonormal) en una base ortonormal. $\square$
>> [!Summary] Resumen de la prueba
>> - **(a ⇔ b):** La definición de matriz ortogonal ($C^T C = I$) es equivalente a decir que la transformación preserva el producto interno.
>> - **(b ⇔ c):** La preservación del producto interno implica la de la norma; el recíproco se demuestra mediante la identidad de polarización, que expresa el producto interno en términos de normas.
>
>>[!Resumen]-
>>- **Equivalencias**
>>	1. (a ⇔ b) $C^T C=I$ equivale a preservar producto interno.
>>	2. (b ⇒ c) usar $\|x\|^2=\langle x,x\rangle$.
>>	3. (c ⇒ b) aplicar la identidad de polarización para recuperar $\langle x,y\rangle$.

^8d0719

>[!Proposition]
>Sea $C$ una matriz ortogonal $3 \times 3$. Entonces para todo par de vectores $x, y \in \mathbb{R}^3$ vale que
>$$ Cx \times Cy = \det(C) C(x \times y). $$
>>[!Proof]-
>>1. Recordemos que $\langle x,z\rangle = \langle y ,z\rangle$ 
>>2. Notamos que, $$ \langle Cx\times Cy, Cz\rangle=\det(Cx,Cy,Cz)=\det(C[x,y,z])=\det(C)\det(x,y,z)=\det(C)\langle x\times y ,z\rangle$$pero como $C$ es ortogonal entonces $\langle x\times y,z\rangle=\langle C(x \times y),Cz\rangle$
>>3. Y esto vale para todo $Cz$ entonces queda probada la igualdad
>
>>[!Resumen]-
>>4. Queremos probar $$\langle Cx\times Cy,Cz\rangle=\langle \det(C)C(x\times y),Cz\rangle$$ 
>>5. Sale usando $\langle x\times y,z\rangle=\det(x,y,z)$ y $\langle x\times y,z\rangle=\langle C(x \times y),Cz\rangle$

>[!Proposition]- Matriz Ortogonal
>Sea $C$ una transformación ortogonal de $\mathbb{R}^3$. Entonces la matriz de $C$ respecto de alguna base ortonormal de $\mathbb{R}^3$ tiene la forma
>$$ \begin{pmatrix} R_\theta & 0 \\ 0 & \det C \end{pmatrix} $$
>para cierto $\theta \in \mathbb{R}$. En particular, si $\det C = 1$, $C$ es una rotación alrededor de una recta que pasa por el origen.

>[!Definition] Transformacion Euclideana
>Una función $T : \mathbb{R}^n \to \mathbb{R}^n$ se llama **transformación euclidiana** de $\mathbb{R}^n$ si es de la forma $T(x) = Cx + u$, donde $C$ es una transformación ortogonal y $u \in \mathbb{R}^n$.
>La transformación euclidiana se dice **rígida** (o que **preserva la orientación**) si $C$ es una rotación, o sea, si $\det C = 1$.

>[!Remark]-
>Antes de enunciar el teorema que sigue, veamos que para derivar un producto de dos curvas matriciales vale una regla similar a la que usamos para derivar el producto de dos funciones.
>
>Sean $A : (a, b) \to \mathbb{R}^{n \times m}$ una función suave, es decir, $A_{i,j} : (a, b) \to \mathbb{R}$ es una función suave para todo $1 \le i \le n$, $1 \le j \le m$.
>Se define la función $A' : (a, b) \to \mathbb{R}^{n \times m}$ mediante
>$$ (A'(t))_{i,j} = (A_{i,j})'(t) $$
>(o sea, se deriva entrada por entrada).

>[!Theorem]-
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva suave de rapidez unitaria y curvatura signada $k : (a, b) \to \mathbb{R}$. Sea $T : \mathbb{R}^2 \to \mathbb{R}^2$ una transformación euclidiana del plano y sea $\bar{\alpha} = T \circ \alpha$. Entonces $\bar{\alpha}$ tiene rapidez unitaria y la curvatura signada $\bar{k}$ de $\bar{\alpha}$ es $\pm k$, con $+$ si $T$ es rígida y $-$ si no. 
>>[!Proof]-
>>6. Supongamos que $T(x) = Cx + u$ con $C$ ortogonal. Calculamos $$ \bar{\alpha}(t) = T(\alpha(t)) = C\alpha(t) + u. $$
>>7. Luego, $\bar{\alpha}'(t) = C\alpha'(t)$ para todo $t$ y así, $\|\bar{\alpha}'\| = \|C\alpha'\| = \|\alpha'\| = 1$, con lo cual $\bar{\alpha}$ tiene rapidez unitaria.
>>8. Ademas $\bar{\alpha}''(t) = C\alpha''(t)$. Entonces, si $I(x, y) = (-y, x)$, $$ \bar{k}(t) = \langle I(\bar{\alpha}'(t)), \bar{\alpha}''(t) \rangle = \langle I(C\alpha'(t)), C\alpha''(t) \rangle. \quad (7) $$
>>9. Como $C$ es ortogonal tiene la forma $$ \begin{pmatrix} \cos \theta & -\varepsilon \sin \theta \\ \sin \theta & \varepsilon \cos \theta \end{pmatrix}. $$ con $\varepsilon=\det(C)=\pm 1$ 
>>10. Ahora verificamos que $I$ conmuta o anticonmuta con $C$, dependiendo de si $\varepsilon = 1$ o $-1$. En efecto, $$ IC = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} \cos \theta & -\varepsilon \sin \theta \\ \sin \theta & \varepsilon \cos \theta \end{pmatrix} = \begin{pmatrix} -\sin \theta & -\varepsilon \cos \theta \\ \cos \theta & -\varepsilon \sin \theta \end{pmatrix}, $$ $$ CI = \begin{pmatrix} \cos \theta & -\varepsilon \sin \theta \\ \sin \theta & \varepsilon \cos \theta \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} -\varepsilon \sin \theta & -\cos \theta \\ \varepsilon \cos \theta & -\sin \theta \end{pmatrix}. $$
>>11. Luego $IC = \varepsilon CI$.
>>12. De 3. y usando que $C$ es rotar, si rotamos las dos componentes el producto interno no cambia. Resulta que $$ \bar{k}(t) = \langle I(C\alpha'(t)), C\alpha''(t) \rangle = \varepsilon \langle C(I\alpha'(t)), C\alpha''(t) \rangle = \varepsilon \langle I\alpha'(t), \alpha''(t) \rangle = \varepsilon k(t). $$
>
>>[!Resumen]-
>>- **Ruta**
>>	1. Derivar $\bar{\alpha}=C\alpha+u$ ⇒ $\bar{\alpha}'=C\alpha'$ y $\bar{\alpha}''=C\alpha''$.
>>	2. Ver que $IC=\varepsilon CI$ con $\varepsilon=\det(C)=\pm 1$.
>>	3. Concluir $\bar{k}=\varepsilon k$ y rapidez unitaria preservada.

>[!Proposition]
>Las transformaciones euclidianas de $\mathbb{R}^n$ preservan distancia. (Osea son isometrias lineals)  
>>[!Proof]-
>>$$ \|Tx - Ty\| = \|Cx + u - (Cy + u)\| = \|Cx - Cy\| = \|C(x - y)\| = \|x - y\|. $$
>
>>[!Resumen]-
>>- **Cálculo directo**
>>	1. $Tx=Cx+u$ ⇒ $Tx-Ty=C(x-y)$.
>>	2. Como $C$ es ortogonal, $\|C(x-y)\|=\|x-y\|$.

>[!Theorem]
>Sea $T : \mathbb{R}^n \to \mathbb{R}^n$ una función que preserva distancias (Osea isometria) , o sea,
>$$ \|Tx - Ty\| = \|x - y\| $$
>para todo $x, y \in \mathbb{R}^n$. Entonces $T$ es euclidiana, o sea, de la forma
>$$ T(x) = Cx + u, $$
>donde $C$ es ortogonal, y en particular, lineal.
>>[!Proof]-
>>1. Supongamos primero que $T(0) = 0$ y es una funcion que preserva distancias. Veamos que
>>	- $T$ Preserva normas
>>		1. $\|T(x)\| = \|T(x) - 0\| = \|T(x) - T(0)\| = \|x - 0\| = \|x\|$ (en la penúltima igualdad usamos que $T$ preserva distancias).
>>	- $T$ Preserva productos internos
>>		1. Probamos recien que $\|Tx - Ty\|^2 = \|x - y\|^2$, o sea, $$\langle Tx - Ty, Tx - Ty \rangle = \langle x - y, x - y \rangle$$
>>		2. Distribuyendo, $$ \|Tx\|^2 + \|Ty\|^2 - 2\langle Tx, Ty \rangle = \|x\|^2 + \|y\|^2 - 2\langle x, y \rangle. $$
>>		3. Pero por preservar normas sabemos que $\|Tx\|^2 = \|x\|^2$ y $\|Ty\|^2 = \|y\|^2$, con lo cual, $\langle Tx, Ty \rangle = \langle x, y \rangle$.
>>	- $T$ es lineal
>>		1. Basta mostrar que para todo $x, y, \lambda$ se cumple que $$ \|T(x + y) - (Tx + Ty)\|^2 = 0 \quad \text{y} \quad \|T(\lambda x) - \lambda Tx\|^2 = 0. $$
>>		2. Verificamos la primera identidad y dejamos la segunda como ejercicio. 
>>		3. Usamos (1) y (2) repetidas veces. $$ \begin{align} \|T(x + y) - (Tx + Ty)\|^2 & = \|T(x + y)\|^2 - 2\langle T(x + y), Tx + Ty \rangle + \|Tx + Ty\|^2 \\ & = \|x + y\|^2 - 2\langle T(x + y), Tx \rangle - 2\langle T(x + y), Ty \rangle \\ & \quad + \|Tx\|^2 + 2\langle Tx, Ty \rangle + \|Ty\|^2 \\ & = \|x\|^2 + 2\langle x, y \rangle + \|y\|^2 - 2\langle x + y, x \rangle - 2\langle x + y, y \rangle \\ & \quad + \|x\|^2 + 2\langle x, y \rangle + \|y\|^2 \\ & = \|x\|^2 + 2\langle x, y \rangle + \|y\|^2 \\ & \quad - 2(\|x\|^2 + \langle y, x \rangle) - 2(\langle x, y \rangle + \|y\|^2) \\ & \quad + \|x\|^2 + 2\langle x, y \rangle + \|y\|^2 \\ & = 0. \end{align} $$
>>4. Así, $T$ es ortogonal. 
>>5. Ahora tratamos el caso general. Sea $T(0) = u \in \mathbb{R}^n$. Definimos $C(x) = T(x) - u$. 
>>6. Luego, $C(0) = T(0) - u = u - u = 0$ y es fácil ver que $C$ preserva distancias. 
>>7. Por lo anterior, $C$ es ortogonal y en consecuencia, $T(x) = C(x) + u$ con $C$ ortogonal
>>8. Osea $T$ es euclidea 
>
>>[!Resumen]-
>>1. Caso $T(0)=0$: de preservación de distancias se obtiene preservación de normas y producto interno.
>>2. Usando que preserva productos internos se muestra linealidad.
>>3. Concluyendo que $T$ es ortogonal.
>>4. Caso general: $T(0)=u$ entonces definimos  $C(x)=T(x)-u$ reduce al caso previo y $T(x)=Cx+u$.

^427a25

>[!Remark]-
>Veamos a continuacion que como era de esperar la definicion de transformacion euclideana le da al origen un protagonismo que no tiene

>[!Proposition] Caso $n=1$
>Las transformaciones euclidianas de la recta real son traslaciones o reflexiones respecto de puntos en $\mathbb{R}$.
>> [!Proof]-
>> 1. Sabemos que $T(x) = \varepsilon x + u$, con $\varepsilon = \pm 1$ y $u \in \mathbb{R}$.
>> 2. Si $\varepsilon = 1$, $T$ es una traslación en $u$. 
>> 3. Veamos que si $\varepsilon = -1$, entonces $T$ es la reflexión en $u/2$. 
>> 4. En efecto notemos que $$ -\left(x - \frac{u}{2}\right) + \frac{u}{2} = -x + \frac{u}{2} + \frac{u}{2} = -x + u=T(x) $$
>> 5. Pero $-\left( x-\frac{u}{2} \right)+\frac{u}{2}$ es mover el segmento que une a $x$ con $p$  al origen $x\mapsto x-\frac{u}{2}$ compuesto con hacer reflexion respecto del origen $x\mapsto -x$ compuesta con mover el vector resultante a $\frac{u}{2}$  nuevamente $x\mapsto x+\frac{u}{2}$. 
>> 6. Entonces $T(x)$  es una reflexion respecto de $\frac{u}{2}$
>
>>[!Resumen]-
>>1. Partir de $T(x)=\varepsilon x+u$ con $\varepsilon=\pm 1$.
>>2. Si $\varepsilon=1$, es traslación.
>>3. Si $\varepsilon=-1$, reescribir $T(x)=-(x-\frac{u}{2})+\frac{u}{2}$ para ver la reflexión en $\frac{u}{2}$.

>[!Definition]- Caso $n=2$
>Denotamos por $R_{z, \theta}$ la rotación en ángulo $\theta$ alrededor del punto $z \in \mathbb{R}^2$. Se obtiene de conjugar $R_\theta$ por la traslación $x \mapsto x + z$, o sea,
> $$ R_{z, \theta}(x) = R_\theta(x - z) + z = R_{\theta}(x)+z-R_{\theta}(z) =R_{\theta}(x)+b$$
> Osea rotar alrededor del punto $z$ es una transformacion euclidea 

^ff0d1a

>[!Remark]- Transformacion rigida sobre planos
> En el práctico [[GD - Pr3#^4d80f2]] se ve que toda transformación rígida del plano es una traslación o una rotación alrededor de algún punto.

>[!Definition] Caso $n=3$
>Un **tirabuzón** es la composición de una rotación alrededor de una recta fija en $\mathbb{R}^3$ con una traslación a lo largo de esa recta.
>- Esas transformaciones conmutan.
>- Tanto la rotación como la traslación pueden ser la identidad. En el primer caso, el tirabuzón es una traslación y en el segundo, una rotación.

>[!Theorem] Teorema de Chasles
>Toda transformación rígida de $\mathbb{R}^3$ es un tirabuzón.
>>[!Proof]-
>>1. Supongamos que la transformación rígida es $T$, dada por $T(x) = Cx + u$, donde $C$ es una rotación, es decir una transformación ortogonal con $\det C = 1$.
>>2. Consideramos solo el caso particular en que $$ C = \begin{pmatrix} R_\theta & 0 \\ 0 & 1 \end{pmatrix}, $$ donde $R_\theta$ es la rotación en ángulo $\theta$ en el plano $x$-$y$. En cierto sentido se trata del caso general, pues vimos que cualquier rotación tiene esa forma en cierta base ortonormal.
>>3. Escribimos $$ x = \begin{pmatrix} x' \\ a \end{pmatrix} \quad \text{y} \quad u = \begin{pmatrix} u' \\ b \end{pmatrix}, $$ donde $x', u' \in \mathbb{R}^2$ y $a, b \in \mathbb{R}$.
>>4. Si $R_\theta$ es la identidad, entonces $T$ es la traslación en $u$.
>>5. Si no, tenemos que $$ T(x) = \begin{pmatrix} R_\theta & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} x' \\ a \end{pmatrix} + \begin{pmatrix} u' \\ b \end{pmatrix} = \begin{pmatrix} R_\theta x' + u' \\ a + b \end{pmatrix}. $$
>>6. Luego, $x' \mapsto R_\theta x' + u'$ es una transformación rígida del plano que no es una traslación (Si no $T$ seria traslacion) entonces sabemos que es la rotación en el mismo ángulo $\theta$ alrededor de cierto $z \in \mathbb{R}^2$. Entonces $$ T(x) = \begin{pmatrix} R_{z, \theta} x' \\ a + b \end{pmatrix} = \begin{pmatrix} R_\theta (x' - z) + z \\ a \end{pmatrix} + \begin{pmatrix} 0 \\ b \end{pmatrix}. $$
>>7. El primer término representa la rotación alrededor de la recta vertical $\{z\} \times \mathbb{R}$ y el segundo, la traslación vertical en $b$. ($z\in \mathbb{R}^{2}$ por lo tanto $\{ z \}\times \mathbb{R}$ es una recta vertical)
>
>>[!Resumen]-
>>8. Escribir $T(x)=Cx+u$ con $C$ rotación y elegir base con $C=\mathrm{diag}(R_\theta,1)$
>>9. Notar $$T(x) = \begin{pmatrix} R_\theta & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} x' \\ a \end{pmatrix} + \begin{pmatrix} u' \\ b \end{pmatrix} = \begin{pmatrix} R_\theta x' + u' \\ a + b \end{pmatrix}. $$
>>10. Si $R_{\theta}=Id$ entonces $T$ es traslacion. Si no como $T$ es transformacion rigida entonces $R_\theta x' + u'$ es transformacion rigida de $\mathbb{R}^{2}$ que no es traslacion entonces es rotacion en angulo $\theta$ al rededor de cierto $z$ osea $$T(x)=\begin{pmatrix} R_{z,\theta} x'\\ a \end{pmatrix}+\begin{pmatrix} 0\\ b\end{pmatrix}$$ es una rotacion al rededor del eje $\{ (z_{1},z_{2}) \}\times \mathbb{R}$ 
>>11. Y obviamente $(0,0,b)$ es trasladarlo para "arriba" o "abajo" sobre ese eje "vertical"

# Repaso de cálculo en varias variables

>[!Remark]
>Sea $\varphi : U \to \mathbb{R}^3$, donde $U$ es un abierto en $\mathbb{R}^2$,
>$$ \varphi(u, v) = (x(u, v), y(u, v), z(u, v)). $$
>Denotamos
>$$ \varphi_u(u, v) = \frac{\partial \varphi}{\partial u}(u, v) = \left. \frac{d}{dt} \right|_0 \varphi(u + t, v) $$
>y $\varphi_v(u, v)$ de manera análoga. Diremos que $\varphi$ es **suave** si las derivadas parciales de orden 3 de $\varphi$ existen y son continuas (esto es, si $\varphi$ es de clase $C^3$). Si $\varphi$ es de clase $C^1$ existe
>$$ d\varphi_{(u,v)} : \mathbb{R}^2 \to \mathbb{R}^3, $$
>llamada la **diferencial** de $\varphi$ en $(u, v)$, que es la única transformación lineal tal que
>$$ \lim_{h \to 0} \frac{\varphi(p + h) - \varphi(p) - d\varphi_p(h)}{\|h\|} = 0, $$
>donde $p = (u, v)$. La matriz de $d\varphi_p$ en la base canónica es
>$$ \begin{pmatrix} \left. \frac{\partial x}{\partial u} \right|_p & \left. \frac{\partial x}{\partial v} \right|_p \\ \left. \frac{\partial y}{\partial u} \right|_p & \left. \frac{\partial y}{\partial v} \right|_p \\ \left. \frac{\partial z}{\partial u} \right|_p & \left. \frac{\partial z}{\partial v} \right|_p \end{pmatrix}. $$
>
>**Comentarios.** Si $h \in \mathbb{R}^2$, $h \approx 0$, tenemos
>$$ \varphi(p + h) \approx \varphi(p) + d\varphi_p(h). $$
>La existencia de las derivadas parciales en $p$ no asegura la existencia de $d\varphi_p$.

# Superficies regulares

>[!Remark]-
>Antes de dar la definición precisa, comentamos que una superficie regular es un subconjunto de $\mathbb{R}^3$ que localmente se puede mapear de manera suave a abiertos de $\mathbb{R}^2$.
>La definición de superficie regular está inspirada en la superficie de la Tierra y sus mapas.
>Un mapeo $\varphi$ lleva un abierto $U$ del plano (mapa) en un “abierto de la superficie”. Requeriremos que $\varphi : U \to \varphi(U)$ sea biyectiva, suave “con inversa continua”.

>[!Definition] Superficie regular
>Un subconjunto $S$ de $\mathbb{R}^3$ es una **superficie regular** si para todo $p \in S$ existe una función suave $\varphi : U \to \mathbb{R}^3$ definida en un abierto $U$ de $\mathbb{R}^2$ tal que:
>1) Se cumple que $p \in \varphi(U) \subset S$, $\varphi$ es inyectiva y $d\varphi_q : \mathbb{R}^2 \to \mathbb{R}^3$ es inyectiva para todo $q \in U$.
>2) Existe un conjunto abierto $\mathcal{V}$ de $\mathbb{R}^3$ tal que $\varphi(U) = \mathcal{V} \cap S$ y una función suave $\Phi : \mathcal{V} \to \mathbb{R}^2$ que satisface
>$$ \Phi(\varphi(q)) = q $$
>para todo $q \in U$.
>**Notación.** Las aplicaciones $\varphi : U \to \mathbb{R}^3$ como arriba se llaman **sistemas coordenados** o **cartas coordenadas**.

^2d9e1d

>[!Definition]- Parametrizacion
> Dada una superficie regular $S$, una función $\varphi : U \to \mathbb{R}^3$, con $U$ abierto en $\mathbb{R}^2$, y $\varphi(U) \subset S$ se dice una **parametrización** de $S$ si $d\varphi_q : \mathbb{R}^2 \to \mathbb{R}^3$ es inyectiva para todo $q \in U$.

>[!Proposition]
>Sean $U$ un abierto en $\mathbb{R}^2$ y $\varphi : U \to \mathbb{R}^3$ una función suave. Son equivalentes:
>- (a) Para toda curva regular $\alpha : (a, b) \to U$ se cumple que $\varphi \circ \alpha$ es una curva regular.
>- (b) La diferencial $d\varphi_q : \mathbb{R}^2 \to \mathbb{R}^3$ es inyectiva para todo $q \in U$.
>
>O sea, $\varphi$ preserva la regularidad de curvas si y solo si $\varphi$ es infinitesimalmente inyectiva.
>>[!Proof]-
>>- b) $\Rightarrow$ a) 
>>	1. Sea $\alpha : (a, b) \to U$ una curva regular entonces $\alpha '\neq0$ . 
>>	2. Por la regla de la cadena (considerando que la diferencial es una matriz y por hipotesis inyectiva entonces su nucleo es el 0) tenemos que $$ (\varphi \circ \alpha)'(t) = d\varphi_{\alpha(t)}(\alpha'(t)) \ne 0 $$ para todo $t$.
>>- a) $\Rightarrow$ b) 
>>	1. Sean $q \in U$ y $z \in \mathbb{R}^2$, $z \ne 0$. Basta mostrar $d\varphi_q(z) \ne 0$.
>>	2. Sea $\alpha(t) = q + tz$ una curva en $U$ (claramente es regular) , definida para $t$ suficientemente pequeño, así $\alpha(t) \in U$. 
>>	3. Por hipótesis $\varphi \circ \alpha$ es regular. Entonces $$ 0 \ne (\varphi \circ \alpha)'(0) = d\varphi_{\alpha(0)}(\alpha'(0)) = d\varphi_{q}(z), $$ como deseábamos.
>
>>[!Resumen]-
>>4. (b ⇒ a) $(\varphi\circ\alpha)'=d_{\varphi_{\alpha (0)}}(\alpha '(0))\neq0$.
>>5. (a ⇒ b) Tomar recta $\alpha(t)=q+tz$ y usar regularidad de $\varphi\circ\alpha$ en $t=0$ para obtener $d\varphi_q(z)\neq0$.

>[!Remark]- Cuando una matriz $d\varphi_{q}$ es inyectiva
>En general tendremos $\varphi(u, v) = (x(u, v), y(u, v), z(u, v))$. Si $q = (u, v)$,
>$$ [d\varphi_q]_{\text{can}} = \begin{pmatrix} x_u(q) & x_v(q) \\ y_u(q) & y_v(q) \\ z_u(q) & z_v(q) \end{pmatrix}. $$
>Las siguientes afirmaciones son equivalentes:
>- La transformación lineal $d\varphi_q$ es inyectiva.
>- La matriz $[d\varphi_q]_{\text{can}}$ tiene rango 2, es decir, las columnas son linealmente independientes.
>- El producto cruz de las columnas es distinto de cero, o sea, $\varphi_u(q) \times \varphi_v(q) \ne 0$.
>- Alguna submatriz $2 \times 2$ de $[d\varphi_q]_{\text{can}}$ tiene determinante no nulo.

>[!Proposition] Grafico de funcion es superficie
>Sea $A$ un abierto de $\mathbb{R}^2$ y sea $f : A \to \mathbb{R}$ una función suave. Sea $S$ el gráfico de $f$, es decir,
>$$ S = \{(x, y, f(x, y)) \mid (x, y) \in A\}. $$
>El subconjunto $S$ está cubierto por una sola carta coordenada. Y es por ende superficie regular
>>[!Proof]-
>>1. Sean $U = A$ y $$ \varphi : U \to \mathbb{R}^3, \quad \varphi(u, v) = (u, v, f(u, v)). $$
>>2. Verificamos (1): $\varphi$ es inyectiva pues $(u, v, f(u, v)) = (x, y, f(x, y))$ solo si $(u, v) = (x, y)$. Calculamos $$ [d\varphi_{(u,v)}]_{\text{can}} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ f_u(u, v) & f_v(u, v) \end{pmatrix}, $$que tiene rango 2 porque, por ejemplo, $\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = 1 \ne 0$.
>>3. Para verificar (2) podemos tomar $\mathcal{V} = U \times \mathbb{R}$, que es un subconjunto abierto de $\mathbb{R}^3$, y $\Phi(x, y, z) = (x, y)$. 
>>4. Se cumple que $$ \Phi(\varphi(u, v)) = \Phi(u, v, f(u, v)) = (u, v). $$
>>5. Finalmente es directo ver que : $$ \varphi(U) = \mathcal{V} \cap S. $$Como $U=A$ entonces $S\subseteq \mathcal{V}$ entonces es ver que $\varphi(U)=S$ que es evidente por definicion  
>
>>[!Resumen]-
>>6. Parametrizar el gráfico con $\varphi(u,v)=(u,v,f(u,v))$.
>>7. Ver (1): $\varphi$ inyectiva y $d\varphi$ de rango 2 (identidad embebida).
>>8. Ver (2): tomar $\mathcal{V}=U\times\mathbb{R}$ y $\Phi(x,y,z)=(x,y)$, que satisface $\Phi\circ\varphi=\mathrm{id}_U$ y $\varphi(U)=\mathcal{V}\cap S$.

>[!Example] Esfera es superfice regular
>La esfera es una superficie regular
>>[!Proof]-
>>9. Sea $$S=\{p\in\mathbb{R}^3\mid\|p\|=1\}$$la esfera de radio $1$ centrada en $0$.
>>10. Sea $p=(p_1,p_2,p_3)\in S$. Como $p\neq0$, existe $i\in\{1,2,3\}$ tal que $p_i\neq0$. Supongamos $p_3>0$ (hemisferio norte). Sea $$U=\{(x,y)\in\mathbb{R}^2\mid x^2+y^2<1\}$$y definimos $$\varphi:U\to\mathbb{R}^3,\quad \varphi(u,v)=(u,v,\sqrt{1-u^2-v^2}).$$
>>11. Claramente $\varphi(U)\subset S$. Además, $\varphi$ es inyectiva y $d\varphi_q$ es inyectiva para todo $q\in U$ (análogo al ejemplo 1, con $f(u,v)=\sqrt{1-u^2-v^2}$).
>>12. Así se verifica el punto (1) de la definición de superficie regular. El punto (2) se prueba como en el ejemplo 1.
>>13. Esta carta se denota $\varphi_3^+$. De forma análoga se define $$\varphi_i^\varepsilon:U\to\mathbb{R}^3,\quad i=1,2,3,\ \varepsilon=\pm1.$$
>>14. Ejemplos: $$\varphi_3^-(u,v)=(u,v,-\sqrt{1-u^2-v^2})$$cubre el hemisferio sur, y $$\varphi_1^+(u,v)=(\sqrt{1-u^2-v^2},u,v)$$cubre el hemisferio occidental.
>>15. Las seis cartas cubren toda la esfera. Luego $S$ es una superficie regular.
>
>>[!Resumen]-
>>16. Definimos $$\varphi^{+}_{3}: U\rightarrow\mathbb{R}^{3}\qquad\varphi(u,v)=(u,v,\sqrt{ 1-u^{2}-v^{2} })$$ por ser grafico de funcion. Cumple lo necesario para superficie
>>17. Y usando las otras $\varphi_{i}^{\pm}$ cubrimos toda la esfera.

^2d6de9

>[!Example] El helicoide
>Sea $$\varphi:\mathbb{R}^2\to\mathbb{R}^3,\quad \varphi(u,v)=(u\cos v,u\sin v,v)=(0,0,v)+u(\cos v,\sin v,0).$$
>Sea $S=\operatorname{Im}\varphi$. entonces $S$ es superficie regular
>>[!Proof]-
>>1. Calculamos la diferencial: $$[d\varphi_{(u,v)}]_{\text{can}}=\begin{pmatrix}\cos v&-u\sin v\\\sin v&u\cos v\\0&1\end{pmatrix}.$$
>>2. Como $\cos v$ y $\sin v$ no se anulan simultáneamente, alguna de las submatrices $$\begin{pmatrix}\cos v&-u\sin v\\0&1\end{pmatrix},\qquad \begin{pmatrix}\sin v&u\cos v\\0&1\end{pmatrix}$$tiene determinante no nulo. Luego $d\varphi_{(u,v)}$ es inyectiva.
>>3. Planteamos $$\varphi(u,v)=(u\cos v,u\sin v,v)=(x,y,z).$$
>>4. Entonces $v=z$ y $$u(\cos v,\sin v)=(x,y).$$
>>5. Tomamos producto escalar con $(\cos v,\sin v)$: $$\langle u(\cos v,\sin v),(\cos v,\sin v)\rangle=\langle(x,y),(\cos v,\sin v)\rangle.$$
>>6. De aquí $$u=x\cos v+y\sin v=x\cos z+y\sin z.$$
>>7. Definimos $$\Phi:\mathbb{R}^3\to\mathbb{R}^2,\quad \Phi(x,y,z)=(x\cos z+y\sin z,z).$$
>>8. Entonces $\Phi\circ\varphi=\mathrm{Id}$ y $\varphi$ es un sistema de coordenadas
>
>>[!Resumen]-
>>1. $\varphi(u,v)=(u\cos v,u\sin v,v)$ es el helicoide. 
>>2. Facil ver (1). Para (2) $\varphi(u,v)=(u\cos v,u\sin v,v)=(x,y,z)$
>>3. Entonces $u(\cos v,\sin v)=(x,y)$ y usar producto interno deambos lados contra$(\cos v,\sin v)$ para obtener $u$, y $v=z$ trivial
>>4. Finalmente $\Phi(x,y,z)=(u,v)$  

>[!Remark]- Error es a izquierda
>El punto (2) de la definición de superficie regular requiere la existencia de inversas a derecha continuas locales $\Phi$. Las necesitamos para excluir subconjuntos como el siguiente:
>![[Pasted image 20251122145538.png]]
>En el do carmo dice que usamos inyectividad de la parametrizacion para evitar este tipo de casos, no existencia de continua

>[!Example] Un ejemplo de algo que no es carta
>Veamos un ejemplo de aplicacion suave, inyectiva y con diferencial inyectiva pero que no llega a ser carta por que no es inversible localmente 
>Sean $\alpha : (-\pi, \pi) \to \mathbb{R}^2$ y $\varphi : U = (-\pi, \pi) \times \mathbb{R} \to \mathbb{R}^3$ definidas por
>$$ \alpha(s) = \sin s (\cos s, 1) \quad \text{y} \quad \varphi(s, t) = (\alpha(s), t). $$
>a) La aplicación $\varphi$ es suave, inyectiva y $d\varphi_q$ es inyectiva para todo $q \in U$.
>b) Dado cualquier entorno abierto $\mathcal{V}$ del origen en $\mathbb{R}^3$, no existe una función continua $\Phi : \mathcal{V} \to \mathbb{R}^2$ tal que
>$$ \Phi(\varphi(s, t)) = (s, t) $$
>para todo $(s, t)$ en un entorno abierto del origen en $\mathbb{R}^2$.
>![[Pasted image 20251122150201.png]]
>>[!Proof]-
>>- a) 
>>	1. La aplicación $\varphi$ es suave e inyectiva pues $\alpha$ lo es. La diferencial $d\varphi_q$ es inyectiva para todo $q \in U$ pues $\alpha$ es regular. (Verificarlo.)
>>- b) 
>>	1. Calculamos $\varphi(0, 0) = (\alpha(0), 0) = ((0, 0), 0)$. 
>>	2. Consideramos la sucesión $$ p_n = \varphi\left(-\pi + \frac{1}{n}, 0\right) = \left(\alpha\left(-\pi + \frac{1}{n}\right), 0\right) = \left(\sin\left(-\pi + \frac{1}{n}\right) \left(\cos\left(-\pi + \frac{1}{n}\right), 1\right), 0\right). $$
>>	3. Tenemos que $$ \lim_{n \to \infty} p_n = \lim_{n \to \infty} \varphi\left(-\pi + \frac{1}{n}, 0\right) = (\sin(-\pi) (\cos(-\pi), 1), 0) = ((0, 0), 0) = \varphi(0, 0). $$
>>	4. Suponemos que existen $\mathcal{V}$ y $\Phi$ como en el enunciado (osea una inversa local). Como $\Phi$ es continua, resulta $$ \lim_{n \to \infty} \Phi(p_n) = \Phi(\varphi(0, 0)) = (0, 0). $$
>>	5. Por otro lado $$ \lim_{n \to \infty} \Phi(p_n) = \lim_{n \to \infty} \Phi\left(\varphi\left(-\pi + \frac{1}{n}, 0\right)\right) = \lim_{n \to \infty} \left(-\pi + \frac{1}{n}, 0\right) = (-\pi, 0), $$con lo cual llegamos a un absurdo.
>
>>[!Resumen]-
>>6. Inyectividad de $\varphi$ y de $d\varphi$ son triviales
>>7. Tomamos $p_n=\varphi\left(-\pi + \frac{1}{n}, 0\right)$ entonces $\lim\limits_{ n \to \infty }p_{n}=\varphi(0,0)$ 
>>8. Por continuidad de $\Phi$ sucederia $\Phi(p_n)\to\Phi(\varphi(0,0))=(0,0)$.
>>9. Pero $\lim_{n \to \infty} \Phi(p_n) = \lim_{n \to \infty} (-\pi + \frac{1}{n}, 0)=(-\pi,0)$. Absurdo

^3d284b

>[!Theorem] Teorema de la superficie implícita
>Sea $F : A \to \mathbb{R}$ una función suave, donde $A$ es un subconjunto abierto de $\mathbb{R}^3$. Sea $y \in \text{Imagen}(F)$ y sea
>$$ S = F^{-1}(\{y\}) = \{q \in A \mid F(q) = y\} $$
>el conjunto de nivel $y$ de $F$. Si $(\nabla F)(q) \ne 0$ para todo $q \in S$, entonces $S$ es una superficie regular.
>>[!Proof]-
>>1. Sea $q \in S$. Por hipótesis, $$ (\nabla F)(q) = (F_x(q), F_y(q), F_z(q)) \ne 0. $$
>>2. Luego, al menos una de las derivadas parciales de $F$ en $q$ es no nula, digamos, $F_z(q) \ne 0$.
>>3. Por el Teorema de la Función Implícita existen un subconjunto abierto $U$ de $\mathbb{R}^2$, una función suave $f : U \to \mathbb{R}$ y $\varepsilon > 0$ tales que si $\mathcal{V} = U \times (q_3 - \varepsilon, q_3 + \varepsilon)$ (subconjunto abierto de $\mathbb{R}^3$), entonces se cumple que $$ S \cap \mathcal{V} = \{(x, y, f(x, y)) \mid (x, y) \in U\}. $$ Y ademas $(q_{1},q_{2},q_{3})=(q_{1},q_{2},f(q_{1},q_{2}))\in S\cap\mathcal{V}$ 
>>4. Si $F_x(q) \ne 0$ o $F_y(q) \ne 0$, se cambian los roles de $x, y, z$ y $S$, cerca de $q$, resulta el gráfico de una función de $(y, z)$ o $(x, z)$.
>>5. Para mostrar que $S$ es una superficie regular, para cada $q \in S$ tomamos $$ \varphi : U \to \mathbb{R}^3, \quad \varphi(u, v) = (u, v, f(u, v)), $$ con $U$ y $f$ como arriba.
>>6. La verificación de los apartados (1) y (2) de la definición de superficie regular es la misma de que los gráficos de funciones son superficies regulares, con $\mathcal{V}$ también como arriba.
>>7. Osea que para cada $q\in S$ tengo un entorno donde puedo armar una carta. Entonces $S$ es superficie 
>
>>[!Resumen]-
>>8. Tenemos $S=F^{-1}(y)$. Por condición $(\nabla F)(q)\neq 0$ ⇒ aplicar Teorema de la Función Implícita.
>>9. Existe $U\subseteq \mathbb{R}^{2}$ y $f:U\rightarrow \mathbb{R}$ tal que si $\mathcal{V}=U\times(q_{3}-\epsilon,q_{3}+\epsilon)$ entonces $$S\cap\mathcal{V}=\{ (x,y,f(x,y)):(x,y)\in U \}$$ y ademas $(q_{1},q_{2},q_{3})=(q_{1},q_{2},f(q_{1},q_{2}))\in S\cap\mathcal{V}$ 
>>10. Usar el caso “gráfico de función” para verificar (1) y (2) de superficie regular.
>>11. Como para cualquier $q$ puedo armar una carta en un entorno entonces $S$ es superficie

^14271e

>[!Proposition]-
>Sea $S$ una superficie regular y sea $p \in S$. Si una función $\varphi : U \to \mathbb{R}^3$ satisface las condiciones del apartado (1) de la definición de superficie regular, entonces satisface también las del (2).
>- Se usa para obtener cartas coordenadas cuando por alguna razón ya sabemos que el subconjunto es una superficie regular, por ejemplo, a través del Teorema de la Superficie Implícita, o porque ya hemos hemos encontrado algunas cartas que cubren toda la superficie y para ellas hemos verificado (1) y (2).
>- “Un subconjunto bueno no puede tener cartas malas”.
>- Se puede ver entonces [[Definiciones#^3d284b]] no es superficie regular
>>[!Proof]
>>No damos la prueba.

^595bfc

>[!Definition]
>Una superficie regular $S$ se dice **conexa** si para todo par de puntos $p$ y $q$ de $S$ existe una curva suave a trozos $\alpha : [a, b] \to S$ con $\alpha(a) = p$ y $\alpha(b) = q$.

>[!Example]
>Sea $S$ le hiperboloide de dos hojas,
>$$ S = \{(x, y, z) \in \mathbb{R}^3 \mid z^2 - x^2 - y^2 = 1\}, $$
>que es una superficie regular. Esto se puede mostrar de dos maneras:
>- Cubriendo $S$ con las cartas coordenadas $\varphi_{\pm}(u, v) = (u, v, \pm\sqrt{1 + u^2 + v^2})$.
>- O mediante el Teorema de la Superficie Implícita, considerando
>$$ F(x, y, z) = z^2 - x^2 - y^2, \quad (\nabla F)(x, y, z) = (-2x, -2y, 2z), $$
>que no se anula en $S$.
>Sin embargo la superficie $S$ no es conexa.
>>[!Proof]-
>>1. Sean $p = (0, 0, -1)$ y $q = (0, 0, 1)$. Supongamos que existe una curva $\alpha$ como en la definición de superficie conexa. Tenemos que $$ \alpha(t) = (x(t), y(t), z(t)), $$ para ciertas funciones continuas $x, y, z : [a, b] \to \mathbb{R}$.
>>2. Como $z$ es continua, $z(a) = -1$ y $z(b) = 1$, por el Teorema de los Valores Intermedios existe $t_o \in [a, b]$ tal que $z(t_o) = 0$.
>>3. Entonces $\alpha(t_o) = (x(t_o), y(t_o), 0)$.
>>4. Como $\alpha(t_o) \in S$ resulta que $0 - x(t_o)^2 - y(t_o)^2 = 1$, con lo que llegamos a un absurdo.
>
>>[!Summary]-
>> Se utiliza el Teorema de los Valores Intermedios aplicado a la función altura $z$. Si existiera una curva que une las dos hojas del hiperboloide (una con $z \ge 1$ y otra con $z \le -1$), debería pasar por $z=0$, lo cual es imposible según la ecuación de la superficie.

# Funciones suaves definidas en superficies

>[!Remark]-
>Las funciones suaves del cálculo de varias variables están definidas en subconjuntos abiertos de $\mathbb{R}^n$.

>[!Lemma] Lema del diagrama triangular
>Sea $S$ una superficie regular y sea $\varphi : U \to \mathbb{R}^3$ una carta coordenada de $S$. Sean $A$ un subconjunto abierto de $\mathbb{R}^m$ y $f : A \to \mathbb{R}^3$ una función suave tal que $f(A) \subset \varphi(U)$. Entonces $\varphi^{-1} \circ f : A \to \mathbb{R}^2$ es suave.
>![[Pasted image 20251122172334.png]]
>>[!Proof]-
>>1. Recordemos [[Definiciones#^2d9e1d]] nos dice que $\varphi(U)=\mathcal{V}\cap S$ y que $\Phi$ está definida en $\mathcal{V}$ entonces esta definida en $\varphi(U)$ con lo cual es logico hablar de $\varphi^{-1}$ en $f(A)\subseteq \varphi(U)$       
>>2. Como $\varphi : U \to \mathbb{R}^3$ es una carta coordenada, existen un abierto $\mathcal{V}$ de $\mathbb{R}^3$ y una función suave $\Phi : \mathcal{V} \to \mathbb{R}^2$ tal que $\Phi \circ \varphi = \text{id}_U$.
>>3. Veamos que $$ \varphi^{-1} \circ f = \Phi \circ f $$ con lo cual $\varphi^{-1} \circ f$ es suave, por ser composición de funciones suaves.
>>4. En efecto, debemos ver que $$ \varphi^{-1}(f(z)) = \Phi(f(z)) $$ para todo $z \in A$.
>>5. Como $f(A) \subset \varphi(U)$, tenemos que $f(z) = \varphi(q)$ para cierto $q \in U$ (Por Inyectividad de $\varphi$ ) 
>>6. Entonces la igualdad anterior equivale a $\varphi^{-1}(\varphi(q)) = \Phi(\varphi(q))$, que es verdadera para todo $q \in U$ (pues ambas son iguales a $q$).
>
>>[!Summary]-
>>1. La suavidad de la inversa de la carta $\varphi^{-1}$ (cuando se compone adecuadamente) se hereda de la función $\Phi$ garantizada por la definición de superficie regular. Al ser $f$ suave al espacio ambiente y $\Phi$ suave, su composición también lo es.
>>2. Y usamos $f(A)\subseteq \varphi(U)$ entonces $f(z)=\varphi(q)$ para algun $q\in U$  

^408c1f

>[!Remark]-
>- Como $\varphi^{-1}$ no está definida en un abierto de $\mathbb{R}^3$, no tiene sentido decir que $\varphi^{-1}$ sea suave.
>- El lema del diagrama triangular no vale para el cilindro sobre el ocho. 

>[!Proposition] Cambio de coordenadas
>Sean $\varphi : U \to \mathbb{R}^3$ y $\psi : V \to \mathbb{R}^3$ dos sistemas coordenados de una superficie regular $S$ tal que $W := \varphi(U) \cap \psi(V) \ne \emptyset$. Entonces
>$$ U' := \varphi^{-1}(W) \quad \text{y} \quad V' :=\psi^{-1}(W) $$
>son subconjuntos abiertos de $\mathbb{R}^2$ y $\psi^{-1} \circ \varphi : U' \to V'$ es una función suave, llamada el **cambio de coordenadas** de $\varphi$ a $\psi$.
>![[Pasted image 20251122173149.png]]
>>[!Proof]-
>>1. Comenzamos mencionando que en el práctico se ve que si $A$ es un subconjunto abierto de $\mathbb{R}^n$ y $f : A \to \mathbb{R}^m$ es continua, entonces $f^{-1}(B)$ es abierto en $\mathbb{R}^n$ para todo subconjunto abierto $B$ de $\mathbb{R}^m$.
>>2. Sabemos que $\varphi(U) = S \cap \mathcal{U}$ y $\psi(V) = S \cap \mathcal{V}$ para ciertos subconjuntos abiertos $\mathcal{U}$ y $\mathcal{V}$ de $\mathbb{R}^3$. Luego
>>$$ W = S \cap (\mathcal{U} \cap \mathcal{V}), $$
>>donde $\mathcal{U} \cap \mathcal{V}$ es abierto en $\mathbb{R}^3$.
>>3. Así resulta que $U' = \varphi^{-1}(\mathcal{U} \cap \mathcal{V})$ y que este es un subconjunto abierto de $\mathbb{R}^2$. (Notar que $\varphi ^{-1}(\mathcal{U}\cap\mathcal{V})=\varphi ^{-1}(S\cap\mathcal{U}\cap\mathcal{V})$ por que $\varphi(U)\subseteq S$)
>>4. Con $V'$ se procede análogamente. Entonces $V',U'$ son abiertos 
>>5. Luego notamos $\varphi|_{U'}:U'\rightarrow\mathbb{R}^{3}$ es una funcion suave por ser restriccion (a un abierto comun, no. auna superficie) de suave.
>>6. Finalmente, $\psi^{-1} \circ \varphi:U'\rightarrow V'$ es suave por [[Definiciones#^408c1f]]
>
>>[!Summary]-
>>1. $\varphi(U)=S\cap\mathcal{U}$ y $\psi(V)=S\cap\mathcal{V}$ entonces $W=S\cap\mathcal{V}\cap\mathcal{U}$ 
>>2. $U'=\varphi ^{-1}(S\cap\mathcal{V}\cap\mathcal{U})=\varphi ^{-1}(\mathcal{V}\cap\mathcal{U})$ por que $\varphi(U)\subseteq S$ entoncse $U'$ abierto
>>3. Como $\varphi(U)$ suave entonces $\varphi|_{U'}$ es suave. Entonces lema tirangular $\psi ^{-1}\circ\varphi|_{U'}$ es suave

^c48a83

>[!Definition] Suavidad para funciones con superficie en dominio
>Sea $S\subseteq \mathbb{R}^{3}$ una superficie regular y sea $p \in S$. Una función $f : S \to \mathbb{R}^n$ se dice **suave en** $p$ si existe una carta coordenada $\varphi : U \to \mathbb{R}^3$ de $S$ con $p \in \varphi(U)$ tal que $f \circ \varphi : U \to \mathbb{R}^n$ es suave en $\varphi^{-1}(p)$.
>La función $f$ se dice **suave** si es suave en $p$ para todo $p \in S$.

>[!Proposition] Inversa de carta es suave
>Sea $\varphi$ carta entonces $\varphi ^{-1}:\varphi(U)\rightarrow U$ es suave
>>[!Proof]-
>>1. $\varphi ^{-1}\circ\varphi=Id$ que es suave entonces por definicion de suavidad $\varphi ^{-1}$ es suave  

>[!Example]- Ejemplos de funciones suaves
>- Un caso particular se da cuando $A = \mathbb{R}^3$ y $F$ es la **función altura** respecto de un vector unitario $u \in \mathbb{R}^3$, es decir $F(q) = \langle q, u \rangle$.
>- Sea $S$ una superficie regular y sea $\varphi : U \to \mathbb{R}^3$ una carta coordenada de $S$. Tenemos que $\varphi(U)$ también es una superficie regular (en el práctico se ve que la intersección de una superficie regular con un abierto de $\mathbb{R}^3$ es una superficie regular). Resulta que $\varphi^{-1} : \varphi(U) \to \mathbb{R}^2$ es suave. En efecto, $\varphi^{-1} \circ \varphi = \text{id}|_U : U \to U \subset \mathbb{R}^2$ es suave. Resumiendo: Las funciones coordenadas son suaves.

>[!Proposition]
>Supongamos que existe una carta coordenada $\varphi$ como en la definición (osea que cumple $f\circ \varphi$ es suave) y que $\psi : V \to \mathbb{R}^3$ es una carta coordenada de $S$ con $p \in \psi(V)$. Entonces $f \circ \psi$ es suave en $\psi^{-1}(p)$.
>>[!Proof]-
>>1. Se deduce de que el cambio de coordenadas es suave. Notar que obviamente $W=\psi(V)\cap\varphi(U)\neq 0$ por que $p$ esta en ambos   
>>2. Entonces si miramos el abierto $U'=\varphi ^{-1}(W)$ y $V'=\psi ^{-1}(W)$ (los dados en [[Definiciones#^c48a83]]) que contienen a $\psi^{-1}(p)$ se cumple que $$ f \circ \psi|_{V'} = f \circ (\varphi \circ \varphi^{-1}) \circ \psi|_{V'} = (f \circ \varphi) \circ (\varphi^{-1} \circ \psi|_{V'}), $$
>>3. $f\circ\varphi$ es suave por hipotesis y $\varphi ^{-1}\circ\psi|_{V'}$ es suave por [[Definiciones#^c48a83]]

^1bccd0

>[!Proposition]- Restriccion de suave a superficie es suave
>Sea $S$ una superficie regular contenida en un subconjunto abierto $A$ de $\mathbb{R}^3$ y sea $F : A \to \mathbb{R}^n$ una función suave. Entonces $F|_S : S \to \mathbb{R}^n$ es suave. 
>>[!Proof]-
>>7. En efecto, sea $p \in S$ y sea $\varphi$ un sistema coordenado cuya imagen lo contenga. Como $S \subset A$,$$ F|_S \circ \varphi = F \circ \varphi, $$pero $F\circ\varphi$ es la composición de funciones suaves, por ende es suave
>>8. Pero entonces existe una carta $\varphi$ tal que $F|_{S}\circ\varphi$ es suave, entonces por definicion $F|_{S}$ es suave

>[!Proposition]- $F$ suave entonces existen dos cartas
>Sean $M$ y $N$ dos superficies regulares y sea $F : M \to \mathbb{R}^3$ una función suave tal que $F(M) \subset N$. Entonces para todo $p \in M$ existen sistemas coordenados $\varphi : U \to M$ y $\psi : V \to N$ de $M$ y $N$ respectivamente tales que $p \in \varphi(U)$, $F(\varphi(U)) \subset \psi(V)$ y $\psi^{-1} \circ F \circ \varphi$ es suave.
>>[!Proof]- Idea de la prueba
>>1. Como $\psi$ es un sistema coordenado, tenemos que $\psi(V) = N \cap \mathcal{V}$, donde $\mathcal{V}$ es un subconjunto abierto de $\mathbb{R}^3$. 
>>2. Sea $\bar{\varphi} : \bar{U} \to M$ un sistema coordenado con $p \in \bar{\varphi}(\bar{U})$. Como $F$ es suave, la composicion con cualquier carta es suave [[Definiciones#^1bccd0]]
>>3. Entonces $F \circ \bar{\varphi} : \bar{U} \to \mathbb{R}^3$ es suave, y en particular es continua, resulta que $U :=(F \circ \bar{\varphi})^{-1}(\psi (\mathcal{V}))$ es abierto en $\bar{U}$. 
>>4. Podemos tomar $\varphi = \bar{\varphi}|_U$, que es un sistema coordenado de $M$ que va a cumplir que $F(\varphi(U)) \subset \psi(V)$ y satisface que $\psi^{-1} \circ F \circ \varphi$ es suave, por el lema del diagrama triangular.
>
>>[!Resumen]-
>>- Ruta
>>	1. Elegir cartas para que $F\circ\bar{\varphi}$ caiga en un abierto de $\mathbb{R}^3$ intersectado con $N$.
>>	2. Restringir la carta de $M$ a $U=(F\circ\bar{\varphi})^{-1}(\psi(\mathcal{V}))$ para asegurar $F(\varphi(U))\subset\psi(V)$.
>>	3. Componer $\psi^{-1}\circ F\circ\varphi$ y aplicar el lema triangular para suavidad.

>[!Definition] Suavidad entre superficies regulares
>Sean $M$ y $N$ dos superficies regulares, decimos que $F:M\rightarrow N$ es suave en $p \in M$ si existen cartas $\varphi:U\rightarrow M$ con $p \in \varphi(U)$ y $\psi: V\rightarrow N$ con $F(p)\in \psi (V)$ tales que $$\psi ^{-1}\circ F\circ \varphi: U\rightarrow V$$ es suave como funcion entre abiertos de $\mathbb{R}^{2}$ 

^477389

>[!Definition] Difeomorfismo
>Sean $M$ y $N$ superficies regulares. Una función suave $F : M \to N$ se dice **difeomorfismo** si tiene inversa $F^{-1} : N \to M$ y esta es suave. En este caso, $M$ y $N$ se dicen **difeomorfas**.

>[!Example]- Ejemplos de difeomorfismos
>- La esfera $S^2$ y el elipsoide $N = \{(x, y, z) \in \mathbb{R}^3 \mid \frac{x^2}{9} + \frac{y^2}{4} + z^2 = 1\}$ son superficies difeomorfas.
>>[!Proof]-
>>7. Consideremos la aplicación $F: S^2 \to N$ dada por $F(x, y, z) = (3x, 2y, z)$.
>>8. Esta función es suave pues es la restricción de la aplicación lineal (y por tanto suave) $L: \mathbb{R}^3 \to \mathbb{R}^3$, $L(x, y, z) = (3x, 2y, z)$.
>>9. Su inversa es $G: N \to S^2$ dada por $G(u, v, w) = (u/3, v/2, w)$, que también es suave por ser restricción de una lineal.
>>10. Verifiquemos que $F$ envía $S^2$ en $N$: Si $x^2 + y^2 + z^2 = 1$, entonces $$ \frac{(3x)^2}{9} + \frac{(2y)^2}{4} + z^2 = x^2 + y^2 + z^2 = 1. $$
>>11. Verifiquemos que $G$ envía $N$ en $S^2$: Si $\frac{u^2}{9} + \frac{v^2}{4} + w^2 = 1$, entonces $$ (u/3)^2 + (v/2)^2 + w^2 = \frac{u^2}{9} + \frac{v^2}{4} + w^2 = 1. $$
>>12. Por lo tanto, $F$ es un difeomorfismo.

>[!Example] Ejemplos de difeo que entran en examen
>- El cuadrado $M = \{(x, y, 0) \mid |x| < \pi/2, |y| < \pi/2\}$ y el plano $N = \mathbb{R}^2 \times \{0\}$ son difeomorfos.
>>[!Proof]-
>>1. Consideremos la aplicación $F : M \to N$ dada por $F(x, y, z) = (\tan x, \tan y, 0)$
>>2. Esta función es suave pues es la restricción de la función $\tilde{F}(x, y, z) = (\tan x, \tan y, 0)$ definida en el abierto $(-\pi/2, \pi/2) \times (-\pi/2, \pi/2) \times \mathbb{R}$ de $\mathbb{R}^3$.
>>3. Su inversa es $G : N \to M$ dada por $G(u, v, w) = (\arctan u, \arctan v, 0)$.
>>4. La función $G$ es suave pues es la restricción de $\tilde{G}(u, v, w) = (\arctan u, \arctan v, 0)$ definida en todo $\mathbb{R}^3$.
>>5. Claramente $F$ y $G$ son inversas una de la otra debido a que $\tan(\arctan t) = t$ para todo $t \in \mathbb{R}$ y $\arctan(\tan s) = s$ para todo $s \in (-\pi/2, \pi/2)$.
>- Sea $S^2$ la esfera de radio 1 centrada en el origen y sean $p_n = (0, 0, 1)$ y $p_s = (0, 0, -1)$ los polos sur y norte, respectivamente. Sean $M = S^2 - \{p_n, p_s\}$ y $C$ el cilindro $\{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 = 1\}$. Veamos que $M$ y $C$ son difeomorfas. 
>>[!Proof]-
>>6. Buscamos un difeomorfismo $f : C \to M$. Sea $$ f : C \to M, \quad f(q) = \frac{q}{\|q\|}, $$cuya imagen está contenida en $S^2$ y no contiene ninguno de los polos. 
>>7. La función $f$ es suave porque es la restricción al cilindro de la función $F : \mathbb{R}^3 - \{(0, 0, 0)\} \to \mathbb{R}^3$ definida por la misma fórmula (que es suave en ese dominio).
>>8. Veamos que $f$ tiene inversa suave. La proponemos de la forma $$ g : M \to C, \quad g(x, y, z) = \lambda(x, y, z)(x, y, z). $$Osea vemos cuanto tenemos que alargar el punto de la esfera para llegar al cilindro. Luego para que llegue a $C$ necesitamos que $$ (\lambda(x, y, z)x)^2 + (\lambda(x, y, z)y)^2 = 1. $$Equivalentemente, $\lambda(x, y, z) = 1/\sqrt{x^2 + y^2}$. 
>>9. Así, consideramos$$ g(x, y, z) = \frac{1}{\sqrt{x^2 + y^2}}(x, y, z). $$
>>10. Dejamos como ejercicio verificar que $g$ es suave (por ser la restricción de la función suave $G : A \to \mathbb{R}^3$ definida por la misma fórmula en un abierto $A$ de $\mathbb{R}^3$.
>>11. Ese abierto puede ser $\mathbb{R}^{3}\setminus \{ (0,0,t) \}$ 
>- **Torsión del cilindro (Cylinder Twist):** Sea $C$ el cilindro $x^2 + y^2 = 1$. Consideremos la aplicación $F : C \to C$ que "retuerce" el cilindro un ángulo igual a la altura $z$. En coordenadas cilíndricas, si un punto es $(\cos s, \sin s, t)$, su imagen es $(\cos(s+t), \sin(s+t), t)$.
>>[!Proof]-
>>12. Definimos $F$ explícitamente usando la parametrización $\varphi(s, t) = (\cos s, \sin s, t)$. Si $p = \varphi(s, t)$, entonces $F(p) = \varphi(s+t, t)$.
>>13. **Buena definición:** Debemos ver que $F(p)$ no depende de la elección de $(s, t)$. Si $\varphi(s, t) = \varphi(s', t')$, entonces $t = t'$ y $s' = s + 2k\pi$ para algún $k \in \mathbb{Z}$. Luego
>>    $$ F(\varphi(s', t')) = \varphi(s' + t', t') = \varphi(s + 2k\pi + t, t) = (\cos(s+t+2k\pi), \sin(s+t+2k\pi), t) = \varphi(s+t, t) = F(\varphi(s, t)). $$
>>14. **Suavidad:** $(\varphi ^{-1}\circ F\circ\varphi)(s,t)=(s+t,t)$ es claramente una funcion suave, luego $F$ es suave
>>15. **Inversa:** La inversa esta dada por $F^{-1}(\varphi(s,t))=\varphi(s-t,t)$ con lo cual podemos usar el mismo argumento para ver que es suave
>>16. Por lo tanto, $F$ es un difeomorfismo.
>>17. **Si no mas simple:** La inversa está dada por $F^{-1}(\varphi(s, t)) = \varphi(s - t, t)$. Los mismos argumentos que se aplicaron para $\varphi$ sirven para mostrar que $F^{-1}$ está bien definida y es suave. Se verifica fácilmente que $F \circ F^{-1} = F^{-1} \circ F = \text{id}_C$.
# Plano tangente

>[!Definition]
>Sea $S$ una superficie regular y sea $p \in S$. El **plano tangente** a $S$ o **espacio tangente** a $S$ en el punto $p$ se define mediante
>$$ T_pS = \{\alpha'(0) \mid \alpha \text{ es una curva suave en } S \text{ con } \alpha(0) = p\}. $$

>[!Proposition] Plano tangente es dado por derivadas parciales
>Sea $\varphi : U \to \mathbb{R}^3$ un sistema coordenado de la superficie $S$ con $p \in \varphi(U)$, $p = \varphi(q)$. Entonces $T_pS$ es la imagen de la transformación lineal $d\varphi_q : \mathbb{R}^2 \to \mathbb{R}^3$, es decir
>$$ T_pS = d\varphi_q(\mathbb{R}^2). $$
>En particular, $T_pS$ es un subespacio vectorial de dimensión dos de $\mathbb{R}^3$ y $\{\varphi_u(q), \varphi_v(q)\}$ es una base de $T_pS$.
>>[!Proof]-
>>- $\subset$ 
>>	1. Sea $x \in T_pS$. Sea $\alpha : (-\varepsilon, \varepsilon) \to S$ una curva suave tal que $\alpha(0) = p$, $\alpha(-\varepsilon, \varepsilon) \subset \varphi(U)$ y $\alpha'(0) = x$. 
>>	2. Tenemos que $$ \varphi^{-1}(\alpha(t)) = (u(t), v(t)) $$para ciertas funciones suaves $u, v : (-\varepsilon, \varepsilon) \to \mathbb{R}$ [[Definiciones#^408c1f]]
>>	3. Así $$\alpha(t) = \varphi(u(t), v(t))$$ es suave por ser composicion de suaves (osea diferenciable) 
>>	4. Entonces puedo diferenciar. Por la regla de la cadena (multiplicando la matriz $D\varphi$ con el vector $(u'(0),v'(0))$) , $$ \alpha'(0) = \varphi_u(u(0), v(0))u'(0) + \varphi_v(u(0), v(0))v'(0). $$ (notar $\varphi_{u}$ es un vector)(esto prueba tambien que es base) 
>>	5. Ademas por 1. $\varphi(q)=p=\alpha (0)=\varphi(u(0),v(0))$ entonces $q=(u(0),v(0))$  $$x = \alpha'(0) = \varphi_u(q)u'(0) + \varphi_v(q)v'(0)$$que pertenece a la imagen de $d\varphi_q$, pues $\varphi_u(q) = d\varphi_q(e_1)$ y $\varphi_v(q) = d\varphi_q(e_2)$.
>>- $\supset$
>>	1. Dado $(a, b) \in \mathbb{R}^2$, escribimos $$ d\varphi_q(a, b) = d\varphi_q\left(\frac{d}{dt}\Big|_0 (q + t(a, b))\right) = \frac{d}{dt}\Big|_0 \varphi(q + t(a, b)) = \alpha'(0), $$donde $\alpha(t) = \varphi(q + t(a, b))$, que es una curva suave en $S$ con $\alpha(0) = \varphi(q) = p$ (Notar $d\varphi_{q}$ es la diferencial y usamos regla de cadena notar que diferencial de $\varphi$ evaluada $q+t(a,b)=\alpha (t)$ evaluada en $0$ que es $q$ todo eso multiplicado por $\frac{d}{dt}\Big|_0 (q + t(a, b))$   pero multiplicar matriz por vector es lo mismo que evaluar la transformacion lineal dada por la matriz)  
>>- Base
>>	1. Notar que $\varphi_{u}(q)=d\varphi_{q}(e_{1}),\varphi_{v}(q)=d\varphi_{q}(e_{2})$ y estos son vectores li, por que $e_{1},e_{2}$ lo son, ademas por 5.. $\varphi_{u},\varphi_{v}$ generan $T_{p}S$. Por lo tanto son base
>
>>[!Resumen]-
>>- $\subseteq$ 
>>	1. $\subseteq$ Tomamos $x\in T_{p}S$ entonces tenemos $\alpha:(-\epsilon,\epsilon)\rightarrow S$ tal que $\alpha (0)=p,\alpha '(0)=x$ y $\alpha(x)\in \varphi(U)$ 
>>	2.  $\varphi^{-1}(\alpha(t)) = (u(t), v(t))$ suave por lema triangular entonces $\alpha (t)=\varphi(u(t),v(t))$ es diferenciable
>>	3. Diferencio $\alpha'(0) = \varphi_u(u(0), v(0))u'(0) + \varphi_v(u(0), v(0))v'(0)$ y reemplazo $(u(0),v(0))=q$.
>>	4. De aca ademas sale que es base por que $d\varphi_{q}(e_{1})=\varphi_{u}(q)$ y $d\varphi_{q}(e_{2})=\varphi_{v}(q)$ 
>>- $\supseteq$ 
>>	1. Todo sale de $d\varphi_q(a, b) = d\varphi_q\left(\frac{d}{dt}\Big|_0 (q + t(a, b))\right) = \frac{d}{dt}\Big|_0 \varphi(q + t(a, b)) = \alpha'(0),$ 
>>	2. $\alpha '(0)\in T_{p}S$ por que $\alpha (t)=\varphi(q+t(a,b))$ es claramente suave y $\alpha(0)=\varphi(q+0(a,b))=\varphi(q)=p$

^095a44

>[!Remark]-
>A pesar de que $T_pS$ es un subespacio de $\mathbb{R}^3$, se acostumbra dibujarlo con el cero apoyado en $p$.

>[!Definition]
>El **plano tangente afín** a $S$ en $p$ es $p + T_pS = \{p + u \mid u \in T_pS\}$.

>[!Definition]- Valor regular
>Antes de la siguiente proposición, decimos que $y$ es un **valor regular** de una función
>$$F : A \to \mathbb{R}$$
>definida en un subconjunto abierto $A$ de $\mathbb{R}^3$ si $F^{-1}(\{y\}) \ne \emptyset$ (es decir, $y$ pertenece a la imagen de $F$) y $dF_q \ne 0$ (equivalentemente, $(\nabla F)(q) \ne 0$) para todo $q \in F^{-1}(\{y\})$.
>
>También, dado $v \in \mathbb{R}^3$, definimos
>$$ v^{\perp} = \{u \in \mathbb{R}^3 \mid \langle v, u \rangle = 0\}. $$

>[!Proposition] Espacio tangente de una superficie implícita
>Sea $A$ un subconjunto abierto de $\mathbb{R}^3$, sea $F : A \to \mathbb{R}$ una función suave con valor regular $y$, y sea $S$ la superficie $F^{-1}(\{y\})$ [[Definiciones#^14271e]]. Entonces, para todo $p \in S$,
>
>$$ T_pS = \ker(dF_p) = \big( (\nabla F)_p \big)^{\perp}. $$
>Notar $dF_{p}=\nabla F_{p}:\mathbb{R}^{3}\rightarrow \mathbb{R}$ osea es un vector en $\mathbb{R}^{3}$ tambien una transformacion lineal y se evalua con un vector de $\mathbb{R}^{3}$ que es lo mismo que hacer el producto interno (evaluar una "matriz" (vector) es multiplicar la matriz)       
>>[!Proof]-
>>1. Sea $x \in T_pS$. Sea $\alpha : (-\varepsilon, \varepsilon) \to S$ una curva suave tal que $\alpha(0) = p$, y $\alpha'(0) = x$. 
>>2. Veamos que $x \in \ker(dF_p)$.Por la regla de la cadena,$$ dF_p(x) = dF_p(\alpha'(0)) = \frac{d}{dt}\Big|_0 F(\alpha(t)) = \frac{d}{dt}\Big|_0 y = 0. $$
>>3. Sabemos de la proposición anterior que $T_pS$ es un subespacio de dimensión 2.
>>4. Además, acabamos de mostrar que está contenido en $\ker(dF_p)$. Entonces resta solo mostrar que $\ker(dF_p)$ tiene dimensión 2.
>>5. Como $y$ es un valor regular sabemos existe algun $w$ tal que $dF_{p}(w)\neq0$, luego $dF_p : \mathbb{R}^3 \to \mathbb{R}$ (Por que $F:\mathbb{R}^{3}\rightarrow\mathbb{R}$) es una transformación lineal no nula, en particular su imagen es $\mathbb{R}$. 
>>6. Así $$ \dim(\ker(dF_p)) = 3 - \dim(\text{Imagen}(dF_p)) = 3 - 1 = 2, $$
>
>>[!Resumen]-
>>1. $S=F^{-1}(\{ y \})$ superficie implicita con $y$ valor regular 
>>2. Dirección $\subset$: $x\in T_{p}S$. Definimos $\alpha:(-\epsilon,\epsilon)\rightarrow S$ tal que $\alpha (0)=p$ y $\alpha '(0)=x$ $$dF_p(\alpha'(0)) = \frac{d}{dt}\Big|_0 F(\alpha(t)) = \frac{d}{dt}\Big|_0 y = 0.$$ Entonces $T_{p}S\subseteq \ker dF_{p}$ 
>>3. Ademas sabemos $\dim T_{p}S=2$ y $dF_{p}:\mathbb{R}^{3}\rightarrow\mathbb{R}$  es. no nula por que $y$ es valor regular entonces por teo dim $\dim\ker dF_{p}=3-1=2$    

>[!Example]
>Sea $S$ la esfera de radio 1 centrada en el origen y sea $p \in S$. Entonces $$ T_pS = p^{\perp}. $$
>>[!Proof]-
>>4. En efecto, $S = F^{-1}(\{1\})$, donde 1 es un valor regular de $F(x, y, z) = x^2 + y^2 + z^2$.
>>5. Calculamos $$ \nabla F(x, y, z) = (2x, 2y, 2z). $$
>>6. Luego $(\nabla F)_p = 2p \ne 0$ para todo $p \in S$ y así, $T_{p}S=(\nabla F)_p^{\perp} = (2p)^{\perp} = p^{\perp}$.
>
>>[!Resumen]-
>>7. La esfera es superficie implicita
>>8. Despues calcular gradiente y usar $T_{p}S=(\nabla F)_{p}^{\perp}$ 

>[!Definition] Diferencial
>Sea $f : S \to \mathbb{R}^n$ una función suave y sea $p \in S$. Se define $df_p : T_pS \to \mathbb{R}^n$ mediante
>$$ df_p(\alpha'(0)) = (f \circ \alpha)'(0) = \frac{d}{dt}\Big|_0 f(\alpha(t)), $$
>donde $\alpha : (-\varepsilon, \varepsilon) \to S$ es una función suave con $\alpha(0) = p$.

>[!Proposition]
>La definición es buena y $df_p$ es lineal; se llama la **diferencial** de $f$ en $p$.
>>[!Proof]-
>>9. Sean $\alpha, \beta : (-\varepsilon, \varepsilon) \to S$ dos curvas suaves con $$ \alpha(0) = \beta(0) = p \quad \text{y} \quad \alpha'(0) = \beta'(0). $$
>>10. Debemos mostrar que $$ (f \circ \alpha)'(0) = (f \circ \beta)'(0). $$
>>11. Sea $\varphi : U \to \mathbb{R}^3$ un sistema coordenado de $S$ con $p \in \varphi(U)$, digamos, $p = \varphi(u_o, v_o)$.
>>12. Achicando $\varepsilon$ si fuera necesario, tenemos que las trayectorias de $\alpha$ y $\beta$ están contenidas en $\varphi(U)$ y $$ \alpha(t) = \varphi(x(t), y(t)), \quad \beta(t) = \varphi(\bar{x}(t), \bar{y}(t)), $$donde $\bar{x},\bar{y}, x, y : (-\varepsilon, \varepsilon) \to \mathbb{R}$ son funciones suaves, por el lema del diagrama triangular, y satisfacen $x(0) = \bar{x}(0) = u_o$ e $y(0) = \bar{y}(0) = v_o$. 
>>13. Calculamos (notar $\varphi_{u}$ es derivar con respecto a la primera entrada de $\varphi$ analogo con $\varphi_{v}$) $$ \alpha'(0) = \varphi_u(u_o, v_o)x'(0) + \varphi_v(u_o, v_o)y'(0), $$ $$ \beta'(0) = \varphi_u(u_o, v_o)\bar{x}'(0) + \varphi_v(u_o, v_o)\bar{y}'(0). $$
>>14. Como $\alpha'(0) = \beta'(0)$, resulta que $$ \bar{x}'(0) = x'(0) \quad \text{y} \quad \bar{y}'(0) = y'(0). \quad (9) $$
>>15. Ahora calculamos $$\begin{align}df_{\alpha (0)}(\alpha '(0))& = (f \circ \alpha)'(0)\\& = \frac{d}{dt}\Big|_0 (f \circ \varphi)(x(t), y(t)) \\&= (f \circ \varphi)_u(u_o, v_o)x'(0) + (f \circ \varphi)_v(u_o, v_o)y'(0)\\&=(f \circ \varphi)_u(u_o, v_o)\bar{x}'(0) + (f \circ \varphi)_v(u_o, v_o)\bar{y}'(0)\\&= \frac{d}{dt}\Big|_{0}(f\circ\varphi)(\bar{x}(t),\bar{y}(t))\\&=df_{\beta (0)}(\beta '(0))\end{align} $$que por (9) es igual a $(f \circ \beta)'(0)$, como deseábamos. Así, $df_p$ está bien definida.
>>16. Veamos ahora que $df_p$ es lineal. Llamando $a = u'(0)$ y $b = v'(0)$, tenemos por lo anterior que $$ df_p(a\varphi_u(u_o, v_o) + b\varphi_v(u_o, v_o)) = a(f \circ \varphi)_u(u_o, v_o) + b(f \circ \varphi)_v(u_o, v_o), $$con lo cual $df_p$ es lineal.
>
>>[!Resumen]-
>>17. Tomamos dos curvas $\alpha(t) = \varphi(u(t), v(t)), \quad \beta(t) = \varphi(x(t), y(t)),$ que cumplen $\alpha(0) = \beta(0) = p \quad \text{y} \quad \alpha'(0) = \beta'(0).$ 
>>18. Entonces $\alpha'(0) = \varphi_u(u_o, v_o)u'(0) + \varphi_v(u_o, v_o)v'(0),$ y $\beta'(0) = \varphi_u(u_o, v_o)x'(0) + \varphi_v(u_o, v_o)y'(0).$ 
>>19. Como $\alpha'(0) = \beta'(0).$ entonces $u'(0) = x'(0) \quad \text{y} \quad v'(0) = y'(0)$ 
>>20. Y se termina la **buena definicion** $$df_{p}(\alpha '(0))=(f \circ \alpha)'(0) = \frac{d}{dt}\Big|_0 (f \circ \varphi)(u(t), v(t)) = (f \circ \varphi)_u(u_o, v_o)u'(0) + (f \circ \varphi)_v(u_o, v_o)v'(0),$$
>>21. Ademas dados $a,b\in \mathbb{R}$ tenemos alguna curva que cumplen $a=u'(0)$ y $b=v'(0)$ entonces usando 5. y usando que $\varphi_{u},\varphi_{v}$ es base del plano tangente$$df_p(a\varphi_u(u_o, v_o) + b\varphi_v(u_o, v_o))=df_{p}(\alpha '(0)) = a(f \circ \varphi)_u(u_o, v_o) + b(f \circ \varphi)_v(u_o, v_o)$$    

>[!Corollary]
>Si $f=F|_{S}$ con $F:A\rightarrow\mathbb{R}^{n}$ una funcion suave definida en un abierto $A\subseteq \mathbb{R}^{3}$ entonces $$df_{p}=dF_{p}|_{T_{p}S}$$     
>>[!Proof]-
>>22. Sea $w \in T_pS$. Por definición, existe una curva suave $\alpha : (-\epsilon, \epsilon) \to S$ tal que $\alpha(0) = p$ y $\alpha'(0) = w$.
>>23. El diferencial de $f$ se calcula como:$$df_p(w) = (f \circ \alpha)'(0)$$
>>24. Como $f$ es la restricción de $F$, y $\alpha(t)\in M$ tenemos $f(\alpha(t)) = F(\alpha(t))$.
>>25. Entonces:$$df_p(w) = \frac{d}{dt} (F(\alpha(t))) \big|_{t=0}$$
>>26. Por definicion de matriz diferencial para funciones de $\mathbb{R}^{n}$ en $\mathbb{R}^{m}$   esto es: $$\frac{d}{dt} (F(\alpha(t))) \big|_{t=0}=dF_{\alpha(0)}(\alpha'(0)) = dF_p(w)$$
>>27. Por lo tanto, $df_p(w)$ coincide con la aplicación lineal $dF_p$ cuando evaluamos en cualquier $w\in T_{p}S$.
>>28. Ademas el dominio de $df_{p}$ es $T_{p}S$ y el dominio de $dF_{p}|_{T_{p}S}$ es trivialmente $T_{p}S$ luego podemos concluir $df_{p}=dF_{p}|_{T_{p}S}$ 
>
>>[!Resumen]-
>>29. $w\in T_{p}S$ entonces tomamos $\alpha :(-\epsilon ,\epsilon)\rightarrow S$ $\alpha (0)=p$ y $\alpha'(0)=w$.
>>30. Como $f$ y $F$ coinciden en $S$ entonces coinciden en $\alpha$ luego    $$df_p(w) = (f \circ \alpha)'(0)=(F\circ\alpha )'(0)=dF_{p}(w)$$ 

>[!Proposition]- Matriz diferencial entre superficies
>Sea $M$ superficie y $f : M \to \mathbb{R}^3$ una función suave tal que $f(M)$ está contenida en una superficie $N$ y sea $p \in M$. Entonces
>$$ df_p : T_pM \to T_{f(p)}N $$
>y si $\varphi : U \to \mathbb{R}^3$ y $\psi : V \to \mathbb{R}^3$ son sistemas coordenados de $M$ y $N$, alrededor de $p$ y $f(p)$ respectivamente, con $f(\varphi(U)) \subset \psi(V)$, se cumple que
>$$ [df_p]_{\{\varphi_u(\bar{p}), \varphi_v(\bar{p})\}, \{\psi_x(\bar{q}), \psi_y(\bar{q})\}} = \left[ d(\psi^{-1} \circ f \circ \varphi)_{\bar{p}} \right]_{\text{can}}, \quad (10) $$
>donde $\varphi(\bar{p}) = p$ y $\psi(\bar{q}) = f(p)$.
>O sea, la matriz de la diferencial de una función entre superficies, en un punto de la superficie de partida, respecto de bases formadas por vectores coordenados, es igual a la matriz jacobiana de la función puesta en coordenadas, en el punto correspondiente del mapa de partida.
>>[!Proof]-
>>31. La primera afirmación se deja como ejercicio.
>>32. Para mostrar la segunda, escribimos $$ (\psi^{-1} \circ f \circ \varphi)(u, v) = (x(u, v), y(u, v)). \quad (11) $$
>>33. Como $\varphi_u(\bar{p}) = \frac{\partial \varphi}{\partial u}(\bar{p}) = \frac{d}{dt}\Big|_0 \varphi(\bar{p} + te_1)$, tenemos que $$ df_p(\varphi_u(\bar{p})) = \frac{d}{dt}\Big|_0 (f(\varphi(\bar{p} + te_1))) = (f \circ \varphi)_u(\bar{p}). $$
>>34. Pero $f(\varphi(u, v)) = \psi(x(u, v), y(u, v))$ por $(11)$ luego, por la regla de la cadena en varias variables, $$ df_p(\varphi_u(\bar{p})) = \psi_x(\bar{q})x_u(\bar{q}) + \psi_y(\bar{q})y_u(\bar{q}). $$
>>35. Entones en paso 3. tomamos $df_{p}$ y lo evaluamos en la primera coordenada de entrada de la base $\varphi_{u}(\bar{p})$ y en el paso 4. escribimos ese resultado en la base de salida. 
>>36. Por lo tanto la primera columna de $[df_p]_{\{\varphi_u(\bar{p}), \varphi_v(\bar{p})\}, \{\psi_x(\bar{q}), \psi_y(\bar{q})\}}$ es igual a $(x_u(\bar{q}), y_u(\bar{q}))^t$. 
>>37. Pero $(x_u(\bar{q}), y_u(\bar{q}))^t$ es trivialmente la primera columna de $\left[ d(\psi^{-1} \circ f \circ \varphi)_{\bar{p}} \right]_{\text{can}}$
>>38. Con argumentos similares se ve que las segundas columnas de las matrices en (10) también coinciden

^717add

>[!Definition]- Punto critico
>Sea $f : S \to \mathbb{R}$ una función suave definida en una superficie $S$. Un punto $p \in S$ se dice **crítico** para $f$ si $df_p = 0$ (o sea, $df_p$ es la transformación lineal nula).

>[!Example]- Ejemplo de punto critico
>Sea $h : S \to \mathbb{R}$ la función altura respecto del vector unitario $u \in \mathbb{R}^3$, definida por
>$$ h(q) = \langle q, u \rangle. $$
>Un punto $p \in S$ es crítico para $h$ si y solo si $T_pS \perp u$. Esto resulta de que
>$$ dh_p(X) = \langle X, u \rangle $$
>para todo $X \in T_pS$: Si $X = \alpha'(0)$ para una curva suave $\alpha : (-\varepsilon, \varepsilon) \to S$ con $\alpha(0) = p$, tenemos que
>$$ dh_p(X) = dh_p(\alpha'(0)) = \frac{d}{dt}\Big|_0 h(\alpha(t)) = \frac{d}{dt}\Big|_0 \langle \alpha(t), u \rangle = \langle \alpha'(0), u \rangle = \langle X, u \rangle. $$

# Teorema funcion inversa

>[!Remark]-
>Sea $f : S \to \mathbb{R}$ una función suave definida en una superficie $S$ y sean $p \in S$ y $u \in T_pS$.
>Ahora nos planteamos la siguiente pregunta: ¿Está bien definida la noción de derivar dos veces la función $f$ en la dirección de $u$?
>La respuesta es no. Dadas dos curvas suaves $\alpha, \beta$ en $S$ con $$ \alpha(0) = \beta(0) = p \quad \text{y} \quad \alpha'(0) = \beta'(0) = u, $$no se cumple necesariamente que $(f \circ \alpha)''(0) = (f \circ \beta)''(0)$, como lo muestra el siguiente ejemplo.

>[!Example]- Contraejemplo derivada segunda
>Sean $S = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ y
>$$ f : S \to \mathbb{R}, \quad f(x, y, 0) = y. $$
>Sean $p = (0, 0, 0)$ y $u = (0, 1, 0)$.
>Para cada $c \in \mathbb{R}$, sea $\alpha_c : \mathbb{R} \to \mathbb{R}^3$ la curva suave en $S$ definida por
>$$ \alpha_c(t) = (t, ct^2, 0), $$
>que cumple $\alpha_c(0) = p$ y $\alpha_c'(0) = u$. Calculamos
>$$ (f \circ \alpha_c)''(0) = \frac{d^2}{dt^2}\Big|_0 ct^2 = 2c, $$
>que depende de $c$.

>[!Remark]-
>En el práctico se ve que si $p$ es crítico para $f$, entonces el hessiano de $f$ en $p$,
>$$ \text{Hess}_p(f) : T_pS \to \mathbb{R}, $$
>está **bien definido** por
>$$ \text{Hess}_p(f)(u) = (f \circ \alpha)''(0), $$
>donde $\alpha$ es una curva suave cualquiera en $S$ con $\alpha(0) = p$ y $\alpha'(0) = u$.

>[!Theorem]- Teorema de la función inversa
>Sea $F : A \to \mathbb{R}^n$ una función suave definida en un subconjunto abierto $A$ de $\mathbb{R}^n$ y sea $p \in A$. Si $dF_p$ es un isomorfismo, entonces existe un abierto $U$ alrededor de $p$ tal que $F(U)$ es abierto y $F|_U : U \to F(U)$ es biyectiva y tiene inversa suave.

^3e597f

>[!Remark]-
>Considerando que en dimension finita las transformaciones lineal isomorfas son biyectibas. El teorema, de manera informal, implica que si $F$ es infinitesimalmente biyectiva entonces $F$ es localmente biyectiva.

>[!Theorem] Teorema de la función inversa para superficies ENUNCIADO
>Sea $f : M \to N$ una función suave entre superficies y sea $p \in M$. Si $df_p : T_pM \to T_{f(p)}N$ es un isomorfismo, entonces existen subconjuntos abiertos $\mathcal{U}$ y $\mathcal{V}$ de $\mathbb{R}^3$ alrededor de $p$ y $f(p)$, respectivamente, tales que
>$$ f|_{M \cap \mathcal{U}} : M \cap \mathcal{U} \to N \cap \mathcal{V} $$
>es un difeomorfismo. Osea $f$ es difeomorfismo local 
>>[!Proof]- Prueba del teorema
>>La idea de la prueba es poner $f$ en coordenadas y aplicar el teorema de la función inversa del cálculo en varias variables.
>>1. Como $f$ es suave, existen sistemas coordenados $\varphi : U \to M$ y $\psi : V \to N$, con $p \in \varphi(U)$ y $f(\varphi(U)) \subset \psi(V)$. Sabemos que la siguiente función es suave: $$ F =_{\text{def}} \psi^{-1} \circ f \circ \varphi. $$![[Pasted image 20251128191624.png]]
>>2. Por una proposición de la clase pasada (ver (10)),$$ [df_p]_{\{\varphi_u(\bar{p}), \varphi_v(\bar{p})\}, \{\psi_x(\bar{q}), \psi_y(\bar{q})\}} = [dF_{\bar{p}}]_{\text{can}}, $$donde $\varphi(\bar{p}) = p$ y $\psi(\bar{q}) = f(p)$.
>>3. Como $df_p$ es un isomorfismo, la matriz de la izquierda es no singular. Luego la matriz de la derecha también lo es, y entonces $dF_{\bar{p}}$ es un isomorfismo. 
>>4. En consecuencia, por el teorema de la función inversa del cálculo, existen abiertos $U'$ y $V'$ alrededor de $\bar{p}$ y $\bar{q}$, respectivamente, tales que $$ F|_{U'} : U' \to V' $$es un difeomorfismo. 
>>5. Así $$ \psi^{-1} \circ f \circ \varphi|_{U'} = F|_{U'} $$es un difeomorfismo.
>>6. Como $\varphi|_{U'}$ y $\psi|_{V'}$ son sistemas coordenados, $$ \varphi(U') = M \cap \mathcal{U} \quad \text{y} \quad \psi(V') = N \cap \mathcal{V} $$para ciertos abiertos $\mathcal{U}, \mathcal{V}$ de $\mathbb{R}^3$, y de allí se deduce la afirmación del teorema.

^2e965b

>[!Corollary] Corolario de Teo Func Inversa
>Si $f : M \to N$ es una biyección suave y $df_p : T_pM \to T_{f(p)}N$ es un isomorfismo para todo $p \in M$, entonces $f^{-1}$ es suave. La justificación queda como ejercicio. (osea es difeo) 
>>[!Proof]-
>>1. Como $f$ biyectiva dado $q\in N$ existe unico $p \in M$ tal que $f(p)=q$   
>>2. Como $df_{p}$ es iso entonces tenemos $f|_{M \cap \mathcal{U}} : M \cap \mathcal{U} \to N \cap \mathcal{V}$ difeomorfismo por [[Definiciones#^2e965b]] (obviamente aca $q\in N\cap \mathcal{V}$) 
>>3. Por ser difeo su inversa $(f|_{M\cap \mathcal{U}})^{-1}$ es suave 
>>4. Como $f$ es biyectiva osea por unicidad de inversa $(f|_{M\cap \mathcal{U}})^{-1}=f^{-1}|_{N\cap\mathcal{V}}$ 
>>5. Entonces mostramos que $f^{-1}$ es suave localmente para un entorno de $q$ y esto lo podemos hacer para cualquier $q$. Entonces $f^{-1}$ es suave   

^409ff8

# Áreas de regiones de superficies contenidas en abiertos coordenados

>[!Theorem]- Teorema del cambio de variables
>Sea $U$ un subconjunto abierto de $\mathbb{R}^n$ y sea $h : U \to \mathbb{R}^n$ una función suave tal que $\det(dh_q) \neq 0$ para todo $q \in U$. Sea $V = h(U)$, que es un subconjunto abierto de $\mathbb{R}^n$ ([[Definiciones#^3e597f]]), y sea $f : V \to \mathbb{R}$ una función suave. Sean $A$ un subconjunto cerrado y acotado contenido en $U$ y $B = h(A)$. Entonces
>$$ \int_A (f \circ h) |\det(dh_q)| = \int_B f. $$

^17a44b

>[!Definition] Area de superficie regular
>Sea $S$ una superficie regular, sea $\psi : V \to S$ un sistema coordenado de $S$ y sea $B$ un subconjunto cerrado y acotado contenido en $V$. Se define
>$$ \text{área}(\psi(B)) = \int_B \|\psi_u(u, v) \times \psi_v(u, v)\| \, du \, dv. $$
>(Recordar que $\|X \times Y\|$ es el área del paralelogramo en $\mathbb{R}^3$ generado por $X$ e $Y$.)

>[!Proposition] Repasar bien
>El área de $\psi(B)$ está bien definida.
>
>>[!Proof]-
>>1. Sea $\varphi:U\to S$ un sistema de coordenadas tal que $$\psi(B)\subset\varphi(U)\quad\text{y}\quad \psi(B)=\varphi(A),$$ con $A\subset U$.
>>2. Sea $$(\psi^{-1}\circ\varphi)(x,y)=(u(x,y),v(x,y)).$$ Entonces $$\varphi(x,y)=\psi(u(x,y),v(x,y)).$$
>>3. Por definición, $$\operatorname{área}(\varphi(A))=\int_A\|\varphi_x(x,y)\times\varphi_y(x,y)\|\,dx\,dy.$$
>>4. Por la regla de la cadena, $$\varphi_x=\psi_u(u,v)\,u_x+\psi_v(u,v)\,v_x,\qquad \varphi_y=\psi_u(u,v)\,u_y+\psi_v(u,v)\,v_y.$$
>>5. Expansión del producto cruz (bilinealidad):
>>   $$\begin{aligned}
>>   \varphi_x\times\varphi_y
>>   &=\big(\psi_u\,u_x+\psi_v\,v_x\big)\times\big(\psi_u\,u_y+\psi_v\,v_y\big)\\
>>   &=u_xu_y(\psi_u\times\psi_u)+u_xv_y(\psi_u\times\psi_v)+v_xu_y(\psi_v\times\psi_u)+v_xv_y(\psi_v\times\psi_v).
>>   \end{aligned}$$
>>6. Simplificación (antisimetría y $\psi_u\times\psi_u=\psi_v\times\psi_v=0$):
>>   $$\begin{aligned}
>>   \varphi_x\times\varphi_y
>>   &=u_xv_y(\psi_u\times\psi_v)+v_xu_y(\psi_v\times\psi_u)\\
>>   &=u_xv_y(\psi_u\times\psi_v)-v_xu_y(\psi_u\times\psi_v)\\
>>   &=(u_xv_y-u_yv_x)(\psi_u\times\psi_v).
>>   \end{aligned}$$
>>7. Tomando norma,
>>   $$\|\varphi_x\times\varphi_y\|
>>   =\|(u_xv_y-u_yv_x)(\psi_u\times\psi_v)\|
>>   =|u_xv_y-u_yv_x|\;\|\psi_u\times\psi_v\|.$$
>>8. Sustituyendo en la integral,
>>   $$\operatorname{área}(\varphi(A))
>>   =\int_A |u_xv_y-u_yv_x|\;\|\psi_u\times\psi_v\|\,dx\,dy.$$
>>9. Podemos considerar $h(x,y)=(u(x,y),v(x,y))$. Luego $u_{x}(x,y)v_{y}(x,y)-u_{y}(,y)v_{x}(x,y)=\det(dh_{h(x,y)})$   Como $(u,v)=\psi^{-1}\circ\varphi$ es un cambio de coordenadas entre abiertos de $\mathbb{R}^2$ y $(u,v)(A)=B$, el teorema del cambio de variables da
>>   $$\int_A |u_xv_y-u_yv_x|\;\|\psi_u\times\psi_v\|\,dx\,dy=\int_B \|\psi_u\times\psi_v\|\,du\,dv.$$
>>10. El último término es, por definición, $$\operatorname{área}(\psi(B)).$$ Luego el área de $\psi(B)$ no depende de la parametrización.
>
>>[!Resumen]-
>>11. Supongamos que $\varphi : U \to S$ es un sistema coordenado de $S$ tal que $\psi(B) \subset \varphi(U)$ y que $\psi(B) = \varphi(A)$.
>>12. Tenemos $(\psi^{-1} \circ \varphi)(x,y) = (u(x,y), v(x,y))$ entonces $\varphi(x,y)=\psi(u(x,y),v(x,y))$
>>13. Luego $$ \varphi_x = \psi_u(u,v) u_x + \psi_v(u,v) v_x \quad \text{y} \quad \varphi_y = \psi_u(u,v) u_y + \psi_v(u,v) v_y.$$  
>>14. Calculamos $$\text{área}(\varphi(A)) = \int_A \|\varphi_x(x, y) \times \varphi_y(x, y)\| \, dx \, dy= \int_{A} |\det(dh)| \|(\psi_u \times \psi_v)(h)\|$$  recordar que $x\times x=$ y $\det(dh)$ 
>>15. Cambio de variables $\int_{A} |\det(dh)| \|(\psi_u \times \psi_v)(h)\|=\int_{B}  \|(\psi_u \times \psi_v)(h)\|$ 

>[!Example]- Funcion que preserva areas
>Sean $P = \{(x, y, 0) \mid 0 < x < \pi\}$ y $C = \{(x, y, z) \mid x^2 + y^2 = 1\}$ y sea
>$$ f : P \to C, \quad f(x, y, 0) = (\cos(2x), \sin(2x), \frac{1}{2}y). $$
>Veamos que $f$ preserva áreas de regiones. Sea $A \subset P$ un subconjunto cerrado y acotado.
>Tenemos que
>$$ \text{área}(A) = \int_A 1 \quad \text{y} \quad \text{área}(f(A)) = \int_A \|\varphi_x(x, y) \times \varphi_y(x, y)\| \, dx \, dy, $$
>donde $\varphi(x, y) = (\cos(2x), \sin(2x), \frac{1}{2}y)$. Pero
>$$ \|\varphi_x(x, y) \times \varphi_y(x, y)\| = \|2(-\sin(2x), \cos(2x), 0) \times (0, 0, \frac{1}{2})\| = 1, $$
>de donde $\text{area}(f(A)) =\text{area}(A)$.

# Isometrías locales

>[!Definition] Isometría local
>Una función suave $f : M \to N$ entre dos superficies es una **isometría local** si preserva longitudes de curvas, es decir, si para toda curva suave $\alpha : [a, b] \to M$ se cumple que
>$$ \text{long}(\alpha) = \text{long}(f \circ \alpha). $$
>El dominio no tiene por que ser todo $M$ puede ser solo una parte del dominio a una parte del codominio

>[!Example]- Esta bueno leerlo
>Si $f : M \to N$ es la restricción de una transformación euclidiana de $\mathbb{R}^3$, entonces $f$ es una isometría local.
>>[!Proof]-
>>1. Sea $F$ una isometria de $\mathbb{R}^{3}$ (osea tranformacion euclidea) tal que $f=F|_{M}$ 
>>2. Entonces $$f\circ\alpha(t)=F|_{M}(\alpha(t))=F(\alpha (t))=C(\alpha(t))+c$$ luego $(f\circ\alpha)' (t)=C\alpha'(t)$.
>>3. Por lo tanto $\lVert (f\circ\alpha )'(t) \rVert=\lVert C\alpha '(t) \rVert=\lVert \alpha '(t) \rVert$ 
>>4. Entonces $long(\alpha )=long(f\circ\alpha )$ mostrando que $f$ es isometria local

>[!Example] Isometria entre plano y cilindro
>Sean $P = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ y $C = \{(x, y, z) \mid x^2 + y^2 = 1\}$ y sea
>$$ f : P \to C, \quad f(x, y, 0) = (\cos x, \sin x, y). $$
>Entonces $f$ es una isometría local. 
>>[!Proof]-
>>1. Sea $\alpha : [a, b] \to P$ una curva suave. Escribimos $$ \alpha(t) = (x(t), y(t), 0). $$
>>2. Luego $\text{long}(\alpha) = \int_a^b \|\alpha'(t)\| \, dt = \int_a^b \sqrt{x'(t)^2 + y'(t)^2} \, dt$. 
>>3. Ahora, como $$\begin{align} \|(f \circ \alpha)'(t)\| &= \|(-x'(t) \sin x(t), x'(t) \cos x(t), y'(t))\| \\&= \sqrt{x'(t)^2 (\cos^2 x(t) + \sin^2 x(t)) + y'(t)^2} \\&= \sqrt{x'(t)^2 + y'(t)^2}\end{align} $$tenemos que $\text{long}(\alpha) = \text{long}(f \circ \alpha)$.

>[!Example]- Ejemplo de algo que no es isometria local
>La función de la franja plana al cilindro del ejemplo de funciones que preservan áreas no es una isometría local. En efecto, la curva $\alpha : [0, 1] \to P$, $\alpha(t) = (\pi/2, t, 0)$ tiene longitud 1, mientras que $f \circ \alpha : [0, 1] \to C$, que está dada por
>$$ (f \circ \alpha)(t) = (\cos(\pi), \sin(\pi), \frac{1}{2}t) = (-1, 0, \frac{1}{2}t), $$
>tiene longitud $1/2$.

>[!Proposition] Caracterización de isometría local
>Una función suave $f : M \to N$ entre dos superficies es una isometría local si y solo si $df_p : T_pM \to T_{f(p)}N$ es una isometría lineal para todo $p \in M$.
>>[!Proof]-
>>- $\Rightarrow$) 
>>	1. Sea $p \in M$. Basta ver que $\|df_p(u)\| = \|u\|$ para todo $u \in T_pM$.
>>	2. Sea $\alpha : (-\varepsilon, \varepsilon) \to M$ una curva suave en $M$ con $\alpha(0) = p$ y $\alpha'(0) = u$.
>>	3. Por hipótesis, para todo $0 \le s < \varepsilon$ se cumple que $$ \text{long}(\alpha|_{[0, s]}) = \text{long}(f \circ \alpha|_{[0, s]}), $$o equivalentemente,$$ \int_0^s \|\alpha'(t)\| \, dt = \int_0^s \|(f \circ \alpha)'(t)\| \, dt. $$
>>	4. Derivando por derecha en ambos miembros con respecto a $s$ (Teorema Fundamental del Calculo) en $s=0$, obtenemos $$ \|\alpha'(0)\| = \|(f \circ \alpha)'(0)\| = \|df_p(\alpha'(0))\|, $$con lo cual $\|df_p(u)\| = \|u\|$, como queríamos.
>>- $\Leftarrow$) 
>>	1. Notar que $df_{p}$ es isometria entonces $\lVert df_{p}(u) \rVert=\lVert u \rVert$ 
>>	2. Sea $\alpha (t):[a,b]\rightarrow M$ entonces $(f\circ\alpha)'(t)=df_{\alpha (t)}\alpha'(t)$ 
>>	3. Por lo tanto por isometria $$\lVert (f\circ\alpha )'(t) \rVert=\lVert df_{\alpha (t)}\alpha'(t) \rVert=\lVert \alpha '(t) \rVert\qquad\forall t\in [a,b]$$
>>	4. Entonces $$\text{long}(f(\alpha (s)))=\int_{0}^{s} \lVert (f\circ\alpha )'(t) \rVert=\int_{0}^{s}  \lVert \alpha '(t) \rVert =\text{long}(\alpha (s))$$ 
>>	5. Por lo tanto preserva curvas entonces es isometria local
>>	6. Notar que si agregamos la hipotesis de que $f$ sea biyectiva entonces es facil probar usando isometria lineal que $df_{p}$ es isomorfismo por lo tanto $f$ seria un difeomorfismo (global) mostrando que $f$ es isometria global 

^c30e44

>[!Corollary]
>Si $f$ es una isometria local entonces es un difeomorfismo local
>>[!Proof]-
>>1. Como es isometria local entonces $df_{p}$ es isometria lineal
>>2. Como $df_{p}$ es isometria lineal entoces es isomorfismo luego usando [[Definiciones#^2e965b]] tenemos que $f$ es difeomorfismo local
>>3. Notar que no sabemos si $f$ es biyectiva, por eso no podemos afirmar inversa global y difeo global

>[!Definition] Isometría
>Una isometría local que es un difeomorfismo se llama **isometría**.

>[!Definition] Coeficientes de la primera forma fundamental
>Sea $\varphi : U \to M$ un sistema coordenado de una superficie $M$. Los **coeficientes de la primera forma fundamental** de $\varphi$ son las funciones
>$$ E : U \to \mathbb{R}, \quad F : U \to \mathbb{R} \quad \text{y} \quad G : U \to \mathbb{R} $$
>definidas por
>$$ E(u, v) = \|\varphi_u(u, v)\|^2, \quad F(u, v) = \langle \varphi_u(u, v), \varphi_v(u, v) \rangle \quad \text{y} \quad G(u, v) = \|\varphi_v(u, v)\|^2. $$

>[!Remark]- Explicacion de 1era forma fundamental
>Estas funciones indican de qué manera el mapeo $\varphi$ deforma el mapa $U$ y pueden pensarse como escalas infinitesimales. Por ejemplo, en el caso $F \equiv 0$, $d\varphi_{(u, v)}$ lleva la base ortonormal $\{e_1, e_2\}$ a la base ortogonal $\{\varphi_u(u, v), \varphi_v(u, v)\}$, cuyos elementos tienen normas $\sqrt{E(u, v)}$ y $\sqrt{G(u, v)}$, respectivamente. Luego, estos números son las proporciones en las que $\varphi$ deforma el mapa $U$ cerca de $(u, v)$, en las diferentes direcciones.

>[!Example]- Ejemplo de hallar coeficientes 1era forma fundamental
>Hallamos los coeficientes de la primera forma fundamental de las coordenas esféricas
>$$ \varphi : (-\pi, \pi) \times (-\pi/2, \pi/2) \to S^2, \quad \varphi(s, t) = (\cos t (\cos s, \sin s), \sin t). $$
>Calculamos
>$$ \varphi_s(s, t) = (\cos t (-\sin s, \cos s), 0) \quad \text{y} \quad \varphi_t(s, t) = (-\sin t (\cos s, \sin s), \cos t). $$
>Así,
>$$ E(s, t) = \|\varphi_s(s, t)\|^2 = \cos^2 t, \quad F(s, t) = 0 \quad \text{y} \quad G(s, t) = \|\varphi_t(s, t)\|^2 = 1. $$

>[!Proposition] Misma 1era forma sii isometria
>Sean $\varphi : U \to M$ y $\bar{\varphi} : U \to N$ sistemas coordenados de dos superficies $M$ y $N$ definidos en el mismo conjunto abierto $U$, y sean $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ los coeficientes de las primeras formas fundamentales de $\varphi$ y $\bar{\varphi}$, respectivamente. Entonces $E = \bar{E}, F = \bar{F}$ y $G = \bar{G}$ si y solo si $\bar{\varphi} \circ \varphi^{-1} : \varphi(U) \to \bar{\varphi}(U)$ es una isometría entre superficies.
>>[!Proof]-
>>- Difemorfismo
>>	1. Llamamos $f = \bar{\varphi} \circ \varphi^{-1} : \varphi(U) \to \bar{\varphi}(U)$, que es un difeomorfismo pues en coordenadas $\varphi$ y $\bar{\varphi}$ es la identidad. Osea $\bar{\varphi}^{-1}\circ f\circ\varphi=Id_{U}$.
>>	2. Entonces por [[Definiciones#^477389]] $f$ es suave
>>	3. Ver que es inversible es facil dado que por definicion de carta $\varphi$ es inversible en $\varphi(U)$
>>- $\Rightarrow$) 
>>	1. Dados $p \in \varphi(U)$ y $X \in T_p\varphi(U)$ debemos ver que $\|df_p(X)\| = \|X\|$.
>>	2. Supongamos que $p = \varphi(q)$. Como $\{\varphi_u(q), \varphi_v(q)\}$ es una base de $T_pM$, entonces $$ X = a\varphi_u(q) + b\varphi_v(q) $$para ciertos $a, b \in \mathbb{R}$. 
>>	3. Luego $$ \begin{align}\|X\|^2 &= a^2 \|\varphi_u(q)\|^2 + 2ab \langle \varphi_u(q), \varphi_v(q) \rangle + b^2 \|\varphi_v(q)\|^2 \\&= a^2 E(q) + 2ab F(q) + b^2 G(q). \end{align}$$
>>	4. Por otra parte, $$ \begin{align}df_p(X)& = a \, df_p(\varphi_u(q)) + b \, df_p(\varphi_v(q)) \\&= a \, (f \circ \varphi)_u(q) + b \, (f \circ \varphi)_v(q)\\&= a \, \bar{\varphi}_u(q) + b \, \bar{\varphi}_v(q)\end{align}$$ Recordar: $df_{p}(\varphi_{u}(q))=\frac{d}{dt}|_{0}(f(\varphi(q+te_{1})))=(f\circ\varphi)_{u}(q)$ para el segundo igual recordar la definicion de derivada parcial y considerar que la primera coordenada de $\varphi$ es $u$ osea seria $x_{1}$ es $u$   
>>	5. Así, con un cálculo análogo al de $\|X\|^2$ llegamos a que $$ \|df_p(X)\|^2 = a^2 \bar{E}(q) + 2ab \bar{F}(q) + b^2 \bar{G}(q)$$
>>	6. Como por hipótesis $E = \bar{E}, F = \bar{F}$ y $G = \bar{G}$, resulta que $\|df_p(X)\| = \|X\|$, como queríamos.
>>- $\Leftarrow$) 
>>	1. Suponemos $f:=\bar{\varphi}\circ\varphi$ es isometria. Osea $\lVert df_{p}(X) \rVert=\lVert X \rVert$ 
>>	2. Definmos $X=\varphi_{u}(q)$ entonces $\lVert X \rVert^{2}=E(q)$
>>	3. Ademas $df_{p}(X) = (f\circ\varphi)_{u}(q) =\bar{\varphi}_{u}(q)$ por lo tanto $\lVert df_{p}(X) \rVert =\bar{E}(q)$ 
>>	4. Y con el resto es igual
>
>>[!Resumen]-
>>5. $f = \bar{\varphi} \circ \varphi^{-1}$ suave usando definicion y que $Id$ es suave
>>6. $p \in \varphi(U)\subseteq M$ y $X\in T_{p}\varphi(U)$ entonces $X\in T_{p}M$ 
>>7. Luego $$ \begin{align}\|X\|^2 &= a^2 \|\varphi_u(q)\|^2 + 2ab \langle \varphi_u(q), \varphi_v(q) \rangle + b^2 \|\varphi_v(q)\|^2 \\&= a^2 E(q) + 2ab F(q) + b^2 G(q). \end{align}$$ y $$ \begin{align}df_p(X)& = a \, df_p(\varphi_u(q)) + b \, df_p(\varphi_v(q)) \\&= a \, (f \circ \varphi)_u(q) + b \, (f \circ \varphi)_v(q)\\&= a \, \bar{\varphi}_u(q) + b \, \bar{\varphi}_v(q)\end{align}$$

^7286f3

>[!Lemma] Lema previo
>Antes de la prueba, escribimos el área del paralelogramo generado por $X, Y \in \mathbb{R}^3$ en términos de $\|X\|, \|Y\|$ y $\langle X, Y \rangle$. Si $X, Y \in \mathbb{R}^3$, entonces
>$$ \|X \times Y\|^2 = \det \begin{pmatrix} \|X\|^2 & \langle X, Y \rangle \\ \langle X, Y \rangle & \|Y\|^2 \end{pmatrix}. $$
>>[!Proof]-
>>1. Sea $\theta$ el ángulo que forman $X$ y $Y$. Sabemos que $$ \|X \times Y\| = \|X\| \|Y\| |\sin \theta| $$
>>2. De allí, $$ \begin{align} \|X \times Y\|^2 & = \|X\|^2 \|Y\|^2 \sin^2 \theta = \|X\|^2 \|Y\|^2 (1 - \cos^2 \theta) \\ & = \|X\|^2 \|Y\|^2 \left( 1 - \frac{\langle X, Y \rangle^2}{\|X\|^2 \|Y\|^2} \right) \\ & = \|X\|^2 \|Y\|^2 - \langle X, Y \rangle^2, \end{align} $$como queríamos. $\square$

^e69a37

>[!Proposition] Isometrias preservan areas
>Si $f : M \to N$ es una isometría, entonces preserva áreas de regiones en abiertos coordenados.
>>[!Proof]-
>>1. Sea $\varphi : U \to M$ un sistema coordenado y sea $A$ un subconjunto cerrado y acotado de $U$. 
>>2. Como $f$ es una isometría, $f$ es un difeomorfismo (local), y por lo tanto $\bar{\varphi} := f \circ \varphi$ es un sistema coordenado de $N$. (Recordar, basicamente un sistema coordenado es un difeomorfismo entre $U$ y un abierto ($N\cap\mathcal{V}$)  de la superficie en este caso $N$) 
>>3. Sean $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ los coeficientes de la primera forma fundamental de $\varphi$ y $\bar{\varphi}$, respectivamente. Por el [[Definiciones#^e69a37]] $$ \|\varphi_u \times \varphi_v\| = \sqrt{EG - F^2} \quad \text{y} \quad \|\bar{\varphi}_u \times \bar{\varphi}_v\| = \sqrt{\bar{E}\bar{G} - \bar{F}^2}, $$
>>4. Ahora $\bar{\varphi}\circ\varphi ^{-1}=f$ que es una isometria entonces por [[Definiciones#^7286f3]] los coeficientes de la 1era forma son iguales. Con lo cual $\lVert \varphi_{u}\times\varphi_{v} \rVert=\lVert \bar\varphi_{u}\times\bar\varphi_{v} \rVert$ 
>>5. Integrando sobre $A$ obtenemos que $$ \text{área } \varphi(A) = \text{área } \bar{\varphi}(A) $$como deseábamos.
>
>>[!Resumen]-
>>6. Como $f$ isometria $f$ difeo entonces $\bar{\varphi}:=f\circ\varphi$ carta
>>7. Se ve facil $\|\varphi_u \times \varphi_v\| = \sqrt{EG - F^2} \quad \text{y} \quad \|\bar{\varphi}_u \times \bar{\varphi}_v\| = \sqrt{\bar{E}\bar{G} - \bar{F}^2}$
>>8. Como $f=\bar{\varphi}\circ\varphi ^{-1}$ y $f$ isometria entonces $\bar{E}=E$ etc   

^31299e

>[!Example] Isometría local entre el helicoide y la catenoide
>Recordemos que el helicoide es la superficie dada por la imagen de $\psi : \mathbb{R}^2 \to \mathbb{R}^3$,
>$$ \psi(s, t) = (0, 0, s) + t (\cos s, \sin s, 0) = (t \cos s, t \sin s, s). $$
>La catenoide $C$ es por definición la superficie de revolución con curva perfil $\alpha : \mathbb{R} \to \mathbb{R}^2$ dada por
>$$ \alpha(t) = (\cosh t, t), $$
>o sea, $C = \bar{\varphi}(\mathbb{R}^2)$, donde
>$$ \bar{\varphi}(u, v) = (\cosh v (\cos u, \sin u), v). $$
>Sea $H$ la región del helicoide comprendida entre los planos $z = 0$ y $z = 2\pi$ y sea $C$ la catenoide menos el meridiano $u = 0$, o equivalentemente,
>$$ H = \psi(U) \quad \text{y} \quad C = \bar{\varphi}(U), $$
>donde $U = (0, 2\pi) \times \mathbb{R}$. Entonces $C$ y $H$ son isométricas.
>>[!Proof]-
>>1. Encontraremos una isometría $f : C \to H$ que lleva los rayos del helicoide en los meridianos de la catenoide.
>>2. Consideramos el sistema coordenado $\varphi : U \to H$ dado por $$ \varphi(u, v) = \psi(u, \sinh v) = (\sinh v (\cos u, \sin u), u). $$
>>3. Veremos que el difeomorfismo $$ f : H \to C, \quad f = \bar{\varphi} \circ \varphi^{-1} $$es una isometría. 
>>4. Basta verificar que $\bar{E} = E, \bar{F} = F$ y $\bar{G} = G$, donde $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ son los coeficientes de las primeras formas fundamentales de $\varphi$ y $\bar{\varphi}$, respectivamente.
>>5. Para el helicoide calculamos $$ \varphi_u(u, v) = (\sinh v (-\sin u, \cos u), 1) \quad \text{y} \quad \varphi_v(u, v) = (\cosh v (\cos u, \sin u), 0). $$
>>6. Luego $$ E(u, v) = \|\varphi_u(u, v)\|^2 = \sinh^2 v (\sin^2 u + \cos^2 u) + 1 = \cosh^2 v, $$$$ F(u, v) = \langle \varphi_u(u, v), \varphi_v(u, v) \rangle = 0$$$$ G(u, v) = \|\varphi_v(u, v)\|^2 = \cosh^2 v. $$
>>7. De la misma manera se calculan $\bar{E}, \bar{F}, \bar{G}$ y resultan iguales a $E, F, G$. En consecuencia, $f$ es una isometría
>
>>[!Resumen]-
>>1. $\varphi(u,v)=\psi(u,\sinh(v))$ luego $\bar{\varphi}\circ\varphi ^{-1}: C\rightarrow H$
>>2. Despues solo verificar que que $\bar{\varphi},\varphi$ tienen las mismas formas fundamentales

>[!Definition]- Superficie rígida
>Una superficie $M$ se dice **rígida** si para toda isometría $f : M \to N$, donde $N$ es una superficie, se cumple que $f = F|_M$ para cierta transformación euclidiana $F : \mathbb{R}^3 \to \mathbb{R}^3$.

>[!Example]-
>La franja $M = \{(s, t, 0) \in \mathbb{R}^3 \mid 0 < s < \pi\}$ no es rígida. En efecto, existe una isometría $f : M \to N$, donde $N$ es la mitad del cilindro $\{(x, y, z) \mid x^2 + y^2 = 1, y > 0\}$, dada por
>$$ f(s, t, 0) = (\cos s, \sin s, t), $$
>que no es la restricción a $M$ de ninguna transformación euclideana $F$. De hecho, si una tal $F$ existiera, para $p = (\frac{\pi}{3}, 0, 0)$ y $q = (\frac{2\pi}{3}, 0, 0)$ se debería cumplir que
>$$ d(p, q) = d(F(p), F(q)), $$ (Dado que transformaciones euclideanas preservan distancia por definicion) 
>pero el miembro izquierdo vale $\frac{\pi}{3}$ y el derecho $1$.

>[!Remark]-
>El teorema de rigidez de la esfera afirma que la esfera de radio 1 centrada en el origen es rígida. Sin embargo, un pequeño casquete de esfera (es decir la intersección de la esfera con un semiespacio, digamos, por ejemplo $\{(x, y, z) \mid z > 3/4\}$) no es rígido.
>>[!Proof]-
>>3. Consideremos una superficie $N$ de curvatura constante $K=1$ que no sea un trozo de esfera (por ejemplo, una superficie de revolución generada por una curva perfil adecuada distinta de la circunferencia).
>>4. Por el Teorema de Minding, dado que el casquete $M$ y $N$ tienen la misma curvatura constante, son localmente isométricas. Es decir, existe una isometría $f: M \to V \subset N$ (si $M$ es suficientemente pequeño).
>>5. Sin embargo, esta isometría no proviene de una transformación rígida (congruencia). Si lo fuera, preservaría la segunda forma fundamental y, por tanto, las curvaturas principales. En el casquete esférico, todos los puntos son umbilicales ($k_1 = k_2 = 1$), mientras que en $N$ podemos elegir una región donde los puntos no sean umbilicales ($k_1 \neq k_2$ con $k_1 k_2 = 1$).
>>6. Por lo tanto, $f$ es una isometría pero no es la restricción de una transformación euclidiana.

>[!Remark]-
>Sea $f : M \to N$ una isometría entre superficies. No siempre es claro que exista un continuo de isometrías $f_t : M \to N_t$ con $f_0$ igual a la identidad en $M$ y $f_1 = f$ y $t\in [0,1]$. 
>Por ejemplo, $M$ como en la figura, y $N$ análoga, pero con una de las montañas para abajo. No necesariamente se puede deformar de forma continua la superficie con las dos montañas para arriba para llegar a los superficie con una montaña para abajo.![[Pasted image 20251129101703.png]]
>Pero si es cierto que hay isometria entre estas dos superficies por que (intuitivamente) se preserva las distancias sin importar si la montana esta para arriba o para abajo.

>[!Remark]-
>Aprovechamos para comentar que para dar explícitamente una parametrización del plano con montañas es muy conveniente haber requerido en un comienzo sólo diferenciabilidad de clase $C^3$ de las cartas coordenadas: Sea $h$ la función de gráfico rojo. ![[Pasted image 20251129101733.png]]
>Necesitamos que las tres primeras derivadas de $h$ en $x$ por derecha sean nulas (para empalmar bien). Podemos conseguir un polinomio $h$ así. Si trabajáramos en clase $C^\infty$, necesitaríamos que todas las derivadas en $x$ por derecha fuera cero. El único polinomio que cumple eso el es idénticamente nulo. Las funciones con esa propiedad tienen fórmulas más complicadas, que involucran, por ejemplo, $e^{-1/t}$.

>[!Remark]- Otros tipos de difeomorfismos
>Otra familia de mucho interés de difeomorfismos entre superficies, además de los que preservan áreas y las isometrías, es la de los difeomorfismos conformes. Un difeomorfismo local $f : M \to N$ se dice **conforme** si preserva los ángulos, o sea, para todo par de curvas $\alpha$ y $\beta$ en $M$ con $\alpha(0) = \beta(0)$, el ángulo entre $\alpha'(0)$ y $\beta'(0)$ es igual al ángulo ente $(f \circ \alpha)'(0)$ y $(f \circ \beta)'(0)$.
>Como es de imaginar, mapeos conformes de la Tierra tenían importancia en navegación.
>Se puede mostrar que la proyección estereográfica del plano a la esfera es una aplicación conforme.

# Superficies regladas

>[!Definition] Superficie reglada
>Una superficie $M$ se dice **reglada** si para todo $p \in M$ existe una carta coordenada $\varphi : U \to \mathbb{R}^3$ con $p \in \varphi(U)$ de la forma
>$$ \varphi : (a, b) \times (c, d) \to M, \quad \varphi(s, t) = \alpha(s) + t v(s), $$
>donde $\alpha : (a, b) \to \mathbb{R}^3$ y $v : (a, b) \to \mathbb{R}^3$ son curvas suaves, llamadas **curva base** y **curva directriz** de $\varphi$, respectivamente.
>
>Como $\varphi$ es una carta coordenada, se cumple que $\{\alpha'(s), v(s)\}$ es linealmente independiente para todo $s$. En particular, $\alpha$ es regular y $v$ nunca nula.

>[!Remark]
>El plano, el cilindro y el helicoide son superficies regladas.

>[!Example] 
>Sea $H = \{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 - z^2 = 1\}$ el hiperboloide de una hoja.
>![Hiperboloide](https://upload.wikimedia.org/wikipedia/commons/5/50/Hyperb1N.png)
>Algunas propiedades:
>- a) El subconjunto $H$ es una superficie regular por el teorema de la superficie implícita.
>- b) Es una superficie de revolución con curva perfil una hipérbola a $45^\circ$. De hecho, cortando $H$ con un plano que contiene al eje $z$ se obtienen las dos ramas de la hipérbola.
>- c) Intersecando $H$ con un plano paralelo al eje $z$ a distancia 1 de este, resultan dos rectas que se cortan en un ángulo recto.

>[!Remark] El Hipernoloide es birreglado
>Veamos que $H$ es **birreglada**.
>![Hyperboloid Animation](https://upload.wikimedia.org/wikipedia/commons/d/d3/Hyperboloid-1s-rot.svg)
>>[!Proof]-
>>1. Sea $\alpha : \mathbb{R} \to \mathbb{R}^3$, $\alpha(s) = (\cos s, \sin s, 0)$ y para $\varepsilon = \pm 1$ sea $$ v_\varepsilon : \mathbb{R} \to \mathbb{R}^3, \quad v_\varepsilon(s) = \frac{1}{\sqrt{2}} (\varepsilon(-\sin s, \cos s), 1). $$
>>2. Verifiquemos que $\varphi_\varepsilon : \mathbb{R}^2 \to \mathbb{R}^3, \quad \varphi_\varepsilon(s, t) = \alpha(s) + t v_\varepsilon(s)$ es una parametrización suryectiva de $H$.
>>   Sea $T = t/\sqrt{2}$. Entonces las coordenadas son:
>>   $$ x = \cos s - \varepsilon T \sin s, \quad y = \sin s + \varepsilon T \cos s, \quad z = T. $$
>>   Calculamos $x^2 + y^2 = (\cos s - \varepsilon T \sin s)^2 + (\sin s + \varepsilon T \cos s)^2 = 1 + T^2 = 1 + z^2$.
>>   Por lo tanto, la imagen está contenida en $H$.
>>   Para la suryectividad, dado $(x, y, z) \in H$, tomamos $t = z\sqrt{2}$ (o sea $T=z$). El sistema lineal para $\cos s$ y $\sin s$ tiene determinante $1+z^2 \neq 0$. Resolviendo obtenemos un único punto en el círculo unitario (pues $x^2+y^2=1+z^2$), lo que determina $s$ (módulo $2\pi$). Así, todo punto de $H$ es alcanzado. De allí se deduce que $H$ es birreglada.

>[!Definition]
>Una parametrización $(s, t) \mapsto \alpha(s) + t v(s)$ de una superficie reglada se dice **nunca cilíndrica** si $\|v(s)\| = 1$ y $v'(s) \neq 0$ para todo $s$.
>Si $(s, t) \mapsto \alpha(s) + t v(s)$ es nunca cilíndrica, la curva $\alpha$ se llama **curva guía** o **curva de estrechez** si $\alpha'(s) \perp v'(s)$ para todo $s$.

>[!Exercise]
>Las parametrizaciones $\varphi_\varepsilon$ del hiperboloide $H$ de una hoja de arriba, con $\varepsilon = \pm 1$, son nunca cilíndricas y $\alpha(s) = (\cos s, \sin s, 0)$ es una curva de estrechez para ambas parametrizaciones.
>>[!Proof]-
>>- **Nunca cilíndrica**:
>>   1. Recordemos que $v_\varepsilon(s) = \frac{1}{\sqrt{2}} (\varepsilon(-\sin s, \cos s), 1)$.
>>   2. Calculamos su norma: $$ \|v_\varepsilon(s)\|^2 = \frac{1}{2} (\sin^2 s + \cos^2 s + 1) = \frac{1}{2}(1+1) = 1. $$
>>   3. Calculamos su derivada: $$ v_\varepsilon'(s) = \frac{1}{\sqrt{2}} (\varepsilon(-\cos s, -\sin s), 0). $$
>>   4. Vemos que $\|v_\varepsilon'(s)\| = \frac{1}{\sqrt{2}} \neq 0$ para todo $s$. Por lo tanto, es nunca cilíndrica.
>>- **Curva de estrechez**:
>>   1. Debemos verificar que $\alpha'(s) \perp v_\varepsilon'(s)$.
>>   2. Tenemos $\alpha(s) = (\cos s, \sin s, 0)$, luego $\alpha'(s) = (-\sin s, \cos s, 0)$.
>>   3. Calculamos el producto interno: $$\begin{align} \langle \alpha'(s), v_\varepsilon'(s) \rangle & = \left\langle (-\sin s, \cos s, 0), \frac{\varepsilon}{\sqrt{2}} (-\cos s, -\sin s, 0) \right\rangle\\ & = \frac{\varepsilon}{\sqrt{2}} (\sin s \cos s - \cos s \sin s + 0)\\& = 0\end{align} $$por lo tanto, $\alpha$ es una curva de estrechez.

>[!Remark] Curvas base no son unicas
>Las curvas base no son distinguidas geométricamente: Si $(s, t) \mapsto \alpha(s) + t v(s)$ es una parametrización reglada de una superficie $M$, entonces
>$$ (s, \tau) \mapsto \alpha(s) + f(s) v(s) + \tau v(s) = \beta(s) + \tau v(s) \quad (12) $$
>también es una parametrización reglada de $M$, con curva base $\beta(s) = \alpha(s) + f(s) v(s)$, siempre que $|f|$ sea pequeño y $s, t$ se restrinjan lo suficiente.

>[!Example]-
>El eje del helicoide (recta roja en la figura de abajo) es la curva guía. La hélice verde puede tomarse también como curva base de una parametrización del helicoide.
>![[Pasted image 20251129153434.png]]

>[!Exercise]
>Si para las parametrizaciones regladas del hiperboloide de una hoja tomamos $f$ constante, la nueva curva base describe una circunferencia en un plano horizontal.

>[!Proposition] Unicidad de curva guia en nunca cilindricas
>La curva guia de una parametrización nunca cilíndrica es única en el siguiente sentido: Si en (12) $\alpha$ y $\beta$ son ambas curvas guías, entonces coinciden.
>>[!Proof]-
>>4. Como $\beta$ es curva guía vale $$ 0 = \langle \beta', v' \rangle = \langle \alpha' + f'v + fv', v' \rangle = \langle \alpha', v' \rangle + f' \langle v, v' \rangle + f \langle v', v' \rangle = f \|v'\|^2 $$pues $\langle \alpha', v' \rangle = 0$ (ya que $\alpha$ es curva guía), y $\langle v', v \rangle = 0$ ya que $v$ es unitario. 
>>5. Como $\|v'\|$ es nunca nulo, entonces $f = 0$ y por lo tanto, $\alpha = \beta$.

>[!Remark]
>Si los rayos de la superficie reglada fueran láser los puntos de la curva guía serían los más brillantes.

# Orientación de superficies

>[!Remark]-
>Vamos a explorar cuántos lados tiene una superficie.

>[!Definition] Superficie orientable
>Se dice que una una superficie $S$ es **orientable** si existe una función continua $n : S \to \mathbb{R}^3$ que cumple $\|n(p)\| = 1$ y $n(p) \perp T_pS$ para todo $p \in S$.
>La condición $n(p) \perp T_pS$ significa que $\langle n(p), u \rangle = 0$ para todo $u \in T_pS$. Una función $n$ así es un **campo normal unitario** de $S$ y se denomina una **orientación** de la superficie $S$.

>[!Remark]-
>Las superficies orientables tienen al menos dos lados, determinados por $n$ y $-n$.

>[!Example] Ejemplos de superficies orientables
>- El plano $z = 0$ es orientable. La verificación se deja como ejercicio.
>- La esfera $S$ de centro $0$ y radio $r > 0$ es orientable. 
>>[!Proof]-
>>1. En efecto, $S = \{p \in \mathbb{R}^3 \mid \|p\| = r\}$ y sea $$ n : S \to \mathbb{R}^3, \quad n(p) = \frac{p}{r}. $$
>>2. La función $n$ es continua, pues el la restricción a $S$ de la función definida por la misma fórmula en el abierto $\mathbb{R}^3 - \{0\} \to \mathbb{R}^3$.
>>3. También, $\|n(p)\| = 1$ y $(\frac{p}{r})^\perp = p^\perp = T_pS$ para todo $p \in S$ (la última afirmación se mostró para $r = 1$ usando la descripción de los planos tangentes a una superficie implícita; para $r$ arbitrario es similar).
>
>>[!Resumen]-
>>4. Definir $n(p)=\frac{p}{r}$. Es continua por ser restriccion de continua (continua en un abierto $\mathbb{R}^{3}-\{ 0 \}$) 
>>5. Y es ortogonal al $T_{p}S=p^{\perp}$ probado antes (superficie de revolucion)  

^278b74

>[!Remark] Las superficies de rev son orientables
>Las superficies de revolución son orientables. En particular sea $M$ la superficie de revolución con curva perfil $$ \alpha : (a, b) \to \mathbb{R}^2, \quad \alpha(t) = (r(t), h(t)), $$inyectiva con inversa continua, con $r(t) > 0$ para todo $t$. Entonces $M$ es orientable 
>>[!Proof]-
>>1. Sea $\varphi : \mathbb{R} \times (a, b) \to M$,$$ \varphi(s, t) = (r(t) (\cos s, \sin s), h(t)), $$y definimos $n : M \to \mathbb{R}^3$ mediante $$ n(\varphi(s, t)) = \frac{\varphi_s(s, t) \times \varphi_t(s, t)}{\|\varphi_s(s, t) \times \varphi_t(s, t)\|}. $$
>>2. Claramente $n(\varphi(s, t)) \perp T_{\varphi(s, t)}M$ y $\|n(\varphi(s, t))\| = 1$ para todo $s, t$.
>>3. Veamos que $\varphi$ está bien definida. Observamos que $M$ es la imagen de $\varphi$ y verificamos $$ n(\varphi(s, t)) = n(\varphi(s', t')) $$
>>4. Sean $\varphi(s, t) = \varphi(s', t')$. Esto ocurre si y solo si $t' = t$ (pues $\alpha$ es inyectiva) y $s' = s + 2k\pi$ para cierto $k \in \mathbb{Z}$. Como $\varphi(s, t) = \varphi(s + 2k\pi, t)$, tenemos que $$ \varphi_s(s, t) = \varphi_s(s + 2k\pi, t) \quad \text{y} \quad \varphi_t(s, t) = \varphi_t(s + 2k\pi, t) $$para todo $s, t$. Entonces $n$ está bien definida.
>>5. Para ver que $n$ es continua, notamos que $n \circ \varphi|_{I \times (a, b)}$ es continua y $\varphi|_{I \times (a, b)}$ es un sistema coordenado (cualquiera) de $M$ para todo intervalo $I$ de longitud menor que $2\pi$.
>>6. Si $\alpha$ está definida en todo $\mathbb{R}$ y es periódica, se procede de manera similar.
>
>>[!Resumen]-
>>1. $\varphi(s, t) = (r(t) (\cos s, \sin s), h(t)),$
>>2. Definimos $n(\varphi(s, t)) = \frac{\varphi_s(s, t) \times \varphi_t(s, t)}{\|\varphi_s(s, t) \times \varphi_t(s, t)\|}.$ y ver que esta bien definida usando periodicidad
>>3. Claramente cumple todo de campo unitario
>>4. $n \circ \varphi|_{I \times (a, b)}$ con $I$ cualquier intervalo de longitud menor que $2\pi$ es claramete continuo, como es para cualquier parametrizacion $\varphi$ entonces $n$ es continua.La restriccion es para que $\varphi$ sea inyectiva, osea para que sea sistema. decoordenadas , por que la continiudad se mira con sistemas coordenados no con parametrizaciones    

^5c0406

>[!Definition] Cinta de Möbius
>La cinta de Möbius es el conjunto $M = \{\varphi(s, t) \mid s \in \mathbb{R}, |t| < r\}$ dada por$$ \varphi(s, t) = \alpha(s) + t v(s), $$donde $$ \alpha(s) = (\cos s, \sin s, 0) \quad \text{y} \quad v(s) = \cos(\frac{s}{2}) \alpha(s) + \sin(\frac{s}{2}) (0, 0, 1). $$Se puede demostrar que $M$ es una superficie regular si $r > 0$ es suficientemente pequeño. ¿Es isométrica a la cinta de Möbius que construimos con papel?

>[!Proposition] Cinta Mobius no es orientable
>La cinta de Möbius no es orientable.
>
>>[!Proof]-
>>5. Supongamos que existe una función $n : M \to \mathbb{R}^3$ continua tal que $\|n(p)\| = 1$ y $n(p) \perp T_pM$ para todo $p \in M$. (No necesariaemnte $n$ esta definida a partir de una carta osea no necesariamente $n=:\frac{\varphi_{u}\times\varphi_{v}}{\lVert \varphi_{u}\times\varphi_{v} \rVert}$, puede ser distinto signo) 
>>6. Definimos la función $$ N : \mathbb{R} \to \mathbb{R}^3, \quad N(s) = n(\varphi(s,0)), \quad (13) $$que es continua pues es composición de funciones continuas.
>>7. Por otro lado $$ \varphi_s(s, t) = \alpha'(s) + t v'(s) \quad \text{y} \quad \varphi_t(s, t) = v(s); $$en particular, $\varphi_s(s, 0) = \alpha'(s)$ y $\varphi_t(s, 0) = v(s)$. 
>>8. Luego,$$(\varphi_s \times \varphi_t)(s, 0) = \alpha'(s) \times v(s), $$que está en $(T_{\varphi(s, 0)}M)^\perp$ y además unitario, pues $\|\alpha'(s)\| = 1 = \|v(s)\|$ y $\alpha'(s) \perp v(s)$. ($\lVert A\times B \rVert=\lVert A \rVert\lVert B \rVert \sin(\theta_{A,B})$) 
>>9. Entonces $N(s)$ y $\alpha'(s) \times v(s)$ son ambos ortogonales al plano tangente por lo tanto para cada $s$ $$ N(s) = \varepsilon(s) \alpha'(s) \times v(s) $$para cierta función $\varepsilon : \mathbb{R} \to \mathbb{R}$ con valores en el conjunto $\{-1, 1\}$. (Obviamente $N(s)$ esta en $(T_{\varphi(s,0)}M)^{\perp}$) 
>>10. Veamos que $\varepsilon$ es constante. Para eso despejamos $$ \varepsilon(s) = \langle N(s), \alpha'(s) \times v(s) \rangle, $$que es una función continua de $s$. 
>>11. Por el teorema de los valores intermedios, $\varepsilon$ es constante igual a $1$ o constante igual a $-1$. Spd es igual a 1
>>12. Ahora calculamos $$ N(0) = \alpha'(0) \times v(0) \quad \text{y} \quad N(2\pi) = \alpha'(2\pi) \times v(2\pi). $$
>>13. Como $\alpha$ es periódica de período $2\pi$, $\alpha'$ también lo es; así $\alpha'(2\pi) = \alpha'(0)$. También, es fácil verificar que $v(2\pi) = -v(0)$. 
>>14. Luego tenemos que $N(2\pi) = -N(0)$. Pero entonces $$ n(\varphi(2\pi,0)) = -n(\varphi(0,0)), $$lo cual es absurdo, pues $\varphi(2\pi,0) = \varphi(0,0)$. 
>>15. En consecuencia, $M$ no es orientable. $\square$
>
>>[!Resumen]-
>>16. Usar $N(s)=n(\varphi(s,0))$ entonces $N(s)=\epsilon(s)\alpha '(s)\times v(s)$  
>>17. Producto interno contra $\alpha'(s)\times v(s)$ de ambos lados te dice $\epsilon$ continua entonces constante $1$ o $-1$  
>>18. Notamos $-N(0)=N(2\pi)$ entonces $n(\varphi(2\pi,0)) = -n(\varphi(0,0))$ que es absurdo por que $\varphi(2\pi,0)=\varphi(0,0)$  

^dff491

>[!Remark]-
>La cinta de Möbius tiene un solo lado.

>[!Proposition]-
>Las orientaciones (campos noramales unitarios)   de superficies son de clase $C^2$.
>>[!Proof]-
>>12. Sea $n : M \to \mathbb{R}^3$ una orientación en la superficie $M$. Ver que $n$ es de clase $C^2$ es ver que lo es un punto arbitrario $p$ de $M$. 
>>13. Sea $\varphi : U \to M$ una carta coordenada con $U$ conexo y $p \in \varphi(U)$.
>>14. Sea $N : U \to \mathbb{R}^3$ definida por $$ N(u, v) = \frac{\varphi_u(u, v) \times \varphi_v(u, v)}{\|\varphi_u(u, v) \times \varphi_v(u, v)\|}. $$
>>15. Notemos que tanto $N(u, v)$ como $n(\varphi(u, v))$ son vectores normales unitarios a $M$ en $\varphi(u, v)$. Por lo tanto, $n(\varphi(u, v)) = \pm N(u, v)$.
>>16. Consideremos la función $f: U \to \mathbb{R}$ dada por $f(u, v) = \langle n(\varphi(u, v)), N(u, v) \rangle$. Como $n$ y $N$ son continuas, $f$ es continua. 
>>17. Además, su imagen está contenida en $\{-1, 1\}$. Pues son paralelos
>>18. Como $U$ es conexo, $f$ debe ser constante. Pues $f(U)$ debe ser conexo por que $f$ es continua 
>>19. Luego, $n(\varphi(u, v)) = N(u, v)$ para todo $(u, v) \in U$ o $n(\varphi(u, v)) = -N(u, v)$ para todo $(u, v) \in U$.
>>20. En cualquier caso, $n \circ \varphi$ coincide con $\pm N$, que es una función de clase $C^2$ (de hecho $C^\infty$ si la superficie lo es) (El producto cruz es $C^{\infty}$)  pues $\varphi$ lo es y el denominador no se anula. Esto prueba que $n$ es de clase $C^2$. 

# Curvatura de superficies. El operador de forma

>[!Remark]-
>Para ver cómo se curva una superficie vemos cómo varían los planos tangentes, o equivalentemente, cómo varían los vectores normales.

>[!Definition] Aplicación de Gauss
>Sea $M$ una superficie regular con una orientación $n : M \to \mathbb{R}^3$. Dado que $n$ es unitaria la podemos pensar como $n : M \to S^2$, que llega a la esfera de radio 1 centrada en el origen, se llama **aplicación de Gauss**.
>Como $T_qS^2 = q^\perp$ para todo $q \in S^2$, tenemos que para todo $p \in M$ se cumple que
>$$ dn_p : T_pM \to T_{n(p)}S^2 = n(p)^\perp = T_pM. $$
>En particular, $dn_p$ es una transformación lineal de $T_pM$ en sí mismo.

>[!Proposition]-
>Toda superficie regular es localmente orientable. Esto significa que para todo punto $p \in M$, existe un entorno abierto $V \subset M$ de $p$ tal que $V$ es una superficie orientable.
>>[!Proof]-
>>1. Sea $p \in M$. Por definición de superficie regular, existe una carta coordenada $\varphi: U \to V$ tal que $U \subset \mathbb{R}^2$ es abierto, $p \in V \subset M$ y $V$ es un abierto de $M$.
>>2. Podemos definir una orientación en $V$ mediante la función $n: V \to \mathbb{R}^3$ dada por:$$ n(q) = \frac{\varphi_u(u, v) \times \varphi_v(u, v)}{\|\varphi_u(u, v) \times \varphi_v(u, v)\|} $$donde $q = \varphi(u, v)$.
>>3. Esta función está bien definida porque $\varphi$ es un difeomorfismo (localmente) (como es difeo es biyectiva, cada $q$ corresponde a un único $(u, v)$) y el denominador es no nulo por la regularidad de la carta. 
>>4. Además, es continua (de hecho suave) y unitaria. Esto es por que el producto cruz es $C^{\infty}$
>>5. Y ademas $n(q)$ es ortogonal a $T_q M$ (por que $T_{q}M$ es generado por $\varphi_u$ y $\varphi_v$).
>>6. Por lo tanto, $V$ es orientable. Como $p$ es arbitrario, $M$ es localmente orientable

>[!Definition] Operador de forma
>Sea $M$ una superficie con una orientación $n$ y sea $p \in M$. Se define
>$$ A_p = -dn_p : T_pM \to T_pM $$
>y se llama el **operador de forma de $M$ en $p$ respecto de la orientación $n$**.

>[!Theorem]
>$A_{p}$ es autoadjunta. Osea el operador de forma de $M$ en $p$ diagonaliza en una base ortonormal de $T_pM$, es decir, existe una base ortonormal $\{X,Y\}$ de $T_pM$ tal que
>$$ A_p(X) = k_1 X \quad \text{y} \quad A_p(Y) = k_2 Y, $$
>con $k_1 \ge k_2$.
>>[!Proof]-
>>1. Un teorema de Algebra Lineal afirma que $T$ autoadjunta sii $T$ diagonaliza ortonormalmente por lo tanto basta ver que $A_p$ es autoadjunta, o sea, que $$ \langle -dn_p(v_{1}), v_{2} \rangle = \langle v_{1}, -dn_p(v_{2}) \rangle $$para todo $v_{1},v_{2} \in T_pM$. 
>>2. Como el producto interno es bilineal, basta verificarlo para $$ v_{1} = \varphi_u(q) \quad \text{e} \quad v_{2} = \varphi_v(q), $$donde $\varphi : U \to M$ es un sistema coordenado con $\varphi(q) = p$ (Esto es por que $\varphi_{u}(q)$ y $\varphi_{v}(q)$ son base y despues usando linealidad).
>>3. Debemos ver entonces que $$ \langle dn_p(\varphi_u(q)), \varphi_v(q) \rangle = \langle \varphi_u(q), dn_p(\varphi_v(q)) \rangle, \quad (1) $$o lo que es lo mismo $$ \left\langle (n \circ \varphi)_{u}(q), \varphi_v(q) \right\rangle = \left\langle \varphi_u(q), ( n \circ \varphi)_{v}(q) \right\rangle. $$
>>4. Por otro lado, sabemos que para todo $u,v$ vale$$ \langle\varphi_u(u,v) , n(\varphi(u,v)) \rangle = 0, \quad (2) $$$$ \langle n(\varphi(u,v)), \varphi_v(u,v) \rangle = 0. \quad (3) $$ Por que $\varphi_{x}$ y $\varphi_{y}$ generan el plano tangente  
>>5. Derivamos miembro a miembro la expresión (2) con respecto a $v$ y evaluando en $q$ y obtenemos $$ \langle  \varphi_{uv}(q),n(q) \rangle+\left \langle \varphi_u(q), (n \circ \varphi)_{v}(q) \right\rangle  = 0. $$Análogamente, derivamos (3) con respecto a $u$ y evaluamos en $q$: $$ \left\langle (n \circ \varphi)_{u}, \varphi_v(q) \right\rangle + \langle n(q), \varphi_{vu}(q) \rangle = 0. $$
>>6. Restamos miembro a miembro y como las derivadas cruzadas $\varphi_{uv}$ y $\varphi_{vy}$ son iguales, resulta que (1) es verdadera, como queríamos. $\square$

>[!Definition] Curvatura Gaussiana y Media
>Los vectores $X$ y $Y$ se llaman **direcciones principales** en $p$ y $k_1, k_2$ se denominan **curvaturas principales** en $p$.
>Las **curvaturas gaussiana** y **media** de $M$ en $p$ son, respectivamente,
>$$ K(p) = k_1 k_2 \quad \text{y} \quad H(p) = \frac{1}{2} (k_1 + k_2). $$

>[!Definition] Vector asintótico
>Un vector $Z \neq 0$ en $T_pM$ que satisface $\langle A_p(Z), Z \rangle = 0$ se dice un **vector asintótico** en $p$

>[!Example] Calculando alguna curvatura media y Gaussiana 
>Sea $M$ la silla de montar, gráfico de la función $f : \mathbb{R}^2 \to \mathbb{R}$ dada por $f(x, y) = x^2 - 3y^2$ y sea $p = (0, 0, 0)$. Hallar direccion asintotica, curvatura gaussiana y curvatura media en $p$
>>[!Proof]-
>>1. Sea $\varphi : \mathbb{R}^2 \to M$ el sistema coordenado definido por $\varphi(x, y) = (x, y, x^2 - 3y^2)$ y sea $n : M \to S^2$ la orientación $$ n(\varphi(x, y)) = \frac{(\varphi_x \times \varphi_y)(x, y)}{\|(\varphi_x \times \varphi_y)(x, y)\|} = \frac{(1, 0, 2x) \times (0, 1, -6y)}{\|(1, 0, 2x) \times (0, 1, -6y)\|} = \frac{(-2x, 6y, 1)}{\sqrt{4x^2 + 36y^2 + 1}}. $$
>>2. Tenemos que $$ T_pM = \text{span } \{\varphi_x(0, 0), \varphi_y(0, 0)\} = \text{span } \{(1, 0, 0), (0, 1, 0)\} = \mathbb{R}^2 \times \{0\}. $$
>>3. Calculamos $$\begin{align} dn_p(e_1) & = dn_p(\varphi_x(0, 0)) \\&= dn_p \left( \frac{d}{dx}\Big|_0 \varphi(x, 0) \right) \\&= \frac{d}{dx}\Big|_0 n(\varphi(x, 0))  \\&= \frac{d}{dx}\Big|_0 (4x^2 +  1)^{-1/2} (-2x, 0, 1) \\&= \dots \\&= -2e_1. \end{align}$$
>>4. De la misma manera, $dn_p(e_2) = 6e_2$.
>>5. Así, $A_p(e_1) = 2e_1$ y $A_p(e_2) = -6e_2$. Luego, $e_1$ y $e_2$ son direcciones principales de $M$ en $p$ y las curvaturas principales son $k_1 = 2$ y $k_2 = -6$. 
>>6. De allí, $$ K(p) = -12 \quad \text{y} \quad H(p) = -2. $$
>>7. Veamos ahora si existen vectores asintóticos $Z$ en $p$. Escribimos $Z = ae_1 + be_2$ y planteamos $$\begin{align} 0 & = \langle A_{p}(Z), Z \rangle\\& = \langle A_{p}(ae_1 + be_2), ae_1 + be_2 \rangle \\&= \langle aA_{p}(e_1) + bA_{p}(e_2), ae_1 + be_2 \rangle \quad (\text{Paso }5.)\\& = \langle 2ae_1 - 6be_2, ae_1 + be_2 \rangle = 2a^2 - 6b^2\end{align} $$que vale si y solo si $2a^2 = 6b^2$, o equivalentemente, $|a| = \sqrt{3}|b|$. 
>>8. Luego los cuatro vectores $$ Z = \pm \sqrt{3} e_1 \pm e_2 $$y sus múltiplos no nulos son exactamente los vectores asintóticos para $M$ en $p$.

^d6595a

>[!Remark]- Intepretacion de $X,Y$ como maxima curvatura
>Las direcciones $X$ y $Y$ son aquellas donde la superficie más se curva (respectivamente, menos se curva) cerca de $p$.
>En la dirección de los vectores asintóticos en $p$ es donde, a nivel infinitesimal, la superficie corta al plano tangente afín en $p$.

>[!Remark]- Interesante
>Si $K(p) \le 0$, o sea si $k_1, k_2$ tienen distintos signo o alguno vale cero, entonces necesariamente existen vectores asintóticos de $M$ en $p$. Se justifica con un cálculo análogo a (14) en [[Definiciones#^d6595a]], poniendo $k_1$ y $k_2$ en vez de $2$ y $-6$.
>De la misma manera se muestra que no hay vectores asintóticos en $p$ si $K(p) > 0$.
>En el práctico se ve que las direcciones principales son bisectrices de las asintóticas.

>[!Exercise]- Se puede tomar orientacion con signo menos
>Si se considera la orientación $\bar{n} = -n$ en vez de $n$, resultan
>$$ \bar{k}_1 = -k_2, \quad \bar{k}_2 = -k_1, \quad \bar{K} = K \quad \text{y} \quad \bar{H} = -H. $$

>[!Definition] Clasificación de puntos
>Sea $M$ una superficie. Un punto $p \in M$ se dice
>- **elíptico** si $K(p) > 0$ (cuenco)
>- **hiperbólico** si $K(p) < 0$ (silla de montar)
>- **parabólico** si una de las curvaturas principales es cero y la otra no (canaleta)
>- **planar** si $k_1 = k_2 = 0$.
>
>El punto $p$ se dice **umbílico** si $k_1 = k_2$ (es planar o un caso especial de punto elíptico).

>[!Remark]-
>El gráfico de la función $x^4 + y^4$ parece un cuenco cerca del origen, pero se ve en el práctico que este es un punto planar de la superficie, pues la curvatura detecta el segundo orden.

>[!Definition] Línea de curvatura y asintótica
>Una curva regular $\alpha$ en una superficie $M$ se llama **línea de curvatura** de $M$ si para todo $t$ se cumple que $\alpha'(t)$ es un múltiplo de una dirección principal en $\alpha(t)$, y se llama **línea asintótica** de $M$ si $\alpha'(t)$ es un vector tangente asintótico en $\alpha(t)$, para todo $t$.

>[!Remark]-
>En el práctico se ve que los paralelos y los meridianos de una superficie de revolución son líneas de curvatura.

>[!Example] Linea de curvatura y asintotica del cilindro
>Sea $C$ el cilindro $\{(x, y, z) \mid x^2 + y^2 = r^2\}$ y sea $\varphi(s, t) = (r \cos s, r \sin s, t)$. Calculemos su linea de curvatura y asintotica y curvaturas media y Gaussiana
>>[!Proof]-
>>1. **Direcciones Principales** Calculamos $$ \varphi_s(s, t) = (-r \sin s, r \cos s, 0) \quad \text{y} \quad \varphi_t(s, t) = (0, 0, 1). $$
>>2. La orientación $\varphi$ está bien definida por $$ n(\varphi(s, t)) = \frac{(\varphi_s \times \varphi_t)(s, t)}{\|(\varphi_s \times \varphi_t)(s, t)\|} = \frac{(r \cos s, r \sin s, 0)}{r} = (\cos s, \sin s, 0). $$
>>3. Calculamos $$ \begin{align} A_{\varphi(s, t)}(\varphi_s(s, t)) & = -dn_{\varphi(s, t)}(\varphi_s(s, t))\\& = -(n \circ \varphi)_s(s, t) \\ &= -(-\sin s, \cos s, 0) \\&= (\sin s, -\cos s, 0) \\& = -\frac{1}{r} \varphi_s(s, t).\end{align} $$
>>4. De la misma forma obtenemos $$ A_{\varphi(s, t)}(\varphi_t(s, t)) = 0. $$
>>5. De esa información concluimos que $\frac{1}{r} \varphi_s(s, t)$ y $\varphi_t(s, t)$ son direcciones principales 
>>6. **Curvaturas principales, media y Gaussiana:** $$ k_1 \equiv 0, \quad k_2 \equiv -\frac{1}{r}, \quad K \equiv 0, \quad H \equiv -\frac{1}{2r}, $$
>>7. Ademas podemos concluir que las curvas coordenadas ($\varphi(s_{0},t)$ y $\varphi(s,t_{0})$) son líneas de curvatura. 
>>8. Y por otro las curva $t \mapsto \varphi(s_o, t)$ tambien es una línea asintótica para todo $s_o$.

>[!Example] Linea de curvatura y asintotica del toro
>Sea $M$ el toro $T(R, r)$ parametrizado por
>$$ \varphi(s, t) = ((R + r \cos t)(\cos s, \sin s), r \sin t) $$
>(con $0 < r < R$) y sea $\alpha : \mathbb{R} \to M$ el paralelo superior,
>$$ \alpha(s) = \varphi(s, \pi/2) = (R(\cos s, \sin s), r). $$
>Entonces $\alpha$ es una línea de curvatura y también línea asintótica de $M$.
>>[!Proof]-
>>1. Sea $n : M \to \mathbb{R}^3$, $$ n(\varphi(s, t)) = \frac{\varphi_s(s, t) \times \varphi_t(s, t)}{\|\varphi_s(s, t) \times \varphi_t(s, t)\|}, $$que vimos que está bien definido pues $M$ es una superficie de revolución. (Hay que calcularla explicitamente)
>>2. Tenemos que $$ n(\alpha(s)) = n(\varphi(s, \pi/2)) = (0, 0, 1) $$para todo $s$. 
>>3. Luego, $$ A_{\alpha(s)}(\alpha'(s)) = -dn_{\alpha(s)}(\alpha'(s)) = -\frac{d}{ds}(n \circ \alpha)(s) = -\frac{d}{ds}(0, 0, 1) = 0. $$
>>4. Como $\|\alpha'(s)\| = \|(R(-\sin s, \cos s), 0)\| = R$. Entonces $\alpha'(s)/R$ es una dirección principal de $M$ en el punto $\alpha(s)$ y por lo tanto $\alpha$ es una línea de curvatura.
>>5. Calculamos $\langle A_{\alpha(s)}(\alpha'(s)), \alpha'(s) \rangle = 0$ y en consecuencia $\alpha'(s)$ es un vector asintótico en $\alpha(s)$ y así, $\alpha$ es una línea asintótica.
>>6. Notemos que una de las curvaturas principales en $\alpha(s)$ es cero, lo cual implica que la curvatura gaussiana se anula en $\alpha(s)$: $K(\alpha(s)) = 0$ para todo $s$.

>[!Remark]- Repaso Lineal
>Antes de seguir necesitamos repasar ciertas nociones de Álgebra Lineal.
>Sea $T : V \to V$ una transformación lineal de un espacio vectorial $V$ **en sí mismo** (no es necesario que $V$ tenga un producto interno). Se definen $$ \det(T) = \det(A) \quad \text{y} \quad \text{tr}(T) = \text{tr}(A), $$donde $A = [T]_{\mathcal{B}}$ para cualquier base $\mathcal{B}$ de $V$. La definición es buena, porque si $\bar{\mathcal{B}}$ es otra base de $V$, se tiene que $$ [T]_{\bar{\mathcal{B}}} = P [T]_{\mathcal{B}} P^{-1} $$para cierta matriz invertible $P$ (la matriz de cambio de base) y además para todo par de matrices $X$ e $Y$ vale$$ \det(XY) = \det(X) \det(Y) \quad \text{y} \quad \text{tr}(XY) = \text{tr}(YX). $$

>[!Proposition]
>Sea $A_p$ el operador de forma de una superficie $M$ en el punto $p$. Entonces
>$$ K(p) = \det(A_p) \quad \text{y} \quad H(p) = \frac{1}{2} \text{tr}(A_p). $$
>>[!Proof]-
>>7. Sean $k_1$ y $k_2$ las curvaturas principales y $X, Y$ las direcciones principales en $p$. Tenemos que $$ K(p) = k_1 k_2 = \det \begin{pmatrix} k_1 & 0 \\ 0 & k_2 \end{pmatrix} = \det([A_p]_{\{X, Y\}}) = \det(A_p). $$
>>8. La justificación de la afirmación para $H$ es similar y se deja como ejercicio.

>[!Corollary]- Se puede hallar $K,H$ sin diagonalizar 
>La proposición permite a veces obtener $K(p)$ y $H(p)$ sin necesidad de hallar previamente las direcciones y las curvaturas principales en $p$. Por ejemplo, si $\varphi : U \to M$ es un sistema coordenado con $p \in \varphi(q)$, podemos calcular
>$$ [dn_p]_{\{\varphi_u(q), \varphi_v(q)\}} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}. $$
>(Notar $det(-A)=det(A)$ si $A \in \mathbb{R}^{n \times n}$ con $n$ par, con lo cual $det(A_{p})=det(-dn_{p})=det(dn_{p})$). En ese caso tendremos $K(p) = ad - cb$  y $H(p) = -\frac{1}{2}(a + d)$

# La curvatura normal

>[!Remark]-
>Ahora nos preguntamos cuánto se curva una superficie en una dirección $v \in T_pM$, no necesariamente principal. En lo que sigue en $M$ tendremos una orientación $n : M \to S^2$ fija.

>[!Definition] Curvatura normal
>Sea $M$ una superficie regular y sea $\alpha : (-\varepsilon, \varepsilon) \to M$ una curva suave de rapidez unitaria con $\alpha(0) = p$. Se define la **curvatura normal** de $\alpha$ en $M$ en $p$ como la componente de la aceleración de $\alpha$ en cero según $n(p)$, o sea,
>$$ \langle \alpha''(0), n(p) \rangle. $$

>[!Proposition] Direccion asintotica y curvatura normal
>Se cumple que
>$$ \langle \alpha''(0), n(p) \rangle = \langle A_p(\alpha'(0)), \alpha'(0) \rangle. $$
>>[!Proof]-
>>1. Como la curva $\alpha$ está en $M$, su velocidad es tangente, o sea $$ \langle \alpha'(s), n(\alpha(s)) \rangle = 0 $$para todo $s$. 
>>2. Derivando miembro a miembro y evaluando en $s = 0$ obtenemos $$ \langle \alpha''(0), n(\alpha(0)) \rangle + \langle \alpha'(0), (n \circ \alpha)'(0) \rangle = 0 $$para todo $s$, o equivalentemente $$ \langle \alpha''(0), n(p) \rangle = - \langle \alpha'(0), dn_p(\alpha'(0)) \rangle = \langle \alpha'(0), A_p(\alpha'(0)) \rangle, $$como queríamos.

^9c84b1

^852d07

>[!Remark]-
>Estas dos afirmaciones se podrian escribir mas general
>$$k_{n,p_{0}}=\langle\alpha ''(t_{0}),n(p_{0})\rangle$$
>Donde $\alpha (t_{0})=p_{0}$
>Y por lo tanto $$k_{n,p_{0}}=\langle A_{p_{0}}(\alpha '(t_{0})),\alpha '(t_{0})\rangle$$     

>[!Remark]- Curvatuar normal no depende de curva utilizada
>Dado un vector unitario $v \in T_pM$, todas las curvas $\beta$ en $M$ con rapidez unitaria tales que $\beta(0) = p$ y $\beta'(0) = v$ tienen la misma curvatura normal en $p$.

>[!Definition] Curvatura normal en una dirección
>Dado un vector unitario $v \in T_pM$, la **curvatura normal** de $M$ en la **dirección** $v$ es
>$$ \kappa_{n, p}(v) = \langle A_p v, v \rangle. $$

>[!Proposition]
>Ninguna curva $\alpha$ en $M$ de rapidez unitaria con $\alpha(0) = p$ y $\alpha'(0) = v$ se curva menos que $|\kappa_{n,p}(v)|$.
>>[!Proof]-
>>1. Sea $\kappa_\alpha$ la curvatura de la curva $\alpha$. Por la desigualdad de Cauchy-Schwarz tenemos que
>>$$ \kappa_\alpha(0) =\lVert \alpha ''(0) \rVert = \|\alpha''(0)\| \lVert n(p) \rVert \ge |\langle \alpha''(0), n(p) \rangle| = |\kappa_{n,p}(v)|. $$

>[!Proposition]
>Si la trayectoria de la recta $\alpha(t) = p + tu$ (con $\|u\| = 1$) está contenida en una superficie $M$, entonces $\alpha$ es una línea asintótica de $M$.
>>[!Proof]-
>>2. Debemos verificar que $\alpha'(t)$ es una dirección asintótica en $T_{\alpha(t)}M$, para todo $t$. 
>>3. Ahora usando [[Definiciones#^852d07]] $$ \langle A_{\alpha(t)}\alpha'(t), \alpha'(t) \rangle = \langle \alpha''(t), n(\alpha(t)) \rangle = \langle 0,n(\alpha (t))\rangle= 0 $$

>[!Example]- Linea asintotica en el cilindro
>En el cilindro la recta vertical seria $\alpha (t)=(1,0,0)+t(0,0,1)$  

>[!Remark]-
>En la siguiente proposición vemos la **fórmula de Euler**, que da las curvaturas normales en coordenadas polares del plano tangente.

>[!Proposition] Fórmula de Euler
>Sean $X, Y$ direcciones principales en un punto $p$ de una superficie $M$, y sean $k_1, k_2$ las correspondientes curvaturas principales en $p$. Entonces
>$$ \kappa_{n, p}(\cos \theta X + \sin \theta Y) = k_1 \cos^2 \theta + k_2 \sin^2 \theta \quad (18) $$
>para todo $\theta \in \mathbb{R}$.
>Mas aun $$k_{n,p}(aX+bY)=k_{1}a^{2}+k_{2}b^{2}$$  
>>[!Proof]-
>>4. El miembro izquierdo es por definición $$ \langle A_p(\cos \theta X + \sin \theta Y), \cos \theta X + \sin \theta Y \rangle = \langle \cos \theta k_1 X + \sin \theta k_2 Y, \cos \theta X + \sin \theta Y \rangle, $$ que coincide con el segundo miembro de (18) pues $\{X, Y\}$ es una base ortonormal.

^b7dfa0

>[!Corollary] Curvaturas principales son normales
>Se cumple que $\kappa_{n, p}(X) = k_1$, $\kappa_{n, p}(Y) = k_2$ y
>$$ k_2 \le \kappa_{n, p}(\cos \theta X + \sin \theta Y) \le k_1 $$
>para todo $\theta$.
>Esto provee una justificación a un enunciado informal anterior que afirmaba que las direcciones principales son aquellas partiendo de $p$ donde la superficie más se curva y menos se curva.
>>[!Proof]-
>>1. Por definicion $k_{2}\leq k_{1}$ entonces: $$k_{2}=k_{2}\cos^{2}\theta+k_{2}\sin^{2}\theta\leq k_{1}\cos^{2}\theta+k_{2}\sin^{2}\theta\leq k_{1}\cos^{2}\theta+k_{1}\sin^{2}\theta=k_{1}$$ 

^c069c2

>[!Remark]-
>¿Habrá alguna curva como en la proposición cuya curvatura sea exactamente $|\kappa_{n,p}(v)|$? Antes de responder a la pregunta, presentamos la siguiente proposición.

>[!Proposition] Repasar bien
>Sea $M$ una superficie con una orientación $n$. Sean $p \in M$ y $v \in T_pM$ con $\|v\| = 1$ y sea $P$ el plano normal a $M$ por $p$ en la dirección $v\in T_{p}S$, o sea,
>$$ P = \{q \in \mathbb{R}^3 \mid \langle q - p, n(p) \times v \rangle = 0\}. $$
>Entonces existe una curva $\beta : (-\varepsilon, \varepsilon) \to M$ con $\beta(0) = p$ y su trayectoria contenida en $P \cap M$.
>>[!Proof]-
>>1. Sea $\varphi : U \to M$ un sistema coordenado con $\varphi(0, 0) = p$. Llamamos $$ f : U \to \mathbb{R}, \quad f(u, v) = \langle \varphi(u, v) - p, n(p) \times v \rangle. $$
>>2. Se cumple que $f(0, 0) = 0$ y que $$ f(u, v) = 0 \quad \text{si y solo si} \quad \varphi(u, v) \in M \cap P, \quad (19) $$
>>3. Así que nos interesa el conjunto de nivel cero de $f$ cerca de $(0, 0)$. Veremos que es una curva, usando el Teorema de la Función Implícita. Basta mostrar que $0$ es un valor regular de $f$ cerca de $(0, 0)$. 
>>4. Calculamos $$ f_u(0, 0) = \langle \varphi_u(0, 0), n(p) \times v \rangle \quad \text{y} \quad f_v(0, 0) = \langle \varphi_v(0, 0), n(p) \times v \rangle. $$
>>5. Como $\varphi_u(0, 0)$ y $\varphi_v(0, 0)$ forman una base de $T_pM$, alguno de ellos no es ortogonal a $n(p) \times v \in T_pM$ (verificarlo como ejercicio). Si los dos los fueran $n(p)\times v\in (T_{p}M)^{\perp}$ 
>>6. Supongamos que se trata del segundo (si no, se procede de manera análoga). Entonces $f_v(0, 0) \neq 0$. Por el Teorema de la Función Implícita, existe $h : (-\varepsilon, \varepsilon) \to \mathbb{R}$ con $h(0) = 0$ tal que $f(t, h(t)) = 0$ para todo $t$. 
>>7. Equivalentemente, por (19), $\varphi(t, h(t)) \in M \cap P$ para todo $t$. Entonces $\beta(t) = \varphi(t, h(t))$ cumple las condiciones requeridas.
>
>>[!Resumen]-
>>8. Definir $f(u,v)=\langle \varphi(u,v)-p,n(p)\times v\rangle$ con $\varphi(0,0)=p$  
>>9. Como $\varphi_u(0, 0)$ y $\varphi_v(0, 0)$ forman una base de $T_pM$ alguna de estas 2 no es nula  $$ f_u(0, 0) = \langle \varphi_u(0, 0), n(p) \times v \rangle \quad \text{y} \quad f_v(0, 0) = \langle \varphi_v(0, 0), n(p) \times v \rangle. $$
>>10. Spd $f_{v}(0,0)\neq 0$ por Teo Func Implcita existe $h : (-\varepsilon, \varepsilon) \to \mathbb{R}$ con $h(0) = 0$ tal que $f(t, h(t)) = 0$ para todo $t$ osea $\varphi(t,h(t))\in M\cap P$ osae $\beta(t)=\varphi(t,h(t))$ cumple 

>[!Proposition] Repasar bien
>Sea $\beta$ la curva de la proposición anterior. Entonces
>$$ \kappa_\beta(0) = |\kappa_{n,p}(v)|. $$
>>[!Proof]-
>>11. Sea $\alpha$ la reparametrización por longitud de arco de $\beta$ (existe pues $\beta$ es regular; verificarlo). Por definición, $\kappa_\beta(0) = \kappa_\alpha(0)$.
>>12. Como $\alpha$ y $\beta$ tienen la misma trayectoria, se cumple que $$ \langle \alpha(s) - p, n(p) \times v \rangle = 0 $$para todo $s$. 
>>13. Derivando dos veces y evaluando cada vez en $s = 0$ tenemos $$ \langle \alpha'(0), n(p) \times v \rangle = 0, \quad (20) $$$$ \langle \alpha''(0), n(p) \times v \rangle = 0. \quad (21) $$
>>14. Con $\alpha'(0) \perp n(p)$ y (20) tenemos que $\alpha '(0)$ esta en la direccion de $v$, como $\|\alpha'(0)\| = 1$ resulta que $\alpha'(0) = \pm v$. (Recordemos por definicion $\lVert v \rVert=1$)  
>>15. Suponemos que $\alpha'(0) = v$ (si no, consideramos $\bar{\alpha}(s) = \alpha(-s)$).
>>16. Por otra parte, como $\|\alpha'(s)\|^2 = 1$ para todo $s$ (por ser reparametrizacion [[Definiciones#^f2ee92]]), tenemos que $$ 0 = \langle \alpha''(0), \alpha'(0) \rangle = \langle \alpha''(0), v \rangle. $$
>>17. Entonces, por (21), $\alpha''(0)$ es un múltiplo de $n(p)$ y por lo tanto $$ \alpha''(0) = \langle \alpha''(0), n(p) \rangle n(p). $$
>>18. Así, como $n(p)$ es unitario $$\kappa_{\beta }(0)= \kappa_\alpha(0) = \|\alpha''(0)\| = \|\langle \alpha''(0), n(p) \rangle n(p)\| = |\langle \alpha''(0), n(p) \rangle| \|n(p)\| = |\kappa_{n,p}(v)|, $$como deseábamos.
>
>>[!Resumen]-
>>19. $\alpha$ reparam de $\beta$ entonces por definición, $\kappa_\beta(0) = \kappa_\alpha(0)$
>>20. Ademas misma trayectoria entonces $\langle \alpha(s) - p, n(p) \times v \rangle = 0$
>>21. Derivamos una y dos veces $\langle \alpha'(0), n(p) \times v \rangle = 0$ y $\langle \alpha''(0), n(p) \times v \rangle = 0$
>>22. Como $\alpha'(0) \perp n(p)$ y $\|\alpha'(0)\| = 1$, resulta que $\alpha'(0) = \pm v$. Suponemos que $\alpha'(0) = v$ (si no, consideramos $\bar{\alpha}(s) = \alpha(-s)$).
>>23. $\|\alpha'(s)\|^2 = 1$ para todo $s$ (por ser reparametrizacion) entonces $0 = \langle \alpha''(0), \alpha'(0) \rangle = \langle \alpha''(0), v \rangle$ luego $\alpha ''(0)$ es multiplo de $n(p)$ osea $\alpha''(0) = \langle \alpha''(0), n(p) \rangle n(p)$
>>24. Como $n(p)$ es unitario $$\kappa_{\beta }(0)= \kappa_\alpha(0) = \|\alpha''(0)\| = \|\langle \alpha''(0), n(p) \rangle n(p)\| = |\langle \alpha''(0), n(p) \rangle| \|n(p)\| = |\kappa_{n,p}(v)|, $$  

>[!Remark]- 
>Esta ultima proposicion se puede verifica conceptualmente con la esfera. Si agarramos un plano normal a $S$ en $p$ en la direccion de alguna derivada entonces la interseccion de dicho plano con $S$ va a ser un circulo mayor (geodesica) por lo tanto su curvatura geodesica en $p$ es $0$ y por lo tanto su curvatura normal seria igual a su curvatura euclidea
# Caracterización de las superficies umbílicas conexas

>[!Remark]- Punto umbilico
>Sea $p$ un punto en una superficie $M$. Recordamos que $p$ se dice **umbílico** si la curvaturas principales de $M$ en $p$ coinciden ($k_1 = k_2 := k_o$). 
>En particular, el operador de forma de $M$ en $p$ es $k$ veces la identidad: Para todo $Z \in T_pM$ se cumple que $$ A_p(Z) = k_o Z. $$
>Equivalentemente, todo vector unitario de $T_pM$ es una dirección principal. También, para cualquier base $\mathcal{B}$ de $T_pM$ vale $$ [A_p]_{\mathcal{B}} = \begin{pmatrix} k_o & 0 \\ 0 & k_o \end{pmatrix}. $$
>Para no arrastrar el signo en argumentos posteriores escribimos $k = -k_o$ y así tenemos para todo $Z$ que $$ dn_p(Z) = kZ. $$

>[!Theorem]
>Si todos los puntos de una superficie conexa $M$ son umbílicos, entonces $M$ está contenida en una esfera o en un plano.
>>[!Proof]-
>>1. Recordemos primero que si $U$ es un subconjunto abierto **conexo** de $\mathbb{R}^2$ y $f : U \to \mathbb{R}^m$ satisface $f_u = f_v = 0$, entonces $f$ es constante.
>>- **Primer paso.** La curvatura principal $k$ en cada abierto coordenado **conexo** es constante.
>>	1. Sabemos por hipótesis que $dn_q(Z) = k(q)Z$ para todo $Z \in T_qM$.
>>	2. Sea $\varphi : U \to M$ un sistema coordenado de $M$ con $U$ conexo. Calculamos $$ (n \circ \varphi)_u(u, v) = dn_{\varphi(u, v)}(\varphi_u(u, v)) = k(\varphi(u, v))\varphi_u(u, v) = \lambda(u, v)\varphi_u(u, v), \quad (22) $$$$ (n \circ \varphi)_v(u, v) = dn_{\varphi(u, v)}(\varphi_v(u, v)) = k(\varphi(u, v))\varphi_v(u, v) = \lambda(u, v)\varphi_v(u, v) \quad (23) $$(hemos definido $\lambda = k \circ \varphi$). 
>>	3. Derivamos (22) con respecto a $v$ y (23) con respecto a $u$ y obtenemos $$ (n \circ \varphi)_{uv} = \lambda_v \varphi_u + \lambda \varphi_{uv} \quad \text{y} \quad (n \circ \varphi)_{vu} = \lambda_u \varphi_v + \lambda \varphi_{vu} $$(se deja como ejercicio mostrar que $\lambda$ es suave).
>>	4. Ahora restamos miembro a miembro, y como las derivadas cruzadas son iguales tenemos que $$ 0 = \lambda_v \varphi_u - \lambda_u \varphi_v, $$lo que implica que $\lambda_u = \lambda_v = 0$, ya que $\{\varphi_u(u, v), \varphi_v(u, v)\}$ es base de $T_{\varphi(u, v)}M$. 
>>	5. Luego $\nabla \lambda = 0$ y como $U$ es conexo resulta $\lambda$ constante y por lo tanto $k$ es constante en $\varphi(U)$.
>>- **Segundo paso.** Cualquier abierto coordenado conexo está contenido en un plano o en una esfera.
>>	- **Caso $\lambda = 0$.** Tenemos $(n \circ \varphi)_u = 0 = (n \circ \varphi)_v$. Luego $N := n \circ \varphi$ es constante en $U$. 
>>		1. Sea $p \in \varphi(U)$, digamos $p = \varphi(u_o, v_o)$. Veamos que $\varphi(U)$ está contenido en el plano $P = \{q \in \mathbb{R}^3 \mid \langle q - p, N \rangle = 0\}$.
>>		2. Llamando $f(u, v) = \langle \varphi(u, v) - p, N \rangle$, queremos que $f$ sea constante igual a cero. 
>>		3. Calculamos $$ f_u = \langle \varphi_u, N \rangle = \langle \varphi_u, n \circ \varphi \rangle = 0, $$pues $\varphi_u(u, v) \in T_{\varphi(u, v)}M \perp n(\varphi(u, v))$. 
>>		4. De la misma manera, $f_v = 0$. Luego $f$ es constante, pues $U$ es conexo. 
>>		5. Como $f(u_o, v_o) = \langle p - p, n(p) \rangle = 0$, resulta $f = 0$.
>>	- **Caso $\lambda \neq 0$.** Queremos que mostrar que $\varphi(U)$ está contenida en una esfera.
>>		1. Veamos que la aplicación $$ C : U \to \mathbb{R}^3, \quad C(u, v) = \varphi(u, v) - \frac{1}{\lambda} n(\varphi(u, v)) $$es constante (y será el centro de la esfera). 
>>		2. Derivamos $$ C_u(u, v) = \varphi_u(u, v) - \frac{1}{\lambda} dn_{\varphi(u, v)}(\varphi_u(u, v)) = \varphi_u(u, v) - \frac{1}{\lambda} \lambda \varphi_u(u, v) = 0, $$y análogamente, $C_v = 0$. 
>>		3. Como $U$ es conexo, $C$ es constante, digamos, $C = C_o$.
>>		4. Para ver $\varphi(U)$ está en una esfera centrada en $C_o$, basta que todos los puntos de $\varphi(U)$ estén a la misma distancia de $C_o$, o equivalentemente, que la función $$ g : U \to \mathbb{R}, \quad g(u, v) = \|\varphi(u, v) - C_o\|^2 $$es constante. La verificación de este hecho se deja como ejercicio.
>>- **Tercer paso.** La superficie entera $M$ está contenida en una esfera o en un plano. Lo hacemos solo para el caso $k = 0$.
>>	1. Sea $p \in M$ y sea $\varphi : U \to M$ un sistema coordenado con $U$ conexo y $p \in \varphi(U)$. 
>>	2. Por el **Segundo paso**, $\varphi(U)$ está en un plano, digamos en $P = \{p' \in \mathbb{R}^3 \mid \langle p' - p, N \rangle = 0\}$. 
>>	3. El objetivo es probar que $M \subset P$. Dado $q \in M$, debemos mostrar que $q \in P$.
>>	4. Como $M$ es conexa, existe una curva $\alpha : [0, 1] \to M$ suave a trozos tal que $\alpha(0) = p$ y $\alpha(1) = q$. 
>>	5. Sean $$ A = \{t \in [0, 1] \mid \alpha(s) \in P \text{ y } (T_{\alpha(s)}M) \perp N \text{ para todo } s \in [0, t]\} \quad \text{y} \quad \tau = \sup A. $$(el conjunto $A$ es no vacío pues $0 \in A$ por que el plano tangete a un punto en un plano es el mismo plano). 
>>	6. Comentario: Avanzamos por $\alpha$ mientras la curva se mantenga en el plano $P$ y $N$ sea normal a la superficie. Esta última condición es motivada por el ejemplo de la curva $\beta : \mathbb{R} \to \mathbb{R}^3$ definida por $\beta(t) = (t, t^4, 0)$ si $t \ge 0$ y $\beta(t) = (t, 0, t^4)$ si $t < 0$, que es suave, pero cambia abruptamente de plano en $t = 0$ (notar que la torsión en $t = 0$ no está definida, ya que allí la curvatura es cero).
>>	7. Veamos que primero que $\alpha(\tau) \in P$. En efecto, $$ \langle \alpha(\tau) - p, N \rangle = \lim_{t \to \tau^-} \langle \alpha(t) - p, N \rangle = \lim_{t \to \tau^-} 0 = 0. $$
>>	8. Así, si $\tau = 1$ tenemos que $q = \alpha(1) \in P$, como queríamos.
>>	9. Ahora suponemos que $\tau < 1$ y llegaremos a una contradicción. 
>>	10. Por el paso 2 existe un sistema coordenado $\psi : V \to M$ con $V$ conexo tal que $\alpha(\tau) \in \psi(V)$ y $\psi(V)$ está contenido en un plano, digamos $Q$.
>>	11. Existe $\varepsilon > 0$ tal que $\alpha(t) = \psi(x(t), y(t))$ para todo $t \in (\tau - \varepsilon, \tau + \varepsilon)$. Si $\tau - \varepsilon < s < \tau$, (por definicion de supremo) se cumple que $$ N \perp T_{\alpha(s)}M = \text{span } \{\psi_x(x(s), y(s)), \psi_y(x(s), y(s))\} = T_{\alpha (s)}Q $$ (esto ultimo vale por que $\psi(V)$ es una superficie planar media en el plano $Q$, por lo tanto el plano tangente de cualquier punto va a ser un mismo plano tangente con la misma normal que $Q$)  
>>	12. Luego como por definicion $P \perp N$ y ademas $P$ y $Q$ comparten el punto $\alpha(\tau)$, resulta que $Q = P$. 
>>	13. En consecuencia, $\alpha(t) \in P$ y $(T_{\alpha(t)}M) \perp N$ para todo $t \in (\tau - \varepsilon, \tau + \varepsilon)$, lo que contradice que $\tau$ es el supremo de $A$
>
>>[!Resumen]-
>>- **1era Parte** La curvatura principal $k$ es constante
>>	1. Por ser umblico $dn_{q}(Z)=k_{q}Z$
>>	2. Entonces $(n \circ \varphi)_u(u, v) = dn_{\varphi(u, v)}(\varphi_u(u, v)) = k(\varphi(u, v))\varphi_u(u, v) = \lambda(u, v)\varphi_u(u, v)$ analogo $(n\circ\varphi)_{v}(u,v)$ 
>>	3. Derivamos cruzado $$ (n \circ \varphi)_{uv} = \lambda_v \varphi_u + \lambda \varphi_{uv} \quad \text{y} \quad (n \circ \varphi)_{vu} = \lambda_u \varphi_v + \lambda \varphi_{vu} $$ restamos ambas $0 = \lambda_v \varphi_u - \lambda_u \varphi_v$ 
>>	4. Por ser base $\lambda_{v}=\lambda_{u}=0$, por ser $U$ conexo $\lambda=k(\varphi(u,v))$ es constante. Osea $k$ es constante en cualquier abierto coordenado conexo  
>>- **2da Parte** Abierto coordenado conexo esta contenido en plano o esfera
>>	- **Caso $\lambda=0$** 
>>		1. Entonces tenemos $(n \circ \varphi)_u = 0 = (n \circ \varphi)_v$ que son las columnas de $dn_{p}$. Luego $N := n \circ \varphi$ es constante en $U$ conexo. 
>>		2. Sea $f(u,v)=\langle \varphi(u,v)-\varphi(u_{0},v_{0}),N\rangle$ entonces $f_{u}=0=f_{v}$
>>		3. Luego $f$ cte y obvio $f(\varphi(u_{0},v_{0}))=0$ entonces $f\equiv 0$ 
>>	- **Caso $\lambda\neq0$**
>>		1. Veamos $C : U \to \mathbb{R}^3, \quad C(u, v) = \varphi(u, v) - \frac{1}{k} n(\varphi(u, v))$ es constante
>>		2. $C_u(u, v) = \varphi_u(u, v) - \frac{1}{k} dn_{\varphi(u, v)}(\varphi_u(u, v)) = \varphi_u(u, v) - \frac{1}{k} k \varphi_u(u, v) = 0$ analogo $C_{v}$ entonces $C$ 
>>		3. AHora $\lVert \varphi(u,v) - C(u,v) \rVert=\frac{1}{k}$ pero como $C$ constante, seria el centro de la esfera de radio $\frac{1}{k}$
>>- **3era Parte** La superficie entera esta en un plano o esfera
>>	1. Sea $\varphi(U)$ abierto coordenado conexo cualquiera y $p \in \varphi(U)$ cualquiera. Por **2da Parte** $\varphi(U)\subseteq P = \{x \in \mathbb{R}^3 \mid \langle x - \varphi(u_{0}), N \rangle = 0\}$ 
>>	2. Como $M$ es conexa, luego existe $\alpha : [0, 1] \to M$ suave a trozos tal que $\alpha(0) = p$ y $\alpha(1) = q$.
>>	3. Definimos  $$A = \{t \in [0, 1] \mid \alpha(s) \in P \text{ y } (T_{\alpha(s)}M) \perp N \text{ para todo } s \in [0, t]\} \quad \text{y} \quad \tau = \sup A$$ y es no vacio por que $0\in A$
>>	4. Luego sucede que $\alpha(\tau) \in P$ por que  $$ \langle \alpha(\tau) - p, N \rangle = \lim_{t \to \tau^-} \langle \alpha(t) - p, N \rangle = \lim_{t \to \tau^-} 0 = 0. $$
>>	5. Así, si $\tau = 1$ tenemos que $q = \alpha(1) \in P$, como queríamos.
>>	6. Supongamos $\tau <1$. Por el paso 2 existe un sistema coordenado $\psi : V \to M$ con $V$ conexo tal que $\alpha(\tau) \in \psi(V)$ y $\psi(V)$ está contenido en un plano, digamos $Q$.
>>	7. Existe $\varepsilon > 0$ tal que $\alpha(t) = \psi(x(t), y(t))$ para todo $t \in (\tau - \varepsilon, \tau + \varepsilon)$. Si $\tau - \varepsilon < s < \tau$, (por definicion de supremo) se cumple que $$ N \perp T_{\alpha(s)}M = \text{span } \{\psi_x(x(s), y(s)), \psi_y(x(s), y(s))\} = T_{\alpha (s)} Q. $$
>>	8. Como $T_{\alpha (s)}P \perp N$ y ademas $P$ y $Q$ comparten el punto $\alpha(\tau)$, resulta que $Q = P$. 
>>	9. En consecuencia, $\alpha(t) \in P$ y $(T_{\alpha(t)}M) \perp N$ para todo $t \in (\tau - \varepsilon, \tau + \varepsilon)$, lo que contradice que $\tau$ es el supremo de $A$

>[!Remark]- Comentarios finales sobre curvatura
>1. Las superficies regladas tienen curvatura gaussiana $K \le 0$. ¿Con qué resultado de la página 57 se puede justificar la afirmación? En la curva de estrechez (si existe) la curvatura negativa es más pronunciada (o sea, menor). En otras palabras, para cada recta de la regla, la curvatura alcanza el mínimo al intersecar la curva guía.

>[!Definition]- Superficie minima
>Las superficies con curvatura media idénticamente nula, $H = 0$, se denominan **superficies mínimas**. 
>Entre los ejemplos tenemos el plano, el helicoide y la catenoide. 

>[!Remark]-
>Si sumergimos un alambre en agua jabonosa obtenemos una superficie mínima. Además, una región pequeña de una superficie mínima tiene área mínima entre la cercanas que comparten el borde con ella.

# Geodésicas

>[!Definition] Geodésica
>Sea $M$ una superficie con una orientación $n$. Se dice que una curva suave $\gamma : (a, b) \to M$ es una **geodésica** de $M$ si existe una función $\lambda : (a, b) \to \mathbb{R}$ tal que
>$$ \gamma''(t) = \lambda(t) n(\gamma(t)) $$
>para todo $t \in (a, b)$, o sea, si en cada instante la aceleración de $\gamma$ es normal a la superficie.
>Esta noción claramente no cambia si se remplaza la orientación $n$ por su opuesta $-n$.

>[!Remark]-
>Como la aceleración es normal, no se percibe desde la superficie; es como si la curva tuviera "aceleración nula en $M$".

>[!Proposition] Geodesicas tienen rapidez constante
>Las geodésicas tienen rapidez constante.
>>[!Proof]-
>>1. Sea $\gamma$ una geodésica en un superficie $M$ con una orientación $n$. 
>>2. Calculamos $$ \begin{align} \frac{d}{dt} \|\gamma'(t)\|^2 & = \frac{d}{dt} \langle \gamma'(t), \gamma'(t) \rangle = 2 \langle \gamma''(t), \gamma'(t) \rangle \\ & = 2 \langle \lambda(t) n(\gamma(t)), \gamma'(t) \rangle \\ &= 2\lambda(t) \langle n(\gamma(t)), \gamma'(t) \rangle \\& = 0 \end{align} $$
>>pues $\gamma'(t) \in T_{\gamma(t)}M \perp n(\gamma(t))$.

^4deef6

>[!Example]-
>Las curvas constantes en una superficie son trivialmente geodésicas. Si $c \in \mathbb{R}$ y $\gamma$ es una geodésica de una superficie, entonces la curva $\sigma$ definida por $\sigma(t) = \gamma(ct)$ en el dominio adecuado, también lo es.
>>[!Proof]-
>>1. **Curvas constantes:** Sea $\gamma(t) = p$ para todo $t$. Entonces $\gamma'(t) = 0$ y $\gamma''(t) = 0$. Como el vector nulo es múltiplo de cualquier vector (en particular, $0 = 0 \cdot n(p)$), se satisface la ecuación de la geodésica con $\lambda(t) = 0$.
>>2. **Reescalamiento:** Sea $\gamma$ una geodésica, es decir, $\gamma''(u) = \lambda(u) n(\gamma(u))$. Sea $\sigma(t) = \gamma(ct)$.
>>   Calculamos sus derivadas:
>>   $$ \sigma'(t) = c \gamma'(ct) $$
>>   $$ \sigma''(t) = c^2 \gamma''(ct) $$
>>   Sustituyendo la condición de geodésica para $\gamma$:
>>   $$ \sigma''(t) = c^2 (\lambda(ct) n(\gamma(ct))) = (c^2 \lambda(ct)) n(\sigma(t)). $$
>>   Esto muestra que la aceleración de $\sigma$ es normal a la superficie (es un múltiplo escalar del normal), por lo que $\sigma$ es una geodésica. $\square$

>[!Example] Circulos maximos son geodesicas
>Sea $S$ la esfera de radio 1 centrada en el origen. Entonces los círculos máximos recorridos con rapidez unitaria son geodésicas.
>>[!Proof]-
>>1. Recordamos que un círculo máximo es por definición la intersección de la esfera con un plano que pasa por el origen.
>>2. Sabemos que un cículo máximo resulta de intersecar la esfera con un plano con base ortonormal $\{u, v\}$. Entonces tomamos $$ \gamma(t) = \cos t \, u + \sin t \, v $$que es una parametrización de rapidez unitaria. 
>>3. La trayectoria de $\gamma$ claramente está en el plano, y está en la esfera pues $\|\gamma(t)\| = 1$ para todo $t$ (verificarlo).
>>4. Tomamos la orientación $n$ hacia afuera, o sea, $n(p) = p$ para todo $p \in S$. 
>>5. Calculamos $$ \gamma'(t) = -\sin t \, u + \cos t \, v \quad \text{y} \quad \gamma''(t) = -\cos t \, u - \sin t \, v. $$
>>6. Luego $\gamma''(t) = -\gamma(t) = -n(\gamma(t))$. 
>>7. Así, podemos tomar $\lambda$ constante igual a $-1$ y por lo tanto $\gamma$ es una geodésica. $\square$
>
>>[!Resumen]-
>>8. Usar que $\gamma(t)=\cos(t)u+\sin(t)v$ es un circulo mayor (donde $\{ u,v \}$ dice cual plano usamos para intersecar)
>>9. Es facil ver que esta en la esfera (tiene norma 1) y que esta en un plano es trivial por def
>>10. Luego derivar dos veces y sale directo

^425fb9

# Curvatura geodésica

>[!Definition] Marco móvil
>Sea $M$ una superficie con orientación $n$ y sea $\alpha : (a, b) \to M$ una curva de rapidez unitaria. Para cada $t \in (a, b)$, llamamos
>$$ u(t) = \alpha'(t) \quad \text{y} \quad v(t) = n(\alpha(t)) \times \alpha'(t). $$
>Para cada $t$, $\{u(t), v(t)\}$ es una base ortonormal de $T_{\gamma(t)}M$ (verificarlo).
>El par $\{u, v\}$ se llama **marco móvil** a lo largo de $\alpha$ asociado a la orientación $n$.

>[!Remark]-
>El concepto definido a continuación indica cuánto se aparta de ser geodésica una curva de rapidez unitaria en una superficie, o en otras palabras, cuánto se curva una curva en una superficie, y hacia dónde.

>[!Definition] Curvatura geodésica
>Sea $\alpha : (a, b) \to M$ una curva de rapidez unitaria en una superficie $M$ con orientación $n$. La **curvatura geodésica** de $\alpha$ en el instante $t$ se define por
>$$ \kappa_{g, \alpha}(t) = \langle \alpha''(t), v(t) \rangle. $$

>[!Exercise]- Creo que no entra
>Si $\alpha$ es una curva de rapidez unitaria en $\mathbb{R}^2$, y $\bar{\alpha}(t) = (\alpha(t), 0)$ es una curva en la superficie $\{(x, y, 0) \mid x, y \in \mathbb{R}\}$ provista de la orientación $n(x, y, 0) = (0, 0, 1)$, entonces la curvatura geodésica de $\bar{\alpha}$ coincide con la curvatura signada de $\alpha$.
>>[!Proof]-
>>1. Sea $\alpha(t) = (x(t), y(t))$. Entonces $\bar{\alpha}(t) = (x(t), y(t), 0)$.
>>2. El vector tangente unitario es $u(t) = \bar{\alpha}'(t) = (x'(t), y'(t), 0)$.
>>3. El vector normal a la superficie es $n = (0, 0, 1)$.
>>4. Calculamos $v(t) = n \times u(t) = (0, 0, 1) \times (x'(t), y'(t), 0) = (-y'(t), x'(t), 0)$.
>>5. Calculamos la segunda derivada: $\bar{\alpha}''(t) = (x''(t), y''(t), 0)$.
>>6. La curvatura geodésica es:
>>   $$ \kappa_{g, \bar{\alpha}}(t) = \langle \bar{\alpha}''(t), v(t) \rangle = x''(t)(-y'(t)) + y''(t)x'(t) = x'(t)y''(t) - y'(t)x''(t). $$
>>7. Esta expresión coincide exactamente con la definición de la curvatura signada $k(t)$ para una curva plana de rapidez unitaria. $\square$

>[!Proposition]
>Sea $\alpha$ de rapidez unitaria entonces $\alpha$ es geodésica si y solo si $\kappa_{g, \alpha} = 0$. Además se cumple
>$$ (\kappa_\alpha)^2 = (\kappa_{g, \alpha})^2 + (\kappa_{n, \alpha})^2. $$
>>[!Proof]-
>>1. Para cada $t$, $\{u(t), v(t), n(\alpha(t))\}$ es una base ortonormal de $\mathbb{R}^3$. Luego $$ \begin{align}\alpha'' &= \langle \alpha'', u \rangle u + \langle \alpha'', v \rangle v + \langle \alpha'', n \circ \alpha \rangle (n \circ \alpha) \quad(1)\\ &  = 0 + \kappa_{g, \alpha} v + \kappa_{n, \alpha} (n \circ \alpha) \end{align} $$(Primer termino muere por rapidez unitaria) 
>>2. Primero probamos la segunda afirmación. Como $\{v(t), n(\alpha(t))\}$ es un conjunto ortonormal para todo $t$. Deducimos de (1) (usando ortnormalidad y el producto interno) que $$ (\kappa_\alpha)^2 = \|\alpha''\|^2 = (\kappa_{g, \alpha})^2 + (\kappa_{n, \alpha})^2. $$
>>3. Por otro lado, si $\alpha$ es una geodésica, entonces existe una función $\lambda : (a, b) \to \mathbb{R}$ tal que $\alpha''(t) = \lambda(t) (n \circ \alpha)(t)$ para todo $t$. 
>>4. Luego $$ \kappa_{g, \alpha} = \langle \alpha'', v \rangle = \langle \lambda (n \circ \alpha), v \rangle = 0, $$ya que $v(t) \in T_{\alpha(t)}M$.
>>5. Ahora, si la función $\kappa_{g, \alpha}$ es cero, tenemos por (1) que $\alpha'' = \kappa_{n, \alpha} (n \circ \alpha)$. 
>>6. Así, para cada $t$, $\alpha''(t)$ es un múltiplo de $n(\alpha(t))$ y por lo tanto $\alpha$ es geodésica.

>[!Remark]-
>La primera parte de la prueba muestra que $|\kappa_{g, \alpha}|$ es la norma de la proyección ortogonal de $\alpha''$ sobre el plano tangente correspondiente.

>[!Example] Ejemplo de curvatura geodesica
>Sea $S$ la esfera de radio 1 centrada en el origen, orientada mediante $n(p) = p$ para todo $p \in S$. Sea $\varphi : \mathbb{R} \times (-\frac{\pi}{2}, \frac{\pi}{2}) \to S$ dada por
>$$ \varphi(x, y) = (\cos y \cos x, \cos y \sin x, \sin y) = (\cos y (\cos x, \sin x), \sin y), $$
>y sea $\beta(x) = \varphi(x, y_o)$, que recorre el paralelo de altura $\sin y_o$ (o sea, de latitud $y_o$). Calculemos $k_{g,\beta}$
>>[!Proof]-
>>7. Sea $\alpha$ la reparametrización de $\beta$ por longitud de arco, es decir, $$ \alpha(s) = \left( \cos y_o \left( \cos \left( \frac{s}{\cos y_o} \right), \sin \left( \frac{s}{\cos y_o} \right) \right), \sin y_o \right). $$
>>8. A continuación hallamos la curvatura geodésica de $\alpha$. Notamos $$ n(\alpha(s)) = \alpha(s) $$ por ser esfera (y por que $\lVert \alpha (s) \rVert=1$) o usando [[Definiciones#^278b74]]
>>9. Por otro lado $$ u(s) = \alpha'(s) = \left( -\sin \left( \frac{s}{\cos y_o} \right), \cos \left( \frac{s}{\cos y_o} \right), 0 \right) $$ademas $$ v(s) = n(\alpha(s)) \times u(s) = \left( -\sin y_o \cos \left( \frac{s}{\cos y_o} \right), -\sin y_o \sin \left( \frac{s}{\cos y_o} \right), \cos y_o \right) $$
>>10. Y finalmente $$ \alpha''(s) = -\frac{1}{\cos y_o} \left( \cos \left( \frac{s}{\cos y_o} \right), \sin \left( \frac{s}{\cos y_o} \right), 0 \right). $$
>>11. De allí, $$ \kappa_{g, \alpha}(s) = \langle \alpha''(s), v(s) \rangle = \tan y_o \quad (\text{constante}). $$
>>12. Notamos para usarlo más adelante que esto es lo mismo que $$ \langle u', v \rangle = \tan y_o. \quad (25) $$
>>13. Observamos que $$ \lim_{y_o \to (\frac{\pi}{2})^-} \kappa_{g, \alpha}(s) = \infty \quad \text{y} \quad \lim_{y_o \to (-\frac{\pi}{2})^+} \kappa_{g, \alpha}(s) = -\infty $$y que la curvatura geodésica de $\alpha$ es positiva si $y_o > 0$ y negativa si $y_o < 0$.
>>14. En la siguiente figura vemos el marco móvil $\{u, v\}$ ($u$ en azul y $v$ en rojo), salvo que no tienen la longitud adecuada si el radio de la esfera es 1.
>>![[Pasted image 20251130182416.png]]
>
>>[!Resumen]-
>>15. Notar $\alpha(s) = \left( \cos y_o \left( \cos \left( \frac{s}{\cos y_o} \right), \sin \left( \frac{s}{\cos y_o} \right) \right), \sin y_o \right)$ es reparm long de arco
>>16. Como es esfera unitaria $n(\alpha(s)) = \alpha(s)$ 
>>17. Calcular el marco movil $u(s)=\alpha '(s)$ y $v(s)=n(\alpha (s))\times u(s)$ 
>>18. Finalmente $\langle \alpha ''(s),v(s)\rangle=\frac{\sin y_{0}}{\cos y_{0}}=\tan y_{0}$    

^f51c7b

# Campos paralelos a lo largo de curvas

>[!Remark]-
>En contraste con el caso en que la superficie es un plano en $\mathbb{R}^3$, para la cual todos los espacios tangentes coinciden, para una superficie arbitraria $M$ no hay en general una correspondencia natural entre $T_pM$ y $T_qM$ si $p \neq q$ (si bien ambos son espacios vectoriales isomorfos).

>[!Definition] Campo a lo largo de una curva
>Sea $\alpha : (a, b) \to M$ una curva suave de rapidez unitaria en una superficie $M$. Un **campo $W$ en $M$ a lo largo de $\alpha$** es una función suave $W : (a, b) \to \mathbb{R}^3$ tal que $W(t) \in T_{\alpha(t)}M$ para todo $t \in (a, b)$.

>[!Definition] Campo paralelo
>Sea $M$ una superficie con una orientación $n$. Un campo $W$ a lo largo de una curva $\alpha$ en $M$ de rapidez unitaria se dice **paralelo a lo largo de $\alpha$** si $W'(t)$ es un múltiplo de $n(\alpha(t))$ para todo $t$. Equivalentemente, si para todo $t$ vale
>$$ W'(t) \perp T_{\alpha(t)}M. $$

>[!Remark]-
>Como la variación de $W$ es perpendicular a la superficie, desde la misma se percibe a $W$ como constante; $W$ varía lo estrictamente necesario para mantenerse tangente a $M$.

>[!Example]- Ejemplo de campo pararlelo
>Sea $P$ el plano $z = 0$ y $\alpha$ una curva de rapidez unitaria en $P$. Para todo $t$ tenemos que $T_{\alpha(t)}P = P = (0, 0, 1)^\perp$ y así un campo es paralelo a lo largo de $\alpha$ si y solo si es constante.

>[!Proposition]
>Un campo paralelo a lo largo de una curva en una superficie tiene norma constante.
>>[!Proof]-
>>1. Calculamos $$ \frac{d}{dt} \|W(t)\|^2 = 2 \langle W(t), W'(t) \rangle = 0 $$pues $W(t) \in T_{\alpha(t)}M$ por definicion. Y por ser paralelo $W'(t)\perp T_{\alpha (t)}M$ 

>[!Remark]- Importante
>En el práctico se ve que si $\gamma$ es una geodésica de una superficie $M$ y $W$ es un campo paralelo a lo largo de $\gamma$, entonces $W$ forma un ángulo constante con $\gamma'$. También, que una curva $\alpha$ en $M$ es geodésica si y solo si $\alpha'$ es un campo paralelo a lo largo de $\alpha$.

>[!Remark]- Nocion de geodesica y campos paralelos
>Esto último concuerda con la idea de que al recorrer una geodésica "vamos derecho en la superficie"; la velocidad "no cambia de dirección".

>[!Example] Campo paralelo en la esfera
>Sea $S$ la esfera de radio 1 centrada en el origen y sea $\alpha$ una reparametrización por longitud de arco del paralelo de altura $\sin y_o$. Buscamos un campo $W$ paralelo a lo largo de $\alpha$ tal que $W(0) = \alpha'(0)$.
>>[!Proof]-
>>2. Como queremos $W$ es paralelo a lo largo de $\alpha$, $\|W\|$ es constante. Luego $\|W\| = \|W(0)\| = \|\alpha'(0)\| = 1$.
>>3. Como $\{u(t), v(t)\}$ es una base de $T_{\alpha(t)}S$ para todo $t$, tenemos que $$ W(t) = \cos \theta(t) u(t) + \sin \theta(t) v(t) \in T_{\alpha(t)}S \quad (A) $$ para cierta función $\theta$ a valores reales. Nuestro objetivo es encontrar $\theta$.
>>4. Para cualquier marco móvil, como $\{u, v\}$ es ortonormal, se cumple que $$ \|u\| = \|v\| = 1 \quad \text{y} \quad \langle u, v \rangle = 0. $$
>>5. De las primeras identidades se deduce que $\langle u, u' \rangle = \langle v, v' \rangle = 0$, y de la segunda, que $$ \langle u', v \rangle + \langle u, v' \rangle = 0. $$
>>6. En nuestro caso particular sabemos que $\langle u'(t), v(t) \rangle = \tan(y_o)$ para todo $t$ por [[Definiciones#^f51c7b]]. Luego, $\langle u, v' \rangle = -\tan(y_o)$ (también constante).
>>7. Calculamos $$ W' = -\theta' \sin \theta u + \cos \theta u' + \theta' \cos \theta v + \sin \theta v'. \quad (B) $$
>>8. Planteamos $W'(t) \perp T_{\alpha(t)}M$, o equivalentemente, $$ \langle W', u \rangle = 0 = \langle W', v \rangle. $$
>>9. Evaluando estas expresiones en $W'$ como en $(B)$ (recordar $u=\alpha '$ es unitario por eso $\langle u,u'\rangle=0=\langle v,v'\rangle$), tenemos $$ 0 = \langle W', u \rangle = -\theta' \sin \theta - \sin \theta \tan(y_o), \quad (C) $$ $$ 0 = \langle W', v \rangle = \cos \theta \tan(y_o) + \theta' \cos \theta. $$
>>10. Por lo tanto $$(\theta'+\tan(y_{0}))\cos\theta+(\theta'+\tan(y_{0}))\sin(\theta)=0$$
>>11. Como $\cos \theta$ y $\sin \theta$ no se anulan simultáneamente, resulta $\theta' = -\tan(y_o)$.
>>12. Vemos que $W(t)$ como en $(A)$, con $\theta(t) = -t \tan(y_o)+ C$ es el campo paralelo a lo largo de $\alpha$ buscado. 
>>13. Como querenis que se verifica que $W(0) = \alpha'(0)$ necesitamos $\theta(0) = 0$ entonces $C=0$
>>14. Y obviamente definido asi $W$ es paralelo pues satisface las ecuaciones $(C)$.
>
>>[!Resumen]-
>>15. Como queremos que sea campo paralelo su norma es constante entonces $\lVert W \rVert=\lVert W(0) \rVert=\lVert \alpha'(0) \rVert=1$ 
>>16. Como $\{u(t), v(t)\}$ es base del $T_{\alpha (t)}S$. Y $W$ tiene norma $1$ podemos definir $$W(t)=\cos\theta(t)u(t)+\sin(\theta(t))v(t)$$
>>17. Ahora usando base ortonormal tenemos que $\lVert u \rVert=\lVert v \rVert=1$ entonces $\langle u,u'\rangle=\langle v,v'\rangle=0$ y como $\langle u,v\rangle=0$ entonces $\langle u',v\rangle+\langle u,v'\rangle=0$.
>>18. Ademas sabemos que $\langle u',v\rangle=\tan y_{0}$ luego $\langle u,v'\rangle=-\tan y_{0}$
>>19. Ahora podemos conseguir $W'$ como queremos campo paralelo $\langle W', u \rangle = 0 = \langle W', v \rangle.$
>>20. Como $\cos \theta$ y $\sin \theta$ no se anulan simultáneamente, resulta $\theta' = -\tan(y_o)$. Osea $\theta(t)=-t\tan y_{0}$ 
>>21. Y ya queda $W$ bien definida , solo chequear $W(0)=\alpha '(0)$   

^fe0320

>[!Exercise]-
>Encontrar el campo $W$ paralelo a lo largo de $\alpha$ tal que $W(0) = v(0)$.
>>[!Proof]-
>>1. Casi igual que antes
>>2. Sabemos del ejemplo anterior que un campo paralelo $W$ a lo largo de $\alpha$ tiene la forma $$W(t) = \cos \theta(t) u(t) + \sin \theta(t) v(t)$$ con $\theta'(t) = -\tan(y_o)$.
>>3. Integrando, tenemos $\theta(t) = -t \tan(y_o) + C$.
>>4. La condición inicial es $W(0) = v(0)$. Evaluando en $t=0$:
>>   $$ W(0) = \cos(C) u(0) + \sin(C) v(0). $$
>>5. Como queremos $W(0) = v(0)$, igualando coeficientes en la base $\{u(0), v(0)\}$ obtenemos $\cos(C) = 0$ y $\sin(C) = 1$.
>>6. Podemos tomar $C = \pi/2$.
>>7. Sustituyendo en la expresión de $W(t)$:
>>   $$ W(t) = \cos(-t \tan(y_o) + \pi/2) u(t) + \sin(-t \tan(y_o) + \pi/2) v(t). $$
>>8. Usando las identidades trigonométricas $\cos(x + \pi/2) = -\sin(x)$ y $\sin(x + \pi/2) = \cos(x)$, y la paridad de las funciones:
>>   $$ \cos(-t \tan(y_o) + \pi/2) = -\sin(-t \tan(y_o)) = \sin(t \tan(y_o)) $$
>>   $$ \sin(-t \tan(y_o) + \pi/2) = \cos(-t \tan(y_o)) = \cos(t \tan(y_o)) $$
>>9. Finalmente, el campo buscado es:
>>   $$ W(t) = \sin(t \tan(y_o)) u(t) + \cos(t \tan(y_o)) v(t). $$

>[!Remark]- Pendulo Focault
>Los campos paralelos a lo largo de paralelos de la Tierra están relacionados con el péndulo de Foucault.

>[!Remark]- Triangulo Equilatero en esfera
>Sea $W$ un campo paralelo a lo largo de los tres lados de un triángulo equilátero esférico con lados geodésicos de longitud $\frac{\pi}{2}$, parametrizados por longitud de arco. Se cumple que $W(3\frac{\pi}{2})$ se obtiene de rotar $W(0)$ en un ángulo recto. Ver la primera imagen de [Berry Phase](http://materia.fisica.unimi.it/manini/berryphase.html) (recordar que los campos paralelos a lo largo de geodésicas forman un ángulo constante con la curva base).

>[!Remark]- Derivada covariante
>Sea $M$ una superficie y sea $\alpha : (a, b) \to M$ una curva suave de rapidez unitaria. Dado un campo $W$ a lo largo de $\alpha$, existe el concepto de **derivada covariante** de $W$, que es un campo $\frac{DW}{dt}$ a lo largo de $\alpha$ (en particular, $\frac{DW}{dt}(t) \in T_{\alpha(t)}M$ para todo $t \in (a, b)$), que mide cuantitativamente cuánto se aparta $W$ de ser paralelo a lo largo de $\alpha$. La búsqueda de una definición precisa adecuada queda como ejercicio optativo.

# Ecuación diferencial para las coordenadas de una geodésica

>[!Remark] Condiciones para geodesicas
>Sea $\varphi : U \to M$ un sistema coordenado de la superficie $M$ y sea $\gamma : (a, b) \to M$ una curva suave con trayectoria contenida en $\varphi(U)$. Tenemos que $\gamma(t) = \varphi(u(t), v(t))$ para ciertas funciones $u, v$, para todo $t$.
>Recordamos que $\gamma$ es geodésica si y solo si $\gamma''(t) \perp T_{\gamma(t)}M$ para todo $t$, o equivalentemente,$$ \langle \gamma''(t), \varphi_u(u(t), v(t)) \rangle = \langle \gamma''(t), \varphi_v(u(t), v(t)) \rangle = 0 $$para todo $t$.
>Calculamos $$ \gamma' = \varphi_u(u, v) u' + \varphi_v(u, v) v' $$$$\begin{align} \gamma'' & = (\varphi_u(u, v))' u' + \varphi_u(u, v) u'' + (\varphi_v(u, v))' v' + \varphi_v(u, v) v''\\ &= (\varphi_{uu} u' + \varphi_{uv} v') u' + \varphi_u u'' + (\varphi_{vu} u' + \varphi_{vv} v') v' + \varphi_v v''\\&=\  \varphi_{uu} (u')^2 + \varphi_{uv} v' u' + \varphi_u u'' + \varphi_{vu} u' v' + \varphi_{vv} (v')^2 + \varphi_v v'' \end{align}$$
>(Aca hicismo un pequeño abuso de notación)
>Ahora, hacemos producto escalar contra $\varphi_u$ y $\varphi_v$ y obtenemos:$$ 0 = \langle \varphi_u \  ,\  \varphi_{uu} (u')^2 + \varphi_{uv} v' u' + \varphi_u u'' + \varphi_{vu} u' v' + \varphi_{vv} (v')^2 + \varphi_v v'' \rangle $$
>$$ 0 = \langle \varphi_v\ ,\ \varphi_{uu} (u')^2 + \varphi_{uv} v' u' + \varphi_u u'' + \varphi_{vu} u' v' + \varphi_{vv} (v')^2 + \varphi_v v'' \rangle $$
>Distribuyendo las sumas, como $\varphi_{uv} = \varphi_{vu}$, resulta:$$ 0 = \langle \varphi_u, \varphi_{uu} \rangle (u')^2 + 2 \langle \varphi_u, \varphi_{uv} \rangle v' u' + \langle \varphi_u, \varphi_{vv} \rangle (v')^2 + \langle \varphi_u, \varphi_u \rangle u'' + \langle \varphi_u, \varphi_v \rangle v'', \quad (A) $$
>$$ 0 = \langle \varphi_v, \varphi_{uu} \rangle (u')^2 + 2 \langle \varphi_v, \varphi_{uv} \rangle v' u' + \langle \varphi_v, \varphi_{vv} \rangle (v')^2 + \langle \varphi_v, \varphi_u \rangle u'' + \langle \varphi_v, \varphi_v \rangle v''. $$
>Así, la curva $\gamma$ es geodésica si y solo si $u$ y $v$ satisfacen este sistema de ecuaciones diferenciales.

^4bc198

>[!Remark]-
>El siguiente teorema afirma que las isometrías locales llevan geodésicas en geodésicas. Esto dice que el concepto de geodésica es **intrínseco**, a pesar de que la definición es **extrínseca**, ya que involucra el campo normal a la superficie.

>[!Theorem] Isometrías locales preservan geodésicas
>Sea $f : M \to N$ una isometría local entre dos superficies y sea $\gamma : (a, b) \to M$ una geodésica en $M$. Entonces $f \circ \gamma$ es una geodésica de $N$.
>>[!Proof]-
>>- **Definimos Cartas**
>>	1. Sea $\varphi : U \to M$ con $\gamma(t_{0}) \in \varphi(U)$. Como $f$ es isometria, entonces es difeo local (restringiendo su dominio a algo que tenga a $\gamma(t_{0})$)
>>	2. Como $f$ difeo local definimos $\bar{\varphi} = f \circ \varphi : \bar{U} \to N$ que es un sistema coordenado de $N$ (donde $\bar{U}$ es restriccion de $U$ para adaptarse a la restriccion del dominio de $f$) , obviamente tenemos que restringir el dominio de $f$ al rededor de $\gamma(t_{0})$. Y en base a ese abierto restringimos $U$.
>>	3. En base a esto restringimos el dominio de $t$ a $(\gamma(t_{0})-\epsilon,\gamma(t_{0})+\epsilon)$ contenido en la restriccion de $U$. Por lo tanto podemos definir $\gamma(t)=\varphi(u(t),v(t))$
>>	4. Como $f:=\bar{\varphi}\circ\varphi ^{-1}$ es isometria se satisface $\bar{E} = E$, $\bar{F} = F$ y $\bar{G} = G$, donde $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ son los coeficientes de la primera forma fundamental de $\varphi$ y $\bar{\varphi}$, respectivamente.
>>- **Igualdad de coeficientes**
>>	1. Dada cualquier carta $\varphi$ (en particular vale para la restriccion que ya dimos) 
>>	2. Veremos a continuación que en la primera ecuación de $(A)$ los coeficientes de $(u')^2$, $v' u'$, $(v')^2$, $u''$ y $v''$ dependen solo de $E, F, G$ y sus derivadas parciales.
>>	3. El coeficiente de $u''$ es $\langle \varphi_u, \varphi_u \rangle = E$. El coeficiente de $v''$ es $\langle \varphi_u, \varphi_v \rangle = F$. 
>>	4. El coeficiente de $(u')^2$ es $$ \langle \varphi_u, \varphi_{uu} \rangle = \frac{1}{2} \langle \varphi_u, \varphi_u \rangle_u = \frac{1}{2} E_u. $$
>>	5. El coeficiente de $u' v'$ es $$ \langle \varphi_{uv}, \varphi_u \rangle = \frac{1}{2} \langle \varphi_u, \varphi_u \rangle_v = \frac{1}{2} E_v. $$
>>	6. El coeficiente de $(v')^2$ es$$ \langle \varphi_u, \varphi_{vv} \rangle, $$que reconocemos como una función por la derivada de otra. 
>>	7. Por la regla para derivar el producto, tenemos que $$ \langle \varphi_u, \varphi_{vv} \rangle = \langle \varphi_u, \varphi_v \rangle_v - \langle \varphi_{uv}, \varphi_v \rangle = F_{v}-\frac{1}{2}\langle\varphi_{v},\varphi_{v}\rangle_{u} = F_v - \frac{1}{2} G_u $$
>>	8. Se procede análogamente para los coeficientes de la segunda ecuación
>>	9. Entonces en particular para el pedazo de geodesica $\gamma(t)=\varphi(u(t),v(t))$ dado en 3. de la primera parte valen esas condiciones sobre la primer forma fundamental
>>	10. Como vimos en el paso 4. de la 1era parte. Las primeras formas fundamentales de $\varphi(u(t))$ y de $\bar{\varphi}=f\circ\varphi$ son las mismas entonces como $\gamma(t) = \varphi(u(t), v(t))$ es geodesica sucede que $\bar{\varphi}(u(t),v(t))=f\circ\varphi(u(t),v(t))=f\circ\gamma(t)$ es geodesica 
>>	11. Y esto obviamente lo podemos hacer para cualquier pedazo de la geodesica, por lo tanto $f\circ\gamma$ es geodesica 

^0cb445

>[!Exercise]-
>Sea $P$ el plano horizontal apoyado en el polo norte de la esfera $S$ de radio 1 centrada en el origen. Mostrar que la proyección central de $P$ en $S$, es decir $p \mapsto p/\|p\|$, lleva trayectorias de geodésicas en trayectorias de geodésicas, pero que no lleva geodésicas en geodésicas.
>>[!Proof]- Solución
>>1. **Trayectorias:** Las geodésicas de $P$ son rectas. Sea $L$ una recta en $P$. El conjunto de puntos de la recta junto con el origen determina un plano $\Pi$ en $\mathbb{R}^3$ (si la recta no pasa por el origen, lo cual es cierto pues $P$ está en $z=1$).
>>2. La proyección central $f(p) = p/\|p\|$ mapea un punto $p \in L$ a la intersección del rayo que une el origen con $p$ y la esfera $S$.
>>3. Como $p \in \Pi$, el rayo está contenido en $\Pi$. Por lo tanto, la imagen $f(L)$ está contenida en la intersección de $\Pi$ con $S$.
>>4. La intersección de un plano que pasa por el origen con la esfera es un círculo máximo. Por lo tanto, la imagen de la trayectoria de la geodésica en $P$ es un arco de círculo máximo, que es la trayectoria de una geodésica en $S$.
>>5. **Parametrización:** Sea $\alpha(t)$ una geodésica en $P$ con rapidez unitaria. Entonces $\alpha(t)$ recorre una recta con velocidad constante.
>>6. Sea $\beta(t) = f(\alpha(t)) = \alpha(t)/\|\alpha(t)\|$. Para que $\beta$ sea una geodésica en $S$, debería tener rapidez constante.
>>7. Sin embargo, un cálculo muestra que la rapidez de $\beta$ no es constante. Intuitivamente, a medida que $\alpha(t)$ se aleja del polo norte en el plano, el rayo proyectante barre ángulos más lentamente sobre la esfera.
>>8. Formalmente, $\|\beta'(t)\| = \frac{\sqrt{\\|\alpha(t)\\|^2 \\|\alpha'(t)\\|^2 - \langle \alpha(t), \alpha'(t) \rangle^2}}{\\|\alpha(t)\\|^2}$. Como $\|\alpha(t)\|$ varía con $t$ (crece cuando $t \to \infty$), la rapidez no es constante. Por lo tanto, $f$ no preserva geodésicas (como curvas parametrizadas).

>[!Remark]-
>El siguiente teorema afirma que las isometrías locales entre superficies **preservan la curvatura gaussiana**. Se dice que la curvatura gaussiana es **intrínseca**.

>[!Theorem] Teorema Egregium de Gauss (Solo enunciado) 
>Sean $M$ y $N$ dos superficies con funciones de curvatura gaussiana $K_M$ y $K_N$, respectivamente. Si $f : M \to N$ es una isometría local entonces
>$$ K_N(f(p)) = K_M(p) $$
>para todo $p \in M$.
>>[!Proof]- Idea de la prueba
>>1. Dado $p \in M$, sea $\varphi : U \to M$ un sistema coordenado. Consideramos el campo normal $n$ en $\varphi(U)$ dado por $$ n \circ \varphi = \frac{\varphi_u \times \varphi_v}{\|\varphi_u \times \varphi_v\|}. $$
>>2. Sabemos que $$ K_M \circ \varphi = \det(-dn_\varphi)=\det(dn_\varphi) = \det([dn_\varphi]_{\{\varphi_u, \varphi_v\}}). $$
>>3. Los coeficientes de esa matriz involucran $\varphi_u, \varphi_v$ y sus derivadas parciales.
>>4. Usando las técnicas de la prueba del teorema anterior, los escribimos en términos de $E, F, G$ y sus derivadas parciales.
>>5. Como $f$ es una isometría local, entonces es un difeo local, con lo cual, achicando $U$ si es necesario, $\bar{\varphi} := f \circ \varphi: U\rightarrow N$ es un sistema coordenado de $N$ y ademas $\bar{\varphi}\circ\varphi ^{-1}=f$ que es una isometria entre $M$ y $N$ entonces por [[Definiciones#^7286f3]] tenemos $E=\bar{E}, F=\bar{F}, G=\bar{G}$, 
>>6. De la misma manera que arriba, $K_N \circ \bar{\varphi}$ se escribe en función de $\bar{E}, \bar{F}, \bar{G}$. 
>>7. Por lo tanto $K_N \circ \bar{\varphi} = K_M \circ \varphi$, y de allí, $K_N \circ f = K_M$

>[!Example]-
>No existen isometrías locales del plano a las esferas, pues el primero tiene curvatura gaussiana constante cero y la esfera de radio $r$ tiene curvatura constante $1/r^2$. Notar las implicaciones en cartografía.

>[!Remark]-
>Se puede mostrar que la cinta que Möbius que presentamos algunas clases atrás tiene curvatura gaussiana estrictamente negativa (como ocurre en general con las superficies regladas nunca cilíndricas). Luego no es de las que se construyen uniendo las puntas de una cinta de papel.

>[!Remark]-
>El Teorema Egregium sienta las bases para concebir un universo curvo sin necesidad de que se curve **en** un ambiente más grande.

>[!Remark]-
>Hace algunas clases habíamos enunciado que la esfera es rígida, es decir, se deforma solo si se estira o encoge (o sea, alguna curva cambia la longitud), pero que un casquete pequeño no lo es.
>Por otro lado, se puede demostrar lo siguiente: Si $M$ y $N$ son dos superficies con la misma curvatura gaussiana *constante*, dados $p \in M$ y $q \in N$, existen entornos abiertos de $p$ y $q$ en $M$ y $N$, respectivamente, que son isométricos.
>Entonces el ejercicio 10 del práctico 7 provee un ejemplo de una superficie que no es localmente congruente a la esfera de radio 1, pero sus conjuntos abiertos pequeños son isométricos a abiertos pequeños de la esfera.

# Existencia y unicidad de geodésicas

>[!Proposition] Unicida de Geodesica (Solo enunciado)
>Sea $M$ una superficie. Dados $p \in M$ y $v \in T_pM$, existe una geodésica $\gamma$ en $M$ tal que $\gamma(0) = p$ y $\gamma'(0) = v$, definida en cierto intervalo abierto $I$ que contiene al cero.
>Se verifica la siguiente noción de unicidad: Si $\sigma : J \to M$ es una geodésica definida en un intervalo abierto $J$, con las mismas condiciones iniciales, es decir, $\sigma(0) = p$ y $\sigma'(0) = v$, entonces $\gamma$ y $\sigma$ coinciden en la intersección $I \cap J$.
>>[!Proof]-
>>1. Elegimos $\varphi:U\rightarrow M$ una carta con $p \in \varphi(U)$. Por continuidad de $\sigma,\gamma$ tenemos que existe un intervalo $I_{0}\subseteq I\cap J$ con $0\in I_{0}$ tal que $\sigma(I_{0})\subseteq \varphi(U)$ y $\gamma(I_{0})\subseteq \varphi(U)$      
>>2. Luego si ponemos a $\gamma$ en coordenadas, $\gamma(s) = \varphi(u(s), u(s))$, entonces $(u(s), u(s))$ satisface el sistema de ecuaciones diferenciales de orden 2 que vimos más arriba
>>3. Si ponemos $\sigma$ en coordenadas tenemos $\sigma(s)=\varphi(\bar{u}(s),\bar{v}(s))$, pero entonces $(\bar{u}(s),\bar{v}(s))$ tambien cumple las mismas ecuaciones 
>>4. Luego por unicidad de ODE tenemos $(\bar{u}(s),\bar{v}(s))=(u(s),v(s))$ mostrando que $\gamma=\sigma$

^e70295

>[!Proposition]
>Sea $S$ la esfera de radio 1 centrada en el origen. Sabemos que los círculos máximos son trayectorias de geodésicas. Ahora vemos que no hay otras. Toda geodésica no constante en $S$ tiene como trayectoria a un arco de círculo máximo.
>>[!Proof]-
>>1. Sea $\gamma$ una geodésica no constante en $S$. Como el enunciado se refiere a la trayectoria, podemos suponer sin pérdida de generalidad que $\|\gamma'\| = 1$.
>>2. Llamamos $p = \gamma(0)$ y $v = \gamma'(0)$. Tenemos que $v \in T_pS = p^\perp$. Luego $\{p, v\}$ es un subconjunto ortonormal de $\mathbb{R}^3$. 
>>3. Sea $\sigma : \mathbb{R} \to S$ definida por $\sigma(s) = p\cos s + v\sin s$. Ya vimos que $\sigma$ es geodésica de $S$ [[Definiciones#^425fb9]] ademas se verifica fácilmente que $\sigma(0) = p$ y $\sigma'(0) = v$. 
>>4. Por la unicidad, $\gamma(s) = \sigma(s)$ para todo $s$ en el dominio de $\gamma$. 
>>5. Así, la trayectoria de $\gamma$ está en el cículo máximo determinado por la base $\{p, v\}$.
>
>>[!Resumen]-
>>1. $p=\gamma(0)$ y $\gamma'(0)=v$ entonces como $T_{p}S=p^{\perp}$ tenemos que $\{ p,v \}$ es un plano.
>>2. $\sigma(s)=p\cos (s) +v\sin(s)$ es un circulo mayor entonces es geodesica. Y $\sigma(0)=p$ y $\sigma'(0)=v$.
>>3. Por unicidad $\gamma$ es localmente el un pedazo del circulo mayor

>[!Remark]-
>En el práctico se encuentran todas las geodésicas del cilindro. Si el cilindro está bruñido, las geodésicas se pueden visualizar como hilos tirantes sobre él.

>[!Remark]-
>Ahora vemos otra aplicación de la existencia y unicidad de geodésicas.

>[!Proposition]- Caso reflexion preserva geodesicas
>Sea $M$ una superficie regular y sea $P$ un plano que intersecta a $M$ en la trayectoria de una curva $\alpha$ de rapidez unitaria. Si la reflexión respecto de $P$ lleva $M$ en $M$, entonces $\alpha$ es una geodésica de $M$.
>>[!Proof]-
>>4. Sin pérdida de generalidad podemos suponer que $P = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ y $\alpha(t) = (u(t), v(t), 0)$. (Notar que el enunciado nos dice que $\alpha \subseteq P$) 
>>5. Se cumple que $\alpha'(0) = (u'(0), v'(0), 0)$ y que la reflexión respecto de $P$ está dada por $R(x, y, z) = (x, y, -z)$.
>>6. Sea $\gamma$ una geodésica en $M$ con $\gamma(0) = \alpha(0)$ y $\gamma'(0) = \alpha'(0)$. 
>>7. Supongamos que $\gamma(t) = (x(t), y(t), z(t))$ para todo $t$. Luego $$ \gamma'(0) = (x'(0), y'(0), z'(0)) = (u'(0), v'(0), 0). $$
>>8. Sea $\beta$ la curva en $M$ definida por $$ \beta(t) = R(\gamma(t)). $$
>>9. Como $R$ es una transformación euclidiana (aunque no rígida) que lleva $M$ en $M$, entonces $R|_M : M \to M$ es una isometría de $M$. [[Definiciones#^0cb445]] nos asegura que lleva geodésicas de $M$ en geodésicas de $M$. Entonces $\beta$ también es una geodésica de $M$.
>>10. Claramente, $\beta(0) = \gamma(0) = \alpha(0)$, pues $\alpha(0) \in P$. Y por que $R$ es reflexion sobre $P$ 
>>11. Como $R$ es una transformación lineal, tenemos que $$ \beta'(0) = (dR)_{\gamma(0)}(\gamma'(0)) = R(\alpha'(0)) = \alpha'(0) = \gamma'(0), $$pues $\alpha'(0)$ también está en $P$ (Por definicion de $\alpha$). 
>>12. De esta manera, $\gamma$ y $\beta$ son dos geodésicas con el mismo punto inicial y la misma velocidad inicial. 
>>13. Por [[Definiciones#^e70295]], las curvas coinciden en alguna interseccion de sus dominios, cerca del $0$. Luego, $$ \beta(t) = R(\gamma(t)) = R(x(t), y(t), z(t)) = (x(t), y(t), -z(t)) $$es igual a $$ \gamma(t) = (x(t), y(t), z(t)) $$para todo $t$. 
>>14. Por lo tanto, $z(t) = 0$ para todo $t$ y así ambas curvas están en $P$, y en particular en la intersección de $P$ con $M$, que es la trayectoria de $\alpha$.
>>15. Finalmente, como además $\alpha, \gamma$ y $\beta$ tienen rapidez unitaria, el mismo punto incial y la misma velocidad inicial, las tres curvas son iguales en un intervalo cerca del $0$. 
>>16. Obviamente esto lo podriamos haber hecho para cualqueir punto no necesariamente el $0$. Así, $\alpha$ es una geodésica en $M$.

^2bbc2c

# Distancia en una superficie y propiedades minimizantes de las geodésicas

>[!Definition]
>Sea $M$ una superficie conexa y sean $p, q$ dos puntos de $M$. Se define la **distancia** entre $p$ y $q$ en $M$ mediante
>$$ d(p, q) = \inf \{ \text{long}(\alpha) \mid \alpha \text{ es una curva suave a trozos en } M \text{ que une } p \text{ con } q \}. $$
>Notar que el conjunto es no vacío pues $M$ es conexa.

>[!Exercise]-
>Mostrar que $d(p, q) \ge \|p - q\|$ para todo $p, q \in M$.

>[!Remark]-
>Ahora mostramos que el ínfimo no siempre es mínimo.

>[!Example] Infimo no siempre se realiza
>La distancia entre dos puntos no siempre se realiza
>>[!Proof]-
>>1. Sea $P$ el plano $z = 0$ y sea $M = P - \{(0, 0, 0)\}$. 
>>2. Sean $p = (-1, 0, 0)$ y $q = (1, 0, 0)$ dos puntos en $M$. 
>>3. Para cada $y > 0$ sea $\alpha_y$ una curva suave a trozos en $M$, inyectiva, que une $p$ con $q$, con una trayectoria como la roja en el dibujo. ![[Pasted image 20251204200638.png]]
>>4. Tenemos que $$ \lim_{y \to 0^+} \text{long}(\alpha_y) = \lim_{y \to 0^+} 2\sqrt{1 + y^2} = 2. $$
>>5. Luego, $d(p, q) \le 2$. (por def de ínfimo) 
>>6. Pero no existe ninguna curva en $M$ que une $p$ con $q$ de longitud menor o igual que 2, porque vimos en un ejercicio al comienzo de la materia que las únicas curvas de longitud mínima en $P$ que unen $p$ con $q$ son reparametrizaciones del *segmento* que los une. Como este segmento contiene al origen, que no está en $M$, se concluye lo deseado. Además, los argumentos implican que $d(p, q) = 2$.

>[!Theorem] Distancia minima entonces es geodesica
>Sea $\gamma$ una curva suave a trozos con rapidez unitaria que une dos puntos $p$ y $q$ de una superficie y realiza la distancia entre ellos (o sea, $d(p, q) = \text{long}(\gamma)$). Entonces $\gamma$ es una geodésica (en particular, es suave).
>>[!Proof]- Sin demo
>>No lo demostramos. Quien tenga interés puede ver el Teorema 5.9 del libro *Elements of Differential Geometry* de Millman y Parker.

>[!Remark]- Observaciones
>- En la esfera de radio 1 centrada en el origen, una geodésica de longitud mayor que $\pi$ no realiza la distancia entre sus extremos (su trayectoria es un arco de círculo máximo de longitud mayor que $\pi$).
>- Dos puntos de una superficie pueden estar unidos por dos geodésicas que realizan la distancia entre ellos, con trayectorias distintas. Por ejemplo, el polo norte y el polo sur de la esfera unidos por dos meridianos distintos.

>[!Proposition]-
>Sean $p$ y $q$ dos puntos en la esfera de radio 1 centrada en el origen. Entonces
>$$ d(p, q) = \angle(p, q). $$
>Recordar que el ángulo entre dos vectores unitarios $p$ y $q$ de $\mathbb{R}^n$ es $\arccos(\langle p, q \rangle)$, es decir, el único número $\theta$ en el intervalo $[0, \pi]$ tal que $\cos \theta = \langle p, q \rangle$.

>[!Theorem]
>Las geodésicas minimizan distancias localmente. Más precisamente, si $\gamma : (a, b) \to M$ es una geodésica de la superficie $M$ y $t_o \in (a, b)$, entonces existe $\delta > 0$ tal que
>$$ \gamma|_{[t_o - \delta, t_o + \delta]} $$
>realiza la distancia entre sus extremos y además, si otro segmento geodésico lo hace, tiene la misma trayectoria.

>[!Remark] 
>A continuación presentamos un teorema que describe las trayectorias de las geodésicas en una superficie de revolución.
>Antes de enunciarlo, repasamos de una clase pasada una de las ecuaciones diferenciales que satisfacen las coordenadas $u, v$ de una geodésica $\gamma(t) = \varphi(u(t), v(t))$, donde $\varphi$ es un sistema coordenado:$$ 0 = \langle \varphi_u, \varphi_{uu} \rangle (u')^2 + 2 \langle \varphi_u, \varphi_{uv} \rangle v' u' + \langle \varphi_u, \varphi_{vv} \rangle (v')^2 + \langle \varphi_u, \varphi_u \rangle u'' + \langle \varphi_u, \varphi_v \rangle v''. \quad (A) $$
>Después habíamos enunciado un teorema que afirma que las isometrías locales llevan geodésicas en geodésicas. En la prueba de ese teorema habíamos escrito los coeficientes de $(u')^2$, $v' u'$, $(v')^2$, $u''$ y $v''$ en la ecuación en términos de los coeficientes $E, F$ y $G$ de la primera forma fundamental de $\varphi$ y sus derivadas parciales, como sigue: $$ \langle \varphi_u, \varphi_{uu} \rangle = \frac{1}{2} E_u, \quad \langle \varphi_{uv}, \varphi_u \rangle = \frac{1}{2} E_v, \quad \langle \varphi_u, \varphi_{vv} \rangle = F_v - \frac{1}{2} G_u, \quad (B) $$$$ \langle \varphi_u, \varphi_u \rangle = E, \quad \langle \varphi_u, \varphi_v \rangle = F. $$

^259071

>[!Theorem] Teorema de Clairaut
>Sea $\gamma$ una curva de rapidez unitaria en una superficie de revolución. Para cada $s$, sea $\rho(s)$ la distancia de $\gamma(s)$ al eje y sea $\theta(s)$ el ángulo que forma $\gamma'(s)$ con el paralelo que pasa por $\gamma(s)$.
>Si $\gamma$ es geodésica, entonces
>$$ \rho(s) \cos \theta(s) $$
>es constante. La recíproca vale si $\sin(\theta(s)) \neq 0$ para todo $s$.
>>[!Proof]-
>>1. Suponemos que la superficie de revolución tiene curva perfil $\alpha(v) = (r(v), h(v))$ de rapidez unitaria.
>>2. Consideramos el sistema coordenado asociado $$ \varphi(u, v) = (r(v)(\cos u, \sin u), h(v)). $$
>>3. Calculamos los vectores coordenados $$ \varphi_u(u, v) = (r(v)(-\sin u, \cos u), 0) \quad \text{y} \quad \varphi_v(u, v) = (r'(v)(\cos u, \sin u), h'(v)). $$
>>4. Tenemos que $$ E(u, v) = \|\varphi_u(u, v)\|^2 = (r(v))^2, $$$$ F(u, v) = \langle \varphi_u(u, v), \varphi_v(u, v) \rangle = 0, $$$$ G(u, v) = \|\varphi_v(u, v)\|^2 = \|\alpha'(v)\|^2 = 1. $$
>>5. Ahora ponemos $\gamma$ en coordenadas $$ \gamma(s) = \varphi(u(s), v(s)). $$
>>6. Supongamos que $\gamma$ es geodésica. Entonces $\gamma$ satisface la ecuación diferencial $(A)$. 
>>7. Para ver cómo es en nuestro caso, usando [[Definiciones#^259071]], calculamos $(B)$  $$ E_v(u, v) = 2r(v)r'(v), \quad E_u(u, v) = 0, \quad F_v - \frac{1}{2} G_u = 0, $$$$ E(u, v) = (r(v))^2, \quad F(u, v) = 0. $$
>>8. Así que esa ecuación diferencial resulta ser $$ 0 = 2r(v)r'(v) u' v' + (r(v))^2 u'' = ((r(v))^2 u')'. $$
>>9. Por otro lado, $\rho(s) = r(v(s))$ por que es la distancia hacia el eje $z$ que es $\sqrt{ x^{2}+y^{2} }$ en este caso $|r(v)|\sqrt{\cos(u)^{2}+\sin(u)^{2}}=r(v)$  
>>10. Ademas $\theta(s)$ es el ángulo que forma $\gamma'(s)$ con el vector coordenado $\varphi_u(u(s), v(s))$. Por que cualquier paralelo es $\beta(u)=\varphi(u,v_{0})$ (osea fijamos la altura en $v_{0}$) entonces $\beta'(u)=\varphi_{u}(u,v_{0})$ ahora si evaluamos esto en un punto generico de la superfiecie dado por $\gamma$, osea $u(s),v(s)$ tenemos $\varphi_{u}(u(s),v(s))$ es la derivada del paralelo en ese punto. Osea tenemos a $\gamma'$ y la derivada del paralelo en el plano tangente asi que podemos comparar angulos 
>>11. Derivamos $\gamma(s)=\varphi(u(s),v(s))$ y calculamos $$ \begin{align}\rho \cos \theta &= r(v) \frac{\langle \gamma', \varphi_u(u, v) \rangle}{\|\gamma'\| \|\varphi_u(u, v)\|}\\& = r(v) \frac{\langle \varphi_u(u, v) u' + \varphi_v(u, v) v', \varphi_u(u, v) \rangle}{\|\varphi_u(u, v)\|} \\& = r(v) \frac{E(u, v) u'}{\sqrt{E(u, v)}} \\ &= r(v) \sqrt{E(u, v)} u'\\& = r(v) \sqrt{(r(v))^2} u' \\&= (r(v))^2 u'\end{align}$$que es constante por $8.$
>>12. La recíproca no la demostramos.
>
>>[!Resumen]-
>> 1. Parametrizar la superficie de revolución $\varphi(u, v) = (r(v)(\cos u, \sin u), h(v))$  y calcular $E,F,G$ notar $F=0$.
>> 2. Poner la geodésica en coordenadas y calculamos las derivadas de $E,F,G$ 
>> 3. Reemplazando en la ecuacion de geodesica $0 = 2r(v)r'(v) u' v' + (r(v))^2 u'' = ((r(v))^2 u')'$ 
>> 4. Identificar $\rho=r(v)$ usando $z^{2}=\sqrt{ x^{2}+y^{2} }$
>> 5. Cualquier paralelo es $\beta(u)=\varphi(u,v_{0})$ por definicion de superficie de revolucion por lo tanto angulo entre curva geodesica y curva paralea es $\langle\gamma',\varphi_u\rangle$.
>> 6. Luego derivamos $\gamma(s)=\varphi(u(s),v(s))$ y calculamos $$\rho \cos \theta = r(v) \frac{\langle \gamma', \varphi_u(u, v) \rangle}{\|\gamma'\| \|\varphi_u(u, v)\|}$$ y resolviendo se llega a $\rho\cos\theta=(r(v))^2u'$ que es constante como queriamos.

>[!Remark]
>Si $\rho$ es una función decreciente, entonces $\cos \theta$ crece (para mantener el producto constante) y así $\theta$ decrece, pues $\cos$ es decreciente en el intervalo $(0, \pi)$.

>[!Remark]
>El Teorema de Clairaut es un caso particular de un resultado de Emmy Noether, una de las primeras mujeres alemanas a las se les permitió asistir a clases de matemática en la universidad, pero que sufrió muchas discriminaciones en su carrera profesional por ser mujer. Pueden consultar en wikipedia. El teorema de Noether es más general y limpio. Nosotros nos conformamos con uno particular y con muchas cuentas, pero más concreto (lo de Noether es más abstracto).
>![[Pasted image 20251205191936.png]]

>[!Example] Un problema de geodésicas en el cono
>Un vaquero se encuentra al pie de una montaña de hielo sin fricción formada por un cono con una base circular con un ángulo de inclinación $\theta$. Lanza su lazo, que se desliza perfectamente sobre la punta del cono, lo tensa y trata de escalar. ¿Cómo debe ser el ángulo $\theta$ para que el vaquero pueda escalar la montaña de hielo?
>>[!Proof]- Solución
>>7. Consideramos un sector circular de ángulo $\beta$, como en la figura. Identificamos los segmentos $\ell_1$ y $\ell_2$, que suponemos de longitud 1, y obtenemos un cono.
>>8. Ahora relacionamos $\beta$ con el ángulo de inclinación $\theta$ del cono. Sea $r$ el radio del círculo base del cono. Luego la circunferencia de la base mide $2\pi r$, que es igual a $\beta$, por construcción (el arco del sector circular se convierte en la circunferencia base).
>>9. Como $\ell_1 = \ell_2 = 1$ (la generatriz del cono es 1), tenemos que $r = \sin(\text{semiángulo del cono})$. Pero el problema define $\theta$ como el ángulo de inclinación de la base, así que el radio $r$ es la proyección de la generatriz: $r = \cos \theta$.
>>10. Entonces, $\beta = 2\pi r = 2\pi \cos \theta$, de donde $\cos \theta = \frac{\beta}{2\pi}$.
>>11. Una soga tirante en el cono determina una geodésica cuyos extremos son el mismo punto, donde está situado el vaquero, que llamamos $p$. Podemos suponer sin pérdida de generalidad que $p$ es el punto donde $P$ se une con $Q$ al armar el cono con el sector circular ![[Pasted image 20251205192019.png]]
>>12. Ahora bien, la aplicación que lleva el sector circular en el cono es una isometría (localmente, fuera del vértice), las isometrías llevan geodésicas en geodésicas, y las trayectorias geodésicas del plano son segmentos de rectas.
>>13. Como la única manera de que un segmento de recta en el sector circular una $P$ con $Q$ (que son el mismo punto en el cono) es que el segmento esté completamente contenido en el sector.
>>14. Esto requiere que el ángulo $\beta$ sea menor que $\pi$. Si $\beta \ge \pi$, el segmento que une un punto en un borde con su identificado en el otro borde pasaría "por fuera" del sector (o por el vértice, que no es parte de la superficie regular).
>>15. Por lo tanto, se tiene que
>>   $$ \cos \theta = \frac{\beta}{2\pi} < \frac{\pi}{2\pi} = \frac{1}{2}. $$ ![[Pasted image 20251205192041.png]]
>>16. Esto implica que $\theta > \arccos(1/2) = \pi/3 = 60^\circ$.
>>17. Así, el ángulo de inclinación debe ser mayor a $60^\circ$ para que la geodésica (el lazo tenso) no se "salga" o se "trabe" en el vértice, permitiendo al vaquero escalar.

# Una interpretación métrica de la curvatura gaussiana

>[!Remark]
>Sea $M$ una superficie y sean $p \in M$ y $r > 0$. Se define $$ C_r(p) = \{q \in M \mid d(q, p) = r\}. $$
>Por ejemplo, si $M$ es el plano $z = 0$ y $p \in M$, $C_r(p)$ es una circunferencia de longitud $2\pi r$ centrada en $p$.

>[!Proposition]
>Sea $S$ la esfera de radio $R$ centrada en el origen, sea $p = (0, 0, R)$ el polo norte y sea $0 < r < \pi R$. Entonces $C_r(p)$ es una circunferencia de longitud $2\pi R \sin(r/R)$. Además, el polinomio de Taylor de orden 3 de la función $r \mapsto \text{long}(C_r(p))$ alrededor del origen es
>$$ 2\pi r - \frac{2\pi}{3!} K(p) r^3. \quad (33) $$
>>[!Proof]-
>>1. Así como lo vimos para la esfera de radio 1, para la de radio $R$ también vale que las trayectorias son arcos de círculos máximos y para todo $q, q' \in S$ se cumple que $d(q, q') = R(\angle(q, q'))$.
>>2. En el dibujo observamos que $C_r(p)$ es un paralelo de radio $\rho = R \sin(r/R)$, y así es una circunferencia con la longitud deseada. ![[Pasted image 20251205225053.png]]
>>3. Llamando $f(r) = \text{long}(C_r(p))$, calculamos $$ f(0) = 0, \quad f'(0) = 2\pi, \quad f''(0) = 0 \quad \text{y} \quad f'''(0) = -\frac{2\pi}{R^2}. $$
>>4. Como $K(p) = \frac{1}{R^2}$, la expresión para el polinomio de Taylor es verdadera.

>[!Remark]
>Dado un punto $p$ de una superficie $M$ cualquiera, si $r > 0$ es suficientemente pequeño, $C_r(p)$ es una la trayectoria de una curva cerrada suave en $M$ y el polinomio de Taylor de orden 3 de la función $r \mapsto \text{long}(C_r(p))$ alrededor del origen también está dado por (33).
>De manera informal podemos decir lo siguiente: Supongamos que un jardinero que vive en una superficie $M$ clava una estaca en un punto $p$ y marca el borde $C$ de un cantero con un hilo tirante atado a la estaca, de longitud $r$ suficientemente chica. Entonces la longitud de $C$ será mayor o menor que $2\pi r$ si $K(p)$ es negativa o positiva, respectivamente. Esto provee otra interpretación ingenua de que la curvatura gaussiana es intrínseca, como asegura el Teorema Egregium de Gauss.
# Métricas riemannianas conformes

>[!Definition]
>Sea $U$ un subconjunto abierto de $\mathbb{R}^n$. Una **métrica riemanniana conforme** en $U$ es una función positiva $g : U \to \mathbb{R}$ junto con una manera de medir longitudes de curvas en $U$ de manera posiblemente distinta de la usual: Si $\alpha : [a, b] \to U$ es una curva suave, entonces
>$$ \text{long}_g(\alpha) = \int_a^b \|\alpha'(t)\| g(\alpha(t)) \, dt. $$

>[!Example]
>Si $\varphi : U \to M$ es un sistema coordenado con $E = G = g^2$ y $F = 0$, entonces la nueva forma de definir longitudes en $U \subset \mathbb{R}^2$ resulta ser la que declara la longitud de una curva $\alpha$ en el mapa como la longitud de la curva $\varphi \circ \alpha$ en $M$. La verificación se deja como ejercicio.

>[!Example] El plano hiperbólico
>Sean
>$$ H = \{(x, y) \in \mathbb{R}^2 \mid y > 0\} \quad \text{y} \quad g : H \to \mathbb{R}, \,\, g(x, y) = \frac{1}{y}. $$
>Si $\alpha : [a, b] \to H$, $\alpha(t) = (x(t), y(t))$ es una curva suave, entonces
>$$ \text{long}_g(\alpha) = \int_a^b \sqrt{(x'(t))^2 + (y'(t))^2} \frac{1}{y(t)} \, dt. $$

>[!Remark]
>Como en $U$ están definidas las longitudes de curvas (si bien de manera no tradicional), está definida la distancia entre dos puntos de $U$ y tiene sentido preguntarse cuáles son las curvas en $U$ que localmente la minimizan. También tiene sentido la noción de isometría entre $U$ y otro abierto $U'$ con una métrica riemanniana conforme $G'$, o entre $U$ y una superficie regular $M$.
>Se puede mostrar que para el plano hiperbólico $H$, las curvas que locamente minimizan la distancia son, por un lado, las rectas verticales (intersecadas con $H$), y por el otro, las semicircunferencias en $H$ centradas en el eje $x$.
>También es verdad que las traslaciones $(x, y) \mapsto (x + c, y)$ y las homotecias $(x, y) \mapsto (\lambda x, \lambda y)$, con $c \in \mathbb{R}$ y $\lambda > 0$, son isometrías de $H$. Se prueba que la franja
>$$ \{(x, y) \in H \mid |x| < 1 \text{ e } y > 1\} $$
>es isométrica a la tractoide (ejercicio 11 del práctico 7) menos un meridiano. Eso justifica decir, Teorema Egregium mediante, que el plano hiperbólico $H$ tiene curvatura constante igual a $-1$.
>
>El plano hiperbólico (salvo con la métrica duplicada en sentido horizontal) resulta ser una manera muy conveniente, en cierto sentido, de describir la relación entre las diferentes campanas de Gauss (parametrizadas por la media $\mu \in \mathbb{R}$ y la varianza $\sigma > 0$). Se puede ver en [este paper](https://arxiv.org/pdf/1210.2354.pdf).
>El ejemplo muestra que aunque una situación se parametrice con $x, y$ reales, la distancia eucídea no siempre es adecuada.
