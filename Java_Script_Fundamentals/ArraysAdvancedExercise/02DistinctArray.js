distinct = arr => console.log([...new Set(arr)].join(' '))

// function distinctArray (array) {
// for (let index = 0; index<array.length - 1; index++){
//     for (count = array.length - 1; count>index; count--){    
//         if (array[index] == array[count]){
//             array.splice(count,1);
//         }
//     }
// }
// (array.join(' '));
// }


distinct ([1, 2, 3, 4]);
distinct ([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct ([20, 8, 12, 13, 4, 4, 8, 5]);