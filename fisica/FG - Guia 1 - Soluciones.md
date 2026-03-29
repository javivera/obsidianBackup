# Física General I — Guía 1: Soluciones

---
## Problema 1

**Datos:**
$$\vec{F}_1 = (2,\,-4)\ \text{N},\quad \vec{F}_2 = (5,\,1)\ \text{N},\quad \vec{F}_3 = (-\tfrac{1}{2},\,-\tfrac{1}{2})\ \text{N},\quad \vec{F}_4 = (1,\,0)\ \text{N}$$

### a) Fuerza resultante (analíticamente)

$$\vec{R} = \sum_i \vec{F}_i$$

$$R_x = 2 + 5 - \tfrac{1}{2} + 1 = 7{,}5\ \text{N}$$

$$R_y = -4 + 1 - \tfrac{1}{2} + 0 = -3{,}5\ \text{N}$$

$$\boxed{\vec{R} = (7{,}5,\,-3{,}5)\ \text{N}}$$

Módulo:
$$|\vec{R}| = \sqrt{7{,}5^2 + 3{,}5^2} = \sqrt{56{,}25 + 12{,}25} = \sqrt{68{,}5} \approx 8{,}28\ \text{N}$$

Dirección (respecto al eje $+x$):
$$\theta_R = \arctan\!\left(\frac{-3{,}5}{7{,}5}\right) \approx -25{,}0°$$

(es decir, $25°$ por debajo del eje $x$ positivo, en el cuarto cuadrante).

### b) Ángulo de cada fuerza con la resultante

Se usa el producto escalar:
$$\cos\theta_i = \frac{\vec{F}_i \cdot \vec{R}}{|\vec{F}_i|\,|\vec{R}|}$$

**Para $\vec{F}_1 = (2,\,-4)$ N:**
$$\vec{F}_1 \cdot \vec{R} = 2(7{,}5) + (-4)(-3{,}5) = 15 + 14 = 29$$
$$|\vec{F}_1| = \sqrt{4+16} = 2\sqrt{5} \approx 4{,}47\ \text{N}$$
$$\cos\theta_1 = \frac{29}{4{,}47 \times 8{,}28} \approx 0{,}783 \implies \boxed{\theta_1 \approx 38{,}5°}$$

**Para $\vec{F}_2 = (5,\,1)$ N:**
$$\vec{F}_2 \cdot \vec{R} = 5(7{,}5) + 1(-3{,}5) = 37{,}5 - 3{,}5 = 34$$
$$|\vec{F}_2| = \sqrt{25+1} = \sqrt{26} \approx 5{,}10\ \text{N}$$
$$\cos\theta_2 = \frac{34}{5{,}10 \times 8{,}28} \approx 0{,}806 \implies \boxed{\theta_2 \approx 36{,}4°}$$

**Para $\vec{F}_3 = (-\tfrac{1}{2},\,-\tfrac{1}{2})$ N:**
$$\vec{F}_3 \cdot \vec{R} = (-0{,}5)(7{,}5) + (-0{,}5)(-3{,}5) = -3{,}75 + 1{,}75 = -2$$
$$|\vec{F}_3| = \sqrt{0{,}25+0{,}25} = \frac{1}{\sqrt{2}} \approx 0{,}707\ \text{N}$$
$$\cos\theta_3 = \frac{-2}{0{,}707 \times 8{,}28} \approx -0{,}342 \implies \boxed{\theta_3 \approx 110{,}0°}$$

**Para $\vec{F}_4 = (1,\,0)$ N:**
$$\vec{F}_4 \cdot \vec{R} = 1(7{,}5) + 0(-3{,}5) = 7{,}5$$
$$|\vec{F}_4| = 1\ \text{N}$$
$$\cos\theta_4 = \frac{7{,}5}{1 \times 8{,}28} \approx 0{,}906 \implies \boxed{\theta_4 \approx 25{,}0°}$$

---

## Problema 2

**Datos:** $|\vec{R}| = 900\ \text{N}$ (vertical), $|\vec{F}_2| = 500\ \text{N}$, $\alpha = 32°$ (ángulo de $\vec{F}_2$ con la vertical).

**Condición:** La resultante $\vec{R}$ es puramente vertical, por tanto su componente horizontal es nula.

Tomando $+y$ vertical arriba y $+x$ horizontal a la derecha:

$$F_{2x} = 500\sin(32°) \approx 264{,}95\ \text{N},\quad F_{2y} = 500\cos(32°) \approx 424{,}0\ \text{N}$$

Para que $R_x = 0$:
$$F_{1x} = -F_{2x} = -264{,}95\ \text{N}$$

Para que $R_y = 900\ \text{N}$:
$$F_{1y} = 900 - F_{2y} = 900 - 424{,}0 = 476{,}0\ \text{N}$$

**Módulo de $\vec{F}_1$:**
$$|\vec{F}_1| = \sqrt{264{,}95^2 + 476{,}0^2} = \sqrt{70198 + 226576} = \sqrt{296774} \approx \boxed{544{,}8\ \text{N}}$$

**Dirección** (ángulo con la vertical):
$$\beta = \arctan\!\left(\frac{264{,}95}{476{,}0}\right) = \arctan(0{,}556) \approx \boxed{29{,}1°}$$

$\vec{F}_1$ está a $29{,}1°$ de la vertical, del lado opuesto a $\vec{F}_2$.

---

## Problema 3

**Datos:** $m_1 = 2\ \text{kg}$, $m_2 = 80\ \text{kg}$, $m_3 = 1000\ \text{kg}$; $F = 500\ \text{N}$; $t = 5\ \text{s}$; $v_0 = 0$.

Segunda ley de Newton: $a = F/m$. Con $v_0 = 0$: $v_f = at = \dfrac{F\,t}{m}$

$$v_1 = \frac{500 \times 5}{2} = \boxed{1250\ \text{m/s}}$$

$$v_2 = \frac{500 \times 5}{80} = \boxed{31{,}25\ \text{m/s}}$$

$$v_3 = \frac{500 \times 5}{1000} = \boxed{2{,}5\ \text{m/s}}$$

**Conclusión:** Con la misma fuerza aplicada durante el mismo tiempo, la velocidad final es inversamente proporcional a la masa. El cuerpo más ligero ($m_1$) alcanza una velocidad 500 veces mayor que el más pesado ($m_3$).

---

## Problema 4

**Datos:** $m = 0{,}1\ \text{kg}$, $v_0 = 3\ \text{m/s}$, $F = 0{,}2\ \text{N}$

Aceleración: $a = F/m = 0{,}2/0{,}1 = 2\ \text{m/s}^2$

### a) Fuerza en el mismo sentido, $x = 4$ m

$$x = v_0\,t + \tfrac{1}{2}a\,t^2 \implies 4 = 3t + t^2$$

$$t^2 + 3t - 4 = 0 \implies (t+4)(t-1) = 0$$

$$\boxed{t = 1\ \text{s}}$$

### b) Fuerza en sentido opuesto: distancia hasta detenerse

Con $a = -2\ \text{m/s}^2$, el cuerpo se detiene en:
$$t_{\text{stop}} = \frac{v_0}{|a|} = \frac{3}{2} = 1{,}5\ \text{s}$$

$$x = v_0\,t_{\text{stop}} - \tfrac{1}{2}|a|\,t_{\text{stop}}^2 = 3(1{,}5) - (1{,}5)^2 = 4{,}5 - 2{,}25$$

$$\boxed{x = 2{,}25\ \text{m}}$$

### c) Velocidad inicial mínima para recorrer 4 m hasta detenerse

Con $v_f = 0$ y $x = 4\ \text{m}$, usando $v_f^2 = v_0^2 - 2|a|\,x$:

$$0 = v_0^2 - 2(2)(4) \implies v_0^2 = 16$$

$$\boxed{v_0 = 4\ \text{m/s}}$$

---

## Problema 5

**Datos:** $m = 2\ \text{kg}$; la fuerza actúa para $-1\,\text{s} \le t \le 2\,\text{s}$:
$$\vec{F}(t) = 4\,\hat{i}\ \text{N} + 2t\,\hat{j}\ \text{N}$$
Antes de $t = -1\ \text{s}$: movimiento libre con $\vec{v} = 4\ \text{m/s}\,\hat{i}$.
Condición: $\vec{r}(0) = (2,\,0)\ \text{m}$.

### a) Aceleración, velocidad y posición para todo $t$

---

#### Región 1: $t < -1\ \text{s}$ (libre de fuerzas)

$$\vec{a}(t) = \vec{0}$$

$$\vec{v}(t) = (4,\,0)\ \text{m/s}$$

Para la posición usamos $\vec{r}(-1)$. Del intervalo siguiente, $\vec{r}(-1) = (-3,\,\tfrac{1}{3})\ \text{m}$ (calculado abajo). Entonces:

$$\vec{r}(t) = \big(4t+1,\;\tfrac{1}{3}\big)\ \text{m}$$

---

#### Región 2: $-1\ \text{s} \le t \le 2\ \text{s}$

$$\vec{a}(t) = \frac{\vec{F}}{m} = \left(2,\;t\right)\ \text{m/s}^2$$

Integrando desde $t = -1$ (con $v_x(-1) = 4\ \text{m/s}$, $v_y(-1) = 0$):

$$v_x(t) = 4 + \int_{-1}^{t} 2\,dt' = 4 + 2(t+1) = 2t + 6$$

$$v_y(t) = 0 + \int_{-1}^{t} t'\,dt' = \frac{t^2 - 1}{2}$$

$$\vec{v}(t) = (2t+6)\,\hat{i} + \frac{t^2-1}{2}\,\hat{j}\ \ \text{m/s}$$

Integrando desde $t = 0$ (con $\vec{r}(0) = (2,\,0)$):

$$x(t) = 2 + \int_0^t (2t'+6)\,dt' = t^2 + 6t + 2$$

$$y(t) = 0 + \int_0^t \frac{t'^2-1}{2}\,dt' = \frac{t^3}{6} - \frac{t}{2}$$

$$\vec{r}(t) = \big(t^2+6t+2\big)\,\hat{i} + \left(\frac{t^3}{6}-\frac{t}{2}\right)\hat{j}\ \ \text{m}$$

Verificación de $\vec{r}(-1)$: $x(-1) = 1-6+2 = -3\ \text{m}$; $y(-1) = -\tfrac{1}{6}+\tfrac{1}{2} = \tfrac{1}{3}\ \text{m}$ ✓

---

#### Región 3: $t > 2\ \text{s}$ (libre de fuerzas)

Valores en $t = 2\ \text{s}$:
$$v_x(2) = 10\ \text{m/s},\quad v_y(2) = \tfrac{3}{2}\ \text{m/s}$$
$$x(2) = 18\ \text{m},\quad y(2) = \tfrac{1}{3}\ \text{m}$$

$$\vec{a}(t) = \vec{0}$$

$$\vec{v}(t) = \left(10,\;\frac{3}{2}\right)\ \text{m/s}$$

$$\vec{r}(t) = \big(10t - 2\big)\,\hat{i} + \left(\frac{3}{2}t - \frac{8}{3}\right)\hat{j}\ \ \text{m}$$

---

#### Resumen

| Región | $\vec{a}$ (m/s²) | $\vec{v}$ (m/s) | $\vec{r}$ (m) |
|--------|-----------------|----------------|---------------|
| $t < -1$ | $(0,\,0)$ | $(4,\,0)$ | $(4t+1,\;\frac{1}{3})$ |
| $-1 \le t \le 2$ | $(2,\,t)$ | $(2t+6,\;\frac{t^2-1}{2})$ | $(t^2+6t+2,\;\frac{t^3}{6}-\frac{t}{2})$ |
| $t > 2$ | $(0,\,0)$ | $(10,\;\frac{3}{2})$ | $(10t-2,\;\frac{3t}{2}-\frac{8}{3})$ |

### b) Descripción de las gráficas

- **$a_x(t)$:** Vale $0$ para $t<-1$, sube abruptamente a $2\ \text{m/s}^2$ (constante) en $-1\le t\le 2$, y regresa a $0$ para $t>2$. Función escalón.
- **$a_y(t)$:** Vale $0$ para $t<-1$ y $t>2$; es lineal ($a_y = t$) entre $-1$ y $2\ \text{s}$, pasando por $a_y(-1)=-1$ y $a_y(2)=2\ \text{m/s}^2$.
- **$v_x(t)$:** Constante en $4\ \text{m/s}$ para $t<-1$; lineal con pendiente $2$ durante la fuerza ($v_x = 2t+6$, va de $4$ a $10\ \text{m/s}$); constante en $10\ \text{m/s}$ para $t>2$.
- **$v_y(t)$:** Nula para $t<-1$; parábola $v_y=(t^2-1)/2$ (de $0$ a $1{,}5\ \text{m/s}$) en $[-1,2]$; constante en $1{,}5\ \text{m/s}$ para $t>2$.
- **$x(t)$:** Lineal (pendiente 4) para $t<-1$; parábola cóncava hacia arriba para $-1\le t\le 2$; lineal (pendiente 10) para $t>2$. Continua y suave.
- **$y(t)$:** Constante $\frac{1}{3}\ \text{m}$ para $t<-1$; cúbica $y=t^3/6-t/2$ para $-1\le t\le 2$; lineal (pendiente $3/2$) para $t>2$.

---

## Problema 6

**Datos:** $m = 2\ \text{kg}$

$$\vec{F}_1 = (-3,\,0)\ \text{N},\quad \vec{F}_2 = (0,\,-4)\ \text{N},\quad \vec{F}_3 = 6\,\text{N a }45°\text{ en 4°cuad.}$$

$$\vec{F}_3 = \big(6\cos(-45°),\,6\sin(-45°)\big) = (3\sqrt{2},\,-3\sqrt{2})\ \text{N}$$

Suma de las tres fuerzas dadas:
$$\sum F_x = -3 + 0 + 3\sqrt{2} = 3(\sqrt{2}-1) \approx 1{,}24\ \text{N}$$
$$\sum F_y = 0 - 4 - 3\sqrt{2} = -(4+3\sqrt{2}) \approx -8{,}24\ \text{N}$$

### a) Aceleración de $2\ \text{m/s}^2$ según $(-\hat{i})$

La fuerza neta requerida es:
$$\vec{F}_{\text{neta}} = m\,\vec{a} = 2\times(-2,\,0) = (-4,\,0)\ \text{N}$$

La fuerza adicional $\vec{F}_4$ debe satisfacer $\vec{F}_4 + \sum \vec{F}_i = \vec{F}_{\text{neta}}$:

$$F_{4x} = -4 - 3(\sqrt{2}-1) = -4 - 3\sqrt{2} + 3 = -(1+3\sqrt{2}) \approx -5{,}24\ \text{N}$$
$$F_{4y} = 0 - (-(4+3\sqrt{2})) = 4+3\sqrt{2} \approx 8{,}24\ \text{N}$$

$$|\vec{F}_4| = \sqrt{(1+3\sqrt{2})^2 + (4+3\sqrt{2})^2} = \sqrt{53+30\sqrt{2}} \approx \boxed{9{,}77\ \text{N}}$$

Dirección (desde $+x$):
$$\theta = 180° - \arctan\!\left(\frac{4+3\sqrt{2}}{1+3\sqrt{2}}\right) \approx 180° - 57{,}5° = 122{,}5°$$

(2° cuadrante, $57{,}5°$ sobre el eje $-x$).

### b) Equilibrio

La fuerza adicional debe cancelar la suma de las tres:
$$\vec{F}_4 = -\sum \vec{F}_i = \big(3-3\sqrt{2},\;4+3\sqrt{2}\big)\ \text{N}$$

$$F_{4x} = 3(1-\sqrt{2}) \approx -1{,}24\ \text{N},\quad F_{4y} = 4+3\sqrt{2} \approx 8{,}24\ \text{N}$$

$$|\vec{F}_4| = \sqrt{(3-3\sqrt{2})^2 + (4+3\sqrt{2})^2} = \sqrt{61+6\sqrt{2}} \approx \boxed{8{,}34\ \text{N}}$$

Dirección:
$$\theta = 180° - \arctan\!\left(\frac{4+3\sqrt{2}}{3\sqrt{2}-3}\right) \approx 180° - 81{,}4° = 98{,}6°$$

---

## Problema 7

**Datos:** $m = 3\ \text{kg}$; $\vec{v}(0) = (-4,\,-2)\ \text{m/s}$; $\vec{r}(0) = (2,\,0)\ \text{m}$

$$\vec{F}_1 = (-8,\;10t)\ \text{N},\quad \vec{F}_2 = (2,\;-t+3)\ \text{N},\quad \vec{F}_3 = (6,\;-9t-3)\ \text{N}$$

---

#### Región 1: $t < 1\ \text{s}$ (libre de fuerzas)

$$\vec{a}(t) = \vec{0}$$
$$\vec{v}(t) = (-4,\,-2)\ \text{m/s}$$
$$\vec{r}(t) = (2-4t,\;-2t)\ \text{m}$$

En $t=1$: $\vec{r}(1) = (-2,\,-2)\ \text{m}$, $\vec{v}(1) = (-4,\,-2)\ \text{m/s}$.

---

#### Región 2: $1\ \text{s} \le t \le 2\ \text{s}$ (actúan $\vec{F}_1$ y $\vec{F}_2$)

$$\vec{F}_1 + \vec{F}_2 = (-6,\;9t+3)\ \text{N}$$

$$\vec{a}(t) = \frac{(-6,\;9t+3)}{3} = (-2,\;3t+1)\ \text{m/s}^2$$

Integrando desde $t=1$:

$$v_x(t) = -4 + \int_1^t (-2)\,dt' = -4 - 2(t-1) = -2t-2$$

$$v_y(t) = -2 + \int_1^t (3t'+1)\,dt' = -2 + \frac{3}{2}(t^2-1) + (t-1) = \frac{3t^2}{2} + t - \frac{9}{2}$$

$$\vec{v}(t) = (-2t-2)\,\hat{i} + \left(\frac{3t^2}{2}+t-\frac{9}{2}\right)\hat{j}\ \ \text{m/s}$$

Integrando desde $t=1$:

$$x(t) = -2 + \int_1^t (-2t'-2)\,dt' = -2 + [-(t'^2+2t')]_1^t = -t^2 - 2t + 1$$

$$y(t) = -2 + \int_1^t \!\left(\frac{3t'^2}{2}+t'-\frac{9}{2}\right)dt' = -2 + \left[\frac{t'^3}{2}+\frac{t'^2}{2}-\frac{9t'}{2}\right]_1^t$$

$$y(t) = \frac{t^3}{2} + \frac{t^2}{2} - \frac{9t}{2} + \frac{3}{2}$$

$$\vec{r}(t) = (-t^2-2t+1)\,\hat{i} + \left(\frac{t^3}{2}+\frac{t^2}{2}-\frac{9t}{2}+\frac{3}{2}\right)\hat{j}\ \ \text{m}$$

En $t=2$: $\vec{v}(2) = (-6,\,\tfrac{7}{2})\ \text{m/s}$; $\vec{r}(2) = (-7,\,-\tfrac{3}{2})\ \text{m}$

---

#### Región 3: $t > 2\ \text{s}$ (actúan $\vec{F}_1$, $\vec{F}_2$ y $\vec{F}_3$)

$$\vec{F}_1+\vec{F}_2+\vec{F}_3 = (-6+6,\;9t+3-9t-3) = (0,\,0)\ \text{N}$$

¡La fuerza neta es nula! Por lo tanto:

$$\vec{a}(t) = \vec{0}$$
$$\vec{v}(t) = \left(-6,\;\frac{7}{2}\right)\ \text{m/s}$$
$$\vec{r}(t) = \left(5-6t,\;\frac{7t}{2}-\frac{17}{2}\right)\ \text{m}$$

---

#### Resumen

| Región | $\vec{a}$ (m/s²) | $\vec{v}$ (m/s) | $\vec{r}$ (m) |
|--------|-----------------|----------------|---------------|
| $t < 1$ | $(0,\,0)$ | $(-4,\,-2)$ | $(2-4t,\;-2t)$ |
| $1 \le t \le 2$ | $(-2,\;3t+1)$ | $(-2t-2,\;\frac{3t^2}{2}+t-\frac{9}{2})$ | $(-t^2-2t+1,\;\frac{t^3}{2}+\frac{t^2}{2}-\frac{9t}{2}+\frac{3}{2})$ |
| $t > 2$ | $(0,\,0)$ | $(-6,\;\frac{7}{2})$ | $(5-6t,\;\frac{7t}{2}-\frac{17}{2})$ |

---

## Problema 8

**Datos:** $K_3 = 500\ \text{dyn/cm} = 0{,}5\ \text{N/m}$; $\Delta l_1 = 3\ \text{cm} = 0{,}03\ \text{m}$; $\Delta l_2 = 6\ \text{cm} = 0{,}06\ \text{m}$; $K_1 = 3\ \text{N/m}$; $K_2 = 4\ \text{N/m}$

Según la figura: el resorte 1 forma $30°$ con el eje $x$ (hacia arriba-derecha) y el resorte 2 forma $60°$ bajo el eje $x$ (hacia abajo-derecha).

**Fuerzas de cada resorte:**
$$F_1 = K_1\,\Delta l_1 = 3 \times 0{,}03 = 0{,}09\ \text{N}$$
$$F_2 = K_2\,\Delta l_2 = 4 \times 0{,}06 = 0{,}24\ \text{N}$$

### a) Componentes cartesianas de la fuerza resultante sobre A

$$F_{1x} = 0{,}09\cos(30°) = 0{,}09\,\frac{\sqrt{3}}{2} = \frac{9\sqrt{3}}{2000} \approx 0{,}0779\ \text{N}$$
$$F_{1y} = 0{,}09\sin(30°) = 0{,}045\ \text{N}$$

$$F_{2x} = 0{,}24\cos(60°) = 0{,}24 \times 0{,}5 = 0{,}12\ \text{N}$$
$$F_{2y} = -0{,}24\sin(60°) = -0{,}24\,\frac{\sqrt{3}}{2} \approx -0{,}2078\ \text{N}$$

$$\boxed{F_{Rx} = 0{,}0779 + 0{,}12 \approx 0{,}198\ \text{N}}$$
$$\boxed{F_{Ry} = 0{,}045 - 0{,}2078 \approx -0{,}163\ \text{N}}$$

### b) Dirección del resorte único

$$\theta = \arctan\!\left(\frac{F_{Ry}}{F_{Rx}}\right) = \arctan\!\left(\frac{-0{,}163}{0{,}198}\right) \approx \boxed{-39{,}5°\ \text{respecto al eje }x}$$

El resorte se debe colocar a $39{,}5°$ **por debajo** del eje $x$ positivo (hacia el cuarto cuadrante).

### c) Elongación del resorte único

$$|\vec{F}_R| = \sqrt{0{,}198^2 + 0{,}163^2} = \sqrt{0{,}0392+0{,}0266} \approx 0{,}256\ \text{N}$$

$$\Delta l_3 = \frac{|\vec{F}_R|}{K_3} = \frac{0{,}256\ \text{N}}{0{,}5\ \text{N/m}} \approx \boxed{0{,}512\ \text{m} = 51{,}2\ \text{cm}}$$

---

## Problema 9

Dos resortes de constantes $k_1$ y $k_2$, igual longitud natural. El cuerpo se desplaza $l$.

- **Caso (a):** Resortes en **paralelo** (ambos conectan la pared con el cuerpo).
- **Caso (b):** Resortes en **serie** (conectados en cadena: pared–$k_1$–$k_2$–cuerpo).

### i) Estiramiento o compresión de cada resorte

**Caso (a) — paralelo:**
Ambos resortes se elongan la misma cantidad:
$$\boxed{\Delta l_1 = \Delta l_2 = l}$$

**Caso (b) — serie:**
La tensión es igual en ambos: $F = k_1\Delta l_1 = k_2\Delta l_2$, y $\Delta l_1 + \Delta l_2 = l$.

$$\Delta l_1 = \frac{k_2\,l}{k_1+k_2},\qquad \Delta l_2 = \frac{k_1\,l}{k_1+k_2}$$

### ii) ¿En qué caso la fuerza es mayor?

- Caso (a): $F_a = (k_1+k_2)\,l$
- Caso (b): $F_b = \dfrac{k_1 k_2}{k_1+k_2}\,l$

Dado que $(k_1+k_2)^2 \ge 4k_1 k_2 > k_1 k_2$, se tiene $F_a > F_b$.

**La fuerza es mayor en el caso (a) (paralelo).** Los resortes en paralelo suman sus constantes, mientras que en serie el sistema se vuelve más blando.

### iii) Constante del resorte equivalente

$$\boxed{k_{\text{eq}}^{(a)} = k_1 + k_2} \qquad \text{(paralelo)}$$

$$\boxed{k_{\text{eq}}^{(b)} = \frac{k_1 k_2}{k_1+k_2}} \qquad \text{(serie)}$$

---

## Problema 10

Resorte de longitud natural $l_0$ y constante $k$, dispuesto verticalmente, con masa $m$ en equilibrio.

**Condición de equilibrio:** la fuerza elástica iguala al peso.

### Caso (a): Un solo resorte

$$k\,\Delta l = mg \implies \boxed{\Delta l = \frac{mg}{k}}$$

### Caso (b): Dos resortes en paralelo (ambos de constante $k$)

La constante equivalente es $k_{\text{eq}} = 2k$:

$$2k\,\Delta l = mg \implies \boxed{\Delta l = \frac{mg}{2k}}$$

Cada resorte se estira $mg/(2k)$, la mitad que en el caso (a), ya que comparten la carga.
