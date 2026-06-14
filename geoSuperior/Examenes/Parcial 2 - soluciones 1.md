>[!Exercise]
>Sea $$H=\{(x,y,z)\in\mathbb{R}^3\mid x^2+y^2-z^2=1\}$$y $X,Y$ los campos en $\mathbb{R}^3$ definidos por $$X=zx\frac{\partial}{\partial x}+zy\frac{\partial}{\partial y}+(1+z^2)\frac{\partial}{\partial z}$$$$Y=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y}.$$(a) (8 pts) Probar que $H$ es una subvariedad incrustada de $\mathbb{R}^3$.
>(b) (8 pts) Probar que $Y\in\mathfrak X(\mathbb{R}^3)$ induce por restricción un campo suave $Z$ en $H$ y determinar la curva integral de $Z$ por $p=(1,0,0)$.
>(c) (4 pts) Determinar el abierto maximal $U$ de $\mathbb{R}^3$ donde $X,Y$ definen una distribución $\mathcal D$ de dimensión $2$.
>(d) (8 pts) Probar que $\mathcal D$ es integrable en $U$.
>(e) (6 pts) Verificar que $H$ es una subvariedad integral de $\mathcal D$.
>(f) (4 pts) ¿Existe un sistema coordenado $(x_1,x_2,x_3)$ en algún entorno de $p=(1,0,0)$ tal que $$\frac{\partial}{\partial x_1}=X,\qquad\frac{\partial}{\partial x_2}=Y$$en dicho entorno?
>>[!Proof]-
>>- **(a)** 
>>	1. Sea $F:\mathbb R^3\to\mathbb R$ dada por $F(x,y,z)=x^2+y^2-z^2$. Entonces $H=F^{-1}(1)$.
>>	2. Calculamos $dF_{(x,y,z)}=(2x,2y,-2z)$. Si $dF_{(x,y,z)}=0$, entonces $x=y=z=0$, pero $(0,0,0)\notin H$ porque $F(0,0,0)=0\neq 1$.
>>	3. Luego $dF_q\neq 0$ para todo $q\in H$, es decir, $1$ es valor regular de $F$. Por el teorema del valor regular, $$H=F^{-1}(1)$$ es una subvariedad incrustada de $\mathbb R^3$ de dimensión $3-1=2$.
>>- **(b)** 
>>	1. queremos ver que $Y$ es tangente a $H$. Como $Y=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y}$, se tiene $Y(F)=-y(2x)+x(2y)=0$.
>>	2. Entonces, para todo $q\in H$, $dF_q(Y_q)=Y(F)(q)=0$. Como $T_qH=\ker dF_q$, obtenemos $Y_q\in T_qH$.
>>	3. Por lo tanto, $Y$ induce un campo vectorial sobre $H$, dado por $Y_q=(-y,x,0)$ para $q=(x,y,z)\in H$.
>>	4. Si $\gamma(t)=(x(t),y(t),z(t))$ es una curva integral de $Y$ en $H$, entonces $\gamma'(t)=Y_{\gamma(t)}$ equivale al sistema $$x'(t)=-y(t),\qquad y'(t)=x(t),\qquad z'(t)=0.$$
>>	5. Con condición inicial $\gamma(0)=(1,0,0)$, tenemos $x(0)=1$, $y(0)=0$ y $z(0)=0$. La solución es $$\gamma(t)=(\cos t,\sin t,0).$$
>>- **(c)**
>>	1. queremos encontrar dónde $X$ e $Y$ generan una distribución de rango $2$. Tenemos $X_{(x,y,z)}=(xz,yz,1+z^2)$ y $Y_{(x,y,z)}=(-y,x,0)$.
>>	2. Si $p=(0,0,z)$ está en el eje $z$, entonces $Y_p=0$, y por lo tanto $X_p,Y_p$ son linealmente dependientes.
>>	3. Si $(x,y)\neq(0,0)$, entonces $Y_p\neq 0$. Si $aX_p+bY_p=0$, mirando la tercera coordenada obtenemos $a(1+z^2)=0$, luego $a=0$. Entonces $bY_p=0$, y como $Y_p\neq 0$, se sigue que $b=0$.
>>	4. Por lo tanto, $X_p,Y_p$ son linealmente independientes exactamente fuera del eje $z$. El abierto maximal es $$U=\mathbb R^3\setminus\{(0,0,z):z\in\mathbb R\}.$$
>>	5. En $U$ definimos la distribución de rango $2$ por $$\mathcal D_p=\operatorname{span}(X_p,Y_p).$$
>>- **(d)** 
>>	1. Debemos decidir si $\mathcal D$ es integrable. Por Frobenius, basta verificar si $\mathcal D$ es involutiva, es decir, si $[X,Y]_p\in\mathcal D_p$ para todo $p\in U$.
>>	2. Usamos la fórmula $[X,Y]^k=X(Y^k)-Y(X^k)$. Como $X=(xz,yz,1+z^2)$ y $Y=(-y,x,0)$, la primera componente es $[X,Y]^1=X(-y)-Y(xz)$.
>>	3. Tenemos $X(-y)=-yz$ y $Y(xz)=Y(x)z+xY(z)=(-y)z+x(0)=-yz$, luego $[X,Y]^1=0$.
>>	4. La segunda componente es $[X,Y]^2=X(x)-Y(yz)$. Tenemos $X(x)=xz$ y $Y(yz)=Y(y)z+yY(z)=xz+y(0)=xz$, luego $[X,Y]^2=0$.
>>	5. La tercera componente es $[X,Y]^3=X(0)-Y(1+z^2)=0-2zY(z)=0$.
>>	6. Por lo tanto, $$[X,Y]=0.$$
>>	7. Entonces $[X,Y]_p\in\mathcal D_p$ para todo $p\in U$, porque $0\in\mathcal D_p$. Así, $\mathcal D$ es involutiva, y por Frobenius es integrable.
>>- **(e)** 
>>	1. Sea $i:H\hookrightarrow U$ la inclusión. Debemos probar que, para todo $q\in H$, $$(di)_q(T_qH)=\mathcal D_{i(q)}=\mathcal D_q.$$
>>	2. Ya sabemos que $Y_q\in T_qH$. Ahora verificamos que $X_q\in T_qH$. Como $X=xz\frac{\partial}{\partial x}+yz\frac{\partial}{\partial y}+(1+z^2)\frac{\partial}{\partial z}$, se tiene $X(F)=xz(2x)+yz(2y)+(1+z^2)(-2z)$.
>>	3. Entonces $$X(F)=2x^2z+2y^2z-2z(1+z^2)=2z(x^2+y^2-z^2-1).$$
>>	4. Si $q\in H$, entonces $x^2+y^2-z^2=1$, y por lo tanto $X(F)(q)=0$. Luego $dF_q(X_q)=0$, así que $X_q\in T_qH$.
>>	5. Entonces $\mathcal D_q=\operatorname{span}(X_q,Y_q)\subseteq T_qH$.
>>	6. Además, $\dim\mathcal D_q=2$ porque $q\in H\subset U$, y $\dim T_qH=2$ porque $H$ es una subvariedad de dimensión $2$.
>>	7. Por lo tanto, la inclusión entre espacios vectoriales de la misma dimensión es igualdad: $$\mathcal D_q=T_qH.$$
>>	8. Como $i$ es la inclusión, $(di)_q(T_qH)$ se identifica con $T_qH\subset T_q\mathbb R^3$. Luego $$(di)_q(T_qH)=\mathcal D_q=\mathcal D_{i(q)}.$$
>>	9. Por lo tanto, $H$ es una subvariedad integral de $\mathcal D$.
>>- **(f)**
>>	1. Queremos decidir si existe un sistema coordenado $(x_1,x_2,x_3)$ alrededor de $p=(1,0,0)$ tal que $$\frac{\partial}{\partial x_1}=X,\qquad \frac{\partial}{\partial x_2}=Y.$$
>>	2. Evaluamos los campos en $p$: $X_p=(xz,yz,1+z^2)\big|_{(1,0,0)}=(0,0,1)$ y $Y_p=(-y,x,0)\big|_{(1,0,0)}=(0,1,0)$.
>>	3. Luego $X_p$ e $Y_p$ son linealmente independientes.
>>	4. Además, por el cálculo anterior, $[X,Y]=0$.
>>	5. Por el teorema de rectificación simultánea para campos conmutantes, como $X_p,Y_p$ son linealmente independientes y $[X,Y]=0$, existe una carta suave $(V,\varphi=(x_1,x_2,x_3))$ alrededor de $p$ tal que $$X|_V=\frac{\partial}{\partial x_1},\qquad Y|_V=\frac{\partial}{\partial x_2}.$$
>>	6. Por lo tanto, sí existe tal sistema coordenado alrededor de $p$.
>

>[!Example]
>Sea $$F:M\to N$$una función diferenciable entre variedades diferenciables, y sean $$X\in\mathfrak X(M),\qquad Y\in\mathfrak X(N).$$
>(a) (9 pts) Probar que $X$ e $Y$ están $F$-relacionados si y sólo si $F$ transforma curvas integrales de $X$ en curvas integrales de $Y$.
>(b) (9 pts) Suponer que $X$ e $Y$ están $F$-relacionados y que $F$ es sobreyectiva. Probar que si $X$ es completo entonces $Y$ es completo.
>>[!Proof]
>>1.

>[!Exercise] Lema de Cartan
>Let $V$ be a finite-dimensional vector space, and let $\alpha_1,\ldots,\alpha_r,\beta_1,\ldots,\beta_r\in V^*$, with $\alpha_1,\ldots,\alpha_r$ linearly independent. Suppose that $$\sum_{i=1}^r \alpha_i\wedge\beta_i=0.$$ Prove that there exist constants $c_{ij}$, with $1\le i,j\le r$, such that $c_{ij}=c_{ji}$ and $$\beta_i=\sum_{j=1}^r c_{ij}\alpha_j.$$
>>[!Proof]-
>>1. Extend $\alpha_1,\ldots,\alpha_r$ to a basis $\alpha_1,\ldots,\alpha_n$ of $V^*$.
>>2. Let $e_1,\ldots,e_n$ be the dual basis of $V$, so that $\alpha_i(e_j)=\delta_{ij}$.
>>3. Fix $k\in\{1,\ldots,r\}$ and $j>r$. Evaluating the identity $$\sum_{i=1}^r\alpha_i\wedge\beta_i=0$$ on $(e_k,e_j)$ gives $$0=\sum_{i=1}^r(\alpha_i\wedge\beta_i)(e_k,e_j).$$
>>4. Since $(\alpha_i\wedge\beta_i)(e_k,e_j)=\alpha_i(e_k)\beta_i(e_j)-\alpha_i(e_j)\beta_i(e_k)$, we get $$0=\sum_{i=1}^r(\delta_{ik}\beta_i(e_j)-\delta_{ij}\beta_i(e_k)).$$
>>5. Because $j>r$, the term $\delta_{ij}$ is always $0$ for $1\le i\le r$. Hence only the term $i=k$ survives, and therefore $$\beta_k(e_j)=0.$$
>>6. Since this holds for every $k\le r$ and every $j>r$, if we write $$\beta_k=\sum_{\ell=1}^n a_{k\ell}\alpha_\ell,$$ then evaluating on $e_j$ gives $a_{kj}=\beta_k(e_j)=0$ for every $j>r$.
>>7. Thus each $\beta_k$ lies in the span of $\alpha_1,\ldots,\alpha_r$. Therefore there exist constants $c_{kj}$ such that $$\beta_k=\sum_{j=1}^r c_{kj}\alpha_j.$$
>>8. It remains to prove that $c_{ij}=c_{ji}$. Take $1\le i,j\le r$ and evaluate the same identity on $(e_i,e_j)$. Then $$0=\sum_{\ell=1}^r(\alpha_\ell\wedge\beta_\ell)(e_i,e_j).$$
>>9. Expanding, $$0=\sum_{\ell=1}^r(\alpha_\ell(e_i)\beta_\ell(e_j)-\alpha_\ell(e_j)\beta_\ell(e_i))=\sum_{\ell=1}^r(\delta_{\ell i}\beta_\ell(e_j)-\delta_{\ell j}\beta_\ell(e_i)).$$
>>10. Hence only the terms $\ell=i$ and $\ell=j$ survive, so $$0=\beta_i(e_j)-\beta_j(e_i).$$
>>11. Since $\beta_i=\sum_{m=1}^r c_{im}\alpha_m$, we have $\beta_i(e_j)=c_{ij}$. Similarly, $\beta_j(e_i)=c_{ji}$.
>>12. Therefore $$c_{ij}-c_{ji}=0,$$ and hence $c_{ij}=c_{ji}$.
>>13. Thus, for every $i=1,\ldots,r$, $$\beta_i=\sum_{j=1}^r c_{ij}\alpha_j,$$ with $c_{ij}=c_{ji}$.

>[!Example]
>(10 pts) Probar que la $2$-forma $\omega$ en $\mathbb R^3$ definida por
>$$
>\omega=(z-2x\sin(x^2))\,dx\wedge dy+y\,dx\wedge dz
>$$
>es cerrada.
>

>[!Example]
>Sean $X,Y\in\mathfrak X(M)$ dos campos vectoriales suaves en una variedad $M$. Suponer que en un punto $p\in M$ los vectores $X_p,Y_p$ son linealmente independientes y que
>$$
>[X,Y]=0.
>$$
>
>Demostrar que existe una carta suave
>$$
>(U,\varphi=(x_1,\ldots,x_n))
>$$
>alrededor de $p$ tal que
>$$
>X|_U=\frac{\partial}{\partial x_1},
>\qquad
>Y|_U=\frac{\partial}{\partial x_2}.
>$$