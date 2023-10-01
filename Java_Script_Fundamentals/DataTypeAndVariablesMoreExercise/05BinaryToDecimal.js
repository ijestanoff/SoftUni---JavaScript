function binaryToDecimal (num) {
    num = String(num);
    let result = 0;
    for (count = 0; count < num.length ; count++){
        result += 2 ** count * Number(num[num.length - count - 1]);
    }
    console.log(result);
}

binaryToDecimal ('00001001');
binaryToDecimal ('11110000');
binaryToDecimal ('111111110');