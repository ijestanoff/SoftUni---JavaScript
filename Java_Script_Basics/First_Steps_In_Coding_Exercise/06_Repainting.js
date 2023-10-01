function repanting(inputArea) {
    const SAFETY_NYLON_PRICE = 1.50;
    const PAINT_PRICE = 14.50;
    const DETERGENT_PRICE = 5.00;
    let nylon_quantity = Number(inputArea[0]);
    let paint_quantity = Number(inputArea[1]);
    let detergent_quantity = Number(inputArea[2]);
    let job_finish_hours = Number(inputArea[3]);
    let nylon_amount = SAFETY_NYLON_PRICE * (nylon_quantity + 2);
    let paint_amount = PAINT_PRICE * (paint_quantity * 1.1);
    let detergent_amount = DETERGENT_PRICE * detergent_quantity;
    let sum_materials = nylon_amount + paint_amount + detergent_amount + 0.40;
    let sum_technitians = (sum_materials * 0.30) * job_finish_hours;
    let total_sum = sum_materials + sum_technitians;
    console.log(total_sum);
}