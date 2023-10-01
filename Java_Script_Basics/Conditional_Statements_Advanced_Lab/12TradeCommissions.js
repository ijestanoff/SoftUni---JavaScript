function tradeCommisions (input) {
    let city = input[0];
    let sells = Number(input[1]);
    let commission = 0;
    if ((sells >= 0) & (sells <= 500)) {
        if (city == "Sofia")
            commission = 5;
        else if (city == "Varna")
            commission = 4.5;
        else if (city == "Plovdiv")
            commission = 5.5;
    } else if ((sells <= 1000) & (sells > 0)) {    //500 <= sells <= 1000:
        if (city == "Sofia")
            commission = 7;
        else if (city == "Varna")
            commission = 7.5;
        else if (city == "Plovdiv")
            commission = 8;
    } else if ((sells <= 10000) & (sells > 0)) {     //1000 <= sells <= 10000:
        if (city == "Sofia")
            commission = 8;
        else if (city == "Varna")
            commission = 10;
        else if (city == "Plovdiv")
            commission = 12;
    } else if ((sells > 10000) & (sells > 0)){
        if (city == "Sofia")
            commission = 12;
        else if (city == "Varna")
            commission = 13;
        else if (city == "Plovdiv")
            commission = 14.5;
    }
    if (commission == 0)
        console.log("error");
    else {
        amount = sells * commission / 100;
        console.log(`${amount.toFixed(2)}`);
    }
}

// tradeCommisions (["Plovdiv",
// "-20"])

