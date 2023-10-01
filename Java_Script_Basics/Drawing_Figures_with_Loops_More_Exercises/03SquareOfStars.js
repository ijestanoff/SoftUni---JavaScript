function squareOfStars(input) {
    let number = Number(input[0]);
    for (let row=0; row<number; row++) {
        for (let column=0; column<number; column++){
            process.stdout.write("*");
            if (column != number - 1)
                process.stdout.write(" ");
        }
        if (row != number - 1)
            console.log("");
    }
}

squareOfStars (["8"]);