# Física General I — Guía 3: Soluciones

Tomé $g=9{,}81\ \text{m/s}^2$ y $R_T=6371\ \text{km}=6{,}371\times10^6\ \text{m}$.

---
## Problema 1

En una curva peraltada sin rozamiento actúan solamente:

- el peso $mg$,
- la normal $N$ de la pista.

Si el ángulo de peralte es $\theta$, la componente horizontal de la normal proporciona la aceleración centrípeta:

$$N\sin\theta=\frac{mv^2}{R}$$

y en vertical debe haber equilibrio:

$$N\cos\theta=mg$$

Dividiendo ambas ecuaciones:

$$\tan\theta=\frac{v^2}{Rg}$$

Luego,

$$\boxed{\theta=\arctan\!\left(\frac{v^2}{Rg}\right)}$$

Si la velocidad fuera mayor que ese valor, la fuerza centrípeta necesaria sería más grande y el cuerpo tendería a subir hacia el borde externo de la curva.  
Si la velocidad fuera menor, tendería a deslizar hacia la parte interna.

---
## Problema 2

Si la Tierra fuera una esfera homogénea de radio $R$ y densidad $\rho$, su masa sería

$$M=\frac{4}{3}\pi R^3\rho$$

En la superficie:

$$g=\frac{GM}{R^2}$$

Sustituyendo $M$:

$$g=\frac{G}{R^2}\,\frac{4}{3}\pi R^3\rho=\frac{4}{3}\pi G R\rho$$

Despejando $G$:

$$G=\frac{3g}{4\pi R\rho}$$

Con

$$g=9{,}80665\ \text{m/s}^2,\quad R=6{,}371\times10^6\ \text{m},\quad \rho=5517\ \text{kg/m}^3$$

resulta:

$$G\approx 6{,}66\times10^{-11}\ \text{N m}^2/\text{kg}^2$$

$$\boxed{G\approx 6{,}66\times10^{-11}\ \text{N m}^2/\text{kg}^2}$$

Es muy cercano al valor tabulado $6{,}672\times10^{-11}\ \text{N m}^2/\text{kg}^2$.

---
## Problema 3

Para un cuerpo de masa $m$ situado a distancia $r>R_T$ del centro de la Tierra, la fuerza gravitatoria es

$$\vec F=-\frac{GM_Tm}{r^2}\,\hat r$$

Entonces su aceleración es

$$\vec a=\frac{\vec F}{m}=-\frac{GM_T}{r^2}\,\hat r$$

Usando que $g=\dfrac{GM_T}{R_T^2}$, también puede escribirse como

$$\vec a=-g\left(\frac{R_T}{r}\right)^2\hat r$$

$$\boxed{\vec a=-\frac{GM_T}{r^2}\,\hat r=-g\left(\frac{R_T}{r}\right)^2\hat r}$$

La aceleración no depende de la masa $m$ del cuerpo.

---
## Problema 4

Usamos conservación de la energía mecánica, tomando energía potencial gravitatoria

$$U(r)=-\frac{GM_Tm}{r}$$

y recordando que

$$GM_T=gR_T^2$$

### a) Para $v_0=3\ \text{km/s}$

En el lanzamiento:

$$E_i=\frac12 mv_0^2-\frac{GM_Tm}{R_T}$$

En la altura máxima, $v=0$:

$$E_f=-\frac{GM_Tm}{r_{\max}}$$

Igualando:

$$\frac12 v_0^2-\frac{GM_T}{R_T}=-\frac{GM_T}{r_{\max}}$$

De aquí:

$$\frac{1}{r_{\max}}=\frac{1}{R_T}-\frac{v_0^2}{2GM_T}$$

Con $v_0=3000\ \text{m/s}$:

$$r_{\max}\approx 6{,}865\times10^6\ \text{m}$$

Por lo tanto,

$$h=r_{\max}-R_T\approx 4{,}94\times10^5\ \text{m}$$

$$\boxed{h\approx 4{,}94\times10^5\ \text{m}\approx 494\ \text{km}}$$

### b) Comparación usando $g$ constante

Si se toma $g$ constante:

$$h=\frac{v_0^2}{2g}=\frac{(3000)^2}{2\cdot 9{,}81}\approx 4{,}59\times10^5\ \text{m}$$

$$\boxed{h_{\text{cte}}\approx 4{,}59\times10^5\ \text{m}\approx 459\ \text{km}}$$

El modelo con $g$ constante subestima la altura en aproximadamente $35{,}6\ \text{km}$, o cerca de un $7{,}2\%$.

### c) Para $v_0=10\ \text{m/s}$

Sin suponer gravedad constante:

$$\frac{1}{r_{\max}}=\frac{1}{R_T}-\frac{v_0^2}{2GM_T}$$

Con $v_0=10\ \text{m/s}$:

$$h\approx 5{,}10\ \text{m}$$

$$\boxed{h\approx 5{,}10\ \text{m}}$$

Con $g$ constante:

$$h=\frac{v_0^2}{2g}=\frac{100}{19{,}62}\approx 5{,}10\ \text{m}$$

$$\boxed{h_{\text{cte}}\approx 5{,}10\ \text{m}}$$

En este caso la diferencia es despreciable.

---
## Problema 5

### a) Fuerza gravitatoria del Sol sobre la Tierra

En coordenadas polares con origen en el Sol, la fuerza es radial y apunta hacia el Sol:

$$\vec F_{TS}=-\frac{GM_SM_T}{r^2}\,\hat r$$

$$\boxed{\vec F_{TS}=-\dfrac{GM_SM_T}{r^2}\,\hat r}$$

### b) Módulo de la fuerza

Datos:

$$r=1{,}4957\times10^{11}\ \text{m}$$
$$M_S=1{,}991\times10^{30}\ \text{kg}$$
$$M_T=5{,}974\times10^{24}\ \text{kg}$$
$$G=6{,}672\times10^{-11}\ \text{N m}^2/\text{kg}^2$$

Entonces:

$$F_{TS}=\frac{GM_SM_T}{r^2}\approx 3{,}55\times10^{22}\ \text{N}$$

$$\boxed{F_{TS}\approx 3{,}55\times10^{22}\ \text{N}}$$

### c) Aceleración centrípeta de la Tierra

Para movimiento circular uniforme:

$$a_c=\frac{4\pi^2r}{T^2}$$

con

$$T=365{,}2564\ \text{días}=3{,}1558\times10^7\ \text{s}$$

Entonces:

$$a_c\approx 5{,}93\times10^{-3}\ \text{m/s}^2$$

En coordenadas polares:

$$\boxed{\vec a_c=-\frac{4\pi^2r}{T^2}\,\hat r}$$

y su módulo es

$$\boxed{a_c\approx 5{,}93\times10^{-3}\ \text{m/s}^2}$$

Si multiplicamos por la masa de la Tierra:

$$M_Ta_c\approx 3{,}54\times10^{22}\ \text{N}$$

que coincide, dentro del redondeo, con el resultado del inciso b).

---
## Problema 6

Si el satélite está a altura $h$, el radio de la órbita es

$$r=R_T+h$$

La fuerza gravitatoria proporciona la fuerza centrípeta:

$$\frac{GM_Tm}{r^2}=m\omega^2r$$

Cancelando $m$:

$$\omega=\sqrt{\frac{GM_T}{r^3}}=\sqrt{\frac{GM_T}{(R_T+h)^3}}$$

Usando $GM_T=gR_T^2$:

$$\boxed{\omega=\sqrt{\frac{GM_T}{(R_T+h)^3}}=\sqrt{\frac{gR_T^2}{(R_T+h)^3}}}$$

---
## Problema 7

Para un satélite geoestacionario su velocidad angular debe coincidir con la de rotación de la Tierra.

Tomando $T=24\ \text{h}=86400\ \text{s}$:

$$\omega=\frac{2\pi}{T}$$

y debe cumplirse

$$\omega^2r=\frac{GM_T}{r^2}$$

De aquí:

$$r=\left(\frac{GM_T}{\omega^2}\right)^{1/3}=\left[GM_T\left(\frac{T}{2\pi}\right)^2\right]^{1/3}$$

### a) Altura

Con $GM_T=gR_T^2$:

$$r\approx 4{,}224\times10^7\ \text{m}$$

Entonces la altura sobre la superficie es

$$h=r-R_T\approx 3{,}587\times10^7\ \text{m}$$

$$\boxed{h\approx 3{,}59\times10^7\ \text{m}\approx 3{,}59\times10^4\ \text{km}}$$

### b) Velocidad del satélite

$$v=\omega r=\frac{2\pi r}{T}$$

Entonces:

$$v\approx 3{,}07\times10^3\ \text{m/s}$$

$$\boxed{v\approx 3{,}07\ \text{km/s}}$$

Si se usa el día sidéreo en vez de $24\ \text{h}$, los resultados cambian muy poco.

---
## Problema 8

Para Marte:

$$g_M=\frac{GM_M}{R_M^2}$$

con

$$R_M=3400\ \text{km}=3{,}4\times10^6\ \text{m},\qquad M_M=6{,}4\times10^{23}\ \text{kg}$$

### a) Aceleración de la gravedad en la superficie

$$g_M=\frac{(6{,}672\times10^{-11})(6{,}4\times10^{23})}{(3{,}4\times10^6)^2}$$

$$g_M\approx 3{,}69\ \text{m/s}^2$$

$$\boxed{g_M\approx 3{,}69\ \text{m/s}^2}$$

### b) Velocidad de escape

La velocidad de escape desde la superficie cumple

$$\frac12 mv_e^2=\frac{GM_Mm}{R_M}$$

Luego:

$$v_e=\sqrt{\frac{2GM_M}{R_M}}$$

Numéricamente:

$$v_e\approx 5{,}01\times10^3\ \text{m/s}$$

$$\boxed{v_e\approx 5{,}01\ \text{km/s}}$$
