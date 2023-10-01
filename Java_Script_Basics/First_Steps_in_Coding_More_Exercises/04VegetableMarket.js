function vegetableMarket(input) {
    let vegetables_price = Number(input[0]);
    let fruit_price = Number(input[1]);
    let vegetables_quantity = Number(input[2]);
    let fruit_quantity = Number(input[3]);
    let sum = vegetables_price * vegetables_quantity + fruit_price * fruit_quantity;
    console.log(`${(sum/1.94).toFixed(2)}`);
}