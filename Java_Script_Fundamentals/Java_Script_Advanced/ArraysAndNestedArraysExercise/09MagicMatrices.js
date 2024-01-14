function magicMatrices (input) {
    let side = input.length;
    let isMagic = true;
    let sum = -1;
    for (let row = 0; row<side; row++){
        let currentSum = 0;
        for (let index = 0; index<side; index++){
            currentSum += input[row][index];
        }
        if (sum == -1) {
            sum = currentSum;
        } else {
            if (currentSum != sum) {
                isMagic = false;
            }
        }
    } 
    for (let column = 0; column<side; column++){
        let currentSum = 0;
        for (let index = 0; index<side; index++){
            currentSum += input[index][column];
        }
        if (currentSum != sum) {
            isMagic = false;
        }
    } 
    console.log(isMagic);
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));