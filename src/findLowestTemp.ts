/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

export const findLowestTemp = (inputs: string[]) => {

    let closestToZero = parseInt(inputs[0]);
    for (let i = 1; i < inputs.length; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        let absClo = Math.abs(closestToZero)
        let absCurr = Math.abs(t);
        if (absCurr < absClo) {
            closestToZero = t
        }
        else if (absClo === absCurr && closestToZero < 0) {
            closestToZero = t
        }
    }

    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');

    console.log(closestToZero);
}