function digitsWithWords (digit) {
    let number = 0;
    if (digit == "one") number = 1;
    else if (digit == "two") number = 2;
    else if (digit == "three") number = 3;
    else if (digit == "four") number = 4;
    else if (digit == "five") number = 5;
    else if (digit == "six") number = 6;
    else if (digit == "seven") number = 7;
    else if (digit == "eight") number = 8;
    else if (digit == "nine") number = 9;
    console.log(number);
}

digitsWithWords ('nine');
digitsWithWords ('two');
digitsWithWords ('zero');