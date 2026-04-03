## Parte Practica

>[!Exercise] Ejercicio 1
>Sea $\theta:\mathbb R\to\mathbb R$ suave con $\theta'(t)>0$. Sea $\gamma:\mathbb R\to\mathbb R^3$ con
>$$
>\gamma'(t)=\big(a\cos(\theta(t)),\,a\sin(\theta(t)),\,b\big),\qquad a>0,\ a^2+b^2=1.
>$$
>Mostrar que $\gamma$ tiene curvatura positiva, hallar el marco de Frenet y calcular el cociente constante $\tau/\kappa$.
>>[!Proof]-
>>1. Primero
>>$$
>>\|\gamma'(t)\|^2=a^2(\cos^2\theta+\sin^2\theta)+b^2=1,
>>$$
>>luego $\gamma$ es de rapidez unitaria y $T=\gamma'$.
>>2. Entonces
>>$$
>>T(t)=\big(a\cos\theta,\,a\sin\theta,\,b\big),\qquad
>>T'(t)=a\theta'(-\sin\theta,\cos\theta,0).
>>$$
>>Por tanto
>>$$
>>\kappa(t)=\|T'(t)\|=a\theta'(t)>0.
>>$$
>>3. Vector normal principal:
>>$$
>>N(t)=\frac{T'}{\kappa}=(-\sin\theta,\cos\theta,0).
>>$$
>>4. Binormal:
>>$$
>>B=T\times N=(-b\cos\theta,-b\sin\theta,a).
>>$$
>>5. Derivando:
>>$$
>>B'=(b\theta'\sin\theta,-b\theta'\cos\theta,0)=-b\theta' N.
>>$$
>>Como la curva es unitaria, $\tau=-\langle B',N\rangle$, luego
>>$$
>>\tau(t)=b\theta'(t).
>>$$
>>6. El cociente:
>>$$
>>\frac{\tau}{\kappa}=\frac{b\theta'}{a\theta'}=\frac ba,
>>$$
>>constante.
>>7. Marco de Frenet:
>>$$
>>T=(a\cos\theta,a\sin\theta,b),\quad
>>N=(-\sin\theta,\cos\theta,0),\quad
>>B=(-b\cos\theta,-b\sin\theta,a).
>>$$

---

>[!Exercise] Ejercicio 2
>$$
>M=\{(x,y,z)\in\mathbb R^3:\ z^2=4(x^2+y^2),\ z>0\}.
>$$
>a) Mostrar que $M$ es superficie regular.  
>b) Sea $\phi:\mathbb R\times(0,\infty)\to\mathbb R^3$, $\phi(s,t)=t(\cos s,\sin s,2)$. Mostrar que es parametrización de $M$.  
>c) Verificar que $\beta(t)=\phi(0,t)$ es línea asintótica.  
>d) Sea $\alpha(s)=\phi(s,1)$. Mostrar que es unitaria, hallar el marco móvil asociado a la orientación $(\phi_s\times\phi_t)/\sqrt5$ sobre $\alpha$, y calcular $\kappa_g$ (constante).
>>[!Proof]-
>>- **(a)**
>>	1. Defino $F(x,y,z)=z^2-4(x^2+y^2)$. Entonces $M=F^{-1}(0)\cap\{z>0\}$.
>>	2. $\nabla F(x,y,z)=(-8x,-8y,2z)$.
>>	3. Si $p\in M$, entonces $z>0$, luego $\nabla F(p)\neq0$.
>>	4. Por Teorema de la Superficie Implícita, $M$ es superficie regular.
>>	5. Si no , podriamos haber usado grafico de $f(x,y)=2\sqrt{ x^{2}+y^{2} }$ 
>>- **(b)**
>>	1. $\phi(s,t)=\big(t\cos s,t\sin s,2t\big)$, con $t>0$.
>>	2. Está en $M$: $z^2=(2t)^2=4t^2=4(x^2+y^2)$, y $z=2t>0$.
>>	3. $$
>>	\phi_s=t(-\sin s,\cos s,0),\qquad \phi_t=(\cos s,\sin s,2).
>>	$$
>>	4. $$
>>	\phi_s\times\phi_t=(2t\cos s,2t\sin s,-t),\quad
>>	\|\phi_s\times\phi_t\|=t\sqrt5>0.
>>	$$
>>	5. Luego $\phi$ es regular.
>>	6. Ademas $\varphi(s,t)$ claramente esta contenida en $M$ por que cumple la ecuacion $z^{2}=4(x^{2}+y^{2})$ 
>>- **(c)**
>>	1. $\beta(t)=\phi(0,t)=(t,0,2t)$.
>>	2. $\beta'(t)=\phi_t(0,t)$ y $\beta''(t)=0$.
>>	3. Entonces la curvatura normal es $0$, y $\beta$ es línea asintótica.
>>- **(d)**
>>	1. $\alpha(s)=\phi(s,1)=(\cos s,\sin s,2)$.
>>	2. $\alpha'(s)=(-\sin s,\cos s,0)$, y $\|\alpha'(s)\|=1$. Es unitaria.
>>	3. Normal orientado sobre $\alpha$:
>>	$$
>>	n(s)=\frac{\phi_s\times\phi_t}{\sqrt5}(s,1)=\frac{(2\cos s,2\sin s,-1)}{\sqrt5}.
>>	$$
>>	4. Marco móvil (Darboux): $$u=\alpha'=(-\sin s,\cos s,0),\quad v=n\times T=\frac{(\cos s,\sin s,2)}{\sqrt5}$$
>>	5. Como $\alpha$ es unitaria: $$k_{g,\alpha }(t)=\langle \alpha '',v\rangle=\frac{-\cos^2 s-\sin^2 s}{\sqrt5}=-\frac1{\sqrt5}$$ notar $\kappa_g$ es constante

---

>[!Exercise] Ejercicio 3
>Sean $\alpha,\beta:(-\delta,\delta)\to M$ curvas unitarias con $\alpha(0)=\beta(0)=p$, y $\angle(\alpha'(0),\beta'(0))=\pi/6$.  
>Mostrar que si ambas son líneas de curvatura, entonces $p$ es umbílico.
>>[!Proof]-
>>1. Sea $v=\alpha'(0)$, $w=\beta'(0)$. Como $\alpha,\beta$ son líneas de curvatura, $v$ y $w$ son direcciones principales en $p$, o sea autovectores de $A_p$.
>>2. Supongamos el punto no es umbilico, entonces tiene solo dos direcciones principales
>>3. Pero entonces como hay un angulo entre ellos no pueden ser la misma direccion principal
>>4. Luego como sabemos que las direcciones principales hacen una basa ortonormal sucede que su angulo tiene que ser $\pi$.
>>5. Contradicción. Por tanto $p$ es umbílico.

---

>[!Exercise] Ejercicio 4
>Sean $M,N$ superficies regulares. Sea $F$ una transformación euclídea de $\mathbb R^3$ con $F(M)\subset N$.  
>Mostrar que $F|_M:M\to N$ es una isometría local.
>>[!Proof]-
>>1. Como $F$ es euclídea, $F(x)=Cx+c$ con $C\in O(3)$.
>>2. Sea $f=F|_M$ entonces sabemos que $df_{p}=dF_{p}|_{T_{p}S}$. 
>>3. Entonces para $p\in M$, $v,w\in T_pM$: $$df_p(v)=dF_p|_{T_{p}S}(v)=Cv$$
>>4. Como $C$ es ortogonal: $$\langle df_p(v),df_p(w)\rangle=\langle Cv,Cw\rangle=\langle v,w\rangle.$$
>>5. Luego $df_p$ preserva el producto interno para todo $p$, o sea preserva la primera forma fundamental.
>>6. Por definición, $f$ es una isometría local.

---
## Parte Teorica

>[!Exercise] Ejercicio 5
>Sea $\alpha:[a,b]\to\mathbb R^3$ regular (no necesariamente unitaria).  
>Definir $\kappa_\alpha$ y probar
>$$
>\kappa_\alpha=\frac{\|\alpha'\times\alpha''\|}{\|\alpha'\|^3}.
>$$
>>[!Proof]-
>>1. Sea $\sigma(t)=\int_a^t\|\alpha'(u)\|\,du$ y $\beta=\alpha\circ\sigma^{-1}$, reparametrización por longitud de arco.
>>2. Definición:
>>$$
>>\kappa_\alpha(t):=\|\beta''(\sigma(t))\|.
>>$$
>>3. Como $\alpha(t)=\beta(\sigma(t))$:
>>$$
>>\alpha'=\beta'\sigma',\qquad
>>\alpha''=\beta''(\sigma')^2+\beta'\sigma''.
>>$$
>>4. Producto vectorial:
>>$$
>>\alpha'\times\alpha''=(\sigma')^3(\beta'\times\beta'').
>>$$
>>5. Tomando norma:
>>$$
>>\|\alpha'\times\alpha''\|=(\sigma')^3\|\beta'\times\beta''\|.
>>$$
>>6. Como $\beta$ es unitaria, $\beta'\perp\beta''$, $\|\beta'\|=1$, y
>>$$
>>\|\beta'\times\beta''\|=\|\beta''\|=\kappa_\alpha(t).
>>$$
>>7. Además $\sigma'=\|\alpha'\|$. Entonces
>>$$
>>\kappa_\alpha(t)=\frac{\|\alpha'(t)\times\alpha''(t)\|}{\|\alpha'(t)\|^3}.
>>$$

---

>[!Exercise] Ejercicio 6
>Sea $S$ superficie regular, $f:S\to\mathbb R^n$ suave y $p\in S$.  
>Escribir la definición de $df_p:T_pS\to\mathbb R^n$ y mostrar que está bien definida.
>>[!Proof]-
>>1. Definición: para $v\in T_pS$, tomar $\alpha:(-\varepsilon,\varepsilon)\to S$ con $\alpha(0)=p$, $\alpha'(0)=v$, y definir
>>$$
>>df_p(v):=(f\circ\alpha)'(0).
>>$$
>>2. Falta ver que no depende de la curva elegida.
>>3. Sean $\alpha,\beta$ con $\alpha(0)=\beta(0)=p$, $\alpha'(0)=\beta'(0)=v$.
>>4. Tomo carta $x:U\subset\mathbb R^2\to S$, $p=x(q)$, y escribo
>>$$
>>\alpha=x\circ u,\qquad \beta=x\circ w,\qquad u(0)=w(0)=q.
>>$$
>>5. Entonces
>>$$
>>\alpha'(0)=dx_q(u'(0)),\qquad \beta'(0)=dx_q(w'(0)).
>>$$
>>Como $dx_q$ es inyectiva, de $\alpha'(0)=\beta'(0)$ se sigue $u'(0)=w'(0)$.
>>6. Por regla de la cadena:
>>$$
>>(f\circ\alpha)'(0)=d(f\circ x)_q(u'(0)),\qquad
>>(f\circ\beta)'(0)=d(f\circ x)_q(w'(0)).
>>$$
>>7. Como $u'(0)=w'(0)$, ambos valores coinciden.  
>>8. Luego $df_p$ está bien definida.

---

>[!Exercise] Ejercicio 7
>a) Definir isometría local $f:M\to N$.  
>b) Probar que si $f$ es isometría local, entonces $df_p:T_pM\to T_{f(p)}N$ es isometría lineal para todo $p\in M$. Deducir que toda isometría local es difeomorfismo local.
>>[!Proof]-
>>- **(a)**
>>	1. $f:M\to N$ suave es isometría local si para todo $p\in M$ existe un entorno $U\ni p$ tal que:
>>	2. $f|_U:U\to f(U)$ es difeomorfismo.
>>	3. Preserva el producto interno:
>>	$$
>>	\langle df_q(v),df_q(w)\rangle_{f(q)}=\langle v,w\rangle_q
>>	$$
>>	para todo $q\in U$, $v,w\in T_qM$.
>>- **(b)**
>>	1. Si $f$ es isometría local, la igualdad anterior vale en particular en $q=p$:
>>	$$
>>	\langle df_p(v),df_p(w)\rangle=\langle v,w\rangle.
>>	$$
>>	2. Entonces $df_p$ es una isometría lineal.
>>	3. En dimensión 2, una isometría lineal $T_pM\to T_{f(p)}N$ es isomorfismo.
>>	4. Por Teorema de la Función Inversa, $f$ es difeomorfismo local.

---

>[!Exercise] Ejercicio 8
>Sea $M$ superficie regular conexa con todos sus puntos umbílicos.  
>Se sabe que la curvatura principal $k$ es constante en cada abierto coordenado conexo. Probar que si $k=0$, entonces cada abierto coordenado conexo está contenido en un plano.
>>[!Proof]-
>>1. Sea $U\subset M$ abierto coordenado conexo con $k=0$ constante.
>>2. Como todos los puntos son umbílicos, el operador de forma cumple
>>$$
>>S_p=k\,\mathrm{Id}=0,\qquad \forall p\in U.
>>$$
>>3. Por ecuación de Weingarten:
>>$$
>>dn(X)=-S(X)=0
>>$$
>>para todo campo tangente $X$ en $U$.
>>4. Luego la normal unitaria $n$ es constante en $U$: $n\equiv n_0$.
>>5. Sea $x:V\to U$ una parametrización y considere
>>$$
>>h(u,v)=\langle x(u,v),n_0\rangle.
>>$$
>>6. Derivando:
>>$$
>>h_u=\langle x_u,n_0\rangle=0,\qquad h_v=\langle x_v,n_0\rangle=0,
>>$$
>>porque $x_u,x_v$ son tangentes y $n_0$ es normal.
>>7. Entonces $h$ es constante en $V$, digamos $h\equiv c$.
>>8. Por lo tanto
>>$$
>>U\subset\{q\in\mathbb R^3:\ \langle q,n_0\rangle=c\},
>>$$
>>que es un plano. Queda probado.
