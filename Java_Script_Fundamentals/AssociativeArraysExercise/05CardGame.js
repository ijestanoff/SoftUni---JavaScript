function cardGame (input) {
    let players = {}
    for (let row of input) {
        let [player,hand] = row.split(': ');
        let cards = hand.split(', ');
        if (!players.hasOwnProperty(player)) {
            players[player] = [];
        }
        for (let card of cards) {
            if (!players[player].includes(card)) {
                players[player].push(card);
            }
        }
    }
    for (let name in players) {
        let sum = 0;
        for (let card of players[name]) {
            let first = card[0];
            let second = card[card.length-1];
            let cardTotal = 0;
            if (first >= '2' && first<=9) cardTotal = Number(first);
            else if (first == '1') cardTotal = 10;
            else if (first == 'J') cardTotal = 11;
            else if (first == 'Q') cardTotal = 12;
            else if (first == 'K') cardTotal = 13;
            else if (first == 'A') cardTotal = 14;
            if (second == 'S') sum += cardTotal * 4;
            else if (second == 'H') sum += cardTotal * 3;
            else if (second == 'D') sum += cardTotal * 2;
            else if (second == 'C') sum += cardTotal;
        }
        console.log(`${name}: ${sum}`);
    }
}

// cardGame ([
// 'Peter: 2C, 4H, 9H, AS, QS',
// 'Tomas: 3H, 10S, JC, KD, 5S, 10S',
// 'Andrea: QH, QC, QS, QD',
// 'Tomas: 6H, 7S, KC, KD, 5S, 10C',
// 'Andrea: QH, QC, JS, JD, JC',
// 'Peter: JD, JD, JD, JD, JD, JD'
// ]);
cardGame ([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);
