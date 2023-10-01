function printDNA (number) {
    let sequence = 'ATCGTTAGGG';
    let dnaRow = 1;
    for (let index = 0; index<number*2; index+=2) {
        let count = index % 10;
        if (dnaRow == 1) {
            console.log(`**${sequence[count]}${sequence[count+1]}**`);
        } else if (dnaRow == 2 || dnaRow == 4) {
            console.log(`*${sequence[count]}--${sequence[count+1]}*`);
        } else if (dnaRow == 3) {
            console.log(`${sequence[count]}----${sequence[count+1]}`);
        } 
        if (dnaRow == 4) dnaRow = 1;
        else dnaRow++;
    }
}

//printDNA (4);
printDNA (10);
