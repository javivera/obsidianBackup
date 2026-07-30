## Orientacion de espacios vectoriales

>[!Definition] Orientacion de un espacio vectorial
>Sea $V$ un espacio vectorial real de dimension finita. Se define una relacion de equivalencia en el conjunto de bases ordenadas de $V$ como:
>
>Si $\mathcal B_1$ y $\mathcal B_2$ son bases ordenadas, decimos que
>$$\mathcal B_1\sim\mathcal B_2$$
>si el determinante de la matriz de cambio de base de $\mathcal B_1$ a $\mathcal B_2$ es positivo.
>
>Las clases de equivalencia se llaman orientaciones de $V$.

>[!Exercise]
>Verificar que la anterior relacion es una relacion de equivalencia en el conjunto de bases ordenadas.
>>[!Proof]
>>1.

>[!Proposition]
>La relacion de equivalencia en el conjunto de bases ordenadas de $V$ tiene solo dos clases de equivalencia.
>>[!Proof]-
>>1. **Hay al menos dos clases:** Sea $\mathcal B=\{v_1,\ldots,v_n\}$ una base de $V$. Entonces $$\widetilde{\mathcal B}=\{-v_1,v_2,\ldots,v_n\}$$tambien es base de $V$, y la matriz de cambio de base tiene determinante $$\det\begin{pmatrix}-1& &0\\&\ddots&\\0& &1\end{pmatrix}=-1<0.$$
>>2. Por lo tanto $\mathcal B$ y $\widetilde{\mathcal B}$ no estan en la misma clase.
>>3. **Hay exactamente dos:** Sean $\mathcal B$ y $\widehat{\mathcal B}$ dos bases ordenadas que no estan en la misma clase. Sea $\mathcal B'$ una tercera base ordenada. 
>>4. Si $\mathcal B'\sim\mathcal B$, listo. Si no, entonces el determinante de la matriz de cambio de base de $\mathcal B$ a $\mathcal B'$ es negativo.
>>5. Como $\mathcal B$ y $\widehat{\mathcal B}$ no estan en la misma clase, tambien $$\det\left(M_{\mathcal B}^{\widehat{\mathcal B}}\right)<0.$$
>>6. Sabemos que $$M_{\mathcal B}^{\mathcal B'}=M_{\widehat{\mathcal B}}^{\mathcal B'}M_{\mathcal B}^{\widehat{\mathcal B}},$$y por tanto $$\det\left(M_{\mathcal B}^{\mathcal B'}\right) =\det\left(M_{\widehat{\mathcal B}}^{\mathcal B'}\right)\det\left(M_{\mathcal B}^{\widehat{\mathcal B}}\right).$$
>>7. Como los dos determinantes de los extremos tienen signo negativo, se sigue que $$\det\left(M_{\widehat{\mathcal B}}^{\mathcal B'}\right)>0,$$y entonces $\mathcal B'\sim\widehat{\mathcal B}$.

>[!Definition] Espacio vectorial orientado
>Un espacio vectorial orientado es un par $(V,[\mathcal B])$, donde $V$ es un espacio vectorial real de dimension finita y $[\mathcal B]$ es una clase de equivalencia de la relacion de orientacion en el conjunto de bases ordenadas de $V$.
>
>Una base ordenada $\mathcal B$ de $V$ se dice positivamente orientada si $\mathcal B\in[\mathcal B]$.

>[!Remark]
>Si $V$ tiene dimension $n$, podemos usar una $n$-forma no nula para dar una orientacion a $V$.

>[!Lemma]
>Sea $\omega\in\Lambda^n(V^*)$ y sea $\mathcal B=\{e_1,\ldots,e_n\}$ una base de $V$. Entonces, dados $v_1,\ldots,v_n\in V$ arbitrarios, se cumple que
>$$\omega(v_1,\ldots,v_n)=\det A\ \omega(e_1,\ldots,e_n),$$
>donde $A$ es la matriz cuya columna $j$ son las coordenadas de $v_j$ en la base $\mathcal B$.
>>[!Proof]-
>>1. Sea $\mathcal B^*=\{e_1^*,\ldots,e_n^*\}$ la base dual de $V^*$. Sabemos que $$e_1^*\wedge\cdots\wedge e_n^*$$es base de $\Lambda^n(V^*)$. 
>>2. Por lo tanto existe $\lambda\in\mathbb R$ tal que $$\omega=\lambda e_1^*\wedge\cdots\wedge e_n^*.$$
>>3. Evaluando en la base, $$\omega(e_1,\ldots,e_n)=\lambda.$$
>>4. Por otra parte, si $A=(a_{ij})$ es la matriz de coordenadas de los $v_j$, entonces $$\omega(v_1,\ldots,v_n)=\lambda\det(a_{ij})=\det A\ \omega(e_1,\ldots,e_n).$$ recordando que $e_{j}^{*}(v_{i})$ nos da la $j$-esima coordenadas de el vector $v_{i}$ escrito en la base $\mathcal{B}$   

^543d91

>[!Proposition]
>Sea $V$ un espacio vectorial real de dimension $n$. Cada elemento no nulo $\omega\in\Lambda^n(V^*)$ determina una orientacion $\mathcal O$ de $V$ de la siguiente manera:
>$$\mathcal O=\{(E_1,\ldots,E_n)\text{ base ordenadas}:\omega(E_1,\ldots,E_n)>0\}.$$
>Dos $n$-tensores alternantes no nulos determinan la misma orientacion si y solo si uno es multiplo positivo del otro.
>>[!Proof]-
>>1. Sea $\mathcal B=\{e_1,\ldots,e_n\}$ una base ordenada y sea $\omega\in\Lambda^n(V^*)$ no nula. Vamos a ver que la clase de equivalencia de esta base está dada por las bases ordenadas $\{v_1,\ldots,v_n\}$ tales que $\omega(v_1,\ldots,v_n)$ tiene el mismo signo que $\omega(e_1,\ldots,e_n)$ 
>>2. Supongamos tenemos otra base ordenada $\{ v_{1},\ldots,v_{n} \}$ entonces: $$\begin{align}\{ v_{1},\ldots v_{n} \}\in [\{ e_{1},\ldots e_{n} \}]& \iff \det(M_{\widetilde{B}}^{B} )>0\\& \iff \frac{\omega(v_{1},\ldots,v_{n})}{\omega(e_{1},\ldots,e_{n})}=\det(M_{\widetilde{\mathcal B}}^{B} )>0\\&\iff \omega(v_{1},\ldots,v_{n})\ \land \ \omega(e_{1},\ldots,e_{n})\ \text{tienen el mismo signo}\end{align}$$ el primer paso por definicion el segundo por [[GS - Teo24#^543d91]] 
>>3. Por lo tanto una orientacion de $V$ esta dada por las bases ordenadas $\{ v_{1},\ldots v_{n} \}$ tales que $\omega(v_{1},\ldots,v_{n})$ tienen el mismo signo. 
>>4. Normalmente llamamos orientacion (denotada $\mathcal{O}_{\omega}$) a las bases tales que $\omega(v_{1},\ldots,v_{n})>0$ osea tienen el mismo signo y son positivas.
>>5. Si $\widetilde{\omega}$ es otra $n$-forma no nula en $\Lambda^{*}(V^{*})$, claramente $$\mathcal{O}_{\omega}=\mathcal{O}_{\widetilde{\omega}}\iff \widetilde{\omega}=\lambda\omega \  \text{ con } \ \lambda>0$$    

## Orientacion de variedades

>[!Definition] Variedad orientable y atlas orientado
>Una variedad suave conexa $M$ de dimension $m$ se dice orientable si existe un atlas suave $\mathcal A$ tal que para cualquier par de cartas suaves $$(U,\varphi=(x_1,\ldots,x_m)),\qquad (V,\psi=(y_1,\ldots,y_m))$$en $\mathcal A$, con $U\cap V\ne\varnothing$, se cumple $$\det\left(\frac{\partial y_j}{\partial x_i}\bigg|_{p}\right)>0\qquad \forall p\in U\cap V.$$
>Un atlas con esta propiedad se llama **atlas orientado**.

>[!Remark]
>Dicho **atlas orientado** induce una orientacion en cada $T_{p}M$ con $p\in M$ dada por la clase de equivalencia de $$\left\{ \frac{\partial}{\partial x_{1}}\bigg|_{p},\ldots, \frac{\partial}{\partial x_{m}}\bigg|_{p}\right \}$$ para cualquier carta $(U,\varphi=(x_{1},\ldots,x_{m}))\in \mathcal{A}$   
>Esto es por que notamos que como el **atlas orientado** si tomamos cualquier otra carta $(V,\psi=y_{1},\ldots y_{m})\in \mathcal A$ tenemos que $$0<\det\left(\frac{\partial y_j}{\partial x_i}\bigg|_{p}\right)_{ij}=\det(J(\psi\circ\varphi ^{-1}))\circ\varphi (p) \qquad\forall p\in U\cap V$$
>Pero $J(\psi\circ\varphi ^{-1})(\varphi(p))$ es la matriz de cambio de base entre $$\left\{\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_m}\bigg|_p\right\}\qquad\text{y}\qquad \left\{\frac{\partial}{\partial y_1}\bigg|_p,\ldots,\frac{\partial}{\partial y_m}\bigg|_p\right\}.$$ con lo cual en el espacio vectorial de $T_{p}M$ estas bases pertenecen a la misma clase de equivalencia.

>[!Example]
>1. $\mathbb R^n$ es orientable.
>2. $S^n$ es orientable con $n\geq 2$ 

>[!Proposition]
>En general, cualquier variedad que pueda cubrirse con dos cartas suaves tal que $U\cap V$ sea conexo 
>>[!Proof]-
>>1. Sea $M$ una variedad que puede cubrirse con dos cartas suaves $(U,\varphi=(x^1,\ldots,x^m))$ y $(V,\psi=(y^1,\ldots,y^m))$ tales que $U\cap V$ sea conexo.
>>2. Tenemos la función $$f:U\cap V\to\mathbb R \qquad q\mapsto\det\!\left(\frac{\partial y^j}{\partial x^i}(q)\right)$$  
>>3. Como $\left(\frac{\partial y^j}{\partial x^i}(q)\right)$ es una matriz de cambio de base, se tiene $f(q)\neq0$ para todo $q\in U\cap V$.  
>>4. Además, $f$ es continua. Como $U\cap V$ es conexo, $f(U\cap V)$ es un conjunto conexo de $\mathbb R$ que no contiene al $0$. Por lo tanto, o bien $f>0$ en todo $U\cap V$, o bien $f<0$ en todo $U\cap V$.  
>>5. En el primer caso, $M$ es orientable por definición.  
>>6. En el segundo caso, cambiamos una de las cartas y definimos $\tilde\psi=(-y^1,y^2,\ldots,y^m)$
>>7. Entonces $$\det\!\left(\frac{\partial\tilde y^j}{\partial x^i}\right)=-\det\!\left(\frac{\partial y^j}{\partial x^i}\right)>0$$ para todo punto de $U\cap V$.  
>>8. Por consiguiente, el atlas $\mathcal A=\{(U,\varphi),(V,\tilde\psi)\}$ es una orientación de $M$.  
>>9. Luego, $M$ es orientable.
>

>[!Definition] Carta positivamente/negativamente orientada
>Sea $(M, \mathcal{A})$ una variedad orientada y sea $(U,\varphi=(x_1,\ldots,x_m))$ una carta suave arbitraria de $M$.
>Se dice que $(U,\varphi)$ esta positivamente orientada si la base ordenada $$\left\{\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_m}\bigg|_p\right\}$$tiene orientacion inducida por $\mathcal A$ para todo $p\in U$
>Es decir para cada $p\in U$ sucede que $$\det\left(\frac{\partial y_j}{\partial x_i}\bigg|_{p}\right)>0$$para cualquier carta $(V,\psi=(y_{1},\ldots y_{n})$ en $\mathcal A$ tal que $p\in U\cap V\neq 0$ 
>Analogamente se define carta negativamente orientada.

>[!Proposition]
>Sea $(M,\mathcal A)$ una variedad orientada y sea $(U,\varphi=(x_1,\ldots,x_m))$ una carta suave de $M$ con $U$ conexo. Entonces $(U,\varphi)$ es positivamente orientada o negativamente orientada.
>>[!Proof]-
>>1. Consideremos los subconjuntos de $U$ $$U_+=\left\{p\in U:\left\{\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_m}\bigg|_p\right\}\text{ es positivamente orientada con respecto a } \mathcal A\right\},$$$$U_-=\left\{p\in U:\left\{\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_m}\bigg|_p\right\}\text{ es negativamente orientada con respecto a }\mathcal A\right\}.$$ notar que en estos conjuntos hablamos de orientacion como espacios vectoriales
>>2. Vale la pena recalcar que $U_{+}$ y $U_{-}$ están bien definidas pues $\mathcal A$ define una orientación en cada $T_pM$, con $p\in M$, que no depende de la carta que se elija en $\mathcal A$.
>>3. Veamos que ambos conjuntos son abiertos de $U$ 
>>4. **$U_{+}$ es abierto de $M$**: Sea $p\in U_+$ y sea $(V,\psi=(y_1,\ldots,y_n))\in\mathcal A$ una carta de $p$.
>>5. Luego $p\in U\cap V$ y por definicion de $U_{+}$ tenemos que $$\det\!\left(\frac{\partial y_i}{\partial x_j}(p)\right)>0$$
>>6. Pensemos en la función $$f:U\cap V\longrightarrow\mathbb R,\qquad q\longmapsto \det\!\left(\frac{\partial y_i}{\partial x_j}(q)\right)$$
>>7. Como las funciones $$\frac{\partial y_i}{\partial x_j}:U\cap V\to\mathbb R$$ son $C^\infty$, en particular son continuas, tenemos que $f$ es continua.
>>8. Y dado que $f(p)>0$, entonces $f>0$ en un abierto $W$ de $p$ de $U\cap V$, el cual también es abierto de $M$.
>>9. Esto quiere decir que para todo $q\in W$, la base $$\left\{\frac{\partial}{\partial x_1}\bigg|_q,\ldots,\frac{\partial}{\partial x_n}\bigg|_q\right\}$$ está positivamente orientada.
>>10. Por lo tanto $p\in W\subseteq U_{+}$ con $W$ abierto. Luego $U_{+}$ es abierto.
>>11. Análogamente, $U_{-}$ es un abierto de $M$.
>>12. Como $U_{+}$ y $U_{-}$ son disjuntos, y $M$ es conexo, entonces $M=U_{+}$ o $M=U_{-}$, que es lo que queríamos probar.

>[!Remark]
>Si una carta $(U,\varphi)$ no esta positivamente orientada, podemos cambiar una coordenada, por ejemplo
>$$(U,\widetilde\varphi)=(-x_1,x_2,\ldots,x_m),$$
>y obtener una carta positivamente orientada.

>[!Proposition]
>Sean $M$ una variedad suave conexa de dimension $n$. Entonces las siguientes afirmaciones son equivalentes:
>
>- (a) $M$ es orientable.
>- (b) Existe una $n$-forma continua nunca nula sobre $M$.
>- (c) Existe una $n$-forma suave nunca nula sobre $M$.
>>[!Proof]-
>>- **$(c)\Rightarrow(b)$** es inmediato.
>>- **$(b)\Rightarrow(a)$**. 
>>	1. Tenemos $\omega$ una $n$-forma no nula, recordamos que un $n$-tensor alternante no nulo define una orientación (en espacios vectoriales) 
>>	2. Usamos la continuidad de la $n$-forma $\omega$ para definir un atlas de orientación. 
>>	3. Arrancamos con $\mathcal A=\{(U_\alpha,\varphi_\alpha=(x_1^\alpha,\ldots,x_n^\alpha))\}_{\alpha\in I}$ un atlas suave de $M$, donde podemos suponer que cada $U_\alpha$ es un conjunto conexo.
>>	4. Recordar que las componentes conexas en un espacio topológico localmente conexo por caminos son abiertas.
>>	5. Para cada $(U_\alpha,\varphi_\alpha)\in\mathcal A$, consideramos la función $$f_\alpha:U_\alpha\to\mathbb R\qquad p\mapsto \omega_p\!\left(\left.\frac{\partial}{\partial x_1^\alpha}\right|_p,\ldots,\left.\frac{\partial}{\partial x_n^\alpha}\right|_p\right)$$
>>	6. Como $\omega$ es nunca nula y continua, entonces $f_\alpha$ es continua y nunca nula.
>>	7. Como $U_\alpha$ es conexo, se sigue que $f_\alpha>0$ o bien $f_\alpha<0$ en todo $U_\alpha$.
>>	8. Si $f_\alpha<0$, construimos la nueva carta suave $(U_\alpha,\widetilde\varphi_\alpha=(-x_1^\alpha,x_2^\alpha,\ldots,x_n^\alpha))$.
>>	9. Nuestro atlas de orientación es $$\mathcal A_0=\{(U_\alpha,\varphi_\alpha)\in\mathcal A:f_\alpha>0\}\cup\{(U_\alpha,\widetilde\varphi_\alpha):(U_\alpha,\varphi_\alpha)\in\mathcal A,\ f_\alpha<0\}.$$
>>	- **$\mathcal A_0$ es un atlas suave de $M$**: Sus cartas son suavemente compatibles. Veamoslo:
>>		1. Si $(U_\alpha,\varphi_\alpha),(U_\beta,\varphi_\beta)$ son t.q. $f_\alpha>0$, $f_\beta>0$ y $U_\alpha\cap U_\beta\neq\varnothing$, entonces son suavemente compatibles porque están en $\mathcal A$. Y $\mathcal A$ es atlas suave
>>		2. Si $(U_\alpha,\varphi_\alpha)$ y $(U_\beta,\widetilde\varphi_\beta)$ donde $f_\alpha>0$, $f_\beta<0$ y $U_\alpha\cap U_\beta\neq\varnothing$. Consideremos $$T:\mathbb R^n\to\mathbb R^n,\qquad (x^1,\ldots,x^n)\mapsto(-x^1,x^2,\ldots,x^n),$$la cual es una transf. lineal t.q. $T^2=\operatorname{Id}_{\mathbb R^n}$ y $$\widetilde\varphi_\beta=T\circ\varphi_\beta,$$ así $$\widetilde\varphi_\beta\circ\varphi_\alpha^{-1}=T\circ \underbrace{\varphi_\beta\circ\varphi_\alpha^{-1}}_{\text{suave, pues }\mathcal A\text{ es atlas}}$$ y $$\varphi_\alpha\circ\widetilde\varphi_\beta^{-1}=\varphi_\alpha\circ(T\circ\varphi_\beta)^{-1}=\underbrace{\varphi_\alpha\circ\varphi_\beta^{-1}}_{\text{suave, pues }\mathcal A\text{ es atlas}}\circ T^{-1},$$
>>		3. Y finalmente si $(U_\alpha,\widetilde\varphi_\alpha)$, $(U_\beta,\widetilde\varphi_\beta)$ son t.q $f_{\alpha }<0$ y $f_{\beta}<0$ entonces son suavemente compatibles: $$\widetilde\varphi_\beta\circ\widetilde\varphi_\alpha^{-1}=(T\circ\varphi_\beta)\circ(\varphi_\alpha^{-1}\circ T^{-1})=T\circ(\varphi_\beta\circ\varphi_\alpha^{-1})\circ T^{-1}$$
>>	- **Para todo $p\in M$, las cartas de $\mathcal A_0$ definen la misma orientación en $T_pM$:**
>>		1. Sean $(U,\varphi)$, $(V,\psi)\in\mathcal A_0$ t.q. $U\cap V\neq\varnothing$. Tenemos tres casos
>>		- **1er Caso:**
>>			1. Primero tenemos $$(U,\varphi)=(U_\alpha,\varphi_\alpha),\qquad (V,\psi)=(U_\beta,\varphi_\beta),\qquad f_\alpha>0,\ f_\beta>0.$$entonces $$0<f_\alpha=\omega\!\left(\frac{\partial}{\partial x_\alpha^1},\ldots,\frac{\partial}{\partial x_\alpha^n}\right)=\det\!\left(\frac{\partial x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial x_\beta^1},\ldots,\frac{\partial}{\partial x_\beta^n}\right)=\det\!\left(\frac{\partial x_\beta^j}{\partial x_\alpha^i}\right)f_\beta.$$
>>			2. Luego $$\det\!\left(\frac{\partial x_\beta^j}{\partial x_\alpha^i}\right)>0.$$	 
>>		- **2do caso:** 
>>			1. Si $(U,\varphi)=(U_\alpha,\varphi_\alpha)$ y $(V,\psi)=(U_\beta,\widetilde\varphi_\beta)$, con $f_\alpha>0$ y $f_\beta<0$
>>			2. Entonces, repitiendo la misma cuenta de arriba, tenemos $$\begin{align} 0<f_\alpha & =\omega\!\left(\frac{\partial}{\partial x_\alpha^1},\ldots,\frac{\partial}{\partial x_\alpha^n}\right)\\ &=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial \widetilde x_\beta^1},\ldots,\frac{\partial}{\partial \widetilde x_\beta^n}\right)\\&=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(-\frac{\partial}{\partial x_\beta^1},\ldots,\frac{\partial}{\partial x_\beta^n}\right)\\&=-\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial x_\beta^1},\ldots,\frac{\partial}{\partial x_\beta^n}\right)\\&=-\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)f_{\beta }\end{align}$$
>>			3. Pero como $0>f_{\beta}$ tenemos que $$\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial x_\alpha^i}\right)>0$$
>>		- **3er Caso**
>>			1. Por último, si $(U,\varphi)=(U_\alpha,\widetilde\varphi_\alpha)$ y $(V,\psi)=(U_\beta,\widetilde\varphi_\beta)$ con $f_\alpha<0$ y $f_\beta<0$, 
>>			2. Entonces tenemos $$\begin{align} 0>f_\alpha & =\omega\!\left(\frac{\partial}{\partial x_\alpha^1},\ldots,\frac{\partial}{\partial x_\alpha^n}\right)\\&=-\omega\!\left(\frac{\partial}{\partial \widetilde x_\alpha^1},\ldots,\frac{\partial}{\partial \widetilde x_\alpha^n}\right)\\&=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)-\omega\!\left(\frac{\partial}{\partial \widetilde x_\beta^1},\ldots,\frac{\partial}{\partial \widetilde x_\beta^n}\right)\\& =\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)\omega\!\left(\frac{\partial}{\partial  x_\beta^1},\ldots,\frac{\partial}{\partial  x_\beta^n}\right)\\&=\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)f_{\beta }\end{align}$$
>>			3. Con lo cual $$\det\!\left(\frac{\partial \widetilde x_\beta^j}{\partial \widetilde x_\alpha^i}\right)>0$$  
>>		4. Luego todas las funciones de transición de $\mathcal A_0$ tienen determinante positivo. Por consiguiente, todas las cartas de $\mathcal A_0$ determinan la misma orientación.
>>- **$(a)\Rightarrow (c)$** 
>>	1. Tenemos el atlas de orientación $\mathcal A$. Queremos construir $\omega\in\Omega^n(M)$.
>>	2. Para cada $(U_\alpha,\varphi_\alpha)\in\mathcal A$, con $\varphi_\alpha=(x_\alpha^1,\ldots,x_\alpha^n)$, consideremos $$\xi_\alpha=(dx_\alpha^1)\wedge\cdots\wedge(dx_\alpha^n).$$
>>	3. Tomemos una partición de la unidad subordinada al cubrimiento $\{U_\alpha\}_{\alpha\in I}$, digamos $\{\rho_\alpha\}_{\alpha\in I}$.
>>	4. Definimos sobre $M$ $$\rho_\alpha\,\xi_\alpha=\begin{cases}\rho_\alpha(q)\,\xi_\alpha(q),&q\in U_\alpha,\\0,&q\notin U_\alpha.\end{cases}$$
>>	5. Como $\rho_\alpha$ es suave, usando el criterio de suavidad para formas, tenemos que $\rho_\alpha\,\xi_\alpha$ es suave.
>>	6. Definimos entonces $$\omega=\sum_{\alpha\in I}\rho_\alpha\,\xi_\alpha.$$
>>	7. Y $\omega$ resulta suave, pues $\{\operatorname{supp}\rho_\alpha\}_{\alpha\in I}$ es un conjunto localmente finito luego para cada $p\in M$ existe un entorno abierto $V$ de $p$ tal que sólo un número finito de las formas $\rho_\alpha\xi_\alpha$ son no nulas en $V$. En consecuencia, $\omega|_V$ es una suma finita de formas suaves, y por tanto es suave.
>>	8. Además, para cada $p\in M$, $\omega_{p}$ es $n$-lineal y alternante.
>>	9. Sólo resta verificar que $\omega$ nunca se anula. Para esto recordemos que $\sum_{\alpha\in I}\rho_\alpha(p)=1$ y $\rho_\alpha(p)\ge0$ para todo $\alpha\in I$.
>>	10. Dado $p\in M$ como $\sum_{\alpha\in I}\rho_\alpha(p)=1$ existe $\beta\in I$ tal que $\rho_\beta(p)>0$ osea $p\in \operatorname{supp} \rho_{\alpha }\subseteq U_{\beta}$ 
>>	11. La carta $(U_\beta,\varphi_\beta=(x_\beta^1,\ldots,x_\beta^n))$ determina la base $\{\frac{\partial}{\partial x_\beta^1}\big|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\big|_p\}$ de $T_pM$.
>>	12. Entonces $$\begin{align}\omega_{p}\!\left(\frac{\partial}{\partial x_\beta^1}\bigg|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\bigg|_p\right)&= \rho_{\beta }(p)\xi_{\beta}\!\left(\frac{\partial}{\partial x_\beta^1}\bigg|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\bigg|_p\right)+\sum_{\substack{\alpha\in I \\ \alpha  \neq \beta }}^{n} \rho_\alpha(p)\,\xi_{\alpha}\!\left(\frac{\partial}{\partial x_\beta^1}\bigg|_p,\ldots,\frac{\partial}{\partial x_\beta^n}\bigg|_p\right)\\&=\rho_{\beta }(p)+\sum_{\substack{\alpha\in I \\ \alpha  \neq \beta }}^{n} \rho_\alpha(p)\det\left(\frac{\partial x_{\alpha }^{j } }{\partial x_{\beta }^{i}}\right) \end{align}$$ para el segundo igual usamos la definicion de evaluar una $n$-forma y la propiedad $dx(\frac{\partial }{\partial y})=\frac{\partial }{\partial y}x$ 
>>	13. Y el resultado de esta suma es no negativo dado que $\rho_{\beta}(p)>0$ y $\rho_{\alpha }\geq 0$ y el $\det$ es mayor que $0$ por que ambas cartas pertencen a $\mathcal A$ el atlas de orientacion    

## Esto no lo dio en clase

>[!Theorem] Orientabilidad de hipersuperficies
>Sea $M$ una subvariedad de dimension $n$ en $\mathbb R^{n+1}$. Probar que $M$ es orientable si y solo si $M$ admite un campo normal diferenciable nunca nulo; es decir, una funcion diferenciable
>$$\xi:M\to\mathbb R^{n+1}$$
>tal que $\xi(p)\perp T_pM$ para todo $p\in M$.
>>[!Proof]-
>>**$(\Leftarrow)$** Supongamos que existe $\xi:M\to\mathbb R^{n+1}$ suave y nunca nula tal que $\xi(p)\perp T_pM$ para todo $p\in M$.
>>
>>Sea $\omega$ la forma de volumen estandar de $\mathbb R^{n+1}$. Definimos una $n$-forma sobre $M$ por
>>$$\eta_p(v_1,\ldots,v_n)=\omega_p(\xi(p),v_1,\ldots,v_n),\qquad v_i\in T_pM.$$
>>Esta forma es suave. Ademas no se anula: si $v_1,\ldots,v_n$ es una base de $T_pM$, entonces
>>$$\{\xi(p),v_1,\ldots,v_n\}$$
>>es base de $\mathbb R^{n+1}$, luego
>>$$\omega_p(\xi(p),v_1,\ldots,v_n)\ne0.$$
>>Por la proposicion anterior, $M$ es orientable.
>>
>>**$(\Rightarrow)$** Supongamos que $M$ es orientable. Queremos construir $\xi$ suave y nunca nulo perpendicular a $T_pM$.
>>
>>Como $M$ es orientable, existe una $n$-forma suave nunca nula $\eta$ sobre $M$. Localmente, si $(U,\varphi=(x_1,\ldots,x_n))$ es una carta, los vectores
>>$$\frac{\partial}{\partial x_1}\bigg|_p,\ldots,\frac{\partial}{\partial x_n}\bigg|_p$$
>>forman una base de $T_pM$. En $\mathbb R^{n+1}$ existe exactamente una direccion normal a este subespacio. Elegimos el vector normal unitario $\xi(p)$ de modo que
>>$$\omega_p(\xi(p),v_1,\ldots,v_n)$$
>>tenga el mismo signo que $\eta_p(v_1,\ldots,v_n)$ para toda base positiva $v_1,\ldots,v_n$ de $T_pM$.
>>
>>Usando coordenadas locales, esta eleccion se escribe suavemente por cofatores: si
>>$$d i_p\left(\frac{\partial}{\partial x_j}\bigg|_p\right)
>>=\sum_{k=1}^{n+1}a_{kj}(p)\frac{\partial}{\partial y_k},$$
>>entonces un vector normal se obtiene como el vector de menores de la matriz $(a_{kj})$. Al normalizar, obtenemos un campo suave porque el vector de menores no se anula.

>[!Remark]
>La orientabilidad de una hipersuperficie se puede pensar como la posibilidad de elegir de manera suave un lado positivo, es decir, un campo normal nunca nulo.

### Orientacion inducida en el borde

>[!Remark]
>La orientacion del borde se elige con la convencion "normal saliente primero".
>
>Si $M$ es una variedad orientada con borde y $p\in\partial M$, una base ordenada
>$$(v_1,\ldots,v_{n-1})$$
>de $T_p(\partial M)$ es positiva si
>$$(\nu_p,v_1,\ldots,v_{n-1})$$
>es una base positiva de $T_pM$, donde $\nu_p$ es un vector normal saliente.

>[!Example]
>En un intervalo $[a,b]$, la orientacion inducida del borde es
>$$\partial[a,b]=\{b\}-\{a\}.$$
>El punto derecho tiene signo positivo y el punto izquierdo tiene signo negativo.

- [ ] 