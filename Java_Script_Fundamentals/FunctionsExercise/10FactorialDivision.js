function factorialDivision(first, second) {
    function factorial(number) {
        let result = 1;
        for (let count = 1; count <= number; count++) {
            result *= count;
        }
        return result;
    }
    console.log((factorial(first) / factorial(second)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);