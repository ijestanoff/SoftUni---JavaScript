function cappyJuice(input) {
    let juices = new Map;
 
    for(let juice of input) {
        let splitString = juice.split(/\s*[=>]\s*/g);
        let juiceName = splitString[0];
        let quantity = Number(splitString[2]);
 
        if(juices.has(juiceName)) {
            let getValue = juices.get(juiceName);
            juices.delete(juiceName);
            juices.set(juiceName, quantity + getValue);
 
        }
        else juices.set(juiceName, quantity);
    }
 
    for(let [k, v] of juices) {
        let bottles = Math.floor(v / 1000);
        if(bottles >= 1) {
            console.log(`${k} => ${bottles}`);
        }
    }
}

cappyJuice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
