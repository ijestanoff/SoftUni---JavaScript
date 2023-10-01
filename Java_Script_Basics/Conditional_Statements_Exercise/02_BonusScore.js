function bonusScore (input) {
    let bonus_points = 0;
    let whole_number = Number(input[0]);
    if (whole_number <= 100) 
        bonus_points = 5;
    else if (whole_number <= 1000)
        bonus_points = whole_number * 0.20;
    else
        bonus_points = whole_number * 0.10;
    if (whole_number % 2 == 0)
        bonus_points += 1;
    if (whole_number % 10 == 5)
        bonus_points += 2;
    console.log(bonus_points);
    console.log(whole_number + bonus_points);
}