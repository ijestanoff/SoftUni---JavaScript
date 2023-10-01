function muOnline (input) {
    let health = 100;
    let bitcoin = 0;
    let rooms = input.split('|');
    for (let i=0; i< rooms.length; i++) {
        let commands = rooms[i].split(' ');
        let command = commands[0];
        let amount = Number(commands[1]);
        if (command == 'potion') {
            let added = 0;
            if (health == 100) {
                added = 0;
            } else if (health + amount > 100) {
                added = 100 - health;
                health = 100;
            } else {
                added = amount;
                health += amount; 
            }
            console.log(`You healed for ${added} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoin +=amount;
            console.log(`You found ${amount} bitcoins.`);
        } else {
            if (health > amount) {
                console.log(`You slayed ${command}.`);
                health -= amount;
            } else {
                health = 0;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }

    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }
}

//muOnline ("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");