---
tags:
  - AlgebraicStructures
  - Modules
  - ProjectiveModules
  - InjectiveModules
source: "Tres fotos enviadas por Sofía por WhatsApp el 2026-10-21; fecha de la clase no indicada"
---

# Teórico 17 — Fibrados vectoriales, módulos proyectivos e inyectivos

>[!remark] Fuente y criterios de transcripción
>Transcripción de las tres fotos enviadas por Sofía: [[Teorico 17 - pagina 1.jpg|página 1]], [[Teorico 17 - pagina 2.jpg|página 2]] y [[Teorico 17 - pagina 3.jpg|página 3]]. Continúa [[Teorico 16]]. La numeración 17 sigue la secuencia del vault; la fecha de la clase no figura en las fotos.
>Se conservan las observaciones iniciales y el orden de los temas. Los diagramas se expresan mediante sus aplicaciones e identidades de conmutatividad; se desarrollan las verificaciones esbozadas. Se corrige la proyección del fibrado trivial y se explicitan las hipótesis necesarias para la relación entre fibrados y módulos proyectivos. Los resultados geométricos se mencionan sin demostración, como en el manuscrito.

Trabajamos con anillos con unidad y módulos unitarios a izquierda.

## 1. Observaciones iniciales

La primera página comienza con el cierre de argumentos cuyos enunciados completos no aparecen en las fotos. Se transcribe su contenido matemático sin asignarles un número de ejercicio.

### 1.1. No hay cuerpos intermedios propios entre los reales y los complejos

>[!proposition] Cuerpos intermedios de la extensión real-compleja
>Si $K$ es un cuerpo con $\mathbb R\subseteq K\subseteq\mathbb C$, entonces $K=\mathbb R$ o $K=\mathbb C$.
>
>>[!Proof]-
>>1. La fórmula de dimensiones para una torre de extensiones da $$2=\dim_{\mathbb R}\mathbb C=(\dim_K\mathbb C)(\dim_{\mathbb R}K).$$ Las dos dimensiones del producto son enteros positivos, pues ambos espacios son no nulos y tienen dimensión finita.
>>2. Si $\mathbb R\subsetneq K$, entonces $\dim_{\mathbb R}K\geq2$: un elemento de $K\setminus\mathbb R$, junto con $1$, es linealmente independiente sobre $\mathbb R$. Del mismo modo, si $K\subsetneq\mathbb C$, entonces $\dim_K\mathbb C\geq2$.
>>3. Si ambas inclusiones fueran estrictas, el producto sería al menos $4$, contradiciendo la igualdad con $2$. Por tanto, una de las inclusiones es una igualdad.

^e17001

### 1.2. Bases de distintos tamaños

>[!remark] Propagación de un isomorfismo entre rangos consecutivos
>El argumento del manuscrito utiliza un isomorfismo $R^n\cong R^{n+1}$. Para $R\neq0$, bajo esa hipótesis, un módulo $F\cong R^n$ admite bases de todo tamaño finito $m\geq n$; no se está afirmando que ese isomorfismo exista para cualquier anillo.
>
>>[!Proof]-
>>1. Al sumar directamente una copia de $R$ a ambos miembros, obtenemos $$R^{n+1}=R^n\oplus R\cong R^{n+1}\oplus R=R^{n+2}.$$
>>2. Repitiendo la operación, para todo entero $j\geq0$ resulta $R^{n+j}\cong R^{n+j+1}$. Por composición, $F\cong R^m$ para todo entero $m\geq n$.
>>3. Transportando la base canónica mediante cada isomorfismo y aplicando [[Teorico 14#^e14002|existencia de base y libertad]], obtenemos una base de $F$ de tamaño $m$.

^e17002

### 1.3. Una condición que obliga a un dominio a ser principal

>[!proposition] Submódulos libres y dominios de ideales principales
>Sea $R$ un dominio de integridad. Si todo submódulo de todo $R$-módulo libre es libre, entonces $R$ es un dominio de ideales principales.
>
>>[!Proof]-
>>1. El módulo regular $R$ es libre con base $\{1\}$. Todo ideal $I\subseteq R$ es un submódulo suyo, de modo que es libre por hipótesis.
>>2. Si una base de $I$ contuviera dos elementos distintos $a,b$, ambos serían no nulos. La conmutatividad daría la relación $$b\cdot a+(-a)\cdot b=ba-ab=0,$$ cuyos coeficientes $b$ y $-a$ son no nulos. Esto contradice la independencia lineal. Por tanto, toda base de $I$ tiene a lo sumo un elemento.
>>3. Si $I=0$, entonces $I=(0)$. Si $I\neq0$, su base no puede ser vacía y debe tener exactamente un elemento $a$; por tanto, $I=Ra=(a)$. Así, todos los ideales son principales.

^e17003

## 2. Motivación geométrica: fibrados vectoriales

### 2.1. El fibrado tangente

Sea $M$ una variedad diferenciable. A cada $p\in M$ le corresponde su espacio tangente real $T_pM$. El **fibrado tangente** reúne estos espacios en $$TM=\coprod_{p\in M}T_pM=\{(p,v):p\in M,\ v\in T_pM\}.$$

La proyección canónica es $$\pi:TM\longrightarrow M,\qquad\pi(p,v)=p.$$ Es diferenciable y sobreyectiva, y la fibra $\pi^{-1}(p)$ se identifica con $T_pM$.

Un **campo vectorial diferenciable** es una sección diferenciable de esta proyección: una aplicación $V:M\to TM$ tal que $$\pi\circ V=\operatorname{id}_M.$$ Así, $V$ asigna a cada punto $p$ un vector de $T_pM$.

### 2.2. Fibrados vectoriales y trivializaciones

>[!definition] Fibrado vectorial real de rango finito
>Un fibrado vectorial real de rango $n$ sobre un espacio topológico $X$ es una aplicación continua y sobreyectiva $\pi:E\to X$ tal que cada fibra $E_x=\pi^{-1}(x)$ tiene estructura de espacio vectorial real y, para todo $x\in X$, existe un abierto $U\ni x$ y un homeomorfismo $$\varphi_U:\pi^{-1}(U)\longrightarrow U\times\mathbb R^n$$ que conmuta con las proyecciones sobre $U$ y cuya restricción a cada fibra es un isomorfismo lineal. Estos homeomorfismos se llaman **trivializaciones locales**.
>El fibrado es **trivial** si existe una trivialización global $E\cong X\times\mathbb R^n$ sobre $X$.

^e17004

>[!remark] Precisión sobre la definición del apunte
>La primera página menciona la continuidad, la sobreyectividad y las estructuras vectoriales de las fibras; la segunda introduce la trivialidad local. Para la definición usual de fibrado vectorial se requieren conjuntamente esas condiciones, incluida la compatibilidad lineal de las trivializaciones.

>[!example] El fibrado trivial
>Para cualquier espacio topológico $X$, el producto $E=X\times\mathbb R^n$ es un fibrado vectorial trivial con proyección $$\pi:X\times\mathbb R^n\longrightarrow X,\qquad\pi(x,v)=x.$$
>En la última línea de la primera foto aparece $(x,v)\mapsto v$; debe ser $(x,v)\mapsto x$ para que la base del fibrado sea $X$.

Los dibujos muestran un cilindro sobre $S^1$, una hélice sobre $S^1$ y una banda de Möbius, para ilustrar la diferencia entre una estructura localmente producto y una globalmente producto. La hélice proyectada sobre el círculo ilustra un recubrimiento con fibra discreta, no un fibrado vectorial. Para el ejemplo vectorial de Möbius se entiende el fibrado de rectas asociado, con fibras $\mathbb R$, no la banda compacta con fibras intervalos.

### 2.3. Secciones como módulo

>[!definition] Módulo de secciones continuas
>Sea $\pi:E\to X$ un fibrado vectorial real. Escribimos $$C(X)=\{f:X\to\mathbb R:\ f\text{ es continua}\}$$ y $$\Gamma(X,E)=\{s:X\to E:\ s\text{ es continua y }\pi\circ s=\operatorname{id}_X\}.$$
>La suma y la acción de $C(X)$ se definen punto a punto en cada fibra: $$(s+t)(x)=s(x)+t(x),\qquad(f\cdot s)(x)=f(x)s(x).$$ Con estas operaciones, $\Gamma(X,E)$ es un $C(X)$-módulo.

^e17005

>[!proposition] Secciones de un fibrado trivial
>Si $E=X\times\mathbb R^n$ es trivial, entonces $\Gamma(X,E)\cong C(X)^n$. En particular, el módulo de secciones es libre.
>
>>[!Proof]-
>>1. Una sección tiene necesariamente la forma $s(x)=(x,v(x))$, donde $v:X\to\mathbb R^n$ es continua. Escribir $v=(f_1,\ldots,f_n)$ equivale a dar $n$ funciones $f_j\in C(X)$.
>>2. La aplicación $s\mapsto(f_1,\ldots,f_n)$ es biyectiva, con inversa $$(f_1,\ldots,f_n)\longmapsto\bigl[x\mapsto(x,(f_1(x),\ldots,f_n(x)))\bigr].$$ Las operaciones son punto a punto en ambos miembros, por lo que esta biyección es $C(X)$-lineal.
>>3. Si el fibrado está dado mediante una trivialización global, esta transporta las secciones al caso producto. Se obtiene el mismo isomorfismo.

^e17006

>[!remark] Fibrados y módulos proyectivos: hipótesis necesarias
>El manuscrito anticipa la correspondencia «fibrado localmente trivial $\leftrightarrow$ módulo de secciones proyectivo». Una formulación estándar precisa es la de **Serre–Swan**: si $X$ es compacto Hausdorff, los fibrados vectoriales reales de rango finito sobre $X$ corresponden a los $C(X)$-módulos **finitamente generados y proyectivos**, mediante $E\mapsto\Gamma(X,E)$.
>En particular, bajo esas hipótesis, el módulo de secciones de un fibrado vectorial es finitamente generado y proyectivo. La formulación sin hipótesis sobre $X$ no se adopta aquí como afirmación general. La demostración no aparece en las fotos.

### 2.4. Levantamientos

El manuscrito llama **levantamiento** a completar un diagrama sobre la base. Dados $\pi:E\to X$ y $f:T\to X$, se busca $h:T\to E$ tal que $$\pi\circ h=f.$$ La definición algebraica de módulo proyectivo utiliza exactamente este tipo de diagrama, con la condición de que la aplicación inferior sea un epimorfismo.

## 3. Módulos proyectivos

>[!definition] Módulo proyectivo
>Sea $R$ un anillo. Un $R$-módulo $P$ es **proyectivo** si, para todo epimorfismo $\pi:M\to N$ y todo morfismo $f:P\to N$, existe un morfismo $h:P\to M$ tal que $$\pi\circ h=f.$$
>El morfismo $h$ se llama un **levantamiento** de $f$ a través de $\pi$; no se exige que sea único.

^e17007

>[!proposition] Los epimorfismos sobre un proyectivo tienen sección
>Si $P$ es proyectivo y $\rho:M\to P$ es un epimorfismo, existe un morfismo $i:P\to M$ tal que $$\rho\circ i=\operatorname{id}_P.$$
>
>>[!Proof]-
>>1. Aplicamos [[Teorico 17#^e17007|propiedad de levantamiento]] al epimorfismo $\rho:M\to P$ y al morfismo $\operatorname{id}_P:P\to P$.
>>2. El levantamiento obtenido es un morfismo $i:P\to M$ que satisface $\rho i=\operatorname{id}_P$, es decir, una sección de $\rho$.

^e17008

>[!lemma] Todo módulo libre es proyectivo
>Para cualquier conjunto $I$, el $R$-módulo $R^{(I)}=\bigoplus_{i\in I}R$ es proyectivo.
>
>>[!Proof]-
>>1. Sean $\pi:M\to N$ un epimorfismo y $f:R^{(I)}\to N$ un morfismo. Para cada $i\in I$, denotamos por $\iota_i:R\to R^{(I)}$ la inclusión canónica y ponemos $e_i=\iota_i(1)$. Como $\pi$ es sobreyectiva, elegimos $m_i\in M$ tal que $\pi(m_i)=f(e_i)$.
>>2. Definimos $h_i:R\to M$ por $h_i(r)=rm_i$. Es $R$-lineal: $$h_i(r+s)=(r+s)m_i=rm_i+sm_i,\qquad h_i(ar)=(ar)m_i=a(rm_i).$$
>>3. Por la propiedad universal de la suma directa, existe un único morfismo $h:R^{(I)}\to M$ tal que $h\iota_i=h_i$ para todo $i$. Explícitamente, $$h\left(\sum_{i\in J}r_ie_i\right)=\sum_{i\in J}r_im_i,$$ donde $J\subseteq I$ es finito.
>>4. Para todo $r\in R$, $$(\pi h\iota_i)(r)=\pi(rm_i)=r\pi(m_i)=rf(e_i)=(f\iota_i)(r).$$ Por tanto, $\pi h\iota_i=f\iota_i$ para cada $i$; la unicidad en la propiedad universal de la suma directa implica $\pi h=f$.
>>5. Hemos construido el levantamiento exigido por [[Teorico 17#^e17007|propiedad de levantamiento]]. Por tanto, $R^{(I)}$ es proyectivo. Todo módulo libre es isomorfo a uno de esta forma, y la propiedad se transporta por isomorfismos.

^e17009

>[!example] Un módulo que no es proyectivo
>Para $n\geq2$, el $\mathbb Z$-módulo $\mathbb Z/n\mathbb Z$ no es proyectivo.
>
>>[!Proof]-
>>1. Consideramos la proyección canónica $\pi:\mathbb Z\to\mathbb Z/n\mathbb Z$. Si el módulo cociente fuera proyectivo, por [[Teorico 17#^e17008|existencia de secciones]] habría un morfismo $i:\mathbb Z/n\mathbb Z\to\mathbb Z$ con $\pi i=\operatorname{id}$.
>>2. Como $n\overline1=\overline0$, la linealidad daría $$n\,i(\overline1)=i(n\overline1)=i(\overline0)=0.$$ En $\mathbb Z$, $n\neq0$ y no hay divisores de cero, de modo que $i(\overline1)=0$.
>>3. Se seguiría $$(\pi i)(\overline1)=\pi(0)=\overline0\neq\overline1,$$ pues $n\geq2$. Esto contradice $\pi i=\operatorname{id}$, y concluye la demostración.

^e1700a

## 4. Módulos inyectivos

>[!definition] Módulo inyectivo
>Un $R$-módulo $Q$ es **inyectivo** si, para todo monomorfismo $i:U\to V$ y todo morfismo $f:U\to Q$, existe un morfismo $h:V\to Q$ tal que $$h\circ i=f.$$
>Es decir, todo morfismo definido en un submódulo se extiende al módulo que lo contiene. No se exige unicidad de la extensión.

^e1700b

>[!remark] Comparación de las dos propiedades
>En la proyectividad se levanta un morfismo a través de un epimorfismo: $\pi h=f$. En la inyectividad se extiende un morfismo a través de un monomorfismo: $hi=f$. Las fotos solo introducen la definición de inyectividad; no desarrollan todavía sus propiedades.

## 5. Nota sobre anillos semisimples y cubiertas proyectivas

El manuscrito recuerda [[Teorico 16#^e16008|Wedderburn–Artin]] y comenta que, para estudiar anillos más generales, los proyectivos que se proyectan sobre módulos simples desempeñarán un papel análogo al de los simples en el caso semisimple. Se anticipa la idea de **cubierta proyectiva**, sin dar todavía su definición ni demostrar su existencia.

>[!remark] Alcance de esta observación
>No todo epimorfismo desde un proyectivo es, por ese solo hecho, una cubierta proyectiva. La condición adicional que define una cubierta no se especifica en estas páginas. Tampoco se afirma que todo anillo tenga cubiertas proyectivas para todos sus módulos simples.

## 6. Caracterización de los módulos proyectivos

>[!theorem] Un módulo es proyectivo si y solo si es sumando directo de un libre
>Sea $R$ un anillo y sea $P$ un $R$-módulo. Son equivalentes:
>1. $P$ es proyectivo.
>2. Existe un $R$-módulo $U$ y un conjunto $I$ tales que $$P\oplus U\cong R^{(I)}.$$
>
>>[!Proof]-
>>- **($1\Rightarrow2$)**
>>	1. Por [[Teorico 14#^e14003|todo módulo es cociente de un libre]], existen un conjunto $I$ y un epimorfismo $\pi:F\to P$, donde $F=R^{(I)}$. Como $P$ es proyectivo, por [[Teorico 17#^e17008|existencia de secciones]] hay $s:P\to F$ con $\pi s=\operatorname{id}_P$.
>>	2. Ponemos $U=\ker\pi$ y definimos $$\Phi:F\longrightarrow U\oplus P,\qquad\Phi(x)=(x-s\pi(x),\pi(x)).$$ La primera componente pertenece a $U$, porque $$\pi(x-s\pi(x))=\pi(x)-\pi s\pi(x)=\pi(x)-\pi(x)=0.$$ Las dos componentes son $R$-lineales, así que $\Phi$ es un morfismo bien definido.
>>	3. Si $\Phi(x)=(0,0)$, entonces $\pi(x)=0$ y $x-s\pi(x)=0$. Sustituyendo la primera igualdad en la segunda obtenemos $x=0$. Por tanto, $\Phi$ es inyectiva.
>>	4. Para $(u,p)\in U\oplus P$, tomamos $x=u+s(p)$. Como $\pi(u)=0$ y $\pi s(p)=p$, se cumple $$\pi(x)=p,\qquad x-s\pi(x)=u+s(p)-s(p)=u.$$ Así, $\Phi(x)=(u,p)$ y $\Phi$ es sobreyectiva. Su inversa es $(u,p)\mapsto u+s(p)$.
>>	5. Concluimos $F\cong U\oplus P\cong P\oplus U$, por lo que $P$ es sumando directo de un módulo libre.
>>- **($2\Rightarrow1$)**
>>	1. Identificamos $F=R^{(I)}$ con $P\oplus U$. Sean $i:P\to F$ la inclusión y $\rho:F\to P$ la proyección canónicas; satisfacen $\rho i=\operatorname{id}_P$.
>>	2. Sean $\pi:M\to N$ un epimorfismo y $f:P\to N$ un morfismo. Por [[Teorico 17#^e17009|proyectividad de los libres]], existe $g:F\to M$ tal que $\pi g=f\rho$.
>>	3. Definimos $h=gi:P\to M$. Entonces $$\pi h=\pi gi=f\rho i=f\operatorname{id}_P=f.$$ Así, $h$ es el levantamiento requerido por [[Teorico 17#^e17007|propiedad de levantamiento]], y $P$ es proyectivo.

^e1700c
