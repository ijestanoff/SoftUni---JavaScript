function specialNumbers(input) {
    let num = Number(input[0]);
    let output = ` `;
    for (let row = 1111; row <= 9999; row++) {
        let rowNumString = `${row} `;
        for (let col = 0; col < rowNumString.length - 1; col++) {
            let curNum = Number(rowNumString[col]);
            if (num % curNum !== 0) {
                rowNumString = ``;
                break;
            }
        }
        output += rowNumString;
    }
    console.log(output);
}

specialNumbers (["3"])