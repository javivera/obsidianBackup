---
dateCreated: 2026-09-02
tags:
  - AlgebraicStructures
  - Groups
  - SylowTheorems
source: "[[EA-Teorico-5-2sept.pdf]]"
---

# Teórico 6 — Teoremas de Sylow

## Construcciones de grupos (ejercicios 30 y 31)

>[!remark]
>La pregunta de esos ejercicios es: ¿cómo se reconstruye $G$ sabiendo $G/N$ y $N$? Aparece un producto semidirecto $G\cong N\rtimes_\alpha H$ donde $\alpha$ es una acción y, en general, un $2$-cociclo $\sigma$. La idea es ver las construcciones de grupos.
>Concretamente, $\sigma\colon G/N\times G/N\to N$ y $\sigma\in H^2(G/N,N)$. Cuando $\sigma=1$, se obtiene el [[Teorico 3#5. Producto semidirecto|producto semidirecto]].

## Preparación para Sylow

>[!remark] Analogía
>Así como $\mathbb Z_n\cong\prod_i\mathbb Z_{p_i^{\alpha_i}}$ cuando $n=\prod_i p_i^{\alpha_i}$ (cada factor cíclico de orden $p_i^{\alpha_i}$), Sylow descompone la aritmética de $|G|$ en sus potencias primas, ahora sin pedir abelianidad.

>[!lemma] Coeficiente binomial libre de $p$
>Sea $p\in\mathbb N$ primo y $n\in\mathbb N$ con $(p,n)=1$. Entonces $$p\nmid\binom{np^a}{p^a}$$ para todo $a\in\mathbb N_{\geq 0}$.
>
>>[!Proof]- Demostración (ejercicio de la clase)
>>1. Si $a=0$, entonces $\binom{n}{1}=n$ y $p\nmid n$ por hipótesis.
>>2. Sea $a\geq 1$. Basta ver que la valuación $p$-ádica de $\binom{np^a}{p^a}$ es cero. Escribimos $$\binom{np^a}{p^a}=\frac{(np^a)(np^a-1)\cdots(np^a-p^a+1)}{p^a!}.$$
>>3. El factor $np^a$ del numerador aporta exactamente $v_p(n)+a=a$, porque $p\nmid n$. El factor $p^a$ del denominador aporta $a$. Resta comparar, para cada $1\leq j\leq p^a-1$, los factores $np^a-j$ y $j$.
>>4. Como $1\leq j<p^a$, se tiene $v_p(j)<a$, y por lo tanto $v_p(np^a-j)=v_p(j)$: restar $j$ no cambia los primeros $a$ dígitos $p$-ádicos de $np^a$. Así, los factores $1,\ldots,p^a-1$ del numerador cancelan exactamente $p^a!/p^a$ en el denominador.
>>5. Queda $v_p\bigl(\binom{np^a}{p^a}\bigr)=0$, es decir $p\nmid\binom{np^a}{p^a}$.

>[!definition] Normalizador
>Sea $G$ un grupo y $H\leq G$. El **normalizador** de $H$ en $G$ es $$N_G(H)=\{g\in G:gHg^{-1}=H\}.$$ Es un subgrupo de $G$. Además $H\leq N_G(H)$ y $H\trianglelefteq N_G(H)$. (Ya apareció como estabilizador de la acción por conjugación sobre subgrupos: [[Teorico 5#^02c559]].)

>[!lemma] Congruencia del índice del normalizador
>Sea $G$ un grupo finito, $H\leq G$ y $|H|=p^a$ con $p$ primo. Entonces $$[N_G(H):H]\equiv[G:H]\pmod{p}.$$
>
>>[!Proof]-
>>1. Sea $S=G/H$ el conjunto de clases laterales izquierdas. El subgrupo $H$ actúa sobre $S$ por traslación: $$h\cdot(gH)=(hg)H.$$
>>2. $H$ es un $p$-grupo, así que el [[Teorico 5#^e8cda5|lema de puntos fijos de un $p$-grupo]] da $$|S|\equiv|S^H|\pmod{p},$$ donde $S^H=\{s\in S:h\cdot s=s\text{ para todo }h\in H\}$.
>>3. Sea $gH\in S^H$. Entonces $hgH=gH$ para todo $h\in H$, es decir $g^{-1}hg\in H$ para todo $h\in H$. Equivalentemente $g^{-1}Hg\subseteq H$. Como ambos tienen el mismo cardinal, $g^{-1}Hg=H$, o sea $g\in N_G(H)$.
>>4. Recíprocamente, si $g\in N_G(H)$ entonces $g^{-1}Hg=H$, luego $hgH=gH$ para todo $h\in H$ y $gH\in S^H$.
>>5. Por lo tanto $S^H$ es el conjunto de clases $gH$ con $g\in N_G(H)$, es decir $S^H=N_G(H)/H$. Luego $|S^H|=[N_G(H):H]$ y $|S|=[G:H]$, y la congruencia del paso 2 es la enunciada.

>[!corollary]
>Sea $H\leq G$ con $|H|=p^a$, $p$ primo, y supongamos $p\mid[G:H]$. Entonces $N_G(H)\neq H$.
>
>>[!Proof]-
>>Por el lema, $[N_G(H):H]\equiv[G:H]\equiv 0\pmod{p}$. En particular $[N_G(H):H]\neq 1$, así que $H\subsetneq N_G(H)$.

## Los tres teoremas de Sylow

>[!theorem] Teoremas de Sylow
>Sea $G$ un grupo finito, $p\in\mathbb N$ primo y $$|G|=p^nk,\qquad (p,k)=1,\quad k\geq 1.$$
>- (a)  $G$ posee al menos un subgrupo de orden $p^n$. A tales subgrupos se los llama **$p$-subgrupos de Sylow**.
>- (b) Dos $p$-subgrupos de Sylow son conjugados.
>- (c) Si $n_p$ denota la cantidad de $p$-subgrupos de Sylow de $G$, entonces $n_p\equiv 1\pmod{p}$ y $n_p\mid k$.
>
>>[!Proof]- 
>>- (a)
>>	1. Sea $X=\{A\subseteq G:|A|=p^n\}$ el conjunto de **subconjuntos** (no necesariamente subgrupos) de $G$ con $p^n$ elementos. Entonces $$|X|=\binom{|G|}{p^n}=\binom{p^nk}{p^n}.$$ Por el lema del coeficiente binomial, $p\nmid|X|$.
>>	2. $G$ actúa sobre $X$ por traslación a izquierda: si $A\subseteq G$ y $g\in G$, $$g\cdot A=gA=\{ga:a\in A\}.$$ La aplicación $A\mapsto gA$ es biyectiva sobre $X$ (inversa $A\mapsto g^{-1}A$) y conserva el cardinal, así que la acción está bien definida.
>>	3. Como $p\nmid|X|$, no todas las órbitas pueden tener cardinal divisible por $p$. Existe entonces $A\in X$ tal que $p\nmid|O_A|$.
>>	4. Por [[Teorico 5#^674eaa|órbita-estabilizador]], $|O_A|=[G:G_A]=|G|/|G_A|=p^nk/|G_A|$. Que $p$ no divida este índice fuerza $p^n\mid|G_A|$.
>>	5. Fijemos $a\in A$. La evaluación $G_A\to A$, $g\mapsto ga$, aterriza en $A$ porque $G_A\cdot a\subseteq A$. Es inyectiva: $ga=ha$ implica $g=h$, pues la multiplicación a izquierda en $G$ es libre. Por lo tanto $|G_A|\leq|A|=p^n$.
>>	6. Junto con $p^n\mid|G_A|$ se obtiene $|G_A|=p^n$. El estabilizador $G_A$ es un subgrupo, luego es un $p$-subgrupo de Sylow.
>>- (b)
>>	1. Sean $H,\widetilde H\leq G$ dos $p$-subgrupos de Sylow. Hacemos actuar $\widetilde H$ sobre $G/H$ por traslación: para $h\in\widetilde H$, $$h\cdot(gH)=hgH.$$
>>	2. $\widetilde H$ es un $p$-grupo, así que el lema de puntos fijos da $$[G:H]\equiv\bigl|(G/H)^{\widetilde H}\bigr|\pmod{p}.$$ Aquí $[G:H]=k\not\equiv 0\pmod{p}$, luego $(G/H)^{\widetilde H}\neq\varnothing$. Tomemos $xH$ fijo.
>>	3. Que $xH$ sea invariante significa: para todo $h\in\widetilde H$, $hxH=xH$, es decir $x^{-1}hx\in H$. Como vale para todo $h\in\widetilde H$, se tiene $x^{-1}\widetilde Hx\subseteq H$.
>>	4. Como $|H|=|\widetilde H|=p^n$, la inclusión es igualdad: $x^{-1}\widetilde Hx=H$. Así $H$ y $\widetilde H$ son conjugados.
>>- (c)
>>	1. Sea $Y=\{H\leq G:H\text{ es un }p\text{-subgrupo de Sylow}\}$. Fijemos $P\in Y$ y hagamos actuar $P$ sobre $Y$ por conjugación: para $g\in P$ y $H\in Y$, $$g\cdot H=gHg^{-1}.$$
>>	2. $P$ es un $p$-grupo, así que $|Y|\equiv|Y^P|\pmod{p}$, donde $Y^P=\{H\in Y:gHg^{-1}=H\text{ para todo }g\in P\}$. Basta ver que $|Y^P|=1$.
>>	3. Sea $H\in Y^P$. Entonces $gHg^{-1}=H$ para todo $g\in P$, es decir $P\subseteq N_G(H)$. Tanto $H$ como $P$ son subgrupos de $N_G(H)$ de orden $p^n$. Como $|N_G(H)|$ divide a $|G|=p^nk$, ambos son $p$-subgrupos de Sylow de $N_G(H)$. Además $H\trianglelefteq N_G(H)$.
>>	4. Por (2) aplicado en $N_G(H)$, $P$ y $H$ son conjugados en $N_G(H)$. Pero $H$ es normal ahí, así que su única conjugada es él mismo: $P=H$. (Si un Sylow es normal, es el único: todas las conjugadas coinciden con él.)
>>	5. Por lo tanto $Y^P=\{P\}$ y $|Y^P|=1$. Luego $n_p=|Y|\equiv 1\pmod{p}$.

^sylow

>[!remark] ¿Por qué funciona el lema de puntos fijos aquí?
>En el fondo se usa [[Teorico 5#^674eaa|órbita-estabilizador]]: $O_x\cong G/G_x$. Las órbitas de un $p$-grupo tienen tamaño $1$ o múltiplo de $p$, y las de tamaño $1$ son exactamente los puntos fijos.

>[!exercise] Completar (3): $n_p\mid k$
>Sea $G$ un grupo finito con $|G|=p^nk$, $(p,k)=1$, y sea $$Y=\{H\leq G:H\text{ es un }p\text{-subgrupo de Sylow}\}.$$ Verificar que $|Y|\mid k$.
>
>>[!Proof]-
>>1. $G$ actúa sobre $Y$ por conjugación. Por (2) la acción es transitiva.
>>2. El estabilizador de $P\in Y$ es $N_G(P)$. Por órbita-estabilizador, $$n_p=|Y|=[G:N_G(P)].$$
>>3. Como $P\leq N_G(P)\leq G$, el índice $[G:N_G(P)]$ divide a $[G:P]=k$. Luego $n_p\mid k$.
