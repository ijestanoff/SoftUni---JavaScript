function lettersChangeNumbers (input) {
    let words = input.split(' ');
    let sum = 0;
    for (let word of words) {
        let number = Number(word.slice(1,word.length - 1));
        let symbol = word[0];
        let symNumber = 0;
        let middleSum = 0;
        if (symbol >= 'A' && symbol <= 'Z') {
            symNumber = symbol.charCodeAt(0) - 64;
            middleSum = number / symNumber;
        } else if (symbol >= 'a' && symbol <= 'z') {
            symNumber = symbol.charCodeAt(0) - 96;
            middleSum = number * symNumber;
        }
        symbol = word[word.length-1];
        if (symbol >= 'A' && symbol <= 'Z') {
            symNumber = symbol.charCodeAt(0) - 64;
            middleSum -= symNumber;
        } else if (symbol >= 'a' && symbol <= 'z') {
            symNumber = symbol.charCodeAt(0) - 96;
            middleSum += symNumber;
        }
        sum += middleSum;
    }
    console.log(sum.toFixed(2));
}

lettersChangeNumbers ('A12b s17G');
lettersChangeNumbers ('P34562Z q2576f H456z');
lettersChangeNumbers ('a1A');
