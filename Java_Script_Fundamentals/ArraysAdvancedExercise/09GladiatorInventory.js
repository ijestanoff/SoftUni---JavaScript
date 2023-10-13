function gladiatorInventory (input) {
    let inventory = input[0].split(' ');

    for (let index=1; index<input.length; index++) {
        let command = input[index].split(' ');
        let action = command[0];
        let equpment = command[1];
        if (action == 'Buy') {
            if (!inventory.includes(equpment)) {
                inventory.push(equpment);
            }
        } else if (action == 'Trash') {
            if (inventory.includes(equpment)) {
                for (cnt=inventory.length - 1; cnt>=0 ; cnt--){
                    if (inventory[cnt] == equpment) inventory.splice(cnt,1);
                }
            }
        } else if (action == 'Repair') {
            if (inventory.includes(equpment)) {
                for (cnt=0; cnt<inventory.length; cnt++){
                    if (inventory[cnt] == equpment) inventory.splice(cnt,1);
                }
                inventory.push(equpment);
            }
        } else if (action == 'Upgrade') {
            let upgrade = equpment.split('-');
            let upFormat = `${upgrade[0]}:${upgrade[1]}`;
            if (inventory.includes(upgrade[0])) {
                for (cnt=0; cnt<inventory.length; cnt++){
                    if (inventory[cnt] == upgrade[0]) inventory.splice(cnt+1,0,upFormat);
                }
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory (['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel']);
gladiatorInventory (['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V']);