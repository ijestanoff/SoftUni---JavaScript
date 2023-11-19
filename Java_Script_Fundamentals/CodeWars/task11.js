function zero(i = '  ') {
    let obj = { '*': 0 * +i[1], '/': 0 / +i[1], '-': 0 - +i[1], '+': 0 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 0;
}
function one(i = '  ') {
    let obj = { '*': 1 * +i[1], '/': 1 / +i[1], '-': 1 - +i[1], '+': 1 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 1;
}
function two(i = '  ') {
    let obj = { '*': 2 * +i[1], '/': 2 / +i[1], '-': 2 - +i[1], '+': 2 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 2;
}
function three(i = '  ') {
    let obj = { '*': 3 * +i[1], '/': 3 / +i[1], '-': 3 - +i[1], '+': 3 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 3;
}
function four(i = '  ') {
    let obj = { '*': 4 * +i[1], '/': 4 / +i[1], '-': 4 - +i[1], '+': 4 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 4;
}
function five(i = '  ') {
    let obj = { '*': 5 * +i[1], '/': 5 / +i[1], '-': 5 - +i[1], '+': 5 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 5;
}
function six(i = '  ') {
    let obj = { '*': 6 * +i[1], '/': 6 / +i[1], '-': 6 - +i[1], '+': 6 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 6;
}
function seven(i = '  ') {
    let obj = { '*': 7 * +i[1], '/': 7 / +i[1], '-': 7 - +i[1], '+': 7 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 7;
}
function eight(i = '  ') {
    let obj = { '*': 8 * +i[1], '/': 8 / +i[1], '-': 8 - +i[1], '+': 8 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 8;
}
function nine(i = '  ') {
    let obj = { '*': 9 * +i[1], '/': 9 / +i[1], '-': 9 - +i[1], '+': 9 + +i[1] }
    return i != '  ' ? Math.floor(obj[i[0]]) : 9;
}

function plus(i) { return '+' + i }
function minus(i) { return '-' + i }
function times(i) { return '*' + i }
function dividedBy(i) { return '/' + i }

// console.log(seven(times(five()))); //35
// // console.log(four(plus(nine())));    //13
// // console.log(eight(minus(three()))); //5
// // console.log(six(dividedBy(five()))); //3
// console.log(three(plus(three()))); //6
// console.log(nine(dividedBy(four()))); //2.25
console.log(three(dividedBy(four   ())));
console.log(two(dividedBy(six())));
console.log(one(dividedBy(six())));