# Subvariedades: factorización e incrustadas

>[!Proposition] Existencia de cartas dado diferenciales
>Sea $M$ variedad suave de dimensión $m$ y sea $k\ge m$. Si $$\{y_1,\ldots,y_k\}$$ es un conjunto de funciones suaves definidas en un abierto $U$ de $M$ en $p$ tal que $$\{(dy_1)_p,\ldots,(dy_k)_p\}$$ generan $T_p^\ast M$, entonces existe un subconjunto $$\{i_1,\ldots,i_m\}\subseteq\{1,\ldots,k\}$$ tal que $$\psi=(y_{i_1},\ldots,y_{i_m})$$ define una carta suave en algún abierto de $p$.
>
>>[!Proof]-
>>1. Como $\{(dy_j)_p:j\in\{1,\ldots,k\}\}$ genera $T_p^\ast M$, entonces contiene una base $$\{(dy_{i_1})_p,\ldots,(dy_{i_m})_p\}$$ de $T_p^\ast M$.
>>2. Por [[GS - Teo10#^2b23b2]], la aplicación $$\psi=(y_{i_1},\ldots,y_{i_m})$$ define una carta suave en cierto abierto de $p$.

^49431b

>[!Corollary]
>Sean $M$ y $N$ variedades suaves de dimensión $m$ y $n$, respectivamente. Sea $$F:M\to N$$ suave y supongamos que $$(dF)_p:T_pM\to T_{F(p)}N$$ es inyectiva, y por tanto $m\le n$. (Osea $F$ es inmersion) 
>Si $(V,\varphi=(x_1,\ldots,x_n))$ es una carta suave de $N$ en $F(p)$, entonces existen $$i_1,\ldots,i_m\in\{1,\ldots,n\}$$ tales que $$\psi=(x_{i_1}\circ F,\ldots,x_{i_m}\circ F)$$ define una carta suave de $M$ en cierto abierto de $p$.
>
>>[!Proof]-
>>1. Para usar el corolario anterior, alcanza con ver que $$\{d(x_1\circ F)_p,\ldots,d(x_n\circ F)_p\}$$ genera $T_p^\ast M$.
>>2. Como $$(dF)_p:T_pM\to T_{F(p)}N$$ es inyectiva, entonces $$(dF)_p^\ast:T_{F(p)}^\ast N\to T_p^\ast M$$ es sobreyectiva.
>>3. Como $(V,\varphi=(x_1,\ldots,x_n))$ es una carta suave de $N$ en $F(p)$ sucede que $$\left\{(dx_1)_{F(p)},\ldots,(dx_n)_{F(p)}\right\}$$ es base de $T_{F(p)}^\ast N$, sus imágenes por $(dF)_p^\ast$ generan $T_p^\ast M$.
>>4. Pero $$(dF)_p^\ast\big((dx_i)_{F(p)}\big)=d(x_i\circ F)_p.$$ Luego los $d(x_i\circ F)_p$ generan $T_p^\ast M$, como queríamos.

^c4d494

## Lema de factorización MUY IMPORTANTE

>[!Remark] Sobre restriccion codominio
>Tenemos la siguiente situación:
>
>- $M,N$ y $P$ son variedades suaves.
>- $\iota:P\to N$ es una subvariedad de $N$, no necesariamente incrustada.
>- $F:M\to N$ es una función suave con $$F(M)\subseteq P.$$
>
>Se quiere restringir el codominio de $F$ a $P$, es decir, preguntar cuándo existe una función suave $$\widehat F:M\to P$$ tal que $$F=i\circ\widehat F.$$
>
>En general no es cierto que restringir el codominio nos deje automáticamente una función suave.

>[!Example] Ejemplo donde co-restringir no da suave
>Consideremos el ocho. Tenemos $$f:\mathbb R\to\mathbb R^2,\qquad t\mapsto \sin t(\cos t,1),$$ ![[Pasted image 20260429114226.png]] 
>Tomemos $M=(\text{Ocho},f^{-1}|_{(0,2\pi)})$ y $N=\mathbb{R}^2.$ También tomamos $P=(\text{Ocho},f^{-1}|_{(-\pi,\pi)})$ y $F=i:M\to N.$
>Claramente la imagen de $F$ es el conjunto dado, en particular cae en $P$.  
>La restricción del codominio de $F$ a $P$, $$\widehat{F}:(\text{Ocho},f^{-1}|_{(0,2\pi)})\to (\text{Ocho},f^{-1}|_{(-\pi,\pi)})$$ es la función identidad, $\widehat F=\operatorname{Id}$. (Que $\widehat{F}=\operatorname{Id}$ sale similar a [[GS - Teo9#^8ed2bd]] creo, chequear)  
>Pero la identidad no puede ser continua, por que las topologias son distintas y no compatibles o usando sucesiones (Similarmente podemos afirmar que son subvariedades de $\mathbb{R}^{2}$ no equivalentes) 

>[!Proposition] Lema de factorizacion
>Sea $F:M\rightarrow N$ suave. Y sea $(P,g)$ subvariedad de $N$ tal que $F(M)\subseteq g(P)$.
>Ademas sea $\widehat{F}:M\rightarrow P$ la funcion $\widehat{F}(x)=y$ si $F(x)=g(y)$ la cual es la unica funcion de $M$ en $P$ que hace conmutar el diagrama
> ![[Pasted image 20260429160319.png]]
>Entonces si $\widehat{F}$ es continua es suave 
>
>>[!Proof]-
>>1. Sea $p\in M$ y veamos que $\widehat F$ es suave en un entorno de $p$.
>>2. Sea $q=\widehat F(p)$, es decir, $q$ es el único elemento de $P$ tal que $$F(p)=g(q).$$
>>3. Sea $(V,\psi=(y_1,\ldots,y_n))$ una carta suave de $N$ alrededor de $F(p)$.
>>4. Como $g:P\to N$ es subvariedad, tenemos $$(dg)_q:T_qP\to T_{g(q)}N$$ es inyectiva, y por [[GS - Teo11#^c4d494]], existe un entorno $W$ de $q$ e índices $i_1,\ldots,i_k\in\{1,\ldots,n\}$, con $k=\dim P$, tal que $$(W,\varphi=(y_{i_1}\circ g,\ldots,y_{i_k}\circ g))$$ es carta suave de $P$.
>>5. Sea $$\pi:\mathbb R^n\to\mathbb R^k,\qquad (s_1,\ldots,s_n)\mapsto (s_{i_1},\ldots,s_{i_k}),$$ la cual es suave.
>>6. La ventaja de introducir esta función es que podemos expresar la carta $(W,\varphi)$ como $$(W,\pi\circ\psi\circ g).$$
>>7. Como $\widehat F$ es continua, tenemos $$U=\widehat F^{-1}(W)$$ es un abierto de $M$ que contiene a $p$.
>>8. Para ver que $\widehat{F}$ es suave en $p$ alcanza ver que $\widehat{F}|_{U}$ es suave y para esto componemos con la carta $\varphi$ (basta componer solo a un lado por que si vemos eso luego dada carta $\psi$ tendremos que $\varphi\circ\widehat{F}|_{U}\circ\psi$ es composicion de suaves) $$\varphi\circ\widehat{F}|_{U}=\pi\circ\psi\circ g\circ\widehat{F}|_{U}=\pi\circ\psi\circ F|_{U}$$ esto ultimo vale por que $g(\widehat{F}|_{U}(x))=g(y)=F(x)$ por definicion
>>9. $\pi$ es suave por definicion $\psi\circ F|_{U}$ es suave por que $F$ entonces $\varphi\circ\widehat{F}|_{U}$ resulta suave. Luego $\widehat{F}$ es suave     

^1258d0

>[!Remark]
>Tenemos visto que restringir el codominio es peligroso para justificar que una función es suave.
>
>En la práctica, la proposición anterior es una gran herramienta para justificar suavidad de una función $$\widehat F:M\to P$$ si $P$ está metida como una variedad ambiente $N$ y la función $$F:M\to N$$ que se obtiene al componer con la inclusión es más fácil de estudiar.

>[!Proposition] Corestringir a un subespacio con topología heredada preserva continuidad
>Sea $F:M\to N$ continua y sea $A\subseteq N$ con la topología heredada de $N$. Si $F(M)\subseteq A$, entonces la corestricción $$F_A:M\to A,\qquad F_A(x)=F(x)$$ es continua.
>
>>[!Proof]-
>>10. Sea $W\subseteq A$ abierto.
>>11. Como $A$ tiene la topología heredada de $N$, existe un abierto $V\subseteq N$ tal que $$W=A\cap V.$$
>>12. Queremos probar que $F_A^{-1}(W)$ es abierto en $M$.
>>13. Tenemos $$F_A^{-1}(W)=F_A^{-1}(A\cap V).$$
>>14. Como $F_A(M)\subseteq A$, para todo $x\in M$ se tiene $$F_A(x)\in A.$$
>>15. Entonces $$F_A(x)\in A\cap V \iff F_A(x)\in V.$$
>>16. Como $F_A(x)=F(x)$, se sigue que $$F_A^{-1}(A\cap V)=F^{-1}(V).$$
>>17. Por lo tanto $$F_A^{-1}(W)=F^{-1}(V).$$
>>18. Como $F:M\to N$ es continua y $V\subseteq N$ es abierto, entonces $F^{-1}(V)$ es abierto en $M$.
>>19. Luego $F_A^{-1}(W)$ es abierto en $M$.
>>20. Como esto vale para todo abierto $W\subseteq A$, concluimos que $F_A:M\to A$ es continua.

>[!Corollary] Lema de factorización para subvariedades incrustadas
>Sean $M,N,P$ variedades suaves. Sea $(P,g)$ subvariedad **incrustada** de $N$, es decir, $(P,g)$ es subvariedad y $g$ es un homeomorfismo entre $P$ y $g(P)$ con la topología heredada de $N$.
>Sea $F:M\to N$ suave tal que $F(M)\subseteq g(P)$. Entonces la única función $\widehat F:M\to P$ que hace conmutar el diagrama
>![[Pasted image 20260429171650.png]]
>es continua (por lo tanto) y es suave.
>
>>[!Proof]-
>>1. Como $F(M)\subseteq g(P)$, para cada $x\in M$ existe un único $y\in P$ tal que $$F(x)=g(y).$$
>>2. Definimos $$\widehat F:M\to P,\qquad \widehat F(x)=y \iff F(x)=g(y).$$
>>3. Entonces, por definición, $$g\circ \widehat F=F.$$
>>4. Como $(P,g)$ es una subvariedad incrustada, la aplicación $$g:P\to g(P)$$ es un homeomorfismo, donde $g(P)$ tiene la topología heredada de $N$.
>>5. Como $F:M\to N$ es suave, en particular es continua.
>>6. Como $F(M)\subseteq g(P)$, podemos mirar $F$ como una función $$F:M\to g(P).$$ pero ahora esta función sigue siendo continua porque $g(P)$ tiene la topología heredada de $N$.
>>7. Luego $$\widehat F=g^{-1}\circ F,$$ con $g^{-1}:g(P)\to P$ es continua (Por ser $g$ homeo) .
>>8. Por lo tanto $\widehat F$ es continua.
>>9. Por el lema de factorización, si $\widehat F$ es continua entonces $\widehat F$ es suave.
>>10. Luego $$\widehat F:M\to P$$ es suave.

^300685

>[!Remark]
>Supongamos que $(A,i)$ es subvariedad de $M$, con $i$ la inclusión, **ojo: no necesariamente incrustada**.
>Como $i$ es suave, en particular continua, entonces si $U$ es abierto de $M$, tenemos $$i^{-1}(U)=U\cap A$$ es abierto de $A$.
>Por tanto, la topología que trae $A$, por ser variedad, es posiblemente más fina que su topología heredada del ambiente $M$.
>Un ejemplo es el ocho $\left(\text{ocho},f|_{(0,2\pi)}^{-1}\right)$, con $f:\mathbb R\to\mathbb R^2$, $$f(t)=\sin(t)(\cos(t),1).$$
>El conjunto $$I=f\left(\frac{\pi}{2},\frac{3\pi}{2}\right)$$ es un abierto de esta variedad por la topologia que le damos que es la inducida por el homeo $f|_{(0,2\pi)}$, pero no puede obtenerse como un abierto relativo del ocho respecto a la topología de $\mathbb R^2$.
>![[Pasted image 20260429210808.png]]
>Notemos que en este caso. Los abiertos de la topologia relativa, si estan en la topologia dada por el homeo, pero ademas hay otros, como el ejemplo que di recien, a eso se refiere con que puede ser mas fina.

^a7e6ec

## Unicidad de subvariedad dada topologia

>[!Proposition]
>Sea $N$ variedad suave y sea $A\subseteq N$. Supongamos que $A$ tiene una topología $\tau$ no necesariamente la topología relativa.
>Entonces existe a lo sumo una estructura de variedad diferenciable sobre $A$ compatible con $\tau$ tal que $$(A,i)$$ es subvariedad, donde $$i:A\to N$$ es la inclusión. (De hecho podria no haber ninguna) 
>
>>[!Proof]-
>>1. Sean $\mathcal F_1,\mathcal F_2$ dos estructuras de variedad diferenciable sobre $A$ compatibles con la topología $\tau$.
>>2. Para ver que son iguales, alcanza con ver que $$\operatorname{Id}:(A,\mathcal F_1)\to (A,\mathcal F_2)$$ $$\operatorname{Id}:(A,\mathcal F_2)\to (A,\mathcal F_1)$$ es difeomorfismo.
>>3. Usemos el lema de factorizacion
>>![[Pasted image 20260429215527.png]]
>>4. Como $F=i$, es claro que la (unica) $\widehat{F}$ que cumple [[GS - Teo11#^1258d0]] es $$\widehat F=\operatorname{Id}:(A,\mathcal F_1)\to(A,\mathcal F_2)$$  
>>5. Como la topología que tienen $(A,\mathcal F_1)$ y $(A,\mathcal F_2)$ es la misma, tenemos que $\widehat F=\operatorname{Id}$ es continua, y por tanto $\widehat F$ es suave.  
>>6. Cambiando los roles, también tenemos que $\operatorname{Id}:(A,\mathcal F_2)\to(A,\mathcal F_1)$ es suave.
>>7. Por tanto, $\operatorname{Id}:(A,\mathcal F_1)\to(A,\mathcal F_2)$ es un difeomorfismo, y entonces $\mathcal F_1=\mathcal F_2$

^1933b9

>[!Remark]
>Notar que por lo que dijimos en [[GS - Teo11#^a7e6ec]] entonces para que $\iota: (A,\tau)\rightarrow (N,\tilde{\tau})$ sea continua automaticamente necesitamos que $\tau$ sea un refinamiento de la $\tilde{\tau}$ relativa a $A$. Osea que cualquier abierto de $\tilde{\tau}$ intersecado con $A$ sea abierto de $A$. Al fin y al cabo $\iota ^{-1}(O)=O\cap A$ para cualquier $O \in  \tilde{\tau}$

>[!Example] Ejemplo donde no hay ninguna
>Si consideramos la variedad ocho osea $(O,f^{-1}|_{(0,2\pi)})$ con $f(t)=(\frac{\sin 2t}{t},\sin t)$ con su topologia $\tau_{1}$  dada por el homemorfismo $f$.
>Y luego consideramos el mismo conjunto $O$ pero con la topologia $\tau_{2}$ dada por el homeomorfismo $f|_{(-\pi,\pi)}$ 
>Luego $$\iota : (O,\tau_{1})\rightarrow (O,\tau_{2})$$ nunca va a ser continua por que hay abiertos en $\tau_{2}$ que no lo son en $\tau_{1}$
>Y esto es independientemente de que estructura le demos a $(O,\tau_{2})$. Por que el punto es que como ya $\iota$ no podra ser continua, tampoco va a ser suave 

>[!Example] Parece pero no es contra ejemplo
>Recordemos que las cartas $(\text{ocho},f^{-1}|_{(0,2\pi)})$ y $(\text{ocho},f^{-1}|_{(-\pi,\pi)})$ nos dan estructuras diferenciables del ocho y luego $(\text{ocho},\iota)$ las hacen subvariedad de $\mathbb{R}^{2}$
>Pero esto no contradice [[GS - Teo11#^1933b9]] por que estos dos estructuras que le damos a los ochos tienen distintas topologias, que son las heredadas del homeomorfismo $f$.
>![[Pasted image 20260429220320.png]]
>son abiertos de cada topologia que no esta en la otra

## Unicidad de estructura tal que es incrustada

>[!Corollary]
>Si $A$ tiene la topología relativa de $N$ y si esta estructura admite una estructura de variedad diferenciable tal que $(A,i)$ es subvariedad de $N$, entonces tal estructura es única y $(A,i)$ es una incrustación.

>[!Example]
>Vimos que $$i:S^1\to\mathbb R^2$$ es una incrustación.
>
>Entonces la estructura de variedad diferencial de $S^2$ es la única estructura de variedad diferenciable sobre $S^{2}$ compatible con la topología heredada en $S^{2}$ de $\mathbb R^3$ que la vuelve subvariedad


