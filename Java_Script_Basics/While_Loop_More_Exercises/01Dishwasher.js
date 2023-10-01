function dishwasher(input) {
    let number_of_bottles = Number(input[0]);
    let detergent_amount = number_of_bottles * 750;
    let dish_count = 0;
    let clean_dish = 0;
    let clean_pot = 0;
    let count = 1;
    while (true) {
        let command = input[count++];
        if (command === "End") {
            console.log("Detergent was enough!");
            console.log(`${clean_dish} dishes and ${clean_pot} pots were washed.`);
            console.log(`Leftover detergent ${detergent_amount} ml.`);
            break;
        }
        amount = Number(command);
        if (dish_count < 2) {
            dish_count += 1;
            detergent_amount -= amount * 5;
            clean_dish += amount;
        } else {
            dish_count = 0;
            detergent_amount -= amount * 15;
            clean_pot += amount;
        }
        if (detergent_amount < 0) {
            console.log(`Not enough detergent, ${-detergent_amount} ml. more necessary!`);
            break;
        }
    }
}