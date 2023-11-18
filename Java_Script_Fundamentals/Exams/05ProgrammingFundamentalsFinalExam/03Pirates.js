function pirates(input) {
    let cities = {};
    input.forEach(part => { 
        if (part == 'End') {
            let towns = Object.keys(cities);
            if (towns.length) {
                console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
                towns.forEach(city => console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`));
            } else console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
        } else {
            if (part.includes('||')) {
                let [city, population, gold] = part.split('||');
                if (city in cities) {
                    cities[city].population += +population;
                    cities[city].gold += +gold;
                } else cities[city] = { population: +population, gold: +gold };
            } else {
                let [command, city, peopleGold, gold] = part.split('=>');
                peopleGold = Number(peopleGold);
                gold = Number(gold);
                let town = cities[city];
                if (command == 'Plunder') {
                    let removeTown = false;
                    town.population -= peopleGold;
                    town.gold -= gold;
                    if (town.population <= 0) {
                        peopleGold += town.population;
                        removeTown = true;
                    }
                    if (town.gold <= 0) {
                        gold += town.gold;
                        removeTown = true;
                    }
                    console.log(`${city} plundered! ${gold} gold stolen, ${peopleGold} citizens killed.`);
                    if (removeTown) {
                        console.log(`${city} has been wiped off the map!`);
                        delete cities[city];
                    }
                } else if (command == 'Prosper') {
                    if (peopleGold < 0) console.log(`Gold added cannot be a negative number!`);
                    else {
                        town.gold += peopleGold;
                        console.log(`${peopleGold} gold added to the city treasury. ${city} now has ${town.gold} gold.`);
                    }
                }
            }
        }
    });
}

// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]);
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);