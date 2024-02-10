---
title: Sorting
layout: page
nav_order: 3
parent: Quirks
---

https://www.youtube.com/watch?v=kYAe7qDGOJw&t=421s

## Sorting

Unfortunately, arithmetic is not the only thing that makes one go crazy.

When it comes to sorting its even more crazy.

For example. If I gave you these numbers, it\s a large chance that your sorting will look like this

15 128 16 56 4 23 8 -> [4,8,15,16,23,42,56,128]

good news and bad news, youve sorted it correctly

according to javascript, you're wrong

in javascript it looks like this _> [128,15,16,23,4,42,56,8]

theres a reason why it looks like this, and its because of how javascript arrays work

javascript arrays can either be homoenous or heterogenous (same or different types)

i.e [4,8,15,16,23,42] or [4,8,'foo','bar',true,['help',2]]

unfortunately this will cause issues, especially when you sort

how do you compare two different types to each other. SUre 4 < 5 but is it greater than or equal to an array containing 5? -> 4 < [5]?

For javascript a solution had to be found for some reason, so a solution was to convert every single thing in an array to a single type; the string type and then sort that in alphabetical order. It's a solution but because of this, sorting numbers does not work in the way we expect.
i.e String -> ['1', '2', '20', '3']

If we want to sort a list of numbers in a way which we intended, we do so by parsing in a function to our sort method.

```js
let nums = [56, 128, 23, 4, 42, 15, 16, 8];
let sorted = nums.sort((x, y) => x - y);

console.log(...sorted);
```