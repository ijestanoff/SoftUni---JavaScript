function sumNumbers (input) {
    let first_number = Number(input[0]);
    let total_sum = 0;
    let number = 0;
    let count = 1;
    while (total_sum < first_number) {
        number = Number(input[count++]);
        total_sum += number;
    }
    console.log(total_sum);    
}