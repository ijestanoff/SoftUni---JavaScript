function treasureHunt(input) {
    let loots = input.shift().split('|');
    for (let part of input) {
        let commands = part.split(' ');
        let command = commands.shift();
        if (command == 'Yohoho!') break;
        if (command == 'Loot') commands.forEach(x => { if (!loots.includes(x)) loots.unshift(x) });
        else if (command == 'Drop') {
            let index = Number(commands[0]);
            if (index < loots.length && index >= 0) loots.push(loots.splice(index, 1));
        } else if (command == 'Steal') console.log(loots.splice(-Number(commands[0])).join(', '));
    }
    let averageGain = 0;
    loots.forEach(x => averageGain += x.length);
    averageGain /= loots.length;
    if (!loots.length) console.log("Failed treasure hunt.");
    else console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
);