function rotateArray (array) {
    let rotation = Number(array[array.length-1]);
    array.pop();
    for (let count = 0; count< rotation; count++){
        let lastElement = array[array.length - 1];
        for(let index= array.length -1 ; index > 0; index--){
            array[index] = array[index - 1];
        }
        array[0]=lastElement;
    }
    console.log(array.join(' '));
}

rotateArray (['1', '2', '3', '4', '2']);
rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15']);