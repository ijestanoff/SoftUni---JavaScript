solve = sq => Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1)**2;

console.log(solve(121));
console.log(solve(625));
console.log(solve(114));