function santasSecretHelper(input) {
    let number = input.shift();
    let words = [];
    input.forEach(part => {
        if (part == 'end') return;
        words.push(Array.from(part)
            .reduce((acc, val) => acc + String.fromCharCode(val.charCodeAt() - +number), ''));
    });
    words.forEach(word => {
        let match = word.match(/@(?<name>[A-Za-z]{2,})[^!\@\-\:\>]+!(?<type>[GN])!/);
        if (match && match[2] == 'G') console.log(match[1]);
    });
}

santasSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);
console.log('-------');
santasSecretHelper(['3',
    'N}eideidmk$(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);