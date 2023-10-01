function rightPlace (string1, symbol, string2) {
    for (i = 0; i<string1.length; i++) {
        if (string1[i] == '_') {
            if (string2[i] == symbol) console.log('Matched');
            else console.log('Not Matched');
        }
    }
}

rightPlace ('Str_ng', 'I', 'Strong');
rightPlace ('Str_ng', 'i', 'String');