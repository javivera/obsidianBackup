## Complejo de de Rham

>[!Definition] Complejo de Rham
>Es el complejo de cocadenas $$0\xrightarrow{d}\Omega^0(M)\xrightarrow{d}\Omega^1(M)\xrightarrow{d}\cdots\xrightarrow{d}\Omega^n(M)\xrightarrow{d}0.$$
>Algunas veces se denota por $d_k=d|_{\Omega^k(M)}$, y asi, la condicion $d\circ d=0$, se lee como $\operatorname{Im}d_k\subset\ker d_{k+1}$.
>Se define el $k$-esimo grupo de cohomologia de de Rham, denotado por $$H^k_{dR}(M):=\ker d_k/\operatorname{Im}d_{k-1},$$donde $$Z^k(M)=\ker d_k,$$$$B^k(M)=\operatorname{Im}d_{k-1}.$$

>[!Example]
>Por ejemplo: $$H^0_{dR}(M)=\ker d_0/\operatorname{Im}d_{-1}=\ker d_0=\{f\in C^\infty(M):df=0\}.$$
>$f$ es constante en cada componente conexa de $M$, entonces $H^0_{dR}(M)\cong\mathbb R^{\#\operatorname{comp}}$.
>Cuando $M$ es compacta, se puede probar que $\dim H^k_{dR}(M)$ es finito y se llama el $k$-esimo numero de Betti.

>[!Definition] Formas cerradas y exactas
>Una forma diferencial $\theta$ se dice cerrada si $d\theta=0$, y se dice exacta si $\theta=d\omega$, para alguna forma diferenciable $\omega$.

>[!Example]
>Sea $B^n=\{x\in\mathbb R^n:\|x\|<1\}$. Se puede probar que $$H^k(B^n)=0,\qquad k\ge1,$$y ya sabemos $H^0(B^n)=\mathbb R$. (Se llama lema de Poincare)

>[!Example]
>Se puede probar que si $M$ es simplemente conexa, entonces $H^1_{dR}(M)=0$.
>En general $$H^1_{dR}(M)\cong \operatorname{Hom}(\pi_1(M),\mathbb R).$$
>$$\pi_1(S^1)=\mathbb Z,\qquad \operatorname{Hom}(\pi_1(M),\mathbb R)\cong\mathbb R.$$

## Pullback de formas

>[!Definition] Pullback de formas
>Sea $F:M\to N$ suave y $\omega\in\Omega^k(N)$. Se define el pullback $F^*\omega$ de $\omega$ como la $k$-forma (se prueba en el siguiente enunciado que es suave) 
>$$(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}((dF)_pv_1,\ldots,(dF)_pv_k),$$
>para todo $v_1,\ldots,v_k\in T_pM$.

>[!Proposition]
>Sea $F:M\to N$ suave.
>- (a) Si $\omega\in\Omega^k(N)$, entonces $F^*\omega\in\Omega^k(M)$, y $F^*:\Omega^k(N)\to\Omega^k(M)$ es transf. lineal.
>- (b) $F^*(\omega\wedge\theta)=(F^*\omega)\wedge(F^*\theta)$.
>- (c) $F^*(d_N\omega)=d_MF^*\omega$.
>
>>[!Proof]- Ejercicio
>>- (a)
>>	1. Veamos primero que, para cada $p\in M$, $(F^*\omega)_p$ es un $k$-tensor covariante. Sean $a,b\in\mathbb R$ y $v_1,w_1,v_2,\ldots,v_k\in T_pM$.
>>	2. Entonces $$\begin{aligned}(F^*\omega)_p(av_1+bw_1,v_2,\ldots,v_k)&=\omega_{F(p)}\bigl(dF_p(av_1+bw_1),dF_p(v_2),\ldots,dF_p(v_k)\bigr)\\&=\omega_{F(p)}\bigl(a\,dF_p(v_1)+b\,dF_p(w_1),dF_p(v_2),\ldots,dF_p(v_k)\bigr)\\&=a\,\omega_{F(p)}\bigl(dF_p(v_1),dF_p(v_2),\ldots,dF_p(v_k)\bigr)\\&\quad+b\,\omega_{F(p)}\bigl(dF_p(w_1),dF_p(v_2),\ldots,dF_p(v_k)\bigr)\\&=a(F^*\omega)_p(v_1,v_2,\ldots,v_k)+b(F^*\omega)_p(w_1,v_2,\ldots,v_k).\end{aligned}$$
>>	3. El mismo argumento vale en cada entrada, luego $(F^*\omega)_p$ es $k$-lineal.
>>	4. Veamos que $(F^*\omega)_p$ es alternado. Sean $1\leq i<j\leq k$. Como $\omega_{F(p)}$ es alternada, $$\begin{aligned}(F^*\omega)_p(v_1,\ldots,v_i,\ldots,v_j,\ldots,v_k)&=\omega_{F(p)}\bigl(dF_p(v_1),\ldots,dF_p(v_i),\ldots,dF_p(v_j),\ldots,dF_p(v_k)\bigr)\\&=-\omega_{F(p)}\bigl(dF_p(v_1),\ldots,dF_p(v_j),\ldots,dF_p(v_i),\ldots,dF_p(v_k)\bigr)\\&=-(F^*\omega)_p(v_1,\ldots,v_j,\ldots,v_i,\ldots,v_k).\end{aligned}$$ Por lo tanto, $(F^*\omega)_p\in\Lambda^k(T_p^*M)$.
>>	5. Probemos ahora que la sección $p\mapsto(F^*\omega)_p$ es suave. Fijemos $p\in M$ y tomemos cartas $(U,x)$ de $M$ alrededor de $p$ y $(V,y)$ de $N$ alrededor de $F(p)$, achicando $U$ de modo que $F(U)\subseteq V$. En $V$ escribimos $$\omega=\sum_I a_I\,dy^{i_1}\wedge\cdots\wedge dy^{i_k}$$donde cada $a_I$ es suave. Afirmamos que sobre $U$ se cumple $$F^*\omega=\sum_I(a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)$$
>>	6. Para verificar esta igualdad, sean $q\in U$ y $v_1,\ldots,v_k\in T_qM$. Por definición del pullback, $$\begin{aligned}(F^*\omega)_q(v_1,\ldots,v_k)&=\omega_{F(q)}\bigl(dF_q(v_1),\ldots,dF_q(v_k)\bigr)\\&=\sum_I a_I(F(q))(dy^{i_1}\wedge\cdots\wedge dy^{i_k})_{F(q)}\bigl(dF_q(v_1),\ldots,dF_q(v_k)\bigr).\end{aligned}$$
>>	7. Por definición del producto wedge de $1$-formas, $$(dy^{i_1}\wedge\cdots\wedge dy^{i_k})_{F(q)}\bigl(dF_q(v_1),\ldots,dF_q(v_k)\bigr)=\det\left(dy^{i_r}_{F(q)}\bigl(dF_q(v_s)\bigr)\right)_{r,s}.$$
>>	8. Por la regla de la cadena, $dy^{i_r}_{F(q)}\circ dF_q=d(y^{i_r}\circ F)_q$. Por tanto, $$\begin{aligned}\det\left(dy^{i_r}_{F(q)}\bigl(dF_q(v_s)\bigr)\right)_{r,s}&=\det\left(d(y^{i_r}\circ F)_q(v_s)\right)_{r,s}\\&=\bigl(d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\bigr)_q(v_1,\ldots,v_k).\end{aligned}$$
>>	9. Sustituyendo, obtenemos $$\begin{aligned}(F^*\omega)_q(v_1,\ldots,v_k)&=\sum_I(a_I\circ F)(q)\bigl(d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\bigr)_q(v_1,\ldots,v_k)\\&=\left(\sum_I(a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\right)_q(v_1,\ldots,v_k).\end{aligned}$$
>>	10. Como esto vale para todo $q\in U$ y todos $v_1,\ldots,v_k\in T_qM$, concluimos que $$F^*\omega=\sum_I(a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)$$ sobre $U$.
>>	11. Cada función $a_I\circ F$ es suave y cada $d(y^{i_r}\circ F)$ es una $1$-forma suave. Por lo tanto, el lado derecho es una $k$-forma suave sobre $U$. Como $p$ era arbitrario, $F^*\omega\in\Omega^k(M)$.
>>	12. Finalmente, sean $\omega,\eta\in\Omega^k(N)$ y $a,b\in\mathbb R$. Para todo $p\in M$ y $v_1,\ldots,v_k\in T_pM$, $$\begin{aligned}\bigl(F^*(a\omega+b\eta)\bigr)_p(v_1,\ldots,v_k)&=(a\omega+b\eta)_{F(p)}\bigl(dF_p(v_1),\ldots,dF_p(v_k)\bigr)\\&=a\,\omega_{F(p)}\bigl(dF_p(v_1),\ldots,dF_p(v_k)\bigr)\\&\quad+b\,\eta_{F(p)}\bigl(dF_p(v_1),\ldots,dF_p(v_k)\bigr)\\&=\bigl(aF^*\omega+bF^*\eta\bigr)_p(v_1,\ldots,v_k).\end{aligned}$$luego $F^*(a\omega+b\eta)=aF^*\omega+bF^*\eta$, por lo que $F^*$ es lineal.
>>- (ii) Es el ejercicio 7, practico 5.
>>- (iii) Por linealidad de $F^*$ y de la derivada exterior, entonces es suficiente con verificar en formas de un abierto $U$:
>>$$F^*(f)=f\circ F.$$
>>Asi pues, dado $p\in M$ y $v\in T_pM$,
>>$$(F^*(d_Nf))_pv=(d_Nf)_{F(p)}((dF)_pv)=d(f\circ F)_pv=(d_M(F^*f))_pv.$$
>>Si $\theta$ es una $k$-forma, como la definicion de la derivada exterior es local y no depende de la carta, fijemos un $p\in M$ y una carta $(U,\varphi=(x_1,\ldots,x_n))$ de $F(p)$:
>>$$\theta|_U=\sum_{i_1<\cdots<i_k}a_{i_1\ldots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}=\sum_Ia_I\,dx_I.$$
>>Entonces
>>$$(d_N\theta)|_U=\sum_I(da_I)\wedge dx_I.$$
>>Por tanto
>>$$(F^*(d_N\theta))_p=F^*\left(\sum_I(da_I)_p\wedge (dx_I)_p\right)=\sum_I F^*((da_I)_p)\wedge F^*((dx_I)_p)$$
>>$$=\sum_{i_1<\cdots<i_k}d(F\circ a_I)_p\wedge d(F\circ x_{i_1})_p\wedge\cdots\wedge d(F\circ x_{i_k})_p.$$
>>Por otro lado
>>$$(d_M(F^*\omega))_p=\left(d_M\left(F^*\sum_Ia_I\wedge dx_I\right)\right)_p$$
>>$$=\left(d_M\left(\sum_I(F^*a_I)\wedge F^*(dx_I)\right)\right)_p$$
>>$$=\left(d_M\left(\sum_{i_1<\cdots<i_k}(a_I\circ F)\wedge d(x_{i_1}\circ F)\wedge\cdots\wedge d(x_{i_k}\circ F)\right)\right)_p.$$
>>Como $d_Md_M=0$, queda la misma expresion.


