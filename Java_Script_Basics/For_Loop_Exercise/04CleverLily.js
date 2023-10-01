function cleverLili (input) {
    let lili_age = Number(input[0]);
    let laundry_price = Number(input[1]);
    let toy_price = Number(input[2]);
    let toy_sum = 0;
    let lili_money = 0;
    for (let count=1; count< lili_age + 1; count++){
        if (count % 2 == 0){
            lili_money += 10 * count / 2;
            lili_money -= 1;
        }
        else
            toy_sum += toy_price;
    }
    lili_money += toy_sum;
    if (lili_money >= laundry_price)
        console.log(`Yes! ${(lili_money-laundry_price).toFixed(2)}`);
    else
        console.log(`No! ${(laundry_price-lili_money).toFixed(2)}`);
}