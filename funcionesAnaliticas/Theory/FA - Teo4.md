## Integración compleja

>[!Definition] Curva
>$\gamma:[a,b]\to\mathbb{C}$ continua es una **curva**. Si además $t_0\in[a,b]$ y $\exists\gamma'(t_0)$, decimos que $\gamma$ es diferenciable en $t_0$ (en los extremos miramos los límites laterales). $\gamma$ se dice **suave** si es diferenciable y con derivada continua.

>[!Definition] Curva de variación acotada
>$\gamma:[a,b]\to\mathbb{C}$ curva es de **variación acotada** si $\exists M>0$ tal que $\forall P=\{a=t_0<\dots<t_m=b\}$ partición de $[a,b]$ se cumple que $$\operatorname{Var}(P,\gamma):=\sum_{i=1}^{m}|\gamma(t_i)-\gamma(t_{i-1})|\leq M.$$ Si $\gamma$ es de variación acotada, definimos $$\operatorname{Var}(\gamma)=\sup_{P\text{ part.}}\operatorname{Var}(P,\gamma).$$

>[!Exercise] Variación acotada de una suma y de una función creciente
>- **(a)** Si $\gamma=\gamma_1+\gamma_2$, entonces $\gamma$ es de variación acotada si $\gamma_i$ lo es.
>- **(b)** Si $\gamma:[a,b]\to\mathbb{R}$ es creciente y de variación acotada, entonces $$\operatorname{Var}(\gamma)=\gamma(b)-\gamma(a).$$

>[!Definition] Integral de una función compleja de variable real
>Sea $f:[a,b]\to\mathbb{C}$ continua con $f(t)=u(t)+iv(t)$; definimos $$\int_a^b f(t)\,dt=\int_a^b u(t)\,dt+i\int_a^b v(t)\,dt.$$

>[!Proposition] Las curvas suaves por secciones son de variación acotada
>Sea $\gamma:[a,b]\to\mathbb{C}$ suave por secciones. Entonces $\gamma$ es de variación acotada y $$\operatorname{Var}(\gamma)=\int_a^b|\gamma'(t)|\,dt.$$
>>[!Proof]-
>>1. Basta probarlo para $\gamma$ suave en $[a,b]$.
>>2. Sea $$P=\{a=t_0<\dots<t_m=b\}$$ una partición de $[a,b]$. Entonces $$\operatorname{Var}(P,\gamma)=\sum_{i=1}^{m}|\gamma(t_i)-\gamma(t_{i-1})|=\sum_{i=1}^{m}\left|\int_{t_{i-1}}^{t_i}\gamma'(t)\,dt\right|\leq\sum_{i=1}^{m}\int_{t_{i-1}}^{t_i}|\gamma'(t)|\,dt=\int_a^b|\gamma'(t)|\,dt=:M.$$
>>3. Por lo tanto $\gamma$ es de variación acotada y, tomando supremo en (2), $$\operatorname{Var}(\gamma)\leq\int_a^b|\gamma'(t)|\,dt.$$
>>4. Como $\gamma'$ es continua en el cerrado $[a,b]$, $\gamma'$ es uniformemente continua en $[a,b]$: dado $\varepsilon>0$, existe $\delta_1>0$ tal que $$|s-t|<\delta_1\implies|\gamma'(s)-\gamma'(t)|<\varepsilon.$$
>>5. Por la definición de integral, existe $\delta_2>0$ y una partición $P=\{a=t_0<\dots<t_m=b\}$ con $\|P\|<\delta_2$ tal que $$\left|\int_a^b|\gamma'(t)|\,dt-\sum_{i=1}^{m}|\gamma'(\xi_i)|(t_i-t_{i-1})\right|<\varepsilon.$$
>>6. Sea $P$ la partición con $\|P\|<\delta=\min\{\delta_1,\delta_2\}$. Entonces $$\int_a^b|\gamma'(t)|\,dt<\varepsilon+\sum_{i=1}^{m}|\gamma'(\xi_i)|(t_i-t_{i-1})=\varepsilon+\sum_{i=1}^{m}\left[\int_{t_{i-1}}^{t_i}|\gamma'(\xi_i)-\gamma'(t)|\,dt+\left|\int_{t_{i-1}}^{t_i}\gamma'(t)\,dt\right|\right].$$
>>7. Por la continuidad uniforme de $\gamma'$ (paso 4) cada uno de los primeros sumandos cumple $$\int_{t_{i-1}}^{t_i}|\gamma'(\xi_i)-\gamma'(t)|\,dt<\varepsilon(t_i-t_{i-1}),$$ y por Barrow $$\left|\int_{t_{i-1}}^{t_i}\gamma'(t)\,dt\right|=|\gamma(t_i)-\gamma(t_{i-1})|.$$ Por lo tanto $$\int_a^b|\gamma'(t)|\,dt<\varepsilon+\varepsilon(b-a)+\sum_{i=1}^{m}|\gamma(t_i)-\gamma(t_{i-1})|=\varepsilon(1+b-a)+\operatorname{Var}(P,\gamma).$$
>>8. Como esto vale $\forall\varepsilon>0$, resulta $$\int_a^b|\gamma'(t)|\,dt\leq\operatorname{Var}(P,\gamma)\leq\operatorname{Var}(\gamma).$$
>>9. De (3) y (8) concluimos $$\operatorname{Var}(\gamma)=\int_a^b|\gamma'(t)|\,dt.$$

>[!Theorem] Existencia de la integral de Riemann–Stieltjes
>Sea $\gamma:[a,b]\to\mathbb{C}$ de variación acotada y $f:[a,b]\to\mathbb{C}$ continua. Entonces existe $I\in\mathbb{C}$ tal que $\forall\varepsilon>0$, $\exists\delta>0$ tal que si $P=\{a=t_0<\dots<t_m=b\}$ es una partición de $[a,b]$ con $\|P\|<\delta$, entonces $$\left|I-\sum_{k=1}^{m}f(\tau_k)(\gamma(t_k)-\gamma(t_{k-1}))\right|<\varepsilon$$ para cualquier $\tau_k\in[t_{k-1},t_k]$.
>>[!Proof]-
>>1. Como $f$ es continua en $[a,b]$, $f$ es uniformemente continua en $[a,b]$.
>>2. Para cada $m\in\mathbb{N}$ tomamos $\varepsilon=1/m$: existe $\delta_m>0$, con $\delta_m\geq\delta_{m+1}$, tal que $$|s-t|<\delta_m\implies|f(s)-f(t)|<\frac{1}{m}.\qquad (\star)$$
>>3. Sea $$P_m=\{P\text{ partición de }[a,b]:\|P\|<\delta_m\}.$$ Por $(\star)$ tenemos que $P_{m+1}\subseteq P_m$.
>>4. Sea $$\mathcal{F}_m=\left\{\sum_{k=1}^{n}f(\tau_k)[\gamma(t_k)-\gamma(t_{k-1})]:P\in P_m\ y\ \tau_k\in[t_{k-1},t_k]\right\}.$$ Así, $\mathcal{F}_{m+1}\subseteq\mathcal{F}_m$ y la familia $\{\mathcal{F}_m\}$ tiene la propiedad de intersección finita.
>>5. Veamos que $\forall m$ existe $R$ tal que $\mathcal{F}_m\subseteq\overline{B(0,R)}$. Sean $m\in\mathbb{N}$ y $z=\sum_{k=1}^{n}f(\tau_k)[\gamma(t_k)-\gamma(t_{k-1})]\in\mathcal{F}_m$, y sea $$M=\sup\{|f(t)|:t\in[a,b]\}.$$ Entonces $$|z|\leq\sum_{k=1}^{n}|f(\tau_k)|\,|\gamma(t_k)-\gamma(t_{k-1})|\leq M\sum_{k=1}^{n}|\gamma(t_k)-\gamma(t_{k-1})|\leq M\operatorname{Var}(\gamma)=R.$$
>>6. Por lo tanto $\mathcal{F}_m\subseteq\overline{B(0,R)}$ (compacto) y $\{\mathcal{F}_m\}$ tiene la propiedad de intersección finita, de modo que $$\bigcap_{m=1}^{\infty}\mathcal{F}_m\neq\emptyset.$$
>>7. Supongamos por un momento que $$\operatorname{diam}(\mathcal{F}_m)\leq\frac{2}{m}\operatorname{Var}(\gamma).\qquad (\star\star)$$
>>8. Sea $I\in\bigcap_{m=1}^{\infty}\mathcal{F}_m$ y sea $\varepsilon>0$. Tomamos $m$ con $\frac{2}{m}\operatorname{Var}(\gamma)<\varepsilon$ y $\delta=\delta_m$. Si $P=\{a=t_0<\dots<t_m=b\}$ es una partición de $[a,b]$ con $\|P\|<\delta$, entonces $I\in\mathcal{F}_m$ y $\sum_{k=1}^{m}f(\tau_k)(\gamma(t_k)-\gamma(t_{k-1}))\in\mathcal{F}_m$, luego $$\left|I-\sum_{k=1}^{m}f(\tau_k)(\gamma(t_k)-\gamma(t_{k-1}))\right|\leq\operatorname{diam}\mathcal{F}_m<\frac{2}{m}\operatorname{Var}(\gamma)<\varepsilon.$$
>>9. Notemos que $I$ es único (Ejercicio fácil).
>>10. Falta ver $(\star\star)$: $$\operatorname{diam}\mathcal{F}_m=\sup\{|z-z'|:z,z'\in\mathcal{F}_m\}<\frac{2}{m}\operatorname{Var}(\gamma).$$ Fijamos $m\geq1$ y llamamos $$z(P)=\sum_{k=1}^{n}f(\tau_k)(\gamma(t_k)-\gamma(t_{k-1})),\qquad P=\{a=t_0<\dots<t_n=b\}\in P_m,$$ y sea $Q\in P_m$ otra partición. Veamos que $$|z(P)-z(Q)|<\frac{2}{m}\operatorname{Var}(\gamma).$$
>>11. **Caso 1: $Q=P\cup\{t^*\}$ con $t^*\in(t_{p-1},t_p)$.** Entonces $$z(P)=\sum_{k\neq p}f(\tau_k)(\gamma(t_k)-\gamma(t_{k-1}))+f(\tau_p)(\gamma(t_p)-\gamma(t_{p-1})),$$ y $$z(Q)=\sum_{k\neq p}f(\sigma_k)(\gamma(t_k)-\gamma(t_{k-1}))+f(\sigma')(\gamma(t^*)-\gamma(t_{p-1}))+f(\sigma'')(\gamma(t_p)-\gamma(t^*)).$$ Restando, $$\begin{aligned}z(Q)-z(P)&=f(\sigma')(\gamma(t^*)-\gamma(t_{p-1}))+f(\sigma'')(\gamma(t_p)-\gamma(t^*))-f(\tau_p)(\gamma(t_p)-\gamma(t_{p-1}))\\&\quad+\sum_{k\neq p}[f(\sigma_k)-f(\tau_k)](\gamma(t_k)-\gamma(t_{k-1}))+f(\tau_p)\gamma(t^*)-f(\tau_p)\gamma(t^*)\\&=(f(\tau_p)-f(\sigma''))\gamma(t^*)+(f(\tau_p)-f(\sigma'))\gamma(t_{p-1})+(f(\sigma'')-f(\tau_p))\gamma(t_p)+(f(\sigma')-f(\tau_p))\gamma(t^*)+\sum_{k\neq p}[f(\sigma_k)-f(\tau_k)](\gamma(t_k)-\gamma(t_{k-1})).\end{aligned}$$ Luego $$\begin{aligned}|z(Q)-z(P)|&\leq|f(\tau_p)-f(\sigma'')|\,|\gamma(t^*)-\gamma(t_p)|+|f(\sigma')-f(\tau_p)|\,|\gamma(t^*)-\gamma(t_{p-1})|\\&\quad+\sum_{k\neq p}|f(\sigma_k)-f(\tau_k)|\,|\gamma(t_k)-\gamma(t_{k-1})|.\end{aligned}$$ Como $P,Q\in P_m$, todos los puntos involucrados distan menos de $\delta_m$, de modo que cada factor $|f(\cdot)-f(\cdot)|$ es $<1/m$; por lo tanto $$|z(Q)-z(P)|\leq\frac{1}{m}\left(|\gamma(t^*)-\gamma(t_p)|+|\gamma(t^*)-\gamma(t_{p-1})|+\sum_{k\neq p}|\gamma(t_k)-\gamma(t_{k-1})|\right)=\frac{1}{m}\operatorname{Var}(\gamma,Q)\leq\frac{1}{m}\operatorname{Var}(\gamma)<\frac{2}{m}\operatorname{Var}(\gamma).$$
>>12. Notemos que si $Q$ es tal que le agregamos a $P$ una cantidad finita de puntos, vale la desigualdad anterior.
>>13. **Caso 2: $P,Q\in P_m$ y $R=P\cup Q$.** Entonces $$|z(P)-z(Q)|\leq|z(P)-z(R)|+|z(Q)-z(R)|<\frac{\operatorname{Var}(\gamma)}{m}+\frac{\operatorname{Var}(\gamma)}{m}=\frac{2\operatorname{Var}(\gamma)}{m}.$$ Así queda probado $(\star\star)$ y, con el paso 8, el teorema.

>[!Definition] Notación: integral de Riemann–Stieltjes
>Al número $I$ del teorema anterior lo denotamos $$I:=\int_a^b f\,d\gamma.$$

>[!Remark]
>Si $\gamma(t)=t$, entonces $$\int_a^b f\,d\gamma=\int_a^b f\,dt.$$

>[!Proposition] Propiedades de la integral de Riemann–Stieltjes
>Sean $f,g:[a,b]\to\mathbb{C}$ continuas y $\gamma,\tau:[a,b]\to\mathbb{C}$ de variación acotada.
>- **(a)** Si $\alpha,\beta\in\mathbb{C}$, entonces $$\int_a^b(\alpha f+\beta g)\,d\gamma=\alpha\int_a^b f\,d\gamma+\beta\int_a^b g\,d\gamma.$$
>- **(b)** Si $(\alpha\gamma+\beta\tau)(t)=\alpha\gamma(t)+\beta\tau(t)$, entonces $$\int_a^b f\,d(\alpha\gamma+\beta\tau)=\alpha\int_a^b f\,d\gamma+\beta\int_a^b f\,d\tau.$$
>- **(c)** Si $P=\{a=t_0<\dots<t_n=b\}$ es una partición de $[a,b]$, entonces $$\int_a^b f\,d\gamma=\sum_{k=1}^{n}\int_{t_{k-1}}^{t_k} f\,d\gamma.$$

>[!Theorem] La integral de Riemann–Stieltjes como integral de Riemann
>Si $\gamma:[a,b]\to\mathbb{C}$ es suave por secciones y $f:[a,b]\to\mathbb{C}$ es continua, entonces $$\int_a^b f\,d\gamma=\int_a^b f(t)\gamma'(t)\,dt.$$
>>[!Proof]-
>>1. Por aditividad, basta probarlo para $\gamma$ suave en $[a,b]$.
>>2. Escribiendo $\gamma'(t)=\operatorname{Re}\gamma'(t)+i\operatorname{Im}\gamma'(t)$ se tiene $$\int_a^b f\,d\gamma=\int_a^b f\,d(\operatorname{Re}\gamma)+i\int_a^b f\,d(\operatorname{Im}\gamma),$$ así que podemos suponer que $\gamma'([a,b])\subseteq\mathbb{R}$.
>>3. Por el teorema de existencia, dado $\varepsilon>0$ existe $\delta_1>0$ tal que si $P=\{a=t_0<\dots<t_m=b\}$ es una partición con $\|P\|<\delta_1$, entonces $$\left|\int_a^b f\,d\gamma-\sum_{k=1}^{m}f(\tau_k)(\gamma(t_k)-\gamma(t_{k-1}))\right|<\frac{\varepsilon}{2}\quad\forall\tau_k\in[t_{k-1},t_k].$$
>>4. Por otra parte, existe $\delta_2>0$ tal que si $P$ es una partición de $[a,b]$ con $\|P\|<\delta_2$, entonces $$\left|\int_a^b f(t)\gamma'(t)\,dt-\sum_{k=1}^{m}f(\tau_k)\gamma'(\tau_k)(t_k-t_{k-1})\right|<\frac{\varepsilon}{2},$$ con $\tau_k\in[t_{k-1},t_k]$.
>>5. Por el teorema del valor medio, para cada $k$ existe $\xi_k\in[t_{k-1},t_k]$ tal que $$\gamma(t_k)-\gamma(t_{k-1})=\gamma'(\xi_k)(t_k-t_{k-1}).$$
>>6. Sea $\delta=\min\{\delta_1,\delta_2\}$ y sea $P$ una partición de $[a,b]$ con $\|P\|<\delta$; en (3) y en (4) elegimos $\tau_k=\xi_k$, con lo cual las dos sumas coinciden. Entonces $$\left|\int_a^b f\,d\gamma-\int_a^b f(t)\gamma'(t)\,dt\right|\leq\text{(3)}+\text{(4)}<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.$$

>[!Definition] Integral de línea
>Sea $\gamma:[a,b]\to\mathbb{C}$ una curva de variación acotada y sea $f:G\subseteq\mathbb{C}\to\mathbb{C}$, con $G$ abierto, tal que $\operatorname{Imagen}(\gamma)\subseteq G$ y $f\circ\gamma:[a,b]\to\mathbb{C}$ es continua. Definimos $$\int_\gamma f(z)\,dz:=\int_a^b(f\circ\gamma)\,d\gamma.$$ También escribimos $$\int_\gamma f\,d\gamma:=\int_\gamma f(z)\,dz,$$ la integral de línea definida a lo largo de $\gamma$. Si en particular $\gamma$ es suave a trozos, entonces $$\int_\gamma f\,d\gamma=\int_a^b(f\circ\gamma)(t)\gamma'(t)\,dt.$$

>[!Example]
>Sean $\gamma:[0,2\pi]\to\mathbb{C}$, $t\mapsto e^{it}$, y $f(z)=1/z$ con $z\neq0$. Entonces $$\int_\gamma\frac{1}{z}\,dz=i\int_0^{2\pi}\frac{1}{e^{it}}e^{it}\,dt=2\pi i.$$

>[!Definition] Cambio de parametrización
>Decimos que $\varphi:[c,d]\to[a,b]$ es un cambio de parametrización de $\gamma:[a,b]\to\mathbb{C}$ si $\varphi$ es continua, creciente, $\varphi(c)=a$ y $\varphi(d)=b$ (en particular, es sobreyectiva).

>[!Exercise] Cambios de parametrización y variación acotada
>$\gamma\circ\varphi:[c,d]\to\mathbb{C}$ es una curva (continua) de variación acotada y $$\operatorname{Var}(\gamma\circ\varphi)\leq\operatorname{Var}(\gamma),$$ con igualdad si $\varphi$ es estrictamente creciente.

>[!Proposition] Invariancia de la integral por cambios de parametrización
>Sea $\gamma:[a,b]\to\mathbb{C}$ una curva de variación acotada, $\varphi:[c,d]\to[a,b]$ un cambio de parametrización de $\gamma$ y $f:G\subseteq\mathbb{C}\to\mathbb{C}$ continua con $G$ abierto. Entonces $$\int_\gamma f(z)\,dz=\int_{\gamma\circ\varphi}f(z)\,dz.$$
>>[!Proof]-
>>Hacer el caso diferenciable.
>>1. Sea $\varepsilon>0$. Existe $\delta_1>0$ tal que si $P=\{c=s_0<\dots<s_n=d\}$ es una partición de $[c,d]$ con $\|P\|<\delta_1$, entonces $$\left|\int_{\gamma\circ\varphi}f(z)\,dz-\sum_{k=1}^{n}(f\circ\gamma\circ\varphi)(\tau_k)\big((\gamma\circ\varphi)(s_k)-(\gamma\circ\varphi)(s_{k-1})\big)\right|<\frac{\varepsilon}{2}.$$
>>2. También existe $\delta_2>0$ tal que si $P=\{a=t_0<\dots<t_m=b\}$ es una partición de $[a,b]$ con $\|P\|<\delta_2$, entonces $$\left|\int_\gamma f(z)\,dz-\sum_{k=1}^{m}(f\circ\gamma)(\tau_k)(\gamma(t_k)-\gamma(t_{k-1}))\right|<\frac{\varepsilon}{2}.$$
>>3. Como $\varphi$ es uniformemente continua en $[c,d]$, existe $\delta>0$ ($\delta<\delta_1$) tal que si $|s-s'|<\delta<\delta_1$ entonces $|\varphi(s)-\varphi(s')|<\delta_2$.
>>4. Elegimos una partición $P=\{c=s_0<\dots<s_n=d\}$ de $[c,d]$ con $\|P\|<\delta<\delta_1$, y definimos $t_k=\varphi(s_k)$, $\tau_k=\varphi(\tau_k)$. Así, $P'=\{a=t_0<\dots<t_n=b\}$ cumple $\|P'\|<\delta_2$ y $\tau_k\in[t_{k-1},t_k]$.
>>5. Entonces $$\begin{aligned}\left|\int_\gamma f(z)\,dz-\int_{\gamma\circ\varphi}f(z)\,dz\right|&\leq\left|\int_\gamma f(z)\,dz-\sum_{k=1}^{n}f(\gamma(\varphi(\tau_k)))(\gamma(\varphi(s_k))-\gamma(\varphi(s_{k-1})))\right|\\&\quad+\left|\int_{\gamma\circ\varphi}f(z)\,dz-\sum_{k=1}^{n}f(\gamma(\varphi(\tau_k)))(\gamma(\varphi(s_k))-\gamma(\varphi(s_{k-1})))\right|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.\end{aligned}$$
>>6. Como esta construcción vale $\forall\varepsilon>0$, resulta $\int_\gamma f=\int_{\gamma\circ\varphi}f$.

>[!Definition] Camino o traza
>Si $\gamma:[a,b]\to\mathbb{C}$ es una curva, $\operatorname{Imagen}(\gamma)\subseteq\mathbb{C}$ se llama el camino o la traza de $\gamma$.

>[!Definition] Curvas equivalentes
>Si $\sigma:[c,d]\to\mathbb{C}$ y $\gamma:[a,b]\to\mathbb{C}$ son curvas de variación acotada, decimos que $\sigma\sim\gamma$ si existe $\varphi:[c,d]\to[a,b]$ continua y estrictamente creciente, con $\varphi(c)=a$ y $\varphi(d)=b$, tal que $$\sigma=\gamma\circ\varphi.$$

>[!Exercise]
>$\sim$ es una relación de equivalencia.

>[!Remark]
>Así, una curva es la clase de equivalencia de las trazas o caminos (nueva definición).

>[!Definition] Curva rectificable
>$\gamma$ se dice rectificable si $\gamma$ es de variación acotada y continua.

>[!Definition] Función longitud de arco
>Sea $\gamma:[a,b]\to\mathbb{C}$ un camino rectificable y sea $t\in[a,b]$. Definimos $$|\gamma|(t):=\operatorname{Var}(\gamma|_{[a,t]}),$$ que es creciente (propiedad del supremo) y cumple $|\gamma|(t)\leq\operatorname{Var}(\gamma)$ para todo $t\in[a,b]$; por lo tanto $|\gamma|(t)$ es de variación acotada.

>[!Remark]
>Si $f$ es continua sobre $\gamma$, $f:G\subseteq\mathbb{C}\to\mathbb{C}$, tiene sentido $$\int_a^b f\circ\gamma\,d|\gamma|$$ (Riemann–Stieltjes). Así definimos $$\int_\gamma f(z)\,|dz|:=\int_a^b f\circ\gamma\,d|\gamma|.$$

>[!Remark]
>Supongamos $\gamma$ diferenciable (por secciones). Entonces $$|\gamma|(t)=\operatorname{Var}(\gamma|_{[a,t]})=\int_a^t|\gamma'(s)|\,ds\implies|\gamma|'(t)=|\gamma'(t)|.$$ Así, $$\int_\gamma f(z)\,|dz|=\int_a^b(f\circ\gamma)\,d|\gamma|=\int_a^b(f\circ\gamma)(t)(|\gamma|)'(t)\,dt=\int_a^b(f\circ\gamma)(t)|\gamma'(t)|\,dt.$$

>[!Proposition] Propiedades de la integral de línea
>Sea $\gamma:[a,b]\to\mathbb{C}$ una curva rectificable y $f$ una función continua sobre $\{\gamma\}=$ traza de $\gamma$. Llamamos $-\gamma:[-b,-a]\to\mathbb{C}$, $t\mapsto\gamma(-t)$. Entonces:
>- **(a)** $$\int_\gamma f(z)\,dz=-\int_{-\gamma}f(z)\,dz.$$
>- **(b)** $$\left|\int_\gamma f(z)\,dz\right|\leq\int_\gamma|f(z)|\,|dz|\leq\operatorname{Var}(\gamma)\cdot\sup_{z\in\{\gamma\}}|f(z)|.$$
>- **(c)** Dado $c\in\mathbb{C}$, si $(\gamma+c)(t):=\gamma(t)+c$, entonces $$\int_\gamma f(z)\,dz=\int_{\gamma+c}f(z-c)\,dz.$$
>- **(d)** $$\operatorname{Var}(\gamma)=\int_\gamma|dz|.$$
>>[!Proof]-
>>1. Ejercicio.

>[!Theorem] Regla de Barrow para integrales de línea
>Sea $G$ abierto en $\mathbb{C}$ y $\gamma:[a,b]\to\mathbb{C}$ una curva rectificable en $G$ con $\gamma(a)=\alpha$ y $\gamma(b)=\beta$. Si $f$ es continua en $G$ con primitiva $F$ (o sea $F'=f$), entonces $$\int_\gamma f(z)\,dz=F(\beta)-F(\alpha).$$
>>[!Proof]-
>>Sólo para $\gamma$ definida por secciones.
>>1. $$\int_\gamma f(z)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt=\int_a^b F'(\gamma(t))\gamma'(t)\,dt=\int_a^b(F\circ\gamma)'(t)\,dt.$$
>>2. Por Barrow, aplicado a la parte real y a la parte imaginaria, $$\int_a^b(F\circ\gamma)'(t)\,dt=F(\gamma(b))-F(\gamma(a))=F(\beta)-F(\alpha).$$

>[!Corollary] Integral sobre curvas cerradas
>Si $\gamma$ es cerrada, entonces $$\int_\gamma f=0.$$

>[!Example] En $\mathbb{C}$ no toda función continua tiene primitiva
>Si $f:[a,b]\to\mathbb{R}$, entonces $F(t)=\int_a^t f(s)\,ds$ es primitiva de $f$. En $\mathbb{C}$ esto no es cierto: sea $f(z)=|z|^2=x^2+y^2$. La función $f$ es continua y supongamos que existe $F$ tal que $F'=f$; entonces $F$ es analítica y $F=u+iv$ cumple Cauchy–Riemann ($u_x=v_y$, $u_y=-v_x$). Como $$F'(z)=f(z)=u_x(x,y)+iv_x(x,y)$$ y $f(z)\in\mathbb{R}$, resulta $v_x(x,y)=0$ y por lo tanto $u_y(x,y)=0$: ¡absurdo!

>[!Lemma] Paso al límite bajo la integral
>Sea $\gamma$ una curva rectificable en $\mathbb{C}$ y supongamos que $F_n$ y $F$ son funciones continuas sobre $\{\gamma\}=\operatorname{Imagen}(\gamma)$. Si $F_n\to F$ uniformemente sobre $\{\gamma\}$, entonces $$\int_\gamma F_n(z)\,dz\xrightarrow[n\to\infty]{}\int_\gamma F(z)\,dz.$$
>>[!Proof]-
>>1. Dado $\varepsilon>0$, existe $N$ tal que si $n\geq N$ se tiene que $$|F_n(z)-F(z)|<\frac{\varepsilon}{\operatorname{Var}(\gamma)}\quad\forall z\in\{\gamma\}.$$
>>2. Entonces $$\left|\int_\gamma F_n(z)-F(z)\,dz\right|\leq\int_\gamma|F_n(z)-F(z)|\,|dz|=\frac{\varepsilon}{\operatorname{Var}(\gamma)}\int_\gamma|dz|=\frac{\varepsilon}{\operatorname{Var}(\gamma)}\operatorname{Var}(\gamma)=\varepsilon.$$

>[!Lemma] Integral de la exponencial sobre la circunferencia unidad
>$$\int_0^{2\pi}\frac{e^{is}}{e^{is}-z}\,ds=2\pi\qquad\forall|z|<1.$$

>[!Theorem] Teorema de la integral de Cauchy (primera versión, local)
>Sea $f:G\to\mathbb{C}$ analítica con $G$ abierto y supongamos que existe $r$ tal que $\overline{B(a,r)}\subseteq G$; sea $\gamma(t)=a+re^{it}$ con $t\in[0,2\pi]$. Entonces $$f(z)=\frac{1}{2\pi i}\int_\gamma\frac{f(w)}{w-z}\,dw$$ para todo $z$ tal que $|z-a|<r$.
>>[!Proof]-
>>- **Caso 1: $a=0$ y $r=1$.**
>>	1. Queremos ver que $$f(z)=\frac{1}{2\pi i}\int_\gamma\frac{f(w)}{w-z}\,dw=\frac{1}{2\pi i}\int_0^{2\pi}\frac{f(e^{is})}{e^{is}-z}e^{is}\,ds\iff 0=\int_0^{2\pi}\left[\frac{f(e^{is})e^{is}}{e^{is}-z}-f(z)\right]ds.$$
>>	2. Sea $\varphi:[0,2\pi]\times[0,1]\to\mathbb{C}$ dada por $$\varphi(s,t)=\frac{f(z+t(e^{is}-z))e^{is}}{e^{is}-z}-f(z),\qquad|z|<1,$$ que es continua.
>>	3. Sea $$g(t)=\int_0^{2\pi}\left[\frac{f(z+t(e^{is}-z))e^{is}}{e^{is}-z}-f(z)\right]ds.$$ Notemos que $$g(1)=\int_0^{2\pi}\left[\frac{f(e^{is})e^{is}}{e^{is}-z}-f(z)\right]ds,$$ y que, por el lema anterior, $$g(0)=\int_0^{2\pi}\left[f(z)\frac{e^{is}}{e^{is}-z}-f(z)\right]ds=\int_0^{2\pi}f(z)\left(\frac{e^{is}}{e^{is}-z}-1\right)ds=0.$$
>>	4. Si $g$ es constante en $[0,1]$, tenemos lo que queremos ver. Por la regla de Leibniz, $$g'(t)=\int_0^{2\pi}f'(z+t(e^{is}-z))e^{is}\,ds.$$
>>	5. Sea $$F(s)=\frac{f(z+t(e^{is}-z))}{it},\qquad t\neq0;$$ entonces $$g'(t)=F(2\pi)-F(0)=0,$$ pues $e^{2\pi i}=e^{0}$. Así, $g$ es constante en $[0,1]$.
>>- **Caso 2: $\overline{B(a,r)}\subseteq G$ y $\gamma=a+re^{it}$ con $t\in[0,2\pi]$.**
>>	1. Sea $$G_1=\left\{w=\frac{z-a}{r}:z\in G\right\},\qquad T:G\to G_1,\quad z\mapsto\frac{z-a}{r}.$$ Entonces $$T(\overline{B(a,r)})=\overline{B(0,1)},\qquad T^{-1}(\overline{B(0,1)})=B(a,r).$$
>>	2. Definimos $$g:G_1\to\mathbb{C},\qquad w\mapsto f(wr+a).$$ Por el Caso 1, si $\tilde{w}\in G_1$ es tal que $|\tilde{w}|<1$, sabemos que $$\frac{1}{2\pi i}\int_{\gamma=e^{it}}\frac{g(w)}{w-\tilde{w}}\,dw=g(\tilde{w}).$$
>>	3. Observemos que si $\gamma=re^{it}$, entonces $$\int_{\partial B}h\left(\frac{w}{r}\right)dw=\int_0^{2\pi}h\left(\frac{re^{it}}{r}\right)ire^{it}\,dt=r\int_0^{2\pi}h(e^{it})ie^{it}\,dt=r\int_\gamma h(w)\,dw;$$ así, $$\frac{1}{r}\int_{\partial B_r}h\left(\frac{w}{r}\right)dw=\int_{\partial B_1}h(w)\,dw$$ para $h$ continua.
>>	4. Entonces $$\begin{aligned}\frac{1}{2\pi i}\int_{\gamma_1}\frac{g(w)}{w-\tilde{w}}\,dw&=\frac{1}{2\pi ir}\int_\gamma\frac{g(w/r)}{(w/r)-\tilde{w}}\,dw=\frac{1}{2\pi ir}\int_{\partial B(a,r)}\frac{g((w-a)/r)}{((w-a)/r)-\tilde{w}}\,dw\\&=\frac{1}{2\pi i}\int_{\partial B(a,r)}\frac{f(w)}{w-a-r\tilde{w}}\,dw=\frac{1}{2\pi i}\int_{\partial B(a,r)}\frac{f(w)}{w-(r\tilde{w}+a)}\,dw=g(\tilde{w})=f(r\tilde{w}+a).\end{aligned}$$
>>	5. Como $|\tilde{w}|<1$, se tiene $|z-a|=|r\tilde{w}+a-a|=r|\tilde{w}|<r$. Escribiendo $z=r\tilde{w}+a$, resulta $$f(z)=\frac{1}{2\pi i}\int_{\gamma_{a+r}}\frac{f(w)}{w-z}\,dw.$$

>[!Theorem] Fórmula de la cota de Cauchy
>Sea $f:G\to\mathbb{C}$ analítica y supongamos que $|f(w)|\leq M$ para todo $w\in B(a,R)$. Entonces $$|f^{(m)}(a)|\leq\frac{M\,m!}{R^{m}}\qquad\forall m\geq1.$$
>>[!Proof]-
>>1. Por el teorema de la integral de Cauchy, $$f^{(m)}(a)=\frac{m!}{2\pi i}\int_{\gamma=a+re^{it}}\frac{f(w)}{(w-a)^{m+1}}\,dw.$$
>>2. Entonces $$\begin{aligned}|f^{(m)}(a)|&=\left|\frac{m!}{2\pi i}\int_{\gamma=a+re^{it}}\frac{f(w)}{(w-a)^{m+1}}\,dw\right|\leq\frac{m!}{2\pi}\int_{\gamma=a+re^{it}}\frac{|f(w)|}{|(w-a)^{m+1}|}\,|dw|\\&\leq\frac{m!\,M}{2\pi r^{m+1}}\int_{\gamma=a+re^{it}}|dw|=\frac{m!\,M}{2\pi r^{m+1}}\operatorname{Var}(\gamma)=\frac{m!\,M}{r^{m}}\qquad\forall r<R.\end{aligned}$$
>>3. Por lo tanto, tomando límite, $$|f^{(m)}(a)|\leq\frac{M\,m!}{R^{m}}.$$

>[!Proposition]
>Si $f$ es analítica en $\overline{B(a,R)}$ y $\gamma$ es una curva cerrada rectificable en $B(a,R)$, entonces $$\int_\gamma f=0.$$
>>[!Proof]-
>>1. Veremos que si $f$ es analítica en $B(a,R)$, entonces $f$ tiene primitiva $F$ en $B(a,R)$.
>>2. Por hipótesis, $$f(z)=\sum_{m\geq0}a_m(z-a)^m\qquad\text{en }B(a,R).$$
>>3. Sea $$F(z)=\sum_{m\geq0}\frac{a_m}{m+1}(z-a)^{m+1},$$ que es primitiva de $f$ en $B(a,R)$.
>>4. Veamos su radio de convergencia (el de $F$): $$R'=\limsup\left(\frac{|a_m|}{m+1}\right)^{1/m}=\limsup\left(\frac{1}{m+1}\right)^{1/m}|a_m|^{1/m}\geq R.$$
>>5. Así, $F'(z)=f(z)$ para todo $z\in B(a,R)$; por el teorema de Barrow, $$\int_\gamma f=0.$$

>[!example]
>Por la fórmula de la integral de Cauchy, con $f(z)=e^z-e^{-z}$, $$\int_{\gamma=e^{it}}\frac{e^z-e^{-z}}{z^m}\,dz=\int_\gamma\frac{f(z)}{(z-0)^m}\,dz=\frac{2\pi i}{(m-1)!}f^{(m-1)}(0),,\qquad m\geq1.$$ y $$f^{(k)}(0)=\begin{cases}0,&k\text{ impar},\\2,&k\text{ par}.\end{cases}$$

## Ceros de funciones analíticas

>[!Definition] Cero de una función analítica
>Sea $f:G\to\mathbb{C}$ analítica y $a\in G$. Decimos que $a$ es un cero de $f$ si existe $g:G\to\mathbb{C}$ analítica tal que $g(a)\neq0$ y $$f(z)=(z-a)^m g(z)\qquad\forall z\in G.$$

>[!Definition] Función entera
>$f:\mathbb{C}\to\mathbb{C}$ analítica se dice entera.

>[!Proposition] Desarrollo de una función entera
>Si $f$ es entera, entonces $$f(z)=\sum_{m\geq0}a_m(z-a)^m$$ tiene radio de convergencia $R=\infty$.
>>[!Proof]-
>>1. Inmediato.

>[!Theorem] Liouville
>Si $f$ es entera y acotada, entonces $f$ es constante.
>>[!Proof]-
>>1. Sean $r>0$ y $z\in\mathbb{C}$, y consideremos $B(z,r)$. Por el teorema de la cota de Cauchy, $$|f'(z)|\leq\frac{M}{r}\xrightarrow[r\to\infty]{}0.$$
>>2. Por lo tanto $f'=0$ y $f$ es constante.

>[!Theorem] Teorema fundamental del álgebra
>Si $p\in\mathbb{C}[z]$ no es constante, entonces existe $a\in\mathbb{C}$ tal que $p(a)=0$.
>>[!Proof]-
>>1. Observemos que, como $p$ no es constante, $$\lim_{z\to\infty}p(z)=\infty$$ (por el teorema de Liouville).
>>2. Supongamos que para todo $a\in\mathbb{C}$ vale $p(a)\neq0$, y sea $$f(z)=\frac{1}{p(z)},$$ que es entera.
>>3. Ahora, $\lim_{z\to\infty}f(z)=0$; luego, dado $M=1$, existe $R>0$ tal que si $|z|>R$ entonces $|f(z)|<1$.
>>4. Así, $f$ es acotada y entera, por lo que es constante; entonces $p$ es constante, ¡absurdo!
>>5. Conclusión: existe $a$ tal que $p(a)=0$.

>[!Corollary]
>Todo polinomio no constante se descompone como producto de factores lineales.

>[!Remark]
>Si $p$ no es constante, entonces $p$ es sobreyectiva: dado $a\in\mathbb{C}$, el polinomio $\tilde{p}(z)=p(z)-a$ tiene un cero. Esto no es cierto para funciones enteras en general.
