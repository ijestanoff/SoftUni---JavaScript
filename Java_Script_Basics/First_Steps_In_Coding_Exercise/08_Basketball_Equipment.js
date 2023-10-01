function basketballEqupment (input) {
    let anular_basketball_tax = Number(input[0]);
    let basketball_shoes_price = anular_basketball_tax * 0.60;
    let basketball_equipment_price = basketball_shoes_price * 0.80;
    let basketball_ball_price = basketball_equipment_price / 4;
    let basketball_accessories = basketball_ball_price / 5;
    let total_sum = anular_basketball_tax + basketball_shoes_price + basketball_equipment_price + basketball_ball_price + basketball_accessories;
    console.log (total_sum);
}