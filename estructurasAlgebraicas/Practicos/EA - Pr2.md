---
tags:
  - AlgebraicStructures
  - Groups
  - Practico1
---

>[!exercise] Ejercicio 1
>Sea $(G,\cdot)$ un grupo y sean $a,b\in G$.
>- **(a)** Probar que las siguientes funciones de $G$ en $G$ son biyectivas y encontrar sus inversas:
>	1. $f_1(x)=a\cdot x$.
>	2. $f_2(x)=a\cdot x\cdot b$.
>	3. $f_3(x)=a\cdot x\cdot a^{-1}$.
>	4. $f_4(x)=x^{-1}$.
>	5. $f_5(x)=a\cdot x^{-1}\cdot a^{-1}$.
>- **(b)** Determinar cuáles de estas aplicaciones son homomorfismos de grupos.
>- **(c)** Determinar cuáles de estas aplicaciones son homomorfismos si $G$ es abeliano.
>>[!Proof]-
>>- (a)
>>	1. Para $f_1(x)=a\cdot x$, definimos $g_1(y)=a^{-1}\cdot y$. Entonces $$g_1(f_1(x))=a^{-1}\cdot(a\cdot x)=x$$ y $$f_1(g_1(y))=a\cdot(a^{-1}\cdot y)=y.$$ Por lo tanto, $f_1$ es biyectiva y $$\boxed{f_1^{-1}(y)=a^{-1}\cdot y}.$$
>>	2. Para $f_2(x)=a\cdot x\cdot b$, definimos $g_2(y)=a^{-1}\cdot y\cdot b^{-1}$. Entonces $$\begin{aligned}g_2(f_2(x))&=a^{-1}\cdot(a\cdot x\cdot b)\cdot b^{-1}=x,\\f_2(g_2(y))&=a\cdot(a^{-1}\cdot y\cdot b^{-1})\cdot b=y.\end{aligned}$$ Por lo tanto, $f_2$ es biyectiva y $$\boxed{f_2^{-1}(y)=a^{-1}\cdot y\cdot b^{-1}}.$$
>>	3. Para $f_3(x)=a\cdot x\cdot a^{-1}$, definimos $g_3(y)=a^{-1}\cdot y\cdot a$. Entonces $$\begin{aligned}g_3(f_3(x))&=a^{-1}\cdot(a\cdot x\cdot a^{-1})\cdot a=x,\\f_3(g_3(y))&=a\cdot(a^{-1}\cdot y\cdot a)\cdot a^{-1}=y.\end{aligned}$$ Por lo tanto, $f_3$ es biyectiva y $$\boxed{f_3^{-1}(y)=a^{-1}\cdot y\cdot a}.$$
>>	4. La función $f_4(x)=x^{-1}$ es su propia inversa, pues para todo $x\in G$ se cumple $$f_4(f_4(x))=(x^{-1})^{-1}=x.$$ Por lo tanto, $f_4$ es biyectiva y $$\boxed{f_4^{-1}(y)=y^{-1}}.$$
>>	5. Para $f_5(x)=a\cdot x^{-1}\cdot a^{-1}$, definimos $g_5(y)=a^{-1}\cdot y^{-1}\cdot a$. Usando que $(u\cdot v\cdot w)^{-1}=w^{-1}\cdot v^{-1}\cdot u^{-1}$, obtenemos $$\begin{aligned}g_5(f_5(x))&=a^{-1}\cdot(a\cdot x^{-1}\cdot a^{-1})^{-1}\cdot a=a^{-1}\cdot(a\cdot x\cdot a^{-1})\cdot a=x,\\f_5(g_5(y))&=a\cdot(a^{-1}\cdot y^{-1}\cdot a)^{-1}\cdot a^{-1}=a\cdot(a^{-1}\cdot y\cdot a)\cdot a^{-1}=y.\end{aligned}$$ Por lo tanto, $f_5$ es biyectiva y $$\boxed{f_5^{-1}(y)=a^{-1}\cdot y^{-1}\cdot a}.$$
>>- (b)
>>	1. Para $f_1$, si es un homomorfismo debe enviar el neutro en el neutro, de modo que $$e=f_1(e)=a\cdot e=a.$$ Recíprocamente, si $a=e$, entonces $f_1(x)=x$ para todo $x\in G$, por lo que $f_1=\operatorname{id}_G$ es un homomorfismo. En consecuencia, $$\boxed{f_1\text{ es un homomorfismo}\iff a=e}.$$
>>	2. Para $f_2$, si es un homomorfismo, entonces $$e=f_2(e)=a\cdot b,$$ es decir, $b=a^{-1}$. Recíprocamente, si $b=a^{-1}$, para cualesquiera $x,y\in G$ se tiene $$f_2(xy)=a\cdot xy\cdot a^{-1}=(a\cdot x\cdot a^{-1})(a\cdot y\cdot a^{-1})=f_2(x)f_2(y).$$ Por lo tanto, $$\boxed{f_2\text{ es un homomorfismo}\iff b=a^{-1}}.$$
>>	3. Para $f_3$, cualesquiera sean $x,y\in G$, $$f_3(xy)=a\cdot xy\cdot a^{-1}=(a\cdot x\cdot a^{-1})(a\cdot y\cdot a^{-1})=f_3(x)f_3(y).$$ Así, $f_3$ siempre es un homomorfismo y, como es biyectiva por la parte (a), es un automorfismo de $G$.
>>	4. Para $f_4$, cualesquiera sean $x,y\in G$, $$f_4(xy)=(xy)^{-1}=y^{-1}x^{-1},\qquad f_4(x)f_4(y)=x^{-1}y^{-1}.$$ Por tanto, $f_4(xy)=f_4(x)f_4(y)$ para todo $x,y\in G$ si y sólo si $y^{-1}x^{-1}=x^{-1}y^{-1}$ para todo $x,y\in G$. Tomando inversos, esto equivale a $xy=yx$ para todo $x,y\in G$. Luego, $$\boxed{f_4\text{ es un homomorfismo}\iff G\text{ es abeliano}}.$$
>>	5. Para $f_5$, cualesquiera sean $x,y\in G$, $$\begin{aligned}f_5(xy)&=a\cdot y^{-1}x^{-1}\cdot a^{-1},\\f_5(x)f_5(y)&=(a\cdot x^{-1}\cdot a^{-1})(a\cdot y^{-1}\cdot a^{-1})=a\cdot x^{-1}y^{-1}\cdot a^{-1}.\end{aligned}$$ Como podemos cancelar $a$ a la izquierda y $a^{-1}$ a la derecha, ambas expresiones son iguales para todo $x,y\in G$ si y sólo si $y^{-1}x^{-1}=x^{-1}y^{-1}$ para todo $x,y\in G$, lo cual equivale a que $G$ sea abeliano. Por consiguiente, $$\boxed{f_5\text{ es un homomorfismo}\iff G\text{ es abeliano}}.$$
>>- (c)
>>	1. Supongamos que $G$ es abeliano. Por la parte (b), $f_1$ es un homomorfismo si y sólo si $a=e$, y $f_2$ es un homomorfismo si y sólo si $b=a^{-1}$.
>>	2. La aplicación $f_3$ siempre es un homomorfismo. Además, por la conmutatividad, para todo $x\in G$ se cumple $$f_3(x)=a\cdot x\cdot a^{-1}=x.$$
>>	3. Como $G$ es abeliano, la inversión $f_4(x)=x^{-1}$ es un homomorfismo. Asimismo, $$f_5(x)=a\cdot x^{-1}\cdot a^{-1}=x^{-1}=f_4(x),$$ de modo que $f_5$ también es un homomorfismo.
>>	4. En conclusión, si $G$ es abeliano, $$\boxed{f_3,f_4\text{ y }f_5\text{ siempre son homomorfismos};\quad f_1\text{ lo es}\iff a=e;\quad f_2\text{ lo es}\iff b=a^{-1}}.$$

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
>>	1. **($\Leftarrow$).** Supongamos $H_1\subseteq H_2$. Entonces $$H_1\cup H_2=H_2.$$ Como $H_2\leq G$, se sigue que $H_1\cup H_2\leq G$. El caso $H_2\subseteq H_1$ es simétrico: $$H_1\cup H_2=H_1\leq G.$$
>>	2. **($\Rightarrow$).** Supongamos $H_1\cup H_2\leq G$, y razonemos por contradicción: supongamos que $H_1\not\subseteq H_2$ y $H_2\not\subseteq H_1$. Entonces existen testigos $$x\in H_1\setminus H_2,\qquad y\in H_2\setminus H_1.$$ En particular $x,y\in H_1\cup H_2$. Como la unión es un subgrupo, el criterio de subgrupo da $$xy^{-1}\in H_1\cup H_2.$$
>>	3. Si $xy^{-1}\in H_2$, como $y\in H_2$ se tendría $$x=(xy^{-1})y\in H_2,$$ contradiciendo $x\notin H_2$.
>>	4. Si $xy^{-1}\in H_1$, como $x\in H_1$ se tendría $x^{-1}\in H_1$ y $$y^{-1}=x^{-1}(xy^{-1})\in H_1.$$ Como $H_1$ es subgrupo, $y=(y^{-1})^{-1}\in H_1$, contradiciendo $y\notin H_1$.
>>	5. Así, $xy^{-1}$ no pertenece ni a $H_1$ ni a $H_2$, de modo que $$xy^{-1}\notin H_1\cup H_2,$$ contradiciendo que $H_1\cup H_2$ es un subgrupo. Por lo tanto debe valer $H_1\subseteq H_2$ o $H_2\subseteq H_1$.
>>- (d)
>>	1. Para tres o más subgrupos, la comparabilidad por pares es una condición suficiente, pero no necesaria, para que la unión sea un subgrupo.
>>	2. Sea $\{H_i\}_{i\in I}$ una familia no vacía de subgrupos de $G$ totalmente ordenada por inclusión, y sea $$H=\bigcup_{i\in I}H_i.$$ Como $e\in H_i$ para todo $i\in I$, tenemos $H\neq\varnothing$.
>>	3. Sean $x,y\in H$. Existen $i,j\in I$ tales que $x\in H_i$ e $y\in H_j$. Como $H_i$ y $H_j$ son comparables, podemos suponer, sin pérdida de generalidad, que $H_i\subseteq H_j$. Entonces $x,y\in H_j$ y, dado que $H_j$ es un subgrupo, $$xy^{-1}\in H_j\subseteq H.$$ Por el criterio de subgrupo, $H\leq G$. Este argumento vale aunque la familia sea infinita y no tenga un elemento máximo.
>>	4. La recíproca es falsa. En el grupo aditivo $\mathbb Z$, consideremos $H_1=\mathbb Z$, $H_2=2\mathbb Z$ y $H_3=3\mathbb Z$. Se tiene $$H_1\cup H_2\cup H_3=\mathbb Z,$$ que es un subgrupo. Sin embargo, $H_2$ y $H_3$ no son comparables, pues $$2\in 2\mathbb Z\setminus 3\mathbb Z\qquad\text{y}\qquad 3\in 3\mathbb Z\setminus 2\mathbb Z.$$ Por lo tanto, si hay tres o más subgrupos, que su unión sea un subgrupo no implica que todos los pares sean comparables.

>[!exercise] Ejercicio 5
>Probar que $$\mathcal H:=\left\{\pm\begin{pmatrix}1&0\\0&1\end{pmatrix},\ \pm\begin{pmatrix}i&0\\0&-i\end{pmatrix},\ \pm\begin{pmatrix}0&1\\-1&0\end{pmatrix},\ \pm\begin{pmatrix}0&i\\i&0\end{pmatrix}\right\}$$ es un subgrupo de $\operatorname{GL}(2,\mathbb C)$.
>>[!Proof]-
>>1. Denotemos $$I=\begin{pmatrix}1&0\\0&1\end{pmatrix},\qquad A=\begin{pmatrix}i&0\\0&-i\end{pmatrix},\qquad B=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad C=\begin{pmatrix}0&i\\i&0\end{pmatrix}.$$ Entonces $\mathcal H=\{\varepsilon X:\varepsilon\in\{1,-1\},\ X\in\{I,A,B,C\}\}$, y en particular $I\in\mathcal H$.
>>2. Los cuadrados de las tres matrices no triviales son $$A^2=B^2=C^2=-I.$$ Además, las multiplicaciones restantes dan $$\begin{aligned}AB&=C,&BA&=-C,\\AC&=-B,&CA&=B,\\BC&=A,&CB&=-A.\end{aligned}$$ Por lo tanto, para cualesquiera $X,Y\in\{I,A,B,C\}$ existen $\delta\in\{1,-1\}$ y $Z\in\{I,A,B,C\}$ tales que $XY=\delta Z$.
>>3. Si $\varepsilon,\eta\in\{1,-1\}$ y $X,Y\in\{I,A,B,C\}$, entonces $$(\varepsilon X)(\eta Y)=\varepsilon\eta(XY)=\varepsilon\eta\delta Z\in\mathcal H.$$ Así, $\mathcal H$ es cerrada bajo el producto.
>>4. De las igualdades anteriores se obtiene $$I^{-1}=I,\qquad A^{-1}=-A,\qquad B^{-1}=-B,\qquad C^{-1}=-C.$$ En consecuencia, $(\varepsilon X)^{-1}=\varepsilon X^{-1}\in\mathcal H$ para todo $\varepsilon X\in\mathcal H$. En particular, todas estas matrices son invertibles, de modo que $\mathcal H\subseteq\operatorname{GL}(2,\mathbb C)$.
>>5. Como $\mathcal H$ contiene al neutro y es cerrada bajo productos e inversos, se concluye que $\mathcal H$ es un subgrupo de $\operatorname{GL}(2,\mathbb C)$.

>[!exercise] Ejercicio 6
>Probar que todos los subgrupos de $\mathbb Z$ son cíclicos.
>>[!Proof]-
>>6. Sea $H\leq(\mathbb Z,+)$. Si $H=\{0\}$, entonces $H=\langle0\rangle$ y, por lo tanto, $H$ es cíclico.
>>7. Supongamos ahora que $H\neq\{0\}$. Existe $h\in H$ con $h\neq0$ y, como $H$ también contiene a $-h$, alguno de los dos es positivo. Por ello, el conjunto $H\cap\mathbb Z_{>0}$ es no vacío. Por el principio de buena ordenación, posee un elemento mínimo; lo denotamos por $m$.
>>8. Como $m\in H$ y $H$ es un subgrupo, todo múltiplo entero de $m$ pertenece a $H$. En consecuencia, $$\langle m\rangle=m\mathbb Z\subseteq H.$$
>>9. Para probar la inclusión contraria, sea $h\in H$. Por el algoritmo de la división, existen $q,r\in\mathbb Z$ tales que $$h=mq+r,\qquad 0\leq r<m.$$ Puesto que $h,m\in H$ y $H$ es cerrado bajo sumas e inversos, tenemos $$r=h-mq\in H.$$ Si $r>0$, entonces $r$ sería un elemento positivo de $H$ menor que $m$, lo que contradice la minimalidad de $m$. Por tanto, $r=0$ y $h=mq\in\langle m\rangle$. Así, $$H\subseteq\langle m\rangle.$$
>>10. De ambas inclusiones se sigue que $$H=\langle m\rangle.$$ Por consiguiente, todo subgrupo de $\mathbb Z$ es cíclico.

>[!exercise] Ejercicio 7
>- **(a)** Demostrar que toda matriz real $A\in\operatorname{GL}_2(\mathbb R)$ que satisface $A^2=-I_2$ es conjugada en $\operatorname{GL}_2(\mathbb R)$ a la matriz $$C=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$
>- **(b)** Demostrar que no existe ningún monomorfismo $Q_8\to\operatorname{GL}_2(\mathbb R)$.
>>[!Proof]-
>>- (a)
>>	1. Elijamos cualquier vector $v\in\mathbb R^2$ no nulo. Los vectores $v$ y $Av$ son linealmente independientes: en efecto, si fueran dependientes, existiría $\lambda\in\mathbb R$ tal que $Av=\lambda v$, y entonces $$-v=A^2v=A(\lambda v)=\lambda Av=\lambda^2v.$$ Como $v\neq0$, resultaría $\lambda^2=-1$, lo cual es imposible en $\mathbb R$.
>>	2. Definamos la matriz $P=(\,v\ \ Av\,)$ cuyas columnas son $v$ y $Av$. Por la independencia lineal anterior, $P\in\operatorname{GL}_2(\mathbb R)$. Además, $$AP=(\,Av\ \ A^2v\,)=(\,Av\ \ -v\,)=PC.$$ Por lo tanto, $$A=PCP^{-1},$$ y así $A$ es conjugada a $C$ en $\operatorname{GL}_2(\mathbb R)$.
>>- (b)
>>	1. Supongamos, por contradicción, que existe un monomorfismo $\varphi:Q_8\to\operatorname{GL}_2(\mathbb R)$. Denotemos $$X=\varphi(i),\qquad Y=\varphi(j),\qquad S=\varphi(-1).$$ Como $\varphi(1)=I_2$ y $\varphi$ es inyectiva, se tiene $S\neq I_2$.
>>	2. De $i^2=-1$ y $(-1)^2=1$ obtenemos $$X^2=S,\qquad S^2=I_2.$$ Como $X$ es invertible, $$\det S=\det(X^2)=(\det X)^2>0.$$
>>	3. Puesto que $S^2=I_2$, el polinomio minimal de $S$ divide a $t^2-1=(t-1)(t+1)$. Como este polinomio tiene raíces reales distintas, $S$ es diagonalizable y sus autovalores pertenecen a $\{1,-1\}$. Al ser $\det S>0$, ambos autovalores tienen el mismo signo. Si ambos fueran $1$, la diagonalizabilidad daría $S=I_2$, contradiciendo el paso anterior. En consecuencia, ambos son $-1$ y $$S=-I_2.$$
>>	4. De $i^2=j^2=-1$ se sigue ahora que $$X^2=Y^2=-I_2.$$ Además, en $Q_8$ se cumple $ji=-ij=(-1)ij$, por lo que $$YX=\varphi(ji)=\varphi((-1)ij)=SXY=-XY.$$
>>	5. Por la parte (a), existe $P\in\operatorname{GL}_2(\mathbb R)$ tal que $P^{-1}XP=C$. Definamos $\widetilde Y=P^{-1}YP$; aunque no conocemos sus entradas, el mismo cambio de base conserva las relaciones anteriores: $$\widetilde Y^2=P^{-1}Y^2P=-I_2$$ y $$\widetilde YC=(P^{-1}YP)(P^{-1}XP)=P^{-1}YXP=-P^{-1}XYP=-C\widetilde Y.$$
>>	6. Escribamos $\widetilde Y=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. La relación $\widetilde YC=-C\widetilde Y$ da $$\begin{pmatrix}b&-a\\d&-c\end{pmatrix}=\begin{pmatrix}c&d\\-a&-b\end{pmatrix},$$ de donde $c=b$ y $d=-a$. Por consiguiente, $$\widetilde Y=\begin{pmatrix}a&b\\b&-a\end{pmatrix}.$$
>>	7. Al elevar al cuadrado obtenemos $$\widetilde Y^2=\begin{pmatrix}a^2+b^2&0\\0&a^2+b^2\end{pmatrix}=(a^2+b^2)I_2.$$ Pero también $\widetilde Y^2=-I_2$, de modo que $a^2+b^2=-1$, lo cual es imposible para $a,b\in\mathbb R$. Esta contradicción demuestra que no existe ningún monomorfismo $Q_8\to\operatorname{GL}_2(\mathbb R)$.

>[!exercise] Ejercicio 8
>Sea $G$ un grupo y denotemos por $|a|$ al orden de $a$ en $G$. Probar que para todo $a,b\in G$ valen:
>- **(i)** $|a|=|a^{-1}|$.
>- **(ii)** $|a|=|bab^{-1}|$.
>- **(iii)** $|ab|=|ba|$.
>>[!Proof]-
>>- (i)
>>	1. Para todo $n\in\mathbb Z$, se tiene $(a^{-1})^n=(a^n)^{-1}$. Por consiguiente, $(a^{-1})^n=e$ si y solo si $a^n=e$.
>>	2. Como los conjuntos $\{n\in\mathbb Z_{>0}:(a^{-1})^n=e\}$ y $\{n\in\mathbb Z_{>0}:a^n=e\}$ son idénticos, sus mínimos coinciden cuando son no vacíos, y ambos órdenes son infinitos cuando son vacíos. Por lo tanto, $|a|=|a^{-1}|$.
>>- (ii)
>>	1. Por inducción sobre $n$, para todo $n\in\mathbb Z_{>0}$ se cumple $(bab^{-1})^n=ba^nb^{-1}$.
>>	2. Luego, $(bab^{-1})^n=e\iff ba^nb^{-1}=e\iff a^n=b^{-1}eb=e$.
>>	3. Como $(bab^{-1})^n=e\iff a^n=e$, se concluye que $|bab^{-1}|=|a|$. De la misma manera que en (i)  
>>- (iii)
>>	1. Notemos que $ba=b(ab)b^{-1}$, por lo que $ba$ es conjugado de $ab$ mediante $b$.
>>	2. Aplicando directamente la parte (ii) con el elemento $x=ab$, obtenemos $$|ba|=|b(ab)b^{-1}|=|ab|.$$

>[!exercise] Ejercicio 9
>Sea $G$ un grupo abeliano.
>- **(a)** Si existen $a,b\in G$, con $|a|=m$, $|b|=n$, entonces existe $c\in G$ tal que $|c|=[m,n]$.
>- **(b)** Sean $p$ y $q$ primos distintos. Si $|G|=pq$ y existen $a,b\in G$, con $|a|=p$ y $|b|=q$, entonces $G$ es cíclico.
>>[!Proof]-
>>- (a)
>>	1. Sean $m=\prod_{i=1}^k p_i^{\alpha_i}$ y $n=\prod_{i=1}^k p_i^{\beta_i}$ las descomposiciones en factores primos de $m$ y $n$ (con $\alpha_i,\beta_i\ge 0$). Entonces $[m,n]=\prod_{i=1}^k p_i^{\max(\alpha_i,\beta_i)}$.
>>	2. Definimos $m'=\prod_{\alpha_i\ge\beta_i} p_i^{\alpha_i}$ y $n'=\prod_{\alpha_i<\beta_i} p_i^{\beta_i}$. Por construcción se tiene que $m'\mid m$, $n'\mid n$, $\gcd(m',n')=1$ y $m'n'=[m,n]$.
>>	3. Definimos los elementos $a'=a^{m/m'}$ y $b'=b^{n/n'}$. Dado que $|a|=m$ y $|b|=n$, se cumple $|a'|=m'$ y $|b'|=n'$
>>	4. Sea $c=a'b'=a^{\frac{m}{m'}}b^{\frac{n}{n'}}$. Como $G$ es **abeliano**, $$c^{m'n'}=(a'b')^{m'n'}=(a')^{m'n'}(b')^{m'n'}=((a')^{m'})^{n'}((b')^{n'})^{m'}=e^{n'}e^{m'}=e.$$ Por lo tanto, $|c|\mid m'n'$.
>>	5. Recíprocamente, sea $k=|c|$. Entonces $(a'b')^k=e$, de donde $(a')^k=(b')^{-k}$. Elevando a la potencia $m'$, obtenemos $((b')^{-k})^{m'}=((a')^k)^{m'}=((a')^{m'})^k=e^k=e$, por lo que $n'\mid km'$. Como $\gcd(m',n')=1$, se deduce que $n'\mid k$. Análogamente, elevando a la potencia $n'$ se concluye que $m'\mid k$. Puesto que $\gcd(m',n')=1$, se sigue que $m'n'\mid k$.
>>	6. En conclusión, $|c|=m'n'=[m,n]$.
>>- (b)
>>	1. Como $p$ y $q$ son números primos distintos, son coprimos, de modo que $[p,q]=pq$.
>>	2. Por la parte (a), al existir $a,b\in G$ con $|a|=p$ y $|b|=q$, existe un elemento $c\in G$ tal que $|c|=[p,q]=pq$.
>>	3. El subgrupo cíclico generado por $c$ satisface $|\langle c\rangle|=|c|=pq=|G|$.
>>	4. Puesto que $\langle c\rangle\subseteq G$ y ambos tienen el mismo cardinal finito, se sigue que $G=\langle c\rangle$. Por lo tanto, $G$ es cíclico.

>[!exercise] Ejercicio 10
>En cada uno de los siguientes casos calcular el orden de $x$:
>- **(a)** $G=S_8$, $x=(1235)\cdot(1378)$.
>- **(b)** $G=\mathcal H$, $x=\begin{pmatrix}i&0\\0&-i\end{pmatrix}$.
>- **(c)** $G=\mathbb C^\times$, $x=\cos(2\pi/n)+i\operatorname{sen}(2\pi/n)$, con $n\in\mathbb N$.
>- **(d)** $G=\mathbb C^\times$, $x=\frac12\cos(2\pi/n)+\frac12i\operatorname{sen}(2\pi/n)$, con $n\in\mathbb N$.
>- **(e)** $G=\mathbb C^\times$, $x=\cos(m/n)+i\operatorname{sen}(m/n)$, con $n,m\in\mathbb N$.
>- **(f)** $G=\mathbb Z_n$, $x$ arbitrario.
>>[!Proof]-
>>- (a)
>>	1. Calculamos sucesivamente la imagen de cada elemento, aplicando primero el ciclo de la derecha. Se obtiene $1\mapsto5\mapsto1$, $2\mapsto3\mapsto7\mapsto8\mapsto2$, mientras que los demás elementos quedan fijos.
>>	2. Por lo tanto, $$x=(15)(2378).$$
>>	3. Calculamos las potencias: $$x^2=(15)^2(2378)^2=(78)(23),$$ $$x^3=(15)^3(2378)^3=(15)(2783),$$ y $$x^4=(15)^4(2378)^4=\operatorname{id}.$$ Como $x^2\neq\operatorname{id}$, concluimos que $\boxed{|x|=4}$.
>>- (b)
>>	1. Sea $x=\begin{pmatrix}i&0\\0&-i\end{pmatrix}$. Calculamos sus potencias: $$x^2=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I,\qquad x^4=(x^2)^2=(-I)^2=I.$$ Como $x\neq I$ y $x^2\neq I$, concluimos que $$\boxed{|x|=4}.$$ 
>>- (c)
>>	1. Para todo $k\in\mathbb N$, por la fórmula de De Moivre, $$x^k=\cos(2\pi k/n)+i\operatorname{sen}(2\pi k/n).$$
>>	2. Tenemos $x^k=1$ si y solo si $2\pi k/n=2\pi r$ para algún $r\in\mathbb Z$, lo cual equivale a $n\mid k$. El menor entero positivo con esta propiedad es $k=n$. Por lo tanto, $$\boxed{|x|=n}.$$ 
>>- (d)
>>	1. El módulo de $x$ es $$|x|=\sqrt{\left(\frac12\cos(2\pi/n)\right)^2+\left(\frac12\operatorname{sen}(2\pi/n)\right)^2}=\frac12.$$ Por consiguiente, para todo $k\ge1$, $$|x^k|=|x|^k=\left(\frac12\right)^k\neq1.$$ 
>>	2. Como el elemento neutro de $\mathbb C^\times$ es $1$, se tiene $x^k\neq1$ para todo $k\ge1$. Así, $$\boxed{|x|=\infty}.$$ 
>>- (e)
>>	1. Para todo $k\ge1$, por la fórmula de De Moivre, $$x^k=\cos(km/n)+i\operatorname{sen}(km/n).$$
>>	2. Si $x^k=1$, entonces $km/n=2\pi r$ para algún $r\in\mathbb Z$. Como $k,m,n$ son enteros y $m,n>0$, esto implicaría que $2\pi=km/(nr)$ sería racional si $r\neq0$, lo cual es imposible. Si $r=0$, entonces $km/n=0$, también imposible. Por lo tanto, $x^k\neq1$ para todo $k\ge1$ y $$\boxed{|x|=\infty}.$$ 
>>- (f)
>>	1. En el grupo aditivo $\mathbb Z_n$, el orden de $[x]_n$ es el menor $k\ge1$ tal que $$k[x]_n=[0]_n,$$ es decir, tal que $n\mid kx$.
>>	2. Escribimos $d=\gcd(x,n)$, $x=dx'$ y $n=dn'$, con $\gcd(x',n')=1$. La condición $n\mid kx$ equivale a $dn'\mid kdx'$, es decir, $n'\mid kx'$. Como $x'$ y $n'$ son coprimos, esto equivale a $n'\mid k$.
>>	3. El menor entero positivo $k$ divisible por $n'$ es $n'$. Por consiguiente, $$\boxed{|[x]_n|=\frac{n}{\gcd(x,n)}}.$$
mp

>[!exercise] Ejercicio 11
>Determinar los elementos del subgrupo cíclico de $\operatorname{GL}(2,\mathbb R)$ generado por $\begin{pmatrix}1&1\\-1&0\end{pmatrix}$.
>>[!Proof]-
>>1. Sea $A=\begin{pmatrix}1&1\\-1&0\end{pmatrix}$. El subgrupo cíclico generado por $A$ es $\langle A\rangle=\{A^n:n\in\mathbb Z\}$.
>>2. Calculamos las potencias sucesivas de $A$: $$\begin{aligned}A^1&=\begin{pmatrix}1&1\\-1&0\end{pmatrix},\\A^2&=\begin{pmatrix}1&1\\-1&0\end{pmatrix}\begin{pmatrix}1&1\\-1&0\end{pmatrix}=\begin{pmatrix}0&1\\-1&-1\end{pmatrix},\\A^3&=A^2A=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I,\\A^4&=-A=\begin{pmatrix}-1&-1\\1&0\end{pmatrix},\\A^5&=-A^2=\begin{pmatrix}0&-1\\1&1\end{pmatrix},\\A^6&=(-I)^2=I.\end{aligned}$$
>>3. Como $A^6=I$ y $A^k\neq I$ para $1\le k<6$, se tiene $|A|=6$.
>>4. Por lo tanto, el subgrupo cíclico es $$\boxed{\langle A\rangle=\left\{\begin{pmatrix}1&0\\0&1\end{pmatrix},\ \begin{pmatrix}1&1\\-1&0\end{pmatrix},\ \begin{pmatrix}0&1\\-1&-1\end{pmatrix},\ \begin{pmatrix}-1&0\\0&-1\end{pmatrix},\ \begin{pmatrix}-1&-1\\1&0\end{pmatrix},\ \begin{pmatrix}0&-1\\1&1\end{pmatrix}\right\}}.$$

>[!exercise] Ejercicio 12
>Hallar todos los subgrupos de: $\mathbb Z_3$; $\mathbb Z_2\times\mathbb Z_2$; $\mathbb S_3$; $D_4$.
>>[!Proof]-
>>Por el teorema de Lagrange, el orden de cualquier subgrupo $H\le G$ debe dividir a $|G|$.
>>
>>- **(1) Subgrupos de $\mathbb Z_3$:**
>>	1. Como $|\mathbb Z_3|=3$ es un número primo, los únicos divisores posibles para el orden de un subgrupo son $1$ y $3$.
>>	2. El único subgrupo de orden $1$ es el trivial: $\{[0]\}$.
>>	3. El único subgrupo de orden $3$ es el grupo completo: $\mathbb Z_3$.
>>	4. Por lo tanto, los subgrupos de $\mathbb Z_3$ son $$\boxed{\{[0]\},\quad\mathbb Z_3.}$$
>>
>>- **(2) Subgrupos de $\mathbb Z_2\times\mathbb Z_2$:**
>>	1. Se tiene $|\mathbb Z_2\times\mathbb Z_2|=4$. Los posibles órdenes de sus subgrupos son $1, 2, 4$.
>>	2. **Orden 1:** El subgrupo trivial $\{([0],[0])\}$.
>>	3. **Orden 2:** Todo subgrupo de orden primo $2$ es cíclico, generado por un elemento de orden $2$. Los elementos no nulos son $([1],[0]), ([0],[1])$ y $([1],[1])$, y todos tienen orden $2$. Por lo tanto, obtenemos $3$ subgrupos: $$\langle([1],[0])\rangle=\{([0],[0]),([1],[0])\},$$ $$\langle([0],[1])\rangle=\{([0],[0]),([0],[1])\},$$ $$\langle([1],[1])\rangle=\{([0],[0]),([1],[1])\}.$$
>>	4. **Orden 4:** El grupo completo $\mathbb Z_2\times\mathbb Z_2$.
>>	5. En conclusión, hay $5$ subgrupos: $$\boxed{\{([0],[0])\},\quad\langle([1],[0])\rangle,\quad\langle([0],[1])\rangle,\quad\langle([1],[1])\rangle,\quad\mathbb Z_2\times\mathbb Z_2.}$$
>>
>>- **(3) Subgrupos de $\mathbb S_3$:**
>>	1. Tenemos $|\mathbb S_3|=3!=6$. Los posibles órdenes son $1, 2, 3, 6$.
>>	2. Los elementos de $\mathbb S_3$ clasificados por su orden son:
>>		- **Orden 1:** $\operatorname{id}$.
>>		- **Orden 2:** Las transposiciones $(12), (13), (23)$.
>>		- **Orden 3:** Los 3-ciclos $(123), (132)$.
>>	3. **Orden 1:** $\{\operatorname{id}\}$.
>>	4. **Orden 2:** Cada transposición genera un subgrupo de orden $2$: $$\langle(12)\rangle=\{\operatorname{id},(12)\},\quad\langle(13)\rangle=\{\operatorname{id},(13)\},\quad\langle(23)\rangle=\{\operatorname{id},(23)\}.$$
>>	5. **Orden 3:** Como $(123)^2=(132)$, ambos 3-ciclos generan el mismo subgrupo cíclico de orden $3$: $$\langle(123)\rangle=\{\operatorname{id},(123),(132)\}=\mathbb A_3.$$
>>	6. **Orden 6:** El grupo total $\mathbb S_3$.
>>	7. En conclusión, hay $6$ subgrupos: $$\boxed{\{\operatorname{id}\},\quad\langle(12)\rangle,\quad\langle(13)\rangle,\quad\langle(23)\rangle,\quad\langle(123)\rangle,\quad\mathbb S_3.}$$
>>
>>- **(4) Subgrupos de $D_4$:**
>>	1. Consideramos la presentación $D_4=\langle r,s\mid r^4=e,\,s^2=e,\,srs=r^{-1}\rangle$, cuyo orden es $|D_4|=8$. Los posibles órdenes de sus subgrupos son $1, 2, 4, 8$.
>>	2. Los 8 elementos clasificados por orden son:
>>		- **Orden 1:** $e$.
>>		- **Orden 2:** $r^2$ (rotación de $180^\circ$) y las $4$ reflexiones $s, sr, sr^2, sr^3$.
>>		- **Orden 4:** $r, r^3$ (rotaciones de $90^\circ$ y $270^\circ$).
>>	3. **Orden 1:** $\{e\}$.
>>	4. **Orden 2:** Hay $5$ elementos de orden $2$, cada uno generando un subgrupo cíclico de orden $2$: $$\langle r^2\rangle=\{e,r^2\},\quad\langle s\rangle=\{e,s\},\quad\langle sr\rangle=\{e,sr\},\quad\langle sr^2\rangle=\{e,sr^2\},\quad\langle sr^3\rangle=\{e,sr^3\}.$$
>>	5. **Orden 4:**
>>		- *Cíclico:* Generado por los elementos de orden $4$: $$\langle r\rangle=\{e,r,r^2,r^3\}=\langle r^3\rangle.$$
>>		- *No cíclicos ($\cong\mathbb Z_2\times\mathbb Z_2$):* Formados por el neutro y tres elementos de orden $2$ que conmutan entre sí (la rotación $r^2$ junto con un par de reflexiones perpendiculares): $$\langle r^2,s\rangle=\{e,r^2,s,sr^2\},$$ $$\langle r^2,sr\rangle=\{e,r^2,sr,sr^3\}.$$
>>	6. **Orden 8:** El grupo total $D_4$.
>>	7. En conclusión, hay $10$ subgrupos en total.
>[!exercise] Ejercicio 13
>Hallar $9$ subgrupos de $S_4$ diferentes entre sí e isomorfos a $S_2$ y $4$ subgrupos diferentes entre sí e isomorfos a $S_3$.
>>[!Proof]-
>>- **Subgrupos isomorfos a $S_2$.** Una permutación de orden $2$ genera un subgrupo de orden $2$, necesariamente isomorfo a $S_2$. En $S_4$ hay seis transposiciones y tres productos de transposiciones disjuntas, y cada una genera un subgrupo distinto:
>>	$$\begin{aligned}\langle(12)\rangle&=\{\operatorname{id},(12)\},&\langle(13)\rangle&=\{\operatorname{id},(13)\},&\langle(14)\rangle&=\{\operatorname{id},(14)\},\\\langle(23)\rangle&=\{\operatorname{id},(23)\},&\langle(24)\rangle&=\{\operatorname{id},(24)\},&\langle(34)\rangle&=\{\operatorname{id},(34)\},\\\langle(12)(34)\rangle&=\{\operatorname{id},(12)(34)\},&\langle(13)(24)\rangle&=\{\operatorname{id},(13)(24)\},&\langle(14)(23)\rangle&=\{\operatorname{id},(14)(23)\}.\end{aligned}$$
>>- **Subgrupos isomorfos a $S_3$.** Para cada $i\in\{1,2,3,4\}$, consideremos el estabilizador de $i$: $$H_i=\{\sigma\in S_4:\sigma(i)=i\}.$$ Las permutaciones de $H_i$ actúan arbitrariamente sobre los tres elementos restantes, por lo que la restricción a esos elementos define un isomorfismo $H_i\cong S_3$. Por ejemplo, $$H_4=\{\operatorname{id},(12),(13),(23),(123),(132)\}.$$ Los otros tres subgrupos se obtienen fijando, respectivamente, $1$, $2$ y $3$. Notamos que si $i\neq j$, elegimos $k$ distinto de ambos; entonces $(jk)\in H_i$ pero $(jk)\notin H_j$, así que $H_i\neq H_j$.

>[!exercise] Ejercicio 14
>Si un grupo tiene sólo una cantidad finita de subgrupos, entonces es finito.
>>[!Proof]-
>>1. Supongamos, por contradicción, que $G$ es infinito y que tiene sólo una cantidad finita de subgrupos. 
>>2. Como $\langle g\rangle$ es un subgrupo de $G$ para todo $g\in G$, sólo puede haber una cantidad finita de subgrupos cíclicos distintos.
>>3. Si existe $g\in G$ tal que $\langle g\rangle$ es infinito, entonces $g$ tiene orden infinito. Consideremos, para $n\geq1$, los subgrupos $\langle g^n\rangle$. Si $1\leq m<n$ y $\langle g^m\rangle=\langle g^n\rangle$, entonces $g^m\in\langle g^n\rangle$, de modo que $g^m=g^{nk}$ para algún $k\in\mathbb Z$. 
>>4. Por tanto, $g^{m-nk}=e$. Como $g$ tiene orden infinito, $m-nk=0$, es decir, $m=nk$, lo cual es imposible porque $0<m<n$. Así, los subgrupos $\langle g^n\rangle$ son ciclicos y distintos, contradiciendo la hipótesis.
>>5. Por lo tanto, todos los subgrupos cíclicos de $G$ son finitos. Como sólo hay una cantidad finita de subgrupos cíclicos distintos, digamos $\langle g_1\rangle,\ldots,\langle g_r\rangle$, y cada elemento $g\in G$ pertenece a $\langle g\rangle$, se tiene $$G=\bigcup_{i=1}^r\langle g_i\rangle.$$ Esta unión es finita porque es una unión finita de conjuntos finitos, contradiciendo que $G$ es infinito.
>>6. La contradicción demuestra que $G$ es finito.

>[!exercise] Ejercicio 15
>Probar que el subgrupo de $\operatorname{GL}(2,\mathbb R)$ generado por $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ y $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ es no abeliano de orden $8$ y es isomorfo a $D_4$.
>>[!Proof]-
>>1. **Cálculo de los candidatos.** Como $$A^2=-I,$$ se tiene $A^4=I$, y además $B^2=I$. Calculamos $$A^3=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad BA=\begin{pmatrix}-1&0\\0&1\end{pmatrix},\qquad BA^2=\begin{pmatrix}0&-1\\-1&0\end{pmatrix},\qquad BA^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$ Por lo tanto, consideramos $$S=\{A^k,BA^k:k=0,1,2,3\}.$$
>>2. **Cierre.** Para $i,j\in\{0,1,2,3\}$, usando $AB=BA^{-1}$, obtenemos $$\begin{aligned}A^iA^j&=A^{i+j},&A^i(BA^j)&=BA^{j-i},\\(BA^i)A^j&=BA^{i+j},&(BA^i)(BA^j)&=A^{j-i}.\end{aligned}$$ Como $A^4=I$, los exponentes se consideran módulo $4$, de modo que todas estas expresiones pertenecen a $S$. Además, $I=A^0\in S$ y $(A^i)^{-1}=A^{-i}\in S$. Para los otros elementos, como $B^{-1}=B$, se tiene $$(BA^i)^{-1}=A^{-i}B=BA^i,$$ donde usamos $A^{-i}B=BA^i$; equivalentemente, $(BA^i)^2=BA^iBA^i=A^{-i}A^i=I$. Por lo tanto, los inversos también pertenecen a $S$, y $S$ es un subgrupo.
>>3. **Subgrupo generado.** Como ya probamos que $S$ es un subgrupo, por definición, $\langle A,B\rangle$ es el menor subgrupo de $S$ que contiene a $A$ y $B$, de modo que $$\langle A,B\rangle\subseteq S.$$ Recíprocamente, para cada $k\in\{0,1,2,3\}$ se cumple $A^k\in\langle A,B\rangle$ y $BA^k\in\langle A,B\rangle$, pues $A,B\in\langle A,B\rangle$. Por lo tanto, $S\subseteq\langle A,B\rangle$, y concluimos que $$\langle A,B\rangle=S.$$ 

>[!exercise] Ejercicio 16
>Sea $p$ un número primo mayor que $2$. Probar que $$G=\left\{\begin{pmatrix}1&a&b\\0&1&c\\0&0&1\end{pmatrix}:a,b,c\in\mathbb Z_p\right\},$$ con el producto usual de matrices, es un grupo no abeliano tal que todo elemento distinto de la identidad tiene orden $p$. ¿Qué sucede si $p=2$?

>[!exercise] Ejercicio 17
>Consideremos el grupo simétrico $S_n$.
>- **(a)** Escribir al ciclo $(i_1i_2\ldots i_r)$ como producto de transposiciones.
>- **(b)** Mostrar que el producto de transposiciones $(1i)(1j)(1i)$ es una transposición. ¿Cuál?
>- **(c)** Probar que $S_n$ está generado por las $n-1$ transposiciones $(1i)$ con $i=2,\ldots,n$.
>- **(d)** Calcular el producto de transposiciones $(1\ j-1)(j-1\ j)(1\ j-1)$, con $j=3,\ldots,n$.
>- **(e)** Probar que $S_n$ está generado por las $n-1$ transposiciones $(i\ i+1)$ con $i=1,\ldots,n-1$.
>- **(f)** Sean $\sigma=(12)$ y $\tau=(123\ldots n)$. Calcular $\tau^i\sigma\tau^{-i}$.
>- **(g)** Probar que $S_n$ está generado por $\sigma$ y $\tau$.

>[!exercise] Ejercicio 18
>Calcular el orden y el signo de las siguientes permutaciones: $(4267)\in S_9$; $(365)(173)\in S_7$; $(13254)(35)\in S_6$.

>[!exercise] Ejercicio 19
>Decir cuáles de los siguientes grupos son isomorfos entre sí: $$\mathbb Z_2\times\mathbb Z_2\times\mathbb Z_2;\quad \mathbb Z_2\times\mathbb Z_4;\quad \mathbb Z_2\times G_4;\quad \mathbb Z_8;\quad D_4;\quad G_8;\quad \mathcal H;\quad Q_8,$$ donde $Q_8$ es el grupo de cuaterniones: $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ con la operación dada por $$i^2=j^2=k^2=-1,\qquad ij=k=-ji,$$ $(-1)i=-i$, $(-1)j=-j$ y $(-1)k=-k$.

>[!exercise] Ejercicio 20
>Mostrar que si $f\colon G\to H$ es un morfismo de grupos y $x\in G$ es tal que $|x|$ es finito, entonces $|f(x)|$ divide a $|x|$.

>[!exercise] Ejercicio 21
>Para los siguientes pares de grupos $(G,H)$, calcular $\operatorname{Hom}(G,H)$ y $\operatorname{Hom}(H,G)$:
>- **(a)** $(G_n,\mathbb Z)$.
>- **(b)** $(\mathbb Z,\mathbb Q)$.
>- **(c)** $(\mathbb Z,\text{grupo finito})$.
>- **(d)** $(\mathbb Z_2\times\mathbb Z_2,\mathbb Z_4)$.

>[!exercise] Ejercicio 22
>Para los siguientes grupos $G$, calcular $\operatorname{End}(G)$ y $\operatorname{Aut}(G)$:
>- **(a)** $\mathbb Z$.
>- **(b)** $\mathbb Q$.
>- **(c)** $\mathbb Z_n$.
>- **(d)** $\mathbb Z_2\times\mathbb Z_2$.

## Ejercicios adicionales

>[!exercise] Ejercicio 23
>Probar que todos los grupos de orden $\leq5$ son abelianos. ¿Son todos cíclicos? ¿Cuántos grupos no isomorfos de orden $4$ hay?

>[!exercise] Ejercicio 24
>Probar que:
>- **(a)** $\operatorname{Hom}(\mathbb Z,\mathbb Z_n)\neq0$.
>- **(b)** No existe un epimorfismo de $\mathbb Z$ en $\mathbb Z\times\mathbb Z$.
>- **(c)** $\operatorname{Hom}(\mathbb Q,\mathbb Z)=0$.

>[!exercise] Ejercicio 25
>Sea $f\colon G\to H$ un homomorfismo. Decir para cuáles de las siguientes propiedades $P$ vale que «si $G$ cumple $P$, entonces $H$ cumple $P$». Hacer lo mismo asumiendo que $f$ es epimorfismo y luego asumiendo que es monomorfismo.
>- **(a)** Tener $n$ elementos.
>- **(b)** Ser finito.
>- **(c)** Ser conmutativo.
>- **(d)** Ser no conmutativo.
>- **(e)** Ser cíclico.
>- **(f)** Todo elemento tiene orden finito.
>- **(g)** Todo elemento no trivial tiene orden infinito.

>[!exercise] Ejercicio 26
>Hallar en $S_3$ y en $S_4$ elementos de todos los órdenes posibles.

>[!exercise] Ejercicio 27
>Sea $G=\operatorname{GL}(2,\mathbb Z_3)$. Encontrar subgrupos de $G$ de orden $2$, $4$ y $8$.

>[!exercise] Ejercicio 28
>Sean $a,b\in\mathbb Z$. Probar que $\{a,b\}$ es un sistema de generadores de $\mathbb Z$ si y sólo si $(a,b)=1$.

>[!exercise] Ejercicio 29
>Sean $G$ un grupo finito, $g\in G$ y $p$ primo. Probar que $$g=g_rg_u=g_ug_r,$$ donde $g_r,g_u\in G$ son tales que $(|g_r|,p)=1$ y $|g_u|=p^k$, para algún $k$. Mostrar que $g_r$ y $g_u$ son únicos con esta propiedad. (Nota: el elemento $g_r$ se llama la parte $p$-regular de $g$ y el elemento $g_u$ se llama la parte $p$-unipotente de $g$.)

>[!exercise] Ejercicio 30
>Sea $$G=\left\{\begin{pmatrix}1&b\\0&a\end{pmatrix}:a,b\in\mathbb Z_7,\ a\neq0\right\}.$$
>- **(a)** Hallar el orden de $G$.
>- **(b)** Para cada primo $p$ que divide a $|G|$, hallar todos los elementos de $G$ de orden $p$.

>[!exercise] Ejercicio 31
>Determinar si los siguientes pares de grupos son isomorfos o no: $$(\mathbb Z_n,G_n);\quad (\mathbb Z_{10},\mathbb Z_2\times\mathbb Z_5);\quad (\mathbb R,\mathbb C);\quad (U_{16},\mathcal H);\quad (A_4,D_6).$$

>[!exercise] Ejercicio 32
>- **(i)** La relación $x\sim y\iff x-y\in\mathbb Z$ es una relación de congruencia en $(\mathbb Q,+)$.
>- **(ii)** $\mathbb Q/{\sim}$ es un grupo abeliano infinito (se lo llama grupo de racionales módulo uno).
>- **(iii)** Mostrar que todos los elementos de $\mathbb Q/{\sim}$ tienen orden finito.
>- **(iv)** Probar que para cada $n\in\mathbb N$ existe $g\in\mathbb Q/{\sim}$ tal que $|g|=n$.

>[!exercise] Ejercicio 33
>Para cada $p\in\mathbb N$ primo definimos el siguiente subconjunto del grupo $\mathbb Q/{\sim}$: $$\mathbb Z(p^\infty):=\{x:x\in R_p\}=\left\{x=\frac ab\in\mathbb Q/{\sim}:a,b\in\mathbb Z,\ b=p^i,\text{ para algún }i\geq0\right\}.$$ Probar que:
>- **(i)** $\mathbb Z(p^\infty)$ es un subgrupo infinito de $\mathbb Q/{\sim}$.
>- **(ii)** $\mathbb Z(p^\infty)$ está generado por el conjunto $\{1/p^n:n\in\mathbb N\cup\{0\}\}$.
>- **(iii)** Cada elemento de $\mathbb Z(p^\infty)$ tiene orden finito e igual a $p^\ell$, para algún $\ell\geq0$.
>Sea $H$ un subgrupo de $\mathbb Z(p^\infty)$. Mostrar las siguientes afirmaciones.
>- **(iv)** Si existe $h_0\in H$ tal que $|h_0|=p^k$ y $|h|\leq p^k$ para todo $h\in H$, entonces $H=\langle1/p^k\rangle\cong\mathbb Z_{p^k}$.
>- **(v)** Si para todo $M\in\mathbb N$ existe $h\in H$ tal que $|h|>M$, entonces $H=\mathbb Z(p^\infty)$.
>- **(vi)** Los únicos subgrupos propios de $\mathbb Z(p^\infty)$ son los grupos cíclicos finitos $C_n:=\langle1/p^n\rangle$, $n\in\mathbb N$. Más aún, $C_n<C_{n+1}$ para todo $n\in\mathbb N$.
