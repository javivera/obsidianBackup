# Soluciones — Geometría Diferencial — Práctico 3

---

>[!Example] Ejercicio 1
>Describir geométricamente las transformaciones lineales en $\mathbb{R}^2$ inducidas por las siguientes matrices.
>(a) $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$
>(b) $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
>(c) $\begin{pmatrix} \cos \alpha & \sin \alpha \\ \sin \alpha & -\cos \alpha \end{pmatrix} \begin{pmatrix} \cos \beta & \sin \beta \\ \sin \beta & -\cos \beta \end{pmatrix}$
>(d) $\begin{pmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
>>[!Proof]-
>>**(a)** Es una reflexión respecto al eje $y$ (transforma $(x, y) \to (-x, y)$). Determinante $-1$.
>>
>>**(b)** Es una reflexión respecto a la recta $y=x$ (transforma $(x, y) \to (y, x)$). Determinante $-1$.
>>
>>**(c)** El producto de dos reflexiones es una rotación.
>>La matriz $R_\theta = \begin{pmatrix} \cos \theta & \sin \theta \\ \sin \theta & -\cos \theta \end{pmatrix}$ representa una reflexión respecto a la recta que pasa por el origen con ángulo $\theta/2$.
>>El producto es:
>>$$ \begin{pmatrix} \cos \alpha & \sin \alpha \\ \sin \alpha & -\cos \alpha \end{pmatrix} \begin{pmatrix} \cos \beta & \sin \beta \\ \sin \beta & -\cos \beta \end{pmatrix} = \begin{pmatrix} \cos(\alpha-\beta) & -\sin(\alpha-\beta) \\ \sin(\alpha-\beta) & \cos(\alpha-\beta) \end{pmatrix} $$
>>Es una rotación de ángulo $\alpha - \beta$.
>>
>>**(d)** Es la composición de una reflexión respecto al eje $x$ seguida de una rotación de ángulo $\alpha$.
>>$$ \begin{pmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} \cos \alpha & \sin \alpha \\ \sin \alpha & -\cos \alpha \end{pmatrix} $$
>>Es una reflexión respecto a la recta con ángulo $\alpha/2$.

---

>[!Example] Ejercicio 2
>¿Qué se obtiene de componer la reflexión en el plano respecto del eje $x$ con la reflexión respecto de la recta $\{ t(\cos \theta, \sin \theta) \mid t \in \mathbb{R} \}$?
>>[!Proof]-
>>1. Reflexión eje $x$: $M_1 = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$.
>>2. Reflexión recta ángulo $\theta$: $M_2 = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}$.
>>3. Composición (primero eje $x$, luego recta $\theta$): $M_2 M_1$.
>>$$ \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} \cos 2\theta & -\sin 2\theta \\ \sin 2\theta & \cos 2\theta \end{pmatrix} $$
>>4. Es una rotación de ángulo $2\theta$.

---

>[!Example] Ejercicio 3
>Sea $\alpha$ curva unit-speed con $\kappa \neq 0$ y torsión $\tau$. Sea $T(x) = Ax+b$ transformación euclidiana ($A$ ortogonal). Sea $\bar{\alpha} = T \circ \alpha$. Mostrar que $\bar{\alpha}$ es de rapidez unitaria y comparar elementos geométricos.
>>[!Proof]-
>>1. **Rapidez:** $\bar{\alpha}' = (A\alpha + b)' = A\alpha'$. Luego $\|\bar{\alpha}'\| = \|A\alpha'\| = \|\alpha'\| = 1$ (pues $A$ es isometría). $\bar{\alpha}$ es unit-speed.
>>2. **Tangente:** $\bar{T} = \bar{\alpha}' =A\alpha'= A T$.
>>3. **Curvatura y Normal:** $\bar{T}' = A T' = A(\kappa N) = \kappa (AN)$.
>>   $\bar{\kappa} = \|\bar{T}'\| = \kappa \|AN\| =\lVert N \rVert =\kappa$. (Devuelta use isometria).
>>   $\bar{N} = \bar{T}'/\bar{\kappa} = A N$.
>>4. **Binormal:** $\bar{B} = \bar{T} \times \bar{N} = (AT) \times (AN) = (\det A) A(T \times N) = (\det A) A B$.
>>   Si $A$ es rotación ($\det A = 1$), $\bar{B} = AB$. Si es reflexión ($\det A = -1$), $\bar{B} = -AB$.
>>5. **Torsión:** $\bar{B}' = (\det A) A B' = (\det A) A (-\tau N) = -\tau (\det A) (AN) = -(\tau \det A) \bar{N}$.
>>   Comparando con $\bar{B}' = -\bar{\tau} \bar{N}$, tenemos $\bar{\tau} = (\det A) \tau$.
>>   La torsión se conserva si la transformación es directa (rotación/traslación) y cambia de signo si es inversa (reflexión).

---

>[!Example] Ejercicio 4
>Sea $v \in \mathbb{R}^2$ un vector de norma 1. Mostrar que $v$ es de la forma $(\cos(\theta), \operatorname{sen}(\theta))$ y que los únicos dos vectores ortogonales a $v$ de norma 1 son $(-\varepsilon \operatorname{sen}(\theta), \varepsilon \cos(\theta))$ con $\varepsilon = \pm 1$.
>>[!Proof]-
>>1. Sea $v = (x, y)$ con $x^2+y^2=1$. Existe $\theta$ tal que $x=\cos\theta, y=\sin\theta$.
>>2. Sea $w = (a, b)$ unitario y ortogonal a $v$.
>>3. $\langle v, w \rangle = x a + y b = 0$.
>>4. Soluciones: $(a, b) = \pm (-y, x) = \pm (-\sin\theta, \cos\theta)$.
>>5. Corresponde a $\varepsilon = \pm 1$.

---

>[!Example] Ejercicio 5
>En general Rotaciones no conmutan con traslaciones
>>[!Proof]-
>>1. Sea $R(x) = Ax$ rotación ($A \neq I$) y $T_v(x) = x+v$ traslación ($v \neq 0$).
>>2. $(R \circ T_v)(x) = A(x+v) = Ax + Av$.
>>3. $(T_v \circ R)(x) = Ax + v$.
>>4. Son iguales sii $Av = v$.
>>5. Para una rotación no trivial en el plano, el único vector fijo es el nulo. Si $v \neq 0$, $Av \neq v$. No conmutan.

---

>[!Example] Ejercicio 6
> Hallar la composición de las reflexiones de la recta real respecto de los puntos $a$ y $b$ 
>>[!Proof]-
>>1. Para ser $s_{a}(x)$ reflexion de $x$ sobre $c$ debe ser $c$ punto medio entre $x$ y $s_{a}(x)$ 
>>2. Entonces $a=x+\frac{s_{a}(x)}{2}$ por lo tanto $s_{a}(x)=2a-x$ 
>>3. Análogo. Reflexión respecto a $b$: $s_b(x) = 2b - x$.
>>4. Composición $s_b \circ s_a (x) = 2b - (2a - x) = x + 2(b-a)$.
>>5. Es una traslación por el vector $2(b-a)$.

---

>[!Example] Ejercicio 7
>Escribir la rotación del plano en angulo $\pi/3$ alrededor de $p=(1, 4)$ de las formas $z\mapsto Cz+u$.
>>[!Proof]-
>>1. Por [[Definiciones#^ff0d1a]] tenemos que $$R_{p, \frac{\pi}{3}}(x) =R_{\frac{\pi}{3}}(x)+p-R_{\frac{\pi}{3}}(p) = e^{i \frac{\pi}{3}}(x) + 1+4i -e^{i \frac{\pi}{3}} (1+4i)$$
>>2. $C = e^{i\pi/3} = \cos(\pi/3) + i\sin(\pi/3) = \frac{1}{2} + i\frac{\sqrt{3}}{2}$.
>>3. El resto es hacer las cuentas.
>>4. De forma matricial es mas o menos lo mismo usando $$R_{p, \frac{\pi}{3}}(x)=\begin{pmatrix} \frac{1}{2} & -\frac{\sqrt{ 3}}{2}\\ \frac{\sqrt{ 3 }}{2}& \frac{1}{2}\end{pmatrix}\quad p=(1,4)^{T} $$  

---

>[!Example] Ejercicio 8
>Sea $T$ la transformación euclidiana de $\mathbb{R}^n$ definida por  $$T(x) = Cx + u$$con $C$ ortogonal y $u \in \mathbb{R}^n$.  
>Hallar una transformación ortogonal $D$ y $v \in \mathbb{R}^n$ tales que $$T(x) = D(x + v)$$ para todo $x$
>>[!Proof]-
>>1. Queremos $Cx + u = D(x+v) = Dx + Dv$.
>>2. Igualando términos lineales: $D = C$.
>>3. Igualando términos constantes: $u = Cv \implies v = C^{-1}u$.
>>4. Como $C$ es ortogonal, $C^{-1} = C^T$.
>>5. Entonces $D=C$ y $v = C^T u$.

---

>[!Example] Ejercicio 9
>Probar que toda transformación rígida del plano es una traslación o una rotación alrededor de algún punto del plano.
>>[!Proof]-
>>1. Sea $f(x) = Ax + b$ con $A \in SO(2)$ ($O$ de ortogonal y $S$ de determinante $1$ ósea $f$ es rígida).
>>2. Si $A = I$, $f(x) = x+b$ es una traslación.
>>3. Si $A \neq I$, $\det(I-A) \neq 0$. Pues 1 no es autovalor de rotación no trivial en el plano. Esto se puede ver calculado los auto valores a mano 
>>4. Entonces $I-A$ es inversible por lo tanto existe un único punto $p$ tal que $(I-A)p = b$. Ósea $-Ap=b-p$ 
>>5. Entonces $$Ax+b=Ax+b-p+p=Ax -Ap+p = A(x-p) + p=R_{p,\theta}(x)$$Que es por [[Definiciones#^ff0d1a]] una rotación alrededor de $p$. (Recordar $A$ es ortogonal de determiannte $1$, por que $f$ es trasnformacion rigida) 

^4d80f2

---

>[!Example] Ejercicio 10
>Sean $w$ y $z$ dos puntos en $\mathbb{R}^2$. ¿Qué transformación rígida del plano se obtiene si se compone la rotación en $180^\circ$ alrededor de $z$ con la rotación en $180^\circ$ alrededor de $w$?
>>[!Proof]-
>>1. Rotación $180^\circ$ es simetría central: $R_z(x) = 2z - x$.
>>2. $R_w(R_z(x)) = 2w - (2z - x) = x + 2(w-z)$.
>>3. Es una traslación por el vector $2(w-z)$.

---

>[!Example] Ejercicio 11
>Dar un ejemplo de dos curvas suaves $\alpha, \beta : (a, b) \to \mathbb{R}^3$ con las mismas funciones de curvatura (positivas) tales que en un instante $t_0 \in (a, b)$, $\alpha(t_0) = \beta(t_0)$, los triedros de Frenet coinciden en $t_0$ y no sean congruentes.
>>[!Proof]-
>>1. Considerar dos hélices con la misma curvatura $\kappa > 0$ pero torsiones opuestas $\tau$ y $-\tau$.
>>2. $\alpha(s)$ hélice dextrógira, $\beta(s)$ hélice levógira.
>>3. Ubicarlas tal que en $s=0$ pasen por el origen con el mismo triedro canónico.
>>4. Tienen las mismas funciones de curvatura (constante) y norma de torsión.
>>5. No son congruentes mediante una transformación rígida *directa* (rotación/traslación) porque tienen distinta quiralidad ($\tau \neq \bar{\tau}$).
>>6. (Nota: Si se admiten reflexiones, sí serían congruentes. El enunciado suele referirse a congruencia directa o simplemente pide que no sean "la misma curva" salvo movimiento rígido, y hélices de distinta mano no se pueden superponer físicamente).

---

>[!Example] Ejercicio 12
>Sean $\alpha, \beta : (a, b) \to \mathbb{R}^3$ dos curvas suaves con las mismas funciones de curvatura (positivas) y torsión. Probar que $\alpha$ y $\beta$ son *congruentes*.
>>[!Proof]-
>>1. Sean $\alpha, \beta$ con $\kappa_\alpha = \kappa_\beta$ y $\tau_\alpha = \tau_\beta$.
>>2. Fijar $t_0$. Sean $\{T_\alpha, N_\alpha, B_\alpha\}$ y $\{T_\beta, N_\beta, B_\beta\}$ los marcos en $t_0$.
>>3. Definimos $$C(T_{\alpha }(t_{0})):=T_{\beta}(t_{0})\quad C(N_{\alpha }(t_{0}))=N_{\beta}(t_{0})\quad C(B_{\alpha }(t_{0}))=B_{\beta}(t_{0})$$ Como son bases entonces queda bien definida $C$      
>>4. Ahora definimos $\Phi(x):=C(x-\alpha (t_{0}))+\beta(t_{0})$ y $\tilde{\alpha }=\Phi\circ\alpha$ 
>>5. Notar que $\Phi(x)=C(x)-C(\alpha (t_{0}))+\beta(t_{0})$ entonces $d\Phi_{x}=C$ (Por que $C$ es lineal. Sale usando que $C$ cumple la definicion de diferneciabilidad) 
>>6. Claramente $\tilde{\alpha }(t_{0})=\beta(t_{0})$. Ademas $$\tilde{\alpha }'(t_{0})=(\Phi\circ\alpha)' (t_{0})= d\Phi_{{\alpha(t_{0}) }}(\alpha '(t_{0}))=C\alpha '(t_{0})$$
>>7. Ademas usando que $C$ es ortogonal tenemos $$\lVert \tilde{\alpha }'(t_{0}) \rVert=\lVert C\alpha '(t_{0}) \rVert=\langle C\alpha '(t_{0}),C\alpha '(t_{0})\rangle=\langle \alpha '(t_{0}),\alpha '(t_{0})\rangle=\lVert \alpha '(t_{0}) \rVert$$  
>>8. Por lo tanto $$T_{\tilde{\alpha }}(t_{0})=\frac{\tilde{\alpha }'(t_{0})}{\lVert \tilde{\alpha }'(t_{0}) \rVert}=C\left( \frac{\alpha '(t_{0})}{\lVert \alpha (t_{0}) \rVert} \right)=C(T_{\alpha })=T_{\beta }(t_{0})$$
>>9. Luego misma idea $$\tilde{\alpha }''(t_{0})=C\alpha ''(t_{0})$$ por lo tanto $N_{\tilde{\alpha }}(t_{0})=N_{\beta}(t_{0})$ 
>>10. Y entonces finalmente $B_{\tilde{\alpha }(t_{0})}=B_{\beta}(t_{0})$ 
>>11. Luego por la unicidad de [[Definiciones#^d9aef1]] tenemos que $\tilde{\alpha }=\beta$. Probando que $\alpha$ y $\beta$ son congruentes, osea una es una transformacion rigida de la otra