import sumIndexTarget from "../src/sumIndexTarget";


describe('SumIndexTarget Test', () => {

    it("Is Null 1", () => {
        const result = sumIndexTarget([], 2);
        expect(result).toBe(null)
    })
    it("Is Null 2", () => {
        const result = sumIndexTarget([0, 3], 2);
        expect(result).toBe(null)
    })
    it("Test pass 1", () => {
        const result = sumIndexTarget([1, 3, 4, 6, 11, 22], 13);
        expect(result).toBe([1, 2, 3])
    })

    it("Test pass 2", () => {
        const result = sumIndexTarget([1, 2, 8, 9, 13, 56, 100, 92, 6, 6, 1000], 1083);
        expect(result).toBe([2, 4, 5, 8, 10])
    })

    it("Test pass 3", () => {
        const result = sumIndexTarget([9, 3, 3, 12], 6);
        expect(result).toBe([1, 2])
    })

    it("Test pass 4", () => {
        const result = sumIndexTarget([0, 1, 2, 3], 1);
        expect(result).toBe([1])
    })
})