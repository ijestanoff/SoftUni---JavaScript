function travelTime (input) {
    let countries = {};
    for (let destination of input) {
        let part = destination.split(' > ');
        let country = part[0];
        let sity = part[1];
        let cost = Number(part[2]);
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][sity] = cost;
        } else if (!countries[country].hasOwnProperty(sity)) {
            countries[country][sity] = cost;
        } else { //same country and sity
            if (countries[country][sity] > cost) {
                countries[country][sity] = cost;
            }
        }
    }
    
    let sortByKey = Object.entries(countries);
    sortByKey.sort((a, b) => a[0].localeCompare(b[0]));
    countries = Object.fromEntries(sortByKey);

    for (let country in countries) {

        let sortByValue = Object.entries(countries[country]);
        sortByValue.sort((a,b) => a[1] - b[1]);
        countries[country] = Object.fromEntries(sortByValue);

        let row = `${country} -> `;
        for (let sity in countries[country]) {
            row += `${sity} -> ${countries[country][sity]} `;
        }
        console.log(row);
    }
}

// travelTime ([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
//     ]);
travelTime ([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);