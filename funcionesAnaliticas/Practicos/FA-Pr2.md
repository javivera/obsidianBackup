>[!Exercise]
>Demostrar que $$\lim_{n\to\infty}n^{1/n}=1.$$
>>[!Proof]-
>>1. Escribimos $$n^{1/n}=e^{\frac{\log n}{n}}.$$
>>2. Basta calcular el límite del exponente: $$\lim_{n\to\infty}\frac{\log n}{n}.$$
>>3. Considerando primero la función real corres pondiente y aplicando L'Hôpital, $$\lim_{x\to\infty}\frac{\log x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=\lim_{x\to\infty}\frac1x=0.$$
>>4. Por lo tanto, $$\lim_{n\to\infty}\frac{\log n}{n}=0.$$
>>5. Por continuidad de la función exponencial, $$\lim_{n\to\infty}n^{1/n}=\lim_{n\to\infty}e^{\frac{\log n}{n}}=e^0=1.$$

>[!Exercise]
>Usando la definición de derivada, determinar dónde existe $f'(z)$ y calcularla:
>- (a) $f(z)=|z|$.
>- (b) $f(z)=3\operatorname{Re}(z)+4\operatorname{Im}(z)i$.
>- (c) $f(z)=\dfrac{z-1}{z^{2}+1}$.
>>[!Proof]-
>>- **(a)** La derivada no existe en ningún punto. Veamoslo, el cociente incremental es $$\frac{f(z+h)-f(z)}{h}=\frac{|z+h|-|z|}{h}.$$
>>	- **En $z=0$.** El cociente se reduce a $\dfrac{|h|}{h}$.
>>		1. Si $h=t\in\mathbb{R}_{>0}$, entonces $\dfrac{|h|}{h}=1$.
>>		2. Si $h=it$ con $t\in\mathbb{R}_{>0}$, entonces $\dfrac{|h|}{h}=\dfrac{t}{it}=-i$.
>>		3. Los límites direccionales no coinciden, de modo que $f'(0)$ no existe.
>>	- **En $z\neq 0$.**
>>		1. Racionalizamos el numerador: $$\frac{|z+h|-|z|}{h}=\frac{|z+h|^{2}-|z|^{2}}{h\bigl(|z+h|+|z|\bigr)}.$$
>>		2. Como $|w|^{2}=w\overline{w}$, $$|z+h|^{2}-|z|^{2}=(z+h)(\overline{z}+\overline{h})-z\overline{z}=z\overline{h}+h\overline{z}+h\overline{h} ,$$y por lo tanto $$\frac{|z+h|-|z|}{h}=\frac{z\dfrac{\overline{h}}{h}+\overline{z}+\overline{h}}{|z+h|+|z|}.$$
>>		3. El denominador tiende a $2|z|\neq 0$ cuando $h\to 0$. El término $\overline{h}/h$ depende de la dirección, igual que en el contraejemplo de $\overline{z}$.
>>		4. Si $h=t\in\mathbb{R}\setminus\{0\}$, entonces $\overline{h}/h=1$ y el cociente tiende a $$\frac{z+\overline{z}}{2|z|}=\frac{\operatorname{Re}z}{|z|}.$$
>>		5. Si $h=it$ con $t\in\mathbb{R}\setminus\{0\}$, entonces $\overline{h}/h=-1$ y el cociente tiende a $$\frac{-z+\overline{z}}{2|z|}=-i\frac{\operatorname{Im}z}{|z|}.$$
>>		6. Un número real coincide con uno imaginario puro si y solo si ambos son $0$. Eso fuerza $\operatorname{Re}z=\operatorname{Im}z=0$, o sea $z=0$, que está excluido.
>>		7. Luego los dos límites direccionales son distintos y $f'(z)$ no existe.
>>	Así, $f(z)=|z|$ no es diferenciable en ningún $z\in\mathbb{C}$.
>>
>>- **(b)** La derivada no existe en ningún punto. Como $f(z+h)-f(z)=3\operatorname{Re}(h)+4i\operatorname{Im}(h)$, el cociente incremental no depende de $z$: $$\frac{f(z+h)-f(z)}{h}=\frac{3\operatorname{Re}(h)+4i\operatorname{Im}(h)}{h}.$$ En particular vale lo mismo en $z=0$, donde $f(0)=0$ y el cociente es otra vez $\bigl(3\operatorname{Re}h+4i\operatorname{Im}h\bigr)/h$.
>>	1. Si $h=t\in\mathbb{R}\setminus\{0\}$, entonces $\operatorname{Im}h=0$ y el cociente es $3$.
>>	2. Si $h=it$ con $t\in\mathbb{R}\setminus\{0\}$, entonces $\operatorname{Re}h=0$ y el cociente es $$\frac{4it}{it}=4.$$
>>	3. Como $3\neq 4$, los límites direccionales no coinciden. Así $f'(z)$ no existe para ningún $z\in\mathbb{C}$, incluido $z=0$.
>>- **(c)** La función está definida en $\mathbb{C}\setminus\{i,-i\}$, pues $z^{2}+1=0$ si y solo si $z=\pm i$. En esos puntos $f$ no está definida, así que $f'$ tampoco. Fijemos $z\neq\pm i$ y $h\neq 0$ con $z+h\neq\pm i$. El cociente incremental es $$\frac{f(z+h)-f(z)}{h}=\frac1h\left(\frac{z+h-1}{(z+h)^{2}+1}-\frac{z-1}{z^{2}+1}\right)=\frac{(z+h-1)(z^{2}+1)-(z-1)\bigl((z+h)^{2}+1\bigr)}{h\bigl((z+h)^{2}+1\bigr)(z^{2}+1)}.$$
>>	1. El numerador se reescribe como $$(z-1+h)(z^{2}+1)-(z-1)\bigl((z+h)^{2}+1\bigr)=(z-1)\bigl(z^{2}+1-((z+h)^{2}+1)\bigr)+h(z^{2}+1).$$
>>	2. Como $(z+h)^{2}+1=z^{2}+2zh+h^{2}+1$, el paréntesis vale $-h(2z+h)$. Luego el numerador es $$h\bigl(-(z-1)(2z+h)+z^{2}+1\bigr).$$
>>	3. Cancelando $h\neq 0$, $$\frac{f(z+h)-f(z)}{h}=\frac{-(z-1)(2z+h)+z^{2}+1}{\bigl((z+h)^{2}+1\bigr)(z^{2}+1)}.$$
>>	4. Al hacer $h\to 0$ el denominador tiende a $(z^{2}+1)^{2}\neq 0$ y se obtiene $$f'(z)=\frac{-2z(z-1)+z^{2}+1}{(z^{2}+1)^{2}}=\frac{-z^{2}+2z+1}{(z^{2}+1)^{2}}.$$
>>Así $f$ es diferenciable en $\mathbb{C}\setminus\{i,-i\}$ y $f'(z)=\dfrac{-z^{2}+2z+1}{(z^{2}+1)^{2}}$.

>[!Exercise]
>Estudiar la derivabilidad de las siguientes funciones:
>- (i) $f(z)=|z|^2=x^2+y^2$.
>- (ii) $f(z)=\overline z$.
>
>>[!Proof]-
>>- (i)
>>	1. Para (i), sea $z_0=x+iy$ y $h=h_1+ih_2$.
>>	2. Entonces $$\frac{f(z_0+h)-f(z_0)}{h}=\frac{(x+h_1)^2+(y+h_2)^2-(x^2+y^2)}{h_1+ih_2}=\frac{2xh_1+h_1^2+2yh_2+h_2^2}{h_1+ih_2}.$$
>>	3. Tomando $h=(t,0)$, es decir $h=t$, obtenemos $$\frac{2xt+t^2}{t}=2x+t\longrightarrow2x.$$
>>	4. Tomando $h=(0,t)$, es decir $h=it$, obtenemos $$\frac{2yt+t^2}{it}=\frac{2y+t}{i}\longrightarrow-2iy.$$
>>	5. Si el límite existe, ambos límites deben coincidir, por lo que $$2x=-2iy.$$
>>	6. Como $x,y\in\mathbb R$, necesariamente $$x=y=0.$$
>>	7. Por lo tanto, el único punto donde la derivada puede existir es el origen.
>>	8. En $z_0=0$ tenemos $$\frac{f(h)-f(0)}{h}=\frac{|h|^2}{h}=\overline h\longrightarrow0.$$
>>	9. Luego $$f'(0)=0,$$ por lo que $f(z)=|z|^2$ es derivable únicamente en $z=0$.
>>- (ii)
>>	1. sea $z_0\in\mathbb C$. Entonces $$\frac{f(z_0+h)-f(z_0)}{h}=\frac{\overline{z_0+h}-\overline{z_0}}{h}=\frac{\overline h}{h}.$$
>>	2. Tomando $h=t$ con $t\in\mathbb R$, obtenemos $$\frac{\overline t}{t}=1.$$
>>	3. Tomando $h=it$ con $t\in\mathbb R$, obtenemos $$\frac{\overline{it}}{it}=-1.$$
>>	4. Como los límites por ambos caminos son distintos, $$\lim_{h\to0}\frac{\overline h}{h}\text{ no existe}.$$
>>	5. Por lo tanto, $$f(z)=\overline z\text{ no es derivable en ningún punto de }\mathbb C.$$

>[!Exercise] Ejercicio 4
>Sean $f$ y $g$ funciones diferenciables (analíticas). Probar que:
>- **(i)** $f+g$ es diferenciable (analítica) y $(f+g)'(z)=f'(z)+g'(z)$.
>- **(ii)** $fg$ es diferenciable (analítica) y $(fg)'(z)=f'(z)g(z)+f(z)g'(z)$.
>- **(iii)** Si $g\ne0$, entonces $f/g$ es diferenciable (analítica) y $$\left(\frac fg\right)'(z)=\frac{f'(z)g(z)-f(z)g'(z)}{(g(z))^2}.$$

>[!Exercise]
>Probar que $$\cos(z)=\frac12\bigl(e^{iz}+e^{-iz}\bigr)\qquad\text{y}\qquad\operatorname{sen}(z)=\frac1{2i}\bigl(e^{iz}-e^{-iz}\bigr).$$
>>[!Proof]-
>>Usamos las definiciones por series $$e^{w}=\sum_{n=0}^{\infty}\frac{w^{n}}{n!},\qquad\cos z=\sum_{k=0}^{\infty}(-1)^{k}\frac{z^{2k}}{(2k)!},\qquad\operatorname{sen} z=\sum_{k=0}^{\infty}(-1)^{k}\frac{z^{2k+1}}{(2k+1)!}.$$
>>6. Para cada $k\geq 0$, $$(iz)^{2k}=i^{2k}z^{2k}=(i^{2})^{k}z^{2k}=(-1)^{k}z^{2k},$$ $$(iz)^{2k+1}=i^{2k+1}z^{2k+1}=i^{2k}\,i\,z^{2k+1}=(-1)^{k}iz^{2k+1}.$$
>>7. Separando la serie de $e^{iz}$ en términos pares e impares, $$\begin{aligned}e^{iz}&=\sum_{n=0}^{\infty}\frac{(iz)^{n}}{n!}=\sum_{k=0}^{\infty}\frac{(iz)^{2k}}{(2k)!}+\sum_{k=0}^{\infty}\frac{(iz)^{2k+1}}{(2k+1)!}\\&=\sum_{k=0}^{\infty}(-1)^{k}\frac{z^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}(-1)^{k}\frac{z^{2k+1}}{(2k+1)!}\\&=\cos z+i\operatorname{sen} z.\end{aligned}$$
>>8. Reemplazando $z$ por $-z$ (o calculando análogamente con $-iz$), y usando que $\cos$ es par y $\operatorname{sen}$ es impar, $$e^{-iz}=\cos(-z)+i\operatorname{sen}(-z)=\cos z-i\operatorname{sen} z.$$
>>9. Sumando y restando, $$e^{iz}+e^{-iz}=2\cos z,\qquad e^{iz}-e^{-iz}=2i\operatorname{sen} z.$$
>>10. Dividiendo, $$\cos z=\frac{e^{iz}+e^{-iz}}{2},\qquad\operatorname{sen} z=\frac{e^{iz}-e^{-iz}}{2i}.$$

>[!Exercise]
>Probar que las series que definen $\cos(z)$ y $\operatorname{sen}(z)$ tienen radio de convergencia $R=\infty$.
>>[!Proof]-
>>- **Coseno.** $\displaystyle\cos z=\sum_{k=0}^{\infty}a_k z^{2k}$ con $a_k=\dfrac{(-1)^{k}}{(2k)!}$. Entonces $$\lim_{k\to\infty}\frac{|a_k|}{|a_{k+1}|}=\lim_{k\to\infty}\frac{(2k+2)!}{(2k)!}=\lim_{k\to\infty}(2k+1)(2k+2)=\infty.$$ Por el [[FA - Teo1#^049a6c|criterio del cociente]], $R=\infty$.
>>- **Seno.** $\displaystyle\operatorname{sen} z=\sum_{k=0}^{\infty}b_k z^{2k+1}$ con $b_k=\dfrac{(-1)^{k}}{(2k+1)!}$. Entonces $$\lim_{k\to\infty}\frac{|b_k|}{|b_{k+1}|}=\lim_{k\to\infty}\frac{(2k+3)!}{(2k+1)!}=\lim_{k\to\infty}(2k+2)(2k+3)=\infty.$$ Por el criterio del cociente, $R=\infty$.

>[!Exercise]
>Demostrar que $(\cos z)'=-\operatorname{sen} z$ y $(\operatorname{sen} z)'=\cos z$.
>>[!Proof]-
>>- **$(\cos z)'=-\operatorname{sen} z$.** Usamos $\cos w=\dfrac{e^{iw}+e^{-iw}}{2}$ y $e^{i(z+h)}=e^{iz}e^{ih}$, $e^{-i(z+h)}=e^{-iz}e^{-ih}$.
>>	1. El cociente incremental es $$\frac{\cos(z+h)-\cos z}{h}=\frac1{2h}\Bigl(e^{iz}e^{ih}+e^{-iz}e^{-ih}-e^{iz}-e^{-iz}\Bigr)=\frac12\left(e^{iz}\frac{e^{ih}-1}{h}+e^{-iz}\frac{e^{-ih}-1}{h}\right).$$
>>	2. Como $(e^{w})'=e^{w}$, se tiene $(e^{w})'(0)=\lim\limits_{ w \to 0 }\dfrac{e^{w}-1}{w}= 1$ cuando $w\to 0$. Luego $$\frac{e^{ih}-1}{h}=\frac{e^{ih}-1}{ih}\cdot i\xrightarrow{h\to 0}i,\qquad\frac{e^{-ih}-1}{h}=\frac{e^{-ih}-1}{-ih}\cdot(-i)\xrightarrow{h\to 0}-i.$$
>>	3. Por lo tanto $$(\cos z)'=\frac12\bigl(e^{iz}\cdot i+e^{-iz}\cdot(-i)\bigr)=\frac i2\bigl(e^{iz}-e^{-iz}\bigr).$$
>>	4. Como $\operatorname{sen} z=\dfrac{e^{iz}-e^{-iz}}{2i}$, resulta $$\frac i2\bigl(e^{iz}-e^{-iz}\bigr)=i^{2}\operatorname{sen} z=-\operatorname{sen} z.$$
>>- **$(\operatorname{sen} z)'=\cos z$.**
>>	1. El cociente incremental es $$\frac{\operatorname{sen}(z+h)-\operatorname{sen} z}{h}=\frac1{2ih}\Bigl(e^{iz}e^{ih}-e^{-iz}e^{-ih}-e^{iz}+e^{-iz}\Bigr)=\frac1{2i}\left(e^{iz}\frac{e^{ih}-1}{h}-e^{-iz}\frac{e^{-ih}-1}{h}\right).$$
>>	2. Usando los límites anteriores, $$(\operatorname{sen} z)'=\frac1{2i}\bigl(e^{iz}\cdot i-e^{-iz}\cdot(-i)\bigr)=\frac12\bigl(e^{iz}+e^{-iz}\bigr)=\cos z.$$

>[!Exercise]
>Describir los siguientes conjuntos:
>- **(i)** $\{z\in\mathbb C\mid e^z=i\}$.
>- **(ii)** $\{z\in\mathbb C\mid e^z=-1\}$.
>- **(iii)** $\{z\in\mathbb C\mid e^z=-i\}$.
>- **(iv)** $\left\{z\in\mathbb C\mathrel{\big|}e^z=-\dfrac{1}{\sqrt2}(1+i)\right\}$.
>- **(v)** $\{z\in\mathbb C\mid \cos(z)=0\}$.
>- **(vi)** $\{z\in\mathbb C\mid \operatorname{sen}(z)=0\}$.
>>[!Proof]-
>>Escribimos $z=x+iy$, donde $x,y\in\mathbb R$. Entonces $e^z=e^x e^{iy}$, por lo que $|e^z|=e^x$ y $\arg(e^z)=y$ módulo $2\pi$.
>>- **(i)** Como $|i|=1$ y $\arg(i)=\frac{\pi}{2}$, se obtiene $x=0$ e $y=\frac{\pi}{2}+2k\pi$. Por tanto, $$\{z\in\mathbb C\mid e^z=i\}=\left\{\frac{\pi i}{2}+2k\pi i\mid k\in\mathbb Z\right\}.$$
>>- **(ii)** Como $|-1|=1$ y $\arg(-1)=\pi$, se obtiene $x=0$ e $y=\pi+2k\pi$. Por tanto, $$\{z\in\mathbb C\mid e^z=-1\}=\left\{\pi i+2k\pi i\mid k\in\mathbb Z\right\}.$$
>>- **(iii)** Como $|-i|=1$ y $\arg(-i)=-\frac{\pi}{2}$, se obtiene $x=0$ e $y=-\frac{\pi}{2}+2k\pi$. Por tanto, $$\{z\in\mathbb C\mid e^z=-i\}=\left\{-\frac{\pi i}{2}+2k\pi i\mid k\in\mathbb Z\right\}.$$
>>- **(iv)** El módulo de $-\frac{1}{\sqrt2}(1+i)$ es $1$ y su argumento es $-\frac{3\pi}{4}$. Así, $x=0$ e $y=-\frac{3\pi}{4}+2k\pi$, y $$\left\{z\in\mathbb C\mathrel{\big|}e^z=-\frac{1}{\sqrt2}(1+i)\right\}=\left\{-\frac{3\pi i}{4}+2k\pi i\mid k\in\mathbb Z\right\}.$$
>>- **(v)** Por las fórmulas exponenciales, $$\cos z=\frac12\bigl(e^{iz}+e^{-iz}\bigr)=0\iff e^{2iz}=-1.$$ Si $z=x+iy$, entonces $-1=e^{2iz}=e^{-2y}e^{2ix}$. Su módulo exige $y=0$ y su argumento exige $2x=\pi+2k\pi$. Por tanto, $$\{z\in\mathbb C\mid \cos(z)=0\}=\left\{\frac{\pi}{2}+k\pi\mid k\in\mathbb Z\right\}.$$
>>- **(vi)** Análogamente, $$\operatorname{sen}z=\frac{1}{2i}\bigl(e^{iz}-e^{-iz}\bigr)=0\iff e^{2iz}=1.$$ El módulo exige $y=0$ y el argumento exige $2x=2k\pi$. Por tanto, $$\{z\in\mathbb C\mid \operatorname{sen}(z)=0\}=\{k\pi\mid k\in\mathbb Z\}.$$

>[!Exercise]
>Sean $z=re^{i\theta}$ y $z_n=r_ne^{i\theta_n}$, con $-\pi<\theta,\theta_n<\pi$ y $n\in\mathbb N$, elementos en $G=\mathbb C\setminus\{z\in\mathbb R\mid z\le0\}$, tales que $z_n\to z$. Probar que:
>- **(i)** $\theta_n\to\theta$ y $r_n\to r$.
>- **(ii)** La rama principal del logaritmo es continua en $G$.
>>[!Proof]-
>>- **(i)**
>>1. Como $z_n\to z$ y la función módulo es continua, $$r_n=|z_n|\longrightarrow |z|=r.$$
>>2. Para estudiar los argumentos, como $\theta_n\in(-\pi,\pi)$, la sucesión $(\theta_n)$ es acotada. Tomemos una subsucesión convergente $\theta_{n_j}\to\alpha$, con $\alpha\in[-\pi,\pi]$. Entonces $r_{n_j}\to r$ y, por la continuidad de la función exponencial, $$z_{n_j}=r_{n_j}e^{i\theta_{n_j}}\longrightarrow re^{i\alpha}.$$
>>3. Pero $z_{n_j}\to z=re^{i\theta}$. Por unicidad del límite, $$re^{i\alpha}=re^{i\theta}.$$
>>4. Como $r>0$, se sigue que $$e^{i\alpha}=e^{i\theta},$$ de donde $\alpha-\theta=2k\pi$ para algún $k\in\mathbb Z$.
>>5. Los casos $\alpha=\pi$ y $\alpha=-\pi$ son imposibles, pues entonces $$re^{i\alpha}=-r\in(-\infty,0],$$ contradiciendo que $z\in G$. Así, $\alpha\in(-\pi,\pi)$.
>>6. Como también $\theta\in(-\pi,\pi)$, se tiene $\alpha-\theta\in(-2\pi,2\pi)$. El único múltiplo de $2\pi$ en ese intervalo es $0$, luego $\alpha=\theta$.
>>7. Hemos probado que toda subsucesión convergente de $(\theta_n)$ converge a $\theta$. Si $(\theta_n)$ no convergiera a $\theta$, existiría una subsucesión $(\theta_{n_j})$ tal que $|\theta_{n_j}-\theta|\ge\varepsilon$ para algún $\varepsilon>0$. Por Bolzano–Weierstrass, esta subsucesión tendría una subsucesión convergente, cuyo límite no podría ser $\theta$, contradiciendo el paso anterior. Por tanto, $$\theta_n\longrightarrow\theta.$$
>>- **(ii)** Escribimos la rama principal del logaritmo como $$\operatorname{Log}(z)=\ln|z|+i\operatorname{Arg}(z).$$ Como $r_n\to r>0$ y la función $\ln$ es continua en $(0,\infty)$, $$\ln|z_n|=\ln r_n\longrightarrow\ln r=\ln|z|.$$ Además, por (i), $$\operatorname{Arg}(z_n)=\theta_n\longrightarrow\theta=\operatorname{Arg}(z).$$ Por lo tanto, $$\operatorname{Log}(z_n)=\ln r_n+i\theta_n\longrightarrow\ln r+i\theta=\operatorname{Log}(z).$$ Como $(z_n)$ era una sucesión arbitraria con $z_n\to z$, por el criterio secuencial de continuidad, la rama principal del logaritmo es continua en $G$.

>[!Exercise]
>Sean $G$ un abierto conexo, $n\in\mathbb Z$ y $f:G\to\mathbb C$ una rama del logaritmo. Probar que $$z^n=\exp(nf(z)),\qquad\text{para todo }z\in G.$$
>>[!Proof]-
>>1. Por definición de rama del logaritmo, para todo $z\in G$ vale $$e^{f(z)}=z.$$
>>2. Usamos la propiedad $$e^{nw}=\left(e^{w}\right)^n,\qquad w\in\mathbb C,\ n\in\mathbb Z.$$ Vale para $n\in\mathbb N$ porque $e^{z+w}=e^z e^w$ para todo $z,w\in \mathbb{C}$. Para $n=0$ es trivial.
>>3. Para $n=-m<0$, corremos el signo a la base y aplicamos el caso positivo a $-w$: $$e^{-mw}=e^{m(-w)}=\left(e^{-w}\right)^m.$$ Como $e^{w}e^{-w}=e^0=1$, se tiene $e^{-w}=(e^w)^{-1}$, luego $$\left(e^{-w}\right)^m=\left((e^w)^{-1}\right)^m=\left(e^w\right)^{-m}.$$
>>4. Aplicándola con $w=f(z)$ y usando el paso 1, $$e^{nf(z)}=\left(e^{f(z)}\right)^n=z^n.$$

>[!Exercise]
>(i) Sean $X$ e $Y$ conjuntos no vacíos y sea $g:X\to Y$ una función tal que $g\circ f=\operatorname{Id}_Y$. Probar que $$\{z\in X:(f\circ g)(z)=z\}=\operatorname{Im}(f)$$
>(ii) Sean $G$ un abierto conexo y $f:G\to\mathbb{C}$ una rama del logaritmo. Deducir a partir del inciso anterior que $$\{z\in\mathbb{C}:f(e^z)=z\}=\operatorname{Im}(f)$$
>>[!Proof]-
>>- **(i)** (Aquí $f:Y\to X$, para que $g\circ f=\operatorname{Id}_Y$ tenga sentido.)
>>	1. **Inclusión $\subseteq$.** Sea $z\in X$ con $(f\circ g)(z)=z$. Entonces $z=f(g(z))\in\operatorname{Im}(f)$.
>>	2. **Inclusión $\supseteq$.** Sea $z\in\operatorname{Im}(f)$. Existe $x\in Y$ tal que $f(x)=z$.
>>	3. Aplicando $g$, $g(f(x))=g(z)$. Como $g\circ f=\operatorname{Id}_Y$, se tiene $x=g(z)$.
>>	4. Luego $f(g(z))=f(x)=z$, es decir $(f\circ g)(z)=z$. Así $z\in\{z\in X:(f\circ g)(z)=z\}$.
>>	5. Por lo tanto $\{z\in X:(f\circ g)(z)=z\}=\operatorname{Im}(f)$.
>>- **(ii)**
>>	1. Sabemos que dado $G=\mathbb{C}\setminus(-\infty,0]$ tenemos $f:G\to\mathbb C$ es una rama del logaritmo, $$e^{f(w)}=w\qquad\text{para todo }w\in G.$$
>>	2. Ahora el problema es que si definimos $g=\exp$ cuando hacemos $f\circ g$ la imagen de $g$ quizas no cae en $G$. Entonces definimos $$D=\{z\in\mathbb C:e^z\in G\}$$ y consideramos $g=\exp|_D:D\to G$.
>>	3. La identidad del paso 1. nos dice $f(w)\in D$ para todo $w\in G$, de modo que podemos considerar $f:G\to D$. Además, $$(g\circ f)(w)=e^{f(w)}=w,$$ por lo que $g\circ f=\operatorname{Id}_G$.
>>	4. Aplicando el inciso (i) con $X=D$ e $Y=G$, obtenemos $$\{z\in D:(f\circ g)(z)=z\}=\operatorname{Im}(f).$$
>>	5. Para $z\in D$ se tiene $g(z)=e^z$; por consiguiente, $$\{z\in D:(f\circ g)(z)=z\}=\{z\in\mathbb C:e^z\in G\text{ y }f(e^z)=z\}.$$
>>	6. La condición $e^z\in G$ está implícita siempre que se escribe $f(e^z)$. Por lo tanto, $$\{z\in\mathbb C:f(e^z)=z\}=\operatorname{Im}(f).$$

>[!Exercise]
>Demostrar que la parte real de la función $z^{1/2}$ es siempre positiva (si consideramos la rama principal del logaritmo) .
>>[!Proof]-
>>1. Trabajamos en $G=\mathbb{C}\setminus(-\infty,0]$ y tomamos la rama principal del logaritmo: $$\log z=\ln|z|+i\operatorname{Arg}(z).$$ Para $z\in G$, escribimos $$z=re^{i\theta},\qquad r=|z|>0,\qquad -\pi<\theta<\pi,$$ de modo que $\log z=\ln r+i\theta$.
>>2. Por definición de [[FA - Teo2#^7d48e2|ramas de potencia]], fijada la rama $f(z)=\log z$, se define $$z^{1/2}:=e^{\frac12 f(z)}=e^{\frac12\log z}.$$ Por lo tanto, $$z^{1/2}=e^{\frac12(\ln r+i\theta)}=\sqrt{r}\,e^{i\theta/2}.$$
>>3. Por la fórmula de Euler, $$z^{1/2}=\sqrt{r}\left(\cos\left(\frac{\theta}{2}\right)+i\sin\left(\frac{\theta}{2}\right)\right),$$ y, por lo tanto, $$\operatorname{Re}\left(z^{1/2}\right)=\sqrt{r}\,\cos\left(\frac{\theta}{2}\right).$$
>>4. Como $-\pi<\theta<\pi$, se tiene $-\frac{\pi}{2}<\frac{\theta}{2}<\frac{\pi}{2}$ y, en consecuencia, $\cos\left(\frac{\theta}{2}\right)>0$. Además, $r>0$ implica $\sqrt{r}>0$. Luego, $$\operatorname{Re}\left(z^{1/2}\right)>0.$$
>>Por consiguiente, la parte real de la potencia $z^{1/2}$ definida mediante la rama principal del logaritmo es estrictamente positiva en todo $G$.

>[!Exercise]
>Sea $$G:=\mathbb C\setminus\{z\in\mathbb R:z\leq 0\}$$ y sea $n\in\mathbb N$. Hallar todas las funciones analíticas $f:G\to\mathbb C$ tales que $$f(z)^n=z$$ para todo $z\in G$.
>>[!Proof]-
>>1. Como hemos eliminado el semieje real negativo, para cada $z\in G$ podemos escribir de manera única $$z=|z|e^{i\operatorname{Arg}(z)},\qquad -\pi<\operatorname{Arg}(z)<\pi.$$
>>2. Sea $f:G\to\mathbb C$ una función analítica tal que $f(z)^n=z$. Para cada $z\in G$, escribiendo $f(z)=\rho e^{i\varphi}$, de $$\rho^ne^{in\varphi}=|z|e^{i\operatorname{Arg}(z)}$$ obtenemos $$\rho=|z|^{1/n},\qquad n\varphi=\operatorname{Arg}(z)+2\pi k$$ para algún $k\in\mathbb Z$.
>>3. Por lo tanto, para cada $z\in G$, $$f(z)=|z|^{1/n}e^{\,i\frac{\operatorname{Arg}(z)+2\pi k(z)}{n}}.$$ Como reemplazar $k(z)$ por $k(z)+nm$ no modifica el valor de $f(z)$, podemos elegir de manera única $$k(z)\in\{0,\ldots,n-1\}.$$
>>4. Veamos que $k$ es localmente constante. Fijemos $z_0\in G$ y sea $k(z_0)=j$. Supongamos que $k$ no es constante en ningún entorno de $z_0$. Entonces podemos elegir una sucesión $z_m\to z_0$ tal que $$k(z_m)\neq j$$ para todo $m$.
>>5. Como $k(z_m)$ toma valores en el conjunto finito $\{0,\ldots,n-1\}$, existe una subsucesión, que seguimos denotando $z_m$, y un $\ell\neq j$ tales que $$k(z_m)=\ell$$ para todo $m$.
>>6. Como $f$ es analítica, es continua. Además, $|\cdot|$ y $\operatorname{Arg}$ son continuas en $G$. Entonces $$f(z_m)=|z_m|^{1/n}e^{\,i\frac{\operatorname{Arg}(z_m)+2\pi\ell}{n}}\longrightarrow |z_0|^{1/n}e^{\,i\frac{\operatorname{Arg}(z_0)+2\pi\ell}{n}}.$$ Por continuidad de $f$, también $$f(z_m)\longrightarrow f(z_0)=|z_0|^{1/n}e^{\,i\frac{\operatorname{Arg}(z_0)+2\pi j}{n}}.$$
>>7. Por unicidad del límite, $$e^{\,i\frac{\operatorname{Arg}(z_0)+2\pi\ell}{n}}=e^{\,i\frac{\operatorname{Arg}(z_0)+2\pi j}{n}},$$ de donde $$\frac{2\pi(\ell-j)}{n}=2\pi r$$ para algún $r\in\mathbb Z$. Por lo tanto, $$\ell-j=nr.$$ Pero $j,\ell\in\{0,\ldots,n-1\}$, así que necesariamente $\ell=j$, contradicción. Luego $k$ es localmente constante.
>>8. Como $G$ es conexo y $k:G\to\{0,\ldots,n-1\}$ es localmente constante, $k$ es constante. Por lo tanto existe un único $j\in\{0,\ldots,n-1\}$ tal que $$k(z)=j\qquad\text{para todo }z\in G.$$
>>9. Así, toda solución necesariamente tiene la forma $$f_j(z)=|z|^{1/n}e^{\,i\frac{\operatorname{Arg}(z)+2\pi j}{n}}=e^{\frac{1}{n}\log|z|}e^{\,i\frac{\operatorname{Arg}(z)+2\pi j}{n}} ,\qquad j=0,\ldots,n-1.$$
>>10. Sea ahora $$g(z)=\operatorname{Log} z=\log|z|+i\operatorname{Arg}(z),$$ la rama principal del logaritmo en $G$. Entonces $$f_j(z)=e^{\frac{1}{n}g(z)+\frac{2\pi ij}{n}}.$$
>>11. Como $g$ es analítica en $G$, $f_j$ es continua. Además, por [[FA - Teo2#^3a5482|derivada de rama de logaritmo]] tenemos $g'(z)=1/z$ entonces $$f_j'(z)=\left(\frac1n g'(z)\right)e^{\frac1n g(z)+\frac{2\pi ij}{n}}=\frac{1}{nz}f_j(z).$$ Como $z\neq0$ en $G$ y $f_j$ es continua, $f_j'$ también es continua. Por lo tanto $f_j$ es analítica.
>>12. Finalmente, $$f_j(z)^n=e^{g(z)+2\pi ij}=e^{g(z)}e^{2\pi ij}=z.$$ Por consiguiente, todas las soluciones son exactamente $$\boxed{f_j(z)=e^{\frac{\operatorname{Log} z+2\pi ij}{n}},\qquad j=0,\ldots,n-1.}$$

^1ee69b

>[!Exercise]
>Sean $A\subseteq\mathbb C$ conexo y $f:A\to\mathbb C$ analítica. Demostrar que si $f(z)$ es real para todo $z\in A$, entonces $f$ es constante.
>>[!Proof]-
>>1. Escribimos $$f(z)=u(x,y)+iv(x,y).$$
>>2. Como $f(z)\in\mathbb R$ para todo $z\in A$, tenemos $$v(x,y)=0,$$ y por lo tanto $$v_x=v_y=0.$$
>>3. Como $f$ es analítica, se satisfacen las ecuaciones de Cauchy--Riemann: $$u_x=v_y,\qquad u_y=-v_x.$$ Luego $$u_x=u_y=0,$$ es decir, $$Du_p=0\qquad\forall p\in A.$$
>>4. Luego como $A$ es conexo y $Du_p=0$ para todo $p\in A$, $u$ es constante.
>>5. Como además $v\equiv0$, resulta $$f=u+iv=u,$$ y por lo tanto $$\boxed{f\text{ es constante}.}$$
>
>Conexo y derivada constante implica constante
>Sea $U\subseteq\mathbb R^n$ abierto y conexo y sea $g:U\to\mathbb R^m$ diferenciable. Si $$Dg_x=0\qquad\forall x\in U,$$ entonces $g$ es constante.
>
>>[!Proof]-
>>6. Fijemos $x_0\in U$ y definamos $$S=\{x\in U:g(x)=g(x_0)\}.$$ Claramente $x_0\in S$, así que $S\neq\varnothing$.
>>7. Veamos que $S$ es cerrado en $U$. Como $g$ es diferenciable, es continua, y $$S=g^{-1}(\{g(x_0)\}).$$ Como $\{g(x_0)\}$ es cerrado en $\mathbb R^m$, $S$ es cerrado en $U$.
>>8. Veamos que $S$ es abierto en $U$. Sea $x\in S$. Como $U$ es abierto, existe $r>0$ tal que $$B(x,r)\subseteq U.$$
>>9. Sea $y\in B(x,r)$. Como la bola es convexa, el segmento $$\gamma(t)=x+t(y-x),\qquad t\in[0,1],$$ está contenido en $B(x,r)\subseteq U$.
>>10. Definimos $$h(t)=g(\gamma(t)).$$ Por la regla de la cadena, $$h'(t)=Dg_{\gamma(t)}(\gamma'(t))=Dg_{\gamma(t)}(y-x)=0.$$
>>11. Como $h'(t)=0$ para todo $t\in[0,1]$, $h$ es constante. Por lo tanto $$g(y)=h(1)=h(0)=g(x)=g(x_0),$$ de modo que $y\in S$.
>>12. Como esto vale para todo $y\in B(x,r)$, tenemos $$B(x,r)\subseteq S,$$ y por lo tanto $S$ es abierto en $U$.
>>13. Entonces $S$ es no vacío, abierto y cerrado en $U$. Como $U$ es conexo, necesariamente $$S=U.$$
>>14. Por definición de $S$, $$g(x)=g(x_0)\qquad\forall x\in U,$$ y por lo tanto $$\boxed{g\text{ es constante}.}$$

>[!Exercise]
>Para cada $r > 0$ fijo determinar el conjunto $\left\{\exp\left(\frac{1}{z}\right) : 0 < |z| < r\right\}$.
>>[!Proof]-
>>15. **Reformulación del conjunto.** Sea $S = \left\{\exp\left(\frac{1}{z}\right) : 0 < |z| < r\right\}$. Haciendo el cambio de variable $w = \frac{1}{z}$, la condición $0 < |z| < r$ equivale a $|w| = \frac{1}{|z|} > \frac{1}{r}$, de modo que $$S = \left\{\exp(w) : |w| > \frac{1}{r}\right\}.$$ Probaremos que $S = \mathbb{C} \setminus \{0\}$ mediante la doble inclusión.
>>16. **Inclusión $S \subseteq \mathbb{C} \setminus \{0\}$.** Para cualquier $w = u + iv \in \mathbb{C}$ con $u, v \in \mathbb{R}$, se tiene $$|\exp(w)| = |e^{u+iv}| = e^u |\cos v + i \sin v| = e^u > 0.$$ Como el módulo es estrictamente positivo para todo $u\in\mathbb{R}$, resulta que $\exp(w) \neq 0$ para todo $w\in\mathbb{C}$. Por lo tanto $0 \notin S$, lo que demuestra que $$S \subseteq \mathbb{C} \setminus \{0\}.$$
>>17. **Inclusión $\mathbb{C} \setminus \{0\} \subseteq S$.** Sea $c \in \mathbb{C} \setminus \{0\}$ arbitrario. Lo escribimos en forma polar como $$c = \rho e^{i\theta},\qquad \rho = |c| > 0,\quad \theta \in \mathbb{R}.$$ Buscamos un punto $w = u + iv$ tal que $\exp(w) = c$ y $|w| > \frac{1}{r}$.
>>18. Igualando módulo y argumento en $\exp(u+iv) = e^u e^{iv} = \rho e^{i\theta}$, se obtiene $$e^u = \rho \implies u = \ln \rho,\qquad v = \theta + 2\pi k \quad (k \in \mathbb{Z}).$$
>>19. Para cada $k \in \mathbb{Z}$, el número complejo $w_k = \ln \rho + i(\theta + 2\pi k)$ satisface $\exp(w_k) = c$. Su módulo es $$|w_k| = \sqrt{(\ln \rho)^2 + (\theta + 2\pi k)^2}.$$
>>20. Como $|w_k| \to \infty$ cuando $k \to \infty$, podemos elegir $k \in \mathbb{Z}$ suficientemente grande tal que $$|w_k| > \frac{1}{r}.$$
>>21. Definiendo $z = \frac{1}{w_k}$, se cumple $0 < |z| = \frac{1}{|w_k|} < r$ y además $$\exp\left(\frac{1}{z}\right) = \exp(w_k) = c.$$ Luego $c \in S$, lo que prueba que $$\mathbb{C} \setminus \{0\} \subseteq S.$$
>>22. De ambas inclusiones se concluye que $$\boxed{\left\{\exp\left(\frac{1}{z}\right) : 0 < |z| < r\right\} = \mathbb{C} \setminus \{0\}.}$$

>[!Exercise]
>Encontrar un conjunto abierto y conexo $G\subseteq\mathbb C$ y dos funciones continuas distintas $f,g:G\to\mathbb C$ tales que $$f(z)^2=g(z)^2=1-z^2$$ para todo $z\in G$. ¿Puede tomarse $G$ maximal? ¿Son $f$ y $g$ analíticas?
>>[!Proof]-
>>1. Tomamos $$G:=\mathbb C\setminus\left((-\infty,-1]\cup[1,\infty)\right).$$ El conjunto $(-\infty,-1]\cup[1,\infty)$ es cerrado, luego $G$ es abierto (y conexo).
>>2. Veamos que para todo $z\in G$ se tiene $$1-z^2\notin(-\infty,0].$$ En efecto, escribiendo $z=x+iy$, $$1-z^2=1-x^2+y^2-2xy\,i.$$
>>3. Si $1-z^2\in(-\infty,0]$, entonces $-2xy=0$. Si $x=0$, resulta $1-z^2=1+y^2>0$, contradicción. Luego $y=0$, de modo que $z=x\in\mathbb R$.
>>4. La condición $1-x^2\leq0$ implica entonces $|x|\geq1$, es decir, $$z\in(-\infty,-1]\cup[1,\infty),$$ contradiciendo que $z\in G$. Por lo tanto, $1-z^2\notin(-\infty,0]$ para todo $z\in G$.
>>5. Por lo tanto podemos usar en $1-z^2$ lo mismo que [[FA-Pr2#^1ee69b]] con $n=2$ y $f(z)=f_{0}(z)$ y $g(z)=f_{1}(z)$, osea definimos $$f(z):=\exp\left(\frac12\operatorname{Log}(1-z^2)\right),\qquad g(z):=-f(z).$$
>>6. Notamos que como $\pm1\notin G$, se tiene $1-z^2\neq0$ para todo $z\in G$, y por tanto $f(z)\neq0$. Así, $$g(z)=-f(z)\neq f(z),$$ para todo $z$ (con un $z$ alcanzaba pero en este caso es en todos) de modo que $f$ y $g$ son funciones distintas.
>>7. Y se verifica que $$f(z)^2=\exp\left(\operatorname{Log}(1-z^2)\right)=1-z^2,$$ y $$g(z)^2=(-f(z))^2=f(z)^2=1-z^2.$$
>>8. Tanto $f$ como $g$ son analíticas. En efecto, $z\mapsto1-z^2$ es analítica, $\operatorname{Log}$ es analítica en $\mathbb C\setminus(-\infty,0]$, y la exponencial es analítica.
>>9. Por composición, $$f(z)=\exp\left(\frac12\operatorname{Log}(1-z^2)\right)$$ es analítica en $G$, y entonces $g=-f$ también lo es. En particular, ambas son continuas.
>>10. Probemos ahora que este $G$ es maximal respecto de la inclusión entre los abiertos conexos que admiten una raíz cuadrada continua de $1-z^2$. Supongamos, por absurdo, que existe un abierto conexo $G'$ tal que $$G\subsetneq G'$$ y una función continua $h:G'\to\mathbb C$ que satisface $$h(z)^2=1-z^2$$ para todo $z\in G'$.
>>11. Como $G\subset G'$, para $z\in G$ tenemos $$h(z)^2=1-z^2=f(z)^2.$$
>>12. Como $f(z)\neq0$ en $G$, podemos definir $$q(z):=\frac{h(z)}{f(z)}.$$osea es continua (composicion de continua) 
>>13. Ademas $$q(z)^2=\frac{h(z)^2}{f(z)^2}=1.$$ con lo cual $q(z)=\pm1$ 
>>14. Pero entonces $q:G\rightarrow\{ -1,1 \}$ continua, como $G$ es conexo y $\{-1,1\}$ es discreto, $q$ debe ser constante.
>>15. Por lo tanto, en todo $G$ ocurre una de las dos posibilidades $$h=f\qquad\text{o}\qquad h=-f.$$
>>16. Como $G'\supsetneq G$, existe $$z_0\in G'\setminus G\subseteq(-\infty,-1]\cup[1,\infty).$$ Supongamos primero que $|z_0|>1$. Como $G'$ es abierto, para $n$ suficientemente grande los puntos $$z_n^+:=z_0+\frac{i}{n},\qquad z_n^-:=z_0-\frac{i}{n}$$ pertenecen a $G\subset G'$ y satisfacen $$z_n^+\to z_0,\qquad z_n^-\to z_0.$$
>>17. Por otro lado, $$f(z)=|1-z^2|^{1/2}e^{\,\frac{i}{2}\operatorname{Arg}(1-z^2)}.$$ Los números $1-(z_n^+)^2$ y $1-(z_n^-)^2$ convergen al mismo número negativo $1-z_0^2$, pero uno se aproxima al semieje real negativo desde arriba y el otro desde abajo. Por lo tanto, sus argumentos principales tienden a $\pi$ y $-\pi$, respectivamente, y así los valores de $f$ tienen dos límites opuestos: $$\lim_{n\to\infty}f(z_n^+)=\pm i\sqrt{z_0^2-1},\qquad \lim_{n\to\infty}f(z_n^-) =\mp i\sqrt{z_0^2-1}.$$
>>18. En particular, estos límites son distintos. Como $h=f$ en todo $G$ o $h=-f$ en todo $G$, los límites de $h(z_n^+)$ y $h(z_n^-)$ también son distintos. Pero ambas sucesiones convergen a $z_0\in G'$, por lo que la continuidad de $h$ en $z_0$ exigiría $$\lim_{n\to\infty}h(z_n^+)=h(z_0)=\lim_{n\to\infty}h(z_n^-),$$ contradicción.
>>19. Queda considerar $z_0=1$ o $z_0=-1$. Supongamos primero $z_0=1$. Como $G'$ es abierto, existe $r>0$ tal que $B(1,r)\subseteq G'$. Podemos tomar $r<1$. 
>>20. En $B(1,r)$, la función $1+z$ nunca se anula obviamente y ademas su imagen esta en $B(2,r)\subseteq \mathbb{C}\setminus (-\infty,0]$ con lo cual $Log(1+z)$ entonces por demos definir $$s(z)=\exp\left( \frac{1}{2}\log(1+z) \right)$$ osea $1+z$ tiene raiz cuadrada $$s(z)^2=1+z.$$
>>21. Ahora definimos $$Q(z):=\frac{h(z)}{s(z)}$$ es continua (composición) en $B(1,r)$ y satisface $$Q(z)^2=\frac{1-z^2}{1+z}=1-z.$$
>>22. Tomemos $0<\rho<r$ y la curva $$\gamma(t)=1-\rho e^{it},\qquad 0\leq t\leq2\pi.$$ Entonces $$Q(\gamma(t))^2=\rho e^{it}.$$ osea $$\left(\frac{Q(\gamma(t))}{\sqrt{\rho}\,e^{it/2}}\right)^{2}=\frac{Q(\gamma(t))^{2}}{\rho e^{it}}=1$$ por tanto, $$\frac{Q(\gamma(t))}{\sqrt{\rho}\,e^{it/2}}\in\{-1,1\}.$$
>>23. Esta función de $t$ es continua y $[0,2\pi]$ es conexo, por lo que el signo debe ser constante. En consecuencia, $$Q(\gamma(t))=\varepsilon\sqrt{\rho}\,e^{it/2},\qquad \varepsilon\in\{-1,1\}.$$
>>24. Pero entonces $$Q(\gamma(2\pi))=-Q(\gamma(0)),$$ mientras que $\gamma(2\pi)=\gamma(0)$, contradicción. Luego $1$ no puede pertenecer a $G'$.
>>25. El caso $z_0=-1$ es análogo, dividiendo ahora por una raíz cuadrada continua de $1-z$ en un entorno de $-1$ y obteniendo una raíz cuadrada continua de $1+z$, lo que produce la misma contradicción.
>>26. Hemos probado que ningún punto de $$(-\infty,-1]\cup[1,\infty)$$ puede agregarse a $G$ conservando la existencia de una raíz cuadrada continua de $1-z^2$. Por lo tanto, $G$ es maximal.
>>27. En conclusión, podemos tomar $$\boxed{G=\mathbb C\setminus\left((-\infty,-1]\cup[1,\infty)\right)},$$ con $$\boxed{f(z)=\exp\left(\frac12\operatorname{Log}(1-z^2)\right),\qquad g(z)=-f(z).}$$ Estas funciones son continuas, distintas y satisfacen $$f(z)^2=g(z)^2=1-z^2.$$ Además, este $G$ puede tomarse maximal y tanto $f$ como $g$ son analíticas en $G$.

>[!Exercise]
>Dar la rama principal de $\sqrt{1-z}$.
>>[!Proof]-
>>28. La rama principal de la raíz es $$\sqrt{w}=\exp\left(\frac12\operatorname{Log} w\right)$$con $w\in\mathbb C\setminus(-\infty,0]$ y $-\pi<\operatorname{Arg}(w)<\pi$.
>>29. Poniendo $w=1-z$, se exige $1-z\notin(-\infty,0]$.
>>30. Escribiendo $z=x+iy$, $1-z=1-x-iy\in(-\infty,0]$ si y solo si $y=0$ y $1-x\le 0$, es decir $y=0$ y $x\ge 1$.
>>31. Luego el conjunto prohibido es $[1,+\infty)$ y el dominio es $$\boxed{D=\mathbb C\setminus[1,+\infty)}.$$
>>32. La rama principal es $$\boxed{f(z)=\exp\left(\frac12\operatorname{Log}(1-z)\right),\qquad -\pi<\operatorname{Arg}(1-z)<\pi.}$$
>>33. En efecto, $f(z)^2=\exp(\operatorname{Log}(1-z))=1-z$, y $f$ es analítica en $D$ por composición de funciones analíticas.

>[!Exercise]
>Sea $\log : G \to \mathbb{C}$ una rama del logaritmo y sea $\tilde{G} = \log(G)$ y sean $f, g : G \to \mathbb{C}$ las correspondientes ramas de $z^a$ y $z^b$.
>- **(i)** Demostrar que $fg$ es una rama de $z^{a+b}$ y que $f/g$ es una rama de $z^{a-b}$.
>- **(ii)** Demostrar que si $f(G) \subset G$ y $g(G) \subset G$ entonces $g \circ f$ y $f \circ g$ son ramas de $z^{ab}$.
>- **(iii)** Mostrar con un ejemplo que $g \circ f$ no es necesariamente una rama de $z^{ab}$.
>>[!Proof]-
>>- **(i)**
>>	1. Por la [[FA - Teo2#^7d48e2|definición de ramas de potencias]], fijada la rama $\log$ del logaritmo, $f(z)=e^{a\log z}$ y $g(z)=e^{b\log z}$ para todo $z\in G$.
>>	2. Para el producto, multiplicando punto a punto y usando la regla aditiva de la exponencial ($e^{u}e^{w}=e^{u+w}$), se tiene $$(fg)(z)=f(z)g(z)=e^{a\log z}e^{b\log z}=e^{(a+b)\log z},$$ que por definición es la rama de $z^{a+b}$ correspondiente a $\log$.
>>	3. Para el cociente, usando la regla del cociente ($e^{u}/e^{w}=e^{u-w}$), se tiene $$\left(\frac fg\right)(z)=\frac{f(z)}{g(z)}=\frac{e^{a\log z}}{e^{b\log z}}=e^{(a-b)\log z},$$ que por definición es la rama de $z^{a-b}$ correspondiente a $\log$.
>>- **(ii)**
>>	1. Como $f(G)\subseteq G$, para todo $z\in G$ se cumple $f(z)\in G$, de modo que la composición $g\circ f:G\to\mathbb C$ está bien definida en todo $G$ y viene dada por $$(g\circ f)(z)=g(f(z))=e^{b\log(f(z))}=e^{b\log(e^{a\log z})}.$$
>>	2. Por el [[FA-Pr2#^1ee69b|Ejercicio 11(ii)]], para la rama $\log:G\to\mathbb C$ con imagen $\tilde{G}=\log(G)$ se tiene $$\{u\in\mathbb C:\log(e^u)=u\}=\operatorname{Im}(\log)=\tilde{G}.$$
>>	3. Como $a\log(G)\subseteq\tilde{G}$ (la invariancia del dominio al nivel del logaritmo), para todo $z\in G$ se tiene $a\log z\in\tilde{G}$, y por el Ejercicio 11(ii) se deduce que $$\log(f(z))=\log(e^{a\log z})=a\log z.$$
>>	4. Sustituyendo esta igualdad en la composición se obtiene $$(g\circ f)(z)=e^{b(a\log z)}=e^{ab\log z},$$ que coincide con la definición de la rama de $z^{ab}$ correspondiente a $\log$.
>>	5. Análogamente, usando que $g(G)\subseteq G$ y $b\log(G)\subseteq\tilde{G}$, por simetría se concluye que $$(f\circ g)(z)=e^{a\log(g(z))}=e^{a(b\log z)}=e^{ab\log z}.$$
>>	6. *Nota sobre la constante de periodicidad:* En general, $e^{\log(f(z))}=f(z)=e^{a\log z}$ implica $\log(f(z))-a\log z\in 2\pi i\mathbb Z$, y por conexidad existe $k\in\mathbb Z$ constante tal que $\log(f(z))=a\log z+2\pi ik$, de modo que $(g\circ f)(z)=e^{ab\log z}e^{2\pi i bk}$. Para que esto sea una rama de $z^{ab}$ para cualesquiera exponentes $a,b\in\mathbb C$ se requiere $k=0$, lo cual equivale a $a\log z\in\tilde{G}$ según el Ejercicio 11(ii).
>>- **(iii)**
>>	1. Para mostrar que $g\circ f$ no es necesariamente una rama de $z^{ab}$, tomamos el abierto conexo $G=\mathbb C\setminus(-\infty,0]$ con la rama principal del logaritmo $\log=\operatorname{Log}$, y elegimos los exponentes $$a=2,\qquad b=\frac12.$$
>>	2. **Aclaración sobre potencias enteras:** Para $a=2\in\mathbb Z$, la potencia no es ambigua; en efecto, para todo $m\in\mathbb Z$ y cualquier rama del logaritmo vale $$e^{m\log z}=\bigl(e^{\log z}\bigr)^m=z^m,$$ por lo que el cálculo es directo y $f(z)=e^{2\operatorname{Log} z}=z^2$ coincide con la potencia usual.
>>	3. El producto de los exponentes es $ab=2\cdot\frac12=1\in\mathbb Z$. Como el exponente $1$ es entero, la única rama de $z^1$ en $G$ es la función identidad $$z^1=e^{1\cdot\operatorname{Log} z}=e^{\operatorname{Log} z}=z.$$ Por lo tanto, para que $g\circ f$ fuese una rama de $z^{ab}=z^1$, debería cumplirse $(g\circ f)(z)=z$ para todo punto donde esté definida.
>>	4. Por su parte, para $b=1/2$ (no entero), la función $g(w)=e^{\frac12\operatorname{Log} w}$ es la rama principal de la raíz cuadrada, y debe evaluarse rigurosamente mediante el logaritmo.
>>	5. Tomamos el punto $z_0=-1+i\in G$. Evaluando $f$ se tiene directamente $$f(z_0)=z_0^2=(-1+i)^2=1-2i-1=-2i\in G.$$
>>	6. Evaluamos explícitamente $g(-2i)=e^{\frac12\operatorname{Log}(-2i)}$: el número $w=-2i$ tiene módulo $|-2i|=2$ y argumento principal $\operatorname{Arg}(-2i)=-\frac{\pi}{2}$, de modo que $\operatorname{Log}(-2i)=\ln 2-i\frac{\pi}{2}$. Multiplicando por $b=1/2$ resulta $\frac12\operatorname{Log}(-2i)=\ln(\sqrt{2})-i\frac{\pi}{4}$, y aplicando la exponencial se obtiene $$g(-2i)=e^{\ln(\sqrt{2})-i\pi/4}=\sqrt{2}\left(\cos\left(-\frac{\pi}{4}\right)+i\sin\left(-\frac{\pi}{4}\right)\right)=\sqrt{2}\left(\frac{\sqrt{2}}{2}-i\frac{\sqrt{2}}{2}\right)=1-i.$$
>>	7. Comparando con $z_0$, se tiene $$(g\circ f)(z_0)=g(f(-1+i))=g(-2i)=1-i\neq -1+i=z_0.$$ De hecho, $(g\circ f)(z_0)=-z_0\neq z_0$.
>>	8. Como la única rama de $z^{ab}=z^1$ en $G$ es la identidad $z$, y $(g\circ f)(z_0)\neq z_0$, concluimos que $g\circ f$ no es una rama de $z^{ab}$. (Notar además que para $z=i\in G$ se tiene $f(i)=i^2=-1\notin G$, lo que muestra que $f(G)\not\subseteq G$ y que $g\circ f$ ni siquiera está definida en todo $G$).

>[!Exercise] Ejercicio 19
>- **(i)** Para cada $z\in\mathbb C\setminus\{0\}$ definimos $\arg(z)$ como el único $\theta\in[0,2\pi)$ tal que $z=r\operatorname{cis}(\theta)$ para algún $r>0$. Demostrar que $\arg$ no es continua.
>- **(ii)** Deducir que no existe una rama del logaritmo definida en $\mathbb C\setminus\{0\}$.
>>[!Proof]-
>>- **(i)**
>>	1. Consideramos las sucesiones $z_n^+=1+i/n$ y $z_n^-=1-i/n$, con $n\geq1$. Ambas convergen a $1$, y $\arg(1)=0$.
>>	2. Como $z_n^+$ está en el primer cuadrante y $z_n^-$ en el cuarto, la elección de argumentos en $[0,2\pi)$ da $$\arg(z_n^+)=\arctan(1/n),\qquad \arg(z_n^-)=2\pi+\arctan(-1/n).$$ En la segunda expresión sumamos una vuelta completa porque $\arctan(-1/n)<0$.
>>	3. Por continuidad de $\arctan$ en $0$ y porque $\arctan(0)=0$, obtenemos $$\lim_{n\to\infty}\arg(z_n^+)=0,\qquad \lim_{n\to\infty}\arg(z_n^-)=2\pi.$$
>>	4. En particular, $z_n^-\to1$ pero $\arg(z_n^-)\not\to\arg(1)$. Por el criterio secuencial, $\arg$ no es continua en $1$.
>>- **(ii)**
>>	1. Supongamos, por contradicción, que existe una rama $f:\mathbb C\setminus\{0\}\to\mathbb C$ del logaritmo. Por definición, $f$ es continua y $e^{f(z)}=z$ para todo $z\neq0$.
>>	2. Escribimos $f(z)=u(z)+iv(z)$, donde $u=\operatorname{Re}f$ y $v=\operatorname{Im}f$ son continuas. Comparando módulos y argumentos en $e^{u(z)}e^{iv(z)}=|z|e^{i\arg(z)}$, resulta $$u(z)=\ln|z|,\qquad v(z)+2\pi k(z)=\arg(z)$$ para un entero $k(z)\in\mathbb Z$ que, en principio, puede depender de $z$.
>>	3. Restringimos al abierto conexo $G_0=\mathbb C\setminus[0,\infty)$. Allí $\arg$ coincide con $\operatorname{Arg}_0\in(0,2\pi)$ y es continua por los resultados de [[FA - Teo2#^aea005]] componiendo $im(f_{0,0})=Arg_{0}(z)$ debe ser continua. Por tanto, $$k(z)=\frac{\arg(z)-v(z)}{2\pi}$$ es continua en $G_0$.
>>	4. Como $G_0$ es conexo, su imagen por $k$ es conexa; al estar contenida en $\mathbb Z$, debe ser un solo punto. Luego existe un entero fijo $k$ tal que $$v(z)=\arg(z)-2\pi k\qquad(z\in G_0).$$
>>	5. Las dos sucesiones del inciso (i) están en $G_0$, de modo que usamos el mismo entero $k$ para ambas. Por los límites ya calculados, $$\lim_{n\to\infty}v(z_n^+)=-2\pi k,\qquad \lim_{n\to\infty}v(z_n^-)=2\pi-2\pi k.$$
>>	6. Pero $1$ pertenece al dominio de $f$, y $v$ es continua en $1$. Como ambas sucesiones convergen a $1$, sus imágenes por $v$ deben converger a lo mismo. Esto exigiría $$-2\pi k=v(1)=2\pi-2\pi k,$$ lo cual es imposible.
>>	7. La contradicción prueba que no existe una rama del logaritmo en $\mathbb C\setminus\{0\}$.

>[!Exercise] Ejercicio 20
>Verificar que las siguientes funciones son armónicas en sus dominios y hallar una armónica conjugada cuando sea posible:
>- **(a)** $u(x,y)=2x(1-y)$.
>- **(b)** $u(x,y)=\operatorname{senh}(x)\operatorname{sen}(y)$.
>- **(c)** $u(x,y)=\dfrac{y}{x^2+y^2}$.
>>[!Proof]-
>>- **(a)**
>>	1. El dominio es $\mathbb R^2$ y $u$ es de clase $C^\infty$. Sus derivadas son $$u_x=2-2y,\qquad u_y=-2x,\qquad u_{xx}=0,\qquad u_{yy}=0.$$ Por tanto, $u_{xx}+u_{yy}=0$ y $u$ es armónica.
>>	2. Buscamos $v$ tal que $f=u+iv$ sea analítica. Las ecuaciones de Cauchy–Riemann exigen $$v_x=-u_y=2x,\qquad v_y=u_x=2-2y.$$
>>	3. Integrando la primera ecuación respecto de $x$, obtenemos $v(x,y)=x^2+C(y)$. Al derivar respecto de $y$ e imponer la segunda ecuación, resulta $$C'(y)=2-2y,\qquad C(y)=2y-y^2+C.$$
>>	4. Luego podemos tomar $$\boxed{v(x,y)=x^2+2y-y^2+C,\qquad C\in\mathbb R.}$$ Sus parciales son continuas y satisfacen Cauchy–Riemann en todo $\mathbb R^2$, de modo que $u+iv$ es analítica. Además, $v_{xx}+v_{yy}=2-2=0$. Entonces es armonica
>>- **(b)**
>>	1. El dominio es $\mathbb R^2$ y $u$ es de clase $C^\infty$. Calculamos $$u_x=\cosh(x)\operatorname{sen}(y),\qquad u_y=\operatorname{senh}(x)\cos(y),\qquad u_{xx}=\operatorname{senh}(x)\operatorname{sen}(y),\qquad u_{yy}=-\operatorname{senh}(x)\operatorname{sen}(y).$$ Así, $u_{xx}+u_{yy}=0$ y $u$ es armónica.
>>	2. Las ecuaciones de Cauchy–Riemann requieren $$v_x=-\operatorname{senh}(x)\cos(y),\qquad v_y=\cosh(x)\operatorname{sen}(y).$$ Integrando la primera respecto de $x$, queda $v(x,y)=-\cosh(x)\cos(y)+C(y)$.
>>	3. Derivando respecto de $y$ e imponiendo la segunda ecuación, obtenemos $\cosh(x)\operatorname{sen}(y)+C'(y)=\cosh(x)\operatorname{sen}(y)$, de donde $C'(y)=0$. Por tanto, $$\boxed{v(x,y)=-\cosh(x)\cos(y)+C,\qquad C\in\mathbb R.}$$
>>	4. Las parciales de $u$ y $v$ son continuas y satisfacen Cauchy–Riemann en todo $\mathbb R^2$, por lo que $u+iv$ es analítica. También $v_{xx}+v_{yy}=-\cosh(x)\cos(y)+\cosh(x)\cos(y)=0$ Entonces es armonica
>>- **(c)**
>>	1. El dominio es $D=\mathbb R^2\setminus\{(0,0)\}$, donde $u$ es de clase $C^\infty$. Sus primeras derivadas son $$u_x=-\frac{2xy}{(x^2+y^2)^2},\qquad u_y=\frac{x^2-y^2}{(x^2+y^2)^2}.$$
>>	2. Derivando nuevamente, $$u_{xx}=\frac{2y(3x^2-y^2)}{(x^2+y^2)^3},\qquad u_{yy}=-\frac{2y(3x^2-y^2)}{(x^2+y^2)^3}.$$ Luego $u_{xx}+u_{yy}=0$ en $D$, y $u$ es armónica.
>>	3. Para hallar una conjugada, observamos que $$\frac{i}{z}=\frac{i(x-iy)}{x^2+y^2}=\frac{y}{x^2+y^2}+i\frac{x}{x^2+y^2}.$$ Como $f(z)=i/z$ es analítica en $\mathbb C\setminus\{0\}$ y su parte real es $u$, podemos tomar $$\boxed{v(x,y)=\frac{x}{x^2+y^2}+C,\qquad C\in\mathbb R.}$$
>>	4. En efecto, $$v_x=\frac{y^2-x^2}{(x^2+y^2)^2}=-u_y,\qquad v_y=-\frac{2xy}{(x^2+y^2)^2}=u_x.$$ Además, $v_{xx}+v_{yy}=0$ (osea $v$ es armonica), pues $v_{xx}=2x(x^2-3y^2)/(x^2+y^2)^3$ y $v_{yy}=-v_{xx}$
>>	5. La conjugada está definida en todo $D$: aunque este dominio no es simplemente conexo, en este caso sí existe una conjugada global.

>[!Exercise] Ejercicio 21
>Sea $G=\mathbb R^2\setminus\{(0,0)\}$ y sea $u:G\to\mathbb R$ definida por $u(x,y)=\log\sqrt{x^2+y^2}$.
>- **(i)** Demostrar que $u$ es armónica.
>- **(ii)** Demostrar que $u$ no tiene conjugada armónica en $G$.
>- **(iii)** Demostrar que si $G=\mathbb R_{>0}\times\mathbb R$, entonces $u$ sí tiene conjugada armónica $v$ y encontrarla siguiendo la fórmula de la demostración del Teorema 2.30 del Capítulo III del Conway. ¿Qué función analítica es $u+iv$?
>>[!Proof]-
>>- **(i)**
>>	1. Escribimos $u(x,y)=\frac12\log(x^2+y^2)$. Esta función es de clase $C^\infty$ en $G$, pues $x^2+y^2>0$ en todo su dominio.
>>	2. Las derivadas primeras son $$u_x=\frac{x}{x^2+y^2},\qquad u_y=\frac{y}{x^2+y^2}.$$
>>	3. Derivando nuevamente, $$u_{xx}=\frac{y^2-x^2}{(x^2+y^2)^2},\qquad u_{yy}=\frac{x^2-y^2}{(x^2+y^2)^2}.$$ Por tanto, $u_{xx}+u_{yy}=0$ en $G$, y $u$ es armónica.
>>- **(ii)**
>>	1. Supongamos, por contradicción, que existe una función armónica $v:G\to\mathbb R$ tal que $u+iv$ es analítica en todo $G$. Las ecuaciones de Cauchy–Riemann imponen $$v_x=-u_y=-\frac{y}{x^2+y^2},\qquad v_y=u_x=\frac{x}{x^2+y^2}.$$
>>	2. Comprobar la armonicidad de $v$ no produce una contradicción: estas expresiones dan $$v_{xx}=\frac{2xy}{(x^2+y^2)^2},\qquad v_{yy}=-\frac{2xy}{(x^2+y^2)^2},\qquad v_{xx}+v_{yy}=0.$$ Esta compatibilidad no garantiza la existencia de una misma función $v$ en todo $G$.
>>	3. Consideramos la circunferencia $\gamma(t)=(\cos t,\sin t)$, con $t\in[0,2\pi]$, que está contenida en $G$. La función compuesta $h(t)=v(\cos t,\sin t)$ satisface, por la regla de la cadena, $$\begin{aligned}h'(t)&=-\sin t\,v_x(\cos t,\sin t)+\cos t\,v_y(\cos t,\sin t)\\&=\sin^2t+\cos^2t=1.\end{aligned}$$
>>	4. Por el teorema fundamental del cálculo, $$h(2\pi)-h(0)=\int_0^{2\pi}h'(t)\,dt=\int_0^{2\pi}1\,dt=2\pi.$$ Integramos la derivada de la función compuesta: el resultado es la diferencia de los valores de esa función, no de sus derivadas.
>>	5. Sin embargo, $\gamma(0)=\gamma(2\pi)=(1,0)$, de modo que $$h(2\pi)-h(0)=v(1,0)-v(1,0)=0.$$ Esto contradice el paso anterior. Por tanto, $u$ no tiene conjugada armónica definida en todo $G$.
>>- **(iii)**
>>	1. Pendiente.

