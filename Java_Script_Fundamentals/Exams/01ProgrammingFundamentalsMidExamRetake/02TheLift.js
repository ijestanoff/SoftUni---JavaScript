function theLift (input) {
    let people = Number(input[0]);
    let train = [];
    let wagons = input[1].split(' ');
    for (let index = 0; index< wagons.length; index++) {
        let current = Number(wagons[index]);
        let free = 4 - current;
        if (people >= free) {
            people -= free;
            train.push(4);
        } else {
            train.push(current + people);
            people = 0;
        } 
    }
    if (people == 0 && train[train.length-1] < 4) console.log('The lift has empty spots!');
    if (people>0) console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(train.join(' '));
}

theLift ([
    "19",
    "0 0 0 0 0"
   ]
   );
// theLift ([
//     "20",
//     "0 2 0"
//    ]
//    );