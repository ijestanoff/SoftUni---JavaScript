function solve(data) {
    data.map((player, index) => player[0] >= 55 && player[1] > 7 ? data[index] = 'Senior' : data[index] = 'Open');
    return data;
    //return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(solve([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]