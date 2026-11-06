---
tags:
  - AlgebraicStructures
  - Modules
  - StructureTheorem
  - PID
source: "Fotos enviadas por Sofía por WhatsApp el 2026-10-30 (páginas 4 a 7 de 7); fecha de la clase no indicada"
---

# Teórico 19 — Teorema de estructura de módulos finitamente generados sobre un DIP

>[!remark] Fuente y criterios de transcripción
>Transcripción de las últimas cuatro fotos que mandó Sofía el 30/10: [[Teorico 19 - pagina 1.jpg|página 1]], [[Teorico 19 - pagina 2.jpg|página 2]], [[Teorico 19 - pagina 3.jpg|página 3]] y [[Teorico 19 - pagina 4.jpg|página 4]]. Continúa [[Teorico 18]].
>La clase empieza con un ejercicio del práctico y un repaso. Se completan las verificaciones esbozadas, se agregan las justificaciones que faltan (por ejemplo, la sobreyectividad en el ejemplo de las sucesiones) y se corrigen erratas: en la demostración de $M=\sum_pM(p)$ el factor que anula es $p_i^{\alpha_i}$, no $p_i$; en el ejemplo de las sucesiones, $\dim S_f=m$. El lema de la sección 3 y los teoremas de estructura se enuncian sin demostración, como en el manuscrito.

En toda la nota, $R$ es un dominio de ideales principales (DIP). Usamos las notaciones $\operatorname{Ann}$ y $\tau$ de [[Teorico 18#^e18006|anulador y torsión]].

## 1. Ejercicio del práctico resuelto en clase

>[!example] Práctico 8, ejercicio 23
>Sea $M$ un $R$-módulo no nulo y finitamente generado ([[EA - Pr8]], ejercicio 23; acá vale para cualquier anillo).
>- **(a)** Si $S$ es un sistema de generadores de $M$, existen $x_1,\dots,x_n\in S$ con $M=\langle x_1,\dots,x_n\rangle$.
>- **(b)** Todo submódulo propio está contenido en un submódulo maximal.
>
>>[!Proof]-
>>- **(a)**
>>	1. Como $M$ es finitamente generado, $M=\langle y_1,\dots,y_k\rangle$.
>>	2. Como $S$ genera $M$, cada $y_j$ es combinación lineal de una cantidad finita de elementos de $S$: $$y_j=\sum_{i}a_i^{\,j}x_i^{\,j},\qquad x_i^{\,j}\in S.$$
>>	3. Sea $\{x_1,\dots,x_n\}\subseteq S$ la unión (finita) de todos los $x_i^{\,j}$ que aparecen. Cada $y_j$ está en $\langle x_1,\dots,x_n\rangle$, luego $$M=\langle y_1,\dots,y_k\rangle\subseteq\langle x_1,\dots,x_n\rangle\subseteq M.$$
>>- **(b)** La idea es usar Zorn.
>>	1. Sean $N\subsetneq M$ un submódulo propio y $M=\langle x_1,\dots,x_n\rangle$. Consideramos $$\mathcal G=\{A\subseteq M\ \text{submódulo propio}: N\subseteq A\},$$ ordenado por inclusión. $\mathcal G\neq\varnothing$, porque $N\in\mathcal G$.
>>	2. Sea $\{A_\lambda\}$ una cadena en $\mathcal G$ y $U=\bigcup_\lambda A_\lambda$. $U$ es un submódulo: dos elementos de $U$ están en un mismo $A_\lambda$ porque la familia es una cadena. Además, $N\subseteq U$.
>>	3. $U$ es propio: si $U=M$, cada $x_i$ estaría en algún $A_{\lambda_i}$; al ser una cadena, todos están en el mayor de ellos, $A_{\lambda_0}$. Entonces $A_{\lambda_0}\supseteq\langle x_1,\dots,x_n\rangle=M$, lo que contradice que $A_{\lambda_0}$ es propio.
>>	4. Toda cadena tiene cota superior en $\mathcal G$. Por Zorn, hay un elemento maximal $P\in\mathcal G$: un submódulo propio que contiene a $N$ y que no está contenido propiamente en ningún otro submódulo propio, es decir, un submódulo maximal.
>>
>>	En el manuscrito, el argumento de (b) arma una cadena $A_1\subseteq A_2\subseteq\cdots$ y dice que «se estabiliza» por generación finita. La versión con Zorn evita suponer que la cadena se estabiliza.

## 2. Repaso: el caso de $\mathbb Z_n$

>[!proposition] Descomposición de $\mathbb Z_n$ en potencias de primos
>Sea $n=\prod_{i=1}^{\ell}p_i^{\alpha_i}$ con $p_i$ primos distintos. Entonces $$\mathbb Z_n\cong\bigoplus_{i=1}^{\ell}\mathbb Z_{p_i^{\alpha_i}}.$$
>
>>[!Proof]-
>>1. Sean $\pi_i:\mathbb Z\to\mathbb Z_{p_i^{\alpha_i}}$ las proyecciones canónicas. Definimos $$\phi:\mathbb Z_n\to\bigoplus_i\mathbb Z_{p_i^{\alpha_i}},\qquad\phi(\bar x)=(\pi_1(x),\dots,\pi_\ell(x)),$$ es decir, tomamos la clase de $x$ en cada lugar. Está bien definida: si $x-y=jn$ con $j\in\mathbb Z$, entonces $p_i^{\alpha_i}$ divide a $x-y$ para cada $i$. Es claramente un morfismo.
>>2. **$\phi$ es inyectiva.** Si $\pi_i(x)=0$ para todo $i$, cada $p_i^{\alpha_i}$ divide a $x$. Como son potencias de primos distintos, por factorización única $n$ divide a $x$, o sea, $\bar x=\bar0$.
>>3. **$\phi$ es epimorfismo.** Por el teorema chino del resto: dados $m_i\in\mathbb Z_{p_i^{\alpha_i}}$, el sistema $$x\equiv m_1\ (p_1^{\alpha_1}),\ \dots,\ x\equiv m_\ell\ (p_\ell^{\alpha_\ell})$$ tiene solución. (Otra forma de verlo: ambos lados tienen $n$ elementos y $\phi$ es inyectiva.)

^e19001

>[!remark] Qué falta determinar
>Por [[Teorico 18#^e18009|el teorema anterior]], todo $R$-módulo finitamente generado cumple $M\cong\tau(M)\oplus R^\ell$. La parte libre $R^\ell\cong M/\tau(M)$ ya queda determinada (en el manuscrito dice «creo»: el rango de un libre sobre un anillo conmutativo no depende de la base). Lo que falta es determinar $\tau(M)$.

## 3. Las componentes primarias

>[!definition] Componente $p$-primaria
>Sea $p\in R$ primo y $M$ un $R$-módulo. Definimos $$M(p)=\{m\in M:\operatorname{Ann}(m)=\langle p^i\rangle\ \text{para algún}\ i\geq0\}.$$ Por [[Teorico 18#^e18007|propiedades de la torsión]] (3), es lo mismo que pedir $p^im=0$ para algún $i\geq0$.

^e19002

>[!theorem] Un módulo de torsión es suma de sus componentes primarias
>Sea $M$ un $R$-módulo con $M=\tau(M)$ (es decir, con parte libre nula) y sea $p\in R$ primo. Entonces:
>1. $M(p)$ es un submódulo de $M$.
>2. $M=\sum_{p\ \text{primo}}M(p)$.
>
>>[!Proof]-
>>1. $0\in M(p)$, porque $\operatorname{Ann}(0)=R=\langle p^0\rangle$. Sean $m,n\in M(p)$ con $\operatorname{Ann}(m)=\langle p^i\rangle$ y $\operatorname{Ann}(n)=\langle p^j\rangle$. Entonces $$p^{i+j}(m+n)=p^j(p^im)+p^i(p^jn)=0,$$ así que $\langle p^{i+j}\rangle\subseteq\operatorname{Ann}(m+n)$ y, por [[Teorico 18#^e18007|propiedades de la torsión]] (3), $\operatorname{Ann}(m+n)=\langle p^k\rangle$ para algún $k\leq i+j$. Además, para $r\in R$, $p^i(rm)=r(p^im)=0$, luego $rm\in M(p)$.
>>2. Sea $m\in M$. Como $M$ es de torsión, $\operatorname{Ann}(m)=\langle r\rangle$ con $r\neq0$. Si $r$ es unidad, entonces $m=r^{-1}rm=0$, que está en cualquier $M(p)$. Si no, por factorización única, $r=u\prod_{i=1}^{t}p_i^{\alpha_i}$ con $u$ unidad, $p_i$ primos no asociados entre sí y $\alpha_i\geq1$. El truco es el siguiente:
>>	1. Sea $r(i)=\prod_{k\neq i}p_k^{\alpha_k}$ (sacamos el factor $p_i^{\alpha_i}$). Los $r(1),\dots,r(t)$ son coprimos en conjunto: el ideal $\langle r(1),\dots,r(t)\rangle$ es principal, $=\langle d\rangle$, y $d$ divide a todos los $r(i)$. Si un primo $q$ dividiera a $d$, dividiría a $r(1)$ y por lo tanto sería asociado a algún $p_k$. Pero $p_k$ no divide a $r(k)$. Así, $d$ es unidad y existen $s_i\in R$ con $$1=\sum_{i=1}^{t}s_i\,r(i).$$
>>	2. Para cada $i$, $p_i^{\alpha_i}s_i\,r(i)=s_iu^{-1}r$, de modo que $$p_i^{\alpha_i}\bigl(s_i\,r(i)\,m\bigr)=s_iu^{-1}(rm)=0.$$ Luego $s_i\,r(i)\,m\in M(p_i)$.
>>	3. Finalmente, $$m=1\cdot m=\sum_{i=1}^{t}s_i\,r(i)\,m\in\sum_iM(p_i).$$ Todo elemento de $M$ es suma de elementos de los $M(p)$.

^e19003

>[!remark] La suma es finita (y de hecho directa)
>El manuscrito observa que, si $M$ es finitamente generado, la suma del teorema es finita. Si $M=\langle m_1,\dots,m_\ell\rangle$ es de torsión, tomamos $a_j\neq0$ con $\operatorname{Ann}(m_j)=\langle a_j\rangle$ y $a=a_1\cdots a_\ell\neq0$; entonces $aM=0$. Si $0\neq m\in M(p)$ con $\operatorname{Ann}(m)=\langle p^i\rangle$, $i\geq1$, entonces $a\in\langle p^i\rangle$ y $p$ divide a $a$. Solo los primos que dividen a $a$ (salvo asociados) tienen $M(p)\neq0$.
>Esto no está en las fotos, pero la suma es además directa. Si $\sum_pm_p=0$ con $m_p\in M(p)$ y fijamos un primo $q$, el producto $b$ de las potencias que anulan a los $m_p$ con $p\neq q$ cumple $bm_q=-\sum_{p\neq q}bm_p=0$. También $q^km_q=0$ para algún $k$. Como $b$ y $q^k$ son coprimos, $1=xb+yq^k$ y $m_q=xbm_q+yq^km_q=0$.

>[!lemma] Separar un sumando cíclico de anulador máximo
>Sea $M$ un $R$-módulo finitamente generado y $p\in R$ primo con $p^nM=0$ y $p^{n-1}M\neq0$. Sea $m\in M$ con $\operatorname{Ann}(m)=\langle p^n\rangle$. Entonces:
>1. Si $M\neq Rm$, existe $\tilde m\in M$, $\tilde m\neq0$, con $Rm\cap R\tilde m=0$.
>2. $M=Rm\oplus N$ para algún submódulo $N$.
>
>La demostración no se dio en clase: el profesor dijo que es «muy difícil y trabajosa».

^e19004

>[!theorem] Estructura de un módulo $p$-primario
>Sea $M$ un $R$-módulo finitamente generado y $p$ un primo tal que, para todo $m\in M$, $\operatorname{Ann}(m)=\langle p^i\rangle$ para algún $i$ (es decir, $M=M(p)$). Entonces $$M=\bigoplus_{i=1}^{t}Rm_i$$ para ciertos $m_i\in M$ con $\operatorname{Ann}(m_i)=\langle p^{\alpha_i}\rangle$ y $\alpha_1\geq\alpha_2\geq\cdots\geq\alpha_t$.
>
>>[!Proof]-
>>Hacemos inducción en la cantidad $t$ de generadores de $M$. Si $M=0$, la suma vacía sirve.
>>- **Caso base ($t=1$).** $M=Rm$ para un generador $m$, y $\operatorname{Ann}(m)=\langle p^\alpha\rangle$ por hipótesis.
>>- **Paso inductivo.** Supongamos el resultado para módulos con menos de $t$ generadores y sea $M=\langle m_1,\dots,m_t\rangle\neq0$, con $\operatorname{Ann}(m_i)=\langle p^{\alpha_i}\rangle$, ordenados de modo que $\alpha_1\geq\alpha_2\geq\cdots$.
>>	1. El mayor, $p^{\alpha_1}$, anula a todo $M$: anula a cada generador porque $p^{\alpha_i}$ divide a $p^{\alpha_1}$. Además, $\alpha_1\geq1$ porque $M\neq0$, y $p^{\alpha_1-1}M\neq0$ porque $p^{\alpha_1-1}m_1\neq0$ por [[Teorico 18#^e18007|propiedades de la torsión]] (4).
>>	2. Estamos en las hipótesis de [[Teorico 19#^e19004|el lema anterior]] con $n=\alpha_1$ y $m=m_1$, así que $M=Rm_1\oplus N$.
>>	3. Sea $\pi:M\to N$ la proyección. Como $\pi$ es sobreyectiva y $\pi(m_1)=0$, $N=\langle\pi(m_2),\dots,\pi(m_t)\rangle$ tiene $t-1$ generadores. Además, $N\subseteq M$, de modo que todo elemento de $N$ tiene anulador $\langle p^i\rangle$.
>>	4. Por hipótesis inductiva, $N=\bigoplus_{i}Rn_i$ con $\operatorname{Ann}(n_i)=\langle p^{\beta_i}\rangle$ y $\beta_1\geq\beta_2\geq\cdots$.
>>	5. Como $p^{\alpha_1}N=0$, se tiene $p^{\alpha_1}\in\langle p^{\beta_1}\rangle$, es decir, $\alpha_1\geq\beta_1$. Luego $$M=Rm_1\oplus\bigoplus_iRn_i,$$ con exponentes $\alpha_1\geq\beta_1\geq\beta_2\geq\cdots$, y ya está.

^e19005

>[!remark] Cíclicos con anulador una potencia de primo
>Si $m\in M$ y $\operatorname{Ann}(m)=\langle p^\alpha\rangle$, entonces $Rm\cong R/\langle p^\alpha\rangle$. Basta tomar el epimorfismo $\phi:R\to Rm$, $r\mapsto rm$: $Rm\cong R/\ker\phi=R/\operatorname{Ann}(m)=R/\langle p^\alpha\rangle$ ([[Teorico 18#^e18007|propiedades de la torsión]] (2)).

>[!summary] Hasta ahora logramos
>Para $M$ finitamente generado sobre un DIP:
>1. $M\cong\tau(M)\oplus R^r$ ([[Teorico 18#^e18009|torsión y parte libre]]).
>2. $\tau(M)=\sum_pM(p)$ ([[Teorico 19#^e19003|componentes primarias]]).
>3. $M(p)=\bigoplus_iRm_i$ ([[Teorico 19#^e19005|módulos $p$-primarios]]).
>4. $Rm\cong R/\langle p^\alpha\rangle$ si $\operatorname{Ann}(m)=\langle p^\alpha\rangle$.
>
>Juntando todo se obtiene el caso general.

## 4. Teorema de estructura

>[!theorem] Teorema de estructura (versión factores invariantes)
>Sea $R$ un DIP y $M$ un $R$-módulo finitamente generado. Existen $r\in\mathbb N_0$ y $d_1,\dots,d_k\in R\setminus R^\times$ no nulos, con $d_i\mid d_{i+1}$, tales que $$M\cong R^r\oplus R/\langle d_1\rangle\oplus\cdots\oplus R/\langle d_k\rangle.$$
>El número $r$ y los ideales $\langle d_i\rangle$ quedan unívocamente determinados por la clase de isomorfismo de $M$.

^e19006

>[!theorem] Teorema de estructura (versión divisores elementales)
>Sea $R$ un DIP y $M$ un $R$-módulo finitamente generado. Existen $r\in\mathbb N_0$, primos $p_1,\dots,p_t\in R$ no necesariamente distintos y $\alpha_1,\dots,\alpha_t\in\mathbb N$ tales que $$M\cong R^r\oplus\bigoplus_{i=1}^{t}R/\langle p_i^{\alpha_i}\rangle.$$

^e19007

>[!remark] Demostraciones
>El profesor no las dio; dijo que son muy tediosas. La existencia en la versión de divisores elementales sale de los puntos 1–4 del resumen (usando el lema sin demostrar). Para pasar a factores invariantes se agrupan las potencias de primos distintos, como en [[Teorico 19#^e19001|el repaso de $\mathbb Z_n$]], usando el teorema chino del resto. La unicidad no se probó.

## 5. Consecuencias

>[!corollary] Grupos abelianos finitamente generados
>Sea $A$ un grupo abeliano finitamente generado (un $\mathbb Z$-módulo). Entonces $$A\cong\mathbb Z^r\oplus\mathbb Z_{d_1}\oplus\cdots\oplus\mathbb Z_{d_k},\qquad d_i\mid d_{i+1},\ d_i>1,$$ o bien $A\cong\mathbb Z^r\oplus\bigoplus_{i}\mathbb Z_{p_i^{\alpha_i}}$ con $p_i\in\mathbb Z$ primos, no necesariamente distintos.
>En particular, si $A$ es finito, entonces $r=0$ (desaparece la parte libre) y $A\cong\bigoplus_{i}\mathbb Z_{p_i^{\alpha_i}}$.

^e19008

>[!corollary] Subgrupos finitos del grupo multiplicativo de un cuerpo
>Sea $\Bbbk$ un cuerpo y $G\leq\Bbbk^\times$ un subgrupo finito. Entonces $G$ es cíclico.
>
>>[!Proof]-
>>1. Si $G$ es trivial, es cíclico. Si no, $G$ es abeliano finito y, por [[Teorico 19#^e19008|el corolario anterior]], $$G\cong\bigoplus_{i=1}^{k}\mathbb Z_{d_i},\qquad d_1\mid d_2\mid\cdots\mid d_k,\ d_i\geq2.$$
>>2. Como cada $d_i$ divide a $d_k$, el entero $d_k$ anula cada sumando. En notación multiplicativa, $g^{d_k}=1$ para todo $g\in G$. Además, $|G|=d_1d_2\cdots d_k$.
>>3. Como $\Bbbk$ es un cuerpo, el polinomio $x^{d_k}-1$ no puede tener más de $d_k$ raíces en $\Bbbk$. Todo $g\in G$ es raíz, luego $$d_1d_2\cdots d_k=|G|\leq d_k.$$
>>4. Como cada $d_i\geq2$, esto obliga a $k=1$. Así, $G\cong\mathbb Z_{d_1}$ es cíclico.

^e19009

### 5.1. Operadores lineales como $\Bbbk[x]$-módulos

Sea $\Bbbk$ un cuerpo, $V$ un $\Bbbk$-espacio vectorial con $\dim V=n$ y $T:V\to V$ una transformación lineal. Como en [[Teorico 13#^e1300a|un espacio vectorial con un operador]], $V$ es un $\Bbbk[x]$-módulo con $$p\cdot v=p(T)(v)=\sum_ia_iT^i(v),\qquad p(x)=\sum_ia_ix^i\in\Bbbk[x].$$

>[!lemma] Propiedades del $\Bbbk[x]$-módulo asociado a un operador
>1. $V$ es finitamente generado como $\Bbbk[x]$-módulo y es de torsión: $\tau(V)=V$.
>2. Los $\Bbbk[x]$-submódulos de $V$ son exactamente los subespacios $T$-invariantes.
>3. Sea $W$ otro $\Bbbk$-espacio vectorial con $U:W\to W$ lineal (y su estructura de $\Bbbk[x]$-módulo). Entonces $f\in\operatorname{Hom}_{\Bbbk[x]}(V,W)$ si y solo si $f:V\to W$ es lineal y $U\circ f=f\circ T$. En particular, $V\cong W$ como $\Bbbk[x]$-módulos si y solo si $U$ y $T$ son semejantes: existe $f$ lineal biyectiva con $f^{-1}\circ U\circ f=T$.
>
>>[!Proof]-
>>1. Una base de $V$ como $\Bbbk$-espacio es un sistema de generadores como $\Bbbk[x]$-módulo, porque los escalares son polinomios constantes. Veamos que es de torsión: $\dim\operatorname{End}(V)=n^2$, así que los $n^2+1$ elementos $\{\operatorname{id},T,T^2,\dots,T^{n^2}\}$ son linealmente dependientes. Existen $a_i\in\Bbbk$, no todos nulos, con $\sum_{i=0}^{n^2}a_iT^i=0$. Entonces $p(x)=\sum_{i=0}^{n^2}a_ix^i\neq0$ cumple $p(T)=0$, o sea, $p\cdot v=0$ para todo $v\in V$. Así, $p\in\operatorname{Ann}(v)$ para todo $v$, y $V=\tau(V)$.
>>2. Un subespacio $W\subseteq V$ es submódulo si y solo si es cerrado por la acción de los polinomios. Como $x\cdot w=T(w)$, esto implica $T(W)\subseteq W$. Recíprocamente, si $T(W)\subseteq W$, entonces $T^i(W)\subseteq W$ para todo $i$ y $p(T)(W)\subseteq W$ por ser combinación lineal.
>>3. Si $f$ es de $\Bbbk[x]$-módulos, es $\Bbbk$-lineal (acción de las constantes) y $f(x\cdot v)=x\cdot f(v)$, es decir, $f(T(v))=U(f(v))$ para todo $v\in V$. Recíprocamente, si $f$ es lineal y $fT=Uf$, por inducción $fT^i=U^if$ para todo $i$, y por linealidad $f(p\cdot v)=p\cdot f(v)$. La afirmación sobre isomorfismos es el caso de $f$ biyectiva: $fT=Uf$ equivale a $f^{-1}Uf=T$.

^e1900a

>[!definition] Matriz compañera
>Para $f(x)=x^m+a_{m-1}x^{m-1}+\cdots+a_1x+a_0\in\Bbbk[x]$ mónico, la **matriz compañera** es $$C(f)=\begin{pmatrix}0&0&\cdots&0&-a_0\\1&0&\cdots&0&-a_1\\0&1&\cdots&0&-a_2\\\vdots&&\ddots&&\vdots\\0&0&\cdots&1&-a_{m-1}\end{pmatrix}\in\Bbbk^{m\times m}.$$

^e1900b

>[!theorem] Forma canónica racional
>Sea $V$ un $\Bbbk$-espacio vectorial con $\dim V<\infty$ y $T:V\to V$ lineal. Existe una base de $V$ en la que $$[T]=\operatorname{diag}\bigl(C(d_1),\dots,C(d_k)\bigr),$$ con $d_1\mid d_2\mid\cdots\mid d_k$ polinomios mónicos de grado $\geq1$.
>
>>[!Proof]-
>>1. Por [[Teorico 19#^e1900a|el lema]], $V$ es un $\Bbbk[x]$-módulo finitamente generado y de torsión. $\Bbbk[x]$ es DIP, así que se aplica [[Teorico 19#^e19006|el teorema de estructura]]. La parte libre es nula, porque $\Bbbk[x]^r$ con $r\geq1$ no es de torsión. Eligiendo cada generador mónico (multiplicando por una unidad), $$V\cong\bigoplus_{i=1}^{k}\Bbbk[x]/\langle d_i\rangle,$$ con $d_i$ mónicos, $d_i\mid d_{i+1}$, y de grado $\geq1$ porque no son unidades. Falta ver cómo actúa $T$ en cada sumando $\Bbbk[x]/\langle f\rangle$.
>>2. Sea $f=d_i$ cualquiera, $f(x)=x^m+a_{m-1}x^{m-1}+\cdots+a_0$, y sea $\phi:\Bbbk[x]/\langle f\rangle\to V$ el morfismo de $\Bbbk[x]$-módulos que identifica ese sumando con su copia en $V$. Ponemos $v=\phi(\bar1)$. Entonces $$\phi(\bar x)=x\cdot v=T(v),\qquad\phi(\bar x^{\,i})=x^i\cdot v=T^i(v).$$
>>3. Como $\phi$ es de $\Bbbk[x]$-módulos, es en particular lineal e inyectiva. Por el [[Teorico 12#^b742e1|algoritmo de la división]], $\{\bar1,\bar x,\dots,\bar x^{\,m-1}\}$ es base de $\Bbbk[x]/\langle f\rangle$. Por lo tanto, $\{v,T(v),\dots,T^{m-1}(v)\}$ es base de la copia del sumando en $V$, que es un subespacio $T$-invariante.
>>4. En esa base, $T$ manda cada $T^i(v)$ a $T^{i+1}(v)$ para $i<m-1$, y $$T\bigl(T^{m-1}(v)\bigr)=T^m(v)=-a_0v-a_1T(v)-\cdots-a_{m-1}T^{m-1}(v),$$ porque $f(T)(v)=\phi(\bar f)=\phi(\bar0)=0$. La matriz de $T$ restringida a ese sumando es $C(f)$.
>>5. Uniendo las bases de los $k$ sumandos se obtiene una base de $V$ en la que $[T]=\operatorname{diag}\bigl(C(d_1),\dots,C(d_k)\bigr)$.

^e1900c

### 5.2. Ejemplo: sucesiones definidas por recurrencia

>[!example] Sucesiones que satisfacen una recurrencia lineal
>Sea $f(x)=x^m+a_{m-1}x^{m-1}+\cdots+a_0\in\mathbb R[x]$ y sea $S$ el $\mathbb R$-espacio vectorial de las sucesiones reales $u=(u_n)_{n\geq0}$. $S$ es un $\mathbb R[x]$-módulo y basta dar la acción de los escalares y de $x$:
>1. $(\lambda\cdot u)_n=\lambda u_n$;
>2. $(x\cdot u)_n=u_{n+1}$ (corrimiento).
>
>Entonces $f\cdot u=0$ si y solo si $u$ satisface la recurrencia $$u_{n+m}+a_{m-1}u_{n+m-1}+\cdots+a_0u_n=0\qquad\text{para todo}\ n\geq0.$$
>Consideramos el subespacio $S_f=\{u\in S: f\cdot u=0\}$, que es un $\mathbb R[x]$-submódulo: si $f\cdot u=0$, entonces $f\cdot(h\cdot u)=h\cdot(f\cdot u)=0$.
>
>>[!Proof]- $\dim S_f=m$ y $S_f\cong\mathbb R[x]/\langle f\rangle$
>>1. **$\dim S_f=m$.** La aplicación $S_f\to\mathbb R^m$, $u\mapsto(u_0,\dots,u_{m-1})$, es lineal y biyectiva: cada sucesión de $S_f$ se corresponde con sus condiciones iniciales, porque la recurrencia determina cada término a partir de los $m$ anteriores.
>>2. Sea $u\in S_f$ la sucesión con condiciones iniciales $u_0=u_1=\cdots=u_{m-2}=0$ y $u_{m-1}=1$. Sea $$\phi:\mathbb R[x]\to S_f,\qquad\phi(h)=h\cdot u,$$ que es un morfismo de $\mathbb R[x]$-módulos. Como $f\cdot u=0$, $\langle f\rangle\subseteq\ker\phi$.
>>3. **Ningún polinomio no nulo de grado menor que $m$ está en el núcleo.** Sea $g(x)=\sum_{k=0}^{j_0}c_kx^k$ con $c_{j_0}\neq0$ y $j_0<m$. Entonces $$(g\cdot u)_{m-1-j_0}=\sum_{k=0}^{j_0}c_k\,u_{m-1-j_0+k}=c_{j_0}u_{m-1}=c_{j_0}\neq0,$$ porque para $k<j_0$ el índice $m-1-j_0+k$ es menor que $m-1$ y ese término de $u$ es nulo. Así, $g\notin\ker\phi$.
>>4. Como $\mathbb R[x]$ es DIP, $\ker\phi=\langle h\rangle$, con $h\neq0$ porque $f\in\ker\phi$. Por el paso 3, $\operatorname{gr}h\geq m$; como $h$ divide a $f$, $\operatorname{gr}h\leq m$. Entonces $\operatorname{gr}h=m$, $h$ y $f$ son asociados, y $\ker\phi=\langle f\rangle$.
>>5. Por el primer teorema de isomorfismo, $\mathbb R[x]/\langle f\rangle\cong\operatorname{Im}\phi\subseteq S_f$. Ambos tienen dimensión $m$, así que $\phi$ es sobreyectiva y $$S_f\cong\mathbb R[x]/\langle f\rangle.$$

^e1900d

>[!example] Caso aplicado: Fibonacci
>Sea $f_0=0$, $f_1=1$, $f_{n+2}=f_{n+1}+f_n$. El espacio de soluciones de la recurrencia es $S_f$ con $f(x)=x^2-x-1$, y por [[Teorico 19#^e1900d|el ejemplo anterior]] $S_f\cong\mathbb R[x]/\langle x^2-x-1\rangle$. El polinomio es reducible en $\mathbb R[x]$: $$x^2-x-1=(x-\phi)(x-\bar\phi),\qquad\phi=\frac{1+\sqrt5}{2},\quad\bar\phi=\frac{1-\sqrt5}{2}.$$
>
>>[!Proof]- Fórmula cerrada
>>1. Como los factores son coprimos, $$S_f\cong\mathbb R[x]/\langle x-\phi\rangle\oplus\mathbb R[x]/\langle x-\bar\phi\rangle.$$ El primer sumando corresponde a $\{u: (x-\phi)\cdot u=0\}$, y $(x-\phi)\cdot u=0$ equivale a $u_{n+1}=\phi u_n$ para todo $n$, es decir, $u_n=\phi^nu_0$. Del mismo modo, el segundo sumando está generado por $(\bar\phi^{\,n})_n$.
>>2. Directamente: las sucesiones $(\phi^n)$ y $(\bar\phi^{\,n})$ están en $S_f$, porque $\phi^2=\phi+1$ y $\bar\phi^{\,2}=\bar\phi+1$. Son linealmente independientes, porque sus condiciones iniciales $(1,\phi)$ y $(1,\bar\phi)$ lo son ($\phi\neq\bar\phi$). Como $\dim S_f=2$, forman una base.
>>3. Entonces la sucesión de Fibonacci es $f_n=a\phi^n+b\bar\phi^{\,n}$. Con las condiciones iniciales, $$\begin{cases}0=a+b\\1=a\phi+b\bar\phi\end{cases}$$ Despejando, $b=-a$ y $a(\phi-\bar\phi)=1$; como $\phi-\bar\phi=\sqrt5$, $$a=\frac{1}{\sqrt5},\qquad b=-\frac{1}{\sqrt5},\qquad f_n=\frac{\phi^n-\bar\phi^{\,n}}{\sqrt5}.$$

^e1900e

>[!important] Fin del teorema de estructura
>En el manuscrito: «Fin del teorema de estructuras — **hasta acá entra al final seguro**».
>Debajo empieza otro tema, que queda cortado en la foto (se llega a leer algo como $\mathbb Z[\varepsilon]\cong\mathbb Z[x]/\cdots$).


## Fotos originales

![[Teorico 19 - pagina 1.jpg]]

![[Teorico 19 - pagina 2.jpg]]

![[Teorico 19 - pagina 3.jpg]]

![[Teorico 19 - pagina 4.jpg]]

