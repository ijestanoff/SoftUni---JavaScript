function hotelRoom (input) {
    let apartment_price = 0;
    let studio_price = 0;
    let month = input[0];
    let sleeps = Number(input[1]);
    if ((month == "May") || (month == "October")) {
        studio_price = 50;
        apartment_price = 65;
        if (sleeps > 14)
            studio_price *= 0.7;
        else if (sleeps > 7)
            studio_price *= 0.95;
    }
    else if ((month == "June") || (month == "September")) {
        studio_price = 75.2;
        apartment_price = 68.7;
        if (sleeps > 14)
            studio_price *= 0.8;
    }
    else if ((month == "July") || (month == "August")) {
        studio_price = 76;
        apartment_price = 77;
    }
    if (sleeps > 14)
        apartment_price *= 0.9;
    console.log(`Apartment: ${(apartment_price * sleeps).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio_price * sleeps).toFixed(2)} lv.`);
}