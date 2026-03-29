>[!Example] Ejercicio 1
>Sea $\alpha(t)=\dfrac{e^{t}}{\sqrt{3}}(\cos t,\,\sin t,\,1)$ graficar y hallar reparametrizacion por longitud de arco $\beta$ con $\beta(0)=\alpha (0)$. Calcular el triedo de Frenet, la curvatura y la torsion de $\beta$
>>[!Proof]-
>>- Reparametrización por longitud de arco.
>>	1. Calculemos la velocidad: $$\displaystyle \alpha'(t)=\frac{e^{t}}{\sqrt{3}}(\cos t-\sin t,\;\sin t+\cos t,\;1)$$
>>	2. Su norma: $$\|\alpha'(t)\|=\frac{e^{t}}{\sqrt{3}}\sqrt{(\cos t-\sin t)^2+(\sin t+\cos t)^2+1}=\frac{e^{t}}{\sqrt{3}}\sqrt{2+1}=e^{t}$$
>>	3. Por tanto la longitud desde $0$ a $t$ es $$\displaystyle s(t)=\int_{0}^{t} e^{u}\,du=e^{t}-1$$(el borde inferior esta dado por la condicion $s(0)=0$). 
>>	4. Invirtiendo, $t=\ln(s+1)$. La reparametrización por longitud de arco es $$\displaystyle \beta(s)=\alpha(\ln(s+1))=\frac{s+1}{\sqrt{3}}\big(\cos(\ln(s+1)),\,\sin(\ln(s+1)),\,1\big)$$
>>- Tiedro de Frenet, curvatura y torsión.
>>	1. Es conveniente trabajar con el parámetro $t$ y luego pasar a $s$. El vector tangente unitario es $$\displaystyle T(t)=\frac{\alpha'(t)}{\|\alpha'(t)\|}=\frac{1}{\sqrt{3}}(\cos t-\sin t,\;\sin t+\cos t,\;1)$$
>>	2. Derivando $$\displaystyle T'(t)=\frac{1}{\sqrt{3}}\big(-(\sin t+\cos t),\;\cos t-\sin t,\;0\big)$$
>>	3. por lo que $\|T'(t)\|=\sqrt{\tfrac{2}{3}}$.
>>	4. Como $\dfrac{d}{ds}=\dfrac{1}{\|\alpha'(t)\|}\dfrac{d}{dt}=e^{-t}\dfrac{d}{dt}$, la curvatura es $$\displaystyle \kappa(t)=\Big\|\frac{dT}{ds}\Big\|=\frac{1}{e^{t}}\|T'(t)\|=\frac{\sqrt{2}}{\sqrt{3}\,e^{t}}.$$
>>	5. En la parametrización por arco $s$ (recuerde $e^{t}=s+1$) se tiene $\displaystyle \kappa(s)=\frac{\sqrt{2}}{\sqrt{3}\,(s+1)}.$
>>	6. Para la normal y la binormal (unidad) obtenemos $$\displaystyle N(t)=\frac{T'(t)}{\|T'(t)\|}=\frac{1}{\sqrt{2}}\big(-(\sin t+\cos t),\;\cos t-\sin t,\;0\big),$$$$\displaystyle B(t)=T(t)\times N(t)=\frac{1}{\sqrt{6}}\big(\sin t-\cos t,\;-(\sin t+\cos t),\;2\big).$$
>>	7. Para la torsión usamos la fórmula general (o el triple producto). Calculando explícitamente se obtiene $$\displaystyle \tau(t)=\frac{1}{\sqrt{3}}e^{-t}$$y por tanto en función de $s$: $$\displaystyle \tau(s)=\frac{1}{\sqrt{3}(s+1)}$$
>>	8. Observación: $\tau/\kappa=1/\sqrt{2}$ es constante.

---

>[!Example] Ejercicio 2
>Si una curva parametrizada por longitud de arco se recorre en sentido opuesto, ¿cambian la curvatura y la torsión?
>>[!Proof]-
>>1. Sea $\alpha(s)$ unit-speed y sea $\beta(s)=\alpha(-s)$. 
>>2. Entonces $$\beta'(s)=-\alpha'(-s)=-T_{\alpha }(-s)$$y por tanto $T_{\beta}(s)=-T_{\alpha}(-s)$. 
>>3. La curvatura se define como $\kappa=\|dT/ds\|$, por lo que $$\kappa_{\beta}(s)=\Big\|\frac{d}{ds}T_{\beta}(s)\Big\|=\Big\|\frac{d}{ds}(-T_{\alpha}(-s))\Big\|=\|T'_{\alpha}(-s)\|=\kappa_{\alpha}(-s)$$
>>4. En particular, en el mismo punto geométrico la curvatura no cambia (valor absoluto).
>>5. Por 2. $T'_{\beta}(s)=(-T_{\alpha }(-s))'=T'_{\alpha }(-s)$ luego como $T'=\kappa N$ $$\kappa_\beta(s)N_\beta(s)=\kappa_\alpha(-s)N_\alpha(-s)$$Luego por 3. $$N_\beta(s)=N_\alpha(-s)$$   
>>6. Por definición $B=T\times N$, entonces $$ \begin{aligned} B_\beta(s) &=T_\beta(s)\times N_\beta(s)\\ &=(-T_\alpha(-s))\times N_\alpha(-s)\\&=-(T_\alpha(-s)\times N_\alpha(-s))\\ &=-B_\alpha(-s).\end{aligned}$$
>>7. Luego como $B=-\tau N$ entonces $-\frac{B}{N}=\tau$ y dado que $N_{\beta}=N_{\alpha }(-s)$ sucede $$\tau_{\beta}(s)=-\frac{B_{\beta}(s)}{N_{\beta}(s)}=\frac{B_{\alpha }(-s)}{N_{\alpha }(-s)}=-\tau_{\alpha }(-s)$$    
>>
>>- **Conclusión.** Al invertir el sentido de recorrido:
>>	- la curvatura no cambia
>>	- la torsión cambia de signo: $\tau_\beta(s)=-\tau_\alpha(-s)$.

---

>[!Example] Ejercicio 3
>Considerar la hélice circular $\alpha(s) = (a \cos(s/c), a \sin(s/c), b s/c)$, con $c^2 = a^2 + b^2$.
>a) Mostrar que $\alpha$ tiene rapidez unitaria.
>b) Hallar el triedro de Frenet de $\alpha$ y calcular la curvatura y la torsión.
>c) Hallar el plano osculador y el plano osculador afín de $\alpha$ en $s = \pi$.
>>[!Proof]-
>>**(a) Rapidez unitaria:**
>>1. Derivando: $\alpha'(s) = \left( -\frac{a}{c} \sin(s/c), \frac{a}{c} \cos(s/c), \frac{b}{c} \right)$.
>>2. Calculamos la norma al cuadrado: $\|\alpha'(s)\|^2 = \frac{a^2}{c^2} (\sin^2(s/c) + \cos^2(s/c)) + \frac{b^2}{c^2} = \frac{a^2 + b^2}{c^2}$.
>>3. Dado que $c^2 = a^2 + b^2$, tenemos $\|\alpha'(s)\|^2 = 1$. Por lo tanto, $\|\alpha'(s)\| = 1$.
>>
>>**(b) Triedro de Frenet, curvatura y torsión:**
>>1. Como es unit-speed, $T(s) = \alpha'(s)$.
>>2. Calculamos $\alpha''(s) = \left( -\frac{a}{c^2} \cos(s/c), -\frac{a}{c^2} \sin(s/c), 0 \right)$.
>>3. La curvatura es $\kappa(s) = \|\alpha''(s)\| = \frac{a}{c^2}$.
>>4. El vector normal es $N(s) = \frac{\alpha''(s)}{\kappa(s)} = (-\cos(s/c), -\sin(s/c), 0)$.
>>5. El vector binormal es $B(s) = T(s) \times N(s) = \left( \frac{b}{c} \sin(s/c), -\frac{b}{c} \cos(s/c), \frac{a}{c} \right)$.
>>6. Calculamos $B'(s) = \left( \frac{b}{c^2} \cos(s/c), \frac{b}{c^2} \sin(s/c), 0 \right)$.
>>7. Usando $B'(s) = -\tau(s) N(s)$, obtenemos $-\tau(s) (-\cos(s/c)) = \frac{b}{c^2} \cos(s/c)$, de donde $\tau(s) = \frac{b}{c^2}$.
>>
>>**(c) Plano osculador en $s = \pi$:**
>>1. Evaluamos en $s = \pi$: $\alpha(\pi) = (a \cos(\pi/c), a \sin(\pi/c), b\pi/c)$.
>>2. El vector normal al plano osculador es $B(\pi) = \left( \frac{b}{c} \sin(\pi/c), -\frac{b}{c} \cos(\pi/c), \frac{a}{c} \right)$.
>>3. La ecuación del plano osculador es $\langle (x, y, z) - \alpha(\pi), B(\pi) \rangle = 0$.
>>4. El plano osculador afín es el conjunto de puntos que satisfacen esta ecuación.

---

>[!Example] Ejercicio 4
>a) ¿Cómo cambia la curvatura de una hélice circular si se la comprime o dilata en la dirección del eje $z$? ¿Y si se lo hace en la dirección ortogonal al eje $z$?
>b) ¿Qué relación existe entre la torsión de la hélice dada y la torsión de su reflejada respecto del plano $x-z$?
>>[!Proof]-
>>**(a) Compresión y Dilatación:**
>>1. Hélice original: $\kappa = \frac{a}{a^2+b^2}$.
>>2. Dilatación en $z$ (factor $\lambda$): $b \mapsto \lambda b$. Nueva curvatura $\kappa_\lambda = \frac{a}{a^2+\lambda^2 b^2}$. Si $\lambda > 1$ (dilatación), $\kappa$ disminuye. Si $\lambda < 1$ (compresión), $\kappa$ aumenta.
>>3. Dilatación en $xy$ (factor $\mu$): $a \mapsto \mu a$. Nueva curvatura $\kappa_\mu = \frac{\mu a}{\mu^2 a^2 + b^2}$. El comportamiento depende de $\mu$ (aumenta para $\mu < b/a$, disminuye para $\mu > b/a$).
>>
>>**(b) Reflexión:**
>>1. Reflexión respecto al plano $xz$: $(x, y, z) \mapsto (x, -y, z)$.
>>2. Esto es una isometría impropia. La curvatura se conserva, pero la torsión cambia de signo.
>>3. Por lo tanto, la torsión de la hélice reflejada es $-\tau$.

---

>[!Example] Ejercicio 5
>Sea $\alpha : (a, b) \to \mathbb{R}^3$ una curva regular. Suponer que existe $t_0 \in (a, b)$ tal que $\|\alpha(t)\|$ alcanza un máximo en $t_0$. Probar que $\kappa(t_0) \ge 1/\|\alpha(t_0)\|$.
>>[!Proof]-
>>1. Sea $f(t) = \|\alpha(t)\|^2$. En $t_0$ hay un máximo, luego $f'(t_0) = 0$ y $f''(t_0) \le 0$.
>>2. $f'(t) = 2\langle \alpha', \alpha \rangle$. En $t_0$, $\langle \alpha'(t_0), \alpha(t_0) \rangle = 0$.
>>3. $f''(t) = 2(\langle \alpha'', \alpha \rangle + \|\alpha'\|^2)$. En $t_0$, $\langle \alpha''(t_0), \alpha(t_0) \rangle + \|\alpha'(t_0)\|^2 \le 0$.
>>4. Asumiendo rapidez unitaria ($s$), $\alpha'' = \kappa N$. Entonces $\kappa \langle N, \alpha \rangle + 1 \le 0$, o $\kappa \langle N, -\alpha \rangle \ge 1$.
>>5. Por Cauchy-Schwarz: $\kappa \|\alpha\| \ge \kappa |\langle N, \alpha \rangle| \ge 1$.
>>6. Por lo tanto, $\kappa(t_0) \ge \frac{1}{\|\alpha(t_0)\|}$.

---

>[!Example] Ejercicio 6
>Sea $\alpha$ una curva de rapidez unitaria en $\mathbb{R}^3$ con curvatura nunca nula, torsión $\tau$ y marco de Frenet $\{T, N, B\}$.
>a) Mostrar que si $\tau/\kappa$ es constante, entonces $\alpha$ es una hélice.
>b) Mostrar que $\alpha$ es una hélice si y solo si existe un plano que contiene a $N(t)$ para todo $t$.
>>[!Proof]-
>>**(a)**
>>1. Si $\tau/\kappa = c$, definimos $u = \frac{cT + B}{\sqrt{1+c^2}}$.
>>2. Derivando: $u' \propto c\kappa N - \tau N = 0$. Así $u$ es constante.
>>3. $\langle T, u \rangle = \frac{c}{\sqrt{1+c^2}}$ es constante. Luego $\alpha$ es una hélice.
>>
>>**(b)**
>>1. ($\Rightarrow$) Si es hélice, existe $u$ tal que $\langle T, u \rangle = \text{cte}$. Derivando, $\kappa \langle N, u \rangle = 0$, luego $\langle N, u \rangle = 0$. $N$ está en el plano ortogonal a $u$.
>>2. ($\Leftarrow$) Si $\langle N, u \rangle = 0$ para $u$ constante. Derivando $\langle T, u \rangle$, obtenemos $\kappa \langle N, u \rangle = 0$, así que $\langle T, u \rangle$ es constante (o localmente constante). Por tanto es una hélice.

---

>[!Example] Ejercicio 7
>Sea $\alpha(t) = (t, \cosh t)$. Calcular la curvatura de dos maneras por definicion (reparametrizando) o por formula 
>>[!Proof]-
>>- **(a) Por definición:**
>>	1. Reparametricemos $$\|\alpha'(t)\| = \cosh t\quad\sigma(t) =\int_{0}^{t} \cosh t = \sinh t\quad\sigma ^{-1}(s) = \text{arcsinh } s$$
>>	2. Entonces $$\beta(s)=\alpha \circ\sigma^{-1}(s) =(arcsinh (s),\cosh arcsinh(s))=(arcsinh(s),\sqrt{ 1+s^{2} })$$ $$\beta '(s)=\left( \frac{1}{\sqrt{ 1+s^{2}  }}, \frac{s}{\sqrt{ 1+s^{2}  }} \right)$$ $$\beta ''(s)=\left( - \frac{s}{(1+s^{2} )^{3/2} }, \frac{1}{(1+s^{2} )^{3/2} } \right)$$
>>	3. Entonces como $\beta$ es parametrizada por longitud de arco podemos usar la definicion de curvatura $$\kappa_{\beta}(s)=\lVert \beta''(s) \rVert = \frac{1}{1+s^2}$$
>>	4. Por [[Definiciones#^f3efb8]] tenemos que $$\kappa_{\alpha}(t) = \frac{1}{\cosh^2 t}$$
>>- **(b) Por fórmula:**
>>	1. $\kappa(t) = \frac{|x'y'' - x''y'|}{((x')^2+(y')^2)^{3/2}}$.
>>	2. $x'=1, x''=0, y'=\sinh t, y''=\cosh t$.
>>	3. $\kappa(t) = \frac{\cosh t}{(\cosh^2 t)^{3/2}} = \frac{1}{\cosh^2 t}$.

---

>[!Example] Ejercicio 8
>Sea $\alpha$ una curva de rapidez unitaria. Y sean $k,\kappa:(a,b)\rightarrow\mathbb{R}$ su curvatura y curvatura signada respectivamente. Mostrar que $\kappa = |k|$.
>>[!Proof]-
>>1. $\alpha'' = \kappa N$.
>>2. $k$ se define por $\alpha'' = k N_{signado}$.
>>3. Tomando normas: $\kappa = \|k N_{signado}\| = |k|$.

---

>[!Example] Ejercicio 9
>Probar unicidad de circunferencia osculatriz.
>>[!Proof]-
>>1. $f(s) = \|\alpha(s)-p\|^2$. $f(0)=r^2, f'(0)=0, f''(0)=0$.
>>2. $f'(0)=0 \implies \alpha(0)-p \perp T(0) \implies p = \alpha(0) + \lambda N(0)$.
>>3. $f''(0)=0 \implies 1 + \langle \alpha''(0), \alpha(0)-p \rangle = 0$.
>>4. $1 + \kappa(0) \langle N(0), -\lambda N(0) \rangle = 0 \implies 1 - \kappa(0)\lambda = 0 \implies \lambda = 1/\kappa(0)$.
>>5. $p = \alpha(0) + \frac{1}{\kappa(0)} N(0)$ y $r = |\lambda| = 1/\kappa(0)$.

---

>[!Example] Ejercicio 10
>a) Fórmula de curvatura signada. b) Puntos críticos de curvatura de elipse.
>>[!Proof]-
>>**(a)**
>>1. $k(t) = \frac{x'y'' - x''y'}{\|\alpha'\|^3}$. (Cálculo estándar).
>>
>>**(b)**
>>1. Para $\alpha(t) = (a \cos t, b \sin t)$, $k(t) = \frac{ab}{(a^2 \sin^2 t + b^2 \cos^2 t)^{3/2}}$.
>>2. $k'(t) \propto (a^2-b^2)\sin(2t)$.
>>3. Se anula en $t=0, \pi/2, \pi, 3\pi/2$. Cuatro vértices.

---

>[!Example] Ejercicio 11
>Regularidad y torsión de curva transformada por $T$ lineal inyectiva.
>>[!Proof]-
>>**(a)** $\beta' = T(\alpha')$. Como $\alpha' \neq 0$ y $T$ inyectiva, $\beta' \neq 0$. Regular.
>>**(b)** $\alpha$ plana ($z=0$) $\implies \tau_\alpha = 0$. $\beta$ contenida en plano $T(\{z=0\})$ $\implies \tau_\beta = 0$.

---

>[!Example] Ejercicio 12
>Si longitud igual a distancia, es segmento.
>>[!Proof]-
>>1. $\int \|\alpha'\| = \|\int \alpha'\|$.
>>2. Igualdad en Cauchy-Schwarz integral implica $\alpha'(t)$ colineales con mismo sentido.
>>3. $\alpha'$ dirección constante $\implies \alpha$ es recta.

---

>[!Example] Ejercicio 13
>Curva en recta sii tangentes pasan por $p$.
>>[!Proof]-
>>1. ($\Rightarrow$) Trivial.
>>2. ($\Leftarrow$) $\alpha(t)-p = \lambda(t) \alpha'(t)$.
>>3. Derivando: $\alpha' = \lambda' \alpha' + \lambda \alpha'' \implies (1-\lambda')\alpha' = \lambda \alpha''$.
>>4. $\alpha''$ paralelo a $\alpha'$ (o $\alpha''=0$). $\kappa \propto \|\alpha' \times \alpha''\| = 0$.
>>5. Curvatura nula implica recta.