function shootForThrWin (input) {
    let targets = input[0].split(' ');
    let shotTarget = 0;
    for (let index=0; index < targets.length; index++) targets[index] = Number(targets[index]);
    for (let index = 1; index<input.length; index++) {
        if (input[index] == 'End') break;
        let targetIndex = Number(input[index]);
        if (targetIndex >= 0 && targetIndex<targets.length && targets[targetIndex] != -1) {
            shotTarget++;
            let currentTarget = targets[targetIndex];
            for (let count = 0; count< targets.length; count++) {
                if (count == targetIndex) {
                    targets[targetIndex] = -1;
                } else if (targets[count] > currentTarget && targets[count] != -1) {
                    targets[count] -= currentTarget;
                } else if (targets[count] <= currentTarget && targets[count] != -1) {
                    targets[count] += currentTarget;
                }
            }
        }
    }
    console.log(`Shot targets: ${shotTarget} -> ${targets.join(' ')}`);
}

shootForThrWin (["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
shootForThrWin (["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
;