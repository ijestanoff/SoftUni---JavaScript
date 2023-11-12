function fancyBarcode (input) {
    input.shift();
    let regex = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4}[A-Za-z0-9]*[A-Z])@#+/g;
    input.forEach(part => {
        let match = part.matchAll(regex);
        let empty = true;
        for (curMatch of match) {
            let output = ''
            for (symbol of curMatch.groups.barcode) {
                if (!isNaN(symbol)) output += symbol;
            }
            if (output == '') console.log('Product group: 00');
            else console.log(`Product group: ${output}`);
            empty = false;
        }
        if (empty) console.log('Invalid barcode');
    });
}

fancyBarcode ((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
);
fancyBarcode ((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
);