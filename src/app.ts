function test() {
    // const regex = /\b(html|test)\b/gi;
    // const regex = new RegExp(`\\b(${pattern})\\b`, "i")
    // const regex2 = new RegExp(/[*]\[([^\]]*)\]:\s*(.+)\n*/)
    const string = "test ";

    console.log(utilRightSpace(string));


};


function utilRightSpace(val: string): boolean {
    let valLen = val.length;
    return val[valLen-1] === " " ? true : false
};


test();