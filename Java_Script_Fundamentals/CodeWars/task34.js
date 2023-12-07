// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
frequencies = (s) => {
    let output = {};
    [...s].forEach(char => char in output ? output[char]++ : output[char] = 1);
    return Object.entries(output);
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs, s) {
    let chars = freqs.sort((a, b) => b[1] - a[1]);
    let code = '0', last;
    chars.forEach(char => {
        char[1] = code;
        last = code.slice(0, code.length - 1);
        code = '1' + code;
    });
    chars[chars.length - 1][1] = last;
    chars = Object.fromEntries(chars);
    let out = [...s].map(symbol => symbol = chars[symbol]);
    return out.join('');
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs, bits) {

}

const s = 'abcdefgh';//"aaaabcc";
const fs = frequencies(s);
console.log(encode(fs, s));
//assert.deepEqual([...fs].sort(), [["a", 4], ["b", 1], ["c", 2]]);
//assert.strictEqual(encode(fs, s).length, 10);