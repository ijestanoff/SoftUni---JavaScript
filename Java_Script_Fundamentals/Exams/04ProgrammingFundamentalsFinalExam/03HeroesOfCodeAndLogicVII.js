function heroesOfCodeAndLogicVII(input) {
    input.shift();
    let heroes = {};
    input.forEach(part => {
        if (part == 'End') Object.keys(heroes)
            .forEach(hero => console.log(`${hero}\n  HP: ${heroes[hero].hp}\n  MP: ${heroes[hero].mp}`));
        if (!part.includes('-')) {
            let [hero, hp, mp] = part.split(' ');
            heroes[hero] = { hp: +hp, mp: +mp };
        } else {
            let [command, hero, amount, attackerSpell] = part.split(' - ');
            let warrior = heroes[hero];
            if (command == 'CastSpell') {
                if (warrior.mp >= amount) {
                    warrior.mp -= amount;
                    console.log(`${hero} has successfully cast ${attackerSpell} and now has ${warrior.mp} MP!`);
                } else console.log(`${hero} does not have enough MP to cast ${attackerSpell}!`);
            } else if (command == 'TakeDamage') {
                if (warrior.hp > amount) {
                    warrior.hp -= amount;
                    console.log(`${hero} was hit for ${amount} HP by ${attackerSpell} and now has ${warrior.hp} HP left!`);
                } else {
                    console.log(`${hero} has been killed by ${attackerSpell}!`);
                    delete heroes[hero];
                }
            } else if (command == 'Recharge') {
                if (warrior.mp + +amount > 200) {
                    amount = 200 - warrior.mp;
                    warrior.mp = 200;
                }
                else warrior.mp += +amount;
                console.log(`${hero} recharged for ${amount} MP!`);
            } else if (command == 'Heal') {
                if (warrior.hp + +amount > 100) {
                    amount = 100 - warrior.hp;
                    warrior.hp = 100;
                }
                else warrior.hp += +amount;
                console.log(`${hero} healed for ${amount} HP!`);
            }
        }
    });
}

heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]
);
heroesOfCodeAndLogicVII([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]
);