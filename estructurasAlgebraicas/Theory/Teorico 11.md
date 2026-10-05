---
tags:
  - AlgebraicStructures
  - Rings
  - Factorization
source: "Cuatro fotos enviadas al chat propio de WhatsApp el 2026-10-04 a las 16:46"
---

# Teórico 11 — Ideales maximales, primos y factorización

>[!remark] Sobre la transcripción
>Esta clase se ubica después del Teórico 10 y antes del actual [[Teorico 12]]. La fecha de recepción de las fotos no determina la fecha de la clase. Las hojas se ordenan por contenido: cocientes y anillos de división; ideales de matrices y maximalidad; divisibilidad y factorización; DIP implica DFU. Se completan los argumentos que en las fotos quedaron abreviados o con dudas y se corrigen las erratas matemáticas. Se justifican también las equivalencias y el paso de inversa a izquierda a inversa bilateral, necesarios para las demostraciones. Los ejercicios sobre matrices con coeficientes en otro anillo y sobre cocientes de enteros gaussianos quedan sin resolver.

## 1. Ideales maximales y anillos de división

>[!definition] Ideal maximal a izquierda
>Un ideal a izquierda $M$ de un anillo $R$ es **maximal a izquierda** si $M\neq R$ y no existe un ideal a izquierda $I$ tal que $M\subsetneq I\subsetneq R$. Análogamente se define maximal a derecha. En un anillo conmutativo ambas nociones coinciden y hablamos de **ideal maximal**.

^e11001

>[!lemma] Anillos de división e ideales a izquierda
>Sea $R$ un anillo con $1\neq0$. Entonces $R$ es un anillo de división si y solo si sus únicos ideales a izquierda (derecha) son $\{0\}$ y $R$. 
>
>>[!Proof]-
>>- **($\Rightarrow$)**
>>	1. Sea $I$ un ideal a izquierda no nulo. Existe $x\in I$ con $x\neq0$; como $R$ es un anillo de división, $x$ tiene inversa y $1=x^{-1}x\in I$.
>>	2. Para todo $r\in R$, $r=r1\in I$. Luego $I=R$.
>>- **($\Leftarrow$)**
>>	1. Sea $r\neq0$. El conjunto $Rr=\{ar:a\in R\}$ es un ideal a izquierda: $(ar)-(br)=(a-b)r$ y $c(ar)=(ca)r$. Contiene a $r=1r$, por lo que es no nulo y necesariamente $Rr=R$.
>>	2. Así, existe $s\in R$ con $sr=1$. Falta justificar que $rs=1$: una inversa por un solo lado no basta en un anillo arbitrario.
>>	3. Sea $t=1-rs$. Entonces $tr=r-rsr=r-r(sr)=0$. Si $t\neq0$, el mismo argumento del paso 1 da $Rt=R$, de modo que existe $a\in R$ con $at=1$. Pero entonces $r=(at)r=a(tr)=0$, contradicción.
>>	4. Por tanto, $t=0$ y $rs=1$. Todo $r\neq0$ es invertible, luego $R$ es un anillo de división.
>>- **Ideales a derecha**
>>	1. La caracterización mediante ideales a derecha se demuestra análogamente, invirtiendo el orden de los productos en la prueba anterior.

^e11002

>[!theorem] Cociente de división y maximalidad
>Sea $M$ un ideal bilátero de $R$. Entonces $R/M$ es un anillo de división si y solo si $M$ es maximal como ideal a izquierda.
>
>>[!Proof]-
>>1. Sea $\pi:R\to R/M$ la proyección y sea $J$ un ideal a izquierda de $R/M$. Definimos su preimagen $$K=\pi^{-1}(J)=\{x\in R:\pi(x)\in J\}.$$ Verificaremos que $K$ es un ideal a izquierda de $R$ que contiene a $M$.
>>2. **Contiene a $0$.** Como $J$ es un ideal, $0\in J$. Entonces $\pi(0)=0\in J$, por lo que $0\in K$.
>>3. **Cierre bajo diferencias.** Si $x,y\in K$, entonces $\pi(x),\pi(y)\in J$. Como $J$ es un subgrupo aditivo y $\pi$ preserva la suma y los opuestos por ser morfismo, $$\pi(x-y)=\pi(x)-\pi(y)\in J.$$entonces por definición de $K$, $x-y\in K$. Junto con el paso 2, esto prueba que $K$ es un subgrupo aditivo de $R$.
>>4. **Absorción por la izquierda.** Si $r\in R$ y $x\in K$, tenemos $\pi(r)\in R/M$ y $\pi(x)\in J$. Como $J$ es un ideal a izquierda de $R/M$, $$\pi(rx)=\pi(r)\pi(x)\in J.$$ Por tanto, $rx\in K$. Por [[Teorico 10#^a7d291|ideales]], $K$ es un ideal a izquierda de $R$.
>>5. **Contiene a $M$.** Si $m\in M$, entonces $\pi(m)=0\in J$, así que $m\in K$. Luego $M\subseteq\pi^{-1}(J)$.
>>6. **Ahora pasamos de $R$ al cociente.** Sea $I$ un ideal a izquierda de $R$ que contiene a $M$. Definimos $$\pi(I)=\{\pi(x):x\in I\}=\{x+M:x\in I\}=I/M.$$ La última igualdad expresa que $I/M$ consiste precisamente en las clases con representantes en $I$. Verificaremos que este conjunto es un ideal a izquierda de $R/M$.
>>7. **Contiene a $0$ y es cerrado bajo diferencias.** Como $0\in I$, $\pi(0)=0\in\pi(I)$. Si $\pi(x),\pi(y)\in\pi(I)$, tomamos $x,y\in I$; como $I$ es un subgrupo aditivo, $x-y\in I$. Puesto que $\pi$ es un morfismo, $$\pi(x)-\pi(y)=\pi(x-y)\in\pi(I).$$ Por tanto, $\pi(I)$ es un subgrupo aditivo del cociente.
>>8. **Absorción por la izquierda en el cociente.** Sean $\alpha\in R/M$ y $\pi(x)\in\pi(I)$ con $x\in I$. Como $\pi$ es sobreyectiva, existe $r\in R$ con $\alpha=\pi(r)$. Como $I$ es un ideal a izquierda, $rx\in I$. Usando que $\pi$ preserva productos, $$\alpha\pi(x)=\pi(r)\pi(x)=\pi(rx)\in\pi(I).$$ Esto completa la verificación de que $\pi(I)$ es un ideal a izquierda de $R/M$.
>>9. **Qué ideales consideramos y para qué sirven las siguientes igualdades.** $I$ es un ideal a izquierda arbitrario de $R$ sujeto a la condición $M\subseteq I$, y $J$ es un ideal a izquierda arbitrario de $R/M$. No son ideales particulares ni suponemos que estén vinculados entre sí: estudiamos por separado qué ocurre al partir de $I$ o al partir de $J$. Los pasos 6 a 8 permiten enviar cualquier ideal a izquierda de $R$ a su imagen en el cociente, incluso si no contiene a $M$; la condición $M\subseteq I$ se necesita para recuperar exactamente $I$ al volver mediante la preimagen. Verificaremos que $I\mapsto\pi(I)$ y $J\mapsto\pi^{-1}(J)$ son procedimientos inversos entre los ideales a izquierda de $R$ que contienen a $M$ y todos los ideales a izquierda del cociente. Esto permitirá traducir la maximalidad de $M$ en una afirmación sobre los ideales del cociente.
>>10. **Primera igualdad: $\pi^{-1}(\pi(I))=I$, suponiendo $M\subseteq I$.** Fijamos un ideal a izquierda arbitrario $I$ de $R$ que contiene a $M$, como en el paso 6; esta inclusión es una hipótesis de nuestra elección de $I$, no algo que debamos probar para todos los ideales de $R$. Si $x\in I$, entonces $\pi(x)\in\pi(I)$, de modo que $x\in\pi^{-1}(\pi(I))$; así, $I\subseteq\pi^{-1}(\pi(I))$. Recíprocamente, si $x\in\pi^{-1}(\pi(I))$, existe $i\in I$ tal que $\pi(x)=\pi(i)$. Entonces $$\pi(x-i)=\pi(x)-\pi(i)=0,$$ de modo que $x-i\in\ker\pi=M$. **Aquí usamos $M\subseteq I$** para concluir $x-i\in I$. Como también $i\in I$ y $I$ es cerrado bajo sumas, $x=(x-i)+i\in I$. Esto prueba la otra inclusión.
>>11. **Diferencia con el paso 5.** En el paso 10 suponemos $M\subseteq I$ porque elegimos $I$ entre los ideales que contienen a $M$. En cambio, en el paso 5 partimos de un ideal $J$ del cociente y probamos que $M\subseteq\pi^{-1}(J)$. Esa prueba garantiza que la preimagen pertenece a la familia de ideales que estamos considerando y permite aplicar la maximalidad de $M$ en el paso 14.
>>12. **Segunda igualdad: $\pi(\pi^{-1}(J))=J$.** Fijamos ahora un ideal a izquierda arbitrario $J$ de $R/M$. Si $\alpha\in\pi(\pi^{-1}(J))$, existe $x\in\pi^{-1}(J)$ con $\alpha=\pi(x)$; por definición de preimagen, $\pi(x)\in J$, luego $\alpha\in J$. Recíprocamente, si $\alpha\in J$, la sobreyectividad de $\pi$ da $x\in R$ con $\pi(x)=\alpha$. Como $\alpha\in J$, $x\in\pi^{-1}(J)$, por lo que $\alpha=\pi(x)\in\pi(\pi^{-1}(J))$. Quedan probadas ambas inclusiones.
>>13. **Los extremos se corresponden y no corresponden a otros ideales de estas familias.** Primero justificamos directamente cuatro igualdades, sin usar los pasos 10 y 12: $\pi(M)=\{0\}$ porque todos los elementos de $M$ tienen clase cero; $\pi(R)=R/M$ porque $\pi$ es sobreyectiva; $\pi^{-1}(\{0\})=M$ porque $\pi(x)=0$ equivale a $x\in M$; y $\pi^{-1}(R/M)=R$ porque todo elemento de $R$ tiene su imagen en el cociente. 
>>14. Ahora usamos el paso 10 para ver que ningún otro ideal a izquierda $I$ **que contenga a $M$** tiene esas imágenes: si $\pi(I)=\{0\}$, entonces $$I=\pi^{-1}(\pi(I))=\pi^{-1}(\{0\})=M;$$ si $\pi(I)=R/M$, entonces $$I=\pi^{-1}(\pi(I))=\pi^{-1}(R/M)=R.$$ En sentido inverso, usamos el paso 12: si un ideal a izquierda $J$ del cociente satisface $\pi^{-1}(J)=M$, entonces $$J=\pi(\pi^{-1}(J))=\pi(M)=\{0\};$$ si satisface $\pi^{-1}(J)=R$, entonces $$J=\pi(\pi^{-1}(J))=\pi(R)=R/M.$$ Por tanto, las cuatro igualdades iniciales son directas; los pasos 10 y 12 justifican la afirmación adicional de que ningún otro ideal de las familias consideradas tiene esas mismas imágenes o preimágenes. Esto servirá para pasar de las alternativas $M$ y $R$ a las alternativas $\{0\}$ y $R/M$, y viceversa.
>>15. **Si $M$ es maximal a izquierda, el cociente es un anillo de división.** Por [[Teorico 11#^e11001|maximalidad a izquierda]], $M\neq R$, de modo que $R/M\neq\{0\}$. Para aplicar [[Teorico 11#^e11002|anillos de división e ideales a izquierda]], debemos demostrar que cualquier ideal a izquierda $J$ del cociente es $\{0\}$ o $R/M$. Tomamos uno arbitrario y definimos $K=\pi^{-1}(J)$. Los pasos 1 a 5 prueban que $K$ es un ideal a izquierda de $R$ y que $M\subseteq K\subseteq R$. Por maximalidad, $K=M$ o $K=R$. Por el paso 12, $J=\pi(K)$: si $K=M$, entonces $J=\pi(M)=\{0\}$; si $K=R$, entonces $J=\pi(R)=R/M$, usando las igualdades del paso 13. Así, los únicos ideales a izquierda del cociente son $\{0\}$ y $R/M$, y el lema citado permite concluir que $R/M$ es un anillo de división.
>>16. **Si $R/M$ es un anillo de división, $M$ es maximal a izquierda.** Como $R/M\neq\{0\}$, $M\neq R$. Sea $I$ un ideal a izquierda arbitrario de $R$ con $M\subseteq I\subseteq R$. Los pasos 6 a 8 muestran que $\pi(I)$ es un ideal a izquierda del cociente. Por [[Teorico 11#^e11002|anillos de división e ideales a izquierda]], $\pi(I)=\{0\}$ o $\pi(I)=R/M$. Por el paso 10, $I=\pi^{-1}(\pi(I))$: en el primer caso $I=\pi^{-1}(\{0\})=M$, y en el segundo $I=\pi^{-1}(R/M)=R$, usando las igualdades del paso 13. Por [[Teorico 11#^e11001|maximalidad a izquierda]], $M$ es maximal a izquierda.

^e11003

>[!example] Funciones continuas y evaluación
>Sea $X$ un espacio topológico y $x\in X$. En el anillo $C(X,\mathbb R)$ consideramos el ideal $$M_x=\{f\in C(X,\mathbb R):f(x)=0\}.$$ La evaluación $f\mapsto f(x)$ es sobreyectiva, pues incluye todas las funciones constantes, y tiene núcleo $M_x$. Por ello, $C(X,\mathbb R)/M_x\cong\mathbb R$, y [[Teorico 11#^e11003|cociente de división y maximalidad]] muestra que $M_x$ es maximal.

>[!remark] Caso conmutativo
>En un anillo conmutativo los ideales a izquierda, a derecha y biláteros coinciden. En particular, $M$ es maximal si y solo si $R/M$ es un cuerpo.

## 2. Ideales del anillo de matrices

>[!example] Las matrices no tienen ideales biláteros propios no nulos
>Sea $\mathbb k$ un cuerpo y $n\geq1$. Los únicos ideales biláteros de $M_n(\mathbb k)$ son $\{0\}$ y $M_n(\mathbb k)$.
>
>>[!Proof]-
>>1. Sea $E_{ij}$ la matriz cuya única entrada no nula es un $1$ en la posición $(i,j)$. El producto se calcula mediante $$(E_{ij}E_{k\ell})_{ab}=\sum_{c=1}^n\delta_{ai}\delta_{cj}\delta_{ck}\delta_{b\ell}=\delta_{jk}\delta_{ai}\delta_{b\ell},$$ de donde $E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$.
>>2. Sea $I\neq\{0\}$ un ideal bilátero. Tomamos $A\in I$ no nula y una entrada $a_{pq}\neq0$. Para cualquier $i,j$, el cálculo de entradas da $$E_{ip}AE_{qj}=a_{pq}E_{ij}\in I.$$
>>3. Como $\mathbb k$ es un cuerpo, $a_{pq}$ tiene inversa. Multiplicando por $a_{pq}^{-1}I_n$ obtenemos $E_{ij}\in I$ para todos $i,j$.
>>4. Toda matriz $B=(b_{ij})$ se escribe $B=\sum_{i,j}(b_{ij}I_n)E_{ij}$. Cada sumando pertenece a $I$ y $I$ es cerrado bajo sumas, por lo que $B\in I$. Luego $I=M_n(\mathbb k)$.

^e11004

>[!exercise] Matrices sobre otro anillo
>¿Qué ocurre si los coeficientes pertenecen a un anillo $R$ que no es un cuerpo? Investigar la relación entre los ideales biláteros de $R$ y los de $M_n(R)$.

>[!definition] Ideales de matrices que anulan un subespacio
>Sea $V\leq\mathbb k^n$. Definimos $$L_V=\{A\in M_n(\mathbb k):Av=0\text{ para todo }v\in V\}.$$

^e11005

>[!proposition] Clasificación de los ideales a izquierda de $M_n(\mathbb k)$
>Para todo subespacio $V\leq\mathbb k^n$, $L_V$ es un ideal a izquierda. Recíprocamente, todo ideal a izquierda $I$ de $M_n(\mathbb k)$ tiene la forma $I=L_V$, donde $$V=\bigcap_{A\in I}\ker A.$$
>
>>[!Proof]-
>>1. Primero verificamos que $L_V$ es un ideal a izquierda. Contiene a $0$; si $A,C\in L_V$, entonces $(A-C)v=Av-Cv=0$ para $v\in V$; si $B\in M_n(\mathbb k)$ y $A\in L_V$, entonces $(BA)v=B(Av)=0$. Así, $A-C\in L_V$ y $BA\in L_V$.
>>2. Sea ahora $I$ un ideal a izquierda y $V=\bigcap_{A\in I}\ker A$. Es un subespacio por ser intersección de núcleos de aplicaciones lineales. Por [[Teorico 11#^e11005|matrices que anulan un subespacio]], $I\subseteq L_V$.
>>3. Identificamos cada fila con una forma lineal sobre $\mathbb k^n$. Sea $W\leq(\mathbb k^n)^*$ el subespacio generado por todas las filas de todas las matrices de $I$. Entonces $$V=\{v\in\mathbb k^n:w(v)=0\text{ para todo }w\in W\}.$$
>>4. Las formas lineales que se anulan en $V$ son exactamente las de $W$. Para comprobarlo, tomamos una base $w_1,\ldots,w_d$ de $W$ y la extendemos a una base $w_1,\ldots,w_n$ del dual. Sea $v_1,\ldots,v_n$ la base dual en $\mathbb k^n$, de modo que $w_i(v_j)=\delta_{ij}$. Entonces $V=\operatorname{span}(v_{d+1},\ldots,v_n)$. Si $f=\sum_{i=1}^nc_iw_i$ se anula en $V$, evaluando en $v_j$ para $j>d$ obtenemos $c_j=0$; luego $f\in W$. La inclusión contraria se sigue de la definición de $V$.
>>5. Si $A\in I$, $E_{ij}A\in I$ tiene la fila $j$ de $A$ en la posición $i$ y las demás filas nulas: $$(E_{ij}A)_{ab}=\delta_{ai}a_{jb}.$$ Además, para $\lambda\in\mathbb k$, $(\lambda I_n)A\in I$. Por sumas y multiplicaciones escalares, para todo $w\in W$ y toda posición $i$, la matriz que tiene $w$ en su fila $i$ y ceros en las demás pertenece a $I$.
>>6. Sea $C\in L_V$. Cada fila de $C$ se anula en $V$, así que por el paso 4 pertenece a $W$. Por el paso 5, la matriz con esa fila en su posición y ceros en las demás pertenece a $I$. Sumando las $n$ matrices recuperamos $C\in I$.
>>7. Hemos probado $L_V\subseteq I$ y, junto con el paso 2, $I=L_V$.

^e11006

>[!remark] La duda de la hoja
>En las fotos se intenta justificar la inclusión $L_V\subseteq I$ tomando el subespacio generado por las filas de las matrices de $I$. Los pasos 3 a 6 completan ese argumento. No alcanza con observar que cada matriz de $I$ anula a $V$: eso prueba solamente $I\subseteq L_V$.

## 3. Ideales maximales y primos en anillos conmutativos

>[!definition] Ideal primo
>Sea $R$ un anillo conmutativo. Un ideal $P\subsetneq R$ es **primo** si, para cualesquiera $a,b\in R$, $ab\in P$ implica $a\in P$ o $b\in P$.

^e11007

>[!theorem] Todo ideal maximal es primo
>Sea $R$ un anillo conmutativo. Todo ideal maximal $M$ de $R$ es primo.
>
>>[!Proof]-
>>1. Sean $r,s\in R$ con $rs\in M$. Si $r\in M$, ya tenemos una de las alternativas. Supongamos $r\notin M$.
>>2. El conjunto $M+(r)=\{m+ar:m\in M,\ a\in R\}$ es un ideal: es cerrado bajo diferencias y, por conmutatividad, $b(m+ar)=bm+(ba)r$ vuelve a pertenecer a él. Contiene estrictamente a $M$, pues contiene a $r\notin M$. Por [[Teorico 11#^e11001|maximalidad]], $M+(r)=R$.
>>3. Existen entonces $m\in M$ y $a\in R$ con $1=m+ar$. Multiplicando por $s$, obtenemos $$s=ms+a(rs).$$ Ambos sumandos pertenecen a $M$, pues $m\in M$ y $rs\in M$. Luego $s\in M$.
>>4. Como $M\neq R$, [[Teorico 11#^e11007|ideal primo]] permite concluir.

^e11008

>[!remark] Dónde se usa la conmutatividad
>En la cuenta de la hoja se utiliza $(Rr)(Rs)\subseteq Rrs$: para ello se reordena $(ar)(bs)=abrs$. Este paso requiere conmutatividad. La prueba anterior evita abreviar esa cuenta.

## 4. Algunos subanillos de los complejos

>[!definition] El cuerpo $\mathbb Q(\xi)$
>Sea $\xi\in\mathbb C$. Definimos $$\mathbb Q(\xi)=\left\{\frac{p(\xi)}{q(\xi)}:p,q\in\mathbb Q[x],\ q(\xi)\neq0\right\}.$$ Es un subcuerpo de $\mathbb C$.
>
>>[!Proof]-
>>1. Contiene a $0$ y $1$, tomando polinomios constantes, y las sumas, diferencias y productos de dos de esas expresiones tienen denominador no nulo y numerador y denominador dados por polinomios de $\mathbb Q[x]$.
>>2. Si $p(\xi)/q(\xi)\neq0$, entonces $p(\xi)\neq0$ y su inversa es $q(\xi)/p(\xi)$, que pertenece al mismo conjunto. Las restantes propiedades de cuerpo se heredan de $\mathbb C$.

>[!example] Raíces de la unidad
>Si $\xi=e^{2\pi i/n}$ es una raíz primitiva $n$-ésima de la unidad, definimos el subanillo $$\mathbb Z[\xi]=\left\{\sum_{j=0}^{n-1}a_j\xi^j:a_j\in\mathbb Z\right\}\subseteq\mathbb Q(\xi).$$ Es cerrado bajo productos porque $\xi^n=1$ permite reducir los exponentes. Las potencias $1,\xi,\ldots,\xi^{n-1}$ forman una familia generadora, no necesariamente una base.

>[!example] Enteros gaussianos
>Para $\xi=i$, obtenemos $$\mathbb Z[i]=\{a+bi:a,b\in\mathbb Z\}.$$ El producto permanece en el conjunto, pues $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$.

>[!exercise] Cocientes de los enteros gaussianos
>Demostrar que, si $\{0\}\neq I\subseteq\mathbb Z[i]$ es un ideal, entonces $\mathbb Z[i]/I$ es finito.

>[!remark] Hipótesis para el resto de la clase
>De aquí en adelante los anillos son conmutativos con unidad. En los resultados que utilizan cancelación se supone además que son dominios íntegros y que $1\neq0$.

## 5. Divisibilidad, unidades, irreducibles y primos

>[!definition] Divisibilidad y asociados
>Para $a,b\in R$, escribimos $a\mid b$ si existe $x\in R$ tal que $b=ax$. El conjunto de unidades se denota $R^\times$. Dos elementos $a,b$ son **asociados** si existe $u\in R^\times$ tal que $a=ub$.

^e11009

>[!remark] Divisores de una unidad
>Si $u=ab$ es invertible, entonces $a$ y $b$ son invertibles: $a(bu^{-1})=1$ y $b(au^{-1})=1$. Por conmutatividad, estas son inversas por ambos lados.

>[!definition] Elementos irreducibles y primos
>Un elemento $p\in R$ es **irreducible** si $p\neq0$, $p\notin R^\times$ y toda igualdad $p=ab$ obliga a que $a$ o $b$ sea invertible. Un elemento $p\in R$ es **primo** si $p\neq0$, $p\notin R^\times$ y $p\mid ab$ implica $p\mid a$ o $p\mid b$.

^e11010

>[!remark] Correcciones de las definiciones manuscritas
>En la definición de irreducible debe decir «$a$ **o** $b$ es invertible», no «$a$ y $b$». Tanto los irreducibles como los primos se toman no nulos y no invertibles.

>[!proposition] Divisibilidad e ideales principales
>Sea $R$ un dominio íntegro conmutativo. Para $a,b,u\in R$:
>- **(a)** $a\mid b$ si y solo si $(b)\subseteq(a)$.
>- **(b)** $a$ y $b$ son asociados si y solo si $(a)=(b)$.
>- **(c)** $u$ es una unidad si y solo si $u\mid r$ para todo $r\in R$.
>
>>[!Proof]-
>>- **(a)**
>>	1. Si $b=ax$, todo elemento $rb$ de $(b)$ es $rb=a(rx)\in(a)$. Recíprocamente, si $(b)\subseteq(a)$, entonces $b\in(a)$ y existe $x\in R$ con $b=ax$.
>>- **(b)**
>>	1. Si $a=ub$ con $u$ invertible, también $b=u^{-1}a$. Aplicando la parte (a) a ambas igualdades, obtenemos $(a)=(b)$.
>>	2. Supongamos $(a)=(b)$. Si $a=0$, entonces $b\in(a)=\{0\}$ y $a=1b$. Si $a\neq0$, existen $x,y\in R$ con $a=xb$ y $b=ya$. Sustituyendo, $a=xya$, de modo que $a(1-xy)=0$. Como $R$ es íntegro y $a\neq0$, $xy=1$. Por conmutatividad, $x$ es invertible y $a=xb$ muestra que son asociados.
>>- **(c)**
>>	1. Si $u$ es una unidad, para todo $r$ se cumple $r=u(u^{-1}r)$, de modo que $u\mid r$.
>>	2. Si $u$ divide a todos los elementos, divide a $1$: existe $x$ con $1=ux$. Por conmutatividad, $xu=1$, luego $u$ es invertible.

^e11011

>[!remark] Demostración propuesta como ejercicio
>La hoja deja las tres equivalencias anteriores como ejercicio. Se incluyen aquí sus justificaciones breves para fijar la relación entre divisibilidad e inclusión de ideales que se usa en los resultados siguientes.

>[!definition] Dominio de ideales principales
>Un **dominio de ideales principales (DIP)** es un dominio íntegro conmutativo en el que todo ideal tiene la forma $(a)$ para algún $a\in R$.

^e11012

>[!theorem] Relaciones entre primos, irreducibles e ideales
>Sea $R$ un dominio íntegro conmutativo y sea $p\neq0$.
>- **(a)** $p$ es primo si y solo si $(p)$ es un ideal primo.
>- **(b)** $p$ es irreducible si y solo si $(p)$ es propio y maximal entre los ideales principales propios: si $(p)\subseteq(a)\subsetneq R$, entonces $(a)=(p)$.
>- **(c)** Si $p$ es primo, entonces $p$ es irreducible.
>- **(d)** Si $R$ es un DIP, $p$ es primo si y solo si es irreducible.
>- **(e)** Para $u\in R^\times$, $p$ es primo si y solo si $up$ es primo, y $p$ es irreducible si y solo si $up$ es irreducible.
>- **(f)** Si $p$ es irreducible y $x\mid p$, entonces $x$ es una unidad o $x=up$ para alguna unidad $u$.
>
>>[!Proof]-
>>- **(a)**
>>	1. Se tiene $(p)\neq R$ si y solo si $p$ no es invertible: $1\in(p)$ equivale a $1=pr$ para algún $r\in R$. Además, $ab\in(p)$ equivale a $p\mid ab$, y análogamente para $a$ y $b$. Aplicamos [[Teorico 11#^e11007|ideal primo]] y [[Teorico 11#^e11010|elementos primos]].
>>- **(b)**
>>	1. Supongamos $p$ irreducible y $(p)\subseteq(a)\subsetneq R$. Por [[Teorico 11#^e11011|divisibilidad e ideales principales]], $p=ab$ para algún $b$. Como $(a)\neq R$, $a$ no es invertible. Por irreducibilidad, $b$ es invertible, y entonces $a=b^{-1}p$, de donde $(a)=(p)$.
>>	2. Recíprocamente, supongamos la condición sobre $(p)$ y escribamos $p=ab$. Si $a$ es invertible, ya tenemos una de las alternativas. Si no lo es, $(p)\subseteq(a)\subsetneq R$, luego $(a)=(p)$. Existe $c$ con $a=pc=abc$, así que $a(1-bc)=0$. Puesto que $p\neq0$, $a\neq0$, y la integridad da $bc=1$. Luego $b$ es invertible. Como $(p)$ es propio, $p$ tampoco es una unidad.
>>- **(c)**
>>	1. Si $p=ab$, la primalidad de $p$ da $p\mid a$ o $p\mid b$. Si $a=pc$, entonces $p=pcb$ y $p(1-cb)=0$; como $p\neq0$, $cb=1$ y $b$ es invertible. Si $b=pc$, la misma cuenta da $ca=1$ y $a$ es invertible. Luego $p$ es irreducible.
>>- **(d)**
>>	1. La implicación primo a irreducible ya está probada en (c). Si $p$ es irreducible y $R$ es un DIP, cualquier ideal propio que contenga a $(p)$ es principal. La parte (b) muestra entonces que $(p)$ es maximal entre todos los ideales propios.
>>	2. Por [[Teorico 11#^e11008|maximal implica primo]], $(p)$ es primo. La parte (a) da que $p$ es primo.
>>- **(e)**
>>	1. Como $u$ es invertible, $up\neq0$ y $up$ es una unidad si y solo si $p$ lo es. Además, $(up)=(p)$ por [[Teorico 11#^e11011|divisibilidad e ideales principales]]. Las partes (a) y (b) dan ambas equivalencias.
>>- **(f)**
>>	1. Si $p=xy$, por irreducibilidad $x$ o $y$ es invertible. Si $x$ no es invertible, $y$ sí lo es y $x=y^{-1}p$; basta tomar $u=y^{-1}$.

^e11013

## 6. Dominios de factorización única

>[!definition] Dominio de factorización única
>Un dominio íntegro conmutativo $R$ es un **dominio de factorización única (DFU)** si:
>1. **Existencia:** todo $r\neq0$ no invertible es un producto finito $r=p_1\cdots p_n$ de irreducibles, con $n\geq1$.
>2. **Unicidad salvo orden y asociados:** si $p_1\cdots p_n=q_1\cdots q_m$ son dos productos de irreducibles, entonces $n=m$ y, después de reordenar, existen unidades $u_i$ con $p_i=u_iq_i$ para todo $i$.

^e11014

>[!lemma] Estabilización de cadenas de ideales en un DIP
>Sea $R$ un DIP. Toda cadena creciente de ideales $I_1\subseteq I_2\subseteq\cdots$ se estabiliza: existe $N\geq1$ tal que $I_j=I_N$ para todo $j\geq N$.
>
>>[!Proof]-
>>1. Sea $I_1\subseteq I_2\subseteq\cdots$ una cadena de ideales y definamos $J=\bigcup_{n\geq1}I_n$.
>>2. Veamos que $J$ es un ideal. Contiene a $0$, pues cada $I_n$ lo contiene. Si $u,v\in J$, existen $i,j$ con $u\in I_i$ y $v\in I_j$. Por ser una cadena creciente, ambos pertenecen a $I_{\max\{i,j\}}$, de modo que $u-v\in I_{\max\{i,j\}}\subseteq J$. Además, si $r\in R$ y $u\in J$, existe $k$ con $u\in I_k$; como $I_k$ es un ideal, $ru,ur\in I_k\subseteq J$. Por [[Teorico 10#^a7d291|ideales]], $J$ es un ideal.
>>3. Como $R$ es un DIP, $J=(d)$ para algún $d\in R$. Como $d\in J$, existe $N$ tal que $d\in I_N$. Entonces $J=(d)\subseteq I_N\subseteq J$, de donde $I_N=J$.
>>4. Para todo $n\geq N$, $I_N\subseteq I_n\subseteq J=I_N$, así que $I_n=I_N$. Por tanto, la cadena se estabiliza y no existe una cadena infinita estrictamente creciente de ideales.

^e11015

>[!theorem] Todo DIP es un DFU
>Todo dominio de ideales principales es un dominio de factorización única.
>
>>[!Proof]-
>>- **(a) Existencia de la factorización**
>>	1. Supongamos que existe $r_0\neq0$, no invertible, que no es producto finito de irreducibles. No puede ser irreducible, pues entonces sería un producto de un solo factor. Por [[Teorico 11#^e11010|irreducibilidad]], $r_0=a_0r_1$ con $a_0,r_1$ no invertibles; ambos son no nulos porque $r_0\neq0$.
>>	2. Al menos uno de los dos factores tampoco es producto finito de irreducibles: de lo contrario, multiplicando sus factorizaciones obtendríamos una para $r_0$. Denotamos por $r_1$ un factor que no admite tal factorización y por $a_0$ el otro.
>>	3. De $r_0=a_0r_1$ se sigue $(r_0)\subseteq(r_1)$. La inclusión es estricta: si fueran iguales, existiría $b$ con $r_1=br_0=ba_0r_1$, y por integridad $1=ba_0$, contradiciendo que $a_0$ no es invertible.
>>	4. Repitiendo el procedimiento con $r_1$ y los factores sucesivos, se obtiene una cadena $(r_0)\subsetneq(r_1)\subsetneq(r_2)\subsetneq\cdots$. Esto contradice [[Teorico 11#^e11015|estabilización de cadenas]]. Por tanto, existe la factorización finita.
>>- **(b) Unicidad salvo orden y asociados**
>>	1. Sean $p_1\cdots p_n=q_1\cdots q_m$ dos factorizaciones en irreducibles. Por [[Teorico 11#^e11013|primos e irreducibles en un DIP]], $p_1$ es primo. Aplicando reiteradamente la condición de primo al producto de los $q_j$, $p_1$ divide a algún $q_j$. Reordenamos los factores para que sea $q_1$.
>>	2. Escribimos $q_1=p_1c$. Como $q_1$ es irreducible y $p_1$ no es una unidad, $c$ es una unidad. Sustituimos en la igualdad y cancelamos $p_1\neq0$, usando integridad: $$p_2\cdots p_n=cq_2\cdots q_m.$$
>>	3. Repetimos el argumento: cada irreducible de la izquierda es primo y no puede dividir a la unidad acumulada de la derecha. En efecto, si una unidad $v$ fuera $ph$, tendríamos $1=p(hv^{-1})$, y $p$ sería invertible. Por ello, el factor considerado divide a uno de los irreducibles restantes de la derecha y es asociado a él, como en el paso 2.
>>	4. Ninguna lista puede agotarse antes que la otra. Si esto ocurriera, un producto no vacío de irreducibles sería una unidad. Si $a_1\cdots a_k=v$ con $v$ invertible, entonces $$a_i\left(v^{-1}\prod_{j\neq i}a_j\right)=1$$ para cada $i$, contradiciendo que los irreducibles no son unidades.
>>	5. Así, $n=m$ y cada $p_i$ es asociado al $q_i$ correspondiente, después de reordenar. Por [[Teorico 11#^e11014|factorización única]], $R$ es un DFU.

^e11016

## 7. Un dominio que no es de factorización única

>[!example] $\mathbb Z[\sqrt{-5}]$ no es un DFU
>Sea $\eta=\sqrt{-5}$ y $$R=\mathbb Z[\eta]=\{a+b\eta:a,b\in\mathbb Z\}\subseteq\mathbb C.$$ Entonces $$6=2\cdot3=(1+\eta)(1-\eta)$$ son dos factorizaciones en irreducibles que no coinciden salvo orden y asociados. Por tanto, $R$ no es un DFU y tampoco es un DIP.
>
>>[!Proof]-
>>1. $R$ es un subanillo de $\mathbb C$, pues $(a+b\eta)(c+d\eta)=(ac-5bd)+(ad+bc)\eta$. Como $\mathbb C$ no tiene divisores de cero, $R$ es un dominio íntegro.
>>2. Definimos $$N(a+b\eta)=(a+b\eta)(a-b\eta)=a^2+5b^2.$$ Esta norma es un entero no negativo, es cero solamente en $0$ y es multiplicativa: por conmutatividad en $\mathbb C$, $$N(\alpha\beta)=\alpha\beta\overline\alpha\,\overline\beta=(\alpha\overline\alpha)(\beta\overline\beta)=N(\alpha)N(\beta).$$
>>3. Si $u$ es una unidad, $N(u)N(u^{-1})=N(1)=1$; ambos factores son enteros positivos, por lo que $N(u)=1$. La ecuación $a^2+5b^2=1$ obliga a $b=0$ y $a=1$ o $a=-1$. Recíprocamente, $1$ y $-1$ son unidades. Por tanto, $R^\times=\{1,-1\}$.
>>4. No hay elementos de norma $2$ ni $3$. Si $b\neq0$, $a^2+5b^2\geq5$; si $b=0$, sería $a^2=2$ o $a^2=3$, imposible para $a\in\mathbb Z$.
>>5. $N(2)=4$. Si $2=\alpha\beta$ con ambos factores no invertibles, sus normas serían enteros mayores que $1$ cuyo producto es $4$, de modo que ambas serían $2$. Esto contradice el paso 4. Luego $2$ es irreducible. Análogamente, $N(3)=9$ obligaría a que ambos factores no invertibles tuvieran norma $3$, por lo que $3$ también es irreducible.
>>6. $N(1+\eta)=N(1-\eta)=6$. En una factorización en dos no unidades, las normas tendrían que ser $2$ y $3$, en algún orden. El paso 4 lo impide. Ambos elementos son irreducibles.
>>7. Las igualdades anunciadas se verifican mediante $(1+\eta)(1-\eta)=1-\eta^2=6$. Pero elementos asociados tienen la misma norma, pues las unidades tienen norma $1$. Las normas de los factores de la primera factorización son $4$ y $9$, mientras que las de la segunda son $6$ y $6$. Ningún factor de la primera es asociado a uno de la segunda.
>>8. Esto contradice [[Teorico 11#^e11014|factorización única]]. Por [[Teorico 11#^e11016|DIP implica DFU]], $R$ tampoco es un DIP.

>[!remark] Irreducible no implica primo en general
>En este mismo ejemplo, $2\mid(1+\eta)(1-\eta)$, porque el producto es $6=2\cdot3$. Sin embargo, $2$ no divide a ninguno de los dos factores: una igualdad $1\pm\eta=2(a+b\eta)$ exigiría $1=2a$ con $a\in\mathbb Z$, lo cual es imposible. Así, $2$ es irreducible pero no primo.
