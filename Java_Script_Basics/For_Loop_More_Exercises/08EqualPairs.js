function equalPairs(input) {
    let max_diff = 0;
    let both_numbers = Number(input[0]);
    let last_sum = 0;
    let first_number = Number(input[1]);
    let second_number = Number(input[2]);
    last_sum = first_number + second_number;
    let count = 3;
    for (let number=0; number<both_numbers - 1; number++){
        first_number = Number(input[count++]);
        second_number = Number(input[count++]);
        let current_sum = first_number + second_number;
        if (current_sum != last_sum) {
            let diff = Math.abs(current_sum - last_sum);
            if (diff > max_diff)
                max_diff = diff;
        }
        last_sum = current_sum;
    }
    if (max_diff === 0)
        console.log(`Yes, value=${last_sum}`);
    else
        console.log(`No, maxdiff=${max_diff}`);
}