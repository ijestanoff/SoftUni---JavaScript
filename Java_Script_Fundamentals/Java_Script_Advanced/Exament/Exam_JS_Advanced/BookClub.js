class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let findIt = false;
        this.books.forEach(item => {
            if (item.title == title && item.author == author) findIt = true;
        });
        if (findIt) return `The book "${title}" by ${author} is already in ${this.library} library.`;
        this.books.push({ title, author });
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember (memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        }
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember (memberName, bookTitle){
        if (!(this.members.includes(memberName))) {
            throw new Error(`Member ${memberName} not found.`);
        }
        let inx = -1;
        this.books.forEach((item, i) => {
            if (item.title == bookTitle) {
                inx = i;
            }
        });
        if (inx == -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }
        let returnData = `Member ${memberName} has been assigned the book "${bookTitle}" by ${this.books[inx].author}.`
        this.books.splice(inx,1);
        return returnData;
    }

    generateReadingReport () {
        if (this.members.length == 0) {
            return `No members in the book club.`;
        }
        if (this.books.length == 0) {
            return `No available books in the library.`;
        }
        let returnData = `Available Books in ${this.library} library:`;
        this.books.forEach(item => {
            returnData += `\n"${item.title}" by ${item.author}`;
        });
        return returnData;
    }

    
}

class EEE extends BookClub {
        
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));


// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Peter has been joined to the book club.
// Uncaught Error Error: Member Mary not found.

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());


// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Alice is already a part of the book club.
// Member Alice has been assigned the book "The Great Gatsby" by F. Scott Fitzgerald.
// Available Books in The Bookaholics library:
// "To Kill a Mockingbird" by Harper Lee
// "1984" by George Orwell

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));


// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Peter has been joined to the book club.
// Uncaught Error Error: Book "The Da Vinci Code" not found.

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());


// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Peter has been joined to the book club.
// Member Peter has been assigned the book "1984" by George Orwell.
// Member Alice has been assigned the book "To Kill a Mockingbird" by Harper Lee.
// No available books in the library.








