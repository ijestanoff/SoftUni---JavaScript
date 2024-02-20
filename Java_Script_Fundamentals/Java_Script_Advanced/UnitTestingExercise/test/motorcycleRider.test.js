import { assert } from "chai";
import { expect } from "chai";
import { motorcycleRider } from "../Exercise/MotorcycleRider.js"

describe('MotorcycleRider tests', () => {
    describe('licenseRestriction ', () => {
        it('should return correct result', () => {
            assert.equal(motorcycleRider.licenseRestriction("AM"), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.", "1");
            assert.equal(motorcycleRider.licenseRestriction("A1"), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.", "2");
            assert.equal(motorcycleRider.licenseRestriction("A2"), "Motorcycles with maximum power of 35KW. and the minimum age is 18.", "3");
            assert.equal(motorcycleRider.licenseRestriction("A"), "No motorcycle restrictions, and the minimum age is 24.", "4");
        });
        it('Should throw error ', () => {
            expect(() => motorcycleRider.licenseRestriction("AAA")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(10)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(["AAA"])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction({ "AAA": 'A2' })).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(true)).to.throw("Invalid Information!");
        });
    });
    describe('motorcycleShowroom  ', () => {
        it('should return correct result', () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["125", "250"], 500), "There are 2 available motorcycles matching your criteria!", "1");
            assert.equal(motorcycleRider.motorcycleShowroom(["125", "250"], 200), "There are 1 available motorcycles matching your criteria!", "2");
            assert.equal(motorcycleRider.motorcycleShowroom(["125", "250", "500"], 600), "There are 3 available motorcycles matching your criteria!", "2");
            assert.equal(motorcycleRider.motorcycleShowroom(["asd"], 600), "There are 0 available motorcycles matching your criteria!", "2");
        });
        it('Should throw error ', () => {
            expect(() => motorcycleRider.motorcycleShowroom("AAA", 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(10, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250"], 40)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom({ "AAA": 'A2' }, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(true, 100)).to.throw("Invalid Information!");
        });
    });
    describe('otherSpendings', () => {
        it('should return correct result', () => {
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil", "oil filter"], false), "You spend $600.00 for equipment and consumables!", "1");
            assert.equal(motorcycleRider.otherSpendings(["helmet"],["oil filter"], false), "You spend $230.00 for equipment and consumables!", "1");
            assert.equal(motorcycleRider.otherSpendings(["jacked"],["engine oil"], false), "You spend $370.00 for equipment and consumables!", "1");
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil", "oil filter"], true), "You spend $540.00 for equipment and consumables with 10% discount!", "1");
            assert.equal(motorcycleRider.otherSpendings(["jacked"],["oil filter"], true), "You spend $297.00 for equipment and consumables with 10% discount!", "1");
            assert.equal(motorcycleRider.otherSpendings(["helmet"],["engine oil"], true), "You spend $243.00 for equipment and consumables with 10% discount!", "1");
        });
        it('Should throw error ', () => {
            expect(() => motorcycleRider.otherSpendings(["125", "250"],["125", "250"], 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],["125", "250"], "as")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],["125", "250"], [10,11])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],["125", "250"], {100:1})).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],true, true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],11, true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],"12", true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["125", "250"],{12:1}, true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(true,["125", "250"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(12,["125", "250"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings("12",["125", "250"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings({12:1},["125", "250"], true)).to.throw("Invalid Information!");
        });
    });
});
