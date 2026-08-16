### Un poco de algebra multilineal

>[!Definition]
>Sean $V_1,V_2,\ldots,V_k$ y $W$ espacios vectoriales. Una funcion
>$$F:V_1\times\cdots\times V_k\to W$$
>se dice multilineal si esta es lineal en cada variable, es decir, $\lambda\in\mathbb R$,
>$$F(v_1,\ldots,\lambda v_i+\tilde v_i,\ldots,v_k) = \lambda F(v_1,\ldots,v_i,\ldots,v_k)+F(v_1,\ldots,\tilde v_i,\ldots,v_k),$$
>$i=1,\ldots,k$.

^2f1d75

>[!Definition] Conjunto de funciones multilineales
>Se suele denotar por $L(V_1,\ldots,V_k;W)$ el conjunto de todas las funciones multilineales de $V_1\times\cdots\times V_k$ en $W$, el cual resulta ser un espacio vectorial real bajo la suma y producto escalar natural. Si $\lambda\in\mathbb R$:
>$$(F+G)(v_1,\ldots,v_k):=F(v_1,\ldots,v_k)+G(v_1,\ldots,v_k),$$$$(\lambda F)(v_1,\ldots,v_k):=\lambda F(v_1,\ldots,v_k).$$

>[!example]-
>$$\det:\underbrace{\mathbb R^n\times\cdots\times\mathbb R^n}_{n\text{-veces}}\to\mathbb R$$
>$$\det(v_1,\ldots,v_n)=\det(v_1|\cdots|v_n).$$

>[!example]-
>$$\langle\ ,\ \rangle:\mathbb R^n\times\mathbb R^n\to\mathbb R$$
>$$((x_1,\ldots,x_n),(y_1,\ldots,y_n))\mapsto \langle v_1,v_2\rangle=\sum_{k=1}^n x_k y_k.$$
>Producto interno usual de $\mathbb R^n$.

>[!example]-
>$$\times:\mathbb R^3\times\mathbb R^3\to\mathbb R^3$$
>$$((x_1,x_2,x_3),(y_1,y_2,y_3)) \mapsto \det\begin{pmatrix} e_1&e_2&e_3\\ x_1&x_2&x_3\\ y_1&y_2&y_3 \end{pmatrix},$$
>el producto cruz en $\mathbb R^3$.

>[!Definition] Producto tensorial
>Sean $V_1,\ldots,V_k,W_1,\ldots,W_l$ espacios vectoriales reales y sean
>$$F\in L(V_1,\ldots,V_k;\mathbb R),\qquad G\in L(W_1,\ldots,W_l;\mathbb R),$$
>y considerar la funcion
>$$F\otimes G:V_1\times\cdots\times V_k\times W_1\times\cdots\times W_l\to\mathbb R$$
>$$(v_1,\ldots,v_k,w_1,\ldots,w_l)\mapsto F(v_1,\ldots,v_k)G(w_1,\ldots,w_l).$$
>Es facil ver que $F\otimes G$ es multilineal, asi que
>$$F\otimes G\in L(V_1,\ldots,V_k,W_1,\ldots,W_l;\mathbb R)$$
>y se llama el producto tensorial de $F$ y $G$.

^db8d92

>[!Exercise]
>Probar que el producto tensorial es bilineal y asociativo:
>$$(F+\lambda H)\otimes G=F\otimes G+\lambda(H\otimes G),$$
>$$F\otimes(G+\beta K)=F\otimes G+\beta(F\otimes K),$$
>$$(F\otimes G)\otimes K=F\otimes(G\otimes K).$$

>[!Proposition] Ejercicio
>Sean $V_1,\ldots,V_k$ espacios vectoriales reales de dimension finita $n_1,\ldots,n_k$ respectivamente, y sea $\{e^j_1,\ldots,e^j_{n_j}\}$ una base de $V_j$, $j=1,\ldots,k$, y sean $\{\varepsilon^j_1,\ldots,\varepsilon^j_{n_j}\}$ la respectiva base dual de $V_j^*$.
>
>Entonces
>$$B=\left\{\varepsilon^1_{i_1}\otimes\cdots\otimes\varepsilon^k_{i_k}:1\le i_j\le n_j,\ 1\le j\le k\right\}$$
>es una base para $L(V_1,\ldots,V_k;\mathbb R)$, el cual es un espacio vectorial real de dimension $n_1n_2\cdots n_k$.
>
>>[!Proof]- hecha por chat
>>1. Para cada multiíndice $(i_1,\ldots,i_k)$, definimos $$E_{i_1,\ldots,i_k}:=\varepsilon^1_{i_1}\otimes\cdots\otimes\varepsilon^k_{i_k}.$$  
>>2. Por definición del producto tensorial, para $v_j\in V_j$, se tiene $$E_{i_1,\ldots,i_k}(v_1,\ldots,v_k)=\varepsilon^1_{i_1}(v_1)\cdots\varepsilon^k_{i_k}(v_k).$$  
>>3. En particular, si evaluamos en vectores de las bases, obtenemos $$E_{i_1,\ldots,i_k}(e^1_{a_1},\ldots,e^k_{a_k})=\varepsilon^1_{i_1}(e^1_{a_1})\cdots\varepsilon^k_{i_k}(e^k_{a_k}).$$  
>>4. Como $\{\varepsilon^j_1,\ldots,\varepsilon^j_{n_j}\}$ es la base dual de $\{e^j_1,\ldots,e^j_{n_j}\}$, vale $$\varepsilon^j_{i_j}(e^j_{a_j})=\delta_{i_ja_j}.$$  
>>5. Luego $$E_{i_1,\ldots,i_k}(e^1_{a_1},\ldots,e^k_{a_k})=\delta_{i_1a_1}\cdots\delta_{i_ka_k}.$$  
>>6. Por lo tanto, este valor es $1$ si $(i_1,\ldots,i_k)=(a_1,\ldots,a_k)$, y es $0$ en caso contrario.  
>>7. Probemos primero que $B$ es linealmente independiente. Supongamos que $$\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}c_{i_1,\ldots,i_k}E_{i_1,\ldots,i_k}=0.$$  
>>8. Evaluamos ambos lados en $(e^1_{a_1},\ldots,e^k_{a_k})$. Entonces $$0=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}c_{i_1,\ldots,i_k}E_{i_1,\ldots,i_k}(e^1_{a_1},\ldots,e^k_{a_k}).$$  
>>9. Usando el cálculo anterior, $$0=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}c_{i_1,\ldots,i_k}\delta_{i_1a_1}\cdots\delta_{i_ka_k}.$$  
>>10. Todos los términos se anulan salvo el término con $(i_1,\ldots,i_k)=(a_1,\ldots,a_k)$, por lo tanto $$c_{a_1,\ldots,a_k}=0.$$  
>>11. Como $(a_1,\ldots,a_k)$ era arbitrario, todos los coeficientes son cero. Luego $B$ es linealmente independiente.  
>>12. Probemos ahora que $B$ genera $L(V_1,\ldots,V_k;\mathbb R)$. Sea $F\in L(V_1,\ldots,V_k;\mathbb R)$. Queremos probar que $$F=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}F(e^1_{i_1},\ldots,e^k_{i_k})E_{i_1,\ldots,i_k}.$$  
>>13. Sean $v_j\in V_j$ arbitrarios. Como $\{e^j_1,\ldots,e^j_{n_j}\}$ es base de $V_j$, existen escalares $a^j_{i_j}$ tales que $$v_j=\sum_{i_j=1}^{n_j}a^j_{i_j}e^j_{i_j}.$$  
>>14. Como $\{\varepsilon^j_1,\ldots,\varepsilon^j_{n_j}\}$ es la base dual, los coeficientes están dados por $$a^j_{i_j}=\varepsilon^j_{i_j}(v_j).$$  
>>15. Entonces, por multilinealidad de $F$, $$F(v_1,\ldots,v_k)=F\left(\sum_{i_1=1}^{n_1}a^1_{i_1}e^1_{i_1},\ldots,\sum_{i_k=1}^{n_k}a^k_{i_k}e^k_{i_k}\right).$$  
>>16. Expandiendo en cada variable, obtenemos $$F(v_1,\ldots,v_k)=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}a^1_{i_1}\cdots a^k_{i_k}F(e^1_{i_1},\ldots,e^k_{i_k}).$$  
>>17. Sustituyendo $a^j_{i_j}=\varepsilon^j_{i_j}(v_j)$, queda $$F(v_1,\ldots,v_k)=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}\varepsilon^1_{i_1}(v_1)\cdots\varepsilon^k_{i_k}(v_k)F(e^1_{i_1},\ldots,e^k_{i_k}).$$  
>>18. Por definición de $E_{i_1,\ldots,i_k}$, esto es $$F(v_1,\ldots,v_k)=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}F(e^1_{i_1},\ldots,e^k_{i_k})E_{i_1,\ldots,i_k}(v_1,\ldots,v_k).$$  
>>19. Como esto vale para todo $(v_1,\ldots,v_k)$, concluimos que $$F=\sum_{i_1=1}^{n_1}\cdots\sum_{i_k=1}^{n_k}F(e^1_{i_1},\ldots,e^k_{i_k})E_{i_1,\ldots,i_k}.$$  
>>20. Luego $B$ genera $L(V_1,\ldots,V_k;\mathbb R)$.  
>>21. Como $B$ es linealmente independiente y genera $L(V_1,\ldots,V_k;\mathbb R)$, $B$ es una base.  
>>22. Finalmente, para elegir un elemento de $B$, debemos elegir un índice $i_j$ entre $1$ y $n_j$ para cada $j=1,\ldots,k$. Por lo tanto $B$ tiene $n_1n_2\cdots n_k$ elementos, y entonces $$\dim L(V_1,\ldots,V_k;\mathbb R)=n_1n_2\cdots n_k.$$

>[!Definition]
>Sean $V_1,\ldots,V_k$ espacios vectoriales y $V_1^*,\ldots,V_k^*$ sus respectivos espacios duales. Se denota por
>$$V_1^*\otimes\cdots\otimes V_k^*$$
>al subespacio de $L(V_1,\ldots,V_k;\mathbb R)$ generado por
>$$\{\alpha_1\otimes\cdots\otimes\alpha_k:\alpha_i\in V_i^*\}.$$
>Por la prop. anterior:
>$$L(V_1,\ldots,V_k;\mathbb R)=V_1^*\otimes\cdots\otimes V_k^*.$$

>[!Proposition]- Propiedad caracteristica del producto tensorial
>Sean $V_1,\ldots,V_k$ espacios vectoriales reales de dimension finita y sea $W$ un espacio vectorial real (no necesariamente de dimension finita). Sea
>$$A:V_1^*\times\cdots\times V_k^*\to W$$
>en $L(V_1^*,\ldots,V_k^*;W)$.
>
>Entonces existe una unica transformacion lineal
>$$\hat A:V_1^*\otimes\cdots\otimes V_k^*\to W$$
>tal que $A=\hat A\circ\pi$, con
>$$\pi:V_1^*\times\cdots\times V_k^*\to V_1^*\otimes\cdots\otimes V_k^*,$$
>$$\pi(\alpha_1,\ldots,\alpha_k)=\alpha_1\otimes\cdots\otimes\alpha_k.$$
>
>>[!Proof]-
>>1. Fijar base $\{\varepsilon^i_1,\ldots,\varepsilon^i_{n_i}\}$ base dual de $V_i^*$.
>>2. La multilinealidad de $A$ nos dice que $A$ va estar determinada por lo que haga en la $k$-upla $$(\varepsilon^1_{i_1},\ldots,\varepsilon^k_{i_k}).$$
>>3. Llamemos $$w_{i_1,\ldots,i_k}=A(\varepsilon^1_{i_1},\ldots,\varepsilon^k_{i_k}).$$
>>4. Por la proposicion anterior, $\varepsilon^1_{i_1}\otimes\cdots\otimes\varepsilon^k_{i_k}$ es base de $V_1^*\otimes\cdots\otimes V_k^*$, entonces definimos $\hat A$ sobre los elementos de la base como $$\hat A(\varepsilon^1_{i_1}\otimes\cdots\otimes\varepsilon^k_{i_k})=w_{i_1,\ldots,i_k}.$$
>>5. Y $\hat A$ es la unica que cumple esta condicion, pues cualquier otra, digamos $\tilde A$, al cumplir $$\tilde A\circ\pi=A,$$va a implicar que $$\tilde A\circ\pi(\varepsilon^1_{i_1},\ldots,\varepsilon^k_{i_k})=w_{i_1,\ldots,i_k},$$
>>6. Es decir $$\tilde A(\varepsilon^1_{i_1}\otimes\cdots\otimes\varepsilon^k_{i_k})=w_{i_1,\ldots,i_k}.$$

## Tensores covariantes

>[!Definition] $k$-tensores covariante
>Sea $V^*$ un espacio vectorial real de dimension finita y sea $k\in\mathbb N$. Un $k$-tensor covariante sobre $V$ es un elemento de $$\underbrace{V^*\otimes\cdots\otimes V^*}_{k\text{-veces}},$$lo cual es lo mismo a tener una funcion multilineal real valuada $$\alpha:\underbrace{V\times\cdots\times V}_{k\text{-veces}}\to\mathbb R.$$
>El numero $k$ se llama rango del tensor.
>Por convencion, un $0$-tensor es un numero real.
>Se denota al conjunto del los $k$ tensores por $T^k(V^*):=V^*\otimes\cdots\otimes V^*$, Entonces $$T^1(V^*)=V^*,\qquad T^0(V^*)=\mathbb R.$$

>[!Definition] Tensores alternantes
>Sea $\alpha:V\times\cdots\times V\to\mathbb R$ un $k$-tensor covariante. Se dice que $\alpha$ es alternante, si para todo $\sigma\in S_k$, una permutacion de $k$ elementos, se cumple $$\alpha(v_{\sigma(1)},\ldots,v_{\sigma(k)})=\operatorname{sg}(\sigma)\alpha(v_1,\ldots,v_k)$$para todo $v_1,\ldots,v_k\in V$.
>Se denota por $\Lambda^k(V^*)$ el subconjunto de $T^k(V^*)$ formado solo por los que son alternantes, el cual es naturalmente un subespacio vectorial.

>[!Exercise]
>Mostrar que $\alpha\in\Lambda^k(V^*)$ sii
>$$\alpha(v_1,\ldots,v_i,\ldots,v_j,\ldots,v_k)=-\alpha(v_1,\ldots,v_j,\ldots,v_i,\ldots,v_k)$$
>para todo $i,j$ con $1\le i<j\le k$.
>
>>[!Proof]-  
>>1. Supongamos primero que $\alpha\in\Lambda^k(V^*)$.  
>>2. Por definición, para toda permutación $\sigma\in S_k$ se cumple $$\alpha(v_{\sigma(1)},\dots,v_{\sigma(k)})=\operatorname{sg}(\sigma)\alpha(v_1,\dots,v_k).$$  
>>3. Fijemos $i<j$ y sea $\tau\in S_k$ la transposición que intercambia $i$ y $j$, dejando fijos los demás índices.  
>>4. Entonces $\operatorname{sg}(\tau)=-1$.  
>>5. Aplicando la definición de tensor alternante a la transposición $\tau$, obtenemos $$\alpha(v_{\tau(1)},\dots,v_{\tau(k)})=-\alpha(v_1,\dots,v_k).$$  
>>6. Pero $(v_{\tau(1)},\dots,v_{\tau(k)})$ es la lista $(v_1,\dots,v_j,\dots,v_i,\dots,v_k)$, porque $\tau$ intercambia solamente las posiciones $i$ y $j$.  
>>7. Por lo tanto, $$\alpha(v_1,\dots,v_j,\dots,v_i,\dots,v_k)=-\alpha(v_1,\dots,v_i,\dots,v_j,\dots,v_k).$$  
>>8. Equivalentemente, $$\alpha(v_1,\dots,v_i,\dots,v_j,\dots,v_k)=-\alpha(v_1,\dots,v_j,\dots,v_i,\dots,v_k).$$  
>>9. Recíprocamente, supongamos que para todo $i<j$ se cumple $$\alpha(v_1,\dots,v_i,\dots,v_j,\dots,v_k)=-\alpha(v_1,\dots,v_j,\dots,v_i,\dots,v_k).$$  
>>10. Queremos probar que $\alpha\in\Lambda^k(V^*)$. Es decir, queremos probar que para toda permutación $\sigma\in S_k$ se cumple $$\alpha(v_{\sigma(1)},\dots,v_{\sigma(k)})=\operatorname{sg}(\sigma)\alpha(v_1,\dots,v_k).$$  
>>11. Sea entonces $\sigma\in S_k$. Sabemos que toda permutación puede escribirse como producto de transposiciones, es decir, existen transposiciones $\tau_1,\dots,\tau_m$ tales que $$\sigma=\tau_m\circ\cdots\circ\tau_1.$$  
>>12. Cada transposición intercambia dos entradas. Por hipótesis, cada vez que intercambiamos dos entradas, el valor de $\alpha$ cambia de signo.  
>>13. Aplicando sucesivamente esta propiedad a las transposiciones $\tau_1,\dots,\tau_m$, obtenemos $$\alpha(v_{\sigma(1)},\dots,v_{\sigma(k)})=(-1)^m\alpha(v_1,\dots,v_k).$$  
>>14. Por definición del signo de una permutación escrita como producto de transposiciones, se tiene $$\operatorname{sg}(\sigma)=(-1)^m.$$  
>>15. Luego $$\alpha(v_{\sigma(1)},\dots,v_{\sigma(k)})=\operatorname{sg}(\sigma)\alpha(v_1,\dots,v_k).$$  
>>16. Como esto vale para toda $\sigma\in S_k$, se sigue que $\alpha$ es alternante.  
>>17. Por lo tanto, $\alpha\in\Lambda^k(V^*)$.

>[!Example] Algunos $k$-tensores alternantes
>- Cualquier $\alpha\in V^*=T^1(V^*)$ es alternante.
>- Tambien $$\det:\underbrace{\mathbb R^n\times\cdots\times\mathbb R^n}_{n\text{-veces}}\to\mathbb R$$esta en $\Lambda^n((\mathbb R^n)^*)$.

>[!Definition] Alternador
>Dado $\theta\in T^k(V^*)$, se define la parte antisimetrica de $\theta$, denotada por $\operatorname{Alt}(\theta)$, como el $k$-tensor
>$$\operatorname{Alt}(\theta)(v_1,\ldots,v_k)=\frac1{k!}\sum_{\sigma\in S_k}(\operatorname{sign}\sigma)\theta(v_{\sigma(1)},\ldots,v_{\sigma(k)}).$$

>[!Proposition] Ejercicio
>- Para todo $\theta\in T^k(V^*)$, se tiene $\operatorname{Alt}(\theta)\in\Lambda^k(V^*)$, lo cual define una transformacion lineal
>$$\operatorname{Alt}:T^k(V^*)\to\Lambda^k(V^*).$$
>- Si $\theta\in\Lambda^k(V^*)$, entonces $\operatorname{Alt}(\theta)=\theta$.
>
>>[!Proof]-  
>>- $\operatorname{Alt}(\theta)\in\Lambda^k(V^*)$
>>	1. Recordemos que, para $\theta\in T^k(V^*)$, se define $$\operatorname{Alt}(\theta)(v_1,\dots,v_k):=\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\theta(v_{\sigma(1)},\dots,v_{\sigma(k)}).$$  
>>	2. Primero probamos que $\operatorname{Alt}(\theta)$ es multilineal. Para cada $\sigma\in S_k$, la aplicación $$(v_1,\dots,v_k)\mapsto \theta(v_{\sigma(1)},\dots,v_{\sigma(k)})$$ es multilineal, porque $\theta$ es multilineal.  
>>	3. Como $\operatorname{Alt}(\theta)$ es una combinación lineal finita de aplicaciones multilineales, se sigue que $\operatorname{Alt}(\theta)$ es multilineal.  
>>	4. Ahora probamos que $\operatorname{Alt}(\theta)$ es alternante. Sea $\tau\in S_k$. Queremos probar que $$\operatorname{Alt}(\theta)(v_{\tau(1)},\dots,v_{\tau(k)})=\operatorname{sg}(\tau)\operatorname{Alt}(\theta)(v_1,\dots,v_k).$$  
>>	5. Por definición de $\operatorname{Alt}$, tenemos $$\operatorname{Alt}(\theta)(v_{\tau(1)},\dots,v_{\tau(k)})=\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\theta(v_{\tau(\sigma(1))},\dots,v_{\tau(\sigma(k))}).$$  
>>	6. Como $v_{\tau(\sigma(r))}=v_{(\tau\circ\sigma)(r)}$, podemos escribir $$\operatorname{Alt}(\theta)(v_{\tau(1)},\dots,v_{\tau(k)})=\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\theta(v_{(\tau\circ\sigma)(1)},\dots,v_{(\tau\circ\sigma)(k)}).$$  
>>	7. Hacemos el cambio de variable $\rho=\tau\circ\sigma$. Cuando $\sigma$ recorre $S_k$, también $\rho$ recorre $S_k$. Además, $\sigma=\tau^{-1}\circ\rho$.  
>>	8. Entonces $$\operatorname{sg}(\sigma)=\operatorname{sg}(\tau^{-1}\circ\rho)=\operatorname{sg}(\tau^{-1})\operatorname{sg}(\rho)=\operatorname{sg}(\tau)\operatorname{sg}(\rho).$$  
>>	9. Sustituyendo en la suma, obtenemos $$\begin{aligned}\operatorname{Alt}(\theta)(v_{\tau(1)},\dots,v_{\tau(k)})&=\frac{1}{k!}\sum_{\rho\in S_k}\operatorname{sg}(\tau)\operatorname{sg}(\rho)\theta(v_{\rho(1)},\dots,v_{\rho(k)})\\&=\operatorname{sg}(\tau)\frac{1}{k!}\sum_{\rho\in S_k}\operatorname{sg}(\rho)\theta(v_{\rho(1)},\dots,v_{\rho(k)})\\&=\operatorname{sg}(\tau)\operatorname{Alt}(\theta)(v_1,\dots,v_k).\end{aligned}$$  
>>	10. Por lo tanto, $\operatorname{Alt}(\theta)$ es alternante. Como además es multilineal, se tiene $\operatorname{Alt}(\theta)\in\Lambda^k(V^*)$. 
>>- **Linealidad**
>>	1. Ahora probamos que $\operatorname{Alt}:T^k(V^*)\to\Lambda^k(V^*)$ es lineal. Sean $\theta,\eta\in T^k(V^*)$ y $a,b\in\mathbb R$.  
>>	2. Entonces $$\begin{aligned}\operatorname{Alt}(a\theta+b\eta)(v_1,\dots,v_k)&=\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)(a\theta+b\eta)(v_{\sigma(1)},\dots,v_{\sigma(k)})\\&=a\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\theta(v_{\sigma(1)},\dots,v_{\sigma(k)})\\&\quad+b\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\eta(v_{\sigma(1)},\dots,v_{\sigma(k)})\\&=a\operatorname{Alt}(\theta)(v_1,\dots,v_k)+b\operatorname{Alt}(\eta)(v_1,\dots,v_k).\end{aligned}$$  
>>	3. Por lo tanto, $$\operatorname{Alt}(a\theta+b\eta)=a\operatorname{Alt}(\theta)+b\operatorname{Alt}(\eta).$$ Así, $\operatorname{Alt}$ es lineal.
>>- $\operatorname{Alt}(\theta)=\theta$
>>	1. Finalmente, supongamos que $\theta\in\Lambda^k(V^*)$. Entonces, para toda $\sigma\in S_k$, se cumple $$\theta(v_{\sigma(1)},\dots,v_{\sigma(k)})=\operatorname{sg}(\sigma)\theta(v_1,\dots,v_k).$$  
>>	2. Por la definición de $\operatorname{Alt}$, $$\begin{aligned}\operatorname{Alt}(\theta)(v_1,\dots,v_k)&=\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\theta(v_{\sigma(1)},\dots,v_{\sigma(k)})\\&=\frac{1}{k!}\sum_{\sigma\in S_k}\operatorname{sg}(\sigma)\operatorname{sg}(\sigma)\theta(v_1,\dots,v_k).\end{aligned}$$  
>>	3. Como $\operatorname{sg}(\sigma)^2=1$, resulta $$\begin{aligned}\operatorname{Alt}(\theta)(v_1,\dots,v_k)&=\frac{1}{k!}\sum_{\sigma\in S_k}\theta(v_1,\dots,v_k)\\&=\frac{1}{k!}k!\theta(v_1,\dots,v_k)\\&=\theta(v_1,\dots,v_k).\end{aligned}$$  
>>	4. Como esto vale para todo $v_1,\dots,v_k\in V$, concluimos que $$\operatorname{Alt}(\theta)=\theta.$$

^c407fe

>[!Definition] Producto exterior o producto cuña
>Sean $\omega\in\Lambda^k(V^*)$, $\theta\in\Lambda^l(V^*)$. Se define el producto exterior de $\omega$ y $\theta$, denotado por $\omega\wedge\theta$, como el $(k+l)$-tensor covariante
>$$\omega\wedge\theta:=\frac{(k+l)!}{k!\,l!}\operatorname{Alt}(\omega\otimes\theta).$$
>Es decir,
>$$(\omega\wedge\theta)(v_1,\ldots,v_{k+l})= \frac{(k+l)!}{k!\,l!}\frac1{(k+l)!}\sum_{\sigma\in S_{k+l}}(\operatorname{sign}\sigma)(\omega\otimes\theta)(v_{\sigma(1)},\ldots,v_{\sigma(k+l)})$$
>$$= \frac1{k!\,l!}\sum_{\sigma\in S_{k+l}}(\operatorname{sign}\sigma)\, \omega(v_{\sigma(1)},\ldots,v_{\sigma(k)})\theta(v_{\sigma(k+1)},\ldots,v_{\sigma(k+l)}).$$

>[!Proposition] Ejercicio
>1. $(\omega_1+\omega_2)\wedge\theta=\omega_1\wedge\theta+\omega_2\wedge\theta$.
>2. $\omega\wedge(\theta_1+\theta_2)=\omega\wedge\theta_1+\omega\wedge\theta_2$.
>3. Si $s\in\mathbb R$, entonces $(s\omega)\wedge\theta=\omega\wedge(s\theta)=s(\omega\wedge\theta)$.
>4. Asociativa:
>$$\omega\wedge(\theta\wedge\xi):=(\omega\wedge\theta)\wedge\xi.$$
>5. Anticonmutatividad: si $\omega\in\Lambda^k(V^*)$, $\theta\in\Lambda^l(V^*)$, entonces
>$$\omega\wedge\theta=(-1)^{kl}\theta\wedge\omega.$$
>6. Menores: si $\alpha_1,\ldots,\alpha_k\in V^*$, entonces
>$$(\alpha_1\wedge\cdots\wedge\alpha_k)(v_1,\ldots,v_k)=\det(\alpha_i(v_j)).$$
>7. Si $\theta\in\Lambda^k(V^*)$ con $k$ impar, entonces
>$$\theta\wedge\theta=0.$$
>En particular, si $\alpha\in V^*$, entonces $\alpha\wedge\alpha=0$.
>8. Leer Tu seccion 3.9.
>9. Leer Tu, prop. 3.27.
>
>>[!Proof]- Ayuda para (5)
>>Sean $\omega\in\Lambda^k(V^*)$, $\theta\in\Lambda^l(V^*)$. Se define $\mu\in S_{k+l}$ por
>>$$\mu=(1,\ldots,l,l+1,\ldots,l+k;\ k+1,\ldots,k+l,1,\ldots,k).$$
>>
>>Asi,
>>$$\omega\wedge\theta(v_1,\ldots,v_{k+l}) =\frac1{k!\,l!}\sum_{\sigma\in S_{k+l}}(\operatorname{sign}\sigma)\omega(v_{\sigma(1)},\ldots,v_{\sigma(k)}) \theta(v_{\sigma(k+1)},\ldots,v_{\sigma(k+l)}).$$
>>
>>Resta calcular el signo de $\mu$. Considerar
>>$$\rho_1=\begin{pmatrix} 1&2&\cdots&k+l-1&k+l\\ 2&3&\cdots&k+l&1 \end{pmatrix},$$
>>$$\rho_2=\begin{pmatrix} 1&2&\cdots&k+l-1&k+l\\ 3&4&\cdots&1&2 \end{pmatrix},$$
>>$$\vdots$$
>>$$\rho^k=\begin{pmatrix} 1&\cdots&l&l+1&\cdots&k+l\\ k+1&\cdots&k+l&1&\cdots&k \end{pmatrix}=\mu.$$
>>
>>Por tanto, $\operatorname{sign}\mu=(\operatorname{sign}\rho)^k$.
>>Como $\rho$ es un ciclo,
>>$$\operatorname{sign}\rho=(-1)^{k+l-1},$$
>>de donde
>>$$\operatorname{sign}\mu=\left((-1)^{k+l-1}\right)^k=(-1)^{kl}.$$
>>- Ayuda para (6)
>>Venimos a probar que $\theta$ es un conjunto L.I. si
>>$$\theta=\sum_{1\le i_1<\cdots<i_k\le n}c_{i_1,\ldots,i_k}e^*_{i_1}\wedge\cdots\wedge e^*_{i_k}.$$
>>Evaluamos en la $k$-upla $(e_{j_1},\ldots,e_{j_k})$, con $1\le j_1<\cdots<j_k\le n$.
>>
>>Como
>>$$e^*_{i_1}\wedge\cdots\wedge e^*_{i_k}(e_{j_1},\ldots,e_{j_k}) = \det(e^*_{i_p}(e_{j_q}))_{p,q=1}^k,$$
>>entonces vale $1$ si $(i_1,\ldots,i_k)=(j_1,\ldots,j_k)$ y $0$ en otro caso. Luego los coeficientes son cero.

^8619e2

>[!Theorem]
>Sea $\{e_1,\ldots,e_n\}$ base de $V$ y $\{e^*_1,\ldots,e^*_n\}$ la respectiva base dual de $V^*$. Si $k\le n$, entonces
>$$\mathcal B=\{e^*_{i_1}\wedge\cdots\wedge e^*_{i_k}:1\le i_1<\cdots<i_k\le n\}$$
>es una base de $\Lambda^k(V^*)$ y
>$$\dim\Lambda^k(V^*)=\binom nk.$$
>
>Si $k>n$, entonces $\Lambda^k(V^*)=\{0\}$.
>
>>[!Proof]-
>>Veamos primero que $\mathcal B$ es un conjunto L.I. Si
>>$$0=\sum_{1\le i_1<\cdots<i_k\le n}c_{i_1,\ldots,i_k}e^*_{i_1}\wedge\cdots\wedge e^*_{i_k},$$
>>evaluamos en la $k$-upla $(e_{j_1},\ldots,e_{j_k})$, con $1\le j_1<\cdots<j_k\le n$.
>>
>>Como
>>$$e^*_{i_1}\wedge\cdots\wedge e^*_{i_k}(e_{j_1},\ldots,e_{j_k}) = \begin{cases} 1 & \text{si }(i_1,\ldots,i_k)=(j_1,\ldots,j_k),\\ 0 & \text{en otro caso}, \end{cases}$$
>>resulta $c_{i_1,\ldots,i_k}=0$ para todo $1\le i_1<\cdots<i_k\le n$.
>>
>>Veamos que genera. Sea $\theta\in\Lambda^k(V^*)$ y entonces, como $\theta\in T^k(V^*)$,
>>$$\theta=\sum a_{i_1,\ldots,i_k}e^*_{i_1}\otimes\cdots\otimes e^*_{i_k}.$$
>>Entonces, como $\theta\in\Lambda^k(V^*)$,
>>$$\theta=\operatorname{Alt}\theta= \sum a_{i_1,\ldots,i_k}\operatorname{Alt}(e^*_{i_1}\otimes\cdots\otimes e^*_{i_k}).$$
>>Luego se reordena cada termino, y si hay al menos dos indices iguales el termino es cero; si no,
>>$$\operatorname{Alt}(e^*_{i_1}\otimes\cdots\otimes e^*_{i_k})=\text{multiplo de }e^*_{i_{\sigma(1)}}\wedge\cdots\wedge e^*_{i_{\sigma(k)}}$$
>>para indices ordenados. Por lo que genera.

>[!Definition] Algebra exterior
>Se define $\Lambda^0(V^*)=\mathbb R$.
>Se define $$\Lambda(V^*):=\Lambda^0(V^*)\oplus\Lambda^1(V^*)\oplus\cdots\oplus\Lambda^n(V^*)$$y se extiende el producto cuña $\wedge$ a todo $\Lambda(V^*)$ de manera bilineal. Es decir, si $$\alpha=\alpha_0+\alpha_1+\cdots+\alpha_n,\qquad \alpha_i\in\Lambda^i(V^*)$$
>y $$\beta=\beta_0+\beta_1+\cdots+\beta_n,\qquad \beta_j\in\Lambda^j(V^*),$$entonces se define $$\alpha\wedge\beta:=\sum_{i=0}^n\sum_{j=0}^n\alpha_i\wedge\beta_j,$$donde $$t\in\Lambda^0(V^*),\quad \theta\in\Lambda^k(V^*)\implies t\wedge\theta=t\theta.$$
>Por las propiedades anteriores, $(\Lambda(V^*),\wedge)$ es una algebra asociativa, no conmutativa y con unidad $1\in\Lambda^0(V^*)$, que tiene dimension
>$$\binom n0+\binom n1+\cdots+\binom nn=2^n,$$
>y se llama algebra exterior.

^2c0c65

