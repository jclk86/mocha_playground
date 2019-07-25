const {sort} = require("../index")
const expect = require("chai").expect

describe("sort function", () => {
    it("sorts array in ascending order correctly", () => {
        expect(sort([2,1,3,6,5])).to.deep.equal([1,2,3,5,6])
    })

    it("sorts reversed array in ascending order", () => {
        expect(sort([5,4,3,2,1])).to.deep.equal([1,2,3,4,5])
    })
})