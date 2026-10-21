# Teo 13 — Integrales reales mediante residuos y ramas del logaritmo (20/10/2026)

> [!remark] Fuente y criterio de transcripción
> Transcripción de las 6 fotos de la clase del 20/10/2026, recibidas a las 13:10 en el grupo de Analíticas del WhatsApp personal. Se conserva el orden y la numeración de los ejemplos de clase, continuación de [[FA - Teo12]]. Se completan las operaciones y estimaciones dejadas como ejercicio; las hipótesis añadidas y las erratas corregidas se señalan expresamente. Las fotos originales están al final.

## 1. Recordatorio: teorema de los residuos

La clase comienza recordando [[FA - Teo11#^a11f03|teorema de los residuos]]: si $f$ es analítica en una región $G$ excepto en singularidades aisladas $a_1,\ldots,a_m$, y $\gamma$ es una curva cerrada rectificable en $G$ que evita esos puntos y satisface $\gamma\simeq_G0$, entonces $$\frac1{2\pi i}\int_\gamma f(z)\,dz=\sum_{k=1}^{m}n(\gamma,a_k)\operatorname{Res}(f,a_k).$$

## 2. Ejemplo 3: integrales con un factor exponencial

La idea es estudiar $$\int_{-\infty}^{\infty}f(x)e^{imx}\,dx=\int_{-\infty}^{\infty}f(x)\cos(mx)\,dx+i\int_{-\infty}^{\infty}f(x)\sin(mx)\,dx,$$ siempre que existan las integrales correspondientes; la misma separación vale para valores principales. Si $f$ es real sobre el eje real, las integrales con coseno y seno son, respectivamente, las partes real e imaginaria de la integral exponencial.

Trabajamos con $m>0$ y cerramos el contorno por el semiplano superior. La condición de decaimiento que se pide a $f$ es $$\lim_{\substack{|z|\to\infty\\ \operatorname{Im}z\geq0}}|f(z)|=0.$$

> [!remark] Hipótesis explicitadas
> En las fotos no se escribe $m>0$, pero se usa en todas las cotas del arco superior. Se supone además que las singularidades relevantes son finitas y que $f$ es analítica en un abierto que contiene el semiplano superior salvo en ellas. Para $m<0$ se cierra por abajo, con orientación horaria; para $m=0$ la estimación siguiente no se aplica.

### 2.1. Caso 1: sin singularidades sobre el eje real

>[!Proposition] Cierre superior para $f(z)e^{imz}$
>Sean $a_1,\ldots,a_k$ las singularidades aisladas de $f$ en el semiplano superior, y supongamos que $f$ no tiene singularidades reales y satisface las hipótesis anteriores. Entonces $$\boxed{\operatorname{VP}\int_{-\infty}^{\infty}f(x)e^{imx}\,dx=2\pi i\sum_{j=1}^{k}\operatorname{Res}\bigl(f(z)e^{imz},a_j\bigr).}$$
>
>>[!Proof]- Desarrollo de las fotos 1–2
>>1. **Contorno.** Tomamos $R$ mayor que los módulos de todas las singularidades y definimos $\gamma_R(t)=Re^{it}$, $0\leq t\leq\pi$. El arco va de $R$ a $-R$ por arriba; unido al segmento real de $-R$ a $R$ forma el contorno positivo $\Gamma_R=[-R,R]+\gamma_R$.
>>2. **Residuos.** Por [[FA - Teo11#^a11f03|teorema de los residuos]], $$\int_{-R}^{R}f(x)e^{imx}\,dx+\int_{\gamma_R}f(z)e^{imz}\,dz=2\pi i\sum_{j=1}^{k}\operatorname{Res}\bigl(f(z)e^{imz},a_j\bigr).\qquad (1)$$
>>3. **Módulo de la exponencial.** Como $imRe^{it}=imR\cos t-mR\sin t$, $$\left|e^{imRe^{it}}\right|=e^{-mR\sin t}.$$ Definimos $$M(R)=\sup_{0\leq t\leq\pi}|f(Re^{it})|.$$
>>4. **Primera estimación.** Parametrizando el arco y usando la simetría del seno, $$\begin{aligned}\left|\int_{\gamma_R}f(z)e^{imz}\,dz\right|&=\left|iR\int_0^\pi f(Re^{it})e^{imRe^{it}}e^{it}\,dt\right|\\&\leq RM(R)\int_0^\pi e^{-mR\sin t}\,dt\\&=2RM(R)\int_0^{\pi/2}e^{-mR\sin t}\,dt.\end{aligned}$$
>>5. **Cota de Jordan.** Para $0\leq t\leq\pi/2$, $\sin t\geq2t/\pi$. Por tanto, $$\begin{aligned}\left|\int_{\gamma_R}f(z)e^{imz}\,dz\right|&\leq2RM(R)\int_0^{\pi/2}e^{-2mRt/\pi}\,dt\\&=2RM(R)\left[-\frac{\pi}{2mR}e^{-2mRt/\pi}\right]_0^{\pi/2}\\&=\frac{\pi M(R)}m(1-e^{-mR}).\end{aligned}$$
>>6. **Por qué $M(R)\to0$: argumento de las fotos.** Sea $R_n\to\infty$. Por definición de supremo, elegimos $t_n\in[0,\pi]$ tal que $$0\leq M(R_n)\leq|f(R_ne^{it_n})|+\frac1n.$$ Dado $\varepsilon>0$, la hipótesis de decaimiento proporciona $A>0$ tal que $|z|>A$, $\operatorname{Im}z\geq0$, implica $|f(z)|<\varepsilon$. Para $n$ grande, $|R_ne^{it_n}|=R_n>A$, de modo que $$0\leq M(R_n)\leq\varepsilon+\frac1n.$$ Así, $\limsup_{n\to\infty}M(R_n)\leq\varepsilon$ para todo $\varepsilon>0$, y $M(R_n)\to0$. Como la sucesión $R_n\to\infty$ era arbitraria, $M(R)\to0$.
>>7. **Conclusión.** El paso 5 da $$\lim_{R\to\infty}\int_{\gamma_R}f(z)e^{imz}\,dz=0.$$ Tomando el límite en (1), existe el límite simétrico de las integrales reales y obtenemos la fórmula enunciada.

^a13b01

> [!warning] Residuos del integrando completo y tipo de convergencia
> En varias líneas de las fotos se abrevia incorrectamente $\operatorname{Res}(f,a_j)$: debe ser $\operatorname{Res}(f(z)e^{imz},a_j)$. Además, el argumento con $[-R,R]$ calcula directamente un valor principal; para identificarlo con la integral impropia usual hay que justificar la convergencia separada de las dos colas. Por ejemplo, si $f(x)=O(|x|^{-k})$ con $k>1$ y no hay singularidades reales, la convergencia es absoluta. Este es el sentido del recordatorio de comparación al final del caso 1 de la foto 2.

### 2.2. Caso 2: un polo simple sobre el eje real

>[!Proposition] Contribución de un polo real simple
>Supongamos ahora que $f$ tiene un único polo real $x_0$, que es simple, y que las demás hipótesis del caso anterior se mantienen. Escribimos $F(z)=f(z)e^{imz}$. Entonces $$\boxed{\operatorname{VP}\int_{-\infty}^{\infty}F(x)\,dx=2\pi i\sum_{j=1}^{k}\operatorname{Res}(F,a_j)+\pi i\operatorname{Res}(F,x_0).}$$ Aquí $$\operatorname{VP}\int_{-\infty}^{\infty}F(x)\,dx:=\lim_{r\downarrow0}\lim_{R\to\infty}\left(\int_{-R}^{x_0-r}F(x)\,dx+\int_{x_0+r}^{R}F(x)\,dx\right).$$
>
>>[!Proof]- Desarrollo de las fotos 2–3
>>1. **Contorno con una muesca.** Elegimos $R$ grande y $r>0$ pequeño, sin otras singularidades en $\overline{B(x_0,r)}$. Tomamos $$\Gamma_{r,R}=[-R,x_0-r]+\eta_r+[x_0+r,R]+\gamma_R,$$ donde $\gamma_R(t)=Re^{it}$, $0\leq t\leq\pi$, y $\eta_r(t)=x_0+re^{it}$ con $t$ desde $\pi$ hasta $0$. El arco pequeño se recorre en sentido horario, de $x_0-r$ a $x_0+r$, y excluye el polo real del interior.
>>2. **Residuos interiores.** Por [[FA - Teo11#^a11f03|teorema de los residuos]], $$2\pi i\sum_{j=1}^{k}\operatorname{Res}(F,a_j)=\int_{-R}^{x_0-r}F(x)\,dx+\int_{\eta_r}F(z)\,dz+\int_{x_0+r}^{R}F(x)\,dx+\int_{\gamma_R}F(z)\,dz.\qquad (2)$$ El arco grande tiende a cero por la estimación de [[FA - Teo13#^a13b01|cierre superior con exponencial]].
>>3. **Separación del término singular.** Por [[FA - Teo11#^a11c01|clasificación por Laurent]], cerca de $x_0$ podemos escribir $$F(z)=\frac{a}{z-x_0}+g(z),\qquad a=\operatorname{Res}(F,x_0),$$ con $g$ analítica también en $x_0$.
>>4. **Integral del término singular.** La orientación de $\eta_r$ da $$\int_{\eta_r}\frac{dz}{z-x_0}=\int_\pi^0\frac{ire^{it}}{re^{it}}\,dt=i(0-\pi)=-\pi i.$$ Por tanto, $$\int_{\eta_r}F(z)\,dz=-\pi ia+\int_{\eta_r}g(z)\,dz.$$
>>5. **Parte regular.** Como $g$ es continua cerca de $x_0$, existe $C>0$ que la acota allí. Entonces $$\left|\int_{\eta_r}g(z)\,dz\right|\leq\pi rC\xrightarrow[r\downarrow0]{}0.$$ Equivalentemente, con una primitiva local $G$, la integral es $G(x_0+r)-G(x_0-r)\to0$. Así, $$\lim_{r\downarrow0}\int_{\eta_r}F(z)\,dz=-\pi i\operatorname{Res}(F,x_0).$$
>>6. **Paso al límite.** Primero hacemos $R\to\infty$ y luego $r\downarrow0$ en (2). Resulta $$2\pi i\sum_{j=1}^{k}\operatorname{Res}(F,a_j)=\operatorname{VP}\int_{-\infty}^{\infty}F(x)\,dx-\pi i\operatorname{Res}(F,x_0).$$ Despejando se obtiene la fórmula.

^a13b02

> [!warning] Erratas corregidas en la foto 3
> Al comienzo se propone mostrar que la integral sobre el arco pequeño tiende a cero, pero el cálculo posterior da correctamente $-\pi i\operatorname{Res}(F,x_0)$. Solo la parte regular tiende a cero. En la fórmula final también debe conservarse la indicación «VP»: un polo simple sobre el recorrido no da, en general, una integral impropia ordinaria convergente.

## 3. Ejemplo 4: integrales de funciones racionales de seno y coseno

Sea $R(u,v)$ una función racional sin polos sobre los puntos $(\sin t,\cos t)$, $0\leq t\leq2\pi$. Para calcular $$\int_0^{2\pi}R(\sin t,\cos t)\,dt,$$ hacemos $$z=e^{it},\qquad dz=iz\,dt,\qquad\cos t=\frac12\left(z+\frac1z\right),\qquad\sin t=\frac1{2i}\left(z-\frac1z\right).$$

La circunferencia unidad se recorre positivamente. Definiendo $$H(z)=R\!\left(\frac{z-z^{-1}}{2i},\frac{z+z^{-1}}2\right)\frac1{iz},$$ obtenemos, por [[FA - Teo11#^a11f03|teorema de los residuos]], $$\boxed{\int_0^{2\pi}R(\sin t,\cos t)\,dt=\int_{|z|=1}H(z)\,dz=2\pi i\sum_{|a_j|<1}\operatorname{Res}(H,a_j).}$$ Se cuentan todos los polos de $H$ dentro del disco, incluido $0$ si corresponde.

### Aplicación: integral de $1/(a+\cos\theta)$

>[!exercise] Caso $a>1$
>Calcular $$I(a)=\int_0^\pi\frac{d\theta}{a+\cos\theta},\qquad a>1.$$
>
>>[!Proof]- Cálculo de la foto 3
>>1. **Simetría.** Mediante $u=2\pi-\theta$ en la segunda mitad del período, $$\int_\pi^{2\pi}\frac{d\theta}{a+\cos\theta}=\int_0^\pi\frac{du}{a+\cos u}.$$ Por tanto, $$I(a)=\frac12\int_0^{2\pi}\frac{d\theta}{a+\cos\theta}.$$
>>2. **Cambio a la circunferencia.** Con $z=e^{i\theta}$, $$\begin{aligned}I(a)&=\frac12\int_{|z|=1}\frac1{a+\frac12(z+z^{-1})}\frac{dz}{iz}\\&=\frac1i\int_{|z|=1}\frac{dz}{z^2+2az+1}\\&=-i\int_{|z|=1}\frac{dz}{z^2+2az+1}.\end{aligned}$$
>>3. **Polos.** Las raíces del denominador son $$\alpha=-a-\sqrt{a^2-1},\qquad\beta=-a+\sqrt{a^2-1}.$$ Como $a>1$, $$|\alpha|=a+\sqrt{a^2-1}>1,\qquad|\beta|=a-\sqrt{a^2-1}=\frac1{a+\sqrt{a^2-1}}<1.$$ Solo $\beta$ está dentro de la circunferencia.
>>4. **Residuo.** Por [[FA - Teo12#^a12b02|cociente con cero simple]], $$\operatorname{Res}\left(\frac1{z^2+2az+1},\beta\right)=\frac1{2\beta+2a}=\frac1{2\sqrt{a^2-1}}.$$
>>5. **Resultado.** Por [[FA - Teo11#^a11f03|teorema de los residuos]], $$\begin{aligned}I(a)&=-i\cdot2\pi i\cdot\frac1{2\sqrt{a^2-1}}\\&=\frac{2\pi}{2\sqrt{a^2-1}}\\&=\boxed{\frac\pi{\sqrt{a^2-1}}}.\end{aligned}$$

## 4. Ejemplo 5: una integral con logaritmo

>[!exercise] Integral logarítmica
>Calcular $$I=\int_0^\infty\frac{\ln x}{1+x^2}\,dx.$$
>
>>[!Proof]- Desarrollo de las fotos 4–5
>>1. **Rama elegida.** Trabajamos en $$G=\{z\neq0:-\pi/2<\arg z<3\pi/2\},$$ con la rama $\operatorname{Log}z=\ln|z|+i\arg z$. El corte está en el semieje imaginario negativo. Consideramos $$F(z)=\frac{\operatorname{Log}z}{1+z^2}.$$ En el semiplano superior solo hay un polo, en $z=i$.
>>2. **Contorno.** Para $0<r<1<R$, tomamos $$\Gamma_{r,R}=[-R,-r]+\eta_r+[r,R]+\gamma_R,$$ con $\eta_r$ semicircunferencia superior de radio $r$ recorrida de $-r$ a $r$ en sentido horario, y $\gamma_R$ semicircunferencia superior de radio $R$ recorrida de $R$ a $-R$ en sentido antihorario.
>>3. **Residuo en $i$.** Por [[FA - Teo12#^a12b02|cociente con cero simple]], $$\operatorname{Res}(F,i)=\frac{\operatorname{Log}i}{2i}=\frac{i\pi/2}{2i}=\frac\pi4.$$ Por [[FA - Teo11#^a11f03|teorema de los residuos]], $$\int_{\Gamma_{r,R}}F(z)\,dz=2\pi i\frac\pi4=\frac{\pi^2i}2.$$
>>4. **Tramo real negativo.** Para $x<0$, la rama elegida satisface $\operatorname{Log}x=\ln|x|+i\pi$. Con $u=-x$, $$\begin{aligned}\int_{-R}^{-r}\frac{\operatorname{Log}x}{1+x^2}\,dx&=\int_{-R}^{-r}\frac{\ln|x|+i\pi}{1+x^2}\,dx\\&=\int_r^R\frac{\ln u}{1+u^2}\,du+i\pi\int_r^R\frac{du}{1+u^2}.\end{aligned}$$
>>5. **Identidad del contorno.** Sumando el tramo positivo al paso anterior, $$\frac{\pi^2i}2=2\int_r^R\frac{\ln x}{1+x^2}\,dx+i\pi\int_r^R\frac{dx}{1+x^2}+\int_{\eta_r}F(z)\,dz+\int_{\gamma_R}F(z)\,dz.\qquad (3)$$
>>6. **Cota común para los arcos.** Sea $\rho>0$, $\rho\neq1$. Sobre el arco superior $z=\rho e^{it}$, $0\leq t\leq\pi$, $$\operatorname{Log}(\rho e^{it})=\ln\rho+it,\qquad|1+\rho^2e^{2it}|\geq|1-\rho^2|.$$ Para cualquiera de las dos orientaciones, $$\begin{aligned}\left|\int_{\text{arco de radio }\rho}F(z)\,dz\right|&\leq\rho\int_0^\pi\frac{|\ln\rho|+t}{|1-\rho^2|}\,dt\\&=\frac{\pi\rho|\ln\rho|}{|1-\rho^2|}+\frac{\pi^2\rho}{2|1-\rho^2|}.\end{aligned}$$
>>7. **Límite del arco grande — operación completada.** Para $\rho\to\infty$, $$\frac{\rho}{\rho^2-1}=\frac{1/\rho}{1-1/\rho^2}\to0,\qquad\frac{\rho\ln\rho}{\rho^2-1}=\frac{\ln\rho/\rho}{1-1/\rho^2}\to0,$$ pues $$\lim_{\rho\to\infty}\frac{\ln\rho}{\rho}=\lim_{\rho\to\infty}\frac{1/\rho}{1}=0.$$ En consecuencia, $\int_{\gamma_R}F(z)\,dz\to0$ cuando $R\to\infty$.
>>8. **Límite del arco pequeño — operación completada.** Para $\rho\downarrow0$, $|\ln\rho|=-\ln\rho$ y $$\lim_{\rho\downarrow0}(-\rho\ln\rho)=\lim_{u\to\infty}\frac{\ln u}{u}=0,\qquad u=\frac1\rho.$$ Como $1-\rho^2\to1$, ambos términos de la cota del paso 6 tienden a cero. Así, $\int_{\eta_r}F(z)\,dz\to0$ cuando $r\downarrow0$.
>>9. **Convergencia usual — detalle añadido.** Cerca de $0$, $$\int_0^1\left|\frac{\ln x}{1+x^2}\right|dx\leq\int_0^1-\ln x\,dx=[-x\ln x+x]_0^1=1.$$ En el infinito, $$\int_1^\infty\left|\frac{\ln x}{1+x^2}\right|dx\leq\int_1^\infty\frac{\ln x}{x^2}\,dx=\left[-\frac{\ln x+1}{x}\right]_1^\infty=1.$$ Por tanto, la integral buscada converge absolutamente.
>>10. **Conclusión.** Además, $$\int_0^\infty\frac{dx}{1+x^2}=[\arctan x]_0^\infty=\frac\pi2.$$ Haciendo $r\downarrow0$ y $R\to\infty$ en (3), $$\frac{\pi^2i}2=2I+i\pi\frac\pi2=2I+\frac{\pi^2i}2,$$ de donde $$\boxed{\int_0^\infty\frac{\ln x}{1+x^2}\,dx=0.}$$

> [!remark] Precisiones sobre la foto 4
> No se debe usar $\ln x$ real sobre el tramo negativo: allí corresponde $\operatorname{Log}x=\ln|x|+i\pi$. Las integrales sobre los arcos tienen denominador $1+z^2$. La integral final es una integral impropia ordinaria absolutamente convergente, no solo un valor principal.

## 5. Ejercicio 6: potencias y contorno de ojo de cerradura

Se quiere calcular $$\int_0^\infty\frac{x^{-c}}{1+x}\,dx,\qquad0<c<1.$$ La clase desarrolla primero el caso más general $$\int_0^\infty f(x)x^{-c}\,dx,$$ donde $f$ es racional, no tiene polos sobre $[0,\infty)$ y, escribiendo $f=p/q$ después de cancelar factores comunes, $$\deg q-\deg p\geq1.$$

### 5.1. Fórmula general

>[!Proposition] Integrales con $x^{-c}$, $0<c<1$
>Con las hipótesis anteriores, elegimos la rama $$z^{-c}=e^{-c\operatorname{Log}z},\qquad\operatorname{Log}z=\ln|z|+i\arg z,\qquad0<\arg z<2\pi.$$ Si $a_1,\ldots,a_N$ son los polos de $f$, entonces $$\boxed{(1-e^{-2\pi ic})\int_0^\infty f(x)x^{-c}\,dx=2\pi i\sum_{j=1}^{N}\operatorname{Res}\bigl(z^{-c}f(z),a_j\bigr).}$$
>
>>[!Proof]- Desarrollo de las fotos 5–6, con las estimaciones completadas
>>1. **Rama y contorno.** El corte está en el semieje real positivo. Elegimos $0<r<R$ de modo que todos los polos queden entre ambos radios. El contorno de ojo de cerradura recorre el borde superior del corte de $r$ a $R$, el arco exterior en sentido antihorario, el borde inferior de $R$ a $r$ y el arco interior en sentido horario. Para que el recorrido esté dentro del dominio de la rama, primero se separan los segmentos del corte una distancia $\delta>0$ y luego se toma $\delta\downarrow0$.
>>2. **Contorno desplazado — detalle geométrico explicitado.** Para $0<\delta<r$, ponemos $b_\rho(\delta)=\sqrt{\rho^2-\delta^2}$, $\rho=r,R$. El segmento superior es $z=x+i\delta$, con $x$ desde $b_r(\delta)$ hasta $b_R(\delta)$; el inferior es $z=x-i\delta$, con $x$ desde $b_R(\delta)$ hasta $b_r(\delta)$. Se unen con los arcos de $|z|=R$ y $|z|=r$ que evitan el corte. Así, los segmentos y los arcos se empalman exactamente. Para $\delta$ pequeño, el contorno encierra los mismos polos y evita todos ellos.
>>3. **Residuos.** Aplicando [[FA - Teo11#^a11f03|teorema de los residuos]] al contorno desplazado, $$2\pi i\sum_{j=1}^{N}\operatorname{Res}\bigl(z^{-c}f(z),a_j\bigr)=\int_{\Gamma_{r,R,\delta}}z^{-c}f(z)\,dz.$$
>>4. **Valores de borde.** Para $x>0$, al acercarnos al corte por arriba el argumento tiende a $0$, y por abajo tiende a $2\pi$. Por consiguiente, $$\begin{aligned}\lim_{\delta\downarrow0}(x+i\delta)^{-c}&=x^{-c},\\\lim_{\delta\downarrow0}(x-i\delta)^{-c}&=e^{-2\pi ic}x^{-c}.\end{aligned}$$ Como $f$ es continua cerca de $[r,R]$, estos límites se pueden integrar en ese intervalo: las expresiones se extienden continuamente a cada borde del corte, uniformemente sobre el intervalo compacto.
>>5. **Suma de los segmentos.** Al hacer $\delta\downarrow0$, el segmento superior aporta $\int_r^R f(x)x^{-c}\,dx$ y el inferior, por su orientación, aporta $e^{-2\pi ic}\int_R^r f(x)x^{-c}\,dx$. Así, $$2\pi i\sum_{j=1}^{N}\operatorname{Res}\bigl(z^{-c}f(z),a_j\bigr)=\int_{\eta_r}z^{-c}f(z)\,dz+\int_{\gamma_R}z^{-c}f(z)\,dz+(1-e^{-2\pi ic})\int_r^R f(x)x^{-c}\,dx.\qquad (4)$$ Aquí $\gamma_R$ es el arco exterior límite, con argumento de $0$ a $2\pi$, y $\eta_r$ el interior, con argumento de $2\pi$ a $0$; los valores en los extremos se interpretan como límites desde la rama.
>>6. **Decaimiento racional.** Si $u=\deg p$ y $v=\deg q$, con coeficientes principales $a_u,b_v$, entonces $$f(z)=\frac{a_u}{b_v}z^{u-v}(1+o(1)),\qquad zf(z)=\frac{a_u}{b_v}z^{u-v+1}(1+o(1)).$$ Como $v-u\geq1$, $zf(z)$ permanece acotada para $|z|$ grande. Si $v-u=1$, tiende a $a_u/b_v$; si $v-u>1$, tiende a $0$. Por tanto, existe $C>0$ tal que $|f(z)|\leq C/|z|$ para $|z|$ grande. El caso $f\equiv0$ es inmediato.
>>7. **Arco exterior.** Como $c$ es real, $$|(Re^{it})^c|=|e^{c\ln R+ict}|=R^c.$$ Definiendo $M(R)=\sup_{0<t<2\pi}|f(Re^{it})|$, resulta $$\begin{aligned}\left|\int_{\gamma_R}z^{-c}f(z)\,dz\right|&\leq R\int_0^{2\pi}\frac{|f(Re^{it})|}{R^c}\,dt\\&\leq\frac{2\pi RM(R)}{R^c}\\&\leq\frac{2\pi C}{R^c}\xrightarrow[R\to\infty]{}0,\end{aligned}$$ porque $c>0$.
>>8. **Arco interior — ejercicio completado.** Como $f$ no tiene polo en $0$, es acotada cerca de ese punto: $|f(z)|\leq C_0$. Entonces $$\left|\int_{\eta_r}z^{-c}f(z)\,dz\right|\leq2\pi r\frac{C_0}{r^c}=2\pi C_0r^{1-c}\xrightarrow[r\downarrow0]{}0,$$ porque $c<1$.
>>9. **Convergencia de la integral real.** Cerca de $0$, $|f(x)x^{-c}|\leq C_0x^{-c}$ y $$\int_0^1x^{-c}\,dx=\left[\frac{x^{1-c}}{1-c}\right]_0^1=\frac1{1-c}.$$ En el infinito, $|f(x)x^{-c}|\leq Cx^{-1-c}$ y $$\int_1^\infty x^{-1-c}\,dx=\left[-\frac{x^{-c}}c\right]_1^\infty=\frac1c.$$ Por tanto, la integral converge absolutamente.
>>10. **Conclusión.** Haciendo $r\downarrow0$ y $R\to\infty$ en (4), las dos integrales sobre los arcos desaparecen y se obtiene la fórmula enunciada.

^a13b03

> [!warning] Erratas corregidas en las fotos 5–6
> El segmento inferior está junto al semieje positivo: se escribe $z=x-i\delta$ y se recorre con $x$ decreciente; la expresión manuscrita $L_2(t)=-t-i\delta$ no corresponde a ese dibujo. Además, $|(Re^{it})^c|=R^c$ porque el factor angular es $e^{ict}$, no $e^{it}$. En el arco pequeño no vale $1/r^c\to0$: ese factor diverge; lo que tiende a cero es la cota completa $2\pi C_0r^{1-c}$. En el arco grande basta que $RM(R)$ permanezca acotado; no hace falta que tienda a cero.

### 5.2. Aplicación a $f(z)=1/(1+z)$

>[!exercise] Resultado del ejercicio 6
>Demostrar que $$\int_0^\infty\frac{x^{-c}}{1+x}\,dx=\frac\pi{\sin(\pi c)},\qquad0<c<1.$$
>
>>[!Proof]- Cálculo final de la foto 6
>>1. **Único polo.** Aplicamos [[FA - Teo13#^a13b03|fórmula con potencias y corte positivo]] a $f(z)=1/(1+z)$. El único polo es $-1$, simple, y $$\operatorname{Res}\left(\frac{z^{-c}}{1+z},-1\right)=\lim_{z\to-1}(z+1)\frac{z^{-c}}{1+z}=(-1)^{-c}$$ por [[FA - Teo12#^a12c01|fórmula del límite]].
>>2. **Valor en la rama elegida.** Como $0<\arg z<2\pi$, $\arg(-1)=\pi$. Entonces $$(-1)^{-c}=e^{-c\operatorname{Log}(-1)}=e^{-c(\ln1+i\pi)}=e^{-i\pi c}.$$
>>3. **Identidad de residuos.** La fórmula general da $$(1-e^{-2\pi ic})\int_0^\infty\frac{x^{-c}}{1+x}\,dx=2\pi i\,e^{-i\pi c}.$$
>>4. **Simplificación completa.** Factorizando el denominador, $$1-e^{-2\pi ic}=e^{-i\pi c}(e^{i\pi c}-e^{-i\pi c})=2i\,e^{-i\pi c}\sin(\pi c).$$ Como $0<c<1$, $\sin(\pi c)>0$, y podemos dividir. Por tanto, $$\begin{aligned}\int_0^\infty\frac{x^{-c}}{1+x}\,dx&=\frac{2\pi i\,e^{-i\pi c}}{1-e^{-2\pi ic}}\\&=\frac{2\pi i\,e^{-i\pi c}}{2i\,e^{-i\pi c}\sin(\pi c)}\\&=\boxed{\frac\pi{\sin(\pi c)}}.\end{aligned}$$

## Fotos originales

Las seis imágenes se conservan en el orden en que fueron enviadas.

![[Adjuntos/FA-Teo13/foto-1.jpg]]

![[Adjuntos/FA-Teo13/foto-2.jpg]]

![[Adjuntos/FA-Teo13/foto-3.jpg]]

![[Adjuntos/FA-Teo13/foto-4.jpg]]

![[Adjuntos/FA-Teo13/foto-5.jpg]]

![[Adjuntos/FA-Teo13/foto-6.jpg]]
