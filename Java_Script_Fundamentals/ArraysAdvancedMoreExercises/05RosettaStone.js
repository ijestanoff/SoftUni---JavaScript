function rosettaStone(input) {
    function symbol(num) {
        num = num % 27 + 64;
        if (num == 64) return ' ';
        return String.fromCharCode(num);
    }

    let templateHigh = Number(input[0]);
    let template = [];
    let matrix = [];
    for (let i = 1; i <= templateHigh; i++) {
        template[i - 1] = input[i].split(' ').map(num => Number(num));
    }
    let templateWidth = template[0].length;
    for (let i = templateHigh + 1; i < input.length; i++) {
        matrix[i - templateHigh - 1] = input[i].split(' ').map(num => Number(num));
    }
    let templateVer = 0;
    let result = '';
    for (let i = 0; i < matrix.length; i++) {
        let templateHor = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] += template[templateVer][templateHor];
            result += symbol(matrix[i][j]);
            if (++templateHor == templateWidth) templateHor = 0;  
        }
        if (++templateVer == templateHigh) templateVer = 0;
    }
    console.log(result);
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
