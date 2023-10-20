function shoppingList(input) {
    let shopList = input.shift().split('!');
    for (let part of input) {
        let [command, item, correct] = part.split(' ');
        if (command == 'Shopping!') break;
        if (command == 'Urgent' && !shopList.includes(item)) shopList.unshift(item);
        else if (shopList.includes(item)) {
            let i = shopList.indexOf(item);
            if (command == 'Unnecessary') shopList.splice(i, 1);
            if (command == 'Correct') shopList[i] = correct;
            if (command == 'Rearrange') shopList.push(shopList.splice(i, 1));
        }
    }
    console.log(shopList.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);