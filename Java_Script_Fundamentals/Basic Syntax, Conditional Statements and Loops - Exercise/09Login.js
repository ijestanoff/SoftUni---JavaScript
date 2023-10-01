function login(input) {
    let username = input[0];
    var pass = "";
    for (var i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }
    for (let count=1; count < input.length; count++){
        if (input[count] == pass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (count==4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}

login(['momo','omom']);