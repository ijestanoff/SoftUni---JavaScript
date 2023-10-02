function stringSubstring (word, text) {
    let words = text.split(' ');
    for (let current of words) {
        if (current.toLowerCase() == word.toLowerCase()) {
            console.log(word);
            return;
        } 
    }
    console.log(`${word} not found!`);
}

stringSubstring ('javascript', 'JavaScript is the best programming language');
stringSubstring ('python', 'JavaScript is the best programming language');