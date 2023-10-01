function bikeRace (input) {
    let juniors_cyclist = Number(input[0]);
    let seniors_cyclist = Number(input[1]);
    let race_type = input[2];
    let juniors_price = 0;
    let seniors_price = 0;
    if (race_type === "trail") {
        juniors_price = 5.5;
        seniors_price = 7;
    } else if (race_type === "cross-country") {
        juniors_price = 8;
        seniors_price = 9.5;
        if (juniors_cyclist + seniors_cyclist >= 50) {
            juniors_price *= 0.75;
            seniors_price *= 0.75;
        }
    } else if (race_type === "downhill") {
        juniors_price = 12.25;
        seniors_price = 13.75;
    }
    else if (race_type == "road") {
        juniors_price = 20;
        seniors_price = 21.5;
    }
    let sum = (juniors_price * juniors_cyclist + seniors_price * seniors_cyclist) * 0.95;
    console.log(`${sum.toFixed(2)}`);
}