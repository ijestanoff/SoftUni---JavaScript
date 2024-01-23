function createSortedList() {
    const array = [];
    return {
        add(num) { 
            array.push(num);
            array.sort((a,b) => a-b); 
            this.size = array.length;
        },
        get(idx) {
            if (idx >=0 && idx< array.length)  return array[idx]
        },
        remove(idx) { 
            if (idx >=0 && idx< array.length) array.splice(idx,1) 
            this.size = array.length;
        },
        size: 0
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(1);
list.add(2);
console.log(list.size);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
