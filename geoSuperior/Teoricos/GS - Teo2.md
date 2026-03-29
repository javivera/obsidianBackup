## Curvas y diferenciabilidad

>[!Remark]
>Sea $I\subseteq \mathbb{R}$ un intervalo abierto y $\gamma:I\subseteq \mathbb{R}\to \mathbb{R}^n$ una función diferenciable en $t_0\in I$. Esto quiere decir que tenemos una transformación lineal $$(d\gamma)_{t_0}:\mathbb{R}\longrightarrow \mathbb{R}^n$$
>Como el dominio de $(d\gamma)_{t_0}$ es $\mathbb{R}$, que es un espacio vectorial real de dimensión $1$, la imagen de $(d\gamma)_{t_0}$ está determinada por su valor en $1$.
>Luego $(d\gamma)_{t_0}(1)$ es un vector en $\mathbb{R}^n$, cuyas coordenadas sabemos calcular. Si $$(d\gamma)_{t_0}(1)=\sum_{j=1}^n a_j(t_0)e_j$$entonces $$\begin{align} a_j(t_0)&=\left\langle (d\gamma)_{t_0}(1),e_j\right\rangle\\&=\lim_{t\to 0}\left\langle \frac{\gamma(t_0+t)-\gamma(t_0)}{t},e_j\right\rangle\\&=
\lim_{t\to 0}\frac{\gamma_j(t_0+t)-\gamma_j(t_0)}{t}\\&=\gamma_j'(t_0)\end{align}$$

>[!Definition] Vector derivada
>Sea $I\subseteq \mathbb{R}$ un intervalo. Una función del tipo $$\gamma:I\subseteq \mathbb{R}\longrightarrow \mathbb{R}^n$$se llama *curva*, y se define el *vector velocidad* en $t_0$, denotado por $\gamma'(t_0)$, como el vector $$\bigl(\gamma_1'(t_0),\dots,\gamma_n'(t_0)\bigr)$$cuando cada una de las derivadas existe.

> [!Remark] Observación
> Usando esta notación de vector velocidad, si $\gamma:I\subseteq \mathbb{R}\to \mathbb{R}^n$ es diferenciable en $t_0$, entonces
> $$
> (d\gamma)_{t_0}(1)=\gamma'(t_0),
> $$
> y en general, si $h\in \mathbb{R}$,
> $$
> (d\gamma)_{t_0}(h)=h\,\gamma'(t_0).
> $$

>[!Exercise]
>Sea $\gamma:I\subseteq \mathbb{R}\to \mathbb{R}^n$ tal que el vector velocidad $\gamma'(t_0)$ existe. Mostrar que $\gamma$ es diferenciable en $t_0$, es decir, existe la transformación lineal $$(d\gamma)_{t_0}:\mathbb{R}\to \mathbb{R}^n$$dada por $(d\gamma)_{t_0}(h)=h\,\gamma'(t_0)$.
>>[!Proof]-
>>Definimos
>>$$
>>T:\mathbb{R}\to \mathbb{R}^n,
>>\qquad
>>T(h):=h\,\gamma'(t_0).
>>$$
>>Esta aplicación es lineal.
>>
>>Veamos que satisface la definición de diferenciabilidad en $t_0$. Para $h\neq 0$,
>>$$
>>\frac{\|\gamma(t_0+h)-\gamma(t_0)-T(h)\|}{|h|}
>>=
>>\left\|\frac{\gamma(t_0+h)-\gamma(t_0)}{h}-\gamma'(t_0)\right\|.
>>$$
>>Como el vector velocidad $\gamma'(t_0)$ existe, por definición
>>$$
>>\lim_{h\to 0}\frac{\gamma(t_0+h)-\gamma(t_0)}{h}
>>=
>>\gamma'(t_0).
>>$$
>>Luego
>>$$
>>\lim_{h\to 0}\frac{\|\gamma(t_0+h)-\gamma(t_0)-T(h)\|}{|h|}=0.
>>$$
>>Por lo tanto, $\gamma$ es diferenciable en $t_0$ y
>>$$
>>(d\gamma)_{t_0}(h)=T(h)=h\,\gamma'(t_0).
>>$$

## Variedades diferenciables

>[!Definition] Variedad topológica
>Sea $M$ un espacio topológico. Se dice que $M$ es una variedad topológica de dimensión $n$ si tiene las siguientes propiedades:
>1. $M$ es Hausdorff (es $T_{2}$) : para todo par de puntos distintos $p\neq q$ en $M$, existen abiertos disjuntos $U$ y $V$ de $M$ tales que $p\in U$ y $q\in V$.
>2. $M$ satisface el segundo axioma de numerabilidad (es $N_2$), esto es, tiene una base numerable para la topología de $M$.
>3. $M$ es localmente euclídeo de dimensión $n$: para cada $p\in M$, existe un conjunto abierto $U$ de $M$ conteniendo a $p$, un conjunto abierto $\widehat U$ de $\mathbb{R}^n$, y un homeomorfismo $$\varphi:U\subseteq M\longrightarrow \widehat U\subseteq \mathbb{R}^n.$$

^5bf2ca

>[!Remark]
>En el punto (ii), decir que $M$ tiene una base numerable significa que existe una familia numerable $\mathcal{B}$ de abiertos de $M$ tal que todo abierto de $M$ es unión de miembros de $\mathcal{B}$.

>[!Remark] Invarianza de la dimensión
>Se prueba en topología algebraica que si $U\subseteq \mathbb{R}^n$ y $\widetilde U\subseteq \mathbb{R}^m$ son abiertos y $$U \cong \widetilde U$$entonces $n=m$. Esto garantiza que la dimensión de una variedad topológica está bien definida.

>[!Definition] Carta
>Sea $M$ una variedad topológica de dimensión $n$. Una *carta coordenada* (o simplemente, una *carta*) sobre $M$ es un par $(U,\varphi(x_1,\dots,x_n))$, donde $U$ es un abierto de $M$ y
> $$
> \varphi:U\subseteq M\longrightarrow \widehat U\subseteq \mathbb{R}^n
> $$
> es un homeomorfismo, con $\widehat U=\varphi(U)$.

>[!Definition] Carta centrada
>Cuando se dice que $(U,\varphi)$ es una carta de $p$, nos referimos a que $p\in U$. Se dice que la carta está *centrada* en $p$ si $\varphi(p)=0$.

> [!Remark] Observación
> Notar que en toda variedad topológica $M$, cualquier punto $p\in M$ tiene una carta centrada en ese punto: se toma $(U,\varphi)$, una carta de $p$, y se usa una traslación, restando $\varphi(p)$.

>[!Example]
>4. $\mathbb{R}^n$ con su topología usual.
>5. Cualquier abierto $U$ de $\mathbb{R}^n$.
>6. Cualquier espacio vectorial real de dimensión finita.
>

>[!Lemma] Propiedad universal de la topologia inducida
>Sea $X,Y$ espacios topologicos $F:X\rightarrow Y$ funcion continua y $Z\subseteq Y$ tal que $Im F\subseteq Z$ 
>Luego sea $\tilde{F}:X\rightarrow Z$ dada por $p\mapsto F(p)$ entonces si a $Z$ le damos la topologia inducida por $Y$ tenemos que $$\tilde{F} \text{ es continua }\iff F \text{ es continua}$$       

^4a5257

>[!Example] La esfera $S^n$
>La esfera $S^{n}$ es una [[GS - Teo2#^5bf2ca]] de dimension $n$ 
>>[!Proof]-
>>1. Consideremos $$S^n:=\left\{(x_1,\dots,x_{n+1})\in \mathbb{R}^{n+1}:x_1^2+\cdots+x_{n+1}^2=1\right\}.$$La dotamos de la topología relativa inducida por $\mathbb{R}^{n+1}$. Por lo tanto es Hausdorff y es $N_{2}$ por que $\mathbb{R}^{n+1}$ lo es  
>>2. Veamos que es localmente euclídea. Sea $$p=(x_1,\dots,x_{n+1})\in S^n.$$entonces existe algún índice $i$ tal que $x_i\neq 0$. Sin pérdida de generalidad, supongamos $x_i>0$.
>>3. Definimos $$\widetilde U_i^+:=\left\{(y_1,\dots,y_{n+1})\in \mathbb{R}^{n+1}:y_i>0\right\}.$$ Es un abierto de $\mathbb{R}^{n+1}$ porque $$\widetilde U_i^+=\pi_i^{-1}\bigl((0,\infty)\bigr),\qquad \pi_i(y_1,\dots,y_{n+1})=y_i,$$ y $\pi_{i}:\mathbb{R}^{n+1}\to\mathbb{R}$ es continua. 
>>4. Luego $$U_i^+:=\widetilde U_i^+\cap S^n$$ es un abierto de $S^n$ conteniendo a $p$.
>>5. Consideramos la aplicación $$\varphi_i^+:U_i^+\longrightarrow \mathbb{R}^n,\qquad (y_1,\dots,y_{n+1})\longmapsto (y_1,\dots,\widehat{y_i},\dots,y_{n+1})$$ que es continua por ser restriccion de una continua
>>6. Ahora notamos $\varphi_{i}^{+}(y_{1},\ldots,y_{n+1})\in B^{n}$ donde $$B^n:=\left\{(z_1,\dots,z_n)\in \mathbb{R}^n:z_1^2+\cdots+z_n^2<1\right\}$$ es la bola abierta unitaria de $\mathbb{R}^n$.
>>7. Si $(y_1,\dots,y_{n+1})\in U_i^+$, entonces $y_i>0$ y $$y_1^2+\cdots+\widehat{y_i^2}+\cdots+y_{n+1}^2<1,$$luego $\varphi_i^+(U_i^+)\subseteq B^n$.
>>8. Luego podemos afirmar que $$\varphi_{i}^{+}:U_{i}^{+}\rightarrow B^{n}$$ es continua por [[GS - 2do Teo#^4a5257]]
>>9. Recíprocamente, si $(z_1,\dots,z_n)\in B^n$, entonces $$\psi_i^+(z_1,\dots,z_n):=\left(z_1,\dots,z_{i-1},\sqrt{1-(z_1^2+\cdots+z_n^2)},z_i,\dots,z_n\right)$$define un punto de $U_i^+$, y $\psi_i^+$ es la inversa de $\varphi_i^+$
>>10. Devuelta por la propiedad universal de la topología relativa, $$\psi_i^+:B^{n}\rightarrow U_{i}^{+}$$ es continua. 
>>11. Por lo tanto, $\varphi_i^+$ es un homeomorfismo entre $U_i^+$ y $B^n$.

>[!Definition] Casquetes y cartas canónicas
>Los abiertos de $S^n$ dados por $S^n\cap \widetilde U_i^\pm$ se llaman **casquetes** de $S^n$, y las aplicaciones $$\varphi_i^\pm:S^n\cap \widetilde U_i^\pm\longrightarrow B^n$$se llaman **cartas canónicas** de $S^n$.

