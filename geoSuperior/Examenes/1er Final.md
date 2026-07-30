
>[!Exercise]
>Sea $O(n)=\{A\in M(n,\mathbb R)\mid AA^t=I_n\}$ el grupo ortogonal, donde $I_n$ es la matriz identidad $n\times n$.
>- (a) Probar que $O(n)$ es una subvariedad incrustada de $M(n,\mathbb R)$ e indicar su dimensión. Mostrar que $(d\iota)_{I_n}(T_{I_n}O(n))=\mathfrak{so}(n,\mathbb R)$, donde $\mathfrak{so}(n,\mathbb R)=\{X\in M(n,\mathbb R)\mid X+X^t=0\}$.
>- (b) Sea $F:S^{n-1}\to M(n,\mathbb R)$ definida por $F(p)=I_n-2pp^t$. Mostrar que existe una función suave $\widetilde F:S^{n-1}\to O(n)$ tal que $F=\iota\circ\widetilde F$.
>- (c) Mostrar que $\widetilde F$ es una inmersión de $S^{n-1}$ en $O(n)$.
>>[!Proof]-
>>- (a)
>>	1. Definimos $G:M(n,\mathbb R)\to\operatorname{Sym}(n,\mathbb R)$ por $G(A)=AA^t$.
>>	2. Entonces $O(n)=G^{-1}(I_n)$.
>>	3. Sea $A\in O(n)$ y sea $X\in T_AM(n,\mathbb R)\cong M(n,\mathbb R)$.
>>	4. Tomamos la curva $\gamma(t)=A+tX$, que satisface $\gamma(0)=A$ y $\gamma'(0)=X$.
>>	5. Entonces $$dG_A(X)=\left.\frac{d}{dt}\right|_{t=0}G(\gamma(t))=\left.\frac{d}{dt}\right|_{t=0}(A+tX)(A+tX)^t=XA^t+AX^t.$$
>>	6. Veamos que $dG_A$ es sobreyectiva. Sea $S\in\operatorname{Sym}(n,\mathbb R)$ y tomamos $X=\frac12SA$.
>>	7. Como $A\in O(n)$, tenemos $AA^t=I_n$, y como $S$ es simétrica, $S^t=S$.
>>	8. Por lo tanto $$dG_A(X)=XA^t+AX^t=\frac12SAA^t+\frac12AA^tS^t=\frac12S+\frac12S=S.$$
>>	9. Luego $dG_A$ es sobreyectiva para todo $A\in O(n)=G^{-1}(I_n)$, por lo que $I_n$ es un valor regular de $G$.
>>	10. Por teorema, $O(n)=G^{-1}(I_n)$ es una subvariedad incrustada de $M(n,\mathbb R)$.
>>	11. Como $\dim M(n,\mathbb R)=n^2$ y $\dim\operatorname{Sym}(n,\mathbb R)=\frac{n(n+1)}2$, tenemos $$\dim O(n)=n^2-\frac{n(n+1)}2=\frac{n(n-1)}2.$$
>>	12. Por el mismo teorema, se tiene $$T_{I_n}O(n)\simeq (d\iota)_{I_{n}} T_{I_{n}}O(n)=\ker(dG_{I_n}).$$
>>	13. Para $X\in M(n,\mathbb R)$, $$dG_{I_n}(X)=XI_n^t+I_nX^t=X+X^t.$$
>>	14. Por tanto $$(d\iota)_{I_{n}} T_{I_{n}}O(n)=\ker(dG_{I_n})=\{X\in M(n,\mathbb R)\mid X+X^t=0\}=\mathfrak{so}(n,\mathbb R).$$
>>- (b)
>>	1. Consideramos $H:\mathbb R^n\to M(n,\mathbb R)$ dada por $H(p)=I_n-2pp^t$.
>>	2. Las entradas de $H$ son $H(p)_{ij}=\delta_{ij}-2p_ip_j$, que son funciones polinomiales, por lo que $H$ es suave.
>>	3. Como $F=H|_{S^{n-1}}$ y $S^{n-1}$ es subvariedad incrustada de $\mathbb{R}^{n}$, la función $F:S^{n-1}\to M(n,\mathbb R)$ es suave.
>>	4. Veamos que $F(S^{n-1})\subseteq \iota O(n)=O(n)$. Sea $p\in S^{n-1}$   $$F(p)F(p)^t=(I_n-2pp^t)(I_n-2pp^t)^{t}=(I_n-2pp^t)(I_n-2pp^t) =I_n-4pp^t+4pp^tpp^t.$$
>>	5. Como $p\in S^{n-1}$, tenemos $p^tp=1$, y por tanto $$pp^tpp^t=p(p^tp)p^t=pp^t.$$
>>	6. Luego $$F(p)F(p)^t=I_n-4pp^t+4pp^t=I_n.$$
>>	7. Por tanto $F(p)\in O(n)$ para todo $p\in S^{n-1}$, es decir, $F(S^{n-1})\subset O(n)$.
>>	8. Por el lema de factorización existe una única función suave $\widetilde F:S^{n-1}\to O(n)$ tal que $F=\iota\circ\widetilde F$.
>>	9. Explícitamente, $$\widetilde F(p)=I_n-2pp^t.$$
>>- (c)
>>	1. Sea $p\in S^{n-1}$ y sea $v\in T_pS^{n-1}$.
>>	2. Tomamos una curva suave $\gamma:(-\varepsilon,\varepsilon)\to S^{n-1}$ tal que $\gamma(0)=p$ y $\gamma'(0)=v$
>>	3. Entonces $$d\widetilde F_p(v)=\left.\frac{d}{dt}\right|_{t=0}\widetilde F(\gamma(t))=\left.\frac{d}{dt}\right|_{t=0}\left(I_n-2\gamma(t)\gamma(t)^t\right)=-2(vp^t+pv^t).$$
>>	4. Para ver que $\widetilde F$ es una inmersión, basta probar que $d\widetilde F_p$ es inyectiva para todo $p\in S^{n-1}$.
>>	5. Supongamos que $d\widetilde F_p(v)=0$.
>>	6. Entonces $$vp^t+pv^t=0.$$
>>	7. Aplicando esta matriz al vector $p$, obtenemos $$0=(vp^t+pv^t)p=v(p^tp)+p(v^tp).$$
>>	8. Como $p\in S^{n-1}$, tenemos $p^tp=1$.
>>	9. Como $v\in T_pS^{n-1}$, tenemos $p^tv=0$. Por que $v$ e ortogonal a $p$  
>>	10. Por tanto $$0=v(p^tp)+p(v^tp)=v.$$
>>	11. Luego $\ker(d\widetilde F_p)=\{0\}$, por lo que $d\widetilde F_p$ es inyectiva para todo $p\in S^{n-1}$.
>>	12. Concluimos que $\widetilde F:S^{n-1}\to O(n)$ es una inmersión.

>[!Exercise]
>La botella de Klein se define como $K=\mathbb R^2/\sim$, donde $(x,y)\sim(x',y')$ si y solo si $(x',y')=(x+2k\pi,(-1)^ky+2h\pi)$ para $k,h\in\mathbb Z$. Sea $p:\mathbb R^2\to K$ la proyección canónica, que es un difeomorfismo local.
>- (a) Considerar los campos vectoriales $X=\frac{\partial}{\partial y}$ e $Y=\frac{\partial}{\partial x}+\sin(y)\frac{\partial}{\partial y}$ y, para $(k,h)\in\mathbb Z\times\mathbb Z$, sea $\theta_{(k,h)}:\mathbb R^2\to\mathbb R^2$ dada por $\theta_{(k,h)}(x,y)=(x+2k\pi,(-1)^ky+2h\pi)$. Mostrar que $Y$ está $\theta_{(k,h)}$-relacionado consigo mismo para todo $(k,h)$ y concluir que existe un único campo vectorial suave $\widetilde Y$ sobre $K$ que está $p$-relacionado con $Y$. Verificar que $X$ no induce un campo suave sobre $K$.
>- (b) Mostrar que $\gamma:\mathbb{R}\rightarrow\mathbb{R}^{2}$ definida por $\gamma(t)=(t+x_{0},k\pi)$ con $k\in \mathbb{Z}$ y $x_{0}\in \mathbb{R}$ es una curva integral del campo $Y$
>- (c) Encontrar al menos dos curvas integrales periodicas del campo $\widetilde{Y}$ en $K$ cuyas trayectorias sean distintas e indicar sus respectivos periodos fundamentales 
>>[!Proof]-
>>- (a)
>>	- $\theta$-relacionado 
>>		1. Para $q=(x,y)\in\mathbb R^2$ se tiene $Y_q=(1,\sin y)$ y $$d\theta_{(k,h),q}=\begin{pmatrix}1&0\\0&(-1)^k\end{pmatrix},$$ luego $$d\theta_{(k,h),q}(Y_q)=\left(1,(-1)^k\sin y\right).$$
>>		2. Por otro lado, $$Y_{\theta_{(k,h)}(q)}=\left(1,\sin\left((-1)^ky+2h\pi\right)\right)=\left(1,(-1)^k\sin y\right),$$ por lo tanto $$d\theta_{(k,h),q}(Y_q)=Y_{\theta_{(k,h)}(q)},$$ y así $Y$ está $\theta_{(k,h)}$-relacionado consigo mismo.
>>	- Defincion de campo
>>		1. Definimos $$\widetilde Y_{p(q)}:=dp_q(Y_q).$$ Para ver que esta definición no depende del representante, sean $q,r\in\mathbb R^2$ tales que $q\sim r$; entonces existe $(k,h)$ tal que $r=\theta_{(k,h)}(q)$.
>>		2. Como $p\circ\theta_{(k,h)}=p$, por la regla de la cadena $$dp_{\theta_{(k,h)}(q)}\circ d\theta_{(k,h),q}=dp_q.$$ Aplicando a $Y_q$ y usando el paso 2, $$dp_q(Y_q)=dp_{\theta_{(k,h)}(q)}\left(d\theta_{(k,h),q}(Y_q)\right)=dp_{\theta_{(k,h)}(q)}\left(Y_{\theta_{(k,h)}(q)}\right)=dp_r(Y_r).$$ Por lo tanto $\widetilde Y$ está bien definido.
>>		3. Por construcción, para todo $q\in\mathbb R^2$, $$dp_q(Y_q)=\widetilde Y_{p(q)},$$ luego $Y$ y $\widetilde Y$ están $p$-relacionados.
>>	- Suavidad del campo
>>		1. Usamos que un campo vectorial $Z$ es suave si y solo si $Zf$ es suave para toda $f\in C^\infty$. Sea entonces $f\in C^\infty(\mathbb K)$.
>>		2. Fijemos $q\in\mathbb K$. Como $p:\mathbb R^2\to\mathbb K$ es un difeomorfismo local, existe un abierto $U\ni q$ y una inversa local suave $p^{-1}:U\to\mathbb R^2$
>>		3. Para $q\in U$, como $Y$ y $\widetilde Y$ están $p$-relacionados, tenemos $$\widetilde Y_q(f)=dp_{p^{-1}(q)}(Y_{p^{-1}(q)})(f)=Y_{p^{-1}(q)}(f\circ p),$$ y por lo tanto $$(\widetilde Yf)|_U=Y(f\circ p)\circ p^{-1}.$$
>>		4. Como $f\circ p$ es suave, $Y$ es suave y $p^{-1}$ es suave, se sigue que $Y(f\circ p)\circ p^{-1}$ es suave en $U$.
>>		5. Como $q\in\mathbb K$ era arbitrario, $\widetilde Yf$ es suave en $\mathbb K$ para toda $f\in C^\infty(\mathbb K)$. Luego $\widetilde Y$ es suave.
>>	- Unicidad 
>>		1. Para la unicidad, si $Z$ es otro campo sobre $K$ $p$-relacionado con $Y$, entonces para todo $q\in\mathbb R^2$, $$Z_{p(q)}=dp_q(Y_q)=\widetilde Y_{p(q)}.$$
>>	- $X$ no induce campo suave
>>		1. Para $X=\frac{\partial}{\partial y}$, supongamos por contradicción que existe un campo $\widetilde X$ sobre $K$ $p$-relacionado con $X$. Tomemos $\theta=\theta_{(1,0)}$, de modo que $\theta(x,y)=(x+2\pi,-y)$ y recordamos $p\circ\theta=p$.
>>		2. Como $\widetilde X$ está $p$-relacionado con $X$ y $p(q)=p(\theta(q))$, $$dp_q(X_q)=\widetilde X_{p(q)}=\widetilde X_{p(\theta(q))}=dp_{\theta(q)}(X_{\theta(q)}).$$
>>		3. Por otro lado, de $p\circ\theta=p$ se obtiene $$dp_{\theta(q)}\circ d\theta_q=dp_q.$$ Como $$d\theta_q=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$ y $X_q=(0,1)$, tenemos $$d\theta_q(X_q)=(0,-1)=-X_{\theta(q)},$$ y por lo tanto $$dp_q(X_q)=dp_{\theta(q)}\left(d\theta_q(X_q)\right)=-dp_{\theta(q)}(X_{\theta(q)}).$$
>>		4. Comparando los pasos 9 y 10, $$dp_{\theta(q)}(X_{\theta(q)})=-dp_{\theta(q)}(X_{\theta(q)}),$$ luego $dp_{\theta(q)}(X_{\theta(q)})=0$. Como $p$ es un difeomorfismo local, $dp_{\theta(q)}$ es un isomorfismo, por lo tanto $X_{\theta(q)}=0$, contradicción con $X=\frac{\partial}{\partial y}\neq0$. 
>>		5. Por lo tanto $X$ no induce ningún campo vectorial suave sobre $K$.
>>- (b)
>>	1. $\gamma'(t)=(1,0)$ y $Y_{\gamma(t)}=(1,\sin(k\pi))=(1,0)$, por lo tanto $\gamma$ es curva integral de $Y$ 
>>- (c)
>>	1. Notamos que si tomamos $\gamma$ una curva integral de $Y$ y definimos   $\widetilde{\gamma}(t)=p(\gamma(t))$ entonces $$\widetilde{\gamma }'(t)=dp_{\gamma(t)}\gamma'(t)=dp_{\gamma(t)}(Y_{\gamma(t)})=\widetilde{Y}_{p(\gamma(t))}=\widetilde{Y}_{\widetilde{\gamma}(t)}$$
>>	2. Con lo cual $\widetilde{\gamma}$ es una curva integral de $\widetilde{Y}$. Osea $p$ manda curvas integrales en curvas integrales de $Y$ en curvas integrales de $\widetilde{Y}$   
>>	3. Por (b), para $k\in\mathbb Z$ las curvas $$\gamma_k(t)=(t+x_0,k\pi)$$ son curvas integrales de $Y$. 
>>	4. Enotonces las curvas $$\widetilde\gamma_k(t)=p(\gamma_k(t))=p(t+x_0,k\pi)$$ son curvas integrales de $\widetilde Y$.
>>	5. Tomemos primero $k=0$ y $x_0=0$. Entonces $$\widetilde\gamma_0(t)=p(t,0).$$
>>	6. La curva es periódica con período $T>0$ si $$\widetilde\gamma_0(t+T)=\widetilde\gamma_0(t),$$ es decir, $$p(t+T,0)=p(t,0),$$ lo cual equivale a $$(t+T,0)\sim(t,0).$$
>>	7. Por definición de la relación de equivalencia, esto ocurre si existen $m,h\in\mathbb Z$ tales que $$(t+T,0)=(t+2m\pi,(-1)^m0+2h\pi).$$
>>	8. Por lo tanto, $$T=2m\pi,\qquad 0=2h\pi.$$
>>	9. Así, $h=0$ y los períodos positivos son $$T=2m\pi,\qquad m\in\mathbb Z_{>0}.$$
>>	10. El menor de ellos corresponde a $m=1$, luego el período fundamental es $$T_0=2\pi.$$
>>	11. Tomemos ahora $k=1$ y $x_0=0$. Entonces $$\widetilde\gamma_1(t)=p(t,\pi).$$
>>	12. Esta curva es periódica si $$p(t+T,\pi)=p(t,\pi),$$ es decir, $$(t+T,\pi)\sim(t,\pi).$$
>>	13. Por definición de la relación de equivalencia, deben existir $m,h\in\mathbb Z$ tales que $$(t+T,\pi)=(t+2m\pi,(-1)^m\pi+2h\pi).$$
>>	14. Luego $$T=2m\pi,\qquad \pi=(-1)^m\pi+2h\pi.$$
>>	15. Para $m=1$ la segunda igualdad queda $$\pi=-\pi+2h\pi,$$ que se satisface tomando $h=1$. Por lo tanto $T=2\pi$ es un período, y como todo período positivo debe ser de la forma $2m\pi$, el período fundamental es $$T_1=2\pi.$$
>>	16. Finalmente, las trayectorias de $\widetilde\gamma_0$ y $\widetilde\gamma_1$ son distintas. En efecto, si se intersectaran existirían $t,s\in\mathbb R$ tales que $$p(t,0)=p(s,\pi),$$ es decir, $$(t,0)\sim(s,\pi).$$ Entonces existirían $m,h\in\mathbb Z$ tales que $$(s,\pi)=(t+2m\pi,(-1)^m0+2h\pi),$$ y por la segunda coordenada tendríamos $$\pi=2h\pi,$$ lo cual es imposible para $h\in\mathbb Z$.
>>	17. Por lo tanto, $$\widetilde\gamma_0(t)=p(t,0),\qquad \widetilde\gamma_1(t)=p(t,\pi)$$ son dos curvas integrales periódicas de $\widetilde Y$ con trayectorias distintas, y ambas tienen período fundamental $$2\pi.$$

>[!Exercise]
>Sea $U=\mathbb R^3\setminus\{(0,0,z):z\in\mathbb R\}$ y sea $\mathcal D$ la distribución de rango $2$ sobre $U$ generada por los campos $$X=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y},\qquad Y=x\frac{\partial}{\partial x}+y\frac{\partial}{\partial y}-z\frac{\partial}{\partial z}.$$ 
>- (a) Probar que $\mathcal D$ es involutiva.
>- (b) Hallar la subvariedad integral conexa maximal de $\mathcal D$ que pasa por $(1,0,1)$.
>- (c) Determinar si dicha subvariedad integral es orientable.
>>[!Proof]-
>>- (a)
>>	1. Escribimos las componentes de los campos como $X=(-y,x,0)$ e $Y=(x,y,-z)$.
>>	2. Usamos que las componentes del corchete vienen dadas por $$[X,Y]^k=X(Y^k)-Y(X^k).$$
>>	3. Para la primera componente, $$[X,Y]^1=X(x)-Y(-y)=-y-(-y)=0.$$
>>	4. Para la segunda componente, $$[X,Y]^2=X(y)-Y(x)=x-x=0.$$
>>	5. Para la tercera componente, $$[X,Y]^3=X(-z)-Y(0)=0.$$
>>	6. Por lo tanto, $$[X,Y]=0.$$
>>	7. Como $\mathcal D=\operatorname{span}\{X,Y\}$ y $[X,Y]=0\in\mathcal D$, concluimos que $$\boxed{\mathcal D\text{ es involutiva}.}$$
>>- (b)
>>	1. Sea $p=(p_{1},p_{2},p_{3})\in U$ y sea $\gamma_p(t)=(x(t),y(t),z(t))$ la curva integral de $X$ que satisface $\gamma_p(0)=p$. Como $$X=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y},$$ la ecuación de curva integral es $$\begin{cases}x'(t)=-y(t),\\y'(t)=x(t),\\z'(t)=0.\end{cases}$$
>>	2. De $z'(t)=0$ obtenemos $z(t)=C$.
>>	3. Derivando la primera ecuación, $$x''(t)=-y'(t).$$ Como $y'(t)=x(t)$, resulta $$x''(t)=-x(t),$$ o sea $$x''(t)+x(t)=0.$$
>>	4. La solución general es $$x(t)=A\cos t+B\sin t.$$
>>	5. Como $x'(t)=-y(t)$, tenemos $$y(t)=-x'(t)=A\sin t-B\cos t.$$
>>	6. Imponiendo la condición inicial $\gamma_p(0)=(p_{1},p_{2},p_{3})$, obtenemos $$p_{1}=x(0)=A,\qquad p_{2}=y(0)=-B,\qquad p_{3}=z(0)=C$$
>>	7. En consecuencia, la curva integral que pasa por $p$ es $$\Phi^{X} _{t}(p)=\gamma_p(t)=\left(p_{1}\cos t-p_{2}\sin t,\;p_{1}\sin t+p_{2}\cos t,\;p_{3}\right).$$
>>	8. En particular, para $p_0=(1,0,1)$, $$\Phi^{X}_{t}(p_{0})= \gamma_{p_0}(t)=(\cos t,\sin t,1).$$
>>	9. El flujo de $Y$ se obtiene resolviendo $$\dot x=x,\qquad \dot y=y,\qquad \dot z=-z,$$ y es (usando las mismas ideas) $$\Phi_s^Y(x,y,z)=(e^sx,e^sy,e^{-s}z).$$
>>	10. Componiendo ambos flujos y evaluando en $p_0$, obtenemos $$F(t,s)=\Phi_s^Y(\Phi_t^X(p_0))=(e^s\cos t,e^s\sin t,e^{-s}).$$
>>	11. Si $(x,y,z)=F(t,s)$, entonces $$x^2+y^2=e^{2s},\qquad z=e^{-s}>0,$$ y por lo tanto $$z^2(x^2+y^2)=1.$$
>>	12. Así, la imagen de $F$ es $$S=\{(x,y,z)\in U:z>0,\ z^2(x^2+y^2)=1\}\subseteq U$$ osea $F(\mathbb{R}^{2})=S$ 
>>	13. Como $\mathbb R^2$ es conexo y $F$ es continua, $S=F(\mathbb R^2)$ es conexa.
>>	14. Ahora lo que tenemos que probar es que $(S,i)$ es subvariedad integral de $U$ para $D$ osea $di_{p}(T_{p}S)=D_{i(p)}=D_{p}$ 
>>	15. Sea $\widetilde F:\mathbb R^2\to S$ la parametrización dada por $$\widetilde F(t,s)=\left(e^s\cos t,e^s\sin t,e^{-s}\right),$$ y sea $i:S\hookrightarrow U$ la inclusión. Entonces la aplicación $F:\mathbb R^2\to U$ que veníamos usando satisface $$F=i\circ\widetilde F.$$
>>	16. Si $p=\widetilde F(t,s)$, como $\widetilde F$ parametriza $S$, tenemos $$T_pS=d\widetilde F_{(t,s)}\left(T_{(t,s)}\mathbb R^2\right)=\operatorname{span}\left\{d\widetilde F_{(t,s)}\left(\frac{\partial}{\partial t}\right),d\widetilde F_{(t,s)}\left(\frac{\partial}{\partial s}\right)\right\}.$$
>>	17. Aplicando $di_p$ y usando la linealidad, $$di_p(T_pS)=\operatorname{span}\left\{di_p\left(d\widetilde F_{(t,s)}\left(\frac{\partial}{\partial t}\right)\right),di_p\left(d\widetilde F_{(t,s)}\left(\frac{\partial}{\partial s}\right)\right)\right\}.$$
>>	18. Como $F=i\circ\widetilde F$, por la regla de la cadena $$dF_{(t,s)}=di_p\circ d\widetilde F_{(t,s)}.$$
>>	19. Por lo tanto, $$di_p(T_pS)=\operatorname{span}\left\{dF_{(t,s)}\left(\frac{\partial}{\partial t}\right),dF_{(t,s)}\left(\frac{\partial}{\partial s}\right)\right\}=\operatorname{span}\left\{\frac{\partial F}{\partial t}(t,s),\frac{\partial F}{\partial s}(t,s)\right\}.$$
>>	20. Como $$\frac{\partial F}{\partial t}(t,s)=X_p,\qquad \frac{\partial F}{\partial s}(t,s)=Y_p,$$ obtenemos $$di_p(T_pS)=\operatorname{span}\{X_p,Y_p\}=\mathcal D_p.$$
>>	21. Luego $(S,i)$ es una subvariedad integral de $\mathcal D$.
>>	22. Para probar que es maximal usamos el resultado que afirma que toda subvariedad integral conexa cuya imagen es cerrada en la variedad ambiente es maximal.
>>	23. Definimos $$H:U\to\mathbb R,\qquad H(x,y,z)=z^2(x^2+y^2).$$ Entonces $$H^{-1}(1)=\{(x,y,z)\in U:z^2(x^2+y^2)=1\}.$$
>>	24. Como $H$ es continua y $\{1\}$ es cerrado en $\mathbb R$, $H^{-1}(1)$ es cerrado en $U$.
>>	25. Si $(x,y,z)\in H^{-1}(1)$, necesariamente $z\neq0$, pues $z=0$ implicaría $H(x,y,z)=0$.
>>	26. Por lo tanto, $$H^{-1}(1)=S_+\sqcup S_-,$$ donde $$S_+=H^{-1}(1)\cap\{z>0\}=S,\qquad S_-=H^{-1}(1)\cap\{z<0\}.$$
>>	27. Como $\{z<0\}$ es abierto en $U$, $S_-$ es abierto en $H^{-1}(1)$. Por consiguiente, su complemento relativo $$S_+=H^{-1}(1)\setminus S_-$$ es cerrado en $H^{-1}(1)$.
>>	28. Como $S=S_+$ es cerrado en $H^{-1}(1)$ y $H^{-1}(1)$ es cerrado en $U$, se sigue que $S$ es cerrado en $U$.
>>	29. Entonces tenemos que $(S,i)$ es una subvariedad integral conexa y $i(S)=S$ es cerrado en $U$ por 22. Luego por teorema, $$\boxed{S=\{(x,y,z)\in U:z>0,\ z^2(x^2+y^2)=1\}}$$ es maximal
>>- (c)
>>	1. Usamos nuevamente la función $$H(x,y,z)=z^2(x^2+y^2),$$ de modo que $$S=H^{-1}(1)\cap\{z>0\}.$$
>>	2. Su gradiente es $$\nabla H(x,y,z)=\bigl(2xz^2,2yz^2,2z(x^2+y^2)\bigr).$$
>>	3. Si $p=(x,y,z)\in S$, entonces $z>0$ y $x^2+y^2>0$, por lo que la tercera componente de $\nabla H(p)$ es distinta de cero. Así, $$\nabla H(p)\neq0$$ para todo $p\in S$.
>>	4. Como $S$ es una superficie de nivel regular de $H$, para todo $p\in S$ tenemos $$T_{p}S\simeq d i_p(T_pS)=\ker dH_p.$$
>>	5. En $\mathbb R^3$, para todo $v\in T_pU\simeq\mathbb R^3$, $$dH_p(v)=\langle\nabla H(p),v\rangle.$$
>>	6. Por lo tanto, $$d i_p(T_pS)=\ker dH_p=\{v:\langle\nabla H(p),v\rangle=0\}=\nabla H(p)^\perp.$$
>>	7. Así, $\nabla H|_S$ es un campo normal suave y nunca nulo sobre $S$.
>>	8. Como una hipersuperficie de $\mathbb R^3$ es orientable si y solo si admite un campo normal suave y nunca nulo, concluimos que $$\boxed{S\text{ es orientable}.}$$

>[!Exercise]
>Sea $M$ una variedad suave y sea $X\in\mathfrak X(M)$. Probar que si $\beta(X)=0$ para toda $\beta\in\Omega^1(M)$, entonces $X=0$.
>>[!Proof]-
>>18. Fijamos $p\in M$ y tomamos una carta suave $(U,(x^1,\ldots,x^n))$ con $p\in U$.
>>19. En la base coordenada de $T_pM$ podemos escribir $$X_p=\sum_{i=1}^nX^i(p)\left.\frac{\partial}{\partial x^i}\right|_p$$
>>20. Fijamos $j\in\{1,\ldots,n\}$ y tomamos una función suave $\rho\in C^\infty(M)$ tal que $\operatorname{supp}\rho\subset U$ y $\rho=1$ en algún entorno de $p$. En particular $\rho(p)=1$ 
>>21. Como $dx^j\in\Omega^1(U)$, definimos $\beta\in\Omega^1(M)$ por $\beta_q=\rho(q)\,dx^j|_q$ si $q\in U$ y $\beta_q=0$ si $q\notin U$.
>>22. Como $\rho(p)=1$, tenemos $\beta_p=dx^j|_p$.
>>23. Por hipótesis, $\beta(X)=0$, luego $0=\beta(X)(p)=\beta_p(X_p)=dx^j|_p(X_p)$.
>>24. Entonces $$0=dx^j|_p\left(\sum_{i=1}^nX^i(p)\left.\frac{\partial}{\partial x^i}\right|_p\right)=\sum_{i=1}^nX^i(p)\,dx^j|_p\left(\left.\frac{\partial}{\partial x^i}\right|_p\right)$$
>>25. Como $\left(dx^1|_p,\ldots,dx^n|_p\right)$ es la base dual de $\left(\left.\frac{\partial}{\partial x^1}\right|_p,\ldots,\left.\frac{\partial}{\partial x^n}\right|_p\right)$, se tiene $dx^j|_p\left(\left.\frac{\partial}{\partial x^i}\right|_p\right)=\delta_i^j$.
>>26. Por tanto $$0=\sum_{i=1}^nX^i(p)\delta_i^j=X^j(p)$$
>>27. Como esto vale para todo $j=1,\ldots,n$, tenemos $X^1(p)=\cdots=X^n(p)=0$, y por consiguiente $X_p=0$.
>>28. Como $p\in M$ era arbitrario, concluimos que $X=0$.

