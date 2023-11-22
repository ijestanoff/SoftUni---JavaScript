function lastDigit(as) {
    arr = as.map(elm => BigInt(elm));

    const modulo = BigInt(10);

    // Modular exponentiation function
    const modularExponentiation = (base, exponent, modulo) => {
        let result = BigInt(1);
        base = base % modulo;

        while (exponent > 0n) {
            if (exponent % 2n === 1n) {
                result = (result * base) % modulo;
            }

            exponent = exponent >> 1n;
            base = (base * base) % modulo;
        }

        return result;
    };

    // Calculate the expression a1**(a2**(a3**( ... an))) and take the last digit using modulo 10
    const calculateExpression = (index) => {
        if (index === arr.length - 1) {
            return arr[index] % modulo; // Last number in the array
        }

        const innerResult = calculateExpression(index + 1);
        return modularExponentiation(arr[index], innerResult, modulo);
    };

    const result = calculateExpression(0);

    console.log(Number(result));
    return Number(result);
}

//console.log(solve([499942, 898102, 846073]));
// lastDigit([]         );// 1
lastDigit([0,0]      );// 1 // 0 ^ 0
lastDigit([0,0,0]    );// 0 // 0^(0 ^ 0) = 0^1 = 0
lastDigit([1,2]      );// 1
lastDigit([3,4,5]    );//, 1
lastDigit([4,3,6]    );//, 4
lastDigit([7,6,21]   );//, 1
lastDigit([12,30,21] );//, 6
lastDigit([2,2,2,0]  );//, 4
lastDigit([937640,767456,981242] );// 0
lastDigit([123232,694022,140249] );// 6
lastDigit([499942,898102,846073] );// 6

// var r1 = Math.floor(Math.random() * 100);
// var r2 = Math.floor(Math.random() * 10);

// Test.assertSimilar(lastDigit([]), 1);
// Test.assertSimilar(lastDigit([r1]), r1 % 10);
// Test.assertSimilar(lastDigit([r1, r2]), Math.pow(r1 % 10, r2) % 10);