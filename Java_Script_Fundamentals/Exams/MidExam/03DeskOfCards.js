function deckOfCards(input) {
    let cards = input.shift().split(', ');
    let num = Number(input.shift());
    for (let part of input) {
        let commands = part.split(', ');
        let command = commands[0];
        if (command == 'Add') {
            let card = commands[1];
            if (cards.includes(card)) console.log('Card is already in the deck');
            else {
                console.log('Card successfully added');
                cards.push(card);
            }
        } else if (command == 'Remove') {
            let card = commands[1];
            if (cards.includes(card)) {
                console.log('Card successfully removed');
                cards.splice(cards.indexOf(card), 1);
            } else {
                console.log('Card not found');
            }
        } else if (command == 'Remove At') {
            let index = Number(commands[1]);
            if (index < 0 || index >= cards.length) console.log('Index out of range');
            else {
                console.log('Card successfully removed');
                cards.splice(index, 1);
            }
        } else if (command == 'Insert') {
            let index = Number(commands[1]);
            let card = commands[2];
            if (index < 0 || index >= cards.length) console.log('Index out of range');
            else {
                if (cards.includes(card)) console.log('Card is already added');
                else {
                    console.log('Card successfully added');
                    cards.splice(index, 0, card);
                }
            }
        }
    }
    console.log(cards.join(', '));
}

deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"]);

deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"]);

deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])
    ;
