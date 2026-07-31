
>[!Exercise]
>Sea $F:\mathbb R^4\setminus\{0\}\to\mathbb R^2$ definida por $$F(a,b,c,d)=(a^2-b^2+c^2-d^2,\,2ab+2cd).$$
>- (a) Probar que $F$ es una submersión y que $H=F^{-1}(1,0)$ es una subvariedad incrustada de $\mathbb R^4$.
>- (b) Sean $(x,y,z,w)$ las coordenadas usuales de $\mathbb R^4$ y sea $$Y=-z\frac{\partial}{\partial x}-w\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}+y\frac{\partial}{\partial w}.$$ Mostrar que existe un campo $X$ en $H$ tal que $(di)\circ X=Y\circ i$, donde $i:H\to\mathbb R^4$ es la inclusión.
>- (c) Encontrar las curvas integrales de $X$. ¿Es $X$ completo?
>
>>[!Proof]-
>>- (a)
>>	1. Para $p=(a,b,c,d)\in\mathbb R^4\setminus\{0\}$, $$dF_p=\begin{pmatrix}2a&-2b&2c&-2d\\2b&2a&2d&2c\end{pmatrix}.$$
>>	2. Las dos filas de esta matriz son ortogonales, pues $$(2a)(2b)+(-2b)(2a)+(2c)(2d)+(-2d)(2c)=0.$$
>>	3. Además ambas filas tienen norma al cuadrado $$4(a^2+b^2+c^2+d^2)>0,$$ ya que $p\neq0$. Por lo tanto ambas filas son no nulas y ortogonales, luego son linealmente independientes.
>>	4. Así, $\operatorname{rg}(dF_p)=2$ para todo $p\in\mathbb R^4\setminus\{0\}$. Como el codominio tiene dimensión $2$, $dF_p$ es sobreyectiva para todo $p$, por lo tanto $F$ es una submersión.
>>	5. En particular, $(1,0)$ es un valor regular de $F$. Por el teorema del valor regular, $$H=F^{-1}(1,0)$$ es una subvariedad incrustada de $\mathbb R^4$ de dimensión $4-2=2$, cuya incrustación es la inclusión $i:H\hookrightarrow\mathbb R^4$.
>>- (b)
>>	1. Sea $p=(a,b,c,d)\in H$. Entonces $$Y_p=(-c,-d,a,b)\in T_p\mathbb R^4.$$
>>	2. Calculamos $$dF_p(Y_p)=\begin{pmatrix}2a&-2b&2c&-2d\\2b&2a&2d&2c\end{pmatrix}\begin{pmatrix}-c\\-d\\a\\b\end{pmatrix}=\begin{pmatrix}-2ac+2bd+2ac-2bd\\-2bc-2ad+2ad+2bc\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}.$$
>>	3. Por lo tanto $Y_p\in\ker(dF_p)$ para todo $p\in H$.
>>	4. Como $H=F^{-1}(1,0)$ es una subvariedad de nivel regular, $$di_p(T_pH)=\ker(dF_p).$$
>>	5. Además $di_p:T_pH\to T_p\mathbb R^4$ es inyectiva, pues $i$ es la inclusión de una subvariedad incrustada. Por lo tanto $$di_p:T_pH\longrightarrow\ker(dF_p)$$ es un isomorfismo.
>>	6. Como $Y_p\in\ker(dF_p)=di_p(T_pH)$, podemos definir para todo $p\in H$ $$X_p:=(di_p)^{-1}(Y_p)\in T_pH.$$
>>	7. Como $Y|_H$ es suave y tangente a $H$, el campo $X$ así definido es suave sobre $H$.
>>	8. Finalmente, para todo $p\in H$, $$di_p(X_p)=Y_p=Y_{i(p)},$$ pues $i(p)=p$. Luego $$(di)\circ X=Y\circ i.$$
>>- (c)
>>	1. Sea $\gamma:I\to H$ una curva integral de $X$. Entonces $$\gamma'(t)=X_{\gamma(t)}=(di_{\gamma(t)})^{-1}(Y_{\gamma(t)}).$$
>>	2. Aplicando $di_{\gamma(t)}$ a ambos lados, $$di_{\gamma(t)}(\gamma'(t))=Y_{\gamma(t)}.$$
>>	3. Como $i:H\to\mathbb R^4$ es la inclusión, por regla de la cadena $$di_{\gamma(t)}(\gamma'(t))=(i\circ\gamma)'(t).$$ Además, $i(\gamma(t))=\gamma(t)$ como punto de $\mathbb R^4$, por lo que $$Y_{\gamma(t)}=Y_{i(\gamma(t))}.$$
>>	4. Por lo tanto $$ (i\circ\gamma)'(t)=Y_{(i\circ\gamma)(t)},$$ es decir, $\widetilde\gamma:=i\circ\gamma:I\to\mathbb R^4$ es una curva integral de $Y$.
>>	5. Así, para encontrar las curvas integrales de $X$, primero buscamos las curvas integrales $\widetilde\gamma$ de $Y$ en $\mathbb R^4$ que parten de puntos de $H$, y luego verificamos que permanecen en $H$.
>>	6. Escribimos $$\widetilde\gamma_p(t)=(x(t),y(t),z(t),w(t)).$$ Como $$Y=-z\frac{\partial}{\partial x}-w\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}+y\frac{\partial}{\partial w},$$ la ecuación $\widetilde\gamma_p'(t)=Y_{\widetilde\gamma_p(t)}$ equivale a $$\begin{cases}x'=-z,\\y'=-w,\\z'=x,\\w'=y.\end{cases}$$
>>	7. Derivando $x'=-z$ y usando $z'=x$, obtenemos $$x''=-z'=-x,$$ por lo tanto $$x''+x=0.$$
>>	8. Así, $$x(t)=A\cos t+B\sin t.$$ Como $z=-x'$, $$z(t)=A\sin t-B\cos t.$$
>>	9. Imponiendo $x(0)=a$ y $z(0)=c$, obtenemos $$A=a,\qquad -B=c,$$ es decir, $A=a$ y $B=-c$. Por lo tanto $$x(t)=a\cos t-c\sin t,\qquad z(t)=a\sin t+c\cos t.$$
>>	10. Análogamente, de $y'=-w$ y $w'=y$ obtenemos $$y(t)=b\cos t-d\sin t,\qquad w(t)=b\sin t+d\cos t.$$
>>	11. En consecuencia, la curva integral de $Y$ que parte de $p=(a,b,c,d)$ es $$\widetilde\gamma_p(t)=\left(a\cos t-c\sin t,\;b\cos t-d\sin t,\;a\sin t+c\cos t,\;b\sin t+d\cos t\right).$$
>>	12. Ahora debemos verificar que esta curva permanece en $H$. Como $\widetilde\gamma_p'(t)=Y_{\widetilde\gamma_p(t)}$, por la regla de la cadena $$\frac{d}{dt}(F\circ\widetilde\gamma_p)(t)=dF_{\widetilde\gamma_p(t)}\left(\widetilde\gamma_p'(t)\right)=dF_{\widetilde\gamma_p(t)}\left(Y_{\widetilde\gamma_p(t)}\right)=0.$$
>>	13. Por lo tanto $F\circ\widetilde\gamma_p$ es constante. Como $\widetilde\gamma_p(0)=p\in H$, $$F(\widetilde\gamma_p(0))=F(p)=(1,0),$$ luego $$F(\widetilde\gamma_p(t))=(1,0)$$ para todo $t\in\mathbb R$.
>>	14. Entonces $\widetilde\gamma_p(t)\in F^{-1}(1,0)=H$ para todo $t$. Por lo tanto existe una curva $\gamma_p:\mathbb R\to H$ tal que $$i\circ\gamma_p=\widetilde\gamma_p.$$
>>	15. Derivando y usando que $X$ e $Y$ están $i$-relacionados, $$di_{\gamma_p(t)}(\gamma_p'(t))=\widetilde\gamma_p'(t)=Y_{\widetilde\gamma_p(t)}=Y_{i(\gamma_p(t))}=di_{\gamma_p(t)}(X_{\gamma_p(t)}).$$
>>	16. Como $di_{\gamma_p(t)}$ es inyectiva, $$\gamma_p'(t)=X_{\gamma_p(t)},$$ así que $\gamma_p$ es la curva integral de $X$ que pasa por $p$.
>>	17. En consecuencia, viendo a $\gamma_p$ mediante la inclusión en $\mathbb R^4$, $$\gamma_p(t)=\left(a\cos t-c\sin t,\;b\cos t-d\sin t,\;a\sin t+c\cos t,\;b\sin t+d\cos t\right).$$
>>	18. Esta expresión está definida para todo $t\in\mathbb R$ y permanece en $H$. Por lo tanto todas las curvas integrales maximales de $X$ están definidas en todo $\mathbb R$, y en consecuencia $X$ es completo.

>[!Exercise]
>Probar que si $M$ es conexa y $f:M\to\mathbb R$ es una función $C^\infty$ que satisface
>$$[X,fY]=f[X,Y]$$
>para todo par de campos $X,Y\in\mathfrak X(M)$, entonces $f$ es constante.
>
>>[!Proof]-
>>1. Usamos la identidad $$[X,fY]=X(f)Y+f[X,Y].$$
>>2. Por hipótesis, para todo $X,Y\in\mathfrak X(M)$ se cumple $$X(f)Y+f[X,Y]=f[X,Y].$$
>>3. Restando $f[X,Y]$ en ambos miembros obtenemos $$X(f)Y=0.$$
>>4. Fijamos $p\in M$ y tomamos un campo $Y\in\mathfrak X(M)$ tal que $Y_p\neq0$.
>>5. Entonces, para todo $X\in\mathfrak X(M)$, evaluando la igualdad anterior en $p$, tenemos $$X(f)(p)Y_p=0.$$
>>6. Como $Y_p\neq0$, necesariamente $$X(f)(p)=0$$ para todo $X\in\mathfrak X(M)$.
>>7. Sea ahora $v\in T_pM$. Tomamos un campo global $X\in\mathfrak X(M)$ tal que $X_p=v$.
>>8. Entonces $$df_p(v)=v(f)=X(f)(p)=0.$$
>>9. Como $v\in T_pM$ era arbitrario, resulta $$df_p=0.$$
>>10. Como $p\in M$ era arbitrario, tenemos $$df=0$$ en todo $M$.
>>11. Como $df=0$, sabemos que $f$ es localmente constante.
>>12. Fijamos $p_{0}\in M$ y definimos $$A=\{p\in M:f(p)=f(p_{0})\}.$$
>>13. El conjunto $A$ es no vacío, pues $p_{0}\in A$.
>>14. Veamos que $A$ es abierto. Sea $p\in A$. Como $f$ es localmente constante, existe un abierto $U\ni p$ tal que $$f(q)=f(p)$$ para todo $q\in U$.
>>15. Como $p\in A$, tenemos $f(p)=f(p_{0})$. Entonces $$f(q)=f(p_{0})$$ para todo $q\in U$, de modo que $U\subset A$. Por lo tanto, $A$ es abierto.
>>16. Veamos que $M\setminus A$ es abierto. Sea $p\in M\setminus A$. Entonces $$f(p)\neq f(p_{0}).$$
>>17. Como $f$ es localmente constante, existe un abierto $U\ni p$ tal que $$f(q)=f(p)$$ para todo $q\in U$.
>>18. Por lo tanto, $$f(q)\neq f(p_{0})$$ para todo $q\in U$, de modo que $U\subset M\setminus A$. Así, $M\setminus A$ es abierto.
>>19. Entonces $A$ es abierto y cerrado en $M$. Como $A\neq\varnothing$ y $M$ es conexa, necesariamente $$A=M.$$
>>20. Por definición de $A$, $$f(p)=f(p_{0})$$ para todo $p\in M$. Por lo tanto, $f$ es constante en $M$.

>[!Exercise]
>Probar que no existe una función suave e inyectiva $F:\mathbb R^2\to\mathbb R$.
>
>>[!Proof]-
>>1. Supongamos, por absurdo, que existe una función suave e inyectiva $F:\mathbb R^2\to\mathbb R$.
>>2. Para cada $p\in\mathbb R^2$, la aplicación lineal $dF_p:\mathbb R^2\to\mathbb R$ tiene rango $0$ o $1$.
>>3. Supongamos que existe $p\in\mathbb R^2$ tal que $\operatorname{rango}(dF_p)=1$.
>>4. Entonces $dF_p\neq 0$. Como la matriz de $dF_p$ es $$\begin{pmatrix}\frac{\partial F}{\partial x}(p)&\frac{\partial F}{\partial y}(p)\end{pmatrix},$$ al menos una de sus entradas es distinta de $0$.
>>5. Supongamos, sin pérdida de generalidad, que $\frac{\partial F}{\partial x}(p)\neq 0$.
>>6. Como $F$ es suave, la función $\frac{\partial F}{\partial x}$ es continua. Por lo tanto, existe un entorno abierto $U$ de $p$ tal que $\frac{\partial F}{\partial x}(q)\neq 0$ para todo $q\in U$.
>>7. En consecuencia, $dF_q$ no es la aplicación nula para todo $q\in U$. Como su codominio es $\mathbb R$, resulta que $\operatorname{rango}(dF_q)=1$ para todo $q\in U$.
>>8. Luego $F|_U$ tiene rango constante $1$. Por el teorema de la forma local de una función de rango constante, existen cartas $(U_0,\varphi)$ de $\mathbb R^2$, con $p\in U_0\subset U$, y $(V,\psi)$ de $\mathbb R$, con $F(p)\in V$, tales que $$\psi\circ F\circ\varphi^{-1}(a,b)=a.$$
>>9. Tomamos dos puntos distintos $(a,b),(a,c)\in\varphi(U_0)$ con $b\neq c$. Entonces $$\psi\circ F\circ\varphi^{-1}(a,b)=a=\psi\circ F\circ\varphi^{-1}(a,c).$$
>>10. Como $\psi$, $F$ y $\varphi^{-1}$ son inyectivas, la composición $\psi\circ F\circ\varphi^{-1}$ debería ser inyectiva, contradicción.
>>11. Por lo tanto, no existe ningún punto $p\in\mathbb R^2$ tal que $\operatorname{rango}(dF_p)=1$.
>>12. Así, $\operatorname{rango}(dF_p)=0$ para todo $p\in\mathbb R^2$, es decir, $dF_p=0$ para todo $p\in\mathbb R^2$.
>>13. Como $\mathbb R^2$ es conexo y $dF=0$ en todo punto, $F$ es constante.
>>14. Pero una función constante definida en $\mathbb R^2$ no es inyectiva.
>>15. Esta contradicción prueba que no existe una función suave e inyectiva $F:\mathbb R^2\to\mathbb R$.

>[!Exercise]
>Sean $X,Y$ los campos en $\mathbb R^3$ definidos por $$X=\frac{\partial}{\partial x}+2x\frac{\partial}{\partial z},\qquad Y=\frac{\partial}{\partial y}+2y\frac{\partial}{\partial z}.$$
>- (a) Probar que $X$ e $Y$ generan una distribución suave $\mathcal D$ en $\mathbb R^3$.
>- (b) Probar que la distribución $\mathcal D$ es integrable.
>- (c) Determinar la subvariedad integral conexa maximal de $\mathcal D$ que pasa por $p=(0,0,0)$.
>
>>[!Proof]-
>>- (a)
>>	1. Para cada $p=(p_1,p_2,p_3)\in\mathbb R^3$, definimos $$\mathcal D_p=\operatorname{span}\{X_p,Y_p\}\subset T_p\mathbb R^3.$$
>>	2. Los campos $X$ e $Y$ son suaves, pues sus funciones coordenadas respecto de la base coordenada son suaves.
>>	3. Respecto de la base $\left\{\left.\frac{\partial}{\partial x}\right|_p,\left.\frac{\partial}{\partial y}\right|_p,\left.\frac{\partial}{\partial z}\right|_p\right\}$, los vectores de coordenadas de $X_p$ e $Y_p$ son $$[X_p]=(1,0,2p_1),\qquad [Y_p]=(0,1,2p_2).$$
>>	4. Calculamos $$[X_p]\times[Y_p]=(1,0,2p_1)\times(0,1,2p_2)=(-2p_1,-2p_2,1).$$
>>	5. Como la tercera componente es $1$, se tiene $[X_p]\times[Y_p]\neq0$ para todo $p\in\mathbb R^3$.
>>	6. Por lo tanto, $X_p$ e $Y_p$ son linealmente independientes para todo $p$, de modo que $\dim\mathcal D_p=2$ para todo $p\in\mathbb R^3$.
>>	7. En consecuencia, $\mathcal D=\{\mathcal D_p\}_{p\in\mathbb R^3}$ es una distribución suave de rango $2$.
>>- (b)
>>	1. Escribimos las funciones coordenadas de los campos: $$X^1=1,\qquad X^2=0,\qquad X^3=2x,$$ $$Y^1=0,\qquad Y^2=1,\qquad Y^3=2y.$$
>>	2. Usamos la fórmula $$[X,Y]=\sum_{k=1}^3\left(X(Y^k)-Y(X^k)\right)\frac{\partial}{\partial x^k}.$$
>>	3. Para la primera componente, $$X(Y^1)-Y(X^1)=X(0)-Y(1)=0.$$
>>	4. Para la segunda componente, $$X(Y^2)-Y(X^2)=X(1)-Y(0)=0.$$
>>	5. Para la tercera componente, $$X(Y^3)-Y(X^3)=X(2y)-Y(2x).$$
>>	6. Como $$X(2y)=\frac{\partial}{\partial x}(2y)+2x\frac{\partial}{\partial z}(2y)=0$$ y $$Y(2x)=\frac{\partial}{\partial y}(2x)+2y\frac{\partial}{\partial z}(2x)=0,$$ resulta que $X(Y^3)-Y(X^3)=0$.
>>	7. Por lo tanto, $$[X,Y]=0.$$
>>	8. En particular, $[X,Y]_p=0\in\mathcal D_p$ para todo $p\in\mathbb R^3$, de modo que $\mathcal D$ es involutiva.
>>	9. Por el teorema de Frobenius, $\mathcal D$ es integrable.
>>- (c)
>>	1. Primero calculamos el flujo de $X$. Sea $\gamma(t)=(x(t),y(t),z(t))$ una curva integral de $X$. La ecuación $\gamma'(t)=X_{\gamma(t)}$ equivale al sistema $$x'(t)=1,\qquad y'(t)=0,\qquad z'(t)=2x(t).$$
>>	2. Integrando, obtenemos $$x(t)=t+C_1,\qquad y(t)=C_2,\qquad z(t)=t^2+2C_1t+C_3.$$
>>	3. Si $\gamma(0)=p=(p_1,p_2,p_3)$, entonces $C_1=p_1$, $C_2=p_2$ y $C_3=p_3$. Por lo tanto, $$\Phi_t^X(p)=\left(p_1+t,p_2,p_3+2p_1t+t^2\right).$$
>>	4. Ahora calculamos el flujo de $Y$. Sea $\eta(t)=(x(t),y(t),z(t))$ una curva integral de $Y$. La ecuación $\eta'(t)=Y_{\eta(t)}$ equivale a $$x'(t)=0,\qquad y'(t)=1,\qquad z'(t)=2y(t).$$
>>	5. Integrando, obtenemos $$x(t)=C_1,\qquad y(t)=t+C_2,\qquad z(t)=t^2+2C_2t+C_3.$$
>>	6. Si $\eta(0)=p=(p_1,p_2,p_3)$, entonces $$\Phi_t^Y(p)=\left(p_1,p_2+t,p_3+2p_2t+t^2\right).$$
>>	7. Partiendo del origen, definimos $$\widetilde F:\mathbb R^2\longrightarrow\mathbb R^3,\qquad \widetilde F(s,t)=\Phi_s^X\left(\Phi_t^Y(0,0,0)\right).$$
>>	8. Como $$\Phi_t^Y(0,0,0)=(0,t,t^2),$$ resulta que $$\widetilde F(s,t)=\Phi_s^X(0,t,t^2)=(s,t,s^2+t^2).$$
>>	9. La imagen de $\widetilde F$ es $$S=\left\{(x,y,z)\in\mathbb R^3:z=x^2+y^2\right\}.$$
>>	10. El conjunto $S$ es una subvariedad incrustada de $\mathbb R^3$, pues es el gráfico de la función suave $(x,y)\mapsto x^2+y^2$.
>>	11. Consideramos la inclusión $$i:S\hookrightarrow\mathbb R^3$$ y la aplicación $$F:\mathbb R^2\longrightarrow S,\qquad F(s,t)=(s,t,s^2+t^2),$$ de modo que $\widetilde F=i\circ F$.
>>	12. Sea $p=F(x,y)=(x,y,x^2+y^2)\in S$. Como $F$ es una parametrización global de $S$, $$T_pS=dF_{(x,y)}\left(T_{(x,y)}\mathbb R^2\right).$$
>>	13. Entonces, usando la regla de la cadena, $$\begin{aligned}di_p(T_pS)&=di_p\left(dF_{(x,y)}\left(T_{(x,y)}\mathbb R^2\right)\right)\\&=(di_p\circ dF_{(x,y)})\left(T_{(x,y)}\mathbb R^2\right)\\&=d(i\circ F)_{(x,y)}\left(T_{(x,y)}\mathbb R^2\right)\\&=d\widetilde F_{(x,y)}\left(T_{(x,y)}\mathbb R^2\right).\end{aligned}$$
>>	14. Como $$T_{(x,y)}\mathbb R^2=\operatorname{span}\left\{\left.\frac{\partial}{\partial x}\right|_{(x,y)},\left.\frac{\partial}{\partial y}\right|_{(x,y)}\right\},$$ obtenemos $$di_p(T_pS)=\operatorname{span}\left\{\frac{\partial\widetilde F}{\partial x}(x,y),\frac{\partial\widetilde F}{\partial y}(x,y)\right\}.$$
>>	15. Calculamos $$\frac{\partial\widetilde F}{\partial x}(x,y)=(1,0,2x)=X_p,$$ $$\frac{\partial\widetilde F}{\partial y}(x,y)=(0,1,2y)=Y_p.$$
>>	16. Por lo tanto, $$di_p(T_pS)=\operatorname{span}\{X_p,Y_p\}=\mathcal D_p$$ para todo $p\in S$, y así $(S,i)$ es una subvariedad integral de $\mathcal D$.
>>	17. Además, $S=F(\mathbb R^2)$ es conexo, pues $\mathbb R^2$ es conexo y $F$ es continua.
>>	18. Definimos la función continua $$H:\mathbb R^3\longrightarrow\mathbb R,\qquad H(x,y,z)=z-x^2-y^2.$$
>>	19. Entonces $$S=H^{-1}(\{0\}).$$
>>	20. Como $\{0\}$ es cerrado en $\mathbb R$ y $H$ es continua, $S$ es cerrado en $\mathbb R^3$. En particular, $i(S)=S$ es cerrado en $\mathbb R^3$.
>>	21. Por el resultado que afirma que una subvariedad integral conexa cuya imagen es cerrada es conexa maximal, $(S,i)$ es una subvariedad integral conexa maximal.
>>	22. En conclusión, la subvariedad integral conexa maximal que pasa por $(0,0,0)$ es $$S=\left\{(x,y,z)\in\mathbb R^3:z=x^2+y^2\right\}.$$

>[!Exercise]
>Una variedad $M$ de dimensión $n$ se dice paralelizable si existen $n$ campos $X_1,\ldots,X_n\in\mathfrak X(M)$ tales que $\{(X_1)_p,\ldots,(X_n)_p\}$ es una base de $T_pM$ para cada $p\in M$.
>- (a) Probar que si $M$ es paralelizable, entonces el fibrado tangente $TM$ es difeomorfo a $M\times\mathbb R^n$.
>- (b) Probar que si $M$ es paralelizable, entonces $M$ es orientable.
>
>>[!Proof]-
>>- (a)
>>	1. Para cada $p\in M$, denotamos $$B_2^p=\{(X_1)_p,\ldots,(X_n)_p\}.$$ Como $B_2^p$ es una base de $T_pM$, para todo $v_p\in T_pM$ existen únicos $c_1,\ldots,c_n\in\mathbb R$ tales que $$v_p=\sum_{i=1}^n c_i(X_i)_p.$$
>>	2. Definimos $$F:TM\longrightarrow M\times\mathbb R^n,\qquad F(v_p)=(p,c_1,\ldots,c_n).$$ La aplicación está bien definida por la unicidad de las coordenadas de $v_p$ en la base $B_2^p$.
>>	3. Definimos también $$G:M\times\mathbb R^n\longrightarrow TM,\qquad G(p,c_1,\ldots,c_n)=\sum_{i=1}^n c_i(X_i)_p.$$
>>	4. Por definición de ambas aplicaciones, $$G\circ F=\operatorname{Id}_{TM}\qquad\text{y}\qquad F\circ G=\operatorname{Id}_{M\times\mathbb R^n}.$$ Por lo tanto, $F$ es biyectiva y $G=F^{-1}$.
>>	5. Veamos que $F$ y $F^{-1}$ son suaves. Fijamos $p\in M$ y tomamos una carta $(U,\varphi=(x^1,\ldots,x^n))$ alrededor de $p$.
>>	6. Para cada $q\in U$, consideramos las bases $$B_1^q=\left\{\left.\frac{\partial}{\partial x^1}\right|_q,\ldots,\left.\frac{\partial}{\partial x^n}\right|_q\right\},\qquad B_2^q=\{(X_1)_q,\ldots,(X_n)_q\}.$$
>>	7. Sea $$A(q)=C(B_1^q,B_2^q)$$ la matriz de cambio de coordenadas de la base $B_1^q$ a la base $B_2^q$, es decir, la $i$-ésima columna de $A(q)$ está formada por las coordenadas de $\left.\frac{\partial}{\partial x^i}\right|_q$ en la base $B_2^q$.
>>	8. Sea $$\widetilde\varphi:TU\longrightarrow \varphi(U)\times\mathbb R^n$$ la carta inducida de $TM$, dada por $$\widetilde\varphi(v_q)=\bigl(\varphi(q),[v_q]_{B_1^q}\bigr).$$
>>	9. En $U\times\mathbb R^n\subseteq M\times\mathbb R^n$ usamos la carta $$\varphi\times\operatorname{Id}_{\mathbb R^n}:U\times\mathbb R^n\longrightarrow\varphi(U)\times\mathbb R^n.$$
>>	10. Si $z=\varphi(q)$ y $v=[v_q]_{B_1^q}$, entonces $$[v_q]_{B_2^q}=A(q)v.$$ Por lo tanto, la expresión local de $F$ es $$\bigl(\varphi\times\operatorname{Id}_{\mathbb R^n}\bigr)\circ F\circ\widetilde\varphi^{-1}(z,v)=\left(z,A(\varphi^{-1}(z))v\right).$$
>>	11. Las entradas de la matriz que expresa los campos $(X_1)_q,\ldots,(X_n)_q$ en la base coordenada $B_1^q$ son suaves, porque los campos $X_i$ son suaves. La matriz $A(q)$ es la inversa de esa matriz y, como su determinante no se anula, sus entradas también son suaves.
>>	12. En consecuencia, la expresión local de $F$ es suave y por lo tanto $F$ es suave en $TU$.
>>	13. Para la inversa, si $c=[v_q]_{B_2^q}$, entonces $$[v_q]_{B_1^q}=A(q)^{-1}c.$$ Por lo tanto, $$\widetilde\varphi\circ F^{-1}\circ\bigl(\varphi^{-1}\times\operatorname{Id}_{\mathbb R^n}\bigr)(z,c)=\left(z,A(\varphi^{-1}(z))^{-1}c\right).$$
>>	14. Esta expresión es suave, pues $A^{-1}$ depende suavemente del punto. Entonces $F^{-1}$ es suave en $U\times\mathbb R^n$.
>>	15. Como el punto $p\in M$ era arbitrario, $F$ y $F^{-1}$ son suaves globalmente. Por lo tanto, $$TM\cong M\times\mathbb R^n$$ mediante un difeomorfismo.
>>- (b)
>>	1. Para cada $p\in M$, definimos una aplicación $$\omega_p:(T_pM)^n\longrightarrow\mathbb R$$ por $$\omega_p(Y_1,\ldots,Y_n)=\det\bigl([Y_1]_{B_2^p},\ldots,[Y_n]_{B_2^p}\bigr),$$ donde $$B_2^p=\{(X_1)_p,\ldots,(X_n)_p\}.$$
>>	2. Como el determinante es multilineal y alternado, para cada $p\in M$ tenemos $$\omega_p\in\Lambda^n(T_pM)^*.$$
>>	3. Así obtenemos una sección $$\omega:M\longrightarrow\Lambda^n(T^*M),\qquad p\longmapsto\omega_p.$$
>>	4. Veamos que $\omega$ es suave. Fijamos una carta $(U,\varphi=(x^1,\ldots,x^n))$ y consideramos la base coordenada $$B_1^p=\left\{\left.\frac{\partial}{\partial x^1}\right|_p,\ldots,\left.\frac{\partial}{\partial x^n}\right|_p\right\}.$$
>>	5. Como $\Lambda^n(T_pM)^*$ tiene dimensión $1$, existe una única función $a:U\to\mathbb R$ tal que $$\omega|_U=a\,dx^1\wedge\cdots\wedge dx^n.$$
>>	6. Evaluando en la base coordenada obtenemos $$a(p)=\omega_p\left(\left.\frac{\partial}{\partial x^1}\right|_p,\ldots,\left.\frac{\partial}{\partial x^n}\right|_p\right).$$
>>	7. Por la definición de $\omega_p$, $$a(p)=\det C(B_1^p,B_2^p)=\det A(p).$$
>>	8. Como las entradas de $A(p)$ son suaves, la función $$a(p)=\det A(p)$$ es suave. Por lo tanto, $\omega|_U$ es una $n$-forma suave.
>>	9. Como esto puede hacerse alrededor de cualquier punto de $M$, concluimos que $$\omega\in\Omega^n(M).$$
>>	10. Además, para todo $p\in M$, $$\omega_p((X_1)_p,\ldots,(X_n)_p)=\det I_n=1.$$ En particular, $\omega_p\neq 0$ para todo $p\in M$.
>>	11. Por lo tanto, existe una $n$-forma suave global que no se anula en ningún punto, y en consecuencia $M$ es orientable.

>[!Exercise]
>Determinar si las siguientes afirmaciones son verdaderas o falsas. Justificar.
>- **(a)** Si $M$ es una variedad diferenciable y $f:M\to M\times M$ está dada por $f(x)=(x,x)$, entonces $(M,f)$ es una subvariedad incrustada de $M\times M$ con la estructura diferenciable producto.
>- **(b)** Si $\alpha\in\Omega^1(M)$ y $\alpha_p\neq 0$ para algún $p\in M$, entonces existe un entorno coordenado $(U,(x^1,\ldots,x^n))$ alrededor de $p$ tal que $\alpha|_U=dx^1$.
>
>>[!Proof]-
>>- **(a) Verdadera.**
>>	1. Primero probamos que $f$ es suave. Sea $x\in M$ y sea $(U,\varphi)$ una carta alrededor de $x$. Entonces $(U\times U,\varphi\times\varphi)$ es una carta producto alrededor de $(x,x)$.
>>	2. La expresión de $f$ en estas coordenadas es $$(\varphi\times\varphi)\circ f\circ\varphi^{-1}(u)=(u,u),$$ que es una función suave. Por lo tanto, $f$ es suave.
>>	3. Veamos que $df_x$ es inyectiva para todo $x\in M$. Sea $v\in T_xM$ y tomemos una curva suave $\gamma:(-\varepsilon,\varepsilon)\to M$ tal que $\gamma(0)=x$ y $\gamma'(0)=v$.
>>	4. Entonces, usando la identificación natural $T_{(x,x)}(M\times M)\simeq T_xM\times T_xM$, tenemos $$df_x(v)=(f\circ\gamma)'(0)=(\gamma'(0),\gamma'(0))=(v,v).$$
>>	5. Si $df_x(v)=0$, entonces $(v,v)=(0,0)$, de donde $v=0$. Por lo tanto, $df_x$ es inyectiva y $f$ es una inmersión.
>>	6. Además, $f$ es claramente inyectiva. Veamos que $f:M\to f(M)$ es un homeomorfismo, donde $f(M)$ tiene la topología subespacio heredada de $M\times M$.
>>	7. Como $f$ es suave, es continua. Por otro lado, si $A\subseteq M$ es abierto, entonces $$f(A)=\{(x,x):x\in A\}=(A\times A)\cap f(M).$$
>>	8. Como $A\times A$ es abierto en $M\times M$, resulta que $f(A)$ es abierto en $f(M)$. Por lo tanto, $f:M\to f(M)$ es abierta.
>>	9. Así, $f:M\to f(M)$ es continua, biyectiva y abierta, luego es un homeomorfismo.
>>	10. Concluimos que $f$ es una inmersión inyectiva y un homeomorfismo sobre su imagen. Por lo tanto, $(M,f)$ es una subvariedad incrustada de $M\times M$.
>>- **(b) Falsa.**
>>	1. Tomemos $M=\mathbb{R}^2$ con coordenadas usuales $(u,v)$ y consideremos la $1$-forma $$\alpha=du+u\,dv.$$
>>	2. En el punto $p=(0,0)$ se tiene $$\alpha_p=du_p\neq 0.$$
>>	3. Sin embargo, $$d\alpha=d(du)+d(u\,dv)=du\wedge dv,$$ por lo que $$(d\alpha)_p=(du\wedge dv)_p\neq 0.$$
>>	4. Supongamos que existiera un entorno coordenado $(U,(x^1,x^2))$ alrededor de $p$ tal que $$\alpha|_U=dx^1.$$
>>	5. Aplicando la diferencial exterior obtendríamos $$d\alpha|_U=d(dx^1)=d^2x^1=0.$$
>>	6. En particular, $(d\alpha)_p=0$, lo cual contradice que $(d\alpha)_p=(du\wedge dv)_p\neq 0$.
>>	7. Por lo tanto, no necesariamente existe un sistema de coordenadas en el cual una $1$-forma no nula sea igual a la diferencial de la primera coordenada.

>[!Exercise]
>Sea $$C=\{(x,y,z)\in\mathbb R^3:z^2=x^2+y^2,\ z>0\}.$$
>- (a) Probar que $C$ es una subvariedad incrustada de $\mathbb R^3$.
>- (b) Si $$f:S=(-\pi,2\pi)\longrightarrow C,\qquad f(t)=(1+t^2)(\cos t,\sin t,1),$$probar que $(S,f)$ es una subvariedad de $C$ y que no es incrustada.
>- (c) Si $W$ es el campo en $\mathbb R^3$ definido por $$W=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y},$$probar que $W$ induce por restricción un campo suave $V$ en $C$.
>- (d) Determinar la curva integral de $V$ por $(1,0,1)$.
>
>>[!Proof]-
>>- **(a)**
>>	1. Consideramos el abierto
>>	$$A=\{(x,y,z)\in\mathbb R^3:z>0\}$$
>>	y la función suave
>>	$$F:A\longrightarrow\mathbb R,\qquad F(x,y,z)=z^2-x^2-y^2.$$
>>	2. Por la elección del dominio,
>>	$$F^{-1}(0)=\{(x,y,z)\in\mathbb R^3:z^2=x^2+y^2,\ z>0\}=C.$$
>>	3. Para $p=(x,y,z)\in C$ tenemos
>>	$$dF_p=(-2x,-2y,2z).$$
>>	4. Como $z>0$, resulta que $dF_p\neq0$ para todo $p\in C$.
>>	5. Por lo tanto es sobreyectivo para todo $p$ Por lo tanto, $0$ es un valor regular de $F$.
>>	6. Por el teorema del valor regular, $C=F^{-1}(0)$ es una subvariedad incrustada de $A$ de dimensión
>>	$$\dim C=3-1=2.$$
>>	7. Como $A$ es un abierto de $\mathbb R^3$, también concluimos que $C$ es una subvariedad incrustada de $\mathbb R^3$.
>>- **(b)**
>>	1. Primero verificamos que $f$ toma valores en $C$. Si
>>	$$f(t)=\big((1+t^2)\cos t,(1+t^2)\sin t,1+t^2\big),$$
>>	entonces
>>	$$z(t)^2=(1+t^2)^2$$
>>	y
>>	$$x(t)^2+y(t)^2=(1+t^2)^2(\cos^2t+\sin^2t)=(1+t^2)^2.$$
>>	2. Además, $z(t)=1+t^2>0$, de modo que $f(t)\in C$ para todo $t\in S$.
>>	3. La aplicación $f$ es suave porque sus funciones coordenadas son suaves.
>>	4. Veamos que $f$ es una inmersión. Derivando,
>>	$$f'(t)=\big(2t\cos t-(1+t^2)\sin t,\ 2t\sin t+(1+t^2)\cos t,\ 2t\big).$$
>>	5. Si $t\neq0$, la tercera coordenada de $f'(t)$ es $2t\neq0$, por lo que $f'(t)\neq0$.
>>	6. Si $t=0$, entonces
>>	$$f'(0)=(0,1,0)\neq0.$$
>>	7. Por lo tanto, $df_t:T_tS\to T_{f(t)}C$ es inyectiva para todo $t\in S$, es decir, $f$ es una inmersión.
>>	8. Veamos ahora que $f$ es inyectiva. Supongamos que $f(t)=f(s)$. Comparando las terceras coordenadas obtenemos
>>	$$1+t^2=1+s^2,$$
>>	de donde
>>	$$s=t\qquad\text{o}\qquad s=-t.$$
>>	9. Si $s=t$, no hay nada que probar. Supongamos entonces que $s=-t$. Comparando las segundas coordenadas,
>>	$$(1+t^2)\sin t=(1+t^2)\sin(-t)=-(1+t^2)\sin t,$$
>>	de donde $\sin t=0$.
>>	10. Así, $t=k\pi$ para algún $k\in\mathbb Z$. Como $t,-t\in(-\pi,2\pi)$, las únicas posibilidades relevantes son $t=0$ o $t=\pi$.
>>	11. Si $t=0$, entonces $s=-t=t$. Si $t=\pi$, entonces $s=-\pi\notin S$, lo cual es imposible.
>>	12. Por lo tanto, $f$ es inyectiva.
>>	13. Concluimos que $f:S\to C$ es una inmersión suave inyectiva, de modo que $(S,f)$ es una subvariedad inmersa de $C$.
>>	14. Veamos que no es incrustada. Consideramos la sucesión
>>	$$t_n=-\pi+\frac1n\in S.$$
>>	15. En $\mathbb R$ se cumple que
>>	$$t_n\longrightarrow-\pi.$$
>>	16. Por continuidad de la expresión que define a $f$,
>>	$$f(t_n)\longrightarrow(1+\pi^2)(\cos(-\pi),\sin(-\pi),1).$$
>>	17. Como $\cos(-\pi)=\cos\pi=-1$ y $\sin(-\pi)=\sin\pi=0$, obtenemos
>>	$$f(t_n)\longrightarrow(1+\pi^2)(-1,0,1)=f(\pi).$$
>>	18. Supongamos que $f:S\to f(S)$ fuera un homeomorfismo. Entonces su inversa sería continua y de $f(t_n)\to f(\pi)$ se seguiría
>>	$$t_n=f^{-1}(f(t_n))\longrightarrow f^{-1}(f(\pi))=\pi.$$
>>	19. Sin embargo, $t_n\to-\pi$ en $\mathbb R$, lo cual es una contradicción.
>>	20. Por lo tanto, $f^{-1}:f(S)\to S$ no es continua y $(S,f)$ no es una subvariedad incrustada de $C$.
>>- **(c)**
>>	1. Sea $i:C\hookrightarrow\mathbb R^3$ la inclusión.
>>	2. Tal como está definido, $$W=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y}$$es un campo suave sobre $\mathbb R^3$. Con lo cual restringido a $C$ seguiria siendo suave, por que esas coordenadas restringidas seguirian siendo suaves
>>	3. En cada punto $p=(x,y,z)\in\mathbb R^3$,$$W_p=-y\left.\frac{\partial}{\partial x}\right|_p+x\left.\frac{\partial}{\partial y}\right|_p\in T_p\mathbb R^3.$$bajo la identificación canónica $T_p\mathbb R^3\simeq\mathbb R^3$, tenemos $$W_p=(-y,x,0).$$
>>	4. Como $C=F^{-1}(0)$ y $0$ es valor regular de $F$, para cada $p\in C$ se cumple
>>	$$di_p(T_pC)=\ker dF_p.$$
>>	5. Calculamos
>>	$$dF_p(W_p)=(-2x,-2y,2z)\cdot(-y,x,0)=2xy-2xy=0.$$
>>	6. Por lo tanto, $$W_p\in\ker dF_p=di_p(T_pC).$$
>>	7. Luego $W|_{C}$ es suave y esta esta en el plano tangente a $C$ con lo cual es un campo suave sobre $C$  
>>	
>>- **(d)**
>>	1. Buscamos una curva integral $\gamma:I\longrightarrow C$, $\gamma(t)=(x(t),y(t),z(t))$, tal que $$\gamma'(t)=V_{\gamma(t)}$$ y $\gamma(0)=(1,0,1)$.
>>	2. Como $V_{(x,y,z)}=(-y,x,0)$, la ecuación de curva integral es $$\begin{cases}x'(t)=-y(t),\\y'(t)=x(t),\\z'(t)=0.\end{cases}$$
>>	3. Resolvemos primero el sistema en general. De $z'(t)=0$ obtenemos $z(t)=C_3$, para alguna constante $C_3\in\mathbb R$.
>>	4. Derivando la primera ecuación y usando la segunda, obtenemos $x''(t)=-y'(t)=-x(t)$, de modo que $$x''(t)+x(t)=0.$$
>>	5. La solución general de esta ecuación es $$x(t)=C_1\cos t+C_2\sin t,$$ donde $C_1,C_2\in\mathbb R$.
>>	6. Como $x'(t)=-y(t)$, tenemos $x'(t)=-C_1\sin t+C_2\cos t$ y, por lo tanto, $$y(t)=C_1\sin t-C_2\cos t.$$
>>	7. Así, la solución general del sistema es $$\gamma(t)=\big(C_1\cos t+C_2\sin t,\ C_1\sin t-C_2\cos t,\ C_3\big).$$
>>	8. Ahora imponemos la condición inicial $\gamma(0)=(1,0,1)$.
>>	9. Evaluando en $t=0$, obtenemos $$\gamma(0)=\big(C_1,-C_2,C_3\big).$$
>>	10. Comparando coordenadas con $(1,0,1)$, resulta $C_1=1$, $C_2=0$ y $C_3=1$.
>>	11. Sustituyendo estas constantes en la solución general, obtenemos $$\gamma(t)=(\cos t,\sin t,1).$$
>>	12. Verificamos que $\gamma(t)\in C$ para todo $t$, pues $$z(t)^2=1=\cos^2t+\sin^2t=x(t)^2+y(t)^2$$ y además $z(t)=1>0$.
>>	13. Finalmente, $\gamma'(t)=(-\sin t,\cos t,0)$ y $V_{\gamma(t)}=V_{(\cos t,\sin t,1)}=(-\sin t,\cos t,0)$, por lo que $$\gamma'(t)=V_{\gamma(t)}.$$
>>	14. La curva integral maximal de $V$ que pasa por $(1,0,1)$ es $$\boxed{\gamma:\mathbb R\longrightarrow C,\qquad \gamma(t)=(\cos t,\sin t,1).}$$
	
>[!Exercise]
>Sea $f:\mathbb R\to\mathbb R$ una función diferenciable. Se define en $\mathbb R^3$ la distribución $\mathcal D$ por $$\mathcal D_{(x,y,z)}=\operatorname{span}\left\{e_1+f'(x)\sin(y)e_3,\ e_2+f(x)\cos(y)e_3\right\}.$$ Identificamos $T_p\mathbb R^3$ con $\mathbb R^3$ para cada $p\in\mathbb R^3$ de la manera usual.
>- (a) Mostrar que $\mathcal D$ es involutiva.
>- (b) Hallar una subvariedad integral $\phi:\mathbb R^2\to\mathbb R^3$ para $\mathcal D$ tal que $\phi(0,0)=(0,0,0)$. Sugerencia: considerar $\phi(x,y)=(x,y,h(x,y))$ para cierta función $h$.
>
>>[!Proof]-
>>1. Definimos los campos vectoriales $$X=\frac{\partial}{\partial x}+f'(x)\sin(y)\frac{\partial}{\partial z},\qquad Y=\frac{\partial}{\partial y}+f(x)\cos(y)\frac{\partial}{\partial z}.$$ Entonces, para todo $p\in\mathbb R^3$, $$\mathcal D_p=\operatorname{span}\{X_p,Y_p\}.$$ Como las primeras dos coordenadas de $X_p$ e $Y_p$ son $(1,0)$ y $(0,1)$, respectivamente, los campos son linealmente independientes en todo punto. Por lo tanto, $\mathcal D$ es una distribución suave de rango $2$.
>>2. Calculamos el corchete de Lie. Las componentes en las direcciones $\frac{\partial}{\partial x}$ y $\frac{\partial}{\partial y}$ son nulas, mientras que la componente en la dirección $\frac{\partial}{\partial z}$ es $$[X,Y]^z=X\big(f(x)\cos(y)\big)-Y\big(f'(x)\sin(y)\big).$$ Como ambas funciones no dependen de $z$, obtenemos $$X\big(f(x)\cos(y)\big)=\frac{\partial}{\partial x}\big(f(x)\cos(y)\big)=f'(x)\cos(y)$$ y $$Y\big(f'(x)\sin(y)\big)=\frac{\partial}{\partial y}\big(f'(x)\sin(y)\big)=f'(x)\cos(y).$$ Por lo tanto, $$[X,Y]=0.$$ Así, $[X,Y]\in\mathcal D$, y concluimos que $\mathcal D$ es involutiva.
>>3. Consideramos los campos que generan la distribución: $$X=\frac{\partial}{\partial x}+f'(x)\sin(y)\frac{\partial}{\partial z},\qquad Y=\frac{\partial}{\partial y}+f(x)\cos(y)\frac{\partial}{\partial z}.$$
>>4. Buscamos el flujo de $X$. Una curva integral $\gamma(t)=(x(t),y(t),z(t))$ satisface $$x'(t)=1,\qquad y'(t)=0,\qquad z'(t)=f'(x(t))\sin(y(t)).$$ Con la condición inicial $\gamma(0)=(x_0,y_0,z_0)$, obtenemos $$x(t)=x_0+t,\qquad y(t)=y_0,$$ y $$z'(t)=f'(x_0+t)\sin(y_0).$$ Integrando, $$z(t)=z_0+\big(f(x_0+t)-f(x_0)\big)\sin(y_0).$$ Por lo tanto, el flujo de $X$ es $$\Phi_t^X(x_0,y_0,z_0)=\left(x_0+t,y_0,z_0+\big(f(x_0+t)-f(x_0)\big)\sin(y_0)\right).$$
>>5. Buscamos el flujo de $Y$. Una curva integral $\gamma(s)=(x(s),y(s),z(s))$ satisface $$x'(s)=0,\qquad y'(s)=1,\qquad z'(s)=f(x(s))\cos(y(s)).$$ Con la condición inicial $\gamma(0)=(x_0,y_0,z_0)$, obtenemos $$x(s)=x_0,\qquad y(s)=y_0+s,$$ y $$z'(s)=f(x_0)\cos(y_0+s).$$ Integrando, $$z(s)=z_0+f(x_0)\big(\sin(y_0+s)-\sin(y_0)\big).$$ Por lo tanto, el flujo de $Y$ es $$\Phi_s^Y(x_0,y_0,z_0)=\left(x_0,y_0+s,z_0+f(x_0)\big(\sin(y_0+s)-\sin(y_0)\big)\right).$$
>>6. Aplicamos primero el flujo de $X$ al origen: $$\Phi_t^X(0,0,0)=(t,0,0).$$ Luego aplicamos el flujo de $Y$: $$\Phi_s^Y\left(\Phi_t^X(0,0,0)\right)=\Phi_s^Y(t,0,0)=\left(t,s,f(t)\sin(s)\right).$$
>>7. Definimos $$F:\mathbb R^2\longrightarrow\mathbb R^3,\qquad F(t,s)=\left(t,s,f(t)\sin(s)\right).$$ Su imagen es $$S=F(\mathbb R^2)=\left\{(x,y,z)\in\mathbb R^3:z=f(x)\sin(y)\right\}.$$ Como $S$ es el gráfico de la función suave $h(x,y)=f(x)\sin(y)$, es una subvariedad incrustada de $\mathbb R^3$. Sea $$i:S\hookrightarrow\mathbb R^3$$ la inclusión y definamos $$\widetilde F:\mathbb R^2\longrightarrow S,\qquad \widetilde F(t,s)=\left(t,s,f(t)\sin(s)\right).$$ Entonces $$F=i\circ\widetilde F,$$ y $\widetilde F$ es un difeomorfismo entre $\mathbb R^2$ y $S$.
>>8. Sea $q=(q_1,q_2)\in\mathbb R^2$ y sea $p=\widetilde F(q)\in S$. Como $\widetilde F$ es un difeomorfismo, $$d\widetilde F_q(T_q\mathbb R^2)=T_pS.$$ Aplicando el diferencial de la inclusión y usando la regla de la cadena, obtenemos $$di_p(T_pS)=di_p\left(d\widetilde F_q(T_q\mathbb R^2)\right)=d(i\circ\widetilde F)_q(T_q\mathbb R^2)=dF_q(T_q\mathbb R^2).$$ Además, $$dF_q\left(\left.\frac{\partial}{\partial t}\right|_q\right)=\left(1,0,f'(q_1)\sin(q_2)\right)=X_{F(q)}$$ y $$dF_q\left(\left.\frac{\partial}{\partial s}\right|_q\right)=\left(0,1,f(q_1)\cos(q_2)\right)=Y_{F(q)}.$$ Por lo tanto, $$di_p(T_pS)=dF_q(T_q\mathbb R^2)=\operatorname{span}\left\{X_p,Y_p\right\}=\mathcal D_p.$$ Además, $$\widetilde F(0,0)=(0,0,0).$$ Luego $(S,i)$ es una subvariedad integral de $\mathcal D$ que pasa por el origen.

>[!Exercise]
>Extensión local de $1$-formas. Sea $f:M\to N$ una inmersión y sea $\alpha$ una $1$-forma en $M$. Probar que para todo $p\in M$ existen abiertos $U$ y $V$ alrededor de $p$ y $f(p)$, respectivamente, y una $1$-forma $\beta$ en $V$ tales que $$\alpha|_U=(f|_U)^*\beta.$$
>
>>[!Proof]-
>>1. Sean $m=\dim M$ y $n=\dim N$. Como $f$ es una inmersión, por la forma local de una inmersión existen cartas $(U,\varphi=(x_1,\ldots,x_m))$ alrededor de $p$ y $(V,\psi=(y_1,\ldots,y_n))$ alrededor de $f(p)$ tales que $$\psi\circ f\circ\varphi^{-1}(x_1,\ldots,x_m)=(x_1,\ldots,x_m,0,\ldots,0).$$
>>2. En particular, para $1\leq i\leq m$ se tiene $y_i\circ f=x_i$ en $U$, y por lo tanto $$(f|_U)^*(dy_i)=d(y_i\circ f)=dx_i.$$
>>3. Como $\alpha$ es una $1$-forma suave, en la carta $(U,\varphi)$ puede escribirse como $$\alpha|_U=\sum_{i=1}^m a_i\,dx_i,$$ con $a_i\in C^\infty(U)$.
>>4. Sea $\pi:\psi(V)\to\varphi(U)$ la proyección sobre las primeras $m$ coordenadas, dada por $\pi(z_1,\ldots,z_n)=(z_1,\ldots,z_m)$, y definamos $$r=\varphi^{-1}\circ\pi\circ\psi:V\to U.$$ Por la forma local de $f$, se cumple $$r\circ f|_U=\operatorname{id}_U.$$
>>5. Para cada $i=1,\ldots,m$, definimos la función suave $\widetilde a_i:V\to\mathbb R$ por $$\widetilde a_i=a_i\circ r.$$ Entonces $$\widetilde a_i\circ f|_U=a_i\circ r\circ f|_U=a_i.$$
>>6. Definimos la $1$-forma $\beta$ en $V$ por $$\beta=\sum_{i=1}^m\widetilde a_i\,dy_i.$$
>>7. Finalmente, $$\begin{aligned}(f|_U)^*\beta&=\sum_{i=1}^m(\widetilde a_i\circ f|_U)(f|_U)^*(dy_i)\\&=\sum_{i=1}^m a_i\,d(y_i\circ f)\\&=\sum_{i=1}^m a_i\,dx_i\\&=\alpha|_U.\end{aligned}$$ Por lo tanto, existe una $1$-forma $\beta$ en $V$ tal que $$\alpha|_U=(f|_U)^*\beta.$$
---

>[!Exercise]
>Let $\mathcal D$ be the distribution on $\mathbb R^3$ generated by the vector fields $$U=\frac{\partial}{\partial y},\qquad V=\frac{\partial}{\partial x}+yz\frac{\partial}{\partial z}.$$
>- (a) Show that $\mathcal D$ is not involutive.
>- (b) Find an integral submanifold of $\mathcal D$.
>- (c) Determine whether there exists a coordinate system $(x_1,x_2,x_3)$ on a neighborhood of $(0,0,1)$ such that $$U=\frac{\partial}{\partial x_1},\qquad V=\frac{\partial}{\partial x_2}.$$
>
>>[!Proof]-
>>- (a)
>>	1. Since $U=\frac{\partial}{\partial y}$ and $V=\frac{\partial}{\partial x}+yz\frac{\partial}{\partial z}$, their Lie bracket is $$[U,V]=\left[\frac{\partial}{\partial y},\frac{\partial}{\partial x}+yz\frac{\partial}{\partial z}\right]=\frac{\partial(yz)}{\partial y}\frac{\partial}{\partial z}=z\frac{\partial}{\partial z}.$$
>>	2. At the point $p=(0,1,1)$, we have $$U_p=(0,1,0),\qquad V_p=(1,0,1),\qquad [U,V]_p=(0,0,1).$$
>>	3. If $[U,V]_p\in\mathcal D_p$, there would exist $a,b\in\mathbb R$ such that $$(0,0,1)=a(0,1,0)+b(1,0,1)=(b,a,b).$$
>>	4. Comparing coordinates gives $b=0$, $a=0$ and $b=1$, which is impossible. Therefore, $$[U,V]_p\notin\mathcal D_p.$$
>>	5. Since $U$ and $V$ are sections of $\mathcal D$ but $[U,V]$ is not a section of $\mathcal D$, the distribution $\mathcal D$ is not involutive.
>>- (b)
>>	1. Define $F:\mathbb R^3\to\mathbb R$ by $$F(x,y,z)=z,$$ and let $$H=F^{-1}(0)=\{(x,y,z)\in\mathbb R^3:z=0\}.$$
>>	2. For every $p\in H$, the differential is $$dF_p(a,b,c)=c,$$ so $dF_p$ is surjective.
>>	3. Therefore, $0$ is a regular value of $F$, and $H$ is an embedded submanifold of $\mathbb R^3$.
>>	4. Let $\iota:H\hookrightarrow\mathbb R^3$ be the inclusion. Since $H=F^{-1}(0)$, for every $p\in H$ we have $$d\iota_p(T_pH)=\ker dF_p=\operatorname{span}\{e_1,e_2\}.$$
>>	5. If $p=(x,y,0)\in H$, then $$U_p=e_2,\qquad V_p=e_1+yz\,e_3=e_1.$$
>>	6. Hence $$\mathcal D_p=\operatorname{span}\{U_p,V_p\}=\operatorname{span}\{e_1,e_2\}=d\iota_p(T_pH).$$
>>	7. Therefore, $(H,\iota)$ is an integral submanifold of $\mathcal D$.
>>- (c)
>>	1. Suppose that there exists a coordinate system $(x_1,x_2,x_3)$ on a neighborhood $W$ of $(0,0,1)$ such that $$U=\frac{\partial}{\partial x_1},\qquad V=\frac{\partial}{\partial x_2}.$$
>>	2. Coordinate vector fields commute, so on $W$ we would have $$[U,V]=\left[\frac{\partial}{\partial x_1},\frac{\partial}{\partial x_2}\right]=0.$$
>>	3. However, from part (a), $$[U,V]=z\frac{\partial}{\partial z},$$ and therefore $$[U,V]_{(0,0,1)}=\frac{\partial}{\partial z}\bigg|_{(0,0,1)}\neq 0.$$
>>	4. This is a contradiction. Therefore, no such coordinate system exists on a neighborhood of $(0,0,1)$.

>[!Exercise]
>Sea $$SL(n,\mathbb R)=\{A\in\mathbb R^{n\times n}:\det A=1\}.$$
>
>a) Probar que $SL(n,\mathbb R)$ es una subvariedad incrustada de $\mathbb R^{n\times n}$ e indicar su dimensión.
>
>b) Mostrar que la curva $$\alpha:(0,\infty)\to SL(3,\mathbb R),\qquad \alpha(t)=\operatorname{diag}(t,t,1/t^2),$$ es diferenciable.
>
>>[!Proof]-
>>- (a)
>>	1. Consideremos la función suave $$\det:M(n,\mathbb R)\to\mathbb R.$$ Como $M(n,\mathbb R)$ se identifica canónicamente con $\mathbb R^{n^2}$ y el determinante es un polinomio en las entradas de la matriz, esta función es suave.
>>	2. Se tiene $$SL(n,\mathbb R)=det^{-1}(1).$$ Para probar que $1$ es un valor regular de $\det$, fijemos $A\in SL(n,\mathbb R)$.
>>	3. El diferencial de $\det$ en $A$ satisface, para $X\in M(n,\mathbb R)$, $$d(\det)_A(X)=\left.\frac{d}{dt}\right|_{t=0}\det(A+tX).$$
>>	4. Tomando $X=A$, obtenemos $$d(\det)_A(A)=\left.\frac{d}{dt}\right|_{t=0}\det((1+t)A)=\left.\frac{d}{dt}\right|_{t=0}(1+t)^n\det A=n\neq0.$$
>>	5. Por lo tanto, $d(\det)_A:M(n,\mathbb R)\to\mathbb R$ no es nulo y, como su codominio tiene dimensión $1$, es sobreyectivo.
>>	6. Esto vale para todo $A\in SL(n,\mathbb R)$, luego $1$ es un valor regular de $\det$. Por el teorema del valor regular, $SL(n,\mathbb R)$ es una subvariedad incrustada de $M(n,\mathbb R)\cong\mathbb R^{n^2}$.
>>	7. Como $\det$ tiene codominio de dimensión $1$, resulta $$\dim SL(n,\mathbb R)=n^2-1.$$
>>- (b)
>>	1. Sea $i:SL(3,\mathbb R)\hookrightarrow M(3,\mathbb R)$ la inclusión y consideremos la aplicación $$\widetilde\alpha=i\circ\alpha:(0,\infty)\to M(3,\mathbb R),\qquad \widetilde\alpha(t)=\begin{pmatrix}t&0&0\\0&t&0\\0&0&t^{-2}\end{pmatrix}.$$
>>	2. Para todo $t>0$ se tiene $$\det(\widetilde\alpha(t))=t\cdot t\cdot t^{-2}=1,$$ de modo que $\widetilde\alpha((0,\infty))\subseteq SL(3,\mathbb R)$.
>>	3. Identificando $M(3,\mathbb R)$ con $\mathbb R^9$ mediante la carta global natural, la expresión en coordenadas de $\widetilde\alpha$ es $$t\longmapsto(t,0,0,0,t,0,0,0,t^{-2}).$$
>>	4. Todas sus funciones coordenadas son suaves en $(0,\infty)$, luego $\widetilde\alpha=i\circ\alpha$ es suave.
>>	5. Como $SL(3,\mathbb R)$ es una subvariedad incrustada de $M(3,\mathbb R)$ y $\widetilde\alpha((0,\infty))\subseteq SL(3,\mathbb R)$, por el lema de factorización se concluye que $\alpha:(0,\infty)\to SL(3,\mathbb R)$ es suave.

>[!Exercise]
>Sea $\sim$ la relación de equivalencia en $\mathbb R^2$ dada por $$(x,y)\sim(x+k,y)\qquad\text{para todo }k\in\mathbb Z,$$ y considerar en el cilindro $M=\mathbb R^2/\sim$ la única estructura diferenciable tal que la proyección canónica $\pi:\mathbb R^2\to M$ sea un difeomorfismo local. Sea $X$ el campo en $\mathbb R^2$ definido por $$X(x,y)=(1,y).$$ Probar que $Y(\pi(q))=d\pi_q(X_q)$ define bien un campo suave en $M$ y hallar sus curvas integrales. ¿Existe alguna periódica?
>>[!Proof]-
>>6. Para cada $k\in\mathbb Z$, definimos la traslación $T_k:\mathbb R^2\to\mathbb R^2$ por $T_k(x,y)=(x+k,y)$. Como $\pi\circ T_k=\pi$, por la regla de la cadena se tiene $$d\pi_{(x,y)}=d\pi_{(x+k,y)}\circ d(T_k)_{(x,y)}.$$
>>7. Además, como $d(T_k)_{(x,y)}$ es la identidad, $$d(T_k)_{(x,y)}(X_{(x,y)})=d(T_k)_{(x,y)}(1,y)=(1,y)=X_{(x+k,y)}.$$
>>8. Por lo tanto, si $(x,y)\sim(x+k,y)$, entonces $$d\pi_{(x,y)}(X_{(x,y)})=d\pi_{(x+k,y)}\bigl(d(T_k)_{(x,y)}X_{(x,y)}\bigr)=d\pi_{(x+k,y)}(X_{(x+k,y)}),$$ de modo que $Y(\pi(q))=d\pi_q(X_q)$ no depende del representante $q$ y define bien un campo en $M$.
>>9. Para probar que $Y$ es suave, sea $p\in M$. Como $\pi$ es un difeomorfismo local, existe un abierto $U\subseteq\mathbb R^2$ tal que $\pi|_U:U\to V:=\pi(U)$ es un difeomorfismo. Sobre $U$ se tiene $$(Y\circ\pi)|_U=(d\pi\circ X)|_U.$$
>>10. Como $X:\mathbb R^2\to T\mathbb R^2$ es suave y $d\pi:T\mathbb R^2\to TM$ es suave, la aplicación $d\pi\circ X$ es suave. Entonces, sobre $V$, $$Y|_V=(d\pi\circ X)|_U\circ(\pi|_U)^{-1},$$ y por lo tanto $Y|_V$ es suave. Como esto vale alrededor de todo $p\in M$, $Y$ es un campo suave.
>>11. Sea $\widetilde\gamma(t)=(x(t),y(t))$ una curva integral de $X$ con condición inicial $\widetilde\gamma(0)=(x_0,y_0)$. La ecuación $\widetilde\gamma'(t)=X_{\widetilde\gamma(t)}$ equivale al sistema $$x'(t)=1,\qquad y'(t)=y(t).$$
>>12. Resolviendo el sistema se obtiene $$x(t)=x_0+t,\qquad y(t)=y_0e^t,$$ y por lo tanto $$\widetilde\gamma(t)=(x_0+t,y_0e^t).$$
>>13. Definimos $$\gamma(t)=\pi(\widetilde\gamma(t))=\pi(x_0+t,y_0e^t).$$ Entonces $$\gamma'(t)=d\pi_{\widetilde\gamma(t)}(\widetilde\gamma'(t))=d\pi_{\widetilde\gamma(t)}(X_{\widetilde\gamma(t)})=Y_{\gamma(t)},$$ de modo que las curvas integrales de $Y$ son $$\gamma(t)=\pi(x_0+t,y_0e^t).$$
>>14. Una curva integral es periódica si existe $T>0$ tal que $\gamma(t+T)=\gamma(t)$ para todo $t$. Esto equivale a que $$x_0+t+T=x_0+t+k,\qquad y_0e^{t+T}=y_0e^t$$ para algún $k\in\mathbb Z$.
>>15. La primera igualdad implica $T=k\in\mathbb Z$, mientras que la segunda implica $y_0(e^T-1)=0$. Como $T>0$, se tiene $e^T\neq1$, luego necesariamente $y_0=0$.
>>16. Por consiguiente, las únicas curvas integrales periódicas son $$\gamma(t)=\pi(x_0+t,0),$$ y su período fundamental es $1$.

>[!Exercise]
>Sea $V$ un espacio vectorial real de dimensión finita y sean $\beta\in V^*\setminus\{0\}$ y $\omega\in\Lambda^kV^*$. Probar que, si $\beta\wedge\omega=0$, entonces existe $\tau\in\Lambda^{k-1}V^*$ tal que $\omega=\beta\wedge\tau$.
>>[!Proof]-
>>17. Como $\beta\neq0$, existe $u\in V$ tal que $\beta(u)\neq0$. Definimos $v_1=\dfrac{u}{\beta(u)}$, de modo que $\beta(v_1)=1$.
>>18. Como $\beta$ es una forma lineal no nula, $\ker\beta$ tiene dimensión $\dim V-1$. Elegimos una base $\{v_2,\ldots,v_n\}$ de $\ker\beta$.
>>19. El conjunto $B=\{v_1,v_2,\ldots,v_n\}$ es linealmente independiente. En efecto, si $a_1v_1+\cdots+a_nv_n=0$, al aplicar $\beta$ obtenemos $$a_1\beta(v_1)+\sum_{j=2}^na_j\beta(v_j)=a_1=0.$$ Luego $\sum_{j=2}^na_jv_j=0$, y como $\{v_2,\ldots,v_n\}$ es linealmente independiente, resulta $a_2=\cdots=a_n=0$.
>>20. Como $B$ contiene $n=\dim V$ vectores linealmente independientes, es una base de $V$. Sea $B^*=\{v^1,\ldots,v^n\}$ su base dual.
>>21. Para esta base se tiene $\beta(v_1)=1$ y $\beta(v_j)=0$ para $j\ge2$. Como $v^1$ toma los mismos valores sobre los elementos de $B$, se concluye que $$\beta=v^1.$$
>>22. Escribimos $\omega$ en la base inducida de $\Lambda^kV^*$ como $$\omega=\sum_{1\le i_1<\cdots<i_k\le n}a_{i_1\cdots i_k}\,v^{i_1}\wedge\cdots\wedge v^{i_k}.$$
>>23. La hipótesis $\beta\wedge\omega=0$ se convierte en $$0=v^1\wedge\omega=\sum_{1\le i_1<\cdots<i_k\le n}a_{i_1\cdots i_k}\,v^1\wedge v^{i_1}\wedge\cdots\wedge v^{i_k}.$$
>>24. Los términos de $\omega$ que contienen a $v^1$ se anulan al multiplicarlos exteriormente por $v^1$. Los términos que no contienen a $v^1$ producen elementos distintos de la base de $\Lambda^{k+1}V^*$, por lo que sus coeficientes deben ser cero.
>>25. Por lo tanto, todos los términos no nulos de $\omega$ contienen el factor $v^1$. Como los índices están ordenados, podemos escribir $$\omega=\sum_{1<i_2<\cdots<i_k\le n}a_{1i_2\cdots i_k}\,v^1\wedge v^{i_2}\wedge\cdots\wedge v^{i_k}.$$
>>26. Definimos $$\tau=\sum_{1<i_2<\cdots<i_k\le n}a_{1i_2\cdots i_k}\,v^{i_2}\wedge\cdots\wedge v^{i_k}\in\Lambda^{k-1}V^*.$$
>>27. Como $\beta=v^1$, obtenemos $$\beta\wedge\tau=v^1\wedge\tau=\omega.$$ Por lo tanto, existe $\tau\in\Lambda^{k-1}V^*$ tal que $\omega=\beta\wedge\tau$.

>[!Exercise]
>Indicar en cada caso si la afirmación es verdadera o falsa. Justificar.
>
>- (a) Sea $f:M\to N$ una función diferenciable. Entonces $f$ es una inmersión si y solo si para toda curva regular $\gamma:I\to M$ se cumple que $f\circ\gamma:I\to N$ es una curva regular.
>- (b) La $2$-forma $$\omega=(x^3-y)\,dx\wedge dz-x(dx\wedge dt+dy\wedge dz)$$ es cerrada.
>
>>[!Proof]-
>>- (a)
>>	1. La afirmación es verdadera.
>>	2. Supongamos primero que $f$ es una inmersión y sea $\gamma:I\to M$ una curva regular. Para todo $t\in I$, por la regla de la cadena, $$(f\circ\gamma)'(t)=(df)_{\gamma(t)}\bigl(\gamma'(t)\bigr).$$
>>	3. Como $\gamma$ es regular, $\gamma'(t)\ne0$, y como $f$ es una inmersión, $(df)_{\gamma(t)}$ es inyectivo. Por lo tanto, $$(f\circ\gamma)'(t)\ne0.$$
>>	4. En consecuencia, $f\circ\gamma$ es una curva regular.
>>	5. Recíprocamente, supongamos que $f\circ\gamma$ es regular para toda curva regular $\gamma:I\to M$.
>>	6. Fijemos $p\in M$ y tomemos $v\in T_pM$ con $v\ne0$. Existe una curva regular $\gamma:I\to M$ tal que $$\gamma(0)=p,\qquad \gamma'(0)=v.$$
>>	7. Por hipótesis, $f\circ\gamma$ es regular, de modo que $$(f\circ\gamma)'(0)\ne0.$$
>>	8. Aplicando la regla de la cadena obtenemos $$(df)_p(v)=(f\circ\gamma)'(0)\ne0.$$
>>	9. Por lo tanto, $v\ne0$ implica $(df)_p(v)\ne0$, de donde $\ker(df)_p=\{0\}$ y $(df)_p$ es inyectivo.
>>	10. Como esto vale para todo $p\in M$, $f$ es una inmersión.
>>- (b)
>>	1. La afirmación es verdadera.
>>	2. Distribuyendo el último término, escribimos $$\omega=(x^3-y)\,dx\wedge dz-x\,dx\wedge dt-x\,dy\wedge dz.$$
>>	3. Como $d(dx)=d(dy)=d(dz)=d(dt)=0$, aplicando la regla de Leibniz obtenemos $$d\omega=d(x^3-y)\wedge dx\wedge dz-dx\wedge dx\wedge dt-dx\wedge dy\wedge dz.$$
>>	4. Como $$d(x^3-y)=3x^2\,dx-dy,$$ resulta $$d\omega=(3x^2\,dx-dy)\wedge dx\wedge dz-dx\wedge dx\wedge dt-dx\wedge dy\wedge dz.$$
>>	5. Desarrollando, $$d\omega=3x^2\,dx\wedge dx\wedge dz-dy\wedge dx\wedge dz-dx\wedge dx\wedge dt-dx\wedge dy\wedge dz.$$
>>	6. Los términos que contienen $dx\wedge dx$ son nulos, por lo que $$d\omega=-dy\wedge dx\wedge dz-dx\wedge dy\wedge dz.$$
>>	7. Como $dy\wedge dx=-dx\wedge dy$, tenemos $$-dy\wedge dx\wedge dz=dx\wedge dy\wedge dz.$$
>>	8. En consecuencia, $$d\omega=dx\wedge dy\wedge dz-dx\wedge dy\wedge dz=0.$$
>>	9. Por lo tanto, $\omega$ es cerrada.

>[!Exercise]
>Sea $\phi:\mathbb{R}\times\mathbb{R}^2\to\mathbb{R}^2$ definida por $$\phi(t,(x,y))=(e^{2t}x,e^{3t}y).$$ Encontrar un campo $V$ en $\mathbb{R}^2$ tal que $\phi$ sea el grupo monoparamétrico de difeomorfismos de $\mathbb{R}^2$ asociado a $V$.
>>[!Proof]-
>>10. Para cada $t\in\mathbb{R}$, definimos $\phi_t:\mathbb{R}^2\to\mathbb{R}^2$ mediante $$\phi_t(x,y)=\phi(t,(x,y))=(e^{2t}x,e^{3t}y).$$
>>11. El campo asociado al flujo se obtiene derivando respecto del parámetro temporal en $t=0$. Por lo tanto, para cada $(x,y)\in\mathbb{R}^2$, $$V_{(x,y)}=\left.\frac{d}{dt}\right|_{t=0}\phi_t(x,y).$$
>>12. Calculamos $$\frac{d}{dt}\phi_t(x,y)=\frac{d}{dt}(e^{2t}x,e^{3t}y)=(2e^{2t}x,3e^{3t}y).$$
>>13. Evaluando en $t=0$, obtenemos $$V_{(x,y)}=(2x,3y).$$
>>14. En términos de la base coordenada de $T_{(x,y)}\mathbb{R}^2$, el campo es $$V=2x\frac{\partial}{\partial x}+3y\frac{\partial}{\partial y}.$$
>>15. Para verificar que $\phi$ es el flujo de $V$, fijamos $p=(x,y)\in\mathbb{R}^2$ y consideramos la curva $$\gamma_p(t)=\phi_t(p)=(e^{2t}x,e^{3t}y).$$
>>16. Su derivada es $$\gamma_p'(t)=(2e^{2t}x,3e^{3t}y).$$
>>17. Por otro lado, evaluando el campo en $\gamma_p(t)$, obtenemos $$V_{\gamma_p(t)}=V_{(e^{2t}x,e^{3t}y)}=(2e^{2t}x,3e^{3t}y).$$
>>18. Por lo tanto, $$\gamma_p'(t)=V_{\gamma_p(t)}$$ y además $\gamma_p(0)=p$.
>>19. Así, para cada $p\in\mathbb{R}^2$, la curva $t\mapsto\phi_t(p)$ es la curva integral de $V$ que comienza en $p$. En consecuencia, $\phi$ es el grupo monoparamétrico de difeomorfismos asociado al campo $$V=2x\frac{\partial}{\partial x}+3y\frac{\partial}{\partial y}.$$

>[!Exercise]
>Decidir si las siguientes afirmaciones son verdaderas o falsas.
>
>- (a) El campo $V(x,y)=x^2\frac{\partial}{\partial x}$ en $\mathbb R^2$ es completo.
>- (b) Sea $X$ un campo completo en $M$ con $X(p)\neq 0$ y sea $\gamma:\mathbb R\to M$ la curva integral de $X$ por $p$. Entonces $\gamma$ es una inmersión.
>
>>[!Proof]-
>>- (a)
>>	1. La afirmación es falsa. Sea $\gamma_{(x_0,y_0)}(t)=(x(t),y(t))$ la curva integral de $V$ que parte de $(x_0,y_0)$. Entonces debe satisfacer $$x'(t)=x(t)^2,\qquad y'(t)=0,\qquad x(0)=x_0,\qquad y(0)=y_0.$$
>>	2. De $y'(t)=0$ se obtiene $y(t)=y_0$.
>>	3. Si $x_0\neq 0$, resolviendo $x'(t)=x(t)^2$ se obtiene $$x(t)=-\frac{1}{t-c}.$$ Como $x(0)=x_0$, resulta $c=\frac{1}{x_0}$, y por tanto $$x(t)=-\frac{1}{t-\frac{1}{x_0}}$$
>>	4. Esta solución no está definida en $t=\frac{1}{x_0}$. Por ejemplo, para $(x_0,y_0)=(1,0)$, la curva integral es $$\gamma_{(1,0)}(t)=\left(\frac{1}{1-t},0\right),\qquad t\in(-\infty,1).$$
>>	5. Como existe una curva integral maximal cuyo dominio no es todo $\mathbb R$, el campo $V$ no es completo.
>>- (b)
>>	1. La afirmación es verdadera. Como $X$ es completo, la curva integral por $p$ está definida en todo $\mathbb R$ y satisface $$\gamma(0)=p,\qquad \gamma'(t)=X(\gamma(t)).$$
>>	2. Para cada $t\in\mathbb R$, el diferencial de $\gamma$ es la aplicación lineal $$d\gamma_t:T_t\mathbb R\longrightarrow T_{\gamma(t)}M,$$ y se cumple $$d\gamma_t\left(\left.\frac{\partial}{\partial t}\right|_t\right)=\gamma'(t)=X(\gamma(t)).$$
>>	3. Primero probamos que $X(\gamma(t))\neq 0$ para todo $t\in\mathbb R$
>>	4. Supongamos que existe $t_0\in\mathbb R$ tal que $X(\gamma(t_0))=0$.
>>	5. En ese caso, la curva constante $c:\mathbb R\to M$ dada por $c(t)=\gamma(t_0)$ es una curva integral de $X$, pues $$c'(t)=0=X(\gamma(t_0))=X(c(t)).$$
>>	6. Como $c(t_0)=\gamma(t_0)$, la unicidad de curvas integrales implica que $c=\gamma$. Por tanto, $\gamma$ sería constante y tendríamos $$X(p)=\gamma'(0)=0,$$ contradiciendo la hipótesis $X(p)\neq 0$.
>>	7. En consecuencia, para todo $t\in\mathbb R$, $$d\gamma_t\left(\left.\frac{\partial}{\partial t}\right|_t\right)=X(\gamma(t))\neq 0.$$
>>	8. Como $T_t\mathbb R$ tiene dimensión $1$, toda aplicación lineal no nula definida sobre $T_t\mathbb R$ es inyectiva. Por tanto, $d\gamma_t$ es inyectiva para todo $t\in\mathbb R$.
>>	9. Luego $\gamma:\mathbb R\to M$ es una inmersión.

### Ejercicio 4

>[!Exercise]
>Sea $V$ un espacio vectorial de dimensión $n$, sean $\theta_1,\ldots,\theta_{k-1}\in V^*$ tales que
>$$\omega=\theta_1\wedge\cdots\wedge\theta_{k-1}\neq0,$$
>y sea
>$$N=\{v\in V:\iota_v\omega=0\}.$$
>Mostrar que $N$ es un subespacio de $V$ de dimensión mayor o igual que $n-k+1$.
>
>>[!Proof]-
>>1. Como $$\omega=\theta_1\wedge\cdots\wedge\theta_{k-1}\neq0,$$ las formas lineales $\theta_1,\ldots,\theta_{k-1}$ son linealmente independientes.
>>2. Para $v\in V$, la contracción de $\omega$ por $v$ es la $(k-2)$-forma
>>$$\iota_v\omega=\sum_{j=1}^{k-1}(-1)^{j-1}\theta_j(v)\,\theta_1\wedge\cdots\wedge\widehat{\theta_j}\wedge\cdots\wedge\theta_{k-1},$$
>>donde el sombrero indica que se omite ese factor.
>>3. Como las $\theta_j$ son linealmente independientes, podemos completarlas hasta obtener una base de $V^*$. En la base inducida de $\Lambda^{k-2}V^*$, las formas
>>$$\theta_1\wedge\cdots\wedge\widehat{\theta_j}\wedge\cdots\wedge\theta_{k-1},\qquad 1\leq j\leq k-1,$$
>>son elementos distintos y, por lo tanto, linealmente independientes.
>>4. En consecuencia,
>>$$\iota_v\omega=0\quad\Longleftrightarrow\quad\theta_1(v)=\cdots=\theta_{k-1}(v)=0.$$
>>Así,
>>$$N=\bigcap_{j=1}^{k-1}\ker\theta_j.$$
>>En particular, $N$ es un subespacio vectorial de $V$.
>>5. Consideremos la aplicación lineal
>>$$T:V\longrightarrow\mathbb R^{k-1},\qquad T(v)=\bigl(\theta_1(v),\ldots,\theta_{k-1}(v)\bigr).$$
>>Por el paso anterior, $\ker T=N$.
>>6. La independencia lineal de $\theta_1,\ldots,\theta_{k-1}$ implica que $\operatorname{rg}T=k-1$. Por el teorema rango-nulidad,
>>$$n=\dim V=\dim(\ker T)+\operatorname{rg}T=\dim N+k-1.$$
>>7. Por lo tanto,
>>$$\dim N=n-k+1.$$
>>En particular, $\dim N\geq n-k+1$, como se quería demostrar.

### 5
>[!Exercise]
>Sea $\alpha$ la 1-forma diferenciable en $\mathbb R^3$ definida por
>$$\alpha=dz-x\,dy.$$
>
>**(a)** Probar que $\alpha\wedge d\alpha$ es una 3-forma nunca nula en $\mathbb R^3$.
>
>**(b)** Sea
>$$D=\ker\alpha,\qquad D_p=\ker\alpha_p$$
>para todo $p\in\mathbb R^3$. Probar que $D$ es una distribución diferenciable en $\mathbb R^3$, no involutiva.
>
>>[!Proof]-
>>- **(a)**
>>	1. Como $d(dz)=0$ y $d(dy)=0$, por la regla de Leibniz para la diferencial exterior obtenemos
>>	$$d\alpha=d(dz)-d(x\,dy)=-dx\wedge dy.$$
>>	2. Por lo tanto,
>>	$$\begin{aligned}\alpha\wedge d\alpha&=(dz-x\,dy)\wedge(-dx\wedge dy)\\&=-dz\wedge dx\wedge dy+x\,dy\wedge dx\wedge dy.\end{aligned}$$
>>	3. El segundo término se anula porque contiene dos veces el factor $dy$:
>>	$$dy\wedge dx\wedge dy=0.$$
>>	4. Además, la permutación que lleva $(dz,dx,dy)$ a $(dx,dy,dz)$ es par. En consecuencia,
>>	$$\alpha\wedge d\alpha=-dx\wedge dy\wedge dz.$$
>>	5. Esta 3-forma no se anula en ningún punto, pues para todo $p\in\mathbb R^3$ se cumple
>>	$$\left(\alpha\wedge d\alpha\right)_p\left(\left.\frac{\partial}{\partial x}\right|_p,\left.\frac{\partial}{\partial y}\right|_p,\left.\frac{\partial}{\partial z}\right|_p\right)=-1\neq0.$$
>>- **(b)**
>>	1. La notación $D=\ker\alpha$ se entiende fibra a fibra. En efecto, una 1-forma diferencial es una sección
>>	$$\alpha:\mathbb R^3\longrightarrow T^*\mathbb R^3,\qquad p\longmapsto\alpha_p,$$
>>	no una única transformación lineal. Para cada $p$, en cambio,
>>	$$\alpha_p:T_p\mathbb R^3\longrightarrow\mathbb R$$
>>	sí es lineal y tiene un núcleo bien definido. Así, la expresión $D=\ker\alpha$ es una abreviatura para
>>	$$D=\coprod_{p\in\mathbb R^3}\ker\alpha_p=\left\{(p,v)\in T\mathbb R^3:\alpha_p(v)=0\right\}.$$
>>	2. Sea $p=(x,y,z)$ y escribamos
>>	$$v=a\left.\frac{\partial}{\partial x}\right|_p+b\left.\frac{\partial}{\partial y}\right|_p+c\left.\frac{\partial}{\partial z}\right|_p\in T_p\mathbb R^3.$$
>>	Entonces
>>	$$\alpha_p(v)=(dz-x\,dy)_p(v)=c-xb.$$
>>	3. Por lo tanto,
>>	$$\begin{aligned}D_p=\ker\alpha_p&=\left\{a\left.\frac{\partial}{\partial x}\right|_p+b\left.\frac{\partial}{\partial y}\right|_p+c\left.\frac{\partial}{\partial z}\right|_p:c=xb\right\}\\&=\operatorname{span}\left\{\left.\frac{\partial}{\partial x}\right|_p,\left.\left(\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}\right)\right|_p\right\}.\end{aligned}$$
>>	4. Definimos los campos suaves globales
>>	$$X=\frac{\partial}{\partial x},\qquad Y=\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}.$$
>>	Para todo $p\in\mathbb R^3$, los vectores $X_p$ e $Y_p$ son linealmente independientes y generan $D_p$. Luego $D$ es una distribución diferenciable de rango $2$.
>>	5. Calculamos el corchete de los campos generadores:
>>	$$[X,Y]=\left[\frac{\partial}{\partial x},\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}\right]=\frac{\partial}{\partial z}.$$
>>	6. Sin embargo,
>>	$$\alpha\left([X,Y]\right)=(dz-x\,dy)\left(\frac{\partial}{\partial z}\right)=1.$$
>>	Por lo tanto, $[X,Y]_p\notin D_p$ para todo $p\in\mathbb R^3$. En consecuencia,
>>	$$D\text{ no es involutiva.}$$

### 6
Mostrar que $M\times M$ es orientable si $M$ lo es.

---

## Página 5

# Examen de Geometría Superior - 19/12/2019

### 1
Sea
$$
F:(0,\pi)\times\mathbb R\to S^2
$$
definida por
$$
F(s,t)=\frac{1}{\sqrt{1+t^2}}(\cos s,\sin s,t).
$$

Mostrar que la imagen de $F$ es
$$
U_2^+=\{x\in S^2:x_2>0\}
$$
y que $(U_2^+,F^{-1})$ es un sistema coordenado de $S^2$.

### 2
Sean $X$ e $Y$ los campos en $\mathbb R^3$ definidos por
$$
X=\frac{\partial}{\partial x}+y\frac{\partial}{\partial z},
\qquad
Y=\frac{\partial}{\partial y}+x\frac{\partial}{\partial z}.
$$

a) Probar que $X$ e $Y$ definen una distribución diferenciable $D$ en $\mathbb R^3$ de dimensión $2$.

b) Probar que $D$ es involutiva.

c) Probar que los conjuntos indicados en el enunciado son subvariedades integrales maximales conexas de $D$.

### 3
Sea $M$ una variedad cubierta por dos sistemas coordenados $(U,\phi)$ y $(V,\psi)$, conexos, tales que $U\cap V$ tiene exactamente dos componentes conexas, con la propiedad de que el determinante de cambio de coordenadas es positivo en una componente conexa y negativo en la otra. Probar que $M$ no es orientable.

b) Mostrar que la cinta de Möbius $M$ no es orientable, donde
$$
M=(\mathbb R\times(-1,1))/\sim,
\qquad
(x,t)\sim(x+1,-t)
$$
para $m\in\mathbb Z$.

### 4
Sea $M$ una variedad diferenciable y $F:M\to M$ un difeomorfismo. Sea $X$ un campo completo en $M$ con flujo $\theta_t$. Probar que
$$
dF_p(X_p)=X_{F(p)}
$$
para todo $p\in M$ si y sólo si $F$ conmuta con cada $\theta_t$, es decir,
$$
\theta_t=F\circ\theta_t\circ F^{-1}
$$
para todo $t\in\mathbb R$.

(Sugerencia: unicidad de las curvas integrales.)

---

## Página 6

# Examen de Geometría Superior - 2 de marzo de 2020

### 1

a) Sea $N$ una variedad y sea $p\in N$ un punto de máximo de la función suave
$$
f:N\to\mathbb R.
$$
Mostrar que
$$
df_p=0.
$$

b) Sea $M$ una subvariedad compacta de dimensión dos incluida en $\mathbb R^4$ y sea $v\in\mathbb R^4$ un vector unitario. Probar que existe $p\in M$ tal que $T_pM$ (como es usual, se identifica $T_pM$ con un subespacio de $T_p\mathbb R^4\simeq\mathbb R^4$) contiene un subespacio de $v^\perp$ de dimensión $2$.

Sugerencia: considerar la función
$$
f:\mathbb R^4\to\mathbb R,\qquad
f(x)=\langle x,v\rangle.
$$
