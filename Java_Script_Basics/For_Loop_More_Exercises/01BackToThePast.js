function backToThePast (input) {
    let inherited_money = Number(input[0]);
    let money_left = inherited_money;
    let year_to_live = Number(input[1]);
    let total_year = year_to_live - 1800;
    for (cnt_year=0; cnt_year< total_year + 1; cnt_year ++)
        if (cnt_year % 2 == 0)
            money_left -= 12000;
        else
            money_left -= 12000 + (18 + cnt_year) * 50;
    if (money_left >= 0)
        console.log(`Yes! He will live a carefree life and will have ${money_left.toFixed(2)} dollars left.`);
    else
        console.log(`He will need ${(Math.abs(money_left)).toFixed(2)} dollars to survive.`);
}