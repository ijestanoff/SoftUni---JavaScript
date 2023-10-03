function oddOccurrences (input) {
    let arr = input.split(' ');
    let words = [];
    let numbers = [];
    for (let w of arr) {
        let word = w.toLowerCase();
        if (words.includes(word)) {
            numbers[words.indexOf(word)]++;
        } else {
            words.push(word);
            numbers.push(1);
        }
    }
    let output = '';
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            output += words[i] + ' ';
        }
    }
    console.log(output);
}

oddOccurrences ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences ('Cake IS SWEET is Soft CAKE sweet Food');