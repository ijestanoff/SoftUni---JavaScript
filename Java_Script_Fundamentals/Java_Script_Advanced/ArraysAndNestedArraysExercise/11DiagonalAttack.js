function diagonalAttack (input) {
    let matrix = [];
    let firstDiag = 0;
    let secondDiag = 0;
    let side = input.length;
    for (let index = 0; index< side; index++ ){
        matrix [index] = input[index].split(' ');
    }
    for (let index = 0; index < side; index++){
        firstDiag += Number(matrix[index][index]);
        secondDiag += Number(matrix[side - index - 1][index]);
    }
    if (firstDiag == secondDiag) {
        for (let row = 0; row < side; row++) {
            for (let column = 0; column < side; column++){
                if (row!=column && row!=side - column - 1)  {
                    matrix[row][column] = firstDiag;
                }
            }
        }
    } 
    for (let index=0; index<side; index++) {
        console.log(matrix[index].join(' '));
    }
}

diagonalAttack (['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);
diagonalAttack (['1 1 1',
                '1 1 1',
                '1 1 0']);