function fuelTank(input) {
    let type_fuel = input[0];
    let tank_volume = Number(input[1]);
    if (type_fuel === "Diesel" || type_fuel === "Gasoline" || type_fuel == "Gas")
        if (tank_volume >= 25)
            console.log(`You have enough ${type_fuel.toLowerCase()}.`);
        else
            console.log(`Fill your tank with ${type_fuel.toLowerCase()}!`);
    else
        console.log("Invalid fuel!");
}