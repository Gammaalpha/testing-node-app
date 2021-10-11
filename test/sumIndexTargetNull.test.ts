import sumIndexTarget from "../src/sumIndexTarget";


describe('SumIndexTarget Test Null Check', () => {

    it("Is Null 1", () => {
        const result = sumIndexTarget([], 2);
        expect(result).toBe(null)
    })
    it("Is Null 2", () => {
        const result = sumIndexTarget([0, 3], 2);
        expect(result).toBe(null)
    })
})