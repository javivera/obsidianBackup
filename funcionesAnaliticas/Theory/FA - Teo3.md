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
>>5. Si tenemos dos curvas $\gamma_1$ y $\gamma_2$ tales que $\gamma_1(t_1)=z_0=\gamma_2(t_2)$ y $\gamma_1'(t_1),\gamma_2'(t_2)\neq0$, se tiene $$\arg((f\circ\gamma_1)'(t_1))-\arg\gamma_1'(t_1)=\arg f'(z_0)\tag{1}.$$
>>6. Análogamente, $$\arg((f\circ\gamma_2)'(t_2))-\arg\gamma_2'(t_2)=\arg f'(z_0)\tag{2}.$$
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
>Supongamos que $f$ es derivable como función de dos variables reales y supongamos que $$\exists\lim_{z\to z_0}\frac{|f(z)-f(z_0)|}{|z-z_0|}=L\tag{*}.$$
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
>1. $S$ es conforme en $\mathbb{C}\setminus\{-d/c\}$.
>2. $$S'(z)=\frac{ad-cb}{(cz+d)^2}\neq0\quad\forall z\in\mathbb{C}\setminus\{-d/c\}.$$
>3. $$\frac{(\lambda a)z+(\lambda b)}{(\lambda c)z+(\lambda d)}=\frac{\lambda(az+b)}{\lambda(cz+d)}=S(z),\quad\forall\lambda\in\mathbb{C}\setminus\{0\}.$$
>>[!Proof]-
>>1. Sea $z\in\mathbb{C}$, $z\neq-d/c$. Veamos que $S$ es analítica en $z$.
>>2. Se tiene $$S'(z)=\frac{ad-cb}{(cz+d)^2},$$ que es continua $\forall z\in\mathbb{C}$, $z\neq-d/c$ y $S'(z)\neq0$.
>>3. Luego $S$ es conforme en $\mathbb{C}\setminus\{-d/c\}$.

>[!Exercise] Unicidad de los coeficientes salvo escalar
>Sean $S(z)=\frac{az+b}{cz+d}$ y $T(z)=\frac{\alpha z+\beta}{\gamma z+\delta}$ dos transformaciones de Möbius tales que $S=T$. Entonces existe $\lambda\in\mathbb{C}$ tal que $a=\lambda\alpha$, $b=\lambda\beta$, $c=\lambda\gamma$ y $d=\lambda\delta$.
>>[!Proof]-
>>1. De $\frac{az+b}{cz+d}=\frac{\alpha z+\beta}{\gamma z+\delta}$ se deduce $(az+b)(\gamma z+\delta)=(\alpha z+\beta)(cz+d)$.
>>2. Expandiendo, $$a\gamma z^2+(a\delta+b\gamma)z+b\delta=c\alpha z^2+(d\alpha+c\beta)z+d\beta.$$
>>3. Igualando coeficientes se obtiene $a\gamma=c\alpha$, $a\delta+b\gamma=d\alpha+c\beta$ y $b\delta=d\beta$, de donde $(a,b,c,d)=\lambda(\alpha,\beta,\gamma,\delta)$.

>[!Proposition] Inversa, composición y grupo
>1. Existe $$S^{-1}(w)=\frac{dw-b}{-cw+a}.$$
>2. Si $S$ y $T$ son T.M., entonces $S\circ T$ también lo es.
>3. $S(z)=z$ ($a=1,b=0,c=0,d=1$) es T.M. En consecuencia, el conjunto $\{T.M.\}$ es un grupo.
>>[!Proof]-
>>1. Ejercicio: verificar que $SS^{-1}(w)=w=S^{-1}S(w)$.
>>2. La composición de funciones de la forma $(az+b)/(cz+d)$ vuelve a ser de la misma forma con determinante no nulo.

>[!Proposition] Extensión a la esfera de Riemann
>Podemos extender las transformaciones de Möbius a $\mathbb{C}_\infty$. Escribiendo $\mathbb{C}_\infty=(\mathbb{C}\setminus\{-d/c\})\cup\{-d/c\}\cup\{\infty\}$, sea $S^*:\mathbb{C}_\infty\to\mathbb{C}_\infty$ dada por $$S^*(z)=\begin{cases}S(z),&\text{si }z\in\mathbb{C}\setminus\{-d/c\},\\\infty,&\text{si }z=-d/c,\\a/c,&\text{si }z=\infty,\end{cases}$$ pues $\lim_{z\to\infty}S(z)=a/c$.
>>[!Proof]-
>>1. Ejercicio: ver que $S^*$ es un homeomorfismo. Solo falta ver que $S^{-1}$ es continua.

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

>[!Definition] Razón armónica
>Dados $z_1,z_2,z_3,z_4$ puntos distintos en $\mathbb{C}_\infty$. Llamamos razón armónica de $z_1,z_2,z_3,z_4$, que denotamos $(z_1,z_2,z_3,z_4)$, a la imagen de $z_1$ bajo la única transformación de Möbius que envía $z_2\mapsto1$, $z_3\mapsto0$ y $z_4\mapsto\infty$.

>[!Example] Fórmula de la razón armónica
>Si $z_1,z_2,z_3,z_4$ son puntos distintos en $\mathbb{C}_\infty$ y $S$ satisface $S(z_2)=1$, $S(z_3)=0$ y $S(z_4)=\infty$ como en la parte (a) del ejemplo anterior, es decir $$S(z)=\frac{z-z_3}{z-z_4}\cdot\frac{z_2-z_4}{z_2-z_3},$$ entonces $$(z_1,z_2,z_3,z_4)=S(z_1)=\frac{(z_1-z_3)(z_2-z_4)}{(z_1-z_4)(z_2-z_3)}.$$
>En particular, $(z_2,z_2,z_3,z_4)=1$ y $(z,1,0,\infty)=z$. Si $z_4=\infty$, $$S(z)=(z,z_2,z_3,\infty)=\frac{z-z_3}{z_2-z_3}.$$

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
>>	3. Sea $z\neq0$ que cumple $$\alpha z\bar z+\beta z+\bar\beta\bar z+\gamma=0,\quad\alpha,\gamma\in\mathbb{R},\ \beta\in\mathbb{C},\ \beta\bar\beta>\alpha\gamma\tag{*}.$$
>>	4. Sacamos $z\bar z$ factor común en $(*)$: $$z\bar z\left(\alpha+\frac{\beta}{\bar z}+\frac{\bar\beta}{z}+\frac{\gamma}{z\bar z}\right)=0\implies\alpha+\frac{1}{z}\bar\beta+\frac{1}{\bar z}\beta+\frac{1}{z\bar z}\gamma=0.$$
>>	5. Poniendo $w=1/z$, se obtiene una ecuación del mismo tipo en $w$. Según los casos: si $\alpha\neq0$ y $\gamma\neq0$ manda círculo en círculo; si $\alpha=0$ y $\gamma\neq0$ manda recta en círculo; si $\alpha=0$ y $\gamma=0$ manda recta en recta; si $\alpha\neq0$ y $\gamma=0$ manda círculo en recta.
