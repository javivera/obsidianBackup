# Teorema del rango constante

>[!Definition] Funcion de rango constante
>Una funcion suave $$F:M\to N$$ se dice de rango constante $r$ si para todo $p\in M$, la imagen de $$(dF)_p$$ tiene dimension $r$.

>[!Definition] Submersion
>Una funcion suave $$F:M\to N$$ se dice submersion suave si $$(dF)_p$$ es sobreyectiva para todo $p\in M$.

>[!Example]- Submersion
>Sean $m\ge n$. Considerar $$\pi:\mathbb R^m\to \mathbb R^n,$$
>$$(s_1,\ldots,s_n,s_{n+1},\ldots,s_m)\mapsto (s_1,\ldots,s_n).$$
>Notar que $\pi$ es transformacion lineal.

>[!Example]- Rango constante
>1. Si $$F:M\to N$$ es una inmersion, entonces $\ker(dF)_p$ es trivial para todo $p\in M$, entonces $F$ es de rango constante e igual a $\dim M$.
>2. Si $$F:M\to N$$ es submersion, entonces $F$ es de rango constante e igual a $\dim N$.
>3. Sean $m,n\in\mathbb N$, $m,n\ge 2$, y sea $r<\min\{m,n\}$. La transformacion lineal
>$$T:\mathbb R^m\to \mathbb R^n,$$
>$$(s_1,\ldots,s_r,s_{r+1},\ldots,s_m)\mapsto (s_1,\ldots,s_r,0,\ldots,0)$$
>es una funcion de rango constante $r$. Notar que $T$ es transformacion lineal.

>[!Theorem] Forma local de una funcion de rango constante
>Sean $M$ y $N$ variedades suaves de dimension $m$ y $n$ respectivamente, y sea $$F:M\to N$$ una funcion suave de rango constante $r$. Entonces, para cada $p\in M$, existen cartas suaves $(U,\varphi)$ de $M$ centrada en $p$ y $(V,\psi)$ de $N$ centrada en $F(p)$ tales que $$F(U)\subseteq V$$ y
>$$\psi\circ F\circ \varphi^{-1}(s_1,\ldots,s_r,s_{r+1},\ldots,s_m)=(s_1,\ldots,s_r,0,\ldots,0).$$
>
>En particular, si $F$ es una submersion suave, entonces $(r=n)$ y
>$$\psi\circ F\circ \varphi^{-1}(s_1,\ldots,s_m)=(s_1,\ldots,s_n),$$
>y si $F$ es una inmersion suave, entonces $(r=m)$ y
>$$\psi\circ F\circ \varphi^{-1}(s_1,\ldots,s_m)=(s_1,\ldots,s_m,0,\ldots,0).$$
>
>>[!Proof]- Revisar
>>1. Sea $p\in M$. Tomamos cartas suaves $(U,\varphi)$ de $M$ centrada en $p$ y $(V,\psi)$ de $N$ centrada en $F(p)$ tales que $F(U)\subseteq V$.
>>2. Consideramos $$\widetilde F=\psi\circ F\circ\varphi^{-1}:\varphi(U)\subseteq\mathbb R^m\to\psi(V)\subseteq\mathbb R^n.$$
>>3. Como $\widetilde F$ tiene rango $r$ (es por que $F$ tiene rango $r$ y las cartas son homeomorfismos entonces su diferencial es isomorfismo con lo cual no cambia el rango), achicando si hace falta, podemos suponer que una submatriz $r\times r$ de la matriz jacobiana es no singular en $(0,0)$. Reordenando coordenadas, tomamos $$\left(\frac{\partial \widetilde F_i}{\partial x_j}(0,0)\right)_{1\le i,j\le r}.$$
>>4. Escribimos coordenadas en $\mathbb R^m$ como $$s=(x,y),\qquad x=(x_1,\ldots,x_r),\qquad y=(y_1,\ldots,y_{m-r}).$$
>>5. Definimos $$Q:\widetilde U\subseteq\mathbb R^m\to\mathbb R^m,$$ $$Q(x,y)=\big(\widetilde F_1(x,y),\ldots,\widetilde F_r(x,y),y\big).$$
>>6. Afirmacion: $$dQ(0,0)=\begin{pmatrix}\dfrac{\partial Q_i}{\partial x_j} & \dfrac{\partial Q_i}{\partial y_j}\\0 & I_{m-r}\end{pmatrix}_{(0,0)}$$ es no singular. Como el bloque $$\left(\frac{\partial Q_i}{\partial x_j}(0,0)\right)$$ es no singular por el paso 3. entonces $dQ(0,0)$ es no singular.
>>7. Por el teorema de la funcion inversa, existen abiertos $\widetilde U_0$ de $\mathbb R^m$ en $(0,0)$ y $\widehat U$ de $(0,0)$ tales que $$Q|_{\widetilde U_0}:\widetilde U_0\to \widehat U$$es un difeomorfismo.
>>8. Como las cajas abiertas son una base de la topologia de $\mathbb R^m$, podemos suponer que $\widehat U$ es una caja: $$C_\varepsilon^m(0,0)=\{(s_1,\ldots,s_m)\in\mathbb R^m:\ |s_i|<\varepsilon\}.$$
>>9. Sea $$\varphi^{-1}:C_\varepsilon^m(0,0)\subseteq\mathbb R^m\to \widetilde U_0\subseteq\mathbb R^m,$$$$(x,y)\mapsto (A(x,y),B(x,y)).$$
>>10. Por definicion, $$Q(A(x,y),B(x,y))=(x,y).$$
>>11. Esto dice que $$\big(\widetilde F_1(A,B),\ldots,\widetilde F_r(A,B),B(x,y)\big)=(x,y),$$
>>12. Luego $B(x,y)=y$ y entonces $$\varphi^{-1}(x,y)=(A(x,y),y).$$
>>13. Con esto $$\widetilde F\circ\varphi^{-1}(x,y)=\widetilde F(A(x,y),y)=(x,\widetilde B(x,y)),$$donde $$\widetilde B:C_\varepsilon^m(0,0)\subseteq\mathbb R^m\to\mathbb R^{n-r}.$$
>>14. Como $\widetilde F\circ\varphi^{-1}$ tiene rango $r$, y la primera parte ya aporta las $r$ coordenadas $x$, se tiene $$\frac{\partial \widetilde B_j}{\partial y_i}(x,y)=0$$para todo $(x,y)\in C_\varepsilon^m(0,0)$.
>>15. Es decir, $\widetilde B_j$ no depende de las variables $y_1,\ldots,y_{m-r}$. En particular, como $C_\varepsilon^m(0,0)$ es una caja, $$\widetilde B_j(x,y)=\widetilde B_j(x,0).$$
>>16. Definimos $$S:C_\varepsilon^r(0)\subseteq\mathbb R^r\to\mathbb R^{n-r},\qquad S(x)=\widetilde B(x,0).$$
>>17. Entonces $$\widetilde F\circ\varphi^{-1}(x,y)=(x,S(x)).$$
>>18. Ahora definimos una carta en el codominio: $$\psi(w,u)=(w,u-S(w)).$$
>>19. Esta funcion es un difeomorfismo local, pues $$d\psi(0)=\begin{pmatrix} I_r & 0\\-\dfrac{\partial S_i}{\partial w_j}(0) & I_{n-r}\end{pmatrix}$$es no singular.
>>20. Finalmente, $$\psi\circ\widetilde F\circ\varphi^{-1}(x,y)=\psi(x,S(x))=(x,0).$$

>[!Proposition]
>Si $X$ es un espacio topologico N2, entonces todo cubrimiento abierto de $X$ tiene un subcubrimiento numerable.

>[!Theorem] Teorema de Baire
>Si $X$ es un espacio topologico localmente compacto y $T_2$, entonces $X$ no se puede expresar como una union numerable de cerrados con interior vacio.

>[!Theorem] Del rango global
>Sean $M$ y $N$ variedades suaves, y sea $$F:M\to N$$funcion suave de rango constante. Entonces:
>	- (a)  Si $F$ es sobreyectiva, entonces $F$ es submersion.
>	- (b)  Si $F$ es inyectiva, entonces $F$ es inmersion.
>	- (c)  Si $F$ es biyectiva, entonces $F$ es difeomorfismo.
>
>>[!Proof]- Revisar
>>- (a)
>>	1. Razonemos por absurdo. Si $F$ es sobreyectiva y no es submersion, entonces el rango constante $r$ satisface $r<n$.
>>	2. Por el teorema de rango constante, para cada $p\in M$ existen cartas $(U_p,\varphi_p)$ y $(V_p,\psi_p)$ tales que $$\psi_p\circ F\circ\varphi_p^{-1}(x_1,\ldots,x_r,x_{r+1},\ldots,x_m)=(x_1,\ldots,x_r,0,\ldots,0).$$
>>	3. Podemos tomar $U_p$ abierto con clausura compacta dentro de una carta. Como $M$ es segundo numerable, existe un subcubrimiento numerable $\{U_{p_k}\}_{k\in\mathbb N}$.
>>	4. Entonces $$N=F(M)=\bigcup_{k\in\mathbb N}F(U_{p_k}).$$
>>	5. Pero cada $F(U_{p_k})$ esta contenido, en coordenadas locales, en un subconjunto de la forma $$\{(x_1,\ldots,x_r,0,\ldots,0)\}\subseteq\mathbb R^n,$$que tiene interior vacio si $r<n$. Esto contradice el teorema de Baire. Luego $r=n$ y $F$ es submersion.
>>- (c)
>>	1. Si $F$ es inyectiva y no fuera inmersion, entonces $r<m$. En cartas de rango constante, $$\psi\circ F\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_r,0,\ldots,0).$$
>>	2. Tomando puntos distintos que coinciden en las primeras $r$ coordenadas y difieren en alguna de las restantes, sus imagenes por $F$ coinciden. Esto contradice que $F$ sea inyectiva. Por lo tanto $r=m$ y $F$ es inmersion.
>>	3. Si $F$ es biyectiva, por 1 es submersion y por 2 es inmersion. Luego $r=n$ y $r=m$, asi que $m=n$. Entonces $(dF)_p$ es un isomorfismo para todo $p\in M$.
>>	4. Por el teorema de la funcion inversa, $F$ es un difeomorfismo local. Como ademas $F$ es biyectiva, $F^{-1}$ esta bien definida globalmente y es suave localmente. Por lo tanto $F$ es un difeomorfismo.

# Cubo abierto y rebanadas

>[!Definition] Cubo abierto
>Sea $\epsilon > 0$. Venimos denotando por $C_\epsilon^n(0)$ al cubo abierto centrado en $0$ de $\mathbb R^n$ de ancho $2\epsilon$: $$C_\epsilon^n(0)=\{(x_1,\ldots,x_n)\in\mathbb R^n: |x_i|<\epsilon\}=(-\epsilon,\epsilon)\times\cdots\times(-\epsilon,\epsilon)\qquad (n\text{ veces}).$$

>[!Definition] Rebanada de $C_{\epsilon}^{n}(0)$ a una altura
>Sea $m<n$ y sean $c_{m+1},\ldots,c_n$ constantes en $\mathbb R$ con $|c_j|<\epsilon$ para todo $j$. $$R(c_{m+1},\ldots,c_n):=\{y\in C_\epsilon^n(0):y_{m+1}=c_{m+1},\ldots,y_n=c_n\}.$$
>Se le llama rebanada de $C_\epsilon^n(0)$ a la altura de $(c_{m+1},\ldots,c_n)$.

>[!Definition] Rebanada de una variedad
>Sea $M$ una variedad de dimension $n$ y $(U,\varphi=(x_1,\ldots,x_n))$ una carta suave cubica de $M$ centrada en $p$; esto es $\varphi(U)=C_\epsilon^n(0)$ con $\varphi(p)=0$ de $\mathbb R^n$.
>
>Dado $m\in\mathbb N$, $m<n$, y constantes $c_{m+1},\ldots,c_n$ con $|c_j|<\epsilon$, se define la rebanada $R(c_{m+1},\ldots,c_n)$ de $(U,\varphi)$ como el conjunto: $$R(c_{m+1},\ldots,c_n)=\{q\in U:x_{m+1}(q)=c_{m+1},\ldots,x_n(q)=c_n\}.$$
>Otra forma de verlo es $$R(c_{m+1},\ldots,c_{n})=\varphi ^{-1}((-\epsilon,\epsilon)^{m} \times \{ c_{m+1},\ldots c_{n} \})$$ para esta idea es que se usa una carta cubica
  

>[!Remark] Ejercicio
>Para todo $p\in M$ variedad, existe una carta cubica centrada en $p$.

>[!Proposition] Ejercicio
>Sea $M$ variedad y $(U,\varphi)$ carta. Toda rebanada $R=R(c_{m+1},\ldots,c_n)$ con la topologia relativa de $M$ tiene una estructura diferenciable tal que $(R,i)$ es subvariedad de $U$ y a su vez de $M$, de dimension $m$. (Supongo $m<n$ por como definimos rebanada) 
>
>>[!Proof]-
>>1. Consideremos la funcion $$\pi_m:\mathbb R^n\to\mathbb R^m$$$$(y_1,\ldots,y_n)\mapsto(y_1,\ldots,y_m)$$que proyecta a $(y_1,\ldots,y_n)$ en sus primeras $m$ coordenadas.
>>2. Supongamos como carta de $R$: $$(R,\widetilde\varphi=\pi_m\circ\varphi|_R)$$y la estructura dif. sobre $R$ seria el atlas maximal generado por $\{(R,\widetilde\varphi)\}$.
>>3. Notar que $\widetilde\varphi(R)$ es el abierto en $\mathbb R^m$ $$C_\epsilon^m(0)=\{(y_1,\ldots,y_m)\in\mathbb R^m:|y_i|<\epsilon\}.$$ aca estamos asumiendo que $\varphi$ es carta cubica, por definicion de rebanada
>>4. Veamos que $\widetilde\varphi$ es homeo entre $R$ y $C_\epsilon^m(0)$.
>>5. Claramente $\widetilde\varphi$ es continua, pues $\varphi|_R$ es continua, por tener $R$ la topologia relativa y por ser $\varphi$ continua 
>>6. Ademas $\widetilde{\varphi}$ tiene inversa continua $$\varphi^{-1}\circ j:C_\epsilon^m(0)\to R$$donde $j$ es la funcion $$j:C_\epsilon^m(0)\to C_\epsilon^n(0),\qquad (y_1,\ldots,y_m)\mapsto(y_1,\ldots,y_m,c_{m+1},\ldots,c_n).$$
>>7. Por ultimo, veamos que $i:R\to M$ es suave y una inmersion. Para esto comparemos con las cartas $\widetilde\varphi$ y $\varphi$: $$\varphi\circ i\circ\widetilde\varphi^{-1}:C_\epsilon^m(0)\subseteq\mathbb R^m\to C_\epsilon^n(0)\subseteq\mathbb R^n$$$$(y_1,\ldots,y_m)\mapsto(y_1,\ldots,y_m,c_{m+1},\ldots,c_n).$$ por lo que $i$ es suave
>>8. Y de paso resulta inmersion, pues $F=\varphi\circ i\circ\widetilde\varphi^{-1}$ es una inmersion. $$J(\varphi\circ i\circ\widetilde\varphi^{-1})=\begin{pmatrix}I_{m\times m}\\0\end{pmatrix}.$$por lo que $\operatorname{Imagen} d(\varphi\circ i\circ\widetilde\varphi^{-1})_{(y_1,\ldots,y_m)}$ tiene rango $m$, por lo que tiene kernel trivial (Teorema del rango y el kernel). Osea $(dF)_{(y_{1},\ldots,y_{m})}$ es inyectiva 
>>9. Ademas esto implica que $(di)_q$ para todo $q\in R$ tambien es inyectiva, veamoslo
>>10. Notemos que $(d\varphi)_q\text{ y }(d\widetilde\varphi^{-1})_{\widetilde\varphi(q)}$ son isomorfismos por que $\varphi$ y $\widetilde{\varphi}$ son cartas osea difeomorfismos.
>>11. Entonces sea $v$ tal que $di(v)=0$ como $d \tilde{\varphi}^{-1}$ es isomorfismo existe $w$ tal que $d \tilde{\varphi}^{-1}(w)=v$ entonces $$(dF)_{q}(w)=d\varphi(di(d \tilde{\varphi}(w)))=d\varphi(di(w))=d\varphi(0)=0$$ por que $d\varphi$ es es lineal y como $dF$ es iso entonces $w=0$
>>12. Luego $0=d \tilde{\varphi}(w)=v$ mostrando que $\ker\{ (di)_{q} \}=0$ osea que $(di)_{q}$ es inyectiva, como queriamos


