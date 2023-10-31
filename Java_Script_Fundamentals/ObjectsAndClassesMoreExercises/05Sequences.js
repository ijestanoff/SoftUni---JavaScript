function sequences(input) {
    let numbers = [];
    input.forEach(part => {
        let items = JSON.parse(part).sort((a, b) => b - a);
        if (!numbers.filter(x => items.join(',') == x.join(',')).length) numbers.push(items);
    });
    numbers.sort((a, b) => a.length - b.length).forEach(part => console.log(`[${part.join(', ')}]`));
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