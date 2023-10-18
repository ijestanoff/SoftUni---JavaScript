function computerStore (input) {
    let [totalPrice, totalWithTaxes, taxes, price]  = [0, 0, 0, ''];
    for (price of input) {
        if (price == 'special' || price == 'regular') break;
        if (Number(price) < 0) console.log("Invalid price!");
        else totalPrice += Number(price);
    }
    if (totalPrice == 0) console.log("Invalid order!");
    else {
        taxes = totalPrice * 1.2 - totalPrice;
        totalWithTaxes = totalPrice + taxes;
        if (price == 'special') totalWithTaxes *= 0.9;
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalWithTaxes.toFixed(2)}$`);
    }
}

computerStore ([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);

// computerStore ([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ]);

// computerStore ([
//     'regular'
//     ]);
    
    
    