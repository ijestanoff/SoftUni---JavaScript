function coins(input) {
    let change_money = Number(input[0]);
    let number_of_coins = 0;
    while (change_money > 0) {
        number_of_coins += 1;
        if (change_money >= 2)
            change_money -= 2;
        else if (change_money >= 1)
            change_money -= 1;
        else if (change_money >= 0.5)
            change_money -= 0.5;
        else if (change_money >= 0.2)
            change_money -= 0.2;
        else if (change_money >= 0.1)
            change_money -= 0.1;
        else if (change_money >= 0.05)
            change_money -= 0.05;
        else if (change_money >= 0.02)
            change_money -= 0.02;
        else if (change_money >= 0.01)
            change_money -= 0.01;
        change_money = Math.round(change_money * 100) / 100;
    }
    console.log(number_of_coins);
}

//coins (["1.23"]);