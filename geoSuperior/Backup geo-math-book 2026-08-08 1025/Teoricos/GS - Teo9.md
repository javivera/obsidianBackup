# Subvariedades

>[!Definition] Inmersión
>Sean $M$ y $N$ variedades suaves y sea
>$$
>F:M\to N
>$$
>una función suave. Se dice que $F$ es una **inmersión** si para todo $p\in M$ la diferencial
>$$
>(dF)_p:T_pM\to T_{F(p)}N
>$$
>es inyectiva.

>[!Definition] Subvariedad
>Se dice que el par $(M,F)$ es una **subvariedad** de $N$ si
>$$
>F:M\to N
>$$
>es una inmersión y ademas es inyectiva.

>[!Definition] Subvariedad incrustada
>Se dice que $(M,F)$ es una **subvariedad incrustada** de $N$ si además $$F:M\to F(M)\subseteq N$$ es homeomorfismo entre $M$ y $F(M)$ , donde $F(M)$ lleva la topología heredada de $N$ 
>En ese caso se dice también se dice que $F$ es una **incrustación suave**.

## Ejemplos

>[!Example] Inclusion
>Supongamos que $m<n$ y definimos
>$$c:\mathbb R^m\to\mathbb R^n,\qquad c(x^1,\dots,x^m)=(x^1,\dots,x^m,0,\dots,0).$$
>Queremos ver que $c$ es una incrustación suave de $\mathbb R^m$ en $\mathbb R^n$.
>
>>[!Proof]-
>>- **$c$ es suave**
>>	1. Cada función coordenada de $c$ es suave: $$c^i(x)=x^i\quad\text{si }1\le i\le m,$$y $$c^i(x)=0\quad\text{si }m+1\le i\le n.$$
>>	2. Por lo tanto $c$ es $C^\infty$.
>>- **$c$ es inyectiva**
>>	1. Si $$c(x^1,\dots,x^m)=c(y^1,\dots,y^m),$$ entonces, comparando las primeras $m$ coordenadas, $$x^i=y^i,\qquad i=1,\dots,m.$$ Luego $$(x^1,\dots,x^m)=(y^1,\dots,y^m).$$Por lo tanto $c$ es inyectiva.
>>- **Cálculo del diferencial**
>>	1. Usamos cartas identidad: $$\varphi=\operatorname{id}_{\mathbb R^m},\qquad \psi=\operatorname{id}_{\mathbb R^n}.$$
>>	2. Entonces $$\widehat c=\psi\circ c\circ\varphi^{-1}=c.$$
>>	3. Y con sus respectivas bases sabemos $$[dc_{x}]_{\mathcal{B_{1}}}^{\mathcal{B_{2}}}=J\widehat c(\varphi(x))=Jc(x)=\begin{pmatrix}1&0&\cdots&0\\0&1&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&0\end{pmatrix}.$$  
>>	4. Así, $$dc_x(v^1,\dots,v^m)=(v^1,\dots,v^m,0,\dots,0).$$
>>	5. Si $dc_x(v)=0,$ entonces $$(v^1,\dots,v^m,0,\dots,0)=(0,\dots,0),$$y por lo tanto $$v^1=\cdots=v^m=0.$$
>>	6. Luego $v=0$, y entonces $$dc_x:T_x\mathbb R^m\to T_{c(x)}\mathbb R^n$$es inyectiva.
>>- **$c$ es homeomorfismo sobre su imagen**
>>	1. La imagen de $c$ es $$c(\mathbb R^m)=\mathbb R^m\times\{0\}^{n-m}\subseteq\mathbb R^n.$$
>>	2. Definimos $$\pi:c(\mathbb R^m)\to\mathbb R^m,\qquad \pi(y^1,\dots,y^n)=(y^1,\dots,y^m).$$
>>	3. Esta aplicación es continua porque es la restricción de la proyección continua $$\operatorname{pr}:\mathbb R^n\to\mathbb R^m,\qquad \operatorname{pr}(y^1,\dots,y^n)=(y^1,\dots,y^m).$$
>>	4. Además, $$\pi(c(x^1,\dots,x^m))=(x^1,\dots,x^m),$$es decir, $$\pi\circ c=\operatorname{id}_{\mathbb R^m}.$$
>>	5. Y si $y\in c(\mathbb R^m)$, entonces $$y=(y^1,\dots,y^m,0,\dots,0),$$por lo que $$c(\pi(y))=c(y^1,\dots,y^m)=(y^1,\dots,y^m,0,\dots,0)=y.$$
>>	6. Entonces $$c\circ\pi=\operatorname{id}_{c(\mathbb R^m)}.$$
>>	7. Así, $\pi=c^{-1}$ sobre la imagen, y $c:\mathbb R^m\to c(\mathbb R^m)$ es un homeomorfismo.
>>- **Conclusión**
>>	La aplicación $c$ es suave, inyectiva, su diferencial es inyectivo en todo punto, y además $c$ es un homeomorfismo sobre su imagen.
>>	Por lo tanto $$c:\mathbb R^m\to\mathbb R^n$$es una incrustación suave.

>[!Example] Helice
>Sea
>$$f:\mathbb R\to\mathbb R^3,\qquad f(t)=(\cos t,\sin t,t).$$
>Queremos ver que $f$ es una incrustación suave de $\mathbb R$ en $\mathbb R^3$.
>
>>[!Proof]-
>>- **$f$ es suave**
>>	1. Usando la carta de identidad de ambos lados con $\mathbb{R}$ y $\mathbb{R}^{3}$ respectivamente
>>	2. Se reduce a ver que $f$ es suave como lo haciamos normalmente
>>	3. Las funciones coordenadas de $f$ son $$f^1(t)=\cos t,\qquad f^2(t)=\sin t,\qquad f^3(t)=t.$$
>>	4. Todas son $C^\infty$, por lo tanto $f$ es $C^\infty$.
>>- **$f$ es inyectiva**
>>	1. Supongamos que $$f(t)=f(s).$$
>>	2. Entonces $$(\cos t,\sin t,t)=(\cos s,\sin s,s).$$
>>	3. Comparando la tercera coordenada, $$t=s.$$
>>	4. Por lo tanto $f$ es inyectiva.
>>- **$df_t$ es inyectiva**
>>	1. $df_t:T_t\mathbb R\to T_{f(t)}\mathbb R^3$ con base de $T_t\mathbb R$ $$\left\{\frac{\partial}{\partial t}\bigg|_t\right\},$$ y base de $T_{f(t)}\mathbb R^3$: $$\left\{\frac{\partial}{\partial x_k}\bigg|_{f(t)}\right\}.$$
>>	2. Luego $$f'(t)=(df)_t\frac{\partial}{\partial t}\bigg|_t=\sum_{k=1}^3 a_k(t)\frac{\partial}{\partial x_k}\bigg|_{f(t)}.$$
>>	3. Encontramos $a_k$ actuando sobre $x_k=\pi_k$ (aca asumimos que la carta para $\mathbb{R}^{3}$ es la identidad) $$\sum_{k=1}^3 a_k(t)\frac{\partial}{\partial x_k}\bigg|_{f(t)}=\sum_{k=1}^3 (df)_t\frac{\partial}{\partial t}\bigg|_t(\pi_k)\frac{\partial}{\partial x_k}\bigg|_{f(t)}.$$
>>	4. Por definición de diferencial: $$\sum_{k=1}^3\frac{\partial}{\partial t}\bigg|_t(\pi_k\circ f)\frac{\partial}{\partial x_k}\bigg|_{f(t)}.$$
>>	5. Ahora: $$\pi_1\circ f=\cos t,\qquad \pi_2\circ f=\sin t,\qquad \pi_3\circ f=t.$$
>>	6. Entonces: $$(df)_t\left(\frac{\partial}{\partial t}\bigg|_t\right)=-\sin t\frac{\partial}{\partial x_1}\bigg|_{f(t)}+\cos t\frac{\partial}{\partial x_2}\bigg|_{f(t)}+1.\frac{\partial}{\partial x_3}\bigg|_{f(t)}$$
>>	7. Identifico $T_{f(t)}\mathbb R^3$ con $\mathbb R^3.$ Entonces tenemos el viejo y conocido $$(df)_t\left(\frac{\partial}{\partial t}\bigg|_t\right)=(-\sin t,\cos t,1).$$
>>	8. Luego $$(df)_t\lambda\frac{\partial}{\partial t}\bigg|_t$$es cero sii $\lambda=0,$ porque $$\lambda(-\sin t,\cos t,1)=0.$$
>>	9. Por lo tanto $$\ker(df_t)=\{0\}.$$ Osea $df_{t}$ es inyectiva para cualquier $t$  
>>- **$f$ es homeomorfismo sobre su imagen**
>>	1. La imagen de $f$ es $$f(\mathbb R)=\{(\cos t,\sin t,t):t\in\mathbb R\}\subseteq\mathbb R^3.$$
>>	2. Definimos $$\pi_3:\mathbb R^3\to\mathbb R,\qquad \pi_3(x^1,x^2,x^3)=x^3.$$
>>	3. Entonces $\pi_3$ es continua. Además, $$\pi_3(f(t))=\pi_3(\cos t,\sin t,t)=t.$$
>>	4. Por lo tanto $$\pi_3|_{f(\mathbb R)}:f(\mathbb R)\to\mathbb R$$ es la inversa de $f:\mathbb R\to f(\mathbb R)$.
>>	5. En efecto: $$\pi_3|_{f(\mathbb R)}\circ f=\operatorname{id}_{\mathbb R},$$y si $p\in f(\mathbb R)$, entonces $p=f(t)$ para algún $t$, y $$f(\pi_3(p))=f(\pi_3(f(t)))=f(t)=p.$$
>>	6. Entonces $$f\circ \pi_3|_{f(\mathbb R)}=\operatorname{id}_{f(\mathbb R)}.$$
>>	7. Así, $f$ es un homeomorfismo sobre su imagen.
>>- **Conclusión.**
>>	La aplicación $f$ es suave, inyectiva, su diferencial es inyectivo en todo punto, y además $f$ es un homeomorfismo sobre su imagen.
>>	Por lo tanto $$f:\mathbb R\to\mathbb R^3$$ es una incrustación suave.

>[!Exercise]
>En general, si $$f:I\subseteq\mathbb R\to M$$ es suave, entonces $f$ es inmersión si y solo si $$f'(t)\neq 0$$ para todo $t\in I$.
>
>>[!Proof]-
>>1. Para cada $t\in I$, el espacio tangente $T_tI$ es $1$-dimensional y tiene base
>>$$
>>\left\{\frac{\partial}{\partial t}\bigg|_t\right\}.
>>$$
>>2. Por definición, la derivada de la curva en $t$ es
>>$$
>>f'(t):=(df)_t\left(\frac{\partial}{\partial t}\bigg|_t\right)\in T_{f(t)}M.
>>$$
>>3. Supongamos primero que $f$ es inmersión. Entonces
>>$$
>>(df)_t:T_tI\to T_{f(t)}M
>>$$
>>es inyectiva para todo $t\in I$.
>>4. Como $\frac{\partial}{\partial t}\big|_t\neq 0$, por inyectividad se tiene
>>$$
>>(df)_t\left(\frac{\partial}{\partial t}\bigg|_t\right)\neq 0.
>>$$
>>Por lo tanto $f'(t)\neq 0$ para todo $t\in I$.
>>5. Recíprocamente, supongamos que $f'(t)\neq 0$ para todo $t\in I$.
>>6. Sea $v\in T_tI$. Como $T_tI$ es $1$-dimensional, existe $\lambda\in\mathbb R$ tal que
>>$$
>>v=\lambda\frac{\partial}{\partial t}\bigg|_t.
>>$$
>>7. Si $(df)_t(v)=0$, entonces
>>$$
>>0=(df)_t\left(\lambda\frac{\partial}{\partial t}\bigg|_t\right)=\lambda (df)_t\left(\frac{\partial}{\partial t}\bigg|_t\right)=\lambda f'(t).
>>$$
>>8. Como $f'(t)\neq 0$, necesariamente $\lambda=0$. Luego $v=0$.
>>9. Entonces
>>$$
>>\ker(df)_t=\{0\},
>>$$
>>y por lo tanto $(df)_t$ es inyectiva para todo $t\in I$.
>>10. Concluimos que $f$ es inmersión si y solo si $f'(t)\neq 0$ para todo $t\in I$.

>[!Example] Esfera es subvariedad incrustada
>Sea $S^2$ la esfera con su estructura de variedad suave usual, y pensemos en $$i:S^2\to\mathbb R^3$$ la inclusión, $$p\mapsto i(p)=p.$$
>Veamos que $(S^2,i)$ es una subvariedad incrustada.
>
>>[!Proof]-
>>- **$i$ es suave** 
>>	1. Tomamos la carta identidad en $\mathbb{R}^{3}$ y la proyeccion estereografica $\varphi$ (o cualquiera otra) y se reduce a ver que dado $p\in S^{2}$ $i\circ\varphi ^{-1}$ es suave 
>>	2. Pero $i\circ\varphi ^{-1}=\varphi ^{-1}$ por definicion de $i$ y recordemos que $\varphi ^{-1}$ es suave por ser $\varphi$ carta   
>>- **$i$ es función inyectiva** Trivial
>>- **$(di)_p:T_pS^2\to T_p\mathbb R^3$ es inyectiva**
>>	1. Supongamos que $p$ está en el casquete $U_1^\varepsilon$ y Tenemos la carta $$(U_{i}^{\epsilon,} \psi_1^\varepsilon=(x_1,x_2)),$$ dada por $q=(q_{1},q_{2},q_{3})$ $$x_1(q)=q_2,\qquad x_2(q)=q_3.$$
>>	2. Su inversa es $$(\psi_1^\varepsilon)^{-1}(s_1,s_2)=(\varepsilon\sqrt{1-s_1^2-s_2^2},s_1,s_2).$$
>>	3. Recordar: $$U_i^\varepsilon=\{(q_1,q_2,q_3)\in S^2:q_i\varepsilon>0\},\qquad \varepsilon=\pm1.$$
>>	4. Tenemos base de $T_pS^2$ dada por $$\mathcal B_1=\left\{\frac{\partial}{\partial x_1}\bigg|_p,\frac{\partial}{\partial x_2}\bigg|_p\right\}.$$
>>	5. Y base de $T_p\mathbb R^3$ dada por $$\mathcal B_2=\left\{\frac{\partial}{\partial y_1}\bigg|_p,\frac{\partial}{\partial y_2}\bigg|_p,\frac{\partial}{\partial y_3}\bigg|_p\right\}.$$
>>	6. Calculamos la matriz de $[(di)_p]^{\mathcal B_2}_{\mathcal B_1}.$ $$(di)_p\frac{\partial}{\partial x_1}\bigg|_p=\sum_{k=1}^3 a_k(p)\frac{\partial}{\partial y_k}\bigg|_p.$$
>>	7. Aplicamos $y_k$ para obtener $a_k$: $$\sum_{k=1}^3 (di)_p\frac{\partial}{\partial x_1}\bigg|_p(y_k)\frac{\partial}{\partial y_k}\bigg|_p.$$
>>	8. Por definición de diferencial: $$\sum_{k=1}^3 \frac{\partial}{\partial x_1}\bigg|_p(y_k\circ i)\frac{\partial}{\partial y_k}\bigg|_p=\sum_{k=1}^3 \frac{\partial}{\partial s_1}\bigg|_{\varphi_{1}^{\epsilon} (p)}(y_k\circ i\circ(\psi_{1}^{\epsilon})^{-1} )\frac{\partial}{\partial y_k}\bigg|_p.$$
>>	9. Ademas notemos que $$y_1\circ i\circ(\psi_1^\varepsilon)^{-1}(s_1,s_2)=\varepsilon\sqrt{1-s_1^2-s_2^2},$$$$y_2\circ i\circ(\psi_1^\varepsilon)^{-1}(s_1,s_2)=s_1,$$$$y_3\circ i\circ(\psi_1^\varepsilon)^{-1}(s_1,s_2)=s_2.$$
>>	10. Y ademas notando que $\psi_1^\varepsilon(p)=(p_{2},p_{3})$ tenemos $$(di)_p\frac{\partial}{\partial x_1}\bigg|_p=\varepsilon\frac{-p_2}{\sqrt{1-p_2^2-p_3^2}}\frac{\partial}{\partial y_1}\bigg|_p+1\frac{\partial}{\partial y_2}\bigg|_p+0\frac{\partial}{\partial y_3}\bigg|_p.$$
>>	11. Similarmente: $$(di)_p\frac{\partial}{\partial x_2}\bigg|_p=\varepsilon\frac{-p_3}{\sqrt{1-p_2^2-p_3^2}}\frac{\partial}{\partial y_1}\bigg|_p+0\frac{\partial}{\partial y_2}\bigg|_p+1\frac{\partial}{\partial y_3}\bigg|_p.$$
>>	12. Por lo tanto la matriz de $[(di)_p]^{\mathcal B_2}_{\mathcal B_1}$ es $$\begin{pmatrix}-\frac{p_2}{p_1}&-\frac{p_3}{p_1}\\1&0\\0&1\end{pmatrix}.$$
>>	13. Por el teorema del rango y la dimensión, $(di)_p$ es inyectiva sii $\operatorname{Im}(di)_p$ tiene rango $2$.
>>	14. Y esto es equivalente a que la anterior matriz tenga una submatriz $2\times 2$ no singular.
>>	15. En este caso sería $A[2:3,2:3]$ con $$A=[(di)_p]^{\mathcal B_2}_{\mathcal B_1}.$$
>>- **Homeomorfismo**
>>	1. Es trivial, por que la topologia que le dimos a $S^{2}$ para verla como variedad diferenciable es la topologia heredada de $\mathbb{R}^{3}$  

>[!Example] El ocho no es subvariedad incrustada
>Considérese $$f:\mathbb{R}\to\mathbb R^2, \qquad f(t)=\sin t\left(\cos t,1\right)=\left(\frac{\sin 2t}{2},\sin t\right)$$
>Su imagen es la curva con forma de ocho. Entonces $((0,2\pi),f)$ es una subvariedad de $\mathbb{R}^{2}$ pero no incrustada
>
>>[!Proof]-
>>2. $g$ es claramente suave e inyectiva
>>3. Devuelta usando cartas identidad y bases tangentes podemos calcular el jacobiano (gradiente en este caso). $$[dg_{t}]=\begin{pmatrix}\cos^{2}t-\sin^{2}t\\\cos t\end{pmatrix}=\begin{pmatrix}\cos2t\\ \cos t\end{pmatrix}$$
>>4. Y esta claro que la unica forma de que esto sea el vector nulo es que $\cos t=0$ osea $t=\frac{2k+1}{2}\pi$ entonces $\cos 2t=\cos(2k+1)=1$. Osea no puede ser el vector nulo. Para ningun punto $t$ 
>>5. Por ende la unica forma de que el diferencial sea $0$ es evaluando en $0$ osea su $\ker = \{ 0 \}$ 
>>6. Pero $f$ no es inyectiva asi que no es subvariedad
>>7. Entonces redefinimos a $$g:(0,2\pi)\to\mathbb R^2, \qquad g(t)=\sin t\left(\cos t,1\right)$$ ![[Pasted image 20260425112115.png]]
>>- **$f$ es inyectiva** Sea $f(t)=\left(\frac{\sin 2t}{2},\sin t\right)=\left(\frac{\sin 2s}{2},\sin s\right)=f(s)$.
>>	1. Si $t=s$, listo. Por lo que supongamos $t\neq s$.
>>	2. De $\sin t=\sin s$ se sigue que $t=s+2k\pi$ o $t=\pi-s+2k\pi$, con $k\in\mathbb Z$.
>>	3. Si $\sin t=0$, entonces $\sin s=0$, y en $(0,2\pi)$ solo es posible si $t=s=\pi$.
>>	4. Si $\sin t\neq0$, entonces $\sin s\neq0$. Además, de $\frac{\sin 2t}{2}=\frac{\sin 2s}{2}$ se obtiene $\sin t\cos t=\sin s\cos s$.
>>	5. Como $\sin t=\sin s\neq0$, concluimos $\cos t=\cos s$.
>>	6. En cualquiera de los casos, $\sin t=\sin s$ y $\cos t=\cos s$.
>>	7. Como $0<s,t<2\pi$, esto implica $|t-s|<2\pi$.
>>	8. Pero si tienen el mismo seno y coseno, entonces $t-s=2k\pi$ con $k\in\mathbb Z$.
>>	9. Luego $|k|<1$, por lo tanto $k=0$. Así, $t=s$.
>>- Que es inmersion sale igual que antes por que el diferencial no cambia. Luego $((0,2\pi),g)$ es subvariedad.
>>- **$f$ no es homeomorfismo**
>>	1. Para ver esto, tenemos que mostrar que $g$ no produce un homeomorfismo entre $(0,2\pi)$ y el ocho con la topología de $\mathbb R^2$.
>>	2. La idea está en que hay puntos "cercanos" en el ocho pero cuando se ven en $(0,2\pi)$ están "lejos".
>>	3. Razonemos por el absurdo. Supongamos que $$g:(0,2\pi)\to\text{ocho}$$ es homeomorfismo.
>>	4. Entonces $$g^{-1}:\text{ocho}\to(0,2\pi)$$ es continua.
>>	5. Tomemos la sucesión de puntos del ocho $$p_n=g\left(\frac1n\right)=\left(\frac{\sin(2/n)}{2},\sin(1/n)\right).$$
>>	6. Con la topología del subespacio, $\{p_n\}$ es una sucesión de puntos del ocho que converge a $(0,0)$.
>>	7. Por tanto, como $g^{-1}$ es continua, la sucesión $\{g^{-1}(p_n)\}$ debería converger a $g^{-1}(0,0)=\pi$.
>>	8. Pero $$g^{-1}(p_n)=\frac1n,$$ luego $$g^{-1}(p_n)\to0.$$
>>	9. Por lo tanto, $g$ no es homeomorfismo sobre su imagen.
>>- Así, $((0,2\pi),g)$ es una subvariedad inmersa, pero no una subvariedad incrustada.

## Equivalencia de subvariedades

>[!Definition] Equivalencia de subvariedades
>Dos subvariedades
>$$
>(N_1,f_1),\qquad (N_2,f_2)
>$$
>de una variedad suave $M$ se dicen **equivalentes** si existe un difeomorfismo $$\Phi:N_1\to N_2$$tal que $$f_1=f_2\circ\Phi$$
>Esto define una relación de equivalencia en el conjunto de todas las subvariedades de $M$.
>Analogamente
>![[Pasted image 20260425120519.png]] 
>es un diagrama conmutativo

>[!Proposition] Representante incrustado único
>Sea $M$ una variedad suave. Toda clase de equivalencia $[(N,f)]$ de subvariedades de $M$ contiene un único representante de la forma $$(\widehat N,i)$$donde $\widehat N\subseteq M$ es un subconjunto e $$i:\widehat N\hookrightarrow M$$es la inclusión.
>
>>[!Proof]-
>>1. Como $(N,f)$ una subvariedad de $M$. Como $f$ es inyectiva, induce una biyección $$\widehat f:N\to \widehat N:=f(N)$$ notar que como cambia el conjunto de llegada cambia la funcion
>>2. Transportamos la topología y la estructura suave de $N$ a $\widehat N$ mediante $\widehat f$. Con esa estructura, $\widehat f$ es un difeomorfismo.
>>3. Si $i:\widehat N\hookrightarrow M$ es la inclusión, entonces $$f=i\circ \widehat f$$
>>4. Veamos que $i:\widehat N\to M$ es suave. Las cartas de $\widehat N$ son de la forma $(\widehat U,\psi=\varphi\circ \widehat f^{-1})$, donde $\widehat U=\widehat f(U)$ y $(U,\varphi)$ es carta de $N$.
>>5. Para cada una de estas cartas, $$i\circ(\varphi\circ \widehat f^{-1})^{-1}:\varphi(U)\to M$$ es suave, pues $$i\circ(\varphi\circ \widehat f^{-1})^{-1}= f\circ\varphi^{-1}:\varphi(U)\to M,$$que es suave, ya que $f:U\to M$ es suave por hipótesis y $\varphi$ es carta, osea suave 
>>6. Notar que alcanza con una sola de las composiciones por que si $f\circ \varphi ^{-1}$ es suave entonces $\psi\circ f\circ\varphi ^{-1}$ va a ser suave para cualquier $\psi$ carta   
>>7. En cuanto a $(di)_p:T_p\widehat N\to T_pM$, esta es inyectiva, por que $f=i\circ\widehat f$, entonces $df_p=(di)_{\widehat f(p)}(d\widehat f)_p$. 
>>8. Y al ser $(d f)_p$ inyectiva y $(d\widehat f)_{p}$ isomorfismo sobre su imagen (por que $\tilde{f}$ es homeomorfismo), entonces $(di)_{\widehat f(p)}$ debe ser inyectiva.
>>9. Por lo tanto $(\widehat{N},i)$ es claramente subvariedad y por 3. (y 2. que dice $\widehat{f}$ es difeo) tenemos $(\widehat{N},i)\in [(N,f)]$
>>- ¿Es el único representante en $[N,f]$ de esta forma?
>>1. Si $(\widetilde N,i)\in[N,f]$, esto quiere decir que existe $$g:N\to\widetilde N$$ difeo tal que $$f=i\circ g.$$
>>2. Pero $f=i\circ\widehat f$  por lo que $\widetilde N=\widehat N$ como conjuntos y  $g=\widehat f$.
>>3. Ahora queremos ver que $\widehat{N}$ y $\widetilde{N}$ tienen la misma estructura diferenciable $\widehat{\mathcal{F}}$ y $\widetilde{\mathcal{F}}$. (Sabemos que son iguales como conjuntos)
>>4. Miramos $$\operatorname{Id}_{\widehat N}:(\widetilde N,\widetilde{\mathcal F})\to(\widehat N,\widehat{\mathcal F}).$$
>>5. Como $\widehat f:N\to(\widehat N,\widehat{\mathcal A})$ es difeo y $\widehat f=g:N\to(\widetilde N,\widetilde{\mathcal A})$ también es difeo (por ser inmersiones, definicion), entonces $$g\circ\widehat f^{-1}=\widehat f\circ\widehat f^{-1}=\operatorname{Id}_{\widehat N}$$es difeo. (Que la $Id_{\widehat{N}}$ sea difeo nos dice que para cualquier par de cartas $(\widetilde{N},\varphi)$ y $(\widehat{N},\psi)$ sucede $\psi\circ Id_{\widehat{N}}\circ\varphi ^{-1}=\psi\circ\varphi ^{-1}$ es suave. Mostrando la compatibilidad)
>>6. Por ende las estructuras son las mismas, por que si tomamos cartas cualquier $\varphi,\psi$ en $\widetilde{F},\widehat{F}$ respectivamente  

## Consecuencia práctica

>[!Remark] Identificar una subvariedad con su imagen
>Gracias a la proposición anterior, muchas veces una subvariedad se identifica con un subconjunto
>$$
>\widehat N\subseteq M
>$$
>provisto de la estructura suave que hace a la inclusión una incrustación.
>
>En ese contexto, decir que “$\widehat N$ es una subvariedad de $M$” significa precisamente que la inclusión
>$$
>i:\widehat N\hookrightarrow M
>$$
>es una incrustación suave.

## Ejemplo final

>[!Example] Dos presentaciones del ocho
>Considérese la imagen del ocho en $\mathbb R^2$ y las dos presentaciones $$f:(0,2\pi)\to\mathbb R^2,\qquad f|_{(0,2\pi)}(t)=\left(\frac{\sin 2t}{2},\sin t\right),$$y $$\tilde f:(-\pi,\pi)\to\mathbb R^2,\qquad \tilde f|_{(-\pi,\pi)}(t)=\left(\frac{\sin 2t}{2},\sin t\right)$$
>Estas dos subvariedades no son equivalentes.
>![[Pasted image 20260425170149.png]]
>>[!Idea]-
>>1. Si fueran equivalentes, existiría un difeomorfismo $$F:(0,2\pi)\to(-\pi,\pi)$$tal que $$f=\tilde f\circ F$$
>>2. La unica $F$ que cumple eso manda $t$ a $t$ para $0<t<\pi$ $t$ a $t-2t$ para $\pi<t<2\pi$ y $t$ a $\pi$ si $t=\pi$
>>3. ![[Pasted image 20260425170729.png]]  
>>4. ¿Cómo sale $F$? Si $$f|_{(-\pi,\pi)}\circ F=f|_{(0,2\pi)}.$$
>>5. Si $t\in(0,\pi)$, entonces $f|_{(-\pi,\pi)}(t)=f|_{(0,2\pi)}(t)$.
>>6. Por tanto, $$f|_{(-\pi,\pi)}(F(t))=f|_{(0,2\pi)}(t)=f|_{(-\pi,\pi)}(t).$$
>>7. Y como $f|_{(-\pi,\pi)}$ es inyectiva, se sigue que $F(t)=t$.
>>8. Si $t=\pi$, entonces $$f|_{(-\pi,\pi)}(F(\pi))=f|_{(0,2\pi)}(\pi)=(0,0).$$
>>9. Y como $f|_{(-\pi,\pi)}(0)=0$, con $f|_{(-\pi,\pi)}$ inyectiva, se sigue que $$F(\pi)=0.$$
>>10. Ya con esto, $F$ no es continua. Ver el tramo $(\pi,2\pi)$.

^8ed2bd

