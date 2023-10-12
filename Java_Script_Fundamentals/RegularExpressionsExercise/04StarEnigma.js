function starEnigma(input) {
    let regex = /[^@\!\:>\-]*@(?<planet>[A-Za-z]+)[^@\!\:>\-]*:(?<population>\d+)[^@\!\:>\-]*!(?<type>[AD])![^@\!\:>\-]*\->(?<count>\d+)[^@\!\:>\-]*/g;
    let attacked = [];
    let destroyed = [];
    let number = Number(input[0]);
    for (let i = 1; i <= number; i++) {
        let part = input[i];
        let count = 0;
        for (let symbol of part) {
            if (symbol == 's' || symbol == 'S' || symbol == 't' || symbol == 'T' || symbol == 'a' || symbol == 'A' || symbol == 'r' || symbol == 'R') {
                count++;
            }
        }
        let newMessage = '';
        for (let symbol of part) {
            newMessage += String.fromCharCode(symbol.charCodeAt(0) - count);
        }
        let match = newMessage.matchAll(regex);
        for (const curMatch of match) {
            if (curMatch.groups.planet != '' && Number(curMatch.groups.population) > 0 && Number(curMatch.groups.count) > 0) {
                if (curMatch.groups.type == 'A') {
                    attacked.push(curMatch.groups.planet);
                } else if (curMatch.groups.type == 'D') {
                    destroyed.push(curMatch.groups.planet);
                }
            }
        }
    }
    attacked.sort((a,b) => a.localeCompare(b));
    destroyed.sort((a,b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    for (let planet of attacked) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    for (let planet of destroyed) {
        console.log(`-> ${planet}`);
    }

}

// starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);