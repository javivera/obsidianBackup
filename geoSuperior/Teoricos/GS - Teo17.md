>[!Theorem]
>Sea $X\in\mathfrak X(M)$ y sea $\theta:\mathcal D\subseteq\mathbb R\times M\to M$ su flujo. Entonces:
>
>- **(i)** $\bigcup_{t>0}D_t=M$.
>
>- **(ii)** Dados $s,t\in\mathbb R$, entonces $\operatorname{Dom}(\theta_t\circ\theta_s)\subseteq D_{t+s}$. Si $s$ y $t$ tienen el mismo signo, entonces $\operatorname{Dom}(\theta_t\circ\theta_s)=D_{t+s}$.
>
>- **(iii)** Para todo $p\in\operatorname{Dom}(\theta_s\circ\theta_t)$ se cumple $$\theta_s\circ\theta_t(p)=\theta_{s+t}(p).$$
>
>- **(iv)** La función $$\theta_t:D_t\to D_{-t}$$ es un difeomorfismo, con inversa $\theta_{-t}$.
>
>>[!Proof]-
>>- **(i)**
>>1. Dado $p\in M$ arbitrario, por [[GS - Teo16#^3ff110|Existencia y unicidad de las curvas integrales]] sabemos que existe una curva integral que comienza en $p$ definida en algún intervalo maximal $(a(p),b(p))$.
>>2. Como dicho intervalo contiene al $0$. Tomamos algun $t\in(0,\epsilon)\subseteq (a(p),b(p))$. Entonces $p\in D_t$
>>3. Como $p$ era arbitrario, se concluye que todo punto de $M$ pertenece a algún $D_t$ con $t>0$. $$\bigcup_{t>0}D_t=M$$ (Notar que claramente $D_{t}\subseteq M$ para cualquier $t$ por eso vale trivialmente la otra inclusion)
>>- **(ii)**
>>1. Sea $p\in\operatorname{Dom}(\theta_t\circ\theta_s)$. Esto significa que $p\in D_s$
>>2. Luego esta bien definida $\theta_{s}(p)$ y ademas $q=\theta_s(p)\in D_t$.
>>3. Luego por definicion $q=\gamma_p(s)$
>>4. Por la observación sobre traslación de curvas integrales maximales, la curva integral maximal que comienza en $q$ satisface $$(a(q),b(q))=(a(p)-s,b(p)-s)$$
>>5. Como $q\in D_t$, se tiene $t\in(a(q),b(q))$.
>>6. Usando la igualdad de intervalos, esto equivale a $$t+s\in(a(p),b(p))$$
>>7. Por lo tanto $p\in D_{t+s}$, y se obtiene $$\operatorname{Dom}(\theta_t\circ\theta_s)\subseteq D_{t+s}$$
>>8. Ahora supongamos que $s,t>0$ y sea $p\in D_{s+t}$.
>>9. Entonces $s+t\in(a(p),b(p))$ y, como $0<s<s+t$, también $s\in(a(p),b(p))$. $$p\in D_s$$
>>10. Si $q=\theta_s(p)=\gamma_p(s)$, entonces la curva integral maximal que comienza en $q$ tiene dominio $$(a(q),b(q))=(a(p)-s,b(p)-s)$$
>>11. Como $s+t\in(a(p),b(p))$, se obtiene $t\in(a(q),b(q))$. $$q\in D_t$$
>>12. Luego $p\in\operatorname{Dom}(\Theta_t\circ\Theta_s)$.
>>13. Por lo tanto, si $s,t>0$, se cumple $$\operatorname{Dom}(\theta_t\circ\theta_s)=D_{t+s}$$
>>14. El caso $s,t<0$ se prueba de manera análoga, usando que $s+t<s<0$ y la misma traslación del dominio maximal.
>>- **(iii)**
>>1. Sea $p\in\operatorname{Dom}(\theta_s\circ\theta_t)$ y sea $q=\theta_t(p)$.
>>2. Entonces $q=\gamma_p(t)$, y por la descripción de la curva maximal que comienza en $q$, $$\gamma_q(s)=\gamma_p(t+s)$$
>>3. Por lo tanto, $$\theta_s(\theta_t(p))=\theta_s(q)=\gamma_q(s)=\gamma_p(t+s)=\theta_{s+t}(p)$$
>>4. Concluimos que $$\theta_s\circ\theta_t(p)=\theta_{s+t}(p)$$
>>- **(iv)**
>>1. Veamos primero que $\theta_t(D_t)\subseteq D_{-t}$.
>>2. Sea $p\in D_t$ y sea $q=\theta_t(p)=\gamma_p(t)$.
>>3. Nuevamente, $$(a(q),b(q))=(a(p)-t,b(p)-t)$$
>>4. Como $0\in(a(p),b(p))$, se tiene $-t\in(a(q),b(q))$. $$q\in D_{-t}$$
>>5. Entonces $\theta_t:D_t\to D_{-t}$ está bien definida.
>>6. Además, usando la parte **(iii)**, $$\theta_{-t}(\theta_t(p))=\theta_0(p)=\gamma_{p}(0)=p$$
>>7. Análogamente, para $q\in D_{-t}$, $$\theta_t(\theta_{-t}(q))=\theta_0(q)=\gamma_{q}(0)=q$$
>>8. Así, $\theta_{-t}$ es la inversa de $\theta_t$.
>>9. Veamos que **$\Theta_{t}$ es suave**
>>10. Fijemos $t\in\mathbb R$. Recordemos que el flujo es una aplicación suave $$\Theta:\mathcal D\subseteq\mathbb R\times M\to M$$
>>11. Por definición, $$D_t=\{p\in M:(t,p)\in\mathcal D\}$$ y $\Theta_t:D_t\to M$ está dada por $\Theta_t(p)=\Theta(t,p)$
>>12. Primero observemos que $D_t$ es abierto en $M$. En efecto, si definimos $$\iota_t:M\to\mathbb R\times M$$ por $\iota_t(p)=(t,p)$, entonces $\iota_t$ es continua y $D_t=\iota_t^{-1}(\mathcal D)$.
>>13. Como $\mathcal D$ es abierto, se sigue que $D_t$ es abierto. Con lo cual es subvariedad de $M$
>>14. Ahora consideramos la restricción $$\iota_t|_{D_t}:D_t\to\mathcal D$$dada por $\iota_t|_{D_t}(p)=(t,p)$. Esta aplicación es suave porque es la restricción de una aplicación suave a un abierto dentro de la variedad.
>>15. Para todo $p\in D_t$, tenemos $$\Theta_t(p)=\Theta(t,p)=\Theta\big(\iota_t|_{D_t}(p)\big).$$
>>16. Por lo tanto, $$\Theta_t=\Theta\circ \iota_t|_{D_t}.$$
>>17. Como $\iota_t|_{D_t}$ es suave y $\Theta$ es suave, se concluye que $\Theta_t:D_t\to M$ es suave.
>>18. Además, ya se probó que $\Theta_t(D_t)\subseteq D_{-t}$. Como $D_{-t}$ es un abierto de $M$, la misma aplicación puede verse como $$\Theta_t:D_t\to D_{-t}.$$
>>19. Esta aplicación también es suave como aplicación con codominio $D_{-t}$, porque la suavidad hacia un abierto de $M$ se verifica componiendo con la inclusión $D_{-t}\hookrightarrow M$. Y usando continuidad de $\Theta_{t}$. Además, $D_{-t}$ es una subvariedad incrustada de $M$ por ser un abierto de $M$.
>>20. Por lo tanto, $\Theta_t:D_t\to D_{-t}$ es un difeomorfismo con inversa $\Theta_{-t}$.

^8d50da

## Groundwork de generador infinitesimal

>[!Remark] Observación muy importante
>Cuando $X$ es un campo completo, tenemos $D_t=M$ para todo $t\in\mathbb R$.
>
>En este caso, $\Theta_t:M\to M$ es un difeomorfismo para todo $t\in\mathbb R$ $$\Theta_0=\operatorname{Id}_M, \quad\text{ y además }\quad \Theta_{s+t}=\Theta_s\circ\Theta_t$$
>
>Esto es lindo porque tenemos una acción del grupo aditivo $(\mathbb R,+)$ sobre $M$.
>Dados $t\in\mathbb R$ y $p\in M$, definimos
>$$t\cdot p=\gamma_p(t)=\Theta_t(p)$$
>
>Entonces $0$ actúa como la identidad:
>$$0\cdot p=\Theta_0(p)=p$$
>
>Además,
>$$t\cdot(s\cdot p)=\Theta_t(\Theta_s(p))=\Theta_{t+s}(p)=(t+s)\cdot p$$
>
>Por lo tanto, la aplicación
>$$\rho:(\mathbb R,+)\to(\operatorname{Diff}(M),\circ),\qquad t\mapsto\Theta_t$$
>es un homomorfismo de grupos.

>[!Remark]
>Podemos pensar en el camino contrario. Supongamos que tenemos $$\Theta:\mathbb R\times M\to M$$ una acción suave de $(\mathbb R,+)$ en $M$.
>
>Es decir, $\Theta$ es suave y, si $\Theta_t(p):=\Theta(t,p)$, entonces $$0\cdot p=\Theta_0(p)=p$$
>y $$t\cdot (s\cdot p)=\Theta_t\circ\Theta_s(p)=\Theta_{t+s}(p)=(t+s)\cdot p$$
>¿Será que existe $X\in\mathfrak X(M)$ cuyo flujo sea $\Theta$?
>La respuesta es que sí, y $X$ es llamado el generador infinitesimal de $\Theta$.

## Generador infinitesimal

>[!Proposition] Generador infinitesimal de un flujo global
>Let $\Theta:\mathbb R\times M\to M$ be a smooth global flow on a smooth manifold $M$. The infinitesimal generator $V$ of $\Theta$ is a smooth vector field on $M$, and each curve $\Theta^{(p)}$ is an integral curve of $V$.
>
>En español: si $\Theta$ es un flujo global suave, entonces su generador infinitesimal es un campo vectorial suave, y cada curva $t\mapsto\Theta_t(p)$ es una curva integral de ese campo.
>
>>[!Proof]-
>>1. Hacemos ingeniería inversa. Queremos que la curva
>>$$\gamma_p(t)=\Theta_t(p)$$
>>sea curva integral comenzando en $p$.
>>2. Entonces el valor del campo en $p$ debería ser la velocidad de esta curva en $t=0$.
>>$$V_p=\left.\frac{d}{dt}\right|_{0}\Theta_t(p)$$
>>3. Mas en general para cada $q\in M$, definimos $\Theta^{(q)}:\mathbb R\to M$ por $$\Theta^{(q)}(t)=\Theta(t,q)=\Theta_t(q)$$
>>4. Definimos en general entonces $$V_q=\left.\frac{d}{dt}\right|_{0}\Theta^{(q)}(t)$$
>>5. Veamos que cada curva $\Theta^{(p)}$ es una curva integral de $V$.
>>6. Fijemos $t\in\mathbb R$. Usando la propiedad de flujo,
>>$$\Theta^{(p)}(t+h)=\Theta_{t+h}(p)=\Theta_h(\Theta_t(p))$$
>>7. Por lo tanto,
>>$$\frac{d}{dh}\bigg|_{0}\Theta^{(p)}(t+h)=\frac{d}{dh}\bigg|_{0}\Theta_h(\Theta_t(p))=V_{\Theta_t(p)}$$
>>8. Pero el lado izquierdo es exactamente $(\Theta^{(p)})'(t)$.
>>$$(\Theta^{(p)})'(t)=V_{\Theta_t(p)}$$
>>9. Como $\Theta_t(p)=\Theta^{(p)}(t)$, concluimos que
>>$$(\Theta^{(p)})'(t)=V_{\Theta^{(p)}(t)}$$
>>10. Luego $\Theta^{(p)}$ es una curva integral de $V$.
>>11. Falta ver que $V$ es suave.
>>12. En una carta $(U,\varphi=(x_1,\ldots,x_n))$, escribimos localmente
>>$$V=\sum_{i=1}^n V^i\frac{\partial}{\partial x_i}$$
>>13. Las componentes de $V$ están dadas por derivar en $t=0$ las componentes coordenadas de $\Theta_t(p)$.
>>$$V^i(p)=\left.\frac{d}{dt}\right|_0 x_i(\Theta_t(p))$$
>>14. Como $\Theta$ es suave, la función $(t,p)\mapsto x_i(\Theta_t(p))$ es suave.
>>15. Al derivar una función suave respecto de $t$, evaluando en $t=0$, obtenemos una función suave de $p$.
>>$$V^i\in C^\infty(U)$$
>>16. Entonces todas las componentes locales de $V$ son suaves.
>>17. Por lo tanto, $V$ es un campo vectorial suave.

^906978

## Uniformidad global del tiempo

>[!Lemma] Uniformidad global del tiempo
>Sea $X$ un campo suave sobre una variedad $M$ y sea $\Theta$ su flujo. Supongamos que existe un número positivo $\varepsilon>0$ tal que, para todo $p\in M$, el dominio de $\gamma_p$ contiene a $(-\varepsilon,\varepsilon)$.
>
>Entonces $X$ es un campo completo.
>
>>[!Proof]-
>>1. La idea es que, cuando se intenta acabar una curva integral maximal que comienza en $p$, la estiramos antes de que termine usando el intervalo uniforme $(-\varepsilon,\varepsilon)$, que sirve para todo punto.
>>2. Razonemos por el absurdo. Supongamos que existe $p\in M$ tal que $b(p)<+\infty$. Osea estamos suponiendo que $X$ no es campo completo. (El caso $a(p)>-\infty$ es análogo)
>>3. Elegimos un punto del final de la curva, antes de que se acabe, faltando menos de $\varepsilon$ segundos.
>>4. Tomamos $t_0\in(a(p),b(p))$ tal que
>>$$b(p)-\varepsilon<t_0<b(p)$$
>>5. Pensemos en la curva integral maximal de $q$ $$q=\gamma_p(t_0)$$por hipótesis, está definida al menos en $(-\varepsilon,\varepsilon)$.
>>6. Definimos una curva $\alpha$ pegando $\gamma_p$ con la curva que empieza en $q$:
>>$$\alpha(t)=\begin{cases}\gamma_p(t),&a(p)<t<b(p),\\\gamma_q(t-t_0),&-\varepsilon<t-t_0<\varepsilon.\end{cases}$$
>>7. Primero veamos que está bien definida donde se solapan las dos definiciones.
>>8. Notar que $(a(p),b(p))\cap(t_0-\varepsilon,t_0+\varepsilon)=(t_0-\varepsilon,b(p))$.
>>9. En efecto, como $a(p)<b(p)-\varepsilon$, podemos elegir $t_0$ de modo que $a(p)<t_0-\varepsilon$. Entonces $a(p)<t_0-\varepsilon<b(p)$.
>>10. Por otro lado, como $b(p)-\varepsilon<t_0$, se sigue que $b(p)<t_0+\varepsilon$.
>>11. Por lo tanto, $(a(p),b(p))\cap(t_0-\varepsilon,t_0+\varepsilon)=(t_0-\varepsilon,b(p))$.
>>12. Entonces n el solapamiento osea si $t\in(t_0-\varepsilon,b(p))$, tenemos que $$\gamma_q(t-t_0)=\Theta_{t-t_0}(q)=\Theta_{t-t_0}(\Theta_{t_0}(p))=\Theta_t(p)=\gamma_p(t)$$ por lo tanto, las dos expresiones coinciden en el solapamiento.
>>13. Además, $\alpha$ es curva integral de $X$ y en $t=0$ pasa por $p$.
>>14. Como $b(p)-\varepsilon<t_0$, tenemos $b(p)<t_0+\varepsilon$.
>>15. Entonces $\alpha$ está definida más allá de $b(p)$.
>>16. Esto contradice la maximalidad de $\gamma_p$.
>>17. Luego no puede ocurrir que $b(p)<+\infty$. (Análogamente, no puede ocurrir que $a(p)>-\infty$)
>>18. Por lo tanto, para todo $p\in M$ se cumple
>>$$(a(p),b(p))=\mathbb R$$
>>19. Concluimos que $X$ es completo.

^17fba4

## Campo con soporte compacto es completo

>[!Theorem] Campo con soporte compacto
>Sea $X\in\mathfrak X(M)$ con soporte compacto. Entonces $X$ es completo.
>
>Recordemos que
>$$\operatorname{Sop}X=\operatorname{Cl}_M\{q\in M:X_q\neq0\}$$
>
>>[!Proof]-
>>1. Sea $K=\operatorname{Sop}X$.
>>2. Notemos primero que si $p\notin K$, entonces existe un abierto $V_p$ de $M$ con $p\in V_p$ donde el campo vale cero.
>>3. Es decir, para todo $q\in V_p$,
>>$$X_q=0$$
>>4. Entonces, para todo $q\in V_p$, la curva constante $$\gamma_q:\mathbb R\to M,\qquad \gamma_q(t)=q$$es curva integral maximal de $X$.
>>5. Por lo tanto, los puntos fuera de $K$ no generan ningún problema: sus curvas integrales están definidas para todo tiempo mientras permanezcan fuera del soporte, y en particular tienen tiempo local uniforme.
>>6. Falta ver qué pasa en $K$.
>>7. Por [[GS - Teo16#^3b18e6]], para todo $p\in K$ existe $\varepsilon_p>0$ y existe un abierto $V_p$ de $M$ con $p\in V_p$ tal que, para todo $q\in V_p$, la curva integral que comienza en $q$ está definida en $(-\varepsilon_p,\varepsilon_p)$. Osea $(-\epsilon_{p},\epsilon_{p})\subseteq (a(q),b(q))$ para todo $q\in V_{p}$  
>>8. Con los abiertos $V_p$ podemos cubrir a $K$.
>>9. Como $K$ es compacto, existen $p_1,\ldots,p_s\in K$ tales que
>>$$K\subseteq V_{p_1}\cup\cdots\cup V_{p_s}$$
>>10. Tomamos
>>$$\varepsilon=\min\{\varepsilon_{p_1},\ldots,\varepsilon_{p_s}\}$$
>>11. Entonces, para todo $q\in K$, la curva integral que comienza en $q$ está definida al menos en $(-\varepsilon,\varepsilon)$.
>>12. Por lo tanto, para todo $q\in M$, el dominio de $\gamma_q$ contiene a $(-\varepsilon,\varepsilon)$.
>>13. Por el lema de uniformidad global del tiempo, $X$ es completo.

>[!Lemma] Lema del escape
>Sea $M$ una variedad suave y sea $X\in\mathfrak X(M)$. Sea $p\in M$ tal que la curva integral maximal
>$$\gamma_p:(a(p),b(p))\to M$$
>cumple $b(p)<+\infty$.
>
>Entonces, para todo $t_0\in(a(p),b(p))$, el tramo
>$$\gamma_p([t_0,b(p)))$$
>no puede estar contenido en ningún compacto de $M$.
>
>>[!Proof]-
>>14. Razonemos por el absurdo.
>>15. Supongamos que existe $t_0\in(a(p),b(p))$ y existe un compacto $K\subseteq M$ tal que
>>$$\gamma_p([t_0,b(p)))\subseteq K$$
>>16. Repetimos el argumento del teorema anterior sobre el compacto $K$.
>>17. Por uniformidad local del tiempo, para todo $r\in K$ existe $\varepsilon_r>0$ y existe un abierto $V_r$ de $M$ con $r\in V_r$ tal que, para todo $q\in V_r$, la curva integral que comienza en $q$ está definida en $(-\varepsilon_r,\varepsilon_r)$.
>>18. Los abiertos $V_r$ cubren a $K$.
>>19. Como $K$ es compacto, existen $r_1,\ldots,r_s\in K$ tales que
>>$$K\subseteq V_{r_1}\cup\cdots\cup V_{r_s}$$
>>20. Tomamos
>>$$\varepsilon=\min\{\varepsilon_{r_1},\ldots,\varepsilon_{r_s}\}$$
>>21. Entonces, para todo $q\in K$, la curva integral que comienza en $q$ está definida al menos en $(-\varepsilon,\varepsilon)$.
>>22. Como $b(p)<+\infty$, elegimos $t_1\in[t_{0},b(p))$ suficientemente cerca de $b(p)$, con
>>$$b(p)-\varepsilon<t_1<b(p)$$
>>23. Como $t_1\in[t_0,b(p))$, se tiene $q=\gamma_p(t_1)\in K$
>>24. Por la uniformidad sobre $K$, la curva integral maximal que comienza en $q$ está definida en $(-\varepsilon,\varepsilon)$.
>>25. Definimos
>>$$\alpha(t)=\begin{cases}\gamma_p(t),&a(p)<t<b(p),\\\gamma_q(t-t_1),&-\varepsilon<t-t_1<\varepsilon.\end{cases}$$
>>26. Veamos que las dos definiciones coinciden en el solapamiento.
>>27. Si $t\in(t_1-\varepsilon,b(p))$, entonces
>>$$\gamma_q(t-t_1)=\Theta_{t-t_1}(q)=\Theta_{t-t_1}(\Theta_{t_1}(p))=\Theta_t(p)=\gamma_p(t)$$
>>28. Por lo tanto, $\alpha$ está bien definida.
>>29. Además, $\alpha$ es curva integral de $X$ y extiende a $\gamma_p$.
>>30. Como $b(p)-\varepsilon<t_1$, se tiene $b(p)<t_1+\varepsilon$.
>>31. Entonces $\alpha$ está definida más allá de $b(p)$.
>>32. Esto contradice la maximalidad de $\gamma_p$.
>>33. Por lo tanto, ningún tramo final $\gamma_p([t_0,b(p)))$ puede estar contenido en un compacto de $M$.

^f386fd



