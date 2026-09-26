import numpy as np
import matplotlib.pyplot as plt

# Curva gamma(t) = t + i t sin(1/t), con gamma(0) = 0.
t = np.linspace(1e-5, 1, 200000)
x = t
y = t * np.sin(1 / t)

fig, ax = plt.subplots(figsize=(8, 8))
ax.plot(x, y, color="royalblue", linewidth=0.8, label=r"$\gamma(t)=t+i\,t\sin(1/t)$")
ax.plot(0, 0, "ko", markersize=4)
ax.set_xlabel(r"$\operatorname{Re}(\gamma(t))=t$")
ax.set_ylabel(r"$\operatorname{Im}(\gamma(t))=t\sin(1/t)$")
ax.set_title(r"Camino $\gamma(t)=t+i\,t\sin(1/t)$")
ax.set_aspect("equal", adjustable="box")
ax.grid(True, alpha=0.3)
ax.legend()
fig.tight_layout()
fig.savefig("Misc/grafico-ej2.png", dpi=200)
plt.close(fig)

# Para t != 0, gamma'(t) = 1 + i(sin(1/t) - cos(1/t)/t).
dgamma_real = np.ones_like(t)
dgamma_imag = np.sin(1 / t) - np.cos(1 / t) / t

fig, (ax_real, ax_imag) = plt.subplots(2, 1, figsize=(10, 8), sharex=True)
ax_real.plot(t, dgamma_real, color="darkorange", linewidth=0.8)
ax_real.set_ylabel(r"$\operatorname{Re}(\gamma'(t))$")
ax_real.set_title(r"Derivada para $t>0$: $\gamma'(t)=1+i(\sin(1/t)-\cos(1/t)/t)$")
ax_real.grid(True, alpha=0.3)

ax_imag.plot(t, dgamma_imag, color="crimson", linewidth=0.5)
ax_imag.set_xlabel(r"$t$")
ax_imag.set_ylabel(r"$\operatorname{Im}(\gamma'(t))$")
ax_imag.grid(True, alpha=0.3)
ax_imag.set_ylim(-500, 500)

fig.tight_layout()
fig.savefig("Misc/grafico-derivada-ej2.png", dpi=200)
plt.close(fig)

# Imagen de la derivada como camino en el plano complejo: t -> gamma'(t).
t_hod = np.linspace(1e-3, 1, 300000)
hod_x = np.ones_like(t_hod)
hod_y = np.sin(1 / t_hod) - np.cos(1 / t_hod) / t_hod

fig, ax = plt.subplots(figsize=(7, 9))
ax.plot(hod_x, hod_y, color="crimson", linewidth=0.35)
ax.set_xlabel(r"$\operatorname{Re}(\gamma'(t))$")
ax.set_ylabel(r"$\operatorname{Im}(\gamma'(t))$")
ax.set_title(r"Imagen de $t\mapsto\gamma'(t)$ en el plano complejo")
ax.grid(True, alpha=0.3)
ax.set_xlim(0.9, 1.1)
fig.tight_layout()
fig.savefig("Misc/imagen-derivada-ej2.png", dpi=200)
plt.show()
