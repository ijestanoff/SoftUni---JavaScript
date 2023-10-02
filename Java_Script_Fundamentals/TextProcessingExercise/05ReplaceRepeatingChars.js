function replaceRepeatingChars (input) {
    let index = input.length-1;
    do {
        let symbol = input[index];
        if (symbol == input[index - 1]) {
            while (input.includes(symbol + symbol)) {
                input = input.replace(symbol + symbol, symbol);
            }
            index = input.length-1;
        } else {
            index--;
        }
    } while (index > 0);
    console.log(input);
}

replaceRepeatingChars ('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars ('qqqwerqwecccwd');