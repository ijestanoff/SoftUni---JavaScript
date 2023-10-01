function movingTarget (input) {
    let targets = input[0].split(' ');
    for (let i=0; i<targets.length; i++) targets[i] = Number(targets[i]);
    for (let index=1; index<input.length; index++) {
        let commands = input[index].split(' ');
        if (commands[0] == 'End') break;
        let command = commands[0];
        let ind = Number(commands[1]);
        let value = Number(commands[2]);
        if (command == 'Shoot') {
            if (ind >=0 && ind < targets.length) {
                targets[ind] -= value;
                if (targets[ind] <= 0) {
                    targets.splice(ind,1);
                }
            }
        } else if (command == 'Add') {
            if (ind >=0 && ind < targets.length) {
                targets.splice(ind,0,value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command == 'Strike') {
            if (ind - value >= 0 && ind + value < targets.length) {
                targets.splice(ind - value, value * 2 + 1);
            } else {
                console.log("Strike missed!");
            }

        }
    }
    console.log(targets.join('|'));
}

movingTarget (["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
;
// movingTarget (["1 2 3 4 5",
// "Strike 0 1",
// "End"])
// ;