function sumOfDigits (num) {
    num = String(num);
    let sum = 0;
    for (count = 0; count<num.length; count++) {
        sum += Number(num[count]);
    }
    console.log(sum);
}

sumOfDigits (245678);