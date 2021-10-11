const subsetSum = (arr: number[], target: number): number[] | null => {
    let result: number[] = [];

    if (target === 0) {
        return []
    }
    if (arr.length) {
        const filteredArr = arr.filter(i => i <= target && i > 0)
        const rows = filteredArr.length + 1;
        const cols = target + 1;
        let solArr = [...Array(rows)].map(_ => Array(cols).fill(false));
        // set first row after position 0 to be false
        for (let index = 0; index <= target; index++) {
            solArr[0][index] = false
        }
        // set first col to be true
        for (let index = 0; index <= filteredArr.length; index++) {
            solArr[index][0] = true
        }

        for (let row = 1; row <= filteredArr.length; row++) {
            for (let col = 1; col <= target; col++) {
                solArr[row][col] = solArr[row - 1][col];
                if (col >= arr[row - 1] && solArr[row][col] === false) {
                    solArr[row][col] = solArr[row][col] || solArr[row - 1][col - filteredArr[row - 1]]
                }
            }

        }

        console.table(solArr);
        console.log(solArr[filteredArr.length][target]);

        if (solArr[filteredArr.length][target]) {

        }


    }

    // console.log(result);

    return result
}

export default subsetSum;