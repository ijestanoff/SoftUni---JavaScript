function reverseString (input) {
    var pass = "";
    for (var i = input.length - 1; i >= 0; i--) {
        pass += input[i];
    }
    console.log(pass);
}

reverseString ('SoftUni');