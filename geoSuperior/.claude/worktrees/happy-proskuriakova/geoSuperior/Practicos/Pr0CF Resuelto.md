# Soluciones de `Pr0CF.pdf`

>[!Exercise]
>Sea $f:\mathbb R^2\to\mathbb R^2$ definida por $f(u,v)=\bigl(u^2e^{2v},\,u+v^2\bigr).$ Calcular $\frac{\partial f}{\partial v}$ y $(df)_{(3,0)}$. Escribir la aproximación afín de $f$ en $(3,0)$ y usarla para aproximar $f(3.1,0.2)$.
>>[!Proof]-
>>Las derivadas parciales son $$\frac{\partial f}{\partial u}(u,v)=\bigl(2ue^{2v},\,1\bigr),\qquad \frac{\partial f}{\partial v}(u,v)=\bigl(2u^2e^{2v},\,2v\bigr).$$
>>En particular, $$\frac{\partial f}{\partial v}(u,v)=\bigl(2u^2e^{2v},\,2v\bigr).$$
>>La diferencial en $(3,0)$ tiene matriz jacobiana $$J_f(3,0)=\begin{pmatrix}6 & 18\\ 1 & 0\end{pmatrix}.$$
>>Por lo tanto $$(df)_{(3,0)}(h,k)=\bigl(6h+18k,\;h\bigr).$$
>>Como $$f(3,0)=(9,3),$$ la aproximación afín en $(3,0)$ es $$L(u,v)=f(3,0)+(df)_{(3,0)}(u-3,v)=\bigl(9+6(u-3)+18v,\;3+(u-3)\bigr).$$
>>Equivalente: $$L(u,v)=\bigl(6u+18v-9,\;u\bigr).$$
>>Entonces $$f(3.1,0.2)\approx L(3.1,0.2)=\bigl(13.2,\;3.1\bigr).$$

>[!Exercise]
>- Sea $u_0\in\mathbb R^m$ y $g:\mathbb R^n\to\mathbb R^m$ definida por $g(p)=u_0$. Mostrar que $(dg)_p$ es la transformación lineal nula.
>- Sea $f:\mathbb R^n\to\mathbb R^m$ una transformación lineal. Mostrar que $(df)_p=f$ para todo $p\in\mathbb R^n$.
>>[!Proof]-
>>**2.a** Si $g:\mathbb R^n\to\mathbb R^m$ está dada por $g(p)=u_0$, entonces $$g(p+h)-g(p)=0.$$ Luego la mejor aproximación lineal es la transformación nula, y por tanto $$(dg)_p=0$$ para todo $p\in\mathbb R^n$.
>>
>>**2.b** Si $f:\mathbb R^n\to\mathbb R^m$ es lineal, entonces $$f(p+h)-f(p)=f(h).$$ No hay término de error. Por definición de diferencial, $$(df)_p=f$$ para todo $p\in\mathbb R^n$.

>[!Exercise]
>Mostrar que si $f:\mathbb R^n\to\mathbb R^m$ es una función diferenciable, entonces $$(df)_p(v)=\frac{d}{dt}\Big|_{t=0}f(\alpha(t))$$ para cualquier curva $\alpha$ con $\alpha(0)=p$ y $\alpha'(0)=v$.
>>[!Proof]-
>>Sea $\alpha:(-\varepsilon,\varepsilon)\to\mathbb R^n$ una curva con $\alpha(0)=p$ y $\alpha'(0)=v$. Aplicamos la regla de la cadena a $$f\circ\alpha:(-\varepsilon,\varepsilon)\to\mathbb R^m.$$ Entonces $$\frac{d}{dt}\Big|_{t=0}f(\alpha(t))=(df)_p\bigl((d\alpha)_0(1)\bigr).$$
>>Ahora bien, como $\alpha$ es una curva, su diferencial en $0$ es la aplicación lineal $$(d\alpha)_0:\mathbb R\to\mathbb R^n,\qquad (d\alpha)_0(t)=t\,\alpha'(0).$$ En particular, $$(d\alpha)_0(1)=\alpha'(0)=v.$$
>>Sustituyendo en la igualdad anterior, obtenemos $$\frac{d}{dt}\Big|_{t=0}f(\alpha(t))=(df)_p(v).$$
>>Esto prueba la igualdad pedida: $$(df)_p(v)=\frac{d}{dt}\Big|_{t=0}f(\alpha(t)).$$

>[!Exercise]
>- Sean $\det:\mathbb R^{n\times n}\to\mathbb R$ y $\operatorname{tr}:\mathbb R^{n\times n}\to\mathbb R$ las funciones determinante y traza, respectivamente. Mostrar que $$(d\det)_X(Y)=\langle\operatorname{cof}(X),Y\rangle=\operatorname{tr}(\operatorname{cof}(X)^tY)=\operatorname{tr}(\operatorname{adj}(X)Y),$$ donde $\operatorname{cof}(X)$ es la matriz de cofactores de $X$ y $\operatorname{adj}(X)$ es la matriz adjunta de $X$.
>- Sea $X$ una matriz $n\times n$ con coeficientes reales. Mostrar que $(d\det)_X$ es la transformación lineal nula si y solo si su rango es menor o igual que $n-2$.
>**Ayuda.** Usar la expansión de Laplace del determinante.
>>[!Proof]-
>>- **4.a** 
>>	1. Escribiendo $X=(x_{ij})$ y $Y=(y_{ij})$, por multilinealidad del determinante en las columnas: $$\det(X+tY)=\det(X)+t\sum_{j=1}^n \det(X_1,\dots,Y_j,\dots,X_n)+o(t).$$
>>	2. Recordamos que por expanision de Laplace tenemos $$\det(A)=\sum^{n}_{i=1} a_{ij}C_{ij}(A)$$
>>	3. Luego $$\det(X+tY)=\det(X)+t\sum_{i,j} C_{ij}(X)y_{ij}+o(t)$$ donde $C_{ij}(X)$ es el cofactor $(i,j)$
>>	4. Y usando la misma idea que el [[Pr0CF Resuelto#^527a68]] llegamos a que $$(d\det)_X(Y) = \sum_{i,j} C_{ij}(X)y_{ij}.$$
>>	5. Esta suma coincide con el producto interno $\langle \operatorname{cof}(X), Y \rangle$.
>>	6. Y ademas usando que $\langle A, B \rangle = \operatorname{tr}(A^t B)$ y que $\operatorname{adj}(X) = \operatorname{cof}(X)^t$, concluimos: $$(d\det)_X(Y) =\langle\operatorname{cof}(X),Y\rangle=\operatorname{tr}(\operatorname{cof}(X)^{t}Y)=  \operatorname{tr}(\operatorname{adj}(X) Y).$$
>>- **4.b**
>>	1. $(d\det)_X$ es nula si y solo si todos los cofactores de $X$ son cero. 
>>	2. Eso ocurre si y solo si todos los menores de orden $n-1$ son cero, es decir, si y solo si $$\operatorname{rg}(X)\le n-2.$$

>[!Exercise]
>Mostrar que $$(d\det)_{\operatorname{id}}(Y)=\operatorname{tr}(Y)$$ para toda matriz $Y$ de orden $n\times n$ y deducir que para toda matriz invertible $X$ se tiene $$(d\det)_X(Y)=\det(X)\operatorname{tr}(X^{-1}Y).$$
>>[!Proof]-
>>1. Tomamos la curva $\alpha(t) = \operatorname{id} + tY$. Notamos que $\alpha(0) = \operatorname{id}$ y $\alpha'(0) = Y$
>>2. Por el Ejercicio 3, la diferencial es la derivada direccional a lo largo de esta curva: $$(d\det)_{\operatorname{id}}(Y) = (d\det)_{\alpha(0)}(\alpha'(0)) = \frac{d}{dt}\Big|_{t=0} \det(\alpha(t)) = \frac{d}{dt}\Big|_{t=0} \det(\operatorname{id} + tY).$$
>>- **Caso $\dim = 2$:**
>>	1. Usando que el determinante es multilineal por columnas: $$\begin{aligned}\det(\operatorname{id} + tY) &= \det(e_1 + tY_1, e_2 + tY_2) \\&= \det(e_1, e_2 + tY_2) + \det(tY_1, e_2 + tY_2) \\&= \det(e_1, e_2) + \det(e_1, tY_2) + \det(tY_1, e_2) + \det(tY_1, tY_2) \\&= 1 + t\det(e_1, Y_2) + t\det(Y_1, e_2) + t^2 \det(Y) \\&= 1 + t(Y_{22} + Y_{11}) + t^2 \det(Y) = 1 + t \operatorname{tr}(Y) + t^2 \det(Y).\end{aligned}$$
>>- **Caso $\dim = n$:**
>>	1. Por el mismo argumento de multilinealidad, al expandir $\det(e_1 + tY_1, \dots, e_n + tY_n)$, el término constante es $\det(\operatorname{id})=1$. 
>>	2. Los términos en $t$ surgen de elegir exactamente una columna $tY_i$ y el resto $e_j$: $$\det(\operatorname{id} + tY) = 1 + t \sum_{i=1}^n \det(e_1, \dots, Y_i, \dots, e_n) + P(t)$$ donde $P(t)$ contiene términos con potencias de $t$ mayores o iguales a 2 (donde se eligen al menos dos columnas de $tY$). 
>>	3. Como $\det(e_1, \dots, Y_i, \dots, e_n) = Y_{ii}$, tenemos: $$\det(\operatorname{id} + tY) = 1 + t \sum_{i=1}^n Y_{ii} + P(t), \quad \text{con } \operatorname{gr}(P) \ge 2.$$
>>	4. Derivando respecto a $t$ en $t=0$: $$(d\det)_{\operatorname{id}}(Y) = \frac{d}{dt}\Big|_{t=0} \left( 1 + t \operatorname{tr}(Y) + P(t) \right) = \operatorname{tr}(Y).$$
>>- **Para $X$ invertible:**
>>	1. Queremos calcular $(d\det)_X(Y) = \frac{d}{dt}\Big|_{t=0} \det(X + tY)$.
>>	2. Si $X$ es invertible, podemos escribir $X + tY = X(\operatorname{id} + tX^{-1}Y)$. 
>>	3. Luego: $$\det(X + tY) = \det(X) \det(\operatorname{id} + tX^{-1}Y).$$
>>	4. Derivando en $t=0$ y usando el resultado anterior para $Y' = X^{-1}Y$: $$\begin{aligned}(d\det)_X(Y) &= \frac{d}{dt}\Big|_{t=0} \left( \det(X) \det(\operatorname{id} + tX^{-1}Y) \right) \\&= \det(X) \cdot (d\det)_{\operatorname{id}}(X^{-1}Y) \\&= \det(X) \operatorname{tr}(X^{-1}Y).\end{aligned}$$

^527a68

>[!Exercise]
>Sea $( -\varepsilon,\varepsilon)\subset\mathbb R$ un intervalo abierto. Sean $$A:(-\varepsilon,\varepsilon)\to L^1(\mathbb R^n;\mathbb R^m)$$ una curva suave de transformaciones lineales de $\mathbb R^n$ en $\mathbb R^m$ y $\alpha:(-\varepsilon,\varepsilon)\to\mathbb R^n$ una curva suave. 
>Definir $$\beta:(-\varepsilon,\varepsilon)\to\mathbb R^m,\qquad \beta(t)=A(t)(\alpha(t)).$$
>Probar que $\beta$ es suave y que para todo $t\in(-\varepsilon,\varepsilon)$ se cumple $$\beta'(t)=A'(t)(\alpha(t))+A(t)(\alpha'(t)).$$
>>[!Proof]-
>>1. Sea $$\beta(t)=A(t)(\alpha(t)).$$si $A(t)=(a_{ij}(t))$ y $\alpha(t)=(\alpha_1(t),\dots,\alpha_n(t))$, entonces la componente $i$-ésima de $\beta$ es $$\beta_i(t)=\sum_{j=1}^n a_{ij}(t)\alpha_j(t).$$
>>2. Como suma y producto de funciones suaves son suaves, $\beta$ es suave.
>>3. Derivando componente a componente: $$\beta_i'(t)=\sum_{j=1}^n a_{ij}'(t)\alpha_j(t)+\sum_{j=1}^n a_{ij}(t)\alpha_j'(t).$$
>>4. Eso es exactamente $$\beta'(t)=A'(t)(\alpha(t))+A(t)(\alpha'(t)).$$
