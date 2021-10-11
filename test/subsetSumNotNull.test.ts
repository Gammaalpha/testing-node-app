import subsetSum from "../src/subsetSum";

describe('SubsetSum Test Not Null', () => {

    it("Test 1", () => {
        const result = subsetSum([1, 2, 3], 1);
        expect(result).toBe([1])

    })
    it("Test 2", () => {
        const result = subsetSum([9, 3, 3, 12], 6);
        expect(result).toBe([1, 2])
    })



    it("Test 3", () => {
        const result = subsetSum([1, 3, 4, 6, 11, 22], 13);
        expect(result).toBe([1, 2, 3])
    })


    it("Test 4", () => {
        const result = subsetSum([1, 2, 8, 9, 13, 56, 100, 92, 6, 6, 1000], 1083);
        expect(result).toBe([2, 4, 5, 8, 10])
    })
})
