function traveling (input) {
    let count=0;
    while (true) {
        let destination = input[count++];
        if (destination === "End")
            break;
        let destination_sum = Number(input[count++]);
        let current_sum = 0;
        while (current_sum < destination_sum) {
            let input_sum = Number(input[count++]);
            current_sum += input_sum;
        }
        console.log(`Going to ${destination}!`);
    }
}