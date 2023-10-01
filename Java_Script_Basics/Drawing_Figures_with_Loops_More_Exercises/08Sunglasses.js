function sunglasses(input) {
    let number = Number(input[0]);
    let row_string = "*".repeat(2 * number) + " ".repeat(number) + "*".repeat(2 * number);
    console.log(row_string);
    for (let row=0; row<number - 2; row++) {
        if (row == Math.floor((number - 1) / 2 - 1))
            symbol = "|";
        else
            symbol = " ";
        row_string = "*" + "/".repeat(2 * number - 2) + "*" + symbol.repeat(number) + "*" + "/".repeat(2 * number - 2) + "*";
        console.log(row_string);
    }
    row_string = "*".repeat(2 * number) + " ".repeat(number) + "*".repeat(2 * number);
    console.log(row_string);
}

sunglasses (["8"]);