---
title: Scope
layout: page
parent: Quirks
nav_order: 5
---

```js
function foo() {
    var x = 5;

    if (true) {
        var x = 5;
    }
    
    console.log(x);
}

foo();

```

the local scope is not in the fucntion it's defined in but the block of code itself.
