function cinemaTickets (input) {
    let student_count = 0;
    let kid_count = 0;
    let standard_count = 0;
    let total_tickets = 0;
    let command = "";
    let count = 0;
    while (true) {
        if (command == "Finish")
            break;
        let film_name = input[count++];
        if (film_name === "Finish")
            break;
        let free_space = Number(input[count++]);
        let watch_count = 0
        while (true) {
            command = input[count++];
            if (command === "End" || command === "Finish") {
                console.log(`${film_name} - ${(watch_count / free_space * 100).toFixed(2)}% full.`);
                break;
            }
            if (command === "student")
                student_count += 1;
            else if (command === "kid")
                kid_count += 1;
            else if (command === "standard")
                standard_count += 1;
            total_tickets += 1;
            watch_count += 1;
            if (watch_count === free_space) {
                console.log(`${film_name} - ${(watch_count / free_space * 100).toFixed(2)}% full.`);
                break;
            }
        }
    }
    console.log(`Total tickets: ${total_tickets}`);
    console.log(`${(student_count / total_tickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard_count / total_tickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid_count / total_tickets * 100).toFixed(2)}% kids tickets.`);
}