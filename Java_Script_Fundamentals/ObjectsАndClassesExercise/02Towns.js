function towns(input) {
    let allTowns = [];
    for (let part of input) {
        let items = part.split(' | ');
        let town = items[0];
        let latitude = Number(items[1]).toFixed(2);
        let longitude = Number(items[2]).toFixed(2);
        let towns = {town, latitude, longitude};
        allTowns.push(towns);
    }
    allTowns.forEach(part => console.log(part));
}

towns (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
towns (['Plovdiv | 136.45 | 812.575']);