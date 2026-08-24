# Funciones analíticas

## Diferenciabilidad compleja y funciones analiticas
>[!Definition] Derivada compleja
>Sea $G\subseteq\mathbb{C}$ abierto y $f:G\to\mathbb{C}$. Decimos que $f$ es diferenciable en $a\in G$ si existe
>$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
>=\lim_{z\to a}\frac{f(z)-f(a)}{z-a}.$$
>Si esto ocurre en todo punto de $G$, decimos que $f$ es diferenciable en $G$.

>[!Proposition] Diferenciabilidad implica continuidad
>Si $f$ es diferenciable en $a$, entonces es continua en $a$.
>
>>[!Proof]-
>>1. Para $z\neq a$, $$|f(z)-f(a)|=\left|\frac{f(z)-f(a)}{z-a}\right||z-a|.$$
>>2. Al hacer $z\to a$, el primer factor tiende a $|f'(a)|$ y el segundo a $0$; por lo tanto, $$|f(z)-f(a)|\longrightarrow |f'(a)|\cdot0=0.$$

>[!Definition] Función analítica
>Una función $f:G\to\mathbb{C}$ es **analítica** si es continuamente diferenciable en $G$.

>[!Proposition] Reglas de derivación
>Si $f$ y $g$ son analíticas en $G$, entonces $f+g$ y $f.g$ son diferenciables y cumplen:
>$$ (f+g)'=f'+g',\qquad (fg)'=f'g+fg'.$$
>Si $g(z)\neq0$ en $G$, $\frac{f}{g}$ es diferenciable y cumple
>$$\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}.$$
>Por lo tanto las tres son analíticas.
>
>>[!Proof]-
>>- **Suma.**
>>	1. Sea $a\in G$. Entonces
>>	$$\frac{(f+g)(z)-(f+g)(a)}{z-a}=\frac{f(z)-f(a)}{z-a}+\frac{g(z)-g(a)}{z-a}.$$
>>	2. Al hacer $z\to a$ se obtiene $(f+g)'(a)=f'(a)+g'(a)$.
>>	3. Como $f'$ y $g'$ son continuas, $(f+g)'$ también lo es. Por lo tanto $f+g$ es analítica.
>>- **Producto.**
>>	1. Sea $a\in G$. Sumando y restando $f(a)g(z)$,
>>	$$\begin{aligned}\frac{(fg)(z)-(fg)(a)}{z-a}&=\frac{f(z)g(z)-f(a)g(z)+f(a)g(z)-f(a)g(a)}{z-a}\\&=g(z)\frac{f(z)-f(a)}{z-a}+f(a)\frac{g(z)-g(a)}{z-a}.\end{aligned}$$
>>	2. Como $g$ es diferenciable, es continua, de modo que $g(z)\to g(a)$. Al hacer $z\to a$ se obtiene $$(fg)'(a)=f'(a)g(a)+f(a)g'(a).$$
>>	3. El lado derecho es continuo porque $f$, $g$, $f'$ y $g'$ lo son. Por lo tanto $fg$ es analítica.
>>- **Inverso y cociente.**
>>	1. Basta probar que $1/g$ es analítica si $g(z)\neq0$ en $G$, y aplicar el producto.
>>	2. Sea $a\in G$. Entonces
>>	$$\frac{\frac1{g(z)}-\frac1{g(a)}}{z-a}=\frac{g(a)-g(z)}{(z-a)g(z)g(a)}=-\frac1{g(z)g(a)}\cdot\frac{g(z)-g(a)}{z-a}.$$
>>	3. Como $g$ es continua y no se anula, $g(z)\to g(a)\neq0$. Al hacer $z\to a$ se obtiene $$\left(\frac1g\right)'(a)=-\frac{g'(a)}{g(a)^2}.$$
>>	4. El lado derecho es continuo. Luego $1/g$ es analítica y, por el producto,
>>	$$\left(\frac fg\right)'=\left(f\cdot\frac1g\right)'=f'\cdot\frac1g+f\cdot\left(-\frac{g'}{g^2}\right)=\frac{f'g-fg'}{g^2}.$$

^e54e60

>[!Remark] Caracterizaciones equivalentes de la derivada
>Son equivalentes:
>
>1. $\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=f'(a)$.
>2. $\displaystyle\lim_{z\to a}\frac{f(z)-f(a)}{z-a}=f'(a)$.
>3. Para toda sucesión $\{h_n\}$ con $h_n\to0$, $h_n\neq0$ y $a+h_n\in G$,
>   $$\lim_{n\to\infty}\frac{f(a+h_n)-f(a)}{h_n}=f'(a).$$

>[!Example] Polinomios
>La identidad $f(z)=z$ es analítica y $f'(z)=1$. En consecuencia, $z^n$ y todo polinomio
>$$P(z)=\sum_{n=0}^{N}a_nz^n$$
>son funciones analíticas.
>
>>[!Proof]-
>>1. El cociente incremental de la identidad es $1$, de modo que $f'(z)=1$ y $f'$ es continua. Osea $f$ es analitica
>>2. Por inducción y la regla del producto, $z^n$ es analítica y $(z^n)'=nz^{n-1}$.
>>3. Por la regla de la suma, todo polinomio es analítico y
>>$$P'(z)=\sum_{n=1}^{N}na_nz^{n-1}.$$

>[!Theorem] Regla de la cadena
>Si $f:G\to\Omega$ y $g:\Omega\to\mathbb{C}$ ($G,\Omega$ abiertos) son analíticas y $f(G)\subseteq\Omega$, entonces $g\circ f$ es analítica y $$ (g\circ f)'(z)=g'(f(z))f'(z).$$
>
>>[!Proof]-
>>1. **Caracterización secuencial del límite.** Se tiene $\lim_{z\to a}f(z)=L$ si y solo si, para toda sucesión $\{z_n\}\subseteq B(a,r)\setminus\{a\}$ con $z_n\to a$, se cumple $f(z_n)\to L$.
>>2. Para ver que $g\circ f$ es diferenciable en $z_0\in G$, hay que probar que existe
>>$$\lim_{h\to0}\frac{g(f(z_0+h))-g(f(z_0))}{h}$$
>>y que coincide con $g'(f(z_0))f'(z_0)$. Por el paso 1, basta tomar una sucesión $\{h_n\}\subseteq B(0,r)\setminus\{0\}$ con $h_n\to0$ y $z_0+h_n\in G$, y ver que
>>$$\lim_{n\to\infty}\frac{g(f(z_0+h_n))-g(f(z_0))}{h_n}=g'(f(z_0))f'(z_0).$$
>>- **Caso 1.** $f(z_0+h_n)\neq f(z_0)$ para todo $n$.
>>	1. Sea $k_n=f(z_0+h_n)-f(z_0)$. Como $f$ es diferenciable en $z_0$, es continua, de modo que $z_0+h_n\to z_0$ implica $f(z_0+h_n)\to f(z_0)$. Así $k_n\to0$.
>>	2. Como $\Omega$ es abierto y $f(z_0)\in\Omega$, existe $r>0$ tal que $B(f(z_0),r)\subseteq\Omega$. Como $k_n\to0$, para $n$ grande se tiene $k_n\in B(0,r)$ y $f(z_0)+k_n\in\Omega$.
>>	3. Entonces
>>	$$\frac{g(f(z_0+h_n))-g(f(z_0))}{h_n}=\frac{g(f(z_0)+k_n)-g(f(z_0))}{k_n}\cdot\frac{f(z_0+h_n)-f(z_0)}{h_n}.$$
>>	4. Como $f$ es analítica en $G$, $f'(z_0)$ existe. Como $g$ es analítica en $\Omega$ y $f(G)\subseteq\Omega$, $g'(f(z_0))$ existe. Por la caracterización secuencial,
>>	$$\frac{f(z_0+h_n)-f(z_0)}{h_n}\to f'(z_0),\qquad\frac{g(f(z_0)+k_n)-g(f(z_0))}{k_n}\to g'(f(z_0)).$$
>>	5. El producto tiende a $g'(f(z_0))f'(z_0)$.
>>- **Caso 2.** $f(z_0+h_n)=f(z_0)$ para infinitos $n$.
>>	1. Si vale para todo $n$, entonces el cociente incremental de $g\circ f$ es $0$. Además $\frac{f(z_0+h_n)-f(z_0)}{h_n}=0$, de modo que $f'(z_0)=0$ y $g'(f(z_0))f'(z_0)=0$. El límite existe y coincide con el valor pedido.
>>	2. En general, partimos $\{h_n\}$ en dos subsucesiones (ambas tienden a $0$, porque $h_n\to0$):
>>	- $\{\ell_n\}$ con $f(z_0+\ell_n)=f(z_0)$;
>>	- $\{k_n\}$ con $f(z_0+k_n)\neq f(z_0)$.
>>	3. Sobre $\{\ell_n\}$,
>>	$$\frac{g(f(z_0+\ell_n))-g(f(z_0))}{\ell_n}=0,$$
>>	de modo que esa subsucesión tiende a $0$. Como $f$ es diferenciable en $z_0$,
>>	$$f'(z_0)=\lim_{n\to\infty}\frac{f(z_0+h_n)-f(z_0)}{h_n},$$
>>	y la subsucesión $\frac{f(z_0+\ell_n)-f(z_0)}{\ell_n}=0$ fuerza $f'(z_0)=0$.
>>	4. Sobre $\{k_n\}$, sea $\beta_n=f(z_0+k_n)-f(z_0)$. Entonces $\beta_n\to0$ y, como en el caso 1,
>>	$$\frac{g(f(z_0+k_n))-g(f(z_0))}{k_n}=\frac{g(f(z_0)+\beta_n)-g(f(z_0))}{\beta_n}\cdot\frac{f(z_0+k_n)-f(z_0)}{k_n}.$$
>>	El primer factor tiende a $g'(f(z_0))$ y el segundo es una subsucesión del cociente incremental de $f$, que tiende a $f'(z_0)=0$. El producto tiende a $0$.
>>	5. Ambas subsucesiones del cociente de $g\circ f$ tienden a $0$. Por lo tanto
>>	$$\frac{g(f(z_0+h_n))-g(f(z_0))}{h_n}\to0=g'(f(z_0))f'(z_0).$$
>>6. En ambos casos existe $(g\circ f)'(z_0)=g'(f(z_0))f'(z_0)$. El lado derecho es continuo porque $g'$, $f$ y $f'$ lo son. Luego $g\circ f$ es analítica.

^fe9a3d

>[!Remark] Analiticidad versus diferenciabilidad
>Por definición, $f$ analítica implica $f$ diferenciable. El recíproco en $\mathbb{C}$ también vale: si $f$ es diferenciable en $G$, entonces $f'$ es continua (esto se verá más adelante). En $\mathbb{R}$ no es cierto: diferenciable no implica derivada continua.

>[!Example] Un ejemplo real
>La función $$f(x)=\begin{cases}x^2\sin(1/x),&x\neq0,\\0,&x=0,\end{cases}$$es derivable en todo $\mathbb{R}$, pero $f'$ no es continua en $0$.
>>[!Proof]-
>>1. Si $x\neq0$, $f$ es composición de funciones suaves. Asi que es suave
>>2. En $x=0$,
>>$$f'(0)=\lim_{h\to0}\frac{h^2\sin(1/h)}{h}=\lim_{h\to0}h\sin(1/h)=0.$$
>>3. Así $f$ es derivable en todo $\mathbb{R}$ y
>>$$f'(x)=\begin{cases}2x\sin(1/x)-\cos(1/x),&x\neq0,\\0,&x=0.\end{cases}$$
>>4. Como $\cos(1/x)$ no tiene límite cuando $x\to0$, $f'$ no es continua en $0$.

>[!Remark]
>Toda función analítica es infinitamente diferenciable y, además, tiene un desarrollo en serie de potencias alrededor de cada punto de su dominio. Por lo tanto la derivada compleja no es una simple generalización de la derivada en $\mathbb{R}$.

>[!Remark] Diferenciabilidad real versus compleja
>Hay funciones $f:G\subseteq\mathbb{C}\to\mathbb{C}$ diferenciables como funciones de dos variables reales en todo $\mathbb{R}^2\simeq\mathbb{C}$, pero no diferenciables en sentido complejo.
>

>[!counterexample] La funcion conjugado no es diferenciable en $\mathbb{C}$ 
>La funcion $$f(z)=\bar z$$ es diferenciable como funcion de $\mathbb{R}^{2}$ pero no lo es como funcion de $\mathbb{C}$ 
>>[!Proof]-
>>1. Como función $\mathbb{R}^2\to\mathbb{R}^2$, el diferencial es $d_zf(h)=\bar h$. En efecto $$\frac{f(z+h)-f(z)-d_zf(h)}{|h|}=\frac{\overline{z+h}-\bar z-\bar h}{|h|}=0.$$por lo tanto $f$ es (realmente) diferenciable en todo punto.
>>2. En sentido complejo, $$\lim_{h\to0}\frac{f(z+h)-f(z)}{h}=\lim_{h\to0}\frac{\bar h}{h}.$$
>>3. Si $h=t\in\mathbb{R}_{>0}$, entonces $\bar h/h=1$. Si $h=it$ con $t\in\mathbb{R}\setminus\{0\}$, entonces $\bar h/h=-1$. Al cambiar la dirección el límite toma valores distintos, de modo que no existe.

>[!proposition] La derivada compleja como diferencial real
>Si $f:G\subseteq\mathbb{C}\to\mathbb{C}$ es diferenciable en $z_0\in G$, entonces $f$, vista como función $\mathbb{R}^2\to\mathbb{R}^2$, es diferenciable en $z_0=(x_0,y_0)$ y
>$$d_{z_0}f(h)=f'(z_0)h,\qquad h\in\mathbb{C}\simeq\mathbb{R}^2.$$
>
>>[!Proof]-
>>1. Hay que hallar una aplicación $\mathbb{R}$-lineal $L:\mathbb{R}^2\to\mathbb{R}^2$ tal que
>>$$\frac{f(z_0+h)-f(z_0)-L(h)}{|h|}\longrightarrow0\qquad(h\to0).$$
>>2. Tomamos $L(h)=f'(z_0)h$. Entonces
>>$$\frac{f(z_0+h)-f(z_0)-f'(z_0)h}{|h|}=\left(\frac{f(z_0+h)-f(z_0)}{h}-f'(z_0)\right)\frac{h}{|h|}.$$
>>3. El primer factor tiende a $0$ por diferenciabilidad compleja y $\bigl|h/|h|\bigr|=1$. El producto tiende a $0$.
>>4. Luego $f$ es diferenciable como función de dos variables reales y $d_{z_0}f(h)=f'(z_0)h$.

## Series de potencias y derivación término a término

>[!Remark] Limsup de un producto
>Si $x_n\to x>0$ y $y_n\geq0$, entonces
>$$\limsup_{n\to\infty}(x_ny_n)=x\limsup_{n\to\infty}y_n.$$
>En general no vale que el limsup de un producto sea el producto de los limsups: si ambos factores oscilan, sus picos pueden alinearse. Por ejemplo, $x_n=1$ si $n$ es par y $2$ si $n$ es impar, e $y_n=2$ si $n$ es par y $1$ si $n$ es impar; entonces $x_ny_n=2$ para todo $n$, de modo que $\limsup(x_ny_n)=2$, mientras que $\limsup x_n\cdot\limsup y_n=2\cdot2=4$.
>
>>[!Proof]-
>>1. **Desigualdad $\leq$.** Si $x_{n_k}y_{n_k}\to L\in[0,+\infty]$ a lo largo de una subsucesión, como $x_{n_k}\to x>0$, se tiene $y_{n_k}\to L/x$ a lo largo de la misma subsucesión. Por lo tanto $L/x\leq\limsup y_n$, o sea $L\leq x\limsup y_n$. Tomando el máximo sobre todas las subsucesiones, $\limsup(x_ny_n)\leq x\limsup y_n$.
>>2. **Desigualdad $\geq$.** Sea $y_{n_k}\to\limsup y_n$ una subsucesión convergente. Entonces $x_{n_k}y_{n_k}\to x\limsup y_n$, y toda subsucesión convergente del producto acota por debajo su limsup. Así $\limsup(x_ny_n)\geq x\limsup y_n$.

>[!Proposition] Derivadas de una serie de potencias
>Sea
>$$f(z)=\sum_{n=0}^{\infty}a_n(z-a)^n$$
>con radio de convergencia $R>0$. Para cada $k\geq1$, la serie
>$$\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-a)^{n-k}$$
>tiene el mismo radio $R$. Además, $f$ es infinitamente diferenciable en $B(a,R)$ y
>$$f^{(k)}(z)=\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-a)^{n-k}.$$
>En particular,
>$$a_n=\frac{f^{(n)}(a)}{n!}.$$
>
>>[!Proof]-
>>- **(a) El radio no cambia.**
>>	1. Podemos suponer $a=0$. La serie derivada formalmente es $$\sum_{n=1}^{\infty}na_nz^{n-1}=\sum_{n=0}^{\infty}(n+1)a_{n+1}z^n.$$
>>	2. Su radio $R'$ cumple $$\frac1{R'}=\limsup_{n\to\infty}|(n+1)a_{n+1}|^{1/n}=\limsup_{n\to\infty}(n+1)^{1/n}|a_{n+1}|^{1/n}.$$ Como $(n+1)^{1/n}\to1$, el remark sobre el limsup de un producto da $$\limsup_{n\to\infty}(n+1)^{1/n}|a_{n+1}|^{1/n}=\limsup_{n\to\infty}|a_{n+1}|^{1/n}.$$
>>	3. Como $\ln(n+1)/n\to0$, se tiene $(n+1)^{1/n}\to1$. Además $$|a_{n+1}|^{1/n}=\bigl(|a_{n+1}|^{1/(n+1)}\bigr)^{(n+1)/n},$$ y como $(n+1)/n\to1$ resulta $$\limsup_{n\to\infty}|a_{n+1}|^{1/n}=\limsup_{n\to\infty}|a_n|^{1/n}=\frac1R.$$ Así $R'=R$.
>>	4. Por inducción, la serie $k$ veces derivada formalmente tiene el mismo radio $R$.
>>- **(b) Diferenciación término a término, caso $k=1$.**
>>	1. Sea $g(z)=\sum_{n=1}^{\infty}na_nz^{n-1}$, que converge en $B(0,R)$. Fijemos $w\in B(0,R)$ y elijamos $r$ con $|w|<r<R$. Para $|h|$ suficientemente chico se tiene $|w+h|<r$.
>>	2. Escribimos $f=S_N+R_N$, donde $S_N=\sum^{N}_{n=1}a_{n}z^{n}$ y $R_{N}$ la cola desde $N+1$. Entonces
>>	$$\frac{f(w+h)-f(w)}{h}-g(w)=\left(\frac{S_N(w+h)-S_N(w)}{h}-S_N'(w)\right)+\bigl(S_N'(w)-g(w)\bigr)+\frac{R_N(w+h)-R_N(w)}{h}.$$
>>	3. Usando $z^n-w^n=(z-w)\sum_{j=0}^{n-1}z^{n-1-j}w^j$ con $z=w+h$,
>>	$$\frac{R_N(w+h)-R_N(w)}{h}=\sum_{n=N+1}^{\infty}a_n\sum_{j=0}^{n-1}(w+h)^{n-1-j}w^j,$$
>>	y por lo tanto $$\left|\frac{R_N(w+h)-R_N(w)}{h}\right|\leq\sum_{n=N+1}^{\infty}n|a_n|r^{n-1}.$$
>>	4. La serie $\sum n|a_n|r^{n-1}$ converge porque su radio es $R>r$. Dado $\varepsilon>0$, existe $N_0$ tal que la cola es menor que $\varepsilon/3$ para todo $N\geq N_0$, independientemente de $h$ (siempre que $|w|,|w+h|<r$).
>>	5. Como $S_N'\to g$ puntualmente (esto es usando *(a)* la derivada tiene el mismo radio de convergencia) , existe $N\geq N_0$ tal que $|S_N'(w)-g(w)|<\varepsilon/3$.
>>	6. Fijado ese $N$, $S_N$ es un polinomio, de modo que su cociente incremental tiende a $S_N'(w)$. Existe $\delta>0$ tal que si $0<|h|<\delta$ entonces el primer término es menor que $\varepsilon/3$.
>>	7. Así, $f'(w)=g(w)$ para todo $w\in B(0,R)$.
>>- **(c) Derivadas de orden superior y coeficientes.**
>>	1. Como $f'$ es a su vez una serie de potencias de radio $R$, el caso $k=1$ aplicado a $f'$ da $f''$ y, por inducción, $f$ es infinitamente diferenciable con
>>	$$f^{(k)}(z)=\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-a)^{n-k}.$$
>>	2. Evaluando en $z=a$, el único término no nulo es el de índice $n=k$, que vale $k!a_k$. Por lo tanto $$a_k=\frac{f^{(k)}(a)}{k!}.$$

>[!Corollary] Analiticidad de la suma
>Cualquier función definida por una serie de potencias es analítica en su disco de convergencia.
>
>>[!Proof]-
>>1. Por la proposición anterior, $f$ es diferenciable en $B(a,R)$ y $f'$ coincide con una serie de potencias de radio $R$.
>>2. Toda serie de potencias converge uniformemente en compactos del disco (teorema de Abel), de modo que $f'$ es continua en $B(a,R)$.
>>3. Luego $f$ es continuamente diferenciable, es decir, analítica.

>[!Proposition] Derivada nula
>Si $G$ es abierto y conexo y $f:G\to\mathbb{C}$ es analítica con $f'(z)=0$ para todo $z\in G$, entonces $f$ es constante.
>
>>[!Proof]-
>>1. Fijemos $z_0\in G$ y sea $w_0=f(z_0)$. Pongamos $$A=\{z\in G:f(z)=w_0\}.$$ El conjunto $A$ es no vacío y queremos ver que $A=G$.
>>2. Como $G$ es conexo, basta probar que $A$ es abierto y cerrado en $G$.
>>3. **$A$ es cerrado en $G$.** Por ser preimagen de cerrado $\{ w_{0} \}$ 
>>4. **$A$ es abierto en $G$.** Sea $a\in A$. Como $G$ es abierto, existe $\varepsilon>0$ tal que $B(a,\varepsilon)\subseteq G$. Dado $z\in B(a,\varepsilon)$, el segmento $\gamma(t)=tz+(1-t)a$ para $t\in[0,1]$ está contenido en la bola. Definimos $g(t)=f(\gamma(t))$. Entonces $$g'(t)=f'(\gamma(t))(z-a)=0,$$ de modo que $g$ es constante en $[0,1]$ (aplicando el teorema del valor medio a las partes real e imaginaria). 
>>5. En particular $$f(z)=g(1)=g(0)=f(a)=w_0,$$ y por lo tanto $z\in A$ concluyendo que $B(a,\varepsilon)\subseteq A$.
>>6. Luego $A=G$ y $f$ es constante.

^bb0732

>[!Remark] Por qué se necesita conexidad
>En $G=B(0,1)\cup B(3,1)$, la función que vale $0$ en una componente y $1$ en la otra tiene derivada nula, pero no es constante en todo $G$.

## Función exponencial

>[!lemma] Derivada de la exponencial compleja
>Si definimos $$e^z:=\sum_{n=0}^{\infty}\frac{z^n}{n!}.$$
>Entonces la serie tiene radio infinito, de modo que $e^z$ es entera y
>$$(e^z)'=e^z.$$
>
>>[!Proof]-
>>1. Por el criterio del cociente, $$R=\lim_{n\to\infty}\frac{|a_n|}{|a_{n+1}|}=\lim_{n\to\infty}(n+1)=\infty.$$ Luego $e^z$ es entera.
>>2. Derivando término a término, $$(e^z)'=\sum_{n=1}^{\infty}n\frac{z^{n-1}}{n!}=\sum_{n=1}^{\infty}\frac{z^{n-1}}{(n-1)!}=\sum_{k=0}^{\infty}\frac{z^k}{k!}=e^z.$$

>[!Proposition] Propiedades de la exponencial
>Para $a,b,z\in\mathbb{C}$:
>
>1. $e^{a+b}=e^ae^b$ y $e^0=1$.
>2. $\overline{e^z}=e^{\bar z}$.
>3. $e^ze^{-z}=1$, por lo que $e^z\neq0$. Además $(e^{z})^{-1}=e^{-z}$ 
>4. Si $z=x+iy$, entonces
>   $$e^z=e^x(\cos y+i\sin y),\qquad |e^z|=e^x=e^{\operatorname{Re}z}.$$
>5. $e^{i\theta}=\cos\theta+i\sin\theta$.
>6. La exponencial es $2\pi i$-periódica:
>   $$e^{z+2\pi i}=e^z.$$
>7. $|e^{i\theta}|=1$ para todo $\theta\in\mathbb{R}$.
>
>>[!Proof]-
>>- **1.**
>>	1. Directamente de la definición por serie, $$e^0=\sum_{n=0}^{\infty}\frac{0^n}{n!}=1.$$
>>	2. Fijados $a,b\in\mathbb{C}$, definimos $g(z)=e^ze^{a+b-z}$ en $\mathbb{C}$. Por la [[FA - Teo2#^e54e60|regla del producto]], $$g'(z)=(e^z)'e^{a+b-z}+e^z(e^{a+b-z})'=e^ze^{a+b-z}-e^ze^{a+b-z}=0\qquad(z\in\mathbb{C}).$$
>>	3. Como $\mathbb{C}$ es abierto, conexo, $g$ analitica y $g'\equiv0$, entonces por [[FA - Teo2#^bb0732|derivada nula implica constante]] tenemos que $g$ es constante. Evaluando en $z=0$ y $z=a$: $$e^{a+b}=g(0)=g(a)=e^ae^b.$$ 
>>- **2.**
>>	1. Los coeficientes $1/n!$ son reales, de modo que $$\overline{e^z}=\overline{\sum_{n=0}^{\infty}\frac{z^n}{n!}}=\sum_{n=0}^{\infty}\frac{\bar z^n}{n!}=e^{\bar z}.$$
>>- **3.**
>>	1. Por el punto 1, $e^ze^{-z}=e^{z-z}=e^0=1$. En particular $e^z\neq0$.
>>- **5.**
>>	1. Separamos la serie de $e^{i\theta}$ en términos pares e impares:
>>	$$e^{i\theta}=\sum_{n=0}^{\infty}\frac{(i\theta)^n}{n!}=\sum_{k=0}^{\infty}\frac{(i\theta)^{2k}}{(2k)!}+\sum_{k=0}^{\infty}\frac{(i\theta)^{2k+1}}{(2k+1)!}.$$
>>	2. Como $i^{2k}=(i^2)^k=(-1)^k$ e $i^{2k+1}=i(-1)^k$,
>>	$$e^{i\theta}=\sum_{k=0}^{\infty}(-1)^k\frac{\theta^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}(-1)^k\frac{\theta^{2k+1}}{(2k+1)!}=\cos\theta+i\sin\theta.$$
>>- **4.**
>>	1. Escribimos $z=x+iy$. Por el punto 1, $$e^z=e^xe^{iy}=e^x(\cos y+i\sin y).$$
>>	2. Si $x\in\mathbb{R}$, la serie de $e^x$ es real. Además $e^x\neq0$ y $e^x=e^{\overline{x}}=\overline{e^x}$, de modo que $e^x\in\mathbb{R}$. Como $e^x$ es continua, no se anula y $e^0=1>0$, se tiene $e^x>0$. Luego $|e^x|=e^x$.
>>	3. Así $$|e^z|=|e^x|\,|\cos y+i\sin y|=e^x=e^{\operatorname{Re}z}.$$
>>- **6.**
>>	1. Por los puntos 1 y 5, $$e^{z+2\pi i}=e^ze^{2\pi i}=e^z(\cos 2\pi+i\sin 2\pi)=e^z.$$
>>- **7.**
>>	1. Por el punto 5, si $\theta\in\mathbb{R}$, se tiene $$|e^{i\theta}|=|\cos\theta+i\sin\theta|=\sqrt{\cos^2\theta+\sin^2\theta}=1,$$ o equivalentemente por el punto 4, $$|e^{i\theta}|=e^{\operatorname{Re}(i\theta)}=e^0=1.$$

>[!Definition] Seno y coseno complejos
>$$\cos z=\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k}}{(2k)!},\qquad
>\sin z=\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k+1}}{(2k+1)!}.$$

>[!Exercise] Identidades trigonométricas
>Probar que
>$$ (\cos z)'=-\sin z,\qquad (\sin z)'=\cos z,$$
>$$\cos z=\frac{e^{iz}+e^{-iz}}2,\qquad \sin z=\frac{e^{iz}-e^{-iz}}{2i},$$
>$$\cos^2z+\sin^2z=1.$$
>
>>[!Proof]-
>>1. Ambas series tienen radio infinito. Derivando término a término,
>>$$(\cos z)'=\sum_{k=1}^{\infty}(-1)^k\frac{2k\,z^{2k-1}}{(2k)!}=\sum_{k=1}^{\infty}(-1)^k\frac{z^{2k-1}}{(2k-1)!}=-\sin z,$$
>>y análogamente $(\sin z)'=\cos z$.
>>2. Desarrollando,
>>$$\begin{aligned}e^{iz}&=\sum_{n=0}^{\infty}\frac{(iz)^n}{n!}=\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k+1}}{(2k+1)!}=\cos z+i\sin z,\\e^{-iz}&=\cos z-i\sin z.\end{aligned}$$
>>3. Sumando y restando estas identidades se obtiene
>>$$\cos z=\frac{e^{iz}+e^{-iz}}2,\qquad\sin z=\frac{e^{iz}-e^{-iz}}{2i}.$$
>>4. Por lo tanto
>>$$\cos^2z+\sin^2z=\left(\frac{e^{iz}+e^{-iz}}2\right)^2+\left(\frac{e^{iz}-e^{-iz}}{2i}\right)^2=\frac{e^{2iz}+2+e^{-2iz}}{4}-\frac{e^{2iz}-2+e^{-2iz}}{4}=1.$$

>[!Proposition] Soluciones de $e^z=w$
>Si $w\neq0$, entonces
>$$e^z=w\iff z=\ln|w|+i(\arg w+2k\pi),\qquad k\in\mathbb{Z}.$$
>
>>[!Proof]-
>>1. Sea $z=x+iy$ y escribamos $w=|w|(\cos\theta+i\sin\theta)$, con $\theta=\arg w$.
>>2. La igualdad $e^z=w$ equivale a $$e^x(\cos y+i\sin y)=|w|(\cos\theta+i\sin\theta).$$
>>3. Igualando módulos, $e^x=|w|$, de modo que $x=\ln|w|$ (logaritmo real).
>>4. Igualando argumentos, $y=\theta+2k\pi$ para algún $k\in\mathbb{Z}$.
>>5. Recíprocamente, si $z=\ln|w|+i(\theta+2k\pi)$, entonces $$e^z=e^{\ln|w|}e^{i(\theta+2k\pi)}=|w|(\cos\theta+i\sin\theta)=w.$$

## Logaritmo complejo

>[!Definition] Rama del logaritmo
>Sea $G\subseteq\mathbb{C}$ abierto y conexo. Una función continua $f:G\to\mathbb{C}$ es una **rama del logaritmo** si
>$$e^{f(z)}=z\qquad(z\in G).$$

>[!Proposition] Unicidad salvo múltiplos de $2\pi i$
>Si $f$ es una rama del logaritmo en $G$, todas las ramas son
>$$f(z)+2k\pi i,qquad k\in\mathbb{Z}.$$
>
>>[!Proof]-
>>1. Si $f$ es una rama y $k\in\mathbb{Z}$, entonces $g:=f+2k\pi i$ es continua y $$e^{g(z)}=e^{f(z)}e^{2k\pi i}=z\cdot1=z,$$ de modo que $g$ también es una rama.
>>2. Recíprocamente, si $f$ y $g$ son ramas, $e^{f(z)}=e^{g(z)}$, o sea $e^{f(z)-g(z)}=1$.
>>3. Escribiendo $c=f(z)-g(z)$, se tiene $|e^c|=e^{\operatorname{Re}c}=1$, luego $\operatorname{Re}c=0$ y $c=i\theta$. Entonces $e^{i\theta}=\cos\theta+i\sin\theta=1$, de modo que $\theta=2k\pi$ para algún $k\in\mathbb{Z}$. Así $$f(z)-g(z)\in2\pi i\mathbb{Z}.$$
>>4. La función $k(z)=(f(z)-g(z))/(2\pi i)$ es continua y toma valores enteros. Como $G$ es conexo, su imagen es conexa en $\mathbb{Z}$, luego $k$ es constante.
>>5. Por lo tanto $f=g+2k\pi i$ para un único $k\in\mathbb{Z}$.

>[!Remark] No existe una rama en un dominio que contenga al origen
>Si $0\in G$, la igualdad $e^{f(0)}=0$ sería imposible, pues la exponencial nunca se anula.

>[!Definition] Rama principal
>En
>$$G=\mathbb{C}\setminus(-\infty,0],$$
>cada $z$ tiene un argumento único $\operatorname{Arg}z\in(-\pi,\pi)$. Se define
>$$\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z.$$
>Esta es la **rama principal** del logaritmo; es analítica y
>$$e^{\operatorname{Log}z}=z,\qquad (\operatorname{Log}z)'=\frac1z.$$
>
>>[!Proof]-
>>1. Dado $z\in G$, escribimos $z=re^{i\theta}$ con $r=|z|$ y $\theta=\operatorname{Arg}z\in(-\pi,\pi)$. Entonces $$e^{\operatorname{Log}z}=e^{\ln r+i\theta}=re^{i\theta}=z.$$
>>2. Sea $z_0\in G$. Como $G$ es abierto y $0\notin G$, existe $r>0$ tal que $B(z_0,r)\subseteq G$ y $0\notin B(z_0,r)$. En esa bola, $\operatorname{Arg}$ no puede saltar de valores cercanos a $\pi$ a valores cercanos a $-\pi$, de modo que
>>$$|\operatorname{Arg}z-\operatorname{Arg}z_0|<\pi\qquad\bigl(z\in B(z_0,r)\bigr).$$
>>3. Escribamos $z=\rho e^{i\theta}$ y $z_0=\rho_0 e^{i\theta_0}$. Entonces
>>$$|\operatorname{Log}z-\operatorname{Log}z_0|\leq\bigl|\ln(\rho/\rho_0)\bigr|+|\theta-\theta_0|.$$
>>Si $z\to z_0$, se tiene $\rho\to\rho_0$ y $\ln(\rho/\rho_0)\to0$. Además $$\frac{z}{z_0}=\frac{\rho}{\rho_0}e^{i(\theta-\theta_0)}\to1,$$ de modo que $e^{i(\theta-\theta_0)}\to1$. Como $|\theta-\theta_0|<\pi$, necesariamente $\theta\to\theta_0$. Luego $\operatorname{Log}$ es continua en $G$.
>>4. En particular, $\operatorname{Log}$ es una rama del logaritmo. Por la proposición siguiente aplicada a $g(w)=e^w$ y $f=\operatorname{Log}$, $$(\operatorname{Log}z)'=\frac1{e^{\operatorname{Log}z}}=\frac1z.$$
>>5. Como $1/z$ es continua en $G$, $\operatorname{Log}$ es analítica.

>[!Proposition] Derivada de una inversa analítica
>Si $f$ y $g$ son analíticas, $g\circ f=\operatorname{Id}$ y $g'(f(a))\neq0$, entonces
>$$f'(a)=\frac{1}{g'(f(a))}.$$
>Más generalmente, basta que $g$ sea analítica, que $f$ sea continua, que $g\circ f=\operatorname{Id}$ y que $g'(f(a))\neq0$: en ese caso $f$ es diferenciable en $a$ con la misma fórmula.
>
>>[!Proof]-
>>1. De $g(f(z))=z$ se deduce que $f$ es inyectiva: si $f(z_1)=f(z_2)$, entonces $z_1=g(f(z_1))=g(f(z_2))=z_2$. En particular, $f(z)\neq f(a)$ si $z\neq a$.
>>2. Sea $k(h)=f(a+h)-f(a)$. Por continuidad de $f$, $k(h)\to0$ cuando $h\to0$, y $k(h)\neq0$ si $h\neq0$. Entonces
>>$$\frac{f(a+h)-f(a)}{h}=\left(\frac{g(f(a)+k(h))-g(f(a))}{k(h)}\right)^{-1}.$$
>>3. Al hacer $h\to0$ el denominador tiende a $g'(f(a))\neq0$, de modo que existe $f'(a)$ y $$f'(a)=\frac1{g'(f(a))}.$$
>>4. Si $g'\circ f$ no se anula, el lado derecho es continuo, de modo que $f$ es analítica. Si $f$ ya era analítica, la misma fórmula se obtiene derivando $g\circ f=\operatorname{Id}$ con la regla de la cadena.
>>5. En particular, toda rama $f$ del logaritmo es analítica y $f'(z)=1/z$, pues $e^{f(z)}=z$ y $(e^w)'=e^w\neq0$.

>[!Definition] Ramas de potencias
>Fijada una rama $f$ del logaritmo y $b\in\mathbb{C}$, se define
>$$z^b:=e^{bf(z)}.$$
>Para $b=m\in\mathbb{Z}$ coincide con la potencia usual.
>
>>[!Proof]-
>>1. Toda rama $f$ del logaritmo es analítica. Como la exponencial es entera, $z^b=e^{bf(z)}$ es analítica por la regla de la cadena.
>>2. Si $b=m\in\mathbb{Z}_{\geq0}$, entonces $$e^{mf(z)}=\bigl(e^{f(z)}\bigr)^m=z^m.$$
>>3. Si $m\in\mathbb{Z}_{<0}$, se usa $e^{-f(z)}=1/e^{f(z)}=1/z$.

## Ecuaciones de Cauchy-Riemann

Sea
$$f(x+iy)=u(x,y)+iv(x,y),$$
donde $u=\operatorname{Re}f$ y $v=\operatorname{Im}f$.

>[!Theorem] Condición necesaria
>Si $f$ es diferenciable en $z_0=x_0+iy_0$, entonces existen las derivadas parciales y
>$$u_x(x_0,y_0)=v_y(x_0,y_0),\qquad v_x(x_0,y_0)=-u_y(x_0,y_0).$$
>Estas son las **ecuaciones de Cauchy-Riemann**. Además,
>$$f'(z_0)=u_x+iv_x=v_y-iu_y.$$
>
>>[!Proof]-
>>1. Como $f$ es diferenciable en $z_0$, el límite del cociente incremental existe a lo largo de cualquier dirección.
>>2. Con incrementos reales $h\in\mathbb{R}$, $h\to0$,
>>$$\frac{f(z_0+h)-f(z_0)}{h}=\frac{u(x_0+h,y_0)-u(x_0,y_0)}{h}+i\frac{v(x_0+h,y_0)-v(x_0,y_0)}{h}\longrightarrow u_x(x_0,y_0)+iv_x(x_0,y_0).$$
>>3. Con incrementos imaginarios puros $ih$, $h\in\mathbb{R}$, $h\to0$,
>>$$\begin{aligned}\frac{f(z_0+ih)-f(z_0)}{ih}&=\frac{u(x_0,y_0+h)-u(x_0,y_0)}{ih}+i\frac{v(x_0,y_0+h)-v(x_0,y_0)}{ih}\\&=\frac{v(x_0,y_0+h)-v(x_0,y_0)}{h}-i\frac{u(x_0,y_0+h)-u(x_0,y_0)}{h}\\&\longrightarrow v_y(x_0,y_0)-iu_y(x_0,y_0).\end{aligned}$$
>>4. Igualando las dos expresiones de $f'(z_0)$ y comparando partes real e imaginaria se obtienen las ecuaciones de Cauchy-Riemann.

>[!Proposition] Condición suficiente
>Si $u$ y $v$ tienen derivadas parciales primeras continuas cerca de $(x_0,y_0)$ y satisfacen Cauchy-Riemann en ese punto, entonces $f=u+iv$ es diferenciable en $z_0$ y
>$$f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).$$
>
>>[!Proof]-
>>1. Sea $h=s+it$. Como las derivadas parciales de $u$ y $v$ son continuas cerca de $(x_0,y_0)$, ambas son diferenciables como funciones de $\mathbb{R}^2$. Luego existen $\varepsilon_1(h),\varepsilon_2(h)\to0$ cuando $h\to0$ tales que
>>$$\begin{aligned}u(x_0+s,y_0+t)-u(x_0,y_0)&=u_xs+u_yt+|h|\varepsilon_1(h),\\v(x_0+s,y_0+t)-v(x_0,y_0)&=v_xs+v_yt+|h|\varepsilon_2(h),\end{aligned}$$
>>donde las parciales se evalúan en $(x_0,y_0)$.
>>2. Entonces
>>$$f(z_0+h)-f(z_0)=(u_xs+u_yt)+i(v_xs+v_yt)+|h|(\varepsilon_1+i\varepsilon_2).$$
>>3. Usando Cauchy-Riemann, $u_y=-v_x$ y $v_y=u_x$, el término lineal es
>>$$u_xs-v_xt+i(v_xs+u_xt)=(u_x+iv_x)(s+it)=(u_x+iv_x)h.$$
>>4. Por lo tanto
>>$$\frac{f(z_0+h)-f(z_0)}{h}=u_x+iv_x+(\varepsilon_1+i\varepsilon_2)\frac{|h|}{h}.$$
>>5. Como $\bigl||h|/h\bigr|=1$ y $\varepsilon_1,\varepsilon_2\to0$, el resto tiende a $0$. Luego $f$ es diferenciable en $z_0$ y $f'(z_0)=u_x+iv_x$.

>[!Theorem] Caracterización de analiticidad
>Si $u$ y $v$ tienen derivadas parciales continuas en $G$, entonces
>$$f=u+iv\text{ es analítica}\iff u_x=v_y\text{ y }v_x=-u_y.$$
>
>>[!Proof]-
>>- **$(\Rightarrow)$**
>>	1. Si $f$ es analítica, es diferenciable en todo punto de $G$. Por la condición necesaria, $u$ y $v$ cumplen Cauchy-Riemann.
>>- **$(\Leftarrow)$**
>>	1. Si $u$ y $v$ cumplen Cauchy-Riemann y tienen parciales continuas, la condición suficiente da que $f$ es diferenciable en todo punto de $G$ y $$f'=u_x+iv_x.$$
>>	2. El lado derecho es continuo, de modo que $f$ es analítica.

>[!Remark] Jacobiano
>Si $f$ es analítica,
>$$\det Df=u_xv_y-u_yv_x=u_x^2+v_x^2=|f'(z)|^2.$$
>
>>[!Proof]-
>>1. Como $f$ es analítica, $f'=u_x+iv_x$ y se cumplen Cauchy-Riemann.
>>2. Entonces $$|f'(z)|^2=u_x^2+v_x^2=u_xu_x+v_xv_x=u_xv_y+v_x(-u_y)=u_xv_y-u_yv_x=\det Df.$$

## Funciones armónicas

>[!Definition] Función armónica
>Una función $u$ de clase $C^2$ es armónica si
>$$u_{xx}+u_{yy}=0.$$

>[!Proposition] Partes de una función analítica
>Si $f=u+iv$ es analítica, entonces $u$ y $v$ son armónicas.
>
>>[!Proof]-
>>1. Como $f$ es analítica, $u$ y $v$ cumplen Cauchy-Riemann. Si $u$ y $v$ son de clase $C^2$ (lo cual se justifica más adelante, al probar que toda función analítica es $C^\infty$), podemos derivar las ecuaciones de Cauchy-Riemann:
>>$$u_x=v_y\ \Longrightarrow\ u_{xx}=v_{yx},\qquad v_x=-u_y\ \Longrightarrow\ v_{xy}=-u_{yy}.$$
>>2. Las derivadas cruzadas coinciden, de modo que $u_{xx}=-u_{yy}$.
>>3. Análogamente, $v_{xx}+v_{yy}=0$.

>[!Definition] Conjugado armónico
>Si $u$ es armónica y existe una función armónica $v$ tal que $u+iv$ es analítica, entonces $v$ se llama **conjugado armónico** de $u$.

>[!Proposition] Unicidad
>En una región, dos conjugados armónicos de la misma función difieren en una constante real.
>
>>[!Proof]-
>>1. Sean $v_1$ y $v_2$ conjugados armónicos de $u$ en una región $G$. Entonces $f_1=u+iv_1$ y $f_2=u+iv_2$ son analíticas, y $$g:=f_1-f_2=i(v_1-v_2)$$ es analítica con imagen contenida en $i\mathbb{R}$.
>>2. Escribiendo $g=U+iV$ se tiene $U\equiv0$. Por Cauchy-Riemann, $V_x=-U_y=0$ y $V_y=U_x=0$, de modo que $g'=U_x+iV_x=0$.
>>3. Como $G$ es conexo, $g$ es constante. Luego $v_1-v_2$ es constante (real).

>[!Theorem] Existencia en el plano o en un disco
>Si $G$ es el plano complejo o un disco y $u:G\to\mathbb{R}$ es armónica, entonces $u$ tiene conjugado armónico. Una construcción es
>$$v(x,y)=\int_0^y u_x(x,t)\,dt-\int_0^x u_y(s,0)\,ds.$$
>Las ecuaciones de Cauchy-Riemann verifican que $u+iv$ es analítica.
>
>>[!Proof]-
>>1. Trasladando si hace falta, podemos suponer que $0\in G$ y que los segmentos de integración quedan en $G$ (esto vale si $G=\mathbb{C}$ o si $G$ es un disco que contiene al origen; en un disco arbitrario se integra desde el centro).
>>2. Definimos $$v(x,y)=\int_0^y u_x(x,t)\,dt+\varphi(x)$$ y elegimos $\varphi$ para que se cumplan Cauchy-Riemann.
>>3. Derivando bajo el signo de integral (las parciales de $u$ son continuas) y usando que $u$ es armónica,
>>$$v_x(x,y)=\int_0^y u_{xx}(x,t)\,dt+\varphi'(x)=-\int_0^y u_{yy}(x,t)\,dt+\varphi'(x).$$
>>4. Por el teorema fundamental del cálculo, $$-\int_0^y u_{yy}(x,t)\,dt=-u_y(x,y)+u_y(x,0),$$ de modo que $$v_x(x,y)=-u_y(x,y)+u_y(x,0)+\varphi'(x).$$
>>5. Queremos $v_x=-u_y$, lo cual fuerza $\varphi'(x)=-u_y(x,0)$. Tomamos $$\varphi(x)=-\int_0^x u_y(s,0)\,ds.$$
>>6. Así se obtiene la fórmula del enunciado. Por el teorema fundamental, $v_y=u_x$. Junto con $v_x=-u_y$, se cumplen Cauchy-Riemann.
>>7. Las parciales de $v$ coinciden con $u_x$ y $-u_y$, que son de clase $C^1$ porque $u$ es $C^2$. En particular $v$ es $C^2$ y las parciales de $v$ son continuas. Por la condición suficiente, $u+iv$ es analítica. Como $v$ es $C^2$ y es parte imaginaria de una función analítica, $v$ es armónica. Así $v$ es un conjugado armónico de $u$.

>[!Example] Logaritmo del módulo
>La función
>$$u(x,y)=\log\sqrt{x^2+y^2}$$
>es armónica en $\mathbb{C}\setminus\{0\}$. Localmente, su conjugado armónico es una rama del argumento.
>
>>[!Proof]-
>>1. En $\mathbb{C}\setminus\{0\}$ se tiene $u=\ln|z|$. Cerca de cada $z_0\neq0$ existe una rama analítica del logaritmo, y $u$ es su parte real. Por la proposición anterior, $u$ es armónica.
>>2. Directamente: $u=\frac12\log(x^2+y^2)$, de modo que $$u_x=\frac{x}{x^2+y^2},\qquad u_y=\frac{y}{x^2+y^2},$$ y $$u_{xx}+u_{yy}=\frac{y^2-x^2}{(x^2+y^2)^2}+\frac{x^2-y^2}{(x^2+y^2)^2}=0.$$
>>3. Localmente, $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$ es analítica, de modo que $\operatorname{Arg}$ es un conjugado armónico de $u$ en $\mathbb{C}\setminus(-\infty,0]$.
>>4. No existe conjugado armónico global en $\mathbb{C}\setminus\{0\}$: un conjugado continuo sería una rama continua del argumento, que no puede definirse en todo el plano pinchado.
