function garage(input) {
    let garages = {};
    let count = 0;
    for (let part of input) {
        let data = part.split(' - ');
        let garageNum = data[0] + '_' + count++;
        garages[garageNum] = {};
        let car = data[1].split(', ');
        for (let type of car) {
            let property = type.split(': ');
            garages[garageNum][property[0]] = property[1];
        }
    }

    let sortByKey = Object.entries(garages);
    sortByKey.sort((a, b) => a[0].localeCompare(b[0]));
    garages = Object.fromEntries(sortByKey);

    let lastGarage = '';
    for (let garage in garages) {
        let num = garage.split('_');
        if (lastGarage != num[0]) {
            console.log(`Garage № ${num[0]}`);
        }
        let result = '--- ';
        let cnt = 0;
        for (let [property,value] of Object.entries(garages[garage])) {
            result += `${property} - ${value}`;
            if (++cnt < Object.keys(garages[garage]).length) result += ', ';
        }
        console.log(result);
        lastGarage = num[0];
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
// garage([
//     '1 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol']);
