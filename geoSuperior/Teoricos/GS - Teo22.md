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
>Sea $F:M\to N$ suave y $\omega\in\Omega^k(N)$. Se define el pullback $F^*\omega$ de $\omega$ como la $k$-forma
>$$(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}((dF)_pv_1,\ldots,(dF)_pv_k),$$
>para todo $v_1,\ldots,v_k\in T_pM$.

>[!Proposition]
>Sea $F:M\to N$ suave.
>
>1. Si $\omega\in\Omega^k(N)$, entonces $F^*\omega\in\Omega^k(M)$, y $F^*:\Omega^k(N)\to\Omega^k(M)$ es transf. lineal.
>2. $F^*(\omega\wedge\theta)=(F^*\omega)\wedge(F^*\theta)$.
>3. $F^*(d_N\omega)=d_MF^*\omega$.
>>[!Proof]- Ejercicio
>>Hay que probar una por una.
>>
>>Para ver que $F^*\omega$ es suave, podemos usar algun criterio de suavidad; por ejemplo, usando cartas.
>>
>>(ii) Es el ejercicio 7, practico 5.
>>
>>(iii) Por linealidad de $F^*$ y de la derivada exterior, entonces es suficiente con verificar en formas de un abierto $U$:
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

>[!Remark]
>Criollo: una subvariedad integral es una subvariedad que se acomoda muy bien a los subespacios que hay fijos en cada punto.
>![[Pasted image 20260603132446.png]]
