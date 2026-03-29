# Soluciones — Geometría Diferencial — Práctico 8

---

>[!Example] Ejercicio 1
>Sea $S$ una superficie de revolución con curva generatriz de rapidez unitaria, parametrizada por $\varphi(s, t) = (r(t) \cos s, r(t) \text{sen } s, h(t))$.
>a) Probar que los meridianos son geodésicas.
>b) Probar que un paralelo $s \mapsto \phi(s, t_0)$ es geodésica si y sólo si $r'(t_0) = 0$.
>> [!Proof]-
>> - **(a)** 
>>	1. Primero notar que la curva generatriz $(r(t),h(t))$ tiene rapidez unitaria entonces $$(r'(t))^2+(h'(t))^2=1^{2}$$
>>	2. Since $(r')^2+(h')^2=1$, derivando obtenemos $r'r''+h'h''=0.$
>>	3. Entonces $(r''(t),h''(t))$ es ortogonal a $(r'(t),h'(t))$, luego existe un escalar $\lambda(t)$ tal que $$(r''(t),h''(t))=\lambda(t)(h'(t),-r'(t)).$$
>>	4. Fijamos $s=s_0$ lo que nos da curvas meridianas $$\alpha(t)=\varphi(s_0,t)=(r(t)\cos s_0,\; r(t)\sin s_0,\; h(t))$$
>>	5. Derivamos $$\alpha'(t)=(r'(t)\cos s_0,\; r'(t)\sin s_0,\; h'(t)),$$$$\alpha''(t)=(r''(t)\cos s_0,\; r''(t)\sin s_0,\; h''(t)).$$
>>	6. Calculamos $n$: $$\varphi_s=(-r\sin s,\; r\cos s,\;0),\quad
>> 	\varphi_t=(r'\cos s,\; r'\sin s,\; h')$$$$\varphi_s\times\varphi_t=(rh'\cos s,\; rh'\sin s,\; -rr').$$
>> 	7. Evaluamos $n$ sobre $s=s_0$, $$N(t)=(rh'(t)\cos s_0,\; rh'(t)\sin s_0,\; -rr'(t)).$$
>> 	8. Luego por 3.
>> 	$$\alpha''(t)=\lambda(t)(h'(t)\cos s_0,\; h'(t)\sin s_0,\; -r'(t))
>> 	=\lambda(t)\,N(t).$$
>> - **(b)** 
>> 	1. Consideremos un paralelo $$\gamma(s) = \varphi(s, t_0)=(r(t_{0}) \cos s, r(t_{0}) \text{sen } s, h(t_{0}))$$
>> 	2. Derivada segunda: $\gamma''(s) = (-r(t_{0}) \cos s,\ -r(t_{0}) \sin s,\ 0)$
>> 	3. Producto con $\varphi_t$: $-r(t_{0}) r'(t_0)$ y el producto con $\varphi_{s}$ es 0 
>> 	4. Por lo tanto, geodésica si y solo si $r'(t_0) = 0$.
>> 	5. Notar que $r(t_{0})\neq0$ por que si no estariamos mirando $\gamma(s)=(0,0,h(t_{0}))$ que seria un punto, por defincion no es considerado un paralelo un paralelo  

---

>[!Example] Ejercicio 2
>Los paralelos de el toro $T(R, r)$ por los puntos $(R+r, 0), (R-r, 0), (R, r)$ son llamados paralelo máximo, paralelo mínimo y paralelo superior, respectivamente. Verificar cuál de estos paralelos es la trayectoria de una geodésica del toro.
>>[!Proof]-
>>1. Recordemos la parametrizacion del toro $$\phi(s, t) = ((R + r \cos t)\cos s, (R + r \cos t)\text{sen } s, r \text{sen } t)$$ Que seria la superficie de revolucion de $r(t)=R+r\cos t$ y $h(t)=r\sin t$
>>2. Usamos el criterio del Ejercicio 1b: Un paralelo es geodésica si $r'(t) = 0$. 
>>3. En este caso $-r\sin t=0$ que se da si $t=0,\pi$ 
>>4. Entonces los siguiente son geodesicas
>>5. **Paralelo máximo:** $t=0$. Entonces $r(\pi)=R+r$. y $h(\pi)=0$. (y luego revolucionar, por eso es el paralelo externo) 
>>6. **Paralelo mínimo:** $t=\pi$. Entonces $r(\pi)=R-r$. y $h(\pi)=0$. Analogo, por eso es el paralelo interno
>>7. Ademas el **Paralelo superior:** es cuando $t=\pi/2$ $r(t)=R$ y $h(t)=r$. (Que revolucionando nos da paralelo superior). Pero $r'(\pi/2) = -r \neq 0$. **No es geodésica.**
>>8. Esto tiene sentido con la idea de que las geodesicas son curvas que no estan cambiando de direccion si son miradas desde la superficie (o mas bien desde el plano tangente). La curva superior claramente esta "doblando" mirada desde el plano tangente. Pero las laterales no (si bien tienen cuarvatura normal , no tienen curvatura geodesica) 

---

>[!Example] Ejercicio 3
>Hallar todas las geodésicas del cilindro.
>>[!Proof]-
>>- Parametrizamos al cilindro como $\varphi(u,v)=(r\cos(u),r\sin(u),v)$ 
>>- **1era Solucion**
>>	1. Es facil calcular el campo normal unitario $$n(u,v)=(\cos(u),\sin(u),0)$$ 
>>	2. Tomamos una curva cualquiera en el cilindro osea $$\gamma(t)=(r\cos(u(t)),r\sin(u(t)),v(t))$$ 
>>	3. Por lo tanto derivando componente a componente $$\gamma'(t)=(-r\sin(u(t))u'(t),r\cos(u(t))u'(t),v'(t))=(-r\sin(u(t)),r\cos(u(t)),0)u'(t)+(0,0,1)v'(t)$$
>>	4. Analogamente  $$\gamma''(t)=-u'^{2}(r\cos u,r\sin u,0)+u''(-r\sin u,r\cos u,0)+v''(0,0,1)$$
>>	5. Notar que solo el primer sumando es paralelo a la normal y nosotros queremos $\gamma''(t)$ sea paralelo a la normal, por ende necesitamos que $u''(t)=v''(t)=0$
>>	6. Integrando llegamos a que $u(t)=at+b$ y $v(t)=ct+d$ 
>>	7. Luego $\gamma(t)=(r\cos(at+b),r\sin(at+b),ct+d)$ son geodesicas
>>	8. Y es facil verificar que serian las rectas verticales, los circulos horizontales y las helices
>>- **2da Solucion**
>>	1. Notamos que $$\varphi(u,v)=\left( r\cos\left( \frac{u}{r} \right),r\sin\left( \frac{u}{r} \right),v \right)$$ es directamente una isometria entre plano (lonja de ancho $(0,2\pi)$) y cilindro 
>>	2. Es facil ver que las longitudes se preservan tomando $\alpha(t)=(u(t),v(t))$ en el plano tenemos que $\lVert \alpha '(t) \rVert=\sqrt{ u'^{2}+v'^{2} }$ 
>>	3. Por otro lado $$\varphi\circ\alpha'(t)=(-\sin(u(t))u'(t),\cos(u(t))u'(t),v'(t))$$ entonces $\lVert \varphi\circ\alpha ' \rVert=\sqrt{ u'^{2}+v'^{2} }$ 
>>	4. Mostrando que son isometrias (preservan longitudes)
>>	5. Luego como isometria preservan geodesicas, las geodesicas del plano seran preservadas
>>	6. Se concluye lo mismo que arriba

---

>[!Example] Ejercicio 4
>Recurrir al resultado que detecta geodésicas cuando la superficie es preservada por una reflexión respecto de un plano para encontrar las trayectorias de tres geodésicas de la superficie definida implícitamente por $9x^2 + \frac{y^2}{4} + z^2 = 1$.
>>[!Proof]-
>>1. Recordemos de lo que habla el ejercicio [[Definiciones#^2bbc2c]]
>>2. La ecuación $9x^2 + \frac{y^2}{4} + z^2 = 1$ es un elipsoide.
>>3. Es invariante bajo las reflexiones de los planos coordenados:
>>   - Plano $xy$ ($z \to -z$): La ecuación no cambia ($z^2$). Por lo tanto es invariante por reflexion. Entonces la intersección con plano xy (z=0): Elipse $9x^2 + y^2/4 = 1$. **Es geodésica.**
>>   - Plano $xz$ ($y \to -y$): La ecuación no cambia. Intersección: Elipse $9x^2 + z^2 = 1$. **Es geodésica.**
>>   - Plano $yz$ ($x \to -x$): La ecuación no cambia. Intersección: Elipse $y^2/4 + z^2 = 1$. **Es geodésica.**

---

>[!Example] Ejercicio 5
>Mostrar que un campo paralelo a lo largo de una geodésica $\gamma$ forma un ángulo constante con $\gamma'$.
>>[!Proof]-    
>>1. Queremos ver que $\langle W,\gamma'\rangle=c$ y esto vale si y solo si $$\langle W',\gamma'\rangle+ \langle W,\gamma''\rangle=0$$
>>2. Pero por definicion de campo paralelo $W(t)'\perp T_{\gamma(t)}M$ y obviamente $\gamma'\in T_{\gamma(t)}M$ entonces $\langle W',\gamma'\rangle=0$
>>3. Por otro lado como $\gamma$ es geodesica sabemos que $\gamma''$ es multiplo del campo normal por lo tanto $\gamma''\perp T_{\gamma(t)}M$ y sabemos por definicion que $W\in T_{\gamma(t)}M$ por lo tanto $\langle W,\gamma''\rangle=0$  
>>4. Aqui asumimos que $\gamma$ es parametrizada por longitud de arco (rapidez unitaria).
>>5. No lo voy a hacer pero la idea seria que $\gamma(\sigma^{-1}(s)) =\beta(s)$ seria la reparametrizacion. Entonces tendrias $\tilde{W}(s)=W(\sigma^{-1} (s))$ y apareceria la derivada de $\alpha$ cuando derivas $\tilde{W}$ y cuando derivas $\beta$ pero no cambia el angulo esto. Recordar que $\sigma^{-1}:[0,L]\rightarrow[a,b]$ osea es escalar y se puede sacar afuera del producto 

---

>[!Example] Ejercicio 6
>Sea $S$ la esfera de centro cero y radio 1 y sea $\alpha$ una parametrización por longitud de arco del paralelo de altura $1/2$. Sea $W$ un campo paralelo a lo largo de $\alpha$ con $W(0) = \alpha'(0)$. Indicar cuántas vueltas da $W$ respecto del marco móvil a lo largo de $\alpha$ cuando esta curva da una vuelta completa. ¿Cuánto gira realmente $W$ a lo largo de $\alpha$?
>>[!Proof]-
>>1. Usando [[Definiciones#^fe0320]] sabemos que $\theta(t)=-t\tan(y_{0})$ con $\sin(y_{0})=\frac{1}{2}$ que es la altura del circulo por lo tanto
>>2. $t$ esta en el dominio de $\alpha$ que como esta parametrizada por longitud de arco es $[0,L]$ cuando dio toda la vuelta es $t=L$ y $L$ es la longitud de un circulo de altura $\frac{1}{2}$ 
>>3. Dado que $z=\sin(y_{0})$ y $x^{2}+y^{2}+z^{2}=1$ tenemos $x^{2}+y^{2}=1-\sin^{2}(y_{0})$ osea $x^{2}+y^{2}=\cos^{2}(y_{0})$. Por lo tanto el radio del circulo es $\cos(y_{0})$ (usando raiz de ambos lados)
>>4. Entonces $L=2\pi\cos(y_{0})$. Luego $$\theta_{f}=-2\pi\cos(y_{0})\tan(y_{0})=-2\pi\sin(y_{0})=-\pi$$
>>5. Entonces el campo paralelo dio media vuelta con respecto al marco movil
>>6. Supongo que cuando dice cuanto gira realmente se refiere a cuanto giro con respecto a la superficie.. da lo mismo decir $\pi$ o $-\pi$   

---

>[!Example] Ejercicio 7
>Sea $M$ el helicoide, parametrizado por $$\phi(u, v) = (u \cos v, u \sin v, v)$$
>a) Calcular la curvatura geodésica de la hélice $$\alpha(t) = (\cos(at), \text{sen}(at), at)\qquad a=1/\sqrt{2}$$
>b) Indicar si $\alpha$ minimiza la distancia entre algunos puntos de su trayectoria.
>c) Encontrar el campo paralelo $W$ a lo largo de $\alpha$ con $W(0) = \alpha'(0)$.
>>[!Proof]-
>>- **a) Curvatura geodésica:**
>>	1. $\alpha$ ya es de rapidez unitaria. $$\alpha '(t)=(-a\sin(at),a\cos(at),a)$$$$\alpha ''(t)=(-a^{2}\cos(at),-a^{2}\sin(at),0)$$
>>	2. Entonces es directo que $\kappa(t)=a^{2}$ 
>>	3. Calculemos el campo normal $$\phi_u=(\cos v,\sin v,0) \qquad \phi_v=(-u\sin v,u\cos v,1)$$
>>	4. Es trivial ver que $$N(\alpha(t))=(\sin(at),-\cos(at),1).$$ (No esta normalizado pero no pasa nada por que termina dando 0) 
>>	5. Entonces ahora podemos calcular la curvatura normal en cada punto $\alpha (t)$: $$k_{n,\alpha (t)}=\langle N(\alpha (t)),\alpha ''(t)\rangle=-a^{2}\cos(at)\sin(at)+a^{2}\sin(at)\cos(at)=0$$
>>	6. Entonces $a^{2}=k_{g,\alpha (t)}$ (usando $\kappa^{2}=k_{g}^{2}+k_{n}^{2}$ ) 
>>- **b) Minimización:** Como $k_g \neq 0$, la curva NO es una geodésica.
>>	Las curvas que minimizan distancia localmente son geodésicas. Por tanto, $\alpha$ **no minimiza la distancia** (ni siquiera localmente, salvo orden infinitesimal).
>>- **c) Campo paralelo:**
>>	1. Calculemos el marco ortonormal móvil del plano tangente $\alpha(t)=(\cos(at),\sin(at),at)$. Luego $$u(t)=\alpha '(t)=(-a\sin(at),a\cos(at),a)$$
>>	2. Es trivial ver que $$N(\alpha(t))=(a\sin(at),-a\cos(at),a)$$
>>	3. Entonces $$v(t)=N\times \alpha'=(-\cos(at),-\sin(at),0)$$
>>	4. Ahora ademas sabemos que $W(t)=\cos(\theta(t))u(t)+\sin(\theta(t))v(t)$ entonces $$W'(t)=-\sin(\theta)\theta'u+\cos(\theta)u'+\cos(\theta)\theta'v+\sin(\theta)v'$$ 
>>	5. Ahora pedimos $\langle W',u\rangle=0\quad\langle W',v\rangle=0$. Notar que $\langle u,u'\rangle=0$ por que que $\alpha$ es de rapidez unitaria analogo con $\langle v,v'\rangle$ por que $v$ es unitario y por haciendo los calculos (trivial) $\langle u',v\rangle=\frac{1}{2}$ y $\langle v',u\rangle=-\frac{1}{2}$. Por otro lado por ser marco ortogonal $\langle u,v\rangle=0$   
>>	6. Luego las condiciones que pedimos son $$0=\langle W',u\rangle=-\theta'\sin\theta+\sin\theta\langle v',u\rangle=-\sin\theta(\theta'+\frac{1}{2})$$ $$0=\langle W',v\rangle=\cos\theta\left( \theta'+\frac{1}{2} \right)$$
>>	7. Como $\sin\theta$ y $\cos\theta$ no se pueden anular simultaneamente tenemos $\theta'=-\frac{1}{2}$ por lo tanto $\theta =-\frac{t}{2}+C$
>>	8. Ademas necesitamos $\theta(0)=0$ (por que $W(0) = \alpha'(0)$) por lo tanto $C=0$  
>>	9. Finalmente $$\boxed{W=\cos\left( -\frac{t}{2} \right)u(t)+\sin\left( -\frac{t}{2} \right)v(t)}$$ 
  
---

>[!Example] Ejercicio 8
>Dado que se sabe que las geodésicas de la esfera son los círculos máximos, mostrar la existencia de triángulos geodésicos cuyos ángulos interiores suman más que $\pi$.
>>[!Proof]-
>>1. Consideremos tres puntos en la esfera:
>>   $N = (0, 0, 1)$ (Polo Norte).
>>   $A = (1, 0, 0)$ (Ecuador).
>>   $B = (0, 1, 0)$ (Ecuador).
>>2. Los lados del triángulo son segmentos de círculos máximos:
>>   - Arco $NA$: Meridiano de longitud $\pi/2$. Ángulo en $A$: El meridiano corta al ecuador perpendicularmente. $\angle A = \pi/2$.
>>   - Arco $NB$: Meridiano de longitud $\pi/2$. Ángulo en $B$: Perpendicular al ecuador. $\angle B = \pi/2$.
>>   - Arco $AB$: Segmento del ecuador. El ángulo en $N$ entre los meridianos $x$ e $y$ es $\pi/2$.
>>3. Suma de ángulos interiores:
>>   $$\Sigma = \pi/2 + \pi/2 + \pi/2 = 3\pi/2$$

---

>[!Example] Ejercicio 9
>Sea $\gamma$ una geodésica de una superficie regular $M$. Probar que si $\gamma$ tiene curvatura nunca nula y está en un plano $P$, entonces $\gamma$ es una línea de curvatura de $M$.
>Sugerencia: Mostrar primero que si $N$ es normal a $P$, entonces $\{\gamma'(t), \gamma''(t), N\}$ es una base ortogonal de $\mathbb{R}^3$ para todo $t$.
>>[!Proof]-
>>1. Como $\gamma$ esta en el plano $P$ y $N$ es la normal entonces la derivada (velocidad) y la segunda derivada (aceleracion) deben ser ortogonales con la normal del plano, de lo contrario la curva se saldria del plano.
>>2. Ademas sabemos que $\gamma''(t)=\lambda(t) n(\gamma(t))$ entonces $$\gamma'''(t)=\lambda'(t)n(\gamma(t))+\lambda(t)dn_{\gamma(t)}(\gamma'(t))$$
>>3. Entonces $$dn_{\gamma}(\gamma')=\frac{\gamma'''}{\lambda}-\frac{\lambda'n(\gamma)}{\lambda}$$  
>>4. Pero notemos que $dn_{\gamma}(\gamma')\in T_{\gamma}M$ por lo tanto $\frac{\lambda'(t)}{\lambda(t)}=0$ para que se anule esa componente.
>>5. Y por otro lado $\gamma'''\in P$ por la misma razon que $\gamma',\gamma''$ si no lo estuviera entonces eventualmente $\gamma''$ tampoco lo estaria, etc. Por lo tanto $\gamma'''\perp N$ 
>>6. Y ademas como $\gamma$ es geodesica. $\gamma''\perp T_{\gamma}M$ por lo tanto $\gamma''\perp\gamma'''$
>>7. Luego por definicion de base $dn_{\gamma}(\gamma')=\frac{1}{\lambda}\gamma''=c\gamma'$ 

---

>[!Example] Ejercicio 10
>Mostrar que una isometría local entre superficies no preserva necesariamente el módulo de la curvatura media. Comparar con la afirmación análoga para la curvatura gaussiana.
>>[!Proof]-
>>1. Si tomamos el cilindro $\varphi(u,v)=(\cos u,\sin u,v)$ sabemos que es localmente isometrico con el plano. (Se ve facil comparando primeras formas fundamentales) 
>>2. Sin embargo $k_{1}=1,k_{2}=0$ en el cilindro, pero $k_{1}=0=k_{2}$ en el plano.
>>3. Esto muestra que preservan curvatura gaussiana (en ambos es $0$) pero no preservan curvatura media 

---

>[!Example] Ejercicio 11
>Considerar la esfera de radio uno, el cilindro y la silla de montar. Justificar por qué estas superficies no son localmente isométricas entre sí.
>>[!Proof]-
>>1. Por el Teorema Egregium, si dos superficies son localmente isométricas, deben tener la misma curvatura Gaussiana $K$ en los puntos correspondientes.
>>2. **Esfera unitaria:** $K = 1$
>>3. **Cilindro:** $K = 0$
>>4. **Silla de montar ($z = x^2 - y^2$ o similar):** $K < 0$. Veamoslo 
>>5. Recordamos por [[GD - Pr7#^5a9dfd]] tenemos que para un grafico $$dn_{(\varphi(x,y))}=\begin{pmatrix}-f_{xx}(x,y) & -f_{xy}(x,y) \\ -f_{xy}(x,y) &-f_{yy}(x,y) \end{pmatrix}$$
>>6. Luego $f_{xx}(x,y)=2$, $f_{xy}(x,y)=0$ y $f_{yy}(x,y)=-2$
>>7. Luego como $$K((x,y,f(x,y)))=det(dn_{\varphi(x,y)})=-4$$ 

---
 
>[!Example] Ejercicio 12
>Probar que no existe una carta $\phi$ de la esfera $S$ de centro cero y radio $r$ tal que para todo $(u, v)$ en el dominio de $\phi$ la base $\{\phi_u(u, v), \phi_v(u, v)\}$ de $T_{\phi(u, v)}S$ sea ortonormal.
>>[!Proof]-
>>1. Supongamos que existe tal carta.
>>2. Que la base coordenada sea ortonormal significa $E = \|\phi_u\|^2 = 1$, $F = \langle \phi_u, \phi_v \rangle = 0$, $G = \|\phi_v\|^2 = 1$.
>>3. Y por otro lado tenemos $\varphi(u,v)=(u,v,0)$ parametrizacion del plano. Que obviamente tiene las misma metrica $\bar{E},\bar{F},\bar{G}$
>>4. Entonces por [[Definiciones#^7286f3]] tenemos que $\phi\circ\varphi ^{-1}$ es una isometria entre el plano y la esfera
>>5. Pero esto es absurdo por que la curvatura gaussiana de la esfera es $\frac{1}{r^{2}}$ y la del plano es $0$ 

---

>[!Example] Ejercicio 13
>Para cada $r > 0$, sea $C_r$ el cilindro $\{(x, y, z) \in \mathbb{R}^3 : x^2 + y^2 = r^2\}$. Probar $C_r$ no es isométrico al plano $z=0$ ni al cilindro $C_\rho$ si $\rho \neq r$. Sugerencia: Considerar las geodésicas periódicas.
>>[!Proof]-
>>- **Isometria entre plano y cilindro:**
>>	1. Notar que si fuese isometricos existiria $F:C_{r}\rightarrow P$ (donde $P$ es el plano) isometria (osea difeomorfismo)
>>	2. Como $F$ es difeo entonces es biyectiva en particular inyectiva. Con lo cual si $a = b$ tenemos $F(a)=F(b)$
>>	3. Aplicado a este ejercicio. Tomamos en el cilindro cualquier geodisca de paralelos horizontales por ejemplo $\alpha(t)=(\cos(t),\sin(t),z_{0})$ tenemos que $\alpha(0)=\alpha(2\pi)$ pero entonces $F(\alpha(0))\neq F(\alpha (2\pi))$ por que $F$ es isometria entonces manda geodesicas en geodesicas. Como $\alpha$ es geodesica entonces $F(\alpha )$ es geodesica y las geodesicas en el plano son rectas con lo cual imposible que tengan dos puntos iguales dado que no son ciclicas
>>- **No isométrico al plano globalmente:** Localmente son isométricos ($K=0$). Pero globalmente no.
>>- **No isométrico a $C_\rho$ ($\rho \neq r$):**
>>	1. Aca una idea similar. Supongamos que existe una isometría $F: C_r \to C_\rho$.
>>	2. Tomamos una geodésicas cerradas simples de $C_r$ tienen longitud $2\pi r$.
>>	3. Como $F$ isometria manda a otra geodesica. A rectas verticales y a helices no puede mandar por la misma razon que con el plano y el cilindro, no son cerradas. Por lo tanto solo puede mandar a los circulos.
>>	4. Pero las geodesicas circulos del cilindro $C_{\rho}$ tienen longitud $2\pi\rho$. Lo cual es absurdo por que isometria preserva longitud

---

>[!Example] Ejercicio 14
>Sea $S$ el hiperboloide de revolución $x^2 + y^2 - z^2 = 1$, sea $p \in S$ con tercera coordenada mayor que dos ($z_0 > 2$), y sea $v \in T_pS$ un vector unitario que forma un ángulo de $\pi/3$ con el paralelo que pasa por $p$. Probar que la geodésica con velocidad inicial $v$ nunca tiene tercera coordenada negativa.
>Sugerencia: Usar el Teorema de Clairaut.
>>[!Proof]-
>>1. $S$ es superficie de revolución. Radio al eje $z$: $r(z) = \sqrt{1+z^2}$
>>2. Teorema de Clairaut: A lo largo de una geodésica, $r(t) \cos \theta(t) = C = \text{cte}$, donde $\theta$ es el ángulo con el paralelo.
>>3. En $z_0 > 2$. Radio inicial $r_0 = \sqrt{1+z_0^2} > \sqrt{1+4} = \sqrt{5}$.
>>   Ángulo inicial $\theta_0 = \pi/3 \implies \cos \theta_0 = 1/2$.
>>   Constante de Clairaut: $C = r_0 \cos \theta_0 = r_0 / 2 > \sqrt{5}/2 \approx 1.118>1$.
>>4. Luego por Clairaut y considerando $|\cos \theta| \le 1$ debe cumplirse en cualquier punto de la geodésica $$r(z) = \sqrt{1+z^2} \ge \sqrt{ 1+z^{2} }\cos(\theta)= C > 1$$
>>5. Pero el mínimo radio del hiperboloide ("cintura") ocurre en $z=0$ y es $r(0)=1$.
>>6. Pero $r(z) > 1$ para toda geodésica dadas las condiciones iniciales que impusimos por ende nunca puede alcanzar la cintura $z=0$ (donde $r=1$). Entonces $z_{t}>0$ donde $z_{t}$ seria la componente altura de cualquer curva que cumpla las condiciones.
>>7. Aclaramos un poco mas , si $z_{t}$ fuese menor que $0$ para algun $t$ entonces tuvo que ser $0$ para algun otro por que $z_{0}>2$ y obviamente la altura de cualquier curva continua, es continua y sabemos que esto no es posible por 6.   

---

>[!Example] Ejercicio 15
>Sea $p$ un punto en una superficie $S$. Se puede probar que si $r > 0$ es suficientemente pequeño, entonces la circunferencia intrínseca de radio $r$ centrada en $p$, dada por $C_p(r) = \{\gamma(r) \mid \gamma \text{ es geodésica unitaria con } \gamma(0)=p\}$, es la imagen de una curva en $S$. Verificar en el caso particular que $S$ es la esfera de radio $R$ que la aproximación de Taylor de tercer grado de la función $r \mapsto \text{long}(C_p(r))$ es
>$$ 2\pi r - \frac{\pi}{3} K(p) r^3, $$
>donde $K(p)=1/R^2$.
>>[!Proof]-
>>1. Intuicion: Dado un punto $p_{0}$ cualquiera $C_{p_{0}}(r)$ van a ser "circulos" paralelos entre si que se van achicando al acercarse a $p_{0}$ que van a ser el resultado de mirar cualqueira de las geodesicas que pasan por $p_{0}$ (circulos mayores) y pararse en una rotacion determinada, luego agarrar otra geodesica (osea rotar la anterior) y pararse devuelta en esa misma rotacion y asi hasta tener todos los puntos
>>2. Es drecto ver que $$C_{p_{0}}(r)=\{ q\in S^{2}:d_{S^{2}}(p,q)=r\}$$ donde $d_{S^{2}}$ es basicamente la distancia de $p$ a $q$ yendo por una geodesica, osea la longitud de ese arco que une ambos puntos que es $R.\theta$ donde $\theta$ es el angulo entre ambos puntos
>>3. Pero ademas notemos que si tenemos ambos puntos sabemos que generan un plano que cuando interseca la esfera nos da la geodesica que los une y el arco de ese pedazo de geodesica cumple que es el angulo entre ambos vectores osea $$\langle p,q\rangle=\lVert p \rVert\lVert q \rVert\cos(\theta)=R^{2}\cos\theta$$
>>4. Luego $$r=R\theta=R\arccos\left( \frac{\langle p,q\rangle}{R^{2}} \right)$$ que es el arco de la cincunferencia (pedazo de geodesica) que los une.   
>>5. Luego $$q\in C_{p}(r)\iff \langle p,q\rangle=R^{2}\cos\left( \frac{r}{R} \right)$$
>>6. Ademas $\Pi_{c}=\{ x:\langle p,x\rangle = c \}$ es un plano (el de las cosas que proyectadas sobre $p$ dan $c$) y se puede probar que dicho plano tiene distancia $\frac{\lvert c \rvert}{\lVert p \rVert}$ al origen 
>>7. En este caso $\lVert p \rVert=R$ (radio de la esfera) y $$\lvert c \rvert=\left\lvert  \langle p,x\rangle\right\rvert=\left\lvert  R^{2}\cos\left( \frac{r}{R} \right)  \right\rvert$$Luego la distancia al origen es $R\cos\left( \frac{r}{R} \right)$ 
>>8. Pero entonces el radio euclideo del circulo es $R\sin\left( \frac{r}{R} \right)$ 
>>9. Con lo cual la longitud es $2\pi R\sin\left( \frac{r}{R} \right)$ y luego usando taylor para $\sin$ se llega al resultado  
   

---

>[!Example] Ejercicio 16
>Optativo. Visualización del transporte paralelo como mapa $u \mapsto -u^2$ en complejos.
>>[!Proof]-
>>El ejercicio pide visualizar, no probar formalmente.
>>Identificamos el plano tangente en el polo norte con $\mathbb{C}$. Los vectores unitarios son $u = e^{i\theta}$.
>>Transportamos este vector a lo largo del meridiano hacia el polo sur.
>>Por el Ejercicio 6, vimos que al volver da un giro de $\pi$ (o similar dependiendo del camino).
>>Aquí se viaja del Polo Norte al Sur. El campo paralelo a lo largo de un meridiano mantiene un ángulo constante con el meridiano.
>>El meridiano $\gamma_u$ sale con ángulo $\theta$ (asociado a $u$).
>>En el polo sur, el meridiano llega "desde el otro lado".
>>Si visualizamos la esfera y los vectores tangentes... se puede ver que la transformación inducida por el transporte paralelo de N a S a lo largo de la geodésica induce esa rotación doble en la coordenada compleja.
>>**(Sin prueba formal requerida).**
