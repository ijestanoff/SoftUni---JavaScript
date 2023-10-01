function vacation (input) {
    let vacation_money = Number(input[0]);
    let saved_money = Number(input[1]);
    let spend_count = 0;
    let day_count = 0;
    let count = 2;
    while (true) {
        let reaction_type = input[count++];
        let amount = Number(input[count++]);
        day_count += 1;
        if (reaction_type == "spend") {
            spend_count += 1;
            saved_money -= amount;
            if (saved_money < 0)
                saved_money = 0;
            if (spend_count == 5) {
                console.log("You can't save the money.");
                console.log(day_count);
                break;
            }
        }
        else if (reaction_type == "save") {
            spend_count = 0;
            saved_money += amount;
        }
        if (saved_money >= vacation_money) {
            console.log(`You saved the money for ${day_count} days.`);
            break;
        }
    }
}