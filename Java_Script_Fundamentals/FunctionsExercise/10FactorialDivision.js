function factorialDivision (first, second) {
    let factorial1 = 1;
    let factorial2 = 1;
    for (let count = 1; count<=first; count++) {
        factorial1 *= count;
    }
    for (let count = 1; count<=second; count++) {
        factorial2 *= count;
    }
    console.log((factorial1/factorial2).toFixed(2));
}

factorialDivision (5,2);
factorialDivision (6,2);