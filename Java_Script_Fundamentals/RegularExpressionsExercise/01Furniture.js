function furniture (input) {
    let regex = />>(?<product>[A-Z]+[a-z]*)<<(?<price>\d+\.*(\d)*)!(?<quantity>\d+)/g;
    console.log('Bought furniture:');
    let moneySpend = 0;
    for (let part of input) {
        if (part == 'Purchase') break;
        let match = part.matchAll(regex);
        for (const curMatch of match) {
            console.log(curMatch.groups.product);
            moneySpend += curMatch.groups.price * curMatch.groups.quantity;
        }
    }
    console.log(`Total money spend: ${moneySpend.toFixed(2)}`);
}

furniture ([
'>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
// furniture (['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']);
// furniture (['>Invalid<<!4',
// '>Invalid<<!2',
// '>Invalid<<!5',
// 'Purchase']);