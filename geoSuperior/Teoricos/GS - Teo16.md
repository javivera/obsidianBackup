
>[!Theorem] Existencia y unicidad de las curvas integrales
>Sea $X \in \mathfrak X(M)$. Entonces, para cada $p \in M$, existen $a(p)\in\{-\infty\}\cup\mathbb R$, $b(p)\in\mathbb R\cup\{+\infty\}$ y una curva suave $\gamma_p:(a(p),b(p))\subset\mathbb R\to M$ tal que:
>- (a) $0\in(a(p),b(p))$ y $\gamma_p(0)=p$.
>- (b)  $\gamma_p$ es curva integral de $X$: $\gamma_p'(t)=X_{\gamma_p(t)}$.
>- (c) Maximalidad: si $\sigma:(c,d)\subset\mathbb R\to M$ es curva suave que cumple 1 y 2, entonces $(c,d)\subset(a(p),b(p))$ y $\sigma(t)=\gamma_p(t)$ para todo $t\in(c,d)$.
>
>En consecuencia, $\gamma_p$ es la unica curva integral que satisface 1, 2 y 3, y es llamada curva integral maximal de $X$ que comienza en $p$.
>>[!Proof]-
>>1. Proponemos $(a(p),b(p))$ como la union de todos los intervalos abiertos que contienen al instante $0$ y que son dominios de curvas integrales de $X$ que en el instante $0$ pasan por $p$ (osea que los dominios de estas curvas son intervalos)  
>>2. Para ver que $(a(p),b(p))$ es no vacio, basta exhibir una curva integral que en $t=0$ pasa por $p$ y que este definida en algun intervalo chiquito de $t=0$.
>>3. Para construir tal curva, basta en hacerlo dentro del dominio de una carta $(U,\varphi=(x_1,\ldots,x_n))$ y bajar el problema a $\mathbb R^n$.
>>4. Necesitamos $\sigma:(-\epsilon,\epsilon)\to U$ tal que $\sigma(0)=p$ y $\sigma'(t)=X_{\sigma(t)}$.
>>5. Luego usando la 3era parte de [[GS - Pr2#^6da36a]] tenemos que si $\widetilde \sigma=\varphi\circ\sigma$ osea $$\widetilde \sigma(t)=(y_1(t),\ldots,y_n(t))$$ entonces $$\sigma'(t)=\sum^{n}_{k=1} y_{k}'(t)\frac{\partial}{\partial x_{k}}\bigg|_{\sigma(k)}$$    
>>6. Por otro lado como $X$ es suave, podemos usar el marco $\big\{ \frac{\partial}{\partial x_{1}},\ldots \frac{\partial}{\partial x_{n}} \big\}$ para expresar $X|_{U}$ como  $$X|_U=\sum_{k=1}^n a_k\frac{\partial}{\partial x_k}$$ con $a_k:U\to\mathbb R$ funciones suaves.
>>7. Entonces $$X_{\sigma(t)}=\sum_{k=1}^n a_k(\sigma(t))\left.\frac{\partial}{\partial x_k}\right|_{\sigma(t)}.$$
>>8. Como queremos $\sigma'(t)=X_{\sigma(t)}$ y que $\sigma(0)=p$, usando coordenadas queda el problema $$\begin{cases}y_1'(t)=a_1(\sigma(t))=a_1\bigl(\varphi^{-1}(y_1(t),\dots,y_n(t))\bigr)=b_1(y_1(t),\dots,y_n(t)),\\\qquad\vdots\\y_n'(t)=a_n(\sigma(t))=a_n\bigl(\varphi^{-1}(y_1(t),\dots,y_n(t))\bigr)=b_n(y_1(t),\dots,y_n(t)),\\\varphi(p)=(y_1(0),\dots,y_n(0)).\end{cases}$$ obs: Aca estamos resolviendo el problema en $\varphi(U)$. El campo en $\varphi(U)$ es $$\widetilde X_{(r_1,\ldots,r_n)}=\sum_{k=1}^n a_k(\varphi^{-1}(r_1,\ldots,r_n))\left.\frac{\partial}{\partial r_k}\right|_{(r_1,\ldots,r_n)}.$$
>>9. por [[GS - Teo15#^81ef7e]], tal problema tiene solucion en el instante $t_0=0$ osea existe un intervalo abierto alrededor de $0$, digamos $(-\epsilon,\epsilon)$, y una curva $$y:(-\epsilon,\epsilon)\to \widetilde{U}\subset\mathbb R^n$$ que resuelve el problema 
>>10. Por tanto $\sigma=\varphi^{-1}\circ y$ es curva integral de $X$ que pasa por $p$ en $t=0$.
>>11. Por lo tanto la union de dominios es no vacio por que $(-\epsilon,\epsilon)$ está en ella 
>>12. Ahora necesitamos definir $$\gamma_p:(a(p),b(p))\to M$$proponemos lo siguiente: Dado $t\in(a(p),b(p))$ arbitrario. Por definicion de $(a(p),b(p))$, existe una curva integral $\alpha:I\subset\mathbb R\to M$ de $X$ que en $t=0$ pasa por $p$ y tal que $t\in I$ con $I$ intervalo abierto del $0$. Luego podemos definir $$\gamma_p(t):=\alpha(t).$$
>>13. Debemos ver la buena definicion de $\gamma_p$: Entonces miremos otra curva $\beta:J\subset\mathbb R\to M$ que es otra curva integral de $X$ que en $t=0$ pasa por $p$ y con $t\in J$ con $J$ intervalo abierto del $0$ 
>>14. Sea $$\Omega=\{s\in I\cap J:\alpha(s)=\beta(s)\}.$$ Vemos que $\Omega=I\cap J$. 
>>15. Como $I,J$ son intervalos abiertos de $0$, entonces $I\cap J$ es un intervalo abierto de $0$, en particular conexo. 
>>16. Primero notamos que $\Omega$ es no vacio pues $0$ está en él ya que $\alpha (0)=p=\beta(0)$  
>>17. **$\Omega$ es cerrado en $I\cap J$:** En efecto, si $(s_m)$ es una sucesión en $\Omega$ tal que $s_m\to s$ con $s\in I\cap J$, entonces $\alpha(s_m)=\beta(s_m)$ para todo $m$. Como $\alpha$ y $\beta$ son continuas, se tiene $\alpha(s_m)\to\alpha(s)$ y $\beta(s_m)\to\beta(s)$. Por lo tanto, $\alpha(s)=\beta(s)$, es decir, $s\in\Omega$. Luego $\Omega$ es cerrado en $I\cap J$.
>>18. **$\Omega$ es abierto en $I\cap J$:** Sea $s_0\in\Omega$. Entonces $\alpha(s_0)=\beta(s_0)=q$. Tomamos una carta $(V,\psi)$ alrededor de $q$. Como $V$ es abierto en $M$ y $\alpha,\beta$ son continuas, el conjunto $$K=(I\cap J)\cap\alpha^{-1}(V)\cap\beta^{-1}(V)$$ es abierto en $I\cap J$ ademas no vacio por que $s_0\in K$, porque $\alpha(s_0)=\beta(s_0)=q\in V$. Por definición de $K$, para todo $s\in K$ se tiene $\alpha(s)\in V$ y $\beta(s)\in V$. Por lo tanto, podemos mirar las curvas coordenadas $\widetilde\alpha=\psi\circ\alpha|_K$ y $\widetilde\beta=\psi\circ\beta|_K$. Como $\alpha$ y $\beta$ son curvas integrales de $X$, las curvas $\widetilde\alpha$ y $\widetilde\beta$ resuelven el mismo sistema local de EDO asociado a $X$ en la carta $(V,\psi)$ (Esto sale de la misma manera que la 1era parte). Además, pasan por el mismo punto en el instante $s_0$, porque $$\widetilde\alpha(s_0)=\psi(\alpha(s_0))=\psi(q)=\psi(\beta(s_0))=\widetilde\beta(s_0).$$ Por unicidad del teorema fundamental de EDO, $\widetilde\alpha$ y $\widetilde\beta$ coinciden en su dominio común, que es $K$. Entonces, para todo $s\in K$, tenemos $$\psi(\alpha(s))=\psi(\beta(s)).$$ Como $\psi$ es inyectiva, se sigue que $\alpha(s)=\beta(s)$ para todo $s\in K$. Por lo tanto, $K\subset\Omega$. Como $K$ es un abierto de $I\cap J$ que contiene a $s_0$, concluimos que $\Omega$ es abierto en $I\cap J$.
>>19. Asi, $\Omega$ es abierto y cerrado en el conexo $I\cap J$, por tanto $\Omega=I\cap J$. En particular, si $t\in I\cap J$, entonces $\alpha(t)=\beta(t)$.
>>20. Luego $\gamma_p$ esta bien definida.
>>21. **$\gamma_p:(a(p),b(p))\to M$ es suave y es curva integral de $X$:** Sea $t\in(a(p),b(p))$. Por definición de $(a(p),b(p))$, existe una curva integral $\alpha:I\to M$ de $X$, con $0\in I$, $\alpha(0)=p$ y $t\in I$.
>>22. Como $I$ es abierto en $\mathbb R$ y $t\in I$, existe un intervalo abierto $J$ tal que $t\in J\subset I\cap(a(p),b(p))$.
>>23. Afirmamos que $\gamma_p|_J=\alpha|_J$. En efecto, si $s\in J$, entonces $s\in I$ y, por la definición de $\gamma_p(s)$, podemos usar la curva integral $\alpha$ para calcular ese valor. Por lo tanto, $\gamma_p(s)=\alpha(s)$.
>>24. Como $\alpha$ es suave, se sigue que $\gamma_p|_J$ es suave.
>>25. Como esto vale para todo $t\in(a(p),b(p))$, la curva $\gamma_p$ es suave.
>>26. Además, como $\gamma_p|_J=\alpha|_J$ y $\alpha$ es curva integral de $X$, para todo $s\in J$ tenemos $\alpha'(s)=X_{\alpha(s)}$.
>>27. Por lo tanto, para todo $s\in J$, $$\gamma_p'(s)=\alpha'(s)=X_{\alpha(s)}=X_{\gamma_p(s)}.$$
>>28. Como $t$ era arbitrario, concluimos que $$\gamma_p'(t)=X_{\gamma_p(t)}$$ para todo $t\in(a(p),b(p))$. Luego $\gamma_p$ es curva integral de $X$.
>>29. También se tiene $\gamma_p(0)=p$, porque si tomamos cualquier curva integral $\alpha:I\to M$ usada en la construcción, entonces $\gamma_p(0)=\alpha(0)=p$.
>>30. **Maximalidad:** Sea $\sigma:(c,d)\to M$ una curva integral de $X$ tal que $0\in(c,d)$ y $\sigma(0)=p$.
>>31. Entonces $(c,d)$ es uno de los intervalos que aparecen en la unión que define $(a(p),b(p))$. Por lo tanto, $$(c,d)\subset(a(p),b(p)).$$
>>32. Además, para todo $t\in(c,d)$, la curva $\sigma$ puede usarse en la definición de $\gamma_p(t)$. Por lo tanto, $$\gamma_p(t)=\sigma(t).$$
>>33. Así, toda curva integral de $X$ que pasa por $p$ en el instante $0$ está contenida en $\gamma_p$ y coincide con $\gamma_p$ en su dominio.
>>34. Por lo tanto, $\gamma_p$ es maximal.
>>35. Finalmente, si hubiese otra curva maximal $\eta:(A,B)\to M$ con $\eta(0)=p$ y $\eta'(t)=X_{\eta(t)}$, entonces por la maximalidad de $\gamma_p$ tendríamos $(A,B)\subset(a(p),b(p))$ y $\eta=\gamma_p$ en $(A,B)$.
>>36. Por la maximalidad de $\eta$, también tendríamos $(a(p),b(p))\subset(A,B)$ y $\gamma_p=\eta$ en $(a(p),b(p))$.
>>37. Luego $$(A,B)=(a(p),b(p))$$ y $$\eta=\gamma_p.$$ Por lo tanto, la curva integral maximal que comienza en $p$ es única.

^3ff110

>[!Corollary] Uniformidad local del tiempo
>Sea $X\in\mathfrak X(M)$. Entonces, para todo $p\in M$, existe un abierto $V_{p}$ de $M$ en $p$ y un $\epsilon>0$ tales que para todo $q\in V$ hay curvas integrales de $X$ que en $t=0$ pasan por $q$ y estan definidas en $(-\epsilon_{p},\epsilon_{p})$.
>Ademas la funcion $$\theta:(-\epsilon_{p},\epsilon_{p})\times V\to M,\qquad (t,q)\mapsto\theta(t,q)=\gamma_q(t)$$ es suave.
>
>En criollo: en el abierto $V$, me puedo mover desde $t=0$ el mismo periodo de tiempo hacia atras o hacia adelante.

^3b18e6

>[!Definition] Flujo maximal
>Sea $X\in\mathfrak X(M)$ un campo vectorial suave. Para cada $p\in M$, sea $\gamma_p:(a(p),b(p))\to M$ la curva integral maximal de $X$ tal que $\gamma_p(0)=p$.
>Definimos el dominio maximal del flujo por $$\mathcal D=\{(t,p)\in\mathbb R\times M:t\in(a(p),b(p))\}.$$
>El flujo maximal de $X$ es la aplicación $$\theta:\mathcal D\to M,\qquad \theta(t,p)=\gamma_p(t).$$
>Equivalentemente, $\theta(t,p)$ es el punto al que llega $p$ después de fluir durante tiempo $t$ siguiendo el campo $X$.

>[!Definition] Flujo global
>Sea $X\in\mathfrak X(M)$ y sea $\theta:\mathcal D\to M$ su flujo maximal. Decimos que el flujo es global si $$\mathcal D=\mathbb R\times M.$$
>Equivalentemente, para todo $p\in M$, la curva integral maximal $\gamma_p$ está definida para todo tiempo real: $$\gamma_p:\mathbb R\to M.$$
>En ese caso, el flujo es una aplicación $$\theta:\mathbb R\times M\to M.$$
>También decimos que $X$ es completo.

>[!Definition] Campo completo
> Un campo $X\in\mathfrak X(M)$ se dice completo si todas las curvas integrales maximales de $X$ estan definidas sobre todo $\mathbb R$.
>
> Equivalentemente, $D_t=M$ para todo $t\in\mathbb R$.

>[!Definition] Mapa de tiempo $t$
>Para cada $t\in\mathbb R$, se define $$D_t=\{p\in M:(t,p)\in\mathcal D\}.$$
>Entonces $D_t$ es el conjunto de puntos cuyas curvas integrales maximales están definidas en tiempo $t$.
>
>El mapa de tiempo $t$ del flujo es $$\theta_t:D_t\to M,\qquad \theta_t(p)=\theta(t,p)=\gamma_p(t).$$

>[!Theorem] Teorema del flujo global maximal
>Sea $X\in\mathfrak X(M)$ un campo vectorial suave, y sea $\mathcal D\subseteq\mathbb R\times M$ el dominio del flujo maximal de $X$. Entonces $\mathcal D$ es un abierto de $\mathbb R\times M$ y el flujo
>$$\theta:\mathcal D\subseteq\mathbb R\times M\to M$$
>es una función suave.
>En particular, para cada $t\in\mathbb R$, el conjunto
>$$\mathcal D_t=\{p\in M:(t,p)\in\mathcal D\}$$
>es un abierto de $M$.

>[!Remark]
>Sea $\gamma_p:(a(p),b(p))\to M$ la curva integral maximal de $X$ que pasa por $p$. Fijemos $q=\gamma_p(t_0)$.
>
>Nos preguntamos quien sera la curva integral maximal que comienza en $q$ osea cual sera la mejor curva que se acomoda a $X$ y que en $t=0$ pasa por $q$ 
>
>Ya tenemos una curva que se acomoda a $X$ solo falta corregir el tiempo 
>
>Proponemos
>$$\sigma(t)=\gamma_p(t+t_0).$$
>Entonces cumple
>$$\sigma(0)=\gamma_p(t_0)=q.$$
>Además,
>$$\sigma'(t)=\gamma_p'(t+t_0)=X_{\gamma_p(t+t_0)}=X_{\sigma(t)}.$$
>Por lo tanto, $\sigma$ es una curva integral de $X$ que comienza en $q$.
>
>Como $\gamma_q$ es la curva integral maximal que comienza en $q$, por unicidad debe coincidir con $\sigma$ en su dominio común. Luego
>$$\gamma_q(t)=\sigma(t)=\gamma_p(t+t_0).$$
>El dominio natural de $\sigma$ es
>$$\{t\in\mathbb R:t+t_0\in(a(p),b(p))\}=(a(p)-t_0,b(p)-t_0).$$
>Por maximalidad, debe estar contenido en el dominio (maximal) de $\gamma_q$. 
>Entonces $(a(p)-t_{0},b(p)-t_{0})\subseteq (a(q),b(q))$ ahora veremos la otra inclusion
>Supongamos que existe $t\in(a(q),b(q))$ tal que $t+t_0\notin(a(p),b(p))$. 
>Definimos una curva trasladada $$\widetilde\gamma(s)=\gamma_q(s-t_0).$$
>Esta curva está definida en $$(a(q)+t_0,b(q)+t_0).$$
>Además, $\widetilde\gamma$ es curva integral de $X$, porque $$\widetilde\gamma'(s)=\gamma_q'(s-t_0)=X_{\gamma_q(s-t_0)}=X_{\widetilde\gamma(s)}.$$
>También tenemos $$\widetilde\gamma(t_0)=\gamma_q(0)=q=\gamma_p(t_0).$$
>Por unicidad de curvas integrales, $\widetilde\gamma$ y $\gamma_p$ coinciden en la componente conexa del dominio común que contiene a $t_0$.  
> Como $\gamma_p$ es maximal, no puede existir una curva integral que la extienda más allá de $(a(p),b(p))$. Por lo tanto, necesariamente $$(a(q)+t_0,b(q)+t_0)\subseteq(a(p),b(p)).$$  
>Restando $t_0$ en todos los términos, obtenemos $$(a(q),b(q))\subseteq(a(p)-t_0,b(p)-t_0).$$
>Entonces $$(a(q),b(q))=(a(p)-t_0,b(p)-t_0).$$
>Con lo cual $\gamma_{p}(t+t_{0})$ es la curva maximal $\gamma_{q}(t)$. Osea a partir de una curva maximal en un punto. Podemos conseguir las curvas maximales (Y sus dominios) en cualquier otro punto dentro de la curva 
