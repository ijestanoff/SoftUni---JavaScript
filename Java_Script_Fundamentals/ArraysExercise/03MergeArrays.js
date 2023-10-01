function mergeArrays (array1, array2) {
    let array3 = [];
    for (index = 0; index < array1.length; index++){
        if (index % 2 == 0) {
            array3[index] = String(Number(array1[index]) + Number(array2[index]));
        } else {
            array3[index] = array1[index] + array2[index];
        }
    }
    console.log(array3.join(" - "));
}

mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
// mergeArrays (['13', '12312', '5', '77', '4'],
// ['22', '333', '5', '122', '44']);