## Vectores tangentes

>[!Remark] Motivación geométrica
>La motivación geométrica es que, por ejemplo, el tangente a la esfera en un punto es el subespacio ortogonal al radio en ese punto. Si eso puede describirse de manera intrínseca, automáticamente aparece una noción de derivada direccional.
>
>Si $p\in S^2$ y $v\in \langle p\rangle^\perp$, entonces para toda $f:S^2\to\mathbb{R}$ suave se puede definir
>$$
>D_vf=\left.\frac{d}{dt}\right|_{t=0}f(\gamma(t)),
>$$
>donde $\gamma$ es una curva suave con $\gamma(0)=p$ y velocidad $\gamma'(0)=v$.
>Que seria la derivada en la direccion de $v$
>Este operador es lineal y satisface la regla de Leibniz. Las notas usan esta idea como motivación para la definición intrínseca de vector tangente.
>El tema es que cuando $M$ es una variedad que no necesariamente esta embebida en $\mathbb{R}^{n}$ entonces esa "direccion" $v$ ya no es un vector de $\mathbb{R}^{n}$    

## Definición de vector tangente

>[!Definition] Vector tangente
>Sea $M$ una variedad suave y $p\in M$. Un **vector tangente a $M$ en $p$** es una derivación en $p$ del álgebra $C^\infty(M)$. Es decir, una función
>$$
>v:C^\infty(M)\to\mathbb{R}
>$$
>tal que:
>- Es lineal: para todo $f,g\in C^\infty(M)$ y $\lambda\in\mathbb{R}$,
>$$
>v(f+\lambda g)=v(f)+\lambda v(g).
>$$
>- Satisface la regla de Leibniz en $p$: para todo $f,g\in C^\infty(M)$,
>$$
>v(fg)=f(p)\,v(g)+g(p)\,v(f).
>$$
>
>Se denota por $T_pM$ al conjunto de todos los vectores tangentes de $M$ en $p$ y se lo llama **espacio tangente** a $M$ en $p$.
>
>El objetivo es mostrar que $T_pM$ tiene una estructura natural de espacio vectorial real de dimensión finita $n$ si $\dim M=n$.

## Estructura de espacio vectorial

>[!Proposition] Estructura de espacio vectorial
>$T_pM$ es un espacio vectorial real con las operaciones
>$$
>(v+w)(f)=v(f)+w(f),\qquad (\lambda v)(f)=\lambda\,v(f).
>$$
>>[!Proof]-
>>1. Para ver que $T_pM$ es un espacio vectorial real, basta ver que es subespacio de $\mathrm{Lin}(C^\infty(M),\mathbb{R})$. 
>>2. Por como estan definidas las operaciones es evidente que $v+w$ y $\lambda v$ estan en $\mathrm{Lin}(C^\infty(M),\mathbb{R})$ con lo cual solo habria que ver Leibniz en ambos casos
>>- $0\in T_pM$ por que cumple Leibniz:  
>>$$0(fg)=0=f(p)\cdot0+g(p)\cdot0$$  
>>- Si $v,w\in T_pM$, entonces $v+w\in T_pM$ (Leibniz para la suma) 
>>$$\begin{align}(v+w)(fg)&=v(fg)+w(fg)\\&=f(p)v(g)+g(p)v(f)+f(p)w(g)+g(p)w(f)\\&=f(p)(v+w)(g)+g(p)(v+w)(f)\end{align}$$
>>- Si $v\in T_pM$ y $\lambda\in\mathbb{R}$, entonces $\lambda v\in T_pM$ (Leibniz para el producto)   
>> $$\begin{align}(\lambda v)(fg)&=\lambda v(fg)\\&=\lambda\big(f(p)v(g)+g(p)v(f)\big)\\&=f(p)(\lambda v)(g)+g(p)(\lambda v)(f)\end{align}$$  
>>Por lo tanto, $T_pM$ es un subespacio de $\mathrm{Lin}(C^\infty(M),\mathbb{R})$ y en consecuencia un espacio vectorial real.
## Lema técnico: funciones campana

>[!Lemma] Funciones campana
>Sea $M$ una variedad suave, $p\in M$ y $U$ un abierto de $p$. Entonces existen un abierto $V$ de $p$, con $\overline{V}\subseteq U$, y una función suave $\beta:M\to\mathbb{R}$ tales que:
>$$\begin{align} & (I)\quad0\leq \beta(x)\leq 1\qquad\forall x\in M \\ & (II) \quad\beta|_{\overline{V}}\equiv 1\\&(III)\quad\operatorname{supp}(\beta)\subseteq U\end{align}$$
>Recordar el soporte es $\operatorname{supp}(\beta)=\{ q\in M:\beta(q)\neq0 \}$ 
>Este es el lema de funciones campana o de levantamiento en variedades suaves.

## Lema técnico: extensión de funciones suaves

>[!Lemma] Extensión de funciones suaves
>Sea $M$ una variedad suave, $p\in M$ y $U$ un abierto de $p$. Para toda $f\in C^\infty(U)$ existen $\widetilde{f}\in C^\infty(M)$ y un abierto $V$ de $p$, con $\overline{V}\subseteq U$, tales que
>$$
>\widetilde{f}=f\qquad\text{sobre }V.
>$$
>>[!Proof]-
>>1. La idea es usar la función $\beta$ del lema técnico, pues $\beta$ vale cero fuera de $U$. Definimos $$\tilde f(q)=\begin{cases}\beta (q)\,f(q) & \text{si } q\in U\\0 & \text{si } q\notin U\end{cases}$$
>>2. El papel de la función $\beta$ es mantener el valor de $f$ sobre $\overline V$ (pues $\beta|_{\overline V}=1$) e ir haciendo cero a $f$ mientras no se está más en $U$.
>>3. Veamos que $\tilde f\in C^\infty(M)$. Para hacer esto, es suficiente con mostrar que para todo $q\in M$ existe un abierto $W$ de $q$ tal que $\tilde f|_W$ es suave.
>>4. ¿Por qué? Porque la suavidad es una propiedad local: una función es suave $(C^{\infty})$ si alrededor de cada punto existe un abierto en el cual su restricción es suave.
>>5. Como $\tilde f$ está definida por partes, analizamos por casos.
>>	- (i) Si $q\in U$. En este caso $$\tilde f|_U=\beta |_U\cdot f|_U$$ y como $\beta|_U$ es suave en $U$ (restricción de una función suave sobre $M$) y $f|_U=f\in C^\infty(U)$, entonces $\tilde f|_U$ es suave por ser producto de funciones suaves.
>>	- (ii) 
>>		1. Si $q\notin U$. Por el lema técnico, $\operatorname{soporte}(\beta)\subset U$, y entonces $q\notin \operatorname{soporte}(\beta)$. 
>>		2. Por definición de soporte, existe un abierto $W$ de $q$ tal que $$\beta |_W\equiv 0.$$
>>		3. Luego $\tilde f|_W$ es constante e igual a cero, pues si $x\in W\cap U$, entonces $$\tilde f(x)=\beta (x)f(x)=0,$$ por 2.
>>		4. Y si $x\in W\cap U^c$, entonces $$\tilde f(x)=0$$ por definición de $\tilde f$.
>>		5. Como toda función constante es suave, se sigue que $$\tilde f|_W\in C^\infty(W).$$
>>6. Como $\tilde f$ es suave en un abierto de cualquier punto de $M$, se sigue que $$\tilde f\in C^\infty(M).$$ y claramente cumple $\widetilde{f}=f$ sobre $V$.

^405b16

## Los vectores tangentes actúan de forma local

>[!Proposition] Localidad de los vectores tangentes
>Sea $M$ una variedad suave, $p\in M$ y $v\in T_pM$. Si $f,g\in C^\infty(M)$ coinciden en un abierto de $p$, entonces
>$$v(f)=v(g).$$
>>[!Proof]-
>>1. Es equivalente demostrar que si $f-g=h\in C^\infty(M)$ se anula en un abierto $U$ de $p$, entonces $v(h)=0$.
>>2. Se toma una función campana $\beta$ con $\beta\equiv 1$ en un abierto $V\subseteq U$ de $p$ y soporte contenido en $U$.
>>3. Entonces $\beta h\equiv 0$ en todo $M$ por que si $x\in U$ $h(x)=0$ y si $x\in U^{c}$ entonces $\beta(x)=0$ entonces $$v(\beta h)=0.$$ por linealidad de $v$ 
>>4. Pero por Leibniz,
>>$$0=v(\beta h)=\beta(p)\,v(h)+h(p)\,v(\beta)=v(h)$$
>>ya que $\beta(p)=1$ y $h(p)=0$.
>>5. Luego $v(h)=0$.

^b713ca

## Vectores coordenados

>[!Definition] Vectores coordenados
>Sea $M$ una variedad suave, $p\in M$, y sea $(U,\varphi=(x_1,\dots,x_n))$ una carta suave alrededor de $p$:
>$$
>\varphi:U\subseteq M\to \varphi(U)\subseteq\mathbb{R}^n,\qquad q\mapsto (x_1(q),\dots,x_n(q)).
>$$
>
>Las funciones coordenadas $x_i:U\to\mathbb{R}$ son suaves. 
>Luego para $f\in C^\infty(M)$ se define $$\left.\frac{\partial}{\partial x_i}\right|_p:C^{\infty}\rightarrow \mathbb{R}\qquad\text{dada por}\qquad\left.\frac{\partial}{\partial x_i}\right|_p f=\left.\frac{\partial}{\partial y_i}\right|_{\varphi(p)}(f\circ\varphi^{-1})$$
>donde $(y_1,\dots,y_n)$ son las coordenadas usuales de $\mathbb{R}^n$.
>Estas aplicaciones se llaman **vectores coordenados** en $p$ asociados a la carta $(U,\varphi)$.

>[!Exercise] Vectores coordenados
>Mostrar que cada función $\left.\frac{\partial}{\partial x_i}\right|_p$ es un vector tangente de $M$ en $p$.
>>[!Proof]-
>>Fijemos $i$ y escribamos $a=\varphi(p)\in\mathbb{R}^n$. Debemos ver que
>>$$
>>\left.\frac{\partial}{\partial x_i}\right|_p:C^\infty(M)\to\mathbb{R},\qquad
>>f\mapsto \frac{\partial(f\circ\varphi^{-1})}{\partial y_i}(a)
>>$$
>>es lineal y satisface Leibniz en $p$.
>>
>>1. **Linealidad.** Si $f,g\in C^\infty(M)$ y $\lambda\in\mathbb{R}$, entonces
>>$$
>>((f+\lambda g)\circ\varphi^{-1})=(f\circ\varphi^{-1})+\lambda(g\circ\varphi^{-1}),
>>$$
>>y por linealidad de la derivada parcial en $\mathbb{R}^n$,
>>$$
>>\left.\frac{\partial}{\partial x_i}\right|_p(f+\lambda g)
>>=
>>\left.\frac{\partial}{\partial x_i}\right|_p(f)
>>+
>>\lambda\left.\frac{\partial}{\partial x_i}\right|_p(g).
>>$$
>>
>>2. **Regla de Leibniz.** Como
>>$$
>>(fg)\circ\varphi^{-1}=(f\circ\varphi^{-1})(g\circ\varphi^{-1}),
>>$$
>>aplicando la regla del producto en $\mathbb{R}^n$ se obtiene
>>$$
>>\begin{aligned}
>>\left.\frac{\partial}{\partial x_i}\right|_p(fg)
>>&=\frac{\partial\big((f\circ\varphi^{-1})(g\circ\varphi^{-1})\big)}{\partial y_i}(a)\\
>>&=(f\circ\varphi^{-1})(a)\,\frac{\partial(g\circ\varphi^{-1})}{\partial y_i}(a)
>>+(g\circ\varphi^{-1})(a)\,\frac{\partial(f\circ\varphi^{-1})}{\partial y_i}(a).
>>\end{aligned}
>>$$
>>Pero $(f\circ\varphi^{-1})(a)=f(p)$ y $(g\circ\varphi^{-1})(a)=g(p)$, luego
>>$$
>>\left.\frac{\partial}{\partial x_i}\right|_p(fg)
>>=
>>f(p)\left.\frac{\partial}{\partial x_i}\right|_p(g)
>>+
>>g(p)\left.\frac{\partial}{\partial x_i}\right|_p(f).
>>$$
>>
>>Por lo tanto, $\left.\frac{\partial}{\partial x_i}\right|_p$ es una derivación en $p$, es decir, un vector tangente de $M$ en $p$.

## Independencia lineal de los vectores coordenados

>[!Proposition] Independencia lineal de los vectores coordenados
>El conjunto de vectores coordenados
>$$
>\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\dots,\left.\frac{\partial}{\partial x_n}\right|_p\right\}
>$$
>es linealmente independiente en $T_pM$.
>>[!Proof]-
>>1. Las funciones coordenadas $x_i$ están definidas solo en $U$, ósea están en $C^{\infty}(U)$ 
>>2. Pero $\left.\frac{\partial}{\partial x_n}\right|_p$ esta en $C^{\infty}(M)$ así que primero se extienden a funciones suaves globales $\widetilde{x}_i\in C^\infty(M)$ que coinciden con $x_i$ en un abierto $V$ de $p$ usando [[GS - Teo5#^405b16]] (obtenemos múltiples abiertos y tomamos la intersección no vacía por que esta $p$) 
>>3. Ahora notamos que $$\left.\frac{\partial}{\partial x_i}\right|_{p}\tilde{x}_{j}=\left.\frac{\partial}{\partial y_i}\right|_{\varphi(p)}(\tilde{x}_{j}\circ\varphi^{-1})=\left.\frac{\partial}{\partial y_i}\right|_{\varphi(p)}(x_{j}\circ\varphi^{-1})$$ este ultimo igual sucede por que $\tilde{x}_{j}\circ\varphi ^{-1}$ y $x_{j}\circ\varphi ^{-1}$ coinciden sobre el abierto $\varphi(V)$ por [[GS - Teo5#^b713ca]]
>>4. Y recordemos la notacion $(U,\varphi=(x_{1},\ldots,x_{n}))$ osea que $x_{j}\circ\varphi ^{-1}(q_{1},\ldots,q_{n})=x_{j}(p)=q_{j}$ otra manera de decir que $x_{j}\circ\varphi ^{-1}=\pi_{j}$ la proyeccion    
>>5. Y es directo ver que $$\left.\frac{\partial}{\partial x_i}\right|_{p}\pi_{j}=\delta_{ij}$$ 
>>6. Entonces tenemos
>>$$
>>t_1\left.\frac{\partial}{\partial x_1}\right|_p+\cdots+t_n\left.\frac{\partial}{\partial x_n}\right|_p=0,
>>$$
>>aplicando esta combinación lineal a cada $\widetilde{x}_j$ se obtiene
>>$$
>>0=t_1\delta_{1j}+\cdots+t_n\delta_{nj}=t_j,
>>$$
>>y por lo tanto todos los coeficientes son cero.

## Un lema sobre funciones constantes

>[!Lemma] Los tangentes anulan constantes
>Si $v\in T_pM$ y $c:U\to\mathbb{R}$ es constante, entonces
>$$
>v(c)=0.
>$$
>>[!Proof]-
>>1. Primero se aplica Leibniz a la función constante $1$:
>>$$v(1)=v(1\cdot 1)=1\cdot v(1)+1\cdot v(1)=2v(1),$$  de donde $v(1)=0$.
>>2. Luego, como $c=c\cdot 1$, $$v(c)=v(c\,1)=c\,v(1)=0$$

## Teorema sobre base del espacio tangente

>[!Theorem] Base del espacio tangente (Para final) 
>Los vectores coordenados
>$$
>\left.\frac{\partial}{\partial x_1}\right|_p,\dots,\left.\frac{\partial}{\partial x_n}\right|_p
>$$
>generan $T_pM$ y por lo tanto forman una base
>>[!Proof]-
>>1. Sea $(U,\varphi=(x_1,\dots,x_n))$ una carta de $p$. Queremos mostrar que para todo $v\in T_pM$,$$v=\sum_{i=1}^n t_{i}\left.\frac{\partial}{\partial x_i}\right|_p$$
>>2. Pero evaluando en $\tilde{x_{i}}$ esto es análogo a ver
>>$$v=\sum_{i=1}^n v(\widetilde{x}_i)\left.\frac{\partial}{\partial x_i}\right|_p$$
>>donde las $\widetilde{x}_i$ son extensiones suaves de las coordenadas $x_i$.
>>3. Se puede achicar $U$ para suponer que $\varphi(U)$ es una bola $\Delta(a,\varepsilon)\subseteq\mathbb{R}^n$ centrada en $a=\varphi(p)$.
>>4. Sea $$g=f\circ\varphi^{-1}:\Delta(a,\varepsilon)\to\mathbb{R}$$
>>5. Para $y\in\Delta(a,\varepsilon)$, por el teorema fundamental del cálculo aplicado al segmento $a+t(y-a)$, se obtiene el **truco de Hadamard**:$$\begin{align}g(y)-g(a)&=\int_{0}^{1} \frac{d}{dt}g(a+t(y-a))dt\\&=\int_{0}^{1} <(\nabla g)(a+t(y-a)),y-a>dt\\&=\int_{0}^{1} \sum^{n}_{i=1} \frac{\partial}{\partial y_{i}}g(a+t(y-a)).(y_{i}-a_{i})dt\\&=\sum^{\infty}_{n=1}(y_{i}-a_{i})\int_{0}^{1} \frac{\partial}{\partial y_{i}}g(a+t(y-a))dt\end{align}$$
>>6. De donde podemos concluir $$g(y)=g(a)+\sum_{i=1}^n (y_i-a_i)\,g_i(y)\qquad \text{con}\qquad g_i(y)=\int_0^1 \frac{\partial g}{\partial y_i}(a+t(y-a))\,dt$$
>>7. Luego $f=g\circ\varphi$ entonces $$f(q)=f(p)+\sum^{n}_{i=1} (x_{i}(q)-a_{i})(g_{i}\circ\varphi(q))$$ notar que usando 6. vemos que $$f_{i}(q)=(g_{i}\circ\varphi(q))=\int_{0}^{1} \frac{\partial g}{\partial y_{i}}(a+t(\varphi(q)-a))=\int_{0}^{1} \frac{\partial g}{\partial y_{i}}(a)=\frac{\partial g}{\partial y_{i}}(a)$$ 
>>8. Volviendo a $M$, esto expresa a $f$ localmente en términos de las coordenadas $x_i$. Ósea, si bien $f\in C^{\infty}(M)$ la expresión de la sumatoria que dimos está en $C^{\infty}(U)$ , porque la compusimos con $\varphi$ 
>>9. Luego se extienden a funciones globales las $x_i$ y las funciones $f_{i}=g_i\circ\varphi$, y se forma una función global $\widetilde{f}$ que coincide con $f$ en un abierto de $p$.
>>10. Como los vectores tangentes actúan localmente, $$v(f)=v(\widetilde{f})$$
>>11. Aplicando linealidad, Leibniz y el hecho de que los tangentes anulan constantes, se concluye que (notar $x(p)=a$ ósea $x_{i}(p)=a_{i}$) $$\begin{align}v(f)&=v(\tilde{f})\\&= v(\tilde{f}(p))+\sum^{n}_{i=1}v(\tilde{x_{i}}-a_{i})\tilde{f}_{i}(p)+(\tilde{x}_{i}(p)-a_{i})v(\tilde{f}_{i})\\&=\sum_{i=1}^n \frac{\partial g}{\partial y_i}(a)\,v(\widetilde{x}_i)\\&=\sum_{i=1}^n \frac{\partial f\circ\varphi ^{-1}}{\partial y_i}(a)\,v(\widetilde{x}_i)\\&=\sum_{i=1}^n v(\widetilde{x}_i)\left.\frac{\partial}{\partial x_i}\right|_p f.\end{align}$$
>>12. Esto vale para todo $f\in C^\infty(M)$, así que
>>$$
>>v=\sum_{i=1}^n v(\widetilde{x}_i)\left.\frac{\partial}{\partial x_i}\right|_p.
>>$$
>>13. Como ya se sabía que los vectores coordenados son linealmente independientes, forman una base de $T_pM$.

