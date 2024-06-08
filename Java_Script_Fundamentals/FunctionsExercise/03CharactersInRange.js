function charactersInRange(a, b) {
    function range(x, y) {
        //let charString = '';
        let charString = [];
        let startIndex = x.charCodeAt(0);
        let endIndex = y.charCodeAt(0);
        if (startIndex > endIndex) {
            [startIndex, endIndex] = [endIndex, startIndex];
        }
        for (i = startIndex + 1; i < endIndex; i++) {
            let symbol = String.fromCharCode(i);
            //charString += symbol + ' ';
            charString.push(symbol);
        }
        return charString.join(' ');
    }
    console.log(range(a, b));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
