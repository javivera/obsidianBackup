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
>>4. **Caracterización secuencial del límite.** Se tiene $\lim_{z\to a}f(z)=L$ si y solo si, para toda sucesión $\{z_n\}\subseteq B(a,r)\setminus\{a\}$ con $z_n\to a$, se cumple $f(z_n)\to L$.
>>5. Para ver que $g\circ f$ es diferenciable en $z_0\in G$, hay que probar que existe
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
>>4. Hay que hallar una aplicación $\mathbb{R}$-lineal $L:\mathbb{R}^2\to\mathbb{R}^2$ tal que
>>$$\frac{f(z_0+h)-f(z_0)-L(h)}{|h|}\longrightarrow0\qquad(h\to0).$$
>>5. Tomamos $L(h)=f'(z_0)h$. Entonces
>>$$\frac{f(z_0+h)-f(z_0)-f'(z_0)h}{|h|}=\left(\frac{f(z_0+h)-f(z_0)}{h}-f'(z_0)\right)\frac{h}{|h|}.$$
>>6. El primer factor tiende a $0$ por diferenciabilidad compleja y $\bigl|h/|h|\bigr|=1$. El producto tiende a $0$.
>>7. Luego $f$ es diferenciable como función de dos variables reales y $d_{z_0}f(h)=f'(z_0)h$.

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
>>4. Fijemos $z_0\in G$ y sea $w_0=f(z_0)$. Pongamos $$A=\{z\in G:f(z)=w_0\}.$$ El conjunto $A$ es no vacío y queremos ver que $A=G$.
>>5. Como $G$ es conexo, basta probar que $A$ es abierto y cerrado en $G$.
>>6. **$A$ es cerrado en $G$.** Por ser preimagen de cerrado $\{ w_{0} \}$ 
>>7. **$A$ es abierto en $G$.** Sea $a\in A$. Como $G$ es abierto, existe $\varepsilon>0$ tal que $B(a,\varepsilon)\subseteq G$. Dado $z\in B(a,\varepsilon)$, el segmento $\gamma(t)=tz+(1-t)a$ para $t\in[0,1]$ está contenido en la bola. Definimos $g(t)=f(\gamma(t))$. Entonces $$g'(t)=f'(\gamma(t))(z-a)=0,$$ de modo que $g$ es constante en $[0,1]$ (aplicando el teorema del valor medio a las partes real e imaginaria). 
>>8. En particular $$f(z)=g(1)=g(0)=f(a)=w_0,$$ y por lo tanto $z\in A$ concluyendo que $B(a,\varepsilon)\subseteq A$.
>>9. Luego $A=G$ y $f$ es constante.

^bb0732

>[!Remark] Por qué se necesita conexidad
>En $G=B(0,1)\cup B(3,1)$, la función que vale $0$ en una componente y $1$ en la otra tiene derivada nula, pero no es constante en todo $G$.

## Función exponencial

>[!lemma] La exponencial es analítica
>Si definimos $$e^z:=\sum_{n=0}^{\infty}\frac{z^n}{n!}.$$
>Entonces la serie tiene radio infinito, de modo que $e^z$ es entera y
>$$(e^z)'=e^z.$$
>
>>[!Proof]-
>>1. Por el criterio del cociente, $$R=\lim_{n\to\infty}\frac{|a_n|}{|a_{n+1}|}=\lim_{n\to\infty}(n+1)=\infty.$$ Luego $e^z$ es entera.
>>2. Derivando término a término, $$(e^z)'=\sum_{n=1}^{\infty}n\frac{z^{n-1}}{n!}=\sum_{n=1}^{\infty}\frac{z^{n-1}}{(n-1)!}=\sum_{k=0}^{\infty}\frac{z^k}{k!}=e^z.$$

^23ad93

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
>8. $e^{ic}=1\Rightarrow c=2k\pi$ 
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

^2df0cc

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
>>3. Ambas series tienen radio infinito. Derivando término a término,
>>$$(\cos z)'=\sum_{k=1}^{\infty}(-1)^k\frac{2k\,z^{2k-1}}{(2k)!}=\sum_{k=1}^{\infty}(-1)^k\frac{z^{2k-1}}{(2k-1)!}=-\sin z,$$
>>y análogamente $(\sin z)'=\cos z$.
>>4. Desarrollando,
>>$$\begin{aligned}e^{iz}&=\sum_{n=0}^{\infty}\frac{(iz)^n}{n!}=\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k}}{(2k)!}+i\sum_{k=0}^{\infty}(-1)^k\frac{z^{2k+1}}{(2k+1)!}=\cos z+i\sin z,\\e^{-iz}&=\cos z-i\sin z.\end{aligned}$$
>>5. Sumando y restando estas identidades se obtiene
>>$$\cos z=\frac{e^{iz}+e^{-iz}}2,\qquad\sin z=\frac{e^{iz}-e^{-iz}}{2i}.$$
>>6. Por lo tanto
>>$$\cos^2z+\sin^2z=\left(\frac{e^{iz}+e^{-iz}}2\right)^2+\left(\frac{e^{iz}-e^{-iz}}{2i}\right)^2=\frac{e^{2iz}+2+e^{-2iz}}{4}-\frac{e^{2iz}-2+e^{-2iz}}{4}=1.$$

## Funcion periodica y periodos de la exponencial

>[!Definition] Función periódica
>Una función $f:\mathbb{C}\to\mathbb{C}$ es periódica con período $c\in\mathbb{C}$ si $$f(z+c)=f(z)\text{ para todo }z\in\mathbb{C}.$$

>[!lemma] Períodos de la exponencial
>Los periodos de la exponencial exactamente son $2\pi i\mathbb{Z}$
>>[!Proof]- 
>>1. Si $c$ es un período de $e^z$, entonces $$e^z=e^{z+c}=e^ce^z.$$ Como $e^z\neq0$, se sigue que $$e^c=1$$
>>2. Tomando módulos y usando [[FA - Teo2#^2df0cc|Punto 4]], $$1=|e^c|=e^{\operatorname{Re}(c)},$$  por lo que $\operatorname{Re}(c)=0$. Así, $c=i\theta$ para algún $\theta\in\mathbb{R}$.
>>3. Por la fórmula de Euler, $$1=e^c=e^{i\theta}=cis(\theta)$$ Luego $\theta=2k\pi$ para algún $k\in\mathbb{Z}$ y, por tanto, $$c=2k\pi i.$$
>>4. Recíprocamente, por la fórmula de Euler, $$e^{2\pi i}=\cos(2\pi)+i\sin(2\pi)=1.$$ Entonces, para todo $k\in\mathbb{Z}$, $$e^{z+2k\pi i}=e^z e^{2k\pi i}=e^z\left(e^{2\pi i}\right)^k=e^z.$$ Por tanto, todo $c=2k\pi i$ es un período
>>5. Mostrando finalmente que los períodos de $e^z$ son exactamente $2\pi i\mathbb{Z}$.

## Inyectividad y sobreyectividad en la exponencial compleja

>[!Remark] La exponencial compleja no es inyectiva
>A diferencia de la exponencial real, la función $e^z:\mathbb{C}\to\mathbb{C}$ no es inyectiva.
>
>>[!Proof]-
>>Como $0\neq2\pi i$ y $$e^0=1=e^{2\pi i},$$ existen dos números complejos distintos con la misma imagen. Por tanto, $e^z$ no es inyectiva en $\mathbb{C}$.

>[!Remark] Una restricción inyectiva de la exponencial
>Para cada $\alpha\in\mathbb{R}$, la restricción de $e^z$ a $$S_\alpha=\{z\in\mathbb{C}:\alpha\leq\operatorname{Im}(z)<\alpha+2\pi\}$$ es inyectiva.
>Como función de $S_\alpha$ en $\mathbb{C}$, no es sobreyectiva, ya que $e^z\neq0$ para todo $z\in\mathbb{C}$. En cambio, vista como función $S_\alpha\to\mathbb{C}\setminus\{0\}$, es biyectiva.
>
>>[!Proof]-
>>- **Inyectiva:** 
>>	1. Si $z,w\in S_\alpha$ y $e^z=e^w$, entonces $e^{z-w}=1$. Para todo $u\in\mathbb{C}$, $$e^{u+(z-w)}=e^ue^{z-w}=e^u,$$ así que $z-w$ es un período de la exponencial. Por el lema anterior, $z-w=2k\pi i$ para algún $k\in\mathbb{Z}$.
>>	2. Como $z,w\in S_\alpha$, se tiene $$\alpha\leq\operatorname{Im}(z)<\alpha+2\pi,\qquad\alpha\leq\operatorname{Im}(w)<\alpha+2\pi.$$ Restando ambas desigualdades y usando $$\operatorname{Im}(z-w)=\operatorname{Im}(z)-\operatorname{Im}(w),$$ obtenemos $$-2\pi<\operatorname{Im}(z-w)<2\pi.$$
>>	3. Como $\operatorname{Im}(z-w)=2k\pi$, necesariamente $k=0$. Luego $z=w$. Mostrando que es inyectiva
>>- **Sobreyectiva:** 
>>	1. Dado $w\in\mathbb{C}\setminus\{0\}$, se puede escribir $w=|w|e^{i\theta}$ con $\theta\in[\alpha,\alpha+2\pi)$ esto se puede hacer para cualqueir complejo
>>	2. Entonces definimos $z=\ln|w|+i\theta$ pertenece a $S_\alpha$ y trivialmente $e^z=w$. 
>>	3. Por tanto, la restricción es sobreyectiva sobre $\mathbb{C}\setminus\{0\}$.

>[!Remark]- Ayuda visual
>![[Pasted image 20260826224209.png]]

## El Logaritmo complejo

>[!Remark] El problema del logaritmo complejo
>Queremos definir $\log z$. Una serie de potencias solo permite definirlo en algún disco, y la integral de $t^{-1}$ desde $1$ hasta $z$ depende del camino en el plano complejo.
>Además, como $e^z$ no es inyectiva en $\mathbb{C}$, $\log z$ no puede definirse como la inversa global de $e^z$. 
>Sin embargo, al restringir la exponencial a una franja $S_\alpha$, obtenemos una biyección $S_\alpha\to\mathbb{C}\setminus\{0\}$; Entonces podemos utilizar esto

>[!Proposition] Soluciones de $e^z=w$
>Si $w\in \mathbb{C}$ con $w \neq0$, obviamente queremos $\log$ que cumpla $$\log w =z \iff e^z=w$$ y podemos afirmar que esto vale si y solo si $$ z=\ln|w|+i(\arg w+2k\pi),\qquad k\in\mathbb{Z}.$$  
>
>>[!Proof]-
>>1. Sea $z=x+iy$ y escribamos $w=|w|(\cos\theta+i\sin\theta)$, con $\theta=\arg w$.
>>2. La igualdad $e^z=w$ equivale a $$e^x(\cos y+i\sin y)=|w|(\cos\theta+i\sin\theta).$$
>>3. Igualando módulos, $e^x=|w|$, de modo que $x=\ln|w|$ (logaritmo real aca no hay problema de definicion).
>>4. Igualando argumentos, $y=\arg (w)+2k\pi$ para algún $k\in\mathbb{Z}$.
>>5. Recíprocamente, si $z=\ln|w|+i(\theta+2k\pi)$, entonces $$e^z=e^{\ln|w|}e^{i(\theta+2k\pi)}=|w|(\cos\theta+i\sin\theta)=w.$$

^8420b1

>[!Remark] El logaritmo complejo es multivaluado
>Por la proposicion anterior el logaritmo complejo se entiende inicialmente como el conjunto de valores
>$$\log w=\left\{\ln|w|+i(\arg w+2k\pi):k\in\mathbb{Z}\right\}.$$

## Ramas del logaritmo

>[!Definition] Rama del logaritmo
>Sea $G\subseteq\mathbb{C}$ un conjunto abierto y conexo. Una función continua $f:G\to\mathbb{C}$ es una **rama del logaritmo** en $G$ si $$e^{f(z)}=z\qquad(z\in G).$$

>[!Proposition] Unicidad salvo múltiplos de $2\pi i$
>Si $f$ es una rama del logaritmo en $G$, todas las ramas son
>$$f(z)+2k\pi i,\quad k\in\mathbb{Z}.$$
>
>>[!Proof]-
>>1. Si $f$ es una rama y $k\in\mathbb{Z}$, entonces $g:=f+2k\pi i$ es continua y $$e^{g(z)}=e^{f(z)}e^{2k\pi i}=z\cdot1=z,$$ de modo que $g$ también es una rama.
>>2. Recíprocamente, si $f$ y $g$ son ramas, $e^{f(z)}=e^{g(z)}$, o sea $e^{f(z)-g(z)}=1$.
>>3. Escribiendo $c=f(z)-g(z)$, se tiene $|e^c|=e^{\operatorname{Re}c}=1$, luego $\operatorname{Re}c=0$ y $c=i\theta$. Entonces $e^{i\theta}=\cos\theta+i\sin\theta=1$, de modo que $\theta=2k\pi$ para algún $k\in\mathbb{Z}$. Así $$f(z)-g(z)\in2\pi i\mathbb{Z}.$$
>>4. Definimos $$h:G\to\mathbb{Z},\qquad h(z)=\frac{f(z)-g(z)}{2\pi i}.$$ Esto está bien definido por el paso anterior.
>>5. La función $h$ es continua porque $f$ y $g$ son continuas. Además, $h(z)\in\mathbb{Z}$ para todo $z\in G$.
>>6. Como $G$ es conexo y $h$ es continua, $h(G)$ es conexo. Pero $h(G)\subseteq\mathbb{Z}$ y los únicos subconjuntos conexos de $\mathbb{Z}$ son los conjuntos de un solo punto, pues $\mathbb{Z}$ es discreto. Por tanto, $h$ es constante: existe $k\in\mathbb{Z}$ tal que $h(z)=k$ para todo $z\in G$.
>>7. Luego $$f(z)-g(z)=2k\pi i$$ para todo $z\in G$, es decir, $$f=g+2k\pi i.$$

>[!Remark] Consecuencia
>Una vez elegida una rama, todas las demás solo difieren en una constante de la forma $2k\pi i$. En particular, todas tienen la misma derivada.

>[!Remark] No existe una rama en un dominio que contenga al origen
>Si $0\in G$, la igualdad $e^{f(0)}=0$ sería imposible, pues la exponencial nunca se anula.

>[!Remark]- NO SE SI VA 
>Para construir una rama hay que elegir continuamente un único argumento para cada punto de $G$. Si $z=re^{i\theta}$ y se restringe el argumento a un intervalo de longitud $2\pi$, se define
>$$f(z)=\ln|z|+i\theta.$$
>La continuidad exige que el argumento no salte al pasar por los extremos del intervalo; por eso se elimina un semieje que parte del origen.

>[!Remark] Construcción de una rama del logaritmo
>Queremos construir una funcion que cumpla que es rama del logaritmos. Por definicion una rama $f(z):=\log z$ tiene que satisfacer $e^{f(z)}=z$ por definicion.
>Entonces por [[FA - Teo2#^8420b1]] tiene que ser de la forma $$f(z)=\ln|z|+i(\arg z+2k\pi),\qquad k\in\mathbb{Z},$$
>El problema es que asi $f$ no estaria bien defnida porque para cada $k$ tendria una imagen, entonces hacemos lo siguiente, nos restringimos a un lugar donde el argumento sea unico

^98e0f5

>[!Lemma] Unicidad del argumento en un intervalo de longitud $2\pi$
>Sea $\alpha\in\mathbb{R}$ y $G_\alpha=\mathbb{C}\setminus\{re^{i\alpha}:r\geq0\}$. Entonces, para cada $z\in G_\alpha$, existe un único $\theta\in(\alpha,\alpha+2\pi)$ tal que $z=|z|e^{i\theta}$.
>
>>[!Proof]-
>>1. Por la forma polar, $z$ tiene algún argumento $\theta_0\in\mathbb{R}$. Como $z\notin\{re^{i\alpha}:r\geq0\}$, ninguno de sus argumentos es congruente con $\alpha$ módulo $2\pi$. Por tanto, existe un único $k\in\mathbb{Z}$ tal que $\theta=\theta_0+2\pi k\in(\alpha,\alpha+2\pi)$.
>>2. Para probar la unicidad, supongamos que $z=re^{i\theta}=r'e^{i\theta'}$, con $r,r'>0$ y $\theta,\theta'\in(\alpha,\alpha+2\pi)$.
>>3. Igualando módulos, obtenemos $r=r'$. Por tanto, $e^{i\theta}=e^{i\theta'}$, de donde $e^{i(\theta-\theta')}=1$.
>>4. Luego $\theta-\theta'=2\pi k$ para algún $k\in\mathbb{Z}$. Como $\theta,\theta'\in(\alpha,\alpha+2\pi)$, se tiene $\theta-\theta'\in(-2\pi,2\pi)$, así que necesariamente $k=0$.
>>5. Por tanto, $\theta=\theta'$. Esto demuestra la unicidad.

^b841a0

>[!Remark]
>Para $\alpha\in\mathbb{R}$, el lema permite definir $\operatorname{Arg}_\alpha(z)\in(\alpha,\alpha+2\pi)$ en $G_\alpha$. Entonces, para cada $k\in\mathbb{Z}$, podemos definir $$f_{\alpha,k}(z)=\ln|z|+i\operatorname{Arg}_\alpha(z)+2\pi ik.$$ y notamos que $\operatorname{Arg}_{\alpha }(z)$ es unico en $(\alpha ,\alpha +2\pi)$ 

>[!Lemma] Continuidad de las ramas $f_{\alpha,k}$
>Para cada $\alpha\in\mathbb{R}$ y $k\in\mathbb{Z}$, la función $$f_{\alpha,k}(z)=\ln|z|+i\operatorname{Arg}_\alpha(z)+2\pi ik$$ es continua en $G_\alpha$.
>
>>[!Proof]-
>>1. Sea $z_0\in G_\alpha$ y sea $(z_n)\subseteq G_\alpha$ una sucesión arbitraria tal que $z_n\to z_0$.
>>2. Escribamos $z_{n}=r_{n}e^{i\theta_{n}}$ y $z_0=r_0e^{i\theta_0}$, donde $r_{n}=|z_{n}|$, $r_0=|z_0|$, $\theta_{n}=\operatorname{Arg}_\alpha z_{n}$ y $\theta_0=\operatorname{Arg}_\alpha z_0$.
>>3. Como $z_{n}\to z_0$, entonces $r_{n}\to r_0$ por la continuidad del módulo y, como $r_0>0$, $$\ln(r_{n}/r_0)\longrightarrow0.$$ 
>>4. Además, $$\frac{r_{n}}{r_0}e^{i(\theta_{n}-\theta_0)}=\frac{z_{n}}{z_0}\longrightarrow1,$$ de modo que $e^{i(\theta_{n}-\theta_0)}\to1$.
>>5. Como $z_0$ no pertenece a la semirrecta eliminada, existe una vecindad de $z_0$ que no la intersecta. Como $z_n\to z_0$, para $n$ suficientemente grande, $z_n$ pertenece a esa vecindad. Por tanto, el argumento no puede saltar de valores cercanos a $\alpha+2\pi$ a valores cercanos a $\alpha$, y podemos suponer que $|\theta_n-\theta_0|<\pi$.
>>6. Como $e^{i(\theta_n-\theta_0)}\to1$ y $|\theta_n-\theta_0|<\pi$, se tiene $\theta_n-\theta_0\to0$.
>>7. Como $k$ es fijo, el término $2\pi ik$ se cancela al restar. Por tanto, $$|f_{\alpha,k}(z_{n})-f_{\alpha,k}(z_0)|=\left|\ln(r_{n}/r_0)+i(\theta_{n}-\theta_0)\right|\leq\left|\ln(r_{n}/r_0)\right|+|\theta_{n}-\theta_0|\longrightarrow0.$$ Por el criterio secuencial de continuidad, $f_{\alpha,k}$ es continua en $G_\alpha$.

>[!Corollary]
>Para cada $\alpha\in\mathbb{R}$ y $k\in\mathbb{Z}$, $f_{\alpha,k}$ es una rama del logaritmo en $G_\alpha$.
>>[!Proof]-
>>8. Por el lema anterior, $f_{\alpha,k}$ es continua. Además, $G_\alpha$ es abierto y conexo.
>>9. Si $z\in G_\alpha$, entonces $$e^{f_{\alpha,k}(z)}=e^{\ln|z|+i\operatorname{Arg}_\alpha(z)+2\pi ik}=|z|e^{i\operatorname{Arg}_\alpha(z)}e^{2\pi ik}=z.$$ Por definición, $f_{\alpha,k}$ es una rama del logaritmo en $G_\alpha$.

>[!Remark]
>Para $\alpha=-\pi$ y $k=0$ vamos a obtener lo que llamaremos la rama principal: $$f_{-\pi,0}(z)=\ln|z|+i\operatorname{Arg}_{-\pi}(z).$$

>[!Definition] Rama principal
>En $G=\mathbb{C}\setminus(-\infty,0]$, cada $z$ tiene un único argumento $\operatorname{Arg}_{-\pi}z\in(-\pi,\pi)$. Entonces definimos $$\log z:=f_{-\pi,0}(z)=\ln|z|+i\operatorname{Arg}_{-\pi}z.$$ Esta es la rama principal del logaritmo.

>[!Proposition] Derivada de una inversa analítica
>Sean $G$ y $\Omega$ subconjuntos abiertos de $\mathbb{C}$. Supongamos que
>$$f:G\to\mathbb{C},\qquad g:\Omega\to\mathbb{C}$$
>son funciones continuas tales que $f(G)\subseteq\Omega$ y
>$$g(f(z))=z\qquad\forall z\in G.$$
>Si $g$ es diferenciabl e en $\Omega$ y $g'(z)\neq0$ para todo $z\in\Omega$, entonces $f$ es diferenciable en $G$ y
>$$f'(z)=\frac{1}{g'(f(z))}\qquad\forall z\in G.$$
>Además, si $g$ es analítica en $\Omega$, entonces $f$ es analítica en $G$.
>
>>[!Proof]-
>>10. De $g(f(z))=z$ se deduce que $f$ es inyectiva: si $f(z_1)=f(z_2)$, entonces
>>$$z_1=g(f(z_1))=g(f(z_2))=z_2.$$
>>En particular, $f(z)\neq f(a)$ si $z\neq a$.
>>11. Fijemos $a\in G$ y sea $h\neq0$ tal que $a+h\in G$. Definimos
>>$$k(h)=f(a+h)-f(a).$$
>>Por continuidad de $f$, $k(h)\to0$ cuando $h\to0$, y por la inyectividad de $f$, $k(h)\neq0$.
>>12. Como $f(G)\subseteq\Omega$ y $\Omega$ es abierto, para $h$ suficientemente pequeño se tiene $f(a)+k(h)=f(a+h)\in\Omega$. Entonces
>>$$\frac{f(a+h)-f(a)}{h}
>>=\left(\frac{g(f(a)+k(h))-g(f(a))}{k(h)}\right)^{-1}.$$
>>13. Como $g$ es diferenciable en $f(a)$ y $k(h)\to0$, el cociente interior tiende a $g'(f(a))\neq0$. Por continuidad de la función inversa $w\mapsto1/w$ en $\mathbb{C}\setminus\{0\}$, se obtiene
>>$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=\frac{1}{g'(f(a))}.$$
>>Como $a$ era arbitrario, $f$ es diferenciable en $G$ y
>>$$f'(z)=\frac{1}{g'(f(z))}\qquad\forall z\in G.$$
>>14. Si $g$ es analítica, entonces $g'$ es continua. Por lo tanto $g'\circ f$ es continua; además, no se anula porque $f(G)\subseteq\Omega$ y $g'(z)\neq0$ en $\Omega$. Luego
>>$$f'=\frac{1}{g'\circ f}$$
>>es continua. Así, $f$ es analítica.

^2f6d2c

>[!corollary] Derivada de una rama del logaritmo
>Todas las ramas del logaritmo en $G$ son analíticas. En particular, si $f$ es cualquier rama, entonces $$f'(z)=\frac1z.$$ 
>
>>[!Proof]-
>>1. Sea $f:G\to\mathbb{C}$ una rama del logaritmo. Entonces $f$ es continua y satisface $$e^{f(z)}=z.$$ Definimos $g(w)=e^w$.
>>2. Se cumple $g\circ f=\operatorname{Id}_G$, porque $$g(f(z))=e^{f(z)}=z.$$ Además, $g$ [[FA - Teo2#^23ad93|es analitica]] y $$g'(f(z))=e^{f(z)}=z\neq0,$$ ya que $0\notin G$.
>>3. Por la [[FA - Teo2#^2f6d2c|derivada de una inversa analitica]], $f$ es diferenciable y $$f'(z)=\frac1{g'(f(z))}=\frac1{e^{f(z)}}=\frac1z.$$
>>4. Como $1/z$ es continua en $G$, la derivada $f'$ es continua. Por tanto, $f$ es analítica. Como la rama $f$ era arbitraria, todas las ramas del logaritmo en $G$ son analíticas y tienen derivada $1/z$.

^3a5482

>[!Definition] Ramas de potencias
>Fijada una rama $f$ del logaritmo y $b\in\mathbb{C}$, se define
>$$z^b:=e^{bf(z)}.$$
>Para $b=m\in\mathbb{Z}$ coincide con la potencia usual.
>
>>[!Proof]-
>>5. Toda rama $f$ del logaritmo es analítica. Como la exponencial es entera, $z^b=e^{bf(z)}$ es analítica por la regla de la cadena.
>>6. Si $b=m\in\mathbb{Z}_{\geq0}$, entonces $$e^{mf(z)}=\bigl(e^{f(z)}\bigr)^m=z^m.$$
>>7. Si $m\in\mathbb{Z}_{<0}$, se usa $e^{-f(z)}=1/e^{f(z)}=1/z$.

^7d48e2

## Ecuaciones de Cauchy-Riemann

>[!Definition]
>Sea $f:G\rightarrow \mathbb{C}$ diferenciable en $z_{0}$ $$f(x+iy)=u(x,y)+iv(x,y),$$donde $u=\operatorname{Re}f$ y $v=\operatorname{Im}f$ con $u,v:\mathbb{R}^{2}\rightarrow\mathbb{R}$ 

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

>[!Remark]
>**Región:** $G$ abierto y conexo.
>Sea $f:G\to\mathbb C$ diferenciable en $z_0\in G$, con $G$ abierto, y sean $u,v:\mathbb R^2\to\mathbb R$ dadas por $$u(x,y)=\operatorname{Re}f(z),\qquad v(x,y)=\operatorname{Im}f(z),$$donde $z=x+iy$. Sabemos que $$\exists\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0}=f'(z_0).$$por lo tanto, $$\exists\lim_{h\to0}\frac{f(z_0+h)-f(z_0)}{h}=f'(z_0),$$para $h\in\mathbb R$ y para $h$ imaginario. 
>Supongamos primero que $h\neq0$ y $h\in\mathbb R$. Si $z_0=x+iy$, entonces $$f(z_0+h)=f((x+h)+iy)=u(x+h,y)+iv(x+h,y),$$y por consiguiente $$f'(z_0)=\lim_{h\to0}\frac{f(z_0+h)-f(z_0)}{h}=\lim_{h\to0}\left(\frac{u(x+h,y)-u(x,y)}{h}+i\frac{v(x+h,y)-v(x,y)}{h}\right).$$luego, $$\boxed{f'(z_0)=u_x(x,y)+iv_x(x,y)}\quad(*)$$
>Ahora supongamos que $h\neq0$ y que $h$ es imaginario puro entonces $$\begin{align}f'(z_0)&=\lim_{h\to0}\frac{f(z_0+ih)-f(z_0)}{ih}\\&=\lim_{h\to0}\left(\frac{u(x,y+h)-u(x,y)}{ih}+i\frac{v(x,y+h)-v(x,y)}{ih}\right).\end{align}$$usando que $\frac{1}{i}=-i$, $$\begin{align}f'(z_0)&=\lim_{h\to0}\left(-i\frac{u(x,y+h)-u(x,y)}{h}+\frac{v(x,y+h)-v(x,y)}{h}\right)\\&=v_y(x,y)-iu_y(x,y).\end{align}$$
>Es decir, $$\boxed{f'(z_0)=v_y(x,y)-iu_y(x,y)}\tag{2}\quad(**)$$
>Combinando $(*)$ con $(**)$ $$u_x(x,y)+iv_x(x,y)=v_y(x,y)-iu_y(x,y).$$como dos números complejos son iguales si y sólo si sus partes reales e imaginarias son iguales, se sigue que $$\boxed{\begin{align}u_x(x,y)&=v_y(x,y),\\v_x(x,y)&=-u_y(x,y).\end{align}}$$estas se llaman **ecuaciones de Cauchy-Riemann**.

>[!Remark]
>- Si $f$ es diferenciable en $z_0=x+iy$ y $f(z)=u(x,y)+iv(x,y)$, entonces $u$ y $v$ cumplen las ecuaciones de Cauchy-Riemann: $$\begin{align}u_x(x,y)&=v_y(x,y),\\v_x(x,y)&=-u_y(x,y).\end{align}$$además, $$f'(z_0)=u_x(x,y)+iv_x(x,y)=v_y(x,y)-iu_y(x,y).$$
>- Supongamos que $u$ y $v$ tienen derivadas parciales segundas continuas y que cumplen las ecuaciones de Cauchy-Riemann. Entonces, $$\begin{align}u_x=v_y&\xrightarrow{\partial_x}u_{xx}=v_{yx},\\v_x=-u_y&\xrightarrow{\partial_y}v_{xy}=-u_{yy}.\end{align}$$como $v$ tiene derivadas parciales segundas continuas, por el teorema de Schwarz $v_{yx}=v_{xy}$. Luego, $$u_{xx}=-u_{yy}.$$es decir, $$\boxed{u_{xx}+u_{yy}=0}\quad(*)$$análogamente, $$\begin{align}u_x=v_y&\xrightarrow{\partial_y}u_{xy}=v_{yy},\\v_x=-u_y&\xrightarrow{\partial_x}v_{xx}=-u_{yx}.\end{align}$$como $u$ tiene derivadas parciales segundas continuas, por el teorema de Schwarz $u_{xy}=u_{yx}$. Luego, $$v_{yy}=-v_{xx}.$$es decir, $$\boxed{v_{xx}+v_{yy}=0}\quad (**)$$
>- Las ecuaciones $(*)$ y $(**)$ dicen que $u$ y $v$ son **funciones armónicas**.

>[!Definition]
>Una función $u:\mathbb R^2\to\mathbb R$ se dice **armónica** si sus derivadas parciales segundas son continuas y
>$$\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0.$$

>[!Remark]
>Si $f=u+iv$ es tal que $u$ y $v$ tienen derivadas parciales **segundas** continuas y cumplen las ecuaciones de Cauchy-Riemann, entonces $u$ y $v$ son armónicas.

>[!Proposition]
>Sea $f:G\subseteq\mathbb C\to\mathbb C$, con $$f(x+iy)=u(x,y)+iv(x,y),$$donde $u,v:\mathbb R^2\to\mathbb R$ tienen derivadas parciales **primeras** continuas en $z_0=x_0+iy_0$. 
>Si $u,v$ cumplen las ecuaciones de Cauchy-Riemann en $(x_0,y_0)$, entonces $f$ es diferenciable en $z_0$ como variable compleja y $$f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).$$
>>[!Proof]-
>>1. Veamos que existe $$\lim_{h\to0}\frac{f(z_0+h)-f(z_0)}{h}.$$
>>2. Sea $h=s+it$. Entonces
>>$$\begin{align}\frac{f(z_0+h)-f(z_0)}{h}&=\frac{f(z_{0}+(s+it))-f(z_{0})}{s+it}\\&=\frac{f((x_0+s)+i(y_0+t))-f(x_0+iy_0)}{h}\\&=\frac{u(x_0+s,y_0+t)+iv(x_0+s,y_0+t)-u(x_0,y_0)-iv(x_0,y_0)}{h}\\&=\underbrace{\frac{u(x_0+s,y_0+t)-u(x_0,y_0)}{s+it}}_{(1)}+i\underbrace{\frac{v(x_0+s,y_0+t)-v(x_0,y_0)}{s+it}}_{(2)}.\end{align}$$
>>3. Veamos $(1)$. Escribimos
>>$$u(x_0+s,y_0+t)-u(x_0,y_0)=\left[u(x_0+s,y_0+t)-u(x_0,y_0+t)\right]+\left[u(x_0,y_0+t)-u(x_0,y_0)\right].$$
>>4. Por el Teorema del Valor Medio en una variable, existen $s_1$ entre $s$ y $0$, y $t_1$ entre $t$ y $0$, tales que
>>$$u(x_0+s,y_0+t)-u(x_0,y_0)=u_x(x_0+s_1,y_0+t)s+u_y(x_0,y_0+t_1)t.$$
>>5. Luego, $$\frac{u(x_0+s,y_0+t)-u(x_0,y_0)}{s+it}=\frac{u_x(x_0+s_1,y_0+t)s+u_y(x_0,y_0+t_1)t}{s+it}.$$
>>6. Definimos $$\begin{align}\psi(s,t)&:=u(x_0+s,y_0+t)-u(x_0,y_0)-u_x(x_0,y_0)s-u_y(x_0,y_0)t.\\&=s\left(u_x(x_0+s_1,y_0+t)-u_x(x_0,y_0)\right)+t\left(u_y(x_0,y_0+t_1)-u_y(x_0,y_0)\right),\end{align}$$ (el segundo igual. es por 4.) 
>>7. Entonces,$$\frac{\psi(s,t)}{s+it}=\left(u_x(x_0+s_1,y_0+t)-u_x(x_0,y_0)\right)\frac{s}{s+it}+\left(u_y(x_0,y_0+t_1)-u_y(x_0,y_0)\right)\frac{t}{s+it}.$$notemos que $|s|\leq|s+it|$ y $|t|\leq|s+it|$. Por lo tanto, $$\begin{align}\left|\frac{\psi(s,t)}{s+it}\right|&\leq\left|u_x(x_0+s_1,y_0+t)-u_x(x_0,y_0)\right|\frac{|s|}{|s+it|}+\left|u_y(x_0,y_0+t_1)-u_y(x_0,y_0)\right|\frac{|t|}{|s+it|}\\&\leq\left|u_x(x_0+s_1,y_0+t)-u_x(x_0,y_0)\right|+\left|u_y(x_0,y_0+t_1)-u_y(x_0,y_0)\right|.\end{align}$$
>>8. Como $s+it\to0\iff s,t\to0$, y $s_1$ está entre $s$ y $0$, se tiene que $s_1\to0$. Luego, por la continuidad de $u_x$, $$u_x(x_0+s_1,y_0+t)-u_x(x_0,y_0)\longrightarrow0.$$de manera análoga, como $t_1$ está entre $t$ y $0$, se tiene que $t_1\to0$ y, por la continuidad de $u_y$, $$u_y(x_0,y_0+t_1)-u_y(x_0,y_0)\longrightarrow0.$$por lo tanto,$$\boxed{\frac{\psi(s,t)}{s+it}\longrightarrow0\qquad\text{cuando }s+it\to0.}$$
>>9. Notemos que $$\psi(s,t)=u(x_0+s,y_0+t)-u(x_0,y_0)-u_x(x_0,y_0)s-u_y(x_0,y_0)t.$$entonces el término $(1)$ puede escribirse en terminos. de $\psi(s,t)$ como $$\frac{u(x_0+s,y_0+t)-u(x_0,y_0)}{s+it}=\frac{\psi(s,t)+u_x(x_0,y_0)s+u_y(x_0,y_0)t}{s+it}$$
>>10. Análogamente, definiendo $$\varphi(s,t)=v(x_0+s,y_0+t)-v(x_0,y_0)-v_x(x_0,y_0)s-v_y(x_0,y_0)t,$$se obtiene $$\frac{\varphi(s,t)}{s+it}\longrightarrow0,$$y ademas el termino $(2)$ lo podemos escribir en terminos de $\varphi(s,t)$ como $$\frac{v(x_0+s,y_0+t)-v(x_0,y_0)}{s+it}=\frac{\varphi(s,t)+v_x(x_0,y_0)s+v_y(x_0,y_0)t}{s+it}$$
>>11. Por lo tanto recordando paso 2., $$\lim_{s+it\to0}\frac{f(z_0+(s+it))-f(z_0)}{s+it}=\lim_{s+it\to0}\left((1)+i(2)\right).$$
>>12. Como $s+it\to0$ implica $s,t\to0$, también $t-is\to0$. 
>>13. Además, por lo demostrado anteriormente, $$\frac{\psi(s,t)}{s+it}\longrightarrow0,\qquad \frac{\varphi(s,t)}{t-is}\longrightarrow0.$$
>>14. Entonces usando [[FA - Teo2#^578d47]] , $$\begin{align}\lim_{s+it\to0}\frac{f(z_0+(s+it))-f(z_0)}{s+it}&=\lim_{s+it\to0}\left(u_x(x_0,y_0)+iv_x(x_0,y_0)+\frac{\psi(s,t)}{s+it}+\frac{\varphi(s,t)}{t-is}\right)\\&=u_x(x_0,y_0)+iv_x(x_0,y_0).\end{align}$$
>>15. Por lo tanto existe $f'(z_0)$ y $$\boxed{f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0)}.$$

>[!Remark]- Cálculo auxiliar
>Usando las expresiones obtenidas para $(1)$ y $(2)$,$$\begin{align}(1)+i(2)&=\frac{\psi(s,t)+u_x(x_0,y_0)s+u_y(x_0,y_0)t}{s+it}+i\frac{\varphi(s,t)+v_x(x_0,y_0)s+v_y(x_0,y_0)t}{s+it}\\&=\frac{(u_x(x_0,y_0)+iv_x(x_0,y_0))s+(u_y(x_0,y_0)+iv_y(x_0,y_0))t+\psi(s,t)+i\varphi(s,t)}{s+it}.\end{align}$$
>Por las ecuaciones de Cauchy-Riemann, $$u_x=v_y,\qquad v_x=-u_y.$$
>Luego, $$u_y+iv_y=-v_x+iu_x=i(u_x+iv_x).$$
>Por lo tanto, $$\begin{align}(1)+i(2)&=\frac{(u_x+iv_x)s+i(u_x+iv_x)t+\psi(s,t)+i\varphi(s,t)}{s+it}\\&=\frac{(u_x+iv_x)(s+it)+\psi(s,t)+i\varphi(s,t)}{s+it}\\&=u_x(x_0,y_0)+iv_x(x_0,y_0)+\frac{\psi(s,t)}{s+it}+i\frac{\varphi(s,t)}{s+it}.\end{align}$$
>Además, $$i\frac{\varphi(s,t)}{s+it}=\frac{\varphi(s,t)}{t-is},$$pues $i(s+it)=is-t=-(t-is)$ y, equivalentemente, $$\frac{i}{s+it}=\frac{1}{t-is}.$$

^578d47

>[!Remark] Cuando vale la reciproca
>Si $u,v$ tienen derivadas parciales primeras continuas y cumplen las ecuaciones de Cauchy-Riemann $\Rightarrow f$ es diferenciable.

>[!Proposition] Condición suficiente
>Si $u$ y $v$ tienen derivadas parciales primeras continuas cerca de $(x_0,y_0)$ y satisfacen Cauchy-Riemann en ese punto, entonces $f=u+iv$ es diferenciable en $z_0$ y
>$$f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).$$
>
>>[!Proof]-
>>16. Sea $h=s+it$. Como las derivadas parciales de $u$ y $v$ son continuas cerca de $(x_0,y_0)$, ambas son diferenciables como funciones de $\mathbb{R}^2$. Luego existen $\varepsilon_1(h),\varepsilon_2(h)\to0$ cuando $h\to0$ tales que
>>$$\begin{aligned}u(x_0+s,y_0+t)-u(x_0,y_0)&=u_xs+u_yt+|h|\varepsilon_1(h),\\v(x_0+s,y_0+t)-v(x_0,y_0)&=v_xs+v_yt+|h|\varepsilon_2(h),\end{aligned}$$
>>donde las parciales se evalúan en $(x_0,y_0)$.
>>17. Entonces
>>$$f(z_0+h)-f(z_0)=(u_xs+u_yt)+i(v_xs+v_yt)+|h|(\varepsilon_1+i\varepsilon_2).$$
>>18. Usando Cauchy-Riemann, $u_y=-v_x$ y $v_y=u_x$, el término lineal es
>>$$u_xs-v_xt+i(v_xs+u_xt)=(u_x+iv_x)(s+it)=(u_x+iv_x)h.$$
>>19. Por lo tanto
>>$$\frac{f(z_0+h)-f(z_0)}{h}=u_x+iv_x+(\varepsilon_1+i\varepsilon_2)\frac{|h|}{h}.$$
>>20. Como $\bigl||h|/h\bigr|=1$ y $\varepsilon_1,\varepsilon_2\to0$, el resto tiende a $0$. Luego $f$ es diferenciable en $z_0$ y $f'(z_0)=u_x+iv_x$.

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
>>4. Sean $v_1$ y $v_2$ conjugados armónicos de $u$ en una región $G$. Entonces $f_1=u+iv_1$ y $f_2=u+iv_2$ son analíticas, y $$g:=f_1-f_2=i(v_1-v_2)$$ es analítica con imagen contenida en $i\mathbb{R}$.
>>5. Escribiendo $g=U+iV$ se tiene $U\equiv0$. Por Cauchy-Riemann, $V_x=-U_y=0$ y $V_y=U_x=0$, de modo que $g'=U_x+iV_x=0$.
>>6. Como $G$ es conexo, $g$ es constante. Luego $v_1-v_2$ es constante (real).

>[!Theorem] Existencia en el plano o en un disco
>Si $G$ es el plano complejo o un disco y $u:G\to\mathbb{R}$ es armónica, entonces $u$ tiene conjugado armónico. Una construcción es
>$$v(x,y)=\int_0^y u_x(x,t)\,dt-\int_0^x u_y(s,0)\,ds.$$
>Las ecuaciones de Cauchy-Riemann verifican que $u+iv$ es analítica.
>
>>[!Proof]-
>>7. Trasladando si hace falta, podemos suponer que $0\in G$ y que los segmentos de integración quedan en $G$ (esto vale si $G=\mathbb{C}$ o si $G$ es un disco que contiene al origen; en un disco arbitrario se integra desde el centro).
>>8. Definimos $$v(x,y)=\int_0^y u_x(x,t)\,dt+\varphi(x)$$ y elegimos $\varphi$ para que se cumplan Cauchy-Riemann.
>>9. Derivando bajo el signo de integral (las parciales de $u$ son continuas) y usando que $u$ es armónica,
>>$$v_x(x,y)=\int_0^y u_{xx}(x,t)\,dt+\varphi'(x)=-\int_0^y u_{yy}(x,t)\,dt+\varphi'(x).$$
>>10. Por el teorema fundamental del cálculo, $$-\int_0^y u_{yy}(x,t)\,dt=-u_y(x,y)+u_y(x,0),$$ de modo que $$v_x(x,y)=-u_y(x,y)+u_y(x,0)+\varphi'(x).$$
>>11. Queremos $v_x=-u_y$, lo cual fuerza $\varphi'(x)=-u_y(x,0)$. Tomamos $$\varphi(x)=-\int_0^x u_y(s,0)\,ds.$$
>>12. Así se obtiene la fórmula del enunciado. Por el teorema fundamental, $v_y=u_x$. Junto con $v_x=-u_y$, se cumplen Cauchy-Riemann.
>>13. Las parciales de $v$ coinciden con $u_x$ y $-u_y$, que son de clase $C^1$ porque $u$ es $C^2$. En particular $v$ es $C^2$ y las parciales de $v$ son continuas. Por la condición suficiente, $u+iv$ es analítica. Como $v$ es $C^2$ y es parte imaginaria de una función analítica, $v$ es armónica. Así $v$ es un conjugado armónico de $u$.

>[!Example] Logaritmo del módulo
>La función
>$$u(x,y)=\log\sqrt{x^2+y^2}$$
>es armónica en $\mathbb{C}\setminus\{0\}$. Localmente, su conjugado armónico es una rama del argumento.
>
>>[!Proof]-
>>14. En $\mathbb{C}\setminus\{0\}$ se tiene $u=\ln|z|$. Cerca de cada $z_0\neq0$ existe una rama analítica del logaritmo, y $u$ es su parte real. Por la proposición anterior, $u$ es armónica.
>>15. Directamente: $u=\frac12\log(x^2+y^2)$, de modo que $$u_x=\frac{x}{x^2+y^2},\qquad u_y=\frac{y}{x^2+y^2},$$ y $$u_{xx}+u_{yy}=\frac{y^2-x^2}{(x^2+y^2)^2}+\frac{x^2-y^2}{(x^2+y^2)^2}=0.$$
>>16. Localmente, $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$ es analítica, de modo que $\operatorname{Arg}$ es un conjugado armónico de $u$ en $\mathbb{C}\setminus(-\infty,0]$.
>>17. No existe conjugado armónico global en $\mathbb{C}\setminus\{0\}$: un conjugado continuo sería una rama continua del argumento, que no puede definirse en todo el plano pinchado.
