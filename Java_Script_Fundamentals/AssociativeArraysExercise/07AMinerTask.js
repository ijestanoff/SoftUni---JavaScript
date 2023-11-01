function aMinerTask(input) {
    let array = {};
    do {
        let metal = input.shift();
        let quantity = input.shift();
        if (!array.hasOwnProperty(metal)) {
            array[metal] = Number(quantity);
        } else {
            array[metal] += Number(quantity);
        }
    } while (input.length > 0);
    Object.entries(array).forEach(element => console.log(`${element[0]} -> ${element[1]}`));
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);