function sumEvenNumber (array) {
    let sum = 0;
    let current_number = 0;
    for (count = 0; count < array.length; count++) {
        current_number = Number(array[count]);
        if (current_number % 2 == 0) sum += current_number;
    }
    console.log(sum);
}

sumEvenNumber (['1','2','3','4','5','6']);
sumEvenNumber (['3','5','7','9']);
sumEvenNumber (['2','4','6','8','10']);