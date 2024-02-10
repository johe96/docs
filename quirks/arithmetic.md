---
title: Arithmetic
layout: page
parent: Quirks
nav_order: 2
---

# In most languages...

You can only perform additional subtraction on number types, taking it further. 
Restricitng only the same type such as an integer or float to be operated on together.

# A laizzes faire approach to arithmetic operations

we don't care about adding strings/characters to an int or vice versa
we can any two values we want to each other

do you want to add the value 10 to a string, you can. what about a TRUE + NULL? Yep no problem

[1,2,3] + 8 -> '1,2,38'

```JS
'1' + 1 = '2'
```

Not only that it's incredibly inconsistent, for example if I add a number to a string or vice versa, I get a string back. But if I subtract a number with a string, I get back a Number.
Worse yet if I add a minus number to a string, I get back a number again.

While this might feel like madness, there is actually some precedence ordering to this type coercion which the documentation does define.


