# Teo 15 — Módulo máximo y lema de Schwarz (27/10/2026)

> [!remark] Fuente y criterio de transcripción
> Transcripción de las 13 fotos del pizarrón tomadas con el celular el 27/10/2026 entre las 9:27 y las 11:19, continuación de [[FA - Teo14]]. Las fotos 2 y 3 muestran el mismo pizarrón desde dos ángulos. Se conserva el orden de la clase y se completan los pasos indicados como ejercicio; las erratas de enunciado en Schwarz se corrigen expresamente. Las fotos originales están al final en `Adjuntos/FA-Teo15/`.

## 1. TMM versión 1

>[!theorem] TMM v1
>Si $f$ es analítica en $G$ región y $a$ es tal que $|f(z)|\leq|f(a)|$ para todo $z\in G$, entonces $f$ es constante.
>
>>[!Proof]- Por la aplicación abierta
>>1. **Reducción.** Supongamos que $f$ no es constante y que $|f|$ alcanza su máximo en $a\in G$.
>>2. **Imagen abierta.** Sea $\Omega=f(G)$ y $\alpha=f(a)$. Por [[FA - Teo9#^9a0031|aplicación abierta]], $\Omega$ es abierto en $\mathbb{C}$ y $\alpha\in\Omega$.
>>3. **Contradicción con la observación.** Por hipótesis $|\alpha|\geq|\xi|$ para todo $\xi\in\Omega$. Pero la observación siguiente dice que todo punto interior de un abierto admite otro punto del abierto con módulo estrictamente mayor, salvo el caso trivial $\alpha=0$ que también se mueve. Luego $\alpha$ no puede ser interior, es decir $\alpha\in\partial\Omega$, absurdo pues $\Omega$ es abierto y $\alpha\in\Omega$.
>>4. **Conclusión.** Por tanto $f$ debe ser constante.

^a15b01

>[!remark] OBS: aumentar el módulo dentro de un abierto
>Notar que en general si $\Omega\subseteq G$ y $\alpha\in\operatorname{int}(\Omega)$ entonces existe $\xi\in\Omega$ tal que $|\alpha|<|\xi|$.
>
>>[!Proof]- Ejercicio completado
>>1. **Recta radial.** Consideramos $r(t)=t\alpha$ con $t>1$ próximo a $1$. Como $\Omega$ es abierto, para $t$ suficientemente cercano a $1$ se tiene $r(t)\in\Omega$ (ejercicio: usar la bola alrededor de $\alpha$).
>>2. **Aumento.** Si $\alpha\neq0$, $|r(t)|=t|\alpha|>|\alpha|$, de modo que $\xi=r(t)$ sirve. Si $\alpha=0$, cualquier $\xi\neq0$ cercano sirve.

>[!remark] Lectura del pizarrón en la prueba
>Con la notación de la prueba, lo anterior se escribe: si $\alpha\in\Omega$ y $|\alpha|\geq|\xi|$ para todo $\xi\in\Omega$, entonces $\alpha\in\partial\Omega$. Así tomo $\Omega=f(G)$, que es abierto por TAA; por hipótesis $|f(a)|=|\alpha|\geq|f(z)|$ para todo $z\in G$, luego $\alpha\in\partial\Omega$, lo cual es imposible si $f$ no es constante pues entonces $\alpha\in\Omega$ abierto.

## 2. TMM versión 2

>[!theorem] TMM v2
>Sea $G$ abierto y acotado en $\mathbb{C}$ y supongamos $f$ continua en $\overline{G}$ y analítica en $G$. Entonces $$\max\{|f(z)|:z\in\overline{G}\}=\max\{|f(z)|:z\in\partial G\}.$$
>
>>[!Proof]- El máximo se alcanza en el borde salvo constancia
>>1. **Existencia del máximo.** Como $\overline{G}$ es compacto (cerrado y acotado) y $|f|$ es continua en $\overline{G}$, alcanza su máximo en $\overline{G}$, es decir existe $a\in\overline{G}$ tal que $|f(a)|\geq|f(z)|$ para todo $z\in\overline{G}$. Llamamos $M=|f(a)|$ a ese máximo.
>>2. **Desigualdad fácil.** Como $\partial G\subseteq\overline{G}$, siempre vale $\max_{\partial G}|f|\leq M$. Basta probar que $M$ también se alcanza en $\partial G$.
>>3. **Casos triviales.** Si $f$ es constante en $G$, por continuidad es constante en $\overline{G}$ y ambos máximos coinciden. Si $a\in\partial G$, ya está: $M=|f(a)|\leq\max_{\partial G}|f|\leq M$.
>>4. **Punto interior y su componente.** Supongamos que $a\in G$; sea $G_0$ la componente conexa de $G$ tal que $a\in G_0$. En particular $|f(z)|\leq|f(a)|=M$ para todo $z\in G_0$, luego por [[FA - Teo15#^a15b01|TMM v1 aplicada a $G_0$]] existe $c$ con $|c|=M$ tal que $f\equiv c$ en $G_0$. Por continuidad $|f|\equiv M$ en $\overline{G_0}$.
>>5. **La clausura de $G_0$ toca el borde.** Como $G_0$ es abierto no vacío, acotado y distinto de $\mathbb{C}$, su borde $\partial G_0$ es no vacío (un abierto no vacío y distinto de $\mathbb{C}$ nunca es cerrado en $\mathbb{C}$). Si $x\in\partial G_0$ estuviera en $G$, existiría $r>0$ con $B(x,r)\subseteq G$; como $B(x,r)$ es conexo y corta a $G_0$, la unión $B(x,r)\cup G_0$ sería conexa en $G$ y contendría a $G_0$, luego sería $G_0$ por maximalidad y $x$ sería interior a $G_0$, absurdo. Así $\partial G_0\cap G=\varnothing$, y como $\partial G_0\subseteq\overline{G_0}\subseteq\overline{G}=G\cup\partial G$, resulta $\partial G_0\subseteq\partial G$.
>>6. **Conclusión.** Tomando $b\in\partial G_0\subseteq\partial G$ y usando el paso 4, $|f(b)|=M$. Luego $\max_{\partial G}|f|\geq M$, que con el paso 2 da $$\max\{|f(z)|:z\in\overline{G}\}=\max\{|f(z)|:z\in\partial G\}.$$

^a15b02

## 3. La hipótesis de acotado no se puede remover

>[!example] Contraejemplo no acotado
>Sea $G=\{z\in\mathbb{C}:-\pi/2\leq\operatorname{Im}z\leq\pi/2\}$, que no es acotado, y $f(z)=e^{e^{z}}$.
>
>>[!Proof]- Cálculo de la foto 4
>>1. **Borde.** Sea $z=x\pm i\pi/2\in\partial G$. Entonces $e^{z}=e^{x}e^{\pm i\pi/2}=\pm ie^{x}$, de donde $f(z)=e^{\pm ie^{x}}$ y por tanto $|f(z)|=1$. Así, $$\max\{|f(z)|:z\in\partial G\}=1.$$
>>2. **Interior no acotado.** Pero para $z=x+iy$ con $-\pi/2<y<\pi/2$ se tiene $|f(z)|=e^{e^{x}\cos y}$ y $\lim_{x\to\infty}|f(z)|=\infty$ (ejercicio: $\cos y>0$ en ese rango). Así, $\sup\{|f(z)|:z\in\overline{G}\}=``\infty\text{''}$. El máximo del borde no controla el interior.

## 4. Borde en la esfera y TMM versión 3

>[!definition] Borde en $\mathbb{C}_\infty$ y límite del módulo
>(1) Dado $G\subseteq\mathbb{C}$, definimos $\partial_\infty G$ como el borde de $G$ en $\mathbb{C}_\infty$, o sea: si $G$ es acotado entonces $\partial_\infty G=\partial G$; si $G$ no es acotado entonces $\partial_\infty G=\partial G\cup\{\infty\}$. (2) Para $a\in\mathbb{C}_\infty$ ponemos $$\overline{\lim_{z\to a}}|f(z)|=\lim_{r\downarrow0}\sup\{|f(z)|:z\in B(a,r)\cap G\},$$ donde $B(\infty,r)=\{z:|z|>1/r\}$.

>[!theorem] TMM v3
>Si $G$ es región y $f:G\to\mathbb{C}$ analítica, y suponemos que existe $M$ tal que $\overline{\lim_{z\to a}}|f(z)|\leq M$ para todo $a\in\partial_\infty G$, entonces $|f(z)|\leq M$ para todo $z\in G$.
>
>>[!Proof]- El conjunto $H$ donde se supera $M+\delta$ es vacío
>>1. **Definición de $H$.** Sea $\delta>0$ y $H=\{z\in G:|f(z)|>M+\delta\}$. Notar que $H$ es abierto (preimagen de un abierto por la continua $|f|$).
>>2. **OBS1: control cerca del borde.** Como $\overline{\lim_{z\to a}}|f(z)|=L\leq M$ para todo $a\in\partial_\infty G$, existe $r_0>0$ tal que $0<r<r_0$ implica $|\sup_{z\in B(a,r)\cap G}|f(z)|-L|<\delta$. En particular $z\in B(a,r)\cap G$ implica $\sup|f(z)|<L+\delta\leq M+\delta$, es decir $$|f(z)|<M+\delta\quad\forall z\in B(a,r)\cap G,\quad\text{con }r<r_0,\ a\in\partial_\infty G.\qquad (1)$$
>>3. **OBS2: la clausura queda en $G$.** Afirmamos que $\overline{H}\subseteq G$ pues $H\subseteq G$. En efecto, sea $a\in\partial H$ con $a\in\partial_\infty G$. En particular $\forall r$, $B(a,r)\cap H\neq\varnothing$, luego existe $w$ con $|w-a|<r$ y $|f(w)|>M+\delta$. Como $a\in\partial_\infty G$, por la OBS1 tenemos $|f(w)|<M+\delta$ para $r$ chico. Contradicción. Por tanto $a\in G$. Así $\overline{H}\subseteq G$.
>>4. **OBS3: compacidad.** Además $H$ es acotada: si $G$ es acotado es claro; si no, en particular vale que $\overline{\lim_{z\to\infty}}|f(z)|\leq M$ (ejercicio: tomar $a=\infty$ en la hipótesis). Luego fuera de un disco grande $|f|<M+\delta$ y $H$ queda acotado. Por consiguiente $\overline{H}$ es compacto contenido en $G$.
>>5. **Aplicar TMM v2 en $H$.** Por [[FA - Teo15#^a15b02|TMM v2]] aplicado a $H$, $$\max_{z\in\overline{H}}\{|f(z)|\}=\max_{z\in\partial H}\{|f(z)|\}.$$
>>6. **OBS4: valor en $\partial H$.** Sabemos que $\overline{H}\subseteq\{z\in G:|f(z)|\geq M+\delta\}$, pues es la clausura del conjunto con desigualdad estricta y $|f|$ es continua. Si $z\in\partial H$ entonces $|f(z)|=M+\delta$: en efecto $|f(z)|\geq M+\delta$ por lo anterior, y si fuera $>M+\delta$ entonces $z\in H$ y como $H$ es abierto existiría $B(z,\rho)\subseteq H$, contradiciendo $z\in\partial H$.
>>7. **OBS5: el borde es no vacío si $H$ no lo es.** Si $H\neq\varnothing$ y $\partial H=\varnothing$, entonces $\overline{H}=H\cup\partial H=H$, de modo que $H\neq\varnothing$ es cerrado en el conexo abierto $G$ y también abierto, luego $H=G$. Pero entonces $|f(z)|>M+\delta$ en todo $G$, contra la OBS1. Luego $H\neq\varnothing$ implica $\partial H\neq\varnothing$.
>>8. **Contradicción final.** Si $H\neq\varnothing$, el paso 5 da $\max_{\overline{H}}|f|=\max_{\partial H}|f|=M+\delta$ por el paso 6, pero como $H\neq\varnothing$ existe $w\in H$ con $|f(w)|>M+\delta$, imposible. Luego $H=\varnothing$.
>>9. **Hacer $\delta\to0$.** Así $|f(z)|\leq M+\delta$ para todo $z\in G$ y todo $\delta>0$, de donde $|f(z)|\leq M$. Esto es lo que afirma el teorema, pues $\overline{\lim_{z\to a}}|f(z)|\leq M$ era la hipótesis marcada $(*)$.

^a15b03

> [!warning] Hipótesis que no se pueden remover
> La hipótesis $\overline{\lim_{z\to a}}|f(z)|\leq M$ para $a\in\partial_\infty G$ no se puede remover: contraejemplo el mismo de antes (ejercicio). En el pizarrón sigue un ejemplo atribuido a Rudin (p. 374): sea $D=\{z:|z|<1\}$ con $f$ analítica en $D$, continua en $\partial D$ y que no puede extenderse a $\overline{D}$; la foto está cortada en ese punto y no se transcribe más que el enunciado visible.

## 5. Lema de Schwarz

>[!theorem] Lema de Schwarz
>Sea $D=\{z:|z|<1\}$ y sea $f$ analítica en $D$ tal que $|f(z)|<1$ para todo $z\in D$ y $f(0)=0$. Entonces $|f'(0)|\leq1$ y $|f(z)|\leq|z|$ para todo $z\in D$. Además, si $|f'(0)|=1$ o $|f(z)|=|z|$ para algún $z\neq0$, entonces $f(z)=cz$ con $|c|=1$.
>
>>[!Proof]- La función auxiliar $g(z)=f(z)/z$
>>1. **Definición de $g$.** Ponemos $g(z)=f(z)/z$ si $z\neq0$ y $g(0)=f'(0)$. Como $f(0)=0$, el cero es evitable y $g$ es analítica en $D$, con $\lim_{z\to0}f(z)/z=f'(0)$.
>>2. **Cota en $|z|=r$.** Fijamos $r\in(0,1)$. Para $|z|=r$ se tiene $|g(z)|=|f(z)|/r<1/r$. Por [[FA - Teo15#^a15b02|TMM v2]] en $\overline{B(0,r)}$, $|g(z)|\leq1/r$ dentro.
>>3. **Paso al límite.** Haciendo $r\to1$ queda $|g(z)|\leq1$ para todo $z\in D$. Es decir $|f(z)|/|z|\leq1$ si $0<|z|<1$, de donde $|f(z)|\leq|z|$ para todo $z\in D$ (en $0$ vale por $f(0)=0$). Y además $|f'(0)|=|g(0)|\leq1$.
>>4. **Caso de igualdad.** Supongamos $|f'(0)|=1$ o $|g(z_0)|=1$ para algún $z_0\neq0$, es decir $|g(0)|=|f'(0)|=1$ o $|g(z_0)|=1$; en ambos casos $|g|$ alcanza su máximo $1$ en $D$.
>>5. **Rigidez.** Por [[FA - Teo15#^a15b01|TMM v1]] $g$ es constante $=c\in\mathbb{C}$. Luego $f(z)/z=c$ para $z\neq0$ en $D$, es decir $f(z)=cz$ para $z\neq0$ en $D$ y por continuidad también en $0$.
>>6. **Módulo de $c$.** Además $f'(0)=c$ por el cociente incremental $\lim_{h\to0}(f(h)-f(0))/h=\lim_{h\to0}ch/h=c$, y $|c|=|g(0)|=1$. Por tanto $|c|=1$, como se quería.

^a15b04

> [!warning] Erratas corregidas en las fotos 11–12
> El pizarrón escribe $|f'(z)|\leq1$ y la igualdad $|f'(z)|=1$; debe ser $|f'(0)|\leq1$ y $|f'(0)|=1$, pues la derivada se evalúa en el origen. El resto del cálculo usa correctamente $|g(0)|=|f'(0)|$.

## Fotos originales

Las trece fotos se conservan en el orden en que fueron tomadas. Las fotos 2 y 3 muestran el mismo pizarrón.

![[Adjuntos/FA-Teo15/foto-1.jpg]]

![[Adjuntos/FA-Teo15/foto-2.jpg]]

![[Adjuntos/FA-Teo15/foto-3.jpg]]

![[Adjuntos/FA-Teo15/foto-4.jpg]]

![[Adjuntos/FA-Teo15/foto-5.jpg]]

![[Adjuntos/FA-Teo15/foto-6.jpg]]

![[Adjuntos/FA-Teo15/foto-7.jpg]]

![[Adjuntos/FA-Teo15/foto-8.jpg]]

![[Adjuntos/FA-Teo15/foto-9.jpg]]

![[Adjuntos/FA-Teo15/foto-10.jpg]]

![[Adjuntos/FA-Teo15/foto-11.jpg]]

![[Adjuntos/FA-Teo15/foto-12.jpg]]

![[Adjuntos/FA-Teo15/foto-13.jpg]]
