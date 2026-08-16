## Números complejos

>[!Remark]
>Se desea resolver la ecuación $$x^2+1=0.$$

>[!Definition] Números complejos
>Se define
>$$\mathbb{C}=\{(a,b):a,b\in\mathbb{R}\}=\mathbb{R}^2,$$
>con las operaciones:
>
>- **Suma:** dados $(a,b)$ y $(c,d)$,
>  $$(a,b)+(c,d):=(a+c,b+d).$$
>- **Producto:** dados $(a,b)$ y $(c,d)$, 
>  $$(a,b)(c,d):=(ac-bd,ad+bc).$$
>
>El neutro para la suma es $(0,0)$ y la unidad para la multiplicación es $(1,0)$.

>[!Remark] Inclusión de $\mathbb{R}$ en $\mathbb{C}$
>La función
>$$f:\mathbb{R}\hookrightarrow\mathbb{C},\qquad f(a)=(a,0),$$
>es inyectiva, pero no necesariamente sobreyectiva. Por lo tanto, identificamos $\mathbb{R}$ con su imagen y escribimos $\mathbb{R}\subseteq\mathbb{C}$.

>[!Definition] Parte real y parte imaginaria
>Dado $z\in\mathbb{C}$, escribimos
>$$z=a+ib,$$
>donde
>$$a=\operatorname{Re}z,\qquad b=\operatorname{Im}z.$$

>[!Remark] Notación
>La identificación anterior se expresa mediante
>$$a+ib=(a,0)+(0,1)(b,0)=(a,b).$$

>[!Example] Identidades algebraicas
>1. Probar que
>   $$z^2+1=(z+i)(z-i).$$
>2. Más generalmente, para $z,w\in\mathbb{C}$, $$z^2+w^2=(z+iw)(z-iw).$$

## Valor absoluto y conjugado

>[!Remark] Inverso multiplicativo
>Para $z=a+ib\neq0$,
>$$(a+ib)(a-ib)=a^2+b^2.$$
>Por lo tanto,
>$$z^{-1}=\frac{a-ib}{a^2+b^2}.$$

>[!Property] Propiedades de cuerpo
>1. Probar que $\mathbb{C}$ es un cuerpo.
>2. Probar que
>   $$zw=0\Longrightarrow z=0\quad\text{o}\quad w=0.$$
>
>>[!Proof]-
>>- **1. $\mathbb C$ es un cuerpo.**
>>	1. Sean $z=(a,b)$, $w=(c,d)$ y $u=(e,f)$ elementos de $\mathbb C$.
>>	2. La suma y el producto son operaciones internas, ya que sus coordenadas son sumas y productos de números reales.
>>	3. Como la suma se define componente a componente, sus propiedades asociativa y conmutativa se heredan de $\mathbb R$. Su elemento neutro es $(0,0)$ y el inverso aditivo de $(a,b)$ es $$-(a,b)=(-a,-b).$$ Por lo tanto, $(\mathbb C,+)$ es un grupo abeliano.
>>	4. El producto es conmutativo, pues $$(a,b)(c,d)=(ac-bd,ad+bc)=(c,d)(a,b),$$ y su elemento neutro es $(1,0)$.
>>	5. El producto es asociativo, ya que ambos lados de la igualdad son $$((a,b)(c,d))(e,f)=(a,b)((c,d)(e,f))=(ace-adf-bcf-bde,\;acf+ade+bce-bdf).$$
>>	6. La propiedad distributiva se obtiene usando la distributividad en $\mathbb R$: $$\begin{aligned}(a,b)\big((c,d)+(e,f)\big)&=\big(a(c+e)-b(d+f),\;a(d+f)+b(c+e)\big)\\&=(ac-bd,ad+bc)+(ae-bf,af+be)\\&=(a,b)(c,d)+(a,b)(e,f).\end{aligned}$$
>>	7. Si $(a,b)\neq(0,0)$, entonces $a^2+b^2>0$ y existe el inverso multiplicativo $$(a,b)^{-1}=\left(\frac{a}{a^2+b^2},-\frac{b}{a^2+b^2}\right),$$ pues $$(a,b)\left(\frac{a}{a^2+b^2},-\frac{b}{a^2+b^2}\right)=(1,0).$$
>>	8. Finalmente, $(0,0)\neq(1,0)$. Por los pasos anteriores, $\mathbb C$ es un cuerpo.
>>- **2. $\mathbb C$ no tiene divisores de cero.**
>>	1. Supongamos que $zw=0$.
>>	2. Si $z=0$, la conclusión ya se cumple.
>>	3. Si $z\neq0$, como $\mathbb C$ es un cuerpo, existe $z^{-1}$. Multiplicando por él, obtenemos $$w=(z^{-1}z)w=z^{-1}(zw)=z^{-1}0=0.$$
>>	4. En consecuencia, $$zw=0\Longrightarrow z=0\quad\text{o}\quad w=0.$$

>[!Definition] Módulo y conjugado
>Dado $z=a+ib\in\mathbb{C}$, el **valor absoluto** o **módulo** de $z$ es
>$$|z|=\sqrt{a^2+b^2},$$
>y el **conjugado** de $z$ es
>$$\bar z=a-ib.$$

>[!Proposition] Propiedades del módulo y del conjugado
>Para $z,w\in\mathbb{C}$:
>
>1. $|z|^2=z\bar z$.
>2. Si $z\neq0$, entonces
>   $$z^{-1}=\frac{\bar z}{|z|^2}.$$
>3. 
>   $$\operatorname{Re}z=\frac12(z+\bar z),\qquad
>   \operatorname{Im}z=\frac{1}{2i}(z-\bar z).$$
>4. 
>   $$\overline{z+w}=\bar z+\bar w,\qquad \overline{zw}=\bar z\bar w.$$
>5. $|zw|=|z||w|$.
>6. $|z|=|\bar z|$.
>7. 
>   $$|z+w|^2=|z|^2+2\operatorname{Re}(z\bar w)+|w|^2,$$
>   $$|z-w|^2=|z|^2-2\operatorname{Re}(z\bar w)+|w|^2.$$
>8. 
>   $$-|z|\leq\operatorname{Re}z\leq|z|,\qquad
>   -|z|\leq\operatorname{Im}z\leq|z|.$$

^04ad32

>[!Lemma] Caso de igualdad para la parte real
>Dado $z=a+ib\in\mathbb{C}$ tal que $\operatorname{Re}z=|z|$, se tiene que $z\in\mathbb{R}$.
>
>>[!Proof]-
>>1. Como $|z|=\operatorname{Re}z=a$, resulta $$a=\sqrt{a^2+b^2}.$$
>>2. Al elevar al cuadrado, $$a^2=a^2+b^2,$$de donde $b^2=0$ y, por lo tanto, $b=0$.

^b8b45e

## Representación de $\mathbb{C}$ en $\mathbb{R}^2$

>[!Remark]
>El número complejo $z=a+ib$ se representa mediante el punto $(a,b)$ del plano. El eje horizontal corresponde a $\mathbb{R}$ y el eje vertical a los múltiplos de $i$.

>[!Proposition] Desigualdad triangular
>Dados $z,w\in\mathbb{C}$,
>$$|z+w|\leq |z|+|w|.$$
>Además, se da la igualdad si y solo si uno de ellos es un múltiplo real positivo del otro.
>
>>[!Proof]-
>>- Desigualdad  
>>	1. Por [[FA - Teo1#^04ad32]] $$|z+w|^2=|z|^2+2\operatorname{Re}(z\bar w)+|w|^2.$$
>>	2. Como $$\operatorname{Re}(z\bar w)\leq |z\bar w|=|z||w|,$$se obtiene $$|z+w|^2\leq |z|^2+2|z||w|+|w|^2=(|z|+|w|)^2.$$
>>	3. Luego, $$|z+w|\leq |z|+|w|.$$
>>- Vuelta
>>	1. Si $w=tz$ con $t\in\mathbb{R}_{>0}$, la igualdad se verifica directamente.
>>- Ida
>>	1. Recíprocamente, supongamos que $$|z+w|=|z|+|w|.$$
>>	2. Entonces (como en paso 1 de la desigualdad) $$|z|^2+2\operatorname{Re}(z\overline{w})+|w|^2=|z+w|^2=(|z|+|w|)^2=|z|^2+2|z||w|+|w|^2.$$
>>	3. Entonces $Re(z \bar{w})=|z \bar{w}|\geq 0$ 
>>	4. Si $z=0$, entonces $z=0w$, de modo que uno de los números es un múltiplo real no negativo del otro.
>>	5. Si $z\neq0$, sea $$t=\bar zw\in\mathbb R_{\geq0}.$$ En efecto, $z\bar w\in\mathbb R_{\geq0}$ que $\bar{z}w$ lo és  
>>	6. Entonces $$tz=(\bar zw)z=w(\bar zz)=w|z|^2,$$ y, por lo tanto, $$w=\frac{t}{|z|^2}z.$$
>>	7. Así, $w=\lambda z$ con $$\lambda=\frac{t}{|z|^2}\in\mathbb R_{\geq0}.$$ por que $t\geq 0$ (esto también incluye el caso $w=0$, para el cual $t=\lambda=0$)

>[!Corollary] Desigualdad triangular finita
>Si $z_i\in\mathbb{C}$ para $i=1,\dots,n$, entonces
>$$|z_1+\cdots+z_n|\leq |z_1|+\cdots+|z_n|.$$
>
>>[!Proof]-
>>8. Procedemos por inducción en $n$.
>>9. Para $n=1$, se tiene $$|z_1|\leq |z_1|,$$ con igualdad. Por lo tanto, el resultado vale en el caso base.
>>10. Supongamos que el resultado vale para algún $n\geq1$, es decir, supongamos que $$|z_1+\cdots+z_n|\leq |z_1|+\cdots+|z_n|.$$
>>11. Para $n+1$ números complejos, aplicamos primero la desigualdad triangular a $(z_1+\cdots+z_n)+z_{n+1}$ y luego la hipótesis inductiva: $$\begin{aligned}|z_1+\cdots+z_n+z_{n+1}|&=|(z_1+\cdots+z_n)+z_{n+1}|\\&\leq |z_1+\cdots+z_n|+|z_{n+1}|\\&\leq |z_1|+\cdots+|z_n|+|z_{n+1}|.\end{aligned}$$
>>12. Así, el resultado vale para $n+1$. Por el principio de inducción, vale para todo $n\geq1$.

>[!Corollary] Desigualdad triangular inversa
>Si $z,w\in\mathbb{C}$, entonces
>$$\bigl||z|-|w|\bigr|\leq |z-w|.$$
>
>>[!Proof]-
>>13. Ejercicio.

## Representación polar y raíces

>[!Remark]
>Sea $z=x+iy\in\mathbb{C}$. Las ecuaciones $$x=r\cos\theta,\qquad y=r\sin\theta,$$
con $r>0$ y $\theta\in\mathbb{R}$, definen las coordenadas polares de $z$.

>[!Remark] Módulo y argumento
>1. $r=|z|$.
>2. El ángulo $\theta$ entre el vector $(x,y)$ y el semieje real positivo se llama un **argumento** de $z$.
>3. El argumento no es único: al sumar $2\pi$ a $\theta$ se obtiene el mismo número complejo. Por eso $\operatorname{arg}:\mathbb{C}\to\mathbb{R}$ no define por sí sola una función univaluada.

>[!Remark] Notacion
>Usaremos la notación $$\operatorname{cis}(\theta):=\cos\theta+i\sin\theta=e^{i\theta}.$$
>Por lo tanto, si $(r,\theta)$ es una coordenada polar de $z$, $$z=r\operatorname{cis}(\theta)=r(\cos\theta+i\sin\theta)=re^{i\theta}.$$

>[!Proposition] Producto en forma polar
>Sean $z_1=r_1\operatorname{cis}(\theta_1)$ y $z_2=r_2\operatorname{cis}(\theta_2)$. Entonces
>$$z_1z_2=r_1r_2\operatorname{cis}(\theta_1+\theta_2).$$
>En particular,
>$$|z_1z_2|=r_1r_2,\qquad \arg(z_1z_2)=\arg(z_1)+\arg(z_2).$$
>
>>[!Proof]-
>>1. Aplicando las fórmulas de adición del seno y del coseno, $$\begin{aligned}z_1z_2&=r_1r_2(\cos\theta_1+i\sin\theta_1)(\cos\theta_2+i\sin\theta_2)\\&=r_1r_2\bigl[(\cos\theta_1\cos\theta_2-\sin\theta_1\sin\theta_2)+i(\cos\theta_1\sin\theta_2+\cos\theta_2\sin\theta_1)\bigr]\\&=r_1r_2\bigl(\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\bigr)\\&=r_1r_2\operatorname{cis}(\theta_1+\theta_2).\end{aligned}$$

>[!Corollary] Producto de varios números complejos
>Dados $z_k=r_k\operatorname{cis}(\theta_k)$, $k=1,\dots,n$,
>$$z_1z_2\cdots z_n=r_1r_2\cdots r_n\operatorname{cis}(\theta_1+\theta_2+\cdots+\theta_n).$$
>En particular, si $z=r\operatorname{cis}(\theta)$, $$z^n=r^n\operatorname{cis}(n\theta).$$
>>[!Proof]-
>>2. La fórmula anterior vale para todo $n\in\mathbb{Z}$. Si $z\neq0$, por [[FA - Teo1#^04ad32|Propiedad 2]] $$\begin{aligned}z^{-1}&=\frac{\bar z}{|z|^2}\\&=\frac{r(\cos\theta-i\sin\theta)}{r^2}\\&=r^{-1}(\cos(-\theta)+i\sin(-\theta))=r^{-1}\operatorname{cis}(-\theta).\end{aligned}$$
>>3. Luego, para $n\in\mathbb{N}$, $$z^{-n}=(z^{-1})^n=r^{-n}\operatorname{cis}(-n\theta),$$y, por lo tanto, $$z^n=r^n\operatorname{cis}(n\theta),\qquad n\in\mathbb{Z}.$$
>>4. En particular, $$\bigl(\operatorname{cis}\theta\bigr)^n=\cos(n\theta)+i\sin(n\theta).$$

>[!Remark] Cociente en forma polar
>Si $z_1=r_1\operatorname{cis}(\theta_1)$ y $z_2=r_2\operatorname{cis}(\theta_2)$, con $z_2\neq0$, entonces
>$$\frac{z_1}{z_2}=\frac{r_1}{r_2}\operatorname{cis}(\theta_1-\theta_2).$$

### Raíces

>[!Definition] Raíz $n$-ésima
>Dados $a\in\mathbb{C}$ y $n\in\mathbb{N}$, buscamos $z\in\mathbb{C}$ tal que $z^n=a$. Si existe, se lo llama una **raíz $n$-ésima** de $a$.

>[!Remark]
>Existe $z\in \mathbb{C}$ tal que $z^{n}=a$ y si existe cuantas distintas hay ?
>Escribamos $$a=r\operatorname{cis}(\alpha),\qquad z=|z|\operatorname{cis}(\theta).$$
>Entonces $z^n=a$ si y solo si $$|z|^n=r,\qquad n\theta=\alpha+2k\pi,\quad k\in\mathbb{Z}.$$
>Por lo tanto, $$|z|=\sqrt[n]{r},\qquad \theta=\frac{\alpha+2k\pi}{n}.$$
>Las raíces distintas se obtienen con $k=0,1,\dots,n-1$; todas se encuentran sobre la circunferencia de radio $\sqrt[n]{r}$.

>[!Definition] Raíces de la unidad
>Cuando $a=1=\operatorname{cis}(0)$, las soluciones de $z^n=1$ se llaman **raíces $n$-ésimas de la unidad**:
>$$z_k=\operatorname{cis}\left(\frac{2k\pi}{n}\right),\qquad k=0,1,\dots,n-1.$$

## Esfera de Riemann y plano complejo extendido

>[!Remark]
>Se define $$\mathbb{C}_\infty=\mathbb{C}\cup\{\infty\}.$$
>Identificaremos $\mathbb{C}_\infty$ con $S^2\subseteq\mathbb{R}^3$ mediante la proyección estereográfica.
>Sea $N=(0,0,1)$ el polo norte. Para $z=(x,y,0)$ en el plano complejo, se considera la recta $$r(t)=tN+(1-t)z=((1-t)x,(1-t)y,t).$$
>La intersección distinta de $N$ con $S^2$ se obtiene imponiendo $\|r(t)\|^2=1$, lo que da $$t=\frac{|z|^2-1}{|z|^2+1}.$$
>Así, la identificación $\varphi:\mathbb{C}_\infty\to S^2$ está dada por $$\varphi(z)=\begin{cases}\left(\dfrac{z+\bar z}{|z|^2+1}\dfrac{-i(z-\bar z)}{|z|^2+1},\dfrac{|z|^2-1}{|z|^2+1}\right),&z\in\mathbb{C},\\[1.2em]N,&z=\infty.\end{cases}$$

## Topología en $\mathbb{C}_\infty$

>[!Definition]
>Definimos una métrica en $\mathbb{C}_\infty$: la distancia entre $z,z'\in\mathbb{C}_\infty$ es la distancia euclídea entre sus proyecciones estereográficas en $S^2$, $$d(z,z')=d_{S^2}(\varphi(z),\varphi(z'))=\|\varphi(z)-\varphi(z')\|.$$
>Haciendo las cuentas, $$d(z,z')=\frac{2|z-z'|}{\sqrt{(1+|z|^2)(1+|z'|^2)}},$$y $$d(z,\infty)=\frac{2}{\sqrt{1+|z|^2}}.$$

### $\mathbb{C}$ como espacio topológico

>[!Definition] $\mathbb{C}$ es espacio metrico 
>En $\mathbb{C}$ usamos la métrica $$d(z,z')=|z-z'|.$$
>Así, $(\mathbb{C},d)$ es un espacio métrico. Para $z_0\in\mathbb{C}$ y $r>0$:
>- Bola abierta: $$B(z_0,r)=\{z\in\mathbb{C}:|z-z_0|<r\}.$$
>- Bola cerrada: $$\overline{B}(z_0,r)=\{z\in\mathbb{C}:|z-z_0|\leq r\}.$$
>- Circunferencia: $$S(z_0,r)=\{z\in\mathbb{C}:|z-z_0|=r\}.$$

>[!Definition] Convergencia de sucesiones
>Sea $(z_n)$ una sucesión de números complejos. Decimos que $z_n$ converge a $L\in\mathbb{C}$ si
>$$\forall\varepsilon>0\ \exists N\in\mathbb{N}\ \text{tal que}\ n>N\Longrightarrow |z_n-L|<\varepsilon.$$

>[!Definition] Sucesión de Cauchy
>Una sucesión $(z_n)$ es de Cauchy si
>$$\forall\varepsilon>0\ \exists N\in\mathbb{N}\ \text{tal que}\ n,m>N\Longrightarrow |z_n-z_m|<\varepsilon.$$

>[!Theorem] Completitud de $\mathbb{C}$
>Una sucesión $(z_n)$ en $\mathbb{C}$ converge si y solo si es de Cauchy. En otras palabras, $\mathbb{C}$ es un cuerpo completo.
>
>>[!Proof]-
>>- **$(\Rightarrow)$**
>>	1. Supongamos que $z_n\to L$.
>>	2. Dado $\varepsilon>0$, existe $N\in\mathbb N$ tal que $$|z_n-L|<\frac{\varepsilon}{2}\qquad(n>N).$$
>>	3. Si $n,m>N$, por la desigualdad triangular, $$|z_n-z_m|=|(z_n-L)+(L-z_m)|\leq |z_n-L|+|z_m-L|<\varepsilon.$$
>>	4. Por lo tanto, $(z_n)$ es de Cauchy.
>>- **$(\Leftarrow)$**
>>	1. Supongamos que $(z_n)$ es de Cauchy. Primero probamos que está acotada.
>>	2. Tomando $\varepsilon=1$, existe $N_1\in\mathbb N$ tal que $$|z_n-z_m|<1\qquad(n,m>N_1).$$
>>	3. En particular, tomando $m=N_1+1$, para todo $n>N_1$ se tiene $$|z_n-z_{N_1+1}|<1,$$ y por la desigualdad triangular, $$|z_n|\leq |z_n-z_{N_1+1}|+|z_{N_1+1}|<1+|z_{N_1+1}|.$$
>>	4. Si tomamos $$M=\max\{|z_1|,\dots,|z_{N_1}|,|z_{N_1+1}|+1\},$$ entonces $|z_n|\leq M$ para todo $n$. Por lo tanto, $(z_n)$ está acotada.
>>	5. Por el teorema de Bolzano-Weierstrass, $(z_n)$ tiene una subsucesión convergente $(z_{n_k})$. Sea $$z_{n_k}\to L.$$
>>	6. Dado $\varepsilon>0$, como $(z_n)$ es de Cauchy, existe $N_2\in\mathbb N$ tal que $$|z_n-z_m|<\frac{\varepsilon}{2}\qquad(n,m>N_2).$$
>>	7. Como $z_{n_k}\to L$, existe $N_3\in\mathbb N$ tal que $$|z_{n_k}-L|<\frac{\varepsilon}{2}\qquad(k>N_3).$$
>>	8. Si $n>N_2$, elegimos $k>N_3$ suficientemente grande para que $n_k>N_2$. Entonces $$|z_n-L|\leq |z_n-z_{n_k}|+|z_{n_k}-L|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.$$
>>	9. Por lo tanto, $z_n\to L$.

## Fin Clase 1

## Funciones de $\mathbb{C}$ en $\mathbb{C}$

>[!Definition] Límite y continuidad
>Sea $f:X\subseteq \mathbb{C}\to\mathbb{C}$.
>
>1. Dado $a$ punto de acumulacion de $X$, decimos que
>   $$\lim_{z\to a}f(z)=L\in\mathbb{C}$$
>   si, para todo $\varepsilon>0$, existe $\delta>0$ tal que
>   $$|z-a|<\delta\Longrightarrow |f(z)-L|<\varepsilon.$$
>2. La función $f$ es **continua** en $a\in X$ si
>   $$\lim_{z\to a}f(z)=f(a).$$
>   Equivalentemente, para toda sucesión $z_n\to a$ se tiene $f(z_n)\to f(a)$.

>[!Definition] Convergencia puntual y uniforme
>Sea $X\subseteq\mathbb{C}$ y sean $f_n,f:X\to\mathbb{C}$.
>
>- Decimos que $f_n\to f$ **puntualmente** en $X$ si
>   $$\lim_{n\to\infty}f_n(x)=f(x)\qquad\text{para todo }x\in X.$$ osea $$\forall x\in X ,\ \forall \epsilon>0 \ \exists N_{0}(x,\epsilon)\in \mathbb{N} \quad\text{tal que}\quad n>N_{0}(x,\epsilon)\Longrightarrow |f_{n}(x)-f(x)|<\epsilon  $$ Aqui $N_{0}$ depende de $x$ y $\epsilon$    
> - Decimos que $f_n\to f$ **uniformemente** en $X$ si
>   $$\forall\varepsilon>0\ \exists N_0(\epsilon)\in\mathbb{N}\ \text{tal que}\ n>N_0(\epsilon)\Longrightarrow |f_n(x)-f(x)|<\varepsilon\quad \quad\forall x\in X$$ Aquí $N_0$ depende solo de $\varepsilon$, no de $x$.

>[!Proposition] El límite uniforme de funciones continuas es continuo
>Si $(f_n)$ es una sucesión de funciones continuas y $f_n\to f$ uniformemente, entonces $f$ es continua.
>
>>[!Proof]-
>>1. Sea $a\in\mathbb{C}$. Dado $\varepsilon>0$, como $f_n\to f$ uniformemente, existe $N_1$ tal que $$|f_{N_1}(x)-f(x)|<\frac\varepsilon3\qquad\text{para todo }x\in X.$$
>>2. Como $f_{N_1}$ es continua en $a$, existe $\delta>0$ tal que $$|z-a|<\delta\Longrightarrow |f_{N_1}(z)-f_{N_1}(a)|<\frac\varepsilon3.$$
>>3. Entonces $$\begin{aligned}|f(z)-f(a)|&\leq |f(z)-f_{N_1}(z)|+|f_{N_1}(z)-f_{N_1}(a)|+|f_{N_1}(a)-f(a)|\\&<\frac\varepsilon3+\frac\varepsilon3+\frac\varepsilon3=\varepsilon.\end{aligned}$$
>>4. Por lo tanto, $f$ es continua en $a$.

## Series

>[!Definition] Convergencia de una serie
>Sea $(a_n)\subseteq\mathbb{C}$. Decimos que la serie $\sum_{n=0}^{\infty}a_n$ converge a $L$ si
>$$\lim_{N\to\infty}\sum_{n=0}^{N}a_n=L.$$
>En ese caso escribimos
>$$\sum_{n=0}^{\infty}a_n=L.$$
>Equivalentemente, para todo $\varepsilon>0$ existe $N_0\in\mathbb{N}$ tal que
>$$N>N_0\Longrightarrow \left|\sum_{n=0}^{N}a_n-L\right|<\varepsilon.$$

>[!Definition] Convergencia absoluta
>La serie es **absolutamente convergente** si $$\sum_{n=0}^{\infty}|a_n|$$ converge.

>[!Proposition] Propiedades básicas de las series
>1. Si $\sum a_n$ converge, entonces $a_n\to0$.
>2. Si $\sum|a_n|$ converge, entonces $\sum a_n$ converge.
>3. La serie $\sum a_n$ converge si y solo si satisface el criterio de Cauchy:
>   $$\forall\varepsilon>0\ \exists N_0\ \text{tal que}\ m>N_0\Longrightarrow
>   \left|\sum_{n=m}^{\infty}a_n\right|<\varepsilon.$$

>[!Definition] Criterio de Cauchy para series
>La serie $\sum a_n$ es de Cauchy si la sucesión de sumas parciales
>$$S_N=\sum_{n=0}^{N}a_n$$
>es de Cauchy.

>[!Proposition] Criterio de Cauchy para series
>Una serie $\sum a_n$ converge si y solo si es de Cauchy.
>
>>[!Proof]-
>>Sea $$S_n=\sum_{k=0}^{n}a_k.$$
>>- **$(\Rightarrow)$**
>>	1. Supongamos que $\sum a_n$ converge. Entonces existe $S\in\mathbb C$ tal que $S_n\to S$.
>>	2. Dado $\varepsilon>0$, existe $N\in\mathbb N$ tal que $$|S_n-S|<\frac{\varepsilon}{2}\qquad(n>N).$$
>>	3. Si $n,m>N$, por la desigualdad triangular, $$|S_n-S_m|\leq |S_n-S|+|S-S_m|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.$$
>>	4. Por lo tanto, $(S_n)$ es de Cauchy y, por definición, la serie $\sum a_n$ es de Cauchy.
>>- **$(\Leftarrow)$**
>>	1. Supongamos que $\sum a_n$ es de Cauchy. Por definición, $(S_n)$ es una sucesión de Cauchy en $\mathbb C$.
>>	2. Como $\mathbb C$ es completo, existe $S\in\mathbb C$ tal que $S_n\to S$.
>>	3. Por definición de convergencia de una serie, $$\sum_{n=0}^{\infty}a_n=S.$$ Por lo tanto, $\sum a_n$ converge.

>[!Proposition] La convergencia absoluta implica convergencia
>Si $\sum a_n$ converge absolutamente, entonces $\sum a_n$ converge.
>
>>[!Proof]-
>>4. Sean $$S_n=\sum_{i=0}^{n}a_i,\qquad T_n=\sum_{i=0}^{n}|a_i|.$$
>>5. Como $\sum|a_n|$ converge, $(T_n)$ es de Cauchy. Dado $\varepsilon>0$, existe $N_1$ tal que, si $n>m>N_1$, $$|T_n-T_m|=\sum_{i=m+1}^{n}|a_i|<\varepsilon.$$
>>6. Entonces $$|S_n-S_m|=\left|\sum_{i=m+1}^{n}a_i\right|\leq\sum_{i=m+1}^{n}|a_i|<\varepsilon.$$
>>7. Por lo tanto, $(S_n)$ es de Cauchy y, por definición, $\sum a_n$ es de Cauchy. Por el criterio de Cauchy para series, $\sum a_n$ converge.

### Series de funciones

>[!Definition] Convergencia puntual de una serie de funciones
>Sea $X\subseteq\mathbb{C}$ y sea $(f_n)$ una sucesión de funciones $f_n:X\to\mathbb{C}$. Decimos que
>$$\sum_{n=0}^{\infty}f_n(x)$$
>converge si para cada $x\in X$ converge a un valor $f(x)$. La función $f:X\to\mathbb{C}$ definida por
>$$\sum_{n=0}^{\infty}f_n(x)=f(x)$$
>se llama función límite. Equivalentemente, si
>$$S_N(x)=\sum_{n=0}^{N}f_n(x),$$
>entonces $S_N(x)\to f(x)$ para todo $x\in X$.

>[!Definition] Convergencia uniforme de una serie de funciones
>La serie $\sum f_n(x)$ converge uniformemente en $X$ si la sucesión de funciones de sumas parciales $(S_N)$ converge uniformemente en $X$.

>[!Theorem] Criterio $M$ de Weierstrass
>Sean $f_n:X\to\mathbb{C}$ funciones tales que
>$$|f_n(x)|\leq M_n\qquad\text{para todo }x\in X.$$
>Si la serie numérica $\sum M_n$ converge, entonces $\sum f_n$ converge uniformemente.
>
>>[!Proof]-
>>1. Sea $$S_N(x)=\sum_{n=0}^{N}f_n(x).$$ Para cada $x\in X$, se tiene $$\sum_{n=0}^{\infty}|f_n(x)|\leq\sum_{n=0}^{\infty}M_n<\infty.$$ Por lo tanto, $\sum f_n(x)$ converge absolutamente y, en consecuencia, converge. Entonces podemos definir $$f(x):=\sum_{n=0}^{\infty}f_n(x).$$
>>2. Dado $\varepsilon>0$, como $\sum M_n$ converge y $M_n\geq |f_n(x)|\geq0$, existe $N_0\in\mathbb N$ tal que $$\sum_{n=N}^{\infty}M_n<\varepsilon\qquad\text{para todo }N>N_0.$$ en particular la suma podria empezar desde $N+1$ seria lo mismo
>>3. Entonces, para todo $x\in X$ y todo $N>N_0$, $$\begin{aligned}|f(x)-S_N(x)|&=\left|\sum_{n=0}^{\infty}f_n(x)-\sum_{n=0}^{N}f_n(x)\right|\\&=\left|\sum_{n=N+1}^{\infty}f_n(x)\right|\\&\leq\sum_{n=N+1}^{\infty}|f_n(x)|\\&\leq\sum_{n=N+1}^{\infty}M_n\\&<\varepsilon.\end{aligned}$$
>>4. El mismo $N_0$ sirve para todo $x\in X$, pues depende solamente de la cola de $\sum M_n$. Por lo tanto, la sucesión de funciones $(S_N)$ converge uniformemente a $f$ en $X$ y la serie $\sum f_n$ converge uniformemente en $X$.

## Límites superior e inferior

>[!Remark] Limite superior e inferior
>Sea $\{a_n\}\subseteq\mathbb{R}$. Se definen $$\overline{\lim}_{n\to\infty}a_n=\limsup_{n\to\infty}a_n=\lim_{n\to\infty}\sup\{a_n,a_{n+1},\dots\}=\inf_{n\in\mathbb{N}}\sup\{a_n,a_{n+1},\dots\},$$y $$\underline{\lim}_{n\to\infty}a_n=\liminf_{n\to\infty}a_n=\lim_{n\to\infty}\inf\{a_n,a_{n+1},\dots\}=\sup_{n\in\mathbb{N}}\inf\{a_n,a_{n+1},\dots\}.$$

>[!Proposition] Caracterización mediante cotas
>Sea $L=\limsup_{n\to\infty}a_n\in\mathbb{R}$.
>
>- (a) Si $L_1>L$, existe $N_0$ tal que
>   $$a_n<L_1\qquad(n>N_0).$$
>- (b) Si $L_1<L$, existen infinitos $n$ tales que
>   $$a_n>L_1.$$
>
>>[!Proof]-
>>- (a) 
>>	Como $$L=\lim_{n\to\infty}\sup\{a_n,a_{n+1},\dots\},$$ existe $N_0$ tal que $\sup\{ a_{N_{0}},a_{N_{0}+1},\ldots \}$ esta "muy cerca" de $L$ en particular lo podemos pedir tal que $$\sup\{a_n,a_{n+1},\dots\}<L_1\qquad(n>N_0),$$ y por lo tanto $a_n<L_1$ para $n>N_0$.
>>- (b)
>>	Como $$L=\inf_n\sup\{a_n,a_{n+1},\dots\},$$ se tiene $L_1<\sup\{a_n,a_{n+1},\dots\}$ para todo $n$. Por ello, $L_1$ no puede ser cota superior de ninguna cola de la sucesión; en cada cola existe algún término mayor que $L_1$. En consecuencia, hay infinitos $n$ tales que $a_n>L_1$.

## Series de potencias

>[!Definition] Serie de potencias
>Una expresión de la forma
>$$\sum_{n=0}^{\infty}a_n(z-a)^n,$$
>con $a\in\mathbb{C}$ y $(a_n)\subseteq\mathbb{C}$, se llama **serie de potencias centrada en $a$**.

>[!Example] Serie geométrica
>Para $a_n=1$ y $a=0$ se obtiene
>$$\sum_{n=0}^{\infty}z^n.$$
>La suma parcial es
>$$S_N=1+z+\cdots+z^N=\frac{1-z^{N+1}}{1-z}.$$
>Si $|z|<1$, entonces $z^{N+1}\to0$ y
>$$\sum_{n=0}^{\infty}z^n=\frac{1}{1-z}.$$
>Si $|z|\geq1$, los términos $z^n$ no tienden a cero y la serie diverge.

>[!Remark] Condición necesaria
>Si una serie $\sum a_n$ converge, entonces $a_n\to0$.
>
>>[!Proof]-
>>1. Si $S_N=\sum_{n=0}^{N}a_n$ converge, entonces $(S_N)$ es de Cauchy.
>>2. En particular, $$|S_{N+1}-S_N|=|a_{N+1}|\to0.$$

>[!Theorem] Teorema de Abel
>Sea
>$$\sum_{n=0}^{\infty}a_n(z-a)^n$$
>una serie de potencias centrada en $a$, y sea $R\in[0,\infty]$ tal que
>$$\frac1R=\limsup_{n\to\infty}|a_n|^{1/n}.$$
>Entonces:
>
>1. Si $z\in  \mathbb{C}$ tal que $|z-a|<R$, la serie converge absolutamente.
>2. Si $|z-a|>R$, los términos de la serie no están acotados y, por lo tanto, la serie diverge.
>3. Si $0<r<R$, la serie converge uniformemente en
>   $$\{z\in\mathbb{C}:|z-a|\leq r\}.$$
>
>El número $R$ es el único con estas propiedades y se llama **radio de convergencia**.
>
>>[!Proof]-
>>1. Podemos suponer $a=0$.
>>2. Sea $|z|<R$. Elegimos $r$ tal que $|z|<r<R$. Como $$\limsup|a_n|^{1/n}=\frac1R<\frac1r,$$ existe $N_0$ tal que $$|a_n|^{1/n}<\frac1r\qquad(n>N_0).$$ Así, $$|a_n|<\left(\frac1r\right)^n$$ y $$\sum_{n=0}^{\infty}|a_nz^n|\leq\sum_{n=0}^{\infty}\left(\frac{|z|}{r}\right)^n<\infty.$$
>>3. Sea $|z|>R$. Elegimos $r$ tal que $|z|>r>R$. Entonces $$\frac1R>\frac1r.$$ Por la caracterización del límite superior, existen infinitos $n$ tales que $$|a_n|^{1/n}>\frac1r.$$ Para esos índices, $$|a_nz^n|>\left(\frac{|z|}{r}\right)^n,$$ que no está acotado porque $|z|/r>1$. Luego los términos no tienden a cero y la serie diverge.
>>4. Sea $|z|\leq r<R$. Elegimos $\rho$ con $r<\rho<R$. Para $n$ suficientemente grande, $$|a_n|^{1/n}<\frac1\rho.$$ Por lo tanto, $$|a_nz^n|\leq\left(\frac r\rho\right)^n.$$ Como la serie geométrica $\sum(r/\rho)^n$ converge, el criterio $M$ de Weierstrass implica convergencia uniforme.

>[!Exercise] Unicidad del radio
>Probar que el radio de convergencia es único.

>[!Proposition] Criterio del cociente para el radio
>Sea
>$$\sum_{n=0}^{\infty}a_n(z-a)^n$$
>una serie de potencias con radio de convergencia $R$. Si existe el límite
>$$\lim_{n\to\infty}\frac{|a_n|}{|a_{n+1}|},$$
>posiblemente infinito, entonces
>$$R=\lim_{n\to\infty}\frac{|a_n|}{|a_{n+1}|}.$$
>
>>[!Proof]-
>>1. Podemos suponer $a=0$ y escribir $$\alpha=\lim_{n\to\infty}\frac{|a_n|}{|a_{n+1}|}.$$ Basta comprobar que $\alpha$ satisface las dos propiedades que caracterizan al radio.
>>2. Si $|z|<\alpha$, elegimos $r$ con $|z|<r<\alpha$. Para $n$ suficientemente grande, $$\frac{|a_n|}{|a_{n+1}|}>r,$$ es decir, $$|a_{n+1}|r^{n+1}\leq |a_n|r^n.$$
>>3. Por iteración existe $B>0$ tal que $$|a_n|r^n\leq B,$$ y entonces $$|a_nz^n|\leq B\left(\frac{|z|}{r}\right)^n.$$ La comparación con una serie geométrica muestra que $\sum|a_nz^n|$ converge.
>>4. Si $|z|>\alpha$, elegimos $r$ con $|z|>r>\alpha$. Para $n$ suficientemente grande, $$\frac{|a_n|}{|a_{n+1}|}<r,$$ de modo que $|a_n|r^n$ es creciente a partir de cierto índice y queda acotado inferiormente por alguna constante $B>0$.
>>5. Así, $$|a_nz^n|\geq B\left(\frac{|z|}{r}\right)^n\to\infty.$$ Los términos no tienden a cero, por lo que la serie diverge. Por unicidad, $R=\alpha$.
