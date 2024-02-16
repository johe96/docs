---
layout: page
title: .this
parent: Quirks
---

# .this

If you come from another programming language, then you are probably familiary with the idea that ``this`` is bound, where methods/functions defined in an object always has ``this`` referencing that object.

In JavaScript the ``this`` keyword is "free" and its value is evaluated at call-time. It does not depend on where the method was declared, but rather on what object is "before the dot".

This has both pros and cons obviously. On one hand, a function can be reused for different objects and on the other hand, the flexibility creates greater possibility for mistakes and errors.

## Summary
- Functions that are stored in object properties are called "methods".
- Methods allow objects to "act" like ``object.doSomething()``.
- Methods can reference the object as ``this``.

The value of ``this`` is defined at run-time.
- When a function is declared, it may use ``this``, but that ``this`` has no value until the function is called.
- A function can be copied between objects.
- When a function is called in the "method" syntax: ``object.method()``, the value of ``this`` during the call is ``object``.

Arrow functions are special as they do not have ``this``. When ``this`` is accessed inside an arrow function, it is taken from outside.