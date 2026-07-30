### Ejercicio 1

>[!Exercise]
>Sea $\gamma$ una curva integral de un campo vectorial $X$ en una variedad $M$, tal que $\dot\gamma(t)=0$ para algún $t$. Mostrar que $\gamma$ es constante.
>>[!Proof]-
>>1. Como $\gamma$ es curva integral de $X$, para todo $t\in I$ se cumple $\gamma'(t)=X_{\gamma(t)}$.
>>2. En particular, evaluando en $t_0$, tenemos $\gamma'(t_0)=X_{\gamma(t_0)}$.
>>3. Por hipótesis, $\gamma'(t_0)=0$. Entonces $X_{\gamma(t_0)}=0$.
>>4. Sea $p=\gamma(t_0)$. Entonces $X_p=0$.
>>5. Consideramos la curva constante $\sigma:I\to M$ dada por $\sigma(t)=p$.
>>6. Como $\sigma(t)=p$ para todo $t\in I$, se tiene $\sigma'(t)=0$ para todo $t\in I$.
>>7. Además, como $X_p=0$ y $\sigma(t)=p$, tenemos $X_{\sigma(t)}=X_p=0$.
>>8. Por lo tanto, para todo $t\in I$, $$\sigma'(t)=0=X_{\sigma(t)}$$
>>9. Luego $\sigma$ es curva integral de $X$.
>>10. Además, $\sigma(t_0)=p=\gamma(t_0)$.
>>11. Luego por [[Glosario#^c00595z]], como $\gamma$ y $\sigma$ son curvas integrales de $X$ y coinciden en el instante $t_0$, se sigue que $\gamma(t)=\sigma(t)$ para todo $t\in I$.
>>12. Como $\sigma(t)=p$ para todo $t\in I$, concluimos que $\gamma(t)=p$ para todo $t\in I$.
>>13. Por lo tanto,
>>$$\gamma \text{ es constante.}$$

### Ejercicio 2

>[!Exercise]
>Probar que no todo campo en $\mathbb R$ es completo. Encontrar el intervalo maximal de definición de una curva integral del campo contraejemplo elegido.
>>[!Proof]-
>>1. Consideremos el campo vectorial suave en $\mathbb R$ dado por $$X(x)=x^2\frac{d}{dx}$$ es suave porque su función coeficiente $x\mapsto x^2$ es suave en $\mathbb R$.
>>2. Sea $\gamma$ una curva integral de $X$ con condición inicial $\gamma(0)=1$. Entonces debe satisfacer $\gamma'(t)=\gamma(t)^2$ y $\gamma(0)=1$. (recordemos que $\gamma'\in T_{\gamma(t)}\mathbb{R}$ entonces $\gamma'(t)=a\frac{\partial}{\partial x}\big|_{\gamma(t)}$ pero tambien por ser curva integral es igual a $X(\gamma(t))=\gamma(t)^{2}\frac{\partial}{\partial x}\big|_{\gamma(t)}$ por eso identificamos $\gamma'(t)=\gamma(t)^{2}$ ) 
>>3. Como $\gamma(0)=1$, por continuidad existe un intervalo alrededor de $0$ donde $\gamma(t)\neq 0$.
>>4. En ese intervalo definimos $h(t)=\frac{1}{\gamma(t)}$.
>>5. Derivando con regla de la cadena, obtenemos $h'(t)=\left(\frac{1}{\gamma(t)}\right)'=-\frac{\gamma'(t)}{\gamma(t)^2}$.
>>6. Como $\gamma'(t)=\gamma(t)^2$, queda $h'(t)=-\frac{\gamma(t)^2}{\gamma(t)^2}=-1$.
>>7. Entonces $h'(t)=-1$, luego $h(t)=-t+C$.
>>8. Usando la condición inicial, $h(0)=\frac{1}{\gamma(0)}=1$, así que $C=1$.
>>9. Por lo tanto, $h(t)=1-t$.
>>10. Como $h(t)=\frac{1}{\gamma(t)}$, tenemos $\frac{1}{\gamma(t)}=1-t$.
>>11. Luego $\gamma(t)=\frac{1}{1-t}$.
>>12. Esta curva no está definida en $t=1$. Por lo tanto, la curva integral maximal que empieza en $1$ no está definida sobre todo $\mathbb R$.
>>13. Entonces $X=x^2\frac{d}{dx}$ es un campo vectorial suave en $\mathbb R$ que no es completo.

### Ejercicio 3

>[!Exercise]
>En $\mathbb C\setminus\{0\}$ se define el campo $V(z)=1/\overline z$. Dibujarlo y mostrar que no es completo. Hallar $\phi_t(A)$ para $t>0$, donde $\phi_t$ es el flujo de $V$ y $A$ es el anillo $1<|z|<2$.
>>[!Proof]-
>>1. Supongamos que $z(t)$ es curva integral con condicion $z(0)=z_{0}$. Entonces $z'(t)=V(z(t))$  
>>2. Escribimos $z(t)=r(t)e^{i\theta(t)}$. Entonces $$V(z(t))=\frac1{\overline z}=\frac1{re^{-i\theta}}=\frac{e^{i\theta}}r.$$
>>3. Por otro lado, $$z'(t)=r'(t)e^{i\theta(t)}+ir(t)\theta'(t)e^{i\theta(t)}.$$
>>4. Comparando con $e^{i\theta}/r$, obtenemos $$r'(t)=\frac1{r(t)},\qquad \theta'(t)=0.$$
>>5. Por lo tanto, el campo es radial, apunta hacia afuera, y su norma es $1/r$.
>>6. Resolviendo $r'=1/r$: $$r(t)^2=r_0^2+2t,$$ de modo que $$r(t)=\sqrt{r_0^2+2t}.$$
>>7. El ángulo queda constante $\theta(t)=\theta_{0}$. Así, reemplazamos en $z=re^{i\theta}$ obtenemos $$z(t)=\sqrt{r_{0}^2+2t}\,e^{i\theta_{0}}$$  y luego usamos que $e^{i\theta_{0}}= \frac{z_{0}}{|z_{0}|}$ , $r_{0}=|z_{0}|$ y obtenemos $$z(t)=\sqrt{ |z_{0}|+2t }\, \frac{z_{0}}{|z_{0}|}$$
>>8. Basicamente encontramos una expresion para toda curva integral de este campo.
>>9. Por definicion $z(t)$ es curva integral con momento inicial $z_{0}$ luego por unicidad $$\gamma_{z_{0}}(t)=\sqrt{ |z_{0}|+2t }\, \frac{z_{0}}{|z_{0}|}$$ por lo menos en algun intervalo 
>>10. Luego podemos encontrar una expresion para el flujo de este campo
>>11. Luego por definicion de flujo sabemos $\phi_{t}(z_{0})=\gamma_{z_{0}}(t)$ pero $\gamma_{z_{0}}(t)=z(t)$ por 9. y obviamente esto lo podriamos haber hecho para cualquier $z(0)=z_{0}$ osea para cualquier punto inicial. Por lo tanto $$\phi_t(z)=\sqrt{|z|^2+2t}\,\frac z{|z|}.$$
>>12. Esta expresión existe mientras $|z|^2+2t>0$, es decir, $$t>-\frac{|z|^2}{2}.$$
>>13. Por lo tanto cualquier curva integral (en particular las maximales) van a tener este dominio $I_{z}=\left( -\frac{|z|^{2}}{2} ,\infty \right)$. Luego $$V \text{ no es completo.}$$
>>14. Observarion esto tiene sentido por que cuando $t\rightarrow -\frac{|z_{0}|^{2}}{2}$ por derecha entonces $\gamma_{z_{0}}(t)=\sqrt{ |z_{0}|^{2}+2t }\, \frac{z_{0}}{|z_{0}|}\rightarrow 0$ y como la imagen de esta curva esta en $\mathbb{C}\setminus \{ 0 \}$ no podriamos extenderlo  
>>15. Si $1<|z|<2$ reemplazando en 11. obtenemos $$1+2t<|\phi_t(z)|^2<4+2t,$$
>>16. Por lo tanto $$\phi_t(A)=\{w\in \mathbb{C}\setminus \{ 0 \}:\sqrt{1+2t}<|w|<\sqrt{4+2t}\}.$$
>>17. Osea que basicamente el flujo esta moviendo anillos de la variedad a otros anillos de la variedad

### Ejercicio 4

>[!Exercise]
>Probar que todo campo vectorial en una variedad compacta es completo.
>>[!Proof]-
>>1. Sea $X\in\mathfrak X(M)$ y sea $\gamma:J\to M$ una curva integral maximal. Queremos probar que $J=\mathbb R$.
>>
>>2. Supongamos, por contradicción, que $J$ tiene extremo superior finito $b<\infty$. Tomemos $t_0\in J$. Como $M$ es compacta,
>>$$\gamma([t_0,b))\subseteq M$$
>>3. está contenida en un compacto. Por el lema del escape, una curva integral maximal cuyo extremo superior es finito no puede permanecer contenida en un compacto. Contradicción.
>>
>>4. Análogamente, $J$ no puede tener extremo inferior finito. Por tanto,
>>$$J=\mathbb R$$
>>5. y
>>$$X \text{ es completo.}$$

^ce146f

### Ejercicio 5

>[!Exercise]
>Sea $M=\{(x,y)\in\mathbb R^2:x<0\}$ y sea $X$ el campo vectorial definido por $X(z)=\left.\frac{\partial}{\partial x}\right|_z$. Mostrar que no existe un intervalo de tiempo uniforme alrededor de cero donde están definidas todas las curvas integrales de $X$.
>>[!Proof]-
>>1. Usando coordenadas como en [[Glosario#^da6e6d]] y asumiendo carta canonica $(\mathbb{R}^{2},Id)$ tenemos que, la curva integral $\gamma(t)=Id\circ\gamma(t)=(x(t),y(t))$ que parte de $(x_0,y_0)\in M$ satisface $$x'(t)=1,\qquad y'(t)=0.$$
>>2. Luego, integrando, se obtiene $$\gamma(t)=(x_0+t,y_0).$$
>>3. Para que $\gamma(t)$ permanezca en $M$, debe cumplirse $$x_0+t<0.$$
>>4. Es decir, $$t<-x_0.$$
>>5. Por lo tanto, el intervalo maximal de la curva integral que parte de $(x_0,y_0)$ es $$(-\infty,-x_0).$$ (Notar $x_{0}<0$ por que esta en $M$, con lo cual $-x_{0}>0$ osea el $0$ esta en el intervalo maximal)
>>6. Ahora supongamos que existiera un intervalo uniforme alrededor de $0$. Entonces existiría $\varepsilon>0$ tal que todas las curvas integrales de $X$ estarían definidas en $(-\varepsilon,\varepsilon)$.
>>7. Tomemos el punto $$p=(-\varepsilon/2,0)\in M.$$
>>8. La curva integral que parte de $p$ es $$\gamma(t)=(-\varepsilon/2+t,0).$$
>>9. Pero para que esta curva permanezca en $M$, necesitamos $$-\varepsilon/2+t<0,$$ es decir, $$t<\varepsilon/2.$$
>>10. En particular, la curva no puede estar definida en todo $(-\varepsilon,\varepsilon)$, porque al tiempo $t=\varepsilon/2$ llega a $x=0$, que no pertenece a $M$.
>>11. Esto contradice la existencia de un intervalo uniforme alrededor de $0$ válido para todas las curvas integrales. Por lo tanto, no existe tal intervalo uniforme.

### Ejercicio 6

>[!Exercise]
>Encontrar para cada uno de los siguientes campos en $\mathfrak X(\mathbb R^2)$ sus curvas integrales y determinar si son completos o no:
>
>- $X=e^{-x}\frac{\partial}{\partial x}$,
>- $Y=x\frac{\partial}{\partial x}$,
>- $Z=y\frac{\partial}{\partial x}-x\frac{\partial}{\partial y}$.
>>[!Proof]-
>>- **Caso $X=e^{-x}\frac{\partial}{\partial x}$**  
>>	1. Para $X$, el sistema es $$x'(t)=e^{-x(t)},\qquad y'(t)=0.$$
>>	2. Entonces $y(t)=y_0$ y $$e^{x(t)} x'(t)=1,$$
>>	3. Por lzo que
>>	$$\frac d{dt}(e^{x(t)})=e^{x(t)} x'(t)=1.$$
>>	4. Así, $e^{x(t)}=t+c_{0}$  entinces  $x(t)=\log(t+c_{0})$ por lo tanto $x(0)=\log(c_{0})$ ósea $c_{0}=e^{x_{0}}$ 
>>	5. Mostrando que $$x(t)=\log(t+e^{x_{0}})$$  
>>	6. El intervalo maximal es $(-e^{x_0},\infty)$
>>	7. Así que $$X \text{ no es completo.}$$
>>- **Caso $Y=x\frac{\partial}{\partial x}$** 
>>	1. Para $Y$, el sistema es $$x'=x,\qquad y'=0.$$
>>	2. Luego $$x(t)=x_0e^t,\qquad y(t)=y_0.$$
>>	3. Está definido para todo $t\in\mathbb R$, así que $$Y \text{ es completo.}$$
>>- **Caso $Z=y\frac{\partial}{\partial x}-x\frac{\partial}{\partial y}$** 
>>	1. Para $Z$, el sistema es $$x'=y,\qquad y'=-x.$$
>>	2. Entonces $x''=y'=-x$, de donde $$x(t)=x_0\cos t+y_0\sin t.$$
>>	3. Como $y=x'$, resulta $$y(t)=-x_0\sin t+y_0\cos t.$$
>>	4. Que está definido para todo tiempo, luego $$Z \text{ es completo.}$$

### Ejercicio 7

>[!Exercise]
>Para cada $t\in\mathbb R$, considerar la transformación $\varphi_t:\mathbb R^2\to\mathbb R^2$ dada por $$(x,y)\mapsto\varphi_t(x,y)=(x\cos(t)+y\sin(t),-x\sin(t)+y\cos(t))$$
>
>- Mostrar que $\varphi_t$ es un grupo monoparamétrico de transformaciones de $\mathbb R^2$.
>- Calcular el campo $X\in\mathfrak X(\mathbb R^2)$ asociado a $\varphi_t$ (el generador infinitesimal).
>- Describir las curvas integrales de $X$.
>>[!Proof]-
>>- **$\varphi_{t}$ es monoparametrico**
>>	1. La matriz asociada a $\varphi_t$ es $$R_t=\begin{pmatrix}\cos t & \sin t\\-\sin t & \cos t\end{pmatrix}$$
>>	2. Se verifica directamente que $$R_{t+s}=R_tR_s,\qquad R_0=I,$$ por las identidades trigonométricas de suma. Por lo tanto, $$\varphi_{t+s}=\varphi_t\circ\varphi_s,\qquad \varphi_0=\operatorname{id}.$$
>>	3. Por lo tanto $\varphi_{t}$ es grupo monoparametrico 
>>- **Calcular el campo**
>>	1. Ahora usando la idea de [[GS - Teo17#^906978]] tenemos que el generador infinitesimal se calcula derivando en $t=0$: $$X_{(x,y)} =\left.\frac d{dt}\right|_{t=0}\varphi_t(x,y) =(y,-x)$$
>>	2. Osea, si usamos la carta identidad $(U,Id=(x_{1},x_{2}))$ $$X_{p}=a(p_{1},p_{2})\frac{\partial}{\partial x_{1}}\bigg|_{p}+a_{2}(p_{1},p_{2})\frac{\partial}{\partial x_{2}}\bigg|_{p}.$$
>>	3. Como $X_{(x,y)}=X_{p}$ entonces $a_{1}(p_{1},p_{2})=p_{2}$, $a_{2}(p_{1},p_{2})=-p_{1}$ 
>>	4. Luego si miramos $$\gamma(t)=((x_{1}\circ\gamma)(t),(x_{2}\circ\gamma)(t))=(\gamma_{1}(t),\gamma_{2}(t))$$ osea si la ponemos en coordenadas (en este caso la carta es la identidad) tenemos que $$X_{\gamma(t)}=\big(a_{1}(\gamma_{1}(t),\gamma_{2}(t)),a_{2}(\gamma_{1}(t),\gamma_{2}(t))\big)=(\gamma_{2}(t),-\gamma_{1}(t))$$ si la miramos en coordenadas del plano tangente
>>	5. Luego se puede ver que las curvas integrales de este campo son exactamente $$\gamma_{p}(t)=\varphi_t(p_{1},p_{2}).$$ donde $p=(p_{1},p_{2})$ 
>>	6. Por que si derivamos $$(\gamma_{1}^{p} (t),\gamma_{2}^{p} (t))=\gamma_{p}(t)= (p_{1} \cos(t)+p_{2} \sin(t),-p_{1} \sin(t)+p_{2} \cos(t))$$ entonces $$(\gamma_{1}'(t),\gamma_{2}'(t))=\gamma_{p}'(t)=(-p_{1}\sin(t)+p_{2}\cos(t),-p_{1}\cos(t)-p_{2}\sin(t))=(\gamma_{2}^{p} (t),-\gamma_{1}^{p} (t))$$ (saque el supra indice por que molesta visualmente, pero se entiende que es la curva que incia en $p$) 
>>	7. Concluyendo que las coordenadas de $\gamma_{p}'(t)$ coinciden con las de $X_{\gamma_{p}(t)}$ 
>>- **Describamos las curvas integrales**
>>	1. Miramos $$\lVert \gamma_{p}(t) \rVert^{2} =p_1^2+p_2^2$$
>>	2. Con lo cual las curvas integrales son circunferencias centradas en el origen. A excepcion de la curva maximal con inicio en $0$ que es constantemente $0$
>>
>>Tambien podemos verlo asi [[Glosario#^d158d2]]

### Ejercicio 8

>[!Exercise]
>- (a) Sea $(M,\phi)$ una subvariedad de una variedad diferenciable $N$. Sea $Y$ un campo suave en $N$ tal que $Y_{\phi(p)}$ pertenece a la imagen de $d\phi_p$ para todo $p\in M$. Para cada $p\in M$, sea $X_p$ el único vector tangente a $M$ en $p$ tal que $d\phi_p(X_p)=Y_{\phi(p)}$. Mostrar que $X$ define un campo suave en $M$.
>- (b) En $\mathbb R^{2n}$ se define el campo $$Y(x_1,y_1,\dots,x_n,y_n)=\sum_{i=1}^n\left(-y_i\frac{\partial}{\partial x_i}+x_i\frac{\partial}{\partial y_i}\right)\simeq(-y_1,x_1,\dots,-y_n,x_n).$$Mostrar que existe un campo $X$ en la esfera $S^{2n-1}$ tal que $(d\iota)\circ X=Y\circ\iota$, donde $\iota:S^{2n-1}\to\mathbb R^{2n}$ es la inclusión. Verificar que $t\mapsto\phi_t(p)$ describe un círculo máximo para todo $p\in S^{2n-1}$, donde $\phi_t$ es el flujo de $X$.
>>[!Proof]-
>>- **(a)**
>>	1. Primero notamos que como $\phi$ es inmersion tiene rango constante por que es inyectiva para todo $p\in M$ entonces $\dim Im(d\phi_{p})=\dim T_{p}M$ para todo $p\in M$
>>	2. Vamos a ver suavidad de forma local. Dado $p\in M$ por el teorema de rango constante, podemos tomar coordenadas $(U,\varphi=(u_{1},\dots,u_{m}))$ en $M$ y coordenadas $(V,\psi=(v_{1},\dots,v_{n}))$ en $N$ tales que $$\psi\circ\phi\circ\varphi ^{-1}(u_{1},\dots,u_{m})=(u_{1},\dots,u_{m},0,\dots,0).$$ (por inyectividad $m<n$) 
>>	3. Luego si evaluamo en $\varphi(p)=(u_{1}(p),\ldots,u_{m}(p))$ tenemos $$(v_{1}(\phi(p)),\ldots,v_{n}(\phi(p)))=\psi\circ\phi(p)=\psi\circ\phi\circ\varphi ^{-1}(\varphi(p))=(u_{1}(p),\ldots,u_{m}(p),0,\ldots,0)$$
>>	4. Con lo cual $(v_{i}(\phi(p)))=u_{i}(p)$ si $1<i<m$ y es $0$ si no y obviamente esto vale para cualquier $p\in U$ 
>>	5. Entonces podemos usar esto para calcular $$d\phi_{p}\left(\frac{\partial}{\partial u_{i}}\bigg|_{p}\right)$$ dado que $$d\phi_{p}\left(\frac{\partial}{\partial u_{i}}\bigg|_{p}\right)=\sum^{n}_{j=1}a_{j}\frac{\partial}{\partial v_{j}}\bigg|_{\phi(p)}$$ por lo tanto $$a_{j}=d\phi_{p}\left(\frac{\partial}{\partial u_{i}}\bigg|_{p}\right)(v_{j})=\left(\frac{\partial}{\partial u_{i}}\bigg|_{p}\right)(v_{j}\circ \phi)=\left(\frac{\partial}{\partial u_{i}}\bigg|_{p}\right)(u_{j})=\delta_{ij}$$
>>	6. Mostrando finalmente que $$d\phi_{p}\left(\frac{\partial}{\partial u_{i}}\bigg|_{p}\right)=\frac{\partial}{\partial v_{i}}\bigg|_{\phi(p)}$$
>>	7. Entonces si tenemos $$X_{p}=\sum^{m}_{i=1}b_{i}(p)\frac{\partial}{\partial u_{i}}\bigg|_{p}$$ luego $$(d\phi)_{p}(X_{p})=\sum^{m}_{j=1}b_{j}(p)(d\phi)_{p}\left(\frac{\partial}{\partial u_{j}}\bigg|_{p}\right)=\sum^{m}_{j=1} b_{j}(p)\frac{\partial}{\partial v_{j}}\bigg|_{\phi(p)}$$
>>	8. Por otro lado $$(d\phi)_{p}(X_{p})=Y_{\phi(p)}=\sum^{n}_{j=1}c_{j}(\phi(p))\frac{\partial}{\partial v_{j}}\bigg|_{\phi(p)}$$
>>	9. Finalmente $b_{j}(p)=c_{j}(\phi(p))$ Pero como $Y$ es suave $c_{j}$ es suave y $\phi$ es suave por definicion luego $b_{j}$ son suaves. Mostrando que $X|_{U}$ es suave.
>>	10. Como esto lo puedo hacer para cualqueir $p\in M$ entonces $X$ es suave
>>- **(b)**
>>	1. Primero queremos ver que $Y_{\iota(p)}=Y_{p}\in \operatorname{Im}(d\iota_{p})$ 
>>	2. Recordamos de [[Parcial 1 - soluciones#^483e02]] que $$\operatorname{Im} ((d\iota)_{p})=(d\iota)_p(T_pS^n)=\left\{\sum_{j=1}^{n+1}a_j\frac{\partial}{\partial r_j}\bigg|_p:\sum_{j=1}^{n+1}a_jp_j=0,\ a_j\in\mathbb R\right\}.$$
>>	3. Sea $p=(x_1,y_1,\dots,x_n,y_n)\in S^{2n-1}.$ entonces $Y_{p}=(-y_{1},x_{1},\ldots,-y_{n},x_{n})$ (mirado en coordenadas) y obviamente cumple $\langle p,Y_{p}\rangle =0$ entonces $Y_{p}$ esta en la imagen como queriamos
>>	4. Entonces por (a) existe un campo $X$ que esta dado por $(d\iota)_{p}(X_{p})=Y_{p}$ 
>>	5. Entonces ahora podemos ver el flujo de $Y_{p}$. Busquemos las curvas integrales de este flujo osea $\gamma'(t)=Y_{\gamma(t)}$ y $\gamma(0)=p\in S^{2n-1}$ 
>>	6. Es decir si $$\gamma(t)=(x_{1}(t),y_{1}(t),\ldots,x_{n}(t),y_{n}(t))$$ entonces $x_{i}'(t)=-y_{i}(t)$ e $y_{i}'(t)=x_{i}(t)$ 
>>	7. Con lo cual $$x_{i}(t)=a_{i}\cos(t)-b_{i}\sin t\qquad y_{i}(t)=a_{i}\sin t+b_{i}\cos t$$
>>	8. Y como $p=\gamma(0)=(x_{1}(0),y_{1}(0),\ldots)$ entonces $a_{i}=x_{i}(0)$ y $b_{i}=y_{i}(0)$ 
>>	9. Finalmente renombrando $x_{i}(0):=x_{i}^{0}$ e $y_{i}(0)=y_{i}^{0}$  $$\gamma_{p}(t)=(x_{1}^{0} \cos t-y_{1}^{0} \sin t,x_{1}^{0} \sin t+y_{1}^{0} \cos t,\ldots,x_{n}^{0} \cos t-y_{n}^{0} \sin(t),x_{n}^{0} \sin t + y_{n}^{0} \cos t)$$ y recordamos $\phi_{t}(p)=\gamma_{p}(t)$ 
>>	10. Y si hacemos $$\lVert \gamma_{t}(p) \rVert^{2}=\sum^{n}_{i=1}(x_{i}(t)^{2}+y_{i}(t)^{2})=\sum^{n}_{i=1} (x_{i}^{0})^{2}+(y_{i}^{0})^{2}=\lVert p \rVert ^{2}=1 $$ por que recordemos $(x_{1}^{0},y_{1}^{0},\ldots)=p\in S^{2n-1}$ 
>>	11. Con lo cual $\phi_{t}(p)\in S^{2n-1}$
>>	12. Ademas dado $p=(x_{1}^{0},y_{1}^{0},\ldots,x_{n}^{0},y_{n}^{0})$ tenemos que $$Y_{p}=(-y_{1}^{0} ,x_{1}^{0} ,\ldots,-y_{n}^{0},x_{n}^{0})$$ por definicion de $Y_{p}$
>>	13. Entonces $$\phi_{t}(p)=(x_{1}^{0},y_{1}^{0},\ldots, x_{n}^{0},y_{n}^{0})\cos t + (-y_{1}^{0} ,x_{1}^{0} ,\ldots-y_{n}^{0} ,x_{n}^{0} )\sin t=p\cos t + Y_{p}\sin t$$ osea $\phi{t}(p)\in \operatorname{span} \{ p,Y_{p} \}$ que notemos son li por que son ortogonales
>>	14. Entonces $$\phi_{t}(p)\in \operatorname{span}\{ p,Y_{p} \}\cap S^{2n-1}$$ que es la interseccion de la esfera con un plano que pasa por el origen, con lo cual $\phi_{t}(p)$ esta contenida en un circulo maximo 

^b71da3

### Ejercicio 9

>[!Exercise]
>Sea $M$ variedad suave y $S\subseteq M$ una subvariedad inmersa, y sea $V\in\mathfrak X(M)$ un campo que es tangente a $S$.
>
>- (a) Mostrar que para toda curva integral $\gamma$ de $V$ tal que $\gamma(t_0)\in S$, debe existir $\varepsilon>0$ tal que $\gamma((t_0-\varepsilon,t_0+\varepsilon))\subseteq S$.
>- (b) Suponer que $S$ es un conjunto cerrado de $M$. Mostrar que todas las curvas integrales de $V$ que cortan a $S$ están contenidas en $S$.
>- (c) Dar un contraejemplo al anterior inciso si $S$ no es cerrado.
>>[!Proof]-
>>- **(a)**
>>	1. Que $V$ sea tangente a $S$ significa $V_{q}\in (d\iota)_{q}(T_{q}S)$ para todo $q\in S$
>>	2. Como $d\iota$ es inyectiva. Tenemos un unico $W_{q}\in T_{q}S$ tal que $(d\iota)_{q}(W_{q})=V_{q}$ 
>>	3. Entonces tenemos un campo suave $V\in \mathfrak{X}(M)$ tal que $V_{q}\in \operatorname{Im}((d\iota)_{q})$ para todo $q\in S$ 
>>	4. Entonces por [[GS - Pr4#^b71da3]] (a) tenemos que $W$ es un campo suave de $S$
>>	5. Luego como $p:=\gamma(t_{0})\in S$ tenemos $\sigma(t):(a(p),b(p))\rightarrow S$ curva maximal (en el campo $S$). Tal que $\sigma(0)=\gamma(t_{0})$ que recordemos por ser curva integral cumple $\sigma'(t)=W_{\sigma(t)}$ 
>>	6. Ahora podemos armar $$\beta:=\iota\circ\sigma:(a(p),b(p))\rightarrow M$$ en base a esa podemos armar  entonces $$\beta(0)=\iota\circ\sigma(0)=\iota(\gamma(t_{0}))=\gamma(t_{0})$$
>>	7. Y ademas por regla de la cadena $$\beta'(t)=(d\beta)_{t}\left(\frac{\partial}{\partial s}\bigg|_{t}\right)=d\iota_{\sigma(t)}\left(d\sigma_{t}\left(\frac{\partial}{\partial s}\bigg|_{t}\right)\right)=d\iota_{\sigma(t)}(\sigma'(t))=d\iota_{\sigma(t)}(W_{\sigma(t)})=V_{\sigma(t)}$$
>>	8. Entonces $\beta(t)$ es una curva integral en $V$ con inicio en $\gamma(t_{0})$ y además $\beta(t)\in S$  por definición 
>>	9. Por otro lado tenemos $\tilde\gamma(t)=\gamma(t+t_{0})$ que sabemos es curva maximal de $V$ con inicio en $\gamma(t_{0})$. 
>>	10. Entonces por unicidad $\tilde\gamma$ y $\beta$ coinciden en todo el dominio de $\beta$ ( que es el mismo que  $\sigma$ ) por que $\tilde{\gamma}$ es curva maximal y ambas arrrancan en el mismo punto.
>>	11. Luego $\gamma(t+t_{0})=\tilde{\gamma}(t)\in S$ para todo $t\in (a(p),b(p))$ en particular para $t\in (-\epsilon,\epsilon)\subseteq (a(p),b(p))$ 
>>	12. Como $t\in (-\epsilon,\epsilon)$ entonces $t+t_{0}\in (t_{0}-\epsilon,t_{0}+\epsilon)$. Con lo cual $$\gamma((t_{0}-\epsilon,t_{0}+\epsilon))\in S$$ 
>>
>>- **(b)**
>>	1. Sea $\gamma:J\to M$ una curva integral y supongamos que $\gamma(t_0)\in S$. Consideremos $$A=\{t\in J:\gamma(t)\in S\}.$$
>>	2. El conjunto $A$ es no vacío por que contiene a $t_{0}$.
>>	3. $A=\gamma ^{-1}(S)$ es cerrado en $J$ porque $S$ es cerrado y $\gamma$ es continua entonces    
>>	4. Por la primera parte, $A$ también es abierto en $J$. Porque dado $t_{0}\in A$ tenemos que $\gamma(t_{0})\in S$, luego sabemos que existe $\epsilon>0$ tal que $\gamma(t_{0}-\epsilon,t_{0}+\epsilon)\subseteq S$ con lo cual $(t_{0}-\epsilon,t_{0}+\epsilon)\subseteq A$ y es un abierto de $J$ (en general de $\mathbb{R}$ pero tambien de $J$ por que $A\subseteq J$ entonces $(t_{0}-\epsilon,t_{0}+\epsilon)\cap J=(t_{0}-\epsilon,t_{0}+\epsilon)$) que contiene a $t_{0}$   
>>	5. Como $J$ es un intervalo, es conexo. Por lo tanto $$A=J.$$
>>	6. Así, toda la curva está contenida en $S$.
>>
>>- **(c) Contraejemplo si $S$ no es cerrado.** 
>>	1. Tomemos $$M=\mathbb R,\qquad S=(0,1),\qquad V=\frac{\partial}{\partial x}.$$ donde $S$ tiene la estructura heredada de $M$ que tiene la estructura canonica
>>	2. Obviamente $\dim S=1\dim \mathbb{R}$. Entonces $$(di)_{p}:T_{p}S\rightarrow T_{p}M$$ es un isomorfismo. (Aca hay un detalle, para que $(S,\iota)$ sea suave, y poder hablar de $d\iota$ tengo que dar una estructura adecuada a $S$, en este caso la heredada de $\mathbb{R}$ que seria la canonica anda bien) 
>>	3. Luego dado $p\in S$ tenemos que $$W_{\iota(p)}=W_{p}=\frac{\partial}{\partial x}\bigg|_{p}\in T_{p}M$$ y por ser iso existe $V_{p}\in T_{p}S$ tal que $(d\iota)_{p}(V_{p})=W_{p}$ osea $W_{p}\in \operatorname{Im}(d\iota)_{p}$ para todo $p\in S$.
>>	4. Con lo cual $W\in \mathfrak{X}(M)$ es campo tangente a $S$  
>>	5. Sin embargo la curva integral $$\gamma(t)=t$$corta a $S$, ademas es una curva integral de $V$ pero no está contenida en $S$.

### Ejercicio 10

>[!Exercise] Ejercicio 10 — Extensión de campos de subvariedades
>Sea $M$ una variedad suave y $S\subseteq M$ una subvariedad incrustada. Dado $X\in\mathfrak X(S)$, mostrar que existe un campo suave $Y$ definido sobre una vecindad de $S$ en $M$ tal que $X$ es la restricción de $Y$ a $S$.
>>[!Proof]-
>>1. Sea $i:S\hookrightarrow M$ la inclusión. Como $S$ es una subvariedad incrustada de $M$, la aplicación $i$ es una inmersión.
>>2. Por el teorema de extensión local de campos, para cada $p\in S$ existen un abierto $U_p\subseteq S$ con $p\in U_p$, un abierto $V_p\subseteq M$ con $p\in V_p$ y un campo suave $Y^{(p)}\in\mathfrak X(V_p)$ tales que $$Y^{(p)}_q=(di)_qX_q,\qquad q\in U_p.$$
>>3. Como $i$ es la inclusión, $(di)_q:T_qS\to T_qM$ es también la inclusión natural. Por lo tanto, identificando $T_qS$ con su imagen en $T_qM$, se tiene $$Y^{(p)}_q=X_q,\qquad q\in U_p.$$
>>4. El conjunto $\{V_p\}_{p\in S}$ es un cubrimiento abierto de $W$. Tomamos una partición de la unidad suave $\{\rho_\alpha\}_{\alpha\in A}$ subordinada a este cubrimiento. Para cada $\alpha\in A$, existe $p_\alpha\in S$ tal que $$\operatorname{supp}(\rho_\alpha)\subseteq V_{p_\alpha}.$$
>>5. Definimos sobre $W$ el campo $$Y:=\sum_{\alpha\in A}\rho_\alpha Y^{(p_\alpha)}.$$
>>6. Esta suma está bien definida y define un campo suave porque la familia $\{\rho_\alpha\}$ es localmente finita. En efecto, para cada $q\in W$ existe un entorno $O_q$ en el cual solo una cantidad finita de funciones $\rho_\alpha$ es no nula. Por lo tanto, sobre $O_q$, el campo $Y$ es una suma finita de campos suaves.
>>7. El problema que tenemos es que podria suceder que $Y_{p}\neq X_{p}$ para algun $q\in S$. Por ejemplo si $q\in S$ y $q\in V_{p_{1}}$ y $q\in U_{p_{1}}$ pero $q\in V_{p_{2}}$ pero $q\not\in U_{p_{2}}$ entonces podriamos afirmar $Y_{q} ^{(p_{1})}=X_{q}$ pero no necesariamente $Y_{q}^{(p_{2})}=X_{q}$ entonces en esa parte la suma (solo a modo de ejemplo supongamos que son $q$ esta solamente en esos dos conjuntos)  $$Y_{q}=\rho_{1}(q)Y_{q}^{(p_{1})}+\rho_{2}(q)Y_{q}^{(p_{2})}=\frac{1}{2}X_{q}+\frac{1}{2} K$$ que podria ser distinta que $X_{q}$ 
>>8. Para solucionar esto podemos achicar cada $V_p$ (conservando la notacion por comodidad) , si es necesario, de modo que $$V_p\cap S\subseteq U_p.$$ osea que $V_{p}$ extienda a $U_{p}$ pero por fuera de $S$, dentro de $S$ coincide con $U_{p}$
>>9. En efecto esto se puede hacer porque como $U_p$ es abierto en $S$ y $S=i(S)$ tiene la topologia heredada de $M$, existe un abierto $O_p\subseteq M$ tal que $U_p=O_p\cap S$, y podemos reemplazar $V_p$ por $V_p\cap O_p$. Con lo cual $$V_{p}\cap O_{p}\cap S=V_{p}\cap U_{p}\subseteq U_{p}$$ como queriamos
>>10. Ahora si, sea $$W:=\bigcup_{p\in S}V_p.$$ Entonces $W$ es un abierto de $M$ que contiene a $S$, es decir, una vecindad abierta de $S$.
>>11. Veamos que $Y$ restringido a $S$ coincide con $X$. Sea $q\in S$. Si $\rho_\alpha(q)\neq 0$, entonces $$q\in\operatorname{supp}(\rho_\alpha)\subseteq V_{p_\alpha}.$$ Como además $q\in S$, resulta $$q\in V_{p_\alpha}\cap S\subseteq U_{p_\alpha}.$$ Por lo tanto, $$Y^{(p_\alpha)}_q=X_q.$$
>>12. En consecuencia, usando que $\{\rho_\alpha\}$ es una partición de la unidad, $$Y_q=\sum_{\alpha\in A}\rho_\alpha(q)Y^{(p_\alpha)}_q=\sum_{\alpha\in A}\rho_\alpha(q)X_q=\left(\sum_{\alpha\in A}\rho_\alpha(q)\right)X_q=X_q.$$
>>13. Así, $Y\in\mathfrak X(W)$ es un campo suave definido sobre una vecindad $W$ de $S$ y satisface $$Y|_S=X.$$
 
^7d5d0b



### Ejercicio 11

>[!Exercise]
>Sea $M$ una variedad diferenciable compacta y conexa, sea $X\in\mathfrak X(M)$ y sea $f\in C^\infty(M)$ no idénticamente cero. Probar que si un $c\in\mathbb R$ satisface $X(f)=cf$, entonces $c$ debe ser cero.
>>[!Proof]-
>>1. Sea $\gamma_p(t)=\phi_t(p)$. Como $\gamma_p$ es la curva integral de $X$ que parte de $p$, se tiene $$\gamma_p'(t)=X_{\gamma_p(t)}=X_{\phi_t(p)}.$$
>>2.  Ahora, por definición de velocidad de una curva en una variedad, para toda $h\in C^\infty(M)$ vale $$\gamma_p'(t)(h)=(d\gamma_{p})_{t}\left(\frac{d}{ds}\bigg|_{s=t}\right)(h)=\frac{d}{ds}\bigg|_{s=t}h(\gamma_p(s))=\frac{d}{dt}h(\gamma_{p}(t))$$ este ultimo igual por que si $F(s)=h(\gamma_{p}(s))$ entonces $F'(t)=\frac{d}{ds}|_{s=t}h(\gamma_{p}(s))$ pero  $F'(t)=\frac{d}{dt}F(t)=\frac{d}{dt}h(\gamma_{p}(t))$  
>>3. Aplicando esto a $h=f$, obtenemos $$\frac{d}{dt}f(\phi_t(p))=\gamma_p'(t)(f).$$
>>4. Como $\gamma_p'(t)=X_{\phi_t(p)}$ y $X(f)(q)=X_q(f)$ resulta $$\frac{d}{dt}f(\phi_t(p))=X_{\phi_t(p)}(f)=X(f)(\phi_t(p))=cf(\phi_{t}(p))$$
>>5. Por lo tanto, resolviendo le ecuacion diferencial (para sacar la constante se evalua $f(\phi_{t}(p))=k_{1}e^{ct}$ en $0$ y se nota que $\phi_{0}(p)=\gamma_{p}(0)=p$) $$f(\phi_t(p))=e^{ct}f(p).$$
>>6. Como $f$ no es idénticamente cero, existe $p$ tal que $f(p)\neq0$. 
>>7. Recordemos por [[GS - Pr4#^ce146f]] como $M$ compacto $X$ es completo. Entonces el flujo esta definido para todo $t\in \mathbb{R}$  
>>8. Si $c>0$, entonces $e^{ct}f(p)$ no es acotada cuando $t\to+\infty$. y si $c<0$, no es acotada cuando $t\to-\infty$. 
>>9. Osea una vez que fijo ese $p$ tal que $f(p)\neq 0$ me puedo mover por el flujo tanto como quieras y sigo obteniendo puntos de $q\in M$ que cumplen $f(q)=e^{ct}f(p)$ pero con $e^{ct}$ cada vez mas grande       
>>10. Pero $f$ es continua sobre el compacto $M$, luego es acotada. 
>>11. Contradicción. Por lo tanto,
>>$$c=0.$$

### Ejercicio 12

>[!Exercise]
>Sea $M$ una variedad diferenciable y sean $X,Y$ campos en $M$ y $f,g:M\to\mathbb R$ funciones diferenciables.
>
>- **(a)** Calcular $[fX,gY]$.
>- **(b)** Si $\varphi=(x_1,\dots,x_n)$ es un sistema coordenado, mostrar que $\left[\frac{\partial}{\partial x_i},\frac{\partial}{\partial x_j}\right]=0$ para todo $i,j$.
>- **(c)** En $\mathbb R^2$ se definen los campos $V$ y $W$ por $V(x,y)=e_1$ y $W(x,y)=e^x e_2$. Mostrar que no existe un sistema coordenado $\psi=(u,v)$ tal que $\frac{\partial}{\partial u}=V$ y $\frac{\partial}{\partial v}=W$.
>>[!Proof]-
>>- **(a)** 
>>	1. [[GS - Teo19#^411d32]] (iv) 
>>- **(b)** 
>>	1. [[GS - Teo19#^411d32]] (ii) 
>>- **(c)**
>>	1. Notemos que $V(x,y)=e_{1}=1.\frac{\partial}{\partial x}$ y $W(x,y)=e^{x}\frac{\partial}{\partial y}$ 
>>	2. Si $V$ y $W$ fueran campos coordenados, deberían conmutar. Pero $$\left[\frac{\partial}{\partial u},\frac{\partial}{\partial v}\right]=[V,W]=\left[\frac{\partial}{\partial x},e^x\frac{\partial}{\partial y}\right]=\frac{\partial}{\partial x}e^{x}\frac{\partial}{\partial y} + e^{x}\left[\frac{\partial}{\partial u},\frac{\partial}{\partial v}\right] =e^x\frac{\partial}{\partial y}=W\neq0.$$
>>	3. Por lo tanto, no puede existir tal sistema coordenado

### Ejercicio 13

>[!Exercise]
>(Opcional) Sean $v$ y $w$ dos vectores fijos de $\mathbb R^{n+1}$ y considerar los campos $X$ e $Y$ de $\mathbb R^{n+1}$ definidos por $X(p)=v-\langle v,p\rangle p$ e $Y(p)=w-\langle w,p\rangle p$. Mostrar que existen campos $\widetilde X$ e $\widetilde Y$ en $\mathfrak X(S^n)$ tales que $(d\iota)\circ\widetilde X=X\circ\iota$ y $(d\iota)\circ\widetilde Y=Y\circ\iota$, y calcular el campo $[\widetilde X,\widetilde Y]$.
>>[!Proof]-
>>1. Si $p\in S^n$, entonces $\langle p,p\rangle=1$. Calculamos:
>>$$
>>\langle X(p),p\rangle
>>=\langle v,p\rangle-\langle v,p\rangle\langle p,p\rangle=0.
>>$$
>>2. Así, $X(p)\in T_pS^n$. Del mismo modo, $Y(p)\in T_pS^n$. Por lo tanto inducen campos
>>$$\widetilde X,\widetilde Y\in\mathfrak X(S^n).$$
>>
>>3. Calculamos el corchete usando las extensiones en $\mathbb R^{n+1}$. Para $a\in\mathbb R^{n+1}$,
>>$$D X_p(a)=-\langle v,a\rangle p-\langle v,p\rangle a,$$
>>$$D Y_p(a)=-\langle w,a\rangle p-\langle w,p\rangle a.$$
>>4. Entonces
>>$$[X,Y](p)=D Y_p(X(p))-D X_p(Y(p)).$$
>>5. Como
>>$$
>>\langle w,X(p)\rangle
>>=\langle w,v\rangle-\langle v,p\rangle\langle w,p\rangle
>>=\langle v,Y(p)\rangle,
>>$$
>>6. los términos proporcionales a $p$ se cancelan. Queda
>>$$
>>[X,Y](p)
>>=-\langle w,p\rangle v+\langle v,p\rangle w.
>>$$
>>7. Por lo tanto,
>>$$
>>[\widetilde X,\widetilde Y]_p
>>=\langle v,p\rangle w-\langle w,p\rangle v.
>>$$

### Ejercicio 14

>[!Exercise]
>(Opcional) Sean $v\in\mathbb R^n$ y $A\in\mathbb R^{n\times n}$, y considerar los campos $X$ e $Y$ de $\mathbb R^n$ definidos por $X(p)=v$ e $Y(p)=A\cdot p$ (donde se ha identificado $T_p\mathbb R^n$ con $\mathbb R^n$ de manera usual). Calcular el flujo $\phi_t$ y $\psi_t$ asociados a $X$ e $Y$ respectivamente, y el corchete $[X,Y]$.
>>[!Proof]-
>>1. Para $X$, la ecuación es
>>$$p'(t)=v,$$
>>2. por lo que
>>$$\phi_t(p)=p+tv.$$
>>
>>3. Para $Y$, la ecuación es
>>$$p'(t)=Ap(t).$$
>>4. La solución con $p(0)=p$ es
>>$$\psi_t(p)=e^{tA}p.$$
>>
>>5. Finalmente,
>>$$[X,Y](p)=D Y_p(X_p)-D X_p(Y_p).$$
>>6. Como $D Y_p=A$ y $D X_p=0$, resulta
>>$$[X,Y](p)=A v.$$

### Ejercicio 15

>[!Exercise]
>(Opcional) Sea $F:\mathbb R^2\to\mathbb RP^2$ la función $F(x,y)=[x:y:1]$, y sea $X\in\mathfrak X(\mathbb R^2)$ el campo $X=x\frac{\partial}{\partial y}-y\frac{\partial}{\partial x}$. Probar que hay un campo $Y\in\mathfrak X(\mathbb RP^2)$ que está $F$-relacionado con $X$, y fijar cartas de $\mathbb RP^2$ para encontrar la representación en coordenadas de $Y$.
>>[!Proof]-
>>1. Consideremos en $\mathbb R^3$ la matriz
>>$$
>>A=
>>\begin{pmatrix}
>>0&-1&0\\
>>1&0&0\\
>>0&0&0
>>\end{pmatrix}.
>>$$
>>2. Su flujo es la rotación
>>$$
>>R_t(X_0,Y_0,Z_0)
>>=
>>(X_0\cos t-Y_0\sin t,\ X_0\sin t+Y_0\cos t,\ Z_0).
>>$$
>>3. Como $R_t$ es lineal e invertible, induce difeomorfismos de $\mathbb RP^2$:
>>$$[X_0:Y_0:Z_0]\mapsto [R_t(X_0,Y_0,Z_0)].$$
>>4. El generador infinitesimal de este flujo proyectivo es el campo buscado $Y$.
>>
>>5. En la carta afín $U_3=\{Z\neq0\}$, con coordenadas
>>$$x=\frac{X_0}{Z_0},\qquad y=\frac{Y_0}{Z_0},$$
>>6. tenemos
>>$$x'=-y,\qquad y'=x.$$
>>7. Luego
>>$$
>>Y=-y\frac{\partial}{\partial x}
>>+x\frac{\partial}{\partial y}.
>>$$
>>8. Como $F(x,y)=[x:y:1]$, esto coincide con $dF(X)$, así que
>>$$Y \text{ está } F\text{-relacionado con } X.$$
>>
>>9. En la carta $U_1=\{X_0\neq0\}$, tomemos
>>$$u=\frac{Y_0}{X_0},\qquad v=\frac{Z_0}{X_0}.$$
>>10. Entonces
>>$$
>>u'=\frac{Y_0'X_0-Y_0X_0'}{X_0^2}
>>=\frac{X_0^2+Y_0^2}{X_0^2}=1+u^2,
>>$$
>>$$
>>v'=\frac{Z_0'X_0-Z_0X_0'}{X_0^2}
>>=\frac{Z_0Y_0}{X_0^2}=uv.
>>$$
>>11. Así,
>>$$
>>Y=(1+u^2)\frac{\partial}{\partial u}
>>+uv\frac{\partial}{\partial v}.
>>$$
>>
>>12. En la carta $U_2=\{Y_0\neq0\}$, tomemos
>>$$r=\frac{X_0}{Y_0},\qquad s=\frac{Z_0}{Y_0}.$$
>>13. Entonces
>>$$
>>r'=\frac{X_0'Y_0-X_0Y_0'}{Y_0^2}
>>=-\frac{X_0^2+Y_0^2}{Y_0^2}=-(1+r^2),
>>$$
>>$$
>>s'=\frac{Z_0'Y_0-Z_0Y_0'}{Y_0^2}
>>=-\frac{Z_0X_0}{Y_0^2}=-rs.
>>$$
>>14. Por lo tanto,
>>$$
>>Y=-(1+r^2)\frac{\partial}{\partial r}
>>-rs\frac{\partial}{\partial s}.
>>$$

### Ejercicio 16

>[!Exercise]
>(Opcional) Construir un campo suave de $S^2$ que se anule exactamente en un solo punto. ^[Un resultado de topología algebraica, llamado el Teorema de la bola peluda, garantiza que todo campo continuo sobre una esfera de dimensión par se anula en por lo menos un punto.]
>>[!Proof]-
>>1. Sea $N=(0,0,1)$ y consideremos la proyección estereográfica inversa desde $N$:
>>$$\sigma:\mathbb R^2\to S^2\setminus\{N\},$$
>>$$
>>\sigma(u,v)=
>>\left(
>>\frac{2u}{1+u^2+v^2},
>>\frac{2v}{1+u^2+v^2},
>>\frac{u^2+v^2-1}{1+u^2+v^2}
>>\right).
>>$$
>>2. En $\mathbb R^2$ tomamos el campo constante
>>$$W=\frac{\partial}{\partial u}.$$
>>3. Definimos en $S^2\setminus\{N\}$
>>$$X_{\sigma(u,v)}=d\sigma_{(u,v)}(W_{(u,v)}).$$
>>4. Como $\sigma$ es un difeomorfismo sobre $S^2\setminus\{N\}$, allí $X$ no se anula.
>>
>>5. Calculemos:
>>$$
>>\frac{\partial\sigma}{\partial u}
>>=
>>\left(
>>\frac{2(1-u^2+v^2)}{(1+u^2+v^2)^2},
>>\frac{-4uv}{(1+u^2+v^2)^2},
>>\frac{4u}{(1+u^2+v^2)^2}
>>\right).
>>$$
>>6. Cuando $(u,v)\to\infty$, esta expresión tiende a $0$. Más aún, en la carta estereográfica centrada en $N$, el campo tiene coeficientes suaves que se anulan en el origen. Por lo tanto, extendiendo
>>$$X_N=0,$$
>>7. obtenemos un campo suave en toda la esfera, y su único cero es $N$.

### Ejercicio 17

>[!Exercise]
>(Opcional) Sea $X$ un campo diferenciable en $M$ y sea $\phi$ su flujo. Mostrar que si $\lim_{t\to\infty}\phi_t(p)$ existe y es $q\in M$, entonces $X(q)=0$.
>>[!Proof]-
>>1. Fijemos $s$ pequeño. Por continuidad del flujo,
>>$$
>>\phi_s(q)
>>=\phi_s\left(\lim_{t\to\infty}\phi_t(p)\right)
>>=\lim_{t\to\infty}\phi_s(\phi_t(p)).
>>$$
>>2. Usando la propiedad de grupo del flujo,
>>$$\phi_s(\phi_t(p))=\phi_{s+t}(p).$$
>>3. Como $s+t\to\infty$ cuando $t\to\infty$, se obtiene
>>$$\phi_s(q)=q.$$
>>4. Así, la curva integral que parte de $q$ es constante. Derivando en $s=0$:
>>$$X(q)=\left.\frac d{ds}\right|_{s=0}\phi_s(q)=0.$$

### Ejercicio 18

>[!Exercise]
>(Opcional) [Lema del escape] Sean $M$ una variedad suave, $V\in\mathfrak X(M)$ y sea $\gamma:J\subseteq\mathbb R\to M$ una curva integral maximal de $V$ tal que existe el supremo de $J$, digamos $b$. Mostrar que para todo $t_0\in J$, $\gamma([t_0,b))$ no puede estar contenido en cualquier subconjunto compacto de $M$.
>>[!Proof]-
>>1. Supongamos, por contradicción, que para algún $t_0\in J$ existe un compacto $K\subseteq M$ tal que
>>$$\gamma([t_0,b))\subseteq K.$$
>>2. Tomemos una sucesión $t_j\nearrow b$. Como $K$ es compacto, pasando a una subsucesión podemos suponer que
>>$$\gamma(t_j)\to p\in K.$$
>>
>>3. Por existencia local y suavidad del campo, existe una carta alrededor de $p$, un entorno $U$ de $p$ y un número $\varepsilon>0$ tales que toda curva integral que empieza en un punto de $U$ está definida al menos para tiempos $|s|<\varepsilon$.
>>
>>4. Para $j$ grande, $\gamma(t_j)\in U$ y además $b-t_j<\varepsilon/2$. Sea $\eta$ la curva integral con condición inicial
>>$$\eta(0)=\gamma(t_j).$$
>>5. Entonces $\eta$ está definida en $(-\varepsilon,\varepsilon)$. Por unicidad,
>>$$\eta(s)=\gamma(t_j+s)$$
>>6. cuando ambos lados están definidos. Pero como $\eta$ existe para $s>\varepsilon/2>b-t_j$, esto extiende $\gamma$ más allá de $b$, contradiciendo la maximalidad. Luego
>>$$\gamma([t_0,b)) \text{ no puede estar contenida en un compacto.}$$

### Ejercicio 19

>[!Exercise]
>(Opcional) Sea $X\in\mathfrak X(\mathbb R)$ el campo definido por $X(s)=s^2\sin^2(s)\left.\frac{\partial}{\partial t}\right|_s$. Mostrar que $X$ es un campo completo.
>>[!Proof]-
>>1. En el enunciado aparece $\partial/\partial t|_s$; lo corregimos por $\partial/\partial s|_s$, que es el campo coordenado natural en $\mathbb R$.
>>
>>2. La ecuación integral es
>>$$s'(t)=s(t)^2\sin^2(s(t)).$$
>>3. Los puntos
>>$$s=k\pi,\qquad k\in\mathbb Z,$$
>>4. son ceros del campo, luego son soluciones constantes. Por unicidad, ninguna solución no constante puede cruzar alguno de esos puntos.
>>
>>5. Si $s_0\in(k\pi,(k+1)\pi)$, entonces la curva integral permanece para todo su intervalo maximal dentro del intervalo acotado
>>$$[k\pi,(k+1)\pi].$$
>>6. En ese intervalo el campo es suave y acotado. Si el intervalo maximal tuviera extremo finito, por el lema del escape la curva tendría que abandonar todo compacto, pero está contenida en el compacto $[k\pi,(k+1)\pi]$. Contradicción. Por lo tanto, la solución está definida para todo
>>$$t\in\mathbb R.$$
>>
>>7. Como esto vale para todo dato inicial, $X$ es completo.

### Ejercicio 20

>[!Exercise]
>(Opcional) ¿Es la suma de campos completos un campo completo? ¿Es el corchete de campos completos un campo completo?
>>[!Proof]-
>>1. **Solución 1.**
>>2. En $\mathbb R^2$, consideremos
>>$$
>>X=x^2\frac{\partial}{\partial y},\qquad
>>Y=y^2\frac{\partial}{\partial x}.
>>$$
>>3. El campo $X$ es completo porque sus curvas integrales satisfacen
>>$$x(t)=x_0,\qquad y(t)=y_0+x_0^2t,$$
>>4. definidas para todo tiempo. Del mismo modo, $Y$ es completo:
>>$$x(t)=x_0+y_0^2t,\qquad y(t)=y_0.$$
>>
>>5. Pero
>>$$X+Y=y^2\frac{\partial}{\partial x}+x^2\frac{\partial}{\partial y}.$$
>>6. Si partimos de $(1,1)$, por simetría la solución satisface $x(t)=y(t)$, y entonces
>>$$x'(t)=x(t)^2,\qquad x(0)=1.$$
>>7. Luego
>>$$x(t)=\frac1{1-t},$$
>>8. que explota en $t=1$. Por tanto,
>>$$X+Y \text{ no es completo.}$$
>>
>>9. **Solución 2.**
>>10. En $\mathbb R^2$, tomemos
>>$$
>>X=y\frac{\partial}{\partial x},\qquad
>>Y=x^2\frac{\partial}{\partial y}.
>>$$
>>11. Ambos son completos: para $X$, $y$ es constante y $x$ evoluciona linealmente; para $Y$, $x$ es constante y $y$ evoluciona linealmente.
>>
>>12. Calculamos:
>>$$
>>[X,Y]
>>=-x^2\frac{\partial}{\partial x}+2xy\frac{\partial}{\partial y}.
>>$$
>>13. Sobre la recta $y=0$, la ecuación se reduce a
>>$$x'=-x^2,\qquad y'=0.$$
>>14. Con condición inicial $(1,0)$,
>>$$x(t)=\frac1{1+t},$$
>>15. cuyo intervalo maximal es
>>$$(-1,\infty).$$
>>16. Por lo tanto,
>>$$[X,Y]\text{ no es completo.}$$

### Ejercicio 21

>[!Exercise]
>Sea $M=\mathbb C\setminus\{0\}$ y sea $\sim$ la relación de equivalencia sobre $M$ definida por $z\sim w$ si $z=2^kw$ para algún $k\in\mathbb Z$. Considerar sobre $M/\sim$ la única estructura de variedad diferenciable tal que la proyección canónica $\pi$ es un difeomorfismo local.
>
>- (a) Sea $V$ el campo en $M$ definido por $V_z=z^2$ (se ha identificado $T_zM$ con $\mathbb C$). Encontrar la curva integral $\gamma$ con $\gamma(0)=1$.
>- (b) Mostrar que ningún campo diferenciable en $M/\sim$ está $\pi$-relacionado con $V$.
>>[!Proof]-
>>- **(a)**
>>		1. La ecuación es $$z'(t)=z(t)^2,\qquad z(0)=1.$$
>>	2. Separando variables, $$\frac{dz}{z^2}=dt,$$de donde $$-\frac1z=t+C.$$
>>	3. Usando $z(0)=1$, obtenemos $C=-1$, así que $$z(t)=\frac1{1-t}.$$
>>	4. Esta curva nunca vale $0$, pero explota cuando $t\to1^-$. Por lo tanto, su intervalo maximal en $M$ es $$(-\infty,1).$$
>>- **(b)**
>>	1. La relación es $$z\sim w \iff z=2^kw$$para algún $k\in\mathbb Z$. En particular, $z\sim 2z$.
>>	2. Supongamos que existe un campo $\widetilde V$ en $\widetilde M$ tal que $V$ y $\widetilde V$ están $\pi$-relacionados. Entonces $$d\pi_z(V_z)=\widetilde V_{\pi(z)}=\widetilde V_{\pi(2z)}=d\pi_{2z}(V_{2z})$$
>>	3. Es decir, $$d\pi_z(z^2)=d\pi_{2z}(4z^2).$$
>>	4. **Paso clave** Como $\pi(z)=\pi(2z)$, tenemos $\pi\circ D_2=\pi$, donde $D_2(z)=2z$. Derivando $$d\pi_z=d\pi_{2z}\circ d(D_2)_z.$$
>>	5. Pero $d(D_2)_z=2z$ (Para verlo se puede pensar $\mathbb{C}\simeq \mathbb{R}^{2}$ y ver la matriz diferencial), por lo que $$d\pi_z(z^2)=d\pi_{2z}(2z^2).$$
>>	6. Comparando con la relación anterior: $$d\pi_{2z}(2z^2)=d\pi_{2z}(4z^2).$$
>>	7. Como $\pi$ es difeomorfismo local, $d\pi_{2z}$ es inyectiva. Luego $$2z^2=4z^2,$$
>>	8. Con lo cual es imposible para $z\neq0$. Por lo tanto, no existe tal campo $\widetilde V$

### Ejercicio 22

>[!Exercise]
>(Opcional) [Primera variación para el flujo] Para todo $p\in\mathbb R^n$, identificamos $T_pM$ con $\mathbb R^n$. Sea $V:\mathbb R^n\to\mathbb R^n$ un campo completo en $\mathbb R^n$ y sea $\phi:\mathbb R^n\times\mathbb R\to\mathbb R^n$, $\phi(p,t)=(\phi_1(p,t),\dots,\phi_n(p,t))$ su flujo. Para todo $t\in\mathbb R$, considerar la función $\phi_t:\mathbb R^n\to\mathbb R^n$ definida por $\phi_t(p):=\phi(p,t)$. Mostrar que
>$$
>\left.\frac{\partial}{\partial t}\right|_{u}(J\phi_t)_p
>=(JV)_{\phi_u(p)}(J\phi_u)_p.
>$$
>donde $(JF)_p$ es la matriz Jacobiana de una función $F$ en el punto $p$.
>>[!Proof]-
>>1. El flujo satisface
>>$$\frac{\partial}{\partial t}\phi_t(p)=V(\phi_t(p)).$$
>>2. Diferenciamos esta identidad con respecto a la variable inicial $p$. Como $\phi_t$ y $V$ son suaves,
>>$$
>>\frac{\partial}{\partial t}D_p\phi_t
>>=D_{\phi_t(p)}V\circ D_p\phi_t.
>>$$
>>3. En matrices jacobianas, esto se escribe como
>>$$
>>\frac{\partial}{\partial t}(J\phi_t)_p
>>=(JV)_{\phi_t(p)}(J\phi_t)_p.
>>$$
>>4. Evaluando en $t=u$:
>>$$
>>\left.\frac{\partial}{\partial t}\right|_{u}(J\phi_t)_p
>>=(JV)_{\phi_u(p)}(J\phi_u)_p.
>>$$

### Ejercicio 23

>[!Exercise]
>Sean $M$ una variedad diferenciable, $X,Y\in\mathfrak X(M)$ y sea $p\in M$. Probar que $\alpha(t)$ dada por $$t\longmapsto (d\theta_{-t})_{\theta_t(p)}(Y_{\theta_t(p)})$$define una curva $C^\infty$ en $T_pM$, donde $\theta_t$ es el flujo local asociado a $X$. (Recordar de la teoría que derivando esta curva en $t=0$, obtenemos el corchete $[X,Y]_p$, con las identificaciones usuales.)
>>[!Proof]-
>>- **Buena definicion**
>>	1. Para $t$ suficientemente pequeño, $\theta_t(p)$ está definido y $\theta_{-t}$ lleva $\theta_t(p)$ nuevamente a $p$. 
>>	2. Luego por [[GS - Teo17#^8d50da]] parte **(iv)** tenemos $$\theta_{-t}:D_{-t}\rightarrow D_{t}$$ por lo tanto $$(d\theta_{-t})_{\theta_t(p)}:T_{\theta_t(p)}D_{-t}\to T_{\theta_{-t}(\theta_{t}(p))}D_{t}=T_{p}D_{t}$$
>>	3. Como $D_{t},D_{-t}$ son abiertos de $M$ podemos identificar $T_{p}D_{t}=T_{p}M$ luego $$(d\theta_{-t})_{\theta_t(p)}:T_{\theta_t(p)}M\to T_{p}M$$
>>	4. Finalmente $$\alpha:\mathbb{R}\rightarrow T_{p}M$$ está bien definida.
>>- **Suavidad**
>>	1. Sabemos por localidad que $\alpha$ esta bien definida en un intervalo $(-\epsilon,\epsilon)$ ahora vamos a ver suavidad cerca del $0$ que es lo que nos importa para luego poder tener la derivada de Lie
>>	2. Tomamos $(U,\varphi=x^{1},\ldots,x^{n})$ carta con $U$ entorno de $p$.
>>	3. Ahora como $\Theta$ es continua y $\Theta(0,p)=p\in U$ podemos tomar $\Theta^{-1}(U)$ (preimagen). Esto nos da un intervalo $I_{1}$ (que ademas lo puedo ver como $(-\epsilon,\epsilon)$) que contiene al $0$ y un abierto $\widetilde{U}$ que contiene a $p$ (nos da un abierto de la topo producto, que adentro tiene a $I_{1}\times\tilde U$)
>>	4. Ahora como $Y_{\gamma_{p}(t)}\in T_{\gamma_{p}(t)}M.$ y $\gamma_{p}(t)\in U$ tenemos $$Y_{\theta_t(p)}=\sum_{j=1}^n Y^j(\theta_t(p))\frac{\partial}{\partial x^j}\bigg|_{\theta_t(p)}.$$ que queda definida para cualquier $t\in I_{1}$ 
>>	5. Aplicamos $(d\theta_{-t})_{\theta_t(p)}$: $$(d\theta_{-t})_{\theta_t(p)}Y_{\theta_t(p)}=\sum_{j=1}^n Y^j(\theta_t(p))(d\theta_{-t})_{\theta_t(p)}\left(\frac{\partial}{\partial x^{j} }\bigg|_{\theta_t(p)}\right).$$
>>	6. Además, como $\theta_{-t}(\theta_t(p))=p$, la diferencial $$ (d\theta_{-t})_{\theta_{t}(p)}:T_{\theta_{t}(p)}M\to T_pM $$ con lo cual $$(d\theta_{-t})_{\theta_t(p)}\left(\frac{\partial}{\partial x^{j} }\bigg|_{\theta_t(p)}\right)=\sum_{i=1}^n a_{ij}(t)\frac{\partial}{\partial x^{i} }\bigg|_p,$$
>>	7. Ahora calculamos $a_{ij}(t)$ $$a_{ij}(t)=(d\theta_{-t})_{\theta_t(p)}\left(\frac{\partial}{\partial x^{j} }\bigg|_{\theta_t(p)}\right)(x^{i} ).$$
>>	8. Por definición del diferencial,$$a_{ij}(t)=\frac{\partial}{\partial x^{j} }\bigg|_{\theta_t(p)}(x^{i} \circ\theta_{-t})=\frac{\partial}{\partial r^{j} }\bigg|_{\varphi(\theta_t(p))}x^{i} \circ\theta_{-t}\circ\varphi ^{-1}=\frac{\partial}{\partial r^{j} }\bigg|_{\varphi(\theta_t(p))}\pi_{i}\circ\varphi \circ\theta_{-t}\circ\varphi ^{-1}$$
>>	9. Por paso 3. como el intervalo es simetrico $\theta_{-t}$ cumple lo mismo osea $\theta_{-t}(\widetilde{U})\subseteq U$ para todo $t\in I_{1}$. 
>>	10. Ademas por continuidad de $\theta_{t}(p)=\gamma_{p}(t)$ puedo ver $I_{2}=\gamma_{p}^{-1}(\widetilde{U})$. Que devuelta es un abierto que tiene al $0$. Y ahora tomo $I=I_{1}\cap I_{2}$ (que devuelta lo puedo asumir simetrico). Y entonces puedo afirmar $\theta_{t}(p)\in \widetilde{U}$ para $t\in I$
>>	11. Esto me permite escribir $$\varphi\circ\theta_{-t}\circ\varphi ^{-1}(\varphi(\theta_{t}(p)))$$ y que tenga sentido para todo $t\in I$ 
>>	12. Pero $H(t,r)=\varphi\circ\theta_{-t}\circ\varphi ^{-1}(r)$ es suave por ser composicion de suaves para con $r\in \varphi(\widetilde{U})$ y $t\in I$, con lo cual sus derivadas son suaves con respecto a $t$ y $r$ con lo cual son suaves si evaluamos a lo largo de la curva $t\mapsto (t,r(t))$ con $r(t)=\varphi(\theta_{t}(p))$ $$\frac{\partial H^{i}}{\partial r^{j}}(t,r(t))=\frac{\partial}{\partial r^{j} }\bigg|_{\varphi(\theta_t(p))}\pi_{i}\circ\varphi \circ\theta_{-t}\circ\varphi ^{-1}=a_{ij}(t)$$  
>>	13. Ademas $Y^{i}(\theta_{t}(p))$ tambien son suaves con respecto a $t\in I\subseteq I_{1}$ por ser $Y$ campo suave (para cualquier $p\in \widetilde{U}$ en particular para el $p$ fijo que tenemos)  
>>	14. Por lo tanto $$\alpha(t)=\sum_{j=1}^n\sum^{n}_{i=1} Y^j(\theta_t(p)) a_{ij}(t)\left(\frac{\partial}{\partial x^{i} }\bigg|_p\right).$$
>>	15. Luego las coordenadas de $\alpha$ en la base $\left\{\frac{\partial}{\partial x^{1}}\big|_p,\ldots,\frac{\partial}{\partial x^{n}}\big|_p\right\}$ son localmente suaves en un entorno del $0$.
>>	16. Entonces $\alpha$ es suave. Concluyendo que la curva es suave en un entorno del $0$ 

^d6291e

### Ejercicio 24

>[!Exercise]
>[Uniformidad conjunta para dos flujos] Sean $X$ e $Y$ dos campos en una variedad $M$ y sea $\theta$ y $\phi$ sus respectivos flujos. Mostrar que para todo $p\in M$ existen un entorno abierto $U$ en $M$ de $p$ y $\delta>0$ tal que $\theta_s\circ\phi_t$ y $\phi_t\circ\theta_s$ están definidos en $U$ para $|s|<\delta$ y $|t|<\delta$.
>>[!Proof]-
>>1. La idea es usar que los dominios de los flujos locales son abiertos y que los flujos dependen suavemente, luego continuamente, de las condiciones iniciales y del tiempo.
>>2. Primero notamos que dado $p\in M$ sabemos que $\theta_{s}$ esta bien definida en $U_{\theta}$ y para todo $s\in I_{1}$   
>>3. Queremos además que, después de aplicar uno de los flujos por tiempo pequeño, el resultado siga dentro del entorno donde el otro flujo está definido. 
>>4. Por continuidad de $\phi$, y como $\phi_0(p)=p\in U_{\theta}$ podemos tomar $U=\phi ^{-1}(U_{\theta})$ que tiene que ser un abierto de $\mathbb{R}\times M$ 
>>5. Y dentro de $U$ tenemos $I_{2}\times U_{\phi}$ que cumple $\phi_{t}(U_{\phi})\subseteq U_{\theta}$ para $t\in I_{2}$.
>>6. Finalmente $\theta_{s}\circ\phi_{t}$ esta bien definido en $U_{\phi}$ para todo $s\in I_{1}$ y $t\in I_{2}$   
>>7. Haciendo lo mismo tenemos $I_{3}$ y $V_{\phi}$ tal que $\phi_{t}$ esta bien definida para todo $q\in V_{\phi}$ para todo $t\in I_{3}$ 
>>8. Otra vez por continuidad de $\theta$ tenemos $I_{4}$ y $V_{\theta}$ tal que $\theta_{s}(V_{\theta})\subseteq V_{\phi}$ para todo $s\in I_{4}$ 
>>9. Por lo tanto $\phi_{t}\circ\theta_{s}$ esta bien definida en $V_{\theta}$ para todo $t\in I_{3}$ y para todo $s\in  I_{4}$ 
>>10. Luego si definimos $W=U_{\phi}\cap V_{\theta}$ e $I=I_{1}\cap I_{2}\cap I_{3} \cap I_{4}$. Tenemos que ambas $\theta_s\circ\phi_t$ y $\phi_t\circ\theta_s$ están definidos en $W$ para todo $t,s\in I$. 
>>11. Como $I$ es un intervalo sin perdida de generalidades lo podemos asumir de la pinta $(-\delta ,\delta )$.

^f4fbe0

### Ejercicio 25

>[!Exercise]
>Sea $G=\mathbb R\times\mathbb C$ con el producto $(\alpha,z_1)*(\beta,z_2)=(\alpha+\beta,e^{i\alpha}z_2+z_1)$. Considerar la carta global de $G$ dada por $(G,\varphi)$ con $\varphi=(\theta,x,y)$ dada por $\theta(\alpha,z)=\alpha$, $x(\alpha,z)=\operatorname{Re}(z)$ y $y(\alpha,z)=\operatorname{Im}(z)$. Mostrar que $G$ es un grupo de Lie y que los campos $\frac{\partial}{\partial\theta}$, $\cos\theta\frac{\partial}{\partial x}+\sin\theta\frac{\partial}{\partial y}$, $-\sin\theta\frac{\partial}{\partial x}+\cos\theta\frac{\partial}{\partial y}$ forman una base de la álgebra de Lie de $G$. Calcular los corchetes de Lie entre los campos dados.
>>[!Proof]-
>>1. **Solución 1.**
>>2. Identificando $z=x+iy$, el producto queda
>>$$
>>(\theta,x,y)*(\beta,u,v)
>>=
>>(\theta+\beta,\ x+u\cos\theta-v\sin\theta,\ y+u\sin\theta+v\cos\theta).
>>$$
>>3. Esta aplicación es suave en las coordenadas globales $(\theta,x,y)$.
>>
>>4. El elemento neutro es
>>$$e=(0,0).$$
>>5. El inverso de $(\alpha,z)$ es
>>$$(\alpha,z)^{-1}=(-\alpha,-e^{-i\alpha}z),$$
>>6. porque
>>$$
>>(\alpha,z)*(-\alpha,-e^{-i\alpha}z)
>>=(0,e^{i\alpha}(-e^{-i\alpha}z)+z)=(0,0).
>>$$
>>7. La aplicación inversa también es suave. Por lo tanto,
>>$$G \text{ es un grupo de Lie.}$$
>>
>>8. **Solución 2.**
>>9. La traslación izquierda por $(\theta,z)$ es
>>$$
>>L_{(\theta,z)}(\beta,w)
>>=(\theta+\beta,e^{i\theta}w+z).
>>$$
>>10. Derivando en la identidad:
>>$$
>>dL_{(\theta,z)}\left(\frac{\partial}{\partial\beta}\right)
>>=\frac{\partial}{\partial\theta},
>>$$
>>$$
>>dL_{(\theta,z)}\left(\frac{\partial}{\partial u}\right)
>>=\cos\theta\frac{\partial}{\partial x}
>>+\sin\theta\frac{\partial}{\partial y},
>>$$
>>$$
>>dL_{(\theta,z)}\left(\frac{\partial}{\partial v}\right)
>>=-\sin\theta\frac{\partial}{\partial x}
>>+\cos\theta\frac{\partial}{\partial y}.
>>$$
>>11. Por lo tanto, $E_0,E_1,E_2$ son los campos invariantes a izquierda que extienden la base canónica de $T_eG$. En consecuencia,
>>$$\{E_0,E_1,E_2\}$$
>>12. forma una base de la álgebra de Lie de $G$.
>>
>>13. **Solución 3.**
>>14. Como
>>$$E_0=\frac{\partial}{\partial\theta},$$
>>15. derivamos los coeficientes de $E_1$:
>>$$
>>[E_0,E_1]
>>=
>>\frac{\partial}{\partial\theta}
>>\left(
>>\cos\theta\frac{\partial}{\partial x}
>>+\sin\theta\frac{\partial}{\partial y}
>>\right)
>>=
>>-\sin\theta\frac{\partial}{\partial x}
>>+\cos\theta\frac{\partial}{\partial y}
>>=E_2.
>>$$
>>16. Análogamente,
>>$$
>>[E_0,E_2]
>>=
>>\frac{\partial}{\partial\theta}
>>\left(
>>-\sin\theta\frac{\partial}{\partial x}
>>+\cos\theta\frac{\partial}{\partial y}
>>\right)
>>=
>>-\cos\theta\frac{\partial}{\partial x}
>>-\sin\theta\frac{\partial}{\partial y}
>>=-E_1.
>>$$
>>17. Finalmente, $E_1$ y $E_2$ no tienen componente en dirección $\partial/\partial\theta$, y sus coeficientes dependen solamente de $\theta$. Por eso ninguno deriva los coeficientes del otro:
>>$$[E_1,E_2]=0.$$
