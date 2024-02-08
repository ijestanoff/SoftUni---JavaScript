import { assert } from "chai";
import { mathEnforcer } from "../Exercise/04MathEnforcer.js";

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct result with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.addFive("five"), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.addFive([1, 2]), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.addFive({ pesho: 2 }), "corect if result is undefined");

        });
        it('should return correct result with hole number parameter', () => {
            assert.equal(mathEnforcer.addFive(5), 10, "must be 10");
            assert.equal(mathEnforcer.addFive(0), 5, "must be 5");
            assert.equal(mathEnforcer.addFive(-5), 0, "must be 0");
        });
        it('should return correct result with floating point number parameter', () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5, "corect is 10.5");
            assert.equal(mathEnforcer.addFive(-5.5), -0.5, "corect is -0.5");
            assert.equal(mathEnforcer.addFive(0.5), 5.5, "corect is 5.5");
        });
    });
    describe('subtractTen', () => {
        it('should return correct result with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.subtractTen("five"), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.subtractTen([1, 2]), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.subtractTen({ pesho: 2 }), "corect if result is undefined");
        });
        it('should return correct result with hole number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0, 'corect is 0');
            assert.equal(mathEnforcer.subtractTen(0), -10, 'corect is -10');
            assert.equal(mathEnforcer.subtractTen(-10), -20, 'corect is -20');
        });
        it('should return correct result with floating point number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5, 'corect is 0.5');
            assert.equal(mathEnforcer.subtractTen(-10.5), -20.5, 'corect is -20.5');
            assert.equal(mathEnforcer.subtractTen(-0.5), -10.5, 'corect is -10.5');
        });
    });
    describe('sum', () => {
        it('should return correct result with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.sum("five", 6), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.sum(7, "six"), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.sum("one", "six"), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.sum(2, [1, 2]), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.sum([1, 2], 3), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.sum({ pesho: 2 }, 1), "corect if result is undefined");
            assert.isUndefined(mathEnforcer.sum(-5, { pesho: 2 }), "corect if result is undefined");
        });
        it('should return correct result with hole number parameter', () => {
            assert.equal(mathEnforcer.sum(2, 5), 7, 'corect is 7');
            assert.equal(mathEnforcer.sum(-2, 5), 3, 'corect is 3');
            assert.equal(mathEnforcer.sum(2, -5), -3, 'corect is -3');
        });
        it('should return correct result with floating point number parameter', () => {
            assert.equal(mathEnforcer.sum(2.5, 4.5), 7, 'corect is 7');
            assert.equal(mathEnforcer.sum(-2.5, 4.5), 2, 'corect is 2');
            assert.equal(mathEnforcer.sum(2.5, -4.5), -2, 'corect is -2');
            assert.equal(mathEnforcer.sum(0, -4.5), -4.5, 'corect is -4.5');
            assert.equal(mathEnforcer.sum(1.5, 0), 1.5, 'corect is 1.5');
        });
    });
});