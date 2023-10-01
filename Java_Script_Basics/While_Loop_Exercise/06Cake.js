function cake (input) {
    let cake_width = Number(input[0]);
    let cake_length = Number(input[1]);
    let number_of_peaces = cake_length * cake_width;
    let command = "";
    let count = 2;
    while ((number_of_peaces > 0) && (command != "STOP")) {
        command = input[count++];
        if (command != "STOP")
            number_of_peaces -= Number(command);
    }
    if (number_of_peaces < 0)
        console.log(`No more cake left! You need ${-number_of_peaces} pieces more.`);
    else
        console.log(`${number_of_peaces} pieces are left.`);
}