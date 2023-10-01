function cristmasTree(input) {
    let number = Number(input[0]);
    for (row=1; row<number + 2; row++){
        let row_string = " ".repeat(number - row + 1) + "*".repeat(row - 1) + " |"
        if (row > 1)
            row_string += " " + "*".repeat(row - 1);
        console.log(row_string);
    }
}