function houseParty(input) {
    let array = [];
    for (let part of input) {
        let command = part.split(' ');
        let guest = command[0];
        if (command[2] == 'going!') {
            if (array.includes(guest)) {
                console.log(`${guest} is already in the list!`);
            } else {
                array.push(guest);
            }
        } else {
            if (array.includes(guest)) {
                for (cnt = 0; cnt < array.length; cnt++) {
                    if (array[cnt] == guest) {
                        array.splice(cnt, 1);
                    }
                }
            } else {
                console.log(`${guest} is not in the list!`);
            }
        }
    }
    console.log(array.join('\n'));
}

houseParty (['Allie is going!', 'George is going!', 'John is not going!','George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);

