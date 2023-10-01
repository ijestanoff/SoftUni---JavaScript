function counterStrike (input) {
    let energy = Number(input[0]);
    let wins = 0;
    for (let index = 1; index < input.length; index++) {
        if (input[index] == 'End of battle') {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
            break;
        }
        let fight = Number(input[index]);
        if (fight <= energy) {
            wins++;
            energy -= fight;
            if (wins % 3 == 0) energy += wins;
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        }
    }
}

counterStrike (["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);
counterStrike (["200",
"54",
"14",
"28",
"13",
"End of battle"]);
counterStrike (["1","10","10","10","10","10","10"]);
