function operationBetweenNumbers (input) {
    let first_number = Number(input[0]);
    let second_number = Number(input[1]);
    let operation = input[2];
    if (((operation === "/") | (operation == "%")) & (second_number === 0))
        console.log(`Cannot divide ${first_number} by zero`);
    else {
        if ((operation == "+") | (operation == "-") | (operation == "*")) {
            if (operation == "+")
                result = first_number + second_number;
            else if (operation == "-")
                result = first_number - second_number;
            else if (operation == "*")
                result = first_number * second_number;
            if (result % 2 == 0)
                type_number = "even";
            else
                type_number = "odd";
            console.log(`${first_number} ${operation} ${second_number} = ${result} - ${type_number}`);
        }
        else if (operation == "/") {
            result = first_number / second_number;
            console.log(`${first_number} ${operation} ${second_number} = ${result.toFixed(2)}`);
        }
        else if (operation == "%") {
            result = first_number % second_number;
            console.log(`${first_number} ${operation} ${second_number} = ${result}`);
        }
    }
}