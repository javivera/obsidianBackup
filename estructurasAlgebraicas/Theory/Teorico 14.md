---
tags:
  - AlgebraicStructures
  - Modules
  - Representations
source: "Primeras cuatro fotos enviadas por Sofía por WhatsApp el 2026-10-14; fecha de la clase no indicada"
---

# Teórico 14 — Bases, módulos simples y representaciones de grupos

>[!remark] Fuente y criterios de transcripción
>Esta nota continúa [[Teorico 13]] y reúne las primeras cuatro fotos del envío de Sofía: [[Teorico 14 - pagina 1.jpg|página 1]], [[Teorico 14 - pagina 2.jpg|página 2]], [[Teorico 14 - pagina 3.jpg|página 3]] y [[Teorico 14 - pagina 4.jpg|página 4]]. La separación respecto de [[Teorico 15]] se hace donde el manuscrito retoma la definición de módulo simple y comienza el ejemplo de matrices. No aparecen fechas de clase.
>Se desarrolla en pasos lo esbozado en las fotos. Se explicitan las hipótesis omitidas: los módulos simples son no nulos; la irreducibilidad de una rotación real requiere $n\geq3$; en el ejemplo ciclotómico se corrige el vector que define el morfismo para que pertenezca al subespacio de suma cero. El fragmento rotulado «Práctico 7» se conserva aparte, al final. Los ejercicios quedan sin resolver.

Trabajamos con anillos con unidad y módulos unitarios a izquierda. Si $M$ es un $R$-módulo, su acción corresponde a un morfismo $R\to\operatorname{End}_{\mathbb Z}(M)$, como en [[Teorico 13#^e13005|módulos y representaciones]].

## 1. Independencia lineal y bases sobre un anillo

>[!definition] Independencia lineal, generación y base
>Sea $M$ un $R$-módulo y sea $S\subseteq M$.
>1. $S$ es **linealmente independiente** si, para toda elección de elementos distintos $s_1,\ldots,s_n\in S$ y coeficientes $r_1,\ldots,r_n\in R$, $$\sum_{i=1}^{n}r_is_i=0\quad\Longrightarrow\quad r_i=0\text{ para todo }i.$$
>2. $S$ **genera** $M$ si todo $m\in M$ puede escribirse como una combinación lineal finita $$m=\sum_{i=1}^{n}r_is_i,\qquad r_i\in R,\ s_i\in S.$$
>3. $S$ es una **base** de $M$ si es linealmente independiente y genera $M$.
>Todo subconjunto de una base es linealmente independiente. El conjunto vacío es una base del módulo cero.

^e14001

>[!example] Base canónica de una suma directa de copias de $R$
>Para un conjunto $I$, sea $R^{(I)}=\bigoplus_{i\in I}R$, y denotemos por $e_i$ el elemento con coordenada $1_R$ en $i$ y cero en las demás. Si $R\neq0$, el conjunto $\{e_i:i\in I\}$ es una base de $R^{(I)}$.
>
>>[!Proof]-
>>1. Cada $f\in R^{(I)}$ tiene soporte finito; por tanto, $$f=\sum_{i\in\operatorname{supp}(f)}f(i)e_i.$$ Así, los $e_i$ generan el módulo.
>>2. Si $i_1,\ldots,i_n$ son distintos y $\sum_{j=1}^{n}r_je_{i_j}=0$, al evaluar la coordenada $i_k$ obtenemos $r_k=0$. Esto vale para todo $k$, de modo que el conjunto es linealmente independiente.

>[!example] Un módulo sin base
>Para $n\geq2$, el grupo $\mathbb Z/n\mathbb Z$ es un $\mathbb Z$-módulo que no tiene base: para todo $\overline a$, se cumple $n\overline a=0$ aunque $n\neq0$ en $\mathbb Z$. Ningún conjunto no vacío es linealmente independiente, y el vacío no genera este módulo no nulo.

>[!proposition] Módulo libre y existencia de base
>Para un $R$-módulo $M$, son equivalentes:
>1. $M$ es libre, es decir, $M\cong R^{(I)}$ para algún conjunto $I$.
>2. $M$ tiene una base.
>
>>[!Proof]-
>>- **$(1\Rightarrow2)$**
>>	1. Si $R\neq0$, sea $\varphi:R^{(I)}\to M$ un isomorfismo. La imagen de la base canónica genera $M$: si $m=\varphi(f)$, entonces $m=\sum_i f(i)\varphi(e_i)$, con suma finita.
>>	2. Si $\sum_jr_j\varphi(e_{i_j})=0$, aplicar $\varphi^{-1}$ da $\sum_jr_je_{i_j}=0$, y todos los coeficientes son cero. La imagen es una base.
>>	3. Si $R=0$, la condición de módulo unitario obliga a $M=0$, cuya base es el vacío.
>>- **$(2\Rightarrow1)$**
>>	1. Sea $S$ una base de $M$. Definimos $$\varphi:R^{(S)}\longrightarrow M,\qquad\varphi((r_s)_{s\in S})=\sum_{s\in S}r_ss.$$ La suma es finita y la aplicación es $R$-lineal: preserva sumas y satisface $\varphi(a(r_s))=\sum_s(ar_s)s=a\varphi((r_s))$.
>>	2. Como $S$ genera, $\varphi$ es sobreyectiva. Si $\varphi((r_s))=0$, la independencia de $S$ obliga a que todos los coeficientes sean cero; por tanto, $\varphi$ es inyectiva.
>>	3. Así, $M\cong R^{(S)}$. Además, $\varphi$ es el único morfismo que envía cada $e_s$ a $s$, porque todo elemento del dominio es una suma finita de múltiplos de estos vectores; esto coincide con [[Teorico 13#^e1300d|propiedad universal de la suma directa]].

^e14002

>[!exercise] Submódulo generado por un elemento
>Si $0\neq m\in M$, consideramos $Rm=\{rm:r\in R\}$. ¿Cuándo es $Rm$ un $R$-módulo libre?

>[!lemma] Todo módulo es cociente de un módulo libre
>Para todo $R$-módulo $M$, existen un módulo libre $F$ y un epimorfismo $\varepsilon:F\to M$. En particular, $$M\cong F/\ker\varepsilon.$$
>
>>[!Proof]-
>>1. Tomamos $F=R^{(M)}$, donde el conjunto de índices es el conjunto subyacente a $M$, y definimos $$\varepsilon((r_m)_{m\in M})=\sum_{m\in M}r_mm.$$ Es un morfismo por la misma verificación del paso anterior.
>>2. Para cada $m\in M$, $\varepsilon(e_m)=m$, de modo que $\varepsilon$ es sobreyectiva. Aplicamos [[Teorico 13#^e1300f|primer teorema de isomorfismo]] para obtener el cociente anunciado.

^e14003

## 2. Módulos sobre un anillo de división

>[!lemma] Independencia maximal implica base sobre un anillo de división
>Sean $D$ un anillo de división, $M$ un $D$-módulo y $S\subseteq M$ un conjunto linealmente independiente maximal por inclusión. Entonces $S$ es una base de $M$.
>
>>[!Proof]-
>>1. Supongamos que existe $m\notin\langle S\rangle_D$. Consideremos una relación finita $$\sum_{i=1}^{n}d_is_i+cm=0,$$ con los $s_i$ distintos en $S$.
>>2. Si $c=0$, la independencia de $S$ da $d_i=0$ para todo $i$. Si $c\neq0$, multiplicar a izquierda por $c^{-1}$ da $$m=-\sum_{i=1}^{n}(c^{-1}d_i)s_i,$$ contradiciendo la elección de $m$.
>>3. Por tanto, $S\cup\{m\}$ sería linealmente independiente, en contradicción con la maximalidad. Luego $S$ genera $M$ y es una base.

^e14004

>[!definition] Módulo simple e indescomponible
>Un $R$-módulo $M$ es **simple** o **irreducible** si $M\neq0$ y sus únicos submódulos son $0$ y $M$. Es **indescomponible** si $M\neq0$ y no puede escribirse como $M=U\oplus V$ con $U,V$ submódulos no nulos.
>Todo módulo simple es indescomponible: en una descomposición con dos sumandos no nulos, uno de ellos sería un submódulo propio no nulo.

^e14005

>[!proposition] Cociente simple y maximalidad
>Si $I$ es un ideal a izquierda propio de $R$, entonces $R/I$ es simple si y solo si $I$ es maximal entre los ideales a izquierda propios.
>
>>[!Proof]-
>>1. Por [[Teorico 13#^e13012|correspondencia de submódulos]], los submódulos de $R/I$ son $J/I$, donde $J$ recorre los ideales a izquierda con $I\subseteq J\subseteq R$.
>>2. Las únicas posibilidades son $0=I/I$ y $R/I$ precisamente cuando las únicas posibilidades para $J$ son $I$ y $R$. Esto equivale a la maximalidad de $I$.

^e14006

>[!example] Funciones continuas y evaluación
>Sea $X$ un espacio topológico y sea $C(X,\mathbb R)$ el anillo de funciones continuas reales, con operaciones puntuales. Para $p\in X$, $$\mathfrak m_p=\{f\in C(X,\mathbb R):f(p)=0\}$$ es un ideal maximal. En efecto, la evaluación $f\mapsto f(p)$ es un morfismo sobreyectivo de anillos, pues las funciones constantes dan todos los valores reales; su núcleo es $\mathfrak m_p$. Así, $C(X,\mathbb R)/\mathfrak m_p\cong\mathbb R$ es un cuerpo y, como módulo sobre $C(X,\mathbb R)$, es simple.

>[!theorem] Bases y complementos sobre un anillo de división
>Sea $D$ un anillo de división.
>1. Si $S$ es un subconjunto linealmente independiente de un $D$-módulo $M$, existe una base $\beta$ de $M$ con $S\subseteq\beta$.
>2. Todo $D$-módulo es libre.
>3. Todo $D$-módulo simple es isomorfo al módulo regular $D$.
>4. Si $N\leq_D M$, existe $U\leq_D M$ tal que $M=U\oplus N$.
>
>>[!Proof]-
>>- **(1)**
>>	1. Consideramos el conjunto parcialmente ordenado $$\mathcal X_S=\{L\subseteq M:S\subseteq L\text{ y }L\text{ es linealmente independiente}\},$$ ordenado por inclusión. No es vacío porque contiene a $S$.
>>	2. Para una cadena no vacía $(L_i)$, su unión $L=\bigcup_iL_i$ contiene a $S$ y es linealmente independiente: los finitísimos elementos de cualquier relación pertenecen a un mismo miembro de la cadena, y allí todos los coeficientes son cero. La cadena vacía tiene a $S$ como cota superior.
>>	3. Por el lema de Zorn existe un miembro maximal. Aplicando [[Teorico 14#^e14004|independencia maximal]], ese miembro es una base.
>>- **(2)**
>>	1. Aplicamos (1) al conjunto vacío y luego [[Teorico 14#^e14002|existencia de base y libertad]].
>>- **(3)**
>>	1. Sea $M$ simple y elijamos $0\neq m\in M$. La aplicación $\varphi:D\to M$, $d\mapsto dm$, es $D$-lineal y su imagen contiene a $m$, por lo que la simplicidad obliga a que sea sobreyectiva.
>>	2. Si $dm=0$ con $d\neq0$, entonces $m=d^{-1}(dm)=0$, contradicción. Por tanto, $\ker\varphi=0$ y $M\cong D$.
>>- **(4)**
>>	1. Por (2), $N$ tiene una base $\beta_0$. Este conjunto sigue siendo linealmente independiente en $M$ y, por (1), se extiende a una base $\beta$ de $M$.
>>	2. Sea $\beta_1=\beta\setminus\beta_0$ y $U=\langle\beta_1\rangle_D$. Toda combinación finita de elementos de $\beta$ se separa en términos de $\beta_0$ y $\beta_1$, por lo que $M=U+N$.
>>	3. Si $w\in U\cap N$, sus expresiones mediante $\beta_1$ y $\beta_0$ dan, al restarse, una relación entre elementos distintos de $\beta$. Todos los coeficientes son cero y $w=0$. Así, la suma es directa; el isomorfismo $U\oplus N\to M$ es $(u,n)\mapsto u+n$.

^e14007

>[!corollary] Descomposición en módulos simples
>Todo $D$-módulo es una suma directa de copias de $D$, que son módulos simples. En particular, sobre un anillo de división todo módulo indescomponible es simple: una base con al menos dos elementos permitiría separar uno de ellos y el resto en dos sumandos no nulos.

## 3. Álgebra de un grupo y representaciones

>[!definition] Álgebra de grupo
>Sean $R$ un anillo con unidad y $G$ un grupo. El anillo $R[G]$ tiene como grupo aditivo $$R[G]=\bigoplus_{g\in G}Rg.$$ Sus elementos son sumas finitas $\sum_g r_gg$, y la multiplicación se define por $$(rg)(sh)=(rs)(gh),\qquad\left(\sum_g r_gg\right)\left(\sum_h s_hh\right)=\sum_{g,h}(r_gs_h)(gh).$$ La unidad es $1_Re_G$ y los elementos de $G$ conmutan con los coeficientes de $R$ por esta definición.
>Si $R$ es un cuerpo, $R[G]$ es un espacio vectorial con base $G$; para $R$ general es un módulo libre con la misma base.

^e14008

>[!example] Módulo de permutación asociado a una acción
>Si $G$ actúa sobre un conjunto $X$, el módulo libre $R^{(X)}$ se convierte en un $R[G]$-módulo mediante $$\left(\sum_g r_gg\right)\cdot\left(\sum_x a_xe_x\right)=\sum_{g,x}r_ga_xe_{g\cdot x}.$$ Las sumas son finitas. Para términos elementales, $$(rg)\cdot((sh)\cdot(ae_x))=r(sa)e_{g\cdot(h\cdot x)}=(rs)a e_{(gh)\cdot x}=((rg)(sh))\cdot(ae_x).$$ La distributividad y la acción de la unidad se verifican en la misma fórmula.

### 3.1. Representación real del grupo diedral

>[!example] Rotaciones y reflexión
>Para $n\geq3$, sea $$D_n=\langle r,s:r^n=1,\ s^2=1,\ srs=r^{-1}\rangle.$$ Tomamos $\theta=2\pi/n$ y las matrices $$A=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$ Estas matrices definen una representación $D_n\to\operatorname{GL}_2(\mathbb R)$ y, por extensión lineal, un morfismo $$\rho:\mathbb R[D_n]\longrightarrow\operatorname{End}_{\mathbb R}(\mathbb R^2),\qquad\sum_g\lambda_gg\longmapsto\sum_g\lambda_g\rho(g).$$
>
>>[!Proof]-
>>1. Si $A_\alpha=\begin{pmatrix}\cos\alpha&-\sin\alpha\\\sin\alpha&\cos\alpha\end{pmatrix}$, el producto se calcula explícitamente: $$A_\alpha A_\beta=\begin{pmatrix}\cos\alpha\cos\beta-\sin\alpha\sin\beta&-(\cos\alpha\sin\beta+\sin\alpha\cos\beta)\\\sin\alpha\cos\beta+\cos\alpha\sin\beta&\cos\alpha\cos\beta-\sin\alpha\sin\beta\end{pmatrix}=A_{\alpha+\beta}.$$ Por inducción, $A^n=A_{n\theta}=A_{2\pi}=I$.
>>2. Directamente, $B^2=I$ y $$BAB=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}=A_{-\theta}=A^{-1}.$$ Así se verifican todas las relaciones de la presentación.
>>3. La extensión lineal preserva el producto porque $$\rho\left(\left(\sum_g\lambda_gg\right)\left(\sum_h\mu_hh\right)\right)=\sum_{g,h}\lambda_g\mu_h\rho(gh)=\left(\sum_g\lambda_g\rho(g)\right)\left(\sum_h\mu_h\rho(h)\right).$$ También preserva suma y unidad, de modo que define el módulo anunciado.

### 3.2. Representaciones del grupo cíclico

>[!example] Una representación compleja de dimensión uno
>Sea $C_n=\langle g:g^n=1\rangle$ y sea $\zeta=e^{2\pi i/n}$. La aplicación $$\rho:\mathbb C[C_n]\longrightarrow\operatorname{End}_{\mathbb C}(\mathbb C),\qquad\rho\left(\sum_{j=0}^{n-1}\lambda_jg^j\right)(z)=\left(\sum_{j=0}^{n-1}\lambda_j\zeta^j\right)z$$ define una representación, porque $\zeta^n=1$. La acción es $g\cdot z=\zeta z$. Denotamos este módulo por $\mathbb C_\rho$; es simple porque sus submódulos son subespacios complejos de un espacio de dimensión uno.

>[!example] Representación real simple de dimensión dos
>Sea $n\geq3$ y sea $A$ la rotación de ángulo $2\pi/n$. Hacer actuar al generador de $C_n$ por $A$ convierte $\mathbb R^2$ en un $\mathbb R[C_n]$-módulo simple. No es simple como $\mathbb R$-módulo.
>
>>[!Proof]-
>>1. Como $A^n=I$, la acción está bien definida. Un submódulo propio no nulo sería un subespacio real $V$ de dimensión uno, estable bajo $A$.
>>2. Si $0\neq v\in V$ y $V=\mathbb Rv$, tendríamos $Av=\lambda v$ para algún $\lambda\in\mathbb R$. Sin embargo, $$\det(tI-A)=t^2-2\cos(2\pi/n)t+1$$ tiene discriminante $-4\sin^2(2\pi/n)<0$, pues $n\geq3$. No tiene raíces reales y $A$ no tiene autovectores reales.
>>3. Esto descarta $V$, de modo que el módulo es simple. En cambio, cualquier recta es un submódulo propio no nulo para la acción restringida a $\mathbb R$. Para $n=1$ o $n=2$, la rotación es $I$ o $-I$ y todas las rectas son invariantes, por lo que la afirmación de simplicidad no vale.

### 3.3. Representación racional y polinomio ciclotómico

>[!example] El subespacio de suma cero
>Sea $p$ primo. Consideramos $$\Pi=\left\{(a_1,\ldots,a_p)\in\mathbb Q^p:\sum_{i=1}^{p}a_i=0\right\}$$ y el operador $$T(a_1,\ldots,a_p)=(a_p,a_1,\ldots,a_{p-1}).$$ La suma de coordenadas no cambia y $T^p=I$, de modo que $\Pi$ es un $\mathbb Q[C_p]$-módulo haciendo actuar al generador $g$ por $T$.

>[!proposition] Identificación con un cociente ciclotómico
>Sea $\Phi_p(x)=1+x+\cdots+x^{p-1}$. Entonces $$\mathbb Q[C_p]\cong\mathbb Q[x]/(x^p-1),\qquad\Pi\cong\mathbb Q[x]/(\Phi_p(x))$$ como módulos sobre $\mathbb Q[x]/(x^p-1)$. En particular, $\Pi$ es simple.
>
>>[!Proof]-
>>1. La evaluación $\psi:\mathbb Q[x]\to\mathbb Q[C_p]$, $f\mapsto f(g)$, es un epimorfismo. Al dividir $f$ por $x^p-1$, escribimos $f=q(x)(x^p-1)+r(x)$ con $\deg r<p$. Si $\psi(f)=0$, entonces $\psi(r)=0$; como $1,g,\ldots,g^{p-1}$ son una base, todos los coeficientes de $r$ son cero. Así, $\ker\psi=(x^p-1)$ y se obtiene el primer isomorfismo.
>>2. Como $x^p-1=(x-1)\Phi_p(x)$, la multiplicación de clases define una acción $$\bigl(f+(x^p-1)\bigr)\cdot\bigl(h+(\Phi_p)\bigr)=fh+(\Phi_p).$$ Si cambiamos $f$ por un múltiplo adicional de $x^p-1$, o $h$ por un múltiplo adicional de $\Phi_p$, el producto cambia por un múltiplo de $\Phi_p$; por eso está bien definida.
>>3. Sean $e_1,\ldots,e_p$ los vectores canónicos de $\mathbb Q^p$ y sea $v=e_1-e_p\in\Pi$. Definimos $\eta:\mathbb Q[x]\to\Pi$ por $\eta(f)=f(T)v$. Es un morfismo de $\mathbb Q[x]$-módulos. Además, $$\Phi_p(T)v=\sum_{j=0}^{p-1}T^j(e_1-e_p)=\sum_{i=1}^{p}e_i-\sum_{i=1}^{p}e_i=0.$$ Así, $\eta$ induce $\overline\eta:\mathbb Q[x]/(\Phi_p)\to\Pi$.
>>4. Para $1\leq i\leq p-1$, $$\eta(x+x^2+\cdots+x^i)=\sum_{j=1}^{i}(e_{j+1}-e_j)=e_{i+1}-e_1.$$ Estos vectores generan $\Pi$, pues $$ (a_1,\ldots,a_p)=\sum_{i=2}^{p}a_i(e_i-e_1)\quad\text{cuando }\sum_i a_i=0.$$ Son independientes porque la coordenada $i\geq2$ de una relación da directamente su coeficiente. Luego $\dim_{\mathbb Q}\Pi=p-1$ y $\overline\eta$ es sobreyectiva.
>>5. Las clases de $1,x,\ldots,x^{p-2}$ forman una base del cociente por división con resto; su dimensión también es $p-1$. Una aplicación lineal sobreyectiva entre estos espacios es inyectiva por la fórmula de dimensión del núcleo y la imagen. Se obtiene el segundo isomorfismo.
>>6. Por [[Teorico 12#^e13002|irreducibilidad de Phi primo]], $(\Phi_p)$ es maximal en $\mathbb Q[x]$. Aplicamos [[Teorico 14#^e14006|cociente simple y maximalidad]]. La acción de $\mathbb Q[x]$ pasa por $\mathbb Q[x]/(x^p-1)$, y ambos anillos tienen los mismos submódulos en esta representación; por tanto, $\Pi$ es simple como $\mathbb Q[C_p]$-módulo.

^e14009

>[!remark] Corrección del vector en el manuscrito
>En la foto aparece un vector canónico aislado como imagen de $x$; ese vector no pertenece a $\Pi$, porque su suma de coordenadas es $1$. La construcción anterior usa diferencias de vectores canónicos y da explícitamente el isomorfismo que se quería obtener.

>[!exercise] Indescomponible no simple
>Usando álgebra lineal, construir un $(\mathbb Z/p\mathbb Z)[C_p]$-módulo indescomponible que no sea simple.

## Apéndice — Fragmento rotulado «Práctico 7»

Este fragmento aparece en la mitad inferior de la cuarta foto; no se mezcla con el desarrollo teórico anterior.

>[!proposition] Todo dominio euclídeo es un dominio de ideales principales
>Sea $R$ un dominio euclídeo con función euclídea $\delta$. Entonces todo ideal de $R$ es principal.
>
>>[!Proof]-
>>1. El ideal cero es $(0)$. Si $I\neq0$, elegimos $0\neq a\in I$ con $\delta(a)$ mínimo entre los valores de $\delta$ en $I\setminus\{0\}$.
>>2. Para $x\in I$, el algoritmo de división da $x=qa+r$, donde $r=0$ o $\delta(r)<\delta(a)$. Como $r=x-qa\in I$, la segunda opción contradice la elección de $a$; luego $r=0$ y $x\in(a)$.
>>3. Esto muestra $I\subseteq(a)$, mientras que $a\in I$ da $(a)\subseteq I$. Por tanto, $I=(a)$.

>[!proposition] Todo dominio de ideales principales es un dominio de factorización única
>Si $R$ es un dominio de ideales principales, todo elemento no nulo no invertible es producto finito de irreducibles, y la factorización es única salvo orden y asociados.
>
>>[!Proof]-
>>1. Toda cadena ascendente de ideales $I_1\subseteq I_2\subseteq\cdots$ se estabiliza. En efecto, su unión es un ideal $I=(a)$; como $a$ pertenece a algún $I_N$, se tiene $I=(a)\subseteq I_N\subseteq I$, y $I_n=I_N$ para todo $n\geq N$.
>>2. Si un elemento no nulo no invertible $a_0$ no fuese producto de irreducibles, no sería irreducible, de modo que $a_0=a_1b_1$ con ambos factores no invertibles. Al menos uno tampoco sería producto de irreducibles; lo llamamos $a_1$. Repitiendo, obtenemos $a_i=a_{i+1}b_{i+1}$ con $b_{i+1}$ no invertible y $$ (a_0)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots.$$ La inclusión es estricta: si $a_{i+1}=ca_i$, la cancelación en $a_i=ca_ib_{i+1}$ daría $cb_{i+1}=1$. Esto contradice el paso 1. Así existe factorización.
>>3. Si $q$ es irreducible y $(q)\subseteq(d)\subsetneq R$, entonces $q=dc$. Como $d$ no es invertible, la irreducibilidad de $q$ fuerza a que $c$ sea invertible, y $(q)=(d)$. Por tanto, $(q)$ es maximal; $R/(q)$ es un cuerpo y, si $q\mid ab$, la igualdad $\overline a\,\overline b=0$ implica $q\mid a$ o $q\mid b$. Así, todo irreducible es primo.
>>4. Si un elemento tiene dos factorizaciones en irreducibles, el primer factor de una divide el producto de la otra; por el paso 3 divide uno de sus factores. Esos dos irreducibles son asociados. Cancelándolos y repitiendo se obtiene la unicidad.

>[!remark] Alcance del fragmento original
>La foto esboza la existencia de factorización mediante una cadena de ideales que no podría continuar indefinidamente. Se explicitan aquí la estabilización de esa cadena y el argumento de unicidad para completar el enunciado «DIP implica DFU».
