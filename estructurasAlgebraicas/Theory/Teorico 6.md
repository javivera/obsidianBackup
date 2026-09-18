---
dateCreated: 2026-08-18
tags:
  - AlgebraicStructures
  - Groups
  - GroupActions
  - ExamReview
source: "Clase2 (1).pdf"
---

# Teórico 6 — Acciones de grupos

>[!remark] Idea central
>Una **acción de grupos** permite estudiar un grupo observando cómo transforma los elementos de un conjunto. Esta perspectiva unifica permutaciones, simetrías geométricas, clases laterales, conjugación y problemas de conteo. Las tres herramientas principales de la clase son el teorema órbita-estabilizador, el lema de Burnside y la ecuación de clases.

## Objetivos de estudio

>[!Remark]
>Al terminar esta nota deberías poder:
>- Verificar que una operación define una acción y traducirla a un homomorfismo $G\to S_X$.
>- Calcular órbitas, estabilizadores y puntos fijos.
>- Usar $|O_x|=[G:G_x]$ para obtener información aritmética sobre un grupo finito.
>- Probar el teorema de Cauchy mediante una acción de $\mathbb Z_p$.
>- Contar objetos "salvo simetrías" con el lema de Burnside.
>- Deducir la ecuación de clases y aplicarla a grupos de orden potencia de un primo.

## 1. Definición de acción

> [!definition] Acción a izquierda
>Sean $G$ un grupo, con neutro $1_G$, y $X$ un conjunto. Una **acción a izquierda de $G$ sobre $X$** es una aplicación $$\begin{aligned}G\times X&\longrightarrow X\\(g,x)&\longmapsto g\cdot x\end{aligned}$$ que satisface, para todo $g,h\in G$ y todo $x\in X$:
>
>1. **Identidad:** $1_G\cdot x=x$. (La acción es unitaria) 
>2. **Compatibilidad:** $(gh)\cdot x=g\cdot(h\cdot x)$. (La acción es asociativa) 

> [!remark] Cómo pensar la definición
>Cada $g\in G$ actúa como una transformación de $X$. La compatibilidad afirma que multiplicar primero $g$ y $h$ en el grupo produce la misma transformación que aplicar primero $h$ y después $g$.

### Toda acción equivale a un homomorfismo en un grupo simétrico

>[!Remark]
>Denotemos por $S_X$ al grupo de todas las biyecciones $X\to X$, con la composición.

> [!proposition] Acción $\Longleftrightarrow$ representación por permutaciones
>Dar una acción de $G$ sobre $X$ equivale a dar un homomorfismo de grupos $$\rho:G\longrightarrow S_X.$$
>
>> [!Proof]-
>>1. Supongamos dada una acción. Para cada $g\in G$ definimos $\rho(g):X\to X$ por $\rho(g)(x)=g\cdot x$. La aplicación $\rho(g)$ es biyectiva porque su inversa es $\rho(g^{-1})$: $$\rho(g^{-1})(\rho(g)(x))=g^{-1}\cdot(g\cdot x)=(g^{-1}g)\cdot x=x.$$
>>2. Además, para todo $g,h\in G$ y $x\in X$, $$\rho(gh)(x)=(gh)\cdot x=g\cdot(h\cdot x)=(\rho(g)\circ\rho(h))(x).$$ Por lo tanto, $\rho(gh)=\rho(g)\circ\rho(h)$ y $\rho$ es un homomorfismo.
>>3. Recíprocamente, si $\rho:G\to S_X$ es un homomorfismo, definimos $g\cdot x=\rho(g)(x)$. Como $\rho(1_G)=\operatorname{id}_X$, se tiene $1_G\cdot x=x$; y como $\rho(gh)=\rho(g)\circ\rho(h)$, se obtiene $(gh)\cdot x=g\cdot(h\cdot x)$.

> [!definition] Acción fiel y núcleo
>La acción es **fiel** si el homomorfismo $\rho:G\to S_X$ es inyectivo. Su núcleo es $$\ker(\rho)=\{g\in G:g\cdot x=x\text{ para todo }x\in X\}.$$ Así, la acción es fiel si y solo si únicamente $1_G$ fija todos los puntos de $X$.

## 2. Ejemplos fundamentales

### 2.1. Acción regular de $G$ sobre sí mismo

>[!Remark]
>El grupo $G$ actúa sobre el conjunto subyacente de $G$ por multiplicación a izquierda: $$g\cdot h=gh.$$
>La acción es fiel: si $g\cdot h=h$ para todo $h$, tomando $h=1_G$ resulta $g=1_G$. 
>Por tanto, el homomorfismo $\rho:G\to S_G$ asociado es inyectivo. Y es $\rho(g)(h)=gh$ 
>Como es monomorfismo entonces $$G\leq S_{G}$$

> [!theorem] Teorema de Cayley
>Todo grupo $G$ es isomorfo a un subgrupo de $S_G$. Si $G$ es finito y $|G|=n$, entonces $G$ es isomorfo a un subgrupo de $S_n$.

^297bb3

### 2.2. Acción por conjugación

>[!example]
>El grupo $G$ actúa sobre sí mismo mediante $$g\cdot h=ghg^{-1}.$$
>En efecto, $1_G\cdot h=h$ y $$g\cdot(k\cdot h)=g(khk^{-1})g^{-1}=(gk)h(gk)^{-1}=(gk)\cdot h.$$
>Esta acción será la fuente de las clases de conjugación y de la ecuación de clases.

### 2.3. Acción sobre clases laterales

>[!Remark] Accion sobre clases laterales
>Sea $H\leq G$ y sea $G/H=\{xH:x\in G\}$ el conjunto de clases laterales izquierdas. Entonces $G$ actúa sobre $G/H$ por $$g\cdot(xH)=(gx)H.$$
>La definición no depende del representante: si $xH=yH$, entonces $y^{-1}x\in H$ y, por consiguiente, $(gy)^{-1}(gx)=y^{-1}x\in H$, de modo que $(gx)H=(gy)H$.
>Faltaría ver las dos propiedades de acción de grupo
>Esta acción es transitiva (explicar que significa) , y el estabilizador de la clase $H$ es exactamente $H$.

^153521

### 2.4. Acción inducida por un homomorfismo

>[!Remark]
>Si $f:G\to H$ es un homomorfismo, entonces $G$ actúa sobre $H$ por $$g\cdot h=f(g)h.$$
>La identidad actúa trivialmente porque $f(1_G)=1_H$, y $$g\cdot(k\cdot h)=f(g)f(k)h=f(gk)h=(gk)\cdot h.$$

### 2.5. Acción de $SL_2(\mathbb Z)$ sobre el semiplano superior

>[!Remark]
>Sea $$\mathbb H=\{z\in\mathbb C:\operatorname{Im}(z)>0\}.$$ Para $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ definimos la transformación de Möbius $$\gamma\cdot z=\frac{az+b}{cz+d}.$$
>Ahora queremos ver que la acción está bien definida ósea que $\gamma\cdot z$ está en $\mathbb H$ 
>Analogamente si $z\in\mathbb H$ y $ad-bc=1$, entonces $$\operatorname{Im}\left(\frac{az+b}{cz+d}\right)=\frac{\operatorname{Im}(z)}{|cz+d|^2}>0.$$
>
>> [!Proof]-
>>1. Como $\overline z$ es el conjugado de $z$, racionalizamos el denominador: $$\begin{aligned}\frac{az+b}{cz+d}&=\frac{(az+b)(c\overline z+d)}{|cz+d|^2}\\&=\frac{ac|z|^2+ad z+bc\overline z+bd}{|cz+d|^2}.\end{aligned}$$
>>2. Los términos $ac|z|^2$ y $bd$ son reales. Por lo tanto, $$\begin{aligned}\operatorname{Im}\left(\frac{az+b}{cz+d}\right)&=\frac{ad\operatorname{Im}(z)+bc\operatorname{Im}(\overline z)}{|cz+d|^2}\\&=\frac{(ad-bc)\operatorname{Im}(z)}{|cz+d|^2}\\&=\frac{\operatorname{Im}(z)}{|cz+d|^2}>0.\end{aligned}$$

>[!Remark]
>La compatibilidad con el producto de matrices se verifica mediante una sustitución directa; así, esta fórmula define una acción.

### 2.6. Acción sobre funciones por precomposición

>[!Remark] $SL_{2}(\mathbb{Z})$ actuando sobre $\mathcal O(\mathbb H)$  
>Si $\mathcal O(\mathbb H)$ denota un espacio de funciones analíticas definido sobre $\mathbb H$, $$\mathcal O(\mathbb H)=\{f :\mathbb H \rightarrow \mathbb{C}:f \text{ analíticas }\}.$$ Entonces $SL_{2}(\mathbb Z)$ actúa sobre $\mathcal O(\mathbb H)$ mediante $$\gamma\cdot f=f\circ\gamma^{-1},\qquad (\gamma\cdot f)(z)=f(\gamma^{-1}\cdot z).$$ Recordemos que, si $$\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z),$$ entonces $$\gamma^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$ y su acción de Möbius sobre $z\in\mathbb H$ es $$\gamma^{-1}\cdot z=\frac{dz-b}{-cz+a}.$$ Por lo tanto, la acción sobre las funciones puede escribirse explícitamente como $$(\gamma\cdot f)(z)=f\left(\frac{dz-b}{-cz+a}\right).$$
>El inverso es imprescindible: $$\begin{aligned}((\gamma_1\gamma_2)\cdot f)(z)&=f((\gamma_1\gamma_2)^{-1}\cdot z)\\&=f(\gamma_2^{-1}\cdot(\gamma_1^{-1}\cdot z))\\&=(\gamma_1\cdot(\gamma_2\cdot f))(z).\end{aligned}$$

### 2.7. Rotaciones del círculo

>[!Remark]
>El grupo $S^1=\{e^{i\theta}:0\leq\theta<2\pi\}$ actúa sobre $$S^2=\{(x,y,z)\in\mathbb R^3:x^2+y^2+z^2=1\}$$ mediante rotaciones alrededor del eje $z$: $$e^{i\theta}\cdot(x,y,z)=(\cos\theta\,x-\sin\theta\,y,\sin\theta\,x+\cos\theta\,y,z).$$

### 2.8. Matrices ortogonales

>[!Remark] $O(3)$ actua sobre $S^{2}$ 
>El grupo $$O(3)=\{A\in GL_3(\mathbb R):A^{\mathsf T}A=I_3\}$$ actúa sobre $S^2\subseteq\mathbb R^3$ mediante $A\cdot v=Av$. La acción está bien definida porque $$\|Av\|^2=(Av)^{\mathsf T}(Av)=v^{\mathsf T}A^{\mathsf T}Av=v^{\mathsf T}v=\|v\|^2.$$Osea si $v\in S^{2}$ entonces $A\cdot v$ está en la esfera también 
>
>Más generalmente, $GL(V)$ actúa sobre el espacio vectorial $V$ por evaluación, $T\cdot v=T(v)$, y $\operatorname{Diff}(M)$ actúa sobre una variedad $M$ por evaluación, $f\cdot x=f(x)$.

>[!example]- Ejemplo avanzado: un subgrupo libre de $SO(3)$
>Sean $$A=\frac15\begin{pmatrix}3&-4&0\\4&3&0\\0&0&5\end{pmatrix},\qquad B=\frac15\begin{pmatrix}5&0&0\\0&3&-4\\0&4&3\end{pmatrix}.$$ Ambas matrices pertenecen a $SO(3)$: son rotaciones del mismo ángulo, con coseno $3/5$, alrededor de ejes perpendiculares. Un teorema clásico sobre rotaciones de ejes perpendiculares, demostrado mediante un argumento tipo *ping-pong*, implica que $\langle A,B\rangle$ es un grupo libre de rango $2$. La demostración completa es más avanzada que el resto de esta clase.

## 3. Órbitas y estabilizadores

> [!definition] Órbita
>Si $G$ actúa sobre $X$ y $x\in X$, la **órbita de $x$** es $$O_x=G\cdot x=\{g\cdot x:g\in G\}.$$

> [!definition] Estabilizador
>El **estabilizador de $x$** es $$G_x=\operatorname{Stab}_G(x)=\{g\in G:g\cdot x=x\}.$$ 

^982c3a

> [!proposition] El estabilizador es un subgrupo
>Para cada $x\in X$, se tiene $G_x\leq G$.
>
>> [!Proof]-
>>1. Como $1_G\cdot x=x$, tenemos $1_G\in G_x$.
>>2. Si $g,h\in G_x$, entonces $(gh)\cdot x=g\cdot(h\cdot x)=g\cdot x=x$, luego $gh\in G_x$.
>>3. Si $g\in G_x$, entonces $g^{-1}\cdot x=g^{-1}\cdot(g\cdot x)=(g^{-1}g)\cdot x=x$, luego $g^{-1}\in G_x$.

### 3.1 Las órbitas particionan el conjunto

>[!definition] Las orbitas particionan $X$ 
>Definimos $x\sim y$ si existe $g\in G$ tal que $g\cdot x=y$. Esta es una relación de equivalencia: es reflexiva por la identidad, simétrica porque $g\cdot x=y$ implica $g^{-1}\cdot y=x$, y transitiva por la compatibilidad de la acción. Sus clases de equivalencia son precisamente las órbitas.
>Por ello, $X$ es unión disjunta de sus órbitas: $$X=\bigsqcup_{i\in I}O_{x_i},$$ donde se elige un representante $x_i$ de cada órbita.

^c3e1b1

### 3.2 Acciona transitiva

> [!definition] Acción transitiva
>Decimos que una acción es **transitiva** si tiene una sola órbita

> [!remark] Interpretación de la transitividad
>Una acción es transitiva si, partiendo de un solo punto $x\in X$ y aplicando todos los elementos de $G$, se obtiene todo el conjunto $X$: $$G\cdot x=X.$$ En otras palabras, el grupo puede transportar cualquier punto de $X$ a cualquier otro punto.

> [!proposition] Caracterizaciones de una acción transitiva
>Sea $G$ un grupo que actúa sobre un conjunto no vacío $X$. Son equivalentes:
>- **(i)** La acción es transitiva.
>- **(ii)** Para todo $x\in X$, se tiene $O_x=X$.
>- **(iii)** Para cualesquiera $x,y\in X$, existe $g\in G$ tal que $g\cdot x=y$.
>
>> [!Proof]-
>>- **(i) $\Rightarrow$ (ii).** Sea $x\in X$. Como la acción es transitiva, existe una única órbita. Además, $x=1_G\cdot x\in O_x$, así que $O_x$ es esa única órbita. Puesto [[Teorico 6#^c3e1b1|las orbitas particionan]] a $X$, necesariamente $O_x=X$.
>>- **(ii) $\Rightarrow$ (iii).** Sean $x,y\in X$. Por hipótesis, $O_x=X$, de modo que $y\in O_x$. Por la definición de órbita, existe $g\in G$ tal que $g\cdot x=y$.
>>- **(iii) $\Rightarrow$ (i).** Fijemos $x\in X$. Para todo $y\in X$, la hipótesis proporciona un elemento $g\in G$ tal que $g\cdot x=y$; por lo tanto, $y\in O_x$. Así, $X\subseteq O_x$, y la inclusión $O_x\subseteq X$ se sigue de la definición de acción. En consecuencia, $O_x=X$, por lo que la acción tiene una sola órbita osea es transitiva.

^6cbdb9

### 3.3 Estabilizadores de puntos de una misma órbita

> [!proposition] Estabilizadores de puntos de una misma órbita
>Si $x,y$ están en la misma órbita, entonces existe $g\in G$ tal que
>$$G_x=gG_yg^{-1}.$$ 
>En particular, la conjugación induce una biyección entre $G_y$ y $G_x$. Por lo tanto, $|G_x|=|G_y|$; si $G$ es finito, los estabilizadores tienen el mismo orden.
>
>> [!Proof]-
>>1. Como $x$ y $y$ están en la misma órbita, existe $g\in G$ tal que $x=g\cdot y$.
>>2. Probemos primero que $gG_yg^{-1}\subseteq G_x$. Sea $h\in G_y$, es decir, $h\cdot y=y$. Entonces $$\begin{aligned}(ghg^{-1})\cdot x&=(ghg^{-1})\cdot(g\cdot y)\\&=(gh)\cdot y\\&=g\cdot(h\cdot y)\\&=g\cdot y=x.\end{aligned}$$ Por lo tanto, $ghg^{-1}\in G_x$.
>>3. Para la inclusión inversa, sea $k\in G_x$, es decir, $k\cdot x=x$. Como $x=g\cdot y$, tenemos $$\begin{aligned}(g^{-1}kg)\cdot y&=(g^{-1}kg)\cdot(g^{-1}\cdot x)\\&=(g^{-1}k)\cdot x\\&=g^{-1}\cdot(k\cdot x)\\&=g^{-1}\cdot x=y.\end{aligned}$$ Por consiguiente, $g^{-1}kg\in G_y$, y entonces $k\in gG_yg^{-1}$.
>>4. Las dos inclusiones implican $$G_x=gG_yg^{-1}.$$ 
>>5. La aplicación de conjugación
>>$$\begin{aligned}
>>c_g:G_y&\longrightarrow G_x\\
>>h&\longmapsto ghg^{-1}
>>\end{aligned}$$
>>es biyectiva, pues su inversa es $c_{g^{-1}}:k\mapsto g^{-1}kg$.
>>6. Por consiguiente, $|G_x|=|G_y|$. En particular, si $G$ es finito, los estabilizadores tienen el mismo orden.

^22e0a5

## 4. Teorema órbita-estabilizador

> [!theorem] Órbita-estabilizador
>Sea $G$ un grupo que actúa sobre $X$ y sea $x\in X$. Existe una biyección $$G/G_x\longrightarrow O_x,\qquad gG_x\longmapsto g\cdot x.$$ Si $G$ es finito, entonces $$|O_x|=[G:G_x]=\frac{|G|}{|G_x|}.$$
>
>> [!Proof]-
>>1. **Buena definición.** Si $gG_x=hG_x$, entonces $h^{-1}g\in G_x$, de modo que $(h^{-1}g)\cdot x=x$. Aplicando $h$ a ambos lados y usando la compatibilidad de la acción, obtenemos $$\begin{aligned}h\cdot\bigl((h^{-1}g)\cdot x\bigr)&=h\cdot x\\\bigl(h(h^{-1}g)\bigr)\cdot x&=h\cdot x\\g\cdot x&=h\cdot x.\end{aligned}$$ Por lo tanto, la imagen no depende del representante elegido para la clase lateral $gG_x$.
>>2. **Sobreyectividad.** Todo elemento de $O_x$ tiene la forma $g\cdot x$ para algún $g\in G$.
>>3. **Inyectividad.** Si $g\cdot x=h\cdot x$, entonces $(h^{-1}g)\cdot x=x$ (misma idea usada en buena definicion) por lo que $h^{-1}g\in G_x$ y $gG_x=hG_x$.

^674eaa

>[!Remark]
>Otra interpretacion directa de [[Teorico 6#^674eaa]] es que $$|O_{x}|\big||G|$$ osea que la cantidad de elementos en cualquier orbitas divide a la cantidad de elementos del conjunto que actua 

> [!corollary] Consecuencias rápidas
>Si $G$ es finito, entonces $|O_x|$ divide a $|G|$. Además, una acción transitiva sobre un conjunto finito $X$ satisface $$|X|=[G:G_x].$$
>
>> [!Proof]-
>>1. Por el teorema órbita-estabilizador, $$|G|=|O_x|\,|G_x|.$$ Como $|G_x|$ es un entero, se sigue que $|O_x|$ divide a $|G|$.
>>2. Por el teorema de Lagrange y la igualdad $|G_x|=|G|/|O_x|$ obtenida mediante órbita-estabilizador, $$\begin{aligned}|G|&=[G:G_x]|G_x|\\&=[G:G_x]\frac{|G|}{|O_x|}.\end{aligned}$$ Como $|G|\neq 0$, podemos cancelar $|G|$ y obtenemos $|O_x|=[G:G_x]$. Finalmente, si la acción es transitiva, entonces $O_x=X$ para todo $x\in X$; por lo tanto, $$|X|=|O_x|=[G:G_x].$$

## 5. Aplicación: teorema de Cauchy

>[!theorem] Teorema de Cauchy
>Sea $G$ un grupo finito y sea $p$ un número primo. Si $p\mid |G|$, entonces existe $g\in G$ con $|g|=p$
>
>> [!Proof]-
>>1. Consideremos $$X=\{(x_1,\ldots,x_p)\in G^p:x_1x_2\cdots x_p=1_G\}.$$ Para contar sus elementos, elegimos libremente $x_1,\ldots,x_{p-1}$. 
>>2. Como cada uno tiene $|G|$ posibilidades, existen $|G|^{p-1}$ elecciones para estos primeros elementos. Una vez elegidos, hay una única posibilidad para el último, pues la condición $x_1\cdots x_{p-1}x_p=1_G$ obliga a que $$x_p=(x_1\cdots x_{p-1})^{-1}.$$
>>3. Por lo tanto, $$|X|=|G|^{p-1}.$$ Como $p\mid |G|$, entonces $p||G|^{p-1}$ y entonces $p\mid |X|$.
>>4. El grupo $\mathbb Z_p$ actúa sobre $X$ desplazando cíclicamente las coordenadas. Concretamente, $$\begin{aligned}\overline 1\cdot(x_1,x_2,\ldots,x_p)&=(x_2,x_3,\ldots,x_p,x_1),\\\overline 2\cdot(x_1,x_2,\ldots,x_p)&=(x_3,x_4,\ldots,x_p,x_1,x_2),\\\overline m\cdot(x_1,\ldots,x_p)&=(x_{m+1},\ldots,x_p,x_1,\ldots,x_m),\end{aligned}$$ donde los índices se interpretan módulo $p$. 
>>5. Ademas podemos ver que esta accion esta bien definida. La operación es **cerrada** $X$ por que si $x_1\cdots x_p=1_G$, entonces $$x_2\cdots x_px_1=x_1^{-1}(x_1\cdots x_p)x_1=1_G,$$ y repitiendo este desplazamiento se obtiene lo mismo para cualquier $\overline m$.
>>6. La **operacion cumple las dos reglas**: Porque $\overline 0$ deja cada tupla fija y dos desplazamientos sucesivos se suman: $$\overline 0\cdot x=x,\qquad \overline m\cdot(\overline n\cdot x)=\overline{m+n}\cdot x.$$
>>7. Por lo tanto, la operación está bien definida y satisface los axiomas de una acción de $\mathbb Z_p$ sobre $X$.
>>8. Por el [[Teorico 6#^674eaa|teorema órbita-estabilizador]], para cada $x\in X$ tenemos $$|O_x|=\frac{|\mathbb Z_p|}{|(\mathbb Z_p)_x|}=\frac{p}{|(\mathbb Z_p)_x|},$$ y por lo tanto $$p=|O_x|\,|(\mathbb Z_p)_x|.$$ Así, $|O_x|\mid p$ y, como $p$ es primo, cada órbita tiene tamaño $1$ o $p$.
>>9. Por tanto, las órbitas no triviales aportan un múltiplo de $p$ al cardinal de $X$. Y entonces podemos pensar $$|X|=(\text{cantidad de orbitas de tamaño } 1)+p(\text{cantidad de orbitas de tamaño }p):=F+pK$$   
>>10. Ahroa notamos que las orbitas de tamaño $1$ son los puntos fijos, osea $x\in X$ tal que $g \cdot x=x$ para todo $g\in \mathbb{Z}_{p}$.
>>11. Y notamos que si un $x\in X$ es fijo por el generador $\overline 1$ entonces es fijo por cualquier otro $z\in \mathbb{Z}_{p}$ obviamente 
>>12. Ademas un $x\in X$ es fijo por el generador $\overline{1}$ si y solo si es constante osea: $$(x_1,x_{2},\ldots,x_p)=\overline{1} (x_{1},x_{2},\ldots,x_{p})=(x_{2},x_{3},\ldots,x_{p},x_{1}) \iff (x_{1},\ldots,x_{p})=(g,\ldots,g).$$ por ende para pertenecer a $X$ debe satisfacer $x_{i}^{p}=g^p=1_G$.
>>13. Por 3. tenemos $p\big||X|$ luego por 9. tenemos $$F\equiv |X|-pk\equiv0\text{ mod}(p)$$  entonces la cantidad de puntos fijos (Osea es una orbita de tamaño $1$)  también es múltiplo de $p$. 
>>14. Luego como la tupla $(1_G,\ldots,1_G)$ es un punto fijo, no puede ser el único entonces existen al menos $p$ puntos fijos. 
>>15. Por lo tanto, existe un $(g,\ldots,g)\in X$ (por que es un punto fijo paso 12. nos dice que sus entradas son todas iguales) tal que $g\neq1_G$ (para que $(g,\ldots,g)\neq(1_{G},\ldots1_{G})$) tal que $g^p=1_G$ (para que $(g,\ldots,g)\in X$) 
>>16. Ademas el orden de $g$ divide a $p$ (misma cuenta de siempre en general) y no es $1_{G}$, luego $|g|=p$.

^4bed2b

> [!proposition] Clasificación de las acciones transitivas
>Si $G$ actúa transitivamente sobre $X$ y fijamos $x\in X$, entonces la aplicación $$\varphi:G/G_x\longrightarrow X,\qquad gG_x\longmapsto g\cdot x$$ es una biyección $G$-equivariante. Por eso, toda acción transitiva es esencialmente una acción sobre clases laterales.
>
>> [!Proof]-
>>1. **Buena definición.** Si $gG_x=hG_x$, entonces $h^{-1}g\in G_x$, de modo que $(h^{-1}g)\cdot x=x$. Aplicando $h$ a ambos lados y usando la compatibilidad de la acción, obtenemos $g\cdot x=h\cdot x$. Por lo tanto, la imagen no depende del representante elegido para la clase lateral $gG_x$.
>>2. **Sobreyectividad.** Como la acción es [[Teorico 6#^6cbdb9|transitiva]], para todo $y\in X$ existe $g\in G$ tal que $g\cdot x=y$; por lo tanto, $y$ es la imagen de la clase $gG_x$.
>>3. **Inyectividad.** Si $g\cdot x=h\cdot x$, entonces $(h^{-1}g)\cdot x=x$, por lo que $h^{-1}g\in G_x$ y $gG_x=hG_x$. Así, la aplicación es biyectiva.
>>4. **Compatibilidad con la acción\equivarianza** Para todo $k,g\in G$, la aplicación verifica $$\varphi\bigl(k\cdot(gG_x)\bigr)=\varphi\bigl((kg)G_x\bigr)=(kg)\cdot x=k\cdot(g\cdot x)=k\cdot\varphi(gG_x).$$ donde $k\cdot gG_{x}$ es la [[Teorico 6#^153521|accion sobre clases laterales]] 
>>5. Es decir $\varphi$ preserva la accion $G$ es decir da igual primero actuar en las clases laterales y despues aplicar $\varphi$ que aplicar $\varphi$ primero y despues actuar en $X$, a eso le llamamos que la acciones conmuta con $\varphi$  es decir la accion sobre $G/G_{x}$ se traduce exactamente en la accion sobre $X$
>>6. Además, el estabilizador de la clase $e_{G}G_x=G_{x}$ es exactamente $G_x$ pues $$k\cdot e_{G}G_x=e_{G}G_x \iff kG_{x}=e_{G}G_{x}\iff k\in G_x$$ Por lo tanto, toda acción transitiva es esencialmente una acción sobre clases laterales.

### Ejemplo de examen: grupos de orden $6$

> [!exercise] Clasificar los grupos de orden $6$
>Demostrar que todo grupo $G$ de orden $6$ es isomorfo a $\mathbb Z_6$ o a $D_3\cong S_3$.
>
>> [!Proof]-
>>1. Si existe $a\in G$ con $|a|=6$, entonces $G=\langle a\rangle\cong\mathbb Z_6$.
>>2. Supongamos que no hay elementos de orden $6$. Por Cauchy existen $x,y\in G$ tales que $|x|=2$ y $|y|=3$. Los subgrupos $\langle x\rangle$ y $\langle y\rangle$ tienen intersección trivial, pues el orden de un elemento de la intersección dividiría simultáneamente a $2$ y a $3$.
>>3. Los seis productos $x^iy^j$, con $0\leq i\leq1$ y $0\leq j\leq2$, son distintos. En efecto, si $x^iy^j=x^{i'}y^{j'}$, entonces $x^{i'-i}=y^{j-j'}$ pertenece a la intersección, de donde $i=i'$ y $j=j'$. Así, todos los elementos de $G$ tienen esa forma.
>>4. El subgrupo $\langle y\rangle$ tiene índice $2$, luego es normal. Por tanto, $xyx^{-1}\in\langle y\rangle$. Como la conjugación conserva el orden, $$xyx^{-1}\in\{y,y^{-1}\}.$$
>>5. Si $xyx^{-1}=y$, entonces $x$ e $y$ conmutan y $|xy|=\operatorname{mcm}(2,3)=6$, contradiciendo la hipótesis de este caso. Esta posibilidad corresponde al grupo cíclico.
>>6. Por lo tanto, en el caso no cíclico se cumple $xyx^{-1}=y^{-1}$. Las relaciones $$x^2=y^3=1_G,\qquad xyx^{-1}=y^{-1}$$ son la presentación del grupo diedral $D_3$, de modo que $G\cong D_3\cong S_3$.

## 6. Lema de Burnside para contar órbitas

> [!definition] Punto fijo
>Sea $g\in G$. Decimos que $x\in X$ es un **punto fijo de $g$** si
>$$g\cdot x=x.$$ 
>El conjunto de puntos fijos de $g$ es
>$$X^g=\operatorname{Fix}(g)=\{x\in X:g\cdot x=x\}.$$

> [!theorem] Lema de Burnside o lema de Cauchy-Frobenius
>Si un grupo finito $G$ actúa sobre un conjunto finito $X$ y $m$ es el número de órbitas, entonces $$m=\frac1{|G|}\sum_{g\in G}|X^g|.$$
>
>> [!Proof]-
>>1. Contemos de dos maneras el conjunto $$S=\{(g,x)\in G\times X:g\cdot x=x\}.$$
>>2. Si fijamos $g$, hay $|X^g|$ posibles valores de $x$, de modo que $$|S|=\sum_{g\in G}|X^g|.$$
>>3. Si fijamos $x$, hay $|G_x|$ posibles valores de $g$, de modo que $$|S|=\sum_{x\in X}|G_x|.$$
>>4. Como las órbitas particionan $X$, podemos reagrupar esta suma por órbitas. Si $X=O_{x_1}\sqcup\cdots\sqcup O_{x_m}$, entonces
>>$$\sum_{x\in X}|G_x|=\sum_{i=1}^{m}\sum_{x\in O_{x_i}}|G_x|.$$
>>5. Por la proposición sobre [[Teorico 6#^22e0a5|estabilizadores de puntos de una misma órbita]], si $x\in O_{x_i}$ entonces $G_x$ y $G_{x_i}$ son conjugados y, por consiguiente, tienen el mismo cardinal: $|G_x|=|G_{x_i}|$. 
>>6. Además, por [[Teorico 6#^674eaa|órbita-estabilizador]], $|O_{x_i}||G_{x_i}|=|G|$. Por ello, para cada $i$,
>>$$\sum_{x\in O_{x_i}}|G_x|=|O_{x_i}||G_{x_i}|=|G|.$$ 
>>7. Sumando sobre las $m$ órbitas obtenemos $|S|=m|G|$. Al comparar ambos conteos, $$m|G|=\sum_{g\in G}|X^g|,$$ y el resultado sigue al dividir por $|G|$.

^8a6f4a

> [!remark] Cuándo usar Burnside
>Burnside aparece cuando se pregunta cuántos objetos son distintos **salvo una simetría**. El procedimiento es: identificar el grupo de simetrías, clasificar sus elementos por tipo, contar los objetos fijados por cada tipo y promediar.

### Problema de la mesa circular

> [!exercise] Diez personas alrededor de una mesa
>¿De cuántas maneras pueden sentarse $10$ personas distintas alrededor de una mesa circular si configuraciones que difieren por una rotación se consideran iguales?
>
>> [!Proof]-
>>1. Sea $X$ el conjunto de asignaciones de las $10$ personas a $10$ asientos numerados. Entonces $|X|=10!$.
>>2. El grupo $\mathbb Z_{10}$ actúa rotando simultáneamente todos los asientos.
>>3. La acción es libre: una rotación no trivial no puede fijar una configuración porque todas las personas son distintas. Por lo tanto, cada órbita tiene $10$ elementos.
>>4. El número de configuraciones circulares es $$\frac{|X|}{10}=\frac{10!}{10}=9!=362880.$$

### Problema del cubo coloreado

> [!exercise] Colorear un cubo con $6$ colores distintos
>Cada una de las seis caras de un cubo se pinta con un color distinto, utilizando exactamente una vez cada uno de los $6$ colores disponibles. Dos coloraciones se consideran iguales si una rotación del cubo lleva una a la otra. ¿Cuántas coloraciones distintas hay?
>
>> [!Proof]- Demostración mediante el lema de Burnside
>>1. Sean $\mathcal F$ el conjunto de las seis caras del cubo y $\mathcal C$ el conjunto de los seis colores disponibles. Una coloración que utiliza cada color exactamente una vez es una biyección $c:\mathcal F\to\mathcal C$. Sea
>>$$X=\{c:\mathcal F\to\mathcal C:c\text{ es biyectiva}\}.$$ 
>>Como $|\mathcal F|=|\mathcal C|=6$, se tiene
>>$$|X|=6!.$$
>>
>>2. Sea $R$ el grupo de rotaciones del cubo. Entonces $|R|=24$ y $R$ actúa sobre $\mathcal F$. Y por la acción inducida sobre funciones mediante precomposición, $R$ actúa sobre $X$ mediante $$ (r\cdot c)(y)=c(r^{-1}\cdot y),\qquad r\in R,\ c\in X,\ y\in\mathcal F.$$esta acción identifica coloraciones que difieren por una rotación.
>>3. La identidad fija todas las coloraciones osea $(\operatorname{id}\cdot c)(y)=c(\operatorname{id}^{-1}\cdot y)=c(y)$ entonces $\operatorname{id}\cdot c=c$ osea $c\in X^{\operatorname{id}}$, por lo tanto:
>>$$|X^{\operatorname{id}}|=|X|=6!.$$
>>
>>4. Sea $r\in R$ una rotación no trivial. Supongo $X^{r}\neq\varnothing$ entonces existe $c\in X$ un punto fijo de $r$. Osea $r\cdot c=c$
>>5. Entonces, para toda cara $y\in\mathcal F$,$$c(y)=(r\cdot c)(y)=c(r^{-1}\cdot y).$$
>>6. Como $c$ es biyectiva, en particular es inyectiva, y por lo tanto $$y=r^{-1}\cdot y$$ osea por propiedades de accion $r\cdot y=y$ para toda cara $y\in\mathcal F$. 
>>7. Esto significa que $r$ fija cada cara del cubo, pero la única rotación que fija todas las caras es la identidad, contradiciendo que $r$ es no trivial. Luego $$X^r=\varnothing\qquad\text{para toda }r\in R\setminus\{\operatorname{id}\}.$$
>>
>>8. Por el [[Teorico 6#^8a6f4a|Lema de Burnside]], el número de órbitas es $$\frac{1}{|R|}\sum_{r\in R}|X^r|=\frac{1}{24}\left(6!+23\cdot0\right)=\frac{6!}{24}=30.$$
>
>> [!Proof]- Demostración alternativa: acción libre y órbita-estabilizador
>>9. Usamos la misma acción del grupo $R$ de rotaciones del cubo sobre el conjunto $X$ de coloraciones con los seis colores distintos.
>>
>>10. La acción es libre: si una rotación fija una coloración, entonces debe enviar cada cara a otra cara del mismo color. Como todos los colores son distintos, cada cara debe quedar fija. La única rotación que fija las seis caras es la identidad.
>>
>>11. Por lo tanto, todo estabilizador es trivial:
>>$$R_c=\{\operatorname{id}\}$$
>>para toda coloración $c\in X$. Por órbita-estabilizador,
>>$$|R\cdot c|=[R:R_c]=24.$$
>>
>>12. Las coloraciones se dividen en órbitas de $24$ elementos. En consecuencia, el número de coloraciones consideradas salvo rotaciones es
>>$$\frac{|X|}{24}=\frac{6!}{24}=30.$$

> [!Remark] Variante: se permiten repeticiones
>Si se permitieran repeticiones de colores, el conteo sería diferente. En ese caso, con $6$ colores disponibles, Burnside daría
>$$\frac{6^6+3\cdot6^4+12\cdot6^3+8\cdot6^2}{24}=2226.$$


## 7. Conjugación y ecuación de clases

> [!Remark]
>Consideramos la acción de $G$ sobre sí mismo por conjugación:
>$$g\cdot x=gxg^{-1}.$$ 

> [!definition] Clase de conjugación
>La **clase de conjugación** de $x\in G$ es el conjunto de todos los conjugados de $x$ en $G$: $$\operatorname{Cl}_G(x):=\{gxg^{-1}:g\in G\}.$$
>Notar que, considerando la acción de $G$ sobre sí mismo por conjugación ($g\cdot y = gyg^{-1}$), la clase de conjugación coincide exactamente con la **órbita** de $x$:
>$$\operatorname{Cl}_G(x) = \{g\cdot x:g\in G\} = G\cdot x = O_x.$$
>Recordar [[Teorico 6#^c3e1b1]], que nos dice que entonces $Cl_{G}(x)$ particionan $G$  

^ccd4c2

## Centralizador y Centro
> [!definition] Centralizador
>Sea $G$ un grupo y sea $x\in G$. El **centralizador de $x$ en $G$** es
>$$C_G(x)=\{g\in G:gx=xg\}.$$ 

> [!Remark] Centralizador como estabilizador
>Para la acción de conjugación, el centralizador de $x$ coincide con el [[Teorico 6#^982c3a|estabilizador]] de $x$:
>$$\begin{aligned}
>G_x&=\{g\in G:g\cdot x=x\}\\
>&=\{g\in G:gxg^{-1}=x\}\\
>&=\{g\in G:gx=xg\}=C_G(x).
>\end{aligned}$$

^3763b9

> [!definition] Centro de un grupo
>Sea $G$ un grupo. El **centro de $G$** es el conjunto de elementos de $G$ que conmutan con todos los elementos de $G$:
>$$Z(G)=\{x\in G:xg=gx\text{ para todo }g\in G\}.$$
>Equivalentemente, para $x\in G$ se tiene
>$$x\in Z(G)\iff C_G(x)=G.$$
>También, $x\in Z(G)$ si y solo si su clase de conjugación tiene un único elemento.

^62f0bc

## Ecuacion de clase

> [!corollary] Tamaño de una clase de conjugación
>Si $G$ es finito y considerando la acción de $G$ sobre sí mismo por conjugación, entonces $$|\operatorname{Cl}_G(x)|=[G:C_G(x)],$$ y, por tanto, $|\operatorname{Cl}_G(x)|$ divide a $|G|$.
>
>> [!Proof]-
>>1. Para esta acción, [[Teorico 6#^ccd4c2|la órbita de $x$ es precisamente su clase de conjugación]]: $O_x = \operatorname{Cl}_G(x)$ y ademas [[Teorico 6#^3763b9|estabilizador de $x$ coincide con su centralizador]]: $G_x = C_G(x)$ 
>>2. Entonces por el [[Teorico 6#^674eaa|teorema órbita-estabilizador]], existe una biyección entre $G/C_G(x)$ y $\operatorname{Cl}_G(x)$, de modo que:
>>$$|\operatorname{Cl}_G(x)| = [G : C_G(x)].$$
>>3. Finalmente, por el [[Teorico 4#^teorema-de-lagrange|teorema de Lagrange]], $|G| = [G : C_G(x)] \cdot |C_G(x)| = |\operatorname{Cl}_G(x)| \cdot |C_G(x)|$, lo que demuestra que $|\operatorname{Cl}_G(x)|$ divide a $|G|$.

>[!theorem] Ecuación de clases
>Sea $G$ un grupo finito actuando sobe si mismo por conjugacion. Si $x_1,\ldots,x_r$ son representantes de las clases de conjugación no centrales, entonces $$|G|=|Z(G)|+\sum_{i=1}^r[G:C_G(x_i)].$$
>
>>[!Proof]-
>>1. Primero recordamos [[Teorico 6#^ccd4c2|Las clases de conjugación particionan $G$]]:
>>$$|G| = \sum_{\text{todas las clases}} |\operatorname{Cl}_G(x)|.$$
>>
>>2. **Clases centrales (tamaño 1):** Si $z \in Z(G)$, entonces $z$ conmuta con todo $g \in G$ ($gz = zg$). Por lo tanto, al conjugar: $$g\cdot z =gzg^{-1} = zgg^{-1} = z \cdot 1 = z\quad\forall g\in G$$esto muestra que $\operatorname{Cl}_G(z)=O_{z} = G\cdot z=\{z\}$, es decir, cada elemento del centro forma su propia clase de cardinal $1$. Sumando todas estas clases:
>>$$\sum_{z \in Z(G)} |\operatorname{Cl}_G(z)| = \sum_{z \in Z(G)} 1 = |Z(G)|.$$
>>
>>3. **Clases no centrales (tamaño > 1):** Si $x \notin Z(G)$, mirando [[Teorico 6#^62f0bc|Centro de un grupo]] notamos que existe al menos un $g \in G$ tal que $gx \neq xg$ osea el centralizador es estrictamente menor que $G$ ($C_G(x) \subsetneq G$) , y por el [[Teorico 6#^674eaa|teorema órbita-estabilizador]]: $$|\operatorname{Cl}_G(x)| = [G : C_G(x)] > 1.$$sean $x_1, \ldots, x_r$ representantes de estas $r$ clases no centrales.
>>4. **Sumando todo:** Agrupando las clases centrales y no centrales en la partición de $G$:
>>$$|G| = \underbrace{\sum_{z \in Z(G)} 1}_{|Z(G)|} + \sum_{i=1}^r \underbrace{|\operatorname{Cl}_G(x_i)|}_{[G : C_G(x_i)]} = |Z(G)| + \sum_{i=1}^r [G : C_G(x_i)].$$

### Conjugación de subgrupos y normalizador

> [!definition] Normalizador
>Sea $H\leq G$. El **normalizador de $H$ en $G$** es el conjunto
>$$N_G(H)=\{g\in G:gHg^{-1}=H\}.$$ 

> [!Remark] Acción de conjugación sobre subgrupos
>El grupo $G$ actúa sobre el conjunto de sus subgrupos por conjugación: $$g\cdot H=gHg^{-1}.$$ digamos para cada $g\in G$ tenemos el subgrupo $gHg^{-1}$ pero puede haber repetidos con distintos $g$  

> [!Remark] Normalizador como estabilizador
>Para esta acción, el normalizador de $H$ coincide con el [[Teorico 6#^982c3a|estabilizador]] de $H$:
>$$\begin{aligned}
>G_H&=\{g\in G:g\cdot H=H\}\\
>&=\{g\in G:gHg^{-1}=H\}\\
>&=N_G(H).
>\end{aligned}$$

^02c559

>[!corollary]
>La cantidad de subgrupos conjugados a $H$ (osea sin contar repeticiones $|\{ gHg^{-1}:g\in G \}|$) espero  $$[G:N_G(H)].$$ En particular, $H\trianglelefteq G$ si y solo si su órbita tiene un único elemento; equivalentemente, si y solo si $N_G(H)=G$.
>>[!Proof]-
>>1. Notamos que por [[Teorico 6#^674eaa]] y por [[Teorico 6#^02c559]] $$|\{ gHg^{-1}:g\in G \}|=|G\cdot H|=|O_{H}|=[G:G_{H}]=[G:N_{G}(H)]$$ 

## 8. Aplicaciones a $p$-grupos

>[!definition] $p$-grupo
>Dado un primo $p$, hay dos definiciones en circulación (la clase usó ambas):
>1. (La habitual.) Un grupo finito $G$ es un **$p$-grupo** si $|G|=p^n$ para algún $n\geq 1$.
>2. Un grupo (posiblemente infinito) cuyos elementos tienen todos orden una potencia de $p$: para cada $g\in G$ existe $a\geq 0$ con $|g|=p^a$.
>
>Si $G$ es finito y satisface (2), entonces satisface (1): si un primo $q\neq p$ dividiera $|G|$, el [[Teorico 6#5. Aplicación: teorema de Cauchy|teorema de Cauchy]] daría un elemento de orden $q$, contradiciendo (2). En el caso finito las dos coinciden; en estas notas usamos (1).

>[!definition] Conjunto de puntos fijos de un grupo
>Sea $G$ un $p$-grupo que actúa sobre un conjunto finito $X$. Definimos el conjunto de puntos fijos de toda la acción por $$X^G=\{x\in X:g\cdot x=x\text{ para todo }g\in G\}.$$ (que en el fondo es $\bigcap_{g\in G}X^{g}$ la interseccion de los puntos fijos de cada elemento) 

>[!Theorem] Lema de los puntos fijos de un $p$-grupo
>Sea $G$ un $p$-grupo entonces
>$$|X|\equiv |X^G|\pmod p.$$
>
>> [!Proof]-
>>1. Las órbitas de la acción particionan $X$:
>>$$X=\bigsqcup_{i\in I}O_{x_i}.$$ 
>>
>>2. Una órbita tiene un único elemento si y solo si su representante es un punto fijo de toda la acción. En efecto,
>>$$|O_x|=1\iff g\cdot x=x\text{ para todo }g\in G\iff x\in X^G.$$ 
>>
>>3. Como el estabilizador $G_x$ es un subgrupo de $G$, por Lagrange se tiene
>>$$|G|=[G:G_x]\cdot |G_x|.$$
>>Como $|G|=p^n$, el índice $[G:G_x]$ divide a $p^n$ y por lo tanto es una potencia de $p$: existe $k\geq 0$ con $[G:G_x]=p^k$.
>>Si $|O_x|>1$, por órbita-estabilizador $|O_x|=[G:G_x]=p^k$ con $k\geq 1$, de modo que $p$ divide a $|O_x|$.
>>
>>4. Al sumar los tamaños de las órbitas, las órbitas de tamaño $1$ aportan exactamente $|X^G|$, mientras que todas las demás aportan múltiplos de $p$. Por lo tanto,
>>$$|X|=|X^G|+\sum_{\substack{\text{órbitas }O\\|O|>1}}|O|\equiv |X^G|\pmod p.$$ 

^e8cda5

> [!theorem] El centro de un $p$-grupo no trivial es no trivial
>Si $|G|=p^n$ con $n\geq1$, entonces $|Z(G)|$ es divisible por $p$ y, en particular, $Z(G)\neq\{1_G\}$.
>
>> [!Proof]-
>>1. La ecuación de clases da $$|G|=|Z(G)|+\sum_{i=1}^r[G:C_G(x_i)],$$ donde los $x_i$ no son centrales.
>>2. Cada índice $[G:C_G(x_i)]$ divide a $|G|=p^n$, por lo que es una potencia de $p$. Como $x_i$ no es central, el índice es mayor que $1$ y, por tanto, es divisible por $p$.
>>3. Al reducir la ecuación módulo $p$, obtenemos $$|G|\equiv|Z(G)|\pmod p.$$ Como $p\mid|G|$, resulta $p\mid|Z(G)|$.
>>4. Además, $1_G\in Z(G)$, así que el centro no es vacío. Su cardinal es, como mínimo, $p$.

^932f50

### Clasificación de los grupos de orden $p^2$

> [!theorem]
>Si $G$ es un grupo de orden $p^2$, entonces $$G\cong\mathbb Z_{p^2}\qquad\text{o}\qquad G\cong\mathbb Z_p\times\mathbb Z_p.$$ En particular, todo grupo de orden $p^2$ es abeliano.
>
>> [!Proof]-
>>1. Por el resultado anterior, $|Z(G)|$ es divisible por $p$. Como $|Z(G)|$ divide a $p^2$, se tiene $|Z(G)|=p$ o $p^2$.
>>2. Si $|Z(G)|=p^2$, entonces $Z(G)=G$ y $G$ es abeliano.
>>3. La posibilidad $|Z(G)|=p$ también fuerza que $G/Z(G)$ tenga orden $p$ y sea cíclico. Si $G/Z(G)=\langle gZ(G)\rangle$, todo elemento de $G$ tiene la forma $g^kz$ con $z\in Z(G)$; dos elementos de esa forma conmutan. Por lo tanto, $G$ sería abeliano, lo que implicaría $Z(G)=G$, contradicción. Así, necesariamente $Z(G)=G$.
>>4. Si existe $g\in G$ con $|g|=p^2$, entonces $G=\langle g\rangle\cong\mathbb Z_{p^2}$.
>>5. Si no existe tal elemento, todo elemento no trivial tiene orden $p$. Elegimos $x\neq1_G$ y $y\notin\langle x\rangle$. Entonces $\langle x\rangle\cap\langle y\rangle=\{1_G\}$ y, como $G$ es abeliano, todos los productos $x^iy^j$ con $0\leq i,j\leq p-1$ son distintos. Hay $p^2$ de ellos, de modo que $$G=\langle x\rangle\times\langle y\rangle\cong\mathbb Z_p\times\mathbb Z_p.$$

## 9. Mapa de conexiones

> [!summary]
>1. Una acción produce un homomorfismo $G\to S_X$.
>2. Las órbitas particionan $X$ y los estabilizadores son subgrupos.
>3. Órbita-estabilizador: $|O_x|=[G:G_x]$.
>4. Burnside cuenta órbitas promediando puntos fijos.
>5. Para la conjugación, órbitas $=$ clases de conjugación y estabilizadores $=$ centralizadores.
>6. La ecuación de clases separa las clases centrales de las no centrales.
>7. En un $p$-grupo, las clases no centrales tienen tamaño divisible por $p$, lo cual obliga a que el centro sea no trivial.

## 10. Errores frecuentes

> [!warning]
>- No confundir la órbita $O_x\subseteq X$ con el estabilizador $G_x\leq G$.
>- En una acción a izquierda, $(gh)\cdot x=g\cdot(h\cdot x)$: primero actúa $h$ y luego $g$.
>- La fórmula $|O_x|=|G|/|G_x|$ requiere que $G$ sea finito para interpretarla como igualdad de cardinales finitos.
>- Burnside no dice "dividir por la cantidad de simetrías" sin más; eso solo funciona cuando la acción es libre. En general hay que promediar los puntos fijos.
>- Una clase de conjugación tiene tamaño $1$ exactamente cuando su representante está en $Z(G)$.
>- El centralizador $C_G(x)$ se define para un elemento; el normalizador $N_G(H)$ se define para un subgrupo.

## 11. Preguntas de autoevaluación

>[!question]- 1. ¿Por qué cada $g\in G$ actúa mediante una biyección de $X$?
>Porque la transformación asociada a $g^{-1}$ es su inversa.

> [!question]- 2. ¿Qué significa que una acción sea fiel?
>Que ningún elemento distinto de $1_G$ actúa como la identidad sobre todo $X$; equivalentemente, $\ker(\rho)=\{1_G\}$.

> [!question]- 3. ¿Cómo se reconoce una acción transitiva mediante una órbita?
>Es transitiva si existe, y entonces para todo, $x\in X$ tal que $O_x=X$.

> [!question]- 4. ¿Cuál es el estabilizador de $H\in G/H$ en la acción por traslación?
>Es $H$, porque $gH=H$ si y solo si $g\in H$.

> [!question]- 5. ¿Qué dos objetos aparecen al aplicar órbita-estabilizador a la conjugación?
>La órbita es $\operatorname{Cl}_G(x)$ y el estabilizador es $C_G(x)$; por tanto, $|\operatorname{Cl}_G(x)|=[G:C_G(x)]$.

> [!question]- 6. ¿Por qué el centro de un $p$-grupo debe tener más de un elemento?
>Porque en la ecuación de clases todos los sumandos no centrales son múltiplos de $p$, de modo que $|Z(G)|\equiv|G|\equiv0\pmod p$; como el centro contiene a la identidad, su cardinal es al menos $p$.

## 12. Fórmulas para memorizar

$$\boxed{|O_x|=[G:G_x]=\frac{|G|}{|G_x|}}$$

$$\boxed{\#(X/G)=\frac1{|G|}\sum_{g\in G}|X^g|}$$

$$\boxed{|\operatorname{Cl}_G(x)|=[G:C_G(x)]}$$

$$\boxed{|G|=|Z(G)|+\sum_i[G:C_G(x_i)]}$$

$$\boxed{\#\{\text{subgrupos conjugados a }H\}=[G:N_G(H)]}$$
