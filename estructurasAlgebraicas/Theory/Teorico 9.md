---
dateCreated: 2026-09-04
tags:
  - AlgebraicStructures
  - Rings
source: "[[EA-Teorico-7-4sept.pdf]]"
---

# Teórico 9 — Anillos: definición y ejemplos

## Definición

>[!definition] Anillo
>Un **anillo** $R$ consiste en:
>1. un grupo $(R,+)$, con neutro $0\in R$;
>2. una operación $\cdot\colon R\times R\to R$ asociativa, con neutro $1\in R$;
>3. distributividad a izquierda y a derecha: $$a(b+c)=ab+ac,\qquad (a+b)c=ac+bc.$$
>No se pide que $\cdot$ sea conmutativa.

^anillo

>[!proposition] Criterio de subanillo con unidad
>Sea $R$ un anillo y sea $T\subseteq R$. Entonces $T$, con las operaciones restringidas de $R$ y la misma unidad $1_R$, es un subanillo de $R$ si y sólo si $1_R\in T$ y, para todos $a,b\in T$, se tiene $a-b\in T$ y $ab\in T$.
>>[!Proof]-
>>1. Si $T$ es un subanillo con la misma unidad, contiene $1_R$ y es cerrado bajo la resta y el producto.
>>2. Recíprocamente, $1_R\in T$ y el cierre bajo resta dan $0_R=1_R-1_R\in T$. Para cada $a\in T$ se obtiene $-a=0_R-a\in T$; para $a,b\in T$, también $a+b=a-(-b)\in T$. Por tanto, las operaciones de suma, opuesto y producto quedan definidas en $T$, y $1_R$ es su unidad. La asociatividad y las dos distributividades se heredan de $R$; luego $T$ es un subanillo con unidad.

>[!lemma] $(R,+)$ es abeliano
>En un anillo, la suma es conmutativa.
>
>>[!Proof]-
>>Se expande $(1+1)(x+y)$ de dos maneras. Por distributividad a izquierda, $$(1+1)(x+y)=(1+1)x+(1+1)y=x+x+y+y.$$ Por distributividad a derecha, $$(1+1)(x+y)=1(x+y)+1(x+y)=x+y+x+y.$$ Igualando y cancelando un $x$ a izquierda y un $y$ a derecha (el grupo $(R,+)$ admite cancelación), queda $x+y=y+x$.

>[!remark]
>Eso prueba que **la suma** es conmutativa, no que el anillo lo sea. $M_n(\mathbb R)$ y $\mathbb H$ son anillos no conmutativos. Algunos textos piden $(R,+)$ abeliano en la definición; acá se deduce de la unidad y las dos distributividades.

>[!definition] Morfismo de anillos
>Si $R$ y $S$ son anillos, un **morfismo de anillos** $f\colon R\to S$ cumple
>1. $f$ es homomorfismo de grupos $(R,+)\to(S,+)$: $f(0)=0$ y $f(a+b)=f(a)+f(b)$;
>2. $f(1)=1$ y $f(ab)=f(a)f(b)$ para todo $a,b\in R$.

### Ejemplos

>[!example] Cuerpos y matrices
>1. $\mathbb Z$, $\mathbb Q$, $\mathbb R$, $\mathbb C$.
>2. $M_n(\mathbb Z)$, $M_n(\mathbb Q)$, y en general $M_n(R)$ si $R$ es un anillo.

>[!example] Endomorfismos aditivos
>Si $(R,+)$ es el grupo aditivo de un anillo, $$\operatorname{End}(R,+)=\{\,f\colon R\to R:\ f\text{ es homomorfismo de grupos aditivos}\,\}$$ es un anillo con $$(f+g)(r)=f(r)+g(r),\qquad (fg)(r)=f(g(r)).$$

>[!example] Funciones continuas
>Si $X$ es un espacio topológico, $C(X)=\{f\colon X\to\mathbb R\text{ continuas}\}$ es un anillo con operaciones puntuales $$(f+g)(x)=f(x)+g(x),\qquad (fg)(x)=f(x)g(x).$$ Además es un $\mathbb R$-espacio vectorial: $(\lambda f)(x)=\lambda f(x)$.
>Observación de la clase: si se conoce el anillo $C(X)$, se puede recuperar $X$ (para $X$ compacto de Hausdorff).

>[!example] Funciones $C^\infty$
>Si $M$ es una variedad diferenciable, $$C^\infty(M)=\{f\colon M\to\mathbb R\text{ de clase }C^\infty\}$$es un anillo puntual. 
>Una $f\colon M\to N$ de clase $C^\infty$ induce un morfismo de anillos en sentido contrario $$f^*\colon C^\infty(N)\to C^\infty(M),\qquad f^*(\varphi)=\varphi\circ f.$$

>[!definition] Álgebra de grupo
>Sea $R$ un anillo y $G$ un grupo. El **álgebra de grupo** es $$R[G]=\bigoplus_{g\in G}R\cdot g$$ (suma directa de copias de $R$, una por cada $g\in G$). Un elemento es una suma finita $\sum_{g\in G}r_g g$ con $r_g\in R$ y $r_g=0$ salvo para finitos $g$.
>Suma: $$\Bigl(\sum r_g g\Bigr)+\Bigl(\sum s_g g\Bigr)=\sum(r_g+s_g)g.$$ Producto, definido en generadores por el producto de $G$ y extendido: $$(r_g g)(s_h h)=(r_g s_h)\,gh,$$ de modo que $$\Bigl(\sum r_g g\Bigr)\Bigl(\sum s_h h\Bigr)=\sum_{g,h}(r_g s_h)\,gh.$$ El neutro multiplicativo es $1_R\cdot e_G$. Chequeo de la clase: $(1\cdot x^{-1})(1\cdot x)=1\cdot e_G$.

>[!example] $R[\mathbb Z]$ y $R[\mathbb Z_n]$
>Para $R=\mathbb Z$, tomamos un generador $x$ de orden infinito e identificamos $n\in\mathbb Z$ con $x^n$, se tiene $\mathbb Z[\mathbb Z]\cong\mathbb Z[\langle x\rangle]$, donde $\langle x\rangle=\{x^n:n\in\mathbb Z\}$. El pizarrón escribió, por ejemplo, $$2\cdot 1+2\cdot 2+7\cdot 3\qquad\longleftrightarrow\qquad 2x+2x^2+7x^3.$$ Para $R[\mathbb Z_n]$ los elementos se escriben como sumas $r_0e+r_1y+\cdots+r_{n-1}y^{n-1}$, donde $y$ genera $\mathbb Z_n$ y $y^n=e$.

## Mas ejemplos de anillos

>[!example] Series formales
>$\mathbb C[[x]]=\bigl\{\sum_{n\geq 0}a_n x^n:a_n\in\mathbb C\bigr\}$, sin pedir soporte finito.

>[!example] Funciones meromorfas
>Si $M$ es una variedad compleja **conexa**, $$\mathcal M(M)=\{f\colon M\to\mathbb C\text{ meromorfas}\}$$es un cuerpo: toda $f\not\equiv 0$ tiene inversa meromorfa $1/f$. El pizarrón dijo “toda $f$ es invertible”; el $0$ no lo es, y sin conexidad hay idempotentes.

>[!example] Cuaterniones
>$\mathbb H=\{a+bi+cj+dk:a,b,c,d\in\mathbb R\}$ con $$i^2=j^2=k^2=-1,\qquad ij=k,\quad ki=j,\quad jk=i.$$ Si $z=a+bi+cj+dk$, el conjugado es $\overline z=a-bi-cj-dk$ y $|z|=\sqrt{a^2+b^2+c^2+d^2}$. La inversa es $$z^{-1}=\frac{\overline z}{|z|^2}\qquad(z\neq 0).$$ Es un anillo de división no conmutativo. En el pizarrón el denominador apareció como $|z|$; la identidad $z\overline z=|z|^2$ pide el cuadrado.
