import { assert } from "chai";
import { expect } from "chai";
import { PaymentPackage } from "../Exercise/12PaymentPackage.js";

describe("Payment Package tests", () => {
    it("Test with standart data", () => {
        let instance = new PaymentPackage('HR Services', 10);

        assert.equal(instance._name, 'HR Services', 'test name');
        assert.equal(instance._value, 10, 'test value');
        assert.equal(instance._VAT, 20, 'test VAT');
        assert.equal(instance._active, true, 'test active');

        instance.active = false;
        assert.equal(instance.active, false, 'test active with false');
        instance.VAT = 21;
        assert.equal(instance.VAT, 21, 'test VAT with 21%');
    });

    describe("Payment Package tests for name", () => {
        it('Should throw error when the new Name is a number', () => {
            expect(() => new PaymentPackage(12, 12)).to.throw('Name must be a non-empty string');
        });
        it('Should throw error when the new Name is a empty string', () => {
            expect(() => new PaymentPackage('', 12)).to.throw('Name must be a non-empty string');
        });
        it('Should throw error when the new Name is a array', () => {
            expect(() => new PaymentPackage(['asd'], 12)).to.throw('Name must be a non-empty string');
        });
        it('Should throw error when the new Name is a object', () => {
            expect(() => new PaymentPackage({ name: 'Peshko' }, 12)).to.throw('Name must be a non-empty string');
        });
        it('Should not throw error when the new Name is a string', () => {
            expect(() => new PaymentPackage('Peshko', 12)).not.to.throw('Name must be a non-empty string');
        });
    });

    describe("Payment Package tests for value", () => {
        it('Should throw error when the new value is a negative number', () => {
            expect(() => new PaymentPackage('Ana', -12)).to.throw('Value must be a non-negative number');
        });
        it('Should throw error when the new value is a empty string', () => {
            expect(() => new PaymentPackage('Ana', 'Ana')).to.throw('Value must be a non-negative number');
        });
        it('Should throw error when the new value is a array', () => {
            expect(() => new PaymentPackage('Ana', [12])).to.throw('Value must be a non-negative number');
        });
        it('Should throw error when the new value is a object', () => {
            expect(() => new PaymentPackage('Ana', { 12: 12 })).to.throw('Value must be a non-negative number');
        });
        it('Should not throw error when the new value is a number', () => {
            expect(() => new PaymentPackage('Ana', 11)).not.to.throw('Value must be a non-negative number');
        });

        
        it('Should not throw error when the new Name is a zero', () => {
            let instance = new PaymentPackage('Ana', 11);
            expect(() => instance.value = 0).not.to.throw('Value must be a non-negative number');
        });
        // it('Set value to null', () => {
        //     let instance = new PaymentPackage('Name', 100);
        //     assert.doesNotThrow(() => instance.value = 0)
        // });
    });

    describe("Payment Package tests for VAT", () => {
        let instance = new PaymentPackage('Ana', 10);
        it('Should throw error when the new Name is a negative number', () => {
            expect(() => instance.VAT = -3).to.throw('VAT must be a non-negative number');
        });
        it('Should throw error when the new Name is a empty string', () => {
            expect(() => instance.VAT = '12').to.throw('VAT must be a non-negative number');
        });
        it('Should throw error when the new Name is a array', () => {
            expect(() => instance.VAT = [-3]).to.throw('VAT must be a non-negative number');
        });
        it('Should throw error when the new Name is a object', () => {
            expect(() => instance.VAT = { 3: 3 }).to.throw('VAT must be a non-negative number');
        });
        it('Should not throw error when the new Name is a number', () => {
            expect(() => instance.VAT = 5).not.to.throw('VAT must be a non-negative number');
        });
        it('Should not throw error when the new Name is a zero', () => {
            expect(() => instance.VAT = 0).not.to.throw('VAT must be a non-negative number');
        });
    });

    describe("Payment Package tests for active", () => {
        let instance = new PaymentPackage('Ana', 10);
        it('Should throw error when the new Name is a number', () => {
            expect(() => instance.active = -3).to.throw('Active status must be a boolean');
        });
        it('Should throw error when the new Name is a empty string', () => {
            expect(() => instance.active = '12').to.throw('Active status must be a boolean');
        });
        it('Should throw error when the new Name is a array', () => {
            expect(() => instance.active = [-3]).to.throw('Active status must be a boolean');
        });
        it('Should throw error when the new Name is a object', () => {
            expect(() => instance.active = { 3: 3 }).to.throw('Active status must be a boolean');
        });
        it('Should not throw error when the new Name is a boolean', () => {
            expect(() => instance.active = false).not.to.throw('Active status must be a boolean');
        });

    });

    describe('Tests toString Method', () => {
        it('Should return a string as all the input is correct', () => {
            let test = new PaymentPackage('gosho', 123);
            let output = [
                `Package: gosho`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(test.toString()).to.equal(output.join('\n'));
        });
        it('Should return a string as all the input is correct', () => {
            let test = new PaymentPackage('pesho', 10);
            test.active = false
            let output = [
                `Package: pesho (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): 12`
            ]
            expect(test.toString()).to.equal(output.join('\n'));
        });
        it('Should return a string as all the input is correct', () => {
            let test = new PaymentPackage('pesho', 10);
            test.VAT = 10;
            let output = [
                `Package: pesho`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 10%): 11`
            ]
            expect(test.toString()).to.equal(output.join('\n'));
        });
        it('Should return a string as all the input is correct', () => {
            let test = new PaymentPackage('pesho', 10);
            test.VAT = 10;
            test.active = false;
            let output = [
                `Package: pesho (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 10%): 11`
            ]
            expect(test.toString()).to.equal(output.join('\n'));
        });
    });
});
