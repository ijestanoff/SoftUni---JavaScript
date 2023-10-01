function numbersDividibleBy9 (input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum_numbers = 0;
    for (let i=startNumber; i < endNumber + 1; i++ ){
        if (i % 9 == 0) 
            sum_numbers += i;
    }
    console.log(`The sum: ${sum_numbers}`);
    for (let i=startNumber; i < endNumber + 1; i++ ){
        if (i % 9 == 0) 
            console.log(i);
    }
}

// numbersDividibleBy9 (["100", "200"]);