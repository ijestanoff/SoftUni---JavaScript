function catalogue (input) {
    let catalog = {};
    for (let part of input) {
        let items = part.split(' : ');
        let product = items[0];
        let price = Number(items[1]);
        catalog[product] = price;
    }
    let sortCatalog = Object.entries(catalog);
    sortCatalog.sort((a,b) => a[0].localeCompare(b[0]));
    catalog = Object.fromEntries(sortCatalog);
    for (let index = 65; index <= 90; index ++){
        let letter = String.fromCharCode(index);
        let letterAdded = false;
        for (let key in catalog) {
            if (key.startsWith(letter)) {
                if (!letterAdded) {
                    console.log(letter);
                    letterAdded = true;
                }
                console.log(`  ${key}: ${catalog[key]}`);
            }
        }
    }
}

catalogue ([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
// catalogue ([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]);