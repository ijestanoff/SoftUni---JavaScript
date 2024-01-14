solve = (arr, num) => Array(num).fill(0).reduce(_ => (arr.unshift(arr.pop()),arr),arr).join(' ')

// https://pastebin.com/MfS1D4ca

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