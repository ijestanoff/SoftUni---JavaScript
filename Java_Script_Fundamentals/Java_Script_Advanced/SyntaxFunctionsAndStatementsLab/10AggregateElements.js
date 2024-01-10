function aggregateElements(input) {
    console.log(input.reduce((acc, val) => acc + val, 0));
    console.log(input.reduce((acc, val) => acc + 1/val, 0));
    console.log(input.reduce((acc, val) => acc + val, ''));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);