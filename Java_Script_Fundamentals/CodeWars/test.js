let value = 18;
value += 1000 * (value % 1000) - (value % 1000);
console.log(value);

console.log(18 % 1000);