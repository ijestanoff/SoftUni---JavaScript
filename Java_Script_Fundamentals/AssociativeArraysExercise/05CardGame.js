function cardGame(input) {
    let players = {}
    let hands = { 1: 10, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 }
    input.forEach(row => {
        let [player, hand] = row.split(': ');
        let cards = hand.split(', ');
        if (!players.hasOwnProperty(player)) players[player] = [];
        cards.forEach(card => {
            if (!players[player].includes(card)) players[player].push(card);
        });
    });
    for (let name in players) {
        let sum = 0;
        players[name].forEach(card => {
            let [first, second] = [card[0], card[card.length - 1]];
            sum += hands[first] * hands[second];
        });
        console.log(`${name}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('--------');
cardGame([
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
