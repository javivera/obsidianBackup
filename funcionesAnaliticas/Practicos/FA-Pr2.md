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

>[!Exercise]
>[[FA - Teo2#^e54e60]]

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
>>23. Tomamos $$G:=\mathbb C\setminus\left((-\infty,-1]\cup[1,\infty)\right).$$ El conjunto $(-\infty,-1]\cup[1,\infty)$ es cerrado, luego $G$ es abierto.
>>24. Además, $G$ es estrellado respecto de $0$: si $z\in G$, entonces $tz\in G$ para todo $t\in[0,1]$. En efecto, si $z\notin\mathbb R$, entonces $tz\notin\mathbb R$ para $t>0$, mientras que si $z\in\mathbb R$, necesariamente $z\in(-1,1)$ y por tanto $tz\in(-1,1)$. Así, $G$ es conexo.
>>25. Veamos que para todo $z\in G$ se tiene $$1-z^2\notin(-\infty,0].$$ En efecto, escribiendo $z=x+iy$, $$1-z^2=1-x^2+y^2-2xy\,i.$$
>>26. Si $1-z^2\in(-\infty,0]$, entonces $-2xy=0$. Si $x=0$, resulta $1-z^2=1+y^2>0$, contradicción. Luego $y=0$, de modo que $z=x\in\mathbb R$.
>>27. La condición $1-x^2\leq0$ implica entonces $|x|\geq1$, es decir, $$z\in(-\infty,-1]\cup[1,\infty),$$ contradiciendo que $z\in G$. Por lo tanto, $1-z^2\notin(-\infty,0]$ para todo $z\in G$.
>>28. Por lo tanto podemos usar en $1-z^2$ lo mismo que [[FA-Pr2#^1ee69b]] con $n=2$ y $f(z)=f_{0}(z)$ y $g(z)=f_{1}(z)$, osea definimos $$f(z):=\exp\left(\frac12\operatorname{Log}(1-z^2)\right),\qquad g(z):=-f(z).$$
>>29. Notamos que como $\pm1\notin G$, se tiene $1-z^2\neq0$ para todo $z\in G$, y por tanto $f(z)\neq0$. Así, $$g(z)=-f(z)\neq f(z),$$ para todo $z$ (con un $z$ alcanzaba pero en este caso es en todos) de modo que $f$ y $g$ son funciones distintas.
>>30. Y se verifica que $$f(z)^2=\exp\left(\operatorname{Log}(1-z^2)\right)=1-z^2,$$ y $$g(z)^2=(-f(z))^2=f(z)^2=1-z^2.$$
>>31. Tanto $f$ como $g$ son analíticas. En efecto, $z\mapsto1-z^2$ es analítica, $\operatorname{Log}$ es analítica en $\mathbb C\setminus(-\infty,0]$, y la exponencial es analítica.
>>32. Por composición, $$f(z)=\exp\left(\frac12\operatorname{Log}(1-z^2)\right)$$ es analítica en $G$, y entonces $g=-f$ también lo es. En particular, ambas son continuas.
>>33. Probemos ahora que este $G$ es maximal respecto de la inclusión entre los abiertos conexos que admiten una raíz cuadrada continua de $1-z^2$. Supongamos, por absurdo, que existe un abierto conexo $G'$ tal que $$G\subsetneq G'$$ y una función continua $h:G'\to\mathbb C$ que satisface $$h(z)^2=1-z^2$$ para todo $z\in G'$.
>>34. Como $G\subset G'$, para $z\in G$ tenemos $$h(z)^2=1-z^2=f(z)^2.$$
>>35. Como $f(z)\neq0$ en $G$, podemos definir $$q(z):=\frac{h(z)}{f(z)}.$$osea es continua (composicion de continua) 
>>36. Ademas $$q(z)^2=\frac{h(z)^2}{f(z)^2}=1.$$ con lo cual $q(z)=\pm1$ 
>>37. Pero entonces $q:G\rightarrow\{ -1,1 \}$ continua, como $G$ es conexo y $\{-1,1\}$ es discreto, $q$ debe ser constante.
>>38. Por lo tanto, en todo $G$ ocurre una de las dos posibilidades $$h=f\qquad\text{o}\qquad h=-f.$$
>>39. Como $G'\supsetneq G$, existe $$z_0\in G'\setminus G\subseteq(-\infty,-1]\cup[1,\infty).$$ Supongamos primero que $|z_0|>1$. Como $G'$ es abierto, para $n$ suficientemente grande los puntos $$z_n^+:=z_0+\frac{i}{n},\qquad z_n^-:=z_0-\frac{i}{n}$$ pertenecen a $G\subset G'$ y satisfacen $$z_n^+\to z_0,\qquad z_n^-\to z_0.$$
>>40. Por otro lado, $$f(z)=|1-z^2|^{1/2}e^{\,\frac{i}{2}\operatorname{Arg}(1-z^2)}.$$ Los números $1-(z_n^+)^2$ y $1-(z_n^-)^2$ convergen al mismo número negativo $1-z_0^2$, pero uno se aproxima al semieje real negativo desde arriba y el otro desde abajo. Por lo tanto, sus argumentos principales tienden a $\pi$ y $-\pi$, respectivamente, y así los valores de $f$ tienen dos límites opuestos: $$\lim_{n\to\infty}f(z_n^+)=\pm i\sqrt{z_0^2-1},\qquad \lim_{n\to\infty}f(z_n^-) =\mp i\sqrt{z_0^2-1}.$$
>>41. En particular, estos límites son distintos. Como $h=f$ en todo $G$ o $h=-f$ en todo $G$, los límites de $h(z_n^+)$ y $h(z_n^-)$ también son distintos. Pero ambas sucesiones convergen a $z_0\in G'$, por lo que la continuidad de $h$ en $z_0$ exigiría $$\lim_{n\to\infty}h(z_n^+)=h(z_0)=\lim_{n\to\infty}h(z_n^-),$$ contradicción.
>>42. Queda considerar $z_0=1$ o $z_0=-1$. Supongamos primero $z_0=1$. Como $G'$ es abierto, existe $r>0$ tal que $B(1,r)\subseteq G'$. Podemos tomar $r<1$. 
>>43. En $B(1,r)$, la función $1+z$ nunca se anula obviamente y ademas su imagen esta en $B(2,r)\subseteq \mathbb{C}\setminus (-\infty,0]$ con lo cual $Log(1+z)$ entonces por demos definir $$s(z)=\exp\left( \frac{1}{2}\log(1+z) \right)$$ osea $1+z$ tiene raiz cuadrada $$s(z)^2=1+z.$$
>>44. Ahora definimos $$Q(z):=\frac{h(z)}{s(z)}$$ es continua (composición) en $B(1,r)$ y satisface $$Q(z)^2=\frac{1-z^2}{1+z}=1-z.$$
>>45. Tomemos $0<\rho<r$ y la curva $$\gamma(t)=1-\rho e^{it},\qquad 0\leq t\leq2\pi.$$ Entonces $$Q(\gamma(t))^2=\rho e^{it}.$$ osea $$\left(\frac{Q(\gamma(t))}{\sqrt{\rho}\,e^{it/2}}\right)^{2}=\frac{Q(\gamma(t))^{2}}{\rho e^{it}}=1$$ por tanto, $$\frac{Q(\gamma(t))}{\sqrt{\rho}\,e^{it/2}}\in\{-1,1\}.$$
>>46. Esta función de $t$ es continua y $[0,2\pi]$ es conexo, por lo que el signo debe ser constante. En consecuencia, $$Q(\gamma(t))=\varepsilon\sqrt{\rho}\,e^{it/2},\qquad \varepsilon\in\{-1,1\}.$$
>>47. Pero entonces $$Q(\gamma(2\pi))=-Q(\gamma(0)),$$ mientras que $\gamma(2\pi)=\gamma(0)$, contradicción. Luego $1$ no puede pertenecer a $G'$.
>>48. El caso $z_0=-1$ es análogo, dividiendo ahora por una raíz cuadrada continua de $1-z$ en un entorno de $-1$ y obteniendo una raíz cuadrada continua de $1+z$, lo que produce la misma contradicción.
>>49. Hemos probado que ningún punto de $$(-\infty,-1]\cup[1,\infty)$$ puede agregarse a $G$ conservando la existencia de una raíz cuadrada continua de $1-z^2$. Por lo tanto, $G$ es maximal.
>>50. En conclusión, podemos tomar $$\boxed{G=\mathbb C\setminus\left((-\infty,-1]\cup[1,\infty)\right)},$$ con $$\boxed{f(z)=\exp\left(\frac12\operatorname{Log}(1-z^2)\right),\qquad g(z)=-f(z).}$$ Estas funciones son continuas, distintas y satisfacen $$f(z)^2=g(z)^2=1-z^2.$$ Además, este $G$ puede tomarse maximal y tanto $f$ como $g$ son analíticas en $G$.
