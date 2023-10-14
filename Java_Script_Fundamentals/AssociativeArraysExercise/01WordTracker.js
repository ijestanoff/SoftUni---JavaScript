function wordTracker (array) {
    let words = array[0].split(' ');
    let occurrences = {};
    for (let word of words) {
        occurrences[word] = 0;
        for (let i = 1; i<array.length; i++) {
            if (word == array[i]) {
                occurrences[word] += 1;
            }
        }
    }
    const keyValueArr = Object.entries(occurrences);
    keyValueArr.sort((a,b) => b[1] - a[1]);
    const occurrences2 = Object.fromEntries(keyValueArr);
    
    for (let [key,val] of Object.entries(occurrences2)) {
        console.log(`${key} - ${val}`);
    }
}

wordTracker ([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
wordTracker ([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);