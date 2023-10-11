function softUniBarIncome(input) {
    let regex = /[^%\$\.|]*%(?<name>[A-Z][a-z]+)%[^%\$\.|]*<(?<product>\w+)>[^%\$\.|]*\|(?<count>\d+)\|[^%\$\.|0-9]*(?<price>\d+\.*\d*)\$/g;
    let totalPrice = 0;
    for (let part of input) {
        if (part == 'end of shift') break;
        let match = part.matchAll(regex);
        for (const curMatch of match) {
            if (curMatch.groups.name != '' && curMatch.groups.product != '' && Number(curMatch.groups.count) > 0 && Number(curMatch.groups.price) > 0) {
                let total = Number(curMatch.groups.count) * Number(curMatch.groups.price);
                totalPrice += total;
                console.log(`${curMatch.groups.name}: ${curMatch.groups.product} - ${total.toFixed(2)}`);
            }
        }
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);