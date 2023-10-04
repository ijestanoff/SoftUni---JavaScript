function arenaTier (input) {
    let fighters = {};
    for (let fight of input) {
        if (fight == 'Ave Cesar') break;
        else if (fight.includes(' -> ')){
            let part = fight.split(' -> ');
            let gladiator = part[0];
            let technique = part[1];
            let skill = Number(part[2]);
            if (!fighters.hasOwnProperty(gladiator)) {
                fighters[gladiator] = {};
                fighters[gladiator][technique] = skill;
            } else if (!fighters[gladiator].hasOwnProperty(technique)) {
                fighters[gladiator][technique] = skill;
            } else { //same country and sity
                if (fighters[gladiator][technique] < skill) {
                    fighters[gladiator][technique] = skill;
                }
            }
        } else { // gladiator vs gladiator
            let part = fight.split(' vs ');
            let gladiator1 = part[0];
            let gladiator2 = part[1];
            if (fighters.hasOwnProperty(gladiator1) && fighters.hasOwnProperty(gladiator2)) {
                for (let technique in fighters[gladiator1]) {
                    if (fighters[gladiator2].hasOwnProperty(technique)) {
                        if (fighters[gladiator1][technique] > fighters[gladiator2][technique]) {
                            delete fighters[gladiator2];
                        } else if (fighters[gladiator1][technique] < fighters[gladiator2][technique]){
                            delete fighters[gladiator1];
                        }
                        break;
                    }
                }
            }
        }
    }
    let gladTotal = {};
    for (let person in fighters) {
        let totalSkills = 0;
        for (let technique in fighters[person]) {
            totalSkills += fighters[person][technique];
        }
        gladTotal[person] = totalSkills;
    }

    let totalSortByValueKey = Object.entries(gladTotal).sort((a, b) => {
        // First, sort by values in descending order
        if (b[1] - a[1] !== 0) {
            return b[1] - a[1];
        }
        // If values are equal, sort by keys in ascending order
        return a[0].localeCompare(b[0]);
    });
    gladTotal = Object.fromEntries(totalSortByValueKey);

    for (let gladiator in gladTotal) {
        console.log(`${gladiator}: ${gladTotal[gladiator]} skill`);

        let techniqueSortByValueKey = Object.entries(fighters[gladiator]).sort((a, b) => {
            // First, sort by values in descending order
            if (b[1] - a[1] !== 0) {
                return b[1] - a[1];
            }
            // If values are equal, sort by keys in ascending order
            return a[0].localeCompare(b[0]);
        });
        fighters[gladiator] = Object.fromEntries(techniqueSortByValueKey);

        for (let technique in fighters[gladiator]) {
            console.log(`- ${technique} <!> ${fighters[gladiator][technique]}`);
        }
    }
}

// arenaTier ([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ]);
arenaTier ([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);