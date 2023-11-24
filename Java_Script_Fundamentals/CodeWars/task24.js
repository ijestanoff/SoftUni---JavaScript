// function topThreeWords(text) {
//     let words = {};
//     let output = [];
//     let match = text.toLowerCase().match(/(?<=\s|\b)('?[a-z]+'?[a-z]*'?)(?=\s|\b)/g) || [];
//     match.forEach(word => word in words ? words[word]++ : words[word] = 1);
//     Object.entries(words).sort((a, b) => b[1] - a[1]).forEach(part => output.push(part[0]));
//     return output.slice(0, 3);
// }

const topThreeWords = text => {
    let total = (text.toLowerCase().match(/\b[a-z']+\b/g)||[]).reduce((acc,cur) => (acc[cur] = (acc[cur]||0) + 1, acc), {});
    console.log(total);
    return Object.keys(total).sort((a,b) => total[b] - total[a]).slice(0,3);
  };

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); //, ['e','d','a']
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); //, ['e','ddd','aa']