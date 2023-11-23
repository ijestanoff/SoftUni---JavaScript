function fancyBarcode(input) {
    input.shift();
    input.map(part => {
        if (match = part.match(/@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/)) {
            let output = match[1].split('').filter(symbol => !isNaN(symbol)).reduce((acc, val) => acc + val, '');
            output == '' ? console.log('Product group: 00') : console.log(`Product group: ${output}`);
        } else console.log('Invalid barcode');
    });
}

fancyBarcode((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
);
fancyBarcode((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);