class List {
    constructor() {
        this._array = [];
        this.size = 0;
    }

    add(element) {
        this._array.push(element)
        this._array.sort((a, b) => a - b);
        this.size = this._array.length;
    }

    remove(index) {
        if (index < 0 || index >= this.size) return;
        this._array.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.size) return;
        return this._array[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
