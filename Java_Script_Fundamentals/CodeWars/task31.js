checkRange = (a, x, y) => a.filter(p => p >= x & p <= y).length
checkRange = (a, x, y) => a.map(e => e < x | e > y || i++, i = 0) | i
checkRange = (a, x, y) => a.map(v => i += x > v == v > y, i = 0) | i
//checkRange=(a,x,y)=>

console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 1, 7));   //  7
console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 3, 5));   //  3
console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 7, 10));  //  1
console.log(checkRange([7, 5, 11, 8, 9, 1, 13, 12, 88], 99, 100));  //  0
console.log(checkRange([12, 1, 45, 56, 98, 14, 23, 46], 14, 14));   //  1
console.log(checkRange([1, 1, 1, 99, 99, 99], 88, 88));             //  0
