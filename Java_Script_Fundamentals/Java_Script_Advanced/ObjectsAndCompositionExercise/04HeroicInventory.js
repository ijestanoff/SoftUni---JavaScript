function heroicInventory(input) {
    return JSON.stringify(input.reduce((output, hero) => {
        let [name, level, items] = hero.split(' / ');
        items = items ? items.split(', ') : [];
        output.push({ name, level: +level, items });
        return output;
    }, []));
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
console.log(heroicInventory(['Jake / 1000 ']));