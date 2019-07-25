const {diff} = require("../index")
const expect = require("chai").expect

describe("Diff function", () => {
    it('should return a if no common elements', () => {
        expect(diff([1,2,3], [4,5,6])).to.deep.equal([1,2,3]);
    });
    // purposefully removed .deep. This fails, even tho both are equal 
    it('should return [] if same', () => {
        expect(diff([1,2,3], [1,2,3])).to.equal([]);
    })
    
    it('should return correctly if some elements are removed', () => {
        expect(diff([1,2,3], [2])).to.deep.equal([1,3]);
    })
    // diff removes all same items of 2 array. So should result in missing 1 below
    it('should remove 1 from [1,2,3]', () => {
        expect(diff([1,2,3], [1])).to.not.include(1);
    })
})