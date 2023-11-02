let arr = '01234567890abcd123efghj';
let oldString = '123';
let newString = '@@@';
arr = arr.replace(new RegExp(oldString, 'g'), newString);
console.log(arr);