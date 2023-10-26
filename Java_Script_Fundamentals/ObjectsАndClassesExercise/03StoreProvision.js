function storeProvision(input1, input2) {
    let store = {};
    for (let i = 0; i < input1.length; i += 2) {
        store[input1[i]] = Number(input1[i + 1]);
    }
    for (let i = 0; i < input2.length; i += 2) {
        if (store.hasOwnProperty(input2[i])) {
            store[input2[i]] += Number(input2[i + 1]);
        }
        else store[input2[i]] = Number(input2[i + 1]);
    }
    for (let [key,value] of Object.entries(store)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);