function travelTime(input) {
    let countries = {};
    input.forEach(destination => {
        let [country, sity, cost] = destination.split(' > ');
        cost = Number(cost);
        if (!(country in countries)) countries[country] = { [sity]: cost };
        else if (!(sity in countries[country])) countries[country][sity] = cost;
        else { //same country and sity
            if (countries[country][sity] > cost) countries[country][sity] = cost;
        }
    });
    //sort countries by alphabetical order
    Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0])).forEach(country => {
        countries[country[0]] = Object.fromEntries(Object.entries(countries[country[0]]).sort((a, b) => a[1] - b[1]));
        let row = `${country[0]} -> `;
        Object.entries(countries[country[0]]).forEach(sity => row += `${sity[0]} -> ${sity[1]} `);
        console.log(row);
    });
}

// travelTime ([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
//     ]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);