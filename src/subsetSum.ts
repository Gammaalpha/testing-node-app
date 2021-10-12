
/**
 * Returns an array of index for items which add
 * up to the passed target value from the passed
 * array.
 * @param arr Array of numbers
 * @param target total sum target to reach
 * @returns array of index
 */
const subsetSum = (arr: number[], target: number): number[] => {
    let result: number[] = [];

    if (target === 0 || arr.length === 0) {
        return []
    }
    const rows = arr.length + 1;
    const cols = target + 1;
    let solArr = [...Array(rows)].map(_ => Array(cols).fill(false));
    // set first col to be true
    for (let index = 0; index <= arr.length; index++) {
        solArr[index][0] = true
    }

    for (let row = 1; row <= arr.length; row++) {
        for (let col = 1; col <= target; col++) {
            solArr[row][col] = solArr[row - 1][col];
            if (solArr[row][col] === false && col >= arr[row - 1]) {
                solArr[row][col] = solArr[row][col] || solArr[row - 1][col - arr[row - 1]]
            }
        }

    }

    console.table(solArr);

    // get the elements index that make up one of the set
    if (solArr[arr.length][target]) {
        let colPos = target;
        for (let row = arr.length + 1; row > 0; row--) {
            if (!solArr[row - 1][colPos]) {
                colPos = colPos - arr[row - 1];
                result.unshift(row - 1)
            }
        }
    }
    return result
}

export default subsetSum;