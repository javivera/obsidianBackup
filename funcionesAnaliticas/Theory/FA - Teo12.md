# Teo 12 — Cálculo de residuos e integrales reales (15/10/2026)

> [!remark] Fuente y criterio de transcripción
> Transcripción de las 11 fotos numeradas compartidas el 16/10/2026 en el grupo de Analíticas del WhatsApp personal. La primera hoja está fechada 15/10. Se conserva el desarrollo de la clase, se completan operaciones intermedias y se corrigen erratas de factores, signos e hipótesis. Los detalles añadidos y las correcciones conceptuales se señalan expresamente.

## 1. Recordatorio: residuos

Por [[FA - Teo11#^a11d01|residuo]] y [[FA - Teo11#^a11f01|desarrollo de Laurent]], si $f(z)=\sum_{n=-\infty}^{\infty}a_n(z-a)^n$ cerca de una singularidad aislada $a$, entonces $$\operatorname{Res}(f,a)=a_{-1}=\frac1{2\pi i}\int_{\gamma_r}f(z)\,dz,$$ donde $\gamma_r$ es una circunferencia positiva pequeña centrada en $a$.

Por [[FA - Teo11#^a11f03|teorema de los residuos]], si $f$ es analítica en una región $G$ salvo en $a_1,\ldots,a_m$, y $\gamma$ es cerrada, rectificable, evita esos puntos y satisface $\gamma\simeq_G0$, entonces $$\frac1{2\pi i}\int_\gamma f(z)\,dz=\sum_{k=1}^{m}n(\gamma,a_k)\operatorname{Res}(f,a_k).$$

### Infinitas singularidades aisladas

>[!Remark] La suma sigue siendo finita
>La fórmula también vale cuando el conjunto $S\subset G$ de singularidades es infinito, siempre que no tenga puntos de acumulación en $G$ y que $\gamma$ no lo interseque. Solo finitas singularidades tienen índice no nulo respecto de $\gamma$.

>[!exercise] Justificación topológica y de compacidad
>Escribimos $|\gamma|$ para la traza de la curva y definimos $$H=\{z\in\mathbb C\setminus|\gamma|:n(\gamma,z)=0\},\qquad K=|\gamma|\cup\{z\in\mathbb C\setminus|\gamma|:n(\gamma,z)\neq0\}.$$
>- **(a)** Si $\partial G\neq\varnothing$ y $r=d(|\gamma|,\partial G)>0$, probar que $\{z:d(z,\partial G)<r/2\}\subset H$.
>- **(b)** Probar que $S$ no puede tener puntos de acumulación en $G$.
>- **(c)** Probar que $K$ es un compacto contenido en $G$ y deducir que $S\cap K$ es finito.
>
>>[!Proof]- Detalles añadidos al ejercicio de clase
>>- (a)
>>	1. Por [[FA - Teo8#^8a0013|índice de homotopía a cero]], el índice se anula fuera de $G$, en particular sobre $\partial G$.
>>	2. Si $d(z,\partial G)<r/2$, elegimos $w\in\partial G$ con $|z-w|<r/2$. El segmento de $w$ a $z$ está en $B(w,r/2)$, que no intersecta $|\gamma|$, pues $d(w,|\gamma|)\geq r$. Por constancia local del índice en el complemento de la traza, $n(\gamma,z)=n(\gamma,w)=0$.
>>- (b)
>>	1. Si un punto de acumulación $a$ de $S$ perteneciera a $G\setminus S$, la analiticidad de $f$ en un entorno de $a$ impediría la presencia de singularidades arbitrariamente próximas.
>>	2. Si $a\in S$, existiría un entorno perforado de $a$ donde $f$ es analítica, por ser $a$ aislada. Tampoco podría ser punto de acumulación de otras singularidades.
>>- (c)
>>	1. El conjunto $H$ es abierto, porque el índice es localmente constante fuera de $|\gamma|$. Por tanto, $K=\mathbb C\setminus H$ es cerrado. Además, por [[FA - Teo6#^c6a183|índice en la componente no acotada]], el índice es cero fuera de un disco suficientemente grande que contiene la traza; así, $K$ es acotado y, por consiguiente, compacto.
>>	2. La traza está contenida en $G$ y, por [[FA - Teo8#^8a0013|índice de homotopía a cero]], todo punto exterior a $G$ tiene índice cero. Luego $K\subset G$.
>>	3. Si $S\cap K$ fuera infinito, tendría un punto de acumulación en $K\subset G$, contradiciendo (b). Por tanto, solo finitos términos $n(\gamma,a)\operatorname{Res}(f,a)$ pueden ser no nulos.

> [!warning] Precisiones sobre las fotos 1–2
> El argumento de compacidad debe aplicarse a $K$, no a todo el conjunto $\{z\in G:d(z,\partial G)\geq r/2\}$, que puede ser no acotado. La suma de la foto 2 también requiere el factor $2\pi i$: $$\int_\gamma f(z)\,dz=2\pi i\sum_{a\in S}n(\gamma,a)\operatorname{Res}(f,a).$$ La suma tiene solo finitos términos no nulos. El caso $G=\mathbb C$ se trata directamente mediante $K$, sin usar distancia a una frontera vacía.

## 2. Cálculo del residuo en un polo

>[!Proposition] Polo de orden $m$
>Supongamos que $a$ es un polo de orden $m$ de $f$. Sea $h$ la extensión analítica de $(z-a)^m f(z)$ a un entorno de $a$. Entonces $$\boxed{\operatorname{Res}(f,a)=\frac{h^{(m-1)}(a)}{(m-1)!}.}$$
>
>>[!Proof]- Demostración
>>1. Por [[FA - Teo11#^a11c01|clasificación por Laurent]], $$f(z)=\frac{a_{-m}}{(z-a)^m}+\cdots+\frac{a_{-1}}{z-a}+\sum_{n=0}^{\infty}a_n(z-a)^n,\qquad a_{-m}\neq0.$$
>>2. Multiplicando por $(z-a)^m$ y extendiendo al centro, $$h(z)=a_{-m}+a_{-m+1}(z-a)+\cdots+a_{-1}(z-a)^{m-1}+\sum_{n=0}^{\infty}a_n(z-a)^{n+m}.$$
>>3. Por [[FA - Teo2#^6fedda|desarrollo de Taylor]], el coeficiente de $(z-a)^{m-1}$ en esta serie es $h^{(m-1)}(a)/(m-1)!$. Por [[FA - Teo11#^a11d01|residuo]], ese mismo coeficiente es $a_{-1}=\operatorname{Res}(f,a)$.

^a12b01

### Polo simple

>[!corollary] Fórmula del límite
>Si $a$ es un polo simple, $$\boxed{\operatorname{Res}(f,a)=\lim_{z\to a}(z-a)f(z).}$$
>
>>[!Proof]- Demostración
>>1. Aplicamos [[FA - Teo12#^a12b01|residuo en un polo]] con $m=1$: $\operatorname{Res}(f,a)=h(a)$.
>>2. Por continuidad de la extensión, $h(a)=\lim_{z\to a}(z-a)f(z)$.

^a12c01

### Cociente con cero simple en el denominador

>[!Proposition] Fórmula $p(a)/q'(a)$
>Sean $p,q$ analíticas cerca de $a$; en particular, pueden ser polinomios. Si $q(a)=0$ y $q'(a)\neq0$, entonces $$\boxed{\operatorname{Res}\left(\frac pq,a\right)=\frac{p(a)}{q'(a)}.}$$ Si $p(a)\neq0$, $a$ es un polo simple; si $p(a)=0$, la singularidad es evitable y el residuo es cero.
>
>>[!Proof]- Demostración
>>1. Para $z\neq a$ suficientemente próximo a $a$, $$ (z-a)\frac{p(z)}{q(z)}=\frac{p(z)}{\frac{q(z)-q(a)}{z-a}}\xrightarrow[z\to a]{}\frac{p(a)}{q'(a)}.$$
>>2. Si $p(a)\neq0$, concluimos por [[FA - Teo12#^a12c01|fórmula del límite]]. Si $p(a)=0$, factorizamos $p(z)=(z-a)p_1(z)$ y $q(z)=(z-a)q_1(z)$, con $q_1(a)=q'(a)\neq0$; el cociente se extiende analíticamente y su residuo es cero por [[FA - Teo11#^a11c01|clasificación por Laurent]].

^a12b02

> [!remark] Hipótesis precisada
> En la foto 3 se afirma que un cero simple del denominador siempre produce un polo simple. Hace falta que el numerador no se anule allí; la fórmula del residuo sigue siendo válida si hay cancelación.

## 3. Integral impropia y valor principal

>[!Definition] Valor principal de Cauchy en el infinito
>Para una función localmente integrable en $\mathbb R$, definimos, cuando existe, $$\operatorname{VP}\int_{-\infty}^{\infty}f(x)\,dx=\lim_{R\to\infty}\int_{-R}^{R}f(x)\,dx.$$

La integral impropia usual exige la convergencia separada de las dos colas: $$\int_{-\infty}^{\infty}f(x)\,dx=\int_{-\infty}^{0}f(x)\,dx+\int_0^{\infty}f(x)\,dx.$$

Si existe la integral impropia, coincide con el valor principal. La recíproca no vale: por ejemplo, $f(x)=x$ tiene valor principal cero, pero sus dos integrales impropias divergen.

## 4. Ejemplo: $\displaystyle\int_{-\infty}^{\infty}\frac{x^2}{1+x^4}\,dx$

>[!exercise] Integral racional
>Calcular $$\int_{-\infty}^{\infty}\frac{x^2}{1+x^4}\,dx.$$
>
>>[!Proof]- Cálculo mediante residuos
>>1. **Convergencia — detalle añadido.** La función es continua en $\mathbb R$ y, para $|x|\geq1$, $$0\leq\frac{x^2}{1+x^4}\leq\frac1{x^2}.$$ Las dos colas convergen absolutamente, por lo que podemos identificar la integral impropia con su valor principal.
>>2. **Polos.** Consideramos $f(z)=z^2/(1+z^4)$. Las raíces del denominador son $$a_1=e^{i\pi/4},\quad a_2=e^{3i\pi/4},\quad a_3=e^{5i\pi/4},\quad a_4=e^{7i\pi/4}.$$ Son polos simples porque $4a_k^3\neq0$ y $a_k^2\neq0$.
>>3. **Contorno.** Para $R>1$, tomamos el segmento real de $-R$ a $R$ y el arco superior $\gamma_R(t)=Re^{it}$, $0\leq t\leq\pi$, recorrido de $R$ a $-R$. La concatenación $\Gamma_R=[-R,R]+\gamma_R$ es positiva. Sus índices en $a_1,a_2$ son $1$ y en $a_3,a_4$ son $0$.
>>4. **Residuos.** Por [[FA - Teo12#^a12b02|cociente con cero simple]], $$\operatorname{Res}(f,a_k)=\frac{a_k^2}{4a_k^3}=\frac1{4a_k}.$$ En particular, $$\begin{aligned}\operatorname{Res}(f,a_1)+\operatorname{Res}(f,a_2)&=\frac14\left(e^{-i\pi/4}+e^{-3i\pi/4}\right)\\&=\frac14\left(\frac{1-i}{\sqrt2}+\frac{-1-i}{\sqrt2}\right)\\&=-\frac{i}{2\sqrt2}.\end{aligned}$$
>>5. Por [[FA - Teo11#^a11f03|teorema de los residuos]], $$\int_{\Gamma_R}f(z)\,dz=2\pi i\left(-\frac{i}{2\sqrt2}\right)=\frac{\pi}{\sqrt2}.$$ Separando los recorridos, $$\frac{\pi}{\sqrt2}=\int_{-R}^{R}\frac{x^2}{1+x^4}\,dx+\int_{\gamma_R}\frac{z^2}{1+z^4}\,dz.\qquad (1)$$
>>6. **Estimación del arco.** Como $|1+R^4e^{4it}|\geq R^4-1$, $$\begin{aligned}\left|\int_{\gamma_R}\frac{z^2}{1+z^4}\,dz\right|&=\left|\int_0^\pi\frac{R^2e^{2it}}{1+R^4e^{4it}}\,iRe^{it}\,dt\right|\\&\leq R^3\int_0^\pi\frac{dt}{|1+R^4e^{4it}|}\\&\leq\frac{\pi R^3}{R^4-1}\xrightarrow[R\to\infty]{}0.\end{aligned}$$
>>7. **Conclusión.** Tomando $R\to\infty$ en (1) y usando el paso 1, $$\boxed{\int_{-\infty}^{\infty}\frac{x^2}{1+x^4}\,dx=\frac{\pi}{\sqrt2}.}$$

> [!remark] Errata corregida en la foto 5
> En una línea intermedia se pierde un factor $1/2$. La suma correcta de residuos es $-i/(2\sqrt2)$, que sí aparece al final del cálculo de la foto.

## 5. Método general para integrales racionales

>[!Proposition] Cierre por el semiplano superior
>Sean $p,q\in\mathbb C[z]$, con $q\not\equiv0$, y supongamos que $f=p/q$ no tiene polos reales y que $\deg q-\deg p\geq2$. Entonces la integral real converge absolutamente y $$\boxed{\int_{-\infty}^{\infty}\frac{p(x)}{q(x)}\,dx=2\pi i\sum_{\operatorname{Im}a>0}\operatorname{Res}(f,a),}$$ donde la suma recorre los polos de $f$ en el semiplano superior.
>
>>[!Proof]- Estimación de la clase
>>1. Sean $m=\deg p$ y $n=\deg q$, y sean $a_m,b_n$ los coeficientes principales. Para $|z|$ grande, $$f(z)=\frac{a_m}{b_n}z^{m-n}A(z),\qquad A(z)=\frac{1+\frac{a_{m-1}}{a_mz}+\cdots+\frac{a_0}{a_mz^m}}{1+\frac{b_{n-1}}{b_nz}+\cdots+\frac{b_0}{b_nz^n}}\xrightarrow[z\to\infty]{}1.$$ Por tanto, existe $M>0$ tal que $|A(z)|\leq M$ para todo $|z|$ suficientemente grande. El caso $p\equiv0$ es inmediato.
>>2. Para $\gamma_R(t)=Re^{it}$, $0\leq t\leq\pi$, $$\begin{aligned}\left|\int_{\gamma_R}f(z)\,dz\right|&\leq R\int_0^\pi|f(Re^{it})|\,dt\\&=R^{m-n+1}\left|\frac{a_m}{b_n}\right|\int_0^\pi|A(Re^{it})|\,dt\\&\leq\pi M\left|\frac{a_m}{b_n}\right|R^{m-n+1}\xrightarrow[R\to\infty]{}0,\end{aligned}$$ pues $m-n+1\leq-1$.
>>3. **Convergencia — detalle añadido.** Sobre el eje real, la misma estimación da $|f(x)|\leq C|x|^{m-n}\leq C/|x|^2$ para $|x|$ grande. Como no hay polos reales, la integral converge absolutamente.
>>4. Elegimos $R$ mayor que los módulos de todos los polos. Aplicando [[FA - Teo11#^a11f03|teorema de los residuos]] a $[-R,R]+\gamma_R$, $$\int_{-R}^{R}f(x)\,dx+\int_{\gamma_R}f(z)\,dz=2\pi i\sum_{\operatorname{Im}a>0}\operatorname{Res}(f,a).$$ Al tomar $R\to\infty$, el segundo sumando tiende a cero y obtenemos la fórmula.

^a12b03

> [!remark] Precisiones sobre las fotos 7–8
> Se trabaja con el cociente después de cancelar factores comunes si los hubiera. La condición de grados implica $m-n+1\leq-1$, no necesariamente $m-n+1<-1$. En la fórmula final de las fotos, «residuos» abrevia $2\pi i$ por la suma de los residuos del semiplano elegido.

## 6. Integral de Dirichlet: $\displaystyle\int_0^\infty\frac{\sin x}{x}\,dx$

>[!exercise] Integral de Dirichlet
>Demostrar que $$\int_0^\infty\frac{\sin x}{x}\,dx=\frac\pi2.$$
>
>>[!Proof]- Contorno con una pequeña semicircunferencia
>>1. **Función y contorno.** Consideramos $f(z)=e^{iz}/z$, que tiene un polo simple en $0$. Para $0<r<R$, tomamos $$\Gamma_{r,R}=[-R,-r]+\gamma_r+[r,R]+\gamma_R,$$ donde $\gamma_R(t)=Re^{it}$, $0\leq t\leq\pi$, y $\gamma_r(t)=re^{it}$, con $t$ desde $\pi$ hasta $0$. El arco grande va de $R$ a $-R$ en sentido antihorario; el pequeño va de $-r$ a $r$ en sentido horario. El contorno rodea el semianillo superior y deja el polo fuera de su interior.
>>2. **Cauchy, sin residuos.** La curva se contrae dentro del plano cortado $\mathbb C\setminus\{-it:t\geq0\}$, donde $f$ es analítica. Por [[FA - Teo7#^c9f031|Cauchy v1]], $$0=\int_{-R}^{-r}\frac{e^{ix}}x\,dx+\int_{\gamma_r}\frac{e^{iz}}z\,dz+\int_r^R\frac{e^{ix}}x\,dx+\int_{\gamma_R}\frac{e^{iz}}z\,dz.$$
>>3. **Segmentos reales.** Haciendo $u=-x$ en el segmento negativo, $$\begin{aligned}\int_{-R}^{-r}\frac{e^{ix}}x\,dx+\int_r^R\frac{e^{ix}}x\,dx&=-\int_r^R\frac{e^{-ix}}x\,dx+\int_r^R\frac{e^{ix}}x\,dx\\&=\int_r^R\frac{e^{ix}-e^{-ix}}x\,dx\\&=2i\int_r^R\frac{\sin x}x\,dx.\end{aligned}$$ Por tanto, $$0=2i\int_r^R\frac{\sin x}x\,dx+\int_{\gamma_r}\frac{e^{iz}}z\,dz+\int_{\gamma_R}\frac{e^{iz}}z\,dz.\qquad (2)$$
>>4. **Arco grande: reducción.** Parametrizando, $$\begin{aligned}\left|\int_{\gamma_R}\frac{e^{iz}}z\,dz\right|&=\left|i\int_0^\pi e^{iRe^{it}}\,dt\right|\\&\leq\int_0^\pi e^{-R\sin t}\,dt\\&=2\int_0^{\pi/2}e^{-R\sin t}\,dt.\end{aligned}$$ Aquí usamos $|e^{iRe^{it}}|=|e^{iR\cos t-R\sin t}|=e^{-R\sin t}$ y la simetría del seno.
>>5. **Arco grande: cota.** En $0\leq t\leq\pi/2$, $\sin t\geq2t/\pi$. Luego $$\begin{aligned}\left|\int_{\gamma_R}\frac{e^{iz}}z\,dz\right|&\leq2\int_0^{\pi/2}e^{-2Rt/\pi}\,dt\\&=2\left[-\frac\pi{2R}e^{-2Rt/\pi}\right]_0^{\pi/2}\\&=\frac\pi R(1-e^{-R})\xrightarrow[R\to\infty]{}0.\end{aligned}$$
>>6. **Arco pequeño: parte regular.** Definimos $h(z)=(e^{iz}-1)/z$ para $z\neq0$. Como $$\lim_{z\to0}\frac{e^{iz}-1}z=i,$$ por [[FA - Teo10#^a10c01|criterio mediante un límite finito]] admite extensión analítica a $0$. En particular, existe $M>0$ tal que $|h(z)|\leq M$ cerca de $0$. La longitud de $\gamma_r$ es $\pi r$, así que $$\left|\int_{\gamma_r}\frac{e^{iz}-1}z\,dz\right|\leq M\pi r\xrightarrow[r\to0]{}0.$$
>>7. **Arco pequeño: término singular.** Por su orientación horaria, $$\int_{\gamma_r}\frac{dz}z=\int_\pi^0\frac{ire^{it}}{re^{it}}\,dt=-\pi i.$$ En consecuencia, $$\int_{\gamma_r}\frac{e^{iz}}z\,dz=\int_{\gamma_r}\frac{e^{iz}-1}z\,dz-\pi i\xrightarrow[r\to0]{}-\pi i.$$
>>8. **Existencia del límite en el infinito — detalle explicitado.** Fijado $r>0$, (2) y el paso 5 dan $$2i\lim_{R\to\infty}\int_r^R\frac{\sin x}x\,dx=-\int_{\gamma_r}\frac{e^{iz}}z\,dz.$$ Esto prueba la existencia de la integral en el infinito, no solo calcula un límite suponiendo que existe.
>>9. **Conclusión.** La función $\sin x/x$ se extiende continuamente a $0$ con valor $1$. Podemos hacer $r\to0$ en el paso 8; usando el paso 7 obtenemos $$2i\int_0^\infty\frac{\sin x}x\,dx=\pi i,\qquad\boxed{\int_0^\infty\frac{\sin x}x\,dx=\frac\pi2.}$$

> [!warning] Dos erratas corregidas en las fotos 10–11
> En la cota del arco grande, el factor $2$ de la simetría da $\pi(1-e^{-R})/R$, no $\pi(1-e^{-R})/(2R)$. Además, el resultado final es una integral impropia usual en $[0,\infty)$; no hace falta escribir «VP» porque el integrando es regular en $0$ tras su extensión y el argumento prueba la convergencia en el infinito.

## Fotos originales

Las imágenes se conservan en el orden de los mensajes, giradas para facilitar la lectura.

![[Adjuntos/FA-Teo12/1.jpg]]

![[Adjuntos/FA-Teo12/2.jpg]]

![[Adjuntos/FA-Teo12/3.jpg]]

![[Adjuntos/FA-Teo12/4.jpg]]

![[Adjuntos/FA-Teo12/5.jpg]]

![[Adjuntos/FA-Teo12/6.jpg]]

![[Adjuntos/FA-Teo12/7.jpg]]

![[Adjuntos/FA-Teo12/8.jpg]]

![[Adjuntos/FA-Teo12/9.jpg]]

![[Adjuntos/FA-Teo12/10.jpg]]

![[Adjuntos/FA-Teo12/11.jpg]]
