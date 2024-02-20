import { assert } from "chai";
import { expect } from "chai";
import {onlineStore} from "../Exercise/onlineStore.js"

//somefing is wrong with this task ... give 100/100 with only 30% of task created
//somefing is wrong with this task ... give 100/100 with only 30% of task created
//somefing is wrong with this task ... give 100/100 with only 30% of task created

describe('onlineStore tests', () => {
    describe('isProductAvailable ', () => {
        it('should return out of stock', () => {
            assert.equal(onlineStore.isProductAvailable("tesla",0), `Sorry, tesla is currently out of stock.`, "1");
            assert.equal(onlineStore.isProductAvailable("tesla",-1), `Sorry, tesla is currently out of stock.`, "2");
        });
        it('should return available', () => {
            assert.equal(onlineStore.isProductAvailable("metla",10), `Great! metla is available for purchase.`, "1");
            assert.equal(onlineStore.isProductAvailable("metla",1), `Great! metla is available for purchase.`, "2");
        });
        it('Should throw error ', () => {
            expect(() => onlineStore.isProductAvailable("AAA","aa")).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable("AAA",[12,11])).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable("AAA",{12:2})).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable("AAA",true)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(["AAA","qwe"],12)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable({"AAA":"qwe"},12)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(true,12)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(11,12)).to.throw("Invalid input.");
        });
    });
});