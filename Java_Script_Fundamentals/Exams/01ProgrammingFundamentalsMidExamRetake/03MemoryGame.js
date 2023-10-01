function memoryGame (input) {
    let sequence = input[0].split(' ');
    for (let index = 1; index<input.length; index++) {
        let positions = input[index].split(' ');
        if (positions[0] == 'end') break;
        let pos1 = Number(positions[0]);
        let pos2 = Number(positions[1]);
        if (pos1 == pos2 || pos1<0 || pos2<0 || pos1>sequence.length-1 || pos2>sequence.length-1) {
            let middle = sequence.length / 2;
            sequence.splice(middle,0,`-${index}a`);
            sequence.splice(middle,0,`-${index}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[pos1] == sequence[pos2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[pos1]}!`);
            if (pos1 > pos2) {
                sequence.splice(pos1,1);
                sequence.splice(pos2,1);
            } else {
                sequence.splice(pos2,1);
                sequence.splice(pos1,1);
            }
            if (sequence.length == 0) {
                console.log(`You have won in ${index} turns!`);
                break;
            }
        } else if (sequence[pos1] != sequence[pos2]) {
            console.log("Try again!");
        }
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    }
}

memoryGame ([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    );
// memoryGame ([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     );
// memoryGame ([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     );