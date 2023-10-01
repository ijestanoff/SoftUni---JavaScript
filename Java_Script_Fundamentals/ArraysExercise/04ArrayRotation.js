function arrayRotation (array, num) {
    let temp = 0;
    for (count = 0; count < num; count++){
        temp = array[0];
        for (index = 0; index < array.length - 1; index++){
            array[index] = array[index+1];
        }
        array[array.length - 1] = temp;
    }
    console.log(array.join(" "));
}

arrayRotation ([51, 47, 32, 61, 21], 2);
arrayRotation ([32, 21, 61, 1], 4);
arrayRotation ([2, 4, 15, 31], 5);