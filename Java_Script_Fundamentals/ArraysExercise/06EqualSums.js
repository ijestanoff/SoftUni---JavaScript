function equalSums (array) {
    let maxNumber = array.length;
    for (index = 0; index< maxNumber; index++) {
        let leftSum = 0;
        let rightSum = 0;
        for (left = 0; left<index; left++){
            leftSum += array[left];
        }
        for (right = maxNumber - 1; right > index; right--) {
            rightSum += array[right];
        }
        if (leftSum == rightSum) {
            console.log(index);
            return
        }
    }
    console.log('no');
}

equalSums ([1, 2, 3, 3]);
equalSums ([1, 2]);
equalSums ([1]);
equalSums ([1, 2, 3]);
//equalSums ([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);