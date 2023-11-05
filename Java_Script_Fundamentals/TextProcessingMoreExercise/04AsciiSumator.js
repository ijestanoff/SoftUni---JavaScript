function asciiSumator(input) {
    let sum = 0;
    input[2].split('').forEach(symbol => {
        let start = input[0].charCodeAt(0);
        let last = input[1].charCodeAt(0);
        if (last < start) [start, last] = [last, start];
        let code = symbol.charCodeAt(0);
        if (code > start && code < last) sum += code;
    });
    console.log(sum);
}

asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
asciiSumator(['?',
    'E',
    '@ABCEF']);
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);