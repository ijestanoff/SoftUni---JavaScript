function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let car_class = "";
    let car_price = 0;
    let car_type = "";
    if (budget <= 100) {
        car_class = "Economy class";
        if (season === "Summer") {
            car_price = budget * 0.35;
            car_type = "Cabrio";
        } else if (season == "Winter") {
            car_price = budget * 0.65;
            car_type = "Jeep";
        }
    } else if (budget <= 500) {
        car_class = "Compact class";
        if (season === "Summer") {
            car_price = budget * 0.45;
            car_type = "Cabrio";
        } else if (season == "Winter") {
            car_price = budget * 0.80;
            car_type = "Jeep";
        }
    } else if (budget > 500) {
        car_class = "Luxury class";
        car_price = budget * 0.90;
        car_type = "Jeep";
    }
    console.log(car_class);
    console.log(`${car_type} - ${car_price.toFixed(2)}`);
}