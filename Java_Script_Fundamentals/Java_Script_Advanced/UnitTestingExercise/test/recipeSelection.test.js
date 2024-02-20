import { assert } from "chai";
import { expect } from "chai";
import { recipeSelection } from "../Exercise/recipeSelection.js"

describe('recipeSelection tests', () => {
    describe('isTypeSuitable', () => {
        it('should return available', () => {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegetarian"), "This recipe is not suitable for vegetarians", "1");
        });
        it('should return not available', () => {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegan"), `This recipe is not suitable for vegans`, "2");
            assert.equal(recipeSelection.isTypeSuitable("Dairy", "Vegan"), `This recipe is not suitable for vegans`, "3");
        });
        it('should return available for vaccination', () => {
            assert.equal(recipeSelection.isTypeSuitable("Dairy", "Dairy"), `This recipe is suitable for your dietary restriction`, "1");
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Meat"), `This recipe is suitable for your dietary restriction`, "1");
            assert.equal(recipeSelection.isTypeSuitable("Vegan", "Vegan"), `This recipe is suitable for your dietary restriction`, "1");
        });
        it('Should throw error ', () => {
            expect(() => recipeSelection.isTypeSuitable(12, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable([12], "true")).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable({ 1: 2 }, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable(true, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable("vegan", 12)).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable("vegan", [12])).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable("vegan", { 12: 2 })).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable("vegan", true)).to.throw("Invalid input");
        });
    });
    describe('isItAffordable', () => {
        it('should return available', () => {
            assert.equal(recipeSelection.isItAffordable(1, -1), "You don't have enough budget to afford this recipe", "1");
        });
        it('should return not available', () => {
            assert.equal(recipeSelection.isItAffordable(2, 10), `Recipe ingredients bought. You have 8$ left`, "2");
        });
        it('Should throw error ', () => {
            expect(() => recipeSelection.isItAffordable(12, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(12, ["true"])).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(12, { "true": 2 })).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(12, true)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable("12", 12)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(["12"], 12)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable({ "12": 2 }, 12)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(true, 12)).to.throw("Invalid input");
        });
    });
    describe('getRecipesByCategory', () => {
        it('should return available', () => {
            assert.equal(recipeSelection.getRecipesByCategory([{ title:"Spicy", category: "Asian" }], "Asian").join(''), "Spicy", "xxx");
            //expect(() => recipeSelection.getRecipesByCategory([{ title:"Spicy", category: "Asian" }, { title:"Lut", category: "Bulg" }], "Asian")).to.equal(['Spicys']);
        });
        it('Should throw error ', () => {
            expect(() => recipeSelection.getRecipesByCategory(12, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory("12", "true")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory({12:12}, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory(true, "true")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory([{ title:"Spicy", category: "Asian" }, { title:"Lut", category: "Bulg" }], 12)).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory([{ title:"Spicy", category: "Asian" }, { title:"Lut", category: "Bulg" }], [12])).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory([{ title:"Spicy", category: "Asian" }, { title:"Lut", category: "Bulg" }], {12:1})).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory([{ title:"Spicy", category: "Asian" }, { title:"Lut", category: "Bulg" }], true)).to.throw("Invalid input");
        });
    });
});