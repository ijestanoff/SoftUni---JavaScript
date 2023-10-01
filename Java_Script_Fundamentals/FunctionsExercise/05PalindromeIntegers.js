function palindromeIntegers (input) {
    function palin (number) {
        let isPalindrome = false;
        let numString = String(number);
        let palindromeString = '';
        for (let digit= numString.length - 1; digit >=0; digit--){
            palindromeString += numString[digit];
        }
        if (palindromeString == numString) isPalindrome = true;
        return isPalindrome;
    }

    for (let index=0; index<input.length;index++) {
        console.log(palin(input[index]));
    }
}

palindromeIntegers ([123,323,421,121]);
palindromeIntegers ([32,2,232,1010]);