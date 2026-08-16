## Aplicaciones conformes

Sea $\gamma:[a,b]\to\mathbb{C}$ una curva derivable. Si $\gamma'(t_0)\neq0$, el argumento de $\gamma'(t_0)$ determina la dirección del vector tangente.

>[!Definition] Ángulo entre curvas
>Si dos curvas $\gamma_1$ y $\gamma_2$ pasan por $z_0$ en los parámetros $t_1,t_2$, el ángulo orientado entre ellas es
>$$\arg\gamma_2'(t_2)-\arg\gamma_1'(t_1).$$

>[!Proposition] Las funciones analíticas preservan ángulos
>Sea $f$ analítica cerca de $z_0$ y supongamos $f'(z_0)\neq0$. Si $\gamma$ pasa por $z_0$, entonces
>$$(f\circ\gamma)'(t_0)=f'(z_0)\gamma'(t_0),$$
>y por lo tanto
>$$\arg (f\circ\gamma)'(t_0)=\arg f'(z_0)+\arg\gamma'(t_0).$$
>El mismo ángulo $\arg f'(z_0)$ se suma a todas las direcciones, de modo que los ángulos entre curvas se conservan.

>[!Definition] Aplicación conforme
>Una función $f:G\to\mathbb{C}$ es conforme si preserva ángulos y existe
>$$\lim_{z_1\to z}|f(z_1)-f(z)|$$
>con el comportamiento local de una dilatación. En particular, toda función analítica con $f'(z)\neq0$ es conforme.

>[!Remark] Interpretación local
>Cerca de $z_0$,
>$$f(z)-f(z_0)=f'(z_0)(z-z_0)+o(|z-z_0|).$$
>La multiplicación por $f'(z_0)$ rota un ángulo $\arg f'(z_0)$ y dilata por el factor $|f'(z_0)|$.

>[!Theorem] Recíproco
>Sea $f:G\to\mathbb{C}$ diferenciable como función $\mathbb{R}^2\to\mathbb{R}^2$ en $z_0$. Si preserva ángulos en $z_0$ y el factor de dilatación local existe, entonces $f$ es diferenciable como función compleja en $z_0$.

## Transformaciones de Möbius

>[!Definition] Transformación de Möbius
>Una aplicación
>$$S(z)=\frac{az+b}{cz+d},$$
>con $a,b,c,d\in\mathbb{C}$ y
>$$ad-bc\neq0,$$
>se llama **transformación de Möbius**.

>[!Proposition] Propiedades básicas
>1. En $\mathbb{C}\setminus\{-d/c\}$,
>   $$S'(z)=\frac{ad-bc}{(cz+d)^2}\neq0,$$
>   por lo que $S$ es conforme.
>2. Su inversa es otra transformación de Möbius:
>   $$S^{-1}(w)=\frac{dw-b}{-cw+a}.$$
>3. La composición de transformaciones de Möbius vuelve a ser una transformación de Möbius.
>4. La identidad es una transformación de Möbius.

### Extensión a la esfera de Riemann

La transformación se extiende a $\mathbb{C}_\infty$ mediante
$$S\left(-\frac dc\right)=\infty,qquad S(\infty)=\frac ac$$
cuando $c\neq0$. Si $c=0$, se define $S(\infty)=\infty$.

>[!Proposition] Descomposición elemental
>Toda transformación de Möbius es composición de aplicaciones de los tipos:
>
>- traslación: $z\mapsto z+\beta$;
>- rotación y dilatación: $z\mapsto \alpha z$, $\alpha\neq0$;
>- inversión: $z\mapsto1/z$.

>[!Proposition] Determinación por tres puntos
>Una transformación de Möbius queda determinada de manera única por su acción sobre tres puntos distintos de $\mathbb{C}_\infty$.

>[!Definition] Razón armónica
>Dados cuatro puntos distintos $z_1,z_2,z_3,z_4\in\mathbb{C}_\infty$, la razón armónica es
>$$ (z_1,z_2,z_3,z_4)
>=\frac{(z_1-z_3)(z_2-z_4)}{(z_1-z_4)(z_2-z_3)},$$
>con las interpretaciones usuales cuando alguno de los puntos es $\infty$.

>[!Proposition] Invariancia de la razón armónica
>Para toda transformación de Möbius $S$,
>$$(S(z_1),S(z_2),S(z_3),S(z_4))=(z_1,z_2,z_3,z_4).$$

## Rectas y circunferencias

Una **circunferencia generalizada** en $\mathbb{C}_\infty$ es una circunferencia ordinaria o una recta junto con el punto $\infty$.

>[!Theorem] Preservación de circunferencias generalizadas
>Las transformaciones de Möbius envían circunferencias generalizadas en circunferencias generalizadas.
>
>>[!Proof]- Idea
>>1. Las traslaciones, rotaciones y dilataciones preservan rectas y circunferencias.
>>2. La inversión $z\mapsto1/z$ intercambia las circunferencias que pasan por el origen con rectas que no pasan por el origen, y preserva las restantes como circunferencias.
>>3. El resultado sigue de la descomposición elemental.

Toda recta o circunferencia puede escribirse como
$$A|z|^2+Bz+\bar B\bar z+C=0,$$
con $A,C\in\mathbb{R}$ y $B\in\mathbb{C}$.

>[!Example] Semiplano y disco
>La transformación de Cayley
>$$f(z)=\frac{z-i}{z+i}$$
>envía el semiplano superior
>$$\{z:\operatorname{Im}z>0\}$$
>conformemente sobre el disco unidad
>$$\{w:|w|<1\}.$$
>Su inversa es
>$$f^{-1}(w)=i\frac{1+w}{1-w}.$$

>[!Remark] Elección mediante tres puntos
>Para construir una transformación entre dominios limitados por rectas o circunferencias, se eligen tres puntos de la frontera de origen y sus tres imágenes deseadas. La unicidad por tres puntos determina la transformación; luego se verifica qué componente conexa corresponde al dominio.
