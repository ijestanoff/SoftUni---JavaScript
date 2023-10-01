function gladiatorExppenses (lost_fights, helmet_price, sword_price, shield_price, armor_price) {
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;
    for (let fight = 1; fight <=lost_fights; fight++) {
        if (fight % 2 == 0) helmet++;
        if (fight % 3 == 0) sword++;
        if (fight % 6 == 0) shield++;
        if (fight % 12 == 0) armor++
    }
    let total = helmet * helmet_price + sword * sword_price + shield * shield_price + armor * armor_price;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExppenses (7,
    2,
    3,
    4,
    5);

gladiatorExppenses (23,
    12.50,
    21.50,
    40,
    200);