function streamOfLetters(input) {
    let command = "";
    let text_word = "";
    let n_symbol = false;
    let c_symbol = false;
    let o_symbol = false;
    let count = 0;
    while (command != "End") {
        command = input[count++];
        if (command != "End") {
            if  (!c_symbol && command === "c")
                c_symbol = true;
            else if (!n_symbol && command == "n")
                n_symbol = true;
            else if (!o_symbol && command == "o")
                o_symbol = true;
            else if (("A" <= command && command <= "Z") || ("a" <= command && command <= "z"))
                text_word += command;
            if (c_symbol && n_symbol && o_symbol) {
                process.stdout.write(`${text_word} `);
                text_word = "";
                c_symbol = false;
                o_symbol = false;
                n_symbol = false;
            }
        }
    }
}