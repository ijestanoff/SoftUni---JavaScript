function needForSpeedIII(input) {
    let cars = {};
    input.shift();
    input.forEach(part => {
        if (part.includes('|')) {
            let [car, mileage, fuel] = part.split('|');
            cars[car] = { mileage: +mileage, fuel: +fuel };
        } else if (part == 'Stop') {
            Object.keys(cars).forEach(car => console.log(`${car} -> Mileage: ${cars[car]
                .mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`));
        } else {
            let [command, car, item, fuel] = part.split(' : ');
            let vehicle = cars[car];
            if (command == 'Drive') {
                if (vehicle.fuel >= fuel) {
                    vehicle.fuel -= +fuel;
                    vehicle.mileage += +item;
                    console.log(`${car} driven for ${item} kilometers. ${fuel} liters of fuel consumed.`);
                    if (vehicle.mileage >= 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete cars[car];
                    }
                } else console.log("Not enough fuel to make that ride");
            } else if (command == 'Refuel') {
                vehicle.fuel < 75 - +item ? fuel = +item : fuel = 75 - vehicle.fuel;
                console.log(`${car} refueled with ${fuel} liters`);
                vehicle.fuel += fuel;
            } else if (command == 'Revert') {
                vehicle.mileage -= +item;
                console.log(`${car} mileage decreased by ${item} kilometers`);
                if (vehicle.mileage < 10000) vehicle.mileage = 10000;
            }
        }
    });
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);