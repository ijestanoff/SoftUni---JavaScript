function solve(arr) {
    let swap = { NORTH: 'SOUTH', SOUTH: 'NORTH', WEST: 'EAST', EAST: 'WEST' };
    let find = true;
    while (find) {
        find = false;
        for (let i = arr.length - 1; i > -1; i--) {
            if (arr[i] === swap[arr[i - 1]]) {
                arr.splice(i - 1, 2);
                find = true;
            }
        }
    };
    return arr;
}

console.log(solve(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(solve(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(solve(["NORTH", "WEST", "SOUTH", "EAST"]));