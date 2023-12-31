function emojiDetector([input]) {
    let [emojies, cnt] = [[], 0];
    let pattern = /(\*{2}|:{2})([A-Z][a-z]{2,})\1/g;
    let cool = input.match(/\d/g).reduce((acc, val) => acc * val);
    for (let match of input.matchAll(pattern)) {
        let sum = match[2].split('').reduce((acc, val) => acc + val.charCodeAt(), 0);
        if (sum >= cool) emojies.push(match[0]);
        cnt++;
    }
    console.log(`Cool threshold: ${cool}\n${cnt} emojis found in the text. The cool ones are:\n${emojies.join('\n')}`);
}

function detectEmojis([input]) {
    let coolThreshold = input.match(/\d/g).map(Number).reduce((a, b) => a * b);
    //let validEmojiPattern = /([:*]{2})[A-Z][a-z]{2,}\1/g;
    let validEmojiPattern = /(\*{2}|:{2})([A-Z][a-z]{2,})\1/g;
    let validEmojis = input.match(validEmojiPattern);
    let validEmojisCount = validEmojis === null ? 0 : validEmojis.length;
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojisCount} emojis found in the text. The cool ones are:`);
    if (validEmojisCount > 0) {
        validEmojis.forEach(emoji => {
            let currentAsicsCodesSum = emoji.match(/[A-Za-z]/g).map(a => a = a.charCodeAt()).reduce((a, b) => a + b);
            if (currentAsicsCodesSum > coolThreshold) {
                console.log(emoji);
            }
        });
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);