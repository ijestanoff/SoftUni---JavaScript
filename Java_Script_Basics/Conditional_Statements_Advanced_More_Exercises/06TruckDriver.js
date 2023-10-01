function truckDriver(input) {
    let season = input[0]; 
    let km_per_month = Number(input[1]);
    let price_per_km = 0;
    if (season === "Spring" || season === "Autumn") {
        if (km_per_month <= 5000)
            price_per_km = 0.75;
        else if (km_per_month <= 10000)
            price_per_km = 0.95;
        else if (km_per_month <= 20000)
            price_per_km = 1.45;
    }
    else if (season === "Summer") {
        if (km_per_month <= 5000)
            price_per_km = 0.90;
        else if (km_per_month <= 10000)
            price_per_km = 1.10;
        else if (km_per_month <= 20000)
            price_per_km = 1.45;
    }
    else if (season == "Winter") {
        if (km_per_month <= 5000)
            price_per_km = 1.05;
        else if (km_per_month <= 10000)
            price_per_km = 1.25;
        else if (km_per_month <= 20000)
            price_per_km = 1.45;
    }
    let total_sum = km_per_month * price_per_km * 4;
    let sum_after_taxes = total_sum * 0.9;
    console.log(`${sum_after_taxes.toFixed(2)}`);
}