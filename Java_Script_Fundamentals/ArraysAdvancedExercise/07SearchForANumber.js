function searchForANumber (input, command) {
    let len = input.length - command [0];
    let del = command [1];
    let number = command [2];
    for (let count = 0; count < len; count++) {
        input.pop();
    }
    for (let count=0; count<del; count++) {
        input.shift();
    }
    let cnt = 0;
    for (let element of input){
        if (element == number) cnt++;
    }
    console.log(`Number ${number} occurs ${cnt} times.`);
}

searchForANumber ([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber ([7, 1, 5, 8, 2, 7], [3, 1, 5]);