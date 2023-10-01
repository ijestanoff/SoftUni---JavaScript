function commonElements (array1, array2) {
    for (let element of array1) {
        for (let secondElement of array2){
            if (element === secondElement) console.log(element);
        }
    }
}

commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);