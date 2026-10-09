---
tags:
  - AlgebraicStructures
  - Rings
  - Modules
  - Polynomials
date: 2026-10-07
source: "PDF Clase 12 0710_261007_105103.pdf, enviado por Franco por WhatsApp el 2026-10-07"
---

# Teórico 13 — Criterio de Eisenstein y módulos sobre anillos

>[!remark] Fuente y numeración
>Transcripción de las cuatro páginas de [[EA-Teorico-13-7oct.pdf|la clase del 7 de octubre de 2026]]. El PDF se titula «Clase 12»; esta nota continúa la numeración del vault después de [[Teorico 12]], sin reemplazar aquella clase. Se conserva el contenido y se completan las verificaciones esbozadas; los ejercicios quedan sin resolver y los teoremas sin demostración en el original se conservan como enunciados.
>Se corrigen algunas imprecisiones del manuscrito: Eisenstein da irreducibilidad sobre $\mathbb Q$, y sobre $\mathbb Z$ si además el polinomio es primitivo; los endomorfismos de un grupo abeliano y los endomorfismos lineales no son lo mismo; en el ejemplo del álgebra de Weyl la relación es $dy-yd=1$. Trabajamos con anillos con unidad y módulos unitarios, es decir, con $1_Rm=m$.

## 1. Criterio de Eisenstein

>[!theorem] Criterio de Eisenstein
>Sea $f(x)=\sum_{i=0}^{n}a_ix^i\in\mathbb Z[x]$, con $n\geq1$ y $a_n\neq0$. Si existe un primo $p\in\mathbb Z$ tal que
>1. $p\nmid a_n$;
>2. $p\mid a_i$ para todo $0\leq i<n$;
>3. $p^2\nmid a_0$;
>entonces $f$ es irreducible en $\mathbb Q[x]$. Si además $f$ es primitivo, también es irreducible en $\mathbb Z[x]$.

^e13001

### Aplicación: polinomios ciclotómicos de índice primo

>[!definition] Polinomio ciclotómico de índice primo
>Para un primo $p$, definimos $$\Phi_p(x)=\sum_{i=0}^{p-1}x^i=1+x+x^2+\cdots+x^{p-1}.$$ Se cumple $$x^p-1=(x-1)\Phi_p(x).$$ Sus raíces complejas son las raíces $p$-ésimas de la unidad distintas de $1$; como $p$ es primo, todas ellas tienen orden $p$.

>[!proposition] Irreducibilidad de $\Phi_p$
>Si $p$ es primo, $\Phi_p$ es irreducible en $\mathbb Q[x]$ y en $\mathbb Z[x]$.
>
>>[!Proof]-
>>1. Sustituimos $x$ por $x+1$ en la identidad anterior: $$x\Phi_p(x+1)=(x+1)^p-1=\sum_{j=1}^{p}\binom pj x^j.$$ Comparando coeficientes, obtenemos $$\Phi_p(x+1)=\sum_{j=1}^{p}\binom pj x^{j-1}=p+\binom p2x+\cdots+\binom p{p-1}x^{p-2}+x^{p-1}.$$
>>2. Para $1\leq j<p$, la identidad $j\binom pj=p\binom{p-1}{j-1}$ y la coprimalidad de $j$ y $p$ muestran que $p\mid\binom pj$. En efecto, existen $u,v\in\mathbb Z$ con $uj+vp=1$; multiplicando por $\binom pj$, ambos términos de la derecha son múltiplos de $p$.
>>3. El coeficiente principal es $1$ y el término independiente es $p$, que no es divisible por $p^2$. Aplicamos [[Teorico 13#^e13001|criterio de Eisenstein]] a $\Phi_p(x+1)$; este polinomio es primitivo porque es mónico.
>>4. La sustitución $h(x)\mapsto h(x+1)$ es un automorfismo de $\mathbb Q[x]$ y de $\mathbb Z[x]$, con inverso $h(x)\mapsto h(x-1)$: preserva sumas y productos por sustitución, y ambas composiciones devuelven $h(x)$. Una factorización no trivial de $\Phi_p$ produciría una de $\Phi_p(x+1)$. Por tanto, $\Phi_p$ es irreducible en ambos anillos.

^e13002

>[!example] Adjuntar una raíz $p$-ésima de la unidad
>Sea $\zeta\in\mathbb C$ una raíz $p$-ésima de la unidad distinta de $1$. Entonces $$\mathbb Q(\zeta)\cong\mathbb Q[x]/(\Phi_p(x)).$$ El isomorfismo envía la clase de $x$ a $\zeta$. La irreducibilidad de $\Phi_p$ garantiza que el cociente es un cuerpo.

## 2. Módulos sobre anillos y representaciones

### El anillo de endomorfismos

>[!definition] Endomorfismos de un grupo abeliano
>Sea $(M,+)$ un grupo abeliano. Denotamos por $\operatorname{End}_{\mathbb Z}(M)$, o simplemente $\operatorname{End}(M)$, el conjunto de sus endomorfismos de grupos. Es un anillo con suma puntual y producto dado por composición: $$(f+g)(m)=f(m)+g(m),\qquad fg=f\circ g.$$ El cero es la aplicación nula y la unidad es $\operatorname{id}_M$.

^e13003

>[!remark] Endomorfismos aditivos y endomorfismos lineales
>Si $\mathbb k$ es un cuerpo, los endomorfismos **$\mathbb k$-lineales** de $\mathbb k^n$ forman el anillo $\operatorname{End}_{\mathbb k}(\mathbb k^n)\cong M_n(\mathbb k)$, una vez elegida la base usual. No debe reemplazarse $\operatorname{End}_{\mathbb k}$ por $\operatorname{End}_{\mathbb Z}$ en esta identificación: un endomorfismo aditivo no tiene por qué ser $\mathbb k$-lineal.

### Definición y primeros ejemplos

>[!definition] Módulo a izquierda
>Sea $R$ un anillo con unidad. Un **$R$-módulo a izquierda** es un grupo abeliano $(M,+)$ junto con una aplicación $$R\times M\longrightarrow M,\qquad(r,m)\longmapsto r\cdot m,$$ tal que, para todo $r,s\in R$ y $m,n\in M$,
>1. $r\cdot(m+n)=r\cdot m+r\cdot n$;
>2. $(r+s)\cdot m=r\cdot m+s\cdot m$;
>3. $(rs)\cdot m=r\cdot(s\cdot m)$;
>4. $1_R\cdot m=m$.
>A veces se dice que $M$ es una **representación de $R$**. En lo que sigue, «módulo» significa módulo a izquierda.

^e13004

>[!example] Espacios vectoriales
>Si $\mathbb k$ es un cuerpo, un $\mathbb k$-módulo es precisamente un espacio vectorial sobre $\mathbb k$.

>[!example] Módulo regular
>Todo anillo $R$ es un $R$-módulo mediante su multiplicación: $r\cdot s=rs$. Se llama **módulo regular a izquierda**. Las distributividades, la asociatividad y la unidad del anillo verifican los axiomas.

>[!lemma] Módulos y representaciones por endomorfismos
>Dar una estructura de $R$-módulo sobre un grupo abeliano $M$ equivale a dar un morfismo unitario de anillos $$\rho:R\longrightarrow\operatorname{End}_{\mathbb Z}(M).$$ La correspondencia es $r\cdot m=\rho(r)(m)$.
>
>>[!Proof]-
>>- **De una acción a un morfismo.**
>>	1. Definimos $\rho(r):M\to M$ por $\rho(r)(m)=r\cdot m$. Por [[Teorico 13#^e13004|axiomas de módulo]], $\rho(r)(m+n)=\rho(r)(m)+\rho(r)(n)$, de modo que $\rho(r)$ es un endomorfismo aditivo.
>>	2. Para cada $m\in M$, $$\rho(r+s)(m)=(r+s)\cdot m=r\cdot m+s\cdot m=(\rho(r)+\rho(s))(m).$$ Luego $\rho(r+s)=\rho(r)+\rho(s)$.
>>	3. Asimismo, $$\rho(rs)(m)=(rs)\cdot m=r\cdot(s\cdot m)=(\rho(r)\circ\rho(s))(m),\qquad\rho(1_R)(m)=m.$$ Por tanto, $\rho(rs)=\rho(r)\rho(s)$ y $\rho(1_R)=\operatorname{id}_M$.
>>- **De un morfismo a una acción.**
>>	1. Dado $\rho$, definimos $r\cdot m=\rho(r)(m)$. Como cada $\rho(r)$ es aditivo, $r\cdot(m+n)=r\cdot m+r\cdot n$.
>>	2. Como $\rho$ preserva suma, producto y unidad, $$\begin{aligned}(r+s)\cdot m&=(\rho(r)+\rho(s))(m)=r\cdot m+s\cdot m,\\(rs)\cdot m&=(\rho(r)\circ\rho(s))(m)=r\cdot(s\cdot m),\\1_R\cdot m&=\operatorname{id}_M(m)=m.\end{aligned}$$ Se verifican todos los axiomas.
>>	3. Ambos procedimientos son inversos: reconstruyen exactamente las aplicaciones $m\mapsto r\cdot m$ y la acción $r\cdot m=\rho(r)(m)$.

^e13005

>[!remark] Analogía con las acciones de grupos
>Una acción de un grupo $G$ sobre un conjunto $X$ se describe mediante un morfismo $G\to\operatorname{Sym}(X)$. De manera análoga, una estructura de módulo se describe mediante un morfismo de anillos hacia los endomorfismos del grupo abeliano subyacente.

>[!example] Cociente por un ideal a izquierda
>Si $I\subseteq R$ es un ideal a izquierda, el grupo abeliano $R/I$ es un $R$-módulo mediante $$r\cdot(s+I)=rs+I.$$
>
>>[!Proof]-
>>1. Si $s+I=s'+I$, entonces $s-s'\in I$. Como $I$ es un ideal a izquierda, $r(s-s')\in I$, por lo que $rs+I=rs'+I$. La acción no depende del representante.
>>2. Los axiomas se obtienen de las identidades de $R$: $$\begin{aligned}r\cdot((s+I)+(t+I))&=r(s+t)+I=(rs+I)+(rt+I),\\(r+u)\cdot(s+I)&=(r+u)s+I=(rs+I)+(us+I),\\(ru)\cdot(s+I)&=(ru)s+I=r(us)+I=r\cdot(u\cdot(s+I)),\\1_R\cdot(s+I)&=s+I.\end{aligned}$$

>[!remark] Cociente de módulos frente a cociente de anillos
>Para construir el módulo $R/I$ basta que $I$ sea un ideal a izquierda. Para que la multiplicación de clases convierta $R/I$ en un anillo, se necesita que $I$ sea bilátero.

## 3. Submódulos, morfismos y cocientes

>[!definition] Submódulo
>Sea $M$ un $R$-módulo. Un **submódulo** de $M$ es un subgrupo aditivo $N\subseteq M$ estable bajo la acción de $R$: $$r\cdot n\in N\qquad\text{para todo }r\in R,\ n\in N.$$ Escribimos $N\leq_R M$.

^e13006

>[!example] Ideales a izquierda
>Los submódulos del módulo regular $R$ son exactamente los ideales a izquierda de $R$: en ambos casos se pide ser subgrupo aditivo y ser estable bajo multiplicación por elementos de $R$ a izquierda.

>[!definition] Morfismo de módulos
>Sean $M,N$ dos $R$-módulos. Un **morfismo de $R$-módulos** es una aplicación $f:M\to N$ tal que, para todo $m,n\in M$ y $r\in R$,
>1. $f(m+n)=f(m)+f(n)$;
>2. $f(r\cdot m)=r\cdot f(m)$.
>El conjunto de estos morfismos se denota $\operatorname{Hom}_R(M,N)$. Un morfismo inyectivo es un **monomorfismo** y uno sobreyectivo es un **epimorfismo**. Escribimos $M\cong N$ si existe un isomorfismo de $R$-módulos entre ellos.

^e13007

>[!exercise] Morfismos desde el módulo regular
>Demostrar que la evaluación en $1_R$ da una identificación $$\operatorname{Hom}_R(R,M)\cong M.$$ Para un anillo no conmutativo, se entiende aquí como una identificación de grupos abelianos; si $R$ es conmutativo, también puede considerarse como una identificación de $R$-módulos.

>[!exercise] Núcleo e imagen
>Si $f:M\to N$ es un morfismo de $R$-módulos, demostrar que $\ker f$ es un submódulo de $M$ y $\operatorname{Im}f$ es un submódulo de $N$.

>[!definition] Módulo cociente
>Si $N\leq_R M$, el grupo cociente $M/N$ se convierte en un $R$-módulo mediante $$r\cdot(m+N)=r\cdot m+N.$$
>
>>[!Proof]-
>>1. Si $m+N=m'+N$, entonces $m-m'\in N$. La aditividad de la acción da $r\cdot m-r\cdot m'=r\cdot(m-m')\in N$, por [[Teorico 13#^e13006|submódulos]]. Por tanto, la acción está bien definida.
>>2. Los axiomas pasan a las clases: $$\begin{aligned}r\cdot((m+N)+(m'+N))&=(r\cdot m+N)+(r\cdot m'+N),\\(r+s)\cdot(m+N)&=(r\cdot m+N)+(s\cdot m+N),\\(rs)\cdot(m+N)&=r\cdot(s\cdot(m+N)),\\1_R\cdot(m+N)&=m+N.\end{aligned}$$ La suma del cociente ya lo convierte en un grupo abeliano, de modo que se obtiene un $R$-módulo.

^e13008

## 4. Ejemplos de módulos y representaciones

### 4.1. Acciones de anillos de endomorfismos

>[!example] Los endomorfismos actúan por evaluación
>Si $M$ es un grupo abeliano, el anillo $E=\operatorname{End}_{\mathbb Z}(M)$ actúa sobre $M$ mediante $f\cdot m=f(m)$. La representación asociada $E\to\operatorname{End}_{\mathbb Z}(M)$ es la identidad.
>En particular, $\operatorname{End}_{\mathbb Z}(R)$ actúa sobre el grupo aditivo de $R$.

>[!example] Endomorfismos de un módulo
>Si $M$ es un $R$-módulo, $\operatorname{End}_R(M)$ es un anillo con suma puntual y composición. Actúa sobre $M$ mediante $T\cdot m=T(m)$; la representación es la inclusión $$\operatorname{End}_R(M)\hookrightarrow\operatorname{End}_{\mathbb Z}(M).$$

### 4.2. Polinomios actuando como operadores diferenciales

>[!example] $C^\infty(\mathbb R)$ como $\mathbb R[x]$-módulo
>Sea $V=C^\infty(\mathbb R)$, el espacio vectorial real de las funciones suaves $f:\mathbb R\to\mathbb R$. El operador derivada $D:V\to V$, $D(f)=f'$, es $\mathbb R$-lineal. Definimos $$\left(\sum_{i=0}^{n}a_ix^i\right)\cdot f=\sum_{i=0}^{n}a_if^{(i)}.$$ Así, $x\cdot f=f'$ y $p(x)\cdot f=p(D)(f)$.

>[!example] Soluciones de una ecuación diferencial como submódulo
>El subconjunto $$N=\{f\in C^\infty(\mathbb R):f''+f=0\}$$ es un submódulo del módulo anterior. En efecto, es el núcleo del operador $$L:V\to V,\qquad L(f)=f''+f=(x^2+1)\cdot f.$$
>
>>[!Proof]-
>>1. El operador $L=D^2+\operatorname{id}_V$ es aditivo. Para $p(x)=\sum_i a_ix^i$, la linealidad de la derivación da $$L(p\cdot f)=\sum_i a_i(f^{(i+2)}+f^{(i)})=p\cdot L(f).$$ Por [[Teorico 13#^e13007|morfismos de módulos]], $L$ es $\mathbb R[x]$-lineal.
>>2. La aplicación nula pertenece a $N$, y si $f,g\in N$, entonces $L(f-g)=L(f)-L(g)=0$. Si $p\in\mathbb R[x]$ y $f\in N$, el paso anterior da $L(p\cdot f)=p\cdot L(f)=0$. Por tanto, $N$ es un subgrupo aditivo estable bajo la acción y es un submódulo.

### 4.3. El álgebra de Weyl

>[!definition] Primera álgebra de Weyl
>La **primera álgebra de Weyl sobre $\mathbb R$** es $$A_1(\mathbb R)=\mathbb R\langle y,d\rangle/(dy-yd-1),$$ donde $\mathbb R\langle y,d\rangle$ es el álgebra libre no conmutativa y el cociente se toma por el ideal bilátero generado por $dy-yd-1$.

>[!example] Acción del álgebra de Weyl sobre funciones suaves
>El espacio $C^\infty(\mathbb R)$ es un $A_1(\mathbb R)$-módulo mediante $$\bigl(\overline y\cdot f\bigr)(t)=tf(t),\qquad\bigl(\overline d\cdot f\bigr)(t)=f'(t).$$
>
>>[!Proof]-
>>1. Los operadores $Y(f)(t)=tf(t)$ y $D(f)=f'$ son $\mathbb R$-lineales. Para una palabra en $y,d$, sustituimos las letras por $Y,D$ y usamos composición; para una suma de palabras, usamos la misma combinación lineal. La concatenación de palabras se convierte en composición de operadores, de modo que esto define un morfismo $\mathbb R\langle y,d\rangle\to\operatorname{End}_{\mathbb R}(C^\infty(\mathbb R))$.
>>2. La regla del producto verifica la relación: $$\begin{aligned}((DY-YD-\operatorname{id})f)(t)&=\frac{d}{dt}(tf(t))-tf'(t)-f(t)\\&=f(t)+tf'(t)-tf'(t)-f(t)=0.\end{aligned}$$
>>3. Todo elemento del ideal bilátero generado por $dy-yd-1$ es una suma finita de términos $a(dy-yd-1)b$. Su imagen es una suma de operadores de la forma $\rho(a)0\rho(b)=0$. Por tanto, el morfismo pasa al cociente; [[Teorico 13#^e13005|módulos y representaciones]] da la estructura de módulo anunciada.

### 4.4. Matrices y números complejos

>[!example] Módulo de columnas
>Si $\mathbb k$ es un cuerpo, $\mathbb k^n$ es un $M_n(\mathbb k)$-módulo mediante $A\cdot v=Av$. La multiplicación de matrices reproduce la composición de los operadores que representan.

>[!example] Representar $\mathbb C$ por matrices reales
>El grupo aditivo $\mathbb R^2$ es un $\mathbb C$-módulo mediante $$(a+bi)\cdot\binom xy=\binom{ax-by}{bx+ay}.$$ La representación correspondiente es $$\rho:\mathbb C\longrightarrow M_2(\mathbb R),\qquad\rho(a+bi)=\begin{pmatrix}a&-b\\b&a\end{pmatrix}.$$
>
>>[!Proof]-
>>1. La aplicación preserva la suma entrada a entrada y $\rho(1)=I_2$.
>>2. Para $a,b,c,d\in\mathbb R$, $$\begin{pmatrix}a&-b\\b&a\end{pmatrix}\begin{pmatrix}c&-d\\d&c\end{pmatrix}=\begin{pmatrix}ac-bd&-(ad+bc)\\ad+bc&ac-bd\end{pmatrix}=\rho((a+bi)(c+di)).$$ Por tanto, $\rho$ es un morfismo unitario de anillos y define la acción indicada.

>[!example] Enteros gaussianos
>La misma fórmula con $a,b,x,y\in\mathbb Z$ convierte a $\mathbb Z^2$ en un $\mathbb Z[i]$-módulo. La representación toma valores en $M_2(\mathbb Z)$.

### 4.5. Submódulos generados

>[!definition] Submódulo generado por uno o varios elementos
>Si $m\in M$, el submódulo generado por $m$ es $$\langle m\rangle_R=Rm=\{r\cdot m:r\in R\}.$$ Para $m_1,\ldots,m_s\in M$, $$\langle m_1,\ldots,m_s\rangle_R=\left\{\sum_{i=1}^{s}r_i\cdot m_i:r_i\in R\right\}.$$ Estos conjuntos son submódulos: contienen a $0$, las diferencias se obtienen restando los coeficientes y la acción de $r\in R$ se obtiene multiplicando cada coeficiente por $r$ a izquierda.

^e13009

### 4.6. Un operador lineal determina un módulo de polinomios

>[!example] Un espacio vectorial con un operador
>Sean $V$ un espacio vectorial sobre un cuerpo $\mathbb k$ y $T:V\to V$ un operador $\mathbb k$-lineal. Entonces $V$ es un $\mathbb k[x]$-módulo mediante $$p(x)\cdot v=p(T)(v),\qquad p(T)=\sum_{i=0}^{n}a_iT^i\quad\text{si }p(x)=\sum_{i=0}^{n}a_ix^i.$$ En particular, $x\cdot v=T(v)$.
>La representación es $\rho_T:\mathbb k[x]\to\operatorname{End}_{\mathbb k}(V)$, $p\mapsto p(T)$. Preserva el producto porque $$p(T)q(T)=\sum_{i,j}a_ib_jT^{i+j}=(pq)(T),$$ y preserva la suma y la unidad por la definición.

^e1300a

>[!remark] Submódulo cíclico y subespacio $T$-cíclico
>Para $v\in V$, $$\langle v\rangle_{\mathbb k[x]}=\{p(T)(v):p\in\mathbb k[x]\}=\operatorname{span}_{\mathbb k}\{v,T(v),T^2(v),\ldots\}.$$ Este es el subespacio **$T$-cíclico** generado por $v$; el span consiste en combinaciones lineales finitas.

### 4.7. Funciones holomorfas y una relación polinómica

>[!example] Una acción de $\mathbb C[x,y]/(x^2+y^2-1)$
>Sea $\mathbb C^*=\mathbb C\setminus\{0\}$ y sea $\mathcal O(\mathbb C^*)$ el espacio vectorial complejo de las funciones holomorfas $f:\mathbb C^*\to\mathbb C$. El anillo $$A=\mathbb C[x,y]/(x^2+y^2-1)$$ actúa sobre este espacio mediante $$\bigl(\overline x\cdot f\bigr)(z)=\frac{z+z^{-1}}{2}f(z),\qquad\bigl(\overline y\cdot f\bigr)(z)=\frac{z-z^{-1}}{2i}f(z).$$
>
>>[!Proof]-
>>1. Definimos $a(z)=(z+z^{-1})/2$ y $b(z)=(z-z^{-1})/(2i)$. Son funciones holomorfas en $\mathbb C^*$, de modo que multiplicar por ellas preserva $\mathcal O(\mathbb C^*)$.
>>2. Los operadores $X(f)=af$ e $Y(f)=bf$ conmutan: para todo $z\neq0$, $$(XYf)(z)=a(z)b(z)f(z)=b(z)a(z)f(z)=(YXf)(z).$$ Por tanto, la sustitución $p(x,y)\mapsto p(X,Y)$ preserva productos, además de suma y unidad.
>>3. Verificamos la relación: $$a(z)^2+b(z)^2=\frac{(z+z^{-1})^2-(z-z^{-1})^2}{4}=\frac{4}{4}=1.$$ En consecuencia, $(X^2+Y^2-\operatorname{id})f=0$ para toda $f$.
>>4. Como el generador $x^2+y^2-1$ actúa por cero, también lo hace cualquier múltiplo suyo. Si dos polinomios tienen la misma clase en $A$, su diferencia pertenece a ese ideal y actúa por cero. Así, la acción pasa al cociente y queda bien definida.

### 4.8. Grupos abelianos y $\mathbb Z$-módulos

>[!proposition] Equivalencia entre grupos abelianos y $\mathbb Z$-módulos
>Todo grupo abeliano $M$ tiene una única estructura de $\mathbb Z$-módulo: para $r>0$, $$r\cdot m=\underbrace{m+\cdots+m}_{r\text{ veces}},\qquad0\cdot m=0,\qquad(-r)\cdot m=-(r\cdot m).$$ Recíprocamente, el grupo aditivo subyacente a un $\mathbb Z$-módulo es abeliano por definición. Las nociones de grupo abeliano y $\mathbb Z$-módulo coinciden.

>[!remark] Todo anillo es un $\mathbb Z$-módulo
>El grupo aditivo de un anillo $A$ tiene esta acción canónica. Si $A$ tiene unidad, para $r>0$, $$r\cdot a=\underbrace{a+\cdots+a}_{r\text{ veces}},\qquad r\cdot1_A=\underbrace{1_A+\cdots+1_A}_{r\text{ veces}}.$$

>[!definition] Característica de un anillo
>Si existe un entero positivo $n$ tal que $n\cdot1_A=0$, la **característica** de $A$ es el menor entero positivo con esa propiedad. Si no existe, se define $\operatorname{char}A=0$. Por ejemplo, $\operatorname{char}(\mathbb Z/n\mathbb Z)=n$ para $n\geq2$.

>[!exercise] Característica de un cuerpo
>Demostrar que, si $\mathbb k$ es un cuerpo, entonces $\operatorname{char}\mathbb k=0$ o $\operatorname{char}\mathbb k=p$ para algún primo $p$.

### 4.9. Matrices y polinomio mínimo

>[!example] Módulo asociado a una matriz
>Sean $\mathbb k$ un cuerpo, $n\geq1$ y $A\in M_n(\mathbb k)$. Aplicando [[Teorico 13#^e1300a|módulo asociado a un operador]] a $T(v)=Av$, obtenemos una estructura de $\mathbb k[x]$-módulo sobre $\mathbb k^n$: $$p(x)\cdot v=p(A)v.$$
>El núcleo de la representación $$\rho_A:\mathbb k[x]\longrightarrow\operatorname{End}_{\mathbb k}(\mathbb k^n)\cong M_n(\mathbb k),\qquad p\longmapsto p(A),$$ es el ideal de los polinomios que anulan a $A$. Es no nulo: las $n^2+1$ matrices $I,A,\ldots,A^{n^2}$ son linealmente dependientes en el espacio de dimensión $n^2$ dado por $M_n(\mathbb k)$.
>Como $\mathbb k[x]$ es un dominio de ideales principales, existe un único generador mónico de ese ideal: $$\ker\rho_A=(\mu_A(x)).$$ El polinomio $\mu_A$ se llama **polinomio mínimo de $A$**; es el polinomio mónico de menor grado que cumple $\mu_A(A)=0$.

## 5. Producto y coproducto de módulos

### Producto directo y suma directa

>[!definition] Producto directo
>Sea $I$ un conjunto y sea $(M_i)_{i\in I}$ una familia de $R$-módulos. Su **producto directo** es $$\prod_{i\in I}M_i=\left\{(m_i)_{i\in I}:m_i\in M_i\text{ para todo }i\in I\right\}.$$ La suma y la acción se definen coordenada a coordenada: $$(m_i)+(n_i)=(m_i+n_i),\qquad r\cdot(m_i)=(r\cdot m_i).$$

^e1300b

>[!definition] Suma directa o coproducto
>La **suma directa** de la familia es $$\bigoplus_{i\in I}M_i=\left\{(m_i)\in\prod_{i\in I}M_i:m_i=0\text{ salvo para una cantidad finita de índices}\right\}.$$ Es un submódulo del producto, con las operaciones restringidas. Si $I$ es finito, la suma directa y el producto coinciden.

^e1300c

>[!theorem] Propiedades del producto y de la suma directa
>Sea $(M_i)_{i\in I}$ una familia de $R$-módulos.
>1. $\prod_{i\in I}M_i$ es un $R$-módulo y $\bigoplus_{i\in I}M_i$ es un submódulo suyo.
>2. Para cada $j\in I$, la proyección $\pi_j:\prod_iM_i\to M_j$, $(m_i)\mapsto m_j$, es un epimorfismo. La inclusión $\iota_j:M_j\to\bigoplus_iM_i$, que coloca un elemento en la coordenada $j$ y cero en las demás, es un monomorfismo.
>3. **Propiedad universal del producto.** Si $N$ es un $R$-módulo y se dan morfismos $f_j:N\to M_j$ para todo $j\in I$, existe un único morfismo $f:N\to\prod_iM_i$ tal que $\pi_j\circ f=f_j$ para todo $j$. Está dado por $$f(n)=(f_i(n))_{i\in I}.$$
>4. **Propiedad universal de la suma directa.** Si $U$ es un $R$-módulo y se dan morfismos $h_j:M_j\to U$ para todo $j\in I$, existe un único morfismo $h:\bigoplus_iM_i\to U$ tal que $h\circ\iota_j=h_j$ para todo $j$. Está dado por $$h((m_i))=\sum_{i\in I}h_i(m_i).$$ La suma es finita porque $(m_i)$ tiene soporte finito.

^e1300d

>[!remark] Notación
>Para una familia constante igual a $M$, escribimos $$M^{(I)}=\bigoplus_{i\in I}M,\qquad M^I=\prod_{i\in I}M.$$ Los paréntesis en $M^{(I)}$ indican soporte finito.

>[!definition] Módulo libre
>Un $R$-módulo $M$ es **libre** si existe un conjunto $I$ tal que $$M\cong R^{(I)}.$$ Es decir, es isomorfo a una suma directa de copias del módulo regular $R$.

## 6. Teoremas de isomorfismo y correspondencia

>[!theorem] Factorización por un módulo cociente
>Sea $f:M\to N$ un morfismo de $R$-módulos y sea $K\leq_R M$. Existe un morfismo $\widehat f:M/K\to N$ tal que $\widehat f\circ\pi=f$, donde $\pi:M\to M/K$ es la proyección canónica, si y solo si $K\subseteq\ker f$. Cuando existe, es único y satisface $$\widehat f(m+K)=f(m).$$

^e1300e

>[!theorem] Primer teorema de isomorfismo
>Si $f:M\to N$ es un morfismo de $R$-módulos, entonces $$M/\ker f\cong\operatorname{Im}f.$$ El isomorfismo está dado por $m+\ker f\mapsto f(m)$.

^e1300f

>[!theorem] Segundo teorema de isomorfismo
>Si $U,V\leq_R M$, entonces $$\frac{U+V}{V}\cong\frac{U}{U\cap V}.$$ El isomorfismo envía $u+V$, con $u\in U$, a $u+(U\cap V)$.

^e13010

>[!theorem] Tercer teorema de isomorfismo
>Si $N\leq_R P\leq_R M$, entonces $$\frac{M/N}{P/N}\cong M/P.$$ El isomorfismo envía $(m+N)+(P/N)$ a $m+P$.

^e13011

>[!theorem] Correspondencia de submódulos
>Sea $N\leq_R M$. Los submódulos de $M/N$ son exactamente los de la forma $U/N$, donde $U$ es un submódulo de $M$ con $N\subseteq U\subseteq M$.
>Si $\pi:M\to M/N$ es la proyección, las aplicaciones $$U\longmapsto U/N=\pi(U),\qquad W\longmapsto\pi^{-1}(W)$$ son inversas y preservan las inclusiones.

^e13012
