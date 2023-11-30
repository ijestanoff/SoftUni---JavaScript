function hand(holeCards, communityCards) {
    let cardsRank = { A: 14, K: 13, Q: 12, J: 11, 10: 10, 9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2, '♠': 1000, '♥': 100, '♦': 10, '♣': 1 }
    let type = 'nothing';
    let ranksFlush = [];
    let ranksStraight = [];
    let ranks = [];
    let [flush, straight] = [false, false];

    function revertCard(input) {
        input.forEach((element, idx) => {
            if (element == 14) input[idx] = 'A';
            else if (element == 13) input[idx] = 'K';
            else if (element == 12) input[idx] = 'Q';
            else if (element == 11) input[idx] = 'J';
            else input[idx] = String(input[idx]);
        })
        return input;
    }

    let cards = [...holeCards, ...communityCards]
        .map(card => [i, j] = [cardsRank[card.slice(0, card.length - 1)], cardsRank[card.slice(card.length - 1)]])
        .sort((a, b) => b[0] - a[0]);
    let items = String(cards.reduce((acc, val) => acc + val[1], 0));
    if (items.length == 1) items = '   ' + items;
    if (items.length == 2) items = '  ' + items;
    if (items.length == 3) items = ' ' + items;
    if (items[0] > 4 || items[1] > 4 || items[2] > 4 || items[3] > 4) { //check for flush
        flush = true;
        if (items[0] > 4) ranksFlush = cards.filter(card => card[1] == 1000);
        if (items[1] > 4) ranksFlush = cards.filter(card => card[1] == 100);
        if (items[2] > 4) ranksFlush = cards.filter(card => card[1] == 10);
        if (items[3] > 4) ranksFlush = cards.filter(card => card[1] == 1);
    }

    let previous = cards[0];
    ranksStraight.push(previous);
    for (let i = 1; i < 7; i++) { //check for straight
        if (previous[0] == cards[i][0]) continue;
        if (previous[0] == cards[i][0] + 1) {
            previous = cards[i];
            ranksStraight.push(previous);
            if (ranksStraight.length > 4) straight = true;
        }
        else {
            previous = cards[i];
            if (straight) previous = 0;
            else ranksStraight = [previous];
        }
    }
    if (straight && flush) { //check for straight-flush
        let ranksStraightFlush = [];
        for (let i = 0; i < ranksStraight.length; i++) {
            if (ranksFlush.includes(ranksStraight[i])) {
                ranksStraightFlush.push(ranksStraight[i][0]);
                if (ranksStraightFlush.length > 4) {
                    type = 'straight-flush';
                    return { type, ranks: revertCard(ranksStraightFlush) };
                }
            } else ranksStraightFlush = [];
        }
    }

    let hand = {}
    cards.forEach(card => { //check for four-of-a-kind
        if (card[0] in hand) hand[card[0]]++;
        else hand[card[0]] = 1;
    })
    for (let [key, val] of Object.entries(hand)) {
        if (val == 4) {
            type = 'four-of-a-kind';
            cards = cards.filter(card => card[0] != key);
            return { type, ranks: revertCard([key, cards[0][0]]) };
        }
    }
    let [three, two] = [0, 0];
    for (let [key, val] of Object.entries(hand)) { //check for full house
        if (val == 3) three = key;
        if (val == 2) two = key;
        if (three && two) {
            type = 'full house';
            return { type, ranks: revertCard([three, two]) };
        }
    }
    if (flush) {
        type = 'flush';
        ranks = revertCard(ranksFlush.slice(0, 5).map(card => card[0]));
        return { type, ranks };
    }
    if (straight) {
        type = 'straight';
        ranks = revertCard(ranksStraight.slice(0, 5).map(card => card[0]));
        return { type, ranks };
    }
    if (three) {
        type = 'three-of-a-kind';
        ranks = cards.filter(card => card[0] != three).map(card => card[0]).slice(0, 2);
        return { type, ranks: revertCard([three, ...ranks]) }
    }
    for (let [key, val] of Object.entries(hand)) { //check for two pair
        if (val == 2) {
            if (ranks.length) {
                ranks.unshift(key);
                type = 'two pair';
                cards = cards.filter(card => card[0] != ranks[0] && card[0] != ranks[1]);
                ranks.push(cards[0][0])
                return { type, ranks: revertCard(ranks) };
            } else ranks.push(key);
        }
    }
    if (two) { //check for pair
        cards = cards.filter(card => card[0] != two).slice(0, 3).map(card => card[0]);
        type = 'pair';
        return { type, ranks: revertCard([two, ...cards]) }
    }
    return { type, ranks: revertCard(cards.slice(0, 5).map(card => card[0])) }
}


console.log(hand(['9♥', '8♥'], ['7♥', '6♥', '2♥', '5♥', '10♦']));//{type: 'straight', ranks:['K','Q','J','10','9']}

// console.log(hand(['K♠', 'A♦'], ['J♣', 'Q♥', '9♥', '2♥', '3♦'])); //{type:'nothing', ranks:['A','K','Q','J','9']}
// console.log(hand(['K♠', 'Q♦'], ['J♣', 'Q♥', '9♥', '2♥', '3♦'])); //{type:'pair', ranks:['Q','K','J','9']}
// console.log(hand(['K♠', 'J♦'], ['J♣', 'K♥', '9♥', '2♥', '3♦'])); //{type:'two pair', ranks:['K','J','9']}
// console.log(hand(['4♠', '9♦'], ['J♣', 'Q♥', 'Q♠', '2♥', 'Q♦'])); //{type:'three-of-a-kind', ranks:['Q','J','9']}
// console.log(hand(['Q♠', '2♦'], ['J♣', '10♥', '9♥', 'K♥', '3♦']));//{type: 'straight', ranks:['K','Q','J','10','9']}
// console.log(hand(['A♠', 'K♦'], ['J♥', '5♥', '10♥', 'Q♥', '3♥']));//{type:'flush', ranks:['Q','J','10','5','3']}
// console.log(hand(['A♠', 'A♦'], ['K♣', 'K♥', 'A♥', 'Q♥', '3♦'])); //{type:'full house', ranks:['A','K']}
// console.log(hand(['2♠', '3♦'], ['2♣', '2♥', '3♠', '3♥', '2♦'])); //{type:'four-of-a-kind', ranks:['2','3']}
// console.log(hand(['8♠', '6♠'], ['7♠', '5♠', '9♠', 'J♠', '10♠']));//{type:'straight-flush', ranks:['J','10','9','8','7']}