## Diferenciabilidad en espacios normados

> [!Definition] Definición
> Sean $V$ y $W$ espacios vectoriales reales de dimensión finita, normados. Sea $I \subseteq V$ un abierto y $p \in I$. Una función $F \colon I \to W$ se dice *diferenciable en $p$* si existe una transformación lineal $T \colon V \to W$ tal que
> $$
> \lim_{v \to 0} \frac{\|F(p+v)-F(p)-Tv\|}{\|v\|} = 0.
> $$
> La norma del denominador es la de $V$ y la del numerador es la de $W$.

> [!Remark] Pregunta
> ¿Qué representa $Tv$?

>[!Lemma]
>Sean $U$, $W$ y $X$ espacios vectoriales reales normados de dimensión finita. Sean
>$$g \colon A \subseteq U \to W,\qquad f \colon B \subseteq W \to X$$funciones con $\operatorname{Im}(g)\subseteq B$.
>Sean $x_0$ e $y_0$ puntos de acumulación de $A$ y $B$, respectivamente. Supongamos que $$\lim_{x\to x_0} g(x)=y_0, \qquad \lim_{y\to y_0} f(y)=z. $$
>Si se cumple alguna de las siguientes condiciones:
> 1. $f$ es continua en $y_0$.
> 2. $g(x)\neq y_0$ en una vecindad agujereada de $x_0$.
>Entonces $$ \lim_{x\to x_0} f(g(x))=z. $$

>[!Proposition] Matriz Diferencial
>Sea $F \colon I \subseteq V \to W$ diferenciable en $p$ y sea $T \colon V \to W$ una transformación lineal tal que $$ \lim_{v \to 0} \frac{\|F(p+v)-F(p)-Tv\|}{\|v\|} = 0.$$
>Entonces, para todo $v \in V$, $$Tv = \lim_{t \to 0} \frac{F(p+tv)-F(p)}{t}.$$
>>[!Proof]-
>>Si $v=0$, la igualdad es inmediata porque $T0=0$. Supongamos $v \neq 0$. Como $I$ es abierto y $p \in I$, existe $\varepsilon>0$ tal que $p+tv \in I$ para todo $t \in (-\varepsilon,\varepsilon)$. Entonces
>>$$
>>0
>>= \lim_{t \to 0}
>>\frac{\|F(p+tv)-F(p)-T(tv)\|}{\|tv\|}
>>= \lim_{t \to 0}
>>\frac{1}{\|v\|}
>>\left\|\frac{F(p+tv)-F(p)}{t}-Tv\right\|.
>>$$
>>Multiplicando por $\|v\|$, se obtiene
>>$$
>>\lim_{t \to 0}\left\|\frac{F(p+tv)-F(p)}{t}-Tv\right\|=0,
>>$$
>>de donde
>>$$
>>Tv = \lim_{t \to 0} \frac{F(p+tv)-F(p)}{t}.
>>$$

> [!Corollary] Corolario
> Si $F$ es diferenciable en $p$, existe una única transformación lineal que satisface la definición anterior. Se la llama *diferencial de $F$ en $p$* y se la denota por
> $$
> (\mathrm{d}F)_p \colon V \to W.
> $$
>>[!Proof]-
>>La proposición anterior muestra que cualquier transformación lineal que satisfaga la definición debe verificar
>>$$
>>Tv = \lim_{t \to 0} \frac{F(p+tv)-F(p)}{t}
>>\qquad \text{para todo } v \in V,
>>$$
>>y por lo tanto queda completamente determinada por $F$ y por $p$.

>[!Definition] Aproximacion afin
>Sea $F \colon I \subseteq V \to W$ es diferenciable en $p$. Podemos definir $$\begin{align} R(v)&= F(p+v)-F(p)-Tv\\ & =  F(p+v)-F(p)-(dF)_{p}(v)\\&=F(p+v)-\bigg(F(p)+(dF)_{p}(v)\bigg)\end{align}$$
>Sustituyendo llegamos a que $$R(x-p)=F(x)-\bigg(F(p)+(dF)_{p}(x-p)\bigg)$$ 
>El término $R(v)$ es el error al aproximar $F(p+v)$ por la *aproximación afín de $F$ en $p$* $$A_{p}(x)=F(p)+(\mathrm{d}F)_p(x-p).$$
>Osea podemos pensar $$F(x)\approx A_{p}(x)$$
>O podemos pensar $$F(x)=A_{p}(x)+R(x-p)$$ donde $R(x-p)$ cumple $\lim\limits_{ x \to p }\lVert R(x-p) \rVert=0$. Mas aún, lo hace mas rapido que lineal   $$\lim_{x\to p}\frac{\|R(x-p)\|}{\|x-p\|}=0.$$

> [!Lemma] Lema
> Toda transformación lineal $T \colon V \to W$ entre espacios vectoriales reales normados de dimensión finita es acotada. Es decir, existe $\mu \ge 0$ tal que
> $$
> \|Tv\|\le \mu \|v\|
> \qquad \text{para todo } v \in V.
> $$
>>[!Proof]-
>>1. Sea $$S=\{v\in V:\|v\|=1\}$$
>>2. La función $G \colon S \to \mathbb{R}$, $G(v)=\|Tv\|$, es continua. 
>>3. Como $S$ es cerrado y acotado en un espacio de dimensión finita, es compacto; por ende $G(S)$ alcanza un máximo, digamos $\mu\ge 0$. 
>>4. Luego $$\|Tv\|\le \mu\qquad \text{para todo } v\in S.$$
>>5. Si $v\neq 0$, entonces $v/\|v\|\in S$, de modo que $$ \|Tv\|=\|v\|\,\left\|T\!\left(\frac{v}{\|v\|}\right)\right\|\le\mu \|v\|.$$
>>6. El caso $v=0$ es trivial.

> [!Theorem] Teorema
> Si $F \colon I \subseteq V \to W$ es diferenciable en $p$, entonces $F$ es continua en $p$.
>>[!Proof]-
>>Sea $T=(\mathrm{d}F)_p$. Entonces
>>$$
>>F(p+v)-F(p)=\bigl(F(p+v)-F(p)-Tv\bigr)+Tv.
>>$$
>>Tomando normas y usando el lema anterior,
>>$$
>>\|F(p+v)-F(p)\|
>>\le
>>\|F(p+v)-F(p)-Tv\|+\|Tv\|
>>\le
>>\|v\|\,\frac{\|F(p+v)-F(p)-Tv\|}{\|v\|}+\mu \|v\|.
>>$$
>>Cuando $v\to 0$, ambos sumandos tienden a $0$, luego
>>$$
>>\lim_{v\to 0} F(p+v)=F(p).
>>$$

> [!Exercise] Ejercicio
> Rehacer la demostración del lema anterior usando continuidad de transformaciones lineales, o bien demostrar que toda transformación lineal entre espacios normados de dimensión finita es continua.

## Diferenciabilidad en conjuntos y regla de la cadena

> [!Definition] Definición
> Sea $F \colon I \subseteq V \to W$ con $I$ abierto. Se dice que $F$ es *diferenciable* si es diferenciable en cada punto de $I$.

> [!Definition] Definición
> Sea $A\subseteq V$ arbitrario y sea $F \colon A \to W$ continua. Se dice que $F$ es *diferenciable en $p\in A$* si existe un abierto $I_p\subseteq V$ con $p\in I_p$ y una función diferenciable
> $$
> F_p \colon I_p \to W
> $$
> tal que $F_p$ extiende a $F$ en $A\cap I_p$, es decir,
> $$
> F_p|_{A\cap I_p}=F|_{A\cap I_p}.
> $$

> [!Remark] Observación
> Más adelante se puede probar una caracterización equivalente: $F \colon A \to W$ es diferenciable si y solo si existe un abierto $I$ que contiene a $A$ y una función diferenciable $\widetilde{F}\colon I\to W$ tal que $\widetilde{F}|_A=F$.

> [!Theorem] Teorema (Regla de la cadena)
> Sean $V$, $W$ y $X$ espacios vectoriales reales normados de dimensión finita. Sean $I\subseteq V$ y $\widetilde{I}\subseteq W$ abiertos, y sean
> $$
> F \colon I \to \widetilde{I},
> \qquad
> G \colon \widetilde{I} \to X.
> $$
> Si $F$ es diferenciable en $p\in I$ y $G$ es diferenciable en $F(p)\in \widetilde{I}$, entonces $G\circ F$ es diferenciable en $p$ y
> $$
> \mathrm{d}(G\circ F)_p
> =
> \mathrm{d} G_{F(p)} \circ \mathrm{d} F_p.
> $$
>>[!Proof]-
>>Escribamos
>>$$
>>q=F(p),\qquad T=\mathrm{d} F_p,\qquad Q=\mathrm{d} G_q.
>>$$
>>Queremos probar que
>>$$
>>\lim_{v\to 0}
>>\frac{\|G(F(p+v))-G(F(p))-Q(Tv)\|}{\|v\|}=0.
>>$$
>>Definimos
>>$$
>>w = F(p+v)-F(p).
>>$$
>>Entonces $w\to 0$ cuando $v\to 0$ porque $F$ es continua en $p$. Además,
>>$$
>>G(F(p+v))-G(F(p))-Q(Tv)
>>=
>>\bigl(G(q+w)-G(q)-Qw\bigr)+Q(w-Tv).
>>$$
>>Por el lema de acotación aplicado a $Q$, existe $\mu\ge 0$ tal que
>>$$
>>\|Q(w-Tv)\|\le \mu \|w-Tv\|.
>>$$
>>Por lo tanto,
>>$$
>>\frac{\|G(F(p+v))-G(F(p))-Q(Tv)\|}{\|v\|}
>>\le
>>\frac{\|G(q+w)-G(q)-Qw\|}{\|v\|}
>>+
>>\mu \frac{\|w-Tv\|}{\|v\|}.
>>$$
>>Si $w=0$, el primer sumando es cero. Si $w\neq 0$, escribimos
>>$$
>>\frac{\|G(q+w)-G(q)-Qw\|}{\|v\|}
>>=
>>\frac{\|G(q+w)-G(q)-Qw\|}{\|w\|}
>>\cdot
>>\frac{\|w\|}{\|v\|}.
>>$$
>>Además,
>>$$
>>\frac{\|w\|}{\|v\|}
>>\le
>>\frac{\|F(p+v)-F(p)-Tv\|}{\|v\|}
>>+
>>\frac{\|Tv\|}{\|v\|}
>>\le
>>\frac{\|F(p+v)-F(p)-Tv\|}{\|v\|}+\lambda
>>$$
>>para alguna constante $\lambda\ge 0$, nuevamente por acotación de $T$. El primer factor tiende a $0$ porque $G$ es diferenciable en $q$, y el segundo está acotado cerca de $v=0$. Por otro lado,
>>$$
>>\mu \frac{\|w-Tv\|}{\|v\|}
>>=
>>\mu \frac{\|F(p+v)-F(p)-Tv\|}{\|v\|}
>>\longrightarrow 0
>>\qquad (v\to 0)
>>$$
>>porque $F$ es diferenciable en $p$. Concluimos que el cociente completo tiende a $0$.

## Derivadas parciales

>[!Remark]
>Nos enfocamos ahora en el caso $V=\mathbb{R}^n$ y $W=\mathbb{R}^m$ con sus normas usuales. Sea $$F \colon U \subseteq \mathbb{R}^n \to \mathbb{R}^m$$diferenciable en $p\in U$. En $\mathbb{R}^n$ consideramos la base canónica $$\{e_1,\dots,e_n\},\qquad e_i=(0,\dots,0,1,0,\dots,0).$$
>La matriz de $(\mathrm{d} F)_p$ respecto de las bases canónicas de $\mathbb{R}^n$ y $\mathbb{R}^m$ se llama *matriz jacobiana* de $F$ en $p$ y se denota por $$JF(p)=\bigl((\mathrm{d} F)_p e_1 \ \cdots \ (\mathrm{d} F)_p e_n\bigr).$$
>Cada columna es el vector $(\mathrm{d} F)_p e_i$, y por la proposición inicial, $$(\mathrm{d} F)_p e_i=\lim_{t\to 0}\frac{F(p+t e_i)-F(p)}{t}.$$
>Por otro lado podemos escribir la imagen de $dF_{p}$ en base canonica tenemos $$(\mathrm{d} F)_p e_i = \sum_{j=1}^m t_j e_j,$$entonces las coordenadas $t_j$ satisfacen $$t_j=\left\langle (\mathrm{d} F)_p e_i,e_j\right\rangle=\lim_{t\to 0}\left\langle \frac{F(p+t e_i)-F(p)}{t},e_j\right\rangle.$$
>Si $F=(F_1,\dots,F_m)$, esto equivale a $$t_j=\lim_{t\to 0}\frac{F_j(p+t e_i)-F_j(p)}{t}.$$

>[!Definition] Derivada parcial escalar
>Dada $f \colon U \subseteq \mathbb{R}^n \to \mathbb{R}$, con $U$ abierto, la *$i$-ésima derivada parcial* de $f$ en $p\in U$ se define por $$\frac{\partial f}{\partial x_i}(p):= \lim_{t\to 0}\frac{f(p+t e_i)-f(p)}{t},$$cuando este límite existe.

> [!Definition] Derivada parcial vectorial
> Si
> $$
> F=(F_1,\dots,F_m)\colon U \subseteq \mathbb{R}^n \to \mathbb{R}^m,
> $$
> definimos
> $$
> \frac{\partial F}{\partial x_i}(p)
> :=
> \begin{pmatrix}
> \dfrac{\partial F_1}{\partial x_i}(p)\\[0.6em]
> \vdots\\[0.2em]
> \dfrac{\partial F_m}{\partial x_i}(p)
> \end{pmatrix},
> $$
> cuando cada una de esas derivadas parciales existe.

> [!Remark] Observación
> Si $F$ es diferenciable en $p$, entonces la matriz jacobiana está dada por
> $$
> JF(p)=\bigl(a_{jk}\bigr)
> =
> \left(\frac{\partial F_j}{\partial x_k}(p)\right),
> $$
> es decir, la $i$-ésima columna de $JF(p)$ es el vector
> $$
> \frac{\partial F}{\partial x_i}(p).
> $$

> [!Definition] Función de clase $C^1$
> Sea $F \colon U \subseteq \mathbb{R}^n \to \mathbb{R}^m$, con $U$ abierto. Si todas las derivadas parciales de las componentes de $F$ existen en todo punto de $U$ y las funciones
> $$
> \frac{\partial F_i}{\partial x_j}\colon U \subseteq \mathbb{R}^{n} \to \mathbb{R}
> $$
> son continuas, entonces se dice que $F$ es una *función de clase $C^1$*, o bien que es *continuamente diferenciable* en $U$.

> [!Remark] Observación
> Si $F$ es diferenciable en $p$, entonces para todo $v\in \mathbb{R}^n$ existe la derivada direccional
> $$
> (\mathrm{d} F)_p(v)
> =
> \lim_{t\to 0}\frac{F(p+tv)-F(p)}{t}.
> $$
> En particular, existen todas las derivadas parciales y $F$ es continua en $p$.

> [!Remark] Observación
> La existencia de todas las derivadas direccionales en un punto no garantiza que $F$ sea diferenciable en ese punto.

> [!Exercise]
>Sea $F:\mathbb{R}^2\to \mathbb{R}$ dada por $$ f(x,y)= \begin{cases} \dfrac{x^2y}{x^4+y^2}, & (x,y)\neq (0,0),\\[0.6em] 0, & (x,y)=(0,0). \end{cases} $$
>Mostrar que todas las derivadas direccionales existen en $p=(0,0)$, pero $F$ no es continua en $(0,0)$. ¿Qué puede decir de la función?
>>[!Proof]-
>>1. Sea $v=(a,b)\in \mathbb{R}^2$. La derivada direccional de $f$ en $(0,0)$ en dirección $v$ es $$D_vf(0,0)=\lim_{t\to 0}\frac{f(ta,tb)-f(0,0)}{t}.$$
>>2. Como $f(0,0)=0$, para $t\neq 0$ tenemos $$f(ta,tb)=\frac{(ta)^2(tb)}{(ta)^4+(tb)^2}=\frac{t^3a^2b}{t^4a^4+t^2b^2}=\frac{ta^2b}{t^2a^4+b^2}.$$
>>3. Por lo tanto, $$\frac{f(ta,tb)}{t}=\frac{a^2b}{t^2a^4+b^2}.$$
>>4. Si $b\neq 0$, al pasar al límite resulta $$D_vf(0,0)=\lim_{t\to 0}\frac{a^2b}{t^2a^4+b^2}=\frac{a^2}{b}.$$
>>5. Si $b=0$, entonces $f(ta,0)=0$ para todo $t$, y por ende $$D_{(a,0)}f(0,0)=0.$$
>>6. Luego, todas las derivadas direccionales de $f$ en $(0,0)$ existen.
>>7. Veamos ahora que $f$ no es continua en $(0,0)$. Si tomamos la curva $y=x^2$, para $x\neq 0$ se obtiene $$f(x,x^2)=\frac{x^2\,x^2}{x^4+x^4}=\frac{x^4}{2x^4}=\frac{1}{2}.$$
>>8. Así, $$\lim_{x\to 0}f(x,x^2)=\frac{1}{2}\neq 0=f(0,0).$$
>>9. En consecuencia, $f$ no es continua en $(0,0)$.
>>10. Por lo tanto, $f$ no es diferenciable en $(0,0)$. Este ejemplo muestra que la existencia de todas las derivadas direccionales en un punto no implica ni continuidad ni diferenciabilidad en ese punto.

>[!Theorem] Diferenciabilidad en $C^1$
>Sea $U\subseteq \mathbb{R}^n$ un abierto. Si $F:U\subseteq \mathbb{R}^n\to \mathbb{R}^m$ es de clase $C^1$ sobre $U$ (esto es, las funciones $\dfrac{\partial F_j}{\partial x_i}:U\subseteq \mathbb{R}^n\to \mathbb{R}$ existen y son continuas), entonces $F$ es diferenciable sobre todo $U$.
>>[!Proof]
>>Repasarlo. Cualquier libro clásico de análisis (Rudin, Spivak, Apostol, ...).

> [!Definition] Derivadas parciales de orden superior
> Sea $U$ un abierto de $\mathbb{R}^n$ y
> $$
> F:U\subseteq \mathbb{R}^n \longrightarrow \mathbb{R}^m,\qquad
> x\longmapsto (F_1,\dots,F_m),
> $$
> una función tal que existen todas sus derivadas parciales sobre $U$.
>
> Es decir, podemos definir funciones
> $$
> \frac{\partial F_j}{\partial x_i}:U\subseteq \mathbb{R}^n \longrightarrow \mathbb{R},
> \qquad
> p=(x_1,\dots,x_n)\longmapsto \frac{\partial F_j}{\partial x_i}(p).
> $$
>
> En este caso, podemos derivar estas funciones para obtener derivadas parciales de segundo orden:
> $$
> \frac{\partial^2 F_j}{\partial x_k\,\partial x_i}
> :=
> \frac{\partial}{\partial x_k}\left(\frac{\partial F_j}{\partial x_i}\right),
> $$
> cuando tales derivadas existan.
>
> Continuando de forma recursiva, se definen las derivadas parciales de orden superior. Las derivadas parciales de orden $k$ son las derivadas parciales de orden $k-1$, cuando estas existen.

> [!Definition] Clases de diferenciabilidad
> Sea $U\subseteq \mathbb{R}^n$ un abierto y $k\in \mathbb{N}\cup\{0\}$. Una función $F:U\subseteq \mathbb{R}^n\to \mathbb{R}^m$ se dice de clase $C^k$, o diferenciable continuamente $k$ veces, si todas las derivadas parciales de $F$ de orden menor o igual a $k$ existen y son funciones continuas en $U$.
>
> Así, la clase $C^0$ son solo las funciones continuas sobre $U$.
>
> Una función que es de clase $C^k$ para todo $k\in \mathbb{N}\cup\{0\}$ se dice de clase $C^\infty$, o *suave*, o infinitamente diferenciable.

> [!Theorem] Schwarz-Clairaut de las derivadas cruzadas
> Si $U$ es un abierto de $\mathbb{R}^n$ y $F:U\subseteq \mathbb{R}^n\to \mathbb{R}^m$ es una función de clase $C^2$ sobre $U$, entonces las derivadas parciales mixtas de segundo orden no dependen del orden de diferenciación:
> $$
> \frac{\partial^2 F_j}{\partial x_i\,\partial x_k}
> =
> \frac{\partial^2 F_j}{\partial x_k\,\partial x_i}.
> $$

>[!Corollary] Corolario
>Si $F:U\subseteq \mathbb{R}^n\to \mathbb{R}^m$ es suave, entonces las derivadas parciales mixtas de $F$ de cualquier orden son independientes del orden de diferenciación.
>>[!Proof]
>>Repasarlo. Cualquier libro clásico de análisis (Rudin, Spivak, Apostol, ...).

> [!Remark] Observación
> Desde el punto de vista de Teoría de Lie, puede entenderse este teorema como que ciertos grupos de transformaciones conmutan entre sí (en este caso, dos translaciones conmutan entre sí; las translaciones "generan" las derivadas parciales).