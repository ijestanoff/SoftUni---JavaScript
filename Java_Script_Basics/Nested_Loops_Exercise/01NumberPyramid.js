function numberPyramid (input) {
    let number = Number(input[0]);
    let count = 0;
    let column = 0;
    let row = 0;
    while (count < number) {
        row += 1;
        while (column < row) {
            count += 1;
            column += 1;
            process.stdout.write(`${count} `);
            if (count == number)
                break;
        }
        console.log("");
        column = 0;
    }
}