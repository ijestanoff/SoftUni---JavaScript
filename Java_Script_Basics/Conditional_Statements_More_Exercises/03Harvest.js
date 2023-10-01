function harvest(input) {
    let vineyard = Number(input[0]);
    let grapes_per_sqm = Number(input[1]);
    let wine_needed = Number(input[2]);
    let workers_number = Number(input[3]);
    let wine_produced = vineyard * grapes_per_sqm * 0.4 / 2.5;
    if (wine_produced < wine_needed)
        console.log(`It will be a tough winter! More ${Math.floor(wine_needed-wine_produced)} liters wine needed.`);
    else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine_produced)} liters.`);
        console.log(`${Math.ceil(wine_produced-wine_needed)} liters left -> ${Math.ceil((wine_produced-wine_needed)/workers_number)} liters per person.`);
    }
}