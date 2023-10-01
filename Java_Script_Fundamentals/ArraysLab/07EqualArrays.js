function equalArrays (array1, array2) {
    let sum = 0;
    let diffIndex = -1;
    for (count = 0; count<array1.length; count++){
        array1[count] = Number(array1[count]);
        array2[count] = Number(array2[count]);
        if ((array1[count] != array2[count]) && (diffIndex == -1)) diffIndex = count;
        sum += array1[count];
    }
    if (diffIndex != -1) {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays (['10','20','30'], ['10','20','30']);
equalArrays (['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays (['1'], ['10']);