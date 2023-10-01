function treasureHunt (input) {
    let loot = input[0].split('|');
    for (let index = 1; index < input.length; index++) {
        let commands = input[index].split(' ');
        let command = commands[0];
        if (command == 'Yohoho!') break;
        if (command == 'Loot') {
            for (let i=1; i<commands.length; i++ ) {
                if (!loot.includes(commands[i])) {
                    loot.unshift(commands[i]);
                }
            }
        } else if (command == 'Drop') {
            let ind = Number(commands[1]);
            if (ind < loot.length && ind >=0) {
                let temp = loot[ind];
                loot.splice(ind,1);
                loot.push(temp);
            }
        } else if (command == 'Steal') {
            let count = Number(commands[1]);
            if (count > loot.length) count=loot.length;
            let steal = [];
            for (let i=loot.length - count; i<loot.length;i++) {
                steal.push(loot[i]);
            }
            console.log(steal.join(', '));
            loot.splice(loot.length - count,count);
        }
    }
    let averageGain = 0;
    for (let i=0; i<loot.length; i++) {
        averageGain += loot[i].length;
    }
    averageGain /= loot.length;
    if (loot.length == 0) console.log("Failed treasure hunt.");
    else console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
}

// treasureHunt ((["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins",
// "Loot Silver Pistol",
// "Drop 3",
// "Steal 3",
// "Yohoho!"])
// );
treasureHunt ((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
);