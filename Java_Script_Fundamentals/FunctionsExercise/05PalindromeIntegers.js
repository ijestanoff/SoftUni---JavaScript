solve = num => console.log(num.map(x => String(x) == String(x).split('').reverse().join('')).join('\n'))

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);