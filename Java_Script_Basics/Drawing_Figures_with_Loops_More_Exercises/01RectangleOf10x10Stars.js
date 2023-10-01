function rectangleOf10x10Stars(input) {
    for (let row=0; row<10; row++) {
        for (let column=0; column<10; column++)
            process.stdout.write("*");
        console.log("");
    }
}

rectangleOf10x10Stars();