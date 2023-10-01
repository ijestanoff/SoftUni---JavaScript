function reportSystem(input) {
    let charity_sum = Number(input[0]);
    let payment_type = 0;
    let card_total = 0;
    let cash_total = 0;
    let cash_counter = 0;
    let card_counter =0;
    let count = 1;
    while (true) {
        command = input[count++];
        if (command === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        }
        payment = Number(command);
        if (!payment_type) {
            payment_type = 1;
            if (payment <= 100) {
                cash_total += payment;
                cash_counter += 1;
                console.log("Product sold!");
            } else
                console.log("Error in transaction!");
        } else {
            payment_type = 0;
            if (payment >= 10) {
                card_total += payment;
                card_counter += 1;
                console.log("Product sold!");
            } else
                console.log("Error in transaction!");
        }
        if (card_total + cash_total >= charity_sum) {
            console.log(`Average CS: ${(cash_total / cash_counter).toFixed(2)}`);
            console.log(`Average CC: ${(card_total / card_counter).toFixed(2)}`);
            break;
        }
    }
}