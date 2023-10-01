function equalSumsEvenOddPosition (input) {
    let first_number = Number(input[0]);
    let second_number = Number(input[1]);
    for (let number=first_number; number < second_number + 1; number++){
        let number_to_string = String(number);
        let odd_sum = 0;
        let even_sum = 0;
        for (position = 0; position<6; position++) {
            let digit = number_to_string[position];
            if (position % 2 == 0)
                even_sum += Number(digit);
            else
                odd_sum += Number(digit);
        }
        if (even_sum === odd_sum)
            process.stdout.write(`${number} `);
    }
}