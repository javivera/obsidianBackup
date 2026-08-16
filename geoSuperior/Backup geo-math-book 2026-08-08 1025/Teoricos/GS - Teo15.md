>[!Proposition] Suavidad de un campo en una carta
> Sea $(U,\varphi=(x_1,\ldots,x_n))$ una carta suave de $M$ y sea $X:U \to TU$ un campo vectorial. Entonces $X$ es suave si y solo si las coordenadas de $X$ en el marco $\{\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\}$ son funciones suaves.
>
>>[!Proof]-
>>- $(\Rightarrow)$ Caso particular de [[GS - Teo14#^3accf8]] 
>>- $(\Leftarrow)$ 
>>	1. Tenemos la carta asociada a la carta $\varphi$ $$\bigg(\widetilde U=\pi^{-1}(U),\tilde\varphi=\left(x_1\circ\pi,\ldots,x_n\circ\pi,v_1,\ldots,v_n\right)\bigg)$$ que en este caso es un difeo entre $TU$ y $\varphi(U)\times\mathbb{R}^n$.  
>>	2. Por tanto, $X$ es suave si $\widetilde\varphi\circ X$ es suave (por que si esto es suave componer a derecha con $\varphi ^{-1}:\varphi(U)\rightarrow U$ sigue siendo suave, por que $\varphi ^{-1}$ es homeo, osea que al componer no cambiamos codominio) 
>>	3. Como $$\widetilde\varphi\circ X:U\subseteq M\longrightarrow\mathbb{R}^{2n}\quad\text{esta dada por}\quad p\longmapsto \left(x_1(p),\ldots,x_n(p),a_1(p),\ldots,a_n(p)\right)$$ donde $a_i:U\to\mathbb{R}$ son las coordenadas de $X_{p}$ con respecto al marco $$\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\ldots,\left.\frac{\partial}{\partial x_n}\right|_p\right\},$$
>>	4. Y por hipotesis son suaves las coordenadas $a_{i}$ son suaves (obviemente $x_{i}(p)$ son suaves por ser carta), se sigue que $\widetilde\varphi\circ X$ es suave

^f23a3b

>[!Corollary] Campos coordenados
>Los campos coordenados $\frac{\partial}{\partial x_i}$ son campos suaves en $\mathfrak X(U)$. Recordamos que aca aca estamos pensando $$\frac{\partial}{\partial x_{i}}:U\rightarrow  TU\qquad \text{dada por }\qquad \frac{\partial}{\partial x_{i}}(q)=\left(q,\frac{\partial}{\partial x_{i}}\bigg|_{q}\right)$$ por eso es que son campos. Pero tambien los puedo pensar como que $$\left(\frac{\partial}{\partial x_{i}}\right)_{p}=\frac{\partial}{\partial x_{i}}\bigg|_{p}\in T_{p}U$$ 
>
>>[!Proof]-
>>1. En el marco coordenado de la carta tenemos $$\frac{\partial}{\partial x_{i}}\bigg|_{p}=\sum^{n}_{i=1}a_{i}(p)\frac{\partial}{\partial x_{i}}\bigg|_{p}$$
>>2. Por lo tanto $a_{j}(t)\equiv 0$ si $i=j$ y $a_{i}(t)\equiv 1$ 
>>3. Osea las coordenadas de $\frac{\partial}{\partial x_{i}}$ en el marco dado por la carta son suaves 

^4e6c26

>[!Remark] Hecho por mi
>Como un campo vectorial es una funcion $M \to TM$, la suavidad es un problema local. Para ver que un campo vectorial es suave alcanza con ver que para cada $p \in M$ existe un abierto $U_p$ de $M$ en $p$ tal que $X|_{U_p}$ es suave. 

>[!Example] Funciones angulo en $S^1$
> Identificando $\mathbb R^2$ con $\mathbb C$, se puede pensar al circulo unidad $S^1$ como un subconjunto del plano complejo.
>
> Una funcion angulo sobre un subconjunto $A \subset S^1$ es una funcion continua $\theta:A \subset \mathbb C \to \mathbb R$ tal que $e^{i\theta(z)}=z$ para todo $z \in A$.
>
> Si $U \subset S^1$ es abierto, existe una funcion angulo sobre $U$ si y solo si $U \neq S^1$. Ademas, si $\theta:U \to \mathbb R$ es una funcion angulo, entonces $(U,\theta)$ es una carta suave para $S^1$ con su estructura suave estandar.
>
> En este ejercicio se muestra que si $(U_1,\theta_1)$ y $(U_2,\theta_2)$ son dos cartas angulo, entonces $\theta_1-\theta_2$ es un multiplo entero constante en cada componente conexa de $U_1 \cap U_2$. Por lo tanto los campos coordenados $\frac{\partial}{\partial \theta_1}$ y $\frac{\partial}{\partial \theta_2}$ coinciden en las intersecciones, lo que permite definir un campo global sobre $S^1$.

>[!Example] Extender un vector tangente a un campo
> Sea $p \in M$ y sea $v \in T_pM$. Entonces existe $X \in \mathfrak X(M)$ tal que $X_p=v$.
>
>>[!Proof]-
>>2. Tomamos una carta suave $(U,\varphi=(x_1,\ldots,x_n))$ alrededor de $p$. Escribimos $$v=\sum_{i=1}^n v_i(p)\frac{\partial}{\partial x_i}|_p$$
>>3. Sea $B \in C^\infty(M)$ una funcion bump con $B(p)=1$ y $\operatorname{Sop}(B) \subset U$. 
>>4. Proponemos $X$ tal que $$X_q=\begin{cases} B(q)\displaystyle\sum_{i=1}^n v_i(p)\left.\frac{\partial}{\partial x_i}\right|_q, & q\in U,\\ 0, & q\notin U.\end{cases}$$ si $q \in U$, y $X_q=0$ si $q \notin U$.
>>![[Pasted image 20260510144900.png]]
>>5. Veamos que esta $X$ es suave. Para esto veamos que dado cualquier $p\in M$ tengo un abierto $U$ de $p$ tal que $X|_{U}$ es suave
>>6. Si $q\in U$, entonces en el abierto $U$ que ya teniamos con su carta, tenemos $$X|_{U}=\sum_{i=1}^{n} B\cdot v_i\,\frac{\partial}{\partial x_i}$$es suave, ya que las funciones coordenadas son suaves por que $B:M\to\mathbb R$ es suave y los $v_i$ son constantes.  
>>7. Entonces por [[GS - Teo15#^f23a3b]] $X|_{U}$ es suave 
>>8. Si $q\notin U$, entonces $q\notin \operatorname{supp}B$, pues $\operatorname{supp}B\subseteq U$.  
>>9. Esto implica que existe un abierto $V$ de $M$ con $q\in V$ tal que $B|_V\equiv 0$, por definición de soporte.  
>>10. Veamos cómo queda el campo $X$ en $V$. Sea $z\in V$. Entonces $$X_z=\begin{cases} B(z)\sum_{i=1}^{n} v_i\,\frac{\partial}{\partial x_i}\big|_z=0, & \text{si } z\in U,\\ 0, & \text{en otro caso.}\end{cases}$$ esto por que $B(z)=0$ 
>>11. Es decir, $X|_V$ se puede ver como función constante e igual a cero, y por tanto es suave en $V$.  
>>12. Como todo punto $q\in M$ tiene un entorno donde $X$ es suave, concluimos que $X$ es suave.

>[!Proposition] Estructura algebraica de $\mathfrak X(M)$
> Sea $M$ una variedad suave. Entonces:
>
> 1. $\mathfrak X(M)$ es un espacio vectorial real. Si $X,Y \in \mathfrak X(M)$ y $\lambda \in \mathbb R$, se definen $(X+Y)_p=X_p+Y_p$ y $(\lambda X)_p=\lambda X_p$.
> 2. $\mathfrak X(M)$ es un modulo sobre $C^\infty(M)$. Si $X \in \mathfrak X(M)$ y $f \in C^\infty(M)$, se define $(fX)_p=f(p)X_p$.

## Campos suaves y subvariedades

>[!Proposition] Extension de campos de subvariedades
>Sea $M$ una variedad suave y sea $S \subset M$ una subvariedad incrustada. Dado $X \in \mathfrak X(S)$, existe un campo suave $Y$ sobre una vecindad de $S$ en $M$ tal que $X$ es la restriccion de $Y$ sobre $S$.
>
>Ademas, tal campo $Y$ se extiende sobre todo $M$ si y solo si $S$ es un subconjunto cerrado de $M$.
>
>>[!Proof]-
>>[[GS - Pr4#^7d5d0b]]

## Curvas integrales y flujos

>[!Definition] Curva integral
>Sea $M$ una variedad suave y sea $X \in \mathfrak X(M)$. Una curva suave $\gamma:I \subset \mathbb R \to M$, con $I$ intervalo abierto, se dice curva integral de $X$ si para todo $t \in I$ se cumple $$\gamma'(t):=(d\gamma)_t\frac{d}{ds}|_t=X_{\gamma(t)}$$
>En coordenadas, esto dice $(\gamma^i)'(t)=X^i(\gamma(t))$. Donde $\gamma^{i}=x^{i}\circ \gamma$ con $x^{i}$ coordenadas de una carta para $M$  
>
> Dicho de forma informal: es una curva que se acomoda a las flechas dibujadas por $X$.

>[!Example] Campo constante en $\mathbb R^2-\{(0,0)\}$
>Sea $M=\mathbb R^2-\{(0,0)\}$ y consideremos el campo $X=\frac{\partial}{\partial x_1}$. 
>![[Pasted image 20260513203039.png]]
>Las curvas integrales son rectas horizontales siempre que no pasen por el origen.
>Si $p=(p_1,p_2)$ con $p_2 \neq 0$, una curva integral por $p$ es $\gamma(t)=p+te_1$.
>Si $p$ esta sobre el eje horizontal, el dominio de la curva debe cortarse antes de llegar al punto eliminado. Por ejemplo, para $p=(-1,0)$ puede tomarse $\gamma(t)=(-1,0)+te_1$ con $t<1$.

>[!Theorem] Fundamental theorem for autonomous ODEs
>Let $U\subseteq\mathbb R^n$ be open, and let $V:U\to\mathbb R^n$ be a smooth vector-valued function. Consider the initial value problem
>$$\dot y^i(t)=V^i(y^1(t),\ldots,y^n(t)),\qquad i=1,\ldots,n,$$
>with initial condition
>$$y^i(t_0)=c^i,\qquad i=1,\ldots,n,$$
>where $t_0\in\mathbb R$ and $c=(c^1,\ldots,c^n)\in U$ are arbitrary.
>
>1. **Existence.** For any $t_0\in\mathbb R$ and $x_0\in U$, there exist an open interval $J_0\subseteq\mathbb R$ containing $t_0$ and an open subset $U_0\subseteq U$ containing $x_0$ such that, for each $c\in U_0$, there is a $C^1$ map $y:J_0\to U$ solving the initial value problem.
>2. **Uniqueness.** Any two differentiable solutions to the initial value problem agree on their common domain.
>3. **Smoothness.** Let $J_0$ and $U_0$ be as in 1. Let $\theta:J_0\times U_0\to U$ be the map defined by $\theta(t,x)=y(t)$, where $y:J_0\to U$ is the unique solution with initial condition $y(t_0)=x$. Then $\theta$ is smooth.

^81ef7e

