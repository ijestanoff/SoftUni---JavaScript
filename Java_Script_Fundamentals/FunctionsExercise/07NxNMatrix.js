function nxNMatrix(number) {
    for (let i = 0; i < number; i++) {
        let row = '';
        for (let j = 0; j < number; j++) {
            row += number + ' ';
        }
        console.log(row);
    }
}

nxNMatrix(3);
nxNMatrix(7);