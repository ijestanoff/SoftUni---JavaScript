class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        } else {
            this.products.push({ product, quantity });
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }

    quantityCheck(product, minimalQuantity) {
        let stock = this.products.filter(item => item.product == product)[0];
        if (!stock) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        if (minimalQuantity <= stock.quantity) {
            return `You have enough from product ${product}.`;
        }
        let returnData = '';
        this.products.forEach(item => {
            let difference = 0;
            if (item.product == product) {
                difference = minimalQuantity - item.quantity;
                item.quantity = minimalQuantity;
                returnData = `You added ${difference} more from the ${product} products.`;
            }
        });
        return returnData;
    }

    sellProduct(product) {
        let stock = this.products.filter(item => item.product == product);
        if (!stock.length) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        let returnData = '';
        this.products.forEach(item => {
            if (item.product == product) {
                item.quantity--;
                this.sales.push({ product, quantity: 1 });
                returnData = `The ${product} has been successfully sold.`;
            }
        });
        return returnData;
    }

    revision() {
        if (!this.sales.length) {
            throw new Error(`There are no sales today!`);
        }
        let returnData = `You sold ${this.sales.length} products today!\nProducts in the warehouse:`;
        this.products.forEach(item => returnData += `\n${item.product}-${item.quantity} more left`);
        return returnData;
    }
}


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// //console.log(myOnlineShop.loadingStore('TV', 40, 500));
// myOnlineShop.quantityCheck('laptopa', 10);

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


 

