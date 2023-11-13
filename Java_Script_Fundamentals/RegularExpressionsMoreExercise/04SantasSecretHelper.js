function santasSecretHelper (input) {
    let number = Number(input.shift());
    let words = [];
    let regex = /@(?<name>[A-Z][a-z]+)[^!\@\-\:\>]+!(?<type>[GN])!/;
    for (let part of input) {
        if (part == 'end') break;
        let string = '';
        for (let symbol of part) {
            string += String.fromCharCode(symbol.charCodeAt(0) - number);
        }
        words.push(string);
    }
    words.forEach(word => {
        let match = word.match(regex);
        //console.log(match);
        if (match && match[2] == 'G') console.log(match[1]);
    });
}

santasSecretHelper (['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end']);
santasSecretHelper (['3',
'N}eideidmk$(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']);