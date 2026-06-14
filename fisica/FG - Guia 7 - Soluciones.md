# Física General I — Guía 7: soluciones

## Problema 1

Sean

$$
\vec A=A\hat{\imath},\qquad
\vec B=B\hat{\jmath},\qquad
\vec C=C\hat{k},
$$

con $A,B,C>0$. Usando la regla de la mano derecha:

$$
\begin{aligned}
\vec A\times\vec B &= AB\hat{k} &&(+z),\\
\vec B\times\vec A &= -AB\hat{k} &&(-z),\\
\vec C\times\vec B &= -BC\hat{\imath} &&(-x),\\
-(\vec C\times\vec B) &= BC\hat{\imath} &&(+x),\\
\vec A\times(\vec B\times\vec C) &= \vec 0,\\
\vec C\times(\vec B\times\vec C) &= BC^2\hat{\jmath} &&(+y),\\
(\vec B\times\vec C)\times\vec B &= B^2C\hat{k} &&(+z).
\end{aligned}
$$

En la quinta expresión, $\vec B\times\vec C$ apunta según $+x$ y es paralelo a $\vec A$, por lo que el producto vectorial es nulo.

---

## Problema 2

En unidades cgs:

$$
\vec r=(4,-5,3)\ \mathrm{cm},\qquad
\vec p=(1,2,3)\ \mathrm{g\,cm/s}.
$$

### a) Momento angular respecto del origen

$$
\vec L_O=\vec r\times\vec p
=
\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
4&-5&3\\
1&2&3
\end{vmatrix}.
$$

Por lo tanto,

$$
\boxed{\vec L_O=(-21,-9,13)\ \mathrm{g\,cm^2/s}}.
$$

### b) Distancia del origen a la recta de movimiento

Como $|\vec L_O|=|\vec r\times\vec p|=d|\vec p|$,

$$
d=\frac{|\vec L_O|}{|\vec p|}
=\frac{\sqrt{(-21)^2+(-9)^2+13^2}}{\sqrt{1^2+2^2+3^2}}.
$$

Así,

$$
\boxed{d=\sqrt{\frac{691}{14}}\ \mathrm{cm}\approx 7.03\ \mathrm{cm}}.
$$

### c) Puntos respecto de los cuales el momento angular es nulo

Respecto de un punto de posición $\vec r_0$,

$$
\vec L_{\vec r_0}=(\vec r-\vec r_0)\times\vec p.
$$

Este momento es nulo cuando $\vec r-\vec r_0$ es paralelo a $\vec p$. Por ello, todos los puntos de la recta de movimiento cumplen la condición:

$$
\boxed{\vec r_0=(4,-5,3)+\lambda(1,2,3),\qquad \lambda\in\mathbb R.}
$$

---

## Problema 3

Se toma $x$ hacia la derecha, $y$ hacia arriba y se supone que la partícula recorre el cuadrado en el sentido

$$
D\longrightarrow A\longrightarrow B\longrightarrow C\longrightarrow D.
$$

El punto $O$ está a $0.20\ \mathrm m$ del lado inferior y sobre la mediatriz. Las distancias perpendiculares desde $O$ a los lados inferior, derecho, superior e izquierdo son, respectivamente,

$$
0.20,\quad 0.50,\quad 0.80,\quad 0.50\ \mathrm m.
$$

En el lado inferior,

$$
L_O=mv_{\rm inf}d_{\rm inf}
=(1)(10)(0.20)=2\ \mathrm{kg\,m^2/s}.
$$

Como $L_O=mvd$ debe conservarse:

$$
v_{\rm inferior}=10,\qquad
v_{\rm derecho}=4,\qquad
v_{\rm superior}=2.5,\qquad
v_{\rm izquierdo}=4\quad \mathrm{m/s}.
$$

Las velocidades antes y después de cada vértice son:

$$
\begin{array}{c|c|c}
\text{Vértice}&\vec v_{\rm antes}&\vec v_{\rm después}\\ \hline
A&(10,0)&(0,4)\\
B&(0,4)&(-2.5,0)\\
C&(-2.5,0)&(0,-4)\\
D&(0,-4)&(10,0)
\end{array}
$$

El impulso es $\vec J=m(\vec v_{\rm después}-\vec v_{\rm antes})$. Como $m=1\ \mathrm{kg}$:

$$
\boxed{
\begin{aligned}
\vec J_A&=(-10,4)\ \mathrm{N\,s},\\
\vec J_B&=(-2.5,-4)\ \mathrm{N\,s},\\
\vec J_C&=(2.5,-4)\ \mathrm{N\,s},\\
\vec J_D&=(10,4)\ \mathrm{N\,s}.
\end{aligned}}
$$

Sus módulos son

$$
|\vec J_A|=|\vec J_D|=\sqrt{116}\approx10.77\ \mathrm{N\,s},
$$

$$
|\vec J_B|=|\vec J_C|=\sqrt{22.25}\approx4.72\ \mathrm{N\,s}.
$$

Si la partícula recorre el cuadrado en el sentido contrario, todos los vectores impulso anteriores cambian de signo.

---

## Problema 4

Datos:

$$
m=3\ \mathrm g=0.003\ \mathrm{kg},\qquad
R=1\ \mathrm m,\qquad
v=10\ \mathrm{m/s},\qquad
b=0.10\ \mathrm m.
$$

Al tensarse el hilo, su impulso pasa por la espiga. Por lo tanto, el momento angular respecto de la espiga se conserva durante el impulso.

### a) Velocidad angular

Antes de tensarse el hilo:

$$
L_i=mvb.
$$

Después:

$$
L_f=mR^2\omega.
$$

Igualando:

$$
mvb=mR^2\omega
\quad\Longrightarrow\quad
\omega=\frac{vb}{R^2}.
$$

Entonces,

$$
\boxed{\omega=1\ \mathrm{rad/s}}.
$$

La rapidez tangencial posterior es $v_t=\omega R=1\ \mathrm{m/s}$.

### b) Impulso

Justo antes de tensarse el hilo, la componente tangencial de la velocidad es

$$
v_t=\frac{vb}{R}=1\ \mathrm{m/s}.
$$

La componente radial saliente vale

$$
v_r=\sqrt{v^2-v_t^2}=\sqrt{100-1}=\sqrt{99}\ \mathrm{m/s}.
$$

El impulso de la cuerda elimina esta componente y está dirigido radialmente hacia la espiga:

$$
J=mv_r=(0.003)\sqrt{99}.
$$

Por lo tanto,

$$
\boxed{J\approx2.98\times10^{-2}\ \mathrm{N\,s},
\quad\text{hacia la espiga}.}
$$

---

## Problema 5

La tensión es una fuerza central respecto del agujero, de modo que no ejerce torque respecto de él. Se conserva el momento angular:

$$
mr_0^2\omega_0=mr^2\omega.
$$

Por consiguiente,

$$
\boxed{\omega(r)=\omega_0\left(\frac{r_0}{r}\right)^2}.
$$

Al disminuir $r$, aumenta la velocidad angular. La energía mecánica de la partícula no se conserva porque la persona que tira de la cuerda realiza trabajo.

---

## Problema 6

Cada patinador tiene masa $m=50\ \mathrm{kg}$ y las trayectorias están separadas una distancia $d=3\ \mathrm m$.

### a) Movimiento después de tomar la varilla

El momento lineal total inicial es nulo porque las masas y las velocidades tienen igual módulo y sentidos opuestos:

$$
\vec P_{\rm total}=m\vec v+m(-\vec v)=0.
$$

Por ello, el centro de masa permanece fijo. Como no hay torque externo vertical, también se conserva el momento angular. Los patinadores realizan un movimiento circular uniforme alrededor del punto medio de la varilla, cada uno con radio

$$
R=\frac d2=1.5\ \mathrm m.
$$

### b) Velocidad de los patinadores

En el instante en que toman la varilla, sus velocidades ya son perpendiculares a ella y compatibles con la rotación. El momento angular es

$$
L=2(Rmv)=2(1.5)(50)(10)=1500\ \mathrm{kg\,m^2/s}.
$$

El momento de inercia es

$$
I=2mR^2=2(50)(1.5)^2=225\ \mathrm{kg\,m^2}.
$$

Entonces,

$$
\omega=\frac LI=\frac{1500}{225}=\frac{20}{3}\ \mathrm{rad/s}.
$$

La rapidez de cada uno es

$$
\boxed{v=\omega R=10\ \mathrm{m/s}}.
$$

### c) Separación reducida a $1\ \mathrm m$

Ahora cada patinador está a $R'=0.5\ \mathrm m$ del centro de masa:

$$
I'=2mR'^2=2(50)(0.5)^2=25\ \mathrm{kg\,m^2}.
$$

Conservando el momento angular,

$$
\omega'=\frac{L}{I'}=\frac{1500}{25}=60\ \mathrm{rad/s}.
$$

La rapidez de cada patinador es

$$
\boxed{v'=\omega'R'=30\ \mathrm{m/s}}.
$$

Siguen describiendo circunferencias alrededor del centro de masa fijo. El aumento de energía cinética proviene del trabajo realizado al acortar la distancia.

---

## Problema 7

Tomemos el eje $x$ hacia la derecha y el eje $y$ hacia arriba. Antes de la captura, las dos masas $m$ se mueven con velocidad $v\hat{\imath}$ y la masa $2m$ está en reposo.

Las posiciones verticales, medidas desde la masa $m$ central, son

$$
y_1=l,\qquad y_2=0,\qquad y_3=-\frac{3l}{2}.
$$

La masa total después de la captura es $4m$.

### a) Velocidad del centro de masa

Por conservación del momento lineal:

$$
(4m)\vec V_{\rm CM}=2mv\hat{\imath}.
$$

Por lo tanto,

$$
\boxed{\vec V_{\rm CM}=\frac v2\hat{\imath}}.
$$

### b) Momento angular respecto del centro de masa

La coordenada vertical del nuevo centro de masa es

$$
y_{\rm CM}
=\frac{m(l)+m(0)+2m(-3l/2)}{4m}
=-\frac l2.
$$

Las posiciones respecto del CM son entonces

$$
y'_1=\frac{3l}{2},\qquad
y'_2=\frac l2,\qquad
y'_3=-l.
$$

Antes de la captura, solo las dos masas $m$ tienen cantidad de movimiento. Por ello,

$$
\vec L_{\rm CM}
=\sum_i\vec r'_i\times\vec p_i
=-\left(\frac{3l}{2}+\frac l2\right)mv\,\hat{k}.
$$

Así,

$$
\boxed{\vec L_{\rm CM}=-2mvl\,\hat{k}},
$$

es decir, apunta hacia dentro de la hoja y corresponde a una rotación horaria.

### c) Velocidad angular

El momento de inercia respecto del CM es

$$
\begin{aligned}
I_{\rm CM}
&=m\left(\frac{3l}{2}\right)^2
+m\left(\frac l2\right)^2
+2m(l)^2\\
&=\frac92ml^2.
\end{aligned}
$$

Como $\vec L_{\rm CM}=I_{\rm CM}\vec\omega$,

$$
\boxed{\vec\omega=-\frac{4v}{9l}\hat{k}}.
$$

Las tres masas forman un cuerpo rígido y, por lo tanto, tienen la misma velocidad angular, de módulo

$$
\boxed{\omega=\frac{4v}{9l}},
$$

en sentido horario.

---

## Problema 8

Para una órbita circular, la fuerza atractiva proporciona la fuerza centrípeta:

$$
\frac{mv^2}{r}=\frac{\alpha}{r^2}.
$$

Luego,

$$
mv^2r=\alpha.
$$

El momento angular tiene módulo

$$
L=mvr.
$$

Elevando al cuadrado:

$$
L^2=m^2v^2r^2
=m(mv^2r)r
=m\alpha r.
$$

### a) Radio de la órbita

$$
\boxed{r=\frac{L^2}{m\alpha}}.
$$

### b) Comprobación dimensional

Como $F=\alpha/r^2$,

$$
[\alpha]=[F][r]^2
=MLT^{-2}L^2
=ML^3T^{-2}.
$$

Además,

$$
[L]=ML^2T^{-1}.
$$

Por lo tanto,

$$
\left[\frac{L^2}{m\alpha}\right]
=\frac{M^2L^4T^{-2}}{M(ML^3T^{-2})}
=L.
$$

El resultado tiene dimensión de longitud, como corresponde.
