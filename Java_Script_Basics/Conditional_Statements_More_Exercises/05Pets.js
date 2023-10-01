function pets (input) {
    let day_count = Number(input[0]);
    let total_food = Number(input[1]);
    let dog_day_food = Number(input[2]);
    let cat_day_food = Number(input[3]);
    let turtle_day_food = Number(input[4]);
    food_needed = day_count * (dog_day_food + cat_day_food + turtle_day_food/1000);
    if (food_needed <= total_food)
        console.log(`${Math.floor(total_food - food_needed)} kilos of food left.`);
    else
        console.log(`${Math.ceil(food_needed - total_food)} more kilos of food are needed.`);
}