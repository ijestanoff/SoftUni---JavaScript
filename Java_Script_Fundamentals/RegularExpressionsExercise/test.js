const text = "asabcde";
const pattern = /(?<=a)b/;

const result = text.match(pattern);

console.log(result[0]); // Output: ['b']