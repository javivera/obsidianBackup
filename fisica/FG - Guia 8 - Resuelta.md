# Física General I - Guía 8 resuelta

Se toma $\hat k$ saliendo del plano del dibujo. Cuando importa el sentido de
giro, antihorario es positivo.

## Problema 1

### a) Tres esferas

El origen se elige en el centro de la esfera grande $m_1$. Los centros de
$m_2$ y $m_3$ están, respectivamente, en $y=R/2$ y $y=-R/2$. Por simetría,
$x_{CM}=0$, y

$$
y_{CM}=
\frac{m_2(R/2)-m_3(R/2)}{m_1+m_2+m_3}
=\frac{R}{2}\frac{m_2-m_3}{m_1+m_2+m_3}.
$$

### b) Figura plana formada por rectángulos

Se supone, como indica el dibujo, que las tres ramas tienen espesor $L/4$.
Tomando el origen en la esquina inferior izquierda, se divide la figura en
tres rectángulos sin superposición:

| Rectángulo | Área | Centroide $(x_i,y_i)$ |
|---|---:|---:|
| superior | $L^2/4$ | $(L/2,7L/8)$ |
| izquierdo inferior | $3L^2/16$ | $(L/8,3L/8)$ |
| derecho inferior | $L^2/16$ | $(7L/8,5L/8)$ |

El área total es $L^2/2$. Aplicando
$\vec r_{CM}=\sum A_i\vec r_i/\sum A_i$:

$$
\boxed{x_{CM}=\frac{13L}{32}},\qquad
\boxed{y_{CM}=\frac{21L}{32}}.
$$

### c) Disco con hueco

Se trata el hueco como una masa negativa. El disco completo tiene área
$\pi R^2$; el hueco tiene área $\pi R^2/4$ y su centro está a $R/2$ por
encima del centro del disco. Por simetría $x_{CM}=0$:

$$
y_{CM}=
\frac{0-\left(\pi R^2/4\right)(R/2)}
{\pi R^2-\pi R^2/4}
=-\frac R6.
$$

Por lo tanto, el CM está sobre el eje vertical, a una distancia
$\boxed{R/6}$ por debajo del centro del disco.

## Problema 2

Para una varilla rígida:

$$
\vec v_{CM}=\frac{\vec v_a+\vec v_b}{2}.
$$

Como $\vec r_b-\vec r_a=d\hat j$:

$$
\vec v_b-\vec v_a
=\vec\omega\times d\hat j
=-\omega d\,\hat i,\qquad d=2\ \text{m}.
$$

Resultados:

| Ítem | $\vec v_{CM}$ | $\vec\omega$ |
|---|---|---|
| a | $3\hat i\ \text{m/s}$ | $0$ |
| b | $\frac32\hat i\ \text{m/s}$ | $\frac32\hat k\ \text{rad/s}$ |
| c | $2\hat i\ \text{m/s}$ | $\hat k\ \text{rad/s}$ |
| d | $(3\hat i+3\hat j)\ \text{m/s}$ | $\hat k\ \text{rad/s}$ |

## Problema 3

### a) Aceleración del CM

La única fuerza horizontal externa es $\vec F$, luego

$$
\boxed{\vec a_{CM}=\frac{\vec F}{M}}.
$$

### b) Aceleración angular

El torque respecto del CM tiene módulo $FL/2$. Para una barra delgada:

$$
I_{CM}=\frac{1}{12}ML^2.
$$

Por tanto,

$$
\boxed{|\alpha|=\frac{FL/2}{ML^2/12}=\frac{6F}{ML}}.
$$

El sentido es el producido por la fuerza alrededor del CM.

### c) Punto con aceleración nula

Inicialmente $\omega=0$, de modo que para un punto situado a distancia
$s$ del CM sobre la barra:

$$
\vec a(s)=\vec a_{CM}+\vec\alpha\times(s\hat e_{\rm barra}).
$$

La condición $\vec a=0$ da $s=-L/6$, donde el signo negativo señala el lado
opuesto al extremo donde se aplica $\vec F$. Ese punto está a

$$
\boxed{\frac L3}
$$

del extremo no forzado.

## Problema 4

Se toma $x=0$ en el extremo izquierdo y $x=L$ en el derecho.

### a) $\delta=\delta_0$

$$
x_{CM}=\frac{\int_0^L x\delta_0\,dx}{\int_0^L\delta_0\,dx}
=\boxed{\frac L2}.
$$

### b) $\delta=\delta_0+Ax$

$$
x_{CM}=
\frac{\int_0^Lx(\delta_0+Ax)\,dx}
{\int_0^L(\delta_0+Ax)\,dx}
=
\boxed{
L\frac{\delta_0/2+AL/3}{\delta_0+AL/2}
}.
$$

## Problema 5

Se interpreta $d$ como la separación entre los centros de las esferas, tal
como sugiere la figura. Por simetría, el CM está en el punto medio.

### a) Eje por el CM perpendicular a la varilla

Para cada esfera se aplica Steiner, y para la varilla se usa
$I=md^2/12$:

$$
\begin{aligned}
I_\perp
&=2\left(\frac25Mr^2+M\frac{d^2}{4}\right)
+\frac1{12}md^2\\
&=\boxed{\frac45Mr^2+\left(\frac M2+\frac m{12}\right)d^2}.
\end{aligned}
$$

### b) Eje coincidente con la varilla

La contribución de la varilla es despreciable porque su radio es
despreciable:

$$
\boxed{I_\parallel=2\left(\frac25Mr^2\right)=\frac45Mr^2}.
$$

## Problema 6

Se toma $A=(0,0)$, $B=(4,0)$ y $C=(0,-3)$, con distancias en cm y masas en g.
La masa total es $60$ g.

### a) Centro de masa

$$
x_{CM}=\frac{30(0)+10(4)+20(0)}{60}=\frac23\ \text{cm},
$$

$$
y_{CM}=\frac{30(0)+10(0)+20(-3)}{60}=-1\ \text{cm}.
$$

Así,

$$
\boxed{\vec r_{CM}=\left(\frac23\hat i-\hat j\right)\text{cm}}.
$$

### b) Momentos de inercia

**Eje por $A$, normal al dibujo:**

$$
I_{A,z}=10(4^2)+20(3^2)
=\boxed{340\ \text{g cm}^2}.
$$

**Eje coincidente con $AC$:**

Solo contribuye la masa en $B$:

$$
I_{AC}=10(4^2)=\boxed{160\ \text{g cm}^2}.
$$

**Eje coincidente con $BC$:**

Solo contribuye la masa en $A$. Su distancia a la recta $BC$ es $12/5$ cm:

$$
I_{BC}=30\left(\frac{12}{5}\right)^2
=\boxed{172.8\ \text{g cm}^2}.
$$

**Tres ejes principales ortogonales por el CM:**

Respecto de ejes $x,y$ paralelos a $AB,AC$, pero trasladados al CM:

$$
I_{xx}=120,\qquad I_{yy}=\frac{400}{3},\qquad
I_{xy}=-40
\quad(\text{g cm}^2).
$$

Los ejes principales del plano se obtienen girando un ángulo $\theta$ tal que

$$
\tan(2\theta)=6,\qquad \theta=40.27^\circ.
$$

Sus momentos son

$$
\boxed{I_1=\frac{380-20\sqrt{37}}3=86.12\ \text{g cm}^2},
$$

$$
\boxed{I_2=\frac{380+20\sqrt{37}}3=167.22\ \text{g cm}^2}.
$$

El tercer eje es normal al dibujo y

$$
\boxed{I_z=I_1+I_2=\frac{760}{3}=253.33\ \text{g cm}^2}.
$$

**Verificación de Steiner:**

Para el eje normal por $A$, la distancia entre $A$ y el CM cumple
$D^2=13/9$ cm$^2$:

$$
I_{A,z}=I_{CM,z}+M_TD^2
=\frac{760}{3}+60\frac{13}{9}=340\ \text{g cm}^2.
$$

Para el eje $AC$, el eje paralelo por el CM tiene
$I=I_{yy}=400/3$ g cm$^2$, y la separación es $2/3$ cm:

$$
I_{AC}=\frac{400}{3}+60\left(\frac23\right)^2
=160\ \text{g cm}^2.
$$

## Problema 7

### a) Cilindro hueco

Para un cilindro de radio interior $r$, radio exterior $R$ y masa $M$:

$$
\boxed{I=\frac12M(R^2+r^2)}.
$$

La longitud $L$ no aparece en el resultado una vez conocida la masa total.

### b) Disco agujereado

Se toma $m$ como la masa del cuerpo que queda después de quitar el hueco. La
masa del disco completo sería $4m/3$ y la masa retirada $m/3$. Usando Steiner
para el círculo extraído:

$$
\begin{aligned}
I
&=\frac12\left(\frac{4m}{3}\right)R^2
-\left[
\frac12\left(\frac m3\right)\left(\frac R2\right)^2
+\left(\frac m3\right)\left(\frac R2\right)^2
\right]\\
&=\boxed{\frac{13}{24}mR^2}.
\end{aligned}
$$

## Problema 8

Datos: $R=0.50$ m, $I=5$ kg m$^2$.

### a) Fuerza constante de 50 N

$$
\alpha=\frac{\tau}{I}=\frac{FR}{I}
=\frac{50(0.5)}5
=\boxed{5\ \text{rad/s}^2}.
$$

### b) Masa colgante de 5 kg

Con $a=\alpha R$:

$$
mg-T=ma,\qquad TR=I\alpha.
$$

Eliminando $T$:

$$
\alpha=\frac{mgR}{I+mR^2}
=\frac{5(10)(0.5)}{5+5(0.5)^2}
=\boxed{4\ \text{rad/s}^2}.
$$

### c) Comparación

En a), la tensión aplicada vale exactamente $50$ N. En b), la masa acelera,
por lo que

$$
T=m(g-a)<mg=50\ \text{N}.
$$

Por eso el torque y la aceleración angular son menores en b).

## Problema 9

Se supone $m_1>m_2$, por lo que $m_1$ baja, $m_2$ sube y ambas masas tienen
aceleración de módulo $a$. Para el disco:

$$
I=\frac12MR^2,\qquad a=\alpha R.
$$

### a) Fuerzas

- Sobre $m_1$: peso $m_1g$ hacia abajo y tensión $T_1$ hacia arriba.
- Sobre $m_2$: peso $m_2g$ hacia abajo y tensión $T_2$ hacia arriba.
- Sobre el disco: $T_1$ y $T_2$ tangenciales, su peso y la reacción del eje.

### b) Ecuaciones

$$
m_1g-T_1=m_1a,
$$

$$
T_2-m_2g=m_2a,
$$

$$
(T_1-T_2)R=I\alpha,\qquad a=\alpha R.
$$

### c) Aceleraciones

Al combinar las ecuaciones:

$$
\boxed{
a=\frac{(m_1-m_2)g}{m_1+m_2+M/2}
},
$$

$$
\boxed{\alpha=\frac aR}.
$$

$m_1$ acelera hacia abajo y $m_2$ hacia arriba. Si $m_2>m_1$, se invierten
los sentidos.

### d) Tensiones

$$
\boxed{T_1=m_1(g-a)},\qquad
\boxed{T_2=m_2(g+a)}.
$$

### e) Velocidad angular después de variar la altura

Si parte del reposo y $m_1$ desciende una distancia $\Delta h$:

$$
(m_1-m_2)g\Delta h
=\frac12(m_1+m_2)(R\omega)^2+\frac12I\omega^2.
$$

Por tanto,

$$
\boxed{
\omega=
\sqrt{
\frac{2(m_1-m_2)g\Delta h}
{R^2(m_1+m_2+M/2)}
}
}.
$$

La fórmula da el módulo; si $m_1$ sube, debe usarse el cambio de energía
potencial con el signo correspondiente.

## Problema 10

El disco es macizo, por lo que $I=\frac12MR^2$. Se llama $a_C$ a la
aceleración de su centro, $\alpha$ a su aceleración angular y $a_m$ a la
aceleración descendente de la masa colgante.

### a) Fuerzas

- Disco: peso $Mg$, normal $N$ y tensión horizontal $T$, tangente al borde.
- Masa colgante: peso $Mg$ hacia abajo y tensión $T$ hacia arriba.

### b) Ecuaciones y vínculo cinemático

Para el disco:

$$
T=Ma_C,
$$

$$
TR=I\alpha=\frac12MR^2\alpha.
$$

Como la cuerda se desenrolla sin deslizar:

$$
a_m=a_C+\alpha R.
$$

De las dos primeras ecuaciones, $\alpha R=2a_C$, luego

$$
\boxed{a_m=3a_C}.
$$

Para la masa colgante:

$$
Mg-T=Ma_m.
$$

### c) Tensión

Usando $a_C=T/M$ y $a_m=3T/M$:

$$
Mg-T=3T,
$$

$$
\boxed{T=\frac{Mg}{4}}.
$$

Además:

$$
a_C=\frac g4,\qquad a_m=\frac{3g}{4},\qquad
\alpha=\frac{g}{2R}.
$$

### d) Velocidad del disco

El centro parte del reposo y recorre $5R$ con aceleración constante $g/4$:

$$
v_C^2=2a_C(5R)
=2\frac g4(5R).
$$

Por lo tanto,

$$
\boxed{v_C=\sqrt{\frac{5gR}{2}}}.
$$

## Problema 11

Se toma el movimiento inicial de $A$ en $+\hat i$ y, como en la figura, el
centro de $B$ a una distancia $R$ por debajo de esa trayectoria. En el
contacto, la distancia entre centros es $2R$.

### a) Velocidad del CM después del choque

Se conserva la cantidad de movimiento lineal:

$$
Mv=(2M)V_{CM}.
$$

Así,

$$
\boxed{\vec V_{CM}=\frac v2\hat i}.
$$

### b) Velocidad angular

El CM del sistema está en el punto medio entre los centros. La distancia de
cada centro al CM común es $R$. El momento de inercia final es

$$
I_f=2\left(\frac12MR^2+MR^2\right)=3MR^2.
$$

Antes del choque, el brazo perpendicular de la cantidad de movimiento de
$A$ respecto del CM común es $R/2$. Por tanto:

$$
L_{CM,i}=-Mv\frac R2,
$$

donde el signo negativo corresponde al sentido horario. Conservando momento
angular respecto del CM:

$$
3MR^2\omega=-\frac12MvR.
$$

Entonces,

$$
\boxed{\vec\omega=-\frac{v}{6R}\hat k}
$$

o sea, gira en sentido horario. Si $B$ estuviera por encima de la trayectoria,
el módulo sería el mismo y el sentido se invertiría.

### c) Si el disco A rota inicialmente

La velocidad del CM no cambia, porque el giro no modifica la cantidad de
movimiento lineal:

$$
\boxed{\vec V_{CM}=\frac v2\hat i}.
$$

El momento angular propio inicial de $A$ es

$$
L_{\rm giro}=
\frac12MR^2\frac vR
=\frac12MvR
$$

en sentido antihorario. Este cancela exactamente el momento angular orbital
$-MvR/2$. Por ello:

$$
\boxed{\omega_f=0}.
$$
