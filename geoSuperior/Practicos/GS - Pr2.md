### Ejercicio 1

>[!Exercise]
>Sea $M$ una variedad diferenciable, $I$ un intervalo en $\mathbb R$ y $\gamma:I\to M$ una curva diferenciable. La velocidad de $\gamma$ en el instante $t\in I$, que se denota por $\gamma'(t)$, es por definición el vector tangente que satisface $\gamma'(t)(f)=\frac{d}{ds}\big|_{0}f(\gamma(t+s))$ para toda función diferenciable definida en un entorno abierto de $\gamma(t)$ en $M$.
>
>- Mostrar que efectivamente $\gamma'(t)\in T_{\gamma(t)}M$.
>- Probar que $\gamma'(t)=(d\gamma)_t\left(\frac{\partial}{\partial s}\big|_t\right)\in T_{\gamma(t)}M$.
>- Mostrar que si $(U,\varphi=(x_1,\dots,x_n))$ es un sistema coordenado de $M$ alrededor de $\gamma(0)$ y $(\varphi\circ\gamma)(t)=(r_1(t),\dots,r_n(t))$ para $t$ próximos a $0$, entonces $$\gamma'(0)=\sum_{i=1}^n r_i'(0)\frac{\partial}{\partial x_i}\Big|_{\gamma(0)}.$$
>- Mostrar que para todo $p\in M$ y todo $v\in T_pM$ se cumple que $v=\sigma'(0)$ para alguna curva diferenciable $\sigma$ en $M$ con $\sigma(0)=p$.
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
   

### Ejercicio 2

>[!Exercise]
>Sea $\pi$ la proyección canónica de $S^2$ al proyectivo $\mathbb{RP}^2$. Mostrar que la función $f:\mathbb{RP}^2\to\mathbb R$ está bien definida por $f(\pi(x,y,z))=x^6yz$ y es diferenciable. Probar que $v(f)=0$ para todo $v\in T_{\pi(1,0,0)}\mathbb{RP}^2$.
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
>>	1. Sea $(X,Y)\in T_pM\times T_qN$: $$(G\circ F)(X,Y)=G(F(X,Y))=(d\pi_1(F(X,Y)),d\pi_2(F(X,Y))).$$
>>	2. Sea $f\in C^\infty(M)$ y $f\circ\pi_1\in C^\infty(M\times N)$: $$d\pi_1(F(X,Y))(f)=F(X,Y)(f\circ\pi_1)=X((f\circ\pi_1)\circ i_q)+Y((f\circ\pi_1)\circ i_p).$$  
>>	Pero $(f\circ\pi_1)\circ i_q=f$ y $(f\circ\pi_1)\circ i_p=f(p)$ es constante, luego:  
>>	$$d\pi_1(F(X,Y))(f)=X(f).$$  
>>	3. Análogamente, para $g\in C^\infty(N)$:  
>>	$$d\pi_2(F(X,Y))(g)=F(X,Y)(g\circ\pi_2)=Y(g).$$  
>>	4. Entonces $(G\circ F)(X,Y)(f,g)=(X,Y)(f,g)$ para todo $(f,g)\in C^{\infty}(M\times N)$ osea:  
>>	$$(G\circ F)(X,Y)=(X,Y)\Rightarrow G\circ F=\operatorname{Id}.$$  
>>	5. Como $G\circ F=\operatorname{Id}$, $F$ es inyectiva y $G$ sobreyectiva.  
>>	6. Además:  
>>	$$\dim T_{(p,q)}(M\times N)=\dim M+\dim N=\dim T_pM+\dim T_qN.$$  
>>	7. Por álgebra lineal (Si $T:V\rightarrow H$ y $dim(V)=dim(H)<\infty$ entonces $T$ iso $\iff$ $T$ mono $\iff$ $T$ epi), $F$ y $G$ son isomorfismos.

### Ejercicio 4

>[!Exercise]
>Sea $(\mathbb R^3,\operatorname{id}=(x,y,z))$ el sistema coordenado canónico de $\mathbb R^3$. Encontrar otro sistema coordenado $(\mathbb R^3,\varphi=(\xi,\eta,\zeta))$ con $x=\xi$ pero tal que
>$$\frac{\partial^{\operatorname{id}}}{\partial x}\Big|_0\neq \frac{\partial^\varphi}{\partial \xi}\Big|_0.$$
>>[!Proof]-
>>1. Tomemos
>>$$\varphi(x,y,z)=(\xi,\eta,\zeta)=(x,y-x,z).$$
>>2. Esta aplicación es un difeomorfismo global con inversa
>>$$\varphi^{-1}(\xi,\eta,\zeta)=(\xi,\eta+\xi,\zeta).$$
>>3. En particular, $\varphi$ es un sistema coordenado global.
>>4. Además, por construcción, $x=\xi$.
>>5. Ahora,
>>$$\frac{\partial^\varphi}{\partial \xi}\Big|_0(f)=\frac{d}{dt}\Big|_0 f(\varphi^{-1}(t,0,0))=\frac{d}{dt}\Big|_0 f(t,t,0).$$
>>6. Luego
>>$$\frac{\partial^\varphi}{\partial \xi}\Big|_0=\frac{\partial^{\operatorname{id}}}{\partial x}\Big|_0+\frac{\partial^{\operatorname{id}}}{\partial y}\Big|_0.$$
>>7. Esto es distinto de $\frac{\partial^{\operatorname{id}}}{\partial x}\big|_0$. Así obtenemos el ejemplo pedido.

### Ejercicio 5

>[!Exercise]
>Sea $F:U\subseteq\mathbb R^n\to\mathbb R^n$ una función suave y sea $p\in U$ tal que la matriz Jacobiana de $F$ en $p$, $J F(p)$, es la identidad. ¿Qué puede decir de la transformación lineal $(dF)_p:T_p\mathbb R^n\to T_{F(p)}\mathbb R^n$? ¿Cuál es la imagen de $\frac{\partial^{\operatorname{id}}}{\partial x_i}\big|_p$ bajo $(dF)_p$?
>>[!Proof]-
>>1. En coordenadas canónicas, la matriz de $(dF)_p$ respecto de las bases coordenadas de $T_p\mathbb R^n$ y $T_{F(p)}\mathbb R^n$ es precisamente $J F(p)$.
>>2. Como por hipótesis $J F(p)=I_n$, se sigue que $(dF)_p$ es un isomorfismo y, en coordenadas canónicas, coincide con la identidad.
>>3. En particular,
>>$$(dF)_p\left(\frac{\partial^{\operatorname{id}}}{\partial x_i}\Big|_p\right)=\frac{\partial^{\operatorname{id}}}{\partial x_i}\Big|_{F(p)}.$$

### Ejercicio 6

>[!Exercise]
>Sea $M$ una variedad diferenciable, y sean $v\in T_pM$ y $f\in C^\infty(M)$. Mostrar que
>$$(df)_p(v)=(vf)\,\frac{\partial^{\operatorname{id}}}{\partial t}\Big|_{f(p)}.$$
>>[!Proof]-
>>1. Recordemos que $(df)_p(v)\in T_{f(p)}\mathbb R$.
>>2. Para toda función suave $g:\mathbb R\to\mathbb R$,
>>$$((df)_p(v))(g)=v(g\circ f).$$
>>3. Por regla de la cadena para derivaciones en $\mathbb R$,
>>$$v(g\circ f)=g'(f(p))\,v(f).$$
>>4. Pero
>>$$\left((vf)\,\frac{\partial^{\operatorname{id}}}{\partial t}\Big|_{f(p)}\right)(g)=(vf)\,g'(f(p)).$$
>>5. Como ambas derivaciones coinciden sobre toda $g$, se concluye que
>>$$(df)_p(v)=(vf)\,\frac{\partial^{\operatorname{id}}}{\partial t}\Big|_{f(p)}.$$

### Ejercicio 7

>[!Exercise]
>- Sean $M$, $N$ variedades suaves y $F:M\to N$ una función suave, con $M$ conexa. Probar que $(dF)_p:T_pM\to T_{F(p)}N$ es la transformación nula para todo $p\in M$ si y solo si $F$ es constante.
>- Sea $M$ variedad suave y $f\in C^\infty(M)$. Probar que un máximo local de $f$ es un punto crítico de $f$; es decir, $(df)_p$ es la transformación nula.
>>[!Proof]-
>>- **7.a**
>>1. Si $F$ es constante, entonces claramente $(dF)_p=0$ para todo $p$.
>>2. Recíprocamente, supongamos $(dF)_p=0$ para todo $p\in M$.
>>3. Sea $\alpha:[0,1]\to M$ una curva suave. Entonces
>>$$(F\circ\alpha)'(t)=(dF)_{\alpha(t)}(\alpha'(t))=0.$$
>>4. Por lo tanto $F\circ\alpha$ es constante.
>>5. Como toda variedad conexa es conexa por caminos, dados $p,q\in M$ existe una curva suave por tramos que los une. Aplicando el paso anterior a cada tramo, se deduce $F(p)=F(q)$.
>>6. Luego $F$ es constante.
>>- **7.b**
>>1. Sea $p$ un máximo local de $f$.
>>2. Tomemos cualquier $v\in T_pM$. Por el ejercicio 1, existe una curva suave $\alpha:(-\varepsilon,\varepsilon)\to M$ tal que $\alpha(0)=p$ y $\alpha'(0)=v$.
>>3. Entonces $f\circ\alpha$ tiene un máximo local en $0$, luego
>>$$(f\circ\alpha)'(0)=0.$$
>>4. Pero
>>$$(f\circ\alpha)'(0)=(df)_p(v).$$
>>5. Como esto vale para todo $v$, se concluye que $(df)_p=0$. O sea, $p$ es crítico.

### Ejercicio 8 (Opcional)

>[!Exercise]
>Sea $M$ una variedad diferenciable. Sea $f\in C^\infty(M)$ y $p\in M$ un punto crítico de $f$. El Hessiano de $f$ en $p$ es la función $H_p:T_pM\to\mathbb R$ definida por $H_p(v)=(f\circ\alpha)''(0)$, donde $\alpha:(-\varepsilon,\varepsilon)\to M$ es cualquier curva suave tal que $\alpha(0)=p$ y $\alpha'(0)=v$. Mostrar la buena definición del Hessiano.
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
>>[!Proof]-
>>1. Para cada $v\in V$, la aplicación $F(v)$ es una derivación en $p$, luego $F(v)\in T_pV$.
>>2. La linealidad de $F$ en $v$ es inmediata.
>>3. Veamos que es inyectiva. Si $v\neq 0$, existe una forma lineal $\lambda\in V^*$ tal que $\lambda(v)\neq 0$.
>>4. Considerando $\lambda$ como función suave sobre $V$,
>>$$F(v)(\lambda)=\frac{d}{dt}\Big|_0 \lambda(p+tv)=\lambda(v)\neq 0.$$
>>5. Luego $F(v)\neq 0$, y por tanto $F$ es inyectiva.
>>6. Para la sobreyectividad, tomemos una base $(e_1,\dots,e_n)$ de $V$, con coordenadas lineales $(x_1,\dots,x_n)$.
>>7. Todo vector tangente en $T_pV$ se escribe como
>>$$w=\sum_{i=1}^n a_i \frac{\partial}{\partial x_i}\Big|_p.$$
>>8. Si definimos $v=\sum_i a_i e_i$, entonces para toda $f$,
>>$$F(v)(f)=\frac{d}{dt}\Big|_0 f(p+t\sum_i a_i e_i)=\sum_i a_i \frac{\partial f}{\partial x_i}(p)=w(f).$$
>>9. Por lo tanto $F(v)=w$, y $F$ es sobreyectiva.
>>10. Concluimos que $F$ es un isomorfismo lineal.

### Ejercicio 10

>[!Exercise]
>Para cada uno de los vectores tangentes del plano, dar su representación en términos de coordenadas polares en el semiplano derecho $\{(x,y)\in\mathbb R^2:x>0\}$:
>
>- $X|_p=x\,\frac{\partial}{\partial x}\big|_p+y\,\frac{\partial}{\partial y}\big|_p$
>- $Y|_p=x\,\frac{\partial}{\partial y}\big|_p-y\,\frac{\partial}{\partial x}\big|_p$
>- $Z|_p=(x^2+y^2)\,\frac{\partial}{\partial x}\big|_p$
>>[!Proof]-
>>1. En coordenadas polares $(r,\theta)$ sobre el semiplano derecho,
>>$$x=r\cos\theta,\qquad y=r\sin\theta.$$
>>2. Las bases se relacionan por
>>$$\frac{\partial}{\partial r}=\cos\theta\,\frac{\partial}{\partial x}+\sin\theta\,\frac{\partial}{\partial y},\qquad
>>\frac{\partial}{\partial \theta}=-r\sin\theta\,\frac{\partial}{\partial x}+r\cos\theta\,\frac{\partial}{\partial y}.$$
>>3. Invirtiendo,
>>$$\frac{\partial}{\partial x}=\cos\theta\,\frac{\partial}{\partial r}-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta},\qquad
>>\frac{\partial}{\partial y}=\sin\theta\,\frac{\partial}{\partial r}+\frac{\cos\theta}{r}\,\frac{\partial}{\partial \theta}.$$
>>4. Entonces
>>$$X=r\cos\theta\left(\cos\theta\,\frac{\partial}{\partial r}-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\right)
>>+r\sin\theta\left(\sin\theta\,\frac{\partial}{\partial r}+\frac{\cos\theta}{r}\,\frac{\partial}{\partial \theta}\right)=r\frac{\partial}{\partial r}.$$
>>5. Además
>>$$Y=r\cos\theta\left(\sin\theta\,\frac{\partial}{\partial r}+\frac{\cos\theta}{r}\,\frac{\partial}{\partial \theta}\right)
>>-r\sin\theta\left(\cos\theta\,\frac{\partial}{\partial r}-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\right)=\frac{\partial}{\partial \theta}.$$
>>6. Finalmente,
>>$$Z=r^2\left(\cos\theta\,\frac{\partial}{\partial r}-\frac{\sin\theta}{r}\,\frac{\partial}{\partial \theta}\right)=r^2\cos\theta\,\frac{\partial}{\partial r}-r\sin\theta\,\frac{\partial}{\partial \theta}.$$

### Ejercicio 11

>[!Exercise]
>Sea $M=\{(x,y)\in\mathbb R^2:y>0\}$ con coordenadas canónicas $(x,y)$ y sea $\psi:M\to(0,\infty)\times(0,\pi)$ el sistema coordenado tal que $\psi^{-1}(r,\theta)=(r\cos\theta,r\sin\theta)$. Escribir el vector tangente $r\,\frac{\partial}{\partial r}$ en la base canónica $\left(\frac{\partial}{\partial x},\frac{\partial}{\partial y}\right)$.
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
>- Sea $\{U_\alpha\}$ un cubrimiento abierto de una variedad diferenciable. Mostrar que existe un refinamiento localmente finito $\{V_\alpha\}$ tal que $V_\alpha\subset U_\alpha$ para todo $\alpha$.
>>[!Proof]-
>>- **15.a**
>>1. Sea
>>$$U_+=S^1\setminus\{(1,0)\},\qquad U_-=S^1\setminus\{(-1,0)\}.$$
>>2. Definimos funciones sobre $S^1\subset\mathbb R^2$ por
>>$$\rho_+(x,y)=\frac{1-x}{2},\qquad \rho_-(x,y)=\frac{1+x}{2}.$$
>>3. Son suaves por ser restricciones de funciones polinómicas.
>>4. Además $\rho_+,\rho_-\ge 0$ y
>>$$\rho_++\rho_-=1.$$
>>5. El soporte de $\rho_+$ está contenido en $U_+$, pues $\rho_+(1,0)=0$ y sólo allí puede anularse con $x=1$.
>>6. Del mismo modo, $\operatorname{supp}(\rho_-)\subset U_-$.
>>7. Luego $\{\rho_+,\rho_-\}$ es una partición de la unidad subordinada a ese cubrimiento.
>>- **15.b**
>>1. Toda variedad diferenciable es Hausdorff, segundo numerable y localmente compacta; en particular, es paracompacta.
>>2. Por paracompacidad, todo cubrimiento abierto admite un refinamiento abierto localmente finito.
>>3. Entonces existe una familia $\{W_j\}_{j\in J}$ localmente finita tal que para cada $j$ hay un índice $\alpha(j)$ con
>>$$W_j\subset U_{\alpha(j)}.$$
>>4. Para cada $\alpha$, definimos
>>$$V_\alpha=\bigcup_{\alpha(j)=\alpha} W_j.$$
>>5. Claramente $V_\alpha\subset U_\alpha$ para todo $\alpha$.
>>6. La familia $\{V_\alpha\}$ sigue siendo un cubrimiento de $M$, pues los $W_j$ lo son.
>>7. También es localmente finita: si un punto tiene un entorno que corta sólo a finitos $W_j$, entonces sólo puede cortar a finitos $V_\alpha$.
>>8. Luego $\{V_\alpha\}$ es el refinamiento pedido.

### Ejercicio 16 (Opcional)

>[!Exercise]
>Probar que la función $f:\mathbb R\to\mathbb R$ definida por
>$$
>f(x)=
>\begin{cases}
>e^{-1/x} & \text{si }x>0,\\
>0 & \text{si }x\le 0,
>\end{cases}
>$$
>es de clase $C^\infty$, pero no coincide con su serie de Taylor en ningún intervalo abierto que contiene a cero.
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

>[!Exercise]
>Sea $M$ una variedad diferenciable. Mostrar que $M$ admite una estructura riemanniana, es decir, que existe una asignación suave de productos internos en los espacios tangentes. ¿Cómo se definiría la longitud de una curva diferenciable $\alpha:[0,1]\to M$?
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

>[!Exercise]
>Sean $M_1$ y $M_2$ variedades diferenciables, y sean $\{(U_\alpha,\phi_\alpha)\}$ y $\{(V_\beta,\psi_\beta)\}$ sistemas de coordenadas para $M_1$ y $M_2$ respectivamente. Sean $\{\varphi_\alpha\}$ y $\{\rho_\beta\}$ particiones de la unidad subordinadas a $\{U_\alpha\}$ y $\{V_\beta\}$ respectivamente. Dar una partición de la unidad de $M_1\times M_2$ subordinada al cubrimiento $\{U_\alpha\times V_\beta\}$.
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
>>[!Proof]-
>>1. Tomemos una carta $(U,x_1,\dots,x_m)$ de $M$ y una carta $(V,y_1,\dots,y_n)$ de $N$ tales que $f(U)\subset V$.
>>2. Las cartas inducidas en los fibrados tangentes son
>>$$\widetilde x:TU\to x(U)\times\mathbb R^m,\qquad
>>\widetilde x(v)=\bigl(x(p),v(x_1),\dots,v(x_m)\bigr),$$
>>si $v\in T_pM$, y análogamente para $\widetilde y$ en $TN$.
>>3. Sea $\widetilde f=y\circ f\circ x^{-1}:x(U)\to y(V)$ la expresión coordenada de $f$.
>>4. En estas coordenadas, la aplicación $df$ queda dada por
>>$$\widetilde y\circ df\circ \widetilde x^{-1}(u,\xi)=\bigl(\widetilde f(u), J\widetilde f(u)\,\xi\bigr).$$
>>5. Como $\widetilde f$ es suave y su Jacobiano depende suavemente de $u$, esta aplicación es suave.
>>6. Luego $df:TM\to TN$ es diferenciable.

### Ejercicio 20

>[!Exercise]
>- Probar que $TS^1$ es difeomorfo a $S^1\times\mathbb R$.
>- Dar estructura de variedad diferenciable al conjunto de rectas orientadas en el espacio euclídeo $\mathbb R^n$. Comparar con el respectivo ejercicio del práctico 1.
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
>>1. Una recta orientada de $\mathbb R^n$ queda determinada por:
>>- un vector unitario $u\in S^{n-1}$ que da la orientación;
>>- el punto $a$ de la recta más cercano al origen, que satisface $\langle a,u\rangle=0$.
>>2. Entonces la recta es
>>$$\ell_{u,a}=\{a+tu:t\in\mathbb R\}.$$
>>3. El conjunto de rectas orientadas se identifica así con
>>$$\{(u,a)\in S^{n-1}\times\mathbb R^n:\langle a,u\rangle=0\}.$$
>>4. Pero para cada $u$, el subespacio $\{a:\langle a,u\rangle=0\}$ es precisamente $T_uS^{n-1}$.
>>5. Luego el espacio de rectas orientadas es naturalmente
>>$$TS^{n-1}.$$
>>6. Como $TS^{n-1}$ tiene estructura de variedad diferenciable, esto da una estructura suave al conjunto de rectas orientadas.
>>7. Su dimensión es $(n-1)+(n-1)=2n-2$.
>>8. En el caso $n=2$, obtenemos $TS^1$, que por el punto anterior es difeomorfo a $S^1\times\mathbb R$, en acuerdo con el práctico 1.
