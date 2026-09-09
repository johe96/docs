import numpy as np
import matplotlib.pyplot as plt

def euler(f, tspan, u0, dt):
    interval = round((tspan[1]-tspan[0]) / dt)
    tvec = np.linspace(tspan[0], tspan[1], interval + 1)
    u = np.zeros((len(tvec), len(u0)))
    i = 0
    u[i, :] = u0
    for t in tvec[0 : len(tvec) - 1]:
        K1 = f(t, u[i, :])
        u[i + 1, :] = u[i, :] + dt * K1
    return tvec, u

t, u = euler(odefun, tspan, u0, dt)
plt.plot(t, u[:, 0], '-b')
plt.plot(t, u[:, 1], '-m')
plt.show()
