function inventory(input) {
    let items = input.shift().split(', ');
    for (let part of input) {
        let commands = part.split(' - ');
        if (commands[0] == 'Craft!') break;
        let command = commands[0];
        let item = commands[1];
        if (command == 'Collect') {
            if (!items.includes(item)) {
                items.push(item);
            }
        } else if (command == 'Drop') {
            while (items.includes(item)) {
                let ind = items.indexOf(item);
                items.splice(ind, 1);
            }
        } else if (command == 'Combine Items') {
            let oldNewItem = item.split(':');
            let oldItem = oldNewItem[0];
            let newItem = oldNewItem[1];
            if (items.includes(oldItem)) {
                let ind = items.indexOf(oldItem);
                items.splice(ind + 1, 0, newItem);
            }
        } else if (command == 'Renew') {
            if (items.includes(item)) {
                let ind = items.indexOf(item);
                items.splice(ind, 1);
                items.push(item);
            }
        }
    }
    console.log(items.join(', '));
}

// inventory ([
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
//   ]
//   );
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
);