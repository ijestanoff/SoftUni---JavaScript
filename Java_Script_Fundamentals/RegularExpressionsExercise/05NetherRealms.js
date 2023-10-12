function netherRealms(input) {
    let demons = {};
    let regex = /[\+-]*\d+[.\d+]*/g;
    let parts = input.split(/[, ]+/g);
    for (let demon of parts) {
        let health = 0;
        for (let s of demon) {
            if ((s < '0' || s > '9') && s != '+' && s != '-' && s != '*' && s != '/' && s != '.') {
                health += s.charCodeAt(0);
            }
        }
        let damageArray = demon.match(regex);
        let damage = 0;
        if (damageArray != null) {
            for (let curr of damageArray) {
                damage += Number(curr);
            }
        }
        for (let s of demon) {
            if (s == '*') damage *= 2;
            else if (s == '/') damage /= 2;
        }
        demons[demon] = { 'health': health, 'damage': damage };
    }
    let keyValueArray = Object.entries(demons);
    keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));
    demons = Object.fromEntries(keyValueArray);

    for (let demon in demons) {
        console.log(`${demon} - ${demons[demon]['health']} health, ${demons[demon]['damage'].toFixed(2)} damage`);
    }
}

netherRealms ('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms ('Gos/ho');