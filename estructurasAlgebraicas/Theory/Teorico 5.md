---
dateCreated: 2026-08-18
tags:
  - AlgebraicStructures
  - Groups
  - GroupActions
  - ExamReview
source: "Clase2 (1).pdf"
---

# Clase 2 - Acciones de grupos

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

### 2.2. Acción por conjugación

>[!example]
>El grupo $G$ actúa sobre sí mismo mediante $$g\cdot h=ghg^{-1}.$$
>En efecto, $1_G\cdot h=h$ y $$g\cdot(k\cdot h)=g(khk^{-1})g^{-1}=(gk)h(gk)^{-1}=(gk)\cdot h.$$
>Esta acción será la fuente de las clases de conjugación y de la ecuación de clases.

### 2.3. Acción sobre clases laterales

>[!Remark]
>Sea $H\leq G$ y sea $G/H=\{xH:x\in G\}$ el conjunto de clases laterales izquierdas. Entonces $G$ actúa sobre $G/H$ por $$g\cdot(xH)=(gx)H.$$
>La definición no depende del representante: si $xH=yH$, entonces $y^{-1}x\in H$ y, por consiguiente, $(gy)^{-1}(gx)=y^{-1}x\in H$, de modo que $(gx)H=(gy)H$.
>Faltaría ver las dos propiedades de acción de grupo
>Esta acción es transitiva (explicar que significa) , y el estabilizador de la clase $H$ es exactamente $H$.

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

> [!proposition] El estabilizador es un subgrupo
>Para cada $x\in X$, se tiene $G_x\leq G$.
>
>> [!Proof]-
>>1. Como $1_G\cdot x=x$, tenemos $1_G\in G_x$.
>>2. Si $g,h\in G_x$, entonces $(gh)\cdot x=g\cdot(h\cdot x)=g\cdot x=x$, luego $gh\in G_x$.
>>3. Si $g\in G_x$, entonces $g^{-1}\cdot x=g^{-1}\cdot(g\cdot x)=(g^{-1}g)\cdot x=x$, luego $g^{-1}\in G_x$.

### Las órbitas particionan el conjunto

>[!definition] Las orbitas particionan $X$ 
>Definimos $x\sim y$ si existe $g\in G$ tal que $g\cdot x=y$. Esta es una relación de equivalencia: es reflexiva por la identidad, simétrica porque $g\cdot x=y$ implica $g^{-1}\cdot y=x$, y transitiva por la compatibilidad de la acción. Sus clases de equivalencia son precisamente las órbitas.
>Por ello, $X$ es unión disjunta de sus órbitas: $$X=\bigsqcup_{i\in I}O_{x_i},$$ donde se elige un representante $x_i$ de cada órbita.

^c3e1b1

> [!definition] Acción transitiva
>Decimos que una acción es **transitiva** si tiene una sola órbita

> [!proposition] Caracterizaciones de una acción transitiva
>Sea $G$ un grupo que actúa sobre un conjunto no vacío $X$. Son equivalentes:
>- **(i)** La acción es transitiva.
>- **(ii)** Para todo $x\in X$, se tiene $O_x=X$.
>- **(iii)** Para cualesquiera $x,y\in X$, existe $g\in G$ tal que $g\cdot x=y$.
>
>> [!Proof]-
>>- **(i) $\Rightarrow$ (ii).** Sea $x\in X$. Como la acción es transitiva, existe una única órbita. Además, $x=1_G\cdot x\in O_x$, así que $O_x$ es esa única órbita. Puesto [[Teorico 5#^c3e1b1|las orbitas particionan]] a $X$, necesariamente $O_x=X$.
>>- **(ii) $\Rightarrow$ (iii).** Sean $x,y\in X$. Por hipótesis, $O_x=X$, de modo que $y\in O_x$. Por la definición de órbita, existe $g\in G$ tal que $g\cdot x=y$.
>>- **(iii) $\Rightarrow$ (i).** Fijemos $x\in X$. Para todo $y\in X$, la hipótesis proporciona un elemento $g\in G$ tal que $g\cdot x=y$; por lo tanto, $y\in O_x$. Así, $X\subseteq O_x$, y la inclusión $O_x\subseteq X$ se sigue de la definición de acción. En consecuencia, $O_x=X$, por lo que la acción tiene una sola órbita osea es transitiva.

### Estabilizadores de puntos de una misma órbita

> [!proposition]
>Si $x=g\cdot y$, entonces $$G_x=gG_yg^{-1}.$$
>
>> [!Proof]-
>>Para $h\in G$, $$\begin{aligned}h\in G_x&\iff h\cdot x=x\\&\iff h\cdot(g\cdot y)=g\cdot y\\&\iff (g^{-1}hg)\cdot y=y\\&\iff g^{-1}hg\in G_y\\&\iff h\in gG_yg^{-1}.\end{aligned}$$

>[!Remark]
>En particular, los estabilizadores de puntos de una misma órbita son conjugados y tienen el mismo orden.

## 4. Teorema órbita-estabilizador

> [!theorem] Órbita-estabilizador
>Sea $G$ un grupo que actúa sobre $X$ y sea $x\in X$. Existe una biyección $$G/G_x\longrightarrow O_x,\qquad gG_x\longmapsto g\cdot x.$$ Si $G$ es finito, entonces $$|O_x|=[G:G_x]=\frac{|G|}{|G_x|}.$$
>
>> [!Proof]-
>>1. **Buena definición.** Si $gG_x=hG_x$, entonces $h^{-1}g\in G_x$, de modo que $(h^{-1}g)\cdot x=x$. Aplicando $h$ a ambos lados y usando la compatibilidad de la acción, obtenemos $$\begin{aligned}h\cdot\bigl((h^{-1}g)\cdot x\bigr)&=h\cdot x\\\bigl(h(h^{-1}g)\bigr)\cdot x&=h\cdot x\\g\cdot x&=h\cdot x.\end{aligned}$$ Por lo tanto, la imagen no depende del representante elegido para la clase lateral $gG_x$.
>>2. **Sobreyectividad.** Todo elemento de $O_x$ tiene la forma $g\cdot x$ para algún $g\in G$.
>>3. **Inyectividad.** Si $g\cdot x=h\cdot x$, entonces $(h^{-1}g)\cdot x=x$ (misma idea usada en buena definicion) por lo que $h^{-1}g\in G_x$ y $gG_x=hG_x$.

> [!corollary] Consecuencias rápidas
>Si $G$ es finito, entonces $|O_x|$ divide a $|G|$. Además, una acción transitiva sobre un conjunto finito $X$ satisface $$|X|=[G:G_x].$$
>
>> [!Proof]-
>>1. Por el teorema órbita-estabilizador, $$|G|=|O_x|\,|G_x|.$$ Como $|G_x|$ es un entero, se sigue que $|O_x|$ divide a $|G|$.
>>2. Por el teorema de Lagrange y la igualdad $|G_x|=|G|/|O_x|$ obtenida mediante órbita-estabilizador, $$\begin{aligned}|G|&=[G:G_x]|G_x|\\&=[G:G_x]\frac{|G|}{|O_x|}.\end{aligned}$$ Como $|G|\neq 0$, podemos cancelar $|G|$ y obtenemos $|O_x|=[G:G_x]$. Finalmente, si la acción es transitiva, entonces $O_x=X$ para todo $x\in X$; por lo tanto, $$|X|=|O_x|=[G:G_x].$$

> [!proposition] Clasificación de las acciones transitivas
>Si $G$ actúa transitivamente sobre $X$ y fijamos $x\in X$, entonces la aplicación $$G/G_x\longrightarrow X,\qquad gG_x\longmapsto g\cdot x$$ es una biyección compatible con la acción de $G$. Por eso, toda acción transitiva es esencialmente una acción sobre clases laterales.
>
>> [!Proof]-
>>1. **Buena definición.** Si $gG_x=hG_x$, entonces $h^{-1}g\in G_x$, de modo que $(h^{-1}g)\cdot x=x$. Aplicando $h$ a ambos lados y usando la compatibilidad de la acción, obtenemos $g\cdot x=h\cdot x$. Por lo tanto, la imagen no depende del representante elegido para la clase lateral $gG_x$.
>>2. **Sobreyectividad.** Como la acción es transitiva, para todo $y\in X$ existe $g\in G$ tal que $g\cdot x=y$; por lo tanto, $y$ es la imagen de la clase $gG_x$.
>>3. **Inyectividad.** Si $g\cdot x=h\cdot x$, entonces $(h^{-1}g)\cdot x=x$, por lo que $h^{-1}g\in G_x$ y $gG_x=hG_x$. Así, la aplicación es biyectiva.
>>4. **Compatibilidad con la acción.** Para todo $k\in G$, $$k\cdot(g\cdot x)=(kg)\cdot x,$$ de modo que la biyección conmuta con la acción de $G$. Ella identifica la acción transitiva sobre $X$ con la acción por traslación sobre $G/G_x$; además, el estabilizador de la clase $G_x$ es exactamente $G_x$ (pues $kG_x=G_x$ si y solo si $k\in G_x$). Por lo tanto, toda acción transitiva es esencialmente una acción sobre clases laterales.

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
>>8. Por el teorema órbita-estabilizador, para cada $x\in X$ tenemos $$|O_x|=\frac{|\mathbb Z_p|}{|(\mathbb Z_p)_x|}=\frac{p}{|(\mathbb Z_p)_x|},$$ y por lo tanto $$p=|O_x|\,|(\mathbb Z_p)_x|.$$ Así, $|O_x|\mid p$ y, como $p$ es primo, cada órbita tiene tamaño $1$ o $p$.
>>9. Por tanto, las órbitas no triviales aportan un múltiplo de $p$ al cardinal de $X$. Y entonces podemos pensar $$|X|=(\text{cantidad de orbitas de tamaño } 1)+p(\text{cantidad de orbitas de tamaño }p):=F+pK$$   
>>10. Ahroa notamos que las orbitas de tamaño $1$ son los puntos fijos, osea $x\in X$ tal que $g \cdot x=x$ para todo $g\in \mathbb{Z}_{p}$.
>>11. Y notamos que si un $x\in X$ es fijo por el generador $\overline 1$ entonces es fijo por cualquier otro $z\in \mathbb{Z}_{p}$ obviamente 
>>12. Ademas un $x\in X$ es fijo por el generador $\overline{1}$ si y solo si es constante osea: $$(x_1,x_{2},\ldots,x_p)=\overline{1} (x_{1},x_{2},\ldots,x_{p})=(x_{2},x_{3},\ldots,x_{p},x_{1}) \iff (x_{1},\ldots,x_{p})=(g,\ldots,g).$$ por ende para pertenecer a $X$ debe satisfacer $x_{i}^{p}=g^p=1_G$.
>>13. Por 3. tenemos $p\big||X|$ luego por 9. tenemos $$F\equiv |X|-pk\equiv0\text{ mod}(p)$$  entonces la cantidad de puntos fijos (Osea es una orbita de tamaño $1$)  también es múltiplo de $p$. 
>>14. Luego como la tupla $(1_G,\ldots,1_G)$ es un punto fijo, no puede ser el único entonces existen al menos $p$ puntos fijos. 
>>15. Por lo tanto, existe un $(g,\ldots,g)\in X$ (por que es un punto fijo paso 12. nos dice que sus entradas son todas iguales) tal que $g\neq1_G$ (para que $(g,\ldots,g)\neq(1_{G},\ldots1_{G})$) tal que $g^p=1_G$ (para que $(g,\ldots,g)\in X$) 
>>16. Ademas el orden de $g$ divide a $p$ (misma cuenta de siempre en general) y no es $1_{G}$, luego $|g|=p$.

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

> [!definition] Conjunto de puntos fijos
>Para $g\in G$, definimos $$X^g=\operatorname{Fix}(g)=\{x\in X:g\cdot x=x\}.$$

> [!theorem] Lema de Burnside o lema de Cauchy-Frobenius
>Si un grupo finito $G$ actúa sobre un conjunto finito $X$ y $m$ es el número de órbitas, entonces $$m=\frac1{|G|}\sum_{g\in G}|X^g|.$$
>
>> [!Proof]-
>>1. Contemos de dos maneras el conjunto $$S=\{(g,x)\in G\times X:g\cdot x=x\}.$$
>>2. Si fijamos $g$, hay $|X^g|$ posibles valores de $x$, de modo que $$|S|=\sum_{g\in G}|X^g|.$$
>>3. Si fijamos $x$, hay $|G_x|$ posibles valores de $g$, de modo que $$|S|=\sum_{x\in X}|G_x|.$$
>>4. Sea $X=O_{x_1}\sqcup\cdots\sqcup O_{x_m}$. Dentro de cada órbita, todos los estabilizadores tienen el mismo cardinal; además, $|O_{x_i}||G_{x_i}|=|G|$. Por ello, $$\sum_{x\in O_{x_i}}|G_x|=|O_{x_i}||G_{x_i}|=|G|.$$
>>5. Sumando sobre las $m$ órbitas obtenemos $|S|=m|G|$. Al comparar ambos conteos, $$m|G|=\sum_{g\in G}|X^g|,$$ y el resultado sigue al dividir por $|G|$.

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

> [!exercise] Colorear un cubo con $6$ colores
>Cada una de las seis caras de un cubo se pinta con uno de $6$ colores disponibles; se permiten repeticiones. Dos coloraciones se consideran iguales si una rotación del cubo lleva una a la otra. ¿Cuántas coloraciones distintas hay?
>
>> [!Proof]-
>>1. El grupo de rotaciones del cubo tiene $24$ elementos. Aplicaremos Burnside con $k$ colores y al final sustituiremos $k=6$.
>>2. La identidad fija las $k^6$ coloraciones.
>>3. Hay $3$ rotaciones de $180^\circ$ alrededor de ejes que atraviesan caras opuestas. Cada una deja dos caras fijas e intercambia las otras cuatro en dos pares, por lo que fija $k^4$ coloraciones.
>>4. Hay $6$ rotaciones de $90^\circ$ o $270^\circ$ alrededor de esos ejes. Cada una deja dos caras fijas y forma un ciclo de longitud $4$ con las restantes, por lo que fija $k^3$ coloraciones.
>>5. Hay $8$ rotaciones de $120^\circ$ o $240^\circ$ alrededor de ejes que atraviesan vértices opuestos. Las caras forman dos ciclos de longitud $3$, por lo que se fijan $k^2$ coloraciones.
>>6. Hay $6$ rotaciones de $180^\circ$ alrededor de ejes que atraviesan aristas opuestas. Las caras forman tres pares, por lo que se fijan $k^3$ coloraciones.
>>7. Burnside da $$N(k)=\frac{k^6+3k^4+12k^3+8k^2}{24}.$$ Para $k=6$, $$N(6)=\frac{6^6+3\cdot6^4+12\cdot6^3+8\cdot6^2}{24}=2226.$$

> [!warning] Variante frecuente
>Si el enunciado exigiera usar cada uno de los seis colores exactamente una vez, el conteo sería distinto: ninguna rotación no trivial fijaría una coloración y el resultado sería $6!/24=30$.

## 7. Conjugación y ecuación de clases

>[!Remark]
>Volvamos a la acción de $G$ sobre sí mismo por conjugación, $g\cdot x=gxg^{-1}$.

> [!definition] Clase de conjugación
>La órbita de $x\in G$ es su **clase de conjugación**: $$\operatorname{Cl}_G(x)=\{gxg^{-1}:g\in G\}.$$

> [!definition] Centralizador
>El estabilizador de $x$ bajo conjugación es su **centralizador**: $$C_G(x)=\{g\in G:gx=xg\}.$$ En efecto, $gxg^{-1}=x$ si y solo si $gx=xg$.

> [!corollary] Tamaño de una clase de conjugación
>Si $G$ es finito, entonces $$|\operatorname{Cl}_G(x)|=[G:C_G(x)],$$ y, por tanto, $|\operatorname{Cl}_G(x)|$ divide a $|G|$.

>[!Remark]
Un elemento $x$ pertenece al centro $Z(G)$ si y solo si conmuta con todo $g\in G$, es decir, si y solo si $C_G(x)=G$. Equivalentemente, $x\in Z(G)$ si y solo si su clase de conjugación tiene un único elemento.

> [!theorem] Ecuación de clases
>Sea $G$ un grupo finito. Si $x_1,\ldots,x_r$ son representantes de las clases de conjugación no centrales, entonces $$|G|=|Z(G)|+\sum_{i=1}^r[G:C_G(x_i)].$$
>
>> [!Proof]-
>>Las clases de conjugación particionan $G$. Las clases de los elementos centrales tienen cardinal $1$ y, juntas, aportan $|Z(G)|$. Cada clase no central representada por $x_i$ tiene cardinal $[G:C_G(x_i)]$ por órbita-estabilizador. Sumando los tamaños de todas las clases se obtiene la fórmula.

### Conjugación de subgrupos y normalizador

>[!Remark]
>El grupo $G$ actúa sobre el conjunto de sus subgrupos por conjugación: $$g\cdot H=gHg^{-1}.$$

> [!definition] Normalizador
>El estabilizador de $H$ bajo esta acción es el **normalizador** de $H$: $$N_G(H)=\{g\in G:gHg^{-1}=H\}.$$

> [!corollary]
>La cantidad de subgrupos conjugados a $H$ es $$[G:N_G(H)].$$ En particular, $H\trianglelefteq G$ si y solo si su órbita tiene un único elemento; equivalentemente, si y solo si $N_G(H)=G$.

## 8. Aplicaciones a $p$-grupos

> [!definition] $p$-grupo
>Un grupo finito $G$ es un **$p$-grupo** si $|G|=p^n$ para algún primo $p$ y algún $n\geq1$.

> [!theorem] El centro de un $p$-grupo no trivial es no trivial
>Si $|G|=p^n$ con $n\geq1$, entonces $|Z(G)|$ es divisible por $p$ y, en particular, $Z(G)\neq\{1_G\}$.
>
>> [!Proof]-
>>1. La ecuación de clases da $$|G|=|Z(G)|+\sum_{i=1}^r[G:C_G(x_i)],$$ donde los $x_i$ no son centrales.
>>2. Cada índice $[G:C_G(x_i)]$ divide a $|G|=p^n$, por lo que es una potencia de $p$. Como $x_i$ no es central, el índice es mayor que $1$ y, por tanto, es divisible por $p$.
>>3. Al reducir la ecuación módulo $p$, obtenemos $$|G|\equiv|Z(G)|\pmod p.$$ Como $p\mid|G|$, resulta $p\mid|Z(G)|$.
>>4. Además, $1_G\in Z(G)$, así que el centro no es vacío. Su cardinal es, como mínimo, $p$.

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
