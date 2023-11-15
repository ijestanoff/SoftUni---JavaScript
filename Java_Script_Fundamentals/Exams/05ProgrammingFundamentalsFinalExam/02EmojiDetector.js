function emojiDetector(input) {
    let emojies = [];
    let regexNum = /(?<number>[0-9])/g;
    let regexEmoji = /(\*{2}|:{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = input[0].matchAll(regexNum);
    let [cool, count] = [1, 0];
    for (current of match) {
        cool *= current.groups.number;
    }
    match = input[0].matchAll(regexEmoji);
    for (let current of match) {
        let sum = 0;
        for (let symbol of current.groups.emoji) {
            sum += symbol.charCodeAt(0);
        }
        if (sum >= cool) emojies.push(current[0]);
        count++;
    }
    console.log(`Cool threshold: ${cool}\n${count} emojis found in the text. The cool ones are:`);
    emojies.forEach(emoji => console.log(emoji));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);