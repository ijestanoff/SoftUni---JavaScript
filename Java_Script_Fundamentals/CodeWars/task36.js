function greatestProduct(input) {
    let great = [];
    for (let i = 0; i < input.length - 4; i++) {
        let n = input.slice(i, i + 5).split('').map(Number);
        great.push(n[0] * n[1] * n[2] * n[3] * n[4]);
    }
    return great.sort((a, b) => b - a)[0];
}

console.log(greatestProduct("123834539327238239583")) // should return 3240