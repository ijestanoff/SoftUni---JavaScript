function jansNotation (input) {
    let numbers = [];
    let error = false;
    for (let instruction of input) {
        let len = numbers.length;
        if (instruction == '+') {
            if (len > 1) {
                numbers[len - 2] += numbers.pop();
            } else {
                error = true;
                break;
            }
        } else if (instruction == '-') {
            if (len > 1) {
                numbers[len - 2] -= numbers.pop();
            } else {
                error = true;
                break;
            }
        } else if (instruction == '*') {
            if (len > 1) {
                numbers[len - 2] *= numbers.pop();
            } else {
                error = true;
                break;
            }
        } else if (instruction == '/') {
            if (len > 1) {
                numbers[len - 2] /= numbers.pop();
            } else {
                error = true;
                break;
            }
        } else {
            number = Number(instruction);
            numbers.push(number);
        }
    }
    if (error) console.log('Error: not enough operands!');
    else if (numbers.length > 1) console.log('Error: too many operands!');
    else console.log(numbers[0]);
}

jansNotation ([3,
    4,
    '+']);
jansNotation ([5,
    3,
    4,
    '*',
    '-']);
jansNotation ([7,
    33,
    8,
    '-']);
jansNotation ([15,
    '/']);
jansNotation ([31,
    2,
    '+',
    11,
    '/']);
jansNotation ([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);