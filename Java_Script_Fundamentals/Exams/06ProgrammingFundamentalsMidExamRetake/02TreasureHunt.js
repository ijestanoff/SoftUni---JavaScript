function treasureHunt(input) {
    let loot = input.shift().split('|');
    for (let part of input) {
        let commands = part.split(' ');
        let command = commands.shift();
        if (command == 'Yohoho!') break;
        if (command == 'Loot') {
            for (let comm of commands) {
                if (!loot.includes(comm)) {
                    loot.unshift(comm);
                }
            }
        } else if (command == 'Drop') {
            let ind = Number(commands[0]);
            if (ind < loot.length && ind >= 0) {
                let temp = loot[ind];
                loot.splice(ind, 1);
                loot.push(temp);
            }
        } else if (command == 'Steal') {
            let count = Number(commands[0]);
            if (count > loot.length) count = loot.length;
            let steal = [];
            for (let i = loot.length - count; i < loot.length; i++) {
                steal.push(loot[i]);
            }
            console.log(steal.join(', '));
            loot.splice(loot.length - count, count);
        }
    }
    let averageGain = 0;
    for (let l of loot) {
        averageGain += l.length;
    }
    averageGain /= loot.length;
    if (loot.length == 0) console.log("Failed treasure hunt.");
    else console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
);
// treasureHunt ((["Diamonds|Silver|Shotgun|Gold",
// "Loot Silver Medals Coal",
// "Drop -1",
// "Drop 1",
// "Steal 6",
// "Yohoho!"])
// );