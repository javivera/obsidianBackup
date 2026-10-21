# Teo 11 — Desarrollo de Laurent, Casorati–Weierstrass y residuos (13/10/2026)

> [!remark] Fuente y criterio de transcripción
> Transcripción de las cinco fotos compartidas hoy en el grupo de Analíticas. Se conserva el contenido de la clase, se ordenan las demostraciones y se corrigen erratas de índices y signos. Las justificaciones añadidas se señalan cuando completan un argumento que no estaba desarrollado en las fotos.

## Desarrollo de Laurent

>[!remark] Convergencia uniforme de la serie geométrica
>Si $q:E\to\mathbb C$ satisface $|q(w)|\leq c<1$ para todo $w\in E$, con una misma constante $c$, entonces $\sum_{n=0}^{\infty}q(w)^n$ converge absoluta y uniformemente en $E$ a $1/(1-q(w))$.
>
>>[!Proof]- Justificación mediante las colas
>>1. En cada punto, $|q(w)|<1$, de modo que la serie geométrica converge absolutamente y suma $1/(1-q(w))$.
>>2. Para ver la uniformidad, acotamos el error después del término $N$: $$\left|\frac1{1-q(w)}-\sum_{n=0}^{N}q(w)^n\right|\leq\sum_{n=N+1}^{\infty}|q(w)|^n\leq\sum_{n=N+1}^{\infty}c^n=\frac{c^{N+1}}{1-c}\longrightarrow0.$$ La última cota no depende de $w$: el mismo $N$ hace pequeño el error en todos los puntos de $E$ a la vez. Eso es la convergencia uniforme.
>>3. Si multiplicamos la serie por una función $b$ acotada en $E$, con $|b(w)|\leq B$, la cota del error pasa a ser $Bc^{N+1}/(1-c)$, que también tiende a $0$ uniformemente. Por tanto, la serie multiplicada sigue convergiendo absoluta y uniformemente.

^c8e4b2

>[!Theorem] Desarrollo de Laurent
>Sea $f$ analítica en $A=\operatorname{An}(a;R_1,R_2)$, con $0\leq R_1<R_2\leq+\infty$. Entonces $$f(z)=\sum_{n=-\infty}^{\infty}a_n(z-a)^n.$$
>La convergencia es absoluta en $A$ y uniforme en cada subanillo $\operatorname{An}(a;r_1,r_2)$ con $R_1<r_1<r_2<R_2$. Los coeficientes son únicos y están dados por $$a_n=\frac1{2\pi i}\int_{\gamma_r}\frac{f(w)}{(w-a)^{n+1}}\,dw,\qquad n\in\mathbb Z,$$ donde $\gamma_r(t)=a+r e^{2\pi it}$, $0\leq t\leq1$, y $R_1<r<R_2$.
>
>>[!Proof]- Demostración de clase, con detalles de convergencia
>>1. **Independencia del radio.** Si $R_1<\rho_1<\rho_2<R_2$, las circunferencias positivas $\gamma_{\rho_1}$ y $\gamma_{\rho_2}$ son homotópicas en $A$ mediante $$H(s,t)=a+\bigl((1-s)\rho_1+s\rho_2\bigr)e^{2\pi it}.$$
>>2. Para cualquier función $h$ analítica en $A$, [[FA - Teo7#^0ad31e|invariancia por homotopía]] da $$\int_{\gamma_{\rho_1}}h=\int_{\gamma_{\rho_2}}h$$esto se aplica a $h(w)=f(w)/(w-a)^{n+1}$ para todo $n\in\mathbb Z$.
>>3. **Curva auxiliar.** Fijamos $z\in A$ y elegimos $R_1<\rho_1<|z-a|<\rho_2<R_2$. Osea se unen ambas circunferencias mediante un segmento radial $\lambda$ que evita $z$ y se considera $$\delta=\gamma_{\rho_2}+\lambda-\gamma_{\rho_1}-\lambda$$esta curva puede contraerse en $A$; los dos recorridos de $\lambda$ se cancelan en las integrales. Equivalentemente, se puede trabajar directamente con las dos curvas $\gamma_{\rho_2}$ y $-\gamma_{\rho_1}$.
>>4. **Índices.** Para una circunferencia positiva $\gamma_\rho$, distinguimos dos casos:
>>	- **Caso $|w-a|<\rho$.**
>>		1. Trasladamos continuamente el centro desde $a$ hasta $w$, manteniendo el radio $\rho$, mediante $$K(s,t)=a+s(w-a)+\rho e^{2\pi it}.$$ El centro $c_s=a+s(w-a)$ satisface $|c_s-w|=(1-s)|a-w|<\rho$, de modo que $w$ queda estrictamente dentro de cada circunferencia, nunca sobre ella. Así, $K$ es una homotopía en $\mathbb C\setminus\{w\}$ entre $\gamma_\rho$ y $\sigma(t)=w+\rho e^{2\pi it}$.
>>		2. Por [[FA - Teo8#^8a0014|invariancia del índice]] y [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(\gamma_\rho,w)=n(\sigma,w)=\frac1{2\pi i}\int_0^1\frac{2\pi i\rho e^{2\pi it}}{\rho e^{2\pi it}}\,dt=1.$$
>>	- **Caso $|w-a|>\rho$.**
>>		1. La homotopía $$H(s,t)=a+(1-s)\rho e^{2\pi it}$$ contrae $\gamma_\rho$ a $a$ en $G=\mathbb C\setminus\{w\}$, y nunca pasa por $w$, pues $$|H(s,t)-a|\leq\rho<|w-a|.$$
>>		2. Entonces por [[FA - Teo8#^8a0013|índice de una curva homotópica a cero]], $$n(\gamma_\rho,w)=0.$$
>>	- **Aplicación.**
>>		1. Como $|z-a|<\rho_2$, el caso interior da $n(\gamma_{\rho_2},z)=1$; como $|z-a|>\rho_1$, el caso exterior da $n(\gamma_{\rho_1},z)=0$. Así, $$n(\gamma_{\rho_2},z)-n(\gamma_{\rho_1},z)=1-0=1.$$ Si $w\notin A$, entonces $|w-a|\leq R_1<\rho_1$ o bien $|w-a|\geq R_2>\rho_2$; por tanto, la diferencia de índices es, respectivamente, $1-1=0$ o $0-0=0$.
>>2. **Separación en dos integrales.** Como $\rho_1<|z-a|<\rho_2$, el $z$ fijado está en $A$ y fuera de las trazas de ambas curvas. Como la suma de índices es $0$ en $\mathbb C\setminus A$, $f$ es analítica en $A$ y la diferencia de índices en $z$ vale $1$, por [[FA - Teo7#^b4d2a0|FIC v1.5]], $$f(z)=\frac1{2\pi i}\int_{\gamma_{\rho_2}}\frac{f(w)}{w-z}\,dw-\frac1{2\pi i}\int_{\gamma_{\rho_1}}\frac{f(w)}{w-z}\,dw=:f_2(z)-f_1(z).$$
>>3. **Integral exterior.** Para $w\in\{\gamma_{\rho_2}\}$, $|z-a|<|w-a|=\rho_2$, entonces $\frac{|z-a|}{|w-a|}<1$ de modo que la serie geométrica da $$\begin{aligned}\frac1{w-z}&=\frac1{w-a}\frac1{1-\frac{z-a}{w-a}}\\&=\frac{1}{w-a}\sum_{n=0}^{\infty}\left[\frac{z-a}{w-a}\right]^{n}\\&=\sum_{n=0}^{\infty}\frac{(z-a)^n}{(w-a)^{n+1}}.\end{aligned}$$ 
>>4. Como [[FA - Teo11#^c8e4b2|la convergencia es absoluta y uniforme para $w\in\gamma_{\rho_2}$]], porque $\frac{|z-a|}{|w-a|}<1$. Entonces usando el criterio del limite: $$\begin{aligned}f_2(z)&=\frac1{2\pi i}\int_{\gamma_{\rho_2}}\frac{f(w)}{w-z}\,dw\\&=\frac1{2\pi i}\int_{\gamma_{\rho_2}}f(w)\sum_{n=0}^{\infty}\frac{(z-a)^n}{(w-a)^{n+1}}\,dw\\&=\sum_{n=0}^{\infty}\frac1{2\pi i}\int_{\gamma_{\rho_2}}\frac{f(w)(z-a)^n}{(w-a)^{n+1}}\,dw\\&=\sum_{n=0}^{\infty}\left(\frac1{2\pi i}\int_{\gamma_{\rho_2}}\frac{f(w)}{(w-a)^{n+1}}\,dw\right)(z-a)^n\\&=\sum_{n=0}^{\infty}a_n(z-a)^n.\end{aligned}$$
>>5. **Integral interior.** Para $w\in\{\gamma_{\rho_1}\}$, $|w-a|=\rho_1<|z-a|$, y $$\begin{aligned}\frac1{w-z}&=-\frac1{z-a}\frac1{1-\frac{w-a}{z-a}}\\&=-\sum_{j=0}^{\infty}\frac{(w-a)^j}{(z-a)^{j+1}}.\end{aligned}$$ devuelta por [[FA - Teo11#^c8e4b2|La convergencia es absoluta y uniforme]], pues $\left|\frac{w-a}{z-a}\right|=\frac{\rho_1}{|z-a|}<1$ para todo $w$ en la circunferencia. Así analogamente, $$f_1(z)=-\sum_{j=0}^{\infty}\left(\frac1{2\pi i}\int_{\gamma_{\rho_1}}\frac{f(w)}{(w-a)^{-j}}\,dw\right)(z-a)^{-j-1}=-\sum_{n=-\infty}^{-1}a_n(z-a)^n,$$ donde se reindexa con $n=-j-1$.
>>6. **Serie bilateral.** Al restar las dos integrales obtenemos $$f(z)=\sum_{n=0}^{\infty}a_n(z-a)^n+\sum_{n=-\infty}^{-1}a_n(z-a)^n.$$ Por el paso 1, los coeficientes de ambas mitades pueden calcularse en una misma circunferencia positiva de cualquier radio $r\in(R_1,R_2)$.
>>7. **Convergencia uniforme en subanillos respecto a z** Fijamos $R_1<r_1<r_2<R_2$ y elegimos $R_1<\rho_1<r_1<r_2<\rho_2<R_2$. Sean $M_k=\max_{w\in\{\gamma_{\rho_k}\}}|f(w)|$, para $k=1,2$. La fórmula integral y la longitud $2\pi\rho_k$ dan, para $n,j\geq0$, $$|a_n|\leq M_2\rho_2^{-n},\qquad |a_{-j-1}|\leq M_1\rho_1^{j+1}.$$ En el subanillo, $$|a_n(z-a)^n|\leq M_2\left(\frac{r_2}{\rho_2}\right)^n,\qquad |a_{-j-1}(z-a)^{-j-1}|\leq M_1\left(\frac{\rho_1}{r_1}\right)^{j+1}.$$ Ambas mayorantes son series geométricas convergentes; sus colas tienden a cero independientemente de $z$. Esto prueba convergencia absoluta y uniforme de cada mitad.
>>8. **Unicidad — detalle añadido.** Si otro desarrollo con coeficientes $b_n$ tiene las convergencias del enunciado, sobre $\gamma_r$ puede integrarse término a término después de multiplicar por $(w-a)^{-k-1}$. Por parametrización directa, para $n,k\in\mathbb Z$, $$\frac1{2\pi i}\int_{\gamma_r}(w-a)^{n-k-1}\,dw=r^{n-k}\int_0^1e^{2\pi i(n-k)t}\,dt=\begin{cases}1,&n=k,\\0,&n\neq k.\end{cases}$$ Se obtiene $b_k=(2\pi i)^{-1}\int_{\gamma_r}f(w)/(w-a)^{k+1}\,dw=a_k$ para todo $k$.

^a11f01

## Clasificación mediante los coeficientes de Laurent

>[!corollary] Tipo de singularidad y parte principal
>Sea $f$ analítica en $B(a,R)\setminus\{a\}$ y sea $\sum_{n\in\mathbb Z}a_n(z-a)^n$ su desarrollo de Laurent.
>- $a$ es **evitable** si y solo si $a_n=0$ para todo $n<0$.
>- $a$ es un **polo de orden $m$** si y solo si $a_n=0$ para todo $n<-m$ y $a_{-m}\neq0$.
>- $a$ es **esencial** si y solo si hay infinitos índices negativos $n$ con $a_n\neq0$.

^a11c01

> [!info] Demostración no desarrollada en las fotos
> Las tres caracterizaciones se enuncian como corolario. La demostración escrita de la clase corresponde al desarrollo de Laurent, no a este corolario.

## Casorati–Weierstrass

>[!Theorem] Casorati–Weierstrass
>Si $a$ es una singularidad esencial de $f$, entonces, para todo $\delta>0$ suficientemente pequeño, $$\overline{f\bigl(B(a,\delta)\setminus\{a\}\bigr)}=\mathbb C.$$ Es decir, la imagen de cualquier disco perforado suficientemente pequeño es densa en $\mathbb C$.
>
>>[!Proof]- Demostración de clase
>>1. Supongamos que, para algún $\delta>0$, la imagen no es densa. Existen $c\in\mathbb C$ y $\varepsilon>0$ tales que $$|f(z)-c|\geq\varepsilon\qquad(0<|z-a|<\delta).$$ Definimos $h(z)=(f(z)-c)/(z-a)$ en ese disco perforado; es analítica allí por [[FA - Teo2#^e54e60|reglas de derivación]].
>>2. Tenemos $$|h(z)|=\frac{|f(z)-c|}{|z-a|}\geq\frac{\varepsilon}{|z-a|}\xrightarrow[z\to a]{}+\infty.$$ Por [[FA - Teo10#^a10d03|polo]], $h$ tiene un polo en $a$. Sea $m\geq1$ su orden. Por [[FA - Teo10#^a10b02|representación de una función con un polo]] y [[FA - Teo10#^a10b03|numerador no nulo en el polo]], $g(z)=(z-a)^m h(z)$ admite una extensión analítica con $g(a)\neq0$.
>>3. Para $z\neq a$, $$g(z)=(z-a)^{m-1}(f(z)-c),\qquad f(z)=c+\frac{g(z)}{(z-a)^{m-1}}.$$
>>4. Si $m=1$, la expresión es $f(z)=c+g(z)$, por lo que $f$ se extiende analíticamente a $a$; contradice que $a$ sea esencial.
>>5. Si $m>1$, escribimos $$f(z)=\frac{g(z)+c(z-a)^{m-1}}{(z-a)^{m-1}}.$$ El numerador es analítico y su valor en $a$ es $g(a)\neq0$. Por [[FA - Teo10#^a10e04|reconocer un polo y su orden]], $a$ es un polo de orden $m-1$ de $f$, otra contradicción.

^a11f02

## Parte singular y fracciones simples

### Parte singular en un polo

>[!Remark]
>Si $a$ es un polo de orden $m$, por [[FA - Teo10#^a10b04|descomposición cerca de un polo]] y [[FA - Teo11#^a11c01|clasificación por Laurent]], $$f(z)=\underbrace{\frac{a_{-m}}{(z-a)^m}+\cdots+\frac{a_{-1}}{z-a}}_{\text{parte singular}}+g(z),$$ donde $g$ es analítica también en $a$. En las fotos esta observación aparece después de Casorati–Weierstrass con la indicación «esto iba antes».

### Funciones racionales

>[!Remark]
>Sea $$r(z)=\frac{p(z)}{q(z)},\qquad p,q\in\mathbb C[z],$$ con $q\not\equiv0$ y sin ceros comunes.
>Los ceros de $q$ son polos de $r$, y el orden de cada polo coincide con la multiplicidad del correspondiente cero de $q$. En efecto, si $a$ tiene multiplicidad $m$, escribimos $$q(z)=(z-a)^m q_1(z),\qquad q_1(a)\neq0,\qquad r(z)=\frac{p(z)/q_1(z)}{(z-a)^m}.$$el numerador es analítico cerca de $a$ y no se anula allí, pues $p(a)\neq0$; aplicamos [[FA - Teo10#^a10e04|reconocer un polo y su orden]].
>
>Sean $a_1,\ldots,a_N$ los ceros distintos de $q$, de multiplicidades $m_1,\ldots,m_N$. Para cada polo retiramos su parte singular $$s_j(z)=\sum_{k=1}^{m_j}\frac{c_{j,k}}{(z-a_j)^k}.$$
>En un disco perforado alrededor de $a_1$, $r=s_1+r_1$ con $r_1$ analítica también en $a_1$. Si $a_2\neq a_1$, $s_1$ es analítica cerca de $a_2$, por lo que retirarla no cambia la parte singular en $a_2$. Repetimos el procedimiento y obtenemos la descomposición en **fracciones simples**: $$r(z)=\sum_{j=1}^{N}s_j(z)+P(z),$$ donde $P$ es un polinomio.

> [!remark] Justificación del término polinómico — detalle añadido
> La diferencia $r-\sum_j s_j$ sigue siendo racional y no tiene polos finitos. Al escribirla como cociente de polinomios sin factores comunes, el denominador no tiene ceros; por el teorema fundamental del álgebra es constante. Si $\deg p<\deg q$, tanto $r$ como cada $s_j$ tienden a $0$ en el infinito, por lo que $P=0$. Si $\deg p=\deg q$, $P$ puede ser una constante no nula; si $\deg p>\deg q$, tiene grado positivo. Esto precisa la anotación de las fotos acerca del término polinómico.

## Residuos

### Motivación

>[!Remark]
>Si $f$ tiene una singularidad evitable en $a$, su extensión analítica a un disco tiene integral nula sobre toda curva cerrada contenida en ese disco, por [[FA - Teo10#^a10b01|integrales cerradas de una extensión]]. Para una singularidad no evitable, el desarrollo de Laurent permite identificar el término que contribuye a la integral.
>Por [[FA - Teo11#^a11f01|desarrollo de Laurent]], el coeficiente de $(z-a)^{-1}$ es $$a_{-1}=\frac1{2\pi i}\int_{\gamma_r}f(w)\,dw.$$

>[!Definition] Residuo
>Sea $a$ una singularidad aislada de $f$ y sea $$f(z)=\sum_{n=-\infty}^{\infty}a_n(z-a)^n$$ su desarrollo de Laurent cerca de $a$. Se llama **residuo de $f$ en $a$** al coeficiente $a_{-1}$ y se escribe $$\operatorname{Res}(f,a)=a_{-1}.$$

^a11d01

### Teorema de los residuos

>[!Theorem] Teorema de los residuos
>Sean $G$ una región y $a_1,\ldots,a_m\in G$ puntos distintos. Sea $f$ analítica en $G\setminus\{a_1,\ldots,a_m\}$. Si $\gamma$ es una curva cerrada rectificable en ese conjunto y $\gamma\simeq_G0$, entonces $$\frac1{2\pi i}\int_\gamma f(z)\,dz=\sum_{k=1}^{m}n(\gamma,a_k)\operatorname{Res}(f,a_k).$$
>
>>[!Proof]- Demostración de clase
>>1. Definimos $\nu_k=n(\gamma,a_k)$. Elegimos radios $r_k>0$ tan pequeños que los discos cerrados $\overline{B(a_k,r_k)}$ estén contenidos en $G$, sean disjuntos dos a dos y no intersecten la traza de $\gamma$. Esto es posible porque hay finitos puntos distintos y la traza de $\gamma$ es compacta y no contiene ninguno de ellos.
>>2. **Curvas auxiliares.** Tomamos $$\delta_k(t)=a_k+r_k e^{-2\pi i\nu_k t},\qquad0\leq t\leq1.$$ Por [[FA - Teo6#^1e9a3c|índice de una curva]], $$n(\delta_k,a_k)=\frac1{2\pi i}\int_0^1\frac{-2\pi i\nu_k r_k e^{-2\pi i\nu_k t}}{r_k e^{-2\pi i\nu_k t}}\,dt=-\nu_k.$$
>>3. Si $j\neq k$, por el paso 1, $a_j$ está fuera de $\overline{B(a_k,r_k)}$, que contiene la traza de $\delta_k$. Por tanto, $a_j$ pertenece a la componente no acotada del complemento de esa traza y, por [[FA - Teo6#^c6a183|índice en la componente no acotada]], $n(\delta_k,a_j)=0$. Por tanto, para cada $j$, $$n(\gamma,a_j)+\sum_{k=1}^{m}n(\delta_k,a_j)=\nu_j-\nu_j=0.$$ osea la suma de indices $\gamma,\delta _{1},\ldots,\delta _{m}$ se anula en $a_{1},\ldots,a_{m}$ 
>>4. Para $w\notin G$, [[FA - Teo8#^8a0013|índice de homotopía a cero]] da $n(\gamma,w)=0$. Como $\overline{B(a_k,r_k)}\subset G$, el punto $w$ está fuera del disco que contiene la traza de $\delta_k$, y por tanto pertenece a la componente no acotada de $\mathbb C\setminus\{\delta_k\}$. Por [[FA - Teo6#^c6a183|índice en la componente no acotada]], $n(\delta_k,w)=0$ para cada $k$. Osea la suma de indices se anula en todo el complemento de $G$ 
>>5. Juntando 3. y 4. la suma de índices de $\gamma,\delta_1,\ldots,\delta_m$ se anula en todo el complemento de $G\setminus\{a_1,\ldots,a_m\}$.
>>6. Aplicamos [[FA - Teo7#^c9f031|Cauchy v1]] a esas curvas y a $f$, analítica en la región perforada: $$\int_\gamma f(z)\,dz+\sum_{k=1}^{m}\int_{\delta_k}f(z)\,dz=0.$$ Por tanto, $$\int_\gamma f(z)\,dz=-\sum_{k=1}^{m}\int_{\delta_k}f(z)\,dz.$$
>>7. **Cálculo local.** Fijamos $k$ y escribimos el desarrollo de Laurent alrededor de $a_k$: $$f(z)=\sum_{n=-\infty}^{\infty}b_n(z-a_k)^n.$$ Como $\overline{B(a_k,r_k)}$ es compacto y está contenido en el abierto $G\setminus\{a_j:j\neq k\}$, existe $R>r_k$ tal que $f$ es analítica en $0<|z-a_k|<R$. Elegimos $0<\rho_1<r_k<\rho_2<R$. Por [[FA - Teo11#^a11f01|desarrollo de Laurent]], la serie converge uniformemente en el subanillo $\rho_1<|z-a_k|<\rho_2$ y, por tanto, sobre la traza de $\delta_k$, contenida en él. Por [[FA - Teo4#^5d2a91|paso al límite bajo la integral]], podemos integrar término a término: $$\int_{\delta_k}f(z)\,dz=\sum_{n=-\infty}^{\infty}b_n\int_{\delta_k}(z-a_k)^n\,dz.$$
>>8. Para $n\neq-1$, la función $(z-a_k)^n$ tiene la primitiva $(z-a_k)^{n+1}/(n+1)$ en $\mathbb C\setminus\{a_k\}$. Entonces, por [[FA - Teo4#^b47e92|integral sobre curvas cerradas]], su integral sobre la curva cerrada $\delta_k$ es $0$. 
>>9. Para $n=-1$, [[FA - Teo6#^1e9a3c|índice de una curva]] da $$\int_{\delta_k}\frac{dz}{z-a_k}=2\pi i\,n(\delta_k,a_k)=-2\pi i\nu_k.$$ Entonces se mueren casi todos los terminos de la suma y por [[FA - Teo11#^a11d01|residuo]], $$\int_{\delta_k}f(z)\,dz=-2\pi i\nu_k\operatorname{Res}(f,a_k).$$
>>10. **Conclusión.** Sustituyendo en el paso 6, $$\begin{aligned}\frac1{2\pi i}\int_\gamma f(z)\,dz&=-\frac1{2\pi i}\sum_{k=1}^{m}\int_{\delta_k}f(z)\,dz\\&=\sum_{k=1}^{m}\nu_k\operatorname{Res}(f,a_k)\\&=\sum_{k=1}^{m}n(\gamma,a_k)\operatorname{Res}(f,a_k).\end{aligned}$$

^a11f03

## Fotos originales

![[Adjuntos/FA-Teo11/1.jpg]]

![[Adjuntos/FA-Teo11/2.jpg]]

![[Adjuntos/FA-Teo11/3.jpg]]

![[Adjuntos/FA-Teo11/4.jpg]]

![[Adjuntos/FA-Teo11/5.jpg]]
