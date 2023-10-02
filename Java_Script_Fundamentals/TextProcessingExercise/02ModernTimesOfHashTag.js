function modernsHashTag (input) {
    let words = input.split(' ');
    for (let i = words.length - 1; i>= 0; i--) {
        if (words[i].startsWith('#') && words[i].length > 1) {
            let word = words[i].substring(1,words[i].length);
            let allLetters = true;
            for (let symbol of word) {
                if (!((symbol >= 'A' && symbol<= 'Z') || (symbol >= 'a' && symbol <='z'))) {
                    allLetters = false;
                }
            }
            if (!allLetters) words.splice(i,1);
            else words[i] = word;
        } else {
            words.splice(i,1);
        }
    }
    console.log(words.join('\n'));
}

modernsHashTag ('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernsHashTag ('The symbol # is known #variously in English-speaking #regions as the #number sign');