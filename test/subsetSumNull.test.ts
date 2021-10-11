import subsetSum from "../src/subsetSum";


describe('SumIndexTarget Test Null Check', () => {

    it("Is empty 1", () => {
        const result = subsetSum([], 2);
        expect(result).toBe([])
    })
    it("Is empty 2", () => {
        const result = subsetSum([0, 3], 2);
        expect(result).toBe([])
    })
})