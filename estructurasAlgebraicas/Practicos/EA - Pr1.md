---
tags:
  - AlgebraicStructures
  - Groups
  - Practico1
---
# Práctico 1

>[!exercise] Ejercicio 1
>Decidir en cada caso si $(G,*)$ es un grupo o no y, en caso afirmativo, si es abeliano o no.
>- **(a)** $G=\mathbb R_{>0}$, con $a*b=a^b$.
>- **(b)** $G=\mathbb Z\times\mathbb Z$, con $(m,n)*(r,s)=\left(m+(-1)^nr,n+s\right)$.
>- **(c)** $G=\mathcal P(X)$ (partes de $X$), con $A*B=A\cup B$.
>- **(d)** $G=\mathcal P(X)$, con $A*B=A\cap B$.
>
>>[!Proof]-
>>- **(a)** $G=\mathbb R_{>0}$, con $a*b=a^b$.
>>	1. Para que $(G,*)$ sea un grupo, la operación debe ser asociativa. Tomando $a=b=2$ y $c=3$, por un lado obtenemos $$(2*2)*3=(2^2)^3=4^3=64,$$ mientras que, por otro lado, $$2*(2*3)=2^{(2^3)}=2^8=256.$$
>>	2. Como $(2*2)*3\neq 2*(2*3)$, la operación no es asociativa.
>>	3. Por lo tanto, $(\mathbb R_{>0},*)$ **no es un grupo**.
>>- **(b)** $G=\mathbb Z\times\mathbb Z$, con $$(m,n)*(r,s)=\left(m+(-1)^nr,n+s\right).$$
>>	1. **Clausura.** Si $(m,n),(r,s)\in\mathbb Z\times\mathbb Z$, entonces $m+(-1)^nr\in\mathbb Z$ y $n+s\in\mathbb Z$. Por lo tanto, la operación es cerrada en $G$.
>>	2. **Asociatividad.** Sean $(m,n),(r,s),(t,u)\in\mathbb Z\times\mathbb Z$. Por un lado, $$\begin{aligned}\big((m,n)*(r,s)\big)*(t,u)&=(m+(-1)^nr,n+s)*(t,u)\\&=\left(m+(-1)^nr+(-1)^{n+s}t,n+s+u\right).\end{aligned}$$ Por otro lado, $$\begin{aligned}(m,n)*\big((r,s)*(t,u)\big)&=(m,n)*(r+(-1)^st,s+u)\\&=\left(m+(-1)^n(r+(-1)^st),n+s+u\right)\\&=\left(m+(-1)^nr+(-1)^{n+s}t,n+s+u\right).\end{aligned}$$ Ambas expresiones coinciden, donde usamos que $(-1)^n(-1)^s=(-1)^{n+s}$. Luego, $*$ es asociativa.
>>	3. **Elemento neutro.** El neutro es $(0,0)$, pues para todo $(m,n)\in G$, $$(m,n)*(0,0)=(m,n)$$ y $$(0,0)*(m,n)=(m,n).$$
>>	4. **Inversos.** Dado $(m,n)\in G$, buscamos $(r,s)\in G$ tal que $$(m,n)*(r,s)=(0,0).$$ Esto equivale a $$m+(-1)^nr=0,\qquad n+s=0,$$ de donde $$r=-(-1)^nm,\qquad s=-n.$$ Por lo tanto, el candidato a inverso es $$(m,n)^{-1}=\left(-(-1)^nm,-n\right).$$ También es inverso por la izquierda, ya que $(-1)^{-n}=(-1)^n$ y $$\begin{aligned}\left(-(-1)^nm,-n\right)*(m,n)&=\left(-(-1)^nm+(-1)^{-n}m,0\right)\\&=(0,0).\end{aligned}$$ Así, $(\mathbb Z\times\mathbb Z,*)$ es un grupo.
>>	5. **Conmutatividad.** El grupo no es abeliano. En efecto, $$(1,0)*(0,1)=(1,1),$$ mientras que $$(0,1)*(1,0)=(-1,1).$$ Como $(1,1)\neq(-1,1)$, la operación no es conmutativa. Por lo tanto, $(\mathbb Z\times\mathbb Z,*)$ es un **grupo no abeliano**.
>>- **(c)** $G=\mathcal P(X)$, con $A*B=A\cup B$.
>>	1. **Clausura.** Si $A,B\in\mathcal P(X)$, entonces $A\cup B\subseteq X$, de modo que $A\cup B\in\mathcal P(X)$.
>>	2. **Asociatividad.** Para todos $A,B,C\in\mathcal P(X)$ se cumple $$(A*B)*C=(A\cup B)\cup C=A\cup(B\cup C)=A*(B*C).$$ Por lo tanto, $*$ es asociativa.
>>	3. **Elemento neutro.** El neutro es $\varnothing$, pues para todo $A\in\mathcal P(X)$, $$A*\varnothing=A\cup\varnothing=A=\varnothing\cup A=\varnothing*A.$$
>>	4. **Inversos.** Para que $B$ sea inverso de $A$ debería cumplirse $$A*B=A\cup B=\varnothing.$$ Esta igualdad solo es posible si $A=B=\varnothing$. Por consiguiente, ningún subconjunto no vacío de $X$ tiene inverso.
>>	5. Si $X\neq\varnothing$, entonces $\mathcal P(X)$ contiene subconjuntos no vacíos y $(\mathcal P(X),*)$ **no es un grupo**. Si $X=\varnothing$, entonces $\mathcal P(X)=\{\varnothing\}$ y se obtiene el grupo trivial, que es abeliano.
>>- **(d)** $G=\mathcal P(X)$, con $A*B=A\cap B$.
>>	1. **Clausura.** Si $A,B\in\mathcal P(X)$, entonces $A\cap B\subseteq X$, de modo que $A\cap B\in\mathcal P(X)$.
>>	2. **Asociatividad.** Para todos $A,B,C\in\mathcal P(X)$ se cumple $$(A*B)*C=(A\cap B)\cap C=A\cap(B\cap C)=A*(B*C).$$ Por lo tanto, $*$ es asociativa.
>>	3. **Elemento neutro.** El neutro es $X$, pues para todo $A\in\mathcal P(X)$, $$A*X=A\cap X=A=X\cap A=X*A.$$
>>	4. **Inversos.** Para que $B$ sea inverso de $A$ debería cumplirse $$A*B=A\cap B=X.$$ Como $A\cap B\subseteq A\subseteq X$, esta igualdad implica que $A=X$; análogamente, también implica que $B=X$. Por consiguiente, únicamente $X$ tiene inverso.
>>	5. Si $X\neq\varnothing$, entonces $\mathcal P(X)$ contiene elementos distintos de $X$, por ejemplo $\varnothing$, que no tienen inverso. Por lo tanto, $(\mathcal P(X),*)$ **no es un grupo**
>>	6. Si $X=\varnothing$, entonces $\mathcal P(X)=\{\varnothing\}$ y se obtiene el grupo trivial, que es abeliano.

>[!exercise] Ejercicio 2
>Probar que los siguientes conjuntos son grupos con la operación natural. Identificar la identidad y describir el inverso de cada elemento.
>- **(a)** $S^1=\{z\in\mathbb C:|z|=1\}$.
>- **(b)** El grupo especial lineal, $\operatorname{SL}(n,\mathbb R)=\{A\in M_n(\mathbb R):\det(A)=1\}$.
>- **(c)** El grupo de unidades de $\mathbb Z_n$, $U_n=\{a\in\mathbb Z_n:(a,n)=1\}$.
>- **(d)** El grupo de raíces $n$-ésimas de la unidad, $G_n=\{w\in\mathbb C:w^n=1\}$.
>- **(e)** El grupo de todas las raíces de la unidad, $G_\infty=\bigcup_{n\in\mathbb N}G_n$.
>
>>[!Proof]-
>>- **(a)** La operación natural en $S^1$ es el producto de números complejos.
>>	1. **Clausura.** Si $z,w\in S^1$, entonces $|z|=|w|=1$. Por la propiedad multiplicativa del módulo, $$|zw|=|z||w|=1\cdot1=1.$$ Por lo tanto, $zw\in S^1$.
>>	2. **Asociatividad.** Se hereda de la multiplicación en $\mathbb C$: para todos $z,w,u\in S^1$, $$(zw)u=z(wu).$$
>>	3. **Elemento neutro.** El neutro es $1$, pues $1\in S^1$ y para todo $z\in S^1$, $$z\cdot1=z=1\cdot z.$$
>>	4. **Inversos.** Si $z\in S^1$, entonces $|z|=1$ y $$z\overline z=|z|^2=1.$$ Por lo tanto, el inverso de $z$ es $z^{-1}=\overline z$, que también pertenece a $S^1$ porque $|\overline z|=|z|=1$.
>>	5. En consecuencia, $(S^1,\cdot)$ es un grupo. Además, es abeliano porque la multiplicación en $\mathbb C$ es conmutativa.
>>- **(b)** La operación natural en $\operatorname{SL}(n,\mathbb R)$ es la multiplicación de matrices.
>>	1. **Clausura.** Si $A,B\in\operatorname{SL}(n,\mathbb R)$, entonces $\det(A)=\det(B)=1$. Como el determinante es multiplicativo, $$\det(AB)=\det(A)\det(B)=1\cdot1=1.$$ Por lo tanto, $AB\in\operatorname{SL}(n,\mathbb R)$.
>>	2. **Asociatividad.** Se hereda de la multiplicación usual de matrices en $M_n(\mathbb R)$: para todas $A,B,C\in\operatorname{SL}(n,\mathbb R)$, $$(AB)C=A(BC).$$
>>	3. **Elemento neutro.** El neutro es la matriz identidad $I_n$, pues $\det(I_n)=1$ y para toda $A\in\operatorname{SL}(n,\mathbb R)$, $$AI_n=A=I_nA.$$
>>	4. **Inversos.** Si $A\in\operatorname{SL}(n,\mathbb R)$, entonces $\det(A)=1\neq0$, por lo que $A$ es invertible. Además, $$\det(A^{-1})=\frac{1}{\det(A)}=1,$$ de modo que $A^{-1}\in\operatorname{SL}(n,\mathbb R)$.
>>	5. En consecuencia, $(\operatorname{SL}(n,\mathbb R),\cdot)$ es un grupo. Pero claramente **no es abeliano** por que la multiplicacion de matrices no es conmutativa
>>- **(c)** La operación natural en $U_n$ es la multiplicación módulo $n$.
>>	1. **Clausura.** Si $\overline a,\overline b\in U_n$, entonces $\gcd(a,n)=\gcd(b,n)=1$. Por lo tanto, $\gcd(ab,n)=1$, de modo que $\overline a\,\overline b=\overline{ab}\in U_n$.
>>	2. **Asociatividad.** Se hereda de la multiplicación de enteros: para todas $\overline a,\overline b,\overline c\in U_n$, $$(\overline a\,\overline b)\overline c=\overline a(\overline b\,\overline c).$$
>>	3. **Elemento neutro.** El neutro es $\overline1$, pues $\gcd(1,n)=1$ y para toda $\overline a\in U_n$, $$\overline a\,\overline1=\overline a=\overline1\,\overline a.$$
>>	4. **Inversos.** Si $\overline a\in U_n$, entonces $\gcd(a,n)=1$. Por la identidad de Bézout, existen $r,s\in\mathbb Z$ tales que $$ar+ns=1.$$ Al tomar clases módulo $n$, obtenemos $$\overline a\,\overline r=\overline1.$$ Por lo tanto, $\overline r$ es el inverso multiplicativo de $\overline a$ en $U_n$.
>>	5. En consecuencia, $(U_n,\cdot)$ es un grupo. Además, es **abeliano** porque la multiplicación de enteros es conmutativa.
>>- **(d)** Consideramos $G_n=\{w\in\mathbb C:w^n=1\}$ como subconjunto de $S^1$. En efecto, si $w\in G_n$, entonces $|w|^n=|w^n|=1$, de donde $|w|=1$ y, por lo tanto, $w\in S^1$.
>>	1. Como $1^n=1$, tenemos que $1\in G_n$ y, en particular, $G_n\neq\varnothing$.
>>	2. Sean $a,b\in G_n$. Entonces $a^n=b^n=1$ y $$(ab^{-1})^n=a^n(b^{-1})^n=a^n(b^n)^{-1}=1.$$ Por lo tanto, $ab^{-1}\in G_n$.
>>	3. Por el criterio de subgrupo, $G_n\leq S^1$. En consecuencia, $(G_n,\cdot)$ es un grupo; su identidad es $1$ y el inverso de cada $a\in G_n$ es $$a^{-1}=\overline a=a^{n-1}.$$ Además, $G_n$ es **abeliano** por ser subgrupo del grupo abeliano $S^1$.
>>- **(e)** Consideramos $G_\infty=\bigcup_{n\in\mathbb N}G_n$ como subconjunto de $S^1$, pues cada $G_n$ es un subgrupo de $S^1$.
>>	1. Como $1\in G_1\subseteq G_\infty$, tenemos que $G_\infty\neq\varnothing$.
>>	2. Sean $a,b\in G_\infty$. Entonces existen $m,n\in\mathbb N$ tales que $a^m=1$ y $b^n=1$. Tomando el exponente común $mn$, obtenemos $$(ab^{-1})^{mn}=a^{mn}b^{-mn}=(a^m)^n\big((b^n)^m\big)^{-1}=1.$$ Por lo tanto, $ab^{-1}\in G_{mn}\subseteq G_\infty$.
>>	3. Por el criterio de subgrupo, $G_\infty\leq S^1$. En consecuencia, $(G_\infty,\cdot)$ es un grupo; su identidad es $1$ y, si $a^m=1$, su inverso es $$a^{-1}=\overline a=a^{m-1}.$$ Además, $G_\infty$ es **abeliano** por ser subgrupo del grupo abeliano $S^1$.

>[!exercise] Ejercicio 3
>- **(a)** Sea $G$ un semigrupo. Probar que $G$ es un grupo si y sólo si las ecuaciones $ya=b$ y $ax=b$ tienen solución en $G$ para todos $a,b\in G$.
>- **(b)** Sea $G$ un semigrupo finito. Si vale la ley cancelativa a ambos lados, es decir, $ac=bc\Rightarrow a=b$ y $ca=cb\Rightarrow a=b$, probar que $G$ es un grupo. ¿Qué ocurre si $G$ es infinito?
>
>>[!Proof]-
>>- (a) 
>>	- **($\Rightarrow$)** Supongamos que $G$ es un grupo y sean $a,b\in G$.
>>		1. Como $a$ tiene inverso, la ecuación $ya=b$ tiene la solución $$y=ba^{-1},$$ pues $$(ba^{-1})a=b(a^{-1}a)=be=b.$$
>>		2. Análogamente, la ecuación $ax=b$ tiene la solución $$x=a^{-1}b,$$ pues $$a(a^{-1}b)=(aa^{-1})b=eb=b.$$ Es importante conservar el orden de los factores, ya que $G$ no tiene por qué ser abeliano.
>>	- **($\Leftarrow$)** Supongamos ahora que, para todos $a,b\in G$, las ecuaciones $ya=b$ y $ax=b$ tienen solución en $G$.
>>		1. **Existencia de una identidad izquierda.** Fijemos $a_0\in G$. Como la ecuación $ya_0=a_0$ tiene solución, existe $e\in G$ tal que $$ea_0=a_0.$$ Veamos que $e$ es una identidad izquierda para todo $G$. Dado $b\in G$, existe $x\in G$ tal que $a_0x=b$. Por asociatividad, $$eb=e(a_0x)=(ea_0)x=a_0x=b.$$ Por lo tanto, $e$ es una identidad izquierda global.
>>		2. **Existencia de inversos izquierdos.** Sea $a\in G$. Como la ecuación $ya=e$ tiene solución, existe un elemento, que denotamos por $a^{-1}$, tal que $$a^{-1}a=e.$$ Así, cada elemento de $G$ posee un inverso izquierdo.
>>		3. **El inverso izquierdo también es derecho.** Como $a^{-1}\in G$, este elemento también tiene un inverso izquierdo: existe $c\in G$ tal que $$ca^{-1}=e.$$ Entonces $$c=c(a^{-1}a)=(ca^{-1})a=ea=a.$$ Por consiguiente, $c=a$ y, sustituyendo en $ca^{-1}=e$, obtenemos $$aa^{-1}=e.$$
>>		4. **La identidad izquierda también es derecha.** Para todo $a\in G$, usando las igualdades anteriores, $$ae=a(a^{-1}a)=(aa^{-1})a=ea=a.$$ Por lo tanto, $e$ es una identidad bilateral y cada $a\in G$ tiene un inverso bilateral. Como la operación ya es asociativa por ser $G$ un semigrupo, concluimos que $G$ es un grupo.
>>- (b)
>>	1. Fijemos $a\in G$ y consideremos las funciones $$R_a:G\longrightarrow G,\qquad R_a(y)=ya,$$ y $$L_a:G\longrightarrow G,\qquad L_a(x)=ax.$$
>>	2. **Inyectividad.** Si $R_a(y_1)=R_a(y_2)$, entonces $y_1a=y_2a$ y, por la cancelación a derecha, $y_1=y_2$. Por lo tanto, $R_a$ es inyectiva. Análogamente, si $L_a(x_1)=L_a(x_2)$, entonces $ax_1=ax_2$ y, por la cancelación a izquierda, $x_1=x_2$; luego, $L_a$ también es inyectiva.
>>	3. **Sobreyectividad.** Como $G$ es finito, toda función inyectiva de $G$ en sí mismo es sobreyectiva. Por consiguiente, $R_a$ y $L_a$ son sobreyectivas.
>>	4. Sea $b\in G$. Por la sobreyectividad de $R_a$, existe $y\in G$ tal que $$R_a(y)=ya=b.$$ Por la sobreyectividad de $L_a$, existe $x\in G$ tal que $$L_a(x)=ax=b.$$ Así, las ecuaciones $ya=b$ y $ax=b$ tienen solución para todos $a,b\in G$. Por la parte **(a)**, concluimos que $G$ es un grupo.
>>	5. **Caso infinito.** El resultado es falso si $G$ es infinito. En efecto, $(\mathbb N_0,+)$ es un semigrupo infinito y cancelativo a ambos lados, ya que $$a+c=b+c\Rightarrow a=b$$ y $$c+a=c+b\Rightarrow a=b.$$ Sin embargo, no es un grupo: aunque $0$ es su elemento neutro, el elemento $1$ no posee inverso aditivo en $\mathbb N_0$.

>[!exercise] Ejercicio 4
>Sea $p\geq 2$ un entero. Probar que $(\mathbb Z_p\setminus\{\overline 0\},\cdot)$ es un grupo si y solo si $p$ es primo.
>>[!Proof]-
>>- **($\Leftarrow$)** Supongamos que $p$ es primo. Verificamos los axiomas de grupo en $\mathbb Z_p\setminus\{\overline 0\}$.
>>	1. **Clausura.** Sean $\overline a,\overline b\in\mathbb Z_p\setminus\{\overline 0\}$. Entonces $p\nmid a$ y $p\nmid b$. Por el lema de Euclides, si $p\mid ab$, entonces $p\mid a$ o $p\mid b$, lo cual es imposible. Por tanto, $p\nmid ab$ y $\overline a\,\overline b=\overline{ab}\neq\overline 0$.
>>	2. **Asociatividad.** Se hereda de la multiplicación de enteros módulo $p$.
>>	3. **Elemento neutro.** El neutro multiplicativo es $\overline 1$, que pertenece a $\mathbb Z_p\setminus\{\overline 0\}$.
>>	4. **Inversos.** Sea $\overline a\in\mathbb Z_p\setminus\{\overline 0\}$. Como $p$ es primo y $p\nmid a$, se tiene $(a,p)=1$. Por el lema de Bézout existen $u,v\in\mathbb Z$ tales que $$au+pv=1.$$ Al reducir módulo $p$ obtenemos $\overline a\,\overline u=\overline 1$, de modo que $\overline u$ es el inverso multiplicativo de $\overline a$.
>>	5. En consecuencia, $(\mathbb Z_p\setminus\{\overline 0\},\cdot)$ es un grupo.
>>- **($\Rightarrow$)** 
>>	1. Supongamos $p$ fuera compuesto, entonces existen enteros $a,b$ tales que $$p=ab$$ entonces $1<a,b<p$ (aca estamos mirando los numeros como enteros no como clase) 
>>	2. Por tanto, $\overline a$ y $\overline b$ son elementos de $\mathbb Z_p\setminus\{\overline 0\}$ por que no son divisible por $p$ por ser menores que $p$ entonces no son $\overline{0}$ 
>>	3. Pero $$\overline a\,\overline b=\overline{ab}=\overline p=\overline 0,$$ que no pertenece al conjunto. Esto contradice la clausura de la operación. Por consiguiente, $p$ es primo.

>[!exercise] Ejercicio 5
>Dar las tablas de multiplicar de $\mathbb Z_4$ y de $\mathbb Z_2\times\mathbb Z_2$. ¿Son la misma tabla?
>>[!Proof]-
>>1. Aunque el enunciado dice «tablas de multiplicar», se refiere a las tablas de la operación de cada grupo. En ambos casos usamos notación aditiva: en $\mathbb Z_4$ sumamos módulo $4$, mientras que en $\mathbb Z_2\times\mathbb Z_2$ sumamos componente a componente módulo $2$.
>>2. La tabla de $\mathbb Z_4$ es $$\begin{array}{c|cccc}+_4&0&1&2&3\\\hline 0&0&1&2&3\\1&1&2&3&0\\2&2&3&0&1\\3&3&0&1&2\end{array}$$
>>3. En $\mathbb Z_2\times\mathbb Z_2$ la operación está dada por $$(a,b)+(c,d)=(a+c,b+d)\pmod 2,$$ y su tabla es $$\begin{array}{c|cccc}+&(0,0)&(1,0)&(0,1)&(1,1)\\\hline (0,0)&(0,0)&(1,0)&(0,1)&(1,1)\\(1,0)&(1,0)&(0,0)&(1,1)&(0,1)\\(0,1)&(0,1)&(1,1)&(0,0)&(1,0)\\(1,1)&(1,1)&(0,1)&(1,0)&(0,0)\end{array}$$
>>4. Las tablas no son la misma, ni pueden hacerse iguales renombrando sus elementos. En $\mathbb Z_4$, el elemento $1$ tiene orden $4$, pues $$1\neq0,\qquad 1+1=2\neq0,\qquad 1+1+1=3\neq0,\qquad 1+1+1+1=0.$$ En cambio, todos los elementos no neutros de $\mathbb Z_2\times\mathbb Z_2$ tienen orden $2$: $$(1,0)+(1,0)=(0,0),\qquad(0,1)+(0,1)=(0,0),\qquad(1,1)+(1,1)=(0,0).$$
>>5. El orden de un elemento es el menor entero positivo $n$ tal que, al operar el elemento consigo mismo $n$ veces, se obtiene el neutro; no es la posición que el elemento ocupa en la tabla. Como un isomorfismo conserva los órdenes de los elementos, concluimos que $$\mathbb Z_4\not\cong\mathbb Z_2\times\mathbb Z_2.$$

>[!exercise] Ejercicio 6
>Sea $D_4$ el conjunto de las transformaciones rígidas del plano que dejan fijo el cuadrado de $\mathbb R^2$ centrado en el origen. Dar la tabla de multiplicar de $D_4$. ¿Es $D_4$ un grupo abeliano?
>>[!Proof]-
>>1. **Elementos de $D_4$.** Las transformaciones que conservan el cuadrado son cuatro rotaciones —incluida la rotación de $0$ grados— y cuatro simetrías axiales. Entre los ejes de simetría hay dos que unen los puntos medios de lados opuestos y dos que coinciden con las diagonales. Por lo tanto, $D_4$ tiene $8$ elementos.
>>2. **Notación.** Denotamos por $e$ la transformación identidad, por $r$ la rotación antihoraria de ángulo $\pi/2$ y por $s$ la reflexión respecto del eje horizontal. Usamos la convención de que en el producto $ab$ se aplica primero $b$ y después $a$. Con esta notación, $$D_4=\{e,r,r^2,r^3,s,rs,r^2s,r^3s\}.$$ Aunque $D_4$ contiene cuatro simetrías distintas, basta elegir una sola, $s$, como generador junto con $r$: las otras son $rs$, $r^2s$ y $r^3s$.
>>3. **Relaciones básicas.** Aplicar cuatro veces la rotación de $\pi/2$ devuelve el cuadrado a su posición inicial, y reflejar dos veces respecto del mismo eje devuelve cada punto a su posición inicial. Además, el orden entre una rotación y una reflexión importa. Las relaciones obtenidas son $$r^4=e,\qquad s^2=e,\qquad sr=r^{-1}s=r^3s.$$ La última igualdad también puede escribirse como $$rsr=s.$$
>>4. **Potencias negativas.** La expresión $r^{-j}$ denota la inversa de $r^j$. Como $r^4=e$, los exponentes se reducen módulo $4$. Por ejemplo, $$r^{-2}=r^2,$$ porque $r^2r^2=r^4=e$, mientras que $$r^{-3}=r,$$ porque $r^3r=r^4=e$.
>>5. **Mover $s$ hacia la derecha.** Aplicando repetidamente la relación $sr=r^{-1}s$, obtenemos $$sr^j=r^{-j}s.$$ En particular, $$sr^2=r^{-2}s=r^2s,\qquad sr^3=r^{-3}s=rs.$$
>>6. **Por qué hacen falta estas relaciones.** En las filas correspondientes a $e,r,r^2,r^3$ basta sumar exponentes, pero en las filas correspondientes a $s,rs,r^2s,r^3s$ aparece una $s$ entre potencias de $r$. Como $sr\neq rs$, no se puede intercambiar el orden de esos factores; primero hay que usar $sr^j=r^{-j}s$.
>>7. **Cuatro reglas para completar la tabla.** Todo elemento tiene la forma $r^i$ o $r^is$. Para $i,j\in\{0,1,2,3\}$, reduciendo los exponentes módulo $4$, se cumple $$\begin{aligned}r^ir^j&=r^{i+j},\\r^i(r^js)&=r^{i+j}s,\\(r^is)r^j&=r^{i-j}s,\\(r^is)(r^js)&=r^{i-j}.\end{aligned}$$ En la última igualdad se usaron $sr^j=r^{-j}s$ y $s^2=e$.
>>8. **Tabla de multiplicar.** Ordenamos las filas y columnas como $e,r,r^2,r^3,s,rs,r^2s,r^3s$. Las filas indican el factor izquierdo y las columnas el factor derecho. Aplicando las cuatro reglas anteriores obtenemos $$\begin{array}{c|cccccccc}\cdot&e&r&r^2&r^3&s&rs&r^2s&r^3s\\\hline e&e&r&r^2&r^3&s&rs&r^2s&r^3s\\r&r&r^2&r^3&e&rs&r^2s&r^3s&s\\r^2&r^2&r^3&e&r&r^2s&r^3s&s&rs\\r^3&r^3&e&r&r^2&r^3s&s&rs&r^2s\\s&s&r^3s&r^2s&rs&e&r^3&r^2&r\\rs&rs&s&r^3s&r^2s&r&e&r^3&r^2\\r^2s&r^2s&rs&s&r^3s&r^2&r&e&r^3\\r^3s&r^3s&r^2s&rs&s&r^3&r^2&r&e\end{array}$$
>>9. **Conmutatividad.** La tabla no es simétrica respecto de la diagonal principal. Por ejemplo, $$sr=r^3s,\qquad rs=rs,$$ y $r^3s\neq rs$. Por lo tanto, $sr\neq rs$ y $D_4$ **no es abeliano**.

>[!exercise] Ejercicio 7
>Escribir la tabla de multiplicar y dar el orden de $\operatorname{GL}(2,\mathbb Z_2)$. Hacer lo mismo para $\operatorname{SL}(2,\mathbb Z_2)$. ¿Qué puede decir sobre estos dos grupos?
>>[!Proof]-
>>- **Orden de $\operatorname{GL}(2,\mathbb Z_2)$.** 
>>	1. Una matriz de $2\times2$ sobre $\mathbb Z_2$ es invertible si y solo si sus columnas son linealmente independientes. 
>>	2. La primera columna puede ser cualquiera de los tres vectores no nulos de $\mathbb Z_2^2$. Una vez elegida, la segunda columna no puede ser el vector nulo ni la primera columna, por lo que quedan dos posibilidades. 
>>	3. En consecuencia, $$\left|\operatorname{GL}(2,\mathbb Z_2)\right|=(2^2-1)(2^2-2)=3\cdot2=6.$$
>>- **Elementos.** Denotamos los seis elementos por $$\begin{aligned}I&=\begin{pmatrix}1&0\\0&1\end{pmatrix},&A&=\begin{pmatrix}0&1\\1&0\end{pmatrix},&B&=\begin{pmatrix}1&1\\0&1\end{pmatrix},\\C&=\begin{pmatrix}1&0\\1&1\end{pmatrix},&D&=\begin{pmatrix}0&1\\1&1\end{pmatrix},&E&=\begin{pmatrix}1&1\\1&0\end{pmatrix}.\end{aligned}$$ Estas son todas las matrices invertibles porque ya hemos encontrado las seis que predice el cálculo anterior.
>>- **Tabla de multiplicar.** Las entradas se obtienen mediante el producto usual de matrices, reduciendo cada componente módulo $2$. Las filas indican el factor izquierdo y las columnas el factor derecho: $$\begin{array}{c|cccccc}\cdot&I&A&B&C&D&E\\\hline I&I&A&B&C&D&E\\A&A&I&D&E&B&C\\B&B&E&I&D&C&A\\C&C&D&E&I&A&B\\D&D&C&A&B&E&I\\E&E&B&C&A&I&D\end{array}$$ Por ejemplo, $$AB=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\begin{pmatrix}0&1\\1&1\end{pmatrix}=D,$$ mientras que $$BA=\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}=\begin{pmatrix}1&1\\1&0\end{pmatrix}=E.$$ En particular, el grupo no es abeliano.
>>- **Comparación con $\operatorname{SL}(2,\mathbb Z_2)$.** 
>>	1. Por definición, $$\operatorname{SL}(2,\mathbb Z_2)=\{M\in M_2(\mathbb Z_2):\det(M)=1\}.$$
>>	2. Si $M\in\operatorname{GL}(2,\mathbb Z_2)$, entonces $\det(M)\neq0$. Pero el único elemento no nulo de $\mathbb Z_2$ es $1$, de modo que necesariamente $\det(M)=1$. Por lo tanto, $$\operatorname{GL}(2,\mathbb Z_2)\subseteq\operatorname{SL}(2,\mathbb Z_2).$$
>>	3. La inclusión contraria es inmediata, pues toda matriz de determinante $1$ es invertible. Así, $$\boxed{\operatorname{GL}(2,\mathbb Z_2)=\operatorname{SL}(2,\mathbb Z_2)}.$$
>>	4. En particular, $\operatorname{SL}(2,\mathbb Z_2)$ tiene los mismos seis elementos, la misma tabla de multiplicar y orden $6$.
>>- **Identificación del grupo.** 
>>	1. Los tres vectores no nulos de $\mathbb Z_2^2$ son $$v_1=(1,0),\qquad v_2=(0,1),\qquad v_3=(1,1).$$ como las matrices son invertibles, no puede mandar al $0$ a ninguno, entonces los permuta entre si (o los deja quietos). 
>>	2. lo que define un homomorfismo $$\varphi:\operatorname{GL}(2,\mathbb Z_2)\longrightarrow S_3.$$ Por ejemplo $Bv_{1}=v_{1},\, Bv_{2}=v_{3},\, Bv_{3}=v_{2}$ entoncse $\varphi(B)=(2\,3)$ 
>>	3. $\varphi$ es **inyectiva**: Por que si $\varphi(M)=e=(1)(2)(3)$ quiere decir que $M$ fija $v_1$ y $v_2$ (y $v_{3}$), osea $M$ es la identidad. Así, $\varphi$ es inyectiva. 
>>	4. Como ambos grupos tienen orden $6$, también es **sobreyectiva** y, por lo tanto, $$\boxed{\operatorname{GL}(2,\mathbb Z_2)=\operatorname{SL}(2,\mathbb Z_2)\cong S_3}.$$ Con la notación anterior, $A,B,C$ corresponden a las transposiciones $(12),(23),(13)$ y $D,E$ a los ciclos $(123),(132)$, respectivamente.

>[!exercise] Ejercicio 8
>Sean $n,p\in\mathbb Z$, con $n\geq1$ y $p$ primo. Calcular el orden de los grupos $\operatorname{GL}(n,\mathbb Z_p)$ y $\operatorname{SL}(n,\mathbb Z_p)$.
>>[!Proof]-
>>1. Como $p$ es primo, $\mathbb Z_p$ es un cuerpo. Una matriz de $M_n(\mathbb Z_p)$ pertenece a $\operatorname{GL}(n,\mathbb Z_p)$ (osea es inversible) si y solo si sus $n$ columnas son linealmente independientes en $\mathbb Z_p^n$.
>>2. Elegimos las columnas sucesivamente. La primera puede ser cualquier vector no nulo de $\mathbb Z_p^n$, por lo que hay $p^n-1$ opciones. Si ya elegimos $k$ columnas linealmente independientes, estas generan un subespacio de dimensión $k$ y, por tanto, con $p^k$ elementos. Osea por cada elementos (que hay $k$) tenemos $p$ posibles coeficientes para multiplicar  
>>3. La columna siguiente puede ser cualquiera de los $p^n$ vectores que no pertenezca a ese subespacio, de modo que hay $p^n-p^k$ opciones.
>>4. Multiplicando las cantidades de opciones para las $n$ columnas, obtenemos $$\boxed{\left|\operatorname{GL}(n,\mathbb Z_p)\right|=\prod_{i=0}^{n-1}(p^n-p^i)=(p^n-1)(p^n-p)\cdots(p^n-p^{n-1}).}$$
>>5. El determinante de una matriz invertible puede tomar cualquiera de los $p-1$ valores de $\mathbb Z_p^\times$: dado $a\in\mathbb Z_p^\times$, la matriz diagonal $\operatorname{diag}(a,1,\ldots,1)$ es invertible y tiene determinante $a$.
>>6. Sean $A,B\in\operatorname{GL}(n,\mathbb Z_p)$. Por la definición de clases laterales, $A$ y $B$ pertenecen a la misma clase lateral de $\operatorname{SL}(n,\mathbb Z_p)$ si y solo si $A^{-1}B\in\operatorname{SL}(n,\mathbb Z_p)$. Además, $$\begin{aligned}A^{-1}B\in\operatorname{SL}(n,\mathbb Z_p)&\iff\det(A^{-1}B)=1\\&\iff(\det A)^{-1}\det B=1\\&\iff\det A=\det B.\end{aligned}$$ Por tanto, hay una clase lateral por cada posible valor no nulo del determinante. Como hay $p-1$ valores posibles, $$[\operatorname{GL}(n,\mathbb Z_p):\operatorname{SL}(n,\mathbb Z_p)]=p-1.$$
>>7. Aplicando el [[Teorico 3#^teorema-de-lagrange|teorema de Lagrange]], concluimos que $$\boxed{\left|\operatorname{SL}(n,\mathbb Z_p)\right|=\frac{1}{p-1}\prod_{i=0}^{n-1}(p^n-p^i).}$$

>[!exercise] Ejercicio 9
>Determinar si en un grupo las siguientes afirmaciones son verdaderas o falsas.
>- **(a)** $a=a^{-1}\iff a^2=e$.
>- **(b)** $a^m=a^n\Rightarrow n=m$.
>- **(c)** $(ab)^{-1}=a^{-1}b^{-1}\Rightarrow ab=ba$.
>
>>[!Proof]-
>>- (a) La afirmación es **verdadera**.
>>	- **($\Rightarrow$)** Si $a=a^{-1}$, multiplicando ambos miembros por la derecha por $a$ obtenemos $$aa=a^{-1}a=e,$$ es decir, $a^2=e$.
>>	- **($\Leftarrow$)** Si $a^2=e$, multiplicando ambos miembros por la izquierda por $a^{-1}$ obtenemos $$a^{-1}a^2=a^{-1}e,$$ y, por lo tanto, $a=a^{-1}$.
>>- (b) La afirmación es **falsa** en general.
>>	1. De $a^m=a^n$, multiplicando ambos miembros por $a^{-n}$, solo podemos concluir que $$a^{m-n}=e.$$
>>	2. Esto no implica necesariamente que $m-n=0$. Por ejemplo, tomando $a=e$, se cumple $$a^1=e=a^2,$$ aunque $1\neq2$.
>>	3. Si $a$ tiene orden infinito, entonces sí se puede concluir que $m=n$. Si $a$ tiene orden finito $r$, únicamente se concluye que $$r\mid(m-n),$$ es decir, $m\equiv n\pmod r$.
>>- (c) La afirmación es **verdadera**.
>>	1. Supongamos que $$(ab)^{-1}=a^{-1}b^{-1}.$$ Multiplicando ambos miembros por la derecha por $ba$, obtenemos $$\begin{aligned}(ab)^{-1}ba&=a^{-1}b^{-1}ba\\&=a^{-1}ea\\&=e.\end{aligned}$$ Por lo tanto, $ba$ es un inverso por la derecha de $(ab)^{-1}$.
>>	2. Por otro lado, $ab$ también es un inverso por la derecha de $(ab)^{-1}$, pues $$(ab)^{-1}(ab)=e.$$
>>	3. Por la unicidad del inverso en un grupo, concluimos que $$ba=ab.$$ Por lo tanto, $ab=ba$.

>[!exercise] Ejercicio 10
>Probar que si $G$ es un grupo donde se satisface la ecuación $a^2=e$ para todo $a\in G$, entonces $G$ es abeliano.
>>[!Proof]-
>>1. Sean $a,b\in G$. Como $b^2=e$ y $a^2=e$, podemos realizar la siguiente cadena de equivalencias: $$\begin{aligned}ab=ba&\iff a=bab&&\text{(multiplicando a izquierda por $b$)}\\&\iff e=baba&&\text{(multiplicando a derecha por $a$)}\\&\iff e=(ba)^2.\end{aligned}$$
>>2. Por clausura, $ba\in G$ y, por la hipótesis aplicada al elemento $ba$, se cumple $(ba)^2=e$. En consecuencia, $ab=ba$. Como esto vale para todos $a,b\in G$, concluimos que $G$ es **abeliano**.

>[!exercise] Ejercicio 11
>Sea $G$ un grupo finito de orden par. Mostrar que existe $a\in G$, $a\neq e$, tal que $a^2=e$.
>>[!Proof]-
>>1. Supongamos, por contradicción, que no existe ningún $a\in G$, $a\neq e$, tal que $a^2=e$.
>>2. Entonces, para todo $a\in G\setminus\{e\}$, se tiene $a\neq a^{-1}$, pues si $a=a^{-1}$, al multiplicar por $a$ obtendríamos $$a^2=e,$$ contradiciendo la suposición.
>>3. Por lo tanto, los elementos de $G\setminus\{e\}$ pueden agruparse en pares disjuntos de la forma $$\{a,a^{-1}\}.$$
>>4. En consecuencia, $|G\setminus\{e\}|$ es par. Como el elemento neutro $e$ queda fuera de esos pares, $$|G|=1+|G\setminus\{e\}|$$ es impar, lo que contradice la hipótesis de que $G$ tiene orden par.
>>5. Por consiguiente, existe $a\in G$, $a\neq e$, tal que $$a^2=e.$$
 
>[!exercise] Ejercicio 12
>Sea $G$ un grupo. Probar que las siguientes afirmaciones son equivalentes.
>- **(a)** $G$ es abeliano.
>- **(b)** $(ab)^2=a^2b^2$, para todos $a,b\in G$.
>- **(c)** $(ab)^{-1}=a^{-1}b^{-1}$, para todos $a,b\in G$.
>- **(d)** $(ab)^n=a^nb^n$, para todo $n\in\mathbb Z$ y todos $a,b\in G$.
>- **(e)** $(ab)^n=a^nb^n$, para   todos $a,b\in G$ y para tres enteros consecutivos.
>
>>[!Proof]-
>>- **$(a)\Rightarrow(b)$.** Supongamos que $G$ es abeliano y sean $a,b\in G$. Como $ba=ab$, podemos intercambiar los do  factores centrales y obtenemos $$(ab)^2=abab=aabb=a^2b^2.$$
>>- **$(b)\Rightarrow(a)$.** Supongamos que $(ab)^2=a^2b^2$ para todos $a,b\in G$. Entonces $$abab=aabb.$$ Cancelando $a$ a la izquierda resulta $bab=abb$ y, cancelando luego $b$ a la derecha, obtenemos $$ba=ab.$$ Como esto vale para todos $a,b\in G$, el grupo $G$ es abeliano. Por lo tanto, $(a)\iff(b)$.
>>- **$(a)\iff(c)$.** Para todos $a,b\in G$, cada paso de la siguiente cadena es reversible: $$\begin{aligned}(ab)^{-1}=a^{-1}b^{-1}&\iff (ab)a^{-1}b^{-1}=e\\&\iff aba^{-1}=b\\&\iff ab=ba.\end{aligned}$$ En consecuencia, la igualdad de (c) vale para todos $a,b\in G$ si y solo si $ab=ba$ para todos $a,b\in G$, es de$cir, si y solo si $G$ es abeliano.
>>- **$(a)\Rightarrow(d)$.** Supongamos que $G$ es abeliano  . Primero probamos por inducción que $(ab)^n=a^nb^n$ para todo $n\geq0$. Para $n=0$ se cumple $$(ab)^0=e=a^0b^0.$$ Supongamos ahora que $(ab)^n=a^nb^n$. Entonces $$\begin{aligned}(ab)^{n+1}&=(ab)^n(ab)\\&=a^nb^nab&&\text{(hipótesis inductiva)}\\&=a^nab^nb&&\text{(porque $G$ es abeliano)}\\&=a^{n+1}b^{n+1}.\end{aligned}$$ Esto prueba la igualdad para todos los enteros no negativos.
>>- Para los exponentes negativos, sea $n=-m$, con $m>0$. Como $G$ es abeliano, $(ab)^{-1}=a^{-1}b^{-1}$; aplicando el caso positivo a $a^{-1}$ y $b^{-1}$, obtenemos $$\begin{aligned}(ab)^n&=(ab)^{-m}\\&=\big((ab)^{-1}\big)^m\\&=(a^{-1}b^{-1})^m\\&=(a^{-1})^m(b^{-1})^m\\&=a^{-m}b^{-m}\\&=a^nb^n.\end{aligned}$$ Por lo tanto, la igualdad vale para todo $n\in\mathbb Z$ y queda probado $(a)\Rightarrow(d)$.
>>- **$(d)\Rightarrow(e)$.** Si $(ab)^n=a^nb^n$ para todo $n\in\mathbb Z$, entonces la igualdad vale, en particular, para tres enteros consecutivos. Por lo tanto, $(d)\Rightarrow(e)$.
>>- **$(e)\Rightarrow(a)$.** 
>>	1. Supongamos que la igualdad vale para tres enteros consecutivos $k,k+1,k+2$ y para todos $a,b\in G$. Comparando los exponentes $k$ y $k+1$, tenemos $$\begin{aligned}(a^kb^k)(ab)&=(ab)^k(ab)\\&=(ab)^{k+1}\\&=a^{k+1}b^{k+1}\\&=a^kab^kb.\end{aligned}$$
>>	2. Cancelando $a^k$ a la izquierda y $b$ a la derecha, obtenemos $$b^ka=ab^k.\tag{1}$$
>>	3. Repitiendo el mismo razonamiento con los exponentes $k+1$ y $k+2$, resulta $$b^{k+1}a=ab^{k+1}.\tag{2}$$
>>	4. Usando (1) y (2), obtenemos $$b^kba=b^{k+1}a=ab^{k+1}=ab^kb=b^kab.$$ Al cancelar $b^k$ a la izquierda, concluimos que $$ba=ab.$$
>>	5. Como esto vale para todos $a,b\in G$, el grupo $G$ es abeliano y, por lo tanto, $(e)\Rightarrow(a)$.

>[!exercise] Ejercicio 13
>Sea $p$ un número primo. Definimos $$R_p:=\left\{\frac ab\in\mathbb Q:(b,p)=1\right\},\qquad R^p:=\left\{\frac ab\in\mathbb Q:b=p^i,\text{ con }i\geq0\right\}.$$ Mostrar que $R_p$ y $R^p$ son grupos abelianos con la suma de $\mathbb Q$.
>>[!Proof]-
>>- **El conjunto $R_p$.** Sean $\frac ab,\frac cd\in R_p$. Como $(b,p)=(d,p)=1$, tenemos $p\nmid b$ y $p\nmid d$, por lo que $p\nmid bd$ y, en consecuencia, $(bd,p)=1$. Entonces $$\frac ab+\frac cd=\frac{ad+bc}{bd}\in R_p,$$ de modo que la operación es cerrada. El neutro es $0=\frac01\in R_p$, pues $(1,p)=1$, y el inverso aditivo de $\frac ab$ es $-\frac ab=\frac{-a}{b}\in R_p$. La asociatividad y la conmutatividad se heredan de la suma de $\mathbb Q$. Por lo tanto, $(R_p,+)$ es un grupo abeliano.
>>- **El conjunto $R^p$.** Sean $\frac{a}{p^i},\frac{c}{p^j}\in R^p$, con $i,j\geq0$. Entonces $$\frac{a}{p^i}+\frac{c}{p^j}=\frac{ap^j+cp^i}{p^{i+j}}\in R^p,$$ pues $i+j\geq0$, de modo que la operación es cerrada. El neutro es $0=\frac0{p^0}\in R^p$, y el inverso aditivo de $\frac{a}{p^i}$ es $\frac{-a}{p^i}\in R^p$. Nuevamente, la asociatividad y la conmutatividad se heredan de la suma de $\mathbb Q$. Por lo tanto, $(R^p,+)$ es un grupo abeliano.

>[!exercise] Ejercicio 14
>Sea $G$ un grupo, y sean $a,b\in G$ y $r\in\mathbb N$. Probar que si $bab^{-1}=a^r$, entonces $$b^jab^{-j}=a^{r^j}$$ para todo $j\in\mathbb N$.
>>[!Proof]-
>>Procedemos por inducción sobre $j$.
>>1. **Caso base.** Para $j=0$, se cumple $$b^0ab^{-0}=a=a^{r^0}.$$ Si se adopta la convención $\mathbb N=\{1,2,\ldots\}$, el caso $j=1$ es exactamente la hipótesis $bab^{-1}=a^r$.
>>2. **Paso inductivo.** Supongamos que para cierto $j\geq0$ se cumple $$b^jab^{-j}=a^{r^j}.$$ Entonces $$\begin{aligned}b^{j+1}ab^{-(j+1)}&=b\left(b^jab^{-j}\right)b^{-1}\\&=ba^{r^j}b^{-1}\\&=(bab^{-1})^{r^j}\\&=(a^r)^{r^j}\\&=a^{r^{j+1}}.\end{aligned}$$
>>3. En la tercera igualdad usamos que la conjugación preserva potencias: para todo $n\in\mathbb N$, $$ba^nb^{-1}=(bab^{-1})^n.$$
>>4. Por el principio de inducción, $$b^jab^{-j}=a^{r^j}$$ para todo $j\in\mathbb N$.
