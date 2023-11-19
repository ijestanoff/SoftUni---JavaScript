function solve(number) {
    let out = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) out += i;
    }
    return out;
}

console.log(solve(10));
console.log(solve(20));
console.log(solve(30));