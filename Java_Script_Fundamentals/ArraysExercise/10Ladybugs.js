function ladybugs (input) {
    let size = input[0];
    let initPosition = input[1].split(' ');
    let array = [];
    let index=0;
     for (index=0; index<size; index++) {
        if (initPosition.includes(String(index))) array[index] = 1;
        else array[index] = 0;
    }
    for (let count=2; count<input.length; count++){
        let command = input[count].split(' ');
        index = Number(command[0]);
        let direction = command[1];
        let step = Number(command[2]);
        let flyLady = true;
        if (index < 0 || index >=array.length) flyLady = false;
        while (flyLady) {
            if (array[index] == 0) flyLady = false; //no such ladybugs
            else { //going to fly
                array[index]--;  //clear start position
                if (direction == 'right') index += step;
                else index -= step;
                if (index < 0 || index >=array.length) flyLady = false; //no such position
                else {
                    array[index] ++;
                    if (array[index] == 1 ) flyLady = false; //lady found position
                } 
            }
        }
    }
    console.log(array.join(' '));
}

ladybugs ([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs ([ 3, '0 1 2', '0 right 1','1 right 1','2 right 1']);
ladybugs ([ 5, '3', '3 left 2', '1 left -2']);