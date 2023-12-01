function encodeRailFenceCipher(string, numberRails) {
    let [rails, count, direction] = [[], 0, 0];
    for (let i = 0; i < numberRails; i++) rails.push([]);
    string.split('').forEach(symbol => {
        rails[count].push(symbol);
        direction ? count-- : count++;
        if (count == numberRails) {
            direction = 1;
            count -= 2;
        }
        if (count == -1) {
            direction = 0;
            count = 1;
        }
    });
    return rails.reduce((acc, val) => acc + val.join(''), '');
}

function decodeRailFenceCipher(string, numberRails) {
    let [rails, count, direction] = [[], 0, 0];
    for (let i = 0; i < numberRails; i++) rails.push([]);
    string.split('').forEach(symbol => {
        rails[count].push(symbol);
        direction ? count-- : count++;
        if (count == numberRails) {
            direction = 1;
            count -= 2;
        }
        if (count == -1) {
            direction = 0;
            count = 1;
        }
    });
    let i = 0
    rails.forEach((rail, inx) => {
        rails[inx] = string.slice(i, i + rail.length).split('');
        i += rail.length;
    });
    [direction, count, output] = [0, 0, ''];
    while (output.length < string.length) {
        output += rails[count].shift();
        direction ? count-- : count++;
        if (count == numberRails) {
            direction = 1;
            count -= 2;
        }
        if (count == -1) {
            direction = 0;
            count = 1;
        }
    }
    return output;
}

//console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)); // "WEAREDISCOVEREDFLEEATONCE"
console.log(encodeRailFenceCipher("Hello, World!", 3));// "Hoo!el,Wrdl l"

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C
//     A       I       V       D       E       N    
