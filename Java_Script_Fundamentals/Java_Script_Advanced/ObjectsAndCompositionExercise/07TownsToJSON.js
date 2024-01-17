function townsToJSON([_, ...input], output = []) {
    input.forEach(part => {
        let items = part.split('|');
        let Town = items[1].trim();
        let Latitude = Number(Number(items[2]).toFixed(2));
        let Longitude = Number(Number(items[3]).toFixed(2));
        output.push({ Town, Latitude, Longitude });
    });
    return JSON.stringify(output);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));