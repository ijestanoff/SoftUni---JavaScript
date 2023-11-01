function oddOccurrences(input) {
    let words = {};
    input.split(' ').forEach(word => {
        word = word.toLowerCase() + ' ';
        if (word in words) words[word]++;
        else words[word] = 1;
    });
    let output = '';
    Object.entries(words).forEach(tuple => {
        if (tuple[1] % 2 != 0) output += tuple[0];
    });
    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');