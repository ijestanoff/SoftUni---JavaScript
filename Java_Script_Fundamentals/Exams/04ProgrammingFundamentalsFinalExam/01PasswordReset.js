function passwordReset(input) {
    let password = input.shift();
    input.forEach(part => {
        if (part == 'Done') {
            console.log(`Your password is: ${password}`);
            return;
        }
        let [command, item1, item2] = part.split(' ');
        if (command == 'TakeOdd') {
            let output = '';
            for (let i = 1; i < password.length; i += 2) {
                output += password[i];
            }
            console.log(output);
            password = output;
        } else if (command == 'Cut') {
            let index = Number(item1);
            let length = Number(item2);
            let cut = password.slice(index, index + length);
            index = password.indexOf(cut);
            password = password.slice(0, index) + password.slice(index + length,);
            console.log(password);
        } else if (command == 'Substitute') {
            let [currentIndex, find] = [-1, false];
            while ((currentIndex = password.indexOf(item1)) !== -1) {
                password = password.slice(0, currentIndex) + item2 + password.slice(currentIndex + item1.length,);
                find = true;
            }
            if (!find) console.log('Nothing to replace!');
            else console.log(password);
        }
    });
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
);