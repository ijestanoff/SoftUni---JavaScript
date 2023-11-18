function task1(n) {
    return Array.from(n.toString(2)).map(Number).reduce((acc, val) => acc + val);
}

console.log(task1(10));
