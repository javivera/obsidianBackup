# Física General I — Guía 4: Soluciones

Tomé $g=9{,}81\ \text{m/s}^2$, salvo en el problema 6, donde la guía pide usar $g=10\ \text{m/s}^2$.

---
## Problema 1

La fuerza del resorte es

$$F=-k(x-x_0)$$

Luego la ecuación de movimiento es

$$m\ddot x=-k(x-x_0)$$

o bien

$$\ddot x+\omega^2(x-x_0)=0,\qquad \omega=\sqrt{\frac{k}{m}}$$

Como se suelta desde $x_1$ con velocidad inicial nula:

$$x(0)=x_1,\qquad v(0)=0$$

La solución es

$$x(t)=x_0+(x_1-x_0)\cos(\omega t)$$

$$v(t)=-\omega(x_1-x_0)\sin(\omega t)$$

$$a(t)=-\omega^2(x_1-x_0)\cos(\omega t)=-\omega^2(x-x_0)$$

### Datos numéricos

$$k=8\ \text{N/m},\quad m=2\ \text{kg},\quad x_0=0{,}40\ \text{m},\quad x_1=0{,}55\ \text{m}$$

Entonces:

$$\omega=\sqrt{\frac{8}{2}}=2\ \text{rad/s}$$

$$A=|x_1-x_0|=0{,}15\ \text{m}$$

Por lo tanto:

$$x(t)=0{,}40+0{,}15\cos(2t)\ \text{m}$$
$$v(t)=-0{,}30\sin(2t)\ \text{m/s}$$
$$a(t)=-0{,}60\cos(2t)\ \text{m/s}^2$$

El período y la frecuencia son

$$T=\frac{2\pi}{\omega}=\pi\ \text{s}$$
$$f=\frac{1}{T}=\frac{1}{\pi}\ \text{Hz}\approx 0{,}318\ \text{Hz}$$

Las coordenadas extremas son

$$x_{\max}=x_0+A=0{,}55\ \text{m}$$
$$x_{\min}=x_0-A=0{,}25\ \text{m}$$

La rapidez máxima ocurre en el equilibrio:

$$v_{\max}=\omega A=2\cdot 0{,}15=0{,}30\ \text{m/s}$$

$$\boxed{T=\pi\ \text{s}},\qquad \boxed{f\approx 0{,}318\ \text{Hz}}$$
$$\boxed{x_{\min}=0{,}25\ \text{m}},\qquad \boxed{x_{\max}=0{,}55\ \text{m}}$$
$$\boxed{v_{\max}=0{,}30\ \text{m/s}}$$

---
## Problema 2

Trabajo en cgs, para usar directamente:

$$k=13{,}2\ \text{dyn/cm},\quad m=150\ \text{g},\quad x_{\min}=27{,}7\ \text{cm},\quad x_1=30{,}0\ \text{cm},\quad v_1=3\ \text{cm/s}$$

Sea $x_e$ la posición de equilibrio.  
En la posición extrema $x_{\min}$, la velocidad es cero, así que la energía vale

$$E=\frac12 k(x_{\min}-x_e)^2$$

En $x_1$:

$$E=\frac12 mv_1^2+\frac12 k(x_1-x_e)^2$$

Igualando:

$$k(x_{\min}-x_e)^2=mv_1^2+k(x_1-x_e)^2$$

Sustituyendo:

$$13{,}2(27{,}7-x_e)^2=150\cdot 3^2+13{,}2(30{,}0-x_e)^2$$

De aquí:

$$x_e\approx 51{,}08\ \text{cm}$$

La rapidez en el equilibrio se obtiene de

$$\frac12 mv_e^2=\frac12 k(x_{\min}-x_e)^2$$

Entonces:

$$v_e=\sqrt{\frac{k}{m}}\,|x_{\min}-x_e|\approx 6{,}94\ \text{cm/s}$$

$$\boxed{x_e\approx 51{,}1\ \text{cm}}$$
$$\boxed{v_e\approx 6{,}94\ \text{cm/s}=6{,}94\times10^{-2}\ \text{m/s}}$$

---
## Problema 3

Sea $x$ la compresión del resorte medida desde el instante en que la masa lo toca.

Mientras hay contacto:

$$m\ddot x+kx=0$$

con condiciones iniciales

$$x(0)=0,\qquad \dot x(0)=v$$

La solución es

$$x(t)=\frac{v}{\omega}\sin(\omega t),\qquad \omega=\sqrt{\frac{k}{m}}$$

La compresión máxima ocurre cuando $\dot x=0$, es decir cuando $\omega t=\pi/2$:

$$x_{\max}=\frac{v}{\omega}=v\sqrt{\frac{m}{k}}$$

Con $m=0{,}300\ \text{kg}$, $k=18\ \text{N/m}$ y $v=1{,}5\ \text{m/s}$:

$$x_{\max}=1{,}5\sqrt{\frac{0{,}3}{18}}\approx 0{,}194\ \text{m}$$

$$\boxed{x_{\max}\approx 19{,}4\ \text{cm}}$$

La masa se desvincula cuando el resorte vuelve a su longitud natural, es decir cuando $x=0$ otra vez:

$$\omega t=\pi \Rightarrow t=\frac{\pi}{\omega}=\pi\sqrt{\frac{m}{k}}$$

$$t\approx \pi\sqrt{\frac{0{,}3}{18}}\approx 0{,}406\ \text{s}$$

$$\boxed{t\approx 0{,}406\ \text{s}}$$

---
## Problema 4

Para un oscilador masa-resorte:

$$v_{\max}=\omega A=A\sqrt{\frac{k}{m}}$$

Si las masas son iguales y las velocidades máximas son iguales:

$$A_1\sqrt{k_1}=A_2\sqrt{k_2}$$

Como $k_1>k_2$, se sigue que

$$A_1<A_2$$

$$\boxed{\text{El cuerpo unido al resorte }k_2\text{ tiene mayor amplitud.}}$$

---
## Problema 5

Tomo $x$ como la distancia horizontal del buje al punto de equilibrio $C$.

La longitud del resorte es

$$AB=\sqrt{l^2+x^2}$$

La deformación vale

$$\Delta l=\sqrt{l^2+x^2}-l$$

y la fuerza elástica tiene módulo $k\Delta l$ dirigida a lo largo de $AB$.  
La componente horizontal es

$$F_x=-k(\sqrt{l^2+x^2}-l)\frac{x}{\sqrt{l^2+x^2}}$$

### a) Aceleración en función de $x$

$$a(x)=\ddot x=\frac{F_x}{m}=-\frac{k}{m}\,x\left(1-\frac{l}{\sqrt{l^2+x^2}}\right)$$

$$\boxed{a(x)=-\dfrac{k}{m}\,x\left(1-\dfrac{l}{\sqrt{l^2+x^2}}\right)}$$

### b) Ecuación de movimiento

$$\ddot x+\frac{k}{m}\,x\left(1-\frac{l}{\sqrt{l^2+x^2}}\right)=0$$

La ecuación general de un movimiento armónico simple es

$$\ddot x+\omega^2x=0$$

Aquí el término que multiplica a $x$ no es constante, por lo que el movimiento no es armónico simple.

---
## Problema 6

### a) Longitud inicial de equilibrio

Con una masa $m$ colgando:

$$k(l_1-l_0)=mg$$

Entonces

$$l_1=l_0+\frac{mg}{k}$$

### b) Nueva posición de equilibrio con masa total $2m$

$$k(l_e-l_0)=2mg$$

Luego

$$l_e=l_0+\frac{2mg}{k}$$

### c) Longitud en la altura máxima

La masa $2m$ se suelta desde el reposo en la posición $l_1$, o sea desde un punto situado por encima del nuevo equilibrio una distancia

$$A=l_e-l_1=\frac{mg}{k}$$

La amplitud es esa misma distancia, así que la altura máxima corresponde al extremo superior:

$$l_2=l_e-A=l_1$$

$$\boxed{l_2=l_1=l_0+\frac{mg}{k}}$$

### d) Valores numéricos

Con

$$g=10\ \text{m/s}^2,\quad l_0=1\ \text{m},\quad k=2\ \text{N/m},\quad m=0{,}4\ \text{kg}$$

se obtiene:

$$l_1=1+\frac{0{,}4\cdot 10}{2}=3\ \text{m}$$
$$l_e=1+\frac{2\cdot 0{,}4\cdot 10}{2}=5\ \text{m}$$
$$l_2=3\ \text{m}$$

$$\boxed{l_1=3\ \text{m}},\qquad \boxed{l_e=5\ \text{m}},\qquad \boxed{l_2=3\ \text{m}}$$

### e) Funciones de movimiento

Sea $x(t)$ la coordenada medida desde el nuevo equilibrio $l_e$, positiva hacia abajo.  
Entonces:

$$2m\ddot x=-kx$$

o sea

$$\ddot x+\frac{k}{2m}x=0,\qquad \omega=\sqrt{\frac{k}{2m}}$$

Condiciones iniciales:

$$x(0)=l_1-l_e=-\frac{mg}{k},\qquad \dot x(0)=0$$

Entonces:

$$x(t)=-\frac{mg}{k}\cos(\omega t)$$

$$v(t)=\frac{mg}{k}\,\omega\,\sin(\omega t)$$

$$a(t)=\frac{mg}{k}\,\omega^2\cos(\omega t)$$

Con los datos:

$$\omega=\sqrt{\frac{2}{0{,}8}}=\sqrt{2{,}5}\approx 1{,}58\ \text{rad/s}$$

Por lo tanto:

$$x(t)=-2\cos(1{,}58\,t)\ \text{m}$$
$$v(t)\approx 3{,}16\sin(1{,}58\,t)\ \text{m/s}$$

La velocidad máxima es

$$v_{\max}=A\omega=\frac{mg}{k}\sqrt{\frac{k}{2m}}$$

$$v_{\max}=2\cdot 1{,}58\approx 3{,}16\ \text{m/s}$$

$$\boxed{v_{\max}\approx 3{,}16\ \text{m/s}}$$

### f) Energía del sistema

Respecto del nuevo equilibrio, la energía de oscilación es

$$E=\frac12 (2m)v^2+\frac12 kx^2=\text{cte}$$

Como la amplitud es $A=mg/k$:

$$E=\frac12 kA^2=\frac12 k\left(\frac{mg}{k}\right)^2=\frac{m^2g^2}{2k}$$

Numéricamente:

$$E=\frac{(0{,}4)^2(10)^2}{2\cdot 2}=4\ \text{J}$$

$$\boxed{E=4\ \text{J}}$$

---
## Problema 7

Tomo el origen en $b$ y el eje positivo hacia abajo sobre el plano inclinado.

### a) Velocidad al llegar a $b$

La altura del punto $b$ sobre el piso es $l\sin\alpha$.  
Desde la altura $h$ hasta $b$, por conservación de energía:

$$mgh=mg\,l\sin\alpha+\frac12 mv_b^2$$

Entonces:

$$v_b=\sqrt{2g(h-l\sin\alpha)}$$

$$\boxed{v_b=\sqrt{2g(h-l\sin\alpha)}}$$

### b) Altura mínima alcanzada

Sea $x$ la compresión del resorte medida desde $b$.  
En la compresión máxima, la velocidad es cero:

$$\frac12 mv_b^2+mgx\sin\alpha=\frac12 kx^2$$

Reemplazando $v_b^2$:

$$\frac12 kx^2-mg\sin\alpha\,x-mg(h-l\sin\alpha)=0$$

La raíz positiva es

$$x_{\max}=\frac{mg\sin\alpha+\sqrt{m^2g^2\sin^2\alpha+2kmg(h-l\sin\alpha)}}{k}$$

La altura mínima sobre el piso es la del extremo comprimido:

$$h_{\min}=(l-x_{\max})\sin\alpha$$

$$\boxed{h_{\min}=\left(l-\frac{mg\sin\alpha+\sqrt{m^2g^2\sin^2\alpha+2kmg(h-l\sin\alpha)}}{k}\right)\sin\alpha}$$

### c) Ecuación de movimiento una vez enganchado

Las fuerzas sobre el bloque a lo largo del plano son:

- $mg\sin\alpha$ hacia abajo,
- $kx$ hacia arriba.

Por lo tanto:

$$m\ddot x=mg\sin\alpha-kx$$

o bien

$$\ddot x+\frac{k}{m}x=g\sin\alpha$$

La posición de equilibrio es

$$x_e=\frac{mg\sin\alpha}{k}$$

Definiendo $y=x-x_e$:

$$\ddot y+\omega^2 y=0,\qquad \omega=\sqrt{\frac{k}{m}}$$

La solución general es

$$x(t)=x_e+A\cos(\omega t+\varphi)$$

Usando $x(0)=0$ y $\dot x(0)=v_b$ también puede escribirse como

$$x(t)=x_e\bigl(1-\cos\omega t\bigr)+\frac{v_b}{\omega}\sin\omega t$$

con

$$\omega=\sqrt{\frac{k}{m}},\qquad x_e=\frac{mg\sin\alpha}{k}$$

Interpretación:

- $x_e$ es la nueva posición de equilibrio.
- $\omega$ es la frecuencia angular de la oscilación.
- $A$ es la amplitud respecto del equilibrio.
- $\varphi$ fija la fase inicial.
