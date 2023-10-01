function readText (input) {
    let some_text = "";
    let count = 0;
    while (some_text != "Stop") {
        some_text = input[count++];
        if (some_text != "Stop")
            console.log(some_text);
    }   
}