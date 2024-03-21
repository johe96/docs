---
title: Hoisting
layout: page
parent: Quirks
nav_order: 4
---

# What is Hoisting (pre to Scope)

Does your code suck? JavaScript variables edition.

Can you tell which of these code snippets are bad?

**Example A:** 
```js
console.log(a)
// Uncaught referenceError: a is not defined.
let a = 1;
```

**Example B:**
```js
console.log(a)
var a = 1;
```

Which one sucks?

It's example B even though A has an error.

The reason is because of hoisting. 
Variables with var gets hoisted to the top of the program which seems fine except that only the declaration gets hoisted and NOT the value itself.

```js
var a;
console.log(a)
a = 1;
```

This is will just print out "undefined" and is a nightmare to debug in a program if you don't pay attention to the hoisting.