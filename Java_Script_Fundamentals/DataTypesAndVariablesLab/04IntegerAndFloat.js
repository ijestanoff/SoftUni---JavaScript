function integerAndFloat (num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let typeOf = ''
    if (Math.abs(sum-Math.floor(sum) > 0)) typeOf = "Float"; 
    else typeOf = 'Integer';
    console.log(`${sum} - ${typeOf}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);