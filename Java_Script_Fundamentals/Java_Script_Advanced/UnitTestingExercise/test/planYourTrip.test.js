import { assert } from "chai";
import { expect } from "chai";
import { planYourTrip } from "../Exercise/planYourTrip.js"

describe('planYourTrip tests', () => {
    describe('choosingDestination', () => {
        it('Should throw error ', () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Summer", 2023)).to.throw("Invalid Year!");
            expect(() => planYourTrip.choosingDestination("Solun", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
        });
        it('should return available', () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), `Great choice! The Winter is the perfect time to visit the Ski Resort.`, "2");
        });
        it('should return available for vaccination', () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), `Consider visiting during the Winter for the best experience at the Ski Resort.`, "1");
        });
    });
    describe('exploreOptions', () => {
        it('should return Skiing ...', () => {
            assert.equal(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 2), `Skiing , Snowboarding `, "2");
        });
        it('Should throw error ', () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], '2')).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], [2])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], {2:2})).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], true)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(12, 3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions("12", 3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions({12:2}, 3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(true, 3)).to.throw("Invalid Information!");
        });
    });
    describe('estimateExpenses', () => {
        it('should return cost', () => {
            assert.equal(planYourTrip.estimateExpenses(100, 2), `The trip is budget-friendly, estimated cost is $200.00.`, "2");
        });
        it('should return high cost', () => {
            assert.equal(planYourTrip.estimateExpenses(600, 20), `The estimated cost for the trip is $12000.00, plan accordingly.`, "2");
        });
        it('Should throw error ', () => {
            expect(() => planYourTrip.estimateExpenses( "1", 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( [1], 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( {1:2}, 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( true, 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( 1, "2")).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( 1, [2])).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( 1, {1:2})).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses( 1, true)).to.throw("Invalid Information!");
        });
    });
});