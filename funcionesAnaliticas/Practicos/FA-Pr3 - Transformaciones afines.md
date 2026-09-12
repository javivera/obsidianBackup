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

>[!exercise] Ejercicio 3
>Determine la imagen por $f(z)=\exp(z)$ de los siguientes conjuntos. En cada caso justifique.
>- **(a)** $U_1=\{z\in\mathbb{C}:\operatorname{Re}(z)=a_0\}$ con $a_0\in\mathbb{R}$ fijo.
>- **(b)** $U_2=\{z\in\mathbb{C}:\operatorname{Im}(z)=b_0\}$ con $b_0\in\mathbb{R}$ fijo.
>>[!Proof]- Resolución
>>- (a)
>>	1. **Parametrización y módulo constante.** Escribimos $$U_1=\{a_0+iy:y\in\mathbb{R}\}.$$ Por la fórmula exponencial, $$f(a_0+iy)=e^{a_0+iy}=e^{a_0}e^{iy}=e^{a_0}(\cos y+i\sin y).$$ Luego $$|f(a_0+iy)|=e^{a_0}.$$ Por lo tanto $$f(U_1)\subseteq\{w\in\mathbb{C}:|w|=e^{a_0}\}.$$
>>	2. **Se alcanza toda la circunferencia.** Sea $w\in\mathbb{C}$ con $|w|=e^{a_0}$. Escribimos $$w=e^{a_0}e^{i\theta}$$ para algún $\theta\in\mathbb{R}$. Tomando $$z=a_0+i\theta\in U_1$$ se tiene $$f(z)=e^{a_0}e^{i\theta}=w.$$ Concluimos que $$\boxed{f(U_1)=\{w\in\mathbb{C}:|w|=e^{a_0}\},}$$ la circunferencia de centro $0$ y radio $e^{a_0}$ (recorrida infinitas veces por la periodicidad $2\pi i$).
>>- (b)
>>	1. **Parametrización y argumento constante.** Escribimos $$U_2=\{x+ib_0:x\in\mathbb{R}\}.$$ Por la fórmula exponencial, $$f(x+ib_0)=e^{x+ib_0}=e^xe^{ib_0}.$$ Como $e^x>0$ recorre todo $(0,+\infty)$, cada imagen tiene argumento $b_0$ módulo $2\pi$. Por lo tanto $$f(U_2)\subseteq\{re^{ib_0}:r>0\}.$$
>>	2. **Se alcanza toda la semirrecta.** Sea $w=re^{ib_0}$ con $r>0$. Tomando $$x=\ln r,\qquad z=x+ib_0\in U_2$$ se tiene $$f(z)=e^{\ln r}e^{ib_0}=re^{ib_0}=w.$$ Concluimos que $$\boxed{f(U_2)=\{re^{ib_0}:r>0\},}$$ la semirrecta abierta desde $0$ (excluido) en la dirección de ángulo $b_0$; no es la recta completa, solo el rayo de un lado.

>[!Exercise] Ejercicio 4
>Describe la imagen por $f(z)=\frac1z$ de rectas y circunferencias.
>>[!Proof]-
>>1. Como $f(z)=\frac1z$ no está definida en $z=0$, trabajamos con $$f:\mathbb C\setminus\{0\}\to\mathbb C\setminus\{0\}.$$
>>2. Escribimos $z=x+iy$ y $w=f(z)=u+iv$. Como $z=\frac1w$, $$z=\frac{1}{u+iv}=\frac{u-iv}{u^2+v^2},$$ luego $$x=\frac{u}{u^2+v^2},\qquad y=-\frac{v}{u^2+v^2}.$$
>>- **(a) Imagen de una recta.**
>>	1. Toda recta puede escribirse como $$L=\{x+iy:ax+by+c=0\},\qquad (a,b)\neq(0,0).$$
>>	2. Si $z\in L\cap(\mathbb C\setminus\{0\})$ y $w=f(z)=u+iv$, sustituyendo las expresiones de $x$ e $y$ obtenemos $$a\frac{u}{u^2+v^2}-b\frac{v}{u^2+v^2}+c=0.$$
>>	3. Como $w\neq0$, podemos multiplicar por $u^2+v^2$ y resulta $$au-bv+c(u^2+v^2)=0.$$
>>	4. Si $c=0$, la recta original pasa por $0$ y la ecuación de la imagen queda $$au-bv=0,$$ que es otra recta que pasa por $0$. 
>>	5. Sin embargo, como $f(z)\neq0$ para todo $z\neq0$, el origen no pertenece a la imagen. Por tanto, $$\boxed{f(L\setminus\{0\})=\{u+iv:au-bv=0\}\setminus\{0\}.}$$
>>	6. Si $c\neq0$, la recta original no pasa por $0$. Dividiendo la ecuación obtenida por $c$ $$u^2+v^2+\frac ac\,u-\frac bc\,v=0.$$
>>	7. Completando cuadrados, $$\left(u+\frac{a}{2c}\right)^2+\left(v-\frac{b}{2c}\right)^2=\frac{a^2+b^2}{4c^2}.$$esta es una circunferencia que pasa por $0$. 
>>	8. Como $0$ no puede pertenecer a la imagen de $f$, $$\boxed{\text{recta que no pasa por }0\longmapsto\text{circunferencia que pasa por }0\text{, sin el punto }0.}$$
>>- **(b) Imagen de una circunferencia.**
>>	1. Toda circunferencia de centro $(x_0,y_0)$ y radio $R>0$ satisface $$(x-x_0)^2+(y-y_0)^2=R^2.$$
>>	2. Desarrollando puede escribirse como $$x^2+y^2+Ax+By+C=0,$$ con $A=-2x_{0},B=-2y_{0},C=x_{0}^{2}+y_{0}^{2}-R^{2}$. (Sale abriendo cuadrados y agrupando)  
>>	3. Sustituyendo $x=\frac{u}{u^2+v^2}$ e $y=-\frac{v}{u^2+v^2}$ observamos primero que $$x^2+y^2=\frac{u^2+v^2}{(u^2+v^2)^2}=\frac1{u^2+v^2}.$$
>>	4. Por tanto, $$\frac1{u^2+v^2}+A\frac{u}{u^2+v^2}-B\frac{v}{u^2+v^2}+C=0.$$ Multiplicando por $u^2+v^2$, $$1+Au-Bv+C(u^2+v^2)=0.$$
>>	5. Si $C=0$, la circunferencia original pasa por $0$, pues al sustituir $x=y=0$ en su ecuación obtenemos precisamente $C=0$. La ecuación de la imagen queda $$1+Au-Bv=0,$$ que es una recta. Además, esta recta no pasa por $0$, ya que al sustituir $u=v=0$ queda $1=0$. Por tanto, $$\boxed{\text{circunferencia que pasa por }0\longmapsto\text{recta que no pasa por }0.}$$
>>	6. Si $C\neq0$, la circunferencia original no pasa por $0$. Dividiendo por $C$, $$u^2+v^2+\frac AC\,u-\frac BC\,v+\frac1C=0,$$ que es nuevamente la ecuación de una circunferencia. Como al sustituir $u=v=0$ obtenemos $\frac1C\neq0$, esta nueva circunferencia tampoco pasa por $0$. Por tanto, $$\boxed{\text{circunferencia que no pasa por }0\longmapsto\text{circunferencia que no pasa por }0.}$$
>>	7. Finalmente, las igualdades anteriores describen toda la imagen y no solamente una inclusión, porque $f$ es su propia inversa en $\mathbb C\setminus\{0\}$: $$f(f(z))=\frac{1}{1/z}=z.$$ En resumen, $$\boxed{\begin{aligned}\text{recta por }0&\longmapsto\text{recta por }0\text{, sin }0,\\\text{recta que no pasa por }0&\longmapsto\text{circunferencia por }0\text{, sin }0,\\\text{circunferencia por }0&\longmapsto\text{recta que no pasa por }0,\\\text{circunferencia que no pasa por }0&\longmapsto\text{circunferencia que no pasa por }0.\end{aligned}}$$

>[!Exercise] Ejercicio 5
>Mostrar que la función $f(z)=\frac{1-z}{1+z}$ mapea el disco $D=\{z\in\mathbb C:|z|<1\}$ en $H=\{w\in\mathbb C:\operatorname{Re}(w)>0\}$.
>>[!Proof]-
>>1. **Coordenadas y dominio.** Sea $z=x+iy\in D$, con $x,y\in\mathbb R$. Entonces $x^2+y^2=|z|^2<1$. Además, $1+z\neq0$, pues $z=-1$ tiene módulo $1$ y no pertenece a $D$. Por lo tanto, $f$ está bien definida en todo el disco.
>>2. **Multiplicación por el conjugado.** Multiplicamos tanto el numerador como el denominador por el conjugado del denominador, $1+x-iy$, para no cambiar el valor de la fracción: $$f(z)=\frac{1-x-iy}{1+x+iy}=\frac{(1-x-iy)(1+x-iy)}{(1+x+iy)(1+x-iy)}.$$
>>3. **Denominador real y positivo.** El producto de un número complejo por su conjugado es el cuadrado de su módulo: $$(1+x+iy)(1+x-iy)=(1+x)^2+y^2=|1+z|^2>0.$$ La desigualdad es estricta porque $1+z\neq0$.
>>4. **Desarrollo del numerador.** Aplicando la distributiva, $$\begin{aligned}(1-x-iy)(1+x-iy)&=(1-x)(1+x)-iy(1-x)-iy(1+x)+(-iy)^2\\&=1-x^2-2iy-y^2.\end{aligned}$$
>>5. **Parte real y conclusión.** Obtenemos $$f(z)=\frac{1-x^2-y^2-2iy}{(1+x)^2+y^2}.$$ entonces $$\Re (f(z))=\frac{1-x^2-y^2}{(1+x)^2+y^2}$$
>>6. Como el denominador es positivo siempre $$\Re(f(z))>0\iff 1-x^{2}-y^{2}>0\iff 1>x^{2}+y^{2}$$ que obviamente vale siempre que tomemos el disco como dominio. 
>>7. Con lo cual $$f(D)\subseteq \{ w\in \mathbb{C}:\Re(w)>0 \}$$como queriamos

>[!Exercise] Ejercicio 6
>- **(i)** Si $T$ es una transformación de Möbius, entonces las siguientes razones cruzadas coinciden: $$(z_1,z_2,z_3,z_4)=(Tz_1,Tz_2,Tz_3,Tz_4).$$
>- **(ii)** Si $(z_2,z_3,z_4)$ y $(w_2,w_3,w_4)$ son dos ternas de puntos distintos en $\mathbb C_\infty$, entonces existe una única transformación de Möbius $T$ tal que $Tz_j=w_j$, $j=2,3,4$.
>>[!Proof]- Demostración
>>- (i)
>>	1. **Forma general y estrategia.** Escribimos $$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0.$$ Queremos sustituir esta expresión en la razón cruzada y recuperar la original. Primero suponemos que todos los puntos y sus imágenes son finitos y que los denominadores que aparecen son no nulos.
>>	2. **Diferencia de dos imágenes.** Reduciendo a común denominador y desarrollando, $$\begin{aligned}T(u)-T(v)&=\frac{(au+b)(cv+d)-(av+b)(cu+d)}{(cu+d)(cv+d)}\\&=\frac{acu v+adu+bcv+bd-acuv-adv-bcu-bd}{(cu+d)(cv+d)}\\&=\frac{(ad-bc)(u-v)}{(cu+d)(cv+d)}.\end{aligned}$$
>>	3. **Primer cociente.** Aplicando la identidad anterior, se cancelan los factores $ad-bc$ y $cz_1+d$: $$\frac{Tz_1-Tz_3}{Tz_1-Tz_4}=\frac{\frac{(ad-bc)(z_1-z_3)}{(cz_1+d)(cz_3+d)}}{\frac{(ad-bc)(z_1-z_4)}{(cz_1+d)(cz_4+d)}}=\frac{z_1-z_3}{z_1-z_4}\frac{cz_4+d}{cz_3+d}.$$
>>	4. **Segundo cociente.** De la misma manera, $$\frac{Tz_2-Tz_4}{Tz_2-Tz_3}=\frac{\frac{(ad-bc)(z_2-z_4)}{(cz_2+d)(cz_4+d)}}{\frac{(ad-bc)(z_2-z_3)}{(cz_2+d)(cz_3+d)}}=\frac{z_2-z_4}{z_2-z_3}\frac{cz_3+d}{cz_4+d}.$$
>>	5. **Cancelación y conclusión.** Multiplicamos los dos cocientes. Los factores adicionales son recíprocos y se cancelan: $$\begin{aligned}(Tz_1,Tz_2,Tz_3,Tz_4)&=\frac{Tz_1-Tz_3}{Tz_1-Tz_4}\frac{Tz_2-Tz_4}{Tz_2-Tz_3}\\&=\frac{z_1-z_3}{z_1-z_4}\frac{cz_4+d}{cz_3+d}\frac{z_2-z_4}{z_2-z_3}\frac{cz_3+d}{cz_4+d}\\&=\frac{z_1-z_3}{z_1-z_4}\frac{z_2-z_4}{z_2-z_3}\\&=(z_1,z_2,z_3,z_4).\end{aligned}$$
>>	6. **Caso $z_4=\infty$: fórmula del apunte.** para $z_1,z_2,z_3$ finitos, la fórmula correspondiente es $$(z_1,z_2,z_3,\infty)=\frac{z_1-z_3}{z_2-z_3}.$$
>>	7. **Si $c=0$.** En este caso $a,d\neq0$, $T(z)=\frac ad z+\frac bd$ y $T(\infty)=\infty$. Usamos la misma fórmula para las imágenes y cancelamos el factor $a/d$: $$(Tz_1,Tz_2,Tz_3,\infty)=\frac{Tz_1-Tz_3}{Tz_2-Tz_3}=\frac{\frac ad(z_1-z_3)}{\frac ad(z_2-z_3)}=\frac{z_1-z_3}{z_2-z_3}=(z_1,z_2,z_3,\infty).$$
>>	8. **Si $c\neq0$ y $Tz_1,Tz_2,Tz_3$ son finitos.** Ahora $T(\infty)=a/c$, por lo que las cuatro imágenes son finitas. Calculamos la diferencia con la cuarta imagen: $$T(z)-\frac ac=\frac{c(az+b)-a(cz+d)}{c(cz+d)}=-\frac{ad-bc}{c(cz+d)}.$$
>>	9. **Sustitución en los dos cocientes.** Usando la identidad del paso 2 y la del paso anterior (para el denominador), obtenemos $$\begin{aligned}\frac{Tz_1-Tz_3}{Tz_1-a/c}&=\frac{\frac{(ad-bc)(z_1-z_3)}{(cz_1+d)(cz_3+d)}}{-\frac{ad-bc}{c(cz_1+d)}}=-\frac{c(z_1-z_3)}{cz_3+d},\\\frac{Tz_2-a/c}{Tz_2-Tz_3}&=\frac{-\frac{ad-bc}{c(cz_2+d)}}{\frac{(ad-bc)(z_2-z_3)}{(cz_2+d)(cz_3+d)}}=-\frac{cz_3+d}{c(z_2-z_3)}.\end{aligned}$$
>>	10. **Multiplicación y cancelación.** Sustituyendo ambos cocientes en la razón cruzada de las imágenes, $$\begin{aligned}(Tz_1,Tz_2,Tz_3,T\infty)&=\frac{Tz_1-Tz_3}{Tz_1-a/c}\frac{Tz_2-a/c}{Tz_2-Tz_3}\\&=\left(-\frac{c(z_1-z_3)}{cz_3+d}\right)\left(-\frac{cz_3+d}{c(z_2-z_3)}\right)\\&=\frac{z_1-z_3}{z_2-z_3}\\&=(z_1,z_2,z_3,\infty).\end{aligned}$$
>>	11. **Los otros casos son análogos.** Si $z_2=\infty$ o $z_3=\infty$, se procede de la misma manera, usando respectivamente las fórmulas del apunte $$(z_1,\infty,z_3,z_4)=\frac{z_1-z_3}{z_1-z_4},\qquad (z_1,z_2,\infty,z_4)=\frac{z_2-z_4}{z_1-z_4}.$$ Si el infinito aparece en la primera entrada, se usa $$(\infty,z_2,z_3,z_4)=\frac{z_2-z_4}{z_2-z_3}.$$ También son análogos los casos en que alguna imagen $Tz_j$ es $\infty$: se elige la fórmula correspondiente en el lado de las imágenes y se sustituye y simplifica, en lugar de usar una fracción cuyo denominador se anula. Si $z_1$ coincide con $z_2$, $z_3$ o $z_4$, ambas razones cruzadas valen, respectivamente, $1$, $0$ o $\infty$, porque $T$ preserva esas coincidencias.
>>- (ii)
>>	1. **Existencia: llevamos ambas ternas a la terna estándar.** Como los puntos de cada terna son distintos, aplicamos la construcción del apunte a cada una por separado. Obtenemos dos transformaciones de Möbius $S$ y $R$ tales que $$\begin{aligned}S(z_2)&=1,&S(z_3)&=0,&S(z_4)&=\infty,\\R(w_2)&=1,&R(w_3)&=0,&R(w_4)&=\infty.\end{aligned}$$ La construcción incluye los casos en que una de las entradas es $\infty$.
>>	2. **Construcción de la transformación buscada.** Primero usamos $S$ para ir de la terna de los $z_j$ a $(1,0,\infty)$ y luego $R^{-1}$ para ir de esa terna estándar a la de los $w_j$. Por eso definimos $$T=R^{-1}\circ S.$$ Esta es una transformación de Möbius, porque la inversa de una transformación de Möbius es Möbius y la composición de transformaciones de Möbius también lo es.
>>	3. **Verificación de las imágenes.** Por las igualdades del paso 1, $$\begin{aligned}T(z_2)&=R^{-1}(S(z_2))=R^{-1}(1)=w_2,\\T(z_3)&=R^{-1}(S(z_3))=R^{-1}(0)=w_3,\\T(z_4)&=R^{-1}(S(z_4))=R^{-1}(\infty)=w_4.\end{aligned}$$ Esto demuestra la existencia.
>>	4. **Unicidad.** Si $U$ es otra transformación de Möbius con $U(z_j)=w_j$ para $j=2,3,4$, entonces $U$ y $T$ coinciden en los tres puntos distintos $z_2,z_3,z_4$. Por la Proposición 21 (determinación por tres puntos), $U=T$. Por lo tanto, existe una única transformación de Möbius con las imágenes prescritas.

>[!Exercise] Ejercicio 8
>Evaluar las siguientes razones cruzadas:
>- **(a)** $(7+i,1,0,\infty)$,
>- **(b)** $(2,1-i,1,1+i)$,
>- **(c)** $(0,1,i,-1)$,
>- **(d)** $(i-1,\infty,1+i,0)$.
>>[!Proof]- Resolución
>>1. **Fórmula y casos con $\infty$.** Usamos la razón armónica del apunte: dados $z,z_2,z_3,z_4$ distintos en $\mathbb C_\infty$, $$(z,z_2,z_3,z_4)=S(z)=\frac{z-z_3}{z-z_4}\cdot\frac{z_2-z_4}{z_2-z_3},$$ donde $S$ es la única transformación de Möbius con $S(z_2)=1$, $S(z_3)=0$, $S(z_4)=\infty$. 
>>2. Si $z_4=\infty$, tambien en el apunte nos dice $$(z,z_2,z_3,\infty)=\frac{z-z_3}{z_2-z_3};$$ si $z_2=\infty$, queda $$(z,\infty,z_3,z_4)=\frac{z-z_3}{z-z_4}.$$ En cada ítem los cuatro puntos son distintos, así que la fórmula es aplicable.
>>- **(a)**
>>	1. Aquí $z=7+i$, $z_2=1$, $z_3=0$, $z_4=\infty$. Aplicamos el caso $z_4=\infty$: $$(7+i,1,0,\infty)=\frac{(7+i)-0}{1-0}=7+i.$$ Por tanto, $$\boxed{(7+i,1,0,\infty)=7+i.}$$
>>	2. Logico $(z,1,0,\infty)$ es la identidad 
>>- **(b)**
>>	1. Aquí $z=2$, $z_2=1-i$, $z_3=1$, $z_4=1+i$, todos finitos. Sustituimos en la fórmula general: $$(2,1-i,1,1+i)=\frac{2-1}{2-(1+i)}\cdot\frac{(1-i)-(1+i)}{(1-i)-1}=\frac{1}{1-i}\cdot\frac{-2i}{-i}.$$
>>	2. Como $\frac{-2i}{-i}=2$, queda $$\frac{2}{1-i}=\frac{2(1+i)}{(1-i)(1+i)}=\frac{2(1+i)}{2}=1+i.$$ Por tanto, $$\boxed{(2,1-i,1,1+i)=1+i.}$$
>>- **(c)**
>>	1. Aquí $z=0$, $z_2=1$, $z_3=i$, $z_4=-1$, todos finitos. Sustituimos: $$(0,1,i,-1)=\frac{0-i}{0-(-1)}\cdot\frac{1-(-1)}{1-i}=\frac{-i}{1}\cdot\frac{2}{1-i}=\frac{-2i}{1-i}.$$
>>	2. Multiplicamos numerador y denominador por el conjugado $1+i$: $$\frac{-2i(1+i)}{(1-i)(1+i)}=\frac{-2i(1+i)}{2}=-i(1+i)=-i-i^2=-i+1.$$ Por tanto, $$\boxed{(0,1,i,-1)=1-i.}$$
>>- **(d)**
>>	1. Aquí $z=i-1$, $z_2=\infty$, $z_3=1+i$, $z_4=0$. Aplicamos el caso $z_2=\infty$: $$(i-1,\infty,1+i,0)=\frac{(i-1)-(1+i)}{(i-1)-0}=\frac{-2}{i-1}.$$
>>	2. Multiplicamos numerador y denominador por $i+1$: $$\frac{-2(i+1)}{(i-1)(i+1)}=\frac{-2(i+1)}{i^2-1}=\frac{-2(i+1)}{-2}=i+1.$$ Por tanto, $$\boxed{(i-1,\infty,1+i,0)=1+i.}$$
