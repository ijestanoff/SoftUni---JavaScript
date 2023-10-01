function arrayManipulator (array, commands) {
    for (let next of commands) {
        let command = next.split(' ');
        let action = command[0];
        let index = Number(command[1]);
        if (action == 'add') {
            let element = Number(command[2]);
            array.splice(index,0,element);
        } else if (action == 'print') {
            console.log(`[ ${array.join(', ')} ]`);
            return;
        } else if (action == 'addMany') {
            for (let cnt = 0; cnt< command.length - 2; cnt++){
                array.splice(index+cnt,0,Number(command[2+cnt]));
            }
        } else if (action == 'contains') {
            let isContains = -1;
            for (let cnt=0; cnt< array.length; cnt++){
                if (array[cnt] == index) {
                    isContains = cnt;
                    break;
                }
            }
            if (isContains == -1) console.log('-1');
            else console.log(isContains);
        } else if (action == 'remove') {
            array.splice(index,1);
        } else if (action == 'shift') {
            for (let cnt=0; cnt<index; cnt++){
                 let firstElement = array.shift();
                 array.push(firstElement);
            }
        } else if (action == 'sumPairs') {
            let sumArray = [];
            for (let cnt=0; cnt< array.length; cnt += 2){
                let second = 0;
                if (cnt+1<array.length) second = array[cnt+1];
                sumArray.push(array[cnt] + second);
            }
            array = sumArray.slice();
        }
    }
}

//arrayManipulator ([2, 2, 4, 2, 4, 5, 1] , ["sumPairs", "print"]);
arrayManipulator ([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator ([1, 2, 3, 4, 5],  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);