function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let hotel_type = "";
    let vacation_price = 0;
    if (budget <= 1000) {
        hotel_type = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            vacation_price = budget * 0.65;
        } else if (season == "Winter") {
            location = "Morocco";
            vacation_price = budget * 0.45;
        }
    }
    else if (budget <= 3000) {
        hotel_type = "Hut";
        if (season == "Summer") {
            location = "Alaska";
            vacation_price = budget * 0.80;
        } else if (season == "Winter") {
            location = "Morocco";
            vacation_price = budget * 0.60;
        }
    }
    else if (budget > 3000) {
        hotel_type = "Hotel";
        if (season == "Summer") {
            location = "Alaska";
            vacation_price = budget * 0.90;
        } else if (season == "Winter") {
            location = "Morocco";
            vacation_price = budget * 0.90;
        }
    }
    console.log(`${location} - ${hotel_type} - ${vacation_price.toFixed(2)}`);
}