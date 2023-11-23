function solve(clues) {
    let matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    let position = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 3], [1, 3], [2, 3], [3, 3], [3, 3], [3, 2], [3, 1], [3, 0], [3, 0], [2, 0], [1, 0], [0, 0]];
    for (let i = 0; i < clues.length; i++) {
        if (clues[i] == 1) matrix[position[i][0]][position[i][1]] = 4;
        if (clues[i] == 4) matrix[position[i][0]][position[i][1]] = 1;
    }
    return matrix;
}

console.log(solve([0, 0, 1, 2,
    0, 2, 0, 0,
    0, 3, 0, 0,
    0, 1, 0, 0]));