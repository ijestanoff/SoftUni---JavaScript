function biggestOf3Number (num1, num2, num3) {
    let max = num1;
    if (num2 > max) max = num2;
    if (num3 > max) max = num3;
    console.log(max);
}

biggestOf3Number (-2,
    7,
    3);

biggestOf3Number (130,
    5,
    99);