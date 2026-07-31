>[!Definition] Fibrado de $k$-formas alternantes
>Sea $M$ variedad suave. Se define el fibrado de $k$-formas alternantes, denotado por $\Lambda^kT^*M$, como la union disjunta de todos los espacios de $k$-tensores alternantes sobre cada $T_p^{*}M$ con $p\in M$: $$\Lambda^kT^*M:=\bigsqcup_{p\in M}\Lambda^k(T_p^*M)=\{(p,\omega):p\in M\text{ y }\omega\in\Lambda^k(T_p^*M)\}.$$
>El caso $k=1$, es $$\Lambda T^*M=\{(p,\alpha):p\in M\text{ y }\alpha\in T_p^*M\}$$es llamado fibrado cotangente.
>Tambien, tenemos una proyeccion canonica $$\pi:\Lambda^k(T^*M)\to M,\qquad (p,\omega)\mapsto p.$$

>[!Remark]
>Como sucedió con el fibrado tangente, es similar ver que $\Lambda^kT^*M$ es una variedad suave de dimension $\dim M+\binom{\dim M}{k}$.
>
>>[!Proof]-
>>1. La idea es imitar lo que se hizo con el fibrado tangente. Si $n=\dim M$, para una carta $(U,\varphi=(x_1,\ldots,x_n))$, la carta inducida es $$(\widetilde U,\widetilde\varphi=(x_1,\ldots,x_n,(v_{i_1\ldots i_k})_{1\le i_1<\cdots<i_k\le n})),$$donde $\widetilde U=\pi^{-1}(U)$ y, si $(p,\omega)\in\widetilde U$,$$v_{i_1\ldots i_k}(\omega)=\omega\left(\frac{\partial}{\partial x_{i_1}}\bigg|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\bigg|_p\right).$$veamos por que esto ultimo vale.
>>2. Como $\left\{\frac{\partial}{\partial x_1}\big|_p,\ldots,\frac{\partial}{\partial x_n}\big|_p\right\}$ es base de $T_pM$, sabemos que $\{dx_1|_p,\ldots,dx_n|_p\}$ es base de $T_p^*M$.
>>3. Recordar que, formalmente, $dx_k|_p:T_pM\to T_{x_k(p)}\mathbb R$ y, por conveniencia, identificamos $(dx_k)_p$ con un escalar, y asi esta justificado que $(dx_k)_p\in T_p^*M$.
>>4. Además, por dualidad, se tiene $$dx_j|_p\left(\frac{\partial}{\partial x_i}\bigg|_p\right)=\delta_{ij}.$$
>>5. Y vimos que $$\{dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p\}_{1\le i_1<\cdots<i_k\le n}$$es base de $\Lambda^k(T_p^*M)$. Por tanto $$\omega=\sum_{1\le i_1<\cdots<i_k\le n}C_{i_1\ldots i_k}\,dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p.$$
>>6. Para averiguar el coeficiente $C_{i_1\ldots i_k}$, evaluamos en la $k$-upla asociada $\left(\frac{\partial}{\partial x_{i_1}}\big|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\big|_p\right)$.
>>7. En efecto, si $1\le j_1<\cdots<j_k\le n$, entonces $$(dx_{j_1}|_p\wedge\cdots\wedge dx_{j_k}|_p)\left(\frac{\partial}{\partial x_{i_1}}\bigg|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\bigg|_p\right)=\det\left(dx_{j_a}|_p\left(\frac{\partial}{\partial x_{i_b}}\bigg|_p\right)\right)_{a,b=1}^k.$$
>>8. Usando $dx_{j_a}|_p\left(\frac{\partial}{\partial x_{i_b}}\big|_p\right)=\delta_{j_a i_b}$, queda $$(dx_{j_1}|_p\wedge\cdots\wedge dx_{j_k}|_p)\left(\frac{\partial}{\partial x_{i_1}}\bigg|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\bigg|_p\right)=\det(\delta_{j_a i_b}).$$
>>9. Como los indices estan ordenados de forma creciente, este determinante vale $1$ si $(j_1,\ldots,j_k)=(i_1,\ldots,i_k)$, y vale $0$ en caso contrario.
>>10. Por lo tanto, al evaluar la expansion de $\omega$ en $\left(\frac{\partial}{\partial x_{i_1}}\big|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\big|_p\right)$, todos los terminos se anulan excepto el termino correspondiente a $(i_1,\ldots,i_k)$, y obtenemos $$\omega\left(\frac{\partial}{\partial x_{i_1}}\bigg|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\bigg|_p\right)=C_{i_1\ldots i_k}.$$
>>11. Entonces $$v_{i_1\ldots i_k}(\omega):=\omega\left(\frac{\partial}{\partial x_{i_1}}\bigg|_p,\ldots,\frac{\partial}{\partial x_{i_k}}\bigg|_p\right)$$es exactamente la coordenada de $\omega$ con respecto al elemento de base $dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p$.
>>12. O sea que las ultimas $\binom nk$-funciones de $\widetilde\varphi$ nos dan las coordenadas de $\omega$ con respecto a la base $$\{dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p\}_{1\le i_1<\cdots<i_k\le n}.$$
>>13. En esta estructura de variedad diferenciable, la proyeccion canonica $\pi:\Lambda^k(T^*M)\to M$ es suave.

>[!Definition] $k$-forma alternante o simplemente $k$-forma
>Una $k$-forma $\omega$ es cualquier seccion de $\pi:\Lambda^k(T^*M)\to M$ es decir, es una funcion $$\omega:M\to\Lambda^k(T^*M)$$tal que $\pi(\omega(p))=p$, o lo que es lo mismo $\omega(p)=(p,\omega_p)$ con $\omega_p\in\Lambda^k(T_p^*M)$.
>Como hicimos con los campos, identificamos $\omega(p)$ con su segunda componente $\omega_p$.

>[!Remark] El conjunto de las $k$-formas suaves 
>Vamos a estar interesados en las $k$-formas suaves, es decir, cuando la seccion de $\pi$, $$\omega:M\to\Lambda^k(T^*M)$$es una funcion suave. 
>Se suele denotar el conjunto de tales secciones suaves por $$\Omega^k(M)$$o en notacion de fibrados vectoriales $\Gamma(\Lambda^k(T^*M))$.

>[!Remark] Para memorizar (intuicion)
>$\Omega^{k}(M)$ vendria a ser como el equivalente a $\mathfrak{X}(M)$ para campos
>Y cuando evaluas un $w\in \Omega^{k}(M)$ en un punto $p$ ahi obtenes $w_{p}$ un $k$-tensor alternante asi como cuando evaluavas un $X\in \mathfrak{X}(M)$ en $p$ obtenias $X_{p}$ un vector tangente (en ambos casos estoy usando la identificacion) 

>[!Remark]
>Recordar que $\Lambda^0(V^*)=\mathbb R$ [[GS - Teo20#^2c0c65]] por lo tanto $$\Lambda^0(T^*M)=\mathbb \bigsqcup_{p\in M}\{ (p,r):p\in M,\ r\in \Lambda^{0}(T_{p}^{*} M)=\mathbb{R}  \}=M\times \mathbb{R}$$
>Luego $\Omega^0(M)$ se identifica con $C^\infty(M)$. De la siguiente manera
>Si $\omega\in\Omega^0(M)$, entonces $\omega:M\to\Lambda^0(T^*M)$, $\omega(p)=(p,r_{p})$ con $r_{p}\in\mathbb R$, y $\omega$ es suave sii $$f:M\to\mathbb R \qquad p\mapsto r_{p}$$es suave. Pues aca $\Lambda^0(T^*M)=M\times\mathbb R$, y como podemos identificar $w(p)=w_{p}=r_{p}$ entonces tendriamos que $w=f$ como $w$ es suave $f$ es suave, osea $w=f\in C^{\infty}(M)$    

## Conjunto de formas diferenciales

>[!Remark]
>Se define el conjunto $\Omega^*(M)$ de las formas diferenciales, sin el $k$, sobre $M$ como la suma directa
>$$\Omega^*(M):=\bigoplus_{k=0}^n\Omega^k(M).$$
>Veremos que podemos llevar el producto cuña a este conjunto y dotarlo de estructura de algebra graduada.

## Suavidad de $k$-formas 

>[!Remark]
Como nos sucedio en el capitulo de Campos, la primera pregunta es: criterios para saber cuando una $k$-forma es suave.

>[!Proposition] Coordenadas de $k$-formas 
>Tenemos el resultado analogo de Campos. Sea $(U,\varphi=(x_1,\ldots,x_n))$ una carta suave. Para todo $p\in U$ tenemos que:
>- Base de $T_pM$: $B=\left\{\frac{\partial}{\partial x_1}\big|_p,\ldots,\frac{\partial}{\partial x_n}\big|_p\right\}$.
>- Base de $T_p^*M$: $B^*=\{dx_1|_p,\ldots,dx_n|_p\}$.
>- Base de $\Lambda^k(T_p^*M)$: $B_k=\{dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p:1\le i_1<\cdots<i_k\le n\}$.
>
>Por tanto, si $\omega$ es una $k$-forma tenemos $$\omega_p=\sum_{1\le i_1<\cdots<i_k\le n}C_{i_1\ldots i_k}(p)\,dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p,$$lo cual define funciones $$C_{i_1\ldots i_k}:U\to\mathbb R \qquad p\mapsto C_{i_1\ldots i_k}(p)$$que se llaman las coordenadas de $\omega$ con respecto al marco coordenado $\{dx_{i_1}\wedge\cdots\wedge dx_{i_k}\}$.

^70585b

>[!Remark]
>Ademas, tenemos la siguiente construccion usando campos suaves. Sea $\omega$ una $k$-forma, $k\ge1$, y sean $X_1,\ldots,X_k$ campos suaves. Definimos $$\omega(X_1,\ldots,X_k):M\to\mathbb R,\qquad p\mapsto\omega_p((X_1)_p,\ldots,(X_k)_p).$$

>[!Remark]
>Con estas consideraciones, muy similar a las estudiadas en campos, tenemos el siguiente resultado analogo cuya prueba es similar.

>[!Theorem] Suavidad de $k$-formas
>Sea $\omega:M\to\Lambda^k(T^*M)$ una $k$-forma. Las siguientes afirmaciones son equivalentes:
>
>1. $\omega$ es suave.
>2. Para toda carta $(U,\varphi=(x_1,\ldots,x_n))$, las coordenadas de $\omega$ con respecto al marco coordenado $\{dx_{i_1}\wedge\cdots\wedge dx_{i_k}\}_{1\le i_1<\cdots<i_k\le n}$ son funciones suaves.
>3. Para cualquier $k$ campos suaves $X_1,\ldots,X_k\in\mathfrak X(M)$, la funcion $\omega(X_1,\ldots,X_k)\in C^\infty(M)$.
>
>>[!Proof]-
>>1. $(2\iff 3)$ [[GS - Pr5#^174f5d]]
>>2. $(1\iff 2)$ estimo que es trivial usando que suavidad se ve localmente

>[!Proposition] Suavidad con una sola carta (analogo a campos) 
>Sea $(U,\varphi=(x_1,\ldots,x_n))$ una carta suave y sea $\omega$ una $k$-forma sobre $U$, $$\omega:U\to\Lambda^k(T^*M)$$entonces $\omega$ es suave si y solo si las coordenadas de $\omega$ con respecto al marco $\{dx_{i_1}\wedge\cdots\wedge dx_{i_k}\}_{1\le i_1<\cdots<i_k\le n}$ son funciones suaves.
>
>>[!Proof]-
>>3. Dada la carta $(U,\varphi)$ tenemos la carta inducida $(\widetilde U,\widetilde\varphi)$ de $\Lambda^k(T^*M)$ que es un difeomorfismo entre $\widetilde U$ y $U\times\mathbb R^{\binom nk}$ $$\widetilde\varphi:\widetilde U\subset\Lambda^k(T^*M)\to \varphi(U)\times\mathbb R^{\binom nk}\subseteq \mathbb{R}^{n} \times\mathbb R^{\binom nk}$$
>>4. Y justo $\widetilde\varphi$ se encarga de dar las coordenadas de $\omega$ en el marco $\{dx_{i_1}\wedge\cdots\wedge dx_{i_k}\}$. Por tanto, la composicion $$\widetilde\varphi\circ\omega: U\rightarrow \varphi(U)\times\mathbb R^{\binom nk}\qquad p\mapsto(\varphi(p),C_{i_{1}\ldots i_{k}}(p))$$ (Notar que abuse notacion por que deberian ser todas las coordenadas, osea los subindices $i_{k}$ deberian moverse por todas las posibilidades, siempre ordenados de menor a mayor) 
>>5. Ademas sabemos que $\widetilde{\varphi}$ es difeomorfismo (es la carta que usamos para probar que era $\Lambda^{k}( T^{*}M)$ era estructura) 
>>6. Luego si $w$ es suave entonces $\widetilde{\varphi}\circ w$ es suave, por lo tanto cada coordenada es suave luego $C_{i_{1}\ldots i_{k}}$ con $1<i_{1}<\ldots<i_{k}\leq n$ son suaves
>>7. Y obviamente si $C_{i_{1}\ldots i_{k}}$ con $1<i_{1}<\ldots<i_{k}\leq n$ son suaves, $\widetilde{\varphi}\circ w$ es suave. Entonces $w$ lo es (por que si esto es suave componer a derecha con $\varphi ^{-1}:\varphi(U)\rightarrow U$ sigue siendo suave, por que $\varphi ^{-1}$ es homeo, osea que al componer no cambiamos codominio) 

>[!Definition] Producto cuña de $k$-formas
>Sean $\omega\in\Omega^k(M)$ y $\theta\in\Omega^\ell(M)$. Se define el producto cuña de $\omega$ y $\theta$, denotado por $\omega\wedge\theta$, de manera puntual:
>$$(\omega\wedge\theta)_p:=\omega_p\wedge\theta_p.$$
>En el caso de $f\in C^\infty(M)=\Omega^0(M)$ y $\omega\in\Omega^k(M)$, tenemos $$f\wedge\omega=f\omega$$ osea $(f\wedge w)_{p}=f(p)w_{p}$

>[!Proposition] Ejercicio del practico
>Probar que si $\omega\in\Omega^k(M)$ y $\eta\in\Omega^\ell(M)$, entonces $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.
>
>>[!Proof]-
>>[[GS - Pr5#^5374b2]]

^ce25ad

>[!Definition] Construccion de $\Omega^{*}(M)$ 
>$\Omega^{k}(M)$ es espacio vectorial sobre $\mathbb{R}$ 
>La suma y producto escalar se definen de manera puntual, $\omega,\theta\in\Omega^k(M)$ y $\lambda\in\mathbb R$,
>$$(\omega+\lambda\theta)_p=\omega_p+\lambda\theta_p,$$
>y se ve que $\omega+\lambda\theta\in\Omega^k(M)$.
>  
>Ademas $\Omega^k(M)$ es un $C^\infty(M)$-modulo con la accion dada por: si $f\in C^\infty(M)$ y $\omega\in\Omega^k(M)$, entonces
>$$(f\omega)_p=f(p)\omega_p,$$
>y se ve que $f\omega\in\Omega^k(M)$.
>Extendiendo el producto cuña por bilinealidad a todo $\Omega^*(M)$, tenemos que este espacio es un espacio vectorial real con estructura de algebra dada por $\wedge$, que es graduada osea tiene una descomposicion en subespacios, en este caso $\Omega^k(M)$, $k=0,\ldots,n$, que cumplen
>$$\Omega^k(M)\wedge\Omega^\ell(M)\subset\Omega^{k+\ell}(M),$$
>y tambien es un $C^\infty(M)$-modulo.

^76ed6d

## La diferencial exterior

>[!Remark] Motivacion
>Notar que, dado $f\in C^\infty(M)=\Omega^0(M)$, tenemos un operador $d$, que aplicado a $f$ nos da $df\in\Omega^1(M)$. Queremos extender este operador al resto de espacios de $k$-formas suaves.
>Que $df\in \Omega^{1}(M)$ es por que $(df)_{p}$ me da un $1$-tensor. Por que $(df)_{p}:T_{p}M\rightarrow T_{f(p)}(\mathbb{R})\simeq \mathbb{R}$ (usando la identificacion con las coordenadas en la imagen) osea $(df)_{p}\in T^{1}(T_{p}^{*}M)=\Lambda^{1}(T_{p}^{*}M)$  

^171d2a

>[!Lemma] La diferencial exterior es local, lema previo
>Sea $d:\Omega^*(M)\to\Omega^*(M)$ satisfaciendo (i)-(iv). Sean $\omega_1,\omega_2\in\Omega^*(M)$ tales que coinciden en un abierto $U$ de $M$. Entonces
>$$(d\omega_1)|_U=(d\omega_2)|_U.$$
>
>>[!Proof]-
>>1. Como $d$ es transformacion lineal, podemos mirar $\omega=\omega_1-\omega_2$ y asi es suficiente con ver que si $\omega|_U=0$ (Osea $\omega_{1}$ y $\omega_{2}$ coinciden en $U$ abierto), entonces $(d\omega)|_U=0$. Con lo cual se cumpliria la igualdad pedida
>>2. Aca hacemos un truco clasico de tensores y es volver todo cero usando una funcion de levantamiento.
>>3. Sabemos que las funciones de levantamiento preservan en un abierto contenido en otro y matan por "afuera", pero aca $\omega$ ya es cero en $U$. La idea es "volverlo cero" en todo $M$.
>>4. Sea $p\in U$ arbitrario. Sea $V$ abierto de $M$ con $p\in V$ y $\overline V\subset U$. Sea $f\in C^\infty(M)$ funcion de levantamiento tal que $f|_{\overline V}\equiv1$ y $\operatorname{supp}f\subset U$.
>>5. Como $f$ es suave, entonces $f\omega\in\Omega^*(M)$, ademas $$(f\omega)_q=f(q)\omega_q=\begin{cases}f(q)0,&q\in U,\\0\omega_q,&q\notin U,\end{cases}$$porque $\operatorname{supp}f\subset U$. Asi $f\omega=0$ en todo $M$.
>>6. Como $d$ es lineal, $d(f\omega)=d(0)=0$. Pero por otro lado $$d(f\omega)=d(f\wedge\omega)=(df)\wedge\omega+(-1)^{0.k} f\,d\omega.$$
>>7. Luego $$0=(df)\wedge\omega+f\,d\omega.$$
>>8. Evaluando en $p\in U$, tenemos $$0=((df)\wedge\omega)_p+f(p)(d\omega)_p=(df)_p\wedge\omega_p+(d\omega)_p=(d\omega)_p,$$porque $\omega_p=0$ y $f(p)=1$. Como $p$ era arbitrario, $(d\omega)|_U=0$.

^ef3cfa

>[!Theorem] Derivada exterior
>Sea $M$ variedad suave. Entonces existe una unica transformacion lineal
>$$d:\Omega^*(M)\to\Omega^*(M)$$
>llamada derivada exterior, que satisface:
>
>1. $d:\Omega^k(M)\to\Omega^{k+1}(M)$.
>2. $d(f)$ es $df$, diferencial de $f$, para toda $f\in\Omega^0(M)=C^\infty(M)$.
>3. Si $\omega\in\Omega^k(M)$ y $\theta\in\Omega(M)$, entonces
>$$d(\omega\wedge\theta)=(d\omega)\wedge\theta+(-1)^k\omega\wedge d\theta.$$
>4. $d^2=0$.
>
>>[!Proof]-
>>- **Unicidad**
>>	1. La idea de la prueba es construir $d$ de forma local, usando las condiciones que debemos satisfacer: (ii)-(iv). Hacemos ingenieria inversa para saber como deberia ser $d$, localmente. Primero, notemos:
>>	2. Asumiendo existencia veamos primero la unicidad, que nos va dar pistas de como definir $d$. 
>>	3. Como $d$ se va definir localmente , fijemos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ y tomemos $\omega\in\Omega^k(M)$ arbitrario y llegemos a una formula para $(d\omega)|_U$.
>>	4. Tenemos $$\omega|_U=\sum_{1\le i_1<\cdots<i_k\le n}C_{i_1\ldots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}.$$
>>	5. Pero $d$ actua sobre cosas definidas sobre todo $M$, entonces no podemos aplicar directamente $d$ a la expresion anterior. Para hacerlo bien, debemos extender dicha expresion a todo $M$, usando una funcion de levantamiento.
>>	6. Sea $V$ abierto de $M$ con $\overline V\subset U$, y sea $f\in C^\infty(M)$ tal que $f|_{\overline V}\equiv1$ y $\operatorname{supp}f\subset U$. Extendemos las $C_{i_1\ldots i_k}$ y $x_1,\ldots,x_n$ definiendo: $$f\cdot x_i=\begin{cases}f(q)x_i(q),&q\in U,\\0,&\text{en otro caso},\end{cases}\qquad f\cdot C_{i_1\ldots i_k}=\begin{cases}f(q)C_{i_1\ldots i_k}(q),&q\in U,\\0,&\text{en otro caso}.\end{cases}$$
>>	7. Estas nuevas funciones son suaves (hemos hecho cuentas similares en otras ocaciones) 
>>	8. Consideremos la nueva $k$-forma: $$\widetilde{\omega}=\sum_{1\le i_1<\cdots<i_k\le n}\underbrace{f.C_{i_1\cdots i_k}}_{\text{smooth function}}\ \ \underbrace{\underbrace{d(f.x_{i_1})}_{\text{smooth }1\text{-form}}\wedge\cdots\wedge\underbrace{d(f.x_{i_k})}_{\text{smooth }1\text{-form}}}_{\text{smooth }k\text{-form}}.$$ $d(f.x_{i_{j}})$ son $1$-formas por lo mismo que [[GS - Teo21#^171d2a]] y luego usamos [[GS - Teo21#^ce25ad]] para el wedge de todas esas $1$-formas y llegamos a la $k$-forma  
>>	9. Notar que $\widetilde\omega$ coincide con $\omega$ en el abierto $V$. En efecto, si $q\in V$, tenemos $f(q)=1$ y asi $$(f\cdot C_{i_1\ldots i_k})(q)=f(q).C_{i_1\ldots i_k}(q)=C_{i_1\ldots i_k}(q)$$
>>	10. Y ademas $d(f\cdot x_i)_q=(dx_i)_q$ por que $$d(f.x_{i})_{q}\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)=\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)(f.x_{i})=\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)(x_{i})=(dx_{i})_{q}\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)$$ usando definicion de diferencial y en el segundo igual como $f.x_{i}\equiv x_{i}$ en el abierto $V$ sabemos que $\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)$ actua de la misma forma en ambos (germen local)
>>	11. Pero entonces $$(d(f.x_{i_{1}})\wedge\ldots\wedge d(f.x_{i_{k}}))_{q}=(d(x_{i_{1}})\wedge\ldots\wedge d(x_{i_{k}}))_{q}$$ usando la definicion de producto cuña de $k$-formas y la asociatividad 
>>	12. Luego $w$ y $\widetilde{w}$  coinciden en un abierto $V$. Por tanto, por [[GS - Teo21#^ef3cfa]] $$(d\omega)|_V=(d\widetilde\omega)|_V.$$
>>	13. Lo bueno es que la expresion para $\widetilde\omega$ esta definida sobre todo $M$. Por lo tanto podemos aplicar $d$ y obtenemos: $$(d\widetilde\omega)=d\sum fC_{i_1\ldots i_k}\,d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})=d\sum fC_{i_1\ldots i_k}\wedge d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})$$ el ultimo igual por que $fC_{i_1\ldots i_k}$ es una $0$-forma 
>>	14. Por linealidad de $d$ y usando la propiedad $3$ de esta misma afirmacion y considerando que $fC_{i_1\ldots i_k}$ es una $0$-forma, queda $$(d\widetilde\omega)=\sum d(fC_{i_1\ldots i_k})\wedge d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})+\sum fC_{i_1\ldots i_k}\wedge d( d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k}))$$
>>	15. Ahora como $d^{2}=0$ $$(d\widetilde\omega)=\sum d(fC_{i_1\ldots i_k})\wedge d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})$$
>>	16. Finalmente como por paso 12. $(d\omega)|_{V}=(d \widetilde{\omega})|_{V}$ y por paso 15. y por las mismas idaes en paso 9. y 11. tenemos $$(d\omega)|_V=(d \widetilde{\omega})|_{V}\sum d(C_{i_1\ldots i_k})\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}.$$
>>	17. De lo que resulta que $d$ es unico pues la formula anterior solo depende de la diferencial usual de funciones suaves.
>>	18. Notar que la formula anterior da pistas de como se debe definir la transformacion lineal $d:\Omega^*(M)\to\Omega^*(M)$.
>>- **Existencia**
>>	1. Construyamos $d$ localmente y luego lo hacemos de forma global. Fijemos una carta $(U,\varphi=(x_1,\ldots,x_n))$.
>>	2. Dada una $k$-forma $\omega\in\Omega^k(U)$,$$\omega=\sum C_{i_1\ldots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad C_{i_1\ldots i_k}\in C^\infty(U),$$
>>	3. Definimos $d_U$ por $$d_U\omega:=\sum dC_{i_1\ldots i_k}\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k},$$donde $dC_{i_1\ldots i_k}$ es la diferencial de $C_{i_1\ldots i_k}$, por lo tanto una $1$-forma y luego su base es $\{ dx_{1},\ldots,dx_{n} \}$  $$dC_{i_1\ldots i_k}=\sum_{j=1}^n\frac{\partial C_{i_1\ldots i_k}}{\partial x_j}\,dx_j.$$ los coeficientes salen por que $dC_{I}\frac{\partial}{\partial x_{j}}=\frac{\partial}{\partial x_{j}}C_{I}$ y esto vale por [[Glosario Teorico#^311f86]]
>>	4. Por linealidad del diferencial de funciones suaves, claramente $d_U$ se extiende a una transformacion lineal sobre todo $\Omega^*(U)$
>>	5. Ademas $d_U$ satisface **(i)** por que si reemplazamos la expresion que dimos en 3. llegamos a $$d_U\omega:=\sum_{j=1}^{n}  \sum_{i_{1}< \ldots<i_{k}}\frac{\partial C_{i_1\ldots i_k}}{\partial x_j}\,dx_j\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k},$$ y luego de permutar y posiblemente agregar un $-1$ nos queda que esto es una suma de $1$ hasta $n$ de $k+1$-formas 
>>	6. **(ii)** es trivial por que $f=f.1$ entonces $d|_{U}f=d|_{U}f.1=d|_{U}f$  
>>	7. **(iii)** Como $d_U$ es lineal y $\wedge$ es bilineal, basta con analizar cuando $\omega=f\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}$ y $\theta=g\,dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}$. Esto es por que el producto cuña de dos elementos de la suma directa se define como la suma de los productos cuña de los pares son $k$-formas del mismo grado $k$.
>>	8. Luego por linealidad seria diferencial de cada uno de esos productos. Pero esos productos son basicamente como en multiplicacion de polinomios la suma de todas las combinaciones, y luego por linealidad nuevamente basta verlo para un caso cualquiera de esos que seria $\omega\wedge\theta$ 
>>	9. Entonces $$\begin{align}d_U(\omega\wedge\theta)& =d_U(fg\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell})\\ & =d(fg)\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\&=(f\,dg+g\,df)\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\& =f\,dg\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}+g\,df\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\&=(-1)^k f\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dg\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}+df\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge g\,dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\&=(d_U\omega)\wedge\theta+(-1)^k\omega\wedge d_U\theta.\end{align}$$
>>	10. **(iv)** $d_U^2=0$. Por linealidad de $d_U$, es suficiente con ver $d_Ud_U\omega=0$ con $\omega=f\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}$. $$\begin{align}d_Ud_U\omega&=d_U\left(\sum_j\frac{\partial f}{\partial x_j}dx_j\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\right)\\&=d_U\left(\sum_j\sum_I\frac{\partial f}{\partial x_j}dx_j\wedge dx_I\right)\\&=\sum_j\sum_I d\left(\frac{\partial f}{\partial x_j}\right)\wedge dx_j\wedge dx_I\\&=\sum_j\sum_I\left(\sum_k\frac{\partial^2 f}{\partial x_k\partial x_j}dx_k\right)\wedge dx_j\wedge dx_I\\&=\sum_I\sum_{1\le j<k\le n}\left(\frac{\partial^2 f}{\partial x_k\partial x_j}-\frac{\partial^2 f}{\partial x_j\partial x_k}\right)dx_k\wedge dx_j\wedge dx_I=0\end{align}$$ esto ultimo vale por que $$\left(\frac{\partial^2 f}{\partial x_k\partial x_j}-\frac{\partial^2 f}{\partial x_j\partial x_k}\right)=\left[\frac{\partial }{\partial x_k},\frac{\partial}{\partial x_j}\right]f=0$$ 
>>	11. Por ultimo, definimos de manera global $d$. Sea $\theta\in\Omega^r(M)$. Dado $p\in M$, definimos $$(d\theta)_p:=(d_U\theta|_U)_p$$para cualquier carta suave $(U,\varphi=(x_1,\ldots,x_n))$ de $M$ alrededor de $p$. (la parte. dela derecha cae en lo que hicimos al principio por lo tanto cumple todo) 
>>	12. Necesitamos ver que esta bien definido. Sea $(V,\psi=(y_1,\ldots,y_n))$ otra carta suave de $p$, y $W=U\cap V\ne\varnothing$. Por linealidad de la derivada exterior, alcanza con verlo cuando $\theta\in\Omega^k(M)$.
>>	13. Tenemos $$\theta|_U=\sum_Ia_I\,dx_I,\qquad \theta|_V=\sum_Jb_J\,dy_J.$$
>>	14. Entonces por definicion de $d_U$ y $d_V$, $$d_U\theta|_U=\sum_Ida_I\wedge dx_I,\qquad d_V\theta|_V=\sum_Jdb_J\wedge dy_J.$$
>>	15. Pero en $W=U\cap V$ hay una unica diferencial exterior local $$d_W:\Omega^*(W)\to\Omega^{*}(W).$$
>>	16. Tomando las dos expresiones de $\theta|_W$, esto ultimo es igual a, por ser $d_W$ diferencial exterior, $$\sum_Ida_I\wedge dx_I=\sum_Jdb_J\wedge dy_J.$$
>>	17. En particular, si evaluamos en $p$, $$(\sum_Ida_I\wedge dx_I)_p=(\sum_Jdb_J\wedge dy_J)_p.$$

^f7b034

## Glosario

>[!Remark] No se de donde salio esto
>Si $\omega\in\Lambda^kT_p^*M$, entonces $\omega$ es una aplicación $k$-lineal alternada
>$$\omega:T_pM\times\cdots\times T_pM\to\mathbb R.$$
>La carta $(U,\varphi=(x_1,\ldots,x_n))$ induce una base de $T_pM$ dada por
>$$\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\ldots,\left.\frac{\partial}{\partial x_n}\right|_p\right\}.$$
>Por eso, para cada $1\le i_1<\cdots<i_k\le n$, se define
>$$v_{i_1\cdots i_k}(\omega):=\omega\left(\left.\frac{\partial}{\partial x_{i_1}}\right|_p,\ldots,\left.\frac{\partial}{\partial x_{i_k}}\right|_p\right).$$
>Es decir, $v_{i_1\cdots i_k}(\omega)$ es el coeficiente de $\omega$ obtenido al evaluarla en los vectores coordenados correspondientes.

^4e8085
