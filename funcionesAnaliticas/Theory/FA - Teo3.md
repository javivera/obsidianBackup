## Aplicaciones conformes

>[!Remark] Curvas derivables
>Sea $\gamma:[a,b]\to\mathbb{C}$ curva derivable en $[a,b]$ y sea $t_0\in[a,b]$. Entonces $$\exists\lim_{t\to t_0}\frac{\gamma(t)-\gamma(t_0)}{t-t_0}\iff \exists\lim_{t\to t_0}\frac{\operatorname{Re}\gamma(t)-\operatorname{Re}\gamma(t_0)}{t-t_0}\ \text{y}\ \exists\lim_{t\to t_0}\frac{\operatorname{Im}\gamma(t)-\operatorname{Im}\gamma(t_0)}{t-t_0}.$$

>[!Definition] Ángulo entre curvas
>Dados dos curvas $\gamma_1$ y $\gamma_2$ tales que $\gamma_1(t_1)=z_0=\gamma_2(t_2)$ y $\gamma_1'(t_1),\gamma_2'(t_2)\neq0$. Definimos el ángulo entre $\gamma_1$ y $\gamma_2$ en $z_0$ como $$\measuredangle_{z_0}(\gamma_1,\gamma_2)=\arg(\gamma_2'(t_2))-\arg(\gamma_1'(t_1)).$$

>[!Definition] Preservar ángulos
>Sea $f:G\subseteq\mathbb{C}\to\mathbb{C}$, $G$ abierto. Decimos que $f$ preserva ángulos en $z_0$ si para cada par de curvas $\gamma_1$ y $\gamma_2$ en $z_0$ se tiene $$\measuredangle_{z_0}(\gamma_1,\gamma_2)=\measuredangle_{f(z_0)}(f(\gamma_1),f(\gamma_2)).$$

>[!Theorem] Las funciones diferenciables preservan ángulos
>Sea $f:G\subseteq\mathbb{C}\to\mathbb{C}$, $G$ abierto. Si $f$ es diferenciable en $G$, entonces $f$ preserva ángulos en todo punto $z_0$ tal que $f'(z_0)\neq0$.
>>[!Proof]-
>>1. Sea $\gamma$ curva que pasa por $z_0$ tal que $\gamma(t_0)=z_0$ con vector tangente en $z_0$ dado por $\gamma'(t_0)$.
>>2. Sea $\sigma=f\circ\gamma$. Entonces $$\sigma'(t_0)=f'(\gamma(t_0))\cdot\gamma'(t_0)=f'(z_0)\cdot\gamma'(t_0).$$
>>3. Así $$\arg\sigma'(t_0)=\arg f'(z_0)+\arg\gamma'(t_0),$$ es decir $$\arg((f\circ\gamma)'(t_0))=\arg f'(z_0)+\arg\gamma'(t_0).$$
>>4. Entonces $$\arg((f\circ\gamma)'(t_0))-\arg\gamma'(t_0)=\arg f'(z_0),$$ y esto vale para toda curva $\gamma$ que pasa por $z_0$ tal que $\gamma(t_0)=z_0$ y $\gamma'(t_0)\neq0$.
>>5. Si tenemos dos curvas $\gamma_1$ y $\gamma_2$ tales que $\gamma_1(t_1)=z_0=\gamma_2(t_2)$ y $\gamma_1'(t_1),\gamma_2'(t_2)\neq0$, se tiene $$\arg((f\circ\gamma_1)'(t_1))-\arg\gamma_1'(t_1)=\arg f'(z_0)\qquad (1).$$
>>6. Análogamente, $$\arg((f\circ\gamma_2)'(t_2))-\arg\gamma_2'(t_2)=\arg f'(z_0)\qquad (2).$$
>>7. Restando $(1)-(2)$ se llega a que $$\arg((f\circ\gamma_1)'(t_1))-\arg((f\circ\gamma_2)'(t_2))=\arg\gamma_1'(t_1)-\arg\gamma_2'(t_2),$$ es decir $$\measuredangle_{f(z_0)}(f(\gamma_1),f(\gamma_2))=\measuredangle_{z_0}(\gamma_1,\gamma_2).$$

>[!Remark] Criterio para preservar ángulos
>Sea $f$ una función diferenciable tal que $f'(z_0)\neq0$. Si para toda curva $\gamma$ tal que $\gamma(t_0)=z_0$ y $\gamma'(t_0)\neq0$ se tiene $$\arg((f\circ\gamma)'(t_0))-\arg\gamma'(t_0)=Cte,$$ entonces $f$ preserva ángulos en $z_0$.

>[!Exercise] Diferencial inyectiva real
>Sea $f:G\subseteq\mathbb{R}^2\to\mathbb{C}$ diferenciable como función de dos variables con diferencial inyectiva. Entonces $f$ preserva ángulos.
>>[!Proof]-
>>1. Ejercicio: probar que $\arg((f\circ\gamma)'(t_0))-\arg\gamma'(t_0)$ no depende de $\gamma$.

## Aplicación conforme

>[!Definition] Aplicación conforme
>Sea $f:G\subseteq\mathbb{C}\to\mathbb{C}$ con $G$ abierto. Decimos que $f$ es una aplicación conforme si (1) preserva ángulos y (2) existe $$\exists\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}\quad\forall z_0\in G.$$

>[!Remark] Las funciones diferenciables con derivada no nula son conformes
>Las funciones $f$ diferenciables tales que $f'(z)\neq0$ $\forall z\in G$ son aplicaciones conformes, pues cumplen $(2)$ por ser diferenciables y preservan ángulos por el teorema anterior.

>[!Proposition] Significado del factor de dilatación
>Supongamos que $f$ es derivable como función de dos variables reales y supongamos que $$\exists\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}=L\qquad (*).$$
>Entonces para toda curva derivable $\gamma$ en $G$ con $\gamma(t_0)=z_0$ y $\gamma'(t_0)\neq0$ se tiene $$\frac{|(f\circ\gamma)'(t_0)|}{|\gamma'(t_0)|}=L.$$
>>[!Proof]-
>>1. Sea $\gamma$ una curva derivable en $G$ con $\gamma(t_0)=z_0$ y $\gamma'(t_0)\neq0$. Como $(*)$ existe y es igual a $L$, la igualdad seguirá valiendo para todas las rectas o curvas, es decir $$L=\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}=\lim_{t\to t_0}\frac{|f(\gamma(t))-f(\gamma(t_0))|}{|\gamma(t)-\gamma(t_0)|}.$$
>>2. Entonces $$L=\lim_{t\to t_0}\frac{|f(\gamma(t))-f(\gamma(t_0))|}{|t-t_0|}\cdot\frac{|t-t_0|}{|\gamma(t)-\gamma(t_0)|}=\frac{|(f\circ\gamma)'(t_0)|}{|\gamma'(t_0)|}.$$
>>3. Es decir, acabamos de probar que si $$\exists\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}=L,$$ entonces $$\frac{|(f\circ\gamma)'(t_0)|}{|\gamma'(t_0)|}=L\quad\forall\text{ curva }\gamma\text{ derivable con }\gamma(t_0)=z_0\text{ y }\gamma'(t_0)\neq0.$$

>[!Theorem] De preservar ángulos a diferenciabilidad compleja
>Sea $G\subseteq\mathbb{C}$ abierto y sea $f:G\to\mathbb{C}$ una función derivable como función de dos variables reales en $z_0$. Si $f$ preserva ángulos en $z_0$ y $$\exists\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|},$$ entonces $f$ es diferenciable como función compleja en $z_0$.
>>[!Proof]-
>>- **Caso 1: límite cero.**
>>	1. Supongamos que $$\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}=0.$$
>>	2. Entonces $$\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0}=0.$$
>>	3. Por lo tanto $f$ es diferenciable en sentido complejo en $z_0$ y $f'(z_0)=0$.
>>- **Caso 2: límite no nulo.**
>>	1. Supongamos que $$\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}=\partial\neq0,\quad\partial\in\mathbb{R}.$$
>>	2. Como $f$ es derivable como función de dos variables, por la proposición anterior tenemos que $$\frac{|(f\circ\gamma)'(t_0)|}{|\gamma'(t_0)|}=\partial$$ para cada curva $\gamma$ que pasa por $z_0$ tal que $\gamma'(t_0)\neq0$ y $\gamma(t_0)=z_0$.
>>	3. Como $f$ preserva ángulos en $z_0$, entonces $\arg((f\circ\gamma)'(t_0))-\arg\gamma'(t_0)$ no depende de la curva $\gamma$ con $\gamma(t_0)=z_0$ y $\gamma'(t_0)\neq0$. Entonces $$\arg((f\circ\gamma)'(t_0))-\arg\gamma'(t_0)=\arg\left(\frac{(f\circ\gamma)'(t_0)}{\gamma'(t_0)}\right)=b\ (Cte).$$
>>	4. Así $$\frac{(f\circ\gamma)'(t_0)}{\gamma'(t_0)}=\left|\frac{(f\circ\gamma)'(t_0)}{\gamma'(t_0)}\right|e^{i\arg\left(\frac{(f\circ\gamma)'(t_0)}{\gamma'(t_0)}\right)}=\partial e^{ib}=C.$$
>>	5. Entonces $(f\circ\gamma)'(t_0)=C\gamma'(t_0)$. Pero por otra parte, por la regla de la cadena en dos variables, $$(f\circ\gamma)'(t_0)=d_{\gamma(t_0)}f\cdot\gamma'(t_0)=d_{z_0}f\cdot\gamma'(t_0)=C\gamma'(t_0).$$
>>	6. Como esto vale para toda $\gamma$ con $\gamma'(t_0)\neq0$, se deduce $$d_{z_0}f=C.$$
>>	7. Por otra parte, $f$ es derivable como función de dos variables, es decir $$\lim_{z\to z_0}\frac{f(z)-f(z_0)-d_{z_0}f(z-z_0)}{|z-z_0|}=0.$$
>>	8. Sea $$\eta(z)=\frac{f(z)-f(z_0)-d_{z_0}f(z-z_0)}{|z-z_0|},$$ de modo que $$f(z)-f(z_0)=|z-z_0|\eta(z)+d_{z_0}f(z-z_0).$$
>>	9. Luego $$\frac{f(z)-f(z_0)}{z-z_0}=\frac{|z-z_0|}{z-z_0}\eta(z)+C\xrightarrow[z\to z_0]{}C.$$
>>	10. Por lo tanto $f$ es diferenciable en sentido complejo en $z_0$ y $f'(z_0)=C$.

>[!Remark] Relación entre diferenciabilidades
>Este teorema relaciona la diferenciabilidad como función de dos variables reales con la diferenciabilidad compleja.

## Transformación de Möbius

>[!Definition] Transformación de Möbius
>Una aplicación de la forma $$S(z)=\frac{az+b}{cz+d}$$ con $a,b,c,d\in\mathbb{C}$ y $ad-bc\neq0$ se llama transformación de Möbius (T.M.).

>[!Proposition] Propiedades básicas
>Sea $S(z)=\frac{az+b}{cz+d}$ una transformación de Möbius, con $ad-bc\neq0$. Su dominio de valores finitos es $$D=\{z\in\mathbb C:cz+d\neq0\}=\begin{cases}\mathbb C\setminus\{-d/c\},&c\neq0,\\\mathbb C,&c=0.\end{cases}$$
>- **(a)** $S$ es conforme en $D$.
>- **(b)** $$S'(z)=\frac{ad-bc}{(cz+d)^2}\neq0\quad\forall z\in D.$$
>- **(c)** Multiplicar todos los coeficientes por un mismo escalar no nulo no cambia la transformación: $$\frac{(\lambda a)z+(\lambda b)}{(\lambda c)z+(\lambda d)}=\frac{\lambda(az+b)}{\lambda(cz+d)}=S(z),\quad\forall z\in D,\quad\forall\lambda\in\mathbb C\setminus\{0\}.$$
>>[!Proof]-
>>- (a) Conformidad
>>	1. **Analiticidad y dominio.** El numerador $az+b$ y el denominador $cz+d$ son polinomios, luego son analíticos. Su cociente $S$ es analítico en el abierto $D$, donde el denominador no se anula. Si $c=0$, la condición $ad-bc=ad\neq0$ implica $d\neq0$, de modo que $D=\mathbb C$.
>>	2. **Criterio de conformidad.** Como se verifica explícitamente en (b), $S'(z)\neq0$ para todo $z\in D$. Una función analítica con derivada no nula es conforme en cada punto de su dominio. Por lo tanto, $S$ es conforme en $D$.
>>- (b) Derivada no nula
>>	1. **Regla del cociente.** Para $z\in D$, $$\begin{aligned}S'(z)&=\frac{a(cz+d)-c(az+b)}{(cz+d)^2}\\&=\frac{acz+ad-acz-bc}{(cz+d)^2}\\&=\frac{ad-bc}{(cz+d)^2}.\end{aligned}$$
>>	2. **No se anula.** El numerador $ad-bc$ es no nulo por la definición de transformación de Möbius, y el denominador es no nulo porque $z\in D$. Por eso $S'(z)\neq0$ en todo $D$. En particular, si $c=0$, la fórmula se reduce a $S'(z)=a/d\neq0$.
>>- (c) Multiplicación por un escalar
>>	1. **Los nuevos coeficientes siguen definiendo una T.M.** Sea $\lambda\neq0$. Su determinante es $$(\lambda a)(\lambda d)-(\lambda b)(\lambda c)=\lambda^2(ad-bc)\neq0.$$
>>	2. **El dominio y los valores finitos no cambian.** Como $\lambda\neq0$, se tiene $\lambda(cz+d)\neq0$ si y solo si $cz+d\neq0$. En ese dominio común podemos cancelar $\lambda$: $$\frac{(\lambda a)z+\lambda b}{(\lambda c)z+\lambda d}=\frac{\lambda(az+b)}{\lambda(cz+d)}=\frac{az+b}{cz+d}=S(z).$$
>>	3. **También coincide la extensión a la esfera.** Si $c\neq0$, el polo sigue siendo $-\lambda d/(\lambda c)=-d/c$, su imagen sigue siendo $\infty$ y el valor en $\infty$ sigue siendo $\lambda a/(\lambda c)=a/c$. Si $c=0$, ambas expresiones representan la misma función afín y envían $\infty$ a $\infty$. Así, el escalar tampoco cambia la transformación en $\mathbb C_\infty$.

>[!Exercise] Unicidad de los coeficientes salvo escalar
>Sean $$S(z)=\frac{az+b}{cz+d}\qquad T(z)=\frac{\alpha z+\beta}{\gamma z+\delta}$$dos transformaciones de Möbius tales que $S=T$. Entonces existe $\lambda\in\mathbb{C}$ tal que $a=\lambda\alpha$, $b=\lambda\beta$, $c=\lambda\gamma$ y $d=\lambda\delta$.
>>[!Proof]-
>>1. De $\frac{az+b}{cz+d}=\frac{\alpha z+\beta}{\gamma z+\delta}$ se deduce $(az+b)(\gamma z+\delta)=(\alpha z+\beta)(cz+d)$.
>>2. Expandiendo, $$a\gamma z^2+(a\delta+b\gamma)z+b\delta=c\alpha z^2+(d\alpha+c\beta)z+d\beta.$$
>>3. Igualando coeficientes se obtiene $a\gamma=c\alpha$, $a\delta+b\gamma=d\alpha+c\beta$ y $b\delta=d\beta$, de donde $(a,b,c,d)=\lambda(\alpha,\beta,\gamma,\delta)$.

>[!Proposition] Inversa, composición y grupo
>- **(a)** Sea $S$ una T.M existe $$S^{-1}(w)=\frac{dw-b}{-cw+a}.$$ (osea la inversa de una T.M es T.M) 
>- **(b)** Si $S$ y $T$ son T.M., entonces $S\circ T$ también lo es.
>- **(c)** $S(z)=z$ ($a=1,b=0,c=0,d=1$) es T.M. En consecuencia, el conjunto $\{T.M.\}$ es un grupo.
>>[!Proof]-
>>- (a) Inversa
>>	1. **Despejamos la preimagen.** Sea $S(z)=\frac{az+b}{cz+d}$ con $\Delta=ad-bc\neq0$. Para valores finitos donde las expresiones están definidas, $$w=\frac{az+b}{cz+d}\iff cwz+dw=az+b\iff(a-cw)z=dw-b.$$ Esto sugiere definir $$R(w)=\frac{dw-b}{-cw+a}.$$
>>	2. **La candidata es Möbius.** Sus coeficientes son $d,-b,-c,a$, cuyo determinante es $$da-(-b)(-c)=ad-bc=\Delta\neq0.$$ Por lo tanto, $R$ es una transformación de Möbius.
>>	3. **Verificamos ambas composiciones.** Sustituyendo y simplificando, $$\begin{aligned}S(R(w))&=\frac{a\frac{dw-b}{-cw+a}+b}{c\frac{dw-b}{-cw+a}+d}=\frac{a(dw-b)+b(-cw+a)}{c(dw-b)+d(-cw+a)}=\frac{\Delta w}{\Delta}=w,\\R(S(z))&=\frac{d\frac{az+b}{cz+d}-b}{-c\frac{az+b}{cz+d}+a}=\frac{d(az+b)-b(cz+d)}{-c(az+b)+a(cz+d)}=\frac{\Delta z}{\Delta}=z.\end{aligned}$$
>>	4. **Valores excepcionales y dominio del grupo.** Para considerar estas funciones como un grupo de aplicaciones sobre un mismo conjunto, trabajamos en $\mathbb C_\infty$ con sus valores extendidos. Si $c\neq0$, las fórmulas dan $$S(-d/c)=\infty,\qquad R(\infty)=-d/c,\qquad S(\infty)=a/c,\qquad R(a/c)=\infty.$$ Así, ambas composiciones son la identidad también en los puntos excluidos del cálculo anterior. Si $c=0$, entonces $a,d\neq0$, ambas funciones son afines y ambas fijan $\infty$. Concluimos que $$\boxed{S^{-1}(w)=R(w)=\frac{dw-b}{-cw+a}.}$$
>>- (b) Composición
>>	1. **Calculamos los coeficientes.** Sean $$S(z)=\frac{az+b}{cz+d},\qquad T(z)=\frac{\alpha z+\beta}{\gamma z+\delta},\qquad ad-bc\neq0,\quad\alpha\delta-\beta\gamma\neq0.$$ Entonces $$\begin{aligned}(S\circ T)(z)&=\frac{a\frac{\alpha z+\beta}{\gamma z+\delta}+b}{c\frac{\alpha z+\beta}{\gamma z+\delta}+d}\\&=\frac{(a\alpha+b\gamma)z+(a\beta+b\delta)}{(c\alpha+d\gamma)z+(c\beta+d\delta)}.\end{aligned}$$
>>	2. **El nuevo determinante no se anula.** Desarrollando y agrupando, $$\begin{aligned}&(a\alpha+b\gamma)(c\beta+d\delta)-(a\beta+b\delta)(c\alpha+d\gamma)\\&\qquad=ad(\alpha\delta-\beta\gamma)+bc(\beta\gamma-\alpha\delta)\\&\qquad=(ad-bc)(\alpha\delta-\beta\gamma)\neq0.\end{aligned}$$ Por lo tanto, la fórmula obtenida es una transformación de Möbius.
>>	3. **Qué falta comprobar.** Llamamos $F$ a la transformación de Möbius definida por los coeficientes obtenidos: $$F(z)=\frac{(a\alpha+b\gamma)z+(a\beta+b\delta)}{(c\alpha+d\gamma)z+(c\beta+d\delta)}.$$ El cálculo del paso 1 demuestra $F(z)=S(T(z))$ cuando $z$, $T(z)$ y $S(T(z))$ son finitos: allí todas las divisiones son ordinarias. La fórmula de $F$, interpretada en la esfera, también tiene valores en los demás puntos, pero debemos comprobar que coinciden con aplicar primero $T$ y después $S$.
>>	- **Caso 1: $z_0$ es finito, pero $T(z_0)=\infty$.**
>>		1. **Qué punto estamos tomando.** Este es el punto finito donde el denominador de $T$ vale cero: $$\gamma z_0+\delta=0,\qquad z_0=-\delta/\gamma.$$ Existe cuando $\gamma\neq0$. El numerador $\alpha z_0+\beta$ no es cero, porque una T.M. no puede tener numerador y denominador simultáneamente nulos. El cálculo del paso 1 no cubría este punto porque utilizaba la fracción de $T$ como una división ordinaria.
>>		2. **Resultado de aplicar primero $T$ y después $S$.** El recorrido es $$z_0\xrightarrow{T}\infty\xrightarrow{S}S(\infty).$$ Por la definición de $S$ en el infinito (por ser T.M), ya sabemos que $$S(T(z_0))=\begin{cases}a/c,&c\neq0,\\\infty,&c=0.\end{cases}$$
>>		3. **Resultado de evaluar la fórmula $F$.** Sustituimos ese mismo $z_0$ en el numerador y denominador de $F$. Usando $\gamma z_0+\delta=0$, quedan $$\begin{aligned}a(\alpha z_0+\beta)+b(\gamma z_0+\delta)&=a(\alpha z_0+\beta),\\c(\alpha z_0+\beta)+d(\gamma z_0+\delta)&=c(\alpha z_0+\beta).\end{aligned}$$ Si $c\neq0$, cancelamos el factor no nulo $\alpha z_0+\beta$ y obtenemos $F(z_0)=a/c$. Si $c=0$, el denominador vale cero y el numerador no, así que la definición en la esfera da $F(z_0)=\infty$. En ambos casos, $$F(z_0)=S(T(z_0)).$$
>>	- **Caso 2: $z_0$ y $T(z_0)$ son finitos, pero $S(T(z_0))=\infty$.**
>>		1. **Qué punto estamos tomando y qué debe dar la composición.** Escribimos $w_0=T(z_0)$. Aquí la primera aplicación no da infinito; es la segunda la que lo hace: $$z_0\xrightarrow{T}w_0\xrightarrow{S}\infty.$$ Esto significa que $\gamma z_0+\delta\neq0$ y $cw_0+d=0$. Por lo tanto, sabemos que $S(T(z_0))=\infty$. Este punto quedó fuera del cálculo ordinario porque el denominador de la fracción de $S$, al evaluarla en $w_0$, es cero.
>>		2. **Resultado de evaluar la fórmula $F$.** Como $w_0=\frac{\alpha z_0+\beta}{\gamma z_0+\delta}$, el denominador de $F$ en $z_0$ es $$c(\alpha z_0+\beta)+d(\gamma z_0+\delta)=(\gamma z_0+\delta)(cw_0+d)=0.$$ Su numerador es $$(\gamma z_0+\delta)(aw_0+b)\neq0,$$ porque ambos factores son no nulos: el primero porque $T(z_0)$ es finito, y el segundo porque $cw_0+d=0$ y los dos términos de la fracción de $S$ no pueden anularse simultáneamente. Por la definición en la esfera, $$F(z_0)=\infty=S(T(z_0)).$$
>>	- **Caso 3: el punto inicial es $z_0=\infty$.**
>>		1. **Qué debemos comparar.** Ahora no partimos de un punto finito: queremos comparar el recorrido $$\infty\xrightarrow{T}T(\infty)\xrightarrow{S}S(T(\infty))$$ con el valor $F(\infty)$. El paso 1 no verificaba este punto porque allí $z$ era un número complejo finito. Por la definición de una Möbius en el infinito, la fórmula nueva da $$F(\infty)=\begin{cases}\displaystyle\frac{a\alpha+b\gamma}{c\alpha+d\gamma},&c\alpha+d\gamma\neq0,\\\infty,&c\alpha+d\gamma=0.\end{cases}$$ Falta comparar este valor con el resultado del recorrido.
>>		2. **Si la primera aplicación da un valor finito.** En este caso $T(\infty)=\alpha/\gamma$ con $\gamma\neq0$. Aplicando después $S$, si el resultado es finito obtenemos $$S(T(\infty))=\frac{a\frac\alpha\gamma+b}{c\frac\alpha\gamma+d}=\frac{a\alpha+b\gamma}{c\alpha+d\gamma}=F(\infty).$$ Si $c\alpha+d\gamma=0$, la definición de $S$ da $S(T(\infty))=\infty$, y la definición de $F$ también da $F(\infty)=\infty$. Por lo tanto, coinciden.
>>		3. **Si la primera aplicación también da infinito.** Aquí $T(\infty)=\infty$, lo que corresponde a $\gamma=0$ y $\alpha\neq0$. El recorrido termina en $S(\infty)$: vale $a/c$ si $c\neq0$ e $\infty$ si $c=0$. En la fórmula de $F(\infty)$, los coeficientes se reducen a $a\alpha$ y $c\alpha$, por lo que da exactamente lo mismo: $a\alpha/(c\alpha)=a/c$ si $c\neq0$, e $\infty$ si $c=0$. Así, también en este caso $$F(\infty)=S(T(\infty)).$$ Estas dos posibilidades solo describen adónde envía $T$ el punto inicial $\infty$; ambas pertenecen al mismo caso $z_0=\infty$.
>>	4. **Conclusión.** El cálculo del paso 1 y las verificaciones anteriores cubren todos los puntos de $\mathbb C_\infty$. Por lo tanto, $F=S\circ T$ en toda la esfera y, como $F$ es Möbius por el paso 2, la composición también lo es.
>>- (c) Estructura de grupo
>>	1. **Clausura y asociatividad.** La composición de dos transformaciones de Möbius es Möbius por (b). Además, la composición de funciones es asociativa: $$(S\circ T)\circ U=S\circ(T\circ U).$$
>>	2. **Elemento neutro.** La identidad $I(z)=z$ es Möbius, con coeficientes $a=d=1$, $b=c=0$ y determinante $1$. Fija también $\infty$ y satisface $$I\circ S=S=S\circ I.$$
>>	3. **Inversos.** Por (a), cada transformación $S$ tiene una inversa $S^{-1}$ que también es Möbius y cumple $$S\circ S^{-1}=I=S^{-1}\circ S.$$ Se verifican así todos los axiomas: las transformaciones de Möbius de $\mathbb C_\infty$ forman un grupo bajo la composición.

>[!Proposition] Extensión a la esfera de Riemann
>Podemos extender las transformaciones de Möbius a $\mathbb{C}_\infty$. Si $c\neq0$, escribiendo $\mathbb{C}_\infty=(\mathbb{C}\setminus\{-d/c\})\cup\{-d/c\}\cup\{\infty\}$, sea $S^*:\mathbb{C}_\infty\to\mathbb{C}_\infty$ dada por $$S^*(z)=\begin{cases}S(z),&\text{si }z\in\mathbb{C}\setminus\{-d/c\},\\\infty,&\text{si }z=-d/c,\\a/c,&\text{si }z=\infty.\end{cases}$$ Si $c=0$, entonces $ad\neq0$, de modo que $d\neq0$ y el denominador $cz+d=d$ no se anula en ningún punto de $\mathbb C$; en este caso la extensión queda dada por $S^*(z)=S(z)$ para $z\in\mathbb C$ y $S^*(\infty)=\infty$.
>>[!Proof]-
>>1. **Continuidad en los puntos ordinarios cuando $c\neq0$.** En $\mathbb C\setminus\{-d/c\}$, la función $S^*$ coincide con la función racional $S(z)=\frac{az+b}{cz+d}$, que es continua porque su denominador no se anula.
>>2. **Continuidad en $z_0=-d/c$.** Como $$az_0+b=-\frac{ad}{c}+b=\frac{bc-ad}{c}\neq0,$$ se tiene $$\lim_{z\to z_0}\frac{1}{S(z)}=\lim_{z\to z_0}\frac{cz+d}{az+b}=0.$$ Por lo tanto, $S(z)\to\infty=S^*(z_0)$ cuando $z\to z_0$, de modo que $S^*$ es continua en $z_0$.
>>3. **Continuidad en $\infty$ cuando $c\neq0$.** Se cumple $$S(z)-\frac ac=\frac{c(az+b)-a(cz+d)}{c(cz+d)}=\frac{bc-ad}{c(cz+d)}\xrightarrow[z\to\infty]{}0.$$ Luego $S(z)\to a/c=S^*(\infty)$, por lo que $S^*$ es continua en $\infty$.
>>4. **Caso $c=0$.** Como $ad\neq0$, se tiene $a,d\neq0$ y $$S(z)=\frac adz+\frac bd.$$ Esta función es continua en $\mathbb C$ y además $$\frac1{S(z)}=\frac d{az+b}\xrightarrow[z\to\infty]{}0.$$ Por consiguiente, $S(z)\to\infty=S^*(\infty)$ y $S^*$ también es continua en toda $\mathbb C_\infty$ en este caso.
>>5. **Inversa.** Definimos $$R(w)=\frac{dw-b}{-cw+a}.$$ Sus coeficientes tienen determinante $da-(-b)(-c)=ad-bc\neq0$, así que $R$ también es una transformación de Möbius. Por la proposición anterior, sus extensiones satisfacen $$R^*\circ S^*=\operatorname{Id}_{\mathbb C_\infty}=S^*\circ R^*,$$ por lo que $R^*=(S^*)^{-1}$ y $S^*$ es biyectiva.
>>6. **Conclusión.** Aplicando a $R^*$ el mismo argumento de los pasos anteriores, vemos que $(S^*)^{-1}=R^*$ es continua. Por lo tanto, $S^*$ es biyectiva, continua y tiene inversa continua; es decir, $S^*$ es un homeomorfismo de $\mathbb C_\infty$.

>[!Definition] Aplicaciones elementales
>- Traslación: $S(z)=z+b$ ($a=1$, $b\in\mathbb{C}$, $c=0$, $d=1$).
>- Dilatación: $S(z)=az$, $a\in\mathbb{R}_{>0}$ ($a\in\mathbb{C}$, $b=0$, $c=0$, $d=1$).
>- Rotación: $S(z)=e^{i\theta}z$ ($a=e^{i\theta}$, $b=0$, $c=0$, $d=1$).
>- Inversión: $S(z)=1/z$ ($a=0$, $b=1$, $c=1$, $d=0$).

>[!Proposition] Descomposición en aplicaciones elementales
>Las aplicaciones de la definición anterior son transformaciones de Möbius y si $S$ es una T.M., entonces $S$ se puede escribir como composición de ellas.
>>[!Proof]-
>>- **Caso $c=0$.**
>>	1. Entonces $S(z)=\frac{a}{d}z+\frac{b}{d}$. Notar que $d\neq0$, pues si lo fuera entonces $a\cdot0-b\cdot0=0$, absurdo pues $S$ es una T.M.
>>	2. Escribimos $\frac{a}{d}=re^{i\theta}$ donde $r=|a/d|$ y $\theta=\arg(a/d)$.
>>	3. Sean $S_1(z)=rz$, $S_2(z)=e^{i\theta}z$ y $S_3(z)=z+b/a$.
>>	4. Entonces $$\begin{aligned}S_1\circ S_2\circ S_3(z)&=S_1\circ S_2(z+b/a)\\&=S_1(e^{i\theta}(z+b/a))\\&=r(e^{i\theta}z+e^{i\theta}b/a)\\&=\frac{a}{d}z+\frac{b}{d}=S(z).\end{aligned}$$
>>	5. Es decir, $S(z)=S_1\circ S_2\circ S_3(z)$.
>>- **Caso $c\neq0$.**
>>	1. Sean $S_1(z)=z+d/c$, $S_2(z)=1/z$, $S_3(z)=\frac{bc-ad}{c^2}z$ y $S_4(z)=z+a/c$.
>>	2. Ejercicio: verificar que $S_4\circ S_3\circ S_2\circ S_1(z)=S(z)$.

>[!Remark] Estrategia para probar propiedades
>Si tengo que probar una propiedad para $S$, me basta ver que cada una de las aplicaciones elementales verifican tal propiedad.

>[!Proposition] Puntos fijos
>Si $S$ es una T.M. tal que $S\neq Id$, entonces $S$ tiene a lo sumo dos puntos fijos.
>>[!Proof]-
>>1. Si $S:\mathbb{C}\setminus\{-d/c\}\to\mathbb{C}$, $S(z)=\frac{az+b}{cz+d}$, entonces $$S(z)=z\iff\frac{az+b}{cz+d}=z\iff az+b=z(cz+d)\iff az+b=cz^2+dz.$$
>>2. Es decir, $$cz^2+z(d-a)+b=0,$$ que tiene a lo sumo dos raíces.
>>3. Por lo tanto, una T.M. puede tener como mucho dos puntos fijos, salvo el caso en que $S(z)=z$ para todo $z$.
>>4. Si $c=0$, entonces $S(z)=\frac{a}{d}z+\frac{b}{d}=z\iff az+b=dz\iff z(a-d)+b=0\iff z=-b/(a-d)$.

>[!Proposition] Determinación por tres puntos
>Una transformación de Möbius está determinada de manera única por su acción en tres puntos distintos de $\mathbb{C}_\infty$.
>>[!Proof]-
>>1. Sea $S$ una T.M. y sean $a,b,c$ tres puntos distintos en $\mathbb{C}_\infty$, con $S(a)=\alpha$, $S(b)=\beta$ y $S(c)=\gamma$.
>>2. Supongamos que $T$ es otra T.M. con esta misma propiedad y considero $T^{-1}\circ S$, que es una T.M.
>>3. Entonces $T^{-1}\circ S(a)=a$, $T^{-1}\circ S(b)=b$ y $T^{-1}\circ S(c)=c$.
>>4. Luego $T^{-1}\circ S$ es una T.M. con tres puntos fijos $(a,b,c)$ y por lo tanto, por la proposición anterior, $T^{-1}\circ S=I$, es decir $T^{-1}\circ S(z)=z$.
>>5. Es decir, $S=T$.

>[!Example] Aplicación: enviar tres puntos a $1,0,\infty$
>- **(a)** Sean $z_2,z_3,z_4$ distintos en $\mathbb{C}_\infty$ y buscamos $S:\mathbb{C}_\infty\to\mathbb{C}_\infty$ tal que $S(z_2)=1$, $S(z_3)=0$ y $S(z_4)=\infty$. Entonces $$S(z)=\frac{z-z_3}{z-z_4}\cdot\frac{z_2-z_4}{z_2-z_3}.$$ Por la proposición anterior, $S$ es la única transformación que tiene esta propiedad.
>- **(b)** Sean $z_2,z_3,z_4$ distintos en $\mathbb{C}_\infty$ con $z_2=\infty$. Buscamos $S:\mathbb{C}_\infty\to\mathbb{C}_\infty$ tal que $S(z_2)=1$, $S(z_3)=0$ y $S(z_4)=\infty$. Como $S(\infty)=a/c=1$, se tiene $a=c$. Luego $$S(z)=\frac{z-z_3}{z-z_4}.$$ Lo mismo, $S$ es única con tal propiedad.
>- **(c)** Sean $z_2,z_3,z_4$ distintos en $\mathbb{C}_\infty$ con $z_3=\infty$. Buscamos $S:\mathbb{C}_\infty\to\mathbb{C}_\infty$ tal que $S(z_2)=1$, $S(z_3)=0$ y $S(z_4)=\infty$. Entonces $$S(z)=\frac{z_2-z_4}{z-z_4}.$$
>- **(d)** Sean $z_2,z_3,z_4$ distintos en $\mathbb{C}_\infty$ con $z_4=\infty$. Buscamos $S:\mathbb{C}_\infty\to\mathbb{C}_\infty$ tal que $S(z_2)=1$, $S(z_3)=0$ y $S(z_4)=\infty$. Entonces $$S(z)=\frac{z-z_3}{z_2-z_3}.$$
>>[!Proof]-
>>- (b)
>>	1. Sea $S^*$ la extensión de $S(z)=(az+b)/(cz+d)$ dada en la proposición anterior, que por abuso denotamos $S$; como $z_2=\infty$ y $z_2,z_3,z_4$ son distintos, $z_3,z_4\in\mathbb C$ son finitos y $z_3\ne z_4$.
>>	2. Si $c=0$ entonces $S^*(\infty)=\infty\ne 1$ y ningún $z$ finito cumple $S^*(z)=\infty$, lo que contradice $S^*(\infty)=1$ y $S^*(z_4)=\infty$ con $z_4$ finito; luego $c\ne 0$, $S^*(\infty)=a/c=1$ y $a=c\ne 0$, pues si $a=c=0$ sería $ad-bc=0$.
>>	3. Como $S^*(z_3)=0\ne\infty$, $z_3$ no es el polo $-d/c$ donde $S^*$ vale $\infty$; luego vale la fórmula finita $$S(z_3)=\frac{az_3+b}{cz_3+d}=0,$$ de donde $b=-az_3$.
>>	4. Como $z_4$ es finito, $c\ne 0$ y $S^*(z_4)=\infty$, $z_4$ tiene que ser el único polo $-d/c$; luego $d=-cz_4=-az_4$.
>>	5. Sustituyendo queda $$S(z)=\frac{az-az_3}{az-az_4}=\frac{z-z_3}{z-z_4},$$ que corresponde a $a=c=1$, $b=-z_3$, $d=-z_4$ con $ad-bc=z_3-z_4\ne 0$ y cumple $S(\infty)=1$, $S(z_3)=0$, $S(z_4)=\infty$; como toda $S$ con esa propiedad es necesariamente de esta forma, es única.

>[!Definition] Razón armónica
>Dados $z,z_2,z_3,z_4$ puntos distintos en $\mathbb{C}_\infty$. Llamamos razón armónica de $z,z_2,z_3,z_4$, que denotamos $(z,z_2,z_3,z_4)$, a la imagen de $z$ bajo la única transformación de Möbius que envía $z_2\mapsto1$, $z_3\mapsto0$ y $z_4\mapsto\infty$.

>[!Example] Fórmula de la razón armónica
>Si $z,z_2,z_3,z_4$ son puntos distintos en $\mathbb{C}_\infty$ y $S$ satisface $S(z_2)=1$, $S(z_3)=0$ y $S(z_4)=\infty$ como en la parte (a) del ejemplo anterior, es decir $$S(z)=\frac{z-z_3}{z-z_4}\cdot\frac{z_2-z_4}{z_2-z_3},$$ entonces $$(z,z_2,z_3,z_4)=S(z)=\frac{(z-z_3)(z_2-z_4)}{(z-z_4)(z_2-z_3)}.$$
>En particular, $(z_2,z_2,z_3,z_4)=1$ y $(z,1,0,\infty)=z$. 

>[!Proposition] Las T.M. mandan rectas o circunferencias en rectas o circunferencias
>Una transformación de Möbius manda rectas o circunferencias en rectas o circunferencias.
>>[!Proof]-
>>- **(a) Caso $S(z)=az+b$.**
>>	1. Sea $R$ recta en $\mathbb{C}$. Entonces $R(t)=\alpha t+\beta$ con $\alpha,\beta\in\mathbb{C}$, $t\in\mathbb{R}$.
>>	2. Luego $$S(R)=(a(\alpha t+\beta)+b)=(a\alpha)t+(a\beta+b),$$ que es otra recta.
>>	3. Sea $z$ tal que $|z-z_0|=r$. Calculemos $$|S(z)-S(z_0)|=|az+b-az_0-b|=|a||z-z_0|=|a|r.$$
>>	4. Por lo tanto, $S$ manda la circunferencia de radio $r$ a la circunferencia de radio $|a|r$.
>>- **(b) Caso $S(z)=1/z$.**
>>	1. La ecuación $$\alpha z\bar z+\beta z+\bar\beta\bar z+\gamma=0$$ con $\alpha,\gamma\in\mathbb{R}$, $\alpha\neq0$ y $\beta\in\mathbb{C}$ con $\beta\bar\beta>\alpha\gamma$ es la ecuación de una circunferencia de centro $z_0=-\bar\beta/\alpha$ y radio $r_0^2=(|\beta|^2-\alpha\gamma)/\alpha^2$.
>>	2. Si $\alpha=0$, la ecuación $$\beta z+\bar\beta\bar z+\gamma=0$$ es la ecuación de una recta.
>>	3. Sea $z\neq0$ que cumple $$\alpha z\bar z+\beta z+\bar\beta\bar z+\gamma=0,\quad\alpha,\gamma\in\mathbb{R},\ \beta\in\mathbb{C},\ \beta\bar\beta>\alpha\gamma\qquad (*).$$
>>	4. Sacamos $z\bar z$ factor común en $(*)$: $$z\bar z\left(\alpha+\frac{\beta}{\bar z}+\frac{\bar\beta}{z}+\frac{\gamma}{z\bar z}\right)=0\implies\alpha+\frac{1}{z}\bar\beta+\frac{1}{\bar z}\beta+\frac{1}{z\bar z}\gamma=0.$$
>>	5. Poniendo $w=1/z$, se obtiene una ecuación del mismo tipo en $w$. Según los casos: si $\alpha\neq0$ y $\gamma\neq0$ manda círculo en círculo; si $\alpha=0$ y $\gamma\neq0$ manda recta en círculo; si $\alpha=0$ y $\gamma=0$ manda recta en recta; si $\alpha\neq0$ y $\gamma=0$ manda círculo en recta.
