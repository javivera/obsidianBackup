### Ejercicio 1

>[!Exercise]
>Let $M$ be a connected smooth manifold. Prove that any two points of $M$ can be joined by a piecewise smooth curve.
>>[!Proof]-
>>1. Fix $p\in M$ and define $$A=\{q\in M:\text{ there exists a piecewise smooth curve from }p\text{ to }q\}.$$
>>2. Since the constant curve at $p$ is smooth, we have $p\in A$, so $A\neq\varnothing$.
>>	- **We first prove that $A$ is open**
>>		1. Let $q\in A$. Choose a smooth coordinate chart $(U,\varphi)$ around $q$ such that $\varphi(U)$ is a coordinate ball or coordinate cube in $\mathbb{R}^n$.
>>		2. If $r\in U$, then $\varphi(q),\varphi(r)\in\varphi(U)$, and since $\varphi(U)$ is convex, the segment $$\alpha(t)=(1-t)\varphi(q)+t\varphi(r),\qquad t\in[0,1],$$ lies in $\varphi(U)$.
>>		3. Therefore $$\beta(t)=\varphi^{-1}(\alpha(t))$$is a smooth curve in $U$ from $q$ to $r$.
>>		4. Since $q\in A$, there is a piecewise smooth curve $\gamma$ from $p$ to $q$. Concatenating $\gamma$ with $\beta$ gives a piecewise smooth curve from $p$ to $r$. $$\eta(t)=\begin{cases}\gamma(2t), & 0\le t\le \frac12,\\ \beta(2t-1), & \frac12\le t\le 1. \end{cases}$$
>>		5. Hence $r\in A$ for every $r\in U$, so $U\subseteq A$. Thus every point of $A$ is interior, and $A$ is open.
>>	- **We now prove that $A$ is closed.** 
>>		1. Let $q\in\overline{A}$. Choose a smooth coordinate chart $(U,\varphi)$ around $q$ such that $\varphi(U)$ is a coordinate ball or coordinate cube.
>>		2. Since $q\in\overline{A}$ and $U$ is a neighborhood of $q$, we have $$U\cap A\neq\varnothing.$$
>>		3. Choose $r\in U\cap A$. As before, using the convexity of $\varphi(U)$, there is a smooth curve in $U$ from $r$ to $q$.
>>		4. Since $r\in A$, there is a piecewise smooth curve from $p$ to $r$. Concatenating it with the smooth curve from $r$ to $q$ gives a piecewise smooth curve from $p$ to $q$.
>>		5. Therefore $q\in A$. Hence $\overline{A}\subseteq A$, so $A$ is closed.
>>6. Thus $A$ is nonempty, open, and closed in $M$. Since $M$ is connected, we conclude $$A=M.$$
>>7. Therefore every point of $M$ can be joined to $p$ by a piecewise smooth curve.
>>8. Finally, let $p_1,p_2\in M$. Since $A=M$, there are piecewise smooth curves from $p$ to $p_1$ and from $p$ to $p_2$.
>>9. If $\gamma:[a,b]\to M$ is a piecewise smooth curve from $p$ to $p_1$, then $$\widetilde{\gamma}(t)=\gamma(a+b-t),\qquad t\in[a,b],$$ is a piecewise smooth curve from $p_1$ to $p$.
>>10. Concatenating $\widetilde{\gamma}$ with a piecewise smooth curve from $p$ to $p_2$ gives a piecewise smooth curve from $p_1$ to $p_2$.
>>11. Hence any two points of $M$ can be joined by a piecewise smooth curve.

### Ejercicio 2

> [!Exercise]
> Hallar la subvariedad integral conexa maximal que contiene a $(0,0)$ para la distribución $D$ en $\mathbb{R}^2$ definida por $D=\operatorname{span}\{e_1\}$.
>>[!Proof]-
>>1. Notar que implicitamente estamos tomando $(\mathbb{R}^{2},Id=(x,y))$ como carta de $\mathbb{R}^{2}$ por eso considerando que $D_{p}\in T_{p}\mathbb{R}^{2}\simeq \mathbb{R}^{2}$ (es una distribucion de $\mathbb{R}^{2}$) y podemos identificar $e_{1}|_{p}=\frac{\partial}{\partial x}|_{p}$    
>>2. Ahora consideremos $$N=\mathbb{R}\times\{0\}\subset \mathbb{R}^2.$$
>>3. Esta es una subvariedad embebida conexa de $\mathbb{R}^2$, pues es una recta.
>>4. Sea $$i:N\hookrightarrow \mathbb{R}^2$$ la inclusión.
>>5. Queremos probar que $N$ es una subvariedad integral de $D$, es decir, que para todo $p\in N$ se cumple $$(di)_p(T_pN)=D_{i(p)}.$$
>>6. Como $i$ es la inclusión, tenemos $i(p)=p$. Luego basta probar que $$(di)_p(T_pN)=D_p.$$
>>7. Sea $p=(x,0)\in N$. Podemos tomar la misma carta identidad restringida $(N,\varphi=(x,y))$ 
>>8. Entonces como $N=\mathbb{R}\times\{0\}$, el espacio tangente a $N$ en $p$ está generado por el vector horizontal: $$T_pN=\operatorname{span}\left\{\frac{\partial}{\partial x}\Big|_p\right\}.$$
>>9. Ahora calculamos la imagen de este generador por $(di)_p$. Escribimos $$(di)_p\left(\frac{\partial}{\partial x}\Big|_p\right)=a\frac{\partial}{\partial x}\Big|_{i(p)}+b\frac{\partial}{\partial y}\Big|_{i(p)}.$$
>>10. Para hallar $a$, evaluamos en la función coordenada $x:\mathbb{R}^2\to\mathbb{R}$: $$a=(di)_p\left(\frac{\partial}{\partial x}\Big|_p\right)(x)=\frac{\partial}{\partial x}\Big|_p(x\circ i)=\frac{\partial}{\partial r_{1}}\bigg|_{\varphi(p)}x|_{N}\circ\varphi ^{-1}=\frac{\partial}{\partial r_{1}}\pi_{1}(r_{1},r_{2})=1$$
>>11. Para hallar $b$, hacemos lo mismo pero llegamos a $$\frac{\partial}{\partial r_{1}}\pi_{2}(r_{1},r_{2})=0$$  
>>12. Por lo tanto $$(di)_p\left(\frac{\partial}{\partial x}\Big|_p\right)=\frac{\partial}{\partial x}\Big|_p=e_1|_p=e_{1}$$
>>13. Luego $$(di)_p(T_pN)=\operatorname{span}\{e_1\}=D_p.$$
>>14. Como esto vale para todo $p\in N$, concluimos que $N$ es una subvariedad integral de $D$.
>>15. **Ahora probamos que es maximal entre las subvariedades integrales** conexas que contienen a $(0,0)$.
>>16. Sea $S$ una subvariedad integral conexa de $D$ tal que $(0,0)\in S$, y sea $$\iota:S\hookrightarrow \mathbb{R}^2$$ la inclusión.
>>17. Como $S$ es integral, para todo $p\in S$ se cumple $$(d\iota)_p(T_pS)=D_{\iota(p)}=D_p=\operatorname{span}\{e_1|_p\}.$$
>>18. Consideremos la función coordenada $$y:\mathbb{R}^2\to\mathbb{R},\qquad y(x_1,x_2)=x_2.$$
>>19. Entonces $y|_S=y\circ \iota$. Para todo $v\in T_pS$, tenemos $$(dy|_S)_p(v)=(dy\circ \iota)_p(v)=dy_p((d\iota)_p(v)).$$
>>20. Pero $(d\iota)_p(v)\in D_p=\operatorname{span}\{e_1\}$, así que existe $c\in\mathbb{R}$ tal que $$(d\iota)_p(v)=c e_1|_p.$$
>>21. Entonces $$dy_p((d\iota)_p(v))=dy_p(c e_1|_p)=c\,dy_p(e_1|_p).$$
>>22. Veamos que $dy_p(e_1|_p)=0$. Escribimos $$dy_p(e_1|_p)=a\frac{d}{dt}\Big|_{y(p)}.$$
>>23. Para calcular $a$, evaluamos en la coordenada $t:\mathbb{R}\to\mathbb{R}$: $$a=dy_p(e_1|_p)(t)=e_1|_p(t\circ y).$$
>>24. Como $t\circ y=y$, queda $$a=e_1|_p(y)=\frac{\partial y}{\partial x}(p)=0.$$
>>25. Por lo tanto $$dy_p(e_1|_p)=0.$$
>>26. Así, para todo $v\in T_pS$, obtenemos $$d(y|_S)_p(v)=0.$$
>>27. Luego $$d(y|_S)=0.$$
>>28. Como $S$ es conexa, la función $y|_S$ es constante. Además, como $(0,0)\in S$, e $y(0,0)=0$ esa constantemente $0$. 
>>29. Entonces $$S\subseteq y^{-1}(0)=\mathbb{R}\times\{0\}=N.$$
>>30. Por lo tanto toda subvariedad integral conexa que contiene a $(0,0)$ está contenida en $N$.
>>31. Como $N$ mismo es una subvariedad integral conexa que contiene a $(0,0)$, concluimos que la subvariedad integral conexa maximal buscada es $$\boxed{\mathbb{R}\times\{0\}}.$$

### Ejercicio 3

>[!Exercise]
>Let $\mathcal{D}$ be a smooth $1$-dimensional distribution on $M$. Prove that $\mathcal{D}$ is involutive.
>>[!Proof]-
>>1. Let $U\subseteq M$ be open, and let $X,Y\in\mathfrak{X}(U)$ be smooth vector fields such that $$X_q,Y_q\in\mathcal{D}_q\quad\text{for every }q\in U.$$
>>2. We must prove that $$[X,Y]_q\in\mathcal{D}_q\quad\text{for every }q\in U.$$
>>3. Fix $p\in U$. Since $\mathcal{D}$ is a smooth $1$-dimensional distribution, there exists an open neighborhood $V\subseteq U$ of $p$ and a smooth vector field $E\in\mathfrak{X}(V)$ such that $$E_{q}\neq 0, \qquad\mathcal{D}_q=\operatorname{span}\{E_q\}\quad\text{for every }q\in V.$$ esto es por que la distribucion es $1$ dimensional entonces nunca puede estar generada por el $0$
>>4. Since $X_q,Y_q\in\mathcal{D}_q=\operatorname{span}\{E_q\}$ for every $q\in V$, there exist pointwise functions $\alpha,\beta:V\to\mathbb{R}$ such that $$X|_V=\alpha E,\qquad Y|_V=\beta E.$$
>>5. We justify that $\alpha,\beta$ are smooth. In local coordinates on a smaller neighborhood of $p$, write $$E=\sum^{m}_{i=1} E^i\frac{\partial}{\partial x^i},\qquad X=\sum^{m}_{i=1} X^i\frac{\partial}{\partial x^i}.$$
>>6. Como $E_{p}\neq0$ entonces existe algun $i$ tal que $E^{i}(p)\neq 0$ como $E^{i}$ es continua (shrinking $V$ if necessary), we may assume $$E^i(q)\neq 0\quad\text{for every }q\in V.$$ y obviamente sigue siendo abierto de $p$ 
>>7. Since $X=\alpha E$, comparing the $i$-th coordinate gives $$X^i=\alpha E^i.$$ Hence $$\alpha=\frac{X^i}{E^i}.$$ Since $X^i$ and $E^i$ are smooth and $E^i$ is nonzero on $V$, we get $$\alpha\in C^\infty(V).$$ The same argument applied to $Y=\beta E$ gives $$\beta\in C^\infty(V).$$
>>8. For any $f\in C^\infty(V)$, compute $$[\alpha E,\beta E](f)=\alpha E(\beta E(f))-\beta E(\alpha E(f)).$$
>>9. Applying the Leibniz rule, $$\alpha E(\beta E(f))=\alpha E(\beta)E(f)+\alpha\beta E(E(f)),$$ and $$\beta E(\alpha E(f))=\beta E(\alpha)E(f)+\alpha\beta E(E(f)).$$
>>10. Subtracting, the second-order terms cancel, so $$[\alpha E,\beta E](f)=\bigl(\alpha E(\beta)-\beta E(\alpha)\bigr)E(f).$$
>>11. Therefore, on $V$, $$[X,Y]|_V=[\alpha E,\beta E]=\bigl(\alpha E(\beta)-\beta E(\alpha)\bigr)E.$$
>>12. Evaluating at $p$, $$[X,Y]_p=\bigl(\alpha E(\beta)-\beta E(\alpha)\bigr)(p)E_p.$$
>>13. Hence $$[X,Y]_p\in\operatorname{span}\{E_p\}=\mathcal{D}_p.$$
>>14. Since $p\in U$ was arbitrary, $$[X,Y]_q\in\mathcal{D}_q\quad\text{for every }q\in U.$$
>>15. Therefore $\mathcal{D}$ is involutive.

### Ejercicio 4

>[!Exercise]
>Considere en el octante de $\mathbb R^3$ de coordenadas positivas los campos
>$$X=x\frac{\partial}{\partial x}-2y\frac{\partial}{\partial y},\qquad
>Y=xy\frac{\partial}{\partial y}-xz\frac{\partial}{\partial z}.$$
>
>- Probar que ellos generan una distribución involutiva.
>- Encontrar las superficies integrales.
>>[!Proof]-
>>1. Estamos en el abierto
>>   $$O=\{(x,y,z):x>0,\ y>0,\ z>0\}.$$
>>2. Primero notamos que $X$ e $Y$ son linealmente independientes en todo punto de $O$.  
>>3. En efecto, identificando los campos con sus vectores coordenados, $$X=(x,-2y,0),\qquad Y=(0,xy,-xz).$$  
>>4. Entonces $$X\times Y=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\x&-2y&0\\0&xy&-xz\end{vmatrix}=(2xyz,x^2z,x^2y).$$
>>5. Como $x,y,z>0$ en $O$, se sigue que $$X\times Y\neq(0,0,0).$$por lo tanto, $X_p$ e $Y_p$ son linealmente independientes para todo $p\in O$.
>>6. Por lo tanto generan una distribución suave de dimensión $2$.
>>7. Calculamos el corchete. Recordamos $[X,Y]=\sum^{m}_{i=1}(X(Y^{i})-Y(X^{i}))\frac{\partial}{\partial x_{i}}$  Como
>>   $$X=(x,-2y,0),\qquad Y=(0,xy,-xz),$$
>>   se tiene
>>   $$X(xy)=-xy,\qquad X(-xz)=-xz,$$
>>   y
>>   $$Y(x)=0,\qquad Y(-2y)=-2xy.$$
>>8. Entonces
>>   $$[X,Y]=(0,-xy,-xz)-(0,-2xy,0)=(0,xy,-xz)=Y.$$
>>9. Como $[X,Y]=Y\in D$, la distribución generada por $X,Y$ es involutiva.
>>- **Superficie integral**
>>	1. Sea $p=(a,b,c)\in\mathbb R^3_{>0}$. Buscamos la superficie integral que pasa por $p$ usando los flujos de $X$ e $Y$.
>>	2. Para $$X=x\frac{\partial}{\partial x}-2y\frac{\partial}{\partial y}$$su flujo $\theta^X_s$ satisface $\frac{d}{ds}\theta_{s}^{X}(p)=X_{\theta_{s}(p)}$ osea $\dot x=x$, $\dot y=-2y$ y $\dot z=0$, luego $$\theta^X_s(p_{1},p_{2},p_{3})=(p_{1}e^s,p_{2}e^{-2s},p_{3})$$ 
>>	3. Analogamente $$Y=xy\frac{\partial}{\partial y}-xz\frac{\partial}{\partial z}$$su flujo $\theta^Y_t$ satisface $\dot x=0$, $\dot y=xy$ y $\dot z=-xz$. Como $x$ es constante a lo largo del flujo de $Y$, se obtiene $$\theta^Y_t(p_{1},p_{2},p_{3})=(p_{1},p_{2}e^{p_1t},p_{3}e^{-p_1t})$$
>>	4. Entonces una superficie barrida por los flujos está parametrizada por $$\sigma(s,t)=\theta^Y_t(\theta^X_s(a,b,c))$$
>>	5. Primero, $\theta^X_s(a,b,c)=(ae^s,be^{-2s},c)$, y luego aplicando el flujo de $Y$ queda $$\sigma(s,t)=(ae^s,be^{-2s}e^{ae^st},ce^{-ae^st})$$
>>	6. Ahora calculamos el invariante: $$x(s,t)^2y(s,t)z(s,t)=(ae^s)^2(be^{-2s}e^{ae^st})(ce^{-ae^st})=a^2bc\quad\forall s,t\in \mathbb{R}$$
>>	7. Por lo tanto, la superficie obtenida está contenida en el conjunto de nivel $$S_{a^2bc}=\{(x,y,z)\in\mathbb R^3_{>0}:x^2yz=a^2bc\}$$
>>	8. Como $F(x,y,z)=x^2yz$ tiene $dF=(2xyz)dx+(x^2z)dy+(x^2y)dz$, y en el octante positivo $dF\neq 0$, cada $$S_k=\{(x,y,z)\in\mathbb R^3_{>0}:x^2yz=k\}$$ con $k>0$ es una superficie regular.
>>	9. Además, $X(F)=x(2xyz)-2y(x^2z)=0$ y $Y(F)=xy(x^2z)-xz(x^2y)=0$, luego $X_q,Y_q\in T_qS_k$ para todo $q\in S_k$.
>>	10. Como $\mathcal D_q=\operatorname{span}(X_q,Y_q)$ es de dimensión $2$ y $T_qS_k$ también es de dimensión $2$, de la inclusión $\mathcal D_q\subseteq T_qS_k$ se concluye $\mathcal D_q=T_qS_k$.
>>	11. Por lo tanto, las superficies integrales son $$S_k=\{(x,y,z)\in\mathbb R^3_{>0}:x^2yz=k\}$$, con $k>0$.

### Ejercicio 5

>[!Exercise]
>Se definen en $\mathbb R^3$ los campos $V$ y $W$ por
>$$V(x,y,z)=(1,0,0),\qquad W(x,y,z)=(0,1,x).$$
>
>- Dibujar los campos $V$ y $W$ para todos los puntos del plano $z=0$.
>- Mostrar que la distribución $D(p)=\operatorname{span}\{V(p),W(p)\}$ no es integrable.
>- Dado un punto cualquiera $p$ de $\mathbb R^3$, mostrar que existe una curva diferenciable a trozos $\gamma:[0,a]\to\mathbb R^3$ tal que $\gamma(0)=0$, $\gamma(a)=p$ y $\gamma'(t)\in D(\gamma(t))$ para todo $t$ donde $\gamma'(t)$ existe. ¿Podría suceder esto si la distribución fuera integrable?
>>[!Proof]-
>>- (a)
>>	1. En el plano $z=0$, el campo $V$ es siempre horizontal en dirección del eje $x$: $$V=(1,0,0).$$
>>	2. En cambio $$W(x,y,0)=(0,1,x),$$así que tiene siempre componente $+y$ y una componente vertical igual a $x$.
>>	3. En particular, sobre el plan o $x=0$ el campo $W$ apunta en dirección $y$, mientras que para $x>0$ sube y para $x<0$ baja.
>>- (b)   
>>	1. Para ver que $D$ no es integrable, calculamos $$[V,W]=\left[\frac{\partial}{\partial x},\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}\right]=\frac{\partial}{\partial z}.$$donde usamos $[X,Y]=\sum^{m}_{i=1}(X(Y^{i})-Y(X^{i}))\frac{\partial}{\partial x_{i}}$
>>	2. Pero $$\frac{\partial}{\partial z}\notin \operatorname{span}\left\{\frac{\partial}{\partial x},\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}\right\}.$$
>>	3. En efecto, si $$(0,0,1)=a(1,0,0)+b(0,1,x),$$entonces $a=0$ y $b=0$, pero quedaría $1=0$ en la componente $z$.
>>	4. Por el teorema de Frobenius, $D$ no es integrable.
>>- (c)
>>	1. Ahora sea $p=(a,b,c)\in\mathbb R^3$.
>>	2. Vamos a construir una curva horizontal a trozos desde $0$ hasta $p$.
>>	3. Primero nos movemos en dirección $V$ desde $(0,0,0)$ hasta $$(r,0,0),\qquad r=a+c-ab.$$
>>	4. Luego nos movemos durante tiempo $1$ en dirección $W$ manteniendo $x=r$: $$(r,0,0)\longrightarrow (r,1,r).$$
>>	5. Después volvemos a movernos en dirección $V$ hasta $x=a$: $$(r,1,r)\longrightarrow (a,1,r).$$
>>	6. Finalmente nos movemos en dirección $W$ durante tiempo $b-1$ manteniendo $x=a$: $$(a,1,r)\longrightarrow (a,b,r+a(b-1)).$$
>>	7. Como $r=a+c-ab$, se tiene $$r+a(b-1)=a+c-ab+ab-a=c.$$
>>	8. Por lo tanto llegamos a $$(a,b,c)=p.$$
>>	9. Cada tramo tiene velocidad proporcional a $V$ o a $W$, por lo que su velocidad pertenece a $D$.
>>	10. **Si $D$ fuera integrable** toda curva a trozos tangente a $D$ que empieza en $0$ debería permanecer en la hoja integral que contiene a $0$.
>>	11. Esa hoja tendría dimensión $2$, no podría ser todo $\mathbb R^3$.
>>	12. Por lo tanto este fenómeno de llegar a cualquier punto de $\mathbb R^3$ no podría suceder si la distribución fuera integrable de dimensión $2$.

### Ejercicio 6

>[!Exercise]
>Las posiciones de un uniciclo ideal pueden describirse con coordenadas $(x,y,\theta)\in\mathbb R^3$, donde $(x,y)$ es la proyección al piso del centro de la rueda y $\theta$ es el ángulo que forma la rueda con el eje equis, segun indica la siguiente figura del uniciclo visto de arriba:
>![[Pasted image 20260624212257.png]]
>En realidad estamos considerando el llamado cubrimiento universal del espacio de posiciones del uniciclo, que permite el seguimiento de la cantidad de vueltas acumuladas.
>- (a) Convencerse de que un movimiento ideal $\gamma(t)=(x(t),y(t),\theta(t))$ es admisible si y solo si $(x',y')=\lambda(\cos\theta,\sin\theta)$ para cierta función $\lambda:\mathbb R\to\mathbb R$.
>- (b) Mostrar que un movimiento $\gamma$ es admisible si y solo si $\gamma'(t)\in\mathcal D_{\gamma(t)}$ para todo $t$, donde $\mathcal D$ es la distribución de dimensión $2$ en $\mathbb R^3$ definida por $\mathcal D_{(x,y,\theta)}=\operatorname{span}\{(\cos\theta,\sin\theta,0),(0,0,1)\}$.
>- (c) Representar gráficamente la distribución $\mathcal D$ y verificar que no es integrable.
>- (d) Encontrar una curva admisible a trozos que una los puntos $(0,0,0)$ y $(0,1,0)$.
>>[!Proof]-
>>- (a)
>>	1. En un uniciclo ideal no hay deslizamiento lateral.
>>	2. Por eso la velocidad proyectada al plano debe estar alineada con la dirección en la que apunta la rueda: $$(\cos\theta,\sin\theta).$$ y agregando un $\lambda(t)$ que seria la magnitud en cada instante, tenemos el vector velocidad
>>	3. Entonces existe una función $\lambda(t)$ tal que $$(x'(t),y'(t))=\lambda(t)(\cos\theta(t),\sin\theta(t)).$$ (recordando que $(x,y)$ es la posicion, por ende su derivada es la velocidad) 
>>- (b) 
>>	1. La componente $\theta'(t)$ es libre, porque el uniciclo puede cambiar su ángulo.
>>	2. Por lo tanto $$\gamma'(t)=(x'(t),y'(t),\theta'(t))=\lambda(t)(\cos\theta,\sin\theta,0)+\theta'(t)(0,0,1).$$
>>	3. Esto equivale exactamente a $$\gamma'(t)\in D_{\gamma(t)}.$$
>>- (c) 
>>1. Gráficamente, en cada punto $(x,y,\theta)$, el plano $D$ está generado por una dirección horizontal que apunta según el ángulo $\theta$ y por la dirección vertical $\partial_\theta$.
>>2. Para verificar que no es integrable, tomamos los generadores $$A=(\cos\theta,\sin\theta,0),\qquad B=(0,0,1)=\frac{\partial}{\partial\theta}.$$
>>3. Entonces usando la expresion de siempre para corchete de Lie llegamos a:
>>   $$[A,B]=-\frac{\partial A}{\partial\theta}=(\sin\theta,-\cos\theta,0).$$
>>4. Este vector no pertenece a $\operatorname{span}\{A,B\}$, se ve tratando de buscar coeficientes, y probando valores para $\theta$. Si no poniendo los 3 vectores en matriz y viendo que su determinante es distinto de $0$ lo que nos dice que son linealmente independientes  
>>5. Por lo tanto $D$ no es involutiva, y entonces no es integrable.
>>- (d)
>>	1. Para unir $(0,0,0)$ con $(0,1,0)$ hacemos tres tramos:
>> 	   - girar sin avanzar desde $\theta=0$ hasta $\theta=\pi/2$ osea subimos verticalmente $\frac{\pi}{2}$ 
>> 	   - Luego avanzamos en el eje $y$ lo cual manteniendo $\theta=\pi/2$;
>> 	   - girar sin avanzar desde $\theta=\pi/2$ hasta $\theta=0$ osea bajar verticalmente
>>    1. Ahora podemos corregir las $t$ para hacer una sola parametrización a trozos:
>>   $$
>>   \gamma(t)=
>>   \begin{cases}
>>   (0,0,t),&0\le t\le \pi/2,\\
>>   (0,t-\pi/2,\pi/2),&\pi/2\le t\le \pi/2+1,\\
>>   (0,1,\pi+1-t),&\pi/2+1\le t\le \pi+1.
>>   \end{cases}
>>   $$
>>	2. En cada tramo la velocidad está en $D$, luego la curva es admisible. Esto es claro de imaginar y si no derivar y verificar

### Ejercicio 7

>[!Exercise]
>¿Es la subvariedad de $\mathbb R^2$ que conocemos por “el ocho” una subvariedad integral para alguna distribución involutiva sobre $\mathbb R^2$?
>>[!Proof]-
>>1. Sea $\phi:(0,2\pi)\to\mathbb R^2$ dada por $$\phi(t)=\left(\frac{\sin(2t)}{2},\sin t\right)$$y sea $E=\phi((0,2\pi))$.
>>2. Le damos a $E$ la estructura suave transportada por $\phi$. Entonces la carta de $E$ es $\psi:E\to(0,2\pi)$ dada por $\psi=\phi^{-1}$.
>>3. La aplicación de subvariedad es la inclusión $F:E\to\mathbb R^2$ dada por $F(q)=q$.
>>4. Supongamos que $E$ fuera subvariedad integral de una distribución suave $D$ sobre $\mathbb R^2$.
>>5. Entonces, por definición (Tomando $F$ como la inclusion) para todo $q\in E$ debería cumplirse $$(dF)_q(T_qE)=D_{F(q)}$$
>>6. Tomemos $q=\phi(t)$. Como $\psi^{-1}(t)=\phi(t)$, tenemos $F\circ\psi^{-1}=\phi$.
>>7. Por lo tanto $$(dF)_q\left((d\psi^{-1})_t\frac{\partial}{\partial t}\big|_t\right)=d(F\circ\psi^{-1})_t\left(\frac{\partial}{\partial t}\big|_t\right)=\phi'(t)$$
>>8. Así, $$\mathcal{D}_{q}=(dF)_q(T_qE)=\operatorname{span}\{\phi'(t)\}$$
>>9. Luego la condición integral implica $D_{\phi(t)}=\operatorname{span}\{\phi'(t)\}$ para todo $t\in(0,2\pi)$.
>>10. Calculamos $\phi'(t)=(\cos(2t),\cos t)$.
>>11. En el cruce tenemos $\phi(\pi)=(0,0)$ y $\phi'(\pi)=(1,-1)$.
>>12. Por lo tanto $D_{(0,0)}=\operatorname{span}\{(1,-1)\}$.
>>13. Como $D$ es una distribución suave de dimensión $1$, existe un entorno $U$ de $(0,0)$ y un campo suave no nulo $X\in\mathfrak X(U)$ tal que $D_p=\operatorname{span}\{X_p\}$ para todo $p\in U$.
>>14. Ademas $X_{(0,0)}\in\operatorname{span}\{(1,-1)\}$ por 12., como $X_{(0,0)}\neq0$, existe $a\neq0$ tal que $X_{(0,0)}=a(1,-1)$.
>>15. Ahora tomamos $t\to0^+$. Aunque $t=0$ no pertenece al dominio, se cumple $\phi(t)\to(0,0)$ en $\mathbb R^2$.
>>16. Para $t>0$ suficientemente pequeño, $\phi(t)\in U$, y por la condición integral tenemos $D_{\phi(t)}=\operatorname{span}\{\phi'(t)\}$
>>17. Como también $D_{\phi(t)}=\operatorname{span}\{X_{\phi(t)}\}$, se sigue que $X_{\phi(t)}$ es paralelo a $\phi'(t)$.
>>18. Equivalentemente, $\det(X_{\phi(t)},\phi'(t))=0$.
>>19. Tomando límite cuando $t\to0^+$, usando la continuidad de $X$ y de $\phi'$, obtenemos $$0=\lim_{t\to0^+}\det(X_{\phi(t)},\phi'(t))=\det(X_{(0,0)},(1,1))$$
>>20. Pero como $X_{(0,0)}=a(1,-1)$, tenemos $\det(X_{(0,0)},(1,1))=\det(a(1,-1),(1,1))=2a\neq0$.
>>21. Esto es una contradicción.
>>22. Por lo tanto $E$ no puede ser subvariedad integral de ninguna distribución suave sobre $\mathbb R^2$.
*******
### Ejercicio 8

>[!Exercise]
>- (a) Probar que la recta densa en el toro $\phi:\mathbb R\to T^2$ es una subvariedad integral de alguna distribución en $T^2$. 
>- (b) Sea $M$ una variedad diferenciable y sea $f:M\to T^2$ una función diferenciable tal que $f(M)\subset\phi(\mathbb R)$. Mostrar que $\phi^{-1}\circ f:M\to\mathbb R$ es diferenciable.
>>[!Proof]-
>>- (a)
>>	1. Escribimos $T^2=\mathbb R^2/\mathbb Z^2$ y denotamos por $\pi:\mathbb R^2\to T^2$ la proyección canónica.
>>	2. Cualquier curva en el toro la podemos conseguir como $\pi(at,bt)$ o lo que es lo mismo $\pi\left(t, \frac{b}{a}t\right)$ 
>>	3. Tomamos $\frac{b}{a}=\alpha\in\mathbb R\setminus\mathbb Q$ y definimos la recta densa (por que $\frac{b}{a}$ es irracional) por $\phi:\mathbb R\to T^2$, $$\phi(t)=\pi(t,\alpha t)=\pi(\tilde{\phi}(t))$$ con $\widetilde{\phi}(t)=(t,\alpha t)$ 
>>	4. Osea $$\phi'(t)=d\phi_{t}\left( \frac{d}{dt}\bigg|_{t} \right)=d\pi_{\widetilde{\phi}(t)}\circ d \widetilde{\phi}_{t}\left( \frac{d}{dt}\bigg|_{t} \right)=d\pi_{(t,\alpha t)}(1,\alpha )$$ y por definicion $\phi'(t)\in T_{\phi(t)}T^{2}$. (notando que $(1,\alpha)\in T_{\tilde{\phi}(t)}\mathbb{R}^{2}$) 
>>	5. Y ahora podria hacer lo mismo con $$\phi_{(x_{0},y_{0})}(t)=\pi(x_{0}+t,y_{0}+\alpha t)$$ con estas curvas cubriria todo $T^{2}$ con lo cual con sus derivadas (que son siempre $(1,\alpha )$) puedo hacer un campo sobre todo $T^{2}$  
>>	6. Definimos un campo vectorial $X$ sobre $T^2$ por $$X_{\pi(x,y)}:=d\pi_{(x,y)}(1,\alpha)$$
>>	7. Primero verificamos que $X$ está bien definido. Si $\pi(x,y)=\pi(x+m,y+n)$ con $(m,n)\in\mathbb Z^2$, sea $\tau_{(m,n)}(x,y)=(x+m,y+n)$. Como $\pi\circ\tau_{(m,n)}=\pi$, al derivar obtenemos $$d\pi_{(x+m,y+n)}\circ (d\tau_{(m,n)})_{(x,y)}=d\pi_{(x,y)}$$
>>	8. Pero $d\tau_{(m,n),(x,y)}=\operatorname{id}_{\mathbb R^2}$, luego $d\pi_{(x+m,y+n)}(1,\alpha)=d\pi_{(x,y)}(1,\alpha)$.
>>	9. El campo $X$ es suave porque localmente, si $\widetilde U\subset\mathbb R^2$ es un abierto donde $\pi|_{\widetilde U}$ es inyectiva y $U=\pi(\widetilde U)$, la carta $\varphi:U\to\widetilde U$ dada por $\varphi=(\pi|_{\widetilde U})^{-1}$ osea $(U,\varphi=(x,y))$ 
>>	10. Luego  $$X_{p}=a(p) \frac{d}{dx}|_{p}+b(p) \frac{d}{dy}|_{p}$$ y notamos que $$d\varphi_p(X_p)=d\varphi_{p}\circ d\pi_{\varphi(p) }(1,\alpha )=(dId_{\widetilde{U}})_{\varphi(p)}(1,\alpha )=(1,\alpha)$$ para todo $p\in U$. Entonces $a(p)=1$ y $b(p)=\alpha$ que son suaves   
>>	11. Por lo tanto, en esa carta, $$X=\frac{\partial}{\partial x}+\alpha\frac{\partial}{\partial y}$$ que es suave.
>>	12. Además $X$ nunca se anula, porque en cualquier carta local inducida por $\pi$ sus coordenadas son el vector constante $(1,\alpha)\neq 0$. Entonces $X$ es campo suave no y nunca nulo
>>	13. Otra alternativa para suavidad era probar que $Xf$ es suave para cualquier $f$ suave, es mas facil 
>>	14. Definimos la distribución suave de dimensión $1$ por $\mathcal D_p:=\operatorname{span}\{X_p\}$ para todo $p\in T^2$.
>>	15. Ahora probamos que $(\mathbb R,\phi)$ es subvariedad integral de $\mathcal D$. Sea $\widetilde\phi:\mathbb R\to\mathbb R^2$ dada por $\widetilde\phi(t)=(t,\alpha t)$. Entonces $\phi=\pi\circ\widetilde\phi$.
>>	16. Por la regla de la cadena, $$d\phi_t\left(\frac{d}{dt}\right)=d\pi_{(t,\alpha t)}(d\widetilde\phi_t\left(\frac{d}{dt}\right))=d\pi_{(t,\alpha t)}(1,\alpha)=X_{\pi(t,\alpha t)}=X_{\phi(t)}$$
>>	17. Como $T_t\mathbb R=\operatorname{span}\{\frac{d}{dt}\}$, se sigue que $$(d\phi)_t(T_t\mathbb R)=\operatorname{span}\{d\phi_t(\frac{d}{dt})\}=\operatorname{span}\{X_{\phi(t)}\}=\mathcal D_{\phi(t)}$$ para todo $t\in\mathbb R$.
>>	18. Por lo tanto, $(\mathbb R,\phi)$ es una subvariedad integral de la distribución $\mathcal D$.
>>- (b) 
>>	1. Sea $g=\phi^{-1}\circ f$. Queremos probar que $g$ es diferenciable. Como esto es local, fijamos $p\in M$.  
>>	2. Escribimos $f(p)=\phi(t_0)$. Sea $\pi:\mathbb R^2\to T^2$ la proyección cociente y supongamos que $\phi(t)=\pi(t,\alpha t)$, con $\alpha\notin\mathbb Q$.  
>>	3. Como $\pi$ es un difeomorfismo local, existe un entorno abierto $U\subseteq M$ de $p$ y una función diferenciable $\widetilde f:U\to\mathbb R^2$ tal que $\pi\circ\widetilde f=f|_U$.  
>>	4. Además, podemos tomar $U$ conexo. Como $f(U)\subseteq\phi(\mathbb R)$, se tiene $\widetilde f(U)\subseteq\pi^{-1}(\phi(\mathbb R))$.  
>>	5. Ahora, $\pi^{-1}(\phi(\mathbb R))=\bigcup_{(m,n)\in\mathbb Z^2}\{(t+m,\alpha t+n):t\in\mathbb R\}$, es decir, es una unión de rectas paralelas en $\mathbb R^2$.  
>>	6. Como $U$ es conexo y $\widetilde f$ es continua, $\widetilde f(U)$ es conexo. Por lo tanto, $\widetilde f(U)$ queda contenido en una sola de esas rectas. Luego existen $m,n\in\mathbb Z$ tales que $\widetilde f(U)\subseteq\{(t+m,\alpha t+n):t\in\mathbb R\}$.  
>>	7. Entonces, para cada $q\in U$, existe un único $h(q)\in\mathbb R$ tal que $\widetilde f(q)=(h(q)+m,\alpha h(q)+n)$.  
>>	8. Si escribimos $\widetilde f=(\widetilde f_1,\widetilde f_2)$, entonces $h=\widetilde f_1-m$. Como $\widetilde f_1$ es diferenciable, se sigue que $h:U\to\mathbb R$ es diferenciable.  
>>	9. Para todo $q\in U$, tenemos $f(q)=\pi(\widetilde f(q))=\pi(h(q)+m,\alpha h(q)+n)=\pi(h(q),\alpha h(q))=\phi(h(q))$.  
>>	10. Por lo tanto, $g(q)=\phi^{-1}(f(q))=h(q)$ para todo $q\in U$. Luego $g|_U=h$ es diferenciable.  
>>	11. Como $p\in M$ era arbitrario, $g=\phi^{-1}\circ f$ es diferenciable en todo $M$.

### Ejercicio 9

>[!Exercise]
>Sea $(M,\phi)$ una subvariedad integral conexa de una distribución involutiva $\mathcal D$ en una variedad $N$. Probar que si $\phi(M)$ es cerrada en $N$, entonces $M$ es conexa maximal.
>>[!Proof]-
>>1. Queremos probar que $(M,\phi)$ es conexa maximal. Sea entonces $(L,\psi)$ una subvariedad integral conexa de $\mathcal D$ tal que $\psi(L)\cap\phi(M)\neq\varnothing$. Debemos probar que $\psi(L)\subseteq\phi(M)$.
>>2. Definimos $A:=\{q\in L:\psi(q)\in\phi(M)\}=\psi^{-1}(\phi(M))$. Como $\psi(L)\cap\phi(M)\neq\varnothing$, tenemos $A\neq\varnothing$.
>>3. Como $\phi(M)$ es cerrado en $N$ y $\psi:L\to N$ es continua, $A=\psi^{-1}(\phi(M))$ es cerrado en $L$.
>>4. Probamos ahora que $A$ es abierto en $L$. Sea $q\in A$. Entonces existe $p\in M$ tal que $\psi(q)=\phi(p)$. Denotamos $x:=\psi(q)=\phi(p)$.
>>5. Como la distribucion es involutiva, podemos usar Frobenius local, entonces existe una carta cúbica $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $x$ tal que las rebanadas dadas por $x_j=\text{constante}$ para $j=k+1,\ldots,n$ son subvariedades integrales de $\mathcal D$, y toda subvariedad integral conexa contenida en $U$ está contenida en una de esas rebanadas.
>>6. Sea $W$ la componente conexa de $\psi^{-1}(U)$ que contiene a $q$. Como $U$ es abierto en $N$, $\psi^{-1}(U)$ es abierto en $L$, y por lo tanto $W$ es abierto en $L$. Además, $(W,\psi|_W)$ es una subvariedad integral conexa contenida en $U$.
>>7. Por el teorema de Frobenius local, $\psi(W)$ está contenida en una rebanada de $U$. Como $\psi(q)=x$, esa rebanada es la rebanada $S$ que pasa por $x$, es decir, la determinada por $x_j=x_j(x)$ para $j=k+1,\ldots,n$.
>>8. Sea $V$ la componente conexa de $\phi^{-1}(U)$ que contiene a $p$. Entonces $(V,\phi|_V)$ es una subvariedad integral conexa contenida en $U$. Por Frobenius local, $\phi(V)$ está contenida en una rebanada de $U$. Como $\phi(p)=x$, también está contenida en la misma rebanada $S$.
>>9. Consideramos ahora $\phi|_V:V\to S$. Como $V$ es abierto en $M$, tenemos $T_pV=T_pM$. Además, como $(M,\phi)$ es subvariedad integral, $d\phi_p(T_pM)=\mathcal D_x$. Por otro lado, como $S$ es una rebanada integral, $T_xS=\mathcal D_x$. Entonces $d(\phi|_V)_p:T_pV\to T_xS$ es sobreyectiva. Como $\dim T_pV=\dim T_xS=k$, es un isomorfismo.
>>10. Por el teorema de la función inversa, existen un abierto $V_0\subseteq V$ con $p\in V_0$ y un abierto $O\subseteq S$ con $x\in O$ tales que $\phi|_{V_0}:V_0\to O$ es un difeomorfismo. En particular, $O\subseteq\phi(V_0)\subseteq\phi(M)$.
>>11. $O$ es abierto en $S$ entonces existe entonces $$W_0:=\psi|_{W}^{-1}(O)$$ es abierto en $L$ y contiene a $q$. Es abierto en $L$ por que $r\in\psi|_{W}^{-1}(O)$, luego $\psi|_{W}(r)\in O$, por lo tanto $\psi(r)\in S\cap O=O\subseteq\phi(M)$.
>>12. Así, $W_0\subseteq A$. Como para todo $q\in A$ encontramos un abierto $W_0$ de $L$ tal que $q\in W_0\subseteq A$, concluimos que $A$ es abierto en $L$.
>>13. Entonces $A$ es no vacío, abierto y cerrado en $L$. Como $L$ es conexa, se sigue que $A=L$.
>>14. Por definición de $A$, $A=L$ significa que para todo $q\in L$ se cumple $\psi(q)\in\phi(M)$. Luego $\psi(L)\subseteq\phi(M)$.
>>15. Como esto vale para toda subvariedad integral conexa $(L,\psi)$ tal que $\psi(L)\cap\phi(M)\neq\varnothing$, concluimos que $(M,\phi)$ es conexa maximal.

^0b6ac2

### Ejercicio 10

>[!Exercise]
>Sea $M=\mathbb R^3$ sin el eje $z$ y sea $\mathcal D$ la distribución generada por los campos $$X(x,y,z)=-y\frac{\partial}{\partial x}\big|_{(x,y,z)}+x\frac{\partial}{\partial y}\big|_{(x,y,z)} \qquad Z(p)=\frac{\partial}{\partial z}\big|_{(x,y,z)}$$
>Demostrar que $C=\{(x,y,z)\in\mathbb R^3:x^2+y^2=1\}$, con la estructura diferenciable usual, es una subvariedad integral conexa maximal de $\mathcal D$.
>>[!Proof]-
>>1. Sea $f:M\to\mathbb R$ dada por $f(x,y,z)=x^2+y^2$. Entonces $C=f^{-1}(1)$.
>>2. Tenemos $$df=2x\,dx+2y\,dy$$ esto se ve directo planteando la $1$-forma $df=\sum^{3}_{i=1} a_{i}dx_{i}$ y calculando coeficientes (obviamente $x_{1}=x,x_{2}=y,x_{3}=z$). Ademas si $p=(p_1,p_2,p_3)\in C$, entonces $df_p=2p_1(dx)_p+2p_2(dy)_p$.
>>3. Sea $p\in C$, se tiene $p_1^2+p_2^2=1$, luego $(p_1,p_2)\neq(0,0)$ y por tanto $df_p\neq0$. Entonces $1$ es valor regular de $f$, así que $C=f^{-1}(1)$ es una subvariedad regular de $\mathbb R^3$.
>>4. Ahora calculemos $T_pC$. Un vector $$v=a\frac{\partial}{\partial x}\big|_p+b\frac{\partial}{\partial y}\big|_p+c\frac{\partial}{\partial z}\big|_p$$ pertenece a $T_pC$ si y solo si $df_p(v)=0$.
>>5. Si $v=(a,b,c)$ como $df_p(v)=2p_1a+2p_2b$, resulta que $v\in T_pC$ si y solo si $p_1a+p_2b=0$.
>>6. Entonces como $X_{p}=-p_2\frac{\partial}{\partial x}\big|_p+p_1\frac{\partial}{\partial y}\big|_p$ y $p_1(-p_2)+p_2(p_1)=0$, luego $X(p)\in T_pC$, y también analogamente $Z(p)\in T_pC$.
>>7. Como $X(p)\neq0$ para todo $p\in C$ y $Z(p)$ no es múltiplo de $X(p)$, los vectores $X(p)$ y $Z(p)$ son linealmente independientes (Si no haciendo norma del producto cruz de $X$ e $Y$) . Entonces $\dim\operatorname{span}\{X(p),Z(p)\}=2$.
>>8. Como $C$ es una superficie regular, $\dim T_pC=2$. Ya tenemos $\operatorname{span}\{X(p),Z(p)\}\subseteq T_pC$ y ambos espacios tienen dimensión $2$, por lo tanto $T_pC=\operatorname{span}\{X(p),Z(p)\}=\mathcal D_p$ para todo $p\in C$.
>>9. Así, $C$ es una subvariedad integral de $\mathcal D$.
>>10. **Veamos que $C$ es conexa**. Consideramos la aplicación $$F:S^1\times\mathbb R\to C,\quad F((\cos t,\sin t),z)=(\cos t,\sin t,z)$$esta aplicación es continua y sobreyectiva. Como $S^1$ y $\mathbb R$ son conexos, también $S^1\times\mathbb R$ es conexo. Luego $C$ es conexo por ser imagen continua de un conexo.
>>11. **Veamos ahora que $C$ es maximal**. La idea es que la distribución $\mathcal D$ solo permite moverse girando alrededor del eje $z$ y verticalmente, pero no permite cambiar el radio $x^2+y^2$.  
>>12. Sea $N$ una subvariedad integral conexa de $\mathcal D$. Como $N$ es integral, para cada $p\in N$ se cumple $T_pN=\mathcal D_p$.  
>>13. Sea $\gamma:(-\varepsilon,\varepsilon)\to N$ una curva suave en $N$. Escribimos $\gamma(t)=(x(t),y(t),z(t))$. Como $\gamma'(t)\in T_{\gamma(t)}N=\mathcal D_{\gamma(t)}$, existen funciones suaves $a(t)$ y $b(t)$ tales que $$\gamma'(t)=a(t)X_{\gamma(t)}+b(t)Z_{\gamma(t)}$$
>>14. Como $X_{\gamma(t)}=(-y(t),x(t),0)$ y $Z_{\gamma(t)}=(0,0,1)$, tenemos $\gamma'(t)=a(t)(-y(t),x(t),0)+b(t)(0,0,1)$. Por lo tanto $x'(t)=-a(t)y(t)$, $y'(t)=a(t)x(t)$ y $z'(t)=b(t)$.
>>15. Ahora derivamos el radio al cuadrado a lo largo de la curva (de $\gamma$): $$\frac{d}{dt}(x(t)^2+y(t)^2)=2x(t)x'(t)+2y(t)y'(t)$$sustituyendo las igualdades anteriores, queda $$\frac{d}{dt}(x(t)^2+y(t)^2)=2x(t)(-a(t)y(t))+2y(t)(a(t)x(t))=0$$
>>16. Luego $x(t)^2+y(t)^2$ es constante a lo largo de toda curva suave contenida en $N$. Como $N$ es una variedad conexa, entonces $N$ es conexa por caminos. Por lo tanto, dados $p,q\in N$, existe una curva suave a trozos $\gamma$ contenida en $N$ que une $p$ con $q$. Aplicando lo anterior a cada tramo suave de $\gamma$, el valor de $x^2+y^2$ no cambia de tramo a tramo, por que los tramos se pegan bien entonces en el borde su radio sera el mismo. 
>>17. Entonces puedo pegar dos puntos cualquier de $N$ con una curva que tiene radio contante. Luego $x^2+y^2$ es constante en todo $N$. Por lo tanto existe una constante $r^2>0$ tal que $N\subseteq\{(x,y,z)\in M:x^2+y^2=r^2\}$.
>>18. En particular, si $N$ es una subvariedad integral conexa que contiene a $C$, entonces $N\cap C\neq\varnothing$. En algún punto de $N$ se cumple $x^2+y^2=1$, luego la constante anterior es $1$. Por lo tanto $N\subseteq C$.  
>>19. Por lo tanto $C$ es maximal.
>>20. **Mucho mas facil** como $1$ es cerrado, su preimagen $C=f^{-1}(\{ 1 \})$ es cerrado de $M$ entonces por [[GS - Pr6#^0b6ac2]] es maximal 
### Ejercicio 11

>[!Exercise]
>Sea $f:\mathbb R\to\mathbb R$ una función diferenciable tal que $f(0)=0$. Para cada $p\in\mathbb R^3$, se identifica $T_p\mathbb R^3$ con $\mathbb R^3$ y se define la distribución $D$ dada por $$\mathcal D(x,y,z)=\operatorname{span}\{e_1+f'(x)\sin(y)e_3,\ e_2+f(x)\cos(y)e_3\}.$$
>
>- Mostrar que $D$ es una distribución involutiva.
>- Hallar una subvariedad integral $\phi:\mathbb R^2\to\mathbb R^3$ de $D$ tal que $\phi(0,0)=(0,0,0)$.
>>[!Proof]-
>>1. Denotemos $$X=e_1+f'(x)\sin(y)e_3,\qquad Y=e_2+f(x)\cos(y)e_3.$$
>>2. En coordenadas $$X=\frac{\partial}{\partial x}+f'(x)\sin(y)\frac{\partial}{\partial z},\qquad Y=\frac{\partial}{\partial y}+f(x)\cos(y)\frac{\partial}{\partial z}.$$
>>3. Calculamos el corchete usando la formula de siempre. La única componente no constante es la componente $\frac{d}{dz}$.
>>4. Se tiene $$X(Y^{3})=X(f(x)\cos y)=f'(x)\cos y,$$$$Y(X^{3})=Y(f'(x)\sin y)=f'(x)\cos y.$$
>>5. Por lo tanto $$[X,Y]=0.$$
>>6. En particular, $[X,Y]\in D$, así que $D$ es involutiva.
>>7. Buscamos una subvariedad integral $\phi(u,v)$ tal que $(d\phi)_{(u,v)}(T_{(u,v)}\mathbb{R}^{2})\in \mathcal{D}_{\phi(u,v)}$, como $T_{(u,v)}\mathbb{R}^{2}$ es generado por $\left\{  \frac{d}{du}, \frac{d}{dv}  \right\}$ es lo mismo que ver $$(d\phi)_{(u,v)}\left(\frac{d}{du}\right)\in \mathcal{D}_{\phi(u,v)}\quad y\quad (d\phi)_{(u,v)}\left(\frac{d}{dv}\right)\in \mathcal{D}_{\phi(u,v)}$$ osea $$\frac{d\phi}{du}\in \mathcal{D}_{\phi(u,v)}\quad \land \quad\frac{d\phi}{dv}\in \mathcal{D}_{\phi(u,v)}$$
>>8. Ahora si pensamos $\phi(u,v)=(u,v,g(u,v)).$
>>9. Entonces
>>    $$\phi_u=(1,0,g_u),\qquad \phi_v=(0,1,g_v).$$
>>10. Ahora notamos que como $\phi(u,v)=(u,v,g(u,v))$ entonces  $$\mathcal D_{\phi(u,v)}=\operatorname{span}\{ (1,0,f'(u)\sin v),(0,1,f(u)\cos v) \}$$
>>11. Entonces queremos que
>>    $$g_u=f'(u)\sin v,\qquad g_v=f(u)\cos v.$$
>>12. Una función que cumple esto es
>>    $$g(u,v)=f(u)\sin v.$$
>>13. Como $f(0)=0$,
>>    $$\phi(0,0)=(0,0,f(0)\sin0)=(0,0,0).$$
>>14. Por lo tanto una subvariedad integral pedida es
>>    $$\boxed{\phi(u,v)=(u,v,f(u)\sin v)}.$$
