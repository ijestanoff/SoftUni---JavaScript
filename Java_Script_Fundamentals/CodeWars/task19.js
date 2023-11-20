function solve(n) {
    let prime = {};
    for (let i = 2; i <= n; i++) {
        while (n % i == 0) {
            i in prime ? prime[i]++ : prime[i] = 1;
            n /= i;
        }
    }
    return Object.entries(prime).map(([key, val]) => val > 1 ? `(${key}**${val})` : `(${key})`).join('');
}

console.log(solve(86240)); //(2**5)(5)(7**2)(11)
console.log(solve(7775460));  //(2**2)(3**3)(5)(7)(11**2)(17)