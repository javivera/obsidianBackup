# Física General I — Guía 5: Soluciones

Tomé $g=9{,}81\ \text{m/s}^2$.

---
## Problema 1

Sea $\theta_0$ el ángulo máximo del péndulo con la vertical.

### a) Fuerzas, velocidad y aceleración en la amplitud máxima

En un extremo del movimiento:

- actúan la tensión $T$ a lo largo de la cuerda y el peso $mg$ hacia abajo;
- la velocidad es nula;
- la aceleración tangencial apunta hacia la posición de equilibrio y vale $a_t=g\sin\theta_0$;
- la aceleración normal es nula en ese instante porque $v=0$.

### b) Energía mecánica

Sí, la energía mecánica se conserva, porque sólo actúa la gravedad como fuerza que realiza trabajo y la tensión es siempre perpendicular al desplazamiento.

Tomando el punto más bajo como referencia de potencial nulo:

$$E=\frac12 mv^2+mg\ell(1-\cos\theta)$$

En el extremo:

$$E=mg\ell(1-\cos\theta_0)$$

### c) Velocidad en la posición más baja

Por conservación de energía:

$$mg\ell(1-\cos\theta_0)=\frac12 mv_{\min}^2$$

Luego:

$$v_{\text{baja}}=\sqrt{2g\ell(1-\cos\theta_0)}$$

Para pequeñas oscilaciones, si la amplitud lineal es $d$, vale aproximadamente

$$\theta_0\simeq \frac{d}{\ell},\qquad v_{\text{baja}}\simeq \sqrt{\frac{g}{\ell}}\,d$$

### d) Aceleración en extremos y en el punto más bajo

En los extremos:

$$a_t=g\sin\theta_0,\qquad a_n=0$$

Por lo tanto, el módulo es

$$\boxed{a_{\text{ext}}=g\sin\theta_0}$$

En el punto más bajo:

$$a_t=0,\qquad a_n=\frac{v_{\text{baja}}^2}{\ell}=2g(1-\cos\theta_0)$$

Entonces:

$$\boxed{a_{\text{baja}}=2g(1-\cos\theta_0)}$$

### e) Período para pequeñas oscilaciones

$$T=2\pi\sqrt{\frac{\ell}{g}}$$

Con $\ell=2{,}5\ \text{m}$:

$$T=2\pi\sqrt{\frac{2{,}5}{9{,}81}}\approx 3{,}17\ \text{s}$$

$$\boxed{T\approx 3{,}17\ \text{s}}$$

Además,

$$\theta_0\simeq \frac{d}{\ell}=\frac{0{,}30}{2{,}5}=0{,}12\ \text{rad}\approx 6{,}9^\circ$$

La aproximación de pequeñas oscilaciones es razonable.

---
## Problema 2

Se puede usar el alambre como un péndulo simple:

1. Se desplaza ligeramente el extremo inferior.
2. Se mide el período $T$ de oscilación.
3. Se usa

$$T=2\pi\sqrt{\frac{L}{g}}$$

de donde

$$L=g\left(\frac{T}{2\pi}\right)^2$$

$$\boxed{L=g\left(\dfrac{T}{2\pi}\right)^2}$$

---
## Problema 3

La figura corresponde al péndulo que, al pasar por $B$, engancha un tope situado a distancia $d$ por debajo del punto de suspensión. A la derecha oscila con radio $\ell-d$.

### a) Ángulo $\theta_C$

Conservación de energía entre $A$ y $C$:

$$mg\ell(1-\cos\theta_A)=mg(\ell-d)(1-\cos\theta_C)$$

Entonces:

$$1-\cos\theta_C=\frac{\ell}{\ell-d}(1-\cos\theta_A)$$

$$\boxed{\cos\theta_C=1-\frac{\ell}{\ell-d}(1-\cos\theta_A)}$$

### b) Tiempo para volver a $A$

Para pequeñas oscilaciones:

- de $A$ a $B$: un cuarto de período de longitud $\ell$;
- de $B$ a $C$: un cuarto de período de longitud $\ell-d$;
- de $C$ a $B$: otro cuarto de período de longitud $\ell-d$;
- de $B$ a $A$: otro cuarto de período de longitud $\ell$.

Entonces:

$$t=\frac{T_\ell}{2}+\frac{T_{\ell-d}}{2}=\pi\sqrt{\frac{\ell}{g}}+\pi\sqrt{\frac{\ell-d}{g}}$$

$$\boxed{t=\pi\left(\sqrt{\frac{\ell}{g}}+\sqrt{\frac{\ell-d}{g}}\right)}$$

Con $\ell=1{,}32\ \text{m}$, $d=0{,}66\ \text{m}$ y $\theta_A=5^\circ$:

$$\theta_C\approx 7{,}07^\circ$$

$$t\approx \pi\left(\sqrt{\frac{1{,}32}{9{,}81}}+\sqrt{\frac{0{,}66}{9{,}81}}\right)\approx 1{,}97\ \text{s}$$

$$\boxed{\theta_C\approx 7{,}07^\circ},\qquad \boxed{t\approx 1{,}97\ \text{s}}$$

Sí, para esos valores las oscilaciones son pequeñas, porque los ángulos son de apenas unos pocos grados y vale bien la aproximación $\sin\theta\simeq\theta$.

---
## Problema 4

### a) Velocidad mínima en el punto más alto

En el punto más alto, para que la cuerda no se afloje:

$$T\ge 0$$

En el caso límite, $T=0$, y la gravedad sola proporciona la aceleración centrípeta:

$$mg=\frac{mv^2}{L}$$

Luego:

$$\boxed{v_{\text{alto,min}}=\sqrt{gL}}$$

### b) Velocidad en el punto más alto si en el punto más bajo $T=6P$

Como $P=mg$, en el punto más bajo:

$$T-mg=\frac{mv_B^2}{L}$$

$$6mg-mg=\frac{mv_B^2}{L}$$

$$v_B^2=5gL$$

Conservación de energía entre el punto más bajo y el más alto:

$$\frac12 mv_B^2=\frac12 mv_A^2+2mgL$$

$$\frac12 m(5gL)=\frac12 mv_A^2+2mgL$$

$$v_A^2=gL$$

$$\boxed{v_A=\sqrt{gL}}$$

### c) Aceleraciones en la posición horizontal

En la posición horizontal, la componente tangencial del peso es todo el peso:

$$a_t=g$$

Desde el punto más bajo hasta la horizontal se asciende una altura $L$:

$$\frac12 mv_B^2=\frac12 mv_h^2+mgL$$

$$\frac12 m(5gL)=\frac12 mv_h^2+mgL$$

$$v_h^2=3gL$$

Entonces la aceleración normal es

$$a_n=\frac{v_h^2}{L}=3g$$

$$\boxed{a_t=g},\qquad \boxed{a_n=3g}$$

---
## Problema 5

Tomo $\alpha$ medido desde la vertical inferior.

### a) Coeficiente de rozamiento estático

Si la masa gira solidariamente con el cilindro, su aceleración centrípeta es $\omega^2R$ hacia el centro.

En la dirección tangencial:

$$f_s=mg\sin\alpha$$

En la dirección radial:

$$N=m\omega^2R+mg\cos\alpha$$

Cuando comienza a deslizar en $\alpha=\alpha_e$:

$$f_s=\mu_s N$$

Por lo tanto:

$$\mu_s=\frac{mg\sin\alpha_e}{m\omega^2R+mg\cos\alpha_e}$$

$$\boxed{\mu_s=\frac{\sin\alpha_e}{\dfrac{\omega^2R}{g}+\cos\alpha_e}}$$

### b) Coeficiente de rozamiento dinámico

En la nueva posición angular $\alpha_d$, el rozamiento dinámico vale

$$f_d=\mu_d N$$

y debe equilibrar la componente tangencial del peso:

$$\mu_d N=mg\sin\alpha_d$$

Con

$$N=m\omega^2R+mg\cos\alpha_d$$

se obtiene

$$\boxed{\mu_d=\frac{\sin\alpha_d}{\dfrac{\omega^2R}{g}+\cos\alpha_d}}$$

---
## Problema 6

La figura corresponde al movimiento sin rozamiento en el interior de una superficie cilíndrica.

Si el cuerpo parte del reposo desde $A$, al llegar a un punto $B$ que forma un ángulo $\alpha$ con la horizontal:

### Energía

La caída vertical es

$$\Delta h=R\sin\alpha$$

Entonces:

$$mgR\sin\alpha=\frac12 mv^2$$

$$v^2=2gR\sin\alpha$$

Como $\omega=v/R$:

$$\boxed{\omega=\sqrt{\frac{2g\sin\alpha}{R}}}$$

### Fuerza de reacción

En la dirección radial hacia el centro:

$$F_r-mg\sin\alpha=\frac{mv^2}{R}$$

Sustituyendo $v^2=2gR\sin\alpha$:

$$F_r-mg\sin\alpha=2mg\sin\alpha$$

$$\boxed{F_r=3mg\sin\alpha}$$

---
## Problema 7

Tomo $\theta$ como el ángulo medido desde el punto más alto $A$.

### a) Fuerza de reacción y velocidad en un punto arbitrario $P$

Conservación de energía entre el punto más bajo $B$ y un punto $P$:

$$\frac12 mv_B^2=\frac12 mv^2+mgR(1+\cos\theta)$$

De aquí:

$$v^2(\theta)=v_B^2-2gR(1+\cos\theta)$$

$$\boxed{v(\theta)=\sqrt{v_B^2-2gR(1+\cos\theta)}}$$

En la dirección radial hacia el centro:

$$F_r+mg\cos\theta=\frac{mv^2}{R}$$

Entonces:

$$F_r(\theta)=m\left(\frac{v^2}{R}-g\cos\theta\right)$$

Usando la expresión de $v^2$:

$$\boxed{F_r(\theta)=m\left(\frac{v_B^2}{R}-2g-3g\cos\theta\right)}$$

### b) Punto de desprendimiento

En $C$ se cumple $F_r=0$:

$$\frac{v_C^2}{R}=g\cos\theta_C$$

Combinando con energía:

$$v_B^2-2gR(1+\cos\theta_C)=gR\cos\theta_C$$

Por lo tanto:

$$\boxed{\cos\theta_C=\frac{v_B^2/(gR)-2}{3}}$$

No, no puede ser $\theta_C>\pi/2$, porque eso haría $\cos\theta_C<0$ y exigiría $v_C^2<0$ en la condición de desprendimiento.

Interpretación: el desprendimiento sólo puede ocurrir mientras la gravedad tenga componente radial hacia el centro.

### c) Trayectoria entre $C$ y $C'$

Una vez que se despega de la vía, la partícula queda sometida sólo a la gravedad.

$$\boxed{\text{Entre }C\text{ y }C'\text{ describe una trayectoria parabólica.}}$$

### d) Velocidad mínima en $B$ para dar una vuelta completa

En el caso límite, en el punto más alto $A$:

$$F_r=0\Rightarrow v_A^2=gR$$

Conservación de energía entre $B$ y $A$:

$$\frac12 mv_B^2=\frac12 m(gR)+2mgR$$

$$v_B^2=5gR$$

$$\boxed{v_{B,\min}=\sqrt{5gR}}$$

---
## Problema 8

La fuerza es variable:

$$F(x)=6x\ \text{N}$$

y

$$\cos\theta=0{,}70-0{,}02x$$

### a) Trabajo realizado

Como el desplazamiento es horizontal:

$$W=\int_{10}^{20}F(x)\cos\theta(x)\,dx$$

$$W=\int_{10}^{20}6x(0{,}70-0{,}02x)\,dx$$

$$W=\int_{10}^{20}(4{,}2x-0{,}12x^2)\,dx$$

$$W=\left[2{,}1x^2-0{,}04x^3\right]_{10}^{20}=350\ \text{J}$$

$$\boxed{W=350\ \text{J}}$$

### b) Velocidad final

Por teorema trabajo-energía, y como parte del reposo:

$$W=\Delta K=\frac12 mv_f^2$$

Con $m=20\ \text{kg}$:

$$350=\frac12\cdot 20\,v_f^2$$

$$v_f=\sqrt{35}\approx 5{,}92\ \text{m/s}$$

$$\boxed{v_f\approx 5{,}92\ \text{m/s}}$$

---
## Problema 9

Datos:

$$m=1\ \text{kg},\qquad h=1\ \text{m},\qquad \theta=30^\circ$$

### a) Sin rozamiento

$$mgh=\frac12 mv^2$$

$$v=\sqrt{2gh}=\sqrt{2\cdot 9{,}81\cdot 1}\approx 4{,}43\ \text{m/s}$$

$$\boxed{v\approx 4{,}43\ \text{m/s}}$$

### b) Con $\mu_d=0{,}3$

La longitud recorrida sobre el plano es

$$s=\frac{h}{\sin30^\circ}=2\ \text{m}$$

El trabajo de rozamiento es

$$W_r=-\mu_d mg\cos30^\circ\, s$$

Entonces:

$$mgh-\mu_d mg\cos30^\circ\, s=\frac12 mv^2$$

Numéricamente:

$$v\approx 3{,}07\ \text{m/s}$$

$$\boxed{v\approx 3{,}07\ \text{m/s}}$$

### c) Comparación con caída libre

En caída libre desde la misma altura:

$$v=\sqrt{2gh}$$

que es exactamente el mismo valor obtenido en el inciso a).

$$\boxed{\text{Sin rozamiento, la velocidad final es la misma que en caída libre.}}$$

### d) Pérdida de energía

La pérdida de energía mecánica es el módulo del trabajo de rozamiento:

$$\Delta E=\mu_d mg\cos30^\circ\, s$$

$$\Delta E\approx 5{,}10\ \text{J}$$

$$\boxed{\Delta E\approx 5{,}10\ \text{J}}$$

---
## Problema 10

Sea $x$ la compresión máxima.

### a) Relación entre $v_0$ y $x$

En el choque inelástico:

$$mv_0=(M+m)V$$

donde $V$ es la velocidad inmediatamente posterior al choque.

Luego:

$$V=\frac{m}{M+m}v_0$$

Desde ese instante hasta la compresión máxima:

$$\frac12 (M+m)V^2=\frac12 kx^2+\mu_d(M+m)gx$$

Sustituyendo $V$:

$$\frac12 \frac{m^2}{M+m}v_0^2=\frac12 kx^2+\mu_d(M+m)gx$$

Entonces:

$$\boxed{v_0=\frac{1}{m}\sqrt{(M+m)\left[kx^2+2\mu_d(M+m)gx\right]}}$$

### b) Diagrama y análisis cualitativo

Durante el choque:

- se conserva el momento lineal;
- no se conserva la energía mecánica.

Luego, el sistema bloque+bala se mueve comprimiendo el resorte mientras el rozamiento disipa energía.  
La energía cinética se transforma en:

- energía potencial elástica del resorte;
- energía disipada por rozamiento.

Después de la compresión máxima, el resorte intenta devolver al bloque, pero el rozamiento sigue disipando energía, de modo que las oscilaciones se amortiguan hasta detenerse.

---
## Problema 11

Como $F(x)=-\,dV/dx$, integramos por tramos.

### Para $x>0$

$$F=-kx\Rightarrow \frac{dV}{dx}=kx$$

$$V(x)=\frac12 kx^2+C_1$$

### Para $x<0$

$$F=-ex^3\Rightarrow \frac{dV}{dx}=ex^3$$

$$V(x)=\frac{e}{4}x^4+C_2$$

Tomando $V(0)=0$ y continuidad en $x=0$:

$$C_1=C_2=0$$

Por lo tanto:

$$\boxed{
V(x)=
\begin{cases}
\dfrac{e}{4}x^4, & x<0\\[6pt]
\dfrac12 kx^2, & x\ge 0
\end{cases}
}$$

---
## Problema 12

Del gráfico se lee:

$$V(x_A=2)=8\ \text{erg},\qquad V(x_B=3)=4\ \text{erg},\qquad V(x_C=7)=10\ \text{erg}$$

y además

$$V(\infty)=0$$

La energía total inicial es

$$E=16\ \text{erg}$$

### a) Energía cinética en los puntos pedidos

Como $K=E-V$:

$$K_A=16-8=8\ \text{erg}$$
$$K_B=16-4=12\ \text{erg}$$
$$K_C=16-10=6\ \text{erg}$$
$$K_{\infty}=16-0=16\ \text{erg}$$

$$\boxed{K_A=8\ \text{erg}}$$
$$\boxed{K_B=12\ \text{erg}}$$
$$\boxed{K_C=6\ \text{erg}}$$
$$\boxed{K_{\infty}=16\ \text{erg}}$$

### b) Si al pasar por $x_A$ pierde la mitad de su energía

La nueva energía total pasa a ser

$$E'=8\ \text{erg}$$

Pero en $x_A$ vale justamente

$$V(x_A)=8\ \text{erg}$$

Entonces inmediatamente después de la pérdida:

$$K'=E'-V(x_A)=0$$

La partícula se detiene en $x_A$ y cambia de sentido.  
Luego quedará atrapada entre:

- el punto $x_A=2$, que es un punto de retorno;
- un segundo punto $x_D$ a la derecha tal que $V(x_D)=8\ \text{erg}$.

Del gráfico, ese segundo punto cumple

$$3<x_D<7$$

Así, el movimiento posterior es oscilatorio entre esos dos puntos de retorno.

$$\boxed{\text{Luego se mueve sólo en el intervalo }2\le x\le x_D,\ \text{con }V(x_D)=8\ \text{erg}}$$

---
## Problema 13

La energía potencial es

$$V(x)=6x^2-3x^3=3x^2(2-x)$$

### a) Gráfico de $V(x)$

Puntos notables:

$$V(0)=0,\qquad V(2)=0$$

Para extremos:

$$V'(x)=12x-9x^2=3x(4-3x)$$

Luego:

$$x=0,\qquad x=\frac43$$

Además:

$$V''(x)=12-18x$$

Así:

- en $x=0$ hay un mínimo;
- en $x=4/3$ hay un máximo.

El valor máximo es

$$V\!\left(\frac43\right)=6\frac{16}{9}-3\frac{64}{27}=\frac{32}{9}\ \text{J}$$

### b) Fuerza

$$F(x)=-\frac{dV}{dx}=-(12x-9x^2)=9x^2-12x$$

$$\boxed{F(x)=9x^2-12x=3x(3x-4)}$$

### c) Máxima energía mecánica para movimiento oscilatorio

Para que haya oscilación, la partícula debe quedar atrapada en el pozo alrededor de $x=0$, así que su energía no puede superar el máximo de la barrera.

$$\boxed{E_{\max,\text{osc}}=\frac{32}{9}\ \text{J}\approx 3{,}56\ \text{J}}$$

### d) Movimientos posibles

Si $E<32/9\ \text{J}$:

- existe una región acotada alrededor de $x=0$ donde el movimiento puede ser oscilatorio;
- también existe una región no acotada a la derecha de la barrera, si la partícula parte allí.

Si $E>32/9\ \text{J}$:

- la barrera ya no encierra a la partícula;
- el movimiento deja de ser oscilatorio y pasa a ser no acotado.

En el caso límite $E=32/9\ \text{J}$, la partícula puede aproximarse asintóticamente al punto inestable $x=4/3$.
