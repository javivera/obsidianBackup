### Ejercicio 1

>[!Exercise]
>Sea $V$ un espacio vectorial de dimension $n$. Mostrar que si $k>n$, entonces $\Lambda^k(V^*)=\{0\}$.
>>[!Proof]-
>>1. Supongamos tenemos $w\in \Lambda^{k}(V^{*})$ entonces $w_{p}:V\times\ldots\times V\rightarrow\mathbb{R}$ es una funcion multilineal y alternada
>>2. Ahora veamos que $w_{p}(v_{1},\ldots,v_{k})=0$ para cualquier $v_{1},\ldots,v_{k}$
>>3. Dados $v_1,\ldots,v_k$, el conjunto es linealmente dependiente por que dimension de $V$ es $n$
>>4. Entonces spd $v_{k}=\sum^{n}_{i=1} c_{i}v_{i}$. Luego $$w_{p}(v_{1},\ldots,v_{k})=\sum^{n}_{i=1} c_{i} w_{p}(v_{1},\ldots,v_{i})$$
>>5. pero $w_{p}(v_{1},\ldots,v_{i})=0$ para todo $1\leq i\leq n$ por [[Glosario#^9b49d4]]

### Ejercicio 2

>[!Exercise]
>Sea $V$ un espacio vectorial de dimension $n$ y sean $\lambda\in\Lambda^k(V^*)$ y $\mu\in\Lambda^\ell(V^*)$, donde $1\le k,\ell\le n$. Mostrar que $\lambda\wedge\mu\in\Lambda^{k+\ell}(V^*)$.
>>[!Proof]-
>>1. Si $\lambda\in\Lambda^k(V^*)$ y $\mu\in\Lambda^\ell(V^*)$, por definicion $$\lambda\wedge\mu=\frac{(k+l)!}{k!l!}\operatorname{Alt}(\lambda\otimes\mu)$$
>>2. Recordamos que si $w\in \Lambda^{j}(V^{*})$ sucede que $$w:\underbrace{V\times\cdots\times V}_{j\text{-veces}}\to\mathbb R$$ 
>>3. Entonces por definicion de producto tensorial [[GS - Teo20#^db8d92]] $$\lambda\otimes\mu:\underbrace{V\times\cdots\times V}_{k\text{-veces}}\times \underbrace{V\times\cdots\times V}_{l\text{-veces}}\to\mathbb R$$ que es multi lineal (esta en $L(V,\ldots ,V:\mathbb{R})$) en particular esta en $T^{k+l}(V^{*})$ entonces por [[GS - Teo20#^c407fe]] sabemos que $\operatorname{Alt}(\lambda\otimes\mu)\in \Lambda^{k+l}(V^{*})$ 
  
### Ejercicio 3

>[!Exercise]
>- Simplificar las siguientes expresiones: $$(e^2\wedge e^3+e^3\wedge e^1)\wedge(5e^1-e^2),\qquad e^1\wedge e^5\wedge e^4\wedge(e^1\wedge e^4+e^4\wedge e^2)$$ donde $e^{j}$ es el $j$-esimo covector de la base dual de $V^{*}$  
>- Mostrar que si $\omega,\lambda,\varphi\in\Lambda^1(V^*)$, entonces $$(\omega-\lambda)\wedge(\lambda-\varphi)=\omega\wedge\lambda+\varphi\wedge\omega+\lambda\wedge\varphi.$$
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
>>[!Proof]-
>>- (a) 
>>	1. $(\Rightarrow)$ Suponemos $\theta_{1}\ldots\theta_{r}$ son l.i ahora tomamos sus correspondientes vectores en la base predual $v_{1},\ldots v_{r}$ 
>>	2. $\theta_{1}\wedge,\ldots,\wedge\theta_{r}(v_{1},\ldots,v_{r})=\det(\theta_{i}(v_{j}))=1$ por que es el determinante de la identidad
>>	3. Para ver que podemos tomar esos $v_{1},\ldots v_{r}$. Basicamente como $\theta_{1}\ldots\theta_{r}$ los podemos extender a una base $\theta_{1}\ldots\theta_{r},\ldots\theta_{n}$ y ahora tomamos su base dual que es una base que vive en $V$.
>>	4. Osea su base dual son $v_{j}$ tal que $v_{j}(\theta_{i})=\delta_{ij}$ pero $v_{j}$ se identifica con $\operatorname{ev}_{v_{j}}$ entonces $v_{j}(\theta_{i})=\theta_{i}(v_{j})$ 
>>	5. $(\Leftarrow)$ Supongamos son linealmente dependientes spd $$\theta_{r}=\sum^{r-1}_{i=1}a_{i}\theta_{i}$$
>>	6. Entonces $$\theta_1\wedge\cdots\wedge\theta_r=\theta_1\wedge\cdots\wedge\sum^{r-1}_{i=1}a_{i}\theta_{i}=\sum^{r-1}_{i=1} a_{i}(\theta_1\wedge\cdots\wedge\theta_i)=0$$ por que se repite siempre alguno termino (para cada sumando) lo que es absurdo
>>- (b)
>>	1. Usando defincion $$(2e^1+3e^2-e^3\wedge e^1+2e^2\wedge e^1-2e^3)(e_{1},e_{2},e_{3})=\det\begin{pmatrix}2 & 3 & -1 \\ 1 & 2 & 0 \\1 & 0 & -2\end{pmatrix}=0$$
>>	2. Entonces por (a) esos elementos del dual son linealmente dependientes
>>- (c) 
>>	- $(\Rightarrow)$ 
>>		1. Supongamos generan el mismo espacio entonces $$\theta_{j}=\sum^{r}_{i=1}C_{i}^{j} \xi_{i}$$
>>		2. Entonces $C_{i}^{j}$ son los coeficientes de la matriz cambio de base $C(B_{1},B_{2})$  
>>		3. Luego $$\begin{align}\theta_{1}\wedge\ldots\wedge\theta_{r}& =\sum^{r}_{i=1}C_{i}^{1} \xi_{i}\wedge\ldots\wedge \sum^{r}_{i=1}C_{i}^{r} \xi_{i}\\ &=\sum_{i_{1},\ldots,i_{r}} C_{i_{1}}^{1}\ldots C_{i_{j}}^{r}\ . \ \xi_{i_{1}}\wedge\ldots\wedge\xi_{i_{r}} \\& =\sum_{\sigma\in S_{r}} C_{\sigma(1)}^{1}\ldots C_{\sigma(r)}^{r} \ . \ \xi_{\sigma(1)}\wedge\ldots\wedge\xi_{\sigma(r)}\\&= \left (\sum_{\sigma\in S_{r}}sg(\sigma)C_{\sigma(1)}^{1}\ldots C_{\sigma(r)}^{r}\right)\xi_{1}\wedge\ldots\wedge\xi_{r}  \\&=\det(C)\xi_{1}\wedge\ldots\wedge\xi_{r}\end{align}$$
>>		4. Como $C=C(B_{1},B_{2})$ entonces es inversible. Por lo tanto su determinante es no nulo
>>		5. Notar que aca podemos usar [[GS - Teo20#^8619e2]] 7. por que $\xi_{j}\in \Lambda^{1}(V^{*})=V^{*}$ 
>>	- $(\Leftarrow)$ 
>>		1. Primero notamos que $$0=\theta_{1}\wedge\theta_1\wedge\cdots\wedge\theta_r=c\theta_{1}\wedge\,\xi_1\wedge\cdots\wedge\xi_r$$
>>		2. Entonces por parte (a) $\{ \theta_{1},\xi_{1},\ldots,\xi_{r} \}$ es un conjunto linealmente dependiente osea $\theta_{1}=\sum^{r}_{i=1}c^{1}_{i}\xi_{i}$ 
>>		3. Y esto mismo vale para cualquier $\theta_{i}$ por ende $$\operatorname{span} B_{1}\subseteq \operatorname{span}B_{2}$$
>>		4. Analogamente $$\xi_{1}\wedge\theta_1\wedge\cdots\wedge\theta_r=c\xi_{1}\wedge\,\xi_1\wedge\cdots\wedge\xi_r=0$$ y haciendo todo igual $\operatorname{span} B_{2}\subseteq \operatorname{span}B_{1}$
>>		5. Mostrando que $$\operatorname{span} B_{1}= \operatorname{span}B_{2}$$
>>		6. Y ahora usando que generan el mismo espacio. Podemos hacer lo mismo que ida para ver que $\det(M)=c$ donde $M=C(B_{1},B_{2})$  
>>		7. Notar que aca podemos usar [[GS - Teo20#^8619e2]] 7. por que $\xi_{j},\theta_{i}\in \Lambda^{1}(V^{*})=V^{*}$ 

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
>>		3. Si no completamos a una base $\{e_{1},\ldots,e_{n-1},v\}$ y tomamos su dual $\{ e^{1},\ldots e^{n-1},\widetilde{v} \}$  
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
>>[!Proof]-
>>1. Basta hacerlo para $2$-formas. En coordenadas $x=(x_1,\ldots,x_{m})$ $$\omega=\sum_{i<j}a_{ij}\,dx_{i}\wedge dx_{j}$$ esto por [[GS - Teo21#^70585b]]
>>2. Si $y=(y^1,\ldots,y^m)$ es otro sistema, entonces tenemos otra base del $T_{p}^{*}M$ por lo tanto $$dx_{i}=\sum_j^{m} \frac{\partial x_{i}}{\partial y_{j}}\,dy_{j}$$ las coordenadas salen evaluando en $\frac{\partial}{\partial y_{j}}$ 
>>3. Obviamente todo esto vale para cualquier $p\in W$ donde este $W=U_{x}\cap U_{y}$ con los abiertos de las cartas
>>4. Ahora recordamos que suma de $k$-tensores es $k$-tensor. Y usando la "distributividad" del producto cuña   
>>5. Por tanto $$dx_{i}\wedge dx_{j}=\left(\sum_\alpha ^{m} \frac{\partial x_{i}}{\partial y_{\alpha }}\,dy_{\alpha }\right)\wedge \left(\sum_\beta ^{m} \frac{\partial x_{j}}{\partial y_{\beta }}\,dy_{\beta }\right)=\sum^{m}_{\alpha ,\beta =1} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}\,dy_{\beta }\wedge dy_{\alpha }$$ (obviamente hay que evaluar en puntos de $W$ para hacer el producto cuña [[GS - Teo21#^76ed6d]] y notar que $\frac{\partial x_{i}}{\partial y_{j}}(p)\in \mathbb{R}$) 
>>6. Ademas $$\sum^{m}_{\alpha ,\beta =1} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}\,dy_{\beta }\wedge dy_{\alpha }=\sum^{m}_{\alpha <\beta } \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}\,dy_{\beta }\wedge dy_{\alpha }$$ esto es por que siempre hay dos terminos que tienen casi el mismo producto cuña solo que dandolo vuelta, por eso aparede el menos. Y caundo los indices son exatamente el mismo se cancela el producto cuña por eso aparece el menor o igual en la sumatoria
>>7. Luego $$\omega=\sum^{m}_{i<j} a_{ij}\sum^{m}_{\alpha <\beta } \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}\,dy_{\beta }\wedge dy_{\alpha }=\sum^{m}_{\alpha <\beta }\left[\sum^{m}_{i<j}a_{ij} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}\right]\,dy_{\beta }\wedge dy_{\alpha }$$
>>8. Por lo tanto tengo nuevos coeficientes $$b_{\alpha \beta }=\sum^{m}_{i<j}a_{ij} \frac{\partial x_{i}}{\partial y_{\alpha }}\,\frac{\partial x_{j}}{\partial y_{\beta }}-\frac{\partial x_{j}}{\partial y_{\beta }}\,\frac{\partial x_{i}}{\partial y_{\alpha }}$$  en el nuevo marco coordenado $\{ dy_{i_{1}}\wedge dy_{i_{2}} \}_{i_{1}<i_{2}<m}$ y a $\omega$ escrito en esos coeficientes. Me gustaria ver que sigue siendo suave. Esto mostraria que si es suave en un sistema coordenado lo es en cualquiera
>>9. Pero los nuevos coeficientes son suaves para todo $p\in W$. Porque $a_{ij}$ es suave para todo $p\in W$ y las derivadas parciales tambien lo son por que son la derivada de $\psi\circ\varphi ^{-1}$ (el cambio de coordenadas) que es suave.

### Ejercicio 12

>[!Exercise]
>Sea $M$ una variedad diferenciable y $\omega$ una $k$-forma en $M$. Probar que las siguientes afirmaciones son equivalentes, y en tal caso la $k$-forma $\omega$ se dice diferenciable:
>
>- (a) Para $X_1,\ldots,X_k\in\mathfrak X(M)$ arbitrarios, se tiene que $\omega(X_1,\ldots,X_k)\in C^\infty(M)$, donde $\omega(X_1,\ldots,X_k)$ es la funcion dada por $$\omega(X_1,\ldots,X_k)(p)=\omega_p(X_1|_p,\ldots,X_k|_p),\qquad p\in M$$
>- (b) Para todo entorno coordenado $(U,(x^1,\ldots,x^n))$ de $M$, se tiene $$\omega|_U=\sum_{i_1<\cdots<i_k}a_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad a_{i_1\cdots i_k}\in C^\infty(U)$$
>>[!Proof]-
>>- $(b\Rightarrow a)$ 
>>	1. Tomamos un $p\in M$ ahora tenemos $(U,\phi=x_{1},\ldots,x_{n})$ carta entonces por (b) $$\omega|_U=\sum_{i_1<\cdots<i_k}a_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad a_{i_1\cdots i_k}\in C^\infty(U)$$
>>	2. Ademas $$X_{i}=\sum^{n}_{j=1}a_{ij}\frac{\partial}{\partial x_{j}}$$ 
>>	3. Luego $$\omega|_{U}(X_{1},\ldots X_{k})=\sum_{i_1<\cdots<i_k}a_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\left(\sum^{n}_{j=1}a_{i1}\frac{\partial}{\partial x_{j}},\ldots,\sum^{n}_{j=1}a_{nj}\frac{\partial}{\partial x_{j}}\right)$$
>>	4. Ahora notamos que $$\begin{align} dx_{i_1}\wedge\cdots\wedge dx_{i_k}\left(\sum^{n}_{j=1}a_{i1}\frac{\partial}{\partial x_{j}},\ldots,\sum^{n}_{j=1}a_{nj}\frac{\partial}{\partial x_{j}}\right)&=\det\left( dx_{i_{s}}\left( \sum^{n}_{j=1}a_{rj}\frac{\partial}{\partial x_{j}} \right) \right)_{s,r=1}^{k} \\ & =\det\left( \sum^{n}_{j=1} a_{rj}dx_{i_{s}}\frac{\partial}{\partial x_{j}} \right)\\&=\det(a_{ri_{s}})_{s,r=1}^{k} \end{align}$$
>>	5. Pero entonces $$\omega|_{U}(X_{1},\ldots,X_{k})(p)=(\omega|_{U})_{p}(X_{1},\ldots,X_{k})=\sum_{i_{1}<\ldots<i_{k}} a_{i_{1}\ldots i_{k}}(p)\det(a_{r i_{s}}(p))$$ 
>>	6. Pero $a_{i_{1}\ldots i_{k}}$ es suave como funcion de $p$ por hipotesis, lo mismo para $\det(a_{ri_{s}})_{s,r=1}^{k}$ como funcion de $p$ por que $X_{i}$ son campos suaves. Y $\det$ es un polinomio de sus entradas.
>>	7. Entonces $\omega|_{U}(X_{1},\ldots,X_{k})(p)$ es suave y obviamente como esto lo podemos hacer para cualquier $p$ tenemosq ue $$\omega(X_{1},\ldots,X_{k})(p)$$ es suave
>>- $(a\Rightarrow b)$ 
>>	1. Tomamos una carta $(U,x_{1},\ldots,x_{n})$ como $B_k=\{dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p:1\le i_1<\cdots<i_k\le n\}$ es base de $\Lambda^{k}(T_{p}^{*}M)$ tenemos $$\omega|_{U}=\sum_{i_{1}<\ldots<i_{k}} a_{i_{k}\ldots i_{k}}\ .dx_{i_{1}}\wedge\ldots\wedge dx_{i_{k}}$$ con $a_{i_{1}\ldots i_{k}}:U \rightarrow\mathbb{R}$. Bastaria mostrar que son suaves
>>	2. Ahora tenemos que $$\begin{align}\omega|_{U}\left(\frac{\partial}{\partial x_{j_{1}}},\ldots, \frac{\partial}{\partial x_{j_{k}}}\right)(p)& =\omega_{p}\left(\frac{\partial}{\partial x_{j_{1}}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{j_{k}}}\bigg|_{p}\right)\\&=\sum^{\infty}_{i_{1}<\ldots<i_{k}}a_{i_{1}\ldots i_{k}}(p) \ .dx_{i_{1}}\wedge\ldots\wedge dx_{i_{k}}\left(\frac{\partial}{\partial x_{j_{1}}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{j_{k}}}\bigg|_{p}\right)\\&=a_{I}(p)\end{align}$$ con $I=J$ osea el unico caso donde el determinante no es $0$ que es cuando coinciden los multi indices, $j_{1}=i_{1}\ldots j_{k}=i_{k}$    
>>	3. Por hipotesis $\omega(X_1,\ldots,X_k)\in C^{\infty}(M)$ en particular $\omega|_{U}\left(\frac{\partial}{\partial x_{j_{1}}},\ldots, \frac{\partial}{\partial x_{j_{k}}}\right)\in C^{\infty}(U)$. Por ende $$a_{I}(p)\in C^{\infty}(U)$$
>>	4. Ahora lo unico que tenemos que corregir es que $\frac{\partial}{\partial x_{i}}$ son campos suaves sobre $U$  y para usar la hipotesis las necesito suaves sobre $M$ 
>>	5. Tomamos $q\in U$ y ahora tenemos $V_{q}\subseteq U$ abierto de $q$ y $f\in C^{\infty}(M)$ tal que $f|_{\overline{V_{q}}}\equiv 1$ y $\operatorname{supp}f\subseteq U$ y defino $$X_{i}(p)=\begin{cases} f(p)\frac{\partial}{\partial x_{i}}\bigg|_{p} & p\in U \\0 & x\not\in U \end{cases}$$ que sabemos es un campo suave sobre todo $M$ y cerca de $p$ (osea en algun abierto dentro de $\overline{V_{q}}$, por ejemplo $V_{q}$ ) vale exactamente $\frac{\partial}{\partial x_{i}}\bigg|_{q}$ 
>>	6. Luego haciendo la misma cuenta que en 2. pero con $X_{i}$ tenemos que $$\sum_{i_{1}<\ldots<i_{k}} a_{i_{1}\ldots i_{k}}(q)$$ es suave para todo $q\in V_{p}$ 
>>	7. Y como esto lo podemos hacer para cualquier $q\in U$ es suave en todo $U$ como queriamos 

^174f5d

### Ejercicio 13

>[!Exercise]
>Probar que si $\omega\in\Omega^k(M)$ y $\eta\in\Omega^\ell(M)$, entonces $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.
>>[!Proof]-
>>1. En coordenadas, si $$\omega=\sum_I a_I\,dx^I,\qquad \eta=\sum_J b_J\,dx^J$$
>>2.  entonces $$\omega\wedge\eta=\sum_{I,J}a_Ib_J\,dx^I\wedge dx^J$$ 
>>3. obviamente los términos que tienen diferenciales repetidos darán $0$ y hay que reordenar lo que posiblemente meta un cambio de signo. Pero nada de esto cambia que los coeficientes $a_Ib_J$ son suaves, luego $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.

^5374b2

### Ejercicio 14

>[!Exercise]
>Sea $M$ una variedad diferenciable de dimension $m$. Dadas $\omega\in\Omega^k(M)$ y $\theta\in\Omega^\ell(M)$, mostrar que $$d_{k+\ell}(\omega\wedge\theta)=(d_k\omega)\wedge\theta+(-1)^k\omega\wedge(d^\ell\theta)$$
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
>>[!Proof]-
>>- (a) 
>>	1. Para $\varphi=\cos(xy^2)\,dx\wedge dz$, $$d\varphi=d(\cos(xy^2))\wedge dx\wedge dz$$
>>	2. Veamos como actuad $d(\cos(xy^{2}))(v)$ con $v\in T_{p}\mathbb{R}^{3}$ entonces $$v=a\frac{\partial}{\partial x}+b\frac{\partial}{\partial y}+c\frac{\partial}{\partial z}$$ luego $$\begin{align}d(\cos(xy^{2}))_{p}(v)&=d(\cos(xy^{2}))\frac{\partial}{\partial x}\bigg|_{p}+d(\cos(xy^{2}))\frac{\partial}{\partial y}\bigg|_{p}+d(\cos(xy^{2}))\frac{\partial}{\partial z}\bigg|_{p}\\&=-ap_{2}^{2}\sin(p_{1}p_{2}^{2})-b2p_{1}p_{2}\sin(p_{1}p_{2}^{2})\end{align}$$ (donde identifique $T_{f(p)\mathbb{R}}$ con $\mathbb{R}$)
>>	3. Con lo cual podemos ver a $$d(\cos(xy^{2}))=-y^{2}\sin(xy^{2})dx-2xy\sin(xy^{2})dy$$ (la igualdad vale, se nota simplmente evaluando en un $v$ como arriba y usando $dx_{i}\frac{\partial}{\partial x_{j}}=\delta_{ij}$) 
>>	4. Finalmente $$\begin{align}d\varphi& =(-y^{2}\sin(xy^{2})dx-2xy\sin(xy^{2})dy)\wedge dx\wedge dz\\&=-2xy\sin(xy^{2})dy\wedge dx\wedge dz\\&=2xy\sin(xy^{2})dx\wedge dy\wedge dz\end{align}$$
>>	5. Haciendo algo analogo al paso 2. nos queda que $$d\omega=dx\wedge dy\wedge dz+ dy\wedge dz\wedge dx+ dz\wedge dx\wedge dy=3dx\wedge dy \wedge dz$$ 
>>- (b) 
>>	1. La mas simple es: $$\omega=x_{1}dx_{2}\wedge\ldots\wedge dx_{n}$$ 

### Ejercicio 16

>[!Exercise]
>Sea $\omega\in\Omega^1(M)$ y $X,Y\in\mathfrak X(M)$. Probar que $$d\omega(X,Y)=X(\omega(Y))-Y(\omega(X))-\omega([X,Y]).$$
>>[!Proof]-
>>1. Sea $(U,x^1,\ldots,x^n)$ una carta local. En $U$ podemos escribir $$\omega=\sum_i a_i\,dx^i,\qquad X=\sum_j X^j\frac{\partial}{\partial x^j},\qquad Y=\sum_k Y^k\frac{\partial}{\partial x^k}.$$
>>2. Entonces, usando la definición local de $d$ sobre $1$-formas, $$d\omega=d\left(\sum_i a_i\,dx^i\right)=\sum_i da_i\wedge dx^i.$$
>>3. Como $da_{i}$ es una $1$-forma podemos escribirla asi: $$da_i=\sum_j \frac{\partial a_i}{\partial x^j}\,dx^j,$$ entonces obtenemos $$d\omega=\sum_{i,j}\frac{\partial a_i}{\partial x^j}\,dx^j\wedge dx^i.$$
>>4. Evaluando en $(X,Y)$, resulta $$d\omega(X,Y)=\sum_{i,j}\frac{\partial a_i}{\partial x^j}(dx^j\wedge dx^i)(X,Y).$$
>>5. Para calcular $(dx^j\wedge dx^i)(X,Y)$ usamos la propiedad de menores con $k=2$: $$(dx^j\wedge dx^i)(X,Y)=\det\begin{pmatrix}dx^j(X)&dx^j(Y)\\ dx^i(X)&dx^i(Y)\end{pmatrix}.$$
>>6. Como $Y=\sum_k Y^k\frac{\partial}{\partial x^k}$ y $dx^j$ es la base dual de $\frac{\partial}{\partial x^1},\ldots,\frac{\partial}{\partial x^n}$, se tiene $dx^j\left(\frac{\partial}{\partial x^k}\right)=\delta^j_k$. Por lo tanto, $$dx^j(Y)=dx^j\left(\sum_k Y^k\frac{\partial}{\partial x^k}\right)=\sum_k Y^k dx^j\left(\frac{\partial}{\partial x^k}\right)=\sum_k Y^k\delta^j_k=Y^j.$$
>>7. Análogamente, $$dx^j(X)=X^j,\qquad dx^i(X)=X^i,\qquad dx^i(Y)=Y^i.$$
>>8. Entonces $$(dx^j\wedge dx^i)(X,Y)=\det\begin{pmatrix}X^j&Y^j\\ X^i&Y^i\end{pmatrix}=X^jY^i-Y^jX^i.$$
>>9. Por lo tanto, $$d\omega(X,Y)=\sum_{i,j}\frac{\partial a_i}{\partial x^j}(X^jY^i-Y^jX^i).$$
>>10. Es decir, $$d\omega(X,Y)=\sum_{i,j}X^jY^i\frac{\partial a_i}{\partial x^j}-\sum_{i,j}Y^jX^i\frac{\partial a_i}{\partial x^j}.$$
>>11. Ahora calculamos el lado derecho. Primero, $$\omega(Y)=\sum_i a_iY^i.$$ tambien escribiendo a $\omega$ en su base adecuada y escribiendo a $Y$ en su base adecuada y cancelando terminos  
>>12. Entonces $$X(\omega(Y))=X\left(\sum_i a_iY^i\right)=\sum_{i,j}X^j\frac{\partial}{\partial x^j}(a_iY^i).$$
>>13. Usando la regla del producto para funciones (regla Leibniz para vectores tangentes) , $$X(\omega(Y))=\sum_{i,j}X^jY^i\frac{\partial a_i}{\partial x^j}+\sum_{i,j}a_iX^j\frac{\partial Y^i}{\partial x^j}.$$
>>14. Análogamente, $$Y(\omega(X))=\sum_{i,j}Y^jX^i\frac{\partial a_i}{\partial x^j}+\sum_{i,j}a_iY^j\frac{\partial X^i}{\partial x^j}.$$
>>15. Luego $$X(\omega(Y))-Y(\omega(X))=\sum_{i,j}X^jY^i\frac{\partial a_i}{\partial x^j}-\sum_{i,j}Y^jX^i\frac{\partial a_i}{\partial x^j}+\sum_{i,j}a_iX^j\frac{\partial Y^i}{\partial x^j}-\sum_{i,j}a_iY^j\frac{\partial X^i}{\partial x^j}.$$
>>16. Por otro lado, en coordenadas tenemos por [[Glosario#^0415b0]] que $$[X,Y]=\sum_i\left(\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_jY^j\frac{\partial X^i}{\partial x^j}\right)\frac{\partial}{\partial x^i}.$$
>>17. Y por [[Glosario#^151174]] $$\omega([X,Y])=\sum_i a_i\left(\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_jY^j\frac{\partial X^i}{\partial x^j}\right).$$
>>18. Es decir, $$\omega([X,Y])=\sum_{i,j}a_iX^j\frac{\partial Y^i}{\partial x^j}-\sum_{i,j}a_iY^j\frac{\partial X^i}{\partial x^j}.$$
>>19. Por lo tanto, al restar $\omega([X,Y])$, se cancelan los términos con derivadas de las coordenadas de $X$ e $Y$. Así, $$X(\omega(Y))-Y(\omega(X))-\omega([X,Y])=\sum_{i,j}X^jY^i\frac{\partial a_i}{\partial x^j}-\sum_{i,j}Y^jX^i\frac{\partial a_i}{\partial x^j}.$$
>>20. Pero esta expresión es exactamente la obtenida para $d\omega(X,Y)$ en el paso 10. Por lo tanto, $$d\omega(X,Y)=X(\omega(Y))-Y(\omega(X))-\omega([X,Y]).$$

### Ejercicio 17

>[!Exercise]
>Sea $F:M\to N$ una funcion suave y sea $\theta\in\Omega^k(N)$. Mostrar que $F^*\theta\in\Omega^k(M)$ y que $d^k(F^*\theta)=F^*(d^k\theta)$.
>>[!Proof]-
>>Si $\theta\in\Omega^k(N)$, entonces
>>$$
>>(F^*\theta)_p(v_1,\ldots,v_k)
>>=\theta_{F(p)}(dF_pv_1,\ldots,dF_pv_k).
>>$$
>>En coordenadas, si $\theta=\sum_I a_I\,dy^I$, entonces
>>$$
>>F^*\theta=\sum_I(a_I\circ F)\,d(F^{i_1})\wedge\cdots\wedge d(F^{i_k}),
>>$$
>>que tiene coeficientes suaves. Ademas,
>>$$
>>d(F^*\theta)=F^*(d\theta)
>>$$
>>porque vale para funciones y para $dy^i$, y ambas operaciones satisfacen la misma regla de Leibniz graduada.

### Ejercicio 18

>[!Exercise]
>Una forma diferencial $\alpha$ de grado $k$ se dice cerrada si $d\alpha=0$. La forma $\alpha$ se dice exacta si existe una forma $\beta$ tal que $d\beta=\alpha$.
>
>- Mostrar que toda forma exacta es cerrada y que toda $n$-forma en una variedad de dimension $n$ es cerrada.
>- Mostrar que el producto exterior de dos formas cerradas es una forma cerrada y que el producto exterior de una forma cerrada con una exacta es una forma exacta.
>- Mostrar que la $1$-forma $\theta=x\,dy$ en $\mathbb R^2$ no es exacta. Mas aun, en ningun abierto $U$ esta definida una funcion $f$ tal que $df=\theta$ en $U$.
>>[!Proof]-
>>Si $\alpha=d\beta$, entonces $d\alpha=d^2\beta=0$. Toda $n$-forma en una variedad de dimension $n$ es cerrada porque su diferencial seria una $(n+1)$-forma, y $\Omega^{n+1}(M)=0$.
>>
>>Si $d\alpha=d\beta=0$, entonces
>>$$
>>d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta=0.
>>$$
>>Si $\beta=d\gamma$ y $d\alpha=0$, entonces
>>$$
>>\alpha\wedge\beta=\alpha\wedge d\gamma
>>=(-1)^{\deg\alpha}d(\alpha\wedge\gamma),
>>$$
>>luego es exacta, salvo el signo indicado.
>>
>>Para $\theta=x\,dy$ en $\mathbb R^2$,
>>$$
>>d\theta=dx\wedge dy\ne0.
>>$$
>>Si existiera $f$ en algun abierto $U$ con $df=\theta$, entonces $d\theta=d^2f=0$ en $U$, contradiccion. Por tanto no es exacta, ni siquiera localmente en ningun abierto no vacio.

### Ejercicio 19

>[!Exercise]
>Considerar en la circunferencia $S^1$ los sistemas coordenados canonicos $s=\phi^{-1}$ y $t=\psi^{-1}$ con imagenes los intervalos $(0,2\pi)$ y $(-\pi,\pi)$, respectivamente. Mostrar que $ds$, $dt$ definen bien una $1$-forma suave $\theta$ en $S^1$. Probar que $\theta$ es localmente exacta, pero no exacta.
>>[!Proof]-
>>En $S^1$, las coordenadas angulares canonicas $s$ y $t$ difieren en las intersecciones por una constante:
>>$$
>>t=s \quad\text{o}\quad t=s-2\pi
>>$$
>>segun la rama. Por tanto $dt=ds$ en los solapamientos. Asi $ds$ y $dt$ pegan y definen una $1$-forma suave global $\theta$.
>>
>>Localmente, en una carta angular, $\theta=ds=d(s)$, luego es localmente exacta. Si fuese globalmente exacta, $\theta=df$ en $S^1$. Entonces la integral sobre la circunferencia seria
>>$$
>>\int_{S^1}\theta=\int_{S^1}df=0.
>>$$
>>Pero en una vuelta completa,
>>$$
>>\int_{S^1}\theta=\int_0^{2\pi}ds=2\pi.
>>$$
>>Contradiccion. Luego no es exacta.

### Ejercicio 20

>[!Exercise]
>Sea $U$ un abierto de $\mathbb R^3$. Para un campo suave $u=(a,b,c)$ en $U$ se definen
>$$
>\operatorname{div}(u)=\frac{\partial a}{\partial x}+\frac{\partial b}{\partial y}+\frac{\partial c}{\partial z},\qquad
>\operatorname{rot}(u)=\left(\frac{\partial c}{\partial y}-\frac{\partial b}{\partial z},\frac{\partial a}{\partial z}-\frac{\partial c}{\partial x},\frac{\partial b}{\partial x}-\frac{\partial a}{\partial y}\right).
>$$
>Considerar el diagrama con $F_1(u)=a\,dx+b\,dy+c\,dz$, $F_2(u)=a\,dy\wedge dz+b\,dz\wedge dx+c\,dx\wedge dy$ y $F_3(f)=f\,dx\wedge dy\wedge dz$.
>
>- Para cada $j=1,2,3$, mostrar que $F_j$ es un isomorfismo de $C^\infty(U)$-modulos.
>- Probar que el diagrama es conmutativo y deducir que $\operatorname{div}\operatorname{rot}=0$ y $\operatorname{rot}\operatorname{grad}=0$.
>- Decidir si el campo vectorial $u(x,y,z)=(x,0,0)$ puede ser el rotor de algun campo vectorial en $\mathbb R^3$.
>>[!Proof]-
>>Las aplicaciones
>>$$
>>F_0(f)=f,\quad F_1(a,b,c)=a\,dx+b\,dy+c\,dz,
>>$$
>>$$
>>F_2(a,b,c)=a\,dy\wedge dz+b\,dz\wedge dx+c\,dx\wedge dy,\quad
>>F_3(f)=f\,dx\wedge dy\wedge dz
>>$$
>>son isomorfismos de $C^\infty(U)$-modulos porque solo expresan funciones o campos en las bases canonicas de formas.
>>
>>Si $f\in C^\infty(U)$,
>>$$
>>dF_0(f)=f_xdx+f_y dy+f_z dz=F_1(\nabla f).
>>$$
>>Si $u=(a,b,c)$,
>>$$
>>dF_1(u)
>>=(c_y-b_z)\,dy\wedge dz+(a_z-c_x)\,dz\wedge dx+(b_x-a_y)\,dx\wedge dy
>>=F_2(\operatorname{rot}u).
>>$$
>>Tambien
>>$$
>>dF_2(u)=(a_x+b_y+c_z)\,dx\wedge dy\wedge dz
>>=F_3(\operatorname{div}u).
>>$$
>>El diagrama conmuta. Como $d^2=0$, se deduce
>>$$
>>\operatorname{rot}\nabla f=0,\qquad \operatorname{div}\operatorname{rot}u=0.
>>$$
>>
>>El campo $u(x,y,z)=(x,0,0)$ no puede ser rotor en $\mathbb R^3$, porque
>>$$
>>\operatorname{div}u=1\ne0,
>>$$
>>mientras que todo rotor tiene divergencia nula.

### Ejercicio 21

>[!Exercise]
>Sea $u$ un campo suave en un abierto $U$ de $\mathbb R^n$ y sea $\phi$ el flujo de $u$. Dado $p\in U$, probar que la divergencia de $u$ en $p$ es la tasa de variacion del volumen de $\phi$. Mas precisamente,
>$$
>\operatorname{div}_p(u)=\left.\frac d{dt}\right|_0\det(d\phi_t)_p.
>$$
>>[!Proof]-
>>Sea $\phi_t$ el flujo de $u$. La derivada de $d\phi_t$ satisface
>>$$
>>\frac d{dt}d\phi_t|_p=du_{\phi_t(p)}\circ d\phi_t|_p.
>>$$
>>Por la formula de Jacobi,
>>$$
>>\frac d{dt}\det(d\phi_t|_p)
>>=\det(d\phi_t|_p)\operatorname{tr}\left((d\phi_t|_p)^{-1}du_{\phi_t(p)}d\phi_t|_p\right)
>>$$
>>$$
>>=\det(d\phi_t|_p)\operatorname{tr}(du_{\phi_t(p)})
>>=\det(d\phi_t|_p)\operatorname{div}u(\phi_t(p)).
>>$$
>>Evaluando en $t=0$, donde $d\phi_0=\operatorname{Id}$, queda
>>$$
>>\left.\frac d{dt}\right|_{t=0}\det(d\phi_t|_p)=\operatorname{div}_p(u).
>>$$

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

