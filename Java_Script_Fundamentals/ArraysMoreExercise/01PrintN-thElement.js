function printNElement (array) {
    let step = Number(array[array.length - 1]);
    let row = '';
    for (let index=0; index< array.length - 1; index+=step){
        row+=array[index]+' ';
    }
    console.log(row);
}

printNElement (['5', '20', '31', '4', '20', '2']);
printNElement (['dsa', 'asd', 'test', 'test', '2']);
printNElement (['1', '2', '3', '4', '5', '6']);