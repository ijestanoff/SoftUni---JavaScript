function solve([input]) {
    let pattern = /[@#](?<color>[a-z]{3,})[@#][^A-Za-z0-9]*\/+(?<amount>[0-9]*)\/+/g;
    for (let match of input.matchAll(pattern)) {
        let {color, amount} = match.groups;
        console.log(`You found ${amount} ${color} eggs!`);
    }
}

solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);


solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);

