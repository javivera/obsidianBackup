>[!Definition] Variedad paralelizable
>Sea $M$ una variedad suave de dimensión $n$, y sea $U\subseteq M$ un abierto. Un conjunto de campos suaves $\{E_1,\dots,E_n\}$ sobre $U$ se dice un marco local suave si $$\{E_1|_p,\dots,E_n|_p\}$$ forma una base de $T_pM$ para todo $p\in U$. El marco se llama global si $U=M$.
>Una variedad suave se dice paralelizable si admite un marco global.

>[!Example] 
>$\mathbb{R}^{n}$ es paralelizable
>
>>[!Proof]-  
>>34. Consideremos la carta global estándar $\operatorname{Id}_{\mathbb R^n}:\mathbb R^n\to\mathbb R^n$.  
>>35. Definimos, para cada $i=1,\dots,n$, el campo vectorial $E_i=\frac{\partial}{\partial x_{i}}$.  
>>36. Es decir, para cada $p\in\mathbb R^n$,$$(E_i)_p=\frac{\partial}{\partial x_{i}}\bigg|_p\in T_p\mathbb R^n$$
>>37. Veamos que cada $E_i$ es suave. En la carta global estándar, las funciones coordenadas de $E_i$ son constantes: $E_i(p)=(0,\dots,0,1,0,\dots,0)$.  
>>38. Como las funciones constantes son suaves, cada $E_i$ es un campo vectorial suave sobre $\mathbb R^n$.  
>>39. Además, para cada $p\in\mathbb R^n$, los vectores $$\left\{\frac{\partial}{\partial x_{1}}\bigg|_p,\dots,\frac{\partial}{\partial x_{n}}\bigg|_p\right\}$$forman una base de $T_p\mathbb R^n$.  
>>40. Por lo tanto, $\{E_1,\dots,E_n\}$ es un marco global suave sobre $\mathbb R^n$.  
>>41. Concluimos que $\mathbb R^n$ es paralelizable.

>[!Example] 
>$S^{1}$ es paralelizable
>
>>[!Proof]-  
>>42. Pensamos $S^1$ como la subvariedad de $\mathbb R^2$ dada por $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$.  
>>43. Obviamente en $\mathbb{R}^{2}$ tenemos la carta canonica y la base del $T_{p}\mathbb{R}^{2}$ dada por esa carta $$\left\{ \frac{\partial}{\partial x}\bigg|_{p},\frac{\partial}{\partial y}\bigg|_{p} \right\}$$     
>>44. Como $\dim S^1=1$, alcanza construir un campo vectorial suave global que nunca se anule.  
>>45. Definimos $E:S^1\to TS^1$ por $E_{(x,y)}=(-y,x)$. (Osea $E(x,y)=((x,y),(-y,x))$ que esta en el fibrado tangente y luego lo identificamos como $E_{(x,y)}=(-y,x)$ [[GS - Teo15#^4e6c26]]) 
>>46. Notemos ademas que aca $(-y,x)$ son las coordenadas en la base del $T_{(x,y)}\mathbb{R}^{2}$  
>>47. Primero veamos que **$E_{(x,y)}$ es tangente a $S^1$**. Si $p=(x,y)\in S^1$, entonces $$T_pS^1=\{v\in\mathbb R^2:\langle v,p\rangle=0\}$$ esto es basicamente [[GS - 1er Parcial#^483e02]]   
>>48. Calculamos $\langle (-y,x),(x,y)\rangle=-yx+xy=0$.  
>>49. Por lo tanto, $E_p\in T_pS^1$ para todo $p\in S^1$.  
>>50. Ahora veamos que $E$ nunca se anula. Si $E_{(x,y)}=(-y,x)=(0,0)$, entonces $x=0$ e $y=0$.  
>>51. Pero $(0,0)\notin S^1$, porque $0^2+0^2\neq 1$.  
>>52. Luego $E_p\neq 0$ para todo $p\in S^1$.  
>>53. Además, $E$ es suave, porque sus componentes ambiente son $E(x,y)=(-y,x)$, que son funciones suaves en $x$ e $y$.  
>>54. Como $\dim S^1=1$, para cada $p\in S^1$, el conjunto $\{E_p\}$ forma una base de $T_pS^1$.  
>>55. Entonces $\{E\}$ es un marco global suave sobre $S^1$.  
>>56. Concluimos que $S^1$ es paralelizable. 
>>57. Aca al final en realidad creo deberia usar que $d\iota$ es isomorfismo con su imagen (por ser incrustacion) y en realidad deberia tomar $V_{p}=d\iota ^{-1}(E_{p})$ como los que forman una base para cada $p$ y quizas algo asi como $\{ V \}$ como marco global    

>[!Example]
>- Veremos más adelante que los grupos de Lie son paralelizables.
>- $S^2$ no es paralelizable; esto se relaciona con el teorema de la bola peluda.
>- Topología algebraica: $S^1$, $S^3$ y $S^7$ son las únicas esferas paralelizables.

## Extensión local de campos

>[!Theorem] Extensión local de campos
>Sea $f:M\to N$ una inmersión y sea $X\in\mathfrak X(M)$. Entonces, para todo $p\in M$, existen un abierto $U$ de $p$ en $M$, un abierto $V$ de $N$ en $f(p)$, con $f(U)\subseteq V$, y un campo suave $\widetilde X\in\mathfrak X(V)$ tal que
>$$\widetilde X_{f(q)}=(df)_qX_q,\qquad q\in U.$$
>
>Se dice que $\widetilde X$ es una extensión local de $df(X)$.
>
>>[!Proof]-
>>1. Recordemos que, por la forma local de una inmersión, existen cartas cúbicas $(U,\varphi=(x_1,\ldots,x_m))$ centrada en $p$ y $(V,\psi=(y_1,\ldots,y_n))$ centrada en $f(p)$ tales que $$\psi\circ f\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0).$$
>>2. Escribimos el campo $X$ en la carta de $M$ como $$X|_U=\sum_{k=1}^m a_k\frac{\partial}{\partial x_k},\qquad a_k\in C^\infty(U).$$
>>3. Si $q\in U$, entonces (ya lo probamos usando forma local [[GS - Pr4#^b71da3]]) $$(df)_q\left(\left.\frac{\partial}{\partial x_k}\right|_q\right)=\left.\frac{\partial}{\partial y_k}\right|_{f(q)},\qquad 1\le k\le m.$$
>>4. Por lo tanto, $$(df)_qX_q=\sum_{k=1}^m a_k(q)\left.\frac{\partial}{\partial y_k}\right|_{f(q)}$$
>>5. Necesitamos extender $a_{k}$ para eso definimos funciones suaves $A_k$ sobre $V$ (En realidad esta definido sobre $V'=V\cap\psi ^{-1}(\pi ^{-1}(\varphi(U)))$, pero abusamos de notacion para hacerlo mas legible, ver demo de [[GS - Pr4#^7d5d0b]] para mas detalle, notar que ademas $f(U)\subseteq V'$ con lo cual no hace falta cambiar $U$. Si no otra forma seria hacer [[Glosario#^fd9e9b]]) por $$A_k=\begin{cases}a_k\circ\varphi^{-1}\circ\pi\circ\psi,&1\le k\le m,\\0,&m<k\le n,\end{cases}$$donde $\pi:\mathbb R^n\to\mathbb R^m$ está dada por $\pi(y_1,\ldots,y_n)=(y_1,\ldots,y_m)$. 
>>6. Y notamos $A_{k}$ cumple que $$A_{k}\circ f=a_{k}\circ\varphi ^{-1}\circ\pi\circ\psi\circ f(\varphi ^{-1} \circ\varphi(p))=a_{k}\circ\varphi ^{-1}\circ\varphi(p)=a_{k}(p)$$  
>>7. Finalmente proponemos $$\widetilde X=\sum_{k=1}^n A_k\frac{\partial}{\partial y_k}.$$ el cual cumple $\widetilde{X}(f(q))=(df)_{q}X_{q}$ para todo $q\in U$  

^d0b758

## Primera aplicación del flujo de un campo

>[!Lemma]
>Sea $M$ una variedad suave de dimensión $n$ y sea $p\in M$. Si $\{v_1,\ldots,v_k\}\subset T_pM$ es un conjunto linealmente independiente, entonces existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $p$ tal que $$\left.\frac{\partial}{\partial x_i}\right|_p=v_i,\qquad i=1,\ldots,k.$$
>
>>[!Proof]-
>>1. Completamos $\{v_1,\ldots,v_k\}$ a una base $\{v_1,\ldots,v_n\}$ de $T_pM$.
>>2. Tomemos una carta suave $\psi=(y_1,\ldots,y_n)$ centrada en $p$.
>>3. Entonces tenemos  $\{(d\psi)_pv_1,\ldots,(d\psi)_pv_n\}$ base del $T_{0}\mathbb{R}^{n}$ 
>>4. Ahora queremos una transformacion lineal $T$ de $\mathbb{R}^{n}$ en $\mathbb{R}^{n}$ tal que su diferencial mande $(d\psi)_{p}v_{1},\ldots,(d\psi)_{p}v_{i}$ en $\frac{\partial}{\partial r_{1}}|_{T(0)=0},\ldots,\frac{\partial}{\partial r_{n}}|_{0}$. 
>>5. Asi obtendriamos una nueva carta $\varphi=T\circ\psi$ centrada en $p$ que cumpla lo pedido. Veamoslo
>>6. Primero escribimos $$(d\psi)_{p}(v_{j})=\sum^{n}_{i=1} a_{ij}\frac{\partial}{\partial r_{i}}\bigg|_{0}$$ y lo identificamo de la siguiente manera $$(d\psi)_{p}v_{j}\simeq\begin{pmatrix} a_{1j} \\  \vdots \\ a_{nj} \end{pmatrix}$$   
>>7. Sea $A:\mathbb R^n\to\mathbb R^n$ definida por $$\begin{pmatrix} t_{1} \\  \vdots \\ t_{n} \end{pmatrix}\mapsto(a_{ij})\begin{pmatrix} t_{1} \\  \vdots \\ t_{n} \end{pmatrix}$$  osea cumple que $$A(e_i)=\begin{pmatrix} a_{1j} \\  \vdots \\ a_{nj} \end{pmatrix}$$
>>8. Sabemos $$(dA)_0\left(\frac{\partial}{\partial r_{j}}\bigg|_0\right)=\sum_{i=1}^n b_{ij}\frac{\partial}{\partial r_{i}}\bigg|_0.$$ veamos que $b_{ij}=a_{ij}$
>>9. En efecto, $$b_{ij}=(dA)_{0}\left(\frac{\partial}{\partial r_{j}}\bigg|_0\right)(r_{i} )=\left(\frac{\partial}{\partial r_{j}}\bigg|_0\right)(r_{i}(A))=a_{ij}$$ para entender notar dos cosas primero que la funcion $r_{i}$ es tomar la cordenada $i$ osea $(r_{i}\circ A)(t_{1},\ldots,t_{n})=r_{i}(A(t))=(t_{1}a_{i1}+ t_{2}a_{i2} +\ldots + t_{n}a_{n})$ y claramente la derivada $j$ esima de esta funcion es $a_{ij}$
>>10. Ahora tomamos $T=A^{-1}$. Obviamente $A\circ T=Id$ entonces $d(A\circ T)_{0}(w)=w$ osea por regla de la cadena $(dA)_{0}( (dT)_{0}(w))=w$ por lo tanto $$(dA)_{0}(dT)_{0}\left(\sum_{i=1}^n a_{ij}\frac{\partial}{\partial r_{i}}\bigg|_0\right)=\sum_{i=1}^n a_{ij}\frac{\partial}{\partial r_{i}}\bigg|_0=(dA)_0\left(\frac{\partial}{\partial r_{j}}\bigg|_0\right)$$el ultimo igual por paso 8. y 9.
>>11. Y como $A$ es inyectiva $$(dT)_{0}\left(\sum_{i=1}^n a_{ij}\frac{\partial}{\partial r_{i}}\bigg|_0\right)=\frac{\partial}{\partial r_{j}}\bigg|_0$$
>>12. Ahora si definimos $(U,\varphi=T\circ\psi=(x_{1},\ldots,x_{n}))$, tenemos que ver entonces que $$\frac{\partial}{\partial x_{i}}\bigg|_{p}=v_{i}$$ pero esto es equivalente a ver que $$(d\varphi)_{p}\left(\frac{\partial}{\partial x_{i}}\bigg|_{p}\right)=(d\varphi)_{p}v_{i}$$ (por que $d\varphi$ es inyectiva)
>>13. Pero $$(d\varphi)_{p}(v_{j})=(dT)_{0}(d\psi)_{p}(v_{j})=\frac{\partial}{\partial r_{j}}\bigg|_0$$ por 6. y 11. 
>>14. Y se termina probando que $$(d\varphi)_{p}\left(\frac{\partial}{\partial x_{j}}\bigg|_{p}\right)=\frac{\partial}{\partial r_{j}}\bigg|_{\varphi(p)=0}$$ 
>>15. Veamoslo, por definición del diferencial, $$(d\varphi)_p\left(\left.\frac{\partial}{\partial x_j}\right|_p\right)(g)=\left.\frac{\partial}{\partial x_j}\right|_p(g\circ\varphi)=\left.\frac{\partial}{\partial r_j}\right|_{\varphi(p)}(g\circ\varphi\circ\varphi^{-1})=\left.\frac{\partial}{\partial r_j}\right|_{\varphi(p)}g$$

^047506

>[!Remark]
>Otra prueba mas simple de [[GS - Teo18#^047506]] es [[Glosario Teorico#^3071e3]] 

>[!Theorem] Teorema de enderezamiento
>Sea $X\in\mathfrak X(M)$ y sea $p\in M$ tal que $X_p\neq0$. Entonces existe una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ centrada en $p$ tal que
>$$X|_U=\frac{\partial}{\partial x_1}.$$
>
>Es decir, en una carta adecuada, el campo se ve como un campo constante.
>
>>[!Proof]-
>>1. Por el lema anterior, tomamos una carta $(V,\psi=(y_1,\ldots,y_n))$ centrada en $p$ tal que $$\left.\frac{\partial}{\partial y_1}\right|_p=X_p.$$
>>2. Por otro lado por [[GS - Teo16#^3b18e6]] existe $\widetilde{V}$ abierto de $M$ en $p$ y $\epsilon>0$ tal que el flujo $\Theta$ de $X$ esta definido en $(-\epsilon,\epsilon)\times \widetilde{V}$
>>3. Achicando si hace falta podes suponer que $\widetilde{V}=V$ y que $(V,\psi)$ es una carta cubica centrada en $p$ osea $$\psi(V)=C_{\epsilon}^{n} (0)=(-\epsilon,\epsilon)^{n} $$
>>4. Ahora nos vamos a enfocar en una cierta rebanada de $\psi(V)$ dada por $$\{ (r_{1},\ldots,r_{n})\in \psi(V):r_{1}=0 \}$$  que en este caso es igual a $(-\epsilon,\epsilon)^{n-1}$ por ser $\psi$ carta cubica 
>>5. Proponemos $$\sigma:(-\epsilon,\epsilon)\times C_{\epsilon}^{n-1}(0)\rightarrow M\qquad (r_{1},(0,r_{2},\ldots r_{n}))\mapsto \Theta_{r_{1}}(\psi ^{-1}(0,r_{2},\ldots,r_{n}))=\Theta_{r_{1}}\circ\psi ^{-1}(0,r_{2},\ldots,r_{n})$$
>>6. Ahora vamos a notar que $\sigma$ nos va a ayudar a armar una carta, para esto veamos que $(d\sigma)_{0}$ es invertible. Por que si sucediera entonces es isomorfismo luego por [[GS - Teo10#^b664ba]] tendremos un abierto $U$ abierto del $0$ tal que $$\sigma|_{U}^{-1}:W\subseteq M\rightarrow U$$ sera difeo (osea carta)
>>7. Luego tenemos si definimos la curva $\alpha (t)=(t,0,\ldots,0)$  $$\begin{align}(d\sigma)_0\left(\frac{\partial}{\partial r_1}\bigg|_0\right)&=(\sigma\circ\alpha )'(0)\\&=\frac{d}{dt}\bigg|_0\sigma(t,0,\dots,0)\\&=\frac{d}{dt}\bigg|_0\theta_t(\psi^{-1}(0,\dots,0))\\&=\frac{d}{dt}\bigg|_0\theta_t(p)\\&=\frac{d}{dt}\bigg|_0\gamma_{p}(t)\\&=\gamma'_{p}(0)\\&=X_{p}\\&=\left.\frac{\partial}{\partial y_1}\right|_p\end{align}$$ en el primer paso usamos [[Glosario Teorico#^99bdaa]] 
>>8. Por otro lado para $k>1$ $$\begin{align}(d\sigma)_0\frac{\partial}{\partial r_k}\bigg|_0 &=\frac{d}{dt}\bigg|_0\sigma(0,\ldots,t,\ldots,0)\\ &=\frac{d}{dt}\bigg|_0\Theta_{0}\left(\psi^{-1}(0,\ldots,t,\ldots,0)\right)\\ &=\frac{d}{dt}\bigg|_0\psi^{-1}(0,\ldots,t,\ldots,0)\\ &=(d\psi^{-1})_0\frac{\partial}{\partial y_k}\bigg|_0 \end{align}$$ el primer igual sale como en [[Glosario Teorico#^99bdaa]] cambiando la curva $\alpha(t)=te_{k}$ 
>>9. Entonces $d\sigma$ es isomorfismo. Por tanto, por el teorema de la función inversa existe $U$ abierto de $M$ en $p$ y $W$ abierto de $\mathbb R^n$ en $(0,\dots,0)$ tal que $\sigma:W\to U$ es un difeomorfismo.
>>10. Ahora nuestra candidata es la carta suave $(U,\phi=\sigma^{-1}|_U=(x_1,\dots,x_n)).$
>>11. Veamos que $$X|_U=\frac{\partial}{\partial x_1}.$$
>>12. Tomamos $q=\sigma(r_1,\ldots,r_n)=\Theta_{r_1}\left(\psi^{-1}(0,r_2,\ldots,r_n)\right).$ Como $\phi=\sigma^{-1}$, osea $\phi(q)=(r_{1},\ldots,r_{n})$ por lo tanto $x_{i}(q)=r_{i}$. Entonces $$\begin{align}\frac{\partial}{\partial x_1}\bigg|_q&=(d\phi ^{-1})_{\phi(q)}\left(\frac{\partial}{\partial r_{1}}\bigg|_{\phi(q)}\right)\\&=(d\sigma)_{(r_1,\ldots,r_n)}\left(\frac{\partial}{\partial r_1}\bigg|_{(r_1,\ldots,r_n)}\right)\\&=\frac{d}{ds}\bigg|_{s=0}\sigma(r_1+s,r_2,\ldots,r_n)\\&=\frac{d}{ds}\bigg|_{s=0}\Theta_{r_1+s}\left(\psi^{-1}(0,r_2,\ldots,r_n)\right)\\&=\frac{d}{ds}\bigg|_{s=0}\Theta_s\left(\Theta_{r_1}\left(\psi^{-1}(0,r_2,\ldots,r_n)\right)\right)\\&=\frac{d}{ds}\bigg|_{s=0}\Theta_s(q)\\&=\frac{d}{ds}\bigg|_{s=0}\gamma_q(s)\\&=\gamma_q'(0)\\&=X_{\gamma_q(0)}\\&=X_q.\end{align}$$
>>13. Por lo tanto, para todo $q\in U$, se cumple $$\frac{\partial}{\partial x_1}\bigg|_q=X_q.$$
>>14. Luego $$X|_U=\frac{\partial}{\partial x_1}.$$