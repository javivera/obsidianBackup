---
dateCreated: 2024-09-30,16:01
tags:
  - topologicalVectorSpaces
  - FunctionalAnalysis
---
>[!Corollary] Aplicacion de Banach-Steinhaus
>$U,X$ Banach $T_{n}\in B(U,X)$ si $\lim_{ n \to \infty }T_{n}u$ existe para cada $u\in U$ entonces $\lim_{ n \to \infty }T_{n}u = Tu$ con $T\in B(U,X)$
>>[!Proof]-
>>1. Como existe $\lim\limits_{ n \to \infty }T_{n}u$ para cada $u\in U$ entonces es facil mostar que $\lVert T_{n}u \rVert\leq M\quad\forall n\in \mathbb{N}$ y esto lo podemos hacer para cada $u$ entonces $\{ T_{s}(u):n\in \mathbb{N} \}$ es acotado. 
>>2. Por [[Teórico 7#^cd74fc]] tenemos que $\{ \lVert T_{n} \rVert :n\in \mathbb{N}\}$ es acotado por una cota $M$ 
>>3. Luego definimos $Tu=\lim\limits_{ n \to \infty }T_{n}u$
>>4. Luego $$\lVert Tu \rVert =\lim\limits_{ n \to \infty }\lVert  T_{n}u \rVert \leq M\lVert u \rVert $$
>>5. Usando limite de ambos lados y considerando que la cota $M$ es unica para todo $n\in \mathbb{N}$  llegamos a $\lVert Tu \rVert\leq M\lVert u \rVert$ 

^02b4aa

>[!Lemma] $\ell^{p}$ separable si y solo si $p$ finito 
>Sea $s_{k}=\{ (x_{1},\ldots,x_{k},0,\ldots) :x_{j}\in \mathbb{F}\}$ y $S=\bigcup^{\infty}s_{k}$ entonces $S$ es denso en $\ell^{p}$ si $p$ finito y no es denso en $\ell^{\infty}$. Ademas $\ell^{p}$ es separable si $1\leq p<\infty$ y no lo es si $p=\infty$
>>[!Proof]-
>>1. Con las mismas cuentas que hicimos para ver que Hilbert con bon entonces separable vemos que $C=\{ (x_{1},\ldots,x_{k},0,\ldots 0,) :k\in \mathbb{N},x_{j}\in \mathbb{Q}+\mathbb{Q}i\}$ es numerable y denso en $\ell^{p}$ si $p$ finito (osea $\ell^{p}$ es separable si $p$ finito) 
>>2. Luego $S$ denso y numerable por qué $C\subseteq S \subseteq \ell^{p}$ por lo tanto $$\ell^{p}=\overline{C}\subseteq \overline{S} \subseteq \overline{\ell^{p}}=\ell^{p}$$
>>Mostrando que $S$ es denso en $\ell^{p}$ con $p$ finito  
>>3. Por otro si $x=(1,1,\ldots,1\ldots)\in \ell^{\infty}$ entonces $\lVert x-z \rVert_{\ell^{\infty}}\geq 1\quad\forall z\in S$ ósea $S$ no es denso en $\ell^{\infty}$ 
>>4. Veamos que $\ell^{\infty}$ no es separable. Sea $A=\{ x^{k} \}\subseteq \ell^{\infty}$ un conjunto numerable con $x^{k}=(x_{1}^{k},x_{2}^{k},\ldots)$ . Definimos $y=(y_{1},y_{2},\ldots)\in \ell^{\infty}$ como $$y=\begin{cases} x_{k}^{k}+1 & |x_{k}^{k} |\leq 1\\ 0 &cc   \end{cases}$$
>>5. Luego $\lVert y-x^{k} \rVert_{\infty}\geq\lvert y_{n}-x_{n}^{k} \rvert\geq1\quad\forall n\in \mathbb{N}$  
>>6. Por lo tanto $y$ no puede ser aproximado por elementos de $A$ osea $y\not\in\overline{A}$ . Osea $\overline{A}\neq \ell^{\infty}$. $A$ no es denso en $\ell^{\infty}$ 

^1afeb2

>[!Theorem] $\ell^q$ es isomorfo isometrico $(\ell^p)'$ 
>Sea $p \in [1,\infty)$ y $q\in (1,\infty]$ tales que $\frac{1}{p}+\frac{1}{q}=1$ entonces:
>- (a) Si $a=\{ a_{n} \}\in \ell^{q}$ entonces $\forall \{ x_{n} \}=x\in \ell^{p}$ la sucesion $\{ a_{n}x_{n} \}\in \ell^{1}$ y $f_{a}:\ell^{p}\rightarrow \mathbb{F}$ dada por $f_{a}(x):=\sum^{\infty}_{n=1}a_{n}x_{n}$ esta en $(\ell^{p})'$ y $\lVert f_{a} \rVert=\lVert a \rVert_{q}$
>- (b) $\forall f\in (\ell^{p})'$, $\exists !a\in \ell^{q}$ tal que $f=f_{a}$
>- (c) $T_{p}:\ell^{q}\rightarrow(\ell^{p})'$ dada por $T_{p}(a)=f_{a}$ es isomorfismo isometrico
>>[!Proof]-
>>Tratamos los casos $p=1$ y $p>1$ por separado. Primero supongamos que $p>1$. 
>>- (a) 
>>	1. La linealidad de $f_a$ es clara, mientras que el primer resultado, 
>>	2. La desigualdad $\|f_a\| \le \|a\|_q$, se siguen inmediatamente de la desigualdad de Hölder (Corolario 1.58). 
>>	3. La desigualdad $\|a\|_q \le \|f_a\|$ se demostrará en la parte (b).
>>- (b) 
>>	1. Supongamos que $f \in (l^p)'$ es arbitrario, y definamos la sucesión $a_n = f(\tilde{e_n})$, $n \ge 1$ ($\tilde{e_n}$ como en la Definición 1.60). 
>>	2. Para un entero arbitrario $k \ge 1$, definamos $\gamma \in S_k$ eligiendo $\gamma_n \in \mathbb{F}$ tal que $a_n \gamma_n = |a_n|^q$ ($\gamma_n = 0$ si $a_n = 0$), para $n=1, \dots, k$. 
>>	3. Entonces por la definición de $q$, $|\gamma_n|^p = |a_n|^q$ y así $$f\left(\sum_{n=1}^k \gamma_n \tilde{e_n}\right) = \sum_{n=1}^k \gamma_n a_n = \sum_{n=1}^k |a_n|^q \le \|f\|\|\gamma\|_p = \|f\|\left(\sum_{n=1}^k |a_n|^q\right)^{1/p},$$
>>	4. Luego como $1 - \frac{1}{p} = \frac{1}{q}$ $$\left(\sum_{n=1}^k |a_n|^q\right)^{1/q} \le \|f\|.$$
>>	5. Como $k$ es arbitrario esto demuestra que la sucesión $a = \{a_n\} \in l^q$ y $\|a\|_q \le \|f\|$
>>	6. Entonces por la construcción en la parte (a), el funcional $f_a$ existe para la sucesión $a$. 
>>	7. Además, para cualquier $k \ge 1$ y $x \in S_k$ $$f(x) = f\left(\sum_{n=1}^k x_n \tilde{e_n}\right) = \sum_{n=1}^k x_n a_n = f_a(x),$$
>>	de modo que $f=f_a$ en $S$, y como $S$ es denso en $l^p$, $f=f_a$ en $l^p$ (por el Corolario 1.29). 
>>	8. Esto demuestra que para un $f \in (l^p)'$ arbitrario, existe un $a \in l^q$ adecuado. 
>>	9. También, es claro que $a=b$ en $l^q$ si $f_a=f_b$ en $S$ si $f_a=f_b$ en $l^p$ (por la densidad de $S$ en $l^p$) lo que demuestra el resultado de unicidad y completa la demostración de la parte (b). 
>>	10. Además, si comenzamos la construcción anterior de una sucesión $a$ con un funcional de la forma $f_b$, para algún $b \in l^q$, entonces la construcción simplemente produce $a=b$, por lo que los resultados anteriores también producen la desigualdad $\|a\|_q \le \|f_a\|$ requerida en la parte (a).
>>- Ahora supongamos que $p=1$. El argumento es similar al anterior. La parte (a) se sigue del Ejemplo 4.4, mientras que la parte (b) se sigue de la desigualdad
>> $$|a_n| = |f(\tilde{e_n})| \le \|f\|\|\tilde{e_n}\|_\infty = \|f\|, \quad n \ge 1,$$
>> que muestra que $a=\{a_n\} \in l^\infty$ y $\|a\|_\infty \le \|f\|$.
>> - (c)
>>	1. Esta claro ahora por (a) que $T:\ell^q\rightarrow(\ell^p)'$ dada por $T(q_{n})=f_{q}$ con $T(q_{n})(p_{n})=\sum^{\infty}_{n=1}q_{n}p_{n}$ es isometria.
>>	2. Por (b) queda claro que es biyectiva
>>	3. Luego por [[Teórico 6#^0deb40]] es isomorfismo isometrico

^bd2cdc

## Espacios Vectoriales Topologicos

>[!Definition] Espacio vectorial topologico
> $X$ espacio vectorial y $\tau$ una topologia tal que 
> - (a) $\forall x\in X$ sucede $\{ x \}$ es cerrado ($\tau$ es $T_{1}$)
> - (b) $(x,y)\mapsto x+y$ continua respecto a $\tau$. Digamos $\forall (x_{1},x_{2})\in X\times X$ y $V$ entorno de $x_{1}+x_{2}$ existe $U_{1},U_{2}$ entornos de $x_{1}$ y $x_{2}$ respectivamente tales que $U_{1}+U_{2}\subseteq V$
>- (c) $(\alpha,x)\mapsto \alpha x$ continua respecto a $\tau$. Digamos $\forall x\in X$, $\forall \alpha\in \mathbb{F}$ y $V$ entorno de $\alpha x$ tenemos que $\exists r>0$ y $W$ entorno tal que $\lvert \beta-\alpha \rvert<r \Rightarrow \beta W\subseteq V$
>Entonces decimos que $(X,\tau)$ es un espacio vectorial topologico

^dd46f6

>[!Remark] Implicaciones de espacios topologicos
>- (a) + (b) implica que entonces $\tau$ es Hausdorff ($T_{2}$)  (Lo probamos mas adelante)
>- (a) + (b) tambien implica que $T_{a},M_{\alpha}:X\rightarrow X$ dadas por 
>$$T_{a}x=x+a\quad M_{\alpha }x=\alpha x \quad  0 \neq\alpha \in \mathbb{F}$$
>Son continuas con inversa continua (*Homeomorfismo*). 
>Y esto implica que $\tau$ es invariante dadas estas operaciones. Concluyendo que $$E\subseteq X \text{ abierto }\iff a+E \text{ abierto}\quad\forall a\in X$$
>Por lo tanto $\tau$ queda determinada por cualquier base *local* en 0
>Con lo cual de ahora en mas una base local de un espacio vectorial topologico $X$ es una familia $\mathcal{B}$ de entornos de 0 tales que dado un entorno cualquiera de $0$ contiene un elemento de $\mathcal{B}$

^9b52c0

>[!Lemma] DUDA
>- (a)  Para $a\in X$ espacio vectorial topologico $\alpha\in \mathbb{C}\setminus\{ 0 \}$ $$T_{a}:X\rightarrow X \quad x\mapsto x+a$$ $$M_{\alpha }:X\rightarrow X \quad x\mapsto\lambda a$$ Son homeomorfismos
>- (b)  Si $x_{0}\in X$ y $V$ entorno del 0 $x_{0}+U$ es entorno de $x_{0}$
>- (c)  $U$ entorno de $0$ y $F\subseteq X$ entonces $F+V$ es abierto y contiene a $F$
>- (d)  Si $U,V$ entorno de $0$ entonces 
>	- (d1)  $U\cap V$, $U\cup V$, $-U$ son entornos del $0$
>	- (d2) $U\cap(-U)$ es entorno de $0$ (llamado entorno simetrico) $(A \text{ simetrico} \iff A=-A)$
>	- (d3)  Si $U$ entorno simetrico entonces $U+U$ es entorno simetrico
>- (e)  $W$ espacio vectorial normado de $0$ entonces $\exists V$ espacio vectorial normado de $0$, simetrico, tal que $V+V+V+V\subseteq W$
>>[!Proof]
>> - (a) $T_a, M_\lambda$ son continuos por definicion y también lo son sus inversos $T_{-a}, M_{1/\lambda}$.
>> - (b) Como $T_{x_0}$ es homeo, $T_{x_0}V = x_0+V$ es abierto que contiene al $x_0$. ($0 \in V$). No sera mas bien que como $V$ entorno existe $x_{0}\in U\subseteq V$ abierto y como es homeo $T_{x_{0}}=x_{0}+U\subseteq x_{0}+V$ por lo tanto $x_{0}+V$ es entorno de $x_{0}$    
>> - (c) $F = \bigcup_{x \in F} \{x\} \subset \bigcup_{x \in F} (x+V) = F+V$ abierto por unión de abiertos. ( seria union de entornos, pero abiertos? )  
>> - (d) 
>> 	- (d1) Es claro que $U \cap V$ y $U \cup V$ son entornos de $0$ (por que interseccion de abierto es abierto) . $-U$ también pues existe $0\in V\subseteq U$ abierto y $M_{-1}(V)=-V\subseteq -U$ por ser homeo $-V$ es abierto y $0=-1*0=M_{-1}(0)\in M_{-1}(V)=-V$. Mostrando que $-U$ es entorno de $0$  
>> 	- (d2) Por (d1) $U$ y $-U$ son entornos del $0$ entonces $U\cap-U$ tambien es entorno del $0$ por (d1)       
>> 	- (d3) $U+U$ es abierto (mas bien entorno por que union de abiertos es abierto) y $0+0 \in U+U$. Luego sea $x\in U+U$ entonces $x=u_{1}+u_{2}$ entonces $-x=(-u_{1})+(-u_{2})$   pero como $U$ simetrico osea $U=-U$ entonces $-u_{1},-u_{2}\in U$ con lo cual $-x\in U+U$ entonces $x=-(-x)\in -(U+U)$ la otra inclusion sale analogamente 
>> - (e)
>> 	1. Como $0 \in W$ entorno y la suma es continua debe existir un entorno $U_{1}\times U_{2}$ de la preimagen del $0$ (que es $0$ por que $0=0+0$) tal que $U_{1}+U_{2}=+(U_{1}\times U_{2})\subseteq W$ 
>> 	2. Por lo (d1) $U_0 := U_1 \cap U_2$ es entorno de $0$. Luego definimos $U:=U_0 \cap (-U_0)$ que es simétrico. 
>> 	3. Además, $U+U \subseteq U_0+U_0 \subseteq U_1+U_2 \subseteq W$. 
>> 	4. Luego, aplicamos lo mismo a $U$ y obtenemos $V$ tq $V+V \subseteq U \implies V+V+V+V \subseteq W$.

^3847ac

>[!Theorem] Teorema engorde
>  $X$ e.v.t., $K \subset X$ compacto, $C \subset X$ cerrado tq $K \cap C = \emptyset$. Entonces $\exists V$ entorno de $0$ tal que $(K+V) \cap (C+V) = \emptyset$.
>>[!Proof]-
>> 1. Si $K = \emptyset$ entonces $K+V = \emptyset$. Listo. 
>> 2. Si $K \ne \emptyset$, sea $x \in K$. Como $K \cap C = \emptyset$ con $C$ cerrado entonces $\exists W_x$ abierto tq $x \in W_x \subseteq X-C$. (Porque $X-C$ es complemento cerrado) 
>> 3. Por [[Teórico 8#^3847ac]] (a)  $W_x-x$ es abierto y $0 \in W_x-x \iff W_x-x$ es entorno de $0$. 
>> 4. Por [[Teórico 8#^3847ac]] (e) $\exists V_x$ entorno simétrico de $0$ tq $V_{x}+V_x+V_x+V_x \subseteq W_x$.
>> 5. En particular $$0 \in V_x \implies V_x+V_x+V_x = 0+V_x+V_x+V_x \subseteq V_x+V_x+V_x+V_x \subseteq W_x-x$$
>> 6. O sea, $x+V_x+V_x+V_x \subseteq W_x \subseteq X-C$ por lo tanto $(x+V_x+V_x+V_x) \cap C = \emptyset$.
>> 7. Afirmación: $$(x+V_x+V_x) \cap (C+V_x) = \emptyset$$ sino, sea $z$ en la intersección. Como $z \in C+V_x$ tenemos que $\exists c \in C, v \in V_x$ tal que $z=c+v$. 
>> 8. Luego como $V_{x}$ es simetrico $-v\in V_{x}$ y considerando $z\in x+V_{x}+V_{x}$ tenemos que $c=z-v \in x+V_x+V_x+V_x$. 
>> 9. Pero $c \in C$ entonces es absurdo por 6. por lo tanto vale la afirmacion
>> 10. Pero todo eso que hicimos lo podemos hacer para cualquier $x\in K$
>> 11. Por lo tanto como $V_{x}$ es entorno (abierto) del $0$ tenemos que $K \subseteq \bigcup_{x \in K} (x+V_x)$ (abierto) luego como $K$ compacto $$K \subseteq \bigcup_{i=1}^n (x_i+V_{x_i})$$
>> 12. Sea $V = \bigcap_{i=1}^n V_{x_i}$ entonces $$\begin{align}K+V \subseteq \bigcup_{i=1}^n (x_i+V_{x_i})+V & = \{x+v : x \in \bigcup(x_i+V_{x_i}), v \in V\}\\ & = \bigcup_{i=1}^n \{x+v : x \in x_i+V_{x_i}, v \in \bigcap_{j=1}^n V_{x_j}\}\\ & \subseteq \bigcup_{i=1}^n (x_i+V_{x_i}+V_{x_i})\end{align}$$ 
>> y además $C+V =C+\bigcap_{i=1}^n V_{x_i}\subseteq C+V_{x_i} \quad \forall i$.
>> 13. Por 6. tenemos que  $(x_i+V_{x_i}+V_{x_i}) \cap (C+V_{x_i}) = \emptyset \quad \forall i$ entonces vale  $$(x+V_{x_{i}}+V_{x_{i}}) \cap (C+V) = (x+V_{x_{i}}+V_{x_{i}})\cap(C+\bigcap_{j=1}^n V_{x_j})\subseteq (x+V_{x_{i}}+V_{x_{i}}) \cap (C+V_{x_{i}}) = \emptyset\quad\forall i$$
>> 14. Entonces $$(K+V)\cap(C+V)\subseteq \left( \bigcup_{i=1}^n (x_i+V_{x_i}+V_{x_i}) \right) \cap (C+V) = \phi$$

^266292

>[!Corollary] EVT son $T_{2}$
>Todo espacio vectorial topologico es $T_{2}$
>>[!Proof]
>>1. $x+y\in X$  entonces $K=\{ x \}$  compacto y $C=\{ y \}$ cerrado por definicion de espacio vectorial topologico y luego uso [[Teórico 8#^266292]] 

^0811d5

>[!Remark]
>Como $K+V$ y $C+V$ son abiertos disjuntos entonces tambien $\overline{K+V}\cap(C+V)=\emptyset$
>>[!Proof]-
>>2. Si $x\in C+V$ entonces $\exists U$ entorno de $x$ tal que $U\subseteq C+V$. 
>>3. Si $x\in \overline{K+V}$ entonces todo entorno de $x$ interseca a $K+V$ en particular $\exists y\in  U\cap(K+V)$. absurdo

^a26cd1

>[!Corollary]
> (Rudin, Teo 1.11): Si $\mathcal{B}$ base local de $\tau$ de $X$ e.v.t. Entonces todo miembro de $\mathcal{B}$ contiene la clausura de algún otro miembro de $\mathcal{B}$, o sea $\forall U \in \beta, \exists W \in \mathcal{B}$ tq $\bar{W} \subseteq U$.
>>[!Proof]
>> 4. Sea $C=U^c$ cerrado y $K=\{0\}$ compacto (hay que probar para entornos de $0$, luego sale para todos los puntos).

^24b05f

>[!Definition] Entorno balanceado
> $B \subseteq X$ es balanceado si $\alpha B \subseteq B \quad \forall \alpha \in \mathbb{F}$ con $|\alpha| \le 1$.

^658d6a

>[!Lemma]
> Todo entorno del $0$ contiene un entorno del $0$ que es balanceado.
>>[!Proof]-
>> 1. Sea $U$ entorno del $0$. Como la multiplicación es continua, $\exists \delta > 0$ y $V$ entorno del $0$ tq $\alpha V \subseteq U$ si $|\alpha| < \delta$. Definicion de continuidad de $f$ en $c$ . Existe $V_{c}$ entorno de $c$ tal que $f(V_{c})\subseteq U_{f(c)}$ en este caso $f(V_{c})=\alpha V_{c}$ y $f(c)=0$ por que $c=0$   
>> 2. Definimos $W := \bigcup_{|\alpha|<\delta} (\alpha V)$ es claro por paso 1. que $W \subseteq U$ y clarmente es entorno del $0$ por que tomamos $\frac{\delta}{2}V\subseteq W$ pero $\frac{\delta}{2}V$ es entorno del $0$ por que $V$ lo es y multiplicar es homemorfismo entonces manda entornos en entornos (abierto en abiertos) , entonces contiene un abierto (con el $0$ adentro)   
>> 3. Sea $w\in W$ y $|\alpha |\leq 1$ entonces $\alpha w=\alpha \alpha'v$ con $v\in V$ pero $|\alpha \alpha '|=|\alpha||\alpha '|\leq |\alpha |\delta\leq \delta$ por lo tanto $\alpha w=\beta v$ con $\beta<\delta$ osea que $\alpha w\in W$            

^a9241d

>[!Definition] Acotado en espacios vectoriales topologicos
> $E \subset X$ e.v.t es acotado si $\forall V$ entorno de $0, \exists r>0$ tq $E \subseteq rV \quad \forall t>r$.

^d672f5

>[!Remark]
>En espacios métricos definíamos acotado si $d(x,y) \le M \quad \forall x,y \in E$. Esta definición en general no coincide con la anterior. 
>Si $X$ es normado y $d$ es la métrica inducida por la norma, entonces sí coinciden. Pero si reemplazamos $d$ por la métrica $\tilde{d}$ (o alguna otra que induzca la misma topología) entonces no coinciden (con esta última métrica, todo conjunto es acotado).
>Veamos que en $X$ normado sí coinciden. 
>>[!Proof]-
>>1. Suponer $E \subseteq tU \quad \forall t$ grande, $U$ entorno de $0$. En particular, dado $n$ fijo, $E \subseteq tB_{\frac{1}{n}} = B_{\frac{t}{n}}$ (recordar $B_r = \{x \in X : \|x\| \le r\}$). 
>>2. Luego $\forall x,y \in E$ tenemos $$\|x-y\| \le \|x\|+\|y\| \le 2 \frac{t}{n}$$
>>3. Recíprocamente supongamos $d(x,y) \leq M \quad \forall x,y\in E$ admeas sea $x_{0}\in E$ y $z_0 \in E$. Entonces $$\|x_{0}\| \le \|x_{0}-z_0\| + \|z_0\| \le M + \|z_0\| = \tilde{M}$$
>>Entonces $x_{0}\in B_{\tilde{M}}$ por lo tanto $E \subset B_r$ si $r > \tilde{M}$. 
>>4. Sea ahora $U$ entorno de $0$. Como $\{B_{1/n} : n \in \mathbb{N}\}$ es base local, $\exists n_0$ tq $B_{1/n_0} \subseteq U$. 
>>5. Luego si  $t > \tilde{M} n_0$ entonces $\frac{t}{n_{0}}>\tilde{M}$ con lo cual $E \subseteq B_{\frac{t}{n_{0}}} = t B_{\frac{1}{n_{0}}} \subseteq tU$

^e07361
