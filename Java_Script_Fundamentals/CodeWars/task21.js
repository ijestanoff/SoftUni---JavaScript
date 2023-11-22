function solve(cells, generations) {
    let x = cells[0].length;
    let next = [];
    next = cells.map(Array => [...Array]);
    for (let i = 0; i < generations; i++) {
        next.push(Array(x).fill(0));
        next.unshift(Array(x).fill(0));
    }
    for (let i = 0; i < generations; i++) {
        next = next.map(row => [0, ...row, 0]);
    }
    cells = next.map(Array => [...Array]);
    for (let gen = 0; gen < generations; gen++) {
        for (let r = 1; r < next[0].length - 1; r++) {
            for (let c = 1; c < next.length - 1; c++) {
                let neib = next[c - 1][r - 1] + next[c - 1][r] + next[c - 1][r + 1] + next[c][r - 1] + next[c][r + 1] + next[c + 1][r - 1] + next[c + 1][r] + next[c + 1][r + 1];
                if (next[c][r] && neib < 2) cells[c][r] = 0;
                if (next[c][r] && neib > 3) cells[c][r] = 0;
                if (next[c][r] && (neib == 2 || neib == 3)) cells[c][r] = 1;
                if (!next[c][r] && neib == 3) cells[c][r] = 1;
            }
        }
        next = cells.map(Array => [...Array]);
    }
    while (!cells[0].reduce((acc, current) => acc + current, 0)) {
        cells.shift();
    }
    while (!cells[cells.length - 1].reduce((acc, current) => acc + current, 0)) {
        cells.pop();
    }
    while (!cells.reduce((acc, row) => acc + row[0], 0)) {
        cells.forEach(row => row.shift());
    }
    while (!cells.reduce((acc, row) => acc + row[cells[0].length - 1], 0)) {
        cells.forEach(row => row.pop());
    }
    return cells;
}

console.log(solve([
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
], 2));
console.log(solve([
    [1, 1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 1, 1]
], 16));