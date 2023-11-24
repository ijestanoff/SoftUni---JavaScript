function passwordReset(input) {
    let password = input.shift();
    input.forEach(part => {
        if (part == 'Done') {
            console.log(`Your password is: ${password}`);
            return;
        }
        let [command, item1, item2] = part.split(' ');
        if (command == 'TakeOdd') {
            password = password.split('').reduce((acc, current, index) => index % 2 ? acc + current : acc, '');
            console.log(password);
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
            find ? console.log(password) : console.log('Nothing to replace!');
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