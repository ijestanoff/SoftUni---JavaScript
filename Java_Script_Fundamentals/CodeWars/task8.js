function solve(a, b) {
    let sum = 0;
    if (a > b) [a, b] = [b, a];
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

console.log(solve(1, 0));
console.log(solve(-1, 2));
console.log(solve(1, 1));