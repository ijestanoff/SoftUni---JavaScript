function nonDecreasingSubset (array) {
    let currentBiggest = array[0];
    let row = '';
    for (let index = 0; index<array.length; index++) {
        if (array[index] >= currentBiggest) {
            currentBiggest = array[index];
            row += currentBiggest + ' ';
        }
    }
    console.log(row);
}

nonDecreasingSubset ([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset ([ 1, 2, 3, 4]);
nonDecreasingSubset ([ 20, 3, 2, 15, 6, 1]);