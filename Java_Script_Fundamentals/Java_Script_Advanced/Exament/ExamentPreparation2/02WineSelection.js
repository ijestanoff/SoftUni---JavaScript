class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        debugger
        if (!this.space) {
            throw new Error('Not enough space in the cellar.');
        }
        this.space--;
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let stock = this.wines.filter(item => item.wineName == wineName)[0];
        let inx = this.wines.indexOf(stock);
        if (!stock) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (stock.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        this.wines[inx].paid = true;
        this.bill += price;
        return `You bought a ${stock.wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let stock = this.wines.filter(item => item.wineName == wineName)[0];
        let inx = this.wines.indexOf(stock);
        if (!stock) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if (!stock.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(inx, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        
        if (!wineType) {
            let returnData = `You have space for ${this.space} bottles more.\n`;
            returnData += `You paid ${this.bill}$ for the wine.`;
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            this.wines.forEach(wine => {
                returnData += `\n${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
            });
            return returnData;
        } else {
            let stock = this.wines.filter(item => item.wineType == wineType)[0];
            if (!stock) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                return `${stock.wineName} > ${stock.wineType} - ${stock.paid ? 'Has Paid' : 'Not Paid'}.`;
            }
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// You bought a Sauvignon Blanc Marlborough for a 120$.
// Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// You drank a bottle of Sauvignon Blanc Marlborough.
// Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

// You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// Bodegas Godelia Mencía > Rose - Not Paid.

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.




