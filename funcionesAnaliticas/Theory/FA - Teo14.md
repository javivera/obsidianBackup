# Teo 14 — Principio del argumento, Rouché y TFA (27/10/2026)

> [!remark] Fuente y criterio de transcripción
> Transcripción del PDF de 5 páginas recibido el 27/10/2026 a las 11:20 de Franco por WhatsApp, continuación de [[FA - Teo13]]. Se conserva el orden de la clase. Se corrigen expresamente la falta del factor $1/(2\pi i)$ en la proposición de la inversa, la falta de la derivada en $\log(f/g)$ y precisiones de hipótesis. El dibujo del cubrimiento de $\{\gamma\}$ por bolas se describe en palabras.

## 1. Holomorfa, meromorfa y polos

>[!definition] Holomorfa y meromorfa
>Sea $G$ abierto y $f:G\to\mathbb{C}$. (a) Si $f$ es analítica en $G$, se dice holomorfa. (b) Si $f$ es analítica en $G$ salvo en singularidades aisladas que son polos, se dice meromorfa.

>[!remark] Comportamiento en un polo
>Si $z=a$ es un polo entonces $$\lim_{z\to a}|f(z)|=\infty,\qquad f:G\setminus\{a\}\to\mathbb{C}.$$

>[!exercise] Extensión a la esfera
>Si $f$ es meromorfa en $G$, podemos extender $f$ a $\widetilde{f}:G\to\mathbb{C}_\infty$ y $\widetilde{f}$ es continua.
>
>>[!Proof]-
>>1. **Definición en los polos.** Ponemos $\widetilde{f}(z)=f(z)$ si $z$ no es polo y $\widetilde{f}(a)=\infty$ si $a$ es polo.
>>2. **Continuidad.** En los puntos de analiticidad es continua por hipótesis; en un polo $a$, dado $M>0$ existe $\delta>0$ tal que $0<|z-a|<\delta$ implica $|f(z)|>M$, es decir $d(\widetilde{f}(z),\infty)<1/M$ en la métrica de la esfera, luego es continua en $a$.

## 2. Principio del argumento

>[!theorem] Principio del argumento
>Sea $f$ meromorfa en $G$ con polos $P_1,\dots,P_m$ y ceros $Z_1,\dots,Z_n$ contados con su multiplicidad. Si $\gamma$ es una curva cerrada rectificable tal que $P_i,Z_j\notin\{\gamma\}$ y $n(\gamma,w)=0$ para todo $w\in\mathbb{C}\setminus G$ ($\gamma\simeq_G0$), entonces $$\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz=\sum_{j=1}^n n(\gamma,Z_j)-\sum_{i=1}^m n(\gamma,P_i).$$
>
>>[!Proof]- Cálculo local y descomposición global
>>1. **Cero de orden $m$.** Notar que si $z=a$ es un cero de $f$ con multiplicidad $m$, entonces $f(z)=(z-a)^m g(z)$ con $g(a)\neq0$ y $g$ analítica, de donde $f'(z)=m(z-a)^{m-1}g(z)+(z-a)^m g'(z)$ y por tanto $$\frac{f'(z)}{f(z)}=\frac{m}{z-a}+\frac{g'(z)}{g(z)}.$$
>>2. **Polo de orden $m$.** Si $z=a$ es un polo de orden $m$, entonces $f(z)=(z-a)^{-m}g(z)$ con $g(a)\neq0$ y $g$ analítica, de donde $f'(z)=-m(z-a)^{-m-1}g(z)+(z-a)^{-m}g'(z)$ y por tanto $$\frac{f'(z)}{f(z)}=-\frac{m}{z-a}+\frac{g'(z)}{g(z)}.$$
>>3. **Descomposición global.** Aquí, repitiendo este procedimiento para cada $Z_j,P_i$ tenemos, contando cada cero y polo tantas veces como indica su multiplicidad, $$\frac{f'(z)}{f(z)}=\sum_{j=1}^n\frac1{z-Z_j}-\sum_{i=1}^m\frac1{z-P_i}+\frac{h'(z)}{h(z)},$$ con $h$ sin polos y sin ceros en el abierto relevante.
>>4. **Integración término a término.** Por [[FA - Teo6#^1e9a3c|índice de una curva]], $$\frac1{2\pi i}\int_\gamma\frac{dz}{z-Z_j}=n(\gamma,Z_j),\qquad\frac1{2\pi i}\int_\gamma\frac{dz}{z-P_i}=n(\gamma,P_i).$$ Como $h$ no se anula ni tiene polos, $h'/h$ es analítica y su integral sobre la curva nulhomotópica es cero; queda $$\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz=\sum_{j=1}^n n(\gamma,Z_j)-\sum_{i=1}^m n(\gamma,P_i).$$

^a14b01

### Por qué la integral logarítmica es múltiplo de $2\pi i$

>[!lemma] Número de Lebesgue y ramas locales del logaritmo
>Para cada $a\in\{\gamma\}$ sea $B(a,r_a)$ tal que $B(a,r_a)\subset G$ y $B(a,r_a)\cap(\{Z_j\}_{j=1}^n\cup\{P_i\}_{i=1}^m)=\varnothing$. Entonces $U=\bigcup_{a\in\{\gamma\}}B(a,r_a)$ es un cubrimiento abierto de $\{\gamma\}$, que es compacto, y existe el número de Lebesgue $\varepsilon>0$, es decir $$\forall z,z'\in U\text{ con }|z-z'|<\varepsilon,\ \exists a\in\{\gamma\}\mid z,z'\in B(a,r_a)\ (\subset G).$$ Usamos ese $\varepsilon$ como ``$\epsilon$'' en la continuidad uniforme: existe $\delta>0$ tal que $|t-t'|<\delta$ implica $|\gamma(t)-\gamma(t')|<\varepsilon$, y por tanto $\gamma(t),\gamma(t')$ caen en una misma bola del cubrimiento. Sea $\mathcal{P}$ partición de $[a,b]$, $\mathcal{P}=\{a=t_0<t_1<\cdots<t_n=b\}$ con $\|\mathcal{P}\|<\delta$. Entonces si $t_{k-1}\leq t\leq t_k$ se tiene $|\gamma(t)-\gamma(t_{k-1})|<\varepsilon$ (n.º de Lebesgue). Si tomo $\gamma_k=\gamma|_{[t_{k-1},t_k]}$ entonces $\gamma_k$ está contenida en alguna $B(a,r_a)$.
>
>>[!Proof]- La integral vale $2k\pi i$
>>1. **Primitiva local.** Aquí $f\neq0$ y analítica, y además cada bola $B(a,r_a)$ es simplemente conexa. Por lo tanto $f'/f$ tiene primitiva allí. Para cada $k$ definimos $l_k(z)=\log f(z)$ con $\log$ una rama del logaritmo apropiada en esa bola, de modo que $l_k' =f'/f$.
>>2. **Empalme.** Ajustamos las constantes para que $$\therefore\ l_k(\gamma(t_{k-1}))=l_{k-1}(\gamma(t_{k-1})).$$
>>3. **Suma telescópica.** Descomponiendo la integral, $$\begin{aligned}\int_\gamma\frac{f'(z)}{f(z)}\,dz&=\sum_{k=1}^n\int_{\gamma_k}\frac{f'(z)}{f(z)}\,dz\\&=\sum_{k=1}^n\bigl(l_k(\gamma(t_k))-l_k(\gamma(t_{k-1}))\bigr)\\&=l_n(\gamma(t_n))-l_1(\gamma(t_0))\\&=\log(f(\gamma(b)))-\log(f(\gamma(a)))\\&=2k\pi i.\end{aligned}$$ En particular la integral dividida por $2\pi i$ es entera; aplicada a $h$ sin ceros da la anulación usada arriba. El dibujo de la clase muestra $G$ como región negra, $\gamma$ en azul dentro, y un tramo de $\gamma$ cubierto por bolitas rojas encadenadas.

## 3. Versión con peso $g$

>[!theorem] Principio del argumento con peso
>Sea $f$ meromorfa en $G$ (abierto) con ceros $Z_1,\dots,Z_n$ y polos $P_1,\dots,P_m$ en $G$ contados de acuerdo a su multiplicidad. Si $g$ es analítica en $G$ y $\gamma$ es cerrada rectificable con $n(\gamma,w)=0$ para todo $w\in\mathbb{C}\setminus G$, entonces $$\frac1{2\pi i}\int_\gamma g(z)\frac{f'(z)}{f(z)}\,dz=\sum_{j=1}^n g(Z_j)n(\gamma,Z_j)-\sum_{i=1}^m g(P_i)n(\gamma,P_i).$$
>
>>[!Proof]- Desarrollo de la foto 3
>>1. **Misma descomposición.** Con la notación del teorema anterior, $$\frac1{2\pi i}\int_\gamma g(z)\frac{f'(z)}{f(z)}\,dz=\sum_{j=1}^n\frac1{2\pi i}\int_\gamma\frac{g(z)}{z-Z_j}\,dz-\sum_{i=1}^m\frac1{2\pi i}\int_\gamma\frac{g(z)}{z-P_i}\,dz+\frac1{2\pi i}\int_\gamma\frac{h'(z)}{h(z)}g(z)\,dz.$$
>>2. **Término restante nulo.** El último integrando es analítico (producto de analíticas, pues $h$ no se anula), de modo que $$\overbrace{\frac1{2\pi i}\int_\gamma\frac{h'(z)}{h(z)}g(z)\,dz}^{=0\ \text{(analíticas)}}.$$ Por la fórmula integral de Cauchy para $g$ analítica, $\frac1{2\pi i}\int_\gamma g(z)/(z-a)\,dz=g(a)n(\gamma,a)$.
>>3. **Conclusión.** Sustituyendo queda $$\begin{aligned}\frac1{2\pi i}\int_\gamma g(z)\frac{f'(z)}{f(z)}\,dz&=\sum_{j=1}^n g(Z_j)n(\gamma,Z_j)-\sum_{i=1}^m g(P_i)n(\gamma,P_i).\end{aligned}$$

^a14b02

## 4. Fórmula para la inversa local

>[!proposition] Inversa mediante el argumento con peso
>Sea $f$ analítica en $G$ abierto y sea $\overline{B(a,R)}\subset G$ con $a\in G$. Supongamos que $f$ es inyectiva en $B(a,R)$ y $\Omega=f(B(a,R))$ (abierto), $\gamma(t)=a+Re^{it}$ con $0\leq t\leq2\pi$. Entonces $f^{-1}(w)$ está definida para todo $w\in\Omega$ de la siguiente manera $$f^{-1}(w)=\frac1{2\pi i}\int_\gamma z\,\frac{f'(z)}{f(z)-w}\,dz.$$
>
>>[!Proof]- Aplicación del teorema anterior
>>1. **Cero simple auxiliar.** Para cada $z\in B(a,R)$, sea $\zeta=f(z)\in\Omega$, y para cada $w\in B(a,R)$ consideremos $h(w)=f(w)-\zeta$. Entonces $w=z$ es un cero simple de $h$ y $w=z\notin\{\gamma\}$. Aplicamos el teorema anterior a ``$g(w)=w$'' y ``$f(w)=h(w)=f(w)-\zeta$''.
>>2. **Cálculo.** Como $n(\gamma,z)=1$ dentro de la circunferencia, $$\frac1{2\pi i}\int_\gamma g(w)\frac{h'(w)}{h(w)}\,dw=\frac1{2\pi i}\int_\gamma w\,\frac{f'(w)}{f(w)-\zeta}\,dw=z\,n(\gamma,z)=z=f^{-1}(\zeta).$$
>>3. **Fórmula.** Por tanto para todo $\zeta\in\Omega$ tenemos $$f^{-1}(\zeta)=\frac1{2\pi i}\int_\gamma w\,\frac{f'(w)}{f(w)-\zeta}\,dw.$$

^a14b03

> [!warning] Factor faltante en la foto 4
> En la segunda línea de la demostración las fotos omiten el factor $1/(2\pi i)$ delante de la integral que define $f^{-1}$; la versión de arriba lo restituye. También se escribe $w\in B(a,R)$ donde debe entenderse $w$ variable de integración y $\zeta\in\Omega$ parámetro.

## 5. Teorema de Rouché

>[!theorem] Teorema de Rouché
>Sean $f,g$ meromorfas en $G$ abierto y sea $\overline{B(a,R)}\subset G$. Si $f$ y $g$ no tienen ceros ni polos en $\{\gamma\}$ y cumplen $|f(z)+g(z)|<|f(z)|+|g(z)|$ en $\{\gamma\}$, entonces $$Z_f-P_f=Z_g-P_g,$$ donde $Z_h$ es la cantidad de ceros de $h$ dentro de $\{\gamma\}$ y $P_h$ la cantidad de polos de $h$ dentro de $\{\gamma\}$, contados con multiplicidad.
>
>>[!Proof]- Desarrollo de las fotos 4–5
>>1. **No anulación en la curva.** Como $|f(z)+g(z)|<|f(z)|+|g(z)|$ para todo $z\in\{\gamma\}$ y $g(z)\neq0$ en $\{\gamma\}$, dividimos por $|g(z)|$: $$\left|g(z)\left(\frac{f(z)}{g(z)}+1\right)\right|<|f(z)|+|g(z)|,\qquad |g(z)|\left|\frac{f(z)}{g(z)}+1\right|<|f(z)|+|g(z)|,$$ de donde $$\left|\frac{f(z)}{g(z)}+1\right|<\frac{|f(z)|}{|g(z)|}+1.\qquad (*)$$
>>2. **El cociente evita $[0,\infty)$.** Noten que si $\frac{f(z)}{g(z)}:=\lambda\in[0,\infty)$ entonces por $(*)$ tendríamos $\lambda+1<\lambda+1$, absurdo. Por lo tanto $$\frac{f(z)}{g(z)}\in\mathbb{C}\setminus\{z:z\geq0\}:=G_0.$$
>>3. **Rama del logaritmo.** En $G_0$ definimos una rama del logaritmo con $\arg\in(0,2\pi)$. Como $\{\gamma\}$ es compacto y $G$ abierto, existe $U$ abierto con $U\subset G$ tal que $\{\gamma\}\subset U$ y $\frac{f}{g}(U)\subset G_0$. Luego $\log\frac{f(z)}{g(z)}$ está definido en $U$ y es analítico ahí.
>>4. **Derivada logarítmica del cociente.** Aquí $$\left(\log\frac{f}{g}\right)'=\frac{(f/g)'}{f/g}=\frac{\frac{f'g-fg'}{g^2}}{f/g}=\frac{f'g-fg'}{gf}=\frac{f'}{f}-\frac{g'}{g}.$$ Entonces $$0=\frac1{2\pi i}\int_\gamma\left(\log\frac{f(z)}{g(z)}\right)'dz=\frac1{2\pi i}\int_\gamma\frac{f'(z)}{f(z)}\,dz-\frac1{2\pi i}\int_\gamma\frac{g'(z)}{g(z)}\,dz.$$
>>5. **Principio del argumento.** Por [[FA - Teo14#^a14b01|principio del argumento]], el lado derecho es $(Z_f-P_f)-(Z_g-P_g)$, de donde $Z_f-P_f=Z_g-P_g$.

^a14b04

> [!warning] Derivada faltante en la foto 5
> Las fotos escriben $0=\frac1{2\pi i}\int_\gamma(\log\frac{f(z)}{g(z)})\,dz$ sin la prima; debe ser la derivada $(\log\frac{f}{g})'$ como arriba, pues solo así el integrando es $f'/f-g'/g$ y la integral sobre la curva cerrada nulhomotópica se anula por tener primitiva local.

## 6. Aplicación al Teorema Fundamental del Álgebra

>[!theorem] Otra manera de probar el TFA
>Sea $P(z)\in\mathbb{C}[z]$, $P(z)=z^n+a_{n-1}z^{n-1}+\cdots+a_0$. Entonces $P$ tiene $n$ ceros contando multiplicidad en $\mathbb{C}$; en particular tiene al menos un cero.
>
>>[!Proof]- Por Rouché comparando con $z^n$
>>1. **Comportamiento en el infinito.** Escribimos $$\frac{P(z)}{z^n}=1+\frac{a_{n-1}}{z}+\cdots+\frac{a_0}{z^n}\xrightarrow[|z|\to\infty]{}1.$$ Luego existe $R>0$ tal que $|z|>R$ implica $\left|\frac{P(z)}{z^n}-1\right|<1$.
>>2. **Desigualdad estricta.** Multiplicando por $|z^n|$ y usando $|z^n|\leq|z^n|+|P(z)|$, $$\begin{aligned}|z^n|\left|\frac{P(z)}{z^n}-1\right|<|z^n|\leq|z^n|+|P(z)|.\end{aligned}$$ Como $|z^n|\left|\frac{P(z)}{z^n}-1\right|=|P(z)-z^n|$, resulta $$|P(z)-z^n|<|P(z)|+|z^n|,\qquad |z|>R.$$
>>3. **Rouché en $|z|=R$.** En particular vale para $|z|=R$. Tomando en [[FA - Teo14#^a14b04|teorema de Rouché]] $f=P$ y $g=-z^n$ (de modo que $f+g=P-z^n$), se obtiene $Z_{P(z)}=Z_{z^n}$ en $B(0,R)$, pues no hay polos.
>>4. **Conteo.** Como $z^n$ tiene $n$ ceros ($0$ de multiplicidad $n$), $P(z)$ tiene $n$ ceros en $B(0,R)$. En particular tiene al menos un cero en $\mathbb{C}$.

^a14b05
