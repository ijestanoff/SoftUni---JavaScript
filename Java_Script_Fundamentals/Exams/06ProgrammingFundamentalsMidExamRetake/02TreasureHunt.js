function treasureHunt(input) {
    let loot = input.shift().split('|');
    for (let part of input) {
        let commands = part.split(' ');
        let command = commands.shift();
        if (command == 'Yohoho!') break;
        if (command == 'Loot') {
            // for (let item of commands) {
            //     if (!loot.includes(item)) {
            //         loot.unshift(item);
            //     }
            // }
            commands.forEach(x => { if (!loot.includes(x)) loot.unshift(x) });
        } else if (command == 'Drop') {
            let index = Number(commands[0]);
            if (index < loot.length && index >= 0) {
                loot.push(loot.splice(index, 1));
            }
        } else if (command == 'Steal') {
            console.log(loot.splice(-Number(commands[0])).join(', '));
        }
    }
    let averageGain = 0;
    loot.forEach(x => averageGain += x.length);
    averageGain /= loot.length;
    if (!loot.length) console.log("Failed treasure hunt.");
    else console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
);
treasureHunt ((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
);