>[!Remark]
>Cuando $X$ es completo el flujo está definido en todo $\mathbb R\times M$:
>$$\theta:\mathbb R\times M\to M,$$
>y satisface:
>
>**(i)** $\theta_t:M\to M$ es un difeomorfismo para todo $t\in\mathbb R$.
>
>**(ii)** $\theta_0=\operatorname{Id}_M$.
>
>**(iii)** $\theta_s\circ\theta_t=\theta_{s+t}$, para todo $s,t\in\mathbb R$.
>
>En este caso tenemos un homomorfismo de grupos
>$$\xi:(\mathbb R,+)\to(\operatorname{Diff}(M),\circ),\qquad t\mapsto\theta_t.$$

>[!Definition] Subgrupo monoparamétrico de difeomorfismos
>Una familia de difeomorfismos $\{\theta_t\}_{t\in\mathbb R}$ de $M$ es un subgrupo monoparamétrico de difeomorfismos de $M$ si satisface las propiedades **(i)**, **(ii)**, **(iii)** de arriba.
>
>Dado un subgrupo monoparamétrico $\theta$ de difeomorfismos de $M$, podemos definir un campo $C^\infty$ en $M$ por medio de $$X_p(f)=\left.\frac{d}{dt}\right|_{t=0}f(\theta_t(p)),\qquad f\in C^\infty(p).\text{ aca deberia ser }f\in C^{\infty} (M) $$Se verifica fácilmente que $X_p\in T_pM$, para todo $p\in M$. Veamos que $X$ es un campo diferenciable en $M$. $X$ se llama el **generador infinitesimal** del subgrupo monoparamétrico $\theta$.

>[!Proposition] Suavidad del generador infinitesimal
>Sea $\theta=\{\theta_t\}_{t\in\mathbb R}$ un subgrupo monoparamétrico suave de difeomorfismos de $M$. Entonces el campo
>$$X_p(f)=\left.\frac{d}{dt}\right|_{t=0}f(\theta_t(p))$$
>es un campo suave.
>
>>[!Proof]-
>>1. Tomemos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$.
>>2. Queremos ver que las funciones coordenadas de $X$ en esta carta son suaves.
>>3. Recordemos que, para $q\in U$,
>>$$X_q(x_i)=\left.\frac{d}{dt}\right|_{t=0}x_i(\theta_t(q)).$$
>>4. Como $\theta:\mathbb R\times M\to M$ es suave, la función
>>$$(t,q)\mapsto x_i(\theta_t(q))$$
>>es suave donde está definida.
>>5. Entonces
>>$$X^i(q)=X_q(x_i)=\left.\frac{d}{dt}\right|_{t=0}x_i(\theta_t(q))$$
>>es suave como función de $q$.
>>6. Por lo tanto, en coordenadas
>>$$X|_U=\sum_{i=1}^n X^i\frac{\partial}{\partial x_i}$$
>>con $X^i\in C^\infty(U)$, y se sigue que $X$ es suave.

## Corchete de Lie

>[!Remark]
>Recordemos que dado $X\in\mathfrak X(M)$ y $f\in C^\infty(M)$, tenemos la función suave $$Xf:M\to\mathbb R,\qquad p\mapsto (Xf)(p)=X_p(f).$$
>Osea $Xf\in C^{\infty}(M)$ 

>[!Definition] Corchete de Lie
>Sean $X,Y\in\mathfrak X(M)$. Se define el corchete de Lie de $X$ e $Y$, denotado por $[X,Y]$, como el campo que en $p$ actúa sobre $f\in C^\infty(M)$ de la siguiente manera
>$$[X,Y]_p f=X_p(Yf)-Y_p(Xf).$$

>[!Proposition]
>El corchete de Lie está bien definido, es decir, $[X,Y]_p\in T_pM$ y ademas $[X,Y]$ es un campo suave.
>
>>[!Proof]-
>>1. Necesitamos ver que $[X,Y]_p$ es vector tangente.
>>2. **Linealidad** Sea $f,g\in C^\infty(M)$. Entonces $$[X,Y]_p(f+g)=X_p(Y(f+g))-Y_p(X(f+g))=[X,Y]_pf+[X,Y]_pg,$$ por linealidad de $X_p$ e $Y_p$. (Dado que son vectores tangentes) 
>>3. **Leibniz** Primero por Leibniz $$Y(fg)=fYg+gYf.$$
>>4. Entonces $$X(Y(fg))=X(fYg+gYf)=X(fYg)+X(gYf).$$
>>5. Usando Leibniz de $X$, $$X(fYg)=X(f)Yg+fX(Yg),$$y $$X(gYf)=X(g)Yf+gX(Yf).$$
>>6. Luego $$X(Y(fg))=X(fYg)=X(f)Yg+fX(Yg)+X(gYf)=X(g)Yf+gX(Yf).$$  
>>7. Del mismo modo, $$X(fg)=fXg+gXf,$$y por lo tanto $$Y(X(fg))=Y(fXg+gXf)=Y(f)Xg+fY(Xg)+Y(g)Xf+gY(Xf).$$
>>8. Restando, $$[X,Y](fg)=X(Y(fg))-Y(X(fg)).$$
>>9. Los términos cruzados se cancelan porque son productos de funciones reales: $$X(f)Yg-Y(g)Xf\equiv0,\qquad X(g)Yf-Y(f)Xg\equiv0$$cuando se reordenan los productos entre funciones correspondientes.
>>10. Queda $$[X,Y](fg)=f[X,Y](g)+g[X,Y](f).$$ entonces $$[X,Y]_{p}(fg)=f(g)[X,Y]_{p}(g)+g(p)[X,Y]_{p}(f)$$ 
>>11. Finalmente vimos $[X,Y]_p$ es una vector tangente en $p$, es decir $[X,Y]_p\in T_pM$.
>>12. **Suavidad** Para esto usemos [[GS - Teo14#^3accf8]] 4. 
>>13. Entonces dada $f\in C^{\infty}(M)$ tenemos que ver que $[X,Y]f=X(Yf)-Y(Xf)$ es suave 
>>14. Primero notamos $Yf,Xf\in C^{\infty}(M)$ por que $X,Y$ son campos suaves entonces $X(Yf),Y(Xf)\in C^{\infty}(M)$ misma razon 
>>15. Luego $[X,Y]f\in C^{\infty}(M)$ por ser resta de cosas en $C^{\infty}(M)$ por lo tanto $[X,Y]$ es campo suave 

>[!Proposition] Propiedades del corchete de Lie
>Sean $X,Y,Z\in\mathfrak X(M)$ y $f,g\in C^\infty(M)$. Entonces:
>
>- **(i)** $[X,Y]=-[Y,X]$.
>- **(ii)** Si $(U,\varphi=(x_{1},\ldots,x_{n}))$ entonces $$\left[\frac{\partial}{\partial x_i},\frac{\partial}{\partial x_j}\right]=0.$$
>- **(iii)** $[X,gY]=g[X,Y]+X(g)Y$.
>- **(iv)** $[fX,gY]=fg[X,Y]+fX(g)Y-gY(f)X$.
>- **(v)** Identidad de Jacobi: $$[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0.$$
>
>>[!Proof]-
>>- **(i)** 
>>	1. Sale directo: $$-[Y,X]f=-Y(Xf)+X(Yf)=[X,Y]f.$$
>>- **(ii)**
>>	1. Tomemos $f\in C^\infty(U)$. $$\begin{aligned}\left[\frac{\partial}{\partial x_i},\frac{\partial}{\partial x_j}\right]f &=\frac{\partial}{\partial x_i}\left(\frac{\partial f}{\partial x_j}\right)-\frac{\partial}{\partial x_j}\left(\frac{\partial f}{\partial x_i}\right)\\ &=\frac{\partial}{\partial r_i}\left(\frac{\partial}{\partial x_j}f\right)\circ\varphi^{-1}-\frac{\partial}{\partial r_j}\left(\frac{\partial}{\partial x_i}f\right)\circ\varphi^{-1}\\ &=\frac{\partial}{\partial r_i}\left(\frac{\partial}{\partial r_j}(f\circ\varphi^{-1})\right)-\frac{\partial}{\partial r_j}\left(\frac{\partial}{\partial r_i}(f\circ\varphi^{-1})\right) \end{aligned}$$ para esta parte recordar $$\frac{\partial}{\partial x_{i}}\bigg|_{p}f=\frac{\partial}{\partial r_{i}}f\circ \varphi ^{-1}(\varphi(p))$$
>>	2. Y se termina con el teorema de igualdad de las derivadas cruzadas.
>>- **(iii)** 
>>	1. Calculamos: $$[X,gY]h=X(gYh)-gY(Xh).$$
>>	2. Usando Leibniz: $$X(gYh)=X(g)Yh+gX(Yh).$$
>>	3. Entonces $$[X,gY]h=X(g)Yh+gX(Yh)-gY(Xh)=X(g)Yh+g[X,Y]h.$$
>>	4. Por lo tanto, $$[X,gY]=g[X,Y]+X(g)Y.$$
>>- **(iv)** 
>>	1. Usando **(iii)** y antisimetría: $$[fX,gY]=f[X,gY]-gY(f)X.$$
>>	2. Luego $$[fX,gY]=fg[X,Y]+fX(g)Y-gY(f)X.$$
>>- **(v)** 
>>	1. La prueba de Jacobi es un cálculo. Para $f\in C^\infty(M)$: $$\begin{aligned} \big[X,[Y,Z]]f+[Y,[Z,X]]f+[Z,[X,Y]]f&=X[Y,Z]f-[Y,Z]Xf+Y[Z,X]f-[Z,X]Yf+Z[X,Y]f-[X,Y]Zf\\&=XYZf-XZYf-YZXf+ZYXf+YZXf-YXZf\\&\quad -ZXYf+XZYf+ZXYf-ZYXf-XYZf+YXZf\\&=0.\end{aligned}$$

^411d32

>[!Definition] Campos $F$-relacionados
>Sean $F:M\to N$ suave, $X\in\mathfrak X(M)$ y $\widetilde X\in\mathfrak X(N)$. Se dice que $X$ y $\widetilde X$ están $F$-relacionados si
>$$(dF)_pX_p=\widetilde X_{F(p)},\qquad p\in M.$$

>[!Proposition] Naturalidad del corchete
>Sean $F:M\to N$ suave, $X,Y\in\mathfrak X(M)$ y $\widetilde X,\widetilde Y\in\mathfrak X(N)$ tales que $X,Y$ estan $F$-relacionados con $\widetilde{X},\widetilde Y$ respectivamente entonces $[X,Y]$ está $F$-relacionado con $[\widetilde X,\widetilde Y]$.
>
>>[!Proof]-
>>1. Primero notamos $$(dF)_{p}[X,Y]_{p}f=[X,Y]_{p}(f\circ F)=X_{p}(Y(f\circ F))-Y_{p}(X(f\circ F))$$ 
>>2. Tenemos que $(dF)_{p}(X_{p})=\widetilde{X}_{F(p)}$ entonces $$X_{p}(f\circ F)=(\widetilde X_{p} f)\circ F.$$ osea $X(f\circ F)=(\widetilde{X}f)\circ F$ analogo con $Y(f\circ F)$ 
>>3. Por lo tanto $$\begin{align}(dF)_{p}[X,Y]_{p}h=[X,Y]_{p}(h\circ F)&=X_{p}((\widetilde Y f)\circ F)-Y_{p}((\widetilde X f)\circ F)\\&=(dF)_{p}(X_{p})(\widetilde{Y}f)-(dF)_{p}(Y_{p})(\widetilde{X}f)\\&=\widetilde{X}_{F(p)}(\widetilde{Y}f)-\widetilde{Y}_{F(p)}(\widetilde{X}f)\\&=[\widetilde{X},\widetilde{Y}]_{F(p)}f\end{align}$$ mostrando que $[X,Y]$ y $[\widetilde{X},\widetilde{Y}]$ estan $F$-relacionados  

## Derivada de Lie

>[!Lemma]
>Sea $\alpha:(-\epsilon,\epsilon)\to TM$ una curva suave. Entonces, para toda $f\in C^\infty(M)$, se cumple
>$$\alpha'(0)(f)=\frac{d}{dt}\bigg|_{t=0}\alpha(t)f.$$
>donde identificamos $T_{\alpha(0)}(TM)$ con $T_pM$.
>
>>[!Proof]-
>>1. Fijemos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ en $p$.
>>2. Luego $$\alpha(t)=\sum_{i=1}^n b^i(t)\frac{\partial}{\partial x_i}\bigg|_p,$$con $b^i:(-\epsilon,\epsilon)\to\mathbb R$ suaves.
>>3. Vemos a $\alpha'(0)$ como elemento de $T_pM$ vía la identificación $T_{\alpha(0)}(T_pM)\cong T_pM$.
>>4. Usando la base $\left\{\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_n}\bigg|_p\right\}$, tenemos $$\alpha'(0)=\sum_{i=1}^n (b^i)'(0)\frac{\partial}{\partial x_i}\bigg|_p.$$
>>5. Así, $$\alpha'(0)f=\sum_{i=1}^n (b^i)'(0)\frac{\partial f}{\partial x_i}(p).$$
>>6. Por otro lado, $$\alpha(t)f=\sum_{i=1}^n b^i(t)\frac{\partial f}{\partial x_i}(p).$$
>>7. Entonces, $$\frac{d}{dt}\bigg|_{t=0}\alpha(t)f=\frac{d}{dt}\bigg|_{t=0}\sum_{i=1}^n b^i(t)\frac{\partial f}{\partial x_i}(p)=\sum_{i=1}^n (b^i)'(0)\frac{\partial f}{\partial x_i}(p).$$
>>8. Por lo tanto, $$\alpha'(0)(f)=\frac{d}{dt}\bigg|_{t=0}\alpha(t)f.$$

>[!Exercise] Ejercicio 23 del practico
>Sean $M$ una variedad diferenciable, $X,Y\in\mathfrak X(M)$ y sea $p\in M$. Probar que $$t\mapsto(d\theta_{-t})_{\theta_t(p)}(Y_{\theta_t(p)})$$define una curva $C^\infty$ en $T_pM$, donde $\theta_t$ es el flujo local asociado a $X$.
>
>>[!Proof]-
>>[[GS - Pr4#^d6291e]]

>[!Theorem] Derivada de Lie NO FINAL
>Para todo $X,Y\in\mathfrak X(M)$ y para todo $p\in M$, se cumple $$[X,Y]_p=(\mathcal L_XY)_p=\lim_{t\to0}\frac{(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}-Y_p}{t},$$ donde $\theta$ es el flujo de $X$.
>
>>[!Proof]-
>>9. Se calculan ambos lados y se prueba que son iguales.
>>10. Supongamos primero que $X_p\neq0$.
>>11. Por el teorema de rectificación de campos, existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $p$ tal que $$X=\frac{\partial}{\partial x_1}.$$
>>12. Escribimos $$Y=\sum_{j=1}^n a_j\frac{\partial}{\partial x_j},$$ con $a_1,\ldots,a_n$ funciones suaves sobre $U$.
>>13. Entonces $$[X,Y]=\left[\frac{\partial}{\partial x_1},\sum_{j=1}^n a_j\frac{\partial}{\partial x_j}\right]=\sum_{j=1}^n a_j\left[\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_j}\right]+\sum_{j=1}^n \frac{\partial a_j}{\partial x_1}\frac{\partial}{\partial x_j}.$$
>>14. Como los campos coordenados conmutan, $$\left[\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_j}\right]=0.$$
>>15. Por lo tanto, $$[X,Y]_p=\sum_{j=1}^n \frac{\partial a_j}{\partial x_1}(p)\frac{\partial}{\partial x_j}\bigg|_p.$$
>>16. Por otro lado, consideremos la curva suave $$\alpha(t)=(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}\in T_pM.$$
>>17. Queremos calcular $$\alpha'(0)\in T_{\alpha(0)}(T_pM)\simeq T_pM.$$
>>18. Entonces $$\alpha'(0)=\sum_{j=1}^n c_j\frac{\partial}{\partial x_j}\bigg|_p,$$ donde $$c_j=\alpha'(0)(x_j).$$
>>19. Por el lema previo, $$\alpha'(0)(x_j)=\frac{d}{dt}\bigg|_{t=0}\alpha(t)(x_j).$$
>>20. Luego $$\alpha'(0)(x_j)=\frac{d}{dt}\bigg|_{t=0}\left((d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}\right)(x_j).$$
>>21. Por definición de diferencial, $$\left((d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}\right)(x_j)=Y_{\theta_t(p)}(x_j\circ\theta_{-t}).$$
>>22. Como $$Y_{\theta_t(p)}=\sum_{i=1}^n a_i(\theta_t(p))\frac{\partial}{\partial x_i}\bigg|_{\theta_t(p)},$$ tenemos $$Y_{\theta_t(p)}(x_j\circ\theta_{-t})=\sum_{i=1}^n a_i(\theta_t(p))\frac{\partial}{\partial x_i}\bigg|_{\theta_t(p)}(x_j\circ\theta_{-t}).$$
>>23. En estas coordenadas, como $X=\frac{\partial}{\partial x_1}$, el flujo satisface $$x_j\circ\theta_{-t}=x_j-t\delta_{1j}.$$
>>24. Por lo tanto, $$\frac{\partial}{\partial x_i}\bigg|_{\theta_t(p)}(x_j\circ\theta_{-t})=\delta_{ij}.$$
>>25. Así, $$Y_{\theta_t(p)}(x_j\circ\theta_{-t})=a_j(\theta_t(p)).$$
>>26. Entonces $$\alpha'(0)(x_j)=\frac{d}{dt}\bigg|_{t=0}a_j(\theta_t(p))=X_pa_j=\frac{\partial a_j}{\partial x_1}(p).$$
>>27. Por lo tanto, $$\alpha'(0)=\sum_{j=1}^n \frac{\partial a_j}{\partial x_1}(p)\frac{\partial}{\partial x_j}\bigg|_p=[X,Y]_p.$$
>>28. Ahora supongamos que $X_p=0$.
>>29. En este caso, la curva integral de $X$ que parte de $p$ es constante, luego $$\theta_t(p)=p.$$
>>30. Entonces la curva queda $$\alpha(t)=(d\theta_{-t})_pY_p.$$
>>31. Para toda $f\in C^\infty(M)$, $$\alpha'(0)(f)=\frac{d}{dt}\bigg|_{t=0}\alpha(t)(f)=\frac{d}{dt}\bigg|_{t=0}Y_p(f\circ\theta_{-t}).$$
>>32. Como $Y_p$ es una derivación fija, $$\alpha'(0)(f)=Y_p\left(\frac{d}{dt}\bigg|_{t=0}f\circ\theta_{-t}\right).$$
>>33. Pero $$\frac{d}{dt}\bigg|_{t=0}f(\theta_{-t}(q))=-X_qf.$$
>>34. Es decir, $$\frac{d}{dt}\bigg|_{t=0}f\circ\theta_{-t}=-Xf.$$
>>35. Por lo tanto, $$\alpha'(0)(f)=-Y_p(Xf).$$
>>36. Como $X_p=0$, también $$[X,Y]_pf=X_p(Yf)-Y_p(Xf)=-Y_p(Xf).$$
>>37. Así, $$\alpha'(0)(f)=[X,Y]_pf.$$
>>38. Como esto vale para toda $f\in C^\infty(M)$, concluimos que $$\alpha'(0)=[X,Y]_p.$$
>>39. Por lo tanto, $$(\mathcal L_XY)_p=[X,Y]_p.$$

>[!Definition] Corchete de Lie mediante el flujo
>Sean $X,Y\in\mathfrak X(M)$, y sea $\theta$ el flujo local de $X$. Para $p\in M$, consideramos la curva
>$$t\mapsto(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}$$
>en $T_pM$. Su derivada en $t=0$ es el corchete:
>$$[X,Y]_p=\left.\frac{d}{dt}\right|_{0}(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}.$$
>Esto se puede pensar como que empujamos $Y$ por el flujo de $X$ y vemos cómo cambia infinitesimalmente.

## Lema de uniformidad conjunta para dos flujos

>[!Lemma] Uniformidad conjunta para dos flujos
>Sean $X$ e $Y$ dos campos en una variedad $M$, y sean $\theta$ y $\phi$ sus respectivos flujos. Para todo $p\in M$ existen un entorno abierto $U$ en $M$ de $p$ y $\delta>0$ tal que $\theta_s\circ\phi_t$ y $\phi_t\circ\theta_s$ están definidos en $U$ para $|s|<\delta$ y $|t|<\delta$.
>
>>[!Proof]-
>>1. Usemos uniformidad para cada uno de $X$ e $Y$.
>>2. Existen abiertos $V_0$ y $W_0$ de $M$ en $p$, y $\varepsilon_1,\varepsilon_2>0$, tales que
>>$$(-\varepsilon_1,\varepsilon_1)\times V_0\subset\mathcal D_\theta,$$
>>$$(-\varepsilon_2,\varepsilon_2)\times W_0\subset\mathcal D_\phi.$$
>>3. Por tanto están bien definidos
>>$$\theta:(-\varepsilon_1,\varepsilon_1)\times V_0\to M,$$
>>$$\phi:(-\varepsilon_2,\varepsilon_2)\times W_0\to M.$$
>>4. Después vamos a querer hacer $\theta_s\circ\phi_t$ en cierto abierto de $p$. En particular $\phi_t(q)$ debe poder evaluarse en $\theta_s$.
>>5. Como también $\theta_s(q)$ debe poder evaluarse en $\phi_t$, pensamos en los abiertos de $\mathbb R\times M$:
>>$$\theta^{-1}(V_0),\qquad \phi^{-1}(W_0).$$
>>6. Como $\mathbb R\times M$ tiene la topología producto, existe $\delta>0$ y un abierto $U$ de $p$ tal que
>>$$(-\delta,\delta)\times U\subset \theta^{-1}(W_0)\cap\phi^{-1}(V_0),$$
>>con $\delta<\varepsilon_1,\varepsilon_2$.
>>7. Resta ver que $\delta$ y $U$ cumplen lo que queremos.
>>8. Sean $s,t\in(-\delta,\delta)$ y $q\in U$.
>>9. Tenemos $(t,q)\in(-\varepsilon_2,\varepsilon_2)\times W_0$, por tanto $\phi_t(q)$ está definido.
>>10. Además, como $(t,q)\in\phi^{-1}(V_0)$, se tiene $\phi_t(q)\in V_0$.
>>11. Como $s\in(-\varepsilon_1,\varepsilon_1)$ y $\phi_t(q)\in V_0$, podemos evaluar $\theta_s(\phi_t(q))$.
>>12. Similarmente, $(s,q)\in\theta^{-1}(W_0)$ implica $\theta_s(q)\in W_0$, y entonces $\phi_t(\theta_s(q))$ también está definido.

^39cc9a

>[!Proposition] Criterio de conmutación de flujos (Hulet 9.15) 
>Sean $X,Y\in\mathfrak X(M)$ tales que $[X,Y]=0$ y sean $\theta,\phi$ los flujos respectivos. Dado $p\in M$, sean $U$ y $\delta$ los del [[GS - Teo19#^39cc9a]]. Entonces:
>- **(i)** $(d\theta_s)_qY_q=Y_{\theta_s(q)}$ con $q\in U$ para $s\in(-\delta,\delta)$.
>- **(ii)** $\theta_t\circ\phi_s=\phi_s\circ\theta_t$ en $U$ para $t,s\in(-\delta,\delta)$.
>
>>[!Proof]-
>>- (i)
>>	1. Recordemos la fórmula $$[X,Y](p)=\frac{d}{dt}\Big|_{t=0}(d\theta_{-t})_{\theta_t(p)}\big(Y_{\theta_t(p)}\big),\qquad p\in M.$$
>>	2. Notar que probar $(i)$ equivale a probar que $$Y_p=(d\theta_{-s})_{\theta_s(p)}\big(Y_{\theta_s(p)}\big),\qquad \forall s\in (-\delta ,\delta),\forall p\in U$$
>>	3. En otras palabras, para probar $(i)$ debemos ver que, para cada $p$, la curva $$z(s)=(d\theta_{-s})_{\theta_s(p)}\big(Y_{\theta_s(p)}\big)$$es constantemente  igual a $Y_p$.
>>	4. Calculamos $z'(s)$. Por definición, $$z'(s)=\frac{d}{dt}\Big|_{t=0}z(t+s).$$
>>	5. Ahora, $$z(t+s)=(d\theta_{-(t+s)})_{\theta_{t+s}(p)}\big(Y_{\theta_{t+s}(p)}\big).$$
>>	6. Como $$\theta_{t+s}(p)=\theta_t(\theta_s(p))$$y $$\theta_{-(t+s)}=\theta_{-s}\circ\theta_{-t},$$por la regla de la cadena obtenemos $$z(t+s)=(d\theta_{-s})_{\theta_s(p)}\left((d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)\right).$$
>>	7. Por lo tanto, $$z'(s)=\frac{d}{dt}\Big|_{t=0}(d\theta_{-s})_{\theta_s(p)}\left((d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)\right).$$
>>	8. Como $(d\theta_{-s})_{\theta_s(p)}$ es lineal y no depende de $t$, $$z'(s)=(d\theta_{-s})_{\theta_s(p)}\left(\frac{d}{dt}\Big|_{t=0}(d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)\right).$$
>>	9. Por la fórmula del corchete aplicada al punto $\theta_s(p)$, $$\frac{d}{dt}\Big|_{t=0}(d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)=[X,Y]_{\theta_s(p)}.$$
>>	10. Luego $$z'(s)=(d\theta_{-s})_{\theta_s(p)}\big([X,Y]_{\theta_s(p)}\big).$$
>>	11. Como $[X,Y]=0$, concluimos que $$z'(s)=0,\qquad \forall s\in (-\delta ,\delta )$$ osea $z(s)$ es constante
>>	12. Además, $$z(0)=(d\theta_0)_p(Y_p)=Y_p.$$
>>	13. Por lo tanto, $$z(s)=Y_p,\qquad \forall s,$$es decir, $$(d\theta_{-t})_{\theta_t(p)}\big(Y_{\theta_t(p)}\big)=Y_p.$$
>>	14. Aplicando $(d\theta_t)_p$ a ambos lados, obtenemos
>>$$(d\theta_t)_p(Y_p)=Y_{\theta_t(p)}.$$
>>15. **(ii)** Ahora fijemos $t$ y $q$. Consideramos
>>$$\alpha(s)=\theta_t(\phi_s(q)),$$
>>$$\beta(s)=\phi_s(\theta_t(q)).$$
>>16. Tenemos
>>$$\alpha(0)=\theta_t(q)=\beta(0).$$
>>17. Además,
>>$$\alpha'(s)=(d\theta_t)_{\phi_s(q)}Y_{\phi_s(q)}=Y_{\theta_t(\phi_s(q))}=Y_{\alpha(s)},$$
>>donde usamos **(i)**.
>>18. Por otro lado,
>>$$\beta'(s)=Y_{\phi_s(\theta_t(q))}=Y_{\beta(s)}.$$
>>19. Entonces $\alpha$ y $\beta$ son curvas integrales de $Y$ con el mismo dato inicial.
>>20. Por unicidad,
>>$$\theta_t(\phi_s(q))=\phi_s(\theta_t(q)).$$

^26db5d

>[!Proposition] (Hulet 9.16) 
>Sean $X,Y\in\mathfrak{X}(M)$, cuyos flujos conmutan. Entonces $$[X,Y]=0.$$
>
>>[!Proof]-
>>1. Sean $\theta$ y $\phi$ los flujos de $X$ e $Y$, respectivamente. Fijemos $p\in M$. Por el lema de uniformidad conjunta de los flujos, existen un abierto $U$ que contiene a $p$ y $\delta>0$ tales que, para $|s|,|t|<\delta$, las composiciones $\theta_t\circ\phi_s$ y $\phi_s\circ\theta_t$ están definidas en $U$.
>>2. Como los flujos conmutan, para $|s|,|t|<\delta$ se cumple $$\theta_t(\phi_s(p))=\phi_s(\theta_t(p)).$$
>>3. Derivando respecto de $s$ en $s=0$, obtenemos $$(d\theta_{t})_{p }(Y_{p})=(d\theta_t)_{\phi_{0}(p)}\left(\frac{d}{ds}\bigg|_{s=0}\phi_s(p)\right)=\frac{d}{ds}\bigg|_{s=0}\theta_{t}(\phi_{s}(p))=\frac{d}{ds}\bigg|_{s=0}\phi_s(\theta_t(p))=Y_{\theta_{t}(p)}$$
>>4. Aplicamos $(d\theta_{-t})_{\theta_t(p)}$ a ambos lados. Entonces $$\begin{aligned}(d\theta_{-t})_{\theta_t(p)}\left((d\theta_t)_p(Y_p)\right)&=(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right),\\d(\theta_{-t}\circ\theta_t)_p(Y_p)&=(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right),\\Y_p&=(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right).\end{aligned}$$
>>5. Por lo tanto, la curva $$t\mapsto(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right)$$ es constante para $|t|<\delta$.
>>6. Usando la fórmula del corchete en términos del flujo de $X$, $$[X,Y]_p=\frac{d}{dt}\bigg|_{t=0}(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right)=0.$$
>>7. Como $p\in M$ era arbitrario, concluimos que $$[X,Y]=0.$$

>[!Remark]
>Recordar que si $\frac{\partial}{\partial x_i}$ y $\frac{\partial}{\partial x_j}$ son los campos de un marco coordenado, entonces
>$$\left[\frac{\partial}{\partial x_i},\frac{\partial}{\partial x_j}\right]=0.$$
>Por tanto, si queremos rectificar dos campos $X,Y$ necesitamos como hipótesis $[X,Y]=0$. Por que si pudieramos rectificarlos entonces $$[X,Y]=\left[\frac{\partial}{\partial x_i},\frac{\partial}{\partial x_j}\right]=0$$  

>[!Proposition] Rectificación simultánea (Hulet 9.18) 
>Sean $X_1,\ldots,X_k\in\mathfrak X(M)$ linealmente independientes en un abierto de $M$ en $p$ tales que $$[X_{i},X_{j}]=0\quad 1\leq i,j\leq k$$
>Entonces existe un sistema coordenado $(U,\varphi=(x_1,\ldots,x_n))$ centrado en $p$ tal que
>$$X_1|_U=\frac{\partial}{\partial x_1},\ldots,\qquad X_k|_U=\frac{\partial}{\partial x_k}$$
>
>>[!Proof]-
>>8. Por [[GS - Teo19#^39cc9a]]. Existe $\varepsilon>0$ y un abierto $V$ de $p$ tal que la composición
>>$$\theta^{1}_{t_1}\circ\cdots\circ\theta^k_{t_k}$$
>>está bien definida sobre $V$ para todos $t_1,\ldots,t_k\in(-\varepsilon,\varepsilon)$.
>>9. Como los campos son linealmente independientes. Achicando $V$ si hace falta, tomamos una carta cúbica centrada en $p$, $$(V,\psi=(x_1,\ldots,x_n)),$$tal que $$\left.\frac{\partial}{\partial x_i}\right|_p=X_i|_p,\qquad i=1,\ldots,k.$$ por [[GS - Teo18#^047506]]
>>10. Nos enfocamos en la rebanada $$R=\{(r_1,\ldots,r_n)\in C_{\epsilon}^{n} (0):r_1=\cdots=r_k=0\}\simeq C_{\epsilon}^{n-k} (0)\subseteq \psi(V)$$que tiene dimensión $n-k$.
>>11. Armamos el mapa $$\sigma:(-\varepsilon,\varepsilon)^k\times C_{\epsilon}^{n-k}\subseteq \mathbb{R}^{n}  \to M$$por $$\sigma(t_1,\ldots,t_k,r^{k+1},\ldots,r^{n}  )=\theta^1_{t_1}\circ\cdots\circ\theta^k_{t_k}(\psi^{-1}(0,\ldots 0,r^{k+1},\ldots,r^{n}  )).$$ Notar que esto este bien definido por que al ser carta cubica $\psi ^{-1}(0,\ldots,0,r^{k+1},\ldots r^{n})$ cae en $V$ 
>>12. Como en la vez anterior, vamos a ver que $\sigma$ es un difeomorfismo entre un abierto de $\mathbb{R}^n$ y un abierto de $M$ que contiene a $p$, mostrando que $$(d\sigma)_0\left(\left.\frac{\partial}{\partial r^i}\right|_0\right)=\begin{cases} X_i|_p, & i=1,\ldots,k,\\[4pt] \left.\dfrac{\partial}{\partial x^i}\right|_p, & i>k.\end{cases}$$
>>13. En efecto, si $i\leq k$, $$\begin{aligned}(d\sigma)_0\left(\left.\frac{\partial}{\partial t^i}\right|_0\right)&=\left.\frac{d}{ds}\right|_{s=0}\sigma(se_i)\\&=\left.\frac{d}{ds}\right|_{s=0}\sigma(0,\ldots,0,s,0,\ldots,0)\\&=\left.\frac{d}{ds}\right|_{s=0}\left(\theta^{1}_{0}\circ\cdots\circ\theta^{i}_{s}\circ\cdots\circ\theta^{k}_{0}\right)\left(\psi^{-1}(0,\ldots,0)\right)\\&=\left.\frac{d}{ds}\right|_{s=0}\theta^{i}_{s}(p)\\&=X_i|_p\end{aligned}$$
>>14. Si $i>k$, $$\begin{aligned}(d\sigma)_0\left(\left.\frac{\partial}{\partial r^i}\right|_0\right)&=\left.\frac{d}{ds}\right|_{s=0}\sigma(se_i)\\&=\left.\frac{d}{ds}\right|_{s=0}\sigma(0,\ldots,0,s,0,\ldots,0)\\&=\left.\frac{d}{ds}\right|_{s=0}(\theta^{1}_{0}\circ\cdots\circ\theta^{k}_{0})(\psi^{-1}(0,\ldots,0,s,0,\ldots,0)\\&=\left.\frac{d}{ds}\right|_{s=0}\psi^{-1}(0,\ldots,0,s,0,\ldots,0)\\&=(d\psi^{-1})_0\left(\left.\frac{\partial}{\partial r^i}\right|_0\right)\\&=\left.\frac{\partial}{\partial x^i}\right|_p\end{aligned}$$ este ultimo igual sale rapido escribiendo a $(d\psi^{-1})_0\left(\left.\frac{\partial}{\partial r^i}\right|_0\right)$ en coordenadas del $T_{\phi ^{-1}(0)}M$ 
>>15. Ahora notamos que por paso 2. $$\left\{ X_{1}|_{p},\ldots,X_{k}|_{p},\frac{\partial}{\partial x^{k+1}}\bigg|_{p},\ldots, \frac{\partial}{\partial x^{n}}|_{p}\right\}=\left\{ \frac{\partial}{\partial x^{n}}\bigg|_{p},\ldots, \frac{\partial}{\partial x^{k}}\bigg|_{p} , \frac{\partial}{\partial x^{k+1}}|_{p}\ldots\frac{\partial}{\partial x^{n}}\bigg|_{p} \right\}$$
>>16. Entonces $(d\sigma)_{0}$ es isomorfismo lineal por que manda base $\{ \frac{\partial}{\partial r_{i}} \}_{i<n}$ (notar aca llamo $t_{i}:=r^{i}$ es solo notacion para cordenadas en $\mathbb{R}$) en una base $\{ \frac{\partial}{\partial x^{n}}|_{p},\ldots, \frac{\partial}{\partial x^{k}}|_{p} , \frac{\partial}{\partial x^{k+1}}|_{p}\ldots\frac{\partial}{\partial x^{n}}|_{p} \}$ 
>>17. Estamos entonces en condiciones de aplicar el Teorema de la Función Inversa. Existe un abierto $\widetilde U\subseteq\mathbb{R}^n$ que contiene a $0$ y un abierto $U\subseteq M$ que contiene a $p$ tales que $$\sigma|_{\widetilde U}:\widetilde U\longrightarrow U$$es un difeomorfismo.
>>18. Como $\sigma$ es un difeomorfismo entre $\widetilde U$ y $U$, llamamos $\sigma^{-1}=\varphi$, de modo que $(U,\varphi=y^{1},\ldots,y^{i})$ es una carta coordenada.
>>19. Recordamos nuestro objetivo es probar que $$X_i|_U=\frac{\partial}{\partial y^i},\qquad i=1,\ldots,k.$$
>>20. Equivalentemente, queremos ver que para todo $(r^1,\ldots,r^n)\in\widetilde U$, e $1\leq i\leq k$  $$(d\sigma)_{(r^1,\ldots,r^n)}\left(\left.\frac{\partial}{\partial r^i}\right|_{(r^1,\ldots,r^n)}\right)=(X_i)_{\sigma(r^1,\ldots,r^n)}.$$ por que si esto es cierto usamos que $$(d\sigma)_{(r^1,\ldots,r^n)}\left(\left.\frac{\partial}{\partial r^i}\right|_{(r^1,\ldots,r^n)}\right)=(d\varphi ^{-1})_{(r^1,\ldots,r^n)}\left(\left.\frac{\partial}{\partial r^i}\right|_{(r^1,\ldots,r^n)}\right)=\frac{\partial}{\partial y^{i} }\bigg|_{\varphi ^{-1}(r)=\sigma(r)}$$
>>21. Primero notemos que, como $$[X_i,X_j]=0$$los flujos conmutan localmente por [[GS - Teo19#^26db5d]]
>>22. Fijemos $1\leq i\leq k$. Entonces $$\begin{aligned}(d\sigma)_{(r^1,\ldots,r^n)}\left(\left.\frac{\partial}{\partial r^i}\right|_{(r^1,\ldots,r^n)}\right)&=\left.\frac{d}{ds}\right|_{s=0}\sigma(r^1,\ldots,r^i+s,\ldots,r^n)\\&=\left.\frac{d}{ds}\right|_{s=0}\left(\theta^{1} _{r^1}\circ\cdots\circ\theta^{i} _{r^i+s}\circ\cdots\circ\theta_{k,r^k}\right)\left(\psi^{-1}(0,\ldots,0,r^{k+1},\ldots,r^n)\right)\\&=\left.\frac{d}{ds}\right|_{s=0}\left(\theta^{1} _{r^1}\circ\cdots\circ\theta^{i} _{r^i}\circ\theta^{i} _{s}\circ\cdots\circ\theta^{k} _{r^k}\right)\left(\psi^{-1}(0,\ldots,0,r^{k+1},\ldots,r^n)\right)\\&=\left.\frac{d}{ds}\right|_{s=0}\theta^{i} _{s}\left(\sigma(r^1,\ldots,r^n)\right)\\&=(X_i)_{\sigma(r^1,\ldots,r^n)}.\end{aligned}$$ donde usamos que los flujos conmutan
