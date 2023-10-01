function moving (input) {
    let width_space = Number(input[0]);
    let length_space = Number(input[1]);
    let height_space = Number(input[2]);
    let space = width_space * length_space * height_space;
    let command = "";
    let count = 3;
    while ((space > 0) && (command != "Done")) {
        command = input[count++];
        if (command != "Done")
            space -= Number(command);
    }
    if (space < 0)
        console.log(`No more free space! You need ${-space} Cubic meters more.`);
    else
        console.log(`${space} Cubic meters left.`);
}