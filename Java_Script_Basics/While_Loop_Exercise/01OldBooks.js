function oldBooks (input) {
    let ani_book = input[0];
    let book_number = 0;
    let count = 1;
    while (true) {
        let new_book = input[count++];
        if (ani_book == new_book) {
            console.log(`You checked ${book_number} books and found it.`);
            break;
        }
        if (new_book == "No More Books") {
            console.log("The book you search is not here!")
            console.log(`You checked ${book_number} books.`);
            break;
        }
        book_number += 1;
    }    
}