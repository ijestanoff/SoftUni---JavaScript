function solve(arr) {
    let obj = { pos: [], peaks: [] };
    for (let i = 1; i < arr.length - 1; i++) {
        let n = 1;
        for (let inx = i + 1; inx < arr.length; inx++) {
            if (arr[i] != arr[inx]) break;
            n++;
        }
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + n]) {
            obj.pos.push(i);
            obj.peaks.push(arr[i]);
        }
    }
    return obj;
}

console.log(solve([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
console.log(solve([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
console.log(solve([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
console.log(solve([3, 2]));