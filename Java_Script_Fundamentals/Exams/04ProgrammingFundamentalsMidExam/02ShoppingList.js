function shoppingList (input) {
    let shopList = input.shift().split('!');
    for (let part of input) {
        let commands = part.split(' ');
        if (commands[1] == 'Shopping!') break;
        let command = commands[0];
        let item = commands[1];
        if (command == 'Urgent') {
            if (!shopList.includes(item)) {
                shopList.unshift(item);
            }
        } else if (command == 'Unnecessary') {
            if (shopList.includes(item)) {
                let i = shopList.indexOf(item);
                shopList.splice(i,1);
            }
        } else if (command == 'Correct') {
            let newItem = commands[2];
            if (shopList.includes(item)) {
                let i = shopList.indexOf(item);
                shopList[i] = newItem;
            }
        } else if (command == 'Rearrange') {
            if (shopList.includes(item)) {
                let i = shopList.indexOf(item);
                let temp = shopList[i];
                shopList.splice(i,1);
                shopList.push(temp);
            }
        }
    }
    console.log(shopList.join(', '));
}

shoppingList (["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);