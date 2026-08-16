# Funciones Analíticas - Práctico 1: soluciones

Fuente: [FA-Pr1.pdf](FA-Pr1.pdf).

En lo que sigue escribimos $z=x+iy$, con $x,y\in\mathbb R$, y usamos

$$\overline z=x-iy,\qquad |z|=\sqrt{x^2+y^2},\qquad \operatorname{cis}(t)=\cos t+i\sin t.$$

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
>> 12. Sea $iz+1=(1-y)+ix$. La condición $|\operatorname{Arg}(iz+1)|=\pi/3$ describe las dos semirrectas
>>     $$    x=\pm\sqrt3(1-y),\qquad y<1.$$
>>     Parten de $i=(0,1)$, que queda excluido, y bajan hacia la derecha y hacia la izquierda.

> [!exercise] Ejercicio 8 - Cálculo de raíces
> Calcular las siguientes raíces.
> 13. Sextas de la unidad.
> 14. Cuadradas de $i$.
> 15. Cúbicas de $i$.
> 16. Cuadradas de $\sqrt3+3i$.
>
>> [!proof]-
>>
>> **(a) Raíces sextas de la unidad.** Son
>> $$z_k=\operatorname{cis}\left(\frac{k\pi}{3}\right),\qquad k=0,1,\ldots,5,$$
>> es decir,
>> $$1,\quad \frac12+i\frac{\sqrt3}{2},\quad -\frac12+i\frac{\sqrt3}{2},\quad -1,\quad -\frac12-i\frac{\sqrt3}{2},\quad \frac12-i\frac{\sqrt3}{2}.$$
>> **(b) Raíces cuadradas de $i$.** Puesto que $i=\operatorname{cis}(\pi/2)$, son
>> $$\operatorname{cis}\left(\frac\pi4\right), \quad \operatorname{cis}\left(\frac{5\pi}4\right),$$
>> o sea
>> $$\boxed{\pm\frac{1+i}{\sqrt2}}.$$
>> **(c) Raíces cúbicas de $i$.** Son
>> $$\operatorname{cis}\left(\frac\pi6+\frac{2k\pi}{3}\right), \qquad k=0,1,2,$$
>> es decir,
>> $$\frac{\sqrt3}{2}+\frac i2, \qquad -\frac{\sqrt3}{2}+\frac i2, \qquad -i.$$
>> **(d) Raíces cuadradas de $\sqrt3+3i$.** Como
>> $$\sqrt3+3i=2\sqrt3\operatorname{cis}\left(\frac\pi3\right),$$
>> las raíces son
>> $$\sqrt{2\sqrt3}\operatorname{cis}\left(\frac\pi6\right) \quad\text{y}\quad \sqrt{2\sqrt3}\operatorname{cis}\left(\frac{7\pi}6\right).$$
>> En forma cartesiana:
>> $$\boxed{\pm\left(\sqrt{\frac{3\sqrt3}{2}}+i\sqrt{\frac{\sqrt3}{2}}\right)}.$$

> [!exercise] Ejercicio 9 - Raíces primitivas de la unidad
> Una raíz $n$-ésima de la unidad $a\in\mathbb C$ se dice primitiva si $a^n=1$ y $a^k\ne1$ para todo $k=1,\ldots,n-1$.
> 17. Demostrar que toda raíz $n$-ésima de la unidad es raíz $m$-ésima primitiva para algún $m\mid n$.
> 18. Sea $a$ una raíz $n$-ésima primitiva de la unidad. Demostrar que $a^k$ es raíz $m$-ésima primitiva con $m=\frac{n}{\operatorname{mcd}(k,n)}$.
> 19. Dar dos ejemplos de $a$ y $b$, con $a$ raíz $n$-ésima primitiva y $b$ raíz $m$-ésima primitiva, tales que $ab$ sea raíz $k$-ésima primitiva de la unidad, con $k=\operatorname{mcm}(m,n)$ en un caso y $k<\operatorname{mcm}(m,n)$ en el otro.
>
>> [!proof]-
>>
>> **(i)** Sea $a^n=1$ y sea $m\ge1$ el menor entero positivo tal que $a^m=1$; por definición, $a$ es una raíz $m$-ésima primitiva. Dividimos $n=qm+r$, con $0\le r<m$. Entonces
>> $$1=a^n=(a^m)^q a^r=a^r.$$
>> Por la minimalidad de $m$, necesariamente $r=0$. Por tanto, $m\mid n$.
>> **(ii)** Supongamos que $a$ tiene orden $n$, y sea $d=\operatorname{mcd}(k,n)$. El orden de $a^k$ es el menor $q\ge1$ tal que
>> $$(a^k)^q=1 \iff a^{kq}=1 \iff n\mid kq.$$
>> Escribiendo $n=dn_0$, $k=dk_0$, con $\operatorname{mcd}(n_0,k_0)=1$, la última condición equivale a $n_0\mid q$. El menor $q$ posible es entonces
>> $$\boxed{\frac{n}{\operatorname{mcd}(k,n)}}.$$
>> **(iii)** Ejemplos:
>> - Caso $k=\operatorname{mcm}(m,n)$: tome $a=-1$, primitiva de orden $2$, y $b=\operatorname{cis}(2\pi/3)$, primitiva de orden $3$. Entonces
>>   $$  ab=\operatorname{cis}\left(\frac{5\pi}{3}\right)$$
>>   tiene orden $6=\operatorname{mcm}(2,3)$.
>> - Caso $k<\operatorname{mcm}(m,n)$: tome
>>   $$  a=\operatorname{cis}(2\pi/3),\qquad b=\operatorname{cis}(4\pi/3).$$
>>   Ambos tienen orden $3$, pero $ab=1$ tiene orden $1<3=\operatorname{mcm}(3,3)$.

> [!exercise] Ejercicio 10 - El homomorfismo $\varphi(t)=\operatorname{cis}(t)$
> Demostrar que $\varphi(t)=\cos t+i\sin t$ es un homomorfismo de grupos del grupo aditivo $(\mathbb R,+)$ en el grupo multiplicativo $(S,\cdot)$, donde $S={z\in\mathbb C:|z|=1}$ con el producto complejo. Denotamos $\operatorname{cis}(t):=\cos t+i\sin t$.
>
>> [!proof]-
>>
>> Primero, $|\varphi(t)|=1$, así que $\varphi(t)\in S$. Las fórmulas de adición de seno y coseno dan
>> $$\begin{aligned} \varphi(s+t) &=\cos(s+t)+i\sin(s+t)\\ &=(\cos s+i\sin s)(\cos t+i\sin t)\\ &=\varphi(s)\varphi(t). \end{aligned}$$
>> Por consiguiente, $\varphi:(\mathbb R,+)\to(S,\cdot)$ es un homomorfismo de grupos. En particular, $\varphi(0)=1$ y $\varphi(-t)=\varphi(t)^{-1}$.

> [!exercise] Ejercicio 11 - Suma de raíces de la unidad
> Demostrar que si $z=\operatorname{cis}(2\pi/n)$, con $n\ge2$, entonces $1+z+z^2+\cdots+z^{n-1}=0$.
>
>> [!proof]-
>>
>> Para $z=\operatorname{cis}(2\pi/n)$, con $n\ge2$, tenemos $z^n=1$ y $z\ne1$. Por la suma geométrica,
>> $$1+z+z^2+\cdots+z^{n-1} =\frac{z^n-1}{z-1}=0.$$

> [!exercise] Ejercicio 12 - Si $\operatorname{Re}(z^n)\ge0$ para todo $n$
> Sea $z\in\mathbb C$ tal que $\operatorname{Re}(z^n)\ge0$ para todo $n\in\mathbb N$. Mostrar que $z$ es un número real no negativo.
>
>> [!proof]-
>>
>> Si $z=0$, la conclusión es inmediata. Supongamos $z\ne0$ y escribamos
>> $$z=r\operatorname{cis}(\theta),\qquad r>0.$$
>> Entonces
>> $$\operatorname{Re}(z^n)=r^n\cos(n\theta)\ge0 \quad\text{para todo }n,$$
>> de modo que $\cos(n\theta)\ge0$ para todo $n$.
>> Esto sólo puede ocurrir si $\theta\equiv0\pmod{2\pi}$. En efecto, si $\theta/(2\pi)$ es racional y no entero, sus múltiplos módulo $1$ forman un subgrupo cíclico no trivial, alguno de cuyos puntos cae en el semicírculo donde el coseno es negativo. Si $\theta/(2\pi)$ es irracional, sus múltiplos módulo $1$ son densos y alguno cae en el intervalo $(1/4,3/4)$, donde también el coseno es negativo. Ambas posibilidades contradicen la hipótesis.
>> Por tanto $z=r\ge0$: $z$ es real no negativo.

> [!exercise] Ejercicio 13 - Distancia cordal en $\mathbb C_\infty$
> Sea $S^2$ la esfera unidad en $\mathbb R^3$ y $\varphi:S^2\to\mathbb C_\infty$ la proyección estereográfica. Definimos $d:\mathbb C_\infty\to\mathbb R$ por $d(z,z')=\|\varphi^{-1}(z)-\varphi^{-1}(z')\|$, donde $\|\cdot\|$ es la norma euclídea en $\mathbb R^3$. Demostrar que:
> 20. $d$ es una distancia en $\mathbb C_\infty$.
> 21. $d(z,z')=\frac{2|z-z'|}{\sqrt{(1+|z|^2)(1+|z'|^2)}}$ para $z,z'\in\mathbb C$.
> 22. $d(z,\infty)=\frac2{\sqrt{1+|z|^2}}$ para $z\in\mathbb C$.
>
>> [!proof]-
>>
>> Para la proyección estereográfica usual, su inversa es
>> $$\varphi^{-1}(z) =\frac{1}{1+|z|^2} \left(2\operatorname{Re}z,\,2\operatorname{Im}z,\,|z|^2-1\right), \qquad \varphi^{-1}(\infty)=(0,0,1).$$
>> **(i)** Como $\varphi^{-1}:\mathbb C_\infty\to S^2$ es biyectiva y la norma euclídea induce una distancia en $S^2$,
>> $$d(z,z')=\|\varphi^{-1}(z)-\varphi^{-1}(z')\|$$
>> es no negativa, simétrica y satisface la desigualdad triangular. Además,
>> $$d(z,z')=0 \iff \varphi^{-1}(z)=\varphi^{-1}(z') \iff z=z'.$$
>> Así, $d$ es una distancia en $\mathbb C_\infty$.
>> **(ii)** Si $P=\varphi^{-1}(z)$ y $Q=\varphi^{-1}(z')$, como $\|P\|=\|Q\|=1$,
>> $$\|P-Q\|^2=2-2P\cdot Q.$$
>> Al sustituir las expresiones anteriores y simplificar se obtiene
>> $$\|P-Q\|^2 =\frac{4|z-z'|^2}{(1+|z|^2)(1+|z'|^2)}.$$
>> Por lo tanto,
>> $$\boxed{ d(z,z')= \frac{2|z-z'|}{\sqrt{(1+|z|^2)(1+|z'|^2)}} }.$$
>> **(iii)** Si $N=(0,0,1)=\varphi^{-1}(\infty)$, entonces
>> $$\begin{aligned} d(z,\infty)^2 &=\left(\frac{2x}{1+|z|^2}\right)^2 +\left(\frac{2y}{1+|z|^2}\right)^2 +\left(\frac{|z|^2-1}{1+|z|^2}-1\right)^2\\ &=\frac{4}{1+|z|^2}. \end{aligned}$$
>> Luego
>> $$\boxed{d(z,\infty)=\frac{2}{\sqrt{1+|z|^2}}}.$$

> [!exercise] Ejercicio 14 - Producto de Cauchy de series absolutamente convergentes
> Sean $\sum_{n=0}^{\infty}a_n$ y $\sum_{n=0}^{\infty}b_n$ dos series absolutamente convergentes. Para cada $n\in\mathbb N$ definimos $c_n=\sum_{k=0}^n a_kb_{n-k}$. Probar que la serie $\sum_{n=0}^{\infty}c_n$ es absolutamente convergente con suma igual a $\left(\sum_{n=0}^{\infty}a_n\right)\left(\sum_{n=0}^{\infty}b_n\right)$.
>
>> [!proof]-
>>
>> Sean
>> $$A=\sum_{n=0}^{\infty}a_n, \qquad B=\sum_{n=0}^{\infty}b_n, \qquad c_n=\sum_{k=0}^n a_kb_{n-k}.$$
>> La suma de los valores absolutos del arreglo doble es finita:
>> $$\sum_{j=0}^{\infty}\sum_{k=0}^{\infty}|a_kb_j| =\left(\sum_{k=0}^{\infty}|a_k|\right) \left(\sum_{j=0}^{\infty}|b_j|\right)<\infty.$$
>> Agrupando por diagonales $j+k=n$,
>> $$\sum_{n=0}^{\infty}|c_n| \le \sum_{n=0}^{\infty}\sum_{k=0}^n|a_k||b_{n-k}| =\sum_{k,j\ge0}|a_k||b_j|<\infty.$$
>> Por tanto $\sum c_n$ converge absolutamente. La convergencia absoluta permite reordenar la suma doble, y así
>> $$\begin{aligned} \sum_{n=0}^{\infty}c_n &=\sum_{n=0}^{\infty}\sum_{k=0}^n a_kb_{n-k}\\ &=\sum_{k=0}^{\infty}\sum_{j=0}^{\infty}a_kb_j\\ &=\left(\sum_{k=0}^{\infty}a_k\right) \left(\sum_{j=0}^{\infty}b_j\right)=AB. \end{aligned}$$

> [!exercise] Ejercicio 15 - Suma y producto de series de potencias
> Sean $a\in\mathbb C$ y $r\in\mathbb R$, con $r>0$. Sean $\sum_{n=0}^{\infty}a_n(z-a)^n$ y $\sum_{n=0}^{\infty}b_n(z-a)^n$ series de potencias con radio de convergencia mayor o igual que $r$, y sea $c_n=\sum_{k=0}^n a_kb_{n-k}$. Probar que las series $\sum_{n=0}^{\infty}(a_n+b_n)(z-a)^n$ y $\sum_{n=0}^{\infty}c_n(z-a)^n$ tienen radio de convergencia mayor o igual que $r$. Además, probar que si $|z-a|<r$, entonces:
> 23. $\sum_{n=0}^{\infty}(a_n+b_n)(z-a)^n=\sum_{n=0}^{\infty}a_n(z-a)^n+\sum_{n=0}^{\infty}b_n(z-a)^n$.
> 24. $\sum_{n=0}^{\infty}c_n(z-a)^n=\left(\sum_{n=0}^{\infty}a_n(z-a)^n\right)\left(\sum_{n=0}^{\infty}b_n(z-a)^n\right)$.
>
>> [!proof]-
>>
>> Fijemos $z$ con $|z-a|<r$. Como los radios de convergencia de las dos series son al menos $r$, convergen absolutamente
>> $$\sum_{n=0}^{\infty}|a_n||z-a|^n, \qquad \sum_{n=0}^{\infty}|b_n||z-a|^n.$$
>> Para la suma,
>> $$\sum_{n=0}^{\infty}|a_n+b_n||z-a|^n \le \sum_{n=0}^{\infty}|a_n||z-a|^n +\sum_{n=0}^{\infty}|b_n||z-a|^n<\infty.$$
>> Por ello la serie de coeficientes $a_n+b_n$ converge en todo disco $|z-a|<r$, así que su radio es al menos $r$, y la linealidad de las sumas parciales da
>> $$\boxed{ \sum_{n=0}^{\infty}(a_n+b_n)(z-a)^n =\sum_{n=0}^{\infty}a_n(z-a)^n +\sum_{n=0}^{\infty}b_n(z-a)^n }.$$
>> Para el producto, definamos
>> $$\alpha_n=a_n(z-a)^n, \qquad \beta_n=b_n(z-a)^n.$$
>> El coeficiente $n$-ésimo de su producto de Cauchy es
>> $$\sum_{k=0}^n\alpha_k\beta_{n-k} =\left(\sum_{k=0}^n a_kb_{n-k}\right)(z-a)^n =c_n(z-a)^n.$$
>> Por el ejercicio 14, esta serie converge absolutamente y
>> $$\boxed{ \sum_{n=0}^{\infty}c_n(z-a)^n =\left(\sum_{n=0}^{\infty}a_n(z-a)^n\right) \left(\sum_{n=0}^{\infty}b_n(z-a)^n\right) }.$$
>> Como esto vale para todo $|z-a|<r$, la serie producto también tiene radio de convergencia al menos $r$.

> [!exercise] Ejercicio 16 - Radios de convergencia
> Encontrar el radio de convergencia de cada una de las siguientes series de potencias.
> 25. $\sum_{n=0}^{\infty}a^nz^n$, $a\in\mathbb C$.
> 26. $\sum_{n=0}^{\infty}a^{n^2}z^n$, $a\in\mathbb C$.
> 27. $\sum_{n=0}^{\infty}k^nz^n$, $k\in\mathbb Z\setminus{0}$.
> 28. $\sum_{n=0}^{\infty}z^{n!}$.
>
>> [!proof]-
>>
>> Usamos la fórmula de Cauchy-Hadamard
>> $$\frac1R=\limsup_{n\to\infty}|c_n|^{1/n}.$$
>> **(a)** Para $c_n=a^n$,
>> $$|c_n|^{1/n}=|a|.$$
>> Entonces
>> $$\boxed{ R=\begin{cases} \infty,&a=0,\\ 1/|a|,&a\ne0. \end{cases}}$$
>> **(b)** Para $c_n=a^{n^2}$,
>> $$|c_n|^{1/n}=|a|^n.$$
>> Por consiguiente,
>> $$\boxed{ R=\begin{cases} \infty,&|a|<1,\\ 1,&|a|=1,\\ 0,&|a|>1. \end{cases}}$$
>> **(c)** Para $c_n=k^n$, con $k\ne0$,
>> $$\boxed{R=\frac1{|k|}}.$$
>> **(d)** La serie $\sum_{n=0}^{\infty}z^{n!}$ converge absolutamente si $|z|<1$, pues para $n\ge1$, $n!\ge n$ y
>> $$|z|^{n!}\le |z|^n.$$
>> Si $|z|\ge1$, sus términos no tienden a cero. Por lo tanto,
>> $$\boxed{R=1}.$$

> [!exercise] Ejercicio 17 - Serie lacunaria
> Demostrar que el radio de convergencia de la serie de potencias $\sum_{n=1}^{\infty}\frac{(-1)^n}{n}z^{n(n+1)}$ es $1$, y discutir la convergencia para $z=1,-1,i$.
>
>> [!proof]-
>>
>> Consideremos
>> $$\sum_{n=1}^{\infty}\frac{(-1)^n}{n}z^{n(n+1)}.$$
>> Si $|z|<1$, como $n(n+1)\ge2n$,
>> $$\sum_{n=1}^{\infty}\left|\frac{(-1)^n}{n}z^{n(n+1)}\right| \le \sum_{n=1}^{\infty}\frac{|z|^{2n}}n<\infty.$$
>> Si $|z|>1$, el módulo del término general es $|z|^{n(n+1)}/n$, que no tiende a cero. Por consiguiente, el radio de convergencia es
>> $$\boxed{R=1}.$$
>> En los puntos pedidos de la frontera:
>> - Para $z=1$, queda $\sum_{n\ge1}(-1)^n/n$, que converge por Leibniz, pero no absolutamente.
>> - Para $z=-1$, el entero $n(n+1)$ siempre es par, de modo que $(-1)^{n(n+1)}=1$. Se obtiene otra vez $\sum_{n\ge1}(-1)^n/n$, con convergencia condicional.
>> - Para $z=i$, los factores
>>   $$  (-1)^n i^{n(n+1)}$$
>>   son periódicos de período $4$, con patrón
>>   $$  1,-1,-1,1,1,-1,-1,1,\ldots$$
>>   Sus sumas parciales están acotadas, por lo que la serie converge por el criterio de Dirichlet al multiplicarlos por $1/n\to0$. No converge absolutamente, porque el valor absoluto de cada término es $1/n$.
>> En los tres puntos $z=1,-1,i$, por tanto, la convergencia es **condicional**.
