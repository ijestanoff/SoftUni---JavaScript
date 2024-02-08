import { assert } from "chai";
import { lookupChar } from "../Exercise/03charLookup.js";

describe("Lookup Char", () => {
    describe("test input types", () => {
        it("try with different types", () => {
            assert.isUndefined(lookupChar([1, 2], 2), 'return undefined');
            assert.isUndefined(lookupChar({ pesho: 2 }, 2), 'return undefined');
            assert.isUndefined(lookupChar(3, 2), 'return undefined');
            assert.isUndefined(lookupChar("string", [1, 2]), 'return undefined');
            assert.isUndefined(lookupChar("string", { pesho: 3 }), 'return undefined');
            assert.isUndefined(lookupChar("string", "false"), 'return undefined');
            assert.isUndefined(lookupChar("string", 5.5), 'return undefined');
        });

    });
    describe("test for correct index", () => {
        it ("try with different false index", () => {
            assert.equal(lookupChar('string',-1),"Incorrect index", "incorrect");
            assert.equal(lookupChar('string',6),"Incorrect index", "incorrect");
            assert.equal(lookupChar('string',10),"Incorrect index", "incorrect");
        });
    });
    describe("test for correct result", () => {
        it ("try with correct index", () => {
            assert.equal(lookupChar('string',0),'s','correct is s');
            assert.equal(lookupChar('string',5),'g','correct is s');
            assert.equal(lookupChar('string',1),'t','correct is s');
        });
    });
});
