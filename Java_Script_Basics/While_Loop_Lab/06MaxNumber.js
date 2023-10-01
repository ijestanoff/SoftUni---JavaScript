function maxNumber (input) {
    let great_number = -Number.MAX_SAFE_INTEGER;
    let count = 0;
    while (true) {
        let text_entered = input[count++];
        if (text_entered == "Stop") {
            console.log(great_number);
            break;
        }
        let number = Number(text_entered);
        if (number > great_number)
            great_number = number;
    }
}

maxNumber (["100",
"99",
"80",
"70",
"Stop"]);
