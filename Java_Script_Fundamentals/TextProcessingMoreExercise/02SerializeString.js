function serializeString (input) {
    let stringSet = new Set();
    input[0].split('').forEach(symbol => stringSet.add(symbol));
    stringSet.forEach(symbol => {
        let output = `${symbol}:`
        for (let index = 0; index<input[0].length; index++){
            if (symbol == input[0][index]) {
                output +=`${index}/`;
            }
        }
        console.log(output.slice(0,output.length-1));
    });
}

serializeString (["abababa"]);
console.log('-----');
serializeString (["avjavamsdmcalsdm"]);