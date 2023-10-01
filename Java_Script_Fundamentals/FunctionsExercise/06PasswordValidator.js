function passwordValidator (input) {
    let passLength = input.length;
    let isValid = true;
    if (passLength < 6 || passLength>10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    let isDigit = true;
    let isLetter = true;
    let isDigitOrLetter = true;
    let countDigits = 0;
    for (let index=0; index<passLength;index++){
        isDigit = true;
        if (input.charCodeAt(index) > 47 && input.charCodeAt(index) < 58) countDigits++;
        else isDigit = false;

        isLetter = true;
        if (input[index].toLowerCase() == input[index].toUpperCase()) isLetter = false;
        if (!(isDigit || isLetter)) isDigitOrLetter = false;
    }
    if (!isDigitOrLetter) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (countDigits<2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid) console.log("Password is valid");
}

passwordValidator ('qlogIn2');
//passwordValidator ('MyPass123');
//passwordValidator ('Pa$s$s');