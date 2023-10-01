function fishland (input) {
    let mackerel_price = Number(input[0]);
    let sprinkle_price = Number(input[1]);
    let bonito_quantity = Number(input[2]);
    let safrid_quantity = Number(input[3]);
    let oister_quantity =  Number(input[4]);
    let bonito_price = mackerel_price * 1.6;
    let safrid_price = sprinkle_price * 1.8;
    const OISTER_PRICE = 7.50;
    let sum = bonito_price * bonito_quantity + safrid_price * safrid_quantity + OISTER_PRICE * oister_quantity;
    console.log(`${sum.toFixed(2)}`);
}