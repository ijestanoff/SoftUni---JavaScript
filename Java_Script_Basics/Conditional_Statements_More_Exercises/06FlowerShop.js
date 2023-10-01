function flowerShop(input) {
    const MAGNOLIAS_PRICE = 3.25;
    const HYACINTHS_PRICE = 4.00;
    const ROSE_PRICE = 3.50;
    const CACTUS_PRICE = 8.00;
    
    let magnolias_quantity = Number(input[0]);
    let hyacinths_quantity = Number(input[1]);
    let rose_quantity = Number(input[2]);
    let cactus_quantity = Number(input[3]);
    let present_price = Number(input[4]);
    income = MAGNOLIAS_PRICE * magnolias_quantity + HYACINTHS_PRICE * hyacinths_quantity 
             + ROSE_PRICE * rose_quantity + CACTUS_PRICE * cactus_quantity;
    income_with_tax = income * 0.95;
    if (income_with_tax >= present_price)
        console.log(`She is left with ${Math.floor(income_with_tax - present_price)} leva.`);
    else
        console.log(`She will have to borrow ${Math.ceil(present_price - income_with_tax)} leva.`);
}