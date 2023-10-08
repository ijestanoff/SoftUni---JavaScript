function airPollution (input,commands) {
    let matrix = [];
    for (let i = 0; i < 5; i++) {
        matrix[i] = input[i].split(' ').map(num => Number(num));
    }
    for (let i = 0; i<commands.length; i++) {
        let part = commands[i].split(' ');
        let command = part[0];
        let index = Number(part[1]);
        switch (command) {
            case ('breeze') :
                for (let j=0; j<5; j++) {
                    matrix[index][j] -= 15;
                    if (matrix[index][j] < 0) matrix[index][j] = 0; 
                }
                break;
            case ('gale') :
                for (let j=0; j<5; j++) {
                    matrix[j][index] -= 20;
                    if (matrix[j][index] < 0) matrix[j][index] = 0; 
                }
                break;
            case ('smog') :
                for (let j=0; j<5; j++) {
                    for (let k=0; k<5; k++) {
                        matrix[j][k] +=index;
                    }
                }
                break;
        } 
    }
    let result = '';
    for (let j=0; j<5; j++) {
        for (let k=0; k<5; k++) {
            if (matrix[j][k] >= 50) {
                if (result == '') result = `Polluted areas: [${j}-${k}]`
                else result += `, [${j}-${k}]`;
            }
        }
    }
    if (result == '') console.log('No polluted areas');
    else console.log(result);
}

//airPollution (
// ['5 7 72 14 4',
// '41 35 37 27 33',
// '23 16 27 42 12',
// '2 20 28 39 14',
// '16 34 31 10 24'],
// ['breeze 1', 'gale 2', 'smog 25']);
airPollution (
['5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24'],
['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
airPollution (['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35']);