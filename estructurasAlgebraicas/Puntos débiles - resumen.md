# Puntos débiles — resumen de sesiones (6–15 sep 2026)

Objetivo: consolidar lo que creías que era cierto frente a lo que es cierto, para guiar el repaso. La idea global es que casi todo freno viene de dos lugares: conteo con Lagrange y normalidad por conjugación. El resto son consecuencias.

## 1. Conteo con Lagrange y representantes

El procedimiento no está automatizado: se redescubre cada vez en lugar de reutilizarse.

- **Creía:** el orden de $\mathbb{A}_4$ hay que memorizarlo o sale directo del núcleo. **Realidad:** $|\mathbb{S}_4| = 24$ y $[\mathbb{S}_4:\mathbb{A}_4] = 2$ dan $|\mathbb{S}_4| = 2 \cdot |\mathbb{A}_4|$, luego $|\mathbb{A}_4| = 12$; en general primero $|\mathbb{A}_4| = 12$ y $|N| = 4$ dan $|\mathbb{A}_4| = [\mathbb{A}_4:N] \cdot |N|$ con $[\mathbb{A}_4:N] = 3$.
- **Creía:** $|H \cap N|$ puede ser cualquier número. **Realidad:** $H \cap N \le H$ y $H \cap N \le N$, luego $|H| = a \cdot |H \cap N|$ y $|N| = b \cdot |H \cap N|$ para ciertos enteros $a,b$; solo sobreviven los divisores comunes de $|H|$ y $|N|$, por ejemplo para $|H| = 3$ y $|N| = 4$ fuerza $|H \cap N| = 1$.
- **Creía:** si $|H| = 3$ y $|N| = 4$ entonces $|\mathbb{S}_4|$ debería valer $|H| \cdot |N|$ ajustado por la intersección y eso es absurdo. **Realidad:** la igualdad $|HN| \cdot |H \cap N| = |H| \cdot |N|$ mide al conjunto $HN$, no al grupo ambiente; con $|H \cap N| = 1$ da $|HN| = 12$, sin contradicción con $|\mathbb{S}_4| = 24$.
- **Creía:** $\langle (1\,2\,3) \rangle = \{(1),(1\,2\,3)\}$ y $(1\,2\,3)^2 = (1)$. **Realidad:** $(1\,2\,3)^2 = (1\,3\,2)$ y $(1\,2\,3)^3 = (1)$, luego $\langle (1\,2\,3) \rangle = \{(1),(1\,2\,3),(1\,3\,2)\}$ tiene $3$ elementos.
- **Creía:** cualquier conjunto de $3$ elementos sirve como representantes y no hace falta que sea subgrupo. **Realidad:** con subgrupo $H$ vale $k_1N = k_2N$ exactly cuando $k_1^{-1}k_2 \in N$, y con $k_1^{-1}k_2 \in H \cap N = \{(1)\}$ sale $k_1 = k_2$; sin subgrupo no hay ese control de colisión.
- **Creía:** en $D_n$ basta ver si $r^2$ está fuera de $\langle r \rangle$ para declarar otra clase. **Realidad:** lo que decide si $r$ y $r^2$ están en la misma coclase es si $r^{-1}r^2$ está en el subgrupo, no si $r^2$ pertenece como elemento aislado.

## 2. Normalidad: izquierda vs derecha, centro vs normal

- **Creía:** si hay $2$ clases izquierdas y $2$ derechas entonces cada derecha coincide automáticamente con alguna izquierda. **Realidad:** dos particiones en $2$ bloques no tienen por qué compartir bloques; el argumento usa $eN = Ne = N$, el complemento $G \setminus N$ y que $g = ge = eg$ pertenece a $gN$ y a $Ng$ a la vez.
- **Creía:** la coclase aditiva se escribe $q\mathbb{Z}$ y da igual el lado por ser coclase. **Realidad:** se escribe $q + \mathbb{Z}$ y vale $\mathbb{Z} + q = q + \mathbb{Z}$ porque la suma en $\mathbb{Q}$ conmuta, no por normalidad.
- **Creía:** para probar que $H$ no es normal basta $gX \neq Xg$. **Realidad:** normalidad es $gXg^{-1} \in H$ para todo $g$; que un elemento no conmute es más fuerte y no es necesario, por eso $H$ puede ser normal en $D_4$ aunque $sr \neq rs$.
- **Creía:** central y normal son lo mismo. **Realidad:** central implica normal pero el recíproco es falso; el ejemplo es $H$ normal en $D_4$ con elementos que no conmutan.
- **Creía:** $gHg^{-1} \le H$ ya está dado y como tiene el mismo orden entonces es $H$. **Realidad:** lo dado por $x \mapsto gxg^{-1}$ es $gHg^{-1} \le G$ con $|gHg^{-1}| = |H|$; el cierre usa unicidad del subgrupo de ese orden en $G$ para forzar $gHg^{-1} = H$.
- **Creía:** $gN = Ng$ vale por intuición cada vez. **Realidad:** una vez probado $N \trianglelefteq G$ vale para todo $g$ y la acción por conjugación $g \cdot h = ghg^{-1}$ está bien definida justamente por esa contenencia; olvidar lo ya probado rompe la acción.

## 3. Cálculos explícitos de conjugación y centro

- **Creía:** $r^2 \in Z(D_4)$ se ve directo o basta conmutar con un elemento. **Realidad:** desde $rs = sr^{-1}$ y $r^{-2} = r^2$ sale $r^2s = sr^2$ por cálculo explícito, y como $s$ y $r$ generan $D_4$ conmutar con ambos da el centro; además $K \le D_4$ pide $xy^{-1} \in K$ en todas las combinaciones.
- **Creía:** el centro de $\mathbb{S}_3$ exige revisar todos los pares o bien $Z(\mathbb{S}_3)$ tiene más elementos. **Realidad:** $Z(\mathbb{S}_3) = \{(1)\}$, agrupando por tipo transposiciones vs $3$-ciclos con $(1\,2)(2\,3) \neq (2\,3)(1\,2)$.
- **Creía:** en $Q_8$ hay que decidir si cada subgrupo es Klein o cíclico para ver normalidad. **Realidad:** $|Q_8| = 8$ fuerza órdenes $1, 2, 4, 8$, hay un único elemento de orden $2$ que da el centro, y todo subgrupo de orden $4$ tiene índice $2$ y por Ej6 ya es normal.
- **Creía:** una matriz escalar central sirve como contraejemplo en $GL(2,\mathbb{C})$ y $gX \neq Xg$ refuta normalidad. **Realidad:** la escalar $-iI$ es central y además ni siquiera está en $H$; hay que exhibir $g$ y $X \in H$ con $gXg^{-1} \notin H$ verificando pertenencia por entradas en $\{0, \pm 1, \pm i\}$.
- **Creía:** $par \cdot par = par$ cierra paridad sin más. **Realidad:** hay que descomponer en transposiciones y contar factores para paridad e inversas.

## 4. Homomorfismos y primer isomorfismo

- **Creía:** la dirección $f:G \to H$ no importa y la identidad sirve como no sobreyectiva. **Realidad:** $id:G \to G$ es sobreyectiva; el contraejemplo es encajar un subgrupo no normal en un grupo mayor como $\langle (1\,2) \rangle$ en $\mathbb{S}_3$.
- **Creía:** si $f$ es isomorfismo entonces $N = \ker f$. **Realidad:** en ese caso $\ker f = \{e\}$; lo que pide $H/f(N)$ es $\Phi = \pi \circ f$ con $\ker \Phi = N$ e $Im(\Phi) = H/f(N)$ verificados por separado.
- **Creía:** sobreyectividad sobre clases es obvia porque cada clase tiene representante. **Realidad:** antes hay que ver buena definición y que la regla preserva el producto; recién después el conteo con núcleo trivial más igualdad de órdenes da biyectividad, como en $\mathbb{S}_4/N \cong \mathbb{S}_3$ vía $h \mapsto h|_{\{1,2,3\}}$ y en $GL/SL$ por determinante.
- **Creía:** $G$ se genera con los levantados del cociente solos. **Realidad:** hacen falta $x_i$ con $x_iN$ generadores de $G/N$ más $n_j$ generadores de $N$, o sea $S = \{x_i\} \cup \{n_j\}$, porque $\langle x_i \rangle$ solo no produce lo de dentro de $N$; la prueba escribe $gN$ como palabra en $x_iN$, baja a $x \in \langle x_i \rangle$ y corrige por $x^{-1}g \in N$.

## 5. Acciones, órbita-estabilizador, $p$-grupos

- **Creía:** el lema $|X| \equiv |X^G|$ necesita un grupo ya presente en el enunciado binomial. **Realidad:** es general para $p$-grupos porque $|G| = |O_x| \cdot |G_x|$ con $|G|$ potencia de $p$ fuerza $|O_x| = 1$ o múltiplo de $p$; aplicado a $\Omega = \{S \subseteq X \text{ con } |S| = p^n\}$ da $\binom{p^nk}{p^n} \equiv k$.
- **Creía:** $g \cdot (x,i) = (g+x,i)$ mezcla mundos incompatibles. **Realidad:** es $G \times X \to X$ con $G = \mathbb{Z}_{p^n}$ actuando por suma en la primera coordenada e identidad en $i$.
- **Creía:** $S = G \times \{i\}$ fijo no se usa. **Realidad:** fijo significa unión de órbitas completas de tamaño $p^n$, luego con $|S| = p^n$ el fijo $S$ es exactamente una órbita completa.
- **Creía:** $G_h$ es subgrupo porque coincide con $C_G(h)$ y $[G:G_h] = |O_h|$ vale sin hipótesis. **Realidad:** $G_h \le G$ por criterio de subgrupo o por teorema general de estabilizadores, y $|G| = |O_h| \cdot |G_h|$ con $|G|$ y $|G_h|$ potencias de $p$ da órbita de tamaño potencia de $p$.
- **Creía:** $p$-grupo significa orden $p^n \cdot k$ o bien todos los elementos de orden $p$. **Realidad:** finito significa $|G| = p^n$ con $n \ge 1$, y cada elemento tiene orden $p^j$; la extensión con $N$ y $G/N$ $p$-grupos levanta exponentes como $g^{p^j} \in N$ y $(g^{p^j})^{p^k} = e$.
- **Creía:** un producto infinito de $\mathbb{Z}_p$ sirve como $p$-grupo infinito. **Realidad:** $(1,0,\dots)$ nunca se anula en el producto; el ejemplo es la suma directa donde $px_i = 0$ en cada coordenada y casi todo es $0$.
- **Creía:** en Burnside-cubo basta decir que lo no trivial fija $0$. **Realidad:** hay que suponer $X^r \neq \emptyset$, tomar $c$ con $r \cdot c = c$, usar $c(y) = c(r^{-1} \cdot y)$ con inyectividad para $y = r^{-1} \cdot y$, y contar con $|X^{id}| = 720$ más $23$ términos nulos para $720 = 24 \cdot 30$.

## 6. Cíclicos, generadores, productos

- **Creía:** $\mathbb{S}_3$ podría ser $\mathbb{Z}_6$ por tener $6$ elementos. **Realidad:** $\mathbb{S}_3$ no es abeliano y $\mathbb{Z}_6$ sí lo es, luego no son isomorfos; abelianidad y ciclicidad se preservan por isomorfismo.
- **Creía:** $(a,b)$ con $b = 0$ igual puede generar $\mathbb{Z} \times \mathbb{Z}$. **Realidad:** con $b = 0$ la segunda coordenada de $n(a,b)$ queda $0$, nunca da $(0,1)$; $\mathbb{Z} \times \mathbb{Z}$ no es cíclico.
- **Creía:** el producto directo no pide dónde vive cada coordenada. **Realidad:** $(h,k)$ vive con $h$ en el primer factor y $k$ en el segundo, con producto $(hh',kk')$; sin eso aparecen elementos imposibles como $(h,h)$.
- **Creía:** generadores de $\mathbb{Z}_n$ son misteriosos. **Realidad:** son exactamente las unidades, o sea $a$ con $a$ coprimo con $n$ como $5$ en $\mathbb{Z}_6$.

## 7. Formalismo

- **Creía:** intersección de subgrupos y coclases se manipula con doble inclusión directa. **Realidad:** hay que verificar no vacío primero, cuantificar $\forall j \in I$ y justificar $\cap (N_ix) = (\cap N_i)x$ multiplicando a derecha por $x^{-1}$; para normalidad es más corta la caracterización $gNg^{-1} \subseteq N$.
- **Creía:** $\phi$ no interior significa que para un $a$ fijo existe $g$ con $\phi(g) \neq aga^{-1}$. **Realidad:** significa que existe $g$ tal que para todo $a$ vale $\phi(g) \neq aga^{-1}$; el cuantificador sobre $a$ es universal dentro del existencial sobre $g$.
- **Creía:** misma imagen implica igualdad por sobreyectividad. **Realidad:** misma imagen implica igualdad por inyectividad, como en $f(\tilde x\tilde b) = f(\tilde b\tilde x)$ para concluir $\tilde x\tilde b = \tilde b\tilde x$.

## Prioridad de repaso

1. Tarjeta Lagrange: órdenes, índice con $|G| = [G:N] \cdot |N|$, divisores comunes de $H \cap N$, representantes.
2. Tres drills de normalidad: $gX \neq Xg$ vs $gXg^{-1} \notin H$, $gHg^{-1} \le G$ vs $\le H$, unicidad cierra normalidad.
3. Inventario $D_4/\mathbb{S}_3/Q_8$ de memoria: $|D_4| = 8$, $|Q_8| = 8$, $Z(\mathbb{S}_3) = \{e\}$, $r^2 \in Z(D_4)$, índice $2$ implica normal.
4. Recetas reutilizables: $\Phi = \pi \circ f$ con núcleo e imagen, levantamiento $S = \{x_i\} \cup \{n_j\}$, fijos como uniones de órbitas.
