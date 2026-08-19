---
dateCreated: 2026-08-14
tags:
  - AlgebraicStructures
  - Groups
source: "[[2da clase.pdf]]"
---
## 6. Orden de un elemento y teorema de Lagrange

>[!Definition] Orden de un grupo y de un elemento
>La cardinalidad de un grupo $G$ se llama su **orden** y se denota $|G|$.
>Sea $g\in G$. Si existe algún entero positivo $m$ tal que $g^m=e$, el **orden de $g$** es $$|g|=\min\{m\in\mathbb N_{>0}:g^m=e\}.$$
>Si no existe tal entero, se dice que $g$ tiene orden infinito. Además, $$|g|=|\langle g\rangle|.$$

>[!Theorem] Teorema de Lagrange
>Si $G$ es finito y $H\leq G$, entonces $$|H|\mid|G|$$ y, más precisamente, $$|G|=[G:H]|H|,$$ donde $[G:H]$ es el número de clases laterales de $H$ en $G$. ^teorema-de-lagrange
>>[!Proof]-
>>Las clases laterales izquierdas de $H$ forman una partición de $G$. Para cada $g\in G$, la aplicación $H\to gH$ dada por $h\mapsto gh$ es biyectiva, así que toda clase lateral tiene $|H|$ elementos. Si existen $[G:H]$ clases, al sumar sus cardinalidades se obtiene $|G|=[G:H]|H|$.

>[!Corollary] Consecuencias inmediatas
>Si $G$ es finito y $g\in G$, entonces $$|g|\bigg||G|$$ y $$g^{|G|}=e.$$
>Si $|G|=p$ es primo, entonces todo $g\neq e$ tiene orden $p$, de modo que $G=\langle g\rangle\cong\mathbb Z_p$.

>[!Proposition]
>Si $[G:H]=|I|$ y $H=\{ 1 \}$ entonces $|I|=|G|$  