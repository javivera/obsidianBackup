---
tags:
  - AlgebraicStructures
  - Modules
  - Representations
source: "Cuatro fotos enviadas por Sofía por WhatsApp el 2026-10-20; fecha de la clase no indicada"
---

# Teórico 16 — Wedderburn–Artin y clasificación de representaciones

>[!remark] Fuente y criterios de transcripción
>Transcripción de las cuatro fotos enviadas por Sofía: [[Teorico 16 - pagina 1.jpg|página 1]], [[Teorico 16 - pagina 2.jpg|página 2]], [[Teorico 16 - pagina 3.jpg|página 3]] y [[Teorico 16 - pagina 4.jpg|página 4]]. Continúa [[Teorico 15]]. La numeración 16 sigue la secuencia de este vault; la fecha de la clase no figura en las fotos.
>Se ordenan las cuentas y se desarrollan las verificaciones esbozadas. Se señalan dos correcciones importantes: para módulos a izquierda, con el producto usual por composición, aparece el anillo opuesto en la demostración de Wedderburn–Artin; en los módulos reales de dimensión dos, la relación cuadrática da $g\cdot\bar x=-\bar1+2\cos(\theta)\bar x$. También se distingue el caso par del impar en la factorización de $x^n-1$. El ejercicio final queda sin resolver.

Trabajamos con anillos con unidad y módulos unitarios a izquierda. En los anillos de endomorfismos usamos el producto por composición, como en [[Teorico 13#^e13003|anillo de endomorfismos]].

## 1. Evaluación y módulos simples sobre un cociente de polinomios

La primera parte de la página 1 continúa un ejemplo con el anillo $$A=\mathbb k[x,y,z]/(x^2+y^2+z^2-1).$$ Denotamos por $\bar x,\bar y,\bar z$ las clases de las variables.

>[!proposition] Evaluación en un punto
>Sea $p=(a,b,c)\in\mathbb k^3$ con $a^2+b^2+c^2=1$. La aplicación $$\varphi_p:A\longrightarrow\mathbb k,\qquad \varphi_p(\bar f)=f(a,b,c)$$ es un morfismo sobreyectivo de $\mathbb k$-álgebras y satisface $$\varphi_p(\bar x)=a,\qquad\varphi_p(\bar y)=b,\qquad\varphi_p(\bar z)=c.$$
>
>>[!Proof]-
>>1. Si $\bar f=\bar g$, existe $h\in\mathbb k[x,y,z]$ tal que $f-g=(x^2+y^2+z^2-1)h$. Evaluando en $p$, obtenemos $$f(a,b,c)-g(a,b,c)=(a^2+b^2+c^2-1)h(a,b,c)=0.$$ Por tanto, la aplicación está bien definida.
>>2. La evaluación satisface $$(f+g)(p)=f(p)+g(p),\qquad(fg)(p)=f(p)g(p),\qquad1(p)=1.$$ Además, deja fijos los elementos de $\mathbb k$, así que es un morfismo de $\mathbb k$-álgebras.
>>3. Para cada $\lambda\in\mathbb k$, el polinomio constante $\lambda$ satisface $\varphi_p(\bar\lambda)=\lambda$. Luego $\varphi_p$ es sobreyectiva. Evaluando las tres variables se obtienen las igualdades anunciadas.

^e16001

>[!proposition] El módulo asociado a un punto
>Con la notación anterior, $$M_p=A/(\bar x-a,\bar y-b,\bar z-c)$$ es un $A$-módulo simple. Puede identificarse con $\mathbb k$ provisto de la acción $$\bar f\cdot\lambda=f(a,b,c)\lambda.$$
>
>>[!Proof]-
>>1. Sea $J=(x-a,y-b,z-c)\subseteq\mathbb k[x,y,z]$. Para todo polinomio $f$, la diferencia $f(x,y,z)-f(a,b,c)$ pertenece a $J$: se escribe como la suma de $f(x,y,z)-f(a,y,z)$, $f(a,y,z)-f(a,b,z)$ y $f(a,b,z)-f(a,b,c)$, múltiplos de $x-a$, $y-b$ y $z-c$, respectivamente. Así, el núcleo de la evaluación en $p$ es $J$.
>>2. La identidad $$x^2+y^2+z^2-1=(x-a)(x+a)+(y-b)(y+b)+(z-c)(z+c)$$ usa $a^2+b^2+c^2=1$ y muestra que $(x^2+y^2+z^2-1)\subseteq J$. Por tanto, $\ker\varphi_p=(\bar x-a,\bar y-b,\bar z-c)$.
>>3. Aplicando [[Teorico 13#^e1300f|primer teorema de isomorfismo]], obtenemos $$M_p\cong\mathbb k[x,y,z]/(x^2+y^2+z^2-1,x-a,y-b,z-c)\cong\mathbb k.$$ La acción transportada es la indicada en el enunciado.
>>4. Todo $A$-submódulo de $\mathbb k$ es un subespacio sobre $\mathbb k$, porque los polinomios constantes actúan por multiplicación escalar. Como $\dim_{\mathbb k}\mathbb k=1$, los únicos submódulos son $0$ y $\mathbb k$. Luego $M_p$ es simple.

^e16002

## 2. Preparación de Wedderburn–Artin: los simples que aparecen en el módulo regular

>[!proposition] La descomposición del módulo regular es finita
>Si $R\neq0$ es un anillo semisimple, existen módulos simples $S_1,\ldots,S_t$, dos a dos no isomorfos, y enteros positivos $n_1,\ldots,n_t$ tales que $$ {}_RR\cong\bigoplus_{i=1}^t S_i^{\oplus n_i}.$$
>
>>[!Proof]-
>>1. Por [[Teorico 15#^e15008|anillo semisimple]], existe una descomposición interna $R=\bigoplus_{\alpha\in I}T_\alpha$ con cada $T_\alpha$ simple. Como $1\in R$, existen índices distintos $\alpha_1,\ldots,\alpha_m$ y elementos $u_j\in T_{\alpha_j}$ tales que $$1=u_1+\cdots+u_m.$$
>>2. Para todo $r\in R$, $$r=r1=ru_1+\cdots+ru_m\in T_{\alpha_1}+\cdots+T_{\alpha_m},$$ porque cada sumando es un submódulo del módulo regular. Por tanto, esos finitísimos sumandos ya generan todo $R$.
>>3. Ningún otro $T_\alpha$ puede aparecer: estaría contenido en la suma de los anteriores y tendría intersección cero con ella, de modo que sería cero, contradiciendo su simplicidad. La descomposición es finita.
>>4. Agrupamos los sumandos isomorfos. Elegimos un representante $S_i$ de cada clase y llamamos $n_i$ a su número de apariciones. Así obtenemos la expresión anunciada, con $S_i\not\cong S_j$ cuando $i\neq j$.

^e16003

>[!lemma] Todos los módulos simples aparecen en el módulo regular
>Sea $R\neq0$ semisimple y sea $M$ un $R$-módulo simple. Entonces $M$ es isomorfo a alguno de los $S_i$ de la descomposición anterior. En particular, existe un monomorfismo $M\hookrightarrow R$.
>
>>[!Proof]-
>>1. Elegimos $0\neq m\in M$ y definimos $\varphi:R\to M$ por $\varphi(r)=rm$. Su imagen es un submódulo que contiene a $m$, luego es todo $M$. Así, $\varphi$ es sobreyectiva y no nula.
>>2. Usamos [[Teorico 16#^e16003|descomposición finita del módulo regular]]. Si la restricción de $\varphi$ a cada copia de cada $S_i$ fuera cero, $\varphi$ sería cero en todo $R$. Por tanto, existe una copia $T\cong S_i$ para la cual $\varphi|_T:T\to M$ es no nula.
>>3. Por [[Teorico 15#^e1500a|Schur]], $\varphi|_T$ es un isomorfismo. Su inversa, seguida de la inclusión $T\hookrightarrow R$, da un monomorfismo $M\hookrightarrow R$.

^e16004

## 3. Endomorfismos de sumas directas

### 3.1. Varias copias de un mismo simple

>[!lemma] Endomorfismos de una suma de copias de un simple
>Sea $S$ un $R$-módulo simple y sea $n\geq1$. Entonces $E=\operatorname{End}_R(S)$ es un anillo de división y $$\operatorname{End}_R(S^{\oplus n})\cong M_n(E).$$
>
>>[!Proof]-
>>1. Por [[Teorico 15#^e1500a|Schur]], $E$ es un anillo de división. Sean $\iota_j:S\to S^{\oplus n}$ y $\pi_i:S^{\oplus n}\to S$ las inclusiones y proyecciones canónicas. Satisfacen $$\pi_i\iota_j=\begin{cases}\operatorname{id}_S&i=j,\\0&i\neq j,\end{cases}\qquad\sum_{k=1}^n\iota_k\pi_k=\operatorname{id}_{S^{\oplus n}}.$$
>>2. Definimos $$\Phi:\operatorname{End}_R(S^{\oplus n})\longrightarrow M_n(E),\qquad\Phi(f)_{ij}=\pi_i f\iota_j.$$ Cada entrada es un endomorfismo $R$-lineal de $S$. La aplicación es aditiva porque la composición distribuye respecto de la suma.
>>3. Todo endomorfismo $f$ se recupera de sus entradas mediante $$f=\left(\sum_i\iota_i\pi_i\right)f\left(\sum_j\iota_j\pi_j\right)=\sum_{i,j}\iota_i(\pi_i f\iota_j)\pi_j.$$ Si $\Phi(f)=0$, todos los términos son cero y $f=0$. Luego $\Phi$ es inyectiva.
>>4. Dada una matriz $B=(b_{ij})\in M_n(E)$, definimos $$f_B=\sum_{i,j}\iota_i b_{ij}\pi_j.$$ Entonces $$\pi_a f_B\iota_b=\sum_{i,j}(\pi_a\iota_i)b_{ij}(\pi_j\iota_b)=b_{ab}.$$ Así, $\Phi(f_B)=B$ y $\Phi$ es sobreyectiva.
>>5. Para $f,h\in\operatorname{End}_R(S^{\oplus n})$, $$\begin{aligned}\Phi(fh)_{ij}&=\pi_i f\left(\sum_k\iota_k\pi_k\right)h\iota_j\\&=\sum_k(\pi_i f\iota_k)(\pi_k h\iota_j)=\sum_k\Phi(f)_{ik}\Phi(h)_{kj}=(\Phi(f)\Phi(h))_{ij}.\end{aligned}$$ Además, $\Phi(\operatorname{id})$ es la matriz identidad. Por tanto, $\Phi$ es un isomorfismo de anillos.

^e16005

### 3.2. Sumandos sin morfismos entre sí

>[!lemma] Endomorfismos por bloques diagonales
>Sean $M_1,\ldots,M_t$ módulos tales que $\operatorname{Hom}_R(M_i,M_j)=0$ para todo $i\neq j$. Entonces $$\operatorname{End}_R\left(\bigoplus_{i=1}^tM_i\right)\cong\prod_{i=1}^t\operatorname{End}_R(M_i).$$ Como la familia es finita, el producto también puede escribirse como suma directa de anillos.
>
>>[!Proof]-
>>1. Sean $\iota_i$ y $\pi_i$ las inclusiones y proyecciones canónicas. Definimos $$\Psi(f)=(\pi_i f\iota_i)_{i=1}^t.$$ Cada componente pertenece a $\operatorname{End}_R(M_i)$, y $\Psi$ es aditiva.
>>2. Para $i\neq j$, la aplicación $\pi_i f\iota_j:M_j\to M_i$ es cero por hipótesis. Por tanto, $$f=\sum_{i,j}\iota_i(\pi_i f\iota_j)\pi_j=\sum_i\iota_i(\pi_i f\iota_i)\pi_i.$$ Esta fórmula muestra que $\Psi$ es inyectiva.
>>3. Dada una familia $(f_i)_{i=1}^t$, el endomorfismo $f=\sum_i\iota_i f_i\pi_i$ satisface $\pi_j f\iota_j=f_j$ para todo $j$. Así, $\Psi$ es sobreyectiva.
>>4. Para cualesquiera $f,h$, $$\pi_i fh\iota_i=\sum_j(\pi_i f\iota_j)(\pi_j h\iota_i)=(\pi_i f\iota_i)(\pi_i h\iota_i),$$ porque los términos con $j\neq i$ son cero. Además, $\Psi(\operatorname{id})=(\operatorname{id}_{M_i})_i$. Luego $\Psi$ es un isomorfismo de anillos.

^e16006

## 4. Teorema de Wedderburn–Artin

>[!remark] Corrección de la identificación con el anillo de endomorfismos
>En la página 3 se escribe $R\cong\operatorname{End}_R(R)$. Para módulos a izquierda y composición usual, la identificación correcta es $$R^{\mathrm{op}}\cong\operatorname{End}_R({}_RR).$$ Aquí $R^{\mathrm{op}}$ tiene la misma suma que $R$ y producto $a\ast b=ba$.
>
>>[!Proof]-
>>1. Para $a\in R$, la multiplicación a derecha $\rho_a(r)=ra$ es $R$-lineal, pues $\rho_a(sr)=(sr)a=s(ra)$. Si $f\in\operatorname{End}_R({}_RR)$, entonces $f(r)=f(r1)=rf(1)$; por tanto, $f=\rho_{f(1)}$.
>>2. La aplicación $a\mapsto\rho_a$ es aditiva y biyectiva, pero $$\rho_a\circ\rho_b(r)=(rb)a=r(ba)=\rho_{ba}(r).$$ Invierte el orden del producto de $R$, de modo que es un isomorfismo desde $R^{\mathrm{op}}$.

^e16007

>[!theorem] Wedderburn–Artin
>Sea $R\neq0$ un anillo semisimple. Existen anillos de división $D_1,\ldots,D_t$ y enteros positivos $n_1,\ldots,n_t$ tales que $$R\cong\prod_{i=1}^tM_{n_i}(D_i).$$ La lista de pares $(n_i,D_i)$ queda determinada salvo permutación e isomorfismo de los anillos de división.
>
>>[!Proof]-
>>1. Por [[Teorico 16#^e16003|descomposición finita del módulo regular]], escribimos $${}_RR\cong\bigoplus_{i=1}^tS_i^{\oplus n_i},\qquad S_i\not\cong S_j\text{ si }i\neq j.$$
>>2. Si $i\neq j$, todo morfismo de una copia de $S_i$ a una copia de $S_j$ es cero por [[Teorico 15#^e1500a|Schur]]. Un morfismo $S_i^{\oplus n_i}\to S_j^{\oplus n_j}$ se reconstruye a partir de esas componentes mediante las inclusiones y proyecciones canónicas; por tanto, también es cero.
>>3. Ponemos $E_i=\operatorname{End}_R(S_i)$. Aplicamos [[Teorico 16#^e16007|endomorfismos del módulo regular]], [[Teorico 16#^e16006|endomorfismos por bloques diagonales]] y [[Teorico 16#^e16005|endomorfismos de copias de un simple]]: $$R^{\mathrm{op}}\cong\operatorname{End}_R(R)\cong\prod_{i=1}^t\operatorname{End}_R(S_i^{\oplus n_i})\cong\prod_{i=1}^tM_{n_i}(E_i).$$
>>4. Tomamos anillos opuestos. Para cualquier anillo $E$, la transposición define un isomorfismo $M_n(E)^{\mathrm{op}}\to M_n(E^{\mathrm{op}})$: si $A\ast B=BA$, entonces $$(BA)^t_{ij}=\sum_k b_{jk}a_{ki}=\sum_k a_{ki}\ast b_{jk}=(A^tB^t)_{ij},$$ donde el último producto matricial se calcula en $E^{\mathrm{op}}$. La transposición es aditiva, biyectiva y preserva la unidad.
>>5. Con $D_i=E_i^{\mathrm{op}}$, obtenemos $$R\cong\prod_{i=1}^tM_{n_i}(D_i).$$ Cada $D_i$ es un anillo de división: el inverso de un elemento no nulo de $E_i$ también es su inverso para el producto opuesto.

^e16008

>[!remark] Alcance de la demostración del manuscrito
>Las fotos demuestran la existencia de la descomposición mediante los dos lemas anteriores; la unicidad se enuncia, pero no se desarrolla. Se conserva aquí esa distinción. La corrección con anillos opuestos no cambia el enunciado de existencia, pero sí la identificación concreta $D_i=\operatorname{End}_R(S_i)^{\mathrm{op}}$ para módulos a izquierda.

## 5. Representaciones complejas del grupo cíclico

Sea $C_n=\langle g:g^n=1\rangle$, con $n\geq1$. El manuscrito usa la notación $\mathbb Z_n$. Por [[Teorico 15#^e15006|Maschke]], $\mathbb C[C_n]$ y $\mathbb R[C_n]$ son semisimples.

>[!definition] Los módulos $\mathbb C_k$
>Para $k\in\{0,\ldots,n-1\}$, sea $$\zeta_k=e^{2\pi ik/n}.$$ Definimos $\mathbb C_k$ como el espacio vectorial $\mathbb C$ con la acción $$g\cdot\lambda=\zeta_k\lambda,\qquad\left(\sum_{j=0}^{n-1}a_jg^j\right)\cdot\lambda=\left(\sum_{j=0}^{n-1}a_j\zeta_k^j\right)\lambda.$$

^e16009

>[!proposition] Clasificación de los simples complejos de $C_n$
>Los módulos $\mathbb C_0,\ldots,\mathbb C_{n-1}$ forman un conjunto completo de representantes de las clases de isomorfismo de $\mathbb C[C_n]$-módulos simples. Son todos de dimensión uno y $$\mathbb C[C_n]\cong\mathbb C^n$$ como $\mathbb C$-álgebras.
>
>>[!Proof]-
>>1. Como $\zeta_k^n=1$, el operador dado por multiplicación por $\zeta_k$ satisface la relación $g^n=1$. Así, [[Teorico 16#^e16009|acción asociada a una raíz de la unidad]] está bien definida. Todo submódulo es un subespacio complejo de $\mathbb C$, luego cada $\mathbb C_k$ es simple.
>>2. Si $f:\mathbb C_k\to\mathbb C_\ell$ es un morfismo, su linealidad compleja y su compatibilidad con $g$ dan $$\zeta_k f(\lambda)=f(\zeta_k\lambda)=f(g\cdot\lambda)=g\cdot f(\lambda)=\zeta_\ell f(\lambda).$$ Si $k\neq\ell$, las raíces son distintas, por lo que $f=0$. En particular, $\mathbb C_k\not\cong\mathbb C_\ell$.
>>3. Sea $S$ un módulo simple. Por [[Teorico 16#^e16004|simples dentro del módulo regular]], $S$ se incluye en $\mathbb C[C_n]$; en particular, tiene dimensión compleja finita. Si $T$ es la acción de $g$ sobre $S$, entonces $T^n=\operatorname{id}_S$.
>>4. Sobre $\mathbb C$, $T$ tiene un autovector $0\neq v\in S$ con autovalor $\lambda$. Aplicar $T^n$ a $v$ da $\lambda^n=1$, luego $\lambda=\zeta_k$ para algún $k$. La recta $\mathbb Cv$ es estable bajo $g$, sus potencias y sus combinaciones lineales; es un submódulo no nulo. Como $S$ es simple, $S=\mathbb Cv\cong\mathbb C_k$. Esta verificación de que la lista es completa se explicita aquí.
>>5. Todo endomorfismo de $\mathbb C_k$ es multiplicación por un escalar complejo, y esas multiplicaciones conmutan con la acción. Por tanto, $\operatorname{End}_{\mathbb C[C_n]}(\mathbb C_k)\cong\mathbb C$.
>>6. Aplicamos [[Teorico 16#^e16008|Wedderburn–Artin]]. Hay $n$ clases de simples, con anillos de división asociados isomorfos a $\mathbb C$, de modo que $$\mathbb C[C_n]\cong\prod_{k=0}^{n-1}M_{m_k}(\mathbb C)$$ para ciertos $m_k\geq1$. La construcción es compatible con los escalares complejos; tomando dimensiones, $$n=\dim_{\mathbb C}\mathbb C[C_n]=\sum_{k=0}^{n-1}m_k^2.$$ Hay $n$ sumandos, todos al menos $1$, así que todos los $m_k$ son $1$. Concluimos $\mathbb C[C_n]\cong\mathbb C^n$.

^e1600a

## 6. Representaciones reales del grupo cíclico

### 6.1. El álgebra de grupo como cociente

>[!proposition] Presentación polinómica de $\mathbb R[C_n]$
>Existe un isomorfismo de $\mathbb R$-álgebras $$\mathbb R[C_n]\cong\mathbb R[x]/(x^n-1)$$ que identifica la clase de $x$ con $g$.
>
>>[!Proof]-
>>1. Definimos $\varphi:\mathbb R[x]\to\mathbb R[C_n]$ por $\varphi(p)=p(g)$. Es un morfismo de $\mathbb R$-álgebras y es sobreyectivo porque $1,g,\ldots,g^{n-1}$ generan el álgebra como espacio vectorial.
>>2. Como $g^n=1$, tenemos $\varphi(x^n-1)=0$, de modo que $(x^n-1)\subseteq\ker\varphi$.
>>3. Para todo $p$, el algoritmo de división de polinomios da $p=q(x)(x^n-1)+r(x)$, con $r=0$ o $\deg r<n$. Si $\varphi(p)=0$, entonces $r(g)=0$. Los elementos $1,g,\ldots,g^{n-1}$ son una base del álgebra de grupo, así que todos los coeficientes de $r$ son cero. Luego $p\in(x^n-1)$ y $\ker\varphi=(x^n-1)$.
>>4. Aplicamos [[Teorico 13#^e1300f|primer teorema de isomorfismo]] a los módulos subyacentes; como $\varphi$ también preserva productos y unidad, la identificación obtenida es de $\mathbb R$-álgebras.

^e1600b

>[!proposition] Simples y factores irreducibles
>Los $\mathbb R[C_n]$-módulos simples son, salvo isomorfismo, los módulos $$\mathbb R[x]/(p(x)),$$ donde $p$ recorre los factores mónicos irreducibles de $x^n-1$ en $\mathbb R[x]$; la acción de $g$ es multiplicación por la clase de $x$.
>
>>[!Proof]-
>>1. Usamos [[Teorico 16#^e1600b|presentación polinómica del álgebra cíclica]]. Si $S$ es simple sobre $B=\mathbb R[x]/(x^n-1)$, por [[Teorico 14#^e14005|módulos simples]] y [[Teorico 14#^e14006|cociente simple y maximalidad]] tenemos $S\cong B/\mathfrak m$ con $\mathfrak m$ maximal.
>>2. Por [[Teorico 13#^e13012|correspondencia de submódulos]], $\mathfrak m=I/(x^n-1)$ para un ideal maximal $I\subseteq\mathbb R[x]$ que contiene a $(x^n-1)$. El cociente se identifica con $\mathbb R[x]/I$.
>>3. Como $\mathbb R[x]$ es principal, $I=(p)$ para un polinomio mónico irreducible $p$. La inclusión $x^n-1\in(p)$ equivale a la existencia de $q\in\mathbb R[x]$ con $x^n-1=pq$.
>>4. Recíprocamente, si $p$ es un factor irreducible de $x^n-1$, $(p)$ es maximal y el cociente es simple por [[Teorico 14#^e14006|cociente simple y maximalidad]]. La relación $x^n-1=0$ se cumple en el cociente, de modo que la acción pasa a $B$.
>>5. Factores mónicos distintos dan módulos no isomorfos: el anulador de $\mathbb R[x]/(p)$ es $(p)$, ya que un polinomio anula todo el módulo si y solo si anula la clase de $1$. Un isomorfismo de módulos preserva el anulador.

^e1600c

### 6.2. Factorización de $x^n-1$ sobre $\mathbb R$

Sobre $\mathbb C$, $$x^n-1=\prod_{k=0}^{n-1}(x-\zeta_k),\qquad\zeta_k=e^{2\pi ik/n}.$$ Las únicas raíces reales posibles son $1$ y $-1$; $1$ aparece siempre, y $-1$ aparece exactamente cuando $n$ es par.

Cada par de raíces no reales conjugadas produce un factor real $$q_k(x)=(x-\zeta_k)(x-\overline{\zeta_k})=x^2-2\cos(2\pi k/n)x+1.$$ Es irreducible sobre $\mathbb R$: para los índices considerados, $\sin(2\pi k/n)\neq0$ y su discriminante es $$\Delta=4\cos^2(2\pi k/n)-4=-4\sin^2(2\pi k/n)<0.$$

Para expresar los rangos sin ambigüedad, distinguimos las dos paridades:

- **Si $n=2m+1$ es impar**, $$x^n-1=(x-1)\prod_{k=1}^{m}\left(x^2-2\cos(2\pi k/n)x+1\right).$$
- **Si $n=2m$ es par**, $$x^n-1=(x-1)(x+1)\prod_{k=1}^{m-1}\left(x^2-2\cos(2\pi k/n)x+1\right).$$

Se interpreta un producto sin factores como $1$. La observación del manuscrito $x^n-1=(x-1)\Phi_n(x)$, con $\Phi_n$ el polinomio ciclotómico, solo es válida para $n$ primo. Para $n$ general se tiene $$x^n-1=\prod_{d\mid n}\Phi_d(x).$$ La clasificación real anterior utiliza las raíces de la unidad y no requiere que $n$ sea primo.

### 6.3. Acción explícita en los módulos simples reales

>[!proposition] Lista de los simples reales
>Los simples de dimensión uno son el módulo trivial, dado por $g\cdot\lambda=\lambda$, y, si $n$ es par, el módulo de signo, dado por $g\cdot\lambda=-\lambda$.
>Para cada factor cuadrático de la sección anterior, hay un simple de dimensión dos $$S_k=\mathbb R[x]/(q_k(x)).$$ Si $\theta_k=2\pi k/n$ y $c_k=\cos\theta_k$, entonces, en la base $(\bar1,\bar x)$, $$g\cdot\bar1=\bar x,\qquad g\cdot\bar x=-\bar1+2c_k\bar x,\qquad[g]_{(\bar1,\bar x)}=\begin{pmatrix}0&-1\\1&2c_k\end{pmatrix}.$$
>
>>[!Proof]-
>>1. Para el factor $x-1$, la clase de $x$ vale $1$, de donde resulta el módulo trivial. Para $x+1$, que aparece solo si $n$ es par, la clase de $x$ vale $-1$, y se obtiene el módulo de signo.
>>2. Si $q_k$ es cuadrático, el algoritmo de división de polinomios muestra que toda clase tiene un único representante $a+bx$. Así, $(\bar1,\bar x)$ es una base real de $S_k$.
>>3. La acción del generador es multiplicación por $\bar x$. Por tanto, $$g\cdot\bar1=\bar x,\qquad g\cdot\bar x=\overline{x^2}.$$ Como $q_k(\bar x)=0$, tenemos $\overline{x^2}=2c_k\bar x-\bar1$. Las columnas de la matriz son las coordenadas de estas dos imágenes, lo que da la matriz indicada.
>>4. Por [[Teorico 16#^e1600c|simples y factores irreducibles]], los módulos enumerados son simples, dos a dos no isomorfos y agotan todas las clases. En particular, cada módulo cuadrático puede identificarse con $\mathbb C$ como espacio vectorial real mediante $\bar p\mapsto p(\zeta_k)$; bajo esa identificación, $g$ actúa por multiplicación por $\zeta_k$, es decir, por una rotación de ángulo $\theta_k$.

^e1600d

>[!warning] Signos en la última página
>El manuscrito escribe al final $g\cdot\bar x=\bar1-2\cos(\theta_k)\bar x$. Los signos están invertidos: la relación $\bar x^2-2\cos(\theta_k)\bar x+\bar1=0$ da $g\cdot\bar x=-\bar1+2\cos(\theta_k)\bar x$.

## 7. Representaciones de $\mathbb k[x,y]$: un ejemplo no semisimple

### 7.1. Los simples sobre un cuerpo algebraicamente cerrado

>[!remark] El resultado de geometría algebraica utilizado
>El manuscrito usa el resultado siguiente: si $\mathfrak m$ es un ideal maximal de $\mathbb k[x,y]$, entonces el cuerpo $K=\mathbb k[x,y]/\mathfrak m$ es una extensión algebraica de $\mathbb k$. Es un caso del lema de Zariski; la demostración no aparece en las fotos. Si $\mathbb k$ es algebraicamente cerrado, se sigue que $K=\mathbb k$ como extensión de $\mathbb k$.

>[!definition] Módulo asociado a un punto del plano
>Para $(a,b)\in\mathbb C^2$, denotamos por $\mathbb C_{(a,b)}$ al espacio vectorial $\mathbb C$ con la acción $$f(x,y)\cdot\lambda=f(a,b)\lambda.$$ En particular, $$x\cdot\lambda=a\lambda,\qquad y\cdot\lambda=b\lambda.$$

^e1600e

>[!proposition] Clasificación de los simples de $\mathbb C[x,y]$
>Todo $\mathbb C[x,y]$-módulo simple es isomorfo a un único $\mathbb C_{(a,b)}$. Equivalentemente, existe una correspondencia entre puntos de $\mathbb C^2$ y clases de isomorfismo de módulos simples, dada por $$(a,b)\longmapsto\mathbb C_{(a,b)}\cong\mathbb C[x,y]/(x-a,y-b).$$
>
>>[!Proof]-
>>1. Sea $S$ simple. Por [[Teorico 14#^e14005|módulos simples]] y [[Teorico 14#^e14006|cociente simple y maximalidad]], existe un ideal maximal $\mathfrak m$ con $S\cong\mathbb C[x,y]/\mathfrak m$. Como el anillo es conmutativo, ese cociente es un cuerpo.
>>2. Aplicamos el resultado de geometría algebraica indicado arriba. El cociente es una extensión algebraica de $\mathbb C$, y por ser $\mathbb C$ algebraicamente cerrado la inclusión de escalares es un isomorfismo. La proyección al cociente, seguida de su identificación con $\mathbb C$, da un morfismo de $\mathbb C$-álgebras $\pi:\mathbb C[x,y]\to\mathbb C$.
>>3. Sean $a=\pi(x)$ y $b=\pi(y)$. Como $\pi$ deja fijos los escalares y preserva suma y producto, para todo $f$ se cumple $\pi(f)=f(a,b)$. Además, $$f(x,y)-f(a,b)=\bigl(f(x,y)-f(a,y)\bigr)+\bigl(f(a,y)-f(a,b)\bigr)\in(x-a,y-b).$$ Por tanto, $\ker\pi=(x-a,y-b)=\mathfrak m$ y $S\cong\mathbb C_{(a,b)}$.
>>4. Recíprocamente, [[Teorico 16#^e1600e|acción asociada a un punto del plano]] define un módulo de dimensión compleja uno. Sus únicos subespacios, y por tanto sus únicos submódulos, son $0$ y el módulo completo. Luego es simple.
>>5. Si $F:\mathbb C_{(a,b)}\to\mathbb C_{(a',b')}$ es un isomorfismo, entonces $F(1)\neq0$. La compatibilidad con $x$ da $$aF(1)=F(x\cdot1)=x\cdot F(1)=a'F(1),$$ de donde $a=a'$. La misma cuenta con $y$ da $b=b'$. Esto demuestra la unicidad del punto.

^e1600f

### 7.2. Un módulo que no es semisimple

>[!example] El cociente por $(x,y)^2$
>Sea $$P=\mathbb C[x,y]/(x,y)^2=\mathbb C[x,y]/(x^2,xy,y^2).$$ Como espacio vectorial complejo, tiene base $(\bar1,\bar x,\bar y)$. La acción de las variables está dada por $$\begin{array}{c|ccc}&\bar1&\bar x&\bar y\\\hline x\cdot&\bar x&0&0\\y\cdot&\bar y&0&0\end{array}.$$
>El subespacio $$N=\mathbb C\bar x\oplus\mathbb C\bar y$$ es un submódulo propio no nulo. Por tanto, $P$ no es simple. De hecho, $P$ no es semisimple y, en consecuencia, $\mathbb C[x,y]$ no es un anillo semisimple.
>
>>[!Proof]-
>>1. En el cociente, todo monomio de grado total al menos dos es cero, así que toda clase se escribe como $a\bar1+b\bar x+c\bar y$. Ningún polinomio no nulo de grado a lo sumo uno pertenece a $(x^2,xy,y^2)$, por lo que la expresión es única. Esto verifica la base y, multiplicando por $x$ y por $y$, la tabla de la acción.
>>2. Las dos variables anulan $N$, y los escalares lo preservan. Como $x,y$ y las constantes generan el anillo, $N$ es un submódulo. Tiene dimensión dos, mientras que $P$ tiene dimensión tres, de modo que es propio y no nulo.
>>3. Para justificar la falta de semisimplicidad —no solo la falta de simplicidad—, supongamos que $N$ tiene un complemento $U$ en $P$. Entonces $\dim_{\mathbb C}U=1$ y podemos elegir $0\neq u=a\bar1+b\bar x+c\bar y$ que genere $U$. Necesariamente $a\neq0$: de lo contrario, $u\in U\cap N=0$.
>>4. Por la tabla de la acción, $x\cdot u=a\bar x\neq0$. Como $U$ es un submódulo, este elemento pertenece a $U$; también pertenece a $N$. Esto contradice $U\cap N=0$. Luego $N$ no tiene complemento y, por [[Teorico 15#^e15005|caracterizaciones de la semisimplicidad]], $P$ no es semisimple. Esta verificación completa la conclusión esbozada en las fotos.
>>5. Por [[Teorico 15#^e15009|semisimplicidad del anillo y de sus módulos]], la existencia de $P$ implica que $\mathbb C[x,y]$ no es un anillo semisimple.

^e16010

>[!exercise] Ejercicio final del manuscrito
>Ver que $P=\mathbb C[x,y]/(x,y)^2$ es **indescomponible**, es decir, que no puede escribirse como suma directa de dos submódulos no nulos. El manuscrito lo propone como «ejercicio con ChatGPT»; se deja aquí sin resolver.
