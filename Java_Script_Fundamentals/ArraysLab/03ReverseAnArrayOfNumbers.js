function reverseArray (num, list) {
    let new_array = [];
    for (count=1; count<=num; count++) {
        new_array.push(list[num-count]);
    }
    console.log(new_array.join(' '));
}

reverseArray (3, [10, 20, 30, 40, 50]);
reverseArray (4, [-1, 20, 99, 5]);
reverseArray (2, [66, 43, 75, 89, 47]);