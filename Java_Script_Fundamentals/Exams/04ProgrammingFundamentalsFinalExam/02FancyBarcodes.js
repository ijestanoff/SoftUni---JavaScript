function fancyBarcode(input) {
    input.shift();
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4}[A-Za-z0-9]*[A-Z])@#+/;
    input.forEach(part => {
        let match = part.match(pattern);
        let output = ''
        if (match) {
            Array.from(match[1])
                .forEach(symbol => !isNaN(symbol) ? output += symbol : output = output);
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