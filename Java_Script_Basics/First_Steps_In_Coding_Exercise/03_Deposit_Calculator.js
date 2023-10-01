function DepositCalculator(inputArea) {
    let deposing_amount = Number(inputArea[0]);
    let deposit_term = Number(inputArea[1]);
    let annual_interest_rate = Number(inputArea[2]) / 100;
    let sum = deposing_amount + deposit_term * ((deposing_amount * annual_interest_rate) / 12);
    console.log(sum);
}

DepositCalculator()