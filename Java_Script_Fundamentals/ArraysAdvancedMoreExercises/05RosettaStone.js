function rosettaStone (input) {
    let width = Number(input[0]);
    let template = [];
    let matrix = [];
    for (let i = 1; i <= width; i++ ){
        template[i - 1] = input[i].split(' ').map(num => Number(num)); 
    }
    for (let i = width + 1; i<input.length; i++) {
        matrix[i - width - 1] = input[i].split(' ').map(num => Number(num)); 
    }
}

rosettaStone ([ '2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ]);
rosettaStone ([ '2',
'31 32',
'74 37',
'19 0 23 25',
'22 3 12 17',
'5 9 23 11',
'12 18 10 22' ]);
