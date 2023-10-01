function carWash (input) {
    let clean = 0;
    for (let operation of input) {
        if (operation == 'soap') {
            clean += 10;
        } else if (operation == 'water') {
            clean *= 1.2;
        } else if (operation == 'vacuum cleaner') {
            clean *= 1.25;
        } else if (operation == 'mud') {
            clean *= 0.9;
        }
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);