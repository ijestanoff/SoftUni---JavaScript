function train(input) {
    let wagons = input[0].split(' ').map(num => Number(num));
    let capacity = Number(input[1]);
    for (index = 2; index < input.length; index++) {
        command = input[index].split(' ');
        if (command[0] == 'Add') {
            wagons.push(Number(command[1]));
        } else {
            let num = Number(command[0]);
            for (let count = 0; count < wagons.length; count++) {
                if (capacity - wagons[count] >= num) {
                    wagons[count] += num;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);
