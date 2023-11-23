function solve(text) {
    let words = {};
    let output = [];
    let match = text.toLowerCase().match(/(?<=\s|\b)('?[A-Za-z]+'?[A-Za-z]*'?)(?=\s|\b)/g)
    if (match) match.forEach(word => word in words ? words[word]++ : words[word] = 1);
    Object.entries(words).sort((a, b) => b[1] - a[1]).forEach(part => output.push(part[0]));
    return output.slice(0, 3);
}

console.log(solve("a a a  b  c c  d d d d  e e e e e")); //, ['e','d','a']
console.log(solve("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); //, ['e','ddd','aa']