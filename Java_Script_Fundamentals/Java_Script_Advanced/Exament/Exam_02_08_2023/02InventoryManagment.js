class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        if (this.capacity <= 0) {
            throw new Error('The inventory is already full.');
        }
        let inx = -1;
        this.items.forEach((item, i) => {
            if (item.itemName == itemName) {
                inx = i;
            }
        });
        if (inx != -1) {
            this.items[inx].quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }
        this.capacity --;
        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        let inx = -1;
        this.items.forEach((item, i) => {
            if (item.itemName == itemName) {
                inx = i;
            }
        });
        if (inx == -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }
        if (this.items[inx].quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }
        this.items[inx].quantity -= quantity;

        if (this.items[inx].quantity == 0) {
            let name = this.items[inx].itemName;
            this.items.splice(inx,1);
            this.outOfStock.push(name);
        }
        this.capacity ++;
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        let inx = -1;
        this.items.forEach((item, i) => {
            if (item.itemName == itemName) {
                inx = i;
            }
        });
        if (inx != -1) {
            this.items[inx].quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }
        this.capacity --;
        inx = -1;
        this.outOfStock.forEach((name, i) => {
            if (name == itemName) {
                inx = i;
            }
        });
        if (inx != -1) {
            this.outOfStock.splice(inx,1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let returnData = 'Current Inventory:';
        this.items.forEach (item => {
            returnData += `\n${item.itemName}: ${item.quantity}`;
        });
        if (this.outOfStock.length > 0) returnData += `\nOut of Stock: ${this.outOfStock.join(', ')}`
        return returnData;
    }
}

// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Uncaught Error Error: The inventory is already full.

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.sellItem("Paintbrush", 2));

// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Added 3 Chisel(s) to the inventory.
// Sold 3 Drill(s) from the inventory.
// Uncaught Error Error: The item Paintbrush is not available in the inventory.

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));
 
// Added 10 Drill(s) to the inventory. 
// Added 5 Hammer(s) to the inventory. 
// Added 3 Chisel(s) to the inventory. 
// Sold 3 Drill(s) from the inventory. 
// Restocked 5 Drill(s) in the inventory. 
// Restocked 1 Paintbrush(s) in the inventory.
 
const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Hammer", 1));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());

// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Added 3 Chisel(s) to the inventory.
// Sold 3 Drill(s) from the inventory.
// Sold 5 Hammer(s) from the inventory.
// Restocked 5 Drill(s) in the inventory.
// Restocked 1 Paintbrush(s) in the inventory.
// Current Inventory:
// Drill: 12
// Chisel: 3
// Paintbrush: 1
// Out of Stock: Hammer






 
