function numberModification (input) {
    function average (num) {
        let sum = 0;
        for (let index=0; index<num.length; index++){
            sum += Number(num[index]);
        }
        return sum / num.length;
    }
    let numberStr = String(input);
    while (average(numberStr) <= 5) {
        numberStr += '9';
    }
    console.log(numberStr);
}

numberModification (101);
numberModification (5835);