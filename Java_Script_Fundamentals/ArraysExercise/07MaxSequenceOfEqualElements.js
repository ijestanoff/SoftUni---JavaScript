function maxSequenceOfEqualElements (array) {
    let maxNumber = 0;
    let maxElement = array[0];
    let currentNumber = 0;
    let currentElement = '';
    let isMaxRow = true;
    for (index = 0; index < array.length; index ++){
        if ((array[index] === maxElement) && isMaxRow) maxNumber++;
        else if (array[index] === currentElement) {
            currentNumber++;
            isMaxRow = false;
        }
        else {
            currentElement = array[index];
            currentNumber = 1;
            isMaxRow = false;
        }
        if (currentNumber > maxNumber) {
            maxElement = currentElement;
            maxNumber = currentNumber;
            currentElement = '';
            currentNumber = 0;
            isMaxRow = true;
        }
    }
    maxElement = String(maxElement) + ' '; 
    console.log(maxElement.repeat(maxNumber));
}

maxSequenceOfEqualElements ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements ([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements ([4, 4, 4, 4]);
maxSequenceOfEqualElements ([0, 1, 1, 5, 2, 2, 6, 3, 3]);
