## 1er Parcial 30/04/2026

### Ejercicio 1

>[!Exercise]
>Sea $S^2$ la esfera de centro cero y radio uno, con su estructura diferenciable canonica, y sea $U=\{(x,y,z)\in S^2:z>0\}$.
>
>- (a) Sea $\psi:U\subset S^2\to\mathbb R^2$ definida por $\psi(x,y,z)=(x/z,y/z)$. Mostrar que $(U,\psi=(u,v))$ es una carta suave de $S^2$.
>- (b) Sea $(U,\varphi=(s,t))$ la carta suave dada por $\varphi(x,y,z)=(x,y)$, y sea $p=\frac{1}{\sqrt2}(1,0,1)$. Calcular la segunda coordenada de $\frac{\partial}{\partial s}\big|_p$ con respecto a la base $\{\frac{\partial}{\partial u}\big|_p,\frac{\partial}{\partial v}\big|_p\}$.
>
>>[!Proof]-
>>- (a)
>>	1. La aplicacion $\psi$ es la proyeccion central desde el hemisferio superior sobre el plano $z=1$.
>>	2. Si $(u,v)=\psi(x,y,z)$, entonces $x=uz$ e $y=vz$. Como $(x,y,z)\in S^2$, se tiene $$u^2z^2+v^2z^2+z^2=1.$$
>>	3. Como $z>0$, resulta $$z=\frac{1}{\sqrt{1+u^2+v^2}},\qquad x=\frac{u}{\sqrt{1+u^2+v^2}},\qquad y=\frac{v}{\sqrt{1+u^2+v^2}}.$$
>>	4. Por lo tanto $$\psi^{-1}(u,v)=\left(\frac{u}{\sqrt{1+u^2+v^2}},\frac{v}{\sqrt{1+u^2+v^2}},\frac{1}{\sqrt{1+u^2+v^2}}\right).$$
>>	5. Esta inversa esta definida y es suave para todo $(u,v)\in\mathbb R^2$. Ademas $\psi$ es biyectiva entre $U$ y $\mathbb R^2$.
>>	6. Como $\psi$ y $\psi^{-1}$ son suaves en coordenadas usuales, $(U,\psi)$ es una carta suave de $S^2$.
>>- (b)
>>	1. Tenemos las cartas $\varphi(x,y,z)=(x,y)=(s,t)$ y $\psi(x,y,z)=\left(\frac{x}{z},\frac{y}{z}\right)=(u,v).$
>>	2. Para cambiar la base coordenada de $\varphi$ a la base coordenada de $\psi$, usamos la matriz jacobiana de $\psi\circ\varphi^{-1}.$ Evaluada en $\varphi(p)$ 
>>	3. Como estamos en el hemisferio superior $z>0$, se tiene $$\varphi^{-1}(s,t)=\left(s,t,\sqrt{1-s^2-t^2}\right).$$
>>	4. Luego $$\left(\psi\circ\varphi^{-1}\right)(s,t)=\left(\frac{s}{\sqrt{1-s^2-t^2}},\frac{t}{\sqrt{1-s^2-t^2}}\right).$$
>>	5. Por lo tanto, la matriz jacobiana es $$D(\psi\circ\varphi^{-1})_{(s,t)}=\begin{pmatrix}\dfrac{\partial}{\partial s}\left(\dfrac{s}{\sqrt{1-s^2-t^2}}\right) & \dfrac{\partial}{\partial t}\left(\dfrac{s}{\sqrt{1-s^2-t^2}}\right)\\[8pt]\dfrac{\partial}{\partial s}\left(\dfrac{t}{\sqrt{1-s^2-t^2}}\right) & \dfrac{\partial}{\partial t}\left(\dfrac{t}{\sqrt{1-s^2-t^2}}\right)\end{pmatrix}.$$
>>	6. Calculando las derivadas parciales, obtenemos $$D(\psi\circ\varphi^{-1})_{(s,t)}=\begin{pmatrix}(1-s^2-t^2)^{-1/2}+s^2(1-s^2-t^2)^{-3/2} & st(1-s^2-t^2)^{-3/2}\\[4pt]st(1-s^2-t^2)^{-3/2} & (1-s^2-t^2)^{-1/2}+t^2(1-s^2-t^2)^{-3/2}\end{pmatrix}.$$
>>	7. El punto dado es $$p=\frac1{\sqrt2}(1,0,1)=\left(\frac1{\sqrt2},0,\frac1{\sqrt2}\right),$$ luego $$\varphi(p)=\left(\frac1{\sqrt2},0\right).$$
>>	8. Evaluamos la matriz en $\varphi(p)$: $$D(\psi\circ\varphi^{-1})_{\varphi(p)}=D(\psi\circ\varphi^{-1})_{\left(\frac1{\sqrt2},0\right)}=\begin{pmatrix}2\sqrt2 & 0\\0 & \sqrt2\end{pmatrix}.$$
>>	9. La primera columna de esta matriz da las coordenadas de $\frac{\partial}{\partial s}\big|_p$ en la base $$\left\{\left.\frac{\partial}{\partial u}\right|_p,\left.\frac{\partial}{\partial v}\right|_p\right\}.$$ por que evaluar esa matriz en $\frac{\partial}{\partial s}|_{p}$ es evaluarla en $(1,0)$ por como es la base
>>	10. En efecto, $$\left[\left.\frac{\partial}{\partial s}\right|_p\right]_{\left\{\frac{\partial}{\partial u}\big|_p,\frac{\partial}{\partial v}\big|_p\right\}}=\begin{pmatrix}2\sqrt2\\0\end{pmatrix}.$$
>>	11. Por lo tanto, $$\left.\frac{\partial}{\partial s}\right|_p=2\sqrt2\left.\frac{\partial}{\partial u}\right|_p+0\left.\frac{\partial}{\partial v}\right|_p.$$
>>	12. Luego la segunda coordenada pedida es $$\boxed{0}.$$

### Ejercicio 2

>[!Exercise]
>Considerar en la esfera $S^n$ la estructura diferenciable usual. Sea $\iota:S^n\to\mathbb R^{n+1}$ la inclusion y sea $p=(p_1,\dots,p_{n+1})\in S^n$. Mostrar que el espacio tangente extrinseco a la esfera en $p$ es el ortogonal a $p$. Mas precisamente, mostrar que $$(d\iota)_p(T_pS^n)=\left\{\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\bigg|_p:\sum_{j=1}^{n+1}a_jp_j=0,\ a_j\in\mathbb R\right\}.$$
>
>>[!Proof]-
>>1. Sea $$F:\mathbb R^{n+1}\to\mathbb R,\qquad F(r_1,\ldots,r_{n+1})=\sum_{j=1}^{n+1}r_j^2.$$
>>2. Como $\iota:S^n\to\mathbb R^{n+1}$ es la inclusión, para todo $q\in S^n$ se tiene $$F(\iota(q))=\sum_{j=1}^{n+1}q_j^2=1.$$  
>>3. Luego $$F\circ\iota:S^n\to\mathbb R$$ es la función constante $1$.  
>>4. Sea $v\in T_pS^n$. Por definición del diferencial, $$(d\iota)_p(v)(F)=v(F\circ\iota).$$  
>>5. Como $F\circ\iota=1$, obtenemos $$(d\iota)_p(v)(F)=v(1)=0.$$  
>>6. Escribimos $$(d\iota)_p(v)=\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)}.$$  
>>7. Evaluando este vector en $F$, resulta $$0=(d\iota)_p(v)(F)=\left(\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)}\right)(F).$$  
>>8. Por linealidad, $$0=\sum_{j=1}^{n+1}a_j\frac{\partial F}{\partial r_j}\Big|_{\iota(p)}.$$  
>>9. Como $\frac{\partial F}{\partial r_j}=2r_j,$ evaluando en $\iota(p)=p$ tenemos $\frac{\partial F}{\partial r_j}\Big|_{\iota(p)}=2p_j.$  
>>10. Por lo tanto $$0=\sum_{j=1}^{n+1}a_j2p_j=2\sum_{j=1}^{n+1}a_jp_j.$$  
>>11. Entonces $$\sum_{j=1}^{n+1}a_jp_j=0.$$  
>>12. Así, para todo $v\in T_pS^n$, si $$(d\iota)_p(v)=\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)},$$ entonces $$\sum_{j=1}^{n+1}a_jp_j=0.$$  
>>13. Concluimos la primera inclusión: $$(d\iota)_p(T_pS^n)\subseteq\left\{\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)}:\sum_{j=1}^{n+1}a_jp_j=0\right\}.$$  
>>14. Para probar la igualdad, usamos dimensiones.  
>>15. Como $\iota:S^n\to\mathbb R^{n+1}$ es una inmersión, $$(d\iota)_p:T_pS^n\to T_{\iota(p)}\mathbb R^{n+1}$$ es inyectiva.  
>>16. Entonces $$\dim (d\iota)_p(T_pS^n)=\dim T_pS^n=n.$$  
>>17. Por otro lado, el conjunto $$\left\{(a_1,\ldots,a_{n+1})\in\mathbb R^{n+1}:\sum_{j=1}^{n+1}a_jp_j=0\right\}$$ es el núcleo del funcional lineal no nulo $$L:\mathbb R^{n+1}\to\mathbb R,\qquad L(a_1,\ldots,a_{n+1})=\sum_{j=1}^{n+1}a_jp_j.$$  
>>18. El funcional $L$ no es nulo porque $p\in S^n$, luego $p\neq 0$. Por lo tanto $\dim Im(L)=1$ entonces $\ker L$ tiene dimensión $n$.  
>>19. Tenemos entonces una inclusión entre dos subespacios vectoriales de dimensión $n$. Luego son iguales.  
>>20. Por consiguiente $$(d\iota)_p(T_pS^n)=\left\{\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)}:\sum_{j=1}^{n+1}a_jp_j=0,\ a_j\in\mathbb R\right\}.$$
>
>>[!Proof]-
>>1. Sea $p=(p_1,\ldots,p_{n+1})\in S^n$. Como $p\neq 0$, existe $k\in\{1,\ldots,n+1\}$ tal que $p_k\neq 0$.  
>>2. Tomamos el casquete $$U_k^\varepsilon=\{q\in S^n:\varepsilon q_k>0\},\qquad \varepsilon=\operatorname{sgn}(p_k).$$  
>>3. En este casquete usamos la carta canónica que omite la coordenada $k$: $$\varphi_k^\varepsilon(q_1,\ldots,q_{n+1})=(q_1,\ldots,\widehat{q_k},\ldots,q_{n+1}).$$  
>>4. Su inversa es $$(\varphi_k^\varepsilon)^{-1}(x_1,\ldots \widehat{x}_{k},\ldots,x_{n+1})=(x_1,\ldots,x_{k-1},\varepsilon\sqrt{1-\sum_{i\neq k} x_i^2},x_{k+1},\ldots,x_{n+1}).$$  
>>5. Por lo tanto, la matriz del diferencial es el jacobiano $$D(Id\circ\iota\circ(\varphi_k^\varepsilon)^{-1})_{\varphi_k^\varepsilon(p)}=D((\varphi_{k}^{\epsilon})^{-1} )_{\varphi_{k}^{\epsilon}(p) }$$
>>6. La matriz diferencial antes de evaluar seria $$D(\iota\circ(\varphi_k^\varepsilon)^{-1})_x=\begin{pmatrix}1&\cdots&0&0&\cdots&0\\ \vdots&\ddots&\vdots&\vdots&&\vdots\\0&\cdots&1&0&\cdots&0\\-\varepsilon\dfrac{x_1}{\sqrt{1-\sum_{i\neq k} x_i^2}}&\cdots&-\varepsilon\dfrac{x_{k-1}}{\sqrt{1-\sum_{i\neq k} x_i^2}}&-\varepsilon\dfrac{x_{k+1}}{\sqrt{1-\sum_{i\neq k} x_i^2}}&\cdots&-\varepsilon\dfrac{x_{n+1}}{\sqrt{1-\sum_{i\neq k}x_i^2}}\\0&\cdots&0&1&\cdots&0\\\vdots&&\vdots&\vdots&\ddots&\vdots\\0&\cdots&0&0&\cdots&1\end{pmatrix}.$$
>>7. Como $$\varphi_k^\varepsilon(p)=(p_1,\ldots,p_{k-1},p_{k+1},\ldots,p_{n+1}),$$ la matriz evaluada en $p$ es  $$D(\iota\circ(\varphi_k^\varepsilon)^{-1})_{\varphi_k^\varepsilon(p)}=\begin{pmatrix} 1 & 0 & \cdots & 0 & 0 & \cdots & 0\\ 0 & 1 & \cdots & 0 & 0 & \cdots & 0\\ \vdots & \vdots & \ddots & \vdots & \vdots & & \vdots\\ 0 & 0 & \cdots & 1 & 0 & \cdots & 0\\ -\dfrac{p_1}{p_k} & -\dfrac{p_2}{p_k} & \cdots & -\dfrac{p_{k-1}}{p_k} & -\dfrac{p_{k+1}}{p_k} & \cdots & -\dfrac{p_{n+1}}{p_k}\\ 0 & 0 & \cdots & 0 & 1 & \cdots & 0\\ \vdots & \vdots & & \vdots & \vdots & \ddots & \vdots\\ 0 & 0 & \cdots & 0 & 0 & \cdots & 1 \end{pmatrix},$$ aca usamos que $\epsilon\sqrt{ 1-\sum^{n}_{i=1}p_{i}^{2} }=p_{k}$   
>>8. Ahora evaluando en $e_{i}$ me da la coordenada $a_{i}$ del vector $$\sum^{n+1}_{j=1}a_{j}\frac{\partial}{\partial r_{j}}|_{p}$$ entonce esta seria $(0,\ldots,1,\ldots,-\frac{p_{i}}{p_{k}},\ldots,1)$ si es que $i\leq k-1$ si no es muy parecido
>>9. Por lo tanto si evaluamos en un vector cualqueira $v\in T_{p}S$ tenemos que $$v=\sum_{i \neq k} \tilde{a}_{i} \frac{\partial}{\partial s_{i}}|_{p}$$ que visto en coordenadas de la base $\{ \frac{\partial}{\partial s_{1}}|_{p},\ldots,\frac{\partial}{\partial s_{n}}|_{p} \}$ seria $$(\tilde{a}_{1}e_{1},\ldots,\widehat{e_{k}},\ldots,\tilde{a}_{n+1}e_{n+1})$$obtenemos $$\left( \tilde{a}_{1},\ldots,\tilde{a}_{k-1},\frac{-\sum^{\infty}_{i\neq k} \tilde{a}_{i}p_{i}}{p_{k}},\tilde{a}_{k+1} ,\ldots,\tilde{a}_{n+1}\right)$$
>>10. Y obviamente este vector producto interno con $p$ da $0$    
>>11. Por lo tanto $$(d\iota)_p(T_pS^n)\subseteq\left\{\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)}:\sum_{j=1}^{n+1}a_jp_j=0\right\}.$$  
>>12. Además, las columnas de la matriz son linealmente independientes, porque al quitar la fila $k$ queda la matriz identidad. Entonces $$(d\iota)_p(T_pS^n)$$ tiene dimensión $n$.  
>>13. Por otro lado, $$\left\{(a_1,\ldots,a_{n+1})\in\mathbb R^{n+1}:\sum_{j=1}^{n+1}a_jp_j=0\right\}$$ es el núcleo de un funcional lineal no nulo, luego tiene dimensión $n$.  
>>14. Como tenemos una inclusión entre dos subespacios de dimensión $n$, son iguales.  
>>15. Concluimos que $$(d\iota)_p(T_pS^n)=\left\{\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\Big|_{\iota(p)}:\sum_{j=1}^{n+1}a_jp_j=0\right\}.$$

^483e02

### Ejercicio 3

>[!Exercise]
>Considerar en $\mathbb R^2$ la relacion de equivalencia $(x,y)\sim(x+2k,y)$, con $k\in\mathbb Z$, y la unica estructura diferenciable en el cilindro $C=\mathbb R^2/\sim$ tal que la proyeccion canonica $p:\mathbb R^2\to C$ es un difeomorfismo local. Sea $f:C\to\mathbb R$ definida por $f(p(x,y))=e^y\sin(5\pi x)$.
>
>- (a) Mostrar que $f$ esta bien definida y es diferenciable.
>- (b) Calcular $X(f)$, donde $X=dp_0(\frac{\partial}{\partial x}\big|_0)$.
>
>>[!Proof]-
>>- (a)
>>	1. Primero vemos que $f$ no depende del representante. Si $(x,y)\sim(x+2k,y)$, entonces $$e^y\sin(5\pi(x+2k))=e^y\sin(5\pi x+10\pi k)=e^y\sin(5\pi x).$$
>>	2. Luego $f$ esta bien definida.
>>	3. **Diferenciabilidad.** Sea $q\in C$ arbitrario y elijamos $(x_0,y_0)\in\mathbb R^2$ tal que $p(x_0,y_0)=q$. Por hipótesis, $p$ es un difeomorfismo local, de modo que existen entornos abiertos $U$ de $(x_0,y_0)$ y $V$ de $q$ tales que $$p|_U:U\longrightarrow V$$ es un difeomorfismo.
>>	4. La representación local de $f$ en la carta $$(p|_U)^{-1}:V\longrightarrow U$$ es $$f\circ\big((p|_U)^{-1}\big)^{-1}=f\circ p|_U.$$
>>	5. Para todo $(x,y)\in U$, $$ (f\circ p|_U)(x,y)=e^y\sin(5\pi x).$$ Como esta función es suave, $f$ es suave en $q$. Dado que $q$ era arbitrario, concluimos que $$f:C\to\mathbb R$$ es diferenciable.
>>- (b)
>>	1. Por definicion del diferencial, $$X(f)=df_{p(0,0)}\left(dp_0\left(\frac{\partial}{\partial x}\bigg|_0\right)\right)=d(f\circ p)_0\left(\frac{\partial}{\partial x}\bigg|_0\right).$$
>>	2. Entonces $$X(f)=\frac{\partial}{\partial x}\bigg|_{(0,0)}\left(e^y\sin(5\pi x)\right)=5\pi e^0\cos(0)=5\pi.$$

### Ejercicio 4

>[!Exercise]
>Sea $f:M\to N$ una funcion suave entre variedades suaves. Probar que $F:M\to M\times N$, definida por $F(q)=(q,f(q))$, es una subvariedad incrustada.
>
>>[!Proof]-
>>- **Suavidad de $F$**
>>	1. Sea $q\in M$. Queremos ver que $F:M\to M\times N$, dada por $F(q)=(q,f(q))$, es suave en $q$.  
>>	2. Como $f:M\to N$ es suave, existen una carta suave $(U,\varphi)$ de $M$ alrededor de $q$ y una carta suave $(V,\psi)$ de $N$ alrededor de $f(q)$ tales que, achicando $U$ si hace falta, se cumple que $f(U)\subset V$ y que $$\psi\circ f\circ\varphi^{-1}:\varphi(U)\to\psi(V)$$ es suave.  
>>	3. En $M\times N$ tomamos la carta producto $$(U\times V,\varphi\times\psi),$$ donde $$(\varphi\times\psi)(p,r)=(\varphi(p),\psi(r)).$$
>>	4. Como $f(U)\subset V$, tenemos que $F(U)\subset U\times V$. Entonces la representación local de $F$ es $$(\varphi\times\psi)\circ F\circ\varphi^{-1}:\varphi(U)\to\varphi(U)\times\psi(V).$$
>>	5. Para $x\in\varphi(U)$, se tiene $$\begin{aligned}((\varphi\times\psi)\circ F\circ\varphi^{-1})(x)&=(\varphi\times\psi)(F(\varphi^{-1}(x)))\\&=(\varphi\times\psi)(\varphi^{-1}(x),f(\varphi^{-1}(x)))\\&=(\varphi(\varphi^{-1}(x)),\psi(f(\varphi^{-1}(x))))\\&=(x,(\psi\circ f\circ\varphi^{-1})(x)).\end{aligned}$$  
>>	6. Por lo tanto, la forma local de $F$ es $$x\mapsto (x,(\psi\circ f\circ\varphi^{-1})(x)).$$  
>>	7. La primera componente es la identidad, que es suave, y la segunda componente es suave porque $f$ es suave. Entonces la representación local de $F$ es suave.  
>>	8. Como $q\in M$ era arbitrario, concluimos que $$F:M\to M\times N$$ es suave.
>>- **Inyectividad de $F$**
>>	1. Sean $q_1,q_2\in M$ tales que $F(q_1)=F(q_2)$.  
>>	2. Entonces $$F(q_1)=F(q_2)$$  implica $$(q_1,f(q_1))=(q_2,f(q_2)).$$  
>>	3. Por igualdad de pares ordenados, la primera coordenada coincide, es decir, $$q_1=q_2.$$
>>	4. Por lo tanto, $F$ es inyectiva.
>>- **$DF$ inyectiva**
>>	1. Sea $q\in M$. Usamos el isomorfismo canónico $$G:T_{(q,f(q))}(M\times N)\to T_qM\times T_{f(q)}N,$$  definido por $$G(w)=\big(d(\pi_1)_{(q,f(q))}(w),d(\pi_2)_{(q,f(q))}(w)\big).$$  
>>	2. Sea $v\in T_qM$. Entonces $$G(dF_q(v))=\big(d(\pi_1)_{F(q)}(dF_q(v)),d(\pi_2)_{F(q)}(dF_q(v))\big).$$
>>	3. Por regla de la cadena, $$d(\pi_1)_{F(q)}\circ dF_q=d(\pi_1\circ F)_q=d(\operatorname{Id}_M)_q=\operatorname{Id}_{T_qM},$$  y  $$d(\pi_2)_{F(q)}\circ dF_q=d(\pi_2\circ F)_q=df_q.$$  
>>	4. Por lo tanto,  $$G(dF_q(v))=(v,df_q(v)).$$  
>>	5. Ahora supongamos que $dF_q(v)=0$. Aplicando $G$, obtenemos $$(v,df_q(v))=G(dF_q(v))=G(0)=(0,0).$$  
>>	6. Entonces $v=0$. Por lo tanto, $$dF_q:T_qM\to T_{(q,f(q))}(M\times N)$$  es inyectivo.
>>- **$F$ es homeomorfismo con la topologia relativa**
>>	1. Recordamos que $F:M\rightarrow M\times N$ es suave y por tanto continua
>>	2. Sea $A\subset F(M)$ abierto. Como $F(M)$ tiene la topología subespacio heredada de $M\times N$, existe un abierto $O\subset M\times N$ tal que $$A=O\cap F(M).$$
>>	3. Entonces $$\begin{aligned}F^{-1}(A)&=F^{-1}(O\cap F(M))\\ &=F^{-1}(O)\cap F^{-1}(F(M))\\ &=F^{-1}(O)\cap M\\ &=F^{-1}(O). \end{aligned}$$
>>	4. Como $F:M\to M\times N$ es continua y $O$ es abierto en $M\times N$, se tiene que $F^{-1}(O)$ es abierto en $M$.  
>>	5. Por lo tanto, $F^{-1}(A)$ es abierto en $M$. Concluimos que $$F:M\to F(M)$$ es continua.
>>	6. Queremos probar que la inversa $$F^{-1}:F(M)\to M$$es continua.  
>>	7. Como $F(q)=(q,f(q))$, la inversa está dada por $$F^{-1}(q,f(q))=q.$$
>>	8. Sea $U\subset M$ abierto. Entonces $$(F^{-1})^{-1}(U)=F(U).$$
>>	9. Veamos que $F(U)$ es abierto en $F(M)$ con la topología subespacio.  
>>	10. Afirmamos que $$F(U)=F(M)\cap(U\times N).$$con $U$ abierto de $M$  
>>	11. En efecto, si $x\in F(U)$, entonces existe $q\in U$ tal que $$x=F(q)=(q,f(q)).$$
>>	12. Luego $x\in F(M)$ y $x\in U\times N$. Por lo tanto, $$x\in F(M)\cap(U\times N).$$
>>	13. Recíprocamente, si $x\in F(M)\cap(U\times N)$, entonces existe $q\in M$ tal que $$x=F(q)=(q,f(q)).$$
>>	14. Como además $x\in U\times N$, su primera coordenada pertenece a $U$. Pero la primera coordenada de $F(q)$ es $q$, luego $q\in U$. Entonces $$x=F(q)\in F(U).$$
>>	15. Por lo tanto, $$F(U)=F(M)\cap(U\times N).$$
>>	16. Como $U$ es abierto en $M$, se tiene que $U\times N$ es abierto en $M\times N$. Luego $$F(M)\cap(U\times N)$$  es abierto en $F(M)$ con la topología subespacio.  
>>	17. Así, $$(F^{-1})^{-1}(U)=F(U)$$es abierto en $F(M)$.  
>>	18. Concluimos que $$F^{-1}:F(M)\to M$$es continua.

### Ejercicio 5

>[!Exercise]
>Sea $M$ "el ocho", la imagen de la funcion $f:(0,2\pi)\to\mathbb R^2$ dada por $f(t)=\sin(t)(\cos(t),1)$, con la estructura de variedad suave inducida por la carta $(M,f^{-1})$. Probar que la funcion $F:M\to M$ definida por $F(x,y)=(x,-y)$ no es suave.
>
>>[!Proof]-
>>1. Escribamos $$f(t)=(\sin t\cos t,\sin t).$$
>>2. La estructura suave de $M$ esta transportada por la carta global $f^{-1}:M\to(0,2\pi)$. Por lo tanto, para estudiar la suavidad de $F$, basta mirar la expresion en coordenadas $$g=f^{-1}\circ F\circ f:(0,2\pi)\to(0,2\pi).$$
>>3. Si $f(t)=(\sin t\cos t,\sin t)$, entonces $$F(f(t))=(\sin t\cos t,-\sin t).$$
>>4. Para $0<t<\pi$, el parametro que da ese punto es $t+\pi$, porque $$f(t+\pi)=(\sin(t+\pi)\cos(t+\pi),\sin(t+\pi))=(\sin t\cos t,-\sin t).$$
>>5. Para $\pi<t<2\pi$, el parametro que da ese punto es $t-\pi$, porque $$f(t-\pi)=(\sin(t-\pi)\cos(t-\pi),\sin(t-\pi))=(\sin t\cos t,-\sin t).$$
>>6. Ademas $F(f(\pi))=F(0,0)=(0,0)=f(\pi)$, luego $g(\pi)=\pi$.
>>7. Asi, en coordenadas, $$g(t)=\begin{cases}t+\pi,&0<t<\pi,\\ \pi,&t=\pi,\\ t-\pi,&\pi<t<2\pi.\end{cases}$$
>>8. Pero $$\lim_{t\to\pi^-}g(t)=2\pi,\qquad \lim_{t\to\pi^+}g(t)=0$$
>>9. Luego $g$ no es continua en $t=\pi$ por que no coinciden los limites laterales. En particular no es suave.
>>10. Por lo tanto $F:M\to M$, aunque esta definida por una reflexion suave del plano, no es suave para la estructura diferenciable transportada al ocho.
