# Funciones Analíticas - Práctico 1: soluciones

> [!exercise] Ejercicio 1 - Propiedades elementales
> Sean $z,w\in\mathbb C$. Demostrar las siguientes propiedades de los números complejos (asumiendo denominadores no nulos).
> 1. $z^2+w^2=(z+iw)(z-iw)$.
> 2. $\operatorname{Re}z=\frac12(z+\bar z)$, $\operatorname{Im}z=\frac1{2i}(z-\bar z)$.
> 3. $\overline{z+w}=\bar z+\bar w$, $\overline{zw}=\bar z\bar w$, $|z|^2=z\bar z$, $|\bar z|=|z|$.
> 4. $|zw|=|z||w|$, $\left|\frac zw\right|=\frac{|z|}{|w|}$, $z^{-1}=\frac{\bar z}{|z|^2}$.
> 5. $|z+w|^2=|z|^2+2\operatorname{Re}(z\bar w)+|w|^2$, $|z-w|^2=|z|^2-2\operatorname{Re}(z\bar w)+|w|^2$.
> 6. $|z+w|^2+|z-w|^2=2(|z|^2+|w|^2)$ (regla del paralelogramo).
>
>> [!proof]-
>>
>> **(i)** Al desarrollar y usar $i^2=-1$,
>> $$(z+iw)(z-iw)=z^2-i^2w^2=z^2+w^2.$$
>> **(ii)** Como $z=x+iy$ y $\bar z=x-iy$,
>> $$\frac{z+\bar z}{2}=x=\operatorname{Re}z, \qquad \frac{z-\bar z}{2i}=y=\operatorname{Im}z.$$
>> **(iii)** Si además $w=u+iv$, se verifica directamente que
>> $$\overline{z+w}=\bar z+\bar w, \qquad \overline{zw}=\bar z\,\bar w.$$
>> Por otra parte,
>> $$z\bar z=(x+iy)(x-iy)=x^2+y^2=|z|^2,$$
>> y, puesto que $z$ y $\bar z$ tienen las mismas coordenadas salvo por el signo de la parte imaginaria,
>> $$|\bar z|=\sqrt{x^2+(-y)^2}=|z|.$$
>> **(iv)** Usando el apartado anterior,
>> $$|zw|^2=zw\overline{zw}=z\bar z\,w\bar w=|z|^2|w|^2.$$
>> Ambos miembros son no negativos, así que
>> $$|zw|=|z||w|.$$
>> Si $w\ne0$, entonces $$\left|\frac zw\right||w|=\left| \frac{z}{w}.w\right|=|z|, \qquad\text{luego}\qquad \left|\frac zw\right|=\frac{|z|}{|w|}.$$
>> Finalmente, si $z\ne0$,
>> $$z\frac{\bar z}{|z|^2}=\frac{z\bar z}{|z|^2}=1, \qquad\text{por lo que}\qquad z^{-1}=\frac{\bar z}{|z|^2}.$$
>> **(v)** Tenemos
>> $$\begin{aligned} |z+w|^2 &=(z+w)(\bar z+\bar w)\\ &=|z|^2+z\bar w+\bar zw+|w|^2\\ &=|z|^2+2\operatorname{Re}(z\bar w)+|w|^2. \end{aligned}$$
>> Reemplazando $w$ por $-w$,
>> $$|z-w|^2=|z|^2-2\operatorname{Re}(z\bar w)+|w|^2.$$
>> **(vi)** Sumando las dos identidades de (v), los términos cruzados se cancelan:
>> $$|z+w|^2+|z-w|^2=2\bigl(|z|^2+|w|^2\bigr).$$

> [!exercise] Ejercicio 2 - Extensión a sumas y productos finitos
> Sean $z_i,w_i\in\mathbb C$ para todo $i=1,\ldots,n$. Demostrar que $$|w_1\cdots w_n|=|w_1|\cdots|w_n|\qquad\overline{z_1+\cdots+z_n}=\bar z_1+\cdots+\bar z_n\qquad\overline{w_1\cdots w_n}=\bar w_1\cdots\bar w_n$$
>
>> [!proof]-
>>
>> Las tres afirmaciones se prueban por inducción en $n$. El caso $n=1$ es inmediato. Si valen para $n$, las propiedades del ejercicio 1 dan $$\begin{aligned} |w_1\cdots w_nw_{n+1}| &=|w_1\cdots w_n|\,|w_{n+1}| =|w_1|\cdots |w_n||w_{n+1}|,\\ \overline{z_1+\cdots+z_n+z_{n+1}} &=\overline{z_1+\cdots+z_n}+\bar z_{n+1} =\bar z_1+\cdots+\bar z_n+\bar z_{n+1},\\ \overline{w_1\cdots w_nw_{n+1}} &=\overline{w_1\cdots w_n}\,\bar w_{n+1} =\bar w_1\cdots\bar w_n\bar w_{n+1}. \end{aligned}$$ los primeros iguales por propiedades del ejercicio 1, los segundos por HI

> [!exercise] Ejercicio 3 - Partes real e imaginaria
> Determinar la parte real e imaginaria de los siguientes números complejos.
> 1. $\frac1z$.
> 2. $z^3$.
> 3. $\frac{z-a}{z+a}$, $a\in\mathbb R$.
> 4. $\frac{3+5i}{1+7i}$.
> 5. $\left(\frac{-1+i\sqrt3}{2}\right)^3$.
> 6. $\left(\frac{-1-i\sqrt3}{2}\right)^6$.
> 7. $\left(\frac{-1+i}{\sqrt2}\right)^n$, para $2\le n\le8$.
>
>> [!proof]-
>>
>> Suponemos $z=x+iy$ y que los denominadores involucrados no se anulan.
>> **(a)**
>> $$\frac1z=\frac{\overline{z}}{|z|^{2}} =\frac{x-iy}{x^2+y^2}, \qquad \operatorname{Re}\frac1z=\frac{x}{x^2+y^2}, \quad \operatorname{Im}\frac1z=-\frac{y}{x^2+y^2}.$$
>> **(b)**
>> $$z^3=(x^3-3xy^2)+i(3x^2y-y^3).$$
>> Por tanto,
>> $$\operatorname{Re}(z^3)=x^3-3xy^2, \qquad \operatorname{Im}(z^3)=3x^2y-y^3.$$
>> **(c)** Para $a\in\mathbb R$,
>> $$\frac{z-a}{z+a}= \frac{x-a+iy}{x+a+iy} =\frac{(x-a+iy)(x+a-iy)}{(x+a)^2+y^2} =\frac{x^2+y^2-a^2}{(x+a)^2+y^2} +i\frac{2ay}{(x+a)^2+y^2}.$$
>> **(d)**
>> $$\frac{3+5i}{1+7i} =\frac{(3+5i)(1-7i)}{50} =\frac{19}{25}-\frac{8}{25}i.$$
>> **(e)** Notamos que $\left|\frac{-1+i\sqrt3}{2}\right|=1$ y entonces $$\frac{-1+i\sqrt3}{2}=\operatorname{cis}\left(\frac{2\pi}{3}\right),$$ y sabemos que $$cis\left( \frac{2\pi}{3} \right)^{3}=cis\left( 3\frac{2\pi}{3} \right)=cis(2\pi)=1$$ 
>> Entonces sus partes real e imaginaria son $1$ y $0$.
>> **(f)** Como
>> $$\frac{-1-i\sqrt3}{2}=\operatorname{cis}\left(\frac{4\pi}{3}\right),$$
>> su sexta potencia es $\operatorname{cis}(8\pi)=1$. Sus partes real e imaginaria son $1$ y $0$.
>> **(g)** La base es
>> $$\frac{-1+i}{\sqrt2}=\operatorname{cis}\left(\frac{3\pi}{4}\right).$$
>> Por la fórmula de De Moivre se obtiene:
>>
>> | $n$ | Valor | Parte real | Parte imaginaria |
>> |---:|---:|---:|---:|
>> | 2 | $-i$ | $0$ | $-1$ |
>> | 3 | $\frac{1+i}{\sqrt2}$ | $\frac1{\sqrt2}$ | $\frac1{\sqrt2}$ |
>> | 4 | $-1$ | $-1$ | $0$ |
>> | 5 | $\frac{1-i}{\sqrt2}$ | $\frac1{\sqrt2}$ | $-\frac1{\sqrt2}$ |
>> | 6 | $i$ | $0$ | $1$ |
>> | 7 | $-\frac{1+i}{\sqrt2}$ | $-\frac1{\sqrt2}$ | $-\frac1{\sqrt2}$ |
>> | 8 | $1$ | $1$ | $0$ |
>>

> [!exercise] Ejercicio 4 - Conjugado, módulo y argumento
> Determinar el conjugado, el valor absoluto y el argumento de los siguientes números complejos.
> 1. $-2+i$.
> 2. $-3$.
> 3. $(2+i)(4+3i)$.
> 4. $\frac{3-i}{\sqrt2+3i}$.
> 5. $i^{17}$.
> 6. $(1+i)^6$.
>
>> [!proof]-
>> Para calcular el argumento de $z=x+iy\ne0$, primero hallamos el ángulo de referencia
>> $$\alpha=\arctan\left(\left|\frac{y}{x}\right|\right),\qquad (x\ne0),$$
>> y luego lo corregimos según el cuadrante:
>> $$
>> \operatorname{Arg}(z)=
>> \begin{cases}
>> \alpha, & x>0,\ y>0,\\
>> \pi-\alpha, & x<0,\ y>0,\\
>> -\pi+\alpha, & x<0,\ y<0,\\
>> -\alpha, & x>0,\ y<0.
>> \end{cases}
>> $$
>> Sobre los ejes: si $x>0,y=0$, el argumento principal es $0$; si $x<0,y=0$, es $\pi$; si $x=0,y>0$, es $\pi/2$; y si $x=0,y<0$, es $-\pi/2$.
>>
>> Indicamos un argumento principal $\operatorname{Arg}z\in(-\pi,\pi]$; todos los otros argumentos se obtienen sumando $2k\pi$, $k\in\mathbb Z$.
>>
>> | Inciso | Número simplificado | Conjugado | Módulo | Argumento principal |
>> |---|---:|---:|---:|---:|
>> | (a) | $-2+i$ | $-2-i$ | $\sqrt5$ | $\pi-\arctan(1/2)$ |
>> | (b) | $-3$ | $-3$ | $3$ | $\pi$ |
>> | (c) | $5+10i$ | $5-10i$ | $5\sqrt5$ | $\arctan 2$ |
>> | (d) | $\frac{3\sqrt2-3}{11}-i\frac{9+\sqrt2}{11}$ | $\frac{3\sqrt2-3}{11}+i\frac{9+\sqrt2}{11}$ | $\sqrt{10/11}$ | $-\arctan(1/3)-\arctan(3/\sqrt2)$ |
>> | (e) | $i^{17}=i$ | $-i$ | $1$ | $\pi/2$ |
>> | (f) | $(1+i)^6=-8i$ | $8i$ | $8$ | $-\pi/2$ |
>>
>> En $d$ usamos
>> $$\left|\frac{3-i}{\sqrt2+3i}\right| =\frac{\sqrt{10}}{\sqrt{11}}, \qquad \operatorname{Arg}\left(\frac{3-i}{\sqrt2+3i}\right) =\operatorname{Arg}(3-i)-\operatorname{Arg}(\sqrt2+3i).$$

> [!exercise] Ejercicio 5 - Caracterización de los números reales
> Dado $z\in\mathbb C$, demostrar que $z\in\mathbb R$ si y sólo si $z=\bar z$.
>
>> [!proof]-
>>
>> Si $z=x+iy\in\mathbb R$, entonces $y=0$ y $z=x=\bar z$. Recíprocamente, si $z=\bar z$, entonces
>> $$x+iy=x-iy \quad\Longrightarrow\quad 2iy=0 \quad\Longrightarrow\quad y=0,$$
>> de modo que $z=x\in\mathbb R$.

> [!exercise] Ejercicio 6 - Desigualdad triangular inversa e igualdad
> Sean $z,w\in\mathbb C$. Probar que $\bigl||z|-|w|\bigr|\le|z-w|$. Dar condiciones necesarias y suficientes para que valga la igualdad.
>
>> [!proof]-
>>
>> Por la desigualdad triangular,
>> $$|z|=|(z-w)+w|\le |z-w|+|w|,$$
>> por lo que $|z|-|w|\le |z-w|$. 
>> Intercambiando $z$ y $w$ resulta $|w|-|z|\le|z-w|$ y multiplicando por $-1$ tenemos $|z|-|w|\geq -|z-w|$ 
>> Juntas, estas desigualdades dan
>> $$\boxed{\bigl||z|-|w|\bigr|\le |z-w|}.$$
>> Hay igualdad si y sólo si $z$ y $w$ están sobre la misma semirrecta con origen en $0$, incluyendo el caso en que alguno es cero. 
>> Veamoslo si $z=tw$ con $t\geq0$ y es directo verlo reemplazando de ambos lados.
>> En sentido inverso, supongamos por ejemplo $|z|\ge|w|$. Entonces $$|z-w|=||z|-|w||=|z|-|w|$$ por lo tanto $|z-w|+|w|=|z|$ 
>> Finalmente $$|z|=|(z-w)+w|\le|z-w|+|w|=|z|$$
>> La igualdad triangular ocurre precisamente cuando $z-w$ y $w$ tienen la misma dirección (o alguno es cero), lo cual implica que $z$ y $w$ están en la misma semirrecta. 
>> El caso $|w|\ge|z|$ es análogo.

>[!exercise] Ejercicio 7 - Conjuntos en el plano complejo
> Dibujar en el plano complejo los siguientes conjuntos.
> 1. $\{z\in\mathbb C:\bar z=z\}$.
> 2. $\{z\in\mathbb C:\bar zz=1\}$.
> 3. $\{z\in\mathbb C:3\operatorname{Re}(z)-1=2\operatorname{Im}(z)\}$.
> 4. $\{z\in\mathbb C:|z-1|=|z-i|\}$.
> 5. $\{z\in\mathbb C:|z-i|=2\}$.
> 6. $\left\{z\in\mathbb C:\frac{|z-3|}{|z+3|}=2\right\}$.
> 7. $\{z\in\mathbb C:|z+3|+|z-3|=10\}$.
> 8. $\{z\in\mathbb C:z^2+\bar z^2=2\}$.
> 9. $\{z\in\mathbb C:-1\le\operatorname{Re}(z)\le1\text{ y }|z|\le2\}$.
> 10. $\{z\in\mathbb C:2\le|z-1+i|\le3\}$.
> 11. $\{z\in\mathbb C:|\operatorname{Arg}(z-i)|<\pi/6\}$.
> 12. $\{z\in\mathbb C:|\operatorname{Arg}(iz+1)|=\pi/3\}$.
>
>> [!proof]-
>>
>> Ponemos $z=x+iy$.
>> 1. $\bar z=z\iff y=0$: **el eje real**.
>> 2. $|z|^{2}=\bar zz=1\iff x^2+y^2=1$: **la circunferencia unidad**.
>> 3. $3\operatorname{Re}z-1=2\operatorname{Im}z\iff 3x - 1 =2y \iff y=(3x-1)/2$: **una recta**.
>> 4. $|z-1|=|z-i|$ equivale a
>>    $$   (x-1)^2+y^2=x^2+(y-1)^2 \iff y=x.$$
>>    Es la mediatriz del segmento que une $1$ con $i$.
>> 5. $|z-i|=2$: **circunferencia de centro $i=(0,1)$ y radio $2$**.
>> 6. Al elevar al cuadrado $|z-3|=2|z+3|$,
>>    $$ (x-3)^2+y^2=4\bigl((x+3)^2+y^2\bigr). $$
>>    Desarrollando los cuadrados:
>>    $$ x^2-6x+9+y^2=4x^2+24x+36+4y^2. $$
>>    Pasando todo a un miembro y dividiendo por $3$:
>>    $$ x^2+10x+9+y^2=0. $$
>>    Completamos el cuadrado usando $x^2+10x=(x+5)^2-25$:
>>    $$ (x+5)^2-25+9+y^2=0
>>    \iff (x+5)^2+y^2=16. $$
>>    Es la circunferencia de centro $(-5,0)$ y radio $4$.
>> 7. $|z+3|+|z-3|=10$: **elipse** con focos $(-3,0)$ y $(3,0)$. Como $2a=10$, $a=5$, $c=3$ y $b=\sqrt{a^2-c^2}=4$; su ecuación es
>>    $$   \frac{x^2}{25}+\frac{y^2}{16}=1.$$
>> 8. $z^2+\bar z^2=2$ equivale (abriendo los cuadrados)n a $2(x^2-y^2)=2$. Es la hipérbola
>>    $$   x^2-y^2=1.$$
>> 9. $-1\le x\le1$ y $x^2+y^2\le4$: **la parte cerrada del disco de centro $0$ y radio $2$ comprendida entre las rectas $x=-1$ y $x=1$**.
>> 10. Como $z=x+iy$, elevamos la desigualdad al cuadrado:
>>     $$2\le |z-1+i|\le3
>>     \iff 4\le (x-1)^2+(y+1)^2\le9.$$
>>     Comparando con $(x-a)^2+(y-b)^2=r^2$, el centro es
>>     $$(a,b)=(1,-1),$$
>>     y los radios son $\sqrt4=2$ y $\sqrt9=3$. Por lo tanto, es la **corona circular cerrada** de centro $(1,-1)$, radio interior $2$ y radio exterior $3$.
>> 11. $|\operatorname{Arg}(z-i)|<\pi/6$: Son todos los $z$ que si los traslado hacia abajo una unidad ($-i$) caen en el dado por $-\frac{\pi}{6}$ y $\frac{\pi}{6}$ osea etre $-30$ y $30$ Que seria lo mismo que mirar el cono y trasladarlo hacia arriba una unidad (por el $i$)   
>> 12. Sea $iz+1=(1-y)+ix$. La condición $|\operatorname{Arg}(iz+1)|=\pi/3$ que son $\pm 60^{\circ}$. Por lo tanto $$\tan 60^{\circ}=\sqrt{ 3 }=\left| \frac{x}{1-y}\right| $$ por lo tanto $$x=\pm\sqrt3(1-y),\qquad y<1.$$

>[!exercise] Ejercicio 8 - Cálculo de raíces
>Calcular las siguientes raíces.
>- **(a)** Sextas de la unidad.
>- **(b)** Cuadradas de $i$.
>- **(c)** Cúbicas de $i$.
>- **(d)** Cuadradas de $\sqrt3+3i$.
>
>>[!Proof]-
>>- (a)
>>	1. Las raíces sextas de la unidad son $$z_k=\operatorname{cis}\left(\frac{k\pi}{3}\right),\qquad k=0,1,\ldots,5.$$
>>	2. En forma binómica, son $$1,\quad \frac12+i\frac{\sqrt3}{2},\quad -\frac12+i\frac{\sqrt3}{2},\quad -1,\quad -\frac12-i\frac{\sqrt3}{2},\quad \frac12-i\frac{\sqrt3}{2}.$$
>>- (b)
>>	1. Buscamos todos los números complejos $z$ que satisfacen $z^2=i$. Escribimos $z$ en forma polar como $z=r\operatorname{cis}(\theta)$, con $r\geq0$. Entonces $$z^2=r^2\operatorname{cis}(2\theta).$$
>>	2. El módulo de $i$ es $1$ y sus argumentos son $\frac{\pi}{2}+2k\pi$, con $k\in\mathbb Z$; por lo tanto, $$i=\operatorname{cis}\left(\frac{\pi}{2}+2k\pi\right).$$
>>	3. Al comparar módulos y argumentos en $z^2=i$, obtenemos $$r^2=1,\qquad 2\theta=\frac{\pi}{2}+2k\pi.$$ Como $r\geq0$, resulta $$r=1,\qquad \theta=\frac{\pi}{4}+k\pi.$$
>>	4. Basta tomar $k=0$ y $k=1$, pues los demás enteros repiten estas soluciones módulo $2\pi$. Así, $$z_0=\operatorname{cis}\left(\frac{\pi}{4}\right),\qquad z_1=\operatorname{cis}\left(\frac{5\pi}{4}\right).$$
>>	5. Pasando a forma binómica mediante $\operatorname{cis}(\theta)=\cos(\theta)+i\sin(\theta)$, $$\begin{aligned}z_0&=\cos\left(\frac{\pi}{4}\right)+i\sin\left(\frac{\pi}{4}\right)=\frac{1+i}{\sqrt2},\\z_1&=\cos\left(\frac{5\pi}{4}\right)+i\sin\left(\frac{5\pi}{4}\right)=-\frac{1+i}{\sqrt2}.\end{aligned}$$ Por consiguiente, $$\boxed{z=\pm\frac{1+i}{\sqrt2}}.$$
>>	6. Verificamos ambas raíces: $$\left(\pm\frac{1+i}{\sqrt2}\right)^2=\frac{(1+i)^2}{2}=\frac{1+2i+i^2}{2}=i.$$
>>- (c)
>>	1. Analogamente las raíces cúbicas de $i$ son $$\operatorname{cis}\left(\frac{\pi}{6}+\frac{2k\pi}{3}\right),\qquad k=0,1,2.$$
>>	2. En forma binómica, son $$\frac{\sqrt3}{2}+\frac i2,\qquad -\frac{\sqrt3}{2}+\frac i2,\qquad -i.$$
>>- (d)
>>	1. Para $w=\sqrt3+3i$, su parte real es $x=\sqrt3$ y su parte imaginaria es $y=3$. Por lo tanto, su módulo es $$|w|=\sqrt{x^2+y^2}=\sqrt{(\sqrt3)^2+3^2}=\sqrt{3+9}=\sqrt{12}=2\sqrt3.$$
>>	2. Como $x>0$ e $y>0$, el número $w$ está en el primer cuadrante. Si $\theta=\arg(w)$, entonces $$\tan\tilde\theta=\frac{y}{x}=\frac{3}{\sqrt3}=\sqrt3.$$ Como $\tan\left(\frac{\pi}{3}\right)=\sqrt3$ y $\theta$ pertenece al primer cuadrante, resulta $$\widetilde\theta=\frac{\pi}{3}.$$
>>	3. De este modo, la forma polar de $w$ es $$\sqrt3+3i=2\sqrt3\operatorname{cis}\left(\frac{\pi}{3}\right).$$
>>	4. Para hallar sus raíces cuadradas, planteamos $z^2=w$ con $z=rcis(\theta)$ Entonces $$r^{2}cis(2\theta)=2\sqrt{ 3 }cis\left( \frac{\pi}{3} \right)$$ $$2\theta=\frac{\pi}{3}+2k\pi,\qquad\text{es decir,}\qquad\theta=\frac{\pi}{6}+k\pi.$$ Tomando $k=0$ y $k=1$, obtenemos $$z_0=\sqrt{2\sqrt3}\operatorname{cis}\left(\frac{\pi}{6}\right),\qquad z_1=\sqrt{2\sqrt3}\operatorname{cis}\left(\frac{7\pi}{6}\right).$$
>>	5. En forma cartesiana, las raíces son $$\boxed{z=\pm\left(\sqrt{\frac{3\sqrt3}{2}}+i\sqrt{\frac{\sqrt3}{2}}\right)}.$$

> [!exercise] Ejercicio 9 - Raíces primitivas de la unidad
> Una raíz $n$-ésima de la unidad $a\in\mathbb C$ se dice primitiva si $a^n=1$ y $a^k\ne1$ para todo $k=1,\ldots,n-1$.
>- **(a)** Demostrar que toda raíz $n$-ésima de la unidad es raíz $m$-ésima primitiva para algún $m\mid n$.
>- **(b)** Sea $a$ una raíz $n$-ésima primitiva de la unidad. Demostrar que $a^k$ es raíz $m$-ésima primitiva con $m=\frac{n}{\operatorname{mcd}(k,n)}$.
>- **(c)** Dar dos ejemplos de $a$ y $b$, con $a$ raíz $n$-ésima primitiva y $b$ raíz $m$-ésima primitiva, tales que $ab$ sea raíz $k$-ésima primitiva de la unidad, con $k=\operatorname{mcm}(m,n)$ en un caso y $k<\operatorname{mcm}(m,n)$ en el otro.
>
>>[!Proof]-
>>- (a)
>>	1. Como $a^n=1$, el conjunto $S=\{k\in\mathbb N:1\le k\le n,\ a^k=1\}$ es no vacío, pues $n\in S$. Por el principio de buena ordenación, existe $$m=\min S.$$
>>	2. Como $m\in S$, tenemos $a^m=1$. Además, por la minimalidad de $m$, se cumple $a^j\ne1$ para todo $j=1,\ldots,m-1$. Por lo tanto, $a$ es una raíz $m$-ésima primitiva de la unidad.
>>	3. Dividimos $n=qm+r$, con $0\le r<m$. Entonces $$1=a^n=a^{qm+r}=(a^m)^q a^r=a^r.$$ Si $r>0$, esto contradice la minimalidad de $m$; por consiguiente, $r=0$ y, por tanto, $m\mid n$.
>>- (b)
>>	1. Como $a$ tiene orden $n$, probamos primero que, para todo $r\in\mathbb Z$, $$a^r=1\iff n\mid r.$$ Si $n\mid r$, entonces $r=\ell n$ y $a^r=(a^n)^\ell=1$. Recíprocamente, escribimos $r=\ell n+s$, con $0\le s<n$. Si $a^r=1$, entonces $$1=a^r=(a^n)^\ell a^s=a^s.$$ La primitividad de $a$ excluye $1\le s<n$, por lo que $s=0$ y, en consecuencia, $n\mid r$.
>>	2. Sea $d=\operatorname{mcd}(k,n)$. El orden de $a^k$ es el menor $q\ge1$ tal que $$(a^k)^q=1 \iff a^{kq}=1 \iff n\mid kq,$$ donde la última equivalencia sigue del paso anterior aplicado a $r=kq$.
>>	3. Como $d=\operatorname{mcd}(k,n)$ divide tanto a $n$ como a $k$, existen enteros $n_0$ y $k_0$ tales que $n=dn_0$ y $k=dk_0$. 
>>	4. Además, $\operatorname{mcd}(n_0,k_0)=1$: si un entero $c>1$ dividiera a ambos, entonces $cd$ sería un divisor común de $n$ y $k$ mayor que $d$, contradiciendo la definición de máximo común divisor.
>>	5. Por lo tanto, $$n\mid kq\iff dn_0\mid dk_0q\iff n_0\mid k_0q\iff n_0\mid q,$$ donde la última equivalencia usa si $\operatorname{mcd}(a,b)=1$ y $a|bc$ entonces $a|c$ 
>>	6. Así, el menor $q\ge1$ posible es $n_0$, es decir, $$\boxed{q=n_0=\frac{n}{\operatorname{mcd}(k,n)}}.$$
>>- (c)
>>	1. Caso $k=\operatorname{mcm}(m,n)$: tomamos $n=2$, $m=1$, $a=-1$ y $b=1$. Entonces $a$ es primitiva de orden $2$, $b$ es primitiva de orden $1$ y $ab=-1$ tiene orden $$2=\operatorname{mcm}(1,2).$$
>>	2. Caso $k<\operatorname{mcm}(m,n)$: tomamos $n=m=2$ y $a=b=-1$. Ambos son raíces primitivas de orden $2$, pero $ab=1$ tiene orden $$1<2=\operatorname{mcm}(2,2).$$

> [!exercise] Ejercicio 10 - El homomorfismo $\varphi(t)=\operatorname{cis}(t)$
> Demostrar que $\varphi(t)=\cos t+i\sin t$ es un homomorfismo de grupos del grupo aditivo $(\mathbb R,+)$ en el grupo multiplicativo $(S,\cdot)$, donde $S={z\in\mathbb C:|z|=1}$ con el producto complejo. Denotamos $\operatorname{cis}(t):=\cos t+i\sin t$.
>
>> [!proof]-
>>
>> Primero, $|\varphi(t)|=1$, así que $\varphi(t)\in S$. Las fórmulas de adición de seno y coseno dan
>> $$\begin{aligned} \varphi(s+t) &=\cos(s+t)+i\sin(s+t)\\ &=(\cos s+i\sin s)(\cos t+i\sin t)\\ &=\varphi(s)\varphi(t). \end{aligned}$$
>> Por consiguiente, $\varphi:(\mathbb R,+)\to(S,\cdot)$ es un homomorfismo de grupos. En particular, $\varphi(0)=1$ y $\varphi(-t)=\varphi(t)^{-1}$.

>[!exercise] Ejercicio 11 - Suma de raíces de la unidad
>Demostrar que si $z=\operatorname{cis}(2\pi/n)$, con $n\ge2$, entonces $1+z+z^2+\cdots+z^{n-1}=0$.
>>[!Proof]-
>>1. **Potencia $n$-ésima.** Por la fórmula de De Moivre, $$z^n=\left(\operatorname{cis}\left(\frac{2\pi}{n}\right)\right)^n=\operatorname{cis}(2\pi)=1.$$
>>2. **El denominador no se anula.** Como $n\ge2$, se tiene $0<2\pi/n\le\pi$; por lo tanto, $2\pi/n$ no es un múltiplo entero de $2\pi$ y $z=\operatorname{cis}(2\pi/n)\ne1$. En consecuencia, $1-z\ne0$.
>>3. **Suma geométrica.** Podemos aplicar la fórmula de la suma geométrica: $$1+z+z^2+\cdots+z^{n-1}=\sum_{i=0}^{n-1}z^i=\frac{1-z^n}{1-z}=0.$$

> [!exercise] Ejercicio 12 - Si $\operatorname{Re}(z^n)\ge0$ para todo $n$
> Sea $z\in\mathbb C$ tal que $\operatorname{Re}(z^n)\ge0$ para todo $n\in\mathbb N$. Mostrar que $z$ es un número real no negativo.
>
>> [!Proof]-
>>1. **Reducción al argumento.** Si $z=0$, la conclusión es inmediata. Supongamos entonces que $z\ne0$ y escribamos $z=r\operatorname{cis}(\theta)$, con $r>0$ y sin perdida de generalidades $\theta\in (-\pi,\pi]$. 
>>2. Como el caso $n=1$ da $\operatorname{Re}(z)=r\cos(\theta)\ge0$, podemos entonces asumir $$\theta\in[-\pi/2,\pi/2]$$
>>3. **Condición sobre los múltiplos del argumento.** Para todo $n\in\mathbb N$ se tiene $$\operatorname{Re}(z^n)=\operatorname{Re}\bigl(r^n\operatorname{cis}(n\theta)\bigr)=r^n\cos(n\theta)\ge0.$$ Puesto que $r^n>0$, resulta $$\cos(n\theta)\ge0$$ para todo $n\in\mathbb N$.
>>4. **El argumento no puede ser positivo.** Supongamos que $0<\theta\le\pi/2$. Por la propiedad arquimediana existe un mínimo $N\in\mathbb N$ tal que $$N\theta>\pi/2$$
>>5. La minimalidad de $N$ implica $(N-1)\theta\le\pi/2$ y, por tanto $$N\theta\le\frac{\pi}{2}+\theta\le \frac{\pi}{2}+ \frac{\pi}{2}=\pi.$$ Así, $\pi/2<N\theta\le\pi$, de donde $\cos(N\theta)<0$, en contradicción con el paso anterior.
>>6. **El argumento tampoco puede ser negativo.** Si $-\pi/2\leq \theta<0$, entonces $0<-\theta\leq \pi/2$ entonces por el caso recien visto existe $\widetilde{N}\in \mathbb{N}$ tal que $\cos(\widetilde{N}(-\theta))<0$
>>7. Como el coseno es par, $$\cos\bigl(n(-\theta)\bigr)=\cos(-n\theta)=\cos(n\theta)\ge0$$ para todo $n\in\mathbb N$. En particular para $n=N$. Lo que es absurdo
>>8. Como $\theta$ no puede ser positivo ni negativo tenemos que $\theta=0$.
>>9. **Conclusión.** Finalmente, $z=r\operatorname{cis}(0)=r$, con $r>0$. Junto con el caso inicial $z=0$, concluimos que $z$ es un número real no negativo.

>[!exercise] Ejercicio 13 - Distancia cordal en $\mathbb C_\infty$
>Sea $S^2$ la esfera unidad en $\mathbb R^3$ y $\varphi:S^2\to\mathbb C_\infty$ la proyección estereográfica. Definimos $d:\mathbb C_\infty\to\mathbb R$ por $d(z,z')=\|\varphi^{-1}(z)-\varphi^{-1}(z')\|$, donde $\|\cdot\|$ es la norma euclídea en $\mathbb R^3$. Demostrar que:
>- (a) $d$ es una distancia en $\mathbb C_\infty$.
>- (b) $d(z,z')=\frac{2|z-z'|}{\sqrt{(1+|z|^2)(1+|z'|^2)}}$ para $z,z'\in\mathbb C$.
>- (c) $d(z,\infty)=\frac2{\sqrt{1+|z|^2}}$ para $z\in\mathbb C$.
>
>>[!proof]-
>>
>> Para la proyección estereográfica usual, su inversa es
>> $$\varphi^{-1}(z) =\frac{1}{1+|z|^2} \left(2\operatorname{Re}z,\,2\operatorname{Im}z,\,|z|^2-1\right), \qquad \varphi^{-1}(\infty)=(0,0,1).$$
>> **(i)** Como $\varphi^{-1}:\mathbb C_\infty\to S^2$ es biyectiva y la norma euclídea induce una distancia en $S^2$,
>> $$d(z,z')=\|\varphi^{-1}(z)-\varphi^{-1}(z')\|$$
>> es no negativa, simétrica y satisface la desigualdad triangular. Además,
>> $$d(z,z')=0 \iff \varphi^{-1}(z)=\varphi^{-1}(z') \iff z=z'.$$
>> Así, $d$ es una distancia en $\mathbb C_\infty$.
>> **(ii)** Si $P=\varphi^{-1}(z)$ y $Q=\varphi^{-1}(z')$, como $\|P\|=\|Q\|=1$, $$\|P-Q\|^2=\lVert P \rVert^{2}+\lVert Q \rVert ^{2}-2\langle P,Q\rangle=2-2P\cdot Q=2(1-P\cdot Q).$$
>> Escribamos $z=x+iy$ y $z'=u+iv$. Al sustituir las coordenadas de $P$ y $Q$ en el producto interno euclídeo se obtiene $$P\cdot Q=\frac{(2x)(2u)+(2y)(2v)+(|z|^2-1)(|z'|^2-1)}{(1+|z|^2)(1+|z'|^2)}=\frac{4(xu+yv)+(|z|^2-1)(|z'|^2-1)}{(1+|z|^2)(1+|z'|^2)}.$$
>> El término $xu+yv$ también puede escribirse usando números complejos, pues $$\operatorname{Re}(z\overline{z'})=\operatorname{Re}\bigl((x+iy)(u-iv)\bigr)=xu+yv.$$ Por eso, $$P\cdot Q=\frac{4\operatorname{Re}(z\overline{z'})+(|z|^2-1)(|z'|^2-1)}{(1+|z|^2)(1+|z'|^2)}.$$
>> Ahora llevamos $1-P\cdot Q$ al denominador común y simplificamos: $$\begin{aligned}1-P\cdot Q&=\frac{(1+|z|^2)(1+|z'|^2)-4\operatorname{Re}(z\overline{z'})-(|z|^2-1)(|z'|^2-1)}{(1+|z|^2)(1+|z'|^2)}\\&=\frac{2|z|^2+2|z'|^2-4\operatorname{Re}(z\overline{z'})}{(1+|z|^2)(1+|z'|^2)}\\&=\frac{2|z-z'|^2}{(1+|z|^2)(1+|z'|^2)},\end{aligned}$$ donde usamos $|z-z'|^2=|z|^2+|z'|^2-2\operatorname{Re}(z\overline{z'})$.
>> En consecuencia, $$\|P-Q\|^2=2(1-P\cdot Q)=\frac{4|z-z'|^2}{(1+|z|^2)(1+|z'|^2)}.$$
>> Por lo tanto,
>> $$\boxed{ d(z,z')= \frac{2|z-z'|}{\sqrt{(1+|z|^2)(1+|z'|^2)}} }.$$
>> **(iii)** Sean $P=\varphi^{-1}(z)$ y $N=\varphi^{-1}(\infty)=(0,0,1)$. Como ambos pertenecen a $S^2$, se tiene $\|P\|=\|N\|=1$. Primero calculamos su producto interno: $$\begin{aligned}P\cdot N&=\frac{1}{1+|z|^2}\left(2\operatorname{Re}z,2\operatorname{Im}z,|z|^2-1\right)\cdot(0,0,1)\\&=\frac{|z|^2-1}{1+|z|^2},\end{aligned}$$ pues el producto interno con $(0,0,1)$ selecciona la tercera coordenada de $P$.
>> Utilizando nuevamente la identidad para la norma de una diferencia, obtenemos $$\begin{aligned}d(z,\infty)^2&=\|P-N\|^2\\&=\|P\|^2+\|N\|^2-2P\cdot N\\&=2-2\frac{|z|^2-1}{1+|z|^2}\\&=\frac{2(1+|z|^2)-2(|z|^2-1)}{1+|z|^2}\\&=\frac{4}{1+|z|^2}.\end{aligned}$$
>> Como la distancia es no negativa, al tomar la raíz cuadrada resulta
>> $$\boxed{d(z,\infty)=\frac{2}{\sqrt{1+|z|^2}}}.$$

>[!exercise] Ejercicio 14 - Producto de Cauchy de series absolutamente convergentes
> Sean $\sum_{n=0}^{\infty}a_n$ y $\sum_{n=0}^{\infty}b_n$ dos series absolutamente convergentes. Para cada $n\in\mathbb N$ definimos $c_n=\sum_{k=0}^n a_kb_{n-k}$. Probar que la serie $\sum_{n=0}^{\infty}c_n$ es absolutamente convergente con suma igual a $\left(\sum_{n=0}^{\infty}a_n\right)\left(\sum_{n=0}^{\infty}b_n\right)$.
>
>>[!proof]-
>>1. Sean $$A=\sum_{n=0}^{\infty}a_n, \qquad B=\sum_{n=0}^{\infty}b_n, \qquad c_n=\sum_{k=0}^n a_kb_{n-k}.$$
>>2. Como las dos series convergen absolutamente, las cantidades $\sum_{k=0}^{\infty}|a_k|$ y $\sum_{j=0}^{\infty}|b_j|$ son finitas. Para cada $j$ fijo, $|b_j|$ es constante respecto de $k$, de modo que $$\sum_{k=0}^{\infty}|a_kb_j|=|b_j|\sum_{k=0}^{\infty}|a_k|.$$
>>3. Al sumar ahora respecto de $j$, obtenemos que la suma de los valores absolutos del arreglo doble es finita: $$\begin{aligned}\sum_{j=0}^{\infty}\sum_{k=0}^{\infty}|a_kb_j|&=\sum_{j=0}^{\infty}|b_j|\left(\sum_{k=0}^{\infty}|a_k|\right)\\&=\left(\sum_{k=0}^{\infty}|a_k|\right)\left(\sum_{j=0}^{\infty}|b_j|\right)<\infty.\end{aligned}$$
>>4. Por la desigualdad triangular, para cada $n$ se tiene $$|c_n|=\left|\sum_{k=0}^{n}a_kb_{n-k}\right|\leq \sum_{k=0}^{n}|a_k||b_{n-k}|.$$
>>5. Cada término de la última suma pertenece al arreglo doble: corresponde a la posición $(k,j)$ con $j=n-k\geq0$. Como todos estos términos son no negativos, al sumar sobre $n$ podemos acotar la suma por la de todo el arreglo: $$\sum_{n=0}^{\infty}|c_n|\leq\sum_{n=0}^{\infty}\sum_{k=0}^{n}|a_k||b_{n-k}|\leq\sum_{k=0}^{\infty}\sum_{j=0}^{\infty}|a_k||b_j|<\infty.$$por tanto, $\sum_{n=0}^{\infty}c_n$ converge absolutamente.
>>6. Resta identificar su suma. En este punto sí usamos que el arreglo doble converge absolutamente: ello permite reordenar y reagrupar sus términos sin alterar el resultado. 
>>7. El cambio $j=n-k$ establece una correspondencia biyectiva entre los índices $n\geq0$, $0\leq k\leq n$, y los pares $k,j\geq0$, pues inversamente $n=k+j$. Por consiguiente, $$\sum_{n=0}^{\infty}\sum_{k=0}^{n}a_kb_{n-k}=\sum_{k=0}^{\infty}\sum_{j=0}^{\infty}a_kb_j=\sum_{k=0}^{\infty}a_k\left(\sum_{j=0}^{\infty}b_j\right)$$ como queriamos $\square$ 

^babca2

>[!exercise] Ejercicio 15 - Suma y producto de series de potencias
>Sean $a\in\mathbb C$ y $r\in\mathbb R$, con $r>0$. Sean $\sum_{n=0}^{\infty}a_n(z-a)^n$ y $\sum_{n=0}^{\infty}b_n(z-a)^n$ series de potencias con radio de convergencia mayor o igual que $r$, y sea $c_n=\sum_{k=0}^n a_kb_{n-k}$. Probar que las series $\sum_{n=0}^{\infty}(a_n+b_n)(z-a)^n$ y $\sum_{n=0}^{\infty}c_n(z-a)^n$ tienen radio de convergencia mayor o igual que $r$. 
>
>Además, probar que si $|z-a|<r$, entonces:
>- (a) $\sum_{n=0}^{\infty}(a_n+b_n)(z-a)^n=\sum_{n=0}^{\infty}a_n(z-a)^n+\sum_{n=0}^{\infty}b_n(z-a)^n$.
>- (b) $\sum_{n=0}^{\infty}c_n(z-a)^n=\left(\sum_{n=0}^{\infty}a_n(z-a)^n\right)\left(\sum_{n=0}^{\infty}b_n(z-a)^n\right)$.
>
>>[!proof]-
>>- (a)
>>	1. Fijemos $z$ con $|z-a|<r$. Como los radios de convergencia de las dos series son al menos $r$, convergen absolutamente $$\sum_{n=0}^{\infty}|a_n||z-a|^n, \qquad \sum_{n=0}^{\infty}|b_n||z-a|^n.$$
>>	2. Para la suma, $$\sum_{n=0}^{\infty}|a_n+b_n||z-a|^n \le \sum_{n=0}^{\infty}|a_n||z-a|^n +\sum_{n=0}^{\infty}|b_n||z-a|^n<\infty.$$
>>	3. Por ello la serie de coeficientes $a_n+b_n$ converge en todo disco $|z-a|<r$, así que su radio es al menos $r$, y la linealidad de las sumas parciales da $$\boxed{ \sum_{n=0}^{\infty}(a_n+b_n)(z-a)^n =\sum_{n=0}^{\infty}a_n(z-a)^n +\sum_{n=0}^{\infty}b_n(z-a)^n }.$$
>>- (b)
>>	1. Para el producto, definamos $$\alpha_n=a_n(z-a)^n, \qquad \beta_n=b_n(z-a)^n.$$
>>	2. El coeficiente $n$-ésimo de su producto de Cauchy es $$\widetilde{c}_{n}=\sum_{k=0}^n\alpha_k\beta_{n-k}=\sum_{k=0}^n a_k(z-a)^{k} b_{n-k}(z-a)^{n-k} =\left(\sum_{k=0}^n a_kb_{n-k}\right)(z-a)^n =c_n(z-a)^n.$$
>>	3. Por el [[FA-Pr1#^babca2|Ejercicio 14]], la serie $\sum_{n=0}^{\infty}\widetilde{c}_{n}$ converge absolutamente osea $$\sum_{n=0}^{\infty}c_n(z-a)^n=\sum_{n=0}^{\infty}\widetilde{c}_{n}<\infty$$ y ademas por el mismo ejercicio $$\boxed{ \sum_{n=0}^{\infty}c_n(z-a)^n =\left(\sum_{n=0}^{\infty}a_n(z-a)^n\right) \left(\sum_{n=0}^{\infty}b_n(z-a)^n\right) }.$$
>>	4. Como esto vale para todo $|z-a|<r$, la serie producto también tiene radio de convergencia al menos $r$.

>[!exercise] Ejercicio 16 - Radios de convergencia
>Encontrar el radio de convergencia de cada una de las siguientes series de potencias.
>- (a) $\sum_{n=0}^{\infty}a^nz^n$, $a\in\mathbb C$.
>- (b) $\sum_{n=0}^{\infty}a^{n^2}z^n$, $a\in\mathbb C$.
>- (c) $\sum_{n=0}^{\infty}k^nz^n$, $k\in\mathbb Z\setminus{0}$.
>- (d) $\sum_{n=0}^{\infty}z^{n!}$.
>
>> [!proof]-
>>- Usamos la fórmula de Cauchy-Hadamard $$\frac1R=\limsup_{n\to\infty}|c_n|^{1/n}.$$
>>- **(a)** Para $c_n=a^n$, $$|c_n|^{1/n}=|a|.$$entonces $$\boxed{ R=\begin{cases} \infty,&a=0,\\ 1/|a|,&a\ne0. \end{cases}}$$
>>- **(b)** Para $c_n=a^{n^2}$, $$|c_n|^{1/n}=|a|^n.$$por consiguiente, $$\boxed{ R=\begin{cases} \infty,&|a|<1,\\ 1,&|a|=1,\\ 0,&|a|>1. \end{cases}}$$
>> **(c)** Para $c_n=k^n$, con $k\ne0$,
>> $$\boxed{R=\frac1{|k|}}.$$
>> **(d)** La serie $\sum_{n=0}^{\infty}z^{n!}$ converge absolutamente si $|z|<1$, pues para $n\ge1$, $n!\ge n$ y $$|z|^{n!}\le |z|^n.$$ y por que la serie geometrica $\sum^{\infty}_{n=1}|z|^{n}$ converge cuando $|z|<1$. Por lo tanto $R\geq 1$ 
>> Si $|z|\ge1$, sus términos no tienden a cero osea diverge. Por lo tanto,
>> $$\boxed{R=1}.$$

>[!exercise] Serie lacunaria
>Demostrar que el radio de convergencia de la serie de potencias $\sum_{n=1}^{\infty}\frac{(-1)^n}{n}z^{n(n+1)}$ es $1$, y discutir la convergencia para $z=1,-1,i$.
>
>>[!proof]-
>>- **1era Forma**
>>	1. Consideremos $$\sum_{n=1}^{\infty}\frac{(-1)^n}{n}z^{n(n+1)}.$$
>>	2. Si $|z|<1$, como $n(n+1)\ge2n$, $$\sum_{n=1}^{\infty}\left|\frac{(-1)^n}{n}z^{n(n+1)}\right| \le \sum_{n=1}^{\infty}\frac{|z|^{2n}}n<\infty.$$
>>	3. Si $|z|>1$, el módulo del término general es $|z|^{n(n+1)}/n$, que no tiende a cero. Por consiguiente, el radio de convergencia es $$\boxed{R=1}.$$
>>- **2da Forma**
>>	1. Alternativamente, escribimos la serie en la forma usual $\sum_{k=0}^{\infty}a_kz^k$, donde $$a_k=\begin{cases}\dfrac{(-1)^n}{n},&k=n(n+1)\text{ para algún }n\ge1,\\0,&\text{en otro caso}.\end{cases}$$
>>	2. Por la fórmula de Cauchy-Hadamard, $$\frac1R=\limsup_{k\to\infty}|a_k|^{1/k}.$$
>>	3. Si $k=n(n+1)$, entonces $$|a_k|^{1/k}=\left(\frac1n\right)^{1/[n(n+1)]}=n^{-1/[n(n+1)]}.$$
>>	4. Para calcular el límite de esta subsucesión, tomamos logaritmos: $$\log\left(n^{-1/[n(n+1)]}\right)=-\frac{\log n}{n^2+n}\longrightarrow0,$$ pues, por L'Hôpital, $$\lim_{x\to\infty}-\frac{\log x}{x^2+x}=\lim_{x\to\infty}-\frac{1}{2x^2+x}=0.$$
>>	5. Por continuidad de la exponencial, $n^{-1/[n(n+1)]}\to1$. 
>>	6. Además, $0\le |a_k|^{1/k}\le1$ para todo $k\ge1$; 
>>	7. Por lo tanto, la sucesión completa tiene límite superior a lo sumo $1$, mientras que la subsucesión de índices $k=n(n+1)$ muestra que su límite superior es al menos $1$. 
>>	8. Así, $$\limsup_{k\to\infty}|a_k|^{1/k}=1,$$ y nuevamente $$\boxed{R=1}.$$
>>- **Analisis de puntos**
>> 	- Para $z=1$, queda $\sum_{n\ge1}(-1)^n/n$, que converge por Leibniz (por que $\frac{1}{n}$ es dereciente y tiende a $0$)i, pero no absolutamente por que $\sum^{\infty}_{n=1} \frac{1}{n}$ sabemos que diverge 
>> 	- Para $z=-1$, es directo ver que $(-1)^{n(n+1)}=(-1)^{n}$. Entonces se obtiene otra vez $\sum_{n\ge1}(-1)^n/n$, con convergencia condicional.
>> 	- Para $z=i$, los factores $$  (-1)^n i^{n(n+1)}$$son periódicos de período $4$, con patrón $$1,-1,-1,1,1,-1,-1,1,\ldots$$sus sumas parciales están acotadas, por lo que la serie converge por el criterio de Dirichlet al multiplicarlos por $1/n\to0$. No converge absolutamente, porque el valor absoluto de cada término es $1/n$.
>>
>>	En los tres puntos $z=1,-1,i$, por tanto, la convergencia es **condicional**.
