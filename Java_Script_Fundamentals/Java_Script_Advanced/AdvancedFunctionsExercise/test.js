class Person {
    constructor (age) {
        this.age = age;
    }

    get ages() {
        return this._age;
    }

    set ages(age) {
        if (age == 10) age = 5;
        this._age = age;
    }
}

let newPerson = new Person(10);
console.log(newPerson);
console.log(newPerson.age);
newPerson.ages = 3
console.log(newPerson.ages);