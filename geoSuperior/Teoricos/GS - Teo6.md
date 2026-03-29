## El espacio tangente de una carta

>[!Remark] El espacio tangente de una carta
>Si $(U,\varphi=(x_1,\dots,x_n))$ es una carta suave de $p$ en $M$, entonces también tiene sentido considerar el espacio tangente $T_pU$, ya que $U$ es por sí mismo una variedad suave.
>
>En $T_pU$ aparece automáticamente la base
>$$
>\left\{\left.\frac{\partial}{\partial x_i}\right|_p\right\}_{i=1}^n.
>$$
>
>No se puede decir literalmente que $T_pM$ y $T_pU$ sean el mismo conjunto, porque los elementos de $T_pM$ actúan sobre funciones en $C^\infty(M)$ y los de $T_pU$ actúan sobre funciones en $C^\infty(U)$.
>
>Sin embargo, son isomorfos de forma natural: al restringir funciones globales a $U$ y al extender funciones locales cerca de $p$, los mismos vectores coordenados describen ambos espacios.
>
>Una forma elegante de evitar este abuso es definir vector tangente como una derivación sobre el álgebra de gérmenes $C_p^\infty(M)$.

## Diferencial de una función suave

>[!Definition] Diferencial de una función suave
>Sean $M$ y $N$ variedades suaves y $F:M\to N$ una función suave. Para cada $p\in M$ se define la función
>$$
>dF_p:T_pM\to T_{F(p)}N,
>$$
>llamada **diferencial de $F$ en $p$**, por
>$$
>\bigl(dF_p(v)\bigr)(g)=v(g\circ F),\qquad g\in C^\infty(N).
>$$
>
>Está bien definida porque si $g\in C^\infty(N)$, entonces $g\circ F\in C^\infty(M)$.

>[!exercise] Observación sobre $dF_p$
>$dF_p$ es lineal y el vector tangente $dF_p(v)$ es lineal y vuelve a satisfacer la regla de Leibniz.

## Regla de la cadena

>[!Proposition] Regla de la cadena
>Si $F:M\to N$ y $G:N\to P$ son suaves, entonces
>$$
>d(G\circ F)_p=(dG)_{F(p)}\circ dF_p.
>$$
>>[!Proof]-
>>1. Sea $v\in T_pM$ y $h\in C^\infty(P)$. Entonces como la composición es asociativa 
>>$$
>>\bigl(d(G\circ F)_p(v)\bigr)(h)=v(h\circ (G\circ F))=v(h\circ G\circ F)$$
>>2. Por otro lado, mirando $dF_{p}(v)$ como un vector tangente y aplicandolo a $h\circ G$  
>>$$
>>\bigl(((dG)_{F(p)}\circ dF_p)(v)\bigr)(h)=((dG)_{F(p)}(dF_{p}(v)))(h)=(dF_p(v))(h\circ G)=v((h\circ G)\circ F)=v(h\circ G\circ F).
>>$$
>>3. Como ambas derivaciones actúan igual sobre toda función $h\in C^\infty(P)$, son iguales. 
>>4. Y luego como ambas actuan sobre todo $v\in T_{p}M$ son iguales

# Diferencial e identificación del tangente local

## Diferencial de un difeomorfismo

>[!Corollary] El diferencial de un difeomorfismo es un isomorfismo
>Si $F:M\to N$ es un difeomorfismo, entonces
>$$
>(dF)_p:T_pM\to T_{F(p)}N
>$$
>es un isomorfismo, y su inversa es
>$$
>\bigl((dF)_p\bigr)^{-1}=(dF^{-1})_{F(p)}.
>$$
>>[!Proof]-
>>Como $\operatorname{Id}_M=F^{-1}\circ F$, por la regla de la cadena se obtiene
>>$$
>>\operatorname{Id}_{T_pM}=d(\operatorname{Id}_M)_p=(dF^{-1})_{F(p)}\circ(dF)_p.
>>$$
>>Análogamente, usando $\operatorname{Id}_N=F\circ F^{-1}$,
>>$$
>>\operatorname{Id}_{T_{F(p)}N}=d(\operatorname{Id}_N)_{F(p)}=(dF)_p\circ(dF^{-1})_{F(p)}.
>>$$
>>Luego $(dF)_p$ es invertible y su inversa es $(dF^{-1})_{F(p)}$.

## Identificación entre $T_pU$ y $T_pM$

>[!Proposition] La inclusión induce un isomorfismo
>Sea $U\subseteq M$ un abierto, $p\in U$ e $i:U\hookrightarrow M$ la inclusión (funcion suave). Entonces
>$$
>(di)_p:T_pU\to T_pM
>$$
>es un isomorfismo.
>>[!Proof]-
>>1. Como $\dim T_pU=\dim T_pM=\dim M$, basta ver que $(di)_p$ es inyectiva.
>>2. Sea $v\in T_pU$ tal que $(di)_p(v)=0$. Queremos probar que $v=0$.
>>3. Tomemos $f\in C^\infty(U)$ arbitraria. Por el lema de extensión, existe una extensión suave $\widetilde f\in C^\infty(M)$ definida en un abierto de $p$ y tal que $\widetilde f=f$ cerca de $p$.
>>4. Entonces $$0=((di)_p(v))( \widetilde f )=v(\widetilde f\circ i)=v(f)$$porque $\widetilde f\circ i=f$ en un entorno de $p$.
>>5. Como esto vale para toda $f\in C^\infty(U)$, se concluye que $v=0$. Por lo tanto, $(di)_p$ es inyectiva y en consecuencia un isomorfismo.

>[!Remark] Vectores coordenados y la inclusión
>Si $(U,\varphi=(x_1,\dots,x_n))$ es una carta suave alrededor de $p$, el isomorfism $$(di)_p:T_pU\to T_pM$$ 
envía cada vector coordenado de $T_pU$ en el vector coordenado correspondiente de $T_pM$$$(di)_p\left(\left.\frac{\partial}{\partial x_i}\right|_p\right)=\left.\frac{\partial}{\partial x_i}\right|_p$$. Esto permite identificar sin ambigüedad $T_pU$ con $T_pM$.

>[!Remark] Comentario de Lee
>Lee señala que esta identificación es canónica e independiente de elecciones: un vector tangente en $p$ actúa sólo sobre el germen local de las funciones cerca de $p$. Por eso no hay diferencia esencial entre pensarlo como derivación sobre funciones definidas en $U$ o sobre funciones definidas en todo $M$.

## Ejercicio

>[!Exercise] Diferencial nulo y funciones constantes
>Sean $M$ y $N$ variedades suaves y sea $F:M\to N$ una función suave, con $M$ conexa. Probar que
>$$
>(dF)_p:T_pM\to T_{F(p)}N
>$$
>es la transformación nula para todo $p\in M$ si y sólo si $F$ es constante.

## Cambio de coordenadas

>[!Proposition] Matriz de cambio de base entre cartas
>Sean
>$$
>(U,\varphi=(x_1,\dots,x_n)),\qquad (V,\psi=(y_1,\dots,y_n))
>$$
>dos cartas suaves alrededor de $p$.
>
>Las bases coordenadas $$\mathcal B_1=\left\{\left.\frac{\partial}{\partial x_1}\right|_p,\dots,\left.\frac{\partial}{\partial x_n}\right|_p\right\},\qquad\mathcal B_2=\left\{\left.\frac{\partial}{\partial y_1}\right|_p,\dots,\left.\frac{\partial}{\partial y_n}\right|_p\right\}$$están relacionadas por la matriz jacobiana de la función de transición: $$\bigl[\operatorname{Id}_{T_pM}\bigr]_{\mathcal B_2}^{\mathcal B_1}=J(\varphi\circ\psi^{-1})(\psi(p))$$
>>[!Proof]-
>>1. Escribimos $$\left.\frac{\partial}{\partial y_j}\right|_p=\sum_{i=1}^n a_{ij}\left.\frac{\partial}{\partial x_i}\right|_p$$
>>2. Para hallar los coeficientes, aplicamos ambos lados a la función coordenada $x_i$: $$a_{ij}=\left.\frac{\partial}{\partial y_j}\right|_p(x_i)$$
>>3. Por definición de vector coordenado, $$a_{ij}=\left.\frac{\partial}{\partial t_j}\right|_{\psi(p)}(x_i\circ\psi^{-1})$$donde $(t_1,\dots,t_n)$ son las coordenadas usuales en $\mathbb{R}^n$.
>>4. Pero $x_i=\pi_i\circ\varphi$, donde $\pi_i:\mathbb{R}^n\to\mathbb{R}$ es la proyección sobre la $i$-ésima coordenada. Luego $$x_i\circ\psi^{-1}=\pi_i\circ\varphi\circ\psi^{-1}$$
>>5. Por lo tanto $$a_{ij}=\left.\frac{\partial}{\partial t_j}\right|_{\psi(p)}\bigl(\pi_i\circ\varphi\circ\psi^{-1}\bigr)$$que es exactamente la entrada $(i,j)$ de la jacobiana de $\varphi\circ\psi^{-1}$ en $\psi(p)$.
>>6. Así, la matriz de cambio de base es $$\bigl(a_{ij}\bigr)=J(\varphi\circ\psi^{-1})(\psi(p))$$
