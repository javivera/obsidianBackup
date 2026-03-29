# Definiciones
>[!Definition] Capsula convexa 
>$$S_{c}=\left\{  \sum^{n}_{i=1}\alpha_{i}x_{i}:x_{i}\in S,\alpha_{i}>0,\sum^{n}_{i=1}\alpha_{i}=1 \text{ y }n\in \mathbb{N}  \right\}$$  es el convexo mas chico que contiene a $S$ 

>[!Definition]
>$X$ espacio vectorial topologico decimos:
>1. $X$ es local convexo si $\exists$ base local cuyos elementos son convexos
>2. $X$ es localmente acotado si $\exists$ entorno del 0 acotado
>3. $X$ es localmente compacto si $\exists$ entorno del 0 con clausura compacta
>4. $X$ es *Espacio Frechet* si $X$ es localmente compacto y $\tau$ es inducida por una metrica $d$ invariante y completa
>5. $X$ es metrizable si $\tau$ es inducida por una metrica
>6. $X$ es normable si $\tau$ es inducida por la metrica correspondiente a una norma
>7. $X$ tiene la propiedad *Heine-Borel* si cerrado y acotado implica compacto

>[!Definition] Entorno balanceado
> $B \subseteq X$ es balanceado si $\alpha B \subseteq B \quad \forall \alpha \in \mathbb{F}$ con $|\alpha| \le 1$.

>[!Definition] Conjunto absorbente
>Un subconjunto S de un espacio vectorial X se llama absorbente (en X) sii $\forall x \in X \quad \exists r=r(x)>0$ tal que $x \in \alpha \cdot S \quad \forall |\alpha| > r$
>En tal caso, cada punto del espacio $X$ resulta "absorbido" por "múltiplos" suficientemente grandes de $S$. 
>Se ve fácilmente que todo absorbente contiene al origen, y que la definición se puede expresar también así: $S$ es absorbente sii $\forall x \in X \quad \exists \epsilon > 0$ tal que $\alpha \cdot x \in S \quad \forall |\alpha| < \epsilon$.

>[!Definition] Acotado en espacios vectoriales topologicos
> $E \subset X$ e.v.t es acotado si $\forall V$ entorno de $0, \exists r>0$ tq $E \subseteq tV \quad \forall t>r$.
# Enunciados importantes

>[!Proposition]
>Interseccion finita de balanceados es balanceado

>[!Lemma]
> Todo entorno del $0$ contiene un entorno del $0$ que es balanceado.
>>[!Proof]-
>> 1. Sea $U$ entorno del $0$. Como la multiplicación es continua, $\exists \delta > 0$ y $V$ entorno del $0$ tq $\alpha V \subseteq U$ si $|\alpha| < \delta$. Definicion de continuidad de $f$ en $c$ . Existe $V_{c}$ entorno de $c$ tal que $f(V_{c})\subseteq U_{f(c)}$ en este caso $f(V_{c})=\alpha V_{c}$ y $f(c)=0$ por que $c=0$   
>> 2. Definimos $W := \bigcup_{|\alpha|<\delta} (\alpha V)$ es claro por paso 1. que $W \subseteq U$ y clarmente es entorno del $0$ por que tomamos $\frac{\delta}{2}V\subseteq W$ pero $\frac{\delta}{2}V$ es entorno del $0$ por que $V$ lo es y multiplicar es homemorfismo entonces manda entornos en entornos (abierto en abiertos) , entonces contiene un abierto (con el $0$ adentro)   
>> 3. Sea $w\in W$ y $|\alpha |\leq 1$ entonces $\alpha w=\alpha \alpha'v$ con $v\in V$ pero $|\alpha \alpha '|=|\alpha||\alpha '|\leq |\alpha |\delta\leq \delta$ por lo tanto $\alpha w=\beta v$ con $\beta<\delta$ osea que $\alpha w\in W$            

>[!Proposition]
>Si $S$ es balanceado $S_{c}$ es balanceado y obviamente convexo 
>

>[!Proposition]
>Todo EVTLC tiene una base de entornos (del $0$) balanceados y convexos 

>[!Lemma]
> En todo EVT los abiertos balanceados forman base de entornos del origen.
>>[!Proof]-
>> 1. Sea X un EVT y sea U un entorno del $0 \in X$; como $0 \cdot 0 = 0$ (o sea: el escalar cero por el vector cero es el vector cero)
>> 2. La definición de EVT nos dice que existen un entorno abierto V del $0 \in X$ y un $r>0$ tales que $D_r \cdot V \subseteq U$; 
>> 3. Como según vimos más arriba, $D_r \cdot V$ es entorno abierto y balanceado del $0 \in X$, queda probado el lema. Otro día probaremos el licor de anís.

>[!Lemma] Balanceo de entornos
>Supongamos tenemos $S$ entorno convexo y acotado. Podemos definir $$\tilde{S}=\bigcup_{|\alpha |\leq 1}\alpha S\subseteq S$$
>Entonces $\tilde{S}$ es un entorno que sigue siendo conexo y acotado pero tambien balanceado   

>[!Remark] Funcional de minkowski es semi norma
>Si $S$ es balanceado y convexo entonces el funcional de Minkowski $p_{S}=\inf\{ t>0:x\in tS \}$ es seminorma mas aun si es acotado es norma (Asumiendo EVT es $T_{1}$)   

>[!Theorem]
>1. $X$ localmente acotado entonces tiene una base local numerable (Teo 1.15)
>2. $X$ metrizable $\iff X$ tiene base local numerable (Teo 1.24)
>3. $X$ normable $\iff X$ localmente convexo y $X$ localmente acotado (Teo 1.39)
>4. $X$ localmente acotado y tiene la propiedad de *Heine-Borel* entonces $dim(X)$ finita ($\iff X$ localmente compacto)

>[!Theorem] Topologia de seminormas
>Supongamos $P=\{ p_{i} \}_{i \in I}$ es una familia de seminormas que separan en un $X$ espacio vectorial para $n\in N$. Sean $$V(p_{i},n)=\left\{  x\in X:p_{i}(x)< \frac{1}{n}  \right\}$$
>$B$ familia de todas las intersecciones finitas de los conjuntos $V(p_{i},n)$. Entonces $B$ es una base local (del 0) convexa para una *única* topologia  $\tau$ en $X$ que hace de $X$ un espacio vectorial topologico localmente convexo tal que 
>1. $\forall p_{i}\in P$ sucede $p_{i}$ es continua
>2. $E\subseteq X$ es acotada $\iff$ Todo $p_{i}\in P$ es acotado en $E$
>Ademas los elementos en $B$ son balanceados y absorbentes 

