function race (input) {
    let participants = input[0].split(', ');
    let race = {};
    for (let player of participants) {
        race[player] = 0;
    }
    for (let i = 1; i<input.length; i++) {
        let part = input[i];
        if (part == 'end of race') break;
        let name = '';
        let number = 0;
        for (let symbol of part) {
            if ((symbol >= 'A' && symbol <= 'Z') || (symbol >= 'a' && symbol <= 'z')) {
                name += symbol;
            } else if (symbol >= '0' && symbol <= '9')  number += Number(symbol);
        }
        if (race.hasOwnProperty(name)) {
            race[name] += number;
        }
    }

    let keyValueArr = Object.entries(race);
    keyValueArr.sort((a,b) => b[1] - a[1]);
    race = Object.fromEntries(keyValueArr);

    let count = 0;
    for (let player in race) {
        if (count == 0) console.log(`1st place: ${player}`);
        else if (count == 1) console.log(`2nd place: ${player}`);
        else if (count == 2) console.log(`3rd place: ${player}`);
        count++;
    }
}

race (['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
console.log('--------');
race (['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);
