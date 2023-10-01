function accountBalance (input) {
    let total_sum = 0;
    let count = 0;
    while (true) {
        entered_text = input[count++];
        if (entered_text == "NoMoreMoney")
            break;
        else {
            let money_added = Number(entered_text);
            if (money_added>0) {
                console.log(`Increase: ${money_added.toFixed(2)}`);
                total_sum += money_added;
            } else {
                console.log("Invalid operation!");
                break;
            }
        }
    }
    console.log(`Total: ${total_sum.toFixed(2)}`);    
}