function shopping (input) {
    const VIDEO_CARD_PRICE = 250.00;
    let peter_budget = Number(input[0]);
    let video_card_quantity = Number(input[1]);
    const PROCESSOR_PRICE = VIDEO_CARD_PRICE * video_card_quantity * 0.35;
    const RAM_PRICE = VIDEO_CARD_PRICE * video_card_quantity * 0.10;
    let processor_quantity = Number(input[2]);
    let ram_quantity = Number(input[3]);
    let budget = VIDEO_CARD_PRICE * video_card_quantity + PROCESSOR_PRICE * processor_quantity + RAM_PRICE * ram_quantity;
    if (video_card_quantity > processor_quantity)
        budget *= 0.85;
    if (budget <= peter_budget) {
        peter_budget -= budget;
        console.log(`You have ${peter_budget.toFixed(2)} leva left!`);
    }
    else {
        budget -= peter_budget;
        console.log(`Not enough money! You need ${budget.toFixed(2)} leva more!`);
    }
}