function bitcoinMining (input) {
    let priceBitcoin = 11949.16;
    let priceGold = 67.51;
    let bitcoin = 0;
    let total_sum =0;
    let firstDay = 0;
    let gramsGold = 0;
    for (let day=1; day < input.length  + 1; day++) {
        if (day % 3 == 0) gramsGold = 0.7 * input[day-1];
        else gramsGold = input[day-1]
        total_sum += gramsGold * priceGold;
        while (total_sum >= priceBitcoin) {
            if (firstDay == 0) firstDay = day;
            total_sum -= priceBitcoin;
            bitcoin ++;
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (firstDay > 0) console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    console.log(`Left money: ${total_sum.toFixed(2)} lv.`);
}

bitcoinMining ([100, 200, 300]);