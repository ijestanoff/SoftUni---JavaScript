function roadRadar(speed, area) {
    const limits = { motorway: 130, interstate: 90, city: 50, residential: 20};
    const limit = limits[area];
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status = 'speeding';
        if (speed - limit > 20) status = 'excessive speeding';
        if (speed - limit > 40) status = 'reckless driving';
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar (40, 'city');
roadRadar (21, 'residential');
roadRadar (120, 'interstate');
roadRadar (200, 'motorway');