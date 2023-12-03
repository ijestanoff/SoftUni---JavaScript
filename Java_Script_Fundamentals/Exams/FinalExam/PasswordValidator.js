function passwordValidator(input) {
    let pass = input.shift().split('');
    for (let part of input) {
        if (part.includes('Make Upper ')){
            let items = part.split('Make Upper ');
            let index = Number(items[1]);
            pass[index] = pass[index].toUpperCase();
            console.log(pass.join(''));
        } else if (part.includes('Make Lower ')){
            let items = part.split('Make Lower ');
            let index = Number(items[1]);
            pass[index] = pass[index].toLowerCase();
            console.log(pass.join(''));
        } else if (part.includes('Insert ')){
            let items = part.split(' ');
            let index = Number(items[1]);
            let char = items[2];
            if (index >= 0 && index < pass.length) {
                pass.splice(index,0,char);
                console.log(pass.join(''));
            }
        } else if (part.includes('Replace ')){
            let [_, char, value] = part.split(' ');
            if (pass.includes(char)) {
                let newChar = String.fromCharCode(char.charCodeAt(0) + +value);
                for (let i=0; i<pass.length; i++) {
                    if (pass[i] == char) pass[i] = newChar;
                }
                console.log(pass.join(''));
            }
        } else if (part == 'Validation') {
            if (pass.length < 8) console.log("Password must be at least 8 characters long!");
            let test = pass.join('').match(/\w+/);
            if (!test) console.log('Password must consist only of letters, digits and _!');
            else if (test[0] != pass.join('')) console.log('Password must consist only of letters, digits and _!');
            test = pass.join('').match(/[A-Z]/);
            if (!test) console.log("Password must consist at least one uppercase letter!");
            test = pass.join('').match(/[a-z]/);
            if (!test) console.log("Password must consist at least one lowercase letter!");
            test = pass.join('').match(/[0-9]/);
            if (!test) console.log("Password must consist at least one digit!");
        }
    }
}

passwordValidator(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete']);


passwordValidator(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete']);
