# Física General I — Guía 6: Soluciones

Tomé $g=9{,}81\ \text{m/s}^2$ cuando hizo falta evaluar numéricamente.

---
## Problema 1

**Enunciado.** En los extremos de una barra de $2\ \text{m}$ de longitud y masa $5\ \text{kg}$ se colocan dos objetos de $10\ \text{kg}$ y $4\ \text{kg}$ respectivamente.

a) Determine la distancia que hay entre la masa mayor y el centro de masa del sistema.

b) ¿Esta distancia depende de la masa de la barra?

Tomo el origen en el extremo donde está la masa mayor, de $10\ \text{kg}$, y el eje $x$ a lo largo de la barra. Entonces:

$$x_{10}=0,\qquad x_{\text{barra}}=1\ \text{m},\qquad x_4=2\ \text{m}$$

La masa total es

$$M_T=10+5+4=19\ \text{kg}$$

Por lo tanto,

$$x_{CM}=\frac{10\cdot 0+5\cdot 1+4\cdot 2}{19}=\frac{13}{19}\ \text{m}$$

$$\boxed{x_{CM}\approx 0{,}684\ \text{m}}$$

Esa es la distancia entre la masa mayor y el centro de masa.

### b) Dependencia con la masa de la barra

Si la masa de la barra fuera $M_b$, para una barra uniforme de longitud $L=2\ \text{m}$:

$$x_{CM}=\frac{M_b(L/2)+4L}{10+4+M_b}$$

En general, esta expresión depende de $M_b$.

$$\boxed{\text{Sí, la distancia depende de la masa de la barra.}}$$

---
## Problema 2

**Enunciado.** En un sistema compuesto por 4 masas puntuales, con $m_1=1\ \text{kg}$, $m_2=1\ \text{kg}$, $m_3=4\ \text{kg}$ y $m_4=4\ \text{kg}$, sus posiciones para un determinado instante son:

$$\vec r_1=(1,3,3)\ \text{m},\quad \vec r_2=(-1,0,3)\ \text{m},\quad \vec r_3=(-1,0,-1)\ \text{m},\quad \vec r_4=(1,3,-1)\ \text{m}$$

a) ¿Qué figura geométrica determinan estos puntos?

b) Gráficamente determine primero la posición de los centros de masa de los pares de masas iguales y luego la posición del centro de masa del sistema.

c) Calcule analíticamente la posición del centro de masa del sistema y compare con el resultado obtenido en el punto b).

d) Si para el mismo instante las velocidades de las partículas son

$$\vec v_1=(2,-1,0)\ \text{m/s},\quad \vec v_2=(0,3,-1)\ \text{m/s},\quad \vec v_3=(-4,0,5)\ \text{m/s},\quad \vec v_4=(1,2,-2)\ \text{m/s}$$

determine la velocidad del centro de masa.

Las masas son:

$$m_1=m_2=1\ \text{kg},\qquad m_3=m_4=4\ \text{kg}$$

y sus posiciones son

$$\vec r_1=(1,3,3),\quad \vec r_2=(-1,0,3),\quad \vec r_3=(-1,0,-1),\quad \vec r_4=(1,3,-1)$$

### a) Figura geométrica

Los vectores

$$\vec r_1-\vec r_2=(2,3,0),\qquad \vec r_4-\vec r_3=(2,3,0)$$

y

$$\vec r_3-\vec r_2=(0,0,-4),\qquad \vec r_4-\vec r_1=(0,0,-4)$$

son pares de lados paralelos. Además,

$$ (2,3,0)\cdot(0,0,-4)=0$$

Por lo tanto, los puntos determinan un rectángulo en el espacio.

$$\boxed{\text{Los cuatro puntos son los vértices de un rectángulo.}}$$

### b) Centros de masa de los pares iguales

Para las masas de $1\ \text{kg}$:

$$\vec r_{CM,12}=\frac{\vec r_1+\vec r_2}{2}=(0,\tfrac32,3)$$

Para las masas de $4\ \text{kg}$:

$$\vec r_{CM,34}=\frac{\vec r_3+\vec r_4}{2}=(0,\tfrac32,-1)$$

Luego el centro de masa total queda sobre el segmento que une esos dos puntos, más cerca del par de masas de $4\ \text{kg}$.

### c) Centro de masa del sistema

La masa total es

$$M_T=1+1+4+4=10\ \text{kg}$$

Entonces:

$$\vec r_{CM}=\frac{1\vec r_1+1\vec r_2+4\vec r_3+4\vec r_4}{10}$$

Componente a componente:

$$x_{CM}=\frac{1-1-4+4}{10}=0$$

$$y_{CM}=\frac{3+0+0+12}{10}=\frac32$$

$$z_{CM}=\frac{3+3-4-4}{10}=-\frac15$$

Por lo tanto:

$$\boxed{\vec r_{CM}=(0,\tfrac32,-\tfrac15)\ \text{m}}$$

Coincide con el resultado gráfico: está sobre la recta que une los centros de masa parciales y más cerca del par de masas mayores.

### d) Velocidad del centro de masa

$$\vec v_{CM}=\frac{\sum_i m_i\vec v_i}{\sum_i m_i}$$

Con

$$\vec v_1=(2,-1,0),\quad \vec v_2=(0,3,-1),\quad \vec v_3=(-4,0,5),\quad \vec v_4=(1,2,-2)$$

se obtiene:

$$\vec v_{CM}=\frac{(2,-1,0)+(0,3,-1)+4(-4,0,5)+4(1,2,-2)}{10}$$

$$\vec v_{CM}=\frac{(-10,10,11)}{10}$$

$$\boxed{\vec v_{CM}=(-1,1,\tfrac{11}{10})\ \text{m/s}}$$

---
## Problema 3

**Enunciado.** Calcule las posiciones del centro de masa de los sistemas que se muestran en la figura. En el caso b), las masas se ubican sobre dos círculos de radio $R$ localizados en planos paralelos, cuyos centros se encuentran a una distancia $h$ sobre una misma recta. Para el caso c), indique el valor que debe tener el cociente $M/m$ para que la posición del centro de masa sea igual a $(9/10)h$ sobre el eje dibujado.

### a) Tres masas en los vértices de un triángulo equilátero

Tomo el origen en la masa $2m$, el eje $x$ sobre la base y el eje $y$ vertical. Las coordenadas son:

$$2m:(0,0),\qquad 3m:(l,0),\qquad m:(\tfrac l2,\tfrac{\sqrt3}{2}l)$$

La masa total es $6m$. Entonces:

$$x_{CM}=\frac{2m\cdot0+3m\cdot l+m(l/2)}{6m}=\frac{7l}{12}$$

$$y_{CM}=\frac{m(\sqrt3 l/2)}{6m}=\frac{\sqrt3\,l}{12}$$

$$\boxed{\vec r_{CM}=\left(\frac{7l}{12},\frac{\sqrt3\,l}{12}\right)}$$

### b) Masas sobre dos círculos paralelos

Tomo el origen en el centro del círculo inferior. El eje $z$ apunta hacia el centro del círculo superior, separado una distancia $h$.

En el círculo superior hay dos masas $M$ simétricas, de modo que su centro de masa parcial está en:

$$\vec r_{CM,M}=(0,0,h)$$

En el círculo inferior hay tres masas $m$. Según la figura, dos están en extremos opuestos de un diámetro y la tercera está a $60^\circ$ respecto de ese diámetro. Entonces:

$$\vec r_1=(-R,0,0),\qquad \vec r_2=(R,0,0),\qquad \vec r_3=(R\cos60^\circ,R\sin60^\circ,0)$$

Así:

$$\vec r_{CM,m}=\left(\frac{R}{6},\frac{\sqrt3 R}{6},0\right)$$

Para todo el sistema, cuya masa total es $2M+3m$:

$$\boxed{
\vec r_{CM}=
\left(
\frac{mR}{2(2M+3m)},
\frac{\sqrt3\,mR}{2(2M+3m)},
\frac{2Mh}{2M+3m}
\right)
}$$

### c) Pirámide con cuatro masas $m$ en la base y una masa $M$ en el vértice

Tomo el eje vertical dibujado, con origen en el plano de la base. Las cuatro masas $m$ de la base tienen $z=0$ y la masa $M$ superior tiene $z=h$.

Entonces:

$$z_{CM}=\frac{Mh}{M+4m}$$

Se pide:

$$z_{CM}=\frac{9}{10}h$$

Por lo tanto:

$$\frac{M}{M+4m}=\frac9{10}$$

$$10M=9M+36m$$

$$\boxed{\frac{M}{m}=36}$$

---
## Problema 4

**Enunciado.** Un cuerpo de masa $m$ se mueve en el espacio intergaláctico con velocidad constante $\vec v$. Una explosión lo divide en dos partes de igual masa, de modo que ambas siguen moviéndose en la misma dirección que la masa original. Si la velocidad de una de las partes es $v/3$ en el mismo sentido que la original, ¿cuál será el módulo y sentido de la velocidad de la otra mitad?

No hay fuerzas externas durante la explosión, así que se conserva el momento lineal.

Inicialmente:

$$p_i=mv$$

Luego de la explosión:

$$p_f=\frac m2\frac v3+\frac m2 u$$

donde $u$ es la velocidad de la otra mitad, medida sobre la misma recta.

Entonces:

$$mv=\frac{mv}{6}+\frac m2 u$$

$$v=\frac v6+\frac u2$$

$$u=\frac53 v$$

$$\boxed{u=\frac53 v}$$

La otra mitad se mueve en el mismo sentido que la masa original.

---
## Problema 5

**Enunciado.** Una persona de masa $M$, que puede considerarse puntual, está parada sobre el extremo de un tablón de masa $M/3$ y longitud $L$. Ambos están inicialmente en reposo respecto de tierra y el tablón puede deslizar sin rozamiento sobre el piso. En $t=0$, la persona comienza a caminar sobre el tablón desde un extremo hacia el otro, de manera que su velocidad media respecto del piso durante toda la caminata vale $V$.

a) Calcule la posición del centro de masa del sistema para $t=0$.

b) Calcule la velocidad del centro de masa del sistema, para todo $t$.

c) Calcule la distancia que la persona ha recorrido cuando llega al otro extremo del tablón.

d) Calcule el tiempo que tarda en recorrer el tablón.

e) Evalúe las expresiones obtenidas suponiendo $M=90\ \text{kg}$, $L=10\ \text{m}$ y $V=1\ \text{m/s}$.

Tomo el eje $x$ horizontal, con origen en el extremo izquierdo inicial del tablón. Inicialmente, la persona está en $x=0$ y el centro del tablón en $x=L/2$.

La masa total del sistema es

$$M_T=M+\frac M3=\frac{4M}{3}$$

### a) Posición inicial del centro de masa

$$x_{CM}(0)=\frac{M\cdot 0+(M/3)(L/2)}{4M/3}$$

$$\boxed{x_{CM}(0)=\frac L8}$$

### b) Velocidad del centro de masa

No hay fuerza externa horizontal sobre el sistema persona-tablón. Como inicialmente todo está en reposo:

$$\boxed{v_{CM}=0\quad \text{para todo }t}$$

### c) Distancia recorrida por la persona respecto del piso

Cuando la persona llega al otro extremo, sea $X$ la posición del extremo izquierdo del tablón. Entonces:

$$x_{\text{persona}}=X+L,\qquad x_{\text{tablón}}=X+\frac L2$$

Como el centro de masa permanece en $L/8$:

$$\frac{M(X+L)+(M/3)(X+L/2)}{4M/3}=\frac L8$$

De aquí:

$$X=-\frac{3L}{4}$$

Por lo tanto, la posición final de la persona es

$$x_{\text{persona}}=X+L=\frac L4$$

La distancia que recorrió respecto del piso es:

$$\boxed{\Delta x_{\text{persona}}=\frac L4}$$

### d) Tiempo de caminata

Como la velocidad media de la persona respecto del piso vale $V$:

$$V=\frac{\Delta x_{\text{persona}}}{\Delta t}$$

Entonces:

$$\boxed{\Delta t=\frac{L}{4V}}$$

### e) Evaluación numérica

Con $M=90\ \text{kg}$, $L=10\ \text{m}$ y $V=1\ \text{m/s}$:

$$\boxed{x_{CM}(0)=1{,}25\ \text{m}}$$

$$\boxed{v_{CM}=0}$$

$$\boxed{\Delta x_{\text{persona}}=2{,}5\ \text{m}}$$

$$\boxed{\Delta t=2{,}5\ \text{s}}$$

---
## Problema 6

**Enunciado.** Una granada que tiene velocidad horizontal $v$ con respecto a tierra estalla en tres fragmentos de masas iguales, a una altura $h$ respecto del suelo. Inmediatamente después de la explosión, el fragmento 1 posee una velocidad horizontal en el mismo sentido que la velocidad original y de módulo $v/3$; el fragmento 2 tiene una velocidad hacia arriba formando un ángulo de $45^\circ$ con la velocidad original; y el fragmento 3 tiene una velocidad hacia abajo formando un ángulo de $30^\circ$ con la velocidad original. Calcule el módulo de la velocidad de cada fragmento.

Tomo $x$ horizontal en el sentido de la velocidad original y $y$ vertical hacia arriba.

Como los tres fragmentos tienen masas iguales, la conservación del momento lineal da:

$$\vec v_1+\vec v_2+\vec v_3=(3v,0)$$

El fragmento 1 tiene:

$$\vec v_1=(v/3,0)$$

Sean $v_2$ y $v_3$ los módulos de las velocidades de los fragmentos 2 y 3. Entonces:

$$\vec v_2=(v_2\cos45^\circ,v_2\sin45^\circ)$$

$$\vec v_3=(v_3\cos30^\circ,-v_3\sin30^\circ)$$

De la componente vertical:

$$v_2\sin45^\circ=v_3\sin30^\circ$$

$$v_3=\sqrt2\,v_2$$

De la componente horizontal:

$$\frac v3+v_2\cos45^\circ+v_3\cos30^\circ=3v$$

Sustituyendo $v_3=\sqrt2\,v_2$:

$$\frac v3+\frac{v_2}{\sqrt2}+\frac{\sqrt6}{2}v_2=3v$$

Por lo tanto:

$$v_2=\frac{16v}{3(\sqrt2+\sqrt6)}=\frac43(\sqrt6-\sqrt2)v$$

y

$$v_3=\sqrt2\,v_2=\frac83(\sqrt3-1)v$$

Así:

$$\boxed{v_1=\frac v3}$$

$$\boxed{v_2=\frac43(\sqrt6-\sqrt2)v\approx 1{,}38v}$$

$$\boxed{v_3=\frac83(\sqrt3-1)v\approx 1{,}95v}$$

---
## Problema 7

**Enunciado.** En los extremos de una barra de peso despreciable y longitud $L=4\ \text{m}$ se fijan dos masas puntuales $m_1=3\ \text{kg}$ y $m_2=1\ \text{kg}$. La barra se coloca verticalmente en reposo sobre una mesa horizontal sin rozamiento en el punto $A$. Se aplica un impulso despreciable que saca a la barra de su posición de equilibrio inestable. ¿A qué distancia del punto $A$ chocará la masa $m_1$ con la mesa?

No hay fuerza externa horizontal, así que la coordenada horizontal del centro de masa permanece constante.

Inicialmente ambas masas están sobre la misma vertical que pasa por $A$, por lo que:

$$x_{CM}=0$$

Cuando $m_1$ choca con la mesa, la barra queda horizontal. Si $m_1$ cae hacia la derecha, sean:

$$x_1=x,\qquad x_2=x-L$$

Como $m_1=3\ \text{kg}$ y $m_2=1\ \text{kg}$:

$$x_{CM}=\frac{3x+(x-L)}{4}=x-\frac L4$$

Como $x_{CM}=0$:

$$x=\frac L4$$

Con $L=4\ \text{m}$:

$$\boxed{x=1\ \text{m}}$$

La masa $m_1$ choca con la mesa a $1\ \text{m}$ del punto $A$.

---
## Problema 8

**Enunciado.** Dos carritos $A$ y $B$, de masas $m_A$ y $m_B$ respectivamente, están conectados mediante un resorte de masa despreciable, longitud natural $l_0$ y constante elástica $k$. Ambos están en reposo hasta que, en un instante $t_i$, se aplica al carrito $A$ una fuerza constante $\vec F$, dirigida de $A$ hacia $B$.

a) Calcule la aceleración inicial del centro de masa del sistema.

b) Calcule la aceleración inicial de cada uno de los carritos.

c) Calcule las respectivas aceleraciones en el instante en que el resorte está comprimido una longitud $x$.

Tomo positivo hacia la derecha, de $A$ hacia $B$.

### a) Aceleración inicial del centro de masa

La única fuerza externa horizontal sobre el sistema es $\vec F$. Entonces:

$$\boxed{a_{CM}=\frac{F}{m_A+m_B}}$$

### b) Aceleración inicial de cada carrito

Inicialmente el resorte está en su longitud natural, de modo que no ejerce fuerza.

Para el carrito $A$:

$$\boxed{a_A(0)=\frac{F}{m_A}}$$

Para el carrito $B$:

$$\boxed{a_B(0)=0}$$

### c) Aceleraciones cuando el resorte está comprimido una longitud $x$

Si el resorte está comprimido, empuja al carrito $A$ hacia la izquierda y al carrito $B$ hacia la derecha, con fuerza de módulo $kx$.

Entonces:

$$\boxed{a_A=\frac{F-kx}{m_A}}$$

$$\boxed{a_B=\frac{kx}{m_B}}$$

La aceleración del centro de masa sigue siendo

$$a_{CM}=\frac{m_Aa_A+m_Ba_B}{m_A+m_B}=\frac{F}{m_A+m_B}$$

---
## Problema 9

**Enunciado.** Una caja de altura $2l$ y ancho $2L$ puede deslizar, sin rozamiento, sobre un plano horizontal. Del centro de su techo cuelga un péndulo de largo $l$. Las masas de la caja y el péndulo son $M$ y $m$, respectivamente. El péndulo oscila de modo que cuando forma un ángulo $\alpha_0$ todo el sistema está en reposo. En el instante considerado, el péndulo forma un ángulo arbitrario $\alpha$ con la vertical.

a) Encuentre cualitativamente las fuerzas exteriores al sistema.

b) Utilizando el sistema de referencia fijo a tierra indicado en la figura, calcule la posición del extremo inferior izquierdo de la caja cuando el péndulo forma un ángulo arbitrario con la vertical.

c) Dé las coordenadas $x$ e $y$ del centro de masa del sistema en función de dicho ángulo.

Tomo el eje $x$ horizontal hacia la derecha y el eje $y$ vertical hacia arriba. La caja tiene ancho $2L$ y altura $2l$, por lo que su centro está a una altura $l$ y el punto de suspensión del péndulo está en el centro del techo.

### a) Fuerzas exteriores

Sobre el sistema caja-péndulo actúan:

- el peso de la caja, $Mg$;
- el peso del péndulo, $mg$;
- la normal del piso sobre la caja.

No hay fuerza externa horizontal, porque el piso no tiene rozamiento.

### b) Posición del extremo inferior izquierdo de la caja

Sea $X$ la coordenada del extremo inferior izquierdo de la caja cuando el péndulo forma un ángulo $\alpha$ con la vertical. La coordenada horizontal del centro de la caja es $X+L$ y la de la masa del péndulo es:

$$x_m=X+L+l\sin\alpha$$

Como no hay fuerza externa horizontal y el sistema está en reposo cuando $\alpha=\alpha_0$, la coordenada horizontal del centro de masa permanece constante. Si en esa posición inicial el extremo inferior izquierdo de la caja está en $X=0$, entonces:

$$x_{CM}(\alpha_0)=L+\frac{m}{M+m}l\sin\alpha_0$$

y para un ángulo cualquiera:

$$x_{CM}(\alpha)=X+L+\frac{m}{M+m}l\sin\alpha$$

Igualando:

$$X+L+\frac{m}{M+m}l\sin\alpha=L+\frac{m}{M+m}l\sin\alpha_0$$

$$\boxed{X(\alpha)=\frac{ml}{M+m}\left(\sin\alpha_0-\sin\alpha\right)}$$

Si el origen se toma cuando el péndulo está vertical, basta poner $\alpha_0=0$.

### c) Coordenadas del centro de masa

La coordenada horizontal es constante:

$$\boxed{x_{CM}=L+\frac{ml}{M+m}\sin\alpha_0}$$

La coordenada vertical no es constante, porque sí hay fuerzas externas verticales. Para un ángulo $\alpha$:

$$y_{\text{caja}}=l,\qquad y_m=2l-l\cos\alpha$$

Entonces:

$$y_{CM}=\frac{Ml+m(2l-l\cos\alpha)}{M+m}$$

$$\boxed{y_{CM}(\alpha)=\frac{l\left[M+m(2-\cos\alpha)\right]}{M+m}}$$

---
## Problema 10

**Enunciado.** Una bala de masa $m_b=10\ \text{g}$ se dispara horizontalmente sobre dos bloques que están en reposo sobre una superficie sin rozamiento. La bala pasa a través del bloque 1, de masa $m_1=1{,}2\ \text{kg}$, y se incrusta en el bloque 2, de masa $m_2=1{,}8\ \text{kg}$. Los bloques terminan con velocidades $v_1=0{,}63\ \text{m/s}$ y $v_2=1{,}4\ \text{m/s}$. Despreciando el material removido en el bloque 1 por la bala, encontrar la velocidad de esta cuando:

a) deja el bloque 1;

b) entra al bloque 1.

Datos:

$$m_b=0{,}010\ \text{kg},\qquad m_1=1{,}2\ \text{kg},\qquad m_2=1{,}8\ \text{kg}$$

$$v_1=0{,}63\ \text{m/s},\qquad v_2=1{,}4\ \text{m/s}$$

### a) Velocidad de la bala al dejar el bloque 1

La bala sale del bloque 1 y luego se incrusta en el bloque 2. En el choque con el bloque 2:

$$m_b u=(m_b+m_2)v_2$$

donde $u$ es la velocidad de la bala al dejar el bloque 1.

Entonces:

$$u=\frac{m_b+m_2}{m_b}v_2$$

$$u=\frac{1{,}81}{0{,}010}\cdot 1{,}4=253{,}4\ \text{m/s}$$

$$\boxed{u=253{,}4\ \text{m/s}}$$

### b) Velocidad de la bala al entrar al bloque 1

Durante el paso por el bloque 1 se conserva el momento lineal horizontal:

$$m_b v_{\text{in}}=m_b u+m_1v_1$$

Por lo tanto:

$$v_{\text{in}}=u+\frac{m_1}{m_b}v_1$$

$$v_{\text{in}}=253{,}4+\frac{1{,}2}{0{,}010}\cdot0{,}63$$

$$v_{\text{in}}=329{,}0\ \text{m/s}$$

$$\boxed{v_{\text{in}}=329\ \text{m/s}}$$

---
## Problema 11

**Enunciado.** Un auto de $1{,}5$ toneladas viaja de oeste a este con rapidez de $90\ \text{km/h}$ y choca en un cruce de avenidas perpendiculares con una camioneta de $2{,}5$ toneladas que viaja de sur a norte con rapidez de $70\ \text{km/h}$. Encuentre la dirección y magnitud de la velocidad de los vehículos después de la colisión, suponiendo que experimentan una colisión perfectamente inelástica, es decir, quedan pegados.

Tomo $x$ hacia el este e $y$ hacia el norte.

Datos:

$$m_a=1{,}5\ \text{t},\qquad v_a=90\ \text{km/h}=25\ \text{m/s}$$

$$m_c=2{,}5\ \text{t},\qquad v_c=70\ \text{km/h}=19{,}44\ \text{m/s}$$

Como la colisión es perfectamente inelástica, después del choque ambos vehículos quedan pegados. Se conserva el momento lineal:

$$\vec V=\frac{m_a\vec v_a+m_c\vec v_c}{m_a+m_c}$$

Entonces:

$$V_x=\frac{1{,}5\cdot25}{4{,}0}=9{,}375\ \text{m/s}$$

$$V_y=\frac{2{,}5\cdot19{,}44}{4{,}0}=12{,}15\ \text{m/s}$$

El módulo es:

$$V=\sqrt{V_x^2+V_y^2}\approx 15{,}35\ \text{m/s}$$

$$V\approx 55{,}3\ \text{km/h}$$

La dirección, medida desde el este hacia el norte, cumple:

$$\theta=\arctan\left(\frac{V_y}{V_x}\right)\approx 52{,}3^\circ$$

$$\boxed{V\approx 15{,}35\ \text{m/s}\approx 55{,}3\ \text{km/h}}$$

$$\boxed{\theta\approx 52{,}3^\circ\ \text{al norte del este}}$$

---
## Problema 12

**Enunciado.** Sobre una superficie sin rozamiento se coloca una masa $m_1$ en contacto con un resorte de constante $k$. Se comprime el resorte una distancia $x_0$ y luego se libera la masa $m_1$. Luego de liberada, $m_1$ choca elásticamente con una masa $m_2$, con $m_2>m_1$, que se halla en reposo en una posición ubicada más allá de la longitud natural del resorte.

a) Calcule la deformación $x$ que sufrirá el resorte al comprimirse cuando $m_1$ regrese después de chocar con $m_2$.

b) ¿Cuál es el valor de $x$ si $m_2=2m_1$?

c) Suponga ahora que $m_1=m_2=m$. Calcule cuál deberá ser la mínima compresión del resorte $x_0$ para que, luego del choque, la masa $m_2$ llegue hasta el punto $R$, ubicado a una altura $h$.

### a) Compresión máxima cuando $m_1$ regresa

La energía inicial del resorte comprimido es:

$$E_i=\frac12 kx_0^2$$

Al soltarse, esa energía se transforma en energía cinética de $m_1$:

$$\frac12 kx_0^2=\frac12 m_1v_0^2$$

Luego $m_1$ choca elásticamente con $m_2$, inicialmente en reposo. Para un choque elástico unidimensional:

$$v_1'=\frac{m_1-m_2}{m_1+m_2}v_0$$

Como $m_2>m_1$, $v_1'<0$ y $m_1$ vuelve hacia el resorte.

La nueva compresión máxima $x$ cumple:

$$\frac12 m_1(v_1')^2=\frac12 kx^2$$

Usando $v_0^2=kx_0^2/m_1$:

$$x=\left|\frac{m_1-m_2}{m_1+m_2}\right|x_0$$

Como $m_2>m_1$:

$$\boxed{x=\frac{m_2-m_1}{m_1+m_2}x_0}$$

### b) Caso $m_2=2m_1$

$$x=\frac{2m_1-m_1}{2m_1+m_1}x_0$$

$$\boxed{x=\frac{x_0}{3}}$$

### c) Caso $m_1=m_2=m$

Si las masas son iguales, en un choque elástico unidimensional intercambian velocidades: $m_1$ queda en reposo y $m_2$ sale con velocidad $v_0$.

Para que $m_2$ llegue justo hasta el punto $R$, debe cumplirse:

$$\frac12 mv_0^2=mgh$$

Pero

$$\frac12 mv_0^2=\frac12 kx_0^2$$

Entonces:

$$\frac12 kx_0^2=mgh$$

$$\boxed{x_{0,\min}=\sqrt{\frac{2mgh}{k}}}$$

---
## Problema 13

**Enunciado.** Una partícula de $3\ \text{kg}$ se mueve sobre una mesa sin rozamiento hacia el oeste, con velocidad de $1\ \text{m/s}$. Otra partícula de $4\ \text{kg}$ se mueve hacia el norte con velocidad de $3\ \text{m/s}$. Ambas interactúan durante $2\ \text{s}$ y, al cabo de ese lapso, se observa que la primera se desplaza en una trayectoria rectilínea que forma un ángulo de $53^\circ 7'48''$, es decir $\arctan(4/3)$, medido de este a norte, con velocidad de $5\ \text{m/s}$.

a) Calcule la magnitud y dirección de la velocidad de la segunda partícula.

b) Determine la magnitud y dirección de la fuerza media que la partícula 1 ejerció sobre la 2 durante la interacción.

c) Determine qué tipo de choque ocurrió.

Tomo $x$ hacia el este e $y$ hacia el norte.

Inicialmente:

$$m_1=3\ \text{kg},\qquad \vec v_{1i}=(-1,0)\ \text{m/s}$$

$$m_2=4\ \text{kg},\qquad \vec v_{2i}=(0,3)\ \text{m/s}$$

El momento lineal inicial total es:

$$\vec p_i=3(-1,0)+4(0,3)=(-3,12)\ \text{kg m/s}$$

Después de la interacción, la partícula 1 tiene rapidez $5\ \text{m/s}$ en la dirección cuya tangente es $4/3$. Por lo tanto:

$$\vec v_{1f}=5\left(\frac35,\frac45\right)=(3,4)\ \text{m/s}$$

Entonces:

$$\vec p_{1f}=3(3,4)=(9,12)\ \text{kg m/s}$$

### a) Velocidad final de la segunda partícula

Por conservación del momento lineal:

$$\vec p_{2f}=\vec p_i-\vec p_{1f}=(-3,12)-(9,12)=(-12,0)$$

Entonces:

$$\vec v_{2f}=\frac{\vec p_{2f}}{m_2}=\frac{(-12,0)}{4}=(-3,0)\ \text{m/s}$$

$$\boxed{\vec v_{2f}=(-3,0)\ \text{m/s}}$$

La segunda partícula se mueve hacia el oeste con rapidez $3\ \text{m/s}$.

### b) Fuerza media que la partícula 1 ejerció sobre la 2

La interacción dura $\Delta t=2\ \text{s}$. Entonces:

$$\vec F_{\text{med},1\to2}=\frac{\Delta \vec p_2}{\Delta t}$$

$$\Delta \vec p_2=\vec p_{2f}-\vec p_{2i}=(-12,0)-(0,12)=(-12,-12)$$

Por lo tanto:

$$\vec F_{\text{med},1\to2}=\frac{(-12,-12)}{2}=(-6,-6)\ \text{N}$$

El módulo es:

$$F_{\text{med}}=6\sqrt2\ \text{N}\approx 8{,}49\ \text{N}$$

$$\boxed{\vec F_{\text{med},1\to2}=(-6,-6)\ \text{N}}$$

Su dirección es hacia el sudoeste, a $45^\circ$ al sur del oeste.

### c) Tipo de choque

Energía cinética inicial:

$$K_i=\frac12(3)(1^2)+\frac12(4)(3^2)=1{,}5+18=19{,}5\ \text{J}$$

Energía cinética final:

$$K_f=\frac12(3)(5^2)+\frac12(4)(3^2)=37{,}5+18=55{,}5\ \text{J}$$

Como la energía cinética aumenta:

$$\boxed{\text{El choque es superelástico o explosivo.}}$$

---
## Problema 14

**Enunciado.** Un péndulo está formado por una masa puntual $m_1$ suspendida de una cuerda inextensible de longitud $L$. Se libera desde el reposo cuando la cuerda está horizontal y tensa. En la parte inferior de su trayectoria, el péndulo choca elásticamente con un pequeño bloque de acero de masa $m_2$, inicialmente en reposo, que puede deslizar sobre una mesa horizontal sin rozamiento.

a) Determine la velocidad del péndulo en la posición inferior inmediatamente antes de chocar con la masa $m_2$.

b) Calcule las velocidades del péndulo y del bloque inmediatamente después del choque.

c) ¿Cuál debe ser la relación entre las masas $m_1$ y $m_2$ para que el péndulo quede en reposo después del choque?

d) Si en el instante del choque se corta la cuerda y se produce un choque totalmente plástico, ¿a qué velocidad se desplazarán las masas?

e) En este último caso, ¿cuál es la pérdida de energía del sistema?

f) Evalúe las expresiones obtenidas suponiendo $m_1=0{,}445\ \text{kg}$, $m_2=2{,}22\ \text{kg}$ y $L=68\ \text{cm}$.

### a) Velocidad antes del choque

El péndulo se libera desde la posición horizontal. Al llegar a la posición inferior, la masa $m_1$ descendió una altura $L$.

Por conservación de energía:

$$m_1gL=\frac12 m_1v_0^2$$

$$\boxed{v_0=\sqrt{2gL}}$$

### b) Velocidades después del choque elástico

El choque es unidimensional, con $m_2$ inicialmente en reposo. Por las fórmulas del choque elástico:

$$\boxed{v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_0}$$

$$\boxed{v_{2f}=\frac{2m_1}{m_1+m_2}v_0}$$

donde

$$v_0=\sqrt{2gL}$$

### c) Condición para que el péndulo quede en reposo

Para que el péndulo quede en reposo después del choque:

$$v_{1f}=0$$

Entonces:

$$\frac{m_1-m_2}{m_1+m_2}v_0=0$$

$$\boxed{m_1=m_2}$$

### d) Choque totalmente plástico con la cuerda cortada

Si en el instante del choque se corta la cuerda y las masas quedan unidas, se conserva el momento lineal horizontal:

$$m_1v_0=(m_1+m_2)V$$

Por lo tanto:

$$\boxed{V=\frac{m_1}{m_1+m_2}\sqrt{2gL}}$$

### e) Pérdida de energía en el choque plástico

La energía cinética inicial justo antes del choque es:

$$K_i=\frac12 m_1v_0^2$$

La energía cinética final es:

$$K_f=\frac12(m_1+m_2)V^2$$

Con

$$V=\frac{m_1}{m_1+m_2}v_0$$

queda:

$$K_f=\frac12\frac{m_1^2}{m_1+m_2}v_0^2$$

Entonces la pérdida de energía es:

$$\Delta E=K_i-K_f=\frac12\left(m_1-\frac{m_1^2}{m_1+m_2}\right)v_0^2$$

$$\Delta E=\frac12\frac{m_1m_2}{m_1+m_2}v_0^2$$

Como $v_0^2=2gL$:

$$\boxed{\Delta E=\frac{m_1m_2}{m_1+m_2}gL}$$

### f) Evaluación numérica

Datos:

$$m_1=0{,}445\ \text{kg},\qquad m_2=2{,}22\ \text{kg},\qquad L=0{,}68\ \text{m}$$

Velocidad antes del choque:

$$v_0=\sqrt{2gL}\approx 3{,}65\ \text{m/s}$$

Choque elástico:

$$v_{1f}=\frac{0{,}445-2{,}22}{0{,}445+2{,}22}(3{,}65)\approx -2{,}43\ \text{m/s}$$

$$v_{2f}=\frac{2(0{,}445)}{0{,}445+2{,}22}(3{,}65)\approx 1{,}22\ \text{m/s}$$

Choque plástico:

$$V=\frac{0{,}445}{0{,}445+2{,}22}(3{,}65)\approx 0{,}610\ \text{m/s}$$

Pérdida de energía:

$$\Delta E=\frac{0{,}445\cdot2{,}22}{0{,}445+2{,}22}(9{,}81)(0{,}68)\approx 2{,}47\ \text{J}$$

Por lo tanto:

$$\boxed{v_0\approx 3{,}65\ \text{m/s}}$$

$$\boxed{v_{1f}\approx -2{,}43\ \text{m/s}},\qquad \boxed{v_{2f}\approx 1{,}22\ \text{m/s}}$$

$$\boxed{V\approx 0{,}610\ \text{m/s}}$$

$$\boxed{\Delta E\approx 2{,}47\ \text{J}}$$
