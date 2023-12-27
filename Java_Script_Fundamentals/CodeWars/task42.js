function digitalRoot(n) {
    return n > 9 ? digitalRoot([...String(n)].map(Number).reduce((acc, val) => acc + val)) : n;
}

console.log(digitalRoot(16));  //-->  1 + 6 = 7
console.log(digitalRoot(942));   //  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digitalRoot(132189));  //-->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log(digitalRoot(493193));  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// let output = String(n).split('').map(Number).reduce((acc, val) => acc + val);
    // if (output > 9) output = digitalRoot(output);
    // return output;