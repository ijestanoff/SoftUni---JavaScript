function palindromeIntegers (input) {
    function palindrome (number) {
        let isPalindrome = false;
        let numString = String(number);
        let palindromeString = '';
        for (let digit= numString.length - 1; digit >=0; digit--){
            palindromeString += numString[digit];
        }
        if (palindromeString == numString) isPalindrome = true;
        return isPalindrome;
    }

    for (let part of input) {
        console.log(palindrome(part));
    }
}

palindromeIntegers ([123,323,421,121]);
palindromeIntegers ([32,2,232,1010]);