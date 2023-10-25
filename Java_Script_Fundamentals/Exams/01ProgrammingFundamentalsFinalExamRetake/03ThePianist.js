function thePianist(input) {
    let pieces = {};
    let number = Number(input.shift());
    for (let num = 0; num < number; num++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = { 'composer': composer, 'key': key };
    }
    for (let part of input) {
        let items = part.split('|');
        let [command, piece, composer, key] = items;
        if (command == 'Stop') break;
        else if (command == 'Add') {
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { 'composer': composer, 'key': key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command == 'Remove') {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece]['key'] = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (let piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece]['composer']}, Key: ${pieces[piece]['key']}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);
// thePianist ([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
//   ]
//   );