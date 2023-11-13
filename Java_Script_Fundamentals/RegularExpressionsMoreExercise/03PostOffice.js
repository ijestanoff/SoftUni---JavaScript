function postOffice (input) {
    let words = {};
    let parts = input[0].split('|');
    let regex1 = /([#\$%\*&])([A-Z]+)\1/;
    let regex2 = /(?<letter>[0-9]{2}):(?<len>[0-9]{2})/g;
    parts[0].match(regex1)[2].split('')
        .forEach(symbol => words[symbol] = 0);
    let match = parts[1].matchAll(regex2);
    for (let current of match) {
        let word = String.fromCharCode(current.groups.letter);
        if (word in words) {
            words[word] = Number(current.groups.len) + 1;
        }
    }
    Object.entries(words).forEach(([key,val]) => { 
        parts[2].split(' ').forEach(item => {
            if (item.startsWith(key) && item.length == val)
            console.log(item);
        });
    });
}

postOffice (['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice (['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);