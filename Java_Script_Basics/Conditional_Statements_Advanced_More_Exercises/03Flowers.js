function flowers(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let chrysanthemums_price = 0;
    let roses_price = 0;
    let tulips_price = 0;
    if (season === "Spring" || season === "Summer") {
        chrysanthemums_price = 2;
        roses_price = 4.1;
        tulips_price = 2.5;
    } else if (season === "Autumn" || season === "Winter") {
        chrysanthemums_price = 3.75;
        roses_price = 4.5;
        tulips_price = 4.15;
    }
    if (holiday === "Y") {
        chrysanthemums_price *= 1.15;
        roses_price *= 1.15;
        tulips_price *= 1.15;
    }
    let total = chrysanthemums_price * chrysanthemums + roses_price * roses + tulips_price * tulips;
    if (season === "Spring" && tulips > 7)
        total *= 0.95;
    else if (season === "Winter" && roses >= 10)
        total *= 0.9;
    if (chrysanthemums + roses + tulips > 20)
        total *= 0.8;
    total += 2;
    console.log(`${total.toFixed(2)}`);
}