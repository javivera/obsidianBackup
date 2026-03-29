# Q:
Check Examenes/GD - Examen Final.md exercise 2 and tell me what you think of my solutions

---

# A:
Here’s a detailed review of your solutions to Exercise 2.

Overall, your approach and results are mostly correct, with some places where clarity or a small correction will improve the write-up. I’ll go part by part.


- (a) Show that $$\psi: U \to \mathbb{R}^3,\quad \psi(u, v) = \big(e^{\sqrt{u}},\, v,\, u\big)$$ is a coordinate system on $$M = \{(x,y,z) : z = (\log x)^2,\ x>0\}.$$

  What you did:
  1) You correctly checked $$f(e^{\sqrt{u}}, v) = (\log e^{\sqrt{u}})^2 = (\sqrt{u})^2 = u,$$ hence $$\psi(u,v) \in M.$$
  2) You wrote $$\phi(x,y,z) = ((\log x)^2, y)$$ as an inverse candidate and noted it’s inverse to \psi (on $$x>0$$). That’s correct: $$\phi\circ\psi(u,v) = (u,v),\quad \psi\circ\phi(x,y,z) = (x,y,(\log x)^2) = (x,y,z)$$ for points on $$M.$$
  3) You computed $$\psi_u = \Big(\frac{e^{\sqrt{u}}}{2\sqrt{u}},\, 0,\, 1\Big),\quad \psi_v = (0,1,0)$$ and concluded they are linearly independent.

  Comments and fixes:
  - Domain subtlety: $$\psi$$ is defined on $$U = \{(u,v): u>0\}$$. At any $$u>0$$, $$\psi_u$$ is well-defined and finite; as $$u\to 0^+$$, the term $$\frac{1}{\sqrt{u}}$$ blows up, but the problem’s $$U$$ excludes $$u=0$$, so you’re fine. It may help to state explicitly that $$u>0$$ ensures smoothness and nondegeneracy.
  - Linear independence is clear: $$\psi_v\neq 0$$ and $$\psi_u$$ has nonzero third component, so $$\psi_u,\psi_v$$ are LI everywhere in $$U.$$
  - Conclusion is correct: $$\psi$$ is a regular parametrization that is a diffeomorphism onto $$M$$ (indeed a global chart), so it’s a valid coordinate system.

  Verdict (a): Correct. Just add a brief note on smoothness for $$u>0$$ and the global inverse on $$M.$$


- (b) Compute Gaussian curvature $$K$$ and mean curvature $$H$$ at $$(1,0,0).$$

  Your method: You used the graph parametrization $$\varphi(x,y)=(x,y,f(x,y))$$ with $$f(x,y)=(\log x)^2,$$ computed partials, used the standard unit normal for graphs $$n=\frac{(-f_x,-f_y,1)}{\sqrt{1+f_x^2+f_y^2}}$$, differentiated to get $$n_x,n_y,$$ assembled the shape operator $$S\ (\equiv -dn)$$, and then read off eigenvalues to get $$K$$ and $$H.$$

  Checks:
  - Derivatives: $$f_x=\frac{2\log x}{x},\ f_y=0,\ f_{xx}=\frac{2(1-\log x)}{x^2},\ f_{xy}=0,\ f_{yy}=0$$ are correct.
  - At $$(1,0):$$ $$f_x=0,\ f_y=0,\ f_{xx}=2.$$
  - Your given general expressions for $$n_x,n_y$$ are acceptable (they come from differentiating the normal of a graph). Evaluating at $$(1,0)$$ (where $$f_x=f_y=0$$ so denominators are $$1$$) yields $$n_x(1,0)=(-2,0,0),\ n_y(1,0)=(0,0,0),$$ which matches what you wrote.
  - Important sign convention: The Weingarten equation is $$dn = -S$$, so if $$n_x=(-2,0,0)$$ corresponds to $$dn(\varphi_x)$$, then $$S(\varphi_x) = -n_x = (2,0,0)$$ projected to the tangent basis. In the graph basis $$\{\varphi_x,\varphi_y\}$$ at the point, since $$\varphi_x=(1,0,0),\ \varphi_y=(0,1,0),$$ the matrix of $$S$$ in this basis is $$\begin{pmatrix}2&0\\0&0\end{pmatrix}$$ as you wrote.

  Curvatures:
  - $$K = \det S = 2\cdot 0 - 0^2 = 0.$$
  - $$H = \tfrac{1}{2}\operatorname{tr} S = \tfrac{1}{2}(2+0) = 1.$$

  Verdict (b): Correct. Your computation is clean and the values $$K(1,0,0)=0,\ H(1,0,0)=1$$ are right. If you want, you could add a one-line reminder that $$S=-dn$$ to justify the sign in step 8.


- (c) Show $$F(x,y,z)=\Big(\tfrac{1}{x},\ y,\ z\Big)$$ maps $$M\to M$$, the restriction $$F|_M$$ is a diffeomorphism, and decide whether it’s an isometry of $$M.$$

  Mapping: You correctly observed $$z=(\log x)^2=(\log(1/x))^2$$, so $$F(M)\subset M.$$

  Diffeomorphism: $$F$$ is smooth on $$A=\{x>0\}$$ and its inverse is $$F^{-1}(x,y,z)=(1/x, y, z),$$ i.e., $$F=F^{-1}$$ on $$A.$$
  The restriction to $$M$$ is smooth and bijective with smooth inverse, hence a diffeomorphism.

  Isometry question: Your strategy is to check whether $$dF$$ preserves norms of tangent vectors at the point in question. This is the right idea, but there are some issues to correct:

  - You wrote $$dF_{(1,0,0)}=\begin{pmatrix} -\frac{1}{2} & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{pmatrix}.$$
    This is incorrect. The derivative of $$x\mapsto 1/x$$ at $$x=1$$ is $$-1,$$ not $$-\tfrac{1}{2}.$$
    The correct Jacobian of $$F$$ at $$(1,0,0)$$ is
    $$dF_{(1,0,0)} = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

  - Tangent basis at $$(1,0,0).$$ Using the graph parametrization $$\varphi(u,v)=(u,v,f(u,v)),$$ we have
    $$\varphi_u(1,0)=(1,0,0),\quad \varphi_v(1,0)=(0,1,0),$$
    because $$f_u(1,0)=\frac{2\log 1}{1}=0$$ and $$f_v\equiv 0.$$
    Your line “$$\varphi_u(u,v)=\left(1, v, \frac{2\log u}{u}\right)$$” is a mistake: $$\varphi_u(u,v)=(1,0, f_u(u,v))=(1,0,\frac{2\log u}{u}).$$ The middle component should be $$0,$$ not $$v.$$

  - Norm preservation: At the point $$(1,0,0),$$ the first fundamental form is the Euclidean metric inherited from \mathbb{R}^3, but restricted to the tangent plane. With the tangent basis above, the metric is the identity at this point (since $$f_u=f_v=0$$), so checking whether $$\|dF(\varphi_u)\|$$ equals $$\|\varphi_u\|$$ and similarly for $$\varphi_v$$ is valid.

    Using the correct $$dF_{(1,0,0)}$$ and tangent vectors:
    - $$dF_{(1,0,0)}\,\varphi_u(1,0) = dF_{(1,0,0)}\,(1,0,0) = (-1,0,0),$$ whose Euclidean norm is $$1,$$ same as $$\|\varphi_u(1,0)\|=1.$$
    - $$dF_{(1,0,0)}\,\varphi_v(1,0) = dF_{(1,0,0)}\,(0,1,0) = (0,1,0),$$ norm $$1,$$ same as $$\|\varphi_v(1,0)\|=1.$$

    So your specific numerical argument “norm becomes $$\tfrac{1}{2}$$” was based on the incorrect Jacobian entry and the incorrect tangent vector component. With the correct entries, at $$(1,0,0)$$ the linear map actually preserves the norms of these basis vectors.

  However, to decide isometry, we must check whether $$F|_M$$ preserves the first fundamental form on $$M$$ at all directions, not just at a single point or basis vectors, and not just in the ambient Euclidean norm, but the induced metric pulled back by $$F.$$

  A more robust check: Use the graph chart $$\varphi(u,v)=(u,v,f(u,v)).$$ Consider the induced metric $$I(u,v) = \begin{pmatrix} E & F \\ F & G \end{pmatrix}$$ with $$E=1+f_u^2,\ F=f_u f_v,\ G=1+f_v^2.$$ For our $$f,$$ $$f_v\equiv 0,$$ so $$I(u,v)=\begin{pmatrix} 1+f_u^2 & 0 \\ 0 & 1 \end{pmatrix}.$$

  The map $$F$$ acts on the base variables as $$x\mapsto 1/x,\ y\mapsto y.$$ In the chart $$\phi(x,y,z)=((\log x)^2,y),$$ the induced action on parameters is $$u\mapsto u,\ v\mapsto v$$ (since $$u=(\log x)^2$$ is invariant under $$x\mapsto 1/x$$), i.e., $$F$$ leaves $$u,v$$ unchanged while flipping the ambient $$x$$-component’s sign in tangent directions.

  Compute the pullback metric under $$F|_M$$ in the chart: Since $$u,v$$ are fixed, the tangent vectors $$\varphi_u,\varphi_v$$ are mapped to
  $$dF(\varphi_u) = \big(-\frac{1}{u}\cdot \text{something at general }u\big)$$ but at a general point the exact formula involves $$x=e^{\sqrt{u}}$$; however the key is that $$F$$ acts by $$x\mapsto 1/x,$$ which multiplies the $$x$$-component of a tangent by $$-1/x^2$$ times the variation in $$x.$$

  The simplest global argument: On $$M$$, $$F$$ is the restriction of an ambient Euclidean isometry if and only if its ambient Jacobian is orthogonal. Here $$dF=\mathrm{diag}(-1,1,1)$$ everywhere on $$A,$$ which is orthogonal in \mathbb{R}^3 and hence an ambient isometry. But beware: $$x\mapsto 1/x$$ is not a linear map; the Jacobian is $$\mathrm{diag}(-1/x^2,1,1).$$ At $$(1,0,0)$$ it is $$\mathrm{diag}(-1,1,1),$$ but away from $$x=1$$, the scaling in the $$x$$-direction is $$1/x^2,$$ not unit. Therefore, $$F$$ is not an ambient isometry, and generally will not preserve the induced metric on $$M.$$

  Conclusion (c):
  - $$F(M)=M$$ and $$F|_M$$ is a diffeomorphism.
  - $$F|_M$$ is not an isometry of $$M$$ globally. Your conclusion was correct, but the specific numerical demonstration at $$(1,0,0)$$ needs correction: with the correct Jacobian and tangent vectors, norms of the simple basis vectors are preserved at that particular point. The failure of isometry is seen away from $$x=1,$$ because $$dF$$ scales the $$x$$-component by $$1/x^2,$$ thus the induced metric changes. A clean way to exhibit non-isometry is to compute the pullback of the first fundamental form under $$F$$ and see it differs from $$I$$ unless $$x=1.$$


Summary:
- (a) Correct.
- (b) Correct: $$K(1,0,0)=0,\ H(1,0,0)=1.$$
- (c) Mapping/diffeomorphism: correct. Isometry: conclusion correct (not an isometry), but the provided Jacobian and tangent vector had small errors; fix those and argue via the general Jacobian $$\mathrm{diag}(-1/x^2,1,1)$$ to show non-isometry away from $$x=1.$$
