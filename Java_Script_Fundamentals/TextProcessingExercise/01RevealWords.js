function revealWords (string1, string2) {
    let words1 = string1.split(', ');
    let words2 = string2.split(' ');
    for (let word of words1) {
        let asterix = '*'.repeat(word.length);
        words2[words2.indexOf(asterix)] = word;
    }
    console.log(words2.join(' '));
}

revealWords ('great', 'softuni is ***** place for learning new programming languages');
revealWords ('great, learning', 'softuni is ***** place for ******** new programming languages');