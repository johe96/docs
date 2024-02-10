---
title: Equality
layout: post
parent: Quirks
nav_order: 1
---

# Common operation

Equality is a binary operator which compares left-hand side with the right.

In JavaScript, the equality operator is unfortunately not as precise as you might think.

There's something called "type coercion" that JS does which automatically converts types of data in compile time.

## Type coercion

JavaScript uses [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

## Truthy

If you're not familiar with JavaScript but has coded before in another language, you might get taken aback over some of the differences in how JavaScript interprets certain values.

A **truthy** value, is a value that is considered true when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context. And an equivalent fales is called **falsy**. Meaning that, all values are either *truthy* except ``false``, ``0``, ``-0``, ``0n``, ``""``, ``null``, ``undefined``, ``NaN`` and ``document.all``.

```js
if (true) {
    console.log("true");
}
if ({}) {
    alert("{}");
}
if ([]) {
    alert("[]");
}
if (42) {
    alert("42");
}
if ("0") {
    alert("0");
}
if ("false") {
    alert("false");
}
if (new Date) {
    alert("new Date");
}
if (-42) {
    alert("-42");
}
if (12n) {
    alert("12n");
}
if (3.14) {
    alert("3.14");
}
if (-3.14) {
    alert("-3.14");
}
if (Infinity) {
    alert("Infinity");
}
if (-Infinity) {
    alert("-Infinity");
}

if (true && "dog") console.log("true dog");

if ([] && "dog") console.log("[] dog");

if (true && "dog"){
    console.log("true dog");
} 

console.log(true && "dog");
console.log([] && "cat");
```

## Logical AND operator, &&

if the first operand is *truthy, the [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) returns the second operand:

```JS
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
```
See also [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

## === Strict Equality and Inequality operators

This strict equality operator provides a secure way to compare two identities of variables to make sure that what you're dealing with is is not affected by the truthy and falsy type coercion.

There's also the Inequality operator !==
