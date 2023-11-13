function rageQuit (input) {
    let regex = /(?<string>\D+)(?<number>[0-9]+)/g;
    let match = input[0].matchAll(regex);
    let string = '';
    for (let currMatch of match) {
        string += currMatch.groups.string.repeat(currMatch.groups.number).toUpperCase();
    }
    let symbols = string.split('');
    let set = new Set(symbols);
    console.log(`Unique symbols used: ${set.size}\n${string}`);
}

rageQuit (['a3']);
rageQuit (['aSd2&5s@1']);