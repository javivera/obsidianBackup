>[!Definition] Topological manifold
>Let $M$ be a topological space. We say that $M$ is a **topological manifold of dimension $n$** (or **topological $n$-manifold**) if it satisfies:
>- (**Hausdorff**) For every pair of distinct points $p,q\in M$, there exist disjoint open sets $U,V\subseteq M$ such that $p\in U$ and $q\in V$.
>- (**Second-countable**) There exists a countable basis for the topology of $M$.
>- (**Locally Euclidean of dimension $n$**) For every $p\in M$, there exists a neighborhood of $p$ that is homeomorphic to an open subset of $\mathbb{R}^n$. More explicitly, for each $p\in M$ there exist:
>	1. An open set $U\subseteq M$ with $p\in U$,
>	2. an open set $\widehat U\subseteq\mathbb{R}^n$,
>	3. a homeomorphism $\varphi:U\to\widehat U$.

^038231

>[!Definition] Coordinate chart
>Let $M$ be a topological $n$-manifold. A **coordinate chart** (or just a **chart**) on $M$ is a pair $(U,\varphi)$, where $U$ is an open subset of $M$ and $\varphi:U\to\widehat U$ is a homeomorphism from $U$ to an open subset $\widehat U=\varphi(U)\subseteq\mathbb{R}^n$. By definition of a topological manifold, each point $p\in M$ is contained in the domain of some chart $(U,\varphi)$. If $\varphi(p)=0$, we say that the chart is centered at $p$. If $(U,\varphi)$ is any chart whose domain contains $p$, it is easy to obtain a new chart centered at $p$ by subtracting the constant vector $\varphi(p)$.
>Given a chart $(U,\varphi)$, we call the set $U$ a **coordinate domain**, or a **coordinate neighborhood** of each of its points. If, in addition, $\varphi(U)$ is an open ball in $\mathbb{R}^n$, then $U$ is called a **coordinate ball**; if $\varphi(U)$ is an open cube, $U$ is a **coordinate cube**. The map $\varphi$ is called a (local) **coordinate map**, and the component functions $(x^1,\ldots,x^n)$ of $\varphi$, defined by $\varphi(p)=(x^1(p),\ldots,x^n(p))$, are called **local coordinates** on $U$. We sometimes write things such as "$(U,\varphi)$ is a chart containing $p$" as shorthand for "$(U,\varphi)$ is a chart whose domain $U$ contains $p$". If we wish to emphasize the coordinate functions $(x^1,\ldots,x^n)$ instead of the coordinate map $\varphi$, we sometimes denote the chart by $(U,(x^1,\ldots,x^n))$ or $(U,(x^i))$.

>[!Example]- Graphs of continuous functions
>Let $U\subseteq\mathbb{R}^n$ be open, and let $f:U\to\mathbb{R}^k$ be continuous. The **graph** of $f$ is the subset of $\mathbb{R}^n\times\mathbb{R}^k$ defined by
>
>$$\Gamma(f)=\{(x,y)\in\mathbb{R}^n\times\mathbb{R}^k:\ x\in U\text{ and }y=f(x)\},$$
>
>with the subspace topology. Let $\pi_1:\mathbb{R}^n\times\mathbb{R}^k\to\mathbb{R}^n$ denote the projection onto the first factor, and let $\varphi: \Gamma(f)\to U$ be the restriction of $\pi_1$ to $\Gamma(f)$:
>
>$$\varphi(x,y)=x,\qquad (x,y)\in\Gamma(f).$$
>
>Because $\varphi$ is the restriction of a continuous map, it is continuous; and it is a homeomorphism with continuous inverse $\varphi^{-1}(x)=(x,f(x))$. Thus $\Gamma(f)$ is a topological manifold of dimension $n$, homeomorphic to $U$ itself. The pair $(\Gamma(f),\varphi)$ is a global coordinate chart, called **graph coordinates**. The same observation applies to any subset of $\mathbb{R}^{n+k}$ defined by setting any $k$ coordinates equal to a continuous function of the other $n$, which vary over an open subset of $\mathbb{R}^n$.
>

>[!Example]- Spheres
>For each integer $n\ge 0$, the unit $n$-sphere $\mathbb{S}^n$ is Hausdorff and second-countable as a topological subspace of $\mathbb{R}^{n+1}$. To show it is locally Euclidean, for each index $i=1,\ldots,n+1$ let $U_i^+$ denote the subset of $\mathbb{R}^{n+1}$ where the $i$th coordinate is positive:
>
>$$U_i^+=\{(x^1,\ldots,x^{n+1})\in\mathbb{R}^{n+1}: x^i>0\}.$$
>
>Similarly, let $U_i^- = \{x\in\mathbb{R}^{n+1}: x^i<0\}$. Let $f:\mathbb{B}^n\to\mathbb{R}$ be the continuous function
>
>$$f(u)=\sqrt{1-\lVert u\rVert^2},$$
>
>where $\mathbb{B}^n$ denotes the open unit ball in $\mathbb{R}^n$. Then for each $i=1,\ldots,n+1$, it is easy to check that $U_i^+\cap \mathbb{S}^n$ is the graph of the function
>
>$$x^i = f(x^1,\ldots,\widehat{x^i},\ldots,x^{n+1}),$$
>
>where the hat indicates that $x^i$ is omitted. Similarly, $U_i^-\cap \mathbb{S}^n$ is the graph of
>
>$$x^i = -\,f(x^1,\ldots,\widehat{x^i},\ldots,x^{n+1}).$$
>
>Thus, each subset $U_i^{\pm}\cap \mathbb{S}^n$ is locally Euclidean of dimension $n$, and the maps
>
>$$\varphi_i^{\pm}: U_i^{\pm}\cap S^n\to\mathbb{B}^n,\qquad \varphi_i^{\pm}(x^1,\ldots,x^{n+1})=(x^1,\ldots,\widehat{x^i},\ldots,x^{n+1}),$$
>
>are graph coordinates for $\mathbb{S}^n$.
>Since each point of $\mathbb{S}^{n}$ is in the domain of at least one of these $2n+2$ charts, $\mathbb{S}^{n}$ is a topological $n$-manifold.

>[!Example]- Projective spaces
>The **$n$-dimensional real projective space** $\mathbb{RP}^n$ (sometimes written $\mathbf{P}^n$) is the set of 1‑dimensional linear subspaces of $\mathbb{R}^{n+1}$, with the quotient topology determined by the natural map $\pi:\mathbb{R}^{n+1}\setminus\{0\}\to\mathbb{RP}^n$ sending a nonzero vector $x\in\mathbb{R}^{n+1}$ to the line $[x]$ spanned by $x$. For each $i=1,\ldots,n+1$, let $\widehat U_i\subset\mathbb{R}^{n+1}\setminus\{0\}$ be the set where $x^i\ne 0$, and let $U_i=\pi(\widehat U_i)\subset\mathbb{RP}^n$. Since $\widehat U_i$ is saturated, $U_i$ is open and $\pi\vert_{\widehat U_i}:\widehat U_i\to U_i$ is a quotient map. Define a map $\varphi_i:U_i\to\mathbb{R}^n$ by
>
>$$\varphi_i\big([x^1,\ldots,x^{n+1}]\big)=\left(\frac{x^1}{x^i},\ldots,\frac{x^{i-1}}{x^i},\frac{x^{i+1}}{x^i},\ldots,\frac{x^{n+1}}{x^i}\right).$$
>
>This is well defined (scaling $x$ by a nonzero constant does not change the ratios) and $\varphi_i\circ\pi$ is continuous, so $\varphi_i$ is continuous by the characteristic property of quotient maps. In fact, $\varphi_i$ is a homeomorphism with inverse
>
>$$\varphi_i^{-1}(u^1,\ldots,u^n)=[u^1,\ldots,u^{i-1},1,u^i,\ldots,u^n].$$
>
>Geometrically, $\varphi_i([x])=u$ means $(u,1)$ is the point where the line $[x]$ intersects the affine hyperplane $x^i=1$. Because the sets $U_1,\ldots,U_{n+1}$ cover $\mathbb{RP}^n$, this shows $\mathbb{RP}^n$ is locally Euclidean of dimension $n$.
>Lets prove $\mathbb{RP}^n$ is Hausdorff, second-countable, and compact
>>[!Proof]-
>>Let $q=\pi|_{S^n}:S^n\to\mathbb{RP}^n$, where $S^n\subset\mathbb{R}^{n+1}$ is the unit sphere.
>>
>>- **Surjectivity of $q$**: Given any line $[x]\in\mathbb{RP}^n$, pick $x\neq 0$ on that line. Then $\dfrac{x}{\|x\|}\in S^n$ and
>>
>>$$q\!\left(\frac{x}{\|x\|}\right)=[x],$$
>>
>>so $q$ is onto.
>>
>>- **Hausdorff**: We use the same projective relation $u\sim v\iff v=\lambda u$ ($\lambda\neq 0$), restricted to $S^n$. On $S^n$, each class is $\{u,-u\}$.  
>>If $[x]\neq [y]$, choose representatives $x,y\in S^n$; then $y\neq \pm x$. Set
>>
>>$$\delta=\min\{d(x,y),d(x,-y),d(-x,y),d(-x,-y)\}>0,\qquad r=\delta/3,$$
>>
>>and define
>>
>>$$A_x=B_r(x)\cup B_r(-x),\qquad A_y=B_r(y)\cup B_r(-y).$$
>>
>>Each $A_\bullet$ is open in $S^n$, and it is saturated for the restricted relation because it is invariant under $u\mapsto -u$ (equivalently, $q^{-1}(q(A_\bullet))=A_\bullet$). Also $A_x\cap A_y=\varnothing$ by the choice of $r$.
>>
>>Since $q:S^n\to\mathbb{RP}^n$ is a quotient map, $q(A_x)$ and $q(A_y)$ are open in $\mathbb{RP}^n$, contain $[x]$ and $[y]$, and are disjoint. Hence $\mathbb{RP}^n$ is Hausdorff.
>>
>>- **Second-countable**: Each $U_i$ is homeomorphic to $\mathbb{R}^n$ via $\varphi_i$, so each $U_i$ has a countable basis $\mathcal{B}_i$. Since $\mathbb{RP}^n=\bigcup_{i=1}^{n+1}U_i$ and there are finitely many $i$, the union $\mathcal{B}=\bigcup_{i=1}^{n+1}\mathcal{B}_i$ is countable. If $O\subset\mathbb{RP}^n$ is open and $p\in O$, pick $i$ with $p\in U_i$; then $O\cap U_i$ is open in $U_i$, so some $B\in\mathcal{B}_i$ satisfies $p\in B\subset O\cap U_i\subset O$. Thus $\mathcal{B}$ is a countable basis of $\mathbb{RP}^n$.
>>
>>- **Compact**: $S^n$ is compact, $q$ is continuous and surjective, so $\mathbb{RP}^n=q(S^n)$ is compact.
>>
>>Therefore $\mathbb{RP}^n$ is Hausdorff, second-countable, and locally Euclidean of dimension $n$; hence it is a topological $n$-manifold. In addition, it is compact.

>[!Example]- Product manifolds
>Suppose $M_1,\ldots,M_k$ are topological manifolds of dimensions $n_1,\ldots,n_k$, respectively. The product space $M_1\times\cdots\times M_k$ is Hausdorff and second-countable [[Geometría Superiór - Apunte Teórico#^eaa4f0]]; to check it is locally Euclidean of dimension $n_1+\cdots+n_k$, fix $(p_1,\ldots,p_k)\in M_1\times\cdots\times M_k$ and choose charts $(U_i,\varphi_i)$ of each $M_i$ with $p_i\in U_i$. The product map
>
>$$\varphi_1\times\cdots\times\varphi_k:\ U_1\times\cdots\times U_k\longrightarrow\mathbb{R}^{n_1+\cdots+n_k}$$
>
>is a homeomorphism onto its image, which is a product open subset of $\mathbb{R}^{n_1+\cdots+n_k}$. Thus $M_1\times\cdots\times M_k$ is a topological manifold of dimension $n_1+\cdots+n_k$, with charts of the form $(U_1\times\cdots\times U_k,\ \varphi_1\times\cdots\times\varphi_k)$.

>[!Example]- Tori
>For a positive integer $n$, the **$n$-torus** (plural: tori) is the product space $T^n=S^1\times\cdots\times S^1$ ($n$ copies). By the product-manifold discussion above, $T^n$ is a topological $n$-manifold. (The $2$-torus $T^2$ is usually called simply **the torus**.)
>

>[!Lemma]
>Every topological manifold has a countable basis of precompact coordinate balls.
>>[!Proof]-
>>1. Let $M$ be a [[Geometría Superiór - Apunte Teórico#^038231]]. First we consider the special case in which $M$ can be covered by a single chart. Suppose $\varphi:M\to\widehat U\subseteq\mathbb{R}^n$ is a global coordinate map
>>2. Let $\mathcal{B}$ be the collection of all open balls $B_r(x)\subseteq\mathbb{R}^n$ such that $r$ is rational, $x$ has rational coordinates, and $B_{r'}(x)\subseteq\widehat U$ for some $r'>r$. 
>>3. Each such ball is precompact in $\widehat U$, and it is easy to check that $\mathcal{B}$ is a countable basis for the topology of $\widehat U$.
>>4. Because $\varphi$ is a homeomorphism, it follows that the collection of sets of the form $\varphi^{-1}(B)$ for $B\in\mathcal{B}$ is a countable basis for the topology of $M$, consisting of precompact coordinate balls, with the restrictions of $\varphi$ as coordinate maps.
>>5. Now let $M$ be an arbitrary $n$-manifold. By definition, each point of $M$ is in the domain of a chart. Because every open cover of a second-countable space has a countable subcover (Proposition A.16), $M$ is covered by countably many charts $\{(U_i,\varphi_i)\}$. By the argument in the preceding paragraph, each coordinate domain $U_i$ has a countable basis of coordinate balls that are precompact in $U_i$, and the union of all these countable bases is a countable basis for the topology of $M$. If $V\subseteq U_i$ is one of these balls, then the closure of $V$ in $U_i$ is compact, and because $M$ is Hausdorff, it is closed in $M$. It follows that the closure of $V$ in $M$ is the same as its closure in $U_i$, so $V$ is precompact in $M$ as well. $\blacksquare$
## Appendix

>[!Proposition] Properties of the Product Topology (A.23)
>Suppose $X_1,\ldots,X_k$ are topological spaces, and let $X_1\times\cdots\times X_k$ be their product space.
>
>(a) (**Characteristic property**) If $B$ is a topological space, a map $F:B\to X_1\times\cdots\times X_k$ is continuous if and only if each component map
>
>$$F_i=\pi_i\circ F:B\to X_i$$
>
>is continuous.
>
>(b) The product topology is the unique topology on $X_1\times\cdots\times X_k$ for which the characteristic property in (a) holds.
>
>(c) Each projection map $\pi_i:X_1\times\cdots\times X_k\to X_i$ is continuous.
>
>(d) Given continuous maps $F_i:X_i\to Y_i$ for $i=1,\ldots,k$, the product map
>
>$$F_1\times\cdots\times F_k:X_1\times\cdots\times X_k\to Y_1\times\cdots\times Y_k,$$
>
>defined by
>
>$$\left(F_1\times\cdots\times F_k\right)(x_1,\ldots,x_k)=\left(F_1(x_1),\ldots,F_k(x_k)\right),$$
>
>is continuous.
>
>(e) If $S_i\subseteq X_i$ is a subspace for each $i=1,\ldots,k$, then the product topology on $S_1\times\cdots\times S_k$ agrees with the subspace topology inherited from $X_1\times\cdots\times X_k$.
>
>(f) For any $i\in\{1,\ldots,k\}$ and any fixed choices $a_j\in X_j$ for $j\neq i$, the map
>
>$$x\longmapsto (a_1,\ldots,a_{i-1},x,a_{i+1},\ldots,a_k)$$
>
>is a topological embedding of $X_i$ into $X_1\times\cdots\times X_k$.
>
>(g) If $\mathcal{B}_i$ is a basis for the topology of $X_i$ for each $i=1,\ldots,k$, then
>
>$$\mathcal{B}=\{B_1\times\cdots\times B_k:\ B_i\in\mathcal{B}_i\}$$
>
>is a basis for the topology of $X_1\times\cdots\times X_k$.
>
>(h) Every finite product of Hausdorff spaces is Hausdorff.
>
>(i) Every finite product of first-countable spaces is first-countable.
>
>(j) Every finite product of second-countable spaces is second-countable.
>

^eaa4f0
