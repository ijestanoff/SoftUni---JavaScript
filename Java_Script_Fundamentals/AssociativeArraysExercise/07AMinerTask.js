function aMinerTask (input) {
    let array = {};
    for (let index = 0; index < input.length; index+=2) {
        if (!array.hasOwnProperty(input[index])) {
            array[input[index]] = Number(input[index+1]);
        } else {
            array[input[index]] += Number(input[index+1]);
        }
    }
    for (let product in array) {
        console.log(`${product} -> ${array[product]}`);
    }
}

aMinerTask ([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);
aMinerTask ([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);