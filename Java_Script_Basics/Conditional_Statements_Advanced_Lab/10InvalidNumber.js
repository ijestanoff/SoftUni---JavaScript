function invalidNumber (input) {
    let number = Number(input[0]);
    if (!( ( (number >= 100) & (number <= 200) ) | (number === 0) ) )     //not (100 <= number <= 200 or number == 0):
        console.log("invalid");
}