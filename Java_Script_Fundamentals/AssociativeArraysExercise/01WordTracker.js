function wordTracker(array) {
    let occurrences = {};
    array.shift().split(' ').forEach(word => {
        occurrences[word] = 0;
        array.forEach(part => { 
            if (word == part) occurrences[word] ++; 
        });
    });
    Object.entries(occurrences).sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} - ${x[1]}`));
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log('----------');
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);