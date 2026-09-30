# Funciones Analíticas — Práctico 4

>[!exercise] Ejercicio 1
>Sea $\gamma:[a,b]\to\mathbb C$ una curva $C^1$ a trozos y supongamos que $f$ es una función continua sobre $\{\gamma\}$.
>- **(i)** Probar que $\int_\gamma f=-\int_{\gamma^-}f$, donde $(\gamma^-)(t)=\gamma(-t)$, $t\in[-b,-a]$.
>- **(ii)** Probar que $\int_\gamma f(z)\,dz=\int_{\gamma+c}f(z-c)\,dz$, donde $c\in\mathbb C$ y $(\gamma+c)(t)=\gamma(t)+c$.
>>[!Proof]-
>>- **(i)** Sea $h(t)=-t$ en $[-b,-a]$, de modo que $\gamma^-=\gamma\circ h$. Como $\gamma$ es $C^1$ a trozos y $h$ es suave, $\gamma^-$ es $C^1$ a trozos; además $\operatorname{Imagen}(\gamma^-)=\operatorname{Imagen}(\gamma)$ y $f\circ\gamma^-$ es continua, luego la Definición 11 aplica a $\gamma^-$. Por la regla de la cadena, $$(\gamma^-)'(t)=\gamma'(h(t))\,h'(t)=-\gamma'(-t).$$
>>	1. **Aplicación de la definición.** Por Theory/FA - Teo4.md, Definición 11 (Integral de línea), literal: si en particular $\gamma$ es suave a trozos, entonces $$\int_\gamma f\,d\gamma=\int_a^b(f\circ\gamma)(t)\gamma'(t)\,dt.$$ Aplicándola a $\gamma^-$ y usando la regla de la cadena, $$\int_{\gamma^-}f\,d\gamma^-=\int_{-b}^{-a}f(\gamma(-t))\,(-\gamma'(-t))\,dt=-\int_{-b}^{-a}f(\gamma(-t))\,\gamma'(-t)\,dt.$$
>>	2. **Cambio de variable.** Con $s=-t$, de modo que $dt=-ds$, $t=-b\mapsto s=b$ y $t=-a\mapsto s=a$, $$-\int_{-b}^{-a}f(\gamma(-t))\,\gamma'(-t)\,dt=-\int_b^a f(\gamma(s))\,\gamma'(s)\,(-ds)=\int_b^a f(\gamma(s))\,\gamma'(s)\,ds.$$
>>	3. **Inversión de los límites.** Finalmente, $$\int_b^a f(\gamma(s))\,\gamma'(s)\,ds=-\int_a^b f(\gamma(s))\,\gamma'(s)\,ds=-\int_\gamma f\,d\gamma,$$ donde la última igualdad es otra vez la Definición 11. Por lo tanto, $$\int_\gamma f=-\int_{\gamma^-}f.$$ 
>>- **(ii)** Sea $h(z)=f(z-c)$. Como $\gamma+c$ es $C^1$ a trozos y $h$ es continua sobre la imagen de $\gamma+c$, la Definición 11 aplica.
>>	1. **Aplicación de la definición.** $$\int_{\gamma+c}f(z-c)\,dz=\int_a^b f\big((\gamma+c)(t)-c\big)(\gamma+c)'(t)\,dt.$$ 
>>	2. **Simplificación.** Como $(\gamma+c)(t)=\gamma(t)+c$ y $c$ es constante, $$ (\gamma+c)(t)-c=\gamma(t),\qquad (\gamma+c)'(t)=\gamma'(t).$$ Por lo tanto, $$\int_{\gamma+c}f(z-c)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt.$$ 
>>	3. **Conclusión.** Por la Definición 11, $$\int_a^b f(\gamma(t))\gamma'(t)\,dt=\int_\gamma f(z)\,dz.$$ En consecuencia, $$\int_\gamma f(z)\,dz=\int_{\gamma+c}f(z-c)\,dz.$$ 

>[!exercise] Ejercicio 2
>Demostrar que $\gamma:[0,1]\to\mathbb C$ definida por $\gamma(t)=t+it\operatorname{sen}(1/t)$ para $t\ne0$, y $\gamma(0)=0$, no es un camino $C^1$ a trozos. Dar el bosquejo del camino.
>>[!Proof]-
>>4. Para estudiar la derivabilidad en $0$, calculamos el cociente diferencial: $$\frac{\gamma(t)-\gamma(0)}{t}=\frac{t+it\operatorname{sen}(1/t)}{t}=1+i\operatorname{sen}(1/t),\qquad t\ne0.$$ 
>>5. Cuando $t\to0^+$, $1/t\to+\infty$ y $\operatorname{sen}(1/t)$ no tiene límite. Por ejemplo, tomando $t_n=1/(2\pi n+\pi/2)$ y $s_n=1/(2\pi n+3\pi/2)$, se tiene $t_n,s_n\to0^+$, pero $$1+i\operatorname{sen}(1/t_n)=1+i,\qquad 1+i\operatorname{sen}(1/s_n)=1-i.$$ Por lo tanto, el cociente diferencial no tiene límite y $\gamma'(0)$ no existe.
>>6. En cualquier partición de $[0,1]$, el primer tramo tiene a $0$ como extremo. Para que la restricción de $\gamma$ a ese tramo sea $C^1$, debería existir la derivada lateral en $0$, lo cual acabamos de descartar. En consecuencia, $\gamma$ no es un camino $C^1$ a trozos.
>>7. Escribiendo $\gamma(t)=x(t)+iy(t)$, tenemos $$x(t)=t,\qquad y(t)=t\operatorname{sen}(1/t),\qquad |y(t)|\le t=x(t).$$ Así, la traza queda contenida en la cuña $-x\le y\le x$, parte del origen y presenta oscilaciones cada vez más rápidas cerca de $0$, con amplitud tendiendo a $0$.

>[!exercise] Ejercicio 3
>Sean $\gamma$ y $\sigma$ los polígonos $[1,i]$ y $[1,1+i,i]$, respectivamente. Expresar $\gamma$ y $\sigma$ como caminos y calcular $\int_\gamma f$ y $\int_\sigma f$, donde $f(z)=|z|^2$. ¿Se cumple en este caso la “independencia del camino”? 
>>[!Proof]-
>>8. **Parametrización de $\gamma$.** El segmento $[1,i]$ se parametriza mediante $\gamma:[0,1]\to\mathbb C$, $\gamma(t)=1+t(i-1)=(1-t)+it$, y por lo tanto $\gamma'(t)=i-1$.
>>9. **Integral sobre $\gamma$.** Como $|x+iy|^2=x^2+y^2$, se tiene $f(\gamma(t))=(1-t)^2+t^2$. Entonces $$\begin{aligned}\int_\gamma f&=\int_0^1\big((1-t)^2+t^2\big)(i-1)\,dt\\&=(i-1)\int_0^1(1-2t+2t^2)\,dt\\&=(i-1)\left[t-t^2+\frac23t^3\right]_0^1=\frac23(i-1).\end{aligned}$$
>>10. **Parametrización de $\sigma$.** El polígono $[1,1+i,i]$ se parametriza por $$\sigma(t)=\begin{cases}1+2it,&0\le t\le\frac12,\\2-2t+i,&\frac12\le t\le1.\end{cases}$$ Sus derivadas en cada tramo son $\sigma'(t)=2i$ y $\sigma'(t)=-2$, respectivamente.
>>11. **Integral sobre el primer tramo de $\sigma$.** Para $0\le t\le\frac12$, $|\sigma(t)|^2=|1+2it|^2=1+4t^2$. Por lo tanto, $$\int_0^{1/2}f(\sigma(t))\sigma'(t)\,dt=2i\int_0^{1/2}(1+4t^2)\,dt=2i\left[t+\frac43t^3\right]_0^{1/2}=\frac43i.$$
>>12. **Integral sobre el segundo tramo de $\sigma$.** Para $\frac12\le t\le1$, $|\sigma(t)|^2=|2-2t+i|^2=4(1-t)^2+1$. Luego, $$\int_{1/2}^1f(\sigma(t))\sigma'(t)\,dt=-2\int_{1/2}^1\big(4(1-t)^2+1\big)\,dt=-2\left[-\frac43(1-t)^3+t\right]_{1/2}^1=-\frac43.$$
>>13. **Suma de los tramos y conclusión.** $$\int_\sigma f=\frac43i-\frac43=\frac43(i-1).$$ Como $$\int_\gamma f=\frac23(i-1)\ne\frac43(i-1)=\int_\sigma f,$$ la integral no es independiente del camino en este caso.

>[!exercise] Ejercicio 4
>Sean $n\in\mathbb Z$ y $\gamma:[0,2\pi]\to\mathbb C$ dada por $\gamma(t)=\exp(int)$. Demostrar que $\int_\gamma \frac1z\,dz=2\pi in$.
>>[!Proof]-
>>14. La curva está dada por $\gamma(t)=e^{int}$ y su derivada es $\gamma'(t)=in e^{int}$. Como $|\gamma(t)|=1$, la curva no pasa por $0$, de modo que la función $z\mapsto z^{-1}$ es continua sobre su imagen.
>>15. Aplicando la definición de integral de camino, $$\begin{aligned}\int_\gamma\frac1z\,dz&=\int_0^{2\pi}\frac{1}{\gamma(t)}\gamma'(t)\,dt\\&=\int_0^{2\pi}\frac{1}{e^{int}}\,in e^{int}\,dt\\&=\int_0^{2\pi}in\,dt\\&=2\pi in.\end{aligned}$$
>>16. Por lo tanto, $$\int_\gamma\frac1z\,dz=2\pi in.$$ 

>[!exercise] Ejercicio 5
>Calcular $\int_\gamma z^n\,dz$, donde $n\in\mathbb Z$ y $\gamma:[0,2\pi]\to\mathbb C$, $\gamma(t)=e^{it}$.
>>[!Proof]-
>>17. La curva está dada por $\gamma(t)=e^{it}$ y su derivada es $\gamma'(t)=ie^{it}$. Además, $\gamma(t)\neq 0$ para todo $t\in[0,2\pi]$, por lo que $z\mapsto z^n$ es continua sobre la imagen de $\gamma$, incluso si $n<0$.
>>18. Aplicando la definición de integral de camino, $$\begin{aligned}\int_\gamma z^n\,dz&=\int_0^{2\pi}\bigl(\gamma(t)\bigr)^n\gamma'(t)\,dt\\&=\int_0^{2\pi}e^{int}\,ie^{it}\,dt\\&=i\int_0^{2\pi}e^{i(n+1)t}\,dt.\end{aligned}$$
>>19. Si $n=-1$, entonces $$\int_\gamma z^{-1}\,dz=i\int_0^{2\pi}1\,dt=2\pi i.$$ Si $n\neq -1$, entonces $$\begin{aligned}\int_\gamma z^n\,dz&=i\left[\frac{e^{i(n+1)t}}{i(n+1)}\right]_0^{2\pi}\\&=\frac{e^{2\pi i(n+1)}-1}{n+1}=0,\end{aligned}$$ pues $n+1\in\mathbb Z$ y, por lo tanto, $e^{2\pi i(n+1)}=1$.
>>20. En conclusión, $$\boxed{\int_\gamma z^n\,dz=\begin{cases}2\pi i,&n=-1,\\0,&n\neq -1.\end{cases}}$$

^5f4c2a

>[!exercise] Ejercicio 6
>Demostrar que $$\int_0^{2\pi}\frac{e^{it}}{e^{it}-z}\,dt=2\pi,$$ para todo $z$ tal que $|z|<1$.
>>[!Proof]-
>>21. Fijemos $z\in\mathbb{C}$ con $|z|<1$ y sea $\gamma(t)=e^{it}$, $t\in[0,2\pi]$. Denotemos por $I$ la integral del enunciado. Por la definición de integral de línea, $$\int_\gamma\frac{dw}{w-z}=\int_0^{2\pi}\frac{ie^{it}}{e^{it}-z}\,dt=iI,$$ de modo que $I=\frac1i\int_\gamma\frac{dw}{w-z}$.
>>22. Para $|w|=1$, se tiene $\left|\frac zw\right|=|z|<1$ y $$\frac1{w-z}=\frac1w\frac1{1-z/w}=\frac{1}{w}\sum_{k=0}^{\infty}\left(\frac{z}{w}\right)^k.$$ 
>>23. Entonces definimos $$F_n(w)=\frac{1}{w}\sum_{k=0}^{\infty}\left(\frac{z}{w}\right)^k$$ que converge uniformemente por que la serie converge uniformemente en si en $[-r,r]$ , donde $r$ es la razon y esto vale para $|r|<1$ en este caso $r=\frac{z}{w}$    
>>24. Por el lema de paso al límite bajo la integral y la linealidad de la integral de línea, $$\begin{aligned}I&=\frac1i\lim_{n\to\infty}\int_\gamma F_n(w)\,dw=\frac1i\lim_{n\to\infty}\sum_{k=0}^nz^k\int_\gamma w^{-(k+1)}\,dw.\end{aligned}$$
>>25. Usando $w=\gamma(t)=e^{it}$ y $dw=ie^{it}\,dt$, para cada $k\geq0$ obtenemos $$\int_\gamma w^{-(k+1)}\,dw=i\int_0^{2\pi}e^{-ikt}\,dt=\begin{cases}2\pi i,&k=0,\\0,&k\geq1.\end{cases}$$ Por lo tanto, $$I=\frac1i\lim_{n\to\infty}(2\pi i)=2\pi.$$

^db3f2d

>[!exercise] Ejercicio 7
>Demostrar la Fórmula de Valor medio de Gauss. Sea $f$ analítica en $B(z_0,R)$. Entonces $$f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{it})\,dt,$$ para todo $0<r<R$.
>>[!Proof]-
>>1. Como $f$ es analítica en $B(z_0,R)$, se expande en serie de Taylor centrada en $z_0$: $$f(z)=\sum_{k=0}^{\infty}a_k(z-z_0)^k,\qquad z\in B(z_0,R),$$ con $a_0=f(z_0)$. Fijado $0<r<R$, la serie converge uniforme sobre el disco cerrado $\overline{B}(z_0,r)$.
>>2. Parametrizamos la circunferencia mediante $w=z_0+re^{it}$, $0\le t\le2\pi$. Sustituyendo: $$f(z_0+re^{it})=\sum_{k=0}^{\infty}a_kr^ke^{ikt},$$ donde la convergencia es uniforme en $t$ por la convergencia uniforme sobre la circunferencia.
>>3. Integrando término a término: $$\int_0^{2\pi}f(z_0+re^{it})\,dt=\sum_{k=0}^{\infty}a_kr^k\int_0^{2\pi}e^{ikt}\,dt.$$ Como $$\int_0^{2\pi}e^{ikt}\,dt=\begin{cases}2\pi,&k=0,\\0,&k\ge1,\end{cases}$$ todos los términos con $k\ge1$ se anulan y queda $$\int_0^{2\pi}f(z_0+re^{it})\,dt=2\pi a_0=2\pi f(z_0).$$
>>4. Dividiendo por $2\pi$ se obtiene $$f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{it})\,dt,$$ para todo $0<r<R$.

>[!exercise] Ejercicio 8
>Calcular $\int_\gamma z^{-1/2}\,dz$ donde:
>- **(i)** $\gamma$ es la mitad superior del círculo unidad desde $1$ hasta $-1$.
>- **(ii)** $\gamma$ es la mitad inferior del círculo unidad desde $1$ hasta $-1$.
>
>>[!Proof]-
>>- **(i)**
>>	1. Parametrizamos la semicircunferencia superior por $\gamma_+(t)=e^{it}$, $0\le t<\pi$. Entonces $\gamma_+'(t)=ie^{it}$. Para $0\le t<\pi$, usando la expresión completa de la rama principal, $$\log(e^{it})=f_{-\pi,0}(e^{it})=\ln|e^{it}|+i\operatorname{Arg}_{-\pi}(e^{it})=\ln 1+it=it,$$ pues $|e^{it}|=1$ y $\operatorname{Arg}_{-\pi}(e^{it})=t$. Por tanto, $(e^{it})^{-1/2}=\exp(-it/2)$.
>>	2. Como $-1$ está sobre el corte de la rama principal, interpretamos la integral como límite cuando $b\to\pi^-$: $$\begin{aligned}\int_{\gamma_+}z^{-1/2}\,dz&=\lim_{b\to\pi^-}\int_0^b(e^{it})^{-1/2}ie^{it}\,dt\\&=\lim_{b\to\pi^-}\int_0^b ie^{it/2}\,dt\\&=2(e^{i\pi/2}-1)=-2+2i.\end{aligned}$$
>>- **(ii)**
>>	1. Parametrizamos la semicircunferencia inferior, con la orientación indicada, por $\gamma_-(t)=e^{it}$, $0\ge t> -\pi$. Entonces $\gamma_-'(t)=ie^{it}$. Para $-\pi<t\le0$, usando la expresión completa de la rama principal, $$\log(e^{it})=f_{-\pi,0}(e^{it})=\ln|e^{it}|+i\operatorname{Arg}_{-\pi}(e^{it})=\ln 1+it=it,$$ pues $|e^{it}|=1$ y $\operatorname{Arg}_{-\pi}(e^{it})=t$. Por tanto, $(e^{it})^{-1/2}=\exp(-it/2)$.
>>	2. Tomando el límite cuando $b\to-\pi^+$, obtenemos $$\begin{aligned}\int_{\gamma_-}z^{-1/2}\,dz&=\lim_{b\to-\pi^+}\int_0^b(e^{it})^{-1/2}ie^{it}\,dt\\&=\lim_{b\to-\pi^+}\int_0^b ie^{it/2}\,dt\\&=2(e^{-i\pi/2}-1)=-2-2i.\end{aligned}$$

>[!exercise] Ejercicio 9
>Calcular $\int_\gamma(z^2-1)^{-1}\,dz$ cuando:
>- **(i)** $\gamma(t)=1+e^{it}$, $0\le t\le2\pi$.
>- **(ii)** $\gamma(t)=2e^{it}$, $-\pi\le t\le\pi$.
>>[!Proof]-
>>- (i)
>>	1. **Aplicación directa de la fórmula integral de Cauchy.** Escribimos $$\frac{1}{w^2-1}=\frac{1/(w+1)}{w-1}.$$ La función $f(w)=1/(w+1)$ es analítica en un abierto que contiene el disco cerrado $\overline{B(1,1)}$, así que podemos aplicar [[FA - Teo4#^a61f2c|integral de Cauchy, versión local]] sobre $\gamma(t)=1+e^{it}$, tomando $a=1$, $r=1$ y $z=1$. Por lo tanto, $$\int_\gamma\frac{dw}{w^2-1}=2\pi i f(1)=2\pi i\cdot\frac12=\pi i.$$ 
>>- (ii)
>>	1. **Descomposición en fracciones simples.** Tenemos $$\frac{1}{w^2-1}=\frac12\left(\frac{1}{w-1}-\frac{1}{w+1}\right).$$ La curva $\gamma(t)=2e^{it}$, $-\pi\le t\le\pi$, es el círculo de centro $0$ y radio $2$, recorrido en sentido positivo.
>>	2. **Aplicación de la fórmula integral de Cauchy.** Tomamos $f(w)=1$, analítica en $\mathbb C$, y aplicamos [[FA - Teo4#^a61f2c|integral de Cauchy, versión local]]. Para $a=0$, $r=2$, la fórmula en $z=1$ y $z=-1$ da $$\int_\gamma\frac{dw}{w-1}=2\pi i,\qquad\int_\gamma\frac{dw}{w+1}=2\pi i.$$ 
>>	3. **Conclusión.** Sustituyendo esos valores en la descomposición, $$\int_\gamma\frac{dw}{w^2-1}=\frac12(2\pi i-2\pi i)=0.$$ 

>[!exercise] Ejercicio 10
>Suponer que $f$ es continua en una región $G$. Probar que dos primitivas de $f$ en $G$ (si existen) difieren en una constante.
>>[!Proof]-
>>1. Sean $F,H$ dos primitivas de $f$ en $G$. Entonces $F'=H'=f$, y por tanto $(F-H)'=0$ en $G$. Además, como $f$ es continua, las derivadas $F'$ y $H'$ son continuas. Por la [[FA - Teo2#^9f31ac|Definición de función analítica]], literal: «Una función $f:G\to\mathbb{C}$ es **analítica** si es continuamente diferenciable en $G$.» Así, $F-H$ es analítica en $G$.
>>2. Por la [[FA - Teo2#^44d2e7|definición de región]], literal: «**Región:** $G$ abierto y conexo.» También, por la [[FA - Teo2#^bb0732|derivada nula implica constante]], literal: «Si $G$ es abierto y conexo y $f:G\to\mathbb{C}$ es analítica con $f'(z)=0$ para todo $z\in G$, entonces $f$ es constante.» Aplicándola a $F-H$, concluimos que $F-H$ es constante en $G$; por lo tanto, las dos primitivas difieren en una constante.

>[!exercise] Ejercicio 11
>Probar la siguiente fórmula de integración por partes: sean $f$ y $g$ funciones analíticas en $G$ y sea $\gamma$ una curva $C^1$ a trozos en $G$ de $a$ en $b$. Entonces $$\int_\gamma fg'=f(b)g(b)-f(a)g(a)-\int_\gamma f'g.$$

>[!Exercise] Ejercicio 12
>Sea $\gamma$ una curva cerrada $C^1$ a trozos en un conjunto abierto $G$. Demostrar que para todo $a\notin G$ y para todo $n\ge2$, $$\int_\gamma(z-a)^{-n}\,dz=0.$$
>>[!Proof]-
>>1. Como $a\notin G$, para todo $z\in G$ se tiene $z-a\neq0$. Definimos en $G$ la función $$F(z)=\frac{(z-a)^{1-n}}{1-n}.$$ Entonces $F$ está definida en todo $G$ y, para todo $z\in G$, $$F'(z)=\frac{1}{1-n}(1-n)(z-a)^{-n}=(z-a)^{-n}.$$ Por lo tanto, $F$ es una primitiva en $G$ del integrando, que es continuo en $G$.
>>2. Como $\gamma$ es $C^1$ a trozos (suave por secciones) y continua en $[u,v]$, por [[FA - Teo4#^b5f0d7|las curvas suaves por secciones son de variación acotada]] tiene variación acotada, luego es rectificable. Además, al ser cerrada, su punto inicial coincide con su punto final: $\gamma(u)=\gamma(v)$.
>>3. Por la [[FA - Teo4#^c8a124|Regla de Barrow para integrales de línea]], con $f(z)=(z-a)^{-n}$ y su primitiva $F$ del paso 1, $$\int_\gamma(z-a)^{-n}\,dz=F(\gamma(v))-F(\gamma(u)).$$
>>4. Ambos extremos de $\gamma$ coinciden, así que esa diferencia es $0$ y, por consiguiente, $$\int_\gamma(z-a)^{-n}\,dz=0.$$ 

^84ce21

>[!exercise] Ejercicio 13
>Sea $I(r)=\int_{\gamma_r}\frac{e^{iz}}z\,dz$, donde $\gamma_r:[0,\pi]\to\mathbb C$ está dada por $\gamma_r(t)=re^{it}$ para $r>0$. Probar que $$\lim_{r\to+\infty}I(r)=0.$$
>>[!Proof]-
>>1. **Parametrización y estimación del módulo.** Como $z=\gamma_r(t)=r(\cos t+i\sin t)$, se tiene $iz=ir\cos t-r\sin t$ (pues $i^2=-1$); además, $\gamma_r'(t)=ire^{it}$, y por tanto $$\begin{aligned}I(r)&=\int_0^\pi\frac{e^{ire^{it}}}{re^{it}}ire^{it}\,dt=i\int_0^\pi e^{ir e^{it}}\,dt\\&=i\int_0^\pi e^{ir\cos t-r\sin t}\,dt.\end{aligned}$$ Usando $e^{ir\cos t-r\sin t}=e^{ir\cos t}e^{-r\sin t}$, la desigualdad triangular para integrales da $$\begin{aligned}|I(r)|&=\left|\int_0^\pi i e^{ir\cos t}e^{-r\sin t}\,dt\right|\\&\leq\int_0^\pi |i|\,|e^{ir\cos t}|\,|e^{-r\sin t}|\,dt=\int_0^\pi e^{-r\sin t}\,dt,\end{aligned}$$ pues $|i|=1$, $|e^{ir\cos t}|=1$ y $e^{-r\sin t}$ es real positivo.
>>2. **Cota lineal** Definimos $g(t)=\sin t/t$ en $(0,\pi/2]$. Su derivada es $$g'(t)=\frac{t\cos t-\sin t}{t^2}.$$ Para el signo: como $\cos t>0$ en $(0,\pi/2)$, $g'(t)\leq0\iff t\cos t\leq\sin t\iff t\leq\tan t$. Sea $q(t)=\tan t-t$; se tiene $q(0)=0$ y $q'(t)=\sec^2t-1=\tan^2t\geq0$, luego $\tan t\geq t$ y por tanto $g'(t)\leq0$: $g$ es decreciente. 
>>3. Así su mínimo en $(0,\pi/2]$ se alcanza en $t=\pi/2$ y vale $$g(\pi/2)=\sin(\pi/2)/(\pi/2)=1/(\pi/2)=2/\pi$$
>>4. Multiplicando $g(t)\geq2/\pi$ por $t>0$, $$\sin t\geq\frac{2}{\pi}t\qquad(0<t\leq\pi/2),$$ y en $t=0$ vale la igualdad.
>>5. **Segunda mitad por simetría.** Para $t\in[\pi/2,\pi]$ se pone $u=\pi-t\in[0,\pi/2]$. La identidad $\sin(\pi-u)=\sin u$ sale de la fórmula de adición: $$\sin(\pi-u)=\sin\pi\cos u-\cos\pi\sin u=0\cdot\cos u-(-1)\sin u=\sin u.$$ Aplicando el paso 2 a $u$, $$\sin t=\sin u\geq\frac{2}{\pi}u=\frac{2}{\pi}(\pi-t).$$
>>6. **Integración de las cotas.** Como $x\mapsto e^{-rx}$ es decreciente para $r>0$, las cotas de los pasos 2 y 3 dan $$\begin{aligned}\int_0^\pi e^{-r\sin t}\,dt&\leq\int_0^{\pi/2}e^{-\frac{2r}{\pi}t}\,dt+\int_{\pi/2}^{\pi}e^{-\frac{2r}{\pi}(\pi-t)}\,dt\\&=2\int_0^{\pi/2}e^{-\frac{2r}{\pi}t}\,dt\\&=\frac{\pi}{r}(1-e^{-r}).\end{aligned}$$ La segunda integral se reduce a la primera con el cambio $u=\pi-t$; cada mitad vale $\frac{\pi}{2r}(1-e^{-r})$.
>>7. **Límite.** De los pasos 1 y 4, $$0\leq|I(r)|\leq\frac{\pi}{r}(1-e^{-r})\leq\frac{\pi}{r}\xrightarrow[r\to+\infty]{}0.$$ Por lo tanto, $$\lim_{r\to+\infty}I(r)=0.$$

>[!Exercise] Ejercicio 14
>En cada uno de los siguientes casos dar la expansión de $f$ en series de potencias alrededor de $a$ y encontrar su radio de convergencia.
>- **(i)** $f(z)=\log z$, $a=i$.
>- **(ii)** $f(z)=\sqrt z$, $a=1$.
>>[!Proof]-
>>- **(i)**
>>	1. Tomamos la rama principal del logaritmo, analítica en $\mathbb{C}\setminus(-\infty,0]$. En un entorno de $i$, $$f^{(k)}(z)=(-1)^{k-1}(k-1)!z^{-k}\qquad(k\ge1),$$ y $f(i)=\log i=i\pi/2$.
>>	2. Por la fórmula de Taylor, el coeficiente de $(z-i)^k$ es $$\frac{f^{(k)}(i)}{k!}=\frac{(-1)^{k-1}i^{-k}}{k}.$$ Por lo tanto, $$\log z=\frac{i\pi}{2}+\sum_{k=1}^{\infty}\frac{(-1)^{k-1}i^{-k}}{k}(z-i)^k,\qquad |z-i|<1.$$
>>	3. Para los coeficientes $c_k=(-1)^{k-1}i^{-k}/k$, $$\lim_{k\to\infty}\left|\frac{c_{k+1}}{c_k}\right|=\lim_{k\to\infty}\frac{k}{k+1}=1.$$ Por el criterio del cociente, el radio de convergencia es $R=1$.
>>- **(ii)**
>>	1. Tomamos la rama principal de la raíz cuadrada. Aplicando la serie binomial con $w=z-1$, para $|w|<1$ se obtiene $$\sqrt z=(1+w)^{1/2}=\sum_{k=0}^{\infty}\binom{1/2}{k}w^k=\sum_{k=0}^{\infty}\binom{1/2}{k}(z-1)^k,$$ donde $\binom{1/2}{0}=1$ y, para $k\ge1$, $$\binom{1/2}{k}=\frac{(1/2)(1/2-1)\cdots(1/2-k+1)}{k!}.$$ En particular, $$\sqrt z=1+\frac12(z-1)-\frac18(z-1)^2+\frac1{16}(z-1)^3-\frac5{128}(z-1)^4+\cdots.$$
>>	2. Para $b_k=\binom{1/2}{k}$, $$\left|\frac{b_{k+1}}{b_k}\right|=\frac{|1/2-k|}{k+1}\longrightarrow1.$$ Por el criterio del cociente, el radio de convergencia es $R=1$.

>[!Exercise] Ejercicio 15
>Evaluar las siguientes integrales (con $n\ge0$ en el inciso **(d)**):
>- **(a)** $\int_\gamma\frac{e^{iz}}{z^2}\,dz$, $\gamma(t)=e^{it}$, $0\le t\le2\pi$.
>- **(b)** $\int_\gamma\frac{dz}{z-a}$, $\gamma(t)=a+re^{it}$, $0\le t\le2\pi$.
>- **(c)** $\int_\gamma\frac{\operatorname{sen}z}{z^3}\,dz$, $\gamma(t)=e^{it}$, $0\le t\le2\pi$.
>- **(d)** $\int_\gamma\frac{\log z}{z^n}\,dz$, $\gamma(t)=1+\frac12e^{it}$, $0\le t\le2\pi$.
>>[!Proof]-
>>- (a)
>>	1. **Idea.** El cálculo directo por $(F\circ\gamma)(t)\gamma'(t)$ no es elemental; escribimos $e^{iz}$ en serie y usamos convergencia uniforme sobre el compacto $\{\gamma\}$ más Barrow término a término, todo ya dado en Teo 4.
>>	2. **Curva.** Sea $F(z)=e^{iz}/z^{2}$. $\gamma(t)=0+1\cdot e^{it}$, $t\in[0,2\pi]$, es suave con $\gamma'(t)=ie^{it}$ continua; por la [[FA - Teo4#^b5f0d7|curvas suaves por secciones son de variación acotada]], $\gamma$ es de variación acotada. Además $|\gamma(t)|=1$, así que su imagen está en $G=\mathbb{C}\setminus\{0\}$ y $F\circ\gamma$ es continua; por [[FA - Teo4#^4c8e10|integral de línea]], la integral está bien definida.
>>	3. **Sumas parciales.** Por [[FA - Teo2#^23ad93|exponencial]], para $w=iz$ tomamos las sumas parciales $g_{N}(z)=\sum_{n=0}^{N}(iz)^{n}/n!=\sum_{n=0}^{N}i^{n}z^{n}/n!$ y definimos $F_{N}(z)=g_{N}(z)/z^{2}=\sum_{n=0}^{N}(i^{n}/n!)z^{n-2}$ para $z\neq 0$; la convergencia $F_{N}\to F$ es uniforme sobre $\{\gamma\}$ por M-test ($1/n!$ sumable).
>>	4. **Paso al límite.** Por [[FA - Teo4#^5d2a91|paso al límite bajo la integral]], $$\int_{\gamma}F_{N}=\sum_{n=0}^{N}(i^{n}/n!)\int_{\gamma}z^{n-2}dz\to\int_{\gamma}F$$ por linealidad para sumas finitas.
>>	5. **Uso explícito de los valores.** Para $N\geq 1$, $$\int_{\gamma}F_{N}=(i^{0}/0!)\int_{\gamma}z^{-2}dz+(i^{1}/1!)\int_{\gamma}z^{-1}dz+\sum_{n=2}^{N}(i^{n}/n!)\int_{\gamma}z^{n-2}dz.$$ Si $k\geq0$, $z^k$ tiene primitiva $z^{k+1}/(k+1)$ en todo $\mathbb{C}$, por lo que su integral sobre $\gamma$ cerrada es $0$. Para $k=-2$, por el [[FA-Pr4#^84ce21|Ejercicio 12]], tomando $G=\mathbb{C}\setminus\{0\}$, $a=0$ y $n=2$, se obtiene $$\int_\gamma z^{-2}\,dz=0.$$ La excepción es $k=-1$: por el [[FA - Teo4#^7ac103|integral de $1/z$ sobre la circunferencia unidad]], $$\int_{\gamma}z^{-1}dz=2\pi i.$$ Como su coeficiente es $i^{1}/1!=i$, $$\begin{aligned}\int_{\gamma}F_{N}&=0+i\cdot 2\pi i+0\\&=-2\pi\end{aligned}$$ para todo $N\geq 1$, y por el paso 4 concluimos $$\int_{\gamma}e^{iz}/z^{2}dz=-2\pi.$$
>>- (b)
>>	1. Como $\gamma(t)=a+re^{it}$, tenemos $\gamma'(t)=ire^{it}$ y $\gamma(t)-a=re^{it}$. Por [[FA - Teo4#^4c8e10|integral de línea]], $$\int_\gamma\frac{dz}{z-a}=\int_0^{2\pi}\frac{\gamma'(t)}{\gamma(t)-a}\,dt=\int_0^{2\pi}i\,dt=2\pi i.$$
>>- (c)
>>	1. **Serie y convergencia uniforme.** Como $$\operatorname{sen}z=\sum_{k=0}^{\infty}\frac{(-1)^kz^{2k+1}}{(2k+1)!},$$ para $z\neq0$ tenemos $$\frac{\operatorname{sen}z}{z^3}=\sum_{k=0}^{\infty}\frac{(-1)^kz^{2k-2}}{(2k+1)!}=\frac1{z^2}-\frac1{3!}+\frac{z^2}{5!}-\frac{z^4}{7!}+\cdots.$$ Definimos $F_N(z)=\sum_{k=0}^{N}\frac{(-1)^kz^{2k-2}}{(2k+1)!}$. Sobre $|z|=1$, cada término tiene módulo $1/(2k+1)!$, cuya serie converge; por el criterio M, $F_N\to F=\operatorname{sen}z/z^3$ uniformemente sobre $\{\gamma\}$. Además, $F_N$ y $F$ son continuas sobre $\{\gamma\}$ y $\gamma$ es rectificable.
>>	2. **Paso al límite.** Por [[FA - Teo4#^5d2a91|paso al límite bajo la integral]], $$\int_\gamma F(z)\,dz=\lim_{N\to\infty}\int_\gamma F_N(z)\,dz.$$
>>	3. **Cancelación de los términos.** Para $N\geq1$, $$\begin{aligned}\int_\gamma F_N(z)\,dz&=\int_\gamma z^{-2}\,dz-\frac1{3!}\int_\gamma 1\,dz+\sum_{k=2}^{N}\frac{(-1)^k}{(2k+1)!}\int_\gamma z^{2k-2}\,dz\\&=0-\frac1{3!}\cdot0+\sum_{k=2}^{N}\frac{(-1)^k}{(2k+1)!}\cdot0\\&=0.\end{aligned}$$ El primer término se anula por el [[FA-Pr4#^84ce21|Ejercicio 12]], con $G=\mathbb{C}\setminus\{0\}$, $a=0$ y $n=2$. En la suma, $2k-2\in\mathbb{Z}$ y $2k-2\neq-1$, así que cada integral es $0$ por el [[FA-Pr4#^5f4c2a|Ejercicio 5]]; también $\int_\gamma1\,dz=0$ por ese ejercicio.
>>	4. **Conclusión.** Como $\int_\gamma F_N(z)\,dz=0$ para todo $N\geq1$, el paso al límite da $$\int_\gamma\frac{\operatorname{sen}z}{z^3}\,dz=0.$$
>>- (d)
>>	1. **Verificación de las hipótesis.** Sea $R$ con $\frac12<R<1$. Como $|\gamma(t)-1|=\frac12<R$, $\gamma$ está contenida en $B(1,R)$; además, es cerrada y rectificable. Si $z\in\overline{B(1,R)}$, entonces $\operatorname{Re}z\geq1-R>0$, así que el disco cerrado evita $0$ y la semirrecta $(-\infty,0]$. Por lo tanto, la rama principal de $\log z$ y $z^{-n}$ son analíticas en un entorno de $\overline{B(1,R)}$, para todo $n\geq0$.
>>	2. **Aplicación de Cauchy.** Por [[FA - Teo4#^a71c9e|integral nula en un disco]], aplicamos el resultado a $f(z)=\log z/z^n$ en $B(1,R)$ y obtenemos $$\int_\gamma\frac{\log z}{z^n}\,dz=0.$$

>[!exercise] Ejercicio 16
>Evaluar las siguientes integrales ($0\le t\le2\pi$ y $n\in\mathbb N$):
>- **(a)** $\int_\gamma\frac{e^z-e^{-z}}{z^n}\,dz$, $\gamma(t)=e^{it}$.
>- **(b)** $\int_\gamma\frac{dz}{(z-\frac12)^n}$, $\gamma(t)=\frac12+e^{it}$.
>- **(c)** $\int_\gamma\frac{dz}{z^2+1}$, $\gamma(t)=2e^{it}$.
>- **(d)** $\int_\gamma\frac{\sin z}{z}\,dz$, $\gamma(t)=e^{it}$.
>>[!Proof]-
>>- (a)
>>	1. Como $|\gamma(t)|=1$, se tiene $\gamma(t)\neq0$ para todo $t$, así que el integrando está bien definido sobre la curva. Además, las series de $e^z$ y $e^{-z}$ convergen uniformemente sobre $|z|=1$: sus términos tienen módulo $1/k!$, y $\sum_{k=0}^{\infty}1/k!$ converge. Por tanto, podemos integrar término a término y, por linealidad, separar las dos series.
>>	2. Sobre $|z|=1$, $$\frac{e^z-e^{-z}}{z^n}=\sum_{k=0}^{\infty}\frac{1-(-1)^k}{k!}z^{k-n}.$$ Para todo $m\in\mathbb Z$, usando $\gamma(t)=e^{it}$ y $\gamma'(t)=ie^{it}$, $$\int_\gamma z^m\,dz=i\int_0^{2\pi}e^{i(m+1)t}\,dt=\begin{cases}2\pi i,&m=-1,\\0,&m\neq-1.\end{cases}$$
>>	3. En la serie solo puede contribuir el término con $k-n=-1$, es decir, $k=n-1$. Si $n$ es impar, $n-1$ es par y su coeficiente $1-(-1)^{n-1}$ es $0$. Si $n$ es par, $n-1$ es impar y ese coeficiente vale $2$; entonces la integral es $$\frac{2}{(n-1)!}\int_\gamma z^{-1}\,dz=\frac{4\pi i}{(n-1)!}.$$ En conclusión, $$\boxed{\int_\gamma\frac{e^z-e^{-z}}{z^n}\,dz=\begin{cases}0,&n\text{ impar},\\[2pt]\dfrac{4\pi i}{(n-1)!},&n\text{ par}.\end{cases}}$$
>>- (b)
>>	1. Con la parametrización $\gamma(t)=\frac12+e^{it}$, tenemos $\gamma(t)-\frac12=e^{it}$ y $\gamma'(t)=ie^{it}$. Por la definición de integral de línea, $$\int_\gamma\frac{dz}{(z-\frac12)^n}=i\int_0^{2\pi}e^{i(1-n)t}\,dt.$$ 
>>	2. Si $n=1$, el integrando de la integral real es constante y $$i\int_0^{2\pi}1\,dt=2\pi i.$$ Si $n\neq1$, una primitiva de $e^{i(1-n)t}$ es $\frac{e^{i(1-n)t}}{i(1-n)}$, de modo que $$\begin{aligned}\int_\gamma\frac{dz}{(z-\frac12)^n}&=i\left[\frac{e^{i(1-n)t}}{i(1-n)}\right]_0^{2\pi}=\frac{e^{2\pi i(1-n)}-1}{1-n}=0,\end{aligned}$$ pues $1-n$ es un entero no nulo y $e^{2\pi i(1-n)}=1$. En conclusión, $$\boxed{\int_\gamma\frac{dz}{(z-\frac12)^n}=\begin{cases}2\pi i,&n=1,\\0,&n\neq1.\end{cases}}$$
>>- (c)
>>	1. Factorizamos $z^2+1=(z-i)(z+i)$ y escribimos $$\frac{1}{z^2+1}=\frac{1}{2i}\left(\frac{1}{z-i}-\frac{1}{z+i}\right).$$
>>	2. Como $\gamma(t)=2e^{it}$ es el círculo de centro $0$ y radio $2$, los puntos $i$ y $-i$ están en su interior. Aplicando [[FA - Teo4#^a61f2c|integral de Cauchy, versión local]] a $f(z)=1$, obtenemos $$\int_\gamma\frac{dz}{z-i}=2\pi i,\qquad\int_\gamma\frac{dz}{z+i}=2\pi i.$$
>>	3. Sustituyendo en la descomposición en fracciones simples, $$\int_\gamma\frac{dz}{z^2+1}=\frac{1}{2i}(2\pi i-2\pi i)=0.$$
>>- (d)
>>	1. Tomamos $f(z)=\sin z$, que es entera. Por [[FA - Teo4#^a61f2c|integral de Cauchy (primera versión, local)]], con $a=0$ y $r=1$, resulta $$\int_\gamma\frac{\sin z}{z}\,dz=2\pi i f(0)=2\pi i\sin(0)=0.$$

>[!exercise] Ejercicio 17
>Calcular $\int_\gamma\frac{z^2+1}{z(z^2+4)}\,dz$, donde $\gamma(t)=re^{it}$, $0\le t\le2\pi$, para $0<r<2$ y $2<r<\infty$.
>>[!Proof]-
>>1. **Descomposición en fracciones simples.** Escribimos $$\frac{z^2+1}{z(z^2+4)}=\frac{A}{z}+\frac{B}{z-2i}+\frac{C}{z+2i}.$$ Al reducir a denominador común, $$z^2+1=A(z^2+4)+Bz(z+2i)+Cz(z-2i)=(A+B+C)z^2+2i(B-C)z+4A.$$ Igualando coeficientes, $4A=1$, $A+B+C=1$ y $B-C=0$, de donde $A=\frac14$ y $B=C=\frac38$. Por tanto, $$\frac{z^2+1}{z(z^2+4)}=\frac{1}{4z}+\frac{3}{8(z-2i)}+\frac{3}{8(z+2i)}.$$
>>2. **Integrales de los términos simples.** Si $|a|<r$, aplicamos la [[FA - Teo4#^a61f2c|fórmula integral de Cauchy]] con $f\equiv1$ y obtenemos $\int_\gamma\frac{dz}{z-a}=2\pi i$. 
>>3. En cambio si $|a|>r$, elegimos $R$ con $r<R<|a|$; la función $z\mapsto1/(z-a)$ es analítica en un entorno del disco cerrado $\overline{B(0,R)}$, así que por [[FA - Teo4#^a71c9e|integral nula en un disco]] se tiene $\int_\gamma\frac{dz}{z-a}=0$.
>>4. **Caso $0<r<2$.** Los puntos $2i$ y $-2i$ tienen módulo $2$, así que están fuera de la curva, mientras que $0$ está dentro. Por el paso 2, $$\int_\gamma\frac{z^2+1}{z(z^2+4)}\,dz=\frac14(2\pi i)+\frac38(0)+\frac38(0)=\boxed{\frac{\pi i}{2}}.$$
>>5. **Caso $r>2$.** Ahora $0$, $2i$ y $-2i$ están dentro de la curva. Por el paso 2, $$\int_\gamma\frac{z^2+1}{z(z^2+4)}\,dz=\left(\frac14+\frac38+\frac38\right)2\pi i=\boxed{2\pi i}.$$

>[!exercise] Ejercicio 18
>Sea $f$ una función entera y supongamos que existen una constante $M$, un $R>0$ y un entero $n\ge1$ tales que $|f(z)|\le M|z|^n$ para $|z|>R$. Demostrar que $f$ es un polinomio de grado $\le n$.
>>[!Proof]-
>>1. Si $M=0$, entonces $f=0$ para $|z|>R$ y el teorema de identidad da $f\equiv0$.
>>2. Supongamos $M>0$. Como $f$ es entera, está definida y es continua en el disco cerrado $\{z:|z|\le R\}$, que es compacto; por lo tanto, existe una constante $C$ tal que $|f(z)|\le C$ para $|z|\le R$. 
>>3. Para todo $r>R$ suficientemente grande, $Mr^n\ge C$. Si $|z|\le R$, entonces $$|f(z)|\le C\le Mr^n$$ 
>>4. Si $R<|z|<r$, la hipótesis da $|f(z)|\le M|z|^n\le Mr^n$. Por tanto, $$|f(z)|\le Mr^n$$ en todo el disco $|z|<r$.
>>5. Aplicando la [[FA - Teo4#^1b7e4c|fórmula de la cota de Cauchy]] en el disco de centro $0$ y radio $r$, para todo $k\ge1$ se tiene $$|f^{(n+k)}(0)|\le\frac{Mr^n(n+k)!}{r^{n+k}}=\frac{M(n+k)!}{r^k}\longrightarrow0\qquad(r\to\infty).$$ Por lo tanto, $f^{(n+k)}(0)=0$ para todo $k\ge1$.
>>6. Definimos el polinomio $$P(z)=\sum_{j=0}^{n}\frac{f^{(j)}(0)}{j!}z^j.$$ Por el [[FA - Teo2#^6fedda|desarrollo de Taylor]] y la anulación de las derivadas de orden mayor que $n$, existe $\rho>0$ tal que $f(z)=P(z)$ para $|z|<\rho$. Como $f$ y $P$ son enteras y coinciden en esa bola, por el [[FA - Teo5#^8d43c1|principio de identidad]] coinciden en todo $\mathbb{C}$.   

>[!exercise] Ejercicio 19
>Encontrar todas las funciones enteras $f$ tales que $f(x)=e^x$ para todo $x\in\mathbb R$.
>>[!Proof]-
>>1. Consideremos $E:\mathbb{C}\to\mathbb{C}$ dada por $E(z)=e^z$, que es entera. Por hipótesis, $f(x)=e^x=E(x)$ para todo $x\in\mathbb{R}$.
>>2. El conjunto donde $f$ y $E$ coinciden contiene a $\mathbb{R}$, que tiene $0$ como punto de acumulación en $\mathbb{C}$ (por ejemplo, $1/n\to0$). Por el [[FA - Teo5#^8d43c1|principio de identidad]], $f=E$ en $\mathbb{C}$.
>>3. Recíprocamente, $E(z)=e^z$ es entera y cumple $E(x)=e^x$ para todo $x\in\mathbb{R}$. Por tanto, la única función buscada es $f(z)=e^z$ para todo $z\in\mathbb{C}$.

>[!exercise] Ejercicio 20
>Probar que:
>- **(i)** $e^{z+a}=e^ze^a$.
>- **(ii)** $\cos(a+b)=\cos(a)\cos(b)-\operatorname{sen}(a)\operatorname{sen}(b)$.
>>[!Proof]-
>>- (i)
>>	1. Fijemos $x\in\mathbb{R}$. Las funciones $z\mapsto e^{z+x}$ y $z\mapsto e^ze^x$ son enteras y coinciden para todo $z\in\mathbb{R}$ por la propiedad de la exponencial real. Como $\mathbb{R}$ tiene un punto de acumulación en $\mathbb{C}$, por el [[FA - Teo5#^8d43c1|principio de identidad]] coinciden para todo $z\in\mathbb{C}$. Así, la igualdad vale para todo $z\in\mathbb{C}$ cuando $x\in\mathbb{R}$.
>>	2. Fijemos ahora $z\in\mathbb{C}$. Las funciones $a\mapsto e^{z+a}$ y $a\mapsto e^ze^a$ son enteras y, por el paso anterior, coinciden para todo $a\in\mathbb{R}$. De nuevo, por el [[FA - Teo5#^8d43c1|principio de identidad]], coinciden para todo $a\in\mathbb{C}$. Por tanto, $e^{z+a}=e^ze^a$ para todo $z,a\in\mathbb{C}$.
>>- (ii)
>>	1. Fijemos $b\in\mathbb{R}$. Las funciones $a\mapsto\cos(a+b)$ y $a\mapsto\cos(a)\cos(b)-\operatorname{sen}(a)\operatorname{sen}(b)$ son enteras y coinciden para todo $a\in\mathbb{R}$ por la fórmula de adición real. Como $\mathbb{R}$ tiene un punto de acumulación en $\mathbb{C}$, por el [[FA - Teo5#^8d43c1|principio de identidad]] coinciden para todo $a\in\mathbb{C}$.
>>	2. Fijemos ahora $a\in\mathbb{C}$. Las funciones $b\mapsto\cos(a+b)$ y $b\mapsto\cos(a)\cos(b)-\operatorname{sen}(a)\operatorname{sen}(b)$ son enteras y, por el paso anterior, coinciden para todo $b\in\mathbb{R}$. Por el [[FA - Teo5#^8d43c1|principio de identidad]], coinciden para todo $b\in\mathbb{C}$. Por tanto, la identidad vale para todo $a,b\in\mathbb{C}$.

>[!exercise] Ejercicio 21
>Sean $G$ una región y $f,g:G\to\mathbb C$ funciones analíticas tales que $f(z)g(z)=0$ para todo $z\in G$. Probar que $f\equiv0$ o $g\equiv0$.
>>[!Proof]-
>>1. Si $f\equiv0$, la conclusión se cumple. Supongamos entonces que $f\not\equiv0$; existe $z_0\in G$ tal que $f(z_0)\neq0$.
>>2. Por continuidad de $f$, existe $r>0$ tal que $B(z_0,r)\subseteq G$ y $f(z)\neq0$ para todo $z\in B(z_0,r)$.
>>3. Como $f(z)g(z)=0$ para todo $z\in G$, se sigue que $g(z)=0$ para todo $z\in B(z_0,r)$. Por lo tanto, el conjunto de ceros de $g$ tiene un punto de acumulación en $G$.
>>4. Por el [[FA - Teo5#^6ef1c1|teorema de identidad]], $g\equiv0$. Así, $f\equiv0$ o $g\equiv0$.

>[!exercise] Ejercicio 22
>Demostrar que si $f$ y $g$ son funciones analíticas sobre una región $G$ tales que $\overline f\,g$ es analítica, entonces o $f$ es constante o $g\equiv0$.
>>[!Proof]-
>>1. Si $g\equiv0$, se cumple la conclusión. Supongamos entonces que $g\not\equiv0$ y definamos $h:=\overline f\,g$, que es analítica por hipótesis.
>>2. Fijemos $z\in G$. Por la definición de $h'(z)$ y sumando y restando $\overline{f(z)}g(z+w)$, tenemos $$\frac{h(z+w)-h(z)}{w}=\frac{\overline{f(z+w)}-\overline{f(z)}}{w}g(z+w)+\overline{f(z)}\frac{g(z+w)-g(z)}{w}.$$ El segundo sumando tiende a $\overline{f(z)}g'(z)$; como el lado izquierdo tiene límite, también lo tiene el primer sumando.
>>3. Supongamos ahora que $g(z)\neq0$ y consideremos directamente el primer sumando del paso 2, que ya sabemos que tiene límite. Cuando $w=t\to0$ con $t\in\mathbb{R}$, el cociente $\frac{\overline{f(z+t)}-\overline{f(z)}}{t}$ tiende a $\overline{f'(z)}$ y $g(z+t)\to g(z)$; por lo tanto, el primer sumando tiende a $g(z)\overline{f'(z)}$.
>>4. Cuando $w=it\to0$ con $t\in\mathbb{R}$, se tiene $$\frac{\overline{f(z+it)}-\overline{f(z)}}{it}=-\overline{\left(\frac{f(z+it)-f(z)}{it}\right)},$$ así que el primer sumando tiende a $-g(z)\overline{f'(z)}$. Como ese sumando tiene límite, ambos límites direccionales deben coincidir; como $g(z)\neq0$, resulta que $f'(z)=0$.
>>5. Como $g\not\equiv0$, existe $z_0\in G$ con $g(z_0)\neq0$. Por continuidad de $g$, existe $r>0$ tal que $B(z_0,r)\subseteq G$ y $g(z)\neq0$ para todo $z\in B(z_0,r)$. Por el paso anterior, $f'=0$ en ese disco.
>>6. Por [[FA - Teo2#^6fedda|analiticidad implica derivabilidad de todo orden]], $f'$ es analítica; entonces, por el [[FA - Teo5#^6ef1c1|teorema de identidad]], $f'\equiv0$ en $G$.
>>7. Como $G$ es conexa, por [[FA - Teo2#^bb0732|derivada nula implica constante]], $f$ es constante. Así, $f$ es constante o $g\equiv0$.

>[!Exercise] Ejercicio 23
>Sean $G$ una región, $a\in G$ y $f:G\to\mathbb C$ analítica tal que $|f(a)|\le|f(z)|$ para todo $z\in G$. Demostrar que $f(a)=0$ o $f$ es constante.
>>[!Proof]-
>>1. Si $f(a)=0$, se cumple la primera alternativa. Supongamos entonces que $f(a)\neq0$. Como $|f(a)|\le|f(z)|$ para todo $z\in G$, se tiene $f(z)\neq0$ en $G$.
>>2. La función $h:=1/f$ es analítica en $G$ y, para todo $z\in G$, $$|h(z)|=\frac{1}{|f(z)|}\le\frac{1}{|f(a)|}=|h(a)|.$$
>>3. Por el [[FA - Teo5#^c912ed|teorema del módulo máximo]], $h$ es constante en $G$. Como $h=1/f$, también $f$ es constante. Por lo tanto, $f(a)=0$ o $f$ es constante.

>[!exercise] Ejercicio 24
>Sea $U:\mathbb C\to\mathbb R$ una función armónica tal que $U(z)\ge0$ para todo $z\in\mathbb C$. Probar que $U$ es constante.
>>[!Proof]-
>>1. Escribimos $z=x+iy$ y definimos $$V(x,y):=\int_0^y U_x(x,t)\,dt-\int_0^x U_y(s,0)\,ds.$$
>>2. Por el teorema fundamental del cálculo y la armonicidad de $U$, $$\begin{aligned}V_y(x,y)&=U_x(x,y),\\V_x(x,y)&=\int_0^y U_{xx}(x,t)\,dt-U_y(x,0)=-\int_0^y U_{yy}(x,t)\,dt-U_y(x,0)\\&=-U_y(x,y)+U_y(x,0)-U_y(x,0)=-U_y(x,y).\end{aligned}$$
>>3. Así, $U_x=V_y$ y $V_x=-U_y$. Como las derivadas parciales de $U$ y $V$ son continuas, las ecuaciones de Cauchy-Riemann implican que $f:=U+iV$ es entera.
>>4. Definimos $g:=e^{-f}$, que también es entera, y para todo $z\in\mathbb C$ se tiene $$|g(z)|=|e^{-f(z)}|=e^{-\operatorname{Re}f(z)}=e^{-U(z)}\le1.$$
>>5. Fijemos $a\in\mathbb C$. Para todo $R>0$, la [[FA - Teo4#^1b7e4c|fórmula de la cota de Cauchy]] aplicada a $g$ en $B(a,R)$ da $|g'(a)|\le1/R$. Como esto vale para todo $R>0$, $g'(a)=0$. Puesto que $a$ era arbitrario, $g'\equiv0$.
>>6. Como $g=e^{-f}$ nunca se anula, $g'=-f'e^{-f}=0$ implica $f'\equiv0$. Por [[FA - Teo2#^bb0732|derivada nula implica constante]], $f$ es constante en $\mathbb C$; por lo tanto, $U=\operatorname{Re}f$ es constante.

>[!exercise] Ejercicio 25
>Sea $f$ una función analítica no constante en una región $G$ tal que $\{u\in\mathbb C:|u|\le1\}\subset G$ y $|f(z)|=1$ para todo $z\in\{u\in\mathbb C:|u|=1\}$. Probar que $f$ tiene al menos un cero en $\{u\in\mathbb C:|u|<1\}$.
>>[!Proof]-
>>1. Supongamos, por contradicción, que $f$ no tiene ceros en $\mathbb D:=\{z\in\mathbb C:|z|<1\}$. Como $|f|=1$ en la circunferencia unitaria, tampoco se anula allí; por lo tanto, $1/f$ es analítica en $\mathbb D$ y continua en $\overline{\mathbb D}$.
>>2. Si existiera $z_0\in\mathbb D$ con $|f(z_0)|>1$, por continuidad y compacidad $|f|$ alcanzaría un máximo $M>1$ en $\overline{\mathbb D}$. Como $|f|=1$ en la frontera, ese máximo se alcanzaría en $\mathbb D$; por el [[FA - Teo5#^c912ed|módulo máximo]], $f$ sería constante en $\mathbb D$. Por continuidad, su módulo sería $1$ en la frontera, contradiciendo $M>1$. Luego $|f(z)|\le1$ para todo $z\in\mathbb D$.
>>3. El mismo argumento aplicado a $1/f$, cuyo módulo también vale $1$ en la frontera, da $|1/f(z)|\le1$ para todo $z\in\mathbb D$. Como $f$ no se anula, resulta $|f(z)|\ge1$; junto con el paso anterior, $|f(z)|=1$ en $\mathbb D$.
>>4. Por el [[FA - Teo5#^4c39b6|módulo constante implica constante]], $f$ es constante en $\mathbb D$; sea $c$ esa constante. La función $f-c$ es analítica en $G$ y se anula en $\mathbb D$, así que sus ceros tienen un punto de acumulación en $G$. Por el [[FA - Teo5#^6ef1c1|teorema de identidad]], $f\equiv c$ en $G$, contradiciendo que $f$ no es constante.
>>5. La suposición de que $f$ no tiene ceros en $\mathbb D$ es falsa; por lo tanto, $f$ tiene al menos un cero en $\mathbb D$.

>[!exercise] Ejercicio 26
>Probar que si $f:\mathbb C\to\mathbb C$ es una función continua tal que $f$ es analítica en $\mathbb C-\{x\in\mathbb R:|x|\le1\}$, entonces $f$ es entera.
>>[!Proof]-
>>1. **Rectángulos alejados de la recta real.** Sea $Q$ un rectángulo cerrado de lados horizontales y verticales contenido en uno de los semiplanos $\operatorname{Im}z>0$ o $\operatorname{Im}z<0$. Sea $d>0$ la distancia mínima de $Q$ a la recta real. Dividimos $Q$ en una cuadrícula finita de rectángulos cuyas diagonales miden menos que $d$. Para cada rectángulo pequeño, elegimos una bola centrada en su centro con radio estrictamente entre la mitad de su diagonal y la distancia de su centro a la recta real; su contorno queda dentro de la bola y la clausura de esta permanece en el mismo semiplano. Como $f$ es analítica en la clausura de esa bola, la [[FA - Teo4#^a71c9e|integral sobre curvas cerradas en una bola]] da integral nula sobre el contorno de cada pieza. Al sumar, cada lado interior se recorre dos veces en sentidos contrarios y se cancela; por lo tanto, $\int_{\partial Q}f(z)\,dz=0$.
>>2. **Rectángulos con un lado en la recta real.** Si $Q=[a,b]\times[0,c]$ con $a<b$ y $c>0$, el paso 1 se aplica a $Q_\varepsilon=[a,b]\times[\varepsilon,c]$ para $0<\varepsilon<c$. La continuidad de $f$ en el compacto $Q$ implica que $\int_a^b f(t+i\varepsilon)\,dt\to\int_a^b f(t)\,dt$; las integrales sobre los dos tramos verticales de longitud $\varepsilon$ tienden a $0$ porque $f$ está acotada en $Q$. Por consiguiente, al pasar al límite en $\int_{\partial Q_\varepsilon}f(z)\,dz=0$, obtenemos $\int_{\partial Q}f(z)\,dz=0$. El mismo argumento, desde abajo, vale para $[a,b]\times[c,0]$ con $c<0$.
>>3. **Cualquier rectángulo.** Si un rectángulo de lados paralelos a los ejes cruza la recta real, lo dividimos por ella en dos rectángulos del paso 2. Sus integrales sobre el lado común se cancelan porque tienen orientaciones opuestas y la función tiene los mismos valores allí. Junto con los pasos 1 y 2, esto demuestra $\int_{\partial Q}f(z)\,dz=0$ para todo rectángulo $Q$ de lados paralelos a los ejes, orientado positivamente.
>>4. **Construcción de una primitiva.** Para $z=x+iy$ definimos $$F(x+iy):=\int_0^x f(t)\,dt+i\int_0^y f(x+it)\,dt,$$ entendiendo las integrales con signo cuando el extremo superior es menor que el inferior. Si $x,x',y\in\mathbb R$, el paso 3 aplicado al rectángulo con vértices $x,x',x'+iy,x+iy$ (o el paso 2 si uno de sus lados está en la recta) y la cancelación de los tramos correspondientes dan $$F(x'+iy)-F(x+iy)=\int_x^{x'}f(t+iy)\,dt.$$ Para $y=0$ esta igualdad se sigue directamente de la definición; los signos de las integrales cubren también $x'<x$ e $y<0$.
>>5. **Derivada de $F$.** Dados $z=x+iy$ y $w=x'+iy'$, el paso 4 y la definición de $F$ dan $$F(w)-F(z)=\int_x^{x'}f(t+iy)\,dt+i\int_y^{y'}f(x'+it)\,dt.$$ Cada punto de los dos segmentos de integración dista de $z$ a lo sumo $|w-z|$. Si $\omega_z(r):=\sup_{|\zeta-z|\le r}|f(\zeta)-f(z)|$, la continuidad de $f$ implica $\omega_z(r)\to0$ cuando $r\to0$, y entonces $$|F(w)-F(z)-f(z)(w-z)|\le(|x'-x|+|y'-y|)\,\omega_z(|w-z|)\le\sqrt2\,|w-z|\,\omega_z(|w-z|).$$ Por lo tanto $F'(z)=f(z)$ para todo $z\in\mathbb C$.
>>6. **Conclusión sin recurrir a resultados no demostrados.** Como $F'=f$ es continua, $F$ es analítica por la [[FA - Teo2#^9f31ac|definición de analiticidad]]. Fijemos $a\in\mathbb C$ y $r>0$ y orientemos positivamente la circunferencia $|w-a|=r$; la [[FA - Teo4#^a61f2c|fórmula integral de Cauchy]] da, para $|z-a|<r$, $$F(z)=\frac{1}{2\pi i}\int_{|w-a|=r}\frac{F(w)}{w-z}\,dw.$$ Para $|z-a|\le\rho<r$ y $|w-a|=r$, la identidad geométrica $$\frac1{w-z}=\sum_{n=0}^{\infty}\frac{(z-a)^n}{(w-a)^{n+1}}$$ converge uniformemente para $|z-a|\le\rho$ y $|w-a|=r$, pues $|(z-a)/(w-a)|\le\rho/r<1$. Por el [[FA - Teo4#^5d2a91|paso al límite bajo la integral]], $$F(z)=\sum_{n=0}^{\infty}c_n(z-a)^n,\qquad c_n:=\frac1{2\pi i}\int_{|w-a|=r}\frac{F(w)}{(w-a)^{n+1}}\,dw.$$ La derivación término a término demostrada en [[FA - Teo2#^63c6c5|series de potencias]] expresa $f=F'$ también como una serie de potencias convergente cerca de $a$, y el mismo resultado asegura su analiticidad. Como $a$ era arbitrario, $f$ es entera.
