function arenaTier(input) {
    let fighters = {};
    input.forEach(fight => {
        if (fight == 'Ave Cesar') {
            let gladiatorTotal = {};
            Object.keys(fighters).forEach(person => {
                let totalSkills = 0;
                Object.keys(fighters[person]).forEach(technique => totalSkills += fighters[person][technique]);
                gladiatorTotal[person] = totalSkills;
            });
            // First, sort by values in descending order, if values are equal, sort by keys in ascending order
            gladiatorTotal = Object.fromEntries(Object.entries(gladiatorTotal)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));

            Object.keys(gladiatorTotal).forEach(gladiator => {
                console.log(`${gladiator}: ${gladiatorTotal[gladiator]} skill`);
                // First, sort by values in descending order, if values are equal, sort by keys in ascending order
                Object.entries(fighters[gladiator]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                    .forEach(technique => console.log(`- ${technique[0]} <!> ${technique[1]}`));
            });
        } else if (fight.includes(' -> ')) {
            let [gladiator, technique, skill] = fight.split(' -> ');
            skill = Number(skill);
            if (!(gladiator in fighters)) {
                fighters[gladiator] = {};
                fighters[gladiator][technique] = skill;
            } else if (!(technique in fighters[gladiator])) fighters[gladiator][technique] = skill;
            else { //same country and sity
                if (fighters[gladiator][technique] < skill) fighters[gladiator][technique] = skill;
            }
        } else { // gladiator vs gladiator
            let [gladiator1, gladiator2] = fight.split(' vs ');
            if (gladiator1 in fighters && gladiator2 in fighters) {
                for (let technique in fighters[gladiator1]) {
                    if (technique in fighters[gladiator2]) {
                        if (fighters[gladiator1][technique] > fighters[gladiator2][technique]) {
                            delete fighters[gladiator2];
                        } else delete fighters[gladiator1];
                        break;
                    }
                }
            }
        }
    });
}

// arenaTier ([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ]);
arenaTier([
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