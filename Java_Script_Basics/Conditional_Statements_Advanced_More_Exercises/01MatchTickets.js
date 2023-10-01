function matchTickets (input) {
    let budget = Number(input[0]);
    let category = input[1];
    let number_of_people = Number(input[2]);
    let transport = 0;
    let ticket_price = 0;
    if (number_of_people >= 1 && number_of_people <= 4)
        transport = budget * 0.75;
    else if (number_of_people >= 5 && number_of_people <= 9)
        transport = budget * 0.6;
    else if (number_of_people >= 10 && number_of_people <= 24)
        transport = budget * 0.5;
    else if (number_of_people >=25 && number_of_people <= 49)
        transport = budget * 0.4
    else if (number_of_people >= 50)
        transport = budget * 0.25;
    let money_left = budget - transport;
    if (category === "VIP")
        ticket_price = 499.99;
    else
        ticket_price = 249.99;
    let money_for_tickets = ticket_price * number_of_people;
    if (money_for_tickets > money_left)
        console.log(`Not enough money! You need ${(money_for_tickets - money_left).toFixed(2)} leva.`);
    else
        console.log(`Yes! You have ${(money_left - money_for_tickets).toFixed(2)} leva left.`);
}