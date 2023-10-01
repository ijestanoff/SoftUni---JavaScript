function logics(input) {
    let cargo_number = Number(input[0]);
    let total_price = 0;
    let total_mass = 0;
    let bus_cargo = 0;
    let truck_cargo = 0;
    let train_cargo = 0;
    for (let count=0; count< cargo_number;count++){
        cargo_mass = Math.floor(input[count+1]);
        if (cargo_mass <= 3) {
            total_price += 200 * cargo_mass;
            bus_cargo += cargo_mass;
        }
        else if (cargo_mass <= 11) {
            total_price += 175 * cargo_mass;
            truck_cargo += cargo_mass;
        }
        else if (cargo_mass >= 12) {
            total_price += 120 * cargo_mass;
            train_cargo += cargo_mass;
        }
        total_mass += cargo_mass;
    }
    let average_price = total_price / total_mass;
    console.log(`${average_price.toFixed(2)}`);
    console.log(`${(bus_cargo / total_mass * 100).toFixed(2)}%`);
    console.log(`${(truck_cargo / total_mass * 100).toFixed(2)}%`);
    console.log(`${(train_cargo / total_mass * 100).toFixed(2)}%`);
}