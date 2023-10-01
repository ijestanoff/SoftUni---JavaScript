function perfectNumber (number) {
    let isPerfect = true;
    let sumDivisor = 0;
    if (number > 0 && number % 1 ==0) {
        for (let num = 1; num <= number/2; num++ ){
            if (number % num == 0) {
                sumDivisor += num;
            }
        }
        if (sumDivisor != number) isPerfect = false;
    } else {
        isPerfect = false;
    }
    if (isPerfect) console.log('We have a perfect number!');
    else console.log('It\'s not so perfect.');
}

perfectNumber (6);
perfectNumber (28);
perfectNumber (1236498);