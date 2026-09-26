## Ceros de funciones analíticas (continuación)

### Comportamiento de los ceros de funciones analíticas

>[!Example] Ceros que se acumulan en la frontera
>Consideremos $f(z)=\cos\left(\frac{1+z}{1-z}\right)$, definida en $|z|<1$. Como $\cos z=0$ si y solo si $z=\frac{k\pi}{2}$, con $k\in\mathbb{Z}$ impar, se tiene $$f(z)=0\iff\frac{1+z}{1-z}=\frac{k\pi}{2}.$$ Por lo tanto, los ceros son $$z_k=\frac{k\pi-2}{k\pi+2},\qquad k\in\mathbb{Z}\text{ impar},$$ y $z_k\xrightarrow[|k|\to\infty]{}1$. Así, los ceros se acumulan en $1$, que pertenece a la frontera del disco $|z|<1$.

>[!Definition] Punto de acumulación
>Sea $A\subseteq X$, donde $X$ es un espacio topológico. Decimos que $a\in X$ es un **punto de acumulación** de $A$ si existe una sucesión $(a_n)_{n\in\mathbb{N}}$ de puntos de $A$, dos a dos distintos, tal que $a_n\to a$.

>[!Theorem] Teorema de identidad
>Sea $G$ una región y sea $f:G\to\mathbb{C}$ analítica. Son equivalentes:
>- **(1)** $f\equiv0$.
>- **(2)** Existe $a\in G$ tal que $f^{(n)}(a)=0$ para todo $n\geq0$.
>- **(3)** El conjunto $\{z\in G:f(z)=0\}$ tiene un punto de acumulación en $G$.
>>[!Proof]-
>>1. $(1)\Rightarrow(2)$ es inmediato.
>>2. $(1)\Rightarrow(3)$ también es inmediato.
>>3. $(3)\Rightarrow(2)$. Sea $a$ un punto de acumulación de $A:=\{z\in G:f(z)=0\}$. Como $f$ es continua y existe una sucesión de puntos de $A$ que converge a $a$, se tiene $f(a)=0$. Si no se cumple (2), existe $n\geq1$ mínimo tal que $$f(a)=f'(a)=\dots=f^{(n-1)}(a)=0\qquad\text{y}\qquad f^{(n)}(a)\neq0.$$ Como $f$ es analítica en $a$, existe $R>0$ tal que $$f(z)=\sum_{k=0}^{\infty}a_k(z-a)^k\qquad\text{en }B(a,R),$$ donde $a_k=\frac{f^{(k)}(a)}{k!}$. Por la elección de $n$, $$f(z)=(z-a)^n\sum_{k=0}^{\infty}a_{k+n}(z-a)^k=(z-a)^n g(z).$$ Para $z\neq a$, dentro de $B(a,R)$ la serie que define $g$ converge porque si no convergiera entonces $f$ no convergeria. 
>>4. En $z=a$, el término con $k=0$ es el término constante, pues en una serie de potencias $(z-a)^0$ representa la función constante $1$, también cuando $z=a$; para $k\geq1$ se tiene $(a-a)^k=0$. Por lo tanto, $$g(a)=a_n.$$ Por lo tanto, $g$ está definida por una serie de potencias convergente en $B(a,R)$ entonces por [[FA - Teo2#^63c6c5|Serie son analiticas]] es analítica allí. 
>>5. Además, $$g(a)=a_n=\frac{f^{(n)}(a)}{n!}\neq0.$$
>>6. Por continuidad de $g$, existe $r>0$, con $r<R$, tal que $g(z)\neq0$ para todo $z\in B(a,r)$. Por otro lado, como $a$ es punto de acumulación de $A$, existe una sucesión $(z_n)$ de puntos de $A$ distintos de $a$ tal que $z_n\to a$. Para $n$ suficientemente grande, $z_n\in B(a,r)$, y entonces $$0=f(z_n)=(z_n-a)^n g(z_n)\neq0,$$ una contradicción. Por lo tanto, se cumple (2).
>>7. $(2)\Rightarrow(1)$. Consideremos $$B:=\{z\in G:f^{(n)}(z)=0\text{ para todo }n\geq0\}.$$ Como $a\in B$, se tiene $B\neq\varnothing$.
>>8. El conjunto $B$ es cerrado en $G$, pues cada $f^{(n)}$ es continua. Además, $B$ es abierto: si $b\in B$, existe $r>0$ tal que $B(b,r)\subseteq G$. En ese disco, $$f(z)=\sum_{n=0}^{\infty}\frac{f^{(n)}(b)}{n!}(z-b)^n=0,$$ pues $f^{(n)}(b)=0$ para todo $n\geq0$. Por lo tanto $B(b,r)\subseteq B$.
>>9. Como $G$ es conexo y $B$ es no vacío, abierto y cerrado en $G$, se tiene $B=G$. En particular, $f=0$ en $G$, es decir, $f\equiv0$.

^6ef1c1

>[!Corollary] Principio de identidad
>Sean $f,g:G\to\mathbb{C}$ analíticas, donde $G$ es una región. Entonces $$f=g\iff\{z\in G:f(z)=g(z)\}\text{ tiene un punto de acumulación en }G.$$
>>[!Proof]-
>>10. Definimos $$h:=f-g.$$ Como $f$ y $g$ son analíticas en $G$, $h$ también es analítica en $G$.
>>11. Observamos que $$\{z\in G:f(z)=g(z)\}=\{z\in G:h(z)=0\}.$$
>>12. Si $$f=g,$$ entonces $$\{z\in G:f(z)=g(z)\}=G.$$ Como $G$ es abierto, todo $a\in G$ es punto de acumulación de $G$: existe $r>0$ con $B(a,r)\subseteq G$ y la sucesión $$z_n=a+\frac{r}{2n}$$ es de puntos distintos de $G$ con $$z_n\to a.$$
>>13. Recíprocamente, si $$\{z\in G:f(z)=g(z)\}$$ tiene un punto de acumulación en $G$, entonces $$\{z\in G:h(z)=0\}$$ tiene un punto de acumulación en $G.$ Por el teorema de identidad, $$h\equiv 0,$$ es decir, $$f=g.$$

>[!Example] Propiedad de la exponencial
>Para todo $w,z\in\mathbb{C}$ se cumple $$e^{w+z}=e^we^z.$$
>>[!Proof]-
>>1. En efecto, sabemos que $$e^{x+y}=e^xe^y\qquad\forall x,y\in\mathbb{R}.$$
>>2. Fijado $x\in\mathbb{R}$, las funciones enteras $f(z)=e^{x+z}$ y $g(z)=e^xe^z$ coinciden para todo $z\in\mathbb{R}$; por el principio de identidad, coinciden para todo $z\in\mathbb{C}$. 
>>3. Ahora, fijado $z\in\mathbb{C}$, las funciones enteras $f(w)=e^{w+z}$ y $g(w)=e^we^z$ coinciden para todo $w\in\mathbb{R}$, pues $$e^{w+z}=e^{z+w}=e^ze^w=e^we^z.$$
>>4. Nuevamente, por el principio de identidad, coinciden para todo $w\in\mathbb{C}$. En particular, para $x,y\in\mathbb{R}$, $$e^{x+iy}=e^xe^{iy}.$$

>[!Corollary] Factorización de un cero
>Sea $f:G\to\mathbb{C}$ analítica, donde $G$ es una región, y sea $a\in G$ tal que $f(a)=0$. Si $f$ no es idénticamente nula, entonces existe un único $n\in\mathbb{N}$ y una función $g:G\to\mathbb{C}$ analítica, con $g(a)\neq0$, tales que $$f(z)=(z-a)^n g(z)\qquad\forall z\in G.$$
>>[!Proof]-
>>3. Sea $$M=\{m\in\mathbb{N}:f^{(k)}(a)=0\ \forall k,\ 0\leq k<m\}$$ 
>>4. Como $f(a)=0$, se tiene $1\in M$. Por el teorema de identidad, como $f$ no es idénticamente nula, existe $j\geq 0$ con $f^{(j)}(a)\neq 0$, luego $m>j$ implica $m\notin M$. Así, $M$ es no vacío y acotado superiormente, de modo que $n:=\max M$ existe y $n\geq 1$. 
>>5. Por definición de $M$, $$f^{(k)}(a)=0\ \forall k,\ 0\leq k<n,$$ y además $f^{(n)}(a)\neq 0$, pues si fuera $0$ entonces $n+1\in M$, contra la maximalidad de $n$.
>>6. Definimos $$g(z)=\begin{cases}\dfrac{f(z)}{(z-a)^n},&z\neq a,\\[6pt]\dfrac{f^{(n)}(a)}{n!},&z=a.\end{cases}$$ Entonces $f(z)=(z-a)^n g(z)$ para $z\neq a$ y también para $z=a$, pues $f(a)=0=(a-a)^n g(a)$ con $n\geq 1$, y $$g(a)=\frac{f^{(n)}(a)}{n!}\neq 0.$$
>>7. Para $z\neq a$, $g$ es cociente de funciones analíticas con denominador no nulo, luego es analítica en el abierto $G\setminus\{a\}$. 
>>8. Sea $B(a,R)\subseteq G$ un disco en el que vale el [[FA - Teo2#^6fedda|desarrollo de Taylor de $f$]]. Como $f^{(k)}(a)=0$ para $0\leq k<n$, $$f(z)=\sum_{k=n}^{\infty}a_k(z-a)^k=(z-a)^n\sum_{k=0}^{\infty}a_{k+n}(z-a)^k,$$ donde $a_k=\frac{f^{(k)}(a)}{k!}$. 
>>9. Para $z\neq a$, al dividir por $(z-a)^n$ se obtiene $$g(z)=\frac{f(z)}{(z-a)^n}=\sum_{k=0}^{\infty}a_{k+n}(z-a)^k.$$ que obviamente converge en $B(a,R)$ por que $f$ converge
>>10. En $z=a$, el término con $k=0$ es el término constante y los términos con $k\geq1$ se anulan, de modo que la suma vale $$a_n=\frac{f^{(n)}(a)}{n!}=g(a).$$osea, obviamente converge
>>11. Por lo tanto, $g$ es serie de potencias convergente en $B(a,R)$ luego [[FA - Teo2#^63c6c5|es analitica]] en $B(a,R)$. 
>>12. Como $G=(G\setminus\{a\})\cup B(a,R)$ es unión de abiertos donde $g$ es analítica, $g$ es analítica en todo $G$.
>>13. El $n$ es único. Si también $f(z)=(z-a)^m h(z)$ en $G$ con $m\geq 1$, $h$ analítica y $h(a)\neq 0$, y $m>n$, entonces para $z\neq a$ vale $$g(z)=\frac{f(z)}{(z-a)^n}=(z-a)^{m-n}h(z)\xrightarrow[z\to a]{}0,$$ pues $m-n\geq 1$, de modo que $g(a)=0$ por continuidad, absurdo. Si $m<n$, el mismo argumento con $g$ y $h$ intercambiadas da $h(a)=0$, absurdo.
>>14. Luego $m=n$, y dado $n$, $g$ queda unívocamente determinada por continuidad desde $G\setminus\{a\}$.

>[!Corollary] Los ceros son aislados
>Sea $f:G\to\mathbb{C}$ analítica y no idénticamente nula, donde $G$ es una región. Entonces los ceros de $f$ son aislados: si $a\in G$ y $f(a)=0$, existe $r>0$ tal que $$B(a,r)\cap\{z\in G:f(z)=0\}=\{a\}.$$
>>[!Proof]-
>>14. Por el corolario anterior, $$f(z)=(z-a)^n g(z),$$ con $n\geq1$ y $g(a)\neq0$. Por continuidad de $g$, existe $r>0$ tal que $g(z)\neq0$ para todo $z\in B(a,r)$. Si $z\in B(a,r)\setminus\{a\}$, entonces $z-a\neq0$ y, por lo tanto, $$f(z)=(z-a)^n g(z)\neq0.$$

## Teorema del módulo máximo

>[!Lemma] Una función analítica de módulo constante es constante
>Sea $U\subseteq\mathbb{C}$ un abierto conexo y sea $f:U\to\mathbb{C}$ analítica. Si existe $C\geq0$ tal que $$|f(z)|=C\qquad\forall z\in U,$$ entonces $f$ es constante en $U$.
>>[!Proof]-
>>1. Escribimos $f=u+iv$, con $u,v:U\to\mathbb{R}$. Si $C=0$, entonces $f(z)=0$ para todo $z\in U$, así que $f$ es constante.
>>2. Supongamos $C>0$. De $u^2+v^2=C^2$, derivando respecto de $x$ e $y$, obtenemos $$uu_x+vv_x=0,\qquad uu_y+vv_y=0.$$ Por las ecuaciones de Cauchy–Riemann, $u_y=-v_x$ y $v_y=u_x$, así que la segunda igualdad queda $$-uv_x+vu_x=0.$$ El sistema para $u_x,v_x$ es $$\begin{pmatrix}u&v\\v&-u\end{pmatrix}\begin{pmatrix}u_x\\v_x\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix},$$ y su determinante es $-(u^2+v^2)=-C^2\neq0$. Por lo tanto, $u_x=v_x=0$; por Cauchy–Riemann también $u_y=v_y=0$, de modo que $f'=0$ en $U$.
>>3. Como $U$ es conexo y $f'=0$ en $U$, $f$ es constante en $U$.

^4c39b6


>[!Theorem] Teorema del módulo máximo
>Sea $G$ una región y sea $f:G\to\mathbb{C}$ analítica. Si existe $a\in G$ tal que $$|f(z)|\leq|f(a)|\qquad\forall z\in G,$$ entonces $f$ es constante.
>>[!Proof]-
>>1. Sea $r>0$ tal que $\overline{B(a,r)}\subseteq G$ y sea $\gamma(t)=a+r e^{it}$, con $t\in[0,2\pi]$, la circunferencia de centro $a$ y radio $r$. Por la fórmula integral de Cauchy, $$f(a)=\frac{1}{2\pi i}\int_{\gamma}\frac{f(w)}{w-a}\,dw=\frac{1}{2\pi}\int_0^{2\pi}f(a+r e^{it})\,dt.$$
>>2. Entonces $$|f(a)|\leq\frac{1}{2\pi}\int_0^{2\pi}|f(a+r e^{it})|\,dt\leq\frac{|f(a)|}{2\pi}\int_0^{2\pi}dt=|f(a)|.$$ Por lo tanto, hay igualdad en ambas desigualdades.
>>3. Definimos $\varphi(t):=|f(a)|-|f(a+r e^{it})|$. Por la hipótesis $|f(z)|\leq|f(a)|$, la función $\varphi$ es no negativa, y es continua porque $f$ es continua. Además, por la igualdad del paso anterior, $$\frac{1}{2\pi}\int_0^{2\pi}\varphi(t)\,dt=|f(a)|-\frac{1}{2\pi}\int_0^{2\pi}|f(a+r e^{it})|\,dt=0.$$
>>4. Como $2\pi\neq0$, se sigue que $$\int_0^{2\pi}\varphi(t)\,dt=0.$$ Si $\varphi$ fuera positiva en algún punto, por continuidad sería positiva en un intervalo y su integral sería positiva, contradicción. Luego $\varphi(t)=0$ para todo $t\in[0,2\pi]$, es decir, $$|f(a+r e^{it})|=|f(a)|\qquad\forall t\in[0,2\pi].$$ 
>>5. Como esto vale para todo $r$ suficientemente pequeño, $|f|$ es constante en un disco alrededor de $a$ tenemos que $f$ [[FA - Teo5#^4c39b6|es constante en ese disco]]; 
>>6. Sea $c$ esa constante. La función $f-c$ es analítica en $G$ y se anula en todo un disco alrededor de $a$, así que sus ceros tienen un punto de acumulación en $G$. Por el [[FA - Teo5#^6ef1c1|teorema de identidad]] tenemos $$f-c\equiv0$$en $G$. Por lo tanto, $f$ es constante en todo $G$.

## Índice de una curva

>[!Example] Índice de una circunferencia
>Sea $\gamma:[0,2\pi]\to\mathbb{C}$, dada por $$\gamma(t)=a+e^{int},\qquad n\in\mathbb{Z}.$$ Entonces $$\int_\gamma\frac{1}{z-a}\,dz=\int_0^{2\pi}\frac{1}{e^{int}}\,ine^{int}\,dt=2\pi in.$$

>[!Definition] Índice de una curva respecto de un punto
>Sea $\gamma$ una curva cerrada rectificable y sea $a\notin\{\gamma\}$. Definimos el **índice de $\gamma$ respecto de $a$** como $$n(\gamma,a):=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}.$$

>[!Theorem] El índice es entero
>Sea $\gamma:[\alpha,\beta]\to\mathbb{C}$ una curva cerrada rectificable y sea $a\notin\{\gamma\}$. Entonces $$n(\gamma,a)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}\in\mathbb{Z}.$$
>>[!Proof]- pedir la original dada en clase
>>1. Asumimos el lema de aproximación: existe una sucesión de curvas cerradas $\sigma_{j}$ de clase $C^{1}$ a trozos con $a\notin\{\sigma_{j}\}$ tales que $$\int_{\sigma_{j}}\frac{dz}{z-a}\xrightarrow[j\to\infty]{}\int_{\gamma}\frac{dz}{z-a}.$$
>>2. Por (1), basta probar el teorema para $\gamma$ de clase $C^{1}$ a trozos, pues entonces cada $n(\sigma_{j},a)$ es entero y una sucesión de enteros convergente en $\mathbb{C}$ es eventualmente constante ya que si $p,q\in\mathbb{Z}$ con $p\neq q$ entonces $|p-q|\geq 1$, de modo que su límite $n(\gamma,a)$ es entero.
>>3. Idea: el integrando es la derivada logarítmica de $z-a$; definimos su primitiva a lo largo de la curva como $$F(t)=\int_{\alpha}^{t}\frac{\gamma'(s)}{\gamma(s)-a}\,ds,$$ de modo que $F(\alpha)=0$ y $F(\beta)=\int_{\gamma}\frac{dz}{z-a}$, y corregimos $\gamma(t)-a$ con $e^{-F(t)}$ para obtener una función constante.
>>4. Sea $\varphi(t)=e^{-F(t)}(\gamma(t)-a)$; donde $\gamma$ es derivable vale $F'(t)=\frac{\gamma'(t)}{\gamma(t)-a}$ y $\frac{d}{dt}e^{-F(t)}=-F'(t)e^{-F(t)}$, luego $$\varphi'(t)=-F'(t)e^{-F(t)}(\gamma(t)-a)+e^{-F(t)}\gamma'(t)=e^{-F(t)}\left[-\frac{\gamma'(t)}{\gamma(t)-a}(\gamma(t)-a)+\gamma'(t)\right]=e^{-F(t)}\left[-\gamma'(t)+\gamma'(t)\right]=0.$$
>>5. Así $\varphi$ es constante en cada subintervalo $C^{1}$ y por continuidad es globalmente constante en $[\alpha,\beta]$, y como $F(\alpha)=0$ se tiene $\varphi(\alpha)=\gamma(\alpha)-a$, luego $\varphi(\alpha)=\varphi(\beta)$ es $$(\gamma(\alpha)-a)=e^{-F(\beta)}(\gamma(\beta)-a).$$
>>6. Como $\gamma$ es cerrada se tiene $\gamma(\alpha)=\gamma(\beta)$ con $\gamma(\alpha)-a\neq 0$, luego cancelando queda $e^{-F(\beta)}=1$ y por $e^{w+z}=e^{w}e^{z}$ se obtiene $$e^{F(\beta)}=1.$$
>>7. Escribiendo $F(\beta)=u+iv$ con $u,v\in\mathbb{R}$ se tiene $e^{u}(\cos v+i\sin v)=1$, luego tomando módulo $e^{u}=1$ y por lo tanto $u=0$, de donde $\cos v=1$ y $\sin v=0$, así que existe $k\in\mathbb{Z}$ tal que $$v=k\cdot 2\pi.$$
>>8. Por lo tanto $F(\beta)=k\cdot(2\pi i)$ y por definición $$n(\gamma,a)=\frac{1}{2\pi i}F(\beta)=k\in\mathbb{Z}.$$
