function fishingBoat (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let number_of_fishermen = Number(input[2]);
    let price = 0;
    if (season === "Spring")
        price = 3000;
    else if ((season == "Summer") | (season == "Autumn"))
        price = 4200;
    else if (season === "Winter")
        price = 2600;
    if (number_of_fishermen <= 6)
        price *= 0.9;
    else if ((number_of_fishermen >= 7) & (number_of_fishermen <= 11))
        price *= 0.85;
    else if (number_of_fishermen >= 12)
        price *= 0.75;
    if ((number_of_fishermen % 2 === 0) & (!( season == "Autumn")))
        price *= 0.95;
    if (price <= budget)
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`);
    else
        console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
}