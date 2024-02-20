import { assert } from "chai";
import { expect } from "chai";
import {petAdoptionAgency} from "../Exercise/petAdoptionAgency.js"

describe('petAdoptionAgency tests', () => {
    describe('isPetAvailable ', () => {
        it('should return out of stock', () => {
            assert.equal(petAdoptionAgency.isPetAvailable("pesho",0,true), `Sorry, there are no pesho(s) available for adoption at the agency.`, "1");
            assert.equal(petAdoptionAgency.isPetAvailable("pesho",-2,true), `Sorry, there are no pesho(s) available for adoption at the agency.`, "1");
        });
        it('should return available', () => {
            assert.equal(petAdoptionAgency.isPetAvailable("pesho",1,true), `Great! We have 1 vaccinated pesho(s) available for adoption at the agency.`, "1");
            assert.equal(petAdoptionAgency.isPetAvailable("gosho",25,true), `Great! We have 25 vaccinated gosho(s) available for adoption at the agency.`, "1");
        });
        it('should return available for vaccination', () => {
            assert.equal(petAdoptionAgency.isPetAvailable("pesho",1,false), `Great! We have 1 pesho(s) available for adoption, but they need vaccination.`, "1");
            assert.equal(petAdoptionAgency.isPetAvailable("gosho",12,false), `Great! We have 12 gosho(s) available for adoption, but they need vaccination.`, "1");
        });
        it('Should throw error ', () => {
            expect(() => petAdoptionAgency.isPetAvailable("pesho",11,"gosho")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",11,["gosho"])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",11,{"gosho":12})).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",11,12)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",[11],true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",{11:12},true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",'11',true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("pesho",true,true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable(["pesho"],12,true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable({12:11},12,true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable(12,12,true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable(true,12,true)).to.throw("Invalid input");
        });
    });
    describe('getRecommendedPets ', () => {
        it('should return available', () => {
            assert.equal(petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"},{name:"c",traits:"b"}],"b"), `Recommended pets with the desired traits (b): a, c`, "1");
            assert.equal(petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"},{name:"c",traits:"bc"}],"b"), `Recommended pets with the desired traits (b): a`, "1");
        });
        it('should return out of stock', () => {
            assert.equal(petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"},{name:"c",traits:"b"}],"bc"), `Sorry, we currently have no recommended pets with the desired traits: bc.`, "1");
            assert.equal(petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"}],"c"), `Sorry, we currently have no recommended pets with the desired traits: c.`, "1");
        });
        it('Should throw error ', () => {
            expect(() => petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"}],12)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"}],[12])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"}],{12:11})).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{name:"a",traits:"b"}],true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets({12:11},"true")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(12,"true")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets("{12:11}","true")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(true,"true")).to.throw("Invalid input");
        });
    });
    describe('adoptPet', () => {
        it('should return available', () => {
            assert.equal(petAdoptionAgency.adoptPet("gosho","ligav"), `Congratulations, ligav! You have adopted gosho from the agency. Enjoy your time with your new furry friend!`, "1");
        });
        it('Should throw error ', () => {
            expect(() => petAdoptionAgency.adoptPet(12,"ligav")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet([12],"ligav")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet({12:11},"ligav")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(true,"ligav")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("true",12)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("true",{12:11})).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("true",["ligav"])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("true",true)).to.throw("Invalid input");
        });
    });
});