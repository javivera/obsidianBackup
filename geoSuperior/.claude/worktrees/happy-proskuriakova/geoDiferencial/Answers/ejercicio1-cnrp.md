Pregunta:
Sea $\alpha:(a,b)\to\mathbb R^3$ una curva suave de rapidez unitaria y curvatura nunca nula, con aparato de Frenet $\{T,N,B\}$. Una función suave $v:(a,b)\to\mathbb R^3$ con $\|v(t)\|=1$ para todo $t$ se llama campo normal relativamente paralelo (c.n.r.p.) a lo largo de $\alpha$ si $\langle v(t),\alpha'(t)\rangle=0$ y $v'(t)=\lambda(t)\,\alpha'(t)$ para todo $t$, para cierta función $\lambda:(a,b)\to\mathbb R$. Suponiendo que
$v(t)=\cos(\theta(t))\,N(t)+\sin(\theta(t))\,B(t)$
para cierta función $\theta:(a,b)\to\mathbb R$, encontrar condiciones sobre $\theta'$ en términos de la curvatura y la torsión de $\alpha$ para que $v$ sea un c.n.r.p. a lo largo de $\alpha$.

Respuesta:
Usamos las ecuaciones de Frenet–Serret para rapidez unitaria: $T'=\kappa N$, $N'=-\kappa T+\tau B$, $B'=-\tau N$.

Con $v=\cos\theta\,N+\sin\theta\,B$, derivamos:
$$\begin{aligned}
v'&=(\cos\theta)'N+\cos\theta\,N'+(\sin\theta)'B+\sin\theta\,B'\\
&=-\theta'\sin\theta\,N+\cos\theta(-\kappa T+\tau B)+\theta'\cos\theta\,B+\sin\theta(-\tau N)\\
&=-\kappa\cos\theta\,T-(\theta'+\tau)\sin\theta\,N+(\theta'+\tau)\cos\theta\,B.
\end{aligned}$$
Para que $v$ sea c.n.r.p. se requiere $v'=\lambda T$, es decir, que las componentes normal y binormal de $v'$ se anulen. Esto sucede si y sólo si
$$\theta'(t)+\tau(t)=0,$$
es decir, $$\theta'(t)=-\,\tau(t).$$
En tal caso $\lambda(t)=-\kappa(t)\cos\theta(t)$ y, equivalentemente, $$\theta(t)=\theta(t_0)-\int_{t_0}^t\tau(s)\,ds.$$

---

Seguimiento:
¿Podrías explicarme nuevamente la parte “Para que $v$ sea c.n.r.p. se requiere $v'=\lambda T$, es decir, que las componentes normal y binormal de $v'$ se anulen...”? 

Nueva respuesta:
- Por definición de c.n.r.p., $v$ es siempre perpendicular a $T=\alpha'$ y su derivada $v'$ es colineal con $T$: $v'=\lambda T$.
- Escribe $v'$ en la base de Frenet $\{T,N,B\}$: de arriba, $$v'=-\kappa\cos\theta\,T-(\theta'+\tau)\sin\theta\,N+(\theta'+\tau)\cos\theta\,B.$$ 
- “Ser colineal con $T$” significa que $v'$ no tiene proyección sobre $N$ ni sobre $B$. En coordenadas: los coeficientes de $N$ y $B$ deben ser cero.
- Esos coeficientes son $-(\theta'+\tau)\sin\theta$ y $(\theta'+\tau)\cos\theta$. Como $\sin^2\theta+\cos^2\theta=1$, ambos se anulan simultáneamente si y sólo si $\theta'+\tau=0$.
- Con esa condición, $v'=-\kappa\cos\theta\,T$, de donde $\lambda=-\kappa\cos\theta$. Integrando $\theta'=-\tau$ se obtiene $$\theta(t)=\theta(t_0)-\int_{t_0}^t \tau(s)\,ds.$$ 
Intuición: $v$ gira dentro del plano normal $\operatorname{span}\{N,B\}$ con velocidad angular $\theta'$. La torsión $\tau$ es la velocidad con que ese plano normal gira alrededor de $T$. Para que $v$ permanezca “relativamente paralelo” (no gane componente normal/binormal propia respecto al marco de Frenet), debe compensar exactamente ese giro: $\theta'=-\tau$. 