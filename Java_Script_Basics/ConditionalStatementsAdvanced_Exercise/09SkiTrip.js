function skiTrip (input) {
    let stay_days = Number(input[0]);
    let type_of_room = input[1];
    let rating = input[2];
    let price = 0;
    let sleeps = stay_days - 1;
    if (type_of_room == "room for one person")
        price = 18;
    else if (type_of_room == "apartment") {
        price = 25;
        if (sleeps < 10)
            price *= 0.7;
        else if (sleeps <= 15)
            price *= 0.65;
        else
            price *= 0.5;
    }
    else if (type_of_room == "president apartment") {
        price = 35;
        if (sleeps < 10)
            price *= 0.9;
        else if (sleeps <= 15)
            price *= 0.85;
        else
            price *= 0.8;
    }
    if (rating == "positive") 
        price *= 1.25;
    else
        price *= 0.9;
    console.log(`${(sleeps * price).toFixed(2)}`);
}