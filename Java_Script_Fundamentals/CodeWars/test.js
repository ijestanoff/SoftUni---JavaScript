function middlePermutation(arr) {
    const n = arr.length;
    let factorial = calculateFactorial(n);
    let middleIndex = Math.floor(factorial / 2);

    // Sort the array
    arr.sort((a, b) => a - b);

    let result = [];

    for (let i = n; i >= 1; i--) {
        factorial /= i;
        const index = Math.floor(middleIndex / factorial);
        middleIndex %= factorial;
        result.push(arr.splice(index, 1)[0]);
    }

    return result;
}

function calculateFactorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
const array = ['a', 'b', 'c', 'd'];
const result = middlePermutation(array);
console.log(result);