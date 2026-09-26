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
>>	1. **Descomposición y parametrización.** Como $z^2-1=(z-1)(z+1)$, $$\frac{1}{z^2-1}=\frac{1}{2(z-1)}-\frac{1}{2(z+1)}.$$ Para $\gamma(t)=1+e^{it}$, se tiene $\gamma'(t)=ie^{it}$, así que $dz=ie^{it}\,dt$.
>>	2. **Primer término.** Incluyendo el factor $dz=ie^{it}\,dt$, $$\int_\gamma\frac{dz}{z-1}=\int_0^{2\pi}\frac{1}{e^{it}}\,ie^{it}\,dt=2\pi i.$$
>>	3. **Segundo término: sumas parciales y derivada.** Como $|e^{it}/2|=1/2<1$, las sumas parciales de la serie geométrica convergen uniformemente en $t$. Usando $\gamma'(t)=ie^{it}$, $$\begin{aligned}\int_\gamma\frac{dz}{z+1}&=\lim_{N\to\infty}\frac12\int_0^{2\pi}\left[\sum_{k=0}^{N}\left(-\frac{e^{it}}2\right)^k\right]ie^{it}\,dt\\&=\lim_{N\to\infty}\frac{i}{2}\sum_{k=0}^{N}\left(-\frac12\right)^k\int_0^{2\pi}e^{i(k+1)t}\,dt\\&=\lim_{N\to\infty}0=0,\end{aligned}$$ pues cada integral del sumatorio es nula.
>>	4. **Conclusión.** $$\int_\gamma\frac{dz}{z^2-1}=\frac12\left(\int_\gamma\frac{dz}{z-1}-\int_\gamma\frac{dz}{z+1}\right)=\pi i.$$ 
>>- (ii)
>>	1. **Descomposición y parametrización.** Por la descomposición anterior y usando $\gamma(t)=2e^{it}$, $-\pi\le t\le\pi$, se tiene $\gamma'(t)=2ie^{it}$ y $dz=\gamma'(t)dt=2ie^{it}\,dt=iz\,dt$; por lo tanto, $$\int_\gamma\frac{dz}{z^2-1}=\frac12\int_\gamma\left(\frac{1}{z-1}-\frac{1}{z+1}\right)dz.$$
>>	2. **Expansiones geométricas y factor común.** Sobre la curva $|z|=2$, se tiene $|1/z|=1/2<1$, así que las series geométricas convergen uniformemente: $$\frac{1}{z-1}=\frac1z\sum_{k=0}^{\infty}\left(\frac1z\right)^k,\qquad \frac{1}{z+1}=\frac1z\sum_{k=0}^{\infty}\left(-\frac1z\right)^k.$$ Ambas expansiones tienen el factor común $1/z$.
>>	3. **Paso al límite e integración.** Por convergencia uniforme y usando $dz=\gamma'(t)dt$, con $\gamma'(t)=2ie^{it}$, $$\begin{aligned}\int_\gamma\frac{dz}{z^2-1}&=\lim_{N\to\infty}\frac12\int_\gamma\frac1z\left[\sum_{k=0}^{N}\left(\frac1z\right)^k-\sum_{k=0}^{N}\left(-\frac1z\right)^k\right]dz\\&=\lim_{N\to\infty}\frac12\int_{-\pi}^{\pi}\frac{1}{2e^{it}}\left[\sum_{k=0}^{N}\left(\frac{1}{2e^{it}}\right)^k-\sum_{k=0}^{N}\left(-\frac{1}{2e^{it}}\right)^k\right]2ie^{it}\,dt\\&=\lim_{N\to\infty}\frac{i}{2}\int_{-\pi}^{\pi}\left[\sum_{k=0}^{N}\left(\frac{1}{2e^{it}}\right)^k-\sum_{k=0}^{N}\left(-\frac{1}{2e^{it}}\right)^k\right]dt\\&=\lim_{N\to\infty}0=0.\end{aligned}$$ Para cada $N$, los términos $k=0$ se cancelan y las integrales de los términos $k\ge1$ son nulas: $$\int_{-\pi}^{\pi}\left(\frac{1}{2e^{it}}\right)^kdt=2^{-k}\int_{-\pi}^{\pi}e^{-ikt}\,dt=0,$$ y lo mismo vale para los términos con $(-1)^k$.
>>	4. **Conclusión.** $$\int_\gamma\frac{dz}{z^2-1}=0.$$ 

>[!exercise] Ejercicio 10
>Suponer que $f$ es continua en una región $G$. Probar que dos primitivas de $f$ en $G$ (si existen) difieren en una constante.
>>[!Proof]-
>>1. Sean $F,H$ dos primitivas de $f$ en $G$. Entonces $F'=H'=f$, y por tanto $(F-H)'=0$ en $G$. Además, como $f$ es continua, las derivadas $F'$ y $H'$ son continuas. Por la [[FA - Teo2#^9f31ac|Definición de función analítica]], literal: «Una función $f:G\to\mathbb{C}$ es **analítica** si es continuamente diferenciable en $G$.» Así, $F-H$ es analítica en $G$.
>>2. Por la [[FA - Teo2#^44d2e7|definición de región]], literal: «**Región:** $G$ abierto y conexo.» También, por la [[FA - Teo2#^bb0732|derivada nula implica constante]], literal: «Si $G$ es abierto y conexo y $f:G\to\mathbb{C}$ es analítica con $f'(z)=0$ para todo $z\in G$, entonces $f$ es constante.» Aplicándola a $F-H$, concluimos que $F-H$ es constante en $G$; por lo tanto, las dos primitivas difieren en una constante.

>[!exercise] Ejercicio 11
>Probar la siguiente fórmula de integración por partes: sean $f$ y $g$ funciones analíticas en $G$ y sea $\gamma$ una curva $C^1$ a trozos en $G$ de $a$ en $b$. Entonces $$\int_\gamma fg'=f(b)g(b)-f(a)g(a)-\int_\gamma f'g.$$

>[!exercise] Ejercicio 12
>Sea $\gamma$ una curva cerrada $C^1$ a trozos en un conjunto abierto $G$. Demostrar que para todo $a\notin G$ y para todo $n\ge2$, $$\int_\gamma(z-a)^{-n}\,dz=0.$$
>>[!Proof]-
>>1. Como $a\notin G$, para todo $z\in G$ se tiene $z-a\neq0$. Definimos en $G$ la función $$F(z)=\frac{(z-a)^{1-n}}{1-n}.$$ Entonces $F$ está definida en todo $G$ y, para todo $z\in G$, $$F'(z)=\frac{1}{1-n}(1-n)(z-a)^{-n}=(z-a)^{-n}.$$ Por lo tanto, $F$ es una primitiva en $G$ del integrando, que es continuo en $G$.
>>2. Como $\gamma$ es $C^1$ a trozos (suave por secciones) y continua en $[u,v]$, por [[FA - Teo4#^b5f0d7|las curvas suaves por secciones son de variación acotada]] tiene variación acotada, luego es rectificable. Además, al ser cerrada, su punto inicial coincide con su punto final: $\gamma(u)=\gamma(v)$.
>>3. Por la [[FA - Teo4#^c8a124|Regla de Barrow para integrales de línea]], con $f(z)=(z-a)^{-n}$ y su primitiva $F$ del paso 1, $$\int_\gamma(z-a)^{-n}\,dz=F(\gamma(v))-F(\gamma(u)).$$
>>4. Ambos extremos de $\gamma$ coinciden, así que esa diferencia es $0$ y, por consiguiente, $$\int_\gamma(z-a)^{-n}\,dz=0.$$

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

>[!exercise] Ejercicio 14
>En cada uno de los siguientes casos dar la expansión de $f$ en series de potencias alrededor de $a$ y encontrar su radio de convergencia.
>- **(i)** $f(z)=\log z$, $a=i$.
>- **(ii)** $f(z)=\sqrt z$, $a=1$.

>[!exercise] Ejercicio 15
>Evaluar las siguientes integrales (con $n\ge0$ en el inciso **(d)**):
>- **(a)** $\int_\gamma\frac{e^{iz}}{z^2}\,dz$, $\gamma(t)=e^{it}$, $0\le t\le2\pi$.
>- **(b)** $\int_\gamma\frac{dz}{z-a}$, $\gamma(t)=a+re^{it}$, $0\le t\le2\pi$.
>- **(c)** $\int_\gamma\frac{\operatorname{sen}z}{z^3}\,dz$, $\gamma(t)=e^{it}$, $0\le t\le2\pi$.
>- **(d)** $\int_\gamma\frac{\log z}{z^n}\,dz$, $\gamma(t)=1+\frac12e^{it}$, $0\le t\le2\pi$.
>>[!Proof]-
>>- (a)
>>	1. **Idea.** El cálculo directo por $(F\circ\gamma)(t)\gamma'(t)$ no es elemental; escribimos $e^{iz}$ en serie y usamos convergencia uniforme sobre el compacto $\{\gamma\}$ más Barrow término a término, todo ya dado en Teo 4.
>>	2. **Curva.** Sea $F(z)=e^{iz}/z^{2}$. $\gamma(t)=0+1\cdot e^{it}$, $t\in[0,2\pi]$, es suave con $\gamma'(t)=ie^{it}$ continua; por Theory/FA - Teo4.md, Proposition 5 (Las curvas suaves por secciones son de variación acotada), literal: Sea $\gamma:[a,b]\to\mathbb{C}$ suave por secciones. Entonces $\gamma$ es de variación acotada y $$\text{Var}(\gamma)=\int_{a}^{b}|\gamma'(t)|dt.$$ Además $|\gamma(t)|=1$, luego $\{\gamma\}\subset G=\mathbb{C}\setminus\{0\}$ abierto y $F\circ\gamma$ continua, por lo que la Definición 11 legitima $\int_{\gamma}F(z)dz$.
>>	3. **Sumas parciales.** Por Teo 2, $e^{w}=\sum_{n=0}^{\infty}w^{n}/n!$ en $\mathbb{C}$; con $w=iz$, $g_{N}(z)=\sum_{n=0}^{N}(iz)^{n}/n!=\sum_{n=0}^{N}i^{n}z^{n}/n!$ y $F_{N}(z)=g_{N}(z)/z^{2}=\sum_{n=0}^{N}(i^{n}/n!)z^{n-2}$ para $z\neq 0$; la convergencia $F_{N}\to F$ es uniforme sobre $\{\gamma\}$ por M-test ($1/n!$ sumable).
>>	4. **Paso al límite.** Por Theory/FA - Teo4.md, Lemma (Paso al límite bajo la integral), si $F_{N},F$ son continuas sobre $\{\gamma\}$ y $F_{N}\to F$ uniformemente ahí, entonces $$\int_{\gamma}F_{N}\to\int_{\gamma}F.$$ Luego $$\int_{\gamma}F_{N}=\sum_{n=0}^{N}(i^{n}/n!)\int_{\gamma}z^{n-2}dz\to\int_{\gamma}F$$ por linealidad para sumas finitas.
>>	5. **Uso explícito de los valores.** Para $N\geq 1$, $$\int_{\gamma}F_{N}=(i^{0}/0!)\int_{\gamma}z^{-2}dz+(i^{1}/1!)\int_{\gamma}z^{-1}dz+\sum_{n=2}^{N}(i^{n}/n!)\int_{\gamma}z^{n-2}dz$$ por el paso 4; por Theory/FA - Teo4.md, Regla de Barrow y Corolario para cerradas, si $k\neq -1$ entonces $$\int_{\gamma}z^{k}dz=0,$$ luego el primer término es $0$ ($k=-2$) y cada término con $n\geq 2$ es $0$ ($k=n-2\geq 0$); por el Example de Teo 4, $$\int_{\gamma}z^{-1}dz=2\pi i,$$ con coeficiente $i^{1}/1!=i$; por tanto $$\begin{aligned}\int_{\gamma}F_{N}&=0+i\cdot 2\pi i+0\\&=-2\pi\end{aligned}$$ para todo $N\geq 1$, y por el paso 4 concluimos $$\int_{\gamma}e^{iz}/z^{2}dz=-2\pi.$$

>[!exercise] Ejercicio 16
>Evaluar las siguientes integrales ($0\le t\le2\pi$ y $n\in\mathbb N$):
>- **(a)** $\int_\gamma\frac{e^z-e^{-z}}{z^n}\,dz$, $\gamma(t)=e^{it}$.
>- **(b)** $\int_\gamma\frac{dz}{(z-\frac12)^n}$, $\gamma(t)=\frac12+e^{it}$.
>- **(c)** $\int_\gamma\frac{dz}{z^2+1}$, $\gamma(t)=2e^{it}$.
>- **(d)** $\int_\gamma\frac{\operatorname{sen}z}{z}\,dz$, $\gamma(t)=e^{it}$.

>[!exercise] Ejercicio 17
>Calcular $\int_\gamma\frac{z^2+1}{z(z^2+4)}\,dz$, donde $\gamma(t)=re^{it}$, $0\le t\le2\pi$, para $0<r<2$ y $2<r<\infty$.

>[!exercise] Ejercicio 18
>Sea $f$ una función entera y supongamos que existen una constante $M$, un $R>0$ y un entero $n\ge1$ tales que $|f(z)|\le M|z|^n$ para $|z|>R$. Demostrar que $f$ es un polinomio de grado $\le n$.

>[!exercise] Ejercicio 19
>Encontrar todas las funciones enteras $f$ tales que $f(x)=e^x$ para todo $x\in\mathbb R$.

>[!exercise] Ejercicio 20
>Probar que:
>- **(i)** $e^{z+a}=e^ze^a$.
>- **(ii)** $\cos(a+b)=\cos(a)\cos(b)-\operatorname{sen}(a)\operatorname{sen}(b)$.

>[!exercise] Ejercicio 21
>Sean $G$ una región y $f,g:G\to\mathbb C$ funciones analíticas tales que $f(z)g(z)=0$ para todo $z\in G$. Probar que $f\equiv0$ o $g\equiv0$.

>[!exercise] Ejercicio 22
>Demostrar que si $f$ y $g$ son funciones analíticas sobre una región $G$ tales que $\overline f\,g$ es analítica, entonces o $f$ es constante o $g\equiv0$.

>[!exercise] Ejercicio 23
>Sean $G$ una región, $a\in G$ y $f:G\to\mathbb C$ analítica tal que $|f(a)|\le|f(z)|$ para todo $z\in G$. Demostrar que $f(a)=0$ o $f$ es constante.

>[!exercise] Ejercicio 24
>Sea $U:\mathbb C\to\mathbb R$ una función armónica tal que $U(z)\ge0$ para todo $z\in\mathbb C$. Probar que $U$ es constante.

>[!exercise] Ejercicio 25
>Sea $f$ una función analítica no constante en una región $G$ tal que $\{u\in\mathbb C:|u|\le1\}\subset G$ y $|f(z)|=1$ para todo $z\in\{u\in\mathbb C:|u|=1\}$. Probar que $f$ tiene al menos un cero en $\{u\in\mathbb C:|u|<1\}$.

>[!exercise] Ejercicio 26
>Probar que si $f:\mathbb C\to\mathbb C$ es una función continua tal que $f$ es analítica en $\mathbb C-\{x\in\mathbb R:|x|\le1\}$, entonces $f$ es entera.
