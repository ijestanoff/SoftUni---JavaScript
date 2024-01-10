function sumOfNumbers(n, m) {
    // let sum = 0;
    for (let i = +n, sum = 0; i <= +m; i++) sum += i;
    console.log(sum);
}

sumOfNumbers('1', '5');