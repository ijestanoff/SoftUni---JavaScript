function ticTacToe(mov) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let firstPlay = true;
    let playerOwin = false;
    let playerXwin = false;
    let count = 9;
    while (mov.length && count) {
        while (mov.length && count) {
            let [x, y] = mov.shift().split(' ');
            if (!board[x][y]) {
                count--;
                if (firstPlay) {
                    board[x][y] = 'X';
                    firstPlay = false;
                }
                else {
                    board[x][y] = 'O';
                    firstPlay = true;
                }
                break;
            } else {
                console.log('This place is already taken. Please choose another!');
            }
        }
        for (let i = 0; i < 3; i++) {
            let resultH = board[i].join('');
            let resultV = board[0][i] + board[1][i] + board[2][i];
            let resultX1 = board[0][0] + board[1][1] + board[2][2];
            let resultX2 = board[0][2] + board[1][1] + board[2][0];
            if (resultH == 'XXX' || resultV == 'XXX' || resultX1 == 'XXX' || resultX2 == 'XXX') {
                playerXwin = true;
                break;
            }
            if (resultH == 'OOO' || resultV == 'OOO' || resultX1 == 'OOO' || resultX2 == 'OOO') {
                playerOwin = true;
                break;
            }
        }
        if (playerOwin || playerXwin) break;
    }
    if (playerXwin) console.log('Player X wins!');
    else if (playerOwin) console.log('Player O wins!');
    else console.log('The game ended! Nobody wins :(');
    console.log(`${board[0].join('	')}\n${board[1].join('	')}\n${board[2].join('	')}`);
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);
console.log('=====================');
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);
console.log('=====================');
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);