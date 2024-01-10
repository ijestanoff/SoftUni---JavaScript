function mathOperations(a, b, c) {
    if (c == '+') console.log(a + b);
    else if (c == '-') console.log(a - b);
    else if (c == '*') console.log(a * b);
    else if (c == '/') console.log(a / b);
    else if (c == '**') console.log(a ** b);
    else if (c == '%') console.log(a % b);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');