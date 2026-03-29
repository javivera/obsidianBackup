---
dateCreated: 2024-10-11,20:30
---
>[!Corollary] $c_{0}$ y $\ell^{\infty}$ no son reflexivos MEMO
>Los espacios $c_{0}$ y $\ell^{\infty}$ no son reflexivos
>>[!Proof]-
>>1. Vimos en [[Teórico 12#^0a50d4]] que $( ^{\circ}Z ) ^{\circ} =c_{0}'\neq Z$ 
>>2. Luego $c_{0}$ no puede ser reflexivo por [[Teórico 12#^774fbc]] $2.$ 
>>3. Ademas como $c_{0}$ cerrado en $\ell^{\infty}$, tampoco puede serlo $\ell^{\infty}$ por [[Teórico 12#^c591f7]]

^8dcf06

>[!Theorem] Definicion $T'$
>$X,Y$ normados , $T \in B( X,Y )$ entonces $\exists !T'\in B( Y',X' )$ tal que 
>$$ T'( f ) ( x ) =f( Tx ) \quad\forall f\in Y'\quad\forall x\in X$$ 
>>[!Proof]-
>>1. Para $f\in Y'$ definimos $T'(f)=f\circ T$. 
>>2. Como $T,f$ son lineales y continuas $T'(f)$ lo es entonces  $T'( f)\in X'$ 
>>3. Ademas $T':Y'\longrightarrow X'$ cumple (por definicion) que $$T'( f)( x)=f( Tx)\quad\forall x\in X \quad\forall f\in Y'$$
>>4. Si hubiera otra $S\in B( Y',X' )$ tal que $S( f)( x)=f( Tx) \quad\forall x\in X \quad\forall y\in Y'$ entonces $S( f)=T'( f)\quad\forall f\in Y'$ osea $S=T'$ 
>>5. Veamos que es lineal y continua. Sean $f,g \in Y',\alpha, \beta\in\mathbb{F}$ entonces $$T'(\alpha f+\beta g)=  ( \alpha f+\beta g)\circ T=\alpha ( f\circ T)+\beta( g\circ T)$$
>>Osea $T'( \alpha f+\beta g)=\alpha T'( f)+\beta( T')g$ 
>>6. Ademas $\lVert T'( f) \rVert =\lVert f\circ T \rVert \leq \lVert f \rVert \lVert T \rVert$. Por lo tanto $T'$ es continua (mas aun $\lVert T' \rVert \leq \lVert T \rVert$)

^e98c72

>[!Proposition] Resultados para $T'$ 
>$X,Y$ normados $T\in B( X,Y )$ entonces
>- (a) $\lVert T' \rVert =\lVert T \rVert$ 
>- (b) $Ker( T')=( Im T)^{\circ}$
>- (c) $Ker( T)=^{\circ}( Im T')$
>>[!Proof]-
>>- (a)
>>	1. Por [[Teórico 10#^d1e653]] $\exists f\in Y'$ tal que $f( Tx)=\lVert Tx \rVert$ y $\lVert f \rVert =1$ 
>>	2. Entonces $\lVert Tx \rVert =f( Tx)=T'( f)( x)\leq \lVert T' \rVert \lVert f \rVert \lVert x \rVert$ y sabemos $\lVert f \rVert =1$. Por lo tanto $\lVert T \rVert \leq \lVert T' \rVert$ 
>>	3. Y por [[Teórico 13#^e98c72]] paso 6. $\lVert T' \rVert\leq \lVert T \rVert$      
>>- (b)
>>	1. $( \subseteq )$  Sea $f\in Ker T'$ y $z\in Im T$ entonces $\exists x\in X$ tal que $z=Tx$
>>	2. Luego $f( z)=f( Tx)=T'( f)( x) =0$
>>	3. $( \supseteq)$ Sea $f\in ( ImT)^{\circ}$ entonces $\forall x\in X$ sucede $T'( f)( x)=f( Tx)=0$ pues $Tx\in ImT$ 
>>	4. Osea $T'( f)=0$ por lo tanto $f\in KerT'$ 
>>- (c)
>>	1.  $(\subseteq)$ Sea $x\in KerT$ y $f\in Im(T')$ entonces $f=T'(g)=g\circ T$
>>	2. Luego $f(x)=g(Tx)=g(0)=0$ mostrando que $x\in ^{\circ}(ImT')$    
>>	3. $(\supseteq)$ sea $x\in ^{\circ}(ImT')$ entonces $\forall f\in ImT'$ sucede $f(x)=0$ 
>>	4. Como $f\in ImT'$ entonces $f=T'(g)=g\circ T$ entonces $g\circ T(x)=0$ por lo tanto $T(x)=0$ 

^7587c2

>[!Theorem] $T$ iso entonces $T'$ iso MEMO
>$X,Y$ normados $T\in B( X,Y )$ 
>- (a) Si $T$ es isomorfismo entonces $T'$ es isomorfismo con $( T')^{-1} =( T^{-1} )'$.
>(En particular si son isomorfos $X$ e $Y$ tambien lo son $X'$ e $Y'$) 
>- (b) Si $T$ isomorfismo isometrico entonces $T'$ isomorfismo isometrico
>>[!Proof]-
>>- (a) 
>>	1. Sea $S=T^{-1}$ entonces $S\in B( Y,X )$ y ademas esta bien definida $S'\in B( X',Y')$ por [[Teórico 13#^e98c72]]
>>	2. Ahora $\forall x\in X ,f\in X'$ tenemos $$T'( S'(f))(x)=S'( f)( Tx)=f( S( Tx))=f( x)$$Osea $T'( S'( f))=f$ por lo tanto $T'\circ S'=Id_{X'}$  
>>	3. Analogamente vemos $S'\circ T'=Id$
>>	4. Entonces $(T^{-1})'=S'=(T')^{-1}$ , como $T'$ tiene inversa , es isomorfismo  
>>- (b) 
>>	1. Por (a) basta ver que $T'$ es isometria. 
>>	2. Por una parte $\lVert T'(f)(x) \rVert =\lVert f(Tx) \rVert \leq \lVert f \rVert \lVert T \rVert \lVert x \rVert$ (Con $\lVert T \rVert =1$ por ser isometria)
>>	3. Entonces $\lVert T'(f) \rVert \leq \lVert f \rVert$ 
>>	4. Por otro lado $\forall \epsilon>0\ \exists y\in Y$ con $\lVert y \rVert =1$ tal que $\lvert f(y) \rvert \geq \lVert f \rVert -\epsilon$ (Por def de supremo)
>>	5. Sea $x=T^{-1} y$ entonces $\lVert x \rVert =1$ (Pues $1= \lVert y \rVert =\lVert T(T^{-1} y) \rVert =\lVert T x \rVert =\lVert x \rVert$ ) 
>>	6. Por lo tanto $\lVert T'(f) \rVert \geq \lvert T'(f)(x) \rvert =\lvert f(Tx) \rvert= \lvert f(y) \rvert \geq \lVert f \rVert -\epsilon$ (Por def de norma $\lVert T'(f) \rVert$ dado que $\lVert x \rVert=1$) 
>>	7. Mostrando que $\lVert T'(f) \rVert =\lVert f \rVert$ 

^fbf5b7

>[!Remark]
Recordar que si $1\leq p<\infty, \ x\in \ell^p, \ a\in \ell^{q}$ con $\frac{1}{p}+\frac{1}{q}=1$. 
Tomando $f_{a}(x)=\sum_{n=1}^{\infty} a_{n} x_{n}$ entonces $T_{p}:\ell^{q} \longrightarrow (\ell^{p} )'$ dada por $T_{p}(a)=f_{a}$  es isomorfismo isometrico       

>[!Corollary] Reflexividad de $\ell^{p}$ MEMO
>$\ell^{p}$ con $\ 1<p<\infty$ es reflexivo 
>>[!Proof]-
>>1. Sean $x\in\ell^{p} \ \ y\in \ell^{q}$ con  $1<q< \infty$ y $\frac{1}{q}+\frac{1}{p}=1$ 
>>2. Entonces $$T_{p}'(J_{\ell^{p}}(x))(y)=(J_{\ell^{p} }(x))T_{p}(y)=T_{p}(y)(x)=\sum_{n=1}^{\infty} x_{n} y_{n} =T_{q}(x)(y)$$ 
>>3. Osea $T_{p}'(J_{\ell^{p} }(x))=T_{q}(x)$
>>4. Y $T_{p}'$ es iso por [[Teórico 13#^fbf5b7]] (por que $T_{p}$ lo es)  
>>5. Luego $J_{\ell^{p} }=( T_{p}' )^{-1} \circ T_{q}$ (despejando en la ec de arriba) y como $T_{q}$ y $T_{p}'$ son iso entonces la composicion es iso. 
>>6. Como $J_{\ell^{p} }$ es isomorfismo (osea sobre) entonces $\ell^{p}$ es reflexivo por [[Teórico 12#^5bf92d]]

^63408e

>[!Theorem]
>$X,Y$ normados, $T\in B(X,Y)$. Entonces 
$$J_{Y}\circ T=T'' \circ J_{X}$$
>>[!Proof]-
>>1. $$X\xrightarrow[]{T}Y\xrightarrow[]{J_{Y}}Y''\quad X\xrightarrow[]{J_{Y}}X''\xrightarrow[]{T''}Y''$$ 
>>2. Ahora tenemos $T'':X''\longrightarrow Y''$ dada por $\psi\longrightarrow T''(\psi)$ con $T''(\psi)(g)=\psi(T'(g))$ con $g\in Y'$
>>3. Luego dado $x\in X\quad q\in Y'$ tenemos $$J_{Y}(Tx)(g)=g(Tx)=T'(g)(x)=(J_{x}x)(T'(g))=T''(J_{x}x)(g)$$  
>>4. Luego $$J_{Y}(Tx)=T''(J_{X}x)\quad \forall x\in X $$  

^7f9edb

>[!Corollary] Isomorfimo preserva reflexividad 
>Si $X,Y$ son isomorfos entonces $X$ reflexivo sii $Y$ reflexivo 
>>[!Proof]-
>>1. Como $X,Y$ son isomorfos existe $T:X\longrightarrow Y$ isomorfismo. Entonces por [[Teórico 13#^fbf5b7]]  aplicado dos veces $T''$ es isomorfos. 
>>2. Luego usando la igualdad en [[Teórico 13#^7f9edb]] y considerando que composición de isomorfismos es isomorfismo queda probado  $$J_{Y}(Y)=T''(J_{X}(T^{-1}(Y)))=T''(J_{X}(X))=T''(X'')=Y''$$

^9a9641

>[!Corollary] $\ell^{1}$ no es reflexivo 
>$\ell^{1}$ no es reflexivo
>>[!Proof]-
>>1. Sabemos que $c_{0}$ no es reflexivo [[#^8dcf06]] entonces por [[Teórico 12#^ba33bb]] (considerando $c_{0}$ es Banach) $c_{0}'$  no es reflexivo
>>2. $\ell^{1}$ es isomorfo a $c_{0}'$ por [[Teórico 12#^0a50d4]] entonces por [[Teórico 13#^9a9641]] 

^cee970

## Proyeciones y subespacios complementarios

>[!Remark]
>En esta seccion $X$ es espacio vectorial 

>[!Definition] Espacios complementarios
>$U,V \subseteq X$ subespacios, se dicen complementarios si $X=U\bigoplus V$. Osea $\forall x\in X \quad \exists !u_{X}\in U\ \ !v_{X}\in V$ tal que $x=u_{x}+v_{x}$ 
>Si $X$ normado y $x\mapsto u_{x}\quad x\mapsto v_{x}$ son continuas decimos que son complementarios topologicos 

^87b8e4

>[!Definition] Proyeccion
>$p:X\longrightarrow X$ lineal se dice proyeccion si $p^{2}=p$ 

^bde199

>[!Lemma] Propiedades de proyecciones
>Sea $p$ proyeccion en $X$. Entonces 
>- (a) $x\in Im(p)\iff p(x)=x$. 
>- (b) Ademas $I-p$ es proyeccion 
>- (c) $Ker(p)=Im(I-p)$ 
>- (d) $Im(p)=Ker(I-p)$
>>[!Proof]-
>>- (a)
>>	1.  Sea $x\in Im(p)$ entonces $x=p(y)$ luego $px=p(p(y))=py=x$ la otra implicacion es trivial
>>- (b)
>>	1. $$(I-p)^{2}=(I-p)(I-p)=I^{2} -pI-Ip+p^{2}=I-p$$ entonces $I-p$ es proyeccion
>>- (c)
>>	1. Sea $x\in Im(I-p)$ entonces $x=(I-p)(x)$  por que $I-p$ es proyeccion por 2. Entonces $px=p(x-px)=px-p^{2}x=px - px = 0$ por lo tanto  $x\in Ker(p)$ 
>>	2.  Sea $y\in Ker(p)$ entonces $p(y)=0$ entonces $-p(y)+I(y)=y$ osea $(I-p)(y)=y$ por lo tanto $y\in Im(I-p)$ 
>>- (d)
>>	1. Usando (c) con $\tilde{p}=I-p$ que sabemos que es proyeccion por (b)    

^78a55e

>[!Lemma] Proyecciones sobre espacios
>- (a) Sean $U,V\subseteq X$ subespacios complementarios y sean $p_{U}:X\longrightarrow U \quad p_{V}:X\longrightarrow V$ dadas por $x\mapsto u_{x}$ $x\mapsto v_{x}$ entonces $p_{U},p_{V}$ son proyecciones en $X$ y $p_{U}+p_{V}=Id$. ($p_{U}$ se dice proyeccion sobre $U$ de $V$, analogo para $p_{V}$ )
>- (b)  Si $p$ es proyeccion en $X$ entonces los subespacios $Im(p),Im(I-p)$ son complementarios
>>[!Proof]-
>>- (a)
>>	1. Veamos que es lineal $$p_{U}(\alpha x+\beta y)=p_{U}((\alpha u_{x}+\beta u_{y})+(\alpha  v_{x}+\beta v_{y}))=\alpha u_{x}+\beta u_{y}=\alpha p_{U}(x)+\beta p_{U}(y)$$
>>	2. Notemos que $p_{U}(p_{U}(x))=p_{U}(u_{x})=u_{x}=p_{U}(x)$ analogo con $p_{V}$ entonces son proyecciones
>>	3. $(p_{U}+p_{V})(x)=p_{U}(x)+p_{V}(x)=u_{x}+v_{x}=x$  osae $p_{U}+p_{V}=Id$ 
>>	4. Entonces sale directo por [[Teórico 13#^78a55e]] (b) que $p_{V}$ tambien es proyeccion  
>>- (b)
>>	1. $x=Id(x)=(p+(I-p))(x)=p(x)+(I-p)(x)$. Osea que podemos descomponer $x$ correcamente. Resta ver que no hay nada en la interseccion
>>	2.  Suponamos $y\in Im(p)$ e $y\in Im(I-p)$.
>>	3. Como $Im(I-p)=Ker(p)$ entonces $p(y)=0$ 
>>	4. Como $Im(p)=Ker(I-p)$ entonces $(I-p)(y)=0$ osea $p(y)=y$
>>	5. Entonces $y=0$ 
>>- Otra opcion era mostrar unicidad en vez de interseccion trivial
>>	1. Supongamo existen dos descomposiciones en estos espacios $x_{1}+x_{2}=y=x_{1}'+x_{2}'$ con $x_{1},x_{1}'\in Im(p)$ y $x_{2},x_{2}'\in Im(I-p)$  
>>	2. $x_{1}-x_{1}'=p(x_{1}-x_{1}')=p(x_{2}'-x_{2})=0$  por que $x_{2}'-x_{2}\in Im(I-p)=Ker(p)$ 

^c34834

>[!Proposition] Propiedades de espacios complementarios y de proyecciones sobre espacios MEMO
>$U,V\subseteq X$ son complementarios entonces:
>- (a)  $U$ y $V$ complementarios topologicos sii $P_{U}$ y $P_{V}$ son continuas
>- (b) Si $U,V$ son complementarios topologicos entonces $U,V$ son cerrados
>- (c) $X$ es Banach. Si $U$ y $V$ son cerrados y complementarios entonces son complementarios topologicos 
>>[!Proof]-
>>- (a) 
>>	1. $U,V$ complementarios topologicos $\iff$  $x \rightarrow u_{x}$ y $x \rightarrow v_{x}$ son funciones continuas $\iff$ $P_{U},P_{V}$ son continuas  
>>- (b) 
>>	1. $P_{U}$ es continua por (a)
>>	2. Entonces $U=Im(P_{U})=Ker(I-P_{U})$ cerrado por que $I-P_{U}$ continua por 1. y $Ker(I-P_{U})$ es preimagen del $\{ 0 \}$ que es cerrado
>>- (c) 
>>	1. Como $P_{U}+P_{V}=Id$ por [[Teórico 13#^c34834]]. Entonces basta ver que $P_{U}$ es continua (por que entonces $P_{V}=Id+P_{U}$ seria continua tambien) 
>>	2. Por [[Teórico 7#^c58dff]] basta ver que $gr(P_{U})$ es cerrado. 
>>	3. Sea $\{( x_{n},P_{U}x_{n} ) \} \subseteq gr(P_{U})$ tal que $(x_{n} ,P_{U}x_{n} )\longrightarrow (x,y)\in X\times X$ queremos $y=P_{U}x$ 
>>	4. Como $\{P_{U}x_{n} \}\subseteq U$ con $U$ cerrado e entonces $y\in U$. 
>>	5. Notar que cmoo $U$ y $V$ son complementarios de [[Teórico 13#^c34834]] se desprende que $Id-P_{U}=P_{V}$ osea que $Im(Id-P_{U})=Im(P_{V})\subseteq V$   
>>	6. Entonces como $\{(I-P_{U})x_{n} \}\subseteq V$ podemos hacer lo mismo que en 4. osea $x-y=\lim x_{n} -P_{U}x_{n} \in V$ por qué $V$ cerrado
>>	7. Como $P_{U}(x)=x\ \ \forall x\in U$ y $P_{U}x=0\ \ \forall x\in V$ tenemos $0=P_{U}(x-y)=P_{U}x-P_{U}y=P_{U}(x)-y$   

^40906d

>[!Remark]
>Dado $U\subseteq X$ sub espacio cerrado $\exists V\subseteq X$ tal que $U$ y $V$ son complementos topologicos?.
>Por resultados anteriores esto es equivalente a que exista proyeccion continua $P$ tal que $U=Im P$. Pues en tal caso tomamos $V=Im(I-P)$ (ejercicio)
>Si $\dim V<\infty$ es cierto (ej). 
>En general esto no es cierto pero si vale en espacios de Hilbert (Lo vemos mas adelante)

>[!Lemma] Sucesion acotada de funciones tiene limite MEMO
>Sea $X$ Banach y sea $S= \{s_{\alpha }: \alpha \in A\}$  tal que $\overline{Sp}S=X$. Si $\{f_{n} \}$ es una sucesion acotada en $X'$ y $\{f_{n} (s_{\alpha })\}$ converge $\forall \alpha \in A$ entonces $\exists f\in X'$ tal que $f_{n} (x)\longrightarrow f(x)\quad \forall x\in X$  
>>[!Proof]-
>>1. Sea $x\in X$ como $\{f_{n} \}$ es acotada $\exists c>0$ tal que $\lVert f_{n}  \rVert \leq c \quad \forall n\in \mathbb{N}$.
>>2. Ahora dado $\epsilon >0$ existe $s\in Sp(S)$ con $\lVert x-s \rVert \leq \frac{\epsilon }{3c}$. 
>>3. Entonces $$\forall n\quad\lvert f_{n} (x)-f_{n} (s) \rvert \leq \lVert f_{n}  \rVert \lVert x-s \rVert \leq \frac{\epsilon }{3}$$
>>4. Luego $$\lvert f_{n} (x)-f_{m}(x) \rvert \leq \lvert f_{n} (x)-f_{n} (s) \rvert +\lvert f_{n} (s)-f_{m}(s) \rvert +\lvert f_{m}(s)-f_{m}(x) \rvert \leq \frac{2}{3}\epsilon +\lvert f_{n} (s)-f_{m}(s) \rvert $$
>>5. Pero $\lvert f_{n}(s)-f_{m}(s) \rvert \leq \frac{\epsilon }{3}$ si $n,m\geq n_{0}$ por que $\{f_{n}(s_{\alpha })\}$ converge (entonces es de Cauchy) $\forall \alpha \in A$ y $s$ es combinacion lineal finita de elementos de $S$
>>6. Entonces $\{f_{n}(x)\}$ es de Cauchy entonces converge. Luego podemos definir $f(x)=\lim_{n}f_{n}(x)$
>>7. Y ver continuidad de $f$ sale por [[Teórico 8#^02b4aa]] 

^99815e
