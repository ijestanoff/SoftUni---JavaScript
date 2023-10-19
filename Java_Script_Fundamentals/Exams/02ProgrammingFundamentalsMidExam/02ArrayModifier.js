function arrayModifier (input) {
    let numbers = input.shift().split(' ').map(Number);
    for (let part of input) {
        let commands = part.split(' ');
        let command = commands[0];
        if (command == 'end') break;
        if (command == 'decrease') {
            for (let i=0; i<numbers.length; i++) {
                numbers[i]--;
            }
        } else {
             let index1 = Number(commands[1]);
             let index2 = Number(commands[2]);
             if (command == 'swap') {
                [numbers[index1],numbers[index2]] = [numbers[index2], numbers[index1]];
             } else if (command == 'multiply'){
                numbers[index1] *= numbers[index2];
             }
        }
    }
    console.log(numbers.join(', '));
}

arrayModifier ([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  );
arrayModifier ([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );