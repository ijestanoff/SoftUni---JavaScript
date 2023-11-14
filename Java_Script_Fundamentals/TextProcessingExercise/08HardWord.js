function hardWord(array) {
    let letter = array[0].split(' ');
    let words = array[1];
    for (let word of words) {
        let repeated = '_'.repeat(word.length);
        for (let index = 0; index < letter.length - 1; index++) {
            let long = repeated.length;
            if (letter[index].startsWith(repeated) && letter[index][long] != '_') {
                let symbol = '';
                if (letter[index].length > long) {
                    symbol = letter[index][long];
                }
                letter[index] = word + symbol;
            }
        }
    }
    console.log(letter.join(' '));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);