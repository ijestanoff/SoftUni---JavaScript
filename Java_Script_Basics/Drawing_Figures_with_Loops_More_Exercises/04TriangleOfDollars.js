function triangleOfDolars (input) {
    let number = Number(input[0]);
    for (let row=0; row<number; row++) {
        for (let column=0; column<row + 1; column++){
            process.stdout.write("$");
            if (column != row)
                process.stdout.write(" ");
        }
        if (row != number - 1)
            console.log("");
    }
}

triangleOfDolars (["7"]);