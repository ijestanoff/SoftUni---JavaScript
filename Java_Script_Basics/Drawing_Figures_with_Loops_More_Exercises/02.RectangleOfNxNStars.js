function rectangleOfNxNStars(input) {
    let number = Number(input[0]);
    for (let row=0; row<number; row++) {
        for (let column=0; column<number; column++)
            process.stdout.write("*");
        console.log("");
    }
}

rectangleOfNxNStars (["6"]);