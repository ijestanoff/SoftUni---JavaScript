function armies(input) {
    let army = {};
    for (let part of input) {
        if (part.includes(' arrives')) { //add the leader (no army)
            let leader = part.slice(0, part.length - 8);
            army[leader] = {};
        } else if (part.includes(': ')) { //add the army with its count to the leader (if he exists)
            let command = part.split(': ');
            let leader = command[0];
            if (army.hasOwnProperty(leader)) {
                let [armyName, armyCount] = command[1].split(', ');
                army[leader][armyName] = Number(armyCount);
            }
        } else if (part.includes(' + ')) { //if the army exists somewhere add the count
            let [armyName, armyCount] = part.split(' + ');
            for (let leader in army) {
                if (army[leader].hasOwnProperty(armyName)) {
                    army[leader][armyName] += Number(armyCount);
                }
            }
        } else if (part.includes(' defeated')) { //delete the leader and his army (if he exists)
            let leader = part.slice(0, part.length - 9);
            if (army.hasOwnProperty(leader)) {
                delete army[leader];
            }
        }
    }

    let totalArmyArr = {};
    for (let leader in army) {
        let totalArmy = 0;
        for (let armyName in army[leader]) {
            totalArmy += army[leader][armyName];
        }
        totalArmyArr[leader] = totalArmy;
    }
    //sort by total army count
    let sortByValue = Object.entries(totalArmyArr);
    sortByValue.sort((a, b) => b[1] - a[1]);
    totalArmyArr = Object.fromEntries(sortByValue);

    for (let leader in totalArmyArr) {
        //sort by army count
        let sortByValue = Object.entries(army[leader]);
        sortByValue.sort((a, b) => b[1] - a[1]);
        army[leader] = Object.fromEntries(sortByValue);

        let result = '';
        for (let armyName in army[leader]) {
            result += `\n>>> ${armyName} - ${army[leader][armyName]}`;
        }
        console.log(`${leader}: ${totalArmyArr[leader]}${result}`);
    }
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);
// armies([
//     'Rick Burr arrives',
//     'Findlay arrives',
//     'Rick Burr: Juard, 1500',
//     'Wexamp arrives',
//     'Findlay: Wexamp, 34540',
//     'Wexamp + 340',
//     'Wexamp: Britox, 1155',
//     'Wexamp: Juard, 43423']);