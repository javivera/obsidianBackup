
>[!Example] Ejercicio 1
>Decir en cada caso en qué región el mapa $\varphi : \mathbb{R}^2 \longrightarrow \mathbb{R}^3$ es una parametrización.
>(a) $\varphi(u, v) = (u, uv, v)$.
>(b) $\varphi(u, v) = (u^2, u^3, v)$.
>(c) $\varphi(u, v) = (\cos 2\pi u, \text{sen } 2\pi u, v)$.
>Aca medio que asumo que pide parametrizacion de una superficie $\varphi(\mathbb{R}^{2})$
>>[!Proof]-
>>- (a) $\varphi(u, v) = (u, uv, v)$
>>	1. Calculamos la matriz Jacobiana: $$ d\varphi = \begin{pmatrix} 1 & 0 \\ v & u \\ 0 & 1 \end{pmatrix} $$
>>	2. El rango de esta matriz es siempre 2 osea $dim(Im)=2$ . (Esto es por que el producto interno de las columnas no es nunca 0)  
>>	3. Luego $d\varphi$ es inyectiva para todo $\vec{x}\in \mathbb{R}^{2}$ . $$2= dim(\mathbb{R}^{2})=dimIm+dim(Dm)=dim(Dm)+2$$  
>>	4. Inyectividad: Si $\varphi(u, v) = \varphi(u', v')$, entonces $u=u'$ y $v=v'$ (por la primera y tercera componente). Es inyectiva en todo $\mathbb{R}^2$.
>>	5. Ademas es facil dar una inversa explicita. $\Phi(x,y,z)=(x,z)$ (Notar que es inversa si restringimos la imagen a $\varphi(\mathbb{R}^{2})=S=\{ (x,y,z)\in \mathbb{R}^{3}:y=xz \}$)
>>	6. Esto muestra que $\varphi(\mathbb{R}^{2})$ es superficie regular. y el paso 2. Muestra que $\varphi$ es parametrizacion 
>>- (b) $\varphi(u, v) = (u^2, u^3, v)$ 
>>	1. Calculamos Jacobiana: $$ d\varphi = \begin{pmatrix} 2u & 0 \\ 3u^2 & 0 \\ 0 & 1 \end{pmatrix} $$
>>	2. Queremos que el rango sea 2 para la inyectividad esto sucede si y solo si $u\neq0$. Osea es $d\varphi$ es inyectiva en el conjunto $\{(u, v) \in \mathbb{R}^2 : u \neq 0\}$.
>>	3. Inyectividad de $\varphi$: $u^3 = (u')^3 \implies u=u'$, y $v=v'$. Es inyectiva globalmente.
>>	4. Damos una inversa $\Phi(x,y,z)=\left( \frac{y}{x},z\right)$ una direccion es facil. Para la otra notar que $$\varphi(U)=\{ (x,y,z)\in \mathbb{R}^{3}:\exists u\neq0 \text{ tal que }x=u^{2},y=u^{3} \}$$ Entonces $\varphi(\Phi(x,y,z))=\varphi\left( \frac{y}{x},z \right)=\varphi(u,z)=(u^{2},u^{3},z)=(x,y,z)$.
>>	5. Entonces la región donde es una parametrización es **$\{(u, v) \in \mathbb{R}^2 : u \neq 0\}$**.
>>- **(c)** $\varphi(u, v) = (\cos 2\pi u, \text{sen } 2\pi u, v)$
>>	1. Jacobiana: $$ d\varphi = \begin{pmatrix} -2\pi \text{sen } 2\pi u & 0 \\ 2\pi \cos 2\pi u & 0 \\ 0 & 1 \end{pmatrix} $$
>>	2. Claramente es de rango 2 $\forall u\in \mathbb{R}^{2}$ osea inyectiva en todos lados
>>	3. Inyectividad: No es inyectiva en $\mathbb{R}^2$ debido a la periodicidad de las funciones trigonométricas. $\varphi(u+k, v) = \varphi(u, v)$ para $k \in \mathbb{Z}$. Para que sea inyectiva tenemos que restringir a cualquier conjunto abierto de la forma **$(u_0, u_0 + 1) \times \mathbb{R}$**. Comúnmente se toma $(0, 1) \times \mathbb{R}$.
>>	4. Sea $\Phi(x,y,z)=\left( \frac{arccos(x)}{2\pi},z \right)$ entonces $$\Phi\circ\varphi(u,v)=\Phi(cos2\pi u,sen2\pi u,v)=(u,v)$$
>>	5. Con esto ya tenemos que es superficie y entonces por 2. $\varphi$ es parametrizacion

---

>[!Example] Ejercicio 2
>Encontrar una parametrización del paraboloide $\{(x, y, z) \in \mathbb{R}^3 : z = 1 + x^2 + y^2\}$.
>>[!Proof]-
>>1. Sabemos que es superficie regular por ser grafico de la funcion $f(x,y)=1+x^{2}+y^{2}$
>>2. Tomamos la parametrización: $$ \varphi(u, v) = (u, v, 1 + u^2 + v^2), \quad (u, v) \in \mathbb{R}^2 $$
>>3. Claramente es inyectiva
>>4. La matriz diferencial es $$\begin{pmatrix} 1 &0\\0 &1\\2u&2v\end{pmatrix}$$ que es claramente de rango 2 para todo $(u,v)$ , por lo tanto inyectiva.
>>5. Por lo tanto cumple (1) de [[Definiciones#^2d9e1d]]
>>6. Entonces por [[Definiciones#^595bfc]] automaticamente cumple (2) mostrando que es superficie regular y entonces es una parametrizacion 
  
---

>[!Example] Ejercicio 3
>Mostrar que el conjunto $S = \{(x, y, z) : z = x^2 - y^2\}$ es una superficie regular y que los dos mapas que siguen son parametrizaciones de $S$.
>(a) $\varphi(u, v) = (u + v, u - v, 4uv)$, con $(u, v) \in \mathbb{R}^2$.
>(b) $\psi(u, v) = (u \cosh v, u \text{senh } v, u^2)$, con $(u, v) \in \mathbb{R}^2$ y $u > 0$.
>Además describir las intersecciones de la superficie con planos perpendiculares a los ejes coordenados.
>>[!Proof]-
>>- $S$ es superficie regular: $S$ es el gráfico de la función diferenciable $f(x, y) = x^2 - y^2$. El gráfico de una función diferenciable $z = f(x, y)$ es siempre una superficie regular cubierto por la parametrización global $(u, v, f(u, v))$.
>>- **(a)** $\varphi(u, v) = (u + v, u - v, 4uv)$
>>	1. Verificamos que la imagen está en $S$: Sea $x = u+v$, $y = u-v$, $z = 4uv$. Entonces $x^2 - y^2 = (u+v)^2 - (u-v)^2 = (u^2 + 2uv + v^2) - (u^2 - 2uv + v^2) = 4uv = z$Osea se cumple la ecuación.
>>	2. Regularidad: $$ d\varphi = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 4v & 4u \end{pmatrix} $$producto cruz de las columnas tangentes: $$\partial_u \times \partial_v = (1, 1, 4v) \times (1, -1, 4u) = (4u - (-4v), 4v - 4u, -1 - 1) = (4(u+v), 4(v-u), -2)$$
>>	3. La tercera componente es $-2 \neq 0$, por lo que los vectores son siempre linealmente independientes. Es regular en todo $\mathbb{R}^2$. Por lo tanto es parametrizacion
>>- **(b)** $\psi(u, v) = (u \cosh v, u \text{senh } v, u^2)$, con $u > 0$.
>>	1. Verificamos la imagen: $x = u \cosh v, y = u \text{senh } v, z = u^2$. Entonces $x^2 - y^2 = u^2 \cosh^2 v - u^2 \text{senh }^2 v = u^2 (\cosh^2 v - \text{senh }^2 v) = u^2 (1) = u^2 = z$ por lo tanto se cumple la ecuación.
>>	2. Veamos el jacobiano $$ d\varphi = \begin{pmatrix} cosh v & usinh v \\ sinhv & ucoshv \\ 2u & 0 \end{pmatrix} $$
>>	3. Y ahora se puede suponer $a\varphi_{u}+b\varphi_{v}=0$ y usando $u>0$ se llega a que $a=b=0$ osea el rango de la matriz es 2. Osea el diferencial es inyectivo entonces $\varphi$ es parametrizacion
>>- **Intersecciones con planos:**
>>	- Planos perpendiculares al eje z ($z = c$):
>>		1. $x^2 - y^2 = c$. Son hipérbolas. Si $c > 0$, el eje real es $x$.
>>		2. Si $c < 0$, el eje real es $y$. Si $c = 0$, son las rectas $y = \pm x$.
>>	- Planos perpendiculares al eje x ($x = c$):
>>		1. $z = c^2 - y^2$. Son parábolas que abren hacia abajo en el plano $yz$ (trasladadas).
>>	- Planos perpendiculares al eje y ($y = c$):
>>		1. $z = x^2 - c^2$. Son parábolas que abren hacia arriba en el plano $xz$ (trasladadas).

---

>[!Example] Ejercicio 4
>Mostrar que el cilindro $S=\{(x, y, z) \in \mathbb{R}^3 : x^2 + y^2 = 1\}$ es una superficie regular y encontrar parametrizaciones cuyos entornos coordenados lo cubran.
>>[!Proof]-
>>1. Sea $f(x, y, z) = x^2 + y^2$. El cilindro es $f^{-1}(1)$.
>>2. El gradiente es $\nabla f = (2x, 2y, 0)$. En el cilindro, $x^2+y^2=1$, por lo que no pueden ser $x$ e $y$ ambos nulos simultáneamente. Así, $\nabla f \neq 0$ en todos los puntos del conjunto. 
>>3. Por [[Definiciones#^14271e]] $S$ es regular 
>>- **Parametrizaciones:**
>>	1. Podemos usar coordenadas cilíndricas. Necesitamos más de una carta para cubrirlo todo (debido a la periodicidad del ángulo).
>>	2. $\varphi_1(u, v) = (\cos u, \text{sen } u, v)$, con $U_1 = (0, 2\pi) \times \mathbb{R}$. Cubre todo el cilindro excepto la recta $x=1, y=0$.
>>	3. $\varphi_2(u, v) = (\cos u, \text{sen } u, v)$, con $U_2 = (-\pi, \pi) \times \mathbb{R}$. Cubre todo excepto la recta $x=-1, y=0$.
>>	4. La unión de las imágenes de $\varphi_1$ y $\varphi_2$ cubre todo el cilindro.
>>	5. Es facil ver que $\varphi_{1,2}$ son parametrizaciones. Inyectividad es trivial. La diferencial tiene columnas li tambien es trivial. Y la inversa es $$\Phi(x,y,z)=(arccos(x),z)$$ que esta claramente bien definida por que si tomamos algo en $S$ su coordenada $x$ va a estar entre $-1$ y $1$ si no no cumpliria $x^{2}+y^{2}=1$     
 
---

>[!Example] Ejercicio 5
>Mostrar que las coordenadas esféricas constituyen un sistema coordenado de la esfera unitaria $S^2$ y encontrar sistemas coordenados similares para cubrirla toda. Entender cómo se escriben en coordenadas los paralelos, los meridianos y los círculos máximos.
>>[!Proof]-
>>- Parametrización usual (coordenadas esfericas): $$\mathbf{x}(\theta, \phi) = (\text{sen } \theta \cos \phi, \text{sen } \theta \text{sen } \phi, \cos \theta)$$ (Nota: la convención de ángulos varía. Asumiremos $\theta$ como el ángulo polar (colatitud) desde el eje z, y $\phi$ como el azimutal en el plano xy).
>>Dominio: $0 < \theta < \pi$, $0 < \phi < 2\pi$.
>>- Esta carta cubre la esfera excepto el semicírculo meridiano $\phi = 0$ (incluyendo los polos).
>>- Es trivial ver que $\mathbf{x}$ es inyectiva
>>- La diferencial es inyectiva pues $|\mathbf{x}_\theta \times \mathbf{x}_\phi| = \text{sen } \theta \neq 0$ en $(0, \pi)$.
>>- Damos una inversa: Si tomamos $U=(0,\pi)\times(0,2\pi)$ entonces $$\mathbf{x}(U)=S^{2}\setminus \{ (x,y,z)\in S^{2}:y=0,x\geq 0 \}$$. Entonces $$\Phi(x,y,z)=(arccos(z),\phi(x,y))$$ es inversa. Donde $$\phi(x,y)=\begin{cases}\arctan\!\left(\frac{y}{x}\right) & \text{si }x>0,\ y>0;\\ \arctan\!\left(\frac{y}{x}\right)+2\pi\ & \text{si }x>0,\ y<0;\\ \arctan\!\left(\frac{y}{x}\right)+\pi\ &\text{si }x<0\\\ \frac{\pi}{2}&x=0,y>0 \\ \frac{3\pi}{2}&x=0,y<0 \end{cases}$$    
>>
>>- Para cubrir la esfera completa, podemos rotar los ejes y definir coordenadas esféricas respecto a otros ejes, o simplemente tomar dominios desplazados para $\phi$ y $\theta$. Por ejemplo, una segunda carta con $-\pi < \phi < \pi$ cubre la línea de discontinuidad de la primera (excepto otra línea). Para cubrir los polos, necesitamos parametrizaciones donde los polos no sean singularidades del sistema de coordenadas (por ejemplo, proyecciones estereográficas o gráficos de Monge $z = \pm \sqrt{1-x^2-y^2}$). Otra opcion es ir moviendo los dominios tanto de $\phi$ como de $\theta$. Con cuatro movimientos cubris todo    
>>
>>**Curvas coordenadas:**
>>- **Paralelos:** $\theta = \text{constante}$. Son círculos horizontales (intersección con planos $z=c$).
>>- **Meridianos:** $\phi = \text{constante}$. Son semicírculos verticales que van de polo a polo.
>>- **Círculos máximos:** Intersecciones con planos que pasan por el origen. En coordenadas esféricas, sus ecuaciones son más complejas a menos que sean meridianos o el ecuador ($\theta = \pi/2$).

---

>[!Example] Ejercicio 6
>Decidir (sin demostración rigurosa) cuáles de los siguientes conjuntos son superficies regulares.
>(a) $\{(x, y, z) \in \mathbb{R}^3 : z = 0 \text{ y } x^2 + y^2 \le 1\}$,
>(b) $\{(x, y, z) \in \mathbb{R}^3 : z = 0 \text{ y } x^2 + y^2 < 1\}$,
>(c) $\{(x, y, z) \in \mathbb{R}^3 : x^2 + y^2 - z^2 = 0\}$.
>(d) La superficie cilíndrica cuya base es la curva plana $C$ con forma de ocho del Ejercicio 6 del Práctico 1, es decir: $\{(x, y, z) \in \mathbb{R}^3 : (x, y) \in C\}$.
>>[!Proof]-
>>- **(a) No.** 
>>	1. Es un disco cerrado. Tomamos un punto $p$  del borde $x^2+y^2=1$ y por (2) de [[Definiciones#^2d9e1d]] tenemos un homeomorfismo $\varphi:U\rightarrow \mathcal{V}\cap S$ (local usando $\Phi|_{\mathcal{V}\cap S}$ como inversa de $\varphi$). 
>>	2. Pero $\mathcal{V}\cap S$ es un abierto de $\mathbb{R}^{3}$ (que contiene a $p$) intersecado con el disco cerrado. Esto nos da una especie de gota que tiene un borde incluido y si lo pensamos ademas $\mathcal{V}\cap S$ vive en $\mathbb{R}^{2}$ y claramente no es un abierto.
>>	3. Lo que es absurdo, por que $U$ es abierto y $\varphi$ es una funcion abierta (por ser homeo) y $\varphi(U)=\mathcal{V}\cap S$         
>>- **(b) Sí.** Por que la superficie es el grafico de $f(x,y)=x^{2}+y^{2}$ con dominio $A=\{ x^{2}+y^{2}<1 \}$ que es abierto de $\mathbb{R}^{2}$ 
>>- **(c) No.** Supongo sale usando una idea similar a **(d)**
>>- **(d) No.** [[Definiciones#^3d284b]]  

---

>[!Example] Ejercicio 7
>Sea $\varphi : \mathbb{R}^2 \longrightarrow \mathbb{R}^3$, $\varphi(u, v) = (u, u^2, v + v^3)$. Escribir la imagen de $\varphi$ como el gráfico de una función del plano $yz$ en el eje $x$. Describirla también de manera implícita. Decir en qué región el mapa $\varphi$ es una parametrización.
>>[!Proof]-
>>Sea $x = u$, $y = u^2$, $z = v + v^3$.
>>Observamos que $y = x^2$. Esta relación es independiente de $v$.
>>La función $h(v) = v + v^3$ es estrictamente creciente (derivada $1+3v^2 > 0$) y sobreyectiva en $\mathbb{R}$. Por lo tanto, para cualquier $z \in \mathbb{R}$, existe un único $v$.
>>La imagen es la superficie cilíndrica parabólica $y = x^2$.
>>**Forma implícita:** $y - x^2 = 0$.
>>**Gráfico:**
>>El enunciado pide escribirla como gráfico de una función del plano $yz$ en el eje $x$, es decir $x = f(y, z)$.
>>De $y = x^2$, tenemos $x = \pm \sqrt{y}$. Esto **no** es una función univaluada sobre todo el dominio $y \ge 0$.
>>Sin embargo, la superficie completa está formada por la unión de dos gráficos: $x = \sqrt{y}$ y $x = -\sqrt{y}$ (pegados en $x=0$).
>>Tal vez el enunciado se refiera a una función sobre el plano $xz$ ($y=x^2$) o haya un error de tipeo y se refiera al eje $y$ sobre el plano $xz$.
>>Si nos ceñimos estrictamente a lo pedido, no es posible describir *toda* la imagen como el gráfico de una sola función $x = g(y, z)$.
>>**Región de parametrización:**
>>Jacobiana:
>>$$ d\varphi = \begin{pmatrix} 1 & 0 \\ 2u & 0 \\ 0 & 1+3v^2 \end{pmatrix} $$
>>Determinante de menor (filas 1, 3): $1(1+3v^2) \neq 0$. Rango 2 siempre.
>>Inyectividad: $u$ está determinado por $x$. $v$ está determinado por $z$ (ya que $v+v^3$ es inyectiva).
>>Por tanto, $\varphi$ es una parametrización regular global en todo **$\mathbb{R}^2$**.

---

>[!Example] Ejercicio 8
>Una manera de definir un sistema de coordenadas en la esfera $x^2 + y^2 + (z - 1)^2 = 1$ es mediante la proyección estereográfica, que lleva el punto $(x, y, z) \neq (0, 0, 2)$ de la esfera al punto del plano $xy$ donde corta la recta que pasa por $(x, y, z)$ y el punto $(0, 0, 2)$. Llamamos $\pi$ a esta proyección.
>- (a) Mostrar que $\varphi = \pi^{-1}$ está dado por la fórmula $$ \varphi(u, v) = \frac{2}{u^2 + v^2 + 4}(2u, 2v, u^2 + v^2). $$
>- (b) Mostrar que con esta carta y otra similar se puede cubrir la esfera con dos entornos coordenados.
>- (c) Entender como se escriben en coordenadas los paralelos, los meridianos y los círculos máximos.
>- (d) Desarrollar todo lo anterior de manera análoga para la esfera unitaria centrada en el 0.
>>[!Proof]-
>>- **(a)** 
>>	1. La esfera tiene centro $(0, 0, 1)$ y radio 1. El polo norte es $N = (0, 0, 2)$.
>>	2. La recta que une $N$ con un punto $P(x, y, z)$ de la esfera corta al plano $z=0$ en $Q=(u, v, 0)$.
>>	3. La ecuación de la recta es $$L(t) = N + t(Q - N) = (0, 0, 2) + t(u, v, -2) = (tu, tv, 2 - 2t)$$
>>	4. Buscamos el punto de intersección con la esfera (para $t \neq 0$).
>>	5. Sustituimos en la ecuación de la esfera $x^2 + y^2 + (z-1)^2 = 1$ $$\begin{align}(tu)^2 + (tv)^2 + (2 - 2t - 1)^2 = 1 \\ t^2(u^2 + v^2) + (1 - 2t)^2 = 1\\ t^2(u^2 + v^2) + 1 - 4t + 4t^2 = 1\\ t^2(u^2 + v^2 + 4) - 4t = 0\end{align}$$
>>	6. Como buscamos $P \neq N$ entonces $t\neq0$ luego dividimos por $t$:$$t(u^2 + v^2 + 4) = 4 \implies t = \frac{4}{u^2 + v^2 + 4}$$
>>	7. Ahora sustituimos $t$ en las coordenadas de la recta para obtener $P(x, y, z) = \varphi(u, v)$ $$\begin{align}x & = tu = \frac{4u}{u^2 + v^2 + 4}\\ y& = tv = \frac{4v}{u^2 + v^2 + 4} \\ z & = 2 - 2t = 2 - \frac{8}{u^2 + v^2 + 4} = \frac{2(u^2 + v^2 + 4) - 8}{u^2 + v^2 + 4} = \frac{2(u^2 + v^2)}{u^2 + v^2 + 4}\end{align}$$
>>	8. Factorizando el 2 en el numerador de $x$ y $y$ para que coincida con la fórmula dada: $$\begin{align}x &= \frac{2}{u^2 + v^2 + 4} (2u)\\ y &= \frac{2}{u^2 + v^2 + 4} (2v)\\ z &= \frac{2}{u^2 + v^2 + 4} (u^2 + v^2)\end{align}$$
>>	9. Por lo tanto: $$ \varphi(u, v) = \frac{2}{u^2 + v^2 + 4}(2u, 2v, u^2 + v^2) $$
>>- **(b)** 
>>	1. La carta $\varphi$ cubre $S^2 \setminus \{N\}$. Para cubrir $N$, podemos usar una proyección estereográfica desde el polo sur $S=(0,0,0)$
>>	2. La recta desde $S$ a $P$ corta el plano tangente en el polo norte ($z=2$) o el plano ecuatorial ($z=1$).
>>	3. Si proyectamos desde $S$ al plano $z=2$, obtenemos una carta $\psi(u, v)$ que cubre $S^2 \setminus \{S\}$.
>>	4. Como $N \in \text{Im}(\psi)$ y $S \in \text{Im}(\varphi)$, la unión de las dos cartas cubre toda la esfera.
>>- **(c)**
>>	- **Paralelos:** Son las curvas de nivel $z = c$. En la fórmula de $\varphi$, $z$ depende solo de $u^2+v^2$. Si $z=c$, entonces $u^2+v^2 = \text{constante}$. Por tanto, los paralelos se corresponden con **círculos concéntricos** en el plano $uv$ centrados en el origen.
>>	- **Meridianos:** Son las intersecciones con planos verticales que pasan por el eje $z$ ($y = kx$).$$\frac{y}{x} = \frac{2v}{2u} = \frac{v}{u} = k$$ Esto corresponde a **rectas que pasan por el origen** en el plano $uv$.
>>	- **Círculos máximos:** Son intersecciones de la esfera con planos que pasan por su centro $(0,0,1)$. La ecuación de un plano por $(0,0,1)$ es $Ax + By + C(z-1) = 0$. Sustituyendo las expresiones de $x, y, z$ en función de $u, v$, se obtiene la ecuación de círculos o rectas en el plano $uv$ que satisfacen cierta condición de simetría respecto a la inversión. Específicamente, se mapean a círculos que cortan a la circunferencia que representa el ecuador en puntos diametralmente opuestos.
>>- **(d)** 
>>	1. Esfera unitaria centrada en el origen: $x^2 + y^2 + z^2 = 1$.
>>	2. Polos: $N=(0,0,1), S=(0,0,-1)$.
>>	3. Proyección estereográfica desde $N$ al plano $xy$ ($z=0$).
>>	4. Recta por $N$ y $P(x,y,z)$: $L(t) = (0,0,1) + t(x, y, z-1)$.
>>	5. Intersección con $z=0$: $1 + t(z-1) = 0 \implies t = \frac{1}{1-z}$.
>>	6. Punto en el plano $Q(u, v, 0)$: $u = \frac{x}{1-z}, v = \frac{y}{1-z}$.
>>	- Inversa $\varphi(u, v)$: 
>>		1. Sabemos que $x^2+y^2+z^2=1$. $$u^2+v^2 = \frac{x^2+y^2}{(1-z)^2} = \frac{1-z^2}{(1-z)^2} = \frac{(1-z)(1+z)}{(1-z)^2} = \frac{1+z}{1-z}$$
>>		2. Despejando $z$: $z = \frac{u^2+v^2-1}{u^2+v^2+1}$.
>>		3. Luego $x = u(1-z) = u(1 - \frac{u^2+v^2-1}{u^2+v^2+1}) = u(\frac{2}{u^2+v^2+1}) = \frac{2u}{u^2+v^2+1}$.
>>		4. Análogamente $y = \frac{2v}{u^2+v^2+1}$.
>>		5. Fórmula:
>>$$ \varphi(u, v) = \left( \frac{2u}{u^2+v^2+1}, \frac{2v}{u^2+v^2+1}, \frac{u^2+v^2-1}{u^2+v^2+1} \right) $$

---

>[!Example] Ejercicio 9
>Para cada una de las siguientes funciones hallar el dominio, encontrar sus puntos críticos y decidir para qué valores de $c$ el conjunto $f^{-1}(c)$ es una superficie regular
>a) $f(x, y, z) = (x + y + z)^{-1}$
>b) $f(x, y, z) = xyz^2$.
>>[!Proof]-
>>- **a)** $f(x, y, z) = \frac{1}{x+y+z}$
>>	1. **Dominio:** $D = \{(x, y, z) \in \mathbb{R}^3 : x + y + z \neq 0\}$. Que es abierto
>>	2. **Gradiente:**  $$\nabla f = \left( -\frac{1}{(x+y+z)^2}, -\frac{1}{(x+y+z)^2}, -\frac{1}{(x+y+z)^2} \right)$$este vector nunca es nulo en el dominio.
>>	3. Entonces podemos tomar cualquier $y$ en la imagen de $f$ y $S=f^{-1}(\{ y \})$ 
>>	4. Obviamente $\nabla F(q)\neq0\quad\forall q\in S$ por 2. Entonces por [[Definiciones#^14271e]] $S$ es superficie regular
>>	5. Como esto lo podemos hacer para cualquier $y$ en la imagen y la imagen es $\mathbb{R}^{3}\setminus \{ 0 \}$. Para todos esos valores la preimagen es superficie regular 
>>	6. **Extra** Para todo $c \neq 0$, $f^{-1}(c)$ es el plano $x+y+z = 1/c$
>>- **b)** $f(x, y, z) = xyz^2$
>>	1. **Dominio:** $\mathbb{R}^3$.
>>	2. **Gradiente:** $\nabla f = (yz^2, xz^2, 2xyz)$. $$\nabla f = 0 \iff \begin{cases} yz^2 = 0 \\ xz^2 = 0 \\ 2xyz = 0 \end{cases}$$
>>	3. Caso 1: $z = 0$. Entonces todas las ecuaciones se cumplen. Todo el plano $xy$ ($z=0$) son puntos críticos. El valor crítico asociado es $f(x, y, 0) = 0$.
>>	4. Caso 2: $z \neq 0$. Entonces $y=0$ y $x=0$. El eje $z$ (menos el origen) son puntos críticos. El valor crítico asociado es $f(0, 0, z) = 0$.
>>	5. Entonces el conjunto de puntos críticos es $$A=\{z=0\} \cup \{x=0, y=0\}$$
>>	6. El unico elemento que tiene preimagen de $f$ en $A$ es el $0$
>>	7. Por lo tanto si tomo $c \neq 0$, el conjunto $f^{-1}(c)$ es una superficie regular (son hiperboloides generalizados).
>>	8. **Extra** $c = 0$, $f^{-1}(0)$ es la unión de los planos coordenados $x=0, y=0, z=0$. No es una superficie regular (tiene auto-intersecciones a lo largo de los ejes).

---

>[!Example] Ejercicio 10
>¿Existe una función diferenciable $f : \mathbb{R}^3 \longrightarrow \mathbb{R}$ para la cual 0 no es un valor regular de $f$, pero sin embargo $f^{-1}(0)$ es una superficie regular?.
>>[!Proof]-
>>1. Si. Consideremos $f(x, y, z) = (x^2 + y^2 + z^2 - 1)^2$.
>>2. El conjunto de nivel $f^{-1}(0)$ es la esfera unitaria $x^2 + y^2 + z^2 = 1$, que sabemos es una superficie regular.
>>3. Sin embargo, calculemos el gradiente: $$\nabla f = 2(x^2 + y^2 + z^2 - 1) \cdot (2x, 2y, 2z)$$
>>4. Para cualquier punto $p \in f^{-1}(0)$, el término $(x^2 + y^2 + z^2 - 1)$ es cero.
>>5. Por lo tanto, $\nabla f(p) = 0$ para todo $p \in f^{-1}(0)$.
>>6. Esto significa que todos los puntos de la preimagen son puntos críticos, por lo que 0 **no** es un valor regular.
>>7. A pesar de ello, la preimagen es una superficie regular.

---

>[!Example] Ejercicio 11
>Sean $R > r > 0$. El toro $T = T(R, r)$ es el subconjunto de $\mathbb{R}^3$ que interseca a cada plano que contiene al eje $z$ en dos circunferencias de radio $r$ con centros en el plano $z=0$, a distancia $R$ del origen.
>- Verificar que $T$ consiste exactamente de los puntos que satisfacen la ecuación
>  $\left(\sqrt{x^2+y^2} - R\right)^2 + z^2 = r^2$
>  y mostrar que es una superficie regular.
>- Mostrar que $\phi : \mathbb{R}^2 \to \mathbb{R}^3$ definida por $\phi(u, v) = ((R + r \cos v)(\cos u, \text{sen } u), r \text{sen } v)$ es una parametrización de $T$.
>- Restringiendo $\phi$ a abiertos de $\mathbb{R}^2$, hallar cuatro sistemas coordenados de $T$ que lo cubran.
>- Sea $p \in T$, $p = \phi(s, t) = \phi(\widehat{s}, \widehat{t})$. Mostrar que $\widehat{s} = s + 2k\pi$ y $\widehat{t} = t + 2h\pi$, con $k, h \in \mathbb{Z}$.
>>[!Proof]-
>>- **Ecuación:**
>>	1. Sea $P=(x, y, z)$. Su distancia al eje $z$ es $\rho = \sqrt{x^2+y^2}$. Esto sale de minimizar la distancia al conjunto eje z.
>>	2. Consideremos el plano vertical que pasa por $P$ y el eje $z$. En este plano, los centros de las circunferencias generatrices están a distancia $R$ del eje $z$ (en el plano $xy$). Sus coordenadas "radiales" son $\rho = R, z = 0$.
>>	3. La condición de pertenecer al toro es que la distancia de $P$ al centro correspondiente sea $r$.
>>	4. La distancia en el plano meridiano entre $(\rho, z)$ y $(R, 0)$ es $\sqrt{(\rho - R)^2 + (z-0)^2}$.
>>	5. Igualando a $r$: $(\rho - R)^2 + z^2 = r^2$. Sustituyendo $\rho$: $(\sqrt{x^2+y^2} - R)^2 + z^2 = r^2$.
>>- **Regularidad:**
>>	1. Sea $F(x, y, z) = (\sqrt{x^2+y^2} - R)^2 + z^2$. $\nabla F = (2(\sqrt{x^2+y^2}-R)\frac{x}{\sqrt{x^2+y^2}}, 2(\sqrt{x^2+y^2}-R)\frac{y}{\sqrt{x^2+y^2}}, 2z)$.
>>	2. Si $\nabla F = 0$, entonces $z=0$ y $\sqrt{x^2+y^2}=R$ (pues $R>r>0 \implies \sqrt{x^2+y^2} \neq 0$).
>>	3. Pero si $\sqrt{x^2+y^2}=R$ y $z=0$, entonces $F(x,y,z) = 0 \neq r^2$.
>>	4. Por tanto, en el conjunto de nivel $r^2$, el gradiente nunca se anula. $r^2$ es valor regular
>>	5. Mostrando que $T$ es superficie regular.
>>- **Parametrización:**
>>	1. $\phi(u, v) = ((R + r \cos v)\cos u, (R + r \cos v)\text{sen } u, r \text{sen } v)$.
>>	2. Sustituimos en la ecuación: $$x^2+y^2 = (R+r\cos v)^2(\cos^2 u + \text{sen}^2 u) = (R+r\cos v)^2$$
>>	3. $\sqrt{x^2+y^2} = R+r\cos v$ (ya que $R>r$, el término es positivo).
>>	4. $(\sqrt{x^2+y^2}-R)^2 + z^2 = (r\cos v)^2 + (r\text{sen } v)^2 = r^2$. 
>>	5. Con lo cual $\phi(u,v)$ cumple la ecuacion de $T$ 
>>- **Sistemas coordenados:**
>>	1. Necesitamos cubrir las líneas donde $u$ o $v$ "saltan" (cortes de periodicidad).
>>	2. Podemos tomar 4 cartas definidas por $\phi$ restringida a diferentes dominios abiertos:
>>	3. $U_1 = (0, 2\pi) \times (0, 2\pi)$
>>	4. $U_2 = (-\pi, \pi) \times (0, 2\pi)$
>>	5. $U_3 = (0, 2\pi) \times (-\pi, \pi)$
>>	6. $U_4 = (-\pi, \pi) \times (-\pi, \pi)$
>>	7. La unión de sus imágenes cubre todo el toro.
>>- **Inyectividad:**
>>	1. $\phi(s, t) = \phi(\widehat{s}, \widehat{t})$.
>>	2. Igualando componentes $z$: $r \text{sen } t = r \text{sen } \widehat{t} \implies \text{sen } t = \text{sen } \widehat{t}$.
>>	3. Igualando radios $\rho$: $R + r \cos t = R + r \cos \widehat{t} \implies \cos t = \cos \widehat{t}$.
>>	4. De ambas, $\widehat{t} = t + 2h\pi$.
>>	5. Igualando $x, y$ con el factor común cancelado (que es no nulo): $\cos s = \cos \widehat{s}$ y $\text{sen } s = \text{sen } \widehat{s}$.
>>	6. De ambas, $\widehat{s} = s + 2k\pi$.

---

>[!Example] Ejercicio 12
>Sea $\alpha : (0, \frac{\pi}{2}) \to \mathbb{R}^2$ definida por $\alpha(s) = \text{sen}(3s)(\cos s, \text{sen } s)$. Mostrar que no existe una función continua $\Phi : V \to \mathbb{R}$, con $V$ un abierto de $\mathbb{R}^2$ que contiene a la imagen de $\alpha$, tal que $\Phi(\alpha(t)) = t$ para todo $t \in (0, \frac{\pi}{2})$.
>>[!Proof]-
>>1. La curva $\alpha(s)$ pasa por el origen cuando $\text{sen}(3s) = 0$. En el intervalo $(0, \pi/2)$, esto ocurre únicamente para $3s = \pi \implies s = \pi/3$
>>2. Así, $\alpha(\pi/3) = (0, 0)$.
>>3. Por otro lado, consideremos el límite cuando $s \to 0^+$. $$\lim_{s \to 0} \alpha(s) = \lim_{s \to 0} \text{sen}(3s)(\cos s, \text{sen } s) = 0 \cdot (1, 0) = (0, 0)$$
>>4. Si existiera tal función continua $\Phi$ definida en un entorno $V$ de la imagen (que incluye el origen), tendríamos:
>>	- $\Phi(\alpha(\pi/3)) = \pi/3$. Como $\alpha(\pi/3) = (0,0)$, entonces $\Phi(0,0) = \pi/3$.
>>	- Tomemos una sucesión $s_n \in (0, \pi/2)$ tal que $s_n \to 0$. Entonces $p_n = \alpha(s_n) \to (0,0)$.
>>1. Por continuidad de $\Phi$, $\lim_{n \to \infty} \Phi(p_n) = \Phi(0,0) = \pi/3$.
>>2. Pero por definición de $\Phi$, $\Phi(p_n) = \Phi(\alpha(s_n)) = s_n$. El límite de $s_n$ es 0.
>>3. Llegamos a que $0 = \pi/3$, lo cual es absurdo.
>>4. Por tanto, no existe tal función continua $\Phi$.

---

>[!Example] Ejercicio 13
>Mostrar que la esfera es conexa.
>>[!Proof]-
>>Sabemos que la esfera $S^2$ puede ser cubierta por la unión de las imágenes de dos parametrizaciones continuas (por ejemplo, las proyecciones estereográficas desde el polo norte y el polo sur, o las coordenadas esféricas rotadas).
>>Sea $S^2 = U \cup V$, donde $U$ y $V$ son las imágenes de estas parametrizaciones.
>>Al ser imágenes continuas de dominios conexos (rectángulos o planos $\mathbb{R}^2$), $U$ y $V$ son conjuntos conexos.
>>La intersección $U \cap V$ no es vacía (de hecho, es $S^2$ menos dos puntos).
>>La unión de dos conjuntos conexos con intersección no vacía es conexa.
>>Por tanto, $S^2$ es conexa.
