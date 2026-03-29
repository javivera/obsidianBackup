# Soluciones — Geometría Diferencial — Práctico 5

---

>[!Example] Ejercicio 1
>Sea $S$ la esfera de centro cero y radio uno y sea $\psi : (-\pi, \pi) \times \mathbb{R} \to \mathbb{R}^3$,
>$$ \psi(s, t) = (\cos t (\cos s, \text{sen } s), \text{sen } t). $$
>Hallar las funciones de cambio de coordenadas de $\phi_1^+$ a $\psi$, y de $\phi_1^-$ a $\phi_3^+$, incluyendo la descripción de los dominios.
>>[!Proof]-
>>- **Contexto:** $\psi$ es la parametrización por coordenadas esféricas (con $t$ latitud y $s$ longitud).$$\psi(s, t) = (\cos t \cos s, \cos t \text{sen } s, \text{sen } t)$$Las cartas $\phi_i^\pm$ suelen denotar las proyecciones canónicas sobre los planos coordenados (parametrizaciones gráficas).
>>$\phi_1^+(u, v) = (\sqrt{1-u^2-v^2}, u, v)$ (hemisferio $x > 0$).
>>$\phi_1^-(u, v) = (-\sqrt{1-u^2-v^2}, u, v)$ (hemisferio $x < 0$).
>>$\phi_3^+(u, v) = (u, v, \sqrt{1-u^2-v^2})$ (hemisferio $z > 0$).
>>- **1. Cambio de coordenadas $\phi_1^+ \to \psi$:**
>>	1. Queremos calcular $(\psi^{-1} \circ \phi_1^+)(u, v)$.
>>	2. Sea $p = \phi_1^+(u, v) = (x, y, z) = (\sqrt{1-u^2-v^2}, u, v)$.
>>	3. Buscamos $(s, t)$ tal que $\psi(s, t) = p$.
>>	4. $z = \text{sen } t \implies v = \text{sen } t \implies t = \text{arcsen } v$.
>>	5. $x = \cos t \cos s \implies x = \sqrt{1-v^2} \cos s$ (reemplazando con el paso 4.) 
>>	6. Entonces como $x>0$ (y $\sqrt{1-v^{2} }>0$) tenemos que $cos(s)>0$ osea $s\in \left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$    
>>	7. $y = \cos t \text{sen } s \implies u = \cos(\text{arcsen } v) \text{sen } s = \sqrt{1-v^2} \text{sen } s$. 
>>	8. Entonces $\text{sen } s = \frac{u}{\sqrt{1-v^2}}$ osea $s = \text{arcsen}\left( \frac{u}{\sqrt{1-v^2}} \right)$ que esta bien definida por que $s\in \left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$ 
>>	9. Finalmente la función de cambio de coordenadas es: $$ T(u, v) = \left( \text{arcsen}\left( \frac{u}{\sqrt{1-v^2}} \right), \text{arcsen } v \right) $$
>>- **Dominio:** 
>>	1. Ahora necesito asegurarme que el dominio de $\phi_{1}^{+}$ este bien para que su imagen este en el dominio de $\psi$ 
>>	2. La imagen de $\phi_1^+$ es el hemisferio $x>0$. Para $\psi$, esto corresponde a $s \in (-\pi/2, \pi/2)$ y $t \in (-\pi/2, \pi/2)$.
>>	3. El punto de esto es que no hace falta restringir el dominio de $\phi_{1}^{+}$ 
>>	4. Por lo tanto el dominio el cambio de coordeandas es el de $\phi_{1}^{+}$ que es en el plano $uv$ es el disco unitario abierto $u^2+v^2 < 1$.
>>- **2. Cambio de coordenadas $\phi_1^- \to \phi_3^+$:**
>>	1. Queremos calcular $(\phi_3^+)^{-1} \circ \phi_1^-$.
>>	2. Sea $p = \phi_1^-(u, v) = (-\sqrt{1-u^2-v^2}, u, v)$.
>>	3. Para que $p$ esté en la imagen de $\phi_3^+$, debe cumplir $z > 0$.
>>	4. Aquí $z = v$, por lo tanto necesitamos $v > 0$.
>>	5. Aplicamos $(\phi_3^+)^{-1}$ a $p=(x, y, z)$. Esta inversa es la proyección al plano $xy$: $(x, y) \to (x, y)$.
>>	6. Entonces: $$ (\phi_3^+)^{-1}(-\sqrt{1-u^2-v^2}, u, v) = (-\sqrt{1-u^2-v^2}, u) $$
>>- **Dominio:** 
>>	1. Originalmente $(u, v)$ está en el disco $u^2+v^2 < 1$.
>>	2. La intersección de las imágenes de las cartas es $\{x < 0\} \cap \{z > 0\}$.
>>	3. En coordenadas de $\phi_1^-$, $x<0$ ya se cumple en todo el dominio. Para que la 3era coordenada sea mayor que $0$ por definicion es lo mismo que pedir $v > 0$.
>>	4. Por tanto el dominio de la composicion es el semi-disco $$\{(u, v) : u^2+v^2 < 1, v > 0\}$$

---

>[!Example] Ejercicio 2
>Sea $S$ una superficie regular y sea $\pi : S \to \mathbb{R}^2$ la función que lleva a cada punto $(x, y, z) \in S$ al punto $(x, y)$. ¿Es la función $\pi$ diferenciable?
>>[!Proof]-
>>Sí.
>>La función $\Pi : \mathbb{R}^3 \to \mathbb{R}^2$ dada por $\Pi(x, y, z) = (x, y)$ es una función lineal, y por tanto infinitamente diferenciable ($C^\infty$).
>>La función $\pi$ es la restricción de $\Pi$ a la superficie $S$ ($\pi = \Pi|_S$).
>>Por definición, la restricción de una función diferenciable definida en un abierto de $\mathbb{R}^3$ (en este caso todo $\mathbb{R}^3$) a una superficie regular es diferenciable.

---

>[!Example] Ejercicio 3
>Consideremos la esfera $S^2 = \{x \in \mathbb{R}^3 : |x| = 1\}$ y el elipsoide $E = \{(x, y, z) \in \mathbb{R}^3 : x^2/a^2 + y^2/b^2 + z^2/c^2 = 1\}$. Probar que $S^2$ y $E$ son difeomorfas.
>>[!Proof]-
>>Consideremos la aplicación $F : \mathbb{R}^3 \to \mathbb{R}^3$ definida por $F(x, y, z) = (ax, by, cz)$.
>>Esta es una transformación lineal invertible (su matriz es diagonal con entradas $a, b, c \neq 0$). Por tanto es un difeomorfismo global de $\mathbb{R}^3$.
>>Si restringimos $F$ a la esfera $S^2$:
>>Sea $(x, y, z) \in S^2$, entonces $x^2+y^2+z^2=1$.
>>La imagen es $(u, v, w) = (ax, by, cz)$.
>>Verificamos si está en $E$:
>>$\frac{u^2}{a^2} + \frac{v^2}{b^2} + \frac{w^2}{c^2} = \frac{(ax)^2}{a^2} + \frac{(by)^2}{b^2} + \frac{(cz)^2}{c^2} = x^2 + y^2 + z^2 = 1$.
>>Por tanto $F(S^2) = E$.
>>La restricción $f = F|_{S^2} : S^2 \to E$ es una biyección suave con inversa suave (la restricción de $F^{-1}(u, v, w) = (u/a, v/b, w/c)$).
>>Por lo tanto, $f$ es un difeomorfismo.

---

>[!Example] Ejercicio 4
>Sea $S$ una superficie regular y $f : S \to \mathbb{R}$. Un punto $p \in S$ se dice crítico para $f$ si $df_p = 0$.
>Sea $f(p) = |p - p_0|$ con $p_0$ fuera de $S$ fijo. Mostrar que $p$ es crítico para $f$ si y sólo si la recta que pasa por $p$ y $p_0$ es perpendicular a $S$ en $p$.
>>[!Proof]-
>>1. Consideremos la función cuadrado de la distancia $$g(p) = |p - p_0|^2 = \langle p - p_0, p - p_0 \rangle$$
>>2. Los puntos críticos de $f$ son los mismos que los de $g$ (pues $f = \sqrt{g}$ y $g > 0$, $df = \frac{1}{2\sqrt{g}} dg$, así que $df=0 \iff dg=0$).
>>3. Extendemos $g$ a todo $\mathbb{R}^3$ como $G(x) = |x - p_0|^2$.
>>4. El diferencial de $G$ en $p$ actuando sobre un vector $v \in \mathbb{R}^3$ es:$$dG_p(v) = 2 \langle p - p_0, v \rangle$$
>>5. Para la función restringida $g = G|_S$, el diferencial $dg_p$ es la restricción de $dG_p$ al espacio tangente $T_pS$.
>>6. Entonces $p$ es punto crítico de $g$ si $dG_p(v) = 0$ para todo $v \in T_pS$. Esto equivale a: $$2 \langle p - p_0, v \rangle = 0 \quad \forall v \in T_pS$$
>>7. Esto significa que el vector $p - p_0$ es ortogonal a todo vector tangente a $S$ en $p$. Es decir, $p - p_0$ es normal a $S$ en $p$.
>>8. Geométricamente, esto significa que la recta que une $p_0$ y $p$ (que tiene dirección $p - p_0$) es perpendicular al plano tangente $T_pS$.

---

>[!Example] Ejercicio 5
>Sean $M$ y $N$ dos superficies regulares y sea $F : \mathbb{R}^3 \to \mathbb{R}^3$ una función suave tal que $F(M) \subset N$. Mostrar que la función suave $f = F|_M : M \to N$ satisface $df_p = dF_p|_{T_pM}$ para todo $p \in M$. 
>En particular, si $F$ es lineal, entonces $df_p(w) = F(w)$, para todo $p \in M$ y $w \in T_pM$.
>>[!Proof]-
>>1. Sea $w \in T_pM$. Por definición, existe una curva suave $\alpha : (-\epsilon, \epsilon) \to M$ tal que $\alpha(0) = p$ y $\alpha'(0) = w$.
>>2. El diferencial de $f$ se calcula como:$$df_p(w) = (f \circ \alpha)'(0)$$
>>3. Como $f$ es la restricción de $F$, y $\alpha(t)\in M$ tenemos $f(\alpha(t)) = F(\alpha(t))$.
>>4. Entonces:$$df_p(w) = \frac{d}{dt} (F(\alpha(t))) \big|_{t=0}$$
>>5. Por la regla de la cadena en $\mathbb{R}^3$, y por definicion de matriz diferencial para funciones de $\mathbb{R}^{n}$ en $\mathbb{R}^{m}$   esto es: $$dF_{\alpha(0)}(\alpha'(0)) = dF_p(w)$$
>>6. Por lo tanto, $df_p(w)$ coincide con la aplicación lineal $dF_p$ evaluada en $w$.
>>- **Caso lineal:**
>>	1. Si $F$ es lineal, su diferencial en cualquier punto es la misma transformación lineal $F$ (es decir, $dF_p(v) = F(v)$).
>>	2. Entonces $df_p(w) = dF_p(w) = F(w)$.

---

>[!Example] Ejercicio 6
>Mostrar que el paraboloide $z = x^2 + y^2$ es difeomorfo a un plano.
>>[!Proof]-
>>1. Sea $P$ el paraboloide y $\pi : P \to \mathbb{R}^2$ la proyección $\pi(x, y, z) = (x, y)$. Esta función es suave (restricción de proyección lineal).
>>2. Su inversa es la parametrización global $\varphi : \mathbb{R}^2 \to P$ dada por $\varphi(u, v) = (u, v, u^2+v^2)$. (Una composicion es trivial la otra sale usando que $(x,y,z)\in Dm(\pi)$ entonces $z=x^{2}+y^{2}$) 
>>3. Ademas $\varphi$ es suave (sus componentes son polinomios osea es diferenciable en el sentido tradicional en $\mathbb{R}^{2}$).
>>4. Como $\pi \circ \varphi = \text{id}_{\mathbb{R}^2}$ y $\varphi \circ \pi = \text{id}_P$, $\pi$ es una biyección con inversa suave.
>>5. Por tanto, $P$ es difeomorfo a $\mathbb{R}^2$ (un plano).

---

>[!Example] Ejercicio 7
>Sea $A : S \to S, A(q) = -q$, la aplicación antipodal de la esfera y sea $p \in S$. Mostrar que $A$ es un difeomorfismo, $T_pS = T_{A(p)}S$ y calcular $dA_p$ sin recurrir a sistemas coordenados de $S$.
>>[!Proof]-
>>- **Difeomorfismo:** $A$ es la restricción a $S$ de la aplicación lineal $L(x) = -x$ en $\mathbb{R}^3$. Como $L$ es suave e invertible (su inversa es ella misma, $L^{-1} = L$), su restricción a una subvariedad invariante ($L(S)=S$) es un difeomorfismo.
>>- **Espacios tangentes:**
>>   1. El espacio tangente $T_pS$ es el conjunto de vectores ortogonales a $p$ (pues $S$ es la esfera unitaria).$$T_pS = \{v \in \mathbb{R}^3 : \langle p, v \rangle = 0\}$$
>>   2. El espacio tangente en $A(p) = -p$ es por la misma razon: $$T_{-p}S = \{v \in \mathbb{R}^3 : \langle -p, v \rangle = 0\}$$
>>   3. Como $\langle -p, v \rangle = -\langle p, v \rangle$, la condición es idéntica.
>>   4. Por tanto, $T_pS = T_{-p}S$ (como subespacios de $\mathbb{R}^3$).
>>- **Cálculo de $dA_p$:**
>>	1. Usando el resultado del Ejercicio 5, como $A$ es la restricción de la lineal $L(x) = -x$ entonces $dA_{p}=dL_{p}|_{T_{p}S}=L|_{T_{p}S}$ 
>>	2. Esto es $$dA_p(w) = L(w) = -w$$ para todo $w \in T_pS$.
>>	3. Es decir, $dA_p = -\text{Id}|_{T_pS}$.

---

>[!Example] Ejercicio 8
>Sean $F : M \to N$ y $G : N \to P$ funciones suaves entre superficies y sea $p \in M$. Mostrar que $d(G \circ F)_p = dG_{F(p)} \circ dF_p$ (regla de la cadena).
>>[!Proof]-
>>1. Sea $w \in T_pM$. Sea $\alpha : (-\epsilon, \epsilon) \to M$ una curva suave tal que $\alpha(0) = p$ y $\alpha'(0) = w$.
>>2. Por definición de diferencial:$$d(G \circ F)_p(w) = \frac{d}{dt} (G \circ F \circ \alpha)(t) \big|_{t=0}$$
>>3. Sea $\beta(t) = (F \circ \alpha)(t)$. Entonces $\beta$ es una curva en $N$ con $\beta(0) = F(p)$ y $\beta'(0) = dF_p(w)$ (por definición de $dF_p$).
>>4. Entonces reemplazando y por definicion de diferencial: $$\frac{d}{dt} (G \circ F \circ \alpha)(t) \big|_{t=0}=\frac{d}{dt} (G(\beta(t))) \big|_{t=0} = dG_{\beta(0)}(\beta'(0))$$
>>5. Sustituyendo:$$dG_{\beta(0)}(\beta'(0))= dG_{F(p)}(dF_p(w))$$
>>6. Como vale para todo $w$, $d(G \circ F)_p = dG_{F(p)} \circ dF_p$.

---

>[!Example] Ejercicio 9
>Sean $S^2$ la esfera de radio 1 y centro en el origen, y $M = \{(x, y, z) : x^2 + y^2 - z^2 = 1\}$. Denotamos con $N$ y $S$ respectivamente los puntos $(0, 0, 1)$ y $(0, 0, -1)$ y definimos $F : S^2 - \{N, S\} \to M$ de la siguiente manera: para cada $p \in S^2$ distinto de $N$ y $S$, $F(p)$ es el punto donde corta a $M$ la semirrecta que pasa por $p$ perpendicular al eje $z$, que parte desde dicho eje. Demostrar que $F$ es diferenciable. Mostrar que $F$ es un difeomorfismo de dos maneras: primero, calculando la inversa de $F$; después, sin hallar la inversa, usando el teorema de la función inversa.
>>[!Proof]-
>>- **Diferenciabilidad**
>>1. La semirrecta perpendicular al eje $z$ que pasa por $p=(x, y, z)$ y parte del eje $z$ es el rayo radial en coordenadas cilíndricas a altura $z$.
>>2. Parametrización del rayo: $R(t) = (0, 0, z) + t(x, y, 0)$ con $t > 0$.
>>3. Como $p \in S^2$, $x^2+y^2+z^2=1$, así que $x^2+y^2 = 1-z^2$. El radio de $p$ al eje es $\rho_p = \sqrt{1-z^2}$.
>>4. El punto $p$ está en el rayo para $t=1$.
>>5. Buscamos la intersección con $M: x^2+y^2-z^2=1$. Punto del rayo: $Q = (tx, ty, z)$. Queremos encontrar $t$ para que $Q$ cumpla la ecuacion $M$  
>>6. Reemplazando $(tx)^2 + (ty)^2 - z^2 = 1 \implies t^2(x^2+y^2) - z^2 = 1$.
>>7. Entonces $t^2(1-z^2) = 1+z^2 \implies t = \sqrt{\frac{1+z^2}{1-z^2}}$.
>>8. Obteniendo $F(x, y, z) = \left( x\sqrt{\frac{1+z^2}{1-z^2}}, y\sqrt{\frac{1+z^2}{1-z^2}}, z \right)$. Que seria la interseccion del rayo con $M$ 
>>9. Esta función es diferenciable en $\mathbb{R}^3$ siempre que $z \neq \pm 1$. Por lo tanto es diferenciable en $S^{2}$ por ser restriccion de diferenciable 
>>10. Los puntos con $z=\pm 1$ son los polos $(0, 0, \pm 1)$ que estan excluidos del dominio. 
>>- **Calculando la inversa:**
>>1. Sea $Q = (X, Y, Z) \in M$. Queremos recuperar $p \in S^2$.
>>2. La operación inversa es proyectar radialmente hacia el eje $z$ hasta tocar la esfera.
>>3. La altura no cambia al invertir osea $z = Z$. 
>>4. Radio en $M$: $$\rho_M = \sqrt{X^2+Y^2} = \sqrt{1+Z^2}$$Radio en $S^2$: $$\rho_S = \sqrt{1-z^2} = \sqrt{1-Z^2}$$Por lo tanto tenemos un factor de escala $k = \frac{\rho_S}{\rho_M} = \sqrt{\frac{1-Z^2}{1+Z^2}}$.
>>5. Finalmente $$F^{-1}(X, Y, Z) = (kX, kY, Z)$$
>>6. Para que $k$ esté bien definido necesitamos $1-Z^2 > 0 \implies |Z| < 1$. Pero esto es asi por que la imagen de $F$ es la parte de $M$ con $|z| < 1$. (Por que la esfera de centro $0$ y radio $1$ a lo sumo tiene altura $z=\pm 1$ y pero le sacamos el polo sur/norte) 
>>7. $F^{-1}$ es trivialmente suave en ese dominio.
>>- **Teorema de la función inversa:**
>>1. Para calcular $dF$. Miramos a $F$ como $F(x,y,z)$  notamos que $h(z) = \sqrt{\frac{1+z^2}{1-z^2}}$ es $C^{\infty}$ en $(-1,1)$ y $F$ 
>>2. La derivada de la función de escala  es no nula.
>>Al ser una biyección suave con diferencial no singular (preserva altura y escala radialmente de forma monótona), es un difeomorfismo local. Al ser biyectiva, es global.

---

>[!Example] Ejercicio 10
>Mostrar que si todos los puntos de una superficie conexa son puntos críticos de una función $f$, entonces $f$ es constante.
>>[!Proof]-
>>Si todos los puntos son críticos, $df_p = 0$ para todo $p \in S$.
>>Sea $p, q \in S$. Como $S$ es conexa (y por ser variedad, conexa por caminos), existe una curva suave $\alpha : [0, 1] \to S$ tal que $\alpha(0)=p$ y $\alpha(1)=q$.
>>Consideremos la función compuesta $g(t) = f(\alpha(t))$.
>>$g'(t) = df_{\alpha(t)}(\alpha'(t))$.
>>Como $df$ es idénticamente nulo, $g'(t) = 0$ para todo $t$.
>>Por cálculo elemental, $g(t)$ es constante.
>>Entonces $f(p) = g(0) = g(1) = f(q)$.
>>Como vale para cualesquiera $p, q$, $f$ es constante.

---

>[!Example] Ejercicio 11
> **Superficies de revolución.**
> Sea $I$ un intervalo abierto y sea $\gamma : I \subseteq \mathbb{R} \to \mathbb{R}^2$ una curva regular suave de la forma $\gamma(t) = (r(t), h(t))$, con $r(t) > 0$ para todo $t \in I$ y sea $\phi : \mathbb{R} \times I \to \mathbb{R}^3$,
> $$ \phi(s, t) = (r(t) \cos s, r(t) \text{sen } s, h(t)). $$
> Si $\gamma$ satisface condiciones de inyectividad (o periodicidad simple), $S = \text{Im}(\phi)$ es una superficie regular.
> - Mostrar que el toro $T(R, r)$ es un ejemplo de $S$ como arriba. ¿Con cuál $\gamma$?
> - Verificar que $\phi$ es una parametrización de $S$.
> - Definir paralelos y meridianos.
>>[!Proof]-
>>- **1. Toro:**
>>	1. El toro de revolución se genera rotando un círculo de radio $r$ centrado en $(R, 0)$ alrededor del eje $z$.
>>	2. La curva generatriz en el plano $xz$ (o $rz$) es: $\gamma(t) = (R + r \cos t, r \text{sen } t)$ para $t \in (0, 2\pi)$. Aquí $r(t) = R + r \cos t$ y $h(t) = r \text{sen } t$.
>>	3. Como $R > r$, $r(t) > 0$ siempre.
>>- **2. Parametrización:**
>>	1. $\phi(s, t) = ((R + r \cos t)\cos s, (R + r \cos t)\text{sen } s, r \text{sen } t)$.
>>	2. Jacobiana: $\phi_s = (-r(t)\text{sen } s, r(t)\cos s, 0)$, $\phi_t = (r'(t)\cos s, r'(t)\text{sen } s, h'(t))$
>>	3. Queremos ver que la jacobiana es inyectiva, para eso queremos ver que el producto cruz es distinto de cero.
>>	4. Luego $\phi_s \times \phi_t = (r(t)h'(t)\cos s, r(t)h'(t)\text{sen } s, -r(t)r'(t))$. Norma al cuadrado: $r(t)^2 (h'(t)^2 + r'(t)^2) = r(t)^2 \|\gamma'(t)\|^2$.
>>	5. Como $r(t) > 0$ y $\gamma$ es regular ($\|\gamma'\| \neq 0$), el producto cruz nunca es cero.
>>	6. Es una inmersión local. Con las restricciones de dominio adecuadas ($t\in I$) para inyectividad del Jacobiano, es una parametrización.
>>- **3. Paralelos y Meridianos:**
>>	- **Paralelos:** Curvas con $t = \text{cte}$. Son circunferencias horizontales generadas por la rotación de un punto fijo de la generatriz.
>>	- **Meridianos:** Curvas con $s = \text{cte}$. Son copias de la curva generatriz $\gamma$ (rotadas un ángulo $s$).

---

>[!Example] Ejercicio 12
>Sea $S$ una superficie dada implícitamente por $f(x, y, z) = 0$ (0 valor regular de $f$). Mostrar que el plano tangente afín en $(x_0, y_0, z_0)$ está dado por:
>$$ f_x(x_0, y_0, z_0)(x - x_0) + f_y(x_0, y_0, z_0)(y - y_0) + f_z(x_0, y_0, z_0)(z - z_0) = 0. $$
>>[!Proof]-
>>Sabemos que el vector gradiente $\nabla f(p) = (f_x, f_y, f_z)|_p$ es normal a la superficie de nivel $S = f^{-1}(0)$ en $p$.
>>El plano tangente $T_pS$ (como subespacio vectorial) es el complemento ortogonal de $\nabla f(p)$.
>>El plano tangente afín es el conjunto de puntos $X = (x, y, z)$ tales que el vector $X - p$ pertenece a $T_pS$.
>>Es decir, $\langle \nabla f(p), X - p \rangle = 0$.
>>Desarrollando el producto interno:
>>$f_x(p)(x - x_0) + f_y(p)(y - y_0) + f_z(p)(z - z_0) = 0$.

---

>[!Example] Ejercicio 13
>Mostrar que los planos tangentes de $x^2 + y^2 - z^2 = 1$ en los puntos $(x, y, 0)$ son todos paralelos al eje $z$.
>>[!Proof]-
>>Sea $f(x, y, z) = x^2 + y^2 - z^2$.
>>$\nabla f = (2x, 2y, -2z)$.
>>En un punto $p = (x_0, y_0, 0)$ (intersección con plano $xy$), el gradiente es:
>>$\nabla f(p) = (2x_0, 2y_0, 0)$.
>>El vector normal al plano tangente es horizontal (componente $z$ nula).
>>Por lo tanto, el plano tangente es vertical, es decir, paralelo al eje $z$ (contiene vectores verticales como $(0, 0, 1)$ ya que $\langle (2x_0, 2y_0, 0), (0, 0, 1) \rangle = 0$).

---

>[!Example] Ejercicio 14
>(a) Mostrar que si todas las rectas normales a una superficie conexa pasan por un punto, entonces la superficie está contenida en una esfera.
>(b) Más en general, probar que si todas las rectas normales a una superficie regular conexa pasan por una recta fija, entonces $S$ es una superficie de revolución.
>>[!Proof]-
>>**(a)** Supongamos que todas las normales pasan por el origen $O$ (sin pérdida de generalidad).
>>Esto significa que para todo $p \in S$, el vector normal $N(p)$ es colineal con el vector posición $p$.
>>Consideremos la función $f(p) = \|p\|^2 = \langle p, p \rangle$.
>>Sea $v \in T_pS$. $df_p(v) = 2 \langle p, v \rangle$.
>>Como $p$ es colineal a la normal, $p$ es ortogonal al plano tangente. Por tanto $\langle p, v \rangle = 0$.
>>Entonces $df \equiv 0$ en $S$.
>>Como $S$ es conexa, $f$ es constante. $\|p\|^2 = R^2$.
>>$S$ está contenida en una esfera de radio $R$.
>>
>>**(b)** Supongamos que las normales cortan al eje $z$.
>>Esto implica que la normal $N(p)$ no tiene componente "azimutal" que la saque del plano formado por $p$ y el eje $z$. O más formalmente, la normal es coplanar con el eje $z$ y el punto $p$.
>>Esto sugiere simetría rotacional.
>>Consideremos la función $g(p)$ que rota $p$ alrededor del eje $z$. El campo vectorial generado por rotaciones infinitesimales es $V(x, y, z) = (-y, x, 0)$ (tangente a los paralelos).
>>Si la normal corta al eje $z$, entonces la normal está en el plano generado por $(0,0,1)$ y $p$. El vector $V(p)$ es perpendicular a este plano.
>>Por tanto $V(p)$ es perpendicular a la normal $N(p)$.
>>Esto implica que $V(p)$ es tangente a la superficie ($V(p) \in T_pS$).
>>Como el campo de rotación es tangente a la superficie, la superficie es invariante bajo rotaciones (el flujo del campo preserva la superficie).
>>Por tanto es una superficie de revolución.

---

>[!Example] Ejercicio 15
>Demostrar que si una superficie regular $S$ intersecta a un plano $P$ únicamente en un punto $p$, entonces dicho plano es el plano tangente a $S$ en $p$. [Hint: Sea $n$ un vector normal al plano $P$ y estudiar la función altura $h$ de $S$ con respecto de $n$. Mostrar que la hipótesis implica que el punto $p$ debe ser un punto donde $h$ tiene un máximo/mínimo local.]
>>[!Proof]-
>>Sea $P$ definido por $\langle x - p, n \rangle = 0$.
>>La función altura es $h(q) = \langle q - p, n \rangle$.
>>$P = \{x : h(x) = 0\}$.
>>La intersección es $S \cap P = \{p\}$. Esto significa que $h(p) = 0$ y $h(q) \neq 0$ para todo $q \in S, q \neq p$.
>>Por continuidad de $h$ y conexidad local de $S$ alrededor de $p$, $h$ debe tener signo constante en un entorno de $p$ (si tomara valores positivos y negativos, por valor intermedio habría más puntos donde $h=0$).
>>Supongamos $h(q) \ge 0$ cerca de $p$.
>>Entonces $p$ es un mínimo local de $h$.
>>En un extremo local, el diferencial debe anularse: $dh_p = 0$.
>>$dh_p(v) = \langle v, n \rangle$ para $v \in T_pS$.
>>Que sea cero implica que $n$ es ortogonal a todo $v \in T_pS$.
>>Por tanto, $n$ es normal a $S$ en $p$.
>>El plano $P$ (normal a $n$) coincide con el plano tangente $T_pS$.

---

>[!Example] Ejercicio 16
>Sea $T$ el toro $T(2, 1)$ con su parametrización usual $\phi : \mathbb{R}^2 \to T \subseteq \mathbb{R}^3$. Dados $a, b, c, d \in \mathbb{Z}$, considerar $F : T \to T$ definida por
>$$ F(p) = \phi(as + ct, bs + dt), $$
>si $p = \phi(s, t)$.
>- Mostrar que $F$ está bien definida y es suave.
>- Probar que si $\det \begin{pmatrix} a & c \\ b & d \end{pmatrix} = 1$, entonces $F$ es un difeomorfismo. Para $a=b=c=1, d=2$ se tiene la transformación del gato de Arnold.
>- Hallar la matriz de $dF_{\phi(0,0)}$ en la base $\{\phi_s(0,0), \phi_t(0,0)\}$.
>>[!Proof]-
>>**1. Bien definida:**
>>La parametrización $\phi$ es $2\pi$-periódica en $s$ y $t$.
>>$p = \phi(s, t) = \phi(s', t')$ si y solo si $s' - s = 2\pi k$ y $t' - t = 2\pi l$ con $k, l \in \mathbb{Z}$.
>>Veamos si la imagen es independiente del representante:
>>$F(\phi(s+2\pi k, t+2\pi l)) = \phi(a(s+2\pi k) + c(t+2\pi l), b(s+2\pi k) + d(t+2\pi l))$
>>$= \phi(as+ct + 2\pi(ak+cl), bs+dt + 2\pi(bk+dl))$.
>>Como $a, b, c, d$ son enteros, los términos $ak+cl$ y $bk+dl$ son enteros.
>>Por la periodicidad de $\phi$, el valor en $T$ es el mismo.
>>Es suave porque es composición de la aplicación lineal (suave) y la parametrización (suave localmente).
>>
>>**2. Difeomorfismo:**
>>La aplicación inducida en el plano cubriente $\mathbb{R}^2$ es la lineal $L(s, t) = (as+ct, bs+dt)$.
>>Si $\det(L) = ad-bc = 1$, entonces la matriz inversa tiene entradas enteras:
>>$L^{-1} = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$.
>>Esto define una inversa $F^{-1}$ en el toro de la misma forma (usando la matriz inversa).
>>Al tener inversa suave, es un difeomorfismo.
>>
>>**3. Matriz del diferencial:**
>>En la base coordenada $\{\partial_s, \partial_t\}$ asociada a la carta $\phi$:
>>El mapa es inducido por la matriz $M = \begin{pmatrix} a & c \\ b & d \end{pmatrix}$.
>>Ojo con el orden: $u_{new} = as + ct$, $v_{new} = bs + dt$.
>>$dF(\partial_s) = \frac{\partial u_{new}}{\partial s} \partial_s + \frac{\partial v_{new}}{\partial s} \partial_t = a \partial_s + b \partial_t$.
>>$dF(\partial_t) = \frac{\partial u_{new}}{\partial t} \partial_s + \frac{\partial v_{new}}{\partial t} \partial_t = c \partial_s + d \partial_t$.
>>La matriz en la base $\{\phi_s, \phi_t\}$ es $\begin{pmatrix} a & c \\ b & d \end{pmatrix}$.

---

>[!Example] Ejercicio 17
>Sea $S$ una superficie regular y sea $f : S \to \mathbb{R}$ una función suave con un punto crítico $p$. Mostrar que el hessiano $H_p$ de $f$ en $p$ está bien definido por
>$$ H_p : T_pS \to \mathbb{R}, \quad H_p(\alpha'(0)) = (f \circ \alpha)''(0), $$
>donde $\alpha$ es una curva suave en $S$ con $\alpha(0) = p$.
>>[!Proof]-
>>Debemos mostrar que el valor $(f \circ \alpha)''(0)$ depende solo del vector tangente $v = \alpha'(0)$ y no de la curva elegida.
>>Sea $\varphi : U \to S$ una carta local alrededor de $p$. Sea $\alpha(t) = \varphi(u(t))$.
>>$f(\alpha(t)) = (f \circ \varphi)(u(t))$.
>>Primera derivada:
>>$(f \circ \alpha)'(t) = \sum_i \frac{\partial (f \circ \varphi)}{\partial u_i} u_i'(t)$.
>>En $t=0$, esto es $df_p(\alpha'(0))$. Como $p$ es punto crítico, $df_p = 0$, así que la primera derivada es 0 (esto es consistente).
>>Segunda derivada:
>>$(f \circ \alpha)''(t) = \sum_{i,j} \frac{\partial^2 (f \circ \varphi)}{\partial u_i \partial u_j} u_i'(t) u_j'(t) + \sum_i \frac{\partial (f \circ \varphi)}{\partial u_i} u_i''(t)$.
>>Evaluando en $t=0$:
>>El segundo término contiene $\frac{\partial (f \circ \varphi)}{\partial u_i}|_{u(0)}$. Estas son las componentes de $df_p$.
>>Como $p$ es punto crítico, $df_p = 0$, por lo que el segundo término desaparece.
>>Queda:
>>$(f \circ \alpha)''(0) = \sum_{i,j} \frac{\partial^2 (f \circ \varphi)}{\partial u_i \partial u_j} u_i'(0) u_j'(0)$.
>>Esta expresión es una forma cuadrática en las componentes del vector velocidad $u'(0)$ (que son las coordenadas de $v = \alpha'(0)$ en la base de la carta).
>>Por lo tanto, el valor depende únicamente de $v$ y no de la aceleración $u''(0)$ de la curva.
>>Está bien definido.
