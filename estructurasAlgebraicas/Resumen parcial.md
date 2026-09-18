---
tags:
  - AlgebraicStructures
  - Groups
  - Rings
  - Summary
---

# Resumen parcial - theory + practicos

>[!summary] Idea global
> El curso tiene 3 capas: diccionario (grupo, subgrupo, morfismo, normal, cociente), conteo (Lagrange, acciones, Sylow fuerzan la estructura desde $|G|$), y construcciones (directo, semidirecto, libre más presentaciones, anillos más ideales).

>[!remark] Los dos movimientos del parcial
> Todo problema es una de dos cosas: proponer un morfismo y leer núcleo e imagen con el 1er teorema de isomorfismo, o contar con Lagrange, órbita-estabilizador, o Sylow.

## 1. Grupos, subgrupos, cíclicos

>[!definition] Diccionario básico
> - Semigrupo más neutro es monoide, más inversos es grupo. Neutro e inversos son únicos.
> - $f:G\to H$ es morfismo iff $f(ab)=f(a)f(b)$ para todo $a,b\in G$. Entonces $f(e_{G})=e_{H}$ y $f(a^{-1})=f(a)^{-1}$.
> - Criterio de subgrupo: $H\ne\varnothing$ es subgrupo iff $ab^{-1}\in H$ para todo $a,b\in H$. Intersección arbitraria de subgrupos es subgrupo. Unión de dos es subgrupo iff uno contiene al otro.
> - $\langle S\rangle$ es la intersección de todos los subgrupos que contienen a $S$, i.e. productos finitos de elementos de $S$ e inversos.
> - Cíclico significa $G=\langle a\rangle=\{a^{k}:k\in\mathbb Z\}$. Entonces $|a|=|\langle a\rangle|$. Si $|a|=k$ es finito, $a^{k}=e$ iff $k=|a|q$ para algún $q\in\mathbb Z$.

>[!proposition] Órdenes
> - Órdenes en cíclico: sea $G=\langle g\rangle$ con $|G|=k$, sea $d=\gcd(m,k)$, escribe $m=d m_{1}$ y $k=d k_{1}$. Entonces $|g^{m}|=k_{1}$. En particular los generadores de $\mathbb Z_{k}$ son exactamente las unidades.
> - Morfismos achican orden: si $|x|=k$ es finito entonces $|f(x)|\mid k$. Conjugación preserva orden: $|a|=|a^{-1}|=|bab^{-1}|$ y $|ab|=|ba|$.
> - Tests de abelianidad: $G$ abeliano iff $(ab)^{2}=a^{2}b^{2}$ para todo $a,b\in G$ iff $(ab)^{-1}=a^{-1}b^{-1}$ para todo $a,b\in G$ iff $(ab)^{k}=a^{k}b^{k}$ para tres $k$ consecutivos. Si $a^{2}=e$ para todo $a\in G$ entonces $G$ es abeliano.
> - Todos los subgrupos de $\mathbb Z$ son cíclicos: si $H\ne\{0\}$ entonces $H=\langle m\rangle$ con $m=\min(H\cap\mathbb Z_{>0})$ por buena ordenación más algoritmo de división.

>[!example] Grupos que hay que conocer de memoria
> - $S_{k}$: ciclos disjuntos, ciclos como transposiciones, orden es m.c.m. de longitudes, signo es $(-1)^{\text{paridad}}$. Para $k\ge 3$ es no abeliano y $Z(S_{k})=\{e\}$.
> - $S_{k}=\langle(12),(13),\dots,(1k)\rangle=\langle(12),(23),\dots\rangle=\langle(12),(12\dots k)\rangle$.
> - $D_{k}=\{e,r,\dots,r^{k-1},s,sr,\dots,sr^{k-1}\}$ con $r^{k}=e$, $s^{2}=e$, $srs=r^{-1}$, $sr^{j}=r^{-j}s$. Tiene orden $2k$ y es no abeliano para $k\ge 3$. En $D_{4}$ vale $r^{2}\in Z(D_{4})$.
> - $Q_{8}=\{\pm1,\pm i,\pm j,\pm k\}$ con $i^{2}=j^{2}=k^{2}=-1$ y $ij=k=-ji$ cíclicamente. No abeliano, único elemento de orden $2$ es $-1$, el resto no trivial tiene orden $4$. Todo subgrupo es normal pero $Q_{8}$ no es abeliano.
> - Matrices sobre $\mathbb Z_{p}$ con $p$ primo: elegir columnas independientes da $|GL(k,\mathbb Z_{p})|=\prod_{i=0}^{k-1}(p^{k}-p^{i})$. El determinante toma $p-1$ valores, i.e. $|GL(k,\mathbb Z_{p})|=|SL(k,\mathbb Z_{p})|\cdot(p-1)$. Caso especial $GL(2,\mathbb Z_{2})=SL(2,\mathbb Z_{2})\cong S_{3}$ de orden $6$.
> - Inventario orden $8$ por órdenes: $\mathbb Z_{8}\cong G_{8}$ tiene $4$ de orden $8$; $\mathbb Z_{2}\times\mathbb Z_{4}$ tiene $4$ de orden $4$ y $3$ de orden $2$; $D_{4}$ tiene $2$ de orden $4$ y $5$ de orden $2$; $Q_{8}\cong\mathcal H$ tiene $6$ de orden $4$ y $1$ de orden $2$; $\mathbb Z_{2}^{3}$ tiene $7$ de orden $2$.

## 2. Normal, cociente, isomorfismos

>[!definition] Clases y normalidad
> - Clase izquierda $gH=\{gh:h\in H\}$. Misma clase iff $g^{-1}\tilde g\in H$. Las clases particionan $G$ y todas tienen tamaño $|H|$.
> - $H\trianglelefteq G$ iff $gHg^{-1}=H$ para todo $g\in G$ iff $gH=Hg$ para todo $g\in G$ iff $ghg^{-1}\in H$ para todo $g,h$.
> - Todo subgrupo de abeliano es normal. Recíproca falsa por $Q_{8}$. Índice $2$ implica normal porque las clases son $N$ y $G\setminus N$. Subgrupo único de un orden dado es normal porque $|gHg^{-1}|=|H|$.

>[!theorem] Cociente y 1er isomorfismo
> - $G/H$ con $(gH)(\tilde gH)=g\tilde gH$ está bien definido iff $H\trianglelefteq G$. Entonces neutro es $H$ y $(gH)^{-1}=g^{-1}H$. Sin normalidad no hay grupo.
> - Proyección $\pi:G\to G/H$ con $\pi(g)=gH$ es epi con $\ker\pi=H$.
> - Propiedad universal: si $H\trianglelefteq G$ y $f:G\to\tilde G$ cumple $H\subseteq\ker f$, hay único $\hat f:G/H\to\tilde G$ con $\hat f(gH)=f(g)$ y $f=\hat f\circ\pi$.
> - 1er isomorfismo: $G/\ker f\cong\operatorname{Im}f$. Receta: para identificar un cociente, construir epi y leer el núcleo.
> - Ejemplos: $\mathbb R/\mathbb Z\cong S^{1}$ vía $t\mapsto e^{2\pi it}$, $(G\times H)/(G\times\{e\})\cong H$, $(G_{1}\times G_{2})/(N_{1}\times N_{2})\cong(G_{1}/N_{1})\times(G_{2}/N_{2})$, $n\mathbb Z/m\mathbb Z\cong\mathbb Z_{j}$ donde $m=jk$, $S_{4}/V_{4}\cong S_{3}$ y $A_{4}/V_{4}\cong\mathbb Z_{3}$.

>[!proposition] Productos y 2do/3er isomorfismo
> - Conjunto $HK=\{hk:h\in H,k\in K\}$. Entonces $HK\le G$ iff $HK=KH$. Si $N\trianglelefteq G$ entonces $NK\le G$.
> - Como conjuntos: $|HK|\cdot|H\cap K|=|H|\cdot|K|$. Si $G$ es abeliano siempre $HK\le G$.
> - 2do isomorfismo: $N\trianglelefteq G$ y $K\le G$ dan $N\cap K\trianglelefteq K$ y $K/(N\cap K)\cong NK/N$.
> - 3er isomorfismo: $K\trianglelefteq G$, $H\trianglelefteq G$, $K\le H$ dan $H/K\trianglelefteq G/K$ y $(G/K)/(H/K)\cong G/H$.
> - Correspondencia: subgrupos de $G/N$ son exactamente $K/N$ con $N\le K\le G$, normal iff $K$ normal.

>[!remark] Centro y conmutador
> - Centro $Z(G)$ es normal abeliano. Epi $f$ da $f(Z(G))\subseteq Z(H)$, iso da igualdad. Preimagen de normal es normal. Imagen de normal es normal sólo si $f$ es epi.
> - Conmutador $[G,G]$ generado por conmutadores es normal, $G/[G,G]=G^{ab}$ es abeliano, y $G/H$ abeliano iff $[G,G]\subseteq H$.

## 3. Lagrange y productos directos

>[!theorem] Lagrange
> - $G$ finito y $H\le G$ dan $|G|=[G:H]\cdot|H|$, donde $[G:H]$ es cantidad de clases. Luego $|H|\mid|G|$, $|g|\mid|G|$, $g^{|G|}=e$.
> - Si $|G|=p$ primo entonces $G=\langle g\rangle\cong\mathbb Z_{p}$ para cualquier $g\ne e$, y $G$ es simple. Sin recíproca: $A_{4}$ tiene orden $12$ y ningún subgrupo de orden $6$.
> - Cadena: $K\le H\le G$ finito da $[G:K]=[G:H]\cdot[H:K]$.

>[!proposition] Directo interno y descomposición cíclica
> - Directo interno: $G=HK$, $H\cap K=\{e\}$, $hk=kh$ para todo $h,k$ dan $G\cong H\times K$ vía $(h,k)\mapsto hk$.
> - Si $k=ab$ con $\gcd(a,b)=1$ entonces $\mathbb Z_{k}\cong\mathbb Z_{a}\times\mathbb Z_{b}$; iterar a potencias primas.
> - Producto $\prod G_{i}$ son todas las tuplas, suma $\bigoplus G_{i}$ son tuplas de soporte finito, siempre subgrupo. Iguales si el índice es finito.

>[!remark] Generación finita
> - Si $N$ y $G/N$ son finitamente generados con levantados $x_{i}N$ generando $G/N$ y $k_{j}$ generando $N$, entonces $\{x_{i}\}\cup\{k_{j}\}$ genera $G$.

## 4. Acciones, Burnside, clases, p-grupos

>[!definition] Acción, órbita, estabilizador
> - Acción $G\times X\to X$ con $e\cdot x=x$ y $(gh)\cdot x=g\cdot(h\cdot x)$ es lo mismo que $\rho:G\to S_{X}$. Fiel significa $\rho$ inyectiva. Cayley: la acción regular da $G\hookrightarrow S_{G}$.
> - Órbita $O_{x}=G\cdot x$, estabilizador $G_{x}=\{g:g\cdot x=x\}\le G$. Las órbitas particionan $X$. Transitiva significa una sola órbita. Toda transitiva es coclases: $X\cong G/G_{x}$.

>[!theorem] Órbita-estabilizador
> - $G/G_{x}\cong O_{x}$ vía $gG_{x}\mapsto g\cdot x$, luego $|O_{x}|=[G:G_{x}]$ y en finito $|G|=|O_{x}|\cdot|G_{x}|$.
> - Cauchy: $p\mid|G|$ primo da elemento de orden $p$ rotando tuplas de producto $e$ por $\mathbb Z_{p}$.

>[!theorem] Burnside
> - $G$ finito en $X$ finito con $m$ órbitas da $m\cdot|G|=\sum_{g\in G}|X^{g}|$. Dividir por $|G|$ sólo vale si la acción es libre.
> - Cubo con $6$ colores distintos: $|X|=6!$, la identidad fija todo, los $23$ no triviales fijan nada, luego $m\cdot24=720$ y $m=30$.

>[!theorem] Clases y ecuación de clases
> - Conjugación $g\cdot x=gxg^{-1}$: órbita es $Cl(x)$, estabilizador es $C_{G}(x)$, luego $|Cl(x)|=[G:C_{G}(x)]$. Tamaño $1$ iff $x\in Z(G)$.
> - Ecuación: $|G|=|Z(G)|+\sum_{i}[G:C_{G}(x_{i})]$ sobre representantes no centrales.
> - En subgrupos: estabilizador es $N_{G}(H)$, cantidad de conjugados es $[G:N_{G}(H)]$. Normal iff un conjugado iff $N_{G}(H)=G$.

>[!theorem] p-grupos
> - Lema fijo: $|G|=p^{k}$ en $X$ finito da $|X|\equiv|X^{G}|\pmod p$ porque órbitas no triviales tienen tamaño potencia positiva de $p$.
> - Luego $p$-grupo finito no trivial tiene $p\mid|Z(G)|$ y $Z(G)\ne\{e\}$.
> - Orden $p^{2}$: necesariamente abeliano, o bien $\mathbb Z_{p^{2}}$ o bien $\mathbb Z_{p}\times\mathbb Z_{p}$.
> - Orden $6$: o bien $\mathbb Z_{6}$ o bien $D_{3}\cong S_{3}$.

## 5. Sylow y semidirecto

>[!theorem] Sylow
> - Dato binomial: si $\gcd(p,k)=1$ entonces $p\nmid\binom{kp^{a}}{p^{a}}$.
> - Congruencia del normalizador: si $|H|=p^{a}$ entonces $[N_{G}(H):H]\equiv[G:H]\pmod p$ haciendo actuar $H$ en $G/H$.
> - Sylow para $|G|=p^{k}k_{0}$ con $\gcd(p,k_{0})=1$: existe Sylow de orden $p^{k}$; todos conjugados; $n_{p}\equiv1\pmod p$ y $n_{p}\mid k_{0}$ vía $n_{p}=[G:N_{G}(P)]$.

>[!remark] Cómo usar Sylow
> - Listar divisores de $k_{0}$ congruentes a $1$ mod $p$. $n_{p}=1$ iff Sylow normal iff único.
> - $|G|=p^{k}q$ con $p>q$ primos tiene único Sylow $p$ normal de índice $q$. No hay simples de órdenes $12,28,56,200,30,36,96$.
> - $|G|=pq$ con $p<q$ da $G\cong C_{q}\rtimes C_{p}$; si además $q\nmid p-1$ en el orden adecuado entonces $G$ cíclico.

>[!definition] Semidirecto externo e interno
> - Externo: $(q,x)(r,y)=(q\varphi(x)(r),xy)$ para $\varphi:P\to\operatorname{Aut}(Q)$. Siempre $Q_{0}\trianglelefteq Q\rtimes P$, $P_{0}$ no necesariamente normal. $\varphi$ trivial es producto directo.
> - Reconocimiento: $Q\trianglelefteq G$, $P\cap Q=\{e\}$, $QP=G$ dan $G\cong Q\rtimes_{\varphi}P$ con $\varphi(x)(q)=xqx^{-1}$ vía $\Psi(q,x)=qx. Fijado ese $\Psi$, la acción es única.
> - Ejemplos: $D_{k}\cong\mathbb Z_{k}\rtimes\mathbb Z_{2}$ por inversión, $S_{k}\cong A_{k}\rtimes\langle(12)\rangle$, triangular afín $B\cong\mathbb R\rtimes\mathbb R^{\times}$, euclídeo $E(k)\cong\mathbb R^{k}\rtimes O(k)$.
> - No-ejemplos: $\mathbb Z_{4}$ no tiene complemento de su subgrupo de orden $2$; $Q_{8}$ no es semidirecto.

## 6. Libres y presentaciones

>[!definition] Grupo libre y presentación
> - Palabras en $X^{\pm1}$, cancelación $aa^{-1}\to\emptyset$, forma reducida única $\operatorname{red}(w)$ por pila. $F(X)$ son reducidas con $u\cdot v=\operatorname{red}(uv)$.
> - $F(\varnothing)=\{1\}$, $F(\{x\})\cong\mathbb Z$, $F(\{x,y\})$ no abeliano. Sólo se cancelan pares inversos adyacentes.
> - Propiedad universal: cualquier mapa $f:X\to G$ extiende a único $\hat f:F(X)\to G$ por sustitución.
> - Presentación $\langle X\mid R\rangle=F(X)/\langle\langle R\rangle\rangle$ donde $\langle\langle R\rangle\rangle$ es clausura normal. Todo grupo es cociente de libre.

## 7. Anillos

>[!definition] Anillo, centro, dominio
> - Anillo tiene $(R,+)$ grupo, $\cdot$ asociativa con $1$, dos distributividades. Entonces $(R,+)$ es abeliano expandiendo $(1+1)(x+y)$ de dos formas. Morfismo preserva $+$, $\cdot$, $1$.
> - Centro $Z(R)$, dominio significa $1\ne0$ más sin divisores de cero, división significa todo no nulo invertible, cuerpo agrega conmutatividad.
> - $Z(M_{k}(R))$ son escalares $\lambda I_{k}$ con $\lambda\in Z(R)$.

>[!theorem] Producto, libre, ideales, cociente
> - Producto $\prod R_{i}$ coordenada a coordenada más propiedad universal. Anillo libre $\mathbb Z\langle X\rangle$ son combinaciones $\mathbb Z$-lineales de palabras en $X$.
> - Ideal significa subgrupo aditivo más $RI\subseteq I$ a izquierda y $IR\subseteq I$ a derecha. Producto $[r][s]=[rs]$ bien definido iff bilateral.
> - Entonces $R/I$ es anillo y $\pi:R\to R/I$ epi con núcleo $I$. 1er iso anillos: $R/\ker(f)\cong\operatorname{Im}(f)$, más factorización cuando $J\subseteq\ker(f)$.
> - Ejemplos clave: evaluación da $\mathbb k[x]/\langle x-\lambda\rangle\cong\mathbb k$; $\mathbb k\langle x,y\rangle/\langle xy-yx\rangle\cong\mathbb k[x,y]$; puntos de $x^{2}+y^{2}=1$ son $\operatorname{Hom}(\mathbb C[x,y]/\langle x^{2}+y^{2}-1\rangle,\mathbb C)$.

## 8. Movidas y trampas de examen

>[!warning] Lo que más frena
> - Lagrange primero: deducir qué órdenes e índices son posibles antes de exhibir elementos. Usar $|H\cap K|\mid|H|$ y $|H\cap K|\mid|K|$ para forzar intersecciones.
> - Normalidad: $gX\ne Xg$ como conjuntos no es el test; testear $gxg^{-1}\in H$. Índice $2$ siempre normal. Central implica normal, no al revés.
> - Morfismos: chequear bien definido en representantes, luego homomorfismo, luego epi, luego núcleo, luego 1er iso. Misma imagen da igualdad sólo con inyectividad.
> - Acciones: verificar $e\cdot x=x$ y compatibilidad; aplicar $|G|=|O_{x}|\cdot|G_{x}|$; fijos son uniones de órbitas. Burnside necesita fijos por tipo.

>[!summary] Para memorizar
> - Lagrange, $|g|\mid|G|$, orden primo cíclico simple, clasificación $p^{2}$, clasificación orden $6$, estructura $pq$, órbita-estabilizador, Burnside $m\cdot|G|=\sum|X^{g}|$, ecuación de clases, Sylow, tres isomorfismos, propiedad universal libre, criterios directo y semidirecto.
