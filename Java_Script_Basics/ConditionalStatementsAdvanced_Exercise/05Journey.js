function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let amount = 0;
    let destination = "";
    let type_sleep = "";
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer"){
            amount = budget * 0.3;
            type_sleep = "Camp";
        }
        else if (season == "winter") {
            amount = budget * 0.7;
            type_sleep = "Hotel";
        }
    }
    else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            amount = budget * 0.4;
            type_sleep = "Camp";
        }
        else if (season == "winter") {
            amount = budget * 0.8;
            type_sleep = "Hotel";
        }
    }
    else if (budget > 1000) {
        destination = "Europe";
        amount = budget * 0.9;
        type_sleep = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type_sleep} - ${amount.toFixed(2)}`);
}