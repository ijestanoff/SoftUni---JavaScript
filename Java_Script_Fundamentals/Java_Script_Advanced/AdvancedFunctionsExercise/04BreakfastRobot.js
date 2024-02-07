function solution() {
    let onStock = { protein: 0, fat: 0, carbohydrate: 0, flavour: 0 };
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function brekfast(input) {
        let [command, type, quantity] = input.split(' ');
        if (command == 'report') {
            return `protein=${onStock.protein} carbohydrate=${onStock.carbohydrate} fat=${onStock.fat} flavour=${onStock.flavour}`;
        }
        else if (command == 'prepare') {
            quantity = Number(quantity);
            let array = Object.entries(recipes[type]);
            for ([elm, recieptQty] of array) {
                if (onStock[elm] < recieptQty * quantity) {
                    return `Error: not enough ${elm} in stock`;
                }
            }
            // array.forEach(part => {
            //     let [elm, recieptQty] = part;
            //     if (onStock[elm] < recieptQty * quantity) {
            //         return `Error: not enough ${elm} in stock`;
            //     }
            // });
            array.forEach(([elm, recieptQty]) => onStock[elm] -= recieptQty * quantity);
            return 'Success';
        }
        else if (command == 'restock') {
            onStock[type] += Number(quantity);
            return 'Success';
        }
    }
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock


console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));


// console.log (manager ("prepare turkey 1"));
// console.log (manager ("restock protein 10"));
// console.log (manager ("prepare turkey 1"));
// console.log (manager ("restock carbohydrate 10"));
// console.log (manager ("prepare turkey 1"));
// console.log (manager ("restock fat 10"));
// console.log (manager ("prepare turkey 1"));
// console.log (manager ("restock flavour 10"));
// console.log (manager ("prepare turkey 1"));
// console.log (manager ("report"));
