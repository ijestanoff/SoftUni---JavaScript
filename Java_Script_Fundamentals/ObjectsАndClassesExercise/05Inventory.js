function inventory(input) {
    let heroes = [];
    for (let part of input) {
        let commands = part.split(' / ');
        let hero = commands[0];
        let level = Number(commands[1]);
        let items = commands[2];
        heroes.push({name: hero, level: level, items: items });
    }
    heroes.sort((a, b) => a.level - b.level)
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
function solve(arr) {
    let heros = []
    arr.map(x => x.split(' / ')).map(x => heros.push({ name: x[0], level: +x[1], items: x[2] }))
    heros.sort((a, b) => a.level - b.level)
        .map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / '
]);
// inventory ([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]);