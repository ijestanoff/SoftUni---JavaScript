function primeNumberChecker (num) {
    let isPrime = true;
    for (count = 2; count < num; count++) {
        if (num % count == 0) isPrime = false;
    }
    console.log(isPrime);
}

primeNumberChecker (7);
primeNumberChecker (8);
primeNumberChecker (81);