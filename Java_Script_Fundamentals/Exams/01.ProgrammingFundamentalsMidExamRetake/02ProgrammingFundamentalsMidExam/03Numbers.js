function numbers (input) {
    let nums = input.split(' ');
    let array = [];
    for (let num of nums) {
        array.push(Number(num));
    }
    let average = 0;
    for (number of array) {
        average += number; 
    }
    average = average / array.length;
    let count = 0;
    let output = ''
    array.sort(function (a, b) { return a - b });
    for (let index = array.length -1; index>=0; index--) {
        if (array[index] > average && count<5) {
            output += array[index] + ' ';
            count++;
        }
    }
    if (count == 0) console.log('No');
    else console.log(output);
}

numbers ('10 20 30 40 50');
numbers ('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers ('1');
numbers ('-1 -2 -3 -4 -5 -6');