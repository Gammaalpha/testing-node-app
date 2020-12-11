function test() {
    // const regex = /\b(html|test)\b/gi;
    // const regex = new RegExp(`\\b(${pattern})\\b`, "i")
    // const regex2 = new RegExp(/[*]\[([^\]]*)\]:\s*(.+)\n*/)
    const string = "**test**";
    const string2 = "**test \nderp **";


    // const regex = new RegExp(/[(\*|\_|\~){0,}]/, "i");
    const regex2 = new RegExp(/([*_~]*)([a-zA-Z0-9 ]+)([*_~]*)/, "gi");
    // const regex3 = new RegExp(/(\*{1,2}|\_{1,2}|\~{1,2})/, "i")
    console.log(utilGetSideChars(string2, regex2));
};

/**
 * Utility to test and get special characters on the sides of the inputted string. If they are the same, the side character(s) are returned, else null is returned.
 * @param val String input to test
 * @param regex Regex to test against
 */
function utilGetSideChars(val: string, regex: RegExp): string | null {
    const result = (val.split(regex).filter(x => x !== ""));
    if (result[0] === result[result.length - 1]) {
        return result[0]
    }
    return null;
}


test();