function fruitShop (input) {
    let fruit = input[0];
    let day_of_week = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    if ((day_of_week == "Monday") | (day_of_week == "Tuesday") | (day_of_week == "Wednesday") | (day_of_week == "Thursday") | (day_of_week == "Friday")) {
        if (fruit == "banana")
            price = 2.50;
        else if (fruit == "apple") 
            price = 1.20;
        else if (fruit == "orange")
            price = 0.85;
        else if (fruit == "grapefruit")
            price = 1.45;
        else if (fruit == "kiwi")
            price = 2.70;
        else if (fruit == "pineapple")
            price = 5.50;
        else if (fruit == "grapes")
            price = 3.85;
        else
            price = 100;
    }
    else if ((day_of_week == "Saturday") | (day_of_week == "Sunday"))
        if (fruit == "banana")
            price = 2.70;
        else if (fruit == "apple")
            price = 1.25;
        else if (fruit == "orange")
            price = 0.90;
        else if (fruit == "grapefruit")
            price = 1.60;
        else if (fruit == "kiwi")
            price = 3.00;
        else if (fruit == "pineapple")
            price = 5.60;
        else if (fruit == "grapes")
            price = 4.20;
        else
            price = 100;
    else
        console.log("error");
    if (price == 100)
        console.log("error");
    if ((price > 0) & (price <100)) {
        amount = price * quantity;
        console.log(`${amount.toFixed(2)}`);
    }
}