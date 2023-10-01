function squareFrame (input) {
    let number = Number(input[0]);
    let symbol = "";
    for (let row=0; row<number; row++) {
        for (let column=0; column<number; column++){
            symbol = "-";
            if (column == 0 || column == number - 1) {
                symbol = "|";
                if (row == 0 || row == number - 1)
                    symbol = "+";
            }
            process.stdout.write(symbol);
            if (column != number - 1)
                process.stdout.write(" ");
        }
        if (row != number - 1)
            console.log("");
    }
}

//squareFrame (["7"]);