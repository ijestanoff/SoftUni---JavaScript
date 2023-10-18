function numbers(input) {
    let array = input.split(' ').map(Number);
    let [average, count, output] = [0, 0, ''];
    array.forEach(x => average += x);
    average /= array.length;
    array.sort((a, b) => b - a);
    for (let part of array) {
        if (part > average && count < 5) {
            output += part + ' ';
            count++;
        }
    }
    if (!count) console.log('No');
    else console.log(output);
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');