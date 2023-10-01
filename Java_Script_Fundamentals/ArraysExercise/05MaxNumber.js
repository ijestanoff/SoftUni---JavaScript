function maxNumber(array) {
    let maxNum = '';
    for (index = 0; index<array.length - 1; index++){
        let is_bigger = true;
        for (count = index+1; count<array.length; count++) {
            if (array[index] <= array[count]) is_bigger = false;
        }
        if (is_bigger) maxNum += String(array[index]) + " ";
    }
    maxNum += String(array[array.length - 1]);
    console.log(maxNum);
}

maxNumber ([1, 4, 3, 2]);
maxNumber ([14, 24, 3, 19, 15, 17]);
maxNumber ([41, 41, 34, 20]);
maxNumber ([27, 19, 42, 2, 13, 45, 48]);