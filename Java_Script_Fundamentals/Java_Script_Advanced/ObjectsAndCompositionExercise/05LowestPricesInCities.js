function lowestPricesInCities(input) {
    let array = {};
    input.forEach(entries => {
        let [town, product, price] = entries.split(' | ');
        price = Number(price);
        if (product in array) {
            if (array[product].price > price) array[product] = { price, town };
        } else array[product] = { price, town };
    });
    Object.entries(array).forEach(([product, items]) => console.log(`${product} -> ${items.price} (${items.town})`));
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);