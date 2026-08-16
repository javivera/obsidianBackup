## Funciones analíticas

>[!Definition] Derivada compleja
>Sea $G\subseteq\mathbb{C}$ abierto y $f:G\to\mathbb{C}$. Decimos que $f$ es diferenciable en $a\in G$ si existe
>$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
>=\lim_{z\to a}\frac{f(z)-f(a)}{z-a}.$$
>Si esto ocurre en todo punto de $G$, decimos que $f$ es diferenciable en $G$.

>[!Proposition] Diferenciabilidad implica continuidad
>Si $f$ es diferenciable en $a$, entonces es continua en $a$.
>
>>[!Proof]-
>>1. Para $z\neq a$, $$|f(z)-f(a)|=\left|\frac{f(z)-f(a)}{z-a}\right||z-a|.$$
>>2. Al hacer $z\to a$, el primer factor tiende a $|f'(a)|$ y el segundo a $0$; por lo tanto, $$|f(z)-f(a)|\longrightarrow |f'(a)|\cdot0=0.$$

>[!Definition] Función analítica
>Una función $f:G\to\mathbb{C}$ es **analítica** si es continuamente diferenciable en $G$.

>[!Proposition] Reglas de derivación
>Si $f$ y $g$ son analíticas en $G$, entonces
>$$ (f+g)'=f'+g',\qquad (fg)'=f'g+fg'.$$
>Si $g(z)\neq0$ en $G$,
>$$\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}.$$

>[!Theorem] Regla de la cadena
>Si $f:G\to\Omega$ y $g:\Omega\to\mathbb{C}$ son analíticas, entonces $g\circ f$ es analítica y
>$$ (g\circ f)'(z)=g'(f(z))f'(z).$$

>[!Example] Polinomios
>La identidad $f(z)=z$ es analítica y $f'(z)=1$. En consecuencia, $z^n$ y todo polinomio
>$$P(z)=\sum_{n=0}^{N}a_nz^n$$
>son funciones analíticas.

## Series de potencias y derivación término a término

>[!Proposition] Derivadas de una serie de potencias
>Sea
>$$f(z)=\sum_{n=0}^{\infty}a_n(z-a)^n$$
>con radio de convergencia $R>0$. Para cada $k\geq1$, la serie
>$$\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-a)^{n-k}$$
>tiene el mismo radio $R$. Además, $f$ es infinitamente diferenciable en $B(a,R)$ y
>$$f^{(k)}(z)=\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-a)^{n-k}.$$
>En particular,
>$$a_n=\frac{f^{(n)}(a)}{n!}.$$

>[!Corollary] Analiticidad de la suma
>La función definida por una serie de potencias es analítica en su disco de convergencia.

>[!Proposition] Derivada nula
>Si $G$ es abierto y conexo y $f:G\to\mathbb{C}$ es analítica con $f'(z)=0$ para todo $z\in G$, entonces $f$ es constante.

>[!Remark] Por qué se necesita conexidad
>En $G=B(0,1)\cup B(3,1)$, la función que vale $0$ en una componente y $1$ en la otra tiene derivada nula, pero no es constante en todo $G$.

## Función exponencial

>[!Definition] Exponencial compleja
>$$e^z:=\sum_{n=0}^{\infty}\frac{z^n}{n!}.$$
>La serie tiene radio infinito, de modo que $e^z$ es entera y
>$$(e^z)'=e^z.$$

>[!Proposition] Propiedades de la exponencial
>Para $a,b,z\in\mathbb{C}$:
>
>1. $e^{a+b}=e^ae^b$ y $e^0=1$.
>2. $\overline{e^z}=e^{\bar z}$.
>3. $e^ze^{-z}=1$, por lo que $e^z\neq0$.
>4. Si $z=x+iy$, entonces
>   $$e^z=e^x(\cos y+i\sin y),\qquad |e^z|=e^x=e^{\operatorname{Re}z}.$$
>5. $e^{i\theta}=\cos\theta+i\sin\theta$.
>6. La exponencial es $2\pi i$-periódica:
>   $$e^{z+2\pi i}=e^z.$$

>[!Definition] Seno y coseno complejos
>$$\cos z=\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k}}{(2k)!},\qquad
>\sin z=\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k+1}}{(2k+1)!}.$$

>[!Exercise] Identidades trigonométricas
>Probar que
>$$ (\cos z)'=-\sin z,\qquad (\sin z)'=\cos z,$$
>$$\cos z=\frac{e^{iz}+e^{-iz}}2,qquad
>\sin z=\frac{e^{iz}-e^{-iz}}{2i},$$
>$$\cos^2z+\sin^2z=1.$$

>[!Proposition] Soluciones de $e^z=w$
>Si $w\neq0$, entonces
>$$e^z=w\iff z=\ln|w|+i(\arg w+2k\pi),\qquad k\in\mathbb{Z}.$$

## Logaritmo complejo

>[!Definition] Rama del logaritmo
>Sea $G\subseteq\mathbb{C}$ abierto y conexo. Una función continua $f:G\to\mathbb{C}$ es una **rama del logaritmo** si
>$$e^{f(z)}=z\qquad(z\in G).$$

>[!Proposition] Unicidad salvo múltiplos de $2\pi i$
>Si $f$ es una rama del logaritmo en $G$, todas las ramas son
>$$f(z)+2k\pi i,qquad k\in\mathbb{Z}.$$
>
>>[!Proof]-
>>1. Si $f$ y $g$ son ramas, $e^{f(z)}=e^{g(z)}$, de modo que $$f(z)-g(z)\in2\pi i\mathbb{Z}.$$
>>2. La función $(f-g)/(2\pi i)$ es continua y toma valores enteros.
>>3. Como $G$ es conexo, dicha función es constante.

>[!Remark] No existe una rama en un dominio que contenga al origen
>Si $0\in G$, la igualdad $e^{f(0)}=0$ sería imposible, pues la exponencial nunca se anula.

>[!Definition] Rama principal
>En
>$$G=\mathbb{C}\setminus(-\infty,0],$$
>cada $z$ tiene un argumento único $\operatorname{Arg}z\in(-\pi,\pi)$. Se define
>$$\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z.$$
>Esta es la **rama principal** del logaritmo; es analítica y
>$$e^{\operatorname{Log}z}=z,qquad (\operatorname{Log}z)'=\frac1z.$$

>[!Proposition] Derivada de una inversa analítica
>Si $f$ y $g$ son analíticas, $g\circ f=\operatorname{Id}$ y $g'(f(a))\neq0$, entonces
>$$f'(a)=\frac{1}{g'(f(a))}.$$

>[!Definition] Ramas de potencias
>Fijada una rama $f$ del logaritmo y $b\in\mathbb{C}$, se define
>$$z^b:=e^{bf(z)}.$$
>Para $b=m\in\mathbb{Z}$ coincide con la potencia usual.

## Ecuaciones de Cauchy-Riemann

Sea
$$f(x+iy)=u(x,y)+iv(x,y),$$
donde $u=\operatorname{Re}f$ y $v=\operatorname{Im}f$.

>[!Theorem] Condición necesaria
>Si $f$ es diferenciable en $z_0=x_0+iy_0$, entonces existen las derivadas parciales y
>$$u_x(x_0,y_0)=v_y(x_0,y_0),\qquad v_x(x_0,y_0)=-u_y(x_0,y_0).$$
>Estas son las **ecuaciones de Cauchy-Riemann**. Además,
>$$f'(z_0)=u_x+iv_x=v_y-iu_y.$$
>
>>[!Proof]-
>>1. Calculando el cociente incremental con incrementos reales se obtiene $$f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).$$
>>2. Con incrementos puramente imaginarios se obtiene $$f'(z_0)=v_y(x_0,y_0)-iu_y(x_0,y_0).$$
>>3. Igualando las partes real e imaginaria aparecen las ecuaciones de Cauchy-Riemann.

>[!Proposition] Condición suficiente
>Si $u$ y $v$ tienen derivadas parciales primeras continuas cerca de $(x_0,y_0)$ y satisfacen Cauchy-Riemann en ese punto, entonces $f=u+iv$ es diferenciable en $z_0$ y
>$$f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).$$

>[!Theorem] Caracterización de analiticidad
>Si $u$ y $v$ tienen derivadas parciales continuas en $G$, entonces
>$$f=u+iv\text{ es analítica}\iff u_x=v_y\text{ y }v_x=-u_y.$$

>[!Remark] Jacobiano
>Si $f$ es analítica,
>$$\det Df=u_xv_y-u_yv_x=u_x^2+v_x^2=|f'(z)|^2.$$

## Funciones armónicas

>[!Definition] Función armónica
>Una función $u$ de clase $C^2$ es armónica si
>$$u_{xx}+u_{yy}=0.$$

>[!Proposition] Partes de una función analítica
>Si $f=u+iv$ es analítica, entonces $u$ y $v$ son armónicas.

>[!Definition] Conjugado armónico
>Si $u$ es armónica y existe una función armónica $v$ tal que $u+iv$ es analítica, entonces $v$ se llama **conjugado armónico** de $u$.

>[!Proposition] Unicidad
>En una región, dos conjugados armónicos de la misma función difieren en una constante real.

>[!Theorem] Existencia en el plano o en un disco
>Si $G$ es el plano complejo o un disco y $u:G\to\mathbb{R}$ es armónica, entonces $u$ tiene conjugado armónico. Una construcción es
>$$v(x,y)=\int_0^y u_x(x,t)\,dt-\int_0^x u_y(s,0)\,ds.$$
>Las ecuaciones de Cauchy-Riemann verifican que $u+iv$ es analítica.

>[!Example] Logaritmo del módulo
>La función
>$$u(x,y)=\log\sqrt{x^2+y^2}$$
>es armónica en $\mathbb{C}\setminus\{0\}$. Localmente, su conjugado armónico es una rama del argumento.
