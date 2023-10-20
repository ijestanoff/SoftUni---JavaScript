function treasureHunt(input) {
    let initialChest = input.shift().split('|');
    //let stolenEllements = [];
 
 
    for (let current of input) {
        let tokens = current.split(' ');
        let command = tokens.shift();
 
        if (command == 'Yohoho!') {
            break;
        } else if (command == 'Loot') {
            for (i = 0; i < tokens.length; i++) {
                let currEl = tokens[i];
                if (initialChest.includes(currEl)) {
                    continue;
                } else {
                    initialChest.unshift(currEl)
                }
            }
        } else if (command == 'Drop') {
            let index = Number(tokens[0]);
            let el = initialChest[index];
            if (index <= 0 || index > initialChest.length) {
                continue;
            }
            initialChest.splice(index, 1);
            initialChest.push(el);
 
        } else if (command == 'Steal') {
            let stolenEllements = [];
            // let count = Number(tokens[0]);
            // if (count > initialChest.length) count = initialChest.length;
            // // for (i = 0; i < count; i++) {
            // //     let currEl = initialChest.pop();
            // //     stolenEllements.unshift(currEl);
            // // }
            // for (let i = initialChest.length - count; i < initialChest.length; i++) {
            //     stolenEllements.push(initialChest[i]);
            // }
            // console.log(stolenEllements.join(', '));
            // initialChest.splice(initialChest.length - count, count);


            let count = Number(tokens[0]);
            for (i = 0; i < count; i++) {
                let currEl = initialChest.pop();
                stolenEllements.unshift(currEl);
            }
            console.log(stolenEllements.join(', '));
        }
    }
    let count = initialChest.length;
    let sum = 0;
 
    
    if (count == 0) {
        console.log(`Failed treasure hunt.`)
    } else {
        for (i = 0; i < count; i++) {
            let currEl = initialChest[i];
            sum += currEl.length;
        }
        console.log(`Average treasure gain: ${(sum / count).toFixed(2)} pirate credits.`);
    }
    
}