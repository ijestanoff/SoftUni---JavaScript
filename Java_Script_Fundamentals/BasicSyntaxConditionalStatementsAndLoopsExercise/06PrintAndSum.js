function printAndSum (start, end) {
    sum = 0;
    row = "";
    for (let num = start; num <= end; num++){
        sum += num;
        row += String(num) + " ";
    }
    console.log(row);
    console.log(`Sum: ${sum}`);
}

printAndSum (5, 10);
printAndSum (0, 26);
printAndSum (50, 60);
