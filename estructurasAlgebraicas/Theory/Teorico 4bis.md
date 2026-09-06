---
dateCreated: 2026-08-21
tags:
  - AlgebraicStructures
  - Groups
  - FreeGroups
source: "[[3era clase.pdf]]"
---

# Grupos libres

>[!remark] Idea central
>Un grupo libre es el grupo cuyos elementos son todas las expresiones que pueden escribirse con ciertos símbolos y sus inversos, sin imponer ninguna relación adicional. Por eso, para definir un homomorfismo desde un grupo libre basta decidir adónde va cada generador: el resto del homomorfismo queda forzado.

## Objetivos de estudio

>[!Remark]
>Al terminar esta nota deberías poder:
>- Explicar qué significa que un grupo sea libre sobre un conjunto $X$.
>- Construir $F(X)$ mediante palabras reducidas.
>- Multiplicar e invertir palabras y efectuar reducciones correctamente.
>- Usar la propiedad universal para construir homomorfismos desde $F(X)$.
>- Demostrar que todo grupo es cociente de un grupo libre.

## 1. Motivación: generadores y relaciones

Cuando describimos un grupo mediante generadores y relaciones, primero elegimos símbolos con los que queremos formar elementos y luego declaramos qué igualdades deben cumplir. Por ejemplo, el grupo diedral puede presentarse mediante una rotación $r$ y una reflexión $s$, sujetas a relaciones como $r^n=e$, $s^2=e$ y $srs=r^{-1}$.

El grupo libre corresponde al momento anterior a imponer relaciones: permitimos multiplicar generadores y sus inversos, pero dos expresiones solo representan el mismo elemento cuando las leyes de grupo obligan a que lo hagan. En particular, siempre podemos cancelar $xx^{-1}$ y $x^{-1}x$, pero no podemos cambiar el orden de las letras ni declarar que una potencia es el neutro.

>[!warning] Libre no significa abeliano
>Si $x$ e $y$ son generadores distintos de un grupo libre, en general $xy\neq yx$. Imponer $xy=yx$ sería agregar una relación que no se deduce de los axiomas de grupo.

## 2. Letras, inversos formales y palabras

Sea $X$ un conjunto. Sus elementos serán nuestros **generadores**. Construimos una copia disjunta de $X$, denotada por $$X^{-1}=\{x^{-1}:x\in X\},$$ cuyos elementos se llaman **inversos formales**. Aquí $x^{-1}$ es inicialmente un nuevo símbolo; todavía no estamos dentro de un grupo.

Definimos el alfabeto $$X^{\pm1}=X\sqcup X^{-1}.$$ Para cada letra establecemos $(x^{-1})^{-1}=x$.

>[!Definition] Palabra
>Una **palabra** sobre $X$ es una sucesión finita de letras de $X^{\pm1}$. Se escribe $$w=a_1a_2\cdots a_n,\qquad a_i\in X^{\pm1}.$$ También admitimos la palabra vacía, que se denota por $1$ y no contiene ninguna letra.

La **longitud** de una palabra $w=a_1\cdots a_n$ es $|w|=n$. En particular, $|1|=0$.

>[!Example] Palabras sobre dos generadores
>Si $X=\{x,y\}$, entonces $$xyx^{-1}y,\qquad x^{-1}x^{-1}y,\qquad yy^{-1}x,\qquad 1$$ son palabras. A veces agrupamos letras iguales consecutivas usando exponentes; por ejemplo, $x^{-1}x^{-1}y=x^{-2}y$.

## 3. Reducción de palabras

>[!Definition] Cancelación elemental
>Una **cancelación elemental** consiste en borrar dos letras consecutivas de la forma $aa^{-1}$ o $a^{-1}a$, donde $a\in X$. Es decir, dentro de una palabra podemos realizar $$uaa^{-1}v\longmapsto uv\qquad\text{y}\qquad ua^{-1}av\longmapsto uv.$$

>[!Definition] Palabra reducida
>Una palabra es **reducida** si no contiene dos letras consecutivas que sean inversas entre sí. Equivalentemente, en ella no es posible realizar ninguna cancelación elemental.

Reducir una palabra significa efectuar cancelaciones hasta obtener una palabra reducida. Cada cancelación disminuye la longitud en $2$, de modo que el proceso necesariamente termina.

>[!Theorem] Unicidad de la forma reducida
>Toda palabra puede reducirse a una única palabra reducida, independientemente del orden en que se realicen las cancelaciones. Denotamos esa palabra por $\operatorname{red}(w)$.
>>[!Proof]-
>>1. Podemos reducir una palabra leyendo sus letras de izquierda a derecha y guardando una lista provisional. Cuando llega una letra, la cancelamos si es la inversa de la última letra guardada; en caso contrario, la agregamos al final. Al terminar, la lista obtenida está reducida.
>>2. Insertar o borrar un par $aa^{-1}$ o $a^{-1}a$ en cualquier punto no altera el resultado de este procedimiento: la segunda letra del par deshace exactamente el efecto de la primera.
>>3. Por lo tanto, todas las palabras relacionadas mediante cancelaciones producen la misma lista final. Como toda sucesión de cancelaciones termina en una palabra reducida, esa palabra necesariamente coincide con la obtenida por el procedimiento anterior. Así, la forma reducida es única.

La unicidad es crucial: permite usar palabras reducidas como representantes inequívocos de los elementos del grupo libre. Otra construcción equivalente consiste en tomar todas las palabras y declarar equivalentes las que se obtienen unas de otras insertando o borrando pares $aa^{-1}$ y $a^{-1}a$.

>[!Example] Reducción paso a paso
>Sobre $X=\{x,y\}$, consideremos $$w=xyy^{-1}x^{-1}xy^{-1}y.$$ Entonces $$\begin{aligned}w&=xyy^{-1}x^{-1}xy^{-1}y\\&\longmapsto xx^{-1}xy^{-1}y\\&\longmapsto xy^{-1}y\\&\longmapsto x.\end{aligned}$$ Por lo tanto, $\operatorname{red}(w)=x$.

>[!warning] Solo se cancelan letras adyacentes
>La palabra $xyx^{-1}$ ya está reducida: no podemos cancelar $x$ con $x^{-1}$ porque la letra $y$ se encuentra entre ambas. Tampoco podemos mover $y$ para juntarlas, pues eso impondría conmutatividad.

## 4. Construcción del grupo libre

>[!Definition] Grupo libre sobre $X$
>El **grupo libre sobre $X$**, denotado por $F(X)$, es el conjunto de todas las palabras reducidas sobre el alfabeto $X^{\pm1}$. El producto de $u,v\in F(X)$ se define concatenando ambas palabras y reduciendo: $$u\cdot v=\operatorname{red}(uv).$$

La reducción del producto solo puede producir cancelaciones en la zona donde termina $u$ y comienza $v$, porque cada una de las dos palabras ya estaba reducida.

>[!Proposition] $F(X)$ es un grupo
>Con el producto anterior, $F(X)$ es un grupo. Su neutro es la palabra vacía $1$ y la inversa de $$w=a_1a_2\cdots a_n$$ es $$w^{-1}=a_n^{-1}\cdots a_2^{-1}a_1^{-1}.$$
>>[!Proof]-
>>1. **Clausura.** Por definición, $u\cdot v=\operatorname{red}(uv)$ es una palabra reducida, luego pertenece a $F(X)$.
>>2. **Neutro.** Concatenar la palabra vacía no agrega letras, por lo que $$1\cdot w=w=w\cdot1.$$
>>3. **Inversos.** Si $w=a_1\cdots a_n$, entonces en la concatenación $$ww^{-1}=a_1\cdots a_na_n^{-1}\cdots a_1^{-1}$$ se cancelan primero las dos letras centrales y luego los pares restantes, hasta obtener $1$. De manera análoga, $w^{-1}w$ se reduce a $1$.
>>4. **Asociatividad.** Reducir una subpalabra antes de reducir la palabra completa no cambia su forma reducida. Por eso, para $u,v,z\in F(X)$, $$\begin{aligned}(u\cdot v)\cdot z&=\operatorname{red}(\operatorname{red}(uv)z)=\operatorname{red}(uvz)\\&=\operatorname{red}(u\operatorname{red}(vz))=u\cdot(v\cdot z).\end{aligned}$$

>[!Example] Producto e inverso
>En $F(\{x,y\})$, sean $u=xyx^{-1}$ y $v=xy^{-1}$. Entonces $$u\cdot v=\operatorname{red}(xyx^{-1}xy^{-1})=xyy^{-1}=x.$$ Además, $$u^{-1}=xy^{-1}x^{-1},$$ porque se invierte el orden de las letras y se reemplaza cada una por su inversa.

## 5. Casos básicos

>[!Example] Ningún generador
>Si $X=\varnothing$, la única palabra posible es la palabra vacía. Por lo tanto, $$F(\varnothing)=\{1\},$$ el grupo trivial.

>[!Example] Un generador
>Si $X=\{x\}$, toda palabra reducida tiene la forma $x^n$ para un único $n\in\mathbb Z$. Además, $x^m x^n=x^{m+n}$. Por lo tanto, $$F(\{x\})\cong(\mathbb Z,+),$$ mediante el isomorfismo $x^n\mapsto n$.

>[!Example] Dos generadores
>Si $X=\{x,y\}$, los elementos de $F(X)$ son palabras reducidas como $$1,\quad x,\quad y^{-1},\quad xy,\quad yx,\quad xy^{-1}x^2y,\quad\ldots$$ En particular, $xy$ e $yx$ son palabras reducidas distintas, de modo que $F(\{x,y\})$ no es abeliano.

>[!Remark] Forma por bloques
>Una palabra reducida sobre $X=\{x,y\}$ puede agruparse en bloques de potencias no nulas, alternando generadores: $$x^{m_1}y^{n_1}x^{m_2}y^{n_2}\cdots,$$ donde los exponentes que aparecen son enteros no nulos. Según la primera y la última letra, una palabra también puede comenzar con un bloque de $y$ o terminar con uno de $x$. Esta notación por bloques es cómoda, pero las letras individuales siguen siendo la base de la definición.

## 6. La inclusión de los generadores

Existe una función canónica $$\iota:X\longrightarrow F(X),\qquad \iota(x)=x,$$ que considera cada generador como una palabra de longitud $1$. Esta función es inyectiva, así que solemos identificar $x\in X$ con la palabra correspondiente $\iota(x)\in F(X)$.

>[!Remark] Por qué $\iota$ no se llama homomorfismo
>El conjunto $X$ no tiene por qué ser un grupo; es solamente un conjunto. Por eso $\iota$ es una función de conjuntos. La propiedad universal explica cómo cualquier función definida en $X$ se prolonga a un verdadero homomorfismo definido en todo $F(X)$.

## 7. Propiedad universal

>[!Theorem] Propiedad universal del grupo libre
>Sea $G$ un grupo y sea $f:X\to G$ cualquier función de conjuntos. Existe un único homomorfismo $$\widehat f:F(X)\longrightarrow G$$ tal que $$\widehat f\circ\iota=f.$$ En otras palabras, $\widehat f(x)=f(x)$ para todo $x\in X$.
>
>La condición $\widehat f\circ\iota=f$ dice que las dos rutas desde $X$ hasta $G$ coinciden: podemos aplicar $f$ directamente, o incluir primero los generadores en $F(X)$ y aplicar después $\widehat f$.
>>[!Proof]-
>>1. **La fórmula está forzada.** Si $w=x_1^{\varepsilon_1}\cdots x_n^{\varepsilon_n}$ es una palabra reducida, donde $x_i\in X$ y $\varepsilon_i\in\{1,-1\}$, cualquier homomorfismo que extienda a $f$ debe satisfacer $$\widehat f(w)=f(x_1)^{\varepsilon_1}\cdots f(x_n)^{\varepsilon_n}.$$ Para la palabra vacía definimos $\widehat f(1)=e_G$.
>>2. **La fórmula es compatible con la reducción.** Una cancelación $xx^{-1}$ se transforma en $f(x)f(x)^{-1}=e_G$, y una cancelación $x^{-1}x$ se transforma en $f(x)^{-1}f(x)=e_G$. Por lo tanto, cancelar letras no cambia el valor del producto en $G$.
>>3. **Es un homomorfismo.** Para $u,v\in F(X)$, la palabra $u\cdot v$ se obtiene reduciendo la concatenación $uv$. Por el paso anterior, $$\widehat f(u\cdot v)=\widehat f(\operatorname{red}(uv))=\widehat f(u)\widehat f(v).$$
>>4. **Extiende a $f$.** Para cada $x\in X$, la palabra $\iota(x)$ tiene una sola letra, luego $$\widehat f(\iota(x))=f(x).$$
>>5. **Unicidad.** Todo elemento de $F(X)$ es un producto de elementos de $\iota(X)$ y de sus inversos. En consecuencia, un homomorfismo $F(X)\to G$ queda completamente determinado por los valores que toma en $\iota(X)$. Por ello no puede existir otra extensión distinta de $\widehat f$.

>[!Example] Construir un homomorfismo sin comprobar todas las palabras
>Sea $X=\{x,y\}$ y consideremos $S_3$. Elegimos $$f(x)=(12),\qquad f(y)=(123).$$ La propiedad universal produce un único homomorfismo $\widehat f:F(\{x,y\})\to S_3$. Para calcularlo en una palabra basta sustituir: $$\widehat f(xy^{-1}x)=f(x)f(y)^{-1}f(x)=(12)(132)(12).$$ No hace falta definir $\widehat f$ palabra por palabra ni verificar separadamente todos los productos posibles.

## 8. Cómo reconocer la libertad

La propiedad universal no solo sirve para construir homomorfismos: también caracteriza al grupo libre. Un grupo $L$ junto con una función $j:X\to L$ es libre sobre $X$ si toda función $f:X\to G$, hacia cualquier grupo $G$, admite una única extensión homomorfa $\widehat f:L\to G$.

>[!Proposition] Unicidad salvo isomorfismo
>Si $(L,j)$ y $(L',j')$ son dos grupos libres sobre el mismo conjunto $X$, existe un único isomorfismo $\varphi:L\to L'$ tal que $\varphi\circ j=j'$.
>>[!Proof]-
>>1. Por la propiedad universal de $L$, la función $j':X\to L'$ se extiende a un único homomorfismo $\varphi:L\to L'$ tal que $\varphi\circ j=j'$.
>>2. Por la propiedad universal de $L'$, la función $j:X\to L$ se extiende a un único homomorfismo $\psi:L'\to L$ tal que $\psi\circ j'=j$.
>>3. Entonces $$(\psi\circ\varphi)\circ j=\psi\circ j'=j.$$ Tanto $\psi\circ\varphi$ como $\operatorname{id}_L$ extienden la misma función $j:X\to L$. Por unicidad, $\psi\circ\varphi=\operatorname{id}_L$.
>>4. Análogamente, $\varphi\circ\psi=\operatorname{id}_{L'}$. Por lo tanto, $\varphi$ es un isomorfismo con inversa $\psi$.

## 9. Generadores, relaciones y cocientes

Todo grupo construido a partir de un conjunto de generadores se obtiene desde el grupo libre imponiendo relaciones. Si $R\subseteq F(X)$ es un conjunto de palabras que queremos declarar iguales al neutro, debemos anular no solo esas palabras, sino también todas sus conjugadas y todos sus productos e inversos. Por eso se toma el menor subgrupo normal que contiene a $R$, llamado su **clausura normal** y denotado por $\langle\!\langle R\rangle\!\rangle$.

>[!Definition] Presentación de un grupo
>La notación $$\langle X\mid R\rangle$$ representa el grupo $$F(X)/\langle\!\langle R\rangle\!\rangle.$$ Los elementos de $X$ son los generadores y las palabras de $R$ son las relaciones.

>[!Example] Del grupo libre al grupo diedral
>El grupo diedral de orden $2n$ puede presentarse como $$D_n=\langle r,s\mid r^n,\ s^2,\ srsr\rangle.$$ Escribir $r^n$, $s^2$ y $srsr$ entre las relaciones significa imponer $$r^n=e,\qquad s^2=e,\qquad srs=r^{-1}.$$ Antes de imponerlas, $r$ y $s$ generan el grupo libre $F(\{r,s\})$.

## 10. Ejercicio de la clase

>[!exercise] Todo grupo es cociente de un grupo libre
>Demostrar que para todo grupo $G$ existe un conjunto $X$ y un epimorfismo $$\pi:F(X)\longrightarrow G.$$ Concluir que todo grupo es isomorfo a un cociente de un grupo libre.
>>[!Proof]-
>>1. **Elección del conjunto.** Tomamos como $X$ una copia del conjunto subyacente de $G$. Para evitar confundir elementos de $X$ con elementos de $G$, escribimos $$X=\{x_g:g\in G\}.$$
>>2. **Función sobre los generadores.** Definimos $$f:X\longrightarrow G,\qquad f(x_g)=g.$$ Esta función simplemente envía el símbolo asociado a $g$ al propio elemento $g$.
>>3. **Extensión al grupo libre.** Por la propiedad universal de $F(X)$, existe un único homomorfismo $$\pi=\widehat f:F(X)\longrightarrow G$$ tal que $\pi(x_g)=g$ para todo $g\in G$. Concretamente, $$\pi(x_{g_1}^{\varepsilon_1}\cdots x_{g_n}^{\varepsilon_n})=g_1^{\varepsilon_1}\cdots g_n^{\varepsilon_n}.$$
>>4. **Sobreyectividad.** Sea $g\in G$. La palabra de una sola letra $x_g$ pertenece a $F(X)$ y satisface $$\pi(x_g)=g.$$ Por lo tanto, todo elemento de $G$ tiene una preimagen, de modo que $\pi$ es sobreyectivo; es decir, es un epimorfismo.
>>5. **Conclusión mediante el primer teorema de isomorfismo.** Como $\pi$ es un homomorfismo sobreyectivo, $$F(X)/\ker(\pi)\cong\operatorname{Im}(\pi)=G.$$ En consecuencia, todo grupo es isomorfo a un cociente de un grupo libre.

>[!Remark] Versión más económica
>No es necesario tomar un símbolo por cada elemento de $G$. Si $S\subseteq G$ genera a $G$, podemos tomar una copia $X$ de $S$ y enviar cada generador formal al elemento correspondiente. La extensión $F(X)\to G$ seguirá siendo sobreyectiva porque su imagen contiene a $S$ y, por lo tanto, contiene a $\langle S\rangle=G$. En particular, si $G$ es finitamente generado, es cociente de un grupo libre con una cantidad finita de generadores.

## 11. Errores frecuentes

>[!warning] Confusiones que conviene evitar
>- Una palabra no es una permutación: las letras pueden repetirse y su orden importa.
>- Reducir no significa reordenar. Solo se eliminan pares inversos adyacentes.
>- $X$ es un conjunto; $F(X)$ es el grupo construido a partir de él.
>- La función inicial $f:X\to G$ no tiene que preservar operaciones, porque $X$ no posee una operación de grupo.
>- La propiedad universal afirma existencia y unicidad de $\widehat f$; ambas partes son esenciales.
>- Para demostrar que $F(X)\to G$ es sobreyectivo, no basta con invocar la propiedad universal: además hay que comprobar que las imágenes de los generadores generan a $G$.

## 12. Resumen conceptual

La construcción puede recordarse mediante la cadena $$X\quad\longrightarrow\quad X^{\pm1}\quad\longrightarrow\quad\text{palabras}\quad\longrightarrow\quad\text{palabras reducidas}=F(X).$$ El grupo libre convierte una elección arbitraria de imágenes para los generadores en un único homomorfismo. Esta libertad es precisamente lo que permite presentar cualquier grupo como un grupo libre al que se le imponen relaciones, o equivalentemente, como un cociente de un grupo libre.
