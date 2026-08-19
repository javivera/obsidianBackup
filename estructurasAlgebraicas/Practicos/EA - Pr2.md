---
tags:
  - AlgebraicStructures
  - Groups
  - Practico1
---
>[!exercise] Ejercicio 1
>Sea $(G,\cdot)$ un grupo y sean $a,b\in G$.
>- **(i)** Probar que las siguientes funciones de $G$ en $G$ son biyectivas y encontrar sus inversas:
>	1. $f_1(x)=a\cdot x$.
>	2. $f_2(x)=a\cdot x\cdot b$.
>	3. $f_3(x)=a\cdot x\cdot a^{-1}$.
>	4. $f_4(x)=x^{-1}$.
>	5. $f_5(x)=a\cdot x^{-1}\cdot a^{-1}$.
>- **(ii)** $f\colon G\to G$, dada por $f(x)=a\cdot x\cdot b$.
>- **(iii)** $h\colon G\to G$, dada por $h(x)=a\cdot x\cdot a^{-1}$.
>>[!Proof]-
>>- (i)
>>	1. Para $f_1(x)=a\cdot x$, definimos $g_1(y)=a^{-1}\cdot y$. Entonces $$g_1(f_1(x))=a^{-1}\cdot(a\cdot x)=x$$ y $$f_1(g_1(y))=a\cdot(a^{-1}\cdot y)=y.$$ Por lo tanto, $f_1$ es biyectiva y $$\boxed{f_1^{-1}(y)=a^{-1}\cdot y}.$$
>>	2. Para $f_2(x)=a\cdot x\cdot b$, definimos $g_2(y)=a^{-1}\cdot y\cdot b^{-1}$. Entonces $$\begin{aligned}g_2(f_2(x))&=a^{-1}\cdot(a\cdot x\cdot b)\cdot b^{-1}=x,\\f_2(g_2(y))&=a\cdot(a^{-1}\cdot y\cdot b^{-1})\cdot b=y.\end{aligned}$$ Por lo tanto, $f_2$ es biyectiva y $$\boxed{f_2^{-1}(y)=a^{-1}\cdot y\cdot b^{-1}}.$$
>>	3. Para $f_3(x)=a\cdot x\cdot a^{-1}$, definimos $g_3(y)=a^{-1}\cdot y\cdot a$. Entonces $$\begin{aligned}g_3(f_3(x))&=a^{-1}\cdot(a\cdot x\cdot a^{-1})\cdot a=x,\\f_3(g_3(y))&=a\cdot(a^{-1}\cdot y\cdot a)\cdot a^{-1}=y.\end{aligned}$$ Por lo tanto, $f_3$ es biyectiva y $$\boxed{f_3^{-1}(y)=a^{-1}\cdot y\cdot a}.$$
>>	4. La función $f_4(x)=x^{-1}$ es su propia inversa, pues para todo $x\in G$ se cumple $$f_4(f_4(x))=(x^{-1})^{-1}=x.$$ Por lo tanto, $f_4$ es biyectiva y $$\boxed{f_4^{-1}(y)=y^{-1}}.$$
>>	5. Para $f_5(x)=a\cdot x^{-1}\cdot a^{-1}$, definimos $g_5(y)=a^{-1}\cdot y^{-1}\cdot a$. Usando que $(u\cdot v\cdot w)^{-1}=w^{-1}\cdot v^{-1}\cdot u^{-1}$, obtenemos $$\begin{aligned}g_5(f_5(x))&=a^{-1}\cdot(a\cdot x^{-1}\cdot a^{-1})^{-1}\cdot a=a^{-1}\cdot(a\cdot x\cdot a^{-1})\cdot a=x,\\f_5(g_5(y))&=a\cdot(a^{-1}\cdot y^{-1}\cdot a)^{-1}\cdot a^{-1}=a\cdot(a^{-1}\cdot y\cdot a)\cdot a^{-1}=y.\end{aligned}$$ Por lo tanto, $f_5$ es biyectiva y $$\boxed{f_5^{-1}(y)=a^{-1}\cdot y^{-1}\cdot a}.$$
>>- (ii)
>>	1. Para encontrar la inversa, sea $y=f(x)=a\cdot x\cdot b$. Multiplicando por $a^{-1}$ a la izquierda y por $b^{-1}$ a la derecha, obtenemos $$\begin{aligned}y&=a\cdot x\cdot b,\\a^{-1}\cdot y\cdot b^{-1}&=a^{-1}\cdot(a\cdot x\cdot b)\cdot b^{-1}=x.\end{aligned}$$ Por lo tanto, la única posible inversa es $$f^{-1}(y)=a^{-1}\cdot y\cdot b^{-1}.$$
>>	2. Verificamos ambas composiciones: $$\begin{aligned}f^{-1}(f(x))&=a^{-1}\cdot(a\cdot x\cdot b)\cdot b^{-1}=x,\\f(f^{-1}(y))&=a\cdot(a^{-1}\cdot y\cdot b^{-1})\cdot b=y.\end{aligned}$$ Como $f^{-1}\circ f=\operatorname{id}_G$ y $f\circ f^{-1}=\operatorname{id}_G$, la función $f$ es biyectiva y $$\boxed{f^{-1}(x)=a^{-1}\cdot x\cdot b^{-1}}.$$
>>- (iii)
>>	1. Para encontrar la inversa, sea $y=h(x)=a\cdot x\cdot a^{-1}$. Multiplicando por $a^{-1}$ a la izquierda y por $a$ a la derecha, obtenemos $$\begin{aligned}y&=a\cdot x\cdot a^{-1},\\a^{-1}\cdot y\cdot a&=a^{-1}\cdot(a\cdot x\cdot a^{-1})\cdot a=x.\end{aligned}$$ Por lo tanto, la única posible inversa es $$h^{-1}(y)=a^{-1}\cdot y\cdot a.$$
>>	2. Verificamos ambas composiciones: $$\begin{aligned}h^{-1}(h(x))&=a^{-1}\cdot(a\cdot x\cdot a^{-1})\cdot a=x,\\h(h^{-1}(y))&=a\cdot(a^{-1}\cdot y\cdot a)\cdot a^{-1}=y.\end{aligned}$$ Como $h^{-1}\circ h=\operatorname{id}_G$ y $h\circ h^{-1}=\operatorname{id}_G$, la función $h$ es biyectiva y $$\boxed{h^{-1}(x)=a^{-1}\cdot x\cdot a}.$$

>[!exercise] Ejercicio 2
>Decir si las siguientes funciones son homomorfismos de grupos y, en tal caso, decir si son monomorfismos o epimorfismos.
>- **(a)** $f\colon\mathbb Z\to\mathbb Z$, dada por $f(a)=ma$, con $m\in\mathbb Z$.
>- **(b)** $f\colon\mathbb Z_6\to\mathbb Z_{12}$, dada por $f([a]_6)=[2a]_{12}$.
>- **(c)** $f\colon\mathbb Z_5\to\mathbb Z_5$, dada por $f([a]_5)=[3a]_5$.
>>[!Proof]-
>>- (a)
>>	1. **Homomorfismo.** Consideramos a $\mathbb Z$ como grupo aditivo. Aquí $ma$ denota la suma repetida de $a$ consigo mismo (con la definición usual para $m=0$ y $m<0$). Para cualesquiera $a,b\in\mathbb Z$, la multiplicación por un entero distribuye respecto de la suma, de modo que $$f(a+b)=m(a+b)=ma+mb=f(a)+f(b).$$ Por lo tanto, $f$ es un homomorfismo para todo $m\in\mathbb Z$.
>>	2. **Inyectividad.** Supongamos primero que $m\neq0$ y que $f(a)=f(b)$. Entonces $$ma=mb,$$ y, sumando el inverso de $mb$ en ambos miembros, obtenemos $$m(a-b)=0.$$ Esta igualdad significa que $a-b$ (o su inverso, si $m<0$) sumado consigo mismo $|m|$ veces da $0$. Como el grupo aditivo $\mathbb Z$ no tiene elementos no nulos de orden finito, se sigue que $a-b=0$ y, por tanto, $a=b$. Así, $f$ es inyectiva si $m\neq0$. Si $m=0$, en cambio, $f(0)=0=f(1)$ aunque $0\neq1$, por lo que $f$ no es inyectiva.
>>	3. **Sobreyectividad.** La imagen de $f$ es $$\operatorname{Im}(f)=m\mathbb Z.$$ Si $m=1$, todo $y\in\mathbb Z$ tiene como preimagen a $y$; si $m=-1$, tiene como preimagen a $-y$. Por ello, $f$ es sobreyectiva cuando $m=\pm1$. Si $|m|>1$, el entero $1$ no tiene preimagen, pues no existe $a\in\mathbb Z$ tal que $ma=1$; y si $m=0$, la imagen es únicamente $\{0\}$. Por lo tanto, $f$ es sobreyectiva si y solo si $m=\pm1$.
>>	4. En conclusión, $$\boxed{f\text{ es monomorfismo}\iff m\neq0},\qquad\boxed{f\text{ es epimorfismo}\iff m=\pm1}.$$ En particular, $f$ es biyectiva si y solo si $m=\pm1$.
>>- (b)
>>	1. **Buena definición y homomorfismo.** Si $[a]_6=[b]_6$, entonces $6\mid(a-b)$ y, por consiguiente, $12\mid2(a-b)$; por lo tanto, $[2a]_{12}=[2b]_{12}$ y la función está bien definida. Además, para cualesquiera $[a]_6,[b]_6\in\mathbb Z_6$, $$\begin{aligned}f([a]_6+[b]_6)&=f([a+b]_6)=[2(a+b)]_{12}\\&=[2a+2b]_{12}=[2a]_{12}+[2b]_{12}\\&=f([a]_6)+f([b]_6).\end{aligned}$$ Por lo tanto, $f$ es un homomorfismo de grupos aditivos.
>>	2. **Inyectividad.** Supongamos que $f([a]_6)=f([b]_6)$. Entonces $$\begin{aligned}\ [2a]_{12}=[2b]_{12}&\iff[2a-2b]_{12}=[0]_{12}\\&\iff12\mid2(a-b)\\&\iff6\mid(a-b)\\&\iff[a]_6=[b]_6.\end{aligned}$$ Por lo tanto, $f$ es inyectiva.
>>	3. **Sobreyectividad.** Sea $[b]_{12}\in\mathbb Z_{12}$. Para que tenga una preimagen debe existir $[a]_6\in\mathbb Z_6$ tal que $[2a]_{12}=[b]_{12}$, lo cual equivale a que exista $k\in\mathbb Z$ con $$2a-b=12k.$$ Despejando, $$a=6k+\frac b2.$$ Como $6k$ siempre es entero, existe tal $a\in\mathbb Z$ si y solo si $b$ es par. Por ello, $$\operatorname{Im}(f)=\{[0]_{12},[2]_{12},[4]_{12},[6]_{12},[8]_{12},[10]_{12}\}.$$ En particular, $[1]_{12}$ no tiene preimagen y $f$ no es sobreyectiva.
>>	4. En conclusión, $$\boxed{f\text{ es monomorfismo, pero no epimorfismo}.}$$
>>- (c)
>>	1. **Buena definición y homomorfismo.** Si $[a]_5=[b]_5$, entonces $5\mid(a-b)$ y, por consiguiente, $5\mid3(a-b)$; por lo tanto, $[3a]_5=[3b]_5$ y la función está bien definida. Además, para cualesquiera $[a]_5,[b]_5\in\mathbb Z_5$, $$\begin{aligned}f([a]_5+[b]_5)&=f([a+b]_5)=[3(a+b)]_5\\&=[3a+3b]_5=[3a]_5+[3b]_5\\&=f([a]_5)+f([b]_5).\end{aligned}$$ Por lo tanto, $f$ es un homomorfismo de grupos aditivos.
>>	2. **Inyectividad.** Supongamos que $f([a]_5)=f([b]_5)$. Entonces $$\begin{aligned}[3a]_5=[3b]_5&\implies5\mid3(a-b).\end{aligned}$$ Como $5$ es primo, el lema de Euclides implica que $5\mid3$ o $5\mid(a-b)$. Puesto que $5\nmid3$, necesariamente $5\mid(a-b)$; por tanto, $a\equiv b\pmod5$ y $[a]_5=[b]_5$. Así, $f$ es inyectiva.
>>	3. **Sobreyectividad.** Sea $[y]_5\in\mathbb Z_5$. Buscamos $[a]_5\in\mathbb Z_5$ tal que $[3a]_5=[y]_5$, es decir, tal que $3a\equiv y\pmod5$. Como $2$ es el inverso multiplicativo de $3$ módulo $5$, pues $2\cdot3=6\equiv1\pmod5$, multiplicamos la congruencia por $2$ y obtenemos $$a\equiv2y\pmod5.$$ Elegimos entonces $[a]_5=[2y]_5$ y verificamos que $$f([2y]_5)=[3(2y)]_5=[6y]_5=[y]_5.$$ Como toda clase $[y]_5$ tiene una preimagen, $f$ es sobreyectiva.
>>	4. En conclusión, $$\boxed{f\text{ es monomorfismo y epimorfismo};}$$ en particular, es un isomorfismo.

>[!exercise] Ejercicio 3
>Probar que las siguientes afirmaciones son equivalentes.
>- **(a)** $G$ es abeliano.
>- **(b)** La inversión $f\colon G\to G$, dada por $f(x)=x^{-1}$, es un morfismo de grupos.
>- **(c)** La aplicación $f\colon G\to G$, dada por $f(x)=x^2$, es un morfismo de grupos.
>>[!Proof]-
>>- **(a) $\Rightarrow$ (b).** Supongamos que $G$ es abeliano. Para cualesquiera $x,y\in G$, tenemos $$f(xy)=(xy)^{-1}=y^{-1}x^{-1}=x^{-1}y^{-1}=f(x)f(y),$$ donde usamos la conmutatividad de $G$ en la tercera igualdad. Por lo tanto, $f$ es un morfismo de grupos.
>>- **(b) $\Rightarrow$ (a).** Supongamos que la inversión $f(x)=x^{-1}$ es un morfismo de grupos. Entonces, para cualesquiera $x,y\in G$, $$x^{-1}y^{-1}=f(x)f(y)=f(xy)=(xy)^{-1}=y^{-1}x^{-1}.$$ Tomando inversos en ambos miembros, obtenemos $$yx=xy.$$ Como $x$ e $y$ son arbitrarios, $G$ es abeliano.
>>- **(a) $\Rightarrow$ (c).** Supongamos que $G$ es abeliano. Para cualesquiera $x,y\in G$, tenemos $$f(xy)=(xy)^2=xyxy=xxyy=x^2y^2=f(x)f(y),$$ donde usamos que $yx=xy$. Por lo tanto, $f$ es un morfismo de grupos.
>>- **(c) $\Rightarrow$ (a).** Supongamos que la aplicación $f(x)=x^2$ es un morfismo de grupos. Entonces, para cualesquiera $x,y\in G$, $$x^2y^2=f(x)f(y)=f(xy)=(xy)^2.$$ Por consiguiente, $$xxyy=xyxy.$$ Cancelando $x$ a la izquierda y luego $y$ a la derecha, obtenemos $$xyy=yxy\quad\Longrightarrow\quad xy=yx.$$ Como $x$ e $y$ son arbitrarios, $G$ es abeliano.

>[!exercise] Ejercicio 4
>Sea $G$ un grupo y sean $H_1$ y $H_2$ dos subgrupos de $G$.
>- **(a)** Probar que $H_1\cap H_2$ es un subgrupo de $G$.
>- **(b)** ¿Qué sucede con la intersección de tres o más subgrupos?
>- **(c)** Probar que $H_1\cup H_2$ es un subgrupo si y solo si $H_1\subseteq H_2$ o $H_2\subseteq H_1$.
>- **(d)** ¿Qué sucede con la unión de tres o más subgrupos?
>>[!Proof]-
>>- (a)
>>	1. Como $H_1$ y $H_2$ son subgrupos de $G$, ambos contienen al elemento neutro $e$. Por lo tanto, $e\in H_1\cap H_2$ y, en particular, $H_1\cap H_2\neq\varnothing$.
>>	2. Sean $x,y\in H_1\cap H_2$. Entonces $x,y\in H_1$ y $x,y\in H_2$. Como $H_1$ y $H_2$ son subgrupos, se tiene $xy^{-1}\in H_1$ y $xy^{-1}\in H_2$; por consiguiente, $$xy^{-1}\in H_1\cap H_2.$$
>>	3. Por el criterio de subgrupo, concluimos que $$H_1\cap H_2\leq G.$$
>>- (b)
>>	1. El mismo resultado vale para una cantidad arbitraria de subgrupos. Sea $\{H_i\}_{i\in I}$ una familia de subgrupos de $G$, donde el conjunto de índices $I$ puede ser finito, infinito numerable o infinito no numerable.
>>	2. Como $e\in H_i$ para todo $i\in I$, se tiene $$e\in\bigcap_{i\in I}H_i,$$ por lo que la intersección no es vacía.
>>	3. Sean $x,y\in\bigcap_{i\in I}H_i$. Entonces, para todo $i\in I$, se cumple que $x,y\in H_i$. Como cada $H_i$ es un subgrupo, $$xy^{-1}\in H_i$$ para todo $i\in I$. Por lo tanto, $$xy^{-1}\in\bigcap_{i\in I}H_i.$$
>>	4. Por el criterio de subgrupo, concluimos que $$\bigcap_{i\in I}H_i\leq G.$$ En particular, esto vale para la intersección de tres subgrupos. Si $I=\varnothing$, por convención $\bigcap_{i\in I}H_i=G$, que también es un subgrupo de $G$.
>>- (c)
>>- (d)
