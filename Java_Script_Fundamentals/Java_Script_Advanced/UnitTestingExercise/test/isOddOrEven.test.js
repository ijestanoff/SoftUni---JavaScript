import { assert } from "chai";
import {isOddOrEven} from "../Exercise/evenOrOdd.js";

describe ("isOddOrEven", () => {
    it ("test with non string value", () => {
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "return type must be undefined");
    });
    it ("test with string", () => {
        assert.equal(isOddOrEven('gosho'), "odd", "return odd");
        assert.equal(isOddOrEven('goshko'), "even", "return odd");
    });
    it ("test with number and array", () => {
        assert.isNotOk(isOddOrEven(5), "everyfing is fine");
        assert.isNotOk(isOddOrEven([]), "everifing is fine");
    })
})
