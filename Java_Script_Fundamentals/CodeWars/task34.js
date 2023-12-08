frequencies = (s) => { 
    let output = {};
    [...s].forEach(char => char in output ? output[char]++ : output[char] = 1);
    return Object.entries(output);
}

const coder = (freqs) => {
    let chars = JSON.parse(JSON.stringify(freqs)).sort((a, b) => b[1] - a[1]);
    let code = '0', last;
    chars.forEach(char => {
        char[1] = code;
        last = code.slice(0, code.length - 1);
        code = '1'.concat(code);
    });
    chars[chars.length - 1][1] = last;
    return Object.fromEntries(chars);
}

const encode = (freqs, s) => { 
    if (freqs.length < 2) return null;
    let chars = coder(freqs);
    let out = [...s].map(symbol => symbol = chars[symbol]);
    return out.join('');
}

const decode = (freqs, bits) => { 
    if (freqs.length < 2) return null;
    let chars = coder(freqs);
    let swap = {};
    for (let key in chars) swap[chars[key]] = key;
    let char = '', output = [];
    [...bits].forEach(bit => {
        char += bit;
        if (char in swap) {
            output.push(swap[char]);
            char = '';
        }
    });
    return output.join('');
}



let s = 'abcdef';//"aaaabcc";
let fs = frequencies(s);
let code = encode(fs, s);
console.log(code);
console.log(decode(fs, code));