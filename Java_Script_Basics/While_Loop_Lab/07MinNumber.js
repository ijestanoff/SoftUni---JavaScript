function minNumber (input) {
    let low_number = Number.MAX_SAFE_INTEGER;
    let count = 0;
    while (true) {
        let text_entered = input[count++];
        if (text_entered == "Stop") {
            console.log(low_number);
            break;
        }
        let number = Number(text_entered);
        if (number < low_number)
            low_number = number;
    }
}