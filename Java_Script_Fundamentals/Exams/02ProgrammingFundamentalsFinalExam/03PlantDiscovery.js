function plantDiscovery(input) {
    let plants = {};
    input.shift();
    input.forEach(part => {
        if (part.includes('<->')) {
            let [plant, rarity] = part.split('<->');
            plants[plant] = { rarity, rating: [] };
        }
        else if (part == 'Exhibition') {
            console.log(`Plants for the exhibition:`);
            Object.keys(plants).forEach(key => {
                let average = 0
                plants[key].rating.forEach(elm => average += elm);
                if (average) average /= plants[key].rating.length;
                console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${average.toFixed(2)}`);
            });
            return;
        } else {
            let items = part.split(': ');
            let [plant, item] = items[1].split(' - ');
            if (plant in plants) {
                if (items[0] == 'Rate') {
                    plants[plant].rating.push(Number(item));
                } else if (items[0] == 'Update') {
                    plants[plant].rarity = item;
                } else if (items[0] == 'Reset') {
                    plants[plant].rating = [];
                }
            } else console.log('error');
        }
    });
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