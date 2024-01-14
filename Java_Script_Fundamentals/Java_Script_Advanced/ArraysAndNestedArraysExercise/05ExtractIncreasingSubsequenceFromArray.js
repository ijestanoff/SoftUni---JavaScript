solve = arr => arr.reduce((acc, val) => (acc[acc.length-1] <= val || (!acc.length)? acc.push(val) : 0, acc), [])

https://pastebin.com/UCB4q03V
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(solve([1,
    2,
    2,
    4]
));
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));