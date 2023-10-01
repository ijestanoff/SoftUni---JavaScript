function toyShop (input) {
    const PUZZLE_PRICE = 2.60;
    const TALKING_TOYS_PRICE = 3.00;
    const TEDDY_BEAR_PRICE = 4.10;
    const MINION_PRICE = 8.20;
    const TRUCK_TOY_PRICE = 2.00;

    let vacation_price = Number(input[0]);
    let puzzle_quantity = Number(input[1]);
    let talking_toy_quantity = Number(input[2]);
    let teddy_bear_quantity = Number(input[3]);
    let minion_quantity = Number(input[4]);
    let truck_toy_quantity = Number(input[5]);   
    let total_price = PUZZLE_PRICE * puzzle_quantity + TALKING_TOYS_PRICE * talking_toy_quantity +
               TEDDY_BEAR_PRICE * teddy_bear_quantity + MINION_PRICE * minion_quantity + TRUCK_TOY_PRICE * truck_toy_quantity;
    let total_toy_quantity = puzzle_quantity + talking_toy_quantity + teddy_bear_quantity + minion_quantity + truck_toy_quantity;
    if (total_toy_quantity >= 50)
        total_price = total_price * 0.75;
    total_price = total_price * 0.90;
    if (total_price >= vacation_price) {
        total_price -= vacation_price
        console.log(`Yes! ${total_price.toFixed(2)} lv left.`);
    }
    else {
        vacation_price -= total_price
        console.log(`Not enough money! ${vacation_price.toFixed(2)} lv needed.`);
    }
}

// toyShop (["40.8","20","25","30","50","10"]);
