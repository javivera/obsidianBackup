# Práctico 3 — Transformaciones afines y función cuadrado

>[!exercise] Ejercicio 1
>Sea $f(z)=az+b$ con $a,b\in\mathbb{C}$.
>- **(a)** Determine la imagen por $f$ de rectas y circunferencias.
>- **(b)** ¿Es lo mismo si se considera la función $g(z)=a\overline{z}+b$?
>- **(c)** En particular determine la imagen por $f(z)=(1-i)z-1+2i$ de la región triangular determinada por los puntos $z_1=0$, $z_2=2$, $z_3=2+2i$.
>Justifique.
>
>>[!Proof]- Demostración
>>- (a)
>>	1. **Caso $a=0$.** La función es constante: $f(z)=b$. Tanto las rectas como las circunferencias tienen como imagen el único punto $b$. En lo que sigue suponemos $a\neq0$.
>>	2. **Rectas.** Una recta se parametriza como $z(t)=pt+q$, con $p\neq0$ y $t\in\mathbb{R}$. Entonces $$f(z(t))=a(pt+q)+b=(ap)t+(aq+b).$$ Como $ap\neq0$ y $t$ recorre todo $\mathbb{R}$, esta expresión parametriza toda una recta, de dirección $ap$ y que pasa por $aq+b$.
>>	3. **Circunferencias.** Una circunferencia de centro $c$ y radio $r>0$ se parametriza como $z(t)=c+re^{it}$, con $0\leq t<2\pi$. Escribiendo $a=|a|e^{i\theta}$, obtenemos $$f(z(t))=a(c+re^{it})+b=(ac+b)+|a|r e^{i(t+\theta)}.$$ Como $t+\theta$ recorre una vuelta completa, esta expresión parametriza toda la circunferencia de centro $ac+b$ y radio $|a|r>0$.
>>- (b)
>>	1. **Función con conjugación: caso $a=0$.** Para $g(z)=a\overline z+b$, si $a=0$ la imagen es nuevamente el único punto $b$. En los siguientes pasos suponemos $a\neq0$.
>>	2. **Función con conjugación: rectas.** Para $z(t)=pt+q$, con $p\neq0$ y $t\in\mathbb{R}$, como $t$ es real, $$g(z(t))=a\overline{pt+q}+b=(a\overline p)t+(a\overline q+b).$$ Como $a\overline p\neq0$ y $t$ recorre todo $\mathbb{R}$, la imagen es toda una recta.
>>	3. **Función con conjugación: circunferencias.** Para $z(t)=c+re^{it}$, con $r>0$ y $0\leq t<2\pi$, escribimos $a=|a|e^{i\theta}$ y obtenemos $$g(z(t))=a\overline{c+re^{it}}+b=(a\overline c+b)+|a|r e^{i(\theta-t)}.$$ Como $\theta-t$ recorre una vuelta completa, ahora en sentido contrario, la imagen es toda la circunferencia de centro $a\overline c+b$ y radio $|a|r>0$. Por lo tanto, $g$ también manda rectas en rectas y circunferencias en circunferencias, aunque no necesariamente a las mismas que $f$.
>>- (c)
>>	1. **Región triangular: parametrización de los lados.** Para $f(z)=(1-i)z-1+2i$, parametrizamos los tres lados del triángulo original como $$\begin{aligned}z_{12}(t)&=t,\\z_{23}(t)&=2+it,\\z_{13}(t)&=t+it,\end{aligned}\qquad 0\leq t\leq2.$$ Restringimos $t$ a este intervalo para recorrer los segmentos, no las rectas completas.
>>	2. **Imagen de los lados.** Evaluamos y escribimos cada resultado como un punto más $t$ por una dirección: $$\begin{aligned}f(z_{12}(t))&=(1-i)t-1+2i=(-1+2i)+t(1-i),\\f(z_{23}(t))&=(1-i)(2+it)-1+2i=1+t(1+i),\\f(z_{13}(t))&=(1-i)(t+it)-1+2i=(-1+2i)+2t.\end{aligned}$$
>>	3. **Forma en coordenadas para graficar.** Separando parte real e imaginaria, obtenemos $$\begin{aligned}(x,y)&=(-1,2)+t(1,-1),\\(x,y)&=(1,0)+t(1,1),\\(x,y)&=(-1,2)+t(2,0),\end{aligned}\qquad 0\leq t\leq2.$$ Para graficar cada segmento, marcamos sus extremos tomando $t=0$ y $t=2$ y los unimos. El primero une $(-1,2)$ con $(1,0)$; el segundo une $(1,0)$ con $(3,2)$; el tercero une $(-1,2)$ con $(3,2)$.
>>	4. **Otra forma de verlo:** Como $1-i=\sqrt2 e^{-i\pi/4}$, la función es una rotación de $45^\circ$ en sentido horario, una ampliación de factor $\sqrt2$ y una traslación por $(-1,2)$. Estas transformaciones llevan el interior del triángulo al interior del triángulo imagen. Por lo tanto, la imagen es la región triangular de vértices $(-1,2)$, $(1,0)$ y $(3,2)$, con sus lados e interior.

>[!exercise] Ejercicio 2
>Determine la imagen por $f(z)=z^2$ de los siguientes conjuntos. En cada caso justifique.
>- **(a)** Rectas que pasan por el origen y circunferencias centradas en el origen.
>- **(b)** El primer cuadrante en el plano complejo.
>- **(c)** La región triangular determinada por los puntos $z_1=0$, $z_2=2i$, $z_3=-1+2i$.
>- **(d)** $U_1=\{z=x+iy:x^2-y^2=2\}$ y $U_2=\{z=x+iy:xy=2\}$.
>
>>[!Proof]- Resolución
>>**Herramientas generales para todo el ejercicio.** Son dos formas de escribir la misma función $f(z)=z^2$; elegimos la más conveniente según el conjunto.
>>1. **Forma polar, útil en (a) y (b):** $$z=re^{i\theta}\quad\Longrightarrow\quad f(z)=r^2e^{2i\theta}.$$ El módulo se eleva al cuadrado y el argumento se duplica.
>>2. **Forma cartesiana, útil en (c) y (d):** escribiendo $z=x+iy$ y su imagen $w=u+iv$, $$w=(x+iy)^2=x^2-y^2+2xy\,i,\qquad u=x^2-y^2,\quad v=2xy.$$
>>
>>- (a)
>>	1. **Rectas por el origen.** Sea $L=\{te^{i\theta_0}:t\in\mathbb R\}$. Entonces $$f(te^{i\theta_0})=t^2e^{2i\theta_0}.$$ Como $t^2$ recorre todo $[0,\infty)$, resulta $$\boxed{f(L)=\{se^{2i\theta_0}:s\geq0\}.}$$ Es una **semirrecta cerrada con origen en $0$**, no una recta: los dos sentidos de la recta original se transforman en el mismo sentido, pues $f(z)=f(-z)$.
>>	2. **Circunferencias centradas en el origen.** Sea $C_R=\{Re^{i\theta}:0\leq\theta<2\pi\}$, con $R>0$. Entonces $$f(Re^{i\theta})=R^2e^{2i\theta},\qquad \boxed{f(C_R)=\{w\in\mathbb C:|w|=R^2\}.}$$ Se obtiene toda la circunferencia de centro $0$ y radio $R^2$: para cualquier $R^2e^{i\varphi}$ basta tomar $z=Re^{i\varphi/2}$. Al recorrer una vez la circunferencia original, la imagen da dos vueltas.
>>- (b)
>>	1. **Cuadrante abierto.** En notación polar, $$Q=\{re^{i\theta}:r>0,\ 0<\theta<\pi/2\}.$$ Como $f(re^{i\theta})=r^2e^{2i\theta}$, al escribir $\rho=r^2$ y $\varphi=2\theta$ obtenemos $$\boxed{f(Q)=\{\rho e^{i\varphi}:\rho>0,\ 0<\varphi<\pi\},}$$ el semiplano superior abierto.
>>	2. **Justificación de que se alcanza todo.** Dado $w=\rho e^{i\varphi}$ con $\rho>0$ y $0<\varphi<\pi$, el número $z=\sqrt\rho\,e^{i\varphi/2}$ pertenece a $Q$ y satisface $z^2=w$.
>>	3. **Si se incluyen los ejes.** Para el cuadrante cerrado $$\overline Q=\{re^{i\theta}:r\geq0,\ 0\leq\theta\leq\pi/2\},$$ el mismo cálculo y la misma elección de preimagen dan $$\boxed{f(\overline Q)=\{\rho e^{i\varphi}:\rho\geq0,\ 0\leq\varphi\leq\pi\},}$$ el semiplano superior cerrado. Los ángulos $\theta=0$ y $\theta=\pi/2$ se transforman, respectivamente, en $\varphi=0$ y $\varphi=\pi$; además, $r=0$ da $\rho=0$.
>>- (c)
>>	1. **Descripción del triángulo.** Consideramos la región con sus lados e interior: $$T=\{x+iy:0\leq y\leq2,\ -y/2\leq x\leq0\}.$$ Sus lados están sobre $x=0$, $y=2$ y $y=-2x$. Usamos $u=x^2-y^2$ y $v=2xy$.
>>	2. **Lado de $0$ a $2i$.** Parametrizamos $z=it$, con $0\leq t\leq2$. Entonces $$w=-t^2.$$ La imagen es el segmento del eje real que une $0$ con $-4$, es decir, $v=0$ y $-4\leq u\leq0$.
>>	3. **Lado de $2i$ a $-1+2i$.** Parametrizamos $z=-t+2i$, con $0\leq t\leq1$. Entonces $$w=t^2-4-4ti,\qquad u=t^2-4,\quad v=-4t.$$ Eliminando $t$, obtenemos el arco de parábola $$\boxed{u=\frac{v^2}{16}-4,\qquad -4\leq v\leq0,}$$ que une $-4$ con $-3-4i$.
>>	4. **Lado de $0$ a $-1+2i$.** Parametrizamos $z=t(-1+2i)$, con $0\leq t\leq1$. Entonces $$w=t^2(-3-4i).$$ La imagen es el segmento de $0$ a $-3-4i$, cuya ecuación es $$u=\frac34v,\qquad -4\leq v\leq0.$$
>>	5. **Región candidata.** Las tres curvas anteriores delimitan la región $$\boxed{f(T)=\left\{u+iv:-4\leq v\leq0,\quad \frac{v^2}{16}-4\leq u\leq\frac34v\right\}.}$$ Es un triángulo curvilíneo con vértices $0$, $-4$ y $-3-4i$: dos lados son segmentos y el tercero es un arco de parábola. Para justificar la igualdad no alcanza con calcular los bordes; verificamos también todos los puntos de la región.
>>	6. **Secciones horizontales con $v<0$.** Fijamos $q=-v>0$. Como $v=2xy=-q$, necesariamente $y>0$ y $x=-q/(2y)$. La condición $-y/2\leq x\leq0$ equivale a $q\leq y^2$. Junto con $y\leq2$, esto da $$0<q\leq4,\qquad q\leq a:=y^2\leq4.$$ Recíprocamente, para cualquier $a\in[q,4]$, los valores $y=\sqrt a$ y $x=-q/(2\sqrt a)$ determinan un punto de $T$ con parte imaginaria de su cuadrado igual a $-q$.
>>	7. **Valores de $u$ en cada sección.** Para esos puntos, $$u=\frac{q^2}{4a}-a.$$ Esta expresión es continua y estrictamente decreciente en $a>0$; al aumentar $a$, el primer término disminuye y el segundo también. En $a=q$ vale $-3q/4$ y en $a=4$ vale $q^2/16-4$. Por el teorema del valor intermedio recorre exactamente $$\frac{q^2}{16}-4\leq u\leq-\frac{3q}{4},$$ que es la desigualdad anunciada al sustituir $q=-v$. Esto prueba ambas inclusiones para $v<0$.
>>	8. **Sección con $v=0$.** En $T$, la igualdad $xy=0$ obliga a $x=0$ (si $y=0$, también $x=0$). Así, $u=-y^2$ recorre exactamente $[-4,0]$. Queda probada la descripción completa de $f(T)$. Si por región triangular se entiende únicamente el interior, su imagen se describe haciendo estrictas las desigualdades: $$-4<v<0,\qquad \frac{v^2}{16}-4<u<\frac34v.$$
>>- (d)
>>	1. **Distinguir el punto original de su imagen.** Escribimos $z=x+iy$ para un punto del conjunto original y $w=f(z)=u+iv$ para su imagen. Así, $x,y$ son las coordenadas de $z$, mientras que $u,v$ son las coordenadas de $w$. Al desarrollar el cuadrado, $$w=f(z)=(x+iy)^2=x^2+2xy\,i-y^2=(x^2-y^2)+i(2xy).$$ Comparando con $w=u+iv$, obtenemos $$u=x^2-y^2,\qquad v=2xy.$$
>>	2. **Imagen de $U_1$: una inclusión.** Tomamos cualquier $z=x+iy\in U_1$. Por la definición de $U_1$, sus coordenadas satisfacen $x^2-y^2=2$. Sustituyendo esta igualdad en la expresión de su imagen, $$f(z)=(x^2-y^2)+i(2xy)=2+i(2xy).$$ Por lo tanto, la parte real de $f(z)$ es siempre $2$, mientras que su parte imaginaria es el número real $v=2xy$. Esto significa que toda imagen de un punto de $U_1$ pertenece a la recta vertical de parte real $2$: $$f(U_1)\subseteq\{2+iv:v\in\mathbb R\}.$$ Por ahora solo probamos una inclusión: todavía falta verificar que **cada punto de esa recta** es la imagen de algún punto de $U_1$.
>>	3. **Imagen de $U_1$: se alcanza toda la recta.** Dado $v\in\mathbb R$, tomamos $$x=\sqrt{1+\sqrt{1+v^2/4}},\qquad y=\frac{v}{2x}.$$ Como $x^2=1+\sqrt{1+v^2/4}$, se tiene $y^2=\sqrt{1+v^2/4}-1$. En consecuencia, $x^2-y^2=2$ y $2xy=v$. Así, $z=x+iy\in U_1$ y $z^2=2+iv$. Concluimos que $$\boxed{f(U_1)=\{w:\operatorname{Re}w=2\},}$$ la recta vertical $u=2$.
>>	4. **Imagen de $U_2$: una inclusión.** Ahora tomamos cualquier $z=x+iy\in U_2$, por lo que $xy=2$. Sustituyendo en la fórmula del cuadrado, $$f(z)=(x^2-y^2)+i(2xy)=(x^2-y^2)+4i.$$ Su parte imaginaria es siempre $4$, mientras que su parte real es el número real $u=x^2-y^2$. Por eso, toda imagen pertenece a la recta horizontal de parte imaginaria $4$: $$f(U_2)\subseteq\{u+4i:u\in\mathbb R\}.$$ Nuevamente falta probar que se alcanza toda la recta.
>>	5. **Imagen de $U_2$: se alcanza toda la recta.** Dado $u\in\mathbb R$, tomamos $$a=\frac{u+\sqrt{u^2+16}}2>0,\qquad x=\sqrt a,\qquad y=\frac2{\sqrt a}.$$ Se verifica $xy=2$ y, como $a^2-ua-4=0$, también $x^2-y^2=a-4/a=u$. Por lo tanto, $z=x+iy\in U_2$ y $z^2=u+4i$. Concluimos que $$\boxed{f(U_2)=\{w:\operatorname{Im}w=4\},}$$ la recta horizontal $v=4$.

