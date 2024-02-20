import { assert } from "chai";
import { expect } from "chai";
import {findNewApartment} from "../Exercise/findApartment.js"

describe('findNewApartment tests', () => {
    describe('isGoodLocation ', () => {
        it('should return not suitable', () => {
            assert.equal(findNewApartment.isGoodLocation("Burgas",true), `This location is not suitable for you.`, "1");
        });
        it('should return not available transport', () => {
            assert.equal(findNewApartment.isGoodLocation("Varna",false), `There is no public transport in area.`, "2");
        });
        it('should return available transport', () => {
            assert.equal(findNewApartment.isGoodLocation("Varna",true), "You can go on home tour!", "3");
        });
        it('Should throw error ', () => {
            expect(() => findNewApartment.isGoodLocation("Burgas",11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Burgas",[11])).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Burgas",{11:2})).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Burgas","as")).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(12,true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation([12],true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation({12:12},true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(true,true)).to.throw("Invalid input!");
        });
    });
    describe('isLargeEnough', () => {
        it('should return suitable', () => {
            assert.equal(findNewApartment.isLargeEnough([10,11,12],9), '10, 11, 12', "1");
            assert.equal(findNewApartment.isLargeEnough([10,11,12],11), '11, 12', "2");
        });
        it('Should throw error ', () => {
            expect(() => findNewApartment.isLargeEnough([],11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([12,15],"11")).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([12,15],[11])).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([12,15],{11:12})).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([12,15],true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(11,11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough({11:12},11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough("11",11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(true,11)).to.throw("Invalid input!");
        });
    });
    describe('isItAffordable', () => {
        it('should return not suitable', () => {
            assert.equal(findNewApartment.isItAffordable(12,11), `You don't have enough money for this house!`, "1");
            assert.equal(findNewApartment.isItAffordable(12,1), `You don't have enough money for this house!`, "1");
        });
        it('should return available', () => {
            assert.equal(findNewApartment.isItAffordable(11,12), `You can afford this home!`, "2");
            assert.equal(findNewApartment.isItAffordable(12,12), `You can afford this home!`, "2");
        });
        it('Should throw error ', () => {
            expect(() => findNewApartment.isItAffordable(0,11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-1,11)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(1,0)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(1,-1)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(1,"12")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(1,[12])).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(1,{12:2})).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(1,true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable("11",2)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable([11],2)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable({11:2},2)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(true,2)).to.throw("Invalid input!");
        });
    });
});