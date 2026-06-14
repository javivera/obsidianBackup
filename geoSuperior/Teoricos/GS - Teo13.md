
>[!Proposition] Inmersiones son localmente incrustaciones
>Sea $F:M\to N$ una inmersion y sea $p\in M$. Entonces existe una carta suave cubica $(V,\psi)$ centrada en $F(p)$, y un entorno $U$ de $p$ tal que $F|_U$ es inyectiva y $F(U)=R(0,\ldots,0)$, la rebanada cero de $(V,\psi)$. En particular, $(U,F|_U)$ se vuelve una subvariedad incrustada de $N$.
>>[!Proof]-
>>1. Sea $m=\dim M$ y $n=\dim N$. Luego $m\le n$.
>>2. Usamos la forma local de una inmersion: existen cartas $(\widetilde U,\widetilde\varphi)$ centrada en $p$ y $(\widetilde V,\psi)$ centrada en $F(p)$ t.q. $F(\widetilde U)\subset\widetilde V$ y $$\psi\circ F\circ\widetilde\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0)$$
>>3. Este teorema nos exige que $F(\widetilde U)$ sea exactamente una rebanada de $(\widetilde V,\psi)$. Con lo de arriba, solo podemos garantizar que $F(\widetilde U)$ esta contenido en una rebanada.
>>4. Achicamos $\widetilde U$ y al mismo tiempo $\widetilde V$. Como las cajitas abiertas son base de la topologia de $\mathbb R^m$ y $\mathbb R^n$, tomamos $\varepsilon>0$ t.q. $C_\varepsilon^m(0)\subset\widetilde\varphi(\widetilde U)$ y $C_\varepsilon^n(0)\subset\psi(\widetilde V)$.
>>5. Hacemos $U=\widetilde\varphi^{-1}(C_\varepsilon^m(0))$ y $V=\psi^{-1}(C_\varepsilon^n(0))$.
>>6. Primero, notemos que $F(U)\subset V$, que equivale a ver $\psi\circ F(U)\subset\psi(V)=C_\varepsilon^n(0)$.
>>7. Si $U=\widetilde\varphi^{-1}(C_\varepsilon^m(0))$, luego $\psi\circ F(U)=\psi\circ F\circ\widetilde\varphi^{-1}(C_\varepsilon^m(0))=\{(x_1,\ldots,x_m,0,\ldots,0):|x_i|<\varepsilon\}\subset C_\varepsilon^n(0)$.
>>8. Por ultimo, $F(U)=R(0,\ldots,0)$ de $(V,\psi)$.
>>9. Claramente $F(U)\subset R(0,\ldots,0)$, pues $R(0,\ldots,0)=\psi^{-1}\{(x_1,\ldots,x_m)\in C_\varepsilon^n:x_{m+1}=0,\ldots,x_n=0\}$.
>>10. Para la contencion contraria, si $q\in R(0,\ldots,0)$, esto quiere decir $\psi(q)=(x_1,\ldots,x_m)\in C_\varepsilon^n(0)$ con $|x_1|<\varepsilon,\ldots,|x_m|<\varepsilon$ y $x_{m+1}=0,\ldots,x_n=0$.
>>11. Se sigue que $(x_1,\ldots,x_m)\in C_\varepsilon^m(0)$ y $\eta=\widetilde\varphi^{-1}(x_1,\ldots,x_m)\in U$.
>>12. Cumple que $\eta\in U=\widetilde\varphi^{-1}(C_\varepsilon^m(0))$ y $F(\eta)=q$.
>>13. Asi pues $F(U)=R(0,\ldots,0)$.
>>14. Por ultimo, $(U,F|_U)$ es subvariedad incrustada, pues $F$ es inmersion, y como $\psi\circ F\circ\widetilde\varphi^{-1}$ es inyectiva en $\varphi(U)$, entonces $F$ es inyectiva en $U$.
>>15. Falta ver que $F|_U$ es un homeo entre $U$ y $F(U)=R(0,\ldots,0)$, donde $R(0,\ldots,0)$ tiene la topologia relativa de $N$, que es lo mismo que la topologia relativa con respecto al abierto $V$.
>>16. Por tanto, ambas estructuras deben coincidir y esto implica que $F|_U:U\subset M\to R\subset N$ es incrustacion.

^d6bd60

>[!Corollary] SÚPER útil: caso incrustado
>Sea $F:M\to N$ una incrustación y sea $p\in M$. Entonces existe una carta cúbica suave $(V,\psi)$ de $N$ centrada en $F(p)$ y un entorno $U$ de $p$ tal que $F(U)=F(M)\cap V$ es exactamente la rebanada cero de $(V,\psi)$.
>![[Pasted image 20260505200757.png]]
>
>>[!Proof]-
>>1. Por el resultado anterior [[GS - Teo13#^d6bd60]], existen cartas cúbicas $(U,\varphi)$ y $(V,\psi)$ centradas en $p$ y $F(p)$ respectivamente, tales que $F(U)$ es la rebanada cero de $V$
>>2. Por otro lado, $F$ es incrustación. Es decir, $F$ es homeomorfismo entre $M$ y $F(M)$, donde $F(M)$ tiene la topología relativa.
>>3. Ahora como $U\subseteq M$ es abierto $F(U)$ debera ser abierto relativo. Por tanto, existe $W$ abierto en $N$ tal que $$F(U)=F(M)\cap W.$$
>>4. Consideremos el abierto $W\cap V$ y restrinjamos la carta $\psi$ a $W\cap V$. 
>>![[Pasted image 20260505203810.png]]
>>5. Como $$F(p)\in W\cap V,$$ entonces $\psi(W\cap V)$ tiene al $0$ y es abierto de $\mathbb{R}^n$. (Por que $\psi$ es homeomorfismo) 
>>6. Como los cubos abiertos generan la topología de $\mathbb{R}^n$, existe $\varepsilon>0$ tal que $$C_\varepsilon^n(0)\subseteq \psi(W\cap V).$$
>>7. Sea $$\widehat V=\psi^{-1}\left(C_\varepsilon^n(0)\right).$$
>>8. Consideremos las rebanadas cero $$R^{\widehat V}(0,\ldots,0)=\left\{q\in \widehat V:x_{m+1}(q)=0,\ldots,x_n(q)=0\right\}$$ y $$R^V(0,\ldots,0)=\left\{q\in V:x_{m+1}(q)=0,\ldots,x_n(q)=0\right\}.$$
>>9. Claramente, $$R^{\widehat V}(0,\ldots,0)=R^V(0,\ldots,0)\cap \widehat V.$$
>>10. Ahora, como $F(U)=R^{V}(0,\ldots,0)$ tenemos $$F(U)\cap W=R^V(0,\ldots,0)\cap W$$  por lo tanto tenemos que $$F(U)\cap W\cap \widehat V=R^V(0,\ldots,0)\cap \widehat V.$$
>>11. Luego como $\widehat V\subseteq W$, $$F(U)\cap \widehat V=R^{\widehat V}(0,\ldots,0).$$
>>12. Y recordamos $F(U)=F(M)\cap W.$ entonces $$F(U)\cap \widehat{V}=F(M)\cap W\cap \widehat{V}=F(M)\cap \widehat{V}.$$ 
>>13. Así, tomando la carta restringida $$(\widehat V,\psi|_{\widehat V}),$$ obtenemos una carta de $N$ centrada en $F(p)$ tal que $F(M)\cap \widehat V$ es la rebanada cero de $\widehat V$

^8f3892

>[!Remark]
>La idea de este ultimo corolario es que, como $F$ es incrustación, su imagen no solo se ve localmente como una rebanada alrededor de cada punto de $F(M)$, sino que esa rebanada coincide exactamente con $F(M)$ dentro de un entorno abierto de $N$.

>[!Remark]- Otra forma de hacer la parte de subvariedad
>Otra forma para hacer esta ultima parte, es haciendo y usando el siguiente ejercicio del Werner
>![[Pasted image 20260503221047.png]]
>pues ya sabemos que las rebanadas son subvariedades incrustadas de $N$ y por otro lado al ser $(U,F|_{U})$ subvariedad inmersa ($F$ ya es inmersion por hipotesis y $F|_{U}$ es inyectiva) entonces la rebanada que es igual $F(U)$ tiene otra estructura de variedad diferenciable que la hace subvariedad inmersa de $N$ y es la inducida por $(U,F|_{U})$. Por lo tanto ambas estructuras deben coincidir y entonces $$F|_{U}:U\subseteq M\rightarrow R\subseteq N$$ es incrustada  

>[!Example] El ocho
>Tenemos la subvariedad inmersa $((0,2\pi),f|_{(0,2\pi)})$, con $f:\mathbb R\to\mathbb R$, $f(t)=\operatorname{sen}(\cos t,1)$. 
>Ya sabemos que $((0,2\pi),f|_{(0,2\pi)})$ no es subvariedad incrustada.
>El teorema anterior nos garantiza que hay un abierto $U\subseteq (0,2\pi)$ de $p=\pi$, donde $f|_{(0,2\pi)}$ se vuelve incrustacion; 
>Por ejemplo $U=(\pi/2,3\pi/2)$.
>![[Pasted image 20260503221526.png]]

>[!Example] Consultar este ejempo
>Dado $f:\mathbb{R}\rightarrow\mathbb{R}^{2}$ con $p\mapsto (\cos p,\sin p)$. Con $p=0$ entonces $f(p)=(1,0)$  
>![[Pasted image 20260503222403.png]]

^078822

# Teorema de la Subvariedad implicita

>[!Remark]
>Veamos una forma de "producir" variedades suaves.

>[!Definition] Conjunto de nivel
>Sea $F:M\to N$ funcion suave y sea $c$ cualquier punto de $N$. El conjunto $F^{-1}(c)$ se llama conjunto de nivel de $F$.

>[!Theorem] Conjuntos de nivel de funciones de rango constante
>Sean $M$ y $N$ variedades suaves, y sea $F:M\to N$ una funcion suave de rango constante $r$. Si el conjunto de nivel $P=F^{-1}(c)$ es no vacio, entonces dotando a $P$ de la topologia heredada de $M$, este tiene una estructura de variedad diferenciable que lo vuelve subvariedad incrustada de $M$ y de dimension $\dim(M)-r$.
>>[!Proof]-
>>1. Sea $m=\dim M$ y sea $k=m-r$.
>>2. El conjunto $P$ con la topologia del subespacio es $T_2$ y $N_2$. Para ver que es localmente Euclideo, construyamos un atlas.
>>3. Sea $p\in P$. Por la forma local de una funcion de rango constante, existen cartas $$(U,\varphi=(x_1,\ldots,x_m))$$ de $M$ centrada en $p$ y $(W,\psi)$ carta de $F(p)=c$, centrada en $c$, t.q. $F(U)\subset W$ y $$\psi\circ F\circ\varphi^{-1}(x_1,\ldots,x_r,x_{r+1},\ldots,x_m)=(x_1,\ldots,x_r,0,\ldots,0)$$
>>4. Como $\psi(c)=(0,\ldots,0)$, tenemos $$\begin{align*}U\cap P &=\{q\in U:F(q)=c\}\\ &=\{q\in U:\psi(F(q))=(0,\ldots,0)\}\\&=\{q\in U:\psi\circ F\circ \varphi^{-1}(\varphi(q))=(0,\ldots,0)\}\\&=\{q\in U:\psi\circ F\circ \varphi^{-1}(x_1(q),\ldots,x_r(q),x_{r+1}(q),\ldots,x_m(q))=(0,\ldots,0)\}\\&=\{q\in U:(x_1(q),\ldots,x_r(q),\underbrace{0,\ldots,0}_{n-r})=(0,\ldots,0)\}\\&=\{q\in U:x_1(q)=\cdots=x_r(q)=0\}.\end{align*}$$  
>>5. Es decir, $U\cap P$ es la rebanada de $U$ dejando el resto de coordenadas "libres" para los puntos que viven en $U\cap P$.
>>6. Esto nos motiva a definir $$\pi:\mathbb R^m\to\mathbb R^k,\qquad(x_1,\ldots,x_r,x_{r+1},\ldots,x_m)\mapsto(x_{r+1},\ldots,x_m)$$
>>7. Sea $V=U\cap P$ un abierto de $P$, con la topologia relativa.
>>8. Sea $$\widehat\varphi=\pi\circ\varphi|_V:V\subset P\to\mathbb R^k$$, que va a ser candidato a carta.
>>9. Y sea $\hat{V}=\hat{\varphi}(V)$. Veamos que $\hat{V}$ es un abierto de $\mathbb{R}^{k}$ y $\widehat\varphi$ es un homeo entre $V$ y $\widehat V$.
>>10. Ya vimos que $\varphi(V)=\varphi(U\cap P)=\{(s_1,\ldots,s_m)\in\varphi(U):s_1=0,\ldots,s_r=0\}$. Es decir, $\varphi(V)$ es la interseccion de $U$ con la rebanada de $\mathbb R^m$ definida por $R=\{(s_1,\ldots,s_m)\in\mathbb R^m:s_1=0,\ldots,s_r=0\}$.
>>11. Entonces $\varphi(V)=\varphi(U)\cap R$.
>>12. Como $$\pi_R:R\subset\mathbb R^m\to\mathbb R^k$$ es un homeomorfismo (osea es abierta), si dotamos a $R$ con la topologia relativa (topologia de $\mathbb R^m$, equivalente topologia producto $\mathbb R^r\times\mathbb R^k$), y dado que $\varphi(U)\cap R$ es un abierto relativo de $R$, entonces tenemos $\widehat V=\pi\circ\varphi(V)$ es abierto de $\mathbb R^k$.
>>13. Y ademas $$\widehat\varphi:V\subset P\to\widehat V\subset\mathbb R^k$$ es un homeo entre $V$ y $\widehat V$, pues la inversa de $\widehat\varphi$ es $$\widehat\varphi^{-1}=\varphi^{-1}\circ j|_{\widehat V}$$donde $j:\mathbb R^k\to\mathbb R^m$ es $(s_1,\ldots,s_k)\mapsto(0,\ldots,0,s_1,\ldots,s_k)$.
>>14. Con esto tenemos que $P$ es localmente euclideo
>>15. Veamos que sus cartas son suavemente compatibles. Sean $(V_{1},\hat{\varphi}_{1})$ y $(V_{2},\hat{\varphi}_{2})$ dos cartas de $P$ entonces quiero ver que $$\widehat{\varphi}_{2}\circ \hat{\varphi}_{1}^{-1}:\widehat{\varphi}_{1}(V_{1}\cap V_{2})\subseteq \mathbb{R}^{k}\rightarrow \widehat{\varphi}_{2}(V_{1}\cap V_{2})\subseteq \mathbb{R}^{k}$$ es suave   
>>16. Para eso notamos que $$\hat{\varphi}_{2}\circ \hat{\varphi}_{1}^{-1}=\pi\circ(\varphi_{2}\circ\varphi_{1}^{-1})\circ j$$ que es composicion de funciones suaves (por que son cartas y proyeccion y recordamos que corestringir no genera problema con cartas)
>>17. Por ultimo veamos que $\iota:P\rightarrow M$ es suave e inmersion.
>>18. Usando las cartas de arriba $$f=\varphi\circ\iota\circ\hat{\varphi}^{-1}:\widehat{V}\subseteq \mathbb{R}^{k}\rightarrow\mathbb{R}^{m}$$ esta dada por $f(s_{1},\ldots,s_{k})=(0,\ldots,0,s_{1},\ldots,s_{k})$ que es una funcion suave e inmersion lo que implica que $\iota$ es suave 
>>19. Y tambien implica que $f$ es inmersion pues $\varphi$ y $\hat{\varphi}^{-1}$ son difeomorfismos (osea sus diferenciales son isomorfimos) y $df$ por definicion va a ser inyectiva 

^210dde

>[!Corollary] Submersiones y conjuntos de nivel
>Sean $M$ y $N$ variedades suaves y $F:M\to N$ una submersion suave. Entonces cada conjunto de nivel no vacio de $F$ es una subvariedad incrustada de $M$ de dimension $\dim M-\dim N$.

^784cb7

## Ejemplos de aplicacion

>[!Example]- Ejemplo de aplicacion, esfera
>La esfera es subvariedad incrustada de $\mathbb{R}^{n+1}\setminus\{ 0 \}$ 
>>[!Proof]
>>1. Sea $$F:\mathbb R^{n+1}\setminus\{0\}\to\mathbb R$$dada por $$(s_1,\ldots,s_{n+1})\mapsto\|s\|^2-1=s_1^2+\cdots+s_{n+1}^2-1$$luego tenemos $S^n=F^{-1}(0)$. 
>>2. Notemos que $F$ es de rango constante e igual a $1$ por que dado $p\in\mathbb R^{n+1}\setminus\{0\}$. $$(dF)_p v=\langle(\nabla F)(p),v\rangle=\langle(2p_1,\ldots,2p_{n+1}),v\rangle$$
>>3. Luego tomando $v=p$, tenemos $(dF)_p p=2\|p\|^2\neq0$. Entonces $(dF)_{p}$ no es la aplicacion nula, por lo tanto tiene rango por lo menos $1$ entonces tiene rango $1$
>>4. Como esto vale para cualquier $p$ podemos decir que $F$ tiene rango constante $1$
>>5. Entonces se puede aplicar [[GS - Teo13#^210dde]]

>[!Remark]- Recordar
>Notemos que si $U\subseteq M$ abierto con $M$ variedad entonces para $p\in U$ la inclusion $$\iota: U\rightarrow M$$ induce un isomorfismo $$(d\iota)_{p}:T_{p}U\rightarrow T_{p}M$$   

^234f1c

>[!Example] Otro ejemplo de aplicacion DUDA La parte de identificacion
>Recordemos el subconjunto de $M(n,\mathbb{R})$ (Matrices): $$GL(n,\mathbb{R})=\{X\in M(n,\mathbb{R}):X\text{ es invertible}\}$$
>Como $M(n,\mathbb{R})$ es variedad suave (por ser esp. vectorial) y $GL(n,\mathbb{R})$ es un abierto de $M(n,\mathbb{R})$, recordemos entonces que $GL(n,\mathbb{R})$ es variedad, que resulta grupo de Lie.
>Consideremos $$F=\det:GL(n,R)\to\mathbb R$$ y sea $SL(n,R)=\{X\in GL(n,R):\det X=1\}$, llamado el grupo especial lineal.
>Tenemos $SL(n,R)=F^{-1}(1)$. Veamos que es subvariedad incrustada de $GL(n,R)$. 
>>[!Proof]-
>>1. Por [[GS - Teo13#^234f1c]] y notando que $GL(n,\mathbb{R})\subseteq M(n,\mathbb{R})$ es abierto. Entonces puedo identificar $T_{X}GL(n,\mathbb{R})\cong T_{X}M(n,\mathbb{R})$ y por ser espacio vectorial $T_{X}M(n,\mathbb{R})\cong M(n,\mathbb{R})$  
>>2. Vimos en el practico que $$(d\det)_X Y=\langle(\nabla\det)_X,Y\rangle=\det(X)\operatorname{tr}(X^{-1}Y)$$ por definicion $X\in GL(n,\mathbb{R})$ e $Y\in T_{X}GL(n,\mathbb{R})$  
>>3. Para ver que $(d\det)_X$ es sobreyectiva, basta ver que no es nula. Por que entonces tendra rango al menos $1$ y por lo tanto tendra rango $1$ 
>>4. Por paso 1. podemos yomar $Y=X$, y mantenter la misma formula entonces $$(d\det)_X X=\det(X)\operatorname{tr}(I_n)=n\det(X)\neq0$$, pues $X\in GL(n,R)\subseteq M(n,\mathbb{R})\cong T_{X}GL(n,\mathbb{R})$.
>>5. Entonces como esto vale para cualquier $X$ podemos decir que $F$ tiene rango constante $1$
>>6. Luego $SL(n,R)$ es subvariedad incrustada de $GL(n,R)$, lo que implica ademas que es variedad suave.

^3ae198

>[!Remark] Estructura de grupo de Lie de $SL(n,R)$ DUDA
>Claramente $SL(n,R)$ es un grupo. Solo falta ver que $$SL(n,R)\times SL(n,R)\to SL(n,R) \qquad (g,h)\mapsto gh$$$$\operatorname{inv}:SL(n,R)\to SL(n,R)\qquad g\mapsto g^{-1}$$son suaves.
>Vemos mas adelante que solo necesitamos ver que son suaves como funciones en el ambiente; asi nos sirve muchisimo el lema de factorizacion.
>>[!Proof]-
>>1. Consideremos $$\tilde{i}=i\times i:SL(n,\mathbb{R})\times SL(n,\mathbb{R})\to GL(n,\mathbb{R})\times GL(n,\mathbb{R})\qquad (g,h)\mapsto(g,h)$$, que resulta suave, pues $SL(n,\mathbb{R})$ es subvariedad.
>>2. Como $GL(n,\mathbb{R})$ es grupo de Lie entonces $$m:GL(n,\mathbb{R})\times GL(n,\mathbb{R})\to GL(n,\mathbb{R})\qquad (g,h)\mapsto m(g,h)=g.h$$es suave. (Por que no cambiamos ningun codominio) 
>>3. Luego $$m\circ\tilde i:SL(n,\mathbb{R})\times SL(n,\mathbb{R})\to GL(n,\mathbb{R})$$ es suave.
>>4. Pero la imagen de $m\circ\tilde i$ cae en $SL(n,R)$, por ser subgrupo de $GL$. (Como estructura) **Por que como estructura?** creo que para aclarar que no es como subgrupo de Lie.. si no como estructura algebraica.. osea para $g,h\in SL(n,\mathbb{R})$ tenemos que $det(gh)=deg(g)det(h)=1$ entonces $gh\in SL(n,\mathbb{R})$ por lo tanto $m\circ \tilde{i}(g,h)=gh\in SL(n,\mathbb{R})$ mostrando que $Im(m\circ \tilde{i})\subseteq SL(n,\mathbb{R})$ 
>>5. Entonces tenemos el diagrama
>>![[Pasted image 20260504165253.png]]
>>6. Donde $*$ resulta el producto de $SL$, y como $SL$ es subvariedad incrustada, entonces $*$ es funcion suave por [[GS - Teo11#^300685]]

^04a3ee

## Punto regular y valor regular

>[!Definition] Punto regular y valor regular
>Dada $F:M\to N$ funcion suave, un punto $p\in M$ se dice punto regular de $F$ si $(dF)_p:T_pM\to T_{F(p)}N$ es sobreyectiva.
>Un punto $c$ en la imagen de $F$ se dice valor regular de $F$ si todo punto en $F^{-1}(c)$ es un punto regular.

>[!Exercise] Algebra 3
>Sea $F:M\to N$ funcion suave y sea $p\in M$.
>Si $$(dF)_p:T_pM\to T_{F(p)}N$$ es una transformacion lineal sobreyectiva, entonces existe un abierto de $M$ en $p$ tal que $F|_U$ es una submersion.

^1aee60

>[!Corollary] Conjunto de nivel con puntos regulares
>Sea $F:M\to N$ suave y $c\in\operatorname{Im}F$ tal que todo punto en el conjunto de nivel $F^{-1}(c)$ es un punto regular. Entonces $F^{-1}(c)$ es una subvariedad incrustada de $M$ de dimension $\dim M-\dim N$.
>>[!Proof]-  
>>1. Sea $p\in F^{-1}(c)$ como $c$ es valor regular de $F$, tenemos que $$(dF)_p:T_pM\to T_cN$$ es sobreyectiva.  
>>2. Por [[GS - Teo13#^1aee60]], existe un abierto $U_p\subseteq M$ con $p\in U_p$ tal que $$F|_{U_p}:U_p\to N$$ es una submersión.  
>>3. Como $c\in F(U_p)$ por el [[GS - Teo13#^784cb7]] aplicado a $F|_{U_p}$ se tiene que $(F|_{U_p})^{-1}(c)$ es una subvariedad incrustada de $U_p$ de dimensión $\dim M-\dim N$  
>>4. Pero $$(F|_{U_p})^{-1}(c)=F^{-1}(c)\cap U_p.$$  
>>5. Entonces, para cada $p\in F^{-1}(c)$ existe un entorno abierto $U_p$ tal que $F^{-1}(c)\cap U_p$ es una subvariedad incrustada de $U_p$ de dimensión $\dim M-\dim N.$  
>>6. Como ser subvariedad incrustada es una propiedad local, concluimos que $F^{-1}(c)$ es una subvariedad incrustada de $M$ de dimensión $\dim M-\dim N$

^3f8e58

>[!Remark]
>Notar que [[GS - Teo13#^3f8e58]] no pedimos rango constante. Pero pedimos que $c$ sea valor regular. Osea $F^{-1}(c)$ sea una conjunto de puntos regulares. Osea que la diferencial en esos puntos sea sobreyectiva. Con lo cual la diferencial en esos puntos va a tener rango constante 

>[!Exercise] MUY IMPORTANTE y lo veran en el practico.
>Sea $f:N\to Q$ una funcion diferenciable entre variedades diferenciables y sea $q\in Q$ un valor regular de $f$. Sea $M$ la subvariedad $f^{-1}\{q\}$ y sea $i:M\to N$ la inclusion.
>Mostrar que para todo $p\in M$ se cumple que $T_pM\simeq (di)_p(T_pM)=\operatorname{Ker}(df)_p$.