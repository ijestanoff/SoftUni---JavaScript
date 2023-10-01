function numberEndingIn7 (input) {
    for (let number = 1; number < 1000; number ++)
        if (number % 10 == 7)
            console.log(number);
}