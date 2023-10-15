function bookShelf(input) {
    let shelves = {};
    for (let part of input) {
        if (part.includes(' -> ')) {
            let commands = part.split(' -> ');
            let shelfId = commands[0];
            let genre = commands[1];
            if (!shelves.hasOwnProperty(commands[0])) {
                shelves[shelfId] = {};
                shelves[shelfId][genre] = {};
            }
        } else {
            let commands = part.split(': ');
            let title = commands[0];
            let temporals = commands[1].split(', ');
            let author = temporals[0];
            let genre = temporals[1];
            for (let shelf in shelves) {
                if (shelves[shelf].hasOwnProperty(genre)) {
                    shelves[shelf][genre][title] = author;
                }
            }
        }
    }
    let shelfTotal = {};
    for (let shelf in shelves) {
        for (let genre in shelves[shelf]) {
            let booksCount = Object.keys(shelves[shelf][genre]).length;
            shelfTotal[shelf+'_'] = booksCount;
        }
    }
    //sort by number of books
    let sortByValue = Object.entries(shelfTotal);
    sortByValue.sort((a, b) => b[1] - a[1]);
    shelfTotal = Object.fromEntries(sortByValue);

    for (let shelf in shelfTotal) {
        shelf = shelf.slice(0,shelf.length-1);
        for (let genre in shelves[shelf]) {
            //sort by name of book
            let sortByBook = Object.entries(shelves[shelf][genre]);
            sortByBook.sort((a,b) => a[0].localeCompare(b[0]));
            shelves[shelf][genre] = Object.fromEntries(sortByBook);

            let booksCount = Object.keys(shelves[shelf][genre]).length;
            console.log(`${shelf} ${genre}: ${booksCount}`);
            for (let bookTitle in shelves[shelf][genre]) {
                console.log(`--> ${bookTitle}: ${shelves[shelf][genre][bookTitle]}`);
            }
        }
    }
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Losing Dreams: Gail Starr, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);
// bookShelf([
//     '1 -> mystery',
//     '2 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Lions and Rats: Gabe Roads, history',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi']);
