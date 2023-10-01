function transportPrice (input) {
    const TAXI_INIT_PRICE = 0.70;
    const TAXI_DAY_PRICE = 0.79;
    const TAXI_NIGHT_PRICE = 0.90;
    const BUS_PRICE = 0.09;
    const BUS_MIN_DISTANCE = 20;
    const TRAIN_PRICE = 0.06;
    const TRAIN_MIN_DISTANCE = 100;
    let distance = Number(input[0]);
    let day_state = input[1];
    if (distance >= TRAIN_MIN_DISTANCE)
        console.log(`${(distance * TRAIN_PRICE).toFixed(2)}`);
    else if (distance >= BUS_MIN_DISTANCE)
        console.log(`${(distance * BUS_PRICE).toFixed(2)}`);
    else {
        let taxi_charge=0;
        if (day_state === "day")
            taxi_charge = TAXI_INIT_PRICE + distance * TAXI_DAY_PRICE;
        if (day_state == "night")
            taxi_charge = TAXI_INIT_PRICE + distance * TAXI_NIGHT_PRICE;
        console.log(`${taxi_charge.toFixed(2)}`);
    }
}