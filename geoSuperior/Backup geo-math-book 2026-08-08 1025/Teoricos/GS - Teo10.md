# Teorema de la funcion inversa en variedades

>[!Theorem] Teorema de la funcion inversa en $\mathbb R^n$
>Sea $U \subseteq \mathbb R^n$ abierto y $$F:U \to \mathbb R^n$$ suave. Si para algun $p \in U$ la diferencial $$(dF)_p:\mathbb R^n \to \mathbb R^n$$ es un isomorfismo, entonces existe un abierto $V \subseteq U$ con $p \in V$ tal que:
>
>- $F(V)$ es abierto en $\mathbb R^n$.
>- La restriccion $$F|_V:V \to F(V)$$ es un difeomorfismo.

>[!Corollary] Teorema de la funcion inversa en variedades
>Sean $M$ y $N$ variedades suaves y $$F:M \to N$$ suave. Si para algun $p \in M$ la diferencial $$(dF)_p:T_pM \to T_{F(p)}N$$ es un isomorfismo, entonces existe un abierto $U$ de $p$ tal que:
>
>- $F(U)$ es abierto de $F(p)$ en $N$.
>- La restriccion $$F|_U:U \subseteq M \to F(U) \subseteq N$$ es un difeomorfismo.
>
>>[!Proof]-
>>1. Llevamos el problema a $\mathbb{R}^{n}$ 
>>2. Como $(dF)_{p}$ es isomorfismo entonces $$\dim M=\dim T_{p}M=\dim T_{F(p)}N=\dim N$$
>>3. Dado que $F$ es suave tenemos cartas $(U,\varphi)$ en torno de $p$ y $(W,\psi)$ en torno de $F(p)$ tales que $F(U) \subseteq W$, y consideramos $$\widetilde F = \psi \circ F \circ \varphi^{-1}:\varphi(U) \subseteq \mathbb R^n \to \psi(W) \subseteq \mathbb R^n.$$
>>4. Por regla de la cadena, (Notar que $\psi,\phi ^{-1}$ son suaves por mas que se corestringa, dado que son difeomorfimos cuando se corestringen, entonces puedo aplicar regla de la cadena)  $$(d\widetilde F)_{\varphi(p)}=(d\psi)_{F(p)} \circ (dF)_p \circ (d\varphi^{-1})_{\varphi(p)}.$$
>>5. Como $\varphi,\psi$ son difeomorfismos locales entonces $d\psi$ y $d\varphi$ son isomorfismos y $(dF)_p$ es isomorfismo por hipotesis, luego $(d\widetilde F)_{\varphi(p)}$ es isomorfismo.
>>6. Entonces por el teorema de la funcion inversa en $\mathbb R^n$, existe un abierto $\widetilde U$ de $\varphi(p)$ tal que $$\widetilde F|_{\widetilde U}:\widetilde U \to \widetilde F(\widetilde U)$$ es difeomorfismo, con $\widetilde F(\widetilde U)$ abierto.
>>7. Definiendo $$U=\varphi^{-1}(\widetilde U),$$ se obtiene que $U$ es abierto de $p$ y $$F|_U=\psi^{-1} \circ \widetilde F|_{\widetilde U} \circ \varphi|_U$$ es difeomorfismo. (Misma aclaracion de suavidad que en paso 4.) 

^b664ba

>[!Corollary]
>Sea $$F:M \to N$$ funcion suave tal que $(dF)_p$ es un isomorfismo para todo $p \in M$. Entonces $F$ es un difeomorfismo local.

## Repaso de algebra lineal

>[!Definition] Espacio dual
>Si $V$ es un espacio vectorial real de dimension finita, definimos $$V^*=\{\lambda:V \to \mathbb R : \lambda \text{ es lineal}\}.$$ $V^*$ tiene una estructura natural de espacio vectorial.
>Si $\mathcal B=\{e_1,\ldots,e_n\}$ es una base de $V$, entonces una base de $V^*$ es $$\mathcal B^*=\{e_1^*,\ldots,e_n^*\},$$ donde $$e_i^*:V \to \mathbb R,\qquad \sum_{k=1}^n t_k e_k \mapsto t_i.$$
>Es decir, $e_i^*(v)$ se encarga de dar la coordenada $i$ de $v$ en la base $\{e_1,\ldots,e_n\}$.
>Si $\alpha \in V^*$, entonces $$\alpha = \sum_{i=1}^n \alpha(e_i)e_i^*.$$

## Espacio cotangente

>[!Proposition] Espacio cotangente
>Sea $M$ una variedad suave y sea $$f:M \to \mathbb R$$ en $C^{\infty}(M)$, entonces $$(df)_p:T_pM \to T_{f(p)}\mathbb R \simeq \mathbb R$$ puede verse como un funcional en $T_p^*M:=(T_{p}M)^{*}$.
>Mas precisamente, para $v \in T_pM$, $$(df)_p(v)=v(f)\in \mathbb{R}$$ para todo $v\in T_{p}M$
>
>>[!Proof]-
>>1. Sabemos, $$(df)_p:T_pM\to T_{f(p)}\mathbb R,$$
>>2. Luego si $v\in T_pM$, entonces $(df)_p(v)\in T_{f(p)}\mathbb R$. Como $$T_{f(p)}\mathbb R=\operatorname{span}\left\{\frac{d}{dt}\bigg|_{f(p)}\right\},$$existe $\lambda\in\mathbb R$ tal que $$(df)_p(v)=\lambda\frac{d}{dt}\bigg|_{f(p)}.$$
>>3. Para encontrar $\lambda$, evaluamos en $\operatorname{Id}_{\mathbb R}$ (por que $\frac{d}{dt}\bigg|_{f(p)}Id=1$): $$\lambda=(df)_p(v)(\operatorname{Id}_{\mathbb R})=v(\operatorname{Id}_{\mathbb R}\circ f)=vf.$$
>>4. Entonces $$(df)_p(v)=vf\frac{d}{dt}\bigg|_{f(p)}.$$
>>5. Es decir, si identificamos $T_{f(p)}\mathbb R\simeq\mathbb R$ mediante la base $\frac{d}{dt}\big|_{f(p)}$, entonces $(df)_p(v)$ se identifica con el número $$vf.$$
>>6. Por eso, visto como elemento de $T_p^*M$, $$(df)_p(v)=vf.$$

^14f1f6

>[!Proposition]
>Si $(U,\varphi=(x_1,\ldots,x_m))$ es una carta suave, las funciones $x_{i}:U\subseteq M\rightarrow\mathbb{R}$ definen funcionales lineales en $(T_{p}M)^{*}$ dadas por $(dx_{i})_{p}$ y el conjunto $$\{(dx_1)_p,\ldots,(dx_m)_p\}$$ es la base dual de $$\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\ldots,\left.\frac{\partial}{\partial x_m}\right|_p\right\}$$
>
>>[!Proof]-
>>1. Por [[GS - Teo10#^14f1f6]] sabemos que $(dx_{i})_{p}\in (T_pM)^{*}$ 
>>2. Para ver que son base dual alcanza ver que $$(dx_i)_p\left(\left.\frac{\partial}{\partial x_j}\right|_p\right)=\delta_{ij}.$$
>>3. Y en efecto $$(dx_i)_p\left(\left.\frac{\partial}{\partial x_j}\right|_p\right)=\left.\frac{\partial}{\partial x_j}\right|_p(x_i)=\frac{\partial}{\partial x_j}(x_i)\Big|_p=\delta_{ij}.$$

>[!Remark]
>Notar que $(V^*)^*$ es naturalmente isomorfo a $V$.
>Hay un isomorfismo $$\mathcal L:V \to (V^*)^*,\qquad v \mapsto \mathcal L(v).$$ con $$\mathcal L(v):V^* \to \mathbb R,\qquad \lambda \mapsto \lambda(v).$$
>Chequear que $\mathcal L$ es transformacion lineal y que $\ker \mathcal L=\{0\}$.
>Como tenemos base $\mathcal B$ de $V$, entonces $\mathcal B^*$ es base de $V^*$,
>El isomorfismo $\mathcal L$ nos sirve para resolver el problema contrario: Dado $\mathcal B^{*}$ base de $V^{*}$ encontrar $\mathcal B$ base de $V$ tal que su base dual que coincida con $\mathcal B^{*}$.    
>Como  $$ \mathcal B^*=\{\lambda_1,\ldots,\lambda_n\} $$ es base de $V^{*}$ automaticamente tenemos $$ (\mathcal B^*)^*=\{\lambda_1^{*} ,\ldots,\lambda_n^{*} \} $$ base de $(V^{*})^{*}$ 
>Ahora llamemos $$v_i=\mathcal L^{-1}(\lambda_i).$$ y veamos que $\mathcal B=\{v_1,\ldots,v_n\}$ es la base de $V$ que estamos buscando. 
>Para ver esto, alcanza ver que $$\lambda_i(v_j)=\delta_{ij}.$$
>En efecto, $$\lambda_i(v_j)=\lambda_i(\mathcal L^{-1}(\lambda_j^{*} ))=\mathcal L(\mathcal L^{-1}(\lambda_{j}^{*} ) )(\lambda_{i})=\lambda_{j}^{*} (\lambda_{i})=\delta_{ij}$$

## Pullback

>[!Definition] Pullback
>Sean $V,W$ espacios vectoriales reales de dimension finita, y $$T:V \to W$$ una transformacion lineal. Se define $$T^*:W^* \to V^*$$ por $$\lambda \mapsto \lambda \circ T.$$
>Es facil ver que $T^*$ es transformacion lineal y se llama el pullback de $T$, o transformacion dual de $T$, o adjunta de $T$.

>[!Proposition] Ejercicio
>Sean $V,W$ espacios vectoriales reales de dimension finita, y $$T:V \to W$$ transformacion lineal. Entonces:
>
>1. $T$ es inyectiva si y solo si $T^*$ es sobreyectiva.
>2. $T$ es sobreyectiva si y solo si $T^*$ es inyectiva.
>
>Ayudo un poco:
>Si $e_1,\ldots,e_n$ es base de $V$, entonces $Te_1,\ldots,Te_n$ extiende a base de $W$, digamos $$\{Te_1,\ldots,Te_n,u_1,\ldots,u_s\},$$ y tenemos base dual $$\{(Te_1)^*,\ldots,(Te_n)^*,u_1^*,\ldots,u_s^*\}.$$
>Notar que $$T^*((Te_i)^*)=e_i^*.$$
>Para la vuelta, si $v \in V$ y $Tv=0$, como $v \ne 0$, existe $\alpha \in V^*$ con $\alpha(v)\ne 0$. Como $T^*$ es sobre, dado $\alpha \in V^*$ existe $\beta \in W^*$ tal que $\alpha=T^*\beta$, y entonces $$\alpha(v)=(T^*\beta)(v)=\beta(Tv)=0,$$ contradiccion.
>
>>[!Proof]- Revisar
>>1. Probemos primero que si $T$ es inyectiva, entonces $T^*$ es sobreyectiva. Sea $\alpha \in V^*$. Tomamos una base $\{e_1,\ldots,e_n\}$ de $V$. Como $T$ es inyectiva, $\{Te_1,\ldots,Te_n\}$ es linealmente independiente en $W$, luego se puede extender a una base de $W$:
>>$$\{Te_1,\ldots,Te_n,u_1,\ldots,u_s\}.$$
>>2. Definimos $\beta \in W^*$ sobre esta base por
>>$$\beta(Te_i)=\alpha(e_i)\quad \text{para } i=1,\ldots,n,$$
>>y
>>$$\beta(u_j)=0\quad \text{para } j=1,\ldots,s.$$
>>Entonces, para cada $i$,
>>$$(T^*\beta)(e_i)=\beta(Te_i)=\alpha(e_i).$$
>>Como $T^*\beta$ y $\alpha$ coinciden en una base de $V$, se tiene $T^*\beta=\alpha$. Por lo tanto $T^*$ es sobreyectiva.
>>3. Reciprocamente, supongamos que $T^*$ es sobreyectiva. Queremos ver que $T$ es inyectiva. Sea $v \in V$ tal que $Tv=0$. Si $v \ne 0$, existe $\alpha \in V^*$ tal que $\alpha(v)\ne 0$. Como $T^*$ es sobreyectiva, existe $\beta \in W^*$ tal que $\alpha=T^*\beta$. Entonces
>>$$\alpha(v)=(T^*\beta)(v)=\beta(Tv)=\beta(0)=0,$$
>>contradiccion. Luego $v=0$, y por lo tanto $T$ es inyectiva.
>>4. Probemos ahora que si $T$ es sobreyectiva, entonces $T^*$ es inyectiva. Sea $\beta \in W^*$ tal que $T^*\beta=0$. Entonces, para todo $v \in V$,
>>$$0=(T^*\beta)(v)=\beta(Tv).$$
>>Como $T$ es sobreyectiva, todo $w \in W$ es de la forma $w=Tv$ para algun $v \in V$. Luego $\beta(w)=0$ para todo $w \in W$, y entonces $\beta=0$. Por lo tanto $T^*$ es inyectiva.
>>5. Reciprocamente, supongamos que $T^*$ es inyectiva. Queremos ver que $T$ es sobreyectiva. Si $T$ no fuera sobreyectiva, entonces $\operatorname{Im}T$ seria un subespacio propio de $W$. Tomamos una base $\{w_1,\ldots,w_r\}$ de $\operatorname{Im}T$ y la extendemos a una base de $W$:
>>$$\{w_1,\ldots,w_r,u_1,\ldots,u_s\},\qquad s\ge 1.$$
>>Definimos $\beta \in W^*$ por
>>$$\beta(w_i)=0\quad \text{para } i=1,\ldots,r,$$
>>y
>>$$\beta(u_1)=1,\qquad \beta(u_j)=0\quad \text{para } j=2,\ldots,s.$$
>>Entonces $\beta \ne 0$, pero para todo $v \in V$ tenemos $Tv \in \operatorname{Im}T$, y por eso
>>$$(T^*\beta)(v)=\beta(Tv)=0.$$
>>Asi, $T^*\beta=0$ con $\beta \ne 0$, contradiciendo que $T^*$ es inyectiva. Luego $T$ es sobreyectiva.

## Funciones independientes

>[!Proposition]
>Sea $M$ variedad suave de dimension $m$, sea $p \in M$.  Entonces un conjunto $$\{y_1,\ldots,y_m\}$$ de funciones suaves definidas en un abierto de $M$ en $p$ se dice independiente en $p$ si $$\{(dy_1)_p,\ldots,(dy_m)_p\}$$ es un conjunto linealmente independiente en $(T_{p}M)^{*}$ (y asi $n\leq m$)  

>[!Proposition]
>Sea $M$ una variedad suave de dimensión $m$. Sea $U$ un abierto de $M$ y $p\in U$. Si $\{y_1,\ldots,y_m\}$ es un conjunto de funciones suaves sobre $U$ independientes en $p$ entonces existe un abierto $V$ de $M$ en $p$, con $V\subseteq U$, tal que $$(V,\psi=(y_1,\ldots,y_m))$$es una carta en $p$.
>
>>[!Proof]-
>>1. Se define $$\psi:U \subseteq M \to \mathbb R^m,\qquad q \mapsto (y_1(q),\ldots,y_m(q)).$$ La cual resulta suave.
>>2. Queremos ver que $(d\psi)_p$ es un isomorfismo.
>>3. Como $\dim M=m$ y $\{(dy_1)_p,\ldots,(dy_m)_p\}$ es linealmente independiente, entonces $$\mathcal B^*=\{(dy_1)_p,\ldots,(dy_m)_p\}$$ es base de $T_p^*M$. 
>>4. Sea $$\mathcal B=\{v_1,\ldots,v_m\}$$ la respectiva base dual de $B^{*}$ en $T_pM$.
>>5. Usamos $\mathcal B$ para calcular $(d\psi)_p$. $$\begin{align}(d\psi)_p(v_j)&=\sum_{i=1}^m a_{ij}\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (d\psi)_{p}(v_{j})(r_{i})\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (v_{j})(r_{i}\circ\psi)\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (v_{j})(y_{i})\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (dy_{i})_{p}(v_{j})\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\end{align}$$
>>6. Luego, $(d\psi)_p$ manda base en base, por lo tanto es un isomorfismo y por el teorema de la funcion inversa existe un abierto $V$ de $p$ tal que $\psi(V)$ es abierto en $\mathbb{R}^{n}$ y $\psi|_{V}:V\rightarrow\psi(V)$ es un difeo

^2b23b2

