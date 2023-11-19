function solve(arr) {
    let out = [];
    for (i = arr.length - 1; i > -1; i--) {
        arr[i] === 0 ? out.push(arr[i]) : out.unshift(arr[i]);
    }
    return out;
}

console.log(solve([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(solve([false, 1, 0, 1, 2, 0, 1, 3, "a"]));