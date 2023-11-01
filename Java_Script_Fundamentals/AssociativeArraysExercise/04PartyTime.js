function partyTime(input) {
    let vip = [];
    let regular = [];
    let isPartiList = true;
    for (let guest of input) {
        if (guest == 'PARTY') isPartiList = false;
        if (isPartiList) {
            if (!isNaN(guest.charAt(0))) vip.push(guest);
            else regular.push(guest);
        } else {
            if (!isNaN(guest.charAt(0)) && vip.includes(guest)) {
                vip.splice(vip.indexOf(guest), 1);
            } else {
                if (regular.includes(guest)) regular.splice(regular.indexOf(guest), 1);
            }
        }
    }
    console.log(`${vip.length + regular.length}\n${vip.join('\n')}\n${regular.join('\n')}`);
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('-------');
partyTime(['m8rfQBvl',
    'fc1oZCE0', 'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);