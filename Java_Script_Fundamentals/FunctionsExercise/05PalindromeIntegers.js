function palindromeIntegers(input) {
    let palindrome = (number) => {
        if (String(number) == String(number).split('').reverse().join('')) return true;
        return false;
    }
    console.log(input.map(palindrome).join('\n'));
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);