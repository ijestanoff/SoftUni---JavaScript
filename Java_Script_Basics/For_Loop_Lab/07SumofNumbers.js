function sumOfNumbers (input) {
    let string_number = input[0];
    let sum_total = 0;
    let number = 0;
    for (let count = 0; count < string_number.length; count++){
        number = Number(string_number[count]);
        sum_total += number;
    }
    console.log(`The sum of the digits is:${sum_total}`);
}   

// sumOfNumbers (["1234"]);