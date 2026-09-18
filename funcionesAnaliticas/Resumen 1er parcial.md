# Resumen 1er parcial (Teo 1–4, Pr 1–4)

## 0. El hilo del parcial

>[!Abstract] Un solo arco
> - Todo el bloque es: $\mathbb{C}$ como cuerpo y espacio métrico $\to$ series de potencias $\to$ diferenciabilidad compleja $\to$ funciones elementales $\to$ geometría $\to$ integración $\to$ Cauchy.
> - La idea que ordena todo: la diferenciabilidad compleja es mucho más rígida que la real, y de ahí salen analiticidad, Taylor, Cauchy y Liouville.

## 1. Complejos, módulo, polar, raíces

>[!Definition] Base
> - Todo $z\in\mathbb{C}$ se escribe $z=a+ib$ con $a=\operatorname{Re}z$ y $b=\operatorname{Im}z$.
> - Conjugado y módulo: $\bar z=a-ib$, $|z|=\sqrt{a^{2}+b^{2}}$, $|z|^{2}=z\bar z$, $z^{-1}=\bar z/|z|^{2}$.
> - Partes: $\operatorname{Re}z=\tfrac12(z+\bar z)$, $\operatorname{Im}z=\tfrac1{2i}(z-\bar z)$; conjugación: $\overline{z+w}=\bar z+\bar w$, $\overline{zw}=\bar z\bar w$; módulo del producto: $|zw|=|z||w|$.
> - Polarización: $$|z+w|^{2}=|z|^{2}+2\operatorname{Re}(z\bar w)+|w|^{2}, \quad |z-w|^{2}=|z|^{2}-2\operatorname{Re}(z\bar w)+|w|^{2}.$$
> - Paralelogramo: $|z+w|^{2}+|z-w|^{2}=2(|z|^{2}+|w|^{2})$.

>[!Theorem] Triangular, polar y raíces
> - Desigualdad triangular $|z+w|\le |z|+|w|$, con igualdad si y solo si uno es múltiplo real no negativo del otro.
> - Triangular inversa: $\big||z|-|w|\big|\le |z-w|$.
> - Polar: $z=r\operatorname{cis}\theta=re^{i\theta}$, y vale $z_{1}z_{2}=r_{1}r_{2}\operatorname{cis}(\theta_{1}+\theta_{2})$, $z^{n}=r^{n}\operatorname{cis}(n\theta)$.
> - Raíces $n$-ésimas de $a=r\operatorname{cis}\alpha$: $|z|=\sqrt[n]{r}$, $\theta=(\alpha+2k\pi)/n$ con $k=0,\dots,n-1$, las $n$ sobre la circunferencia $w=a+re^{it}$.
> - Raíces de la unidad $z_{k}=\operatorname{cis}(2k\pi/n)$; si $n\ge 2$ cumplen $1+z+\cdots+z^{n-1}=0$.

>[!Example] Conjuntos que caen siempre (Práctico 1)
> - $\bar z=z$ es el eje real; $\bar zz=1$ es la circunferencia unidad; $|z-1|=|z-i|$ es la recta $y=x$.
> - $|z-3|/|z+3|=2$ es circunferencia; $|z+3|+|z-3|=10$ es elipse; $z^{2}+\bar z^{2}=2$ es la hipérbola $x^{2}-y^{2}=1$.

>[!Remark] Esfera de Riemann
> - $\mathbb{C}_{\infty}=\mathbb{C}\cup\{\infty\}$, con $d(z,z')=2|z-z'|/\sqrt{(1+|z|^{2})(1+|z'|^{2})}$ y $d(z,\infty)=2/\sqrt{1+|z|^{2}}$.

## 2. Series y radio de convergencia

>[!Definition] Convergencia
> - $\mathbb{C}$ es completo: una sucesión converge si y solo si es de Cauchy.
> - $\sum a_{n}$ converge si convergen sus sumas parciales; converge absolutamente si converge $\sum|a_{n}|$, y absoluta $\Rightarrow$ convergente.
> - Uniforme significa que $N_{0}$ depende solo de $\varepsilon$, no de $x$; el límite uniforme de continuas es continuo.

>[!Theorem] Criterio M, Abel, Hadamard
> - M de Weierstrass: si $|f_{n}(x)|\le M_{n}$ y $\sum M_{n}$ converge, entonces $\sum f_{n}$ converge uniformemente.
> - Hadamard: para $\sum a_{n}(z-a)^{n}$ vale $$\frac1R=\limsup_{n\to\infty}|a_{n}|^{1/n}.$$
> - Abel: si $|z-a|<R$ converge absolutamente; si $|z-a|>R$ diverge; si $r<R$ converge uniformemente en $\{z:|z-a|\le r\}$.
> - Cociente (cuando existe el límite): $R=\lim_{n\to\infty}|a_{n}|/|a_{n+1}|$.
> - Producto de Cauchy: con $c_{n}=\sum_{k=0}^{n}a_{k}b_{n-k}$, el producto de dos series absolutamente convergentes converge absolutamente a $(\sum a_{n})(\sum b_{n})$, y lo mismo vale para potencias dentro del disco común.

>[!Remark] Casos tipo parcial y trampa del borde
> - $\sum a^{n}z^{n}$ tiene $R=1/|a|$; $\sum a^{n^{2}}z^{n}$ tiene $R=\infty,1,0$ según $|a|<1,=1,>1$; $\sum z^{n!}$ tiene $R=1$.
> - $R=1$ no dice nada del borde: el caso típico $\sum (-1)^{n}/n$ converge condicionalmente en $z=1,-1,i$.

## 3. Diferenciabilidad compleja y Cauchy-Riemann

>[!Definition] Diferenciable y analítica
> - $f:G\to\mathbb{C}$, $G$ abierto, es diferenciable en $a$ si existe $f'(a)=\lim_{h\to0}(f(a+h)-f(a))/h=\lim_{z\to a}(f(z)-f(a))/(z-a)$.
> - Analítica = continuamente diferenciable en $G$; valen suma, producto, cociente, cadena y polinomios analíticos; diferenciable $\Rightarrow$ continua.
> - Versión real: si $f$ es compleja-diferenciable en $z_{0}$, como mapa $\mathbb{R}^{2}\to\mathbb{R}^{2}$ es diferenciable con diferencial $D_{z_{0}}f(h)=f'(z_{0})h$.

>[!Theorem] Cauchy-Riemann y consecuencias
> - Escribiendo $f(x+iy)=u(x,y)+iv(x,y)$, lo necesario es $$u_{x}=v_{y}, \quad v_{x}=-u_{y} \qquad (...)$$ y entonces $f'=u_{x}+iv_{x}=v_{y}-iu_{y}$.
> - Lo suficiente exige hipótesis: si $u,v$ tienen primeras parciales continuas cerca de $z_{0}$ y cumplen $(...)$, entonces $f$ es compleja-diferenciable en $z_{0}$.
> - Caracterización con parciales continuas en $G$: $f$ analítica $\iff$ vale $(...)$.
> - Jacobiano: $\det Df=u_{x}v_{y}-u_{y}v_{x}=u_{x}^{2}+v_{x}^{2}=|f'(z)|^{2}$.
> - Si $G$ es abierto conexo y $f'=0$ en $G$, entonces $f$ es constante; sin conexidad falla.
> - Si $f$ analítica en una región tiene imagen real o contenida en un círculo, entonces $f$ es constante.

>[!Remark] Los tres contraejemplos a saber de memoria
> - $f(z)=\bar z$ en ningún punto; $f(z)=|z|$ en ningún punto; $f(z)=|z|^{2}$ solo en $0$, con $f'(0)=0$.
> - La prueba es siempre la misma: comparar $h=t$ real con $h=it$ imaginario.

## 4. Las series de potencias son analíticas

>[!Theorem] Derivación término a término
> - La derivada formal $\sum_{n=1}^{\infty}na_{n}(z-a)^{n-1}$ tiene el mismo radio $R$.
> - Dentro del disco se deriva infinitas veces: $$f^{(k)}(z)=\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_{n}(z-a)^{n-k}.$$
> - Coeficientes de Taylor: $a_{n}=f^{(n)}(a)/n!$.
> - En particular toda serie de potencias es analítica en su disco, con derivada continua.

## 5. Exponencial, trigonometría, logaritmo, potencias

>[!Definition] Exponencial y trigonométricas
> - Definición (entera, $R=\infty$, $(e^{z})'=e^{z}$): $$e^{z}=\sum_{n=0}^{\infty}\frac{z^{n}}{n!}.$$
> - Ley de exponentes $e^{a+b}=e^{a}e^{b}$ con $e^{0}=1$; conjugación $\overline{e^{z}}=e^{\bar z}$; inversa $e^{z}e^{-z}=1$, luego $e^{z}\neq 0$.
> - Forma real: $e^{x+iy}=e^{x}(\cos y+i\sin y)$, de donde $|e^{z}|=e^{\operatorname{Re}z}$, $|e^{i\theta}|=1$ y $e^{i\theta}=\cos\theta+i\sin\theta$.
> - Coseno y seno (ambas $R=\infty$): $$\cos z=\sum_{k\ge0}(-1)^{k}\frac{z^{2k}}{(2k)!}, \quad \sin z=\sum_{k\ge0}(-1)^{k}\frac{z^{2k+1}}{(2k+1)!}.$$
> - Identidades: $\cos z=(e^{iz}+e^{-iz})/2$, $\sin z=(e^{iz}-e^{-iz})/2i$, $\cos^{2}z+\sin^{2}z=1$, $(\cos z)'=-\sin z$, $(\sin z)'=\cos z$.
> - Ceros solo reales: $\cos z=0 \iff z=\pi/2+k\pi$ y $\sin z=0 \iff z=k\pi$.

>[!Theorem] Períodos, logaritmo y ramas
> - Períodos exactos: $e^{z+c}=e^{z} \ \forall z \iff c\in 2\pi i\mathbb{Z}$.
> - No es inyectiva ($e^{0}=e^{2\pi i}=1$), pero en cada franja $S_{\alpha}=\{z:\alpha\le\operatorname{Im}z<\alpha+2\pi\}$ es biyectiva sobre $\mathbb{C}\setminus\{0\}$.
> - Ecuación $e^{z}=w\neq 0$: sus soluciones son $z=\ln|w|+i(\arg w+2k\pi)$ con $k\in\mathbb{Z}$.
> - Rama en $G$ abierto conexo: continua $f:G\to\mathbb{C}$ con $e^{f(z)}=z$; dos ramas difieren en una constante $2k\pi i$.
> - No hay rama con $0\in G$ ni rama en todo $\mathbb{C}\setminus\{0\}$.
> - Cortando un rayo: $G_{\alpha}=\mathbb{C}\setminus\{re^{i\alpha}:r\ge 0\}$ admite $f_{\alpha,k}(z)=\ln|z|+i\operatorname{Arg}_{\alpha}(z)+2\pi ik$.
> - Rama principal: $G=\mathbb{C}\setminus(-\infty,0]$ con $\log z=\ln|z|+i\operatorname{Arg}z$ y $\operatorname{Arg}z\in(-\pi,\pi)$.
> - Toda rama es analítica con $f'(z)=1/z$.
> - Potencias con rama fijada: $z^{b}=e^{bf(z)}$ (si $b\in\mathbb{Z}$ es la usual); con la principal $\operatorname{Re}z^{1/2}>0$.

>[!Remark] Trampas típicas
> - $z^{a}z^{b}=z^{a+b}$ vale con la misma rama, pero $g\circ f$ no siempre es la rama de $z^{ab}$ (contraejemplo estándar: $a=2$, $b=1/2$ con la principal).
> - $\log(e^{z})=z$ solo vale sobre la imagen de la rama elegida.

## 6. Funciones armónicas

>[!Definition] Armónica y conjugado
> - $u$ de clase $C^{2}$ es armónica si $u_{xx}+u_{yy}=0$.
> - Las partes real e imaginaria de una analítica son armónicas.
> - $v$ es conjugado armónico de $u$ si $u+iv$ es analítica; en una región es único salvo constante real; existe en $\mathbb{C}$ o en un disco.

>[!Example] El ejemplo sin conjugado global
> - $u(x,y)=\log\sqrt{x^{2}+y^{2}}$ es armónica en $\mathbb{C}\setminus\{0\}$ pero no admite conjugado global; localmente el conjugado es el argumento.
> - La obstrucción se ve integrando sobre la circunferencia $w=0+1\cdot e^{it}$.
> - Del Práctico 2: verificar armonicidad y hallar $v$ por Cauchy-Riemann para $u=2x(1-y)$, $u=\sinh x\sin y$ y $u=y/(x^{2}+y^{2})$.

## 7. Conformes y Möbius

>[!Definition] Conforme y Möbius
> - Si $f$ es diferenciable con $f'(z_{0})\neq 0$, preserva ángulos en $z_{0}$: cada tangente rota por $\arg f'(z_{0})$.
> - Conforme = preserva ángulos + existe $\lim_{z\to z_{0}}|f(z)-f(z_{0})|/|z-z_{0}|$; analítica con derivada nunca nula es conforme.
> - Möbius: $S(z)=(az+b)/(cz+d)$ con $ad-bc\neq 0$; derivada $S'(z)=(ad-bc)/(cz+d)^{2}\neq 0$.
> - Inversa $S^{-1}(w)=(dw-b)/(-cw+a)$; la composición de Möbius es Möbius, forman grupo y extienden a homeomorfismos de $\mathbb{C}_{\infty}$.
> - Toda Möbius es composición de traslación $z+b$, dilatación $az$, rotación $e^{i\theta}z$ e inversión $1/z$.

>[!Theorem] Fijos, 3 puntos, rectas y circunferencias
> - Distinta de la identidad tiene a lo sumo $2$ puntos fijos y queda determinada por la imagen de $3$ puntos distintos.
> - Envío $z_{2},z_{3},z_{4}\mapsto 1,0,\infty$: $$S(z)=\frac{z-z_{3}}{z-z_{4}}\cdot\frac{z_{2}-z_{4}}{z_{2}-z_{3}},$$ y la razón $(z,z_{2},z_{3},z_{4})=S(z)$ es invariante por Möbius.
> - Manda rectas o circunferencias en rectas o circunferencias.
> - Tabla de $1/z$: recta por $0\mapsto$ recta por $0$ sin $0$; recta que no pasa por $0\mapsto$ circunferencia por $0$ sin $0$; circunferencia por $0\mapsto$ recta que no pasa por $0$; circunferencia que no pasa por $0\mapsto$ circunferencia que no pasa por $0$.
> - Fijos en $\mathbb{C}_{\infty}$: traslación no trivial solo $\infty$; homotecia no trivial $0$ e $\infty$; inversión $1,-1$.

>[!Example] Imágenes del Práctico 3
> - Afín $az+b$, $a\neq0$: rectas $\mapsto$ rectas, circunferencias $\mapsto$ circunferencias; en cambio $z^{2}$ manda recta por $0$ a semirrecta cerrada desde $0$.
> - $e^{z}$ manda $\operatorname{Re}z=a_{0}$ a la circunferencia $w=0+e^{a_{0}}e^{it}$, e $\operatorname{Im}z=b_{0}$ a un rayo.
> - $(1-z)/(1+z)$ manda $\{|z|<1\}$ en $\{\operatorname{Re}w>0\}$.

## 8. Integración compleja y Cauchy

>[!Definition] Integral de línea
> - Suave a trozos $\Rightarrow$ variación acotada con $\operatorname{Var}(\gamma)=\int_{a}^{b}|\gamma'(t)|\,dt$.
> - Definición: $$\int_{\gamma}f(z)\,dz=\int_{a}^{b}f(\gamma(t))\gamma'(t)\,dt,$$ invariante por reparametrización; invertir orientación cambia el signo.
> - Estimación ML: $\big|\int_{\gamma}f(z)\,dz\big|\le\int_{\gamma}|f(z)|\,|dz|\le\operatorname{Var}(\gamma)\sup_{\{\gamma\}}|f|$.
> - Barrow: si $F'=f$ y $\gamma$ va de $\alpha$ a $\beta$, entonces $\int_{\gamma}f(z)\,dz=F(\beta)-F(\alpha)$; cerrada da $0$, pero no toda continua tiene primitiva ($|z|^{2}$ no la tiene).
> - Convergencia uniforme sobre la traza permite integrar término a término.

>[!Theorem] Cauchy, cotas, Liouville
> - Cálculo base sobre $w=0+1\cdot e^{it}$, $0\le t\le 2\pi$: $\int_{\gamma}z^{n}\,dz=0$ si $n\neq -1$, e $\int_{\gamma}dz/z=2\pi i$.
> - Cauchy local: si $\overline{B(a,r)}\subset G$, $f$ analítica y $\gamma(t)=a+re^{it}$, entonces $$f(z)=\frac{1}{2\pi i}\int_{\gamma}\frac{f(w)}{w-z}\,dw, \quad |z-a|<r.$$
> - Derivadas: $$f^{(m)}(a)=\frac{m!}{2\pi i}\int_{\gamma}\frac{f(w)}{(w-a)^{m+1}}\,dw.$$
> - Cota: si $|f|\le M$ en $B(a,R)$ entonces $|f^{(m)}(a)|\le Mm!/R^{m}$.
> - Liouville: entera acotada $\Rightarrow$ constante (pues $|f'(z)|\le M/r\to 0$).
> - Fundamental del álgebra: todo polinomio no constante tiene un cero (por $1/p$ acotada y entera).
> - Crecimiento polinomial: $|f(z)|\le M|z|^{n}$ fuera de un disco $\Rightarrow$ $f$ polinomio de grado $\le n$.
> - Valor medio de Gauss: $f(z_{0})=\frac{1}{2\pi}\int_{0}^{2\pi}f(z_{0}+re^{it})\,dt$.

>[!Example] Integrales tipo parcial
> - $\int_{|z|=1}e^{iz}z^{-2}\,dz=-2\pi$ e $\int_{|z|=1}(\sin z)z^{-1}\,dz=0$; en general $\int_{|z|=1}(e^{z}-e^{-z})z^{-n}\,dz$ se lee del coeficiente correspondiente por Cauchy o por serie.

## 9. Mínimo para reproducir sin apuntes

>[!Todo] Checklist
> - Probar no-diferenciabilidad con $h=t$ vs $h=it$.
> - Calcular un radio por Hadamard o cociente.
> - Enunciar CR con su hipótesis de parciales continuas.
> - Probar $e^{a+b}=e^{a}e^{b}$ con $g'=0$ y conexidad.
> - Escribir una rama principal y su derivada $1/z$.
> - Explicar por qué no hay log en $\mathbb{C}\setminus\{0\}$.
> - Determinar una Möbius por 3 puntos y su efecto en rectas/circunferencias.
> - Calcular $\int_{|z|=1}z^{n}\,dz$ y deducir Cauchy $\Rightarrow$ cota $\Rightarrow$ Liouville $\Rightarrow$ fundamental del álgebra.
