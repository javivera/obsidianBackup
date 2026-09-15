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

>[!Exercise] Ejercicio 7
>Dar los puntos fijos de dilataciones, traslaciones e inversiones en $\mathbb C_\infty=\mathbb C\cup\{\infty\}$.
>>[!Proof]- Resolución
>>1. **Traslaciones.** Sea $T_b(z)=z+b$. Un punto finito $z$ es fijo si $z+b=z$, lo cual equivale a $b=0$. Además, $T_b(\infty)=\infty$. Por tanto, si $b\neq0$, el único punto fijo es $\infty$; si $b=0$, la transformación es la identidad y todos los puntos de $\mathbb C_\infty$ son fijos.
>>2. **Dilataciones.** Sea $D_a(z)=az$, con $a\neq0$. Un punto finito $z$ es fijo si $az=z$, es decir, $(a-1)z=0$. Además, $D_a(\infty)=\infty$. Por tanto, si $a\neq1$, los puntos fijos son $0$ e $\infty$; si $a=1$, todos los puntos de $\mathbb C_\infty$ son fijos.
>>3. **Rotaciones.** Una rotación $R_\theta(z)=e^{i\theta}z$ es un caso particular de dilatación. Si $e^{i\theta}\neq1$, sus puntos fijos son $0$ e $\infty$; si $e^{i\theta}=1$, es la identidad y todos los puntos son fijos.
>>4. **Inversión.** Sea $I(z)=1/z$, extendida mediante $I(0)=\infty$ e $I(\infty)=0$. Para $z\in\mathbb C\setminus\{0\}$, la condición de punto fijo es $1/z=z$, equivalente a $z^2=1$, cuyas soluciones son $z=1$ y $z=-1$. Como $0$ e $\infty$ se intercambian, no son fijos. Por tanto, los únicos puntos fijos de la inversión son $1$ y $-1$.

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

>[!exercise] Ejercicio 9
>Sean $T(z)=\dfrac{az+b}{cz+d}$, $S(z)=\dfrac{a'z+b'}{c'z+d'}$ transformaciones de Möbius, y sea $$\Gamma=\{z\in\mathbb C:|z|=1\}.$$
>- **(i)** Encontrar $z_2,z_3,z_4$ (en términos de $a,b,c,d$) tales que $T(z)=(z,z_2,z_3,z_4)$.
>- **(ii)** Probar que $T(\mathbb R_{\infty})=\mathbb R_{\infty}$ si y sólo si $a,b,c$ y $d$ pueden ser elegidos para ser reales.
>- **(iii)** Dar condiciones necesarias y suficientes para que $T(\Gamma)=\Gamma$.
>- **(iv)** Dar condiciones necesarias y suficientes para que $T(D)=D$.
>- **(v)** Si $z_1,z_2$ son puntos fijos de $T$, probar que $S^{-1}TS$ tiene puntos fijos $S^{-1}(z_1),S^{-1}(z_2)$.
>
>>[!Proof]- Resolución
>>- **(i)**
>>	1. Sea $$f(z)=(z,z_2,z_3,z_4)=\frac{z-z_3}{z-z_4}\cdot\frac{z_2-z_4}{z_2-z_3},$$ con $z_2,z_3,z_4$ distintos en $\mathbb C_{\infty}$. Entonces $f$ es Möbius en $z$, y $$f(z_3)=0,\qquad f(z_4)=\infty,\qquad f(z_2)=1.$$ Así $f$ es la única Möbius que manda $z_3\mapsto 0$, $z_4\mapsto\infty$, $z_2\mapsto 1$.
>>	2. Una Möbius queda determinada por la imagen de $3$ puntos distintos. Luego $T\equiv f$ si y sólo si $$T(z_3)=0,\qquad T(z_4)=\infty,\qquad T(z_2)=1.$$
>>	3. $T(z_3)=0$ entonces debe anularse el numerador sin anularse el denominador (para no tener $0/0$). Si $a\neq 0$, proponemos $$\boxed{z_3=-b/a}$$ finito. Entonces $az_3+b=0$ y el denominador vale $$cz_3+d=c(-b/a)+d=\frac{ad-bc}{a}\neq 0,$$ pues $ad-bc\neq 0$. Luego $T(z_3)=0/\text{no nulo}=0$. 
>>	4. Si $a=0$, entonces $b\neq 0$ y $c\neq 0$ (si no $ad-bc=-bc=0$). Aquí $$T(z_{3})=b/(cz_{3}+d)$$ no se anula en ningún punto finito; su cero está en $\infty$ entonces ponemos $$\boxed{z_3=\infty},$$
>>	5. $T(z_4)=\infty$: debe anularse el denominador sin anularse el numerador osea $cz_{4}+d=0$ y $az_{4}+b\neq0$ 
>>	6. Si $c\neq 0$, proponemos $$\boxed{z_4=-d/c}$$ finito y el numerador valdria $$az_4+b=a(-d/c)+b=\frac{bc-ad}{c}=-\frac{ad-bc}{c}\neq 0.$$ Luego $T(z_4)=\text{no nulo}/0=\infty$.
>>	7. Si $c=0$, entonces $d\neq 0$ (si no $ad-bc=0$). Aquí $T(z_{4})=(az_{4}+b)/d$. Entonces no queda otra que $$\boxed{z_4=\infty},$$
>>	8. $T(z_2)=1$: numerador y denominador deben ser iguales y no nulos. Si $a\neq c$, proponemos $$\boxed{z_2=\frac{d-b}{a-c}}$$ finito. Entonces $(a-c)z_2-(d-b)=0$, o sea $az_2+b=cz_2+d$. Además el denominador común vale $$cz_2+d=c\frac{d-b}{a-c}+d=\frac{ad-bc}{a-c}\neq 0,$$ así que no es $0/0$ y el cociente es $1$. 
>>	9. Si $a=c$, entonces $a=c\neq 0$ (si no $ad-bc=0$) y $d\neq b$ (si no $ad-bc=a(d-b)=0$). Entonces tenemos $$1= T(z_{2})=\frac{az_{2}+b}{az_{2}+c}$$ la unica forma es que $$\boxed{z_2=\infty},$$
>>- **(ii)**
>>	- **($\Rightarrow$)** Supongamos que $T(\mathbb R_\infty)=\mathbb R_\infty$.
>>		1. Como $0,1,\infty\in\mathbb R_\infty=T(\mathbb R_\infty)$, existen $z_2,z_3,z_4\in\mathbb R_\infty$ tales que $$T(z_2)=1,\qquad T(z_3)=0,\qquad T(z_4)=\infty.$$ Estos puntos son distintos porque una transformación de Möbius es inyectiva y sus imágenes son distintas.
>>		2. Como $$T(z_2)=1,\qquad T(z_3)=0,\qquad T(z_4)=\infty,$$ por la definición de la razón cruzada tenemos directamente $$T(z)=(z,z_2,z_3,z_4).$$ Si $z_2,z_3,z_4$ son finitos, ponemos $$k=\frac{z_2-z_4}{z_2-z_3}\in\mathbb R.$$ Entonces $$T(z)=k\frac{z-z_3}{z-z_4}=\frac{kz-kz_3}{z-z_4},$$ que tiene los coeficientes reales $$A=k,\qquad B=-kz_3,\qquad C=1,\qquad D=-z_4.$$ Además, $AD-BC=k(z_3-z_4)\neq0$ porque los tres puntos son distintos.
>>		3. Si uno de los puntos es $\infty$, usamos las fórmulas correspondientes de la razón cruzada. Si $z_2=\infty$, $$T(z)=\frac{z-z_3}{z-z_4},$$ con coeficientes reales $(A,B,C,D)=(1,-z_3,1,-z_4)$. 
>>		4. Si $z_3=\infty$, $$T(z)=\frac{z_2-z_4}{z-z_4},$$ con coeficientes reales $(A,B,C,D)=(0,z_2-z_4,1,-z_4)$. 
>>		5. Si $z_4=\infty$, $$T(z)=\frac{z-z_3}{z_2-z_3},$$ con coeficientes reales $(A,B,C,D)=(1,-z_3,0,z_2-z_3)$. 
>>		6. En cada caso el determinante es no nulo porque los puntos finitos involucrados son distintos.
>>		7. Por tanto, en todos los casos $T$ admite una representación $$T(z)=\frac{Az+B}{Cz+D}$$ con $A,B,C,D\in\mathbb R$.
>>	- **($\Leftarrow$)** Supongamos que $a,b,c,d$ fueron elegidos reales.
>>		1. Primero probamos $T(\mathbb R_\infty)\subseteq\mathbb R_\infty$. Si $c\neq0$ y $x\in\mathbb R\setminus\{-d/c\}$, entonces $ax+b$ y $cx+d$ son reales y $cx+d\neq0$, por lo que $T(x)\in\mathbb R$. En los puntos excepcionales, $$T(-d/c)=\infty,\qquad T(\infty)=a/c\in\mathbb R.$$ Si $c=0$, de $ad-bc=ad\neq0$ resulta que $a,d\neq0$; para todo $x\in\mathbb R$ tenemos $$T(x)=\frac{ax+b}{d}\in\mathbb R,$$ mientras que $T(\infty)=\infty$. En ambos casos, queda probada la inclusión.
>>		2. Para la inclusión contraria, fijamos $\widetilde z\in\mathbb R_\infty$. Si $\widetilde z$ es finito y $a-c\widetilde z\neq0$, definimos $$z=\frac{d\widetilde z-b}{a-c\widetilde z}\in\mathbb R.$$ Entonces $$cz+d=\frac{ad-bc}{a-c\widetilde z}\neq0,$$ y una sustitución da $T(z)=\widetilde z$. Si $a-c\widetilde z=0$, necesariamente $c\neq0$ y $\widetilde z=a/c=T(\infty)$. Finalmente, si $\widetilde z=\infty$, una preimagen real extendida es $-d/c$ cuando $c\neq0$, y es $\infty$ cuando $c=0$. Por tanto, $\mathbb R_\infty\subseteq T(\mathbb R_\infty)$.
>>		3. Combinando ambas inclusiones, concluimos que $$T(\mathbb R_\infty)=\mathbb R_\infty.$$
>>- **(iii)** Afirmamos que $$T(\Gamma)=\Gamma\iff a\overline b=c\overline d\quad\text{y}\quad |a|^2+|b|^2=|c|^2+|d|^2.$$
>>	- **($\Rightarrow$)** Supongamos que $T(\Gamma)=\Gamma$.
>>		1. Primero verificamos que el denominador no se anula sobre $\Gamma$. El caso $c=0$ está permitido y no presenta ningún problema: como $ad-bc=ad\neq0$, tenemos $d\neq0$, de modo que $cz+d=d$ para todo $z\in\Gamma$. Si $c\neq0$ y existiera $z\in\Gamma$ tal que $cz+d=0$, entonces $z=-d/c$ y la extensión daría $T(z)=\infty$, pero $\infty\notin\Gamma$, contradiciendo $T(\Gamma)=\Gamma$. Por tanto, en ambos casos, $$cz+d\neq0\qquad\text{para todo }z\in\Gamma.$$
>>		2. Ahora sí podemos usar el cociente. Para todo $z\in\Gamma$, tenemos $T(z)\in\Gamma$ y, por tanto, $$1=|T(z)|=\frac{|az+b|}{|cz+d|};$$ equivalentemente, $$|az+b|=|cz+d|.$$ Al elevar ambos miembros al cuadrado obtenemos $$|az+b|^2=|cz+d|^2,$$
>>		3. Como $|z|=1$, tenemos $z\overline z=1$. Al desarrollar los módulos al cuadrado obtenemos $$\begin{aligned}|az+b|^2&=|a|^2+|b|^2+a\overline b\,z+\overline a b\,\overline z,\\|cz+d|^2&=|c|^2+|d|^2+c\overline d\,z+\overline c d\,\overline z.\end{aligned}$$ Restando ambas expresiones y usando $\overline z=1/z$, resulta $$ (a\overline b-c\overline d)z^2+\bigl(|a|^2+|b|^2-|c|^2-|d|^2\bigr)z+(\overline a b-\overline c d)=0 $$ para todo $z\in\Gamma$.
>>		4. El polinomio anterior se anula en los infinitos puntos de $\Gamma$, por lo que es el polinomio nulo. Así, $$a\overline b=c\overline d,\qquad |a|^2+|b|^2=|c|^2+|d|^2.$$ La igualdad dada por el término constante es la conjugada de la primera.
>>	- **($\Leftarrow$)** Supongamos que $$a\overline b=c\overline d\quad\text{y}\quad |a|^2+|b|^2=|c|^2+|d|^2.$$
>>		1. Para cualquier $z\in\Gamma$, desarrollamos como en 3. $$\begin{aligned}|az+b|^2-|cz+d|^2&=\bigl(|a|^2+|b|^2-|c|^2-|d|^2\bigr)\\&\quad +(a\overline b-c\overline d)z+(\overline a b-\overline c d)\overline z=0.\end{aligned}$$en consecuencia, $$|az+b|=|cz+d|.$$
>>		2. Probamos ahora que el denominador no puede anularse sobre $\Gamma$. Si $cz+d=0$ para algún $z\in\Gamma$, la igualdad anterior fuerza $az+b=0$. Multiplicando la primera igualdad por $c$, la segunda por $a$ y restando, obtenemos $$c(az+b)-a(cz+d)=bc-ad=0,$$ es decir, $ad-bc=0$, contradicción. Por tanto, $$cz+d\neq0\qquad\text{para todo }z\in\Gamma.$$
>>		3. Ya podemos dividir: para todo $z\in\Gamma$, $$|T(z)|=\frac{|az+b|}{|cz+d|}=1.$$ Por consiguiente, $$T(\Gamma)\subseteq\Gamma.$$
>>		4. Las transformaciones de Möbius mandan rectas o circunferencias en rectas o circunferencias. Como $T(\Gamma)\subseteq\Gamma$, la imagen no puede ser una recta y debe ser una circunferencia contenida en $\Gamma$. Dos circunferencias distintas se cortan en como máximo dos puntos; por ello una circunferencia completa contenida en $\Gamma$ debe coincidir con $\Gamma$. Concluimos que $$T(\Gamma)=\Gamma.$$
>>- **(iv)** Afirmamos que $$T(D)=D\iff a\overline b=c\overline d,\quad |a|^2+|b|^2=|c|^2+|d|^2\quad\text{y}\quad |b|<|d|.$$
>>	- **($\Rightarrow$)** Supongamos que $T(D)=D$.
>>		1. Como una transformación de Möbius es un homeomorfismo de $\mathbb C_\infty$, preserva fronteras. Por tanto, $$T(\Gamma)=T(\partial D)=\partial T(D)=\partial D=\Gamma.$$ Aplicando **(iii)** obtenemos $$a\overline b=c\overline d,\qquad |a|^2+|b|^2=|c|^2+|d|^2.$$
>>		2. Como $0\in D$ y $T(D)=D$, tenemos $T(0)\in D$. Esto descarta $d=0$, pues en ese caso $T(0)=\infty\notin D$. Así, $$T(0)=\frac bd$$ entonces $$\left|\frac bd\right|=|T(0)|<1$$ lo cual equivale a $$|b|<|d|.$$
>>	- **($\Leftarrow$)** Supongamos que $$a\overline b=c\overline d,\qquad |a|^2+|b|^2=|c|^2+|d|^2,\qquad |b|<|d|.$$
>>		1. Por las dos primeras condiciones y **(iii)**, $$T(\Gamma)=\Gamma.$$ Denotemos por $$E=\{z:|z|>1\}\cup\{\infty\}=D^{c}$$ la región exterior.
>>		2. Como $D$ es conexo y $T$ es continua, $T(D)$ es conexo. Si $T(D)$ contuviera un punto de $D$ y otro de $E$, tendría que intersectar la frontera común $\Gamma$. Pero esto es imposible: si $z\in D$ y $T(z)\in\Gamma$, de $T(\Gamma)=\Gamma$ existiría $w\in\Gamma$ con $T(w)=T(z)$, y la inyectividad de $T$ daría $w=z$, contradicción. Por tanto, $$T(D)\subseteq D\quad\text{o}\quad T(D)\subseteq E.$$
>>		3. El mismo argumento aplicado a la componente conexa $E$ muestra que $T(E)$ también está contenido enteramente en $D$ o enteramente en $E$. Como $T$ es sobreyectiva y $T(\Gamma)=\Gamma$, todos los puntos de $D\cup E$ deben ser imágenes de puntos de $D\cup E$. Por ello $T(D)$ y $T(E)$ no pueden quedar en la misma componente: una es toda $D$ y la otra es toda $E$. En particular, $$T(D)=D\quad\text{o}\quad T(D)=E.$$
>>		4. La desigualdad $|b|<|d|$ implica $d\neq0$ y $$|T(0)|=\left|\frac bd\right|<1,$$ de modo que $T(0)\in D$. Como $0\in D$, la posibilidad $T(D)=E$ queda descartada. En consecuencia, $$T(D)=D.$$

>[!Exercise] Ejercicio 10
>Sea $T$ una transformación de Möbius. Probar:
>- **(i)** $T$ tiene a $0$ y a $\infty$ como sus únicos puntos fijos si y sólo si $T$ es una homotecia distinta de la identidad.
>- **(ii)** $T$ tiene a $\infty$ como su único punto fijo si y sólo si es una traslación distinta de la identidad.
>- **(iii)** $T(0)=\infty$ y $T(\infty)=0$ si y sólo si $T(z)=\lambda z^{-1}$ para algún $\lambda\in\mathbb C\setminus\{0\}$.
>
>>[!Proof]- Resolución
>>En todo el ejercicio, $T$ denota la extensión de la transformación a $\mathbb C_{\infty}$: si $c\neq 0$, vale $T(-d/c)=\infty$ y $T(\infty)=a/c$; si $c=0$, la fórmula del cociente vale en todo $\mathbb C$ y $T(\infty)=\infty$.
>>- **(i)**
>>	- **($\Rightarrow$)** Supongamos que los únicos puntos fijos de $T$ son $0$ y $\infty$.
>>		1. Escribimos $$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0.$$ Como $T(\infty)=\infty$, necesariamente $c=0$: si $c\neq0$, la extensión daría $T(\infty)=a/c\in\mathbb C$, contradicción. Entonces $ad\neq0$, de modo que $a,d\neq0$.
>>		2. Como $T(0)=0$ y $d\neq0$, $$0=T(0)=\frac bd,$$ por lo que $b=0$. En consecuencia, $$T(z)=\frac adz.$$ Por tanto, $T$ es una homotecia.
>>		3. Esta homotecia es distinta de la identidad: si $a/d=1$, entonces $T(z)=z$ y todos los puntos de $\mathbb C_\infty$ serían fijos, contradiciendo que solamente $0$ y $\infty$ lo son.
>>	- **($\Leftarrow$)** Supongamos que $T(z)=kz$, con $k\in\mathbb C\setminus\{0,1\}$.
>>		1. Se tiene $T(0)=0$ y $T(\infty)=\infty$, por lo que ambos son puntos fijos.
>>		2. Si un punto finito $z\neq0$ también fuera fijo, entonces $$kz=z,$$ de donde $(k-1)z=0$. Como $z\neq0$, esto implicaría $k=1$, contradicción. Por tanto, $0$ y $\infty$ son los únicos puntos fijos de $T$.
>>- **(ii)**
>>	- **($\Rightarrow$)** Supongamos que $\infty$ es el único punto fijo de $T$.
>>		1. Escribimos $$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0.$$ Como $T(\infty)=\infty$, necesariamente $c=0$: si $c\neq0$, la extensión daría $T(\infty)=a/c\in\mathbb C$. Entonces $ad\neq0$, de modo que $a,d\neq0$, y $$T(z)=\frac adz+\frac bd.$$
>>		2. Si $a\neq d$, la ecuación de punto fijo para $z\in\mathbb C$ da $$\frac adz+\frac bd=z\iff az+b=dz\iff z=\frac{b}{d-a},$$ por lo que existiría un punto fijo finito, contradiciendo la hipótesis. Por tanto, $a=d$.
>>		3. En consecuencia, $$T(z)=z+\frac bd,$$ así que $T$ es una traslación. Además, $b/d\neq0$: si $b/d=0$, entonces $T$ sería la identidad y todos los puntos serían fijos.
>>	- **($\Leftarrow$)** Supongamos que $T(z)=z+\beta$, con $\beta\in\mathbb C\setminus\{0\}$.
>>		1. Como toda traslación, $T(\infty)=\infty$, así que $\infty$ es un punto fijo.
>>		2. Si algún $z\in\mathbb C$ fuera fijo, entonces $$z+\beta=z,$$ lo que implicaría $\beta=0$, contradicción. Por tanto, $\infty$ es el único punto fijo de $T$.
>>- **(iii)**
>>	- **($\Rightarrow$)** Supongamos que $T(0)=\infty$ y $T(\infty)=0$.
>>		1. Escribimos $$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0.$$ Si $c=0$, entonces $T(\infty)=\infty$, contradiciendo $T(\infty)=0$. Por tanto, $c\neq 0$.
>>		2. Con $c\neq 0$, la extensión vale $\infty$ exactamente en el polo $z=-d/c$. Como $T(0)=\infty$, debe ser $0=-d/c$, es decir $d=0$; entonces $ad-bc=-bc\neq0$, de modo que $b,c\neq0$.
>>		3. Como $c\neq 0$, $$0=T(\infty)=\frac ac,$$ por lo que $a=0$. En consecuencia, $$T(z)=\frac{b}{cz}=\frac bc\,z^{-1}.$$ Además, $\lambda=b/c\neq0$, pues $b=0$ contradiría $ad-bc\neq0$.
>>	- **($\Leftarrow$)** Supongamos que $T(z)=\lambda/z$, con $\lambda\in\mathbb C\setminus\{0\}$.
>>		1. En la forma general, sus coeficientes son $a=0$, $b=\lambda$, $c=1$, $d=0$, con determinante $ad-bc=-\lambda\neq0$, así que $T$ es de Möbius.
>>		2. El polo es $-d/c=0$, por lo que la extensión da $T(0)=\infty$. Además, $$T(\infty)=\frac ac=\frac01=0.$$ Por tanto, $T(0)=\infty$ y $T(\infty)=0$.

>[!Exercise] Ejercicio 11
>Sean $T$ y $S$ transformaciones de Möbius distintas de la identidad. Probar que $T$ y $S$ conmutan si y sólo si $T$ y $S$ tienen los mismos puntos fijos.
>
>>[!Proof]-
>>- **Observación.** La implicación $\Leftarrow$ es verdadera, pero $\Rightarrow$ es falsa en general: hay pares que conmutan con distintos fijos (paso 14). Vale con la hipótesis adicional de que ninguna sea involución (paso 15).
>>- **Idea clave (Estrategia por conjugación).** Todo el ejercicio se reduce a conjugar mediante una transformación de Möbius auxiliar $R$, definiendo las conjugadas $T_1=RTR^{-1}$ y $S_1=RSR^{-1}$. En ambas implicaciones se usan dos propiedades fundamentales: por un lado, los puntos fijos se trasladan directamente por $R$: $$w\in\mathrm{Fix}(T_1)\iff RTR^{-1}(w)=w\iff T(R^{-1}(w))=R^{-1}(w)\iff R^{-1}(w)\in\mathrm{Fix}(T)\iff w\in R(\mathrm{Fix}(T)),$$ de modo que $\mathrm{Fix}(T_1)=R(\mathrm{Fix}(T))$ y $\mathrm{Fix}(S_1)=R(\mathrm{Fix}(S))$; por otro lado, conmutar en las funciones originales equivale a conmutar en las conjugadas: $$TS=ST\iff (RTR^{-1})(RSR^{-1})=(RSR^{-1})(RTR^{-1})\iff T_1S_1=S_1T_1.$$ De esta manera, el problema con puntos fijos arbitrarios se traslada directamente a las formas canónicas del Ejercicio 10 (donde los puntos fijos son $\{\infty\}$ o $\{0,\infty\}$).
>>- **($\Rightarrow$)** Supongamos $TS=ST$ en $\mathbb C_{\infty}$.
>>	1. **Preservación mutua.** Si $T(p)=p$ entonces $$T(S(p))=S(T(p))=S(p),$$ o sea $S$ preserva $\mathrm{Fix}(T)$; simétricamente $T$ preserva $\mathrm{Fix}(S)$.
>>	2. **Fondo.** Toda Möbius $\neq\mathrm{id}$ tiene a lo sumo 2 fijos; la identidad tiene infinitos.
>>	3. **Caso un solo fijo.** Supongamos $\mathrm{Fix}(T)=\{p\}$, o sea $|\mathrm{Fix}(T)|=1$. Por el paso 1, $S$ preserva $\mathrm{Fix}(T)$, o sea $S(p)\in\mathrm{Fix}(T)=\{p\}$, luego $S(p)=p$ y $p\in\mathrm{Fix}(S)$. 
>>	4. Por paso 2. como $S\neq\mathrm{id}$, o bien $\mathrm{Fix}(S)=\{p\}$, o bien $\mathrm{Fix}(S)=\{p,q\}$ con $q\neq p$;
>>	5. Descartamos lo segundo por absurdo. En efecto, como $T$ preserva $Fix(S)=\{p,q\}$, luego $T(q)\in\{p,q\}$, pero $T(q)\neq p$ porque $T$ es inyectiva y $T(p)=p$, así que $T(q)=q$. Esto daría $|\mathrm{Fix}(T)|= 2$, contra $|\mathrm{Fix}(T)|=1$. 
>>	6. Luego $\mathrm{Fix}(S)=\{p\}$. Mostrando que $S,T$ tienen los mismos puntos fijos
>>	7. **Caso dos fijos.** Sea $\mathrm{Fix}(T)=\{p_1,p_2\}$. Definimos una Möbius auxiliar $R$ que mande $p_1$ a $0$ y $p_2$ a $\infty$ (el tercer punto a donde se quiera y queda definida). Con $T_1=RTR^{-1}$ y $S_1=RSR^{-1}$, se tiene $$w\in\mathrm{Fix}(T_1)\iff RTR^{-1}(w)=w\iff T(R^{-1}(w))=R^{-1}(w)\iff R^{-1}(w)\in\mathrm{Fix}(T)\iff w\in R(\mathrm{Fix}(T)),$$ por lo que $\mathrm{Fix}(T_1)=R(\mathrm{Fix}(T))$, y análogamente $\mathrm{Fix}(S_1)=R(\mathrm{Fix}(S))$.
>>	8. Por tanto, $\mathrm{Fix}(T_1)=R(\{p_1,p_2\})=\{R(p_1),R(p_2)\}=\{0,\infty\}$; además $T_1S_1=S_1T_1$ pues $TS=ST$.
>>	9. **Forma de $T_1$.** Como $T\neq\mathrm{id}$, $T_1\neq\mathrm{id}$ (si $RTR^{-1}=\mathrm{id}$ entonces $T=\mathrm{id}$). Luego $|\mathrm{Fix}(T_1)|\leq 2$ y $$\mathrm{Fix}(T_1)=\{0,\infty\}.$$ Por el ejercicio 10 (i), $$T_1(z)=kz,\qquad k\neq 0,1.$$
>>	10. **Formas de $S_1$.** Como $S$ preserva $\{p_1,p_2\}$, y  $S_1(0)=R(S(p_1))\in\{0,\infty\}$ y $S_1(\infty)=R(S(p_2))\in\{0,\infty\}$, o sea $S_1$ preserva $\{0,\infty\}$; 
>>	11. **Subcaso $S_{1}$ fija**: Como $S\neq\mathrm{id}$ también $S_1\neq\mathrm{id}$; si fija ambos, $\mathrm{Fix}(S_1)=\{0,\infty\}$ y por 10(i) $$S_1(z)=az.$$ En este subcaso $T_1S_1=S_1T_1$ siempre y $\mathrm{Fix}(S_1)=\{0,\infty\}=\mathrm{Fix}(T_1)$; 
>>	12. Como $\mathrm{Fix}(S_1)=R(\mathrm{Fix}(S))$ osea $R^{-1}(\mathrm{Fix}(S_{1}))=\mathrm{Fix}(S)$ y $R^{-1}(0)=p_1$, $R^{-1}(\infty)=p_2$, resulta $\mathrm{Fix}(S)=\{p_1,p_2\}=\mathrm{Fix}(T)$.
>>	13. Subcaso intercambia: si $S_1(0)=\infty$ y $S_1(\infty)=0$, por 10(iii) $$S_1(z)=c/z,\qquad c\neq 0.$$ Además $$T_1(S_1(z))=kc/z,\qquad S_1(T_1(z))=c/(kz),$$ luego conmutan para todo $z$ si y sólo si $k^2=1$; como $k\neq 1$, queda $k=-1$.
>>	14. **Fijos del intercambio.** Con $S_1(z)=c/z$, los puntos $0$ e $\infty$ se intercambian, no se fijan; los fijos finitos resuelven $$c/z=z\iff z^2=c,$$ dos soluciones finitas no nulas. Luego $\mathrm{Fix}(S_1)=\{\sqrt c,-\sqrt c\}\neq\{0,\infty\}=\mathrm{Fix}(T_1)$.
>>	15. **Contraejemplo.** Con $R=\mathrm{id}$, $T(z)=-z$ y $S(z)=1/z$ cumplen $$TS(z)=ST(z)=-1/z\quad\forall z,$$ con $\mathrm{Fix}(T)=\{0,\infty\}$ y $\mathrm{Fix}(S)=\{1,-1\}$. Conmutan con distintos fijos.
>>	16. **Versión corregida.** Si además se supone que $T$ (o $S$) no es involución, es decir $k\neq -1$ en la normalización, el intercambio es imposible y $\Rightarrow$ sí vale.
>>- **($\Leftarrow$)** Supongamos que $\mathrm{Fix}(T)=\mathrm{Fix}(S)$ y $T,S\neq\mathrm{id}$.
>>	1. **Puntos fijos por conjugación.** Para cualquier transformación de Möbius biyectiva $R$, si definimos $T_1=RTR^{-1}$, se tiene $$w\in\mathrm{Fix}(T_1)\iff RTR^{-1}(w)=w\iff T(R^{-1}(w))=R^{-1}(w)\iff R^{-1}(w)\in\mathrm{Fix}(T)\iff w\in R(\mathrm{Fix}(T)),$$ por lo que $\mathrm{Fix}(T_1)=R(\mathrm{Fix}(T))$, y análogamente $\mathrm{Fix}(S_1)=R(\mathrm{Fix}(S))$.
>>	2. **Caso un solo fijo común $\mathrm{Fix}(T)=\{p\}=\mathrm{Fix}(S)$.** Definimos una Möbius auxiliar $R$ que mande $p$ a $\infty$ (los otros dos puntos a donde se quiera y queda definida).
>>	3. Tenemos que $\mathrm{Fix}(T_1)=R(\mathrm{Fix}(T))=R(\{p\})=\{R(p)\}=\{\infty\}$. Análogo con $\mathrm{Fix}(S_1)=\{\infty\}$.
>>	4. Por el Ejercicio 10(ii), toda transformación de Möbius cuyo único punto fijo sea $\infty$ es una traslación no nula: existen $b_1,b_2\in\mathbb C\setminus\{0\}$ tales que $$T_1(z)=z+b_1,\qquad S_1(z)=z+b_2.$$
>>	5. Como las traslaciones conmutan, $$T_1(S_1(z))=(z+b_2)+b_1=z+b_1+b_2=S_1(T_1(z))\implies T_1S_1=S_1T_1.$$
>>	6. Conjugando de vuelta, $$TS=(R^{-1}T_1R)(R^{-1}S_1R)=R^{-1}(T_1S_1)R=R^{-1}(S_1T_1)R=ST.$$
>>	7. **Caso dos fijos comunes $\mathrm{Fix}(T)=\{p_1,p_2\}=\mathrm{Fix}(S)$.** Definimos una Möbius auxiliar $R$ que mande $p_1$ a $0$ y $p_2$ a $\infty$ (el tercer punto a donde se quiera y queda definida).
>>	8. Tenemos que $\mathrm{Fix}(T_1)=R(\mathrm{Fix}(T))=R(\{p_1,p_2\})=\{R(p_1),R(p_2)\}=\{0,\infty\}$. Análogo con $\mathrm{Fix}(S_1)=\{0,\infty\}$.
>>	9. Por el Ejercicio 10(i), toda transformación de Möbius cuyos únicos puntos fijos sean $0$ e $\infty$ es una homotecia distinta de la identidad: existen $k,a\in\mathbb C\setminus\{0,1\}$ tales que $$T_1(z)=kz,\qquad S_1(z)=az.$$
>>	10. Como las homotecias conmutan, $$T_1(S_1(z))=k(az)=(ka)z=(ak)z=a(kz)=S_1(T_1(z))\implies T_1S_1=S_1T_1.$$
>>	11. Conjugando de vuelta, $$TS=R^{-1}(T_1S_1)R=R^{-1}(S_1T_1)R=ST.$$

>[!Exercise] Ejercicio 12
>Sea $G$ un subconjunto abierto y conexo de $\mathbb{C}$ y $f : G \to \mathbb{C}$ una función analítica. Probar que si $f(G)$ es un subconjunto de un círculo entonces $f$ es constante.
>
>>[!Proof]-
>>1. Como $f(G)$ está contenido en un círculo, por lo tanto, para todo $z\in G$ se tiene $$|f(z)-a|=r.$$
>>2. Escribiendo $z=x+iy$ y descomponiendo $f(x+iy)=u(x,y)+iv(x,y)$, la condición $|f(z)-a|^2=r^2$ se traduce en $$(u(x,y)-a_1)^2+(v(x,y)-a_2)^2=r^2.$$
>>3. Derivando esta relación respecto de $x$ y dividiendo por $2$, obtenemos $$(u-a_1)u_x+(v-a_2)v_x=0.$$ Aplicando la ecuación de Cauchy-Riemann $v_x=-u_y$, resulta $$(u-a_1)u_x-(v-a_2)u_y=0.$$
>>4. De manera análoga, derivando respecto de $y$ y dividiendo por $2$, obtenemos $$(u-a_1)u_y+(v-a_2)v_y=0.$$ Aplicando la ecuación de Cauchy-Riemann $v_y=u_x$, resulta $$(v-a_2)u_x+(u-a_1)u_y=0.$$
>>5. Las ecuaciones anteriores forman un sistema lineal homogéneo para las derivadas parciales de $u$: $$\begin{pmatrix} u-a_1 & -(v-a_2) \\ v-a_2 & u-a_1 \end{pmatrix}\begin{pmatrix} u_x \\ u_y \end{pmatrix}=\begin{pmatrix} 0 \\ 0 \end{pmatrix}.$$
>>6. El determinante de la matriz de coeficientes es $$(u-a_1)^2+(v-a_2)^2=r^2>0.$$ Como el determinante es estrictamente positivo en todo $G$, el sistema admite únicamente la solución trivial: $$u_x(x,y)=0\qquad\text{y}\qquad u_y(x,y)=0.$$
>>7. Por las ecuaciones de Cauchy-Riemann, se deduce también que $v_x=-u_y=0$ y $v_y=u_x=0$. En consecuencia, el diferencial satisface $Df\equiv 0$ en todo $G$ (o equivalentemente, $f'(z)=0$ para todo $z\in G$).
>>8. Como $G$ es un conjunto abierto y conexo de $\mathbb C$ y el diferencial $Df$ se anula idénticamente en $G$, la función $f$ es constante.

