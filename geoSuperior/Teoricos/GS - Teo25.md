>[!Definition] Medida nula
>Un subconjunto $A\subseteq\mathbb R^n$ se dice que tiene **medida nula** si para todo $\varepsilon>0$ existe un cubrimiento numerable de $A$ por cubos abiertos $\{C_i\}$ tal que $$\sum_i\operatorname{vol}(C_i)<\varepsilon.$$

>[!Definition] Dominio de integracion
>Es un subconjunto $D\subseteq\mathbb R^n$ tal que:
>
>1. $D$ es acotado.
>2. $\partial D=\overline D\cap\overline{\mathbb R^n-D}=\overline D-\operatorname{int}D$ tiene **medida nula**.
>
>Su clausura es acotada, entonces es compacta.

>[!Definition] n-forma suave en conjuntos cerrados
>Sea $A$ un subconjunto cerrado de $\mathbb R^n$. Una $n$-forma $\omega$ sobre $A$ es un tensor de la forma
>$$\omega=f\,dx_1\wedge\cdots\wedge dx_n,$$
>donde $f$ es suave sobre $A$.
>
>Recordemos que, por aplicacion de particiones de la unidad, $f$ es suave sobre $A$ si existe $\widetilde f\in C^\infty(U)$, donde $A\subseteq U$, y $\widetilde f=f$ sobre $A$.

>[!Definition] Integral sobre un dominio de integracion
>Sea $D$ un dominio de integracion y sea $\omega$ una $n$-forma suave sobre $\overline D$, digamos
>$$\omega=f\,dx_1\wedge\cdots\wedge dx_n.$$
>Se define la integral de $\omega$ sobre $D$ como
>$$\int_D\omega=\int_D f\,dx_1\cdots dx_n:=\int_D f(x_1,\ldots,x_n)\,dx_1\cdots dx_n,$$
>donde esta ultima integral es la integral de Riemann de Analisis III.

>[!Lemma] Tecnico
>Sea $U\subseteq\mathbb R^n$ un subconjunto abierto y sea $K\subseteq U$ un subconjunto compacto. Entonces existe un dominio de integracion abierto $D$ tal que
>$$K\subseteq D\subseteq\overline D\subseteq U.$$
>
>>[!Proof]-
>>1. Como $U$ es abierto, para $p\in K$ existe una bola abierta $B_p$ de $p$ tal que $B_p\subseteq U$, la cual ademas podemos tomar tal que $\overline{B_p}\subseteq U$ achicando el radio si hace falta.
>>2. Como $K$ es compacto, nos podemos quedar con finitas de estas bolas $$K\subseteq D:=B_{p_1}\cup\cdots\cup B_{p_k}\subseteq U,$$donde $D$ es claramente un dominio de integracion de $\mathbb R^n$, pues cada bola tiene medida cero y union finita de conjuntos de medida cero tiene medida cero.

^322b65

>[!Definition] Integracion de n formas
>Sea $U\subseteq\mathbb R^n$ un abierto y sea $\omega\in\Omega^n(U)$ tal que $\operatorname{sop}(\omega):=\{p\in U:\omega_p\neq0\}$ es un subconjunto compacto. Se define
>$$\int_U\omega:=\int_D\omega,$$
>donde $D$ es cualquier dominio de integracion de $\mathbb R^n$ tal que
>$$\operatorname{sop}\omega\subseteq D\subseteq\overline D\subseteq U.$$

^de3f7e

>[!Proposition] Buena definicion de integral de $n$-forma sobre un abierto
>La anterior definicion esta bien definida, es decir, no depende de la eleccion del dominio de integracion.
>
>>[!Proof]-
>>1. Sean $D_1$ y $D_2$ dos dominios de integracion de $\mathbb R^n$ tales que $\operatorname{sop}\omega\subseteq D_i\subseteq U$.
>>2. Tenemos $$\int_{D_1}f\,dx_1\cdots dx_n=\int_{D_1\cap D_2}f\,dx_1\cdots dx_n+\int_{D_1\setminus D_2}f\,dx_1\cdots dx_n.$$ donde usamos propiedades de la integral de Riemann para separar la suma notando que $D_1\cap D_2$ y $D_1\setminus D_2$ son dominios de integracion por que $\partial(D_1\cap D_2),\partial(D_1\setminus D_2)\subseteq\partial D_1\cup\partial D_2$, que tiene medida cero por que $D_{1}$ y $D_{2}$ son dominios de integracion por ende su frontera tiene medida $0$ . Ademas $\operatorname{int}(D_1\cap D_2)\cap\operatorname{int}(D_1\setminus D_2)=\varnothing$.
>>3. Ahora notamos $$\int_{D_1\setminus D_2}f\,dx_1\cdots dx_n=0,$$pues $\operatorname{sop}f=\operatorname{sop}\omega\subseteq D_2$, luego si $p\in D_1\setminus D_2$, entonces $f(p)=0$. Por lo tanto $$\int_{D_1}f\,dx_1\cdots dx_n=\int_{D_1\cap D_2}f\,dx_1\cdots dx_n.$$
>>4. Analogamente,
>>$$\int_{D_2}f\,dx_1\cdots dx_n=\int_{D_1\cap D_2}f\,dx_1\cdots dx_n.$$

^9cae17

## Integracion sobre variedades

>[!Definition] Integracion sobre variedades
>Sea $M$ variedad suave orientable y sea $\omega\in\Omega^n(M)$ una $n$-forma suave arbitraria. Estudiemos primero el caso en que $\operatorname{sop}\omega$ es compacto y esta contenido en $U$, donde $U$ es el dominio de una carta $(U,\varphi=(x_1,\ldots,x_n))$ positivamente orientada.
>
>Tenemos $$\omega|_U=f\,dx_1\wedge\cdots\wedge dx_n$$y $\operatorname{sop}(\omega)=\operatorname{sop}(f)\subseteq U$.
>Como $\varphi$ es un homeomorfismo, tenemos $$\widetilde f=f\circ\varphi^{-1}:\varphi(U)\subseteq\mathbb R^n\to\mathbb R.$$ tiene soporte compacto y es integrable sobre el abierto $\varphi(U)$.
>Esto es por que $$\operatorname{sup}\widetilde{f}=\varphi(\operatorname{supp}(f))$$
>Entonces se define $$\int_M\omega:=\int_{\varphi(U)}f\circ\varphi^{-1}(x_1,\ldots,x_n)\,dx_1\cdots dx_n.$$

^11f3f1

>[!Theorem] Cambio de variable (Recordatorio) 
>Sean $D$ y $E$ dominios abiertos de integracion en $\mathbb R^n$, y sea $G:D\to E$ suave que restringe a un difeomorfismo de $D$ en $E$. Para toda funcion continua $f:E\to\mathbb R$, $$\int_E f\,dV=\int_D(f\circ G)|\det DG|\,dV.$$

^d9fdaa

>[!Proposition]
>La anterior integral sobre variedades esta bien definida: no depende de la carta positivamente orientada.
>
>>[!Proof]-
>>1. Para hacer la demostracion, necesitamos recordar el teorema del cambio de variables de Analisis III [[GS - Teo25#^d9fdaa]]
>>2. Supongamos que $(V,\psi=(y_1,\ldots,y_n))$ es otra carta positivamente orientada tal que $\operatorname{sop}\omega\subseteq V$. Entonces tenemos $$\omega|_V=g\,dy_1\wedge\cdots\wedge dy_n.$$
>>3. Ademas $\operatorname{sop}\omega\subseteq U\cap V$ donde tenemos dos expresiones distintas para $\omega$ que debemos unificat.
>>4. En el abierto $U\cap V$, $$g=\omega\left(\frac{\partial}{\partial y_1},\ldots,\frac{\partial}{\partial y_n}\right)=\det\left(\frac{\partial x_i}{\partial y_j}\right)\omega\left(\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\right)=\det\left(\frac{\partial x_i}{\partial y_j}\right)f.$$
>>5. Consideramos $$I_\varphi=\int_{\varphi(U)}f\circ\varphi^{-1}(r_1,\ldots,r_n)\,dr_1\cdots dr_n=\int_{\varphi(U\cap V)}f\circ\varphi^{-1}(r_1,\ldots,r_n)\,dr_1\cdots dr_n$$$$I_\psi=\int_{\psi(V)}g\circ\psi^{-1}(s_1,\ldots,s_n)\,ds_1\cdots ds_n=\int_{\psi(U\cap V)}g\circ\psi^{-1}(s_1,\ldots,s_n)\,ds_1\cdots ds_n$$Donde la segunda igualdad vale porque $\operatorname{sop}\omega\subseteq U\cap V$ y por [[GS - Teo25#^de3f7e]] 
>>6. Queremos ver que son iguales. Consideremos el difeomorfismo entre los abiertos $\psi(U\cap V)$ y $\varphi(U\cap V)$ dado por $$F=\varphi\circ\psi^{-1}.$$
>>7. Usando [[GS - Teo25#^322b65]] tomamos $D$ dominio de integracion abierto en $\psi(U\cap V)$ tal que $$\operatorname{sop}(g\circ\psi^{-1})\subseteq D\subseteq\overline D\subseteq\psi(U\cap V).$$
>>8. Como $$g\circ\psi^{-1}=\det(\operatorname{Jac}(\varphi\circ\psi^{-1}))(f\circ\varphi^{-1}\circ\varphi\circ\psi^{-1})=\det(\operatorname{Jac}(\varphi\circ\psi^{-1}))(f\circ\varphi^{-1}\circ F)$$
>>9. Ahora usando que $F$ es difeo podemos concluir que $F$ manda $\operatorname{sop}(g\circ\psi^{-1})$ en $\operatorname{sop}(f\circ\varphi^{-1})$ esto es por que el factor del determinante no se anula, aemas $F$ manda clausura en clausura y tambien como $F$ es localmente Lipschitz $F$ manda conjuntos de medida cero en conjuntos de medida ceo 
>>10. Por tanto $F(D)$ es un dominio de integracion abierto tal que $$\operatorname {supp}f\circ\varphi ^{-1}\subseteq F(D)\subseteq \overline{F(D)} \subseteq \varphi(U\cap V)$$
>>11. Entonces tenemos esta igualdad $$\int_{\varphi(U\cap V)}f\circ\varphi^{-1}\,dr_1\cdots dr_n =\int_{F(D)}f\circ\varphi^{-1}\,dr_1\cdots dr_n=\int_D(f\circ\varphi^{-1}\circ F)\det(\operatorname{Jac}F)\,ds_1\cdots ds_n.$$ donde usamos el [[GS - Teo25#^d9fdaa]]. Ademas notar que no pusimos el modulo porque $\varphi,\psi$ son cartas positivamente orientadas entonces $|\det(\operatorname{Jac} F)|=\det(\operatorname{Jac} F)=\det(\operatorname{Jac} \psi\circ\varphi ^{-1})>0$  
>>12. Finalmente tenemos que $$\int_D(f\circ\varphi^{-1}\circ F)\det(\operatorname{Jac}F)\,ds_1\cdots ds_n =\int_Dg\circ\psi^{-1}\,ds_1\cdots ds_n=\int_{\psi(U\cap V)}g\circ\psi^{-1}\,ds_1\cdots ds_n$$Osea $I_{\varphi }=I_{\psi}$ 

^4bb08e

>[!Definition] Integral sobre todo $M$
>Sea $(M,A)$ una variedad orientada de dimension $n$ y sea $\omega$ una $n$-forma suave con soporte compacto.
>
>Sea $\{(U_i,\varphi_i)\}$ un conjunto de cartas positivamente orientadas tal que $\{U_i\}$ cubre $\operatorname{sop}(\omega)$ y sea $\{\rho_i\}$ una particion de la unidad subordinada a $\{U_i\}$. Se define la integral de $\omega$ sobre $M$ como
>$$\int_M\omega=\sum_i\int_{U_i}\rho_i\cdot\omega.$$
>Esta es una suma finita de integrales, porque $\operatorname{sop}\omega$ es compacto, y cada sumando esta bien definido por [[GS - Teo25#^11f3f1]]

>[!Proposition]
>$\int_M\omega$ esta bien definida: no depende del cubrimiento abierto ni de la particion de la unidad.
>
>>[!Proof]-
>>1. Sea $\{(\widetilde U_k,\widetilde\varphi_k)\}$ otro cubrimiento por cartas positivamente orientadas de $\operatorname{supp}(\omega)$ y sea $\{\widetilde\rho_k\}$ una partición de la unidad subordinada a $\{\widetilde U_k\}$.
>>2. Por definición, usando el primer cubrimiento, tenemos $$\int_M\omega=\sum_i\int_{U_i}\rho_i\omega$$
>>3. Para cada $i$, como $\sum_k\widetilde\rho_k=1$ sobre $\operatorname{supp}(\rho_i\omega)$, se tiene $$\int_{U_i}\rho_i\omega=\int_{U_i}\left(\sum_k\widetilde\rho_k\right)\rho_i\omega=\sum_k\int_{U_i}\widetilde\rho_k\rho_i\omega$$
>>4. Para cada par $(i,k)$, $\operatorname{supp}(\widetilde\rho_k\rho_i\omega)\subseteq\operatorname{supp}(\rho_i)\cap\operatorname{supp}(\widetilde\rho_k)\cap\operatorname{supp}(\omega)\subset U_i\cap\widetilde U_k$.
>>5. Entonces $\widetilde\rho_k\rho_i\omega$ tiene soporte compacto contenido tanto en $U_i$ como en $\widetilde U_k$. Por independencia de la carta orientada [[GS - Teo25#^4bb08e]] tenemos $$\int_{U_i}\widetilde\rho_k\rho_i\omega=\int_{\widetilde U_k}\widetilde\rho_k\rho_i\omega$$
>>6. Sustituyendo en la suma, $$\sum_i\int_{U_i}\rho_i\omega=\sum_i\sum_k\int_{\widetilde U_k}\widetilde\rho_k\rho_i\omega=\sum_k\sum_i\int_{\widetilde U_k}\widetilde\rho_k\rho_i\omega$$
>>7. Como $\sum_i\rho_i=1$ sobre $\operatorname{supp}(\widetilde\rho_k\omega)$, obtenemos $$\sum_k\sum_i\int_{\widetilde U_k}\widetilde\rho_k\rho_i\omega=\sum_k\int_{\widetilde U_k}\widetilde\rho_k\omega$$
>>8. Mostrando que $$\sum_i\int_{U_i}\rho_i\omega=\sum_k\int_{\widetilde U_k}\widetilde\rho_k\omega$$
>>9. Luego ambos procedimientos dan el mismo valor, es decir, $\int_M\omega$ no depende del cubrimiento ni de la partición de la unidad.

>[!Definition] Orden opuesto
>Sea $(M,A)$ una variedad orientada, con
>$$A=\{(U_\alpha,\varphi_\alpha=(x_1^\alpha,\ldots,x_n^\alpha))\}.$$
>Sea
>$$-A=\{(U_\alpha,\widehat\varphi_\alpha=(-x_1^\alpha,x_2^\alpha,\ldots,x_n^\alpha))\}.$$
>Es facil ver que $-A$ es un atlas de orientacion sobre $M$, y se llama la orientacion opuesta sobre $M$. Denotamos por $-M$ a $(M,-A)$.

>[!Definition] $n$-forma positivamente orientada
>Sea $(M,A)$ una variedad orientable y $\omega\in\Omega^n(M)$ nunca nula. Se dice que $\omega$ esta positivamente orientada si
>$$\omega_p\left(\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_n}\bigg|_p\right)>0$$
>para todo $p\in M$ y toda carta $(U,\varphi=(x_1,\ldots,x_n))$ en $A$.

^46786b

>[!Definition] Difeomorfismo que preserva orientacion
>Sean $M$ y $N$ variedades orientadas y sea $F:M\to N$ un difeomorfismo local. Se dice que $F$ preserva la orientacion si para cada $p\in M$, $(dF)_p$ manda bases positivamente orientadas de $T_pM$ a bases positivamente orientadas de $T_{F(p)}N$. De manera dual, se define que $F$ reversa la orientacion.

>[!Proposition] Propiedades de integrales de formas
>Sean $M$ y $N$ variedades orientadas de dimension $n$, y sean $\omega$ y $\eta$ $n$-formas con soporte compacto sobre $M$.
>
>2. Linealidad: si $a,b\in\mathbb R$, entonces
>$$\int_Ma\omega+b\eta=a\int_M\omega+b\int_M\eta.$$
>3. Orientacion opuesta:
>$$\int_{-M}\omega=-\int_M\omega.$$
>4. Positividad: sea $M$ compacta. Si $\omega$ es una $n$-forma positivamente orientada, entonces
>$$\int_M\omega>0.$$
>5. Invariancia por difeomorfismos: si $F:N\to M$ preserva la orientacion o reversa la orientacion, entonces
>$$\int_M\omega=
>\begin{cases}
>\int_NF^*\omega,&\text{si }F\text{ preserva},\\
>-\int_NF^*\omega,&\text{si }F\text{ reversa}.
>\end{cases}$$
>
>>[!Proof]-
>>- (i)
>>1. Como $$\operatorname{sop}(a\omega+b\eta)\subseteq\operatorname{sop}(\omega)\cup\operatorname{sop}(\eta),$$y $\operatorname{sop}(\omega)\cup\operatorname{sop}(\eta)$ es compacto, tomamos un cubrimiento abierto $\{U_i\}$ de este compacto por dominios de cartas positivamente orientadas.
>>2. Este mismo sirve para $\operatorname{sop}(a\omega+b\eta)$. Sea $\{\rho_i\}$ una particion de la unidad subordinada a $\{U_i\}$. Por independencia de la integral respecto del cubrimiento y de la particion, $$\begin{align} \int_Ma\omega+b\eta& =\sum_i\int_{U_i}\rho_i(a\omega+b\eta)\\&=\sum_i\left(a\int_{U_i}\rho_i\omega+b\int_{U_i}\rho_i\eta\right)\\&=a\int_M\omega+b\int_M\eta\end{align}$$
>>- (ii)
>>1. Primero vemos el caso en que $\operatorname{sop}\omega$ cae en el dominio de una carta positivamente orientada $(U,\varphi=(x_1,\ldots,x_n))$. Entonces $(U,\widetilde\varphi=(-x_1,x_2,\ldots,x_n))$ es una carta de $-M$ y $\widetilde\varphi=T\circ\varphi$, con $T(y_1,\ldots,y_n)=(-y_1,y_2,\ldots,y_n)$.
>>2. Si $$\omega=f\,dx_1\wedge\cdots\wedge dx_n=-f\,d(-x_1)\wedge dx_2\wedge\cdots\wedge dx_n,$$entonces, tomando $D$ dominio de integracion abierto que contiene el soporte, $$\int_{-U}\omega=\int_D(-f\circ\widetilde\varphi^{-1})\,ds_1\cdots ds_n =-\int_{\varphi(U)}f\circ\varphi^{-1}\,dx_1\cdots dx_n=-\int_U\omega.$$
>>3. El caso general se obtiene cubriendo $\operatorname{sop}\omega$ por dominios de cartas positivamente orientadas $\{U_i\}$, usando las cartas negativamente orientadas $(U_i,T\circ\varphi_i)$ y una particion de la unidad.
>>- (iii)
>>1. Como $\omega$ es positivamente orientada, si $(U,\varphi=(x_1,\ldots,x_n))$ es una carta positivamente orientada, entonces $$\omega|_U=f\,dx_1\wedge\cdots\wedge dx_n,\qquad f(p)>0\quad\forall p\in U.$$
>>2. Como $M$ es compacta, podemos cubrirla con una familia finita de abiertos $\{U_i\}$ que son dominios de cartas positivamente orientadas. Sea $\{\rho_i\}$ una particion de la unidad subordinada a $\{U_i\}$. Tenemos $$\int_M\omega=\sum_i\int_{U_i}\rho_i\omega.$$
>>3. Como $\rho_i\ge0$ y $f_i>0$, entonces $\rho_if_i\ge0$, asi que $$\int_{U_i}\rho_i\omega\ge0$$por Analisis III.
>>4. Por otro lado, dado $p\in M$, $\sum_i\rho_i(p)=1$, entonces existe $i$ tal que $\rho_i(p)>0$. Por continuidad, $\rho_i>0$ en un abierto que contiene a $p$, y por lo tanto $\rho_if_i>0$ en un abierto de $U_i$, lo que implica $$\int_{U_i}\rho_i\omega>0$$para algun $i$.
>>- (iv)
>>1. Supongamos primero el caso donde $\operatorname{sop}\omega$ esta contenido en el dominio de una carta positivamente orientada $(U,\varphi)$. Como $F:N\to M$ es difeomorfismo y preserva la orientacion o reversa la orientacion, entonces $(F^{-1}(U),\varphi\circ F)$ es una carta positivamente orientada de $N$ o negativamente orientada, respectivamente, que contiene al soporte de $F^*\omega$.
>>2. Si $$\omega=f\,dx_1\wedge\cdots\wedge dx_n\quad\text{sobre }U,$$entonces $$F^*\omega=(f\circ F)\,d(x_1\circ F)\wedge\cdots\wedge d(x_n\circ F).$$
>>3. Si $F$ preserva orientacion, usando la carta $(F^{-1}(U),\varphi\circ F)$, $$\int_NF^*\omega=\int_{F^{-1}(U)}F^*\omega=\int_{\varphi(U)}(f\circ F)\circ(\varphi\circ F)^{-1}\,dx_1\cdots dx_n=\int_M\omega.$$
>>4. Si $F$ invierte la orientacion, se usa la carta positiva respecto de $N$ obtenida al cambiar el signo de la primera coordenada, y queda $$\int_NF^*\omega=-\int_M\omega.$$
>>5. El caso general es directo usando el caso anterior y la definicion de integral por cubrimiento de dominios de cartas positivamente orientadas.

>[!Proposition] Integracion sobre parametrizaciones
>Sea $M$ variedad orientada de dimension $n$ y sea $\omega$ una $n$-forma de soporte compacto. Supongamos que hay $D_1,\ldots,D_k$ dominios de integracion abiertos de $\mathbb R^n$ y funciones suaves $F_i:\overline{D_i}\to M$ que satisfacen:
>- (a) $F_i:D_i\subseteq\mathbb R^n\to W_i$ es un difeomorfismo sobre $W_i$ abierto de $M$.
>- (b) $W_i\cap W_j=\varnothing$ cuando $i\neq j$.
>- (c) $\operatorname{sop}\omega\subseteq\overline{W_1}\cup\cdots\cup\overline{W_k}$.
>
>Entonces: $$\int_M\omega=\sum_{i=1}^k\int_{D_i}F_i^*\omega.$$
>
>>[!Proof]-
>>1. No la hizo

>[!Remark]
>Para la prueba, se necesita usar propiedades de las integrales.
>Sea $D\subseteq\mathbb R^n$ un dominio de integracion y sean $f,g:D\to\mathbb R$ continuas y acotadas.
>3. Para $a,b\in\mathbb R$,$$\int_D(af+bg)\,dV=a\int_Df\,dV+b\int_Dg\,dV.$$
>4. Si $D$ tiene medida cero, entonces $\int_Df\,dV=0$.
>5. Si $D_1,\ldots,D_k$ son dominios de integracion cuya union es $D$ y cuyas intersecciones dos a dos tienen medida cero, entonces
>6. $$\int_Df\,dV=\int_{D_1}f\,dV+\cdots+\int_{D_k}f\,dV.$$
>7. Si $f\ge0$ en $D$, entonces $\int_Df\,dV\ge0$, con igualdad si y solo si $f\equiv0$ en $\operatorname{int}D$.
>8. $$(\inf_Df)\operatorname{Vol}(D)\le\int_Df\,dV\le(\sup_Df)\operatorname{Vol}(D).$$
>9. $$\left|\int_Df\,dV\right|\le\int_D|f|\,dV.$$


