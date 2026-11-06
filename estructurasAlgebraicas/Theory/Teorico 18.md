---
tags:
  - AlgebraicStructures
  - Modules
  - ProjectiveModules
  - Torsion
source: "Fotos enviadas por Sofía por WhatsApp el 2026-10-30 (páginas 1 a 3 de 7); fecha de la clase no indicada"
---

# Teórico 18 — Proyectivos sobre un DIP, anillos semisimples y torsión

>[!remark] Fuente y criterios de transcripción
>Transcripción de las tres primeras fotos que mandó Sofía el 30/10: [[Teorico 18 - pagina 1.jpg|página 1]], [[Teorico 18 - pagina 2.jpg|página 2]] y [[Teorico 18 - pagina 3.jpg|página 3]]. Continúa [[Teorico 17]] y sigue en [[Teorico 19]]. La separación entre las dos clases es una inferencia: la página 4 empieza con un ejercicio del práctico y un «repaso», y eso marca el comienzo de otra clase.
>La primera página empieza con la demostración de un lema cuyo enunciado no está en las fotos; se reconstruye a partir de la prueba. Se completan las verificaciones esbozadas y se corrigen algunas erratas: en la propiedad 2 de la torsión aparece $\operatorname{Ann}(M)$ en lugar de $\operatorname{Ann}(m)$, y en la propiedad 4 se pide $j<i$, no $j\leq i$.

Trabajamos con anillos con unidad y módulos unitarios a izquierda. Desde la sección 2 en adelante, $R$ es un dominio de ideales principales (DIP), en particular conmutativo.

## 1. Submódulos de libres y proyectivos sobre un DIP

>[!lemma] Submódulos de un libre de rango finito sobre un DIP
>Sea $R$ un DIP y sea $M$ un submódulo de $R^n$. Entonces $M$ es libre y $M\cong R^m$ con $m\leq n$.
>
>>[!Proof]-
>>Hacemos inducción en $n$.
>>- **Caso base ($n=1$).** $M\subseteq R$ es un ideal; como $R$ es DIP, $M=\langle a\rangle$. Si $a=0$, entonces $M=0\cong R^0$. Si $a\neq0$, el morfismo $R\to\langle a\rangle$, $r\mapsto ra$, es sobreyectivo, y es inyectivo porque $ra=0$ con $a\neq0$ obliga a $r=0$ en un dominio. Así, $M\cong R$.
>>- **Paso inductivo.** Supongamos el resultado para $n-1$ y sea $M\subseteq R^n$. Consideramos $$\pi:R^n\to R,\qquad \pi(r_1,\dots,r_n)=r_n.$$
>>	1. $\pi(M)$ es un ideal de $R$, de modo que $\pi(M)=\langle a\rangle$ para algún $a\in R$.
>>	2. **Si $a=0$**, todo elemento de $M$ tiene última coordenada nula: $M\subseteq R^{n-1}\times\{0\}\cong R^{n-1}$. Por hipótesis inductiva, $M\cong R^m$ con $m\leq n-1<n$.
>>	3. **Si $a\neq0$**, elegimos $y\in M$ con $\pi(y)=a$ y definimos $$\sigma:\langle a\rangle\to M,\qquad \sigma(ra)=ry.$$ Está bien definida: si $ra=sa$, entonces $(r-s)a=0$ y, como $a\neq0$ y $R$ es dominio, $r=s$. Es $R$-lineal y cumple $\pi(\sigma(ra))=\pi(ry)=r\pi(y)=ra$, es decir, $\pi\circ\sigma=\operatorname{id}_{\langle a\rangle}$.
>>	4. Sea $M_0=\ker(\pi|_M)$. Veamos que $M=M_0\oplus\sigma(\langle a\rangle)$:
>>		- Todo $x\in M$ se escribe $x=\bigl(x-\sigma\pi(x)\bigr)+\sigma\pi(x)$, y el primer sumando está en $M_0$ porque $\pi\bigl(x-\sigma\pi(x)\bigr)=\pi(x)-\pi(x)=0$.
>>		- Si $x\in M_0\cap\sigma(\langle a\rangle)$, entonces $x=\sigma(b)$ con $b\in\langle a\rangle$ y $0=\pi(x)=\pi\sigma(b)=b$; luego $x=\sigma(0)=0$.
>>	5. $\sigma$ es inyectiva (pues $\pi\sigma=\operatorname{id}$), de modo que $\sigma(\langle a\rangle)\cong\langle a\rangle\cong R$ por el caso base. Además, $M_0\subseteq R^{n-1}\times\{0\}$; por hipótesis inductiva, $M_0\cong R^m$ con $m\leq n-1$.
>>	6. Por lo tanto, $M\cong R^m\oplus R=R^{m+1}$, con $m+1\leq n$.

^e18001

>[!corollary] Consecuencia del lema
>Sea $R$ un DIP. Todo submódulo de un módulo isomorfo a $R^n$ es finitamente generado, con a lo sumo $n$ generadores.
>
>>[!Proof]-
>>1. Transportando por el isomorfismo, podemos suponer que el submódulo $M$ está contenido en $R^n$.
>>2. Por [[Teorico 18#^e18001|el lema]], $M\cong R^m$ con $m\leq n$. La imagen de la base canónica de $R^m$ por ese isomorfismo genera $M$ y tiene $m\leq n$ elementos.

^e18002

>[!theorem] Proyectivos finitamente generados sobre un DIP
>Si $R$ es un DIP, todo $R$-módulo proyectivo finitamente generado es libre.
>
>>[!Proof]-
>>1. Sea $P$ proyectivo y generado por $k$ elementos $p_1,\dots,p_k$. El morfismo $\phi:R^k\to P$, $\phi(r_1,\dots,r_k)=\sum_i r_ip_i$, es un epimorfismo.
>>2. Por [[Teorico 17#^e17008|existencia de secciones]], existe $i:P\to R^k$ con $\phi\circ i=\operatorname{id}_P$. En particular, $i$ es inyectiva, de modo que $P\cong\operatorname{Im}i\subseteq R^k$.
>>3. Por [[Teorico 18#^e18001|el lema anterior]], $\operatorname{Im}i$ es libre; por lo tanto, $P$ es libre.

^e18003

## 2. Anillos semisimples: todos los módulos son proyectivos

>[!theorem] Caracterización de los anillos semisimples por proyectividad
>Sea $R$ un anillo arbitrario. Son equivalentes:
>1. $R$ es semisimple, es decir, el módulo regular ${}_RR$ es suma (directa) de simples.
>2. Todo $R$-módulo es proyectivo.
>
>>[!Proof]-
>>- **($2\Rightarrow1$)** Por [[Teorico 15#^e15005|caracterizaciones de la semisimplicidad]], un módulo es semisimple si y solo si todo submódulo es sumando directo. Basta, entonces, ver que todo submódulo de ${}_RR$ tiene complemento.
>>	1. Sea $I\subseteq R$ un submódulo, es decir, un ideal a izquierda. Por hipótesis, $R/I$ es proyectivo. Aplicando [[Teorico 17#^e17008|existencia de secciones]] a la proyección canónica $\pi:R\to R/I$, obtenemos $s:R/I\to R$ con $\pi\circ s=\operatorname{id}_{R/I}$.
>>	2. Para cada $r\in R$, $$\pi\bigl(r-s\pi(r)\bigr)=\pi(r)-\pi s\pi(r)=\pi(r)-\pi(r)=0,$$ de modo que $r-s\pi(r)\in\ker\pi=I$. Como en la demostración de [[Teorico 17#^e1700c|caracterización de los proyectivos]], la aplicación $$R\to I\oplus R/I,\qquad r\mapsto\bigl(r-s\pi(r),\,\pi(r)\bigr)$$ es un isomorfismo, y $R=I\oplus s(R/I)$ como submódulos.
>>	3. Así, $I$ tiene complemento $s(R/I)$. Como $I$ era arbitrario, $R$ es semisimple.
>>- **($1\Rightarrow2$)** Por [[Teorico 15#^e15009|semisimplicidad del anillo y de todos sus módulos]], todo $R$-módulo es semisimple, o sea, suma directa de simples. Hay que ver que es proyectivo, y la idea es probar:
>>	- **(A)** todo módulo simple es proyectivo;
>>	- **(B)** una suma directa de proyectivos es proyectiva.
>>
>>	Con (A) y (B), todo módulo, al ser suma directa de simples, resulta proyectivo.
>>	- **(A)** Sean $S$ simple, $\pi:M\to N$ un epimorfismo y $f:S\to N$ un morfismo.
>>		1. Si $f=0$, sirve $h=0$.
>>		2. Si $f\neq0$, $\ker f$ es un submódulo propio de $S$, luego nulo: $f$ es inyectiva y $f(S)\cong S$ es un simple dentro de $N$.
>>		3. La idea del manuscrito es «tomar una preimagen» de esa copia de $S$ en $M$. Para hacerlo con precisión, usamos que $M$ es semisimple: el submódulo $\ker\pi$ tiene un complemento $U$, con $M=\ker\pi\oplus U$.
>>		4. La restricción $\pi|_U:U\to N$ es un isomorfismo. Es inyectiva porque $U\cap\ker\pi=0$; es sobreyectiva porque, si $n=\pi(m)$ con $m=k+u$, $k\in\ker\pi$, $u\in U$, entonces $n=\pi(u)$.
>>		5. Definimos $h=(\pi|_U)^{-1}\circ f:S\to U\subseteq M$. Entonces $\pi\circ h=\pi|_U\circ(\pi|_U)^{-1}\circ f=f$, y $S$ es proyectivo.
>>	- **(B)** Sean $P_j$ proyectivos para $j\in J$ y $P=\bigoplus_{j}P_j$, con inclusiones canónicas $\iota_\ell:P_\ell\to P$. Sean $\pi:M\to N$ un epimorfismo y $f:P\to N$.
>>		1. Para cada $\ell$, como $P_\ell$ es proyectivo, existe $h_\ell:P_\ell\to M$ con $\pi\circ h_\ell=f\circ\iota_\ell$.
>>		2. Por la propiedad universal de la suma directa ([[Teorico 13#^e1300c|suma directa]]), existe un único $h:P\to M$ con $h\circ\iota_\ell=h_\ell$ para todo $\ell$.
>>		3. Para todo $\ell$, $$\pi\circ h\circ\iota_\ell=\pi\circ h_\ell=f\circ\iota_\ell.$$ Los morfismos $\pi\circ h$ y $f$ coinciden sobre cada sumando; por la unicidad en la propiedad universal, $\pi\circ h=f$. Así, $P$ es proyectivo.

^e18004

>[!remark] Recordatorio usado en el manuscrito
>En el argumento de (A), el manuscrito recuerda que $\operatorname{Hom}(S,\tilde S)=0$ si $S\not\cong\tilde S$ ([[Teorico 15#^e1500a|lema de Schur]]): si $\varphi\neq0$, la copia de $S$ que aparece en $N$ tiene que venir de algún sumando $S_d\cong S$ de $M$. La prueba de arriba evita elegir ese sumando a mano usando un complemento de $\ker\pi$.

>[!example] $\Bbbk[x]/\langle x^2\rangle$ no es semisimple
>Sea $\Bbbk$ un cuerpo y $R=\Bbbk[x]/\langle x^2\rangle$, con base $\{\bar1,\bar x\}$ como $\Bbbk$-espacio vectorial.
>1. **¿Cómo encontramos un módulo simple?** Por [[Teorico 13#^e13012|correspondencia de submódulos]], los ideales de $R$ son de la forma $J/\langle x^2\rangle$ con $\langle x^2\rangle\subseteq J\subseteq\Bbbk[x]$. Como $\Bbbk[x]$ es DIP, $J=\langle p\rangle$, y $x^2\in J$ significa $p\,q=x^2$ para algún $q$. Salvo unidades, $p\in\{1,x,x^2\}$. Entonces los ideales de $R$ son $R$, $I=\langle x\rangle/\langle x^2\rangle$ y $0$.
>2. **$I$ es simple.** $I=\Bbbk\bar x$ tiene dimensión $1$ sobre $\Bbbk$; todo submódulo es en particular un subespacio, así que es $0$ o $I$. Además, por el tercer teorema de isomorfismo ([[Teorico 13#^e13011|tercer teorema de isomorfismo]]), $$R/I=\frac{\Bbbk[x]/\langle x^2\rangle}{\langle x\rangle/\langle x^2\rangle}\cong\Bbbk[x]/\langle x\rangle\cong\Bbbk,$$ que también es simple; es decir, $\langle x\rangle$ es maximal. Tenemos $I\hookrightarrow R$.
>3. **$R$ es proyectivo pero indescomponible.** $R$ es proyectivo por ser libre ([[Teorico 17#^e17009|todo libre es proyectivo]]). Es indescomponible: si $R=A\oplus B$ con $A,B\neq0$, ninguno puede ser $R$ (si $A=R$, entonces $A\cap B=B\neq0$), así que ambos serían ideales propios no nulos, es decir, $A=B=I$, pero entonces $A\cap B=I\neq0$, absurdo.
>4. **Conclusión.** Si $R$ fuera semisimple, el submódulo $I$ tendría un complemento $L$ con $R=I\oplus L$ y $L\neq0$, lo que contradice la indescomponibilidad. Por lo tanto, $R$ no es semisimple. En particular, por [[Teorico 18#^e18004|el teorema]], hay $R$-módulos que no son proyectivos (por ejemplo, $I\cong R/I\cong\Bbbk$).

^e18005

## 3. Hacia el teorema de estructura: torsión

>[!remark] Convención
>De ahora en más, $R$ es un DIP hasta llegar al teorema de estructura. Queremos imitar la teoría de los $\mathbb Z$-módulos (grupos abelianos), donde aparecen dos tipos de módulos: $\mathbb Z_n$ y $\mathbb Z^\ell$. Por ejemplo, en $\mathbb Z\times\mathbb Z_n\to\mathbb Z_n$, $m\cdot\bar r=\overline{mr}$, se tiene $n\cdot\bar r=\overline{nr}=\bar0$: un entero no nulo anula todo $\mathbb Z_n$, algo que no pasa en $\mathbb Z^\ell$.

>[!definition] Anulador y torsión
>Sea $M$ un $R$-módulo y $S\subseteq M$ un subconjunto. El **anulador** de $S$ es $$\operatorname{Ann}(S)=\{r\in R: rs=0\ \text{para todo}\ s\in S\}.$$ Para $m\in M$ escribimos $\operatorname{Ann}(m)=\operatorname{Ann}(\{m\})$; es un ideal de $R$.
>La **torsión** de $M$ es $$\tau(M)=\{m\in M:\operatorname{Ann}(m)\neq0\}.$$ Decimos que $M$ es **de torsión** si $\tau(M)=M$ y **sin torsión** si $\tau(M)=0$.

^e18006

>[!proposition] Propiedades de la torsión
>Sea $R$ un DIP y $M$ un $R$-módulo.
>1. $\tau(M)$ es un submódulo de $M$.
>2. Si $m\in M$, entonces $R/\operatorname{Ann}(m)\cong Rm$.
>3. Si $p\in R$ es primo y $\langle p^i\rangle\subseteq\operatorname{Ann}(m)$, entonces $\operatorname{Ann}(m)=\langle p^j\rangle$ con $0\leq j\leq i$.
>4. Si $\operatorname{Ann}(m)=\langle p^i\rangle$, entonces $p^jm\neq0$ para $0\leq j<i$.
>
>>[!Proof]-
>>1. $0\in\tau(M)$, porque $\operatorname{Ann}(0)=R\neq0$. Si $m,n\in\tau(M)$, tomamos $r,s\neq0$ con $rm=0$ y $sn=0$. Entonces $rs\neq0$ (dominio) y $$rs(m+n)=s(rm)+r(sn)=0,$$ así que $m+n\in\tau(M)$. Para $a\in R$, $r(am)=a(rm)=0$, luego $am\in\tau(M)$.
>>2. El morfismo $\phi:R\to Rm$, $r\mapsto rm$, es sobreyectivo y $\ker\phi=\operatorname{Ann}(m)$. Aplicamos el [[Teorico 13#^e1300f|primer teorema de isomorfismo]].
>>3. Como $R$ es DIP, $\operatorname{Ann}(m)=\langle r\rangle$. De $p^i\in\langle r\rangle$ resulta $p^i=rx$ con $x\in R$, es decir, $r$ divide a $p^i$. Por factorización única ([[Teorico 11#^e11016|todo DIP es DFU]]), $r=u\,p^j$ con $u$ unidad y $0\leq j\leq i$, y $\langle r\rangle=\langle p^j\rangle$.
>>4. Contrarrecíproca: si $p^jm=0$, entonces $p^j\in\operatorname{Ann}(m)=\langle p^i\rangle$, o sea, $p^i$ divide a $p^j$. Como $p$ no es unidad, por factorización única esto obliga a $i\leq j$.

^e18007

>[!theorem] Finitamente generado y sin torsión implica libre
>Sea $R$ un DIP y $M$ un $R$-módulo finitamente generado con $\tau(M)=0$. Entonces $M$ es libre.
>
>>[!Proof]-
>>1. Si $M=0$ no hay nada que probar. Si no, sea $\{m_1,\dots,m_\ell\}$ un conjunto de generadores no nulos. Si $rm_j=0$, entonces $r\in\operatorname{Ann}(m_j)$; como $\tau(M)=0$ y $m_j\neq0$, $\operatorname{Ann}(m_j)=0$ y $r=0$.
>>2. Tomamos un subconjunto $S\subseteq\{m_1,\dots,m_\ell\}$ maximal con la propiedad $$\sum_{m_i\in S}r_im_i=0\ \Rightarrow\ r_i=0\ \text{para todo}\ i,$$ es decir, linealmente independiente. Existe porque el conjunto es finito y, por el paso 1, cualquier $\{m_j\}$ cumple la propiedad. Entonces $\langle S\rangle$ es libre: $\langle S\rangle\cong\bigoplus_{m_i\in S}Rm_i\cong R^{|S|}$. Queremos comparar $M$ con $\langle S\rangle$.
>>3. Sea $n\in\{m_1,\dots,m_\ell\}\setminus S$. Por maximalidad, $S\cup\{n\}$ es linealmente dependiente: existen $r,r_i\in R$, no todos nulos, con $$rn+\sum_{m_i\in S}r_im_i=0.$$ Tiene que ser $r\neq0$, porque si no tendríamos una relación no trivial entre los elementos de $S$. Luego $$rn=-\sum_{m_i\in S}r_im_i\in\langle S\rangle.$$
>>4. Sea $x$ el producto de los $r$ obtenidos en el paso 3 para cada $n\notin S$ ($x=1$ si $S$ son todos los generadores). Como $R$ es dominio, $x\neq0$, y $xm_i\in\langle S\rangle$ para todo $i$. Por lo tanto, $xM\subseteq\langle S\rangle$.
>>5. Sea $\phi:M\to M$, $\phi(m)=xm$. Es $R$-lineal porque $R$ es conmutativo, y $\ker\phi=0$ porque $xm=0$ con $x\neq0$ implica $m\in\tau(M)=0$. Así, $M\cong\operatorname{Im}\phi\subseteq\langle S\rangle\cong R^{|S|}$.
>>6. Por [[Teorico 18#^e18001|el lema]], $\operatorname{Im}\phi$ es un submódulo de un libre de rango finito, luego es libre. Por lo tanto, $M$ es libre.

^e18008

>[!theorem] Descomposición de un módulo finitamente generado en torsión y parte libre
>Sea $R$ un DIP y $M$ un $R$-módulo finitamente generado. Entonces $$M\cong\tau(M)\oplus F,$$ con $F$ libre y finitamente generado, y $F\cong M/\tau(M)$.
>
>>[!Proof]-
>>1. **$\tau\bigl(M/\tau(M)\bigr)=0$.** Para $r\in R$ y $m\in M$, $r\cdot\bar m=\overline{rm}$. Sea $\bar m\in\tau\bigl(M/\tau(M)\bigr)$: existe $r\neq0$ con $\overline{rm}=\bar0$, es decir, $rm\in\tau(M)$. Entonces existe $s\neq0$ con $s(rm)=0$; como $sr\neq0$, $m\in\tau(M)$ y $\bar m=\bar0$.
>>2. **$M/\tau(M)$ es finitamente generado.** Si $R^n\to M$ es un epimorfismo, al componerlo con la proyección $M\to M/\tau(M)$ obtenemos un epimorfismo $R^n\to M/\tau(M)$.
>>3. Por [[Teorico 18#^e18008|el teorema anterior]], $M/\tau(M)$ es libre, y por [[Teorico 17#^e17009|todo libre es proyectivo]] es proyectivo.
>>4. Por [[Teorico 17#^e17008|existencia de secciones]], la proyección $\pi:M\to M/\tau(M)$ tiene una sección $i$ con $\pi\circ i=\operatorname{id}$. Como en la demostración de [[Teorico 17#^e1700c|caracterización de los proyectivos]], $$M\cong\ker\pi\oplus M/\tau(M)=\tau(M)\oplus M/\tau(M).$$
>>5. Tomamos $F=M/\tau(M)$, que es libre y finitamente generado.

^e18009

>[!remark] Nota al margen del manuscrito
>Junto a este teorema dice «algo parecido en el parcial».


## Fotos originales

![[Teorico 18 - pagina 1.jpg]]

![[Teorico 18 - pagina 2.jpg]]

![[Teorico 18 - pagina 3.jpg]]

