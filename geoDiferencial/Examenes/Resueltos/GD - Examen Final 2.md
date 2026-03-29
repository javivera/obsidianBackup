# Examen de Geometría Diferencial - 15 de diciembre de 2025

## Parte práctica

> [!Example] Ejercicio 1 (12 p.)
> Sean $z$ y $w$ dos puntos en $\mathbb{R}^2$. ¿Qué transformación rígida del plano se obtiene si se compone la rotación en $180^\circ$ alrededor de $z$ con la rotación en $180^\circ$ alrededor de $w$?
>>[!Proof]-
>

> [!Example] Ejercicio 2 (12 p.)
> Sea $S^2$ la esfera de $\mathbb{R}^3$ de radio 1 centrada en el origen. Sea $D = \{(x, z) \in \mathbb{R}^2 \mid x^2 + z^2 < 1\}$ y sea
> $$\phi_2^+ : D \to S^2, \quad \phi_2^+(x, z) = (x, \sqrt{1 - x^2 - z^2}, z)$$
> el sistema coordenado usual con imagen el casquete $\{(x, y, z) \in S^2 \mid y > 0\}$.
> Sea $C = (0, \pi) \times (-1, 1)$. Dar por sabido que
> $$\psi : C \to S^2, \quad \psi(u, v) = (\sqrt{1 - v^2} \cos u, \sqrt{1 - v^2} \sin u, v)$$
> es un sistema coordenado con la misma imagen que $\phi_2^+$. Hallar el cambio de coordenadas $\psi^{-1} \circ \phi_2^+ : D \to C$.
>>[!Proof]-
>>Sea $(x,z)\in D$ y escribamos
>>$$\psi(u,v)=\phi_2^+(x,z).$$
>>Igualando coordenadas:
>>$$\sqrt{1-v^2}\cos u=x,\qquad \sqrt{1-v^2}\sin u=\sqrt{1-x^2-z^2},\qquad v=z.$$
>>De la tercera ecuación:
>>$$v=z.$$
>>Entonces $\sqrt{1-v^2}=\sqrt{1-z^2}$, y de la primera:
>>$$\cos u=\frac{x}{\sqrt{1-z^2}}.$$
>>Como $(x,z)\in D$, se cumple $x^2+z^2<1\Rightarrow |x|<\sqrt{1-z^2}$, luego
>>$$\frac{x}{\sqrt{1-z^2}}\in(-1,1),$$
>>y por tanto
>>$$u=\arccos\!\left(\frac{x}{\sqrt{1-z^2}}\right)\in(0,\pi).$$
>>Así, el cambio de coordenadas es
>>$$
>>(\psi^{-1}\circ\phi_2^+)(x,z)
>>=
>>\left(\arccos\!\left(\frac{x}{\sqrt{1-z^2}}\right),\,z\right),
>>\qquad (x,z)\in D.
>>$$

> [!Example] Ejercicio 3
> Sea $\varphi : \mathbb{R} \times (0, \infty) \to \mathbb{R}^3$ dada por $\varphi(u, v) = (v \cos u, v \sin u, \log v)$. Dar por sabido que $M$, la imagen de $\varphi$, es una superficie regular.
> - **(a)** (5 p.) Mostrar que $\varphi$ es una parametrización.
> - **(b)** (12 p.) Calcular las curvaturas media y gaussiana de $M$ en el punto $p = (1, 0, 0)$, y encontrar dos direcciones asintóticas no colineales en $T_pM$.
> - **(c)** (7 p.) Mostrar que si una geodésica $\gamma$ de $M$ de rapidez unitaria corta al paralelo a altura 1 con ángulo de $\pi/6$, entonces la imagen de $\gamma$ está contenida en el semiespacio superior. Sugerencia: Teorema de Clairaut.
>>[!Proof]-
>>**(a)**  
>>1. $\varphi$ es suave y $$\varphi_u=(-v\sin u,\;v\cos u,\;0),\qquad\varphi_v=(\cos u,\;\sin u,\;1/v)$$
>>2. Además,$$\varphi_u\times\varphi_v=(\cos u,\sin u,-v),\qquad \|\varphi_u\times\varphi_v\|=\sqrt{1+v^2}>0$$para todo $(u,v)\in\mathbb R\times(0,\infty)$. Luego $d\varphi_{(u,v)}$ tiene rango 2 en todo punto, y $\varphi$ es una parametrización regular de $M$.
>>- **(b)**
>>1. El punto $p=(1,0,0)$ corresponde a $(u,v)=(0,1)$ (por ejemplo).
>>2. Tomamos el normal unitario $$N=\frac{\varphi_u\times\varphi_v}{\|\varphi_u\times\varphi_v\|}=\frac{(\cos u,\sin u,-v)}{\sqrt{1+v^2}}.$$
>>3. Entonces $$N_u=\frac{(-\sin u,\cos u,0)}{\sqrt{1+v^2}},\qquad N_v=\frac{(-v\cos u,-v\sin u,-1)}{(1+v^2)^{3/2}}.$$
>>4. En $(u,v)=(0,1)$: $$\varphi_u(0,1)=(0,1,0),\qquad \varphi_v(0,1)=(1,0,1),$$$$N_u(0,1)=\frac{(0,1,0)}{\sqrt2} =\frac1{\sqrt2}\,\varphi_u(0,1)+0\,\varphi_v(0,1),$$$$ N_v(0,1)=\frac{(-1,0,-1)}{2\sqrt2}=0\,\varphi_u(0,1)-\frac1{2\sqrt2}\,\varphi_v(0,1). $$
>>5. Por lo tanto, la matriz de $dN_p$ en la base $\{\varphi_u(0,1),\varphi_v(0,1)\}$ es $$[dN_p]=\begin{pmatrix} \frac1{\sqrt2} & 0\\ 0 & -\frac1{2\sqrt2}\end{pmatrix}.$$
>>6. El operador de Weingarten es $S_p=-dN_p$, luego sus autovalores (curvaturas principales) son $$k_1=-\frac1{\sqrt2},\qquad k_2=\frac1{2\sqrt2}.$$
>>7. ntonces $$K(p)=k_1k_2=-\frac14,\qquad H(p)=\frac{k_1+k_2}{2}=-\frac1{4\sqrt2}.$$(Si se cambia la orientación de $N$, cambia el signo de $H$.)
>>8. Para direcciones asintóticas, tomamos $$w=a\,\varphi_u(0,1)+b\,\varphi_v(0,1).$$
>>9. En esta base: $$dN_p(\varphi_u)=\frac1{\sqrt2}\varphi_u,\qquad dN_p(\varphi_v)=-\frac1{2\sqrt2}\varphi_v.$$Entonces $$dN_p(w)=\frac{a}{\sqrt2}\varphi_u-\frac{b}{2\sqrt2}\varphi_v.$$
>>10. Además, en $p$: $$\langle\varphi_u,\varphi_u\rangle=1,\qquad \langle\varphi_u,\varphi_v\rangle=0,\qquad\langle\varphi_v,\varphi_v\rangle=2.$$ $$\begin{aligned} \langle dN_p(w),w\rangle &=\Big\langle \frac{a}{\sqrt2}\varphi_u-\frac{b}{2\sqrt2}\varphi_v,\ a\varphi_u+b\varphi_v\Big\rangle\\ &=\frac{a^2}{\sqrt2}\langle\varphi_u,\varphi_u\rangle +\frac{ab}{\sqrt2}\langle\varphi_u,\varphi_v\rangle -\frac{ab}{2\sqrt2}\langle\varphi_v,\varphi_u\rangle -\frac{b^2}{2\sqrt2}\langle\varphi_v,\varphi_v\rangle\\ &=\frac{a^2}{\sqrt2}-\frac{b^2}{2\sqrt2}\cdot 2 =\frac{a^2-b^2}{\sqrt2}. \end{aligned} $$
>>11. Como $A_p=-dN_p$, también $$\langle A_p(w),w\rangle=-\frac{a^2-b^2}{\sqrt2}=\frac{-a^2+b^2}{\sqrt2}$$
>>12. Una dirección es asintótica si (equivalentemente) $\langle A_p(w),w\rangle=0$, y por tanto$$b=\pm a.$$
>>13. Finalmente tomando $b=1$ por lo tanto $a=\pm 1$ y escribiendo en base adecuada tenemos que dos direcciones asintóticas no colineales son $$\varphi_u(0,1)+\varphi_v(0,1),\qquad \varphi_u(0,1)-\varphi_v(0,1)$$
>>- **(c)**
>>1. La superficie es de revolución con radio $r=v$. Para una geodésica unitaria $\gamma(s)$, por Clairaut: $$r(s)\cos\theta(s)=\text{cte} $$donde $\theta(s)$ es el ángulo con el paralelo.
>>Si $\gamma$ corta el paralelo de altura $1$, entonces en ese punto $z=\log v=1$, o sea $v=e$, y el ángulo con el paralelo es $\pi/6$. Por tanto
>>$$
>>\text{cte}=e\cos(\pi/6)=\frac{\sqrt3}{2}\,e.
>>$$
>>En todo punto de la geodésica $\gamma(s)$:
>>$$
>>v(s)\cos\theta(s)=\frac{\sqrt3}{2}\,e.
>>$$
>>Como $\cos\theta(s)\le 1$, se obtiene
>>$$
>>v(s)\ge \frac{\sqrt3}{2}\,e>1.
>>$$
>>Luego
>>$$
>>z(s)=\log v(s)\ge \log\!\Big(\frac{\sqrt3}{2}e\Big)>0.
>>$$
>>Así, la imagen de $\gamma$ queda contenida en el semiespacio superior $\{(x,y,z)\in\mathbb R^3:\ z>0\}$.

> [!Example] Ejercicio 4 (12 p.)
> Sea $\epsilon > 0$ y sea $\phi : \mathbb{R}^2 \to \mathbb{R}^3$ dada por
> $$\phi(s, t) = \left( \cos\left(\frac{s-t}{\sqrt{2}}\right), \sin\left(\frac{s-t}{\sqrt{2}}\right), \frac{s+t}{\sqrt{2}} \right).$$
> Sea $P$ el plano $\{(s, t, 0) \mid s, t \in \mathbb{R}\}$. Dando por sabido que $\phi$ es una parametrización del cilindro $M = \{(x, y, z) \mid x^2 + y^2 = 1\}$, mostrar que $\Phi : P \to M, \Phi(s, t, 0) = \phi(s, t)$, es una isometría local.
>>[!Proof]-
>>Tomamos una parametrización del plano
>>$$
>>\psi:\mathbb R^2\to P,\qquad \psi(s,t)=(s,t,0).
>>$$
>>Para $\psi$:
>>$$
>>\psi_s=(1,0,0),\qquad \psi_t=(0,1,0),
>>$$
>>$$
>>E_\psi=\langle\psi_s,\psi_s\rangle=1,\qquad
>>F_\psi=\langle\psi_s,\psi_t\rangle=0,\qquad
>>G_\psi=\langle\psi_t,\psi_t\rangle=1.
>>$$
>>Para $\phi$, si $\theta=\frac{s-t}{\sqrt2}$:
>>$$
>>\phi_s=\left(-\frac{\sin\theta}{\sqrt2},\frac{\cos\theta}{\sqrt2},\frac1{\sqrt2}\right),\qquad
>>\phi_t=\left(\frac{\sin\theta}{\sqrt2},-\frac{\cos\theta}{\sqrt2},\frac1{\sqrt2}\right),
>>$$
>>$$
>>E_\phi=\langle\phi_s,\phi_s\rangle
>>=\frac{\sin^2\theta+\cos^2\theta+1}{2}=1,
>>$$
>>$$
>>F_\phi=\langle\phi_s,\phi_t\rangle
>>=\frac{-\sin^2\theta-\cos^2\theta+1}{2}=0,
>>$$
>>$$
>>G_\phi=\langle\phi_t,\phi_t\rangle
>>=\frac{\sin^2\theta+\cos^2\theta+1}{2}=1.
>>$$
>>Entonces
>>$$
>>(E_\psi,F_\psi,G_\psi)=(1,0,1)=(E_\phi,F_\phi,G_\phi).
>>$$
>>Es decir, los dos sistemas coordenados tienen la misma primera forma fundamental. Como
>>$$
>>\Phi=\phi\circ\psi^{-1},
>>$$
>>se concluye que $\Phi:P\to M$ es una **isometría local**.

## Parte teórica

> [!Example] Ejercicio 1 (11 p.)
> Sea $\alpha : (a, b) \to \mathbb{R}^3$ una curva de rapidez unitaria. Definir la función curvatura de $\alpha$. Para el caso en que $\alpha''(t) \neq 0$ para todo $t \in (a, b)$, definir la torsión de $\alpha$ y el triedro de Frenet de $\alpha$. Escribir además las relaciones de Frenet (es decir, escribir la relación entre los elementos del triedro y sus derivadas) y demostrar su validez.
>>[!Proof]-
>>1. Como $\alpha$ es de rapidez unitaria, $\|\alpha'(t)\|=1$. Definimos
>>$$
>>T(t):=\alpha'(t).
>>$$
>>2. Definición de curvatura (para rapidez unitaria):
>>$$
>>\kappa(t):=\|T'(t)\|=\|\alpha''(t)\|.
>>$$
>>3. Si $\alpha''(t)\neq 0$ para todo $t$, entonces $\kappa(t)>0$ y está bien definido el normal principal
>>$$
>>N(t):=\frac{T'(t)}{\|T'(t)\|}.
>>$$
>>4. Definimos el binormal
>>$$
>>B(t):=T(t)\times N(t).
>>$$
>>El triedro de Frenet es $(T,N,B)$.
>>5. Definimos la torsión por
>>$$
>>\tau(t):=\langle N'(t),B(t)\rangle.
>>$$
>>Como $\frac{d}{dt}\langle N,B\rangle=0$, se tiene
>>$$
>>\langle N',B\rangle+\langle N,B'\rangle=0
>>\ \Longrightarrow\ 
>>\tau(t)=-\langle B'(t),N(t)\rangle.
>>$$
>>(También: $\displaystyle \tau=\frac{\det(\alpha',\alpha'',\alpha''')}{\|\alpha'\times\alpha''\|^2}$.)
>>6. Primera ecuación de Frenet: por definición de $N$,
>>$$
>>T'=\|T'\|\,N=\kappa N.
>>$$
>>7. Para $N'$: de $\langle N,N\rangle=1$ se obtiene $\langle N',N\rangle=0$, luego
>>$$
>>N'=aT+bB.
>>$$
>>8. Hallamos $a$ derivando $\langle N,T\rangle=0$:
>>$$
>>0=\frac{d}{dt}\langle N,T\rangle
>>=\langle N',T\rangle+\langle N,T'\rangle
>>=a+\kappa.
>>$$
>>Entonces $a=-\kappa$.
>>9. Hallamos $b$ por definición de torsión:
>>$$
>>b=\langle N',B\rangle=\tau.
>>$$
>>Por tanto
>>$$
>>N'=-\kappa T+\tau B.
>>$$
>>10. Para $B'$, usamos $B=T\times N$:
>>$$
>>B'=T'\times N+T\times N'
>>=(\kappa N)\times N+T\times(-\kappa T+\tau B)
>>=\tau\,(T\times B).
>>$$
>>11. Como $B=T\times N$, se tiene
>>$$
>>T\times B=T\times(T\times N)=-N.
>>$$
>>Luego
>>$$
>>B'=-\tau N.
>>$$
>>12. Concluimos las relaciones de Frenet:
>>$$
>>T'=\kappa N,\qquad
>>N'=-\kappa T+\tau B,\qquad
>>B'=-\tau N.
>>$$

> [!Example] Ejercicio 2 (11 p.)
> Sea $S$ una superficie regular y sea $p \in S$. Escribir la definición de $T_pS$ y probar que si $\varphi : U \to S$ es un sistema coordenado de $S$ y $p = \varphi(q)$, entonces $T_pS$ es la imagen de la transformación lineal $d\varphi_q : \mathbb{R}^2 \to \mathbb{R}^3$.
>>[!Proof]-

> [!Example] Ejercicio 3 (9 p.)
> - **(a)** Sean $M$ y $N$ dos superficies regulares y sea $f : M \to N$ una función suave. Escribir la definición de que $f$ sea una isometría local.
> - **(b)** Probar que si una función suave $f : M \to N$ entre dos superficies regulares es una isometría local, entonces $df_p : T_pM \to T_{f(p)}N$ es una isometría lineal para todo $p \in M$. Mostrar que en particular las isometrías locales son difeomorfismos locales.
>>[!Proof]-

> [!Example] Ejercicio 4 (9 p.)
> Sea $\alpha$ una curva de rapidez unitaria en una superficie regular $M$. Definir la noción de campo en $M$ a lo largo de $\alpha$ y definir campo paralelo a lo largo de $\alpha$. Mostrar que un campo paralelo en $M$ a lo largo de una curva de rapidez unitaria tiene norma constante.
>>[!Proof]-
>>