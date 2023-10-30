function sequences(input) {
    let numbers = [];
    for (let part of input) {
        let items = JSON.parse(part);
        items.sort((a, b) => b - a);
        if (!numbers.length) numbers.push(items);
        else {
            let unique = true;
            for (let current of numbers) {
                if (JSON.stringify(items) == JSON.stringify(current)) unique = false;
            }
            if (unique) numbers.push(items);
        }
    }
    numbers.sort((a, b) => a.length - b.length);
    for (let part of numbers) console.log(`[${part.join(', ')}]`);
}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
console.log('----------');
sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);