function distinctArray (array) {
    for (let index = 0; index<array.length - 1; index++){
        for (count = array.length - 1; count>index; count--){    
            if (array[index] == array[count]){
                array.splice(count,1);
            }
        }
    }
    console.log(array.join(' '));
}

//distinctArray ([1, 2, 3, 4]);
//distinctArray ([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray ([20, 8, 12, 13, 4, 4, 8, 5]);