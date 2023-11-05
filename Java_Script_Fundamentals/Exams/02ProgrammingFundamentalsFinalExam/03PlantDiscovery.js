function plantDiscovery(input) {
    let plants = {};
    let number = Number(input.shift());
    for (let i = 0; i < number; i++) {
        let [plant, rarity] = input.shift().split('<->');
        plants[plant] = { rarity: Number(rarity), rating: [] };
    }
    for (let part of input) {
        if (part == 'Exhibition') {
            console.log(`Plants for the exhibition:`);
            for (let key in plants) {
                let average = 0
                plants[key].rating.forEach(elm => average+=elm);
                if (average) average /= plants[key].rating.length;
                console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${average.toFixed(2)}`);
            }
            return;
        }
        let items = part.split(': ');
        let [plant, item] = items[1].split(' - ');
        if (plant in plants) {
            if (items[0] == 'Rate') {
                plants[plant].rating.push(Number(item));
            } else if (items[0] == 'Update') {
                plants[plant].rarity = Number(item);
            } else if (items[0] == 'Reset') {
                plants[plant].rating = [];
            }
        } else console.log('error');
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);