class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let returnData = '';
        this.productStock.forEach(item => {
            if (item.productName == productName && item.size == size) {
                item.quantity += quantity;
                returnData = `You added ${quantity} more pieces of product ${productName} size ${size}`;
            }
        });
        if (!returnData) {
            this.productStock.push({ productName, size, quantity, price });
            returnData = `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
        return returnData;
    }

    sendProduct(productName, size) {
        let returnData = '';
        this.productStock.forEach((item, inx) => {
            if (item.productName == productName && item.size == size) {
                this.productStock.splice(inx, 1);
                returnData = `The product ${productName}, size ${size} was successfully removed from the inventory`;
            }
        });
        if (!returnData) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        return returnData;
    }

    findProductsBySize(size) {
        let returnData = [];
        let findProducts = this.productStock.filter(item => item.size == size);
        if (findProducts.length) {
            findProducts.forEach(item => {
                returnData.push(`${item.productName}-${item.quantity} pieces`);
            });
            return returnData.join(', ');
        } else {
            return `There are no products available in that size`;
        }
    }

    listProducts() {
        if (!this.productStock.length) {
            return `${this.storehouse} storehouse is empty`;
        }
        let returnData = `${this.storehouse} storehouse in ${this.location} available products:`;
        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName)).forEach(item => {
            returnData += `\n${item.productName}/Size:${item.size}/Quantity:${item.quantity}/Price:${item.price}$`
        });
        return returnData;
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

//   The product Shirt, size M was successfully added to the inventory
//   The product T-Shirt, size M was successfully added to the inventory
//   The product Sweather, size M was successfully added to the inventory
//   You added 10 more pieces of product Sweather size M

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully removed from the inventory
// Uncaught Error Error: The product Sweather, size M is not in the inventory

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// Shirt-10 pieces, T-Shirt-10 pieces
// There are no products available in that size

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());

// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// The product Shirt, size L was successfully added to the inventory
// The product Shoes, size 9 was successfully added to the inventory
// The product Shoes, size 9 was successfully removed from the inventory
// East storehouse in Milano available products:
// Shirt/Size:M/Quantity:10/Price:25$
// Shirt/Size:L/Quantity:5/Price:30$
// T-Shirt/Size:M/Quantity:10/Price:25$




