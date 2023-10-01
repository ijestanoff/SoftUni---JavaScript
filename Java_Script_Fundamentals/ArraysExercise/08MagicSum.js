function magicSum (array, num) {
    for (index = 0; index < array.length - 1; index++){
        for (count = index + 1; count< array.length; count++){
            if (array[index] + array[count] == num) {
                console.log(`${array[index]} ${array[count]}`);
            }
        }
    }
}

magicSum ([1, 7, 6, 2, 19, 23], 8);
magicSum ([14, 20, 60, 13, 7, 19, 8], 27);
magicSum ([1, 2, 3, 4, 5, 6], 6);