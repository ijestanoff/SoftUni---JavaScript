function manOWar (input) {
    let islost = false;
    let pirateShip = input[0].split('>').map(Number);
    let warship = input[1].split('>').map(Number);
    let maxHealt = Number(input[2]);
    for (let index=3; index<input.length; index++) {
        let commands = input[index].split(' ');
        let command = commands[0];
        if (command == 'Retire') break;
        if (command == 'Fire') {
            let ind = Number(commands[1]);
            let damage = Number(commands[2]);
            if (ind < warship.length && ind>=0) {
                warship[ind] -= damage;
                if (warship[ind] <=0) {
                    console.log('You won! The enemy ship has sunken.');
                    islost = true;
                    break;
                }
            } 
        } else if (command == 'Defend') {
            let startInd = Number(commands[1]);
            let endInd = Number(commands[2]);
            let damage = Number(commands[3]);
            if (startInd >=0 && startInd<pirateShip.length && endInd >=0 && endInd<pirateShip.length) {
                if (startInd > endInd) [startInd,endInd] = [endInd,startInd];
                for (let i=startInd; i<=endInd; i++){
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <=0) {
                        console.log("You lost! The pirate ship has sunken.");
                        islost = true;
                        break;
                    }
                }
            }
        } else if (command == 'Repair') {
            let ind = Number(commands[1]);
            let health = Number(commands[2]);
            if (ind >= 0 && ind < pirateShip.length) {
                pirateShip[ind] += health;
                if (pirateShip[ind] > maxHealt) pirateShip[ind] = maxHealt;
            }
        } else if (command == 'Status') {
            let count = 0;
            for (let part of pirateShip) {
                if (part < maxHealt * 0.2) count++;
            }
            console.log(`${count} sections need repair.`);
        }
    }
    if (!islost) {
        let pirateShipSum = 0;
        let warshipSum = 0;
        for (let part of pirateShip) pirateShipSum += part;
        for (let war of warship) warshipSum += war;
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}

manOWar (["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);
manOWar (["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);