function biggerHalf(array) {

    array.sort((a, b) => {
        return b - a;
    })
 
    console.log(array[0]);
}
 
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log(biggerHalf([4, 7, 2, 5]))
