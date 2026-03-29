>[!Definition]
> Un subconjunto $S$ (no vacío) de un espacio vectorial $X$ se llama balanceado si $\alpha \cdot x \in S \quad \forall x \in S, \forall |\alpha| \le 1$.

>[!Remark]
>Poniendo $D_r = \{ \alpha : |\alpha| \le r \}$, resulta: S es balanceado $\iff D_1 \cdot S \subseteq S \iff D_r \cdot S \subseteq S$ (la última equivalencia se debe a que $1 \in D_1$ y por tanto $S \subseteq D_1 \cdot S \quad \forall S \subseteq X$). O sea que S es balanceado si contiene, con cada x, todo el "disco" $D_1 \cdot x$ (si X es complejo), o todo el "segmento" $D_1 \cdot x = [-x, x]$ (si X es real).
 
>[!Example]
>Por ejemplo, en $X = \mathbb{R}^2$ son balanceados los siguientes conjuntos:
> - $S_1 = \{(x,y) \in \mathbb{R}^2 / |x| \le 1 \}$, 
> - $S_2 = \{(x,y) / (|x|^2+|y|^2) \le 1 \}$, $S_3 = \{(x,y)/x=y\}$
> - $S_4 = \{(x,y)/x,y=0\}$;
> - En cambio no lo es $S_5 = \{(x,y)/1<|z|+|y|<2\}$. 
> Pero si estos $S_i$ los pensamos en $X=\mathbb{C}$, ninguno de ellos es balanceado, pues se ve que sólo los discos con centro en $0$ son balanceados en $\mathbb{C}$. 

>[!Definition] Capsula Balanceada
>Volviendo al caso general, se ve fácilmente que $D_r \cdot S$ es balanceado cualesquiera sean $r>0$ y $S \ne \phi$; 
>En particular, $D_1 \cdot S$ es el más pequeño balanceado que contiene a $S$, pues si $S \subseteq B$, con B balanceado, es $D_1 \cdot S \subseteq D_1 \cdot B=B$.
>Llamamos $S_b = D_1 \cdot S = \text{"cápsula balanceada" de S}$. 

>[!Proposition] Multiplicar por disco da un entorno
>Si $X$ es un EVT y $U$ es un entorno abierto del $0 \in X$, entonces $D_r \cdot U$ es un entorno abierto del $0 \in X \quad \forall r>0$, pues $D_r \cdot U$ es union de los abiertos $\alpha \cdot U = M_\alpha(U)$, con $0 < |\alpha| < r$ que son todos abiertos por que $M_{\alpha }$ es homemorfismo 
>(No hace falta considerar $\alpha=0$ pues $0 \cdot U = 0 \in U$). 

>[!Remark] Clausura de balanceado
>También se ve fácilmente que (en un EVT) la clausura de un balanceado es otro balanceado. Por último, digamos que también los alimentos de una buena dieta deben ser balanceados; pero sobre eso hablaremos otro día.

>[!Lemma]
> En todo EVT los abiertos balanceados forman base de entornos del origen.
>>[!Proof]
>> 1. Sea X un EVT y sea U un entorno del $0 \in X$; como $0 \cdot 0 = 0$ (o sea: el escalar cero por el vector cero es el vector cero)
>> 2. La definición de EVT nos dice que existen un entorno abierto V del $0 \in X$ y un $r>0$ tales que $D_r \cdot V \subseteq U$; 
>> 3. Como según vimos más arriba, $D_r \cdot V$ es entorno abierto y balanceado del $0 \in X$, queda probado el lema. Otro día probaremos el licor de anís.

>[!Definition] Conjunto absorbente
>Un subconjunto S de un espacio vectorial X se llama absorbente (en X) sii $\forall x \in X \quad \exists r=r(x)>0$ tal que $x \in \alpha \cdot S \quad \forall |\alpha| > r$
>En tal caso, cada punto del espacio $X$ resulta "absorbido" por "múltiplos" suficientemente grandes de $S$. 
>Se ve fácilmente que todo absorbente contiene al origen, y que la definición se puede expresar también así: $S$ es absorbente sii $\forall x \in X \quad \exists \epsilon > 0$ tal que $\alpha \cdot x \in S \quad \forall |\alpha| < \epsilon$.

>[!Proposition]
>En un EVT todo entorno $U$ del origen es absorbente, pues si $x \in X$, es $0 \cdot x = 0 \in U$ y por tanto $\exists \epsilon > 0$ tal que $\alpha \cdot x \in U \quad \forall |\alpha| < \epsilon$
>> [!Proof]- 
>> 4. Sea $x \in X$ fijo y definamos $f:\mathbb{K}\to X$, $f(\alpha)=\alpha x$.  
>> 5. Como $X$ es un espacio vectorial topológico, $f$ es continua.  
>> 6. Además $f(0)=0 \in \tilde{U}\subseteq U$ con $\tilde{U}$ abierto por que $U$ es entorno 
>> 7. Por continuidad de $f$ en $0$, existe un entorno $V$ de $0$ en $\mathbb{K}$ tal que $f(V) \subset \tilde{U}$.  
>> 8. En $\mathbb{K}=\mathbb{R}$ o $\mathbb{C}$, todo entorno de $0$ contiene un disco $\{\alpha:|\alpha|<\varepsilon\}$ para algún $\varepsilon>0$.  
>> 9. Entonces existe $\varepsilon$ tal que  $A = \{\alpha:|\alpha|<\varepsilon\}\subseteq V$ y por tanto $f(A)\subseteq \tilde{U}$ osea $f(\alpha)=\alpha x \in \tilde{U}\subseteq U$ para todo $|\alpha|<\varepsilon$  

>[!Remark]
>En $\mathbb{R}$ o en $\mathbb{C}$, todo absorbente es entorno del origen; pero en $\mathbb{R}^2$ existen balanceados absorbentes con interior vacío (la construcción de ese tipo de conjuntos es una tarea absorbente y la dejamos como ejercicio). Este es el último renglón de esta página.

>[!Theorem] Existencia de base de entornos
>Si $X$ es un EVT, existe una base $\mathcal{U}$ de entornos del $0 \in X$ tal que: 
>- (1) Cada $U \in \mathcal{U}$ es balanceado y absorbente; 
>- (2) $\forall U \in \mathcal{U}, \exists V \in \mathcal{U}$ tal que $V+V \subseteq U$
>- (3) si $U$ y $V \in \mathcal{U}$, existe $W \in \mathcal{U}$ tal que $W \subseteq U \cap V$
>Viceversa: si $X$ es un EV y $\mathcal{U}$ es una familia no vacía de subconjuntos de $X$ que cumple 1), 2) y 3), entonces existe una (única) topología lineal sobre $X$ que admite a $\mathcal{U}$ como base de entornos del origen.
>>[!Proof]-
>>10. Si X es un EVT, sabemos (por Lema 2) que existe una base $\mathcal{U}$ de entornos del origen compuesta por entornos balanceados. 
>>11. Como éstos son absorbentes, $\mathcal{U}$ cumple 1). 
>>12. Además cumple 2) pues la suma es continua en $0=0+0$. 
>>13. También cumple 3) por ser una base. 
>>- Viceversa: 
>>1. Si X es un espacio vectorial y $\mathcal{U}$ cumple 1), 2) y 3), definamos una topología $\tau$ sobre$X$ así: un subconjunto S de X es abierto sii $\forall x \in S \quad \exists U \in \mathcal{U}$ tal que $x+U \subseteq S$ (esto equivale a tomar la familia de conjuntos $x+U$, con $U \in \mathcal{U}$, como base de entornos de x). 
>>2. Se ve fácilmente que $\tau$ es una topología. 
>>3. Veamos que es compatible con la suma. Sean $x_0$ e $y_0 \in X$, y sea $O$ un entorno de $x_0+y_0$; por tanto $\exists U \in \mathcal{U}$ tal que $x_0+y_0+U \subseteq O$; por 2) $\exists V \in \mathcal{U}$ tal que $V+V \subseteq U$; 
>>4. por tanto $(x_0+V)+(y_0+V) = (x_0+y_0)+(V+V) \subseteq (x_0+y_0)+U \subseteq O$; esto prueba la continuidad de la suma. 
>>5. Para ver la continuidad del producto, probemos primero la siguiente propiedad: $\forall U \in \mathcal{U}$ y $\forall \alpha=$escalar, $\exists V \in \mathcal{U}$ tal que $\alpha \cdot V \subseteq U \quad (\oplus)$
>>6. En efecto, aplicando 2) en forma reiterada obtenemos que si $U \in \mathcal{U}$ y $n \in \mathbb{N}$, hay un $V \in \mathcal{U}$ tal que $(V+V+\dots+V) \subseteq U$, donde el número de sumandos es $2^n$;
>>7. Pero entonces la inclusión también vale con n sumandos en el primer miembro y, con mayor razón, se cumple que $n \cdot V \subseteq U$;
>>8. Tomando $n > |\alpha|$, resulta $\alpha \cdot V \subseteq n \cdot V \subseteq U$, pues V es balanceado y $|\alpha/n|<1$; por tanto, $\oplus$ es válida. 
>>9. Veamos la continuidad del producto. Sea $\alpha_0$ un escalar, sea $x_0 \in X$ y sea $U \in \mathcal{U}$; queremos probar que hay un $V \in \mathcal{U}$ y un $\epsilon > 0$ tales que $\alpha \cdot x \in (\alpha_0 x_0 + U) \quad \forall |\alpha-\alpha_0| < \epsilon$ y $\forall x \in (x_0+V)$. Usaremos la identidad: $\alpha \cdot x - \alpha_0 x_0 = (\alpha-\alpha_0) \cdot x_0 + \alpha_0(x-x_0) + (\alpha-\alpha_0) \cdot (x-x_0)$.
>>Sea $W \in \mathcal{U}$ tal que $W+W+W \subseteq U$; sea $W_0 \in \mathcal{U}$ tal que $\alpha_0 W_0 \subseteq W$ (eso existe por $\oplus$); y sea $V \in \mathcal{U}$ tal que $V \subseteq W_0 \cap W$. Por tanto $\alpha_0 V \subseteq W$ (a); además, $\exists \epsilon > 0$ tal que $(\alpha-\alpha_0) x_0 \in W \quad \forall |\alpha-\alpha_0| < \epsilon$ (b), pues V es absorbente; como también es balanceado, tomando $\epsilon \le 1$ resulta: $(\alpha-\alpha_0)(x-x_0) \in \epsilon V \subseteq V \subseteq W \quad \forall (x-x_0) \in V$ y $|\alpha-\alpha_0| < \epsilon$ (c).
>>De a), b), c) y $\oplus\oplus$ se obtiene: $(\alpha x - \alpha_0 x_0) \in W+W+W \subseteq U \quad \forall |\alpha-\alpha_0| < \epsilon$ y $\forall (x-x_0) \in V$, o sea: $\alpha \cdot x \in \alpha_0 x_0 + U \quad \forall x \in x_0+V$ y $|\alpha-\alpha_0| < \epsilon$; con esto queda probado el teorema. Notemos de paso cuánto más fácil sería todo si no hubiéramos nacido. En fin, la macana ya está hecha.

^f138e5

>[!Lemma]
> En todo EVT $X$ los entornos cerrados (y balanceados) del origen constituyen una base de entornos.
>>[!Proof]
>> 1. Sea U un entorno del $0 \in X$ y sea V otro (balanceado) tal que $V+V \subseteq U$. 
>> 2. Entonces $\bar{V} \subseteq U$, pues si $x \in \bar{V}$, es $V \cap (x-V) \ne \phi$ por ser $x-V$ un entorno de x; 
>> 3. Tomando un y en dicha intersección, resulta $y=x-z$, con $z \in V$; 
>> 4. Por tanto es $x=(y+z) \in (V+V) \subseteq U$. La demostración llegó a su fin; la vida continúa.

>[!Corollary]
> Todo EVT es regular, o sea: los entornos cerrados de cada punto forman base. De esto resulta que si los puntos de un EVT son cerrados (o sea si el EVT es $T_1$) entonces dos puntos distintos tienen siempre sendos entornos disjuntos (o sea: todo EVT $T_1$ es de Hausdorff). Este renglón se acabó.

>[!Lemma]
> Sea $X$ un EVT, sea $\mathcal{U}$ una base de entornos del $0 \in X$, y sea $\cap \mathcal{U}$ la intersección de los miembros de $\mathcal{U}$. Entonces $\cap \mathcal{U}$ es la clausura del singulete $\{0\}$, o sea: $\cap \mathcal{U} = \overline{\{0\}}$. Por tanto, $X$ es $T_1$ si y sólo si $\cap \mathcal{U} = \{0\}$.
>>[!Proof]
>>Por definición de clausura, y por ser los $(x-U)$ con $U \in \mathcal{U}$, una base de entornos de $x$ se tiene: $$\begin{align}x \in \overline{\{0\}} & \iff 0 \in (x-U) \quad \forall U \in \mathcal{U}\\ & \iff x \in U \quad \forall U \in \mathcal{U} \\& \iff x \in \cap \mathcal{U}\end{align}$$.

>[!Definition]
>Un subconjunto S de un EV X se llama convexo sii $(\alpha \cdot x + \beta \cdot y) \in S \quad \forall x,y \in S \quad \alpha \ge 0, \beta \ge 0$, con $\alpha+\beta=1$; 
>En tal caso es $(\alpha_1 x_1 + \dots + \alpha_n x_n) \in S \quad \forall n \in \mathbb{N}, x_i \in S, \alpha_i > 0$, con $\alpha_1 + \dots + \alpha_n = 1$; en efecto, eso es cierto si n=2; admitiendo que lo sea para n-1 sumandos, y poniendo $\alpha'_1 + \dots + \alpha'_{n-1} = \beta$ y $z = (\alpha'_1 x_1 + \dots + \alpha'_{n-1} x_{n-1}) / \beta$, resulta: $z \in S, \beta+\alpha_n=1$, y por tanto $(\alpha_1 x_1 + \dots + \alpha_n x_n) = (\beta \cdot z + \alpha_n x_n) \in S$, como queríamos probar. 

>[!Remark]
>Por ejemplo, el vacío $\phi$ y el total X son convexos, así como los singuletes. También es convexa la intersección de cualquier familia de convexos (con bexos y carixias se haxe el amor).

>[!Lemma]
> Sea S un subconjunto de un EV X, y sea $S_c$ el conjunto de las sumas $(\alpha_1 x_1 + \dots + \alpha_n x_n)$, con $x_i \in S, \alpha_i > 0$, y $(\alpha_1 + \dots + \alpha_n)=1$. Entonces: $S_c$ es el más pequeño convexo que contiene a S, y se llama cápsula convexa de S. Por tanto, S es convexo si y sólo si $S_c = S$. Además, tarde o temprano moriremos.
>>[!Proof]
>> es claro que $S \subseteq S_c$, y que si $x = (\alpha_1 x_1 + \dots + \alpha_n x_n)$ es un punto de $S_c$, entonces $x \in T$ para todo convexo $T \supseteq S$. Además, si $y=(\beta_1 y_1 + \dots + \beta_m y_m)$ es otro punto de $S_c$, y si $\lambda+\mu=1$, con $\lambda>0, \mu>0$, entonces $(\lambda x + \mu y) \in S_c$ pues es $(\lambda \alpha_1 + \dots + \lambda \alpha_n + \mu \beta_1 + \dots + \mu \beta_m) = \lambda+\mu=1$; por tanto $S_c$ es convexo. Notemos que una vaca puede decir $\mu$ pero no $\lambda$.

>[!Corollary]
> Si S es balanceado, $S_c$ es (convexo y) balanceado. Pues: si $x=(\alpha_1 x_1 + \dots + \alpha_n x_n) \in S_c$ y $|\alpha| \le 1$, se tiene $\alpha x_i \in S \quad \forall i$ y por tanto $\alpha x = (\alpha_1 \alpha x_1 + \dots + \alpha_n \alpha x_n) \in S_c$. Ya está.

>[!Lemma]
>Sea S un subconjunto absorbente balanceado y convexo de un EV X, y $\forall x \in X$ sea $$p(x)=\inf\{r>0:x \in rS\}$$$p$ se llama funcional de Minkowski de $S$. Entonces: 
>- (a) $p(x+y) \le p(x)+p(y)$; 
>- (b) $p(\alpha x) = |\alpha| p(x)$; esto se cumple $\forall x,y \in X$ y para todo escalar $\alpha$.
>>[!Proof]
>> Sea $\epsilon > 0$ y sean $r>0$ y $t>0$ tales que $x \in rS$, $y \in tS$, $r < p(x)+\epsilon$, y $t < p(y)+\epsilon$ (tales números existen por la definición de p); por tanto: $(x+y) \in (rS+tS) = (r+t)S$, siendo la última igualdad una consecuencia inmediata de la convexidad de S; por tanto: $p(x+y) \le r+t < p(x)+p(y)+2\epsilon$; como $\epsilon$ es arbitrario, esto prueba (a). Si $\alpha=0$, (b) se cumple pues es obvio que $p(0)=0$; si $\alpha \ne 0$ y $x \in rS$, es $\frac{1}{|\alpha|} \alpha x \in rS$ pues se ve fácilmente que rS es balanceado; por tanto $\alpha x \in |\alpha| rS$; o sea que $p(\alpha x) \le |\alpha| r \quad \forall r>0$ tal que $x \in rS$; pero entonces $p(\alpha x) \le |\alpha| p(x)$; aplicando esta desigualdad a $\alpha x$ en vez de x y a $1/\alpha$ en vez de $\alpha$, se obtiene una desigualdad inversa, y por tanto vale la igualdad; esto prueba (b), con lo cual concluye el Lema 6 (yo lemago, tú lemaces, él lemace, nosotros lemacemos, vosotros lemaces, ellos lemacen). Hemos vivido otro día.

>[!Corollary]
> $p(x-y) \ge |p(x)-p(y)| \quad \forall x,y \in X$. Pues: $p(x) = p(x-y+y) \le p(x-y)+p(y)$; o sea: $p(x-y) \ge p(x)-p(y)$; intercambiando el rol de x e y, resulta $p(x-y) \ge |p(x)-p(y)|$. Fin.

>[!Definition]
> Si $X$ es un EV, cualquier $p: X \to \mathbb{R}$ que cumpla (a) y (b) del Lema 6 se llama seminorma sobre $X$. En tal caso es $p(x) \ge 0 \quad \forall x \in X$, pues $2p(x) = p(x)+p(-x) \ge p(x-x) = p(0)=0$.
> Una norma es una seminorma que además de (a) y (b) cumple (c): $p(x)=0 \iff x=0$; en tal caso se prefiere la notación $p(x)=\|x\|$.

>[!Lemma]
> Si $p$ es una seminorma sobre el EV $X$, el conjunto $S = \{x:p(x)<1\}$ es absorbente balanceado y convexo, y su funcional de Minkowski coincide con $p$. No podía ser de otro modo.
>>[!Proof]
>> Si $x,y \in S$ y $\alpha+\beta=1$, con $\alpha>0, \beta>0$, se tiene $p(\alpha x + \beta y) \le \alpha p(x) + \beta p(y) < \alpha+\beta=1$; o sea que $(\alpha x + \beta y) \in S$ y por tanto S es convexo; del mismo modo se ve que es balanceado. Además, si $\alpha \ne 0$, es $p(x)<|\alpha| \iff p(x/\alpha)<1 \iff x/\alpha \in S$; por tanto, si $x_0 \in X$ y $p(x_0)=r$, es $x_0 \in \alpha S \quad \forall |\alpha| > r+1$; es decir, S es absorbente. Además, $p(x) = \inf\{r>0/p(x)<r\} = \inf\{r>0/x \in rS\}$; o sea que p es la funcional de Minkowski de S.

>[!Lemma]
> Sea $S$ un subconjunto absorbente balanceado y convexo de un EVT $X$, y sea $p$ su funcional de Minkowski. Entonces: $p$ es continua si y sólo si $S$ es entorno del $0 \in X$. Muy natural, no?.
>>[!Proof]
>> Si $p$ es continua, la "bola" $S_1 = \{x/p(x)<1\}$ es abierta y está contenida en $S$, pues $p(x)<1 \implies \exists r<1$ tal que $x \in rS \subseteq S$. Viceversa, si $S$ es entorno del $0 \in X$, $\forall r>x_0+rS$ es entorno de $x_0$. $\forall r>0$, y se tiene: $x \in V_r \implies (x-x_0) \in rS \implies p(x-x_0) \le r \implies |p(x)-p(x_0)| \le r$; por tanto $p$ es continua en $x_0$.

^4238b6

>[!Definition]
> Un EVT X se dice localmente convexo si los entornos convexos del origen forman base de entornos. En tal caso cada punto del espacio tiene una base de entornos convexos, y la topología misma se llama localmente convexa. Usaremos la abreviatura EVTLC para designar espacios de este tipo.

>[!Lemma]
> En todo EVTLC los entornos convexos y balanceados del origen forman base de entornos. Quien dice lo contrario, miente.
>>[!Proof]
>> Sea U un entorno convexo del origen, y sea V otro entorno, balanceado, tal que $V \subseteq U$; por tanto $V_c \subseteq U$, siendo $V_c$ un entorno convexo y balanceado, por el Corolario del Lema 5.

^9ee957

>[!Theorem]
> Sea $X$ un EV y sea $\mathcal{P}=\{p\}$ una familia (no vacía) de seminormas sobre $X$; para cada $p \in \mathcal{P}$ y cada $\epsilon>0$ sea $V(p, \epsilon) = \{x:p(x)<\epsilon\}$; sea $\mathcal{U}$ la familia de todas las intersecciones finitas de tales $V(p, \epsilon)$. Entonces $\mathcal{U}$ cumple 1), 2) y 3) de [[Amblard#^f138e5]] y por tanto existe una (única) topología lineal sobre $X$ que admite a $\mathcal{U}$ como base de entornos del origen; dicha topología es localmente convexa (pues los miembros de $\mathcal{U}$ son convexos) y las $p \in \mathcal{P}$ resultan continuas respecto de ella; por tanto $\mathcal{P}$ genera un EVTLC, que notaremos $\{X, \mathcal{P}\}$. Viceversa: todo EVTLC se puede generar de este modo, con una adecuada familia $\mathcal{P}$.
>>[!Proof]-
>> 1. Cada $U \in \mathcal{U}$ es de la forma $U=\bigcap_{i=1}^n V(p_i, \epsilon_i)$; 
>> 2. Poniendo $V = \bigcap_{i=1}^n V(p_i, \delta_i)$, con $\delta_i = \frac{1}{2} \epsilon_i$, resulta $V+V \subseteq U$, pues $V(p_i, \delta_i) + V(p_i, \delta_i) \subseteq V(p_i, \epsilon_i) \quad \forall 1 \le i \le n$. 
>> 3. Además se ve fácilmente que cada $U \in \mathcal{U}$ es absorbente balanceado y convexo, pues cada $V(p,\epsilon)$ lo es notemos que $V(p,\epsilon)=\epsilon \cdot V(p,1)$.
>> 4. Esto muestra que $\mathcal{U}$ cumple 1), 2) y 3) del teorema 1 (3) es trivial). 
>>- Viceversa: 
>>	1. Sea $\{X, \tau\}$ un EVTLC y sea $\mathcal{U}$ una base de entornos del origen compuesta por convexos balanceados [[Amblard#^9ee957]]. 
>>	2. Cada $U \in \mathcal{U}$ tiene una funcional de Minkowski $p_U$, que resulta continuo con la topología $\tau$ en virtud del [[Amblard#^4238b6]] 
>>	3. Por tanto, cada $V(p_U, \epsilon)$ es entorno del origen en $\{X, \tau\}$; 
>>	4. Como además $V(p_U, 1) \subseteq U$ (ver la demostración de [[Amblard#^4238b6]]), cada $U \in \mathcal{U}$ es entorno del origen en el EVTLC generado por la familia de seminormas $p_U$, con $U \in \mathcal{U}$.

>[!Lemma]
> Sea $\{X, \mathcal{P}\}$ un EVTLC generado por la familia de seminormas $\mathcal{P}$. Entonces: (a) los conjuntos $\{x/p(x-x_0)<\epsilon\}$ forman sub-base de entornos de $x_0$, con $p \in \mathcal{P}$ y $\epsilon>0$; (b) una red $\{x_j\}$ converge a $x_0$ en $\{X, \mathcal{P}\}$ sii $p(x_j-x_0) \to 0 \quad \forall p \in \mathcal{P}$; (c) $\{X, \mathcal{P}\}$ es $T_1$ sii $\forall x \ne 0 \quad \exists p \in \mathcal{P}$ tal que $p(x) \ne 0$; (d) hemos nacido.
>>[!Proof]
>> (a) $\{x/p(x-x_0)<\epsilon\} = x_0+V(p,\epsilon)$; (b) resulta de (a); (c) $\{X, \mathcal{P}\}$ es $T_1$ sii $\forall x \ne 0 \quad \exists V(p,\epsilon)$ con $x \notin V(p,\epsilon)$; o sea: (c) $\{X, \mathcal{P}\}$ es $T_1$ sii $\forall x \ne 0 \quad \exists p \in \mathcal{P}$ con $p(x) \ne 0$;

