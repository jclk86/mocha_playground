const {sum} = require("../index");
const expect = require("chai").expect

// using .a to check for type
describe('Array sum', () => {
    it('should return a promise', () => {
       expect(sum([1,2,3])).to.be.a('promise');
    });

    it('should sum an array of numbers', () => {
        return sum([1,2,3])
           .then(ans => {
             expect(ans).to.equal(6);
           });
      });

      // failing case 
      it('should sum an array of numbers and numeric strings', () => {
        return sum([1,'2',3])
           .then(ans => {
             expect(ans).to.equal(6);
           });
      });
      // since array can sum up string and num, this makes sure the summed value is still a num
      it('should sum an array of numbers and non-numeric strings', () => {
        return sum([1,'2',3, 'a'])
           .then(ans => {
            //  expect(ans).to.equal(6);
            expect(ans).to.be.a("number").that.equal(6)
           });
      });
});