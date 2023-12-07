// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
frequencies = (s) => {
    let output = {};
    [...s].forEach(char => char in output ? output[char] ++ : output[char] = 1);
    return Object.entries(output);
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs, s) {

}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs, bits) {

}

const s = "aaaabcc";
const fs = frequencies(s);
console.log(fs);
assert.deepEqual([...fs].sort(), [["a", 4], ["b", 1], ["c", 2]]);
//assert.strictEqual(encode(fs, s).length, 10);