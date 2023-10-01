function sumOfOddNumbers (number) {
    let sum = 0;
    let count = 1;
    while (number>0) {
        console.log(count);
        sum += count;
        count += 2;
        number--;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);