function solve() {
    total = arr => arr.reduce((acc, val) => acc + val.reduce((a, v) => a + v, ''), '');
    let i = 1;
    let test = [[], [0] , [], []];
    //if (currentFloor > Math.max(...lift) && total(queues.splice(currentFloor)) == 0) break;
    console.log(total(test));
}

solve();