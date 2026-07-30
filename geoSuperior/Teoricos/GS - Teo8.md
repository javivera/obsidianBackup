# Particiones de la Unidad

>[!Remark] Motivación
>La idea central es **pegar datos locales** definidos en abiertos y producir a partir de ellos objetos globales sobre toda la variedad.

>[!Theorem]
>La funcion $f:\mathbb{R}\rightarrow\mathbb{R}$ definida por $$f(x) = \begin{cases}0 & \text{if } x < 0 \\ e^{-1/x}  & \text{if } x \geq 0 \end{cases}$$ es de clase $C^{\infty}$ y su serie de Taylor $s$ alrededor de $a=0$ es identicamente nula. En particular $s(x)\neq f(x)$ para todo $x>0$  

^54d8a6

## Funciones de corte y funciones campana

>[!Lemma] Función de corte en $\mathbb R$
>Dados $\gamma_1,\gamma_2\in\mathbb R$ con $\gamma_1<\gamma_2$, existe una función suave $$h:\mathbb R\to\mathbb R$$ tal que $$h(t)=\begin{cases} 1 & \text{if } t \le \gamma_1,\\ 0<h(t)<1 & \text{if } \gamma_1 < t < \gamma_2,\\ 0 & \text{if } t \ge \gamma_2 \end{cases}$$ ![[Pasted image 20260414194706.png]]
>>[!Proof]-
>>1. Considerar [[GS - Teo8#^54d8a6]] y definir $$h(t)= \frac{f(\gamma_{2}-t)}{f(\gamma_{2}-t)+f(t-\gamma_{1})}$$  

^3df6bd

>[!Lemma] Función campana en $\mathbb R^n$
>Dados $0<\gamma_1<\gamma_2$, existe una función suave $$\mu:\mathbb R^n\to\mathbb R$$tal que $$\mu(x)= \begin{cases}  1 & \text{if } x\in \overline{B(0,\gamma_1)},\\ 0<\mu(x)<1 & \text{if } \gamma_1<\|x\|<\gamma_2,\\ 0 & \text{if } x\in B(0,\gamma_2)^c \end{cases}$$ ![[Pasted image 20260414195214.png]]
>>[!Proof]-
>>2. Se toma la función del lema anterior y se compone con la norma: $$\mu(x)=h(\|x\|).$$
>>3. La única sutileza es el punto $x=0$, pero cerca de $0$ la función es constante igual a $1$, así que es suave.

^83d0e9

>[!Exercise]  
>Sea $X$ un espacio topológico Hausdorff, $U\subset X$ con la topología subespacio, y $A\subset U$. Si existe un conjunto compacto $K$ tal que $A\subset K\subset U$ entonces $$\text{Clausura}_{U} A=\text{Clausura}_{X} A$$
>No olvidar que en general $\operatorname{Clausura}_{U}A \subseteq \operatorname{Clausura}_{X}A$ pero no tienen por que ser iguales ejemplo $U=A=(0,1)$ y $X=\mathbb{R}$ 
>>[!Proof]-  
>>1. Como $K\subset U\subset X$ y $K$ es compacto en $U$, entonces también es compacto en $X$.  
>>2. Como $X$ es Hausdorff, los compactos son cerrados. Luego, $K$ es cerrado en $X$
>>3. Dado que $A\subset K$ y $K$ es cerrado en $X$, se tiene $\operatorname{Cl}_{U} A\subset K\subseteq U$.  
>>4. Por la definición de topología subespacio, $\operatorname{Cl}_{U} A=U\cap\operatorname{Cl}_{X} A$.  
>>5. Como $K$ cerrado en $X$ entonces $\operatorname{Cl}_{X} A\subset K\subset U$, resulta $U\cap\operatorname{Cl}_{X} A=\operatorname{Cl}_{X} A$.  

## No se por que aparecen devuelta si ya estaban antes

>[!Lemma]- Funciones campana o de levantamiento en variedades suaves
>Sea $M$ una variedad suave, $p\in M$ y $U$ un abierto de $M$ con $p\in U$. Entonces existen un abierto $V$ de $p$ y una función suave $$\beta:M\to\mathbb R$$tales que $$\overline V\subseteq U,\qquad 0\le \beta\le 1,\qquad \beta|_{\overline V}\equiv 1,\qquad \operatorname{supp}\beta\subseteq U.$$ notar que aca la clausura es con respecto a $M$ 
>>[!Proof]-
>>6. Sea $p\in M$ y $U$ abierto de $p$. Sea $(W,\psi)$ una carta suave de $p$ tal que, sin pérdida de generalidad, podemos asumir que:  
>>	- $W\subset U$  
>>	- $\psi(W)=B(0,3)$ 
>>(Esto por que las bolas son base $\mathbb{R}^{n}$ y son difeomorfas entre si)
>>1. Por tanto hay un abierto $V$ de $p$, $V\subset W\subset U$ tal que: $$\psi(V)=B(0,1)$$
>>2. Pensamos en la función $\beta:M\to\mathbb{R}$: $$\beta(q)=\begin{cases}h\circ\psi(q) & \text{si } q\in W,\\0 & \text{si } q\notin W.\end{cases}$$con $h$ como [[GS - Teo8#^83d0e9]] con $\gamma_1=1$, $\gamma_2=2$.  
>>3. Veamos que cumple las condiciones que buscamos: 
>>	- (i)  $0\le \beta(x)\le 1$ es trivial
>>	- (ii) 
>>		1. Veamos $\beta|_{\overline{V}}\equiv 1$. Tenemos que $V=\psi^{-1}(B(0,1))$ que es un abierto de $W$ y por tanto es abierto de $M$.  
>>		2. Notemos que como $V\subseteq K=\psi ^{-1}(\overline{B(0,1)})\subseteq W$ con $K$ compacto por que $\psi$ es homeomorfismo entonces $\overline{V}^{W}=\overline{V}^{M}=\overline{V}$ 
>>		3. Ahora como $\psi$ es homeo $$\overline{V} =\overline{V}^{W}=\psi ^{-1}(\psi(\overline{V}^{B(0,3)}  ))=\psi ^{-1}(\overline{B(0,1)}^{B(0,3)})  \subseteq B(0,2)\subseteq W  $$
>>		4. En particular, $\overline{V}\subseteq W\subseteq U$ entonces $\beta|_{\overline{V}}\equiv 1$.  
>>	- (ii) Soporte de $\beta\subseteq U$:
>>		1. Recordemos que $\operatorname{supp}(\beta)=\overline{\{q\in M:\beta(q)\neq 0\}}$.  
>>		2. En el caso de la función $h$, el soporte es $\overline{B(0,2)}$.  
>>		3. Afirmación: $\operatorname{supp}(\beta)=\psi^{-1}(\overline{B(0,2)})$.
>>		4. En efecto, por definición de $\beta$, $\beta(q)\neq 0$ sii $q\in W$ y $\psi(q)\in B(0,2)$.
>>		5. Luego por definicion $$\operatorname{supp}(\beta)=\overline{(\psi^{-1}(B(0,2)))}^{M} $$
>>		6. Como $\psi^{-1}(B(0,2))$ está contenido en el compacto $K=\psi^{-1}(\overline{B(0,2.5)})$, que a su vez está contenido en $W$ devuelta las clausura coinciden $$\overline{(\psi^{-1}(B(0,2)))}^{M}=\overline{(\psi^{-1}(B(0,2)))}^{W}$$  
>>		7. Por lo tanto se tiene: $$\operatorname{supp}(\beta)=\overline{\psi ^{-1}(B(0,2)) }^{W}=\psi^{-1}(\overline{B(0,2)}^{B(0,3)}) \subset K\subset W\subset U$$
>>		8. Nuevamente, hay que tener cuidado al clausurar: podría haber pasado algo como $U=(0,5)$ y $\psi^{-1}(\Delta(0,2))=(0,5)$, y en este caso se sale de $U$. Por eso tomamos $W$ tal que $\psi(W)=\Delta(0,3)$, para quedar holgados y que la clausura del soporte no se escape de $U$.  
>>		9. Por último, veamos que $\beta$ es suave mostrando que lo es en algún entorno abierto de cada punto.  
>>		10. Tenemos dos casos:  
>>			- (i) Si $q\in W$, entonces $\beta|_{W}=h\circ\psi$, que es composición de suaves.
>>			- (ii) Si $q\notin W$, entonces $q\not\in \operatorname{supp}(\beta)$ por que $\operatorname{supp}(\beta) \subseteq W$ y como $\operatorname{supp}(\beta)$ es cerrado, su complemento es abierto entonces existe un abierto $O\subseteq \operatorname{supp}(\beta)^{c}$ de $q$ tal que $\beta|_{O}=0$, como función constante es suave, se tiene que $\beta|_{O}$ es suave. 
>>		6. Por lo tanto, $\beta$ es suave.

>[!Lemma]- Extensión local de funciones suaves
>Sea $M$ una variedad suave, $p\in M$ y $U$ un abierto de $p$. Para toda $$f\in C^\infty(U)$$existen un abierto $V$ de $p$ con $\overline V\subseteq U$ y una función $$\widetilde f\in C^\infty(M)$$tal que $$\widetilde f=f\quad\text{sobre }V$$
>>[!Proof]-
>>7. Tomamos una función campana $\beta$ como en el lema anterior, con $\beta\equiv 1$ sobre $\overline V$ y $\operatorname{supp}\beta\subseteq U$. 
>>8. Definimos $$\widetilde f(q)=\begin{cases}\beta(q)f(q),& q\in U,\\0,& q\notin U\end{cases}$$
>>9. Entonces $\widetilde f$ es suave, coincide con $f$ sobre $V$ y está bien definida globalmente.

## Familias localmente finitas

>[!Definition] Familia localmente finita
>Sea $X$ un espacio topológico. Una familia $\Omega=\{A_\alpha\}_{\alpha\in I}$ de subconjuntos de $X$ se dice **localmente finita** si para todo $p\in X$ existe un abierto $W$ de $p$ que corta a lo sumo una cantidad finita de miembros de $\Omega$.

>[!Example] Ejemplos
>- La familia
>$$
>\bigl\{(k,k+2):k\in\mathbb N\bigr\}
>$$
>de abiertos de $\mathbb R$ es localmente finita.
>- La familia
>$$
>\bigl\{(-1/k,1/k):k\in\mathbb N\bigr\}
>$$
>no es localmente finita, porque todo entorno de $0$ corta infinitos términos.

>[!Definition] Cubrimiento y refinamiento
>Sea $\Omega=\{C_\alpha\}_{\alpha\in I}$ una familia de subconjuntos de un espacio topológico $X$.
>
>- $\Omega$ **cubre** a $X$ si
>$$
>\bigcup_{\alpha\in I} C_\alpha=X.
>$$
>- Un **refinamiento** de $\Omega$ es otro cubrimiento
>$$
>\mathcal D=\{D_\beta\}_{\beta\in J}
>$$
>tal que para todo $\beta\in J$ existe $\alpha\in I$ con
>$$
>D_\beta\subseteq C_\alpha.
>$$

## Particiones de la unidad

>[!Definition] Partición de la unidad
>Una **partición de la unidad** sobre una variedad suave $M$ es una familia de funciones suaves
>$$
>\{\rho_\alpha:M\to\mathbb R\}_{\alpha\in I}
>$$
>tal que:
>
>1. la familia de soportes $\{\operatorname{supp}\rho_\alpha\}_{\alpha\in I}$ es localmente finita;
>2. para todo $\alpha$ y todo $p\in M$,
>$$
>0\le \rho_\alpha(p)\le 1;
>$$
>3. para todo $p\in M$,
>$$
>\sum_{\alpha\in I}\rho_\alpha(p)=1.
>$$
>
>La suma está bien definida porque la familia de soportes es localmente finita.

^f5db1b

>[!Definition] Subordinación
>Sea $\Omega=\{U_\alpha\}_{\alpha\in I}$ un cubrimiento por abiertos de $M$.
>- Se dice que la particion de la unidad $\{\rho_{\alpha}\}_{\alpha \in I}$ esta subordinada a $\Omega$. Si la familia de soportes $\{ \operatorname{supp}(\rho_{\alpha }) \}_{\alpha \in I}$ es un refinamiento de $\Omega$.
>- Y se dice que la partición de la unidad $\{\rho_\alpha\}_{\alpha\in I}$ esta **estrictamente subordinada** a $\Omega$ si $I=J$ y $\operatorname{supp}\rho_\alpha\subseteq U_\alpha$ para todo $\alpha\in I$.
>Notar que siempre una particion de la unidad cubre todo $M$ por parte 3 de la dfeinicion.

^12d7c6

## Ejemplo (Aplicaciones)

>[!Remark]
>Particiones de la unidad sirven para pegar funciones suaves definidas en abiertos pequeños de la variedad.
>Supongamos que tenemos una familia de funciones suaves $\{f_\alpha:U_\alpha\subseteq M\to\mathbb{R}\}_{\alpha\in I}$ con $\{U_\alpha\}_{\alpha\in I}$ un cubrimiento abierto de $M$, y que además tenemos una partición de la unidad $\{\rho_\alpha\}_{\alpha\in I}$ estrictamente subordinada a $\{U_\alpha\}_{\alpha\in I}$.
>Entonces, $$f:=\sum_{\alpha\in I}\rho_\alpha f_\alpha$$es una función suave en $C^\infty(M)$, donde el producto $\rho_\alpha\cdot f_\alpha$ se ve como la función suave definida sobre TODO $M$ $(\leftarrow$ abuso de notación$)$ dada por $$(\rho_\alpha\cdot f_\alpha)(q)=\begin{cases}\rho_\alpha(q)\,f_\alpha(q)&\text{si }q\in U_\alpha,\\0&\text{si }q\notin U_\alpha.\end{cases}$$que resulta suave pues $\operatorname{supp}(\rho_\alpha)\subseteq U_\alpha$.
>Y como la familia de soportes es localmente finita, para cada $p\in M$, existe un abierto de $p$ en donde la suma anterior se vuelve una suma finita de funciones suaves.

>[!Remark] Posible para final
>Si $M$ es compacta, es fácil dar particiones de la unidad subordinadas a cualquier cubrimiento abierto $\{U_\alpha\}_{\alpha\in I}$ de $M$.
>Por [[GS - Teo5#^45cd5d]], dado $p\in U_\alpha$, existe un abierto $V_p$ de $p$ t.q. $\overline{V_p}\subseteq U_\alpha$ y una función $B_p:M\to\mathbb{R}$ suave t.q. $$\begin{cases}0\leq B_p(q)\leq 1,&\forall q\in M,\\B_p(q)=1,&\forall q\in \overline{V_p},\\\operatorname{supp}B_p\subseteq U_\alpha.\end{cases}$$
>Dado que $\{V_p\}_{p\in M}$ cubre a $M$, se sigue por compacidad de $M$ que existen puntos $p_1,\dots,p_r$ t.q. $\{V_{p_k}:k=1,\dots,r\}$ cubre a $M$.
>Ahora definir $$\rho_k=\frac{B_{p_k}}{\sum_{k=1}^r B_{p_k}},\qquad k=1,\dots,r$$que resulta suave pues el denominador nunca se anula y $\{ \rho_{k} \}_{k=1}^{n}$ es una particion de la unidad subordinada a $\{ U_{\alpha } \}_{\alpha \in J}$ 

>[!Remark]
>La construccion anterior se generaliza a lo que se conoce como **espacios paracompactos**
## Espacios paracompactos

>[!Definition] Espacio paracompacto
>Un espacio topológico $X$ se dice **paracompacto** si todo cubrimiento abierto de $X$ admite un refinamiento abierto que es localmente finito.

>[!Theorem] Las variedades topológicas son paracompactas
>Toda variedad topológica es paracompacta. En particular, toda variedad suave es paracompacta.

>[!Theorem] Existencia de particiones de la unidad
>Sea $M$ una variedad suave y sea $$\Omega=\{U_\alpha\}_{\alpha\in I}$$un cubrimiento abierto de $M$. Entonces existe una partición de la unidad **numerable** $$\{\rho_k\}_{k\in\mathbb N}$$subordinada a $\Omega$ tal que cada $\operatorname{supp}\rho_k$ es compacto para todo $k\in \mathbb{N}$.
>Más aún, si no se exige compacidad de los soportes, puede construirse una partición estrictamente subordinada al $\Omega$ donde a lo sumo una cantidad numerable de los $\rho_{\alpha }$ son no nulos 

^eafe2b

>[!Example] Caso compacto
>Si $M$ es compacta, toda cobertura abierta admite un subcubrimiento finito
>$$
>U_1,\dots,U_r.
>$$
>Tomando funciones campana $\beta_i$ con soporte contenido en $U_i$ y tales que los abiertos donde $\beta_i=1$ aún cubren $M$, se define
>$$
>\rho_i=\frac{\beta_i}{\beta_1+\cdots+\beta_r}.
>$$
>Entonces $\{\rho_i\}_{i=1}^r$ es una partición de la unidad subordinada al cubrimiento.

## Consecuencias de las particiones de la unidad

>[!Corollary] Función que vale $1$ sobre un cerrado
>Sea $U$ un abierto de $M$ y $A$ un cerrado de $M$ con $$A\subseteq U$$
>Entonces existe una función suave $$f:M\to\mathbb R$$tal que $$0\le f\le 1,\qquad f|_A\equiv 1,\qquad \operatorname{supp}f\subseteq U$$
>>[!Proof]-
>>1. Como $A$ es cerrado. Considerar al cubrimiento de $M$ dado por $$\{U,M\setminus A\}$$
>>2. Por [[GS - Teo8#^eafe2b]] existe una particion de la unidad $\{\rho,\sigma\}$ subordinada a $\{U,M\setminus A\}$ con $$\operatorname{supp}\rho\subseteq U,\qquad \operatorname{supp}\sigma\subseteq M\setminus A$$
>>3. Para $p\in A$ se tiene $\sigma(p)=0$, luego $$\rho(p)=1$$
>>4. Tomamos $f=\rho$ que es la funcion que buscabamos

^cf02ec

>[!Definition] Función suave sobre un subconjunto arbitrario
>Sean $M$ y $N$ variedades suaves y sea $A\subseteq M$ un subconjunto cualquiera. Una función $$F:A\to N$$se dice **suave** si para todo $p\in A$ existe un abierto $W_p$ de $M$ con $p\in W_p$ y una función suave $$F_p:W_p\to N$$que coincide con $F$ sobre $W_p\cap A$

>[!Proposition] Extensión de funciones suaves definidas en cerrados
>Sea $M$ una variedad suave, $A\subseteq M$ cerrado y $$F:A\to\mathbb R^k$$una función suave en el sentido anterior. 
>Entonces, para todo abierto $U$ con $A\subseteq U$ existe una función suave $$\widetilde F:M\to\mathbb R^k$$ funcion suave tal que
>$$
>\widetilde F|_A=F,
>\qquad
>\operatorname{supp}\widetilde F\subseteq U.
>$$
>>[!Proof]-
>>1. Por definicion de $F$ suave para cada $p\in A$ elegimos un abierto $W_p\subseteq U$ y una extensión suave local $$\widetilde F_p:W_p\to\mathbb R^k$$que coincide con $F$ en $W_{p}\cap A$ 
>>2. Sin perdida de generalidades podemos suponer $W_{p}\subseteq U$ (En otro caso, cambiamos $W_{p}$ por el abierto $W_{p}\cap U$)   
>>3. Ahora tenemos el conjunto $$\{W_p\}_{p\in A}\cup\{M\setminus A\}$$que es un cubrimiento abierto de $M$.
>>4. Por [[GS - Teo8#^eafe2b]] existe una partición de la unidad $$\{\rho_p\}_{p\in A}\cup\{\rho_0\}$$subordinada estrictamente a este cubrimiento, con $$\operatorname{supp}\rho_p\subseteq W_p, \qquad \operatorname{supp}\rho_0\subseteq M\setminus A$$
>>5. Como hicimos en el ejemplo anterior, definimos $$\widetilde F=\sum_{p\in A}\rho_p\,\widetilde F_p$$donde estamos abusando de notación y entendemos el producto $$(\rho_p\widetilde{F}_p)(q)=\begin{cases}\rho_p(q)\,\widetilde{F}_p(q)&\text{si }q\in W_p,\\0&\text{si }q\notin W_p.\end{cases}$$
>>6. Nuevamente, no olvidar que cada término $\rho_p\tilde F_p$ resulta suave sobre todo $M$, pues $\operatorname{supp}\rho_p\subset W_p$ permite extender $\rho_p\tilde F_p$ por $0$ fuera de $W_p$.
>>7. Tenemos $\widetilde{F}$ es suave pues del hecho que $\{\operatorname{supp}\rho_p\}$ sea localmente finita hace que la suma sea una suma finita de funciones suaves en un entorno de cada punto de $M$.
>>8. Ahora, si $q\in A$, $$\widetilde{F}(q)=\sum_{p\in A}\rho_p(q)\widetilde{F}_p(q)=\sum_{p\in A}\rho_p(q)F(q)$$ porque $\widetilde{F}_p$ coincide con $F$ en $W_p\cap A$,
>>9. Y seguimos $$\sum_{p\in A}\rho_p(q)F(q)=\left(\sum_{p\in A}\rho_p(q)\right)F(q)=\left(1-\rho_0(q)\right)F(q)$$ donde el segundo igual vale por que $\sum_{p\in A}\rho_{p}+\rho_{0}=1$ 
>>10. Y como $\operatorname{supp}\rho_0\subseteq M\setminus A$, tenemos $$\left(1-\rho_0(q)\right)F(q)=F(q).$$
>>11. Por último veamos $\operatorname{supp}\widetilde{F}\subseteq U$: Sea $q\in\operatorname{supp}\widetilde{F}$. Como $\{\operatorname{supp}\rho_p\}\cup\{\operatorname{supp}\rho_0\}$ es localmente finita, existe $W_q$ abierto de $M$ con $q$ que corta un número finito de miembros de $\{\operatorname{supp}\rho_p\}\cup\{\operatorname{supp}\rho_0\}$, digamos $\operatorname{supp}\rho_{p_1},\ldots,\operatorname{supp}\rho_{p_k}$ y $\operatorname{supp}\rho_0$.
>>12. Esto implica que debe haber un $j$ tal que $q\in\operatorname{supp}\rho_{p_j}$, pues en otro caso, existirían abiertos $W_1,\ldots,W_k$ de $q$ donde $\rho_{p_1},\ldots,\rho_{p_k}$ se anulan, y así $$W_0\cap W_1\cap\cdots\cap W_k$$es un abierto de $q$ donde $\widetilde{F}$ vale cero que es absurdo
>>

^b5794a

## Métrica riemanniana

>[!Definition] Métrica riemanniana
>Sea $M$ una variedad suave. Una **métrica riemanniana** $g$ sobre $M$ es (por ahora) una asignación
>$$
>g:p\mapsto g_p,
>$$
>donde cada $g_p$ es un producto interno sobre $T_pM$, tal que si
>$$
>(U,\varphi=(x_1,\dots,x_n))
>$$
>es una carta suave de $M$, entonces las funciones
>$$
>g_{ij}:U\to\mathbb R,
>\qquad
>p\mapsto g_p\left(\left.\frac{\partial}{\partial x_i}\right|_p,\left.\frac{\partial}{\partial x_j}\right|_p\right)
>$$
>son suaves para todo $i,j$.

>[!Exercise] Estructuras riemannianas
>Mostrar que toda variedad diferenciable admite una estructura riemanniana. Más precisamente, probar que existe una aplicación
>$$
>B:p\mapsto B_p
>$$
>que asigna a cada $p\in M$ un producto interno en $T_pM$ y tal que sus coeficientes locales son suaves.
>
>¿Cómo se definiría, a partir de una métrica riemanniana, la longitud de una curva diferenciable
>$$
>\alpha:[0,1]\to M?
>$$
>
>Pista: usar particiones de la unidad.

