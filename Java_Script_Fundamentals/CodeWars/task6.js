function solve(str) {
    let out = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !=0) out.push(str[i-1] + str[i]);
        else if (i == str.length - 1) out.push(str[i] + '_');
    }
    return out;
}

console.log(solve('abcdef'));
console.log(solve('abcdefg'));
console.log(solve(''));