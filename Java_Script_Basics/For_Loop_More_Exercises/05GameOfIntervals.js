function gameOfIntervals(input) {
    let number_of_turns = Number(input[0]);
    let result = 0;
    let invalid_number = 0;
    let up_9 = 0;
    let up_19 =0;
    let up_29 = 0;
    let up_39 = 0;
    let up_50 = 0;
    for (number= 0; number < number_of_turns; number ++) {
        let current_number = Number(input[number+1]);
        if (current_number < 0 || current_number > 50) {
            result /= 2;
            invalid_number++;
        }
        else if (0 <= current_number && current_number <= 9) {
            result += current_number * 0.2;
            up_9 ++;
        }
        else if (current_number <= 19) {
            result += current_number * 0.3;
            up_19 ++;
        }
        else if (current_number <= 29) {
            result += current_number * 0.4;
            up_29 ++;
        }
        else if (current_number <= 39) {
            result += 50;
            up_39 ++;
        }
        else if (current_number <=50) {
            result += 100;
            up_50 ++;
        }
    }
    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${(up_9 / number_of_turns * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(up_19 / number_of_turns * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(up_29 / number_of_turns * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(up_39 / number_of_turns * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(up_50 / number_of_turns * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid_number / number_of_turns * 100).toFixed(2)}%`);
}