function carFactory(car) {
    if (car.power <= 90) car.engine = { power: 90, volume: 1800 };
    else if (car.power <= 120) car.engine = { power: 120, volume: 2400 };
    else if (car.power <= 200) car.engine = { power: 200, volume: 3500 };
    delete car.power;
    let carriage = car.carriage;
    let color = car.color;
    car.carriage = { type: carriage, color };
    delete car.color;
    let wheelsize = car.wheelsize;
    if (wheelsize % 2 == 0) wheelsize--;
    car.wheelsize = [wheelsize, wheelsize, wheelsize, wheelsize];
    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));

// 