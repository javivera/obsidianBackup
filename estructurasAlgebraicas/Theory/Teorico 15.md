---
tags:
  - AlgebraicStructures
  - Modules
  - Representations
source: "Últimas cuatro fotos enviadas por Sofía por WhatsApp el 2026-10-14; fecha de la clase no indicada"
---

# Teórico 15 — Módulos semisimples, teorema de Maschke y lema de Schur

>[!remark] Fuente y criterios de transcripción
>Transcripción de las últimas cuatro fotos del envío de Sofía: [[Teorico 15 - pagina 1.jpg|página 1]], [[Teorico 15 - pagina 2.jpg|página 2]], [[Teorico 15 - pagina 3.jpg|página 3]] y [[Teorico 15 - pagina 4.jpg|página 4]]. Continúa [[Teorico 14]]. La fecha de esta clase no está indicada.
>Se desarrollan las verificaciones esbozadas y se corrigen las hipótesis omitidas. En particular, la suma de anillos de los ejemplos es finita, y Maschke requiere que $|G|\,1_{\mathbb k}\neq0$. El manuscrito anuncia para la clase siguiente la implicación «suma de simples implica suma directa de simples», y no incluye la segunda demostración de Schur: ambas se completan aquí y se señalan como tales. Los ejercicios quedan sin resolver.

## 1. Recordatorio: módulos simples

>[!remark] Simplicidad y generación por un elemento
>Por [[Teorico 14#^e14005|módulos simples]], un $R$-módulo $S$ es simple si $S\neq0$ y no tiene submódulos propios no nulos. Equivalentemente, $S\neq0$ y $Rs=S$ para todo $0\neq s\in S$.
>En efecto, si $S$ es simple, $Rs$ es un submódulo no nulo y debe ser $S$. Recíprocamente, si todo elemento no nulo genera $S$ y $0\neq N\leq_R S$, tomar $0\neq s\in N$ da $S=Rs\subseteq N$.
>Para cualquier $0\neq s\in S$, el epimorfismo $R\to S$, $r\mapsto rs$, identifica $S$ con $R/I$, donde $I$ es su núcleo. Por [[Teorico 14#^e14006|cociente simple y maximalidad]], $I$ es un ideal a izquierda maximal.

## 2. Módulos simples sobre un anillo de matrices

>[!definition] Módulo de columnas
>Sea $D$ un anillo de división, sea $n\geq1$ y escribamos $A=M_n(D)$. El **módulo de columnas** es el grupo aditivo $D^n$ con la acción de $A$ dada por multiplicación de matrices por columnas: $$B\cdot v=Bv,\qquad B\in A,\ v\in D^n.$$

>[!proposition] El módulo de columnas es simple
>El $M_n(D)$-módulo $D^n$ es simple.
>
>>[!Proof]-
>>1. Sea $0\neq N\leq_A D^n$ y sea $m=(m_1,\ldots,m_n)^t\in N$ no nulo. Existe $j$ con $m_j\neq0$, y $m_j$ es invertible en $D$.
>>2. Si $E_{ij}$ es la matriz elemental con un $1$ en la posición $(i,j)$, entonces $E_{ij}m$ tiene coordenada $m_j$ en $i$ y cero en las demás. Por tanto, $$(m_j^{-1}E_{ij})m=e_i\in N$$ para todo $i$.
>>3. Para $d\in D$, $(dE_{ii})e_i=de_i\in N$. Todo vector es una suma $\sum_i d_ie_i$, así que pertenece a $N$. Concluimos $N=D^n$.

^e15001

>[!proposition] Ideales a izquierda de $M_n(D)$
>Si $V$ es un subespacio a izquierda sobre $D$ del espacio de filas $D^{1\times n}$, definimos $$L_V=\{B\in M_n(D):\text{cada fila de }B\text{ pertenece a }V\}.$$ Los ideales a izquierda de $M_n(D)$ son exactamente los $L_V$. La correspondencia $V\mapsto L_V$ preserva inclusiones; los ideales a izquierda maximales corresponden a subespacios $V$ de dimensión $n-1$.
>
>>[!Proof]-
>>1. $L_V$ es un subgrupo aditivo. Si $B\in L_V$ y $C\in M_n(D)$, la fila $i$ de $CB$ es $\sum_j c_{ij}\operatorname{fila}_j(B)$, una combinación lineal a izquierda de filas de $B$. Pertenece a $V$, de modo que $CB\in L_V$.
>>2. Sea ahora $L$ un ideal a izquierda, y sea $V$ el conjunto de filas que aparecen como primera fila de matrices de $L$. Es un subespacio a izquierda: la suma de matrices y la multiplicación por $dE_{11}$ realizan suma y multiplicación escalar de primeras filas.
>>3. Para $B\in L$, la matriz $E_{1j}B\in L$ tiene como primera fila la fila $j$ de $B$. Por tanto, todas las filas de $B$ están en $V$ y $L\subseteq L_V$.
>>4. Si $v\in V$, existe $B\in L$ cuya primera fila es $v$. La matriz $E_{i1}B$ tiene como única fila posiblemente no nula la fila $i$, igual a $v$. Sumando matrices de este tipo, cualquier matriz cuyas filas estén en $V$ pertenece a $L$. Así, $L=L_V$.
>>5. La construcción permite recuperar $V$ a partir de $L_V$, y $V\subseteq W$ equivale a $L_V\subseteq L_W$. Un subespacio propio de $D^{1\times n}$ es maximal precisamente cuando tiene dimensión $n-1$: por [[Teorico 14#^e14007|extensión de bases]], si faltan dos o más vectores de una base puede agregarse uno sin llegar al espacio total; si falta solo uno, cualquier ampliación propia ya genera todo el espacio.

^e15002

>[!theorem] Unicidad del módulo simple de matrices
>Todo $M_n(D)$-módulo simple es isomorfo a $D^n$. La unicidad se entiende salvo isomorfismo.
>
>>[!Proof]-
>>1. Sea $S$ simple y elijamos $0\neq s\in S$. La aplicación $\varphi:A\to S$, $B\mapsto Bs$, es un epimorfismo y su núcleo es un ideal a izquierda maximal. Por [[Teorico 15#^e15002|ideales a izquierda de matrices]], $\ker\varphi=L_V$ con $\dim_D V=n-1$.
>>2. Extendemos una base de $V$ a una base del espacio de filas. Definimos una aplicación $D$-lineal a izquierda $\lambda:D^{1\times n}\to D$ que vale cero en los vectores de la base de $V$ y vale $1$ en el vector añadido. Entonces $\ker\lambda=V$.
>>3. Si $f_j$ es la fila canónica $j$ y $v_j=\lambda(f_j)$, la linealidad da $\lambda(r_1,\ldots,r_n)=\sum_jr_jv_j$. Para la columna no nula $v=(v_1,\ldots,v_n)^t$, obtenemos $$V=\{r\in D^{1\times n}:rv=0\}.$$
>>4. La aplicación $\psi:A\to D^n$, $B\mapsto Bv$, es $A$-lineal y $\ker\psi=L_V$. Es sobreyectiva: su imagen es un submódulo no nulo de $D^n$, que es simple por [[Teorico 15#^e15001|simplicidad del módulo de columnas]].
>>5. Aplicando [[Teorico 13#^e1300f|primer teorema de isomorfismo]] a $\varphi$ y a $\psi$, obtenemos $$S\cong A/L_V\cong D^n.$$

^e15003

>[!remark] Descomposición de la representación regular
>El anillo $M_n(D)$, considerado como módulo a izquierda sobre sí mismo, se identifica con una suma directa de $n$ copias del módulo de columnas: $$M_n(D)\cong\underbrace{D^n\oplus\cdots\oplus D^n}_{n\text{ copias}},\qquad B\longmapsto(\operatorname{col}_1(B),\ldots,\operatorname{col}_n(B)).$$ Es la descomposición por columnas; no se afirma que sea una descomposición de anillos.

>[!exercise] Linealidad de la descomposición por columnas
>Verificar que la aplicación anterior es un isomorfismo de $M_n(D)$-módulos.

## 3. Módulos semisimples

>[!definition] Módulo semisimple
>Un $R$-módulo $M$ es **semisimple** si es isomorfo a una suma directa de módulos simples: $$M\cong\bigoplus_{i\in I}S_i.$$ Se admite $I=\varnothing$, de modo que el módulo cero es semisimple.

^e15004

>[!remark] Sumas directas de módulos semisimples
>Si cada $M_j$ es semisimple y $M_j\cong\bigoplus_{i\in I_j}S_{j,i}$, entonces $$\bigoplus_{j\in J}M_j\cong\bigoplus_{(j,i):\,j\in J,\,i\in I_j}S_{j,i}.$$ La identificación conserva cada coordenada: el soporte finito en ambos niveles equivale al soporte finito en el conjunto de pares. Por tanto, una suma directa de módulos semisimples es semisimple.

>[!theorem] Caracterizaciones de la semisimplicidad
>Para un $R$-módulo $M$, son equivalentes:
>1. $M$ es semisimple.
>2. $M$ es suma de submódulos simples: $M=\sum_{i\in I}S_i$, sin exigir que la suma sea directa.
>3. Todo submódulo $N\leq_R M$ tiene un complemento: existe $U\leq_R M$ tal que $M=N\oplus U$.
>
>>[!Proof]-
>>- **$(1\Rightarrow2)$**
>>	1. Una suma directa es, en particular, una suma; basta tomar las imágenes de los sumandos simples en $M$.
>>- **$(2\Rightarrow3)$**
>>	1. Escribamos $M=\sum_{i\in I}S_i$ y fijemos $N\leq_R M$. Consideramos los subconjuntos $J\subseteq I$ para los cuales la suma $U_J=\sum_{j\in J}S_j$ es directa y $U_J\cap N=0$. El vacío cumple estas condiciones.
>>	2. Ordenamos esos subconjuntos por inclusión. La unión de una cadena también cumple ambas condiciones: cualquier relación entre sumandos, o cualquier elemento de la intersección con $N$, utiliza solo finitísimos índices; todos están en un mismo miembro de la cadena. Por Zorn existe un subconjunto maximal $J$; ponemos $U=U_J$.
>>	3. Si $M\neq N+U$, alguno de los $S_i$ no está contenido en $N+U$, pues todos juntos generan $M$. Como $S_i$ es simple, $S_i\cap(N+U)$ es $0$ o $S_i$; la segunda posibilidad contradice la elección de $i$. Luego $S_i\cap(N+U)=0$.
>>	4. Así, $U+S_i$ es una suma directa y también tiene intersección cero con $N$: si $u+s\in N$, entonces $s\in S_i\cap(N+U)=0$ y $u\in U\cap N=0$. Agregar $i$ contradice la maximalidad de $J$.
>>	5. Por tanto, $M=N+U$, y como $N\cap U=0$, obtenemos $M=N\oplus U$.
>>- **$(2\Rightarrow1)$ — completación de la implicación pospuesta en el manuscrito.**
>>	1. Aplicamos la construcción anterior con $N=0$. Se obtiene $M=\bigoplus_{j\in J}S_j$, que es precisamente la semisimplicidad.
>>- **$(3\Rightarrow2)$**
>>	1. Primero verificamos que la condición (3) se hereda a submódulos. Sean $T\leq_R N\leq_R M$ y $M=T\oplus U$. Para $n\in N$, escribimos $n=t+u$. Como $n,t\in N$, también $u\in N$, y $$N=T\oplus(U\cap N).$$
>>	2. Sea $0\neq N\leq_R M$ y elijamos $0\neq m\in N$. El módulo cíclico $C=Rm$ es isomorfo a $R/I$, donde $I=\{r\in R:rm=0\}$ es un ideal a izquierda propio. Existe un ideal a izquierda maximal $L\supseteq I$: por Zorn, la unión de una cadena de ideales propios que contienen a $I$ sigue siendo propia, pues si contuviese a $1_R$, alguno de los miembros ya contendría a $1_R$.
>>	3. Sea $T\leq_R C$ el submódulo correspondiente a $L/I$. Por [[Teorico 13#^e13012|correspondencia de submódulos]], $C/T$ es simple. Por el paso 1, $T$ tiene un complemento $S$ en $C$, y la restricción de la proyección da $S\cong C/T$. Así, $N$ contiene un submódulo simple no nulo.
>>	4. Definimos el **zócalo** de $M$ por $$\operatorname{soc}(M)=\sum_{S\leq_R M,\,S\text{ simple}}S.$$ Es un submódulo, de modo que por (3) tiene un complemento $N$: $M=\operatorname{soc}(M)\oplus N$.
>>	5. Si $N\neq0$, el paso 3 produce un submódulo simple no nulo $S\leq_R N$. Por definición, $S\subseteq\operatorname{soc}(M)$, contradiciendo que la intersección de los dos sumandos es cero. Luego $N=0$ y $M=\operatorname{soc}(M)$, una suma de simples.

^e15005

>[!remark] El zócalo
>El zócalo $\operatorname{soc}(M)$ es la suma de todos los submódulos simples de $M$. La demostración anterior muestra que $M$ es semisimple si y solo si $\operatorname{soc}(M)=M$.

## 4. Teorema de Maschke

>[!theorem] Maschke
>Sean $G$ un grupo finito y $\mathbb k$ un cuerpo. Si $|G|\,1_{\mathbb k}\neq0$, entonces $\mathbb k[G]$ es semisimple como módulo a izquierda sobre sí mismo. Más generalmente, todo $\mathbb k[G]$-módulo es semisimple.
>La condición equivale a que $\operatorname{char}\mathbb k=0$, o que $\operatorname{char}\mathbb k$ sea un primo que no divide $|G|$. No se exige que $\mathbb k$ sea algebraicamente cerrado.
>
>>[!Proof]-
>>1. Sea $M$ un $\mathbb k[G]$-módulo y sea $N\leq_{\mathbb k[G]}M$. Al restringir escalares mediante $\mathbb k\hookrightarrow\mathbb k[G]$, ambos son espacios vectoriales sobre $\mathbb k$. Por [[Teorico 14#^e14007|existencia de complementos sobre un cuerpo]], existe una proyección $\mathbb k$-lineal $\pi:M\to N$ con $\pi|_N=\operatorname{id}_N$; no tiene por qué ser $\mathbb k[G]$-lineal.
>>2. Sea $a=|G|\,1_{\mathbb k}$, que es invertible por la hipótesis. Definimos la proyección promediada $$\widehat\pi:M\longrightarrow N,\qquad\widehat\pi(m)=a^{-1}\sum_{g\in G}g\cdot\pi(g^{-1}\cdot m).$$ Cada término pertenece a $N$, porque $N$ es estable bajo $G$, y la suma es finita. La aplicación es $\mathbb k$-lineal porque cada operador que aparece en la suma lo es.
>>3. Para $h\in G$, cambiamos el índice mediante $g=hk$, que es una biyección de $G$. Entonces $$\begin{aligned}\widehat\pi(h\cdot m)&=a^{-1}\sum_{g\in G}g\cdot\pi((g^{-1}h)\cdot m)\\&=a^{-1}\sum_{k\in G}(hk)\cdot\pi(k^{-1}\cdot m)\\&=h\cdot\left(a^{-1}\sum_{k\in G}k\cdot\pi(k^{-1}\cdot m)\right)=h\cdot\widehat\pi(m).\end{aligned}$$ Aquí se usa que los escalares de $\mathbb k$ conmutan con los elementos de $G$ en [[Teorico 14#^e14008|álgebra de grupo]].
>>4. Si $b=\sum_h\lambda_hh\in\mathbb k[G]$, la linealidad sobre $\mathbb k$ y el paso 3 dan $$\widehat\pi(b\cdot m)=\sum_h\lambda_h\widehat\pi(h\cdot m)=\sum_h\lambda_hh\cdot\widehat\pi(m)=b\cdot\widehat\pi(m).$$ Por tanto, $\widehat\pi$ es un morfismo de módulos.
>>5. Para $n\in N$, también $g^{-1}\cdot n\in N$, de modo que $\pi(g^{-1}\cdot n)=g^{-1}\cdot n$. Luego $$\widehat\pi(n)=a^{-1}\sum_{g\in G}g\cdot(g^{-1}\cdot n)=a^{-1}\sum_{g\in G}n=a^{-1}an=n.$$ Así, $\widehat\pi|_N=\operatorname{id}_N$. En particular, $\widehat\pi^2=\widehat\pi$, porque la imagen de $\widehat\pi$ está en $N$.
>>6. Para todo $m\in M$, $$m=(m-\widehat\pi(m))+\widehat\pi(m),\qquad\widehat\pi(m-\widehat\pi(m))=0.$$ Esto da $M=\ker\widehat\pi+N$. Si $n\in\ker\widehat\pi\cap N$, el paso 5 da $0=\widehat\pi(n)=n$; por tanto, $$M=\ker\widehat\pi\oplus N.$$
>>7. Todo submódulo tiene un complemento, así que [[Teorico 15#^e15005|caracterizaciones de la semisimplicidad]] implica que $M$ es semisimple. Aplicándolo al módulo regular $M=\mathbb k[G]$, se obtiene el enunciado para el álgebra de grupo.

^e15006

## 5. Submódulos, cocientes y anillos semisimples

>[!example] Un módulo que no contiene ningún submódulo simple
>El $\mathbb Z$-módulo $\mathbb Z$ no contiene submódulos simples. Sus submódulos no nulos son $d\mathbb Z$, con $d\geq1$, y cada uno contiene al submódulo propio no nulo $2d\mathbb Z$.
>
>>[!Proof]-
>>1. Sea $0\neq N\leq_{\mathbb Z}\mathbb Z$. Elegimos el menor entero positivo $d\in N$, que existe porque si $a\in N$ es no nulo, uno de $a,-a$ es positivo.
>>2. Para $m\in N$, la división euclídea da $m=qd+r$ con $q\in\mathbb Z$ y $0\leq r<d$. Como $r=m-qd\in N$, la minimalidad de $d$ obliga a $r=0$. Por tanto, $N=d\mathbb Z$.
>>3. El submódulo $2d\mathbb Z$ es no nulo y está contenido en $d\mathbb Z$. Es propio: si $d=2dj$ para algún $j\in\mathbb Z$, cancelar $d\neq0$ da $1=2j$, imposible. Luego $N$ no es simple.

>[!corollary] Submódulos y cocientes de módulos semisimples
>Si $M$ es semisimple y $N\leq_R M$, entonces $N$ y $M/N$ son semisimples.
>
>>[!Proof]-
>>1. Por [[Teorico 15#^e15005|caracterizaciones de la semisimplicidad]], todo submódulo de $M$ tiene complemento. La verificación de que esa propiedad se hereda a $N$, incluida en la demostración del mismo resultado, permite aplicarlo de nuevo: $N$ es semisimple.
>>2. Elegimos $U$ con $M=N\oplus U$. La proyección $M\to M/N$ restringida a $U$ es sobreyectiva porque todo $m=n+u$ tiene la misma clase que $u$, y es inyectiva porque $U\cap N=0$. Es $R$-lineal, así que $M/N\cong U$. Por el paso 1, $U$ y por tanto $M/N$ son semisimples.

^e15007

>[!exercise] Imagen epimorfa
>Si $M$ es semisimple y $f:M\to N$ es un epimorfismo de $R$-módulos, demostrar que $N$ es semisimple.

>[!definition] Anillo semisimple
>Un anillo $R$ es **semisimple** si su módulo regular a izquierda ${}_RR$ es semisimple.

^e15008

>[!example] Ejemplos de anillos semisimples
>1. Todo cuerpo es semisimple: su módulo regular es simple.
>2. Todo anillo de división es semisimple por el mismo argumento: si un ideal a izquierda contiene $d\neq0$, contiene $d^{-1}d=1$ y es todo el anillo.
>3. $M_n(D)$ es semisimple para todo anillo de división $D$ y $n\geq1$: su módulo regular es la suma directa de sus $n$ módulos de columnas, simples por [[Teorico 15#^e15001|simplicidad del módulo de columnas]].
>4. Si $R_1,\ldots,R_\ell$ son anillos semisimples, el producto finito $R_1\times\cdots\times R_\ell$ es semisimple. El manuscrito escribe también $\bigoplus_{i=1}^{\ell}R_i$; para una familia finita coincide con el producto.
>5. En particular, si $D_1,\ldots,D_\ell$ son anillos de división, entonces $$M_{n_1}(D_1)\times\cdots\times M_{n_\ell}(D_\ell)$$ es semisimple.
>
>>[!Proof]- Justificación del producto finito
>>1. Sea $R=\prod_{i=1}^{\ell}R_i$, y sea $e_i$ el elemento con $1_{R_i}$ en la coordenada $i$ y ceros en las demás. El módulo regular se descompone como $$R=\bigoplus_{i=1}^{\ell}Re_i.$$ Cada sumando se identifica con $R_i$, con acción de $R$ a través de la proyección $R\to R_i$.
>>2. Si un sumando simple de $R_i$ se considera como $R$-módulo por esa proyección, sus submódulos son exactamente los mismos: todo elemento de $R_i$ se obtiene como coordenada de algún elemento de $R$. Así, sigue siendo simple.
>>3. Las descomposiciones semisimples de los $R_i$ dan una descomposición del módulo regular $R$ en simples. La finitud asegura que $R$ es un anillo con unidad; una suma directa infinita de anillos no nulos no tiene, en general, unidad.

>[!proposition] Semisimplicidad del anillo y de todos sus módulos
>Son equivalentes:
>1. $R$ es un anillo semisimple.
>2. Todo $R$-módulo es semisimple.
>
>>[!Proof]-
>>- **$(2\Rightarrow1)$**
>>	1. Aplicamos (2) al módulo regular ${}_RR$ y usamos [[Teorico 15#^e15008|anillo semisimple]].
>>- **$(1\Rightarrow2)$**
>>	1. Si $R$ es semisimple como módulo, también lo es cualquier suma directa $R^{(I)}$, porque las sumas directas de módulos semisimples son semisimples.
>>	2. Dado un $R$-módulo $M$, por [[Teorico 14#^e14003|todo módulo es cociente de un libre]] existe un epimorfismo $R^{(I)}\to M$. Por [[Teorico 13#^e1300f|primer teorema de isomorfismo]], $M$ es isomorfo a un cociente de $R^{(I)}$.
>>	3. Aplicamos [[Teorico 15#^e15007|cocientes de módulos semisimples]] y concluimos que $M$ es semisimple.

^e15009

## 6. Lema de Schur

>[!theorem] Lema de Schur
>Sean $M,N$ módulos simples sobre un anillo $R$ y sea $f:M\to N$ un morfismo.
>1. Si $f\neq0$, entonces $f$ es un isomorfismo.
>2. $\operatorname{End}_R(M)$ es un anillo de división.
>
>>[!Proof]-
>>- **(1)**
>>	1. El núcleo es un submódulo de $M$. Como $f\neq0$, no puede ser todo $M$; por simplicidad, $\ker f=0$ y $f$ es inyectiva.
>>	2. La imagen es un submódulo no nulo de $N$, de modo que $\operatorname{Im}f=N$ y $f$ es sobreyectiva.
>>	3. La inversa de un morfismo biyectivo es $R$-lineal: si $y=f(x)$, $z=f(w)$ y $r\in R$, entonces $$f^{-1}(y+z)=x+w=f^{-1}(y)+f^{-1}(z),\qquad f^{-1}(ry)=rx=rf^{-1}(y).$$ Por tanto, $f$ es un isomorfismo de módulos.
>>- **(2) — completación de la demostración ausente en las fotos.**
>>	1. Los endomorfismos forman un anillo con suma puntual y composición, cuya unidad es $\operatorname{id}_M$. Esta unidad no es cero porque $M\neq0$.
>>	2. Si $0\neq u\in\operatorname{End}_R(M)$, el inciso (1) aplicado con $N=M$ muestra que $u$ tiene una inversa $R$-lineal. Esa inversa pertenece al mismo anillo y satisface $u^{-1}u=uu^{-1}=\operatorname{id}_M$.
>>	3. Todos los elementos no nulos son invertibles; luego $\operatorname{End}_R(M)$ es un anillo de división. No se afirma que sea conmutativo.

^e1500a
