function evenPowerOf2(input) {
    let number = Number(input[0]);
    for (let count = 0; count < number + 1; count+=2)
        console.log(2 ** count);
}

// evenPowerOf2 (["4"]);