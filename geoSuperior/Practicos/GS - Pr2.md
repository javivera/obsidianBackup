### Ejercicio 1

>[!Exercise]
>Sea $M$ una variedad diferenciable, $I$ un intervalo en $\mathbb R$ y $\gamma:I\to M$ una curva diferenciable. La velocidad de $\gamma$ en el instante $t\in I$, que se denota por $\gamma'(t)$, es por definición el vector tangente que satisface $\gamma'(t)(f)=\frac{d}{ds}\big|_{0}f(\gamma(t+s))$ para toda función diferenciable definida en un entorno abierto de $\gamma(t)$ en $M$.
>
>- Mostrar que efectivamente $\gamma'(t)\in T_{\gamma(t)}M$.
>- Probar que $\gamma'(t)=(d\gamma)_t\left(\frac{\partial}{\partial s}\big|_t\right)\in T_{\gamma(t)}M$.
>- Mostrar que si $(U,\varphi=(x_1,\dots,x_n))$ es un sistema coordenado de $M$ alrededor de $\gamma(0)$ y $(\varphi\circ\gamma)(t)=(r_1(t),\dots,r_n(t))$ para $t$ próximos a $0$, entonces $$\gamma'(0)=\sum_{i=1}^n r_i'(0)\frac{\partial}{\partial x_i}\Big|_{\gamma(0)}.$$
>- Mostrar que para todo $p\in M$ y todo $v\in T_pM$ se cumple que $v=\sigma'(0)$ para alguna curva diferenciable $\sigma$ en $M$ con $\sigma(0)=p$.
>
>>[!Proof]-
>>- **(a)**
>>	1. Sea $f,g\in C^\infty(M)$.
>>	2. Entonces para la linealidad $$(\gamma'(t))(f+g)=\frac{d}{ds}\Big|_{0}(f+g)(\gamma(t+s))=\frac{d}{ds}\Big|_{0}f(\gamma(t+s))+\frac{d}{ds}\Big|_{0}g(\gamma(t+s))=\gamma'(t)(f)+\gamma'(t)(g).$$
>>	3. Para Leibniz, $$\begin{align}(\gamma'(t))(fg)&=\frac{d}{ds}\Big|_{0}(fg)(\gamma(t+s))\\&=\frac{d}{ds}\Big|_{0}\big(f(\gamma(t+s))g(\gamma(t+s))\big)\\&=\frac{d}{ds}\Big|_{0}f(\gamma(t+s))\cdot g(\gamma(t)) + f(\gamma(t))\cdot \frac{d}{ds}\Big|_{0}g(\gamma(t+s))\end{align}$$ (Notar que usamos Leibniz en $\frac{d}{ds}|_{0}$) 
>>	4. Es decir $$(\gamma'(t))(fg)=\gamma'(t)(f)\,g(\gamma(t)) + f(\gamma(t))\,\gamma'(t)(g).$$
>>	5. Luego $\gamma'(t)$ satisface la regla de Leibniz, por lo tanto $\gamma'(t)\in T_{\gamma(t)}M$.
>>- **(b)**
>>	1. Por definición, $$(\gamma'(t))(f)=\frac{d}{ds}\Big|_{0}f(\gamma(t+s))=\frac{d}{du}\Big|_{t}f(\gamma(u))$$ aca hicimos cambio de variable $u=t+s$ 
>>	2. Por definición del diferencial, $$(d\gamma)_t\!\left(\frac{\partial}{\partial u}\Big|_{t}\right)(f)=\frac{d}{du}\Big|_{t}(f\circ\gamma)(u).$$
>>	3. Por lo tanto, $$\gamma'(t)=(d\gamma)_t\!\left(\frac{\partial}{\partial u}\Big|_{t}\right).$$
>>- **(c)**
>>	1. Sea $(U,\varphi=(x_1,\dots,x_n))$ una carta con $\gamma(0)\in U$.
>>	2. Definimos $$(\varphi\circ\gamma)(t)=(r_1(t),\dots,r_n(t)).$$
>>	3. Como $\gamma'(0)\in T_{\gamma(0)}M$, existe una base $\left\{\frac{\partial}{\partial x_i}\big|_{\gamma(0)}\right\}$ tal que $$\gamma'(0)=\sum_{i=1}^n c_i\frac{\partial}{\partial x_i}\Big|_{\gamma(0)}.$$
>>	4. Evaluando en $x_i$ tenemos $\gamma'(0)(x_i)=c_i.$
>>	5. Pero por definición, $$\gamma'(0)(x_i)=\frac{d}{ds}\Big|_{0}x_i(\gamma(s))=\frac{d}{ds}\Big|_{0}r_i(s)=r_i'(0).$$
>>	6. Entonces $c_i=r_i'(0)$ y $$\gamma'(0)=\sum_{i=1}^n r_i'(0)\frac{\partial}{\partial x_i}\Big|_{\gamma(0)}.$$
>>- **(d)**
>>	1. Sea $p\in M$ y $v\in T_pM$.
>>	2. Tomamos una carta $(U,\varphi=(x_1,\dots,x_n))$ con $p\in U$.
>>	3. Entonces por definicion $$v=\sum_{i=1}^n v(x_i)\frac{\partial}{\partial x_i}\Big|_{p}.$$
>>	4. Por parte **(c)** sabemos que si $(\varphi\circ\sigma)(t)=(r_{1}(t),\ldots,t_{m}(t))$ entonces: $$\sigma'(0)=\sum^{m}_{i=1}r_{i}'(0) \frac{\partial}{\partial x_i}\Big|_{\sigma(0)}$$
>>	5. Entonces queremos encontrar $\sigma(t)$ tal que $\sigma(0)=p$ y $r_{i}'(0)=v(x_{i})$ 
>>	6. Si definimos $\sigma$ tal que $$(\varphi\circ\sigma)(t)=(x_{1}(p)+tv(x_{1}),\ldots,x_{m}(p)+tv(x_{m}))$$ (cumpliriamos que $r_{i}'(0)=(x_{i}(p)+tv(x_{i}))'(0)=v(x_{i})$) 
>>	7. Luego $$\sigma(t)=\varphi ^{-1}\bigg((x_{1}(p)+tv(x_{1}),\ldots,x_{m}(p)+tv(x_{m}))\bigg)$$
>>	8. Notemos que cumple $\sigma(0)=\varphi ^{-1}(x_{1}(p),\ldots,x_{m}(p))=p$ y por 6. $\sigma'(0)=v$ 

^6da36a

   
### Ejercicio 2

>[!Exercise]
>Sea $\pi$ la proyección canónica de $S^2$ al proyectivo $\mathbb{RP}^2$. Mostrar que la función $f:\mathbb{RP}^2\to\mathbb R$ está bien definida por $f(\pi(x,y,z))=x^6yz$ y es diferenciable. Probar que $v(f)=0$ para todo $v\in T_{\pi(1,0,0)}\mathbb{RP}^2$.
>
>>[!Proof]-
>>1. $f(x,y,z)=x^6yz=(-x)^6(-y)(-z)=f([(x,y,z)])$ entonces si $\pi_1\sim\pi_2$, $f(\pi_1)=f(\pi_2)$. Con lo cual $f$ está bien definida
>>2. $\tilde f:\mathbb{R}^3\to\mathbb{R}$  $f(x,y,z)=x^6yz$ es suave por ser producto de suaves $\tilde f|_{S^2}:S^2\to\mathbb{R}$ es suave.
>>3. Como $\pi:S^2\to\mathbb{RP}^2$ es difeomorfismo local afirmo $f$ es suave
>>4. Vemoslo, primero notamos $\tilde f|_{S^2}=f\circ\pi$. Luego sea $q\in\mathbb{RP}^2$ tenemos $p=\pi^{-1}(q)$
>>5. Como $\pi$ difeo local $\exists U$ abierto de $p$ tal que $\pi|_U:U\to\pi(U)$ difeomorfismo entonces $\pi|_U^{-1}:\pi(U)\to U$ es difeomorfismo, en particular es suave
>>6. Luego $$f|_{\pi(U)}=\tilde f\circ \pi|_U^{-1}$$ es composición de suaves por lo tanto es suave
>>7. Notar $\pi(U)$ es abierto de $\mathbb{R}\mathbb{P}^{2}$ (porque $\pi|_U$ es homeo y $U$ es abierto) que contiene a $q$.
>>8. Luego esto vale alrededor de cualquier punto de $\mathbb{R}\mathbb{P}^{2}$ por lo tanto $f$ es suave
>>9. Calculemos $v\in T_{\pi(1,0,0)}\mathbb{RP}^2$. Usamos el atlas $\{(U_i,\varphi_i)\}$ con $\varphi_1([x_1,x_2,x_3])=(x_2/x_1,x_3/x_1)$.
>>10. En este caso $p=\pi(1,0,0)$ luego $(U_1,\varphi_1)$ es carta de $p$ por que recordemos $U_1=\{[x_1,x_2,x_3]\in\mathbb{RP}^2:x_1\neq0\}$
>>11. Ahora podemos calcular $$\frac{\partial}{\partial x_i}\Big|_p f=\frac{\partial}{\partial u_i}\Big|_{\varphi_1(p)}(f\circ\varphi_{1}^{-1})$$ con $\varphi_{1}(\pi(0,0,0))=\varphi_1([1,0,0])=(0,0)$
>>12. Notemos primero $(f\circ\varphi_1^{-1})(u_1,u_2)=f([1,u_1,u_2])=u_1^6u_2$ entonces $$\frac{\partial}{\partial u_1}(f\circ\varphi_1^{-1})=6u_1^5u_2\quad\text{y }\quad\frac{\partial}{\partial u_2}(f\circ\varphi_1^{-1})=u_1^6$$evaluando en $(0,0)$: $$\frac{\partial}{\partial u_1}\Big|_{(0,0)}(f\circ\varphi ^{-1})=0,\qquad \frac{\partial}{\partial u_2}\Big|_{(0,0)}(f\circ\varphi ^{-1})=0$$
>>13. Como $v\in T_{\pi(1,0,0)}\mathbb{RP}^2$ (y sabemos que $\frac{\partial}{\partial x_{i}}\big|_{\pi(0,0,0)}$ es base) y recordando $(v+h)(f)=v(f)+h(f)$ $$\begin{align}v(f)&=\left(c_{1}\frac{\partial}{\partial x_{1}}\Big|_{\pi(0,0,0)}+c_{2}\frac{\partial}{\partial x_{2}}\Big|_{\pi(0,0,0)}\right)(f)\\&=c_{1}\frac{\partial}{\partial x_{1}}\Big|_{\pi(0,0,0)}f+c_{2}\frac{\partial}{\partial x_{1}}\Big|_{\pi(0,0,0)}f\\&=c_1\frac{\partial}{\partial u_1}\Big|_{(0,0)}(f\circ\varphi ^{-1})+c_2\frac{\partial}{\partial u_2}\Big|_{(0,0)}(f\circ\varphi ^{-1})\\&=0\end{align}$$

### Ejercicio 3

>[!Exercise]
>Sean $M$ y $N$ variedades diferenciables, y sean $\pi_1:M\times N\to M$ y $\pi_2:M\times N\to N$ las proyecciones canónicas. Considerar en $M\times N$ la estructura diferenciable producto.
>- Mostrar que una función $f$ de una variedad diferenciable en $M\times N$ es diferenciable si y sólo si $\pi_1\circ f$ y $\pi_2\circ f$ lo son.
>- Fijamos $p\in M$ y $q\in N$. Se definen $i_q:M\to M\times N$ por $i_q(p')=(p',q)$ e $i_p$ análogamente.
>- Se definen también las aplicaciones $F:T_pM\times T_qN\to T_{(p,q)}(M\times N)$ por
>$$F(X,Y)(f)=X(f\circ i_q)+Y(f\circ i_p),$$
>y $G:T_{(p,q)}(M\times N)\to T_pM\times T_qN$ por
>$$G(v)=((d\pi_1)_{(p,q)}v,(d\pi_2)_{(p,q)}v).$$
>Mostrar que el conjunto de llegada de $F$ es de hecho $T_{(p,q)}(M\times N)$. Probar que $G\circ F=\operatorname{id}$ y deducir de allí que $F$ y $G$ son isomorfismos.
>
>>[!Proof]-
>>- **(a)**
>>	1. Sea $f:Q\to M\times N$ suave.
>>	2. Dado $p\in Q$, existen cartas $(U,\varphi)$ de $Q$ con $p\in U$ y $(V_1\times V_2,\psi_1\times\psi_2)$ de $M\times N$ tales que $f(U)\subset V_1\times V_2$.
>>	3. Entonces
>>	$$(\psi_1\times\psi_2)\circ f\circ \varphi^{-1}:\varphi(U)\subset\mathbb{R}^k\to\mathbb{R}^{m+n}$$
>>	es suave.
>>	4. Por definición de la carta producto,
>>	$$(\psi_1\times\psi_2)(x,y)=(\psi_1(x),\psi_2(y))$$
>>	y por lo tanto
>>	$$(\psi_1\times\psi_2)\circ f\circ \varphi^{-1}
>>	=\big(\psi_1\circ(\pi_1\circ f)\circ\varphi^{-1},\;\psi_2\circ(\pi_2\circ f)\circ\varphi^{-1}\big).$$
>>	5. Como una aplicación a $\mathbb{R}^{m+n}$ es suave si y solo si cada componente lo es, se concluye que
>>	$$\psi_1\circ(\pi_1\circ f)\circ\varphi^{-1}\quad\text{y}\quad \psi_2\circ(\pi_2\circ f)\circ\varphi^{-1}$$
>>	son suaves.
>>	6. Por definición, $\pi_1\circ f$ y $\pi_2\circ f$ son suaves.
>>- **(b)**
>>	1. (I) Veamos linealidad: $$\begin{align} F(X,Y)(f+\lambda g)&=X((f+\lambda g)\circ i_q)+Y((f+\lambda g)\circ i_p)\\&=X(f\circ i_q)+\lambda X(g\circ i_q)+Y(f\circ i_p)+\lambda Y(g\circ i_p)\\&=F(X,Y)(f)+\lambda F(X,Y)(g). \end{align}$$
>>	2. (II) Regla de Leibniz: $$\begin{align} F(X,Y)(fg)&=X((fg)\circ i_q)+Y((fg)\circ i_p)\\&=X((f\circ i_q)(g\circ i_q))+Y((f\circ i_p)(g\circ i_p))\\&=X(f\circ i_q)\,g(p,q)+X(g\circ i_q)\,f(p,q)\\&\quad+Y(f\circ i_p)\,g(p,q)+Y(g\circ i_p)\,f(p,q)\\&=F(X,Y)(f)\,g(p,q)+F(X,Y)(g)\,f(p,q). \end{align}$$  
>>	3. Entonces $F(X,Y)$ es derivación en $(p,q)$, es decir:  $$F(X,Y)\in T_{(p,q)}(M\times N).$$
>>- **(c)**
>>	1. Sea $(X,Y)\in T_pM\times T_qN$. Entonces
>>	$$(G\circ F)(X,Y)=G(F(X,Y))=(d\pi_1(F(X,Y)),d\pi_2(F(X,Y)))\in T_pM\times T_qN.$$
>>	2. Sea $f\in C^\infty(M)$, entonces $f\circ\pi_1\in C^\infty(M\times N)$ y
>>	$$d\pi_1(F(X,Y))(f)=F(X,Y)(f\circ\pi_1)=X((f\circ\pi_1)\circ i_q)+Y((f\circ\pi_1)\circ i_p).$$
>>	3. Pero $(f\circ\pi_1)\circ i_p=f(p)$ es constante, luego
>>	$$d\pi_1(F(X,Y))(f)=X((f\circ\pi_1)\circ i_q)=X(f).$$
>>	4. Análogamente, si $g\in C^\infty(N)$,
>>	$$d\pi_2(F(X,Y))(g)=Y(g).$$
>>	5. Como vale para cualquier función, se sigue que
>>	$$d\pi_1(F(X,Y))=X,\qquad d\pi_2(F(X,Y))=Y.$$
>>	6. Luego
>>	$$(G\circ F)(X,Y)=(X,Y),$$
>>	es decir,
>>	$$G\circ F=\operatorname{Id}.$$
>>	7. Entonces $F$ es inyectiva, porque si $F(X)=F(X')$,
>>	$$X=(G\circ F)(X)=G(F(X))=G(F(X'))=X'.$$
>>	8. Además $G$ es sobreyectiva, porque dado $y\in T_pM\times T_qN$, si tomamos $x=F(y)\in T_{(p,q)}(M\times N)$, entonces
>>	$$G(x)=G(F(y))=(G\circ F)(y)=y.$$
>>	9. Ahora notamos $$\dim T_{(p,q)}(M\times N)=\dim(T_pM\times T_qN),$$porque ambos tienen una base con $m+n$ vectores
>>	10. Entonces se sigue que $F$ es monomorfismo si y solo si es isomorfismo. Lo mismo con $G$.
>>	11. Luego $F$ y $G$ son isomorfismos.
>>	12. Falta ver que $F$ y $G$ son lineales.
>>	13. Para $F$, dados $(X,Y),(\widetilde X,\widetilde Y)\in T_pM\times T_qN$ y $\lambda\in\mathbb R$,
>>	$$\begin{align}
>>	F((X,Y)+\lambda(\widetilde X,\widetilde Y))(f)
>>	&=F(X+\lambda\widetilde X,\;Y+\lambda\widetilde Y)(f)\\
>>	&=(X+\lambda\widetilde X)(f\circ i_q)+(Y+\lambda\widetilde Y)(f\circ i_p)\\
>>	&=X(f\circ i_q)+\lambda\widetilde X(f\circ i_q)+Y(f\circ i_p)+\lambda\widetilde Y(f\circ i_p)\\
>>	&=F(X,Y)(f)+\lambda F(\widetilde X,\widetilde Y)(f).
>>	\end{align}$$
>>	14. Luego
>>	$$F((X,Y)+\lambda(\widetilde X,\widetilde Y))=F(X,Y)+\lambda F(\widetilde X,\widetilde Y).$$
>>	15. Para $G$, si $v,\widetilde v\in T_{(p,q)}(M\times N)$,
>>	$$G(v+\widetilde v)=(d\pi_1(v+\widetilde v),d\pi_2(v+\widetilde v))=(d\pi_1(v)+d\pi_1(\widetilde v),d\pi_2(v)+d\pi_2(\widetilde v)),$$
>>	luego
>>	$$G(v+\widetilde v)=G(v)+G(\widetilde v),$$
>>	y análogamente
>>	$$G(\lambda v)=\lambda G(v).$$
>>	16. Por lo tanto, $F$ y $G$ son lineales y, en consecuencia, isomorfismos de espacios vectoriales.

### Ejercicio 4

>[!Exercise]
>Sea $(\mathbb R^3,\operatorname{id}=(\tilde{\alpha },\tilde{\beta},\tilde{\gamma}))$ el sistema coordenado canónico de $\mathbb R^3$. Encontrar otro sistema coordenado $(\mathbb R^3,\varphi=(\alpha ,\beta,\gamma))$ con $x=\alpha$ pero tal que
>$$\frac{\partial^{\operatorname{id}}}{\partial \tilde{\alpha }}\Big|_0\neq \frac{\partial^\varphi}{\partial \alpha}\Big|_0.$$
>
>>[!Proof]-
>>1. Sea $(\mathbb R^3,\operatorname{Id}=(\widetilde\alpha,\widetilde\beta,\widetilde\gamma))$ y $(\mathbb R^3,\varphi=(\alpha,\beta,\gamma))$.
>>2. Como $x=\alpha$, tenemos $\widetilde\alpha=\alpha$.
>>3. Entonces
>>$$\begin{align}\frac{\partial}{\partial \tilde\alpha}\Big|_0&=c_1\frac{\partial}{\partial \alpha}\Big|_0+c_2\frac{\partial}{\partial \beta}\Big|_0+c_3\frac{\partial}{\partial \gamma}\Big|_0\\&=\frac{\partial}{\partial\tilde\alpha}\Big|_0\alpha \frac{\partial}{\partial \alpha}\Big|_0+\frac{\partial}{\partial\tilde\alpha}\Big|_0 \beta \frac{\partial}{\partial\beta}\Big|_0+\frac{\partial}{\partial \tilde\alpha}\Big|_0\gamma \frac{\partial}{\partial \gamma}\Big|_0\end{align}$$ (Aplicando ambos lados a $\tilde\alpha$ etc),
>>4. Como tenemos que exigir $\widetilde\alpha=\alpha$, sucede $$\frac{\partial}{\partial \tilde\alpha}\Big|_0\alpha
>>=\frac{\partial}{\partial x}\Big|_{\operatorname{Id}(0)} \alpha\circ\operatorname{Id}^{-1}
>>=\frac{\partial}{\partial x}\Big|_{0} \tilde\alpha\circ\operatorname{Id}^{-1}=\frac{\partial}{\partial x}\Big|_0 x
>>=1,$$
>>5. Luego $c_1=1$, y por lo tanto
>>$$\frac{\partial}{\partial \tilde\alpha}\Big|_0=\frac{\partial}{\partial \alpha}\Big|_0+\frac{\partial}{\partial\tilde\alpha}\Big|_0 \beta \frac{\partial}{\partial\beta}\Big|_0+\frac{\partial}{\partial \tilde\alpha}\Big|_0\gamma \frac{\partial}{\partial \gamma}\Big|_0$$
>>6. Entonces queremos que $\frac{\partial}{\partial \widetilde\alpha}\big|_0\beta\neq 0$ o bien $\frac{\partial}{\partial \widetilde\alpha}\big|_0\gamma\neq 0$.
>>7. Por ejemplo, tomemos
>>$$\beta( x, y, z)= y+ x,\qquad \gamma( x, y, z)= z.$$
>>8. Entonces $$\varphi( x, y, z)=( x, y+ x, z),$$
>>que es un sistema coordenado, y además
>>$$\frac{\partial}{\partial \widetilde\alpha}\Big|_0\beta
>>=\frac{\partial}{\partial x}\Big|_0(y+x)=1\neq 0.$$
>>9. Luego
>>$$\frac{\partial^\varphi}{\partial \alpha}\Big|_0\neq \frac{\partial^{\operatorname{Id}}}{\partial \tilde\alpha }\Big|_0.$$

### Ejercicio 5

>[!Exercise]
>Sea $F:U\subseteq\mathbb R^n\to\mathbb R^n$ una función suave y sea $p\in U$ tal que la matriz Jacobiana de $F$ en $p$, $J F(p)$, es la identidad. ¿Qué puede decir de la transformación lineal $(dF)_p:T_p\mathbb R^n\to T_{F(p)}\mathbb R^n$? ¿Cuál es la imagen de $\frac{\partial^{\operatorname{id}}}{\partial x_i}\big|_p$ bajo $(dF)_p$?
>
>>[!Proof]-
>>1. Asumimos $(\mathbb R^n,\operatorname{Id}=(x_1,\dots,x_n))$.
>>2. Escribimos
>>$$(dF)_p\left(\frac{\partial}{\partial x_i}\Big|_p\right)=\sum_{j=1}^n c_j\frac{\partial}{\partial x_j}\Big|_{F(p)}.$$
>>3. Entonces
>>$$c_j=(dF)_p\left(\frac{\partial}{\partial x_i}\Big|_p\right)(x_j).$$
>>4. Luego $$\begin{align}c_j&=\frac{\partial}{\partial x_i}\Big|_p(x_j\circ F)\\&=\frac{\partial}{\partial y_{i}}\Big|_{Id(p)}(x_j\circ F\circ \operatorname{Id}^{-1})\\&=\frac{\partial}{\partial x_i}\Big|_p F_j.\end{align}$$
>>5. Pero esto es la coordenada $(j,i)$ de la matriz Jacobiana $JF(p)$.
>>6. Como por hipótesis $JF(p)$ es la identidad, se tiene
>>$$c_j=\delta_{ij}.$$
>>7. Entonces
>>$$(dF)_p\left(\frac{\partial}{\partial x_i}\Big|_p\right)=\frac{\partial}{\partial x_i}\Big|_{F(p)}.$$
>>8. Por lo tanto, la matriz de $(dF)_p$ en las bases canónicas de $T_p\mathbb R^n$ y $T_{F(p)}\mathbb R^n$ es la identidad.
>>9. En particular, $(dF)_p$ es un isomorfismo y de hecho coincide con la identidad en esas coordenadas.
>>10. Otra forma es usar [[GS - Teo7#^bb7fdf]] y sale directamente por que $\hat{F}=Id\circ F\circ\varphi ^{-1}=F$
>>11. Entonces si tomamos $B_{1},B_{2}$ bases canonicas de $T_{p}(\mathbb{R}^{n})$ y $T_{F(p)}\mathbb{R}^{n}$ respectivamente  $$[dF_{p}]_{B_{1}}^{B_{2}}=J \hat{F}(\varphi(p))=JF(Id(p))=(JF)_{p}=Id$$

### Ejercicio 6

>[!Exercise]
>Sea $M$ una variedad diferenciable, y sean $v\in T_pM$ y $f\in C^\infty(M)$. Mostrar que
>$$(df)_p(v)=(vf)\,\frac{\partial^{\operatorname{id}}}{\partial t}\Big|_{f(p)}.$$
>
>>[!Proof]-
>>1. Consideramos $(\mathbb R,\operatorname{Id}=t)$.
>>2. Como $(df)_p(v)\in T_{f(p)}\mathbb R$, existe $z\in\mathbb R$ tal que
>>$$(df)_p(v)=z\,\frac{\partial^{\operatorname{Id}}}{\partial t}\Big|_{f(p)}.$$
>>3. Sea $g\in C^\infty(\mathbb R)$. Entonces
>>$$\big((df)_p(v)\big)(g)=z\,\frac{\partial^{\operatorname{Id}}}{\partial t}\Big|_{f(p)}g.$$
>>4. Ahora tomamos $h=\operatorname{Id}:\mathbb R\to\mathbb R$. Osea $h(t)=t$ Entonces
>>$$\big((df)_p(v)\big)(h)=v(h\circ f)=v(f).$$
>>5. Pero también$$\big((df)_p(v)\big)(h)=z\,\frac{\partial^{\operatorname{Id}}}{\partial t}\Big|_{f(p)}t=z.$$
>>6. Luego
>>$$z=v(f).$$
>>7. Sustituyendo en el paso 2, obtenemos
>>$$(df)_p(v)=(vf)\,\frac{\partial^{\operatorname{Id}}}{\partial t}\Big|_{f(p)}.$$

### Ejercicio 7

>[!Exercise]
>- Sean $M$, $N$ variedades suaves y $F:M\to N$ una función suave, con $M$ conexa. Probar que $(dF)_p:T_pM\to T_{F(p)}N$ es la transformación nula para todo $p\in M$ si y solo si $F$ es constante.
>- Sea $M$ variedad suave y $f\in C^\infty(M)$. Probar que un máximo local de $f$ es un punto crítico de $f$; es decir, $(df)_p$ es la transformación nula.
>
>>[!Proof]-
>>- **(a)**
>>1. Supongamos primero que $F$ es constante.
>>2. Sea $p\in M$. Tomamos cartas $(U,\psi=(x_1,\dots,x_n))$ de $M$ con $p\in U$ y $(V,\phi=(\widetilde x_1,\dots,\widetilde x_m))$ de $N$ con $F(p)\in V$.
>>3. Sean $B_1=\left\{\frac{\partial}{\partial x_i}\big|_p\right\}$ y $B_2=\left\{\frac{\partial}{\partial \widetilde x_j}\big|_{F(p)}\right\}$ las bases coordenadas.
>>4. La matriz de $(dF)_p$ respecto de esas bases es
>>$$[(dF)_p]_{B_1}^{B_2}=J\widehat F(\psi(p)),$$
>>donde
>>$$\widehat F=\phi\circ F\circ \psi^{-1}.$$
>>5. Pero como $F$ es constante, también $\widehat F$ es constante.
>>6. Luego su matriz jacobiana es la matriz nula.
>>7. Por lo tanto
>>$$[(dF)_p]_{B_1}^{B_2}=0,$$
>>y entonces $(dF)_p$ es el operador nulo.
>>8. Recíprocamente, supongamos $(dF)_p=0$ para todo $p\in M$.
>>9. Sea $\alpha:[0,1]\to M$ una curva suave. Entonces para todo $t\in[0,1]$,
>>$$(d(F\circ\alpha))_t=(dF)_{\alpha(t)}\circ d\alpha_t=0.$$
>>10. Ahora sea $(U,\psi)$ una carta de $N$ con $F(\alpha(t))\in U$.
>>11. Entonces $\psi\circ F\circ\alpha:[0,1]\to\mathbb R^m$ es suave y
>>$$d(\psi\circ F\circ\alpha)_t=d\psi_{F(\alpha(t))}\circ d(F\circ\alpha)_t=0.$$
>>12. Luego
>>$$(\psi\circ F\circ\alpha)'(t)=0,$$
>>por lo tanto $\psi\circ F\circ\alpha$ es constante.
>>13. Como $\psi$ es homeomorfismo, se sigue que $F\circ\alpha$ es constante.
>>14. Ahora sea $q\in M$. Como $M$ es conexa, existe una curva suave por tramos $\widetilde\alpha:[0,1]\to M$ tal que $\widetilde\alpha(0)=p$ y $\widetilde\alpha(1)=q$.
>>15. Entonces $F\circ\widetilde\alpha$ es constante, o sea
>>$$F(\widetilde\alpha(0))=F(\widetilde\alpha(1)).$$
>>16. Por lo tanto
>>$$F(p)=F(q).$$
>>17. Como esto vale para todo $q\in M$, concluimos que $F$ es constante.
>>- **(b)**
>>1. Sea $f\in C^\infty(M)$ y sea $p\in M$ un máximo local.
>>2. Entonces existe un abierto $U$ de $p$ tal que
>>$$f(u)\le f(p)\qquad \forall\,u\in U.$$
>>3. Sea ahora $v\in T_pM$.
>>4. Entonces existe una curva suave $\alpha:(-\varepsilon,\varepsilon)\to M$ tal que
>>$$\alpha'(0)=v,\qquad \alpha(0)=p.$$
>>5. Como $\alpha$ es continua en $p$ y $U$ es abierto, el conjunto
>>$$I=(-\varepsilon,\varepsilon)\cap \alpha^{-1}(U)$$
>>es un abierto de $\mathbb R$ y además $0\in I$.
>>6. Luego, para todo $t\in I$,
>>$$f(\alpha(t))\le f(\alpha(0)).$$
>>7. Por lo tanto $0$ es un máximo local de $f\circ\alpha$.
>>8. Entonces
>>$$(f\circ\alpha)'(0)=0.$$
>>9. Pero
>>$$(f\circ\alpha)'(0)=(df)_p(v).$$
>>10. Como esto vale para todo $v\in T_pM$, concluimos que
>>$$(df)_p\equiv 0_{T_pM}.$$

### Ejercicio 8 (Opcional)

>[!Exercise]-
>Sea $M$ una variedad diferenciable. Sea $f\in C^\infty(M)$ y $p\in M$ un punto crítico de $f$. El Hessiano de $f$ en $p$ es la función $H_p:T_pM\to\mathbb R$ definida por $H_p(v)=(f\circ\alpha)''(0)$, donde $\alpha:(-\varepsilon,\varepsilon)\to M$ es cualquier curva suave tal que $\alpha(0)=p$ y $\alpha'(0)=v$. Mostrar la buena definición del Hessiano.
>
>>[!Proof]-
>>1. Tomemos una carta $(U,x_1,\dots,x_n)$ alrededor de $p$ con $x(p)=0$, y escribamos $\tilde f=f\circ x^{-1}$.
>>2. Si $\alpha$ es una curva con $\alpha(0)=p$ y $\alpha'(0)=v$, sea $\beta=x\circ\alpha$. Entonces $\beta(0)=0$ y $\beta'(0)=a$, donde
>>$$a=(a_1,\dots,a_n)$$
>>son las coordenadas de $v$ en la base $\partial/\partial x_i|_p$.
>>3. Por regla de la cadena,
>>$$(f\circ\alpha)''(0)=\sum_{i,j}\frac{\partial^2\tilde f}{\partial x_i\partial x_j}(0)\,a_i a_j+\sum_i \frac{\partial\tilde f}{\partial x_i}(0)\,\beta_i''(0).$$
>>4. Como $p$ es crítico, $\partial\tilde f/\partial x_i(0)=0$ para todo $i$.
>>5. Luego
>>$$(f\circ\alpha)''(0)=\sum_{i,j}\frac{\partial^2\tilde f}{\partial x_i\partial x_j}(0)\,a_i a_j,$$
>>que depende solamente de $a$, es decir, solamente de $v$.
>>6. Por lo tanto $H_p(v)$ está bien definido.

### Ejercicio 9

>[!Exercise]
>Sea $V$ un espacio vectorial de dimensión finita. Mostrar que
>$$F:V\to T_pV,\qquad F(v)(f)=\frac{d}{dt}\Big|_0 f(p+tv)$$
>para $f\in C^\infty(V)$, es un isomorfismo de espacios vectoriales. En particular, $V$ y $T_pV$ son naturalmente isomorfos.
>
>>[!Proof]-
>>1. Para cada $v\in V$, la aplicación
>>$$F(v):C^\infty(V)\to\mathbb{R},\qquad F(v)(f)=\frac{d}{dt}\Big|_0 f(p+tv)$$
>>es una derivación en $p$, luego $F(v)\in T_pV$.
>>2. Veamos primero que $F$ es lineal. Sean $v,w\in V$ y $\lambda\in\mathbb{R}$. Tomamos una base $(e_1,\dots,e_n)$ de $V$ y las coordenadas lineales asociadas $(x_1,\dots,x_n)$.
>>3. Si $v=\sum_i x_i(v)e_i$, entonces
>>$$F(v)=\sum_{i=1}^n x_i(v)\frac{\partial}{\partial x_i}\Big|_p,$$
>>pues para cada coordenada lineal $x_j$ se tiene
>>$$F(v)(x_j)=\frac{d}{dt}\Big|_0 x_j(p+tv)=\frac{d}{dt}\Big|_0 \bigl(x_j(p)+t\,x_j(v)\bigr)=x_j(v).$$
>>4. De aquí se deduce inmediatamente que
>>$$F(v+w)=\sum_i x_i(v+w)\frac{\partial}{\partial x_i}\Big|_p
>>=\sum_i x_i(v)\frac{\partial}{\partial x_i}\Big|_p+\sum_i x_i(w)\frac{\partial}{\partial x_i}\Big|_p
>>=F(v)+F(w),$$
>>y análogamente $$F(\lambda v)=\lambda F(v).$$
>>5. Veamos que $F$ es inyectiva. Si $v\neq 0$, existe una forma lineal $\ell\in V^*$ tal que $\ell(v)\neq 0$.
>>6. Considerando $\ell$ como función suave sobre $V$,
>>$$F(v)(\ell)=\frac{d}{dt}\Big|_0 \ell(p+tv)=\frac{d}{dt}\Big|_0 \bigl(\ell(p)+t\,\ell(v)\bigr)=\ell(v)\neq 0.$$
>>7. Luego $F(v)\neq 0$, así que $\ker F=\{0\}$ y $F$ es inyectiva.
>>8. Para la sobreyectividad, tomemos $w\in T_pV$. Como $(x_1,\dots,x_n)$ es un sistema coordenado lineal, existe una única escritura
>>$$w=\sum_{i=1}^n c_i\frac{\partial}{\partial x_i}\Big|_p.$$
>>9. Definimos
>>$$v=\sum_{i=1}^n c_i e_i.$$
>>Entonces, usando la fórmula del paso 3,
>>$$F(v)=\sum_{i=1}^n x_i(v)\frac{\partial}{\partial x_i}\Big|_p.$$
>>10. Pero
>>$$x_i(v)=x_i\left(\sum_{j=1}^n c_j e_j\right)=\sum_{j=1}^n c_j\,x_i(e_j)=c_i,$$
>>porque $x_i(e_j)=\delta_{ij}$.
>>11. Por lo tanto,
>>$$F(v)=\sum_{i=1}^n c_i\frac{\partial}{\partial x_i}\Big|_p=w,$$
>>y $F$ es sobreyectiva.
>>12. Concluimos que $F:V\to T_pV$ es un isomorfismo de espacios vectoriales. En particular, $V$ y $T_pV$ son naturalmente isomorfos.

### Ejercicio 10

>[!Exercise]
>Para cada uno de los vectores tangentes del plano, dar su representación en términos de coordenadas polares en el semiplano derecho $\{(x,y)\in\mathbb R^2:x>0\}$:
>
>- $X|_p=x\,\frac{\partial}{\partial x}\big|_p+y\,\frac{\partial}{\partial y}\big|_p$
>- $Y|_p=x\,\frac{\partial}{\partial y}\big|_p-y\,\frac{\partial}{\partial x}\big|_p$
>- $Z|_p=(x^2+y^2)\,\frac{\partial}{\partial x}\big|_p$
>
>>[!Proof]-
>>1. Trabajamos en el semiplano derecho
>>$$U=\{(x,y)\in\mathbb{R}^{2}:x>0\},$$
>>con la carta polar
>>$$\psi:U\to(0,\infty)\times\left(-\frac{\pi}{2},\frac{\pi}{2}\right),\qquad \psi^{-1}(r,\theta)=(r\cos\theta,r\sin\theta).$$
>>2. Consideramos en $T_pU$ la base canónica
>>$$B_1=\left(\frac{\partial}{\partial x}\Big|_p,\frac{\partial}{\partial y}\Big|_p\right)$$
>>y la base polar
>>$$B_2=\left(\frac{\partial}{\partial r}\Big|_p,\frac{\partial}{\partial \theta}\Big|_p\right).$$
>>3. La aplicación de cambio de coordenadas es
>>$$\operatorname{Id}\circ\psi^{-1}(r,\theta)=(r\cos\theta,r\sin\theta),$$
>>cuya matriz jacobiana es
>>$$J(\operatorname{Id}\circ\psi^{-1})(r,\theta)=
>>\begin{pmatrix}
>>\cos\theta & -r\sin\theta\\
>>\sin\theta & r\cos\theta
>>\end{pmatrix}.$$
>>4. Esta matriz da el cambio de base de $B_2$ a $B_1$. Invirtiendo, obtenemos el cambio de base de $B_1$ a $B_2$:
>>$$
>>\begin{pmatrix}
>>\cos\theta & \sin\theta\\
>>-\dfrac{\sin\theta}{r} & \dfrac{\cos\theta}{r}
>>\end{pmatrix}.
>>$$
>>Por lo tanto
>>$$\frac{\partial}{\partial x}\Big|_p=\cos\theta\,\frac{\partial}{\partial r}\Big|_p-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p,$$
>>$$\frac{\partial}{\partial y}\Big|_p=\sin\theta\,\frac{\partial}{\partial r}\Big|_p+\frac{\cos\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p.$$
>>5. Como $x=r\cos\theta$ e $y=r\sin\theta$, para
>>$$X|_p=x\,\frac{\partial}{\partial x}\Big|_p+y\,\frac{\partial}{\partial y}\Big|_p$$
>>tenemos
>>$$\begin{aligned}
>>X|_p&=r\cos\theta\left(\cos\theta\,\frac{\partial}{\partial r}\Big|_p-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p\right)
>>+r\sin\theta\left(\sin\theta\,\frac{\partial}{\partial r}\Big|_p+\frac{\cos\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p\right)\\
>>&=r(\cos^2\theta+\sin^2\theta)\frac{\partial}{\partial r}\Big|_p=r\,\frac{\partial}{\partial r}\Big|_p.
>>\end{aligned}$$
>>6. Para
>>$$Y|_p=x\,\frac{\partial}{\partial y}\Big|_p-y\,\frac{\partial}{\partial x}\Big|_p$$
>>obtenemos
>>$$\begin{aligned}
>>Y|_p&=r\cos\theta\left(\sin\theta\,\frac{\partial}{\partial r}\Big|_p+\frac{\cos\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p\right)
>>-r\sin\theta\left(\cos\theta\,\frac{\partial}{\partial r}\Big|_p-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p\right)\\
>>&=(\cos^2\theta+\sin^2\theta)\frac{\partial}{\partial \theta}\Big|_p=\frac{\partial}{\partial \theta}\Big|_p.
>>\end{aligned}$$
>>7. Finalmente, para
>>$$Z|_p=(x^2+y^2)\,\frac{\partial}{\partial x}\Big|_p=r^2\,\frac{\partial}{\partial x}\Big|_p,$$
>>resulta
>>$$Z|_p=r^2\left(\cos\theta\,\frac{\partial}{\partial r}\Big|_p-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\Big|_p\right)
>>=r^2\cos\theta\,\frac{\partial}{\partial r}\Big|_p-r\sin\theta\,\frac{\partial}{\partial \theta}\Big|_p.$$

### Ejercicio 11

>[!Exercise]
>Sea $M=\{(x,y)\in\mathbb R^2:y>0\}$ con coordenadas canónicas $(x,y)$ y sea $\psi:M\to(0,\infty)\times(0,\pi)$ el sistema coordenado tal que $\psi^{-1}(r,\theta)=(r\cos\theta,r\sin\theta)$. Escribir el vector tangente $r\,\frac{\partial}{\partial r}$ en la base canónica $\left(\frac{\partial}{\partial x},\frac{\partial}{\partial y}\right)$.
>
>>[!Proof]-
>>1. Igual que en el ejercicio anterior,
>>$$\frac{\partial}{\partial r}=\cos\theta\,\frac{\partial}{\partial x}+\sin\theta\,\frac{\partial}{\partial y}.$$
>>2. Multiplicando por $r$,
>>$$r\,\frac{\partial}{\partial r}=r\cos\theta\,\frac{\partial}{\partial x}+r\sin\theta\,\frac{\partial}{\partial y}.$$
>>3. Como $x=r\cos\theta$ e $y=r\sin\theta$, queda
>>$$r\,\frac{\partial}{\partial r}=x\,\frac{\partial}{\partial x}+y\,\frac{\partial}{\partial y}.$$

### Ejercicio 12

>[!Exercise]
>Mostrar que la inclusión $\iota:S^2\to\mathbb R^3$ es suave. Dado $p\in S^2$ con segunda coordenada negativa, hallar la matriz de $(d\iota)_p$ con respecto a las bases $\left(\frac{\partial}{\partial u},\frac{\partial}{\partial v}\right)$ y la base canónica de $\mathbb R^3$, donde $\varphi_2^-=(u,v)$.
>
>>[!Proof]-
>>1. La inclusión $\iota$ es la restricción a $S^2$ de la identidad de $\mathbb R^3$, luego es continua.
>>2. En cualquier carta $\varphi_i^\pm$ de casquete, la expresión coordenada de $\iota$ es simplemente la parametrización inversa del casquete correspondiente, que es suave.
>>3. Por lo tanto $\iota$ es suave.
>>4. Si $p$ tiene segunda coordenada negativa, entonces $p\in U_2^-=\{(x,y,z)\in S^2:y<0\}$, y la carta es
>>$$\varphi_2^-(x,y,z)=(u,v)=(x,z).$$
>>5. Su inversa es
>>$$(\varphi_2^-)^{-1}(u,v)=\bigl(u,\,-\sqrt{1-u^2-v^2},\,v\bigr).$$
>>6. Entonces la expresión coordenada de $\iota$ es
>>$$\iota\circ(\varphi_2^-)^{-1}(u,v)=\bigl(u,\,-\sqrt{1-u^2-v^2},\,v\bigr).$$
>>7. Derivando, la matriz jacobiana es
>>$$\begin{pmatrix}
>>1 & 0\\[4pt]
>>\dfrac{u}{\sqrt{1-u^2-v^2}} & \dfrac{v}{\sqrt{1-u^2-v^2}}\\[8pt]
>>0 & 1
>>\end{pmatrix}.$$
>>8. Evaluada en $(u,v)=\varphi_2^-(p)$, ésa es la matriz de $(d\iota)_p$ respecto de las bases pedidas.

### Ejercicio 13 (Opcional)

>[!Exercise]
>Sea $S^3$ vista como la esfera unidad de $\mathbb C^2$ y sea $S^2$ vista como la esfera de Riemann. Considerar la fibración de Hopf $\pi:S^3\to S^2$ dada por $\pi(z_1,z_2)=z_2/z_1$. Probar que $\pi$ es diferenciable y calcular la diferencial en los puntos $(1,0)$, $(i,0)$, $(0,1)$ y $(0,i)$.
>
>>[!Proof]-
>>1. Sobre el abierto $\{z_1\neq 0\}\subset S^3$, la aplicación $\pi$ toma valores en la carta afín $\mathbb C\subset S^2$ y viene dada por el cociente complejo $z_2/z_1$, que es suave.
>>2. Sobre el abierto $\{z_2\neq 0\}$, usando la carta en torno a $\infty$ dada por $\psi(w)=1/w$, se tiene
>>$$\psi\circ\pi(z_1,z_2)=z_1/z_2,$$
>>que también es suave.
>>3. Luego $\pi$ es diferenciable en todo $S^3$.
>>4. Cerca de $(1,0)$ usamos coordenadas locales
>>$$\Phi(w,t)=\left(\frac{e^{it}}{\sqrt{1+|w|^2}},\frac{we^{it}}{\sqrt{1+|w|^2}}\right),$$
>>con $w=a+ib$ y $t$ real.
>>5. En estas coordenadas, $\pi\circ\Phi(w,t)=w$. Por lo tanto la matriz de la diferencial en la base $(\partial_a,\partial_b,\partial_t)$ del dominio y la base canónica de $\mathbb R^2\simeq\mathbb C$ es
>>$$\begin{pmatrix}
>>1&0&0\\
>>0&1&0
>>\end{pmatrix}.$$
>>6. Lo mismo vale en $(i,0)$, cambiando sólo el valor de $t$ del punto base. Luego la diferencial allí tiene la misma forma en coordenadas adaptadas.
>>7. Cerca de $(0,1)$ usamos coordenadas
>>$$\Psi(\xi,t)=\left(\frac{\xi e^{it}}{\sqrt{1+|\xi|^2}},\frac{e^{it}}{\sqrt{1+|\xi|^2}}\right).$$
>>8. En la carta del codominio alrededor de $\infty$, dada por $\psi(w)=1/w$, se tiene
>>$$(\psi\circ\pi\circ\Psi)(\xi,t)=\xi.$$
>>9. Por lo tanto, en las bases adaptadas correspondientes, la matriz de la diferencial en $(0,1)$ vuelve a ser
>>$$\begin{pmatrix}
>>1&0&0\\
>>0&1&0
>>\end{pmatrix}.$$
>>10. Exactamente lo mismo sucede en $(0,i)$.
>>11. En todos estos puntos, la dirección del parámetro $t$ genera el núcleo de la diferencial, que corresponde a la fibra de Hopf.

### Ejercicio 14 (Opcional)

>[!Exercise]
>Tomar la presentación de $\mathbb{RP}^2$ como el conjunto de subespacios de $\mathbb R^3$ de dimensión $1$, $(\mathbb R^3\setminus\{0\})/\sim$. Sean $U_x:=\{[x,y,z]\in\mathbb{RP}^2:x\neq 0\}$ y $\phi_x:U_x\to\mathbb R^2$ definida por $[x,y,z]\mapsto (u_1,v_1)=\left(\frac yx,\frac zx\right)$, y análogamente $(U_y,\phi_y)$ con $\phi_y([x,y,z])=(u_2,v_2)=\left(\frac xy,\frac zy\right)$. Dado $p$ en $U_x$, sea
>$$X_p=\frac yx\,\frac{\partial}{\partial u_1}\Big|_p-\frac zx\,\frac{\partial}{\partial v_1}\Big|_p.$$
>Si $q\in U_x\cap U_y$, escribir $X_q$ en las coordenadas dadas por $(U_y,\phi_y)$.
>
>>[!Proof]-
>>1. En $U_x\cap U_y$ tenemos $x\neq 0$ e $y\neq 0$, así que el cambio de coordenadas es
>>$$u_2=\frac{x}{y}=\frac{1}{u_1},\qquad v_2=\frac{z}{y}=\frac{v_1}{u_1}.$$
>>2. Entonces
>>$$\frac{\partial u_2}{\partial u_1}=-\frac{1}{u_1^2}=-u_2^2,\qquad \frac{\partial v_2}{\partial u_1}=-\frac{v_1}{u_1^2}=-u_2v_2,$$
>>y
>>$$\frac{\partial u_2}{\partial v_1}=0,\qquad \frac{\partial v_2}{\partial v_1}=\frac{1}{u_1}=u_2.$$
>>3. Por lo tanto,
>>$$\frac{\partial}{\partial u_1}=-u_2^2\frac{\partial}{\partial u_2}-u_2v_2\frac{\partial}{\partial v_2},\qquad
>>\frac{\partial}{\partial v_1}=u_2\frac{\partial}{\partial v_2}.$$
>>4. Además, en estas coordenadas
>>$$\frac yx=\frac{1}{u_2},\qquad \frac zx=\frac{v_2}{u_2}.$$
>>5. Sustituyendo en la definición de $X_q$,
>>$$X_q=\frac{1}{u_2}\frac{\partial}{\partial u_1}-\frac{v_2}{u_2}\frac{\partial}{\partial v_1}.$$
>>6. Reemplazando por las fórmulas del paso $3$,
>>$$X_q=-u_2\frac{\partial}{\partial u_2}-v_2\frac{\partial}{\partial v_2}-v_2\frac{\partial}{\partial v_2}
>>=-u_2\frac{\partial}{\partial u_2}-2v_2\frac{\partial}{\partial v_2}.$$

### Ejercicio 15

>[!Exercise]
>- Dar explícitamente una partición de la unidad subordinada al cubrimiento $\{S^1-\{(1,0)\},S^1-\{(-1,0)\}\}$ de $S^1$.
>- Sea $\{U_\alpha\}$ un cubrimiento abierto de una variedad diferenciable. Mostrar que existe un refinamiento localmente finito $\{V_\alpha\}$ tal que $\overline{V_\alpha}\subset U_\alpha$ para todo $\alpha$.
>
>>[!Proof]-
>>- **15.a**
>>1. Sea $$U_1=S^1-\{(1,0)\},\qquad U_2=S^1-\{(-1,0)\}.$$
>>2. Por el lema de función de corte [[GS - Teo8#^3df6bd]], existe una función suave $$h:\mathbb{R}\to\mathbb{R}$$ tal que
>>$$
>>h(t)=
>>\begin{cases}
>>1 & \text{si } t\le 0,\\
>>0<h(t)<1 & \text{si } 0<t<1/2,\\
>>0 & \text{si } t\ge 1/2.
>>\end{cases}
>>$$
>>3. Definimos funciones suaves sobre $S^1$ por
>>$$
>>\beta_1(x,y)=h(x),\qquad \beta_2(x,y)=h(-x).
>>$$
>>4. Veamos sus soportes. Como $\beta_1(x,y)=0$ para $x\ge 1/2$, se tiene
>>$$
>>\operatorname{supp}\beta_1\subset \{(x,y)\in S^1:x\le 1/2\}\subset U_1.
>>$$
>>Análogamente,
>>$$
>>\operatorname{supp}\beta_2\subset \{(x,y)\in S^1:x\ge -1/2\}\subset U_2.
>>$$
>>5. Además, $\beta_1$ y $\beta_2$ no se anulan simultáneamente. En efecto, si $\beta_1(x,y)=0$, entonces $x\ge 1/2$, y si $\beta_2(x,y)=0$, entonces $-x\ge 1/2$, es decir $x\le -1/2$, lo cual es imposible a la vez.
>>6. Por lo tanto,
>>$$
>>\beta_1+\beta_2>0
>>$$
>>en todo $S^1$, y podemos definir
>>$$
>>\rho_1=\frac{\beta_1}{\beta_1+\beta_2},\qquad
>>\rho_2=\frac{\beta_2}{\beta_1+\beta_2}.
>>$$
>>7. Entonces $\rho_1$ y $\rho_2$ son suaves, satisfacen $$0\le \rho_1,\rho_2\le 1,\qquad \rho_1+\rho_2=1,$$
>>8. Entonces claramente  por [[GS - Teo8#^f5db1b]] tenemos que $\{ \rho_{1},\rho_{2} \}$ es particion de la unidad
>>9. Además
>>$$
>>\operatorname{supp}\rho_1\subset \operatorname{supp}\beta_1\subset U_1,\qquad
>>\operatorname{supp}\rho_2\subset \operatorname{supp}\beta_2\subset U_2.
>>$$
>>10. Por lo tanto, $\{\rho_1,\rho_2\}$ es una partición de la unidad subordinada al cubrimiento $\{S^1-\{(1,0)\},S^1-\{(-1,0)\}\}$.
>>
>>- **15.b**
>>1. Por la parte final de [[GS - Teo8#^eafe2b]], existe una partición de la unidad $$\{\rho_\alpha\}_{\alpha\in I}$$ estrictamente subordinada al cubrimiento abierto $$\{U_\alpha\}_{\alpha\in I}.$$  
>>2. Consideremos la familia de soportes $$\{\operatorname{supp}\rho_\alpha\}_{\alpha\in I}.$$  
>>3. Como $\{\rho_\alpha\}_{\alpha\in I}$ es una [[GS - Teo8#^f5db1b]], la familia de soportes cubre a $M$ y es localmente finita.  
>>4. Como la partición es estrictamente subordinada [[GS - Teo8#^12d7c6]], se tiene
>>$$
>>\operatorname{supp}\rho_\alpha\subset U_\alpha
>>$$
>>para todo $\alpha\in I$.  
>>5. Finalmente, como cada soporte es cerrado,
>>$$
>>\overline{\operatorname{supp}\rho_\alpha}=\operatorname{supp}\rho_\alpha\subset U_\alpha
>>$$
>>para todo $\alpha\in I$. Por lo tanto, la familia $$\{\operatorname{supp}\rho_\alpha\}_{\alpha\in I}$$ cumple lo pedido.

### Ejercicio 16 (Opcional)

>[!Exercise]-
>Probar que la función $f:\mathbb R\to\mathbb R$ definida por
>$$
>f(x)=
>\begin{cases}
>e^{-1/x} & \text{si }x>0,\\
>0 & \text{si }x\le 0,
>\end{cases}
>$$
>es de clase $C^\infty$, pero no coincide con su serie de Taylor en ningún intervalo abierto que contiene a cero.
>
>>[!Proof]-
>>1. En $(0,\infty)$ la función es composición de funciones suaves, luego es $C^\infty$. En $(-\infty,0]$ es identicamente nula, luego también es $C^\infty$ allí.
>>2. El único punto delicado es $0$.
>>3. Mostramos por inducción que para todo $k\ge 0$ existe un polinomio $p_k$ tal que, para $x>0$,
>>$$f^{(k)}(x)=e^{-1/x}p_k(1/x).$$
>>4. Para $k=0$ vale con $p_0=1$.
>>5. Si vale para $k$, entonces
>>$$f^{(k+1)}(x)=\frac{d}{dx}\bigl(e^{-1/x}p_k(1/x)\bigr)=e^{-1/x}\left(\frac{1}{x^2}p_k(1/x)-\frac{1}{x^2}p_k'(1/x)\right),$$
>>que vuelve a tener la forma requerida.
>>6. Ahora usamos que para todo $m\ge 0$,
>>$$\lim_{x\to 0^+} x^{-m}e^{-1/x}=0.$$
>>7. Como $p_k(1/x)$ es combinación lineal de potencias de $1/x$, se obtiene
>>$$\lim_{x\to 0^+} f^{(k)}(x)=0.$$
>>8. Del lado izquierdo, para $x<0$, todas las derivadas son $0$. Por lo tanto cada derivada se prolonga continuamente en $0$ poniendo
>>$$f^{(k)}(0)=0.$$
>>9. Con esto se ve inductivamente que $f$ es $C^\infty$ y además
>>$$f^{(k)}(0)=0\qquad \forall k\ge 0.$$
>>10. Luego la serie de Taylor de $f$ en $0$ es la serie nula.
>>11. Sin embargo, para todo $x>0$ se tiene $f(x)=e^{-1/x}>0$.
>>12. Entonces $f$ no coincide con su serie de Taylor en ningún intervalo abierto que contenga a $0$.

### Ejercicio 17 (Opcional)

>[!Exercise]-
>Sea $M$ una variedad diferenciable. Mostrar que $M$ admite una estructura riemanniana, es decir, que existe una asignación suave de productos internos en los espacios tangentes. ¿Cómo se definiría la longitud de una curva diferenciable $\alpha:[0,1]\to M$?
>
>>[!Proof]-
>>1. Tomemos un atlas $\{(U_\alpha,\varphi_\alpha)\}$ de $M$.
>>2. En cada $U_\alpha$, transportamos el producto interno euclídeo usual de $\mathbb R^n$ por la carta, obteniendo un producto interno suave $g^\alpha$ sobre $TU_\alpha$.
>>3. Sea ahora $\{\rho_\alpha\}$ una partición de la unidad subordinada a $\{U_\alpha\}$.
>>4. Definimos, para $p\in M$ y $v,w\in T_pM$,
>>$$B_p(v,w)=\sum_\alpha \rho_\alpha(p)\,g^\alpha_p(v,w).$$
>>5. La suma es finita en cada punto por local finitud.
>>6. Cada $B_p$ es bilineal y simétrica por ser combinación lineal de tales.
>>7. Además, si $v\neq 0$, al menos uno de los términos con $\rho_\alpha(p)>0$ aporta positividad:
>>$$B_p(v,v)=\sum_\alpha \rho_\alpha(p)\,g^\alpha_p(v,v)>0.$$
>>8. Luego $B_p$ es un producto interno en $T_pM$.
>>9. La dependencia suave en coordenadas se obtiene porque, en una carta fija, las funciones coeficientes de $B$ son sumas finitas de funciones suaves.
>>10. Entonces $B$ define una estructura riemanniana sobre $M$.
>>11. Si $\alpha:[0,1]\to M$ es una curva suave, su longitud se define por
>>$$L(\alpha)=\int_0^1 \sqrt{B_{\alpha(t)}(\alpha'(t),\alpha'(t))}\,dt.$$

### Ejercicio 18 (Opcional)

>[!Exercise]-
>Sean $M_1$ y $M_2$ variedades diferenciables, y sean $\{(U_\alpha,\phi_\alpha)\}$ y $\{(V_\beta,\psi_\beta)\}$ sistemas de coordenadas para $M_1$ y $M_2$ respectivamente. Sean $\{\varphi_\alpha\}$ y $\{\rho_\beta\}$ particiones de la unidad subordinadas a $\{U_\alpha\}$ y $\{V_\beta\}$ respectivamente. Dar una partición de la unidad de $M_1\times M_2$ subordinada al cubrimiento $\{U_\alpha\times V_\beta\}$.
>
>>[!Proof]-
>>1. Para cada par $(\alpha,\beta)$ definimos
>>$$\sigma_{\alpha\beta}(p,q)=\varphi_\alpha(p)\rho_\beta(q).$$
>>2. Cada $\sigma_{\alpha\beta}$ es suave por ser producto de funciones suaves compuestas con las proyecciones.
>>3. Además, $\sigma_{\alpha\beta}\ge 0$.
>>4. Si $\sigma_{\alpha\beta}(p,q)\neq 0$, entonces $\varphi_\alpha(p)\neq 0$ y $\rho_\beta(q)\neq 0$, de modo que
>>$$p\in \operatorname{supp}\varphi_\alpha\subset U_\alpha,\qquad q\in \operatorname{supp}\rho_\beta\subset V_\beta.$$
>>5. Luego
>>$$\operatorname{supp}\sigma_{\alpha\beta}\subset U_\alpha\times V_\beta.$$
>>6. Finalmente,
>>$$\sum_{\alpha,\beta}\sigma_{\alpha\beta}(p,q)=\left(\sum_\alpha \varphi_\alpha(p)\right)\left(\sum_\beta \rho_\beta(q)\right)=1.$$
>>7. La familia es localmente finita porque las dos familias originales lo son.
>>8. Por lo tanto $\{\sigma_{\alpha\beta}\}$ es una partición de la unidad subordinada al cubrimiento producto.

### Ejercicio 19

>[!Exercise]
>Mostrar que si $f:M\to N$ es una función diferenciable, entonces $df:TM\to TN$ es diferenciable.
>
>>[!Proof]-
>>1. Lo que queremos ver es que $$df:TM\rightarrow TN$$ es suave
>>2. Entonces tomamos un $(p,v)\in TM$ y tomamos una carta $(U,\varphi=(x_1,\dots,x_m))$ de $M$ alrededor de $p$ y una carta $(V,\psi=(y_1,\dots,y_n))$ de $N$ alrededor de $f(p)$ tales que $f(U)\subset V$.
>>3. Las cartas inducidas sobre los fibrados tangentes son $$\widetilde\varphi: \tilde{U}=\pi^{-1}(U)\to \varphi(U)\times\mathbb{R}^m,\qquad\widetilde\varphi(w)=\bigl(\varphi(q),v_{1},\ldots,v_{n}\bigr),$$para $w\in T_qM$, y análogamente $$\widetilde\psi: \tilde{V}=\pi^{-1}(V)\to \psi(V)\times\mathbb{R}^n$$en $TN$.  
>>4. Luego $(\tilde{U},\tilde{\varphi})$ es carta al rededor $(p,v)$ y $(\tilde{V},\tilde{\psi})$ es carta de $TN$. Ademas se cumple que $df(p,v)=(f(p),(df)_{p}(v))$ por que $f(p)\in V$ y $(df)_{p}(v)\in T_{f(p)}N$ por definicion. Entonces $(df)(p,v)\in \tilde{V}$.
>>5. Y como esto lo podiamos hacer con cualquier $p\in U$ tenemos que $(df)(\tilde{U})\in \tilde{V}$   
>>6. Ahora queremos ver la suavidad de $$ \tilde\psi\circ df\circ \tilde\varphi^{-1}: \tilde\varphi(U)\to \tilde\psi(V)$$
>>7. Tomemos ahora un punto de $\tilde{U}=\pi^{-1}(U)$ cuyas coordenadas en $TM$ sean $$(\varphi(r),t_{i},\ldots,t_{m})=(r_1,\dots,r_m,t_1,\dots,t_m)\in \varphi(U)\times\mathbb{R}^m.$$
>>8. Luego evaluamos $$\widetilde\varphi^{-1}(r_{1},\ldots,r_{m},t_{1},\ldots,t_{m})=\bigg(\varphi ^{-1}(r_{1},\ldots,r_{m}),\sum_{i=1}^m t_i\,\frac{\partial}{\partial x_i}\Big|_{\varphi^{-1}(r_{1},...,r_{m})}\bigg).$$
>>9. Ahora queremos ver $dF({\varphi}^{-1}(r_{1},\ldots,r_{m}),t_{1},\ldots,t_{m})$. Aplicando [[GS - Teo7#^fce8ee]] obtenemos
>>$$\bigg(f(\varphi ^{-1}(r)),\sum_{i=1}^m t_i\,(df)_{\varphi^{-1}(r)}\!\left(\frac{\partial}{\partial x_i}\Big|_{\varphi^{-1}(r)}\right)\bigg)$$
>>10. Al pasar a coordenadas en $TN$, esto se traduce en
>>$$\bigl(\widetilde\psi\circ df\circ\widetilde\varphi^{-1}\bigr)(r,t)
>>=\left(\widetilde f(r),\,J\widetilde f(r)\,t\right),$$
>>donde $t=(t_1,\dots,t_m)$ y $J\widetilde f(r)$ es la matriz jacobiana de $\widetilde f$ en $r$.
>>11. En efecto, la primera componente es simplemente la base:
>>$$\psi\bigl(f(\varphi^{-1}(r))\bigr)=\widetilde f(r),$$
>>y la segunda componente son las coordenadas del vector tangente transformado por la diferencial, es decir, la multiplicación por la jacobiana.
>>12. Como $f$ es diferenciable, $\widetilde f$ es suave. Luego sus derivadas parciales son suaves, así que también lo es
>>$$r\longmapsto J\widetilde f(r).$$
>>13. Por consiguiente, la aplicación
>>$$(r,t)\longmapsto \left(\widetilde f(r),J\widetilde f(r)t\right)$$
>>es suave entre abiertos de espacios euclídeos.
>>14. Entonces $\widetilde\psi\circ df\circ\widetilde\varphi^{-1}$ es suave en un entorno de $\widetilde\varphi(v)$.
>>15. Como $v\in TM$ era arbitrario, concluimos que
>>$$df:TM\to TN$$
>>es una aplicación diferenciable.

### Ejercicio 20

>[!Exercise]
>- Probar que $TS^1$ es difeomorfo a $S^1\times\mathbb R$.
>- Dar estructura de variedad diferenciable al conjunto de rectas orientadas en el espacio euclídeo $\mathbb R^n$. Comparar con el respectivo ejercicio del práctico 1.
>
>>[!Proof]-
>>- **20.a**
>>1. Si $p=(x,y)\in S^1$, el espacio tangente $T_pS^1$ es la recta generada por
>>$$Jp=(-y,x).$$
>>2. Entonces todo vector tangente $v\in T_pS^1$ se escribe de manera única como
>>$$v=a\,Jp,\qquad a\in\mathbb R.$$
>>3. Definimos
>>$$\Phi:S^1\times\mathbb R\to TS^1,\qquad \Phi(p,a)=a\,Jp.$$
>>4. Es biyectiva por el paso anterior.
>>5. La suavidad de $\Phi$ es clara, ya que está dada por una expresión polinómica en las coordenadas de $p$ y $a$.
>>6. Su inversa también es suave: si $v=a\,Jp$, entonces
>>$$\Phi^{-1}(v)=(p,a),\qquad a=\langle v,Jp\rangle.$$
>>7. Luego $TS^1$ es difeomorfo a $S^1\times\mathbb R$.
>>- **20.b**
>>1. Si tomamos $(U_1^+,\varphi_1)$ con
>>$$\varphi_1(x,y)=y,\qquad \varphi_1^{-1}(y)=\big(\sqrt{1-y^2},y\big),$$
>>y tomamos además $(\mathbb R,\operatorname{Id})$ como carta de $\mathbb R$, podemos calcular la diferencial de la inclusión $i:S^1\to\mathbb R^2$.
>>2. La expresión coordenada es
>>$$\operatorname{Id}\circ i\circ\varphi_1^{-1}(y)=\big(\sqrt{1-y^2},y\big).$$
>>3. Entonces su jacobiana es
>>$$J(\operatorname{Id}\circ i\circ\varphi_1^{-1})(y)=\left(\frac{-y}{\sqrt{1-y^2}},1\right).$$
>>4. Si $p=(x,y)\in U_1^+$, como $x^2+y^2=1$, esto también se puede escribir como
>>$$\left(\frac{-y}{x},1\right)=\frac1x(-y,x).$$
>>5. Luego todo vector en $T_{(x,y)}S^1$ lo podemos identificar de forma suave con
>>$$\frac1x(-y,x).$$
>>6. Con esto definimos $$F:TS^1\to S^1\times\mathbb R,\qquad ((x,y),v)\mapsto\big((x,y),\langle (d\mathcal{i})v,(-y,x)\rangle\big).$$
>>7. Esta aplicación es suave.
>>8. Además es biyectiva: dado $((x,y),a)\in S^1\times\mathbb R$, el único vector tangente correspondiente es el múltiplo adecuado de $(-y,x)$.
>>9. Localmente su expresión coordenada tiene derivada invertible, luego por el teorema de la función inversa es un difeomorfismo local.
>>10. Como además es biyectiva, concluimos que $F$ es un difeomorfismo.
>>11. Por lo tanto, el espacio de rectas orientadas en el plano vuelve a identificarse con $TS^1$, y entonces es difeomorfo a
>>$$S^1\times\mathbb R.$$
>>12. Esto coincide con el resultado del práctico 1.


