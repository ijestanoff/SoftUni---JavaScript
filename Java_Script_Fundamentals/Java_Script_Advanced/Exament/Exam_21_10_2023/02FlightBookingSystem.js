class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let flight = this.flights.filter(item => item.flightNumber == flightNumber)[0];
        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        let flight = this.flights.filter(item => item.flightNumber == flightNumber)[0];
        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookingsCount++;
            this.bookings.push({ passengerName, flightNumber, price: flight.price });
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        let booking = this.bookings.filter(item => (item.flightNumber == flightNumber) && (item.passengerName == passengerName))[0];
        if (!booking) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookingsCount--;
            this.bookings.splice(this.bookings.indexOf(booking), 1);
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (!this.bookings.length) {
            throw new Error(`No bookings have been made yet.`);
        }
        let returnData = '';
        if (criteria == 'all') {
            returnData = `All bookings(${this.bookingsCount}):`;
            this.bookings.forEach(item => {
                returnData += `\n${item.passengerName} booked for flight ${item.flightNumber}.`;
            });
        } else if (criteria == 'cheap') {
            let cheapFlights = this.bookings.filter(item => Number(item.price) <= 100);
            if (!cheapFlights.length) {
                return "No cheap bookings found.";
            } else {
                returnData = `Cheap bookings:`;
                cheapFlights.forEach(item => {
                    returnData += `\n${item.passengerName} booked for flight ${item.flightNumber}.`;
                });
            }
        } else if (criteria == 'expensive') {
            let expensiveFlights = this.bookings.filter(item => Number(item.price) > 100);
            if (!expensiveFlights.length) {
                return "No expensive bookings found.";
            } else {
                returnData = `Expensive bookings:`;
                expensiveFlights.forEach(item => {
                    returnData += `\n${item.passengerName} booked for flight ${item.flightNumber}.`;
                });
            }
        }
        return returnData;
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Flight CC303 to Chicago has been added to the system.
// Flight AA101 to Los Angeles is already available.

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Flight CC303 is not available for booking.

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Booking for passenger Alice on flight AA101 is cancelled.

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// All bookings(2):
// Alice booked for flight AA101.
// Bob booked for flight BB202.

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

// Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Booking for passenger Alice on flight AA101 is confirmed.
// Booking for passenger Bob on flight BB202 is confirmed.
// Expensive bookings:
// Alice booked for flight AA101.
// Bob booked for flight BB202.
// No cheap bookings found.














