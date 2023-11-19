function solve (num) {
    let isPrime = true;
    if (num > 1) {
        for (let i = 2; i< num; i++) if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    else isPrime = false;
    return isPrime;
}

console.log(solve(0));
console.log(solve(1000000000));
console.log(solve(2));
console.log(solve(73));
console.log(solve(75));
console.log(solve(-1));