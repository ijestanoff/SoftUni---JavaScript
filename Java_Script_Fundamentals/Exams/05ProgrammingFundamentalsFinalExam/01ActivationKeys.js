function activationKeys(input) {
    let key = input.shift();
    input.forEach(part => {
        if (part == 'Generate') console.log(`Your activation key is: ${key}`);
        let [command, item1, item2, endIndex] = part.split('>>>');
        if (command == 'Contains') {
            if (key.includes(item1)) console.log(`${key} contains ${item1}`);
            else console.log("Substring not found!");
        } else if (command == 'Flip') {
            let startIndex = +item2;
            let peace = key.slice(startIndex, endIndex);
            if (item1 == 'Upper') peace = peace.toUpperCase();
            else peace = peace.toLowerCase();
            key = key.slice(0, startIndex) + peace + key.slice(endIndex);
            console.log(key);
        } else if (command == 'Slice') {
            let [startIndex, endIndex] = [+item1, +item2];
            key = key.slice(0, startIndex) + key.slice(endIndex);
            console.log(key);
        }
    });
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
);