# Soluciones — Geometría Diferencial — Práctico 6

---

>[!Example] Ejercicio 1
> a) Mostrar que el helicoide es una superficie reglada.
> b) Mostrar que la silla de montar $M = \{(x, y, xy) \mid x, y \in \mathbb{R}\}$ es doblemente reglada, y encontrar las curvas de estrechez para cada una de las reglas.
>>[!Proof]-
>>**a)**
>>El helicoide se parametriza usualmente como $\mathbf{x}(u, v) = (v \cos u, v \sin u, cu)$.
>>Podemos reescribirlo como:
>>$$ \mathbf{x}(u, v) = (0, 0, cu) + v(\cos u, \sin u, 0) $$
>>Esto tiene la forma $\alpha(u) + v \beta(u)$, donde $\alpha(u)$ es una curva (el eje $z$) y $\beta(u)$ es un vector director unitario que rota en el plano $xy$.
>>Por definición, es una superficie reglada (generada por una familia de rectas).
>>
>>**b)**
>>La silla de montar $z = xy$ se puede parametrizar como $\mathbf{x}(x, y) = (x, y, xy)$.
>>Para ver que es doblemente reglada, buscamos rectas contenidas en la superficie.
>>La ecuación $z - xy = 0$ se puede ver como una relación de proporcionalidad.
>>
>>**Familia 1:** Fijamos $x = x_0$. La intersección con el plano $x = x_0$ es la curva $z = x_0 y$, que es una recta en ese plano.
>>Parametrización de la recta $L_{x_0}(t) = (x_0, t, x_0 t) = (x_0, 0, 0) + t(0, 1, x_0)$.
>>Esto nos da una familia de rectas (variando $x_0$) que cubren la superficie.
>>
>>**Familia 2:** Fijamos $y = y_0$. La intersección es $z = y_0 x$, otra recta.
>>Parametrización $L'_{y_0}(t) = (t, y_0, y_0 t) = (0, y_0, 0) + t(1, 0, y_0)$.
>>
>>Como tiene dos familias de rectas, es doblemente reglada.
>>
>>**Curvas de estrechez (estricción):**
>>La curva de estricción es el lugar geométrico de los puntos centrales de las generatrices (donde la recta está "más cerca" de sus vecinas o donde el parámetro de distribución se anula/es singular, o geométricamente el pie de la normal común a la recta y su derivada).
>>Para una superficie reglada $\mathbf{x}(u, v) = \alpha(u) + v \beta(u)$ con $|\beta|=1$, el parámetro de estricción es $\bar{v} = - \frac{\alpha' \cdot \beta'}{|\beta'|^2}$.
>>
>>*Para la Familia 1:*
>>$\alpha(u) = (u, 0, 0)$ (eje $x$). Vector director $\delta(u) = (0, 1, u)$.
>>Normalizamos $\delta$: $\beta(u) = \frac{(0, 1, u)}{\sqrt{1+u^2}}$.
>>Calculamos con la fórmula general (sin normalizar necesariamente, usando la fórmula para $\delta$ no unitario):
>>El punto de estricción satisface que el vector que une $\alpha(u) + \bar{v}\delta(u)$ con su vecino es ortogonal a $\delta$ y $\delta'$.
>>Más simple: El punto central de la generatriz $(x_0, t, x_0 t)$.
>>La "cintura" de la superficie está en el origen.
>>Cálculo formal:
>>$\alpha(u) = (u, 0, 0)$, $\alpha' = (1, 0, 0)$.
>>$\delta(u) = (0, 1, u)$, $\delta' = (0, 0, 1)$.
>>$\alpha' \cdot \delta' = 0$.
>>El numerador de la fórmula de estricción es 0.
>>Por tanto, el punto de estricción está en $v=0$ (respecto a la parametrización $\alpha + v\delta$).
>>Esto corresponde a la curva $\alpha(u) = (u, 0, 0)$, es decir, el **eje x**.
>>
>>*Para la Familia 2:*
>>$\alpha(v) = (0, v, 0)$ (eje $y$). $\delta(v) = (1, 0, v)$.
>>$\alpha' = (0, 1, 0)$, $\delta' = (0, 0, 1)$.
>>$\alpha' \cdot \delta' = 0$.
>>El punto de estricción está en la curva base $\alpha(v)$, es decir, el **eje y**.

---

>[!Example] Ejercicio 2
> a) Sea $U$ un abierto de $\mathbb{R}^2$ y sea $h : U \to \mathbb{R}$ una función acotada suave. Sea $M$ la superficie dada por el gráfico de $h$. Escribir una expresión para el área de regiones en $M$ que involucre las derivadas parciales de $h$.
> b) Se consideran el paraboloide de revolución $$M = \{(x, y, x^2 + y^2) \mid x, y \in \mathbb{R}\}$$ y la silla de montar $$N = \{(x, y, x^2 - y^2) \mid x, y \in \mathbb{R}\}$$Mostrar que las intersecciones de $M$ y $N$ con el cilindro sólido $\{(x, y, z) \mid x^2 + y^2 \le 1\}$ tienen igual área.
>>[!Proof]-
>>- **a)**
>>	1. Parametrización de grafico: $\mathbf{x}(u, v) = (u, v, h(u, v))$.
>>	2. Vectores tangentes: $\mathbf{x}_u = (1, 0, h_u)$ $\mathbf{x}_v = (0, 1, h_v)$
>>	3. Producto cruz: $(-h_{u},-h_{v},1)$
>>	4. $\lVert \mathbf{x}_u\times\mathbf{x}_v \rVert=\sqrt{ 1+h_{u}^{2}+h_{v}^{2} }$  
>>	5. Calculo area $$ \text{Área}(\mathbf{x}(V)) = \iint_V \sqrt{ 1+h_{u}^{2}+h_{v}^{2} } du dv $$
>>- **b)**
>>	1. Para el paraboloide tenemos la parmetrizacion $\varphi(u,v)=(u,v,u^{2}+v^{2})$
>>	2. $\varphi_{u}=(1,0,2u)$ y $\varphi_{v}=(0,1,2v)$ entonces $\varphi_{u}\times\varphi_{v}=(-2u,-2v,1)$
>>	3. Por lo tanto $A(\varphi(D))=\iint_{D}\sqrt{ 1+4u^{2}+4v^{2} }$ 
>>	4. Para la silla de montar tenemos la parametrizacion $\phi(u,v)=(u,v,u^{2}-v^{2})$
>>	5. Entonces $\phi_{u}=(1,0,2u)$ y $\phi_{v}=(0,1,-2v)$ luego $\phi_{u}\times\phi_{v}=(-2u,2v,1)$
>>	6. Luego $A(\phi(D))=\iint_{D}\sqrt{ 1+4u^{2}+4v^{2} }$ 
>>	7. Las integrales son idénticas, por lo tanto las áreas son iguales.
>>	8. Notar que podria haber usado cualquier region. Siempre y cuando integres sobre las mismas regiones en ambos casos (y que las regiones sean valida, en este caso el dominio es todo $\mathbb{R}^{2}$ asi que siempre lo seran , si son medibles)  

---

>[!Example] Ejercicio 3
> Sean $P$ el plano $z = 0$ y $C$ el cono $\{(x, y, z) \mid x^2 + y^2 = z^2, z > 0\}$. En cada caso, mostrar que $f$ es un difeomorfismo y decidir si preserva el área.
> - a) $f : P \to P, f(x, y, 0) = (3x + 5y + 2, 4x + 7y - 1, 0)$
> - b) $f : C \to P - \{(0, 0, 0)\}, f(x, y, z) = (x, y, 0)$.
>>[!Proof]-
>>- **a)**
>>	1. Notar $df_{p} = \begin{pmatrix} 3 & 5 & 0 \\  4 & 7 & 0 \\ 0 & 0 & 0 \end{pmatrix}$. Pero ahora vamos a restringir $df_{p}\big|_{T_{p}P}$ 
>>	2. Supongo $(u,v,w)\in T_{p}P$ tal que $df_{p}(u,v,w)=0$ entonces $(3u+5v,4u+7v,0)=0$ entonces $3u=-5v$ y $4u=-7v$ con lo cual $3 \left( -\frac{7}{4} \right)v=-5v$ entonces $21v=20v$ osea $v=0$ entonces $u=0$
>>	3. Con lo cual $ker(df_{p}|_{T_{p}P})=\emptyset$ y tanto el dominio $T_{p}P$ como la imagen $T_{f(p)}P$ tienen la misma dimension. Entonces $df_{p}$ es isomorfismo (y vale para cualquier $p$)
>>	4. Obviamente $f$ es suave por que es restriccion de algo suave y es claramente biyectiva. Entonces por [[Definiciones#^409ff8]] $f$ es difeomorfismo
>>	5. En realidad es mas facil reescribir $$\tilde{f}(x,y)=(3x+5y+2,4x+7y-1)$$ 
>>	6. Usando [[Definiciones#^17a44b]] con $g\equiv 1$ y considerando $\det(d \tilde{f}_{p})=1$ tenemos $$Area(A)=\int_{A}1=\int_{A} g\circ\tilde{f}|\det(d\tilde{f}_{p})|=\int_{\tilde{f}(A)}{g}=\int_{\tilde{f}(A)}1=Area(\tilde{f}(A))$$
>>- **b)**
>>	1. Misma idea que a $df_{p} = \begin{pmatrix} 1 & 0 & 0 \\  0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ y se ve que el kernel es nulo y restringiendo las dimensiones se ve que es isomorfismo
>>	2. Area de cono: Primero damos una parametrizacion del cono $\varphi(r,\theta)=(r\cos\theta,r\sin\theta,r)$ 
>>	3. Calculando el area de $D$ que es el cono de altura $R$ hacia arriba, como siempre se llega a $$A(D)=\int_{0}^{2\pi} \int_{0}^{R}r\sqrt{ 2 }dr d\theta =\sqrt{ 2 }R^{2}\pi $$
>>	4. Ahora si miramos a donde nos manda $f$ a ese cono de altura $R$ seria a $\tilde{D}=\{ (x,y)\in \mathbb{R}^{2}:x^{2}+y^{2}=R^{2} \}$ osea el disco de radio $R$ 
>>	5. Y devuelta podemos parametrizarlos usando $\phi(r,\theta)=(r\cos(\theta),r\sin\theta)$ llegamos a que $$A(\tilde{D})=\int_{0}^{2\pi}\int_{0}^{R}r drd\theta=\pi R^{2}$$
>>	6. Si no directamente haciamos $f\circ\varphi(r,\theta)=(r\cos\theta,r\sin\theta,0)$ y llegabamos a lo mismo

---

>[!Example] Ejercicio 4
> Mostrar que el difeomorfismo $F$ del ejercicio 9 del Práctico 5 (la proyección de Arquímedes) preserva áreas.
>>[!Proof]-
>>1. La proyección es la dad en el ejercicio:$$F(x, y, z) = \left( x\sqrt{\frac{1+z^2}{1-z^2}}, y\sqrt{\frac{1+z^2}{1-z^2}}, z \right)$$
>>2. Verificación de áreas: En la esfera unitaria, usando coordenadas esféricas $$\varphi(\theta, \phi)=(\sin\theta \cos\phi,\sin\theta \sin\phi, \cos\theta)$$
>>3. Entonces $\lVert \varphi_{u}\times\varphi_{v} \rVert=\sin\theta$ 
>>4. La proyección de Arquímedes está dada por $$F(x,y,z)=\left(x\sqrt{\frac{1+z^2}{1-z^2}},\,y\sqrt{\frac{1+z^2}{1-z^2}},\,z\right).$$
>>5. Componiendo con $\varphi$ se obtiene $$(F\circ\varphi)(\theta,\phi)=\left(\sin\theta\cos\phi\sqrt{\frac{1+\cos^2\theta}{1-\cos^2\theta}},\sin\theta\sin\phi\sqrt{\frac{1+\cos^2\theta}{1-\cos^2\theta}},\cos\theta\right).$$ Como $1-\cos^2\theta=\sin^2\theta$, se simplifica a $$(F\circ\varphi)(\theta,\phi)=\left(\cos\phi\sqrt{1+\cos^2\theta},\sin\phi\sqrt{1+\cos^2\theta},\cos\theta\right).$$
>>6. Las derivadas parciales son $$\partial_\theta(F\circ\varphi)=\left(-\frac{\cos\theta\sin\theta}{\sqrt{1+\cos^2\theta}}\cos\phi,-\frac{\cos\theta\sin\theta}{\sqrt{1+\cos^2\theta}}\sin\phi,-\sin\theta\right),$$$$\quad\partial_\phi(F\circ\varphi)=\left(-\sqrt{1+\cos^2\theta}\sin\phi,\sqrt{1+\cos^2\theta}\cos\phi,0\right)$$
>>7. Sean $A=\partial_\theta(F\circ\varphi)$ y $B=\partial_\phi(F\circ\varphi)$.$$\langle A,B\rangle=\left(-\frac{\cos\theta\sin\theta}{\sqrt{1+\cos^2\theta}}\cos\phi\right)\left(-\sqrt{1+\cos^2\theta}\sin\phi\right)+\left(-\frac{\cos\theta\sin\theta}{\sqrt{1+\cos^2\theta}}\sin\phi\right)\left(\sqrt{1+\cos^2\theta}\cos\phi\right)+0=0.$$ Luego $A\perp B$, y por tanto $$\|A\times B\|^2=\|A\|^2\|B\|^2.$$ Además $$\|A\|^2=\frac{\sin^2\theta\cos^2\theta}{1+\cos^2\theta}+\sin^{2}\theta,\quad\|B\|^2=1+\cos^2\theta.$$ Por consiguiente $$\|A\times B\|^{2}=2\sin^{2}\theta\cos^{2}\theta + \sin^{2}\theta,$$ Entonces $\lVert A\times B \rVert=\sqrt{ 2 }\sin\theta\cos\theta+\sin\theta$ 
>>8. Mostrando que no preservan areas
>>

---

>[!Example] Ejercicio 5
>- a) Sea $S$ la superficie de revolución con curva generatriz $\gamma(t) = (r(t), h(t))$ periódica con período $a$. Mostrar que si $\gamma$ tiene rapidez unitaria, entonces el área de $S$ es $2\pi \int_0^a r(s) ds$.
>- b) Hallar el área del toro $T(R, r)$. ¿Qué consume más pintura, pintar un dona con parámetros $R = 10, r = 3$ o una dona con parámetros $R = 7, r = 4$?
>>[!Proof]-
>>- **a)**
>>	1. **Parametrización.** Sea $x(s,t)=(r(t)\cos s,r(t)\sin s,h(t))$, con $s\in[0,2\pi]$, $t\in[0,a]$.
>>	2. **Derivadas parciales.**  $$x_s(s,t)=(-r(t)\sin s,r(t)\cos s,0)$$ $$x_t(s,t)=(r'(t)\cos s,r'(t)\sin s,h'(t))$$
>>	3. **Producto vectorial.**  $$x_s\times x_t=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\-r\sin s&r\cos s&0\\r'\cos s&r'\sin s&h'\end{vmatrix}=(r h'\cos s,r h'\sin s,-r r')$$
>>	4. **Norma.** $\|x_s\times x_t\|=\sqrt{r^2h'^2(\cos^2 s+\sin^2 s)+r^2r'^2}=r\sqrt{h'(t)^2+r'(t)^2}$
>>	5. **Rapidez unitaria.** Como $\gamma(t)=(r(t),h(t))$ tiene rapidez unitaria, $\sqrt{r'(t)^2+h'(t)^2}=1$, luego $\|x_s\times x_t\|=r(t)$.
>>	6. **Área.** $$\operatorname{Area}(S)=\int_0^{2\pi}\int_0^a r(t)\,dt\,ds=2\pi\int_0^a r(t)\,dt$$
>>- **b)**
>>	1. El toro $T(R,r)$ es la superficie de revolución de la circunferencia $\gamma(t)=(R+r\cos t,r\sin t)$, $t\in[0,2\pi]$.
>>	2. Su rapidez es constante $|\gamma'(t)|=r$, por lo que al reparametrizar por longitud de arco $s=rt$ se obtiene $\beta(s)=\left( R+r\cos\left( \frac{s}{r} \right) ,r\sin\left( \frac{s}{r} \right)\right)$ con $s\in [0,2\pi r]$ $$\operatorname{Area}(T)=2\pi\int_0^{2\pi r}(R+r\cos\left( \frac{s}{r} \right)\,ds=4\pi^2Rr$$La parte del coseno muere sale facil usando cambio de variable $\frac{s}{r}=u$  
>>	3. Para $(R,r)=(10,3)$: $A=120\pi^2$. Para $(R,r)=(7,4)$: $A=112\pi^2$.
>>	4. **Conclusión:** consume más pintura el toro con $R=10,r=3$.

---

>[!Example] Ejercicio 6
> Mostrar que los difeomorfismos del ejercicio 3 no son isometrías.
>>[!Proof]-
>>- **Caso 3b:** 
>>	1. Recordamos que tenemos el cono $\varphi(r,\theta)=(r\cos\theta,r\sin\theta,r)$ y la funcion $f$ nos lo lleva al plano de la siguiente manera $\phi(r,\theta)=(r\cos\theta,r\sin\theta,0)$ 
>>	2. Calculemos las formas fundamentales $$E(r,\theta)=\lVert (\cos\theta,\sin\theta,1) \rVert^{2}=2$$ $$E(r,\theta)=\lVert (\cos\theta,\sin\theta,0) \rVert^{2}=1 $$
>>	3. Mostrando que la 1era forma fundamental no coincide por lo tanto no es isometria
>>	4. Otra alternativa es notar que no preserva areas entonces por [[Definiciones#^31299e]] no es isometria
>>- **Caso 3a:** 
>>	1. Una altenativa seria comparar las formas fundamentales
>>	2. Pero mas directo es componer con la curva $\alpha :[0,1]\rightarrow\mathbb{R}^{3}$ dad por $\alpha(t)=(t,0,0)$ que esta claramente en el dominio que es el plano y tiene longitud $1$
>>	3. Pero $f\circ\alpha(t)=(3t+2,4t-1,0)$ que tiene longitud $\lVert (5,3,0) -(2,-1,0)\rVert=5$ 
>>	4. Mostrando que no preserva longitud por lo tanto no es isometria local.

---

>[!Example] Ejercicio 7
> Probar que si $f : M \to N$ suave satisface que $df_p : T_pM \to T_{f(p)}N$ es una isometría lineal para todo $p \in M$, entonces $f$ es una isometría local. (La recíproca se prueba en la teoría)
>>[!Proof]-
>>1. Notar que $df_{p}$ es isometria entonces $\lVert df_{p}(u) \rVert=\lVert u \rVert$ 
>>2. Sea $\alpha (t):[a,b]\rightarrow M$ entonces $(f\circ\alpha)'(t)=df_{\alpha (t)}\alpha'(t)$ 
>>3. Por lo tanto $long(f(\alpha (t)))=\lVert (f\circ\alpha )'(t) \rVert=\lVert df_{\alpha (t)}\alpha'(t) \rVert=\lVert \alpha '(t) \rVert=long(\alpha (t))$ 
>>4. Por lo tanto preserva curvas entonces es isometria local
>>5. Notar que si agregamos la hipotesis de que $f$ sea biyectiva entonces es facil probar usando isometria lineal que $df_{p}$ es isomorfismo por lo tanto $f$ seria un difeomorfismo (global) mostrando que $f$ es isometria global 

---

>[!Example] Ejercicio 8
> a) Sean $M$ y $N$ dos superficies regulares. Sea $F$ una transformación euclidiana de $\mathbb{R}^3$ y suponer que $F(M) \subset N$. Probar que $F|_M : M \to N$ es una isometría local.
> b) Probar que las rotaciones alrededor del eje de una superficie de revolución $S$ son isometrías de $S$.
>>[!Proof]-
>>**a)**
>>Una transformación euclidiana $F(x) = Ax + b$ tiene como diferencial $dF_p(v) = Av$, donde $A$ es una matriz ortogonal.
>>Como $A$ es ortogonal, preserva el producto interno usual de $\mathbb{R}^3$: $\langle Av, Aw \rangle = \langle v, w \rangle$.
>>Para $p \in M$ y $v, w \in T_pM \subset \mathbb{R}^3$, el diferencial de la restricción $f = F|_M$ coincide con $dF$.
>>Entonces $\langle df_p(v), df_p(w) \rangle = \langle Av, Aw \rangle = \langle v, w \rangle$.
>>Por el ejercicio 7, $f$ es una isometría local.
>>
>>**b)**
>>Una superficie de revolución $S$ generada por rotación alrededor del eje $z$ es invariante bajo cualquier rotación $R_\theta$ alrededor de ese eje ($R_\theta(S) = S$).
>>Las rotaciones $R_\theta$ son transformaciones euclidianas (isometrías de $\mathbb{R}^3$).
>>Por la parte (a), su restricción a $S$ es una isometría de $S$ en sí misma.

^938736

---

>[!Example] Ejercicio 9
> Considerar el semiplano $M = \{(x, y, 0) \mid y > 0\}$ y el cono $C = \{(x, y, z) \mid x^2 + y^2 = z^2, z > 0\}$.
> Encontrar una isometría local $f : M \to C$. Sugerencia: Tomar $f$ que lleve rayos de $M$ a rayos de $C$ de la forma
> $$ f(t(\cos s, \sin s), 0) = \rho t (\cos(\lambda s), \sin(\lambda s), 1) $$
> $(0 < s < \pi, t > 0)$ para ciertas constantes $\rho$ y $\lambda$.
>>[!Proof]-
>>1. Tenemos $\varphi(t,s)=(t\cos s,t\sin s,0)$ que es una parametrizacion del plano
>>2. Definimos $\tilde{\varphi}=f\circ\varphi(t,s)=\rho(t\cos(\alpha s),t\sin(\lambda s),t)$ que es parametrizacion del cono  
>>3. Ahora calculamos las primeras formas de ambas $$E_{\varphi}=1\quad F_{\varphi}=0\quad G_{\varphi}=t^{2}$$$$E_{\tilde{\varphi}}=2\rho^{2}\quad F_{\tilde{\varphi}}=0\quad G_{\tilde{\varphi}}=\rho^{2}\lambda^{2}t^{2}$$
>>4. Queremos que sean iguales entonces $\rho=\frac{1}{\sqrt{ 2 }}$ y $\lambda=\sqrt{ 2 }$
>>5. Asi tenemos que $\tilde{\varphi}\circ\varphi ^{-1}=f$ es isometria local tomando los coeficientes de 4.

^67ce31

---

>[!Example] Ejercicio 10
> a) Sea $\alpha : (a, b) \to \mathbb{R}^3$ una curva de rapidez unitaria y curvatura nunca nula, y sea $\phi : (a, b) \times (0, \varepsilon) \to \mathbb{R}^3$ definida por $\phi(s, t) = \alpha(s) + t\alpha'(s)$. Verificar que $\phi_s \times \phi_t$ es nunca nula. Suponer que la imagen de $\phi$ es una superficie regular, que se denomina *superficie tangente a la curva $\alpha$*.
> b) Mostrar que si dos curvas definidas en el mismo intervalo $(a, b)$ tienen la misma función curvatura (nunca nula), entonces las superficies tangentes son localmente isométricas.
> c) Considerar la hélice de rapidez unitaria $\alpha(s) = (a \cos(s/A), a \sin(s/A), s/A)$, con $a > 0$ y $A = \sqrt{a^2 + 1}$. Encontrar una isometría local de la superficie tangente a $\alpha$ a un anillo en el plano $z = 0$ (describirlo como la superficie tangente a una circunferencia).
>>[!Proof]-
>>- **a)**
>>	1. $\phi(s, t) = \alpha(s) + t T(s)$ (donde $T = \alpha'$).
>>	2. $\phi_s = T(s) + t T'(s) = T + t \kappa N$ (Frenet: $T' = \kappa N$). $\phi_t = T(s)$.
>>	3. $\phi_s \times \phi_t = (T + t\kappa N) \times T = t\kappa (N \times T) = -t\kappa B$.
>>	4. Como $t \in (0, \varepsilon)$ (así que $t \neq 0$) y $\kappa \neq 0$, el producto cruz es no nulo.
>>- **b)**
>>	1. Calculamos la primera forma fundamental de la superficie tangente.$$E = \langle \phi_s, \phi_s \rangle = \langle T + t\kappa N, T + t\kappa N \rangle = 1 + t^2 \kappa^2$$ $$F = \langle \phi_s, \phi_t \rangle = \langle T + t\kappa N, T \rangle = 1$$$$G = \langle \phi_t, \phi_t \rangle = 1$$
>>	2. Ahora si hacemos lo mismo con una $\tilde{\phi}$ vamos a llegar a lo mismo solo que $$E=1+t^{2}\kappa_{\tilde{\phi}}^{2}$$
>>	3. Con lo cual si las dos curvas tienen la misma $\kappa(s)$, sus superficies tangentes son localmente isometricas. Por que la composicion de $\phi\circ \tilde{\phi}^{-1}$ va a ser isometria local entre las superficies
>>- **c)**
>>	1. La hélice dada tiene curvatura constante.
>>	2. $\alpha'(s) = (-a/A \sin(s/A), a/A \cos(s/A), 1/A)$. Es de rapidez unitaria.
>>	3. Entonces puedo calcular la curvatura normalmente $\alpha''(s) = (-a/A^2 \cos(s/A), -a/A^2 \sin(s/A), 0)$. $\kappa = \|\alpha''\| = a/A^2$. Que es constante.
>>	4. Queremos una isometría a la superficie tangente de una circunferencia (que es un anillo en el plano).
>>	5. Una circunferencia de radio $R$ tiene curvatura constante $1/R$.
>>	6. Para que sean isométricas, necesitamos que las curvaturas coincidan osea $1/R = a/A^2 \implies R = A^2/a$.
>>	7. La superficie tangente a la circunferencia de radio $R = A^2/a$ en el plano $z=0$ es isométrica a la superficie tangente de la hélice. Por (b)
>>	8. Ademas (b) nos dice tambien que la isometria esta dada por $f=\phi\circ \tilde{\phi}^{-1}$ con $\phi(s, t) = \alpha(s) + t\alpha'(s)$ y $\tilde{\phi}(s, t) = \tilde{\alpha }(s) + t \tilde{\alpha }'(s)$ donde $\tilde{\alpha }(s)=(R\cos(s),R\sin(s),0)$.
>>	9. Pero $\tilde{\phi}$ no es anillo en el plano. Pero es facil ver que es localmente isometrico a un anillo en el plano. 

---

>[!Example] Ejercicio 11
> Sea $C$ el cilindro $\{(x, y, z) \mid x^2 + y^2 = 1\}$. Encontrar una isometría $f : C \to C$ tal que el conjunto de puntos fijos de $f$ tenga exactamente dos elementos.
>>[!Proof]-
>>1. Consideremos la transformación que rota el cilindro $180^\circ$ ($\pi$ radianes) alrededor del eje $x$ (o cualquier eje perpendicular al eje del cilindro que pase por el origen).
>>2. En coordenadas cartesianas: $f(x, y, z) = (x, -y, -z)$.
>>3. Es una isometría de $\mathbb{R}^3$ (es lineal ortogonal), así que su restricción al cilindro es una isometría. [[GD - Pr6#^938736]]
>>4. Puntos fijos: $f(x, y, z) = (x, y, z)$. Entonces $x = x$. ademas  $-y = y \implies y = 0$ y $-z = z \implies z = 0$.
>>5. Los puntos del cilindro que satisfacen $y=0, z=0$ son las intersecciones con el eje $x$ osea $x^2 + 0 = 1 \implies x = \pm 1$.
>>6. Los puntos fijos son $(1, 0, 0)$ y $(-1, 0, 0)$. Exactamente dos.

---

>[!Example] Ejercicio 12
> Mostrar que una superficie cubierta por una sola carta es orientable. En particular el helicoide y los gráficos de funciones (definidas en abiertos del plano, con valores reales) son orientables.
>>[!Proof]-
>>- Orientabilidad 
>>	1. Si $S$ está cubierta por una sola carta $\mathbf{x} : U \to S$, entonces el vector normal $$ N(u, v) = \frac{\mathbf{x}_u \times \mathbf{x}_v}{\|\mathbf{x}_u \times \mathbf{x}_v\|} $$está bien definido y es continuo en toda la superficie (pues $U$ cubre todo $S$).
>>	2. Ademas por [[Definiciones#^095a44]] sabemos que $x_{u},x_{v}$ generan el plano tangente, por lo tanto el producto cruz sera la normal al plano tangente
>>	3. Entonces por definicion $N$ es un campo normal unitario de $S$ y $S$ es orientanble
>>- El helicoide está cubierto por una sola carta $\mathbf{x}(u, v) = (v \cos u, v \sin u, cu)$ con $(u, v) \in \mathbb{R}^2$.
>>- Un gráfico $z=f(x,y)$ está cubierto por la carta global de Monge. $g(x,y)=(x,y,f(x,y))$ 
>>Por tanto, son orientables.

---

>[!Example] Ejercicio 13
> Sea $M$ la superficie definida como el conjunto de nivel de un valor regular de una función definida en un abierto de $\mathbb{R}^3$. Probar que $M$ es orientable. En particular, la cinta de Moebius no es el conjunto de nivel de un valor regular de ninguna función definida en un abierto de $\mathbb{R}^3$.
>>[!Proof]-
>>1. Sea $M = f^{-1}(c)$ donde $c$ es valor regular de $f: U \subset \mathbb{R}^3 \to \mathbb{R}$.
>>2. El gradiente $\nabla f(p)$ es no nulo para todo $p \in M$.
>>3. Podemos definir un campo normal unitario global: $$ N(p) = \frac{\nabla f(p)}{\|\nabla f(p)\|} $$
>>4. Este campo es continuo (pues $f$ es suave) y está definido en todo $M$. En [[GD - Pr5#^a4f8a9]] vimos que es normal al plano tangente
>>5. La existencia de un campo normal continuo implica que $M$ es orientable.
>>6. Dado que [[Definiciones#^dff491]], no puede existir tal función $f$ tal que la cinta sea su conjunto de nivel.
