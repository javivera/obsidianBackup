## Distribuciones

>[!Remark]
>Intentamos generalizar la idea de campo: que a cada punto asigna un vector. A cada punto asigna un subespacio tangente.

>[!Definition] Distribucion
>Una distribucion en $M$ es una aplicacion $\mathcal D$ que a cada punto $p\in M$ le asigna un subespacio $\mathcal D_p$ de $T_pM$ de dimension $k$.

>[!Definition] Suavidad de Distribucion
>Una distribucion $\mathcal D$ se dice suave si para todo $p\in M$, existe un abierto de $M$ en $p$, y campos $X_1,\ldots,X_k$ en $\mathfrak X(U)$ tales que
>$$\mathcal D_q=\operatorname{span}\{X_1(q),\ldots,X_k(q)\},$$
>para todo $q\in U$.

>[!Remark]
>Existe la nocion de subfibrado de rango $k$ de $TM$, habria estado lindo haberla visto y definir distribucion con esto.

>[!Remark]
>Intentamos generalizar la nocion de curva integral.

>[!Definition] Distribucion integrable
>Una distribucion suave $\mathcal D$ se dice integrable si para todo $p\in M$, existe una subvariedad $(N,F)$ de $M$ con $p\in F(N)$ y
>$$(dF)_qT_qN=\mathcal D_{F(q)},$$
>para todo $q\in N$.
>
>La subvariedad $(N,F)$ se llama subvariedad integral de $M$ para $\mathcal D$ que pasa por $p$.

>[!Remark] Dibujo ultil para entender
>Criollo: una subvariedad integral es una subvariedad que se acomoda muy bien a los subespacios que hay fijos en cada punto.
>![[Pasted image 20260603132446.png]]

>[!Example]
>Sea $X$ un campo suave que nunca se anula. Entonces $X$ genera una distribucion suave $$\mathcal D_p=\operatorname{span}\{X_p\}.$$
>Y cualquier curva integral de $X$ es subvariedad integral de la distribucion. Necesitamos que $X$ no se anule por la nocion de dimension que impusimos a las distribuciones.

>[!Example]
>Si $M=\mathbb R^n$ y $$\mathcal D_q=\operatorname{span}\left\{\frac{\partial}{\partial x_1}\bigg|_q,\ldots,\frac{\partial}{\partial x_k}\bigg|_q\right\},$$este tiene ejemplo de subvariedades integrales para esta distribucion.

>[!Example]
>En $M=\mathbb R^3$, $$\mathcal D_q=\operatorname{span}\left\{\frac{\partial}{\partial x}\bigg|_q+z(q)\frac{\partial}{\partial z}\bigg|_q,\frac{\partial}{\partial y}\bigg|_q\right\}$$es una distribucion que no es integrable, como veremos mas adelante.

>[!Definition] Distribucion involutiva
>Sea $\mathcal D$ una distribucion suave en $M$. Si $U$ es abierto de $M$ y $X\in\mathfrak X(U)$, se dice que $X$ esta en $\mathcal D$ si $X_p\in\mathcal D_p$ para todo $p\in U$. La distribucion se dice involutiva si se cumple que $X,Y$ en $\mathcal D$, entonces $[X,Y]$ esta en $\mathcal D$.

>[!Exercise]
>Sea $\mathcal D$ una distribucion suave de dimension $k$. Probar que $\mathcal D$ es involutiva si y solo si para todo $p\in M$, existe un entorno $U$ de $p$ y $Z_1,\ldots,Z_k$ campos suaves en $\mathfrak X(U)$ tales que
>$$\mathcal D_q=\operatorname{span}\{(Z_1)_q,\ldots,(Z_k)_q\}$$
>para todo $q\in U$, y $$[Z_i,Z_j]\text{ esta en }\mathcal D,\qquad 1\le i,j\le k.$$ osea $$[Z_{i},Z_{j}]_{q}\in \mathcal{D}_{q}\quad1\leq i,j\leq k$$

>[!Proposition] D integrable implica involutiva
>Sea $\mathcal D$ una distribucion suave de dimension $k$. Si $\mathcal D$ es integrable, entonces es involutiva.
>
>>[!Proof]-
>>Sean $X,Y$ campos en $\mathcal D$. Queremos que $[X,Y]$ esta en $\mathcal D$.
>>
>>Sea $q\in M$ arbitrario y sea $(N,F)$ subvariedad integral de $\mathcal D$ por $q=F(p)$, $p\in N$.
>>
>>Como $(dF)_pT_pN=\mathcal D_{F(p)}$ para todo $p\in N$, y $X_{F(p)},Y_{F(p)}\in\mathcal D_{F(p)}$.
>>
>>Por [[GS - Pr4#^ejercicio-8-pr4|Ejercicio 8, practico 4]], existen campos suaves $\widetilde X,\widetilde Y$ en $\mathfrak X(N)$ tales que
>>$$(dF)_p\widetilde X_p=X_{F(p)},\qquad (dF)_p\widetilde Y_p=Y_{F(p)},$$
>>para todo $p\in N$.
>>
>>Esto no es mas que $\widetilde X$ e $\widetilde Y$ estan $F$-relacionados con $X,Y$. Tenemos por teorema que $[\widetilde X,\widetilde Y]$ esta $F$-relacionado con $[X,Y]$; es decir
>>$$(dF)_p[\widetilde X,\widetilde Y]_p=[X,Y]_{F(p)},$$
>>para todo $p\in N$.
>>
>>Por tanto, como $(dF)_p[\widetilde X,\widetilde Y]_p\in\mathcal D_{F(p)}$, por definicion de subvariedad integral, tenemos $[X,Y]_{F(p)}\in\mathcal D_{F(p)}$.

>[!Remark]
>Ahora nos enfocamos en probar la vuelta.

>[!Theorem] Frobenius local / Warner Th. 1.60
>Toda distribucion involutiva es integrable.
>
>Mejor aun, para todo $p\in M$, existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$, cubico centrado en $p$, tal que las rebanadas
>$$D=\{q\in U:x_j(q)=\text{constante},\ j=k+1,\ldots,n\}$$
>son subvariedades integrales de $\mathcal D$.
>
>Ademas, si $N\subset M$ es una subvariedad integral conexa de $\mathcal D$ tal que $N\subset U$, entonces $N$ debe estar contenida en una de estas rebanadas.
>
>>[!Proof]-
>>Sea $\mathcal D$ una distribucion de dimension $k$. Nos paramos en $p$, y tenemos $\mathcal D_p=\operatorname{span}\{v_1,\ldots,v_k\}$.
>>
>>Sabemos por una proposicion probada en el capitulo de Campos que existe una carta $(V,\psi=(y_1,\ldots,y_n))$, centrada en $p$, tal que
>>$$v_j=\frac{\partial}{\partial y_j}\bigg|_p,\qquad j=1,\ldots,k.$$
>>
>>Nos llevamos la distribucion para el abierto $\psi(V)$ de $\mathbb R^n$, usando la carta. Tenemos una distribucion $\mathcal D$ en $\psi(V)$, con $0=\psi(p)$, y tal que
>>$$\mathcal D_0=\operatorname{span}\left\{\frac{\partial}{\partial y_1}\bigg|_0,\ldots,\frac{\partial}{\partial y_k}\bigg|_0\right\}.$$
>>
>>Como la distribucion es suave, tenemos campos suaves $X_1,\ldots,X_k$ definidos en un abierto de $\psi(V)$ tal que
>>$$\mathcal D_q=\operatorname{span}\{(X_1)_q,\ldots,(X_k)_q\}.$$
>>
>>Por tanto, podemos usar el marco $\left\{\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n}\right\}$ para escribir estos campos como combinacion lineal
>>$$X_j=\sum_{i=1}^na_{ij}\frac{\partial}{\partial y_i},$$
>>donde $a_{ij}$ son funciones suaves sobre un abierto contenido en $\psi(V)$.
>>
>>Armando la matriz $T(q)=(a_{ij}(q))$, cuando hacemos $T(0)$, esta matriz tiene la submatriz $T(0)_{1\ldots k,1\ldots k}$ igual a la identidad, porque $(X_j)_0=\frac{\partial}{\partial y_j}\big|_0$. Podemos pensar en la funcion
>>$$f:\psi(V)\to\mathbb R,\qquad q\mapsto\det(T(q)_{1\ldots k,1\ldots k}).$$
>>
>>La cual es una funcion suave por las entradas de la matriz $T(q)$ son suaves. Como $f(0)=1\ne0$, existe un abierto de $0$ donde $f(q)\ne0$. Achicamos $\psi(V)$, si hace falta, y podemos asumir que esto pasa en $\psi(V)$.
>>
>>Por tanto, tiene sentido hablar de la matriz inversa de la submatriz $T(q)_{1\ldots k,1\ldots k}$, digamos $Q(q)$. Esto define una funcion
>>$$Q:\psi(V)\to M_{k\times k}(\mathbb R),\qquad q\mapsto Q(q),$$
>>tal que
>>$$T(q)_{1\ldots k,1\ldots k}\cdot Q(q)=I_k.$$
>>
>>Notar que las entradas de la matriz que da $Q$ son funciones suaves, pues son funciones racionales entre productos y sumas con las entradas de $T(q)$, con denominador el determinante de $T(q)_{1\ldots k,1\ldots k}$, el cual no se anula en $\psi(V)$.
>>
>>Luego
>>$$T(q)Q(q)=\begin{pmatrix}1& &0\\ &\ddots& \\0& &1\\ b_{k+1,1}&\cdots&b_{k+1,k}\\ \vdots& &\vdots\\ b_{n1}&\cdots&b_{nk}\end{pmatrix}.$$
>>
>>¿Que hemos hecho? Por algebra, lo que se ha hecho es cambiar los generadores de la distribucion. Como los vectores columnas de $T(q)$ generan $\mathcal D_q$ y $Q(q)$ da los escalares para que las combinaciones lineales de las columnas de $T(q)$ generen los vectores columnas de la matriz de la derecha, tenemos que $\mathcal D$ es generada en el abierto $\psi(V)$ por los campos $\widetilde X_1,\ldots,\widetilde X_k$ con
>>$$\widetilde X_j=\frac{\partial}{\partial y_j}+\sum_{i=k+1}^nb_{ij}\frac{\partial}{\partial y_i},\qquad b_{ij}\in C^\infty(V).$$
>>
>>La forma de pensarlo: recordemos que en algebra 2, cuando pedian dar una base de un subespacio vectorial generado por $k$ vectores, se ponian en una matriz como vectores fila y se hacia Gauss-Jordan; en cada paso estamos haciendo combinaciones lineales de las filas, y el resultado final es otro conjunto generador muy lindo del subespacio vectorial.
>>
>>Lo lindo que tiene este nuevo conjunto de generadores es que conmutan.
>>
>>Hagamos:
>>$$[\widetilde X_i,\widetilde X_j]=\left[\frac{\partial}{\partial y_i}+\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h},\frac{\partial}{\partial y_j}+\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right].$$
>>
>>Por bilinealidad del corchete y que $\left[\frac{\partial}{\partial y_i},\frac{\partial}{\partial y_j}\right]=0$, queda
>>$$[\widetilde X_i,\widetilde X_j]=\left[\frac{\partial}{\partial y_i},\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right]-\left[\frac{\partial}{\partial y_j},\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h}\right]+\left[\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h},\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right].$$
>>
>>Esto pertenece a
>>$$\operatorname{span}\left\{\frac{\partial}{\partial y_{k+1}},\ldots,\frac{\partial}{\partial y_n}\right\}.$$
>>
>>Por hipotesis, la distribucion es involutiva, por tanto $[\widetilde X_i,\widetilde X_j]\in\mathcal D$. Y como
>>$$\mathcal D_q\cap\operatorname{span}\left\{\frac{\partial}{\partial y_{k+1}}\bigg|_q,\ldots,\frac{\partial}{\partial y_n}\bigg|_q\right\}=\{0\},$$
>>se sigue la afirmacion
>>$$[\widetilde X_i,\widetilde X_j]=0.$$
>>
>>Con estos campos vamos a construir de manera natural una subvariedad integral. ¿Por que natural? Como los campos estan en la distribucion, entonces sus curvas integrales van a estar contenidas en las subvariedades integrales. Lo natural es combinar los flujos de cada campo para ir formando la subvariedad. Sabemos que esto sale bien cuando los campos conmutan.
>>
>>Si en estos momentos tuvieramos que dar una subvariedad integral por el origen $0$, usando que podemos tomar un abierto cubico de $0$ donde hay uniformidad conjunta para $\widetilde X_1,\ldots,\widetilde X_k$, con flujos $\theta^1,\ldots,\theta^k$ respectivamente, definimos
>>$$f:(-\delta,\delta)^k\to\mathbb R^n,\qquad (t_1,\ldots,t_k)\mapsto\theta^1_{t_1}\circ\cdots\circ\theta^k_{t_k}(0).$$
