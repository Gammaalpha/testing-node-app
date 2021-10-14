export const chuckNorrisEncoder = (MESSAGE: string) => {

    let resultBlock = []
    let currBit = undefined;

    let bitConv = MESSAGE.split('').map(char => char.charCodeAt(0).toString(2).padStart(7, '0')).join('');
    console.log(bitConv);

    for (let index = 0; index < bitConv.length; index++) {
        const element = bitConv[index];
        if (currBit !== element) {
            resultBlock.push(element === '0' ? " 00 " : " 0 ")
            currBit = element
        }
        resultBlock.push('0')
    }
    // console.log("00 0 0 0 00 00 0 0 00 0 0 0");
    console.log(resultBlock.join('').trim());
}