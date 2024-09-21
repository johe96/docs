---
title: Typed Languages
layout: page
parent: Quirks
---
# What are Weakly/Strongly typed languages?

For the unknowing, here's a quick comprehensive definition of types:
- Static: types checked at compile time
- Dynamic: types checked at runtime
- Strong: ``34 + "35" => error``
- Weak: ``34 + "35" === 69``

## Python?
Python is Dynamic and Strong
```python
35 + "34"
Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
TypeError: unsupported operand types(s) for +: 'int' and 'str'
```
## Lua?
Lua is ``Dynamic`` and ``Weak``
```lua
35 + '34'
69
```
## C?
C is ``Static`` and ``Weak``
```c
#include <stdio.h>
int main(void){
    float x = 34.0f;
    int y = 35;
    printf("%f\n", x + y);
    return 0;
}

// Output == 69.000000
```

# Rust?
Rust is ``Static`` and ``Strong``
```rust
fn main() {
    println!("{}", 34 + 35.0);
}
output == no implementation for `{integer} + {float}`
```

