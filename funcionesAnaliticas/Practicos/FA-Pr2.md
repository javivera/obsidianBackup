>[!Exercise]
>Demostrar que
>$$\lim_{n\to\infty}n^{1/n}=1.$$
>>[!Proof]-
>>1. Escribimos $$n^{1/n}=e^{\frac{\log n}{n}}.$$
>>2. Basta calcular el límite del exponente: $$\lim_{n\to\infty}\frac{\log n}{n}.$$
>>3. Considerando primero la función real correspondiente y aplicando L'Hôpital, $$\lim_{x\to\infty}\frac{\log x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=\lim_{x\to\infty}\frac1x=0.$$
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
>>1. Para cada $k\geq 0$, $$(iz)^{2k}=i^{2k}z^{2k}=(i^{2})^{k}z^{2k}=(-1)^{k}z^{2k},$$ $$(iz)^{2k+1}=i^{2k+1}z^{2k+1}=i^{2k}\,i\,z^{2k+1}=(-1)^{k}iz^{2k+1}.$$
>>2. Separando la serie de $e^{iz}$ en términos pares e impares,
>>$$\begin{aligned}e^{iz}&=\sum_{n=0}^{\infty}\frac{(iz)^{n}}{n!}=\sum_{k=0}^{\infty}\frac{(iz)^{2k}}{(2k)!}+\sum_{k=0}^{\infty}\frac{(iz)^{2k+1}}{(2k+1)!}\\&=\sum_{k=0}^{\infty}(-1)^{k}\frac{z^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}(-1)^{k}\frac{z^{2k+1}}{(2k+1)!}\\&=\cos z+i\operatorname{sen} z.\end{aligned}$$
>>3. Reemplazando $z$ por $-z$ (o calculando análogamente con $-iz$), y usando que $\cos$ es par y $\operatorname{sen}$ es impar, $$e^{-iz}=\cos(-z)+i\operatorname{sen}(-z)=\cos z-i\operatorname{sen} z.$$
>>4. Sumando y restando,
>>$$e^{iz}+e^{-iz}=2\cos z,\qquad e^{iz}-e^{-iz}=2i\operatorname{sen} z.$$
>>5. Dividiendo, $$\cos z=\frac{e^{iz}+e^{-iz}}{2},\qquad\operatorname{sen} z=\frac{e^{iz}-e^{-iz}}{2i}.$$

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

