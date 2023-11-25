function passwordReset(input) {
    let pass = input.shift();
    input.forEach(part => {
        if (part == 'Done') console.log(`Your password is: ${pass}`);
        let [command, item1, item2] = part.split(' ');
        if (command == 'TakeOdd') console.log(pass = pass.split('').reduce((acc, val, inx) => inx % 2 ? acc + val : acc, ''));
        else if (command == 'Cut') console.log(pass = pass.slice(0, +item1) + pass.slice(+item1 + +item2));
        else if (command == 'Substitute') {
            let newPass = pass.split(item1).join(item2);
            newPass != pass ? console.log(pass = newPass) : console.log('Nothing to replace!');
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