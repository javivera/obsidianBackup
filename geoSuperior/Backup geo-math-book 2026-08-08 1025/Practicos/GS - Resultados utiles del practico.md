
## Practico 3

>[!Exercise]
>Sea $(M,\psi)$ una subvariedad de $N$. Mostrar que si $M$ es compacta, entonces es incrustada.
>
>>[!Proof]-
>>1. Por definición, $\psi:M\to N$ es una inmersión inyectiva. 
>>2. Como $M$ es compacta y $N$ es Hausdorff (por ser variedad), la restricción $$\psi:M\to\psi(M)$$ es una aplicación continua (por que antes de corestringir era suave por lo tanto continua y restriccion de continua es continua) biyectiva.
>>3. Ademas $\psi(M)$ es Hausdorff por ser subespacio de $N$ que es Hausdorff por ser variedad topologica
>>4. Como $\psi$ sale de un compacto y cae a un Hausdorff entonces es cerrada, por que dado un cerrado $C\subseteq M$ como $M$ compacto entonces $C$ es compacto. Luego $\psi(C)\subseteq \psi(M)$ es compacto. Pero como $\psi(M)$ es Hausdorff todo compacto es cerrado, luego $\psi(C)$ es cerrado.
>>5. Luego $\psi$ es biyectiva y cerrado entonces es un homeomorfismo. 
>>6. Por lo tanto $\psi$ es una inmersión que además es homeomorfismo sobre su imagen: es una incrustación.

>[!Exercise]  Ej 9
>Probar que si $F:M\to N$ es una biyección diferenciable y $(dF)_{p}$ no singular en todo punto, entonces $F$ es un difeomorfismo.
>
>>[!Proof]-
>>1. Queremos probar que $F^{-1}:N\to M$ es suave.
>>2. Como la suavidad es local, basta probar que $F^{-1}$ es suave en un entorno de cada punto de $N$.
>>3. Sea $q\in N$. Como $F$ es biyectiva, existe un único $p\in M$ tal que $F(p)=q$.
>>4. Como $(dF)_p$ es no singular (osea es inversible osea es isomorfismo) , por el teorema de la función inversa existen abiertos $U\subset M$ de $p$ y $V\subset N$ de $q$ tales que $$F|_U:U\to V$$ es un difeomorfismo.
>>5. Por lo tanto $$(F|_U)^{-1}:V\to U$$ es suave.
>>6. Como $F$ es biyectiva, para todo $y\in V$ se tiene $F^{-1}(y)=(F|_U)^{-1}(y)$.
>>7. Entonces $$F^{-1}|_V=(F|_U)^{-1}.$$
>>8. Así, $F^{-1}$ es suave en un entorno de $q$. Como $q\in N$ era arbitrario, $F^{-1}$ es suave.
>>9. Como $F$ es ya era continua y suave entonces $F$ es un difeomorfismo.

>[!Exercise] ej10
>- (a) Dar una estructura diferenciable a $T^*M$.
>- (b) Probar que las proyecciones canónicas $\pi:TM\to M$ y $\pi^*:T^*M\to M$ son submersiones.
>
>>[!Proof]-
>>- (a) 
>>	1. Si $(U,x_1,\dots,x_m)$ es una carta de $M$ (de dimension $m$) , toda covector $\alpha_p\in T_p^*M$ se escribe de manera única como $$\alpha_p=\sum_{i=1}^m \xi_i\,(dx_i)_p.$$
>>	2. Definimos entonces la carta inducida $(\widetilde{U},\widetilde{\varphi})$ en $T^*M$ (donde $\tilde{U}=(\pi^{*})^{-1}(U)$ con $(\pi^{*})$ la que manda $(p,v)\mapsto p$ con $v\in T^{*}M$, analogo a [[GS - Teo7#^4762ec]]) por $$\widetilde \varphi:\ (\pi^*)^{-1}(U)\to x(U)\times\mathbb R^m,\qquad \widetilde \varphi(p,\alpha_p)=\bigl(x_1(p),\dots,x_m(p),\xi_1,\dots,\xi_m\bigr).$$ 
>>	3. Esta aplicación es biyectiva, y su inversa es $$\widetilde\varphi^{-1}(r_1,\dots,r_n,t_1,\dots,t_n)=\left(\varphi^{-1}(r_1,\dots,r_n),\sum_{i=1}^m t_i(dx_{i})_{p}\right).$$
>>	4. Esta claro que estas cartas cubren todo $TM$. Veamos que son compatibles
>>	5. Sean $(\tilde{V},\tilde{\psi})$ y $(\tilde{U},\tilde{\varphi})$ dos cartas de $TM^{*}$ asociadas a $(V,\psi=(y_1,\dots,y_n))$ y $(U,\varphi=(x_{1},\ldots x_{n}))$ tales que $\tilde{V}\cap \tilde{U}\neq 0$, luego $V\cap U\neq0$
>>	6. Entonces $$\tilde{\psi}\circ \tilde{\varphi}^{-1}:\tilde{\varphi}(\tilde{U}\cap \tilde{V}) \subset \mathbb{R}^{2m}\longrightarrow\tilde{\psi}(\tilde{U}\cap \tilde{V}) \subset \mathbb{R}^{2m}$$ que es: $$\begin{align}(r_{1},\ldots r_{n},t_{1},...,t_{n})&\longmapsto^{\tilde{\varphi}^{-1}} \left(\tilde{\varphi}^{-1}(r),\sum_{i=1}^m t_i(dx_{i})_{p}\right)\\&\longmapsto^{\tilde{\psi}}\left(y_{1}(\tilde{\varphi}^{-1}(r)),\ldots,y_{n}(\tilde{\varphi}^{-1}(r)),\sum_{i=1}^m t_i(dx_{i})_{p}\left(\frac{\partial}{\partial y_1}\right),\ldots,\sum_{i=1}^m t_i(dx_{i})_{p}\left(\frac{\partial}{\partial y_n}\right)\right)\\&=\left((\psi\circ\varphi^{-1})(r),\sum^{m}_{i=1}t_{i}\left(\frac{\partial}{\partial y_1}\bigg|_{p}\right)x_{i},\ldots\sum^{m}_{i=1}t_{i}\left(\frac{\partial}{\partial y_n}\bigg|_{p}\right)x_{i} \right)\\&=\bigg((\psi\circ\varphi ^{-1})(r),\sum_{i=1}^m t_i\frac{\partial}{\partial r_i}(\varphi\circ\psi ^{-1})_{1}(r),\ldots,\sum_{i=1}^m t_i\frac{\partial}{\partial r_i}(\varphi\circ\psi ^{-1})_{n}(r)\bigg)\end{align}$$
>>	7. Obviamente las primeras coordendas son suaves por que son el cambio de coordenadas, y la segunda tanda de coordenadas cada derivada parcial es suave por que $\psi\circ\varphi ^{-1}$ es suave y proyectar en la primera coordenada es suave entonces son sumas de suaves
>>	8. Y obviamente cambiando los roles obtenemos que la otra composicion es suave tambien
>>	9. Por lo tanto, las cartas $\{(\widetilde U,\widetilde\varphi)\}$ formarian un atlas suave sobre $(TM)^{*}$ de dimensión es $2m$. (Si $\tilde{U},\tilde{V}$ fueran abiertos).
>>	10. Ahora habria que ver toda la parte de abiertos igual que en fibrado tangente
>>- (b)
>>	1. Miremos $$f=\varphi\circ\pi\circ \widetilde{\varphi}^{-1}:\varphi(U)\times\mathbb{R}^{n} \rightarrow \varphi(U)$$ donde $(U,\varphi)$ es carta y $(\widetilde{U},\widetilde \varphi)$ es la carta inducida. y es directo ver que $$f(x_{1}(p),\ldots,x_{m}(p),v_{1},\ldots,v_{m})=(x_{1}(p),\ldots,x_{m}(p))$$ osea es una proyeccion que sabemos que su diferencial es sobreyectiva. Por que te queda la identidad de tamaño $m$ con ceros a la derecha. Y eso tiene rango $m$ que es la misma dimension que la imagen que esta en $\mathbb{R}^{m}$ (por que la variedad es de dimension $m$)   
>>	2. Pero entonces como $df$ es sobre y $d\varphi,(d \widetilde{\varphi})^{-1}$ son isomorfimos (por ser cartas). Podemos concluir que $d\pi$ es sobreyectiva osea es submersion
>>	3. Analogo con $(d\pi)^{*}$ 

>[!Exercise] 
>Sean $\pi:M\to N$ una submersión, $S$ una variedad y $f:S\to M$ una aplicación suave tal que $\pi\circ f:S\to N$ es un difeomorfismo. Probar que $(S,f)$ es una subvariedad incrustada de $M$.
>
>>[!Proof]-
>>1. Sea $h=\pi\circ f$ entonces $r=h^{-1}\circ \pi:M\rightarrow S$ es suave por ser composicion de suaves (como $h$ difeo el dominio de $h^{-1}$ es todo $N$ entonces no estoy cambiando el codominio de $\pi$)
>>2. Ademas $$r\circ f=h^{-1}\circ\pi\circ f=h^{-1}\circ h=Id_{S}$$
>>3. Afirmamos **$f$ es inyectiva**. Dados $f(s_{1})=f(s_{2})$ tenemos que $$s_{1}=r(f(s_{1}))=r(f(s_{2}))=s_{2}$$ (sale usando 2.)
>>4. Tambien por 2. $$d(r\circ f)_{s}=d(Id_{S})_{s}$$
>>5. Primero notemos que $d(Id_{S})_{s}(v)\in T_{s}S$ pero ademas $d(Id_{S})_{s}(v)(f)=v(f\circ Id_{S})=v(f)$  y esto vale para cualqiuer $f$ entonces $d(Id_{S})_{s}(v)=v$. Por lo tanto $d(Id_{S})_{s}=Id_{T_{s}S}$ 
>>6. Ademas por regla de la cadena tenemos $$dr_{f(s)}\circ df_{s}=Id_{T_{s}S}$$
>>7. Entonces podemos ver inyectividad, dados $v_{1},v_{2}\in T_{s}S$ tales que $df_{s}(v_{1})=df_{s}(v_{2})$ tenemos que $$v_{1}=Id_{T_{s}S}(v_{1})=dr_{f(s)}(df_{s}(v_{1}))=dr_{f(s)}(df_{s}(v_{2}))=Id_{T_{s}S}(v_{2})=v_{2}$$ mostrando que $df_{s}$ es inyectiva (para cualquier $s$). Entonces **$f$ es inmersion**
>>8. Con lo cual **$(S,f)$ es subvariedad**.
>>9. Sabemos que $f:S\rightarrow f(S)$ es biyectiva pero por 2.  es directo ver que $$r|_{f(S)}:f(S)\rightarrow S$$ es su inversa y considerando que $f(S)$ tiene la topologia heredada de $M$ y $r:M \rightarrow S$ es continua entonces $r|_{f(S)}$ es continua
>>10. Por lo tanto $f:S\rightarrow f(S)$ es homeomorfismo si $f(S)$ tiene la topologia heredada de $M$
>>11. Entonces $(S,f)$ es subvariedad **incrustada** de $M$ 

>[!Remark]
>Si una curva $f: M \rightarrow N$ es consante entonces $df_{p}=0$ para todo $p\in M$
>>[!Proof]
>>1. Sea $f(t)=q_{0}$ 
>>2. Tomamos $\gamma:\mathbb{R} \rightarrow M$ tal que $\gamma(0)=p$ y $\gamma'(0)=v$ entonces    $$df_{p}(v)=(f\circ\gamma)'(0)=0$$ por que $f\circ\gamma(t)\equiv q_{0}$     

>[!Exercise] Ejercicio 15 
>De la teoría se conoce la siguiente proposición:  
>>Sea $(M,\psi)$ una subvariedad de $N$. Si $M$ es incrustada y $\psi(M)$ es cerrado en $N$, entonces para toda $g\in C^\infty(M)$ existe $f\in C^\infty(N)$ tal que $f\circ \psi=g$.  
>
>Probar que la proposición no es verdadera si quitamos la hipótesis que $\psi$ es una incrustación o la hipótesis que $\psi(M)$ es cerrado en $N$.
>
>>[!Proof]-
>>- **Si quitamos la hipótesis de incrustación.** 
>>	1. Tomemos la inmersión densa del ejercicio 13, $$\psi:\mathbb R\to T^2.$$
>>	2. Sea $g:\mathbb R\to\mathbb R$, $g(t)=t$. Si existiera $f\in C^\infty(T^2)$ con $f\circ\psi=g$, entonces $g$ sería acotada porque $f$ lo es en el compacto $T^2$ (por ser continua). Pero $g(t)=t$ es no acotada. Contradicción.
>>
>>- **Otra posibilidad usando el ocho que no es incrustacion.**
>>	1. Consideremos la inmersión inyectiva  $$\psi:(0,2\pi)\longrightarrow\mathbb R^2,\qquad \psi(t)=\left(\frac{\sin(2t)}2,\sin t\right).$$Su imagen es el ocho del [[GS - Pr3#^165150]]. 
>>	2. Extendamos la misma fórmula a una función $\overline\psi:[0,2\pi]\to\mathbb R^2$. Los valores correspondientes a los extremos son $$\overline\psi(0)=\overline\psi(2\pi)=(0,0)=\psi(\pi).$$
>>	3. Por lo tanto, $\psi((0,2\pi))=\overline\psi([0,2\pi])$. En consecuencia, $\psi((0,2\pi))$ es compacta y, en particular, cerrada en $\mathbb R^2$.
>>	4. Sin embargo, $\psi$ no es una incrustación. En efecto, si $$t_n=2\pi-\frac1n,$$entonces $\psi(t_n)\to(0,0)=\psi(\pi)$, pero $t_n\not\to\pi$. Luego la inversa de $\psi$ sobre su imagen no es continua.
>>	5. Tomemos ahora la función suave $$g:(0,2\pi)\longrightarrow\mathbb R,\qquad g(t)=t.$$
>>	6. Si existiera $f\in C^\infty(\mathbb R^2)$ tal que $f\circ\psi=g$, por continuidad de $f$ tendríamos $$g(t_n)=f(\psi(t_n))\longrightarrow f(\psi(\pi))=g(\pi)=\pi.$$
>>	7. Pero $g(t_n)=t_n\to2\pi$, lo cual es una contradicción. Por lo tanto, aun manteniendo la hipótesis de que $\psi(M)$ es cerrada, la conclusión puede fallar si $\psi$ no es una incrustación.
>>
>>- **Si quitamos que la imagen sea cerrada.** 
>>	1. Tomemos la incrustación abierta $$\psi:(0,1)\hookrightarrow \mathbb R.$$
>>	2. Sea $g(x)=1/x$, suave en $(0,1)$. Si existiera $f\in C^\infty(\mathbb R)$ tal que $f|_{(0,1)}=g$ por continuidad si $x_{n}\rightarrow 0^{+}$ tendriamos que $f(x_{n})\rightarrow f(0)$ pero $f(x_{n})=\frac{1}{x_{n}}$ (a partir de algun momento la sucesion esta dentro del $(0,1)$) entonces $f(x_{n})\rightarrow \infty$ osea tendriamos $f(0)=\infty$ que es absurdo  
## Practico 4

>[!Exercise] Ej 1
>Sea $\gamma$ una curva integral de un campo vectorial $X$ en una variedad $M$, tal que $\dot\gamma(t)=0$ para algún $t$. Mostrar que $\gamma$ es constante.
>
>>[!Proof]-
>>1. Como $\gamma$ es curva integral de $X$, para todo $t\in I$ se cumple $\gamma'(t)=X_{\gamma(t)}$.
>>2. En particular, evaluando en $t_0$, tenemos $\gamma'(t_0)=X_{\gamma(t_0)}$.
>>3. Por hipótesis, $\gamma'(t_0)=0$. Entonces $X_{\gamma(t_0)}=0$.
>>4. Sea $p=\gamma(t_0)$. Entonces $X_p=0$.
>>5. Consideramos la curva constante $\sigma:I\to M$ dada por $\sigma(t)=p$.
>>6. Como $\sigma(t)=p$ para todo $t\in I$, se tiene $\sigma'(t)=0$ para todo $t\in I$.
>>7. Además, como $X_p=0$ y $\sigma(t)=p$, tenemos $X_{\sigma(t)}=X_p=0$.
>>8. Por lo tanto, para todo $t\in I$, $$\sigma'(t)=0=X_{\sigma(t)}$$
>>9. Luego $\sigma$ es curva integral de $X$.
>>10. Además, $\sigma(t_0)=p=\gamma(t_0)$.
>>11. Luego por [[Glosario#^c00595z]], como $\gamma$ y $\sigma$ son curvas integrales de $X$ y coinciden en el instante $t_0$, se sigue que $\gamma(t)=\sigma(t)$ para todo $t\in I$.
>>12. Como $\sigma(t)=p$ para todo $t\in I$, concluimos que $\gamma(t)=p$ para todo $t\in I$.
>>13. Por lo tanto,
>>$$\gamma \text{ es constante.}$$

>[!Exercise]
>Probar que todo campo vectorial en una variedad compacta es completo.
>
>>[!Proof]-
>>1. Sea $X\in\mathfrak X(M)$ y sea $\gamma:J\to M$ una curva integral maximal. Queremos probar que $J=\mathbb R$.
>>
>>2. Supongamos, por contradicción, que $J$ tiene extremo superior finito $b<\infty$. Tomemos $t_0\in J$. Como $M$ es compacta,
>>$$\gamma([t_0,b))\subseteq M$$
>>3. está contenida en un compacto. Por el lema del escape, una curva integral maximal cuyo extremo superior es finito no puede permanecer contenida en un compacto. Contradicción.
>>
>>4. Análogamente, $J$ no puede tener extremo inferior finito. Por tanto,
>>$$J=\mathbb R$$
>>5. y
>>$$X \text{ es completo.}$$

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
>>1. Razonemos por el absurdo.
>>2. Supongamos que existe $t_0\in(a(p),b(p))$ y existe un compacto $K\subseteq M$ tal que
>>$$\gamma_p([t_0,b(p)))\subseteq K$$
>>3. Repetimos el argumento del teorema anterior sobre el compacto $K$.
>>4. Por uniformidad local del tiempo, para todo $r\in K$ existe $\varepsilon_r>0$ y existe un abierto $V_r$ de $M$ con $r\in V_r$ tal que, para todo $q\in V_r$, la curva integral que comienza en $q$ está definida en $(-\varepsilon_r,\varepsilon_r)$.
>>5. Los abiertos $V_r$ cubren a $K$.
>>6. Como $K$ es compacto, existen $r_1,\ldots,r_s\in K$ tales que
>>$$K\subseteq V_{r_1}\cup\cdots\cup V_{r_s}$$
>>7. Tomamos
>>$$\varepsilon=\min\{\varepsilon_{r_1},\ldots,\varepsilon_{r_s}\}$$
>>8. Entonces, para todo $q\in K$, la curva integral que comienza en $q$ está definida al menos en $(-\varepsilon,\varepsilon)$.
>>9. Como $b(p)<+\infty$, elegimos $t_1\in[t_{0},b(p))$ suficientemente cerca de $b(p)$, con
>>$$b(p)-\varepsilon<t_1<b(p)$$
>>10. Como $t_1\in[t_0,b(p))$, se tiene $q=\gamma_p(t_1)\in K$
>>11. Por el paso 8. la curva integral maximal que comienza en $q$ está definida en $(-\varepsilon,\varepsilon)$.
>>12. Definimos
>>$$\alpha(t)=\begin{cases}\gamma_p(t),&a(p)<t<b(p),\\\gamma_q(t-t_1),&-\varepsilon<t-t_1<\varepsilon.\end{cases}$$
>>13. Veamos que las dos definiciones coinciden en el solapamiento.
>>14. Si $t\in(t_1-\varepsilon,b(p))$, entonces
>>$$\gamma_q(t-t_1)=\Theta_{t-t_1}(q)=\Theta_{t-t_1}(\Theta_{t_1}(p))=\Theta_t(p)=\gamma_p(t)$$
>>15. Por lo tanto, $\alpha$ está bien definida.
>>16. Además, $\alpha$ es curva integral de $X$ y extiende a $\gamma_p$.
>>17. Como $b(p)-\varepsilon<t_1$, se tiene $b(p)<t_1+\varepsilon$.
>>18. Entonces $\alpha$ está definida más allá de $b(p)$.
>>19. Esto contradice la maximalidad de $\gamma_p$.
>>20. Por lo tanto, ningún tramo final $\gamma_p([t_0,b(p)))$ puede estar contenido en un compacto de $M$.

>[!Exercise] Ejercicio 9
>Sea $M$ variedad suave y $S\subseteq M$ una subvariedad inmersa, y sea $V\in\mathfrak X(M)$ un campo que es tangente a $S$.
>
>- (a) Mostrar que para toda curva integral $\gamma$ de $V$ tal que $\gamma(t_0)\in S$, debe existir $\varepsilon>0$ tal que $\gamma((t_0-\varepsilon,t_0+\varepsilon))\subseteq S$.
>- (b) Suponer que $S$ es un conjunto cerrado de $M$. Mostrar que todas las curvas integrales de $V$ que cortan a $S$ están contenidas en $S$.
>- (c) Dar un contraejemplo al anterior inciso si $S$ no es cerrado.
>
>>[!Proof]-
>>- **(a)**
>>	1. Que $V$ sea tangente a $S$ significa $V_{q}\in (d\iota)_{q}(T_{q}S)$ para todo $q\in S$
>>	2. Como $d\iota$ es inyectiva. Tenemos un unico $W_{q}\in T_{q}S$ tal que $(d\iota)_{q}(W_{q})=V_{q}$ 
>>	3. Entonces tenemos un campo suave $V\in \mathfrak{X}(M)$ tal que $V_{q}\in \operatorname{Im}((d\iota)_{q})$ para todo $q\in S$ 
>>	4. Entonces por [[GS - Pr4#^b71da3]] (a) tenemos que $W$ es un campo suave de $S$
>>	5. Sea $\alpha:(a,b)\to S$ la curva integral maximal de $W$ que satisface $\alpha (0) =\gamma(t_{0})$ entonces definimos $$\sigma:(a+t_0,b+t_0)\to S,\qquad \sigma(t)=\alpha(t-t_0).$$
>>	6. Y notamos que $$\sigma(t_{0})=\alpha(0)=\gamma(t_0).$$ y obviamente $\sigma$ sigue siendo curva integral maximal de $W$ por que es igual a $\alpha$ solamente se le cambio el punto inicial y trasladamos el dominio  
>>	7. Ahora podemos armar $$\beta:=\iota\circ\sigma:(a(p),b(p))\rightarrow M$$
>>	8. Y ademas por regla de la cadena $$\begin{align*}\beta'(t)&=(d\beta)_t\left(\frac{\partial}{\partial s}\bigg|_t\right)\\&=d\iota_{\sigma(t)}\left(d\sigma_t\left(\frac{\partial}{\partial s}\bigg|_t\right)\right)\\&=d\iota_{\sigma(t)}\bigl(\sigma'(t)\bigr)\\&=d\iota_{\sigma(t)}\bigl(W_{\sigma(t)}\bigr)\\&=V_{\iota(\sigma(t))}\\&=V_{\beta(t)}.\end{align*}$$
>>	9. Entonces $\beta(t)$ es una curva integral en $V$ 
>>	10. Ademas $$\beta(t_{0})=\iota\circ\sigma(t_{0})=\iota(\gamma(t_{0}))=\gamma(t_{0})$$ y es directo por definicion que $\beta(t)\in S$  
>>	11. Ahora como $\beta$ y $\gamma$ coinciden en $t_{0}$ por [[Glosario#^c00595z]] entonces coinciden en la interseccion de sus dominios, por lo tanto podemos armar un intervalo $(t_{0}-\epsilon,t_{0}+\epsilon)$ donde coinciden 
>>	12. Finalmente $$\gamma(t_{0}-\epsilon,t_{0}+\epsilon)=\beta(t_{0}-\epsilon,t_{0}+\epsilon)\subseteq S$$ 
>>- **(b)**
>>	1. Sea $\gamma:J\to M$ una curva integral y supongamos que $\gamma(t_0)\in S$. Consideremos $$A=\{t\in J:\gamma(t)\in S\}.$$
>>	2. El conjunto $A$ es no vacío por que contiene a $t_{0}$.
>>	3. $A=\gamma ^{-1}(S)$ es cerrado en $J$ porque $S$ es cerrado y $\gamma$ es continua entonces    
>>	4. Por la primera parte, $A$ también es abierto en $J$. Porque dado $t_{0}\in A$ tenemos que $\gamma(t_{0})\in S$, luego sabemos que existe $\epsilon>0$ tal que $\gamma(t_{0}-\epsilon,t_{0}+\epsilon)\subseteq S$ con lo cual $(t_{0}-\epsilon,t_{0}+\epsilon)\subseteq A$ y es un abierto de $J$ (en general de $\mathbb{R}$ pero tambien de $J$ por que $A\subseteq J$ entonces $(t_{0}-\epsilon,t_{0}+\epsilon)\cap J=(t_{0}-\epsilon,t_{0}+\epsilon)$) que contiene a $t_{0}$   
>>	5. Como $J$ es un intervalo, es conexo. Por lo tanto $$A=J.$$
>>	6. Así, toda la curva está contenida en $S$.
>>- **(c) Contraejemplo si $S$ no es cerrado.** 
>>	1. Tomemos $$M=\mathbb R,\qquad S=(0,1),\qquad V=\frac{\partial}{\partial x}.$$ donde $S$ tiene la estructura heredada de $M$ que tiene la estructura canonica
>>	2. Obviamente $\dim S=1\dim \mathbb{R}$. Entonces $$(di)_{p}:T_{p}S\rightarrow T_{p}M$$ es un isomorfismo. (Aca hay un detalle, para que $(S,\iota)$ sea suave, y poder hablar de $d\iota$ tengo que dar una estructura adecuada a $S$, en este caso la heredada de $\mathbb{R}$ que seria la canonica anda bien) 
>>	3. Luego dado $p\in S$ tenemos que $$W_{\iota(p)}=W_{p}=\frac{\partial}{\partial x}\bigg|_{p}\in T_{p}M$$ y por ser iso existe $V_{p}\in T_{p}S$ tal que $(d\iota)_{p}(V_{p})=W_{p}$ osea $W_{p}\in \operatorname{Im}(d\iota)_{p}$ para todo $p\in S$.
>>	4. Con lo cual $W\in \mathfrak{X}(M)$ es campo tangente a $S$  
>>	5. Sin embargo la curva integral $$\gamma(t)=t$$corta a $S$, ademas es una curva integral de $V$ pero no está contenida en $S$.

>[!Exercise] Ejercicio 10 — Extensión de campos de subvariedades
>Sea $M$ una variedad suave y $S\subseteq M$ una subvariedad incrustada. Dado $X\in\mathfrak X(S)$, mostrar que existe un campo suave $Y$ definido sobre una vecindad de $S$ en $M$ tal que $X$ es la restricción de $Y$ a $S$.
>
>>[!Proof]-
>>1. Sea $i:S\hookrightarrow M$ la inclusión. Como $S$ es una subvariedad incrustada de $M$, la aplicación $i$ es una inmersión.
>>2. Por el teorema de extensión local de campos, para cada $p\in S$ existen un abierto $U_p\subseteq S$ con $p\in U_p$, un abierto $V_p\subseteq M$ con $p\in V_p$ y un campo suave $Y^{(p)}\in\mathfrak X(V_p)$ tales que $$Y^{(p)}_q=(di)_qX_q,\qquad q\in U_p.$$
>>3. Como $i$ es la inclusión, $(di)_q:T_qS\to T_qM$ es también la inclusión natural. Por lo tanto, identificando $T_qS$ con su imagen en $T_qM$, se tiene $$Y^{(p)}_q=X_q,\qquad q\in U_p.$$
>>4. El conjunto $\{V_p\}_{p\in S}$ es un cubrimiento abierto de $W$. Tomamos una partición de la unidad suave $\{\rho_\alpha\}_{\alpha\in A}$ subordinada a este cubrimiento. Para cada $\alpha\in A$, existe $p_\alpha\in S$ tal que $$\operatorname{supp}(\rho_\alpha)\subseteq V_{p_\alpha}.$$
>>5. Definimos sobre $W$ el campo $$Y:=\sum_{\alpha\in A}\rho_\alpha Y^{(p_\alpha)}.$$
>>6. Esta suma está bien definida y define un campo suave porque la familia $\{\rho_\alpha\}$ es localmente finita. En efecto, para cada $q\in W$ existe un entorno $O_q$ en el cual solo una cantidad finita de funciones $\rho_\alpha$ es no nula. Por lo tanto, sobre $O_q$, el campo $Y$ es una suma finita de campos suaves.
>>7. El problema que tenemos es que podria suceder que $Y_{p}\neq X_{p}$ para algun $q\in S$. Por ejemplo si $q\in S$ y $q\in V_{p_{1}}$ y $q\in U_{p_{1}}$ pero $q\in V_{p_{2}}$ pero $q\not\in U_{p_{2}}$ entonces podriamos afirmar $Y_{q} ^{(p_{1})}=X_{q}$ pero no necesariamente $Y_{q}^{(p_{2})}=X_{q}$ entonces en esa parte la suma (solo a modo de ejemplo supongamos que son $q$ esta solamente en esos dos conjuntos)  $$Y_{q}=\rho_{1}(q)Y_{q}^{(p_{1})}+\rho_{2}(q)Y_{q}^{(p_{2})}=\frac{1}{2}X_{q}+\frac{1}{2} K$$ que podria ser distinta que $X_{q}$ 
>>8. Para solucionar esto podemos achicar cada $V_p$ (conservando la notacion por comodidad) , si es necesario, de modo que $$V_p\cap S\subseteq U_p.$$ osea que $V_{p}$ extienda a $U_{p}$ pero por fuera de $S$, dentro de $S$ coincide con $U_{p}$
>>9. En efecto esto se puede hacer porque como $U_p$ es abierto en $S$ y $S=i(S)$ tiene la topologia heredada de $M$, existe un abierto $O_p\subseteq M$ tal que $U_p=O_p\cap S$, y podemos reemplazar $V_p$ por $V_p\cap O_p$. Con lo cual $$V_{p}\cap O_{p}\cap S=V_{p}\cap U_{p}\subseteq U_{p}$$ como queriamos
>>10. Ahora si, sea $$W:=\bigcup_{p\in S}V_p.$$ Entonces $W$ es un abierto de $M$ que contiene a $S$, es decir, una vecindad abierta de $S$.
>>11. Veamos que $Y$ restringido a $S$ coincide con $X$. Sea $q\in S$. Si $\rho_\alpha(q)\neq 0$, entonces $$q\in\operatorname{supp}(\rho_\alpha)\subseteq V_{p_\alpha}.$$ Como además $q\in S$, resulta $$q\in V_{p_\alpha}\cap S\subseteq U_{p_\alpha}.$$ Por lo tanto, $$Y^{(p_\alpha)}_q=X_q.$$
>>12. En consecuencia, usando que $\{\rho_\alpha\}$ es una partición de la unidad, $$Y_q=\sum_{\alpha\in A}\rho_\alpha(q)Y^{(p_\alpha)}_q=\sum_{\alpha\in A}\rho_\alpha(q)X_q=\left(\sum_{\alpha\in A}\rho_\alpha(q)\right)X_q=X_q.$$
>>13. Así, $Y\in\mathfrak X(W)$ es un campo suave definido sobre una vecindad $W$ de $S$ y satisface $$Y|_S=X.$$

>[!Exercise] Ej 11
>Sea $M$ una variedad diferenciable compacta y conexa, sea $X\in\mathfrak X(M)$ y sea $f\in C^\infty(M)$ no idénticamente cero. Probar que si un $c\in\mathbb R$ satisface $X(f)=cf$, entonces $c$ debe ser cero.
>
>>[!Proof]-
>>1. Sea $\gamma_p(t)=\phi_t(p)$. Como $\gamma_p$ es la curva integral de $X$ que parte de $p$, se tiene $$\gamma_p'(t)=X_{\gamma_p(t)}=X_{\phi_t(p)}.$$
>>2.  Ahora, por definición de velocidad de una curva en una variedad, para toda $h\in C^\infty(M)$ vale $$\gamma_p'(t)(h)=(d\gamma_{p})_{t}\left(\frac{d}{ds}\bigg|_{s=t}\right)(h)=\frac{d}{ds}\bigg|_{s=t}h(\gamma_p(s))=\frac{d}{dt}h(\gamma_{p}(t))$$ este ultimo igual por que si $F(s)=h(\gamma_{p}(s))$ entonces $F'(t)=\frac{d}{ds}|_{s=t}h(\gamma_{p}(s))$ pero  $F'(t)=\frac{d}{dt}F(t)=\frac{d}{dt}h(\gamma_{p}(t))$  
>>3. Aplicando esto a $h=f$, obtenemos $$\frac{d}{dt}f(\phi_t(p))=\gamma_p'(t)(f).$$
>>4. Como $\gamma_p'(t)=X_{\phi_t(p)}$ y $X(f)(q)=X_q(f)$ resulta $$\frac{d}{dt}f(\phi_t(p))=X_{\phi_t(p)}(f)=X(f)(\phi_t(p))=cf(\phi_{t}(p))$$
>>5. Por lo tanto, resolviendo le ecuacion diferencial (para sacar la constante se evalua $f(\phi_{t}(p))=k_{1}e^{ct}$ en $0$ y se nota que $\phi_{0}(p)=\gamma_{p}(0)=p$) $$f(\phi_t(p))=e^{ct}f(p).$$
>>6. Como $f$ no es idénticamente cero, existe $p$ tal que $f(p)\neq0$. 
>>7. Recordemos por [[GS - Pr4#^ce146f]] como $M$ compacto $X$ es completo. Entonces el flujo esta definido para todo $t\in \mathbb{R}$  
>>8. Si $c>0$, entonces $e^{ct}f(p)$ no es acotada cuando $t\to+\infty$. y si $c<0$, no es acotada cuando $t\to-\infty$. 
>>9. Osea una vez que fijo ese $p$ tal que $f(p)\neq 0$ me puedo mover por el flujo tanto como quieras y sigo obteniendo puntos de $q\in M$ que cumplen $f(q)=e^{ct}f(p)$ pero con $e^{ct}$ cada vez mas grande       
>>10. Pero $f$ es continua sobre el compacto $M$, luego es acotada. 
>>11. Contradicción. Por lo tanto,
>>$$c=0.$$
## Practico 6

>[!Exercise] Ej 1
>Let $M$ be a connected smooth manifold. Prove that any two points of $M$ can be joined by a piecewise smooth curve.
>
>>[!Proof]-
>>1. Fix $p\in M$ and define $$A=\{q\in M:\text{ there exists a piecewise smooth curve from }p\text{ to }q\}.$$
>>2. Since the constant curve at $p$ is smooth, we have $p\in A$, so $A\neq\varnothing$.
>>	- **We first prove that $A$ is open**
>>		1. Let $q\in A$. Choose a smooth coordinate chart $(U,\varphi)$ around $q$ such that $\varphi(U)$ is a coordinate ball or coordinate cube in $\mathbb{R}^n$.
>>		2. If $r\in U$, then $\varphi(q),\varphi(r)\in\varphi(U)$, and since $\varphi(U)$ is convex, the segment $$\alpha(t)=(1-t)\varphi(q)+t\varphi(r),\qquad t\in[0,1],$$ lies in $\varphi(U)$.
>>		3. Therefore $$\beta(t)=\varphi^{-1}(\alpha(t))$$is a smooth curve in $U$ from $q$ to $r$.
>>		4. Since $q\in A$, there is a piecewise smooth curve $\gamma$ from $p$ to $q$. Concatenating $\gamma$ with $\beta$ gives a piecewise smooth curve from $p$ to $r$. $$\eta(t)=\begin{cases}\gamma(2t), & 0\le t\le \frac12,\\ \beta(2t-1), & \frac12\le t\le 1. \end{cases}$$
>>		5. Hence $r\in A$ for every $r\in U$, so $U\subseteq A$. Thus every point of $A$ is interior, and $A$ is open.
>>	- **We now prove that $A$ is closed.** 
>>		1. Let $q\in\overline{A}$. Choose a smooth coordinate chart $(U,\varphi)$ around $q$ such that $\varphi(U)$ is a coordinate ball or coordinate cube.
>>		2. Since $q\in\overline{A}$ and $U$ is a neighborhood of $q$, we have $$U\cap A\neq\varnothing.$$
>>		3. Choose $r\in U\cap A$. As before, using the convexity of $\varphi(U)$, there is a smooth curve in $U$ from $r$ to $q$.
>>		4. Since $r\in A$, there is a piecewise smooth curve from $p$ to $r$. Concatenating it with the smooth curve from $r$ to $q$ gives a piecewise smooth curve from $p$ to $q$.
>>		5. Therefore $q\in A$. Hence $\overline{A}\subseteq A$, so $A$ is closed.
>>6. Thus $A$ is nonempty, open, and closed in $M$. Since $M$ is connected, we conclude $$A=M.$$
>>7. Therefore every point of $M$ can be joined to $p$ by a piecewise smooth curve.
>>8. Finally, let $p_1,p_2\in M$. Since $A=M$, there are piecewise smooth curves from $p$ to $p_1$ and from $p$ to $p_2$.
>>9. If $\gamma:[a,b]\to M$ is a piecewise smooth curve from $p$ to $p_1$, then $$\widetilde{\gamma}(t)=\gamma(a+b-t),\qquad t\in[a,b],$$ is a piecewise smooth curve from $p_1$ to $p$.
>>10. Concatenating $\widetilde{\gamma}$ with a piecewise smooth curve from $p$ to $p_2$ gives a piecewise smooth curve from $p_1$ to $p_2$.
>>11. Hence any two points of $M$ can be joined by a piecewise smooth curve.

>[!Exercise] Ej 9
>Sea $(M,\phi)$ una subvariedad integral conexa de una distribución involutiva $\mathcal D$ en una variedad $N$. Probar que si $\phi(M)$ es cerrada en $N$, entonces $M$ es conexa maximal.
>
>>[!Proof]-
>>12. Queremos probar que $(M,\phi)$ es conexa maximal. Sea entonces $(L,\psi)$ una subvariedad integral conexa de $\mathcal D$ tal que $\psi(L)\cap\phi(M)\neq\varnothing$. Debemos probar que $\psi(L)\subseteq\phi(M)$.
>>13. Definimos $A:=\{q\in L:\psi(q)\in\phi(M)\}=\psi^{-1}(\phi(M))$. Como $\psi(L)\cap\phi(M)\neq\varnothing$, tenemos $A\neq\varnothing$.
>>14. Como $\phi(M)$ es cerrado en $N$ y $\psi:L\to N$ es continua, $A=\psi^{-1}(\phi(M))$ es cerrado en $L$.
>>15. Probamos ahora que $A$ es abierto en $L$. Sea $q\in A$. Entonces existe $p\in M$ tal que $\psi(q)=\phi(p)$. Denotamos $x:=\psi(q)=\phi(p)$.
>>16. Como la distribucion es involutiva, podemos usar Frobenius local, entonces existe una carta cúbica $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $x$ tal que las rebanadas dadas por $x_j=\text{constante}$ para $j=k+1,\ldots,n$ son subvariedades integrales de $\mathcal D$, y toda subvariedad integral conexa contenida en $U$ está contenida en una de esas rebanadas.
>>17. Sea $W$ la componente conexa de $\psi^{-1}(U)$ que contiene a $q$. Como $U$ es abierto en $N$, $\psi^{-1}(U)$ es abierto en $L$, y por lo tanto $W$ es abierto en $L$. Además, $(W,\psi|_W)$ es una subvariedad integral conexa contenida en $U$.
>>18. Por el teorema de Frobenius local, $\psi(W)$ está contenida en una rebanada de $U$. Como $\psi(q)=x$, esa rebanada es la rebanada $S$ que pasa por $x$, es decir, la determinada por $x_j=x_j(x)$ para $j=k+1,\ldots,n$.
>>19. Sea $V$ la componente conexa de $\phi^{-1}(U)$ que contiene a $p$. Entonces $(V,\phi|_V)$ es una subvariedad integral conexa contenida en $U$. Por Frobenius local, $\phi(V)$ está contenida en una rebanada de $U$. Como $\phi(p)=x$, también está contenida en la misma rebanada $S$.
>>20. Consideramos ahora $\phi|_V:V\to S$. Como $V$ es abierto en $M$, tenemos $T_pV=T_pM$. Además, como $(M,\phi)$ es subvariedad integral, $d\phi_p(T_pM)=\mathcal D_x$. Por otro lado, como $S$ es una rebanada integral, $T_xS=\mathcal D_x$. Entonces $d(\phi|_V)_p:T_pV\to T_xS$ es sobreyectiva. Como $\dim T_pV=\dim T_xS=k$, es un isomorfismo.
>>21. Por el teorema de la función inversa, existen un abierto $V_0\subseteq V$ con $p\in V_0$ y un abierto $O\subseteq S$ con $x\in O$ tales que $\phi|_{V_0}:V_0\to O$ es un difeomorfismo. En particular, $O\subseteq\phi(V_0)\subseteq\phi(M)$.
>>22. $O$ es abierto en $S$ entonces existe entonces $$W_0:=\psi|_{W}^{-1}(O)$$ es abierto en $L$ y contiene a $q$. Es abierto en $L$ por que $r\in\psi|_{W}^{-1}(O)$, luego $\psi|_{W}(r)\in O$, por lo tanto $\psi(r)\in S\cap O=O\subseteq\phi(M)$.
>>23. Así, $W_0\subseteq A$. Como para todo $q\in A$ encontramos un abierto $W_0$ de $L$ tal que $q\in W_0\subseteq A$, concluimos que $A$ es abierto en $L$.
>>24. Entonces $A$ es no vacío, abierto y cerrado en $L$. Como $L$ es conexa, se sigue que $A=L$.
>>25. Por definición de $A$, $A=L$ significa que para todo $q\in L$ se cumple $\psi(q)\in\phi(M)$. Luego $\psi(L)\subseteq\phi(M)$.
>>26. Como esto vale para toda subvariedad integral conexa $(L,\psi)$ tal que $\psi(L)\cap\phi(M)\neq\varnothing$, concluimos que $(M,\phi)$ es conexa maximal.
## Practico 7 

>[!Theorem] Ejercicio 1
>Sea $M\subseteq \mathbb R^{n+1}$ una subvariedad regular de dimensión $n$. Entonces $M$ es orientable si y solo si existe un campo normal suave $\xi:M\to\mathbb R^{n+1}$ tal que $\xi_p\neq 0$ y $\xi_p\perp d\iota (T_pM)$ para todo $p\in M$.
>>[!Proof]-
>>- $(\Rightarrow)$ 
>>	1. Supongamos que $M$ es orientable. Tomamos un atlas orientado $\mathcal A$ de $M$. Queremos construir un campo normal suave $\xi:M\to\mathbb R^{n+1}$ tal que $\xi_p\neq 0$ y $\xi_p\perp d\iota_p(T_pM)$ para todo $p\in M$.
>>	2. Sea $(U,\varphi=(x_1,\ldots,x_n))\in\mathcal A$ una carta orientada con $U$ conexo. Por la forma local de las inmersiones, alrededor de cada punto podemos tomar una carta $(V,\psi=(y_1,\ldots,y_{n+1}))$ de $\mathbb R^{n+1}$ tal que $\iota(U)\subseteq V$ y $$\psi\circ\iota\circ\varphi^{-1}(t_1,\ldots,t_n)=(t_1,\ldots,t_n,0)$$
>>	3. Entonces, para todo $p\in U$, se cumple $$d\iota_p(\frac{\partial}{\partial x_i}|_p)=\frac{\partial}{\partial y_i}|_{\iota(p)}$$ para $i=1,\ldots,n$. Por lo tanto $$d\iota_p(T_pM)=\operatorname{span}\left\{\frac{\partial}{\partial y_1}\bigg|_{\iota(p)},\ldots,\frac{\partial}{\partial y_n}\bigg|_{\iota(p)}\right\}$$
>>	4. El vector $\frac{\partial}{\partial y_{n+1}}|_{\iota(p)}$ no tiene por qué ser ortogonal a $d\iota_p(T_pM)$ respecto del producto interno euclídeo. Aplicamos Gram-Schmidt a la familia $\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n},\frac{\partial}{\partial y_{n+1}}$ y tomamos el último vector normalizado. Obtenemos así un campo suave unitario $X^U:U\to\mathbb R^{n+1}$ tal que $X^U_p\perp d\iota_p(T_pM)$ para todo $p\in U$.
>>	5. Además elegimos el signo de $X^U$ de modo que $$\det(d\iota_p(\frac{\partial}{\partial x_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial x_n}|_p),X^U_p)>0$$ para todo $p\in U$. Esto se puede hacer porque cambiar $X^U$ por $-X^U$ cambia el signo del determinante, y como el determinante es una función suave no nula en $U$, su signo es constante.
>>	6. Ahora probamos que estos campos locales coinciden en las intersecciones. Sean $(U,\varphi=(x_1,\ldots,x_n))$ y $(W,\theta=(z_1,\ldots,z_n))$ dos cartas orientadas, y sean $X^U$ y $X^W$ los campos normales locales construidos. 
>>	7. Fijado $p\in U\cap W$, ambos vectores $X^U_p$ y $X^W_p$ son normales unitarios a $d\iota_p(T_pM)$. Como $(d\iota_p(T_pM))^\perp$ tiene dimensión $1$, se tiene $X^W_p=X^U_p$ o $X^W_p=-X^U_p$.
>>	8. Como las dos cartas son orientadas, la matriz de cambio de base entre $(\frac{\partial}{\partial x_1}|_p,\ldots,\frac{\partial}{\partial x_n}|_p)$ y $(\frac{\partial}{\partial z_1}|_p,\ldots,\frac{\partial}{\partial z_n}|_p)$ tiene determinante positivo. Al aplicar $d\iota_p$, la matriz de cambio entre $(d\iota_p(\frac{\partial}{\partial x_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial x_n}|_p))$ y $(d\iota_p(\frac{\partial}{\partial z_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial z_n}|_p))$ es la misma, luego también tiene determinante positivo.
>>	9. Por el paso 5. se tiene $\det(d\iota_p(\frac{\partial}{\partial x_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial x_n}|_p),X^U_p)>0$ y $\det(d\iota_p(\frac{\partial}{\partial z_1}|_p),\ldots,d\iota_p(\frac{\partial}{\partial z_n}|_p),X^W_p)>0$.
>>	10. Si fuera $X^W_p=-X^U_p$, entonces al cambiar de la base tangente $x$ a la base tangente $z$ el determinante se multiplicaría por un número positivo, pero al cambiar el normal $X^U_p$ por $-X^U_p$ se multiplicaría por $-1$. Por lo tanto el segundo determinante tendría signo negativo, contradiciendo el paso 8.
>>	11. Luego $X^W_p=X^U_p$ para todo $p\in U\cap W$. Por lo tanto los campos normales locales coinciden en las intersecciones.
>>	12. Como los campos $X^U$ coinciden en las intersecciones, pegan y definen un campo global suave $\xi:M\to\mathbb R^{n+1}$ dado por $\xi|_U=X^U$ para cada carta orientada $(U,\varphi)\in\mathcal A$.
>>	13. Por construcción, $\xi_p\neq 0$ y $\xi_p\perp d\iota_p(T_pM)$ para todo $p\in M$. Esto prueba la ida.
>>- $(\Leftarrow)$ 
>>	1. Supongamos que existe un campo normal suave $\xi:M\to\mathbb R^{n+1}$ tal que $\xi_p\neq 0$ y $\xi_p\perp d\iota_p(T_pM)$ para todo $p\in M$. 
>>	2. Para cada $p\in M$, declaramos que una base $(v_1,\ldots,v_n)$ de $T_pM$ es positiva si $\det(d\iota_p(v_1),\ldots,d\iota_p(v_n),\xi_p)>0$.
>>	3. Esta definición tiene sentido porque el determinante nunca es cero. En efecto, si $\xi_p\in\operatorname{span}(d\iota_p(v_1),\ldots,d\iota_p(v_n))$, entonces como $\xi_p$ es ortogonal a cada $d\iota_p(v_i)$, también sería ortogonal a sí mismo. Luego $\langle \xi_p,\xi_p\rangle=0$, contradiciendo $\xi_p\neq 0$. Por lo tanto $(d\iota_p(v_1),\ldots,d\iota_p(v_n),\xi_p)$ es una base de $\mathbb R^{n+1}$.
>>	4. Ahora construimos cartas compatibles con esta orientación puntual. Sea $(U,\varphi=(x^1,\ldots,x^n))$ una carta de $M$ y definimos $g:U\to\mathbb R$ por $$g(q)=\det(d\iota_q(\frac{\partial}{\partial x^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial x^n}|_q),\xi_q)$$la función $g$ es suave y nunca se anula.
>>	5. Dado $p\in U$, existe un abierto $V\subseteq U$ con $p\in V$ tal que $g$ tiene signo constante en $V$. Si $g>0$ en $V$, tomamos la carta $(V,\varphi|_V)$. Si $g<0$ en $V$, tomamos la carta $(V,T\circ\varphi|_V)$, donde $T(x^1,\ldots,x^n)=(-x^1,x^2,\ldots,x^n)$. En ambos casos, la base coordenada de la carta corregida es positiva (cuando la miramos en $\mathbb{R}^{n+1}$ usando la inclusion)  en todo punto de $V$.
>>	6. Haciendo esto alrededor de cada $p\in M$, obtenemos un atlas que cubre $M$. Falta probar que sus cambios de coordenadas tienen determinante positivo.
>>	7. Sean $(V,x=(x^1,\ldots,x^n))$ y $(W,y=(y^1,\ldots,y^n))$ dos cartas en el atlas (osea corregidas) con $V\cap W\neq\varnothing$, y sea $q\in V\cap W$. 
>>	8. Por construcción, $\det(d\iota_q(\frac{\partial}{\partial x^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial x^n}|_q),\xi_q)>0$ y $\det(d\iota_q(\frac{\partial}{\partial y^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial y^n}|_q),\xi_q)>0$.  
>>	9. Sea $A=(a_{ij})$ la matriz de cambio de base entre las bases coordenadas de las cartas, dada por $$\frac{\partial}{\partial y^j}|_q=\sum_i a_{ij}\frac{\partial}{\partial x^i}|_q$$entonces, aplicando $d\iota_q$, obtenemos $$d\iota_q(\frac{\partial}{\partial y^j}|_q)=\sum_i a_{ij}d\iota_q(\frac{\partial}{\partial x^i}|_q)$$
>>	10. Por lo tanto, la matriz de cambio de base en $\mathbb R^{n+1}$ desde $(d\iota_q(\frac{\partial}{\partial x^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial x^n}|_q),\xi_q)$ hacia $(d\iota_q(\frac{\partial}{\partial y^1}|_q),\ldots,d\iota_q(\frac{\partial}{\partial y^n}|_q),\xi_q)$ es $\begin{pmatrix}A&0\\0&1\end{pmatrix}$. Y como estas bases son positivos por construccion, se sigue que $\det A>0$.  
>>	11. Luego todo cambio de coordenadas entre cartas corregidas tiene determinante positivo. 
>>	12. Por lo tanto, las cartas corregidas forman un atlas orientado de $M$, y concluimos que $M$ es orientable.

>[!Exercise] Ejercicio 4
>Sea $M$ una variedad orientada y sea $(U,\varphi)$ una carta de $M$, con $U$ conexo. Probar que $(U,\varphi)$ está positivamente orientada en todo $U$ o negativamente orientada en todo $U$.
>
>>[!Proof]-
>>13. Sea $\omega\in\Omega^n(M)$ una forma positiva que representa la orientación de $M$. Que sabemos que existe y es suave y nunca nula porque $M$ es orientada.
>>14. Escribimos la carta como $\varphi=(x^1,\dots,x^n)$. Esta induce en cada $p\in U$ la base coordenada $\left(\left.\frac{\partial}{\partial x^1}\right|_p,\dots,\left.\frac{\partial}{\partial x^n}\right|_p\right)$ de $T_pM$.
>>15. Definimos la función $f:U\to\mathbb R$ por $$f(p)=\omega_p\left(\left.\frac{\partial}{\partial x^1}\right|_p,\dots,\left.\frac{\partial}{\partial x^n}\right|_p\right).$$
>>16. La carta $(U,\varphi)$ es positiva en $p$ si y solo si $f(p)>0$, mientras que es negativa en $p$ si y solo si $f(p)<0$.
>>17. Como $f$ es continua, nunca se anula y $U$ es conexo, $f$ tiene signo constante en $U$. Por lo tanto, ocurre exactamente una de las dos posibilidades: $$f>0\quad\text{en todo }U,$$ o bien $$f<0\quad\text{en todo }U.$$
>>18. En consecuencia, $(U,\varphi)$ está positivamente orientada en todo $U$ o negativamente orientada en todo $U$.

>[!Exercise] Ejercicio 5
>Sea $M$ una variedad cubierta por dos sistemas coordenados conexos $(U,\varphi)$ y $(V,\psi)$, tales que $U\cap V$ tiene exactamente dos componentes conexas, con la propiedad de que el determinante del cambio de coordenadas es positivo en una componente conexa y negativo en la otra. Probar que $M$ no es orientable.
>
>>[!Proof]-
>>- (a)
>>	1. Supongamos, por contradicción, que $M$ es orientable. Entonces existe una forma de orientación $\omega\in\Omega^n(M)$, es decir, una $n$-forma suave que nunca se anula.
>>	2. Sean $B_x(p)=\left(\frac{\partial}{\partial x^1}\big|_p,\dots,\frac{\partial}{\partial x^n}\big|_p\right)$ y $B_y(p)=\left(\frac{\partial}{\partial y^1}\big|_p,\dots,\frac{\partial}{\partial y^n}\big|_p\right)$ las bases coordenadas asociadas a las cartas $(U,\varphi)$ y $(V,\psi)$.
>>	3. Para cada $p\in U\cap V$, sea $C(p)=\det A(p)$. Con $A(p)$ la matriz cambio de base entre $B_{x}$ y $B_{y}$ 
>>	4. Por multilinealidad alternada de $\omega_p$, se tiene $$\omega_p(B_x(p))=C(p)\omega_p(B_y(p))$$
>>	5. Como $\omega$ nunca se anula, las funciones $p\mapsto\omega_p(B_x(p))$ sobre $U$ y $p\mapsto\omega_p(B_y(p))$ sobre $V$ son continuas y nunca nulas.
>>	6. Como $U$ y $V$ son conexos, ambas funciones tienen signo constante.
>>	7. Por la igualdad $\omega_p(B_x(p))=C(p)\omega_p(B_y(p))$, el signo de $C(p)$ debe ser constante en $U\cap V$.
>>	8. Sin embargo, por hipótesis, $C(p)>0$ en una componente conexa de $U\cap V$ y $C(p)<0$ en otra componente conexa.
>>	9. Esto es una contradicción. Por lo tanto, $M$ no es orientable.

>[!Exercise]
>Recordar que se dice que un difeomorfismo local entre variedades orientadas $M$ y $N$, $F:M\to N$, preserva la orientación si para cada $p\in M$, el isomorfismo $(dF)_p$ lleva bases positivas de $T_pM$ en bases positivas de $T_{F(p)}N$, y se dice que invierte la orientación si para cada $p\in M$, $(dF)_p$ lleva bases positivas de $T_pM$ en bases negativas de $T_{F(p)}N$. Mostrar que las siguientes condiciones son equivalentes:
>- (a) $F$ preserva la orientación.
>- (b) Con respecto a cualquier par de cartas orientadas de $M$ y $N$, la matriz Jacobiana de $F$ tiene determinante positivo.
>- (c) Para cualquier forma de orientación de $N$ que esté orientada positivamente, su pullback es una forma orientada positivamente sobre $M$.
>
>>[!Proof]-
>>- $(a)\Rightarrow (b)$
>>	1. Tenemos dos cartas orientadas cualquiera $\varphi=(x_{1},\ldots,x_{n})$ y $\psi=(y_{1},\ldots y_{n})$   
>>	2. Since $F$ preserves the orientation, the image of the positive coordinate basis $\{\partial/\partial x^i|_p\}$ under $(dF)_p$ is again a positive basis in $T_q N$. Call this image basis $\mathbf{e}' = \{(dF)_p(\partial/\partial x^i)\}$.
>>	3. Now choose any other positive oriented basis $\mathbf{f} = \{\partial/\partial y^j|_q\}$ of the same tangent space $T_q N$. Because both $\mathbf{e}'$ and $\mathbf{f}$ are positive bases, they determine the same orientation; therefore the change-of-basis matrix $P$ that expresses the vectors of $\mathbf{e}'$ as linear combinations of the vectors of $\mathbf{f}$ must satisfy $\det P > 0$.
>>	4. By definition of the differential in coordinates, the vectors of the image basis satisfy $$(dF)_p\Bigl(\frac{\partial}{\partial x^i}\Bigr) = \sum_j P_i^j \frac{\partial}{\partial y^j}$$
>>	5. The matrix $P$ above is precisely the matrix representation of the linear map $(dF)_p$ with respect to the two bases $\{\partial/\partial x^i\}$ and $\{\partial/\partial y^j\}$.
>>	6. But this matrix representation is exactly the Jacobian matrix of $F$ in the chosen oriented charts. Hence the Jacobian matrix has positive determinant.
>>	7. Y esta es la matriz jacobiana de $F$ con respecto a las dos cartas del paso 1.  
>>- $(b)\Rightarrow (a)$
>>	1. Supongamos que se cumple $(b)$. Queremos probar que $F$ preserva la orientación. Fijamos $p\in M$ y escribimos $q=F(p)$.  
>>	2. Sea $$B_1=(v_1,\ldots,v_n)$$ una base positiva arbitraria de $T_pM$. Tenemos que probar que $$D=((dF)_p(v_1),\ldots,(dF)_p(v_n))$$ es una base positiva de $T_qN$. 
>>	3. Tomamos una carta orientada $\varphi=(x^1,\ldots,x^n)$ de $M$ alrededor de $p$. Entonces $$B_2=\left(\frac{\partial}{\partial x^1}\big|_p,\ldots,\frac{\partial}{\partial x^n}\big|_p\right)$$ es una base positiva de $T_pM$.  
>>	4. Tomamos una carta orientada $\psi=(y^1,\ldots,y^n)$ de $N$ alrededor de $q$. Entonces $$\widetilde B_2=\left(\frac{\partial}{\partial y^1}\big|_q,\ldots,\frac{\partial}{\partial y^n}\big|_q\right)$$ es una base positiva de $T_qN$.  
>>	5. Queremos ver que la matriz cambio de base entre $\widetilde{B}_{2}$ y $D$ tiene determinante positivo, pero dicha matriz cumple $$C(D,\widetilde B_2)=[(dF)_p]_{B_1}^{\widetilde B_2}=[(dF)_p]_{B_2}^{\widetilde B_2}\,C(B_1,B_2)$$
>>	6. Como $B_1$ y $B_2$ son bases positivas de $T_pM$, la matriz de cambio de base $C(B_1,B_2)$ tiene determinante positivo, es decir, $\det C(B_1,B_2)>0$.  
>>	7. Por hipótesis $(b)$, la matriz Jacobiana de $F$ respecto de las cartas orientadas $\varphi$ y $\psi$ tiene determinante positivo. Pero esa matriz es precisamente $[(dF)_p]_{B_2}^{\widetilde B_2}$, luego $\det\left([(dF)_p]_{B_2}^{\widetilde B_2}\right)>0$.  
>>	8. Entonces $$\det C(D,\widetilde B_2)=\det\left([(dF)_p]_{B_2}^{\widetilde B_2}\right)\det C(B_1,B_2)>0$$
>>	9. Como $\widetilde B_2$ es positiva y el cambio de base de $D$ respecto de $\widetilde B_2$ tiene determinante positivo, se sigue que $D$ es una base positiva de $T_qN$. 
>>	10. Por lo tanto, para toda base positiva $B_1$ de $T_pM$, la base $((dF)_p(v_1),\ldots,(dF)_p(v_n))$ es positiva en $T_{F(p)}N$. Luego $F$ preserva la orientación.
>>- $(a)\Rightarrow (c)$
>>	1. Como $F$ es un difeomorfismo local que preserva la orientacion, si $(v_1,\ldots,v_n)$ es una base de $T_pM$ positiva, entonces $(dF_p(v_1),\ldots,dF_p(v_n))$ es una base de $T_{F(p)}N$ positiva.
>>	2. Como $\omega$ es una forma de orientación positiva en $N$, se tiene $$\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n))>0.$$
>>	3. Usando la definición del pullback, resulta que para todo $p\in M$ y para todo $v_{1},\ldots,v_{n}\in T_{p}M$    $$(F^*\omega)_p(v_1,\ldots,v_n)=\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n))>0.$$
>>	4. Entonces $F^*\omega$ evalúa positivamente en toda base positiva de $T_pM$. Como esto vale para todo $p\in M$, $F^*\omega$ es una forma de orientación positiva en $M$.
>>- $(c)\Rightarrow (a)$ 
>>	1. Recíprocamente, supongamos que para toda forma de orientación positiva $\omega$ en $N$, la forma $F^*\omega$ es una forma de orientación positiva en $M$.
>>	2. Tomemos $p\in M$ y una base positiva $(v_1,\ldots,v_n)$ de $T_pM$. Queremos probar que $(dF_p(v_1),\ldots,dF_p(v_n))$ es una base positiva de $T_{F(p)}N$.
>>	3. Sea $\omega$ una forma de orientación positiva en $N$. Por hipótesis, $F^*\omega$ es positiva en $M$, entonces $$(F^*\omega)_p(v_1,\ldots,v_n)>0.$$
>>	4. Por definición del pullback, $$(F^*\omega)_p(v_1,\ldots,v_n)=\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n)).$$
>>	5. Por lo tanto, $$\omega_{F(p)}(dF_p(v_1),\ldots,dF_p(v_n))>0.$$
>>	6. Como $\omega$ es una forma de orientación positiva en $N$, esto implica que $(dF_p(v_1),\ldots,dF_p(v_n))$ es una base positiva de $T_{F(p)}N$.
>>	7. Luego $F$ manda bases positivas de $T_pM$ en bases positivas de $T_{F(p)}N$. Por lo tanto, $F$ preserva orientación.

>[!Exercise]
>Sean $M$ y $N$ variedades orientadas y sea $F:M\to N$ un difeomorfismo que preserva orientación. Si $(V,\varphi)$ es un entorno coordenado positivo en $N$, probar que $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo en $M$.
>
>>[!Proof]-
>>- Primera forma de hacerlo
>>	1. Como $F$ es un difeomorfismo y $(V,\varphi)$ es una carta de $N$, la aplicación $\varphi\circ F:F^{-1}(V)\to\varphi(V)$ es un difeomorfismo, luego $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado de $M$.
>>	2. Sea $\omega$ [[GS - Teo25#^46786b|n-forma positivamente orientada]] en $N$.
>>	3. Como $(V,\varphi)$ es una carta positiva, existe una función suave $g:V\to\mathbb R$ tal que $$\omega|_V=g\,d\varphi^1\wedge\cdots\wedge d\varphi^n$$ y obviamente $g>0$ en $V$ (se ve evaluando en $\frac{d}{d\varphi^{1}},\ldots$)  
>>	4. Como $F$ preserva orientación, $F^*\omega$ es una forma de volumen positiva en $M$.
>>	5. Sobre $F^{-1}(V)$ se tiene $F^*\omega=(g\circ F)\,F^*(d\varphi^1\wedge\cdots\wedge d\varphi^n)$.
>>	6. Como el pullback conmuta con el producto wedge y con el diferencial, $$F^*\omega=(g\circ F)\,d(\varphi^1\circ F)\wedge\cdots\wedge d(\varphi^n\circ F)$$
>>	7. Sea $p\in F^{-1}(V)$ y denotemos por $\left.\frac{\partial}{\partial x_i}\right|_p^{\varphi\circ F}$ la base coordenada inducida por $\varphi\circ F$.
>>	8. Entonces $d(\varphi^i\circ F)_p\left(\left.\frac{\partial}{\partial x_j}\right|_p^{\varphi\circ F}\right)=\delta_{ij}$.
>>	9. Por tanto, $\left(d(\varphi^1\circ F)\wedge\cdots\wedge d(\varphi^n\circ F)\right)_p\left(\left.\frac{\partial}{\partial x_1}\right|_p^{\varphi\circ F},\ldots,\left.\frac{\partial}{\partial x_n}\right|_p^{\varphi\circ F}\right)=1$.
>>	10. En consecuencia, $(F^*\omega)_p\left(\left.\frac{\partial}{\partial x_1}\right|_p^{\varphi\circ F},\ldots,\left.\frac{\partial}{\partial x_n}\right|_p^{\varphi\circ F}\right)=(g\circ F)(p)$.
>>	11. Como $p\in F^{-1}(V)$, se tiene $F(p)\in V$.
>>	12. Como $g>0$ en $V$, resulta $(g\circ F)(p)=g(F(p))>0$.
>>	13. Así, $(F^*\omega)_p\left(\left.\frac{\partial}{\partial x_1}\right|_p^{\varphi\circ F},\ldots,\left.\frac{\partial}{\partial x_n}\right|_p^{\varphi\circ F}\right)>0$ para todo $p\in F^{-1}(V)$.
>>	14. Como $F^*\omega$ es una orientacion positiva, la base coordenada inducida por $\varphi\circ F$ es positiva en todo punto.
>>	15. Por lo tanto, $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo de $M$.
>>- Segunda forma de hacerlo
>>	1. Escribimos $\varphi=(y_1,\ldots,y_n)$ carta de $N$ positiva. Como $F:M\to N$ es difeomorfismo y $V\subseteq N$ es abierto, $F^{-1}(V)\subseteq M$ es abierto. Además $\varphi\circ F:F^{-1}(V)\to \varphi(V)$ es un homeomorfismo sobre el abierto $\varphi(V)\subseteq \mathbb R^n$, y es suave con inversa suave porque $F$ y $\varphi$ lo son. Por lo tanto $(F^{-1}(V),\varphi\circ F)$ es una carta suave de $M$.
>>	2. Para probar que esta carta es positiva, fijamos $p\in F^{-1}(V)$. Denotamos por $z_i=y_i\circ F$ las funciones coordenadas de la carta $\varphi\circ F$. Entonces la base coordenada asociada a esta carta en $p$ es $$B=\left(\frac{\partial}{\partial z_1}\big|_p,\ldots,\frac{\partial}{\partial z_n}\big|_p\right)$$
>>	3. Veamos que la imagen de esta base por $(dF)_p$ es la base coordenada positiva de $(V,\varphi)$ en $F(p)$. Para cada $i,j$ tenemos $$dy_j|_{F(p)}\left((dF)_p\left(\frac{\partial}{\partial z_i}\big|_p\right)\right)=d(y_j\circ F)_p\left(\frac{\partial}{\partial z_i}\big|_p\right)=dz_j|_p\left(\frac{\partial}{\partial z_i}\big|_p\right)=\delta_{ij}$$por lo tanto $$(dF)_p\left(\frac{\partial}{\partial z_i}\big|_p\right)=\frac{\partial}{\partial y_i}\big|_{F(p)}$$ para todo $i$.
>>	4. Como $(V,\varphi)$ es una carta positiva en $N$, la base $\left(\frac{\partial}{\partial y_1}\big|_{F(p)},\ldots,\frac{\partial}{\partial y_n}\big|_{F(p)}\right)$ es positiva en $T_{F(p)}N$. Por el paso anterior, esta base es exactamente $(dF)_p(B)$.
>>	5. Por lo tanto $B$ es positiva (de lo contrario $dF_{p}$ mandaria una base negativa a una base positiva, lo que es absurdo por que $F$ preserva orientacion)  
>>	6. Así, para todo $p\in F^{-1}(V)$, la base coordenada de la carta $(F^{-1}(V),\varphi\circ F)$ es positiva en $T_pM$. Por lo tanto $(F^{-1}(V),\varphi\circ F)$ es un entorno coordenado positivo en $M$.

>[!Exercise]
>Sea $\pi:M\to N$ un difeomorfismo local. Si $N$ es orientable, entonces existe una orientacion para $M$ tal que $\pi$ preserva orientación.
>
>>[!Proof]-
>>- Primera Forma
>>	1. Como $N$ es orientable, existe una $n$-forma suave $\omega\in\Omega^n(N)$ que no es la funcion nula para ningun $p\in N$ .  
>>	2. Consideramos la $n$-forma $\pi^*\omega\in\Omega^n(M)$.  
>>	3. Para cada $p\in M$, como $\pi$ es un difeomorfismo local, existen abiertos $U\subseteq M$ y $V\subseteq N$, con $p\in U$, tales que $\pi|_U:U\to V$ es un difeomorfismo.  
>>	4. Por lo tanto, existe una inversa suave $(\pi|_U)^{-1}:V\to U$.  
>>	5. Como $(\pi|_U)^{-1}\circ\pi|_U=\operatorname{id}_U$, por la regla de la cadena se tiene $$d((\pi|_U)^{-1})_{\pi(p)}\circ d(\pi|_U)_p=\operatorname{id}_{T_pM}.$$como $\pi|_U\circ(\pi|_U)^{-1}=\operatorname{id}_V$, también se tiene  $$d(\pi|_U)_p\circ d((\pi|_U)^{-1})_{\pi(p)}=\operatorname{id}_{T_{\pi(p)}N}.$$  
>>	6. Luego $d(\pi|_U)_p=d\pi_p:T_pM\to T_{\pi(p)}N$ es un isomorfismo lineal.  
>>	7. Sea $(v_1,\ldots,v_n)$ una base de $T_pM$; entonces $(d\pi_p(v_1),\ldots,d\pi_p(v_n))$ es una base de $T_{\pi(p)}N$.  
>>	8. Por definición del pullback, $$(\pi^*\omega)_p(v_1,\ldots,v_n)=\omega_{\pi(p)}(d\pi_p(v_1),\ldots,d\pi_p(v_n)).$$  
>>	9. Como $\omega_{\pi(p)}\neq0$, su evaluación sobre una base es distinta de cero, de modo que $$(\pi^*\omega)_p(v_1,\ldots,v_n)\neq0.$$  
>>	10. Por lo tanto, $\pi^*\omega$ es una $n$-forma suave nunca nula sobre $M$, y entonces $M$ es orientable.  
>>	11. Entonces orientamos $N$ mediante $\omega$ y $M$ mediante $\pi^*\omega$.  
>>	12. Si $(v_1,\ldots,v_n)$ es una base positiva de $T_pM$, entonces $$(\pi^*\omega)_p(v_1,\ldots,v_n)>0.$$ por que justamente asi orientamos a $M$   
>>	13. Por la definición del pullback, $$\omega_{\pi(p)}(d\pi_p(v_1),\ldots,d\pi_p(v_n))=(\pi^*\omega)_p(v_1,\ldots,v_n)>0.$$  
>>	14. Entonces $(d\pi_p(v_1),\ldots,d\pi_p(v_n))$ es una base positiva de $T_{\pi(p)}N$
>>	15. Por lo tanto, $\pi$ preserva la orientación.
>>	16. **Forma alternativa de concluir.** Por el paso 11, si $\omega$ es una forma de orientación positiva en $N$ entonces $\pi^*\omega$ es una forma de orientación positiva en $M$. Entonces, por la equivalencia $(c)\Rightarrow(a)$ del Ejercicio 7, se concluye directamente que $\pi$ preserva la orientación.
>>- Segunda forma de hacerlo
>>	1. Como $N$ es orientable, tomamos un atlas orientado $\mathcal A_N$ de $N$.
>>	2. Para cada $p\in M$, como $\pi$ es difeomorfismo local, existe un abierto $W_0\subseteq M$ con $p\in W_0$ tal que $$\pi|_{W_0}:W_0\to V_0$$ es un difeomorfismo sobre un abierto $V_0\subseteq N$.
>>	3. Tomamos una carta positiva $(U,\varphi=(y^1,\ldots,y^n))\in\mathcal A_N$ tal que $\pi(p)\in U$. Definimos $V=V_0\cap U$ y $W=(\pi|_{W_0})^{-1}(V)$. Entonces $\pi|_W:W\to V$ sigue siendo un difeomorfismo.
>>	4. Definimos una carta en $M$ por $z=\varphi\circ\pi|_W$. Consideramos el atlas $\mathcal A_M$ formado por todas las cartas de la forma $(W,z)$ construidas así, con $(U,\varphi)$ positiva en $N$.
>>	5. Veamos que $\mathcal A_M$ es un atlas orientado. Sean $(W_1,z_1)$ y $(W_2,z_2)$ dos cartas de $\mathcal A_M$, con $z_1=\varphi_1\circ\pi$ y $z_2=\varphi_2\circ\pi$, donde $(U_1,\varphi_1)$ y $(U_2,\varphi_2)$ son positivas en $N$.
>>	6. En $z_1(W_1\cap W_2)$ tenemos $z_2\circ z_1^{-1}=\varphi_2\circ\varphi_1^{-1}$ restringida al abierto correspondiente. Entonces $$J (z_{2}\circ z_{1}^{-1})(z_{1}(p))=J (\varphi_{2}\circ \varphi_{1}^{-1})(\varphi_{1}(p))$$
>>	7. Y recordamos que la $J (\varphi_{2}\circ \varphi_{1}^{-1})(\varphi_{1}(p))$ es igual a la matriz cambio de base entre los vectores tangentes de $\varphi_{1}$ y los de $\varphi_{2}$ y esta matriz de cambio de base es positiva, por que ambas cartas son positivas 
>>	8. Analogamente esto muestra que $z_{1}$ y $z_{2}$ tienen la misma orientacion. Por lo tanto $\mathcal A_M$ define una orientación en $M$.
>>	9. Probemos ahora que $\pi$ preserva orientación. Sea $(A,x=(x^1,\ldots,x^n))$ una carta positiva arbitraria de $M$ y sea $p\in A$.
>>	10. Elegimos una carta especial positiva $(W,z=(z^1,\ldots,z^n))$ alrededor de $p$, con $z=\varphi\circ\pi$, donde $(V,\varphi=(y^1,\ldots,y^n))$ es una carta positiva de $N$ alrededor de $\pi(p)$.
>>	11. Ahora resta ver que $\pi$ preserva orientacion  
>>	12. Osea dada una base orientada positiva cualquiera de $T_{p}M$  $$\mathcal{B_{1}}=\left\{ v_{1},\ldots,v_{m}\right \}$$ queremos probar que la base $\mathcal{B}_{2}=\{ (d\pi)_{p} v_{1},\ldots,(d\pi)_{p} v_{m} \}$ es positiva en $T_{\pi(p)}N$.
>>	13. Para eso tomamos una base positiva en $T_{p}M$ $$\widetilde{\mathcal{B}}_{1}=\left\{ \frac{\partial}{\partial z^{1}}\bigg|_{p},\ldots \frac{\partial}{\partial z^{n}}\bigg|_{p} \right \}$$ dada por la carta del paso 10. y la respectiva base en $T_{\pi(p)}N$ $$\widetilde{\mathcal{B}}_{2}=\left\{ \frac{\partial}{\partial y^{1}}\bigg|_{p},\ldots \frac{\partial}{\partial y^{n}}\bigg|_{p} \right \}$$
>>	14. Entonces por el [[GS - Pr7#^e4aa86]] sabemos que $$(d\pi)_{p}\left( \frac{\partial}{\partial z^{i}}\bigg|_{p}\right)=\frac{\partial}{\partial y^{i}}\bigg|_{p}$$ por ende $[(d\pi)_{p}]_{\widetilde {\mathcal{B}}_{1}}^{\widetilde{\mathcal{B}}_{2}}=Id$ 
>>	15. Y recordamos que el cambio de base entre $\mathcal{B}_{2}$ y $\widetilde{\mathcal{B}}_{2}$ es igual a $[(d\pi)_{p}]_{\mathcal{B}_{1}}^{\widetilde{\mathcal{B}}_{2}}$ y esto es lo que queremos ver si tiene determinante positivo
>>	16. Pero $$[(d\pi)_{p}]_{\mathcal{B}_{1}}^{\widetilde{\mathcal{B}}_{2}}=[(d\pi)_{p}]_{\widetilde {\mathcal{B}}_{1}}^{\widetilde{\mathcal{B}}_{2}}.C(\mathcal{B}_{1},\widetilde{\mathcal{B}}_{1})=C(\mathcal{B}_{1},\widetilde{\mathcal{B}}_{1})$$
>>	17. Pero el determinante de $C(\mathcal{B}_{1},\widetilde{\mathcal{B}}_{1})$ es positivo , por que ambas bases son positivas.