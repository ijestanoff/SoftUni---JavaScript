function oddEvenPosition(input) {
    let odd_sum = 0;
    let odd_min = Number.MAX_VALUE;
    let odd_max = -Number.MAX_VALUE;
    let even_sum = 0;
    let even_min = Number.MAX_VALUE;
    let even_max = -Number.MAX_VALUE;
    let numbers = Number(input[0]);
    for (count=0; count<numbers; count++) {
        let current_number = Number(input[count+1]);
        if (count % 2 == 0) {
            odd_sum += current_number;
            if (current_number < odd_min)
                odd_min = current_number;
            if (current_number > odd_max)
                odd_max = current_number;
        } else {
            even_sum += current_number;
            if (current_number < even_min)
                even_min = current_number;
            if (current_number > even_max)
                even_max = current_number;
        }
    }
    console.log(`OddSum=${odd_sum.toFixed(2)},`);
    if (odd_min == Number.MAX_VALUE)
        console.log("OddMin=No,");
    else
        console.log(`OddMin=${odd_min.toFixed(2)},`);
    if (odd_max == -Number.MAX_VALUE)
        console.log("OddMax=No,");
    else 
        console.log(`OddMax=${odd_max.toFixed(2)},`);
    console.log(`EvenSum=${even_sum.toFixed(2)},`);
    if (even_min == Number.MAX_VALUE)
        console.log("EvenMin=No,");
    else
        console.log(`EvenMin=${even_min.toFixed(2)},`);
    if (even_max == -Number.MAX_VALUE)
        console.log("EvenMax=No");
    else
        console.log(`EvenMax=${even_max.toFixed(2)}`);
}

//oddEvenPosition ("[0]");