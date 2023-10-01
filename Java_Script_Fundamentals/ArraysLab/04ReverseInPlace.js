function reverseInPlace (array) {
    let new_array = [];
    for (let count=1; count<=array.length; count++) {
        new_array.push(array[array.length - count]);
    }
    console.log(new_array.join(' '));
}

reverseInPlace (['a', 'b', 'c', 'd', 'e']);
reverseInPlace (['abc', 'def', 'hig', 'klm', 'nop']);