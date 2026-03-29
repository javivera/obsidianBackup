---
dateCreated: 2024-09-30T18:57:00
tags:
  - FunctionalAnalysis
  - vectorSpace
---
>[!Definition] EVT Acotado
>$E\subseteq X$ espacio vectorial topologico es acotado si $\forall U$ entorno del 0 $\exists r>0 \ /\ E\subseteq tU\quad\forall t>r$

^c019dd

>[!Remark] Definciones de acotado en EVT no es lo mismo que en metrico
>En un espacio metrico $(X,d)$ decimos que $E$ es acotado si $d(x,y)\leq M$. Esta def en general no coincide con la anterior. Reemplazo $d$ por la metrica
>$$d_{1}= \frac{d}{d+1}$$
>Esta induce la misma topologia pero no coinciden las definiciones de acotado (de hecho todos los conjuntos con $d_{1}$ son acotados)

^5b37bf

>[!Remark] Si $X$ normado y $d$ distancia inducida coinciden
>Si $X$ es normado y $d$ la distancia inducida por la norma entonces si coinciden. 
>>[!Proof]
>>a

^04d473

>[!Theorem] 1.15 Propiedades EVT
>$X$ espacio vectorial topologico $U$ entorno del 0 entonces
>1. $\forall$ sucesion $0<r_{n}\rightarrow\infty$ tenemos $X=\bigcup^{\infty}r_{n}U$
>2. $K$ compacto entonces $K$ acotado
>3. Si $U$ acotado $\forall$ sucesion $0<\delta_{n}\rightarrow 0$ tenemos $\{ \delta_{n}U:n\in \mathbb{N} \}$ es base local numerable
>>[!Proof]
>>a

^e41f69

>[!Definition]
>$X$ espacio vectorial topologico decimos:
>1. $X$ es local convexo si $\exists$ base local cuyos elementos son convexos
>2. $X$ es localmente acotado si $\exists$ entorno del 0 acotado
>3. $X$ es localmente compacto si $\exists$ entorno del 0 con clausura compacta
>4. $X$ es *Espacio Frechet* si $X$ es localmente compacto y $\tau$ es inducida por una metrica $d$ invariante y completa
>5. $X$ es metrizable si $\tau$ es inducida por una metrica
>6. $X$ es normable si $\tau$ es inducida por la metrica correspondiente a una norma
>7. $X$ tiene la propiedad *Heine-Borel* si cerrado y acotado implica compacto

^b0ca33

>[!Theorem]
>1. $X$ localmente acotado entonces tiene una base local numerable (Teo 1.15)
>2. $X$ metrizable $\iff X$ tiene base local numerable (Teo 1.24)
>3. $X$ normable $\iff X$ localmente convexo y $X$ localmente acotado (Teo 1.39)
>4. $X$ localmente acotado y tiene la propiedad de *Heine-Borel* entonces $dim(X)$ finita ($\iff X$ localmente compacto)
>>[!Proof]
>>a

^094613

## Seminormas

>[!Definition] Seminorma
>$X$ espacio vectorial $p:X\rightarrow\mathbb{R}$ es seminorma si 
>$$p(x+y)\leq p(x)+p(y)\quad\forall x,y\in X$$
>$$p(\alpha x)=\lvert \alpha  \rvert p(x)\quad\forall x\in X\quad\alpha \in \mathbb{F}$$

^c27268

>[!Definition] Seminormas que separan
>Una familia $P$ de seminormas *separa* si para cada $0\neq x\in X\quad\exists p \in P$ tal que $p(x)\neq 0$

^d4b00c

>[!Remark] Cuando seminorma es norma
>Si $p$ es seminorma y $p(0)=0$ entonces $0=p(x-x)\leq p(x)+p(-x)=2p(x)$. Luego si $p$ seminorma
>$$p\text{ es norma }\iff \bigg[p(x)=0 \Rightarrow x=0\bigg]$$
>Lo que no vale (que es lo que le falta a semi norma para ser norma) es: $$x=0\Rightarrow p(x)=0$$  

^1fa828

>[!Theorem] Topologia de seminormas
>Supongamos $P=\{ p_{i} \}_{i \in I}$ es una familia de seminormas que separan en un $X$ espacio vectorial para $n\in N$. Sean $$V(p_{i},n)=\left\{  x\in X:p_{i}(x)< \frac{1}{n}  \right\}$$
>$B$ familia de todas las intersecciones finitas de los conjuntos $V(p_{i},n)$. Entonces $B$ es una base local (del 0) convexa para una topologia $\tau$ en $X$ que hace de $X$ un espacio vectorial topologico localmente convexo tal que 
>1. $\forall p_{i}\in P$ sucede $p_{i}$ es continua
>2. $E\subseteq X$ es acotada $\iff$ Todo $p_{i}\in P$ es acotado en $E$

^7958c6

>[!Example]
>Queda copiar este ejeplo nefastasmente largos

^3a4f70
