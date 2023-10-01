function sequence2k(input){
    let end_number = Number(input[0]);
    let number = 1;
    while (end_number >= number) {
        console.log(number);
        number = number * 2 + 1;
    }
}