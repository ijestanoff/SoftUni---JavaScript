function bombNumbers (array, special) {
    let bombNumber = special[0];
    let bombPower = special[1];
    let startDet = 0;
    let endDet = 0;
    let sum = 0;
    for (index = 0; index<array.length; index++) {
        if (array[index] == bombNumber) {
            startDet = index - bombPower;
            if (startDet < 0) startDet = 0;
            endDet = index + bombPower;
            if (endDet > array.length - 1) endDet = array.length - 1;
            for (count = startDet; count <= endDet; count++) {
                array[count] = 0;
            }
        }
    }
    for (index=0; index<array.length; index++) {
        sum += array[index];
    }
    console.log(sum);
}

bombNumbers ([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers ([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers ([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers ([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);