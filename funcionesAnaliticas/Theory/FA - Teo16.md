# Teo 16 — Automorfismos y principio de reflexión (29/10/2026)

> [!remark] Fuente y criterio de transcripción
> Clase del PDF de 11 páginas enviado por Franco por WhatsApp el 29/10/2026 a las 21:05, revisada visualmente página por página. Se conserva el orden y se desarrollan los cálculos y ejercicios abreviados. Las páginas 5–6 repiten en el pizarrón la clasificación de la esfera adelantada en la página 4. Las páginas 7–11 contienen las definiciones y la demostración del principio de reflexión, pero no muestran su enunciado completo: se explicitan sus hipótesis habituales, necesarias para la construcción que se demuestra. Se corrigen las erratas indicadas al final. El PDF original queda adjunto.

Continuación de [[FA - Teo15]]. Escribimos $\mathbb D=\{z\in\mathbb C:|z|<1\}$ y $\mathbb C_\infty=\mathbb C\cup\{\infty\}$.

## 1. Transformaciones del disco

Para cada $a\in\mathbb D$ definimos la transformación de Möbius $$\varphi_a(z)=\frac{z-a}{1-\overline a z}.$$

>[!proposition] Propiedades de $\varphi_a$
>Si $|a|<1$, la función $\varphi_a$ es analítica y biyectiva de $\mathbb D$ en $\mathbb D$, con inversa $\varphi_{-a}$. También lleva biyectivamente $\partial\mathbb D$ sobre sí mismo. Además, $$\varphi_a(a)=0,\qquad\varphi_a'(0)=1-|a|^2,\qquad\varphi_a'(a)=\frac1{1-|a|^2}.$$
>
>>[!Proof]-
>>1. **Analiticidad.** Si $|z|\leq1$, entonces $|\overline a z|<1$, por lo que el denominador no se anula; $\varphi_a$ es analítica en un entorno del disco cerrado.
>>2. **Imagen del disco y del borde.** Un cálculo directo da $$|1-\overline a z|^2-|z-a|^2=(1-|a|^2)(1-|z|^2).$$ Como $1-|a|^2>0$, se obtiene $|\varphi_a(z)|<1$ si $|z|<1$ y $|\varphi_a(z)|=1$ si $|z|=1$.
>>3. **Inversa.** Resolviendo $w=(z-a)/(1-\overline a z)$ para $z$, resulta $$z=\frac{w+a}{1+\overline a w}=\varphi_{-a}(w).$$ Como $\varphi_{-a}$ también preserva el disco y su borde, ambas restricciones son biyectivas.
>>4. **Derivadas.** Por la regla del cociente, $$\varphi_a'(z)=\frac{1-|a|^2}{(1-\overline a z)^2}.$$ Evaluando en $0$ y en $a$ se obtienen los valores anunciados; además $\varphi_a(a)=0$.

^e6a1f0

## 2. Desigualdad de Schwarz–Pick

>[!proposition] Desigualdad para la derivada
>Sea $f:\mathbb D\to\mathbb D$ analítica y sea $a\in\mathbb D$. Entonces $$|f'(a)|\leq\frac{1-|f(a)|^2}{1-|a|^2}.$$ Si hay igualdad, existe $c\in\mathbb C$ con $|c|=1$ tal que $$f=\varphi_{-f(a)}\circ(c\,\varphi_a).$$
>
>>[!Proof]-
>>1. **Normalización.** Definimos $g=\varphi_{f(a)}\circ f\circ\varphi_{-a}$. Por [[FA - Teo16#^e6a1f0|propiedades de $\varphi_a$]], $g$ es una aplicación analítica de $\mathbb D$ en sí mismo y $g(0)=0$.
>>2. **Derivada.** Por la regla de la cadena y [[FA - Teo16#^e6a1f0|valores de las derivadas de $\varphi_a$]], $$g'(0)=\varphi_{f(a)}'(f(a))f'(a)\varphi_{-a}'(0)=\frac{1-|a|^2}{1-|f(a)|^2}f'(a).$$ Por [[FA - Teo15#^a15b04|lema de Schwarz]], $|g'(0)|\leq1$, lo que da la desigualdad.
>>3. **Igualdad.** Si se da la igualdad, [[FA - Teo15#^a15b04|rigidez de Schwarz]] da $g(z)=cz$ con $|c|=1$. Despejando $f$ con las inversas de las transformaciones, $$f=\varphi_{-f(a)}\circ(c\,\varphi_a).$$

^3b9c2d

> [!remark] La hipótesis escrita en el apunte
> El apunte enuncia la cota para $|f(z)|\leq1$. Si $f$ no es constante, [[FA - Teo15#^a15b01|módulo máximo]] implica $|f(z)|<1$ y se aplica la demostración anterior. Si $f$ es constante, la desigualdad también vale. La conclusión del caso de igualdad requiere excluir las constantes de módulo uno: para ellas ambos lados de la desigualdad son cero, pero no son automorfismos.

## 3. Automorfismos del disco

>[!theorem] Caracterización de los automorfismos de $\mathbb D$
>Las aplicaciones analíticas y biyectivas $f:\mathbb D\to\mathbb D$ son exactamente las de la forma $$f(z)=c\frac{z-a}{1-\overline a z},\qquad a\in\mathbb D,\quad |c|=1.$$
>
>>[!Proof]-
>>1. **Inversa.** Sea $a=f^{-1}(0)$ y sea $g=f^{-1}$, analítica por [[FA - Teo14#^a14b03|inversa local]]. Tenemos $g(0)=a$ y $g\circ f=\operatorname{id}$.
>>2. **Cotas en los puntos correspondientes.** Por [[FA - Teo16#^3b9c2d|Schwarz–Pick]], $$|g'(0)|\leq1-|a|^2,\qquad |f'(a)|\leq\frac1{1-|a|^2}.$$
>>3. **Igualdad y rigidez.** Derivando $g\circ f$ en $a$, $$1=|g'(0)|\,|f'(a)|\leq(1-|a|^2)\frac1{1-|a|^2}=1.$$ Por tanto $|f'(a)|=1/(1-|a|^2)$. El caso de igualdad de [[FA - Teo16#^3b9c2d|Schwarz–Pick]], con $f(a)=0$, da $f=\varphi_0\circ(c\varphi_a)=c\varphi_a$, con $|c|=1$.
>>4. **Recíproca.** Por [[FA - Teo16#^e6a1f0|propiedades de $\varphi_a$]], $\varphi_a$ es una biyección analítica del disco; la multiplicación por $c$ con $|c|=1$ también lo es.

^7c5e11

## 4. Automorfismos del plano

>[!theorem] Caracterización de los automorfismos de $\mathbb C$
>Las aplicaciones enteras biyectivas $f:\mathbb C\to\mathbb C$ son exactamente las funciones afines $$f(z)=az+b,\qquad a,b\in\mathbb C,\quad a\neq0.$$
>
>>[!Proof]-
>>1. **La singularidad en infinito.** Para una $f$ entera biyectiva, consideramos $h(z)=f(1/z)$, que tiene una singularidad aislada en $0$.
>>2. **No es evitable.** Si fuese evitable, $f$ estaría acotada fuera de un disco y también en el disco cerrado; por [[FA - Teo4#^a04b01|Liouville]], sería constante, contradicción.
>>3. **No es esencial.** Si fuese esencial, por [[FA - Teo11#^a11f02|Casorati–Weierstrass]] la imagen $f(\{|z|>1\})$ sería densa en $\mathbb C$. Pero, por [[FA - Teo9#^9a0031|aplicación abierta]], $f(\{|z|<1\})$ es un abierto no vacío disjunto de esa imagen, ya que $f$ es inyectiva; contradicción.
>>4. **Es un polo.** Entonces $0$ es un polo de $h$ y el desarrollo de Laurent muestra que $f$ es un polinomio no constante. Si su grado fuese mayor que uno, para cualquier $z_0$ el polinomio $f(z)-f(z_0)$ tendría como única raíz posible a $z_0$, por inyectividad. Por [[FA - Teo4#^a04b02|teorema fundamental del álgebra]], sería $f(z)-f(z_0)=A(z-z_0)^n$ con $n>1$, lo que implica $f'(z_0)=0$ y contradice la inyectividad local. Por tanto su grado es uno.
>>5. **Recíproca.** Si $a\neq0$, $z\mapsto az+b$ es entera y tiene inversa $w\mapsto(w-b)/a$.

^c2a1e4

## 5. Automorfismos de la esfera de Riemann

>[!proposition] Automorfismos que fijan el infinito
>Los automorfismos $F:\mathbb C_\infty\to\mathbb C_\infty$ que satisfacen $F(\infty)=\infty$ son exactamente las extensiones de las funciones $$F(z)=az+b,\qquad a\neq0.$$
>
>>[!Proof]-
>>1. **Restricción al plano.** Como $F$ es biyectiva y fija $\infty$, ningún punto finito tiene imagen $\infty$ y todo punto finito tiene preimagen finita. Así, $F|_{\mathbb C}:\mathbb C\to\mathbb C$ es analítica y biyectiva.
>>2. **Clasificación.** Por [[FA - Teo16#^c2a1e4|automorfismos del plano]], $F(z)=az+b$ con $a\neq0$.
>>3. **Recíproca.** Una función afín con $a\neq0$ se extiende fijando $\infty$. En las coordenadas $\zeta=1/z$ y $\eta=1/F(z)$ su expresión es $\eta=\zeta/(a+b\zeta)$, analítica cerca de $0$, y la inversa afín se extiende de igual modo.

^a16b01

>[!remark] Observación topológica del pizarrón
>Una aplicación **continua e inyectiva** de $\mathbb C_\infty$ en sí mismo es sobreyectiva: por invariancia del dominio su imagen es abierta, y por compacidad es cerrada; la esfera es conexa. Para una aplicación analítica no constante también se obtiene la apertura por [[FA - Teo9#^9a0031|aplicación abierta]], aplicada en coordenadas locales. La observación no vale para una función inyectiva arbitraria sin continuidad.

>[!theorem] Caracterización de los automorfismos de $\mathbb C_\infty$
>Los automorfismos de la esfera son exactamente las transformaciones de Möbius $$F(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0,$$ entendidas con sus valores en los polos y en $\infty$.
>
>>[!Proof]-
>>1. **Enviar $F(\infty)$ al infinito.** Sea $p=F(\infty)$. Si $p=\infty$, tomamos $T(w)=w$; si $p\in\mathbb C$, tomamos $T(w)=1/(w-p)$. En ambos casos $T$ es una transformación de Möbius y $(T\circ F)(\infty)=\infty$.
>>2. **Aplicar el caso anterior.** Por [[FA - Teo16#^a16b01|automorfismos que fijan el infinito]], existen $A\neq0$ y $B$ tales que $(T\circ F)(z)=Az+B$. Por tanto $F(z)=T^{-1}(Az+B)$, que es una transformación de Möbius. Si $p$ es finito, explícitamente $$F(z)=p+\frac1{Az+B}=\frac{pAz+pB+1}{Az+B},$$ cuyo determinante es $-A\neq0$.
>>3. **Recíproca.** Si $ad-bc\neq0$, la función $F(z)=(az+b)/(cz+d)$ tiene inversa $$F^{-1}(w)=\frac{dw-b}{-cw+a}.$$ Ambas son analíticas como aplicaciones de la esfera: en un polo se usa la coordenada $1/F$, y en el infinito se sustituye $z=1/\zeta$. Luego $F$ es un automorfismo.

^a16b02

## 6. Regiones simétricas y principio de reflexión de Schwarz

>[!definition] Región reflejada y región simétrica
>Sea $G\subseteq\mathbb C$ una región. Definimos $$G^*=\{z\in\mathbb C:\overline z\in G\}.$$ Decimos que $G$ es simétrica respecto del eje real si $G=G^*$. Para una región simétrica escribimos $$G_+=\{z\in G:\operatorname{Im}z>0\},\qquad G_0=G\cap\mathbb R,\qquad G_-=\{z\in G:\operatorname{Im}z<0\}.$$

^a16b03

>[!theorem] Principio de reflexión de Schwarz
>Sea $G$ una región simétrica respecto del eje real. Supongamos que $f:G_+\cup G_0\to\mathbb C$ es continua, analítica en $G_+$ y real en $G_0$. Entonces la función $$g(z)=\begin{cases}f(z),&z\in G_+\cup G_0,\\\overline{f(\overline z)},&z\in G_-,\end{cases}$$ es analítica en $G$ y satisface $g(\overline z)=\overline{g(z)}$.
>
>>[!Proof]- Reducción a Morera, como en el pizarrón
>>1. **La reflexión está bien definida.** Por [[FA - Teo16#^a16b03|simetría de $G$]], si $z\in G_-$ entonces $\overline z\in G_+$. Sobre $G_0$, la condición $f(x)\in\mathbb R$ hace coincidir las expresiones $f(x)$ y $\overline{f(x)}$.
>>2. **Continuidad.** En cada semiplano la continuidad es inmediata. Si $x\in G_0$ y $z\to x$ desde abajo, $\overline z\to x$ desde arriba y $g(z)=\overline{f(\overline z)}\to\overline{f(x)}=f(x)=g(x)$. Desde arriba se usa directamente la continuidad de $f$; por tanto $g$ es continua en $G$.
>>3. **Analiticidad en $G_-$.** Para $z\in G_-$ y $h\to0$, $$\frac{g(z+h)-g(z)}h=\overline{\frac{f(\overline z+\overline h)-f(\overline z)}{\overline h}}\longrightarrow\overline{f'(\overline z)}.$$ Así, $g'(z)=\overline{f'(\overline z)}$. Por [[FA - Teo9#^9a0041|Goursat]], $g$ es analítica en $G_-$. En $G_+$ coincide con $f$.
>>4. **Localizar el problema en el eje.** Sea $x_0\in G_0$ y elijamos $r>0$ con $\overline{B(x_0,r)}\subset G$. Probaremos que la integral de $g$ sobre todo borde triangular contenido en $B(x_0,r)$ es cero.
>>5. **Triángulos de un solo lado.** Si el triángulo cerrado está enteramente en $G_+$ o enteramente en $G_-$, la integral es cero por analiticidad. Si tiene un lado en $G_0$ y el tercer vértice en uno de los dos semiplanos, el cálculo de [[FA - Teo16#^a16b05|integral sobre un triángulo apoyado en el eje]] da el mismo resultado.
>>6. **Triángulos que cruzan el eje.** Se corta el triángulo por $\mathbb R$ y se divide, si es necesario, la parte cuadrilateral en dos triángulos. Quedan triángulos de un solo lado, con a lo sumo un lado o un vértice en el eje. Los que solo tienen un vértice en el eje se tratan mediante el corte de un pequeño triángulo junto a ese vértice, como se detalla en el paso 8 de [[FA - Teo16#^a16b05|integral sobre un triángulo apoyado en el eje]]. Al sumar sus integrales, los lados interiores se cancelan. Por tanto la integral sobre el triángulo original también es cero.
>>7. **Morera.** Por la continuidad del paso 2 y [[FA - Teo7#^e4b901|Morera]], $g$ es analítica en $B(x_0,r)$. Como $x_0$ era arbitrario, es analítica en todo $G$.
>>8. **Identidad de reflexión.** La construcción da $g(\overline z)=\overline{g(z)}$ en ambos semiplanos, y sobre el eje se usa que $g(x)=f(x)$ es real.

^a16b04

## 7. Cálculo de la integral sobre el triángulo apoyado en el eje

Este es el cálculo desarrollado en las páginas 9–11. El dibujo considera un triángulo superior $Q$ de vértices $a,b,c$, con $a,b\in\mathbb R$ y $\operatorname{Im}c>0$. Se aproxima por el triángulo interior de vértices $\alpha,\beta,c$, donde $\alpha\in[a,c]$ y $\beta\in[b,c]$ tienden a $a$ y $b$ respectivamente. Los bordes se orientan como $a\to b\to c\to a$ y $\alpha\to\beta\to c\to\alpha$.

>[!proposition] Integral nula al llegar al eje
>Sea $g$ continua en un entorno del triángulo cerrado $Q$ y analítica en su parte situada sobre el eje real. Si $a,b\in\mathbb R$ y $\operatorname{Im}c>0$, entonces $$\int_{\partial Q}g(z)\,dz=0.$$ El resultado análogo vale debajo del eje.
>
>>[!Proof]- Cálculo completo de las páginas 9–11
>>1. **Continuidad uniforme y cota.** Como $Q$ es compacto, $g$ es uniformemente continua y existe $M>0$ con $|g(z)|\leq M$ en $Q$. Dado $\varepsilon>0$, elegimos $\delta>0$ con $\delta<\varepsilon$ tal que $|z-w|<\delta$ implique $|g(z)-g(w)|<\varepsilon$ para $z,w\in Q$.
>>2. **Triángulo interior.** Elegimos $\alpha\in(a,c)$ y $\beta\in(b,c)$ con $|\alpha-a|<\delta$ y $|\beta-b|<\delta$. El triángulo cerrado $[\alpha,\beta,c]$ queda en el semiplano superior, por lo que $\int_{\partial[\alpha,\beta,c]}g=0$. Cancelando los segmentos comunes, $$\int_{\partial Q}g=\int_{\partial[\alpha,\beta,c]}g+\int_{[a,b]+[b,\beta]+[\beta,\alpha]+[\alpha,a]}g=I.$$
>>3. **Separar los lados cortos.** Escribimos $$I=\underbrace{\int_{[b,\beta]}g}_{I_1}+\underbrace{\int_{[\alpha,a]}g}_{I_2}+\int_{[a,b]}g+\int_{[\beta,\alpha]}g.$$ Por la cota de $g$, $$|I_1|\leq M|\beta-b|<M\delta,\qquad |I_2|\leq M|\alpha-a|<M\delta.$$
>>4. **Parametrizar los otros dos lados.** Sean $z(t)=bt+(1-t)a$ y $w(t)=\beta t+(1-t)\alpha$, para $t\in[0,1]$. Como $[\beta,\alpha]$ tiene orientación opuesta a $w$, $$I=I_1+I_2+(b-a)\int_0^1g(z(t))\,dt-(\beta-\alpha)\int_0^1g(w(t))\,dt.$$
>>5. **Restar los valores de $g$.** Sumando y restando $(b-a)\int_0^1g(w(t))\,dt$, $$\begin{aligned}I&=I_1+I_2+(b-a)\int_0^1\bigl(g(z(t))-g(w(t))\bigr)\,dt\\&\quad+\bigl((b-a)-(\beta-\alpha)\bigr)\int_0^1g(w(t))\,dt.\end{aligned}$$
>>6. **Estimar la diferencia.** Para todo $t\in[0,1]$, $$|z(t)-w(t)|\leq t|b-\beta|+(1-t)|a-\alpha|<\delta,$$ de modo que $|g(z(t))-g(w(t))|<\varepsilon$. Además, $$|(b-a)-(\beta-\alpha)|\leq|b-\beta|+|a-\alpha|<2\delta.$$
>>7. **Hacer tender el error a cero.** Reuniendo las cotas, $$\left|\int_{\partial Q}g\right|=|I|\leq2M\delta+|b-a|\varepsilon+2M\delta\leq(4M+|b-a|)\varepsilon.$$ Como $\varepsilon>0$ es arbitrario, $\int_{\partial Q}g=0$. Debajo del eje se repite el mismo argumento con los triángulos interiores en el semiplano inferior.
>>8. **Caso de un único vértice en el eje.** Si solo un vértice $a$ está en el eje y los otros dos están arriba, cortamos las aristas que parten de $a$ en puntos $\alpha,\beta\to a$. El cuadrilátero restante está estrictamente arriba y su integral es cero por triangulación. La integral del triángulo original es entonces la del pequeño triángulo $[a,\beta,\alpha]$, cuyo perímetro tiende a cero; por la cota $M$, su integral tiende a cero. Esto completa los casos usados en [[FA - Teo16#^a16b04|reflexión de Schwarz]].

^a16b05

## 8. Precisiones y erratas del original

- En la primera página aparece provisionalmente que todos los automorfismos del disco son $\varphi_a$. La caracterización final de la página 3 incluye correctamente el factor de rotación $c$, con $|c|=1$.
- En la demostración con la inversa del disco, las cotas se evalúan en $0$ para $f^{-1}$ y en $a=f^{-1}(0)$ para $f$; así la identidad derivada es $1=(f^{-1})'(0)f'(a)$.
- En Schwarz–Pick, el caso de igualdad se formula para aplicaciones al disco abierto; las constantes de módulo uno deben separarse si se permite $|f|\leq1$.
- La observación de la página 6 sobre aplicaciones inyectivas de la esfera requiere continuidad; en la clase se está trabajando con aplicaciones analíticas.
- El enunciado completo de reflexión no está fotografiado. La continuidad hasta $G_0$ y los valores reales allí son las hipótesis que justifican la continuidad de la extensión usada en las páginas 8–11.
- En la última estimación del pizarrón hay una cota final abreviada que no conserva claramente todos los términos. Se mantiene el cálculo anterior con la cota explícita $(4M+|b-a|)\varepsilon$, suficiente para concluir.

## PDF original

![[Adjuntos/FA-Teo16/Clase teorica - Franco - 29-10-2026.pdf]]
