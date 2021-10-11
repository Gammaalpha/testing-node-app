
/**
 * You have a list of N+1 integers between 1 and N. You know there's at least one duplicate, but there might be more. For example, if N=4, your list might be 
[2, 4, 1, 3, 2] or it might be [3, 1, 1, 3, 4]. Write a function that takes in the list and N as parameters and returns a number that appears in the list more than once. (That is, in the second example, you can return '1' or '3' -- you don't have to return both.)

Constraints: 
•	Faster than O(n^2)
•	O(1) space
•	Cannot manipulate the original list (for example sorting).
 */
function firstDuplicateFinder(list: number[], N: any) {
    let dupObj: any = {};
    for (let index = 0; index < list.length; index++) {
        if (dupObj[list[index]] === undefined) {
            dupObj = {
                ...dupObj,
                [list[index]]: 1
            }
        }
        else {
            return list[index]
        }
    }
};
const dataset1 = [2, 4, 1, 3, 2];
const dataset2 = [3, 1, 1, 3, 4]
console.log(firstDuplicateFinder(dataset1, 4))
console.log(firstDuplicateFinder(dataset2, 4))



