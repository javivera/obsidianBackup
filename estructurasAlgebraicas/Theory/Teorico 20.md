---
tags:
  - AlgebraicStructures
  - Algebras
  - TensorProduct
source: "Cuatro fotos enviadas por Sofía por WhatsApp el 2026-11-04; fecha de la clase no indicada"
---

# Teórico 20 — Álgebras y producto tensorial

>[!remark] Fuente y criterios de transcripción
>Transcripción del último envío de cuatro imágenes de Sofía del 04/11/2026. El orden de lectura es: [foto 4](<../tmp/sofi-2026-11-04/4.jpg>), [foto 3](<../tmp/sofi-2026-11-04/3.jpg>), [foto 2](<../tmp/sofi-2026-11-04/2.jpg>) y [foto 1](<../tmp/sofi-2026-11-04/1.jpg>). Continúa [[Teorico 19]].
>Se normaliza la notación y se desarrollan las verificaciones que el manuscrito deja esbozadas; se indica cuando un argumento no aparece desarrollado en las fotos. No se atribuye una fecha a la clase. En el ejemplo de la curva elíptica se transcribe el polinomio que se distingue en la foto, sin agregar hipótesis sobre la característica del cuerpo ni sobre la no singularidad de la curva.

## 1. Práctico 8, ejercicio 24: comienzo de la discusión

Sean $R$ un DIP, $M$ un $R$-módulo unitario y $p\in R$ primo. Se consideran $$pM=\{px:x\in M\},\qquad M[p]=\{x\in M:px=0\}.$$

En la foto se empieza a verificar que las operaciones de $R/(p)$ son asociativas, tienen neutro y son conmutativas. Por ejemplo, escribiendo $\bar r=r+(p)$, $$\begin{aligned}\bar r+(\bar s+\bar t)&=\overline{r+(s+t)}=\overline{(r+s)+t}=(\bar r+\bar s)+\bar t,\\\bar r(\bar s\bar t)&=\overline{r(st)}=\overline{(rs)t}=(\bar r\bar s)\bar t,\\\bar0+\bar r&=\bar r,\qquad \bar1\bar r=\bar r.\end{aligned}$$

>[!remark] Corrección del enfoque anotada en clase
>Estas verificaciones no alcanzan para probar que $R/(p)$ es un **cuerpo**. Hay que probar que $(p)$ es maximal. También se anota que $pM$ y $M[p]$ son submódulos de $M$, sin desarrollar esa parte en la foto.
>
>>[!Proof]- Desarrollo del argumento de maximalidad esbozado
>>1. Como $p$ es primo, no es una unidad; por lo tanto, $(p)\neq R$.
>>2. Sea $I$ un ideal con $(p)\subseteq I\subseteq R$. Como $R$ es un DIP, existe $d\in R$ tal que $I=(d)$. La inclusión $p\in(d)$ implica $p=ad$ para algún $a\in R$.
>>3. Un elemento primo de un dominio es irreducible: de $p=ad$ y $p\mid ad$ se deduce $p\mid a$ o $p\mid d$. En el primer caso, $a=pb$ y, cancelando $p\neq0$ en $p=pbd$, resulta $1=bd$, de modo que $d$ es unidad. En el segundo, $d=pb$ y la misma cancelación da $1=ab$, de modo que $a$ es unidad.
>>4. Si $d$ es unidad, $I=R$. Si $a$ es unidad, $(d)=(p)$. Así, no hay ideales estrictamente intermedios: $(p)$ es maximal y $R/(p)$ es un cuerpo.

## 2. Álgebras sobre un cuerpo

En adelante, $\mathbb k$ es un cuerpo y las álgebras son asociativas y unitarias.

>[!definition] $\mathbb k$-álgebra
>Una **$\mathbb k$-álgebra** es un conjunto $A$ con suma, producto y multiplicación por escalares tales que:
>1. $(A,+,\cdot_{\mathbb k})$ es un $\mathbb k$-espacio vectorial.
>2. $(A,+,\cdot)$ es un anillo con la misma suma.
>3. El producto $A\times A\to A$ es $\mathbb k$-bilineal.

^e20001

>[!remark] Los escalares conmutan con los elementos del álgebra
>La bilinealidad implica, para $\lambda\in\mathbb k$ y $a,b\in A$, $$(\lambda a)b=\lambda(ab)=a(\lambda b).$$ En particular, $$\lambda1_A\in Z(A),\qquad(\lambda1_A)a=\lambda a=a(\lambda1_A).$$ El morfismo $$u:\mathbb k\longrightarrow A,\qquad u(\lambda)=\lambda1_A$$ toma valores en el centro $Z(A)$.

>[!proposition] Descripción mediante un morfismo al centro
>Para dar una estructura de $\mathbb k$-álgebra sobre un anillo $A$, basta dar un morfismo unitario de anillos $$u:\mathbb k\longrightarrow Z(A).$$ La acción escalar se define por $\lambda a=u(\lambda)a$.
>
>>[!Proof]- Verificación de la observación del apunte
>>1. Las identidades $u(\lambda+\mu)=u(\lambda)+u(\mu)$, $u(\lambda\mu)=u(\lambda)u(\mu)$ y $u(1)=1_A$, junto con la distributividad en $A$, dan los axiomas de espacio vectorial para $\lambda a=u(\lambda)a$.
>>2. Para $a,b\in A$, $$(\lambda a)b=(u(\lambda)a)b=u(\lambda)(ab)=\lambda(ab).$$ Como $u(\lambda)\in Z(A)$, también $$a(\lambda b)=au(\lambda)b=u(\lambda)ab=\lambda(ab).$$ Por lo tanto, el producto es bilineal.

^e20002

>[!definition] Morfismo de $\mathbb k$-álgebras
>Si $A$ y $B$ son $\mathbb k$-álgebras, $$\operatorname{Alg}_{\mathbb k}(A,B)=\{f:A\to B:f\text{ es }\mathbb k\text{-lineal y morfismo unitario de anillos}\}.$$

^e20003

### Ejemplos iniciales

0. $\mathbb k$ es una $\mathbb k$-álgebra.
1. $\mathbb k[x]$ es una $\mathbb k$-álgebra mediante la inclusión de los escalares como polinomios constantes, $\lambda\mapsto\lambda$.
2. $\mathbb k[x,y]/(x^2+y^2+1)$ es una $\mathbb k$-álgebra. Más generalmente, $\mathbb k[x_1,\ldots,x_n]/I$ lo es para todo ideal $I$.

## 3. Ideales y cocientes de álgebras

>[!definition] Ideal de un álgebra
>Sea $A$ una $\mathbb k$-álgebra. Un ideal izquierdo, derecho o bilateral de $A$ es un subespacio vectorial que es, respectivamente, un ideal izquierdo, derecho o bilateral del anillo $A$.

^e20004

>[!remark] En un álgebra unitaria, un ideal del anillo ya es subespacio
>Si $I$ es un ideal izquierdo y $x\in I$, entonces $\lambda x=(\lambda1_A)x\in I$. Para ideales derechos se usa $\lambda x=x(\lambda1_A)$. El cierre aditivo ya forma parte de la definición de ideal. En la foto se indica que no se requiere comprobar por separado la condición de subespacio.

>[!theorem] Cociente y primer isomorfismo
>Si $I$ es un ideal bilateral de una $\mathbb k$-álgebra $A$, entonces $A/I$ es una $\mathbb k$-álgebra y la proyección $\pi:A\to A/I$ es un morfismo de álgebras.
>Si $f:A\to B$ es un morfismo de $\mathbb k$-álgebras, entonces $\ker f$ es un ideal bilateral y $$A/\ker f\cong\operatorname{Im}f$$ como $\mathbb k$-álgebras.
>
>Enunciado sin demostración en las fotos.

^e20005

## 4. Más ejemplos de álgebras

### 4.1. Endomorfismos

Si $V$ es un $\mathbb k$-espacio vectorial, $\operatorname{End}_{\mathbb k}(V)$ es una $\mathbb k$-álgebra con producto dado por composición y estructura escalar $$\mathbb k\longrightarrow Z(\operatorname{End}_{\mathbb k}(V)),\qquad\lambda\longmapsto\lambda\operatorname{Id}_V.$$ No es necesariamente conmutativa ni de dimensión finita.

### 4.2. Una curva y los morfismos de su álgebra de coordenadas

En el manuscrito se toma $$f(x,y)=y^2-x^3+x-1,\qquad V_f=\{(a,b)\in\mathbb k^2:f(a,b)=0\},$$ y se la llama «curva elíptica». Se considera la correspondencia $$\operatorname{Alg}_{\mathbb k}\bigl(\mathbb k[x,y]/(f),\mathbb k\bigr)\longleftrightarrow V_f.$$

>[!proposition] Puntos y evaluaciones
>Hay una biyección $$\varphi:\operatorname{Alg}_{\mathbb k}\bigl(\mathbb k[x,y]/(f),\mathbb k\bigr)\longrightarrow V_f,\qquad\varphi(g)=\bigl(g(\bar x),g(\bar y)\bigr).$$
>
>>[!Proof]- Desarrollo de las verificaciones del apunte
>>1. Si $g$ es un morfismo de $\mathbb k$-álgebras, respeta sumas, productos y escalares. Como $f(\bar x,\bar y)=0$, $$g(\bar y)^2-g(\bar x)^3+g(\bar x)-1=g\bigl(\bar y^2-\bar x^3+\bar x-\bar1\bigr)=0.$$ Así, $\varphi(g)\in V_f$.
>>2. Dado $(a,b)\in V_f$, la evaluación $h(x,y)\mapsto h(a,b)$ se anula sobre $(f)$: si $h=qf$, entonces $h(a,b)=q(a,b)f(a,b)=0$. Por tanto, define un morfismo $$\psi(a,b):\mathbb k[x,y]/(f)\to\mathbb k,\qquad\psi(a,b)(\bar h)=h(a,b).$$ Esta es la verificación de buena definición indicada en la foto.
>>3. Se tiene $\varphi(\psi(a,b))=(a,b)$. Recíprocamente, un morfismo $g$ queda determinado por sus valores en $\bar x$, $\bar y$ y los escalares: para todo $h\in\mathbb k[x,y]$, $$g(\bar h)=h\bigl(g(\bar x),g(\bar y)\bigr).$$ Luego $\psi(\varphi(g))=g$.

^e20006

>[!remark] Si no se exige que el morfismo sea de álgebras
>En la foto se pregunta qué sucede si se consideran morfismos de anillos en lugar de morfismos de $\mathbb k$-álgebras. La pregunta queda abierta en el manuscrito. La distinción es que un morfismo de anillos no tiene por qué fijar los escalares de $\mathbb k$.

### 4.3. Matrices

$M_n(\mathbb k)$ es una $\mathbb k$-álgebra. Es el caso particular de los endomorfismos cuando se elige una base de un espacio vectorial de dimensión finita $n$.

## 5. Un módulo sobre un álgebra es un espacio vectorial

>[!remark] Restricción de escalares
>Sea $A$ una $\mathbb k$-álgebra y $M$ un $A$-módulo unitario. Definimos $$\lambda m=(\lambda1_A)m\qquad(\lambda\in\mathbb k,\ m\in M).$$ Con esta acción, $M$ es canónicamente un $\mathbb k$-espacio vectorial. Además, para $a\in A$, $$\lambda(am)=((\lambda1_A)a)m=(\lambda a)m=(a(\lambda1_A))m=a(\lambda m).$$

## 6. El plano cuántico

Para un parámetro $q\in\mathbb k$, se considera $$\mathbb k_q[x,y]=\mathbb k\langle x,y\rangle/(xy-qyx),$$ donde $\mathbb k\langle x,y\rangle$ es el álgebra libre no conmutativa y el ideal del denominador es bilateral.

>[!remark] Aclaración de la frase del manuscrito
>En la foto se lo describe como un álgebra no conmutativa. Esto requiere distinguir el parámetro: para $q=1$ se obtiene el álgebra conmutativa $\mathbb k[x,y]$. La relación escrita es $xy=qyx$; el apunte no especifica condiciones adicionales sobre $q$.

## 7. El producto tensorial de espacios vectoriales

### Definición y propiedad universal

Sean $V$ y $W$ dos espacios vectoriales sobre un cuerpo $\mathbb{k}$. Un producto tensorial de $V$ y $W$ es un par $(V\otimes_{\mathbb{k}}W,p)$ formado por un espacio vectorial $V\otimes_{\mathbb{k}}W$ y una función bilineal $p:V\times W\to V\otimes_{\mathbb{k}}W$ que satisface la siguiente propiedad universal: para todo espacio vectorial $U$ y toda función bilineal $\beta:V\times W\to U$, existe una única transformación lineal $\widehat{\beta}:V\otimes_{\mathbb{k}}W\to U$ tal que $\widehat{\beta}\circ p=\beta$.

El diagrama del apunte expresa la factorización $$V\times W\xrightarrow{\ p\ }V\otimes_{\mathbb{k}}W\xrightarrow{\ \widehat{\beta}\ }U,\qquad \beta=\widehat{\beta}\circ p.$$

**Observación.** En algún sentido, lo que hace el producto tensorial es linealizar las formas bilineales. La correspondencia $$\operatorname{Hom}_{\mathbb{k}}(V\otimes_{\mathbb{k}}W,U)\longrightarrow\operatorname{Bil}_{\mathbb{k}}(V\times W,U),\qquad g\longmapsto g\circ p$$ es una biyección: la unicidad en la propiedad universal prueba la inyectividad, y la existencia prueba la sobreyectividad.

### Ejemplo: tensorizar contra el cuerpo

Queremos comparar $V\otimes_{\mathbb{k}}\mathbb{k}$ con $V$, y $\mathbb{k}\otimes_{\mathbb{k}}W$ con $W$. Tensorizar contra el cuerpo funciona como la unidad para el espacio vectorial.

Consideremos $$p:V\times\mathbb{k}\to V,\qquad p(v,\lambda)=\lambda v.$$

>[!Proof]- Verificación del ejemplo
>1. Dada una función bilineal $\beta:V\times\mathbb{k}\to U$, construimos $\widehat{\beta}:V\to U$ mediante $\widehat{\beta}(v)=\beta(v,1)$, como indica el apunte.
>2. **Desarrollo del argumento abreviado del apunte.** La función $\widehat{\beta}$ es lineal por la linealidad de $\beta$ en la primera variable, y $\widehat{\beta}(p(v,\lambda))=\beta(\lambda v,1)=\lambda\beta(v,1)=\beta(v,\lambda)$. Por tanto, $\widehat{\beta}\circ p=\beta$.
>3. **Desarrollo del argumento abreviado del apunte.** Si $h:V\to U$ es lineal y satisface $h\circ p=\beta$, entonces $h(v)=h(p(v,1))=\beta(v,1)=\widehat{\beta}(v)$; así, la factorización es única. Luego $(V,p)$ es un producto tensorial de $V$ y $\mathbb{k}$, y $V\otimes_{\mathbb{k}}\mathbb{k}\cong V$.
>4. **Desarrollo del caso simétrico anunciado en el apunte.** Para $\mathbb{k}\otimes_{\mathbb{k}}W$ se usa $q:\mathbb{k}\times W\to W$, $q(\lambda,w)=\lambda w$, y la factorización $\widehat{\beta}(w)=\beta(1,w)$. La misma verificación da $\mathbb{k}\otimes_{\mathbb{k}}W\cong W$.

### Existencia y unicidad

#### Unicidad salvo isomorfismo

Si $(V\otimes_{\mathbb{k}}W,p)$ y $(V\widetilde{\otimes}_{\mathbb{k}}W,q)$ son productos tensoriales, existe un único isomorfismo entre ellos compatible con las aplicaciones bilineales canónicas.

>[!Proof]- Unicidad
>1. Por las propiedades universales existen únicas transformaciones lineales $\widehat{p}:V\widetilde{\otimes}_{\mathbb{k}}W\to V\otimes_{\mathbb{k}}W$ y $\widehat{q}:V\otimes_{\mathbb{k}}W\to V\widetilde{\otimes}_{\mathbb{k}}W$ tales que $\widehat{p}\circ q=p$ y $\widehat{q}\circ p=q$.
>2. Se cumple $\widehat{p}\circ\widehat{q}\circ p=p$. Por la unicidad de la factorización de $p$, resulta $\widehat{p}\circ\widehat{q}=\operatorname{id}_{V\otimes_{\mathbb{k}}W}$.
>3. Análogamente, $\widehat{q}\circ\widehat{p}=\operatorname{id}_{V\widetilde{\otimes}_{\mathbb{k}}W}$. Por tanto, $\widehat{q}=\widehat{p}^{-1}$.

#### Existencia

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

### Notación y aplicaciones inducidas

Si $(V\otimes_{\mathbb{k}}W,p)$ es un producto tensorial, escribimos $$p(v,w)=v\otimes w.$$

**Observación.** Sean $f:V\to\widetilde{V}$ y $g:W\to\widetilde{W}$ transformaciones lineales. La aplicación $\widetilde{p}\circ(f\times g):V\times W\to\widetilde{V}\otimes_{\mathbb{k}}\widetilde{W}$ es bilineal. Por la propiedad universal induce una transformación lineal $$f\otimes g:V\otimes_{\mathbb{k}}W\to\widetilde{V}\otimes_{\mathbb{k}}\widetilde{W},\qquad (f\otimes g)\circ p=\widetilde{p}\circ(f\times g).$$

En particular, $$\begin{aligned}(f\otimes g)(v\otimes w)&=(f\otimes g)(p(v,w))\\&=\widetilde{p}(f(v),g(w))\\&=f(v)\otimes g(w).\end{aligned}$$

**Observación.** Para todo $v\in V$ y todo $w\in W$, $$v\otimes 0_W=0_{V\otimes_{\mathbb{k}}W}=0_V\otimes w.$$

### Bases del producto tensorial

**Proposición.** Sean $V$ y $W$ espacios vectoriales con bases $\{v_i\}_{i\in I}$ y $\{w_j\}_{j\in J}$, respectivamente. Entonces $$\{v_i\otimes w_j\}_{(i,j)\in I\times J}$$ es una base de $V\otimes_{\mathbb{k}}W$.

>[!Proof]- Demostración
>1. El conjunto de todos los tensores $v\otimes w$ genera $V\otimes_{\mathbb{k}}W$, pues en la construcción anterior $\overline{(v,w)}=v\otimes w$ y los pares $(v,w)$ generan el espacio libre. Como $\{v_i\}_{i\in I}$ y $\{w_j\}_{j\in J}$ generan $V$ y $W$, los tensores $v_i\otimes w_j$ generan $V\otimes_{\mathbb{k}}W$; el apunte señala este argumento oralmente.
>2. **Desarrollo del argumento de generación.** Si $v=\sum_{i\in I_0}a_iv_i$ y $w=\sum_{j\in J_0}b_jw_j$, con $I_0$ y $J_0$ finitos, entonces $v\otimes w=\sum_{i\in I_0,\,j\in J_0}a_ib_j(v_i\otimes w_j)$.
>3. Para probar la independencia lineal, sea $\sum_{i\in I_0,\,j\in J_0}\lambda_{ij}(v_i\otimes w_j)=0$, donde $I_0\subseteq I$ y $J_0\subseteq J$ son finitos.
>4. Existen funciones lineales $f_r:V\to\mathbb{k}$ y $g_s:W\to\mathbb{k}$ tales que $f_r(v_i)=\delta_{ri}$ y $g_s(w_j)=\delta_{sj}$, donde $\delta$ es la delta de Kronecker. Para definirlas basta dar sus valores en una base, aunque esta sea infinita; el apunte lo relaciona con la propiedad universal de la suma directa.
>5. **Explicitación de la identificación usada en el apunte.** Mediante $\mathbb{k}\otimes_{\mathbb{k}}\mathbb{k}\cong\mathbb{k}$, aplicamos $f_r\otimes g_s$ a la relación: $$0=\sum_{i\in I_0,\,j\in J_0}\lambda_{ij}f_r(v_i)g_s(w_j)=\sum_{i\in I_0,\,j\in J_0}\lambda_{ij}\delta_{ri}\delta_{sj}=\lambda_{rs}.$$
>6. Esto vale para todo $r\in I_0$ y $s\in J_0$. Por tanto, todos los coeficientes son nulos y los tensores de la proposición son linealmente independientes.

**Corolario.** Si $\dim V<\infty$ y $\dim W<\infty$, entonces $$\dim(V\otimes_{\mathbb{k}}W)=\dim V\cdot\dim W.$$

### Producto tensorial y espacio de aplicaciones lineales

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

### Correcciones y dudas de lectura

- Se conservó el orden de las fotos: primero la construcción, existencia y unicidad; después la notación, las bases y la aplicación $\Phi$.
- En la construcción por cociente, se distinguió $\widetilde{\beta}:F\to U$ de $\widehat{\beta}:F/Q\to U$. La frase manuscrita «$\beta$ se anula en el núcleo» se precisó como $Q\subseteq\ker\widetilde{\beta}$: es la extensión lineal la que debe anularse en el subespacio de relaciones.
- Se corrigió la observación manuscrita $v\otimes0=0=0\otimes v$ usando $w\in W$ en el segundo tensor, para que cada elemento pertenezca al factor correspondiente.
- En la proposición final, la inyectividad corresponde al inciso (1), aunque su desarrollo aparece bajo la marca «(2)» en la foto. Se reorganizó la numeración sin cambiar el argumento.
- En la primera foto, los primados de los cuatro términos del generador de $Q$ se leen con dificultad. Se transcribieron de forma coherente como la expansión bilineal de $(\lambda v+\mu v',\lambda'w+\mu'w')$.
- La anotación junto a $\mathbb{k}^{(V\times W)}$ parece decir «$\mathbb{k}$ anillo». Se mantuvo como observación marginal, sin extender a anillos los enunciados formulados para espacios vectoriales sobre un cuerpo.
- La segunda foto llama a $\delta$ «delta de Dirac»; se corrigió a **delta de Kronecker**, que es la notación usada para $\delta_{ri}$ y $\delta_{sj}$.
- Los pasajes señalados como **desarrollo**, **explicitación** o explicación oral completan argumentos abreviados de las fotos; no se presentan como texto literal del manuscrito.

## 8. Imágenes originales

Las cuatro imágenes se conservan en la bóveda, en orden de lectura.

### Página 1 — Álgebras

![[tmp/Apuntes/Teorico 20 - Sofi/Teorico 20 - pagina 1.jpg]]

### Página 2 — Ideales y ejemplos

![[tmp/Apuntes/Teorico 20 - Sofi/Teorico 20 - pagina 2.jpg]]

### Página 3 — Producto tensorial: definición y construcción

![[tmp/Apuntes/Teorico 20 - Sofi/Teorico 20 - pagina 3.jpg]]

### Página 4 — Producto tensorial: bases y aplicaciones lineales

![[tmp/Apuntes/Teorico 20 - Sofi/Teorico 20 - pagina 4.jpg]]
