function vacantion (number, group, day) {
    let totalPrice = 0; 
    let price = 0;
    if (group == "Students") {
        if (day == "Friday") totalPrice = number * 8.45;
        else if (day == "Saturday") totalPrice = number * 9.80;
        else totalPrice = number * 10.46;
        if (number >= 30) totalPrice = totalPrice * 0.85;
    } else if (group == "Business") {
        if (day == "Friday") price = 10.90;
        else if (day == "Saturday") price = 15.60;
        else price = 16;
        if (number >= 100) totalPrice = (number - 10) * price;
        else totalPrice = number * price;
    } else { //Regular
        if (day == "Friday") price = 15;
        else if (day == "Saturday") price = 20;
        else price = 22.5;
        if ((number >= 10) && (number <= 20)) totalPrice = (number * price) * 0.95;
        else totalPrice = number * price;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(30,
    "Students",
    "Sunday");
vacantion(40,
    "Regular",
    "Saturday");