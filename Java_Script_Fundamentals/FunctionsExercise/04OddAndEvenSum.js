function oddAndEvenSum (input) {
    function oddEven (num) {
        let sumOdd = 0;
        let sumEven = 0;
        let number = String(num);
        for (let digit of number) {
            if (Number(digit) % 2 == 0) sumEven += Number(digit);
            else sumOdd += Number(digit);
        }
        return [sumOdd, sumEven];
    }

    const result = oddEven(input);
    console.log(`Odd sum = ${result[0]}, Even sum = ${result[1]}`);
}

oddAndEvenSum (1000435);
//oddAndEvenSum (3495892137259234);