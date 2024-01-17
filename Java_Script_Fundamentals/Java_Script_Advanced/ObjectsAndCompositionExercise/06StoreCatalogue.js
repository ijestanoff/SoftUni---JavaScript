function storeCatalogue(input) {
    let catalogue = {};
    input.forEach(product => {
        let initial = product[0];
        if (initial in catalogue) {
            catalogue[initial].push(product);
        } else {
            catalogue[initial] = [product];
        }
    });
    Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([initials, items]) => {
            console.log(initials);
            items.sort((a,b) => a.localeCompare(b))
                .forEach(product => console.log(`  ${product.split(' :').join(':')}`))
        });
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);