## La diferencial de una función en coordenadas

>[!Proposition] Matriz de la diferencial en coordenadas
>Sean $M$ y $N$ variedades suaves de dimensiones $m$ y $n$, respectivamente, y sea $F:M\to N$ suave. 
>Fijemos $p\in M$, escribamos $q=F(p)$ y tomemos cartas suaves $(U,\varphi=(x_1,\dots,x_m))$ al rededor de $p$ y $(V,\psi=(y_1,\dots,y_n))$ al rededor de $q$ con $F(U)\subseteq V$.
>Si se consideran las bases coordenadas del $T_{p}M$ y $T_{q}N$ respectivamente $$\mathcal B_M=\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\dots,\left.\frac{\partial}{\partial x_m}\right|_p\right\},\qquad\mathcal B_N=\left\{\left.\frac{\partial}{\partial y_1}\right|_q,\dots,\left.\frac{\partial}{\partial y_n}\right|_q\right\}$$
>entonces la matriz de $dF_p:T_pM\to T_qN$ respecto de estas bases es la jacobiana de $$\widehat F:=\psi\circ F\circ\varphi^{-1}:\varphi(U)\subseteq\mathbb R^m\to\mathbb R^n$$
>evaluada en $\varphi(p)$: $$[dF_p]_{\mathcal B_M}^{\mathcal B_N}=J\widehat F(\varphi(p))$$
>>[!Proof]-
>>1. Escribimos $$dF_p\left(\left.\frac{\partial}{\partial x_j}\right|_p\right)=\sum_{i=1}^n c_{ij}\left.\frac{\partial}{\partial y_i}\right|_q$$
>>2. Aplicando ambos lados a la función coordenada $y_i$ se obtiene $$c_{ij}=dF_p\left(\left.\frac{\partial}{\partial x_j}\right|_p\right)(y_i) = \left.\frac{\partial}{\partial x_j}\right|_p(y_i\circ F)$$
>>3. Como $y_i=\pi_i\circ\psi$ resulta $$y_i\circ F=\pi_i\circ\psi\circ F=\pi_i\circ\widehat F\circ\varphi$$y por definición de vector coordenado $$c_{ij}=\left.\frac{\partial}{\partial x_j}\right|_{\varphi(p)}(\pi_i\circ\widehat F)=\frac{\partial \widehat F_i}{\partial x_j}(\varphi(p))$$
>>4. Luego la matriz $(c_{ij})$ coincide exactamente con $J\widehat F(\varphi(p))$.

^bb7fdf

## Vectores tangentes como velocidades de curvas

>[!Definition] Curva suave
>Una función suave
>$$
>\alpha:(a,b)\subseteq\mathbb R\to M
>$$
>se llama **curva suave** en $M$.

>[!Definition] vector tangente a una curva
>Sea $\alpha:(a,b)\to M$ una curva suave y sea $t\in(a,b)$. El vector tangente a $\alpha$ en el instante $t$ es
>$$
>\alpha'(t):=d\alpha_t\left(\left.\frac{\partial}{\partial s}\right|_t\right)\in T_{\alpha(t)}M,
>$$
>donde $(\mathbb R,\operatorname{id}=s)$ es la carta canónica de $\mathbb R$.

^0106aa

>[!Exercise] Curvas y vectores tangentes
>Sea $M$ una variedad diferenciable, $I\subseteq\mathbb R$ un intervalo y $\gamma:I\to M$ una curva diferenciable.
>
>1. Mostrar que efectivamente $\gamma'(t)\in T_{\gamma(t)}M$.
>2. Probar que
>$$
>\gamma'(t)=(d\gamma)_t\left(\left.\frac{\partial}{\partial s}\right|_t\right).
>$$
>3. Si $(U,\varphi=(x_1,\dots,x_n))$ es un sistema coordenado alrededor de $\gamma(0)$ y
>$$
>(\varphi\circ\gamma)(t)=(r_1(t),\dots,r_n(t)),
>$$
>mostrar que
>$$
>\gamma'(0)=\sum_{i=1}^n r_i'(0)\left.\frac{\partial}{\partial x_i}\right|_{\gamma(0)}.
>$$
>4. Mostrar que para todo $p\in M$ y todo $v\in T_pM$ existe una curva suave $\sigma:(-\varepsilon,\varepsilon)\to M$ tal que
>$$
>\sigma(0)=p,\qquad \sigma'(0)=v.
>$$

>[!Corollary] La diferencial lleva velocidades en velocidades
>Sea $F:M\to N$ una función suave, $p\in M$ y $v\in T_pM$. Si $\alpha:(-\varepsilon,\varepsilon)\to M$ es una curva suave con
>$$
>\alpha(0)=p,\qquad \alpha'(0)=v,
>$$
>y definimos $$\beta:=F\circ\alpha$$entonces $$(dF)_p(v)=\beta'(0)$$
>>[!Proof]-
>>1. Por la regla de la cadena $$d(F\circ\alpha)_0=dF)_p\circ(d\alpha)_0$$
>>2. Aplicando ambos lados al vector $\left.\frac{\partial}{\partial s}\right|_0\in T_0\mathbb R$ y usando la definicion [[GS - Teo7#^0106aa]] se obtiene $$\beta'(0)=d(F\circ\alpha)_0\left(\left.\frac{\partial}{\partial s}\right|_0\right)=(dF)_p\left(d\alpha_0\left(\left.\frac{\partial}{\partial s}\right|_0\right)\right)=(dF)_p(v)$$

## El fibrado tangente

>[!Definition] Fibrado tangente
>Sea $M$ una variedad suave. Se define el **fibrado tangente** de $M$, denotado por $TM$, como la unión disjunta de todos los espacios tangentes:
>$$
>TM:=\bigsqcup_{p\in M}T_pM
>=
>\bigcup_{p\in M}\{(p,v):v\in T_pM\}.
>$$
>
>La aplicación
>$$
>\pi:TM\to M,\qquad (p,v)\mapsto p
>$$
>se llama **proyección natural**.

>[!Remark] Notación
>Dado un punto $(p,v)\in TM$, suele escribirse simplemente $v$ en lugar de $(p,v)$ cuando el punto base $p$ está claro por el contexto. O si no $v_{p}$ 

>[!Theorem] $TM$ es una variedad suave
>Si $M$ es una variedad suave de dimensión $n$, entonces $TM$ tiene una topología natural y una estructura suave que lo convierten en una variedad suave de dimensión $2n$. Además, la proyección natural
>$$
>\pi:TM\to M
>$$
>es suave.
>>[!Proof]-
>>1. Primero demos cartas que definan la estructura sobre $TM$ 
>>2. Sea $(U,\varphi=(x_1,\dots,x_n))$ una carta suave de $M$ y sea $$\widetilde U:=\pi^{-1}(U)\subseteq TM$$
>>3. Automaticamente tenemos base de $T_{p}M$ osea dado $v\in T_pM$ con $p\in U$ se escribe de manera única como $$v=\sum_{i=1}^n v_i\left.\frac{\partial}{\partial x_i}\right|_p$$donde $v_i=v(x_i)$.
>>4. Definimos $$\widetilde\varphi:\widetilde U\subseteq TM\to\varphi(U)\times\mathbb R^n\subseteq\mathbb R^{2n}$$por $$\widetilde\varphi(p,v)=\bigl(x_1(p),\dots,x_n(p),v_1,\dots,v_n\bigr)$$ llamada **carta inducida**
>>5. Esta aplicación es biyectiva, y su inversa es $$\widetilde\varphi^{-1}(r_1,\dots,r_n,t_1,\dots,t_n)=\left(\varphi^{-1}(r_1,\dots,r_n),\sum_{i=1}^n t_i\left.\frac{\partial}{\partial x_i}\right|_{\varphi^{-1}(r_1,\dots,r_n)}\right).$$
>>6. Esta claro que estas cartas cubren todo $TM$. Veamos que son compatibles
>>7. Si $(V,\psi=(y_1,\dots,y_n))$ es otra carta de $M$ y $\widetilde\psi$ es la carta inducida en $TM$, y es tal que $\tilde{V}\cap \tilde{U}\neq 0$, luego $V\cap U\neq0$
>>8. Luego$$\tilde{\psi}\circ \tilde{\varphi}^{-1}:\tilde{\varphi}(\tilde{U}\cap \tilde{V}) \subset \mathbb{R}^{2n}\longrightarrow\tilde{\psi}(\tilde{U}\cap \tilde{V}) \subset \mathbb{R}^{2n}$$ que es: $$\begin{align}(r_{1},\ldots r_{n},t_{1},...,t_{n})&\longmapsto^{\tilde{\varphi}^{-1}} \left(\tilde{\varphi}^{-1}(r),\sum_{i=1}^n t_i\left.\frac{\partial}{\partial x_i}\right|_{\varphi^{-1}(r)}\right)\\&\longmapsto^{\tilde{\psi}}(y_{1}(\tilde{\varphi}^{-1}(r)),\ldots,y_{n}(\tilde{\varphi}^{-1}(r),\sum_{i=1}^n t_i\left.\frac{\partial}{\partial x_i}\right|_{\varphi^{-1}(r)}y_{1},\ldots,\sum_{i=1}^n t_i\left.\frac{\partial}{\partial x_i}\right|_{\varphi^{-1}(r)}y_{n}) \\&=\bigg((\psi\circ\varphi ^{-1})(r),\sum_{i=1}^n t_i\left.\frac{\partial}{\partial r_i}\right|_{r}(y_{1}\circ\varphi ^{-1}),\ldots,\sum_{i=1}^n t_i\left.\frac{\partial}{\partial r_i}\right|_{r}(y_{n}\circ\varphi ^{-1})\bigg)\\&=\bigg((\psi\circ\varphi ^{-1})(r),\sum_{i=1}^n t_i\frac{\partial}{\partial r_i}(\psi\circ\varphi ^{-1})_{1}(r),\ldots,\sum_{i=1}^n t_i\frac{\partial}{\partial r_i}(\psi\circ\varphi ^{-1})_{n}(r)\bigg)\end{align}$$    
>>9. Obviamente las primeras coordendas son suaves por que son el cambio de coordenadas, y la segunda tanda de coordenadas cada derivada parcial es suave por que $\psi\circ\varphi ^{-1}$ es suave y proyectar en la primera coordenada es suave entonces son sumas de suaves 
>>10. Por lo tanto, las cartas $\{(\widetilde U,\widetilde\varphi)\}$ forman un atlas suave sobre $TM$, y la dimensión es $2n$.
>>11. La topología sobre $TM$ se toma como la generada por estos dominios coordenados. Con esa topología, $TM$ es Hausdorff y segundo numerable si $M$ lo es.
>>12. Finalmente, la proyección natural es suave porque en coordenadas vale $$\varphi\circ\pi\circ\widetilde\varphi^{-1}(r_1,\dots,r_n,t_1,\dots,t_n)=(r_1,\dots,r_n)$$que es suave.

>[!Remark] Fórmula de los cambios de coordenadas en $TM$
>Si
>$$
>\widetilde\psi\circ\widetilde\varphi^{-1}(r,t)=\bigl(r',t'\bigr),
>$$
>entonces
>$$
>r'=\psi\circ\varphi^{-1}(r),
>\qquad
>t'=J(\psi\circ\varphi^{-1})(r)\,t.
>$$
>Es decir, las coordenadas de base cambian por la función de transición usual, y las coordenadas de la fibra cambian por su jacobiana.

>[!Exercise] Caso de una sola carta
>Si $M$ puede cubrirse con una sola carta suave, entonces
>$$
>TM\cong M\times\mathbb R^n
>$$
>como variedades suaves.

## Diferencial global

>[!Definition] Diferencial global
>Sea $F:M\to N$ una función suave. Se define la **diferencial global** de $F$ como la aplicación
>$$
>dF:TM\to TN,
>$$
>dada por
>$$
>dF(p,v)=\bigl(F(p),(dF)_p(v)\bigr).
>$$
>
>Esta aplicación extiende simultáneamente todas las diferenciales puntuales $(dF)_p$.

>[!Exercise] Suavidad de la diferencial global
>Mostrar que si $F:M\to N$ es suave, entonces
>$$
>dF:TM\to TN
>$$
>también es suave.

>[!Remark] El funtor tangente
>Si $\mathbf{Diff}$ denota la categoría cuyas:
>
>- objetos son las variedades suaves,
>- morfismos son las funciones suaves,
>
>entonces la asignación
>$$
>(M,F)\longmapsto (TM,dF)
>$$
>define un **funtor covariante**
>$$
>T:\mathbf{Diff}\to\mathbf{Diff},
>$$
>llamado **funtor tangente**.

