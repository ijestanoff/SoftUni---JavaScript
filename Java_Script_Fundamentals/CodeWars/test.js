
let text = `aa`
console.log(Array.from('aaa'.matchAll(new RegExp(`(?=(${text}))`, "g")), x => x[1]).length);