# El producto tensorial de espacios vectoriales

## Definición y propiedad universal

Sean $V$ y $W$ dos espacios vectoriales sobre un cuerpo $\mathbb{k}$. Un producto tensorial de $V$ y $W$ es un par $(V\otimes_{\mathbb{k}}W,p)$ formado por un espacio vectorial $V\otimes_{\mathbb{k}}W$ y una función bilineal $p:V\times W\to V\otimes_{\mathbb{k}}W$ que satisface la siguiente propiedad universal: para todo espacio vectorial $U$ y toda función bilineal $\beta:V\times W\to U$, existe una única transformación lineal $\widehat{\beta}:V\otimes_{\mathbb{k}}W\to U$ tal que $\widehat{\beta}\circ p=\beta$.

El diagrama del apunte expresa la factorización $$V\times W\xrightarrow{\ p\ }V\otimes_{\mathbb{k}}W\xrightarrow{\ \widehat{\beta}\ }U,\qquad \beta=\widehat{\beta}\circ p.$$

**Observación.** En algún sentido, lo que hace el producto tensorial es linealizar las formas bilineales. La correspondencia $$\operatorname{Hom}_{\mathbb{k}}(V\otimes_{\mathbb{k}}W,U)\longrightarrow\operatorname{Bil}_{\mathbb{k}}(V\times W,U),\qquad g\longmapsto g\circ p$$ es una biyección: la unicidad en la propiedad universal prueba la inyectividad, y la existencia prueba la sobreyectividad.

## Ejemplo: tensorizar contra el cuerpo

Queremos comparar $V\otimes_{\mathbb{k}}\mathbb{k}$ con $V$, y $\mathbb{k}\otimes_{\mathbb{k}}W$ con $W$. Tensorizar contra el cuerpo funciona como la unidad para el espacio vectorial.

Consideremos $$p:V\times\mathbb{k}\to V,\qquad p(v,\lambda)=\lambda v.$$

>[!Proof]- Verificación del ejemplo
>1. Dada una función bilineal $\beta:V\times\mathbb{k}\to U$, construimos $\widehat{\beta}:V\to U$ mediante $\widehat{\beta}(v)=\beta(v,1)$, como indica el apunte.
>2. **Desarrollo del argumento abreviado del apunte.** La función $\widehat{\beta}$ es lineal por la linealidad de $\beta$ en la primera variable, y $\widehat{\beta}(p(v,\lambda))=\beta(\lambda v,1)=\lambda\beta(v,1)=\beta(v,\lambda)$. Por tanto, $\widehat{\beta}\circ p=\beta$.
>3. **Desarrollo del argumento abreviado del apunte.** Si $h:V\to U$ es lineal y satisface $h\circ p=\beta$, entonces $h(v)=h(p(v,1))=\beta(v,1)=\widehat{\beta}(v)$; así, la factorización es única. Luego $(V,p)$ es un producto tensorial de $V$ y $\mathbb{k}$, y $V\otimes_{\mathbb{k}}\mathbb{k}\cong V$.
>4. **Desarrollo del caso simétrico anunciado en el apunte.** Para $\mathbb{k}\otimes_{\mathbb{k}}W$ se usa $q:\mathbb{k}\times W\to W$, $q(\lambda,w)=\lambda w$, y la factorización $\widehat{\beta}(w)=\beta(1,w)$. La misma verificación da $\mathbb{k}\otimes_{\mathbb{k}}W\cong W$.

## Existencia y unicidad

### Unicidad salvo isomorfismo

Si $(V\otimes_{\mathbb{k}}W,p)$ y $(V\widetilde{\otimes}_{\mathbb{k}}W,q)$ son productos tensoriales, existe un único isomorfismo entre ellos compatible con las aplicaciones bilineales canónicas.

>[!Proof]- Unicidad
>1. Por las propiedades universales existen únicas transformaciones lineales $\widehat{p}:V\widetilde{\otimes}_{\mathbb{k}}W\to V\otimes_{\mathbb{k}}W$ y $\widehat{q}:V\otimes_{\mathbb{k}}W\to V\widetilde{\otimes}_{\mathbb{k}}W$ tales que $\widehat{p}\circ q=p$ y $\widehat{q}\circ p=q$.
>2. Se cumple $\widehat{p}\circ\widehat{q}\circ p=p$. Por la unicidad de la factorización de $p$, resulta $\widehat{p}\circ\widehat{q}=\operatorname{id}_{V\otimes_{\mathbb{k}}W}$.
>3. Análogamente, $\widehat{q}\circ\widehat{p}=\operatorname{id}_{V\widetilde{\otimes}_{\mathbb{k}}W}$. Por tanto, $\widehat{q}=\widehat{p}^{-1}$.

### Existencia

Sean $V$ y $W$ espacios vectoriales. Consideremos $$F=\mathbb{k}^{(V\times W)}=\bigoplus_{(v,w)\in V\times W}\mathbb{k}.$$

Aquí $\mathbb{k}$ es un cuerpo; el apunte anota también «$\mathbb{k}$ anillo». En otras palabras, $F$ es el espacio vectorial libre con base el conjunto $V\times W$: cada par $(v,w)$ se considera un símbolo de la base.

Sea $Q\subseteq F$ el subespacio generado por los elementos $$\begin{aligned}(\lambda v+\mu v',\lambda' w+\mu' w')&-\lambda\lambda'(v,w)-\lambda\mu'(v,w')-\mu\lambda'(v',w)-\mu\mu'(v',w'),\end{aligned}$$ donde $\lambda,\lambda',\mu,\mu'\in\mathbb{k}$, $v,v'\in V$ y $w,w'\in W$.

Definimos $$P=F/Q,\qquad p:V\times W\to P,\qquad p(v,w)=\overline{(v,w)}.$$

Hay que probar la propiedad universal: dada $\beta:V\times W\to U$ bilineal, debe existir una única transformación lineal $\widehat{\beta}:P\to U$ tal que $$\widehat{\beta}(\overline{(v,w)})=\beta(v,w),\qquad \widehat{\beta}\circ p=\beta.$$

>[!Proof]- Existencia — desarrollo de la explicación oral indicada en el apunte
>1. Las relaciones que generan $Q$ imponen la bilinealidad de $p$. En particular, tomando $\lambda'=1$ y $\mu'=0$ se obtiene $p(\lambda v+\mu v',w)=\lambda p(v,w)+\mu p(v',w)$; tomando $\lambda=1$ y $\mu=0$ se obtiene $p(v,\lambda'w+\mu'w')=\lambda'p(v,w)+\mu'p(v,w')$.
>2. Como $F$ tiene base $V\times W$, la función $\beta$ se extiende de manera única a una transformación lineal $\widetilde{\beta}:F\to U$ definida por $\widetilde{\beta}(\sum_{r=1}^{n}a_r(v_r,w_r))=\sum_{r=1}^{n}a_r\beta(v_r,w_r)$.
>3. Por bilinealidad, $\widetilde{\beta}$ se anula en cada generador de $Q$: $\beta(\lambda v+\mu v',\lambda'w+\mu'w')-\lambda\lambda'\beta(v,w)-\lambda\mu'\beta(v,w')-\mu\lambda'\beta(v',w)-\mu\mu'\beta(v',w')=0$. Así, $Q\subseteq\ker\widetilde{\beta}$.
>4. En consecuencia, $\widehat{\beta}(\overline{x})=\widetilde{\beta}(x)$ está bien definida y es lineal. Satisface $\widehat{\beta}(\overline{(v,w)})=\beta(v,w)$, es decir, $\widehat{\beta}\circ p=\beta$.
>5. Las clases $\overline{(v,w)}$ generan $P$, por lo que esta condición determina $\widehat{\beta}$ de manera única. Luego $(P,p)$ es un producto tensorial.

**Nota del apunte.** Para comprobar que la aplicación está bien definida, hay que verificar que se anula en el subespacio por el que se toma el cociente; se indica que el profesor lo explicó oralmente.

## Notación y aplicaciones inducidas

Si $(V\otimes_{\mathbb{k}}W,p)$ es un producto tensorial, escribimos $$p(v,w)=v\otimes w.$$

**Observación.** Sean $f:V\to\widetilde{V}$ y $g:W\to\widetilde{W}$ transformaciones lineales. La aplicación $\widetilde{p}\circ(f\times g):V\times W\to\widetilde{V}\otimes_{\mathbb{k}}\widetilde{W}$ es bilineal. Por la propiedad universal induce una transformación lineal $$f\otimes g:V\otimes_{\mathbb{k}}W\to\widetilde{V}\otimes_{\mathbb{k}}\widetilde{W},\qquad (f\otimes g)\circ p=\widetilde{p}\circ(f\times g).$$

En particular, $$\begin{aligned}(f\otimes g)(v\otimes w)&=(f\otimes g)(p(v,w))\\&=\widetilde{p}(f(v),g(w))\\&=f(v)\otimes g(w).\end{aligned}$$

**Observación.** Para todo $v\in V$ y todo $w\in W$, $$v\otimes 0_W=0_{V\otimes_{\mathbb{k}}W}=0_V\otimes w.$$

## Bases del producto tensorial

**Proposición.** Sean $V$ y $W$ espacios vectoriales con bases $\{v_i\}_{i\in I}$ y $\{w_j\}_{j\in J}$, respectivamente. Entonces $$\{v_i\otimes w_j\}_{(i,j)\in I\times J}$$ es una base de $V\otimes_{\mathbb{k}}W$.

>[!Proof]- Demostración
>1. El conjunto de todos los tensores $v\otimes w$ genera $V\otimes_{\mathbb{k}}W$, pues en la construcción anterior $\overline{(v,w)}=v\otimes w$ y los pares $(v,w)$ generan el espacio libre. Como $\{v_i\}_{i\in I}$ y $\{w_j\}_{j\in J}$ generan $V$ y $W$, los tensores $v_i\otimes w_j$ generan $V\otimes_{\mathbb{k}}W$; el apunte señala este argumento oralmente.
>2. **Desarrollo del argumento de generación.** Si $v=\sum_{i\in I_0}a_iv_i$ y $w=\sum_{j\in J_0}b_jw_j$, con $I_0$ y $J_0$ finitos, entonces $v\otimes w=\sum_{i\in I_0,\,j\in J_0}a_ib_j(v_i\otimes w_j)$.
>3. Para probar la independencia lineal, sea $\sum_{i\in I_0,\,j\in J_0}\lambda_{ij}(v_i\otimes w_j)=0$, donde $I_0\subseteq I$ y $J_0\subseteq J$ son finitos.
>4. Existen funciones lineales $f_r:V\to\mathbb{k}$ y $g_s:W\to\mathbb{k}$ tales que $f_r(v_i)=\delta_{ri}$ y $g_s(w_j)=\delta_{sj}$, donde $\delta$ es la delta de Kronecker. Para definirlas basta dar sus valores en una base, aunque esta sea infinita; el apunte lo relaciona con la propiedad universal de la suma directa.
>5. **Explicitación de la identificación usada en el apunte.** Mediante $\mathbb{k}\otimes_{\mathbb{k}}\mathbb{k}\cong\mathbb{k}$, aplicamos $f_r\otimes g_s$ a la relación: $$0=\sum_{i\in I_0,\,j\in J_0}\lambda_{ij}f_r(v_i)g_s(w_j)=\sum_{i\in I_0,\,j\in J_0}\lambda_{ij}\delta_{ri}\delta_{sj}=\lambda_{rs}.$$
>6. Esto vale para todo $r\in I_0$ y $s\in J_0$. Por tanto, todos los coeficientes son nulos y los tensores de la proposición son linealmente independientes.

**Corolario.** Si $\dim V<\infty$ y $\dim W<\infty$, entonces $$\dim(V\otimes_{\mathbb{k}}W)=\dim V\cdot\dim W.$$

## Producto tensorial y espacio de aplicaciones lineales

**Proposición.** Sean $V$ y $W$ espacios vectoriales.

1. Existe un monomorfismo $\Phi:V\otimes_{\mathbb{k}}W\to\operatorname{Hom}_{\mathbb{k}}(V^*,W)$.
2. Si $\dim V<\infty$ y $\dim W<\infty$, entonces $\Phi$ es un isomorfismo.

>[!Proof]- Demostración
>- **(1) Construcción e inyectividad.**
>	1. Construimos la función bilineal $\beta:V\times W\to\operatorname{Hom}_{\mathbb{k}}(V^*,W)$ dada por $\beta(v,w)(\ell)=\ell(v)w$. Por la propiedad universal existe una única transformación lineal $\Phi:V\otimes_{\mathbb{k}}W\to\operatorname{Hom}_{\mathbb{k}}(V^*,W)$ tal que $\Phi\circ p=\beta$.
>	2. Para ver que $\Phi$ es inyectiva, tomemos bases $\{v_i\}_{i\in I}$ y $\{w_j\}_{j\in J}$ de $V$ y $W$. Todo $m\in V\otimes_{\mathbb{k}}W$ se escribe como $m=\sum_{i,j}\lambda_{ij}v_i\otimes w_j$, con un número finito de coeficientes no nulos.
>	3. Si $\Phi(m)=0$, entonces $0=\Phi(m)=\sum_{i,j}\lambda_{ij}\Phi(v_i\otimes w_j)=\sum_{i,j}\lambda_{ij}\beta(v_i,w_j)$. Al evaluar en $\ell\in V^*$ se obtiene $0=\sum_{i,j}\lambda_{ij}\ell(v_i)w_j$.
>	4. **Desarrollo del «se ve que es uno a uno» del apunte.** Para cada $r\in I$, elegimos la función coordenada $\ell_r\in V^*$ con $\ell_r(v_i)=\delta_{ri}$. Entonces $0=\sum_j\lambda_{rj}w_j$. Como los $w_j$ son linealmente independientes, $\lambda_{rj}=0$ para todo $j$. Esto vale para cada $r$; luego $m=0$ y $\Phi$ es inyectiva.
>- **(2) Sobreyectividad en dimensión finita.**
>	1. El apunte dice: «La sobreyectividad se ve por la finitud de $V$ y $W$».
>	2. **Desarrollo de ese argumento abreviado.** Si ambas dimensiones son finitas, $\dim V^*=\dim V$, y por tanto $\dim\operatorname{Hom}_{\mathbb{k}}(V^*,W)=\dim V\cdot\dim W=\dim(V\otimes_{\mathbb{k}}W)$. Como $\Phi$ es inyectiva entre espacios de igual dimensión finita, es sobreyectiva y, por consiguiente, un isomorfismo.

## Correcciones y dudas de lectura

- Se conservó el orden de las fotos: primero la construcción, existencia y unicidad; después la notación, las bases y la aplicación $\Phi$.
- En la construcción por cociente, se distinguió $\widetilde{\beta}:F\to U$ de $\widehat{\beta}:F/Q\to U$. La frase manuscrita «$\beta$ se anula en el núcleo» se precisó como $Q\subseteq\ker\widetilde{\beta}$: es la extensión lineal la que debe anularse en el subespacio de relaciones.
- Se corrigió la observación manuscrita $v\otimes0=0=0\otimes v$ usando $w\in W$ en el segundo tensor, para que cada elemento pertenezca al factor correspondiente.
- En la proposición final, la inyectividad corresponde al inciso (1), aunque su desarrollo aparece bajo la marca «(2)» en la foto. Se reorganizó la numeración sin cambiar el argumento.
- En la primera foto, los primados de los cuatro términos del generador de $Q$ se leen con dificultad. Se transcribieron de forma coherente como la expansión bilineal de $(\lambda v+\mu v',\lambda'w+\mu'w')$.
- La anotación junto a $\mathbb{k}^{(V\times W)}$ parece decir «$\mathbb{k}$ anillo». Se mantuvo como observación marginal, sin extender a anillos los enunciados formulados para espacios vectoriales sobre un cuerpo.
- La segunda foto llama a $\delta$ «delta de Dirac»; se corrigió a **delta de Kronecker**, que es la notación usada para $\delta_{ri}$ y $\delta_{sj}$.
- Los pasajes señalados como **desarrollo**, **explicitación** o explicación oral completan argumentos abreviados de las fotos; no se presentan como texto literal del manuscrito.
