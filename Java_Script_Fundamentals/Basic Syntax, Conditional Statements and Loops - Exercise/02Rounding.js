function rounding(number, precision) {
    if (precision > 15) precision = 15;
    let multiplier = Math.pow(10, precision);
    number = Math.round(number * multiplier) / multiplier;
    console.log(number);
}

rounding (3.112342341234, 3);