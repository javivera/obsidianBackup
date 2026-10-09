---
tags:
  - AlgebraicStructures
  - Practico8
source: "https://famaf.aulavirtual.unc.edu.ar/pluginfile.php/79213/mod_resource/content/1/EA_8_2026.pdf"
---

# Práctico 8

Fuente: [[EA - Pr8.pdf]]. Estructuras Algebraicas, FaMAF-UNC — 2026.

## Módulos, submódulos y homomorfismos

**Notación:** $k$ denotará un cuerpo.

>[!exercise] Ejercicio 1
>En cada uno de los casos siguientes mostrar que $M$ es un $R$-módulo (a izquierda) con la acción dada por $\varphi:R\times M\to M$ y describir los submódulos de $M$.
>- **(a)** $M=G$ un grupo abeliano, $R=\mathbb Z$ y $\varphi(n,g)=\underbrace{g+\cdots+g}_{n\text{ veces}}$.
>- **(b)** $M=V$, $k$-espacio vectorial, $R=k$ y $\varphi(\lambda,v)=\lambda v$.
>- **(c)** $M=V$ un $k$-espacio vectorial y $T$ una transformación lineal de $V$ en $V$, $R=k[x]$ y $\varphi(p(x),v)=p(T)v$.

>[!exercise] Ejercicio 2
>Sea $R$ un anillo, $S$ un subanillo e $I$ un ideal de $R$.
>- **(a)** Mostrar que $R$ es un $S$-módulo a izquierda con la acción dada por multiplicación a izquierda $s\cdot r=sr$, para todo $s\in S$, $r\in R$.
>- **(b)** Mostrar que $I$ es un $R$-submódulo de $R$ y es un $S$-módulo a izquierda con la multiplicación a izquierda de $R$.
>- **(c)** Mostrar que $R/I$ es un $R$-módulo con acción dada por $r\cdot(a+I)=ra+I$, y luego también es un $S$-módulo.

>[!exercise] Ejercicio 3
>Sea $\varphi:R\to S$ un homomorfismo de anillos. Probar que si $M$ es un $S$-módulo, entonces $M$ es un $R$-módulo con la acción dada por $r\cdot x:=\varphi(r)x$. Decimos que la estructura de $R$-módulo de $M$ está dada por el pullback a lo largo de $\varphi$.

>[!exercise] Ejercicio 4
>Sea $A$ un grupo abeliano y $\operatorname{End}(A)$ su anillo de endomorfismos. Mostrar que $A$ tiene estructura de $\operatorname{End}(A)$-módulo unitario con la acción dada por la evaluación, es decir, $f\cdot a:=f(a)$.

>[!exercise] Ejercicio 5
>Sea $k$ un cuerpo y $q\in k$. Recordemos el plano cuántico $$k_q[x,y]:=k\langle x,y\rangle/(xy-qyx).$$
>Sea $M=k[t]$ el espacio vectorial de polinomios. Demostrar que $M$ es un $k_q[x,y]$-módulo con acción dada por $$\begin{aligned}(x\cdot f)(t)&=tf(t),\\(y\cdot f)(t)&=f(qt).\end{aligned}$$
>Asumamos que $q$ es una raíz $n$-ésima de la unidad. Encontrar algún submódulo de $M$ que sea simple (es decir que no contenga submódulos no triviales).

>[!exercise] Ejercicio 6
>Probar los tres teoremas de isomorfismo para módulos.

>[!exercise] Ejercicio 7
>Sea $M$ un $R$-módulo y $f:M\to M$ un homomorfismo de $R$-módulos tal que $f\circ f=f$. Probar que $M=\ker f\oplus\operatorname{Im}f$.

>[!exercise] Ejercicio 8
>Sean $R$ anillo y $M$ un $R$-módulo. Probar que:
>- **(a)** Si $I$ es un ideal a izquierda de $R$ y $S\subseteq M$, $S\neq\varnothing$, entonces $$IS:=\left\{\sum_{i=1}^{n}r_ix_i:r_i\in I,\ x_i\in S,\ n\in\mathbb N\right\}$$ es un submódulo de $M$.
>- **(b)** Si $I$ es un ideal de $R$, entonces $M/IM$ es un $R/I$-módulo con $(r+I)\cdot(x+IM):=rx+IM$.

>[!exercise] Ejercicio 9
>Sea $R$ un anillo con identidad. Probar que todo $R$-módulo cíclico unitario es isomorfo a un $R$-módulo de la forma $R/J$, donde $J$ es un ideal a izquierda de $R$.

>[!exercise] Ejercicio 10
>Sean $R$ anillo conmutativo, $M,M'$ $R$-módulos a izquierda, $N,N'$ $R$-módulos a derecha. Definimos: $$\begin{aligned}\operatorname{Hom}_R(M,M')&:=\{f:M\to M':f\text{ es homomorfismo de }R\text{-módulos a izquierda}\},\\\operatorname{Hom}_R(N,N')&:=\{f:N\to N':f\text{ es homomorfismo de }R\text{-módulos a derecha}\}.\end{aligned}$$
>Probar que:
>- **(a)** $\operatorname{Hom}_R(M,M')$ tiene estructura de $R$-módulo a derecha con $(f\cdot r)(x)=f(r\cdot x)$.
>- **(b)** $\operatorname{Hom}_R(N,N')$ tiene estructura de $R$-módulo a izquierda con $(r\cdot f)(y)=f(y\cdot r)$.
>¿Qué pasa si no se pide que $R$ sea conmutativo?

>[!exercise] Ejercicio 11
>Probar que $\operatorname{Hom}_{\mathbb Z}(\mathbb Q,\mathbb Q)\cong\mathbb Q$.

>[!exercise] Ejercicio 12
>Un $R$-módulo $M$ se dice simple si $M\neq0$ y sus únicos submódulos son $0$ y $M$. Sea $f:M\to N$ un morfismo de $R$-módulos, $f\neq0$. Probar que:
>- **(a)** Si $M$ es simple, entonces $f$ es un monomorfismo.
>- **(b)** Si $N$ es simple, entonces $f$ es un epimorfismo.
>- **(c)** Si $M$ y $N$ son simples, entonces $f$ es un isomorfismo.
>- **(d)** Si $M$ es simple, entonces $\operatorname{End}_R(M)$ es un anillo de división.

>[!exercise] Ejercicio 13
>Sea $f:M\to N$ un morfismo de $R$-módulos. Probar que:
>- **(a)** $f$ es sección si y sólo si $f$ es un monomorfismo e $\operatorname{Im}(f)$ es un sumando directo de $N$.
>- **(b)** $f$ es retracción si y sólo si $f$ es un epimorfismo y $\ker(f)$ es un sumando directo de $M$.

>[!exercise] Ejercicio 14
>- **(a)** Demostrar que en el $\mathbb Z$-módulo cociente $\mathbb Z^{\mathbb N}/\mathbb Z^{(\mathbb N)}$ existe un elemento $x$ tal que para todo $n\in\mathbb N$ existe un $y_n\in\mathbb Z^{\mathbb N}/\mathbb Z^{(\mathbb N)}$ tal que $$x=2^n\cdot y_n.$$
>- **(b)** Demostrar que no existe un conjunto $I$ y un morfismo de $\mathbb Z$-módulos inyectivo $\mathbb Z^{\mathbb N}/\mathbb Z^{(\mathbb N)}\longrightarrow\mathbb Z^I$.

>[!exercise] Ejercicio 15
>Sea $k$ un cuerpo algebraicamente cerrado de característica distinta de $2$ y consideremos el álgebra de coordenadas de la esfera afín $$A=k[x,y,z]/(x^2+y^2+z^2-1).$$
>- **(a)** Sea $p=(a,b,c)\in S^2$ un punto de la esfera, es decir, $a^2+b^2+c^2=1$. Probar que existe una representación de dimensión uno $$\rho_p:A\longrightarrow\operatorname{End}(k)\simeq k,\qquad\rho_p(f)=f(a,b,c).$$ Determinar explícitamente las imágenes de los generadores $x,y,z$.
>- **(b)** Sea $M_p=A/(x-a,y-b,z-c)$. Probar que $M_p$ es un $A$-módulo simple y que $M_p\simeq k$ como espacio vectorial.

## Módulos libres, proyectivos e inyectivos

>[!exercise] Ejercicio 16
>Sea $R$ un anillo de división y sea $V$ un $R$-módulo.
>- **(a)** Probar que $\{x_1,\ldots,x_n\}\subseteq V$ es un conjunto linealmente dependiente si y sólo si existe $k$, con $1\leq k\leq n$, tal que $x_k$ es combinación lineal de los $x_i$ precedentes.
>- **(b)** Probar que si $\operatorname{car}(R)\neq2$ y $n$ es impar, entonces $\{x_1,\ldots,x_n\}\subseteq V$ es linealmente independiente si y sólo si $\{x_1+x_2,x_2+x_3,\ldots,x_n+x_1\}\subseteq V$ es linealmente independiente.
>- **(c)** Probar que si $\{x_1,\ldots,x_n\}\subseteq V$ es linealmente independiente, entonces $\{x_1+x_2,x_2+x_3,\ldots,x_n+x_1\}\subseteq V$ es linealmente independiente si y sólo si la característica de $R$ es distinta de $2$.

>[!exercise] Ejercicio 17
>Sean $R$ un anillo conmutativo con identidad y $M$ un $R$-módulo unitario. Probar que existe un $R$-módulo libre $F$ y un submódulo $K$ de $F$ tal que $F/K\cong M$. Mostrar que si $M$ está generado por $n$ elementos, entonces se puede elegir $F$ finitamente generado.

>[!exercise] Ejercicio 18
>Sean $R,S,T$ cuerpos tales que $R\subset S\subset T$.
>- **(a)** Probar que $\dim_R T=\dim_S T\,\dim_R S$.
>- **(b)** Deducir que no existe un cuerpo $k$, con $\mathbb R\subsetneq k\subsetneq\mathbb C$.

>[!exercise] Ejercicio 19
>Sean $R$ un anillo con identidad, $F$ un módulo libre sobre $R$ y $n\in\mathbb N$. Probar que si $F$ tiene una base de cardinalidad $n$ y otra base de cardinalidad $n+1$, entonces $F$ tiene una base de cardinalidad $m$, para todo $m\in\mathbb N$, con $m\geq n$.

>[!exercise] Ejercicio 20
>Sea $R$ un anillo conmutativo con identidad tal que cada submódulo de cada $R$-módulo libre es libre. Probar que $R$ es DIP.

>[!exercise] Ejercicio 21
>Sea $P$ un $R$-módulo y consideremos el funtor $\operatorname{Hom}(P,-)$ de la categoría de $R$-módulos a la categoría de grupos abelianos.
>- **(a)** Probar que $\operatorname{Hom}(P,-)$ es exacto a izquierda.
>- **(b)** Probar que $\operatorname{Hom}(P,-)$ es exacto (exacto a derecha) si y sólo si $P$ es $R$-proyectivo.

>[!exercise] Ejercicio 22
>Sea $I$ un $R$-módulo y consideremos el funtor $\operatorname{Hom}(-,I)$ de la categoría de $R$-módulos a la categoría de grupos abelianos.
>- **(a)** Probar que $\operatorname{Hom}(-,I)$ es exacto a derecha.
>- **(b)** Probar que $\operatorname{Hom}(-,I)$ es exacto (exacto a izquierda) si y sólo si $I$ es $R$-inyectivo.

>[!exercise] Ejercicio 23
>Sea $M$ un $R$-módulo no nulo finitamente generado. Probar que:
>- **(a)** Si $S$ es un sistema de generadores de $M$, entonces existen $x_1,\ldots,x_n\in S$ tales que $M=\langle x_1,\ldots,x_n\rangle$.
>- **(b)** Todo submódulo propio está contenido en un submódulo maximal.

## Ejercicios adicionales

>[!exercise] Ejercicio 24
>Sea $R$ un DIP, $M$ un $R$-módulo unitario y $p\in R$ elemento primo. Sean $pM:=\{px:x\in M\}$ y $M[p]:=\{x\in M:px=0\}$. Probar que:
>- **(i)** $R/(p)$ es un cuerpo.
>- **(ii)** $pM$ y $M[p]$ son submódulos de $M$.
>- **(iii)** $M/pM$ es un espacio vectorial sobre $R/(p)$ con $(r+(p))\cdot(x+pM)=rx+pM$.
>- **(iv)** $M[p]$ es un espacio vectorial sobre $R/(p)$ con $(r+(p))\cdot x=rx$.

>[!exercise] Ejercicio 25
>Sea $R$ anillo. Decidir si las siguientes afirmaciones son verdaderas o falsas.
>- **(i)** Si $M$ es un $R$-módulo, entonces existe $\operatorname{rg}_R M$.
>- **(ii)** Si $S$ es subanillo de $R$ y existe $\operatorname{rg}_R M$, entonces existe $\operatorname{rg}_S M$ y $\operatorname{rg}_R M\leq\operatorname{rg}_S M$.
>- **(iii)** Si $S$ es subanillo de $R$ y existen $\operatorname{rg}_R M$ y $\operatorname{rg}_S M$, entonces $\operatorname{rg}_R M\leq\operatorname{rg}_S M$.
>- **(iv)** Si $M$ es un $R$-módulo, $N$ es un $R$-submódulo y existe $\operatorname{rg}_R M$, entonces existe $\operatorname{rg}_R N$ y $\operatorname{rg}_R N\leq\operatorname{rg}_R M$.
>- **(v)** Si $M$ es un $R$-módulo, $N$ es un $R$-submódulo y existen $\operatorname{rg}_R M$ y $\operatorname{rg}_R N$, entonces $\operatorname{rg}_R N\leq\operatorname{rg}_R M$.

>[!exercise] Ejercicio 26
>Sean $M,M',M''$ $R$-módulos y consideremos la sucesión $$M\xrightarrow{f}M'\xrightarrow{g}M''\longrightarrow0.$$
>- **(a)** Probar que dicha sucesión es exacta si y sólo si para todo $R$-módulo $N$ la sucesión $$0\longrightarrow\operatorname{Hom}(M'',N)\xrightarrow{g^*}\operatorname{Hom}(M',N)\xrightarrow{f^*}\operatorname{Hom}(M,N)$$ es exacta.
>- **(b)** Deducir que un morfismo $f:M\longrightarrow M'$ es isomorfismo si y sólo si $$f^*:\operatorname{Hom}(M',N)\longrightarrow\operatorname{Hom}(M,N)$$ es un isomorfismo para todo módulo $N$.

>[!exercise] Ejercicio 27
>Sea $M$ un $R$-módulo y sea $S\subseteq M$ un subconjunto. Se define el anulador de $S$ como $\operatorname{Ann}(S):=\{r\in R:rs=0,\ \forall s\in S\}$. Probar que:
>- **(a)** $\operatorname{Ann}(S)$ es un ideal a izquierda de $R$.
>- **(b)** $\operatorname{Ann}(S)=R$ si y sólo si $S\subseteq\{0\}$.
>- **(c)** Si $S\subseteq T$, entonces $\operatorname{Ann}(S)\supseteq\operatorname{Ann}(T)$.

>[!exercise] Ejercicio 28
>Dados $R$ un anillo conmutativo y $M$ un $R$-módulo, el dual de $M$ es el $R$-módulo $M^*:=\operatorname{Hom}_R(M,R)$. Probar que la aplicación $e:M\to(M^*)^*$ definida por $e(x)(f)=f(x)$ es un morfismo de $R$-módulos y que $\ker e=\bigcap_{f\in M^*}\ker f$.

>[!exercise] Ejercicio 29
>Sea $M=\mathbb Z_n$ y consideremos a $M$ como $R$-módulo donde $R=\mathbb Z$ o $R=\mathbb Z_{kn}$ con $k\in\mathbb N$.
>- **(a)** Probar que el dual de $M$ como $\mathbb Z$-módulo es trivial: $\mathbb Z_n^*=0$.
>- **(b)** Probar que como $\mathbb Z_{kn}$-módulos, $\mathbb Z_n^*\cong\mathbb Z_n$.

>[!exercise] Ejercicio 30
>Decir cuáles de las siguientes afirmaciones son verdaderas y cuáles falsas.
>- **(a)** $\mathbb Q$ es libre como $\mathbb Z$-módulo.
>- **(b)** $\mathbb R$ es libre como $\mathbb Q$-módulo.
>- **(c)** La suma directa de dos módulos libres es libre.
>- **(d)** Los submódulos de un módulo libre son libres.
>- **(e)** Los cocientes de un módulo libre son libres.
>- **(f)** Todo módulo cíclico es libre.

>[!exercise] Ejercicio 31
>Sea $R$ anillo. Caracterizar en cada caso el cociente $M/N$.
>- **(a)** $M=R^n$ y $N=\{(r_1,\ldots,r_n)\in M:r_1+\cdots+r_n=0\}$.
>- **(b)** $M=R[x]$ y $N=\{p\in M:p(1)=0\}$.
>- **(c)** $M=M_n(R)$ y $N=\{X\in M:x_{ii}=0\ \forall\,1\leq i\leq n\}$.
>- **(d)** $M=L^I$, donde $L$ es un $R$-módulo, y $N=\{x\in M:x_i=0\ \forall i\in J\}$ donde $J\subseteq I$ es un subconjunto.
