# Soluciones — Geometría Diferencial — Práctico 7

---

>[!Example] Ejercicio 1
>Sea $U$ un abierto de $\mathbb{R}^2$, sea $f: U \to \mathbb{R}$ una función, y sea $S$ la superficie definida por su gráfico.
>a) Mostrar que $n: S \to \mathbb{R}^3$,
>$$ n(\varphi(x, y)) = \frac{1}{\sqrt{1+f_x(x,y)^2+f_y(x,y)^2}} (-f_x(x,y), -f_y(x,y), 1), $$
>define un campo normal unitario en $S$, donde $\varphi(x, y) = (x, y, f(x, y))$.
>b) Para cada una de las siguientes funciones, definidas en su dominio, sea $S$ la superficie definida por su gráfico. Hallar en cada caso las direcciones principales, las curvaturas principales y las direcciones asintóticas (si existen) en el punto $p=(0,0,0)$. Decir qué tipo de punto es $p$.
>
>- i) $f(x, y) = axy$
>- ii) $f(x, y) = (x+y)^2$
>- iii) $f(x, y) = x^4 + y^4$
>
>c) Calcular en cada caso la curvatura Gaussiana y la curvatura media en el punto $(0,0,0)$.
>>[!Proof]-
>>- **a) Campo normal:**
>>	1. Consideramos la parametrización del gráfico $\varphi(x,y) = (x, y, f(x,y))$.
>>	2. Los vectores tangentes coordenados son:
>>	   $\varphi_x = (1, 0, f_x)$
>>	   $\varphi_y = (0, 1, f_y)$
>>	3. El vector normal se obtiene mediante el producto cruz:
>>	   $N = \varphi_x \times \varphi_y = \det \begin{pmatrix} i & j & k \\ 1 & 0 & f_x \\ 0 & 1 & f_y \end{pmatrix} = (-f_x, -f_y, 1)$.
>>	4. Su norma es $|N| = \sqrt{f_x^2 + f_y^2 + 1}$.
>>	5. Normalizando obtenemos $n = \frac{N}{|N|} = \frac{1}{\sqrt{1+f_x^2+f_y^2}}(-f_x, -f_y, 1)$.
>>	6. Y notar que ya sabemos que este $n$ que damos es campo unitario, por que $\varphi_{x}$ y $\varphi_{y}$ generan en plano tangente y normal es por definicion.
>>
>>- **b) y c) En $p=(0,0,0)$:**
>>	- **Preliminares:** Notar que lo que queremos es diagonalizar $-dn_{p}$ pero en la base $\{ \varphi_{x},\varphi_{y} \}$ (entrada y salida) para las columnas de esa matriz necesitamos las coordenadas de $-dn_{p}(\varphi_{x})$ y $-dn_{p}(\varphi_{y})$ en esa base. Calculemos esa matriz en esa base:
>>		1. $(n\circ\varphi)_{x}(u)=d(n\circ \varphi)_{u}(e_{1})$
>>		2. $d(n\circ \varphi)_{u}=dn_{p}\circ d\varphi_{u}$ entonces $(n\circ\varphi)_{x}(u)=dn_{p}(d\varphi_{u}(e_{1}))$
>>		3. Pero $d\varphi_{u}(e_{1})=\varphi_{x}(u)$ por lo tanto $(n\circ\varphi)_{x}(u)=dn_{p}(\varphi_{x}(u))$  
>>		4. Finalmente $-(n\circ\varphi)_{x}(u)=-dn_{p}(\varphi_{x}(u))$
>>	- Ahora podriamos ir a cada ejercicios y calcular $(n\circ\varphi)_{x}(u)$ (recordando que $n\circ\varphi= \frac{\varphi_{x}\times\varphi_{y}}{\lVert \varphi_{x}\times\varphi_{y} \rVert}$)  pero como todos tienen la misma forma vamos a hacerlo en general
>>		1. Ya sabemos por **(a)** que $$n(\varphi(x, y)) = \frac{N}{W}$$con $W=\sqrt{ 1+f_{x}^{2}+f_{y}^{2} }$ y $N=(-f_x(x,y), -f_y(x,y), 1)$   
>>		2. Luego $(n\circ\varphi)_{x}=\frac{1}{W}N_{x}- \frac{W_{x}}{W^{2}}N$ y $(n\circ\varphi)_{y}=\frac{N_{y}}{W}- \frac{W_{y}}{W^{2}}N$ con $$N_{x}=(-f_{xx},-f_{xy},0)\qquad N_{y}=(-f_{xy},-f_{yy},0)$$ con $$W_{x}= \frac{f_{x}f_{xx}+f_{y}f_{xy}}{W}\qquad W_{y}= \frac{f_{x}f_{xy}+f_{y}f_{yy}}{W}$$
>>		3. Ahora notamos que para todos estos ejercicios $f_{x}(0,0)=f_{y}(0,0)=0$ entonces $W_{x}(0,0)=W_{y}(0,0)=0$ y $W=1$ por lo tanto $$(n\circ\varphi)_{x}=N_{x}=(-f_{xx},-f_{xy},0)\qquad (n\circ\varphi)_{y}=(-f_{xy},-f_{yy},0)$$    
>>		4. Ahora notamos que $\varphi_{x}(0,0)=(1,0,0)$ y $\varphi_{y}(0,0)=(0,1,0)$  
>>		5. Por lo tanto $$dn_{(0,0)}=\begin{pmatrix}-f_{xx}(0,0) & -f_{xy}(0,0) \\ -f_{xy}(0,0) &-f_{yy}(0,0) \end{pmatrix}$$
>>	- Ahora podemos ir. acada caso **i) $f(x, y) = axy$**
>>		1. Derivadas: $f_x = ay, f_y = ax$. En $(0,0)$, $f_x=0, f_y=0$ (solo para verificar) 
>>		2. Segundas derivadas: $f_{xx} = 0, f_{yy} = 0, f_{xy} = a$.
>>		3. Entonces por lo vist arriba $-dn = \begin{pmatrix} 0 & a \\ a & 0 \end{pmatrix}$
>>		4. Los valores propios son $\lambda^2 - a^2 = 0 \implies \lambda = \pm a$. por lo tanto **Curvaturas principales:** $k_1 = a, k_2 = -a$.
>>		5. **Direcciones principales:** Vectores propios.>>	   Para $a$: $\begin{pmatrix} -a & a \\ a & -a \end{pmatrix} \begin{pmatrix} u \\ v \end{pmatrix} = 0 \implies u=v$. Dirección $(1, 1)$. Y como estas son coordenadas seria $\varphi_{x}(0,0)+\varphi_{y}(0,0)$ 
>>	   Para $-a$: $\begin{pmatrix} a & a \\ a & a \end{pmatrix} \begin{pmatrix} u \\ v \end{pmatrix} = 0 \implies u=-v$. Dirección $(1, -1)$ osea $\varphi_{x}(0,0)-\varphi_{y}(0,0)$ 
>>		6. **Direcciones asintóticas:** Direcciones donde la curvatura normal es 0. Notamos que $-dn(1,0)=-dn(0,1)=0$ por lo tanto $\langle -dn(1,0),(1,0)\rangle=0$ analogo con el otro. Por lo tanto estas son direcciones asintoticas
>>		7. **Clasificación:** $K = -a^2 < 0$ (si $a \neq 0$). Punto **Hiperbólico** y $H(p)=0$  si $a=0$ es un punto planar
>>
>>	- **ii) $f(x, y) = (x+y)^2$**
>>		1. Derivadas: $f_x = 2(x+y), f_y = 2(x+y)$. En $(0,0)$ son 0.
>>		2. Segundas derivadas: $f_{xx} = 2, f_{yy} = 2, f_{xy} = 2$.
>>		3. $A_{p} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$.
>>		4. Valores propios: $\det(A-\lambda I) = (2-\lambda)^2 - 4 = \lambda^2 - 4\lambda = \lambda(\lambda - 4) = 0$. Entonces $\lambda_1 = 0, \lambda_2 = 4$.
>>		5. **Curvaturas principales:** $k_1 = 0, k_2 = 4$.
>>		6. **Direcciones principales:** Para $0$: $\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} \begin{pmatrix} u \\ v \end{pmatrix} = 0 \implies u=-v$. Dirección $(1, -1)$. Para $4$: Vectores ortogonales a la anterior. Dirección $(1, 1)$.
>>		7. **Direcciones asintóticas:** Solo una dirección (coincide con la dirección principal de curvatura 0): $(1, -1)$.
>>		8. **Clasificación:** $K = 0$. Uno de los $k_i \neq 0$. Punto **Parabólico**.
>>		9. $K = 0$, $H = 2$.
>>	- **iii) $f(x, y) = x^4 + y^4$**
>>		1. Derivadas: $f_x=4x^3$ que en $(0,0)$ son $0$
>>		2. Segundas derivadas en $(0,0)$: $f_{xx} = 12x^2|_0 = 0$. Todas son 0.
>>		3. $A_{p}$ as matriz nula.
>>		4. **Curvaturas principales:** $k_1 = k_2 = 0$.
>>		5. **Direcciones principales:** Indeterminadas (todo vector es principal). Umbílico plano.
>>		6. **Direcciones asintóticas:** Todo vector es asintótico
>>		7. **Clasificación:** $K = 0, k_1=k_2=0$. Punto **Planar**.
>>		8. **c)** $K = 0$, $H = 0$.

^5a9dfd

---

>[!Example] Ejercicio 2
>- **(a)** Hallar las curvaturas principales y la curvatura gaussiana de la superficie de revolución $M$ con curva generatriz $\gamma(t) = (r(t), h(t))$, para los casos particulares en que $\gamma$ es de rapidez unitaria o $h(t) = t$ para todo $t$. Mostrar que los meridianos y paralelos son líneas de curvatura.
>- **(b)** Si $M$ tiene curva generatriz $\gamma(t) = \left(e^{-t^2}, t\right)$, determinar los puntos de $M$ con curvatura gaussiana positiva.
>>[!Proof]-
>>- **(a)**
>>	1. Sea la superficie de revolución parametrizada por $\phi(s,t)=(r(t)\cos s,r(t)\sin s,h(t))$.
>>	2. Derivadas parciales: $\phi_s=(-r\sin s,r\cos s,0)$ y $\phi_t=(r'\cos s,r'\sin s,h')$.
>>	3. El producto vectorial es $\phi_s\times\phi_t=(rh'\cos s,rh'\sin s,-rr')$ y su norma es $W=r\sqrt{r'^2+h'^2}$.
>>	4. Luego el campo normal unitario es $$N(s,t)=\frac{1}{\sqrt{r'^2+h'^2}}(h'\cos s,h'\sin s,-r')$$
>>	5. Derivando respecto de $s$ se obtiene $$N_s=\frac{h'}{\sqrt{r'^2+h'^2}}(-\sin s,\cos s,0)=\frac{h'}{r\sqrt{r'^2+h'^2}}\phi_s$$
>>	6. Derivando respecto de $t$ se obtiene $$N_t=\frac{1}{(r'^2+h'^2)^{3/2}}(r'h''-h'r'')(\cos s,\sin s,\frac{h'}{r'})$$ y en particular $N_t$ es proporcional a $\phi_t$.
>>	7. Esto implica que $\phi_s$ y $\phi_t$ son autovectores del operador de forma $A_{p}=-dN_{p}$.
>>	8. En consecuencia los paralelos (curvas $t=\text{cte}$) y los meridianos (curvas $s=\text{cte}$) son líneas de curvatura.
>>	9. Las curvaturas principales son $k_1=-\frac{h'}{r\sqrt{r'^2+h'^2}}$ y $k_2=\frac{r'h''-h'r''}{(r'^2+h'^2)^{3/2}}$.
>>	10. La curvatura gaussiana es $K=k_1k_2=-\frac{h'(r'h''-h'r'')}{r(r'^2+h'^2)^2}$.
>>	11. Si $\gamma$ es de rapidez unitaria, $r'^2+h'^2=1$ y ademas $2r'r''+2h'h''=(r'^{2}+h'^{2})'=0$ por lo tanto $h''=\frac{-r'r''}{h'}$ 
>>	12. Entonces $k_{1}=- \frac{h'}{r}$ y $k_{2}=r'h''-h'r''$ y $$K=-\frac{h'(r'h''-h'r'')}{r}= -h'\frac{(\frac{-r'^{2}r''}{h'}-h'r'')}{r}=\frac{r''}{r}$$  
>>	13. Si $h(t)=t$, entonces $h'=1$, $h''=0$ y $K=\frac{r''}{r(1+r'^2)^2}$.
>>- **b) $\gamma(t) = (e^{-t^2}, t)$:**
>>	1. Estamos en el caso $h(t)=t$. $r(t) = e^{-t^2}$.
>>	2. Calculamos $r' = -2t e^{-t^2}$ y ademas $r'' = -2 e^{-t^2} + (-2t)(-2t)e^{-t^2} = e^{-t^2}(4t^2 - 2)$.
>>	3. Entonces por (a) la **curvatura Gaussiana** es $$K = \frac{-r''}{r(1+r'^2)^2}$$
>>	4. El signo de $K$ es el signo de $-r''$ (pues $r>0$ entonces el denominador $>0$).Entonces  $$\begin{align}K > 0 & \iff -r'' > 0 \\ & \iff r'' < 0\\ & \iff e^{-t^2}(4t^2 - 2) < 0\\&\iff 4t^2 - 2 < 0\\& \iff  t^2 < 1/2 \\&\iff |t| < \frac{1}{\sqrt{2}}\end{align}$$
>>	5. **Puntos con $K > 0$:** La franja central de la superficie correspondiente a $t \in (-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}})$.

---

>[!Example] Ejercicio 3
>Mostrar que el catenoide es una superficie mínima, es decir tiene curvatura media constante nula.
>>[!Proof]-
>>1. El catenoide es la superficie de revolución generada por la catenaria $\gamma(t) = (a \cosh(t/a), t)$. (Caso $h(t)=t$). $r(t) = a \cosh(t/a)$.
>>2. Derivadas:
>>   $$r' = a \sinh(t/a) \cdot (1/a) = \sinh(t/a)$$.
>>   $$r'' = \cosh(t/a) \cdot (1/a) = \frac{1}{a} \cosh(t/a)$$.
>>3. Usamos las fórmulas del ejercicio 2 ($h(t)=t$):
>>   $$k_1 = \frac{-1}{r\sqrt{1+r'^2}}$$.
>>   $$k_2 = \frac{r''}{(1+r'^2)^{3/2}}$$.
>>4. Por un lado tenemos $1 + r'^2 = 1 + \sinh^2(t/a) = \cosh^2(t/a)$. Entonces $\sqrt{1+r'^2} = \cosh(t/a)$.
>>5. Entonce sustituyendo:
>>   $$k_1 = \frac{-1}{a \cosh(t/a) \cosh(t/a)} = \frac{-1}{a \cosh^2(t/a)}$$
>>   $$k_2 = \frac{\frac{1}{a} \cosh(t/a)}{(\cosh^2(t/a))^{3/2}} = \frac{\frac{1}{a} \cosh(t/a)}{\cosh^3(t/a)} = \frac{1}{a \cosh^2(t/a)}$$.
>>6. Curvatura Media $H = \frac{k_1 + k_2}{2} = \frac{1}{2} \left( \frac{-1}{a \cosh^2} + \frac{1}{a \cosh^2} \right) = 0$.
>>7. Por lo tanto, es una superficie mínima.

---

>[!Example] Ejercicio 4
>Sea $S$ la superficie de revolución generada por la curva de rapidez unitaria $\gamma(t) = (r(t), h(t))$, donde
>$$ r(t) = C \cos t, \qquad h(t) = \int_0^t \sqrt{1 - C^2 \text{sen}^2 u} \, du, $$
>con $0 < C \le 1$. Probar que $S$ tiene curvatura gaussiana constante 1. Dibujarla para distintos valores de $C$.
>>[!Proof]-
>>1. Verificamos rapidez unitaria: $r'(t) = -C \sin t$. $h'(t) = \sqrt{1 - C^2 \sin^2 t}$. $r'^2 + h'^2 = C^2 \sin^2 t + 1 - C^2 \sin^2 t = 1$. Correcto.
>>2. Fórmula para superficie de revolución con rapidez unitaria:
>>   $K = -\frac{r''}{r}$. 
>>3. Calculamos $r''$: $r'(t) = -C \sin t$. $r''(t) = -C \cos t$.
>>4. Sustituyendo:
>>   $K = -\frac{-C \cos t}{C \cos t} = 1$.
>>5. Conclusión: La curvatura gaussiana es constante igual a 1.
>>6. **Dibujo/Forma:**
>>   - Si $C=1$, $h'(t) = \sqrt{1-\sin^2 t} = \cos t$, entonces $h(t) = \sin t$.
>>     $\gamma(t) = (\cos t, \sin t)$, es un círculo. La superficie es la Esfera unitaria.
>>   - Si $0 < C < 1$, $r(t)$ oscila entre $-C$ y $C$. La superficie parece un "balón de fútbol americano" o huso esférico, pero con singularidades (puntas) donde $r=0$ (polos). Es una inmersión isométrica local de la esfera, pero deformada (tipo "spindle").

---

>[!Example] Ejercicio 5
>Se llama tractoide a la superficie de revolución cuya curva perfil es la tractriz (ejercicio 11 del práctico 1). Mostrar que tiene curvatura gaussiana constante igual a $-1$.
>>[!Proof]-
>>1. Recordamos del ejercicio que la tractriz es $$\alpha (t)=(\sin t,\cos t+ln(\tan(\frac{t}{2})))$$
>>2. Entonces $r(t)=\sin t$ por lo tanto $r''(t)=-\sin t$
>>3. Se puede ver (es "largo") que $h'(t)=- \sin t+ \frac{1}{\sin t}=\frac{\cos^{2}t}{\sin t}$ y $h''(t)=-\cos t -csec(t)\cot(t)$ 
>>4. Al parecee termina dando pero es largisimo y termina dando 1.
>>5. Esto puedes ser que esté relacioando con el hecho de que la formula dad en el ejercicio es negativa (por debajo del eje z) y normalmente la tractriz esta dada por encima del eje.

---

>[!Example] Ejercicio 6
>Mostrar que el valor promedio de la curvatura normal en dos direcciones ortogonales cualesquiera en $p$ es $H(p)$.
>>[!Proof]-
>>1. Sea $p \in S$ y $\{e_1, e_2\}$ una base ortonormal de direcciones principales en $T_pS$, con curvaturas principales $k_1, k_2$.
>>2. Sea $v$ un vector unitario en $T_pS$. Podemos escribir $v = \cos\theta e_1 + \sin\theta e_2$.
>>3. La curvatura normal en la dirección $v$ está dada por la fórmula de Euler:
>>   $$k_n(v) = k_1 \cos^2\theta + k_2 \sin^2\theta$$
>>4. Sea $w$ un vector ortogonal a $v$ (en el plano tangente). Entonces $w$ corresponde al ángulo $\theta + \pi/2$.
>>   $$w = \cos(\theta+\pi/2) e_1 + \sin(\theta+\pi/2) e_2 = -\sin\theta e_1 + \cos\theta e_2$$ (usando $\cos\left( \frac{\pi}{2}+\theta \right)=-\sin(\theta)$ y $\sin\left( \frac{\pi}{2}+\theta \right)=\cos\theta$)
>>5. La curvatura normal en dirección $w$ es:
>>   $$k_n(w) = k_1 (-\sin\theta)^2 + k_2 (\cos\theta)^2 = k_1 \sin^2\theta + k_2 \cos^2\theta$$.
>>6. El promedio de estas dos curvaturas es:
>>   $$\frac{1}{2} (k_n(v) + k_n(w)) = \frac{1}{2} (k_1(\cos^2\theta + \sin^2\theta) + k_2(\sin^2\theta + \cos^2\theta))= \frac{1}{2} (k_1 + k_2)$$
>>7. Por definición, la Curvatura Media es $H = \frac{k_1+k_2}{2}$.
>>8. Por lo tanto, el promedio es $H(p)$.

---

>[!Example] Ejercicio 7
>Mostrar que en un punto hiperbólico, las direcciones principales son bisectrices de las direcciones asintóticas.
>>[!Proof]-
>>1. Sea $p$ un punto hiperbólico ($K < 0$, luego $k_1 k_2 < 0$. Supongamos $k_1 > 0 > k_2$).
>>2. Usamos la base de direcciones principales $\{e_1, e_2\}$. La curvatura normal en dirección $\theta$ es $$k_n(\cos\theta.e_{1}+\sin\theta.e_{2}) = k_1 \cos^2\theta + k_2 \sin^2\theta$$
>>3. Las direcciones asintóticas corresponden a $k_n(\theta) = 0$. Osea
>>   $$k_1 \cos^2\theta + k_2 \sin^2\theta = 0 \implies \tan^2\theta = -\frac{k_1}{k_2}$$
>>   Como $K<0$, $-k_1/k_2 > 0$, así que existen dos soluciones para $\tan \theta$ (módulo signo): $\pm \sqrt{-k_1/k_2}$.
>>4. Sean $\alpha$ y $-\alpha$ los ángulos de las direcciones asintóticas en el sistema de coordenadas principales. Esto nos dice que son ángulos medidos respecto a $e_{1}$ y $e_{2}$ 
>>5. Entonces como uno es menos el otro tenemos que las direcciones asintóticas son simétricas respecto al eje $e_1$ ($\theta=0$) y al eje $e_2$ ($\theta=\pi/2$). (Las direcciones principales) 
>>6. Luego es claro que $\theta=0$ es la bisectriz del ángulo entre $\alpha$ y $-\alpha$. Y $\theta=\pi/2$ es la bisectriz del ángulo suplementario.
>>7. Por lo tanto, las direcciones principales bisecan a las asintóticas.

^210a53

---

>[!Example] Ejercicio 8
>Sea $p$ un punto de una superficie $S$ con curvatura gaussiana positiva y sea $\alpha : (-\varepsilon, \varepsilon) \to S$ una curva suave de rapidez unitaria con $\alpha(0) = p$ y curvatura $\kappa$. Mostrar que
>$$ \kappa(0) \ge \min(|k_1|, |k_2|), $$
>donde $k_1$ y $k_2$ son las curvaturas principales de $S$ en $p$.
>>[!Proof]-
>>1. Primero notamos que: $k_{n} = \langle \alpha''(0), N(p) \rangle$ y como $\alpha''(0) = \kappa(0) n_\alpha(0)$ entonces $\langle \kappa n_\alpha, N \rangle = \kappa \cos \phi$ (porque $\lVert N \rVert= \lVert n_{\alpha } \rVert=1$. Aca $N$ es campo normal, $n_{\alpha }$ es la normal de frenet para $\alpha$)  
>>2. De aquí obtenemos $|\kappa(0)| \ge |k_n|$ (ya que $|\cos \phi| \le 1$).
>>3. Sabemos que curvatura normal $k_n$ en la dirección $\alpha'(0)$ está acotada por las curvaturas principales. El valor de $k_n$ varía estrictamente entre $k_1$ y $k_2$ (o los iguala).
>>4. Como $K > 0$, $k_1$ y $k_2$ tienen el mismo signo. Supongamos sin pérdida de generalidad $0 < k_1 \le k_2$ (o $k_2 \le k_1 < 0$). Entonces $|k_n|$ varía entre $|k_1|$ y $|k_2|$. En particular, $|k_n| \ge \min(|k_1|, |k_2|)$.
>>5. Combinando las desigualdades: $|\kappa(0)| \ge |k_n| \ge \min(|k_1|, |k_2|)$.
>>6. Por lo tanto $\kappa(0) \ge \min(|k_1|, |k_2|)$ (la curvatura de curva es no negativa por def, a veces).

---

>[!Example] Ejercicio 9
>Mostrar que toda superficie compacta (cerrada y acotada) tiene un punto elíptico ($K > 0$).
>>[!Proof]-
>>1. Consideremos la función $f: S \to \mathbb{R}$ dada por $f(p) = \|p\|^2$ (distancia al cuadrado al origen).
>>2. Como $S$ es compacta, $f$ alcanza un máximo en un punto $p_0 \in S$.
>>3. Notar que si miramos a $f:\mathbb{R^{n}}\rightarrow\mathbb{R}$ entonces $\nabla f(x)=(2x,2y,\ldots)$ (Usando producto interno). 
>>4. Por lo tanto $$\nabla f(p_{0})=(2p_{0_{1}},2p_{0_{2}},\ldots)=2p_{0}$$ 
>>5. Y si la miramos en la superficie nuevamente tenemos que $df_{p_{0}}(v)=\langle \nabla f(p_{0}),v\rangle$. Como alcanza maximo en $p_{0}$ entonces $$0=\langle \nabla f(p_{0}),v\rangle\quad\forall v\in T_{p_{0}}S$$ 
>>6. Luego $p_{0}\perp v$ para todo $v\in T_{p_{0}}S$. Lo que muestra que $p_{0}$ va en la direccion de la normal de $S$ 
>>7. Por otro lado sabemos que $p_{0}$ (dividido por la norma) es normal de la esfera $S_{R}$ centrada en $0$ de radio $R=\lVert p_{0} \rVert$ entonces $p_{0}$. (Es normal en el punto $p_{0}$ de la esfera)
>>8. Entonces en este punto $p_0$, la normal de la esfera $S_{R}$ coincide con la normal de la superficie $S$. 
>>9. Por lo tanto $T_{p_{0}}S=T_{p_{0}}S_{R}$ y ademas $S\subseteq S_{R}$ justamente por que $p_{0}$ es un maximo de la norma de todos los puntos de $S$.
>>10. Esto implica que la superficie "se curva más" (o al menos tanto como) la esfera en ese punto y en cualquier direccion tangente. Osea $k_{n}^{S}(v)\geq k_{n}^{S_{R}}(v)\quad\forall v\in T_{p_{0}}S$  
>>11. Sabemos que para cualquier dirección unitaria $v$, la curvatura normal de $S_{R}$ en $p_0$ satisface $k^{S_{R}}_n(v) = \frac{1}{R}$ (Recordar que en la esfera todos los puntos son umbilicos, las direcciones son todas principales. $k_{1}=k_{n}=k_{2}$).
>>12. Por lo tanto $k_{n}^{S}(v)\geq \frac{1}{R}$ entonces $k_{1}^{S},k_{2}^{S}\geq \frac{1}{R}>0$ (Recordar que las curvaturas principales no son mas que las curvaturas normales en las direcciones principales [[Definiciones#^c069c2]]) 
>>13. Entonces $K(p_0) = k_1^{S}k_2^{S} \ge \frac{1}{R^2} > 0$. Por lo tanto $p_0$ es un punto elíptico.

---

>[!Example] Ejercicio 10
>Sea $A$ el operador de forma de una superficie $M$ en el punto $p$ y sea $\{u, v\}$ una base ortonormal de $T_pM$. ¿Qué información geométrica da $\langle Au, v \rangle = 0$?
>>[!Proof]-
>>1. $\langle Au,v\rangle=0$ nos dice que $Au\perp v$ pero como $Au,v\in T_{p}M$, son base ortogonales y considerando que $dim(T_{p}M)=2$ entonces $Au=\lambda_{1} u$ 
>>2. Como el operador de forma es autoadjunto tenemos que $0= \langle Au,v\rangle=\langle u,Av\rangle$  
>>3. Entonces de manera analoga $Av=\lambda_{2}v$ 
>>4. Por lo tanto por definicion $u,v$ son direcciones principales

---

>[!Example] Ejercicio 11
>Sea $S$ la silla de mono, es decir, el gráfico de la función $f(x, y) = x^3 - 3xy^2$.
>a) Mostrar que por el cero pasan tres líneas asintóticas diferentes. Sugerencia: $x^3 - 3xy^2$ se factoriza como $x(x + \sqrt{3}y)(x - \sqrt{3}y)$.
>b) Probar que las rotaciones en $120^\circ$ y $240^\circ$ alrededor del eje $z$ son isometrías de $S$.
>c) Mostrar que $\alpha(t) = (t, 0, t^3)$ es una línea de curvatura de $S$ por cero y encontrar dos más usando (b).
>d) Probar que el origen es un punto planar de $S$.
>>[!Proof]-
>>- **a) Líneas asintóticas:**
>> 	1. Un punto del gráfico es $(x, y, x(x-\sqrt{3}y)(x+\sqrt{3}y))$.
>> 	2. Intersecando con el plano $z=0$ (plano tangente en el origen, ya que $df_0=0$), obtenemos $f(x, y) = 0$.
>> 	3. Por la factorizacion podemos ver que tenemos tres casos donde $f(x,y)=0$ osea $x(x^2 - 3y^2) = 0$ que son $x=0, y=\frac{1}{\sqrt{3}}x, y=-\frac{1}{\sqrt{3}}x$.
>> 	4. Estas ecuaciones definen tres rectas en el plano $xy$ que pasan por el origen. 
>> 	5. Vamos a ver que para todas estas curvas $\alpha''(t)=0$. Por lo tanto $k_{n,p_{0}}=\langle \alpha ''(t_{0}),n(p_{0})\rangle=0$ (aca $\alpha (t_{0})=p_{0}$) 
>> 	6. $\alpha(t)=(0,t,0)$ seria la de $x=0$ es evidente que $\alpha ''(t)=0$
>> 	7. $\alpha (t)=\left( t, \frac{1}{\sqrt{ 3 }t},0 \right)$ seria la de $y= \frac{1}{\sqrt{ 3 }}x$ y evidentemente vale lo mismo. Analogo con la curva restante
>> 	8. Sus levantamientos a la superficie ($z=0$) son rectas contenidas en $S$.
>> 	9. Por tanto son 3 líneas asintóticas que pasan por el 0.
>>- **b) Rotaciones:**
>> 	1. Tomamos cualquier punto del dominio en coordenadas polares $x = r \cos \theta, y = r \sin \theta$.
>> 	2. $f(r, \theta) = r^3 \cos^3 \theta - 3 r (\cos \theta) (r^2 \sin^2 \theta) = r^3 (\cos^3 \theta - 3\cos \theta \sin^2 \theta)$.
>> 	3. Identidad trigonométrica: $\cos(3\theta) = 4\cos^3\theta - 3\cos\theta$.
>> 	   Usando $\sin^2 = 1-\cos^2$: $$\cos^3 - 3\cos(1-\cos^2) = \cos^3 - 3\cos + 3\cos^3 = 4\cos^3 - 3\cos = \cos(3\theta)$$
>> 	4. Así $f(r, \theta) = r^3 \cos(3\theta)$.
>> 	5. Una rotación de $120^\circ$ es $\theta \to \theta + 2\pi/3$.
>> 	   $$\cos(3(\theta + 2\pi/3)) = \cos(3\theta + 2\pi) = \cos(3\theta)$$
>> 	6. Con lo cual rotar el punto no cambia la función $f$ (altura, eje z) entonces rotar $120^\circ$ claramente manda $S$ en $S$.
>> 	7. Ademas es isometria euclidea dado que preserva distancias entre puntos (en $\mathbb{R}^{3}$). Con lo cual es trivialmente una isometria (local si se quiere, en el sentido de superficies, al restringirla) 
>> 	8. Analogo con $240^\circ$
>>- **c) Líneas de curvatura:**
>> 	1. Recordamos considerando $\varphi(x,y)=(x,y,f(x,y))$ que es parametrizacion. Tenemos: $$dn_{(x,y)}=\begin{pmatrix}-f_{xx}(x,y) & -f_{xy}(x,y) \\ -f_{xy}(x,y) &-f_{yy}(x,y) \end{pmatrix}$$
>> 	2. $f_{x}=3x^{2}-3y^{2}$,$f_{y}=-6xy$,$f_{xx}=6x$,$f_{yy}=-6x$,$f_{xy}=-6y$
>> 	3. Por lo tanto $$dn_{(x,y)}=\begin{pmatrix}-6x & 6y \\ 6y &-6x \end{pmatrix}$$
>> 	4. Por lo tanto $$dn_{(x,0)}=\begin{pmatrix}-6x & 0 \\ 0 &-6x \end{pmatrix}$$
>> 	5. Con lo cual las direcciones principales son $\varphi_{x}(x,0),\varphi_{y}(x,0)$
>> 	6. Pero notemos que $\alpha(x)=\varphi(x,0)=(x,0,x^{3})$ con lo cual $\alpha '(x)=\varphi_{x}(x,0)$ es una direccion principal y obviamente vale para todo $x$ osea a la largo de todo $\alpha$ probando que esta es linea de curvatura.     
>> 	7. Ademas isometrias preservan normales, angulos y todo, por lo tanto rotar $130^{\circ}$ y $270^{\circ}$ la linea de curvatura, nos das dos lineas mas. 
>> 	8. Notar que el chiste aca es que esas rotacion caen a $S$ tambien. Si no serian lineas de curvatura de otra cosa (de la superficie rotada) 
>>- **d) Punto planar:**
>> 	1. Sale directo de $$dn_{(x,0)}=\begin{pmatrix}-6x & 0 \\ 0 &-6x \end{pmatrix}$$
>> 	2. $K=0$ y $k_1=k_2=0$.
>> 	3. Es un punto planar.

---

>[!Example] Ejercicio 12
>Mostrar que si una superficie es tangente a un plano a lo largo de una curva, entonces los puntos de la curva son parabólicos o planares.
>>[!Proof]-
>>1. Sea $C \subset S$ la curva y $\Pi$ el plano tangente común.
>>2. A lo largo de $C$, el plano tangente $T_pS$ es constante (igual a $\Pi$).
>>3. Esto implica que la aplicación normal de Gauss $N: S \to S^2$ es constante a lo largo de $C$.
>>4. Sea $v$ un vector tangente a la curva $C$. Entonces la derivada direccional de $N$ en dirección $v$ es cero: $dN_p(v) = 0$.
>>5. Como $dN_p = -A_p$ (operador de forma), tenemos $A_p(v) = 0$.
>>6. Esto significa que $v$ es una dirección principal con curvatura principal $\lambda_1 = 0$ (valor propio 0).
>>7. La curvatura Gaussiana es $K = \lambda_1 \lambda_2 = 0 \cdot \lambda_2 = 0$.
>>8. Como $K=0$, los puntos pueden ser parabólicos (si $\lambda_2 \neq 0$) o planares (si $\lambda_2 = 0$).

---

>[!Example] Ejercicio 13
>Sea $\alpha$ una curva espacial de rapidez unitaria y curvatura postiva. Mostrar que la superficie tangente a $\alpha$ tiene curvatura gaussiana cero.
>>[!Proof]-
>>1. La superficie tangente se parametriza como $X(s, v) = \alpha(s) + v \alpha'(s)$, con $v > 0$.
>>2. Derivadas:  $X_s = \alpha' + v \alpha'' = T + v \kappa N$. Y $X_v = \alpha' = T$.
>>3. Normal:  $X_s \times X_v = (T + v \kappa N) \times T = v \kappa (N \times T) = -v \kappa B$ (donde $B$ es el binormal)
>>4. El vector normal unitario es $n\circ X(s,v)= \pm B(s)$ (es constante a lo largo de las generatrices $v$).
>>5. Pero entonces $(n\circ X)_{v}=0$. En cualquier punto.
>>6. Por lo tanto la segunda columna de $A_{p}$ es 0 mostrando que en la dirección de $X_{v}$ tenemos auto valor 0. Entonces $K=0$ 

---

>[!Example] Ejercicio 14
>¿Es verdad que si para un punto $p$ de una superficie existe un entorno que contiene puntos de $S$ a ambos lados del plano tangente $T_pS$, entonces $p$ es hiperbólico?
>>[!Proof]-
>>1. **Falso. Contraejemplo:** Sea la silla de mono $S$ dada por $z = x^3 - 3xy^2$ (Ejercicio 11).
>>2. El punto $p=(0,0,0)$ es un punto **planar** ($K=0$, todas las curvaturas principales nulas), como se vio en el ej 11d.
>>3. Sin embargo, en cualquier entorno del origen, la función $f(x,y)$ toma valores positivos y negativos (hay 3 sectores positivos y 3 negativos separados por las asintóticas).
>>4. Por tanto, la superficie atraviesa el plano tangente $z=0$, teniendo puntos a ambos lados.
>>5. La implicación solo vale en sentido inverso (Si es Hiperbólico $\implies$ atraviesa). O "Si no atraviesa (localmente convexo) y K no nula $\implies$ Elíptico". Si atraviesa puede ser Hiperbólico o Planar (con orden de contacto mayor).
>>6. **Otro Contraejemplo:** La superficie dada por $\varphi(u,v)=(u,v,u^{2})$ 
>>7. Es facil ver que el $(0,0)$ (mas en general toda la linea $(0,y,0)$) tiene operador de forma nulo por lo tanto todos esos puntos son planares 

---

>[!Example] Ejercicio 15
> a) Sea $p$ un punto de una superficie regular $M$. Mostrar que si $T_pM$ tiene dos direcciones asintóticas ortogonales, entonces la curvatura media de $M$ en $p$ es nula.
> b) Mostrar que el helicoide $S$ es una superficie mínima. Sugerencia: Verificar que las curvas coordenadas de la parametrización $\phi(u, v) = (u \cos v, u \text{sen } v, v)$ son curvas asintóticas.
> c) Hallar el ángulo que forman las líneas asintóticas con las líneas de curvatura del helicoide sin encontrar explícitamente estas últimas. Sugerencia: Ejercicio 7.
>>[!Proof]-
>>- **a)**
>>	1. Sean $e_1, e_2$ dos direcciones asintóticas con $\langle e_1, e_2 \rangle = 0$.
>>	2. Direcciones asintóticas significa curvatura normal nula: $k_n(e_1) = 0$ y $k_n(e_2) = 0$.
>>	3. La Curvatura Media $H$ es el promedio de las curvaturas normales en dos direcciones ortogonales cualesquiera (Ejercicio 6).
>>	4. $H(p) = \frac{1}{2}(k_n(e_1) + k_n(e_2)) = \frac{1}{2}(0 + 0) = 0$.
>>- **b) Helicoide**
>>	1. Sea $\varphi(u, v) = (u \cos v, u \sin v, v)$ con $\varphi(u_{0},v_{0})=p$.
>>	2. Definimos $\alpha(t)=\varphi(t,v_{0})$ y $\beta(t)=\varphi(u_{0},t)$  
>>	3. Vectores tangentes:
>>	   $$\varphi_u = (\cos v, \sin v, 0) \quad \varphi_v = (-u\sin v, u\cos v, 1)$$ 
>>	4. Vector normal: $$n = \varphi_u \times \varphi_v = \frac{1}{\sqrt{ 1+u^{2}  }} (\sin v, -\cos v, u)$$
>>	5. Es directo ver que $\alpha ''(u_{0})=\varphi_{uu}(u_{0},v_{0}) = (0, 0, 0)$ por lo tanto $\alpha$ tiene curvatura normal $0$ en $p$ (ademas es $0$ en todos lados osea que es linea asintotica pero no hace falta verlo). Por lo tanto $\alpha'(u_{0})$ es una direccion asintotica [[Definiciones#^852d07]]
>>	6. Analogamente $$\beta(v_{0})=\phi_{vv}(u_{0},v_{0}) = (-u_{0}\cos v_{0}, -u_{0}\sin v_{0}, 0)$$
>>	7. Luego $$\langle \beta''(v_{0}),n(u_{0},v_{0})\rangle= \frac{1}{\sqrt{ 1+u_{0}^{2} }}(-u_{0}\sin v_{0}\cos v_{0}+u_{0}\sin v_{0}\cos v_{0})=0$$ Por lo tanto $\beta'(v_{0})$ es direccion asintotica 
>>	8. Ambas $\alpha'(u_{0})$ y $\beta'(v_{0})$ viven en $T_{p}S$ y son ortogonales, se verifica rapidamente viendo su definicion   
>>	9. Entonces por la parte (a), $H = 0$.
>>	10. Y esto lo podemos hacer para cualquier punto del helicoide. Luego es una superficie mínima.
>>- **c) Ángulo**
>>	1. Por **b)** sabemos que $\frac{k_{1}+k_{2}}{2}=H=0$ entonces $k_{1}=-k_{2}$. Luego todos los puntos son hiperbólicos 
>>	2. Entonces por [[GD - Pr7#^210a53]] y dado que por **b)** sabemos que las direcciones asintóticas son ortogonales, queda resuelto
>>	3. Notar que $k_{1}=-k_{2}\neq 0$ por qué si uno es $0$ los dos lo son y entonces todos los puntos serían planares luego la superficie sería un plano, lo que es absurdo

---

>[!Example] Ejercicio 16
>Hallar una superficie $S$ y un difeomorfismo $F : S \to S$ que preserve curvatura gaussiana (es decir $K(F(p)) = K(p)$ para todo $p \in S$), pero que no sea una isometría.
>>[!Proof]-
>>- **Ejemplo Simple:**
>>	1. Tomamos $S$ el plano parametrizado como $\varphi(x,y)=(x,y,0)$
>>	2. Definimos $F:S\rightarrow S$ dada por $F(x,y,z)=(2x,y,z)$ 
>>	3. Claramente preserva curvatura, por que la curvatura para cualquier punto del dominio es $0$ y en la imagen tenemos tambien tenemos un plano por lo cual todas las curvaturas son $0$ tambien
>>	4. Dado cualquier punto tomo un circulo alrededor $U$. Es trivial ver que $\varphi ^{-1}\circ F\circ \varphi$ es suave, por ende $F$ es suave.
>>	5. Es trivial ver que la inversa es suave dado que la inversa de $F$ es $F^{-1}(x,y,z)=\left( \frac{x}{2},y,z \right)$
>>	6. Y claramente no es isometria, no preserva longitud.
>>- **Otro Ejemplo**:
>>	1. Consideremos el cilindro $S = \{(x, y, z) \in \mathbb{R}^3 : x^2 + y^2 = 1\}$.
>>	2. La curvatura gaussiana es $K \equiv 0$ en toda la superficie.
>>	3. Definamos $F: S \to S$ como un estiramiento en el eje $z$:
>> 	  $F(x, y, z) = (x, y, 2z)$.
>>	4. $F$ es claramente suave, biyectiva y su inversa es suave (escalado por 1/2). Es un difeomorfismo.
>>	5. $K(F(p)) = 0 = K(p)$. Preserva curvatura gaussiana.
>>	6. Sin embargo, no es isometría porque deforma distancias verticales. (La longitud de un segmento vertical se duplica).

---

>[!Example] Ejercicio 17
>Optativo. Dibujar una superficie difeomorfa a un toro menos un punto con curvatura gaussiana negativa.
>>[!Proof]-
>>Una superficie con esa topología y curvatura negativa se puede visualizar como una "trompeta infinita doblada sobre sí misma" o un "tubo que se ensancha".
>>Matemáticamente, un toro completo no puede tener $K < 0$ en todas partes (por Gauss-Bonnet, $\int K dA = 0$). Pero un toro *menos un punto* no es compacto, así que Gauss-Bonnet no restringe tanto.
>>Imaginemos una superficie de revolución parecida a un hiperboloide de una hoja (que tiene $K<0$), pero "enrollada" para que los extremos se acerquen. O mejor, una superficie de revolución generada por una curva que no se cierra, pero difeomorfa a lo pedido.
>>La forma clásica es un tubo con forma de '8' o similar, pero manteniendo la geometría hiperbólica.
>>No se requiere fórmula explícita en el ejercicio ("Dibujar").
>>El dibujo sería similar a un **cuerno** que se auto-intersecta o se acerca a sí mismo, o una **superficie de Dini** (pseudo-esfera retorcida) modificada.



