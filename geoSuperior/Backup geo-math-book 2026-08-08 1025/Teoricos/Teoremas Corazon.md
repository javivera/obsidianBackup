# Teoremas corazón

## Vectores tangentes

>[!Proposition] Localidad de los vectores tangentes
>Sea $M$ una variedad suave, $p\in M$ y $v\in T_pM$. Si $f,g\in C^\infty(M)$ coinciden en un abierto de $p$, entonces
>$$v(f)=v(g).$$
>
>>[!Proof]- Demostracion
>>1. Es equivalente demostrar que si $f-g=h\in C^\infty(M)$ se anula en un abierto $U$ de $p$, entonces $v(h)=0$.
>>2. Se toma una función campana $\beta$ con $\beta\equiv 1$ en un abierto $V\subseteq U$ de $p$ y soporte contenido en $U$.
>>3. Entonces $\beta h\equiv 0$ en todo $M$ por que si $x\in U$ $h(x)=0$ y si $x\in U^{c}$ entonces $\beta(x)=0$ entonces $$v(\beta h)=0.$$ por linealidad de $v$ 
>>4. Pero por Leibniz,
>>$$0=v(\beta h)=\beta(p)\,v(h)+h(p)\,v(\beta)=v(h)$$
>>ya que $\beta(p)=1$ y $h(p)=0$.
>>5. Luego $v(h)=0$.

>[!Proposition] Independencia lineal de los vectores coordenados
>El conjunto de vectores coordenados
>$$\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\dots,\left.\frac{\partial}{\partial x_n}\right|_p\right\}$$
>es linealmente independiente en $T_pM$.
>
>>[!Proof]- Demostracion
>>6. Las funciones coordenadas $x_i$ están definidas solo en $U$, ósea están en $C^{\infty}(U)$ 
>>7. Pero $\left.\frac{\partial}{\partial x_n}\right|_p$ esta en $C^{\infty}(M)$ así que primero se extienden a funciones suaves globales $\widetilde{x}_i\in C^\infty(M)$ que coinciden con $x_i$ en un abierto $V$ de $p$ usando [[GS - Teo5#^405b16|Extensión de funciones suaves]] (obtenemos múltiples abiertos y tomamos la intersección no vacía por que esta $p$) 
>>8. Ahora notamos que $$\left.\frac{\partial}{\partial x_i}\right|_{p}\widetilde{x}_{j}=\left.\frac{\partial}{\partial x_i}\right|_{p}x_{j}$$ porque $\widetilde{x}_{j}$ y $x_j$ coinciden en $V$ un abierto de $p$, por [[GS - Teo5#^b713ca|Localidad de los vectores tangentes]]. Luego aplicando la definición del vector coordenado, $$\left.\frac{\partial}{\partial x_i}\right|_{p}x_{j}=\left.\frac{\partial}{\partial y_i}\right|_{\varphi(p)}(x_{j}\circ\varphi^{-1}).$$
>>9. Y recordemos la notacion $(U,\varphi=(x_{1},\ldots,x_{n}))$ osea que $x_{j}\circ\varphi ^{-1}(q_{1},\ldots,q_{n})=x_{j}(p)=q_{j}$ otra manera de decir que $x_{j}\circ\varphi ^{-1}=\pi_{j}$ la proyeccion    
>>10. Y es directo ver que $$\left.\frac{\partial}{\partial y_i}\right|_{\varphi(p)}\pi_{j}=\delta_{ij}$$ 
>>11. Entonces tenemos
>>   $$t_1\left.\frac{\partial}{\partial x_1}\right|_p+\cdots+t_n\left.\frac{\partial}{\partial x_n}\right|_p=0$$
>>   aplicando $\widetilde{x}_j$ a esta combinación lineal se obtiene
>>   $$0=t_1\delta_{1j}+\cdots+t_n\delta_{nj}=t_j$$
>>   y por lo tanto todos los coeficientes son cero.
>>12. Mostrando la independencia lineal.

## El espacio tangente de una carta

>[!Proposition] Regla de la cadena
>Si $F:M\to N$ y $G:N\to P$ son suaves, entonces
>$$d(G\circ F)_p=(dG)_{F(p)}\circ dF_p.$$
>
>>[!Proof]- Demostracion
>>1. Sea $v\in T_pM$ y $h\in C^\infty(P)$. Entonces como la composición es asociativa 
>>$$\bigl(d(G\circ F)_p(v)\bigr)(h)=v(h\circ (G\circ F))=v(h\circ G\circ F)$$
>>2. Por otro lado, mirando $dF_{p}(v)$ como un vector tangente y aplicandolo a $h\circ G$  
>>$$\bigl(((dG)_{F(p)}\circ dF_p)(v)\bigr)(h)=((dG)_{F(p)}(dF_{p}(v)))(h)=(dF_p(v))(h\circ G)=v((h\circ G)\circ F)=v(h\circ G\circ F).$$
>>3. Como ambas derivaciones actúan igual sobre toda función $h\in C^\infty(P)$, son iguales. 
>>4. Y luego como ambas actuan sobre todo $v\in T_{p}M$ son iguales

## Funciones de corte y funciones campana

>[!Corollary] Función que vale 1 sobre un cerrado
>Sea $U$ un abierto de $M$ y $A$ un cerrado de $M$ con $$A\subseteq U$$
>Entonces existe una función suave $$f:M\to\mathbb R$$tal que $$0\le f\le 1,\qquad f|_A\equiv 1,\qquad \operatorname{supp}f\subseteq U$$
>
>>[!Proof]- Demostracion
>>1. Como $A$ es cerrado. Considerar al cubrimiento de $M$ dado por $$\{U,M\setminus A\}$$
>>2. Por [[GS - Teo8#^eafe2b|Existencia de particiones de la unidad]] existe una particion de la unidad $\{\rho,\sigma\}$ subordinada a $\{U,M\setminus A\}$ con $$\operatorname{supp}\rho\subseteq U,\qquad \operatorname{supp}\sigma\subseteq M\setminus A$$
>>3. Para $p\in A$ se tiene $\sigma(p)=0$ porque $\operatorname{supp}\sigma\subseteq M\setminus A$. Usando la parte 3 de la [[GS - Teo8#^f5db1b|definición de partición de la unidad]], tenemos $\rho(p)+\sigma(p)=1$, luego $$\rho(p)=1$$
>>4. Tomamos $f=\rho$ que es la funcion que buscabamos

>[!Proposition] Extensión de funciones suaves definidas en cerrados
>Sea $M$ una variedad suave, $A\subseteq M$ cerrado y $$F:A\to\mathbb R^k$$una función suave en el sentido anterior. 
>Entonces, para todo abierto $U$ con $A\subseteq U$ existe una función suave $$\widetilde F:M\to\mathbb R^k$$ funcion suave tal que
>$$\widetilde F|_A=F,
>\qquad
>\operatorname{supp}\widetilde F\subseteq U.$$
>
>>[!Proof]- Demostracion
>>1. Por [[GS - Teo8#^cf02ec|Función suave sobre un subconjunto arbitrario]], para cada $p\in A$ elegimos un abierto $W_p\subseteq U$ y una extensión suave local $$\widetilde F_p:W_p\to\mathbb R^k$$que coincide con $F$ en $W_{p}\cap A$ 
>>2. Sin perdida de generalidades podemos suponer $W_{p}\subseteq U$ (En otro caso, cambiamos $W_{p}$ por el abierto $W_{p}\cap U$)   
>>3. Ahora tenemos el conjunto $$\{W_p\}_{p\in A}\cup\{M\setminus A\}$$que es un cubrimiento abierto de $M$.
>>4. Por [[GS - Teo8#^eafe2b|Existencia de particiones de la unidad]] existe una partición de la unidad $$\{\rho_p\}_{p\in A}\cup\{\rho_0\}$$subordinada estrictamente a este cubrimiento, con $$\operatorname{supp}\rho_p\subseteq W_p, \qquad \operatorname{supp}\rho_0\subseteq M\setminus A$$
>>5. Como hicimos en el ejemplo anterior, definimos $$\widetilde F=\sum_{p\in A}\rho_p\,\widetilde F_p$$donde estamos abusando de notación y entendemos el producto $$(\rho_p\widetilde{F}_p)(q)=\begin{cases}\rho_p(q)\,\widetilde{F}_p(q)&\text{si }q\in W_p,\\0&\text{si }q\notin W_p.\end{cases}$$
>>6. Veamos que cada término $\rho_p\widetilde F_p$ extendido por $0$ fuera de $W_p$ es suave sobre todo $M$. Si $q\in W_p$, la suavidad es trivial porque allí es producto de funciones suaves. Si $q\notin W_p$, entonces como $\operatorname{supp}\rho_p\subseteq W_p$, también $q\notin\operatorname{supp}\rho_p$. Como $\operatorname{supp}\rho_p$ es cerrado, $M\setminus\operatorname{supp}\rho_p$ es un abierto que contiene a $q$, y en ese abierto la extensión vale $0$; por tanto también es suave alrededor de $q$.
>>7. Tenemos que $\widetilde{F}$ es suave: como $\{\operatorname{supp}\rho_p\}$ es localmente finita, alrededor de cada punto de $M$ la suma es finita; y por el paso 6 cada término de esa suma finita es una función suave.
>>8. Ahora, si $q\in A$, $$\widetilde{F}(q)=\sum_{p\in A}\rho_p(q)\widetilde{F}_p(q)=\sum_{p\in A}\rho_p(q)F(q)$$ porque $\widetilde{F}_p$ coincide con $F$ en $W_p\cap A$,
>>9. Y seguimos $$\sum_{p\in A}\rho_p(q)F(q)=\left(\sum_{p\in A}\rho_p(q)\right)F(q)=\left(1-\rho_0(q)\right)F(q)$$ donde el segundo igual vale por que $\sum_{p\in A}\rho_{p}+\rho_{0}=1$ 
>>10. Y como $\operatorname{supp}\rho_0\subseteq M\setminus A$, tenemos $$\left(1-\rho_0(q)\right)F(q)=F(q).$$
>>11. Por último veamos $\operatorname{supp}\widetilde{F}\subseteq U$: Sea $q\in\operatorname{supp}\widetilde{F}$. Como $\{\operatorname{supp}\rho_p\}\cup\{\operatorname{supp}\rho_0\}$ es localmente finita, existe $W_q$ abierto de $M$ con $q$ que corta un número finito de miembros de $\{\operatorname{supp}\rho_p\}\cup\{\operatorname{supp}\rho_0\}$, digamos $\operatorname{supp}\rho_{p_1},\ldots,\operatorname{supp}\rho_{p_k}$ y $\operatorname{supp}\rho_0$.
>>12. Esto implica que debe haber un $j$ tal que $q\in\operatorname{supp}\rho_{p_j}$, pues en otro caso, existirían abiertos $W_1,\ldots,W_k$ de $q$ donde $\rho_{p_1},\ldots,\rho_{p_k}$ se anulan, y así $$W_0\cap W_1\cap\cdots\cap W_k$$es un abierto de $q$ donde $\widetilde{F}$ vale cero que es absurdo
>>13. Como $q\in\operatorname{supp}\rho_{p_j}$ y $\operatorname{supp}\rho_{p_j}\subseteq W_{p_j}\subseteq U$, entonces $q\in U$. Por lo tanto, $\operatorname{supp}\widetilde F\subseteq U$.

## Repaso de algebra lineal

>[!Proposition] Funciones suaves e independientes forman carta
>Sea $M$ una variedad suave de dimensión $m$. Sea $U$ un abierto de $M$ y $p\in U$. Si $\{y_1,\ldots,y_m\}$ es un conjunto de funciones suaves sobre $U$ [[GS - Teo10#^conjunto-funciones-independientes|independientes en p]] entonces existe un abierto $V$ de $M$ en $p$, con $V\subseteq U$, tal que $$(V,\psi=(y_1,\ldots,y_m))$$es una carta en $p$.
>
>>[!Proof]- Demostracion
>>1. Se define $$\psi:U \subseteq M \to \mathbb R^m,\qquad q \mapsto (y_1(q),\ldots,y_m(q)).$$ La cual resulta suave.
>>2. Queremos ver que $(d\psi)_p$ es un isomorfismo.
>>3. Como $\dim M=m$ y $\{(dy_1)_p,\ldots,(dy_m)_p\}$ es linealmente independiente, entonces $$\mathcal B^*=\{(dy_1)_p,\ldots,(dy_m)_p\}$$ es base de $T_p^*M$. 
>>4. Sea $$\mathcal B=\{v_1,\ldots,v_m\}$$ la respectiva base dual de $B^{*}$ en $T_pM$.
>>5. Usamos $\mathcal B$ para calcular $(d\psi)_p$. $$\begin{align}(d\psi)_p(v_j)&=\sum_{i=1}^m a_{ij}\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (d\psi)_{p}(v_{j})(r_{i})\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (v_{j})(r_{i}\circ\psi)\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (v_{j})(y_{i})\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\sum_{i=1}^m (dy_{i})_{p}(v_{j})\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\\&=\frac{\partial}{\partial r_i}\Big|_{\psi(p)}\end{align}$$
>>6. Luego, $(d\psi)_p$ manda base en base, por lo tanto es un isomorfismo y por el teorema de la funcion inversa existe un abierto $V$ de $p$ tal que $\psi(V)$ es abierto en $\mathbb{R}^{n}$ y $\psi|_{V}:V\rightarrow\psi(V)$ es un difeo

## Lema de factorización MUY IMPORTANTE

>[!Corollary]
>Sean $M$ y $N$ variedades suaves de dimensión $m$ y $n$, respectivamente. Sea $$F:M\to N$$ suave y supongamos que $$(dF)_p:T_pM\to T_{F(p)}N$$ es inyectiva, y por tanto $m\le n$. (Osea $F$ es inmersion) 
>Si $(V,\varphi=(x_1,\ldots,x_n))$ es una carta suave de $N$ en $F(p)$, entonces existen $$i_1,\ldots,i_m\in\{1,\ldots,n\}$$ tales que $$\psi=(x_{i_1}\circ F,\ldots,x_{i_m}\circ F)$$ define una carta suave de $M$ en cierto abierto de $p$.
>
>>[!Proof]- Demostracion
>>1. Para usar el [[GS - Teo11#^49431b]], alcanza con ver que $$\{d(x_1\circ F)_p,\ldots,d(x_n\circ F)_p\}$$ genera $T_p^\ast M$.
>>2. Como $$(dF)_p:T_pM\to T_{F(p)}N$$ es inyectiva, entonces $$(dF)^\ast_{F(p)}:T_{F(p)}^\ast N\to T_p^\ast M$$ es sobreyectiva por [[GS - Teo10#^dual-inyectiva-sobreyectiva|dual de una transformacion inyectiva]].
>>3. Como $(V,\varphi=(x_1,\ldots,x_n))$ es una carta suave de $N$ en $F(p)$ sucede que $$\left\{(dx_1)_{F(p)},\ldots,(dx_n)_{F(p)}\right\}$$ es base de $T_{F(p)}^\ast N$ por [[GS - Teo10#^base-dual-coordenadas|base dual de las coordenadas]]. Entonces sus imágenes por $(dF)^\ast_{F(p)}$ generan $T_p^\ast M$ por el paso 2.
>>4. Pero $$(dF)^\ast_{F(p)}\big((dx_i)_{F(p)}\big)=d(x_i\circ F)_p.$$ Luego los $d(x_i\circ F)_p$ generan $T_p^\ast M$, como queríamos.

>[!Proposition] Lema de factorizacion
>Sea $F:M\rightarrow N$ suave. Y sea $(P,g)$ subvariedad de $N$ tal que $F(M)\subseteq g(P)$.
>Ademas sea $\widehat{F}:M\rightarrow P$ la funcion $\widehat{F}(x)=y$ si $F(x)=g(y)$ la cual es la unica funcion de $M$ en $P$ que hace conmutar el diagrama
>![[Pasted image 20260429160319.png]]
>Entonces si $\widehat{F}$ es continua es suave
>
>>[!Proof]- Demostracion
>>1. Sea $p\in M$ y veamos que $\widehat F$ es suave en un entorno de $p$.
>>2. Sea $q=\widehat F(p)$, es decir, $q$ es el único elemento de $P$ tal que $$F(p)=g(q).$$
>>3. Sea $(V,\psi=(y_1,\ldots,y_n))$ una carta suave de $N$ alrededor de $F(p)$.
>>4. Como $g:P\to N$ es subvariedad, tenemos $$(dg)_q:T_qP\to T_{g(q)}N$$ es inyectiva, y por [[GS - Teo11#^c4d494|Corolario]], existe un entorno $W$ de $q$ e índices $i_1,\ldots,i_k\in\{1,\ldots,n\}$, con $k=\dim P$, tal que $$(W,\varphi=(y_{i_1}\circ g,\ldots,y_{i_k}\circ g))$$ es carta suave de $P$.
>>5. Sea $$\pi:\mathbb R^n\to\mathbb R^k,\qquad (s_1,\ldots,s_n)\mapsto (s_{i_1},\ldots,s_{i_k}),$$ la cual es suave.
>>6. La ventaja de introducir esta función es que podemos expresar la carta $(W,\varphi)$ como $$(W,\pi\circ\psi\circ g).$$
>>7. Como $\widehat F$ es continua, tenemos $$U=\widehat F^{-1}(W)$$ es un abierto de $M$ que contiene a $p$.
>>8. Para ver que $\widehat{F}$ es suave en $p$ alcanza ver que $\widehat{F}|_{U}$ es suave y para esto componemos con la carta $\varphi$ (basta componer solo a un lado por que si vemos eso luego dada carta $\psi$ tendremos que $\varphi\circ\widehat{F}|_{U}\circ\psi$ es composicion de suaves) $$\varphi\circ\widehat{F}|_{U}=\pi\circ\psi\circ g\circ\widehat{F}|_{U}=\pi\circ\psi\circ F|_{U}$$ esto ultimo vale por que $g(\widehat{F}|_{U}(x))=g(y)=F(x)$ por definicion
>>9. $\pi$ es suave por definicion $\psi\circ F|_{U}$ es suave por que $F$ es suave entonces $\varphi\circ\widehat{F}|_{U}$ resulta suave. Luego $\widehat{F}$ es suave

>[!Proposition] Unicidad de subvariedad via inclusion
>Sea $N$ variedad suave y sea $A\subseteq N$. Supongamos que $A$ tiene una topología $\tau$ no necesariamente la topología relativa.
>Entonces existe a lo sumo una estructura de variedad diferenciable sobre $A$ compatible con $\tau$ tal que $$(A,i)$$ es subvariedad, donde $$i:A\to N$$ es la inclusión. (De hecho podria no haber ninguna)
>
>>[!Proof]- Demostracion
>>10. Sean $\mathcal F_1,\mathcal F_2$ dos estructuras de variedad diferenciable sobre $A$ compatibles con la topología $\tau$.
>>11. Para ver que son iguales, alcanza con ver que $$\operatorname{Id}:(A,\mathcal F_1)\to (A,\mathcal F_2)$$ $$\operatorname{Id}:(A,\mathcal F_2)\to (A,\mathcal F_1)$$ es difeomorfismo.
>>12. Usemos el lema de factorizacion
>>![[Pasted image 20260429215527.png]]
>>13. Como $F=i$, es claro que la (unica) $\widehat{F}$ que cumple [[GS - Teo11#^1258d0|Lema de factorizacion]] es $$\widehat F=\operatorname{Id}:(A,\mathcal F_1)\to(A,\mathcal F_2)$$  
>>14. Como la topología que tienen $(A,\mathcal F_1)$ y $(A,\mathcal F_2)$ es la misma, tenemos que $\widehat F=\operatorname{Id}$ es continua, y por tanto $\widehat F$ es suave.  
>>15. Cambiando los roles, también tenemos que $\operatorname{Id}:(A,\mathcal F_2)\to(A,\mathcal F_1)$ es suave.
>>16. Por tanto, $\operatorname{Id}:(A,\mathcal F_1)\to(A,\mathcal F_2)$ es un difeomorfismo, y entonces $\mathcal F_1=\mathcal F_2$
>>17. Se necesita que sea difeomorfismo para comparar cartas de ambas estructuras: si $(U,\varphi)\in\mathcal F_1$ y $(V,\psi)\in\mathcal F_2$, entonces en la intersección el cambio de coordenadas se puede escribir usando la identidad como $$\psi\circ\varphi^{-1}=\psi\circ\operatorname{Id}\circ\varphi^{-1}.$$ Como $\operatorname{Id}:(A,\mathcal F_1)\to(A,\mathcal F_2)$ es suave, esta composición es suave. Cambiando los roles se obtiene la suavidad de $\varphi\circ\psi^{-1}$, y por eso las cartas son compatibles.

## Extension de funciones suaves

>[!Proposition] Extension local
>Sea $(M,i)$ una inmersion en $N$ y sea $p\in M$ y sea $g:M\to\mathbb R$ funcion suave. 
>Entonces, existen un abierto $U$ de $M$ en $p$, un abierto $V$ de $N$ en $i(p)$ con $i(U)\subseteq V$ (cuidado, $M$ no necesariamente tiene topologia heredada) y una funcion $$\widetilde g:V\subseteq N\to\mathbb R$$ suave que extiende a $g$, es decir, $\widetilde g\circ i=g$ para todo $q\in U$.
>![[Pasted image 20260505230207.png]]
>
>>[!Proof]- Demostracion
>>1. Sea $m=\dim M$ y $n=\dim N$ si $m=n$ sale gratis (por que?) 
>>2. Como $(M,i)$ es una inmersion, sabemos por la formula local de una inmersion que existen cartas $(U,\varphi)$ y $(V,\psi)$ centradas en $p$ e $i(p)$ tales que $$\psi\circ i\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0)$$
>>3. Para poder proyectar adecuadamente, tenemos $\epsilon$ tal que $C_\epsilon^m(0)\subseteq\varphi(U)$ y $C_\epsilon^n(0)\subseteq\psi(V)$. Luego llamamos $$U=\varphi^{-1}(C_\epsilon^m(0))\quad \text{y}\quad V=\psi^{-1}(C_\epsilon^n(0))$$
>>4. Como hemos visto en otras pruebas, tenemos $i(U)\subseteq V$ pues aplicando $\psi$ de ambos lados, esto equivale a $$\psi\circ i\circ\varphi^{-1}(C_\epsilon^m(0))\subseteq C_\epsilon^n(0)$$ y esto ultimo es cierto.
>>5. Si $(x_1,\ldots,x_m)\in C_\epsilon^m(0)$, entonces $|x_i|<\epsilon$, por lo tanto $(x_1,\ldots,x_m,0,\ldots,0)\in C_\epsilon^n(0)$.
>>6. Sea $\pi:\mathbb R^n\to\mathbb R^m$, $(y_1,\ldots,y_m,y_{m+1},\ldots,y_n)\mapsto(y_1,\ldots,y_m)$.
>>7. Nos animamos a proponer $\widetilde g:V\subseteq N\to\mathbb R$ dada por $$\widetilde g=g\circ\varphi^{-1}\circ\pi\circ\psi$$
>>8. Como $$q\in V\xrightarrow{\psi}\psi(q)\in C_{\epsilon}^{n}(0) \xrightarrow{\pi}\pi(\psi(q))\in C_{\epsilon}^{m}(0) \xrightarrow{\varphi^{-1}}\varphi^{-1}(\pi(\psi(q)))\in U\xrightarrow{g}g\circ\varphi^{-1}\circ\pi\circ\psi(q)=\tilde{g}(q)$$, la funcion $\widetilde g$ claramente es funcion suave (por composicion de suaves) sobre $V$ .
>>9. Ademas si $q\in U$, $$\widetilde g\circ i(q)=\tilde g\circ i\circ \varphi\circ\varphi ^{-1}(q)=g\circ\varphi^{-1}\circ\pi\circ\psi\circ i\circ\varphi ^{-1}\circ\varphi(q)=g\circ\varphi ^{-1}\circ Id_{C_{\epsilon}^{m} (0)}\circ\varphi(q)=g(q)$$

>[!Proposition] Caracterizaciones de suavidad
>Sea $X:M \to TM$ un campo vectorial. Son equivalentes:
>
>1. $X$ es suave.
>2. Para toda carta suave $(U,\varphi=(x_1,\ldots,x_n))$ de $M$, las funciones $a_i:U \to \mathbb R$ dadas por $$X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}|_p$$ son suaves.
>3. Para todo abierto $V$ de $M$ y toda funcion $f \in C^\infty(V)$, la funcion $Xf:V \to \mathbb R$, $(Xf)(q)=X_q f$, es suave.
>4. Para toda funcion $f \in C^\infty(M)$, se cumple $Xf \in C^\infty(M)$.
>
>>[!Proof]- Demostracion
>>- $1 \Rightarrow 2$. 
>>1. Tenemos la carta $(U,\varphi=(x_{1},\ldots,x_{n}))$ la cual induce $(\widetilde{U}=\pi ^{-1}(U),\widetilde{\varphi})$ dada por $$\widetilde\varphi(p,v)=(x_1(p),\ldots,x_n(p),v_1,\ldots,v_n)$$ donde $v_i$ son las coordenadas del vector $v$ en la base $\{ \frac{\partial}{\partial x_{1}}|_{p},\ldots,\frac{\partial}{\partial x_{n}}|_{p} \}$  
>>2. Como $X$ es suave, $$\widetilde\varphi \circ X|_U:U \to \mathbb R^{2n}$$ es suave. 
>>3. Pero por la definición de las funciones $a_i$ tenemos que $X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}|_p$, osea las coordenadas de $X_p$ son $a_i(p)$. Por lo tanto $$\widetilde\varphi \circ X|_U(p)=\widetilde{\varphi}(p,X_{p})=(x_1(p),\ldots,x_n(p),a_1(p),\ldots,a_n(p))$$ entonces cada funcion coordenada es suave. En particular, las $a_i$ son suaves.
>>- $2 \Rightarrow 3$. 
>>1. Sea $V$ abierto de $M$ y sea $f \in C^\infty(V)$. Quiero ver $Xf:V\rightarrow\mathbb{R}$ es suave para esto alcanza con chequear suavidad con cartas suaves de $V$
>>2. Tomemos una carta $(U,\varphi=(x_1,\ldots,x_n))$ de $V$. Entonces para todo $p\in U$ tenemos $$X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}|_p$$, con $a_i$ suaves. 
>>3. Tenemos $Xf:U \to \mathbb R$ con $$(Xf)(p)=X_p f=\sum_{i=1}^n a_i(p)\frac{\partial }{\partial x_i}\bigg|_{p}f$$ 
>>4. Como las funciones coordenadas $a_{i}(p)$ son suaves basta ver que $$\frac{\partial}{\partial x_{i}} f:U\subseteq M\rightarrow \mathbb{R}\quad\text{ dada por }\quad \frac{\partial}{\partial x_{i}}f(p)=\frac{\partial}{\partial x_{i}}\bigg|_{p}f$$ son suaves (como funciones que reciben $p\in U$) 
>>5. Pero lo son , por que $$\left(\frac{\partial}{\partial x_{i}}f\right)(p)=\frac{\partial}{\partial x_{i}}\bigg|_{p}f=\frac{\partial}{\partial r_{i}}\bigg|_{\varphi(p)}f\circ\varphi ^{-1}=\frac{\partial}{\partial r_{i}} f\circ\varphi ^{-1}(\varphi(p))$$ osea $$\frac{\partial}{\partial x_{i}}f =\left(\frac{\partial}{\partial r_{i}}f\circ\varphi ^{-1}\right)\circ\varphi$$ pero como $f\circ\varphi ^{-1}$ es suave entonces $\frac{\partial}{\partial r_{i}}f\circ\varphi ^{-1}$ es suave y como $\varphi$ es suave entonces $\frac{\partial}{\partial x_{i}}f$ es suave  
>>- $3 \Rightarrow 1$. 
>>1. Supongamos que para todo abierto $V\subseteq M$ y para toda función $f\in C^\infty(V)$, se tiene $Xf\in C^\infty(V)$. Queremos ver que $X:M\to TM$ es suave.  
>>2. Para esto tomamos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ de $M$. Esta induce una carta suave del fibrado tangente $$(\widetilde U=\pi^{-1}(U),\widetilde\varphi).$$
>>3. Entonces basta ver que $$\widetilde\varphi\circ X|_U:U\to\mathbb R^{2n}$$es suave. (Esto es por que $p\in U$ y es directo ver que $X|_{U}(U)\subseteq \tilde{U}$ osea que despue es componer a derecha con $\varphi ^{-1}$ que es suave)  
>>4. Para cada $p\in U$ tenemos $$\widetilde\varphi\circ X|_U(p)=\left(x_1(p),\ldots,x_n(p),a_1(p),\ldots,a_n(p)\right),$$ donde $a_1(p),\ldots,a_n(p)$ son las coordenadas de $X_p$ en la base coordenada.
>>5. Las primeras $n$ componentes son suaves, porque $x_1,\ldots,x_n$ son las funciones coordenadas de una carta suave.  
>>6. Por lo tanto, falta ver que $$a_i:U\to\mathbb R$$ es suave para cada $i=1,\ldots,n$.  
>>7. Para cada $p\in U$, tenemos $$X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}\bigg|_p.$$
>>8. Evaluamos en la función coordenada $x_i:U\to\mathbb R$. Entonces $$X_px_i=a_i(p).$$
>>9. Por lo tanto, $$a_i=Xx_i:U\to\mathbb R.$$
>>10. Pero $x_i\in C^\infty(U)$, entonces por hipótesis $Xx_i\in C^\infty(U)$. Luego $a_i$ es suave para cada $i$.  
>>11. Así, todas las funciones componentes de $\widetilde\varphi\circ X|_U$ son suaves. Por lo tanto $\widetilde\varphi\circ X|_U$ es suave.  
>>12. Como esto vale para cualquier punto $p$ del fibrado tangente, concluimos que $X:M\to TM$ es suave.
>>- $3 \Rightarrow 4$ es inmediato tomando $V=M$.
>>- $4 \Rightarrow 3$. 
>>1. Queremos probar que si $V\subseteq M$ es abierto y $f\in C^\infty(V)$, entonces $Xf\in C^\infty(V)$.
>>2. Lo único que sabemos por hipótesis es que si $g\in C^\infty(M)$, entonces $Xg\in C^\infty(M)$.
>>3. Sea $p\in V$ arbitrario. Como $V$ es abierto, por [[GS - Teo5#^405b16|Extensión de funciones suaves]] existe un abierto $U\subseteq M$ tal que $$p\in U \qquad \text{y} \qquad \overline{U}\subseteq V.$$ y una funcion $\widetilde f\in C^\infty(M)$ tal que $\widetilde f|_{ U}=\left.f\right|_{ U}$
>>4. Por hipótesis, como $\widetilde f\in C^\infty(M)$, entonces $$X\widetilde f\in C^\infty(M).$$
>>5. Además, como $\left.\widetilde f\right|_U=\left.f\right|_U$, entonces para todo $q\in U$ las funciones $\widetilde f$ y $f$ coinciden en un abierto alrededor de $q$. Por lo tanto, $$X_q\left(\left.\widetilde f\right|_U\right)=X_q\left(\left.f\right|_U\right).$$ por [[GS - Teo5#^b713ca|Localidad de los vectores tangentes]]
>>6. Como esto vale para todo $q$ tenemos que, $$(X\widetilde f)|_U=(Xf)|_U.$$
>>7. Como $X\widetilde f\in C^\infty(M)$, su restricción a $U$ es suave. Luego $$(Xf)|_U\in C^\infty(U).$$
>>8. Como $p\in V$ era arbitrario, para cada punto de $V$ existe un abierto $U\subseteq V$ alrededor de ese punto tal que $(Xf)|_U$ es suave. Por lo tanto, $$Xf\in C^\infty(V).$$ notar que usamos [[GS - Teo14#^e32b2f|Observacion]]

## Campos suaves y subvariedades

>[!Proposition] Suavidad de un campo en una carta
>Sea $(U,\varphi=(x_1,\ldots,x_n))$ una carta suave de $M$ y sea $X:U \to TU$ un campo vectorial. Entonces $X$ es suave si y solo si las coordenadas de $X$ en el marco $\{\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\}$ son funciones suaves.
>
>>[!Proof]- Demostracion
>>- $(\Rightarrow)$ Caso particular de [[GS - Teo14#^3accf8|Caracterizaciones de suavidad]] 
>>- $(\Leftarrow)$ 
>>1. Tenemos la carta asociada a la carta $\varphi$ $$\bigg(\widetilde U=\pi^{-1}(U),\tilde\varphi=\left(x_1\circ\pi,\ldots,x_n\circ\pi,v_1,\ldots,v_n\right)\bigg)$$ que en este caso es un difeo entre $TU$ y $\varphi(U)\times\mathbb{R}^n$.  
>>2. Por tanto, $X$ es suave si $\widetilde\varphi\circ X$ es suave (por que si esto es suave componer a derecha con $\varphi ^{-1}:\varphi(U)\rightarrow U$ sigue siendo suave, por que $\varphi ^{-1}$ es homeo, osea que al componer no cambiamos codominio) 
>>3. Como $$\widetilde\varphi\circ X:U\subseteq M\longrightarrow\mathbb{R}^{2n}\quad\text{esta dada por}\quad p\longmapsto \left(x_1(p),\ldots,x_n(p),a_1(p),\ldots,a_n(p)\right)$$ donde $a_i:U\to\mathbb{R}$ son las coordenadas de $X_{p}$ con respecto al marco $$\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\ldots,\left.\frac{\partial}{\partial x_n}\right|_p\right\},$$
>>4. Y por hipotesis son suaves las coordenadas $a_{i}$ son suaves (obviemente $x_{i}(p)$ son suaves por ser carta), se sigue que $\widetilde\varphi\circ X$ es suave
>>5. Entonces, para cualquier punto $p$ podemos encontrar cartas que cumplen la definicion, por [[GS - Teo4#^funcion-suave-entre-variedades|localidad de la suavidad]].

## Curvas integrales

>[!Theorem] Existencia y unicidad de las curvas integrales
>Sea $X \in \mathfrak X(M)$. Entonces, para cada $p \in M$, existen $a(p)\in\{-\infty\}\cup\mathbb R$, $b(p)\in\mathbb R\cup\{+\infty\}$ y una curva suave $\gamma_p:(a(p),b(p))\subset\mathbb R\to M$ tal que:
>- (a) $0\in(a(p),b(p))$ y $\gamma_p(0)=p$.
>- (b)  $\gamma_p$ es curva integral de $X$: $\gamma_p'(t)=X_{\gamma_p(t)}$.
>- (c) Maximalidad: si $\sigma:(c,d)\subset\mathbb R\to M$ es curva suave que cumple 1 y 2, entonces $(c,d)\subset(a(p),b(p))$ y $\sigma(t)=\gamma_p(t)$ para todo $t\in(c,d)$.
>
>En consecuencia, $\gamma_p$ es la unica curva integral que satisface 1, 2 y 3, y es llamada curva integral maximal de $X$ que comienza en $p$.
>
>>[!Proof]- Demostracion
>>1. Proponemos $(a(p),b(p))$ como la union de todos los intervalos abiertos que contienen al instante $0$ y que son dominios de curvas integrales de $X$ que en el instante $0$ pasan por $p$ (osea que los dominios de estas curvas son intervalos)  
>>2. Para ver que $(a(p),b(p))$ es no vacio, basta exhibir una curva integral que en $t=0$ pasa por $p$ y que este definida en algun intervalo chiquito de $t=0$.
>>3. Para construir tal curva, basta en hacerlo dentro del dominio de una carta $(U,\varphi=(x_1,\ldots,x_n))$ y bajar el problema a $\mathbb R^n$.
>>4. Necesitamos $\sigma:(-\epsilon,\epsilon)\to U$ tal que $\sigma(0)=p$ y $\sigma'(t)=X_{\sigma(t)}$.
>>5. Luego usando la 3era parte de [[Pr2#^6da36a|Ejercicio]] tenemos que si $\widetilde \sigma=\varphi\circ\sigma$ osea $$\widetilde \sigma(t)=(y_1(t),\ldots,y_n(t))$$ entonces $$\sigma'(t)=\sum^{n}_{k=1} y_{k}'(t)\frac{\partial}{\partial x_{k}}\bigg|_{\sigma(k)}$$    
>>6. Por otro lado como $X$ es suave, podemos usar el marco $\big\{ \frac{\partial}{\partial x_{1}},\ldots \frac{\partial}{\partial x_{n}} \big\}$ para expresar $X|_{U}$ como  $$X|_U=\sum_{k=1}^n a_k\frac{\partial}{\partial x_k}$$ con $a_k:U\to\mathbb R$ funciones suaves.
>>7. Entonces $$X_{\sigma(t)}=\sum_{k=1}^n a_k(\sigma(t))\left.\frac{\partial}{\partial x_k}\right|_{\sigma(t)}.$$
>>8. Como queremos $\sigma'(t)=X_{\sigma(t)}$ y que $\sigma(0)=p$, usando coordenadas queda el problema $$\begin{cases}y_1'(t)=a_1(\sigma(t))=a_1\bigl(\varphi^{-1}(y_1(t),\dots,y_n(t))\bigr)=b_1(y_1(t),\dots,y_n(t)),\\\qquad\vdots\\y_n'(t)=a_n(\sigma(t))=a_n\bigl(\varphi^{-1}(y_1(t),\dots,y_n(t))\bigr)=b_n(y_1(t),\dots,y_n(t)),\\\varphi(p)=(y_1(0),\dots,y_n(0)).\end{cases}$$ obs: Aca estamos resolviendo el problema en $\varphi(U)$. El campo en $\varphi(U)$ es $$\widetilde X_{(r_1,\ldots,r_n)}=\sum_{k=1}^n a_k(\varphi^{-1}(r_1,\ldots,r_n))\left.\frac{\partial}{\partial r_k}\right|_{(r_1,\ldots,r_n)}.$$
>>9. por [[GS - Teo15#^81ef7e|Fundamental theorem for autonomous ODEs]], tal problema tiene solucion en el instante $t_0=0$ osea existe un intervalo abierto alrededor de $0$, digamos $(-\epsilon,\epsilon)$, y una curva $$y:(-\epsilon,\epsilon)\to \widetilde{U}\subset\mathbb R^n$$ que resuelve el problema 
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
>>22. Como $(a(p),b(p))$ es union de intervalos abiertos, es abierto en $\mathbb R$. Ademas, el intervalo $I$ es uno de los que aparecen en esa union, luego $I\subset(a(p),b(p))$.
>>23. Afirmamos que $\gamma_p|_I=\alpha$. En efecto, si $s\in I$, entonces por la definición de $\gamma_p(s)$ podemos usar la curva integral $\alpha$ para calcular ese valor. Por lo tanto, $\gamma_p(s)=\alpha(s)$.
>>24. Como $\alpha$ es suave, se sigue que $\gamma_p|_I$ es suave.
>>25. Como esto vale para todo $t\in(a(p),b(p))$, la curva $\gamma_p$ es suave.
>>26. Además, como $\gamma_p|_I=\alpha$ y $\alpha$ es curva integral de $X$, para todo $s\in I$ tenemos $\alpha'(s)=X_{\alpha(s)}$.
>>27. Por lo tanto, para todo $s\in I$, $$\gamma_p'(s)=\alpha'(s)=X_{\alpha(s)}=X_{\gamma_p(s)}.$$
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

>[!Lemma]
>Sean $M$ una variedad suave, $X\in\mathfrak{X}(M)$ y
>$$\gamma_p:(a(p),b(p))\longrightarrow M$$
>la curva integral maximal de $X$ que comienza en $p$, es decir, $\gamma_p(0)=p$. Si
>$$q=\gamma_p(t_0),$$
>entonces la curva integral maximal que comienza en $q$ está dada por
>$$\gamma_q(t)=\gamma_p(t+t_0),$$
>y su intervalo maximal es
>$$(a(q),b(q))=(a(p)-t_0,b(p)-t_0).$$
>
>>[!Proof]- Demostración
>>38. Sea
>>$$I_p=(a(p),b(p))$$
>>y consideremos el intervalo trasladado
>>$$J=I_p-t_0=(a(p)-t_0,b(p)-t_0).$$
>>
>>39. Definimos
>>$$\beta:J\longrightarrow M,\qquad \beta(t)=\gamma_p(t+t_0).$$
>>
>>40. En primer lugar,
>>$$\beta(0)=\gamma_p(t_0)=q.$$
>>
>>41. Además, como $\gamma_p$ es una curva integral de $X$,
>>$$\beta'(t)=\frac{d}{dt}\gamma_p(t+t_0)=X_{\gamma_p(t+t_0)}=X_{\beta(t)}.$$
>>Por lo tanto, $\beta$ es una curva integral de $X$ que comienza en $q$.
>>
>>42. Veamos que $\beta$ es maximal. Supongamos que admite una extensión integral
>>$$\widetilde{\beta}:\widetilde{J}\longrightarrow M,\qquad J\subsetneq\widetilde{J}.$$
>>
>>43. Definimos entonces
>>$$\widetilde{\gamma}(s)=\widetilde{\beta}(s-t_0),\qquad s\in\widetilde{J}+t_0.$$
>>Esta es una curva integral de $X$.
>>
>>44. Para todo $s\in I_p$,
>>$$\widetilde{\gamma}(s)=\widetilde{\beta}(s-t_0)=\beta(s-t_0)=\gamma_p(s).$$
>>
>>45. Así, $\widetilde{\gamma}$ extiende a $\gamma_p$, pues
>>$$I_p=J+t_0\subsetneq\widetilde{J}+t_0,$$
>>lo cual contradice la maximalidad de $\gamma_p$.
>>
>>46. Por consiguiente, $\beta$ es la curva integral maximal que comienza en $q$. Por unicidad,
>>$$\gamma_q=\beta.$$
>>
>>47. En conclusión,
>>$$\gamma_q(t)=\gamma_p(t+t_0)$$
>>y
>>$$(a(q),b(q))=(a(p)-t_0,b(p)-t_0).$$

## Groundwork de generador infinitesimal

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
>>[!Proof]- Demostracion
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

>[!Lemma] Uniformidad global del tiempo
>Sea $X$ un campo suave sobre una variedad $M$ y sea $\Theta$ su flujo. Supongamos que existe un número positivo $\varepsilon>0$ tal que, para todo $p\in M$, el dominio de $\gamma_p$ contiene a $(-\varepsilon,\varepsilon)$.
>
>Entonces $X$ es un campo completo.
>
>>[!Proof]- Demostracion
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

>[!Theorem] Campo con soporte compacto
>Sea $X\in\mathfrak X(M)$ con soporte compacto. Entonces $X$ es completo.
>
>Recordemos que
>$$\operatorname{Sop}X=\operatorname{Cl}_M\{q\in M:X_q\neq0\}$$
>
>>[!Proof]- Demostracion
>>20. Sea $K=\operatorname{Sop}X$.
>>21. Notemos primero que si $p\notin K$, entonces existe un abierto $V_p$ de $M$ con $p\in V_p$ donde el campo vale cero.
>>22. Es decir, para todo $q\in V_p$,
>>$$X_q=0$$
>>23. Entonces, para todo $q\in V_p$, la curva constante $$\gamma_q:\mathbb R\to M,\qquad \gamma_q(t)=q$$es curva integral maximal de $X$.
>>24. Por lo tanto, los puntos fuera de $K$ no generan ningún problema: sus curvas integrales están definidas para todo tiempo mientras permanezcan fuera del soporte, y en particular tienen tiempo local uniforme.
>>25. Falta ver qué pasa en $K$.
>>26. Por [[GS - Teo16#^3b18e6|Uniformidad local del tiempo]], para todo $p\in K$ existe $\varepsilon_p>0$ y existe un abierto $V_p$ de $M$ con $p\in V_p$ tal que, para todo $q\in V_p$, la curva integral que comienza en $q$ está definida en $(-\varepsilon_p,\varepsilon_p)$. Osea $(-\epsilon_{p},\epsilon_{p})\subseteq (a(q),b(q))$ para todo $q\in V_{p}$  
>>27. Con los abiertos $V_p$ podemos cubrir a $K$.
>>28. Como $K$ es compacto, existen $p_1,\ldots,p_s\in K$ tales que
>>$$K\subseteq V_{p_1}\cup\cdots\cup V_{p_s}$$
>>29. Tomamos
>>$$\varepsilon=\min\{\varepsilon_{p_1},\ldots,\varepsilon_{p_s}\}$$
>>30. Entonces, para todo $q\in K$, la curva integral que comienza en $q$ está definida al menos en $(-\varepsilon,\varepsilon)$.
>>31. Por lo tanto, para todo $q\in M$, el dominio de $\gamma_q$ contiene a $(-\varepsilon,\varepsilon)$.
>>32. Por el lema de uniformidad global del tiempo, $X$ es completo.

## Extensión local de campos

>[!Theorem] Extensión local de campos
>Sea $f:M\to N$ una inmersión y sea $X\in\mathfrak X(M)$. Entonces, para todo $p\in M$, existen un abierto $U$ de $p$ en $M$, un abierto $V$ de $N$ en $f(p)$, con $f(U)\subseteq V$, y un campo suave $\widetilde X\in\mathfrak X(V)$ tal que
>$$\widetilde X_{f(q)}=(df)_qX_q,\qquad q\in U.$$
>
>Se dice que $\widetilde X$ es una extensión local de $df(X)$.
>
>>[!Proof]- Demostracion
>>1. Recordemos que, por la forma local de una inmersión, existen cartas cúbicas $(U,\varphi=(x_1,\ldots,x_m))$ centrada en $p$ y $(V,\psi=(y_1,\ldots,y_n))$ centrada en $f(p)$ tales que $$\psi\circ f\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0).$$
>>2. Escribimos el campo $X$ en la carta de $M$ como $$X|_U=\sum_{k=1}^m a_k\frac{\partial}{\partial x_k},\qquad a_k\in C^\infty(U).$$
>>3. Si $q\in U$, entonces (ya lo probamos usando forma local [[GS - Pr4#^b71da3]]) $$(df)_q\left(\left.\frac{\partial}{\partial x_k}\right|_q\right)=\left.\frac{\partial}{\partial y_k}\right|_{f(q)},\qquad 1\le k\le m.$$
>>4. Por lo tanto, $$(df)_qX_q=\sum_{k=1}^m a_k(q)\left.\frac{\partial}{\partial y_k}\right|_{f(q)}$$
>>5. $$A_k=\begin{cases}a_k\circ\varphi^{-1}\circ\pi\circ\psi,&1\le k\le m,\\0,&m<k\le n,\end{cases}$$
>>Esta esta bien definido por que $\psi$ y $\varphi$ son cubicas.
>>6. Y notamos $A_{k}$ cumple que $$(A_{k}\circ f)(p)=a_{k}\circ\varphi ^{-1}\circ\pi\circ\psi\circ f(\varphi ^{-1} \circ\varphi(p))=a_{k}\circ\varphi ^{-1}\circ\varphi(p)=a_{k}(p)$$  
>>7. Finalmente proponemos $$\widetilde X=\sum_{k=1}^n A_k\frac{\partial}{\partial y_k}.$$ el cual cumple $\widetilde{X}(f(q))=(df)_{q}X_{q}$ para todo $q\in U$ y $A_k$ esta definida en todo $V$, entonces $\widetilde X\in\mathfrak X(V)$ como queriamos.

>[!Theorem] Teorema de enderezamiento
>Sea $X\in\mathfrak X(M)$ y sea $p\in M$ tal que $X_p\neq0$. Entonces existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $p$ tal que
>$$X|_U=\frac{\partial}{\partial x_1}.$$
>
>Es decir, en una carta adecuada, el campo se ve como un campo constante.
>
>>[!Proof]- Demostracion
>>8. Por el lema anterior, tomamos una carta $(V,\psi=(y_1,\ldots,y_n))$ centrada en $p$ tal que $$\left.\frac{\partial}{\partial y_1}\right|_p=X_p.$$
>>9. Por otro lado por [[GS - Teo16#^3b18e6|Uniformidad local del tiempo]] existe $\widetilde{V}$ abierto de $M$ en $p$ y $\epsilon>0$ tal que el flujo $\Theta$ de $X$ esta definido en $(-\epsilon,\epsilon)\times \widetilde{V}$
>>10. Achicando si hace falta podes suponer que $\widetilde{V}=V$ y que $(V,\psi)$ es una carta cubica centrada en $p$ osea $$\psi(V)=C_{\epsilon}^{n} (0)=(-\epsilon,\epsilon)^{n}$$
>>11. Ahora nos vamos a enfocar en una cierta rebanada de $\psi(V)$ dada por $$\{ (r_{1},\ldots,r_{n})\in \psi(V):r_{1}=0 \}$$  que en este caso es igual a $(-\epsilon,\epsilon)^{n-1}$ por ser $\psi$ carta cubica 
>>12. Proponemos $$\sigma:(-\epsilon,\epsilon)\times C_{\epsilon}^{n-1}(0)\rightarrow M\qquad (r_{1},(0,r_{2},\ldots r_{n}))\mapsto \Theta_{r_{1}}(\psi ^{-1}(0,r_{2},\ldots,r_{n}))=\Theta_{r_{1}}\circ\psi ^{-1}(0,r_{2},\ldots,r_{n})$$
>>13. Ahora vamos a notar que $\sigma$ nos va a ayudar a armar una carta, para esto veamos que $(d\sigma)_{0}$ es invertible. Por que si sucediera entonces es isomorfismo luego por [[GS - Teo10#^b664ba|Teorema de la funcion inversa en variedades]] tendremos un abierto $U$ abierto del $0$ tal que $$\sigma|_{U}^{-1}:W\subseteq M\rightarrow U$$ sera difeo (osea carta)
>>14. Luego tenemos si definimos la curva $\alpha (t)=(t,0,\ldots,0)$  $$\begin{align}(d\sigma)_0\left(\frac{\partial}{\partial r_1}\bigg|_0\right)&=(\sigma\circ\alpha )'(0)\\&=\frac{d}{dt}\bigg|_0\sigma(t,0,\dots,0)\\&=\frac{d}{dt}\bigg|_0\theta_t(\psi^{-1}(0,\dots,0))\\&=\frac{d}{dt}\bigg|_0\theta_t(p)\\&=\frac{d}{dt}\bigg|_0\gamma_{p}(t)\\&=\gamma'_{p}(0)\\&=X_{p}\\&=\left.\frac{\partial}{\partial y_1}\right|_p\end{align}$$ en el primer paso usamos ^99bdaa 
>>15. Por otro lado para $k>1$ $$\begin{align}(d\sigma)_0\frac{\partial}{\partial r_k}\bigg|_0 &=\frac{d}{dt}\bigg|_0\sigma(0,\ldots,t,\ldots,0)\\ &=\frac{d}{dt}\bigg|_0\Theta_{0}\left(\psi^{-1}(0,\ldots,t,\ldots,0)\right)\\ &=\frac{d}{dt}\bigg|_0\psi^{-1}(0,\ldots,t,\ldots,0)\\ &=(d\psi^{-1})_0\frac{\partial}{\partial r_k}\bigg|_0\\ &=\left.\frac{\partial}{\partial y_k}\right|_p. \end{align}$$ el primer igual sale como en ^99bdaa cambiando la curva $\alpha(t)=te_{k}$. El ultimo igual vale porque $\psi$ es difeomorfismo de carta, entonces $(d\psi^{-1})_0$ es isomorfismo. 
>>16. Entonces $d\sigma$ es isomorfismo. Por tanto, por el teorema de la función inversa existe $U$ abierto de $M$ en $p$ y $W$ abierto de $\mathbb R^n$ en $(0,\dots,0)$ tal que $\sigma:W\to U$ es un difeomorfismo.
>>17. Ahora nuestra candidata es la carta suave $(U,\phi=\sigma^{-1}|_U=(x_1,\dots,x_n)).$
>>18. Veamos que $$X|_U=\frac{\partial}{\partial x_1}.$$
>>19. Tomamos $q=\sigma(r_1,\ldots,r_n)=\Theta_{r_1}\left(\psi^{-1}(0,r_2,\ldots,r_n)\right).$ Como $\phi=\sigma^{-1}$, osea $\phi(q)=(r_{1},\ldots,r_{n})$ por lo tanto $x_{i}(q)=r_{i}$. Entonces $$\begin{align}\frac{\partial}{\partial x_1}\bigg|_q&=(d\phi ^{-1})_{\phi(q)}\left(\frac{\partial}{\partial r_{1}}\bigg|_{\phi(q)}\right)\\&=(d\sigma)_{(r_1,\ldots,r_n)}\left(\frac{\partial}{\partial r_1}\bigg|_{(r_1,\ldots,r_n)}\right)\\&=\frac{d}{ds}\bigg|_{s=0}\sigma(r_1+s,r_2,\ldots,r_n)\\&=\frac{d}{ds}\bigg|_{s=0}\Theta_{r_1+s}\left(\psi^{-1}(0,r_2,\ldots,r_n)\right)\\&=\frac{d}{ds}\bigg|_{s=0}\Theta_s\left(\Theta_{r_1}\left(\psi^{-1}(0,r_2,\ldots,r_n)\right)\right)\\&=\frac{d}{ds}\bigg|_{s=0}\Theta_s(q)\\&=\frac{d}{ds}\bigg|_{s=0}\gamma_q(s)\\&=\gamma_q'(0)\\&=X_{\gamma_q(0)}\\&=X_q.\end{align}$$
>>20. Por lo tanto, para todo $q\in U$, se cumple $$\frac{\partial}{\partial x_1}\bigg|_q=X_q.$$
>>21. Luego $$X|_U=\frac{\partial}{\partial x_1}.$$

## Corchete de Lie

>[!Proposition] Buena definicion corchete de Lie
>El corchete de Lie está bien definido, es decir, $[X,Y]_p\in T_pM$ y ademas $[X,Y]$ es un campo suave.
>
>>[!Proof]- Demostracion
>>1. Necesitamos ver que $[X,Y]_p$ es vector tangente.
>>2. **Linealidad** Sea $f,g\in C^\infty(M)$. Entonces $$[X,Y]_p(f+g)=X_p(Y(f+g))-Y_p(X(f+g))=[X,Y]_pf+[X,Y]_pg,$$ por linealidad de $X_p$ e $Y_p$. Para ver la igualdad intermedia, por ejemplo, $$(Y(f+g))(q)=Y_q(f+g)=Y_qf+Y_qg=(Yf)(q)+(Yg)(q),$$ y por lo tanto $Y(f+g)=Yf+Yg$ como funciones. Análogo con $X(f+g)$. 
>>3. **Leibniz** Primero por Leibniz $$Y(fg)=fYg+gYf.$$ Esto se prueba facilmente de la misma manera que en 2.
>>4. Entonces $$X(Y(fg))=X(fYg+gYf)=X(fYg)+X(gYf).$$
>>5. Usando Leibniz de $X$, $$X(fYg)=X(f)Yg+fX(Yg),$$y $$X(gYf)=X(g)Yf+gX(Yf).$$
>>6. Luego $$X(Y(fg))=X(f)Yg+fX(Yg)+X(g)Yf+gX(Yf).$$  
>>7. Del mismo modo, $$X(fg)=fXg+gXf,$$y por lo tanto $$Y(X(fg))=Y(fXg+gXf)=Y(f)Xg+fY(Xg)+Y(g)Xf+gY(Xf).$$
>>8. Restando, $$[X,Y](fg)=X(Y(fg))-Y(X(fg)).$$
>>9. Los términos cruzados se cancelan porque son productos de funciones reales: $$X(f)Yg-Y(g)Xf\equiv0,\qquad X(g)Yf-Y(f)Xg\equiv0$$cuando se reordenan los productos entre funciones correspondientes.
>>10. Queda $$[X,Y](fg)=f[X,Y](g)+g[X,Y](f).$$ entonces $$[X,Y]_{p}(fg)=f(g)[X,Y]_{p}(g)+g(p)[X,Y]_{p}(f)$$ 
>>11. Finalmente vimos $[X,Y]_p$ es una vector tangente en $p$, es decir $[X,Y]_p\in T_pM$.
>>12. **Suavidad** Para esto usemos [[GS - Teo14#^3accf8|Caracterizaciones de suavidad]] 4. 
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
>>[!Proof]- Demostracion
>>- **(i)** 
>>1. Sale directo: $$-[Y,X]f=-Y(Xf)+X(Yf)=[X,Y]f.$$
>>- **(ii)**
>>1. Tomemos $f\in C^\infty(U)$. $$\begin{aligned}\left.\frac{\partial}{\partial x_i}\right|_p\left(\frac{\partial f}{\partial x_j}\right)&=\frac{\partial}{\partial r_i}\left[\left(\frac{\partial f}{\partial x_j}\right)\circ\varphi^{-1}\right](\varphi(p))\\&=\frac{\partial}{\partial r_i}\left[\left(\left(\frac{\partial}{\partial r_j}(f\circ\varphi^{-1})\right)\circ\varphi\right)\circ\varphi^{-1}\right](\varphi(p))\\&=\frac{\partial}{\partial r_i}\left[\frac{\partial}{\partial r_j}(f\circ\varphi^{-1})\circ(\varphi\circ\varphi^{-1})\right](\varphi(p))\\&=\frac{\partial}{\partial r_i}\left[\frac{\partial}{\partial r_j}(f\circ\varphi^{-1})\right](\varphi(p))\\&=\frac{\partial^2(f\circ\varphi^{-1})}{\partial r_i\partial r_j}(\varphi(p)).\end{aligned}$$
>>2. Y se termina con el teorema de igualdad de las derivadas cruzadas.
>>- **(iii)** 
>>1. Calculamos: $$[X,gY]h=X(gYh)-gY(Xh).$$
>>2. Usando Leibniz: $$X(gYh)=X(g)Yh+gX(Yh).$$
>>3. Entonces $$[X,gY]h=X(g)Yh+gX(Yh)-gY(Xh)=X(g)Yh+g[X,Y]h.$$
>>4. Por lo tanto, $$[X,gY]=g[X,Y]+X(g)Y.$$
>>- **(iv)** 
>>1. Usando **(iii)** y antisimetría: $$[fX,gY]=f[X,gY]-gY(f)X.$$
>>2. Luego $$[fX,gY]=fg[X,Y]+fX(g)Y-gY(f)X.$$
>>- **(v)** 
>>1. La prueba de Jacobi es un cálculo. Para $f\in C^\infty(M)$: $$\begin{aligned} \big[X,[Y,Z]]f+[Y,[Z,X]]f+[Z,[X,Y]]f&=X[Y,Z]f-[Y,Z]Xf+Y[Z,X]f-[Z,X]Yf+Z[X,Y]f-[X,Y]Zf\\&=XYZf-XZYf-YZXf+ZYXf+YZXf-YXZf\\&\quad -ZXYf+XZYf+ZXYf-ZYXf-XYZf+YXZf\\&=0.\end{aligned}$$

>[!Proposition] Naturalidad del corchete
>Sean $F:M\to N$ suave, $X,Y\in\mathfrak X(M)$ y $\widetilde X,\widetilde Y\in\mathfrak X(N)$ tales que $X,Y$ estan $F$-relacionados con $\widetilde{X},\widetilde Y$ respectivamente entonces $[X,Y]$ está $F$-relacionado con $[\widetilde X,\widetilde Y]$.
>
>>[!Proof]- Demostracion
>>2. Primero notamos $$(dF)_{p}[X,Y]_{p}f=[X,Y]_{p}(f\circ F)=X_{p}(Y(f\circ F))-Y_{p}(X(f\circ F))$$ 
>>3. Tenemos que $(dF)_{p}(X_{p})=\widetilde{X}_{F(p)}$ entonces $$\widetilde X_{F(p)}(f)=(\widetilde Xf)(F(p)).$$ Por lo tanto $$X_p(f\circ F)=((\widetilde Xf)\circ F)(p).$$ Como esto vale para todo $p\in M$, se obtiene la igualdad de funciones $$X(f\circ F)=(\widetilde Xf)\circ F.$$ Analogo con $Y(f\circ F)$. 
>>4. Por lo tanto $$\begin{align}(dF)_{p}[X,Y]_{p}h=[X,Y]_{p}(h\circ F)&=X_{p}((\widetilde Y f)\circ F)-Y_{p}((\widetilde X f)\circ F)\\&=(dF)_{p}(X_{p})(\widetilde{Y}f)-(dF)_{p}(Y_{p})(\widetilde{X}f)\\&=\widetilde{X}_{F(p)}(\widetilde{Y}f)-\widetilde{Y}_{F(p)}(\widetilde{X}f)\\&=[\widetilde{X},\widetilde{Y}]_{F(p)}f\end{align}$$ mostrando que $[X,Y]$ y $[\widetilde{X},\widetilde{Y}]$ estan $F$-relacionados

>[!Theorem] Derivada de Lie NO FINAL
>Para todo $X,Y\in\mathfrak X(M)$ y para todo $p\in M$, se cumple $$[X,Y]_p=(\mathcal L_XY)_p=\lim_{t\to0}\frac{(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}-Y_p}{t},$$ donde $\theta$ es el flujo de $X$.
>
>>[!Proof]- Demostracion
>>5. Se calculan ambos lados y se prueba que son iguales.
>>6. Supongamos primero que $X_p\neq0$.
>>7. Por el teorema de rectificación de campos, existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $p$ tal que $$X=\frac{\partial}{\partial x_1}.$$
>>8. Escribimos $$Y=\sum_{j=1}^n a_j\frac{\partial}{\partial x_j},$$ con $a_1,\ldots,a_n$ funciones suaves sobre $U$.
>>9. Entonces $$[X,Y]=\left[\frac{\partial}{\partial x_1},\sum_{j=1}^n a_j\frac{\partial}{\partial x_j}\right]=\sum_{j=1}^n a_j\left[\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_j}\right]+\sum_{j=1}^n \frac{\partial a_j}{\partial x_1}\frac{\partial}{\partial x_j}.$$
>>10. Como los campos coordenados conmutan, $$\left[\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_j}\right]=0.$$
>>11. Por lo tanto, $$[X,Y]_p=\sum_{j=1}^n \frac{\partial a_j}{\partial x_1}(p)\frac{\partial}{\partial x_j}\bigg|_p.$$
>>12. Por otro lado, consideremos la curva suave $$\alpha(t)=(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}\in T_pM.$$
>>13. Queremos calcular $$\alpha'(0)\in T_{\alpha(0)}(T_pM)\simeq T_pM.$$
>>14. Entonces $$\alpha'(0)=\sum_{j=1}^n c_j\frac{\partial}{\partial x_j}\bigg|_p,$$ donde $$c_j=\alpha'(0)(x_j).$$
>>15. Por el lema previo, $$\alpha'(0)(x_j)=\frac{d}{dt}\bigg|_{t=0}\alpha(t)(x_j).$$
>>16. Luego $$\alpha'(0)(x_j)=\frac{d}{dt}\bigg|_{t=0}\left((d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}\right)(x_j).$$
>>17. Por definición de diferencial, $$\left((d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}\right)(x_j)=Y_{\theta_t(p)}(x_j\circ\theta_{-t}).$$
>>18. Como $$Y_{\theta_t(p)}=\sum_{i=1}^n a_i(\theta_t(p))\frac{\partial}{\partial x_i}\bigg|_{\theta_t(p)},$$ tenemos $$Y_{\theta_t(p)}(x_j\circ\theta_{-t})=\sum_{i=1}^n a_i(\theta_t(p))\frac{\partial}{\partial x_i}\bigg|_{\theta_t(p)}(x_j\circ\theta_{-t}).$$
>>19. En estas coordenadas, como $X=\frac{\partial}{\partial x_1}$, el flujo satisface $$x_j\circ\theta_{-t}=x_j-t\delta_{1j}.$$
>>20. Por lo tanto, $$\frac{\partial}{\partial x_i}\bigg|_{\theta_t(p)}(x_j\circ\theta_{-t})=\delta_{ij}.$$
>>21. Así, $$Y_{\theta_t(p)}(x_j\circ\theta_{-t})=a_j(\theta_t(p)).$$
>>22. Entonces $$\alpha'(0)(x_j)=\frac{d}{dt}\bigg|_{t=0}a_j(\theta_t(p))=X_pa_j=\frac{\partial a_j}{\partial x_1}(p).$$
>>23. El igual del medio se justifica así: si $v\in T_pM$ y $\gamma$ es una curva con $\gamma(0)=p$ y $\gamma'(0)=v$, entonces $$v(f)=\frac{d}{dt}\bigg|_{t=0}f(\gamma(t)).$$
>>24. Por lo tanto, $$\alpha'(0)=\sum_{j=1}^n \frac{\partial a_j}{\partial x_1}(p)\frac{\partial}{\partial x_j}\bigg|_p=[X,Y]_p.$$
>>25. Ahora supongamos que $X_p=0$.
>>26. En este caso, la curva integral de $X$ que parte de $p$ es constante, luego $$\theta_t(p)=p.$$
>>27. Entonces la curva queda $$\alpha(t)=(d\theta_{-t})_pY_p.$$
>>28. Para toda $f\in C^\infty(M)$, $$\alpha'(0)(f)=\frac{d}{dt}\bigg|_{t=0}\alpha(t)(f)=\frac{d}{dt}\bigg|_{t=0}Y_p(f\circ\theta_{-t}).$$
>>29. Como $Y_p$ es una derivación fija, $$\alpha'(0)(f)=Y_p\left(\frac{d}{dt}\bigg|_{t=0}f\circ\theta_{-t}\right).$$
>>30. Pero $$\frac{d}{dt}\bigg|_{t=0}f(\theta_{-t}(q))=-X_qf.$$
>>31. Es decir, $$\frac{d}{dt}\bigg|_{t=0}f\circ\theta_{-t}=-Xf.$$
>>32. Por lo tanto, $$\alpha'(0)(f)=-Y_p(Xf).$$
>>33. Como $X_p=0$, también $$[X,Y]_pf=X_p(Yf)-Y_p(Xf)=-Y_p(Xf).$$
>>34. Así, $$\alpha'(0)(f)=[X,Y]_pf.$$
>>35. Como esto vale para toda $f\in C^\infty(M)$, concluimos que $$\alpha'(0)=[X,Y]_p.$$
>>36. Por lo tanto, $$(\mathcal L_XY)_p=[X,Y]_p.$$

>[!Proposition] Criterio de conmutación de flujos (Hulet 9.15)
>Sean $X,Y\in\mathfrak X(M)$ tales que $[X,Y]=0$ y sean $\theta,\phi$ los flujos respectivos. Dado $p\in M$, sean $U$ y $\delta$ los del [[GS - Teo19#^39cc9a|Uniformidad conjunta para dos flujos]]. Entonces:
>- **(i)** $(d\theta_s)_qY_q=Y_{\theta_s(q)}$ con $q\in U$ para $s\in(-\delta,\delta)$.
>- **(ii)** $\theta_t\circ\phi_s=\phi_s\circ\theta_t$ en $U$ para $t,s\in(-\delta,\delta)$.
>
>>[!Proof]- Demostracion
>>- (i)
>>1. Recordemos la fórmula $$[X,Y](p)=\frac{d}{dt}\Big|_{t=0}(d\theta_{-t})_{\theta_t(p)}\big(Y_{\theta_t(p)}\big),\qquad p\in M.$$
>>2. Notar que probar $(i)$ equivale a probar que $$Y_p=(d\theta_{-s})_{\theta_s(p)}\big(Y_{\theta_s(p)}\big),\qquad \forall s\in (-\delta ,\delta),\forall p\in U$$
>>3. En otras palabras, para probar $(i)$ debemos ver que, para cada $p$, la curva $$z(s)=(d\theta_{-s})_{\theta_s(p)}\big(Y_{\theta_s(p)}\big)$$es constantemente igual a $Y_p$.
>>4. Calculamos $z'(s)$. Por definición, $$z'(s)=\frac{d}{dt}\Big|_{t=0}z(t+s).$$
>>5. Ahora, $$z(t+s)=(d\theta_{-(t+s)})_{\theta_{t+s}(p)}\big(Y_{\theta_{t+s}(p)}\big).$$
>>6. Como $$\theta_{t+s}(p)=\theta_t(\theta_s(p))$$y $$\theta_{-(t+s)}=\theta_{-s}\circ\theta_{-t},$$por la regla de la cadena obtenemos $$z(t+s)=(d\theta_{-s})_{\theta_s(p)}\left((d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)\right).$$
>>7. Por lo tanto, $$z'(s)=\frac{d}{dt}\Big|_{t=0}(d\theta_{-s})_{\theta_s(p)}\left((d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)\right).$$
>>8. Como $(d\theta_{-s})_{\theta_s(p)}$ es lineal y no depende de $t$, $$z'(s)=(d\theta_{-s})_{\theta_s(p)}\left(\frac{d}{dt}\Big|_{t=0}(d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)\right).$$
>>9. Por la fórmula del corchete aplicada al punto $\theta_s(p)$, $$\frac{d}{dt}\Big|_{t=0}(d\theta_{-t})_{\theta_t(\theta_s(p))}\big(Y_{\theta_t(\theta_s(p))}\big)=[X,Y]_{\theta_s(p)}.$$
>>10. Luego $$z'(s)=(d\theta_{-s})_{\theta_s(p)}\big([X,Y]_{\theta_s(p)}\big).$$
>>11. Como $[X,Y]=0$, concluimos que $$z'(s)=0,\qquad \forall s\in (-\delta ,\delta )$$ osea $z(s)$ es constante
>>12. Además, $$z(0)=(d\theta_0)_p(Y_p)=Y_p.$$
>>13. Por lo tanto, $$z(s)=Y_p,\qquad \forall s,$$es decir, $$(d\theta_{-t})_{\theta_t(p)}\big(Y_{\theta_t(p)}\big)=Y_p.$$
>>14. Aplicando $(d\theta_t)_p$ a ambos lados, obtenemos
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

>[!Proposition] (Hulet 9.16)
>Sean $X,Y\in\mathfrak{X}(M)$, cuyos flujos conmutan. Entonces $$[X,Y]=0.$$
>
>>[!Proof]- Demostracion
>>1. Sean $\theta$ y $\phi$ los flujos de $X$ e $Y$, respectivamente. Fijemos $p\in M$. Por el lema de uniformidad conjunta de los flujos, existen un abierto $U$ que contiene a $p$ y $\delta>0$ tales que, para $|s|,|t|<\delta$, las composiciones $\theta_t\circ\phi_s$ y $\phi_s\circ\theta_t$ están definidas en $U$.
>>2. Como los flujos conmutan, para $|s|,|t|<\delta$ se cumple $$\theta_t(\phi_s(p))=\phi_s(\theta_t(p)).$$
>>3. Derivando respecto de $s$ en $s=0$, obtenemos $$(d\theta_t)_p(Y_p)=(d\theta_t)_{\phi_0(p)}\left(\frac{d}{ds}\bigg|_{s=0}\phi_s(p)\right)=\frac{d}{ds}\bigg|_{s=0}\theta_t(\phi_s(p))=\frac{d}{ds}\bigg|_{s=0}\phi_s(\theta_t(p))=Y_{\theta_t(p)}.$$
>>4. Aplicamos $(d\theta_{-t})_{\theta_t(p)}$ a ambos lados. Entonces $$\begin{aligned}(d\theta_{-t})_{\theta_t(p)}\left((d\theta_t)_p(Y_p)\right)&=(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right),\\d(\theta_{-t}\circ\theta_t)_p(Y_p)&=(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right),\\Y_p&=(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right).\end{aligned}$$
>>5. Por lo tanto, la curva $$t\mapsto(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right)$$ es constante para $|t|<\delta$.
>>6. Usando la fórmula del corchete en términos del flujo de $X$, $$[X,Y]_p=\frac{d}{dt}\bigg|_{t=0}(d\theta_{-t})_{\theta_t(p)}\left(Y_{\theta_t(p)}\right)=0.$$
>>7. Como $p\in M$ era arbitrario, concluimos que $$[X,Y]=0.$$

>[!Proposition] Rectificación simultánea (Hulet 9.18)
>Sean $X_1,\ldots,X_k\in\mathfrak X(M)$ linealmente independientes en un abierto de $M$ en $p$ tales que $$[X_{i},X_{j}]=0\quad 1\leq i,j\leq k$$
>Entonces existe un sistema coordenado $(U,\varphi=(x_1,\ldots,x_n))$ centrado en $p$ tal que
>$$X_1|_U=\frac{\partial}{\partial x_1},\ldots,\qquad X_k|_U=\frac{\partial}{\partial x_k}$$
>
>>[!Proof]- Demostracion
>>8. Por [[GS - Teo19#^39cc9a|Uniformidad conjunta para dos flujos]]. Existe $\varepsilon>0$ y un abierto $V$ de $p$ tal que la composición
>>$$\theta^{1}_{t_1}\circ\cdots\circ\theta^k_{t_k}$$
>>está bien definida sobre $V$ para todos $t_1,\ldots,t_k\in(-\varepsilon,\varepsilon)$.
>>9. Como los campos son linealmente independientes. Achicando $V$ si hace falta, tomamos una carta cúbica centrada en $p$, $$(V,\psi=(x_1,\ldots,x_n)),$$tal que $$\left.\frac{\partial}{\partial x_i}\right|_p=X_i|_p,\qquad i=1,\ldots,k.$$ por [[GS - Teo18#^047506|Lema]]
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
>>21. Primero notemos que, como $$[X_i,X_j]=0$$los flujos conmutan localmente por [[GS - Teo19#^26db5d|Criterio de conmutación de flujos (Hulet 9.15)]]
>>22. Fijemos $1\leq i\leq k$. Entonces $$\begin{aligned}(d\sigma)_{(r^1,\ldots,r^n)}\left(\left.\frac{\partial}{\partial r^i}\right|_{(r^1,\ldots,r^n)}\right)&=\left.\frac{d}{ds}\right|_{s=0}\sigma(r^1,\ldots,r^i+s,\ldots,r^n)\\&=\left.\frac{d}{ds}\right|_{s=0}\left(\theta^{1} _{r^1}\circ\cdots\circ\theta^{i} _{r^i+s}\circ\cdots\circ\theta_{k,r^k}\right)\left(\psi^{-1}(0,\ldots,0,r^{k+1},\ldots,r^n)\right)\\&=\left.\frac{d}{ds}\right|_{s=0}\left(\theta^{1} _{r^1}\circ\cdots\circ\theta^{i} _{r^i}\circ\theta^{i} _{s}\circ\cdots\circ\theta^{k} _{r^k}\right)\left(\psi^{-1}(0,\ldots,0,r^{k+1},\ldots,r^n)\right)\\&=\left.\frac{d}{ds}\right|_{s=0}\theta^{i} _{s}\left(\sigma(r^1,\ldots,r^n)\right)\\&=(X_i)_{\sigma(r^1,\ldots,r^n)}.\end{aligned}$$ donde usamos que los flujos conmutan

## Conjunto de formas diferenciales

>[!Theorem] Suavidad de $k$-formas
>Sea $\omega:M\to\Lambda^k(T^*M)$ una $k$-forma. Las siguientes afirmaciones son equivalentes:
>
>- (a) $\omega$ es suave.
>- (b) Para toda carta $(U,\varphi=(x_1,\ldots,x_n))$, las coordenadas de $\omega$ con respecto al marco coordenado $\{dx_{i_1}\wedge\cdots\wedge dx_{i_k}\}_{1\le i_1<\cdots<i_k\le n}$ son funciones suaves.
>- (c) Para cualquier $k$ campos suaves $X_1,\ldots,X_k\in\mathfrak X(M)$, la funcion $\omega(X_1,\ldots,X_k)\in C^\infty(M)$.
>
>>[!Proof]-
>>- $(a\Rightarrow b)$.
>>	1. Supongamos que $\omega:M\to\Lambda^k(T^*M)$ es suave.
>>	2. Sea $(U,\varphi=(x^1,\ldots,x^n))$ una carta de $M$.
>>	3. Esta carta induce una carta $(\widetilde U,\widetilde\varphi)$ de $\Lambda^k(T^*M)$, donde $\widetilde U=\pi^{-1}(U)$. Usamos la notación de multiíndices $I=(i_1,\ldots,i_k)$, con $i_1<\cdots<i_k$, y escribimos $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$. La carta inducida está dada por $$\widetilde\varphi\left(\sum_I C_I\,dx^I|_p\right)=\left(x^1(p),\ldots,x^n(p),(C_I)_I\right).$$
>>	4. Como $\omega$ es suave, su restricción $\omega|_U:U\to\widetilde U$ es suave. Por lo tanto, como $\widetilde\varphi$ es suave, la composición $$\widetilde\varphi\circ\omega|_U:U\to\mathbb R^{n+\binom nk}$$es suave.
>>	5. Escribimos, para cada $p\in U$, $$\omega_p=\sum_I C_I(p)\,dx^I|_p.$$
>>	6. Entonces $$(\widetilde\varphi\circ\omega|_U)(p)=\left(x^1(p),\ldots,x^n(p),(C_I(p))_I\right).$$
>>	7. Como $\widetilde\varphi\circ\omega|_U$ es suave, todas sus funciones coordenadas son suaves. En particular, para cada multiíndice $I=(i_1,\ldots,i_k)$ con $1\le i_1<\cdots<i_k\le n$, la función $C_I:U\to\mathbb R$ es suave.
>>	8. Como la carta $(U,\varphi)$ era arbitraria, las coordenadas $C_I$ de $\omega$ respecto de todo marco coordenado $\{dx^I\}_I$ son funciones suaves.
>>- $(b\Rightarrow a)$.
>>	1. Supongamos que, para toda carta $(U,\varphi=(x^1,\ldots,x^n))$, las coordenadas $C_I:U\to\mathbb R$ de $\omega$ son funciones suaves.
>>	2. Fijemos una de estas cartas y consideremos la carta inducida $(\widetilde U,\widetilde\varphi)$ de $\Lambda^k(T^*M)$, con $\widetilde U=\pi^{-1}(U)$.
>>	3. Para cada $p\in U$, escribimos $$\omega_p=\sum_I C_I(p)\,dx^I|_p.$$
>>	4. Por la definición de la carta inducida, $$(\widetilde\varphi\circ\omega|_U)(p)=\left(x^1(p),\ldots,x^n(p),(C_I(p))_I\right).$$
>>	5. Las funciones $x^1,\ldots,x^n$ son suaves y, por hipótesis, todas las funciones $C_I$ son suaves. Por lo tanto, $\widetilde\varphi\circ\omega|_U$ es suave.
>>	6. Como $\widetilde\varphi$ es una carta, concluimos que $\omega|_U:U\to\widetilde U$ es suave.
>>	7. Como esto vale para toda carta $(U,\varphi)$ de $M$, concluimos que $\omega:M\to\Lambda^k(T^*M)$ es suave.
>>	- $(b\Rightarrow c)$ 
>>	1. Tomamos un $p\in M$ ahora tenemos $(U,\phi=x_{1},\ldots,x_{n})$ carta entonces por (b) $$\omega|_U=\sum_{i_1<\cdots<i_k}C_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad C_{i_1\cdots i_k}\in C^\infty(U)$$
>>	2. Ademas $$X_{i}=\sum^{n}_{j=1}a_{ij}\frac{\partial}{\partial x_{j}}$$ 
>>	3. Luego $$\omega|_{U}(X_{1},\ldots X_{k})=\sum_{i_1<\cdots<i_k}C_{i_1\cdots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\left(\sum^{n}_{j=1}a_{1j}\frac{\partial}{\partial x_{j}},\ldots,\sum^{n}_{j=1}a_{kj}\frac{\partial}{\partial x_{j}}\right)$$
>>	4. Ahora notamos que $$\begin{align} dx_{i_1}\wedge\cdots\wedge dx_{i_k}\left(\sum^{n}_{j=1}a_{1j}\frac{\partial}{\partial x_{j}},\ldots,\sum^{n}_{j=1}a_{kj}\frac{\partial}{\partial x_{j}}\right)&=\det\left( dx_{i_{r}}\left( \sum^{n}_{j=1}a_{sj}\frac{\partial}{\partial x_{j}} \right) \right)_{r,s=1}^{k} \\ & =\det\left( \sum^{n}_{j=1} a_{sj}dx_{i_{r}}\left(\frac{\partial}{\partial x_{j}}\right) \right)_{r,s=1}^{k}\\&=\det(a_{s i_{r}})_{r,s=1}^{k} \end{align}$$
>>	5. Pero entonces $$\omega|_{U}(X_{1},\ldots,X_{k})(p)=(\omega|_{U})_{p}(X_{1},\ldots,X_{k})=\sum_{i_{1}<\ldots<i_{k}} C_{i_{1}\ldots i_{k}}(p)\det(a_{s i_{r}}(p))$$ 
>>	6. Pero $C_{i_{1}\ldots i_{k}}$ es suave como funcion de $p$ por hipotesis, lo mismo para $\det(a_{s i_{r}})_{r,s=1}^{k}$ como funcion de $p$ por que $X_{i}$ son campos suaves. Y $\det$ es un polinomio de sus entradas.
>>	7. Entonces $\omega|_{U}(X_{1},\ldots,X_{k})(p)$ es suave y obviamente como esto lo podemos hacer para cualquier $p$ tenemosq ue $$\omega(X_{1},\ldots,X_{k})(p)$$ es suave
>>- $(c\Rightarrow b)$ 
>>	1. Tomamos una carta $(U,x_{1},\ldots,x_{n})$ como $B_k=\{dx_{i_1}|_p\wedge\cdots\wedge dx_{i_k}|_p:1\le i_1<\cdots<i_k\le n\}$ es base de $\Lambda^{k}(T_{p}^{*}M)$ tenemos $$\omega|_{U}=\sum_{i_{1}<\ldots<i_{k}} C_{i_{1}\ldots i_{k}}\ .dx_{i_{1}}\wedge\ldots\wedge dx_{i_{k}}$$ con $C_{i_{1}\ldots i_{k}}:U \rightarrow\mathbb{R}$. Bastaria mostrar que son suaves
>>	2. Ahora tenemos que $$\begin{align}\omega|_{U}\left(\frac{\partial}{\partial x_{j_{1}}},\ldots, \frac{\partial}{\partial x_{j_{k}}}\right)(p)& =\omega_{p}\left(\frac{\partial}{\partial x_{j_{1}}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{j_{k}}}\bigg|_{p}\right)\\&=\sum^{\infty}_{i_{1}<\ldots<i_{k}}C_{i_{1}\ldots i_{k}}(p) \ .dx_{i_{1}}\wedge\ldots\wedge dx_{i_{k}}\left(\frac{\partial}{\partial x_{j_{1}}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{j_{k}}}\bigg|_{p}\right)\\&=C_{I}(p)\end{align}$$ con $I=J$ osea el unico caso donde el determinante no es $0$ que es cuando coinciden los multi indices, $j_{1}=i_{1}\ldots j_{k}=i_{k}$    
>>	3. Ahora lo unico que tenemos que corregir es que $\frac{\partial}{\partial x_{i}}$ son campos suaves sobre $U$  y para usar la hipotesis las necesito suaves sobre $M$ 
>>	4. Tomamos $q\in U$ y ahora tenemos $V_{q}\subseteq U$ abierto de $q$ y $f\in C^{\infty}(M)$ tal que $f|_{\overline{V_{q}}}\equiv 1$ y $\operatorname{supp}f\subseteq U$ y defino $$X_{i}(p)=\begin{cases} f(p)\frac{\partial}{\partial x_{i}}\bigg|_{p} & p\in U \\0 & x\not\in U \end{cases}$$ que sabemos es un campo suave sobre todo $M$ y cerca de $p$ (osea en algun abierto dentro de $\overline{V_{q}}$, por ejemplo $V_{q}$ ) vale exactamente $\frac{\partial}{\partial x_{i}}\bigg|_{q}$ 
>>	5. Luego haciendo la misma cuenta que en 2. pero con $X_{i}$ tenemos que $$\sum_{i_{1}<\ldots<i_{k}} C_{i_{1}\ldots i_{k}}(q)$$ es suave para todo $q\in V_{p}$ 
>>	6. Y como esto lo podemos hacer para cualquier $q\in U$ es suave en todo $U$ como queriamos

>[!Proposition] Ejercicio del practico
>Probar que si $\omega\in\Omega^k(M)$ y $\eta\in\Omega^\ell(M)$, entonces $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.
>
>>[!Proof]- Demostracion
>>1. En coordenadas, escribimos $$\omega=\sum_I a_I\,dx^I,\qquad \eta=\sum_J b_J\,dx^J,$$ con $a_I,b_J$ funciones suaves.
>>2. Entonces $$\omega\wedge\eta=\sum_{I,J}a_Ib_J\,dx^I\wedge dx^J.$$
>>3. Los términos que tienen diferenciales repetidos dan $0$, y los demás se reordenan posiblemente cambiando el signo. Pero los nuevos coeficientes siguen siendo productos $\pm a_Ib_J$ de funciones suaves.
>>4. Por lo tanto, en cada carta $\omega\wedge\eta$ tiene coordenadas suaves. Luego $\omega\wedge\eta\in\Omega^{k+\ell}(M)$.

>[!Lemma] La diferencial exterior es local, lema previo
>Sea $d:\Omega^*(M)\to\Omega^*(M)$ satisfaciendo (i)-(iv). Sean $\omega_1,\omega_2\in\Omega^*(M)$ tales que coinciden en un abierto $U$ de $M$. Entonces
>$$(d\omega_1)|_U=(d\omega_2)|_U.$$
>
>>[!Proof]- Demostracion
>>1. Como $d$ es transformacion lineal, podemos mirar $\omega=\omega_1-\omega_2$ y asi es suficiente con ver que si $\omega|_U=0$ (Osea $\omega_{1}$ y $\omega_{2}$ coinciden en $U$ abierto), entonces $(d\omega)|_U=0$. Con lo cual se cumpliria la igualdad pedida
>>2. Aca hacemos un truco clasico de tensores y es volver todo cero usando una funcion de levantamiento.
>>3. Sabemos que las funciones de levantamiento preservan en un abierto contenido en otro y matan por "afuera", pero aca $\omega$ ya es cero en $U$. La idea es "volverlo cero" en todo $M$.
>>4. Sea $p\in U$ arbitrario. Sea $V$ abierto de $M$ con $p\in V$ y $\overline V\subset U$. Sea $f\in C^\infty(M)$ funcion de levantamiento tal que $f|_{\overline V}\equiv1$ y $\operatorname{supp}f\subset U$.
>>5. Como $f$ es suave, entonces $f\omega\in\Omega^*(M)$, ademas $$(f\omega)_q=f(q)\omega_q=\begin{cases}f(q)0,&q\in U,\\0\omega_q,&q\notin U,\end{cases}$$porque $\operatorname{supp}f\subset U$. Asi $f\omega=0$ en todo $M$.
>>6. Como $d$ es lineal, $d(f\omega)=d(0)=0$. Pero por otro lado $$d(f\omega)=d(f\wedge\omega)=(df)\wedge\omega+(-1)^{0.k} f\,d\omega.$$
>>7. Luego $$0=(df)\wedge\omega+f\,d\omega.$$
>>8. Evaluando en $p\in U$, tenemos $$0=((df)\wedge\omega)_p+f(p)(d\omega)_p=(df)_p\wedge\omega_p+(d\omega)_p=(d\omega)_p,$$porque $\omega_p=0$ y $f(p)=1$. Como $p$ era arbitrario, $(d\omega)|_U=0$.

>[!Theorem] Derivada exterior
>Sea $M$ variedad suave. Entonces existe una unica transformacion lineal
>$$d:\Omega^*(M)\to\Omega^*(M)$$
>llamada derivada exterior, que satisface:
>
>1. $d:\Omega^k(M)\to\Omega^{k+1}(M)$.
>2. $d(f)$ es $df$, diferencial de $f$, para toda $f\in\Omega^0(M)=C^\infty(M)$.
>3. Si $\omega\in\Omega^k(M)$ y $\theta\in\Omega(M)$, entonces
>$$d(\omega\wedge\theta)=(d\omega)\wedge\theta+(-1)^k\omega\wedge d\theta.$$
>4. $d^2=0$.
>
>>[!Proof]- Demostracion
>>- **Unicidad**
>>1. La idea de la prueba es construir $d$ de forma local, usando las condiciones que debemos satisfacer: (ii)-(iv). Hacemos ingenieria inversa para saber como deberia ser $d$, localmente. Primero, notemos:
>>2. Asumiendo existencia veamos primero la unicidad, que nos va dar pistas de como definir $d$. 
>>3. Como $d$ se va definir localmente , fijemos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ y tomemos $\omega\in\Omega^k(M)$ arbitrario y llegemos a una formula para $(d\omega)|_U$.
>>4. Tenemos $$\omega|_U=\sum_{1\le i_1<\cdots<i_k\le n}C_{i_1\ldots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}.$$
>>5. Pero $d$ actua sobre cosas definidas sobre todo $M$, entonces no podemos aplicar directamente $d$ a la expresion anterior. Para hacerlo bien, debemos extender dicha expresion a todo $M$, usando una funcion de levantamiento.
>>6. Sea $V$ abierto de $M$ con $\overline V\subset U$, y sea $f\in C^\infty(M)$ tal que $f|_{\overline V}\equiv1$ y $\operatorname{supp}f\subset U$. Extendemos las $C_{i_1\ldots i_k}$ y $x_1,\ldots,x_n$ definiendo: $$f\cdot x_i=\begin{cases}f(q)x_i(q),&q\in U,\\0,&\text{en otro caso},\end{cases}\qquad f\cdot C_{i_1\ldots i_k}=\begin{cases}f(q)C_{i_1\ldots i_k}(q),&q\in U,\\0,&\text{en otro caso}.\end{cases}$$
>>7. Estas nuevas funciones son suaves (hemos hecho cuentas similares en otras ocaciones) 
>>8. Consideremos la nueva $k$-forma: $$\widetilde{\omega}=\sum_{1\le i_1<\cdots<i_k\le n}\underbrace{f.C_{i_1\cdots i_k}}_{\text{smooth function}}\ \ \underbrace{\underbrace{d(f.x_{i_1})}_{\text{smooth }1\text{-form}}\wedge\cdots\wedge\underbrace{d(f.x_{i_k})}_{\text{smooth }1\text{-form}}}_{\text{smooth }k\text{-form}}.$$ $d(f.x_{i_{j}})$ son $1$-formas por lo mismo que [[GS - Teo21#^171d2a|Motivacion]] y luego usamos [[GS - Teo21#^ce25ad|Ejercicio del practico]] para el wedge de todas esas $1$-formas y llegamos a la $k$-forma  
>>9. Notar que $\widetilde\omega$ coincide con $\omega$ en el abierto $V$. En efecto, si $q\in V$, tenemos $f(q)=1$ y asi $$(f\cdot C_{i_1\ldots i_k})(q)=f(q).C_{i_1\ldots i_k}(q)=C_{i_1\ldots i_k}(q)$$
>>10. Y ademas $d(f\cdot x_i)_q=(dx_i)_q$ por que $$d(f.x_{i})_{q}\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)=\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)(f.x_{i})=\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)(x_{i})=(dx_{i})_{q}\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)$$ usando definicion de diferencial y en el segundo igual como $f.x_{i}\equiv x_{i}$ en el abierto $V$ sabemos que $\left(\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)$ actua de la misma forma en ambos (germen local)
>>11. Pero entonces $$(d(f.x_{i_{1}})\wedge\ldots\wedge d(f.x_{i_{k}}))_{q}=(d(x_{i_{1}})\wedge\ldots\wedge d(x_{i_{k}}))_{q}$$ usando la definicion de producto cuña de $k$-formas y la asociatividad 
>>12. Luego $w$ y $\widetilde{w}$  coinciden en un abierto $V$. Por tanto, por [[GS - Teo21#^ef3cfa|La diferencial exterior es local, lema previo]] $$(d\omega)|_V=(d\widetilde\omega)|_V.$$
>>13. Lo bueno es que la expresion para $\widetilde\omega$ esta definida sobre todo $M$. Por lo tanto podemos aplicar $d$ y obtenemos: $$(d\widetilde\omega)=d\sum fC_{i_1\ldots i_k}\,d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})=d\sum fC_{i_1\ldots i_k}\wedge d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})$$ el ultimo igual por que $fC_{i_1\ldots i_k}$ es una $0$-forma 
>>14. Por linealidad de $d$ y usando la propiedad $3$ de esta misma afirmacion y considerando que $fC_{i_1\ldots i_k}$ es una $0$-forma, queda $$(d\widetilde\omega)=\sum d(fC_{i_1\ldots i_k})\wedge d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})+\sum fC_{i_1\ldots i_k}\wedge d( d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k}))$$
>>15. Ahora como $d^{2}=0$ $$(d\widetilde\omega)=\sum d(fC_{i_1\ldots i_k})\wedge d(fx_{i_1})\wedge\cdots\wedge d(fx_{i_k})$$
>>16. Finalmente como por paso 12. $(d\omega)|_{V}=(d \widetilde{\omega})|_{V}$ y por paso 16. y por la misma idea que en 11. tenemos $$(d\omega)|_V=(d \widetilde{\omega})|_{V}=\sum d(C_{i_1\ldots i_k})\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}.$$
>>17. De lo que resulta que $d$ es unico pues la formula anterior solo depende de la diferencial usual de funciones suaves.
>>18. Notar que la formula anterior da pistas de como se debe definir la transformacion lineal $d:\Omega^*(M)\to\Omega^*(M)$.
>>- **Existencia**
>>1. Construyamos $d$ localmente y luego lo hacemos de forma global. Fijemos una carta $(U,\varphi=(x_1,\ldots,x_n))$.
>>2. Dada una $k$-forma $\omega\in\Omega^k(U)$,$$\omega=\sum C_{i_1\ldots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},\qquad C_{i_1\ldots i_k}\in C^\infty(U),$$
>>3. Definimos $d_U$ por $$d_U\omega:=\sum dC_{i_1\ldots i_k}\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k},$$donde $dC_{i_1\ldots i_k}$ es la diferencial de $C_{i_1\ldots i_k}$, por lo tanto una $1$-forma y luego su base es $\{ dx_{1},\ldots,dx_{n} \}$  $$dC_{i_1\ldots i_k}=\sum_{j=1}^n\frac{\partial C_{i_1\ldots i_k}}{\partial x_j}\,dx_j.$$ los coeficientes salen por que $dC_{I}\frac{\partial}{\partial x_{j}}=\frac{\partial}{\partial x_{j}}C_{I}$ y esto vale por ^311f86
>>4. Por linealidad del diferencial de funciones suaves, claramente $d_U$ se extiende a una transformacion lineal sobre todo $\Omega^*(U)$
>>5. Ademas $d_U$ satisface **(i)** por que si reemplazamos la expresion que dimos en 3. llegamos a $$d_U\omega:=\sum_{j=1}^{n}  \sum_{i_{1}< \ldots<i_{k}}\frac{\partial C_{i_1\ldots i_k}}{\partial x_j}\,dx_j\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k},$$ y luego de permutar y posiblemente agregar un $-1$ nos queda que esto es una suma de $1$ hasta $n$ de $k+1$-formas 
>>6. **(ii)** es trivial por que $f=f.1$ entonces $d|_{U}f=d|_{U}f.1=d|_{U}f$  
>>7. **(iii)** Como $d_U$ es lineal y $\wedge$ es bilineal, basta con analizar cuando $\omega=f\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}$ y $\theta=g\,dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}$. Esto es por que el producto cuña de dos elementos de la suma directa se define como la suma de los productos cuña de los pares son $k$-formas del mismo grado $k$.
>>8. Luego por linealidad seria diferencial de cada uno de esos productos. Pero esos productos son basicamente como en multiplicacion de polinomios la suma de todas las combinaciones, y luego por linealidad nuevamente basta verlo para un caso cualquiera de esos que seria $\omega\wedge\theta$ 
>>9. Entonces $$\begin{align}d_U(\omega\wedge\theta)& =d_U(fg\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell})\\ & =d(fg)\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\&=(f\,dg+g\,df)\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\& =f\,dg\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}+g\,df\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\&=(-1)^k f\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge dg\wedge dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}+df\wedge dx_{i_1}\wedge\cdots\wedge dx_{i_k}\wedge g\,dx_{j_1}\wedge\cdots\wedge dx_{j_\ell}\\&=(d_U\omega)\wedge\theta+(-1)^k\omega\wedge d_U\theta.\end{align}$$
>>10. **(iv)** $d_U^2=0$. Por linealidad de $d_U$, es suficiente con ver $d_Ud_U\omega=0$ con $\omega=f\,dx_I$, donde $dx_I=dx_{i_1}\wedge\cdots\wedge dx_{i_k}$. $$\begin{align}d_Ud_U\omega&=d_U\left(\sum_j\frac{\partial f}{\partial x_j}dx_j\wedge dx_I\right)\\&=\sum_j d\left(\frac{\partial f}{\partial x_j}\right)\wedge dx_j\wedge dx_I\\&=\sum_j\sum_k\frac{\partial^2 f}{\partial x_k\partial x_j}dx_k\wedge dx_j\wedge dx_I\\&=\sum_{1\le j<k\le n}\left(\frac{\partial^2 f}{\partial x_k\partial x_j}-\frac{\partial^2 f}{\partial x_j\partial x_k}\right)dx_k\wedge dx_j\wedge dx_I=0.\end{align}$$ Esto último vale porque $$\left(\frac{\partial^2 f}{\partial x_k\partial x_j}-\frac{\partial^2 f}{\partial x_j\partial x_k}\right)=\left[\frac{\partial }{\partial x_k},\frac{\partial}{\partial x_j}\right]f=0.$$ 
>>11. Por ultimo, definimos de manera global $d$. Sea $\theta\in\Omega^r(M)$. Dado $p\in M$, definimos $$(d\theta)_p:=(d_U\theta|_U)_p$$para cualquier carta suave $(U,\varphi=(x_1,\ldots,x_n))$ de $M$ alrededor de $p$. (la parte. dela derecha cae en lo que hicimos al principio por lo tanto cumple todo) 
>>12. Necesitamos ver que esta bien definido. Sea $(V,\psi=(y_1,\ldots,y_n))$ otra carta suave de $p$, y $W=U\cap V\ne\varnothing$. Por linealidad de la derivada exterior, alcanza con verlo cuando $\theta\in\Omega^k(M)$.
>>13. Tenemos $$\theta|_U=\sum_Ia_I\,dx_I,\qquad \theta|_V=\sum_Jb_J\,dy_J.$$
>>14. Entonces por definicion de $d_U$ y $d_V$, $$d_U\theta|_U=\sum_Ida_I\wedge dx_I,\qquad d_V\theta|_V=\sum_Jdb_J\wedge dy_J.$$
>>15. Pero en $W=U\cap V$ hay una unica diferencial exterior local $$d_W:\Omega^*(W)\to\Omega^{*}(W).$$
>>16. Tomando las dos expresiones de $\theta|_W$, esto ultimo es igual a, por ser $d_W$ diferencial exterior, $$\sum_Ida_I\wedge dx_I=\sum_Jdb_J\wedge dy_J.$$
>>17. En particular, si evaluamos en $p$, $$(\sum_Ida_I\wedge dx_I)_p=(\sum_Jdb_J\wedge dy_J)_p.$$

## Complejo de de Rham

>[!Proposition] Propiedades del pullback
>Sea $F:M\to N$ suave.
>
>- (a) Si $\omega\in\Omega^k(N)$, entonces $F^*\omega\in\Omega^k(M)$, y $F^*:\Omega^k(N)\to\Omega^k(M)$ es transf. lineal.
>- (b) $F^*(\omega\wedge\theta)=(F^*\omega)\wedge(F^*\theta)$.
>- (c) $F^*(d_N\omega)=d_MF^*\omega$.
>
>>[!Proof]- Ejercicio
>>- $(a)$
>>	1. Probemos que la sección $p\mapsto(F^*\omega)_p$ es suave. Fijemos $p\in M$ y tomemos cartas $(U,x)$ de $M$ alrededor de $p$ y $(V,y)$ de $N$ alrededor de $F(p)$, achicando $U$ de modo que $F(U)\subseteq V$. En $V$ escribimos $$\omega=\sum_I a_I\,dy^{i_1}\wedge\cdots\wedge dy^{i_k},$$ donde cada $a_I$ es suave. Afirmamos que sobre $U$ se cumple $$F^*\omega=\sum_I(a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F).$$
>>	
>>	2. Para verificar esta igualdad, sean $q\in U$ y $v_1,\ldots,v_k\in T_qM$. Por definición del pullback, $$\begin{aligned}(F^*\omega)_q(v_1,\ldots,v_k)&=\omega_{F(q)}\bigl((dF)_q(v_1),\ldots,(dF)_q(v_k)\bigr)\\&=\sum_I a_I(F(q))(dy^{i_1}\wedge\cdots\wedge dy^{i_k})_{F(q)}\bigl((dF)_q(v_1),\ldots,(dF)_q(v_k)\bigr).\end{aligned}$$
>>	
>>	3. Por definición del producto wedge de $1$-formas, $$(dy^{i_1}\wedge\cdots\wedge dy^{i_k})_{F(q)}\bigl((dF)_q(v_1),\ldots,(dF)_q(v_k)\bigr)=\det\left(dy^{i_r}_{F(q)}\bigl((dF)_q(v_s)\bigr)\right)_{r,s}.$$
>>	
>>	4. Por la regla de la cadena, $dy^{i_r}_{F(q)}\circ(dF)_q=d(y^{i_r}\circ F)_q$. Por tanto, $$\begin{aligned}\det\left(dy^{i_r}_{F(q)}\bigl((dF)_q(v_s)\bigr)\right)_{r,s}&=\det\left(d(y^{i_r}\circ F)_q(v_s)\right)_{r,s}\\&=\bigl(d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\bigr)_q(v_1,\ldots,v_k).\end{aligned}$$
>>	
>>	5. Sustituyendo, obtenemos $$\begin{aligned}(F^*\omega)_q(v_1,\ldots,v_k)&=\sum_I(a_I\circ F)(q)\bigl(d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\bigr)_q(v_1,\ldots,v_k)\\&=\left(\sum_I(a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)\right)_q(v_1,\ldots,v_k).\end{aligned}$$
>>	
>>	6. Como esto vale para todo $q\in U$ y todos $v_1,\ldots,v_k\in T_qM$, concluimos que $$F^*\omega=\sum_I(a_I\circ F)\,d(y^{i_1}\circ F)\wedge\cdots\wedge d(y^{i_k}\circ F)$$ sobre $U$.
>>	
>>	7. Cada función $a_I\circ F$ es suave y cada $d(y^{i_r}\circ F)$ es una $1$-forma suave. Por lo tanto, el lado derecho es una $k$-forma suave sobre $U$. Como $p$ era arbitrario, $F^*\omega\in\Omega^k(M)$.
>>	
>>	8. Finalmente, sean $\omega,\eta\in\Omega^k(N)$ y $a,b\in\mathbb R$. Para todo $p\in M$ y $v_1,\ldots,v_k\in T_pM$, $$\begin{aligned}\bigl(F^*(a\omega+b\eta)\bigr)_p(v_1,\ldots,v_k)&=(a\omega+b\eta)_{F(p)}\bigl((dF)_p(v_1),\ldots,(dF)_p(v_k)\bigr)\\&=a\,\omega_{F(p)}\bigl((dF)_p(v_1),\ldots,(dF)_p(v_k)\bigr)\\&\quad+b\,\eta_{F(p)}\bigl((dF)_p(v_1),\ldots,(dF)_p(v_k)\bigr)\\&=\bigl(aF^*\omega+bF^*\eta\bigr)_p(v_1,\ldots,v_k).\end{aligned}$$ Luego $F^*(a\omega+b\eta)=aF^*\omega+bF^*\eta$, por lo que $F^*$ es lineal.
>>
>>- $(b)$
>>	1. Para probar que $F^*(\omega\wedge\theta)=(F^*\omega)\wedge(F^*\theta)$, evaluamos ambos lados en $p\in M$ y en vectores $v_1,\ldots,v_{k+\ell}\in T_pM$.
>>	
>>	2. Por definición de pullback,
>>	$$(F^*(\omega\wedge\theta))_p(v_1,\ldots,v_{k+\ell})=(\omega\wedge\theta)_{F(p)}((dF)_pv_1,\ldots,(dF)_pv_{k+\ell}).$$
>>	
>>	3. Usando la definición de producto cuña,
>>	$$(\omega\wedge\theta)_{F(p)}((dF)_pv_1,\ldots,(dF)_pv_{k+\ell})=\frac{1}{k!\ell!}\sum_{\pi\in S_{k+\ell}}\operatorname{sgn}(\pi)\,\omega_{F(p)}((dF)_pv_{\pi(1)},\ldots,(dF)_pv_{\pi(k)})\,\theta_{F(p)}((dF)_pv_{\pi(k+1)},\ldots,(dF)_pv_{\pi(k+\ell)}).$$
>>	
>>	4. Pero, otra vez por definición de pullback,
>>	$$\omega_{F(p)}((dF)_pv_{\pi(1)},\ldots,(dF)_pv_{\pi(k)})=(F^*\omega)_p(v_{\pi(1)},\ldots,v_{\pi(k)}),$$
>>	y
>>	$$\theta_{F(p)}((dF)_pv_{\pi(k+1)},\ldots,(dF)_pv_{\pi(k+\ell)})=(F^*\theta)_p(v_{\pi(k+1)},\ldots,v_{\pi(k+\ell)}).$$
>>	
>>	5. Entonces
>>	$$(F^*(\omega\wedge\theta))_p(v_1,\ldots,v_{k+\ell})=((F^*\omega)\wedge(F^*\theta))_p(v_1,\ldots,v_{k+\ell}).$$
>>	Como esto vale para todo $p$ y todo $v_1,\ldots,v_{k+\ell}$, queda $$F^*(\omega\wedge\theta)=(F^*\omega)\wedge(F^*\theta).$$
>>
>>- $(c)$
>>	1. Por linealidad de $F^*$ y de la derivada exterior, es suficiente con verificar la igualdad en formas expresadas sobre un abierto coordenado $U$.
>>	
>>	2. Recordemos que por definición de pullback de $0$-formas,
>>	
>>	3. $$F^*(f)=f\circ F.$$
>>	
>>	4. Así pues, dado $p\in M$ y $v\in T_pM$,
>>	$$(F^*(df))_pv=(df)_{F(p)}((dF)_pv)=d(f\circ F)_pv.$$
>>	
>>	5. Si $\theta$ es una $k$-forma, como la definición de la derivada exterior es local y no depende de la carta, fijemos un $p\in M$ y una carta $(U,\varphi=(x_1,\ldots,x_n))$ de $F(p)$:
>>	$$\theta|_U=\sum_{i_1<\cdots<i_k}a_{i_1\ldots i_k}\,dx_{i_1}\wedge\cdots\wedge dx_{i_k}=\sum_Ia_I\,dx_I.$$
>>	
>>	6. Entonces
>>	$$(d_N\theta)|_U=\sum_I(da_I)\wedge dx_I.$$
>>	
>>	7. Por tanto
>>	$$\begin{align}(F^*(d_N\theta))_p&=\left(F^*\left(\sum_I(da_I)\wedge dx_I\right)\right)_p\\&=\sum_I(F^*(da_I))_p\wedge(F^*(dx_I))_p\\&=\sum_{i_1<\cdots<i_k}d(a_I\circ F)_p\wedge d(x_{i_1}\circ F)_p\wedge\cdots\wedge d(x_{i_k}\circ F)_p.\end{align}$$
>>	En la última igualdad usamos el paso 3.
>>	
>>	8. Por otro lado $$\begin{align} d_M(F^*\theta))_p&=\left(d_M\left(F^*\left(\sum_Ia_I\,dx_I\right)\right)\right)_p\\&=\left(d_M\left(\sum_I(F^*a_I)\wedge F^*(dx_I)\right)\right)_p\\&=\left(d_M\left(\sum_{i_1<\cdots<i_k}(a_I\circ F)\,d(x_{i_1}\circ F)\wedge\cdots\wedge d(x_{i_k}\circ F)\right)\right)_p\\&=\sum_{i_1<\cdots<i_k}d(a_I\circ F)_p\wedge d(x_{i_1}\circ F)_p\wedge\cdots\wedge d(x_{i_k}\circ F)_p.\end{align}$$
>>	9. En la última igualdad usamos que $d_Md_M=0$. Comparando con la expresión anterior, concluimos que $$(F^*(d_N\theta))_p=(d_M(F^*\theta))_p.$$

## Distribuciones

>[!Proposition] D integrable implica involutiva
>Sea $\mathcal D$ una distribucion suave de dimension $k$. Si $\mathcal D$ es integrable, entonces es involutiva.
>
>>[!Proof]-
>>1. Sean $X,Y$ campos en $\mathcal D$. Queremos que $[X,Y]$ esta en $\mathcal D$.
>>2. Sea $q\in M$ arbitrario y sea $(N,F)$ subvariedad integral de $\mathcal D$ por $q=F(p)$, $p\in N$.
>>3. Como $(dF)_pT_pN=\mathcal D_{F(p)}$ para todo $p\in N$, y $X_{F(p)},Y_{F(p)}\in\mathcal D_{F(p)}$.
>>4. Por [[Gs - Pr4#^b71da3]], existen campos suaves $\widetilde X,\widetilde Y$ en $\mathfrak X(N)$ tales que $$(dF)_p\widetilde X_p=X_{F(p)},\qquad (dF)_p\widetilde Y_p=Y_{F(p)},$$para todo $p\in N$.
>>5. Esto no es mas que $\widetilde X$ e $\widetilde Y$ estan $F$-relacionados con $X,Y$. Tenemos por teorema que $[\widetilde X,\widetilde Y]$ esta $F$-relacionado con $[X,Y]$; es decir $$(dF)_p[\widetilde X,\widetilde Y]_p=[X,Y]_{F(p)},$$para todo $p\in N$.
>>6. Por tanto, como $(dF)_p[\widetilde X,\widetilde Y]_p\in\mathcal D_{F(p)}$, por definicion de subvariedad integral, tenemos $[X,Y]_{F(p)}\in\mathcal D_{F(p)}$.

>[!Theorem] Frobenius local / Warner Th. 1.60
>Toda distribucion involutiva es integrable.
>
>Mejor aun, para todo $p\in M$, existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$, cubico centrado en $p$, tal que las rebanadas
>$$D=\{q\in U:x_j(q)=\text{constante},\ j=k+1,\ldots,n\}$$
>son subvariedades integrales de $\mathcal D$.
>
>Ademas, si $N\subset M$ es una subvariedad integral conexa de $\mathcal D$ tal que $N\subset U$, entonces $N$ debe estar contenida en una de estas rebanadas.
>
>>[!Proof]- Demostracion
>>Sea $\mathcal D$ una distribucion de dimension $k$. Nos paramos en $p$, y tenemos $\mathcal D_p=\operatorname{span}\{v_1,\ldots,v_k\}$.
>>
>>Sabemos por una proposicion probada en el capitulo de Campos que existe una carta $(V,\psi=(y_1,\ldots,y_n))$, centrada en $p$, tal que
>>$$v_j=\frac{\partial}{\partial y_j}\bigg|_p,\qquad j=1,\ldots,k.$$
>>
>>Nos llevamos la distribucion para el abierto $\psi(V)$ de $\mathbb R^n$, usando la carta. Tenemos una distribucion $\mathcal D$ en $\psi(V)$, con $0=\psi(p)$, y tal que
>>$$\mathcal D_0=\operatorname{span}\left\{\frac{\partial}{\partial y_1}\bigg|_0,\ldots,\frac{\partial}{\partial y_k}\bigg|_0\right\}.$$
>>
>>Como la distribucion es suave, tenemos campos suaves $X_1,\ldots,X_k$ definidos en un abierto de $\psi(V)$ tal que
>>$$\mathcal D_q=\operatorname{span}\{(X_1)_q,\ldots,(X_k)_q\}.$$
>>
>>Por tanto, podemos usar el marco $\left\{\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n}\right\}$ para escribir estos campos como combinacion lineal
>>$$X_j=\sum_{i=1}^na_{ij}\frac{\partial}{\partial y_i},$$
>>donde $a_{ij}$ son funciones suaves sobre un abierto contenido en $\psi(V)$.
>>
>>Armando la matriz $T(q)=(a_{ij}(q))$, cuando hacemos $T(0)$, esta matriz tiene la submatriz $T(0)_{1\ldots k,1\ldots k}$ igual a la identidad, porque $(X_j)_0=\frac{\partial}{\partial y_j}\big|_0$. Podemos pensar en la funcion
>>$$f:\psi(V)\to\mathbb R,\qquad q\mapsto\det(T(q)_{1\ldots k,1\ldots k}).$$
>>
>>La cual es una funcion suave por las entradas de la matriz $T(q)$ son suaves. Como $f(0)=1\ne0$, existe un abierto de $0$ donde $f(q)\ne0$. Achicamos $\psi(V)$, si hace falta, y podemos asumir que esto pasa en $\psi(V)$.
>>
>>Por tanto, tiene sentido hablar de la matriz inversa de la submatriz $T(q)_{1\ldots k,1\ldots k}$, digamos $Q(q)$. Esto define una funcion
>>$$Q:\psi(V)\to M_{k\times k}(\mathbb R),\qquad q\mapsto Q(q),$$
>>tal que
>>$$T(q)_{1\ldots k,1\ldots k}\cdot Q(q)=I_k.$$
>>
>>Notar que las entradas de la matriz que da $Q$ son funciones suaves, pues son funciones racionales entre productos y sumas con las entradas de $T(q)$, con denominador el determinante de $T(q)_{1\ldots k,1\ldots k}$, el cual no se anula en $\psi(V)$.
>>
>>Luego
>>$$T(q)Q(q)=\begin{pmatrix}1& &0\\ &\ddots& \\0& &1\\ b_{k+1,1}&\cdots&b_{k+1,k}\\ \vdots& &\vdots\\ b_{n1}&\cdots&b_{nk}\end{pmatrix}.$$
>>
>>¿Que hemos hecho? Por algebra, lo que se ha hecho es cambiar los generadores de la distribucion. Como los vectores columnas de $T(q)$ generan $\mathcal D_q$ y $Q(q)$ da los escalares para que las combinaciones lineales de las columnas de $T(q)$ generen los vectores columnas de la matriz de la derecha, tenemos que $\mathcal D$ es generada en el abierto $\psi(V)$ por los campos $\widetilde X_1,\ldots,\widetilde X_k$ con
>>$$\widetilde X_j=\frac{\partial}{\partial y_j}+\sum_{i=k+1}^nb_{ij}\frac{\partial}{\partial y_i},\qquad b_{ij}\in C^\infty(V).$$
>>
>>La forma de pensarlo: recordemos que en algebra 2, cuando pedian dar una base de un subespacio vectorial generado por $k$ vectores, se ponian en una matriz como vectores fila y se hacia Gauss-Jordan; en cada paso estamos haciendo combinaciones lineales de las filas, y el resultado final es otro conjunto generador muy lindo del subespacio vectorial.
>>
>>Lo lindo que tiene este nuevo conjunto de generadores es que conmutan.
>>
>>Hagamos:
>>$$[\widetilde X_i,\widetilde X_j]=\left[\frac{\partial}{\partial y_i}+\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h},\frac{\partial}{\partial y_j}+\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right].$$
>>
>>Por bilinealidad del corchete y que $\left[\frac{\partial}{\partial y_i},\frac{\partial}{\partial y_j}\right]=0$, queda
>>$$[\widetilde X_i,\widetilde X_j]=\left[\frac{\partial}{\partial y_i},\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right]-\left[\frac{\partial}{\partial y_j},\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h}\right]+\left[\sum_{h=k+1}^nb_{hi}\frac{\partial}{\partial y_h},\sum_{\ell=k+1}^nb_{\ell j}\frac{\partial}{\partial y_\ell}\right].$$
>>
>>Esto pertenece a
>>$$\operatorname{span}\left\{\frac{\partial}{\partial y_{k+1}},\ldots,\frac{\partial}{\partial y_n}\right\}.$$
>>
>>Por hipotesis, la distribucion es involutiva, por tanto $[\widetilde X_i,\widetilde X_j]\in\mathcal D$. Y como
>>$$\mathcal D_q\cap\operatorname{span}\left\{\frac{\partial}{\partial y_{k+1}}\bigg|_q,\ldots,\frac{\partial}{\partial y_n}\bigg|_q\right\}=\{0\},$$
>>se sigue la afirmacion
>>$$[\widetilde X_i,\widetilde X_j]=0.$$
>>
>>Con estos campos vamos a construir de manera natural una subvariedad integral. ¿Por que natural? Como los campos estan en la distribucion, entonces sus curvas integrales van a estar contenidas en las subvariedades integrales. Lo natural es combinar los flujos de cada campo para ir formando la subvariedad. Sabemos que esto sale bien cuando los campos conmutan.
>>
>>Si en estos momentos tuvieramos que dar una subvariedad integral por el origen $0$, usando que podemos tomar un abierto cubico de $0$ donde hay uniformidad conjunta para $\widetilde X_1,\ldots,\widetilde X_k$, con flujos $\theta^1,\ldots,\theta^k$ respectivamente, definimos
>>$$f:(-\delta,\delta)^k\to\mathbb R^n,\qquad (t_1,\ldots,t_k)\mapsto\theta^1_{t_1}\circ\cdots\circ\theta^k_{t_k}(0).$$

## Orientacion de espacios vectoriales

>[!Proposition] Caracterizacion de orientabilidad
>Sean $M$ una variedad suave conexa de dimension $n$. Entonces las siguientes afirmaciones son equivalentes:
>
>- (a) $M$ es orientable.
>- (b) Existe una $n$-forma continua nunca nula sobre $M$.
>- (c) Existe una $n$-forma suave nunca nula sobre $M$.
>
>>[!Proof]- Demostracion
>>- **$(c)\Rightarrow(b)$** es inmediato.
>>- **$(b)\Rightarrow(a)$**. 
>>1. Tenemos $\omega$ una $n$-forma no nula, recordamos que un $n$-tensor alternante no nulo define una orientación (en espacios vectoriales) 
>>2. Usamos la continuidad de la $n$-forma $\omega$ para definir un atlas de orientación. 
>>3. Arrancamos con $\mathcal A=\{(U_\alpha,\varphi_\alpha=(x_1^\alpha,\ldots,x_n^\alpha))\}_{\alpha\in I}$ un atlas suave de $M$, donde podemos suponer que cada $U_\alpha$ es un conjunto conexo.
>>4. Recordar que las componentes conexas en un espacio topológico localmente conexo por caminos son abiertas.
>>5. Para cada $(U_\alpha,\varphi_\alpha)\in\mathcal A$, consideramos la función $$f_\alpha:U_\alpha\to\mathbb R\qquad p\mapsto \omega_p\!\left(\left.\frac{\partial}{\partial x_1^\alpha}\right|_p,\ldots,\left.\frac{\partial}{\partial x_n^\alpha}\right|_p\right)$$
>>6. Como $\omega$ es nunca nula y continua, entonces $f_\alpha$ es continua y nunca nula.
>>7. Como $U_\alpha$ es conexo, se sigue que $f_\alpha>0$ o bien $f_\alpha<0$ en todo $U_\alpha$.
>>8. Si $f_\alpha<0$, construimos la nueva carta suave $(U_\alpha,\widetilde\varphi_\alpha=(-x_1^\alpha,x_2^\alpha,\ldots,x_n^\alpha))$.
>>9. Nuestro atlas de orientación es $$\mathcal A_0=\{(U_\alpha,\varphi_\alpha)\in\mathcal A:f_\alpha>0\}\cup\{(U_\alpha,\widetilde\varphi_\alpha):(U_\alpha,\varphi_\alpha)\in\mathcal A,\ f_\alpha<0\}.$$
>>- **$\mathcal A_0$ es un atlas suave de $M$**: Sus cartas son suavemente compatibles. Veamoslo:
>>	1. Si $(U_\alpha,\varphi_\alpha),(U_\beta,\varphi_\beta)$ son t.q. $f_\alpha>0$, $f_\beta>0$ y $U_\alpha\cap U_\beta\neq\varnothing$, entonces son suavemente compatibles porque están en $\mathcal A$. Y $\mathcal A$ es atlas suave
>>	2. Si $(U_\alpha,\varphi_\alpha)$ y $(U_\beta,\widetilde\varphi_\beta)$ donde $f_\alpha>0$, $f_\beta<0$ y $U_\alpha\cap U_\beta\neq\varnothing$. Consideremos $$T:\mathbb R^n\to\mathbb R^n,\qquad (x^1,\ldots,x^n)\mapsto(-x^1,x^2,\ldots,x^n),$$la cual es una transf. lineal t.q. $T^2=\operatorname{Id}_{\mathbb R^n}$ y $$\widetilde\varphi_\beta=T\circ\varphi_\beta,$$ así $$\widetilde\varphi_\beta\circ\varphi_\alpha^{-1}=T\circ \underbrace{\varphi_\beta\circ\varphi_\alpha^{-1}}_{\text{suave, pues }\mathcal A\text{ es atlas}}$$ y $$\varphi_\alpha\circ\widetilde\varphi_\beta^{-1}=\varphi_\alpha\circ(T\circ\varphi_\beta)^{-1}=\underbrace{\varphi_\alpha\circ\varphi_\beta^{-1}}_{\text{suave, pues }\mathcal A\text{ es atlas}}\circ T^{-1},$$
>>	3. Y finalmente si $(U_\alpha,\widetilde\varphi_\alpha)$, $(U_\beta,\widetilde\varphi_\beta)$ son t.q $f_{\alpha }<0$ y $f_{\beta}<0$ entonces son suavemente compatibles: $$\widetilde\varphi_\beta\circ\widetilde\varphi_\alpha^{-1}=(T\circ\varphi_\beta)\circ(\varphi_\alpha^{-1}\circ T^{-1})=T\circ(\varphi_\beta\circ\varphi_\alpha^{-1})\circ T^{-1}$$
>>- **Para todo $p\in M$, las cartas de $\mathcal A_0$ definen la misma orientación en $T_pM$:**
>>	1. Sean $(U,\varphi)$, $(V,\psi)\in\mathcal A_0$ t.q. $U\cap V\neq\varnothing$. Tenemos tres casos
>>	- **1er Caso:**
>>		1. Primero tenemos $$(U,\varphi)=(U_\alpha,\varphi_\alpha),\qquad (V,\psi)=(U_\beta,\varphi_\beta),\qquad f_\alpha>0,\ f_\beta>0.$$entonces $$0<f_\alpha=\omega\!\left(\frac{\partial}{\partial x_\alpha^1},\ldots,\frac{\partial}{\partial x_\alpha^n}\right)=\det\!\left(\frac{\partial x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial x_\beta^1},\ldots,\frac{\partial}{\partial x_\beta^n}\right)=\det\!\left(\frac{\partial x_\beta^j}{\partial x_\alpha^i}\right)f_\beta.$$
>>		2. Luego $$\det\!\left(\frac{\partial x_\beta^j}{\partial x_\alpha^i}\right)>0.$$	 
>>	- **2do caso:** 
>>		1. Si $(U,\varphi)=(U_\alpha,\varphi_\alpha)$ y $(V,\psi)=(U_\beta,\widetilde\varphi_\beta)$, con $f_\alpha>0$ y $f_\beta<0$
>>		2. Entonces, repitiendo la misma cuenta de arriba, tenemos $$\begin{align} 0<f_\alpha & =\omega\!\left(\frac{\partial}{\partial x_\alpha^1},\ldots,\frac{\partial}{\partial x_\alpha^n}\right)\\ &=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial \widetilde x_\beta^1},\ldots,\frac{\partial}{\partial \widetilde x_\beta^n}\right)\\&=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(-\frac{\partial}{\partial x_\beta^1},\ldots,\frac{\partial}{\partial x_\beta^n}\right)\\&=-\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial x_\beta^1},\ldots,\frac{\partial}{\partial x_\beta^n}\right)\\&=-\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)f_{\beta }\end{align}$$
>>		3. Pero como $0>f_{\beta}$ tenemos que $$\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)>0$$
>>	- **3er Caso**
>>		1. Por último, si $(U,\varphi)=(U_\alpha,\widetilde\varphi_\alpha)$ y $(V,\psi)=(U_\beta,\widetilde\varphi_\beta)$ con $f_\alpha<0$ y $f_\beta<0$, 
>>		2. Entonces tenemos $$\begin{align} 0>f_\alpha & =\omega\!\left(\frac{\partial}{\partial x_\alpha^1},\ldots,\frac{\partial}{\partial x_\alpha^n}\right)\\&=-\omega\!\left(\frac{\partial}{\partial \widetilde x_\alpha^1},\ldots,\frac{\partial}{\partial \widetilde x_\alpha^n}\right)\\&=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)-\omega\!\left(\frac{\partial}{\partial \widetilde x_\beta^1},\ldots,\frac{\partial}{\partial \widetilde x_\beta^n}\right)\\& =\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial  x_\beta^1},\ldots,\frac{\partial}{\partial  x_\beta^n}\right)\\&=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)f_{\beta }\end{align}$$
>>		3. Con lo cual $$\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)>0$$  
>>	4. Luego todas las funciones de transición de $\mathcal A_0$ tienen determinante positivo. Por consiguiente, todas las cartas de $\mathcal A_0$ determinan la misma orientación.
>>- **$(a)\Rightarrow (c)$** 
>>1. Tenemos el atlas de orientación $\mathcal A$. Queremos construir $\omega\in\Omega^n(M)$.
>>2. Para cada $(U_\alpha,\varphi_\alpha)\in\mathcal A$, con $\varphi_\alpha=(x_\alpha^1,\ldots,x_\alpha^n)$, consideremos $$\xi_\alpha=(dx_\alpha^1)\wedge\cdots\wedge(dx_\alpha^n).$$
>>3. Tomemos una partición de la unidad subordinada al cubrimiento $\{U_\alpha\}_{\alpha\in I}$, digamos $\{\rho_\alpha\}_{\alpha\in I}$.
>>4. Definimos sobre $M$ $$\rho_\alpha\,\xi_\alpha=\begin{cases}\rho_\alpha(q)\,\xi_\alpha(q),&q\in U_\alpha,\\0,&q\notin U_\alpha.\end{cases}$$
>>5. Como $\rho_\alpha$ es suave, usando el criterio de suavidad para formas, tenemos que $\rho_\alpha\,\xi_\alpha$ es suave.
>>6. Definimos entonces $$\omega=\sum_{\alpha\in I}\rho_\alpha\,\xi_\alpha.$$
>>7. Y $\omega$ resulta suave, pues $\{\operatorname{supp}\rho_\alpha\}_{\alpha\in I}$ es un conjunto localmente finito luego para cada $p\in M$ existe un entorno abierto $V$ de $p$ tal que sólo un número finito de las formas $\rho_\alpha\xi_\alpha$ son no nulas en $V$. En consecuencia, $\omega|_V$ es una suma finita de formas suaves, y por tanto es suave.
>>8. Además, para cada $p\in M$, $\omega_{p}$ es $n$-lineal y alternante.
>>9. Sólo resta verificar que $\omega$ nunca se anula. Para esto recordemos que $\sum_{\alpha\in I}\rho_\alpha(p)=1$ y $\rho_\alpha(p)\ge0$ para todo $\alpha\in I$.
>>10. Dado $p\in M$ como $\sum_{\alpha\in I}\rho_\alpha(p)=1$ existe $\beta\in I$ tal que $\rho_\beta(p)>0$ osea $p\in \operatorname{supp} \rho_{\alpha }\subseteq U_{\beta}$ 
>>11. La carta $(U_\beta,\varphi_\beta=(x_\beta^1,\ldots,x_\beta^n))$ determina la base $\{\frac{\partial}{\partial x_\beta^1}\big|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\big|_p\}$ de $T_pM$.
>>12. Entonces $$\begin{align}\omega_{p}\!\left(\frac{\partial}{\partial x_\beta^1}\bigg|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\bigg|_p\right)&= \rho_{\beta }(p)\xi_{\beta}\!\left(\frac{\partial}{\partial x_\beta^1}\bigg|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\bigg|_p\right)+\sum_{\substack{\alpha\in I \\ \alpha  \neq \beta }}^{n} \rho_\alpha(p)\,\xi_{\alpha}\!\left(\frac{\partial}{\partial x_\beta^1}\bigg|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\bigg|_p\right)\\&=\rho_{\beta }(p)+\sum_{\substack{\alpha\in I \\ \alpha  \neq \beta }}^{n} \rho_\alpha(p)\det\left(\frac{\partial x_{\alpha }^{j } }{\partial x_{\beta }^{i}}\right) \end{align}$$ para el segundo igual usamos la definicion de evaluar una $n$-forma y la propiedad $dx(\frac{\partial }{\partial y})=\frac{\partial }{\partial y}x$ 
>>13. Y el resultado de esta suma es no negativo dado que $\rho_{\beta}(p)>0$ y $\rho_{\alpha }\geq 0$ y el $\det$ es mayor que $0$ por que ambas cartas pertencen a $\mathcal A$ el atlas de orientacion
