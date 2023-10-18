function GCD (num1,num2) {
    maxDivisor = 1;
    for (let i=2; i<= Math.min(num1,num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) maxDivisor = i;
    }
    console.log(maxDivisor);
}

GCD (15, 5);
GCD (2154, 458);