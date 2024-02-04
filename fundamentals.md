---
layout: post
title: Fundamentals
nav_order: 4
---

# Truthy

If you're not familiar with JavaScript but has coded before in another language, you might get taken aback over some of the differences in how JavaScript interprets certain values.

A **truthy** value, is a value that is considered true when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context. And an equivalent fales is called **falsy**. Meaning that, all values are either *truthy* except ``false``, ``0``, ``-0``, ``0n``, ``""``, ``null``, ``undefined``, ``NaN`` and ``document.all``.

JavaScript uses [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

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