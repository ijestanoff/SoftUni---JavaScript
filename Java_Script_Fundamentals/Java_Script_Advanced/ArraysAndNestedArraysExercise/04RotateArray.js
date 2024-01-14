solve = (arr, num) => Array(num).fill(0).reduce((_,__) => (arr.unshift(arr.pop()),arr),arr).join('')

https://pastebin.com/UuWTgzQU

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));