function equalNeighbors(input) {
    let find = 0;
    let matrixHeight = input.length;
    let matrixLength = input[0].length;
    for (let i = 0; i < matrixHeight; i++) {
        for (let j = 0; j < matrixLength; j++) {
            if (i + 1 < matrixHeight) if (input[i][j] === input[i + 1][j]) find++;
            if (input[i][j] === input[i][j + 1]) find++;
        }
    }
    return find;
}

console.log(equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]));
// console.log(equalNeighbors ([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]));
// console.log(equalNeighbors ([['test', 'yo', 'yo', 'ho'],
// ['well', 'done', 'no', '6'],
// ['not', 'done', 'yet', '5']]));