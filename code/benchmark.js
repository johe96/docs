//import { leftpad } from './leftpad.js'
//import { leftPad } from './leftpad-improved.js'

//benchmarking leftpad functions

function leftPad1(str, len, ch) {
    return new Array(len - str.length).fill(!ch && ch !== 0 ? ' ' :ch).join("") + str
}

function leftPad2(str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
}


function fun(fn, count, ...args){
    const start = performance.now();

    for(let i = 0; i < count; ++i){
        fn.apply(null, args);
    }
    return performance.now() - start;
}

[10, 100, 1000, 10000].forEach(x => {
    [10, 100, 1000, 10000].forEach(y => {
        console.log("leftPad", x, y, fun(leftPad1, x, 'foo', y));
    });
    [10, 100, 1000, 10000].forEach(y => {
        console.log("leftPad2", x, y, fun(leftPad2, x, 'foo', y));
    });
});