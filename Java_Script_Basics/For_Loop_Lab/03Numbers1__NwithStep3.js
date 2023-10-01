function numbers1toNstep3(input) {
    let number = Number(input[0]);
    for (let count=1; count < number+1; count+=3)
        console.log(count);
}

// numbers1toNstep3(['20']);