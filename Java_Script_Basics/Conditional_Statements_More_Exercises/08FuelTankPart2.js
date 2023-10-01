function fuelTankPart2 (input){
    let GASOLINE_PRICE = 2.22;
    let DIESEL_PRICE = 2.33;
    let AUTO_GAS_PRICE = 0.93;
    let type_fuel = input[0];
    let fuel_amount = Number(input[1]);
    let card_availability = input[2];
    if (card_availability === "Yes"){
        GASOLINE_PRICE -= 0.18;
        DIESEL_PRICE -= 0.12;
        AUTO_GAS_PRICE -= 0.08;
    }
    if (type_fuel === "Gasoline")
        fuel_volume = GASOLINE_PRICE * fuel_amount;
    else if (type_fuel === "Diesel")
        fuel_volume = DIESEL_PRICE * fuel_amount;
    else if (type_fuel == "Gas")
        fuel_volume = AUTO_GAS_PRICE * fuel_amount;
    if (fuel_amount > 25)
        fuel_volume *= 0.90;
    else if (fuel_amount >= 20)
        fuel_volume *= 0.92;
    console.log(`${fuel_volume.toFixed(2)} lv.`);
}