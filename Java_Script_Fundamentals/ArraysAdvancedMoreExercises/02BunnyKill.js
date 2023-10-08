function bunnyKills(input) {
    function range(xx, yy, length, hight) {
        if (xx >= 0 && xx < length && yy >= 0 && yy < hight) return true;
        return false;
    }

    let snowDamage = 0;
    let snowCount = 0;
    let matrix = [];
    for (let i = 0; i < input.length - 1; i++) {
        matrix[i] = input[i].split(' ').map(num => Number(num));
    }
    let bombs = input[input.length - 1].split(' ');
    let l = matrix[0].length;
    let h = matrix.length
    for (let index = 0; index < bombs.length; index++) {
        let [y, x] = bombs[index].split(',').map(num => Number(num));
        let damage = matrix[y][x];
        if (damage > 0) {
            matrix[y][x] = 0;
            snowDamage += damage;
            snowCount++;
            if (range(x - 1, y - 1, l, h)) matrix[y - 1][x - 1] -= damage;
            if (range(x, y - 1, l, h)) matrix[y - 1][x] -= damage;
            if (range(x + 1, y - 1, l, h)) matrix[y - 1][x + 1] -= damage;
            if (range(x - 1, y, l, h)) matrix[y][x - 1] -= damage;
            if (range(x + 1, y, l, h)) matrix[y][x + 1] -= damage;
            if (range(x - 1, y + 1, l, h)) matrix[y + 1][x - 1] -= damage;
            if (range(x, y + 1, l, h)) matrix[y + 1][x] -= damage;
            if (range(x + 1, y + 1, l, h)) matrix[y + 1][x + 1] -= damage;
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > 0) {
                snowDamage += matrix[j][i];
                snowCount++;
            }
        }
    }
    console.log(`${snowDamage}\n${snowCount}`);
}

bunnyKills (
['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']);
bunnyKills (
['10 10 10',
'10 10 10',
'10 10 10',
'0,0']);
