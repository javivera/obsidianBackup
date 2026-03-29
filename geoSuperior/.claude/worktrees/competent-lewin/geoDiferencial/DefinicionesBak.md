# Curvas y parametrizaciones

>[!Definition] Reparametrización por longitud de arco
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
>>3. Como $\sigma$ es sobre $[0, L]$, tenemos que $\|\beta'\| = 1$.

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

>[!Definition] Curvatura $\kappa$ 
>Sea $\alpha : (a, b) \to \mathbb{R}^n$ una curva de rapidez unitaria. La **curvatura** de $\alpha$ es la función
> $$ \kappa : (a, b) \to \mathbb{R}, \quad \kappa(s) = \|\alpha''(s)\|. $$

>[!Definition] El triedro de Frenet
> Sea $\alpha : (a,b) \to \mathbb{R}^3$ una curva suave de rapidez unitaria con curvatura nunca nula, es decir, $\|\alpha'(t)\| = 1$ y $\kappa(t) = \|\alpha''(t)\| \ne 0$ para todo $t$.
> Entonces las funciones $T, N, B: (a,b) \to \mathbb{R}^3$ se definen mediante
> $$T = \alpha', \quad N = \alpha''/\|\alpha''\| = \alpha''/\kappa \quad \text{y} \quad B = T \times N$$
>Para cada $t \in (a,b)$, $\{T(t), N(t), B(t)\}$ es una base ortonormal de $\mathbb{R}^3$.
>>[!Proof]-
>>10. Como $\alpha$ tiene rapidez unitaria, $\|T\| = \|\alpha'\| = 1$. Claramente, $\|N\| = 1$.
>>11. Derivando con respecto a $t$ la expresión $1 = \|\alpha'(t)\|^2 = \langle \alpha'(t), \alpha'(t) \rangle$ tenemos que $$ 0 = 2 \langle \alpha''(t), \alpha'(t) \rangle = 2 \langle N(t) \kappa(t), T(t) \rangle = 2\kappa(t) \langle N(t), T(t) \rangle $$que vale para todo $t$. 
>>12. Como $\kappa$ nunca se anula por hipótesis, resulta que $\langle T, N \rangle = 0$
>>13. Además, $\langle B, T \rangle = \langle T\times N, N \rangle = 0$ analogo $\langle B,N\rangle=0$  y $$ \|B\| = \|T \times N\| = \|T\| \|N\|\sin\left( \frac{\pi}{2} \right) = 1.1.1=1 $$

>[!Proposition] Ecuaciones de Frenet
>Se cumple que
> $$T' = \kappa N, \quad N' = -\kappa T + \tau B \quad \text{y} \quad B' = -\tau N, \quad (1)$$
> donde $\kappa : (a,b) \to \mathbb{R}$ es la función curvatura, para cierta función $\tau : (a,b) \to \mathbb{R}$, llamada la **torsión** de $\alpha$, que satisface
> $$\tau = \langle N', B \rangle = - \langle B', N \rangle.$$
> Comentario. Las ecuaciones (1) a veces se escriben de la forma
> $$\begin{cases} T' = & \kappa N \\ N' = & -\kappa T & +\tau B \\ B' = & & -\tau N \end{cases}$$
>>[!Proof]-
>>14. Tenemos que $$ T' = (\alpha')' = \alpha'' = \|\alpha''\| \frac{\alpha''}{\|\alpha''\|} = \kappa N. $$
>>15. Como sabemos que $\{T, N, B\}$ es una base ortonormal, podemos escribir $$ N' = \langle N', T \rangle T + \langle N', N \rangle N + \langle N', B \rangle B. $$
>>16. $\langle N', N \rangle = 0$, pues $1=\|N\|^{2} = (N,N)$ y luego derivando 
>>17. "Integrando"podemos obtener $$ \langle N', T \rangle = \langle N, T \rangle' - \langle N, T' \rangle = 0 - \langle N, \kappa N \rangle = -\kappa \|N\|^2 = -\kappa. $$
>>18. De esta manera $$ N' = -\kappa T + 0.N + \tau B $$ Donde definimos $\langle N', B \rangle=\tau$.
>>19. Ahora escribimos $$ B' = \langle B', T \rangle T + \langle B', N \rangle N + \langle B', B \rangle B. $$
>>20. Tenemos que $\langle B', B \rangle = 0$, pues $\|B\| = \text{constante}$. 
>>21. También, $$ \langle B', N \rangle = \langle B, N \rangle' - \langle B, N' \rangle = 0 - \langle B, \kappa T + \tau B \rangle = -\tau \|B\|^2 = -\tau. $$
>>22. Analogamente $$\langle B', T \rangle=\langle B,T\rangle'-\langle B,T '\rangle=0-\langle B,\kappa N\rangle=0$$
>>23. Mostrando que $B'=-\tau N$ 

>[!Definition] Plano osculador, normal y osculador afín
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
>>	5. Luego $f$ es constante y $f(t) = f(t_o) = \langle \alpha(t_o) - \alpha(t_o), n \rangle = 0$.
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
>>[!Resumen]- Ayuda
>>- **(⇐) $\tau=0 \Rightarrow$ planar**
>>	1. $\tau=0 \Rightarrow B'=0 \Rightarrow B$ constante. Fijo $n:=B$ 
>>	2. Definimos plano que pasa $\alpha(t_0)$:
>> 	  $$P=\{q:\langle q-\alpha(t_0),n\rangle=0\}.$$
>>	3. Let $f(t)=\langle\alpha(t)-\alpha(t_0),n\rangle$. Y derivando vemos que $f$ es constante y luego usamos $f(t_{0})=0$ 
>>- **(⇒) planar $\Rightarrow \tau=0$**
>>	1. $\alpha$ contained in plane $P$ with unit normal $n$.
>>	2. $\langle\alpha(t)-\alpha(t_0),n\rangle=0\;\forall t$.
>>	3. Differentiate:
>> 	  - $\langle T,n\rangle=0$
>> 	  - $\langle T',n\rangle=\kappa\langle N,n\rangle=0$
>>	1. Since $\kappa\neq 0$: $\langle N,n\rangle=0$.
>>	2. Thus $n\perp T$ and $n\perp N$.
>>	3. Hence $n=\pm B$.
>>	4. $B=\pm n$ is constant $\Rightarrow B'=0$.
>>	5. From $B'=-\tau N$: $\tau=0$.
>	

>[!Remark]
>El signo de la torsión indica si la curva se parece al pasamanos de una escalera de caracol para diestros ($\tau > 0$) o zurdos ($\tau < 0$). O si se parece a la vid ($\tau > 0$) o al lúpulo ($\tau < 0$), por la manera en que se enroscan los tallos de estas plantas.

>[!Definition] Helice
>Se dice que una curva $\alpha : (a, b) \to \mathbb{R}^3$ 
>de rapidez unitaria y curvatura nunca nula es una hélice si existe
> un vector unitario $u \in \mathbb{R}^3$ tal que $\langle \alpha'(t), u \rangle = \text{constante para todo } t$.

>[!Theorem]
>Si $\alpha : (a, b) \to \mathbb{R}^3$ es una hélice con curvatura $\kappa : (a, b) \to \mathbb{R}$ positiva y torsión $\tau : (a, b) \to \mathbb{R}$, entonces $\tau/\kappa$ es constante.
>>[!Proof]-
>>- $(\Rightarrow)$
>>	1. Por definicion de helice $\alpha'$ y $u$ son unitarios
>>	2. $\langle \alpha'(t), u \rangle = \cos \theta$, donde $\theta$ es el ángulo entre $\alpha'(t)$ y $u$, que es constante por hipótesis.
>>	3. Si $|\cos \theta| = 1$, entonces $T(t) = \pm u$ es constante, lo que implica que $\alpha$ es una recta y $\kappa = 0$, contradiciendo la hipótesis. Así, $|\cos \theta| < 1$.
>>	4. Derivamos miembro a miembro $$ 0 = \langle T', u \rangle + \langle T, u' \rangle = \langle \kappa N, u \rangle + 0 = \kappa \langle N, u \rangle$$
>>	5. Como $\kappa$ es nunca nula $\langle N, u \rangle = 0$. 
>>	6. Derivamos nuevamente $$ 0 = \langle N', u \rangle + \langle N, u' \rangle = \langle -\kappa T + \tau B, u \rangle = -\kappa \langle T, u \rangle + \tau \langle B, u \rangle = -\kappa \cos \theta + \tau \langle B, u \rangle . \quad (3) $$
>>	7. Ahora vemos que $\langle B, u \rangle$ es constante. Calculamos $$\langle B', u \rangle = \langle -\tau N, u \rangle = -\tau \langle N, u \rangle = 0$$
>>	8. Para cada $t$, escribimos $u$ en la base $\{T(t), N(t), B(t)\}$, $$ u = \langle u, T \rangle T + \langle u, N \rangle N + \langle u, B \rangle B = (\cos \theta) T + \langle u, B \rangle B$$
>>	9. Como $u$ es unitario y la base es ortonormal $$ 1 = \|u\|^2 = \cos^2 \theta + \langle u, B \rangle^2$$
>>	10. Luego, $\langle u, B \rangle = \pm \text{sen } \theta = \text{constante}$. Ademas Por (3) $$-\kappa \cos \theta \pm \tau \text{sen } \theta = 0$$
>>	11. De allí, $\tau/\kappa = \pm \cot \theta = \text{constante}$.
>>- $(\Leftarrow)$
>>	1. Supongamos que $\tau/\kappa = c$ para alguna constante $c \in \mathbb{R}$. Podemos escribir $c = \cot \theta$ para algún $\theta \in (0, \pi)$, con $\theta \ne \pi/2$.
>>	2. Definimos el vector $u(t) = (\cos \theta) T(t) + (\sin \theta) B(t)$ y derivamos con respecto a $t$ $$ u' = (\cos \theta) T' + (\sin \theta) B' = (\cos \theta) \kappa N + (\sin \theta) (-\tau N) = (\kappa \cos \theta - \tau \sin \theta) N. $$
>>	3. Como $\tau/\kappa = \cot \theta$, tenemos $\tau \sin \theta = \kappa \cos \theta$, por lo que $u' = 0$.
>>	4. Así, $u$ es un vector constante. Además $$ \|u\|^2 = \cos^2 \theta + \sin^2 \theta = 1, $$por lo que $u$ es unitario. 
>>	5. Finalmente $$ \langle \alpha'(t), u \rangle = \langle T(t), (\cos \theta) T(t) + (\sin \theta) B(t) \rangle = \cos \theta, $$que es constante. 
>>	6. Por definición, $\alpha$ es una hélice. $\square$
>> [!Summary] Resumen de la prueba
>> - **(⇒)** Derivando la condición de hélice ($\langle T, u \rangle = \text{cte}$) se llega a que $N$ es ortogonal a un vector fijo $u$. Derivando nuevamente y usando las ecuaciones de Frenet, se obtiene una relación lineal entre $\kappa$ y $\tau$ que implica que su cociente es constante.
>> - **(⇐)** Si $\tau/\kappa$ es constante, se puede construir un vector $u$ como combinación de $T$ y $B$ tal que su derivada sea cero (usando Frenet). Esto demuestra que $u$ es un vector fijo y que la curva cumple la definición de hélice.
>
>[!Definition] Curvatura de reparametrizacion
>Sea $\alpha : [a, b] \to \mathbb{R}^3$ una curva regular de longitud $L$. Se define la **curvatura** de $\alpha$ en el instante $t$ mediante
> $$\kappa_{\alpha}(t) = \kappa_{\beta}(\sigma(t)),$$
>donde $\sigma : [a, b] \to [0, L]$ es la función longitud de arco de $\alpha$, $\beta : [0, L] \to \mathbb{R}^3$ es la reparametrización por longitud de arco de $\alpha$, y $\kappa_{\alpha}, \kappa_{\beta}$ son las curvaturas de $\alpha$ y $\beta$, respectivamente.
>Bajo estas condiciones vale,
>$$\kappa_{\alpha }=\frac{\lVert \alpha '\times\alpha '' \rVert}{\lVert \alpha ' \rVert ^{3} }$$
>>[!Proof]-
>>1. Como $\sigma$ es la función longitud de arco, sabemos que $\sigma'(t) = \|\alpha'(t)\|$ para todo $t$ por [[Definiciones#^4b79f2]]
>>2. Tenemos que $\alpha(t) = \beta(\sigma(t))$ entonces $\alpha'(t) = \beta'(\sigma(t))\sigma'(t)$ y $$ \alpha''(t) = \beta''(\sigma(t))(\sigma'(t))^2 + \beta'(\sigma(t))\sigma''(t)$$
>>3. Entonces, como $x \times x = 0$ para todo $x \in \mathbb{R}^3$, y usando distributiva en producto escalar y ademas que la imagen de $\sigma$ es un escalar, tenemos: $$ \alpha' \times \alpha'' = \beta'(\sigma)\sigma' \times (\beta''(\sigma)(\sigma')^2 + \beta'(\sigma)\sigma'') = \beta'(\sigma) \times \beta''(\sigma)(\sigma')^3 $$
>>4. Tomando norma miembro a miembro y usando 1. $$ \|\alpha' \times \alpha''\| = \|\beta'(\sigma) \times \beta''(\sigma)\| |\sigma'|^3 = \|\beta'(\sigma) \times \beta''(\sigma)\| \|\alpha'(t)\|^3. $$
>>5. Como $\|\beta'\| = 1$, resulta que $\langle \beta', \beta'' \rangle = 0$ (Derivando) . Osea el angulo entre ellos es 90  
>>6. Así por 5. , defincion de producto cruz y definicion de curvatura $$ \|\beta'(\sigma) \times \beta''(\sigma)\| = \|\beta'(\sigma)\| \|\beta''(\sigma)\|\left\lVert  \sin\left( \frac{\pi}{2} \right)  \right\rVert  = \lVert \beta''(\sigma) \rVert =\kappa_\beta(\sigma). $$
>>7. En consecuencia $$ \kappa_\alpha = \kappa_\beta(\sigma) = \frac{\|\alpha' \times \alpha''\|}{\|\alpha'\|^3}$$como deseábamos.  

^f3efb8

# Curvas Planas

>[!Definition] Curvatura signada
>La **curvatura signada** de una curva suave $\alpha : (a, b) \to \mathbb{R}^2$ de rapidez unitaria es la función
>$$ k : (a, b) \to \mathbb{R}, \quad k(t) = \det(\alpha'(t), \alpha''(t)). $$
>
>**Nota.** En el práctico se ve que $|k| = \kappa$.

>[!Remark]
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

>[!Definition]
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

>[!Definition]
>Sea $\beta : [a, b] \to \mathbb{R}^n$ una curva continua. Si $\beta(t) = (y_1(t), \dots, y_n(t))$, se define
>$$ \int_a^b \beta(t) \, dt = \left( \int_a^b y_1(t) \, dt, \dots, \int_a^b y_n(t) \, dt \right). $$

>[!Theorem] Teorema fundamental de las curvas planas
>Sea $\tilde{k} : [a, b] \to \mathbb{R}$ una función de clase $C^2$ y sean $p, u \in \mathbb{R}^2$ con $\|u\| = 1$. Entonces existe una curva plana $\alpha : [a, b] \to \mathbb{R}^2$ suave de rapidez unitaria tal que $\alpha(a) = p$, $\alpha'(a) = u$ y $\tilde{k}$ es la función curvatura signada de $\alpha$.
>
>**Comentario.** Se puede demostrar que una curva $\alpha$ con esas propiedades es única.
>>[!Proof]-
>>1. Proponemos $\alpha : [a, b] \to \mathbb{R}^2$ de la forma $$ \alpha(s) = p + \int_a^s (\cos \theta(t), \sin \theta(t)) \, dt $$para cierta función $\theta : [a, b] \to \mathbb{R}$. 
>>2. Como $u$ es unitario, $u = (\cos(\theta_o), \sin(\theta_o))$ para cierto ángulo $\theta_o$.
>>3. Se cumple que $$ \alpha(a) = p \quad \text{y} \quad \alpha'(s) = (\cos \theta(s), \sin \theta(s))$$
>>4. Necesitamos que $\tilde{k}(s) = k(s)$, o equivalentemente, por [[Definiciones#^bb97e8]], que $\tilde{k}(s) = \theta'(s)$.
>>5. Luego, tomando $$ \theta(s) = \theta_o + \int_a^s \tilde{k}(t) \, dt $$la curva $\alpha$ satisface lo requerido
>> [!Summary] Resumen de la prueba
>> Se construye explícitamente la curva integrando un vector tangente unitario cuyo ángulo $\theta$ es la integral de la curvatura signada dada. Este procedimiento garantiza que la curva tenga la curvatura prescrita y cumpla las condiciones iniciales de posición y dirección.
>

>[!Theorem] Teorema fundamental de las curvas espaciales
>Sea $\kappa : (a, b) \to \mathbb{R}$ una función positiva de clase $C^2$ y sea $\tau : (a, b) \to \mathbb{R}$ una función de clase $C^1$. Dados $t_o \in (a, b)$, $p \in \mathbb{R}^3$ y una base ortonormal $\{t, n, t \times n\}$ de $\mathbb{R}^3$, existe una única curva suave de rapidez unitaria $\alpha : (a, b) \to \mathbb{R}^3$ tal que su curvatura y su torsión son $\kappa$ y $\tau$, respectivamente, y además $\alpha(t_o) = p$, $T(t_o) = t$, $N(t_o) = n$ y $B(t_o) = t \times n$ 
>($\{T, N, B\}$ es el aparato de Frenet de $\alpha$).
>>[!Proof]
>>No damos la prueba.

^d9aef1

>[!Proposition]
>La longitud de cualquier curva suave $\alpha : [a, b] \to \mathbb{R}^n$ con $\alpha(a) = p$ y $\alpha(b) = q$ es mayor o igual que $\|q - p\|$.
>>[!Proof]-
>>6. Escribimos $$ q - p = \alpha(b) - \alpha(a) = \int_a^b \alpha'(t) \, dt $$
>>7. Hacemos producto escalar contra $q - p$ miembro a miembro y obtenemos $$ \begin{align}\|q - p\|^2 & = \left\langle \int_a^b \alpha'(t) \, dt, q - p \right\rangle \\ & = \int_a^b \langle \alpha'(t), q - p \rangle \, dt\\& \le \int_a^b \|\alpha'(t)\| \|q - p\| \, dt \\& = \|q - p\| \int_a^b \|\alpha'(t)\| \, dt \end{align}$$ (hemos usado la desigualdad de Schwarz).
>>8. Ahora, si $q = p$, el enunciado es claramente verdadero. Si $q \ne p$, tenemos $\|q - p\| \ne 0$ y así $$ \|q - p\| \le \int_a^b \|\alpha'(t)\| \, dt = \text{long}(\alpha), $$como queríamos.
>> [!Summary] Resumen de la prueba
>> Se expresa el vector desplazamiento $q-p$ como la integral del vector velocidad. Al proyectar este desplazamiento sobre sí mismo (producto escalar) y aplicar la desigualdad de Cauchy-Schwarz dentro de la integral, se concluye que la distancia en línea recta es siempre menor o igual que la longitud del camino recorrido (integral de la rapidez).
>

>[!Definition] Circunferencia osculatriz y Evoluta
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva de rapidez unitaria y curvatura signada $k : (a, b) \to \mathbb{R}$ positiva.
>La **circunferencia osculatriz** en el instante $t$ es la circunferencia $C_t$ de radio $$r(t) := \frac{1}{k(t)}$$ (el radio de curvatura en $t$) y centro
>$$ c(t) = \alpha(t) + r(t) I \alpha'(t), $$
>donde $I(x, y) = (-y, x)$, la trasformación de matriz $I = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.
>Se ve en el práctico que $C_t$ es la circunferencia que mejor aproxima a la curva $\alpha$ en $t$.
>La curva $c$ se llama la **evoluta** de $\alpha$.

>[!Proposition]
>Sea $\alpha$ como arriba, que cumpla además que $k$ es estrictamente decreciente. Entonces para $t_1 < t_2$ en $(a, b)$ vale que
>$$ \text{long}\left( c|_{[t_1, t_2]} \right) = r(t_2) - r(t_1). $$
>Es decir, la longitud de un arco de evoluta de $\alpha$ es igual al incremento del radio de curvatura.
>>[!Proof]-
>>9. Notar que $r' > 0$ pues $k$ decrece. 
>>10. Sabemos $\alpha''(s)=T'=\tilde{k}(s) N$ para alguna funcion $\tilde{k}$ entonces $$k(s)=(\alpha ''(s),I(\alpha '(s)))=\langle \tilde{k}(s)N,N(s)\rangle=\tilde{k}(s)$$ tenemos que $\alpha''(s)=k(s)N(s) = k(s) I \alpha'(s)$.
>>11. Calculamos $$ c' = \alpha' + r' I \alpha' + r I \alpha'' = \alpha' + r' I \alpha' + r I k I \alpha' = \alpha' + r' I \alpha' - r k \alpha' = r' I \alpha', $$pues $I^2(z) = -z$ para todo $z \in \mathbb{R}^2$.
>>12. Así, $\|c'(t)\| = r'(t)$ ($k$ es positiva por eso no hay modulo y rapidez unitaria) para todo $t$. 
>>13. Luego si $t_1 < t_2$ están en $(a, b)$ resulta que
>>$$ \text{long}\left( c|_{[t_1, t_2]} \right) =\int_{t_{1}}^{t_{2}}\lVert c'(t) \rVert dt  = \int_{t_1}^{t_2} r'(t) \, dt = r(t_2) - r(t_1), $$

>[!Theorem] Teorema de Tait-Kneser
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva de rapidez unitaria y curvatura signada $k : (a, b) \to \mathbb{R}$ positiva y estrictamente decreciente. Entonces las circunferencias osculatrices de $\alpha$ son disjuntas dos a dos y anidadas.
>>[!Proof]-
>>14. Sean $t_1 < t_2$ en $(a, b)$. Mostramos a continuación que $C_{t_1} \subsetneq C_{t_2}$.
>>15. Por la proposición anterior, la distancia entre los centros de esas circunferencias satisface $$ \|c(t_2) - c(t_1)\| \le \text{long}\left( c|_{[t_1, t_2]} \right) = r(t_2) - r(t_1). \quad (5) $$
>>16. Sea $p \in C_{t_1}$, o sea, $\|p - c(t_1)\| = r(t_1)$. Veamos que $p$ está en el interior de $C_{t_2}$ o sea, $\|p - c(t_2)\| < r(t_2)$. Calculamos
>>$$ \begin{align} \|p - c(t_2)\| & = \|p - c(t_1) + c(t_1) - c(t_2)\| \\ & \le \|p - c(t_1)\| + \|c(t_1) - c(t_2)\| \\ & \le r(t_1) + r(t_2) - r(t_1) = r(t_2), \end{align} $$
>>con lo cual $\|p - c(t_2)\| \le r(t_2)$.
>>17. Como $r(t_1) < r(t_2)$, la inclusión es estricta y las circunferencias no se tocan. $\square$

# Transformaciones Rigidas

>[!Definition] Transformaciones ortogonales
>Una matriz $C$ $n \times n$ se dice **ortogonal** si sus columnas forman una base ortonormal de $\mathbb{R}^n$, o equivalentemente, si $C^T C = I_{n \times n}$, donde el supraíndice $T$ denota transpuesta.
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

^8d0719

>[!Proposition]
>Sea $C$ una matriz ortogonal $3 \times 3$. Entonces para todo par de vectores $x, y \in \mathbb{R}^3$ vale que
>$$ Cx \times Cy = \det(C) C(x \times y). $$
>>[!Proof]-
>>1. **Ejercicio.** Mostrar que si $\langle x, z \rangle = \langle y, z \rangle$ para todo $z$, entonces $x = y$.
>>2. Hacemos producto escalar miembro a miembro contra un vector cualquiera $z'$, digamos $z' = Cz$ (notar que $C$ es suryectiva). Por el ejercicio, debemos ver que
>>$$ \langle Cx \times Cy, Cz \rangle = \det(C) \langle C(x \times y), Cz \rangle, $$
>>3. o equivalentemente,
>>$$ \det(Cx, Cy, Cz) = \det(C) \langle x \times y, z \rangle = \det(C) \det(x, y, z) $$
>>(con $x, y, z$ vectores columna). 
>>4. Eso es lo mismo que ver que
>>$$ \det(C(x, y, z)) = \det(C) \det(x, y, z) $$
>>que es verdadero. $\square$
>> [!Summary] Resumen de la prueba
>> Se utiliza la propiedad del determinante de una composición de transformaciones. Al expresar el producto mixto de tres vectores transformados como el determinante de la matriz formada por ellos, se relaciona directamente con el determinante de la matriz de transformación y el producto mixto original.
>

>[!Proposition]
>Sea $C$ una transformación ortogonal de $\mathbb{R}^3$. Entonces la matriz de $C$ respecto de alguna base ortonormal de $\mathbb{R}^3$ tiene la forma
>$$ \begin{pmatrix} R_\theta & 0 \\ 0 & \det C \end{pmatrix} $$
>para cierto $\theta \in \mathbb{R}$. En particular, si $\det C = 1$, $C$ es una rotación alrededor de una recta que pasa por el origen.

>[!Definition] Transformacion Euclideana
>Una función $T : \mathbb{R}^n \to \mathbb{R}^n$ se llama **transformación euclidiana** de $\mathbb{R}^n$ si es de la forma $T(x) = Cx + u$, donde $C$ es una transformación ortogonal y $u \in \mathbb{R}^n$.
>La transformación euclidiana se dice **rígida** (o que **preserva la orientación**) si $C$ es una rotación, o sea, si $\det C = 1$.

>[!Proposition]
>Las transformaciones euclidianas de $\mathbb{R}^n$ preservan distancia.
>>[!Proof]-
>>$$ \|Tx - Ty\| = \|Cx + u - (Cy + u)\| = \|Cx - Cy\| = \|C(x - y)\| = \|x - y\|. $$

>[!Remark]
>Antes de enunciar el teorema que sigue, veamos que para derivar un producto de dos curvas matriciales vale una regla similar a la que usamos para derivar el producto de dos funciones.
>
>Sean $A : (a, b) \to \mathbb{R}^{n \times m}$ una función suave, es decir, $A_{i,j} : (a, b) \to \mathbb{R}$ es una función suave para todo $1 \le i \le n$, $1 \le j \le m$.
>Se define la función $A' : (a, b) \to \mathbb{R}^{n \times m}$ mediante
>$$ (A'(t))_{i,j} = (A_{i,j})'(t) $$
>(o sea, se deriva entrada por entrada).

>[!Theorem]
>Sea $\alpha : (a, b) \to \mathbb{R}^2$ una curva suave de rapidez unitaria y curvatura signada $k : (a, b) \to \mathbb{R}$. Sea $T : \mathbb{R}^2 \to \mathbb{R}^2$ una transformación euclidiana del plano y sea $\bar{\alpha} = T \circ \alpha$. Entonces $\bar{\alpha}$ tiene rapidez unitaria y la curvatura signada $\bar{k}$ de $\bar{\alpha}$ es $\pm k$, con $+$ si $T$ es rígida y $-$ si no.
>>[!Proof]-
>>1. Supongamos que $T(x) = Cx + u$ con $C$ ortogonal. Calculamos $$ \bar{\alpha}(t) = T(\alpha(t)) = C\alpha(t) + u. $$
>>2. Luego, $\bar{\alpha}'(t) = C\alpha'(t)$ para todo $t$ y así, $\|\bar{\alpha}'\| = \|C\alpha'\| = \|\alpha'\| = 1$, con lo cual $\bar{\alpha}$ tiene rapidez unitaria.
>>3. Ademas $\bar{\alpha}''(t) = C\alpha''(t)$. Entonces, si $I(x, y) = (-y, x)$, $$ \bar{k}(t) = \langle I(\bar{\alpha}'(t)), \bar{\alpha}''(t) \rangle = \langle I(C\alpha'(t)), C\alpha''(t) \rangle. \quad (7) $$
>>4. Como $C$ es ortogonal tiene la forma $$ \begin{pmatrix} \cos \theta & -\varepsilon \sin \theta \\ \sin \theta & \varepsilon \cos \theta \end{pmatrix}. $$ con $\varepsilon=\det(C)=\pm 1$ 
>>5. Ahora verificamos que $I$ conmuta o anticonmuta con $C$, dependiendo de si $\varepsilon = 1$ o $-1$. En efecto, $$ IC = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} \cos \theta & -\varepsilon \sin \theta \\ \sin \theta & \varepsilon \cos \theta \end{pmatrix} = \begin{pmatrix} -\sin \theta & -\varepsilon \cos \theta \\ \cos \theta & -\varepsilon \sin \theta \end{pmatrix}, $$ $$ CI = \begin{pmatrix} \cos \theta & -\varepsilon \sin \theta \\ \sin \theta & \varepsilon \cos \theta \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} -\varepsilon \sin \theta & -\cos \theta \\ \varepsilon \cos \theta & -\sin \theta \end{pmatrix}. $$
>>6. Luego $IC = \varepsilon CI$.
>>7. De 3. y usando que $C$ es rotar, si rotamos las dos componentes el producto interno no cambia. Resulta que $$ \bar{k}(t) = \langle I(C\alpha'(t)), C\alpha''(t) \rangle = \varepsilon \langle C(I\alpha'(t)), C\alpha''(t) \rangle = \varepsilon \langle I\alpha'(t), \alpha''(t) \rangle = \varepsilon k(t). $$

>[!Theorem]
>Sea $T : \mathbb{R}^n \to \mathbb{R}^n$ una función que preserva distancias, o sea,
>$$ \|Tx - Ty\| = \|x - y\| $$
>para todo $x, y \in \mathbb{R}^n$. Entonces $T$ es euclidiana, o sea, de la forma
>$$ T(x) = Cx + u, $$
>donde $C$ es ortogonal, y en particular, lineal.
>>[!Proof]-
>>8. Supongamos primero que $T(0) = 0$ y es una funcion que preserva distancias. Veamos que
>>	- $T$ Preserva normas
>>		1. $\|T(x)\| = \|T(x) - 0\| = \|T(x) - T(0)\| = \|x - 0\| = \|x\|$ (en la penúltima igualdad usamos que $T$ preserva distancias).
>>	- $T$ Preserva productos internos
>>		1. Sabemos que $\|Tx - Ty\|^2 = \|x - y\|^2$, o sea, $$\langle Tx - Ty, Tx - Ty \rangle = \langle x - y, x - y \rangle$$
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

^427a25

>[!Remark]
>Veamos a continuacion que como era de esperar la definicion de transformacion euclideana le da al origen un protagonismo que no tiene

>[!Proposition] Caso $n=1$
>Las transformaciones euclidianas de la recta real son traslaciones o reflexiones respecto de puntos en $\mathbb{R}$.
>> [!Proof]-
>> 1. Sabemos que $T(x) = \varepsilon x + u$, con $\varepsilon = \pm 1$ y $u \in \mathbb{R}$.
>> 2. Si $\varepsilon = 1$, $T$ es una traslación en $u$. 
>> 3. Veamos que si $\varepsilon = -1$, entonces $T$ es la reflexión en $u/2$. 
>> 4. En efecto notemos que $$ -\left(x - \frac{u}{2}\right) + \frac{u}{2} = -x + \frac{u}{2} + \frac{u}{2} = -x + u=T(x) $$
>> 5. Pero $-\left( x-\frac{u}{2} \right)+\frac{u}{2}$ es mover el origen a $\frac{u}{2}$ $x\mapsto x-\frac{u}{2}$ compuesto con hacer reflexion respecto del origen $x\mapsto -x$ compuesta con mover el origen a su punto original nuevamente $x\mapsto x+\frac{u}{2}$. Entonces esto es una reflexion respecto de $\frac{u}{2}$ 
>> [!Summary] Resumen de la prueba
>> Se analiza la forma general $T(x) = \pm x + u$. Si el coeficiente es $1$, es una traslación pura. Si es $-1$, la expresión se puede reorganizar para mostrar que es una reflexión simétrica respecto al punto medio del desplazamiento.

>[!Definition] Caso $n=2$
>Denotamos por $R_{z, \theta}$ la rotación en ángulo $\theta$ alrededor del punto $z \in \mathbb{R}^2$. Se obtiene de conjugar $R_\theta$ por la traslación $x \mapsto x + z$, o sea,
> $$ R_{z, \theta}(x) = R_\theta(x - z) + z = R_{\theta}(x)+z-R_{\theta}(z) =R_{\theta}(x)+b$$
> Osea rotar alrededor del punto $z$ es una transformacion euclidea 

^ff0d1a

>[!Remark]
> En el práctico se ve que toda transformación rígida del plano es una traslación o una rotación alrededor de algún punto.

>[!Definition] Caso $n=3$
>Un **tirabuzón** es la composición de una rotación alrededor de una recta fija en $\mathbb{R}^3$ con una traslación a lo largo de esa recta.
>1) Esas transformaciones conmutan.
>2) Tanto la rotación como la traslación pueden ser la identidad. En el primer caso, el tirabuzón es una traslación y en el segundo, una rotación.

>[!Theorem] Teorema de Chasles
>Toda transformación rígida de $\mathbb{R}^3$ es un tirabuzón.
>>[!Proof]-
>>1. Supongamos que la transformación rígida es $T$, dada por $T(x) = Cx + u$, donde $C$ es una rotación, es decir una transformación ortogonal con $\det C = 1$.
>>2. Consideramos solo el caso particular en que $$ C = \begin{pmatrix} R_\theta & 0 \\ 0 & 1 \end{pmatrix}, $$ donde $R_\theta$ es la rotación en ángulo $\theta$ en el plano $x$-$y$. En cierto sentido se trata del caso general, pues vimos que cualquier rotación tiene esa forma en cierta base ortonormal.
>>3. Escribimos $$ x = \begin{pmatrix} x' \\ a \end{pmatrix} \quad \text{y} \quad u = \begin{pmatrix} u' \\ b \end{pmatrix}, $$ donde $x', u' \in \mathbb{R}^2$ y $a, b \in \mathbb{R}$.
>>4. Si $R_\theta$ es la identidad, entonces $T$ es la traslación en $u$.
>>5. Si no, tenemos que $$ T(x) = \begin{pmatrix} R_\theta & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} x' \\ a \end{pmatrix} + \begin{pmatrix} u' \\ b \end{pmatrix} = \begin{pmatrix} R_\theta x' + u' \\ a + b \end{pmatrix}. $$
>>6. Luego, $x' \mapsto R_\theta x' + u'$ es una transformación rígida del plano que no es una traslación. Sabemos que es la rotación en el mismo ángulo $\theta$ alrededor de cierto $z \in \mathbb{R}^2$. Entonces $$ T(x) = \begin{pmatrix} R_{z, \theta} x' \\ a + b \end{pmatrix} = \begin{pmatrix} R_\theta (x' - z) + z \\ a \end{pmatrix} + \begin{pmatrix} 0 \\ b \end{pmatrix}. $$
>>7. El primer término representa la rotación alrededor de la recta vertical $\{z\} \times \mathbb{R}$ y el segundo, la traslación vertical en $b$. $\square$
>> [!Summary] Resumen de la prueba
>> Se descompone la transformación rígida en una parte de rotación y otra de traslación. Utilizando una base adecuada, la rotación se reduce a un plano, y se demuestra que el movimiento total equivale a rotar sobre un eje y desplazarse simultáneamente a lo largo de este, que es la definición de tirabuzón.

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

>[!Remark]
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

>[!Definition] Parametrizacion
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
>>	2. Sea $\alpha(t) = q + tz$ una curva en $U$ (entonces es regular) , definida para $t$ suficientemente pequeño, así $\alpha(t) \in U$. 
>>	3. Por hipótesis $\varphi \circ \alpha$ es regular. Entonces $$ 0 \ne (\varphi \circ \alpha)'(0) = d\varphi_{\alpha(0)}(\alpha'(0)) = d\varphi_{q}(z), $$ como deseábamos.

>[!Remark]
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
>El subconjunto $S$ está cubierto por una sola carta coordenada. 
>>[!Proof]-
>>4. Sean $U = A$ y $$ \varphi : U \to \mathbb{R}^3, \quad \varphi(u, v) = (u, v, f(u, v)). $$
>>5. Verificamos (1): $\varphi$ es inyectiva pues $(u, v, f(u, v)) = (x, y, f(x, y))$ solo si $(u, v) = (x, y)$. Calculamos $$ [d\varphi_{(u,v)}]_{\text{can}} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ f_u(u, v) & f_v(u, v) \end{pmatrix}, $$que tiene rango 2 porque, por ejemplo, $\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = 1 \ne 0$.
>>6. Para verificar (2) podemos tomar $\mathcal{V} = U \times \mathbb{R}$, que es un subconjunto abierto de $\mathbb{R}^3$, y $\Phi(x, y, z) = (x, y)$. 
>>7. Se cumple que $$ \Phi(\varphi(u, v)) = \Phi(u, v, f(u, v)) = (u, v). $$
>>8. La comprobación del siguiente hecho queda como ejercicio: $$ \varphi(U) = \mathcal{V} \cap S. $$
>>9. Como $U=A$ entonces $S\subseteq \mathcal{V}$ entonces es ver que $\varphi(U)=S$ que es evidente por definicion  
>> [!Summary] Resumen de la prueba
>> Se construye una parametrización natural proyectando sobre el plano del dominio. La inyectividad de la diferencial se garantiza porque la matriz jacobiana contiene una matriz identidad $2\times 2$. La existencia de la inversa suave $\Phi$ se asegura mediante la proyección ortogonal sobre las primeras dos coordenadas.

>[!Remark]
>El punto (2) de la definición de superficie regular requiere la existencia de inversas a derecha continuas locales $\Phi$. Las necesitamos para excluir subconjuntos como el siguiente:
>![[Pasted image 20251122145538.png]]

>[!Example] Un ejemplo de algo que no es superficie regular
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

^3d284b

>[!Theorem] Teorema de la superficie implícita
>Sea $F : A \to \mathbb{R}$ una función suave, donde $A$ es un subconjunto abierto de $\mathbb{R}^3$. Sea $y \in \text{Imagen}(F)$ y sea
>$$ S = F^{-1}(\{y\}) = \{q \in A \mid F(q) = y\} $$
>el conjunto de nivel $y$ de $F$. Si $(\nabla F)(q) \ne 0$ para todo $q \in S$, entonces $S$ es una superficie regular.
>>[!Proof]-
>>6. Sea $q \in S$. Por hipótesis, $$ (\nabla F)(q) = (F_x(q), F_y(q), F_z(q)) \ne 0. $$
>>7. Luego, al menos una de las derivadas parciales de $F$ en $q$ es no nula, digamos, $F_z(q) \ne 0$.
>>8. Por el Teorema de la Función Implícita existen un subconjunto abierto $U$ de $\mathbb{R}^2$, una función suave $f : U \to \mathbb{R}$ y $\varepsilon > 0$ tales que si $\mathcal{V} = U \times (q_3 - \varepsilon, q_3 + \varepsilon)$ (subconjunto abierto de $\mathbb{R}^3$), entonces se cumple que $$ S \cap \mathcal{V} = \{(x, y, f(x, y)) \mid (x, y) \in U\}. $$ Y ademas $(q_{1},q_{2},q_{3})=(q_{1},q_{2},f(q_{1},q_{2}))\in S\cap\mathcal{V}$ 
>>9. Si $F_x(q) \ne 0$ o $F_y(q) \ne 0$, se cambian los roles de $x, y, z$ y $S$, cerca de $q$, resulta el gráfico de una función de $(y, z)$ o $(x, z)$.
>>10. Para mostrar que $S$ es una superficie regular, para cada $q \in S$ tomamos $$ \varphi : U \to \mathbb{R}^3, \quad \varphi(u, v) = (u, v, f(u, v)), $$ con $U$ y $f$ como arriba.
>>11. La verificación de los apartados (1) y (2) de la definición de superficie regular es la misma de que los gráficos de funciones son superficies regulares, con $\mathcal{V}$ también como arriba.
>>12. Osea que para cada $q\in S$ tengo un entorno donde puedo armar una carta. Entonces $S$ es superficie 
>> [!Summary] Resumen de la prueba
>> El requisito de gradiente no nulo permite aplicar el Teorema de la Función Implícita del cálculo avanzado. Esto garantiza que, localmente, la superficie se puede expresar como el gráfico de una función suave de dos variables, lo cual ya se demostró que constituye una superficie regular.

^14271e

>[!Proposition]
>Sea $S$ una superficie regular y sea $p \in S$. Si una función $\varphi : U \to \mathbb{R}^3$ satisface las condiciones del apartado (1) de la definición de superficie regular, entonces satisface también las del (2).
>>[!Proof]
>>No damos la prueba.

^595bfc

>[!Remark]
>- Se usa para obtener cartas coordenadas cuando por alguna razón ya sabemos que el subconjunto es una superficie regular, por ejemplo, a través del Teorema de la Superficie Implícita, o porque ya hemos hemos encontrado algunas cartas que cubren toda la superficie y para ellas hemos verificado (1) y (2).
>- “Un subconjunto bueno no puede tener cartas malas”.

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
>>13. Sean $p = (0, 0, -1)$ y $q = (0, 0, 1)$. Supongamos que existe una curva $\alpha$ como en la definición de superficie conexa. Tenemos que $$ \alpha(t) = (x(t), y(t), z(t)), $$ para ciertas funciones continuas $x, y, z : [a, b] \to \mathbb{R}$.
>>14. Como $z$ es continua, $z(a) = -1$ y $z(b) = 1$, por el Teorema de los Valores Intermedios existe $t_o \in [a, b]$ tal que $z(t_o) = 0$.
>>15. Entonces $\alpha(t_o) = (x(t_o), y(t_o), 0)$.
>>16. Como $\alpha(t_o) \in S$ resulta que $0 - x(t_o)^2 - y(t_o)^2 = 1$, con lo que llegamos a un absurdo.
>> [!Summary] Resumen de la prueba
>> Se utiliza el Teorema de los Valores Intermedios aplicado a la función altura $z$. Si existiera una curva que une las dos hojas del hiperboloide (una con $z \ge 1$ y otra con $z \le -1$), debería pasar por $z=0$, lo cual es imposible según la ecuación de la superficie.

# Funciones suaves definidas en superficies

>[!Remark]
>Las funciones suaves del cálculo de varias variables están definidas en subconjuntos abiertos de $\mathbb{R}^n$.

>[!Lemma] Lema del diagrama triangular
>Sea $S$ una superficie regular y sea $\varphi : U \to \mathbb{R}^3$ una carta coordenada de $S$. Sean $A$ un subconjunto abierto de $\mathbb{R}^m$ y $f : A \to \mathbb{R}^3$ una función suave tal que $f(A) \subset \varphi(U)$. Entonces $\varphi^{-1} \circ f : A \to \mathbb{R}^2$ es suave.
>![[Pasted image 20251122172334.png]]
>>[!Proof]-
>>1. Recordemos [[Definiciones#^2d9e1d]] nos dice que $\varphi(U)=\mathcal{V}\cap S$ y que $\Phi$ está definida en $\mathcal{V}$ entonces esta definida en $\varphi(U)$ con lo cual es logico hablar de $\varphi^{-1}$ en $f(A)\subseteq \varphi(U)$       
>>2. Como $\varphi : U \to \mathbb{R}^3$ es una carta coordenada, existen un abierto $\mathcal{V}$ de $\mathbb{R}^3$ y una función suave $\Phi : \mathcal{V} \to \mathbb{R}^2$ tal que $\Phi \circ \varphi = \text{id}_U$.
>>3. Veamos que $$ \varphi^{-1} \circ f = \Phi \circ f $$ con lo cual $\varphi^{-1} \circ f$ es suave, por ser composición de funciones suaves.
>>4. En efecto, debemos ver que $$ \varphi^{-1}(f(z)) = \Phi(f(z)) $$ para todo $z \in A$.
>>5. Como $f(A) \subset \varphi(U)$, tenemos que $f(z) = \varphi(q)$ para cierto $q \in U$.
>>6. Entonces la igualdad anterior equivale a $\varphi^{-1}(\varphi(q)) = \Phi(\varphi(q))$, que es verdadera para todo $q \in U$ (pues ambas son iguales a $q$).
>> [!Summary] Resumen de la prueba
>> La suavidad de la inversa de la carta $\varphi^{-1}$ (cuando se compone adecuadamente) se hereda de la función $\Phi$ garantizada por la definición de superficie regular. Al ser $f$ suave al espacio ambiente y $\Phi$ suave, su composición también lo es.

^408c1f

>[!Remark]
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
>>3. Así resulta que $U' = \varphi^{-1}(\mathcal{U} \cap \mathcal{V})$ y que este es un subconjunto abierto de $\mathbb{R}^2$. Notar que $\varphi ^{-1}(\mathcal{U}\cap\mathcal{V})=\varphi ^{-1}(S\cap\mathcal{U}\cap\mathcal{V})$ por que $\varphi(U)\subseteq S$ 
>>4. Con $V'$ se procede análogamente.
>>5. Finalmente, $\psi^{-1} \circ \varphi$ es suave por [[Definiciones#^408c1f]] recordando que $\varphi$ es suave por ser carta de coordenadas 
>> [!Summary] Resumen de la prueba
>> Se demuestra que el cambio de coordenadas es la composición de una carta con la inversa de otra. Aplicando el lema del diagrama triangular, se concluye que esta transición entre mapas es suave, asegurando que la estructura diferenciable de la superficie es consistente.

>[!Definition] Suavidad para funciones con superficie en dominio
>Sea $S\subseteq \mathbb{R}^{3}$ una superficie regular y sea $p \in S$. Una función $f : S \to \mathbb{R}^n$ se dice **suave en** $p$ si existe una carta coordenada $\varphi : U \to \mathbb{R}^3$ de $S$ con $p \in \varphi(U)$ tal que $f \circ \varphi : U \to \mathbb{R}^n$ es suave en $\varphi^{-1}(p)$.
>La función $f$ se dice **suave** si es suave en $p$ para todo $p \in S$.

>[!Proposition] Restriccion de suave a superficie es suave
>Sea $S$ una superficie regular contenida en un subconjunto abierto $A$ de $\mathbb{R}^3$ y sea $F : A \to \mathbb{R}^n$ una función suave. Entonces $F|_S : S \to \mathbb{R}^n$ es suave. 
>>[!Proof]-
>>En efecto, sea $p \in S$ y sea $\varphi$ un sistema coordenado cuya imagen lo contenga. Como $S \subset A$,$$ F|_S \circ \varphi = F \circ \varphi, $$que es la composición de funciones suaves.

>[!Example]- Ejemplos de funciones suaves
>- Un caso particular se da cuando $A = \mathbb{R}^3$ y $F$ es la **función altura** respecto de un vector unitario $u \in \mathbb{R}^3$, es decir $F(q) = \langle q, u \rangle$.
>- Sea $S$ una superficie regular y sea $\varphi : U \to \mathbb{R}^3$ una carta coordenada de $S$. Tenemos que $\varphi(U)$ también es una superficie regular (en el práctico se ve que la intersección de una superficie regular con un abierto de $\mathbb{R}^3$ es una superficie regular). Resulta que $\varphi^{-1} : \varphi(U) \to \mathbb{R}^2$ es suave. En efecto, $\varphi^{-1} \circ \varphi = \text{id}|_U : U \to U \subset \mathbb{R}^2$ es suave. Resumiendo: Las funciones coordenadas son suaves.

>[!Proposition]
>Supongamos que existe una carta coordenada $\varphi$ como en la definición (osea que cumple $f\circ \varphi$ es suave) y que $\psi : V \to \mathbb{R}^3$ es una carta coordenada de $S$ con $p \in \psi(V)$. Entonces $f \circ \psi$ es suave en $\psi^{-1}(p)$.
>>[!Proof]-
>>6. Se deduce de que el cambio de coordenadas es suave. En algún abierto de $\mathbb{R}^2$ que contiene a $\varphi^{-1}(p)$ se cumple que
>>$$ f \circ \psi = f \circ (\varphi \circ \varphi^{-1}) \circ \psi = (f \circ \varphi) \circ (\varphi^{-1} \circ \psi), $$
>>que es la composición de funciones suaves.

^1bccd0

>[!Proposition]
>Sean $M$ y $N$ dos superficies regulares y sea $F : M \to \mathbb{R}^3$ una función suave tal que $F(M) \subset N$. Entonces para todo $p \in M$ existen sistemas coordenados $\varphi : U \to M$ y $\psi : V \to N$ de $M$ y $N$ respectivamente tales que $p \in \varphi(U)$, $F(\varphi(U)) \subset \psi(V)$ y $\psi^{-1} \circ F \circ \varphi$ es suave.
>>[!Proof]- Idea de la prueba
>>3. Como $\psi$ es un sistema coordenado, tenemos que $\psi(V) = N \cap \mathcal{V}$, donde $\mathcal{V}$ es un subconjunto abierto de $\mathbb{R}^3$. 
>>4. Sea $\bar{\varphi} : \bar{U} \to M$ un sistema coordenado con $p \in \bar{\varphi}(\bar{U})$. Como $F$ es suave, la composicion con cualquier carta es suave [[Definiciones#^1bccd0]]
>>5. Entonces $F \circ \bar{\varphi} : \bar{U} \to \mathbb{R}^3$ es suave, y en particular es continua, resulta que $U :=(F \circ \bar{\varphi})^{-1}(\psi (\mathcal{V}))$ es abierto en $\bar{U}$. 
>>6. Podemos tomar $\varphi = \bar{\varphi}|_U$, que es un sistema coordenado de $M$ que va a cumplir que $F(\varphi(U)) \subset \psi(V)$ y satisface que $\psi^{-1} \circ F \circ \varphi$ es suave, por el lema del diagrama triangular.

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
>- El cuadrado $M = \{(x, y, 0) \mid |x| < \pi/2, |y| < \pi/2\}$ y el plano $N = \mathbb{R}^2 \times \{0\}$ son difeomorfos.
>>[!Proof]-
>>13. Consideremos la aplicación $F : M \to N$ dada por $F(x, y, z) = (\tan x, \tan y, 0)$.
>>14. Esta función es suave pues es la restricción de la función $\tilde{F}(x, y, z) = (\tan x, \tan y, 0)$ definida en el abierto $(-\pi/2, \pi/2) \times (-\pi/2, \pi/2) \times \mathbb{R}$ de $\mathbb{R}^3$.
>>15. Su inversa es $G : N \to M$ dada por $G(u, v, w) = (\arctan u, \arctan v, 0)$.
>>16. La función $G$ es suave pues es la restricción de $\tilde{G}(u, v, w) = (\arctan u, \arctan v, 0)$ definida en todo $\mathbb{R}^3$.
>>17. Claramente $F$ y $G$ son inversas una de la otra debido a que $\tan(\arctan t) = t$ para todo $t \in \mathbb{R}$ y $\arctan(\tan s) = s$ para todo $s \in (-\pi/2, \pi/2)$.
>- Sea $S^2$ la esfera de radio 1 centrada en el origen y sean $p_n = (0, 0, 1)$ y $p_s = (0, 0, -1)$ los polos sur y norte, respectivamente. Sean $M = S^2 - \{p_n, p_s\}$ y $C$ el cilindro $\{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 = 1\}$. Veamos que $M$ y $C$ son difeomorfas. 
>>[!Proof]-
>>18. Buscamos un difeomorfismo $f : C \to M$. Sea $$ f : C \to M, \quad f(q) = \frac{q}{\|q\|}, $$cuya imagen está contenida en $S^2$ y no contiene ninguno de los polos. 
>>19. La función $f$ es suave porque es la restricción al cilindro de la función $F : \mathbb{R}^3 - \{(0, 0, 0)\} \to \mathbb{R}^3$ definida por la misma fórmula (que es suave en ese dominio).
>>20. Veamos que $f$ tiene inversa suave. La proponemos de la forma $$ g : M \to C, \quad g(x, y, z) = \lambda(x, y, z)(x, y, z). $$Para que llegue a $C$ necesitamos que $$ (\lambda(x, y, z)x)^2 + (\lambda(x, y, z)y)^2 = 1. $$Equivalentemente, $\lambda(x, y, z) = 1/\sqrt{x^2 + y^2}$. 
>>21. Así, consideramos$$ g(x, y, z) = \frac{1}{\sqrt{x^2 + y^2}}(x, y, z). $$
>>22. Dejamos como ejercicio verificar que $g$ es suave (por ser la restricción de la función suave $G : A \to \mathbb{R}^3$ definida por la misma fórmula en un abierto $A$ de $\mathbb{R}^3$, ¿quién es $A$?) y que es la inversa de $f$.
>- **Torsión del cilindro (Cylinder Twist):** Sea $C$ el cilindro $x^2 + y^2 = 1$. Consideremos la aplicación $F : C \to C$ que "retuerce" el cilindro un ángulo igual a la altura $z$. En coordenadas cilíndricas, si un punto es $(\cos s, \sin s, t)$, su imagen es $(\cos(s+t), \sin(s+t), t)$.
>>[!Proof]-
>>23. Definimos $F$ explícitamente usando la parametrización $\varphi(s, t) = (\cos s, \sin s, t)$. Si $p = \varphi(s, t)$, entonces $F(p) = \varphi(s+t, t)$.
>>24. **Buena definición:** Debemos ver que $F(p)$ no depende de la elección de $(s, t)$. Si $\varphi(s, t) = \varphi(s', t')$, entonces $t = t'$ y $s' = s + 2k\pi$ para algún $k \in \mathbb{Z}$. Luego
>>    $$ F(\varphi(s', t')) = \varphi(s' + t', t') = \varphi(s + 2k\pi + t, t) = (\cos(s+t+2k\pi), \sin(s+t+2k\pi), t) = \varphi(s+t, t) = F(\varphi(s, t)). $$
>>25. **Suavidad:** Podemos escribir $F$ en coordenadas cartesianas como restricción de una función suave en $\mathbb{R}^3$. Si $p = (x, y, z) \in C$, entonces $x = \cos s, y = \sin s, z = t$.
>>    $$ F(x, y, z) = (\cos(s+z), \sin(s+z), z) = (\cos s \cos z - \sin s \sin z, \sin s \cos z + \cos s \sin z, z) $$
>>    $$ = (x \cos z - y \sin z, x \sin z + y \cos z, z). $$
>>    Esta expresión define una función suave $\tilde{F} : \mathbb{R}^3 \to \mathbb{R}^3$, por lo que su restricción $F$ a la superficie regular $C$ es suave.
>>26. **Inversa:** La inversa $G : C \to C$ deshace la torsión, es decir, rota un ángulo $-z$.
>>    $$ G(x, y, z) = (x \cos z + y \sin z, -x \sin z + y \cos z, z). $$
>>    Claramente $G$ es suave (por el mismo argumento) y se verifica fácilmente que $G \circ F = \text{id}_C$ y $F \circ G = \text{id}_C$.
>>    Por lo tanto, $F$ es un difeomorfismo.
>>27. La inversa está dada por $F^{-1}(\varphi(s, t)) = \varphi(s - t, t)$. Los mismos argumentos que se aplicaron para $\varphi$ sirven para mostrar que $F^{-1}$ está bien definida y es suave. Se verifica fácilmente que $F \circ F^{-1} = F^{-1} \circ F = \text{id}_C$.

# Plano Tangente

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
>>	3. Así $$ \alpha(t) = \varphi(u(t), v(t)). $$
>>	4. Por la regla de la cadena (multiplicando la matriz $D\varphi$ con el vector $(u'(0),v'(0))$) , $$ \alpha'(0) = \varphi_u(u(0), v(0))u'(0) + \varphi_v(u(0), v(0))v'(0). $$ (notar $\varphi_{u}$ es un vector)(esto prueba tambien que es base) 
>>	5. Ademas por 1. $\varphi(q)=p=\alpha (0)=\varphi(u(0),v(0))$ entonces $q=(u(0),v(0))$  $$x = \alpha'(0) = \varphi_u(q)u'(0) + \varphi_v(q)v'(0)$$que pertenece a la imagen de $d\varphi_q$, pues $\varphi_u(q) = d\varphi_q(e_1)$ y $\varphi_v(q) = d\varphi_q(e_2)$.
>>- $\supset$
>>	1. Dado $(a, b) \in \mathbb{R}^2$, escribimos $$ d\varphi_q(a, b) = d\varphi_q\left(\frac{d}{dt}\Big|_0 (q + t(a, b))\right) = \frac{d}{dt}\Big|_0 \varphi(q + t(a, b)) = \alpha'(0), $$donde $\alpha(t) = \varphi(q + t(a, b))$, que es una curva suave en $S$ con $\alpha(0) = \varphi(q) = p$ (Notar $d\varphi_{q}$ es la diferencial y usamos regla de cadena notar que diferencial de $\varphi$ evaluada $q+t(a,b)=\alpha (t)$ evaluada en $0$ que es $q$ todo eso multiplicado por $\frac{d}{dt}\Big|_0 (q + t(a, b))$   pero multiplicar matriz por vector es lo mismo que evaluar la transformacion lineal dada por la matriz)  
>>- Base
>>	1. Notar que $d\varphi_{q}(e_{1}),d\varphi_{q}(e_{2})$ es base del $T_{p}S$ por que por ser lineal $d\varphi_{q}$ manda vectores li en vectores li y ademas $T_{p}S$ tiene dimension 2.
>> [!Summary] Resumen de la prueba
>> Se muestra que cualquier vector tangente (velocidad de una curva) puede expresarse como combinación lineal de las derivadas parciales de la carta mediante la regla de la cadena. Esto establece que el espacio tangente es la imagen de la diferencial de la parametrización.

^095a44

>[!Remark]
>A pesar de que $T_pS$ es un subespacio de $\mathbb{R}^3$, se acostumbra dibujarlo con el cero apoyado en $p$.

>[!Definition]
>El **plano tangente afín** a $S$ en $p$ es $p + T_pS = \{p + u \mid u \in T_pS\}$.

>[!Definition] Valor regular
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
>>- $\subset$) 
>>	1. Sea $x \in T_pS$. Sea $\alpha : (-\varepsilon, \varepsilon) \to S$ una curva suave tal que $\alpha(0) = p$, y $\alpha'(0) = x$. 
>>	2. Veamos que $x \in \ker(dF_p)$.Por la regla de la cadena,$$ dF_p(x) = dF_p(\alpha'(0)) = \frac{d}{dt}\Big|_0 F(\alpha(t)) = \frac{d}{dt}\Big|_0 y = 0. $$
>>- $\supset$) 
>>	1. Sabemos de la proposición anterior que $T_pS$ es un subespacio de dimensión 2.
>>	2. Además, acabamos de mostrar que está contenido en $\ker(dF_p)$. Entonces resta solo mostrar que $\ker(dF_p)$ tiene dimensión 2.
>>	3. Como $y$ es un valor regular, $dF_p : \mathbb{R}^3 \to \mathbb{R}$ es una transformación lineal no nula, en particular su imagen es $\mathbb{R}$. 
>>	4. Así,
>>$$ \dim(\ker(dF_p)) = 3 - \dim(\text{Imagen}(dF_p)) = 3 - 1 = 2, $$

>[!Example]-
>Sea $S$ la esfera de radio 1 centrada en el origen y sea $p \in S$. Entonces $$ T_pS = p^{\perp}. $$
>>[!Proof]
>>1. En efecto, $S = F^{-1}(\{1\})$, donde 1 es un valor regular de $F(x, y, z) = x^2 + y^2 + z^2$.
>>2. Calculamos $$ \nabla F(x, y, z) = (2x, 2y, 2z). $$
>>3. Luego $(\nabla F)_p = 2p \ne 0$ para todo $p \in S$ y así, $(\nabla F)_p^{\perp} = (2p)^{\perp} = p^{\perp}$.

>[!Definition] Diferencial
>Sea $f : S \to \mathbb{R}^n$ una función suave y sea $p \in S$. Se define $df_p : T_pS \to \mathbb{R}^n$ mediante
>$$ df_p(\alpha'(0)) = (f \circ \alpha)'(0) = \frac{d}{dt}\Big|_0 f(\alpha(t)), $$
>donde $\alpha : (-\varepsilon, \varepsilon) \to S$ es una función suave con $\alpha(0) = p$.

>[!Proposition]
>La definición es buena y $df_p$ es lineal; se llama la **diferencial** de $f$ en $p$.
>>[!Proof]-
>>4. Sean $\alpha, \beta : (-\varepsilon, \varepsilon) \to S$ dos curvas suaves con $$ \alpha(0) = \beta(0) = p \quad \text{y} \quad \alpha'(0) = \beta'(0). $$
>>5. Debemos mostrar que $$ (f \circ \alpha)'(0) = (f \circ \beta)'(0). $$
>>6. Sea $\varphi : U \to \mathbb{R}^3$ un sistema coordenado de $S$ con $p \in \varphi(U)$, digamos, $p = \varphi(u_o, v_o)$.
>>7. Achicando $\varepsilon$ si fuera necesario, tenemos que las trayectorias de $\alpha$ y $\beta$ están contenidas en $\varphi(U)$ y $$ \alpha(t) = \varphi(u(t), v(t)), \quad \beta(t) = \varphi(x(t), y(t)), $$donde $u, v, x, y : (-\varepsilon, \varepsilon) \to \mathbb{R}$ son funciones suaves, por el lema del diagrama triangular, y satisfacen $x(0) = u(0) = u_o$ e $y(0) = v(0) = v_o$. 
>>8. Calculamos $$ \alpha'(0) = \varphi_u(u_o, v_o)u'(0) + \varphi_v(u_o, v_o)v'(0), $$ $$ \beta'(0) = \varphi_u(u_o, v_o)x'(0) + \varphi_v(u_o, v_o)y'(0). $$
>>9. Como $\alpha'(0) = \beta'(0)$, resulta que $$ u'(0) = x'(0) \quad \text{y} \quad v'(0) = y'(0). \quad (9) $$
>>10. Ahora calculamos $$ (f \circ \alpha)'(0) = \frac{d}{dt}\Big|_0 (f \circ \varphi)(u(t), v(t)) = (f \circ \varphi)_u(u_o, v_o)u'(0) + (f \circ \varphi)_v(u_o, v_o)v'(0), $$que por (9) es igual a $(f \circ \beta)'(0)$, como deseábamos. Así, $df_p$ está bien definida.
>>11. Veamos ahora que $df_p$ es lineal. Llamando $a = u'(0)$ y $b = v'(0)$, tenemos por lo anterior que $$ df_p(a\varphi_u(u_o, v_o) + b\varphi_v(u_o, v_o)) = a(f \circ \varphi)_u(u_o, v_o) + b(f \circ \varphi)_v(u_o, v_o), $$con lo cual $df_p$ es lineal.

>[!Proposition] Matriz diferencial entre superficies
>Sea $M$ superficie y $f : M \to \mathbb{R}^3$ una función suave tal que $f(M)$ está contenida en una superficie $N$ y sea $p \in M$. Entonces
>$$ df_p : T_pM \to T_{f(p)}N $$
>y si $\varphi : U \to \mathbb{R}^3$ y $\psi : V \to \mathbb{R}^3$ son sistemas coordenados de $M$ y $N$, alrededor de $p$ y $f(p)$ respectivamente, con $f(\varphi(U)) \subset \psi(V)$, se cumple que
>$$ [df_p]_{\{\varphi_u(\bar{p}), \varphi_v(\bar{p})\}, \{\psi_x(\bar{q}), \psi_y(\bar{q})\}} = \left[ d(\psi^{-1} \circ f \circ \varphi)_{\bar{p}} \right]_{\text{can}}, \quad (10) $$
>donde $\varphi(\bar{p}) = p$ y $\psi(\bar{q}) = f(p)$.
>O sea, la matriz de la diferencial de una función entre superficies, en un punto de la superficie de partida, respecto de bases formadas por vectores coordenados, es igual a la matriz jacobiana de la función puesta en coordenadas, en el punto correspondiente del mapa de partida.
>>[!Proof]-
>>1. La primera afirmación se deja como ejercicio.
>>2. Para mostrar la segunda, escribimos $$ (\psi^{-1} \circ f \circ \varphi)(u, v) = (x(u, v), y(u, v)). \quad (11) $$
>>3. Como $\varphi_u(\bar{p}) = \frac{\partial \varphi}{\partial u}(\bar{p}) = \frac{d}{dt}\Big|_0 \varphi(\bar{p} + te_1)$, tenemos que $$ df_p(\varphi_u(\bar{p})) = \frac{d}{dt}\Big|_0 (f(\varphi(\bar{p} + te_1))) = (f \circ \varphi)_u(\bar{p}). $$
>>4. Pero $f(\varphi(u, v)) = \psi(x(u, v), y(u, v))$ por $(11)$ luego, por la regla de la cadena en varias variables, $$ df_p(\varphi_u(\bar{p})) = \psi_x(\bar{q})x_u(\bar{q}) + \psi_y(\bar{q})y_u(\bar{q}). $$
>>5. Entones en paso 3. tomamos $df_{p}$ y lo evaluamos en la primera coordenada de entrada de la base $\varphi_{u}(\bar{p})$ y en el paso 4. escribimos ese resultado en la base de salida. 
>>6. Por lo tanto la primera columna de $[df_p]_{\{\varphi_u(\bar{p}), \varphi_v(\bar{p})\}, \{\psi_x(\bar{q}), \psi_y(\bar{q})\}}$ es igual a $(x_u(\bar{q}), y_u(\bar{q}))^t$. 
>>7. Pero $(x_u(\bar{q}), y_u(\bar{q}))^t$ es trivialmente la primera columna de $\left[ d(\psi^{-1} \circ f \circ \varphi)_{\bar{p}} \right]_{\text{can}}$
>>8. Con argumentos similares se ve que las segundas columnas de las matrices en (10) también coinciden

^717add

>[!Definition] Punto critico
>Sea $f : S \to \mathbb{R}$ una función suave definida en una superficie $S$. Un punto $p \in S$ se dice **crítico** para $f$ si $df_p = 0$ (o sea, $df_p$ es la transformación lineal nula).

>[!Example]- Ejemplo de punto critico
>Sea $h : S \to \mathbb{R}$ la función altura respecto del vector unitario $u \in \mathbb{R}^3$, definida por
>$$ h(q) = \langle q, u \rangle. $$
>Un punto $p \in S$ es crítico para $h$ si y solo si $T_pS \perp u$. Esto resulta de que
>$$ dh_p(X) = \langle X, u \rangle $$
>para todo $X \in T_pS$: Si $X = \alpha'(0)$ para una curva suave $\alpha : (-\varepsilon, \varepsilon) \to S$ con $\alpha(0) = p$, tenemos que
>$$ dh_p(X) = dh_p(\alpha'(0)) = \frac{d}{dt}\Big|_0 h(\alpha(t)) = \frac{d}{dt}\Big|_0 \langle \alpha(t), u \rangle = \langle \alpha'(0), u \rangle = \langle X, u \rangle. $$

# El hessiano de una función en un punto crítico

>[!Remark]
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

>[!Remark]
>En el práctico se ve que si $p$ es crítico para $f$, entonces el hessiano de $f$ en $p$,
>$$ \text{Hess}_p(f) : T_pS \to \mathbb{R}, $$
>está **bien definido** por
>$$ \text{Hess}_p(f)(u) = (f \circ \alpha)''(0), $$
>donde $\alpha$ es una curva suave cualquiera en $S$ con $\alpha(0) = p$ y $\alpha'(0) = u$.

>[!Theorem] Teorema de la función inversa
>Sea $F : A \to \mathbb{R}^n$ una función suave definida en un subconjunto abierto $A$ de $\mathbb{R}^n$ y sea $p \in A$. Si $dF_p$ es un isomorfismo, entonces existe un abierto $U$ alrededor de $p$ tal que $F(U)$ es abierto y $F|_U : U \to F(U)$ es biyectiva y tiene inversa suave.

^3e597f

>[!Remark]
>Considerando que en dimension finita las transformaciones lineal isomorfas son biyectibas. El teorema, de manera informal, implica que si $F$ es infinitesimalmente biyectiva entonces $F$ es localmente biyectiva.

>[!Theorem] Teorema de la función inversa para superficies
>Sea $f : M \to N$ una función suave entre superficies y sea $p \in M$. Si $df_p : T_pM \to T_{f(p)}N$ es un isomorfismo, entonces existen subconjuntos abiertos $\mathcal{U}$ y $\mathcal{V}$ de $\mathbb{R}^3$ alrededor de $p$ y $f(p)$, respectivamente, tales que
>$$ f|_{M \cap \mathcal{U}} : M \cap \mathcal{U} \to N \cap \mathcal{V} $$
>es un difeomorfismo.
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
>Si $f : M \to N$ es una biyección suave y $df_p : T_pM \to T_{f(p)}N$ es un isomorfismo para todo $p \in M$, entonces $f^{-1}$ es suave. La justificación queda como ejercicio.
>>[!Proof]-
>>1. Como $f$ biyectiva dado $q\in N$ existe unico $p \in M$ tal que $f(p)=q$   
>>2. Como $df_{p}$ es iso entonces tenemos $f|_{M \cap \mathcal{U}} : M \cap \mathcal{U} \to N \cap \mathcal{V}$ difeomorfismo por [[Definiciones#^2e965b]] (obviamente aca $q\in N\cap \mathcal{V}$) 
>>3. Por ser difeo su inversa $(f|_{M\cap \mathcal{U}})^{-1}$ es suave 
>>4. Como $f$ es biyectiva osea por unicidad de inversa $(f|_{M\cap \mathcal{U}})^{-1}=f^{-1}|_{N\cap\mathcal{V}}$ 
>>5. Entonces mostramos que $f^{-1}$ es suave localmente para un entorno de $q$ y esto lo podemos hacer para cualquier $q$. Entonces $f^{-1}$ es suave   

^409ff8

# Áreas de regiones de superficies contenidas en abiertos coordenados

>[!Theorem] Teorema del cambio de variables
>Sea $U$ un subconjunto abierto de $\mathbb{R}^n$ y sea $h : U \to \mathbb{R}^n$ una función suave tal que $\det(dh_q) \neq 0$ para todo $q \in U$. Sea $V = h(U)$, que es un subconjunto abierto de $\mathbb{R}^n$ ([[Definiciones#^3e597f]]), y sea $f : V \to \mathbb{R}$ una función suave. Sean $A$ un subconjunto cerrado y acotado contenido en $U$ y $B = h(A)$. Entonces
>$$ \int_A (f \circ h) |\det(dh_q)| = \int_B f. $$

^17a44b

>[!Definition] Area de superficie regular
>Sea $S$ una superficie regular, sea $\psi : V \to S$ un sistema coordenado de $S$ y sea $B$ un subconjunto cerrado y acotado contenido en $V$. Se define
>$$ \text{área}(\psi(B)) = \int_B \|\psi_u(u, v) \times \psi_v(u, v)\| \, du \, dv. $$
>(Recordar que $\|X \times Y\|$ es el área del paralelogramo en $\mathbb{R}^3$ generado por $X$ e $Y$.)

>[!Proposition]
>El área de $\psi(B)$ está bien definida.
>>[!Proof]-
>>1. Supongamos que $\varphi : U \to S$ es un sistema coordenado de $S$ tal que $\psi(B) \subset \varphi(U)$ y que $\psi(B) = \varphi(A)$.
>>2. Llamamos $h(x,y) = \psi^{-1} \circ \varphi = (h^1(x,y), h^2(x,y))$. ![[Pasted image 20251128192025.png]]
>>3. Debemos calcular
>>$$ \text{área}(\varphi(A)) = \int_A \|\varphi_x(x, y) \times \varphi_y(x, y)\| \, dx \, dy. $$
>>4. Por 2. $\varphi(x,y) = (\psi \circ h)(x,y)$ luego $$ \varphi_x = \psi_u(h) h^1_x + \psi_v(h) h^2_x \quad \text{y} \quad \varphi_y = \psi_u(h) h^1_y + \psi_v(h) h^2_y. $$
>>5. Luego, como el producto cruz es bilineal y antisimétrico $$\begin{align} \|\varphi_x \times \varphi_y\| & = \|(\psi_u(h) h^1_x + \psi_v(h) h^2_x) \times (\psi_u(h) h^1_y + \psi_v(h) h^2_y)\|\\&= \lVert (h_{x}^{1}h_{y}^{1})  (\psi_{u}\times\psi_{u})+(h_{x}^{2}h_{y}^{1})  (\psi_{v}\times\psi_{u})+ (h_{x}^{1}h_{y}^{2})  (\psi_{u}\times\psi_{v})+(h_{x}^{2}h_{y}^{2})  (\psi_{v}\times\psi_{v})+\rVert \\&=\lVert (h_{x}^{2}h_{y}^{1})  (\psi_{v}\times\psi_{u})+(h_{x}^{1}h_{y}^{2})  (\psi_{u}\times\psi_{v}) \rVert \\&=\lVert - (h_{x}^{2}h_{y}^{1})  (\psi_{u}\times\psi_{v})+ (h_{x}^{1}h_{y}^{2})  (\psi_{u}\times\psi_{v})  \rVert \\ & = \|(h^1_x h^2_y - h^1_y h^2_x) \psi_u(h) \times \psi_v(h)\| \\& = |\det(dh)| \|(\psi_u \times \psi_v)(h)\|\end{align} $$
>>6. Luego $$\begin{align}\text{área}(\varphi(A)) &= \int_A \|\varphi_x(x, y) \times \varphi_y(x, y)\| \, dx \, dy\\&=\int_{A} |\det(dh)| \|(\psi_u \times \psi_v)(h)\|\\&=\int_{B}\lVert \psi_{x}\times\psi_{y} \rVert && ( h(A)=B \text{ por 2.}) \\&=\text{area}(\psi(B))\end{align}$$ Por el teorema del cambio de variables (Notar $h(A)=B$ por 2.) 

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

>[!Exercise]
>Si $f : M \to N$ es la restricción de una transformación euclidiana de $\mathbb{R}^3$, entonces $f$ es una isometría local.

>[!Example]- Ejemplo de isometria local
>Sean $P = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ y $C = \{(x, y, z) \mid x^2 + y^2 = 1\}$ y sea
>$$ f : P \to C, \quad f(x, y, 0) = (\cos x, \sin x, y). $$
>Veamos que $f$ es una isometría local. Sea $\alpha : [a, b] \to P$ una curva suave. Escribimos
>$$ \alpha(t) = (x(t), y(t), 0). $$
>Luego $\text{long}(\alpha) = \int_a^b \|\alpha'(t)\| \, dt = \int_a^b \sqrt{x'(t)^2 + y'(t)^2} \, dt$. Ahora, como
>$$ \|(f \circ \alpha)'(t)\| = \|(-x'(t) \sin x(t), x'(t) \cos x(t), y'(t))\| $$
>$$ = \sqrt{x'(t)^2 (\cos^2 x(t) + \sin^2 x(t)) + y'(t)^2} $$
>$$ = \sqrt{x'(t)^2 + y'(t)^2}, $$
>tenemos que $\text{long}(\alpha) = \text{long}(f \circ \alpha)$.

>[!Example]- Ejemplo de algo que no es isometria local
>La función de la franja plana al cilindro del ejemplo de funciones que preservan áreas no es una isometría local. En efecto, la curva $\alpha : [0, 1] \to P$, $\alpha(t) = (\pi/2, t, 0)$ tiene longitud 1, mientras que $f \circ \alpha : [0, 1] \to C$, que está dada por
>$$ (f \circ \alpha)(t) = (\cos(\pi), \sin(\pi), \frac{1}{2}t) = (-1, 0, \frac{1}{2}t), $$
>tiene longitud $1/2$.

>[!Definition] Isometría
>Una isometría local que es un difeomorfismo se llama **isometría**.

>[!Proposition] Caracterización de isometría local
>Una función suave $f : M \to N$ entre dos superficies es una isometría local si y solo si $df_p : T_pM \to T_{f(p)}N$ es una isometría lineal para todo $p \in M$.
>>[!Proof]-
>>- $\Leftarrow$) Se muestra en el práctico.
>>- $\Rightarrow$) 
>>	1. Sea $p \in M$. Basta ver que $\|df_p(u)\| = \|u\|$ para todo $u \in T_pM$.
>>	2. Sea $\alpha : (-\varepsilon, \varepsilon) \to M$ una curva suave en $M$ con $\alpha(0) = p$ y $\alpha'(0) = u$.
>>	3. Por hipótesis, para todo $0 \le s < \varepsilon$ se cumple que $$ \text{long}(\alpha|_{[0, s]}) = \text{long}(f \circ \alpha|_{[0, s]}), $$o equivalentemente,$$ \int_0^s \|\alpha'(t)\| \, dt = \int_0^s \|(f \circ \alpha)'(t)\| \, dt. $$
>>	4. Derivando por derecha en ambos miembros con respecto a $s$ (Teorema Fundamental del Calculo) en $s=0$, obtenemos $$ \|\alpha'(0)\| = \|(f \circ \alpha)'(0)\| = \|df_p(\alpha'(0))\|, $$con lo cual $\|df_p(u)\| = \|u\|$, como queríamos.

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
>>- $\Leftarrow$) La prueba es similar y no la hacemos.

^7286f3

>[!Example]- Isometría local entre el helicoide y la catenoide
>Recordemos que el helicoide es la superficie dada por la imagen de $\psi : \mathbb{R}^2 \to \mathbb{R}^3$,
>$$ \psi(s, t) = (0, 0, s) + t (\cos s, \sin s, 0) = (t \cos s, t \sin s, s). $$
>La catenoide $C$ es por definición la superficie de revolución con curva perfil $\alpha : \mathbb{R} \to \mathbb{R}^2$ dada por
>$$ \alpha(t) = (\cosh t, t), $$
>o sea, $C = \bar{\varphi}(\mathbb{R}^2)$, donde
>$$ \bar{\varphi}(u, v) = (\cosh v (\cos u, \sin u), v). $$
>Sea $M$ la región del helicoide comprendida entre los planos $z = 0$ y $z = 2\pi$ y sea $N$ la catenoide menos el meridiano $u = 0$, o equivalentemente,
>$$ M = \psi(U) \quad \text{y} \quad N = \bar{\varphi}(U), $$
>donde $U = (0, 2\pi) \times \mathbb{R}$. Entonces $M$ y $N$ son isométricas.
>>[!Proof]-
>>1. Encontraremos una isometría $f : M \to N$ que lleva los rayos del helicoide en los meridianos de la catenoide.
>>2. Consideramos el sistema coordenado $\varphi : U \to M$ dado por $$ \varphi(u, v) = \psi(u, \sinh v) = (\sinh v (\cos u, \sin u), u). $$
>>3. Veremos que el difeomorfismo $$ f : M \to N, \quad f = \bar{\varphi} \circ \varphi^{-1} $$es una isometría. 
>>4. Basta verificar que $\bar{E} = E, \bar{F} = F$ y $\bar{G} = G$, donde $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ son los coeficientes de las primeras formas fundamentales de $\varphi$ y $\bar{\varphi}$, respectivamente.
>>5. Para el helicoide calculamos $$ \varphi_u(u, v) = (\sinh v (-\sin u, \cos u), 1) \quad \text{y} \quad \varphi_v(u, v) = (\cosh v (\cos u, \sin u), 0). $$
>>6. Luego $$ E(u, v) = \|\varphi_u(u, v)\|^2 = \sinh^2 v (\sin^2 u + \cos^2 u) + 1 = \cosh^2 v, $$$$ F(u, v) = \langle \varphi_u(u, v), \varphi_v(u, v) \rangle = 0$$$$ G(u, v) = \|\varphi_v(u, v)\|^2 = \cosh^2 v. $$
>>7. De la misma manera se calculan $\bar{E}, \bar{F}, \bar{G}$ y resultan iguales a $E, F, G$. En consecuencia, $f$ es una isometría

>[!Lemma] Lema previo
>Antes de la prueba, escribimos el área del paralelogramo generado por $X, Y \in \mathbb{R}^3$ en términos de $\|X\|, \|Y\|$ y $\langle X, Y \rangle$. Si $X, Y \in \mathbb{R}^3$, entonces
>$$ \|X \times Y\|^2 = \det \begin{pmatrix} \|X\|^2 & \langle X, Y \rangle \\ \langle X, Y \rangle & \|Y\|^2 \end{pmatrix}. $$
>>[!Proof]-
>>Sea $\theta$ el ángulo que forman $X$ y $Y$. Sabemos que
>>$$ \|X \times Y\| = \|X\| \|Y\| \sin \theta. $$
>>De allí,
>>$$ \begin{align} \|X \times Y\|^2 & = \|X\|^2 \|Y\|^2 \sin^2 \theta = \|X\|^2 \|Y\|^2 (1 - \cos^2 \theta) \\ & = \|X\|^2 \|Y\|^2 \left( 1 - \frac{\langle X, Y \rangle^2}{\|X\|^2 \|Y\|^2} \right) \\ & = \|X\|^2 \|Y\|^2 - \langle X, Y \rangle^2, \end{align} $$
>>como queríamos. $\square$

^e69a37

>[!Proposition] Isometrias preservan areas
>Si $f : M \to N$ es una isometría, entonces preserva áreas de regiones en abiertos coordenados.
>>[!Proof]-
>>1. Sea $\varphi : U \to M$ un sistema coordenado y sea $A$ un subconjunto cerrado y acotado de $U$. 
>>2. Como $f$ es una isometría, $f$ es un difeomorfismo, y por lo tanto $\bar{\varphi} := f \circ \varphi$ es un sistema coordenado de $N$. (Recordar, basicamente un sistema coordenado es un difeomorfismo entre $U$ y un abierto ($N\cap\mathcal{V}$)  de la superficie en este caso $N$) 
>>3. Sean $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ los coeficientes de la primera forma fundamental de $\varphi$ y $\bar{\varphi}$, respectivamente. Por el [[Definiciones#^e69a37]] $$ \|\varphi_u \times \varphi_v\| = \sqrt{EG - F^2} \quad \text{y} \quad \|\bar{\varphi}_u \times \bar{\varphi}_v\| = \sqrt{\bar{E}\bar{G} - \bar{F}^2}, $$
>>4. Ahora $\bar{\varphi}\circ\varphi ^{-1}=f$ que es una isometria entonces por [[Definiciones#^7286f3]] los coeficientes de la 1era forma son iguales. Con lo cual $\lVert \varphi_{u}\times\varphi_{v} \rVert=\lVert \bar\varphi_{u}\times\bar\varphi_{v} \rVert$ 
>>5. Integrando sobre $A$ obtenemos que $$ \text{área } \varphi(A) = \text{área } \bar{\varphi}(A) $$como deseábamos.

^31299e

>[!Definition] Superficie rígida
>Una superficie $M$ se dice **rígida** si para toda isometría $f : M \to N$, donde $N$ es una superficie, se cumple que $f = F|_M$ para cierta transformación euclidiana $F : \mathbb{R}^3 \to \mathbb{R}^3$.

>[!Example]-
>La franja $M = \{(s, t, 0) \in \mathbb{R}^3 \mid 0 < s < \pi\}$ no es rígida. En efecto, existe una isometría $f : M \to N$, donde $N$ es la mitad del cilindro $\{(x, y, z) \mid x^2 + y^2 = 1, y > 0\}$, dada por
>$$ f(s, t, 0) = (\cos s, \sin s, t), $$
>que no es la restricción a $M$ de ninguna transformación euclideana $F$. De hecho, si una tal $F$ existiera, para $p = (\frac{\pi}{3}, 0, 0)$ y $q = (\frac{2\pi}{3}, 0, 0)$ se debería cumplir que
>$$ d(p, q) = d(F(p), F(q)), $$ (Dado que transformaciones euclideanas preservan distancia por definicion) 
>pero el miembro izquierdo vale $\frac{\pi}{3}$ y el derecho $1$.

>[!Remark]
>El teorema de rigidez de la esfera afirma que la esfera de radio 1 centrada en el origen es rígida. Sin embargo, un pequeño casquete de esfera (es decir la intersección de la esfera con un semiespacio, digamos, por ejemplo $\{(x, y, z) \mid z > 3/4\}$) no es rígido.
>>[!Proof]-
>>6. Consideremos una superficie $N$ de curvatura constante $K=1$ que no sea un trozo de esfera (por ejemplo, una superficie de revolución generada por una curva perfil adecuada distinta de la circunferencia).
>>7. Por el Teorema de Minding, dado que el casquete $M$ y $N$ tienen la misma curvatura constante, son localmente isométricas. Es decir, existe una isometría $f: M \to V \subset N$ (si $M$ es suficientemente pequeño).
>>8. Sin embargo, esta isometría no proviene de una transformación rígida (congruencia). Si lo fuera, preservaría la segunda forma fundamental y, por tanto, las curvaturas principales. En el casquete esférico, todos los puntos son umbilicales ($k_1 = k_2 = 1$), mientras que en $N$ podemos elegir una región donde los puntos no sean umbilicales ($k_1 \neq k_2$ con $k_1 k_2 = 1$).
>>9. Por lo tanto, $f$ es una isometría pero no es la restricción de una transformación euclidiana.

>[!Remark]
>Sea $f : M \to N$ una isometría entre superficies. No siempre es claro que exista un continuo de isometrías $f_t : M \to N_t$ con $f_0$ igual a la identidad en $M$ y $f_1 = f$ y $t\in [0,1]$. 
>Por ejemplo, $M$ como en la figura, y $N$ análoga, pero con una de las montañas para abajo. No necesariamente se puede deformar de forma continua la superficie con las dos montañas para arriba para llegar a los superficie con una montaña para abajo.![[Pasted image 20251129101703.png]]
>Pero si es cierto que hay isometria entre estas dos superficies por que (intuitivamente) se preserva las distancias sin importar si la montana esta para arriba o para abajo.

>[!Remark]
>Aprovechamos para comentar que para dar explícitamente una parametrización del plano con montañas es muy conveniente haber requerido en un comienzo sólo diferenciabilidad de clase $C^3$ de las cartas coordenadas: Sea $h$ la función de gráfico rojo. ![[Pasted image 20251129101733.png]]
>Necesitamos que las tres primeras derivadas de $h$ en $x$ por derecha sean nulas (para empalmar bien). Podemos conseguir un polinomio $h$ así. Si trabajáramos en clase $C^\infty$, necesitaríamos que todas las derivadas en $x$ por derecha fuera cero. El único polinomio que cumple eso el es idénticamente nulo. Las funciones con esa propiedad tienen fórmulas más complicadas, que involucran, por ejemplo, $e^{-1/t}$.

>[!Remark] Otros tipos de difeomorfismos
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

>[!Remark]
>Vamos a explorar cuántos lados tiene una superficie.

>[!Definition] Superficie orientable
>Se dice que una una superficie $S$ es **orientable** si existe una función continua $n : S \to \mathbb{R}^3$ que cumple $\|n(p)\| = 1$ y $n(p) \perp T_pS$ para todo $p \in S$.
>La condición $n(p) \perp T_pS$ significa que $\langle n(p), u \rangle = 0$ para todo $u \in T_pS$. Una función $n$ así es un **campo normal unitario** de $S$ y se denomina una **orientación** de la superficie $S$.

>[!Remark]
>Las superficies orientables tienen al menos dos lados, determinados por $n$ y $-n$.

>[!Example] Ejemplos de superficies orientables
>- El plano $z = 0$ es orientable. La verificación se deja como ejercicio.
>- La esfera $S$ de centro $0$ y radio $r > 0$ es orientable. 
>>[!Proof]-
>>1. En efecto, $S = \{p \in \mathbb{R}^3 \mid \|p\| = r\}$ y sea $$ n : S \to \mathbb{R}^3, \quad n(p) = \frac{p}{r}. $$
>>2. La función $n$ es continua, pues el la restricción a $S$ de la función definida por la misma fórmula en el abierto $\mathbb{R}^3 - \{0\} \to \mathbb{R}^3$.
>>3. También, $\|n(p)\| = 1$ y $(\frac{p}{r})^\perp = p^\perp = T_pS$ para todo $p \in S$ (la última afirmación se mostró para $r = 1$ usando la descripción de los planos tangentes a una superficie implícita; para $r$ arbitrario es similar).
>- Las superficies de revolución son orientables. En particular sea $M$ la superficie de revolución con curva perfil $$ \alpha : (a, b) \to \mathbb{R}^2, \quad \alpha(t) = (r(t), h(t)), $$inyectiva con inversa continua, con $r(t) > 0$ para todo $t$. Entonces $M$ es orientable 
>>[!Proof]-
>>4. Sea $\varphi : \mathbb{R} \times (a, b) \to M$,$$ \varphi(s, t) = (r(t) (\cos s, \sin s), h(t)), $$y definimos $n : M \to \mathbb{R}^3$ mediante $$ n(\varphi(s, t)) = \frac{\varphi_s(s, t) \times \varphi_t(s, t)}{\|\varphi_s(s, t) \times \varphi_t(s, t)\|}. $$
>>5. Claramente $n(\varphi(s, t)) \perp T_{\varphi(s, t)}M$ y $\|n(\varphi(s, t))\| = 1$ para todo $s, t$.
>>6. Veamos que $\varphi$ está bien definida. Observamos que $M$ es la imagen de $\varphi$ y verificamos $$ n(\varphi(s, t)) = n(\varphi(s', t')) $$
>>7. si $\varphi(s, t) = \varphi(s', t')$. Esto ocurre si y solo si $t' = t$ (pues $\alpha$ es inyectiva) y $s' = s + 2k\pi$ para cierto $k \in \mathbb{Z}$. Como $\varphi(s, t) = \varphi(s + 2k\pi, t)$, tenemos que $$ \varphi_s(s, t) = \varphi_s(s + 2k\pi, t) \quad \text{y} \quad \varphi_t(s, t) = \varphi_t(s + 2k\pi, t) $$para todo $s, t$. Entonces $n$ está bien definida.
>>8. Para ver que $n$ es continua, notamos que $n \circ \varphi|_{I \times (a, b)}$ es continua y $\varphi|_{I \times (a, b)}$ es un sistema coordenado de $M$ para todo intervalo $I$ de longitud menor que $2\pi$.
>>9. Si $\alpha$ está definida en todo $\mathbb{R}$ y es periódica, se procede de manera similar.

>[!Definition] Cinta de Möbius
>La cinta de Möbius es el conjunto $M = \{\varphi(s, t) \mid s \in \mathbb{R}, |t| < r\}$ dada por$$ \varphi(s, t) = \alpha(s) + t v(s), $$donde $$ \alpha(s) = (\cos s, \sin s, 0) \quad \text{y} \quad v(s) = \cos(\frac{s}{2}) \alpha(s) + \sin(\frac{s}{2}) (0, 0, 1). $$Se puede demostrar que $M$ es una superficie regular si $r > 0$ es suficientemente pequeño. ¿Es isométrica a la cinta de Möbius que construimos con papel?

>[!Proposition] Cinta Mobius no es orientable
>La cinta de Möbius no es orientable.
>>[!Proof]-
>>10. Supongamos que existe una función $n : M \to \mathbb{R}^3$ continua tal que $\|n(p)\| = 1$ y $n(p) \perp T_pM$ para todo $p \in M$.
>>11. Definimos la función $$ N : \mathbb{R} \to \mathbb{R}^3, \quad N(s) = n(\alpha(s)), \quad (13) $$que es continua pues es composición de funciones continuas.
>>12. Por otro lado $$ \varphi_s(s, t) = \alpha'(s) + t v'(s) \quad \text{y} \quad \varphi_t(s, t) = v(s); $$en particular, $\varphi_s(s, 0) = \alpha'(s)$ y $\varphi_t(s, 0) = v(s)$. 
>>13. Luego,$$ (\varphi_s \times \varphi_t)(s, 0) = \alpha'(s) \times v(s), $$que está en $(T_{\varphi(s, 0)}M)^\perp$ y además unitario, pues $\|\alpha'(s)\| = 1 = \|v(s)\|$ y $\alpha'(s) \perp v(s)$. ($\lVert A\times B \rVert=\lVert A \rVert\lVert B \rVert cos(\theta_{A,B})$) 
>>14. Así, para cada $s$ $$ N(s) = \varepsilon(s) \alpha'(s) \times v(s) $$para cierta función $\varepsilon : \mathbb{R} \to \mathbb{R}$ con valores en el conjunto $\{-1, 1\}$. (Obviamente $N(s)$ esta en $(T_{\varphi(s,0)}M)^{\perp}$ por que $\varphi(s,0)=\alpha (s)$) 
>>15. Veamos que $\varepsilon$ es constante. Para eso despejamos $$ \varepsilon(s) = \langle N(s), \alpha'(s) \times v(s) \rangle, $$que es una función continua de $s$. 
>>16. Por el teorema de los valores intermedios, $\varepsilon$ es constante igual a $1$ o constante igual a $-1$.
>>17. Ahora calculamos $$ N(0) = \varepsilon(0) \alpha'(0) \times v(0) \quad \text{y} \quad N(2\pi) = \varepsilon(2\pi) \alpha'(2\pi) \times v(2\pi). $$
>>18. Como $\alpha$ es periódica de período $2\pi$, $\alpha'$ también lo es; así $\alpha'(2\pi) = \alpha'(0)$
>>19. También, es fácil verificar que $v(2\pi) = -v(0)$. Entonces $N(2\pi) = -N(0)$. Pero esto implica por (13) que $$ n(\alpha(2\pi)) = -n(\alpha(0)), $$lo cual es absurdo, pues $\alpha(2\pi) = \alpha(0)$. 
>>20. En consecuencia, $M$ no es orientable. $\square$

^dff491

>[!Remark]
>La cinta de Möbius tiene un solo lado.

>[!Proposition]
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

>[!Remark]
>Para ver cómo se curva una superficie vemos cómo varían los planos tangentes, o equivalentemente, cómo varían los vectores normales.

>[!Definition] Aplicación de Gauss
>Sea $M$ una superficie regular con una orientación $n : M \to \mathbb{R}^3$. Dado que $n$ es unitaria la podemos pensar como $n : M \to S^2$, que llega a la esfera de radio 1 centrada en el origen, se llama **aplicación de Gauss**.
>Como $T_qS^2 = q^\perp$ para todo $q \in S^2$, tenemos que para todo $p \in M$ se cumple que
>$$ dn_p : T_pM \to T_{n(p)}S^2 = n(p)^\perp = T_pM. $$
>En particular, $dn_p$ es una transformación lineal de $T_pM$ en sí mismo.

>[!Proposition]
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
>El operador de forma de $M$ en $p$ diagonaliza en una base ortonormal de $T_pM$, es decir, existe una base ortonormal $\{X, Y\}$ de $T_pM$ tal que
>$$ A_p(X) = k_1 X \quad \text{y} \quad A_p(Y) = k_2 Y, $$
>con $k_1 \ge k_2$.
>>[!Proof]-
>>1. Un teorema de Algebra Lineal afirma que $T$ autoadjunta sii $T$ diagonaliza ortonormalmente por lo tanto basta ver que $A_p$ es autoadjunta, o sea, que $$ \langle -dn_p(u), v \rangle = \langle u, -dn_p(v) \rangle $$para todo $u, v \in T_pM$. 
>>2. Como el producto interno es bilineal, basta verificarlo para $$ u = \varphi_x(q) \quad \text{y} \quad v = \varphi_y(q), $$donde $\varphi : U \to M$ es un sistema coordenado con $\varphi(q) = p$ (Esto es por que $\varphi_{x}(q)$ y $\varphi_{y}(q)$ son base y despues usando linealidad).
>>3. Debemos ver entonces que $$ \langle dn_p(\varphi_x(q)), \varphi_y(q) \rangle = \langle \varphi_x(q), dn_p(\varphi_y(q)) \rangle, \quad (15) $$o lo que es lo mismo $$ \left\langle \frac{\partial}{\partial x}\Big|_q n \circ \varphi, \varphi_y(q) \right\rangle = \left\langle \varphi_x(q), \frac{\partial}{\partial y}\Big|_q n \circ \varphi \right\rangle. $$
>>4. Por otro lado, sabemos que para todo $x, y$ vale$$ \langle n(\varphi(x, y)), \varphi_x(x, y) \rangle = 0, \quad (16) $$$$ \langle n(\varphi(x, y)), \varphi_y(x, y) \rangle = 0. \quad (17) $$ Por que $\varphi_{x}$ y $\varphi_{y}$ generan el plano tangente  
>>5. Derivamos miembro a miembro la expresión (16) con respecto a $y$ en $q$ y obtenemos $$ \left\langle \frac{\partial}{\partial y}\Big|_q (n \circ \varphi), \varphi_x(q) \right\rangle + \langle n(q), \varphi_{xy}(q) \rangle = 0. $$Análogamente, derivamos (17) con respecto a $x$ y evaluamos en $q$: $$ \left\langle \frac{\partial}{\partial x}\Big|_q (n \circ \varphi), \varphi_y(q) \right\rangle + \langle n(q), \varphi_{yx}(q) \rangle = 0. $$
>>6. Restamos miembro a miembro y como las derivadas cruzadas $\varphi_{xy}$ y $\varphi_{yx}$ son iguales, resulta que (15) es verdadera, como queríamos. $\square$

>[!Definition] Curvatura Gaussiana y Media
>Los vectores $X$ y $Y$ se llaman **direcciones principales** en $p$ y $k_1, k_2$ se denominan **curvaturas principales** en $p$.
>Las **curvaturas gaussiana** y **media** de $M$ en $p$ son, respectivamente,
>$$ K(p) = k_1 k_2 \quad \text{y} \quad H(p) = \frac{1}{2} (k_1 + k_2). $$

>[!Definition] Vector asintótico
>Un vector $Z \neq 0$ en $T_pM$ que satisface $\langle A_p(Z), Z \rangle = 0$ se dice un **vector asintótico** en $p$

>[!Example]- Calculando alguna curvatura media y Gaussiana 
>Sea $M$ la silla de montar, gráfico de la función $f : \mathbb{R}^2 \to \mathbb{R}$ dada por $f(x, y) = x^2 - 3y^2$ y sea $p = (0, 0, 0)$.
>Sea $\varphi : \mathbb{R}^2 \to M$ el sistema coordenado definido por $\varphi(x, y) = (x, y, x^2 - 3y^2)$ y sea $n : M \to S^2$ la orientación
>$$ n(\varphi(x, y)) = \frac{(\varphi_x \times \varphi_y)(x, y)}{\|(\varphi_x \times \varphi_y)(x, y)\|} = \frac{(1, 0, 2x) \times (0, 1, -6y)}{\|(1, 0, 2x) \times (0, 1, -6y)\|} $$
>$$ = \frac{(-2x, 6y, 1)}{\sqrt{4x^2 + 36y^2 + 1}}. $$
>Tenemos que
>$$ T_pM = \text{span } \{\varphi_x(0, 0), \varphi_y(0, 0)\} = \text{span } \{(1, 0, 0), (0, 1, 0)\} = \mathbb{R}^2 \times \{0\}. $$
>Calculamos
>$$ dn_p(e_1) = dn_p(\varphi_x(0, 0)) = dn_p \left( \frac{d}{dx}\Big|_0 \varphi(x, 0) \right) = \frac{d}{dx}\Big|_0 n(\varphi(x, 0)) $$
>$$ = \frac{d}{dx}\Big|_0 (4x^2 + 36y^2 + 1)^{-1/2} (-2x, 6y, 1) = \dots = -2e_1. $$
>De la misma manera, $dn_p(e_2) = 6e_2$.
>Así, $A_p(e_1) = 2e_1$ y $A_p(e_2) = -6e_2$. Luego, $e_1$ y $e_2$ son direcciones principales de $M$ en $p$ y las curvaturas principales son $k_1 = 2$ y $k_2 = -6$. De allí,
>$$ K(p) = -12 \quad \text{y} \quad H(p) = -2. $$
>Veamos ahora si existen vectores asintóticos $Z$ en $p$. Escribimos $Z = ae_1 + be_2$ y planteamos
>$$ 0 = \langle A(Z), Z \rangle = \langle A(ae_1 + be_2), ae_1 + be_2 \rangle = \langle aA(e_1) + bA(e_2), ae_1 + be_2 \rangle \quad (14) $$
>$$ = \langle 2ae_1 - 6be_2, ae_1 + be_2 \rangle = 2a^2 - 6b^2, $$
>que vale si y solo si $2a^2 = 6b^2$, o equivalentemente, $|a| = \sqrt{3}|b|$. Luego los cuatro vectores
>$$ Z = \pm \sqrt{3} e_1 \pm e_2 $$
>y sus múltiplos no nulos son exactamente los vectores asintóticos para $M$ en $p$.

^d6595a

>[!Remark]
>Las direcciones $X$ y $Y$ son aquellas donde la superficie más se curva (respectivamente, menos se curva) cerca de $p$.
>En la dirección de los vectores asintóticos en $p$ es donde, a nivel infinitesimal, la superficie corta al plano tangente afín en $p$.

>[!Remark]
>Si $K(p) \le 0$, o sea si $k_1, k_2$ tienen distintos signo o alguno vale cero, entonces necesariamente existen vectores asintóticos de $M$ en $p$. Se justifica con un cálculo análogo a (14) en [[Definiciones#^d6595a]], poniendo $k_1$ y $k_2$ en vez de $2$ y $-6$.
>De la misma manera se muestra que no hay vectores asintóticos en $p$ si $K(p) > 0$.
>En el práctico se ve que las direcciones principales son bisectrices de las asintóticas.

>[!Exercise]
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

>[!Remark]
>En el práctico se ve que los paralelos y los meridianos de una superficie de revolución son líneas de curvatura.

>[!Example]- Ejemplo de linea de curvatura y asintotica
>Sea $C$ el cilindro $\{(x, y, z) \mid x^2 + y^2 = r^2\}$ y sea $\varphi(s, t) = (r \cos s, r \sin s, t)$.
>Calculamos
>$$ \varphi_s(s, t) = (-r \sin s, r \cos s, 0) \quad \text{y} \quad \varphi_t(s, t) = (0, 0, 1). $$
>La orientación $\varphi$ está bien definida por
>$$ n(\varphi(s, t)) = \frac{(\varphi_s \times \varphi_t)(s, t)}{\|(\varphi_s \times \varphi_t)(s, t)\|} = \frac{(r \cos s, r \sin s, 0)}{r} = (\cos s, \sin s, 0). $$
>Calculamos
>$$ \begin{align} A_{\varphi(s, t)}(\varphi_s(s, t)) & = -dn_{\varphi(s, t)}(\varphi_s(s, t))\\& = -(n \circ \varphi)_s(s, t) \\ &= -(-\sin s, \cos s, 0) = (\sin s, -\cos s, 0) \\& = -\frac{1}{r} \varphi_s(s, t).\end{align} $$
>De la misma forma obtenemos
>$$ A_{\varphi(s, t)}(\varphi_t(s, t)) = 0. $$
>De esa información concluimos que $\frac{1}{r} \varphi_s(s, t)$ y $\varphi_t(s, t)$ son direcciones principales,
>$$ k_1 \equiv 0, \quad k_2 \equiv -\frac{1}{r}, \quad K \equiv 0, \quad H \equiv -\frac{1}{2r}, $$
>y que las curvas coordenadas son líneas de curvatura. Además, las curva $t \mapsto \varphi(s_o, t)$ es una línea asintótica para todo $s_o$.

>[!Example]- Ejemplo de linea de curvatura y asintotica
>Sea $M$ el toro $T(R, r)$ parametrizado por
>$$ \varphi(s, t) = ((R + r \cos t)(\cos s, \sin s), r \sin t) $$
>(con $0 < r < R$) y sea $\alpha : \mathbb{R} \to M$ el paralelo superior,
>$$ \alpha(s) = \varphi(s, \pi/2) = (R(\cos s, \sin s), r). $$
>Veamos que $\alpha$ es una línea de curvatura y también línea asintótica de $M$.
>Sea $n : M \to \mathbb{R}^3$,
>$$ n(\varphi(s, t)) = \frac{\varphi_s(s, t) \times \varphi_t(s, t)}{\|\varphi_s(s, t) \times \varphi_t(s, t)\|}, $$
>que vimos que está bien definido pues $M$ es una superficie de revolución. Tenemos que
>$$ n(\alpha(s)) = n(\varphi(s, \pi/2)) = (0, 0, 1) $$
>para todo $s$. Luego,
>$$ A_{\alpha(s)}(\alpha'(s)) = -dn_{\alpha(s)}(\alpha'(s)) = -\frac{d}{ds}(n \circ \alpha)(s) = -\frac{d}{ds}(0, 0, 1) = 0. $$
>Como $\|\alpha'(s)\| = \|(R(-\sin s, \cos s), 0)\| = R$. Entonces $\alpha'(s)/R$ es una dirección principal de $M$ en el punto $\alpha(s)$ y por lo tanto $\alpha$ es una línea de curvatura.
>Calculamos $\langle A_{\alpha(s)}(\alpha'(s)), \alpha'(s) \rangle = 0$ y en consecuencia $\alpha'(s)$ es un vector asintótico en $\alpha(s)$ y así, $\alpha$ es una línea asintótica.
>Notemos que una de las curvaturas principales en $\alpha(s)$ es cero, lo cual implica que la curvatura gaussiana se anula en $\alpha(s)$: $K(\alpha(s)) = 0$ para todo $s$.

>[!Remark]- Repaso Lineal
>Antes de seguir necesitamos repasar ciertas nociones de Álgebra Lineal.
>Sea $T : V \to V$ una transformación lineal de un espacio vectorial $V$ **en sí mismo** (no es necesario que $V$ tenga un producto interno). Se definen $$ \det(T) = \det(A) \quad \text{y} \quad \text{tr}(T) = \text{tr}(A), $$donde $A = [T]_{\mathcal{B}}$ para cualquier base $\mathcal{B}$ de $V$. La definición es buena, porque si $\bar{\mathcal{B}}$ es otra base de $V$, se tiene que $$ [T]_{\bar{\mathcal{B}}} = P [T]_{\mathcal{B}} P^{-1} $$para cierta matriz invertible $P$ (la matriz de cambio de base) y además para todo par de matrices $X$ e $Y$ vale$$ \det(XY) = \det(X) \det(Y) \quad \text{y} \quad \text{tr}(XY) = \text{tr}(YX). $$

>[!Proposition]
>Sea $A_p$ el operador de forma de una superficie $M$ en el punto $p$. Entonces
>$$ K(p) = \det(A_p) \quad \text{y} \quad H(p) = \frac{1}{2} \text{tr}(A_p). $$
>>[!Proof]-
>>1. Sean $k_1$ y $k_2$ las curvaturas principales y $X, Y$ las direcciones principales en $p$. Tenemos que $$ K(p) = k_1 k_2 = \det \begin{pmatrix} k_1 & 0 \\ 0 & k_2 \end{pmatrix} = \det([A_p]_{\{X, Y\}}) = \det(A_p). $$
>>2. La justificación de la afirmación para $H$ es similar y se deja como ejercicio.

>[!Remark]
>La proposición permite a veces obtener $K(p)$ y $H(p)$ sin necesidad de hallar previamente las direcciones y las curvaturas principales en $p$. Por ejemplo, si $\varphi : U \to M$ es un sistema coordenado con $p \in \varphi(q)$, podemos calcular
>$$ [dn_p]_{\{\varphi_u(q), \varphi_v(q)\}} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}. $$
>(Notar $det(-A)=det(A)$ si $A \in \mathbb{R}^{n \times n}$ con $n$ par, con lo cual $det(A_{p})=det(-dn_{p})=det(dn_{p})$). En ese caso tendremos $K(p) = ad - cb$  y $H(p) = -\frac{1}{2}(a + d)$

# La curvatura normal

>[!Remark]
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

>[!Remark]
>Estas dos afirmaciones se podrian escribir mas general
>$$k_{n,p_{0}}=\langle\alpha ''(t_{0}),n(p_{0})\rangle$$
>Donde $\alpha (t_{0})=p_{0}$
>Y por lo tanto $$k_{n,p_{0}}=\langle A_{p_{0}}(\alpha '(t_{0})),\alpha '(t_{0})\rangle$$     

>[!Corollary]
>Dado un vector unitario $v \in T_pM$, todas las curvas $\beta$ en $M$ con rapidez unitaria tales que $\beta(0) = p$ y $\beta'(0) = v$ tienen la misma curvatura normal en $p$.

>[!Definition] Curvatura normal en una dirección
>Dado un vector unitario $v \in T_pM$, la **curvatura normal** de $M$ en la **dirección** $v$ es
>$$ \kappa_{n, p}(v) = \langle A_p v, v \rangle. $$

>[!Remark]
>En la siguiente proposición vemos la **fórmula de Euler**, que da las curvaturas normales en coordenadas polares del plano tangente.

>[!Proposition] Fórmula de Euler
>Sean $X, Y$ direcciones principales en un punto $p$ de una superficie $M$, y sean $k_1, k_2$ las correspondientes curvaturas principales en $p$. Entonces
>$$ \kappa_{n, p}(\cos \theta X + \sin \theta Y) = k_1 \cos^2 \theta + k_2 \sin^2 \theta \quad (18) $$
>para todo $\theta \in \mathbb{R}$.
>Mas aun $$k_{n,p}(aX+bY)=k_{1}a^{2}+k_{2}b^{2}$$  
>>[!Proof]-
>>1. El miembro izquierdo es por definición $$ \langle A_p(\cos \theta X + \sin \theta Y), \cos \theta X + \sin \theta Y \rangle = \langle \cos \theta k_1 X + \sin \theta k_2 Y, \cos \theta X + \sin \theta Y \rangle, $$ que coincide con el segundo miembro de (18) pues $\{X, Y\}$ es una base ortonormal.

^b7dfa0

>[!Corollary] Curvaturas principales son normales
>Se cumple que $\kappa_{n, p}(X) = k_1$, $\kappa_{n, p}(Y) = k_2$ y
>$$ k_2 \le \kappa_{n, p}(\cos \theta X + \sin \theta Y) \le k_1 $$
>para todo $\theta$.
>Esto provee una justificación a un enunciado informal anterior que afirmaba que las direcciones principales son aquellas partiendo de $p$ donde la superficie más se curva y menos se curva.
>>[!Proof]-
>>1. Las dos igualdades salen de la [[Definiciones#^b7dfa0]]
>>2. La desigualdades salen primero notando que $k_{2}\leq k_{1}$ por definicion y $$k_{1}\cos^{2}\theta+k_{2}\sin^{2}\theta=k_{2}(\cos^{2}\theta+\sin^{2}\theta)+(k_{1}-k_{2})\cos^{2}\theta=k_{2}+(k_{1}-k_{2})\cos^{2}\theta$$ y notando $0 \leq \cos^{2}\theta\leq 1$   

^c069c2

>[!Proposition]
>Si la trayectoria de la recta $\alpha(t) = p + tu$ (con $\|u\| = 1$) está contenida en una superficie $M$, entonces $\alpha$ es una línea asintótica de $M$.
>>[!Proof]-
>>2. Debemos verificar que $\alpha'(t)$ es una dirección asintótica en $T_{\alpha(t)}M$, para todo $t$. 
>>3. Ahora usando [[Definiciones#^852d07]] $$ k_{n,p}(\alpha ')=\langle A_{\alpha(t)}\alpha'(t), \alpha'(t) \rangle = \langle \alpha''(t), n(\alpha(t)) \rangle = \langle 0,n(\alpha (t))\rangle= 0 $$

>[!Example] Linea asintotica en el cilindro
>En el cilindro la recta vertical seria $\alpha (t)=(1,0,0)+t(0,0,1)$  

>[!Proposition]
>Ninguna curva $\alpha$ en $M$ de rapidez unitaria con $\alpha(0) = p$ y $\alpha'(0) = v$ se curva menos que $|\kappa_{n,p}(v)|$.
>>[!Proof]-
>>4. Sea $\kappa_\alpha$ la curvatura de la curva $\alpha$. Por la desigualdad de Cauchy-Schwarz tenemos que
>>$$ \kappa_\alpha(0) =\lVert \alpha ''(0) \rVert = \|\alpha''(0)\| \lVert n(p) \rVert \ge |\langle \alpha''(0), n(p) \rangle| = |\kappa_{n,p}(v)|. $$

>[!Remark]
>¿Habrá alguna curva como en la proposición cuya curvatura sea exactamente $|\kappa_{n,p}(v)|$? Antes de responder a la pregunta, presentamos la siguiente proposición.

>[!Proposition]
>Sea $M$ una superficie con una orientación $n$. Sean $p \in M$ y $v \in T_pM$ con $\|v\| = 1$ y sea $P$ el plano normal a $M$ por $p$ en la dirección $v$, o sea,
>$$ P = \{q \in \mathbb{R}^3 \mid \langle q - p, n(p) \times v \rangle = 0\}. $$
>Entonces existe una curva $\beta : (-\varepsilon, \varepsilon) \to M$ con $\beta(0) = p$ y su trayectoria contenida en $P \cap M$.
>>[!Proof]-
>>5. Sea $\varphi : U \to M$ un sistema coordenado con $\varphi(0, 0) = p$. Llamamos $$ f : U \to \mathbb{R}, \quad f(u, v) = \langle \varphi(u, v) - p, n(p) \times v \rangle. $$
>>6. Se cumple que $f(0, 0) = 0$ y que $$ f(u, v) = 0 \quad \text{si y solo si} \quad \varphi(u, v) \in M \cap P, \quad (19) $$
>>7. Así que nos interesa el conjunto de nivel cero de $f$ cerca de $(0, 0)$. Veremos que es una curva, usando el Teorema de la Función Implícita. Basta mostrar que $0$ es un valor regular de $f$ cerca de $(0, 0)$. 
>>8. Calculamos $$ f_u(0, 0) = \langle \varphi_u(0, 0), n(p) \times v \rangle \quad \text{y} \quad f_v(0, 0) = \langle \varphi_v(0, 0), n(p) \times v \rangle. $$
>>9. Como $\varphi_u(0, 0)$ y $\varphi_v(0, 0)$ forman una base de $T_pM$, alguno de ellos no es ortogonal a $n(p) \times v \in T_pM$ (verificarlo como ejercicio). 
>>10. Supongamos que se trata del segundo (si no, se procede de manera análoga). Entonces $f_v(0, 0) \neq 0$. Por el Teorema de la Función Implícita, existe $h : (-\varepsilon, \varepsilon) \to \mathbb{R}$ con $h(0) = 0$ tal que $f(t, h(t)) = 0$ para todo $t$. 
>>11. Equivalentemente, por (19), $\varphi(t, h(t)) \in M \cap P$ para todo $t$. Entonces $\beta(t) = \varphi(t, h(t))$ cumple las condiciones requeridas.

>[!Proposition]
>Sea $\beta$ la curva de la proposición anterior. Entonces
>$$ \kappa_\beta(0) = |\kappa_{n,p}(v)|. $$
>>[!Proof]-
>>12. Sea $\alpha$ la reparametrización por longitud de arco de $\beta$ (existe pues $\beta$ es regular; verificarlo). Por definición, $\kappa_\beta(0) = \kappa_\alpha(0)$.
>>13. Como $\alpha$ y $\beta$ tienen la misma trayectoria, se cumple que $$ \langle \alpha(s) - p, n(p) \times v \rangle = 0 $$para todo $s$. 
>>14. Derivando dos veces y evaluando cada vez en $s = 0$ tenemos $$ \langle \alpha'(0), n(p) \times v \rangle = 0, \quad (20) $$$$ \langle \alpha''(0), n(p) \times v \rangle = 0. \quad (21) $$
>>15. Como $\alpha'(0) \perp n(p)$ y $\|\alpha'(0)\| = 1$, de (20) resulta que $\alpha'(0) = \pm v$. (Recordemos por definicion $\lVert v \rVert=1$)  
>>16. Suponemos que $\alpha'(0) = v$ (si no, consideramos $\bar{\alpha}(s) = \alpha(-s)$).
>>17. Por otra parte, como $\|\alpha'(s)\|^2 = 1$ para todo $s$ (por ser reparametrizacion [[Definiciones#^f2ee92]]), tenemos que $$ 0 = \langle \alpha''(0), \alpha'(0) \rangle = \langle \alpha''(0), v \rangle. $$
>>18. Entonces, por (21), $\alpha''(0)$ es un múltiplo de $n(p)$ y por lo tanto $$ \alpha''(0) = \langle \alpha''(0), n(p) \rangle n(p). $$
>>19. Así, como $n(p)$ es unitario $$ \kappa_\alpha(0) = \|\alpha''(0)\| = \|\langle \alpha''(0), n(p) \rangle n(p)\| = |\langle \alpha''(0), n(p) \rangle| \|n(p)\| = |\kappa_{n,p}(v)|, $$como deseábamos.

>[!Remark] 
>Esta ultima proposicion se puede verifica conceptualmente con la esfera. Si agarramos un plano normal a $S$ en $p$ en la direccion de alguna derivada entonces la interseccion de dicho plano con $S$ va a ser un circulo mayor (geodesica) por lo tanto su curvatura geodesica en $p$ es $0$ y por lo tanto su curvatura normal seria igual a su curvatura euclidea
# Caracterización de las superficies umbílicas conexas

>[!Remark]
>Sea $p$ un punto en una superficie $M$. Recordamos que $p$ se dice **umbílico** si la curvaturas principales de $M$ en $p$ coinciden ($k_1 = k_2 =_{\text{def}} k_o$). En particular, el operador de forma de $M$ en $p$ es $k$ veces la identidad: Para todo $Z \in T_pM$ se cumple que $$ A_p(Z) = k_o Z. $$
>Equivalentemente, todo vector unitario de $T_pM$ es una dirección principal. También, para cualquier base $\mathcal{B}$ de $T_pM$ vale $$ [A_p]_{\mathcal{B}} = \begin{pmatrix} k_o & 0 \\ 0 & k_o \end{pmatrix}. $$
>Para no arrastrar el signo en argumentos posteriores escribimos $k = -k_o$ y así tenemos para todo $Z$ que $$ dn_p(Z) = kZ. $$

>[!Theorem]
>Si todos los puntos de una superficie conexa $M$ son umbílicos, entonces $M$ está contenida en una esfera o en un plano.
>>[!Proof]-
>>1. Recordemos primero que si $U$ es un subconjunto abierto **conexo** de $\mathbb{R}^2$ y $f : U \to \mathbb{R}^m$ satisface $f_u = f_v = 0$, entonces $f$ es constante.
>>2. **Primer paso.** La curvatura principal $k$ en cada abierto coordenado **conexo** es constante.
>>3. Sabemos por hipótesis que $dn_q(Z) = k(q)Z$ para todo $Z \in T_qM$.
>>4. Sea $\varphi : U \to M$ un sistema coordenado de $M$ con $U$ conexo. Calculamos $$ (n \circ \varphi)_u(u, v) = dn_{\varphi(u, v)}(\varphi_u(u, v)) = k(\varphi(u, v))\varphi_u(u, v) = \lambda(u, v)\varphi_u(u, v), \quad (22) $$$$ (n \circ \varphi)_v(u, v) = dn_{\varphi(u, v)}(\varphi_v(u, v)) = k(\varphi(u, v))\varphi_v(u, v) = \lambda(u, v)\varphi_v(u, v) \quad (23) $$(hemos definido $\lambda = k \circ \varphi$). 
>>5. Derivamos (22) con respecto a $v$ y (23) con respecto a $u$ y obtenemos $$ (n \circ \varphi)_{uv} = \lambda_v \varphi_u + \lambda \varphi_{uv} \quad \text{y} \quad (n \circ \varphi)_{vu} = \lambda_u \varphi_v + \lambda \varphi_{vu} $$(se deja como ejercicio mostrar que $\lambda$ es suave).
>>6. Ahora restamos miembro a miembro, y como las derivadas cruzadas son iguales tenemos que $$ 0 = \lambda_v \varphi_u - \lambda_u \varphi_v, $$lo que implica que $\lambda_u = \lambda_v = 0$, ya que $\{\varphi_u(u, v), \varphi_v(u, v)\}$ es base de $T_{\varphi(u, v)}M$. 
>>7. Luego $\nabla \lambda = 0$ y como $U$ es conexo resulta $\lambda$ constante y por lo tanto $k$ es constante en $\varphi(U)$.
>>8. **Segundo paso.** Cada abierto coordenado conexo está contenido en un plano o en una esfera.
>>9. **Caso $\lambda = 0$.** Tenemos $(n \circ \varphi)_u = 0 = (n \circ \varphi)_v$. Luego $N =_{\text{def}} n \circ \varphi$ es constante en $U$. 
>>10. Sea $p \in \varphi(U)$, digamos $p = \varphi(u_o, v_o)$. Veamos que $\varphi(U)$ está contenido en el plano $P = \{q \in \mathbb{R}^3 \mid \langle q - p, N \rangle = 0\}$.
>>11. Llamando $f(u, v) = \langle \varphi(u, v) - p, N \rangle$, queremos que $f$ sea constante igual a cero. 
>>12. Calculamos $$ f_u = \langle \varphi_u, N \rangle = \langle \varphi_u, n \circ \varphi \rangle = 0, $$pues $\varphi_u(u, v) \in T_{\varphi(u, v)}M \perp n(\varphi(u, v))$. 
>>13. De la misma manera, $f_v = 0$. Luego $f$ es constante, pues $U$ es conexo. 
>>14. Como $f(u_o, v_o) = \langle p - p, n(p) \rangle = 0$, resulta $f = 0$.
>>15. **Caso $\lambda \neq 0$.** Queremos que mostrar que $\varphi(U)$ está contenida en una esfera.
>>16. Veamos que la aplicación $$ C : U \to \mathbb{R}^3, \quad C(u, v) = \varphi(u, v) - \frac{1}{k} n(\varphi(u, v)) $$es constante (y será el centro de la esfera). 
>>17. Derivamos $$ C_u(u, v) = \varphi_u(u, v) - \frac{1}{k} dn_{\varphi(u, v)}(\varphi_u(u, v)) = \varphi_u(u, v) - \frac{1}{k} k \varphi_u(u, v) = 0, $$y análogamente, $C_v = 0$. 
>>18. Como $U$ es conexo, $C$ es constante, digamos, $C = C_o$.
>>19. Para ver $\varphi(U)$ está en una esfera centrada en $C_o$, basta que todos los puntos de $\varphi(U)$ estén a la misma distancia de $C_o$, o equivalentemente, que la función $$ g : U \to \mathbb{R}, \quad g(u, v) = \|\varphi(u, v) - C_o\|^2 $$es constante. La verificación de este hecho se deja como ejercicio.
>>20. **Tercer paso.** La superficie entera $M$ está contenida en una esfera o en un plano. Lo hacemos solo para el caso $k = 0$.
>>21. Sea $p \in M$ y sea $\varphi : U \to M$ un sistema coordenado con $U$ conexo y $p \in \varphi(U)$. 
>>22. Por el paso 2, $\varphi(U)$ está en un plano, digamos en $P = \{p' \in \mathbb{R}^3 \mid \langle p' - p, N \rangle = 0\}$. 
>>23. El objetivo es probar que $M \subset P$. Dado $q \in M$, debemos mostrar que $q \in P$.
>>24. Como $M$ es conexa, existe una curva $\alpha : [0, 1] \to M$ suave a trozos tal que $\alpha(0) = p$ y $\alpha(1) = q$. 
>>25. Sean $$ A = \{t \in [0, 1] \mid \alpha(s) \in P \text{ y } (T_{\alpha(s)}M) \perp N \text{ para todo } s \in [0, t]\} \quad \text{y} \quad \tau = \sup A. $$(el conjunto $A$ es no vacío pues $0 \in A$). 
>>26. Comentario: Avanzamos por $\alpha$ mientras la curva se mantenga en el plano $P$ y $N$ sea normal a la superficie. Esta última condición es motivada por el ejemplo de la curva $\beta : \mathbb{R} \to \mathbb{R}^3$ definida por $\beta(t) = (t, t^4, 0)$ si $t \ge 0$ y $\beta(t) = (t, 0, t^4)$ si $t < 0$, que es suave, pero cambia abruptamente de plano en $t = 0$ (notar que la torsión en $t = 0$ no está definida, ya que allí la curvatura es cero).
>>27. Veamos que primero que $\alpha(\tau) \in P$. En efecto, $$ \langle \alpha(\tau) - p, N \rangle = \lim_{t \to \tau^-} \langle \alpha(t) - p, N \rangle = \lim_{t \to \tau^-} 0 = 0. $$
>>28. Así, si $\tau = 1$ tenemos que $q = \alpha(1) \in P$, como queríamos.
>>29. Ahora suponemos que $\tau < 1$ y llegaremos a una contradicción. 
>>30. Por el paso 2 existe un sistema coordenado $\psi : V \to M$ con $V$ conexo tal que $\alpha(\tau) \in \psi(V)$ y $\psi(V)$ está contenido en un plano, digamos $Q$.
>>31. Existe $\varepsilon > 0$ tal que $\alpha(t) = \psi(x(t), y(t))$ para todo $t \in (\tau - \varepsilon, \tau + \varepsilon)$. Si $\tau - \varepsilon < s < \tau$, se cumple que $$ N \perp T_{\alpha(s)}M = \text{span } \{\psi_x(x(s), y(s)), \psi_y(x(s), y(s))\} = T_{\alpha(s)}Q. $$
>>32. Como $T_{\alpha(s)}P \perp N$ y $P$ y $Q$ comparten el punto $\alpha(s)$, resulta que $Q = P$. 
>>33. En consecuencia, $\alpha(t) \in P$ y $(T_{\alpha(t)}M) \perp N$ para todo $t \in (\tau - \varepsilon, \tau + \varepsilon)$, lo que contradice que $\tau$ es el supremo de $A$

>[!Remark] Comentarios finales sobre curvatura
>1. Las superficies regladas tienen curvatura gaussiana $K \le 0$. ¿Con qué resultado de la página 57 se puede justificar la afirmación? En la curva de estrechez (si existe) la curvatura negativa es más pronunciada (o sea, menor). En otras palabras, para cada recta de la regla, la curvatura alcanza el mínimo al intersecar la curva guía.

>[!Definition] Superficie minima
>Las superficies con curvatura media idénticamente nula, $H = 0$, se denominan **superficies mínimas**. 
>Entre los ejemplos tenemos el plano, el helicoide y la catenoide. 

>[!Remark]
>Si sumergimos un alambre en agua jabonosa obtenemos una superficie mínima. Además, una región pequeña de una superficie mínima tiene área mínima entre la cercanas que comparten el borde con ella.

# Geodésicas

>[!Definition] Geodésica
>Sea $M$ una superficie con una orientación $n$. Se dice que una curva suave $\gamma : (a, b) \to M$ es una **geodésica** de $M$ si existe una función $\lambda : (a, b) \to \mathbb{R}$ tal que
>$$ \gamma''(t) = \lambda(t) n(\gamma(t)) $$
>para todo $t \in (a, b)$, o sea, si en cada instante la aceleración de $\gamma$ es normal a la superficie.
>Esta noción claramente no cambia si se remplaza la orientación $n$ por su opuesta $-n$.

>[!Remark]
>Como la aceleración es normal, no se percibe desde la superficie; es como si la curva tuviera "aceleración nula en $M$".

>[!Proposition] Geodesicas tienen rapidez constante
>Las geodésicas tienen rapidez constante.
>>[!Proof]-
>>1. Sea $\gamma$ una geodésica en un superficie $M$ con una orientación $n$. 
>>2. Calculamos $$ \begin{align} \frac{d}{dt} \|\gamma'(t)\|^2 & = \frac{d}{dt} \langle \gamma'(t), \gamma'(t) \rangle = 2 \langle \gamma''(t), \gamma'(t) \rangle \\ & = 2 \langle \lambda(t) n(\gamma(t)), \gamma'(t) \rangle \\ &= 2\lambda(t) \langle n(\gamma(t)), \gamma'(t) \rangle \\& = 0 \end{align} $$
>>pues $\gamma'(t) \in T_{\gamma(t)}M \perp n(\gamma(t))$.

^4deef6

>[!Example] 
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

>[!Example]
>Sea $S$ la esfera de radio 1 centrada en el origen. Entonces los círculos máximos recorridos con rapidez unitaria son geodésicas.
>>[!Proof]-
>>1. Recordamos que un círculo máximo es por definición la intersección de la esfera con un plano que pasa por el origen.
>>2. Supongamos que un cículo máximo resulta de intersecar la esfera con un plano con base ortonormal $\{u, v\}$. Entonces $$ \gamma(t) = \cos t \, u + \sin t \, v $$es una parametrización de rapidez unitaria. 
>>3. La trayectoria de $\gamma$ claramente está en el plano, y está en la esfera pues $\|\gamma(t)\| = 1$ para todo $t$ (verificarlo).
>>4. Tomamos la orientación $n$ hacia afuera, o sea, $n(p) = p$ para todo $p \in S$. 
>>5. Calculamos $$ \gamma'(t) = -\sin t \, u + \cos s \, v \quad \text{y} \quad \gamma''(t) = -\cos t \, u - \sin t \, v. $$
>>6. Luego $\gamma''(t) = -\gamma(t) = -n(\gamma(t))$. 
>>7. Así, podemos tomar $\lambda$ constante igual a $-1$ y por lo tanto $\gamma$ es una geodésica. $\square$

# Curvatura geodésica

>[!Definition] Marco móvil
>Sea $M$ una superficie con orientación $n$ y sea $\alpha : (a, b) \to M$ una curva de rapidez unitaria. Para cada $t \in (a, b)$, llamamos
>$$ u(t) = \alpha'(t) \quad \text{y} \quad v(t) = n(\alpha(t)) \times \alpha'(t). $$
>Para cada $t$, $\{u(t), v(t)\}$ es una base ortonormal de $T_{\gamma(t)}M$ (verificarlo).
>El par $\{u, v\}$ se llama **marco móvil** a lo largo de $\alpha$ asociado a la orientación $n$.

>[!Remark]
>El concepto definido a continuación indica cuánto se aparta de ser geodésica una curva de rapidez unitaria en una superficie, o en otras palabras, cuánto se curva una curva en una superficie, y hacia dónde.

>[!Definition] Curvatura geodésica
>Sea $\alpha : (a, b) \to M$ una curva de rapidez unitaria en una superficie $M$ con orientación $n$. La **curvatura geodésica** de $\alpha$ en el instante $t$ se define por
>$$ \kappa_{g, \alpha}(t) = \langle \alpha''(t), v(t) \rangle. $$

>[!Exercise]
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
>La curva $\alpha$ es geodésica si y solo si $\kappa_{g, \alpha} = 0$. Además se cumple
>$$ (\kappa_\alpha)^2 = (\kappa_{g, \alpha})^2 + (\kappa_{n, \alpha})^2. $$
>>[!Proof]-
>>8. Para cada $t$, $\{u(t), v(t), n(\alpha(t))\}$ es una base ortonormal de $\mathbb{R}^3$. Luego $$ \begin{align}\alpha'' &= \langle \alpha'', u \rangle u + \langle \alpha'', v \rangle v + \langle \alpha'', n \circ \alpha \rangle (n \circ \alpha) \quad(24)\\ &  = 0 + \kappa_{g, \alpha} v + \kappa_{n, \alpha} (n \circ \alpha) \end{align} $$ya que el primer término se anula, pues $$ \langle \alpha'', u \rangle = \langle \alpha'', \alpha' \rangle = \frac{1}{2} 2 \langle \alpha'', \alpha' \rangle = \frac{1}{2} \frac{d}{dt}\big|_0 \|\alpha'\|^2 = 0. $$ (recordar [[Definiciones#^4deef6]]) 
>>9. Primero probamos la segunda afirmación. Como $\{v(t), n(\alpha(t))\}$ es un conjunto ortonormal para todo $t$. Deducimos de (24) (usando ortnormalidad y el producto interno) que $$ (\kappa_\alpha)^2 = \|\alpha''\|^2 = (\kappa_{g, \alpha})^2 + (\kappa_{n, \alpha})^2. $$
>>10. Por otro lado, si $\alpha$ es una geodésica, entonces existe una función $\lambda : (a, b) \to \mathbb{R}$ tal que $\alpha''(t) = \lambda(t) (n \circ \alpha)(t)$ para todo $t$. 
>>11. Luego $$ \kappa_{g, \alpha} = \langle \alpha'', v \rangle = \langle \lambda (n \circ \alpha), v \rangle = 0, $$ya que $v(t) \in T_{\alpha(t)}M$.
>>12. Ahora, si la función $\kappa_{g, \alpha}$ es cero, tenemos por (24) que $\alpha'' = \kappa_{n, \alpha} (n \circ \alpha)$. 
>>13. Así, para cada $t$, $\alpha''(t)$ es un múltiplo de $n(\alpha(t))$ y por lo tanto $\alpha$ es geodésica.

>[!Remark]
>La primera parte de la prueba muestra que $|\kappa_{g, \alpha}|$ es la norma de la proyección ortogonal de $\alpha''$ sobre el plano tangente correspondiente.

>[!Example]- Ejemplo de curvatura geodesica
>Sea $S$ la esfera de radio 1 centrada en el origen, orientada mediante $n(p) = p$ para todo $p \in S$. Sea $\varphi : \mathbb{R} \times (-\frac{\pi}{2}, \frac{\pi}{2}) \to S$ dada por
>$$ \varphi(x, y) = (\cos y \cos x, \cos y \sin x, \sin y) = (\cos y (\cos x, \sin x), \sin y), $$
>y sea $\beta(x) = \varphi(x, y_o)$, que recorre el paralelo de altura $\sin y_o$ (o sea, de latitud $y_o$). Sea $\alpha$ la reparametrización de $\beta$ por longitud de arco, es decir,
>$$ \alpha(s) = \left( \cos y_o \left( \cos \left( \frac{s}{\cos y_o} \right), \sin \left( \frac{s}{\cos y_o} \right) \right), \sin y_o \right). $$
>A continuación hallamos la curvatura geodésica de $\alpha$. Calculamos
>$$ n(\alpha(s)) = \alpha(s) $$
>Por otro lado $$ u(s) = \alpha'(s) = \left( -\sin \left( \frac{s}{\cos y_o} \right), \cos \left( \frac{s}{\cos y_o} \right), 0 \right) $$
>Ademas
>$$ v(s) = n(\alpha(s)) \times u(s) = \left( -\sin y_o \cos \left( \frac{s}{\cos y_o} \right), -\sin y_o \sin \left( \frac{s}{\cos y_o} \right), \cos y_o \right) $$
>Y finalmente
>$$ \alpha''(s) = -\frac{1}{\cos y_o} \left( \cos \left( \frac{s}{\cos y_o} \right), \sin \left( \frac{s}{\cos y_o} \right), 0 \right). $$
>De allí,
>$$ \kappa_{g, \alpha}(s) = \langle \alpha''(s), v(s) \rangle = \tan y_o \quad (\text{constante}). $$
>Notamos para usarlo más adelante que esto es lo mismo que
>$$ \langle u', v \rangle = \tan y_o. \quad (25) $$
>Observamos que
>$$ \lim_{y_o \to (\frac{\pi}{2})^-} \kappa_{g, \alpha}(s) = \infty \quad \text{y} \quad \lim_{y_o \to (-\frac{\pi}{2})^+} \kappa_{g, \alpha}(s) = -\infty $$
>y que la curvatura geodésica de $\alpha$ es positiva si $y_o > 0$ y negativa si $y_o < 0$.
>En la siguiente figura vemos el marco móvil $\{u, v\}$ ($u$ en azul y $v$ en rojo), salvo que no tienen la longitud adecuada si el radio de la esfera es 1.
>![[Pasted image 20251130182416.png]]

# Campos paralelos a lo largo de curvas

>[!Remark]
>En contraste con el caso en que la superficie es un plano en $\mathbb{R}^3$, para la cual todos los espacios tangentes coinciden, para una superficie arbitraria $M$ no hay en general una correspondencia natural entre $T_pM$ y $T_qM$ si $p \neq q$ (si bien ambos son espacios vectoriales isomorfos).

>[!Definition] Campo a lo largo de una curva
>Sea $\alpha : (a, b) \to M$ una curva suave de rapidez unitaria en una superficie $M$. Un **campo $W$ en $M$ a lo largo de $\alpha$** es una función suave $W : (a, b) \to \mathbb{R}^3$ tal que $W(t) \in T_{\alpha(t)}M$ para todo $t \in (a, b)$.

>[!Definition] Campo paralelo
>Sea $M$ una superficie con una orientación $n$. Un campo $W$ a lo largo de una curva $\alpha$ en $M$ de rapidez unitaria se dice **paralelo a lo largo de $\alpha$** si $W'(t)$ es un múltiplo de $n(\alpha(t))$ para todo $t$. Equivalentemente, si para todo $t$ vale
>$$ W'(t) \perp T_{\alpha(t)}M. $$

>[!Remark]
>Como la variación de $W$ es perpendicular a la superficie, desde la misma se percibe a $W$ como constante; $W$ varía lo estrictamente necesario para mantenerse tangente a $M$.

>[!Example] Ejemplo de campo pararlelo
>Sea $P$ el plano $z = 0$ y $\alpha$ una curva de rapidez unitaria en $P$. Para todo $t$ tenemos que $T_{\alpha(t)}P = P = (0, 0, 1)^\perp$ y así un campo es paralelo a lo largo de $\alpha$ si y solo si es constante.

>[!Proposition]
>Un campo paralelo a lo largo de una curva en una superficie tiene norma constante.
>>[!Proof]-
>>1. Calculamos $$ \frac{d}{dt} \|W(t)\|^2 = 2 \langle W(t), W'(t) \rangle = 0 $$pues $W(t) \in T_{\alpha(t)}M$ por definicion. Y por ser paralelo $W'(t)\perp T_{\alpha (t)}M$ 

>[!Remark]
>En el práctico se ve que si $\gamma$ es una geodésica de una superficie $M$ y $W$ es un campo paralelo a lo largo de $\gamma$, entonces $W$ forma un ángulo constante con $\gamma'$. También, que una curva $\alpha$ en $M$ es geodésica si y solo si $\alpha'$ es un campo paralelo a lo largo de $\alpha$.

>[!Remark]
>Esto último concuerda con la idea de que al recorrer una geodésica "vamos derecho en la superficie"; la velocidad "no cambia de dirección".

>[!Example]- Campo paralelo en la esfera
>Sea $S$ la esfera de radio 1 centrada en el origen y sea $\alpha$ una reparametrización por longitud de arco del paralelo de altura $\sin y_o$.
>Buscamos un campo $W$ paralelo a lo largo de $\alpha$ tal que $W(0) = \alpha'(0)$.
>Como $W$ es paralelo a lo largo de $\alpha$, $\|W\|$ es constante. Luego $\|W\| = \|W(0)\| = \|\alpha'(0)\| = 1$.
>Como $\{u(t), v(t)\}$ es una base de $T_{\alpha(t)}S$ para todo $t$, tenemos que
>$$ W(t) = \cos \theta(t) u(t) + \sin \theta(t) v(t) \in T_{\alpha(t)}S \quad (26) $$
>para cierta función $\theta$ a valores reales. Nuestro objetivo es encontrar $\theta$.
>Para cualquier marco móvil, como $\{u, v\}$ es ortonormal, se cumple que
>$$ \|u\| = \|v\| = 1 \quad \text{y} \quad \langle u, v \rangle = 0. $$
>De las primeras identidades se deduce que $\langle u, u' \rangle = \langle v, v' \rangle = 0$, y de la segunda, que
>$$ \langle u', v \rangle + \langle u, v' \rangle = 0. $$
>En nuestro caso particular sabemos que $\langle u'(t), v(t) \rangle = \tan(y_o)$ para todo $t$. Luego, $\langle u, v' \rangle = -\tan(y_o)$ (también constante).
>Calculamos
>$$ W' = -\theta' \sin \theta u + \cos \theta u' + \theta' \cos \theta v + \sin \theta v'. \quad (A) $$
>Planteamos $W'(t) \perp T_{\alpha(t)}M$, o equivalentemente,
>$$ \langle W', u \rangle = 0 = \langle W', v \rangle. $$
>Evaluaondo estas expresiones en $W'$ como en (27) (recordar $u=\alpha '$ es unitario por eso $\langle u,u'\rangle=0=\langle v,v'\rangle$), tenemos
>$$ 0 = \langle W', u \rangle = -\theta' \sin \theta - \sin \theta \tan(y_o), \quad (B) $$
>$$ 0 = \langle W', v \rangle = \cos \theta \tan(y_o) + \theta' \cos \theta. $$
>Por lo tanto $$(\theta'+\tan(y_{0}))\cos\theta+(\theta'+\tan(y_{0}))\sin(\theta)=0$$  
>Como $\cos \theta$ y $\sin \theta$ no se anulan simultáneamente, resulta $\theta' = -\tan(y_o)$.
>Vemos que $W(t)$ como en $(A)$, con $\theta(t) = -t \tan(y_o)$ es el campo paralelo a lo largo de $\alpha$ buscado. En efecto, se verifica que $W(0) = \alpha'(0)$ pues $\theta(0) = 0$ y es paralelo pues satisface las ecuaciones $(B)$.

^fe0320

>[!Exercise]
>Encontrar el campo $W$ paralelo a lo largo de $\alpha$ tal que $W(0) = v(0)$.
>>[!Proof]-
>>2. Sabemos del ejemplo anterior que un campo paralelo $W$ a lo largo de $\alpha$ tiene la forma $W(t) = \cos \theta(t) u(t) + \sin \theta(t) v(t)$ con $\theta'(t) = -\tan(y_o)$.
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
>Recordamos que $\gamma$ es geodésica si y solo si $\gamma''(t) \perp T_{\gamma(t)}M$ para todo $t$, o equivalentemente,$$ \langle \gamma''(t), \varphi_u(u(t), v(t)) \rangle = \langle \gamma''(t), \varphi_v(u(t), v(t)) \rangle = 0 $$para todo $t$. Por que $\forall w\in T_{\gamma(t)}M \quad0=\langle\gamma'',w\rangle$ osea $0=\langle\gamma'',a\varphi_{u}+b\varphi_{v}\rangle\quad\forall a,b\in \mathbb{F}$ por lo tanto tomando $a=0, b=1$ o $a=1,b=0$ llegamos a lo que queriamos 
>Calculamos $$ \gamma' = \varphi_u(u, v) u' + \varphi_v(u, v) v' $$$$ \gamma'' = (\varphi_u(u, v))' u' + \varphi_u(u, v) u'' + (\varphi_v(u, v))' v' + \varphi_v(u, v) v''. $$
>Por abuso de notación, omitimos escribir $(u, v)$: $$ \gamma'' = (\varphi_{uu} u' + \varphi_{uv} v') u' + \varphi_u u'' + (\varphi_{vu} u' + \varphi_{vv} v') v' + \varphi_v v''. $$
>Ahora, hacemos producto escalar contra $\varphi_u$ y $\varphi_v$ y obtenemos:$$ 0 = \langle \varphi_u, \varphi_{uu} (u')^2 + \varphi_{uv} v' u' + \varphi_u u'' + \varphi_{vu} u' v' + \varphi_{vv} (v')^2 + \varphi_v v'' \rangle $$
>$$ 0 = \langle \varphi_v, \varphi_{uu} (u')^2 + \varphi_{uv} v' u' + \varphi_u u'' + \varphi_{vu} u' v' + \varphi_{vv} (v')^2 + \varphi_v v'' \rangle $$
>Distribuyendo las sumas, como $\varphi_{uv} = \varphi_{vu}$, resulta:$$ 0 = \langle \varphi_u, \varphi_{uu} \rangle (u')^2 + 2 \langle \varphi_u, \varphi_{uv} \rangle v' u' + \langle \varphi_u, \varphi_{vv} \rangle (v')^2 + \langle \varphi_u, \varphi_u \rangle u'' + \langle \varphi_u, \varphi_v \rangle v'', \quad (29) $$
>$$ 0 = \langle \varphi_v, \varphi_{uu} \rangle (u')^2 + 2 \langle \varphi_v, \varphi_{uv} \rangle v' u' + \langle \varphi_v, \varphi_{vv} \rangle (v')^2 + \langle \varphi_v, \varphi_u \rangle u'' + \langle \varphi_v, \varphi_v \rangle v''. $$
>Así, la curva $\gamma$ es geodésica si y solo si $u$ y $v$ satisfacen este sistema de ecuaciones diferenciales.

^4bc198

>[!Remark]
>El siguiente teorema afirma que las isometrías locales llevan geodésicas en geodésicas. Esto dice que el concepto de geodésica es **intrínseco**, a pesar de que la definición es **extrínseca**, ya que involucra el campo normal a la superficie.

>[!Theorem] Isometrías locales preservan geodésicas
>Sea $f : M \to N$ una isometría local entre dos superficies y sea $\gamma : (a, b) \to M$ una geodésica en $M$. Entonces $f \circ \gamma$ es una geodésica de $N$.
>>[!Proof]-
>>1. Antes de demostrarlo, repasamos que dado $p \in M$, existe un sistema coordenado $\varphi : U \to M$ con $p \in \varphi(U)$ tal que $\bar{\varphi} = f \circ \varphi : U \to N$ es un sistema coordenado de $N$ que satisface $\bar{E} = E$, $\bar{F} = F$ y $\bar{G} = G$, donde $E, F, G$ y $\bar{E}, \bar{F}, \bar{G}$ son los coeficientes de la primera forma fundamental de $\varphi$ y $\bar{\varphi}$, respectivamente. Veamoslo
>>- Igualdad de coeficientes
>>	1. Como la propiedad de ser geodésica es local, podemos considerar subintervalos de $(a, b)$ cuyas imágenes están contenidas en abiertos coordenados.
>>	2. Veremos a continuación que en la primera ecuación de (29) los coeficientes de $(u')^2$, $v' u'$, $(v')^2$, $u''$ y $v''$ dependen solo de $E, F, G$ y sus derivadas parciales.
>>	3. El coeficiente de $u''$ es $\langle \varphi_u, \varphi_u \rangle = E$. 
>>	4. El coeficiente de $v''$ es $\langle \varphi_u, \varphi_v \rangle = F$. 
>>	5. El coeficiente de $(u')^2$ es $$ \langle \varphi_u, \varphi_{uu} \rangle = \frac{1}{2} \langle \varphi_u, \varphi_u \rangle_u = \frac{1}{2} E_u. $$
>>	6. El coeficiente de $u' v'$ es $$ \langle \varphi_{uv}, \varphi_u \rangle = \frac{1}{2} \langle \varphi_u, \varphi_u \rangle_v = \frac{1}{2} E_v. $$
>>	7. El coeficiente de $(v')^2$ es$$ \langle \varphi_u, \varphi_{vv} \rangle, $$que reconocemos como una función por la derivada de otra. 
>>	8. Por la regla para derivar el producto, tenemos que $$ \langle \varphi_u, \varphi_{vv} \rangle = \langle \varphi_u, \varphi_v \rangle_v - \langle \varphi_{uv}, \varphi_v \rangle = F_{v}-\frac{1}{2}\langle\varphi_{v},\varphi_{v}\rangle_{u} = F_v - \frac{1}{2} G_u $$
>>	9. Se procede análogamente para los coeficientes de la segunda ecuación en (29).
>>- $\bar{\varphi}$ es carta  
>>	1. Como $f$ es una isometría local, entonces es un difeo local, esto es por que isometria local me dice que $df_{p}$ es isometria lineal y mas aun isomorfismo por que estamos en dimension finita. Entonces por [[Definiciones#^2e965b]] tenemos que $f$ es difeomorfismo entre vecindades de $p$ y $f(p)$. Esto nos daria el difeomorfismo
>>	2. Con lo cual, achicando $U$ si es necesario (para que sea difeo osea tenga la inversa y suavidad que necesitamos para ser carta), $\bar{\varphi} := f \circ \varphi$ es un sistema coordenado de $N$ y dado que $f$ es isometria los coeficientes de la primera forma fundamental de $\bar{\varphi}$ son también $E, F, G$. 
>>- Terminamos la demo
>>	1. Usamos la carta del paso 1. de la primera parte para poner en coordenadas $\gamma(t) = \varphi(u(t), v(t))$ entonces $f\circ\gamma=f\circ\varphi(u(t),v(t))=\bar{\varphi}(u(t),v(t))$ 
>>	2. Mostrado en la primera parte las condiciones para que $\bar{\varphi}=f \circ \gamma$ sea geodésica son exactamente las mismas que para que $\gamma$ lo sea. Osea para que $\gamma$ sea geodesica $u,v$ y sus derivadas deben cumplir las ecuaciones de [[Definiciones#^4bc198]]. Es evidente que si $u,v$ y derivadas cumplen para $\gamma$ entonces cumplen para $f\circ\gamma$ por que los coeficientes de 1era forma son los mismos.    
>>	3. Por lo tanto como $\gamma$ es geodesica $f\circ\gamma$ lo es tambien  

^0cb445

>[!Exercise]
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

>[!Remark]
>El siguiente teorema afirma que las isometrías locales entre superficies **preservan la curvatura gaussiana**. Se dice que la curvatura gaussiana es **intrínseca**.

>[!Theorem] Teorema Egregium de Gauss
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

>[!Example]
>No existen isometrías locales del plano a las esferas, pues el primero tiene curvatura gaussiana constante cero y la esfera de radio $r$ tiene curvatura constante $1/r^2$. Notar las implicaciones en cartografía.

>[!Remark]
>Se puede mostrar que la cinta que Möbius que presentamos algunas clases atrás tiene curvatura gaussiana estrictamente negativa (como ocurre en general con las superficies regladas nunca cilíndricas). Luego no es de las que se construyen uniendo las puntas de una cinta de papel.

>[!Remark]
>El Teorema Egregium sienta las bases para concebir un universo curvo sin necesidad de que se curve **en** un ambiente más grande.

>[!Remark]
>Hace algunas clases habíamos enunciado que la esfera es rígida, es decir, se deforma solo si se estira o encoge (o sea, alguna curva cambia la longitud), pero que un casquete pequeño no lo es.
>Por otro lado, se puede demostrar lo siguiente: Si $M$ y $N$ son dos superficies con la misma curvatura gaussiana *constante*, dados $p \in M$ y $q \in N$, existen entornos abiertos de $p$ y $q$ en $M$ y $N$, respectivamente, que son isométricos.
>Entonces el ejercicio 10 del práctico 7 provee un ejemplo de una superficie que no es localmente congruente a la esfera de radio 1, pero sus conjuntos abiertos pequeños son isométricos a abiertos pequeños de la esfera.

# Existencia y unicidad de geodésicas

>[!Proposition] Unicida de Geodesica
>Sea $M$ una superficie. Dados $p \in M$ y $v \in T_pM$, existe una geodésica $\gamma$ en $M$ tal que $\gamma(0) = p$ y $\gamma'(0) = v$, definida en cierto intervalo abierto $I$ que contiene al cero.
>Se verifica la siguiente noción de unicidad: Si $\sigma : J \to M$ es una geodésica definida en un intervalo abierto $J$, con las mismas condiciones iniciales, es decir, $\sigma(0) = p$ y $\sigma'(0) = v$, entonces $\gamma$ y $\sigma$ coinciden en la intersección $I \cap J$.
>>[!Proof]-
>>1. Elegimos $\varphi:U\rightarrow M$ una carta con $p \in \varphi(U)$. Por continuidad de $\sigma,\gamma$ tenemos que existe un intervalo $I_{0}\subseteq I\cap J$ con $0\in I_{0}$ tal que $\sigma(I_{0}),\gamma(I_{0})\subseteq I_{0}$      
>>2. Luego si ponemos a $\gamma$ en coordenadas, $\gamma(s) = \varphi(x(s), y(s))$, entonces $(x(s), y(s))$ satisface el sistema de ecuaciones diferenciales de orden 2 que vimos más arriba
>>3. Si ponemos $\sigma$ en coordenadas tenemos $\sigma(s)=\varphi(\bar{x}(s),\bar{y}(s))$, pero entonces $(\bar{x}(s),\bar{y}(s))$ tambien cumple las mismas ecuaciones 
>>4. Luego por unicidad de ODE tenemos $(\bar{x}(s),\bar{y}(s))=(x(s),y(s))$ mostrando que $\gamma=\sigma$

^e70295

>[!Remark]
>Sea $S$ la esfera de radio 1 centrada en el origen. Sabemos que los círculos máximos son trayectorias de geodésicas. Ahora vemos que no hay otras

>[!Proposition]
>Toda geodésica no constante en $S$ tiene como trayectoria a un arco de círculo máximo.
>>[!Proof]-
>>1. Sea $\gamma$ una geodésica no constante en $S$. Como el enunciado se refiere a la trayectoria, podemos suponer sin pérdida de generalidad que $\|\gamma'\| = 1$.
>>2. Llamamos $p = \gamma(0)$ y $v = \gamma'(0)$. Tenemos que $v \in T_pS = p^\perp$. Luego $\{p, v\}$ es un subconjunto ortonormal de $\mathbb{R}^3$. 
>>3. Sea $\sigma : \mathbb{R} \to S$ definida por $\sigma(s) = p\cos s + v\sin s$. Ya vimos que $\sigma$ es geodésica de $S$ y se verifica fácilmente que $\sigma(0) = p$ y $\sigma'(0) = v$. 
>>4. Por la unicidad, $\gamma(s) = \sigma(s)$ para todo $s$ en el dominio de $\gamma$. 
>>5. Así, la trayectoria de $\gamma$ está en el cículo máximo determinado por la base $\{p, v\}$.

>[!Remark]
>En el práctico se encuentran todas las geodésicas del cilindro. Si el cilindro está bruñido, las geodésicas se pueden visualizar como hilos tirantes sobre él.

>[!Remark]
>Ahora vemos otra aplicación de la existencia y unicidad de geodésicas.

>[!Proposition] Caso reflexion preserva geodesicas
>Sea $M$ una superficie regular y sea $P$ un plano que intersecta a $M$ en la trayectoria de una curva $\alpha$ de rapidez unitaria. Si la reflexión respecto de $P$ lleva $M$ en $M$, entonces $\alpha$ es una geodésica de $M$.
>>[!Proof]-
>>6. Sin pérdida de generalidad podemos suponer que $P = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ y $\alpha(t) = (u(t), v(t), 0)$. (Notar que el enunciado nos dice que $\alpha \subseteq P$) 
>>7. Se cumple que $\alpha'(0) = (u'(0), v'(0), 0)$ y que la reflexión respecto de $P$ está dada por $R(x, y, z) = (x, y, -z)$.
>>8. Sea $\gamma$ una geodésica en $M$ con $\gamma(0) = \alpha(0)$ y $\gamma'(0) = \alpha'(0)$. 
>>9. Supongamos que $\gamma(t) = (x(t), y(t), z(t))$ para todo $t$. Luego $$ \gamma'(0) = (x'(0), y'(0), z'(0)) = (u'(0), v'(0), 0). $$
>>10. Sea $\beta$ la curva en $M$ definida por $$ \beta(t) = R(\gamma(t)). $$
>>11. Como $R$ es una transformación euclidiana (aunque no rígida) que lleva $M$ en $M$, entonces $R|_M : M \to M$ es una isometría de $M$. [[Definiciones#^0cb445]] nos asegura que lleva geodésicas de $M$ en geodésicas de $M$. Entonces $\beta$ también es una geodésica de $M$.
>>12. Claramente, $\beta(0) = \gamma(0) = \alpha(0)$, pues $\alpha(0) \in P$. Y por que $R$ es reflexion sobre $P$ 
>>13. Como $R$ es una transformación lineal, tenemos que $$ \beta'(0) = (dR)_{\gamma(0)}(\gamma'(0)) = R(\alpha'(0)) = \alpha'(0) = \gamma'(0), $$pues $\alpha'(0)$ también está en $P$ (Por definicion de $\alpha$). 
>>14. De esta manera, $\gamma$ y $\beta$ son dos geodésicas con el mismo punto inicial y la misma velocidad inicial. 
>>15. Por [[Definiciones#^e70295]], las curvas coinciden en alguna interseccion de sus dominios, cerca del $0$. Luego, $$ \beta(t) = R(\gamma(t)) = R(x(t), y(t), z(t)) = (x(t), y(t), -z(t)) $$es igual a $$ \gamma(t) = (x(t), y(t), z(t)) $$para todo $t$. 
>>16. Por lo tanto, $z(t) = 0$ para todo $t$ y así ambas curvas están en $P$, y en particular en la intersección de $P$ con $M$, que es la trayectoria de $\alpha$.
>>17. Finalmente, como además $\alpha, \gamma$ y $\beta$ tienen rapidez unitaria, el mismo punto incial y la misma velocidad inicial, las tres curvas son iguales en un intervalo cerca del $0$. 
>>18. Obviamente esto lo podriamos haber hecho para cualqueir punto no necesariamente el $0$. Así, $\alpha$ es una geodésica en $M$.

^2bbc2c

# Distancia en una superficie y propiedades minimizantes de las geodésicas

>[!Definition]
>Sea $M$ una superficie conexa y sean $p, q$ dos puntos de $M$. Se define la **distancia** entre $p$ y $q$ en $M$ mediante
>$$ d(p, q) = \inf \{ \text{long}(\alpha) \mid \alpha \text{ es una curva suave a trozos en } M \text{ que une } p \text{ con } q \}. $$
>Notar que el conjunto es no vacío pues $M$ es conexa.

>[!Exercise]
>Mostrar que $d(p, q) \ge \|p - q\|$ para todo $p, q \in M$.

>[!Remark]
>Ahora mostramos que el ínfimo no siempre es mínimo.

>[!Example]
>Sea $P$ el plano $z = 0$ y sea $M = P - \{(0, 0, 0)\}$. Sean $p = (-1, 0, 0)$ y $q = (1, 0, 0)$ dos puntos en $M$. Para cada $y > 0$ sea $\alpha_y$ una curva suave a trozos en $M$, inyectiva, que une $p$ con $q$, con una trayectoria como la roja en el dibujo. ![[Pasted image 20251204200638.png]]
>Tenemos que
>$$ \lim_{y \to 0^+} \text{long}(\alpha_y) = \lim_{y \to 0^+} 2\sqrt{1 + y^2} = 2. $$
>Luego, $d(p, q) \le 2$. (por def de ínfimo) 
>Pero no existe ninguna curva en $M$ que une $p$ con $q$ de longitud menor o igual que 2, porque vimos en un ejercicio al comienzo de la materia que las únicas curvas de longitud mínima en $P$ que unen $p$ con $q$ son reparametrizaciones del *segmento* que los une. Como este segmento contiene al origen, que no está en $M$, se concluye lo deseado. Además, los argumentos implican que $d(p, q) = 2$.

>[!Theorem]
>Sea $\gamma$ una curva suave a trozos con rapidez unitaria que une dos puntos $p$ y $q$ de una superficie y realiza la distancia entre ellos (o sea, $d(p, q) = \text{long}(\gamma)$). Entonces $\gamma$ es una geodésica (en particular, es suave).
>>[!Proof]
>>No lo demostramos. Quien tenga interés puede ver el Teorema 5.9 del libro *Elements of Differential Geometry* de Millman y Parker.

>[!Remark] Observaciones
>- En la esfera de radio 1 centrada en el origen, una geodésica de longitud mayor que $\pi$ no realiza la distancia entre sus extremos (su trayectoria es un arco de círculo máximo de longitud mayor que $\pi$).
>- Dos puntos de una superficie pueden estar unidos por dos geodésicas que realizan la distancia entre ellos, con trayectorias distintas. Por ejemplo, el polo norte y el polo sur de la esfera unidos por dos meridianos distintos.

>[!Proposition]
>Sean $p$ y $q$ dos puntos en la esfera de radio 1 centrada en el origen. Entonces
>$$ d(p, q) = \angle(p, q). $$
>Recordar que el ángulo entre dos vectores unitarios $p$ y $q$ de $\mathbb{R}^n$ es $\arccos(\langle p, q \rangle)$, es decir, el único número $\theta$ en el intervalo $[0, \pi]$ tal que $\cos \theta = \langle p, q \rangle$.

>[!Theorem]
>Las geodésicas minimizan distancias localmente. Más precisamente, si $\gamma : (a, b) \to M$ es una geodésica de la superficie $M$ y $t_o \in (a, b)$, entonces existe $\delta > 0$ tal que
>$$ \gamma|_{[t_o - \delta, t_o + \delta]} $$
>realiza la distancia entre sus extremos y además, si otro segmento geodésico lo hace, tiene la misma trayectoria.

>[!Remark] 
>A continuación presentamos un teorema que describe las trayectorias de las geodésicas en una superficie de revolución.
>Antes de enunciarlo, repasamos de una clase pasada una de las ecuaciones diferenciales que satisfacen las coordenadas $u, v$ de una geodésica $\gamma(t) = \varphi(u(t), v(t))$, donde $\varphi$ es un sistema coordenado:$$ 0 = \langle \varphi_u, \varphi_{uu} \rangle (u')^2 + 2 \langle \varphi_u, \varphi_{uv} \rangle v' u' + \langle \varphi_u, \varphi_{vv} \rangle (v')^2 + \langle \varphi_u, \varphi_u \rangle u'' + \langle \varphi_u, \varphi_v \rangle v''. \quad (30) $$
>Después habíamos enunciado un teorema que afirma que las isometrías locales llevan geodésicas en geodésicas. En la prueba de ese teorema habíamos escrito los coeficientes de $(u')^2$, $v' u'$, $(v')^2$, $u''$ y $v''$ en la ecuación en términos de los coeficientes $E, F$ y $G$ de la primera forma fundamental de $\varphi$ y sus derivadas parciales, como sigue: $$ \langle \varphi_u, \varphi_{uu} \rangle = \frac{1}{2} E_u, \quad \langle \varphi_{uv}, \varphi_u \rangle = \frac{1}{2} E_v, \quad \langle \varphi_u, \varphi_{vv} \rangle = F_v - \frac{1}{2} G_u, \quad (31) $$$$ \langle \varphi_u, \varphi_u \rangle = E, \quad \langle \varphi_u, \varphi_v \rangle = F. $$

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
>>6. Supongamos que $\gamma$ es geodésica. Entonces $\gamma$ satisface la ecuación diferencial (30). 
>>7. Para ver cómo es en nuestro caso, usando [[Definiciones#^259071]], calculamos $$ E_v(u, v) = 2r(v)r'(v), \quad E_u(u, v) = 0, \quad F_v - \frac{1}{2} G_u = 0, $$$$ E(u, v) = (r(v))^2, \quad F(u, v) = 0. $$
>>8. Así que esa ecuación diferencial resulta ser $$ 0 = 2r(v)r'(v) u' v' + (r(v))^2 u'' = ((r(v))^2 u')'. \quad (32) $$
>>9. Por otro lado, $\rho(s) = r(v(s))$ por que es la distancia hacia el eje $z$ que es $\sqrt{ x^{2}+y^{2} }$ en este caso $|r(v)|\sqrt{\cos(u)^{2}+\sin(u)^{2}}=r(v)$  
>>10. Ademas $\theta(s)$ es el ángulo que forma $\gamma'(s)$ con el vector coordenado $\varphi_u(u(s), v(s))$. Por que cualquier paralelo es $\beta(u)=\varphi(u,v_{0})$ (osea fijamos la altura en $v_{0}$) entonces $\beta'(u)=\varphi_{u}(u,v_{0})$ ahora si evaluamos esto en un punto generico de la superfiecie dado por $\gamma$, osea $u(s),v(s)$ tenemos $\varphi_{u}(u(s),v(s))$ es la derivada del paralelo en ese punto. Osea tenemos a $\gamma'$ y la derivada del paralelo en el plano tangente asi que podemos comprar angulos      
>>11. Calculamos $$ \begin{align}\rho \cos \theta &= r(v) \frac{\langle \gamma', \varphi_u(u, v) \rangle}{\|\gamma'\| \|\varphi_u(u, v)\|}\\& = r(v) \frac{\langle \varphi_u(u, v) u' + \varphi_v(u, v) v', \varphi_u(u, v) \rangle}{\|\varphi_u(u, v)\|} \\& = r(v) \frac{E(u, v) u'}{\sqrt{E(u, v)}} \\ &= r(v) \sqrt{E(u, v)} u'\\& = r(v) \sqrt{(r(v))^2} u' \\&= (r(v))^2 u'\end{align}$$que es constante por (32).
>>12. La recíproca no la demostramos.

>[!Remark]
>Si $\rho$ es una función decreciente, entonces $\cos \theta$ crece (para mantener el producto constante) y así $\theta$ decrece, pues $\cos$ es decreciente en el intervalo $(0, \pi)$.

>[!Remark]
>El Teorema de Clairaut es un caso particular de un resultado de Emmy Noether, una de las primeras mujeres alemanas a las se les permitió asistir a clases de matemática en la universidad, pero que sufrió muchas discriminaciones en su carrera profesional por ser mujer. Pueden consultar en wikipedia. El teorema de Noether es más general y limpio. Nosotros nos conformamos con uno particular y con muchas cuentas, pero más concreto (lo de Noether es más abstracto).
>![[Pasted image 20251205191936.png]]

>[!Example] Un problema de geodésicas en el cono
>Un vaquero se encuentra al pie de una montaña de hielo sin fricción formada por un cono con una base circular con un ángulo de inclinación $\theta$. Lanza su lazo, que se desliza perfectamente sobre la punta del cono, lo tensa y trata de escalar. ¿Cómo debe ser el ángulo $\theta$ para que el vaquero pueda escalar la montaña de hielo?
>>[!Proof]- Solución
>>1. Consideramos un sector circular de ángulo $\beta$, como en la figura. Identificamos los segmentos $\ell_1$ y $\ell_2$, que suponemos de longitud 1, y obtenemos un cono.
>>2. Ahora relacionamos $\beta$ con el ángulo de inclinación $\theta$ del cono. Sea $r$ el radio del círculo base del cono. Luego la circunferencia de la base mide $2\pi r$, que es igual a $\beta$, por construcción (el arco del sector circular se convierte en la circunferencia base).
>>3. Como $\ell_1 = \ell_2 = 1$ (la generatriz del cono es 1), tenemos que $r = \sin(\text{semiángulo del cono})$. Pero el problema define $\theta$ como el ángulo de inclinación de la base, así que el radio $r$ es la proyección de la generatriz: $r = \cos \theta$.
>>4. Entonces, $\beta = 2\pi r = 2\pi \cos \theta$, de donde $\cos \theta = \frac{\beta}{2\pi}$.
>>5. Una soga tirante en el cono determina una geodésica cuyos extremos son el mismo punto, donde está situado el vaquero, que llamamos $p$. Podemos suponer sin pérdida de generalidad que $p$ es el punto donde $P$ se une con $Q$ al armar el cono con el sector circular ![[Pasted image 20251205192019.png]]
>>6. Ahora bien, la aplicación que lleva el sector circular en el cono es una isometría (localmente, fuera del vértice), las isometrías llevan geodésicas en geodésicas, y las trayectorias geodésicas del plano son segmentos de rectas.
>>7. Como la única manera de que un segmento de recta en el sector circular una $P$ con $Q$ (que son el mismo punto en el cono) es que el segmento esté completamente contenido en el sector.
>>8. Esto requiere que el ángulo $\beta$ sea menor que $\pi$. Si $\beta \ge \pi$, el segmento que une un punto en un borde con su identificado en el otro borde pasaría "por fuera" del sector (o por el vértice, que no es parte de la superficie regular).
>>9. Por lo tanto, se tiene que
>>   $$ \cos \theta = \frac{\beta}{2\pi} < \frac{\pi}{2\pi} = \frac{1}{2}. $$ ![[Pasted image 20251205192041.png]]
>>10. Esto implica que $\theta > \arccos(1/2) = \pi/3 = 60^\circ$.
>>11. Así, el ángulo de inclinación debe ser mayor a $60^\circ$ para que la geodésica (el lazo tenso) no se "salga" o se "trabe" en el vértice, permitiendo al vaquero escalar.

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
