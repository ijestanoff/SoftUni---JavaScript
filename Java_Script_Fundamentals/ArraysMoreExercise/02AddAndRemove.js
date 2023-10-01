function addAndRemove (array) {
    let number = 1;
    let result = [];
    for (index = 0; index<array.length; index++){
        if (array[index] == 'add') result.push(number);
        else result.pop();
        number++;
    }
    if (result.length==0) console.log('Empty');
    else console.log(result.join(' '));
}

addAndRemove (['add', 'add', 'add', 'add']);
addAndRemove (['add', 'add', 'remove', 'add', 'add']);
addAndRemove (['remove', 'remove', 'remove']);