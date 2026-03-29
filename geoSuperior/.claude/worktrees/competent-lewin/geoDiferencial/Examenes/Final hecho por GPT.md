# 📘 Examen Final – Geometría Diferencial de Curvas y Superficies

**Duración:** 4 horas  

> [!Exercise] Curvatura normal y operador de forma
> Sea M ⊂ ℝ³ una superficie regular orientada, con normal n, y sea α:(−ε,ε)→M una curva de rapidez unitaria tal que α(0)=p.
> 1. (a) Defina la curvatura normal de α en p.  
> (b) Pruebe que ⟨α''(0),n(p)⟩=⟨A_p(α'(0)),α'(0)⟩, donde A_p es el operador de forma.
> 2. Sea v∈T_pM unitario. Explique por qué todas las curvas β en M de rapidez unitaria con β(0)=p y β'(0)=v tienen la misma curvatura normal en p.
> 3. Explique en qué sentido la curvatura normal mide el desprendimiento de la superficie respecto del plano tangente y por qué no es una noción intrínseca.

> [!Exercise] Fórmula de Euler y direcciones principales
> Sea p∈M y suponga que el operador de forma A_p tiene direcciones principales ortonormales X,Y con curvaturas principales k₁≥k₂.
> 1. Demuestre la fórmula de Euler: κ_{n,p}(cosθ X + sinθ Y)=k₁cos²θ+k₂sin²θ.
> 2. Deduzca que k₂≤κ_{n,p}(v)≤k₁ para todo v∈T_pM con ∥v∥=1.
> 3. Explique conceptualmente por qué las direcciones principales corresponden a las direcciones donde la superficie se curva más y menos.

> [!Exercise] Líneas asintóticas
> Sea α:I→M una curva de rapidez unitaria.
> 1. Defina: vector asintótico, dirección asintótica y línea asintótica.
> 2. Pruebe que si $\langle A_{\alpha (t)}(\alpha '(t)),\alpha '(t)\rangle =0$ para todo t, entonces α es una línea asintótica.
> 3. Muestre que si la trayectoria de una recta del espacio está contenida en M, entonces dicha recta es una línea asintótica.
> 4. Explique por qué la existencia de direcciones asintóticas implica que la curvatura gaussiana es nula o negativa.

> [!Exercise] El cilindro
> Considere el cilindro $C={(x,y,z)\in \mathbb{R}^{3}: x^{2}+y^{2}=r^{2}}$ con parametrización $\varphi(s,t)=(r \cos s, r \sin s, t)$.
> 1. Calcule la normal unitaria n.
> 2. Calcule $A_{\varphi(s,t)}(\varphi_s)$ y $A_{\varphi(s,t)}(\varphi_t)$.
> 3. Determine las curvaturas principales, la curvatura gaussiana y la curvatura media.
> 4. Determine todas las líneas de curvatura y todas las líneas asintóticas.
> 5. Explique por qué este ejemplo puede resolverse sin usar la segunda forma fundamental.

> [!Exercise] Isometrías y geodésicas
> Sea f:M→N una isometría local entre superficies regulares.
> 1. Explique por qué f es un difeomorfismo local.
> 2. Pruebe que si γ es una geodésica de M, entonces f∘γ es una geodésica de N.
> 3. Justifique por qué esta propiedad depende únicamente de la primera forma fundamental.

> [!Exercise] Superficies regladas
> 1. Defina superficie reglada.
> 2. Justifique por qué el plano, el cilindro y el helicoide son superficies regladas.
> 3. Explique por qué toda superficie reglada no cilíndrica satisface K≤0.
> 4. Relacione este hecho con la existencia de direcciones asintóticas.

> [!Exercise] Desarrollo conceptual
> Redacte un texto breve donde explique:
> - la diferencia entre curvatura normal y curvatura geodésica,
> - por qué la curvatura normal es extrínseca,
> - y por qué las geodésicas pueden interpretarse como rectas internas de la superficie.
