function multiplicationTable (num) {
    for (let count = 1; count<=10; count++) {
        console.log(`${num} X ${count} = ${count*num}`);
    }
}

multiplicationTable(5);