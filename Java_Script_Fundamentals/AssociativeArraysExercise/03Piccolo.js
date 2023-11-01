function piccolo (input) {
    let cars = [];
    input.forEach(event => {
        let [direction, car] = event.split(', ');
        if (direction == 'IN') {
            if (!cars.includes(car)) cars.push(car); 
        } else if (direction == 'OUT') {
            if (cars.includes(car)) cars.splice(cars.indexOf(car),1);
        }
    });
    if (cars.length == 0) console.log('Parking Lot is Empty');
    else console.log(cars.sort().join('\n'));
}

piccolo (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
console.log('----');
piccolo (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);