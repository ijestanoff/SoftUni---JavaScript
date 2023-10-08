function rosettaStone(input) {
    function symbol(num) {
        num = num % 27 + 64;
        if (num == 64) return ' ';
        return String.fromCharCode(num);
    }

    let tempHigh = Number(input[0]);
    let template = [];
    let matrix = [];
    for (let i = 1; i <= tempHigh; i++) {
        template[i - 1] = input[i].split(' ').map(num => Number(num));
    }
    let tempWidth = template[0].length;
    for (let i = tempHigh + 1; i < input.length; i++) {
        matrix[i - tempHigh - 1] = input[i].split(' ').map(num => Number(num));
    }
    let matHigh = matrix.length;
    let matWidth = matrix[0].length;
    if (tempHigh > matHigh) tempHigh = matHigh;
    if (tempWidth > matWidth) tempWidth = matWidth;
    let tempV = 0;
    let result = '';
    for (let i = 0; i < matWidth; i++) {
        let tempH = 0;
        for (let j = 0; j < matHigh; j++) {
            matrix[i][j] += template[tempV][tempH];
            result += symbol(matrix[i][j]);
            if ((++tempH) == tempWidth) tempH = 0;  
        }
        if ((++tempV) == tempHigh) tempV = 0;
    }
    console.log(result);
    console.log(symbol(0));
}

rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);
rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']);
