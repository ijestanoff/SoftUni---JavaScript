function foodDelivery(input) {
    const CHICKEN_PRICE = 10.35;
    const FISH_PRICE = 12.40;
    const VEGETARIAN_PRICE = 8.15;
    const DELIVERY_PRICE = 2.50;
    let chicken_quantity = Number(input[0]);
    let fish_quantity = Number(input[1]);
    let vegetarian_quantity = Number(input[2]);
    let sum = CHICKEN_PRICE * chicken_quantity + FISH_PRICE * fish_quantity + VEGETARIAN_PRICE * vegetarian_quantity;
    let dessert = sum * 0.20;
    let total = sum + dessert + DELIVERY_PRICE;
    console.log (total);
}