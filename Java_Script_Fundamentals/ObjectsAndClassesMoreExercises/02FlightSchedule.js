function flightSchedule(input) {
    let rearyToFly = [];
    for (let parts of input[0]) {
        let [code, city] = parts.split(' ');
        let flight = { code, city, canceled: false };
        rearyToFly.push(flight);
    }
    for (let parts of input[1]) {
        let code = parts.split(' ')[0];
        for (let index = 0; index < rearyToFly.length; index++) {
            if (rearyToFly[index].code == code) {
                rearyToFly[index].canceled = true;
            }
        }
    }
    if (input[2] == 'Cancelled') {
        for (let i = 0; i < rearyToFly.length; i++) {
            if (rearyToFly[i].canceled) console.log(`{ Destination: '${rearyToFly[i].city}', Status: 'Cancelled' }`);
        }
    } else {
        for (let i = 0; i < rearyToFly.length; i++) {
            if (!rearyToFly[i].canceled) console.log(`{ Destination: '${rearyToFly[i].city}', Status: 'Ready to fly' }`);
        }
    }
}

// flightSchedule([[
//     'WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'], ['Cancelled']]);
flightSchedule ([[
'WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'], ['Ready to fly']
]);