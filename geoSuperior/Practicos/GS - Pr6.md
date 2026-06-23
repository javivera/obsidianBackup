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
>>15. Ahora probamos que es maximal entre las subvariedades integrales conexas que contienen a $(0,0)$.
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
>>3. Fix $p\in U$. Since $\mathcal{D}$ is a smooth $1$-dimensional distribution, there exists an open neighborhood $V\subseteq U$ of $p$ and a smooth vector field $E\in\mathfrak{X}(V)$ such that $$E_q\neq 0,\qquad \mathcal{D}_q=\operatorname{span}\{E_q\}\quad\text{for every }q\in V.$$
>>4. Since $X_q,Y_q\in\mathcal{D}_q=\operatorname{span}\{E_q\}$ for every $q\in V$, there exist pointwise functions $\alpha,\beta:V\to\mathbb{R}$ such that $$X|_V=\alpha E,\qquad Y|_V=\beta E.$$
>>5. We justify that $\alpha,\beta$ are smooth. In local coordinates on a smaller neighborhood of $p$, write $$E=E^i\frac{\partial}{\partial x^i},\qquad X=X^i\frac{\partial}{\partial x^i}.$$ Since $E_p\neq 0$, at least one component satisfies $E^i(p)\neq 0$. Shrinking $V$ if necessary, we may assume $$E^i(q)\neq 0\quad\text{for every }q\in V.$$
>>6. Since $X=\alpha E$, comparing the $i$-th coordinate gives $$X^i=\alpha E^i.$$ Hence $$\alpha=\frac{X^i}{E^i}.$$ Since $X^i$ and $E^i$ are smooth and $E^i$ is nonzero on $V$, we get $$\alpha\in C^\infty(V).$$ The same argument applied to $Y=\beta E$ gives $$\beta\in C^\infty(V).$$
>>7. For any $f\in C^\infty(V)$, compute $$[\alpha E,\beta E](f)=\alpha E(\beta E(f))-\beta E(\alpha E(f)).$$
>>8. Applying the Leibniz rule, $$\alpha E(\beta E(f))=\alpha E(\beta)E(f)+\alpha\beta E(E(f)),$$ and $$\beta E(\alpha E(f))=\beta E(\alpha)E(f)+\alpha\beta E(E(f)).$$
>>9. Subtracting, the second-order terms cancel, so $$[\alpha E,\beta E](f)=\bigl(\alpha E(\beta)-\beta E(\alpha)\bigr)E(f).$$
>>10. Therefore, on $V$, $$[X,Y]|_V=[\alpha E,\beta E]=\bigl(\alpha E(\beta)-\beta E(\alpha)\bigr)E.$$
>>11. Evaluating at $p$, $$[X,Y]_p=\bigl(\alpha E(\beta)-\beta E(\alpha)\bigr)(p)E_p.$$
>>12. Hence $$[X,Y]_p\in\operatorname{span}\{E_p\}=\mathcal{D}_p.$$
>>13. Since $p\in U$ was arbitrary, $$[X,Y]_q\in\mathcal{D}_q\quad\text{for every }q\in U.$$
>>14. Therefore $\mathcal{D}$ is involutive.

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
>>3. En efecto, si $aX+bY=0$, mirando la componente $\partial_x$ se obtiene $ax=0$, luego $a=0$. Después, como $x,y,z>0$, de $bY=0$ se sigue $b=0$.
>>4. Por lo tanto generan una distribución de dimensión $2$.
>>5. Calculamos el corchete. Como
>>   $$X=(x,-2y,0),\qquad Y=(0,xy,-xz),$$
>>   se tiene
>>   $$X(xy)=-xy,\qquad X(-xz)=-xz,$$
>>   y
>>   $$Y(x)=0,\qquad Y(-2y)=-2xy.$$
>>6. Entonces
>>   $$[X,Y]=(0,-xy,-xz)-(0,-2xy,0)=(0,xy,-xz)=Y.$$
>>7. Como $[X,Y]=Y\in D$, la distribución generada por $X,Y$ es involutiva.
>>8. Para hallar las superficies integrales, buscamos una primera integral $F$ tal que
>>   $$X(F)=0,\qquad Y(F)=0.$$
>>9. Usando coordenadas logarítmicas
>>   $$u=\log x,\qquad v=\log y,\qquad w=\log z,$$
>>   los campos generan el mismo plano que
>>   $$\partial_u-2\partial_v,\qquad \partial_v-\partial_w.$$
>>10. Una función constante en ambas direcciones es
>>   $$2u+v+w=\log(x^2yz).$$
>>11. Por lo tanto las hojas integrales son los niveles
>>   $$x^2yz=c,\qquad c>0.$$
>>12. Concluimos que las superficies integrales conexas maximales son
>>   $$\boxed{S_c=\{(x,y,z)\in O:x^2yz=c\}},\qquad c>0.$$

### Ejercicio 5

>[!Exercise]
>Se definen en $\mathbb R^3$ los campos $V$ y $W$ por
>$$V(x,y,z)=(1,0,0),\qquad W(x,y,z)=(0,1,x).$$
>
>- Dibujar los campos $V$ y $W$ para todos los puntos del plano $z=0$.
>- Mostrar que la distribución $D(p)=\operatorname{span}\{V(p),W(p)\}$ no es integrable.
>- Dado un punto cualquiera $p$ de $\mathbb R^3$, mostrar que existe una curva diferenciable a trozos $\gamma:[0,a]\to\mathbb R^3$ tal que $\gamma(0)=0$, $\gamma(a)=p$ y $\gamma'(t)\in D(\gamma(t))$ para todo $t$ donde $\gamma'(t)$ existe. ¿Podría suceder esto si la distribución fuera integrable?
>>[!Proof]-
>>1. En el plano $z=0$, el campo $V$ es siempre horizontal en dirección del eje $x$:
>>   $$V=(1,0,0).$$
>>2. En cambio
>>   $$W(x,y,0)=(0,1,x),$$
>>   así que tiene siempre componente $+y$ y una componente vertical igual a $x$.
>>3. En particular, sobre el plano $x=0$ el campo $W$ apunta en dirección $y$, mientras que para $x>0$ sube y para $x<0$ baja.
>>4. Para ver que $D$ no es integrable, calculamos
>>   $$[V,W]=\left[\frac{\partial}{\partial x},\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}\right]
>>   =\frac{\partial}{\partial z}.$$
>>5. Pero
>>   $$\frac{\partial}{\partial z}\notin \operatorname{span}\left\{\frac{\partial}{\partial x},\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}\right\}.$$
>>6. En efecto, si
>>   $$(0,0,1)=a(1,0,0)+b(0,1,x),$$
>>   entonces $a=0$ y $b=0$, pero quedaría $1=0$ en la componente $z$.
>>7. Por el teorema de Frobenius, $D$ no es integrable.
>>8. Ahora sea $p=(a,b,c)\in\mathbb R^3$.
>>9. Vamos a construir una curva horizontal a trozos desde $0$ hasta $p$.
>>10. Primero nos movemos en dirección $V$ desde $(0,0,0)$ hasta
>>    $$(r,0,0),\qquad r=a+c-ab.$$
>>11. Luego nos movemos durante tiempo $1$ en dirección $W$ manteniendo $x=r$:
>>    $$(r,0,0)\longrightarrow (r,1,r).$$
>>12. Después volvemos a movernos en dirección $V$ hasta $x=a$:
>>    $$(r,1,r)\longrightarrow (a,1,r).$$
>>13. Finalmente nos movemos en dirección $W$ durante tiempo $b-1$ manteniendo $x=a$:
>>    $$(a,1,r)\longrightarrow (a,b,r+a(b-1)).$$
>>14. Como $r=a+c-ab$, se tiene
>>    $$r+a(b-1)=a+c-ab+ab-a=c.$$
>>15. Por lo tanto llegamos a
>>    $$(a,b,c)=p.$$
>>16. Cada tramo tiene velocidad proporcional a $V$ o a $W$, por lo que su velocidad pertenece a $D$.
>>17. Si $D$ fuera integrable, toda curva a trozos tangente a $D$ que empieza en $0$ debería permanecer en la hoja integral que contiene a $0$.
>>18. Esa hoja tendría dimensión $2$, no podría ser todo $\mathbb R^3$.
>>19. Por lo tanto este fenómeno de llegar a cualquier punto de $\mathbb R^3$ no podría suceder si la distribución fuera integrable de dimensión $2$.

### Ejercicio 6

>[!Exercise]
>Las posiciones de un uniciclo ideal pueden describirse con coordenadas $(x,y,\theta)\in\mathbb R^3$.
>
>- Convencerse de que un movimiento ideal $\gamma(t)=(x(t),y(t),\theta(t))$ es admisible si y solo si $(x',y')=\lambda(\cos\theta,\sin\theta)$ para cierta función $\lambda:\mathbb R\to\mathbb R$.
>- Mostrar que un movimiento $\gamma$ es admisible si y solo si $\gamma'(t)\in D_{\gamma(t)}$ para todo $t$, donde
>  $$D_{(x,y,\theta)}=\operatorname{span}\{(\cos\theta,\sin\theta,0),(0,0,1)\}.$$
>- Representar gráficamente la distribución $D$ y verificar que no es integrable.
>- Encontrar una curva admisible a trozos que una los puntos $(0,0,0)$ y $(0,1,0)$.
>>[!Proof]-
>>1. En un uniciclo ideal no hay deslizamiento lateral.
>>2. Por eso la velocidad proyectada al plano debe estar alineada con la dirección en la que apunta la rueda:
>>   $$(\cos\theta,\sin\theta).$$
>>3. Entonces existe una función $\lambda(t)$ tal que
>>   $$(x'(t),y'(t))=\lambda(t)(\cos\theta(t),\sin\theta(t)).$$
>>4. La componente $\theta'(t)$ es libre, porque el uniciclo puede cambiar su ángulo.
>>5. Por lo tanto
>>   $$\gamma'(t)=(x'(t),y'(t),\theta'(t))
>>   =\lambda(t)(\cos\theta,\sin\theta,0)+\theta'(t)(0,0,1).$$
>>6. Esto equivale exactamente a
>>   $$\gamma'(t)\in D_{\gamma(t)}.$$
>>7. Gráficamente, en cada punto $(x,y,\theta)$, el plano $D$ está generado por una dirección horizontal que apunta según el ángulo $\theta$ y por la dirección vertical $\partial_\theta$.
>>8. Para verificar que no es integrable, tomamos los generadores
>>   $$A=(\cos\theta,\sin\theta,0),\qquad B=(0,0,1)=\frac{\partial}{\partial\theta}.$$
>>9. Entonces
>>   $$[A,B]=-\frac{\partial A}{\partial\theta}=(\sin\theta,-\cos\theta,0).$$
>>10. Este vector no pertenece a $\operatorname{span}\{A,B\}$, porque su componente horizontal es perpendicular a $(\cos\theta,\sin\theta)$ y no es nula.
>>11. Por lo tanto $D$ no es involutiva, y entonces no es integrable.
>>12. Para unir $(0,0,0)$ con $(0,1,0)$ hacemos tres tramos:
>>    - girar sin avanzar desde $\theta=0$ hasta $\theta=\pi/2$;
>>    - avanzar una unidad en dirección vertical del plano, manteniendo $\theta=\pi/2$;
>>    - girar sin avanzar desde $\theta=\pi/2$ hasta $\theta=0$.
>>13. Una parametrización a trozos es
>>   $$
>>   \gamma(t)=
>>   \begin{cases}
>>   (0,0,t),&0\le t\le \pi/2,\\
>>   (0,t-\pi/2,\pi/2),&\pi/2\le t\le \pi/2+1,\\
>>   (0,1,\pi+1-t),&\pi/2+1\le t\le \pi+1.
>>   \end{cases}
>>   $$
>>14. En cada tramo la velocidad está en $D$, luego la curva es admisible.

### Ejercicio 7

>[!Exercise]
>¿Es la subvariedad de $\mathbb R^2$ que conocemos por “el ocho” una subvariedad integral para alguna distribución involutiva sobre $\mathbb R^2$?
>>[!Proof]-
>>1. La respuesta es no, si por “el ocho” entendemos la curva con un punto de cruce transversal.
>>2. En el punto de cruce hay dos direcciones tangentes distintas.
>>3. Si el ocho fuera una subvariedad integral de una distribución $D$ de dimensión $1$, entonces en el punto de cruce debería cumplirse que
>>   $$T_p(\text{ocho})=D_p.$$
>>4. Pero $D_p$ es una única recta de $T_p\mathbb R^2$, mientras que el ocho tiene dos rectas tangentes distintas en el cruce.
>>5. Eso es imposible.
>>6. Si intentáramos tomar una distribución de dimensión $2$, entonces una subvariedad integral debería tener dimensión $2$, no dimensión $1$.
>>7. Por lo tanto el ocho no puede ser subvariedad integral de ninguna distribución involutiva sobre $\mathbb R^2$.

### Ejercicio 8

>[!Exercise]
>- Probar que la recta densa en el toro $\phi:\mathbb R\to T^2$ es una subvariedad integral de alguna distribución en $T^2$.
>- Sea $M$ una variedad diferenciable y sea $f:M\to T^2$ una función diferenciable tal que $f(M)\subset \phi(\mathbb R)$. Mostrar que $\phi^{-1}\circ f:M\to\mathbb R$ es diferenciable.
>>[!Proof]-
>>1. Podemos escribir el toro como
>>   $$T^2=\mathbb R^2/(2\pi\mathbb Z)^2.$$
>>2. Tomemos una pendiente irracional $\alpha\in\mathbb R\setminus\mathbb Q$ y definamos
>>   $$\phi(t)=[(t,\alpha t)].$$
>>3. Esta curva es una recta densa en el toro.
>>4. Consideremos el campo constante en el toro inducido por el vector
>>   $$(1,\alpha)\in\mathbb R^2.$$
>>5. Es decir, definimos una distribución de dimensión $1$ por
>>   $$D_q=\operatorname{span}\{X_q\},$$
>>   donde $X$ es el campo constante de pendiente $\alpha$.
>>6. Como
>>   $$\phi'(t)=X_{\phi(t)},$$
>>   se tiene
>>   $$d\phi_t(T_t\mathbb R)=D_{\phi(t)}.$$
>>7. Por lo tanto $\phi:\mathbb R\to T^2$ es una subvariedad integral de $D$.
>>8. Ahora sea $f:M\to T^2$ suave con $f(M)\subset\phi(\mathbb R)$.
>>9. Queremos probar que
>>   $$h=\phi^{-1}\circ f$$
>>   es suave.
>>10. La afirmación es local. Tomemos $p\in M$ y una vecindad $U$ de $p$ donde $f$ admita un levantamiento suave
>>    $$\widetilde f:U\to\mathbb R^2,\qquad \widetilde f=(u,v),$$
>>    respecto del recubrimiento $\pi:\mathbb R^2\to T^2$.
>>11. Como $f(U)\subset\phi(\mathbb R)$, para cada $q\in U$ existe $h(q)\in\mathbb R$ tal que
>>    $$\pi(u(q),v(q))=\pi(h(q),\alpha h(q)).$$
>>12. Entonces
>>    $$(u(q),v(q))-(h(q),\alpha h(q))\in (2\pi\mathbb Z)^2.$$
>>13. En una vecindad suficientemente chica, los enteros que aparecen en esta diferencia son constantes, porque toman valores discretos.
>>14. Por lo tanto localmente
>>    $$h(q)=u(q)-2\pi m$$
>>    para cierto entero fijo $m$.
>>15. Como $u$ es suave, $h$ es suave localmente.
>>16. Concluimos que $\phi^{-1}\circ f$ es diferenciable.

### Ejercicio 9

>[!Exercise]
>Sea $(M,\phi)$ una subvariedad integral conexa de una distribución involutiva en una variedad $N$. Probar que si $\phi(M)$ es cerrada en $N$, entonces $M$ es conexa maximal.
>>[!Proof]-
>>1. Sea $D$ la distribución involutiva en $N$.
>>2. Por el teorema de Frobenius, por cada punto pasa una subvariedad integral conexa maximal, que llamamos hoja.
>>3. Sea $L$ la hoja maximal que contiene a $\phi(M)$.
>>4. Como $M$ es subvariedad integral, se tiene
>>   $$d\phi_p(T_pM)=D_{\phi(p)}.$$
>>5. La hoja $L$ también tiene espacio tangente $D$ en cada punto.
>>6. Por lo tanto $\phi(M)$ es una subvariedad abierta de $L$: localmente, ambas subvariedades integrales tienen la misma dimensión y el mismo espacio tangente.
>>7. Además, por hipótesis $\phi(M)$ es cerrada en $N$, luego también es cerrada en $L$.
>>8. Entonces $\phi(M)$ es no vacía, abierta y cerrada en la hoja conexa $L$.
>>9. Como $L$ es conexa, se sigue que
>>   $$\phi(M)=L.$$
>>10. Por lo tanto $M$ coincide con la hoja conexa maximal, y entonces $M$ es conexa maximal.

### Ejercicio 10

>[!Exercise]
>Sea $M:=\mathbb R^3\setminus \text{eje }z$, y considerar la distribución $D$ de $M$ generada por los campos
>$$X(p)=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y},\qquad
>Z(p)=\frac{\partial}{\partial z}$$
>para todo $p=(x,y,z)\in M$. Demostrar que el cilindro
>$$C=\{(x,y,z)\in\mathbb R^3:x^2+y^2=1\},$$
>con la estructura diferenciable usual, es una subvariedad integral conexa maximal de $D$.
>>[!Proof]-
>>1. En $M=\mathbb R^3\setminus\text{eje }z$ se tiene $(x,y)\neq(0,0)$.
>>2. Los campos
>>   $$X=-y\partial_x+x\partial_y,\qquad Z=\partial_z$$
>>   son linealmente independientes en todo punto de $M$.
>>3. Además
>>   $$[X,Z]=0,$$
>>   así que la distribución es involutiva.
>>4. Consideremos la función
>>   $$r^2=x^2+y^2.$$
>>5. Se tiene
>>   $$X(r^2)=-y(2x)+x(2y)=0,\qquad Z(r^2)=0.$$
>>6. Por lo tanto las hojas integrales permanecen en niveles de $r^2$.
>>7. El cilindro
>>   $$C=\{x^2+y^2=1\}$$
>>   es uno de esos niveles.
>>8. En cada punto de $C$, el espacio tangente está dado por los vectores que anulan $d(r^2)$.
>>9. Como $X$ es tangente a los círculos horizontales y $Z$ es vertical, ambos son tangentes a $C$.
>>10. Además, como son linealmente independientes y $\dim C=2$,
>>    $$T_pC=\operatorname{span}\{X_p,Z_p\}=D_p.$$
>>11. Luego $C$ es subvariedad integral conexa de $D$.
>>12. Si una subvariedad integral conexa contiene a $C$ o a un punto de $C$, debe permanecer en el mismo nivel $x^2+y^2=1$, porque $r^2$ es constante sobre toda curva tangente a $D$.
>>13. Por lo tanto no puede salir de $C$.
>>14. Concluimos que $C$ es una subvariedad integral conexa maximal de $D$.

### Ejercicio 11

>[!Exercise]
>Sea $f:\mathbb R\to\mathbb R$ una función diferenciable tal que $f(0)=0$. Para cada $p\in\mathbb R^3$, se identifica $T_p\mathbb R^3$ con $\mathbb R^3$ y se define la distribución $D$ dada por
>$$D(x,y,z)=\operatorname{span}\{e_1+f'(x)\sin(y)e_3,\ e_2+f(x)\cos(y)e_3\}.$$
>
>- Mostrar que $D$ es una distribución involutiva.
>- Hallar una subvariedad integral $\phi:\mathbb R^2\to\mathbb R^3$ de $D$ tal que $\phi(0,0)=(0,0,0)$.
>>[!Proof]-
>>1. Denotemos
>>   $$A=e_1+f'(x)\sin(y)e_3,\qquad B=e_2+f(x)\cos(y)e_3.$$
>>2. En coordenadas,
>>   $$A=\frac{\partial}{\partial x}+f'(x)\sin(y)\frac{\partial}{\partial z},\qquad
>>   B=\frac{\partial}{\partial y}+f(x)\cos(y)\frac{\partial}{\partial z}.$$
>>3. Como las componentes en $\partial_x$ y $\partial_y$ son respectivamente $(1,0)$ y $(0,1)$, los campos $A,B$ son linealmente independientes en todo punto.
>>4. Calculamos el corchete. La única componente no constante es la componente $\partial_z$.
>>5. Se tiene
>>   $$A(f(x)\cos y)=f'(x)\cos y,$$
>>   porque el coeficiente no depende de $z$.
>>6. También
>>   $$B(f'(x)\sin y)=f'(x)\cos y.$$
>>7. Por lo tanto
>>   $$[A,B]=0.$$
>>8. En particular, $[A,B]\in D$, así que $D$ es involutiva.
>>9. Buscamos una subvariedad integral como gráfico
>>   $$\phi(u,v)=(u,v,g(u,v)).$$
>>10. Entonces
>>    $$\phi_u=(1,0,g_u),\qquad \phi_v=(0,1,g_v).$$
>>11. Queremos que
>>    $$g_u=f'(u)\sin v,\qquad g_v=f(u)\cos v.$$
>>12. Una función que cumple esto es
>>    $$g(u,v)=f(u)\sin v.$$
>>13. Como $f(0)=0$,
>>    $$\phi(0,0)=(0,0,f(0)\sin0)=(0,0,0).$$
>>14. Por lo tanto una subvariedad integral pedida es
>>    $$\boxed{\phi(u,v)=(u,v,f(u)\sin v)}.$$
