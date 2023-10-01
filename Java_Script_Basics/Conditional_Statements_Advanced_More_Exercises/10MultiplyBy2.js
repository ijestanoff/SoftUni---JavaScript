function multiplyBy2 (input) {
    let result = 0;
    let number = 0;
    let count = 0;
    while (number >= 0) {
        number = Number(input[count++]);
        result = number * 2;
        if (number >= 0)
            console.log(`Result: ${result.toFixed(2)}`);
    }
    console.log("Negative number!");
}