# Repaso — puntos débiles detectados en mis sesiones (6–16 sep)

Revisión de ~50 sesiones del proyecto. Casi todo es variable compleja: ramas, Möbius, afines, Cauchy-Riemann. Idea global: la mayor traba es pasar de lo puntual a lo global — resolver en un punto vs construir una función continua/analítica en un dominio, y manejar $\infty$ y los cortes como parte del dominio.

## 1. Ramas / log / potencias / sqrt — prioridad 1

Tomé $\sqrt{\phantom{x}}$ o $(1-z^2)^{1/2}$ como función hecha (*"why not just say f(z)=(1-z^2)^{1/2} which is analytical.. done"*). Falta: si $c \ne 0$, la ecuación $w^2=c$ tiene 2 valores $\pm$; si $c=0$, uno solo. El símbolo solo no elige rama.

$\exp$ es entera (serie, radio infinito); lo peligroso es $\mathrm{Log}(\exp(w))=w$, que vale solo si $w$ está en la tira elegida. De ahí el bloqueo: *"then why do you say z^{a+b}=z^a z^b.. thats always true"* — el caso (i) es seguro porque usa solo $e^u e^v=e^{u+v}$, el caso (ii) necesita cancelar $\log\circ\exp$.

Jerarquía que se me mezcla: corte $\to$ rama-log $\to$ rama-potencia. En el mismo dominio $G$, $\mathrm{Log}_k=\mathrm{Log}_0+2k\pi i$ no cambia dominio, cambia $\mathrm{Arg}_k=\mathrm{Arg}+2k\pi$. Si $n \in \mathbb{Z}$, $e^{n(\mathrm{Log}+2k\pi i)}=e^{n\mathrm{Log}}$; si el exponente no es entero, la expresión sí depende de $k$. Por eso *"definir f(z)=e^{(1/p)\mathrm{Log}(z)} y listo"* no da unicidad.

Dirección de cortes trasladados. Cadena típica mía: *"z menor que 1"* $\to$ *"C \ inf,1]"* $\to$ al final $C \setminus [1,+\infty)$. Necesité el test $z=0$ ($1-0=1$ permitido) vs $z=2$ ($1-2=-1$ prohibido) para ver que el rayo va a $+\infty$. Lo mismo con $(-\infty,-1] \cup [1,\infty)$ para $1-z^2$: creía que bastaba quitar $\pm 1$ (*"C without those two points?"*, *"its [-1,1] thats what we need to remove"*) y no veía el lazo alrededor de un solo cero.

Test útil: $z=-2,-1,0,1,2,i$ más bola en $z_0=1$ para apertura.

Repasar: escribir $S$ exacto, bordes abierto/cerrado, criterio $\text{imagen} \subset \mathbb{C} \setminus (-\infty,0]$ para usar $\mathrm{Log}$ principal, factorización $1-z^2=(1-z)(1+z)$ (cerca de $1$, el factor $1+z$ es inofensivo y lo malo es $1-z$).

## 2. Möbius en la esfera $\mathbb{C}_\infty$ — prioridad 2

Aritmética de $\infty$: *"T(inf)=a/c entonces a es infinito porque c no es 0"*, *"T(0) no es b/d si d es 0"*. Con $c \ne 0$, el cociente $a/c$ es finito y no puede ser $\infty$. Tabla a fijar: $T(-d/c)=\infty$, $T(\infty)=a/c$, caso $c=0$ aparte.

Confundí $S$ (fórmula en $\mathbb{C} \setminus \{-d/c\}$) con $S^*$ (extensión continua a $\mathbb{C}_\infty$). El límite $(a+b/z)/(c+d/z) \to a/c$ motiva la definición, no es la definición.

Puntos fijos: *"en traslación z+b el punto fijo es -b"* — confundo $T(p)=p$ con el cero de $b$. Olvido sistemático de $\infty$: la traslación con $b \ne 0$ no tiene fijos finitos pero fija $\infty$; la dilatación $az$ fija $0$ e $\infty$.

Razón doble tratada como ecuación numérica (*"ok, so we have 3 equations.. now we should solve them?"*). Es identidad de funciones: 3 puntos determinan la Möbius.

Núcleo duro: $ST=TS \iff$ mismos fijos. Intenté deducir $ST=TS$ de coincidir en $\le 2$ puntos (*"la vuelta es directa porque si z es punto fijo T(z)=z=S(z)"*), pero hacen falta 3. No distinguí $S(\{p_1,p_2\})=\{p_1,p_2\}$ (preserva el conjunto) de $S(p_1)=p_1$ (fija punto a punto). Transporte por conjugación: $\mathrm{Fix}(RTR^{-1})=R(\mathrm{Fix}(T))$; pregunté 10+ veces *"dónde definimos R?"* — $R$ la elijo yo por 3-transitividad. El caso intercambio fuerza $k^2=1$, o sea $k=-1$, y de ahí sale el contraejemplo $T(z)=-z$, $S(z)=1/z$, que conmutan con fijos distintos $\{0,\infty\} \ne \{1,-1\}$. En $\mathbb{C}_\infty$ vale $|z| \to \infty$ sin signo: la afín fija $\infty$.

## 3. Cauchy-Riemann / diferencial / armónicas

Frases mías: *"v debe ser armónica y f analítica"*, *"analítica es derivable con derivada continua"*. Falta: $u,v$ armónicas más CR como condición extra para que $f=u+iv$ sea holomorfa.

Intenté $\mathrm{Re}(f'(z))$ para derivar $\mathrm{Re}(f)$. Lo correcto es la diferencial $Df=\begin{pmatrix}u_x & u_y \\ v_x & v_y\end{pmatrix}$ del mapa $\mathbb{R}^2 \to \mathbb{R}^2$, no una derivada compleja. En $|f-a|=r$ derivé bien en $x$ pero no vi derivar en $y$; sumé ecuaciones en vez de factorizar $[(u-a_1)^2+(v-a_2)^2]u_x=0 \Rightarrow u_x=0$.

Integración parcial: $v_x=2x$, $v_y=2-2y$ bien planteadas pero integré respecto a la variable equivocada (salía $2x-2y=c'(x)$), y dejé $v=2xy+x^2-2xy$ sin simplificar a $x^2$. El círculo genérico es $w=a+r\cdot e^{it}$, o sea $|w-a|=r$ (no solo $r e^{it}$).

## 4. Geometría: rectas/círculos bajo $w=1/z$, afines, $\exp$

Frase mía: *"re^{itita} are circles and r(t)e^{itita} are lines"* — solo cubre círculos centrados en $0$ y rectas por $0$. Después: *"for the circle i can just add a point"*, *"x=1/y"*. No usé $|e^{it}|=1$ para eliminar el parámetro.

Afines: *"es con módulo de a o sin módulo"*. El radio es $|a|r$, no $ar$: si $a=-2$, el argumento es $\pi$ (gira y dilata por $2$). Si $a=0$ todo colapsa al punto $b$. Traté $\gamma:[0,2\pi] \to \mathbb{C}$ como si fuera $\mathbb{C} \to \mathbb{C}$ (*"functions are analytical if their derivative is continuous"*) — hay que separar curva vs integrando.

## 5. Hábitos de álgebra

Desigualdades en $\mathbb{C}$: *"z^2 must be lesser than 1"*, *"1-z^2 greater than 0"*, *"1/|z| < 1/r"* (es $>$). Regla: pasar siempre a $z=x+iy$ primero. Expansiones: $(1-x-iy)(1+x-iy)=1-x^2-2iy-y^2$ (yo perdía el $-2iy$ y ponía $-y$ en vez de $-y^2$). Conjugado, $|\cdot|^2$ y quitar denominadores con signo mal ($|1-z|^2$ por $|1+z|^2$). Notación sobrecargada: $f$ = rama-log en la definición vs $f,g$ = ramas-potencia en el ejercicio; fijar quién es quién antes de seguir.

## Qué repasar, en orden

1. Cortes y ramas: escribir $S$, testear con $-2,-1,0,1,2,i$, apertura por bolas, factorizar $1-z^2$, distinguir exponente entero vs $1/2$ vs irracional.
2. $\mathbb{C}_\infty$: tabla $T(\infty)$, $T(-d/c)$, $c=0$, $S$ vs $S^*$, fijos de traslación/dilatación/inversión incluyendo $\infty$.
3. Prueba $ST=TS \iff$ mismos fijos: preserva-conjunto vs fija-punto, fórmula de transporte, por qué hacen falta 3 puntos, caso $k=-1$.
4. CR con diferencial $Df$: derivar $|f-a|^2$ en $x$ e $y$, usar $w=a+r\cdot e^{it}$ y $|e^{it}|=1$ para $1/z$.
5. $\exp(w)=c$ puntual ($u=\ln\rho$, $v=\theta+2k\pi$) vs rama analítica continua — no mezclarlos.
