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

>[!Remark]- Dibujo ultil para entender
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

>[!Proposition]
>Sea $\mathcal D$ una distribucion suave de dimension $k$. Si $\mathcal D$ es integrable, entonces es involutiva.
>>[!Proof]-
>>Sean $X,Y$ campos en $\mathcal D$. Queremos que $[X,Y]$ esta en $\mathcal D$.
>>
>>Sea $q\in M$ arbitrario y sea $(N,F)$ subvariedad integral de $\mathcal D$ por $q=F(p)$, $p\in N$.
>>
>>Como $(dF)_pT_pN=\mathcal D_{F(p)}$ para todo $p\in N$, y $X_{F(p)},Y_{F(p)}\in\mathcal D_{F(p)}$, entonces $X,Y$ son tangentes a $N$.
>>
>>Por el ejercicio 8, practico 4, existen campos suaves $\widetilde X,\widetilde Y$ en $\mathfrak X(N)$ tales que
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
>Mejor aun, para todo $p\in M$, existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ cubica centrado en $p$, tal que las rebanadas
>$$D=\{q\in U:x_j(q)=\text{constante},\ j=k+1,\ldots,n\}$$
>son subvariedades integrales de $\mathcal D$.
>
>Ademas, si $N\subset M$ es una subvariedad integral conexa de $\mathcal D$ tal que $N\subset U$, entonces $N$ debe estar contenida en una de estas rebanadas.
>>[!Proof]-
>>1. Sea $\mathcal D$ una distribucion de dimension $k$. Nos paramos en $p$, y tenemos $\mathcal D_p=\operatorname{span}\{v_1,\ldots,v_k\}$.
>>2. Sabemos por una proposicion probada en el capitulo de Campos que existe una carta $(V,\psi=(y_1,\ldots,y_n))$, centrada en $p$, tal que $$v_j=\frac{\partial}{\partial y_j}\bigg|_p,\qquad j=1,\ldots,k.$$
>>3. Nos llevamos la distribucion para el abierto $\psi(V)$ de $\mathbb R^n$, usando la carta. Tenemos una distribucion $\mathcal D$ en $\psi(V)$, con $0=\psi(p)$, y tal que $$\mathcal D_0=\operatorname{span}\left\{\frac{\partial}{\partial y_1}\bigg|_0,\ldots,\frac{\partial}{\partial y_k}\bigg|_0\right\}.$$
>>4. Como la distribucion es suave, tenemos campos suaves $X_1,\ldots,X_k$ definidos en un abierto de $\psi(V)$ tal que $$\mathcal D_q=\operatorname{span}\{(X_1)_q,\ldots,(X_k)_q\}.$$
>>5. Por tanto, podemos usar el marco $\left\{\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n}\right\}$ para escribir estos campos como combinacion lineal $$X_j=\sum_{i=1}^na_{ij}\frac{\partial}{\partial y_i},$$donde $a_{ij}$ son funciones suaves sobre un abierto contenido en $\psi(V)$.
>>6. Armando la matriz $T(q)=(a_{ij}(q))$, cuando hacemos $T(0)$, esta matriz tiene la submatriz $T(0)_{1\ldots k,1\ldots k}$ igual a la identidad, porque $(X_j)_0=\frac{\partial}{\partial y_j}\big|_0$. Podemos pensar en la funcion $$f:\psi(V)\to\mathbb R,\qquad q\mapsto\det(T(q)_{1\ldots k,1\ldots k}).$$
>>7. La cual es una funcion suave por las entradas de la matriz $T(q)$ son suaves. Como $f(0)=1\ne0$, existe un abierto de $0$ donde $f(q)\ne0$. Achicamos $\psi(V)$, si hace falta, y podemos asumir que esto pasa en $\psi(V)$.
>>8. Por tanto, tiene sentido hablar de la matriz inversa de la submatriz $T(q)_{1\ldots k,1\ldots k}$, digamos $Q(q)$. Esto define una funcion $$Q:\psi(V)\to M_{k\times k}(\mathbb R),\qquad q\mapsto Q(q),$$tal que $$T(q)_{1\ldots k,1\ldots k}\cdot Q(q)=I_k.$$
>>9. Notar que las entradas de la matriz que da $Q$ son funciones suaves, pues son funciones racionales entre productos y sumas con las entradas de $T(q)$, con denominador el determinante de $T(q)_{1\ldots k,1\ldots k}$, el cual no se anula en $\psi(V)$.
>>10. Luego $$T(q)Q(q)=\begin{pmatrix}1& &0\\ &\ddots& \\0& &1\\ b_{k+1,1}&\cdots&b_{k+1,k}\\ \vdots& &\vdots\\ b_{n1}&\cdots&b_{nk}\end{pmatrix}.$$
>>11. ¿Que hemos hecho? Por algebra, lo que se ha hecho es cambiar los generadores de la distribucion. Como los vectores columnas de $T(q)$ generan $\mathcal D_q$ y $Q(q)$ da los escalares para que las combinaciones lineales de las columnas de $T(q)$ generen los vectores columnas de la matriz de la derecha, tenemos que $\mathcal D$ es generada en el abierto $\psi(V)$ por los campos $\widetilde X_1,\ldots,\widetilde X_k$ con $$\widetilde X_j=\frac{\partial}{\partial y_j}+\sum_{i=k+1}^nb_{ij}\frac{\partial}{\partial y_i},\qquad b_{ij}\in C^\infty(V).$$
>>12. La forma de pensarlo: recordemos que en algebra 2, cuando pedian dar una base de un subespacio vectorial generado por $k$ vectores, se ponian en una matriz como vectores fila y se hacia Gauss-Jordan; en cada paso estamos haciendo combinaciones lineales de las filas, y el resultado final es otro conjunto generador muy lindo del subespacio vectorial.
>>13. Lo lindo que tiene este nuevo conjunto de generadores es que conmutan. Hagamos: $$[\widetilde X_i,\widetilde X_j]=\left[\frac{\partial}{\partial y_i}+\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h},\frac{\partial}{\partial y_j}+\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right].$$
>>14. Por bilinealidad del corchete y que $\left[\frac{\partial}{\partial y_i},\frac{\partial}{\partial y_j}\right]=0$, queda $$[\widetilde X_i,\widetilde X_j]=\left[\frac{\partial}{\partial y_i},\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right]-\left[\frac{\partial}{\partial y_j},\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h}\right]+\left[\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h},\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right].$$
>>15. Esto pertenece a $$\operatorname{span}\left\{\frac{\partial}{\partial y_{k+1}},\ldots,\frac{\partial}{\partial y_n}\right\}.$$
>>16. Por hipotesis, la distribucion es involutiva, por tanto $[\widetilde X_i,\widetilde X_j]\in\mathcal D$. Y como $$\mathcal D_q\cap\operatorname{span}\left\{\frac{\partial}{\partial y_{k+1}}\bigg|_q,\ldots,\frac{\partial}{\partial y_n}\bigg|_q\right\}=\{0\},$$se sigue la afirmacion $$[\widetilde X_i,\widetilde X_j]=0.$$
>>17. Con estos campos vamos a construir de manera natural una subvariedad integral. ¿Por que natural? Como los campos estan en la distribucion, entonces sus curvas integrales van a estar contenidas en las subvariedades integrales. Lo natural es combinar los flujos de cada campo para ir formando la subvariedad. Sabemos que esto sale bien cuando los campos conmutan.
>>18. Si en estos momentos tuvieramos que dar una subvariedad integral por el origen $0$, usando [[GS - Pr4#^f4fbe0]] podemos tomar un abierto cubico de $0$ donde hay uniformidad conjunta para $\widetilde X_1,\ldots,\widetilde X_k$, con flujos $\theta^1,\ldots,\theta^k$ respectivamente, definimos $$f:(-\delta,\delta)^k\to\mathbb R^n,\qquad (t_1,\ldots,t_k)\mapsto\theta^1_{t_1}\circ\cdots\circ\theta^k_{t_k}(0).$$
>>19. Armemos la carta cúbica de $O$ cuyas rebanadas son subvariedades integrales.
>>20. Sabemos que existe $\delta>0$ y $U$ un abierto de $O$ que admite un framing conjunto de $\widetilde X_1,\ldots,\widetilde X_k$ con $U\subseteq \psi(V)$, claramente.
>>21. Como $\widetilde X_1,\ldots,\widetilde X_k$ conmutan, existe una carta cúbica $(\widetilde U,\varphi=(x_1,\ldots,x_n))$ tal que $$\frac{\partial}{\partial x_i}=\widetilde X_i,\quad i=1,\ldots,k$$
>>22. Ahicando $\delta$ o $\widetilde U$, si fuera necesario, podemos asumir que $$\varphi(\widetilde U)=(-\delta,\delta)\times\cdots\times(-\delta,\delta)$$
>>23. Pensemos en las rebanadas $$R:=\{q\in \widetilde U:x_{k+1}(q)=c_{k+1},\ldots,x_n(q)=c_n\}$$
>>24. Cada una de estas es una subvariedad de $\widetilde U$ por el Teorema de la Subvariedad implícita. $$\pi\circ\varphi:\widetilde U\subseteq \mathbb R^n\to C^{n-k}(0)$$$$q\mapsto (x_{k+1}(q),\ldots,x_n(q))$$la cual es una submersión, pues $\varphi$ es difeo y $$\pi:C_\delta^n(0)\to C_\delta^{n-k}(0),\quad (y_1,\ldots,y_n)\mapsto (y_{k+1},\ldots,y_n)$$es submersión.
>>25. Y el tangente en $R_c$ es el núcleo de $d(\pi\circ\varphi)_q$, con $q\in R_c$, que es justo$$\left\{\frac{\partial}{\partial x_1}\bigg|_q,\ldots,\frac{\partial}{\partial x_k}\bigg|_q\right\}=\left\{\widetilde X_1|_q,\ldots,\widetilde X_k|_q\right\}=D_q$$pues ya sabemos que si $\varphi$ es carta, $\varphi=(x_1,\ldots,x_n)$, entonces$$(d\varphi)_q\frac{\partial}{\partial x_i}\bigg|_q=\frac{\partial}{\partial s_i}\bigg|_{\varphi(q)},\quad i=1,\ldots,n$$y por otro lado$$(d\pi)_{\varphi(q)}\frac{\partial}{\partial s_i}\bigg|_{\varphi(q)}=0\quad \text{si } i=1,\ldots,k.$$c
ada una de estas rebanadas es conexa pues es homeomorfa a $C_\delta^k(0)$, que es conexo.
>>26. Por último si $i:N\to \widetilde U$ es una subvariedad integral conexa, para ver que está en una de estas rebanadas, basta con ver que$$x_j\circ i:N\to \mathbb R\text{ es constante },\quad j=k+1,\ldots,n$$y como $N$ es conexa, alcanza con ver que$$d(x_j\circ i)=0,\quad j=k+1,\ldots,n.$$
>>27. Y en efecto, como $N$ es subvariedad integral, entonces$$(di)_qT_qN=D_q=\left\langle \frac{\partial}{\partial x_1}\bigg|_{i(q)},\ldots,\frac{\partial}{\partial x_k}\bigg|_{i(q)}\right\rangle$$y como$$(dx_j)_{i(q)}\frac{\partial}{\partial x_l}\bigg|_{i(q)}=0\quad \text{con }1\le l\le k\text{ y }k+1\le j\le n,$$

>[!Remark]
>La demostración del teorema nos deja una manera de buscar una subvariedad integral de una distribución involutiva = integrable por un punto $p$ en $M$.
>- $(0)$ Verificamos que $D$ sí sea involutiva.
>- $(i)$ Buscamos campos locales $X_1,\ldots,X_k$ suaves que generen la distribución en un abierto $\widetilde U$ de $M$ en $p$.
>- $(ii)$ Escribimos $X_1,\ldots,X_k$ en términos de un marco coordenado $\left\{\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\right\}$, achicando $\widetilde U$ si hace falta. Digamos: $$X_1=a_{11}\frac{\partial}{\partial x_1}+\cdots+a_{1n}\frac{\partial}{\partial x_n}$$$$X_k=a_{k1}\frac{\partial}{\partial x_1}+\cdots+a_{kn}\frac{\partial}{\partial x_n}$$con $a_{ij}\in C^\infty[\widetilde U]$.
>- $(iii)$ Armamos la matriz cuya fila $i$ son las coordenadas del campo $X_i$: $$\begin{pmatrix} a_{11} & \cdots & a_{1n}\\ a_{k1} & \cdots & a_{kn} \end{pmatrix}_{k\times n}$$como la distribución es de dimensión $k$, esta matriz tiene un menor $k\times k$ distinto de cero. Achicando $\widetilde U$ si es necesario, el mismo menor sirve para todos los puntos de $\widetilde U$.
>- $(iv)$ Aplicamos eliminación Gaussiana de álgebra lineal, teniendo cuidado con los ceros de las funciones $a_{ij}$. Si necesito que sea distinto de cero para tomar un pivote, sé que esto se puede hacer achicando el abierto $\widetilde U$, por continuidad.
>- $(v)$ Supongamos que escalonamos y llegamos a $$\begin{pmatrix} 1 & & b_{k+1,1} & \cdots & b_{n1}\\ & \ddots & & & \\ & & 1 & b_{k+1,k} & \cdots & b_{nk} \end{pmatrix}$$entonces $$\widetilde X_j=\frac{\partial}{\partial x_j}+\sum_{i=k+1}^n b_{ij}\frac{\partial}{\partial x_i},\quad j=1,\ldots,k$$son suaves porque las operaciones elementales solo traen problemas cuando hubiéramos dividido por cero, lo cual evitamos achicando el abierto $\widetilde U$, y estos campos tienen la propiedad que conmutan.
>- $(vi)$ Intentamos encontrar los flujos $\theta^1,\ldots,\theta^k$ de $\widetilde X_1,\ldots,\widetilde X_k$, y un tiempo uniforme para estos, digamos $\delta$, y suponemos $$F:(-\delta,\delta)\times\cdots\times(-\delta,\delta)\longrightarrow M$$$$(t_1,\ldots,t_k)\longmapsto \theta^1_{t_1}\circ\cdots\circ\theta^k_{t_k}(p)$$verificar que $F((-\delta,\delta)^k)$ es subvariedad integral de $D$ por $p$.

>[!Theorem]
>Sea $\mathcal D$ una distribución integrable de $M$ y sea $N$ una subvariedad integral de $\mathcal D$.
>Si $F:P\to M$ es una función suave tal que $F(P)\subseteq N$, entonces $\widetilde F:P\to N$, obtenida de $F$ restringiendo el codominio, es suave. $$\begin{array}{ccc}P & \xrightarrow{F}& M\\& \searrow_{\widetilde F} & \uparrow i\\& & N\end{array}$$

>[!Definition] Subvariedad conexa maximal
>Sea $\mathcal D$ una distribución suave de $M$.
>Una subvariedad integral conexa de $\mathcal D$, $(N,F)$, se dice maximal si no existe otra subvariedad integral conexa $(\widetilde N,\widetilde F)$ de $\mathcal D$ tal que
>$$F(N)\subsetneq \widetilde F(\widetilde N).$$
>
>Otro nombre que recibe la maximal es hoja de la distribución.

>[!Theorem] Frobenius global
>Sea $\mathcal D$ una distribución suave e integrable en una variedad $M$. Entonces para cada $p\in M$, existe una única hoja de $\mathcal D$ que pasa por $p$. Además, toda subvariedad integral conexa de $\mathcal D$ está contenida en una única hoja de $\mathcal D$.
