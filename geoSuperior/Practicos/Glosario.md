## Practico 4

>[!Lemma] Unicidad de curvas integrales con tiempo arbitrario
>Sea $X\in\mathfrak X(M)$. Sean $\gamma:I\to M$ y $\sigma:J\to M$ curvas integrales de $X$, donde $I,J\subseteq\mathbb R$ son intervalos abiertos. Si existe $t_0\in I\cap J$ tal que $\gamma(t_0)=\sigma(t_0)$, entonces $\gamma(t)=\sigma(t)$ para todo $t\in I\cap J$.
>>[!Proof]-
>>1. Sea $p=\gamma(t_0)=\sigma(t_0)$.
>>2. Definimos los intervalos trasladados $I_0=I-t_0=\{s\in\mathbb R:t_0+s\in I\}$ y $J_0=J-t_0=\{s\in\mathbb R:t_0+s\in J\}$.
>>3. Entonces $0\in I_0\cap J_0$.
>>4. Definimos $\widetilde{\gamma}:I_0\to M$ por $\widetilde{\gamma}(s)=\gamma(t_0+s)$ y $\tilde{\sigma}:J_0\to M$ por $\tilde{\sigma}(s)=\sigma(t_0+s)$.
>>5. Tenemos $\widetilde{\gamma}(0)=\gamma(t_0)=p$ y $\tilde{\sigma}(0)=\sigma(t_0)=p$.
>>6. Además, por regla de la cadena, $$\widetilde{\gamma}'(s)=\gamma'(t_0+s)=X_{\gamma(t_0+s)}=X_{\tilde{\gamma}(s)}$$
>>7. De la misma forma, $$\tilde{\sigma}'(s)=\sigma'(t_0+s)=X_{\sigma(t_0+s)}=X_{\tilde{\sigma}(s)}$$
>>8. Entonces $\widetilde{\gamma}$ y $\tilde{\sigma}$ son curvas integrales de $X$ que empiezan en $p$ en tiempo $0$.
>>9. Por [[GS - Teo16#^3ff110]], existe una unica curva integral maximal $\gamma_p:(a(p),b(p))\to M$ que empieza en $p$.
>>10. Como $\widetilde{\gamma}$ cumple la condición inicial $\widetilde{\gamma}(0)=p$ y es curva integral de $X$, por maximalidad se tiene $I_0\subseteq(a(p),b(p))$ y $\widetilde{\gamma}(s)=\gamma_p(s)$ para todo $s\in I_0$.
>>11. Como $\widetilde{\gamma}$ cumple la condición inicial $\widetilde{\sigma}(0)=p$ y es curva integral de $X$, por maximalidad se tiene $J_0\subseteq(a(p),b(p))$ y $\widetilde{\sigma}(s)=\gamma_p(s)$ para todo $s\in J_0$.
>>12. Por lo tanto, para todo $s\in I_0\cap J_0$, se tiene $$\widetilde{\gamma}(s)=\widetilde{\sigma}(s).$$
>>13. Si $t\in I\cap J$, entonces $s=t-t_0\in I_0\cap J_0$. Luego
>>$$\gamma(t)=\gamma(t_0+s)=\widetilde{\gamma}(s)=\widetilde{\sigma}(s)=\sigma(t_0+s)=\sigma(t).$$
>>14. Por lo tanto,
>>$$\gamma(t)=\sigma(t)\qquad\forall t\in I\cap J.$$

^c00595z

>[!Lemma] Unicidad de curvas integrales salvo traslación temporal no se si se usa
>Sea $X\in\mathfrak X(M)$. Sean $\gamma:I\to M$ y $\sigma:J\to M$ curvas integrales de $X$. Si existen $t_0\in I$ y $s_0\in J$ tales que $\gamma(t_0)=\sigma(s_0)$, entonces $\gamma(t)=\sigma(t-t_0+s_0)$ para todo $t\in I$ tal que $t-t_0+s_0\in J$.
>>[!Proof]-
>>1. Sea $p=\gamma(t_0)=\sigma(s_0)$.
>>2. Definimos $\widetilde\sigma:I'\to M$ por $\widetilde\sigma(t)=\sigma(t-t_0+s_0)$, donde $I'=\{t\in I:t-t_0+s_0\in J\}$.
>>3. Como $\sigma$ es curva integral de $X$, por regla de la cadena se tiene $\widetilde\sigma'(t)=\sigma'(t-t_0+s_0)=X_{\sigma(t-t_0+s_0)}=X_{\widetilde\sigma(t)}$.
>>4. Entonces $\widetilde\sigma$ es curva integral de $X$.
>>5. Además, $\widetilde\sigma(t_0)=\sigma(s_0)=p=\gamma(t_0)$.
>>6. Por el lema anterior, $\gamma(t)=\widetilde\sigma(t)$ para todo $t\in I'$.
>>7. Por lo tanto,
>>$$\gamma(t)=\sigma(t-t_0+s_0)$$
>>8. para todo $t\in I$ tal que $t-t_0+s_0\in J$.

>[!Remark] Curvas integrales en coordenadas
>Sea $M$ una variedad suave y sea $X\in\mathfrak X(M)$ un campo vectorial suave. Sea $(U,\varphi)$ una carta local, con coordenadas $(x^1,\dots,x^n)$. En esa carta, el campo se escribe como $$X=\sum_{i=1}^n X^i\frac{\partial}{\partial x^i}.$$
>Esto significa que para cada punto $q\in U$, el vector $X_q\in T_qM$ está dado por $$X_q=\sum_{i=1}^n X^i(q)\frac{\partial}{\partial x^i}\bigg|_q.$$
>Sea $\gamma:I\to M$ una curva suave tal que $\gamma(I)\subseteq U$. La curva $\gamma$ es una curva integral de $X$ si y solo si, para todo $t\in I$, $$\gamma'(t)=X_{\gamma(t)}.$$
>Como $\gamma'(t)\in T_{\gamma(t)}M$, podemos escribirlo en la base coordenada del espacio tangente en $\gamma(t)$: $$\gamma'(t)=\sum_{i=1}^n (x^i\circ\gamma)'(t)\frac{\partial}{\partial x^i}\bigg|_{\gamma(t)}.$$ (evaluando en $x^{i}$ sale el coeficiente) 
>Por otro lado, evaluando el campo en el punto $\gamma(t)$, tenemos $$X_{\gamma(t)}=\sum_{i=1}^n X^i(\gamma(t))\frac{\partial}{\partial x^i}\bigg|_{\gamma(t)}.$$
>Entonces la igualdad $\gamma'(t)=X_{\gamma(t)}$ equivale a comparar coeficientes en la base $$\left\{\frac{\partial}{\partial x^1}\bigg|_{\gamma(t)},\dots,\frac{\partial}{\partial x^n}\bigg|_{\gamma(t)}\right\}.$$
>Por lo tanto, $\gamma$ es curva integral de $X$ si y solo si sus funciones coordenadas satisfacen el sistema de EDOs $$(x^i\circ\gamma)'(t)=X^i(\gamma(t)),\qquad i=1,\dots,n.$$
>Si escribimos la curva en coordenadas como $$\varphi(\gamma(t))=(x^1(t),\dots,x^n(t)),$$ entonces el sistema queda $$\frac{d x^i}{dt}(t)=X^i(x^1(t),\dots,x^n(t)),\qquad i=1,\dots,n.$$

^da6e6d

>[!Theorem]
>Sean $M,N$ variedades suaves y sea $F:M\to N$ una inmersión. Supongamos que
>$$\dim M=\dim N.$$
>Entonces $F(M)$ es abierto en $N$.
>
>>[!Proof]-
>>1. Sea $p\in M$. Como $F$ es una inmersión,
>>$$dF_p:T_pM\to T_{F(p)}N$$
>>es inyectiva.
>>2. Como $\dim M=\dim N$, los espacios vectoriales $T_pM$ y $T_{F(p)}N$ tienen la misma dimensión. Por lo tanto, $dF_p$ es un isomorfismo.
>>3. Por el teorema de la función inversa para variedades, existen abiertos $U_p\subseteq M$ y $V_p\subseteq N$ tales que $p\in U_p$, $F(p)\in V_p$, y
>>$$F|_{U_p}:U_p\to V_p$$
>>es un difeomorfismo.
>>4. En particular,
>>$$F(U_p)=V_p,$$
>>y por lo tanto $F(U_p)$ es abierto en $N$.
>>5. Como esto vale para todo $p\in M$, tenemos
>>$$F(M)=\bigcup_{p\in M}F(U_p).$$
>>6. Cada $F(U_p)$ es abierto en $N$, y una unión arbitraria de abiertos es abierta. Por lo tanto,
>>$$F(M)$$
>>es abierto en $N$.

>[!Corollary]
>Sea $S\subseteq M$ una subvariedad inmersa de $M$ mediante la inclusión
>$$\iota:S\hookrightarrow M.$$
>Si
>$$\dim S=\dim M,$$
>entonces $S$ es abierto en $M$.
>
>>[!Proof]-
>>1. Como $S$ es una subvariedad inmersa de $M$, la inclusión
>>$$\iota:S\hookrightarrow M$$
>>es una inmersión.
>>2. Además, por hipótesis,
>>$$\dim S=\dim M.$$
>>3. Por el teorema anterior,
>>$$\iota(S)$$
>>es abierto en $M$.
>>4. Como $\iota$ es la inclusión,
>>$$\iota(S)=S.$$
>>5. Por lo tanto, $S$ es abierto en $M$.

>[!Corollary]
>Sea $S\subseteq M$ una subvariedad inmersa de $M$ mediante la inclusión
>$$\iota:S\hookrightarrow M.$$
>Supongamos que
>$$\dim S=\dim M$$
>y que $S$ es cerrado en $M$. Entonces $S$ es abierto y cerrado en $M$.
>
>>[!Proof]-
>>6. Por el corolario anterior, como $\dim S=\dim M$, tenemos que $S$ es abierto en $M$.
>>7. Por hipótesis, $S$ es cerrado en $M$.
>>8. Por lo tanto, $S$ es abierto y cerrado en $M$.

>[!Corollary]
>Sea $M$ una variedad conexa y sea $S\subseteq M$ una subvariedad inmersa  y $S$ cerrado de $M$ . Si $$\dim S=\dim M,$$ entonces $$S=\varnothing \qquad \text{o}\qquad S=M.$$
>>[!Proof]-
>>9. Por el corolario anterior, $S$ es abierto y cerrado en $M$.
>>10. Como $M$ es conexa, los únicos subconjuntos de $M$ que son abiertos y cerrados son
>>$$\varnothing$$
>>y
>>$$M.$$
>>11. Por lo tanto,
>>$$S=\varnothing$$
>>o
>>$$S=M.$$
>>12. En particular, si $S\neq\varnothing$, entonces $$S=M.$$

>[!Remark]- Otra forma de ver el ejercicio 7
>Identificando $\mathbb R^2\simeq \mathbb C$ mediante $z=x+iy$, la transformación $$\varphi_t(x,y)=(x\cos t+y\sin t,-x\sin t+y\cos t)$$se puede escribir como $$\varphi_t(z)=e^{-it}z.$$
>En efecto, $$e^{-it}z=(\cos t-i\sin t)(x+iy)=(x\cos t+y\sin t)+i(-x\sin t+y\cos t).$$
>Si ahora escribimos $z$ en coordenadas polares como $$z=re^{i\theta},$$entonces $$\varphi_t(z)=e^{-it}re^{i\theta}=re^{i(\theta-t)}.$$
>Así, el radio permanece constante y solo cambia el ángulo. 
>Luego las órbitas, para $z\neq 0$, son circunferencias centradas en el origen.
>El campo generado se obtiene derivando el flujo en $t=0$: $$X_z=\left.\frac{d}{dt}\right|_{t=0}\varphi_t(z)=\left.\frac{d}{dt}\right|_{t=0}e^{-it}z=-iz.$$
>Si $z=x+iy$, entonces $$-iz=-i(x+iy)=y-ix.$$
>Por lo tanto, en coordenadas reales, $$X_{(x,y)}=(y,-x).$$
>Equivalente: $$X=y\frac{\partial}{\partial x}-x\frac{\partial}{\partial y}.$$
>En coordenadas polares esto se interpreta como $$X=-\frac{\partial}{\partial \theta},$$
>Para ver de dónde aparece $\frac{\partial}{\partial \theta}$, trabajamos fuera del origen usando coordenadas polares: $$(r,\theta)\mapsto (x,y)=(r\cos\theta,r\sin\theta).$$  
>Identificando $\mathbb R^2\setminus\{0\}$ con $\mathbb C^*$, escribimos $$z=re^{i\theta}.$$  
>Como el flujo es $$\varphi_t(z)=e^{-it}z,$$ entonces $$\varphi_t(z)=e^{-it}re^{i\theta}=re^{i(\theta-t)}.$$  
>Por lo tanto, en coordenadas polares el flujo se escribe como $$\widetilde{\varphi}_t(r,\theta)=(r,\theta-t).$$  
>El campo generado se obtiene derivando respecto de $t$ en $t=0$: $$X_{(r,\theta)}=\left.\frac{d}{dt}\right|_{t=0}\widetilde{\varphi}_t(r,\theta)=\left.\frac{d}{dt}\right|_{t=0}(r,\theta-t).$$  
>Como $$\left.\frac{d}{dt}\right|_{t=0}r=0$$ y $$\left.\frac{d}{dt}\right|_{t=0}(\theta-t)=-1,$$ obtenemos $$X_{(r,\theta)}=(0,-1).$$  
>En una carta con coordenadas $(r,\theta)$, un vector con componentes $(a,b)$ se escribe como $$a\frac{\partial}{\partial r}+b\frac{\partial}{\partial \theta}.$$  
>Entonces $$X=0\frac{\partial}{\partial r}-1\frac{\partial}{\partial \theta}.$$  
>Por lo tanto, $$X=-\frac{\partial}{\partial \theta}.$$  
>Conceptualmente, $\frac{\partial}{\partial r}$ cambia el radio dejando fijo el ángulo, mientras que $\frac{\partial}{\partial \theta}$ cambia el ángulo dejando fijo el radio. En este caso, $$r(t)=r_0,\qquad \theta(t)=\theta_0-t,$$ por lo que no hay componente radial y la componente angular es $-1$.  
>Esta expresión solo vale en $\mathbb R^2\setminus\{0\}$, porque las coordenadas polares no son una carta en el origen. En el origen se calcula aparte: $$X_0=0.$$

^d158d2

>[!Remark]- Extension a todo $W$ Ejercicio 10 
>Queremos ver que el producto $\rho_\alpha\widetilde X_\alpha$, definido inicialmente en $W_\alpha$, puede verse como un campo suave sobre todo $W$.  
>Definimos $Z_\alpha:W\to TM$ por $$(Z_\alpha)_q=\begin{cases}\rho_\alpha(q)(\widetilde X_\alpha)_q,& q\in W_\alpha,\\0_q,& q\notin W_\alpha.\end{cases}$$
>Primero, $Z_\alpha$ está bien definido como campo sobre $W$. En efecto, si $q\in W_\alpha$, entonces $(\widetilde X_\alpha)_q\in T_qM$, luego $\rho_\alpha(q)(\widetilde X_\alpha)_q\in T_qM$. Si $q\notin W_\alpha$, entonces $0_q\in T_qM$.  
>Veamos que $Z_\alpha$ es suave. Sea $q\in W$.  
>Si $q\in W_\alpha$, entonces en el abierto $W_\alpha$ tenemos $$Z_\alpha=\rho_\alpha\widetilde X_\alpha.$$
>Como $\rho_\alpha$ es suave y $\widetilde X_\alpha$ es un campo suave, $Z_\alpha$ es suave cerca de $q$.  
>Si $q\notin W_\alpha$, como $\operatorname{supp}(\rho_\alpha)\subseteq W_\alpha$, se tiene $q\notin\operatorname{supp}(\rho_\alpha)$. Luego existe un abierto $O\subseteq W$ con $q\in O$ tal que $$O\cap\operatorname{supp}(\rho_\alpha)=\varnothing.$$
>Por lo tanto $\rho_\alpha=0$ en $O$, y entonces $$Z_\alpha=0$$ en $O$. Como el campo cero es suave, $Z_\alpha$ es suave cerca de $q$.  
>Concluimos que $$Z_\alpha\in\mathfrak X(W).$$

^c3dcb6

>[!Proposition] Corrección de los abiertos en cartas cúbicas
>Sea $f:M\to N$ una inmersión. Supongamos que existen cartas cúbicas centradas $(U,\varphi)$ en $p$ y $(V,\psi)$ en $f(p)$ tales que $$\varphi(U)=(-\varepsilon,\varepsilon)^m,\qquad \psi(V)=(-\delta,\delta)^n,$$ y $$\psi\circ f\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0).$$ Entonces existen abiertos más pequeños $U_\rho\subseteq U$ y $V_\rho\subseteq V$ tales que $p\in U_\rho$, $f(p)\in V_\rho$, $f(U_\rho)\subseteq V_\rho$, y para todo $r\in V_\rho$ la composición $$a_k\circ\varphi^{-1}\circ\pi\circ\psi(r)$$ está bien definida, donde $\pi:\mathbb R^n\to\mathbb R^m$ está dada por $$\pi(y_1,\ldots,y_n)=(y_1,\ldots,y_m).$$
>>[!Proof]-
>>1. El problema es que, si definimos $$A_k=a_k\circ\varphi^{-1}\circ\pi\circ\psi,$$ esta función solo tiene sentido en los puntos $r\in V$ tales que $$\pi(\psi(r))\in\varphi(U).$$
>>2. Como $$\varphi(U)=(-\varepsilon,\varepsilon)^m,\qquad \psi(V)=(-\delta,\delta)^n,$$ elegimos $$0<\rho<\min\{\varepsilon,\delta\}.$$
>>3. Definimos los abiertos restringidos $$U_\rho:=\varphi^{-1}\big((-\rho,\rho)^m\big),\qquad V_\rho:=\psi^{-1}\big((-\rho,\rho)^n\big).$$
>>4. Como las cajas $(-\rho,\rho)^m$ y $(-\rho,\rho)^n$ son abiertas, se sigue que $U_\rho$ es abierto en $M$ y $V_\rho$ es abierto en $N$.
>>5. Además, como las cartas están centradas en $p$ y en $f(p)$, tenemos $$\varphi(p)=0,\qquad \psi(f(p))=0.$$ Por lo tanto, $$p\in U_\rho,\qquad f(p)\in V_\rho.$$
>>6. Veamos que la composición $a_k\circ\varphi^{-1}\circ\pi\circ\psi$ está bien definida en todo $V_\rho$. Sea $r\in V_\rho$. Entonces $$\psi(r)\in(-\rho,\rho)^n.$$ Por lo tanto, $$\pi(\psi(r))\in(-\rho,\rho)^m.$$
>>7. Como $\rho<\varepsilon$, tenemos $$(-\rho,\rho)^m\subseteq(-\varepsilon,\varepsilon)^m=\varphi(U).$$ Luego $$\pi(\psi(r))\in\varphi(U),$$ y entonces $$\varphi^{-1}(\pi(\psi(r)))$$ está bien definido.
>>8. Por lo tanto, para $1\leq k\leq m$, la función $$A_k(r):=a_k\big(\varphi^{-1}(\pi(\psi(r)))\big)$$ está bien definida para todo $r\in V_\rho$.
>>9. Ahora veamos que $f(U_\rho)\subseteq V_\rho$. Sea $q\in U_\rho$. Entonces $$\varphi(q)\in(-\rho,\rho)^m.$$
>>10. Usando la forma local de la inmersión, obtenemos $$\psi(f(q))=(\varphi(q),0,\ldots,0).$$
>>11. Como $\varphi(q)\in(-\rho,\rho)^m$, se tiene $$\psi(f(q))\in(-\rho,\rho)^n.$$
>>12. Por definición de $V_\rho$, esto implica que $$f(q)\in V_\rho.$$
>>13. Como esto vale para todo $q\in U_\rho$, concluimos que $$f(U_\rho)\subseteq V_\rho.$$
>>14. Así, reemplazando $U$ por $U_\rho$ y $V$ por $V_\rho$, podemos definir sin ambigüedad $$A_k(r)=a_k\big(\varphi^{-1}(\pi(\psi(r)))\big),\qquad r\in V_\rho,\quad 1\leq k\leq m,$$ y $$A_k(r)=0,\qquad r\in V_\rho,\quad m<k\leq n.$$

^fd9e9b


## Practico 5

>[!Proposition]
>Si $w$ es multi lineal y alternada entonces si $v_{i}=v_{j}$ $$w(v_{1},\ldots,v_{i},\ldots,v_{j},\ldots,v_{n})=0$$
>Osea si repetimos dos coordenadas en la entrada nos da $0$.
>>[!Proof]-
>>1. Por ser alternada $w(v_{1},\ldots,v_{i},\ldots,v_{j},\ldots,v_{n})=-w(v_{1},\ldots,v_{j},\ldots,v_{i},\ldots,v_{n})$ 
>>2. Pero $-w(v_{1},\ldots,v_{j},\ldots,v_{i},\ldots,v_{n})=-w(v_{1},\ldots,v_{i},\ldots,v_{j},\ldots,v_{n})$ por que $v_{i}=v_{j}$
>>3. Entonces $2w(v_{1},\ldots,v_{i},\ldots,v_{j},\ldots,v_{n})=0$
>>4. Por lo tanto $w(v_{1},\ldots,v_{i},\ldots,v_{j},\ldots,v_{n})=0$ 

^9b49d4

>[!Proposition]
>Si $X,Y\in\mathfrak X(M)$ y en una carta local $(U,x^1,\ldots,x^n)$ escribimos $X=\sum_j X^j\frac{\partial}{\partial x^j}$ y $Y=\sum_j Y^j\frac{\partial}{\partial x^j}$, entonces
> $$[X,Y]=\sum_i\left(\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_j Y^j\frac{\partial X^i}{\partial x^j}\right)\frac{\partial}{\partial x^i}.$$
>>[!Proof]-
>>1. Por definición del corchete de Lie, para toda función suave $f\in C^\infty(U)$ se tiene $$[X,Y](f)=X(Y(f))-Y(X(f)).$$
>> 2. Como $[X,Y]$ es un campo vectorial, en coordenadas se puede escribir $$[X,Y]=\sum_i [X,Y]^i\frac{\partial}{\partial x^i}.$$
>> 3. Para encontrar el coeficiente $[X,Y]^i$, evaluamos el campo $[X,Y]$ en la función coordenada $x^i$. Como $\frac{\partial}{\partial x^k}(x^i)=\delta^i_k$, se tiene $$[X,Y](x^i)=\sum_k [X,Y]^k\frac{\partial x^i}{\partial x^k}=\sum_k [X,Y]^k\delta^i_k=[X,Y]^i.$$
>> 4. Por otro lado, usando la definición del corchete, $$[X,Y](x^i)=X(Y(x^i))-Y(X(x^i)).$$
>> 5. Como $Y=\sum_j Y^j\frac{\partial}{\partial x^j}$, entonces $$Y(x^i)=\sum_j Y^j\frac{\partial x^i}{\partial x^j}=\sum_j Y^j\delta^i_j=Y^i.$$
>> 6. Análogamente, $$X(x^i)=X^i.$$
>> 7. Entonces $$[X,Y](x^i)=X(Y^i)-Y(X^i).$$
>> 8. Usando que $X=\sum_j X^j\frac{\partial}{\partial x^j}$ y $Y=\sum_j Y^j\frac{\partial}{\partial x^j}$, obtenemos $$X(Y^i)=\sum_j X^j\frac{\partial Y^i}{\partial x^j},\qquad Y(X^i)=\sum_j Y^j\frac{\partial X^i}{\partial x^j}.$$
>> 9. Por lo tanto, $$[X,Y](x^i)=\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_j Y^j\frac{\partial X^i}{\partial x^j}.$$
>> 10. Pero por el paso 3, $[X,Y](x^i)=[X,Y]^i$. Luego $$[X,Y]^i=\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_j Y^j\frac{\partial X^i}{\partial x^j}.$$
>> 11. Sustituyendo estos coeficientes en la expresión coordenada de $[X,Y]$, concluimos que $$[X,Y]=\sum_i\left(\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_j Y^j\frac{\partial X^i}{\partial x^j}\right)\frac{\partial}{\partial x^i}.$$

^0415b0

> [!Remark]
> Supongamos que en coordenadas tenemos $$\omega=\sum_i a_i\,dx^i$$ y $$[X,Y]=\sum_i\left(\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_jY^j\frac{\partial X^i}{\partial x^j}\right)\frac{\partial}{\partial x^i}.$$
> Para simplificar la notación, llamemos $$[X,Y]^i=\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_jY^j\frac{\partial X^i}{\partial x^j}.$$
> Entonces $$[X,Y]=\sum_k [X,Y]^k\frac{\partial}{\partial x^k}.$$
> Evaluamos $\omega$ en $[X,Y]$: $$\omega([X,Y])=\left(\sum_i a_i\,dx^i\right)\left(\sum_k [X,Y]^k\frac{\partial}{\partial x^k}\right).$$
> Usando la linealidad de la $1$-forma en el vector de entrada, obtenemos $$\omega([X,Y])=\sum_{i,k}a_i[X,Y]^k\,dx^i\left(\frac{\partial}{\partial x^k}\right).$$
> Como $dx^i$ es la base dual de $\frac{\partial}{\partial x^1},\ldots,\frac{\partial}{\partial x^n}$, tenemos $$dx^i\left(\frac{\partial}{\partial x^k}\right)=\delta^i_k.$$
> Por lo tanto, $$\omega([X,Y])=\sum_{i,k}a_i[X,Y]^k\delta^i_k.$$
> La delta de Kronecker elimina todos los términos salvo aquellos con $i=k$, entonces $$\omega([X,Y])=\sum_i a_i[X,Y]^i.$$
> Finalmente, reemplazando la expresión de $[X,Y]^i$, queda $$\omega([X,Y])=\sum_i a_i\left(\sum_j X^j\frac{\partial Y^i}{\partial x^j}-\sum_jY^j\frac{\partial X^i}{\partial x^j}\right).$$

^151174

>[!Proposition] $dg=0$ implica $g$ localmente constante 
>Let $M$ be a smooth manifold, let $U\subset M$ be open, and let $g\in C^\infty(U)$. If $$dg=0,$$ then $g$ is locally constant.
>>[!Proof]-
>>1. Fix an arbitrary point $p\in U$.
>>2. Choose a smooth coordinate chart around $p$, say $$(W,r),$$ with $p\in W\subset U$ and $W$ connected.
>>3. Since $$dg=0,$$ for every $q\in W$ we have $$0=(dg)_q\left(\frac{\partial}{\partial r}\bigg|_q\right).$$
>>4. By definition of the differential of a smooth function, $$(dg)_q\left(\frac{\partial}{\partial r}\bigg|_q\right)=\frac{\partial g}{\partial r}(q).$$
>>5. Therefore, for every $q\in W$, $$\frac{\partial g}{\partial r}(q)=0.$$
>>6. Let $\widetilde g=g\circ r^{-1}$ be the coordinate representation of $g$. Then $$\frac{d\widetilde g}{dr}=0$$ on the interval $r(W)\subset\mathbb R$.
>>7. By the ordinary one-variable result from calculus, $\widetilde g$ is constant on $r(W)$.
>>8. Therefore $g$ is constant on $W$. (esto es por que la carta coordenada es una biyecion) 
>>9. Since every point $p\in U$ has a neighborhood $W$ on which $g$ is constant, $g$ is locally constant.

^8cc5ce

