function sorting (input) {
    let sortArray = [];
    while (input.length > 0) {
        let maxElement = input[0]; 
        let maxIndex = 0;
        for (let index = 0; index < input.length; index++){
            if (input[index] > maxElement) {
                maxElement = input[index];
                maxIndex = index;
            }
        }
        sortArray.push(maxElement);
        input.splice(maxIndex,1);
        if (input.length == 0) break;
        let minElement = input[0];
        let minIndex = 0;
        for (let index = 0; index < input.length; index++){
            if (input[index] < minElement) {
                minElement = input[index];
                minIndex = index;
            }
        }
        sortArray.push(minElement);
        input.splice(minIndex,1);
    }
    console.log(sortArray.join(' '));
}

sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting ([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);