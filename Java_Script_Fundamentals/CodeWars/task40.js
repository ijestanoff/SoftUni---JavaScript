function beggars(values, n) {
    let output = [];
    for (let i = 0; i < n; i++) {
        let value = 0;
        for (let j = i; j < values.length; j += n) {
            value += values[j];
        }
        output.push(value);
    }
    return output;
}

console.log(beggars([1, 2, 3, 4, 5], 1));// [15]
console.log(beggars([1, 2, 3, 4, 5], 2));// [9, 6]
console.log(beggars([1, 2, 3, 4, 5], 3));// [5, 7, 3]
console.log(beggars([1, 2, 3, 4, 5], 6));// [1, 2, 3, 4, 5, 0]
console.log(beggars([1, 2, 3, 4, 5], 0));// []