function password (input) {
    let input_user = input[0];
    let input_pass = input[1];
    let entered_pass = "";
    let count = 2;
    while (entered_pass != input_pass)
        entered_pass = input[count++];
    console.log(`Welcome ${input_user}!`); 
}