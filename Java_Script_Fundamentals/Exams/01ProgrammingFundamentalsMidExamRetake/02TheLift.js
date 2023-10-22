function theLift(input) {
    let train = [];
    let people = Number(input[0]);
    let wagons = input[1].split(' ').map(Number);
    for (let current of wagons) {
        if (people >= 4 - current) {
            people -= 4 - current;
            train.push(4);
        } else {
            train.push(current + people);
            people = 0;
        }
    }
    if (!people && train[train.length - 1] < 4) console.log('The lift has empty spots!');
    if (people) console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(train.join(' '));
}


theLift([
    "19",
    "0 0 0 0 0"
]
);
// theLift ([
//     "20",
//     "0 2 0"
//    ]
//    );