function dungeonestDark (input) {
    let health = 100;
    let coins = 0;
    let array = input[0].split("|");
    for (index = 0; index < array.length; index++){
        let command = array[index].split(" ");
        let item = command[0];
        let number = Number(command[1]);
        if (item == 'potion') {
            let initial = health;
            health += number;
            if (health > 100) health = 100;
            console.log(`You healed for ${health-initial} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item == 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else { //monster
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${index + 1}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

//dungeonestDark (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark (["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
