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


