function towns(input) {
    let allTowns = [];
    for (let part of input) {
        let towns = {};
        let items = part.split(' | ');
        let town = items[0];
        let latitude = Number(items[1]).toFixed(2);
        let longitude = Number(items[2]).toFixed(2);
        towns.town = town;
        towns.latitude = latitude;
        towns.longitude = longitude; 
        allTowns.push(towns);
    }
    //{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
    for (let part of allTowns) {
        console.log(part);
    }
}

console.log(towns (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']));
// towns (['Plovdiv | 136.45 | 812.575']);