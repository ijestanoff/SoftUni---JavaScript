function tickets(tickets, sortingCrit) {
    const array = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sortTickets(array, criteria) {
            return array.sort((a,b) => {
                return criteria == "price" ? a[criteria] - b[criteria] : a[criteria].localeCompare(b[criteria]);
            });
        }
    }

    tickets.forEach(part => {
        const [destination, price, status] = part.split('|');
        array.push(new Ticket(destination, +price, status));
    });
    
    return Ticket.sortTickets(array, sortingCrit);
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
console.log('----------');
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));