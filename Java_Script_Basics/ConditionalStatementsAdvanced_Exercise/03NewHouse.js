function newHouse (input) {
    let flowers = input[0];
    let pcs_flowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    if (flowers === "Roses") { 
        price = 5;
        if (pcs_flowers > 80)
            price *= 0.9;
    }
    else if (flowers === "Dahlias") {
        price = 3.8;
        if (pcs_flowers > 90)
            price *= 0.85;
    }
    else if (flowers === "Tulips") { 
        price = 2.8;
        if (pcs_flowers > 80)
            price *= 0.85;
    }
    else if (flowers === "Narcissus") {
        price = 3;
        if (pcs_flowers < 120)
            price *= 1.15;
    }
    else if (flowers === "Gladiolus") {
        price = 2.5;
        if (pcs_flowers < 80)
            price *= 1.2;
    }
    amount = pcs_flowers * price;
    if (amount <= budget)
        console.log(`Hey, you have a great garden with ${pcs_flowers} ${flowers} and ${(budget-amount).toFixed(2)} leva left.`);
    else
        console.log(`Not enough money, you need ${(amount-budget).toFixed(2)} leva more.`)
}