### Ejercicio 1

>[!Exercise]
>Sea $V$ un espacio vectorial de dimension $n$. Mostrar que si $k>n$, entonces $\Lambda^k(V^*)=\{0\}$.
>
>>[!Proof]-
>>1. Supongamos tenemos $w\in \Lambda^{k}(V^{*})$ entonces $w_{p}:V\times\ldots\times V\rightarrow\mathbb{R}$ es una funcion multilineal y alternada
>>2. Ahora veamos que $w_{p}(v_{1},\ldots,v_{k})=0$ para cualquier $v_{1},\ldots,v_{k}$
>>3. Dados $v_1,\ldots,v_k$, el conjunto es linealmente dependiente por que dimension de $V$ es $n$
>>4. Entonces spd $v_{k}=\sum^{n}_{i=1} c_{i}v_{i}$. Luego $$w_{p}(v_{1},\ldots,v_{k})=\sum^{n}_{i=1} c_{i} w_{p}(v_{1},\ldots,v_{i})$$
>>5. pero $w_{p}(v_{1},\ldots,v_{i})=0$ para todo $1\leq i\leq n$ por [[Glosario#^9b49d4]]

### Ejercicio 2

>[!Exercise]
>Sea $V$ un espacio vectorial de dimension $n$ y sean $\lambda\in\Lambda^k(V^*)$ y $\mu\in\Lambda^\ell(V^*)$, donde $1\le k,\ell\le n$. Mostrar que $\lambda\wedge\mu\in\Lambda^{k+\ell}(V^*)$.
>
>>[!Proof]-
>>1. Si $\lambda\in\Lambda^k(V^*)$ y $\mu\in\Lambda^\ell(V^*)$, por definicion $$\lambda\wedge\mu=\frac{(k+l)!}{k!l!}\operatorname{Alt}(\lambda\otimes\mu)$$
>>2. Recordamos que si $w\in \Lambda^{j}(V^{*})$ sucede que $$w:\underbrace{V\times\cdots\times V}_{j\text{-veces}}\to\mathbb R$$ 
>>3. Entonces por definicion de producto tensorial [[GS - Teo20#^db8d92]] $$\lambda\otimes\mu:\underbrace{V\times\cdots\times V}_{k\text{-veces}}\times \underbrace{V\times\cdots\times V}_{l\text{-veces}}\to\mathbb R$$ que es multi lineal (esta en $L(V,\ldots ,V:\mathbb{R})$) en particular esta en $T^{k+l}(V^{*})$ entonces por [[GS - Teo20#^c407fe]] sabemos que $\operatorname{Alt}(\lambda\otimes\mu)\in \Lambda^{k+l}(V^{*})$ 
  
### Ejercicio 3

>[!Exercise]
>- Simplificar las siguientes expresiones: $$(e^2\wedge e^3+e^3\wedge e^1)\wedge(5e^1-e^2),\qquad e^1\wedge e^5\wedge e^4\wedge(e^1\wedge e^4+e^4\wedge e^2)$$ donde $e^{j}$ es el $j$-esimo covector de la base dual de $V^{*}$  
>- Mostrar que si $\omega,\lambda,\varphi\in\Lambda^1(V^*)$, entonces $$(\omega-\lambda)\wedge(\lambda-\varphi)=\omega\wedge\lambda+\varphi\wedge\omega+\lambda\wedge\varphi.$$
>
>>[!Proof]-
>>1. Para $$(e^2\wedge e^3+e^3\wedge e^1)\wedge(5e^1-e^2)$$
>>2. $$\begin{align*}(e^2\wedge e^3+e^3\wedge e^1)\wedge(5e^1-e^2)&=e^2\wedge e^3\wedge(5e^1-e^2)+e^3\wedge e^1\wedge(5e^1-e^2) \quad & \text{Distributiva}\\&=e^2\wedge e^3\wedge 5e^1-e^2\wedge e^3\wedge e^2+e^3\wedge e^1\wedge 5e^1-e^3\wedge e^1\wedge e^2\quad& \text{Distributiva}\\&=5(e^2\wedge e^3\wedge e^1)-e^2\wedge e^3\wedge e^2+5(e^3\wedge e^1\wedge e^1)-e^3\wedge e^1\wedge e^2\quad& \text{Sacar constantes}\\&=5(e^2\wedge e^3\wedge e^1)-e^3\wedge e^1\wedge e^2\quad&\text{7. de Prop 18 Teo20}\\&=5(e^1\wedge e^2\wedge e^3)-e^1\wedge e^2\wedge e^3\quad&\text{Permutar }\\&=4e^1\wedge e^2\wedge e^3.\end{align*}$$para ser bien formales varias veces hay que usar asociatividad
>>3. La segunda expresion es $$e^1\wedge e^5\wedge e^4\wedge(e^1\wedge e^4+e^4\wedge e^2)$$y vale $0$, porque en cada termino aparece un factor repetido.
>>4. Finalmente, si $\omega,\lambda,\varphi\in\Lambda^1(V^*)$,$$(\omega-\lambda)\wedge(\lambda-\varphi)=\omega\wedge\lambda-\omega\wedge\varphi-\lambda\wedge\lambda+\lambda\wedge\varphi=\omega\wedge\lambda+\varphi\wedge\omega+\lambda\wedge\varphi.$$

### Ejercicio 4

>[!Exercise]
>Sea $V$ un espacio vectorial real de dimension finita $n$ y sean $B_1=\{\theta_1,\ldots,\theta_r\}$ y $B_2=\{\xi_1,\ldots,\xi_r\}$ subconjuntos de $V^*$.
>
>- Mostrar que $B_1$ es un subconjunto linealmente independiente de $V^*$ si y solo si $\theta_1\wedge\cdots\wedge\theta_r\ne0$.
>- Mostrar que $2e^1+3e^2-e^3$, $e^1+2e^2$, $e^1-2e^3$ son linealmente dependientes.
>- Suponer que tanto $B_1$ como $B_2$ son subconjuntos linealmente independientes de $V^*$. Probar que $B_1$ y $B_2$ son bases del mismo subespacio $r$-dimensional de $V^*$ si y solo si $$\theta_1\wedge\cdots\wedge\theta_r=c\,\xi_1\wedge\cdots\wedge\xi_r$$para algun $c\ne0$; y en tal caso, si $M$ es la matriz de cambio de base de $B_1$ a la base $B_2$, $c=\det(M)$.
>
>>[!Proof]-
>>- (a)
>>1. $(\Rightarrow)$ Suponemos $\theta_{1}\ldots\theta_{r}$ son l.i ahora tomamos sus correspondientes vectores en la base predual $v_{1},\ldots v_{r}$
>>2. $\theta_{1}\wedge,\ldots,\wedge\theta_{r}(v_{1},\ldots,v_{r})=\det(\theta_{i}(v_{j}))=1$ por que es el determinante de la identidad
>>3. Para ver que podemos tomar esos $v_{1},\ldots v_{r}$. Basicamente como $\theta_{1}\ldots\theta_{r}$ los podemos extender a una base $\theta_{1}\ldots\theta_{r},\ldots\theta_{n}$ y ahora tomamos su base dual que es una base que vive en $V$.
>>4. Osea su base dual son $v_{j}$ tal que $v_{j}(\theta_{i})=\delta_{ij}$ pero $v_{j}$ se identifica con $\operatorname{ev}_{v_{j}}$ entonces $v_{j}(\theta_{i})=\theta_{i}(v_{j})$
>>5. $(\Leftarrow)$ Supongamos son linealmente dependientes spd $$\theta_{r}=\sum^{r-1}_{i=1}a_{i}\theta_{i}$$
>>6. Entonces $$\theta_1\wedge\cdots\wedge\theta_r=\theta_1\wedge\cdots\wedge\sum^{r-1}_{i=1}a_{i}\theta_{i}=\sum^{r-1}_{i=1} a_{i}(\theta_1\wedge\cdots\wedge\theta_i)=0$$ por que se repite siempre alguno termino (para cada sumando) lo que es absurdo
>>- (b)
>>1. Sean $\alpha_1=2e^1+3e^2-e^3$, $\alpha_2=e^1+2e^2$ y $\alpha_3=e^1-2e^3$.
>>2. Como $\Lambda^3((\mathbb R^3)^*)$ está generado por $e^1\wedge e^2\wedge e^3$, podemos escribir el producto wedge como un múltiplo de ese generador:
>>$$\alpha_1\wedge\alpha_2\wedge\alpha_3=\det\begin{pmatrix}2 & 3 & -1 \\ 1 & 2 & 0 \\1 & 0 & -2\end{pmatrix}e^1\wedge e^2\wedge e^3=0\cdot e^1\wedge e^2\wedge e^3=0.$$
>>3. Así probamos que $\alpha_1\wedge\alpha_2\wedge\alpha_3$ es la $3$-forma cero, no solo que vale cero en una evaluación particular. Entonces por (a) esos elementos del dual son linealmente dependientes.
>>- (c)
>>- $(\Rightarrow)$
>>	1. Supongamos generan el mismo espacio entonces $$\theta_{j}=\sum^{r}_{i=1}C_{i}^{j} \xi_{i}$$
>>	2. Entonces $C_{i}^{j}$ son los coeficientes de la matriz cambio de base $C(B_{1},B_{2})$
>>	3. Luego $$\begin{align}\theta_{1}\wedge\ldots\wedge\theta_{r}& =\sum^{r}_{i=1}C_{i}^{1} \xi_{i}\wedge\ldots\wedge \sum^{r}_{i=1}C_{i}^{r} \xi_{i}\\ &=\sum_{i_{1},\ldots,i_{r}} C_{i_{1}}^{1}\ldots C_{i_{j}}^{r}\ . \ \xi_{i_{1}}\wedge\ldots\wedge\xi_{i_{r}} \\& =\sum_{\sigma\in S_{r}} C_{\sigma(1)}^{1}\ldots C_{\sigma(r)}^{r} \ . \ \xi_{\sigma(1)}\wedge\ldots\wedge\xi_{\sigma(r)}\\&= \left (\sum_{\sigma\in S_{r}}sg(\sigma)C_{\sigma(1)}^{1}\ldots C_{\sigma(r)}^{r}\right)\xi_{1}\wedge\ldots\wedge\xi_{r}  \\&=\det(C)\xi_{1}\wedge\ldots\wedge\xi_{r}\end{align}$$
>>	4. Como $C=C(B_{1},B_{2})$ entonces es inversible. Por lo tanto su determinante es no nulo
>>	5. Notar que aca podemos usar [[GS - Teo20#^8619e2|Ejercicio]] 7. por que $\xi_{j}\in \Lambda^{1}(V^{*})=V^{*}$
>>- $(\Leftarrow)$
>>	1. Primero notamos que $$0=\theta_{1}\wedge\theta_1\wedge\cdots\wedge\theta_r=c\theta_{1}\wedge\,\xi_1\wedge\cdots\wedge\xi_r$$
>>	2. Entonces por parte (a) $\{ \theta_{1},\xi_{1},\ldots,\xi_{r} \}$ es un conjunto linealmente dependiente osea $\theta_{1}=\sum^{r}_{i=1}c^{1}_{i}\xi_{i}$
>>	3. Y esto mismo vale para cualquier $\theta_{i}$ por ende $$\operatorname{span} B_{1}\subseteq \operatorname{span}B_{2}$$
>>	4. Analogamente $$\xi_{1}\wedge\theta_1\wedge\cdots\wedge\theta_r=c\xi_{1}\wedge\,\xi_1\wedge\cdots\wedge\xi_r=0$$ y haciendo todo igual $\operatorname{span} B_{2}\subseteq \operatorname{span}B_{1}$
>>	5. Mostrando que $$\operatorname{span} B_{1}= \operatorname{span}B_{2}$$
>>	6. Y ahora usando que generan el mismo espacio. Podemos hacer lo mismo que ida para ver que $\det(M)=c$ donde $M=C(B_{1},B_{2})$
>>	7. Notar que aca podemos usar [[GS - Teo20#^8619e2|Ejercicio]] 7. por que $\xi_{j},\theta_{i}\in \Lambda^{1}(V^{*})=V^{*}$

### Ejercicio 5

>[!Exercise]
>Sea $V$ un espacio vectorial de dimension $n$. Un elemento $\alpha$ de $\Lambda^k(V^*)$ se dice descomponible si existen $\theta_1,\ldots,\theta_r\in V^*$ tales que $\alpha=\theta_1\wedge\cdots\wedge\theta_r$.
>
>- (a) Mostrar que $\alpha\wedge\alpha=0$ si $\alpha$ es descomponible.
>- (b) Mostrar que $e^1\wedge e^2+e^3\wedge e^4$ no es descomponible ($V=\mathbb R^4$).
>- (c) Sea $\omega$ una funcion $n$-lineal alternante no nula en $V$ y sea
>  $$
>  F:V\to\Lambda^{n-1}(V^*),\qquad F(v)(v_1,\ldots,v_{n-1})=\omega(v_1,\ldots,v_{n-1},v).
>  $$
>  Probar que es un isomorfismo de espacios vectoriales.
>- Mostrar que si $k=1,n-1$ o $n$, entonces toda $\alpha\in\Lambda^k(V^*)$ es descomponible.
>
>>[!Proof]-
>>- (a)
>>	1. Si $\alpha=\theta_1\wedge\cdots\wedge\theta_k$, entonces $$\alpha\wedge\alpha=\theta_1\wedge\cdots\wedge\theta_k\wedge\theta_1\wedge\cdots\wedge\theta_k=0$$porque aparecen factores repetidos. Y por que $\theta_{j}\in V^{*}$  Esto prueba directamente el caso $k$ impar; para $k$ par, el mismo argumento con factores repetidos tambien da $0$.
>>- (b)
>>	1. En $V=\mathbb R^4$, sea $$\alpha=e^1\wedge e^2+e^3\wedge e^4$$
>>	2. Entonces $$\alpha\wedge\alpha=2e^1\wedge e^2\wedge e^3\wedge e^4\ne 0$$por el punto anterior, $\alpha$ no es descomponible.
>>- (c)
>>	- **Inyectividad**
>>		1. Si $F(v)=0$, entonces $\omega(u_1,\ldots,u_{n-1},v)=0$ para todo $u_i$. Ademas $\omega\ne0$ por hipotesis
>>		2. Suponemos que $v\neq 0$ luego a partir de $v$ extiendo a una base $\{v_{1},\ldots v_{n-1},v\}$ 
>>		3. Luego $\omega(v_{1},\ldots,v_{n-1},v)=\det M$ donde $M$ es la matriz que tiene columnas $v_{i}$ y ultima columna $v$ .
>>		4. Como estos son todos vectores linealmente independientes $\det M\neq 0$ que es absurdo.
>>		5. Entonces $v=0$
>>	- **Sobre**
>>		1. Notemos que $$\dim\Lambda^{n-1}(V^{*})=\binom{n}{n-1}=n=\dim Im(F)$$ lo ultimo vale por teorema de dimension y considerando que por ser inyectiva $\dim\ker F=0$ y obviamente $\dim V=n$   
>>		2. Entonces es sobre.
>>	- **$F(v)$ es multilineal y $F$:** Trivial usando $\omega$ es multilneal
>>- (d)
>>	- $k=1$
>>		1. Es trivial dado que si $\alpha \in \Lambda^{1}(V^{*})$ se descompone como el mismo
>>	- $k=n$
>>		1. Sabemos en general que $$\{ e^{i_{1}}\wedge\ldots\wedge e^{i_{k}}:1\leq \ldots\leq i_{k}\leq n \}$$ es base de $\Lambda^{k}(V^{*})$ 
>>		2. En este caso $k=n$ entonces hay un solo elemento generador $$e^{1}\wedge\ldots\wedge e^{n}$$
>>		3. Entonces evidentemente todo $\alpha \in \Lambda^{k}(V^{*})$ tenemos que $\alpha =ce^{1}\wedge\ldots\wedge e^{n}$ por lo tanto y cada uno de ellos esta en $V^{*}$ 
>>		4. Luego $\alpha$ es descomponible
>>		5. notar que si $c=0$ sucede que $ce^{1}=0\in V^{*}$  
>>	- $k=n-1$
>>		1. Tomamos un $\omega\in \Lambda^{n}(V^{*})$ no nulo entonces por (c) dado $\alpha\in \Lambda^{n-1}(V^{*})$ tenemos que existe $v$ tal que $\alpha =F(v)$ 
>>		2. Si $v=0$ entonces $\alpha =0$ con lo cual ya esta descompuesto  
>>		3. Si no completamos $\{ v \}$ a una base $\{e_{1},\ldots,e_{n-1},v\}$ y tomamos su dual $\{ e^{1},\ldots e^{n-1},\widetilde{v} \}$  
>>		4. Como $w\in \Lambda^{n}(V^{*})$ entonces $w=ce^{1}\wedge\ldots\wedge \widetilde{v}$ por la parte de $k=n$  
>>		5. Entonces tenemos que $$\alpha(v_{1},\ldots,v_{n-1})=F(v)(v_{1},\ldots,v_{n-1})=w(v_{1},\ldots,v_{n-1},v)=ce^{1}\wedge\ldots\wedge \widetilde{v}\ . (v_{1},\ldots,v_{n-1},v)$$
>>		6. Pero si miramos bien $$\begin{align} ce^{1}\wedge\ldots\wedge \widetilde{v}\ . (v_{1},\ldots,v_{n-1},v)& =\det\begin{pmatrix}e^{1}(v_{1})& \ldots &e^{n-1} (v_{n-1}) & e^{1}(v)\\ \vdots & &\vdots &\vdots \\ e^{n-1} (v_{1})&\dots &e^{n-1} (v_{n-1})&e^{n-1} (v)\\ \tilde{v}(v_{1})&\ldots&\tilde{v}(v_{n-1})&\tilde v(v) \end{pmatrix}& \\& =\det\begin{pmatrix}e^{1}(v_{1})& \ldots &e^{n-1} (v_{n-1}) \\ \vdots & &\vdots  \\ e^{n-1} (v_{1})&\dots &e^{n-1} (v_{n-1})\end{pmatrix}\\&=ce^{1} \wedge\ldots\wedge e^{n-1}\ .(v_{1},\ldots,v_{n-1}) \end{align}$$
>>		7. Por lo tanto $\alpha =ce^{1}\wedge\ldots\wedge e^{n-1}$ entonces la pudimos descomponer.

### Ejercicio 6 (Opcional) 

>[!Exercise]
>(Opcional)
>
>- Sean $\alpha_1,\ldots,\alpha_k\in\Lambda^1(V^*)$ y sea $v\in V$. Mostrar que
>  $$
>  \iota_v(\alpha_1\wedge\cdots\wedge\alpha_k)=\sum_{i=1}^k(-1)^{i-1}\alpha_i(v)(\alpha_1\wedge\cdots\widehat{\alpha_i}\cdots\wedge\alpha_k),
>  $$
>  donde el sombrero sobre $\alpha_i$ indica que $\alpha_i$ se ha omitido.
>- Concluir que la multiplicacion interior $\iota_v$ es una antiderivacion de $\Lambda^k(V^*)$, es decir,
>  $$
>  \iota_v(\omega\wedge\eta)=\iota_v(\omega)\wedge\eta+(-1)^k\omega\wedge\iota_v(\eta)
>  $$
>  para todas $\omega\in\Lambda^k(V^*)$, $\eta\in\Lambda^\ell(V^*)$.
>
>>[!Proof]-
>>Para $a_1,\ldots,a_k\in\Lambda^1(V^*)$,
>>$$
>>\iota_v(a_1\wedge\cdots\wedge a_k)
>>=\sum_{i=1}^k(-1)^{i-1}a_i(v)\,
>>a_1\wedge\cdots\widehat{a_i}\cdots\wedge a_k.
>>$$
>>Se obtiene evaluando el producto exterior en $(v,u_1,\ldots,u_{k-1})$ y separando los terminos segun que $a_i$ actue sobre $v$.
>>
>>Por linealidad basta probar la identidad en formas descomponibles. Aplicando la formula anterior y separando los indices que pertenecen a $\omega$ de los que pertenecen a $\eta$, resulta
>>$$
>>\iota_v(\omega\wedge\eta)=\iota_v\omega\wedge\eta+(-1)^k\omega\wedge\iota_v\eta,
>>$$
>>para $\omega\in\Lambda^k(V^*)$. Es decir, $\iota_v$ es una antiderivacion de grado $-1$.

### Ejercicio 7

>[!Exercise] La operacion pullback
> Sea $T:V\to W$ una transformacion lineal, donde $V$ y $W$ son espacios vectoriales reales de dimension finita. Se define $T^*_{k}:\Lambda^k(W^*)\to\Lambda^k(V^*)$ mediante
>$$
>T_{k}^*\sigma(v_1,\ldots,v_k)=\sigma(Tv_1,\ldots,Tv_k),\qquad \sigma\in\Lambda^k(W^*),\ v_1,\ldots,v_k\in V.
>$$
>
>- (a) Probar que $T^*$ es lineal y que $T_{k+l}^*(\sigma\wedge\tau)=T^*\sigma\wedge T^*\tau$, con $\sigma\in\Lambda^k(W^*)$ y $\tau\in\Lambda^\ell(W^*)$.
>- (b) Sean $\lambda_1,\ldots,\lambda_k\in\Lambda^1(W^*)$. Mostrar que $T^*(\lambda_1\wedge\cdots\wedge\lambda_k)(v_1,\ldots,v_k)$ es igual a $\det(\lambda_i(Tv_j))$.
>- (c) Si $W=V$ y $n$ es la dimension de $V$, verificar que $T^*$ es igual a $(\det T)\operatorname{Id}_{\Lambda^n(V^*)}$.
>
>>[!Proof]-
>>- **Linealidad**
>>	1. Aprovechando el hecho que sabemos que $\Lambda^{k}(V^{*})$ es espacio vectorial vemos $$\begin{align}T^{*}(\alpha +c\beta)(v_{1},\ldots,v_{k})&=(\alpha +c\beta)(Tv_{1},\ldots,Tv_{k})\\&=\alpha (Tv_{1},\ldots Tv_{k})+c\beta(Tv_{1},\ldots,v_{k})\\&=T^{*}(\alpha)(v_{1},\ldots,v_{k})+cT^{*}(\beta)(v_{1},\ldots,v_{k})\end{align}$$
>>	2. Entonces $T^{*}(\alpha +c\beta)=T^{*}\alpha +cT^{*}(\beta)$ 
>>- **Compatibilidad con wedge**
>>	1. Let $\sigma\in\Lambda^k(W^*)$ and $\tau\in\Lambda^\ell(W^*)$. We want to prove that $$T^*(\sigma\wedge\tau)=T^*\sigma\wedge T^*\tau.$$
>>	2. Evaluate both sides on arbitrary vectors $v_1,\ldots,v_{k+\ell}\in V$. By definition of pullback, $$T^*(\sigma\wedge\tau)(v_1,\ldots,v_{k+\ell})=(\sigma\wedge\tau)(Tv_1,\ldots,Tv_{k+\ell}).$$  
>>	3. Using the definition of the wedge product, $$(\sigma\wedge\tau)(Tv_1,\ldots,Tv_{k+\ell})=\frac{1}{k!\ell!}\sum_{\pi\in S_{k+\ell}}\operatorname{sgn}(\pi)\sigma(Tv_{\pi(1)},\ldots,Tv_{\pi(k)})\tau(Tv_{\pi(k+1)},\ldots,Tv_{\pi(k+\ell)}).$$
>>	4. But, by definition of pullback again, $$\sigma(Tv_{\pi(1)},\ldots,Tv_{\pi(k)})=(T^*\sigma)(v_{\pi(1)},\ldots,v_{\pi(k)})$$  and $$\tau(Tv_{\pi(k+1)},\ldots,Tv_{\pi(k+\ell)})=(T^*\tau)(v_{\pi(k+1)},\ldots,v_{\pi(k+\ell)}).$$
>>	5. Therefore  $$T^*(\sigma\wedge\tau)(v_1,\ldots,v_{k+\ell})=\frac{1}{k!\ell!}\sum_{\pi\in S_{k+\ell}}\operatorname{sgn}(\pi)(T^*\sigma)(v_{\pi(1)},\ldots,v_{\pi(k)})(T^*\tau)(v_{\pi(k+1)},\ldots,v_{\pi(k+\ell)}).$$
>>	6. The right-hand side is exactly the definition of  $$(T^*\sigma\wedge T^*\tau)(v_1,\ldots,v_{k+\ell}).$$  
>>	7. Hece, for all $v_1,\ldots,v_{k+\ell}\in V$, $$T^*(\sigma\wedge\tau)(v_1,\ldots,v_{k+\ell})=(T^*\sigma\wedge T^*\tau)(v_1,\ldots,v_{k+\ell}).$$
>>	8. Thus $$T^*(\sigma\wedge\tau)=T^*\sigma\wedge T^*\tau.$$
>>- (c)
>>	1. Por la identidad notamos que estamos en el caso $$T_{n}^*\sigma(v_1,\ldots,v_n)=\sigma(Tv_1,\ldots,Tv_k),\qquad \sigma\in\Lambda^n(W^*),\ v_1,\ldots,v_n\in V$$
>>	2. Luego dado $\omega\in \Lambda^{n}(W^{*})$ tenemos que $\omega=ce^{1}\wedge\ldots\wedge e^{n}$ 
>>	3. Luego notamos que por ser base $e^{1},\ldots,e^{n}$ entonces $$T^{*}\omega=a\omega$$  
>>	4. Luego $$T^{*}(\omega)(e_{1},\ldots e_{n})=a\omega(e_{1},\ldots,e_{n})=a$$ y ademas $$T^{*}(w)(e_{1},\ldots e_{n})=cT^{*}(e^{1} \wedge\ldots\wedge e^{n})(e_{1},\ldots, e_{n})$$
>>	5. Por otro lado$$T^{*}(e^{1}\wedge\ldots\wedge e^{n})(e_{1},\ldots e_{n})=e^{1}\wedge\ldots\wedge e^{n} \ .(Te_{1},\ldots,Te_{n})=\det(e^{i} (Te_{j}))=\det (T)$$
>>	6. Entonces $$a=T^{*}(\omega)(e_{1},\ldots e_{n}) =c\det(T)$$
>>	7. Con lo cual $$T^{*}\omega=c\det(T)\omega=\det(T)\operatorname{Id}_{\Lambda^n(V^*)}\omega$$ 
>>	8. Como esto vale para cualquier $\omega$ finalmente tenemos $$T^{*}=\det(T)Id_{\Lambda^{n} (V^{*} )}$$

### Ejercicio 8 (Opcional)

>[!Exercise]
>(Opcional) Un par $(V,\omega)$ se dice espacio vectorial simplectico si $V$ es un espacio vectorial real y $\omega\in\Lambda^2(V^*)$ es una forma bilineal antisimetrica no degenerada; la cual es llamada una forma simplectica sobre $V$. Mostrar que la existencia de una tal $\omega$ implica que la dimension de $V$ debe ser par, y reciprocamente, mostrar que todo espacio vectorial de dimension par admite una forma simplectica.
>
>>[!Proof]-
>>Si $\omega$ es simplectica, la aplicacion
>>$$
>>V\to V^*,\qquad v\mapsto \omega(v,\cdot)
>>$$
>>es un isomorfismo y su matriz en cualquier base es antisimetrica e invertible. Toda matriz antisimetrica de orden impar tiene determinante $0$, porque
>>$$
>>\det A=\det A^T=\det(-A)=(-1)^n\det A.
>>$$
>>Si $n$ es impar, $\det A=-\det A$, luego $\det A=0$. Por tanto $\dim V$ debe ser par.
>>
>>Reciprocamente, si $\dim V=2m$, eligiendo una base $e_1,\ldots,e_m,f_1,\ldots,f_m$ y su dual, la forma
>>$$
>>\omega=\sum_{i=1}^m e^i\wedge f^i
>>$$
>>es antisimetrica y no degenerada. Luego todo espacio vectorial real de dimension par admite forma simplectica.

### Ejercicio 9 (Opcional) 

>[!Exercise]
>(Opcional) Sea $V$ espacio vectorial real y sea $\xi\in\Lambda^2(V^*)$. Probar que existe una base de $V$, $u_1,\ldots,u_r,v_1,\ldots,v_s,w_1,\ldots,w_s$, tal que $\xi(u_k,\cdot)=0$ para $k=1,\ldots,r$, $\xi(v_i,v_j)=0=\xi(w_i,w_j)$ y $\xi(v_i,w_j)=\delta(i,j)$, para todo $1\le i,j\le s$.
>
>>[!Proof]-
>>Sea $\varepsilon\in\Lambda^2(V^*)$. Si $\varepsilon=0$, cualquier base sirve con $s=0$. Si no, elija $v_1,w_1$ con $\varepsilon(v_1,w_1)\ne0$ y reescale para que valga $1$. El subespacio $P_1=\langle v_1,w_1\rangle$ tiene complemento ortogonal
>>$$
>>P_1^\perp=\{x:\varepsilon(x,v_1)=\varepsilon(x,w_1)=0\}.
>>$$
>>Como la restriccion a $P_1$ es no degenerada, $V=P_1\oplus P_1^\perp$. Repitiendo el procedimiento en $P_1^\perp$, se obtienen pares $(v_i,w_i)$. Al final queda el radical
>>$$
>>R=\{u:\varepsilon(u,\cdot)=0\},
>>$$
>>con base $u_1,\ldots,u_r$. La base resultante cumple
>>$$
>>\varepsilon(u_k,\cdot)=0,\qquad \varepsilon(v_i,v_j)=0=\varepsilon(w_i,w_j),\qquad
>>\varepsilon(v_i,w_j)=\delta_{ij}.
>>$$

### Ejercicio 10 (Opcional) 

>[!Exercise]
>(Opcional) Sea $V$ un espacio vectorial de dimension par $2n$. Mostrar que una $\omega\in\Lambda^2(V^*)$ es no degenerada si y solo si
>$$
>\omega^n=\underbrace{\omega\wedge\cdots\wedge\omega}_{n\text{ veces}}
>$$
>es no nulo.
>
>>[!Proof]-
>>Sea $\dim V=2n$. Si $\omega$ es no degenerada, por el ejercicio anterior existe una base simplectica en la cual
>>$$
>>\omega=\sum_{i=1}^n v^i\wedge w^i.
>>$$
>>Entonces
>>$$
>>\omega^n=n!\,v^1\wedge w^1\wedge\cdots\wedge v^n\wedge w^n\ne0.
>>$$
>>
>>Si $\omega$ es degenerada, existe $0\ne v\in V$ tal que $\iota_v\omega=0$. Entonces
>>$$
>>\iota_v(\omega^n)=n(\iota_v\omega)\wedge\omega^{n-1}=0.
>>$$
>>Pero una forma de volumen no nula tiene contraccion no nula con todo vector no nulo. Luego $\omega^n=0$. Por tanto $\omega$ es no degenerada si y solo si $\omega^n\ne0$.

### Ejercicio 11

>[!Exercise]
>Sea $M$ una variedad diferenciable de dimension $m$. Mostrar que la nocion de que una $k$-forma en $M$ sea suave no depende de la eleccion de sistema coordenado (considerar solo el caso $k=2$).
>
>>[!Proof]-
>>1. Basta hacerlo para $2$-formas. En coordenadas $x=(x_1,\ldots,x_{m})$ $$\omega=\sum_{i<j}a_{ij}\,dx_{i}\wedge dx_{j}$$ esto por [[GS - Teo21#^70585b|Coordenadas de k-formas]]
>>2. Si $y=(y^1,\ldots,y^m)$ es otro sistema, entonces tenemos otra base del $T_{p}^{*}M$ por lo tanto $$dx_{i}=\sum_j^{m} \frac{\partial x_{i}}{\partial y_{j}}\,dy_{j}$$ las coordenadas salen evaluando en $\frac{\partial}{\partial y_{j}}$
>>3. Obviamente todo esto vale para cualquier $p\in W$ donde este $W=U_{x}\cap U_{y}$ con los abiertos de las cartas
>>4. Ahora recordamos que suma de $k$-tensores es $k$-tensor. Y usando la "distributividad" del producto cuña
>>5. Por tanto $$dx_{i}\wedge dx_{j}=\left(\sum_\alpha ^{m} \frac{\partial x_{i}}{\partial y_{\alpha }}\,dy_{\alpha }\right)\wedge \left(\sum_\beta ^{m} \frac{\partial x_{j}}{\partial y_{\beta }}\,dy_{\beta }\right)=\sum^{m}_{\alpha ,\beta =1} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}\,dy_{\beta }\wedge dy_{\alpha }$$ (obviamente hay que evaluar en puntos de $W$ para hacer el producto cuña [[GS - Teo21#^76ed6d|Construccion de Omega^*(M)]] y notar que $\frac{\partial x_{i}}{\partial y_{j}}(p)\in \mathbb{R}$)
>>6. Ademas $$\sum^{m}_{\alpha ,\beta =1} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}\,dy_{\beta }\wedge dy_{\alpha }=\sum^{m}_{\alpha <\beta } \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}\,dy_{\beta }\wedge dy_{\alpha }$$ esto es por que siempre hay dos terminos que tienen casi el mismo producto cuña solo que dandolo vuelta, por eso aparede el menos. Y caundo los indices son exatamente el mismo se cancela el producto cuña por eso aparece el menor o igual en la sumatoria
>>7. Luego $$\omega=\sum^{m}_{i<j} a_{ij}\sum^{m}_{\alpha <\beta } \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}\,dy_{\beta }\wedge dy_{\alpha }=\sum^{m}_{\alpha <\beta }\left[\sum^{m}_{i<j}a_{ij} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}\right]\,dy_{\beta }\wedge dy_{\alpha }$$
>>8. Por lo tanto tengo nuevos coeficientes $$b_{\alpha \beta }=\sum^{m}_{i<j}a_{ij} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}$$  en el nuevo marco coordenado $\{ dy_{i_{1}}\wedge dy_{i_{2}} \}_{i_{1}<i_{2}<m}$ y a $\omega$ escrito en esos coeficientes. Me gustaria ver que sigue siendo suave. Esto mostraria que si es suave en un sistema coordenado lo es en cualquiera
>>9. Pero los nuevos coeficientes son suaves para todo $p\in W$. Porque $a_{ij}$ es suave para todo $p\in W$ y las derivadas parciales tambien lo son por que son la derivada de $\psi\circ\varphi ^{-1}$ (el cambio de coordenadas) que es suave.

### Ejercicio 12

>[!Exercise]
>Sea $M$ una variedad diferenciable y $\omega$ una $k$-forma en $M$. Probar que las siguientes afirmaciones son equivalentes, y en tal caso la $k$-forma $\omega$ se dice diferenciable:
>
>- (a) Para $X_1,\ldots,X_k\in\mathfrak X(M)$ arbitrarios, se tiene que $\omega(X_1,\ldots,X_k)\in C^\infty(M)$, donde $\omega(X_1,\ldots,X_k)$ es la funcion dada por $$\omega(X_1,\ldots,X_k)(p)=\omega_p(X_1|_p,\ldots,X_k|_p),\qquad p\in M$$
>- (b) Para todo entorno coordenado $(U,(x^1,\ldots,x^n))$ de $M$, se tiene $$\omega|_U=\sum_{i_1<\cdots<i_k}C_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad C_{i_1\cdots i_k}\in C^\infty(U)$$
>
>>[!Proof]-
>>- $(b\Rightarrow a)$
>>1. Tomamos un $p\in M$ ahora tenemos $(U,\phi=x_{1},\ldots,x_{n})$ carta entonces por (b) $$\omega|_U=\sum_{i_1<\cdots<i_k}C_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad C_{i_1\cdots i_k}\in C^\infty(U)$$
>>2. Ademas $$X_{i}=\sum^{n}_{j=1}a_{ij}\frac{\partial}{\partial x_{j}}$$
>>3. Luego $$\omega|_{U}(X_{1},\ldots X_{k})=\sum_{i_1<\cdots<i_k}C_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\left(\sum^{n}_{j=1}a_{1j}\frac{\partial}{\partial x_{j}},\ldots,\sum^{n}_{j=1}a_{kj}\frac{\partial}{\partial x_{j}}\right)$$
>>4. Ahora notamos que $$\begin{align} dx_{i_1}\wedge\cdots\wedge dx_{i_k}\left(\sum^{n}_{j=1}a_{1j}\frac{\partial}{\partial x_{j}},\ldots,\sum^{n}_{j=1}a_{kj}\frac{\partial}{\partial x_{j}}\right)&=\det\left( dx_{i_{r}}\left( \sum^{n}_{j=1}a_{sj}\frac{\partial}{\partial x_{j}} \right) \right)_{r,s=1}^{k} \\ & =\det\left( \sum^{n}_{j=1} a_{sj}dx_{i_{r}}\left(\frac{\partial}{\partial x_{j}}\right) \right)_{r,s=1}^{k}\\&=\det(a_{s i_{r}})_{r,s=1}^{k} \end{align}$$
>>5. Pero entonces $$\omega|_{U}(X_{1},\ldots,X_{k})(p)=(\omega|_{U})_{p}(X_{1},\ldots,X_{k})=\sum_{i_{1}<\ldots<i_{k}} C_{i_{1}\ldots i_{k}}(p)\det(a_{s i_{r}}(p))$$
>>6. Pero $C_{i_{1}\ldots i_{k}}$ es suave como funcion de $p$ por hipotesis, lo mismo para $\det(a_{s i_{r}})_{r,s=1}^{k}$ como funcion de $p$ por que $X_{i}$ son campos suaves. Y $\det$ es un polinomio de sus entradas.
>>7. Entonces $\omega|_{U}(X_{1},\ldots,X_{k})(p)$ es suave y obviamente como esto lo podemos hacer para cualquier $p$ tenemosq ue $$\omega(X_{1},\ldots,X_{k})(p)$$ es suave
>>- $(a\Rightarrow b)$
>>1. Tomamos una carta $(U,x_{1},\ldots,x_{n})$ como $B_k=\{dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p:1\le i_1<\cdots<i_k\le n\}$ es base de $\Lambda^{k}(T_{p}^{*}M)$ tenemos $$\omega|_{U}=\sum_{i_{1}<\ldots<i_{k}} C_{i_{1}\ldots i_{k}}\ .dx_{i_{1}}\wedge\ldots\wedge dx_{i_{k}}$$ con $C_{i_{1}\ldots i_{k}}:U \rightarrow\mathbb{R}$. Bastaria mostrar que son suaves
>>2. Ahora tenemos que $$\begin{align}\omega|_{U}\left(\frac{\partial}{\partial x_{j_{1}}},\ldots, \frac{\partial}{\partial x_{j_{k}}}\right)(p)& =\omega_{p}\left(\frac{\partial}{\partial x_{j_{1}}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{j_{k}}}\bigg|_{p}\right)\\&=\sum^{\infty}_{i_{1}<\ldots<i_{k}}C_{i_{1}\ldots i_{k}}(p) \ .dx_{i_{1}}\wedge\ldots\wedge dx_{i_{k}}\left(\frac{\partial}{\partial x_{j_{1}}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{j_{k}}}\bigg|_{p}\right)\\&=C_{I}(p)\end{align}$$ con $I=J$ osea el unico caso donde el determinante no es $0$ que es cuando coinciden los multi indices, $j_{1}=i_{1}\ldots j_{k}=i_{k}$
>>3. Ahora lo unico que tenemos que corregir es que $\frac{\partial}{\partial x_{i}}$ son campos suaves sobre $U$  y para usar la hipotesis las necesito suaves sobre $M$
>>4. Tomamos $q\in U$ y ahora tenemos $V_{q}\subseteq U$ abierto de $q$ y $f\in C^{\infty}(M)$ tal que $f|_{\overline{V_{q}}}\equiv 1$ y $\operatorname{supp}f\subseteq U$ y defino $$X_{i}(p)=\begin{cases} f(p)\frac{\partial}{\partial x_{i}}\bigg|_{p} & p\in U \\0 & x\not\in U \end{cases}$$ que sabemos es un campo suave sobre todo $M$ y cerca de $p$ (osea en algun abierto dentro de $\overline{V_{q}}$, por ejemplo $V_{q}$ ) vale exactamente $\frac{\partial}{\partial x_{i}}\bigg|_{q}$
>>5. Luego haciendo la misma cuenta que en 2. pero con $X_{i}$ tenemos que $$\sum_{i_{1}<\ldots<i_{k}} C_{i_{1}\ldots i_{k}}(q)$$ es suave para todo $q\in V_{p}$
>>6. Y como esto lo podemos hacer para cualquier $q\in U$ es suave en todo $U$ como queriamos

^174f5d

### Ejercicio 13

>[!Exercise]
>Probar que si $\omega\in\Omega^k(M)$ y $\eta\in\Omega^\ell(M)$, entonces $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.
>
>>[!Proof]-
>>1. En coordenadas, si $$\omega=\sum_I a_I\,dx^I,\qquad \eta=\sum_J b_J\,dx^J$$
>>2.  entonces $$\omega\wedge\eta=\sum_{I,J}a_Ib_J\,dx^I\wedge dx^J$$ 
>>3. obviamente los términos que tienen diferenciales repetidos darán $0$ y hay que reordenar lo que posiblemente meta un cambio de signo. Pero nada de esto cambia que los coeficientes $a_Ib_J$ son suaves, luego $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.

^5374b2

### Ejercicio 14

>[!Exercise]
>Sea $M$ una variedad diferenciable de dimension $m$. Dadas $\omega\in\Omega^k(M)$ y $\theta\in\Omega^\ell(M)$, mostrar que $$d_{k+\ell}(\omega\wedge\theta)=(d_k\omega)\wedge\theta+(-1)^k\omega\wedge(d^\ell\theta)$$
>
>>[!Proof]-
>>1. En un entorno coordenado escribimos $$\omega=\sum_I a_I\,dx^I,\qquad \theta=\sum_J b_J\,dx^J$$
>>2. Como $d(dx^i)=0$ al aplicar la regla 3. De [[GS - Teo21#^f7b034]] el segundo término es $0$ entonces $$\begin{align}d(a_Ib_J\,dx^I\wedge dx^J)&=d(a_Ib_J)\wedge dx^I\wedge dx^J\\& =(da_I)b_J\wedge dx^I\wedge dx^J +a_I(db_J)\wedge dx^I\wedge dx^J\end{align}$$ para el segundo igual recordamos que las $0$-formas son funciones y por ende usamos la regla de derivar producto
>>3. Es directo ver que el primer término es $d_{k}\omega\wedge\theta$ por que $b_{J}$ es una $0$-forma entonces conmuta sin meter signo
>>4. El segundo término cumple $$a_I(db_J)\wedge dx^I\wedge dx^J=(-1)^{k} .a_{I}\wedge dx^{I} \wedge db_{j}\wedge dx^{J}=(-1)^{k} \omega \wedge d\omega$$
>>5. Moviendo $db_J$ a traves de $dx^I$ aparece el signo $(-1)^k$. Sumando $$d(\omega\wedge\theta)=d\omega\wedge\theta+(-1)^k\omega\wedge d\theta$$
>>6. En este ejercicio $d_{s}$ hace referencia al dominio $\Omega^{s}(M)$ de $d$  

### Ejercicio 15

>[!Exercise]
>- (a) Encontrar la diferencial exterior de $\varphi$ y $\eta$ en $\Omega^2(\mathbb R^3)$ dadas por $\varphi=\cos(xy^2)\,dx\wedge dz$ y $\omega=x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy$.
>- (b) Encontrar una $(n-1)$-forma $\epsilon$ tal que $d^{n-1}\epsilon=dx_1\wedge\cdots\wedge dx_n\in\Omega^n(\mathbb R^n)$.
>
>>[!Proof]-
>>- (a)
>>1. Podemos pensar a $$\cos(xy^{2})=\cos\circ f(x,y,x)=h(x,y,z):\mathbb{R}^{3}\rightarrow \mathbb{R}$$ donde $f(x,y,z)=xy^{2}$
>>2. Entonces $$d(\cos(xy^{2}))_{p}:T_{p}\mathbb{R}^{3} \rightarrow T_{\cos(p_{1}p_{2}^{2})}\mathbb{R}\simeq\mathbb{R}$$
>>3. Entonces por la identificacion y usando la carta canonica  $$d(\cos(xy^{2}))_{p}=a_{1}dx +a_{2}dy+a_{3}dz$$
>>4. Calculando coordenadas $$a_{1}=\frac{\partial}{\partial x}\cos(xy^{2})=-y^{2}\sin(xy^{2})\qquad a_{2}=\frac{\partial}{\partial y}\cos(xy^{2})=-2xy\sin(xy^{2})\qquad a_{3}=\frac{\partial}{\partial z}\cos(xy^{2})=0$$ (en realidad deberian ser evaluadas en $p$ pero es lo mismo verlas antes de evaluar)
>>5. Finalmente $$(d\cos(xy^{2}))=-y^{2}\sin(xy^{2})dx -2xy\sin(xy^{2})dy$$
>>6. Entonces $$d\varphi=(d\cos(xy^{2}))=-2xy\sin(xy^{2})dy\wedge dx\wedge dz=2xy\sin(xy^{2})dx\wedge dy\wedge dz$$
>>7. Haciendo algo analogo al paso 2. nos queda que $$d\omega=dx\wedge dy\wedge dz+ dy\wedge dz\wedge dx+ dz\wedge dx\wedge dy=3dx\wedge dy \wedge dz$$
>>- (b)
>>1. La mas simple es: $$\omega=x_{1}dx_{2}\wedge\ldots\wedge dx_{n}$$

### Ejercicio 16

>[!Exercise]
>Sea $\omega\in\Omega^1(M)$ y sean $X,Y\in\mathfrak{X}(M)$. Probar que $$d\omega(X,Y)=X(\omega(Y))-Y(\omega(X))-\omega([X,Y]).$$
>
>>[!Proof]-
>>1. Sea $(U,(x^1,\ldots,x^n))$ una carta suave y escribamos $$\omega=\sum_i c_i\,dx^i.$$
>>2. Como $$d\omega=\sum_i dc_i\wedge dx^i,$$ tenemos $$d\omega(X,Y)=\sum_i\left(X(c_i)Y(x^i)-Y(c_i)X(x^i)\right).$$ donde usamos que $(dc_{i})X=X(c_{i})$ etc 
>>3. El otro lado usando 1. $$\omega(Y)=\sum_i c_iY(x^i),\qquad \omega(X)=\sum_i c_iX(x^i).$$
>>4. Por linealidad de $X$ y la regla de Leibniz, $$\begin{aligned}X(\omega(Y))&=X\left(\sum_i c_iY(x^i)\right)\\&=\sum_i X\left(c_iY(x^i)\right)\\&=\sum_i\left(X(c_i)Y(x^i)+c_iX(Y(x^i))\right).\end{aligned}$$
>>5. De la misma manera, $$\begin{aligned}Y(\omega(X))&=Y\left(\sum_i c_iX(x^i)\right)\\&=\sum_i Y\left(c_iX(x^i)\right)\\&=\sum_i\left(Y(c_i)X(x^i)+c_iY(X(x^i))\right).\end{aligned}$$
>>6. Por lo tanto, $$\begin{aligned}X(\omega(Y))-Y(\omega(X))&=\sum_i\left(X(c_i)Y(x^i)-Y(c_i)X(x^i)\right)\\&\quad+\sum_i c_i\left(X(Y(x^i))-Y(X(x^i))\right).\end{aligned}$$
>>7. Como $$[X,Y](x^i)=X(Y(x^i))-Y(X(x^i)),$$ resulta $$\omega([X,Y])=\sum_{i=1}c_{i}dx^{i}[X,Y]  =\sum_i c_i\left(X(Y(x^i))-Y(X(x^i))\right).$$
>>8. Restando este término, obtenemos $$X(\omega(Y))-Y(\omega(X))-\omega([X,Y])=\sum_i\left(X(c_i)Y(x^i)-Y(c_i)X(x^i)\right)=d\omega(X,Y).$$

### Ejercicio 17

>[!Exercise]
>Sea $F:M\to N$ una función suave y sea $\theta\in\Omega^k(N)$. Mostrar que $F^*\theta\in\Omega^k(M)$ y que $d^k(F^*\theta)=F^*(d^k\theta)$
>
>>[!Proof]-
>>- $F^{*}\theta\in \Omega^{k}(M)$  
>>	1. Primero probamos que $F^*\theta\in\Omega^k(M)$. Sea $\theta=\sum_I a_I\,dy^{i_1}\wedge\cdots\wedge dy^{i_k}$.
>>	2. Por linealidad del pullback, $$F^*\theta=\sum_I F^*\!\left(a_I\,dy^{i_1}\wedge\cdots\wedge dy^{i_k}\right).$$
>>	3. Afirmamos que $F^*(f\omega)=(f\circ F)\,F^*(\omega)$. En efecto, para todo $p\in M$ y $v_1,\ldots,v_k\in T_pM$, $$(F^*(f\omega))_p(v_1,\ldots,v_k)=(f\omega)_{F(p)}(dF_p(v_1),\ldots,dF_p(v_k)).$$  
>>	4. Como $(f\omega)_{F(p)}=f(F(p))\,\omega_{F(p)}$, obtenemos $$(F^* f\omega))_p(v_1,\ldots,v_k)=f(F(p))\,\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_k)).$$
>>	5. Como $f(F(p))=(f\circ F)(p)$, $$(F^*(f\omega))_p(v_1,\ldots,v_k)=(f\circ F)(p)\,(F^*\omega)_p(v_1,\ldots,v_k).$$
>>	6. Aplicando esta propiedad,  
>>	$$F^*\theta=\sum_I (a_I\circ F)\,F^*\!\left(dy^{i_1}\wedge\cdots\wedge dy^{i_k}\right).$$
>>	7. Como el pullback preserva productos wedge, $F^*(\alpha_1\wedge\cdots\wedge\alpha_k)=F^*(\alpha_1)\wedge\cdots\wedge F^*(\alpha_k)$, obtenemos $$F^*\theta=\sum_I (a_I\circ F)\,F^*(dy^{i_1})\wedge\cdots\wedge F^*(dy^{i_k}).$$
>>	8. Afirmamos que $F^*(dy^j)=d(y^j\circ F)$. En efecto, para todo $p\in M$ y $v\in T_pM$, $$(F^*(dy^j))_p(v)=(dy^j)_{F(p)}(dF_p(v))=dF_p(v)(y^j)=v(y^j\circ F).$$ primer igual por definicion de $F^{*}$, segundo y tercero por definicion de diferencial 
>>	9. Ahora usando este resultado $$F^*\theta=\sum_I (a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F).$$
>>	10. Los coeficientes $(a_I\circ F)$ son suaves y las formas $d(y^j\circ F)$ son $1$-formas suaves sobre $M$. Por lo tanto, $$F^*\theta\in\Omega^k(M).$$
>>- $d^k(F^*\theta)=F^*(d^k\theta).$ 
>>	1. Por la primera parte, $$F^*\theta=\sum_I (a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F).$$
>>	2. Aplicando $d$ y usando la regla de Leibniz para derivada exterior, $$d(F^*\theta)=\sum_I d(a_I\circ F)\wedge d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F).$$
>>	3. Afirmamos que $d(a_I\circ F)=F^*(da_I)$ sale analogo a paso 8.
>>	4. Sustituyendo en la expresión de $d(F^*\theta)$ y usando que $d(y^{i_j}\circ F)=F^*(dy^{i_j})$, $$d(F^*\theta)=\sum_I F^*(da_I)\wedge F^*(dy^{i_1})\wedge\cdots\wedge F^*(dy^{i_k}).$$
>>	5. Como el pullback preserva productos wedge, $$d(F^*\theta)=\sum_I F^*\!\left(da_I\wedge dy^{i_1}\wedge\cdots\wedge dy^{i_k}\right).$$
>>	6. Por linealidad del pullback, $$d(F^*\theta)=F^*\!\left(\sum_I da_I\wedge dy^{i_1}\wedge\cdots\wedge dy^{i_k}\right).$$
>>	7. Pero $$d\theta=\sum_I da_I\wedge dy^{i_1}\wedge\cdots\wedge dy^{i_k}.$$
>>	8. Por lo tanto, $$d(F^*\theta)=F^*(d\theta).$$

### Ejercicio 18

>[!Exercise]
>Una forma diferencial $\alpha$ de grado $k$ se dice cerrada si $d\alpha=0$. La forma $\alpha$ se dice exacta si existe una forma $\beta$ tal que $d\beta=\alpha$.
>
>- (a) Mostrar que toda forma exacta es cerrada y que toda $n$-forma en una variedad de dimension $n$ es cerrada.
>- (b) Mostrar que el producto exterior de dos formas cerradas es una forma cerrada y que el producto exterior de una forma cerrada con una exacta es una forma exacta.
>- (c) Mostrar que la $1$-forma $\theta=x\,dy$ en $\mathbb R^2$ no es exacta. Mas aun, en ningun abierto $U$ esta definida una funcion $f$ tal que $df=\theta$ en $U$.
>
>>[!Proof]-
>>- (a)
>>	1. Si $\alpha=d\beta$, entonces $d\alpha=d^2\beta=0$. Toda $n$-forma en una variedad de dimension $n$ es cerrada porque su diferencial seria una $(n+1)$-forma, y $\Omega^{n+1}(M)=0$.
>>- (b)
>>	1. Si $d\alpha=d\beta=0$, entonces $$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta=0$$
>>	2. Si $\beta=d\gamma$ y $d\alpha=0$, entonces $$(-1)^{\deg\alpha}\alpha\wedge\beta=(-1)^{\deg\alpha}\alpha\wedge d\gamma=d(\alpha\wedge\gamma)$$
>>	3. Entonces $$\alpha \wedge\beta=d((-1)^{\deg\alpha}\alpha \wedge \gamma)$$ con lo cual es exacta
>>- (c) 
>>	1. Para $\theta=x\,dy$ en $\mathbb R^2$, $$d\theta=dx\wedge dy\ne0$$ por lo tanto no es cerrada, entonces por (a) no puede ser exacta
>>	2. Si existiera $f$ en algun abierto $U$ con $df=\theta|_{U}$, entonces $$(dx\wedge dy)|_{U}=d_{U}\theta=d^2_{U}f=0$$ en $U$, contradiccion por que $(dx\wedge dy)$ es distinto de $0$ entodos lados 

### Ejercicio 19

>[!Exercise]
>Considerar en la circunferencia $S^1$ los sistemas coordenados canonicos $s=\phi^{-1}$ y $t=\psi^{-1}$ con imagenes los intervalos $(0,2\pi)$ y $(-\pi,\pi)$, respectivamente. Mostrar que $ds$, $dt$ definen bien una $1$-forma suave $\theta$ en $S^1$. Probar que $\theta$ es localmente exacta, pero no exacta.
>
>>[!Proof]-
>>- 1era parte
>>	1. Define the two open sets $$U=S^1\setminus\{(1,0)\},\qquad V=S^1\setminus\{(-1,0)\}.$$
>>	2. The canonical angle coordinate functions are $$s:U\to(0,2\pi),\qquad t:V\to(-\pi,\pi).$$ Therefore, locally we have the $1$-forms $$ds\in\Omega^1(U),\qquad dt\in\Omega^1(V).$$
>>	3. We want to define a global $1$-form $\theta\in\Omega^1(S^1)$ by $$\theta|_U=ds,\qquad \theta|_V=dt.$$
>>	4. To prove that this definition is valid, we must check that the two local formulas agree on the overlap $$U\cap V=S^1\setminus\{(1,0),(-1,0)\}.$$
>>	5. Vamos a tomar $s$ como carta de $U\cap V$ que anda bien por que es restriccion de carta. Entonces tenemos $\{ \frac{\partial}{\partial s} \}$ como base del plano tangente $TS$
>>	6. Sea primero $p$ un punto de la componente superior de la superposición. En un entorno de $p$ las coordenadas satisfacen $$t=s.$$
>>	7. Entonces $$ds\!\left(\frac{\partial}{\partial s}\right)=\frac{\partial}{\partial s}s=\frac{\partial}{\partial r}s\circ s^{-1}=1 \quad \text{ analogamente } \quad \  dt\!\left(\frac{\partial}{\partial s}\right)=\frac{\partial}{\partial s}(t)=\frac{\partial}{\partial s}(s)=1.$$
>>	8. Por lo tanto, $$dt\!\left(\frac{\partial}{\partial s}\right)=ds\!\left(\frac{\partial}{\partial s}\right).$$
>>	9. Como $T_pS^1$ tiene dimensión $1$, concluimos que $dt=ds$.
>>	10. Sea ahora $p$ un punto de la componente inferior de la superposición. Seguimos con la misma carta pero aca $$t=s-2\pi.$$
>>	11. Entonces $$ds\!\left(\frac{\partial}{\partial s}\right)=1.$$
>>	12. Pero esta vez (usando linealidad de vector tangente) $$dt\!\left(\frac{\partial}{\partial s}\right)=\frac{\partial}{\partial s}(t)=\frac{\partial}{\partial s}(s-2\pi)=1.$$
>>	13. Por lo tanto, $$dt\!\left(\frac{\partial}{\partial s}\right)=ds\!\left(\frac{\partial}{\partial s}\right).$$
>>	14. Como $T_pS^1$ tiene dimensión $1$, concluimos que $dt=ds$.
>>	15. Therefore, on all of $U\cap V$ we have $$ds=dt.$$
>>	16. Digamos puedo definir $$\theta_{p}=\begin{cases}(ds)_{p} & p\in U \\ (dt)_{p} & p\in V \end{cases}$$ y esta bien definida
>>	17. Finally, smoothness is local. Since $\theta=ds$ on $U$ and $\theta=dt$ on $V$, and both $ds$ and $dt$ are smooth local $1$-forms, we conclude that $$\theta\in\Omega^1(S^1)$$ is a smooth $1$-form. (Sus coeficientes en esas cartas o en la interseccion son constantemente $1$) 
>>- No global exacta
>>	1. Seguimos con la misma carta coordenada $s:U\subseteq M\rightarrow \mathbb{R}$ que es obviamente una $0$-forma por ser suave  
>>	2. Entonces sus derivdad exterior es claramente una $1$-forma $$ds\in\Omega^1(U).$$
>>	3. Con lo cual $ds$ es exacta y como $ds=\theta|_{U}$ entonces $\theta$ es localmente exacta
>>	4. Supongamos que fuese globalmente exacta. Entonces existiria un $0$-forma osea $f\in C^{\infty}(S^{1})$ tal que $df=\theta$ 
>>	5. Pero $\theta=ds$ entonces $d(f-s)=0$ con lo cual $f-s$ es localmente constante (por [[Glosario#^8cc5ce]]) y como $U$ es conexo entonces $(f-s)(p)=C$ para todo $p\in U$  
>>	6. Pero entonces $f(p)=s(p)+C$ para todo $p\in U$ entonces si agarramos sucesion $p_{n}$ en $U$ que tienda por abajo al $(1,0)$ tenemos que $s(p_{n})\rightarrow 2\pi$ osea $f(p_{n})\rightarrow 2\pi+C$ y si agarramos otra por arriba $s(\widetilde{p}_{n})\rightarrow 0$ osea $f(\widetilde{p}_{n})\rightarrow C$. Lo que es absurdo por que $f$ es continua en todo $S_{1}$  
>>- Localmente exacta
>>	1. Probemos primero que $\theta$ es localmente exacta. Si $p\in U$, entonces en un entorno de $p$ se tiene $$\theta=ds=d(s),$$ donde $s\in\Omega^0(U)$.
>>	2. Si $p\in V$, entonces en un entorno de $p$ se tiene $$\theta=dt=d(t),$$ donde $t\in\Omega^0(V)$.
>>	3. Por lo tanto, alrededor de todo punto de $S^1$, la forma $\theta$ es la derivada exterior de una $0$-forma. Luego $\theta$ es localmente exacta.

### Ejercicio 20

>[!Exercise]
>Sea $U$ un abierto de $\mathbb R^3$. Para un campo suave $u=(a,b,c)$ en $U$ se definen
>$$\operatorname{div}(u)=\frac{\partial a}{\partial x}+\frac{\partial b}{\partial y}+\frac{\partial c}{\partial z},\qquad\operatorname{rot}(u)=\left(\frac{\partial c}{\partial y}-\frac{\partial b}{\partial z},\frac{\partial a}{\partial z}-\frac{\partial c}{\partial x},\frac{\partial b}{\partial x}-\frac{\partial a}{\partial y}\right).$$
>Considerar el diagrama con $F_1(u)=a\,dx+b\,dy+c\,dz$, $F_2(u)=a\,dy\wedge dz+b\,dz\wedge dx+c\,dx\wedge dy$ y $F_3(f)=f\,dx\wedge dy\wedge dz$.
>
>- (a) Para cada $j=1,2,3$, mostrar que $F_j$ es un isomorfismo de $C^\infty(U)$-modulos.
>- (b) Probar que el diagrama es conmutativo y deducir que $\operatorname{div}\operatorname{rot}=0$ y $\operatorname{rot}\operatorname{grad}=0$.
>- (c) Decidir si el campo vectorial $u(x,y,z)=(x,0,0)$ puede ser el rotor de algun campo vectorial en $\mathbb R^3$.
>
>>[!Proof]-
>>- (a)
>>	1. Recordamos que un campo vectorial suave en $U\subset\mathbb R^3$ se escribe como $$u=a\frac{\partial}{\partial x}+b\frac{\partial}{\partial y}+c\frac{\partial}{\partial z},$$ con $a,b,c\in C^\infty(U)$.  
>>	2. Primero probamos que $F_1$ es un isomorfismo de $C^\infty(U)$-módulos. Toda $1$-forma $\alpha\in\Omega^1(U)$ se escribe de manera única como $$\alpha=A\,dx+B\,dy+C\,dz,$$ con $A,B,C\in C^\infty(U)$. Por lo tanto, si $\alpha=A\,dx+B\,dy+C\,dz$, definimos $$F_1^{-1}(\alpha)=A\frac{\partial}{\partial x}+B\frac{\partial}{\partial y}+C\frac{\partial}{\partial z}.$$ Además, para todo $h\in C^\infty(U)$, $$F_1(hu)=F_1(ha,hb,hc)=ha\,dx+hb\,dy+hc\,dz=hF_1(u).$$ Entonces $F_1$ es un isomorfismo de $C^\infty(U)$-módulos.  
>>	3. Probamos ahora que $F_2$ es un isomorfismo. Toda $2$-forma $\beta\in\Omega^2(U)$ se escribe de manera única como $$\beta=A\,dy\wedge dz+B\,dz\wedge dx+C\,dx\wedge dy,$$ con $A,B,C\in C^\infty(U)$. Por lo tanto, si $\beta=A\,dy\wedge dz+B\,dz\wedge dx+C\,dx\wedge dy$, definimos $$F_2^{-1}(\beta)=A\frac{\partial}{\partial x}+B\frac{\partial}{\partial y}+C\frac{\partial}{\partial z}.$$ Además, para todo $h\in C^\infty(U)$, $$F_2(hu)=hF_2(u).$$ Entonces $F_2$ es un isomorfismo de $C^\infty(U)$-módulos.  
>>	4. Probamos ahora que $F_3$ es un isomorfismo. Toda $3$-forma $\omega\in\Omega^3(U)$ se escribe de manera única como $$\omega=f\,dx\wedge dy\wedge dz,$$ con $f\in C^\infty(U)$. Por lo tanto, si $\omega=f\,dx\wedge dy\wedge dz$, definimos $$F_3^{-1}(\omega)=f.$$ Además, para todo $h\in C^\infty(U)$, $$F_3(hf)=hf\,dx\wedge dy\wedge dz=hF_3(f).$$ Entonces $F_3$ es un isomorfismo de $C^\infty(U)$-módulos.  
>>- (b)
>>	1. ![[Pasted image 20260607121743.png]]
>>	2. **Probamos la conmutatividad del primer cuadrado**. Sea $f\in C^\infty(U)$. Entonces $$\operatorname{grad}(f)=\frac{\partial f}{\partial x}\frac{\partial}{\partial x}+\frac{\partial f}{\partial y}\frac{\partial}{\partial y}+\frac{\partial f}{\partial z}\frac{\partial}{\partial z}.$$ Aplicando $F_1$, obtenemos $$F_1(\operatorname{grad}f)=\frac{\partial f}{\partial x}\,dx+\frac{\partial f}{\partial y}\,dy+\frac{\partial f}{\partial z}\,dz=df.$$ Por lo tanto, $$F_1(\operatorname{grad}f)=df.$$  
>>	3. **Probamos la conmutatividad del segundo cuadrado**. Sea $u=(a,b,c)$. Entonces $$F_1(u)=a\,dx+b\,dy+c\,dz.$$ Aplicamos $d$: $$dF_1(u)=d(a\,dx+b\,dy+c\,dz)=da\wedge dx+db\wedge dy+dc\wedge dz.$$ Como $$da=a_x\,dx+a_y\,dy+a_z\,dz,$$ se tiene $$da\wedge dx=a_y\,dy\wedge dx+a_z\,dz\wedge dx=-a_y\,dx\wedge dy+a_z\,dz\wedge dx.$$ Como $$db=b_x\,dx+b_y\,dy+b_z\,dz,$$ se tiene $$db\wedge dy=b_x\,dx\wedge dy+b_z\,dz\wedge dy=b_x\,dx\wedge dy-b_z\,dy\wedge dz.$$ Como $$dc=c_x\,dx+c_y\,dy+c_z\,dz,$$ se tiene $$dc\wedge dz=c_x\,dx\wedge dz+c_y\,dy\wedge dz=-c_x\,dz\wedge dx+c_y\,dy\wedge dz.$$ Sumando, obtenemos $$dF_1(u)=(c_y-b_z)\,dy\wedge dz+(a_z-c_x)\,dz\wedge dx+(b_x-a_y)\,dx\wedge dy.$$ Pero $$\operatorname{rot}(u)=\left(c_y-b_z,a_z-c_x,b_x-a_y\right).$$ Por la definición de $F_2$, resulta $$F_2(\operatorname{rot}u)=(c_y-b_z)\,dy\wedge dz+(a_z-c_x)\,dz\wedge dx+(b_x-a_y)\,dx\wedge dy.$$ Por lo tanto, $$dF_1(u)=F_2(\operatorname{rot}u).$$  
>>	4. **Probamos la conmutatividad del tercer cuadrado**. Sea $u=(a,b,c)$. Entonces $$F_2(u)=a\,dy\wedge dz+b\,dz\wedge dx+c\,dx\wedge dy.$$ Aplicamos $d$: $$dF_2(u)=da\wedge dy\wedge dz+db\wedge dz\wedge dx+dc\wedge dx\wedge dy.$$ Ahora $$da\wedge dy\wedge dz=a_x\,dx\wedge dy\wedge dz,$$ porque los términos con $dy\wedge dy$ y $dz\wedge dz$ son cero. También $$db\wedge dz\wedge dx=b_y\,dy\wedge dz\wedge dx=b_y\,dx\wedge dy\wedge dz,$$ y $$dc\wedge dx\wedge dy=c_z\,dz\wedge dx\wedge dy=c_z\,dx\wedge dy\wedge dz.$$ Por lo tanto, $$dF_2(u)=(a_x+b_y+c_z)\,dx\wedge dy\wedge dz.$$ Pero $$\operatorname{div}(u)=a_x+b_y+c_z.$$ Entonces, por la definición de $F_3$, $$F_3(\operatorname{div}u)=(a_x+b_y+c_z)\,dx\wedge dy\wedge dz.$$ Por lo tanto, $$dF_2(u)=F_3(\operatorname{div}u).$$  
>>	5. De los pasos anteriores, el diagrama conmuta: $$F_1\circ\operatorname{grad}=d,$$ $$F_2\circ\operatorname{rot}=d\circ F_1,$$ $$F_3\circ\operatorname{div}=d\circ F_2.$$  
>>	6. Deducimos que $\operatorname{div}\operatorname{rot}=0$. Sea $u\in\mathfrak X(U)$. Entonces $$F_3(\operatorname{div}(\operatorname{rot}u))=dF_2(\operatorname{rot}u)=d(dF_1(u))=d^2F_1(u)=0.$$ Como $F_3$ es un isomorfismo, se sigue que $$\operatorname{div}(\operatorname{rot}u)=0.$$  
>>	7. Deducimos que $\operatorname{rot}\operatorname{grad}=0$. Sea $f\in C^\infty(U)$. Entonces $$F_2(\operatorname{rot}(\operatorname{grad}f))=dF_1(\operatorname{grad}f)=d(df)=d^2f=0.$$ Como $F_2$ es un isomorfismo, se sigue que $$\operatorname{rot}(\operatorname{grad}f)=0.$$
>>- (c)
>>	1. Finalmente decidimos si $u(x,y,z)=(x,0,0)$ puede ser el rotor de algún campo vectorial en $\mathbb R^3$. 
>>	2. Si existiera $v\in\mathfrak X(\mathbb R^3)$ tal que $$\operatorname{rot}(v)=u,$$ entonces por el paso anterior tendríamos $$\operatorname{div}(u)=\operatorname{div}(\operatorname{rot}v)=0.$$
>>	3. Pero para $u=(x,0,0)$, $$\operatorname{div}(u)=\frac{\partial x}{\partial x}+\frac{\partial 0}{\partial y}+\frac{\partial 0}{\partial z}=1.$$
>>	4. Esto contradice que $\operatorname{div}(u)=0$. Por lo tanto, $$u(x,y,z)=(x,0,0)$$ no puede ser el rotor de ningún campo vectorial suave en $\mathbb R^3$.

### Ejercicio 21

>[!Exercise]
>Sea $u$ un campo suave en un abierto $U$ de $\mathbb R^n$ y sea $\phi$ el flujo de $u$. Dado $p\in U$, probar que la divergencia de $u$ en $p$ es la tasa de variacion del volumen de $\phi$. Mas precisamente,
>$$\operatorname{div}_p(u)=\left.\frac d{dt}\right|_0\det(d\phi_t)_p.$$
>
>>[!Proof]-
>>Sea $\phi_t$ el flujo de $u$. Por definicion de flujo, para todo $x$ se cumple
>>$$\frac{\partial}{\partial t}\phi_t(x)=u(\phi_t(x)).$$
>>Derivamos esta igualdad respecto de $x$ en $p$. Como $u$ y el flujo son suaves, podemos intercambiar las derivadas respecto de $t$ y $x$; luego, por la regla de la cadena,
>>$$\frac d{dt}d\phi_t|_p=du_{\phi_t(p)}\circ d\phi_t|_p.$$
>>Por la formula de Jacobi,
>>$$\frac d{dt}\det(d\phi_t|_p)
>>=\det(d\phi_t|_p)\operatorname{tr}\left((d\phi_t|_p)^{-1}du_{\phi_t(p)}d\phi_t|_p\right)$$
>>$$=\det(d\phi_t|_p)\operatorname{tr}(du_{\phi_t(p)})
>>=\det(d\phi_t|_p)\operatorname{div}u(\phi_t(p)).$$
>>Evaluando en $t=0$, donde $d\phi_0=\operatorname{Id}$, queda
>>$$\left.\frac d{dt}\right|_{t=0}\det(d\phi_t|_p)=\operatorname{div}_p(u).$$

### Ejercicio 22 (Opcional) 

>[!Exercise]
>(Opcional) [Aspecto dinamico de las funciones analiticas.]
>
>- Sea $(u(x,y),v(x,y))$ un campo en el plano. El campo $(u,v)$ se dice incompresible (respectivamente irrotacional) si su divergencia $u_x+v_y$ (respectivamente su rotor $v_x-u_y$) se anula identicamente. Mostrar que la funcion $f=u-iv$ es analitica si y solo si el campo $(u,v)$ es irrotacional e incompresible.
>- Sea $V(x,y)=(u(x,y),v(x,y))$ un campo en una region $D$ del plano, y sea $C(t)=(x(t),y(t))$ un contorno simple cerrado en $D$ definido en el intervalo $[a,b]$ y recorrido en sentido antihorario. Se definen la circulacion y el flujo de $V$ a lo largo de $C$ mediante
>  $$
>  \operatorname{Circ}(V,C)=\int_a^b\langle V(t),C'(t)\rangle\,dt,\qquad \operatorname{Flujo}(V,C)=\int_a^b\det(V(t),C'(t))\,dt.
>  $$
>  Si $f=u-iv$, mostrar que
>  $$
>  \int_C f(z)\,dz=\operatorname{Circ}(V,C)+i\operatorname{Flujo}(V,C).
>  $$
>
>>[!Proof]-
>>Sea $f=u-iv$. Las ecuaciones de Cauchy-Riemann para $f$ son
>>$$
>>u_x=(-v)_y=-v_y,\qquad u_y=-(-v)_x=v_x.
>>$$
>>Equivalen a
>>$$
>>u_x+v_y=0,\qquad v_x-u_y=0.
>>$$
>>Es decir, el campo $(u,v)$ es incompresible e irrotacional.
>>
>>Para $z(t)=x(t)+iy(t)$,
>>$$
>>f(z)z'(t)=(u-iv)(x'+iy')
>>=ux'+vy'+i(uy'-vx').
>>$$
>>El termino real es $(V,C')$. El imaginario es
>>$$
>>uy'-vx'=\det(V,C').
>>$$
>>Por tanto
>>$$
>>\int_C f(z)\,dz=\operatorname{Circ}(V,C)+i\,\operatorname{Flujo}(V,C).
>>$$

### Ejercicio 23 (Opcional)

>[!Exercise]
>(Opcional) Sea $\alpha=\sum_{i=1}^n f_i\,dx_i$ una $1$-forma cerrada de $\mathbb R^n$ y definir la funcion $g$ como
>$$
>g(x_1,\ldots,x_n)=\int_0^{x_1}f_1(t,x_2,x_3,\ldots,x_n)\,dt+\int_0^{x_2}f_2(0,t,x_3,\ldots,x_n)\,dt+\cdots+\int_0^{x_n}f_n(0,0,0,\ldots,t)\,dt.
>$$
>¿Que relacion hay entre $dg$ y $\alpha$?
>
>>[!Proof]-
>>La funcion $g$ se obtiene integrando la $1$-forma cerrada $\alpha=\sum_i f_i\,dx_i$ sobre el camino poligonal que va de $0$ a $x$ moviendo una coordenada por vez. Como $\alpha$ es cerrada en $\mathbb R^n$, el lema de Poincare en el dominio estrella $\mathbb R^n$ da independencia del camino. Por tanto
>>$$
>>dg=\alpha.
>>$$
>>Equivalente y directamente: al derivar $g$ respecto de $x_j$, los terminos posteriores se simplifican usando $\partial_i f_j=\partial_j f_i$, y queda $\partial g/\partial x_j=f_j$.

### Ejercicio 24 (Opcional)

>[!Exercise]
>(Opcional) Sea $\alpha=\sum_{i=1}^n f_i\,dx_i$ una $1$-forma cerrada cuyos coeficientes $f_i$ son funciones suaves definidas sobre $\mathbb R^n\setminus\{0\}$ y que son todas funciones homogeneas del mismo grado $p$ ($p\ne-1$). Definir
>$$
>g=\frac1{p+1}\sum_{i=1}^n x_i f_i(x_1,\ldots,x_n).
>$$
>Mostrar que $dg=\alpha$.
>
>>[!Proof]-
>>Sea
>>$$
>>g=\frac1{p+1}\sum_{i=1}^n x_i f_i(x),\qquad p\ne-1.
>>$$
>>Entonces
>>$$
>>dg=\frac1{p+1}\sum_i f_i\,dx_i+\frac1{p+1}\sum_{i,j}x_i\frac{\partial f_i}{\partial x_j}\,dx_j.
>>$$
>>Como $\alpha$ es cerrada,
>>$$
>>\frac{\partial f_i}{\partial x_j}=\frac{\partial f_j}{\partial x_i}.
>>$$
>>Por homogeneidad de grado $p$, la formula de Euler da
>>$$
>>\sum_i x_i\frac{\partial f_j}{\partial x_i}=p f_j.
>>$$
>>Luego el coeficiente de $dx_j$ en $dg$ es
>>$$
>>\frac1{p+1}(f_j+p f_j)=f_j.
>>$$
>>Asi $dg=\alpha$.

### Ejercicio 25 (Opcional)

>[!Exercise]
>(Opcional) Sea $\alpha$ una $1$-forma nunca nula sobre una variedad suave de dimension $2$. Mostrar que $\alpha$ puede escribirse localmente como $f\,dg$ con $f$ y $g$ funciones suaves.
>
>>[!Proof]-
>>Sea $\alpha$ una $1$-forma nunca nula en una superficie. Cerca de cualquier punto se puede elegir una coordenada $x$ tal que el coeficiente de $dx$ en $\alpha$ no se anule. Escribamos
>>$$
>>\alpha=a(x,y)\,dx+b(x,y)\,dy,\qquad a\ne0.
>>$$
>>Buscamos $\alpha=f\,dg$. Equivale a hallar una funcion $g$ con
>>$$
>>\alpha\wedge dg=0,
>>$$
>>es decir
>>$$
>>(a\,dx+b\,dy)\wedge(g_x\,dx+g_y\,dy)=0
>>\quad\Longleftrightarrow\quad
>>a g_y-b g_x=0.
>>$$
>>Esta es una ecuacion diferencial lineal de primer orden. Por el teorema local de existencia para campos suaves, existe una solucion $g$ con $dg\ne0$ localmente, constante sobre las curvas tangentes al nucleo de $\alpha$. Entonces $dg$ y $\alpha$ tienen el mismo nucleo, por lo que son proporcionales:
>>$$
>>\alpha=f\,dg
>>$$
>>para alguna funcion suave $f$, que no se anula.


