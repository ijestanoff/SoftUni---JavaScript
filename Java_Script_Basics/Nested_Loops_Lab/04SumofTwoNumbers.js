function sumOfTwoNumbers (input) {
    let interval_start = Number(input[0]);
    let interval_end = Number(input[1]);
    let magic_number = Number(input[2]);
    let combination_counter = 0;
    let combination_found = false;
    let first_number = 0;
    let second_number = 0;
    for (first_number=interval_start; first_number < interval_end + 1; first_number++) {
        for (second_number=interval_start; second_number< interval_end + 1; second_number++) {
            combination_counter += 1;
            if (first_number + second_number === magic_number) {
                combination_found = true;
                break;
            }
        }
        if (combination_found)
            break;
    }
    if (combination_found)
        console.log(`Combination N:${combination_counter} (${first_number} + ${second_number} = ${magic_number})`);
    else
        console.log(`${combination_counter} combinations - neither equals ${magic_number}`);
}