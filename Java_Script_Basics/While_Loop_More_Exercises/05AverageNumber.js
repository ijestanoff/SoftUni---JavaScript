function averageNumbers (input) {
    let sum_numbers = 0;
    let number = Number(input[0]);
    let count = 1;
    for (cnt =0; cnt<number; cnt++) {
        let current_number = Number(input[count++]);
        sum_numbers += current_number;
    }
    console.log(`${(sum_numbers / number).toFixed(2)}`);
}