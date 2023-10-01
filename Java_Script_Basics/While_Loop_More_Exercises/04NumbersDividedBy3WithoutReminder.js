function numbersDividedBy3WithoutReminder (input) {
    for (number=1; number<101; number++)
        if (number % 3 == 0)
            console.log(number);
}