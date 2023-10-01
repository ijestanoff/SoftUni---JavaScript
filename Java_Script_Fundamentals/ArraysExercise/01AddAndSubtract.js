function addAndSubtract (array) {
    let sum_origin = 0;
    let sum_new = 0;
    for (let count = 0; count < array.length; count++) {
        sum_origin += array[count];
        if (array[count] % 2== 0) array[count] += count;
        else array[count] -= count;
        sum_new += array[count];
    }
    console.log(`[ ${array.join(", ")} ]`);
    console.log(sum_origin);
    console.log(sum_new);
}

addAndSubtract ([5, 15, 23, 56, 35]);
//addAndSubtract ([-5, 11, 3, 0, 2]);