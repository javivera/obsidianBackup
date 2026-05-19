>[!Example]- Ejercicio abierto
>Sea $F:\mathbb R^2\to\mathbb R$ y $C=F^{-1}(0)$.
>$F(x,y)=x^2-y^3$.
>Se tiene $C=F^{-1}(0)$.
>¿Se podria mostrar con la teoria vista hasta aca que $C$ NO puede ser subvariedad incrustada de $\mathbb R^2$?
>$C$ recibe el nombre de cuspide cubica.
>Si usamos este resultado:
>Suppose $M$ is a smooth manifold, $S\subseteq M$ is an embedded submanifold, and $p\in S$. As a subspace of $T_pM$, the tangent space $T_pS$ is characterized by $T_pS=\{v\in T_pM:vf=0\text{ whenever }f\in C^\infty(M)\text{ and }f|_S=0\}$.
>Es inmediata la solucion.

## Extension de funciones suaves

>[!Proposition] Extension local
>Sea $(M,i)$ una inmersion en $N$ y sea $p\in M$ y sea $g:M\to\mathbb R$ funcion suave. 
>Entonces, existen un abierto $U$ de $M$ en $p$, un abierto $V$ de $N$ en $i(p)$ con $i(U)\subseteq V$ (cuidado, $M$ no necesariamente tiene topologia heredada) y una funcion $$\widetilde g:V\subseteq N\to\mathbb R$$ suave que extiende a $g$, es decir, $\widetilde g\circ i=g$ para todo $q\in U$.
>![[Pasted image 20260505230207.png]]
>>[!Proof]-
>>1. Sea $m=\dim M$ y $n=\dim N$ si $m=n$ sale gratis (por que?) 
>>2. Como $(M,i)$ es una inmersion, sabemos por la formula local de una inmersion que existen cartas $(U,\varphi)$ y $(V,\psi)$ centradas en $p$ e $i(p)$ tales que $$\psi\circ i\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0)$$
>>3. Para poder proyectar adecuadamente, tenemos $\epsilon$ tal que $C_\epsilon^m(0)\subseteq\varphi(U)$ y $C_\epsilon^n(0)\subseteq\psi(V)$. Luego llamamos $$U=\varphi^{-1}(C_\epsilon^m(0))\quad \text{y}\quad V=\psi^{-1}(C_\epsilon^n(0))$$
>>4. Como hemos visto en otras pruebas, tenemos $i(U)\subseteq V$ pues aplicando $\psi$ de ambos lados, esto equivale a $$\psi\circ i\circ\varphi^{-1}(C_\epsilon^m(0))\subseteq C_\epsilon^n(0)$$ y esto ultimo es cierto.
>>5. Si $(x_1,\ldots,x_m)\in C_\epsilon^m(0)$, entonces $|x_i|<\epsilon$, por lo tanto $(x_1,\ldots,x_m,0,\ldots,0)\in C_\epsilon^n(0)$.
>>6. Sea $\pi:\mathbb R^n\to\mathbb R^m$, $(y_1,\ldots,y_m,y_{m+1},\ldots,y_n)\mapsto(y_1,\ldots,y_m)$.
>>7. Nos animamos a proponer $\widetilde g:V\subseteq N\to\mathbb R$ dada por $$\widetilde g=g\circ\varphi^{-1}\circ\pi\circ\psi$$
>>8. Como $$q\in V\xrightarrow{\psi}\psi(q)\in C_{\epsilon}^{n}(0) \xrightarrow{\pi}\pi(\psi(q))\in C_{\epsilon}^{m}(0) \xrightarrow{\varphi^{-1}}\varphi^{-1}(\pi(\psi(q)))\in U\xrightarrow{g}g\circ\varphi^{-1}\circ\pi\circ\psi(q)=\tilde{g}(q)$$, la funcion $\widetilde g$ claramente es funcion suave (por composicion de suaves) sobre $V$ .
>>9. Ademas si $q\in U$, $$\widetilde g\circ i(q)=\tilde g\circ i\circ \varphi\circ\varphi ^{-1}(q)=g\circ\varphi^{-1}\circ\pi\circ\psi\circ i\circ\varphi ^{-1}\circ\varphi(q)=g\circ\varphi ^{-1}\circ Id_{C_{\epsilon}^{m} (0)}\circ\varphi(q)=g(q)$$

^f11484

>[!Definition]- Suavidad sobre un subconjunto
> Sea $X$ una variedad suave y sea $A\subseteq X$. Una función $F:A\to \mathbb R^k$ se dice suave como función definida sobre el subconjunto $A\subseteq X$ si para todo $p\in A$, existe un abierto $O_p\subseteq X$ con $p\in O_p$ y existe una función suave $\widetilde F_p:O_p\to \mathbb R^k$ tal que
> $$\widetilde F_p|_{O_p\cap A}=F|_{O_p\cap A}.$$
>Es decir, $F$ es suave sobre $A$ si localmente alrededor de cada punto de $A$ se puede extender a una función suave definida en un abierto de la variedad ambiente $X$.

^c5f3d4

>[!Proposition] Extension de funciones suaves
>Sea $N$ una variedad suave, $M$ un subconjunto cerrado de $N$ y $F:A\to\mathbb{R}^k$ suave, en el sentido de [[GS - Teo14#^c5f3d4]]. 
>Entonces, para todo abierto $U$ que contenga a $M$, existe $\widetilde F:N\to\mathbb{R}^k$ función suave tal que $$\begin{cases}\widetilde F|_M=F,\\\operatorname{supp}\widetilde F\subseteq U.\end{cases}$$

^81237c

>[!Proposition] Extension Global
> Sea $(M,i)$ una incrustacion de $N$, donde $i$ es inclusion y $M$ es un subconjunto cerrado de $N$. Dada $g \in C^\infty(M)$, existe $\widetilde g \in C^\infty(N)$ que extiende a $g$, es decir $\widetilde g \circ i=g$.
>>[!Proof]-
>>1. Vamos a usar [[GS - Teo14#^81237c]]
>>2. Para aplicarlo hay que ver que $g \in C^\infty(M)$ implica que $g$ es suave sobre $M$ al verla como subconjunto de $N$.
>>3. Y si!. Dado $p \in M$, por [[GS - Teo14#^f11484]] existe un abierto $U_p$ de $p$ en $M$, un abierto $V_p$ de $p$ en $N$ y una funcion suave $\widetilde g_p:V_p \subset N \to \mathbb R$ tal que $$g=\widetilde g_p \circ i:U_{p}\rightarrow \mathbb{R}$$ sobre $U_p$.
>>4. Como $i$ es inclusion, esto dice que $U_p \subset V_p$ entonces $U_{p}\cap V_{p}=U_{p}$
>>5. . Ademas, como $M$ esta incrustada en $N$, existe $W_p$ abierto de $N$ tal que $$U_p=M \cap W_p$$
>>6. Intersecando $W_{p}$ con $V_p$ tenemos que la funcion $\widetilde g_p|_{W_{p}\cap V_{p}}$ extiende a $g$ sobre $U_{p}=M\cap W_{p}\cap V_{p}$, un entorno de $p$ en $M$.
>>7. Con lo cual localmente osea un abierto $U_{p}$ al rededor de $p$ pudimos extender $g$ a una funcion $\tilde{g}_{p}$ suave sobre un abierto de $N$         
>>8. Entonces $g$ es suave sobre $M$ como subconjunto de $N$. 
>>9. Como $M$ es cerrado, aplica el resultado de extension global y se obtiene $\widetilde g \in C^\infty(N)$.

## Campos vectoriales

>[!Remark]
>Recordemos que $TM=\coprod_{p \in M}T_pM$ y que tenemos la proyeccion canonica $\pi:TM \to M$, $\pi(p,v)=p$.

>[!Definition] Seccion
>Sean $X$ e $Y$ conjuntos y sea $\pi:X \to Y$ una funcion. Una seccion de $\pi$ es una funcion $\sigma:Y \to X$ tal que $\pi \circ \sigma=\operatorname{Id}_Y$.
>Es decir, dado $q \in Y$, la seccion elige un elemento de la fibra $\pi^{-1}(q)$. (Al conjunto $\pi^{-1}(q)$ se lo llama la fibra de $\pi$ sobre $q$.)  
>En particular, si $\pi$ admite secciones, entonces $\pi$ es sobreyectiva. 
>![[Pasted image 20260509232539.png]]

>[!Definition] Campo vectorial
>Sea $M$ una variedad suave. Un campo vectorial sobre $M$ es una seccion de la proyeccion canonica $\pi:TM \to M$.
>
>Dicho de otra forma, es una funcion $X:M \to TM$ tal que $\pi \circ X(q)=q$. 
>Si escribimos $X(q)=(X_1(q),X_2(q))$, entonces $$X_1(q)=\pi\circ X(q)=q$$, y por lo tanto $X$ tiene la forma $X(q)=(q,v)$ con $v \in T_qM$.
>Al vector tangente asignado en $q$ se lo denota $X_q$, e identificamos $X(q)$ con $X_q$.

>[!Definition] Campo vectorial suave
> Un campo vectorial $X:M \to TM$ se dice suave si $X$ es una funcion suave, donde $TM$ tiene la estructura de variedad diferenciable vista anteriormente.
> Se denota al conjunto de campos suaves sobre $M$ por $\mathfrak X(M)$.

>[!Remark]
>Sea $X:M\rightarrow TM$ un campo vectorial. Sea $(U,\varphi=(x_1,\ldots,x_n))$ una carta suave de $M$. Para cualquier $p \in U$, el conjunto $\{\frac{\partial}{\partial x_1}|_p,\ldots,\frac{\partial}{\partial x_n}|_p\}$ es una base de $T_pM$. 
>Por lo tanto, si $X_p \in T_pM$, entonces $$X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}|_p$$
>Asi tenemos funciones $a_i:U \to \mathbb R$. Ademas se define $$\frac{\partial}{\partial x_{i}}:U\rightarrow  TU\qquad \text{dada por }\qquad \frac{\partial}{\partial x_{i}}(q)=\left(q,\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)$$
>Luego a $a_{i}$ se llaman las funciones coordenadas de $X|_U$ con respecto al marco coordenado $$\left\{\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\right\}$$
>Ademas, si $f \in C^\infty(U)$, definimos $$Xf:U \to \mathbb R$$ por $$(Xf)(p)=X_p f$$

>[!Proposition] Caracterizaciones de suavidad
> Sea $X:M \to TM$ un campo vectorial. Son equivalentes:
>
> 1. $X$ es suave.
> 2. Para toda carta suave $(U,\varphi=(x_1,\ldots,x_n))$ de $M$, las funciones $a_i:U \to \mathbb R$ dadas por $$X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}|_p$$ son suaves.
> 3. Para todo abierto $V$ de $M$ y toda funcion $f \in C^\infty(V)$, la funcion $Xf:V \to \mathbb R$, $(Xf)(q)=X_q f$, es suave.
> 4. Para toda funcion $f \in C^\infty(M)$, se cumple $Xf \in C^\infty(M)$.
>
>>[!Proof]-
>>- $1 \Rightarrow 2$. 
>>	1. Tenemos la carta $(U,\varphi=(x_{1},\ldots,x_{n}))$ la cual induce $(\widetilde{U}=\pi ^{-1}(U),\widetilde{\varphi})$ dada por $$\widetilde\varphi=(x_1 \circ \pi,\ldots,x_n \circ \pi,v_1,\ldots,v_n)$$donde $(x_{1}\circ\pi,\ldots,x_{n}\circ\pi)=\varphi(p)$ y $v_i$ son las coordenadas del vector en la base $\{ \frac{\partial}{\partial x_{1}}|_{p},\ldots,\frac{\partial}{\partial x_{n}}|_{p} \}$  
>>	2. Como $X$ es suave, $$\widetilde\varphi \circ X|_U:U \to \mathbb R^{2n}$$ es suave. 
>>	3. Pero $$\widetilde\varphi \circ X|_U(p)=\widetilde{\varphi}(p,X_{p})=(x_1(q),\ldots,x_n(q),a_1(p),\ldots,a_n(p))$$ entonces cada funcion coordenadas es suave. Por lo tanto las $a_i$ son suaves.
>>- $2 \Rightarrow 3$. 
>>	1. Sea $V$ abierto de $M$ y sea $f \in C^\infty(V)$. Quiero ver $Xf:V\rightarrow\mathbb{R}$ es suave para esto alcanza con chequear suavidad con cartas suaves de $V$
>>	2. Tomemos una carta $(U,\varphi=(x_1,\ldots,x_n))$ de $V$. Entonces para todo $p\in U$ tenemos $$X_p=\sum_{i=1}^n a_i(p)\frac{\partial}{\partial x_i}|_p$$, con $a_i$ suaves. 
>>	3. Tenemos $Xf:U \to \mathbb R$ con $$(Xf)(p)=X_p f=\sum_{i=1}^n a_i(p)\frac{\partial }{\partial x_i}\bigg|_{p}f$$ 
>>	4. Como las funciones coordenadas $a_{i}(p)$ son suaves basta ver que $$\frac{\partial}{\partial x_{i}} f:U\subseteq M\rightarrow \mathbb{R}\quad\text{ dada por }\quad \frac{\partial}{\partial x_{i}}f(p)=\frac{\partial}{\partial x_{i}}\bigg|_{p}f$$ son suaves (como funciones que reciben $p\in U$) 
>>	5. Pero lo son , por que $$\left(\frac{\partial}{\partial x_{i}}f\right)(p)=\frac{\partial}{\partial x_{i}}\bigg|_{p}f=\frac{\partial}{\partial r_{i}}\bigg|_{\varphi(p)}f\circ\varphi ^{-1}=\frac{\partial}{\partial r_{i}} f\circ\varphi ^{-1}(\varphi(p))$$ osea $$\frac{\partial}{\partial x_{i}}f =\left(\frac{\partial}{\partial r_{i}}f\circ\varphi ^{-1}\right)\circ\varphi$$ pero como $f\circ\varphi ^{-1}$ es suave entonces $\frac{\partial}{\partial r_{i}}f\circ\varphi ^{-1}$ es suave y como $\varphi$ es suave entonces $\frac{\partial}{\partial x_{i}}f$ es suave  
>>- $3 \Rightarrow 1$. 
>>	1. Supongamos que para todo abierto $V\subseteq M$ y para toda función $f\in C^\infty(V)$, se tiene $Xf\in C^\infty(V)$. Queremos ver que $X:M\to TM$ es suave.  
>>	2. Para esto tomamos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ de $M$. Esta induce una carta suave del fibrado tangente $$(\widetilde U=\pi^{-1}(U),\widetilde\varphi)$$dada por $$\widetilde\varphi=(x_1\circ\pi,\ldots,x_n\circ\pi,v_1,\ldots,v_n).$$
>>	3. Entonces basta ver que $$\widetilde\varphi\circ X|_U:U\to\mathbb R^{2n}$$es suave. (Esto es por que $p\in U$ y es directo ver que $X|_{U}(U)\subseteq \tilde{U}$ osea que despue es componer a derecha con $\varphi ^{-1}$ que es suave)  
>>	4. Para cada $p\in U$ tenemos $$\widetilde\varphi\circ X|_U(p)=\left(x_1(p),\ldots,x_n(p),(v_1\circ X)(p),\ldots,(v_n\circ X)(p)\right).$$ notar que $(v_{i}\circ X)(p)$ es otra forma de decirle a $a_{i}(p)$ es solamente la coordenada pero si la escribis asi se entiende que es la i-esima coordenada del vector tangente $X_{p}$    
>>	5. Las primeras $n$ componentes son suaves, porque $x_1,\ldots,x_n$ son las funciones coordenadas de una carta suave.  
>>	6. Por lo tanto, falta ver que $$v_i\circ X:U\to\mathbb R$$ es suave para cada $i=1,\ldots,n$.  
>>	7. Para cada $p\in U$, como $$X_p=\sum_{i=1}^n (v_i\circ X)(p)\frac{\partial}{\partial x_i}\bigg|_p,$$necesitamos identificar el coeficiente $(v_i\circ X)(p)$.  
>>	8. Evaluamos en la función coordenada $x_i:U\to\mathbb R$. Entonces  $$X_px_i=(v_i\circ X)(p).$$
>>	9. Por lo tanto, $$v_i\circ X=Xx_i:U\to\mathbb R.$$
>>	10. Pero $x_i\in C^\infty(U)$, entonces por hipótesis $Xx_i\in C^\infty(U)$. Luego $v_i\circ X$ es suave para cada $i$.  
>>	11. Así, todas las funciones componentes de $\widetilde\varphi\circ X|_U$ son suaves. Por lo tanto $\widetilde\varphi\circ X|_U$ es suave.  
>>	12. Como esto vale para cualquier punto $p$ del fibrado tangente, concluimos que $X:M\to TM$ es suave.
>>- $3 \Rightarrow 4$ es inmediato tomando $V=M$.
>>- $4 \Rightarrow 3$. 
>>	1. Queremos probar que si $V\subseteq M$ es abierto y $f\in C^\infty(V)$, entonces $Xf\in C^\infty(V)$.
>>	2. Lo único que sabemos por hipótesis es que si $g\in C^\infty(M)$, entonces $Xg\in C^\infty(M)$.
>>	3. Sea $p\in V$ arbitrario. Como $V$ es abierto, por [[GS - Teo5#^405b16]] existe un abierto $U\subseteq M$ tal que $$p\in U \qquad \text{y} \qquad \overline{U}\subseteq V.$$ y una funcion $\widetilde f\in C^\infty(M)$ tal que $\widetilde f|_{ U}=\left.f\right|_{ U}$
>>	4. Por hipótesis, como $\widetilde f\in C^\infty(M)$, entonces $$X\widetilde f\in C^\infty(M).$$
>>	5. Además, como $\left.\widetilde f\right|_U=\left.f\right|_U$, entonces para todo $q\in U$ las funciones $\widetilde f$ y $f$ coinciden en un abierto alrededor de $q$. Por lo tanto, $$X_q\left(\left.\widetilde f\right|_U\right)=X_q\left(\left.f\right|_U\right).$$ por [[GS - Teo5#^b713ca]]
>>	6. Como esto vale para todo $q$ tenemos que, $$(X\widetilde f)|_U=(Xf)|_U.$$
>>	7. Como $X\widetilde f\in C^\infty(M)$, su restricción a $U$ es suave. Luego $$(Xf)|_U\in C^\infty(U).$$
>>	8. Como $p\in V$ era arbitrario, para cada punto de $V$ existe un abierto $U\subseteq V$ alrededor de ese punto tal que $(Xf)|_U$ es suave. Por lo tanto, $$Xf\in C^\infty(V).$$ notar que usamos [[GS - Teo14#^e32b2f]] 

^3accf8

>[!Remark]
>Como la suavidad de mapas entre variedades es una propiedad local en el dominio, para probar que un campo vectorial $X:M\to TM$ es suave alcanza probar que, para cada $p\in M$, existe un abierto $U\subseteq M$ con $p\in U$ tal que la restricción $$X|_U:U\to TM$$ es suave.
>
>Este primer paso no es especial de campos vectoriales: vale para cualquier mapa entre variedades. Lo específico del caso de campos vectoriales aparece cuando usamos que $X$ es una sección de $\pi:TM\to M$, es decir, $$\pi\circ X=\operatorname{id}_M.$$
>
>Entonces, si tomamos una carta suave $(U,\varphi=(x^1,\ldots,x^n))$ de $M$, se tiene automáticamente $$X(U)\subseteq \pi^{-1}(U),$$ y podemos usar la carta inducida del fibrado tangente $$\widetilde\varphi:\pi^{-1}(U)\to\varphi(U)\times\mathbb R^n.$$
>
>En esa carta, si escribimos $$X_q=X^i(q)\frac{\partial}{\partial x^i}\bigg|_q,$$ entonces la representación local de $X|_U$ es $$\widetilde\varphi\circ X\circ\varphi^{-1}(u)=\left(u^1,\ldots,u^n,X^1\circ\varphi^{-1}(u),\ldots,X^n\circ\varphi^{-1}(u)\right).$$
>
>Por lo tanto, probar que $X|_U$ es suave equivale a probar que las funciones coordenadas $$X^i:U\to\mathbb R$$ son suaves.

^e32b2f



