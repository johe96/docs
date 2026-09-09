ode solver
```
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

def ode(t,y):
    yder=np.zeros(2)
    yder [0]=y[1]
    yder [1]=-4*y[1]-3*y[0]
    return yder


# Python solver
y0=[0,2]
sol = solve_ivp(ode, [0,1], y0)
plt.plot(sol.t,sol.y[0],'o-r')
plt.plot(sol.t,sol.y[1],'*-b')

# show figure
plt.title("y''+4y+3y=0")
plt.xlabel(r"Time, $t$ [s]")
plt.ylabel(r"Solution, $y(t)$")
plt.legend(fontsize=10)
plt.show()
```

for euler forward

```
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

```
