#set page(margin: 2.5cm)
#set text(lang: "es", size: 11pt)
#set par(justify: true, leading: 0.68em)

#let statement(kind, body) = block(
  width: 100%,
  inset: 10pt,
  radius: 4pt,
  fill: rgb("#f7f7f7"),
  stroke: rgb("#dddddd"),
  body,
)

#let stitle(kind) = [*#kind*#h(0.6em)]

#align(center)[
  #text(16pt, weight: "bold")[Transcripción en Typst de `3-12.pdf`]
]

#v(0.8em)

_Nota:_ esta es una transcripción fiel en lo posible de apuntes manuscritos. En la función de ejemplo de la primera página se usó la versión estándar que coincide con el enunciado visible.

#v(1em)

#statement("Definición")[
  #stitle("Definición")
  Sea $F: U subset.eq RR^n -> RR^m$ tal que todas sus derivadas parciales existen en cada punto de $U$ y las funciones

  $
    partial(F_j, x_i): U subset.eq RR^n -> RR
  $

  son continuas.

  Entonces se dice que $F$ es una función de clase $C^1$, o continuamente diferenciable, sobre $U$.
]

#v(0.8em)

#statement("Observación")[
  #stitle("Observación")
  Sea $F: U subset.eq RR^n -> RR^m$. Vimos que si $F$ es diferenciable en $p in U$, entonces para todo $v in RR^n$ existe la derivada de $F$ en la dirección de $v$:

  $
    (d F)_p v = lim_(t -> 0) (F(p + t v) - F(p)) / t.
  $

  En particular, existen todas sus derivadas parciales $partial(F_j, x_i)$.

  También vimos que $F$ es continua en $p$.

  Por otro lado, la existencia de todas las derivadas direccionales de $F$ en un punto $p$ no garantiza que $F$ sea diferenciable en $p$.
]

#v(0.8em)

#statement("Ejercicio")[
  #stitle("Ejercicio")
  Sea $F: RR^2 -> RR$ dada por

  $
    f(x, y) = cases(
      (x^2 y) / (x^4 + y^2) & "si" (x, y) != (0, 0),
      0 & "si" (x, y) = (0, 0)
    )
  $

  Mostrar que todas las derivadas direccionales existen en $p = (0, 0)$, pero $F$ no es continua en $(0, 0)$. ¿Qué puede decir de la función?
]

#v(0.8em)

#statement("Teorema")[
  #stitle("Teorema (Diferenciabilidad en $C^1$)")
  Sea $U subset.eq RR^n$ un abierto. Si $F: U subset.eq RR^n -> RR^m$ es de clase $C^1$ sobre $U$ (esto es, las funciones $partial(F_j, x_i): U subset.eq RR^n -> RR$ existen y son continuas), entonces $F$ es diferenciable sobre todo $U$.
]

_Just.:_ repasarlo. Cualquier libro clásico de análisis (Rudin, Spivak, Apostol, ...).

#v(0.8em)

#statement("Definición")[
  #stitle("Definición (Derivadas parciales de orden superior)")
  Sea $U$ un abierto de $RR^n$ y

  $
    F: U subset.eq RR^n -> RR^m, quad x mapsto (F_1, dots, F_m),
  $

  una función tal que existen todas sus derivadas parciales sobre $U$.

  Es decir, podemos definir funciones

  $
    partial(F_j, x_i): U subset.eq RR^n -> RR, quad p = (x_1, dots, x_n) mapsto partial(F_j, x_i)(p).
  $

  En este caso, podemos derivar estas funciones para obtener derivadas parciales de segundo orden:

  $
    (partial^2 F_j) / (partial x_k partial x_i) := partial/(partial x_k) (partial(F_j, x_i)),
  $

  cuando tales derivadas existan.

  Continuando de forma recursiva, se definen las derivadas parciales de orden superior. Las derivadas parciales de orden $k$ son las derivadas parciales de orden $k - 1$, cuando estas existen.
]

#v(0.8em)

#statement("Definición")[
  #stitle("Definición (Clases de diferenciabilidad)")
  Sea $U subset.eq RR^n$ un abierto y $k in NN union {0}$. Una función $F: U subset.eq RR^n -> RR^m$ se dice de clase $C^k$, o diferenciable continuamente $k$ veces, si todas las derivadas parciales de $F$ de orden menor o igual a $k$ existen y son funciones continuas en $U$.

  Así, la clase $C^0$ son solo las funciones continuas sobre $U$.

  Una función que es de clase $C^k$ para todo $k in NN union {0}$ se dice de clase $C^infinity$, o _suave_, o infinitamente diferenciable.
]

#v(0.8em)

#statement("Teorema")[
  #stitle("Teorema (de Schwarz-Clairaut de las derivadas cruzadas)")
  Si $U$ es un abierto de $RR^n$ y $F: U subset.eq RR^n -> RR^m$ es una función de clase $C^2$ sobre $U$, entonces las derivadas parciales mixtas de segundo orden no dependen del orden de diferenciación:

  $
    (partial^2 F_j) / (partial x_i partial x_k) = (partial^2 F_j) / (partial x_k partial x_i).
  $
]

#v(0.8em)

#statement("Corolario")[
  #stitle("Corolario")
  Si $F: U subset.eq RR^n -> RR^m$ es suave, entonces las derivadas parciales mixtas de $F$ de cualquier orden son independientes del orden de diferenciación.
]

_Just.:_ repasarlo. Cualquier libro clásico de análisis (Rudin, Spivak, Apostol, ...).

#v(0.8em)

#statement("Observación")[
  #stitle("Observación")
  Desde el punto de vista de Teoría de Lie, puede entenderse este teorema como que ciertos grupos de transformaciones conmutan entre sí (en este caso, dos translaciones conmutan entre sí; las translaciones "generan" las derivadas parciales).
]

= Curvas y diferenciabilidad

Sea $I subset.eq RR$ un intervalo abierto y $gamma: I subset.eq RR -> RR^n$ una función diferenciable en $t_0 in I$. Esto quiere decir que tenemos una transformación lineal

$
  (d gamma)_(t_0): RR -> RR^n.
$

Como el dominio de $(d gamma)_(t_0)$ es $RR$, que es un espacio vectorial real de dimensión $1$, la imagen de $(d gamma)_(t_0)$ está determinada por su valor en $1$.

Luego $(d gamma)_(t_0)(1)$ es un vector en $RR^n$, cuyas coordenadas sabemos calcular. Si

$
  (d gamma)_(t_0)(1) = sum_(j = 1)^n a_j(t_0) e_j,
$

entonces

$
  a_j(t_0)
    = chevron.l (d gamma)_(t_0)(1), e_j chevron.r
    = lim_(t -> 0) chevron.l (gamma(t_0 + t) - gamma(t_0)) / t, e_j chevron.r
    = lim_(t -> 0) (gamma_j(t_0 + t) - gamma_j(t_0)) / t
    = gamma_j'(t_0).
$

#statement("Definición")[
  #stitle("Definición")
  Sea $I subset.eq RR$ un intervalo. Una función del tipo

  $
    gamma: I subset.eq RR -> RR^n
  $

  se llama _curva_, y se define el _vector velocidad_ en $t_0$, denotado por $gamma'(t_0)$, como el vector

  $
    (gamma_1'(t_0), dots, gamma_n'(t_0)),
  $

  cuando cada una de las derivadas existe.
]

#v(0.8em)

#statement("Observación")[
  #stitle("Observación")
  Usando esta notación de vector velocidad, si $gamma: I subset.eq RR -> RR^n$ es diferenciable en $t_0$, entonces

  $
    (d gamma)_(t_0)(1) = gamma'(t_0),
  $

  y en general, si $h in RR$,

  $
    (d gamma)_(t_0)(h) = h gamma'(t_0).
  $
]

#v(0.8em)

#statement("Ejercicio")[
  #stitle("Ejercicio")
  Sea $gamma: I subset.eq RR -> RR^n$ tal que el vector velocidad $gamma'(t_0)$ existe. Mostrar que $gamma$ es diferenciable en $t_0$, es decir, existe la transformación lineal

  $
    (d gamma)_(t_0): RR -> RR^n
  $

  dada por $(d gamma)_(t_0)(h) = h gamma'(t_0)$.
]

= Variedades diferenciables

#statement("Definición")[
  #stitle("Definición (Variedad topológica)")
  Sea $M$ un espacio topológico. Se dice que $M$ es una variedad topológica de dimensión $n$ si tiene las siguientes propiedades:

  1. $M$ es Hausdorff: para todo par de puntos distintos $p != q$ en $M$, existen abiertos disjuntos $U$ y $V$ de $M$ tales que $p in U$ y $q in V$.
  2. $M$ satisface el segundo axioma de numerabilidad (es $N_2$), esto es, tiene una base numerable para la topología de $M$.
  3. $M$ es localmente euclídeo de dimensión $n$: para cada $p in M$, existe un conjunto abierto $U$ de $M$ conteniendo a $p$, un conjunto abierto $hat(U)$ de $RR^n$, y un homeomorfismo

  $
    phi: U subset.eq M -> hat(U) subset.eq RR^n.
  $
]

En el punto (ii), decir que $M$ tiene una base numerable significa que existe una familia numerable $cal(B)$ de abiertos de $M$ tal que todo abierto de $M$ es unión de miembros de $cal(B)$.

#v(0.8em)

#statement("Observación")[
  #stitle("Observación")
  Se prueba (en topología algebraica) que si un abierto de $RR^n$ es homeomorfo a un abierto de $RR^m$, entonces $n = m$. En virtud de este resultado, está bien definida la noción de dimensión de una variedad topológica.
]

#v(0.8em)

#statement("Definición")[
  #stitle("Definición (Cartas)")
  Sea $M$ una variedad topológica de dimensión $n$. Una _carta coordenada_ (o simplemente, una _carta_) sobre $M$ es un par $(U, phi = (x_1, dots, x_n))$, donde $U$ es un abierto de $M$ y

  $
    phi: U subset.eq M -> hat(U) subset.eq RR^n
  $

  es un homeomorfismo, con $hat(U) = phi(U)$.
]

Cuando se dice que $(U, phi)$ es una carta de $p$, nos referimos a que $p in U$. Se dice que la carta está _centrada_ en $p$ si $phi(p) = 0$.

#v(0.8em)

#statement("Observación")[
  #stitle("Observación")
  Notar que en toda variedad topológica $M$, cualquier punto $p in M$ tiene una carta centrada en ese punto: se toma $(U, phi)$, una carta de $p$, y se usa una traslación, restando $phi(p)$.
]

== Ejemplos

1. $RR^n$ con su topología usual.
2. Cualquier abierto $U$ de $RR^n$.
3. Cualquier espacio vectorial real de dimensión finita.
4. Esferas.

Sea $S^n$ la esfera unidad de $RR^(n + 1)$:

$
  S^n := {(x_1, dots, x_(n + 1)) in RR^(n + 1) : x_1^2 + dots + x_(n + 1)^2 = 1}.
$

Consideramos sobre $S^n$ la topología heredada (inducida) de $RR^(n + 1)$, y con esta $S^n$ es Hausdorff y satisface $N_2$. Solo falta ver que es localmente euclídeo.

Sea $p = (a_1, dots, a_(n + 1)) in S^n$ arbitrario. Como

$
  a_1^2 + dots + a_(n + 1)^2 = 1,
$

existe algún $a_i != 0$.

Supongamos que $a_i > 0$ (el caso $a_i < 0$ es análogo). Consideremos el abierto de $RR^(n + 1)$

$
  U_i^+ := {(x_1, dots, x_i, dots, x_(n + 1)) in RR^(n + 1) : x_i > 0}.
$

¿Por qué es abierto?

Esto define un abierto de $S^n$ dado por

$
  S^n ∩ U_i^+.
$

Definimos la función

$
  phi_i^+: S^n ∩ U_i^+ -> RR^n,
$
$
  (x_1, dots, x_i, dots, x_(n + 1)) mapsto (x_1, dots, hat(x_i), dots, x_(n + 1)),
$

donde el sombrero significa que se ha borrado la coordenada $x_i$.

Claramente $phi_i^+$ es continua, y la imagen de $phi_i^+$ es el abierto

$
  B^n := {(y_1, dots, y_n) in RR^n : y_1^2 + dots + y_n^2 < 1}.
$

En efecto, si $(x_1, dots, x_i, dots, x_(n + 1)) in S^n ∩ U_i^+$, entonces $x_i > 0$ y

$
  x_1^2 + dots + hat(x_i^2) + dots + x_(n + 1)^2 < 1.
$

Recíprocamente, cualquier $(y_1, dots, y_n) in B^n$ define un punto bien definido en $S^n ∩ U_i^+$ dado por

$
  p := (y_1, dots, y_(i - 1), sqrt(1 - (y_1^2 + dots + y_n^2)), y_i, dots, y_n).
$

Notar que $phi_i^+$ es un homeomorfismo entre $S^n ∩ U_i^+$ y $B^n$, pues la inversa sería

$
  (phi_i^+)^(-1): B^n -> S^n ∩ U_i^+,
$
$
  (y_1, dots, y_n) mapsto (y_1, dots, y_(i - 1), sqrt(1 - (y_1^2 + dots + y_n^2)), y_i, dots, y_n),
$

la cual es continua. ¿Por qué?
