function aMinerTask(input) {
    let array = {};
    do {
        let [metal, quantity] = input.splice(0, 2);
        if (metal in array) array[metal] += Number(quantity);
        else array[metal] = Number(quantity);
    } while (input.length);
    Object.entries(array).map(element => console.log(`${element[0]} -> ${element[1]}`));
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