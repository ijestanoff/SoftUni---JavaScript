function condenseArrayToNumber (array) {
    while (array.length>1) {
        for (count = 0; count < array.length - 1; count++){
            array[count] += array[count+1];
        }
        array.pop();
    }
    console.log(array[0]);
}

condenseArrayToNumber ([2,10,3]);
condenseArrayToNumber ([5,0,4,1,2]);
condenseArrayToNumber ([1]);
