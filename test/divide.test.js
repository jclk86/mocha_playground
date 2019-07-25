const {divide} = require("../index");
// const chai = require("chai");
// const expect = chai.expect;
const expect = require("chai").expect
// ask as many what-if scenarios to test. 

// this uses mocha. The sytnax is similar to jest 
describe("Divide function", () => {
    // new refactored way - without having to define variables
    it("should divide positive integers correctly", () => {
        expect(divide(8,2)).to.equal(4);
    })
    //.equal. Option second arg that is a message
    it("adheres to strict equal", () => {
        expect(2).to.equal(2, "2 === 2"); //second argue used as message if assertion fails
    })

    // old, long way 
    it("should throw an error when divide by zero", ()=> {
        const a = 8, b = 0; // notice, you must define data 
        const fn = () => {// need to wrap in variable or else when it eecutes, node handles it. 
            divide(a,b)
        }
        expect(fn).to.throw() // do not do expect(fn()). You don't want to call it, but lete Chai handle it
    })

    
})